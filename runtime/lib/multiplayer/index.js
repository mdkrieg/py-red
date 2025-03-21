let runtime

/**
 * Active sessions, mapped by multiplayer session ids
 */
const sessions = new Map()

/**
 * Active connections, mapping comms session to multiplayer session
 */
const connections = new Map()


function getSessionsList() {
    return Array.from(sessions.values()).filter(session => session.active)
}

module.exports = {
    init: function(_runtime) {
        runtime = _runtime
        runtime.events.on('comms:connection-removed', (opts) => {
            const existingSessionId = connections.get(opts.session)
            if (existingSessionId) {
                connections.delete(opts.session)
                const session = sessions.get(existingSessionId)
                if (session) {
                    session.active = false
                    session.idleTimeout = setTimeout(() => {
                        sessions.delete(existingSessionId)
                    }, 30000)
                    runtime.events.emit('comms', {
                        topic: "multiplayer/connection-removed",
                        data: { session: existingSessionId }
                    })
                }
            }
        })
        runtime.events.on('comms:message:multiplayer/connect', (opts) => {
            let session
            if (!sessions.has(opts.data.session)) {
                // Brand new session
                let user = opts.user
                if (!user || user.anonymous) {
                    user = user || { anonymous: true }
                    user.username = `Anon ${Math.floor(Math.random()*100)}`
                }
                session = {
                    session: opts.data.session,
                    user,
                    active: true
                }
                sessions.set(opts.data.session, session)
                connections.set(opts.session, opts.data.session)
                runtime.log.trace(`multiplayer new session:${opts.data.session} user:${user.username}`)
            } else {
                // Reconnected connection - keep existing state
                connections.set(opts.session, opts.data.session)
                // const existingConnection  = connections.get(opts.data.session)
                session = sessions.get(opts.data.session)
                session.active = true
                runtime.log.trace(`multiplayer reconnected session:${opts.data.session} user:${session.user.username}`)
                clearTimeout(session.idleTimeout)
            }
            // Tell existing sessions about the new connection
            runtime.events.emit('comms', {
                topic: "multiplayer/connection-added",
                excludeSession: opts.session,
                data: session
            })

            // Send init info to new connection
            const initPacket = {
                topic: "multiplayer/init",
                data: { sessions: getSessionsList() },
                session: opts.session
            }
            // console.log('<<', initPacket)
            runtime.events.emit('comms', initPacket)
        })
        runtime.events.on('comms:message:multiplayer/disconnect', (opts) => {
            const existingSessionId = connections.get(opts.session)
            connections.delete(opts.session)
            sessions.delete(existingSessionId)

            runtime.events.emit('comms', {
                topic: "multiplayer/connection-removed",
                data: { session: existingSessionId, disconnected: true }
            })
        })
        runtime.events.on('comms:message:multiplayer/location', (opts) => {
            // console.log('>>>', opts.user, opts.data)

            const sessionId = connections.get(opts.session)
            const session = sessions.get(sessionId)

            if (session) {
                if (opts.user) {
                    if (session.user.anonymous !== opts.user.anonymous) {
                        session.user = opts.user
                        runtime.events.emit('comms', {
                            topic: 'multiplayer/connection-added',
                            excludeSession: opts.session,
                            data: session
                        })
                    }
                }

                session.location = opts.data

                const payload = {
                    session: sessionId,
                    workspace: opts.data.workspace,
                    node: opts.data.node,
                    cursor: opts.data.cursor
                }
                runtime.events.emit('comms', {
                    topic: 'multiplayer/location',
                    data: payload,
                    excludeSession: opts.session
                })
            }
        })
    }
}