var runtime=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function p(e,r,n,o){var i=r&&r.prototype instanceof y?r:y,s=Object.create(i.prototype),u=new P(o||[]);return a(s,"_invoke",{value:function(e,r,n){var a=l;return function(o,i){if(a===d)throw new Error("Generator is already running");if(a===v){if("throw"===o)throw i;return{value:t,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var u=T(s,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===l)throw a=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=d;var c=f(e,r,n);if("normal"===c.type){if(a=n.done?v:h,c.arg===b)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=v,n.method="throw",n.arg=c.arg)}}}(e,n,u)}),s}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=p;var l="suspendedStart",h="suspendedYield",d="executing",v="completed",b={};function y(){}function g(){}function m(){}var x={};c(x,i,function(){return this});var k=Object.getPrototypeOf,w=k&&k(k(j([])));w&&w!==r&&n.call(w,i)&&(x=w);var E=m.prototype=y.prototype=Object.create(x);function A(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,s){var u=f(e[a],e,o);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(p).then(function(e){c.value=e,i(c)},function(e){return r("throw",e,i,s)})}s(u.arg)}(a,o,r,i)})}return r=r?r.then(i,i):i()}})}function T(e,r){var n=r.method,a=e.iterator[n];if(a===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,T(e,r),"throw"===r.method)?b:("return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b);var o=f(a,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function D(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=m,a(E,"constructor",{value:m,configurable:!0}),a(m,"constructor",{value:g,configurable:!0}),g.displayName=c(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,u,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},A(S.prototype),c(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(p(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},A(E),c(E,u,"Generator"),c(E,i,function(){return this}),c(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(D),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return s.type="throw",s.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),b},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),D(r),b}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;D(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}Number.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},String.fromCodePoint||function(e){var t=function(t){for(var r=[],n=0,a="",o=0,i=arguments.length;o!==i;++o){var s=+arguments[o];if(!(s<1114111&&s>>>0===s))throw RangeError("Invalid code point: "+s);s<=65535?n=r.push(s):(s-=65536,n=r.push(55296+(s>>10),s%1024+56320)),n>=16383&&(a+=e.apply(null,r),r.length=0)}return a+e.apply(null,r)};try{Object.defineProperty(String,"fromCodePoint",{value:t,configurable:!0,writable:!0})}catch(e){String.fromCodePoint=t}}(String.fromCharCode),Object.is||(Object.is=function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}),String.prototype.codePointAt||function(){"use strict";var e=function(){try{var e={},t=Object.defineProperty,r=t(e,e,e)&&t}catch(e){}return r}(),t=function(e){if(null==this)throw TypeError();var t=String(this),r=t.length,n=e?Number(e):0;if(n!=n&&(n=0),!(n<0||n>=r)){var a,o=t.charCodeAt(n);return o>=55296&&o<=56319&&r>n+1&&(a=t.charCodeAt(n+1))>=56320&&a<=57343?1024*(o-55296)+a-56320+65536:o}};e?e(String.prototype,"codePointAt",{value:t,configurable:!0,writable:!0}):String.prototype.codePointAt=t}(),Math.log10=Math.log10||function(e){return Math.log(e)*Math.LOG10E},function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).jsonata=e()}}(function(){return function(){return function e(t,r,n){function a(i,s){if(!r[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var p=r[i]={exports:{}};t[i][0].call(p.exports,function(e){return a(t[i][1][e]||e)},p,p.exports,e,t,r,n)}return r[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)a(n[i]);return a}}()({1:[function(e,t,r){"use strict";var n=e("./utils"),a=function(){var e=n.stringToArray,t=["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"],r=["Zeroth","First","Second","Third","Fourth","Fifth","Sixth","Seventh","Eighth","Ninth","Tenth","Eleventh","Twelfth","Thirteenth","Fourteenth","Fifteenth","Sixteenth","Seventeenth","Eighteenth","Nineteenth"],a=["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety","Hundred"],o=["Thousand","Million","Billion","Trillion"];var i={};t.forEach(function(e,t){i[e.toLowerCase()]=t}),r.forEach(function(e,t){i[e.toLowerCase()]=t}),a.forEach(function(e,t){var r=e.toLowerCase();i[r]=10*(t+2),i[r.substring(0,e.length-1)+"ieth"]=i[r]}),i.hundredth=100,o.forEach(function(e,t){var r=e.toLowerCase(),n=Math.pow(10,3*(t+1));i[r]=n,i[r+"th"]=n});var s=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],u={M:1e3,D:500,C:100,L:50,X:10,V:5,I:1};function c(e,t){if(void 0!==e)return l(e=Math.floor(e),d(t))}var p={DECIMAL:"decimal",LETTERS:"letters",ROMAN:"roman",WORDS:"words",SEQUENCE:"sequence"},f={UPPER:"upper",LOWER:"lower",TITLE:"title"};function l(n,i){var u,c=n<0;switch(n=Math.abs(n),i.primary){case p.LETTERS:u=function(e,t){for(var r=[],n=t.charCodeAt(0);e>0;)r.unshift(String.fromCharCode((e-1)%26+n)),e=Math.floor((e-1)/26);return r.join("")}(n,i.case===f.UPPER?"A":"a");break;case p.ROMAN:u=function e(t){for(var r=0;r<s.length;r++){var n=s[r];if(t>=n[0])return n[1]+e(t-n[0])}return""}(n),i.case===f.UPPER&&(u=u.toUpperCase());break;case p.WORDS:u=function(e,n){return function e(n,i,s){var u="";if(n<=19)u=(i?" and ":"")+(s?r[n]:t[n]);else if(n<100){var c=Math.floor(n/10),p=n%10;u=(i?" and ":"")+a[c-2],p>0?u+="-"+e(p,!1,s):s&&(u=u.substring(0,u.length-1)+"ieth")}else if(n<1e3){var f=Math.floor(n/100),l=n%100;u=(i?", ":"")+t[f]+" Hundred",l>0?u+=e(l,!0,s):s&&(u+="th")}else{var h=Math.floor(Math.log10(n)/3);h>o.length&&(h=o.length);var d=Math.pow(10,3*h),v=Math.floor(n/d),b=n-v*d;u=(i?", ":"")+e(v,!1,!1)+" "+o[h-1],b>0?u+=e(b,!0,s):s&&(u+="th")}return u}(e,!1,n)}(n,i.ordinal),i.case===f.UPPER?u=u.toUpperCase():i.case===f.LOWER&&(u=u.toLowerCase());break;case p.DECIMAL:u=""+n;var l=i.mandatoryDigits-u.length;if(l>0){var h=new Array(l+1).join("0");u=h+u}if(48!==i.zeroCode&&(u=e(u).map(function(e){return String.fromCodePoint(e.codePointAt(0)+i.zeroCode-48)}).join("")),i.regular)for(var d=Math.floor((u.length-1)/i.groupingSeparators.position);d>0;d--){var v=u.length-d*i.groupingSeparators.position;u=u.substr(0,v)+i.groupingSeparators.character+u.substr(v)}else i.groupingSeparators.reverse().forEach(function(e){var t=u.length-e.position;u=u.substr(0,t)+e.character+u.substr(t)});if(i.ordinal){var b={1:"st",2:"nd",3:"rd"}[u[u.length-1]];(!b||u.length>1&&"1"===u[u.length-2])&&(b="th"),u+=b}break;case p.SEQUENCE:throw{code:"D3130",value:i.token}}return c&&(u="-"+u),u}var h=[48,1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296];function d(t){var r,n={type:"integer",primary:p.DECIMAL,case:f.LOWER,ordinal:!1},a=t.lastIndexOf(";");switch(-1===a?r=t:(r=t.substring(0,a),"o"===t.substring(a+1)[0]&&(n.ordinal=!0)),r){case"A":n.case=f.UPPER;case"a":n.primary=p.LETTERS;break;case"I":n.case=f.UPPER;case"i":n.primary=p.ROMAN;break;case"W":n.case=f.UPPER,n.primary=p.WORDS;break;case"Ww":n.case=f.TITLE,n.primary=p.WORDS;break;case"w":n.primary=p.WORDS;break;default:var o=null,i=0,s=0,u=[],c=0;if(e(r).map(function(e){return e.codePointAt(0)}).reverse().forEach(function(e){for(var t=!1,r=0;r<h.length;r++){var n=h[r];if(e>=n&&e<=n+9){if(t=!0,i++,c++,null===o)o=n;else if(n!==o)throw{code:"D3131"};break}}t||(35===e?(c++,s++):u.push({position:c,character:String.fromCodePoint(e)}))}),i>0){n.primary=p.DECIMAL,n.zeroCode=o,n.mandatoryDigits=i,n.optionalDigits=s;var l=function(e){if(0===e.length)return 0;for(var t=e[0].character,r=1;r<e.length;r++)if(e[r].character!==t)return 0;for(var n=e.map(function(e){return e.position}),a=n.reduce(function e(t,r){return 0===r?t:e(r,t%r)}),o=1;o<=n.length;o++)if(-1===n.indexOf(o*a))return 0;return a}(u);l>0?(n.regular=!0,n.groupingSeparators={position:l,character:u[0].character}):(n.regular=!1,n.groupingSeparators=u)}else n.primary=p.SEQUENCE,n.token=r}return n}var v={Y:"1",M:"1",D:"1",d:"1",F:"n",W:"1",w:"1",X:"1",x:"1",H:"1",h:"1",P:"n",m:"01",s:"01",f:"1",Z:"01:01",z:"01:01",C:"n",E:"n"};function b(e){for(var t=[],r={type:"datetime",parts:t},n=function(r,n){if(n>r){var a=e.substring(r,n);a=a.split("]]").join("]"),t.push({type:"literal",value:a})}},a=0,o=0;o<e.length;){if("["===e.charAt(o)){if("["===e.charAt(o+1)){n(a,o),t.push({type:"literal",value:"["}),a=o+=2;continue}if(n(a,o),a=o,-1===(o=e.indexOf("]",a)))throw{code:"D3135"};var i,s=e.substring(a+1,o),u={type:"marker",component:(s=s.split(/\s+/).join("")).charAt(0)},c=s.lastIndexOf(",");if(-1!==c){var p=s.substring(c+1),l=p.indexOf("-"),h=void 0,b=void 0,y=function(e){return void 0===e||"*"===e?void 0:parseInt(e)};-1===l?h=p:(h=p.substring(0,l),b=p.substring(l+1));var g={min:y(h),max:y(b)};u.width=g,i=s.substring(1,c)}else i=s.substring(1);if(1===i.length)u.presentation1=i;else if(i.length>1){var m=i.charAt(i.length-1);-1!=="atco".indexOf(m)?(u.presentation2=m,"o"===m&&(u.ordinal=!0),u.presentation1=i.substring(0,i.length-1)):u.presentation1=i}else u.presentation1=v[u.component];if(void 0===u.presentation1)throw{code:"D3132",value:u.component};if("n"===u.presentation1[0])u.names=f.LOWER;else if("N"===u.presentation1[0])"n"===u.presentation1[1]?u.names=f.TITLE:u.names=f.UPPER;else if(-1!=="YMDdFWwXxHhmsf".indexOf(u.component)){var x=u.presentation1;if(u.presentation2&&(x+=";"+u.presentation2),u.integerFormat=d(x),u.width&&void 0!==u.width.min&&u.integerFormat.mandatoryDigits<u.width.min&&(u.integerFormat.mandatoryDigits=u.width.min),-1!=="YMD".indexOf(u.component))if(u.n=-1,u.width&&void 0!==u.width.max)u.n=u.width.max,u.integerFormat.mandatoryDigits=u.n;else{var k=u.integerFormat.mandatoryDigits+u.integerFormat.optionalDigits;k>=2&&(u.n=k)}}"Z"!==u.component&&"z"!==u.component||(u.integerFormat=d(u.presentation1)),t.push(u),a=o+1}o++}return n(a,o),r}var y=["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],g=["January","February","March","April","May","June","July","August","September","October","November","December"],m=function(e){var t=Date.UTC(e.year,e.month),r=new Date(t).getUTCDay();return 0===r&&(r=7),r>4?t+864e5*(8-r):t-864e5*(r-1)},x=function e(t,r){return{year:t,month:r,nextMonth:function(){return 11===r?e(t+1,0):e(t,r+1)},previousMonth:function(){return 0===r?e(t-1,11):e(t,r-1)},nextYear:function(){return e(t+1,r)},previousYear:function(){return e(t-1,r)}}},k=function(e,t){return(t-e)/6048e5+1},w=function(e,t){var r;switch(t){case"Y":r=e.getUTCFullYear();break;case"M":r=e.getUTCMonth()+1;break;case"D":r=e.getUTCDate();break;case"d":r=(Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate())-Date.UTC(e.getUTCFullYear(),0))/864e5+1;break;case"F":0===(r=e.getUTCDay())&&(r=7);break;case"W":var n=x(e.getUTCFullYear(),0),a=m(n),o=Date.UTC(n.year,e.getUTCMonth(),e.getUTCDate()),i=k(a,o);if(i>52)o>=m(n.nextYear())&&(i=1);else if(i<1){var s=m(n.previousYear());i=k(s,o)}r=Math.floor(i);break;case"w":var u=x(e.getUTCFullYear(),e.getUTCMonth()),c=m(u),p=Date.UTC(u.year,u.month,e.getUTCDate()),f=k(c,p);if(f>4)p>=m(u.nextMonth())&&(f=1);else if(f<1){var l=m(u.previousMonth());f=k(l,p)}r=Math.floor(f);break;case"X":var h=x(e.getUTCFullYear(),0),d=m(h),v=m(h.nextYear()),b=e.getTime();r=b<d?h.year-1:b>=v?h.year+1:h.year;break;case"x":var y=x(e.getUTCFullYear(),e.getUTCMonth()),g=m(y),w=y.nextMonth(),E=m(w),A=e.getTime();r=A<g?y.previousMonth().month+1:A>=E?w.month+1:y.month+1;break;case"H":r=e.getUTCHours();break;case"h":r=e.getUTCHours(),0===(r%=12)&&(r=12);break;case"P":r=e.getUTCHours()>=12?"pm":"am";break;case"m":r=e.getUTCMinutes();break;case"s":r=e.getUTCSeconds();break;case"f":r=e.getUTCMilliseconds();break;case"Z":case"z":break;case"C":case"E":r="ISO"}return r},E=null;function A(e,t,r){var n=0,a=0;if(void 0!==r){var o=parseInt(r);n=Math.floor(o/100),a=o%100}var i;void 0===t?(null===E&&(E=b("[Y0001]-[M01]-[D01]T[H01]:[m01]:[s01].[f001][Z01:01t]")),i=E):i=b(t);var s=new Date(e+60*(60*n+a)*1e3),u="";return i.parts.forEach(function(e){"literal"===e.type?u+=e.value:u+=function(e,t){var r=w(e,t.component);if(-1!=="YMDdFWwXxHhms".indexOf(t.component))if("Y"===t.component&&-1!==t.n&&(r%=Math.pow(10,t.n)),t.names){if("M"===t.component||"x"===t.component)r=g[r-1];else{if("F"!==t.component)throw{code:"D3133",value:t.component};r=y[r]}t.names===f.UPPER?r=r.toUpperCase():t.names===f.LOWER&&(r=r.toLowerCase()),t.width&&r.length>t.width.max&&(r=r.substring(0,t.width.max))}else r=l(r,t.integerFormat);else if("f"===t.component)r=l(r,t.integerFormat);else if("Z"===t.component||"z"===t.component){var o=100*n+a;if(t.integerFormat.regular)r=l(o,t.integerFormat);else{var i=t.integerFormat.mandatoryDigits;if(1===i||2===i)r=l(n,t.integerFormat),0!==a&&(r+=":"+c(a,"00"));else{if(3!==i&&4!==i)throw{code:"D3134",value:i};r=l(o,t.integerFormat)}}o>=0&&(r="+"+r),"z"===t.component&&(r="GMT"+r),0===o&&"t"===t.presentation2&&(r="Z")}else"P"===t.component&&t.names===f.UPPER&&(r=r.toUpperCase());return r}(s,e)}),u}function S(e){var t={};if("datetime"===e.type)t.type="datetime",t.parts=e.parts.map(function(e){var t={};if("literal"===e.type)t.regex=e.value.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");else if("Z"===e.component||"z"===e.component){var r;Array.isArray(e.integerFormat.groupingSeparators)||(r=e.integerFormat.groupingSeparators),t.regex="","z"===e.component&&(t.regex="GMT"),t.regex+="[-+][0-9]+",r&&(t.regex+=r.character+"[0-9]+"),t.parse=function(t){"z"===e.component&&(t=t.substring(3));var n=0,a=0;r?(n=Number.parseInt(t.substring(0,t.indexOf(r.character))),a=Number.parseInt(t.substring(t.indexOf(r.character)+1))):t.length-1<=2?n=Number.parseInt(t):(n=Number.parseInt(t.substring(0,3)),a=Number.parseInt(t.substring(3)));return 60*n+a}}else if(e.integerFormat)e.integerFormat.n=e.n,t=S(e.integerFormat);else{t.regex="[a-zA-Z]+";var n={};if("M"===e.component||"x"===e.component)g.forEach(function(t,r){e.width&&e.width.max?n[t.substring(0,e.width.max)]=r+1:n[t]=r+1});else if("F"===e.component)y.forEach(function(t,r){r>0&&(e.width&&e.width.max?n[t.substring(0,e.width.max)]=r:n[t]=r)});else{if("P"!==e.component)throw{code:"D3133",value:e.component};n={am:0,AM:0,pm:1,PM:1}}t.parse=function(e){return n[e]}}return t.component=e.component,t});else{t.type="integer";var r,n=e.case===f.UPPER;switch(r=e.n&&e.n>0?0===e.optionalDigits?"{".concat(e.n,"}"):"{".concat(e.n-e.optionalDigits,",").concat(e.n,"}"):"+",e.primary){case p.LETTERS:t.regex=n?"[A-Z]+":"[a-z]+",t.parse=function(e){return function(e,t){for(var r=t.charCodeAt(0),n=0,a=0;a<e.length;a++)n+=(e.charCodeAt(e.length-a-1)-r+1)*Math.pow(26,a);return n}(e,n?"A":"a")};break;case p.ROMAN:t.regex=n?"[MDCLXVI]+":"[mdclxvi]+",t.parse=function(e){return function(e){for(var t=0,r=1,n=e.length-1;n>=0;n--){var a=e[n],o=u[a];o<r?t-=o:(r=o,t+=o)}return t}(n?e:e.toUpperCase())};break;case p.WORDS:t.regex="(?:"+Object.keys(i).concat("and","[\\-, ]").join("|")+")+",t.parse=function(e){return t=e.toLowerCase(),r=t.split(/,\s|\sand\s|[\s\\-]/).map(function(e){return i[e]}),n=[0],r.forEach(function(e){if(e<100){var t=n.pop();t>=1e3&&(n.push(t),t=0),n.push(t+e)}else n.push(n.pop()*e)}),n.reduce(function(e,t){return e+t},0);var t,r,n};break;case p.DECIMAL:t.regex="[0-9]".concat(r),e.ordinal&&(t.regex+="(?:th|st|nd|rd)"),t.parse=function(t){var r=t;return e.ordinal&&(r=t.substring(0,t.length-2)),e.regular?r=r.split(",").join(""):e.groupingSeparators.forEach(function(e){r=r.split(e.character).join("")}),48!==e.zeroCode&&(r=r.split("").map(function(t){return String.fromCodePoint(t.codePointAt(0)-e.zeroCode+48)}).join("")),parseInt(r)};break;case p.SEQUENCE:throw{code:"D3130",value:e.token}}}return t}var T=new RegExp("^\\d{4}(-[01]\\d)*(-[0-3]\\d)*(T[0-2]\\d:[0-5]\\d:[0-5]\\d)*(\\.\\d+)?([+-][0-2]\\d:?[0-5]\\d|Z)?$");return{formatInteger:c,parseInteger:function(e,t){if(void 0!==e)return S(d(t)).parse(e)},fromMillis:function(e,t,r){if(void 0!==e)return A.call(this,e,t,r)},toMillis:function(e,t){if(void 0!==e){if(void 0===t){if(!T.test(e))throw{stack:(new Error).stack,code:"D3110",value:e};return Date.parse(e)}return function(e,t){var r=S(b(t)),n="^"+r.parts.map(function(e){return"("+e.regex+")"}).join("")+"$",a=new RegExp(n,"i").exec(e);if(null!==a){for(var o={},i=1;i<a.length;i++){var s=r.parts[i-1];s.parse&&(o[s.component]=s.parse(a[i]))}if(0===Object.getOwnPropertyNames(o).length)return;var u=0,c=function(e){u<<=1,u+=e?1:0},p=function(e){return!(~e&u||!(e&u))};"YXMxWwdD".split("").forEach(function(e){return c(o[e])});var f=!p(161)&&p(130),l=p(84),h=!l&&p(72);u=0,"PHhmsf".split("").forEach(function(e){return c(o[e])});var d=!p(23)&&p(47),v=(f?"YD":l?"XxwF":h?"XWF":"YMD")+(d?"Phmsf":"Hmsf"),y=this.environment.timestamp,g=!1,m=!1;if(v.split("").forEach(function(e){if(void 0===o[e])g?(o[e]=-1!=="MDd".indexOf(e)?1:0,m=!0):o[e]=w(y,e);else if(g=!0,m)throw{code:"D3136"}}),o.M>0?o.M-=1:o.M=0,f){var x=Date.UTC(o.Y,0),k=1e3*(o.d-1)*60*60*24,E=new Date(x+k);o.M=E.getUTCMonth(),o.D=E.getUTCDate()}if(l)throw{code:"D3136"};if(h)throw{code:"D3136"};d&&(o.H=12===o.h?0:o.h,1===o.P&&(o.H+=12));var A=Date.UTC(o.Y,o.M,o.D,o.H,o.m,o.s,o.f);return(o.Z||o.z)&&(A-=60*(o.Z||o.z)*1e3),A}}.call(this,e,t)}}}}();t.exports=a},{"./utils":6}],2:[function(e,t,r){(function(r){(function(){"use strict";function n(){n=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},s="function"==typeof Symbol?Symbol:{},u=s.iterator||"@@iterator",c=s.asyncIterator||"@@asyncIterator",p=s.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),s=new M(n||[]);return i(o,"_invoke",{value:D(e,r,s)}),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",v="suspendedYield",b="executing",y="completed",g={};function m(){}function x(){}function k(){}var w={};f(w,u,function(){return this});var E=Object.getPrototypeOf,A=E&&E(E(C([])));A&&A!==r&&o.call(A,u)&&(w=A);var S=k.prototype=m.prototype=Object.create(w);function T(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function r(n,i,s,u){var c=h(e[n],e,i);if("throw"!==c.type){var p=c.arg,f=p.value;return f&&"object"==a(f)&&o.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,s,u)},function(e){r("throw",e,s,u)}):t.resolve(f).then(function(e){p.value=e,s(p)},function(e){return r("throw",e,s,u)})}u(c.arg)}var n;i(this,"_invoke",{value:function(e,a){function o(){return new t(function(t,n){r(e,a,t,n)})}return n=n?n.then(o,o):o()}})}function D(t,r,n){var a=d;return function(o,i){if(a===b)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var u=P(s,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=b;var c=h(t,r,n);if("normal"===c.type){if(a=n.done?y:v,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function P(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw new TypeError(a(t)+" is not iterable")}return x.prototype=k,i(S,"constructor",{value:k,configurable:!0}),i(k,"constructor",{value:x,configurable:!0}),x.displayName=f(k,p,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,f(e,p,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},T(O.prototype),f(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},T(S),f(S,p,"Generator"),f(S,u,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function a(e){"@babel/helpers - typeof";return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}function i(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var i=e.apply(t,r);function s(e){o(i,n,a,s,u,"next",e)}function u(e){o(i,n,a,s,u,"throw",e)}s(void 0)})}}var s=e("./utils"),u=function(){var e=s.isNumeric,t=s.isArrayOfStrings,o=s.isArrayOfNumbers,u=s.createSequence,c=s.isSequence,p=s.isFunction,f=s.isLambda,l=s.isPromise,h=s.getFunctionArity,d=s.isDeepEqual,v=s.stringToArray;function b(e,t,r){if(void 0!==e){var n=v(e),a=n.length;if(a+t<0&&(t=0),void 0!==r){if(r<=0)return"";var o=t>=0?t+r:a+t+r;return n.slice(t,o).join("")}return n.slice(t).join("")}}function y(e){if(void 0!==e)return v(e).length}function g(e,t){return m.apply(this,arguments)}function m(){return(m=i(n().mark(function e(t,r){var a;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.apply(this,[r]),!l(a)){e.next=5;break}return e.next=4,a;case 4:a=e.sent;case 5:if(!a||"number"==typeof a.start||"number"===a.end||Array.isArray(a.groups)||p(a.next)){e.next=7;break}throw{code:"T1010",stack:(new Error).stack};case 7:return e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function x(){return(x=i(n().mark(function e(t,r){var a,o;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:if("string"!=typeof r){e.next=6;break}a=-1!==t.indexOf(r),e.next=10;break;case 6:return e.next=8,g(r,t);case 8:o=e.sent,a=void 0!==o;case 10:return e.abrupt("return",a);case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}function k(){return(k=i(n().mark(function e(t,r,a){var o,i,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:if(!(a<0)){e.next=4;break}throw{stack:(new Error).stack,value:a,code:"D3040",index:3};case 4:if(o=u(),!(void 0===a||a>0)){e.next=19;break}return i=0,e.next=9,g(r,t);case 9:if(void 0===(s=e.sent)){e.next=19;break}case 11:if(void 0===s||!(void 0===a||i<a)){e.next=19;break}return o.push({match:s.match,index:s.start,groups:s.groups}),e.next=15,g(s.next);case 15:s=e.sent,i++,e.next=11;break;case 19:return e.abrupt("return",o);case 20:case"end":return e.stop()}},e)}))).apply(this,arguments)}function w(){return(w=i(n().mark(function e(t,r,a,o){var i,s,u,c,p,f,h,d;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:if(i=this,""!==r){e.next=5;break}throw{code:"D3010",stack:(new Error).stack,value:r,index:2};case 5:if(!(o<0)){e.next=7;break}throw{code:"D3011",stack:(new Error).stack,value:o,index:4};case 7:if(s="string"==typeof a?function(e){for(var t="",r=0,n=a.indexOf("$",r);-1!==n&&r<a.length;){t+=a.substring(r,n),r=n+1;var o=a.charAt(r);if("$"===o)t+="$",r++;else if("0"===o)t+=e.match,r++;else{var i;if(i=0===e.groups.length?1:Math.floor(Math.log(e.groups.length)*Math.LOG10E)+1,n=parseInt(a.substring(r,r+i),10),i>1&&n>e.groups.length&&(n=parseInt(a.substring(r,r+i-1),10)),isNaN(n))t+="$";else{if(e.groups.length>0){var s=e.groups[n-1];void 0!==s&&(t+=s)}r+=n.toString().length}}n=a.indexOf("$",r)}return t+=a.substring(r)}:a,u="",c=0,!(void 0===o||o>0)){e.next=47;break}if(p=0,"string"!=typeof r){e.next=18;break}for(f=t.indexOf(r,c);-1!==f&&(void 0===o||p<o);)u+=t.substring(c,f),u+=a,c=f+r.length,p++,f=t.indexOf(r,c);u+=t.substring(c),e.next=45;break;case 18:return e.next=20,g(r,t);case 20:if(void 0===(h=e.sent)){e.next=44;break}case 22:if(void 0===h||!(void 0===o||p<o)){e.next=41;break}if(u+=t.substring(c,h.start),d=s.apply(i,[h]),!l(d)){e.next=29;break}return e.next=28,d;case 28:d=e.sent;case 29:if("string"!=typeof d){e.next=33;break}u+=d,e.next=34;break;case 33:throw{code:"D3012",stack:(new Error).stack,value:d};case 34:return c=h.start+h.match.length,p++,e.next=38,g(h.next);case 38:h=e.sent,e.next=22;break;case 41:u+=t.substring(c),e.next=45;break;case 44:u=t;case 45:e.next=48;break;case 47:u=t;case 48:return e.abrupt("return",u);case 49:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function E(){return(E=i(n().mark(function e(t,r,a){var o,i,s,u;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:if(!(a<0)){e.next=4;break}throw{code:"D3020",stack:(new Error).stack,value:a,index:3};case 4:if(o=[],!(void 0===a||a>0)){e.next=29;break}if("string"!=typeof r){e.next=10;break}o=t.split(r,a),e.next=29;break;case 10:return i=0,e.next=13,g(r,t);case 13:if(void 0===(s=e.sent)){e.next=28;break}u=0;case 16:if(void 0===s||!(void 0===a||i<a)){e.next=25;break}return o.push(t.substring(u,s.start)),u=s.end,e.next=21,g(s.next);case 21:s=e.sent,i++,e.next=16;break;case 25:(void 0===a||i<a)&&o.push(t.substring(u)),e.next=29;break;case 28:o.push(t);case 29:return e.abrupt("return",o);case 30:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t){var r;if(void 0!==e){if(t){var n=e.toString().split("e");e=+(n[0]+"e"+(n[1]?+n[1]+t:t))}var a=(r=Math.round(e))-e;return.5===Math.abs(a)&&1===Math.abs(r%2)&&(r-=1),t&&(r=+((n=r.toString().split("e"))[0]+"e"+(n[1]?+n[1]-t:-t))),Object.is(r,-0)&&(r=0),r}}function S(t){if(void 0!==t){var r=!1;if(Array.isArray(t)){if(1===t.length)r=S(t[0]);else if(t.length>1){r=t.filter(function(e){return S(e)}).length>0}}else"string"==typeof t?t.length>0&&(r=!0):e(t)?0!==t&&(r=!0):null!==t&&"object"===a(t)?Object.keys(t).length>0&&(r=!0):"boolean"==typeof t&&!0===t&&(r=!0);return r}}function T(e,t,r,n){var a=[t],o=h(e);return o>=2&&a.push(r),o>=3&&a.push(n),a}function O(){return(O=i(n().mark(function e(t,r){var a,o,i,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:a=u(),o=0;case 4:if(!(o<t.length)){e.next=13;break}return i=T(r,t[o],o,t),e.next=8,r.apply(this,i);case 8:void 0!==(s=e.sent)&&a.push(s);case 10:o++,e.next=4;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function D(){return(D=i(n().mark(function e(t,r){var a,o,i,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:a=u(),o=0;case 4:if(!(o<t.length)){e.next=14;break}return i=t[o],s=T(r,i,o,t),e.next=9,r.apply(this,s);case 9:S(e.sent)&&a.push(i);case 11:o++,e.next=4;break;case 14:return e.abrupt("return",a);case 15:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function P(){return(P=i(n().mark(function e(t,r){var a,o,i,s,u,c,p;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:a=!1,i=0;case 4:if(!(i<t.length)){e.next=23;break}if(s=t[i],u=!0,void 0===r){e.next=13;break}return c=T(r,s,i,t),e.next=11,r.apply(this,c);case 11:p=e.sent,u=S(p);case 13:if(!u){e.next=20;break}if(a){e.next=19;break}o=s,a=!0,e.next=20;break;case 19:throw{stack:(new Error).stack,code:"D3138",index:i};case 20:i++,e.next=4;break;case 23:if(a){e.next=25;break}throw{stack:(new Error).stack,code:"D3139"};case 25:return e.abrupt("return",o);case 26:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function j(){return(j=i(n().mark(function e(t,r,a){var o,i,s,u;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:if(!((i=h(r))<2)){e.next=5;break}throw{stack:(new Error).stack,code:"D3050",index:1};case 5:void 0===a&&t.length>0?(o=t[0],s=1):(o=a,s=0);case 6:if(!(s<t.length)){e.next=16;break}return u=[o,t[s]],i>=3&&u.push(s),i>=4&&u.push(t),e.next=12,r.apply(this,u);case 12:o=e.sent,s++,e.next=6;break;case 16:return e.abrupt("return",o);case 17:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function L(e,t){return void 0===e?t:void 0===t?e:(Array.isArray(e)||(e=u(e)),Array.isArray(t)||(t=[t]),e.concat(t))}function M(){return(M=i(n().mark(function e(t,r){var a,o,i,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=u(),e.t0=n().keys(t);case 2:if((e.t1=e.t0()).done){e.next=11;break}return o=e.t1.value,i=T(r,t[o],o,t),e.next=7,r.apply(this,i);case 7:void 0!==(s=e.sent)&&a.push(s),e.next=2;break;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function C(){return(C=i(n().mark(function e(r,a){var s,u,c,p;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==r){e.next=2;break}return e.abrupt("return",void 0);case 2:if(!(r.length<=1)){e.next=4;break}return e.abrupt("return",r);case 4:if(void 0!==a){e.next=10;break}if(o(r)||t(r)){e.next=7;break}throw{stack:(new Error).stack,code:"D3070",index:1};case 7:s=function(){var e=i(n().mark(function e(t,r){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t>r);case 1:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),e.next=11;break;case 10:s=a;case 11:return u=function(){var e=i(n().mark(function e(t,r){var a,o;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){var e=i(n().mark(function e(t,r,o){return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==r.length){e.next=4;break}Array.prototype.push.apply(t,o),e.next=19;break;case 4:if(0!==o.length){e.next=8;break}Array.prototype.push.apply(t,r),e.next=19;break;case 8:return e.next=10,s(r[0],o[0]);case 10:if(!e.sent){e.next=16;break}return t.push(o[0]),e.next=14,a(t,r,o.slice(1));case 14:e.next=19;break;case 16:return t.push(r[0]),e.next=19,a(t,r.slice(1),o);case 19:case"end":return e.stop()}},e)}));return function(t,r,n){return e.apply(this,arguments)}}(),o=[],e.next=4,a(o,t,r);case 4:return e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),c=function(){var e=i(n().mark(function e(t){var r,a,o;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)&&!(t.length<=1)){e.next=4;break}return e.abrupt("return",t);case 4:return r=Math.floor(t.length/2),a=t.slice(0,r),o=t.slice(r),e.next=9,c(a);case 9:return a=e.sent,e.next=12,c(o);case 12:return o=e.sent,e.next=15,u(a,o);case 15:return e.abrupt("return",e.sent);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),e.next=15,c(r);case 15:return p=e.sent,e.abrupt("return",p);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return(F=i(n().mark(function e(t,r){var a,o,i,s;return n().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a={},e.t0=n().keys(t);case 2:if((e.t1=e.t0()).done){e.next=12;break}return o=e.t1.value,i=t[o],s=T(r,i,o,t),e.next=8,r.apply(this,s);case 8:S(e.sent)&&(a[o]=i),e.next=2;break;case 12:return 0===Object.keys(a).length&&(a=void 0),e.abrupt("return",a);case 14:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}return{sum:function(e){if(void 0!==e){var t=0;return e.forEach(function(e){t+=e}),t}},count:function(e){return void 0===e?0:e.length},max:function(e){if(void 0!==e&&0!==e.length)return Math.max.apply(Math,e)},min:function(e){if(void 0!==e&&0!==e.length)return Math.min.apply(Math,e)},average:function(e){if(void 0!==e&&0!==e.length){var t=0;return e.forEach(function(e){t+=e}),t/e.length}},string:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0!==t){var n;if("string"==typeof t)n=t;else if(p(t))n="";else{if("number"==typeof t&&!isFinite(t))throw{code:"D3001",value:t,stack:(new Error).stack};var a=r?2:0;Array.isArray(t)&&t.outerWrapper&&(t=t[0]),n=JSON.stringify(t,function(t,r){return null!=r&&r.toPrecision&&e(r)?Number(r.toPrecision(15)):r&&p(r)?"":r},a)}return n}},substring:b,substringBefore:function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(0,r):e}},substringAfter:function(e,t){if(void 0!==e){var r=e.indexOf(t);return r>-1?e.substr(r+t.length):e}},lowercase:function(e){if(void 0!==e)return e.toLowerCase()},uppercase:function(e){if(void 0!==e)return e.toUpperCase()},length:y,trim:function(e){if(void 0!==e){var t=e.replace(/[ \t\n\r]+/gm," ");return" "===t.charAt(0)&&(t=t.substring(1))," "===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1)),t}},pad:function(e,t,r){if(void 0!==e){var n;void 0!==r&&0!==r.length||(r=" ");var a=Math.abs(t)-y(e);if(a>0){var o=new Array(a+1).join(r);r.length>1&&(o=b(o,0,a)),n=t>0?e+o:o+e}else n=e;return n}},match:function(e,t,r){return k.apply(this,arguments)},contains:function(e,t){return x.apply(this,arguments)},replace:function(e,t,r,n){return w.apply(this,arguments)},split:function(e,t,r){return E.apply(this,arguments)},join:function(e,t){if(void 0!==e)return void 0===t&&(t=""),e.join(t)},formatNumber:function(e,t,r){if(void 0!==e){var n={"decimal-separator":".","grouping-separator":",","exponent-separator":"e",infinity:"Infinity","minus-sign":"-",NaN:"NaN",percent:"%","per-mille":"‰","zero-digit":"0",digit:"#","pattern-separator":";"};void 0!==r&&Object.keys(r).forEach(function(e){n[e]=r[e]});for(var a=[],o=n["zero-digit"].charCodeAt(0),i=o;i<o+10;i++)a.push(String.fromCharCode(i));var s=a.concat([n["decimal-separator"],n["exponent-separator"],n["grouping-separator"],n.digit,n["pattern-separator"]]),u=t.split(n["pattern-separator"]);if(u.length>2)throw{code:"D3080",stack:(new Error).stack};var c=u.map(function(e){var t,r,a,o,i=function(){for(var t,r=0;r<e.length;r++)if(t=e.charAt(r),-1!==s.indexOf(t)&&t!==n["exponent-separator"])return e.substring(0,r)}(),u=function(){for(var t,r=e.length-1;r>=0;r--)if(t=e.charAt(r),-1!==s.indexOf(t)&&t!==n["exponent-separator"])return e.substring(r+1)}(),c=e.substring(i.length,e.length-u.length),p=e.indexOf(n["exponent-separator"],i.length);-1===p||p>e.length-u.length?(t=c,r=void 0):(t=c.substring(0,p),r=c.substring(p+1));var f=t.indexOf(n["decimal-separator"]);return-1===f?(a=t,o=u):(a=t.substring(0,f),o=t.substring(f+1)),{prefix:i,suffix:u,activePart:c,mantissaPart:t,exponentPart:r,integerPart:a,fractionalPart:o,subpicture:e}});c.forEach(function(e){var t,r,o=e.subpicture,i=o.indexOf(n["decimal-separator"]);i!==o.lastIndexOf(n["decimal-separator"])&&(t="D3081"),o.indexOf(n.percent)!==o.lastIndexOf(n.percent)&&(t="D3082"),o.indexOf(n["per-mille"])!==o.lastIndexOf(n["per-mille"])&&(t="D3083"),-1!==o.indexOf(n.percent)&&-1!==o.indexOf(n["per-mille"])&&(t="D3084");var u=!1;for(r=0;r<e.mantissaPart.length;r++){var c=e.mantissaPart.charAt(r);if(-1!==a.indexOf(c)||c===n.digit){u=!0;break}}u||(t="D3085"),-1!==e.activePart.split("").map(function(e){return-1===s.indexOf(e)?"p":"a"}).join("").indexOf("p")&&(t="D3086"),-1!==i?o.charAt(i-1)!==n["grouping-separator"]&&o.charAt(i+1)!==n["grouping-separator"]||(t="D3087"):e.integerPart.charAt(e.integerPart.length-1)===n["grouping-separator"]&&(t="D3088"),-1!==o.indexOf(n["grouping-separator"]+n["grouping-separator"])&&(t="D3089");var p=e.integerPart.indexOf(n.digit);-1!==p&&e.integerPart.substring(0,p).split("").filter(function(e){return a.indexOf(e)>-1}).length>0&&(t="D3090"),-1!==(p=e.fractionalPart.lastIndexOf(n.digit))&&e.fractionalPart.substring(p).split("").filter(function(e){return a.indexOf(e)>-1}).length>0&&(t="D3091");var f="string"==typeof e.exponentPart;if(f&&e.exponentPart.length>0&&(-1!==o.indexOf(n.percent)||-1!==o.indexOf(n["per-mille"]))&&(t="D3092"),f&&(0===e.exponentPart.length||e.exponentPart.split("").filter(function(e){return-1===a.indexOf(e)}).length>0)&&(t="D3093"),t)throw{code:t,stack:(new Error).stack}});var p,f,l,h,d=c.map(function(e){var t=function(t,r){for(var o=[],i=t.indexOf(n["grouping-separator"]);-1!==i;){var s=(r?t.substring(0,i):t.substring(i)).split("").filter(function(e){return-1!==a.indexOf(e)||e===n.digit}).length;o.push(s),i=e.integerPart.indexOf(n["grouping-separator"],i+1)}return o},r=t(e.integerPart),o=function(e){if(0===e.length)return 0;for(var t=e.reduce(function e(t,r){return 0===r?t:e(r,t%r)}),r=1;r<=e.length;r++)if(-1===e.indexOf(r*t))return 0;return t}(r),i=t(e.fractionalPart,!0),s=e.integerPart.split("").filter(function(e){return-1!==a.indexOf(e)}).length,u=s,c=e.fractionalPart.split(""),p=c.filter(function(e){return-1!==a.indexOf(e)}).length,f=c.filter(function(e){return-1!==a.indexOf(e)||e===n.digit}).length,l="string"==typeof e.exponentPart;0===s&&0===f&&(l?(p=1,f=1):s=1),l&&0===s&&-1!==e.integerPart.indexOf(n.digit)&&(s=1),0===s&&0===p&&(p=1);var h=0;return l&&(h=e.exponentPart.split("").filter(function(e){return-1!==a.indexOf(e)}).length),{integerPartGroupingPositions:r,regularGrouping:o,minimumIntegerPartSize:s,scalingFactor:u,prefix:e.prefix,fractionalPartGroupingPositions:i,minimumFactionalPartSize:p,maximumFactionalPartSize:f,minimumExponentSize:h,suffix:e.suffix,picture:e.subpicture}}),v=n["minus-sign"],b=n["zero-digit"],y=n["decimal-separator"],g=n["grouping-separator"];if(1===d.length&&(d.push(JSON.parse(JSON.stringify(d[0]))),d[1].prefix=v+d[1].prefix),f=-1!==(p=e>=0?d[0]:d[1]).picture.indexOf(n.percent)?100*e:-1!==p.picture.indexOf(n["per-mille"])?1e3*e:e,0===p.minimumExponentSize)l=f;else{var m=Math.pow(10,p.scalingFactor),x=Math.pow(10,p.scalingFactor-1);for(l=f,h=0;l<x;)l*=10,h-=1;for(;l>m;)l/=10,h+=1}var k=function(e,t){var r=Math.abs(e).toFixed(t);return"0"!==b&&(r=r.split("").map(function(e){return e>="0"&&e<="9"?a[e.charCodeAt(0)-48]:e}).join("")),r},w=k(A(l,p.maximumFactionalPartSize),p.maximumFactionalPartSize),E=w.indexOf(".");for(-1===E?w+=y:w=w.replace(".",y);w.charAt(0)===b;)w=w.substring(1);for(;w.charAt(w.length-1)===b;)w=w.substring(0,w.length-1);E=w.indexOf(y);var S=p.minimumIntegerPartSize-E,T=p.minimumFactionalPartSize-(w.length-E-1);if(w=(S>0?new Array(S+1).join(b):"")+w,w+=T>0?new Array(T+1).join(b):"",E=w.indexOf(y),p.regularGrouping>0)for(var O=Math.floor((E-1)/p.regularGrouping),D=1;D<=O;D++)w=[w.slice(0,E-D*p.regularGrouping),g,w.slice(E-D*p.regularGrouping)].join("");else p.integerPartGroupingPositions.forEach(function(e){w=[w.slice(0,E-e),g,w.slice(E-e)].join(""),E++});if(E=w.indexOf(y),p.fractionalPartGroupingPositions.forEach(function(e){w=[w.slice(0,e+E+1),g,w.slice(e+E+1)].join("")}),E=w.indexOf(y),-1!==p.picture.indexOf(y)&&E!==w.length-1||(w=w.substring(0,w.length-1)),void 0!==h){var P=k(h,0);(S=p.minimumExponentSize-P.length)>0&&(P=new Array(S+1).join(b)+P),w=w+n["exponent-separator"]+(h<0?v:"")+P}return w=p.prefix+w+p.suffix}},formatBase:function(e,t){if(void 0!==e){if(e=A(e),(t=void 0===t?10:A(t))<2||t>36)throw{code:"D3100",stack:(new Error).stack,value:t};return e.toString(t)}},number:function(e){var t;if(void 0!==e){if("number"==typeof e)t=e;else if("string"==typeof e&&/^-?[0-9]+(\.[0-9]+)?([Ee][-+]?[0-9]+)?$/.test(e)&&!isNaN(parseFloat(e))&&isFinite(e))t=parseFloat(e);else if("string"==typeof e&&/^(0[xX][0-9A-Fa-f]+)|(0[oO][0-7]+)|(0[bB][0-1]+)$/.test(e))t=Number(e);else if(!0===e)t=1;else{if(!1!==e)throw{code:"D3030",value:e,stack:(new Error).stack,index:1};t=0}return t}},floor:function(e){if(void 0!==e)return Math.floor(e)},ceil:function(e){if(void 0!==e)return Math.ceil(e)},round:A,abs:function(e){if(void 0!==e)return Math.abs(e)},sqrt:function(e){if(void 0!==e){if(e<0)throw{stack:(new Error).stack,code:"D3060",index:1,value:e};return Math.sqrt(e)}},power:function(e,t){var r;if(void 0!==e){if(r=Math.pow(e,t),!isFinite(r))throw{stack:(new Error).stack,code:"D3061",index:1,value:e,exp:t};return r}},random:function(){return Math.random()},boolean:S,not:function(e){if(void 0!==e)return!S(e)},map:function(e,t){return O.apply(this,arguments)},zip:function(){for(var e=[],t=Array.prototype.slice.call(arguments),r=Math.min.apply(Math,t.map(function(e){return Array.isArray(e)?e.length:0})),n=0;n<r;n++){var a=t.map(function(e){return e[n]});e.push(a)}return e},filter:function(e,t){return D.apply(this,arguments)},single:function(e,t){return P.apply(this,arguments)},foldLeft:function(e,t,r){return j.apply(this,arguments)},sift:function(e,t){return F.apply(this,arguments)},keys:function e(t){var r=u();if(Array.isArray(t)){var n={};t.forEach(function(t){e(t).forEach(function(e){n[e]=!0})}),r=e(n)}else null===t||"object"!==a(t)||p(t)||Object.keys(t).forEach(function(e){return r.push(e)});return r},lookup:function e(t,r){var n;if(Array.isArray(t)){n=u();for(var o=0;o<t.length;o++){var i=e(t[o],r);void 0!==i&&(Array.isArray(i)?i.forEach(function(e){return n.push(e)}):n.push(i))}}else null===t||"object"!==a(t)||p(t)||(n=t[r]);return n},append:L,exists:function(e){return void 0!==e},spread:function e(t){var r=u();if(Array.isArray(t))t.forEach(function(t){r=L(r,e(t))});else if(null===t||"object"!==a(t)||f(t))r=t;else for(var n in t){var o={};o[n]=t[n],r.push(o)}return r},merge:function(e){if(void 0!==e){var t={};return e.forEach(function(e){for(var r in e)t[r]=e[r]}),t}},reverse:function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=e.length,r=new Array(t),n=0;n<t;n++)r[t-n-1]=e[n];return r}},each:function(e,t){return M.apply(this,arguments)},error:function(e){throw{code:"D3137",stack:(new Error).stack,message:e||"$error() function evaluated"}},assert:function(e,t){if(!e)throw{code:"D3141",stack:(new Error).stack,message:t||"$assert() statement failed"}},type:function(t){if(void 0!==t)return null===t?"null":e(t)?"number":"string"==typeof t?"string":"boolean"==typeof t?"boolean":Array.isArray(t)?"array":p(t)?"function":"object"},sort:function(e,t){return C.apply(this,arguments)},shuffle:function(e){if(void 0!==e){if(e.length<=1)return e;for(var t=new Array(e.length),r=0;r<e.length;r++){var n=Math.floor(Math.random()*(r+1));r!==n&&(t[r]=t[n]),t[n]=e[r]}return t}},distinct:function(e){if(void 0!==e){if(!Array.isArray(e)||e.length<=1)return e;for(var t=c(e)?u():[],r=0;r<e.length;r++){for(var n=e[r],a=!1,o=0;o<t.length;o++)if(d(n,t[o])){a=!0;break}a||t.push(n)}return t}},base64encode:function(e){if(void 0!==e)return("undefined"!=typeof window?window.btoa:function(e){return new r.Buffer.from(e,"binary").toString("base64")})(e)},base64decode:function(e){if(void 0!==e)return("undefined"!=typeof window?window.atob:function(e){return new r.Buffer.from(e,"base64").toString("binary")})(e)},encodeUrlComponent:function(e){if(void 0!==e){var t;try{t=encodeURIComponent(e)}catch(t){throw{code:"D3140",stack:(new Error).stack,value:e,functionName:"encodeUrlComponent"}}return t}},encodeUrl:function(e){if(void 0!==e){var t;try{t=encodeURI(e)}catch(t){throw{code:"D3140",stack:(new Error).stack,value:e,functionName:"encodeUrl"}}return t}},decodeUrlComponent:function(e){if(void 0!==e){var t;try{t=decodeURIComponent(e)}catch(t){throw{code:"D3140",stack:(new Error).stack,value:e,functionName:"decodeUrlComponent"}}return t}},decodeUrl:function(e){if(void 0!==e){var t;try{t=decodeURI(e)}catch(t){throw{code:"D3140",stack:(new Error).stack,value:e,functionName:"decodeUrl"}}return t}}}}();t.exports=u}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./utils":6}],3:[function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,i,s=[],u=!0,c=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=o.call(r)).done)&&(s.push(n.value),s.length!==t);u=!0);}catch(e){c=!0,a=e}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=o(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(){s=function(){return t};var e,t={},r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",p=o.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),s=new M(n||[]);return a(i,"_invoke",{value:D(e,r,s)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=l;var d="suspendedStart",v="suspendedYield",b="executing",y="completed",g={};function m(){}function x(){}function k(){}var w={};f(w,i,function(){return this});var E=Object.getPrototypeOf,A=E&&E(E(C([])));A&&A!==r&&n.call(A,i)&&(w=A);var S=k.prototype=m.prototype=Object.create(w);function T(e){["next","throw","return"].forEach(function(t){f(e,t,function(e){return this._invoke(t,e)})})}function O(e,t){function r(a,o,i,s){var c=h(e[a],e,o);if("throw"!==c.type){var p=c.arg,f=p.value;return f&&"object"==u(f)&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(f).then(function(e){p.value=e,i(p)},function(e){return r("throw",e,i,s)})}s(c.arg)}var o;a(this,"_invoke",{value:function(e,n){function a(){return new t(function(t,a){r(e,n,t,a)})}return o=o?o.then(a,a):a()}})}function D(t,r,n){var a=d;return function(o,i){if(a===b)throw Error("Generator is already running");if(a===y){if("throw"===o)throw i;return{value:e,done:!0}}for(n.method=o,n.arg=i;;){var s=n.delegate;if(s){var u=P(s,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(a===d)throw a=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a=b;var c=h(t,r,n);if("normal"===c.type){if(a=n.done?y:v,c.arg===g)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a=y,n.method="throw",n.arg=c.arg)}}}function P(t,r){var n=r.method,a=t.iterator[n];if(a===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var o=h(a,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,g;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function C(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}throw new TypeError(u(t)+" is not iterable")}return x.prototype=k,a(S,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:x,configurable:!0}),x.displayName=f(k,p,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===x||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,k):(e.__proto__=k,f(e,p,"GeneratorFunction")),e.prototype=Object.create(S),e},t.awrap=function(e){return{__await:e}},T(O.prototype),f(O.prototype,c,function(){return this}),t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},T(S),f(S,p,"Generator"),f(S,i,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),t.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=C,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},t}function u(e){"@babel/helpers - typeof";return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,r,n,a,o,i){try{var s=e[o](i),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function i(e){c(o,n,a,i,s,"next",e)}function s(e){c(o,n,a,i,s,"throw",e)}i(void 0)})}}var f=e("./datetime"),l=e("./functions"),h=e("./utils"),d=e("./parser"),v=e("./signature"),b=function(){var e=h.isNumeric,t=h.isArrayOfStrings,r=h.isArrayOfNumbers,o=h.createSequence,i=h.isSequence,c=h.isFunction,b=h.isLambda,y=h.isIterable,g=h.isPromise,m=h.getFunctionArity,x=h.isDeepEqual,k=Fe(null);function w(e,t,r){return E.apply(this,arguments)}function E(){return(E=p(s().mark(function e(t,r,n){var a,o,u,c;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(o=n.lookup("__evaluate_entry"))){e.next=4;break}return e.next=4,o(t,r,n);case 4:e.t0=t.type,e.next="path"===e.t0?7:"binary"===e.t0?11:"unary"===e.t0?15:"name"===e.t0?19:"string"===e.t0?21:"number"===e.t0?21:"value"===e.t0?21:"wildcard"===e.t0?23:"descendant"===e.t0?25:"parent"===e.t0?27:"condition"===e.t0?29:"block"===e.t0?33:"bind"===e.t0?37:"regex"===e.t0?41:"function"===e.t0?43:"variable"===e.t0?47:"lambda"===e.t0?49:"partial"===e.t0?51:"apply"===e.t0?55:"transform"===e.t0?59:61;break;case 7:return e.next=9,A(t,r,n);case 9:return a=e.sent,e.abrupt("break",61);case 11:return e.next=13,N(t,r,n);case 13:return a=e.sent,e.abrupt("break",61);case 15:return e.next=17,I(t,r,n);case 17:return a=e.sent,e.abrupt("break",61);case 19:return a=R(t,r,n),e.abrupt("break",61);case 21:return a=G(t),e.abrupt("break",61);case 23:return a=z(t,r),e.abrupt("break",61);case 25:return a=$(t,r),e.abrupt("break",61);case 27:return a=n.lookup(t.slot.label),e.abrupt("break",61);case 29:return e.next=31,ne(t,r,n);case 31:return a=e.sent,e.abrupt("break",61);case 33:return e.next=35,oe(t,r,n);case 35:return a=e.sent,e.abrupt("break",61);case 37:return e.next=39,te(t,r,n);case 39:return a=e.sent,e.abrupt("break",61);case 41:return a=se(t),e.abrupt("break",61);case 43:return e.next=45,ve(t,r,n);case 45:return a=e.sent,e.abrupt("break",61);case 47:return a=ue(t,r,n),e.abrupt("break",61);case 49:return a=ke(t,r,n),e.abrupt("break",61);case 51:return e.next=53,we(t,r,n);case 53:return a=e.sent,e.abrupt("break",61);case 55:return e.next=57,he(t,r,n);case 57:return a=e.sent,e.abrupt("break",61);case 59:return a=fe(t,r,n),e.abrupt("break",61);case 61:if(!Object.prototype.hasOwnProperty.call(t,"predicate")){e.next=70;break}u=0;case 63:if(!(u<t.predicate.length)){e.next=70;break}return e.next=66,C(t.predicate[u].expr,a,n);case 66:a=e.sent;case 67:u++,e.next=63;break;case 70:if("path"===t.type||!Object.prototype.hasOwnProperty.call(t,"group")){e.next=74;break}return e.next=73,Q(t.group,a,n);case 73:a=e.sent;case 74:if(!(c=n.lookup("__evaluate_exit"))){e.next=78;break}return e.next=78,c(t,r,n,a);case 78:return a&&i(a)&&!a.tupleStream&&(t.keepArray&&(a.keepSingleton=!0),0===a.length?a=void 0:1===a.length&&(a=a.keepSingleton?a:a[0])),e.abrupt("return",a);case 80:case"end":return e.stop()}},e)}))).apply(this,arguments)}function A(e,t,r){return S.apply(this,arguments)}function S(){return(S=p(s().mark(function e(t,r,n){var a,i,u,c,p,f;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=Array.isArray(r)&&"variable"!==t.steps[0].type?r:o(r),u=!1,c=void 0,p=0;case 4:if(!(p<t.steps.length)){e.next=28;break}if((f=t.steps[p]).tuple&&(u=!0),0!==p||!f.consarray){e.next=13;break}return e.next=10,w(f,a,n);case 10:i=e.sent,e.next=22;break;case 13:if(!u){e.next=19;break}return e.next=16,L(f,a,c,n);case 16:c=e.sent,e.next=22;break;case 19:return e.next=21,O(f,a,n,p===t.steps.length-1);case 21:i=e.sent;case 22:if(u||void 0!==i&&0!==i.length){e.next=24;break}return e.abrupt("break",28);case 24:void 0===f.focus&&(a=i);case 25:p++,e.next=4;break;case 28:if(u)if(t.tuple)i=c;else for(i=o(),p=0;p<c.length;p++)i.push(c[p]["@"]);if(t.keepSingletonArray&&(Array.isArray(i)&&i.cons&&!i.sequence&&(i=o(i)),i.keepSingleton=!0),!t.hasOwnProperty("group")){e.next=34;break}return e.next=33,Q(t.group,u?c:i,n);case 33:i=e.sent;case 34:return e.abrupt("return",i);case 35:case"end":return e.stop()}},e)}))).apply(this,arguments)}function T(e,t){var r=Fe(e);for(var n in t)r.bind(n,t[n]);return r}function O(e,t,r,n){return D.apply(this,arguments)}function D(){return(D=p(s().mark(function e(t,r,n,a){var u,c,p,f,l;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("sort"!==t.type){e.next=9;break}return e.next=3,ce(t,r,n);case 3:if(u=e.sent,!t.stages){e.next=8;break}return e.next=7,P(t.stages,u,n);case 7:u=e.sent;case 8:return e.abrupt("return",u);case 9:u=o(),c=0;case 11:if(!(c<r.length)){e.next=28;break}return e.next=14,w(t,r[c],n);case 14:if(p=e.sent,!t.stages){e.next=24;break}f=0;case 17:if(!(f<t.stages.length)){e.next=24;break}return e.next=20,C(t.stages[f].expr,p,n);case 20:p=e.sent;case 21:f++,e.next=17;break;case 24:void 0!==p&&u.push(p);case 25:c++,e.next=11;break;case 28:return l=o(),a&&1===u.length&&Array.isArray(u[0])&&!i(u[0])?l=u[0]:u.forEach(function(e){!Array.isArray(e)||e.cons?l.push(e):e.forEach(function(e){return l.push(e)})}),e.abrupt("return",l);case 31:case"end":return e.stop()}},e)}))).apply(this,arguments)}function P(e,t,r){return j.apply(this,arguments)}function j(){return(j=p(s().mark(function e(t,r,n){var a,o,i,u;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=r,o=0;case 2:if(!(o<t.length)){e.next=16;break}i=t[o],e.t0=i.type,e.next="filter"===e.t0?7:"index"===e.t0?11:13;break;case 7:return e.next=9,C(i.expr,a,n);case 9:return a=e.sent,e.abrupt("break",13);case 11:for(u=0;u<a.length;u++)a[u][i.value]=u;return e.abrupt("break",13);case 13:o++,e.next=2;break;case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}function L(e,t,r,n){return M.apply(this,arguments)}function M(){return(M=p(s().mark(function e(t,r,n,a){var i,u,c,p,f,l,h,d;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("sort"!==t.type){e.next=18;break}if(!n){e.next=7;break}return e.next=4,ce(t,n,a);case 4:i=e.sent,e.next=13;break;case 7:return e.next=9,ce(t,r,a);case 9:for(u=e.sent,(i=o()).tupleStream=!0,c=0;c<u.length;c++)(p={"@":u[c]})[t.index]=c,i.push(p);case 13:if(!t.stages){e.next=17;break}return e.next=16,P(t.stages,i,a);case 16:i=e.sent;case 17:return e.abrupt("return",i);case 18:(i=o()).tupleStream=!0,f=a,void 0===n&&(n=r.map(function(e){return{"@":e}})),l=0;case 23:if(!(l<n.length)){e.next=32;break}return f=T(a,n[l]),e.next=27,w(t,n[l]["@"],f);case 27:if(void 0!==(h=e.sent))for(Array.isArray(h)||(h=[h]),d=0;d<h.length;d++)p={},Object.assign(p,n[l]),h.tupleStream?Object.assign(p,h[d]):(t.focus?(p[t.focus]=h[d],p["@"]=n[l]["@"]):p["@"]=h[d],t.index&&(p[t.index]=d),t.ancestor&&(p[t.ancestor.label]=n[l]["@"])),i.push(p);case 29:l++,e.next=23;break;case 32:if(!t.stages){e.next=36;break}return e.next=35,P(t.stages,i,a);case 35:i=e.sent;case 36:return e.abrupt("return",i);case 37:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e,t,r){return F.apply(this,arguments)}function F(){return(F=p(s().mark(function t(n,a,i){var u,c,p,f,h,d;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o(),a&&a.tupleStream&&(u.tupleStream=!0),Array.isArray(a)||(a=o(a)),"number"!==n.type){t.next=10;break}(c=Math.floor(n.value))<0&&(c=a.length+c),void 0!==(p=a[c])&&(Array.isArray(p)?u=p:u.push(p)),t.next=24;break;case 10:c=0;case 11:if(!(c<a.length)){t.next=24;break}return p=a[c],f=p,h=i,a.tupleStream&&(f=p["@"],h=T(i,p)),t.next=18,w(n,f,h);case 18:d=t.sent,e(d)&&(d=[d]),r(d)?d.forEach(function(e){var t=Math.floor(e);t<0&&(t=a.length+t),t===c&&u.push(p)}):l.boolean(d)&&u.push(p);case 21:c++,t.next=11;break;case 24:return t.abrupt("return",u);case 25:case"end":return t.stop()}},t)}))).apply(this,arguments)}function N(e,t,r){return U.apply(this,arguments)}function U(){return(U=p(s().mark(function e(t,r,n){var a,o,i,u,c;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.lhs,r,n);case 2:if(o=e.sent,i=t.value,u=function(){var e=p(s().mark(function e(){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.rhs,r,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),"and"!==i&&"or"!==i){e.next=17;break}return e.prev=6,e.next=9,Z(o,u,i);case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(6),e.t0.position=t.position,e.t0.token=i,e.t0;case 17:return e.next=19,u();case 19:c=e.sent,e.prev=20,e.t1=i,e.next="+"===e.t1?24:"-"===e.t1?24:"*"===e.t1?24:"/"===e.t1?24:"%"===e.t1?24:"="===e.t1?26:"!="===e.t1?26:"<"===e.t1?28:"<="===e.t1?28:">"===e.t1?28:">="===e.t1?28:"&"===e.t1?30:".."===e.t1?32:"in"===e.t1?34:36;break;case 24:return a=Y(o,c,i),e.abrupt("break",36);case 26:return a=q(o,c,i),e.abrupt("break",36);case 28:return a=W(o,c,i),e.abrupt("break",36);case 30:return a=X(o,c),e.abrupt("break",36);case 32:return a=ee(o,c),e.abrupt("break",36);case 34:return a=H(o,c),e.abrupt("break",36);case 36:e.next=43;break;case 38:throw e.prev=38,e.t2=e.catch(20),e.t2.position=t.position,e.t2.token=i,e.t2;case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}},e,null,[[6,12],[20,38]])}))).apply(this,arguments)}function I(e,t,r){return _.apply(this,arguments)}function _(){return(_=p(s().mark(function t(r,o,i){var u,c,f,h,d,v,b,y;return s().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.value,t.next="-"===t.t0?3:"["===t.t0?16:"{"===t.t0?24:28;break;case 3:return t.next=5,w(r.expression,o,i);case 5:if(void 0!==(u=t.sent)){t.next=10;break}u=void 0,t.next=15;break;case 10:if(!e(u)){t.next=14;break}u=-u,t.next=15;break;case 14:throw{code:"D1002",stack:(new Error).stack,position:r.position,token:r.value,value:u};case 15:return t.abrupt("break",28);case 16:return u=[],t.next=19,Promise.all(r.expressions.map(function(){var e=p(s().mark(function e(t,r){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i.isParallelCall=r>0,e.t0=t,e.next=4,w(t,o,i);case 4:return e.t1=e.sent,e.abrupt("return",[e.t0,e.t1]);case 6:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 19:c=t.sent,f=a(c);try{for(f.s();!(h=f.n()).done;)d=h.value,v=n(d,2),b=v[0],void 0!==(y=v[1])&&("["===b.value?u.push(y):u=l.append(u,y))}catch(e){f.e(e)}finally{f.f()}return r.consarray&&Object.defineProperty(u,"cons",{enumerable:!1,configurable:!1,value:!0}),t.abrupt("break",28);case 24:return t.next=26,Q(r,o,i);case 26:return u=t.sent,t.abrupt("break",28);case 28:return t.abrupt("return",u);case 29:case"end":return t.stop()}},t)}))).apply(this,arguments)}function R(e,t,r){return l.lookup(t,e.value)}function G(e){return e.value}function z(e,t){var r=o();return Array.isArray(t)&&t.outerWrapper&&t.length>0&&(t=t[0]),null!==t&&"object"===u(t)&&Object.keys(t).forEach(function(e){var n=t[e];Array.isArray(n)?(n=function e(t,r){void 0===r&&(r=[]);Array.isArray(t)?t.forEach(function(t){e(t,r)}):r.push(t);return r}(n),r=l.append(r,n)):r.push(n)}),r}function $(e,t){var r,n=o();return void 0!==t&&(!function e(t,r){Array.isArray(t)||r.push(t);Array.isArray(t)?t.forEach(function(t){e(t,r)}):null!==t&&"object"===u(t)&&Object.keys(t).forEach(function(n){e(t[n],r)})}(t,n),r=1===n.length?n[0]:n),r}function Y(t,r,n){var a;if(void 0!==t&&!e(t))throw{code:"T2001",stack:(new Error).stack,value:t};if(void 0!==r&&!e(r))throw{code:"T2002",stack:(new Error).stack,value:r};if(void 0===t||void 0===r)return a;switch(n){case"+":a=t+r;break;case"-":a=t-r;break;case"*":a=t*r;break;case"/":a=t/r;break;case"%":a=t%r}return a}function q(e,t,r){var n,a=u(e),o=u(t);if("undefined"===a||"undefined"===o)return!1;switch(r){case"=":n=x(e,t);break;case"!=":n=!x(e,t)}return n}function W(e,t,r){var n,a=u(e),o=u(t);if(!("undefined"===a||"string"===a||"number"===a)||!("undefined"===o||"string"===o||"number"===o))throw{code:"T2010",stack:(new Error).stack,value:"string"!==a&&"number"!==a?e:t};if("undefined"!==a&&"undefined"!==o){if(a!==o)throw{code:"T2009",stack:(new Error).stack,value:e,value2:t};switch(r){case"<":n=e<t;break;case"<=":n=e<=t;break;case">":n=e>t;break;case">=":n=e>=t}return n}}function H(e,t){var r=!1;if(void 0===e||void 0===t)return!1;Array.isArray(t)||(t=[t]);for(var n=0;n<t.length;n++)if(t[n]===e){r=!0;break}return r}function Z(e,t,r){return B.apply(this,arguments)}function B(){return(B=p(s().mark(function e(t,r,n){var a,o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=J(t),e.t0=n,e.next="and"===e.t0?4:"or"===e.t0?13:22;break;case 4:if(e.t1=o,!e.t1){e.next=11;break}return e.t2=J,e.next=9,r();case 9:e.t3=e.sent,e.t1=(0,e.t2)(e.t3);case 11:return a=e.t1,e.abrupt("break",22);case 13:if(e.t4=o,e.t4){e.next=20;break}return e.t5=J,e.next=18,r();case 18:e.t6=e.sent,e.t4=(0,e.t5)(e.t6);case 20:return a=e.t4,e.abrupt("break",22);case 22:return e.abrupt("return",a);case 23:case"end":return e.stop()}},e)}))).apply(this,arguments)}function J(e){var t=l.boolean(e);return void 0!==t&&t}function X(e,t){var r="",n="";return void 0!==e&&(r=l.string(e)),void 0!==t&&(n=l.string(t)),r.concat(n)}function Q(e,t,r){return V.apply(this,arguments)}function V(){return(V=p(s().mark(function e(t,r,i){var u,c,f,h,d,v,b,y,g,m,x,k,E,A,S,O,D;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:u={},c={},f=!(!r||!r.tupleStream),Array.isArray(r)||(r=o(r)),0===r.length&&r.push(void 0),h=0;case 6:if(!(h<r.length)){e.next=32;break}d=r[h],v=f?T(i,d):i,b=0;case 10:if(!(b<t.lhs.length)){e.next=29;break}return y=t.lhs[b],e.next=14,w(y[0],f?d["@"]:d,v);case 14:if("string"==typeof(g=e.sent)||void 0===g){e.next=17;break}throw{code:"T1003",stack:(new Error).stack,position:t.position,value:g};case 17:if(void 0===g){e.next=26;break}if(m={data:d,exprIndex:b},!c.hasOwnProperty(g)){e.next=25;break}if(c[g].exprIndex===b){e.next=22;break}throw{code:"D1009",stack:(new Error).stack,position:t.position,value:g};case 22:c[g].data=l.append(c[g].data,d),e.next=26;break;case 25:c[g]=m;case 26:b++,e.next=10;break;case 29:h++,e.next=6;break;case 32:return e.next=34,Promise.all(Object.keys(c).map(function(){var e=p(s().mark(function e(r,n){var a,o,u,p;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=c[r],o=a.data,u=i,f&&(p=K(a.data),o=p["@"],delete p["@"],u=T(i,p)),i.isParallelCall=n>0,e.t0=r,e.next=8,w(t.lhs[a.exprIndex][1],o,u);case 8:return e.t1=e.sent,e.abrupt("return",[e.t0,e.t1]);case 10:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 34:x=e.sent,k=a(x),e.prev=36,k.s();case 38:if((E=k.n()).done){e.next=49;break}return A=E.value,e.next=42,A;case 42:S=e.sent,O=n(S,2),g=O[0],void 0!==(D=O[1])&&(u[g]=D);case 47:e.next=38;break;case 49:e.next=54;break;case 51:e.prev=51,e.t0=e.catch(36),k.e(e.t0);case 54:return e.prev=54,k.f(),e.finish(54);case 57:return e.abrupt("return",u);case 58:case"end":return e.stop()}},e,null,[[36,51,54,57]])}))).apply(this,arguments)}function K(e){if(!Array.isArray(e))return e;var t={};Object.assign(t,e[0]);for(var r=1;r<e.length;r++)for(var n in e[r])t[n]=l.append(t[n],e[r][n]);return t}function ee(e,t){var r;if(void 0!==e&&!Number.isInteger(e))throw{code:"T2003",stack:(new Error).stack,value:e};if(void 0!==t&&!Number.isInteger(t))throw{code:"T2004",stack:(new Error).stack,value:t};if(void 0===e||void 0===t)return r;if(e>t)return r;var n=t-e+1;if(n>1e7)throw{code:"D2014",stack:(new Error).stack,value:n};r=new Array(n);for(var a=e,o=0;a<=t;a++,o++)r[o]=a;return r.sequence=!0,r}function te(e,t,r){return re.apply(this,arguments)}function re(){return(re=p(s().mark(function e(t,r,n){var a;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.rhs,r,n);case 2:return a=e.sent,n.bind(t.lhs.value,a),e.abrupt("return",a);case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ne(e,t,r){return ae.apply(this,arguments)}function ae(){return(ae=p(s().mark(function e(t,r,n){var a,o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.condition,r,n);case 2:if(o=e.sent,!l.boolean(o)){e.next=9;break}return e.next=6,w(t.then,r,n);case 6:a=e.sent,e.next=13;break;case 9:if(void 0===t.else){e.next=13;break}return e.next=12,w(t.else,r,n);case 12:a=e.sent;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function oe(e,t,r){return ie.apply(this,arguments)}function ie(){return(ie=p(s().mark(function e(t,r,n){var a,o,i;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=Fe(n),i=0;case 2:if(!(i<t.expressions.length)){e.next=9;break}return e.next=5,w(t.expressions[i],r,o);case 5:a=e.sent;case 6:i++,e.next=2;break;case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function se(e){var t=new Ie.RegexEngine(e.value);return function r(n,a){var o;t.lastIndex=a||0;var i=t.exec(n);if(null!==i){if(o={match:i[0],start:i.index,end:i.index+i[0].length,groups:[]},i.length>1)for(var s=1;s<i.length;s++)o.groups.push(i[s]);o.next=function(){if(!(t.lastIndex>=n.length)){var a=r(n,t.lastIndex);if(a&&""===a.match)throw{code:"D1004",stack:(new Error).stack,position:e.position,value:e.value.source};return a}}}return o}}function ue(e,t,r){return""===e.value?t&&t.outerWrapper?t[0]:t:r.lookup(e.value)}function ce(e,t,r){return pe.apply(this,arguments)}function pe(){return(pe=p(s().mark(function e(t,r,n){var a,o,i,c,f;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o=r,i=!!r.tupleStream,c=function(){var e=p(s().mark(function e(r,a){var o,c,p,f,l,h,d,v,b;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=0,c=0;case 2:if(!(0===o&&c<t.terms.length)){e.next=37;break}return p=t.terms[c],f=r,l=n,i&&(f=r["@"],l=T(n,r)),e.next=9,w(p.expression,f,l);case 9:return h=e.sent,f=a,l=n,i&&(f=a["@"],l=T(n,a)),e.next=15,w(p.expression,f,l);case 15:if(d=e.sent,v=u(h),b=u(d),"undefined"!==v){e.next=21;break}return o="undefined"===b?0:1,e.abrupt("continue",34);case 21:if("undefined"!==b){e.next=24;break}return o=-1,e.abrupt("continue",34);case 24:if(!("string"!==v&&"number"!==v||"string"!==b&&"number"!==b)){e.next=26;break}throw{code:"T2008",stack:(new Error).stack,position:t.position,value:"string"!==v&&"number"!==v?h:d};case 26:if(v===b){e.next=28;break}throw{code:"T2007",stack:(new Error).stack,position:t.position,value:h,value2:d};case 28:if(h!==d){e.next=32;break}return e.abrupt("continue",34);case 32:o=h<d?-1:1;case 33:!0===p.descending&&(o=-o);case 34:c++,e.next=2;break;case 37:return e.abrupt("return",1===o);case 38:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),f={environment:n,input:r},e.next=6,l.sort.apply(f,[o,c]);case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function fe(e,r,n){return Me(function(){var r=p(s().mark(function r(a){var o,i,p,f,l,h,d,v,b,y,g;return s().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(void 0!==a){r.next=2;break}return r.abrupt("return",void 0);case 2:if(o=n.lookup("clone"),c(o)){r.next=5;break}throw{code:"T2013",stack:(new Error).stack,position:e.position};case 5:return r.next=7,ye(o,[a],null,n);case 7:return i=r.sent,r.next=10,w(e.pattern,i,n);case 10:if(void 0===(p=r.sent)){r.next=39;break}Array.isArray(p)||(p=[p]),f=0;case 14:if(!(f<p.length)){r.next=39;break}if(!(l=p[f])||!(l.isPrototypeOf(i)||l instanceof Object.constructor)){r.next=18;break}throw{code:"D1010",stack:(new Error).stack,position:e.position};case 18:return r.next=20,w(e.update,l,n);case 20:if(h=r.sent,"undefined"===(d=u(h))){r.next=26;break}if("object"===d&&null!==h&&!Array.isArray(h)){r.next=25;break}throw{code:"T2011",stack:(new Error).stack,position:e.update.position,value:h};case 25:for(v in h)l[v]=h[v];case 26:if(void 0===e.delete){r.next=36;break}return r.next=29,w(e.delete,l,n);case 29:if(void 0===(b=r.sent)){r.next=36;break}if(y=b,Array.isArray(b)||(b=[b]),t(b)){r.next=35;break}throw{code:"T2012",stack:(new Error).stack,position:e.delete.position,value:y};case 35:for(g=0;g<b.length;g++)"object"===u(l)&&null!==l&&delete l[b[g]];case 36:f++,r.next=14;break;case 39:return r.abrupt("return",i);case 40:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),"<(oa):o>")}var le=d("function($f, $g) { function($x){ $g($f($x)) } }");function he(e,t,r){return de.apply(this,arguments)}function de(){return(de=p(s().mark(function e(t,r,n){var a,o,i,u;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.lhs,r,n);case 2:if(o=e.sent,"function"!==t.rhs.type){e.next=9;break}return e.next=6,ve(t.rhs,r,n,{context:o});case 6:a=e.sent,e.next=26;break;case 9:return e.next=11,w(t.rhs,r,n);case 11:if(i=e.sent,c(i)){e.next=14;break}throw{code:"T2006",stack:(new Error).stack,position:t.position,value:i};case 14:if(!c(o)){e.next=23;break}return e.next=17,w(le,null,n);case 17:return u=e.sent,e.next=20,ye(u,[o,i],null,n);case 20:a=e.sent,e.next=26;break;case 23:return e.next=25,ye(i,[o],null,n);case 25:a=e.sent;case 26:return e.abrupt("return",a);case 27:case"end":return e.stop()}},e)}))).apply(this,arguments)}function ve(e,t,r,n){return be.apply(this,arguments)}function be(){return(be=p(s().mark(function e(t,r,n,a){var o,i,f,l,h,d;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.procedure,r,n);case 2:if(void 0!==(i=e.sent)||"path"!==t.procedure.type||!n.lookup(t.procedure.steps[0].value)){e.next=5;break}throw{code:"T1005",stack:(new Error).stack,position:t.position,token:t.procedure.steps[0].value};case 5:f=[],void 0!==a&&f.push(a.context),l=s().mark(function e(){var a,o;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t.arguments[h],r,n);case 2:a=e.sent,c(a)?((o=function(){var e=p(s().mark(function e(){var t,r,o,i=arguments;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=i.length,r=new Array(t),o=0;o<t;o++)r[o]=i[o];return e.next=3,ye(a,r,null,n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()).arity=m(a),f.push(o)):f.push(a);case 4:case"end":return e.stop()}},e)}),h=0;case 9:if(!(h<t.arguments.length)){e.next=14;break}return e.delegateYield(l(),"t0",11);case 11:h++,e.next=9;break;case 14:return d="path"===t.procedure.type?t.procedure.steps[0].value:t.procedure.value,e.prev=15,"object"===u(i)&&(i.token=d,i.position=t.position),e.next=19,ye(i,f,r,n);case 19:o=e.sent,e.next=27;break;case 22:throw e.prev=22,e.t1=e.catch(15),e.t1.position||(e.t1.position=t.position),e.t1.token||(e.t1.token=d),e.t1;case 27:return e.abrupt("return",o);case 28:case"end":return e.stop()}},e,null,[[15,22]])}))).apply(this,arguments)}function ye(e,t,r,n){return ge.apply(this,arguments)}function ge(){return(ge=p(s().mark(function e(t,r,n,a){var o,i,u,c;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me(t,r,n,a);case 2:o=e.sent;case 3:if(!b(o)||!0!==o.thunk){e.next=25;break}return e.next=6,w(o.body.procedure,o.input,o.environment);case 6:i=e.sent,"variable"===o.body.procedure.type&&(i.token=o.body.procedure.value),i.position=o.body.procedure.position,u=[],c=0;case 11:if(!(c<o.body.arguments.length)){e.next=20;break}return e.t0=u,e.next=15,w(o.body.arguments[c],o.input,o.environment);case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 17:c++,e.next=11;break;case 20:return e.next=22,me(i,u,n,a);case 22:o=e.sent,e.next=3;break;case 25:return e.abrupt("return",o);case 26:case"end":return e.stop()}},e)}))).apply(this,arguments)}function me(e,t,r,n){return xe.apply(this,arguments)}function xe(){return(xe=p(s().mark(function e(t,r,n,a){var o,i,u;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,i=r,t&&(i=Ae(t.signature,r,n)),!b(t)){e.next=9;break}return e.next=6,Se(t,i);case 6:o=e.sent,e.next=28;break;case 9:if(!t||!0!==t._jsonata_function){e.next=19;break}if(u={environment:a,input:n},o=t.implementation.apply(u,i),y(o)&&(o=o.next().value),!g(o)){e.next=17;break}return e.next=16,o;case 16:o=e.sent;case 17:e.next=28;break;case 19:if("function"!=typeof t){e.next=27;break}if(o=t.apply(n,i),!g(o)){e.next=25;break}return e.next=24,o;case 24:o=e.sent;case 25:e.next=28;break;case 27:throw{code:"T1006",stack:(new Error).stack};case 28:e.next=34;break;case 30:throw e.prev=30,e.t0=e.catch(0),t&&(void 0===e.t0.token&&void 0!==t.token&&(e.t0.token=t.token),e.t0.position=t.position||e.t0.position),e.t0;case 34:return e.abrupt("return",o);case 35:case"end":return e.stop()}},e,null,[[0,30]])}))).apply(this,arguments)}function ke(e,t,r){var n={_jsonata_lambda:!0,input:t,environment:r,arguments:e.arguments,signature:e.signature,body:e.body};return!0===e.thunk&&(n.thunk=!0),n.apply=function(){var e=p(s().mark(function e(a,o){return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ye(n,o,t,a?a.environment:r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}(),n}function we(e,t,r){return Ee.apply(this,arguments)}function Ee(){return(Ee=p(s().mark(function e(t,r,n){var a,o,i,u,c;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o=[],i=0;case 2:if(!(i<t.arguments.length)){e.next=16;break}if("operator"!==(u=t.arguments[i]).type||"?"!==u.value){e.next=8;break}o.push(u),e.next=13;break;case 8:return e.t0=o,e.next=11,w(u,r,n);case 11:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 13:i++,e.next=2;break;case 16:return e.next=18,w(t.procedure,r,n);case 18:if(void 0!==(c=e.sent)||"path"!==t.procedure.type||!n.lookup(t.procedure.steps[0].value)){e.next=21;break}throw{code:"T1007",stack:(new Error).stack,position:t.position,token:t.procedure.steps[0].value};case 21:if(!b(c)){e.next=25;break}a=Oe(c,o),e.next=34;break;case 25:if(!c||!0!==c._jsonata_function){e.next=29;break}a=De(c.implementation,o),e.next=34;break;case 29:if("function"!=typeof c){e.next=33;break}a=De(c,o),e.next=34;break;case 33:throw{code:"T1008",stack:(new Error).stack,position:t.position,token:"path"===t.procedure.type?t.procedure.steps[0].value:t.procedure.value};case 34:return e.abrupt("return",a);case 35:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ae(e,t,r){return void 0===e?t:e.validate(t,r)}function Se(e,t){return Te.apply(this,arguments)}function Te(){return(Te=p(s().mark(function e(t,r){var n,a;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Fe(t.environment),t.arguments.forEach(function(e,t){a.bind(e.value,r[t])}),"function"!=typeof t.body){e.next=8;break}return e.next=5,Pe(t.body,a);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,w(t.body,t.input,a);case 10:n=e.sent;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Oe(e,t){var r=Fe(e.environment),n=[];return e.arguments.forEach(function(e,a){var o=t[a];o&&"operator"===o.type&&"?"===o.value?n.push(e):r.bind(e.value,o)}),{_jsonata_lambda:!0,input:e.input,environment:r,arguments:n,body:e.body}}function De(e,t){var r=Le(e),n="function("+(r=r.map(function(e){return"$"+e.trim()})).join(", ")+"){ _ }",a=d(n);return a.body=e,Oe(a,t)}function Pe(e,t){return je.apply(this,arguments)}function je(){return(je=p(s().mark(function e(t,r){var n,a,o,i;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Le(t),a=n.map(function(e){return r.lookup(e.trim())}),o={environment:r},i=t.apply(o,a),!g(i)){e.next=8;break}return e.next=7,i;case 7:i=e.sent;case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Le(e){var t=e.toString();return/\(([^)]*)\)/.exec(t)[1].split(",")}function Me(e,t){var r={_jsonata_function:!0,implementation:e};return void 0!==t&&(r.signature=v(t)),r}function Ce(){return(Ce=p(s().mark(function e(t,r){var n,a,u;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==t){e.next=2;break}return e.abrupt("return",void 0);case 2:n=this.input,void 0!==r&&(n=r,Array.isArray(n)&&!i(n)&&((n=o(n)).outerWrapper=!0)),e.prev=4,a=d(t,!1),e.next=12;break;case 8:throw e.prev=8,e.t0=e.catch(4),Ue(e.t0),{stack:(new Error).stack,code:"D3120",value:e.t0.message,error:e.t0};case 12:return e.prev=12,e.next=15,w(a,n,this.environment);case 15:u=e.sent,e.next=22;break;case 18:throw e.prev=18,e.t1=e.catch(12),Ue(e.t1),{stack:(new Error).stack,code:"D3121",value:e.t1.message,error:e.t1};case 22:return e.abrupt("return",u);case 23:case"end":return e.stop()}},e,this,[[4,8],[12,18]])}))).apply(this,arguments)}function Fe(e){var t={};return{bind:function(e,r){t[e]=r},lookup:function(r){var n;return t.hasOwnProperty(r)?n=t[r]:e&&(n=e.lookup(r)),n},timestamp:e?e.timestamp:null,async:!!e&&e.async,isParallelCall:!!e&&e.isParallelCall,global:e?e.global:{ancestry:[null]}}}k.bind("sum",Me(l.sum,"<a<n>:n>")),k.bind("count",Me(l.count,"<a:n>")),k.bind("max",Me(l.max,"<a<n>:n>")),k.bind("min",Me(l.min,"<a<n>:n>")),k.bind("average",Me(l.average,"<a<n>:n>")),k.bind("string",Me(l.string,"<x-b?:s>")),k.bind("substring",Me(l.substring,"<s-nn?:s>")),k.bind("substringBefore",Me(l.substringBefore,"<s-s:s>")),k.bind("substringAfter",Me(l.substringAfter,"<s-s:s>")),k.bind("lowercase",Me(l.lowercase,"<s-:s>")),k.bind("uppercase",Me(l.uppercase,"<s-:s>")),k.bind("length",Me(l.length,"<s-:n>")),k.bind("trim",Me(l.trim,"<s-:s>")),k.bind("pad",Me(l.pad,"<s-ns?:s>")),k.bind("match",Me(l.match,"<s-f<s:o>n?:a<o>>")),k.bind("contains",Me(l.contains,"<s-(sf):b>")),k.bind("replace",Me(l.replace,"<s-(sf)(sf)n?:s>")),k.bind("split",Me(l.split,"<s-(sf)n?:a<s>>")),k.bind("join",Me(l.join,"<a<s>s?:s>")),k.bind("formatNumber",Me(l.formatNumber,"<n-so?:s>")),k.bind("formatBase",Me(l.formatBase,"<n-n?:s>")),k.bind("formatInteger",Me(f.formatInteger,"<n-s:s>")),k.bind("parseInteger",Me(f.parseInteger,"<s-s:n>")),k.bind("number",Me(l.number,"<(nsb)-:n>")),k.bind("floor",Me(l.floor,"<n-:n>")),k.bind("ceil",Me(l.ceil,"<n-:n>")),k.bind("round",Me(l.round,"<n-n?:n>")),k.bind("abs",Me(l.abs,"<n-:n>")),k.bind("sqrt",Me(l.sqrt,"<n-:n>")),k.bind("power",Me(l.power,"<n-n:n>")),k.bind("random",Me(l.random,"<:n>")),k.bind("boolean",Me(l.boolean,"<x-:b>")),k.bind("not",Me(l.not,"<x-:b>")),k.bind("map",Me(l.map,"<af>")),k.bind("zip",Me(l.zip,"<a+>")),k.bind("filter",Me(l.filter,"<af>")),k.bind("single",Me(l.single,"<af?>")),k.bind("reduce",Me(l.foldLeft,"<afj?:j>")),k.bind("sift",Me(l.sift,"<o-f?:o>")),k.bind("keys",Me(l.keys,"<x-:a<s>>")),k.bind("lookup",Me(l.lookup,"<x-s:x>")),k.bind("append",Me(l.append,"<xx:a>")),k.bind("exists",Me(l.exists,"<x:b>")),k.bind("spread",Me(l.spread,"<x-:a<o>>")),k.bind("merge",Me(l.merge,"<a<o>:o>")),k.bind("reverse",Me(l.reverse,"<a:a>")),k.bind("each",Me(l.each,"<o-f:a>")),k.bind("error",Me(l.error,"<s?:x>")),k.bind("assert",Me(l.assert,"<bs?:x>")),k.bind("type",Me(l.type,"<x:s>")),k.bind("sort",Me(l.sort,"<af?:a>")),k.bind("shuffle",Me(l.shuffle,"<a:a>")),k.bind("distinct",Me(l.distinct,"<x:x>")),k.bind("base64encode",Me(l.base64encode,"<s-:s>")),k.bind("base64decode",Me(l.base64decode,"<s-:s>")),k.bind("encodeUrlComponent",Me(l.encodeUrlComponent,"<s-:s>")),k.bind("encodeUrl",Me(l.encodeUrl,"<s-:s>")),k.bind("decodeUrlComponent",Me(l.decodeUrlComponent,"<s-:s>")),k.bind("decodeUrl",Me(l.decodeUrl,"<s-:s>")),k.bind("eval",Me(function(e,t){return Ce.apply(this,arguments)},"<sx?:x>")),k.bind("toMillis",Me(f.toMillis,"<s-s?:n>")),k.bind("fromMillis",Me(f.fromMillis,"<n-s?s?:s>")),k.bind("clone",Me(function(e){if(void 0!==e)return JSON.parse(l.string(e))},"<(oa)-:o>"));var Ne={S0101:"String literal must be terminated by a matching quote",S0102:"Number out of range: {{token}}",S0103:"Unsupported escape sequence: \\{{token}}",S0104:"The escape sequence \\u must be followed by 4 hex digits",S0105:"Quoted property name must be terminated with a backquote (`)",S0106:"Comment has no closing tag",S0201:"Syntax error: {{token}}",S0202:"Expected {{value}}, got {{token}}",S0203:"Expected {{value}} before end of expression",S0204:"Unknown operator: {{token}}",S0205:"Unexpected token: {{token}}",S0206:"Unknown expression type: {{token}}",S0207:"Unexpected end of expression",S0208:"Parameter {{value}} of function definition must be a variable name (start with $)",S0209:"A predicate cannot follow a grouping expression in a step",S0210:"Each step can only have one grouping expression",S0211:"The symbol {{token}} cannot be used as a unary operator",S0212:"The left side of := must be a variable name (start with $)",S0213:"The literal value {{value}} cannot be used as a step within a path expression",S0214:"The right side of {{token}} must be a variable name (start with $)",S0215:"A context variable binding must precede any predicates on a step",S0216:"A context variable binding must precede the 'order-by' clause on a step",S0217:"The object representing the 'parent' cannot be derived from this expression",S0301:"Empty regular expressions are not allowed",S0302:"No terminating / in regular expression",S0402:"Choice groups containing parameterized types are not supported",S0401:"Type parameters can only be applied to functions and arrays",S0500:"Attempted to evaluate an expression containing syntax error(s)",T0410:"Argument {{index}} of function {{token}} does not match function signature",T0411:"Context value is not a compatible type with argument {{index}} of function {{token}}",T0412:"Argument {{index}} of function {{token}} must be an array of {{type}}",D1001:"Number out of range: {{value}}",D1002:"Cannot negate a non-numeric value: {{value}}",T1003:"Key in object structure must evaluate to a string; got: {{value}}",D1004:"Regular expression matches zero length string",T1005:"Attempted to invoke a non-function. Did you mean ${{{token}}}?",T1006:"Attempted to invoke a non-function",T1007:"Attempted to partially apply a non-function. Did you mean ${{{token}}}?",T1008:"Attempted to partially apply a non-function",D1009:"Multiple key definitions evaluate to same key: {{value}}",D1010:"Attempted to access the Javascript object prototype",T1010:"The matcher function argument passed to function {{token}} does not return the correct object structure",T2001:"The left side of the {{token}} operator must evaluate to a number",T2002:"The right side of the {{token}} operator must evaluate to a number",T2003:"The left side of the range operator (..) must evaluate to an integer",T2004:"The right side of the range operator (..) must evaluate to an integer",D2005:"The left side of := must be a variable name (start with $)",T2006:"The right side of the function application operator ~> must be a function",T2007:"Type mismatch when comparing values {{value}} and {{value2}} in order-by clause",T2008:"The expressions within an order-by clause must evaluate to numeric or string values",T2009:"The values {{value}} and {{value2}} either side of operator {{token}} must be of the same data type",T2010:"The expressions either side of operator {{token}} must evaluate to numeric or string values",T2011:"The insert/update clause of the transform expression must evaluate to an object: {{value}}",T2012:"The delete clause of the transform expression must evaluate to a string or array of strings: {{value}}",T2013:"The transform expression clones the input object using the $clone() function.  This has been overridden in the current scope by a non-function.",D2014:"The size of the sequence allocated by the range operator (..) must not exceed 1e6.  Attempted to allocate {{value}}.",D3001:"Attempting to invoke string function on Infinity or NaN",D3010:"Second argument of replace function cannot be an empty string",D3011:"Fourth argument of replace function must evaluate to a positive number",D3012:"Attempted to replace a matched string with a non-string value",D3020:"Third argument of split function must evaluate to a positive number",D3030:"Unable to cast value to a number: {{value}}",D3040:"Third argument of match function must evaluate to a positive number",D3050:"The second argument of reduce function must be a function with at least two arguments",D3060:"The sqrt function cannot be applied to a negative number: {{value}}",D3061:"The power function has resulted in a value that cannot be represented as a JSON number: base={{value}}, exponent={{exp}}",D3070:"The single argument form of the sort function can only be applied to an array of strings or an array of numbers.  Use the second argument to specify a comparison function",D3080:"The picture string must only contain a maximum of two sub-pictures",D3081:"The sub-picture must not contain more than one instance of the 'decimal-separator' character",D3082:"The sub-picture must not contain more than one instance of the 'percent' character",D3083:"The sub-picture must not contain more than one instance of the 'per-mille' character",D3084:"The sub-picture must not contain both a 'percent' and a 'per-mille' character",D3085:"The mantissa part of a sub-picture must contain at least one character that is either an 'optional digit character' or a member of the 'decimal digit family'",D3086:"The sub-picture must not contain a passive character that is preceded by an active character and that is followed by another active character",D3087:"The sub-picture must not contain a 'grouping-separator' character that appears adjacent to a 'decimal-separator' character",D3088:"The sub-picture must not contain a 'grouping-separator' at the end of the integer part",D3089:"The sub-picture must not contain two adjacent instances of the 'grouping-separator' character",D3090:"The integer part of the sub-picture must not contain a member of the 'decimal digit family' that is followed by an instance of the 'optional digit character'",D3091:"The fractional part of the sub-picture must not contain an instance of the 'optional digit character' that is followed by a member of the 'decimal digit family'",D3092:"A sub-picture that contains a 'percent' or 'per-mille' character must not contain a character treated as an 'exponent-separator'",D3093:"The exponent part of the sub-picture must comprise only of one or more characters that are members of the 'decimal digit family'",D3100:"The radix of the formatBase function must be between 2 and 36.  It was given {{value}}",D3110:"The argument of the toMillis function must be an ISO 8601 formatted timestamp. Given {{value}}",D3120:"Syntax error in expression passed to function eval: {{value}}",D3121:"Dynamic error evaluating the expression passed to function eval: {{value}}",D3130:"Formatting or parsing an integer as a sequence starting with {{value}} is not supported by this implementation",D3131:"In a decimal digit pattern, all digits must be from the same decimal group",D3132:"Unknown component specifier {{value}} in date/time picture string",D3133:"The 'name' modifier can only be applied to months and days in the date/time picture string, not {{value}}",D3134:"The timezone integer format specifier cannot have more than four digits",D3135:"No matching closing bracket ']' in date/time picture string",D3136:"The date/time picture string is missing specifiers required to parse the timestamp",D3137:"{{{message}}}",D3138:"The $single() function expected exactly 1 matching result.  Instead it matched more.",D3139:"The $single() function expected exactly 1 matching result.  Instead it matched 0.",D3140:"Malformed URL passed to ${{{functionName}}}(): {{value}}",D3141:"{{{message}}}"};function Ue(e){var t=Ne[e.code];if(void 0!==t){var r=t.replace(/\{\{\{([^}]+)}}}/g,function(){return e[arguments[1]]});r=r.replace(/\{\{([^}]+)}}/g,function(){return JSON.stringify(e[arguments[1]])}),e.message=r}}function Ie(e,t){var r,n;try{r=d(e,t&&t.recover),n=r.errors,delete r.errors}catch(e){throw Ue(e),e}var a=Fe(k),u=new Date;return a.bind("now",Me(function(e,t){return f.fromMillis(u.getTime(),e,t)},"<s?s?:s>")),a.bind("millis",Me(function(){return u.getTime()},"<:n>")),t&&t.RegexEngine?Ie.RegexEngine=t.RegexEngine:Ie.RegexEngine=RegExp,{evaluate:function(){var e=p(s().mark(function e(t,c,p){var f,l,h,d;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===n){e.next=4;break}throw Ue(f={code:"S0500",position:0}),f;case 4:if(void 0!==c)for(h in l=Fe(a),c)l.bind(h,c[h]);else l=a;return l.bind("$",t),u=new Date,l.timestamp=u,Array.isArray(t)&&!i(t)&&((t=o(t)).outerWrapper=!0),e.prev=9,e.next=12,w(r,t,l);case 12:return d=e.sent,"function"==typeof p&&p(null,d),e.abrupt("return",d);case 17:throw e.prev=17,e.t0=e.catch(9),Ue(e.t0),e.t0;case 21:case"end":return e.stop()}},e,null,[[9,17]])}));return function(t,r,n){return e.apply(this,arguments)}}(),assign:function(e,t){a.bind(e,t)},registerFunction:function(e,t,r){var n=Me(t,r);a.bind(e,n)},ast:function(){return r},errors:function(){return n}}}return Ie.parser=d,Ie}();t.exports=b},{"./datetime":1,"./functions":2,"./parser":4,"./signature":5,"./utils":6}],4:[function(e,t,r){"use strict";var n,a,o,i=e("./signature"),s=(n={".":75,"[":80,"]":0,"{":70,"}":0,"(":80,")":0,",":0,"@":80,"#":80,";":80,":":80,"?":20,"+":50,"-":50,"*":60,"/":60,"%":60,"|":20,"=":40,"<":40,">":40,"^":40,"**":60,"..":20,":=":10,"!=":40,"<=":40,">=":40,"~>":40,and:30,or:25,in:40,"&":50,"!":0,"~":0},a={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},o=function(e){var t=0,r=e.length,o=function(e,r){return{type:e,value:r,position:t}};return function i(s){if(t>=r)return null;for(var u=e.charAt(t);t<r&&" \t\n\r\v".indexOf(u)>-1;)t++,u=e.charAt(t);if("/"===u&&"*"===e.charAt(t+1)){var c=t;for(t+=2,u=e.charAt(t);"*"!==u||"/"!==e.charAt(t+1);)if(u=e.charAt(++t),t>=r)throw{code:"S0106",stack:(new Error).stack,position:c};return t+=2,u=e.charAt(t),i(s)}if(!0!==s&&"/"===u)return t++,o("regex",function(){for(var n,a,o=t,i=0,s=function(t){if("/"===e.charAt(t)&&0===i){for(var r=0;"\\"===e.charAt(t-(r+1));)r++;if(r%2==0)return!0}return!1};t<r;){var u=e.charAt(t);if(s(t)){if(""===(n=e.substring(o,t)))throw{code:"S0301",stack:(new Error).stack,position:t};for(t++,u=e.charAt(t),o=t;"i"===u||"m"===u;)t++,u=e.charAt(t);return a=e.substring(o,t)+"g",new RegExp(n,a)}"("!==u&&"["!==u&&"{"!==u||"\\"===e.charAt(t-1)||i++,")"!==u&&"]"!==u&&"}"!==u||"\\"===e.charAt(t-1)||i--,t++}throw{code:"S0302",stack:(new Error).stack,position:t}}());if("."===u&&"."===e.charAt(t+1))return t+=2,o("operator","..");if(":"===u&&"="===e.charAt(t+1))return t+=2,o("operator",":=");if("!"===u&&"="===e.charAt(t+1))return t+=2,o("operator","!=");if(">"===u&&"="===e.charAt(t+1))return t+=2,o("operator",">=");if("<"===u&&"="===e.charAt(t+1))return t+=2,o("operator","<=");if("*"===u&&"*"===e.charAt(t+1))return t+=2,o("operator","**");if("~"===u&&">"===e.charAt(t+1))return t+=2,o("operator","~>");if(Object.prototype.hasOwnProperty.call(n,u))return t++,o("operator",u);if('"'===u||"'"===u){var p=u;t++;for(var f="";t<r;){if("\\"===(u=e.charAt(t)))if(t++,u=e.charAt(t),Object.prototype.hasOwnProperty.call(a,u))f+=a[u];else{if("u"!==u)throw{code:"S0103",stack:(new Error).stack,position:t,token:u};var l=e.substr(t+1,4);if(!/^[0-9a-fA-F]+$/.test(l))throw{code:"S0104",stack:(new Error).stack,position:t};var h=parseInt(l,16);f+=String.fromCharCode(h),t+=4}else{if(u===p)return t++,o("string",f);f+=u}t++}throw{code:"S0101",stack:(new Error).stack,position:t}}var d,v=/^-?(0|([1-9][0-9]*))(\.[0-9]+)?([Ee][-+]?[0-9]+)?/.exec(e.substring(t));if(null!==v){var b=parseFloat(v[0]);if(!isNaN(b)&&isFinite(b))return t+=v[0].length,o("number",b);throw{code:"S0102",stack:(new Error).stack,position:t,token:v[0]}}if("`"===u){t++;var y=e.indexOf("`",t);if(-1!==y)return d=e.substring(t,y),t=y+1,o("name",d);throw t=r,{code:"S0105",stack:(new Error).stack,position:t}}for(var g,m=t;;)if(g=e.charAt(m),m===r||" \t\n\r\v".indexOf(g)>-1||Object.prototype.hasOwnProperty.call(n,g)){if("$"===e.charAt(t))return d=e.substring(t+1,m),t=m,o("variable",d);switch(d=e.substring(t,m),t=m,d){case"or":case"in":case"and":return o("operator",d);case"true":return o("value",!0);case"false":return o("value",!1);case"null":return o("value",null);default:return t===r&&""===d?null:o("name",d)}}else m++}},function(e,t){var r,a,s={},u=[],c=function(){var e=[];"(end)"!==r.id&&e.push({type:r.type,value:r.value,position:r.position});for(var t=a();null!==t;)e.push(t),t=a();return e},p={nud:function(){var e={code:"S0211",token:this.value,position:this.position};if(t)return e.remaining=c(),e.type="error",u.push(e),e;throw e.stack=(new Error).stack,e}},f=function(e,t){var r=s[e];return t=t||0,r?t>=r.lbp&&(r.lbp=t):((r=Object.create(p)).id=r.value=e,r.lbp=t,s[e]=r),r},l=function(e){if(t){e.remaining=c(),u.push(e);var n=s["(error)"];return(r=Object.create(n)).error=e,r.type="(error)",r}throw e.stack=(new Error).stack,e},h=function(t,n){if(t&&r.id!==t){var o={code:"(end)"===r.id?"S0203":"S0202",position:r.position,token:r.value,value:t};return l(o)}var i=a(n);if(null===i)return(r=s["(end)"]).position=e.length,r;var u,c=i.value,p=i.type;switch(p){case"name":case"variable":u=s["(name)"];break;case"operator":if(!(u=s[c]))return l({code:"S0204",stack:(new Error).stack,position:i.position,token:c});break;case"string":case"number":case"value":u=s["(literal)"];break;case"regex":p="regex",u=s["(regex)"];break;default:return l({code:"S0205",stack:(new Error).stack,position:i.position,token:c})}return(r=Object.create(u)).value=c,r.type=p,r.position=i.position,r},d=function(e){var t,n=r;for(h(null,!0),t=n.nud();e<r.lbp;)n=r,h(),t=n.led(t);return t},v=function(e){f(e,0).nud=function(){return this}},b=function(e,t,r){var a=t||n[e],o=f(e,a);return o.led=r||function(e){return this.lhs=e,this.rhs=d(a),this.type="binary",this},o},y=function(e,t,r){var n=f(e,t);return n.led=r,n},g=function(e,t){var r=f(e);return r.nud=t||function(){return this.expression=d(70),this.type="unary",this},r};v("(end)"),v("(name)"),v("(literal)"),v("(regex)"),f(":"),f(";"),f(","),f(")"),f("]"),f("}"),f(".."),b("."),b("+"),b("-"),b("*"),b("/"),b("%"),b("="),b("<"),b(">"),b("!="),b("<="),b(">="),b("&"),b("and"),b("or"),b("in"),v("and"),v("or"),v("in"),g("-"),b("~>"),y("(error)",10,function(e){return this.lhs=e,this.error=r.error,this.remaining=c(),this.type="error",this}),g("*",function(){return this.type="wildcard",this}),g("**",function(){return this.type="descendant",this}),g("%",function(){return this.type="parent",this}),b("(",n["("],function(e){if(this.procedure=e,this.type="function",this.arguments=[],")"!==r.id)for(;"operator"===r.type&&"?"===r.id?(this.type="partial",this.arguments.push(r),h("?")):this.arguments.push(d(0)),","===r.id;)h(",");if(h(")",!0),"name"===e.type&&("function"===e.value||"λ"===e.value)){if(this.arguments.forEach(function(e,t){if("variable"!==e.type)return l({code:"S0208",stack:(new Error).stack,position:e.position,token:e.value,value:t+1})}),this.type="lambda","<"===r.id){for(var t=r.position,n=1,a="<";n>0&&"{"!==r.id&&"(end)"!==r.id;){var o=h();">"===o.id?n--:"<"===o.id&&n++,a+=o.value}h(">");try{this.signature=i(a)}catch(e){return e.position=t+e.offset,l(e)}}h("{"),this.body=d(0),h("}")}return this}),g("(",function(){for(var e=[];")"!==r.id&&(e.push(d(0)),";"===r.id);)h(";");return h(")",!0),this.type="block",this.expressions=e,this}),g("[",function(){var e=[];if("]"!==r.id)for(;;){var t=d(0);if(".."===r.id){var n={type:"binary",value:"..",position:r.position,lhs:t};h(".."),n.rhs=d(0),t=n}if(e.push(t),","!==r.id)break;h(",")}return h("]",!0),this.expressions=e,this.type="unary",this}),b("[",n["["],function(e){if("]"===r.id){for(var t=e;t&&"binary"===t.type&&"["===t.value;)t=t.lhs;return t.keepArray=!0,h("]"),e}return this.lhs=e,this.rhs=d(n["]"]),this.type="binary",h("]",!0),this}),b("^",n["^"],function(e){h("(");for(var t=[];;){var n={descending:!1};if("<"===r.id?h("<"):">"===r.id&&(n.descending=!0,h(">")),n.expression=d(0),t.push(n),","!==r.id)break;h(",")}return h(")"),this.lhs=e,this.rhs=t,this.type="binary",this});var m=function(e){var t=[];if("}"!==r.id)for(;;){var n=d(0);h(":");var a=d(0);if(t.push([n,a]),","!==r.id)break;h(",")}return h("}",!0),void 0===e?(this.lhs=t,this.type="unary"):(this.lhs=e,this.rhs=t,this.type="binary"),this};g("{",m),b("{",n["{"],m),y(":=",n[":="],function(e){return"variable"!==e.type?l({code:"S0212",stack:(new Error).stack,position:e.position,token:e.value}):(this.lhs=e,this.rhs=d(n[":="]-1),this.type="binary",this)}),b("@",n["@"],function(e){return this.lhs=e,this.rhs=d(n["@"]),"variable"!==this.rhs.type?l({code:"S0214",stack:(new Error).stack,position:this.rhs.position,token:"@"}):(this.type="binary",this)}),b("#",n["#"],function(e){return this.lhs=e,this.rhs=d(n["#"]),"variable"!==this.rhs.type?l({code:"S0214",stack:(new Error).stack,position:this.rhs.position,token:"#"}):(this.type="binary",this)}),b("?",n["?"],function(e){return this.type="condition",this.condition=e,this.then=d(0),":"===r.id&&(h(":"),this.else=d(0)),this}),g("|",function(){return this.type="transform",this.pattern=d(0),h("|"),this.update=d(0),","===r.id&&(h(","),this.delete=d(0)),h("|"),this});var x=0,k=0,w=[],E=function e(t,r){switch(t.type){case"name":case"wildcard":r.level--,0===r.level&&(void 0===t.ancestor?t.ancestor=r:(w[r.index].slot.label=t.ancestor.label,t.ancestor=r),t.tuple=!0);break;case"parent":r.level++;break;case"block":t.expressions.length>0&&(t.tuple=!0,r=e(t.expressions[t.expressions.length-1],r));break;case"path":t.tuple=!0;var n=t.steps.length-1;for(r=e(t.steps[n--],r);r.level>0&&n>=0;)r=e(t.steps[n--],r);break;default:throw{code:"S0217",token:t.type,position:t.position}}return r},A=function(e,t){if(void 0!==t.seekingParent||"parent"===t.type){var r=void 0!==t.seekingParent?t.seekingParent:[];"parent"===t.type&&r.push(t.slot),void 0===e.seekingParent?e.seekingParent=r:Array.prototype.push.apply(e.seekingParent,r)}},S=function(e){var t=e.steps.length-1,r=e.steps[t],n=void 0!==r.seekingParent?r.seekingParent:[];"parent"===r.type&&n.push(r.slot);for(var a=0;a<n.length;a++){var o=n[a];for(t=e.steps.length-2;o.level>0;){if(t<0){void 0===e.seekingParent?e.seekingParent=[o]:e.seekingParent.push(o);break}for(var i=e.steps[t--];t>=0&&i.focus&&e.steps[t].focus;)i=e.steps[t--];o=E(i,o)}}};a=o(e),h();var T=d(0);if("(end)"!==r.id){var O={code:"S0201",position:r.position,token:r.value};l(O)}if("parent"===(T=function e(r){var n;switch(r.type){case"binary":switch(r.value){case".":var a=e(r.lhs);n="path"===a.type?a:{type:"path",steps:[a]},"parent"===a.type&&(n.seekingParent=[a.slot]);var o=e(r.rhs);"function"===o.type&&"path"===o.procedure.type&&1===o.procedure.steps.length&&"name"===o.procedure.steps[0].type&&"function"===n.steps[n.steps.length-1].type&&(n.steps[n.steps.length-1].nextFunction=o.procedure.steps[0].value),"path"===o.type?Array.prototype.push.apply(n.steps,o.steps):(void 0!==o.predicate&&(o.stages=o.predicate,delete o.predicate),n.steps.push(o)),n.steps.filter(function(e){if("number"===e.type||"value"===e.type)throw{code:"S0213",stack:(new Error).stack,position:e.position,value:e.value};return"string"===e.type}).forEach(function(e){e.type="name"}),n.steps.filter(function(e){return!0===e.keepArray}).length>0&&(n.keepSingletonArray=!0);var i=n.steps[0];"unary"===i.type&&"["===i.value&&(i.consarray=!0);var s=n.steps[n.steps.length-1];"unary"===s.type&&"["===s.value&&(s.consarray=!0),S(n);break;case"[":var c=n=e(r.lhs),p="predicate";if("path"===n.type&&(c=n.steps[n.steps.length-1],p="stages"),void 0!==c.group)throw{code:"S0209",stack:(new Error).stack,position:r.position};void 0===c[p]&&(c[p]=[]);var f=e(r.rhs);void 0!==f.seekingParent&&(f.seekingParent.forEach(function(e){1===e.level?E(c,e):e.level--}),A(c,f)),c[p].push({type:"filter",expr:f,position:r.position});break;case"{":if(void 0!==(n=e(r.lhs)).group)throw{code:"S0210",stack:(new Error).stack,position:r.position};n.group={lhs:r.rhs.map(function(t){return[e(t[0]),e(t[1])]}),position:r.position};break;case"^":"path"!==(n=e(r.lhs)).type&&(n={type:"path",steps:[n]});var l={type:"sort",position:r.position};l.terms=r.rhs.map(function(t){var r=e(t.expression);return A(l,r),{descending:t.descending,expression:r}}),n.steps.push(l),S(n);break;case":=":(n={type:"bind",value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs),A(n,n.rhs);break;case"@":if(n=e(r.lhs),c=n,"path"===n.type&&(c=n.steps[n.steps.length-1]),void 0!==c.stages||void 0!==c.predicate)throw{code:"S0215",stack:(new Error).stack,position:r.position};if("sort"===c.type)throw{code:"S0216",stack:(new Error).stack,position:r.position};r.keepArray&&(c.keepArray=!0),c.focus=r.rhs.value,c.tuple=!0;break;case"#":n=e(r.lhs),c=n,"path"===n.type?c=n.steps[n.steps.length-1]:(n={type:"path",steps:[n]},void 0!==c.predicate&&(c.stages=c.predicate,delete c.predicate)),void 0===c.stages?c.index=r.rhs.value:c.stages.push({type:"index",value:r.rhs.value,position:r.position}),c.tuple=!0;break;case"~>":(n={type:"apply",value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs);break;default:(n={type:r.type,value:r.value,position:r.position}).lhs=e(r.lhs),n.rhs=e(r.rhs),A(n,n.lhs),A(n,n.rhs)}break;case"unary":n={type:r.type,value:r.value,position:r.position},"["===r.value?n.expressions=r.expressions.map(function(t){var r=e(t);return A(n,r),r}):"{"===r.value?n.lhs=r.lhs.map(function(t){var r=e(t[0]);A(n,r);var a=e(t[1]);return A(n,a),[r,a]}):(n.expression=e(r.expression),"-"===r.value&&"number"===n.expression.type?(n=n.expression).value=-n.value:A(n,n.expression));break;case"function":case"partial":(n={type:r.type,name:r.name,value:r.value,position:r.position}).arguments=r.arguments.map(function(t){var r=e(t);return A(n,r),r}),n.procedure=e(r.procedure);break;case"lambda":n={type:r.type,arguments:r.arguments,signature:r.signature,position:r.position};var h=e(r.body);n.body=function e(t){var r;if("function"!==t.type||t.predicate)if("condition"===t.type)t.then=e(t.then),void 0!==t.else&&(t.else=e(t.else)),r=t;else if("block"===t.type){var n=t.expressions.length;n>0&&(t.expressions[n-1]=e(t.expressions[n-1])),r=t}else r=t;else{var a={type:"lambda",thunk:!0,arguments:[],position:t.position};a.body=t,r=a}return r}(h);break;case"condition":(n={type:r.type,position:r.position}).condition=e(r.condition),A(n,n.condition),n.then=e(r.then),A(n,n.then),void 0!==r.else&&(n.else=e(r.else),A(n,n.else));break;case"transform":(n={type:r.type,position:r.position}).pattern=e(r.pattern),n.update=e(r.update),void 0!==r.delete&&(n.delete=e(r.delete));break;case"block":(n={type:r.type,position:r.position}).expressions=r.expressions.map(function(t){var r=e(t);return A(n,r),(r.consarray||"path"===r.type&&r.steps[0].consarray)&&(n.consarray=!0),r});break;case"name":n={type:"path",steps:[r]},r.keepArray&&(n.keepSingletonArray=!0);break;case"parent":n={type:"parent",slot:{label:"!"+x++,level:1,index:k++}},w.push(n);break;case"string":case"number":case"value":case"wildcard":case"descendant":case"variable":case"regex":n=r;break;case"operator":if("and"===r.value||"or"===r.value||"in"===r.value)r.type="name",n=e(r);else{if("?"!==r.value)throw{code:"S0201",stack:(new Error).stack,position:r.position,token:r.value};n=r}break;case"error":n=r,r.lhs&&(n=e(r.lhs));break;default:var d="S0206";"(end)"===r.id&&(d="S0207");var v={code:d,position:r.position,token:r.value};if(t)return u.push(v),{type:"error",error:v};throw v.stack=(new Error).stack,v}return r.keepArray&&(n.keepArray=!0),n}(T)).type||void 0!==T.seekingParent)throw{code:"S0217",token:T.type,position:T.position};return u.length>0&&(T.errors=u),T});t.exports=s},{"./signature":5}],5:[function(e,t,r){"use strict";function n(e){"@babel/helpers - typeof";return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=e("./utils"),o=function(){var e={a:"arrays",b:"booleans",f:"functions",n:"numbers",o:"objects",s:"strings"};return function(t){for(var r=1,o=[],i={},s=i;r<t.length;){var u=t.charAt(r);if(":"===u)break;var c=function(){o.push(i),s=i,i={}},p=function(e,t,r,n){for(var a=1,o=t;o<e.length;)if(o++,(u=e.charAt(o))===n){if(0==--a)break}else u===r&&a++;return o};switch(u){case"s":case"n":case"b":case"l":case"o":i.regex="["+u+"m]",i.type=u,c();break;case"a":i.regex="[asnblfom]",i.type=u,i.array=!0,c();break;case"f":i.regex="f",i.type=u,c();break;case"j":i.regex="[asnblom]",i.type=u,c();break;case"x":i.regex="[asnblfom]",i.type=u,c();break;case"-":s.context=!0,s.contextRegex=new RegExp(s.regex),s.regex+="?";break;case"?":case"+":s.regex+=u;break;case"(":var f=p(t,r,"(",")"),l=t.substring(r+1,f);if(-1!==l.indexOf("<"))throw{code:"S0402",stack:(new Error).stack,value:l,offset:r};i.regex="["+l+"m]",i.type="("+l+")",r=f,c();break;case"<":if("a"!==s.type&&"f"!==s.type)throw{code:"S0401",stack:(new Error).stack,value:s.type,offset:r};var h=p(t,r,"<",">");s.subtype=t.substring(r+1,h),r=h}r++}var d="^"+o.map(function(e){return"("+e.regex+")"}).join("")+"$",v=new RegExp(d),b=function(e){var t;if(a.isFunction(e))t="f";else switch(n(e)){case"string":t="s";break;case"number":t="n";break;case"boolean":t="b";break;case"object":t=null===e?"l":Array.isArray(e)?"a":"o";break;case"undefined":default:t="m"}return t};return{definition:t,validate:function(t,r){var n="";t.forEach(function(e){n+=b(e)});var a=v.exec(n);if(a){var i=[],s=0;return o.forEach(function(n,o){var u=t[s],c=a[o+1];if(""===c)if(n.context&&n.contextRegex){var p=b(r);if(!n.contextRegex.test(p))throw{code:"T0411",stack:(new Error).stack,value:r,index:s+1};i.push(r)}else i.push(u),s++;else c.split("").forEach(function(r){if("a"===n.type){if("m"===r)u=void 0;else{u=t[s];var a=!0;if(void 0!==n.subtype)if("a"!==r&&c!==n.subtype)a=!1;else if("a"===r&&u.length>0){var o=b(u[0]);a=o===n.subtype.charAt(0)&&0===u.filter(function(e){return b(e)!==o}).length}if(!a)throw{code:"T0412",stack:(new Error).stack,value:u,index:s+1,type:e[n.subtype]};"a"!==r&&(u=[u])}i.push(u),s++}else i.push(u),s++})}),i}!function(e,t){for(var r="^",n=0,a=0;a<o.length;a++){r+=o[a].regex;var i=t.match(r);if(null===i)throw{code:"T0410",stack:(new Error).stack,value:e[n],index:n+1};n=i[0].length}throw{code:"T0410",stack:(new Error).stack,value:e[n],index:n+1}}(t,n)}}}}();t.exports=o},{"./utils":6}],6:[function(e,t,r){"use strict";function n(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){u=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(u)throw i}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e){"@babel/helpers - typeof";return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=function(){function e(e){var t=!1;if("number"==typeof e&&(t=!isNaN(e))&&!isFinite(e))throw{code:"D1001",value:e,stack:(new Error).stack};return t}var t=("function"==typeof Symbol?Symbol:{}).iterator||"@@iterator";return{isNumeric:e,isArrayOfStrings:function(e){var t=!1;return Array.isArray(e)&&(t=0===e.filter(function(e){return"string"!=typeof e}).length),t},isArrayOfNumbers:function(t){var r=!1;return Array.isArray(t)&&(r=0===t.filter(function(t){return!e(t)}).length),r},createSequence:function(){var e=[];return e.sequence=!0,1===arguments.length&&e.push(arguments[0]),e},isSequence:function(e){return!0===e.sequence&&Array.isArray(e)},isFunction:function(e){return e&&(!0===e._jsonata_function||!0===e._jsonata_lambda)||"function"==typeof e},isLambda:function(e){return e&&!0===e._jsonata_lambda},isIterable:function(e){return"object"===o(e)&&null!==e&&t in e&&"next"in e&&"function"==typeof e.next},getFunctionArity:function(e){return"number"==typeof e.arity?e.arity:"function"==typeof e.implementation?e.implementation.length:"number"==typeof e.length?e.length:e.arguments.length},isDeepEqual:function e(t,r){if(t===r)return!0;if("object"===o(t)&&"object"===o(r)&&null!==t&&null!==r){if(Array.isArray(t)&&Array.isArray(r)){if(t.length!==r.length)return!1;for(var n=0;n<t.length;n++)if(!e(t[n],r[n]))return!1;return!0}var a=Object.getOwnPropertyNames(t),i=Object.getOwnPropertyNames(r);if(a.length!==i.length)return!1;for(a=a.sort(),i=i.sort(),n=0;n<a.length;n++)if(a[n]!==i[n])return!1;for(n=0;n<a.length;n++){var s=a[n];if(!e(t[s],r[s]))return!1}return!0}return!1},stringToArray:function(e){var t,r=[],a=n(e);try{for(a.s();!(t=a.n()).done;){var o=t.value;r.push(o)}}catch(e){a.e(e)}finally{a.f()}return r},isPromise:function(e){return"object"===o(e)&&null!==e&&"then"in e&&"function"==typeof e.then}}}();t.exports=i},{}]},{},[3])(3)});;// jsonata-es5.min.js is prepended to this file as part of the Grunt build

;(function(window) {
    if (typeof window.window != "undefined" && window.document)
    return;
    if (window.require && window.define)
    return;

    if (!window.console) {
        window.console = function() {
            var msgs = Array.prototype.slice.call(arguments, 0);
            postMessage({type: "log", data: msgs});
        };
        window.console.error =
        window.console.warn =
        window.console.log =
        window.console.trace = window.console;
    }
    window.window = window;
    window.ace = window;
    window.onerror = function(message, file, line, col, err) {
        postMessage({type: "error", data: {
            message: message,
            data: err.data,
            file: file,
            line: line,
            col: col,
            stack: err.stack
        }});
    };

    window.normalizeModule = function(parentId, moduleName) {
        // normalize plugin requires
        if (moduleName.indexOf("!") !== -1) {
            var chunks = moduleName.split("!");
            return window.normalizeModule(parentId, chunks[0]) + "!" + window.normalizeModule(parentId, chunks[1]);
        }
        // normalize relative requires
        if (moduleName.charAt(0) == ".") {
            var base = parentId.split("/").slice(0, -1).join("/");
            moduleName = (base ? base + "/" : "") + moduleName;

            while (moduleName.indexOf(".") !== -1 && previous != moduleName) {
                var previous = moduleName;
                moduleName = moduleName.replace(/^\.\//, "").replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
            }
        }

        return moduleName;
    };

    window.require = function require(parentId, id) {
        if (!id) {
            id = parentId;
            parentId = null;
        }
        if (!id.charAt)
        throw new Error("worker.js require() accepts only (parentId, id) as arguments");

        id = window.normalizeModule(parentId, id);

        var module = window.require.modules[id];
        if (module) {
            if (!module.initialized) {
                module.initialized = true;
                module.exports = module.factory().exports;
            }
            return module.exports;
        }

        if (!window.require.tlns)
        return console.log("unable to load " + id);

        var path = resolveModuleId(id, window.require.tlns);
        if (path.slice(-3) != ".js") path += ".js";

        window.require.id = id;
        window.require.modules[id] = {}; // prevent infinite loop on broken modules
        importScripts(path);
        return window.require(parentId, id);
    };
    function resolveModuleId(id, paths) {
        var testPath = id, tail = "";
        while (testPath) {
            var alias = paths[testPath];
            if (typeof alias == "string") {
                return alias + tail;
            } else if (alias) {
                return  alias.location.replace(/\/*$/, "/") + (tail || alias.main || alias.name);
            } else if (alias === false) {
                return "";
            }
            var i = testPath.lastIndexOf("/");
            if (i === -1) break;
            tail = testPath.substr(i) + tail;
            testPath = testPath.slice(0, i);
        }
        return id;
    }
    window.require.modules = {};
    window.require.tlns = {};

    window.define = function(id, deps, factory) {
        if (arguments.length == 2) {
            factory = deps;
            if (typeof id != "string") {
                deps = id;
                id = window.require.id;
            }
        } else if (arguments.length == 1) {
            factory = id;
            deps = [];
            id = window.require.id;
        }

        if (typeof factory != "function") {
            window.require.modules[id] = {
                exports: factory,
                initialized: true
            };
            return;
        }

        if (!deps.length)
        // If there is no dependencies, we inject "require", "exports" and
        // "module" as dependencies, to provide CommonJS compatibility.
        deps = ["require", "exports", "module"];

        var req = function(childId) {
            return window.require(id, childId);
        };

        window.require.modules[id] = {
            exports: {},
            factory: function() {
                var module = this;
                var returnExports = factory.apply(this, deps.map(function(dep) {
                    switch (dep) {
                        // Because "require", "exports" and "module" aren't actual
                        // dependencies, we must handle them seperately.
                        case "require": return req;
                        case "exports": return module.exports;
                        case "module":  return module;
                        // But for all other dependencies, we can just go ahead and
                        // require them.
                        default:        return req(dep);
                    }
                }));
                if (returnExports)
                module.exports = returnExports;
                return module;
            }
        };
    };
    window.define.amd = {};
    require.tlns = {};
    window.initBaseUrls  = function initBaseUrls(topLevelNamespaces) {
        for (var i in topLevelNamespaces)
        require.tlns[i] = topLevelNamespaces[i];
    };

    window.initSender = function initSender() {

        var EventEmitter = window.require("ace/lib/event_emitter").EventEmitter;
        var oop = window.require("ace/lib/oop");

        var Sender = function() {};

        (function() {

            oop.implement(this, EventEmitter);

            this.callback = function(data, callbackId) {
                postMessage({
                    type: "call",
                    id: callbackId,
                    data: data
                });
            };

            this.emit = function(name, data) {
                postMessage({
                    type: "event",
                    name: name,
                    data: data
                });
            };

        }).call(Sender.prototype);

        return new Sender();
    };

    var main = window.main = null;
    var sender = window.sender = null;

    window.onmessage = function(e) {
        var msg = e.data;
        if (msg.event && sender) {
            sender._signal(msg.event, msg.data);
        }
        else if (msg.command) {
            if (main[msg.command])
            main[msg.command].apply(main, msg.args);
            else if (window[msg.command])
            window[msg.command].apply(window, msg.args);
            else
            throw new Error("Unknown command:" + msg.command);
        }
        else if (msg.init) {
            window.initBaseUrls(msg.tlns);
            require("ace/lib/es5-shim");
            sender = window.sender = window.initSender();
            var clazz = require(msg.module)[msg.classname];
            main = window.main = new clazz(sender);
        }
    };
})(this);

define("ace/lib/oop",["require","exports","module"], function(require, exports, module) {
    "use strict";

    exports.inherits = function(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };

    exports.mixin = function(obj, mixin) {
        for (var key in mixin) {
            obj[key] = mixin[key];
        }
        return obj;
    };

    exports.implement = function(proto, mixin) {
        exports.mixin(proto, mixin);
    };

});

define("ace/range",["require","exports","module"], function(require, exports, module) {
    "use strict";
    var comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };
    var Range = function(startRow, startColumn, endRow, endColumn) {
        this.start = {
            row: startRow,
            column: startColumn
        };

        this.end = {
            row: endRow,
            column: endColumn
        };
    };

    (function() {
        this.isEqual = function(range) {
            return this.start.row === range.start.row &&
            this.end.row === range.end.row &&
            this.start.column === range.start.column &&
            this.end.column === range.end.column;
        };
        this.toString = function() {
            return ("Range: [" + this.start.row + "/" + this.start.column +
            "] -> [" + this.end.row + "/" + this.end.column + "]");
        };

        this.contains = function(row, column) {
            return this.compare(row, column) == 0;
        };
        this.compareRange = function(range) {
            var cmp,
            end = range.end,
            start = range.start;

            cmp = this.compare(end.row, end.column);
            if (cmp == 1) {
                cmp = this.compare(start.row, start.column);
                if (cmp == 1) {
                    return 2;
                } else if (cmp == 0) {
                    return 1;
                } else {
                    return 0;
                }
            } else if (cmp == -1) {
                return -2;
            } else {
                cmp = this.compare(start.row, start.column);
                if (cmp == -1) {
                    return -1;
                } else if (cmp == 1) {
                    return 42;
                } else {
                    return 0;
                }
            }
        };
        this.comparePoint = function(p) {
            return this.compare(p.row, p.column);
        };
        this.containsRange = function(range) {
            return this.comparePoint(range.start) == 0 && this.comparePoint(range.end) == 0;
        };
        this.intersects = function(range) {
            var cmp = this.compareRange(range);
            return (cmp == -1 || cmp == 0 || cmp == 1);
        };
        this.isEnd = function(row, column) {
            return this.end.row == row && this.end.column == column;
        };
        this.isStart = function(row, column) {
            return this.start.row == row && this.start.column == column;
        };
        this.setStart = function(row, column) {
            if (typeof row == "object") {
                this.start.column = row.column;
                this.start.row = row.row;
            } else {
                this.start.row = row;
                this.start.column = column;
            }
        };
        this.setEnd = function(row, column) {
            if (typeof row == "object") {
                this.end.column = row.column;
                this.end.row = row.row;
            } else {
                this.end.row = row;
                this.end.column = column;
            }
        };
        this.inside = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column) || this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideStart = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isEnd(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.insideEnd = function(row, column) {
            if (this.compare(row, column) == 0) {
                if (this.isStart(row, column)) {
                    return false;
                } else {
                    return true;
                }
            }
            return false;
        };
        this.compare = function(row, column) {
            if (!this.isMultiLine()) {
                if (row === this.start.row) {
                    return column < this.start.column ? -1 : (column > this.end.column ? 1 : 0);
                }
            }

            if (row < this.start.row)
            return -1;

            if (row > this.end.row)
            return 1;

            if (this.start.row === row)
            return column >= this.start.column ? 0 : -1;

            if (this.end.row === row)
            return column <= this.end.column ? 0 : 1;

            return 0;
        };
        this.compareStart = function(row, column) {
            if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareEnd = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else {
                return this.compare(row, column);
            }
        };
        this.compareInside = function(row, column) {
            if (this.end.row == row && this.end.column == column) {
                return 1;
            } else if (this.start.row == row && this.start.column == column) {
                return -1;
            } else {
                return this.compare(row, column);
            }
        };
        this.clipRows = function(firstRow, lastRow) {
            if (this.end.row > lastRow)
            var end = {row: lastRow + 1, column: 0};
            else if (this.end.row < firstRow)
            var end = {row: firstRow, column: 0};

            if (this.start.row > lastRow)
            var start = {row: lastRow + 1, column: 0};
            else if (this.start.row < firstRow)
            var start = {row: firstRow, column: 0};

            return Range.fromPoints(start || this.start, end || this.end);
        };
        this.extend = function(row, column) {
            var cmp = this.compare(row, column);

            if (cmp == 0)
            return this;
            else if (cmp == -1)
            var start = {row: row, column: column};
            else
            var end = {row: row, column: column};

            return Range.fromPoints(start || this.start, end || this.end);
        };

        this.isEmpty = function() {
            return (this.start.row === this.end.row && this.start.column === this.end.column);
        };
        this.isMultiLine = function() {
            return (this.start.row !== this.end.row);
        };
        this.clone = function() {
            return Range.fromPoints(this.start, this.end);
        };
        this.collapseRows = function() {
            if (this.end.column == 0)
            return new Range(this.start.row, 0, Math.max(this.start.row, this.end.row-1), 0)
            else
            return new Range(this.start.row, 0, this.end.row, 0)
        };
        this.toScreenRange = function(session) {
            var screenPosStart = session.documentToScreenPosition(this.start);
            var screenPosEnd = session.documentToScreenPosition(this.end);

            return new Range(
                screenPosStart.row, screenPosStart.column,
                screenPosEnd.row, screenPosEnd.column
            );
        };
        this.moveBy = function(row, column) {
            this.start.row += row;
            this.start.column += column;
            this.end.row += row;
            this.end.column += column;
        };

    }).call(Range.prototype);
    Range.fromPoints = function(start, end) {
        return new Range(start.row, start.column, end.row, end.column);
    };
    Range.comparePoints = comparePoints;

    Range.comparePoints = function(p1, p2) {
        return p1.row - p2.row || p1.column - p2.column;
    };


    exports.Range = Range;
});

define("ace/apply_delta",["require","exports","module"], function(require, exports, module) {
    "use strict";

    function throwDeltaError(delta, errorText){
        console.log("Invalid Delta:", delta);
        throw "Invalid Delta: " + errorText;
    }

    function positionInDocument(docLines, position) {
        return position.row    >= 0 && position.row    <  docLines.length &&
        position.column >= 0 && position.column <= docLines[position.row].length;
    }

    function validateDelta(docLines, delta) {
        if (delta.action != "insert" && delta.action != "remove")
        throwDeltaError(delta, "delta.action must be 'insert' or 'remove'");
        if (!(delta.lines instanceof Array))
        throwDeltaError(delta, "delta.lines must be an Array");
        if (!delta.start || !delta.end)
        throwDeltaError(delta, "delta.start/end must be an present");
        var start = delta.start;
        if (!positionInDocument(docLines, delta.start))
        throwDeltaError(delta, "delta.start must be contained in document");
        var end = delta.end;
        if (delta.action == "remove" && !positionInDocument(docLines, end))
        throwDeltaError(delta, "delta.end must contained in document for 'remove' actions");
        var numRangeRows = end.row - start.row;
        var numRangeLastLineChars = (end.column - (numRangeRows == 0 ? start.column : 0));
        if (numRangeRows != delta.lines.length - 1 || delta.lines[numRangeRows].length != numRangeLastLineChars)
        throwDeltaError(delta, "delta.range must match delta lines");
    }

    exports.applyDelta = function(docLines, delta, doNotValidate) {

        var row = delta.start.row;
        var startColumn = delta.start.column;
        var line = docLines[row] || "";
        switch (delta.action) {
            case "insert":
            var lines = delta.lines;
            if (lines.length === 1) {
                docLines[row] = line.substring(0, startColumn) + delta.lines[0] + line.substring(startColumn);
            } else {
                var args = [row, 1].concat(delta.lines);
                docLines.splice.apply(docLines, args);
                docLines[row] = line.substring(0, startColumn) + docLines[row];
                docLines[row + delta.lines.length - 1] += line.substring(startColumn);
            }
            break;
            case "remove":
            var endColumn = delta.end.column;
            var endRow = delta.end.row;
            if (row === endRow) {
                docLines[row] = line.substring(0, startColumn) + line.substring(endColumn);
            } else {
                docLines.splice(
                    row, endRow - row + 1,
                    line.substring(0, startColumn) + docLines[endRow].substring(endColumn)
                );
            }
            break;
        }
    }
});

define("ace/lib/event_emitter",["require","exports","module"], function(require, exports, module) {
    "use strict";

    var EventEmitter = {};
    var stopPropagation = function() { this.propagationStopped = true; };
    var preventDefault = function() { this.defaultPrevented = true; };

    EventEmitter._emit =
    EventEmitter._dispatchEvent = function(eventName, e) {
        this._eventRegistry || (this._eventRegistry = {});
        this._defaultHandlers || (this._defaultHandlers = {});

        var listeners = this._eventRegistry[eventName] || [];
        var defaultHandler = this._defaultHandlers[eventName];
        if (!listeners.length && !defaultHandler)
        return;

        if (typeof e != "object" || !e)
        e = {};

        if (!e.type)
        e.type = eventName;
        if (!e.stopPropagation)
        e.stopPropagation = stopPropagation;
        if (!e.preventDefault)
        e.preventDefault = preventDefault;

        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++) {
            listeners[i](e, this);
            if (e.propagationStopped)
            break;
        }

        if (defaultHandler && !e.defaultPrevented)
        return defaultHandler(e, this);
    };


    EventEmitter._signal = function(eventName, e) {
        var listeners = (this._eventRegistry || {})[eventName];
        if (!listeners)
        return;
        listeners = listeners.slice();
        for (var i=0; i<listeners.length; i++)
        listeners[i](e, this);
    };

    EventEmitter.once = function(eventName, callback) {
        var _self = this;
        callback && this.addEventListener(eventName, function newCallback() {
            _self.removeEventListener(eventName, newCallback);
            callback.apply(null, arguments);
        });
    };


    EventEmitter.setDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        handlers = this._defaultHandlers = {_disabled_: {}};

        if (handlers[eventName]) {
            var old = handlers[eventName];
            var disabled = handlers._disabled_[eventName];
            if (!disabled)
            handlers._disabled_[eventName] = disabled = [];
            disabled.push(old);
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
        handlers[eventName] = callback;
    };
    EventEmitter.removeDefaultHandler = function(eventName, callback) {
        var handlers = this._defaultHandlers
        if (!handlers)
        return;
        var disabled = handlers._disabled_[eventName];

        if (handlers[eventName] == callback) {
            var old = handlers[eventName];
            if (disabled)
            this.setDefaultHandler(eventName, disabled.pop());
        } else if (disabled) {
            var i = disabled.indexOf(callback);
            if (i != -1)
            disabled.splice(i, 1);
        }
    };

    EventEmitter.on =
    EventEmitter.addEventListener = function(eventName, callback, capturing) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        listeners = this._eventRegistry[eventName] = [];

        if (listeners.indexOf(callback) == -1)
        listeners[capturing ? "unshift" : "push"](callback);
        return callback;
    };

    EventEmitter.off =
    EventEmitter.removeListener =
    EventEmitter.removeEventListener = function(eventName, callback) {
        this._eventRegistry = this._eventRegistry || {};

        var listeners = this._eventRegistry[eventName];
        if (!listeners)
        return;

        var index = listeners.indexOf(callback);
        if (index !== -1)
        listeners.splice(index, 1);
    };

    EventEmitter.removeAllListeners = function(eventName) {
        if (this._eventRegistry) this._eventRegistry[eventName] = [];
    };

    exports.EventEmitter = EventEmitter;

});

define("ace/anchor",["require","exports","module","ace/lib/oop","ace/lib/event_emitter"], function(require, exports, module) {
    "use strict";

    var oop = require("./lib/oop");
    var EventEmitter = require("./lib/event_emitter").EventEmitter;

    var Anchor = exports.Anchor = function(doc, row, column) {
        this.$onChange = this.onChange.bind(this);
        this.attach(doc);

        if (typeof column == "undefined")
        this.setPosition(row.row, row.column);
        else
        this.setPosition(row, column);
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.getPosition = function() {
            return this.$clipPositionToDocument(this.row, this.column);
        };
        this.getDocument = function() {
            return this.document;
        };
        this.$insertRight = false;
        this.onChange = function(delta) {
            if (delta.start.row == delta.end.row && delta.start.row != this.row)
            return;

            if (delta.start.row > this.row)
            return;

            var point = $getTransformedPoint(delta, {row: this.row, column: this.column}, this.$insertRight);
            this.setPosition(point.row, point.column, true);
        };

        function $pointsInOrder(point1, point2, equalPointsInOrder) {
            var bColIsAfter = equalPointsInOrder ? point1.column <= point2.column : point1.column < point2.column;
            return (point1.row < point2.row) || (point1.row == point2.row && bColIsAfter);
        }

        function $getTransformedPoint(delta, point, moveIfEqual) {
            var deltaIsInsert = delta.action == "insert";
            var deltaRowShift = (deltaIsInsert ? 1 : -1) * (delta.end.row    - delta.start.row);
            var deltaColShift = (deltaIsInsert ? 1 : -1) * (delta.end.column - delta.start.column);
            var deltaStart = delta.start;
            var deltaEnd = deltaIsInsert ? deltaStart : delta.end; // Collapse insert range.
            if ($pointsInOrder(point, deltaStart, moveIfEqual)) {
                return {
                    row: point.row,
                    column: point.column
                };
            }
            if ($pointsInOrder(deltaEnd, point, !moveIfEqual)) {
                return {
                    row: point.row + deltaRowShift,
                    column: point.column + (point.row == deltaEnd.row ? deltaColShift : 0)
                };
            }

            return {
                row: deltaStart.row,
                column: deltaStart.column
            };
        }
        this.setPosition = function(row, column, noClip) {
            var pos;
            if (noClip) {
                pos = {
                    row: row,
                    column: column
                };
            } else {
                pos = this.$clipPositionToDocument(row, column);
            }

            if (this.row == pos.row && this.column == pos.column)
            return;

            var old = {
                row: this.row,
                column: this.column
            };

            this.row = pos.row;
            this.column = pos.column;
            this._signal("change", {
                old: old,
                value: pos
            });
        };
        this.detach = function() {
            this.document.removeEventListener("change", this.$onChange);
        };
        this.attach = function(doc) {
            this.document = doc || this.document;
            this.document.on("change", this.$onChange);
        };
        this.$clipPositionToDocument = function(row, column) {
            var pos = {};

            if (row >= this.document.getLength()) {
                pos.row = Math.max(0, this.document.getLength() - 1);
                pos.column = this.document.getLine(pos.row).length;
            }
            else if (row < 0) {
                pos.row = 0;
                pos.column = 0;
            }
            else {
                pos.row = row;
                pos.column = Math.min(this.document.getLine(pos.row).length, Math.max(0, column));
            }

            if (column < 0)
            pos.column = 0;

            return pos;
        };

    }).call(Anchor.prototype);

});

define("ace/document",["require","exports","module","ace/lib/oop","ace/apply_delta","ace/lib/event_emitter","ace/range","ace/anchor"], function(require, exports, module) {
    "use strict";
    var oop = require("./lib/oop");
    var applyDelta = require("./apply_delta").applyDelta;
    var EventEmitter = require("./lib/event_emitter").EventEmitter;
    var Range = require("./range").Range;
    var Anchor = require("./anchor").Anchor;

    var Document = function(textOrLines) {
        this.$lines = [""];
        if (textOrLines.length === 0) {
            this.$lines = [""];
        } else if (Array.isArray(textOrLines)) {
            this.insertMergedLines({row: 0, column: 0}, textOrLines);
        } else {
            this.insert({row: 0, column:0}, textOrLines);
        }
    };

    (function() {

        oop.implement(this, EventEmitter);
        this.setValue = function(text) {
            var len = this.getLength() - 1;
            this.remove(new Range(0, 0, len, this.getLine(len).length));
            this.insert({row: 0, column: 0}, text);
        };
        this.getValue = function() {
            return this.getAllLines().join(this.getNewLineCharacter());
        };
        this.createAnchor = function(row, column) {
            return new Anchor(this, row, column);
        };
        if ("aaa".split(/a/).length === 0) {
            this.$split = function(text) {
                return text.replace(/\r\n|\r/g, "\n").split("\n");
            };
        } else {
            this.$split = function(text) {
                return text.split(/\r\n|\r|\n/);
            };
        }


        this.$detectNewLine = function(text) {
            var match = text.match(/^.*?(\r\n|\r|\n)/m);
            this.$autoNewLine = match ? match[1] : "\n";
            this._signal("changeNewLineMode");
        };
        this.getNewLineCharacter = function() {
            switch (this.$newLineMode) {
                case "windows":
                return "\r\n";
                case "unix":
                return "\n";
                default:
                return this.$autoNewLine || "\n";
            }
        };

        this.$autoNewLine = "";
        this.$newLineMode = "auto";
        this.setNewLineMode = function(newLineMode) {
            if (this.$newLineMode === newLineMode)
            return;

            this.$newLineMode = newLineMode;
            this._signal("changeNewLineMode");
        };
        this.getNewLineMode = function() {
            return this.$newLineMode;
        };
        this.isNewLine = function(text) {
            return (text == "\r\n" || text == "\r" || text == "\n");
        };
        this.getLine = function(row) {
            return this.$lines[row] || "";
        };
        this.getLines = function(firstRow, lastRow) {
            return this.$lines.slice(firstRow, lastRow + 1);
        };
        this.getAllLines = function() {
            return this.getLines(0, this.getLength());
        };
        this.getLength = function() {
            return this.$lines.length;
        };
        this.getTextRange = function(range) {
            return this.getLinesForRange(range).join(this.getNewLineCharacter());
        };
        this.getLinesForRange = function(range) {
            var lines;
            if (range.start.row === range.end.row) {
                lines = [this.getLine(range.start.row).substring(range.start.column, range.end.column)];
            } else {
                lines = this.getLines(range.start.row, range.end.row);
                lines[0] = (lines[0] || "").substring(range.start.column);
                var l = lines.length - 1;
                if (range.end.row - range.start.row == l)
                lines[l] = lines[l].substring(0, range.end.column);
            }
            return lines;
        };
        this.insertLines = function(row, lines) {
            console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
            return this.insertFullLines(row, lines);
        };
        this.removeLines = function(firstRow, lastRow) {
            console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
            return this.removeFullLines(firstRow, lastRow);
        };
        this.insertNewLine = function(position) {
            console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
            return this.insertMergedLines(position, ["", ""]);
        };
        this.insert = function(position, text) {
            if (this.getLength() <= 1)
            this.$detectNewLine(text);

            return this.insertMergedLines(position, this.$split(text));
        };
        this.insertInLine = function(position, text) {
            var start = this.clippedPos(position.row, position.column);
            var end = this.pos(position.row, position.column + text.length);

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: [text]
            }, true);

            return this.clonePos(end);
        };

        this.clippedPos = function(row, column) {
            var length = this.getLength();
            if (row === undefined) {
                row = length;
            } else if (row < 0) {
                row = 0;
            } else if (row >= length) {
                row = length - 1;
                column = undefined;
            }
            var line = this.getLine(row);
            if (column == undefined)
            column = line.length;
            column = Math.min(Math.max(column, 0), line.length);
            return {row: row, column: column};
        };

        this.clonePos = function(pos) {
            return {row: pos.row, column: pos.column};
        };

        this.pos = function(row, column) {
            return {row: row, column: column};
        };

        this.$clipPosition = function(position) {
            var length = this.getLength();
            if (position.row >= length) {
                position.row = Math.max(0, length - 1);
                position.column = this.getLine(length - 1).length;
            } else {
                position.row = Math.max(0, position.row);
                position.column = Math.min(Math.max(position.column, 0), this.getLine(position.row).length);
            }
            return position;
        };
        this.insertFullLines = function(row, lines) {
            row = Math.min(Math.max(row, 0), this.getLength());
            var column = 0;
            if (row < this.getLength()) {
                lines = lines.concat([""]);
                column = 0;
            } else {
                lines = [""].concat(lines);
                row--;
                column = this.$lines[row].length;
            }
            this.insertMergedLines({row: row, column: column}, lines);
        };
        this.insertMergedLines = function(position, lines) {
            var start = this.clippedPos(position.row, position.column);
            var end = {
                row: start.row + lines.length - 1,
                column: (lines.length == 1 ? start.column : 0) + lines[lines.length - 1].length
            };

            this.applyDelta({
                start: start,
                end: end,
                action: "insert",
                lines: lines
            });

            return this.clonePos(end);
        };
        this.remove = function(range) {
            var start = this.clippedPos(range.start.row, range.start.column);
            var end = this.clippedPos(range.end.row, range.end.column);
            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            });
            return this.clonePos(start);
        };
        this.removeInLine = function(row, startColumn, endColumn) {
            var start = this.clippedPos(row, startColumn);
            var end = this.clippedPos(row, endColumn);

            this.applyDelta({
                start: start,
                end: end,
                action: "remove",
                lines: this.getLinesForRange({start: start, end: end})
            }, true);

            return this.clonePos(start);
        };
        this.removeFullLines = function(firstRow, lastRow) {
            firstRow = Math.min(Math.max(0, firstRow), this.getLength() - 1);
            lastRow  = Math.min(Math.max(0, lastRow ), this.getLength() - 1);
            var deleteFirstNewLine = lastRow == this.getLength() - 1 && firstRow > 0;
            var deleteLastNewLine  = lastRow  < this.getLength() - 1;
            var startRow = ( deleteFirstNewLine ? firstRow - 1                  : firstRow                    );
            var startCol = ( deleteFirstNewLine ? this.getLine(startRow).length : 0                           );
            var endRow   = ( deleteLastNewLine  ? lastRow + 1                   : lastRow                     );
            var endCol   = ( deleteLastNewLine  ? 0                             : this.getLine(endRow).length );
            var range = new Range(startRow, startCol, endRow, endCol);
            var deletedLines = this.$lines.slice(firstRow, lastRow + 1);

            this.applyDelta({
                start: range.start,
                end: range.end,
                action: "remove",
                lines: this.getLinesForRange(range)
            });
            return deletedLines;
        };
        this.removeNewLine = function(row) {
            if (row < this.getLength() - 1 && row >= 0) {
                this.applyDelta({
                    start: this.pos(row, this.getLine(row).length),
                    end: this.pos(row + 1, 0),
                    action: "remove",
                    lines: ["", ""]
                });
            }
        };
        this.replace = function(range, text) {
            if (!(range instanceof Range))
            range = Range.fromPoints(range.start, range.end);
            if (text.length === 0 && range.isEmpty())
            return range.start;
            if (text == this.getTextRange(range))
            return range.end;

            this.remove(range);
            var end;
            if (text) {
                end = this.insert(range.start, text);
            }
            else {
                end = range.start;
            }

            return end;
        };
        this.applyDeltas = function(deltas) {
            for (var i=0; i<deltas.length; i++) {
                this.applyDelta(deltas[i]);
            }
        };
        this.revertDeltas = function(deltas) {
            for (var i=deltas.length-1; i>=0; i--) {
                this.revertDelta(deltas[i]);
            }
        };
        this.applyDelta = function(delta, doNotValidate) {
            var isInsert = delta.action == "insert";
            if (isInsert ? delta.lines.length <= 1 && !delta.lines[0]
                : !Range.comparePoints(delta.start, delta.end)) {
                    return;
                }

                if (isInsert && delta.lines.length > 20000)
                this.$splitAndapplyLargeDelta(delta, 20000);
                applyDelta(this.$lines, delta, doNotValidate);
                this._signal("change", delta);
            };

            this.$splitAndapplyLargeDelta = function(delta, MAX) {
                var lines = delta.lines;
                var l = lines.length;
                var row = delta.start.row;
                var column = delta.start.column;
                var from = 0, to = 0;
                do {
                    from = to;
                    to += MAX - 1;
                    var chunk = lines.slice(from, to);
                    if (to > l) {
                        delta.lines = chunk;
                        delta.start.row = row + from;
                        delta.start.column = column;
                        break;
                    }
                    chunk.push("");
                    this.applyDelta({
                        start: this.pos(row + from, column),
                        end: this.pos(row + to, column = 0),
                        action: delta.action,
                        lines: chunk
                    }, true);
                } while(true);
            };
            this.revertDelta = function(delta) {
                this.applyDelta({
                    start: this.clonePos(delta.start),
                    end: this.clonePos(delta.end),
                    action: (delta.action == "insert" ? "remove" : "insert"),
                    lines: delta.lines.slice()
                });
            };
            this.indexToPosition = function(index, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                for (var i = startRow || 0, l = lines.length; i < l; i++) {
                    index -= lines[i].length + newlineLength;
                    if (index < 0)
                    return {row: i, column: index + lines[i].length + newlineLength};
                }
                return {row: l-1, column: lines[l-1].length};
            };
            this.positionToIndex = function(pos, startRow) {
                var lines = this.$lines || this.getAllLines();
                var newlineLength = this.getNewLineCharacter().length;
                var index = 0;
                var row = Math.min(pos.row, lines.length);
                for (var i = startRow || 0; i < row; ++i)
                index += lines[i].length + newlineLength;

                return index + pos.column;
            };

        }).call(Document.prototype);

        exports.Document = Document;
    });

    define("ace/lib/lang",["require","exports","module"], function(require, exports, module) {
        "use strict";

        exports.last = function(a) {
            return a[a.length - 1];
        };

        exports.stringReverse = function(string) {
            return string.split("").reverse().join("");
        };

        exports.stringRepeat = function (string, count) {
            var result = '';
            while (count > 0) {
                if (count & 1)
                result += string;

                if (count >>= 1)
                string += string;
            }
            return result;
        };

        var trimBeginRegexp = /^\s\s*/;
        var trimEndRegexp = /\s\s*$/;

        exports.stringTrimLeft = function (string) {
            return string.replace(trimBeginRegexp, '');
        };

        exports.stringTrimRight = function (string) {
            return string.replace(trimEndRegexp, '');
        };

        exports.copyObject = function(obj) {
            var copy = {};
            for (var key in obj) {
                copy[key] = obj[key];
            }
            return copy;
        };

        exports.copyArray = function(array){
            var copy = [];
            for (var i=0, l=array.length; i<l; i++) {
                if (array[i] && typeof array[i] == "object")
                copy[i] = this.copyObject(array[i]);
                else
                copy[i] = array[i];
            }
            return copy;
        };

        exports.deepCopy = function deepCopy(obj) {
            if (typeof obj !== "object" || !obj)
            return obj;
            var copy;
            if (Array.isArray(obj)) {
                copy = [];
                for (var key = 0; key < obj.length; key++) {
                    copy[key] = deepCopy(obj[key]);
                }
                return copy;
            }
            if (Object.prototype.toString.call(obj) !== "[object Object]")
            return obj;

            copy = {};
            for (var key in obj)
            copy[key] = deepCopy(obj[key]);
            return copy;
        };

        exports.arrayToMap = function(arr) {
            var map = {};
            for (var i=0; i<arr.length; i++) {
                map[arr[i]] = 1;
            }
            return map;

        };

        exports.createMap = function(props) {
            var map = Object.create(null);
            for (var i in props) {
                map[i] = props[i];
            }
            return map;
        };
        exports.arrayRemove = function(array, value) {
            for (var i = 0; i <= array.length; i++) {
                if (value === array[i]) {
                    array.splice(i, 1);
                }
            }
        };

        exports.escapeRegExp = function(str) {
            return str.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1');
        };

        exports.escapeHTML = function(str) {
            return str.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
        };

        exports.getMatchOffsets = function(string, regExp) {
            var matches = [];

            string.replace(regExp, function(str) {
                matches.push({
                    offset: arguments[arguments.length-2],
                    length: str.length
                });
            });

            return matches;
        };
        exports.deferredCall = function(fcn) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var deferred = function(timeout) {
                deferred.cancel();
                timer = setTimeout(callback, timeout || 0);
                return deferred;
            };

            deferred.schedule = deferred;

            deferred.call = function() {
                this.cancel();
                fcn();
                return deferred;
            };

            deferred.cancel = function() {
                clearTimeout(timer);
                timer = null;
                return deferred;
            };

            deferred.isPending = function() {
                return timer;
            };

            return deferred;
        };


        exports.delayedCall = function(fcn, defaultTimeout) {
            var timer = null;
            var callback = function() {
                timer = null;
                fcn();
            };

            var _self = function(timeout) {
                if (timer == null)
                timer = setTimeout(callback, timeout || defaultTimeout);
            };

            _self.delay = function(timeout) {
                timer && clearTimeout(timer);
                timer = setTimeout(callback, timeout || defaultTimeout);
            };
            _self.schedule = _self;

            _self.call = function() {
                this.cancel();
                fcn();
            };

            _self.cancel = function() {
                timer && clearTimeout(timer);
                timer = null;
            };

            _self.isPending = function() {
                return timer;
            };

            return _self;
        };
    });

    define("ace/worker/mirror",["require","exports","module","ace/range","ace/document","ace/lib/lang"], function(require, exports, module) {
        "use strict";

        var Range = require("../range").Range;
        var Document = require("../document").Document;
        var lang = require("../lib/lang");

        var Mirror = exports.Mirror = function(sender) {
            this.sender = sender;
            var doc = this.doc = new Document("");

            var deferredUpdate = this.deferredUpdate = lang.delayedCall(this.onUpdate.bind(this));

            var _self = this;
            sender.on("change", function(e) {
                var data = e.data;
                if (data[0].start) {
                    doc.applyDeltas(data);
                } else {
                    for (var i = 0; i < data.length; i += 2) {
                        if (Array.isArray(data[i+1])) {
                            var d = {action: "insert", start: data[i], lines: data[i+1]};
                        } else {
                            var d = {action: "remove", start: data[i], end: data[i+1]};
                        }
                        doc.applyDelta(d, true);
                    }
                }
                if (_self.$timeout)
                return deferredUpdate.schedule(_self.$timeout);
                _self.onUpdate();
            });
        };

        (function() {

            this.$timeout = 500;

            this.setTimeout = function(timeout) {
                this.$timeout = timeout;
            };

            this.setValue = function(value) {
                this.doc.setValue(value);
                this.deferredUpdate.schedule(this.$timeout);
            };

            this.getValue = function(callbackId) {
                this.sender.callback(this.doc.getValue(), callbackId);
            };

            this.onUpdate = function() {
            };

            this.isPending = function() {
                return this.deferredUpdate.isPending();
            };

        }).call(Mirror.prototype);

    });

    define("ace/lib/es5-shim",["require","exports","module"], function(require, exports, module) {

        function Empty() {}

        if (!Function.prototype.bind) {
            Function.prototype.bind = function bind(that) { // .length is 1
                var target = this;
                if (typeof target != "function") {
                    throw new TypeError("Function.prototype.bind called on incompatible " + target);
                }
                var args = slice.call(arguments, 1); // for normal call
                var bound = function () {

                    if (this instanceof bound) {

                        var result = target.apply(
                            this,
                            args.concat(slice.call(arguments))
                        );
                        if (Object(result) === result) {
                            return result;
                        }
                        return this;

                    } else {
                        return target.apply(
                            that,
                            args.concat(slice.call(arguments))
                        );

                    }

                };
                if(target.prototype) {
                    Empty.prototype = target.prototype;
                    bound.prototype = new Empty();
                    Empty.prototype = null;
                }
                return bound;
            };
        }
        var call = Function.prototype.call;
        var prototypeOfArray = Array.prototype;
        var prototypeOfObject = Object.prototype;
        var slice = prototypeOfArray.slice;
        var _toString = call.bind(prototypeOfObject.toString);
        var owns = call.bind(prototypeOfObject.hasOwnProperty);
        var defineGetter;
        var defineSetter;
        var lookupGetter;
        var lookupSetter;
        var supportsAccessors;
        if ((supportsAccessors = owns(prototypeOfObject, "__defineGetter__"))) {
            defineGetter = call.bind(prototypeOfObject.__defineGetter__);
            defineSetter = call.bind(prototypeOfObject.__defineSetter__);
            lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
            lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
        }
        if ([1,2].splice(0).length != 2) {
            if(function() { // test IE < 9 to splice bug - see issue #138
                function makeArray(l) {
                    var a = new Array(l+2);
                    a[0] = a[1] = 0;
                    return a;
                }
                var array = [], lengthBefore;

                array.splice.apply(array, makeArray(20));
                array.splice.apply(array, makeArray(26));

                lengthBefore = array.length; //46
                array.splice(5, 0, "XXX"); // add one element

                lengthBefore + 1 == array.length

                if (lengthBefore + 1 == array.length) {
                    return true;// has right splice implementation without bugs
                }
            }()) {//IE 6/7
                var array_splice = Array.prototype.splice;
                Array.prototype.splice = function(start, deleteCount) {
                    if (!arguments.length) {
                        return [];
                    } else {
                        return array_splice.apply(this, [
                            start === void 0 ? 0 : start,
                            deleteCount === void 0 ? (this.length - start) : deleteCount
                        ].concat(slice.call(arguments, 2)))
                    }
                };
            } else {//IE8
                Array.prototype.splice = function(pos, removeCount){
                    var length = this.length;
                    if (pos > 0) {
                        if (pos > length)
                        pos = length;
                    } else if (pos == void 0) {
                        pos = 0;
                    } else if (pos < 0) {
                        pos = Math.max(length + pos, 0);
                    }

                    if (!(pos+removeCount < length))
                    removeCount = length - pos;

                    var removed = this.slice(pos, pos+removeCount);
                    var insert = slice.call(arguments, 2);
                    var add = insert.length;
                    if (pos === length) {
                        if (add) {
                            this.push.apply(this, insert);
                        }
                    } else {
                        var remove = Math.min(removeCount, length - pos);
                        var tailOldPos = pos + remove;
                        var tailNewPos = tailOldPos + add - remove;
                        var tailCount = length - tailOldPos;
                        var lengthAfterRemove = length - remove;

                        if (tailNewPos < tailOldPos) { // case A
                            for (var i = 0; i < tailCount; ++i) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } else if (tailNewPos > tailOldPos) { // case B
                            for (i = tailCount; i--; ) {
                                this[tailNewPos+i] = this[tailOldPos+i];
                            }
                        } // else, add == remove (nothing to do)

                        if (add && pos === lengthAfterRemove) {
                            this.length = lengthAfterRemove; // truncate array
                            this.push.apply(this, insert);
                        } else {
                            this.length = lengthAfterRemove + add; // reserves space
                            for (i = 0; i < add; ++i) {
                                this[pos+i] = insert[i];
                            }
                        }
                    }
                    return removed;
                };
            }
        }
        if (!Array.isArray) {
            Array.isArray = function isArray(obj) {
                return _toString(obj) == "[object Array]";
            };
        }
        var boxedString = Object("a"),
        splitString = boxedString[0] != "a" || !(0 in boxedString);

        if (!Array.prototype.forEach) {
            Array.prototype.forEach = function forEach(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                thisp = arguments[1],
                i = -1,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(); // TODO message
                }

                while (++i < length) {
                    if (i in self) {
                        fun.call(thisp, self[i], i, object);
                    }
                }
            };
        }
        if (!Array.prototype.map) {
            Array.prototype.map = function map(fun /*, thisp*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = Array(length),
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self)
                    result[i] = fun.call(thisp, self[i], i, object);
                }
                return result;
            };
        }
        if (!Array.prototype.filter) {
            Array.prototype.filter = function filter(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                result = [],
                value,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self) {
                        value = self[i];
                        if (fun.call(thisp, value, i, object)) {
                            result.push(value);
                        }
                    }
                }
                return result;
            };
        }
        if (!Array.prototype.every) {
            Array.prototype.every = function every(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && !fun.call(thisp, self[i], i, object)) {
                        return false;
                    }
                }
                return true;
            };
        }
        if (!Array.prototype.some) {
            Array.prototype.some = function some(fun /*, thisp */) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0,
                thisp = arguments[1];
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }

                for (var i = 0; i < length; i++) {
                    if (i in self && fun.call(thisp, self[i], i, object)) {
                        return true;
                    }
                }
                return false;
            };
        }
        if (!Array.prototype.reduce) {
            Array.prototype.reduce = function reduce(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduce of empty array with no initial value");
                }

                var i = 0;
                var result;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i++];
                            break;
                        }
                        if (++i >= length) {
                            throw new TypeError("reduce of empty array with no initial value");
                        }
                    } while (true);
                }

                for (; i < length; i++) {
                    if (i in self) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                }

                return result;
            };
        }
        if (!Array.prototype.reduceRight) {
            Array.prototype.reduceRight = function reduceRight(fun /*, initial*/) {
                var object = toObject(this),
                self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                object,
                length = self.length >>> 0;
                if (_toString(fun) != "[object Function]") {
                    throw new TypeError(fun + " is not a function");
                }
                if (!length && arguments.length == 1) {
                    throw new TypeError("reduceRight of empty array with no initial value");
                }

                var result, i = length - 1;
                if (arguments.length >= 2) {
                    result = arguments[1];
                } else {
                    do {
                        if (i in self) {
                            result = self[i--];
                            break;
                        }
                        if (--i < 0) {
                            throw new TypeError("reduceRight of empty array with no initial value");
                        }
                    } while (true);
                }

                do {
                    if (i in this) {
                        result = fun.call(void 0, result, self[i], i, object);
                    }
                } while (i--);

                return result;
            };
        }
        if (!Array.prototype.indexOf || ([0, 1].indexOf(1, 2) != -1)) {
            Array.prototype.indexOf = function indexOf(sought /*, fromIndex */ ) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }

                var i = 0;
                if (arguments.length > 1) {
                    i = toInteger(arguments[1]);
                }
                i = i >= 0 ? i : Math.max(0, length + i);
                for (; i < length; i++) {
                    if (i in self && self[i] === sought) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Array.prototype.lastIndexOf || ([0, 1].lastIndexOf(0, -3) != -1)) {
            Array.prototype.lastIndexOf = function lastIndexOf(sought /*, fromIndex */) {
                var self = splitString && _toString(this) == "[object String]" ?
                this.split("") :
                toObject(this),
                length = self.length >>> 0;

                if (!length) {
                    return -1;
                }
                var i = length - 1;
                if (arguments.length > 1) {
                    i = Math.min(i, toInteger(arguments[1]));
                }
                i = i >= 0 ? i : length - Math.abs(i);
                for (; i >= 0; i--) {
                    if (i in self && sought === self[i]) {
                        return i;
                    }
                }
                return -1;
            };
        }
        if (!Object.getPrototypeOf) {
            Object.getPrototypeOf = function getPrototypeOf(object) {
                return object.__proto__ || (
                    object.constructor ?
                    object.constructor.prototype :
                    prototypeOfObject
                );
            };
        }
        if (!Object.getOwnPropertyDescriptor) {
            var ERR_NON_OBJECT = "Object.getOwnPropertyDescriptor called on a " +
            "non-object: ";
            Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT + object);
                if (!owns(object, property))
                return;

                var descriptor, getter, setter;
                descriptor =  { enumerable: true, configurable: true };
                if (supportsAccessors) {
                    var prototype = object.__proto__;
                    object.__proto__ = prototypeOfObject;

                    var getter = lookupGetter(object, property);
                    var setter = lookupSetter(object, property);
                    object.__proto__ = prototype;

                    if (getter || setter) {
                        if (getter) descriptor.get = getter;
                        if (setter) descriptor.set = setter;
                        return descriptor;
                    }
                }
                descriptor.value = object[property];
                return descriptor;
            };
        }
        if (!Object.getOwnPropertyNames) {
            Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
                return Object.keys(object);
            };
        }
        if (!Object.create) {
            var createEmpty;
            if (Object.prototype.__proto__ === null) {
                createEmpty = function () {
                    return { "__proto__": null };
                };
            } else {
                createEmpty = function () {
                    var empty = {};
                    for (var i in empty)
                    empty[i] = null;
                    empty.constructor =
                    empty.hasOwnProperty =
                    empty.propertyIsEnumerable =
                    empty.isPrototypeOf =
                    empty.toLocaleString =
                    empty.toString =
                    empty.valueOf =
                    empty.__proto__ = null;
                    return empty;
                }
            }

            Object.create = function create(prototype, properties) {
                var object;
                if (prototype === null) {
                    object = createEmpty();
                } else {
                    if (typeof prototype != "object")
                    throw new TypeError("typeof prototype["+(typeof prototype)+"] != 'object'");
                    var Type = function () {};
                    Type.prototype = prototype;
                    object = new Type();
                    object.__proto__ = prototype;
                }
                if (properties !== void 0)
                Object.defineProperties(object, properties);
                return object;
            };
        }

        function doesDefinePropertyWork(object) {
            try {
                Object.defineProperty(object, "sentinel", {});
                return "sentinel" in object;
            } catch (exception) {
            }
        }
        if (Object.defineProperty) {
            var definePropertyWorksOnObject = doesDefinePropertyWork({});
            var definePropertyWorksOnDom = typeof document == "undefined" ||
            doesDefinePropertyWork(document.createElement("div"));
            if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
                var definePropertyFallback = Object.defineProperty;
            }
        }

        if (!Object.defineProperty || definePropertyFallback) {
            var ERR_NON_OBJECT_DESCRIPTOR = "Property description must be an object: ";
            var ERR_NON_OBJECT_TARGET = "Object.defineProperty called on non-object: "
            var ERR_ACCESSORS_NOT_SUPPORTED = "getters & setters can not be defined " +
            "on this javascript engine";

            Object.defineProperty = function defineProperty(object, property, descriptor) {
                if ((typeof object != "object" && typeof object != "function") || object === null)
                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
                if ((typeof descriptor != "object" && typeof descriptor != "function") || descriptor === null)
                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
                if (definePropertyFallback) {
                    try {
                        return definePropertyFallback.call(Object, object, property, descriptor);
                    } catch (exception) {
                    }
                }
                if (owns(descriptor, "value")) {

                    if (supportsAccessors && (lookupGetter(object, property) ||
                    lookupSetter(object, property)))
                    {
                        var prototype = object.__proto__;
                        object.__proto__ = prototypeOfObject;
                        delete object[property];
                        object[property] = descriptor.value;
                        object.__proto__ = prototype;
                    } else {
                        object[property] = descriptor.value;
                    }
                } else {
                    if (!supportsAccessors)
                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
                    if (owns(descriptor, "get"))
                    defineGetter(object, property, descriptor.get);
                    if (owns(descriptor, "set"))
                    defineSetter(object, property, descriptor.set);
                }

                return object;
            };
        }
        if (!Object.defineProperties) {
            Object.defineProperties = function defineProperties(object, properties) {
                for (var property in properties) {
                    if (owns(properties, property))
                    Object.defineProperty(object, property, properties[property]);
                }
                return object;
            };
        }
        if (!Object.seal) {
            Object.seal = function seal(object) {
                return object;
            };
        }
        if (!Object.freeze) {
            Object.freeze = function freeze(object) {
                return object;
            };
        }
        try {
            Object.freeze(function () {});
        } catch (exception) {
            Object.freeze = (function freeze(freezeObject) {
                return function freeze(object) {
                    if (typeof object == "function") {
                        return object;
                    } else {
                        return freezeObject(object);
                    }
                };
            })(Object.freeze);
        }
        if (!Object.preventExtensions) {
            Object.preventExtensions = function preventExtensions(object) {
                return object;
            };
        }
        if (!Object.isSealed) {
            Object.isSealed = function isSealed(object) {
                return false;
            };
        }
        if (!Object.isFrozen) {
            Object.isFrozen = function isFrozen(object) {
                return false;
            };
        }
        if (!Object.isExtensible) {
            Object.isExtensible = function isExtensible(object) {
                if (Object(object) === object) {
                    throw new TypeError(); // TODO message
                }
                var name = '';
                while (owns(object, name)) {
                    name += '?';
                }
                object[name] = true;
                var returnValue = owns(object, name);
                delete object[name];
                return returnValue;
            };
        }
        if (!Object.keys) {
            var hasDontEnumBug = true,
            dontEnums = [
                "toString",
                "toLocaleString",
                "valueOf",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "constructor"
            ],
            dontEnumsLength = dontEnums.length;

            for (var key in {"toString": null}) {
                hasDontEnumBug = false;
            }

            Object.keys = function keys(object) {

                if (
                    (typeof object != "object" && typeof object != "function") ||
                    object === null
                ) {
                    throw new TypeError("Object.keys called on a non-object");
                }

                var keys = [];
                for (var name in object) {
                    if (owns(object, name)) {
                        keys.push(name);
                    }
                }

                if (hasDontEnumBug) {
                    for (var i = 0, ii = dontEnumsLength; i < ii; i++) {
                        var dontEnum = dontEnums[i];
                        if (owns(object, dontEnum)) {
                            keys.push(dontEnum);
                        }
                    }
                }
                return keys;
            };

        }
        if (!Date.now) {
            Date.now = function now() {
                return new Date().getTime();
            };
        }
        var ws = "\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003" +
        "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028" +
        "\u2029\uFEFF";
        if (!String.prototype.trim || ws.trim()) {
            ws = "[" + ws + "]";
            var trimBeginRegexp = new RegExp("^" + ws + ws + "*"),
            trimEndRegexp = new RegExp(ws + ws + "*$");
            String.prototype.trim = function trim() {
                return String(this).replace(trimBeginRegexp, "").replace(trimEndRegexp, "");
            };
        }

        function toInteger(n) {
            n = +n;
            if (n !== n) { // isNaN
                n = 0;
            } else if (n !== 0 && n !== (1/0) && n !== -(1/0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        }

        function isPrimitive(input) {
            var type = typeof input;
            return (
                input === null ||
                type === "undefined" ||
                type === "boolean" ||
                type === "number" ||
                type === "string"
            );
        }

        function toPrimitive(input) {
            var val, valueOf, toString;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (typeof valueOf === "function") {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toString = input.toString;
            if (typeof toString === "function") {
                val = toString.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        }
        var toObject = function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert "+o+" to object");
            }
            return Object(o);
        };

    });
    define("ace/mode/jsonata_worker",["require","exports","ace/lib/oop","ace/worker/mirror"], function(require, exports) {
        var oop = require("../lib/oop");
        var Mirror = require("../worker/mirror").Mirror;

        var JSONataWorker = exports.JSONataWorker = function(sender) {
            Mirror.call(this, sender);
            this.setTimeout(200);
        };

        oop.inherits(JSONataWorker, Mirror);

        (function() {

            this.onUpdate = function() {
                var value = this.doc.getValue();
                var errors = [];
                try {
                    if (value) {
                        jsonata(value);
                    }
                } catch (e) {
                    var pos = this.doc.indexToPosition(e.position-1);
                    var msg = e.message;
                    msg = msg.replace(/ at column \d+/,"");
                    errors.push({
                        row: pos.row,
                        column: pos.column,
                        text: msg,
                        type: "error"
                    });
                }
                this.sender.emit("annotate", errors);
            };

        }).call(JSONataWorker.prototype);

    });
