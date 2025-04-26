var E5=Object.defineProperty;var j5=(e,t,n)=>t in e?E5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xd=(e,t,n)=>j5(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Bt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function C5(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Ub={exports:{}},Eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A5=Symbol.for("react.transitional.element"),R5=Symbol.for("react.fragment");function Nb(e,t,n){var r=null;if(n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),"key"in t){n={};for(var i in t)i!=="key"&&(n[i]=t[i])}else n=t;return t=n.ref,{$$typeof:A5,type:e,key:r,ref:t!==void 0?t:null,props:n}}Eu.Fragment=R5;Eu.jsx=Nb;Eu.jsxs=Nb;Ub.exports=Eu;var d=Ub.exports,$b={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=Symbol.for("react.transitional.element"),k5=Symbol.for("react.portal"),O5=Symbol.for("react.fragment"),M5=Symbol.for("react.strict_mode"),D5=Symbol.for("react.profiler"),z5=Symbol.for("react.consumer"),L5=Symbol.for("react.context"),P5=Symbol.for("react.forward_ref"),B5=Symbol.for("react.suspense"),U5=Symbol.for("react.memo"),Vb=Symbol.for("react.lazy"),u0=Symbol.iterator;function N5(e){return e===null||typeof e!="object"?null:(e=u0&&e[u0]||e["@@iterator"],typeof e=="function"?e:null)}var Hb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fb=Object.assign,qb={};function Da(e,t,n){this.props=e,this.context=t,this.refs=qb,this.updater=n||Hb}Da.prototype.isReactComponent={};Da.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Da.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gb(){}Gb.prototype=Da.prototype;function np(e,t,n){this.props=e,this.context=t,this.refs=qb,this.updater=n||Hb}var rp=np.prototype=new Gb;rp.constructor=np;Fb(rp,Da.prototype);rp.isPureReactComponent=!0;var d0=Array.isArray,me={H:null,A:null,T:null,S:null},Ib=Object.prototype.hasOwnProperty;function ip(e,t,n,r,i,a){return n=a.ref,{$$typeof:tp,type:e,key:t,ref:n!==void 0?n:null,props:a}}function $5(e,t){return ip(e.type,t,void 0,void 0,void 0,e.props)}function ap(e){return typeof e=="object"&&e!==null&&e.$$typeof===tp}function V5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var f0=/\/+/g;function wd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V5(""+e.key):t.toString(36)}function h0(){}function H5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(h0,h0):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function zi(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"bigint":case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case tp:case k5:s=!0;break;case Vb:return s=e._init,zi(s(e._payload),t,n,r,i)}}if(s)return i=i(e),s=r===""?"."+wd(e,0):r,d0(i)?(n="",s!=null&&(n=s.replace(f0,"$&/")+"/"),zi(i,t,n,"",function(c){return c})):i!=null&&(ap(i)&&(i=$5(i,n+(i.key==null||e&&e.key===i.key?"":(""+i.key).replace(f0,"$&/")+"/")+s)),t.push(i)),1;s=0;var o=r===""?".":r+":";if(d0(e))for(var l=0;l<e.length;l++)r=e[l],a=o+wd(r,l),s+=zi(r,t,n,a,i);else if(l=N5(e),typeof l=="function")for(e=l.call(e),l=0;!(r=e.next()).done;)r=r.value,a=o+wd(r,l++),s+=zi(r,t,n,a,i);else if(a==="object"){if(typeof e.then=="function")return zi(H5(e),t,n,r,i);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return s}function Jo(e,t,n){if(e==null)return e;var r=[],i=0;return zi(e,r,"","",function(a){return t.call(n,a,i++)}),r}function F5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var m0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function q5(){}H.Children={map:Jo,forEach:function(e,t,n){Jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jo(e,function(){t++}),t},toArray:function(e){return Jo(e,function(t){return t})||[]},only:function(e){if(!ap(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Da;H.Fragment=O5;H.Profiler=D5;H.PureComponent=np;H.StrictMode=M5;H.Suspense=B5;H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;H.act=function(){throw Error("act(...) is not supported in production builds of React.")};H.cache=function(e){return function(){return e.apply(null,arguments)}};H.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var r=Fb({},e.props),i=e.key,a=void 0;if(t!=null)for(s in t.ref!==void 0&&(a=void 0),t.key!==void 0&&(i=""+t.key),t)!Ib.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(r[s]=t[s]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];r.children=o}return ip(e.type,i,void 0,void 0,a,r)};H.createContext=function(e){return e={$$typeof:L5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:z5,_context:e},e};H.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=""+t.key),t)Ib.call(t,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(i[r]=t[r]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var o=Array(s),l=0;l<s;l++)o[l]=arguments[l+2];i.children=o}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)i[r]===void 0&&(i[r]=s[r]);return ip(e,a,void 0,void 0,null,i)};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:P5,render:e}};H.isValidElement=ap;H.lazy=function(e){return{$$typeof:Vb,_payload:{_status:-1,_result:e},_init:F5}};H.memo=function(e,t){return{$$typeof:U5,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=me.T,n={};me.T=n;try{var r=e(),i=me.S;i!==null&&i(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(q5,m0)}catch(a){m0(a)}finally{me.T=t}};H.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()};H.use=function(e){return me.H.use(e)};H.useActionState=function(e,t,n){return me.H.useActionState(e,t,n)};H.useCallback=function(e,t){return me.H.useCallback(e,t)};H.useContext=function(e){return me.H.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e,t){return me.H.useDeferredValue(e,t)};H.useEffect=function(e,t){return me.H.useEffect(e,t)};H.useId=function(){return me.H.useId()};H.useImperativeHandle=function(e,t,n){return me.H.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return me.H.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return me.H.useLayoutEffect(e,t)};H.useMemo=function(e,t){return me.H.useMemo(e,t)};H.useOptimistic=function(e,t){return me.H.useOptimistic(e,t)};H.useReducer=function(e,t,n){return me.H.useReducer(e,t,n)};H.useRef=function(e){return me.H.useRef(e)};H.useState=function(e){return me.H.useState(e)};H.useSyncExternalStore=function(e,t,n){return me.H.useSyncExternalStore(e,t,n)};H.useTransition=function(){return me.H.useTransition()};H.version="19.0.0";$b.exports=H;var _=$b.exports;const Ve=Bb(_);var Yb={exports:{}},ju={},Kb={exports:{}},Xb={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,D){var z=M.length;M.push(D);e:for(;0<z;){var I=z-1>>>1,te=M[I];if(0<i(te,D))M[I]=D,M[z]=te,z=I;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var D=M[0],z=M.pop();if(z!==D){M[0]=z;e:for(var I=0,te=M.length,en=te>>>1;I<en;){var ct=2*(I+1)-1,Ci=M[ct],Ft=ct+1,xn=M[Ft];if(0>i(Ci,z))Ft<te&&0>i(xn,Ci)?(M[I]=xn,M[Ft]=z,I=Ft):(M[I]=Ci,M[ct]=z,I=ct);else if(Ft<te&&0>i(xn,z))M[I]=xn,M[Ft]=z,I=Ft;else break e}}return D}function i(M,D){var z=M.sortIndex-D.sortIndex;return z!==0?z:M.id-D.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();e.unstable_now=function(){return s.now()-o}}var l=[],c=[],u=1,f=null,h=3,m=!1,v=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function b(M){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=M)r(c),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(c)}}function x(M){if(w=!1,b(M),!v)if(n(l)!==null)v=!0,Ht();else{var D=n(c);D!==null&&ji(x,D.startTime-M)}}var T=!1,j=-1,E=5,A=-1;function O(){return!(e.unstable_now()-A<E)}function k(){if(T){var M=e.unstable_now();A=M;var D=!0;try{e:{v=!1,w&&(w=!1,p(j),j=-1),m=!0;var z=h;try{t:{for(b(M),f=n(l);f!==null&&!(f.expirationTime>M&&O());){var I=f.callback;if(typeof I=="function"){f.callback=null,h=f.priorityLevel;var te=I(f.expirationTime<=M);if(M=e.unstable_now(),typeof te=="function"){f.callback=te,b(M),D=!0;break t}f===n(l)&&r(l),b(M)}else r(l);f=n(l)}if(f!==null)D=!0;else{var en=n(c);en!==null&&ji(x,en.startTime-M),D=!1}}break e}finally{f=null,h=z,m=!1}D=void 0}}finally{D?B():T=!1}}}var B;if(typeof y=="function")B=function(){y(k)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,bn=xe.port2;xe.port1.onmessage=k,B=function(){bn.postMessage(null)}}else B=function(){S(k,0)};function Ht(){T||(T=!0,B())}function ji(M,D){j=S(function(){M(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){v||m||(v=!0,Ht())},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var z=h;h=D;try{return M()}finally{h=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,D){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var z=h;h=M;try{return D()}finally{h=z}},e.unstable_scheduleCallback=function(M,D,z){var I=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?I+z:I):z=I,M){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=z+te,M={id:u++,callback:D,priorityLevel:M,startTime:z,expirationTime:te,sortIndex:-1},z>I?(M.sortIndex=z,t(c,M),n(l)===null&&M===n(c)&&(w?(p(j),j=-1):w=!0,ji(x,z-I))):(M.sortIndex=te,t(l,M),v||m||(v=!0,Ht())),M},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(M){var D=h;return function(){var z=h;h=D;try{return M.apply(this,arguments)}finally{h=z}}}})(Xb);Kb.exports=Xb;var G5=Kb.exports,Qb={exports:{}},We={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I5=_;function Zb(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Qn(){}var Qe={d:{f:Qn,r:function(){throw Error(Zb(522))},D:Qn,C:Qn,L:Qn,m:Qn,X:Qn,S:Qn,M:Qn},p:0,findDOMNode:null},Y5=Symbol.for("react.portal");function K5(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y5,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}var ws=I5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Cu(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}We.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Qe;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Zb(299));return K5(e,t,null,n)};We.flushSync=function(e){var t=ws.T,n=Qe.p;try{if(ws.T=null,Qe.p=2,e)return e()}finally{ws.T=t,Qe.p=n,Qe.d.f()}};We.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Qe.d.C(e,t))};We.prefetchDNS=function(e){typeof e=="string"&&Qe.d.D(e)};We.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,r=Cu(n,t.crossOrigin),i=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Qe.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):n==="script"&&Qe.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};We.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Cu(t.as,t.crossOrigin);Qe.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Qe.d.M(e)};We.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,r=Cu(n,t.crossOrigin);Qe.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};We.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Cu(t.as,t.crossOrigin);Qe.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Qe.d.m(e)};We.requestFormReset=function(e){Qe.d.r(e)};We.unstable_batchedUpdates=function(e,t){return e(t)};We.useFormState=function(e,t,n){return ws.H.useFormState(e,t,n)};We.useFormStatus=function(){return ws.H.useHostTransitionStatus()};We.version="19.0.0";function Jb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jb)}catch(e){console.error(e)}}Jb(),Qb.exports=We;var X5=Qb.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ke=G5,Wb=_,Q5=X5;function R(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ex(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var Z5=Symbol.for("react.element"),Wo=Symbol.for("react.transitional.element"),ds=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),tx=Symbol.for("react.strict_mode"),fh=Symbol.for("react.profiler"),J5=Symbol.for("react.provider"),nx=Symbol.for("react.consumer"),kn=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),hh=Symbol.for("react.suspense"),mh=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),rx=Symbol.for("react.offscreen"),W5=Symbol.for("react.memo_cache_sentinel"),p0=Symbol.iterator;function Ja(e){return e===null||typeof e!="object"?null:(e=p0&&e[p0]||e["@@iterator"],typeof e=="function"?e:null)}var e3=Symbol.for("react.client.reference");function ph(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===e3?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ni:return"Fragment";case ds:return"Portal";case fh:return"Profiler";case tx:return"StrictMode";case hh:return"Suspense";case mh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kn:return(e.displayName||"Context")+".Provider";case nx:return(e._context.displayName||"Context")+".Consumer";case sp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case op:return t=e.displayName||null,t!==null?t:ph(e.type)||"Memo";case ar:t=e._payload,e=e._init;try{return ph(e(t))}catch{}}return null}var N=Wb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=Object.assign,Sd,g0;function fs(e){if(Sd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sd=t&&t[1]||"",g0=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sd+e+g0}var _d=!1;function Td(e,t){if(!e||_d)return"";_d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(m){var h=m}Reflect.construct(e,[],f)}else{try{f.call()}catch(m){h=m}e.call(f.prototype)}}else{try{throw Error()}catch(m){h=m}(f=e())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(m){if(m&&h&&typeof m.stack=="string")return[m.stack,h.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),s=a[0],o=a[1];if(s&&o){var l=s.split(`
`),c=o.split(`
`);for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(r!==1||i!==1)do if(r--,i--,0>i||l[r]!==c[i]){var u=`
`+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=r&&0<=i);break}}}finally{_d=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?fs(n):""}function t3(e){switch(e.tag){case 26:case 27:case 5:return fs(e.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 15:return e=Td(e.type,!1),e;case 11:return e=Td(e.type.render,!1),e;case 1:return e=Td(e.type,!0),e;default:return""}}function y0(e){try{var t="";do t+=t3(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function za(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ix(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v0(e){if(za(e)!==e)throw Error(R(188))}function n3(e){var t=e.alternate;if(!t){if(t=za(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return v0(i),e;if(a===r)return v0(i),t;a=a.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,o=i.child;o;){if(o===n){s=!0,n=i,r=a;break}if(o===r){s=!0,r=i,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,r=i;break}if(o===r){s=!0,r=a,n=i;break}o=o.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function ax(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ax(e),t!==null)return t;e=e.sibling}return null}var hs=Array.isArray,ce=Q5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wr={pending:!1,data:null,method:null,action:null},gh=[],$i=-1;function pn(e){return{current:e}}function Pe(e){0>$i||(e.current=gh[$i],gh[$i]=null,$i--)}function de(e,t){$i++,gh[$i]=e.current,e.current=t}var on=pn(null),Ys=pn(null),pr=pn(null),kc=pn(null);function Oc(e,t){switch(de(pr,t),de(Ys,e),de(on,null),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)&&(t=t.namespaceURI)?by(t):0;break;default:if(e=e===8?t.parentNode:t,t=e.tagName,e=e.namespaceURI)e=by(e),t=yw(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Pe(on),de(on,t)}function da(){Pe(on),Pe(Ys),Pe(pr)}function yh(e){e.memoizedState!==null&&de(kc,e);var t=on.current,n=yw(t,e.type);t!==n&&(de(Ys,e),de(on,n))}function Mc(e){Ys.current===e&&(Pe(on),Pe(Ys)),kc.current===e&&(Pe(kc),io._currentValue=Wr)}var vh=Object.prototype.hasOwnProperty,lp=ke.unstable_scheduleCallback,Ed=ke.unstable_cancelCallback,r3=ke.unstable_shouldYield,i3=ke.unstable_requestPaint,ln=ke.unstable_now,a3=ke.unstable_getCurrentPriorityLevel,sx=ke.unstable_ImmediatePriority,ox=ke.unstable_UserBlockingPriority,Dc=ke.unstable_NormalPriority,s3=ke.unstable_LowPriority,lx=ke.unstable_IdlePriority,o3=ke.log,l3=ke.unstable_setDisableYieldValue,To=null,gt=null;function c3(e){if(gt&&typeof gt.onCommitFiberRoot=="function")try{gt.onCommitFiberRoot(To,e,void 0,(e.current.flags&128)===128)}catch{}}function hr(e){if(typeof o3=="function"&&l3(e),gt&&typeof gt.setStrictMode=="function")try{gt.setStrictMode(To,e)}catch{}}var yt=Math.clz32?Math.clz32:f3,u3=Math.log,d3=Math.LN2;function f3(e){return e>>>=0,e===0?32:31-(u3(e)/d3|0)|0}var el=128,tl=4194304;function $r(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Au(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=e.warmLanes;e=e.finishedLanes!==0;var o=n&134217727;return o!==0?(n=o&~i,n!==0?r=$r(n):(a&=o,a!==0?r=$r(a):e||(s=o&~s,s!==0&&(r=$r(s))))):(o=n&~i,o!==0?r=$r(o):a!==0?r=$r(a):e||(s=n&~s,s!==0&&(r=$r(s)))),r===0?0:t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===32&&(s&4194176)!==0)?t:r}function Eo(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function h3(e,t){switch(e){case 1:case 2:case 4:case 8:return t+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cx(){var e=el;return el<<=1,!(el&4194176)&&(el=128),e}function ux(){var e=tl;return tl<<=1,!(tl&62914560)&&(tl=4194304),e}function jd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function jo(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function m3(e,t,n,r,i,a){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=s&~n;0<n;){var u=31-yt(n),f=1<<u;o[u]=0,l[u]=-1;var h=c[u];if(h!==null)for(c[u]=null,u=0;u<h.length;u++){var m=h[u];m!==null&&(m.lane&=-536870913)}n&=~f}r!==0&&dx(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(s&~t))}function dx(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-yt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194218}function fx(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-yt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function hx(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mx(){var e=ce.p;return e!==0?e:(e=window.event,e===void 0?32:Cw(e.type))}function p3(e,t){var n=ce.p;try{return ce.p=e,t()}finally{ce.p=n}}var Or=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Or,ot="__reactProps$"+Or,La="__reactContainer$"+Or,bh="__reactEvents$"+Or,g3="__reactListeners$"+Or,y3="__reactHandles$"+Or,b0="__reactResources$"+Or,Ks="__reactMarker$"+Or;function cp(e){delete e[Ge],delete e[ot],delete e[bh],delete e[g3],delete e[y3]}function Yr(e){var t=e[Ge];if(t)return t;for(var n=e.parentNode;n;){if(t=n[La]||n[Ge]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wy(e);e!==null;){if(n=e[Ge])return n;e=wy(e)}return t}e=n,n=e.parentNode}return null}function Pa(e){if(e=e[Ge]||e[La]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ms(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(R(33))}function na(e){var t=e[b0];return t||(t=e[b0]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function ze(e){e[Ks]=!0}var px=new Set,gx={};function gi(e,t){fa(e,t),fa(e+"Capture",t)}function fa(e,t){for(gx[e]=t,e=0;e<t.length;e++)px.add(t[e])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v3=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),x0={},w0={};function b3(e){return vh.call(w0,e)?!0:vh.call(x0,e)?!1:v3.test(e)?w0[e]=!0:(x0[e]=!0,!1)}function Xl(e,t,n){if(b3(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function nl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yx(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function x3(e){var t=yx(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zc(e){e._valueTracker||(e._valueTracker=x3(e))}function vx(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=yx(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var w3=/[\n"\\]/g;function Mt(e){return e.replace(w3,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function xh(e,t,n,r,i,a,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Rt(t)):e.value!==""+Rt(t)&&(e.value=""+Rt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?wh(e,s,Rt(t)):n!=null?wh(e,s,Rt(n)):r!=null&&e.removeAttribute("value"),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+Rt(o):e.removeAttribute("name")}function bx(e,t,n,r,i,a,s,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null))return;n=n!=null?""+Rt(n):"",t=t!=null?""+Rt(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}r=r??i,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=o?e.checked:!!r,e.defaultChecked=!!r,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function wh(e,t,n){t==="number"&&Lc(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ra(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xx(e,t,n){if(t!=null&&(t=""+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Rt(n):""}function wx(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(R(92));if(hs(r)){if(1<r.length)throw Error(R(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var S3=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function S0(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||S3.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sx(e,t,n){if(t!=null&&typeof t!="object")throw Error(R(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&S0(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&S0(e,a,t[a])}function up(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _3=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),T3=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ql(e){return T3.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Sh=null;function dp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vi=null,ia=null;function _0(e){var t=Pa(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;e:switch(e=t.stateNode,t.type){case"input":if(xh(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ot]||null;if(!i)throw Error(R(90));xh(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&vx(r)}break e;case"textarea":xx(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ra(e,!!n.multiple,t,!1)}}}var Cd=!1;function _x(e,t,n){if(Cd)return e(t,n);Cd=!0;try{var r=e(t);return r}finally{if(Cd=!1,(Vi!==null||ia!==null)&&(Uu(),Vi&&(t=Vi,e=ia,ia=Vi=null,_0(t),e)))for(t=0;t<e.length;t++)_0(e[t])}}function Xs(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var _h=!1;if(Un)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){_h=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{_h=!1}var mr=null,fp=null,Zl=null;function Tx(){if(Zl)return Zl;var e,t=fp,n=t.length,r,i="value"in mr?mr.value:mr.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Zl=i.slice(e,1<r?1-r:void 0)}function Jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function rl(){return!0}function T0(){return!1}function lt(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?rl:T0,this.isPropagationStopped=T0,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),t}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ru=lt(yi),Co=ue({},yi,{view:0,detail:0}),E3=lt(Co),Ad,Rd,es,ku=ue({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==es&&(es&&e.type==="mousemove"?(Ad=e.screenX-es.screenX,Rd=e.screenY-es.screenY):Rd=Ad=0,es=e),Ad)},movementY:function(e){return"movementY"in e?e.movementY:Rd}}),E0=lt(ku),j3=ue({},ku,{dataTransfer:0}),C3=lt(j3),A3=ue({},Co,{relatedTarget:0}),kd=lt(A3),R3=ue({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),k3=lt(R3),O3=ue({},yi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),M3=lt(O3),D3=ue({},yi,{data:0}),j0=lt(D3),z3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B3(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=P3[e])?!!t[e]:!1}function hp(){return B3}var U3=ue({},Co,{key:function(e){if(e.key){var t=z3[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?L3[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(e){return e.type==="keypress"?Jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),N3=lt(U3),$3=ue({},ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),C0=lt($3),V3=ue({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),H3=lt(V3),F3=ue({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),q3=lt(F3),G3=ue({},ku,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),I3=lt(G3),Y3=ue({},yi,{newState:0,oldState:0}),K3=lt(Y3),X3=[9,13,27,32],mp=Un&&"CompositionEvent"in window,Ss=null;Un&&"documentMode"in document&&(Ss=document.documentMode);var Q3=Un&&"TextEvent"in window&&!Ss,Ex=Un&&(!mp||Ss&&8<Ss&&11>=Ss),A0=" ",R0=!1;function jx(e,t){switch(e){case"keyup":return X3.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hi=!1;function Z3(e,t){switch(e){case"compositionend":return Cx(t);case"keypress":return t.which!==32?null:(R0=!0,A0);case"textInput":return e=t.data,e===A0&&R0?null:e;default:return null}}function J3(e,t){if(Hi)return e==="compositionend"||!mp&&jx(e,t)?(e=Tx(),Zl=fp=mr=null,Hi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ex&&t.locale!=="ko"?null:t.data;default:return null}}var W3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!W3[e.type]:t==="textarea"}function Ax(e,t,n,r){Vi?ia?ia.push(r):ia=[r]:Vi=r,t=Zc(t,"onChange"),0<t.length&&(n=new Ru("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _s=null,Qs=null;function e_(e){mw(e,0)}function Ou(e){var t=ms(e);if(vx(t))return e}function O0(e,t){if(e==="change")return t}var Rx=!1;if(Un){var Od;if(Un){var Md="oninput"in document;if(!Md){var M0=document.createElement("div");M0.setAttribute("oninput","return;"),Md=typeof M0.oninput=="function"}Od=Md}else Od=!1;Rx=Od&&(!document.documentMode||9<document.documentMode)}function D0(){_s&&(_s.detachEvent("onpropertychange",kx),Qs=_s=null)}function kx(e){if(e.propertyName==="value"&&Ou(Qs)){var t=[];Ax(t,Qs,e,dp(e)),_x(e_,t)}}function t_(e,t,n){e==="focusin"?(D0(),_s=t,Qs=n,_s.attachEvent("onpropertychange",kx)):e==="focusout"&&D0()}function n_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ou(Qs)}function r_(e,t){if(e==="click")return Ou(t)}function i_(e,t){if(e==="input"||e==="change")return Ou(t)}function a_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:a_;function Zs(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vh.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function z0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,t){var n=z0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=z0(n)}}function Ox(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ox(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mx(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Lc(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lc(e.document)}return t}function pp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function s_(e,t){var n=Mx(t);t=e.focusedElem;var r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ox(t.ownerDocument.documentElement,t)){if(r!==null&&pp(t)){if(e=r.start,n=r.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!n.extend&&a>r&&(i=r,r=a,a=i),i=L0(t,a);var s=L0(t,r);i&&s&&(n.rangeCount!==1||n.anchorNode!==i.node||n.anchorOffset!==i.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),n.removeAllRanges(),a>r?(n.addRange(e),n.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var o_=Un&&"documentMode"in document&&11>=document.documentMode,Fi=null,Th=null,Ts=null,Eh=!1;function P0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eh||Fi==null||Fi!==Lc(r)||(r=Fi,"selectionStart"in r&&pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ts&&Zs(Ts,r)||(Ts=r,r=Zc(Th,"onSelect"),0<r.length&&(t=new Ru("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fi)))}function Br(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qi={animationend:Br("Animation","AnimationEnd"),animationiteration:Br("Animation","AnimationIteration"),animationstart:Br("Animation","AnimationStart"),transitionrun:Br("Transition","TransitionRun"),transitionstart:Br("Transition","TransitionStart"),transitioncancel:Br("Transition","TransitionCancel"),transitionend:Br("Transition","TransitionEnd")},Dd={},Dx={};Un&&(Dx=document.createElement("div").style,"AnimationEvent"in window||(delete qi.animationend.animation,delete qi.animationiteration.animation,delete qi.animationstart.animation),"TransitionEvent"in window||delete qi.transitionend.transition);function vi(e){if(Dd[e])return Dd[e];if(!qi[e])return e;var t=qi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dx)return Dd[e]=t[n];return e}var zx=vi("animationend"),Lx=vi("animationiteration"),Px=vi("animationstart"),l_=vi("transitionrun"),c_=vi("transitionstart"),u_=vi("transitioncancel"),Bx=vi("transitionend"),Ux=new Map,B0="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Zt(e,t){Ux.set(e,t),gi(t,[e])}var At=[],Gi=0,gp=0;function Mu(){for(var e=Gi,t=gp=Gi=0;t<e;){var n=At[t];At[t++]=null;var r=At[t];At[t++]=null;var i=At[t];At[t++]=null;var a=At[t];if(At[t++]=null,r!==null&&i!==null){var s=r.pending;s===null?i.next=i:(i.next=s.next,s.next=i),r.pending=i}a!==0&&Nx(n,i,a)}}function Du(e,t,n,r){At[Gi++]=e,At[Gi++]=t,At[Gi++]=n,At[Gi++]=r,gp|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yp(e,t,n,r){return Du(e,t,n,r),Pc(e)}function Tr(e,t){return Du(e,null,null,t),Pc(e)}function Nx(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;i&&t!==null&&e.tag===3&&(a=e.stateNode,i=31-yt(n),a=a.hiddenUpdates,e=a[i],e===null?a[i]=[t]:e.push(t),t.lane=n|536870912)}function Pc(e){if(50<Ps)throw Ps=0,Yh=null,Error(R(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ii={},U0=new WeakMap;function Dt(e,t){if(typeof e=="object"&&e!==null){var n=U0.get(e);return n!==void 0?n:(t={value:e,source:t,stack:y0(t)},U0.set(e,t),t)}return{value:e,source:t,stack:y0(t)}}var Yi=[],Ki=0,Bc=null,Uc=0,kt=[],Ot=0,ei=null,On=1,Mn="";function Vr(e,t){Yi[Ki++]=Uc,Yi[Ki++]=Bc,Bc=e,Uc=t}function $x(e,t,n){kt[Ot++]=On,kt[Ot++]=Mn,kt[Ot++]=ei,ei=e;var r=On;e=Mn;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var a=32-yt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,On=1<<32-yt(t)+i|n<<i|r,Mn=a+e}else On=1<<a|n<<i|r,Mn=e}function vp(e){e.return!==null&&(Vr(e,1),$x(e,1,0))}function bp(e){for(;e===Bc;)Bc=Yi[--Ki],Yi[Ki]=null,Uc=Yi[--Ki],Yi[Ki]=null;for(;e===ei;)ei=kt[--Ot],kt[Ot]=null,Mn=kt[--Ot],kt[Ot]=null,On=kt[--Ot],kt[Ot]=null}var Xe=null,$e=null,X=!1,Yt=null,an=!1,jh=Error(R(519));function li(e){var t=Error(R(418,""));throw Js(Dt(t,e)),jh}function N0(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Ge]=e,t[ot]=r,n){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(n=0;n<to.length;n++)Y(to[n],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),bx(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),zc(t);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),wx(t,r.value,r.defaultValue,r.children),zc(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||gw(t.textContent,n)?(r.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),r.onScroll!=null&&Y("scroll",t),r.onScrollEnd!=null&&Y("scrollend",t),r.onClick!=null&&(t.onclick=$u),t=!0):t=!1,t||li(e)}function $0(e){for(Xe=e.return;Xe;)switch(Xe.tag){case 3:case 27:an=!0;return;case 5:case 13:an=!1;return;default:Xe=Xe.return}}function ts(e){if(e!==Xe)return!1;if(!X)return $0(e),X=!0,!1;var t=!1,n;if((n=e.tag!==3&&e.tag!==27)&&((n=e.tag===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||em(e.type,e.memoizedProps)),n=!n),n&&(t=!0),t&&$e&&li(e),$0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){$e=Xt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}$e=null}}else $e=Xe?Xt(e.stateNode.nextSibling):null;return!0}function Ao(){$e=Xe=null,X=!1}function Js(e){Yt===null?Yt=[e]:Yt.push(e)}var Es=Error(R(460)),Vx=Error(R(474)),Ch={then:function(){}};function V0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function il(){}function Hx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(il,il),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Es?Error(R(483)):e;default:if(typeof t.status=="string")t.then(il,il);else{if(e=ae,e!==null&&100<e.shellSuspendCounter)throw Error(R(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=r}},function(r){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,e===Es?Error(R(483)):e}throw js=t,Es}}var js=null;function H0(){if(js===null)throw Error(R(459));var e=js;return js=null,e}var aa=null,Ws=0;function al(e){var t=Ws;return Ws+=1,aa===null&&(aa=[]),Hx(aa,e,t)}function ns(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function sl(e,t){throw t.$$typeof===Z5?Error(R(525)):(e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function F0(e){var t=e._init;return t(e._payload)}function Fx(e){function t(p,y){if(e){var b=p.deletions;b===null?(p.deletions=[y],p.flags|=16):b.push(y)}}function n(p,y){if(!e)return null;for(;y!==null;)t(p,y),y=y.sibling;return null}function r(p){for(var y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function i(p,y){return p=vr(p,y),p.index=0,p.sibling=null,p}function a(p,y,b){return p.index=b,e?(b=p.alternate,b!==null?(b=b.index,b<y?(p.flags|=33554434,y):b):(p.flags|=33554434,y)):(p.flags|=1048576,y)}function s(p){return e&&p.alternate===null&&(p.flags|=33554434),p}function o(p,y,b,x){return y===null||y.tag!==6?(y=Gd(b,p.mode,x),y.return=p,y):(y=i(y,b),y.return=p,y)}function l(p,y,b,x){var T=b.type;return T===Ni?u(p,y,b.props.children,x,b.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&F0(T)===y.type)?(y=i(y,b.props),ns(y,b),y.return=p,y):(y=rc(b.type,b.key,b.props,null,p.mode,x),ns(y,b),y.return=p,y)}function c(p,y,b,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==b.containerInfo||y.stateNode.implementation!==b.implementation?(y=Id(b,p.mode,x),y.return=p,y):(y=i(y,b.children||[]),y.return=p,y)}function u(p,y,b,x,T){return y===null||y.tag!==7?(y=ni(b,p.mode,x,T),y.return=p,y):(y=i(y,b),y.return=p,y)}function f(p,y,b){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=Gd(""+y,p.mode,b),y.return=p,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Wo:return b=rc(y.type,y.key,y.props,null,p.mode,b),ns(b,y),b.return=p,b;case ds:return y=Id(y,p.mode,b),y.return=p,y;case ar:var x=y._init;return y=x(y._payload),f(p,y,b)}if(hs(y)||Ja(y))return y=ni(y,p.mode,b,null),y.return=p,y;if(typeof y.then=="function")return f(p,al(y),b);if(y.$$typeof===kn)return f(p,ol(p,y),b);sl(p,y)}return null}function h(p,y,b,x){var T=y!==null?y.key:null;if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return T!==null?null:o(p,y,""+b,x);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Wo:return b.key===T?l(p,y,b,x):null;case ds:return b.key===T?c(p,y,b,x):null;case ar:return T=b._init,b=T(b._payload),h(p,y,b,x)}if(hs(b)||Ja(b))return T!==null?null:u(p,y,b,x,null);if(typeof b.then=="function")return h(p,y,al(b),x);if(b.$$typeof===kn)return h(p,y,ol(p,b),x);sl(p,b)}return null}function m(p,y,b,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return p=p.get(b)||null,o(y,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Wo:return p=p.get(x.key===null?b:x.key)||null,l(y,p,x,T);case ds:return p=p.get(x.key===null?b:x.key)||null,c(y,p,x,T);case ar:var j=x._init;return x=j(x._payload),m(p,y,b,x,T)}if(hs(x)||Ja(x))return p=p.get(b)||null,u(y,p,x,T,null);if(typeof x.then=="function")return m(p,y,b,al(x),T);if(x.$$typeof===kn)return m(p,y,b,ol(y,x),T);sl(y,x)}return null}function v(p,y,b,x){for(var T=null,j=null,E=y,A=y=0,O=null;E!==null&&A<b.length;A++){E.index>A?(O=E,E=null):O=E.sibling;var k=h(p,E,b[A],x);if(k===null){E===null&&(E=O);break}e&&E&&k.alternate===null&&t(p,E),y=a(k,y,A),j===null?T=k:j.sibling=k,j=k,E=O}if(A===b.length)return n(p,E),X&&Vr(p,A),T;if(E===null){for(;A<b.length;A++)E=f(p,b[A],x),E!==null&&(y=a(E,y,A),j===null?T=E:j.sibling=E,j=E);return X&&Vr(p,A),T}for(E=r(E);A<b.length;A++)O=m(E,p,A,b[A],x),O!==null&&(e&&O.alternate!==null&&E.delete(O.key===null?A:O.key),y=a(O,y,A),j===null?T=O:j.sibling=O,j=O);return e&&E.forEach(function(B){return t(p,B)}),X&&Vr(p,A),T}function w(p,y,b,x){if(b==null)throw Error(R(151));for(var T=null,j=null,E=y,A=y=0,O=null,k=b.next();E!==null&&!k.done;A++,k=b.next()){E.index>A?(O=E,E=null):O=E.sibling;var B=h(p,E,k.value,x);if(B===null){E===null&&(E=O);break}e&&E&&B.alternate===null&&t(p,E),y=a(B,y,A),j===null?T=B:j.sibling=B,j=B,E=O}if(k.done)return n(p,E),X&&Vr(p,A),T;if(E===null){for(;!k.done;A++,k=b.next())k=f(p,k.value,x),k!==null&&(y=a(k,y,A),j===null?T=k:j.sibling=k,j=k);return X&&Vr(p,A),T}for(E=r(E);!k.done;A++,k=b.next())k=m(E,p,A,k.value,x),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?A:k.key),y=a(k,y,A),j===null?T=k:j.sibling=k,j=k);return e&&E.forEach(function(xe){return t(p,xe)}),X&&Vr(p,A),T}function S(p,y,b,x){if(typeof b=="object"&&b!==null&&b.type===Ni&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Wo:e:{for(var T=b.key;y!==null;){if(y.key===T){if(T=b.type,T===Ni){if(y.tag===7){n(p,y.sibling),x=i(y,b.props.children),x.return=p,p=x;break e}}else if(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&F0(T)===y.type){n(p,y.sibling),x=i(y,b.props),ns(x,b),x.return=p,p=x;break e}n(p,y);break}else t(p,y);y=y.sibling}b.type===Ni?(x=ni(b.props.children,p.mode,x,b.key),x.return=p,p=x):(x=rc(b.type,b.key,b.props,null,p.mode,x),ns(x,b),x.return=p,p=x)}return s(p);case ds:e:{for(T=b.key;y!==null;){if(y.key===T)if(y.tag===4&&y.stateNode.containerInfo===b.containerInfo&&y.stateNode.implementation===b.implementation){n(p,y.sibling),x=i(y,b.children||[]),x.return=p,p=x;break e}else{n(p,y);break}else t(p,y);y=y.sibling}x=Id(b,p.mode,x),x.return=p,p=x}return s(p);case ar:return T=b._init,b=T(b._payload),S(p,y,b,x)}if(hs(b))return v(p,y,b,x);if(Ja(b)){if(T=Ja(b),typeof T!="function")throw Error(R(150));return b=T.call(b),w(p,y,b,x)}if(typeof b.then=="function")return S(p,y,al(b),x);if(b.$$typeof===kn)return S(p,y,ol(p,b),x);sl(p,b)}return typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint"?(b=""+b,y!==null&&y.tag===6?(n(p,y.sibling),x=i(y,b),x.return=p,p=x):(n(p,y),x=Gd(b,p.mode,x),x.return=p,p=x),s(p)):n(p,y)}return function(p,y,b,x){try{Ws=0;var T=S(p,y,b,x);return aa=null,T}catch(E){if(E===Es)throw E;var j=zt(29,E,null,p.mode);return j.lanes=x,j.return=p,j}finally{}}}var ci=Fx(!0),qx=Fx(!1),ma=pn(null),Nc=pn(0);function q0(e,t){e=Vn,de(Nc,e),de(ma,t),Vn=e|t.baseLanes}function Ah(){de(Nc,Vn),de(ma,ma.current)}function xp(){Vn=Nc.current,Pe(ma),Pe(Nc)}var Ut=pn(null),cn=null;function lr(e){var t=e.alternate;de(Re,Re.current&1),de(Ut,e),cn===null&&(t===null||ma.current!==null||t.memoizedState!==null)&&(cn=e)}function Gx(e){if(e.tag===22){if(de(Re,Re.current),de(Ut,e),cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(cn=e)}}else cr()}function cr(){de(Re,Re.current),de(Ut,Ut.current)}function Dn(e){Pe(Ut),cn===e&&(cn=null),Pe(Re)}var Re=pn(0);function $c(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var d_=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},f_=ke.unstable_scheduleCallback,h_=ke.unstable_NormalPriority,Ae={$$typeof:kn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wp(){return{controller:new d_,data:new Map,refCount:0}}function Ro(e){e.refCount--,e.refCount===0&&f_(h_,function(){e.controller.abort()})}var Cs=null,Rh=0,pa=0,sa=null;function m_(e,t){if(Cs===null){var n=Cs=[];Rh=0,pa=qp(),sa={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Rh++,t.then(G0,G0),t}function G0(){if(--Rh===0&&Cs!==null){sa!==null&&(sa.status="fulfilled");var e=Cs;Cs=null,pa=0,sa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function p_(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(r.status="rejected",r.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),r}var I0=N.S;N.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&m_(e,t),I0!==null&&I0(e,t)};var ti=pn(null);function Sp(){var e=ti.current;return e!==null?e:ae.pooledCache}function Wl(e,t){t===null?de(ti,ti.current):de(ti,t.pool)}function Ix(){var e=Sp();return e===null?null:{parent:Ae._currentValue,pool:e}}var Er=0,F=null,W=null,Te=null,Vc=!1,oa=!1,ui=!1,Hc=0,eo=0,la=null,g_=0;function Se(){throw Error(R(321))}function _p(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Tp(e,t,n,r,i,a){return Er=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?bi:Mr,ui=!1,a=n(r,i),ui=!1,oa&&(a=Kx(t,n,r,i)),Yx(e),a}function Yx(e){N.H=hn;var t=W!==null&&W.next!==null;if(Er=0,Te=W=F=null,Vc=!1,eo=0,la=null,t)throw Error(R(300));e===null||Le||(e=e.dependencies,e!==null&&Gc(e)&&(Le=!0))}function Kx(e,t,n,r){F=e;var i=0;do{if(oa&&(la=null),eo=0,oa=!1,25<=i)throw Error(R(301));if(i+=1,Te=W=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}N.H=xi,a=t(n,r)}while(oa);return a}function y_(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?ko(t):t,e=e.useState()[0],(W!==null?W.memoizedState:null)!==e&&(F.flags|=1024),t}function Ep(){var e=Hc!==0;return Hc=0,e}function jp(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Cp(e){if(Vc){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Vc=!1}Er=0,Te=W=F=null,oa=!1,eo=Hc=0,la=null}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?F.memoizedState=Te=e:Te=Te.next=e,Te}function je(){if(W===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var t=Te===null?F.memoizedState:Te.next;if(t!==null)Te=t,W=e;else{if(e===null)throw F.alternate===null?Error(R(467)):Error(R(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},Te===null?F.memoizedState=Te=e:Te=Te.next=e}return Te}var zu;zu=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function ko(e){var t=eo;return eo+=1,la===null&&(la=[]),e=Hx(la,e,t),t=F,(Te===null?t.memoizedState:Te.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?bi:Mr),e}function Lu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ko(e);if(e.$$typeof===kn)return Ie(e)}throw Error(R(438,String(e)))}function Ap(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zu(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=W5;return t.index++,n}function Nn(e,t){return typeof t=="function"?t(e):t}function ec(e){var t=je();return Rp(t,W,e)}function Rp(e,t,n){var r=e.queue;if(r===null)throw Error(R(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var o=s=null,l=null,c=t,u=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(K&f)===f:(Er&f)===f){var h=c.revertLane;if(h===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===pa&&(u=!0);else if((Er&h)===h){c=c.next,h===pa&&(u=!0);continue}else f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,s=a):l=l.next=f,F.lanes|=h,Cr|=h;f=c.action,ui&&n(a,f),a=c.hasEagerState?c.eagerState:n(a,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=h,s=a):l=l.next=h,F.lanes|=f,Cr|=f;c=c.next}while(c!==null&&c!==t);if(l===null?s=a:l.next=o,!xt(a,e.memoizedState)&&(Le=!0,u&&(n=sa,n!==null)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function zd(e){var t=je(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);xt(a,t.memoizedState)||(Le=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Xx(e,t,n){var r=F,i=je(),a=X;if(a){if(n===void 0)throw Error(R(407));n=n()}else n=t();var s=!xt((W||i).memoizedState,n);if(s&&(i.memoizedState=n,Le=!0),i=i.queue,kp(Jx.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||Te!==null&&Te.memoizedState.tag&1){if(r.flags|=2048,ga(9,Zx.bind(null,r,i,n,t),{destroy:void 0},null),ae===null)throw Error(R(349));a||Er&60||Qx(r,t,n)}return n}function Qx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=zu(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zx(e,t,n,r){t.value=n,t.getSnapshot=r,Wx(t)&&e2(e)}function Jx(e,t,n){return n(function(){Wx(t)&&e2(e)})}function Wx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function e2(e){var t=Tr(e,2);t!==null&&Je(t,e,2)}function kh(e){var t=rt();if(typeof e=="function"){var n=e;if(e=n(),ui){hr(!0);try{n()}finally{hr(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:e},t}function t2(e,t,n,r){return e.baseState=n,Rp(e,W,typeof r=="function"?r:Nn)}function v_(e,t,n,r,i){if(Bu(e))throw Error(R(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){a.listeners.push(s)}};N.T!==null?n(!0):a.isTransition=!1,r(a),n=t.pending,n===null?(a.next=t.pending=a,n2(t,a)):(a.next=n.next,t.pending=n.next=a)}}function n2(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,s={};N.T=s;try{var o=n(i,r),l=N.S;l!==null&&l(s,o),Y0(e,t,o)}catch(c){Oh(e,t,c)}finally{N.T=a}}else try{a=n(i,r),Y0(e,t,a)}catch(c){Oh(e,t,c)}}function Y0(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){K0(e,t,r)},function(r){return Oh(e,t,r)}):K0(e,t,n)}function K0(e,t,n){t.status="fulfilled",t.value=n,r2(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,n2(e,n)))}function Oh(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,r2(t),t=t.next;while(t!==r)}e.action=null}function r2(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function i2(e,t){return t}function a2(e,t){if(X){var n=ae.formState;if(n!==null){e:{var r=F;if(X){if($e){t:{for(var i=$e,a=an;i.nodeType!==8;){if(!a){i=null;break t}if(i=Xt(i.nextSibling),i===null){i=null;break t}}a=i.data,i=a==="F!"||a==="F"?i:null}if(i){$e=Xt(i.nextSibling),r=i.data==="F!";break e}}li(r)}r=!1}r&&(t=n[0])}}return n=rt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i2,lastRenderedState:t},n.queue=r,n=S2.bind(null,F,r),r.dispatch=n,r=kh(!1),a=zp.bind(null,F,!1,r.queue),r=rt(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=v_.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function s2(e){var t=je();return o2(t,W,e)}function o2(e,t,n){t=Rp(e,t,i2)[0],e=ec(Nn)[0],t=typeof t=="object"&&t!==null&&typeof t.then=="function"?ko(t):t;var r=je(),i=r.queue,a=i.dispatch;return n!==r.memoizedState&&(F.flags|=2048,ga(9,b_.bind(null,i,n),{destroy:void 0},null)),[t,a,e]}function b_(e,t){e.action=t}function l2(e){var t=je(),n=W;if(n!==null)return o2(t,n,e);je(),t=t.memoizedState,n=je();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ga(e,t,n,r){return e={tag:e,create:t,inst:n,deps:r,next:null},t=F.updateQueue,t===null&&(t=zu(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function c2(){return je().memoizedState}function tc(e,t,n,r){var i=rt();F.flags|=e,i.memoizedState=ga(1|t,n,{destroy:void 0},r===void 0?null:r)}function Pu(e,t,n,r){var i=je();r=r===void 0?null:r;var a=i.memoizedState.inst;W!==null&&r!==null&&_p(r,W.memoizedState.deps)?i.memoizedState=ga(t,n,a,r):(F.flags|=e,i.memoizedState=ga(1|t,n,a,r))}function X0(e,t){tc(8390656,8,e,t)}function kp(e,t){Pu(2048,8,e,t)}function u2(e,t){return Pu(4,2,e,t)}function d2(e,t){return Pu(4,4,e,t)}function f2(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h2(e,t,n){n=n!=null?n.concat([e]):null,Pu(4,4,f2.bind(null,t,e),n)}function Op(){}function m2(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&_p(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function p2(e,t){var n=je();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&_p(t,r[1]))return r[0];if(r=e(),ui){hr(!0);try{e()}finally{hr(!1)}}return n.memoizedState=[r,t],r}function Mp(e,t,n){return n===void 0||Er&1073741824?e.memoizedState=t:(e.memoizedState=n,e=rw(),F.lanes|=e,Cr|=e,n)}function g2(e,t,n,r){return xt(n,t)?n:ma.current!==null?(e=Mp(e,n,r),xt(e,t)||(Le=!0),e):Er&42?(e=rw(),F.lanes|=e,Cr|=e,t):(Le=!0,e.memoizedState=n)}function y2(e,t,n,r,i){var a=ce.p;ce.p=a!==0&&8>a?a:8;var s=N.T,o={};N.T=o,zp(e,!1,t,n);try{var l=i(),c=N.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=p_(l,r);As(e,t,u,vt(e))}else As(e,t,r,vt(e))}catch(f){As(e,t,{then:function(){},status:"rejected",reason:f},vt())}finally{ce.p=a,N.T=s}}function x_(){}function Mh(e,t,n,r){if(e.tag!==5)throw Error(R(476));var i=v2(e).queue;y2(e,i,t,Wr,n===null?x_:function(){return b2(e),n(r)})}function v2(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Wr,baseState:Wr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:Wr},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function b2(e){var t=v2(e).next.queue;As(e,t,{},vt())}function Dp(){return Ie(io)}function x2(){return je().memoizedState}function w2(){return je().memoizedState}function w_(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=vt();e=gr(n);var r=yr(t,e,n);r!==null&&(Je(r,t,n),ks(r,t,n)),t={cache:wp()},e.payload=t;return}t=t.return}}function S_(e,t,n){var r=vt();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Bu(e)?_2(t,n):(n=yp(e,t,n,r),n!==null&&(Je(n,e,r),T2(n,t,r)))}function S2(e,t,n){var r=vt();As(e,t,n,r)}function As(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))_2(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,n);if(i.hasEagerState=!0,i.eagerState=o,xt(o,s))return Du(e,t,i,0),ae===null&&Mu(),!1}catch{}finally{}if(n=yp(e,t,i,r),n!==null)return Je(n,e,r),T2(n,t,r),!0}return!1}function zp(e,t,n,r){if(r={lane:2,revertLane:qp(),action:r,hasEagerState:!1,eagerState:null,next:null},Bu(e)){if(t)throw Error(R(479))}else t=yp(e,n,r,2),t!==null&&Je(t,e,2)}function Bu(e){var t=e.alternate;return e===F||t!==null&&t===F}function _2(e,t){oa=Vc=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function T2(e,t,n){if(n&4194176){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fx(e,n)}}var hn={readContext:Ie,use:Lu,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se};hn.useCacheRefresh=Se;hn.useMemoCache=Se;hn.useHostTransitionStatus=Se;hn.useFormState=Se;hn.useActionState=Se;hn.useOptimistic=Se;var bi={readContext:Ie,use:Lu,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Ie,useEffect:X0,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,tc(4194308,4,f2.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tc(4194308,4,e,t)},useInsertionEffect:function(e,t){tc(4,2,e,t)},useMemo:function(e,t){var n=rt();t=t===void 0?null:t;var r=e();if(ui){hr(!0);try{e()}finally{hr(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=rt();if(n!==void 0){var i=n(t);if(ui){hr(!0);try{n(t)}finally{hr(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=S_.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:function(e){e=kh(e);var t=e.queue,n=S2.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Op,useDeferredValue:function(e,t){var n=rt();return Mp(n,e,t)},useTransition:function(){var e=kh(!1);return e=y2.bind(null,F,e.queue,!0,!1),rt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,i=rt();if(X){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ae===null)throw Error(R(349));K&60||Qx(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,X0(Jx.bind(null,r,a,e),[e]),r.flags|=2048,ga(9,Zx.bind(null,r,a,n,t),{destroy:void 0},null),n},useId:function(){var e=rt(),t=ae.identifierPrefix;if(X){var n=Mn,r=On;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Hc++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},useCacheRefresh:function(){return rt().memoizedState=w_.bind(null,F)}};bi.useMemoCache=Ap;bi.useHostTransitionStatus=Dp;bi.useFormState=a2;bi.useActionState=a2;bi.useOptimistic=function(e){var t=rt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zp.bind(null,F,!0,n),n.dispatch=t,[e,t]};var Mr={readContext:Ie,use:Lu,useCallback:m2,useContext:Ie,useEffect:kp,useImperativeHandle:h2,useInsertionEffect:u2,useLayoutEffect:d2,useMemo:p2,useReducer:ec,useRef:c2,useState:function(){return ec(Nn)},useDebugValue:Op,useDeferredValue:function(e,t){var n=je();return g2(n,W.memoizedState,e,t)},useTransition:function(){var e=ec(Nn)[0],t=je().memoizedState;return[typeof e=="boolean"?e:ko(e),t]},useSyncExternalStore:Xx,useId:x2};Mr.useCacheRefresh=w2;Mr.useMemoCache=Ap;Mr.useHostTransitionStatus=Dp;Mr.useFormState=s2;Mr.useActionState=s2;Mr.useOptimistic=function(e,t){var n=je();return t2(n,W,e,t)};var xi={readContext:Ie,use:Lu,useCallback:m2,useContext:Ie,useEffect:kp,useImperativeHandle:h2,useInsertionEffect:u2,useLayoutEffect:d2,useMemo:p2,useReducer:zd,useRef:c2,useState:function(){return zd(Nn)},useDebugValue:Op,useDeferredValue:function(e,t){var n=je();return W===null?Mp(n,e,t):g2(n,W.memoizedState,e,t)},useTransition:function(){var e=zd(Nn)[0],t=je().memoizedState;return[typeof e=="boolean"?e:ko(e),t]},useSyncExternalStore:Xx,useId:x2};xi.useCacheRefresh=w2;xi.useMemoCache=Ap;xi.useHostTransitionStatus=Dp;xi.useFormState=l2;xi.useActionState=l2;xi.useOptimistic=function(e,t){var n=je();return W!==null?t2(n,W,e,t):(n.baseState=e,[e,n.queue.dispatch])};function Ld(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dh={isMounted:function(e){return(e=e._reactInternals)?za(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=vt(),i=gr(r);i.payload=t,n!=null&&(i.callback=n),t=yr(e,i,r),t!==null&&(Je(t,e,r),ks(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=vt(),i=gr(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=yr(e,i,r),t!==null&&(Je(t,e,r),ks(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=vt(),r=gr(n);r.tag=2,t!=null&&(r.callback=t),t=yr(e,r,n),t!==null&&(Je(t,e,n),ks(t,e,n))}};function Q0(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Zs(n,r)||!Zs(i,a):!0}function Z0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dh.enqueueReplaceState(t,t.state,null)}function di(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=ue({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}var Fc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function E2(e){Fc(e)}function j2(e){console.error(e)}function C2(e){Fc(e)}function qc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function J0(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function zh(e,t,n){return n=gr(n),n.tag=3,n.payload={element:null},n.callback=function(){qc(e,t)},n}function A2(e){return e=gr(e),e.tag=3,e}function R2(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){J0(t,n,r)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){J0(t,n,r),typeof i!="function"&&(br===null?br=new Set([this]):br.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function __(e,t,n,r,i){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Oo(t,n,i,!0),n=Ut.current,n!==null){switch(n.tag){case 13:return cn===null?Xh():n.alternate===null&&be===0&&(be=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ch?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Kd(e,r,i)),!1;case 22:return n.flags|=65536,r===Ch?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Kd(e,r,i)),!1}throw Error(R(435,n.tag))}return Kd(e,r,i),Xh(),!1}if(X)return t=Ut.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==jh&&(e=Error(R(422),{cause:r}),Js(Dt(e,n)))):(r!==jh&&(t=Error(R(423),{cause:r}),Js(Dt(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Dt(r,n),i=zh(e.stateNode,r,i),Vd(e,i),be!==4&&(be=2)),!1;var a=Error(R(520),{cause:r});if(a=Dt(a,n),zs===null?zs=[a]:zs.push(a),be!==4&&(be=2),t===null)return!0;r=Dt(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=zh(n.stateNode,r,e),Vd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(br===null||!br.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=A2(i),R2(i,e,n,r),Vd(n,i),!1}n=n.return}while(n!==null);return!1}var k2=Error(R(461)),Le=!1;function Ne(e,t,n,r){t.child=e===null?qx(t,null,n,r):ci(t,e.child,n,r)}function W0(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var s={};for(var o in r)o!=="ref"&&(s[o]=r[o])}else s=r;return fi(t),r=Tp(e,t,n,s,a,i),o=Ep(),e!==null&&!Le?(jp(e,t,i),$n(e,t,i)):(X&&o&&vp(t),t.flags|=1,Ne(e,t,r,i),t.child)}function ey(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Np(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,O2(e,t,a,r,i)):(e=rc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Lp(e,i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(s,r)&&e.ref===t.ref)return $n(e,t,i)}return t.flags|=1,e=vr(a,r),e.ref=t.ref,e.return=t,t.child=e}function O2(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Zs(a,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=a,Lp(e,i))e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,$n(e,t,i)}return Lh(e,t,n,r,i)}function M2(e,t,n){var r=t.pendingProps,i=r.children,a=(t.stateNode._pendingVisibility&2)!==0,s=e!==null?e.memoizedState:null;if(Rs(e,t),r.mode==="hidden"||a){if(t.flags&128){if(r=s!==null?s.baseLanes|n:n,e!==null){for(i=t.child=e.child,a=0;i!==null;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return ty(e,t,r,n)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Wl(t,s!==null?s.cachePool:null),s!==null?q0(t,s):Ah(),Gx(t);else return t.lanes=t.childLanes=536870912,ty(e,t,s!==null?s.baseLanes|n:n,n)}else s!==null?(Wl(t,s.cachePool),q0(t,s),cr(),t.memoizedState=null):(e!==null&&Wl(t,null),Ah(),cr());return Ne(e,t,i,n),t.child}function ty(e,t,n,r){var i=Sp();return i=i===null?null:{parent:Ae._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Wl(t,null),Ah(),Gx(t),e!==null&&Oo(e,t,r,!0),null}function Rs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(R(284));(e===null||e.ref!==n)&&(t.flags|=2097664)}}function Lh(e,t,n,r,i){return fi(t),n=Tp(e,t,n,r,void 0,i),r=Ep(),e!==null&&!Le?(jp(e,t,i),$n(e,t,i)):(X&&r&&vp(t),t.flags|=1,Ne(e,t,n,i),t.child)}function ny(e,t,n,r,i,a){return fi(t),t.updateQueue=null,n=Kx(t,r,n,i),Yx(e),r=Ep(),e!==null&&!Le?(jp(e,t,a),$n(e,t,a)):(X&&r&&vp(t),t.flags|=1,Ne(e,t,n,a),t.child)}function ry(e,t,n,r,i){if(fi(t),t.stateNode===null){var a=Ii,s=n.contextType;typeof s=="object"&&s!==null&&(a=Ie(s)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Dh,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Pp(t),s=n.contextType,a.context=typeof s=="object"&&s!==null?Ie(s):Ii,a.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,n,s,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(s=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),s!==a.state&&Dh.enqueueReplaceState(a,a.state,null),Ms(t,r,a,i),Os(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=di(n,o);a.props=l;var c=a.context,u=n.contextType;s=Ii,typeof u=="object"&&u!==null&&(s=Ie(u));var f=n.getDerivedStateFromProps;u=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,u||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==s)&&Z0(t,a,r,s),sr=!1;var h=t.memoizedState;a.state=h,Ms(t,r,a,i),Os(),c=t.memoizedState,o||h!==c||sr?(typeof f=="function"&&(Ld(t,n,f,r),c=t.memoizedState),(l=sr||Q0(t,n,l,r,h,c,s))?(u||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=s,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Vh(e,t),s=t.memoizedProps,u=di(n,s),a.props=u,f=t.pendingProps,h=a.context,c=n.contextType,l=Ii,typeof c=="object"&&c!==null&&(l=Ie(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||h!==l)&&Z0(t,a,r,l),sr=!1,h=t.memoizedState,a.state=h,Ms(t,r,a,i),Os();var m=t.memoizedState;s!==f||h!==m||sr||e!==null&&e.dependencies!==null&&Gc(e.dependencies)?(typeof o=="function"&&(Ld(t,n,o,r),m=t.memoizedState),(u=sr||Q0(t,n,u,r,h,m,l)||e!==null&&e.dependencies!==null&&Gc(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,Rs(e,t),r=(t.flags&128)!==0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&r?(t.child=ci(t,e.child,null,i),t.child=ci(t,null,n,i)):Ne(e,t,n,i),t.memoizedState=a.state,e=t.child):e=$n(e,t,i),e}function iy(e,t,n,r){return Ao(),t.flags|=256,Ne(e,t,n,r),t.child}var Pd={dehydrated:null,treeContext:null,retryLane:0};function Bd(e){return{baseLanes:e,cachePool:Ix()}}function Ud(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Lt),e}function D2(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(Re.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(i?lr(t):cr(),X){var o=$e,l;if(l=o){e:{for(l=o,o=an;l.nodeType!==8;){if(!o){o=null;break e}if(l=Xt(l.nextSibling),l===null){o=null;break e}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:ei!==null?{id:On,overflow:Mn}:null,retryLane:536870912},l=zt(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,Xe=t,$e=null,l=!0):l=!1}l||li(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return o.data==="$!"?t.lanes=16:t.lanes=536870912,null;Dn(t)}return o=r.children,r=r.fallback,i?(cr(),i=t.mode,o=Bh({mode:"hidden",children:o},i),r=ni(r,i,n,null),o.return=t,r.return=t,o.sibling=r,t.child=o,i=t.child,i.memoizedState=Bd(n),i.childLanes=Ud(e,s,n),t.memoizedState=Pd,r):(lr(t),Ph(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(lr(t),t.flags&=-257,t=Nd(e,t,n)):t.memoizedState!==null?(cr(),t.child=e.child,t.flags|=128,t=null):(cr(),i=r.fallback,o=t.mode,r=Bh({mode:"visible",children:r.children},o),i=ni(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,ci(t,e.child,null,n),r=t.child,r.memoizedState=Bd(n),r.childLanes=Ud(e,s,n),t.memoizedState=Pd,t=i);else if(lr(t),o.data==="$!"){if(s=o.nextSibling&&o.nextSibling.dataset,s)var c=s.dgst;s=c,r=Error(R(419)),r.stack="",r.digest=s,Js({value:r,source:null,stack:null}),t=Nd(e,t,n)}else if(Le||Oo(e,t,n,!1),s=(n&e.childLanes)!==0,Le||s){if(s=ae,s!==null){if(r=n&-n,r&42)r=1;else switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=64;break;case 268435456:r=134217728;break;default:r=0}if(r=r&(s.suspendedLanes|n)?0:r,r!==0&&r!==l.retryLane)throw l.retryLane=r,Tr(e,r),Je(s,e,r),k2}o.data==="$?"||Xh(),t=Nd(e,t,n)}else o.data==="$?"?(t.flags|=128,t.child=e.child,t=U_.bind(null,e),o._reactRetry=t,t=null):(e=l.treeContext,$e=Xt(o.nextSibling),Xe=t,X=!0,Yt=null,an=!1,e!==null&&(kt[Ot++]=On,kt[Ot++]=Mn,kt[Ot++]=ei,On=e.id,Mn=e.overflow,ei=t),t=Ph(t,r.children),t.flags|=4096);return t}return i?(cr(),i=r.fallback,o=t.mode,l=e.child,c=l.sibling,r=vr(l,{mode:"hidden",children:r.children}),r.subtreeFlags=l.subtreeFlags&31457280,c!==null?i=vr(c,i):(i=ni(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o===null?o=Bd(n):(l=o.cachePool,l!==null?(c=Ae._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Ix(),o={baseLanes:o.baseLanes|n,cachePool:l}),i.memoizedState=o,i.childLanes=Ud(e,s,n),t.memoizedState=Pd,r):(lr(t),n=e.child,e=n.sibling,n=vr(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ph(e,t){return t=Bh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bh(e,t){return tw(e,t,0,null)}function Nd(e,t,n){return ci(t,e.child,null,n),e=Ph(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ay(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Nh(e.return,t,n)}function $d(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function z2(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ne(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ay(e,n,t);else if(e.tag===19)ay(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(de(Re,r),i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$c(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$d(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$c(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$d(t,!0,n,null,a);break;case"together":$d(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,!(n&t.childLanes))if(e!==null){if(Oo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Lp(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Gc(e)))}function T_(e,t,n){switch(t.tag){case 3:Oc(t,t.stateNode.containerInfo),ur(t,Ae,e.memoizedState.cache),Ao();break;case 27:case 5:yh(t);break;case 4:Oc(t,t.stateNode.containerInfo);break;case 10:ur(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(lr(t),t.flags|=128,null):n&t.child.childLanes?D2(e,t,n):(lr(t),e=$n(e,t,n),e!==null?e.sibling:null);lr(t);break;case 19:var i=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Oo(e,t,n,!1),r=(n&t.childLanes)!==0),i){if(r)return z2(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,M2(e,t,n);case 24:ur(t,Ae,e.memoizedState.cache)}return $n(e,t,n)}function L2(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!Lp(e,n)&&!(t.flags&128))return Le=!1,T_(e,t,n);Le=!!(e.flags&131072)}else Le=!1,X&&t.flags&1048576&&$x(t,Uc,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,typeof r=="function")Np(r)?(e=di(r,e),t.tag=1,t=ry(null,t,r,e,n)):(t.tag=0,t=Lh(null,t,r,e,n));else{if(r!=null){if(i=r.$$typeof,i===sp){t.tag=11,t=W0(null,t,r,e,n);break e}else if(i===op){t.tag=14,t=ey(null,t,r,e,n);break e}}throw t=ph(r)||r,Error(R(306,t,""))}}return t;case 0:return Lh(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=di(r,t.pendingProps),ry(e,t,r,i,n);case 3:e:{if(Oc(t,t.stateNode.containerInfo),e===null)throw Error(R(387));var a=t.pendingProps;i=t.memoizedState,r=i.element,Vh(e,t),Ms(t,a,null,n);var s=t.memoizedState;if(a=s.cache,ur(t,Ae,a),a!==i.cache&&$h(t,[Ae],n,!0),Os(),a=s.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=iy(e,t,a,n);break e}else if(a!==r){r=Dt(Error(R(424)),t),Js(r),t=iy(e,t,a,n);break e}else for($e=Xt(t.stateNode.containerInfo.firstChild),Xe=t,X=!0,Yt=null,an=!0,n=qx(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),a===r){t=$n(e,t,n);break e}Ne(e,t,a,n)}t=t.child}return t;case 26:return Rs(e,t),e===null?(n=_y(t.type,null,t.pendingProps,null))?t.memoizedState=n:X||(n=t.type,e=t.pendingProps,r=Jc(pr.current).createElement(n),r[Ge]=t,r[ot]=e,He(r,n,e),ze(r),t.stateNode=r):t.memoizedState=_y(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return yh(t),e===null&&X&&(r=t.stateNode=bw(t.type,t.pendingProps,pr.current),Xe=t,an=!0,$e=Xt(r.firstChild)),r=t.pendingProps.children,e!==null||X?Ne(e,t,r,n):t.child=ci(t,null,r,n),Rs(e,t),t.child;case 5:return e===null&&X&&((i=r=$e)&&(r=eT(r,t.type,t.pendingProps,an),r!==null?(t.stateNode=r,Xe=t,$e=Xt(r.firstChild),an=!1,i=!0):i=!1),i||li(t)),yh(t),i=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,r=a.children,em(i,a)?r=null:s!==null&&em(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Tp(e,t,y_,null,null,n),io._currentValue=i),Rs(e,t),Ne(e,t,r,n),t.child;case 6:return e===null&&X&&((e=n=$e)&&(n=tT(n,t.pendingProps,an),n!==null?(t.stateNode=n,Xe=t,$e=null,e=!0):e=!1),e||li(t)),null;case 13:return D2(e,t,n);case 4:return Oc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ci(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return W0(e,t,t.type,t.pendingProps,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ur(t,t.type,r.value),Ne(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,fi(t),i=Ie(i),r=r(i),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return ey(e,t,t.type,t.pendingProps,n);case 15:return O2(e,t,t.type,t.pendingProps,n);case 19:return z2(e,t,n);case 22:return M2(e,t,n);case 24:return fi(t),r=Ie(Ae),e===null?(i=Sp(),i===null&&(i=ae,a=wp(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Pp(t),ur(t,Ae,i)):(e.lanes&n&&(Vh(e,t),Ms(t,null,null,n),Os()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ur(t,Ae,r)):(r=a.cache,ur(t,Ae,r),r!==i.cache&&$h(t,[Ae],n,!0))),Ne(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(R(156,t.tag))}var Uh=pn(null),wi=null,zn=null;function ur(e,t,n){de(Uh,t._currentValue),t._currentValue=n}function Ln(e){e._currentValue=Uh.current,Pe(Uh)}function Nh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function $h(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var s=i.child;a=a.firstContext;e:for(;a!==null;){var o=a;a=i;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nh(a.return,n,e),r||(s=null);break e}a=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Nh(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Oo(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(R(387));if(s=s.memoizedProps,s!==null){var o=i.type;xt(i.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(i===kc.current){if(s=i.alternate,s===null)throw Error(R(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(io):e=[io])}i=i.return}e!==null&&$h(t,e,n,r),t.flags|=262144}function Gc(e){for(e=e.firstContext;e!==null;){if(!xt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fi(e){wi=e,zn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ie(e){return P2(wi,e)}function ol(e,t){return wi===null&&fi(e),P2(e,t)}function P2(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},zn===null){if(e===null)throw Error(R(308));zn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else zn=zn.next=t;return n}var sr=!1;function Pp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Pc(e),Nx(e,null,n),t}return Du(e,r,t,n),Pc(e)}function ks(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194176)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fx(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Hh=!1;function Os(){if(Hh){var e=sa;if(e!==null)throw e}}function Ms(e,t,n,r){Hh=!1;var i=e.updateQueue;sr=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==s&&(o===null?u.firstBaseUpdate=c:o.next=c,u.lastBaseUpdate=l))}if(a!==null){var f=i.baseState;s=0,u=c=l=null,o=a;do{var h=o.lane&-536870913,m=h!==o.lane;if(m?(K&h)===h:(r&h)===h){h!==0&&h===pa&&(Hh=!0),u!==null&&(u=u.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var v=e,w=o;h=t;var S=n;switch(w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(S,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(S,f,h):v,h==null)break e;f=ue({},f,h);break e;case 2:sr=!0}}h=o.callback,h!==null&&(e.flags|=64,m&&(e.flags|=8192),m=i.callbacks,m===null?i.callbacks=[h]:m.push(h))}else m={lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,s|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;m=o,o=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Cr|=s,e.lanes=s,e.memoizedState=f}}function B2(e,t){if(typeof e!="function")throw Error(R(191,e));e.call(t)}function U2(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)B2(n[e],t)}function Mo(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,s=n.inst;r=a(),s.destroy=r}n=n.next}while(n!==i)}}catch(o){ne(t,t.return,o)}}function jr(e,t,n){try{var r=t.updateQueue,i=r!==null?r.lastEffect:null;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var s=r.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=t;var l=n;try{o()}catch(c){ne(i,l,c)}}}r=r.next}while(r!==a)}}catch(c){ne(t,t.return,c)}}function N2(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{U2(t,n)}catch(r){ne(e,e.return,r)}}}function $2(e,t,n){n.props=di(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ne(e,t,r)}}function Kr(e,t){try{var n=e.ref;if(n!==null){var r=e.stateNode;switch(e.tag){case 26:case 27:case 5:var i=r;break;default:i=r}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(a){ne(e,t,a)}}function mt(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(i){ne(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){ne(e,t,i)}else n.current=null}function V2(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){ne(e,e.return,i)}}function sy(e,t,n){try{var r=e.stateNode;X_(r,e.type,n,t),r[ot]=t}catch(i){ne(e,e.return,i)}}function H2(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Hd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||H2(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$u));else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Fh(e,t,n),e=e.sibling;e!==null;)Fh(e,t,n),e=e.sibling}function Ic(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&r!==27&&(e=e.child,e!==null))for(Ic(e,t,n),e=e.sibling;e!==null;)Ic(e,t,n),e=e.sibling}var Cn=!1,ye=!1,Fd=!1,oy=typeof WeakSet=="function"?WeakSet:Set,Me=null,ly=!1;function E_(e,t){if(e=e.containerInfo,Jh=nu,e=Mx(e),pp(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,u=0,f=e,h=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(o=s+i),f!==a||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===e)break t;if(h===n&&++c===i&&(o=s),h===a&&++u===r&&(l=s),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wh={focusedElem:e,selectionRange:n},nu=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,a=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var v=di(n.type,i,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(v,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(w){ne(n,n.return,w)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)tm(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":tm(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(R(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}return v=ly,ly=!1,v}function F2(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:_n(e,n),r&4&&Mo(5,n);break;case 1:if(_n(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(o){ne(n,n.return,o)}else{var i=di(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(n,n.return,o)}}r&64&&N2(n),r&512&&Kr(n,n.return);break;case 3:if(_n(e,n),r&64&&(r=n.updateQueue,r!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{U2(r,e)}catch(o){ne(n,n.return,o)}}break;case 26:_n(e,n),r&512&&Kr(n,n.return);break;case 27:case 5:_n(e,n),t===null&&r&4&&V2(n),r&512&&Kr(n,n.return);break;case 12:_n(e,n);break;case 13:_n(e,n),r&4&&I2(e,n);break;case 22:if(i=n.memoizedState!==null||Cn,!i){t=t!==null&&t.memoizedState!==null||ye;var a=Cn,s=ye;Cn=i,(ye=t)&&!s?Wn(e,n,(n.subtreeFlags&8772)!==0):_n(e,n),Cn=a,ye=s}r&512&&(n.memoizedProps.mode==="manual"?Kr(n,n.return):mt(n,n.return));break;default:_n(e,n)}}function q2(e){var t=e.alternate;t!==null&&(e.alternate=null,q2(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&cp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _e=null,ft=!1;function Sn(e,t,n){for(n=n.child;n!==null;)G2(e,t,n),n=n.sibling}function G2(e,t,n){if(gt&&typeof gt.onCommitFiberUnmount=="function")try{gt.onCommitFiberUnmount(To,n)}catch{}switch(n.tag){case 26:ye||mt(n,t),Sn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ye||mt(n,t);var r=_e,i=ft;for(_e=n.stateNode,Sn(e,t,n),n=n.stateNode,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);cp(n),_e=r,ft=i;break;case 5:ye||mt(n,t);case 6:i=_e;var a=ft;if(_e=null,Sn(e,t,n),_e=i,ft=a,_e!==null)if(ft)try{e=_e,r=n.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)}catch(s){ne(n,t,s)}else try{_e.removeChild(n.stateNode)}catch(s){ne(n,t,s)}break;case 18:_e!==null&&(ft?(t=_e,n=n.stateNode,t.nodeType===8?tf(t.parentNode,n):t.nodeType===1&&tf(t,n),oo(t)):tf(_e,n.stateNode));break;case 4:r=_e,i=ft,_e=n.stateNode.containerInfo,ft=!0,Sn(e,t,n),_e=r,ft=i;break;case 0:case 11:case 14:case 15:ye||jr(2,n,t),ye||jr(4,n,t),Sn(e,t,n);break;case 1:ye||(mt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&$2(n,t,r)),Sn(e,t,n);break;case 21:Sn(e,t,n);break;case 22:ye||mt(n,t),ye=(r=ye)||n.memoizedState!==null,Sn(e,t,n),ye=r;break;default:Sn(e,t,n)}}function I2(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{oo(e)}catch(n){ne(t,t.return,n)}}function j_(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new oy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new oy),t;default:throw Error(R(435,e.tag))}}function qd(e,t){var n=j_(e);t.forEach(function(r){var i=N_.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:case 5:_e=o.stateNode,ft=!1;break e;case 3:_e=o.stateNode.containerInfo,ft=!0;break e;case 4:_e=o.stateNode.containerInfo,ft=!0;break e}o=o.return}if(_e===null)throw Error(R(160));G2(a,s,i),_e=null,ft=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Y2(t,e),t=t.sibling}var Gt=null;function Y2(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_t(t,e),Tt(e),r&4&&(jr(3,e,e.return),Mo(3,e),jr(5,e,e.return));break;case 1:_t(t,e),Tt(e),r&512&&(ye||n===null||mt(n,n.return)),r&64&&Cn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=Gt;if(_t(t,e),Tt(e),r&512&&(ye||n===null||mt(n,n.return)),r&4){var a=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":a=i.getElementsByTagName("title")[0],(!a||a[Ks]||a[Ge]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),He(a,r,n),a[Ge]=e,ze(a),r=a;break e;case"link":var s=Ey("link","href",i).get(r+(n.href||""));if(s){for(var o=0;o<s.length;o++)if(a=s[o],a.getAttribute("href")===(n.href==null?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(o,1);break t}}a=i.createElement(r),He(a,r,n),i.head.appendChild(a);break;case"meta":if(s=Ey("meta","content",i).get(r+(n.content||""))){for(o=0;o<s.length;o++)if(a=s[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(o,1);break t}}a=i.createElement(r),He(a,r,n),i.head.appendChild(a);break;default:throw Error(R(468,r))}a[Ge]=e,ze(a),r=a}e.stateNode=r}else jy(i,e.type,e.stateNode);else e.stateNode=Ty(i,r,e.memoizedProps);else a!==r?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?jy(i,e.type,e.stateNode):Ty(i,r,e.memoizedProps)):r===null&&e.stateNode!==null&&sy(e,e.memoizedProps,n.memoizedProps)}break;case 27:if(r&4&&e.alternate===null){i=e.stateNode,a=e.memoizedProps;try{for(var l=i.firstChild;l;){var c=l.nextSibling,u=l.nodeName;l[Ks]||u==="HEAD"||u==="BODY"||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||i.removeChild(l),l=c}for(var f=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);He(i,f,a),i[Ge]=e,i[ot]=a}catch(v){ne(e,e.return,v)}}case 5:if(_t(t,e),Tt(e),r&512&&(ye||n===null||mt(n,n.return)),e.flags&32){i=e.stateNode;try{ha(i,"")}catch(v){ne(e,e.return,v)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,sy(e,i,n!==null?n.memoizedProps:i)),r&1024&&(Fd=!0);break;case 6:if(_t(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(R(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(v){ne(e,e.return,v)}}break;case 3:if(ac=null,i=Gt,Gt=Wc(t.containerInfo),_t(t,e),Gt=i,Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(t.containerInfo)}catch(v){ne(e,e.return,v)}Fd&&(Fd=!1,K2(e));break;case 4:r=Gt,Gt=Wc(e.stateNode.containerInfo),_t(t,e),Tt(e),Gt=r;break;case 12:_t(t,e),Tt(e);break;case 13:_t(t,e),Tt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hp=ln()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,qd(e,r)));break;case 22:if(r&512&&(ye||n===null||mt(n,n.return)),l=e.memoizedState!==null,c=n!==null&&n.memoizedState!==null,u=Cn,f=ye,Cn=u||l,ye=f||c,_t(t,e),ye=f,Cn=u,Tt(e),t=e.stateNode,t._current=e,t._visibility&=-3,t._visibility|=t._pendingVisibility&2,r&8192&&(t._visibility=l?t._visibility&-2:t._visibility|1,l&&(t=Cn||ye,n===null||c||t||Li(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))e:for(n=null,t=e;;){if(t.tag===5||t.tag===26||t.tag===27){if(n===null){c=n=t;try{if(i=c.stateNode,l)a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{s=c.stateNode,o=c.memoizedProps.style;var m=o!=null&&o.hasOwnProperty("display")?o.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(v){ne(c,c.return,v)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(v){ne(c,c.return,v)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,qd(e,n))));break;case 19:_t(t,e),Tt(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,qd(e,r)));break;case 21:break;default:_t(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{if(e.tag!==27){e:{for(var n=e.return;n!==null;){if(H2(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 27:var i=r.stateNode,a=Hd(e);Ic(e,a,i);break;case 5:var s=r.stateNode;r.flags&32&&(ha(s,""),r.flags&=-33);var o=Hd(e);Ic(e,o,s);break;case 3:case 4:var l=r.stateNode.containerInfo,c=Hd(e);Fh(e,c,l);break;default:throw Error(R(161))}}}catch(u){ne(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function K2(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;K2(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function _n(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)F2(e,t.alternate,t),t=t.sibling}function Li(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:jr(4,t,t.return),Li(t);break;case 1:mt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&$2(t,t.return,n),Li(t);break;case 26:case 27:case 5:mt(t,t.return),Li(t);break;case 22:mt(t,t.return),t.memoizedState===null&&Li(t);break;default:Li(t)}e=e.sibling}}function Wn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,s=a.flags;switch(a.tag){case 0:case 11:case 15:Wn(i,a,n),Mo(4,a);break;case 1:if(Wn(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(c){ne(r,r.return,c)}if(r=a,i=r.updateQueue,i!==null){var o=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(l!==null)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)B2(l[i],o)}catch(c){ne(r,r.return,c)}}n&&s&64&&N2(a),Kr(a,a.return);break;case 26:case 27:case 5:Wn(i,a,n),n&&r===null&&s&4&&V2(a),Kr(a,a.return);break;case 12:Wn(i,a,n);break;case 13:Wn(i,a,n),n&&s&4&&I2(i,a);break;case 22:a.memoizedState===null&&Wn(i,a,n),Kr(a,a.return);break;default:Wn(i,a,n)}t=t.sibling}}function Bp(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ro(n))}function Up(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ro(e))}function Zn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)X2(e,t,n,r),t=t.sibling}function X2(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Zn(e,t,n,r),i&2048&&Mo(9,t);break;case 3:Zn(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ro(e)));break;case 12:if(i&2048){Zn(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,s=a.id,o=a.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ne(t,t.return,l)}}else Zn(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,t.memoizedState!==null?a._visibility&4?Zn(e,t,n,r):Ds(e,t):a._visibility&4?Zn(e,t,n,r):(a._visibility|=4,Pi(e,t,n,r,(t.subtreeFlags&10256)!==0)),i&2048&&Bp(t.alternate,t);break;case 24:Zn(e,t,n,r),i&2048&&Up(t.alternate,t);break;default:Zn(e,t,n,r)}}function Pi(e,t,n,r,i){for(i=i&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var a=e,s=t,o=n,l=r,c=s.flags;switch(s.tag){case 0:case 11:case 15:Pi(a,s,o,l,i),Mo(8,s);break;case 23:break;case 22:var u=s.stateNode;s.memoizedState!==null?u._visibility&4?Pi(a,s,o,l,i):Ds(a,s):(u._visibility|=4,Pi(a,s,o,l,i)),i&&c&2048&&Bp(s.alternate,s);break;case 24:Pi(a,s,o,l,i),i&&c&2048&&Up(s.alternate,s);break;default:Pi(a,s,o,l,i)}t=t.sibling}}function Ds(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Ds(n,r),i&2048&&Bp(r.alternate,r);break;case 24:Ds(n,r),i&2048&&Up(r.alternate,r);break;default:Ds(n,r)}t=t.sibling}}var ps=8192;function Ai(e){if(e.subtreeFlags&ps)for(e=e.child;e!==null;)Q2(e),e=e.sibling}function Q2(e){switch(e.tag){case 26:Ai(e),e.flags&ps&&e.memoizedState!==null&&mT(Gt,e.memoizedState,e.memoizedProps);break;case 5:Ai(e);break;case 3:case 4:var t=Gt;Gt=Wc(e.stateNode.containerInfo),Ai(e),Gt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=ps,ps=16777216,Ai(e),ps=t):Ai(e));break;default:Ai(e)}}function Z2(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function rs(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Me=r,W2(r,e)}Z2(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J2(e),e=e.sibling}function J2(e){switch(e.tag){case 0:case 11:case 15:rs(e),e.flags&2048&&jr(9,e,e.return);break;case 3:rs(e);break;case 12:rs(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&4&&(e.return===null||e.return.tag!==13)?(t._visibility&=-5,nc(e)):rs(e);break;default:rs(e)}}function nc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Me=r,W2(r,e)}Z2(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:jr(8,t,t.return),nc(t);break;case 22:n=t.stateNode,n._visibility&4&&(n._visibility&=-5,nc(t));break;default:nc(t)}e=e.sibling}}function W2(e,t){for(;Me!==null;){var n=Me;switch(n.tag){case 0:case 11:case 15:jr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ro(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Me=r;else e:for(n=e;Me!==null;){r=Me;var i=r.sibling,a=r.return;if(q2(r),r===n){Me=null;break e}if(i!==null){i.return=a,Me=i;break e}Me=a}}}function C_(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new C_(e,t,n,r)}function Np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vr(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&31457280,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ew(e,t){e.flags&=31457282;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function rc(e,t,n,r,i,a){var s=0;if(r=e,typeof e=="function")Np(e)&&(s=1);else if(typeof e=="string")s=fT(e,n,on.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ni:return ni(n.children,i,a,t);case tx:s=8,i|=24;break;case fh:return e=zt(12,n,t,i|2),e.elementType=fh,e.lanes=a,e;case hh:return e=zt(13,n,t,i),e.elementType=hh,e.lanes=a,e;case mh:return e=zt(19,n,t,i),e.elementType=mh,e.lanes=a,e;case rx:return tw(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J5:case kn:s=10;break e;case nx:s=9;break e;case sp:s=11;break e;case op:s=14;break e;case ar:s=16,r=null;break e}s=29,n=Error(R(130,e===null?"null":typeof e,"")),r=null}return t=zt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ni(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function tw(e,t,n,r){e=zt(22,e,r,t),e.elementType=rx,e.lanes=n;var i={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var a=i._current;if(a===null)throw Error(R(456));if(!(i._pendingVisibility&2)){var s=Tr(a,2);s!==null&&(i._pendingVisibility|=2,Je(s,a,2))}},attach:function(){var a=i._current;if(a===null)throw Error(R(456));if(i._pendingVisibility&2){var s=Tr(a,2);s!==null&&(i._pendingVisibility&=-3,Je(s,a,2))}}};return e.stateNode=i,e}function Gd(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function Id(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tn(e){e.flags|=4}function cy(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Sw(t)){if(t=Ut.current,t!==null&&((K&4194176)===K?cn!==null:(K&62914560)!==K&&!(K&536870912)||t!==cn))throw js=Ch,Vx;e.flags|=8192}}function ll(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ux():536870912,e.lanes|=t,ya|=t)}function is(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&31457280,r|=i.flags&31457280,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function A_(e,t,n){var r=t.pendingProps;switch(bp(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(t),null;case 1:return fe(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ln(Ae),da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ts(t)?Tn(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yt!==null&&(Kh(Yt),Yt=null))),fe(t),null;case 26:return n=t.memoizedState,e===null?(Tn(t),n!==null?(fe(t),cy(t,n)):(fe(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Tn(t),fe(t),cy(t,n)):(fe(t),t.flags&=-16777217):(e.memoizedProps!==r&&Tn(t),fe(t),t.flags&=-16777217),null;case 27:Mc(t),n=pr.current;var i=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Tn(t);else{if(!r){if(t.stateNode===null)throw Error(R(166));return fe(t),null}e=on.current,ts(t)?N0(t):(e=bw(i,r,n),t.stateNode=e,Tn(t))}return fe(t),null;case 5:if(Mc(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Tn(t);else{if(!r){if(t.stateNode===null)throw Error(R(166));return fe(t),null}if(e=on.current,ts(t))N0(t);else{switch(i=Jc(pr.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Ge]=t,e[ot]=r;e:for(i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(He(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Tn(t)}}return fe(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Tn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(e=pr.current,ts(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Xe,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Ge]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||gw(e.nodeValue,n)),e||li(t)}else e=Jc(e).createTextNode(r),e[Ge]=t,t.stateNode=e}return fe(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ts(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[Ge]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;fe(t),i=!1}else Yt!==null&&(Kh(Yt),Yt=null),i=!0;if(!i)return t.flags&256?(Dn(t),t):(Dn(t),null)}if(Dn(t),t.flags&128)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ll(t,t.updateQueue),fe(t),null;case 4:return da(),e===null&&Gp(t.stateNode.containerInfo),fe(t),null;case 10:return Ln(t.type),fe(t),null;case 19:if(Pe(Re),i=t.memoizedState,i===null)return fe(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)is(i,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=$c(e),a!==null){for(t.flags|=128,is(i,!1),e=a.updateQueue,t.updateQueue=e,ll(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ew(n,e),n=n.sibling;return de(Re,Re.current&1|2),t.child}e=e.sibling}i.tail!==null&&ln()>Yc&&(t.flags|=128,r=!0,is(i,!1),t.lanes=4194304)}else{if(!r)if(e=$c(a),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,ll(t,e),is(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!X)return fe(t),null}else 2*ln()-i.renderingStartTime>Yc&&n!==536870912&&(t.flags|=128,r=!0,is(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ln(),t.sibling=null,e=Re.current,de(Re,r?e&1|2:e&1),t):(fe(t),null);case 22:case 23:return Dn(t),xp(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(fe(t),t.subtreeFlags&6&&(t.flags|=8192)):fe(t),n=t.updateQueue,n!==null&&ll(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&Pe(ti),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ln(Ae),fe(t),null;case 25:return null}throw Error(R(156,t.tag))}function R_(e,t){switch(bp(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(Ae),da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Mc(t),null;case 13:if(Dn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Pe(Re),null;case 4:return da(),null;case 10:return Ln(t.type),null;case 22:case 23:return Dn(t),xp(),e!==null&&Pe(ti),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ln(Ae),null;case 25:return null;default:return null}}function nw(e,t){switch(bp(t),t.tag){case 3:Ln(Ae),da();break;case 26:case 27:case 5:Mc(t);break;case 4:da();break;case 13:Dn(t);break;case 19:Pe(Re);break;case 10:Ln(t.type);break;case 22:case 23:Dn(t),xp(),e!==null&&Pe(ti);break;case 24:Ln(Ae)}}var k_={getCacheForType:function(e){var t=Ie(Ae),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},O_=typeof WeakMap=="function"?WeakMap:Map,pe=0,ae=null,q=null,K=0,ie=0,ht=null,An=!1,Ba=!1,$p=!1,Vn=0,be=0,Cr=0,ri=0,Vp=0,Lt=0,ya=0,zs=null,sn=null,qh=!1,Hp=0,Yc=1/0,Kc=null,br=null,cl=!1,Gr=null,Ls=0,Gh=0,Ih=null,Ps=0,Yh=null;function vt(){if(pe&2&&K!==0)return K&-K;if(N.T!==null){var e=pa;return e!==0?e:qp()}return mx()}function rw(){Lt===0&&(Lt=!(K&536870912)||X?cx():536870912);var e=Ut.current;return e!==null&&(e.flags|=32),Lt}function Je(e,t,n){(e===ae&&ie===2||e.cancelPendingCommit!==null)&&(va(e,0),Rn(e,K,Lt,!1)),jo(e,n),(!(pe&2)||e!==ae)&&(e===ae&&(!(pe&2)&&(ri|=n),be===4&&Rn(e,K,Lt,!1)),gn(e))}function iw(e,t,n){if(pe&6)throw Error(R(327));var r=!n&&(t&60)===0&&(t&e.expiredLanes)===0||Eo(e,t),i=r?z_(e,t):Yd(e,t,!0),a=r;do{if(i===0){Ba&&!r&&Rn(e,t,0,!1);break}else if(i===6)Rn(e,t,0,!An);else{if(n=e.current.alternate,a&&!M_(n)){i=Yd(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;i=zs;var l=o.current.memoizedState.isDehydrated;if(l&&(va(o,s).flags|=256),s=Yd(o,s,!1),s!==2){if($p&&!l){o.errorRecoveryDisabledLanes|=a,ri|=a,i=4;break e}a=sn,sn=i,a!==null&&Kh(a)}i=s}if(a=!1,i!==2)continue}}if(i===1){va(e,0),Rn(e,t,0,!0);break}e:{switch(r=e,i){case 0:case 1:throw Error(R(345));case 4:if((t&4194176)===t){Rn(r,t,Lt,!An);break e}break;case 2:sn=null;break;case 3:case 5:break;default:throw Error(R(329))}if(r.finishedWork=n,r.finishedLanes=t,(t&62914560)===t&&(a=Hp+300-ln(),10<a)){if(Rn(r,t,Lt,!An),Au(r,0)!==0)break e;r.timeoutHandle=vw(uy.bind(null,r,n,sn,Kc,qh,t,Lt,ri,ya,An,2,-0,0),a);break e}uy(r,n,sn,Kc,qh,t,Lt,ri,ya,An,0,-0,0)}}break}while(!0);gn(e)}function Kh(e){sn===null?sn=e:sn.push.apply(sn,e)}function uy(e,t,n,r,i,a,s,o,l,c,u,f,h){var m=t.subtreeFlags;if((m&8192||(m&16785408)===16785408)&&(ro={stylesheets:null,count:0,unsuspend:hT},Q2(t),t=pT(),t!==null)){e.cancelPendingCommit=t(fy.bind(null,e,n,r,i,s,o,l,1,f,h)),Rn(e,a,s,!c);return}fy(e,n,r,i,s,o,l,u,f,h)}function M_(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!xt(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t,n,r){t&=~Vp,t&=~ri,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-yt(i),s=1<<a;r[a]=-1,i&=~s}n!==0&&dx(e,n,t)}function Uu(){return pe&6?!0:(Do(0),!1)}function Fp(){if(q!==null){if(ie===0)var e=q.return;else e=q,zn=wi=null,Cp(e),aa=null,Ws=0,e=q;for(;e!==null;)nw(e.alternate,e),e=e.return;q=null}}function va(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Z_(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Fp(),ae=e,q=n=vr(e.current,null),K=t,ie=0,ht=null,An=!1,Ba=Eo(e,t),$p=!1,ya=Lt=Vp=ri=Cr=be=0,sn=zs=null,qh=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-yt(r),a=1<<i;t|=e[i],r&=~a}return Vn=t,Mu(),n}function aw(e,t){F=null,N.H=hn,t===Es?(t=H0(),ie=3):t===Vx?(t=H0(),ie=4):ie=t===k2?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ht=t,q===null&&(be=1,qc(e,Dt(t,e.current)))}function sw(){var e=N.H;return N.H=hn,e===null?hn:e}function ow(){var e=N.A;return N.A=k_,e}function Xh(){be=4,An||(K&4194176)!==K&&Ut.current!==null||(Ba=!0),!(Cr&134217727)&&!(ri&134217727)||ae===null||Rn(ae,K,Lt,!1)}function Yd(e,t,n){var r=pe;pe|=2;var i=sw(),a=ow();(ae!==e||K!==t)&&(Kc=null,va(e,t)),t=!1;var s=be;e:do try{if(ie!==0&&q!==null){var o=q,l=ht;switch(ie){case 8:Fp(),s=6;break e;case 3:case 2:case 6:Ut.current===null&&(t=!0);var c=ie;if(ie=0,ht=null,Xi(e,o,l,c),n&&Ba){s=0;break e}break;default:c=ie,ie=0,ht=null,Xi(e,o,l,c)}}D_(),s=be;break}catch(u){aw(e,u)}while(!0);return t&&e.shellSuspendCounter++,zn=wi=null,pe=r,N.H=i,N.A=a,q===null&&(ae=null,K=0,Mu()),s}function D_(){for(;q!==null;)lw(q)}function z_(e,t){var n=pe;pe|=2;var r=sw(),i=ow();ae!==e||K!==t?(Kc=null,Yc=ln()+500,va(e,t)):Ba=Eo(e,t);e:do try{if(ie!==0&&q!==null){t=q;var a=ht;t:switch(ie){case 1:ie=0,ht=null,Xi(e,t,a,1);break;case 2:if(V0(a)){ie=0,ht=null,dy(t);break}t=function(){ie===2&&ae===e&&(ie=7),gn(e)},a.then(t,t);break e;case 3:ie=7;break e;case 4:ie=5;break e;case 7:V0(a)?(ie=0,ht=null,dy(t)):(ie=0,ht=null,Xi(e,t,a,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var o=q;if(!s||Sw(s)){ie=0,ht=null;var l=o.sibling;if(l!==null)q=l;else{var c=o.return;c!==null?(q=c,Nu(c)):q=null}break t}}ie=0,ht=null,Xi(e,t,a,5);break;case 6:ie=0,ht=null,Xi(e,t,a,6);break;case 8:Fp(),be=6;break e;default:throw Error(R(462))}}L_();break}catch(u){aw(e,u)}while(!0);return zn=wi=null,N.H=r,N.A=i,pe=n,q!==null?0:(ae=null,K=0,Mu(),be)}function L_(){for(;q!==null&&!r3();)lw(q)}function lw(e){var t=L2(e.alternate,e,Vn);e.memoizedProps=e.pendingProps,t===null?Nu(e):q=t}function dy(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=ny(n,t,t.pendingProps,t.type,void 0,K);break;case 11:t=ny(n,t,t.pendingProps,t.type.render,t.ref,K);break;case 5:Cp(t);default:nw(n,t),t=q=ew(t,Vn),t=L2(n,t,Vn)}e.memoizedProps=e.pendingProps,t===null?Nu(e):q=t}function Xi(e,t,n,r){zn=wi=null,Cp(t),aa=null,Ws=0;var i=t.return;try{if(__(e,i,t,n,K)){be=1,qc(e,Dt(n,e.current)),q=null;return}}catch(a){if(i!==null)throw q=i,a;be=1,qc(e,Dt(n,e.current)),q=null;return}t.flags&32768?(X||r===1?e=!0:Ba||K&536870912?e=!1:(An=e=!0,(r===2||r===3||r===6)&&(r=Ut.current,r!==null&&r.tag===13&&(r.flags|=16384))),cw(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){cw(t,An);return}e=t.return;var n=A_(t.alternate,t,Vn);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);be===0&&(be=5)}function cw(e,t){do{var n=R_(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);be=6,q=null}function fy(e,t,n,r,i,a,s,o,l,c){var u=N.T,f=ce.p;try{ce.p=2,N.T=null,P_(e,t,n,r,f,i,a,s,o,l,c)}finally{N.T=u,ce.p=f}}function P_(e,t,n,r,i,a,s,o){do ca();while(Gr!==null);if(pe&6)throw Error(R(327));var l=e.finishedWork;if(r=e.finishedLanes,l===null)return null;if(e.finishedWork=null,e.finishedLanes=0,l===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var c=l.lanes|l.childLanes;if(c|=gp,m3(e,r,c,a,s,o),e===ae&&(q=ae=null,K=0),!(l.subtreeFlags&10256)&&!(l.flags&10256)||cl||(cl=!0,Gh=c,Ih=n,$_(Dc,function(){return ca(),null})),n=(l.flags&15990)!==0,l.subtreeFlags&15990||n?(n=N.T,N.T=null,a=ce.p,ce.p=2,s=pe,pe|=4,E_(e,l),Y2(l,e),s_(Wh,e.containerInfo),nu=!!Jh,Wh=Jh=null,e.current=l,F2(e,l.alternate,l),i3(),pe=s,ce.p=a,N.T=n):e.current=l,cl?(cl=!1,Gr=e,Ls=r):uw(e,c),c=e.pendingLanes,c===0&&(br=null),c3(l.stateNode),gn(e),t!==null)for(i=e.onRecoverableError,l=0;l<t.length;l++)c=t[l],i(c.value,{componentStack:c.stack});return Ls&3&&ca(),c=e.pendingLanes,r&4194218&&c&42?e===Yh?Ps++:(Ps=0,Yh=e):Ps=0,Do(0),null}function uw(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ro(t)))}function ca(){if(Gr!==null){var e=Gr,t=Gh;Gh=0;var n=hx(Ls),r=N.T,i=ce.p;try{if(ce.p=32>n?32:n,N.T=null,Gr===null)var a=!1;else{n=Ih,Ih=null;var s=Gr,o=Ls;if(Gr=null,Ls=0,pe&6)throw Error(R(331));var l=pe;if(pe|=4,J2(s.current),X2(s,s.current,o,n),pe=l,Do(0,!1),gt&&typeof gt.onPostCommitFiberRoot=="function")try{gt.onPostCommitFiberRoot(To,s)}catch{}a=!0}return a}finally{ce.p=i,N.T=r,uw(e,t)}}return!1}function hy(e,t,n){t=Dt(n,t),t=zh(e.stateNode,t,2),e=yr(e,t,2),e!==null&&(jo(e,2),gn(e))}function ne(e,t,n){if(e.tag===3)hy(e,e,n);else for(;t!==null;){if(t.tag===3){hy(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){e=Dt(n,e),n=A2(2),r=yr(t,n,2),r!==null&&(R2(n,r,t,e),jo(r,2),gn(r));break}}t=t.return}}function Kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new O_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||($p=!0,i.add(n),e=B_.bind(null,e,t,n),t.then(e,e))}function B_(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ae===e&&(K&n)===n&&(be===4||be===3&&(K&62914560)===K&&300>ln()-Hp?!(pe&2)&&va(e,0):Vp|=n,ya===K&&(ya=0)),gn(e)}function dw(e,t){t===0&&(t=ux()),e=Tr(e,t),e!==null&&(jo(e,t),gn(e))}function U_(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dw(e,n)}function N_(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(R(314))}r!==null&&r.delete(t),dw(e,n)}function $_(e,t){return lp(e,t)}var Xc=null,Bi=null,Qh=!1,Qc=!1,Xd=!1,ii=0;function gn(e){e!==Bi&&e.next===null&&(Bi===null?Xc=Bi=e:Bi=Bi.next=e),Qc=!0,Qh||(Qh=!0,H_(V_))}function Do(e,t){if(!Xd&&Qc){Xd=!0;do for(var n=!1,r=Xc;r!==null;){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var s=r.suspendedLanes,o=r.pingedLanes;a=(1<<31-yt(42|e)+1)-1,a&=i&~(s&~o),a=a&201326677?a&201326677|1:a?a|2:0}a!==0&&(n=!0,my(r,a))}else a=K,a=Au(r,r===ae?a:0),!(a&3)||Eo(r,a)||(n=!0,my(r,a));r=r.next}while(n);Xd=!1}}function V_(){Qc=Qh=!1;var e=0;ii!==0&&(Q_()&&(e=ii),ii=0);for(var t=ln(),n=null,r=Xc;r!==null;){var i=r.next,a=fw(r,t);a===0?(r.next=null,n===null?Xc=i:n.next=i,i===null&&(Bi=n)):(n=r,(e!==0||a&3)&&(Qc=!0)),r=i}Do(e)}function fw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var s=31-yt(a),o=1<<s,l=i[s];l===-1?(!(o&n)||o&r)&&(i[s]=h3(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ae,n=K,n=Au(e,e===t?n:0),r=e.callbackNode,n===0||e===t&&ie===2||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ed(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Eo(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ed(r),hx(n)){case 2:case 8:n=ox;break;case 32:n=Dc;break;case 268435456:n=lx;break;default:n=Dc}return r=hw.bind(null,e),n=lp(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ed(r),e.callbackPriority=2,e.callbackNode=null,2}function hw(e,t){var n=e.callbackNode;if(ca()&&e.callbackNode!==n)return null;var r=K;return r=Au(e,e===ae?r:0),r===0?null:(iw(e,r,t),fw(e,ln()),e.callbackNode!=null&&e.callbackNode===n?hw.bind(null,e):null)}function my(e,t){if(ca())return null;iw(e,t,!0)}function H_(e){J_(function(){pe&6?lp(sx,e):e()})}function qp(){return ii===0&&(ii=cx()),ii}function py(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ql(""+e)}function gy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function F_(e,t,n,r,i){if(t==="submit"&&n&&n.stateNode===i){var a=py((i[ot]||null).action),s=r.submitter;s&&(t=(t=s[ot]||null)?py(t.formAction):s.getAttribute("formAction"),t!==null&&(a=t,s=null));var o=new Ru("action","action",null,r,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ii!==0){var l=s?gy(i,s):new FormData(i);Mh(n,{pending:!0,data:l,method:i.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=s?gy(i,s):new FormData(i),Mh(n,{pending:!0,data:l,method:i.method,action:a},a,l))},currentTarget:i}]})}}for(var Qd=0;Qd<B0.length;Qd++){var Zd=B0[Qd],q_=Zd.toLowerCase(),G_=Zd[0].toUpperCase()+Zd.slice(1);Zt(q_,"on"+G_)}Zt(zx,"onAnimationEnd");Zt(Lx,"onAnimationIteration");Zt(Px,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(l_,"onTransitionRun");Zt(c_,"onTransitionStart");Zt(u_,"onTransitionCancel");Zt(Bx,"onTransitionEnd");fa("onMouseEnter",["mouseout","mouseover"]);fa("onMouseLeave",["mouseout","mouseover"]);fa("onPointerEnter",["pointerout","pointerover"]);fa("onPointerLeave",["pointerout","pointerover"]);gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gi("onBeforeInput",["compositionend","keypress","textInput","paste"]);gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(to));function mw(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var o=r[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;a=o,i.currentTarget=c;try{a(i)}catch(u){Fc(u)}i.currentTarget=null,a=l}else for(s=0;s<r.length;s++){if(o=r[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;a=o,i.currentTarget=c;try{a(i)}catch(u){Fc(u)}i.currentTarget=null,a=l}}}}function Y(e,t){var n=t[bh];n===void 0&&(n=t[bh]=new Set);var r=e+"__bubble";n.has(r)||(pw(t,e,2,!1),n.add(r))}function Jd(e,t,n){var r=0;t&&(r|=4),pw(n,e,r,t)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Gp(e){if(!e[ul]){e[ul]=!0,px.forEach(function(n){n!=="selectionchange"&&(I_.has(n)||Jd(n,!1,e),Jd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ul]||(t[ul]=!0,Jd("selectionchange",!1,t))}}function pw(e,t,n,r){switch(Cw(t)){case 2:var i=vT;break;case 8:i=bT;break;default:i=Xp}n=i.bind(null,t,n,e),i=void 0,!_h||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=Yr(o),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue e}o=o.parentNode}}r=r.return}_x(function(){var c=a,u=dp(n),f=[];e:{var h=Ux.get(e);if(h!==void 0){var m=Ru,v=e;switch(e){case"keypress":if(Jl(n)===0)break e;case"keydown":case"keyup":m=N3;break;case"focusin":v="focus",m=kd;break;case"focusout":v="blur",m=kd;break;case"beforeblur":case"afterblur":m=kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=E0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=C3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=H3;break;case zx:case Lx:case Px:m=k3;break;case Bx:m=q3;break;case"scroll":case"scrollend":m=E3;break;case"wheel":m=I3;break;case"copy":case"cut":case"paste":m=M3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=C0;break;case"toggle":case"beforetoggle":m=K3}var w=(t&4)!==0,S=!w&&(e==="scroll"||e==="scrollend"),p=w?h!==null?h+"Capture":null:h;w=[];for(var y=c,b;y!==null;){var x=y;if(b=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||b===null||p===null||(x=Xs(y,p),x!=null&&w.push(no(y,x,b))),S)break;y=y.return}0<w.length&&(h=new m(h,v,null,n,u),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&n!==Sh&&(v=n.relatedTarget||n.fromElement)&&(Yr(v)||v[La]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=c,v=v?Yr(v):null,v!==null&&(S=za(v),w=v.tag,v!==S||w!==5&&w!==27&&w!==6)&&(v=null)):(m=null,v=c),m!==v)){if(w=E0,x="onMouseLeave",p="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=C0,x="onPointerLeave",p="onPointerEnter",y="pointer"),S=m==null?h:ms(m),b=v==null?h:ms(v),h=new w(x,y+"leave",m,n,u),h.target=S,h.relatedTarget=b,x=null,Yr(u)===c&&(w=new w(p,y+"enter",v,n,u),w.target=b,w.relatedTarget=S,x=w),S=x,m&&v)t:{for(w=m,p=v,y=0,b=w;b;b=Ri(b))y++;for(b=0,x=p;x;x=Ri(x))b++;for(;0<y-b;)w=Ri(w),y--;for(;0<b-y;)p=Ri(p),b--;for(;y--;){if(w===p||p!==null&&w===p.alternate)break t;w=Ri(w),p=Ri(p)}w=null}else w=null;m!==null&&yy(f,h,m,w,!1),v!==null&&S!==null&&yy(f,S,v,w,!0)}}e:{if(h=c?ms(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var T=O0;else if(k0(h))if(Rx)T=i_;else{T=n_;var j=t_}else m=h.nodeName,!m||m.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&up(c.elementType)&&(T=O0):T=r_;if(T&&(T=T(e,c))){Ax(f,T,n,u);break e}j&&j(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&wh(h,"number",h.value)}switch(j=c?ms(c):window,e){case"focusin":(k0(j)||j.contentEditable==="true")&&(Fi=j,Th=c,Ts=null);break;case"focusout":Ts=Th=Fi=null;break;case"mousedown":Eh=!0;break;case"contextmenu":case"mouseup":case"dragend":Eh=!1,P0(f,n,u);break;case"selectionchange":if(o_)break;case"keydown":case"keyup":P0(f,n,u)}var E;if(mp)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Hi?jx(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Ex&&n.locale!=="ko"&&(Hi||A!=="onCompositionStart"?A==="onCompositionEnd"&&Hi&&(E=Tx()):(mr=u,fp="value"in mr?mr.value:mr.textContent,Hi=!0)),j=Zc(c,A),0<j.length&&(A=new j0(A,e,null,n,u),f.push({event:A,listeners:j}),E?A.data=E:(E=Cx(n),E!==null&&(A.data=E)))),(E=Q3?Z3(e,n):J3(e,n))&&(A=Zc(c,"onBeforeInput"),0<A.length&&(j=new j0("onBeforeInput","beforeinput",null,n,u),f.push({event:j,listeners:A}),j.data=E)),F_(f,e,c,n,u)}mw(f,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Xs(e,n),i!=null&&r.unshift(no(e,i,a)),i=Xs(e,t),i!=null&&r.push(no(e,i,a))),e=e.return}return r}function Ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yy(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===r)break;o!==5&&o!==26&&o!==27||c===null||(l=c,i?(c=Xs(n,a),c!=null&&s.unshift(no(n,c,l))):i||(c=Xs(n,a),c!=null&&s.push(no(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Y_=/\r\n?/g,K_=/\u0000|\uFFFD/g;function vy(e){return(typeof e=="string"?e:""+e).replace(Y_,`
`).replace(K_,"")}function gw(e,t){return t=vy(t),vy(e)===t}function $u(){}function J(e,t,n,r,i,a){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||ha(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&ha(e,""+r);break;case"className":nl(e,"class",r);break;case"tabIndex":nl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nl(e,n,r);break;case"style":Sx(e,r,a);break;case"data":if(t!=="object"){nl(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ql(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&J(e,t,"name",i.name,i,null),J(e,t,"formEncType",i.formEncType,i,null),J(e,t,"formMethod",i.formMethod,i,null),J(e,t,"formTarget",i.formTarget,i,null)):(J(e,t,"encType",i.encType,i,null),J(e,t,"method",i.method,i,null),J(e,t,"target",i.target,i,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=Ql(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=$u);break;case"onScroll":r!=null&&Y("scroll",e);break;case"onScrollEnd":r!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(R(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(R(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=Ql(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Y("beforetoggle",e),Y("toggle",e),Xl(e,"popover",r);break;case"xlinkActuate":wn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xl(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=_3.get(n)||n,Xl(e,n,r))}}function Zh(e,t,n,r,i,a){switch(n){case"style":Sx(e,r,a);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(R(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(R(60));e.innerHTML=n}}break;case"children":typeof r=="string"?ha(e,r):(typeof r=="number"||typeof r=="bigint")&&ha(e,""+r);break;case"onScroll":r!=null&&Y("scroll",e);break;case"onScrollEnd":r!=null&&Y("scrollend",e);break;case"onClick":r!=null&&(e.onclick=$u);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gx.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),a=e[ot]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,i),typeof r=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Xl(e,n,r)}}}function He(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var s=n[a];if(s!=null)switch(a){case"src":r=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(R(137,t));default:J(e,t,a,s,n,null)}}i&&J(e,t,"srcSet",n.srcSet,n,null),r&&J(e,t,"src",n.src,n,null);return;case"input":Y("invalid",e);var o=a=s=i=null,l=null,c=null;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case"name":i=u;break;case"type":s=u;break;case"checked":l=u;break;case"defaultChecked":c=u;break;case"value":a=u;break;case"defaultValue":o=u;break;case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error(R(137,t));break;default:J(e,t,r,u,n,null)}}bx(e,a,o,l,c,s,i,!1),zc(e);return;case"select":Y("invalid",e),r=s=a=null;for(i in n)if(n.hasOwnProperty(i)&&(o=n[i],o!=null))switch(i){case"value":a=o;break;case"defaultValue":s=o;break;case"multiple":r=o;default:J(e,t,i,o,n,null)}t=a,n=s,e.multiple=!!r,t!=null?ra(e,!!r,t,!1):n!=null&&ra(e,!!r,n,!0);return;case"textarea":Y("invalid",e),a=i=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":i=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(R(91));break;default:J(e,t,s,o,n,null)}wx(e,r,i,a),zc(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:J(e,t,l,r,n,null)}return;case"dialog":Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(r=0;r<to.length;r++)Y(to[r],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(R(137,t));default:J(e,t,c,r,n,null)}return;default:if(up(t)){for(u in n)n.hasOwnProperty(u)&&(r=n[u],r!==void 0&&Zh(e,t,u,r,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(r=n[o],r!=null&&J(e,t,o,r,n,null))}function X_(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,o=null,l=null,c=null,u=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":l=f;default:r.hasOwnProperty(m)||J(e,t,m,null,r,f)}}for(var h in r){var m=r[h];if(f=n[h],r.hasOwnProperty(h)&&(m!=null||f!=null))switch(h){case"type":a=m;break;case"name":i=m;break;case"checked":c=m;break;case"defaultChecked":u=m;break;case"value":s=m;break;case"defaultValue":o=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(R(137,t));break;default:m!==f&&J(e,t,h,m,r,f)}}xh(e,s,o,l,c,u,a,i);return;case"select":m=s=o=h=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":m=l;default:r.hasOwnProperty(a)||J(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case"value":h=a;break;case"defaultValue":o=a;break;case"multiple":s=a;default:a!==l&&J(e,t,i,a,r,l)}t=o,n=s,r=m,h!=null?ra(e,!!n,h,!1):!!r!=!!n&&(t!=null?ra(e,!!n,t,!0):ra(e,!!n,n?[]:"",!1));return;case"textarea":m=h=null;for(o in n)if(i=n[o],n.hasOwnProperty(o)&&i!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:J(e,t,o,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(i!=null||a!=null))switch(s){case"value":h=i;break;case"defaultValue":m=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(R(91));break;default:i!==a&&J(e,t,s,i,r,a)}xx(e,h,m);return;case"option":for(var v in n)if(h=n[v],n.hasOwnProperty(v)&&h!=null&&!r.hasOwnProperty(v))switch(v){case"selected":e.selected=!1;break;default:J(e,t,v,null,r,h)}for(l in r)if(h=r[l],m=n[l],r.hasOwnProperty(l)&&h!==m&&(h!=null||m!=null))switch(l){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:J(e,t,l,h,r,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in n)h=n[w],n.hasOwnProperty(w)&&h!=null&&!r.hasOwnProperty(w)&&J(e,t,w,null,r,h);for(c in r)if(h=r[c],m=n[c],r.hasOwnProperty(c)&&h!==m&&(h!=null||m!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(R(137,t));break;default:J(e,t,c,h,r,m)}return;default:if(up(t)){for(var S in n)h=n[S],n.hasOwnProperty(S)&&h!==void 0&&!r.hasOwnProperty(S)&&Zh(e,t,S,void 0,r,h);for(u in r)h=r[u],m=n[u],!r.hasOwnProperty(u)||h===m||h===void 0&&m===void 0||Zh(e,t,u,h,r,m);return}}for(var p in n)h=n[p],n.hasOwnProperty(p)&&h!=null&&!r.hasOwnProperty(p)&&J(e,t,p,null,r,h);for(f in r)h=r[f],m=n[f],!r.hasOwnProperty(f)||h===m||h==null&&m==null||J(e,t,f,h,r,m)}var Jh=null,Wh=null;function Jc(e){return e.nodeType===9?e:e.ownerDocument}function by(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yw(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function em(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ef=null;function Q_(){var e=window.event;return e&&e.type==="popstate"?e===ef?!1:(ef=e,!0):(ef=null,!1)}var vw=typeof setTimeout=="function"?setTimeout:void 0,Z_=typeof clearTimeout=="function"?clearTimeout:void 0,xy=typeof Promise=="function"?Promise:void 0,J_=typeof queueMicrotask=="function"?queueMicrotask:typeof xy<"u"?function(e){return xy.resolve(null).then(e).catch(W_)}:vw;function W_(e){setTimeout(function(){throw e})}function tf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),oo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);oo(t)}function tm(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":tm(n),cp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function eT(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ks])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(i.href==null?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=Xt(e.nextSibling),e===null)break}return null}function tT(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Xt(e.nextSibling),e===null))return null;return e}function Xt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}function wy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function bw(e,t,n){switch(t=Jc(n),e){case"html":if(e=t.documentElement,!e)throw Error(R(452));return e;case"head":if(e=t.head,!e)throw Error(R(453));return e;case"body":if(e=t.body,!e)throw Error(R(454));return e;default:throw Error(R(451))}}var Nt=new Map,Sy=new Set;function Wc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var In=ce.d;ce.d={f:nT,r:rT,D:iT,C:aT,L:sT,m:oT,X:cT,S:lT,M:uT};function nT(){var e=In.f(),t=Uu();return e||t}function rT(e){var t=Pa(e);t!==null&&t.tag===5&&t.type==="form"?b2(t):In.r(e)}var Ua=typeof document>"u"?null:document;function xw(e,t,n){var r=Ua;if(r&&typeof t=="string"&&t){var i=Mt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Sy.has(i)||(Sy.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement("link"),He(t,"link",e),ze(t),r.head.appendChild(t)))}}function iT(e){In.D(e),xw("dns-prefetch",e,null)}function aT(e,t){In.C(e,t),xw("preconnect",e,t)}function sT(e,t,n){In.L(e,t,n);var r=Ua;if(r&&e&&t){var i='link[rel="preload"][as="'+Mt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+Mt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+Mt(n.imageSizes)+'"]')):i+='[href="'+Mt(e)+'"]';var a=i;switch(t){case"style":a=ba(e);break;case"script":a=Na(e)}Nt.has(a)||(e=ue({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Nt.set(a,e),r.querySelector(i)!==null||t==="style"&&r.querySelector(zo(a))||t==="script"&&r.querySelector(Lo(a))||(t=r.createElement("link"),He(t,"link",e),ze(t),r.head.appendChild(t)))}}function oT(e,t){In.m(e,t);var n=Ua;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Mt(r)+'"][href="'+Mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Na(e)}if(!Nt.has(a)&&(e=ue({rel:"modulepreload",href:e},t),Nt.set(a,e),n.querySelector(i)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Lo(a)))return}r=n.createElement("link"),He(r,"link",e),ze(r),n.head.appendChild(r)}}}function lT(e,t,n){In.S(e,t,n);var r=Ua;if(r&&e){var i=na(r).hoistableStyles,a=ba(e);t=t||"default";var s=i.get(a);if(!s){var o={loading:0,preload:null};if(s=r.querySelector(zo(a)))o.loading=5;else{e=ue({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Nt.get(a))&&Ip(e,n);var l=s=r.createElement("link");ze(l),He(l,"link",e),l._p=new Promise(function(c,u){l.onload=c,l.onerror=u}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ic(s,t,r)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(a,s)}}}function cT(e,t){In.X(e,t);var n=Ua;if(n&&e){var r=na(n).hoistableScripts,i=Na(e),a=r.get(i);a||(a=n.querySelector(Lo(i)),a||(e=ue({src:e,async:!0},t),(t=Nt.get(i))&&Yp(e,t),a=n.createElement("script"),ze(a),He(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}function uT(e,t){In.M(e,t);var n=Ua;if(n&&e){var r=na(n).hoistableScripts,i=Na(e),a=r.get(i);a||(a=n.querySelector(Lo(i)),a||(e=ue({src:e,async:!0,type:"module"},t),(t=Nt.get(i))&&Yp(e,t),a=n.createElement("script"),ze(a),He(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}function _y(e,t,n,r){var i=(i=pr.current)?Wc(i):null;if(!i)throw Error(R(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ba(n.href),n=na(i).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ba(n.href);var a=na(i).hoistableStyles,s=a.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,s),(a=i.querySelector(zo(e)))&&!a._p&&(s.instance=a,s.state.loading=5),Nt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Nt.set(e,n),a||dT(i,e,n,s.state))),t&&r===null)throw Error(R(528,""));return s}if(t&&r!==null)throw Error(R(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Na(n),n=na(i).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(R(444,e))}}function ba(e){return'href="'+Mt(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function ww(e){return ue({},e,{"data-precedence":e.precedence,precedence:null})}function dT(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),He(t,"link",n),ze(t),e.head.appendChild(t))}function Na(e){return'[src="'+Mt(e)+'"]'}function Lo(e){return"script[async]"+e}function Ty(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Mt(n.href)+'"]');if(r)return t.instance=r,ze(r),r;var i=ue({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ze(r),He(r,"style",i),ic(r,n.precedence,e),t.instance=r;case"stylesheet":i=ba(n.href);var a=e.querySelector(zo(i));if(a)return t.state.loading|=4,t.instance=a,ze(a),a;r=ww(n),(i=Nt.get(i))&&Ip(r,i),a=(e.ownerDocument||e).createElement("link"),ze(a);var s=a;return s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),He(a,"link",r),t.state.loading|=4,ic(a,n.precedence,e),t.instance=a;case"script":return a=Na(n.src),(i=e.querySelector(Lo(a)))?(t.instance=i,ze(i),i):(r=n,(i=Nt.get(a))&&(r=ue({},n),Yp(r,i)),e=e.ownerDocument||e,i=e.createElement("script"),ze(i),He(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(R(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,ic(r,n.precedence,e));return t.instance}function ic(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,s=0;s<r.length;s++){var o=r[s];if(o.dataset.precedence===t)a=o;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ip(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yp(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ac=null;function Ey(e,t,n){if(ac===null){var r=new Map,i=ac=new Map;i.set(n,r)}else i=ac,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ks]||a[Ge]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var s=a.getAttribute(t)||"";s=e+s;var o=r.get(s);o?o.push(a):r.set(s,[a])}}return r}function jy(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function fT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Sw(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var ro=null;function hT(){}function mT(e,t,n){if(ro===null)throw Error(R(475));var r=ro;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(t.state.loading&4)){if(t.instance===null){var i=ba(n.href),a=e.querySelector(zo(i));if(a){e=a._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=eu.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,ze(a);return}a=e.ownerDocument||e,n=ww(n),(i=Nt.get(i))&&Ip(n,i),a=a.createElement("link"),ze(a);var s=a;s._p=new Promise(function(o,l){s.onload=o,s.onerror=l}),He(a,"link",n),t.instance=a}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&!(t.state.loading&3)&&(r.count++,t=eu.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function pT(){if(ro===null)throw Error(R(475));var e=ro;return e.stylesheets&&e.count===0&&nm(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&nm(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function eu(){if(this.count--,this.count===0){if(this.stylesheets)nm(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var tu=null;function nm(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,tu=new Map,t.forEach(gT,e),tu=null,eu.call(e))}function gT(e,t){if(!(t.state.loading&4)){var n=tu.get(e);if(n)var r=n.get(null);else{n=new Map,tu.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var s=i[a];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),r=s)}r&&n.set(null,r)}i=t.instance,s=i.getAttribute("data-precedence"),a=n.get(s)||r,a===r&&n.set(null,i),n.set(s,i),this.count++,r=eu.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var io={$$typeof:kn,Provider:null,Consumer:null,_currentValue:Wr,_currentValue2:Wr,_threadCount:0};function yT(e,t,n,r,i,a,s,o){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jd(0),this.hiddenUpdates=jd(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function _w(e,t,n,r,i,a,s,o,l,c,u,f){return e=new yT(e,t,n,s,o,l,c,f),t=1,a===!0&&(t|=24),a=zt(3,null,null,t),e.current=a,a.stateNode=e,t=wp(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Pp(a),e}function Tw(e){return e?(e=Ii,e):Ii}function Ew(e,t,n,r,i,a){i=Tw(i),r.context===null?r.context=i:r.pendingContext=i,r=gr(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=yr(e,r,t),n!==null&&(Je(n,e,t),ks(n,e,t))}function Cy(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kp(e,t){Cy(e,t),(e=e.alternate)&&Cy(e,t)}function jw(e){if(e.tag===13){var t=Tr(e,67108864);t!==null&&Je(t,e,67108864),Kp(e,67108864)}}var nu=!0;function vT(e,t,n,r){var i=N.T;N.T=null;var a=ce.p;try{ce.p=2,Xp(e,t,n,r)}finally{ce.p=a,N.T=i}}function bT(e,t,n,r){var i=N.T;N.T=null;var a=ce.p;try{ce.p=8,Xp(e,t,n,r)}finally{ce.p=a,N.T=i}}function Xp(e,t,n,r){if(nu){var i=rm(r);if(i===null)Wd(e,t,r,ru,n),Ay(e,r);else if(wT(i,e,t,n,r))r.stopPropagation();else if(Ay(e,r),t&4&&-1<xT.indexOf(e)){for(;i!==null;){var a=Pa(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var s=$r(a.pendingLanes);if(s!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var l=1<<31-yt(s);o.entanglements[1]|=l,s&=~l}gn(a),!(pe&6)&&(Yc=ln()+500,Do(0))}}break;case 13:o=Tr(a,2),o!==null&&Je(o,a,2),Uu(),Kp(a,2)}if(a=rm(r),a===null&&Wd(e,t,r,ru,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Wd(e,t,r,null,n)}}function rm(e){return e=dp(e),Qp(e)}var ru=null;function Qp(e){if(ru=null,e=Yr(e),e!==null){var t=za(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=ix(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ru=e,null}function Cw(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(a3()){case sx:return 2;case ox:return 8;case Dc:case s3:return 32;case lx:return 268435456;default:return 32}default:return 32}}var im=!1,xr=null,wr=null,Sr=null,ao=new Map,so=new Map,dr=[],xT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ay(e,t){switch(e){case"focusin":case"focusout":xr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":ao.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function as(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Pa(t),t!==null&&jw(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wT(e,t,n,r,i){switch(t){case"focusin":return xr=as(xr,e,t,n,r,i),!0;case"dragenter":return wr=as(wr,e,t,n,r,i),!0;case"mouseover":return Sr=as(Sr,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ao.set(a,as(ao.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,so.set(a,as(so.get(a)||null,e,t,n,r,i)),!0}return!1}function Aw(e){var t=Yr(e.target);if(t!==null){var n=za(t);if(n!==null){if(t=n.tag,t===13){if(t=ix(n),t!==null){e.blockedOn=t,p3(e.priority,function(){if(n.tag===13){var r=vt(),i=Tr(n,r);i!==null&&Je(i,n,r),Kp(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rm(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sh=r,n.target.dispatchEvent(r),Sh=null}else return t=Pa(n),t!==null&&jw(t),e.blockedOn=n,!1;t.shift()}return!0}function Ry(e,t,n){sc(e)&&n.delete(t)}function ST(){im=!1,xr!==null&&sc(xr)&&(xr=null),wr!==null&&sc(wr)&&(wr=null),Sr!==null&&sc(Sr)&&(Sr=null),ao.forEach(Ry),so.forEach(Ry)}function dl(e,t){e.blockedOn===t&&(e.blockedOn=null,im||(im=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ST)))}var fl=null;function ky(e){fl!==e&&(fl=e,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,function(){fl===e&&(fl=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!="function"){if(Qp(r||n)===null)continue;break}var a=Pa(n);a!==null&&(e.splice(t,3),t-=3,Mh(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function oo(e){function t(l){return dl(l,e)}xr!==null&&dl(xr,e),wr!==null&&dl(wr,e),Sr!==null&&dl(Sr,e),ao.forEach(t),so.forEach(t);for(var n=0;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)Aw(n),n.blockedOn===null&&dr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],s=i[ot]||null;if(typeof a=="function")s||ky(n);else if(s){var o=null;if(a&&a.hasAttribute("formAction")){if(i=a,s=a[ot]||null)o=s.formAction;else if(Qp(i)!==null)continue}else o=s.action;typeof o=="function"?n[r+1]=o:(n.splice(r,3),r-=3),ky(n)}}}function Zp(e){this._internalRoot=e}Vu.prototype.render=Zp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));var n=t.current,r=vt();Ew(n,r,e,t,null,null)};Vu.prototype.unmount=Zp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;e.tag===0&&ca(),Ew(e.current,2,null,e,null,null),Uu(),t[La]=null}};function Vu(e){this._internalRoot=e}Vu.prototype.unstable_scheduleHydration=function(e){if(e){var t=mx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dr.length&&t!==0&&t<dr[n].priority;n++);dr.splice(n,0,e),n===0&&Aw(e)}};var Oy=Wb.version;if(Oy!=="19.0.0")throw Error(R(527,Oy,"19.0.0"));ce.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=n3(t),e=e!==null?ax(e):null,e=e===null?null:e.stateNode,e};var _T={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:N,findFiberByHostInstance:Yr,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{To=hl.inject(_T),gt=hl}catch{}}ju.createRoot=function(e,t){if(!ex(e))throw Error(R(299));var n=!1,r="",i=E2,a=j2,s=C2,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=_w(e,1,!1,null,null,n,r,i,a,s,o,null),e[La]=t.current,Gp(e.nodeType===8?e.parentNode:e),new Zp(t)};ju.hydrateRoot=function(e,t,n){if(!ex(e))throw Error(R(299));var r=!1,i="",a=E2,s=j2,o=C2,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=_w(e,1,!0,t,n??null,r,i,a,s,o,l,c),t.context=Tw(null),n=t.current,r=vt(),i=gr(r),i.callback=null,yr(n,i,r),t.current.lanes=r,jo(t,r),gn(t),e[La]=t.current,Gp(e),new Vu(t)};ju.version="19.0.0";function Rw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rw)}catch(e){console.error(e)}}Rw(),Yb.exports=ju;var TT=Yb.exports;const ET=Bb(TT);var kw={exports:{}},Ow={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=_;function jT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var CT=typeof Object.is=="function"?Object.is:jT,AT=Po.useSyncExternalStore,RT=Po.useRef,kT=Po.useEffect,OT=Po.useMemo,MT=Po.useDebugValue;Ow.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var a=RT(null);if(a.current===null){var s={hasValue:!1,value:null};a.current=s}else s=a.current;a=OT(function(){function l(m){if(!c){if(c=!0,u=m,m=r(m),i!==void 0&&s.hasValue){var v=s.value;if(i(v,m))return f=v}return f=m}if(v=f,CT(u,m))return v;var w=r(m);return i!==void 0&&i(v,w)?(u=m,v):(u=m,f=w)}var c=!1,u,f,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var o=AT(e,a[0],a[1]);return kT(function(){s.hasValue=!0,s.value=o},[o]),MT(o),o};kw.exports=Ow;var DT=kw.exports;function zT(e){e()}function LT(){let e=null,t=null;return{clear(){e=null,t=null},notify(){zT(()=>{let n=e;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=e;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var My={notify(){},get:()=>[]};function PT(e,t){let n,r=My,i=0,a=!1;function s(w){u();const S=r.subscribe(w);let p=!1;return()=>{p||(p=!0,S(),f())}}function o(){r.notify()}function l(){v.onStateChange&&v.onStateChange()}function c(){return a}function u(){i++,n||(n=e.subscribe(l),r=LT())}function f(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=My)}function h(){a||(a=!0,u())}function m(){a&&(a=!1,f())}const v={addNestedSub:s,notifyNestedSubs:o,handleChangeWrapper:l,isSubscribed:c,trySubscribe:h,tryUnsubscribe:m,getListeners:()=>r};return v}var BT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",UT=BT(),NT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",$T=NT(),VT=()=>UT||$T?_.useLayoutEffect:_.useEffect,HT=VT(),nf=Symbol.for("react-redux-context"),rf=typeof globalThis<"u"?globalThis:{};function FT(){if(!_.createContext)return{};const e=rf[nf]??(rf[nf]=new Map);let t=e.get(_.createContext);return t||(t=_.createContext(null),e.set(_.createContext,t)),t}var Ar=FT();function qT(e){const{children:t,context:n,serverState:r,store:i}=e,a=_.useMemo(()=>{const l=PT(i);return{store:i,subscription:l,getServerState:r?()=>r:void 0}},[i,r]),s=_.useMemo(()=>i.getState(),[i]);HT(()=>{const{subscription:l}=a;return l.onStateChange=l.notifyNestedSubs,l.trySubscribe(),s!==i.getState()&&l.notifyNestedSubs(),()=>{l.tryUnsubscribe(),l.onStateChange=void 0}},[a,s]);const o=n||Ar;return _.createElement(o.Provider,{value:a},t)}var GT=qT;function Jp(e=Ar){return function(){return _.useContext(e)}}var Mw=Jp();function Dw(e=Ar){const t=e===Ar?Mw:Jp(e),n=()=>{const{store:r}=t();return r};return Object.assign(n,{withTypes:()=>n}),n}var IT=Dw();function YT(e=Ar){const t=e===Ar?IT:Dw(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var et=YT(),KT=(e,t)=>e===t;function XT(e=Ar){const t=e===Ar?Mw:Jp(e),n=(r,i={})=>{const{equalityFn:a=KT}=typeof i=="function"?{equalityFn:i}:i,s=t(),{store:o,subscription:l,getServerState:c}=s;_.useRef(!0);const u=_.useCallback({[r.name](h){return r(h)}}[r.name],[r]),f=DT.useSyncExternalStoreWithSelector(l.addNestedSub,o.getState,c||o.getState,u,a);return _.useDebugValue(f),f};return Object.assign(n,{withTypes:()=>n}),n}var le=XT(),Wp={};Object.defineProperty(Wp,"__esModule",{value:!0});Wp.parse=nE;Wp.serialize=rE;const QT=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,ZT=/^[\u0021-\u003A\u003C-\u007E]*$/,JT=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,WT=/^[\u0020-\u003A\u003D-\u007E]*$/,eE=Object.prototype.toString,tE=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function nE(e,t){const n=new tE,r=e.length;if(r<2)return n;const i=(t==null?void 0:t.decode)||iE;let a=0;do{const s=e.indexOf("=",a);if(s===-1)break;const o=e.indexOf(";",a),l=o===-1?r:o;if(s>l){a=e.lastIndexOf(";",s-1)+1;continue}const c=Dy(e,a,s),u=zy(e,s,c),f=e.slice(c,u);if(n[f]===void 0){let h=Dy(e,s+1,l),m=zy(e,l,h);const v=i(e.slice(h,m));n[f]=v}a=l+1}while(a<r);return n}function Dy(e,t,n){do{const r=e.charCodeAt(t);if(r!==32&&r!==9)return t}while(++t<n);return n}function zy(e,t,n){for(;t>n;){const r=e.charCodeAt(--t);if(r!==32&&r!==9)return t+1}return n}function rE(e,t,n){const r=(n==null?void 0:n.encode)||encodeURIComponent;if(!QT.test(e))throw new TypeError(`argument name is invalid: ${e}`);const i=r(t);if(!ZT.test(i))throw new TypeError(`argument val is invalid: ${t}`);let a=e+"="+i;if(!n)return a;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);a+="; Max-Age="+n.maxAge}if(n.domain){if(!JT.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);a+="; Domain="+n.domain}if(n.path){if(!WT.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);a+="; Path="+n.path}if(n.expires){if(!aE(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);a+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(a+="; HttpOnly"),n.secure&&(a+="; Secure"),n.partitioned&&(a+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":a+="; Priority=Low";break;case"medium":a+="; Priority=Medium";break;case"high":a+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":a+="; SameSite=Strict";break;case"lax":a+="; SameSite=Lax";break;case"none":a+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return a}function iE(e){if(e.indexOf("%")===-1)return e;try{return decodeURIComponent(e)}catch{return e}}function aE(e){return eE.call(e)==="[object Date]"}var Ly="popstate";function sE(e={}){function t(r,i){let{pathname:a,search:s,hash:o}=r.location;return am("",{pathname:a,search:s,hash:o},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lo(i)}return lE(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function mn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oE(){return Math.random().toString(36).substring(2,10)}function Py(e,t){return{usr:e.state,key:e.key,idx:t}}function am(e,t,n=null,r){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?$a(t):t,state:n,key:t&&t.key||r||oE()}}function lo({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function $a(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function lE(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,o="POP",l=null,c=u();c==null&&(c=0,s.replaceState({...s.state,idx:c},""));function u(){return(s.state||{idx:null}).idx}function f(){o="POP";let S=u(),p=S==null?null:S-c;c=S,l&&l({action:o,location:w.location,delta:p})}function h(S,p){o="PUSH";let y=am(w.location,S,p);c=u()+1;let b=Py(y,c),x=w.createHref(y);try{s.pushState(b,"",x)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(x)}a&&l&&l({action:o,location:w.location,delta:1})}function m(S,p){o="REPLACE";let y=am(w.location,S,p);c=u();let b=Py(y,c),x=w.createHref(y);s.replaceState(b,"",x),a&&l&&l({action:o,location:w.location,delta:0})}function v(S){let p=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof S=="string"?S:lo(S);return y=y.replace(/ $/,"%20"),ge(p,`No window.location.(origin|href) available to create URL for href: ${y}`),new URL(y,p)}let w={get action(){return o},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ly,f),l=S,()=>{i.removeEventListener(Ly,f),l=null}},createHref(S){return t(i,S)},createURL:v,encodeLocation(S){let p=v(S);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:m,go(S){return s.go(S)}};return w}function zw(e,t,n="/"){return cE(e,t,n,!1)}function cE(e,t,n,r){let i=typeof t=="string"?$a(t):t,a=Hn(i.pathname||"/",n);if(a==null)return null;let s=Lw(e);uE(s);let o=null;for(let l=0;o==null&&l<s.length;++l){let c=wE(a);o=bE(s[l],c,r)}return o}function Lw(e,t=[],n=[],r=""){let i=(a,s,o)=>{let l={relativePath:o===void 0?a.path||"":o,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(ge(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let c=Pn([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(ge(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),Lw(a.children,t,u,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:yE(c,a.index),routesMeta:u})};return e.forEach((a,s)=>{var o;if(a.path===""||!((o=a.path)!=null&&o.includes("?")))i(a,s);else for(let l of Pw(a.path))i(a,s,l)}),t}function Pw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=Pw(r.join("/")),o=[];return o.push(...s.map(l=>l===""?a:[a,l].join("/"))),i&&o.push(...s),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function uE(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vE(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var dE=/^:[\w-]+$/,fE=3,hE=2,mE=1,pE=10,gE=-2,By=e=>e==="*";function yE(e,t){let n=e.split("/"),r=n.length;return n.some(By)&&(r+=gE),t&&(r+=hE),n.filter(i=>!By(i)).reduce((i,a)=>i+(dE.test(a)?fE:a===""?mE:pE),r)}function vE(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bE(e,t,n=!1){let{routesMeta:r}=e,i={},a="/",s=[];for(let o=0;o<r.length;++o){let l=r[o],c=o===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",f=iu({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=iu({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Pn([a,f.pathname]),pathnameBase:EE(Pn([a,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(a=Pn([a,f.pathnameBase]))}return s}function iu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xE(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((c,{paramName:u,isOptional:f},h)=>{if(u==="*"){let v=o[h]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const m=o[h];return f&&!m?c[u]=void 0:c[u]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:e}}function xE(e,t=!1,n=!0){mn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,o,l)=>(r.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wE(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return mn(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function SE(e,t="/"){let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?$a(e):e;return{pathname:n?n.startsWith("/")?n:_E(n,t):t,search:jE(r),hash:CE(i)}}function _E(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function af(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function TE(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bw(e){let t=TE(e);return t.map((n,r)=>r===t.length-1?n.pathname:n.pathnameBase)}function Uw(e,t,n,r=!1){let i;typeof e=="string"?i=$a(e):(i={...e},ge(!i.pathname||!i.pathname.includes("?"),af("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),af("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),af("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,o;if(s==null)o=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}o=f>=0?t[f]:"/"}let l=SE(i,o),c=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var Pn=e=>e.join("/").replace(/\/\/+/g,"/"),EE=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),jE=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,CE=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function AE(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Nw=["POST","PUT","PATCH","DELETE"];new Set(Nw);var RE=["GET",...Nw];new Set(RE);var Va=_.createContext(null);Va.displayName="DataRouter";var Hu=_.createContext(null);Hu.displayName="DataRouterState";var $w=_.createContext({isTransitioning:!1});$w.displayName="ViewTransition";var kE=_.createContext(new Map);kE.displayName="Fetchers";var OE=_.createContext(null);OE.displayName="Await";var yn=_.createContext(null);yn.displayName="Navigation";var Bo=_.createContext(null);Bo.displayName="Location";var vn=_.createContext({outlet:null,matches:[],isDataRoute:!1});vn.displayName="Route";var eg=_.createContext(null);eg.displayName="RouteError";function ME(e,{relative:t}={}){ge(Uo(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=_.useContext(yn),{hash:i,pathname:a,search:s}=No(e,{relative:t}),o=a;return n!=="/"&&(o=a==="/"?n:Pn([n,a])),r.createHref({pathname:o,search:s,hash:i})}function Uo(){return _.useContext(Bo)!=null}function Si(){return ge(Uo(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Bo).location}var Vw="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Hw(e){_.useContext(yn).static||_.useLayoutEffect(e)}function Yn(){let{isDataRoute:e}=_.useContext(vn);return e?GE():DE()}function DE(){ge(Uo(),"useNavigate() may be used only in the context of a <Router> component.");let e=_.useContext(Va),{basename:t,navigator:n}=_.useContext(yn),{matches:r}=_.useContext(vn),{pathname:i}=Si(),a=JSON.stringify(Bw(r)),s=_.useRef(!1);return Hw(()=>{s.current=!0}),_.useCallback((l,c={})=>{if(mn(s.current,Vw),!s.current)return;if(typeof l=="number"){n.go(l);return}let u=Uw(l,JSON.parse(a),i,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Pn([t,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[t,n,a,i,e])}_.createContext(null);function Fw(){let{matches:e}=_.useContext(vn),t=e[e.length-1];return t?t.params:{}}function No(e,{relative:t}={}){let{matches:n}=_.useContext(vn),{pathname:r}=Si(),i=JSON.stringify(Bw(n));return _.useMemo(()=>Uw(e,JSON.parse(i),r,t==="path"),[e,i,r,t])}function zE(e,t){return qw(e,t)}function qw(e,t,n,r){var y;ge(Uo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i,static:a}=_.useContext(yn),{matches:s}=_.useContext(vn),o=s[s.length-1],l=o?o.params:{},c=o?o.pathname:"/",u=o?o.pathnameBase:"/",f=o&&o.route;{let b=f&&f.path||"";Gw(c,!f||b.endsWith("*")||b.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${b}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${b}"> to <Route path="${b==="/"?"*":`${b}/*`}">.`)}let h=Si(),m;if(t){let b=typeof t=="string"?$a(t):t;ge(u==="/"||((y=b.pathname)==null?void 0:y.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${b.pathname}" was given in the \`location\` prop.`),m=b}else m=h;let v=m.pathname||"/",w=v;if(u!=="/"){let b=u.replace(/^\//,"").split("/");w="/"+v.replace(/^\//,"").split("/").slice(b.length).join("/")}let S=!a&&n&&n.matches&&n.matches.length>0?n.matches:zw(e,{pathname:w});mn(f||S!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),mn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let p=NE(S&&S.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Pn([u,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?u:Pn([u,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return t&&p?_.createElement(Bo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},p):p}function LE(){let e=qE(),t=AE(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:a},"ErrorBoundary")," or"," ",_.createElement("code",{style:a},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:i},n):null,s)}var PE=_.createElement(LE,null),BE=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?_.createElement(vn.Provider,{value:this.props.routeContext},_.createElement(eg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function UE({routeContext:e,match:t,children:n}){let r=_.useContext(Va);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(vn.Provider,{value:e},n)}function NE(e,t=[],n=null,r=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,a=n==null?void 0:n.errors;if(a!=null){let l=i.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);ge(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,l+1))}let s=!1,o=-1;if(n)for(let l=0;l<i.length;l++){let c=i[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(o=l),c.route.id){let{loaderData:u,errors:f}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||h){s=!0,o>=0?i=i.slice(0,o+1):i=[i[0]];break}}}return i.reduceRight((l,c,u)=>{let f,h=!1,m=null,v=null;n&&(f=a&&c.route.id?a[c.route.id]:void 0,m=c.route.errorElement||PE,s&&(o<0&&u===0?(Gw("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,v=null):o===u&&(h=!0,v=c.route.hydrateFallbackElement||null)));let w=t.concat(i.slice(0,u+1)),S=()=>{let p;return f?p=m:h?p=v:c.route.Component?p=_.createElement(c.route.Component,null):c.route.element?p=c.route.element:p=l,_.createElement(UE,{match:c,routeContext:{outlet:l,matches:w,isDataRoute:n!=null},children:p})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?_.createElement(BE,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:S(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):S()},null)}function tg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $E(e){let t=_.useContext(Va);return ge(t,tg(e)),t}function VE(e){let t=_.useContext(Hu);return ge(t,tg(e)),t}function HE(e){let t=_.useContext(vn);return ge(t,tg(e)),t}function ng(e){let t=HE(e),n=t.matches[t.matches.length-1];return ge(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function FE(){return ng("useRouteId")}function qE(){var r;let e=_.useContext(eg),t=VE("useRouteError"),n=ng("useRouteError");return e!==void 0?e:(r=t.errors)==null?void 0:r[n]}function GE(){let{router:e}=$E("useNavigate"),t=ng("useNavigate"),n=_.useRef(!1);return Hw(()=>{n.current=!0}),_.useCallback(async(i,a={})=>{mn(n.current,Vw),n.current&&(typeof i=="number"?e.navigate(i):await e.navigate(i,{fromRouteId:t,...a}))},[e,t])}var Uy={};function Gw(e,t,n){!t&&!Uy[e]&&(Uy[e]=!0,mn(!1,n))}_.memo(IE);function IE({routes:e,future:t,state:n}){return qw(e,void 0,n,t)}function nt(e){ge(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function YE({basename:e="/",children:t=null,location:n,navigationType:r="POP",navigator:i,static:a=!1}){ge(!Uo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),o=_.useMemo(()=>({basename:s,navigator:i,static:a,future:{}}),[s,i,a]);typeof n=="string"&&(n=$a(n));let{pathname:l="/",search:c="",hash:u="",state:f=null,key:h="default"}=n,m=_.useMemo(()=>{let v=Hn(l,s);return v==null?null:{location:{pathname:v,search:c,hash:u,state:f,key:h},navigationType:r}},[s,l,c,u,f,h,r]);return mn(m!=null,`<Router basename="${s}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:_.createElement(yn.Provider,{value:o},_.createElement(Bo.Provider,{children:t,value:m}))}function KE({children:e,location:t}){return zE(sm(e),t)}function sm(e,t=[]){let n=[];return _.Children.forEach(e,(r,i)=>{if(!_.isValidElement(r))return;let a=[...t,i];if(r.type===_.Fragment){n.push.apply(n,sm(r.props.children,a));return}ge(r.type===nt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ge(!r.props.index||!r.props.children,"An index route cannot have child routes.");let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=sm(r.props.children,a)),n.push(s)}),n}var oc="get",lc="application/x-www-form-urlencoded";function Fu(e){return e!=null&&typeof e.tagName=="string"}function XE(e){return Fu(e)&&e.tagName.toLowerCase()==="button"}function QE(e){return Fu(e)&&e.tagName.toLowerCase()==="form"}function ZE(e){return Fu(e)&&e.tagName.toLowerCase()==="input"}function JE(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function WE(e,t){return e.button===0&&(!t||t==="_self")&&!JE(e)}var ml=null;function ej(){if(ml===null)try{new FormData(document.createElement("form"),0),ml=!1}catch{ml=!0}return ml}var tj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sf(e){return e!=null&&!tj.has(e)?(mn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lc}"`),null):e}function nj(e,t){let n,r,i,a,s;if(QE(e)){let o=e.getAttribute("action");r=o?Hn(o,t):null,n=e.getAttribute("method")||oc,i=sf(e.getAttribute("enctype"))||lc,a=new FormData(e)}else if(XE(e)||ZE(e)&&(e.type==="submit"||e.type==="image")){let o=e.form;if(o==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?Hn(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||oc,i=sf(e.getAttribute("formenctype"))||sf(o.getAttribute("enctype"))||lc,a=new FormData(o,e),!ej()){let{name:c,type:u,value:f}=e;if(u==="image"){let h=c?`${c}.`:"";a.append(`${h}x`,"0"),a.append(`${h}y`,"0")}else c&&a.append(c,f)}}else{if(Fu(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=oc,r=null,i=lc,s=e}return a&&i==="text/plain"&&(s=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:s}}function rg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function rj(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ij(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function aj(e,t,n){let r=await Promise.all(e.map(async i=>{let a=t.routes[i.route.id];if(a){let s=await rj(a,n);return s.links?s.links():[]}return[]}));return cj(r.flat(1).filter(ij).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function Ny(e,t,n,r,i,a){let s=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,o=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return a==="assets"?t.filter((l,c)=>s(l,c)||o(l,c)):a==="data"?t.filter((l,c)=>{var f;let u=r.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(s(l,c)||o(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(e,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function sj(e,t,{includeHydrateFallback:n}={}){return oj(e.map(r=>{let i=t.routes[r.route.id];if(!i)return[];let a=[i.module];return i.clientActionModule&&(a=a.concat(i.clientActionModule)),i.clientLoaderModule&&(a=a.concat(i.clientLoaderModule)),n&&i.hydrateFallbackModule&&(a=a.concat(i.hydrateFallbackModule)),i.imports&&(a=a.concat(i.imports)),a}).flat(1))}function oj(e){return[...new Set(e)]}function lj(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function cj(e,t){let n=new Set;return new Set(t),e.reduce((r,i)=>{let a=JSON.stringify(lj(i));return n.has(a)||(n.add(a),r.push({key:a,link:i})),r},[])}var uj=new Set([100,101,204,205]);function dj(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&Hn(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function Iw(){let e=_.useContext(Va);return rg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function fj(){let e=_.useContext(Hu);return rg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var ig=_.createContext(void 0);ig.displayName="FrameworkContext";function Yw(){let e=_.useContext(ig);return rg(e,"You must render this element inside a <HydratedRouter> element"),e}function hj(e,t){let n=_.useContext(ig),[r,i]=_.useState(!1),[a,s]=_.useState(!1),{onFocus:o,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=t,h=_.useRef(null);_.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let w=p=>{p.forEach(y=>{s(y.isIntersecting)})},S=new IntersectionObserver(w,{threshold:.5});return h.current&&S.observe(h.current),()=>{S.disconnect()}}},[e]),_.useEffect(()=>{if(r){let w=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(w)}}},[r]);let m=()=>{i(!0)},v=()=>{i(!1),s(!1)};return n?e!=="intent"?[a,h,{}]:[a,h,{onFocus:ss(o,m),onBlur:ss(l,v),onMouseEnter:ss(c,m),onMouseLeave:ss(u,v),onTouchStart:ss(f,m)}]:[!1,h,{}]}function ss(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function mj({page:e,...t}){let{router:n}=Iw(),r=_.useMemo(()=>zw(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement(gj,{page:e,matches:r,...t}):null}function pj(e){let{manifest:t,routeModules:n}=Yw(),[r,i]=_.useState([]);return _.useEffect(()=>{let a=!1;return aj(e,t,n).then(s=>{a||i(s)}),()=>{a=!0}},[e,t,n]),r}function gj({page:e,matches:t,...n}){let r=Si(),{manifest:i,routeModules:a}=Yw(),{basename:s}=Iw(),{loaderData:o,matches:l}=fj(),c=_.useMemo(()=>Ny(e,t,l,i,r,"data"),[e,t,l,i,r]),u=_.useMemo(()=>Ny(e,t,l,i,r,"assets"),[e,t,l,i,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let v=new Set,w=!1;if(t.forEach(p=>{var b;let y=i.routes[p.route.id];!y||!y.hasLoader||(!c.some(x=>x.route.id===p.route.id)&&p.route.id in o&&((b=a[p.route.id])!=null&&b.shouldRevalidate)||y.hasClientLoader?w=!0:v.add(p.route.id))}),v.size===0)return[];let S=dj(e,s);return w&&v.size>0&&S.searchParams.set("_routes",t.filter(p=>v.has(p.route.id)).map(p=>p.route.id).join(",")),[S.pathname+S.search]},[s,o,r,i,c,t,e,a]),h=_.useMemo(()=>sj(u,i),[u,i]),m=pj(u);return _.createElement(_.Fragment,null,f.map(v=>_.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...n})),h.map(v=>_.createElement("link",{key:v,rel:"modulepreload",href:v,...n})),m.map(({key:v,link:w})=>_.createElement("link",{key:v,...w})))}function yj(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var Kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kw&&(window.__reactRouterVersion="7.5.2")}catch{}function vj({basename:e,children:t,window:n}){let r=_.useRef();r.current==null&&(r.current=sE({window:n,v5Compat:!0}));let i=r.current,[a,s]=_.useState({action:i.action,location:i.location}),o=_.useCallback(l=>{_.startTransition(()=>s(l))},[s]);return _.useLayoutEffect(()=>i.listen(o),[i,o]),_.createElement(YE,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:i})}var Xw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ce=_.forwardRef(function({onClick:t,discover:n="render",prefetch:r="none",relative:i,reloadDocument:a,replace:s,state:o,target:l,to:c,preventScrollReset:u,viewTransition:f,...h},m){let{basename:v}=_.useContext(yn),w=typeof c=="string"&&Xw.test(c),S,p=!1;if(typeof c=="string"&&w&&(S=c,Kw))try{let O=new URL(window.location.href),k=c.startsWith("//")?new URL(O.protocol+c):new URL(c),B=Hn(k.pathname,v);k.origin===O.origin&&B!=null?c=B+k.search+k.hash:p=!0}catch{mn(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=ME(c,{relative:i}),[b,x,T]=hj(r,h),j=Sj(c,{replace:s,state:o,target:l,preventScrollReset:u,relative:i,viewTransition:f});function E(O){t&&t(O),O.defaultPrevented||j(O)}let A=_.createElement("a",{...h,...T,href:S||y,onClick:p||a?t:E,ref:yj(m,x),target:l,"data-discover":!w&&n==="render"?"true":void 0});return b&&!w?_.createElement(_.Fragment,null,A,_.createElement(mj,{page:y})):A});Ce.displayName="Link";var bj=_.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:r="",end:i=!1,style:a,to:s,viewTransition:o,children:l,...c},u){let f=No(s,{relative:c.relative}),h=Si(),m=_.useContext(Hu),{navigator:v,basename:w}=_.useContext(yn),S=m!=null&&Cj(f)&&o===!0,p=v.encodeLocation?v.encodeLocation(f).pathname:f.pathname,y=h.pathname,b=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(y=y.toLowerCase(),b=b?b.toLowerCase():null,p=p.toLowerCase()),b&&w&&(b=Hn(b,w)||b);const x=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let T=y===p||!i&&y.startsWith(p)&&y.charAt(x)==="/",j=b!=null&&(b===p||!i&&b.startsWith(p)&&b.charAt(p.length)==="/"),E={isActive:T,isPending:j,isTransitioning:S},A=T?t:void 0,O;typeof r=="function"?O=r(E):O=[r,T?"active":null,j?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(E):a;return _.createElement(Ce,{...c,"aria-current":A,className:O,ref:u,style:k,to:s,viewTransition:o},typeof l=="function"?l(E):l)});bj.displayName="NavLink";var xj=_.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:s=oc,action:o,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,...h},m)=>{let v=Ej(),w=jj(o,{relative:c}),S=s.toLowerCase()==="get"?"get":"post",p=typeof o=="string"&&Xw.test(o),y=b=>{if(l&&l(b),b.defaultPrevented)return;b.preventDefault();let x=b.nativeEvent.submitter,T=(x==null?void 0:x.getAttribute("formmethod"))||s;v(x||b.currentTarget,{fetcherKey:t,method:T,navigate:n,replace:i,state:a,relative:c,preventScrollReset:u,viewTransition:f})};return _.createElement("form",{ref:m,method:S,action:w,onSubmit:r?l:y,...h,"data-discover":!p&&e==="render"?"true":void 0})});xj.displayName="Form";function wj(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Qw(e){let t=_.useContext(Va);return ge(t,wj(e)),t}function Sj(e,{target:t,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:s}={}){let o=Yn(),l=Si(),c=No(e,{relative:a});return _.useCallback(u=>{if(WE(u,t)){u.preventDefault();let f=n!==void 0?n:lo(l)===lo(c);o(e,{replace:f,state:r,preventScrollReset:i,relative:a,viewTransition:s})}},[l,o,c,n,r,t,e,i,a,s])}var _j=0,Tj=()=>`__${String(++_j)}__`;function Ej(){let{router:e}=Qw("useSubmit"),{basename:t}=_.useContext(yn),n=FE();return _.useCallback(async(r,i={})=>{let{action:a,method:s,encType:o,formData:l,body:c}=nj(r,t);if(i.navigate===!1){let u=i.fetcherKey||Tj();await e.fetch(u,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||o,flushSync:i.flushSync})}else await e.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||s,formEncType:i.encType||o,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[e,t,n])}function jj(e,{relative:t}={}){let{basename:n}=_.useContext(yn),r=_.useContext(vn);ge(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...No(e||".",{relative:t})},s=Si();if(e==null){a.search=s.search;let o=new URLSearchParams(a.search),l=o.getAll("index");if(l.some(u=>u==="")){o.delete("index"),l.filter(f=>f).forEach(f=>o.append("index",f));let u=o.toString();a.search=u?`?${u}`:""}}return(!e||e===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Pn([n,a.pathname])),lo(a)}function Cj(e,t={}){let n=_.useContext($w);ge(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Qw("useViewTransitionState"),i=No(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Hn(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Hn(n.nextLocation.pathname,r)||n.nextLocation.pathname;return iu(i.pathname,s)!=null||iu(i.pathname,a)!=null}new TextEncoder;[...uj];var Ye=function(){return Ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Ye.apply(this,arguments)};function xa(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var oe="-ms-",Bs="-moz-",Q="-webkit-",Zw="comm",qu="rule",ag="decl",Aj="@import",Jw="@keyframes",Rj="@layer",Ww=Math.abs,sg=String.fromCharCode,om=Object.assign;function kj(e,t){return De(e,0)^45?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}function eS(e){return e.trim()}function En(e,t){return(e=t.exec(e))?e[0]:e}function V(e,t,n){return e.replace(t,n)}function cc(e,t,n){return e.indexOf(t,n)}function De(e,t){return e.charCodeAt(t)|0}function wa(e,t,n){return e.slice(t,n)}function rn(e){return e.length}function tS(e){return e.length}function gs(e,t){return t.push(e),e}function Oj(e,t){return e.map(t).join("")}function $y(e,t){return e.filter(function(n){return!En(n,t)})}var Gu=1,Sa=1,nS=0,$t=0,Ee=0,Ha="";function Iu(e,t,n,r,i,a,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Gu,column:Sa,length:s,return:"",siblings:o}}function er(e,t){return om(Iu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ki(e){for(;e.root;)e=er(e.root,{children:[e]});gs(e,e.siblings)}function Mj(){return Ee}function Dj(){return Ee=$t>0?De(Ha,--$t):0,Sa--,Ee===10&&(Sa=1,Gu--),Ee}function Qt(){return Ee=$t<nS?De(Ha,$t++):0,Sa++,Ee===10&&(Sa=1,Gu++),Ee}function ai(){return De(Ha,$t)}function uc(){return $t}function Yu(e,t){return wa(Ha,e,t)}function lm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function zj(e){return Gu=Sa=1,nS=rn(Ha=e),$t=0,[]}function Lj(e){return Ha="",e}function of(e){return eS(Yu($t-1,cm(e===91?e+2:e===40?e+1:e)))}function Pj(e){for(;(Ee=ai())&&Ee<33;)Qt();return lm(e)>2||lm(Ee)>3?"":" "}function Bj(e,t){for(;--t&&Qt()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return Yu(e,uc()+(t<6&&ai()==32&&Qt()==32))}function cm(e){for(;Qt();)switch(Ee){case e:return $t;case 34:case 39:e!==34&&e!==39&&cm(Ee);break;case 40:e===41&&cm(e);break;case 92:Qt();break}return $t}function Uj(e,t){for(;Qt()&&e+Ee!==57;)if(e+Ee===84&&ai()===47)break;return"/*"+Yu(t,$t-1)+"*"+sg(e===47?e:Qt())}function Nj(e){for(;!lm(ai());)Qt();return Yu(e,$t)}function $j(e){return Lj(dc("",null,null,null,[""],e=zj(e),0,[0],e))}function dc(e,t,n,r,i,a,s,o,l){for(var c=0,u=0,f=s,h=0,m=0,v=0,w=1,S=1,p=1,y=0,b="",x=i,T=a,j=r,E=b;S;)switch(v=y,y=Qt()){case 40:if(v!=108&&De(E,f-1)==58){cc(E+=V(of(y),"&","&\f"),"&\f",Ww(c?o[c-1]:0))!=-1&&(p=-1);break}case 34:case 39:case 91:E+=of(y);break;case 9:case 10:case 13:case 32:E+=Pj(v);break;case 92:E+=Bj(uc()-1,7);continue;case 47:switch(ai()){case 42:case 47:gs(Vj(Uj(Qt(),uc()),t,n,l),l);break;default:E+="/"}break;case 123*w:o[c++]=rn(E)*p;case 125*w:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+u:p==-1&&(E=V(E,/\f/g,"")),m>0&&rn(E)-f&&gs(m>32?Hy(E+";",r,n,f-1,l):Hy(V(E," ","")+";",r,n,f-2,l),l);break;case 59:E+=";";default:if(gs(j=Vy(E,t,n,c,u,i,o,b,x=[],T=[],f,a),a),y===123)if(u===0)dc(E,t,j,j,x,a,f,o,T);else switch(h===99&&De(E,3)===110?100:h){case 100:case 108:case 109:case 115:dc(e,j,j,r&&gs(Vy(e,j,j,0,0,i,o,b,i,x=[],f,T),T),i,T,f,o,r?x:T);break;default:dc(E,j,j,j,[""],T,0,o,T)}}c=u=m=0,w=p=1,b=E="",f=s;break;case 58:f=1+rn(E),m=v;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&Dj()==125)continue}switch(E+=sg(y),y*w){case 38:p=u>0?1:(E+="\f",-1);break;case 44:o[c++]=(rn(E)-1)*p,p=1;break;case 64:ai()===45&&(E+=of(Qt())),h=ai(),u=f=rn(b=E+=Nj(uc())),y++;break;case 45:v===45&&rn(E)==2&&(w=0)}}return a}function Vy(e,t,n,r,i,a,s,o,l,c,u,f){for(var h=i-1,m=i===0?a:[""],v=tS(m),w=0,S=0,p=0;w<r;++w)for(var y=0,b=wa(e,h+1,h=Ww(S=s[w])),x=e;y<v;++y)(x=eS(S>0?m[y]+" "+b:V(b,/&\f/g,m[y])))&&(l[p++]=x);return Iu(e,t,n,i===0?qu:o,l,c,u,f)}function Vj(e,t,n,r){return Iu(e,t,n,Zw,sg(Mj()),wa(e,2,-2),0,r)}function Hy(e,t,n,r,i){return Iu(e,t,n,ag,wa(e,0,r),wa(e,r+1,-1),r,i)}function rS(e,t,n){switch(kj(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 4789:return Bs+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+Bs+e+oe+e+e;case 5936:switch(De(e,t+11)){case 114:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+oe+V(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Q+e+oe+e+e;case 6165:return Q+e+oe+"flex-"+e+e;case 5187:return Q+e+V(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return Q+e+oe+"flex-item-"+V(e,/flex-|-self/g,"")+(En(e,/flex-|baseline/)?"":oe+"grid-row-"+V(e,/flex-|-self/g,""))+e;case 4675:return Q+e+oe+"flex-line-pack"+V(e,/align-content|flex-|-self/g,"")+e;case 5548:return Q+e+oe+V(e,"shrink","negative")+e;case 5292:return Q+e+oe+V(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+V(e,"-grow","")+Q+e+oe+V(e,"grow","positive")+e;case 4554:return Q+V(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return V(V(V(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return V(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return V(V(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4200:if(!En(e,/flex-|baseline/))return oe+"grid-column-align"+wa(e,t)+e;break;case 2592:case 3360:return oe+V(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,En(r.props,/grid-\w+-end/)})?~cc(e+(n=n[t].value),"span",0)?e:oe+V(e,"-start","")+e+oe+"grid-row-span:"+(~cc(n,"span",0)?En(n,/\d+/):+En(n,/\d+/)-+En(e,/\d+/))+";":oe+V(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return En(r.props,/grid-\w+-start/)})?e:oe+V(V(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return V(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(rn(e)-1-t>6)switch(De(e,t+1)){case 109:if(De(e,t+4)!==45)break;case 102:return V(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+Bs+(De(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~cc(e,"stretch",0)?rS(V(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return V(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,s,o,l,c){return oe+i+":"+a+c+(s?oe+i+"-span:"+(o?l:+l-+a)+c:"")+e});case 4949:if(De(e,t+6)===121)return V(e,":",":"+Q)+e;break;case 6444:switch(De(e,De(e,14)===45?18:11)){case 120:return V(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Q+(De(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+oe+"$2box$3")+e;case 100:return V(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return V(e,"scroll-","scroll-snap-")+e}return e}function au(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Hj(e,t,n,r){switch(e.type){case Rj:if(e.children.length)break;case Aj:case ag:return e.return=e.return||e.value;case Zw:return"";case Jw:return e.return=e.value+"{"+au(e.children,r)+"}";case qu:if(!rn(e.value=e.props.join(",")))return""}return rn(n=au(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fj(e){var t=tS(e);return function(n,r,i,a){for(var s="",o=0;o<t;o++)s+=e[o](n,r,i,a)||"";return s}}function qj(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gj(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case ag:e.return=rS(e.value,e.length,n);return;case Jw:return au([er(e,{value:V(e.value,"@","@"+Q)})],r);case qu:if(e.length)return Oj(n=e.props,function(i){switch(En(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ki(er(e,{props:[V(i,/:(read-\w+)/,":"+Bs+"$1")]})),ki(er(e,{props:[i]})),om(e,{props:$y(n,r)});break;case"::placeholder":ki(er(e,{props:[V(i,/:(plac\w+)/,":"+Q+"input-$1")]})),ki(er(e,{props:[V(i,/:(plac\w+)/,":"+Bs+"$1")]})),ki(er(e,{props:[V(i,/:(plac\w+)/,oe+"input-$1")]})),ki(er(e,{props:[i]})),om(e,{props:$y(n,r)});break}return""})}}var Ij={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},dt={},_a=typeof process<"u"&&dt!==void 0&&(dt.REACT_APP_SC_ATTR||dt.SC_ATTR)||"data-styled",iS="active",aS="data-styled-version",Ku="6.1.17",og=`/*!sc*/
`,su=typeof window<"u"&&"HTMLElement"in window,Yj=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&dt.REACT_APP_SC_DISABLE_SPEEDY!==""?dt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&dt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&dt!==void 0&&dt.SC_DISABLE_SPEEDY!==void 0&&dt.SC_DISABLE_SPEEDY!==""&&dt.SC_DISABLE_SPEEDY!=="false"&&dt.SC_DISABLE_SPEEDY),Kj={},Xu=Object.freeze([]),Ta=Object.freeze({});function sS(e,t,n){return n===void 0&&(n=Ta),e.theme!==n.theme&&e.theme||t||n.theme}var oS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Xj=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Qj=/(^-|-$)/g;function Fy(e){return e.replace(Xj,"-").replace(Qj,"")}var Zj=/(a)(d)/gi,pl=52,qy=function(e){return String.fromCharCode(e+(e>25?39:97))};function um(e){var t,n="";for(t=Math.abs(e);t>pl;t=t/pl|0)n=qy(t%pl)+n;return(qy(t%pl)+n).replace(Zj,"$1-$2")}var lf,lS=5381,Qi=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},cS=function(e){return Qi(lS,e)};function lg(e){return um(cS(e)>>>0)}function Jj(e){return e.displayName||e.name||"Component"}function cf(e){return typeof e=="string"&&!0}var uS=typeof Symbol=="function"&&Symbol.for,dS=uS?Symbol.for("react.memo"):60115,Wj=uS?Symbol.for("react.forward_ref"):60112,eC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},tC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},nC=((lf={})[Wj]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},lf[dS]=fS,lf);function Gy(e){return("type"in(t=e)&&t.type.$$typeof)===dS?fS:"$$typeof"in e?nC[e.$$typeof]:eC;var t}var rC=Object.defineProperty,iC=Object.getOwnPropertyNames,Iy=Object.getOwnPropertySymbols,aC=Object.getOwnPropertyDescriptor,sC=Object.getPrototypeOf,Yy=Object.prototype;function hS(e,t,n){if(typeof t!="string"){if(Yy){var r=sC(t);r&&r!==Yy&&hS(e,r,n)}var i=iC(t);Iy&&(i=i.concat(Iy(t)));for(var a=Gy(e),s=Gy(t),o=0;o<i.length;++o){var l=i[o];if(!(l in tC||n&&n[l]||s&&l in s||a&&l in a)){var c=aC(t,l);try{rC(e,l,c)}catch{}}}}return e}function Ea(e){return typeof e=="function"}function cg(e){return typeof e=="object"&&"styledComponentId"in e}function Xr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ou(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function co(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function dm(e,t,n){if(n===void 0&&(n=!1),!n&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=dm(e[r],t[r]);else if(co(t))for(var r in t)e[r]=dm(e[r],t[r]);return e}function ug(e,t){Object.defineProperty(e,"toString",{value:t})}function $o(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var oC=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;t>=a;)if((a<<=1)<0)throw $o(16,"".concat(t));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var o=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(o,n[s])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),a=i+r,s=i;s<a;s++)n+="".concat(this.tag.getRule(s)).concat(og);return n},e}(),fc=new Map,lu=new Map,hc=1,gl=function(e){if(fc.has(e))return fc.get(e);for(;lu.has(hc);)hc++;var t=hc++;return fc.set(e,t),lu.set(t,e),t},lC=function(e,t){hc=t+1,fc.set(e,t),lu.set(t,e)},cC="style[".concat(_a,"][").concat(aS,'="').concat(Ku,'"]'),uC=new RegExp("^".concat(_a,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),dC=function(e,t,n){for(var r,i=n.split(","),a=0,s=i.length;a<s;a++)(r=i[a])&&e.registerName(t,r)},fC=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(og),i=[],a=0,s=r.length;a<s;a++){var o=r[a].trim();if(o){var l=o.match(uC);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(lC(u,c),dC(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(o)}}},Ky=function(e){for(var t=document.querySelectorAll(cC),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_a)!==iS&&(fC(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function hC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var mS=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(o){var l=Array.from(o.querySelectorAll("style[".concat(_a,"]")));return l[l.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(_a,iS),r.setAttribute(aS,Ku);var s=hC();return s&&r.setAttribute("nonce",s),n.insertBefore(r,a),r},mC=function(){function e(t){this.element=mS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var s=r[i];if(s.ownerNode===n)return s}throw $o(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),pC=function(){function e(t){this.element=mS(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),gC=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Xy=su,yC={isServer:!su,useCSSOMInjection:!Yj},cu=function(){function e(t,n,r){t===void 0&&(t=Ta),n===void 0&&(n={});var i=this;this.options=Ye(Ye({},yC),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&su&&Xy&&(Xy=!1,Ky(this)),ug(this,function(){return function(a){for(var s=a.getTag(),o=s.length,l="",c=function(f){var h=function(p){return lu.get(p)}(f);if(h===void 0)return"continue";var m=a.names.get(h),v=s.getGroup(f);if(m===void 0||!m.size||v.length===0)return"continue";var w="".concat(_a,".g").concat(f,'[id="').concat(h,'"]'),S="";m!==void 0&&m.forEach(function(p){p.length>0&&(S+="".concat(p,","))}),l+="".concat(v).concat(w,'{content:"').concat(S,'"}').concat(og)},u=0;u<o;u++)c(u);return l}(i)})}return e.registerId=function(t){return gl(t)},e.prototype.rehydrate=function(){!this.server&&su&&Ky(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ye(Ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new gC(i):r?new mC(i):new pC(i)}(this.options),new oC(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(gl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(gl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(gl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),vC=/&/g,bC=/^\s*\/\/.*$/gm;function pS(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=pS(n.children,t)),n})}function xC(e){var t,n,r,i=Ta,a=i.options,s=a===void 0?Ta:a,o=i.plugins,l=o===void 0?Xu:o,c=function(h,m,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(t):h},u=l.slice();u.push(function(h){h.type===qu&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(vC,n).replace(r,c))}),s.prefix&&u.push(Gj),u.push(Hj);var f=function(h,m,v,w){m===void 0&&(m=""),v===void 0&&(v=""),w===void 0&&(w="&"),t=w,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(bC,""),p=$j(v||m?"".concat(v," ").concat(m," { ").concat(S," }"):S);s.namespace&&(p=pS(p,s.namespace));var y=[];return au(p,Fj(u.concat(qj(function(b){return y.push(b)})))),y};return f.hash=l.length?l.reduce(function(h,m){return m.name||$o(15),Qi(h,m.name)},lS).toString():"",f}var wC=new cu,fm=xC(),gS=Ve.createContext({shouldForwardProp:void 0,styleSheet:wC,stylis:fm});gS.Consumer;Ve.createContext(void 0);function hm(){return _.useContext(gS)}var yS=function(){function e(t,n){var r=this;this.inject=function(i,a){a===void 0&&(a=fm);var s=r.name+a.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,a(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ug(this,function(){throw $o(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fm),this.name+t.hash},e}(),SC=function(e){return e>="A"&&e<="Z"};function Qy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;SC(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vS=function(e){return e==null||e===!1||e===""},bS=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!vS(a)&&(Array.isArray(a)&&a.isCss||Ea(a)?r.push("".concat(Qy(i),":"),a,";"):co(a)?r.push.apply(r,xa(xa(["".concat(i," {")],bS(a),!1),["}"],!1)):r.push("".concat(Qy(i),": ").concat((t=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Ij||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function _r(e,t,n,r){if(vS(e))return[];if(cg(e))return[".".concat(e.styledComponentId)];if(Ea(e)){if(!Ea(a=e)||a.prototype&&a.prototype.isReactComponent||!t)return[e];var i=e(t);return _r(i,t,n,r)}var a;return e instanceof yS?n?(e.inject(n,r),[e.getName(r)]):[e]:co(e)?bS(e):Array.isArray(e)?Array.prototype.concat.apply(Xu,e.map(function(s){return _r(s,t,n,r)})):[e.toString()]}function xS(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ea(n)&&!cg(n))return!1}return!0}var _C=cS(Ku),TC=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xS(t),this.componentId=n,this.baseHash=Qi(_C,n),this.baseStyle=r,cu.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Xr(i,this.staticRulesId);else{var a=ou(_r(this.rules,t,n,r)),s=um(Qi(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,s)){var o=r(a,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,o)}i=Xr(i,s),this.staticRulesId=s}else{for(var l=Qi(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var h=ou(_r(f,t,n,r));l=Qi(l,h+u),c+=h}}if(c){var m=um(l>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(c,".".concat(m),void 0,this.componentId)),i=Xr(i,m)}}return i},e}(),dg=Ve.createContext(void 0);dg.Consumer;var uf={};function EC(e,t,n){var r=cg(e),i=e,a=!cf(e),s=t.attrs,o=s===void 0?Xu:s,l=t.componentId,c=l===void 0?function(x,T){var j=typeof x!="string"?"sc":Fy(x);uf[j]=(uf[j]||0)+1;var E="".concat(j,"-").concat(lg(Ku+j+uf[j]));return T?"".concat(T,"-").concat(E):E}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(x){return cf(x)?"styled.".concat(x):"Styled(".concat(Jj(x),")")}(e):u,h=t.displayName&&t.componentId?"".concat(Fy(t.displayName),"-").concat(t.componentId):t.componentId||c,m=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,v=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;v=function(x,T){return w(x,T)&&S(x,T)}}else v=w}var p=new TC(n,h,r?i.componentStyle:void 0);function y(x,T){return function(j,E,A){var O=j.attrs,k=j.componentStyle,B=j.defaultProps,xe=j.foldedComponentIds,bn=j.styledComponentId,Ht=j.target,ji=Ve.useContext(dg),M=hm(),D=j.shouldForwardProp||M.shouldForwardProp,z=sS(E,ji,B)||Ta,I=function(xn,Qa,Qo){for(var Za,Pr=Ye(Ye({},Qa),{className:void 0,theme:Qo}),bd=0;bd<xn.length;bd+=1){var Zo=Ea(Za=xn[bd])?Za(Pr):Za;for(var Xn in Zo)Pr[Xn]=Xn==="className"?Xr(Pr[Xn],Zo[Xn]):Xn==="style"?Ye(Ye({},Pr[Xn]),Zo[Xn]):Zo[Xn]}return Qa.className&&(Pr.className=Xr(Pr.className,Qa.className)),Pr}(O,E,z),te=I.as||Ht,en={};for(var ct in I)I[ct]===void 0||ct[0]==="$"||ct==="as"||ct==="theme"&&I.theme===z||(ct==="forwardedAs"?en.as=I.forwardedAs:D&&!D(ct,te)||(en[ct]=I[ct]));var Ci=function(xn,Qa){var Qo=hm(),Za=xn.generateAndInjectStyles(Qa,Qo.styleSheet,Qo.stylis);return Za}(k,I),Ft=Xr(xe,bn);return Ci&&(Ft+=" "+Ci),I.className&&(Ft+=" "+I.className),en[cf(te)&&!oS.has(te)?"class":"className"]=Ft,A&&(en.ref=A),_.createElement(te,en)}(b,x,T)}y.displayName=f;var b=Ve.forwardRef(y);return b.attrs=m,b.componentStyle=p,b.displayName=f,b.shouldForwardProp=v,b.foldedComponentIds=r?Xr(i.foldedComponentIds,i.styledComponentId):"",b.styledComponentId=h,b.target=r?i.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=r?function(T){for(var j=[],E=1;E<arguments.length;E++)j[E-1]=arguments[E];for(var A=0,O=j;A<O.length;A++)dm(T,O[A],!0);return T}({},i.defaultProps,x):x}}),ug(b,function(){return".".concat(b.styledComponentId)}),a&&hS(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function Zy(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Jy=function(e){return Object.assign(e,{isCss:!0})};function fg(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ea(e)||co(e))return Jy(_r(Zy(Xu,xa([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?_r(r):Jy(_r(Zy(r,t)))}function mm(e,t,n){if(n===void 0&&(n=Ta),!t)throw $o(1,t);var r=function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return e(t,n,fg.apply(void 0,xa([i],a,!1)))};return r.attrs=function(i){return mm(e,t,Ye(Ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return mm(e,t,Ye(Ye({},n),i))},r}var wS=function(e){return mm(EC,e)},g=wS;oS.forEach(function(e){g[e]=wS(e)});var jC=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=xS(t),cu.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var a=i(ou(_r(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,a)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&cu.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function CC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fg.apply(void 0,xa([e],t,!1)),i="sc-global-".concat(lg(JSON.stringify(r))),a=new jC(r,i),s=function(l){var c=hm(),u=Ve.useContext(dg),f=Ve.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&o(f,l,c.styleSheet,u,c.stylis),Ve.useLayoutEffect(function(){if(!c.styleSheet.server)return o(f,l,c.styleSheet,u,c.stylis),function(){return a.removeStyles(f,c.styleSheet)}},[f,l,c.styleSheet,u,c.stylis]),null};function o(l,c,u,f,h){if(a.isStatic)a.renderStyles(l,Kj,u,h);else{var m=Ye(Ye({},c),{theme:sS(c,f,s.defaultProps)});a.renderStyles(l,m,u,h)}}return Ve.memo(s)}function AC(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ou(fg.apply(void 0,xa([e],t,!1))),i=lg(r);return new yS(i,r)}const hg=_.createContext({});function mg(e){const t=_.useRef(null);return t.current===null&&(t.current=e()),t.current}const pg=typeof window<"u",SS=pg?_.useLayoutEffect:_.useEffect,Qu=_.createContext(null),gg=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class RC extends _.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=n.offsetParent,i=r instanceof HTMLElement&&r.offsetWidth||0,a=this.props.sizeRef.current;a.height=n.offsetHeight||0,a.width=n.offsetWidth||0,a.top=n.offsetTop,a.left=n.offsetLeft,a.right=i-a.width-a.left}return null}componentDidUpdate(){}render(){return this.props.children}}function kC({children:e,isPresent:t,anchorX:n}){const r=_.useId(),i=_.useRef(null),a=_.useRef({width:0,height:0,top:0,left:0,right:0}),{nonce:s}=_.useContext(gg);return _.useInsertionEffect(()=>{const{width:o,height:l,top:c,left:u,right:f}=a.current;if(t||!i.current||!o||!l)return;const h=n==="left"?`left: ${u}`:`right: ${f}`;i.current.dataset.motionPopId=r;const m=document.createElement("style");return s&&(m.nonce=s),document.head.appendChild(m),m.sheet&&m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            ${h}px !important;
            top: ${c}px !important;
          }
        `),()=>{document.head.removeChild(m)}},[t]),d.jsx(RC,{isPresent:t,childRef:i,sizeRef:a,children:_.cloneElement(e,{ref:i})})}const OC=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:s,anchorX:o})=>{const l=mg(MC),c=_.useId();let u=!0,f=_.useMemo(()=>(u=!1,{id:c,initial:t,isPresent:n,custom:i,onExitComplete:h=>{l.set(h,!0);for(const m of l.values())if(!m)return;r&&r()},register:h=>(l.set(h,!1),()=>l.delete(h))}),[n,l,r]);return a&&u&&(f={...f}),_.useMemo(()=>{l.forEach((h,m)=>l.set(m,!1))},[n]),_.useEffect(()=>{!n&&!l.size&&r&&r()},[n]),s==="popLayout"&&(e=d.jsx(kC,{isPresent:n,anchorX:o,children:e})),d.jsx(Qu.Provider,{value:f,children:e})};function MC(){return new Map}function _S(e=!0){const t=_.useContext(Qu);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,a=_.useId();_.useEffect(()=>{if(e)return i(a)},[e]);const s=_.useCallback(()=>e&&r&&r(a),[a,r,e]);return!n&&r?[!1,s]:[!0]}const yl=e=>e.key||"";function Wy(e){const t=[];return _.Children.forEach(e,n=>{_.isValidElement(n)&&t.push(n)}),t}const mc=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:s=!1,anchorX:o="left"})=>{const[l,c]=_S(s),u=_.useMemo(()=>Wy(e),[e]),f=s&&!l?[]:u.map(yl),h=_.useRef(!0),m=_.useRef(u),v=mg(()=>new Map),[w,S]=_.useState(u),[p,y]=_.useState(u);SS(()=>{h.current=!1,m.current=u;for(let T=0;T<p.length;T++){const j=yl(p[T]);f.includes(j)?v.delete(j):v.get(j)!==!0&&v.set(j,!1)}},[p,f.length,f.join("-")]);const b=[];if(u!==w){let T=[...u];for(let j=0;j<p.length;j++){const E=p[j],A=yl(E);f.includes(A)||(T.splice(j,0,E),b.push(E))}return a==="wait"&&b.length&&(T=b),y(Wy(T)),S(u),null}const{forceRender:x}=_.useContext(hg);return d.jsx(d.Fragment,{children:p.map(T=>{const j=yl(T),E=s&&!l?!1:u===p||f.includes(j),A=()=>{if(v.has(j))v.set(j,!0);else return;let O=!0;v.forEach(k=>{k||(O=!1)}),O&&(x==null||x(),y(m.current),s&&(c==null||c()),r&&r())};return d.jsx(OC,{isPresent:E,initial:!h.current||n?void 0:!1,custom:t,presenceAffectsLayout:i,mode:a,onExitComplete:E?void 0:A,anchorX:o,children:T},j)})})};function yg(e,t){e.indexOf(t)===-1&&e.push(t)}function vg(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Fn=(e,t,n)=>n>t?t:n<e?e:n;let bg=()=>{};const qn={},TS=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ES=e=>/^0[^.\s]+$/u.test(e);function xg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Pt=e=>e,DC=(e,t)=>n=>t(e(n)),Vo=(...e)=>e.reduce(DC),uo=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class wg{constructor(){this.subscriptions=[]}add(t){return yg(this.subscriptions,t),()=>vg(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let a=0;a<i;a++){const s=this.subscriptions[a];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const un=e=>e*1e3,dn=e=>e/1e3;function jS(e,t){return t?e*(1e3/t):0}const CS=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,zC=1e-7,LC=12;function PC(e,t,n,r,i){let a,s,o=0;do s=t+(n-t)/2,a=CS(s,r,i)-e,a>0?n=s:t=s;while(Math.abs(a)>zC&&++o<LC);return s}function Ho(e,t,n,r){if(e===t&&n===r)return Pt;const i=a=>PC(a,0,1,e,n);return a=>a===0||a===1?a:CS(i(a),t,r)}const AS=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,RS=e=>t=>1-e(1-t),kS=Ho(.33,1.53,.69,.99),Sg=RS(kS),OS=AS(Sg),MS=e=>(e*=2)<1?.5*Sg(e):.5*(2-Math.pow(2,-10*(e-1))),_g=e=>1-Math.sin(Math.acos(e)),DS=RS(_g),zS=AS(_g),BC=Ho(.42,0,1,1),UC=Ho(0,0,.58,1),LS=Ho(.42,0,.58,1),NC=e=>Array.isArray(e)&&typeof e[0]!="number",PS=e=>Array.isArray(e)&&typeof e[0]=="number",$C={linear:Pt,easeIn:BC,easeInOut:LS,easeOut:UC,circIn:_g,circInOut:zS,circOut:DS,backIn:Sg,backInOut:OS,backOut:kS,anticipate:MS},VC=e=>typeof e=="string",e1=e=>{if(PS(e)){bg(e.length===4);const[t,n,r,i]=e;return Ho(t,n,r,i)}else if(VC(e))return $C[e];return e},vl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],t1={value:null};function HC(e,t){let n=new Set,r=new Set,i=!1,a=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1},l=0;function c(f){s.has(f)&&(u.schedule(f),e()),l++,f(o)}const u={schedule:(f,h=!1,m=!1)=>{const w=m&&i?n:r;return h&&s.add(f),w.has(f)||w.add(f),f},cancel:f=>{r.delete(f),s.delete(f)},process:f=>{if(o=f,i){a=!0;return}i=!0,[n,r]=[r,n],n.forEach(c),t&&t1.value&&t1.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(f))}};return u}const FC=40;function BS(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,s=vl.reduce((b,x)=>(b[x]=HC(a,t?x:void 0),b),{}),{setup:o,read:l,resolveKeyframes:c,preUpdate:u,update:f,preRender:h,render:m,postRender:v}=s,w=()=>{const b=qn.useManualTiming?i.timestamp:performance.now();n=!1,qn.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(b-i.timestamp,FC),1)),i.timestamp=b,i.isProcessing=!0,o.process(i),l.process(i),c.process(i),u.process(i),f.process(i),h.process(i),m.process(i),v.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(w))},S=()=>{n=!0,r=!0,i.isProcessing||e(w)};return{schedule:vl.reduce((b,x)=>{const T=s[x];return b[x]=(j,E=!1,A=!1)=>(n||S(),T.schedule(j,E,A)),b},{}),cancel:b=>{for(let x=0;x<vl.length;x++)s[vl[x]].cancel(b)},state:i,steps:s}}const{schedule:se,cancel:Rr,state:Ue,steps:df}=BS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Pt,!0);let pc;function qC(){pc=void 0}const at={now:()=>(pc===void 0&&at.set(Ue.isProcessing||qn.useManualTiming?Ue.timestamp:performance.now()),pc),set:e=>{pc=e,queueMicrotask(qC)}},US=e=>t=>typeof t=="string"&&t.startsWith(e),Tg=US("--"),GC=US("var(--"),Eg=e=>GC(e)?IC.test(e.split("/*")[0].trim()):!1,IC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Fa={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},fo={...Fa,transform:e=>Fn(0,1,e)},bl={...Fa,default:1},Us=e=>Math.round(e*1e5)/1e5,jg=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function YC(e){return e==null}const KC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cg=(e,t)=>n=>!!(typeof n=="string"&&KC.test(n)&&n.startsWith(e)||t&&!YC(n)&&Object.prototype.hasOwnProperty.call(n,t)),NS=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,a,s,o]=r.match(jg);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(s),alpha:o!==void 0?parseFloat(o):1}},XC=e=>Fn(0,255,e),ff={...Fa,transform:e=>Math.round(XC(e))},Qr={test:Cg("rgb","red"),parse:NS("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+ff.transform(e)+", "+ff.transform(t)+", "+ff.transform(n)+", "+Us(fo.transform(r))+")"};function QC(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const pm={test:Cg("#"),parse:QC,transform:Qr.transform},Fo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),tr=Fo("deg"),fn=Fo("%"),L=Fo("px"),ZC=Fo("vh"),JC=Fo("vw"),n1={...fn,parse:e=>fn.parse(e)/100,transform:e=>fn.transform(e*100)},Zi={test:Cg("hsl","hue"),parse:NS("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+fn.transform(Us(t))+", "+fn.transform(Us(n))+", "+Us(fo.transform(r))+")"},Fe={test:e=>Qr.test(e)||pm.test(e)||Zi.test(e),parse:e=>Qr.test(e)?Qr.parse(e):Zi.test(e)?Zi.parse(e):pm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Qr.transform(e):Zi.transform(e)},WC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function eA(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(jg))==null?void 0:t.length)||0)+(((n=e.match(WC))==null?void 0:n.length)||0)>0}const $S="number",VS="color",tA="var",nA="var(",r1="${}",rA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ho(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(rA,l=>(Fe.test(l)?(r.color.push(a),i.push(VS),n.push(Fe.parse(l))):l.startsWith(nA)?(r.var.push(a),i.push(tA),n.push(l)):(r.number.push(a),i.push($S),n.push(parseFloat(l))),++a,r1)).split(r1);return{values:n,split:o,indexes:r,types:i}}function HS(e){return ho(e).values}function FS(e){const{split:t,types:n}=ho(e),r=t.length;return i=>{let a="";for(let s=0;s<r;s++)if(a+=t[s],i[s]!==void 0){const o=n[s];o===$S?a+=Us(i[s]):o===VS?a+=Fe.transform(i[s]):a+=i[s]}return a}}const iA=e=>typeof e=="number"?0:e;function aA(e){const t=HS(e);return FS(e)(t.map(iA))}const kr={test:eA,parse:HS,createTransformer:FS,getAnimatableNone:aA};function hf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function sA({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,a=0,s=0;if(!t)i=a=s=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=hf(l,o,e+1/3),a=hf(l,o,e),s=hf(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(s*255),alpha:r}}function uu(e,t){return n=>n>0?t:e}const he=(e,t,n)=>e+(t-e)*n,mf=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},oA=[pm,Qr,Zi],lA=e=>oA.find(t=>t.test(e));function i1(e){const t=lA(e);if(!t)return!1;let n=t.parse(e);return t===Zi&&(n=sA(n)),n}const a1=(e,t)=>{const n=i1(e),r=i1(t);if(!n||!r)return uu(e,t);const i={...n};return a=>(i.red=mf(n.red,r.red,a),i.green=mf(n.green,r.green,a),i.blue=mf(n.blue,r.blue,a),i.alpha=he(n.alpha,r.alpha,a),Qr.transform(i))},gm=new Set(["none","hidden"]);function cA(e,t){return gm.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function uA(e,t){return n=>he(e,t,n)}function Ag(e){return typeof e=="number"?uA:typeof e=="string"?Eg(e)?uu:Fe.test(e)?a1:hA:Array.isArray(e)?qS:typeof e=="object"?Fe.test(e)?a1:dA:uu}function qS(e,t){const n=[...e],r=n.length,i=e.map((a,s)=>Ag(a)(a,t[s]));return a=>{for(let s=0;s<r;s++)n[s]=i[s](a);return n}}function dA(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Ag(e[i])(e[i],t[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function fA(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],s=e.indexes[a][r[a]],o=e.values[s]??0;n[i]=o,r[a]++}return n}const hA=(e,t)=>{const n=kr.createTransformer(t),r=ho(e),i=ho(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?gm.has(e)&&!i.values.length||gm.has(t)&&!r.values.length?cA(e,t):Vo(qS(fA(r,i),i.values),n):uu(e,t)};function GS(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?he(e,t,n):Ag(e)(e,t)}const mA=e=>{const t=({timestamp:n})=>e(n);return{start:()=>se.update(t,!0),stop:()=>Rr(t),now:()=>Ue.isProcessing?Ue.timestamp:at.now()}},IS=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(a/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`},du=2e4;function Rg(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<du;)t+=n,r=e.next(t);return t>=du?1/0:t}function pA(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(Rg(r),du);return{type:"keyframes",ease:a=>r.next(i*a).value/t,duration:dn(i)}}const gA=5;function YS(e,t,n){const r=Math.max(t-gA,0);return jS(n-e(r),t-r)}const ve={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},s1=.001;function yA({duration:e=ve.duration,bounce:t=ve.bounce,velocity:n=ve.velocity,mass:r=ve.mass}){let i,a,s=1-t;s=Fn(ve.minDamping,ve.maxDamping,s),e=Fn(ve.minDuration,ve.maxDuration,dn(e)),s<1?(i=c=>{const u=c*s,f=u*e,h=u-n,m=ym(c,s),v=Math.exp(-f);return s1-h/m*v},a=c=>{const f=c*s*e,h=f*n+n,m=Math.pow(s,2)*Math.pow(c,2)*e,v=Math.exp(-f),w=ym(Math.pow(c,2),s);return(-i(c)+s1>0?-1:1)*((h-m)*v)/w}):(i=c=>{const u=Math.exp(-c*e),f=(c-n)*e+1;return-.001+u*f},a=c=>{const u=Math.exp(-c*e),f=(n-c)*(e*e);return u*f});const o=5/e,l=bA(i,a,o);if(e=un(e),isNaN(l))return{stiffness:ve.stiffness,damping:ve.damping,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const vA=12;function bA(e,t,n){let r=n;for(let i=1;i<vA;i++)r=r-e(r)/t(r);return r}function ym(e,t){return e*Math.sqrt(1-t*t)}const xA=["duration","bounce"],wA=["stiffness","damping","mass"];function o1(e,t){return t.some(n=>e[n]!==void 0)}function SA(e){let t={velocity:ve.velocity,stiffness:ve.stiffness,damping:ve.damping,mass:ve.mass,isResolvedFromDuration:!1,...e};if(!o1(e,wA)&&o1(e,xA))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*Fn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ve.mass,stiffness:i,damping:a}}else{const n=yA(e);t={...t,...n,mass:ve.mass},t.isResolvedFromDuration=!0}return t}function fu(e=ve.visualDuration,t=ve.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],o={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:f,velocity:h,isResolvedFromDuration:m}=SA({...n,velocity:-dn(n.velocity||0)}),v=h||0,w=c/(2*Math.sqrt(l*u)),S=s-a,p=dn(Math.sqrt(l/u)),y=Math.abs(S)<5;r||(r=y?ve.restSpeed.granular:ve.restSpeed.default),i||(i=y?ve.restDelta.granular:ve.restDelta.default);let b;if(w<1){const T=ym(p,w);b=j=>{const E=Math.exp(-w*p*j);return s-E*((v+w*p*S)/T*Math.sin(T*j)+S*Math.cos(T*j))}}else if(w===1)b=T=>s-Math.exp(-p*T)*(S+(v+p*S)*T);else{const T=p*Math.sqrt(w*w-1);b=j=>{const E=Math.exp(-w*p*j),A=Math.min(T*j,300);return s-E*((v+w*p*S)*Math.sinh(A)+T*S*Math.cosh(A))/T}}const x={calculatedDuration:m&&f||null,next:T=>{const j=b(T);if(m)o.done=T>=f;else{let E=T===0?v:0;w<1&&(E=T===0?un(v):YS(b,T,j));const A=Math.abs(E)<=r,O=Math.abs(s-j)<=i;o.done=A&&O}return o.value=o.done?s:j,o},toString:()=>{const T=Math.min(Rg(x),du),j=IS(E=>x.next(T*E).value,T,30);return T+"ms "+j},toTransition:()=>{}};return x}fu.applyToOptions=e=>{const t=pA(e,100,fu);return e.ease=t.ease,e.duration=un(t.duration),e.type="keyframes",e};function vm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:o,max:l,restDelta:c=.5,restSpeed:u}){const f=e[0],h={done:!1,value:f},m=A=>o!==void 0&&A<o||l!==void 0&&A>l,v=A=>o===void 0?l:l===void 0||Math.abs(o-A)<Math.abs(l-A)?o:l;let w=n*t;const S=f+w,p=s===void 0?S:s(S);p!==S&&(w=p-f);const y=A=>-w*Math.exp(-A/r),b=A=>p+y(A),x=A=>{const O=y(A),k=b(A);h.done=Math.abs(O)<=c,h.value=h.done?p:k};let T,j;const E=A=>{m(h.value)&&(T=A,j=fu({keyframes:[h.value,v(h.value)],velocity:YS(b,A,h.value),damping:i,stiffness:a,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:A=>{let O=!1;return!j&&T===void 0&&(O=!0,x(A),E(A)),T!==void 0&&A>=T?j.next(A-T):(!O&&x(A),h)}}}function _A(e,t,n){const r=[],i=n||qn.mix||GS,a=e.length-1;for(let s=0;s<a;s++){let o=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Pt:t;o=Vo(l,o)}r.push(o)}return r}function TA(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const a=e.length;if(bg(a===t.length),a===1)return()=>t[0];if(a===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=_A(t,r,i),l=o.length,c=u=>{if(s&&u<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(u<e[f+1]);f++);const h=uo(e[f],e[f+1],u);return o[f](h)};return n?u=>c(Fn(e[0],e[a-1],u)):c}function EA(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=uo(0,t,r);e.push(he(n,1,i))}}function jA(e){const t=[0];return EA(t,e.length-1),t}function CA(e,t){return e.map(n=>n*t)}function AA(e,t){return e.map(()=>t||LS).splice(0,e.length-1)}function Ns({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=NC(r)?r.map(e1):e1(r),a={done:!1,value:t[0]},s=CA(n&&n.length===t.length?n:jA(t),e),o=TA(s,t,{ease:Array.isArray(i)?i:AA(t,i)});return{calculatedDuration:e,next:l=>(a.value=o(l),a.done=l>=e,a)}}const RA=e=>e!==null;function kg(e,{repeat:t,repeatType:n="loop"},r,i=1){const a=e.filter(RA),o=i<0||t&&n!=="loop"&&t%2===1?0:a.length-1;return!o||r===void 0?a[o]:r}const kA={decay:vm,inertia:vm,tween:Ns,keyframes:Ns,spring:fu};function KS(e){typeof e.type=="string"&&(e.type=kA[e.type])}class Og{constructor(){this.count=0,this.updateFinished()}get finished(){return this._finished}updateFinished(){this.count++,this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const OA=e=>e/100;class XS extends Og{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;if(n&&n.updatedAt!==at.now()&&this.tick(at.now()),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:r}=this.options;r&&r()},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;KS(t);const{type:n=Ns,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:s=0}=t;let{keyframes:o}=t;const l=n||Ns;l!==Ns&&typeof o[0]!="number"&&(this.mixKeyframes=Vo(OA,GS(o[0],o[1])),o=[0,100]);const c=l({...t,keyframes:o});a==="mirror"&&(this.mirroredGenerator=l({...t,keyframes:[...o].reverse(),velocity:-s})),c.calculatedDuration===null&&(c.calculatedDuration=Rg(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=c}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:s,resolvedDuration:o,calculatedDuration:l}=this;if(this.startTime===null)return r.next(0);const{delay:c=0,keyframes:u,repeat:f,repeatType:h,repeatDelay:m,type:v,onUpdate:w,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const p=this.currentTime-c*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?p<0:p>i;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let b=this.currentTime,x=r;if(f){const A=Math.min(this.currentTime,i)/o;let O=Math.floor(A),k=A%1;!k&&A>=1&&(k=1),k===1&&O--,O=Math.min(O,f+1),!!(O%2)&&(h==="reverse"?(k=1-k,m&&(k-=m/o)):h==="mirror"&&(x=s)),b=Fn(0,1,k)*o}const T=y?{done:!1,value:u[0]}:x.next(b);a&&(T.value=a(T.value));let{done:j}=T;!y&&l!==null&&(j=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return E&&v!==vm&&(T.value=kg(u,this.options,S,this.speed)),w&&w(T.value),E&&this.finish(),T}then(t,n){return this.finished.then(t,n)}get duration(){return dn(this.calculatedDuration)}get time(){return dn(this.currentTime)}set time(t){t=un(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(at.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=dn(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=mA,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.state==="finished"?(this.updateFinished(),this.startTime=i):this.startTime||(this.startTime=r??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(at.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),t.observe(this)}}function MA(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Zr=e=>e*180/Math.PI,bm=e=>{const t=Zr(Math.atan2(e[1],e[0]));return xm(t)},DA={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:bm,rotateZ:bm,skewX:e=>Zr(Math.atan(e[1])),skewY:e=>Zr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},xm=e=>(e=e%360,e<0&&(e+=360),e),l1=bm,c1=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),u1=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),zA={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:c1,scaleY:u1,scale:e=>(c1(e)+u1(e))/2,rotateX:e=>xm(Zr(Math.atan2(e[6],e[5]))),rotateY:e=>xm(Zr(Math.atan2(-e[2],e[0]))),rotateZ:l1,rotate:l1,skewX:e=>Zr(Math.atan(e[4])),skewY:e=>Zr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function d1(e){return e.includes("scale")?1:0}function wm(e,t){if(!e||e==="none")return d1(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=zA,i=n;else{const o=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=DA,i=o}if(!i)return d1(t);const a=r[t],s=i[1].split(",").map(PA);return typeof a=="function"?a(s):s[a]}const LA=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return wm(n,t)};function PA(e){return parseFloat(e.trim())}const qa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_i=new Set(qa),f1=e=>e===Fa||e===L,BA=new Set(["x","y","z"]),UA=qa.filter(e=>!BA.has(e));function NA(e){const t=[];return UA.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const ja={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>wm(t,"x"),y:(e,{transform:t})=>wm(t,"y")};ja.translateX=ja.x;ja.translateY=ja.y;const si=new Set;let Sm=!1,_m=!1,Tm=!1;function QS(){if(_m){const e=Array.from(si).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=NA(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,s])=>{var o;(o=r.getValue(a))==null||o.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}_m=!1,Sm=!1,si.forEach(e=>e.complete(Tm)),si.clear()}function ZS(){si.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(_m=!0)})}function $A(){Tm=!0,ZS(),QS(),Tm=!1}class Mg{constructor(t,n,r,i,a,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(si.add(this),Sm||(Sm=!0,se.read(ZS),se.resolveKeyframes(QS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const a=i==null?void 0:i.get(),s=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const o=r.readValue(n,s);o!=null&&(t[0]=o)}t[0]===void 0&&(t[0]=s),i&&a===void 0&&i.set(t[0])}MA(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),si.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,si.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const VA=e=>e.startsWith("--");function HA(e,t,n){VA(t)?e.style.setProperty(t,n):e.style[t]=n}const FA=xg(()=>window.ScrollTimeline!==void 0),qA={};function GA(e,t){const n=xg(e);return()=>qA[t]??n()}const JS=GA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ys=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,h1={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ys([0,.65,.55,1]),circOut:ys([.55,0,1,.45]),backIn:ys([.31,.01,.66,-.59]),backOut:ys([.33,1.53,.69,.99])};function WS(e,t){if(e)return typeof e=="function"?JS()?IS(e,t):"ease-out":PS(e)?ys(e):Array.isArray(e)?e.map(n=>WS(n,t)||h1.easeOut):h1[e]}function IA(e,t,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:s="loop",ease:o="easeOut",times:l}={},c=void 0){const u={[t]:n};l&&(u.offset=l);const f=WS(o,i);Array.isArray(f)&&(u.easing=f);const h={delay:r,duration:i,easing:Array.isArray(f)?"linear":f,fill:"both",iterations:a+1,direction:s==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),e.animate(u,h)}function e6(e){return typeof e=="function"&&"applyToOptions"in e}function YA({type:e,...t}){return e6(e)&&JS()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class KA extends Og{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:s=!1,finalKeyframe:o}=t;this.isPseudoElement=!!a,this.allowFlatten=s,this.options=t,bg(typeof t.type!="string");const l=YA(t);this.animation=IA(n,r,i,l,a),l.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const c=kg(i,this.options,o,this.speed);this.updateMotionValue?this.updateMotionValue(c):HA(n,r,c),this.animation.cancel()}this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return dn(Number(t))}get time(){return dn(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=un(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&FA()?(this.animation.timeline=t,Pt):n(this)}}const t6={anticipate:MS,backInOut:OS,circInOut:zS};function XA(e){return e in t6}function QA(e){typeof e.ease=="string"&&XA(e.ease)&&(e.ease=t6[e.ease])}const m1=10;class ZA extends KA{constructor(t){QA(t),KS(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const o=new XS({...s,autoplay:!1}),l=un(this.finishedTime??this.time);n.setWithVelocity(o.sample(l-m1).value,o.sample(l).value,m1),o.stop()}}const p1=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(kr.test(e)||e==="0")&&!e.startsWith("url("));function JA(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function WA(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const a=e[e.length-1],s=p1(i,t),o=p1(a,t);return!s||!o?!1:JA(e)||(n==="spring"||e6(n))&&r}const e8=new Set(["opacity","clipPath","filter","transform"]),t8=xg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function n8(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:s}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:o,transformTemplate:l}=t.owner.getProps();return t8()&&n&&e8.has(n)&&(n!=="transform"||!l)&&!o&&!r&&i!=="mirror"&&a!==0&&s!=="inertia"}const r8=40;class i8 extends Og{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:s="loop",keyframes:o,name:l,motionValue:c,element:u,...f}){var v;super(),this.stop=()=>{var w,S;this._animation?(this._animation.stop(),(w=this.stopTimeline)==null||w.call(this)):(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=at.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:s,name:l,motionValue:c,element:u,...f},m=(u==null?void 0:u.KeyframeResolver)||Mg;this.keyframeResolver=new m(o,(w,S,p)=>this.onKeyframesResolved(w,S,h,!p),l,c,u),(v=this.keyframeResolver)==null||v.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:a,type:s,velocity:o,delay:l,isHandoff:c,onUpdate:u,onComplete:f}=r;this.resolvedAt=at.now(),WA(t,a,s,o)||((qn.instantAnimations||!l)&&(u==null||u(kg(t,r,n))),t[0]=t[t.length-1],r.duration=0,r.repeat=0);const m={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>r8?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},v=!c&&n8(m)?new ZA({...m,element:m.motionValue.owner.current}):new XS(m);v.finished.then(()=>{f==null||f(),this.notifyFinished()}).catch(Pt),this.pendingTimeline&&(this.stopTimeline=v.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=v}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){return this._animation||$A(),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this.animation.cancel()}}const a8=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function s8(e){const t=a8.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function n6(e,t,n=1){const[r,i]=s8(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const s=a.trim();return TS(s)?parseFloat(s):s}return Eg(i)?n6(i,t,n+1):i}function Dg(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const r6=new Set(["width","height","top","left","right","bottom",...qa]),o8={test:e=>e==="auto",parse:e=>e},i6=e=>t=>t.test(e),a6=[Fa,L,fn,tr,JC,ZC,o8],g1=e=>a6.find(i6(e));function l8(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ES(e):!0}const c8=new Set(["brightness","contrast","saturate","opacity"]);function u8(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(jg)||[];if(!r)return e;const i=n.replace(r,"");let a=c8.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const d8=/\b([a-z-]*)\(.*?\)/gu,Em={...kr,getAnimatableNone:e=>{const t=e.match(d8);return t?t.map(u8).join(" "):e}},y1={...Fa,transform:Math.round},f8={rotate:tr,rotateX:tr,rotateY:tr,rotateZ:tr,scale:bl,scaleX:bl,scaleY:bl,scaleZ:bl,skew:tr,skewX:tr,skewY:tr,distance:L,translateX:L,translateY:L,translateZ:L,x:L,y:L,z:L,perspective:L,transformPerspective:L,opacity:fo,originX:n1,originY:n1,originZ:L},zg={borderWidth:L,borderTopWidth:L,borderRightWidth:L,borderBottomWidth:L,borderLeftWidth:L,borderRadius:L,radius:L,borderTopLeftRadius:L,borderTopRightRadius:L,borderBottomRightRadius:L,borderBottomLeftRadius:L,width:L,maxWidth:L,height:L,maxHeight:L,top:L,right:L,bottom:L,left:L,padding:L,paddingTop:L,paddingRight:L,paddingBottom:L,paddingLeft:L,margin:L,marginTop:L,marginRight:L,marginBottom:L,marginLeft:L,backgroundPositionX:L,backgroundPositionY:L,...f8,zIndex:y1,size:L,fillOpacity:fo,strokeOpacity:fo,numOctaves:y1},h8={...zg,color:Fe,backgroundColor:Fe,outlineColor:Fe,fill:Fe,stroke:Fe,borderColor:Fe,borderTopColor:Fe,borderRightColor:Fe,borderBottomColor:Fe,borderLeftColor:Fe,filter:Em,WebkitFilter:Em},s6=e=>h8[e];function o6(e,t){let n=s6(e);return n!==Em&&(n=kr),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const m8=new Set(["auto","none","0"]);function p8(e,t,n){let r=0,i;for(;r<e.length&&!i;){const a=e[r];typeof a=="string"&&!m8.has(a)&&ho(a).values.length&&(i=e[r]),r++}if(i&&n)for(const a of t)e[a]=o6(n,i)}class g8 extends Mg{constructor(t,n,r,i,a){super(t,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),Eg(c))){const u=n6(c,n.current);u!==void 0&&(t[l]=u),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!r6.has(r)||t.length!==2)return;const[i,a]=t,s=g1(i),o=g1(a);if(s!==o)if(f1(s)&&f1(o))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||l8(t[i]))&&r.push(i);r.length&&p8(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ja[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var o;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,s=r[a];r[a]=ja[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([l,c])=>{t.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const{schedule:Lg}=BS(queueMicrotask,!1),qt={x:!1,y:!1};function l6(){return qt.x||qt.y}function y8(e){return e==="x"||e==="y"?qt[e]?null:(qt[e]=!0,()=>{qt[e]=!1}):qt.x||qt.y?null:(qt.x=qt.y=!0,()=>{qt.x=qt.y=!1})}function v8(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}function c6(e,t){const n=v8(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function v1(e){return!(e.pointerType==="touch"||l6())}function b8(e,t,n={}){const[r,i,a]=c6(e,n),s=o=>{if(!v1(o))return;const{target:l}=o,c=t(l,o);if(typeof c!="function"||!l)return;const u=f=>{v1(f)&&(c(f),l.removeEventListener("pointerleave",u))};l.addEventListener("pointerleave",u,i)};return r.forEach(o=>{o.addEventListener("pointerenter",s,i)}),a}const u6=(e,t)=>t?e===t?!0:u6(e,t.parentElement):!1,Pg=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,x8=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function w8(e){return x8.has(e.tagName)||e.tabIndex!==-1}const vs=new WeakSet;function b1(e){return t=>{t.key==="Enter"&&e(t)}}function pf(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const S8=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=b1(()=>{if(vs.has(n))return;pf(n,"down");const i=b1(()=>{pf(n,"up")}),a=()=>pf(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",a,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function x1(e){return Pg(e)&&!l6()}function _8(e,t,n={}){const[r,i,a]=c6(e,n),s=o=>{const l=o.currentTarget;if(!x1(o)||vs.has(l))return;vs.add(l);const c=t(l,o),u=(m,v)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!x1(m)||!vs.has(l))&&(vs.delete(l),typeof c=="function"&&c(m,{success:v}))},f=m=>{u(m,l===window||l===document||n.useGlobalTarget||u6(l,m.target))},h=m=>{u(m,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(o=>{(n.useGlobalTarget?window:o).addEventListener("pointerdown",s,i),o instanceof HTMLElement&&(o.addEventListener("focus",c=>S8(c,i)),!w8(o)&&!o.hasAttribute("tabindex")&&(o.tabIndex=0))}),a}const w1=30,T8=e=>!isNaN(parseFloat(e));class E8{constructor(t,n={}){this.version="12.7.5",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const a=at.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=at.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=T8(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new wg);const r=this.events[t].add(n);return t==="change"?()=>{r(),se.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){t==="none"&&console.trace(),!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=at.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>w1)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,w1);return jS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function mo(e,t){return new E8(e,t)}const j8=[...a6,Fe,kr],C8=e=>j8.find(i6(e)),d6=(e,t)=>t&&typeof e=="number"?t.transform(e):e,f6=_.createContext({strict:!1}),S1={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ca={};for(const e in S1)Ca[e]={isEnabled:t=>S1[e].some(n=>!!t[n])};function A8(e){for(const t in e)Ca[t]={...Ca[t],...e[t]}}const R8=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function hu(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||R8.has(e)}let h6=e=>!hu(e);function k8(e){e&&(h6=t=>t.startsWith("on")?!hu(t):e(t))}try{k8(require("@emotion/is-prop-valid").default)}catch{}function O8(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(h6(i)||n===!0&&hu(i)||!t&&!hu(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function M8(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const Zu=_.createContext({});function Ju(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function po(e){return typeof e=="string"||Array.isArray(e)}const Bg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Ug=["initial",...Bg];function Wu(e){return Ju(e.animate)||Ug.some(t=>po(e[t]))}function m6(e){return!!(Wu(e)||e.variants)}function D8(e,t){if(Wu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||po(n)?n:void 0,animate:po(r)?r:void 0}}return e.inherit!==!1?t:{}}function z8(e){const{initial:t,animate:n}=D8(e,_.useContext(Zu));return _.useMemo(()=>({initial:t,animate:n}),[_1(t),_1(n)])}function _1(e){return Array.isArray(e)?e.join(" "):e}const L8=Symbol.for("motionComponentSymbol");function Ji(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function P8(e,t,n){return _.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ji(n)&&(n.current=r))},[t])}const Ng=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),B8="framerAppearId",p6="data-"+Ng(B8),g6=_.createContext({});function U8(e,t,n,r,i){var w,S;const{visualElement:a}=_.useContext(Zu),s=_.useContext(f6),o=_.useContext(Qu),l=_.useContext(gg).reducedMotion,c=_.useRef(null);r=r||s.renderer,!c.current&&r&&(c.current=r(e,{visualState:t,parent:a,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const u=c.current,f=_.useContext(g6);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&N8(c.current,n,i,f);const h=_.useRef(!1);_.useInsertionEffect(()=>{u&&h.current&&u.update(n,o)});const m=n[p6],v=_.useRef(!!m&&!((w=window.MotionHandoffIsComplete)!=null&&w.call(window,m))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,m)));return SS(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),Lg.render(u.render),v.current&&u.animationState&&u.animationState.animateChanges())}),_.useEffect(()=>{u&&(!v.current&&u.animationState&&u.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)==null||p.call(window,m)}),v.current=!1))}),u}function N8(e,t,n,r){const{layoutId:i,layout:a,drag:s,dragConstraints:o,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:y6(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!s||o&&Ji(o),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}function y6(e){if(e)return e.options.allowProjection!==!1?e.projection:y6(e.parent)}function $8({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&A8(e);function a(o,l){let c;const u={..._.useContext(gg),...o,layoutId:V8(o)},{isStatic:f}=u,h=z8(o),m=r(o,f);if(!f&&pg){H8();const v=F8(u);c=v.MeasureLayout,h.visualElement=U8(i,m,u,t,v.ProjectionNode)}return d.jsxs(Zu.Provider,{value:h,children:[c&&h.visualElement?d.jsx(c,{visualElement:h.visualElement,...u}):null,n(i,o,P8(m,h.visualElement,l),m,f,h.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${i.displayName??i.name??""})`}`;const s=_.forwardRef(a);return s[L8]=i,s}function V8({layoutId:e}){const t=_.useContext(hg).id;return t&&e!==void 0?t+"-"+e:e}function H8(e,t){_.useContext(f6).strict}function F8(e){const{drag:t,layout:n}=Ca;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const go={};function q8(e){for(const t in e)go[t]=e[t],Tg(t)&&(go[t].isCSSVariable=!0)}function v6(e,{layout:t,layoutId:n}){return _i.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!go[e]||e==="opacity")}const Ke=e=>!!(e&&e.getVelocity),G8={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},I8=qa.length;function Y8(e,t,n){let r="",i=!0;for(let a=0;a<I8;a++){const s=qa[a],o=e[s];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(s.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const c=d6(o,zg[s]);if(!l){i=!1;const u=G8[s]||s;r+=`${u}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function $g(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let s=!1,o=!1;for(const l in t){const c=t[l];if(_i.has(l)){s=!0;continue}else if(Tg(l)){i[l]=c;continue}else{const u=d6(c,zg[l]);l.startsWith("origin")?(o=!0,a[l]=u):r[l]=u}}if(t.transform||(s||n?r.transform=Y8(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:c="50%",originZ:u=0}=a;r.transformOrigin=`${l} ${c} ${u}`}}const Vg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function b6(e,t,n){for(const r in t)!Ke(t[r])&&!v6(r,n)&&(e[r]=t[r])}function K8({transformTemplate:e},t){return _.useMemo(()=>{const n=Vg();return $g(n,t,e),Object.assign({},n.vars,n.style)},[t])}function X8(e,t){const n=e.style||{},r={};return b6(r,n,e),Object.assign(r,K8(e,t)),r}function Q8(e,t){const n={},r=X8(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Z8=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Hg(e){return typeof e!="string"||e.includes("-")?!1:!!(Z8.indexOf(e)>-1||/[A-Z]/u.test(e))}const J8={offset:"stroke-dashoffset",array:"stroke-dasharray"},W8={offset:"strokeDashoffset",array:"strokeDasharray"};function e7(e,t,n=1,r=0,i=!0){e.pathLength=1;const a=i?J8:W8;e[a.offset]=L.transform(-r);const s=L.transform(t),o=L.transform(n);e[a.array]=`${s} ${o}`}function T1(e,t,n){return typeof e=="string"?e:L.transform(t+n*e)}function t7(e,t,n){const r=T1(t,e.x,e.width),i=T1(n,e.y,e.height);return`${r} ${i}`}function Fg(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:a,pathLength:s,pathSpacing:o=1,pathOffset:l=0,...c},u,f){if($g(e,c,f),u){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:m,dimensions:v}=e;h.transform&&(v&&(m.transform=h.transform),delete h.transform),v&&(i!==void 0||a!==void 0||m.transform)&&(m.transformOrigin=t7(v,i!==void 0?i:.5,a!==void 0?a:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),s!==void 0&&e7(h,s,o,l,!1)}const x6=()=>({...Vg(),attrs:{}}),qg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function n7(e,t,n,r){const i=_.useMemo(()=>{const a=x6();return Fg(a,t,qg(r),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};b6(a,e.style,e),i.style={...a,...i.style}}return i}function r7(e=!1){return(n,r,i,{latestValues:a},s)=>{const l=(Hg(n)?n7:Q8)(r,a,s,n),c=O8(r,typeof n=="string",e),u=n!==_.Fragment?{...c,...l,ref:i}:{},{children:f}=r,h=_.useMemo(()=>Ke(f)?f.get():f,[f]);return _.createElement(n,{...u,children:h})}}function E1(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function Gg(e,t,n,r){if(typeof t=="function"){const[i,a]=E1(r);t=t(n!==void 0?n:e.custom,i,a)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,a]=E1(r);t=t(n!==void 0?n:e.custom,i,a)}return t}const jm=e=>Array.isArray(e),i7=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),a7=e=>jm(e)?e[e.length-1]||0:e;function gc(e){const t=Ke(e)?e.get():e;return i7(t)?t.toValue():t}function s7({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,a){const s={latestValues:o7(r,i,a,e),renderState:t()};return n&&(s.onMount=o=>n({props:r,current:o,...s}),s.onUpdate=o=>n(o)),s}const w6=e=>(t,n)=>{const r=_.useContext(Zu),i=_.useContext(Qu),a=()=>s7(e,t,r,i);return n?a():mg(a)};function o7(e,t,n,r){const i={},a=r(e,{});for(const h in a)i[h]=gc(a[h]);let{initial:s,animate:o}=e;const l=Wu(e),c=m6(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),o===void 0&&(o=t.animate));let u=n?n.initial===!1:!1;u=u||s===!1;const f=u?o:s;if(f&&typeof f!="boolean"&&!Ju(f)){const h=Array.isArray(f)?f:[f];for(let m=0;m<h.length;m++){const v=Gg(e,h[m]);if(v){const{transitionEnd:w,transition:S,...p}=v;for(const y in p){let b=p[y];if(Array.isArray(b)){const x=u?b.length-1:0;b=b[x]}b!==null&&(i[y]=b)}for(const y in w)i[y]=w[y]}}}return i}function Ig(e,t,n){var a;const{style:r}=e,i={};for(const s in r)(Ke(r[s])||t.style&&Ke(t.style[s])||v6(s,e)||((a=n==null?void 0:n.getValue(s))==null?void 0:a.liveStyle)!==void 0)&&(i[s]=r[s]);return i}const l7={useVisualState:w6({scrapeMotionValuesFromProps:Ig,createRenderState:Vg})};function S6(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}function _6(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const T6=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function E6(e,t,n,r){_6(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(T6.has(i)?i:Ng(i),t.attrs[i])}function j6(e,t,n){const r=Ig(e,t,n);for(const i in e)if(Ke(e[i])||Ke(t[i])){const a=qa.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=e[i]}return r}const j1=["x","y","width","height","cx","cy","r"],c7={useVisualState:w6({scrapeMotionValuesFromProps:j6,createRenderState:x6,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let a=!!e.drag;if(!a){for(const o in i)if(_i.has(o)){a=!0;break}}if(!a)return;let s=!t;if(t)for(let o=0;o<j1.length;o++){const l=j1[o];e[l]!==t[l]&&(s=!0)}s&&se.read(()=>{S6(n,r),se.render(()=>{Fg(r,i,qg(n.tagName),e.transformTemplate),E6(n,r)})})}})};function u7(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Hg(r)?c7:l7,preloadedFeatures:e,useRender:r7(i),createVisualElement:t,Component:r};return $8(s)}}function yo(e,t,n){const r=e.getProps();return Gg(r,t,n!==void 0?n:r.custom,e)}function d7(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,mo(n))}function f7(e,t){const n=yo(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const s in a){const o=a7(a[s]);d7(e,s,o)}}function h7(e){return!!(Ke(e)&&e.add)}function Cm(e,t){const n=e.getValue("willChange");if(h7(n))return n.add(t);if(!n&&qn.WillChange){const r=new qn.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function C6(e){return e.props[p6]}const m7=e=>e!==null;function p7(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(m7),a=t&&n!=="loop"&&t%2===1?0:i.length-1;return i[a]}const g7={type:"spring",stiffness:500,damping:25,restSpeed:10},y7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),v7={type:"keyframes",duration:.8},b7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},x7=(e,{keyframes:t})=>t.length>2?v7:_i.has(e)?e.startsWith("scale")?y7(t[1]):g7:b7;function w7({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:o,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Yg=(e,t,n,r={},i,a)=>s=>{const o=Dg(r,e)||{},l=o.delay||r.delay||0;let{elapsed:c=0}=r;c=c-un(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-c,onUpdate:h=>{t.set(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{s(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:a?void 0:i};w7(o)||Object.assign(u,x7(e,u)),u.duration&&(u.duration=un(u.duration)),u.repeatDelay&&(u.repeatDelay=un(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),(qn.instantAnimations||qn.skipAnimations)&&(f=!0,u.duration=0,u.delay=0),u.allowFlatten=!o.type&&!o.ease,f&&!a&&t.get()!==void 0){const h=p7(u.keyframes,o);if(h!==void 0){se.update(()=>{u.onUpdate(h),u.onComplete()});return}}return new i8(u)};function S7({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function A6(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:s,...o}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in o){const f=e.getValue(u,e.latestValues[u]??null),h=o[u];if(h===void 0||c&&S7(c,u))continue;const m={delay:n,...Dg(a||{},u)};let v=!1;if(window.MotionHandoffAnimation){const S=C6(e);if(S){const p=window.MotionHandoffAnimation(S,u,se);p!==null&&(m.startTime=p,v=!0)}}Cm(e,u),f.start(Yg(u,f,h,e.shouldReduceMotion&&r6.has(u)?{type:!1}:m,e,v));const w=f.animation;w&&l.push(w)}return s&&Promise.all(l).then(()=>{se.update(()=>{s&&f7(e,s)})}),l}function Am(e,t,n={}){var l;const r=yo(e,t,n.type==="exit"?(l=e.presenceContext)==null?void 0:l.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(A6(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:h}=i;return _7(e,t,u+c,f,h,n)}:()=>Promise.resolve(),{when:o}=i;if(o){const[c,u]=o==="beforeChildren"?[a,s]:[s,a];return c().then(()=>u())}else return Promise.all([a(),s(n.delay)])}function _7(e,t,n=0,r=0,i=1,a){const s=[],o=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>o-c*r;return Array.from(e.variantChildren).sort(T7).forEach((c,u)=>{c.notify("AnimationStart",t),s.push(Am(c,t,{...a,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function T7(e,t){return e.sortNodePosition(t)}function E7(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(a=>Am(e,a,n));r=Promise.all(i)}else if(typeof t=="string")r=Am(e,t,n);else{const i=typeof t=="function"?yo(e,t,n.custom):t;r=Promise.all(A6(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}function R6(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const j7=Ug.length;function k6(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?k6(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<j7;n++){const r=Ug[n],i=e.props[r];(po(i)||i===!1)&&(t[r]=i)}return t}const C7=[...Bg].reverse(),A7=Bg.length;function R7(e){return t=>Promise.all(t.map(({animation:n,options:r})=>E7(e,n,r)))}function k7(e){let t=R7(e),n=C1(),r=!0;const i=l=>(c,u)=>{var h;const f=yo(e,u,l==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(f){const{transition:m,transitionEnd:v,...w}=f;c={...c,...w,...v}}return c};function a(l){t=l(e)}function s(l){const{props:c}=e,u=k6(e.parent)||{},f=[],h=new Set;let m={},v=1/0;for(let S=0;S<A7;S++){const p=C7[S],y=n[p],b=c[p]!==void 0?c[p]:u[p],x=po(b),T=p===l?y.isActive:null;T===!1&&(v=S);let j=b===u[p]&&b!==c[p]&&x;if(j&&r&&e.manuallyAnimateOnMount&&(j=!1),y.protectedKeys={...m},!y.isActive&&T===null||!b&&!y.prevProp||Ju(b)||typeof b=="boolean")continue;const E=O7(y.prevProp,b);let A=E||p===l&&y.isActive&&!j&&x||S>v&&x,O=!1;const k=Array.isArray(b)?b:[b];let B=k.reduce(i(p),{});T===!1&&(B={});const{prevResolvedValues:xe={}}=y,bn={...xe,...B},Ht=D=>{A=!0,h.has(D)&&(O=!0,h.delete(D)),y.needsAnimating[D]=!0;const z=e.getValue(D);z&&(z.liveStyle=!1)};for(const D in bn){const z=B[D],I=xe[D];if(m.hasOwnProperty(D))continue;let te=!1;jm(z)&&jm(I)?te=!R6(z,I):te=z!==I,te?z!=null?Ht(D):h.add(D):z!==void 0&&h.has(D)?Ht(D):y.protectedKeys[D]=!0}y.prevProp=b,y.prevResolvedValues=B,y.isActive&&(m={...m,...B}),r&&e.blockInitialAnimation&&(A=!1),A&&(!(j&&E)||O)&&f.push(...k.map(D=>({animation:D,options:{type:p}})))}if(h.size){const S={};if(typeof c.initial!="boolean"){const p=yo(e,Array.isArray(c.initial)?c.initial[0]:c.initial);p&&p.transition&&(S.transition=p.transition)}h.forEach(p=>{const y=e.getBaseTarget(p),b=e.getValue(p);b&&(b.liveStyle=!0),S[p]=y??null}),f.push({animation:S})}let w=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(f):Promise.resolve()}function o(l,c){var f;if(n[l].isActive===c)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(h=>{var m;return(m=h.animationState)==null?void 0:m.setActive(l,c)}),n[l].isActive=c;const u=s(l);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:s,setActive:o,setAnimateFunction:a,getState:()=>n,reset:()=>{n=C1(),r=!0}}}function O7(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!R6(t,e):!1}function Ur(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function C1(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}class Dr{constructor(t){this.isMounted=!1,this.node=t}update(){}}class M7 extends Dr{constructor(t){super(t),t.animationState||(t.animationState=k7(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ju(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let D7=0;class z7 extends Dr{constructor(){super(...arguments),this.id=D7++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const L7={animation:{Feature:M7},exit:{Feature:z7}};function vo(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function qo(e){return{point:{x:e.pageX,y:e.pageY}}}const P7=e=>t=>Pg(t)&&e(t,qo(t));function $s(e,t,n,r){return vo(e,t,P7(n),r)}function O6({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function B7({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function U7(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}const M6=1e-4,N7=1-M6,$7=1+M6,D6=.01,V7=0-D6,H7=0+D6;function Ze(e){return e.max-e.min}function F7(e,t,n){return Math.abs(e-t)<=n}function A1(e,t,n,r=.5){e.origin=r,e.originPoint=he(t.min,t.max,e.origin),e.scale=Ze(n)/Ze(t),e.translate=he(n.min,n.max,e.origin)-e.originPoint,(e.scale>=N7&&e.scale<=$7||isNaN(e.scale))&&(e.scale=1),(e.translate>=V7&&e.translate<=H7||isNaN(e.translate))&&(e.translate=0)}function Vs(e,t,n,r){A1(e.x,t.x,n.x,r?r.originX:void 0),A1(e.y,t.y,n.y,r?r.originY:void 0)}function R1(e,t,n){e.min=n.min+t.min,e.max=e.min+Ze(t)}function q7(e,t,n){R1(e.x,t.x,n.x),R1(e.y,t.y,n.y)}function k1(e,t,n){e.min=t.min-n.min,e.max=e.min+Ze(t)}function Hs(e,t,n){k1(e.x,t.x,n.x),k1(e.y,t.y,n.y)}const O1=()=>({translate:0,scale:1,origin:0,originPoint:0}),Wi=()=>({x:O1(),y:O1()}),M1=()=>({min:0,max:0}),we=()=>({x:M1(),y:M1()});function Ct(e){return[e("x"),e("y")]}function gf(e){return e===void 0||e===1}function Rm({scale:e,scaleX:t,scaleY:n}){return!gf(e)||!gf(t)||!gf(n)}function Hr(e){return Rm(e)||z6(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function z6(e){return D1(e.x)||D1(e.y)}function D1(e){return e&&e!=="0%"}function mu(e,t,n){const r=e-n,i=t*r;return n+i}function z1(e,t,n,r,i){return i!==void 0&&(e=mu(e,i,r)),mu(e,n,r)+t}function km(e,t=0,n=1,r,i){e.min=z1(e.min,t,n,r,i),e.max=z1(e.max,t,n,r,i)}function L6(e,{x:t,y:n}){km(e.x,t.translate,t.scale,t.originPoint),km(e.y,n.translate,n.scale,n.originPoint)}const L1=.999999999999,P1=1.0000000000001;function G7(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let a,s;for(let o=0;o<i;o++){a=n[o],s=a.projectionDelta;const{visualElement:l}=a.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&ta(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,L6(e,s)),r&&Hr(a.latestValues)&&ta(e,a.latestValues))}t.x<P1&&t.x>L1&&(t.x=1),t.y<P1&&t.y>L1&&(t.y=1)}function ea(e,t){e.min=e.min+t,e.max=e.max+t}function B1(e,t,n,r,i=.5){const a=he(e.min,e.max,i);km(e,t,n,a,r)}function ta(e,t){B1(e.x,t.x,t.scaleX,t.scale,t.originX),B1(e.y,t.y,t.scaleY,t.scale,t.originY)}function P6(e,t){return O6(U7(e.getBoundingClientRect(),t))}function I7(e,t,n){const r=P6(e,n),{scroll:i}=t;return i&&(ea(r.x,i.offset.x),ea(r.y,i.offset.y)),r}const B6=({current:e})=>e?e.ownerDocument.defaultView:null,U1=(e,t)=>Math.abs(e-t);function Y7(e,t){const n=U1(e.x,t.x),r=U1(e.y,t.y);return Math.sqrt(n**2+r**2)}class U6{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=vf(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,m=Y7(f.offset,{x:0,y:0})>=3;if(!h&&!m)return;const{point:v}=f,{timestamp:w}=Ue;this.history.push({...v,timestamp:w});const{onStart:S,onMove:p}=this.handlers;h||(S&&S(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=yf(h,this.transformPagePoint),se.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:m,onSessionEnd:v,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=vf(f.type==="pointercancel"?this.lastMoveEventInfo:yf(h,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,S),v&&v(f,S)},!Pg(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=qo(t),o=yf(s,this.transformPagePoint),{point:l}=o,{timestamp:c}=Ue;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(t,vf(o,this.history)),this.removeListeners=Vo($s(this.contextWindow,"pointermove",this.handlePointerMove),$s(this.contextWindow,"pointerup",this.handlePointerUp),$s(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Rr(this.updatePoint)}}function yf(e,t){return t?{point:t(e.point)}:e}function N1(e,t){return{x:e.x-t.x,y:e.y-t.y}}function vf({point:e},t){return{point:e,delta:N1(e,N6(t)),offset:N1(e,K7(t)),velocity:X7(t,.1)}}function K7(e){return e[0]}function N6(e){return e[e.length-1]}function X7(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=N6(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>un(t)));)n--;if(!r)return{x:0,y:0};const a=dn(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const s={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Q7(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?he(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?he(n,e,r.max):Math.min(e,n)),e}function $1(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Z7(e,{top:t,left:n,bottom:r,right:i}){return{x:$1(e.x,n,i),y:$1(e.y,t,r)}}function V1(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function J7(e,t){return{x:V1(e.x,t.x),y:V1(e.y,t.y)}}function W7(e,t){let n=.5;const r=Ze(e),i=Ze(t);return i>r?n=uo(t.min,t.max-r,e.min):r>i&&(n=uo(e.min,e.max-i,t.min)),Fn(0,1,n)}function eR(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Om=.35;function tR(e=Om){return e===!1?e=0:e===!0&&(e=Om),{x:H1(e,"left","right"),y:H1(e,"top","bottom")}}function H1(e,t,n){return{min:F1(e,t),max:F1(e,n)}}function F1(e,t){return typeof e=="number"?e:e[t]||0}const nR=new WeakMap;class rR{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=we(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(qo(u).point)},a=(u,f)=>{const{drag:h,dragPropagation:m,onDragStart:v}=this.getProps();if(h&&!m&&(this.openDragLock&&this.openDragLock(),this.openDragLock=y8(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ct(S=>{let p=this.getAxisMotionValue(S).get()||0;if(fn.test(p)){const{projection:y}=this.visualElement;if(y&&y.layout){const b=y.layout.layoutBox[S];b&&(p=Ze(b)*(parseFloat(p)/100))}}this.originPoint[S]=p}),v&&se.postRender(()=>v(u,f)),Cm(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(u,f)=>{const{dragPropagation:h,dragDirectionLock:m,onDirectionLock:v,onDrag:w}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:S}=f;if(m&&this.currentDirection===null){this.currentDirection=iR(S),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,S),this.updateAxis("y",f.point,S),this.visualElement.render(),w&&w(u,f)},o=(u,f)=>this.stop(u,f),l=()=>Ct(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)==null?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new U6(t,{onSessionStart:i,onStart:a,onMove:s,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:B6(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:a}=this.getProps();a&&se.postRender(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!xl(t,i,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Q7(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){var a;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;t&&Ji(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=Z7(r.layoutBox,t):this.constraints=!1,this.elastic=tR(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Ct(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=eR(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ji(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=I7(r,i.root,this.visualElement.getTransformPagePoint());let s=J7(i.layout.layoutBox,a);if(n){const o=n(B7(s));this.hasMutatedConstraints=!!o,o&&(s=O6(o))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},c=Ct(u=>{if(!xl(u,n,this.currentDirection))return;let f=l&&l[u]||{};s&&(f={min:0,max:0});const h=i?200:1e6,m=i?40:1e7,v={type:"inertia",velocity:r?t[u]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(u,v)});return Promise.all(c).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Cm(this.visualElement,t),r.start(Yg(t,r,0,n,this.visualElement,!1))}stopAnimation(){Ct(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Ct(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Ct(n=>{const{drag:r}=this.getProps();if(!xl(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:o}=i.layout.layoutBox[n];a.set(t[n]-he(s,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ji(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Ct(s=>{const o=this.getAxisMotionValue(s);if(o&&this.constraints!==!1){const l=o.get();i[s]=W7({min:l,max:l},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Ct(s=>{if(!xl(s,t,null))return;const o=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];o.set(he(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;nR.set(this.visualElement,this);const t=this.visualElement.current,n=$s(t,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ji(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,a=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),se.read(r);const s=vo(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Ct(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{s(),n(),a(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:s=Om,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:s,dragMomentum:o}}}function xl(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function iR(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class aR extends Dr{constructor(t){super(t),this.removeGroupControls=Pt,this.removeListeners=Pt,this.controls=new rR(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Pt}unmount(){this.removeGroupControls(),this.removeListeners()}}const q1=e=>(t,n)=>{e&&se.postRender(()=>e(t,n))};class sR extends Dr{constructor(){super(...arguments),this.removePointerDownListener=Pt}onPointerDown(t){this.session=new U6(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:B6(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:q1(t),onStart:q1(n),onMove:r,onEnd:(a,s)=>{delete this.session,i&&se.postRender(()=>i(a,s))}}}mount(){this.removePointerDownListener=$s(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const yc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function G1(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const os={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(L.test(e))e=parseFloat(e);else return e;const n=G1(e,t.target.x),r=G1(e,t.target.y);return`${n}% ${r}%`}},oR={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=kr.parse(e);if(i.length>5)return r;const a=kr.createTransformer(e),s=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=o,i[1+s]/=l;const c=he(o,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),a(i)}};class lR extends _.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=t;q8(cR),a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),yc.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,s=r.projection;return s&&(s.isPresent=a,i||t.layoutDependency!==n||n===void 0||t.isPresent!==a?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||se.postRender(()=>{const o=s.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Lg.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function $6(e){const[t,n]=_S(),r=_.useContext(hg);return d.jsx(lR,{...e,layoutGroup:r,switchLayoutGroup:_.useContext(g6),isPresent:t,safeToRemove:n})}const cR={borderRadius:{...os,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:os,borderTopRightRadius:os,borderBottomLeftRadius:os,borderBottomRightRadius:os,boxShadow:oR};function uR(e,t,n){const r=Ke(e)?e:mo(e);return r.start(Yg("",r,t,n)),r.animation}function dR(e){return e instanceof SVGElement&&e.tagName!=="svg"}const fR=(e,t)=>e.depth-t.depth;class hR{constructor(){this.children=[],this.isDirty=!1}add(t){yg(this.children,t),this.isDirty=!0}remove(t){vg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(fR),this.isDirty=!1,this.children.forEach(t)}}function mR(e,t){const n=at.now(),r=({timestamp:i})=>{const a=i-n;a>=t&&(Rr(r),e(a-t))};return se.setup(r,!0),()=>Rr(r)}const V6=["TopLeft","TopRight","BottomLeft","BottomRight"],pR=V6.length,I1=e=>typeof e=="string"?parseFloat(e):e,Y1=e=>typeof e=="number"||L.test(e);function gR(e,t,n,r,i,a){i?(e.opacity=he(0,n.opacity??1,yR(r)),e.opacityExit=he(t.opacity??1,0,vR(r))):a&&(e.opacity=he(t.opacity??1,n.opacity??1,r));for(let s=0;s<pR;s++){const o=`border${V6[s]}Radius`;let l=K1(t,o),c=K1(n,o);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Y1(l)===Y1(c)?(e[o]=Math.max(he(I1(l),I1(c),r),0),(fn.test(c)||fn.test(l))&&(e[o]+="%")):e[o]=c}(t.rotate||n.rotate)&&(e.rotate=he(t.rotate||0,n.rotate||0,r))}function K1(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const yR=H6(0,.5,DS),vR=H6(.5,.95,Pt);function H6(e,t,n){return r=>r<e?0:r>t?1:n(uo(e,t,r))}function X1(e,t){e.min=t.min,e.max=t.max}function Et(e,t){X1(e.x,t.x),X1(e.y,t.y)}function Q1(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function Z1(e,t,n,r,i){return e-=t,e=mu(e,1/n,r),i!==void 0&&(e=mu(e,1/i,r)),e}function bR(e,t=0,n=1,r=.5,i,a=e,s=e){if(fn.test(t)&&(t=parseFloat(t),t=he(s.min,s.max,t/100)-s.min),typeof t!="number")return;let o=he(a.min,a.max,r);e===a&&(o-=t),e.min=Z1(e.min,t,n,o,i),e.max=Z1(e.max,t,n,o,i)}function J1(e,t,[n,r,i],a,s){bR(e,t[n],t[r],t[i],t.scale,a,s)}const xR=["x","scaleX","originX"],wR=["y","scaleY","originY"];function W1(e,t,n,r){J1(e.x,t,xR,n?n.x:void 0,r?r.x:void 0),J1(e.y,t,wR,n?n.y:void 0,r?r.y:void 0)}function ev(e){return e.translate===0&&e.scale===1}function F6(e){return ev(e.x)&&ev(e.y)}function tv(e,t){return e.min===t.min&&e.max===t.max}function SR(e,t){return tv(e.x,t.x)&&tv(e.y,t.y)}function nv(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function q6(e,t){return nv(e.x,t.x)&&nv(e.y,t.y)}function rv(e){return Ze(e.x)/Ze(e.y)}function iv(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class _R{constructor(){this.members=[]}add(t){yg(this.members,t),t.scheduleRender()}remove(t){if(vg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const a=this.members[i];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function TR(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||a||s)&&(r=`translate3d(${i}px, ${a}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:h,skewX:m,skewY:v}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),m&&(r+=`skewX(${m}deg) `),v&&(r+=`skewY(${v}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const bf=["","X","Y","Z"],ER={visibility:"hidden"},av=1e3;let jR=0;function xf(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function G6(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=C6(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",se,!(i||a))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&G6(r)}function I6({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},o=t==null?void 0:t()){this.id=jR++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(RR),this.nodes.forEach(zR),this.nodes.forEach(LR),this.nodes.forEach(kR)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new hR)}addEventListener(s,o){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new wg),this.eventHandlers.get(s).add(o)}notifyListeners(s,...o){const l=this.eventHandlers.get(s);l&&l.notify(...o)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=dR(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(c||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=mR(h,250),yc.hasAnimatedSinceResize&&(yc.hasAnimatedSinceResize=!1,this.nodes.forEach(ov))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:m,layout:v})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||u.getDefaultTransition()||$R,{onLayoutAnimationStart:S,onLayoutAnimationComplete:p}=u.getProps(),y=!this.targetLayout||!q6(this.targetLayout,v),b=!h&&m;if(this.options.layoutRoot||this.resumeFrom||b||h&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,b);const x={...Dg(w,"layout"),onPlay:S,onComplete:p};(u.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else h||ov(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=v})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Rr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(PR),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G6(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(sv);return}this.isUpdating||this.nodes.forEach(MR),this.isUpdating=!1,this.nodes.forEach(DR),this.nodes.forEach(CR),this.nodes.forEach(AR),this.clearAllSnapshots();const o=at.now();Ue.delta=Fn(0,1e3/60,o-Ue.timestamp),Ue.timestamp=o,Ue.isProcessing=!0,df.update.process(Ue),df.preRender.process(Ue),df.render.process(Ue),Ue.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Lg.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(OR),this.sharedNodes.forEach(BR)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,se.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){se.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ze(this.snapshot.measuredBox.x)&&!Ze(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=we(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!F6(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;s&&(o||Hr(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return s&&(l=this.removeTransform(l)),VR(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:s}=this.options;if(!s)return we();const o=s.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(HR))){const{scroll:u}=this.root;u&&(ea(o.x,u.offset.x),ea(o.y,u.offset.y))}return o}removeElementScroll(s){var l;const o=we();if(Et(o,s),(l=this.scroll)!=null&&l.wasRoot)return o;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:h}=u;u!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Et(o,s),ea(o.x,f.offset.x),ea(o.y,f.offset.y))}return o}applyTransform(s,o=!1){const l=we();Et(l,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];!o&&u.options.layoutScroll&&u.scroll&&u!==u.root&&ta(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Hr(u.latestValues)&&ta(l,u.latestValues)}return Hr(this.latestValues)&&ta(l,this.latestValues),l}removeTransform(s){const o=we();Et(o,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Hr(c.latestValues))continue;Rm(c.latestValues)&&c.updateSnapshot();const u=we(),f=c.measurePageBox();Et(u,f),W1(o,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Hr(this.latestValues)&&W1(o,this.latestValues),o}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ue.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var h;const o=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=o.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=o.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=o.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==o;if(!(s||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:f}=this.options;if(!(!this.layout||!(u||f))){if(this.resolvedRelativeTargetAt=Ue.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Hs(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=we(),this.targetWithTransforms=we()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),q7(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Et(this.target,this.layout.layoutBox),L6(this.target,this.targetDelta)):Et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=we(),this.relativeTargetOrigin=we(),Hs(this.relativeTargetOrigin,this.target,m.target),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Rm(this.parent.latestValues)||z6(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var v;const s=this.getLead(),o=!!this.resumingFrom||this!==s;let l=!0;if((this.isProjectionDirty||(v=this.parent)!=null&&v.isProjectionDirty)&&(l=!1),o&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Ue.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Et(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,h=this.treeScale.y;G7(this.layoutCorrected,this.treeScale,this.path,o),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=we());const{target:m}=s;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Q1(this.prevProjectionDelta.x,this.projectionDelta.x),Q1(this.prevProjectionDelta.y,this.projectionDelta.y)),Vs(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==h||!iv(this.projectionDelta.x,this.prevProjectionDelta.x)||!iv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var o;if((o=this.options.visualElement)==null||o.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Wi(),this.projectionDelta=Wi(),this.projectionDeltaWithTransform=Wi()}setAnimationOrigin(s,o=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=Wi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const h=we(),m=l?l.source:void 0,v=this.layout?this.layout.source:void 0,w=m!==v,S=this.getStack(),p=!S||S.members.length<=1,y=!!(w&&!p&&this.options.crossfade===!0&&!this.path.some(NR));this.animationProgress=0;let b;this.mixTargetDelta=x=>{const T=x/1e3;lv(f.x,s.x,T),lv(f.y,s.y,T),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Hs(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),UR(this.relativeTarget,this.relativeTargetOrigin,h,T),b&&SR(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=we()),Et(b,this.relativeTarget)),w&&(this.animationValues=u,gR(u,c,this.latestValues,T,y,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Rr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=se.update(()=>{yc.hasAnimatedSinceResize=!0,this.currentAnimation=uR(0,av,{...s,onUpdate:o=>{this.mixTargetDelta(o),s.onUpdate&&s.onUpdate(o)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(av),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:o,target:l,layout:c,latestValues:u}=s;if(!(!o||!l||!c)){if(this!==s&&this.layout&&c&&Y6(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||we();const f=Ze(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+f;const h=Ze(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}Et(o,l),ta(o,u),Vs(this.projectionDeltaWithTransform,this.layoutCorrected,o,u)}}registerSharedNode(s,o){this.sharedNodes.has(s)||this.sharedNodes.set(s,new _R),this.sharedNodes.get(s).add(o);const c=o.options.initialPromotionConfig;o.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(o):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var o;const{layoutId:s}=this.options;return s?((o=this.getStack())==null?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:s}=this.options;return s?(o=this.getStack())==null?void 0:o.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:o,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let o=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const c={};l.z&&xf("z",s,c,this.animationValues);for(let u=0;u<bf.length;u++)xf(`rotate${bf[u]}`,s,c,this.animationValues),xf(`skew${bf[u]}`,s,c,this.animationValues);s.render();for(const u in c)s.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);s.scheduleRender()}getProjectionStyles(s){if(!this.instance||this.isSVG)return;if(!this.isVisible)return ER;const o={visibility:""},l=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,o.opacity="",o.pointerEvents=gc(s==null?void 0:s.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none",o;const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=gc(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Hr(this.latestValues)&&(m.transform=l?l({},""):"none",this.hasProjected=!1),m}const u=c.animationValues||c.latestValues;this.applyTransformsToTarget(),o.transform=TR(this.projectionDeltaWithTransform,this.treeScale,u),l&&(o.transform=l(u,o.transform));const{x:f,y:h}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${h.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in go){if(u[m]===void 0)continue;const{correct:v,applyTo:w,isCSSVariable:S}=go[m],p=o.transform==="none"?u[m]:v(u[m],c);if(w){const y=w.length;for(let b=0;b<y;b++)o[w[b]]=p}else S?this.options.visualElement.renderState.vars[m]=p:o[m]=p}return this.options.layoutId&&(o.pointerEvents=c===this?gc(s==null?void 0:s.pointerEvents)||"":"none"),o}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var o;return(o=s.currentAnimation)==null?void 0:o.stop()}),this.root.nodes.forEach(sv),this.root.sharedNodes.clear()}}}function CR(e){e.updateLayout()}function AR(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:a}=e.options,s=t.source!==e.layout.source;a==="size"?Ct(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],m=Ze(h);h.min=r[f].min,h.max=h.min+m}):Y6(a,t.layoutBox,r)&&Ct(f=>{const h=s?t.measuredBox[f]:t.layoutBox[f],m=Ze(r[f]);h.max=h.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const o=Wi();Vs(o,r,t.layoutBox);const l=Wi();s?Vs(l,e.applyTransform(i,!0),t.measuredBox):Vs(l,r,t.layoutBox);const c=!F6(o);let u=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:m}=f;if(h&&m){const v=we();Hs(v,t.layoutBox,h.layoutBox);const w=we();Hs(w,r,m.layoutBox),q6(v,w)||(u=!0),f.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=v,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:l,layoutDelta:o,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function RR(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function kR(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function OR(e){e.clearSnapshot()}function sv(e){e.clearMeasurements()}function MR(e){e.isLayoutDirty=!1}function DR(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ov(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function zR(e){e.resolveTargetDelta()}function LR(e){e.calcProjection()}function PR(e){e.resetSkewAndRotation()}function BR(e){e.removeLeadSnapshot()}function lv(e,t,n){e.translate=he(t.translate,0,n),e.scale=he(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function cv(e,t,n,r){e.min=he(t.min,n.min,r),e.max=he(t.max,n.max,r)}function UR(e,t,n,r){cv(e.x,t.x,n.x,r),cv(e.y,t.y,n.y,r)}function NR(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const $R={duration:.45,ease:[.4,0,.1,1]},uv=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),dv=uv("applewebkit/")&&!uv("chrome/")?Math.round:Pt;function fv(e){e.min=dv(e.min),e.max=dv(e.max)}function VR(e){fv(e.x),fv(e.y)}function Y6(e,t,n){return e==="position"||e==="preserve-aspect"&&!F7(rv(t),rv(n),.2)}function HR(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const FR=I6({attachResizeListener:(e,t)=>vo(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),wf={current:void 0},K6=I6({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wf.current){const e=new FR({});e.mount(window),e.setOptions({layoutScroll:!0}),wf.current=e}return wf.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),qR={pan:{Feature:sR},drag:{Feature:aR,ProjectionNode:K6,MeasureLayout:$6}};function hv(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&se.postRender(()=>a(t,qo(t)))}class GR extends Dr{mount(){const{current:t}=this.node;t&&(this.unmount=b8(t,(n,r)=>(hv(this.node,r,"Start"),i=>hv(this.node,i,"End"))))}unmount(){}}class IR extends Dr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Vo(vo(this.node.current,"focus",()=>this.onFocus()),vo(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function mv(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&se.postRender(()=>a(t,qo(t)))}class YR extends Dr{mount(){const{current:t}=this.node;t&&(this.unmount=_8(t,(n,r)=>(mv(this.node,r,"Start"),(i,{success:a})=>mv(this.node,i,a?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mm=new WeakMap,Sf=new WeakMap,KR=e=>{const t=Mm.get(e.target);t&&t(e)},XR=e=>{e.forEach(KR)};function QR({root:e,...t}){const n=e||document;Sf.has(n)||Sf.set(n,{});const r=Sf.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(XR,{root:e,...t})),r[i]}function ZR(e,t,n){const r=QR(t);return Mm.set(e,n),r.observe(e),()=>{Mm.delete(e),r.unobserve(e)}}const JR={some:0,all:1};class WR extends Dr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:JR[i]},o=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,a&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),h=c?u:f;h&&h(l)};return ZR(this.node.current,s,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(ek(t,n))&&this.startObserver()}unmount(){}}function ek({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const tk={inView:{Feature:WR},tap:{Feature:YR},focus:{Feature:IR},hover:{Feature:GR}},nk={layout:{ProjectionNode:K6,MeasureLayout:$6}},Dm={current:null},X6={current:!1};function rk(){if(X6.current=!0,!!pg)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Dm.current=e.matches;e.addListener(t),t()}else Dm.current=!1}const ik=new WeakMap;function ak(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ke(i))e.addValue(r,i);else if(Ke(a))e.addValue(r,mo(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,mo(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const pv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=at.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,se.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=s;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!a,this.isControllingVariants=Wu(n),this.isVariantNode=m6(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in h){const v=h[m];l[m]!==void 0&&Ke(v)&&v.set(l[m],!1)}}mount(t){this.current=t,ik.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),X6.current||rk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Rr(this.notifyUpdate),Rr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=_i.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&se.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),a(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ca){const n=Ca[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const a=this.features[t];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):we()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<pv.length;r++){const i=pv[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,s=t[a];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=ak(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=mo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(TS(r)||ES(r))?r=parseFloat(r):!C8(r)&&kr.test(n)&&(r=o6(t,n)),this.setBaseTarget(t,Ke(r)?r.get():r)),Ke(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=Gg(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!Ke(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new wg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Q6 extends sk{constructor(){super(...arguments),this.KeyframeResolver=g8}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ke(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function ok(e){return window.getComputedStyle(e)}class lk extends Q6{constructor(){super(...arguments),this.type="html",this.renderInstance=_6}readValueFromInstance(t,n){if(_i.has(n))return LA(t,n);{const r=ok(t),i=(Tg(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return P6(t,n)}build(t,n,r){$g(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Ig(t,n,r)}}class ck extends Q6{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=we,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&S6(this.current,this.renderState)}}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(_i.has(n)){const r=s6(n);return r&&r.default||0}return n=T6.has(n)?n:Ng(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return j6(t,n,r)}onBindTransform(){this.current&&!this.renderState.dimensions&&se.postRender(this.updateDimensions)}build(t,n,r){Fg(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){E6(t,n,r,i)}mount(t){this.isSVGTag=qg(t.tagName),super.mount(t)}}const uk=(e,t)=>Hg(e)?new ck(t):new lk(t,{allowProjection:e!==_.Fragment}),dk=u7({...L7,...tk,...qR,...nk},uk),Z=M8(dk);var Z6={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},gv=Ve.createContext&&Ve.createContext(Z6),fk=["attr","size","title"];function hk(e,t){if(e==null)return{};var n=mk(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function mk(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function pu(){return pu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pu.apply(this,arguments)}function yv(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function gu(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yv(Object(n),!0).forEach(function(r){pk(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yv(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pk(e,t,n){return t=gk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gk(e){var t=yk(e,"string");return typeof t=="symbol"?t:t+""}function yk(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function J6(e){return e&&e.map((t,n)=>Ve.createElement(t.tag,gu({key:n},t.attr),J6(t.child)))}function P(e){return t=>Ve.createElement(vk,pu({attr:gu({},e.attr)},t),J6(e.child))}function vk(e){var t=n=>{var{attr:r,size:i,title:a}=e,s=hk(e,fk),o=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ve.createElement("svg",pu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:gu(gu({color:e.color||n.color},n.style),e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),a&&Ve.createElement("title",null,a),e.children)};return gv!==void 0?Ve.createElement(gv.Consumer,null,n=>t(n)):t(Z6)}function W6(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function bk(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function e4(e){return P({attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"},child:[]}]})(e)}function xk(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function wk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function t4(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function Sk(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function Ga(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function _k(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm316 140c0-6.6-5.4-12-12-12h-60v-60c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v60h-60c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h60v60c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-60h60c6.6 0 12-5.4 12-12v-40z"},child:[]}]})(e)}function Tk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},child:[]}]})(e)}function Kg(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}function Ek(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},child:[]}]})(e)}function n4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"},child:[]}]})(e)}function ed(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"},child:[]}]})(e)}function Kn(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function jk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z"},child:[]}]})(e)}function r4(e){return P({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function Ck(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Ak(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"},child:[]}]})(e)}function zm(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function Rk(e){return P({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function i4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"},child:[]}]})(e)}function kk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function Ok(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function a4(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function Mk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 192V77.25c0-8.49-3.37-16.62-9.37-22.63L393.37 9.37c-6-6-14.14-9.37-22.63-9.37H96C78.33 0 64 14.33 64 32v160c-35.35 0-64 28.65-64 64v112c0 8.84 7.16 16 16 16h48v96c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32v-96h48c8.84 0 16-7.16 16-16V256c0-35.35-28.65-64-64-64zm-64 256H128v-96h256v96zm0-224H128V64h192v48c0 8.84 7.16 16 16 16h48v96zm48 72c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"},child:[]}]})(e)}function Dk(e){return P({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zM152 416c-26.5 0-48-21-48-47 0-20 28.5-60.4 41.6-77.8 3.2-4.3 9.6-4.3 12.8 0C171.5 308.6 200 349 200 369c0 26-21.5 47-48 47zm16-176c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm170.2 154.2C315.8 367.4 282.9 352 248 352c-21.2 0-21.2-32 0-32 44.4 0 86.3 19.6 114.7 53.8 13.8 16.4-11.2 36.5-24.5 20.4z"},child:[]}]})(e)}function Aa(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function zk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"},child:[]}]})(e)}function s4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"},child:[]}]})(e)}function Lk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function o4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"},child:[]}]})(e)}function l4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"},child:[]}]})(e)}function Pk(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"},child:[]}]})(e)}function Ra(e){return P({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Bk(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function Uk(e){return P({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function bo(e){return P({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Nk(e){return P({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function zr(e){return P({attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function c4(e){return P({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(e)}function Be(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var $k=typeof Symbol=="function"&&Symbol.observable||"@@observable",vv=$k,_f=()=>Math.random().toString(36).substring(7).split("").join("."),Vk={INIT:`@@redux/INIT${_f()}`,REPLACE:`@@redux/REPLACE${_f()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${_f()}`},yu=Vk;function Xg(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function u4(e,t,n){if(typeof e!="function")throw new Error(Be(2));if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Be(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Be(1));return n(u4)(e,t)}let r=e,i=t,a=new Map,s=a,o=0,l=!1;function c(){s===a&&(s=new Map,a.forEach((S,p)=>{s.set(p,S)}))}function u(){if(l)throw new Error(Be(3));return i}function f(S){if(typeof S!="function")throw new Error(Be(4));if(l)throw new Error(Be(5));let p=!0;c();const y=o++;return s.set(y,S),function(){if(p){if(l)throw new Error(Be(6));p=!1,c(),s.delete(y),a=null}}}function h(S){if(!Xg(S))throw new Error(Be(7));if(typeof S.type>"u")throw new Error(Be(8));if(typeof S.type!="string")throw new Error(Be(17));if(l)throw new Error(Be(9));try{l=!0,i=r(i,S)}finally{l=!1}return(a=s).forEach(y=>{y()}),S}function m(S){if(typeof S!="function")throw new Error(Be(10));r=S,h({type:yu.REPLACE})}function v(){const S=f;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(Be(11));function y(){const x=p;x.next&&x.next(u())}return y(),{unsubscribe:S(y)}},[vv](){return this}}}return h({type:yu.INIT}),{dispatch:h,subscribe:f,getState:u,replaceReducer:m,[vv]:v}}function Hk(e){Object.keys(e).forEach(t=>{const n=e[t];if(typeof n(void 0,{type:yu.INIT})>"u")throw new Error(Be(12));if(typeof n(void 0,{type:yu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Be(13))})}function Fk(e){const t=Object.keys(e),n={};for(let a=0;a<t.length;a++){const s=t[a];typeof e[s]=="function"&&(n[s]=e[s])}const r=Object.keys(n);let i;try{Hk(n)}catch(a){i=a}return function(s={},o){if(i)throw i;let l=!1;const c={};for(let u=0;u<r.length;u++){const f=r[u],h=n[f],m=s[f],v=h(m,o);if(typeof v>"u")throw o&&o.type,new Error(Be(14));c[f]=v,l=l||v!==m}return l=l||r.length!==Object.keys(s).length,l?c:s}}function vu(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,n)=>(...r)=>t(n(...r)))}function qk(...e){return t=>(n,r)=>{const i=t(n,r);let a=()=>{throw new Error(Be(15))};const s={getState:i.getState,dispatch:(l,...c)=>a(l,...c)},o=e.map(l=>l(s));return a=vu(...o)(i.dispatch),{...i,dispatch:a}}}function Gk(e){return Xg(e)&&"type"in e&&typeof e.type=="string"}var d4=Symbol.for("immer-nothing"),bv=Symbol.for("immer-draftable"),wt=Symbol.for("immer-state");function Kt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var ka=Object.getPrototypeOf;function hi(e){return!!e&&!!e[wt]}function Gn(e){var t;return e?f4(e)||Array.isArray(e)||!!e[bv]||!!((t=e.constructor)!=null&&t[bv])||nd(e)||rd(e):!1}var Ik=Object.prototype.constructor.toString();function f4(e){if(!e||typeof e!="object")return!1;const t=ka(e);if(t===null)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===Ik}function bu(e,t){td(e)===0?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function td(e){const t=e[wt];return t?t.type_:Array.isArray(e)?1:nd(e)?2:rd(e)?3:0}function Lm(e,t){return td(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function h4(e,t,n){const r=td(e);r===2?e.set(t,n):r===3?e.add(n):e[t]=n}function Yk(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function nd(e){return e instanceof Map}function rd(e){return e instanceof Set}function Fr(e){return e.copy_||e.base_}function Pm(e,t){if(nd(e))return new Map(e);if(rd(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=f4(e);if(t===!0||t==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(e);delete r[wt];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const s=i[a],o=r[s];o.writable===!1&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[s]={configurable:!0,writable:!0,enumerable:o.enumerable,value:e[s]})}return Object.create(ka(e),r)}else{const r=ka(e);if(r!==null&&n)return{...e};const i=Object.create(r);return Object.assign(i,e)}}function Qg(e,t=!1){return id(e)||hi(e)||!Gn(e)||(td(e)>1&&(e.set=e.add=e.clear=e.delete=Kk),Object.freeze(e),t&&Object.entries(e).forEach(([n,r])=>Qg(r,!0))),e}function Kk(){Kt(2)}function id(e){return Object.isFrozen(e)}var Xk={};function mi(e){const t=Xk[e];return t||Kt(0,e),t}var xo;function m4(){return xo}function Qk(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function xv(e,t){t&&(mi("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Bm(e){Um(e),e.drafts_.forEach(Zk),e.drafts_=null}function Um(e){e===xo&&(xo=e.parent_)}function wv(e){return xo=Qk(xo,e)}function Zk(e){const t=e[wt];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Sv(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return e!==void 0&&e!==n?(n[wt].modified_&&(Bm(t),Kt(4)),Gn(e)&&(e=xu(t,e),t.parent_||wu(t,e)),t.patches_&&mi("Patches").generateReplacementPatches_(n[wt].base_,e,t.patches_,t.inversePatches_)):e=xu(t,n,[]),Bm(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==d4?e:void 0}function xu(e,t,n){if(id(t))return t;const r=t[wt];if(!r)return bu(t,(i,a)=>_v(e,r,t,i,a,n)),t;if(r.scope_!==e)return t;if(!r.modified_)return wu(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,s=!1;r.type_===3&&(a=new Set(i),i.clear(),s=!0),bu(a,(o,l)=>_v(e,r,i,o,l,n,s)),wu(e,i,!1),n&&e.patches_&&mi("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function _v(e,t,n,r,i,a,s){if(hi(i)){const o=a&&t&&t.type_!==3&&!Lm(t.assigned_,r)?a.concat(r):void 0,l=xu(e,i,o);if(h4(n,r,l),hi(l))e.canAutoFreeze_=!1;else return}else s&&n.add(i);if(Gn(i)&&!id(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;xu(e,i),(!t||!t.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&wu(e,i)}}function wu(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Qg(t,n)}function Jk(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:m4(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Zg;n&&(i=[r],a=wo);const{revoke:s,proxy:o}=Proxy.revocable(i,a);return r.draft_=o,r.revoke_=s,o}var Zg={get(e,t){if(t===wt)return e;const n=Fr(e);if(!Lm(n,t))return Wk(e,n,t);const r=n[t];return e.finalized_||!Gn(r)?r:r===Tf(e.base_,t)?(Ef(e),e.copy_[t]=$m(r,e)):r},has(e,t){return t in Fr(e)},ownKeys(e){return Reflect.ownKeys(Fr(e))},set(e,t,n){const r=p4(Fr(e),t);if(r!=null&&r.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const i=Tf(Fr(e),t),a=i==null?void 0:i[wt];if(a&&a.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(Yk(n,i)&&(n!==void 0||Lm(e.base_,t)))return!0;Ef(e),Nm(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty(e,t){return Tf(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,Ef(e),Nm(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const n=Fr(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty(){Kt(11)},getPrototypeOf(e){return ka(e.base_)},setPrototypeOf(){Kt(12)}},wo={};bu(Zg,(e,t)=>{wo[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});wo.deleteProperty=function(e,t){return wo.set.call(this,e,t,void 0)};wo.set=function(e,t,n){return Zg.set.call(this,e[0],t,n,e[0])};function Tf(e,t){const n=e[wt];return(n?Fr(n):e)[t]}function Wk(e,t,n){var i;const r=p4(t,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(e.draft_):void 0}function p4(e,t){if(!(t in e))return;let n=ka(e);for(;n;){const r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=ka(n)}}function Nm(e){e.modified_||(e.modified_=!0,e.parent_&&Nm(e.parent_))}function Ef(e){e.copy_||(e.copy_=Pm(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var eO=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,n,r)=>{if(typeof t=="function"&&typeof n!="function"){const a=n;n=t;const s=this;return function(l=a,...c){return s.produce(l,u=>n.call(this,u,...c))}}typeof n!="function"&&Kt(6),r!==void 0&&typeof r!="function"&&Kt(7);let i;if(Gn(t)){const a=wv(this),s=$m(t,void 0);let o=!0;try{i=n(s),o=!1}finally{o?Bm(a):Um(a)}return xv(a,r),Sv(i,a)}else if(!t||typeof t!="object"){if(i=n(t),i===void 0&&(i=t),i===d4&&(i=void 0),this.autoFreeze_&&Qg(i,!0),r){const a=[],s=[];mi("Patches").generateReplacementPatches_(t,i,a,s),r(a,s)}return i}else Kt(1,t)},this.produceWithPatches=(t,n)=>{if(typeof t=="function")return(s,...o)=>this.produceWithPatches(s,l=>t(l,...o));let r,i;return[this.produce(t,n,(s,o)=>{r=s,i=o}),r,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Gn(e)||Kt(8),hi(e)&&(e=tO(e));const t=wv(this),n=$m(e,void 0);return n[wt].isManual_=!0,Um(t),n}finishDraft(e,t){const n=e&&e[wt];(!n||!n.isManual_)&&Kt(9);const{scope_:r}=n;return xv(r,t),Sv(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const i=t[n];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}n>-1&&(t=t.slice(n+1));const r=mi("Patches").applyPatches_;return hi(e)?r(e,t):this.produce(e,i=>r(i,t))}};function $m(e,t){const n=nd(e)?mi("MapSet").proxyMap_(e,t):rd(e)?mi("MapSet").proxySet_(e,t):Jk(e,t);return(t?t.scope_:m4()).drafts_.push(n),n}function tO(e){return hi(e)||Kt(10,e),g4(e)}function g4(e){if(!Gn(e)||id(e))return e;const t=e[wt];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Pm(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Pm(e,!0);return bu(n,(r,i)=>{h4(n,r,g4(i))}),t&&(t.finalized_=!1),n}var St=new eO,y4=St.produce;St.produceWithPatches.bind(St);St.setAutoFreeze.bind(St);St.setUseStrictShallowCopy.bind(St);St.applyPatches.bind(St);St.createDraft.bind(St);St.finishDraft.bind(St);function v4(e){return({dispatch:n,getState:r})=>i=>a=>typeof a=="function"?a(n,r,e):i(a)}var nO=v4(),rO=v4,iO=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?vu:vu.apply(null,arguments)},aO=e=>e&&typeof e.match=="function";function Fs(e,t){function n(...r){if(t){let i=t(...r);if(!i)throw new Error(Bn(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:r[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=r=>Gk(r)&&r.type===e,n}var b4=class bs extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,bs.prototype)}static get[Symbol.species](){return bs}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new bs(...t[0].concat(this)):new bs(...t.concat(this))}};function Tv(e){return Gn(e)?y4(e,()=>{}):e}function wl(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function sO(e){return typeof e=="boolean"}var oO=()=>function(t){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=t??{};let s=new b4;return n&&(sO(n)?s.push(nO):s.push(rO(n.extraArgument))),s},lO="RTK_autoBatch",Ev=e=>t=>{setTimeout(t,e)},cO=(e={type:"raf"})=>t=>(...n)=>{const r=t(...n);let i=!0,a=!1,s=!1;const o=new Set,l=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ev(10):e.type==="callback"?e.queueNotification:Ev(e.timeout),c=()=>{s=!1,a&&(a=!1,o.forEach(u=>u()))};return Object.assign({},r,{subscribe(u){const f=()=>i&&u(),h=r.subscribe(f);return o.add(u),()=>{h(),o.delete(u)}},dispatch(u){var f;try{return i=!((f=u==null?void 0:u.meta)!=null&&f[lO]),a=!i,a&&(s||(s=!0,l(c))),r.dispatch(u)}finally{i=!0}}})},uO=e=>function(n){const{autoBatch:r=!0}=n??{};let i=new b4(e);return r&&i.push(cO(typeof r=="object"?r:void 0)),i};function dO(e){const t=oO(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:a=void 0,enhancers:s=void 0}=e||{};let o;if(typeof n=="function")o=n;else if(Xg(n))o=Fk(n);else throw new Error(Bn(1));let l;typeof r=="function"?l=r(t):l=t();let c=vu;i&&(c=iO({trace:!1,...typeof i=="object"&&i}));const u=qk(...l),f=uO(u);let h=typeof s=="function"?s(f):f();const m=c(...h);return u4(o,a,m)}function x4(e){const t={},n=[];let r;const i={addCase(a,s){const o=typeof a=="string"?a:a.type;if(!o)throw new Error(Bn(28));if(o in t)throw new Error(Bn(29));return t[o]=s,i},addMatcher(a,s){return n.push({matcher:a,reducer:s}),i},addDefaultCase(a){return r=a,i}};return e(i),[t,n,r]}function fO(e){return typeof e=="function"}function hO(e,t){let[n,r,i]=x4(t),a;if(fO(e))a=()=>Tv(e());else{const o=Tv(e);a=()=>o}function s(o=a(),l){let c=[n[l.type],...r.filter(({matcher:u})=>u(l)).map(({reducer:u})=>u)];return c.filter(u=>!!u).length===0&&(c=[i]),c.reduce((u,f)=>{if(f)if(hi(u)){const m=f(u,l);return m===void 0?u:m}else{if(Gn(u))return y4(u,h=>f(h,l));{const h=f(u,l);if(h===void 0){if(u===null)return u;throw Error("A case reducer on a non-draftable value must not return undefined")}return h}}return u},o)}return s.getInitialState=a,s}var mO=(e,t)=>aO(e)?e.match(t):e(t);function pO(...e){return t=>e.some(n=>mO(n,t))}var gO="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",yO=(e=21)=>{let t="",n=e;for(;n--;)t+=gO[Math.random()*64|0];return t},vO=["name","message","stack","code"],jf=class{constructor(e,t){xd(this,"_type");this.payload=e,this.meta=t}},jv=class{constructor(e,t){xd(this,"_type");this.payload=e,this.meta=t}},bO=e=>{if(typeof e=="object"&&e!==null){const t={};for(const n of vO)typeof e[n]=="string"&&(t[n]=e[n]);return t}return{message:String(e)}},Cv="External signal was aborted",Vt=(()=>{function e(t,n,r){const i=Fs(t+"/fulfilled",(l,c,u,f)=>({payload:l,meta:{...f||{},arg:u,requestId:c,requestStatus:"fulfilled"}})),a=Fs(t+"/pending",(l,c,u)=>({payload:void 0,meta:{...u||{},arg:c,requestId:l,requestStatus:"pending"}})),s=Fs(t+"/rejected",(l,c,u,f,h)=>({payload:f,error:(r&&r.serializeError||bO)(l||"Rejected"),meta:{...h||{},arg:u,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(l==null?void 0:l.name)==="AbortError",condition:(l==null?void 0:l.name)==="ConditionError"}}));function o(l,{signal:c}={}){return(u,f,h)=>{const m=r!=null&&r.idGenerator?r.idGenerator(l):yO(),v=new AbortController;let w,S;function p(b){S=b,v.abort()}c&&(c.aborted?p(Cv):c.addEventListener("abort",()=>p(Cv),{once:!0}));const y=async function(){var T,j;let b;try{let E=(T=r==null?void 0:r.condition)==null?void 0:T.call(r,l,{getState:f,extra:h});if(wO(E)&&(E=await E),E===!1||v.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const A=new Promise((O,k)=>{w=()=>{k({name:"AbortError",message:S||"Aborted"})},v.signal.addEventListener("abort",w)});u(a(m,l,(j=r==null?void 0:r.getPendingMeta)==null?void 0:j.call(r,{requestId:m,arg:l},{getState:f,extra:h}))),b=await Promise.race([A,Promise.resolve(n(l,{dispatch:u,getState:f,extra:h,requestId:m,signal:v.signal,abort:p,rejectWithValue:(O,k)=>new jf(O,k),fulfillWithValue:(O,k)=>new jv(O,k)})).then(O=>{if(O instanceof jf)throw O;return O instanceof jv?i(O.payload,m,l,O.meta):i(O,m,l)})])}catch(E){b=E instanceof jf?s(null,m,l,E.payload,E.meta):s(E,m,l)}finally{w&&v.signal.removeEventListener("abort",w)}return r&&!r.dispatchConditionRejection&&s.match(b)&&b.meta.condition||u(b),b}();return Object.assign(y,{abort:p,requestId:m,arg:l,unwrap(){return y.then(xO)}})}}return Object.assign(o,{pending:a,rejected:s,fulfilled:i,settled:pO(s,i),typePrefix:t})}return e.withTypes=()=>e,e})();function xO(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function wO(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var SO=Symbol.for("rtk-slice-createasyncthunk");function _O(e,t){return`${e}/${t}`}function TO({creators:e}={}){var n;const t=(n=e==null?void 0:e.asyncThunk)==null?void 0:n[SO];return function(i){const{name:a,reducerPath:s=a}=i;if(!a)throw new Error(Bn(11));const o=(typeof i.reducers=="function"?i.reducers(jO()):i.reducers)||{},l=Object.keys(o),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(x,T){const j=typeof x=="string"?x:x.type;if(!j)throw new Error(Bn(12));if(j in c.sliceCaseReducersByType)throw new Error(Bn(13));return c.sliceCaseReducersByType[j]=T,u},addMatcher(x,T){return c.sliceMatchers.push({matcher:x,reducer:T}),u},exposeAction(x,T){return c.actionCreators[x]=T,u},exposeCaseReducer(x,T){return c.sliceCaseReducersByName[x]=T,u}};l.forEach(x=>{const T=o[x],j={reducerName:x,type:_O(a,x),createNotation:typeof i.reducers=="function"};AO(T)?kO(j,T,u,t):CO(j,T,u)});function f(){const[x={},T=[],j=void 0]=typeof i.extraReducers=="function"?x4(i.extraReducers):[i.extraReducers],E={...x,...c.sliceCaseReducersByType};return hO(i.initialState,A=>{for(let O in E)A.addCase(O,E[O]);for(let O of c.sliceMatchers)A.addMatcher(O.matcher,O.reducer);for(let O of T)A.addMatcher(O.matcher,O.reducer);j&&A.addDefaultCase(j)})}const h=x=>x,m=new Map,v=new WeakMap;let w;function S(x,T){return w||(w=f()),w(x,T)}function p(){return w||(w=f()),w.getInitialState()}function y(x,T=!1){function j(A){let O=A[x];return typeof O>"u"&&T&&(O=wl(v,j,p)),O}function E(A=h){const O=wl(m,T,()=>new WeakMap);return wl(O,A,()=>{const k={};for(const[B,xe]of Object.entries(i.selectors??{}))k[B]=EO(xe,A,()=>wl(v,A,p),T);return k})}return{reducerPath:x,getSelectors:E,get selectors(){return E(j)},selectSlice:j}}const b={name:a,reducer:S,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:p,...y(s),injectInto(x,{reducerPath:T,...j}={}){const E=T??s;return x.inject({reducerPath:E,reducer:S},j),{...b,...y(E,!0)}}};return b}}function EO(e,t,n,r){function i(a,...s){let o=t(a);return typeof o>"u"&&r&&(o=n()),e(o,...s)}return i.unwrapped=e,i}var Jg=TO();function jO(){function e(t,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...n}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...n){return t(...n)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:n}},asyncThunk:e}}function CO({type:e,reducerName:t,createNotation:n},r,i){let a,s;if("reducer"in r){if(n&&!RO(r))throw new Error(Bn(17));a=r.reducer,s=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,s?Fs(e,s):Fs(e))}function AO(e){return e._reducerDefinitionType==="asyncThunk"}function RO(e){return e._reducerDefinitionType==="reducerWithPrepare"}function kO({type:e,reducerName:t},n,r,i){if(!i)throw new Error(Bn(18));const{payloadCreator:a,fulfilled:s,pending:o,rejected:l,settled:c,options:u}=n,f=i(e,a,u);r.exposeAction(t,f),s&&r.addCase(f.fulfilled,s),o&&r.addCase(f.pending,o),l&&r.addCase(f.rejected,l),c&&r.addMatcher(f.settled,c),r.exposeCaseReducer(t,{fulfilled:s||Sl,pending:o||Sl,rejected:l||Sl,settled:c||Sl})}function Sl(){}function Bn(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const OO={sidebarOpen:!1,searchModalOpen:!1,filterModalOpen:!1,mealPlanModalOpen:!1,modalDay:null,modalMealType:null,notificationMessage:null,notificationType:"info",isLoading:!1},w4=Jg({name:"ui",initialState:OO,reducers:{toggleSidebar:e=>{e.sidebarOpen=!e.sidebarOpen},openSidebar:e=>{e.sidebarOpen=!0},closeSidebar:e=>{e.sidebarOpen=!1},toggleSearchModal:e=>{e.searchModalOpen=!e.searchModalOpen},openSearchModal:e=>{e.searchModalOpen=!0},closeSearchModal:e=>{e.searchModalOpen=!1},toggleFilterModal:e=>{e.filterModalOpen=!e.filterModalOpen},openFilterModal:e=>{e.filterModalOpen=!0},closeFilterModal:e=>{e.filterModalOpen=!1},toggleMealPlanModal:e=>{e.mealPlanModalOpen=!e.mealPlanModalOpen},openMealPlanModal:(e,t)=>{e.mealPlanModalOpen=!0,e.modalDay=t.payload.day,e.modalMealType=t.payload.mealType},closeMealPlanModal:e=>{e.mealPlanModalOpen=!1,e.modalDay=null,e.modalMealType=null},setNotification:(e,t)=>{e.notificationMessage=t.payload.message,e.notificationType=t.payload.type||"info"},clearNotification:e=>{e.notificationMessage=null},setLoading:(e,t)=>{e.isLoading=t.payload}}}),{toggleSidebar:MO,openSidebar:pV,closeSidebar:DO,toggleSearchModal:gV,openSearchModal:S4,closeSearchModal:zO,toggleFilterModal:yV,openFilterModal:vV,closeFilterModal:LO,toggleMealPlanModal:bV,openMealPlanModal:PO,closeMealPlanModal:BO,setNotification:pt,clearNotification:Av,setLoading:xV}=w4.actions,UO=e=>e.ui.sidebarOpen,NO=e=>e.ui.searchModalOpen,$O=e=>e.ui.filterModalOpen,VO=e=>e.ui.mealPlanModalOpen,HO=e=>({message:e.ui.notificationMessage,type:e.ui.notificationType}),FO=e=>e.ui.isLoading,qO=w4.reducer,GO="modulepreload",IO=function(e){return"/"+e},Rv={},Oa=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=IO(l),l in Rv)return;Rv[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":GO,c||(f.as="script"),f.crossOrigin="",f.href=l,o&&f.setAttribute("nonce",o),document.head.appendChild(f),c)return new Promise((h,m)=>{f.addEventListener("load",h),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return i.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return t().catch(a)})},YO=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Oa(async()=>{const{default:r}=await Promise.resolve().then(()=>Ia);return{default:r}},[]).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class Wg extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class KO extends Wg{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class XO extends Wg{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class QO extends Wg{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var Vm;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(Vm||(Vm={}));var ZO=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};class JO{constructor(t,{headers:n={},customFetch:r,region:i=Vm.Any}={}){this.url=t,this.headers=n,this.region=i,this.fetch=YO(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return ZO(this,void 0,void 0,function*(){try{const{headers:i,method:a,body:s}=n;let o={},{region:l}=n;l||(l=this.region),l&&l!=="any"&&(o["x-region"]=l);let c;s&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&s instanceof Blob||s instanceof ArrayBuffer?(o["Content-Type"]="application/octet-stream",c=s):typeof s=="string"?(o["Content-Type"]="text/plain",c=s):typeof FormData<"u"&&s instanceof FormData?c=s:(o["Content-Type"]="application/json",c=JSON.stringify(s)));const u=yield this.fetch(`${this.url}/${t}`,{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},o),this.headers),i),body:c}).catch(v=>{throw new KO(v)}),f=u.headers.get("x-relay-error");if(f&&f==="true")throw new XO(u);if(!u.ok)throw new QO(u);let h=((r=u.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),m;return h==="application/json"?m=yield u.json():h==="application/octet-stream"?m=yield u.blob():h==="text/event-stream"?m=u:h==="multipart/form-data"?m=yield u.formData():m=yield u.text(),{data:m,error:null}}catch(i){return{data:null,error:i}}})}}var it={},e0={},ad={},Go={},sd={},od={},WO=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},Ma=WO();const e9=Ma.fetch,_4=Ma.fetch.bind(Ma),T4=Ma.Headers,t9=Ma.Request,n9=Ma.Response,Ia=Object.freeze(Object.defineProperty({__proto__:null,Headers:T4,Request:t9,Response:n9,default:_4,fetch:e9},Symbol.toStringTag,{value:"Module"})),r9=C5(Ia);var ld={};Object.defineProperty(ld,"__esModule",{value:!0});let i9=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}};ld.default=i9;var E4=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(od,"__esModule",{value:!0});const a9=E4(r9),s9=E4(ld);let o9=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=a9.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,n){return this.headers=Object.assign({},this.headers),this.headers[t]=n,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async a=>{var s,o,l;let c=null,u=null,f=null,h=a.status,m=a.statusText;if(a.ok){if(this.method!=="HEAD"){const p=await a.text();p===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?u=p:u=JSON.parse(p))}const w=(s=this.headers.Prefer)===null||s===void 0?void 0:s.match(/count=(exact|planned|estimated)/),S=(o=a.headers.get("content-range"))===null||o===void 0?void 0:o.split("/");w&&S&&S.length>1&&(f=parseInt(S[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(u)&&(u.length>1?(c={code:"PGRST116",details:`Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},u=null,f=null,h=406,m="Not Acceptable"):u.length===1?u=u[0]:u=null)}else{const w=await a.text();try{c=JSON.parse(w),Array.isArray(c)&&a.status===404&&(u=[],c=null,h=200,m="OK")}catch{a.status===404&&w===""?(h=204,m="No Content"):c={message:w}}if(c&&this.isMaybeSingle&&(!((l=c==null?void 0:c.details)===null||l===void 0)&&l.includes("0 rows"))&&(c=null,h=200,m="OK"),c&&this.shouldThrowOnError)throw new s9.default(c)}return{error:c,data:u,count:f,status:h,statusText:m}});return this.shouldThrowOnError||(i=i.catch(a=>{var s,o,l;return{error:{message:`${(s=a==null?void 0:a.name)!==null&&s!==void 0?s:"FetchError"}: ${a==null?void 0:a.message}`,details:`${(o=a==null?void 0:a.stack)!==null&&o!==void 0?o:""}`,hint:"",code:`${(l=a==null?void 0:a.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}returns(){return this}overrideTypes(){return this}};od.default=o9;var l9=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(sd,"__esModule",{value:!0});const c9=l9(od);let u9=class extends c9.default{select(t){let n=!1;const r=(t??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:i,referencedTable:a=i}={}){const s=a?`${a}.order`:"order",o=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${o?`${o},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:i=r}={}){const a=typeof i>"u"?"offset":`${i}.offset`,s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(a,`${t}`),this.url.searchParams.set(s,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:i=!1,wal:a=!1,format:s="text"}={}){var o;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,i?"buffers":null,a?"wal":null].filter(Boolean).join("|"),c=(o=this.headers.Accept)!==null&&o!==void 0?o:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${s}; for="${c}"; options=${l};`,s==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};sd.default=u9;var d9=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Go,"__esModule",{value:!0});const f9=d9(sd);let h9=class extends f9.default{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=Array.from(new Set(n)).map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:i}={}){let a="";i==="plain"?a="pl":i==="phrase"?a="ph":i==="websearch"&&(a="w");const s=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${a}fts${s}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const i=r?`${r}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}};Go.default=h9;var m9=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ad,"__esModule",{value:!0});const ls=m9(Go);let p9=class{constructor(t,{headers:n={},schema:r,fetch:i}){this.url=t,this.headers=n,this.schema=r,this.fetch=i}select(t,{head:n=!1,count:r}={}){const i=n?"HEAD":"GET";let a=!1;const s=(t??"*").split("").map(o=>/\s/.test(o)&&!a?"":(o==='"'&&(a=!a),o)).join("");return this.url.searchParams.set("select",s),r&&(this.headers.Prefer=`count=${r}`),new ls.default({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const i="POST",a=[];if(this.headers.Prefer&&a.push(this.headers.Prefer),n&&a.push(`count=${n}`),r||a.push("missing=default"),this.headers.Prefer=a.join(","),Array.isArray(t)){const s=t.reduce((o,l)=>o.concat(Object.keys(l)),[]);if(s.length>0){const o=[...new Set(s)].map(l=>`"${l}"`);this.url.searchParams.set("columns",o.join(","))}}return new ls.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:i,defaultToNull:a=!0}={}){const s="POST",o=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&o.push(this.headers.Prefer),i&&o.push(`count=${i}`),a||o.push("missing=default"),this.headers.Prefer=o.join(","),Array.isArray(t)){const l=t.reduce((c,u)=>c.concat(Object.keys(u)),[]);if(l.length>0){const c=[...new Set(l)].map(u=>`"${u}"`);this.url.searchParams.set("columns",c.join(","))}}return new ls.default({method:s,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),n&&i.push(`count=${n}`),this.headers.Prefer=i.join(","),new ls.default({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new ls.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};ad.default=p9;var cd={},ud={};Object.defineProperty(ud,"__esModule",{value:!0});ud.version=void 0;ud.version="0.0.0-automated";Object.defineProperty(cd,"__esModule",{value:!0});cd.DEFAULT_HEADERS=void 0;const g9=ud;cd.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${g9.version}`};var j4=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e0,"__esModule",{value:!0});const y9=j4(ad),v9=j4(Go),b9=cd;let x9=class C4{constructor(t,{headers:n={},schema:r,fetch:i}={}){this.url=t,this.headers=Object.assign(Object.assign({},b9.DEFAULT_HEADERS),n),this.schemaName=r,this.fetch=i}from(t){const n=new URL(`${this.url}/${t}`);return new y9.default(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new C4(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,get:i=!1,count:a}={}){let s;const o=new URL(`${this.url}/rpc/${t}`);let l;r||i?(s=r?"HEAD":"GET",Object.entries(n).filter(([u,f])=>f!==void 0).map(([u,f])=>[u,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([u,f])=>{o.searchParams.append(u,f)})):(s="POST",l=n);const c=Object.assign({},this.headers);return a&&(c.Prefer=`count=${a}`),new v9.default({method:s,url:o,headers:c,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};e0.default=x9;var Ya=Bt&&Bt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(it,"__esModule",{value:!0});it.PostgrestError=it.PostgrestBuilder=it.PostgrestTransformBuilder=it.PostgrestFilterBuilder=it.PostgrestQueryBuilder=it.PostgrestClient=void 0;const A4=Ya(e0);it.PostgrestClient=A4.default;const R4=Ya(ad);it.PostgrestQueryBuilder=R4.default;const k4=Ya(Go);it.PostgrestFilterBuilder=k4.default;const O4=Ya(sd);it.PostgrestTransformBuilder=O4.default;const M4=Ya(od);it.PostgrestBuilder=M4.default;const D4=Ya(ld);it.PostgrestError=D4.default;var w9=it.default={PostgrestClient:A4.default,PostgrestQueryBuilder:R4.default,PostgrestFilterBuilder:k4.default,PostgrestTransformBuilder:O4.default,PostgrestBuilder:M4.default,PostgrestError:D4.default};const{PostgrestClient:S9,PostgrestQueryBuilder:jV,PostgrestFilterBuilder:CV,PostgrestTransformBuilder:AV,PostgrestBuilder:RV,PostgrestError:kV}=w9,_9="2.11.2",T9={"X-Client-Info":`realtime-js/${_9}`},E9="1.0.0",z4=1e4,j9=1e3;var ua;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(ua||(ua={}));var ut;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(ut||(ut={}));var It;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(It||(It={}));var Hm;(function(e){e.websocket="websocket"})(Hm||(Hm={}));var Ir;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(Ir||(Ir={}));class C9{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const i=n.getUint8(1),a=n.getUint8(2);let s=this.HEADER_LENGTH+2;const o=r.decode(t.slice(s,s+i));s=s+i;const l=r.decode(t.slice(s,s+a));s=s+a;const c=JSON.parse(r.decode(t.slice(s,t.byteLength)));return{ref:null,topic:o,event:l,payload:c}}}class L4{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var re;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(re||(re={}));const kv=(e,t,n={})=>{var r;const i=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((a,s)=>(a[s]=A9(s,e,t,i),a),{})},A9=(e,t,n,r)=>{const i=t.find(o=>o.name===e),a=i==null?void 0:i.type,s=n[e];return a&&!r.includes(a)?P4(a,s):Fm(s)},P4=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return M9(t,n)}switch(e){case re.bool:return R9(t);case re.float4:case re.float8:case re.int2:case re.int4:case re.int8:case re.numeric:case re.oid:return k9(t);case re.json:case re.jsonb:return O9(t);case re.timestamp:return D9(t);case re.abstime:case re.date:case re.daterange:case re.int4range:case re.int8range:case re.money:case re.reltime:case re.text:case re.time:case re.timestamptz:case re.timetz:case re.tsrange:case re.tstzrange:return Fm(t);default:return Fm(t)}},Fm=e=>e,R9=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},k9=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},O9=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},M9=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let a;const s=e.slice(1,n);try{a=JSON.parse("["+s+"]")}catch{a=s?s.split(","):[]}return a.map(o=>P4(t,o))}return e},D9=e=>typeof e=="string"?e.replace(" ","T"):e,B4=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class Cf{constructor(t,n,r={},i=z4){this.channel=t,this.event=n,this.payload=r,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var Ov;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(Ov||(Ov={}));class qs{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},i=>{const{onJoin:a,onLeave:s,onSync:o}=this.caller;this.joinRef=this.channel._joinRef(),this.state=qs.syncState(this.state,i,a,s),this.pendingDiffs.forEach(l=>{this.state=qs.syncDiff(this.state,l,a,s)}),this.pendingDiffs=[],o()}),this.channel._on(r.diff,{},i=>{const{onJoin:a,onLeave:s,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=qs.syncDiff(this.state,i,a,s),o())}),this.onJoin((i,a,s)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:a,newPresences:s})}),this.onLeave((i,a,s)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:a,leftPresences:s})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,i){const a=this.cloneDeep(t),s=this.transformState(n),o={},l={};return this.map(a,(c,u)=>{s[c]||(l[c]=u)}),this.map(s,(c,u)=>{const f=a[c];if(f){const h=u.map(S=>S.presence_ref),m=f.map(S=>S.presence_ref),v=u.filter(S=>m.indexOf(S.presence_ref)<0),w=f.filter(S=>h.indexOf(S.presence_ref)<0);v.length>0&&(o[c]=v),w.length>0&&(l[c]=w)}else o[c]=u}),this.syncDiff(a,{joins:o,leaves:l},r,i)}static syncDiff(t,n,r,i){const{joins:a,leaves:s}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),i||(i=()=>{}),this.map(a,(o,l)=>{var c;const u=(c=t[o])!==null&&c!==void 0?c:[];if(t[o]=this.cloneDeep(l),u.length>0){const f=t[o].map(m=>m.presence_ref),h=u.filter(m=>f.indexOf(m.presence_ref)<0);t[o].unshift(...h)}r(o,u,l)}),this.map(s,(o,l)=>{let c=t[o];if(!c)return;const u=l.map(f=>f.presence_ref);c=c.filter(f=>u.indexOf(f.presence_ref)<0),t[o]=c,i(o,c,l),c.length===0&&delete t[o]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const i=t[r];return"metas"in i?n[r]=i.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a)):n[r]=i,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Mv;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(Mv||(Mv={}));var Dv;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(Dv||(Dv={}));var jn;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(jn||(jn={}));class t0{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=ut.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new Cf(this,It.join,this.params,this.timeout),this.rejoinTimer=new L4(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=ut.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=ut.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=ut.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=ut.errored,this.rejoinTimer.scheduleTimeout())}),this._on(It.reply,{},(i,a)=>{this._trigger(this._replyEventName(a),i)}),this.presence=new qs(this),this.broadcastEndpointURL=B4(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,n=this.timeout){var r,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:a,presence:s,private:o}}=this.params;this._onError(u=>t==null?void 0:t(jn.CHANNEL_ERROR,u)),this._onClose(()=>t==null?void 0:t(jn.CLOSED));const l={},c={broadcast:a,presence:s,postgres_changes:(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(u=>u.filter))!==null&&i!==void 0?i:[],private:o};this.socket.accessTokenValue&&(l.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:c},l)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",async({postgres_changes:u})=>{var f;if(this.socket.setAuth(),u===void 0){t==null||t(jn.SUBSCRIBED);return}else{const h=this.bindings.postgres_changes,m=(f=h==null?void 0:h.length)!==null&&f!==void 0?f:0,v=[];for(let w=0;w<m;w++){const S=h[w],{filter:{event:p,schema:y,table:b,filter:x}}=S,T=u&&u[w];if(T&&T.event===p&&T.schema===y&&T.table===b&&T.filter===x)v.push(Object.assign(Object.assign({},S),{id:T.id}));else{this.unsubscribe(),t==null||t(jn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=v,t&&t(jn.SUBSCRIBED);return}}).receive("error",u=>{t==null||t(jn.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(u).join(", ")||"error")))}).receive("timeout",()=>{t==null||t(jn.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,i;if(!this._canPush()&&t.type==="broadcast"){const{event:a,payload:s}=t,l={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:s,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(r=n.timeout)!==null&&r!==void 0?r:this.timeout);return await((i=c.body)===null||i===void 0?void 0:i.cancel()),c.ok?"ok":"error"}catch(c){return c.name==="AbortError"?"timed out":"error"}}else return new Promise(a=>{var s,o,l;const c=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(o=(s=this.params)===null||s===void 0?void 0:s.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&a("ok"),c.receive("ok",()=>a("ok")),c.receive("error",()=>a("error")),c.receive("timeout",()=>a("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=ut.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(It.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const i=new Cf(this,It.leave,{},t);i.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),i.send(),this._canPush()||i.trigger("ok",{})})}async _fetchWithTimeout(t,n,r){const i=new AbortController,a=setTimeout(()=>i.abort(),r),s=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:i.signal}));return clearTimeout(a),s}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Cf(this,t,n,r);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var i,a;const s=t.toLocaleLowerCase(),{close:o,error:l,leave:c,join:u}=It;if(r&&[o,l,c,u].indexOf(s)>=0&&r!==this._joinRef())return;let h=this._onMessage(s,n,r);if(n&&!h)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(s)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(m=>{var v,w,S;return((v=m.filter)===null||v===void 0?void 0:v.event)==="*"||((S=(w=m.filter)===null||w===void 0?void 0:w.event)===null||S===void 0?void 0:S.toLocaleLowerCase())===s}).map(m=>m.callback(h,r)):(a=this.bindings[s])===null||a===void 0||a.filter(m=>{var v,w,S,p,y,b;if(["broadcast","presence","postgres_changes"].includes(s))if("id"in m){const x=m.id,T=(v=m.filter)===null||v===void 0?void 0:v.event;return x&&((w=n.ids)===null||w===void 0?void 0:w.includes(x))&&(T==="*"||(T==null?void 0:T.toLocaleLowerCase())===((S=n.data)===null||S===void 0?void 0:S.type.toLocaleLowerCase()))}else{const x=(y=(p=m==null?void 0:m.filter)===null||p===void 0?void 0:p.event)===null||y===void 0?void 0:y.toLocaleLowerCase();return x==="*"||x===((b=n==null?void 0:n.event)===null||b===void 0?void 0:b.toLocaleLowerCase())}else return m.type.toLocaleLowerCase()===s}).map(m=>{if(typeof h=="object"&&"ids"in h){const v=h.data,{schema:w,table:S,commit_timestamp:p,type:y,errors:b}=v;h=Object.assign(Object.assign({},{schema:w,table:S,commit_timestamp:p,eventType:y,new:{},old:{},errors:b}),this._getPayloadRecords(v))}m.callback(h,r)})}_isClosed(){return this.state===ut.closed}_isJoined(){return this.state===ut.joined}_isJoining(){return this.state===ut.joining}_isLeaving(){return this.state===ut.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const i=t.toLocaleLowerCase(),a={type:i,filter:n,callback:r};return this.bindings[i]?this.bindings[i].push(a):this.bindings[i]=[a],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(i=>{var a;return!(((a=i.type)===null||a===void 0?void 0:a.toLocaleLowerCase())===r&&t0.isEqual(i.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(It.close,{},t)}_onError(t){this._on(It.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=ut.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=kv(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=kv(t.columns,t.old_record)),n}}const z9=()=>{},L9=typeof WebSocket<"u",P9=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class B9{constructor(t,n){var r;this.accessTokenValue=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=T9,this.params={},this.timeout=z4,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=z9,this.conn=null,this.sendBuffer=[],this.serializer=new C9,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=a=>{let s;return a?s=a:typeof fetch>"u"?s=(...o)=>Oa(async()=>{const{default:l}=await Promise.resolve().then(()=>Ia);return{default:l}},void 0).then(({default:l})=>l(...o)):s=fetch,(...o)=>s(...o)},this.endPoint=`${t}/${Hm.websocket}`,this.httpEndpoint=B4(t),n!=null&&n.transport?this.transport=n.transport:this.transport=null,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const i=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;if(i&&(this.accessTokenValue=i,this.apiKey=i),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:a=>[1e3,2e3,5e3,1e4][a-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(a,s)=>s(JSON.stringify(a)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new L4(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch),n!=null&&n.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(n==null?void 0:n.worker)||!1,this.workerUrl=n==null?void 0:n.workerUrl}this.accessToken=(n==null?void 0:n.accessToken)||null}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers});return}if(L9){this.conn=new WebSocket(this.endpointURL()),this.setupConnection();return}this.conn=new U9(this.endpointURL(),void 0,{close:()=>{this.conn=null}}),Oa(async()=>{const{default:t}=await import("./browser-DAy3HGMI.js").then(n=>n.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:E9}))}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case ua.connecting:return Ir.Connecting;case ua.open:return Ir.Open;case ua.closing:return Ir.Closing;default:return Ir.Closed}}isConnected(){return this.connectionState()===Ir.Open}channel(t,n={config:{}}){const r=new t0(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:i,ref:a}=t,s=()=>{this.encode(t,o=>{var l;(l=this.conn)===null||l===void 0||l.send(o)})};this.log("push",`${n} ${r} (${a})`,i),this.isConnected()?s():this.sendBuffer.push(s)}async setAuth(t=null){let n=t||this.accessToken&&await this.accessToken()||this.accessTokenValue;if(n){let r=null;try{r=JSON.parse(atob(n.split(".")[1]))}catch{}if(r&&r.exp&&!(Math.floor(Date.now()/1e3)-r.exp<0))return this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`),Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${r.exp}`);this.accessTokenValue=n,this.channels.forEach(i=>{n&&i.updateJoinPayload({access_token:n}),i.joinedOnce&&i._isJoined()&&i._push(It.access_token,{access_token:n})})}}async sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(j9,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth()}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:i,payload:a,ref:s}=n;s&&s===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${a.status||""} ${r} ${i} ${s&&"("+s+")"||""}`,a),this.channels.filter(o=>o._isMember(r)).forEach(o=>o._trigger(i,a,s)),this.stateChangeCallbacks.message.forEach(o=>o(n))})}async _onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(It.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",i=new URLSearchParams(n);return`${t}${r}${i}`}_workerObjectUrl(t){let n;if(t)n=t;else{const r=new Blob([P9],{type:"application/javascript"});n=URL.createObjectURL(r)}return n}}class U9{constructor(t,n,r){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=ua.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=r.close}}class n0 extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function Oe(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class N9 extends n0{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class qm extends n0{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var $9=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};const U4=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Oa(async()=>{const{default:r}=await Promise.resolve().then(()=>Ia);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},V9=()=>$9(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Oa(()=>Promise.resolve().then(()=>Ia),void 0)).Response:Response}),Gm=e=>{if(Array.isArray(e))return e.map(n=>Gm(n));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([n,r])=>{const i=n.replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace(/[-_]/g,""));t[i]=Gm(r)}),t};var Ti=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};const Af=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),H9=(e,t,n)=>Ti(void 0,void 0,void 0,function*(){const r=yield V9();e instanceof r&&!(n!=null&&n.noResolveJson)?e.json().then(i=>{t(new N9(Af(i),e.status||500))}).catch(i=>{t(new qm(Af(i),i))}):t(new qm(Af(e),e))}),F9=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),r&&(i.body=JSON.stringify(r)),Object.assign(Object.assign({},i),n))};function Io(e,t,n,r,i,a){return Ti(this,void 0,void 0,function*(){return new Promise((s,o)=>{e(n,F9(t,r,i,a)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>s(l)).catch(l=>H9(l,o,r))})})}function Su(e,t,n,r){return Ti(this,void 0,void 0,function*(){return Io(e,"GET",t,n,r)})}function or(e,t,n,r,i){return Ti(this,void 0,void 0,function*(){return Io(e,"POST",t,r,i,n)})}function q9(e,t,n,r,i){return Ti(this,void 0,void 0,function*(){return Io(e,"PUT",t,r,i,n)})}function G9(e,t,n,r){return Ti(this,void 0,void 0,function*(){return Io(e,"HEAD",t,Object.assign(Object.assign({},n),{noResolveJson:!0}),r)})}function N4(e,t,n,r,i){return Ti(this,void 0,void 0,function*(){return Io(e,"DELETE",t,r,i,n)})}var tt=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};const I9={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},zv={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class Y9{constructor(t,n={},r,i){this.url=t,this.headers=n,this.bucketId=r,this.fetch=U4(i)}uploadOrUpdate(t,n,r,i){return tt(this,void 0,void 0,function*(){try{let a;const s=Object.assign(Object.assign({},zv),i);let o=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(s.upsert)});const l=s.metadata;typeof Blob<"u"&&r instanceof Blob?(a=new FormData,a.append("cacheControl",s.cacheControl),l&&a.append("metadata",this.encodeMetadata(l)),a.append("",r)):typeof FormData<"u"&&r instanceof FormData?(a=r,a.append("cacheControl",s.cacheControl),l&&a.append("metadata",this.encodeMetadata(l))):(a=r,o["cache-control"]=`max-age=${s.cacheControl}`,o["content-type"]=s.contentType,l&&(o["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),i!=null&&i.headers&&(o=Object.assign(Object.assign({},o),i.headers));const c=this._removeEmptyFolders(n),u=this._getFinalPath(c),f=yield this.fetch(`${this.url}/object/${u}`,Object.assign({method:t,body:a,headers:o},s!=null&&s.duplex?{duplex:s.duplex}:{})),h=yield f.json();return f.ok?{data:{path:c,id:h.Id,fullPath:h.Key},error:null}:{data:null,error:h}}catch(a){if(Oe(a))return{data:null,error:a};throw a}})}upload(t,n,r){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,i){return tt(this,void 0,void 0,function*(){const a=this._removeEmptyFolders(t),s=this._getFinalPath(a),o=new URL(this.url+`/object/upload/sign/${s}`);o.searchParams.set("token",n);try{let l;const c=Object.assign({upsert:zv.upsert},i),u=Object.assign(Object.assign({},this.headers),{"x-upsert":String(c.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",c.cacheControl)):(l=r,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType);const f=yield this.fetch(o.toString(),{method:"PUT",body:l,headers:u}),h=yield f.json();return f.ok?{data:{path:a,fullPath:h.Key},error:null}:{data:null,error:h}}catch(l){if(Oe(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,n){return tt(this,void 0,void 0,function*(){try{let r=this._getFinalPath(t);const i=Object.assign({},this.headers);n!=null&&n.upsert&&(i["x-upsert"]="true");const a=yield or(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:i}),s=new URL(this.url+a.url),o=s.searchParams.get("token");if(!o)throw new n0("No token returned by API");return{data:{signedUrl:s.toString(),path:t,token:o},error:null}}catch(r){if(Oe(r))return{data:null,error:r};throw r}})}update(t,n,r){return tt(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n,r){return tt(this,void 0,void 0,function*(){try{return{data:yield or(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(i){if(Oe(i))return{data:null,error:i};throw i}})}copy(t,n,r){return tt(this,void 0,void 0,function*(){try{return{data:{path:(yield or(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(i){if(Oe(i))return{data:null,error:i};throw i}})}createSignedUrl(t,n,r){return tt(this,void 0,void 0,function*(){try{let i=this._getFinalPath(t),a=yield or(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return a={signedUrl:encodeURI(`${this.url}${a.signedURL}${s}`)},{data:a,error:null}}catch(i){if(Oe(i))return{data:null,error:i};throw i}})}createSignedUrls(t,n,r){return tt(this,void 0,void 0,function*(){try{const i=yield or(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),a=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(s=>Object.assign(Object.assign({},s),{signedUrl:s.signedURL?encodeURI(`${this.url}${s.signedURL}${a}`):null})),error:null}}catch(i){if(Oe(i))return{data:null,error:i};throw i}})}download(t,n){return tt(this,void 0,void 0,function*(){const i=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",a=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),s=a?`?${a}`:"";try{const o=this._getFinalPath(t);return{data:yield(yield Su(this.fetch,`${this.url}/${i}/${o}${s}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(o){if(Oe(o))return{data:null,error:o};throw o}})}info(t){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{const r=yield Su(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:Gm(r),error:null}}catch(r){if(Oe(r))return{data:null,error:r};throw r}})}exists(t){return tt(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{return yield G9(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(Oe(r)&&r instanceof qm){const i=r.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:r}}throw r}})}getPublicUrl(t,n){const r=this._getFinalPath(t),i=[],a=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";a!==""&&i.push(a);const o=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&i.push(l);let c=i.join("&");return c!==""&&(c=`?${c}`),{data:{publicUrl:encodeURI(`${this.url}/${o}/public/${r}${c}`)}}}remove(t){return tt(this,void 0,void 0,function*(){try{return{data:yield N4(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if(Oe(n))return{data:null,error:n};throw n}})}list(t,n,r){return tt(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},I9),n),{prefix:t||""});return{data:yield or(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},r),error:null}}catch(i){if(Oe(i))return{data:null,error:i};throw i}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const K9="2.7.1",X9={"X-Client-Info":`storage-js/${K9}`};var Oi=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};class Q9{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},X9),n),this.fetch=U4(r)}listBuckets(){return Oi(this,void 0,void 0,function*(){try{return{data:yield Su(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(Oe(t))return{data:null,error:t};throw t}})}getBucket(t){return Oi(this,void 0,void 0,function*(){try{return{data:yield Su(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if(Oe(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Oi(this,void 0,void 0,function*(){try{return{data:yield or(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Oe(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Oi(this,void 0,void 0,function*(){try{return{data:yield q9(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(Oe(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Oi(this,void 0,void 0,function*(){try{return{data:yield or(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(Oe(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Oi(this,void 0,void 0,function*(){try{return{data:yield N4(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if(Oe(n))return{data:null,error:n};throw n}})}}class Z9 extends Q9{constructor(t,n={},r){super(t,n,r)}from(t){return new Y9(this.url,this.headers,t,this.fetch)}}const J9="2.49.4";let xs="";typeof Deno<"u"?xs="deno":typeof document<"u"?xs="web":typeof navigator<"u"&&navigator.product==="ReactNative"?xs="react-native":xs="node";const W9={"X-Client-Info":`supabase-js-${xs}/${J9}`},eM={headers:W9},tM={schema:"public"},nM={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},rM={};var iM=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};const aM=e=>{let t;return e?t=e:typeof fetch>"u"?t=_4:t=fetch,(...n)=>t(...n)},sM=()=>typeof Headers>"u"?T4:Headers,oM=(e,t,n)=>{const r=aM(n),i=sM();return(a,s)=>iM(void 0,void 0,void 0,function*(){var o;const l=(o=yield t())!==null&&o!==void 0?o:e;let c=new i(s==null?void 0:s.headers);return c.has("apikey")||c.set("apikey",e),c.has("Authorization")||c.set("Authorization",`Bearer ${l}`),r(a,Object.assign(Object.assign({},s),{headers:c}))})};var lM=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};function cM(e){return e.replace(/\/$/,"")}function uM(e,t){const{db:n,auth:r,realtime:i,global:a}=e,{db:s,auth:o,realtime:l,global:c}=t,u={db:Object.assign(Object.assign({},s),n),auth:Object.assign(Object.assign({},o),r),realtime:Object.assign(Object.assign({},l),i),global:Object.assign(Object.assign({},c),a),accessToken:()=>lM(this,void 0,void 0,function*(){return""})};return e.accessToken?u.accessToken=e.accessToken:delete u.accessToken,u}const $4="2.69.1",Ui=30*1e3,Im=3,Rf=Im*Ui,dM="http://localhost:9999",fM="supabase.auth.token",hM={"X-Client-Info":`gotrue-js/${$4}`},Ym="X-Supabase-Api-Version",V4={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},mM=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,pM=6e5;class r0 extends Error{constructor(t,n,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=r}}function $(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class gM extends r0{constructor(t,n,r){super(t,n,r),this.name="AuthApiError",this.status=n,this.code=r}}function yM(e){return $(e)&&e.name==="AuthApiError"}class H4 extends r0{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Lr extends r0{constructor(t,n,r,i){super(t,r,i),this.name=n,this.status=r}}class nr extends Lr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function vM(e){return $(e)&&e.name==="AuthSessionMissingError"}class kf extends Lr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class _l extends Lr{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Tl extends Lr{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function bM(e){return $(e)&&e.name==="AuthImplicitGrantRedirectError"}class Lv extends Lr{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class Km extends Lr{constructor(t,n){super(t,"AuthRetryableFetchError",n,void 0)}}function Of(e){return $(e)&&e.name==="AuthRetryableFetchError"}class Pv extends Lr{constructor(t,n,r){super(t,"AuthWeakPasswordError",n,"weak_password"),this.reasons=r}}class Gs extends Lr{constructor(t){super(t,"AuthInvalidJwtError",400,"invalid_jwt")}}const Bv="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Uv=` 	
\r=`.split(""),xM=(()=>{const e=new Array(128);for(let t=0;t<e.length;t+=1)e[t]=-1;for(let t=0;t<Uv.length;t+=1)e[Uv[t].charCodeAt(0)]=-2;for(let t=0;t<Bv.length;t+=1)e[Bv[t].charCodeAt(0)]=t;return e})();function F4(e,t,n){const r=xM[e];if(r>-1)for(t.queue=t.queue<<6|r,t.queuedBits+=6;t.queuedBits>=8;)n(t.queue>>t.queuedBits-8&255),t.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(e)}"`)}}function Nv(e){const t=[],n=s=>{t.push(String.fromCodePoint(s))},r={utf8seq:0,codepoint:0},i={queue:0,queuedBits:0},a=s=>{_M(s,r,n)};for(let s=0;s<e.length;s+=1)F4(e.charCodeAt(s),i,a);return t.join("")}function wM(e,t){if(e<=127){t(e);return}else if(e<=2047){t(192|e>>6),t(128|e&63);return}else if(e<=65535){t(224|e>>12),t(128|e>>6&63),t(128|e&63);return}else if(e<=1114111){t(240|e>>18),t(128|e>>12&63),t(128|e>>6&63),t(128|e&63);return}throw new Error(`Unrecognized Unicode codepoint: ${e.toString(16)}`)}function SM(e,t){for(let n=0;n<e.length;n+=1){let r=e.charCodeAt(n);if(r>55295&&r<=56319){const i=(r-55296)*1024&65535;r=(e.charCodeAt(n+1)-56320&65535|i)+65536,n+=1}wM(r,t)}}function _M(e,t,n){if(t.utf8seq===0){if(e<=127){n(e);return}for(let r=1;r<6;r+=1)if(!(e>>7-r&1)){t.utf8seq=r;break}if(t.utf8seq===2)t.codepoint=e&31;else if(t.utf8seq===3)t.codepoint=e&15;else if(t.utf8seq===4)t.codepoint=e&7;else throw new Error("Invalid UTF-8 sequence");t.utf8seq-=1}else if(t.utf8seq>0){if(e<=127)throw new Error("Invalid UTF-8 sequence");t.codepoint=t.codepoint<<6|e&63,t.utf8seq-=1,t.utf8seq===0&&n(t.codepoint)}}function TM(e){const t=[],n={queue:0,queuedBits:0},r=i=>{t.push(i)};for(let i=0;i<e.length;i+=1)F4(e.charCodeAt(i),n,r);return new Uint8Array(t)}function EM(e){const t=[];return SM(e,n=>t.push(n)),new Uint8Array(t)}function jM(e){return Math.round(Date.now()/1e3)+e}function CM(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const nn=()=>typeof window<"u"&&typeof document<"u",Nr={tested:!1,writable:!1},Is=()=>{if(!nn())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Nr.tested)return Nr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),Nr.tested=!0,Nr.writable=!0}catch{Nr.tested=!0,Nr.writable=!1}return Nr.writable};function AM(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((i,a)=>{t[a]=i})}catch{}return n.searchParams.forEach((r,i)=>{t[i]=r}),t}const q4=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>Oa(async()=>{const{default:r}=await Promise.resolve().then(()=>Ia);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},RM=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",G4=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},El=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},jl=async(e,t)=>{await e.removeItem(t)};class dd{constructor(){this.promise=new dd.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}dd.promiseConstructor=Promise;function Mf(e){const t=e.split(".");if(t.length!==3)throw new Gs("Invalid JWT structure");for(let r=0;r<t.length;r++)if(!mM.test(t[r]))throw new Gs("JWT not in base64url format");return{header:JSON.parse(Nv(t[0])),payload:JSON.parse(Nv(t[1])),signature:TM(t[2]),raw:{header:t[0],payload:t[1]}}}async function kM(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function OM(e,t){return new Promise((r,i)=>{(async()=>{for(let a=0;a<1/0;a++)try{const s=await e(a);if(!t(a,null,s)){r(s);return}}catch(s){if(!t(a,s)){i(s);return}}})()})}function MM(e){return("0"+e.toString(16)).substr(-2)}function DM(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let i="";for(let a=0;a<56;a++)i+=n.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(t),Array.from(t,MM).join("")}async function zM(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(r);return Array.from(i).map(a=>String.fromCharCode(a)).join("")}async function LM(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await zM(e);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Mi(e,t,n=!1){const r=DM();let i=r;n&&(i+="/PASSWORD_RECOVERY"),await G4(e,`${t}-code-verifier`,i);const a=await LM(r);return[a,r===a?"plain":"s256"]}const PM=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function BM(e){const t=e.headers.get(Ym);if(!t||!t.match(PM))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}function UM(e){if(!e)throw new Error("Missing exp claim");const t=Math.floor(Date.now()/1e3);if(e<=t)throw new Error("JWT has expired")}function NM(e){switch(e){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}var $M=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const qr=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),VM=[502,503,504];async function $v(e){var t;if(!RM(e))throw new Km(qr(e),0);if(VM.includes(e.status))throw new Km(qr(e),e.status);let n;try{n=await e.json()}catch(a){throw new H4(qr(a),a)}let r;const i=BM(e);if(i&&i.getTime()>=V4["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?r=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(r=n.error_code),r){if(r==="weak_password")throw new Pv(qr(n),e.status,((t=n.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(r==="session_not_found")throw new nr}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((a,s)=>a&&typeof s=="string",!0))throw new Pv(qr(n),e.status,n.weak_password.reasons);throw new gM(qr(n),e.status||500,r)}const HM=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function G(e,t,n,r){var i;const a=Object.assign({},r==null?void 0:r.headers);a[Ym]||(a[Ym]=V4["2024-01-01"].name),r!=null&&r.jwt&&(a.Authorization=`Bearer ${r.jwt}`);const s=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(s.redirect_to=r.redirectTo);const o=Object.keys(s).length?"?"+new URLSearchParams(s).toString():"",l=await FM(e,t,n+o,{headers:a,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function FM(e,t,n,r,i,a){const s=HM(t,r,i,a);let o;try{o=await e(n,Object.assign({},s))}catch(l){throw console.error(l),new Km(qr(l),0)}if(o.ok||await $v(o),r!=null&&r.noResolveJson)return o;try{return await o.json()}catch(l){await $v(l)}}function rr(e){var t;let n=null;YM(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=jM(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function Vv(e){const t=rr(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((n,r)=>n&&typeof r=="string",!0)&&(t.data.weak_password=e.weak_password),t}function fr(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function qM(e){return{data:e,error:null}}function GM(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a}=e,s=$M(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:a},l=Object.assign({},s);return{data:{properties:o,user:l},error:null}}function IM(e){return e}function YM(e){return e.access_token&&e.refresh_token&&e.expires_in}var KM=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};class XM{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=q4(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await G(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if($(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await G(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:fr})}catch(r){if($(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=KM(t,["options"]),i=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await G(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:GM,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if($(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await G(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:fr})}catch(n){if($(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,i,a,s,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await G(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(a=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&a!==void 0?a:""},xform:IM});if(u.error)throw u.error;const f=await u.json(),h=(s=u.headers.get("x-total-count"))!==null&&s!==void 0?s:0,m=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(v=>{const w=parseInt(v.split(";")[0].split("=")[1].substring(0,1)),S=JSON.parse(v.split(";")[1].split("=")[1]);c[`${S}Page`]=w}),c.total=parseInt(h)),{data:Object.assign(Object.assign({},f),c),error:null}}catch(c){if($(c))return{data:{users:[]},error:c};throw c}}async getUserById(t){try{return await G(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:fr})}catch(n){if($(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await G(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:fr})}catch(r){if($(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await G(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:fr})}catch(r){if($(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await G(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:n,error:r}}catch(n){if($(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await G(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if($(n))return{data:null,error:n};throw n}}}const QM={getItem:e=>Is()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{Is()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{Is()&&globalThis.localStorage.removeItem(e)}};function Hv(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function ZM(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Di={debug:!!(globalThis&&Is()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class I4 extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class JM extends I4{}async function WM(e,t,n){Di.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const r=new globalThis.AbortController;return t>0&&setTimeout(()=>{r.abort(),Di.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await Promise.resolve().then(()=>globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async i=>{if(i){Di.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,i.name);try{return await n()}finally{Di.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,i.name)}}else{if(t===0)throw Di.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new JM(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Di.debug)try{const a=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(a,null,"  "))}catch(a){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",a)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}}))}ZM();const eD={url:dM,storageKey:fM,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:hM,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Fv(e,t,n){return await n()}class So{constructor(t){var n,r;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=So.nextInstanceID,So.nextInstanceID+=1,this.instanceID>0&&nn()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const i=Object.assign(Object.assign({},eD),t);if(this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.persistSession=i.persistSession,this.storageKey=i.storageKey,this.autoRefreshToken=i.autoRefreshToken,this.admin=new XM({url:i.url,headers:i.headers,fetch:i.fetch}),this.url=i.url,this.headers=i.headers,this.fetch=q4(i.fetch),this.lock=i.lock||Fv,this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,i.lock?this.lock=i.lock:nn()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=WM:this.lock=Fv,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?i.storage?this.storage=i.storage:Is()?this.storage=QM:(this.memoryStorage={},this.storage=Hv(this.memoryStorage)):(this.memoryStorage={},this.storage=Hv(this.memoryStorage)),nn()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${$4}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var t;try{const n=AM(window.location.href);let r="none";if(this._isImplicitGrantCallback(n)?r="implicit":await this._isPKCECallback(n)&&(r="pkce"),nn()&&this.detectSessionInUrl&&r!=="none"){const{data:i,error:a}=await this._getSessionFromURL(n,r);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),bM(a)){const l=(t=a.details)===null||t===void 0?void 0:t.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:a}}return await this._removeSession(),{error:a}}const{session:s,redirectType:o}=i;return this._debug("#_initialize()","detected session in URL",s,"redirect type",o),await this._saveSession(s),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",s):await this._notifyAllSubscribers("SIGNED_IN",s)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(n){return $(n)?{error:n}:{error:new H4("Unexpected error during initialization",n)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var n,r,i;try{const a=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(n=t==null?void 0:t.options)===null||n===void 0?void 0:n.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(i=t==null?void 0:t.options)===null||i===void 0?void 0:i.captchaToken}},xform:rr}),{data:s,error:o}=a;if(o||!s)return{data:{user:null,session:null},error:o};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(a){if($(a))return{data:{user:null,session:null},error:a};throw a}}async signUp(t){var n,r,i;try{let a;if("email"in t){const{email:u,password:f,options:h}=t;let m=null,v=null;this.flowType==="pkce"&&([m,v]=await Mi(this.storage,this.storageKey)),a=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:h==null?void 0:h.emailRedirectTo,body:{email:u,password:f,data:(n=h==null?void 0:h.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken},code_challenge:m,code_challenge_method:v},xform:rr})}else if("phone"in t){const{phone:u,password:f,options:h}=t;a=await G(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:f,data:(r=h==null?void 0:h.data)!==null&&r!==void 0?r:{},channel:(i=h==null?void 0:h.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:rr})}else throw new _l("You must provide either an email or phone number and a password");const{data:s,error:o}=a;if(o||!s)return{data:{user:null,session:null},error:o};const l=s.session,c=s.user;return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(a){if($(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithPassword(t){try{let n;if("email"in t){const{email:a,password:s,options:o}=t;n=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:s,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Vv})}else if("phone"in t){const{phone:a,password:s,options:o}=t;n=await G(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:s,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Vv})}else throw new _l("You must provide either an email or phone number and a password");const{data:r,error:i}=n;return i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new kf}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:i})}catch(n){if($(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,i,a;return await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(a=t.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await El(this.storage,`${this.storageKey}-code-verifier`),[r,i]=(n??"").split("/");try{const{data:a,error:s}=await G(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:r},xform:rr});if(await jl(this.storage,`${this.storageKey}-code-verifier`),s)throw s;return!a||!a.session||!a.user?{data:{user:null,session:null,redirectType:null},error:new kf}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign(Object.assign({},a),{redirectType:i??null}),error:s})}catch(a){if($(a))return{data:{user:null,session:null,redirectType:null},error:a};throw a}}async signInWithIdToken(t){try{const{options:n,provider:r,token:i,access_token:a,nonce:s}=t,o=await G(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:a,nonce:s,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:rr}),{data:l,error:c}=o;return c?{data:{user:null,session:null},error:c}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new kf}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:c})}catch(n){if($(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,i,a,s;try{if("email"in t){const{email:o,options:l}=t;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await Mi(this.storage,this.storageKey));const{error:f}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:o,options:l}=t,{data:c,error:u}=await G(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(a=l==null?void 0:l.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(s=l==null?void 0:l.channel)!==null&&s!==void 0?s:"sms"}});return{data:{user:null,session:null,messageId:c==null?void 0:c.message_id},error:u}}throw new _l("You must provide either an email or phone number.")}catch(o){if($(o))return{data:{user:null,session:null},error:o};throw o}}async verifyOtp(t){var n,r;try{let i,a;"options"in t&&(i=(n=t.options)===null||n===void 0?void 0:n.redirectTo,a=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:s,error:o}=await G(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:a}}),redirectTo:i,xform:rr});if(o)throw o;if(!s)throw new Error("An error occurred on token verification.");const l=s.session,c=s.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:c,session:l},error:null}}catch(i){if($(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(t){var n,r,i;try{let a=null,s=null;return this.flowType==="pkce"&&([a,s]=await Mi(this.storage,this.storageKey)),await G(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:s}),headers:this.headers,xform:qM})}catch(a){if($(a))return{data:null,error:a};throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new nr;const{error:i}=await G(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:i}})}catch(t){if($(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const n=`${this.url}/resend`;if("email"in t){const{email:r,type:i,options:a}=t,{error:s}=await G(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},redirectTo:a==null?void 0:a.emailRedirectTo});return{data:{user:null,session:null},error:s}}else if("phone"in t){const{phone:r,type:i,options:a}=t,{data:s,error:o}=await G(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return{data:{user:null,session:null,messageId:s==null?void 0:s.message_id},error:o}}throw new _l("You must provide either an email or phone number and a type")}catch(n){if($(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await El(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at*1e3-Date.now()<Rf:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r){if(this.storage.isServer){let s=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,c,u)=>(!s&&c==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),s=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,c,u))})}return{data:{session:t},error:null}}const{session:i,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{session:null},error:a}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:fr}):await this._useSession(async n=>{var r,i,a;const{data:s,error:o}=n;if(o)throw o;return!(!((r=s.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new nr}:await G(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&a!==void 0?a:void 0,xform:fr})})}catch(n){if($(n))return vM(n)&&(await this._removeSession(),await jl(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:i,error:a}=r;if(a)throw a;if(!i.session)throw new nr;const s=i.session;let o=null,l=null;this.flowType==="pkce"&&t.email!=null&&([o,l]=await Mi(this.storage,this.storageKey));const{data:c,error:u}=await G(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:o,code_challenge_method:l}),jwt:s.access_token,xform:fr});if(u)throw u;return s.user=c.user,await this._saveSession(s),await this._notifyAllSubscribers("USER_UPDATED",s),{data:{user:s.user},error:null}})}catch(r){if($(r))return{data:{user:null},error:r};throw r}}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new nr;const n=Date.now()/1e3;let r=n,i=!0,a=null;const{payload:s}=Mf(t.access_token);if(s.exp&&(r=s.exp,i=r<=n),i){const{session:o,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!o)return{data:{user:null,session:null},error:null};a=o}else{const{data:o,error:l}=await this._getUser(t.access_token);if(l)throw l;a={access_token:t.access_token,refresh_token:t.refresh_token,user:o.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return{data:{user:a.user,session:a},error:null}}catch(n){if($(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:s,error:o}=n;if(o)throw o;t=(r=s.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new nr;const{session:i,error:a}=await this._callRefreshToken(t.refresh_token);return a?{data:{user:null,session:null},error:a}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if($(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t,n){try{if(!nn())throw new Tl("No browser detected.");if(t.error||t.error_description||t.error_code)throw new Tl(t.error_description||"Error in URL with unspecified error_description",{error:t.error||"unspecified_error",code:t.error_code||"unspecified_code"});switch(n){case"implicit":if(this.flowType==="pkce")throw new Lv("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Tl("Not a valid implicit grant flow url.");break;default:}if(n==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!t.code)throw new Lv("No code detected.");const{data:y,error:b}=await this._exchangeCodeForSession(t.code);if(b)throw b;const x=new URL(window.location.href);return x.searchParams.delete("code"),window.history.replaceState(window.history.state,"",x.toString()),{data:{session:y.session,redirectType:null},error:null}}const{provider_token:r,provider_refresh_token:i,access_token:a,refresh_token:s,expires_in:o,expires_at:l,token_type:c}=t;if(!a||!o||!s||!c)throw new Tl("No session defined in URL");const u=Math.round(Date.now()/1e3),f=parseInt(o);let h=u+f;l&&(h=parseInt(l));const m=h-u;m*1e3<=Ui&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`);const v=h-f;u-v>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",v,h,u):u-v<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",v,h,u);const{data:w,error:S}=await this._getUser(a);if(S)throw S;const p={provider_token:r,provider_refresh_token:i,access_token:a,expires_in:f,expires_at:h,refresh_token:s,token_type:c,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:p,redirectType:t.type},error:null}}catch(r){if($(r))return{data:{session:null,redirectType:null},error:r};throw r}}_isImplicitGrantCallback(t){return!!(t.access_token||t.error_description)}async _isPKCECallback(t){const n=await El(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:i,error:a}=n;if(a)return{error:a};const s=(r=i.session)===null||r===void 0?void 0:r.access_token;if(s){const{error:o}=await this.admin.signOut(s,t);if(o&&!(yM(o)&&(o.status===404||o.status===401||o.status===403)))return{error:o}}return t!=="others"&&(await this._removeSession(),await jl(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const n=CM(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,i;try{const{data:{session:a},error:s}=n;if(s)throw s;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",t,"session",a)}catch(a){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",a),console.error(a)}})}async resetPasswordForEmail(t,n={}){let r=null,i=null;this.flowType==="pkce"&&([r,i]=await Mi(this.storage,this.storageKey,!0));try{return await G(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(a){if($(a))return{data:null,error:a};throw a}}async getUserIdentities(){var t;try{const{data:n,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(t=n.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(n){if($(n))return{data:null,error:n};throw n}}async linkIdentity(t){var n;try{const{data:r,error:i}=await this._useSession(async a=>{var s,o,l,c,u;const{data:f,error:h}=a;if(h)throw h;const m=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(s=t.options)===null||s===void 0?void 0:s.redirectTo,scopes:(o=t.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await G(this.fetch,"GET",m,{headers:this.headers,jwt:(u=(c=f.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(i)throw i;return nn()&&!(!((n=t.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),{data:{provider:t.provider,url:r==null?void 0:r.url},error:null}}catch(r){if($(r))return{data:{provider:t.provider,url:null},error:r};throw r}}async unlinkIdentity(t){try{return await this._useSession(async n=>{var r,i;const{data:a,error:s}=n;if(s)throw s;return await G(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(i=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0})})}catch(n){if($(n))return{data:null,error:n};throw n}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await OM(async i=>(i>0&&await kM(200*Math.pow(2,i-1)),this._debug(n,"refreshing attempt",i),await G(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:rr})),(i,a)=>{const s=200*Math.pow(2,i);return a&&Of(a)&&Date.now()+s-r<Ui})}catch(r){if(this._debug(n,"error",r),$(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),nn()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await El(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const i=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Rf;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${Rf}s`),i){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(console.error(a),Of(a)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",a),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new nr;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new dd;const{data:a,error:s}=await this._refreshAccessToken(t);if(s)throw s;if(!a.session)throw new nr;await this._saveSession(a.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const o={session:a.session,error:null};return this.refreshingDeferred.resolve(o),o}catch(a){if(this._debug(i,"error",a),$(a)){const s={session:null,error:a};return Of(a)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(s),s}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(a),a}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,n,r=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const a=[],s=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(t,n)}catch(l){a.push(l)}});if(await Promise.all(s),a.length>0){for(let o=0;o<a.length;o+=1)console.error(a[o]);throw a[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await G4(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await jl(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&nn()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Ui);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-t)/Ui);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Ui}ms, refresh threshold is ${Im} ticks`),i<=Im&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof I4)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!nn()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n,r){const i=[`provider=${encodeURIComponent(n)}`];if(r!=null&&r.redirectTo&&i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&i.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[a,s]=await Mi(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(s)}`});i.push(o.toString())}if(r!=null&&r.queryParams){const a=new URLSearchParams(r.queryParams);i.push(a.toString())}return r!=null&&r.skipBrowserRedirect&&i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${t}?${i.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:i,error:a}=n;return a?{data:null,error:a}:await G(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if($(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,i;const{data:a,error:s}=n;if(s)return{data:null,error:s};const o=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:c}=await G(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(r=a==null?void 0:a.session)===null||r===void 0?void 0:r.access_token});return c?{data:null,error:c}:(t.factorType==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if($(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:a}=n;if(a)return{data:null,error:a};const{data:s,error:o}=await G(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return o?{data:null,error:o}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+s.expires_in},s)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",s),{data:s,error:o})})}catch(n){if($(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:a}=n;return a?{data:null,error:a}:await G(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if($(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],i=r.filter(s=>s.factor_type==="totp"&&s.status==="verified"),a=r.filter(s=>s.factor_type==="phone"&&s.status==="verified");return{data:{all:r,totp:i,phone:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:i},error:a}=t;if(a)return{data:null,error:a};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:s}=Mf(i.access_token);let o=null;s.aal&&(o=s.aal);let l=o;((r=(n=i.user.factors)===null||n===void 0?void 0:n.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const u=s.amr||[];return{data:{currentLevel:o,nextLevel:l,currentAuthenticationMethods:u},error:null}}))}async fetchJwk(t,n={keys:[]}){let r=n.keys.find(s=>s.kid===t);if(r||(r=this.jwks.keys.find(s=>s.kid===t),r&&this.jwks_cached_at+pM>Date.now()))return r;const{data:i,error:a}=await G(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;if(!i.keys||i.keys.length===0)throw new Gs("JWKS is empty");if(this.jwks=i,this.jwks_cached_at=Date.now(),r=i.keys.find(s=>s.kid===t),!r)throw new Gs("No matching signing key found in JWKS");return r}async getClaims(t,n={keys:[]}){try{let r=t;if(!r){const{data:m,error:v}=await this.getSession();if(v||!m.session)return{data:null,error:v};r=m.session.access_token}const{header:i,payload:a,signature:s,raw:{header:o,payload:l}}=Mf(r);if(UM(a.exp),!i.kid||i.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:m}=await this.getUser(r);if(m)throw m;return{data:{claims:a,header:i,signature:s},error:null}}const c=NM(i.alg),u=await this.fetchJwk(i.kid,n),f=await crypto.subtle.importKey("jwk",u,c,!0,["verify"]);if(!await crypto.subtle.verify(c,f,s,EM(`${o}.${l}`)))throw new Gs("Invalid JWT signature");return{data:{claims:a,header:i,signature:s},error:null}}catch(r){if($(r))return{data:null,error:r};throw r}}}So.nextInstanceID=0;const tD=So;class nD extends tD{constructor(t){super(t)}}var rD=function(e,t,n,r){function i(a){return a instanceof n?a:new n(function(s){s(a)})}return new(n||(n=Promise))(function(a,s){function o(u){try{c(r.next(u))}catch(f){s(f)}}function l(u){try{c(r.throw(u))}catch(f){s(f)}}function c(u){u.done?a(u.value):i(u.value).then(o,l)}c((r=r.apply(e,t||[])).next())})};class iD{constructor(t,n,r){var i,a,s;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const o=cM(t);this.realtimeUrl=`${o}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${o}/auth/v1`,this.storageUrl=`${o}/storage/v1`,this.functionsUrl=`${o}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,c={db:tM,realtime:rM,auth:Object.assign(Object.assign({},nM),{storageKey:l}),global:eM},u=uM(r??{},c);this.storageKey=(i=u.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(a=u.global.headers)!==null&&a!==void 0?a:{},u.accessToken?(this.accessToken=u.accessToken,this.auth=new Proxy({},{get:(f,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((s=u.auth)!==null&&s!==void 0?s:{},this.headers,u.global.fetch),this.fetch=oM(n,this._getAccessToken.bind(this),u.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},u.realtime)),this.rest=new S9(`${o}/rest/v1`,{headers:this.headers,schema:u.db.schema,fetch:this.fetch}),u.accessToken||this._listenForAuthEvents()}get functions(){return new JO(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new Z9(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r={}){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return rD(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,storageKey:a,flowType:s,lock:o,debug:l},c,u){const f={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new nD({url:this.authUrl,headers:Object.assign(Object.assign({},f),c),storageKey:a,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,flowType:s,lock:o,debug:l,fetch:u,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(t){return new B9(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?this.changedAccessToken=r:t==="SIGNED_OUT"&&(this.realtime.setAuth(),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const aD=(e,t,n)=>new iD(e,t,n),sD="https://fvzrcvlhosiymqfsxooz.supabase.co",oD="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2enJjdmxob3NpeW1xZnN4b296Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjI2ODMsImV4cCI6MjA2MTAzODY4M30.aII7jrtTqDABSp4mm7kUNK9eQkrw2qU2TEbtaRtt--c",Yo=aD(sD,oD),lD=()=>{try{const e=localStorage.getItem("favorites");return e?JSON.parse(e):[]}catch(e){return console.error("Error loading favorites from localStorage:",e),[]}},cD=()=>{try{const e=localStorage.getItem("userPreferences");return e?JSON.parse(e):{theme:"light"}}catch(e){return console.error("Error loading user preferences from localStorage:",e),{theme:"light"}}},uD=()=>{try{const e=localStorage.getItem("mealPlan");return e?JSON.parse(e):[]}catch(e){return console.error("Error loading meal plan from localStorage:",e),[]}},dD={user:null,isAuthenticated:!1,favorites:lD(),mealPlan:uD(),preferences:cD(),status:"idle",error:null,emailVerified:!1,verificationEmailSent:!1},vc=Vt("user/registerUser",async({email:e,password:t,name:n},{rejectWithValue:r})=>{var i;try{const{data:a,error:s}=await Yo.auth.signUp({email:e,password:t,options:{data:{name:n},emailRedirectTo:window.location.origin+"/verify-email"}});if(s)return r(s.message);const o=!a.session;return{id:a.user.id,email:a.user.email,name:((i=a.user.user_metadata)==null?void 0:i.name)||"",requiresEmailConfirmation:o}}catch(a){return r(a.message)}}),Df=Vt("user/verifyEmail",async(e,{rejectWithValue:t})=>{try{const{data:n,error:r}=await Yo.auth.verifyOtp({token_hash:e,type:"email"});return r?t(r.message):n}catch(n){return t(n.message)}}),fD=Vt("user/resendVerification",async(e,{rejectWithValue:t})=>{try{const{error:n}=await Yo.auth.resend({type:"signup",email:e,options:{emailRedirectTo:window.location.origin+"/verify-email"}});return n?t(n.message):!0}catch(n){return t(n.message)}}),bc=Vt("user/loginUser",async({email:e,password:t},{rejectWithValue:n})=>{var a;const{data:r,error:i}=await Yo.auth.signInWithPassword({email:e,password:t});return i?n(i.message):(console.log(r),{id:r.user.id,email:r.user.email,name:((a=r.user.user_metadata)==null?void 0:a.name)||""})}),qv=Vt("user/logoutUser",async(e,{rejectWithValue:t})=>{const{error:n}=await Yo.auth.signOut();return n?t(n.message):!0}),Y4=Jg({name:"user",initialState:dD,reducers:{login:(e,t)=>{e.user=t.payload,e.isAuthenticated=!0,e.status="succeeded",e.error=null},logout:e=>{e.user=null,e.isAuthenticated=!1},addToFavorites:(e,t)=>{e.favorites.some(r=>r.idMeal===t.payload.idMeal)||(e.favorites.push(t.payload),localStorage.setItem("favorites",JSON.stringify(e.favorites)))},removeFromFavorites:(e,t)=>{e.favorites=e.favorites.filter(n=>n.idMeal!==t.payload),localStorage.setItem("favorites",JSON.stringify(e.favorites))},addToMealPlan:(e,t)=>{const{day:n,meal:r,recipe:i}=t.payload,a=e.mealPlan.findIndex(s=>s.day===n);if(a>=0)e.mealPlan[a][r]=i;else{const s={day:n,breakfast:null,lunch:null,dinner:null};s[r]=i,e.mealPlan.push(s)}e.mealPlan.sort((s,o)=>new Date(s.day)-new Date(o.day)),localStorage.setItem("mealPlan",JSON.stringify(e.mealPlan))},removeFromMealPlan:(e,t)=>{const{day:n,meal:r}=t.payload,i=e.mealPlan.findIndex(a=>a.day===n);i>=0&&(e.mealPlan[i][r]=null,!e.mealPlan[i].breakfast&&!e.mealPlan[i].lunch&&!e.mealPlan[i].dinner&&e.mealPlan.splice(i,1),localStorage.setItem("mealPlan",JSON.stringify(e.mealPlan)))},clearMealPlan:e=>{e.mealPlan=[],localStorage.removeItem("mealPlan")},setTheme:(e,t)=>{e.preferences.theme=t.payload,localStorage.setItem("userPreferences",JSON.stringify(e.preferences))},updateUserPreferences:(e,t)=>{e.preferences={...e.preferences,...t.payload},localStorage.setItem("userPreferences",JSON.stringify(e.preferences))},setEmailVerified:(e,t)=>{e.emailVerified=t.payload},setVerificationEmailSent:(e,t)=>{e.verificationEmailSent=t.payload}},extraReducers:e=>{e.addCase(vc.pending,t=>{t.status="loading",t.error=null}).addCase(vc.fulfilled,(t,n)=>{t.status="succeeded",n.payload.requiresEmailConfirmation?(t.verificationEmailSent=!0,t.emailVerified=!1):(t.user=n.payload,t.isAuthenticated=!0,t.emailVerified=!0),t.error=null}).addCase(vc.rejected,(t,n)=>{t.status="failed",t.error=n.payload||"Registration failed"}).addCase(Df.pending,t=>{t.status="loading"}).addCase(Df.fulfilled,t=>{t.status="succeeded",t.emailVerified=!0,t.verificationEmailSent=!1}).addCase(Df.rejected,(t,n)=>{t.status="failed",t.error=n.payload||"Email verification failed"}).addCase(fD.fulfilled,t=>{t.verificationEmailSent=!0}).addCase(bc.pending,t=>{t.status="loading",t.error=null}).addCase(bc.fulfilled,(t,n)=>{t.user=n.payload,t.isAuthenticated=!0,t.emailVerified=!0,t.status="succeeded",t.error=null}).addCase(bc.rejected,(t,n)=>{t.status="failed",t.error=n.payload||"Login failed"}).addCase(qv.fulfilled,t=>{t.user=null,t.isAuthenticated=!1,t.status="idle",t.error=null}).addCase(qv.rejected,(t,n)=>{t.status="failed",t.error=n.payload||"Logout failed"})}}),{login:OV,logout:hD,addToFavorites:mD,removeFromFavorites:pD,addToMealPlan:gD,removeFromMealPlan:K4,clearMealPlan:yD,setTheme:X4,updateUserPreferences:MV,setEmailVerified:DV,setVerificationEmailSent:zV}=Y4.actions,vD=e=>e.user.user,Q4=e=>e.user.isAuthenticated,i0=e=>e.user.favorites,Z4=e=>e.user.mealPlan,a0=e=>e.user.preferences.theme,bD=Y4.reducer,xD=()=>{const e=et(),t=Yn(),n=le(a0),r=()=>{e(X4(n==="light"?"dark":"light"))},i=()=>{e(MO())},a=()=>{e(S4())};return d.jsx(wD,{children:d.jsxs(SD,{children:[d.jsxs(_D,{children:[d.jsx(ED,{onClick:i,children:d.jsx(Sk,{})}),d.jsx(Ce,{to:"/",children:d.jsxs(TD,{children:[d.jsx("span",{className:"primary",children:"Tasty"}),"Recipes"]})})]}),d.jsxs(jD,{children:[d.jsx(zf,{to:"/categories",children:"Categories"}),d.jsx(zf,{to:"/popular",children:"Popular"}),d.jsx(zf,{to:"/latest",children:"Latest"})]}),d.jsxs(CD,{children:[d.jsx(cs,{onClick:a,"aria-label":"Search recipes",children:d.jsx(Aa,{})}),d.jsx(cs,{onClick:()=>t("/favorites"),"aria-label":"Favorite recipes",children:d.jsx(Kn,{})}),d.jsx(cs,{onClick:()=>t("/meal-planner"),"aria-label":"Meal planner",children:d.jsx(Ga,{})}),d.jsx(cs,{onClick:()=>t("/profile"),"aria-label":"User profile",children:d.jsx(bo,{})}),d.jsx(cs,{onClick:r,"aria-label":"Toggle theme",children:n==="light"?d.jsx(i4,{}):d.jsx(l4,{})})]})]})})},wD=g.header`
  background-color: var(--color-card-bg);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color var(--transition-normal);
`,SD=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,_D=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,TD=g.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text);

  .primary {
    color: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,ED=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`,jD=g.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,zf=g(Ce)`
  color: var(--color-text);
  font-weight: 500;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-normal);
  }

  &:hover:after,
  &.active:after {
    width: 100%;
  }
`,CD=g.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`,cs=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background-color: var(--color-primary-light);
    color: white;
  }
`,AD=()=>{const e=new Date().getFullYear();return d.jsxs(RD,{children:[d.jsxs(kD,{children:[d.jsxs(Cl,{children:[d.jsxs(OD,{children:[d.jsx("span",{className:"primary",children:"Tasty"}),"Recipes"]}),d.jsx(MD,{children:"Discover delicious recipes from around the world. Search, save, and share your favorite meals."}),d.jsxs(DD,{children:[d.jsx(Lf,{href:"https://github.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(bk,{})}),d.jsx(Lf,{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(wk,{})}),d.jsx(Lf,{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",children:d.jsx(xk,{})})]})]}),d.jsxs(Cl,{children:[d.jsx(Pf,{children:"Quick Links"}),d.jsxs(Bf,{children:[d.jsx(jt,{to:"/",children:"Home"}),d.jsx(jt,{to:"/categories",children:"Categories"}),d.jsx(jt,{to:"/popular",children:"Popular Recipes"}),d.jsx(jt,{to:"/latest",children:"Latest Recipes"})]})]}),d.jsxs(Cl,{children:[d.jsx(Pf,{children:"Categories"}),d.jsxs(Bf,{children:[d.jsx(jt,{to:"/category/Breakfast",children:"Breakfast"}),d.jsx(jt,{to:"/category/Lunch",children:"Lunch"}),d.jsx(jt,{to:"/category/Dinner",children:"Dinner"}),d.jsx(jt,{to:"/category/Dessert",children:"Dessert"})]})]}),d.jsxs(Cl,{children:[d.jsx(Pf,{children:"Help & Support"}),d.jsxs(Bf,{children:[d.jsx(jt,{to:"/about",children:"About Us"}),d.jsx(jt,{to:"/contact",children:"Contact Us"}),d.jsx(jt,{to:"/privacy",children:"Privacy Policy"}),d.jsx(jt,{to:"/terms",children:"Terms of Service"})]})]})]}),d.jsxs(zD,{children:[d.jsxs(LD,{children:["© ",e," TastyRecipes. All rights reserved."]}),d.jsxs(PD,{children:["Made with ",d.jsx(Kn,{className:"heart"})," using React"]})]})]})},RD=g.footer`
  background-color: var(--color-card-bg);
  color: var(--color-text);
  padding: 3rem 0 1.5rem;
  margin-top: 4rem;
  border-top: 1px solid var(--color-border);
`,kD=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Cl=g.div`
  display: flex;
  flex-direction: column;
`,OD=g.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  .primary {
    color: var(--color-primary);
  }
`,MD=g.p`
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  line-height: 1.6;
`,DD=g.div`
  display: flex;
  gap: 1rem;
`,Lf=g.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-background);
  color: var(--color-text);
  font-size: 1.2rem;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
    transform: translateY(-3px);
  }
`,Pf=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--color-primary);
  }
`,Bf=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`,jt=g(Ce)`
  color: var(--color-text-light);
  font-size: 0.875rem;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    padding-left: 5px;
  }
`,zD=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
  border-top: 1px solid var(--color-border);
  margin-top: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`,LD=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`,PD=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  .heart {
    color: var(--color-primary);
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;function BD(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M12 3 4 9v12h16V9l-8-6zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1v3zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2V18z"},child:[]}]})(e)}function UD(e){return P({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5 7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"},child:[]}]})(e)}function J4(e,t){return function(){return e.apply(t,arguments)}}const{toString:ND}=Object.prototype,{getPrototypeOf:s0}=Object,fd=(e=>t=>{const n=ND.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Jt=e=>(e=e.toLowerCase(),t=>fd(t)===e),hd=e=>t=>typeof t===e,{isArray:Ka}=Array,_o=hd("undefined");function $D(e){return e!==null&&!_o(e)&&e.constructor!==null&&!_o(e.constructor)&&bt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const W4=Jt("ArrayBuffer");function VD(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&W4(e.buffer),t}const HD=hd("string"),bt=hd("function"),e5=hd("number"),md=e=>e!==null&&typeof e=="object",FD=e=>e===!0||e===!1,xc=e=>{if(fd(e)!=="object")return!1;const t=s0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},qD=Jt("Date"),GD=Jt("File"),ID=Jt("Blob"),YD=Jt("FileList"),KD=e=>md(e)&&bt(e.pipe),XD=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||bt(e.append)&&((t=fd(e))==="formdata"||t==="object"&&bt(e.toString)&&e.toString()==="[object FormData]"))},QD=Jt("URLSearchParams"),[ZD,JD,WD,ez]=["ReadableStream","Request","Response","Headers"].map(Jt),tz=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ko(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Ka(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),s=a.length;let o;for(r=0;r<s;r++)o=a[r],t.call(null,e[o],o,e)}}function t5(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const Jr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,n5=e=>!_o(e)&&e!==Jr;function Xm(){const{caseless:e}=n5(this)&&this||{},t={},n=(r,i)=>{const a=e&&t5(t,i)||i;xc(t[a])&&xc(r)?t[a]=Xm(t[a],r):xc(r)?t[a]=Xm({},r):Ka(r)?t[a]=r.slice():t[a]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ko(arguments[r],n);return t}const nz=(e,t,n,{allOwnKeys:r}={})=>(Ko(t,(i,a)=>{n&&bt(i)?e[a]=J4(i,n):e[a]=i},{allOwnKeys:r}),e),rz=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),iz=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},az=(e,t,n,r)=>{let i,a,s;const o={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-- >0;)s=i[a],(!r||r(s,e,t))&&!o[s]&&(t[s]=e[s],o[s]=!0);e=n!==!1&&s0(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},sz=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},oz=e=>{if(!e)return null;if(Ka(e))return e;let t=e.length;if(!e5(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},lz=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&s0(Uint8Array)),cz=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const a=i.value;t.call(e,a[0],a[1])}},uz=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},dz=Jt("HTMLFormElement"),fz=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hz=Jt("RegExp"),r5=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Ko(n,(i,a)=>{let s;(s=t(i,a,e))!==!1&&(r[a]=s||i)}),Object.defineProperties(e,r)},mz=e=>{r5(e,(t,n)=>{if(bt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(bt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},pz=(e,t)=>{const n={},r=i=>{i.forEach(a=>{n[a]=!0})};return Ka(e)?r(e):r(String(e).split(t)),n},gz=()=>{},yz=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function vz(e){return!!(e&&bt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const bz=e=>{const t=new Array(10),n=(r,i)=>{if(md(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const a=Ka(r)?[]:{};return Ko(r,(s,o)=>{const l=n(s,i+1);!_o(l)&&(a[o]=l)}),t[i]=void 0,a}}return r};return n(e,0)},xz=Jt("AsyncFunction"),wz=e=>e&&(md(e)||bt(e))&&bt(e.then)&&bt(e.catch),i5=((e,t)=>e?setImmediate:t?((n,r)=>(Jr.addEventListener("message",({source:i,data:a})=>{i===Jr&&a===n&&r.length&&r.shift()()},!1),i=>{r.push(i),Jr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",bt(Jr.postMessage)),Sz=typeof queueMicrotask<"u"?queueMicrotask.bind(Jr):typeof process<"u"&&process.nextTick||i5,C={isArray:Ka,isArrayBuffer:W4,isBuffer:$D,isFormData:XD,isArrayBufferView:VD,isString:HD,isNumber:e5,isBoolean:FD,isObject:md,isPlainObject:xc,isReadableStream:ZD,isRequest:JD,isResponse:WD,isHeaders:ez,isUndefined:_o,isDate:qD,isFile:GD,isBlob:ID,isRegExp:hz,isFunction:bt,isStream:KD,isURLSearchParams:QD,isTypedArray:lz,isFileList:YD,forEach:Ko,merge:Xm,extend:nz,trim:tz,stripBOM:rz,inherits:iz,toFlatObject:az,kindOf:fd,kindOfTest:Jt,endsWith:sz,toArray:oz,forEachEntry:cz,matchAll:uz,isHTMLForm:dz,hasOwnProperty:Gv,hasOwnProp:Gv,reduceDescriptors:r5,freezeMethods:mz,toObjectSet:pz,toCamelCase:fz,noop:gz,toFiniteNumber:yz,findKey:t5,global:Jr,isContextDefined:n5,isSpecCompliantForm:vz,toJSONObject:bz,isAsyncFn:xz,isThenable:wz,setImmediate:i5,asap:Sz};function U(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}C.inherits(U,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:C.toJSONObject(this.config),code:this.code,status:this.status}}});const a5=U.prototype,s5={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{s5[e]={value:e}});Object.defineProperties(U,s5);Object.defineProperty(a5,"isAxiosError",{value:!0});U.from=(e,t,n,r,i,a)=>{const s=Object.create(a5);return C.toFlatObject(e,s,function(l){return l!==Error.prototype},o=>o!=="isAxiosError"),U.call(s,e.message,t,n,r,i),s.cause=e,s.name=e.name,a&&Object.assign(s,a),s};const _z=null;function Qm(e){return C.isPlainObject(e)||C.isArray(e)}function o5(e){return C.endsWith(e,"[]")?e.slice(0,-2):e}function Iv(e,t,n){return e?e.concat(t).map(function(i,a){return i=o5(i),!n&&a?"["+i+"]":i}).join(n?".":""):t}function Tz(e){return C.isArray(e)&&!e.some(Qm)}const Ez=C.toFlatObject(C,{},null,function(t){return/^is[A-Z]/.test(t)});function pd(e,t,n){if(!C.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=C.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!C.isUndefined(S[w])});const r=n.metaTokens,i=n.visitor||u,a=n.dots,s=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&C.isSpecCompliantForm(t);if(!C.isFunction(i))throw new TypeError("visitor must be a function");function c(v){if(v===null)return"";if(C.isDate(v))return v.toISOString();if(!l&&C.isBlob(v))throw new U("Blob is not supported. Use a Buffer instead.");return C.isArrayBuffer(v)||C.isTypedArray(v)?l&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function u(v,w,S){let p=v;if(v&&!S&&typeof v=="object"){if(C.endsWith(w,"{}"))w=r?w:w.slice(0,-2),v=JSON.stringify(v);else if(C.isArray(v)&&Tz(v)||(C.isFileList(v)||C.endsWith(w,"[]"))&&(p=C.toArray(v)))return w=o5(w),p.forEach(function(b,x){!(C.isUndefined(b)||b===null)&&t.append(s===!0?Iv([w],x,a):s===null?w:w+"[]",c(b))}),!1}return Qm(v)?!0:(t.append(Iv(S,w,a),c(v)),!1)}const f=[],h=Object.assign(Ez,{defaultVisitor:u,convertValue:c,isVisitable:Qm});function m(v,w){if(!C.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(v),C.forEach(v,function(p,y){(!(C.isUndefined(p)||p===null)&&i.call(t,p,C.isString(y)?y.trim():y,w,h))===!0&&m(p,w?w.concat(y):[y])}),f.pop()}}if(!C.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Yv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function o0(e,t){this._pairs=[],e&&pd(e,this,t)}const l5=o0.prototype;l5.append=function(t,n){this._pairs.push([t,n])};l5.toString=function(t){const n=t?function(r){return t.call(this,r,Yv)}:Yv;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function jz(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function c5(e,t,n){if(!t)return e;const r=n&&n.encode||jz;C.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let a;if(i?a=i(t,n):a=C.isURLSearchParams(t)?t.toString():new o0(t,n).toString(r),a){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Kv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){C.forEach(this.handlers,function(r){r!==null&&t(r)})}}const u5={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Cz=typeof URLSearchParams<"u"?URLSearchParams:o0,Az=typeof FormData<"u"?FormData:null,Rz=typeof Blob<"u"?Blob:null,kz={isBrowser:!0,classes:{URLSearchParams:Cz,FormData:Az,Blob:Rz},protocols:["http","https","file","blob","url","data"]},l0=typeof window<"u"&&typeof document<"u",Zm=typeof navigator=="object"&&navigator||void 0,Oz=l0&&(!Zm||["ReactNative","NativeScript","NS"].indexOf(Zm.product)<0),Mz=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Dz=l0&&window.location.href||"http://localhost",zz=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:l0,hasStandardBrowserEnv:Oz,hasStandardBrowserWebWorkerEnv:Mz,navigator:Zm,origin:Dz},Symbol.toStringTag,{value:"Module"})),qe={...zz,...kz};function Lz(e,t){return pd(e,new qe.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,a){return qe.isNode&&C.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function Pz(e){return C.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Bz(e){const t={},n=Object.keys(e);let r;const i=n.length;let a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function d5(e){function t(n,r,i,a){let s=n[a++];if(s==="__proto__")return!0;const o=Number.isFinite(+s),l=a>=n.length;return s=!s&&C.isArray(i)?i.length:s,l?(C.hasOwnProp(i,s)?i[s]=[i[s],r]:i[s]=r,!o):((!i[s]||!C.isObject(i[s]))&&(i[s]=[]),t(n,r,i[s],a)&&C.isArray(i[s])&&(i[s]=Bz(i[s])),!o)}if(C.isFormData(e)&&C.isFunction(e.entries)){const n={};return C.forEachEntry(e,(r,i)=>{t(Pz(r),i,n,0)}),n}return null}function Uz(e,t,n){if(C.isString(e))try{return(t||JSON.parse)(e),C.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Xo={transitional:u5,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,a=C.isObject(t);if(a&&C.isHTMLForm(t)&&(t=new FormData(t)),C.isFormData(t))return i?JSON.stringify(d5(t)):t;if(C.isArrayBuffer(t)||C.isBuffer(t)||C.isStream(t)||C.isFile(t)||C.isBlob(t)||C.isReadableStream(t))return t;if(C.isArrayBufferView(t))return t.buffer;if(C.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Lz(t,this.formSerializer).toString();if((o=C.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return pd(o?{"files[]":t}:t,l&&new l,this.formSerializer)}}return a||i?(n.setContentType("application/json",!1),Uz(t)):t}],transformResponse:[function(t){const n=this.transitional||Xo.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(C.isResponse(t)||C.isReadableStream(t))return t;if(t&&C.isString(t)&&(r&&!this.responseType||i)){const s=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(o){if(s)throw o.name==="SyntaxError"?U.from(o,U.ERR_BAD_RESPONSE,this,null,this.response):o}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:qe.classes.FormData,Blob:qe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};C.forEach(["delete","get","head","post","put","patch"],e=>{Xo.headers[e]={}});const Nz=C.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),$z=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),n=s.substring(0,i).trim().toLowerCase(),r=s.substring(i+1).trim(),!(!n||t[n]&&Nz[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xv=Symbol("internals");function us(e){return e&&String(e).trim().toLowerCase()}function wc(e){return e===!1||e==null?e:C.isArray(e)?e.map(wc):String(e)}function Vz(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Hz=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Uf(e,t,n,r,i){if(C.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!C.isString(t)){if(C.isString(r))return t.indexOf(r)!==-1;if(C.isRegExp(r))return r.test(t)}}function Fz(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function qz(e,t){const n=C.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,a,s){return this[r].call(this,t,i,a,s)},configurable:!0})})}let st=class{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function a(o,l,c){const u=us(l);if(!u)throw new Error("header name must be a non-empty string");const f=C.findKey(i,u);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||l]=wc(o))}const s=(o,l)=>C.forEach(o,(c,u)=>a(c,u,l));if(C.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(C.isString(t)&&(t=t.trim())&&!Hz(t))s($z(t),n);else if(C.isHeaders(t))for(const[o,l]of t.entries())a(l,o,r);else t!=null&&a(n,t,r);return this}get(t,n){if(t=us(t),t){const r=C.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Vz(i);if(C.isFunction(n))return n.call(this,i,r);if(C.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=us(t),t){const r=C.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Uf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function a(s){if(s=us(s),s){const o=C.findKey(r,s);o&&(!n||Uf(r,r[o],o,n))&&(delete r[o],i=!0)}}return C.isArray(t)?t.forEach(a):a(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const a=n[r];(!t||Uf(this,this[a],a,t,!0))&&(delete this[a],i=!0)}return i}normalize(t){const n=this,r={};return C.forEach(this,(i,a)=>{const s=C.findKey(r,a);if(s){n[s]=wc(i),delete n[a];return}const o=t?Fz(a):String(a).trim();o!==a&&delete n[a],n[o]=wc(i),r[o]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return C.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&C.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Xv]=this[Xv]={accessors:{}}).accessors,i=this.prototype;function a(s){const o=us(s);r[o]||(qz(i,s),r[o]=!0)}return C.isArray(t)?t.forEach(a):a(t),this}};st.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);C.reduceDescriptors(st.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});C.freezeMethods(st);function Nf(e,t){const n=this||Xo,r=t||n,i=st.from(r.headers);let a=r.data;return C.forEach(e,function(o){a=o.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function f5(e){return!!(e&&e.__CANCEL__)}function Xa(e,t,n){U.call(this,e??"canceled",U.ERR_CANCELED,t,n),this.name="CanceledError"}C.inherits(Xa,U,{__CANCEL__:!0});function h5(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new U("Request failed with status code "+n.status,[U.ERR_BAD_REQUEST,U.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Gz(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Iz(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,a=0,s;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),u=r[a];s||(s=c),n[i]=l,r[i]=c;let f=a,h=0;for(;f!==i;)h+=n[f++],f=f%e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-s<t)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function Yz(e,t){let n=0,r=1e3/t,i,a;const s=(c,u=Date.now())=>{n=u,i=null,a&&(clearTimeout(a),a=null),e.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=r?s(c,u):(i=c,a||(a=setTimeout(()=>{a=null,s(i)},r-f)))},()=>i&&s(i)]}const _u=(e,t,n=3)=>{let r=0;const i=Iz(50,250);return Yz(a=>{const s=a.loaded,o=a.lengthComputable?a.total:void 0,l=s-r,c=i(l),u=s<=o;r=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:a,lengthComputable:o!=null,[t?"download":"upload"]:!0};e(f)},n)},Qv=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Zv=e=>(...t)=>C.asap(()=>e(...t)),Kz=qe.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,qe.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(qe.origin),qe.navigator&&/(msie|trident)/i.test(qe.navigator.userAgent)):()=>!0,Xz=qe.hasStandardBrowserEnv?{write(e,t,n,r,i,a){const s=[e+"="+encodeURIComponent(t)];C.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),C.isString(r)&&s.push("path="+r),C.isString(i)&&s.push("domain="+i),a===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Qz(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Zz(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function m5(e,t,n){let r=!Qz(t);return e&&(r||n==!1)?Zz(e,t):t}const Jv=e=>e instanceof st?{...e}:e;function pi(e,t){t=t||{};const n={};function r(c,u,f,h){return C.isPlainObject(c)&&C.isPlainObject(u)?C.merge.call({caseless:h},c,u):C.isPlainObject(u)?C.merge({},u):C.isArray(u)?u.slice():u}function i(c,u,f,h){if(C.isUndefined(u)){if(!C.isUndefined(c))return r(void 0,c,f,h)}else return r(c,u,f,h)}function a(c,u){if(!C.isUndefined(u))return r(void 0,u)}function s(c,u){if(C.isUndefined(u)){if(!C.isUndefined(c))return r(void 0,c)}else return r(void 0,u)}function o(c,u,f){if(f in t)return r(c,u);if(f in e)return r(void 0,c)}const l={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:o,headers:(c,u,f)=>i(Jv(c),Jv(u),f,!0)};return C.forEach(Object.keys(Object.assign({},e,t)),function(u){const f=l[u]||i,h=f(e[u],t[u],u);C.isUndefined(h)&&f!==o||(n[u]=h)}),n}const p5=e=>{const t=pi({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:i,xsrfCookieName:a,headers:s,auth:o}=t;t.headers=s=st.from(s),t.url=c5(m5(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),o&&s.set("Authorization","Basic "+btoa((o.username||"")+":"+(o.password?unescape(encodeURIComponent(o.password)):"")));let l;if(C.isFormData(n)){if(qe.hasStandardBrowserEnv||qe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((l=s.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([c||"multipart/form-data",...u].join("; "))}}if(qe.hasStandardBrowserEnv&&(r&&C.isFunction(r)&&(r=r(t)),r||r!==!1&&Kz(t.url))){const c=i&&a&&Xz.read(a);c&&s.set(i,c)}return t},Jz=typeof XMLHttpRequest<"u",Wz=Jz&&function(e){return new Promise(function(n,r){const i=p5(e);let a=i.data;const s=st.from(i.headers).normalize();let{responseType:o,onUploadProgress:l,onDownloadProgress:c}=i,u,f,h,m,v;function w(){m&&m(),v&&v(),i.cancelToken&&i.cancelToken.unsubscribe(u),i.signal&&i.signal.removeEventListener("abort",u)}let S=new XMLHttpRequest;S.open(i.method.toUpperCase(),i.url,!0),S.timeout=i.timeout;function p(){if(!S)return;const b=st.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),T={data:!o||o==="text"||o==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:b,config:e,request:S};h5(function(E){n(E),w()},function(E){r(E),w()},T),S=null}"onloadend"in S?S.onloadend=p:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(p)},S.onabort=function(){S&&(r(new U("Request aborted",U.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new U("Network Error",U.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let x=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const T=i.transitional||u5;i.timeoutErrorMessage&&(x=i.timeoutErrorMessage),r(new U(x,T.clarifyTimeoutError?U.ETIMEDOUT:U.ECONNABORTED,e,S)),S=null},a===void 0&&s.setContentType(null),"setRequestHeader"in S&&C.forEach(s.toJSON(),function(x,T){S.setRequestHeader(T,x)}),C.isUndefined(i.withCredentials)||(S.withCredentials=!!i.withCredentials),o&&o!=="json"&&(S.responseType=i.responseType),c&&([h,v]=_u(c,!0),S.addEventListener("progress",h)),l&&S.upload&&([f,m]=_u(l),S.upload.addEventListener("progress",f),S.upload.addEventListener("loadend",m)),(i.cancelToken||i.signal)&&(u=b=>{S&&(r(!b||b.type?new Xa(null,e,S):b),S.abort(),S=null)},i.cancelToken&&i.cancelToken.subscribe(u),i.signal&&(i.signal.aborted?u():i.signal.addEventListener("abort",u)));const y=Gz(i.url);if(y&&qe.protocols.indexOf(y)===-1){r(new U("Unsupported protocol "+y+":",U.ERR_BAD_REQUEST,e));return}S.send(a||null)})},eL=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,i;const a=function(c){if(!i){i=!0,o();const u=c instanceof Error?c:this.reason;r.abort(u instanceof U?u:new Xa(u instanceof Error?u.message:u))}};let s=t&&setTimeout(()=>{s=null,a(new U(`timeout ${t} of ms exceeded`,U.ETIMEDOUT))},t);const o=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(a):c.removeEventListener("abort",a)}),e=null)};e.forEach(c=>c.addEventListener("abort",a));const{signal:l}=r;return l.unsubscribe=()=>C.asap(o),l}},tL=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},nL=async function*(e,t){for await(const n of rL(e))yield*tL(n,t)},rL=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Wv=(e,t,n,r)=>{const i=nL(e,t);let a=0,s,o=l=>{s||(s=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await i.next();if(c){o(),l.close();return}let f=u.byteLength;if(n){let h=a+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw o(c),c}},cancel(l){return o(l),i.return()}},{highWaterMark:2})},gd=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",g5=gd&&typeof ReadableStream=="function",iL=gd&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),y5=(e,...t)=>{try{return!!e(...t)}catch{return!1}},aL=g5&&y5(()=>{let e=!1;const t=new Request(qe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),eb=64*1024,Jm=g5&&y5(()=>C.isReadableStream(new Response("").body)),Tu={stream:Jm&&(e=>e.body)};gd&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Tu[t]&&(Tu[t]=C.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new U(`Response type '${t}' is not supported`,U.ERR_NOT_SUPPORT,r)})})})(new Response);const sL=async e=>{if(e==null)return 0;if(C.isBlob(e))return e.size;if(C.isSpecCompliantForm(e))return(await new Request(qe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(C.isArrayBufferView(e)||C.isArrayBuffer(e))return e.byteLength;if(C.isURLSearchParams(e)&&(e=e+""),C.isString(e))return(await iL(e)).byteLength},oL=async(e,t)=>{const n=C.toFiniteNumber(e.getContentLength());return n??sL(t)},lL=gd&&(async e=>{let{url:t,method:n,data:r,signal:i,cancelToken:a,timeout:s,onDownloadProgress:o,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:h}=p5(e);c=c?(c+"").toLowerCase():"text";let m=eL([i,a&&a.toAbortSignal()],s),v;const w=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let S;try{if(l&&aL&&n!=="get"&&n!=="head"&&(S=await oL(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(C.isFormData(r)&&(j=T.headers.get("content-type"))&&u.setContentType(j),T.body){const[E,A]=Qv(S,_u(Zv(l)));r=Wv(T.body,eb,E,A)}}C.isString(f)||(f=f?"include":"omit");const p="credentials"in Request.prototype;v=new Request(t,{...h,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:p?f:void 0});let y=await fetch(v);const b=Jm&&(c==="stream"||c==="response");if(Jm&&(o||b&&w)){const T={};["status","statusText","headers"].forEach(O=>{T[O]=y[O]});const j=C.toFiniteNumber(y.headers.get("content-length")),[E,A]=o&&Qv(j,_u(Zv(o),!0))||[];y=new Response(Wv(y.body,eb,E,()=>{A&&A(),w&&w()}),T)}c=c||"text";let x=await Tu[C.findKey(Tu,c)||"text"](y,e);return!b&&w&&w(),await new Promise((T,j)=>{h5(T,j,{data:x,headers:st.from(y.headers),status:y.status,statusText:y.statusText,config:e,request:v})})}catch(p){throw w&&w(),p&&p.name==="TypeError"&&/fetch/i.test(p.message)?Object.assign(new U("Network Error",U.ERR_NETWORK,e,v),{cause:p.cause||p}):U.from(p,p&&p.code,e,v)}}),Wm={http:_z,xhr:Wz,fetch:lL};C.forEach(Wm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const tb=e=>`- ${e}`,cL=e=>C.isFunction(e)||e===null||e===!1,v5={getAdapter:e=>{e=C.isArray(e)?e:[e];const{length:t}=e;let n,r;const i={};for(let a=0;a<t;a++){n=e[a];let s;if(r=n,!cL(n)&&(r=Wm[(s=String(n)).toLowerCase()],r===void 0))throw new U(`Unknown adapter '${s}'`);if(r)break;i[s||"#"+a]=r}if(!r){const a=Object.entries(i).map(([o,l])=>`adapter ${o} `+(l===!1?"is not supported by the environment":"is not available in the build"));let s=t?a.length>1?`since :
`+a.map(tb).join(`
`):" "+tb(a[0]):"as no adapter specified";throw new U("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:Wm};function $f(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Xa(null,e)}function nb(e){return $f(e),e.headers=st.from(e.headers),e.data=Nf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),v5.getAdapter(e.adapter||Xo.adapter)(e).then(function(r){return $f(e),r.data=Nf.call(e,e.transformResponse,r),r.headers=st.from(r.headers),r},function(r){return f5(r)||($f(e),r&&r.response&&(r.response.data=Nf.call(e,e.transformResponse,r.response),r.response.headers=st.from(r.response.headers))),Promise.reject(r)})}const b5="1.8.4",yd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{yd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const rb={};yd.transitional=function(t,n,r){function i(a,s){return"[Axios v"+b5+"] Transitional option '"+a+"'"+s+(r?". "+r:"")}return(a,s,o)=>{if(t===!1)throw new U(i(s," has been removed"+(n?" in "+n:"")),U.ERR_DEPRECATED);return n&&!rb[s]&&(rb[s]=!0,console.warn(i(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,s,o):!0}};yd.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function uL(e,t,n){if(typeof e!="object")throw new U("options must be an object",U.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const a=r[i],s=t[a];if(s){const o=e[a],l=o===void 0||s(o,a,e);if(l!==!0)throw new U("option "+a+" must be "+l,U.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new U("Unknown option "+a,U.ERR_BAD_OPTION)}}const Sc={assertOptions:uL,validators:yd},tn=Sc.validators;let oi=class{constructor(t){this.defaults=t,this.interceptors={request:new Kv,response:new Kv}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const a=i.stack?i.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=pi(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:a}=n;r!==void 0&&Sc.assertOptions(r,{silentJSONParsing:tn.transitional(tn.boolean),forcedJSONParsing:tn.transitional(tn.boolean),clarifyTimeoutError:tn.transitional(tn.boolean)},!1),i!=null&&(C.isFunction(i)?n.paramsSerializer={serialize:i}:Sc.assertOptions(i,{encode:tn.function,serialize:tn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Sc.assertOptions(n,{baseUrl:tn.spelling("baseURL"),withXsrfToken:tn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=a&&C.merge(a.common,a[n.method]);a&&C.forEach(["delete","get","head","post","put","patch","common"],v=>{delete a[v]}),n.headers=st.concat(s,a);const o=[];let l=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(l=l&&w.synchronous,o.unshift(w.fulfilled,w.rejected))});const c=[];this.interceptors.response.forEach(function(w){c.push(w.fulfilled,w.rejected)});let u,f=0,h;if(!l){const v=[nb.bind(this),void 0];for(v.unshift.apply(v,o),v.push.apply(v,c),h=v.length,u=Promise.resolve(n);f<h;)u=u.then(v[f++],v[f++]);return u}h=o.length;let m=n;for(f=0;f<h;){const v=o[f++],w=o[f++];try{m=v(m)}catch(S){w.call(this,S);break}}try{u=nb.call(this,m)}catch(v){return Promise.reject(v)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(t){t=pi(this.defaults,t);const n=m5(t.baseURL,t.url,t.allowAbsoluteUrls);return c5(n,t.params,t.paramsSerializer)}};C.forEach(["delete","get","head","options"],function(t){oi.prototype[t]=function(n,r){return this.request(pi(r||{},{method:t,url:n,data:(r||{}).data}))}});C.forEach(["post","put","patch"],function(t){function n(r){return function(a,s,o){return this.request(pi(o||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}oi.prototype[t]=n(),oi.prototype[t+"Form"]=n(!0)});let dL=class x5{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(i=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](i);r._listeners=null}),this.promise.then=i=>{let a;const s=new Promise(o=>{r.subscribe(o),a=o}).then(i);return s.cancel=function(){r.unsubscribe(a)},s},t(function(a,s,o){r.reason||(r.reason=new Xa(a,s,o),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new x5(function(i){t=i}),cancel:t}}};function fL(e){return function(n){return e.apply(null,n)}}function hL(e){return C.isObject(e)&&e.isAxiosError===!0}const ep={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ep).forEach(([e,t])=>{ep[t]=e});function w5(e){const t=new oi(e),n=J4(oi.prototype.request,t);return C.extend(n,oi.prototype,t,{allOwnKeys:!0}),C.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return w5(pi(e,i))},n}const ee=w5(Xo);ee.Axios=oi;ee.CanceledError=Xa;ee.CancelToken=dL;ee.isCancel=f5;ee.VERSION=b5;ee.toFormData=pd;ee.AxiosError=U;ee.Cancel=ee.CanceledError;ee.all=function(t){return Promise.all(t)};ee.spread=fL;ee.isAxiosError=hL;ee.mergeConfig=pi;ee.AxiosHeaders=st;ee.formToJSON=e=>d5(C.isHTMLForm(e)?new FormData(e):e);ee.getAdapter=v5.getAdapter;ee.HttpStatusCode=ep;ee.default=ee;const{Axios:BV,AxiosError:UV,CanceledError:NV,isCancel:$V,CancelToken:VV,VERSION:HV,all:FV,Cancel:qV,isAxiosError:GV,spread:IV,toFormData:YV,AxiosHeaders:KV,HttpStatusCode:XV,formToJSON:QV,getAdapter:ZV,mergeConfig:JV}=ee,Jn="https://www.themealdb.com/api/json/v1/1",Ei={searchByCategory:async e=>{try{return(await ee.get(`${Jn}/filter.php?c=${e}`)).data.meals||[]}catch(t){throw console.error("Error searching by category:",t),t}},getRecipeById:async e=>{try{const t=await ee.get(`${Jn}/lookup.php?i=${e}`);return t.data.meals?t.data.meals[0]:null}catch(t){throw console.error("Error getting recipe by ID:",t),t}},searchByName:async e=>{try{return(await ee.get(`${Jn}/search.php?s=${e}`)).data.meals||[]}catch(t){throw console.error("Error searching by name:",t),t}},searchByIngredient:async e=>{try{return(await ee.get(`${Jn}/filter.php?i=${e}`)).data.meals||[]}catch(t){throw console.error("Error searching by ingredient:",t),t}},getCategories:async()=>{try{return(await ee.get(`${Jn}/categories.php`)).data.categories||[]}catch(e){throw console.error("Error getting categories:",e),e}},getAreas:async()=>{try{return(await ee.get(`${Jn}/list.php?a=list`)).data.meals||[]}catch(e){throw console.error("Error getting areas:",e),e}},getIngredients:async()=>{try{return(await ee.get(`${Jn}/list.php?i=list`)).data.meals||[]}catch(e){throw console.error("Error getting ingredients:",e),e}},filterByArea:async e=>{try{return(await ee.get(`${Jn}/filter.php?a=${e}`)).data.meals||[]}catch(t){throw console.error("Error filtering by area:",t),t}}},_c=Vt("recipes/fetchByCategory",async(e,{rejectWithValue:t})=>{try{return await Ei.searchByCategory(e)}catch(n){return t(n.message)}}),Tc=Vt("recipes/fetchById",async(e,{rejectWithValue:t})=>{try{return await Ei.getRecipeById(e)}catch(n){return t(n.message)}}),Ec=Vt("recipes/fetchByName",async(e,{rejectWithValue:t})=>{try{return await Ei.searchByName(e)}catch(n){return t(n.message)}}),jc=Vt("recipes/fetchByIngredient",async(e,{rejectWithValue:t})=>{try{return await Ei.searchByIngredient(e)}catch(n){return t(n.message)}}),Cc=Vt("recipes/fetchCategories",async(e,{rejectWithValue:t})=>{try{return await Ei.getCategories()}catch(n){return t(n.message)}}),Ac=Vt("recipes/fetchAreas",async(e,{rejectWithValue:t})=>{try{return await Ei.getAreas()}catch(n){return t(n.message)}}),Rc=Vt("recipes/fetchIngredients",async(e,{rejectWithValue:t})=>{try{return await Ei.getIngredients()}catch(n){return t(n.message)}}),mL={recipes:[],selectedRecipe:null,categories:[],areas:[],ingredients:[],searchResults:[],recentSearches:[],status:"idle",error:null,filters:{category:"",area:"",ingredient:""},sort:"name"},S5=Jg({name:"recipes",initialState:mL,reducers:{clearSelectedRecipe:e=>{e.selectedRecipe=null},addToRecentSearches:(e,t)=>{const n=t.payload;e.recentSearches=[n,...e.recentSearches.filter(r=>r.term!==n.term||r.type!==n.type)].slice(0,10)},setFilter:(e,t)=>{e.filters={...e.filters,...t.payload}},clearFilters:e=>{e.filters={category:"",area:"",ingredient:""}},setSortOrder:(e,t)=>{e.sort=t.payload},clearSearchResults:e=>{e.searchResults=[]}},extraReducers:e=>{e.addCase(_c.pending,t=>{t.status="loading"}).addCase(_c.fulfilled,(t,n)=>{t.status="succeeded",t.recipes=n.payload,t.error=null}).addCase(_c.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(Tc.pending,t=>{t.status="loading"}).addCase(Tc.fulfilled,(t,n)=>{t.status="succeeded",t.selectedRecipe=n.payload,t.error=null}).addCase(Tc.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(Ec.pending,t=>{t.status="loading"}).addCase(Ec.fulfilled,(t,n)=>{t.status="succeeded",t.searchResults=n.payload,t.error=null}).addCase(Ec.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(jc.pending,t=>{t.status="loading"}).addCase(jc.fulfilled,(t,n)=>{t.status="succeeded",t.searchResults=n.payload,t.error=null}).addCase(jc.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(Cc.pending,t=>{t.status="loading"}).addCase(Cc.fulfilled,(t,n)=>{t.status="succeeded",t.categories=n.payload,t.error=null}).addCase(Cc.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(Ac.pending,t=>{t.status="loading"}).addCase(Ac.fulfilled,(t,n)=>{t.status="succeeded",t.areas=n.payload,t.error=null}).addCase(Ac.rejected,(t,n)=>{t.status="failed",t.error=n.payload}).addCase(Rc.pending,t=>{t.status="loading"}).addCase(Rc.fulfilled,(t,n)=>{t.status="succeeded",t.ingredients=n.payload,t.error=null}).addCase(Rc.rejected,(t,n)=>{t.status="failed",t.error=n.payload})}}),{clearSelectedRecipe:WV,addToRecentSearches:Vf,setFilter:pL,clearFilters:gL,setSortOrder:yL,clearSearchResults:eH}=S5.actions,vL=e=>e.recipes.recipes,bL=e=>e.recipes.selectedRecipe,xL=e=>e.recipes.categories,wL=e=>e.recipes.areas,SL=e=>e.recipes.ingredients,_L=e=>e.recipes.searchResults,TL=e=>e.recipes.status,EL=e=>e.recipes.error,jL=S5.reducer,Wt=()=>{const e=et(),t=le(vL),n=le(bL),r=le(xL),i=le(wL),a=le(SL),s=le(_L),o=le(TL),l=le(EL),c=le(i0),u=le(Z4),f=_.useCallback(k=>{e(_c(k)),e(Vf({term:k,type:"category"}))},[e]),h=_.useCallback(k=>{e(Tc(k))},[e]),m=_.useCallback(k=>{e(Ec(k)),e(Vf({term:k,type:"name"}))},[e]),v=_.useCallback(k=>{e(jc(k)),e(Vf({term:k,type:"ingredient"}))},[e]),w=_.useCallback(()=>{e(Cc())},[e]),S=_.useCallback(()=>{e(Ac())},[e]),p=_.useCallback(()=>{e(Rc())},[e]),y=_.useCallback(k=>{c.some(xe=>xe.idMeal===k.idMeal)?(e(pD(k.idMeal)),e(pt({message:`Removed ${k.strMeal} from favorites`,type:"info"}))):(e(mD(k)),e(pt({message:`Added ${k.strMeal} to favorites`,type:"success"})))},[e,c]),b=_.useCallback(k=>c.some(B=>B.idMeal===k),[c]),x=_.useCallback((k,B,xe)=>{e(gD({day:k,meal:B,recipe:xe})),e(pt({message:`Added ${xe.strMeal} to ${B} on ${new Date(k).toLocaleDateString()}`,type:"success"}))},[e]),T=_.useCallback((k,B)=>{e(K4({day:k,meal:B})),e(pt({message:`Removed recipe from ${B} on ${new Date(k).toLocaleDateString()}`,type:"info"}))},[e]),j=_.useCallback((k,B)=>{e(pL({[k]:B}))},[e]),E=_.useCallback(()=>{e(gL())},[e]),A=_.useCallback(k=>{e(yL(k))},[e]),O=_.useCallback(k=>{if(!k)return[];const B=[];for(let xe=1;xe<=20;xe++){const bn=k[`strIngredient${xe}`],Ht=k[`strMeasure${xe}`];bn&&bn.trim()!==""&&B.push({ingredient:bn.trim(),measure:Ht?Ht.trim():""})}return B},[]);return{recipes:t,selectedRecipe:n,categories:r,areas:i,ingredients:a,searchResults:s,status:o,error:l,favorites:c,mealPlan:u,searchByCategory:f,getRecipeDetails:h,searchByName:m,searchByIngredient:v,loadCategories:w,loadAreas:S,loadIngredients:p,toggleFavorite:y,isFavorite:b,addRecipeToMealPlan:x,removeRecipeFromMealPlan:T,applyFilter:j,resetFilters:E,applySorting:A,formatIngredients:O}},CL=()=>{const e=et(),t=Yn(),n=le(UO),r=le(Q4),{categories:i,loadCategories:a,status:s}=Wt();_.useEffect(()=>{i.length===0&&s!=="loading"&&a()},[i.length,a,s]);const o=()=>{e(DO())},l=c=>{t(c),o()};return d.jsx(mc,{children:n&&d.jsxs(d.Fragment,{children:[d.jsx(AL,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:o}),d.jsxs(RL,{initial:{x:"-100%"},animate:{x:0},exit:{x:"-100%"},transition:{type:"tween",duration:.3},children:[d.jsxs(kL,{children:[d.jsx(OL,{children:"Menu"}),d.jsx(ML,{onClick:o,children:d.jsx(Ra,{})})]}),d.jsxs(ab,{children:[d.jsxs(ir,{onClick:()=>l("/"),children:[d.jsx(r4,{}),d.jsx("span",{children:"Home"})]}),d.jsxs(ir,{onClick:()=>l("/categories"),children:[d.jsx(Ak,{}),d.jsx("span",{children:"Categories"})]}),d.jsxs(ir,{onClick:()=>l("/explore"),children:[d.jsx(UD,{}),d.jsx("span",{children:"Explore"})]}),d.jsxs(ir,{onClick:()=>l("/favorites"),children:[d.jsx(Kn,{}),d.jsx("span",{children:"Favorites"})]}),d.jsxs(ir,{onClick:()=>l("/meal-planner"),children:[d.jsx(Ga,{}),d.jsx("span",{children:"Meal Planner"})]})]}),d.jsx(ib,{children:"Categories"}),d.jsxs(DL,{children:[s==="loading"?d.jsx(PL,{children:"Loading categories..."}):i&&i.length>0?i.slice(0,8).map(c=>d.jsxs(zL,{onClick:()=>l(`/category/${c.strCategory}`),children:[d.jsx(BD,{}),d.jsx("span",{children:c.strCategory})]},c.idCategory||c.strCategory)):d.jsx(BL,{children:"No categories found"}),d.jsx(LL,{onClick:()=>l("/categories"),children:"View All Categories"})]}),d.jsx(ib,{children:"Account"}),d.jsx(ab,{children:r?d.jsxs(ir,{onClick:()=>l("/profile"),children:[d.jsx(bo,{}),d.jsx("span",{children:"Profile"})]}):d.jsxs(ir,{onClick:()=>l("/login"),children:[d.jsx(s4,{}),d.jsx("span",{children:"Login / Register"})]})})]})]})})},AL=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`,RL=g(Z.aside)`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background-color: var(--color-card-bg);
  z-index: 999;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-lg);
`,kL=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,OL=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
`,ML=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,ib=g.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text-light);
  margin: 1.5rem 0 0.75rem;
`,ab=g.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,ir=g.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  text-align: left;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-light);
    color: white;
  }
  
  svg {
    font-size: 1.2rem;
  }
`,DL=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,zL=g(ir)`
  padding: 0.5rem 1rem;
`,LL=g.button`
  background: none;
  border: none;
  color: var(--color-primary);
  font-size: 0.875rem;
  text-align: center;
  padding: 0.75rem;
  margin-top: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,PL=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
`,BL=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
`,vd=({recipe:e,index:t=0})=>{const{toggleFavorite:n,isFavorite:r}=Wt(),i=e?r(e.idMeal):!1;if(!e||!e.idMeal)return null;const a=s=>{s.preventDefault(),s.stopPropagation(),n(e)};return d.jsx(c0,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:t*.1},whileHover:{y:-10,transition:{duration:.2}},children:d.jsxs(Ce,{to:`/recipe/${e.idMeal}`,children:[d.jsxs(UL,{children:[d.jsx(NL,{src:e.strMealThumb,alt:e.strMeal}),d.jsx($L,{onClick:a,children:i?d.jsx(Kn,{className:"filled"}):d.jsx(c4,{})}),e.strCategory&&d.jsx(VL,{children:e.strCategory})]}),d.jsxs(HL,{children:[d.jsx(FL,{children:e.strMeal}),d.jsx(qL,{children:e.strInstructions?`${e.strInstructions.substring(0,80)}...`:"Delicious recipe waiting to be explored. Click to see details and cooking instructions."}),d.jsxs(GL,{children:[d.jsx(IL,{children:e.strArea||"International"}),d.jsxs(YL,{children:[d.jsx("span",{children:"View Recipe"}),d.jsx(a4,{})]})]})]})]})})},c0=g(Z.div)`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-fast);
  height: 100%;
  
  &:hover {
    box-shadow: var(--shadow-md);
  }
  
  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`,UL=g.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,NL=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
  
  ${c0}:hover & {
    transform: scale(1.05);
  }
`,$L=g.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  z-index: 1;
  
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
  
  svg {
    font-size: 1.2rem;
    color: var(--color-text);
    
    &.filled {
      color: var(--color-primary);
    }
  }
`,VL=g.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  border-top-right-radius: var(--radius-md);
`,HL=g.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,FL=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
`,qL=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
`,GL=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`,IL=g.span`
  font-size: 0.75rem;
  color: var(--color-text-light);
  background-color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: var(--radius-sm);
`,YL=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.875rem;
  font-weight: 600;
  
  svg {
    transition: transform var(--transition-fast);
  }
  
  ${c0}:hover & {
    svg {
      transform: rotate(90deg);
    }
  }
`,KL=()=>{const e=et(),{recipes:t,categories:n,searchByCategory:r,loadCategories:i,status:a}=Wt(),[s,o]=_.useState([]);_.useEffect(()=>{n.length===0&&i()},[n.length,i]),_.useEffect(()=>{var c;if(n.length>0&&t.length===0){const u=Math.floor(Math.random()*n.length),f=((c=n[u])==null?void 0:c.strCategory)||"Beef";r(f)}},[n,t.length,r]),_.useEffect(()=>{if(t.length>0){const c=[...t].sort(()=>.5-Math.random());o(c.slice(0,6))}},[t]);const l=()=>{e(S4())};return d.jsxs(XL,{children:[d.jsx(QL,{children:d.jsxs(ZL,{children:[d.jsx(JL,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Discover Delicious Recipes for Every Taste"}),d.jsx(WL,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:"Find, save, and share your favorite meals from around the world"}),d.jsxs(eP,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.4},onClick:l,children:[d.jsx(Aa,{}),d.jsx("span",{children:"Search Recipes"})]})]})}),d.jsxs(tP,{children:[d.jsxs(Al,{children:[d.jsx(Rl,{children:d.jsx(Aa,{})}),d.jsx(kl,{children:"Find Recipes"}),d.jsx(Ol,{children:"Search thousands of recipes by name, ingredient, or category"})]}),d.jsxs(Al,{children:[d.jsx(Rl,{children:d.jsx(zr,{})}),d.jsx(kl,{children:"Cook with Ease"}),d.jsx(Ol,{children:"Follow step-by-step instructions with detailed ingredients"})]}),d.jsxs(Al,{children:[d.jsx(Rl,{children:d.jsx(Kn,{})}),d.jsx(kl,{children:"Save Favorites"}),d.jsx(Ol,{children:"Keep your favorite recipes in one place for quick access"})]}),d.jsxs(Al,{children:[d.jsx(Rl,{children:d.jsx(Ga,{})}),d.jsx(kl,{children:"Plan Meals"}),d.jsx(Ol,{children:"Organize your weekly meals with our meal planning tool"})]})]}),d.jsx(sb,{children:"Featured Recipes"}),a==="loading"?d.jsx(rP,{children:"Loading recipes..."}):s.length>0?d.jsx(nP,{children:s.map((c,u)=>d.jsx(vd,{recipe:c,index:u},c.idMeal))}):d.jsx(iP,{children:"No recipes found. Try searching for a different category."}),d.jsx(aP,{to:"/categories",children:"Explore All Categories"}),d.jsxs(sP,{children:[d.jsx(sb,{children:"Popular Categories"}),d.jsx(oP,{children:n.slice(0,8).map(c=>d.jsxs(lP,{to:`/category/${c.strCategory}`,children:[d.jsx(cP,{src:c.strCategoryThumb,alt:c.strCategory}),d.jsx(uP,{children:c.strCategory})]},c.idCategory||c.strCategory))})]})]})},XL=g.div`
  display: flex;
  flex-direction: column;
`,QL=g.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -2rem -1.5rem 2rem;
  padding: 0 1.5rem;
  
  @media (max-width: 768px) {
    height: 400px;
    margin: -1.5rem -1rem 2rem;
  }
`,ZL=g.div`
  text-align: center;
  max-width: 800px;
`,JL=g(Z.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.75rem;
  }
`,WL=g(Z.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,eP=g(Z.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
    transform: translateY(-3px);
  }
  
  &:active {
    transform: translateY(-1px);
  }
`,tP=g.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Al=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-md);
  }
`,Rl=g.div`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`,kl=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--color-text);
`,Ol=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`,sb=g.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 60px;
    height: 4px;
    background-color: var(--color-primary);
    border-radius: 4px;
  }
`,nP=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,rP=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`,iP=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`,aP=g(Ce)`
  display: block;
  width: fit-content;
  margin: 0 auto 4rem;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`,sP=g.section`
  margin-bottom: 3rem;
`,oP=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,lP=g(Ce)`
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  height: 150px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
    
    img {
      transform: scale(1.1);
    }
  }
`,cP=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
`,uP=g.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem;
  font-weight: 600;
  text-align: center;
`,dP=()=>{const{categories:e,loadCategories:t,status:n,error:r}=Wt();return _.useEffect(()=>{e.length===0&&t(),window.scrollTo(0,0)},[e.length,t]),d.jsxs(fP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(hP,{children:[d.jsx(mP,{children:"Recipe Categories"}),d.jsx(pP,{children:"Browse our collection of recipes by category. Click on a category to see all recipes in that category."})]}),n==="loading"?d.jsx(_P,{children:d.jsx(TP,{children:"Loading categories..."})}):r?d.jsxs(EP,{children:[d.jsxs(jP,{children:["Error loading categories: ",r]}),d.jsx(ob,{onClick:t,children:"Try Again"})]}):e.length>0?d.jsx(gP,{children:e.map((i,a)=>d.jsxs(_5,{to:`/category/${i.strCategory}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:a*.05},children:[d.jsx(yP,{children:d.jsx(vP,{src:i.strCategoryThumb,alt:i.strCategory})}),d.jsxs(bP,{children:[d.jsx(xP,{children:i.strCategory}),d.jsx(wP,{children:i.strCategoryDescription?`${i.strCategoryDescription.substring(0,100)}...`:`Explore our collection of ${i.strCategory} recipes.`}),d.jsx(SP,{children:"View Recipes"})]})]},i.idCategory||i.strCategory))}):d.jsxs(CP,{children:[d.jsx(AP,{children:"No categories found"}),d.jsx(ob,{onClick:t,children:"Refresh"})]})]})},fP=g(Z.div)`
  display: flex;
  flex-direction: column;
`,hP=g.div`
  margin-bottom: 3rem;
  text-align: center;
`,mP=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`,pP=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
`,gP=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_5=g(Z(Ce))`
  display: flex;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  text-decoration: none;
  color: inherit;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,yP=g.div`
  flex: 0 0 200px;
  
  @media (max-width: 576px) {
    flex: 0 0 auto;
    height: 200px;
  }
`,vP=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,bP=g.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`,xP=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`,wP=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
  flex: 1;
`,SP=g.span`
  display: inline-block;
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.5rem 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-primary);
    transition: width var(--transition-normal);
  }
  
  ${_5}:hover &:after {
    width: 100%;
  }
`,_P=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`,TP=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`,EP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  padding: 2rem;
  text-align: center;
`,jP=g.p`
  font-size: 1.1rem;
  color: var(--color-error);
`,CP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  padding: 2rem;
  text-align: center;
`,AP=g.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
`,ob=g.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,RP=()=>{const{categoryName:e}=Fw(),t=Yn(),{recipes:n,searchByCategory:r,status:i,error:a}=Wt(),[s,o]=_.useState("name");_.useEffect(()=>{e&&r(e),window.scrollTo(0,0)},[e,r]);const l=()=>{t(-1)},c=f=>{o(f.target.value)},u=[...n].sort((f,h)=>s==="name"?f.strMeal.localeCompare(h.strMeal):s==="id"?parseInt(f.idMeal)-parseInt(h.idMeal):0);return d.jsxs(kP,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(OP,{children:[d.jsxs(MP,{onClick:l,children:[d.jsx(t4,{}),d.jsx("span",{children:"Back"})]}),d.jsxs(DP,{children:[e," Recipes"]}),d.jsxs(zP,{children:[d.jsxs(LP,{children:[d.jsx(n4,{}),d.jsx("span",{children:"Filter"})]}),d.jsxs(PP,{children:[d.jsx(BP,{children:d.jsx(o4,{})}),d.jsxs(UP,{value:s,onChange:c,children:[d.jsx("option",{value:"name",children:"Sort by Name"}),d.jsx("option",{value:"id",children:"Sort by ID"})]})]})]})]}),i==="loading"?d.jsx(VP,{children:d.jsxs(HP,{children:["Loading ",e," recipes..."]})}):a?d.jsxs(FP,{children:[d.jsxs(qP,{children:["Error loading recipes: ",a]}),d.jsx(lb,{onClick:()=>r(e),children:"Try Again"})]}):u.length>0?d.jsxs(d.Fragment,{children:[d.jsxs(NP,{children:[u.length," recipes found"]}),d.jsx($P,{children:u.map((f,h)=>d.jsx(vd,{recipe:f,index:h},f.idMeal))})]}):d.jsxs(GP,{children:[d.jsxs(IP,{children:["No recipes found in ",e," category"]}),d.jsx(lb,{onClick:()=>t("/categories"),children:"Browse Categories"})]})]})},kP=g(Z.div)`
  display: flex;
  flex-direction: column;
`,OP=g.div`
  margin-bottom: 2rem;
`,MP=g.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  width: fit-content;
  margin-bottom: 1rem;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-background);
  }
`,DP=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1.5rem;
`,zP=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`,LP=g.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,PP=g.div`
  display: flex;
  align-items: center;
  position: relative;
`,BP=g.div`
  position: absolute;
  left: 0.75rem;
  color: var(--color-text-light);
  pointer-events: none;
`,UP=g.select`
  appearance: none;
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.25rem 0.75rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
  
  &:focus {
    outline: none;
  }
`,NP=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`,$P=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,VP=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`,HP=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`,FP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  padding: 2rem;
  text-align: center;
`,qP=g.p`
  font-size: 1.1rem;
  color: var(--color-error);
`,GP=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  padding: 2rem;
  text-align: center;
`,IP=g.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
`,lb=g.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,YP=({recipe:e})=>{const{toggleFavorite:t,isFavorite:n,formatIngredients:r}=Wt(),i=e?n(e.idMeal):!1,a=e?r(e):[],s=()=>{e&&t(e)},o=()=>{window.print()},l=()=>{navigator.share?navigator.share({title:e.strMeal,text:`Check out this delicious ${e.strMeal} recipe!`,url:window.location.href}):(navigator.clipboard.writeText(window.location.href),alert("Link copied to clipboard!"))};return e?d.jsxs(KP,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:[d.jsxs(QP,{children:[d.jsx(ZP,{children:e.strMeal}),d.jsxs(JP,{children:[d.jsxs(Ml,{onClick:s,children:[i?d.jsx(Kn,{className:"filled"}):d.jsx(c4,{}),d.jsx("span",{children:i?"Saved":"Save"})]}),d.jsxs(Ml,{onClick:o,children:[d.jsx(Mk,{}),d.jsx("span",{children:"Print"})]}),d.jsxs(Ml,{onClick:l,children:[d.jsx(zk,{}),d.jsx("span",{children:"Share"})]}),d.jsxs(Ml,{children:[d.jsx(_k,{}),d.jsx("span",{children:"Plan"})]})]})]}),d.jsxs(WP,{children:[d.jsxs(eB,{children:[d.jsx(tB,{src:e.strMealThumb,alt:e.strMeal}),d.jsxs(nB,{children:[e.strArea&&d.jsxs(Hf,{children:[d.jsx(ed,{}),d.jsx("span",{children:e.strArea})]}),e.strCategory&&d.jsxs(Hf,{children:[d.jsx(zr,{}),d.jsx("span",{children:e.strCategory})]}),e.strTags&&d.jsx(Hf,{children:d.jsxs("span",{children:["#",e.strTags.split(",")[0]]})})]})]}),d.jsxs(rB,{children:[a.length>0&&d.jsxs(Ff,{children:[d.jsx(qf,{children:"Ingredients"}),d.jsx(iB,{children:a.map((c,u)=>d.jsxs(aB,{children:[d.jsx(sB,{type:"checkbox",id:`ingredient-${u}`}),d.jsxs(oB,{htmlFor:`ingredient-${u}`,children:[d.jsx(lB,{children:c.measure}),d.jsx(cB,{children:c.ingredient})]})]},u))})]}),e.strInstructions&&d.jsxs(Ff,{children:[d.jsx(qf,{children:"Instructions"}),d.jsx(uB,{children:e.strInstructions.split(/\r\n|\n|\r/).filter(c=>c.trim()!=="").map((c,u)=>d.jsxs(dB,{children:[d.jsx(fB,{children:u+1}),d.jsx(hB,{children:c})]},u))})]}),e.strYoutube&&e.strYoutube.includes("v=")&&d.jsxs(Ff,{children:[d.jsx(qf,{children:"Video Tutorial"}),d.jsx(mB,{children:d.jsx("iframe",{width:"100%",height:"315",src:`https://www.youtube.com/embed/${e.strYoutube.split("v=")[1]}`,title:`${e.strMeal} Video Tutorial`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})]})]})]})]}):d.jsx(XP,{children:d.jsx("h2",{children:"Loading recipe..."})})},KP=g(Z.div)`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
`,XP=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,QP=g.div`
  padding: 2rem;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,ZP=g.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`,JP=g.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: space-between;
  }
`,Ml=g.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-background);
  }
  
  svg {
    font-size: 1.25rem;
    
    &.filled {
      color: var(--color-primary);
    }
  }
  
  span {
    font-size: 0.75rem;
    font-weight: 500;
  }
  
  @media (max-width: 576px) {
    padding: 0.5rem 0.25rem;
  }
`,WP=g.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,eB=g.div`
  position: relative;
`,tB=g.img`
  width: 100%;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`,nB=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`,Hf=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-text);
  
  svg {
    color: var(--color-primary);
  }
`,rB=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Ff=g.section``,qf=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`,iB=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 0.75rem;
`,aB=g.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,sB=g.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  
  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);
    
    &:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
    }
  }
  
  &:checked + label {
    text-decoration: line-through;
    color: var(--color-text-light);
  }
`,oB=g.label`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  cursor: pointer;
`,lB=g.span`
  font-weight: 600;
  color: var(--color-text);
  font-size: 0.875rem;
  white-space: nowrap;
`,cB=g.span`
  color: var(--color-text);
  font-size: 0.875rem;
`,uB=g.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,dB=g.li`
  display: flex;
  gap: 1rem;
`,fB=g.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: var(--color-primary);
  color: white;
  font-weight: 600;
  border-radius: 50%;
  flex-shrink: 0;
`,hB=g.p`
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.6;
  margin: 0;
`,mB=g.div`
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`,pB=()=>{const{recipeId:e}=Fw(),t=Yn(),{selectedRecipe:n,getRecipeDetails:r,status:i,error:a}=Wt();_.useEffect(()=>{e&&r(e),window.scrollTo(0,0)},[e,r]);const s=()=>{t(-1)};return d.jsxs(gB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(yB,{onClick:s,children:[d.jsx(t4,{}),d.jsx("span",{children:"Back"})]}),i==="loading"?d.jsx(vB,{children:d.jsx(bB,{children:"Loading recipe details..."})}):a?d.jsxs(xB,{children:[d.jsxs(wB,{children:["Error loading recipe: ",a]}),d.jsx(cb,{onClick:()=>r(e),children:"Try Again"})]}):n?d.jsx(YP,{recipe:n}):d.jsxs(SB,{children:[d.jsx(_B,{children:"Recipe not found"}),d.jsx(cb,{onClick:()=>t("/categories"),children:"Browse Categories"})]})]})},gB=g(Z.div)`
  display: flex;
  flex-direction: column;
`,yB=g.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: var(--radius-md);
  width: fit-content;
  margin-bottom: 1.5rem;
  transition: color var(--transition-fast), background-color var(--transition-fast);
  
  &:hover {
    color: var(--color-primary);
    background-color: var(--color-background);
  }
`,vB=g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,bB=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`,xB=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
`,wB=g.p`
  font-size: 1.1rem;
  color: var(--color-error);
  text-align: center;
`,SB=g.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 300px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 2rem;
`,_B=g.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  text-align: center;
`,cb=g.button`
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,TB=()=>{const e=le(i0),[t,n]=_.useState("name"),r=a=>{n(a.target.value)},i=[...e].sort((a,s)=>t==="name"?a.strMeal.localeCompare(s.strMeal):t==="recent"?parseInt(s.idMeal)-parseInt(a.idMeal):0);return d.jsxs(EB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(jB,{children:[d.jsxs(CB,{children:[d.jsxs(AB,{children:[d.jsx(RB,{children:d.jsx(Kn,{})}),"My Favorite Recipes"]}),d.jsx(kB,{children:"Your saved recipes all in one place. Easily access your favorite dishes anytime."})]}),e.length>0&&d.jsxs(OB,{children:[d.jsx(MB,{children:d.jsx(o4,{})}),d.jsxs(DB,{value:t,onChange:r,children:[d.jsx("option",{value:"name",children:"Sort by Name"}),d.jsx("option",{value:"recent",children:"Sort by Recent"})]})]})]}),e.length>0?d.jsxs(d.Fragment,{children:[d.jsxs(zB,{children:[e.length," favorite ",e.length===1?"recipe":"recipes"]}),d.jsx(LB,{children:i.map((a,s)=>d.jsx(vd,{recipe:a,index:s},a.idMeal))})]}):d.jsxs(PB,{children:[d.jsx(BB,{children:d.jsx(Dk,{})}),d.jsx(UB,{children:"No Favorites Yet"}),d.jsx(NB,{children:"You haven't added any recipes to your favorites yet. Browse recipes and click the heart icon to add them here."}),d.jsx($B,{to:"/categories",children:"Browse Categories"})]})]})},EB=g(Z.div)`
  display: flex;
  flex-direction: column;
`,jB=g.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`,CB=g.div`
  max-width: 600px;
`,AB=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    font-size: 2rem;
  }
`,RB=g.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`,kB=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
`,OB=g.div`
  display: flex;
  align-items: center;
  position: relative;
`,MB=g.div`
  position: absolute;
  left: 0.75rem;
  color: var(--color-text-light);
  pointer-events: none;
`,DB=g.select`
  appearance: none;
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.25rem 0.75rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
  
  &:focus {
    outline: none;
  }
`,zB=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`,LB=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,PB=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
`,BB=g.div`
  font-size: 4rem;
  color: var(--color-text-light);
  margin-bottom: 1.5rem;
`,UB=g.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`,NB=g.p`
  font-size: 1rem;
  color: var(--color-text-light);
  max-width: 500px;
  margin-bottom: 2rem;
`,$B=g(Ce)`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,VB=(e=new Date)=>{const t=new Date(e),n=t.getDay(),r=t.getDate()-n+(n===0?-6:1);return new Date(t.setDate(r))},HB=e=>{const t=[];for(let n=0;n<7;n++){const r=new Date(e);r.setDate(e.getDate()+n),t.push(r.toISOString().split("T")[0])}return t},FB=()=>{const e=et(),t=le(Z4),[n,r]=_.useState(VB()),i=HB(n),a=()=>r(c=>{const u=new Date(c);return u.setDate(u.getDate()-7),u}),s=()=>r(c=>{const u=new Date(c);return u.setDate(u.getDate()+7),u}),o=c=>new Date(c).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),l=(c,u)=>{const f=t.find(h=>h.day===c);return f?f[u]:null};return d.jsxs(qB,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(GB,{children:[d.jsxs(IB,{children:[d.jsx(Ga,{})," Meal Planner"]}),d.jsxs(YB,{children:[d.jsx(ub,{onClick:a,children:"Previous"}),d.jsxs(KB,{children:[o(i[0])," - ",o(i[6])]}),d.jsx(ub,{onClick:s,children:"Next"})]})]}),d.jsxs(XB,{children:[d.jsxs(QB,{children:[d.jsx(Dl,{children:"Date"}),d.jsx(Dl,{children:"Breakfast"}),d.jsx(Dl,{children:"Lunch"}),d.jsx(Dl,{children:"Dinner"})]}),i.map(c=>d.jsxs(ZB,{children:[d.jsx(T5,{children:o(c)}),["breakfast","lunch","dinner"].map(u=>{const f=l(c,u);return d.jsx(JB,{children:f?d.jsxs(WB,{children:[d.jsx(eU,{src:f.image||f.strMealThumb,alt:f.name||f.strMeal}),d.jsxs(tU,{children:[d.jsx(nU,{to:`/recipe/${f.id||f.idMeal}`,children:f.name||f.strMeal}),d.jsx(rU,{onClick:()=>e(K4({day:c,meal:u})),children:d.jsx(Bk,{})})]})]}):d.jsxs(iU,{onClick:()=>e(PO({day:c,mealType:u})),children:[d.jsx(a4,{})," Add ",u.charAt(0).toUpperCase()+u.slice(1)]})},u)})]},c))]}),t.length>0?d.jsx(aU,{onClick:()=>{window.confirm("Clear entire plan?")&&e(yD())},children:"Clear Plan"}):d.jsxs(sU,{children:[d.jsx(zr,{size:48}),d.jsx(oU,{children:"Your meal plan is empty. Click Add to create one."})]})]})},qB=g(Z.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`,GB=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,IB=g.h1`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,YB=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,ub=g.button`
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem 1rem;
  cursor: pointer;
  &:hover { background: var(--color-border); }
`,KB=g.span`
  font-weight: 600;
`,XB=g.div`
  background: var(--color-card-bg);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`,QB=g.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 1fr);
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  position: sticky;
  top: 0;
  z-index: 1;
`,Dl=g.div`
  padding: 1rem;
  text-align: center;
`,ZB=g.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 1fr);
  border-top: 1px solid var(--color-border);
  &:nth-child(even) { background: var(--color-background); }
`,T5=g.div`
  padding: 1rem;
  text-align: center;
`,JB=g(T5)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  min-height: 120px;
`,WB=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-background-light);
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  box-shadow: var(--shadow-sm);
  width: 100%;
`,eU=g.img`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  object-fit: cover;
`,tU=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
  overflow: hidden;
`,nU=g(Ce)`
  color: var(--color-text);
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &:hover { color: var(--color-primary); }
`,rU=g.button`
  background: none;
  border: none;
  color: var(--color-error);
  cursor: pointer;
`,iU=g.button`
  background: var(--color-background-light);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--color-text-light);
  transition: background-color var(--transition-fast);
  &:hover { background: var(--color-border); color: #fff; }
`,aU=g.button`
  margin-top: 1.5rem;
  align-self: center;
  background: var(--color-error);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  &:hover { background: #d32f2f; }
`,sU=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  gap: 0.75rem;
`,oU=g.div`
  color: var(--color-text-light);
  font-size: 1rem;
`,lU=()=>{const e=et(),t=Yn(),n=le(vD),r=le(Q4),i=le(a0),a=le(i0);_.useEffect(()=>{r||(e(pt({message:"You must be logged in to view this page",type:"error"})),t("/login"))},[r,e,t]);const s=()=>{const l=i==="light"?"dark":"light";e(X4(l)),e(pt({message:`Theme changed to ${l} mode`,type:"success"}))},o=()=>{e(hD()),e(pt({message:"You have been logged out",type:"info"})),t("/")};return d.jsxs(cU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(uU,{children:[d.jsx(dU,{children:n!=null&&n.avatar?d.jsx(fU,{src:n.avatar,alt:n.name}):d.jsx(hU,{children:d.jsx(bo,{})})}),d.jsxs(mU,{children:[d.jsx(pU,{children:(n==null?void 0:n.name)||"User"}),d.jsx(gU,{children:(n==null?void 0:n.email)||"user@example.com"}),d.jsx(yU,{children:(n==null?void 0:n.bio)||"No bio provided"})]})]}),d.jsxs(vU,{children:[d.jsxs(Gf,{children:[d.jsx(If,{children:d.jsx(Kn,{})}),d.jsx(Yf,{children:a.length}),d.jsx(Kf,{children:"Favorite Recipes"})]}),d.jsxs(Gf,{children:[d.jsx(If,{children:d.jsx(Ga,{})}),d.jsx(Yf,{children:"0"}),d.jsx(Kf,{children:"Planned Meals"})]}),d.jsxs(Gf,{children:[d.jsx(If,{children:d.jsx(bo,{})}),d.jsx(Yf,{children:"0"}),d.jsx(Kf,{children:"Created Recipes"})]})]}),d.jsx(bU,{children:"Settings"}),d.jsxs(xU,{children:[d.jsxs(Xf,{children:[d.jsx(Qf,{children:"Theme"}),d.jsx(wU,{onClick:s,children:i==="light"?d.jsxs(d.Fragment,{children:[d.jsx(l4,{className:"active"}),d.jsx("span",{children:"Light"})]}):d.jsxs(d.Fragment,{children:[d.jsx(i4,{className:"active"}),d.jsx("span",{children:"Dark"})]})})]}),d.jsxs(Xf,{children:[d.jsx(Qf,{children:"Notifications"}),d.jsxs(db,{children:[d.jsx("input",{type:"checkbox",id:"notifications",defaultChecked:!0}),d.jsx("label",{htmlFor:"notifications"})]})]}),d.jsxs(Xf,{children:[d.jsx(Qf,{children:"Email Updates"}),d.jsxs(db,{children:[d.jsx("input",{type:"checkbox",id:"email-updates"}),d.jsx("label",{htmlFor:"email-updates"})]})]})]}),d.jsxs(SU,{onClick:o,children:[d.jsx(Lk,{}),d.jsx("span",{children:"Logout"})]})]})},cU=g(Z.div)`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`,uU=g.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`,dU=g.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`,fU=g.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,hU=g.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-light);
  color: white;
  font-size: 3rem;
`,mU=g.div`
  flex: 1;
`,pU=g.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`,gU=g.p`
  font-size: 1rem;
  color: var(--color-text-light);
  margin-bottom: 1rem;
`,yU=g.p`
  font-size: 0.875rem;
  color: var(--color-text);
  line-height: 1.6;
`,vU=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Gf=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,If=g.div`
  font-size: 2rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
`,Yf=g.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`,Kf=g.div`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,bU=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`,xU=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
`,Xf=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
`,Qf=g.div`
  font-weight: 500;
  color: var(--color-text);
`,wU=g.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  cursor: pointer;
  
  svg {
    font-size: 1.25rem;
    
    &.active {
      color: var(--color-primary);
    }
  }
`,db=g.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
    
    &:checked + label {
      background-color: var(--color-primary);
    }
    
    &:checked + label:before {
      transform: translateX(26px);
    }
  }
  
  label {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--color-border);
    transition: var(--transition-fast);
    border-radius: 34px;
    
    &:before {
      position: absolute;
      content: "";
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: var(--transition-fast);
      border-radius: 50%;
    }
  }
`,SU=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: var(--color-error);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  align-self: center;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: #d32f2f;
  }
`,_U=()=>{const e=et(),t=Yn(),[n,r]=_.useState(""),[i,a]=_.useState(""),[s,o]=_.useState(!1),[l,c]=_.useState(!1),[u,f]=_.useState(""),h=async v=>{if(v.preventDefault(),f(""),!n||!i){f("Please fill in all fields");return}c(!0);try{await e(bc({email:n,password:i})).unwrap()&&(e(pt({message:"Login successful! Welcome back.",type:"success"})),t("/profile"))}catch(w){w.includes("Email not confirmed")?(f("Please verify your email address first"),e(pt({message:"Please check your email for verification link",type:"warning"})),t("/verify-email")):f("Invalid email or password")}c(!1)},m=v=>{c(!0),setTimeout(()=>{c(!1),f("Social login is not implemented yet.")},1e3)};return d.jsx(TU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:d.jsxs(EU,{children:[d.jsxs(jU,{children:[d.jsx(CU,{children:"Login to Your Account"}),d.jsx(AU,{children:"Welcome back! Please enter your details to access your account."})]}),u&&d.jsx(RU,{children:u}),d.jsxs(kU,{onSubmit:h,children:[d.jsxs(fb,{children:[d.jsx(hb,{children:d.jsx(Kg,{})}),d.jsx(mb,{type:"email",placeholder:"Email Address",value:n,onChange:v=>r(v.target.value),required:!0})]}),d.jsxs(fb,{children:[d.jsx(hb,{children:d.jsx(zm,{})}),d.jsx(mb,{type:"password",placeholder:"Password",value:i,onChange:v=>a(v.target.value),required:!0})]}),d.jsxs(OU,{children:[d.jsxs(MU,{children:[d.jsx(DU,{type:"checkbox",id:"remember-me",checked:s,onChange:()=>o(!s)}),d.jsx(zU,{htmlFor:"remember-me",children:"Remember me"})]}),d.jsx(LU,{to:"/forgot-password",children:"Forgot password?"})]}),d.jsxs(PU,{type:"submit",disabled:l,children:[l?"Logging in...":"Login",d.jsx(s4,{})]})]}),d.jsx(BU,{children:d.jsx(UU,{children:"or continue with"})}),d.jsxs(NU,{children:[d.jsxs(pb,{type:"button",onClick:()=>m(),disabled:l,children:[d.jsx(e4,{}),d.jsx("span",{children:"Google"})]}),d.jsxs(pb,{type:"button",onClick:()=>m(),disabled:l,children:[d.jsx(W6,{}),d.jsx("span",{children:"Facebook"})]})]}),d.jsxs($U,{children:["Don't have an account? ",d.jsx(VU,{to:"/register",children:"Sign up"})]})]})})},TU=g(Z.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`,EU=g.div`
  width: 100%;
  max-width: 450px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);

  @media (max-width: 576px) {
    padding: 2rem 1.5rem;
  }
`,jU=g.div`
  text-align: center;
  margin-bottom: 2rem;
`,CU=g.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`,AU=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,RU=g.div`
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--color-error);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,kU=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,fb=g.div`
  position: relative;
`,hb=g.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-light);
`,mb=g.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`,OU=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
`,MU=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,DU=g.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &:after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 10px;
    }
  }
`,zU=g.label`
  color: var(--color-text);
  cursor: pointer;
`,LU=g(Ce)`
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,PU=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`,BU=g.div`
  position: relative;
  text-align: center;
  margin: 1.5rem 0;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-border);
  }
`,UU=g.span`
  position: relative;
  background-color: var(--color-card-bg);
  padding: 0 1rem;
  font-size: 0.75rem;
  color: var(--color-text-light);
`,NU=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,pb=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--color-border);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  svg {
    font-size: 1rem;
  }
`,$U=g.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text);
`,VU=g(Ce)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,HU=()=>{const e=et(),t=Yn(),[n,r]=_.useState(""),[i,a]=_.useState(""),[s,o]=_.useState(""),[l,c]=_.useState(""),[u,f]=_.useState(!1),[h,m]=_.useState(!1),[v,w]=_.useState(""),S=async y=>{if(y.preventDefault(),w(""),!n||!i||!s||!l){w("Please fill in all fields");return}if(s!==l){w("Passwords do not match");return}if(!u){w("You must agree to the terms and conditions");return}if(s.length<8){w("Password must be at least 8 characters long");return}if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(s)){w("Password must contain at least one uppercase letter, one lowercase letter, one number and one special character");return}m(!0);try{(await e(vc({email:i,password:s,name:n})).unwrap()).requiresEmailConfirmation?(e(pt({message:"Registration successful! Please check your email to verify your account.",type:"success"})),t("/verify-email")):(e(pt({message:"Registration successful! Welcome to TastyRecipes.",type:"success"})),t("/profile"))}catch(x){w(x.message||"Registration failed")}m(!1)},p=y=>{m(!0),setTimeout(()=>{m(!1),w("Social registration is not implemented yet.")},1e3)};return d.jsx(FU,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:d.jsxs(qU,{children:[d.jsxs(GU,{children:[d.jsx(IU,{children:"Create an Account"}),d.jsx(YU,{children:"Join our community of food lovers and start saving your favorite recipes!"})]}),v&&d.jsx(KU,{children:v}),d.jsxs(XU,{onSubmit:S,children:[d.jsxs(zl,{children:[d.jsx(Ll,{children:d.jsx(bo,{})}),d.jsx(Pl,{type:"text",placeholder:"Full Name",value:n,onChange:y=>r(y.target.value),required:!0})]}),d.jsxs(zl,{children:[d.jsx(Ll,{children:d.jsx(Kg,{})}),d.jsx(Pl,{type:"email",placeholder:"Email Address",value:i,onChange:y=>a(y.target.value),required:!0})]}),d.jsxs(zl,{children:[d.jsx(Ll,{children:d.jsx(zm,{})}),d.jsx(Pl,{type:"password",placeholder:"Password",value:s,onChange:y=>o(y.target.value),required:!0})]}),d.jsxs(zl,{children:[d.jsx(Ll,{children:d.jsx(zm,{})}),d.jsx(Pl,{type:"password",placeholder:"Confirm Password",value:l,onChange:y=>c(y.target.value),required:!0})]}),d.jsxs(QU,{children:[d.jsx(ZU,{type:"checkbox",id:"agree-terms",checked:u,onChange:()=>f(!u),required:!0}),d.jsxs(JU,{htmlFor:"agree-terms",children:["I agree to the ",d.jsx(gb,{to:"/terms",children:"Terms of Service"})," ","and ",d.jsx(gb,{to:"/privacy",children:"Privacy Policy"})]})]}),d.jsxs(WU,{type:"submit",disabled:h,children:[h?"Creating Account...":"Create Account",d.jsx(Uk,{})]})]}),d.jsx(eN,{children:d.jsx(tN,{children:"or register with"})}),d.jsxs(nN,{children:[d.jsxs(yb,{type:"button",onClick:()=>p(),disabled:h,children:[d.jsx(e4,{}),d.jsx("span",{children:"Google"})]}),d.jsxs(yb,{type:"button",onClick:()=>p(),disabled:h,children:[d.jsx(W6,{}),d.jsx("span",{children:"Facebook"})]})]}),d.jsxs(rN,{children:["Already have an account? ",d.jsx(iN,{to:"/login",children:"Login"})]})]})})},FU=g(Z.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
`,qU=g.div`
  width: 100%;
  max-width: 450px;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);

  @media (max-width: 576px) {
    padding: 2rem 1.5rem;
  }
`,GU=g.div`
  text-align: center;
  margin-bottom: 2rem;
`,IU=g.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`,YU=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,KU=g.div`
  background-color: rgba(244, 67, 54, 0.1);
  color: var(--color-error);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`,XU=g.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
`,zl=g.div`
  position: relative;
`,Ll=g.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-light);
`,Pl=g.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  &::placeholder {
    color: var(--color-text-light);
  }
`,QU=g.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.75rem;
`,ZU=g.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  margin-top: 2px;

  &:checked {
    background-color: var(--color-primary);
    border-color: var(--color-primary);

    &:after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 10px;
    }
  }
`,JU=g.label`
  color: var(--color-text);
  cursor: pointer;
  line-height: 1.4;
`,gb=g(Ce)`
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,WU=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--color-primary-dark);
  }

  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`,eN=g.div`
  position: relative;
  text-align: center;
  margin: 1.5rem 0;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: var(--color-border);
  }
`,tN=g.span`
  position: relative;
  background-color: var(--color-card-bg);
  padding: 0 1rem;
  font-size: 0.75rem;
  color: var(--color-text-light);
`,nN=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,yb=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color var(--transition-fast);

  &:hover {
    background-color: var(--color-border);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  svg {
    font-size: 1rem;
  }
`,rN=g.p`
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-text);
`,iN=g(Ce)`
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,aN=()=>{const{categories:e,areas:t,loadCategories:n,loadAreas:r,searchByCategory:i,filterByArea:a,recipes:s,status:o,error:l}=Wt(),[c,u]=_.useState("All"),[f,h]=_.useState("All"),[m,v]=_.useState(""),[w,S]=_.useState([]);_.useEffect(()=>{e.length===0&&n(),t.length===0&&r(),s.length===0&&i("Beef"),window.scrollTo(0,0)},[e.length,t.length,s.length,n,r,i]),_.useEffect(()=>{let x=[...s];m&&(x=x.filter(T=>T.strMeal.toLowerCase().includes(m.toLowerCase()))),c!=="All"&&(x=x.filter(T=>T.strCategory===c)),f!=="All"&&(x=x.filter(T=>T.strArea===f)),S(x)},[s,m,c,f]);const p=x=>{u(x),x!=="All"&&i(x)},y=x=>{h(x),x!=="All"&&a(x)},b=x=>{x.preventDefault()};return d.jsxs(sN,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(oN,{children:[d.jsx(lN,{children:"Explore Recipes"}),d.jsx(cN,{children:"Discover delicious recipes from around the world. Filter by category, cuisine, or search for something specific."})]}),d.jsxs(uN,{onSubmit:b,children:[d.jsx(dN,{type:"text",placeholder:"Search recipes...",value:m,onChange:x=>v(x.target.value)}),d.jsxs(fN,{type:"submit",children:[d.jsx(Aa,{}),d.jsx("span",{children:"Search"})]})]}),d.jsxs(hN,{children:[d.jsxs(vb,{children:[d.jsxs(bb,{children:[d.jsx(xb,{children:d.jsx(zr,{})}),d.jsx("span",{children:"Categories"})]}),d.jsxs(wb,{children:[d.jsx(Bl,{$active:c==="All",onClick:()=>p("All"),children:"All"}),e.map(x=>d.jsx(Bl,{$active:c===x.strCategory,onClick:()=>p(x.strCategory),children:x.strCategory},x.idCategory||x.strCategory))]})]}),d.jsxs(vb,{children:[d.jsxs(bb,{children:[d.jsx(xb,{children:d.jsx(ed,{})}),d.jsx("span",{children:"Cuisines"})]}),d.jsxs(wb,{children:[d.jsx(Bl,{$active:f==="All",onClick:()=>y("All"),children:"All"}),t.map(x=>d.jsx(Bl,{$active:f===x.strArea,onClick:()=>y(x.strArea),children:x.strArea},x.strArea))]})]})]}),d.jsxs(mN,{children:[d.jsx(pN,{children:d.jsxs(gN,{children:[w.length," ",w.length===1?"recipe":"recipes"," found"]})}),o==="loading"?d.jsx(vN,{children:"Loading recipes..."}):l?d.jsxs(bN,{children:["Error loading recipes: ",l]}):w.length>0?d.jsx(yN,{children:w.map((x,T)=>d.jsx(vd,{recipe:x,index:T},x.idMeal))}):d.jsx(xN,{children:"No recipes found matching your criteria. Try adjusting your filters."})]})]})},sN=g(Z.div)`
  display: flex;
  flex-direction: column;
`,oN=g.div`
  margin-bottom: 2rem;
`,lN=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`,cN=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 800px;
`,uN=g.form`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`,dN=g.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md) 0 0 var(--radius-md);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-card-bg);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--radius-md);
  }
`,fN=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
  
  @media (max-width: 576px) {
    border-radius: var(--radius-md);
  }
`,hN=g.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`,vb=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`,bb=g.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,xb=g.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`,wb=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Bl=g.button`
  padding: 0.5rem 1rem;
  background-color: ${({$active:e})=>e?"var(--color-primary)":"var(--color-background)"};
  color: ${({$active:e})=>e?"white":"var(--color-text)"};
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${({$active:e})=>e?"var(--color-primary-dark)":"var(--color-border)"};
  }
`,mN=g.div``,pN=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,gN=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
`,yN=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,vN=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`,bN=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-error);
  margin: 3rem 0;
`,xN=g.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin: 3rem 0;
`,wN=()=>d.jsxs(SN,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(_N,{children:[d.jsx(TN,{children:"About TastyRecipes"}),d.jsx(EN,{children:"Discover our story, mission, and the team behind your favorite recipe app."})]}),d.jsxs(jN,{children:[d.jsxs(Zf,{children:[d.jsx(Jf,{children:"Our Story"}),d.jsxs(Wf,{children:[d.jsx("p",{children:"TastyRecipes was born out of a passion for food and a desire to make cooking accessible to everyone. What started as a simple recipe collection has grown into a comprehensive platform that connects food lovers around the world."}),d.jsx("p",{children:"Founded in 2025, our mission is to inspire people to cook delicious meals at home, explore new cuisines, and share their culinary experiences with others. We believe that good food brings people together and creates lasting memories."})]})]}),d.jsxs(CN,{children:[d.jsxs(Ul,{children:[d.jsx(Nl,{children:d.jsx(zr,{})}),d.jsx($l,{children:"Quality Recipes"}),d.jsx(Vl,{children:"We curate and test recipes to ensure they're delicious, reliable, and easy to follow."})]}),d.jsxs(Ul,{children:[d.jsx(Nl,{children:d.jsx(Kn,{})}),d.jsx($l,{children:"Passion for Food"}),d.jsx(Vl,{children:"We're passionate about food and believe cooking should be enjoyable and accessible to everyone."})]}),d.jsxs(Ul,{children:[d.jsx(Nl,{children:d.jsx(Nk,{})}),d.jsx($l,{children:"Community"}),d.jsx(Vl,{children:"We foster a community where food lovers can share, learn, and grow together."})]}),d.jsxs(Ul,{children:[d.jsx(Nl,{children:d.jsx(ed,{})}),d.jsx($l,{children:"Global Cuisine"}),d.jsx(Vl,{children:"We celebrate diverse culinary traditions and make global recipes accessible to all."})]})]}),d.jsxs(Zf,{children:[d.jsx(Jf,{children:"Our Team"}),d.jsxs(Wf,{children:[d.jsx("p",{children:"Behind TastyRecipes is a dedicated team of food enthusiasts, developers, and designers who are committed to creating the best recipe experience for our users. Our diverse backgrounds and shared love for food drive us to continuously improve and innovate."}),d.jsx("p",{children:"From our recipe curators who test and perfect each dish, to our developers who build new features, everyone at TastyRecipes is passionate about helping you discover and enjoy amazing food."})]})]}),d.jsxs(Zf,{children:[d.jsx(Jf,{children:"Our Technology"}),d.jsxs(Wf,{children:[d.jsx("p",{children:"TastyRecipes is built using modern web technologies to provide a seamless and responsive experience across all devices. We use React for our frontend, with Redux for state management, and styled-components for our beautiful UI."}),d.jsx("p",{children:"We're constantly working to improve our platform with new features and optimizations to make your recipe discovery and cooking experience even better."})]})]})]}),d.jsxs(AN,{children:[d.jsx(RN,{children:"Ready to start cooking?"}),d.jsx(kN,{children:"Join our community of food lovers and discover thousands of delicious recipes."}),d.jsxs(ON,{children:[d.jsx(MN,{to:"/categories",children:"Explore Recipes"}),d.jsx(DN,{to:"/register",children:"Create Account"})]})]})]}),SN=g(Z.div)`
  display: flex;
  flex-direction: column;
`,_N=g.div`
  text-align: center;
  margin-bottom: 3rem;
`,TN=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`,EN=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
`,jN=g.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
`,Zf=g.section``,Jf=g.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: var(--color-primary);
    border-radius: 3px;
  }
`,Wf=g.div`
  color: var(--color-text);
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`,CN=g.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Ul=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`,Nl=g.div`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
`,$l=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`,Vl=g.p`
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.6;
`,AN=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 3rem;
  text-align: center;
  box-shadow: var(--shadow-md);
`,RN=g.h2`
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`,kN=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`,ON=g.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`,MN=g(Ce)`
  display: inline-block;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,DN=g(Ce)`
  display: inline-block;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`,zN=()=>{const e=et(),[t,n]=_.useState({name:"",email:"",subject:"",message:""}),[r,i]=_.useState(!1),a=o=>{const{name:l,value:c}=o.target;n(u=>({...u,[l]:c}))},s=o=>{if(o.preventDefault(),!t.name||!t.email||!t.message){e(pt({message:"Please fill in all required fields",type:"error"}));return}i(!0),setTimeout(()=>{e(pt({message:"Your message has been sent! We'll get back to you soon.",type:"success"})),n({name:"",email:"",subject:"",message:""}),i(!1)},1500)};return d.jsxs(LN,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:[d.jsxs(PN,{children:[d.jsx(BN,{children:"Contact Us"}),d.jsx(UN,{children:"Have questions, feedback, or suggestions? We'd love to hear from you!"})]}),d.jsxs(NN,{children:[d.jsxs($N,{children:[d.jsx(VN,{children:"Get in Touch"}),d.jsx(HN,{children:"Our team is here to help. Fill out the form and we'll get back to you as soon as possible."}),d.jsxs(FN,{children:[d.jsxs(eh,{children:[d.jsx(th,{children:d.jsx(Kg,{})}),d.jsxs(nh,{children:[d.jsx(rh,{children:"Email"}),d.jsx(ih,{children:"support@tastyrecipes.com"})]})]}),d.jsxs(eh,{children:[d.jsx(th,{children:d.jsx(Ok,{})}),d.jsxs(nh,{children:[d.jsx(rh,{children:"Phone"}),d.jsx(ih,{children:"+1 (555) 123-4567"})]})]}),d.jsxs(eh,{children:[d.jsx(th,{children:d.jsx(Rk,{})}),d.jsxs(nh,{children:[d.jsx(rh,{children:"Address"}),d.jsx(ih,{children:"123 Recipe Street, Foodville, CA 94123"})]})]})]}),d.jsxs(qN,{children:[d.jsx(GN,{children:"Office Hours"}),d.jsx(Sb,{children:"Monday - Friday: 9:00 AM - 5:00 PM"}),d.jsx(Sb,{children:"Saturday - Sunday: Closed"})]})]}),d.jsxs(IN,{onSubmit:s,children:[d.jsx(YN,{children:"Send a Message"}),d.jsxs(Hl,{children:[d.jsx(Fl,{htmlFor:"name",children:"Name *"}),d.jsx(ah,{type:"text",id:"name",name:"name",value:t.name,onChange:a,required:!0})]}),d.jsxs(Hl,{children:[d.jsx(Fl,{htmlFor:"email",children:"Email *"}),d.jsx(ah,{type:"email",id:"email",name:"email",value:t.email,onChange:a,required:!0})]}),d.jsxs(Hl,{children:[d.jsx(Fl,{htmlFor:"subject",children:"Subject"}),d.jsx(ah,{type:"text",id:"subject",name:"subject",value:t.subject,onChange:a})]}),d.jsxs(Hl,{children:[d.jsx(Fl,{htmlFor:"message",children:"Message *"}),d.jsx(KN,{id:"message",name:"message",rows:"5",value:t.message,onChange:a,required:!0})]}),d.jsxs(XN,{type:"submit",disabled:r,children:[r?"Sending...":"Send Message",d.jsx(kk,{})]})]})]}),d.jsxs(QN,{children:[d.jsx(ZN,{children:"Frequently Asked Questions"}),d.jsxs(JN,{children:[d.jsxs(ql,{children:[d.jsx(Gl,{children:"How do I save a recipe to my favorites?"}),d.jsx(Il,{children:'To save a recipe to your favorites, click on the heart icon on any recipe card or recipe detail page. You can view all your favorites in the "Favorites" section of your profile.'})]}),d.jsxs(ql,{children:[d.jsx(Gl,{children:"Can I create my own recipes?"}),d.jsx(Il,{children:"Currently, we don't support user-submitted recipes, but we're working on adding this feature in the future. Stay tuned for updates!"})]}),d.jsxs(ql,{children:[d.jsx(Gl,{children:"How do I use the meal planner?"}),d.jsx(Il,{children:'The meal planner allows you to organize your meals for the week. Navigate to the "Meal Planner" section, then click on any day and meal time to add a recipe from your favorites or from our collection.'})]}),d.jsxs(ql,{children:[d.jsx(Gl,{children:"Is there a mobile app available?"}),d.jsx(Il,{children:"We're currently developing mobile apps for iOS and Android. In the meantime, our website is fully responsive and works great on mobile devices."})]})]})]})]})},LN=g(Z.div)`
  display: flex;
  flex-direction: column;
`,PN=g.div`
  text-align: center;
  margin-bottom: 3rem;
`,BN=g.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
`,UN=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  max-width: 700px;
  margin: 0 auto;
`,NN=g.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,$N=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
`,VN=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`,HN=g.p`
  color: var(--color-text-light);
  margin-bottom: 2rem;
  line-height: 1.6;
`,FN=g.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
`,eh=g.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`,th=g.div`
  width: 40px;
  height: 40px;
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`,nh=g.div``,rh=g.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`,ih=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
`,qN=g.div`
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`,GN=g.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`,Sb=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`,IN=g.form`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,YN=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`,Hl=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Fl=g.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
`,ah=g.input`
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,KN=g.textarea`
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  resize: vertical;
  min-height: 120px;
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,XN=g.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
  
  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`,QN=g.section`
  margin-bottom: 2rem;
`,ZN=g.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 2rem;
  text-align: center;
`,JN=g.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ql=g.div`
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
`,Gl=g.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.75rem;
`,Il=g.p`
  color: var(--color-text-light);
  font-size: 0.875rem;
  line-height: 1.6;
`,WN=()=>d.jsx(e$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:d.jsxs(t$,{children:[d.jsx(n$,{children:"404"}),d.jsx(r$,{children:"Page Not Found"}),d.jsx(i$,{children:"Oops! The page you're looking for doesn't exist or has been moved."}),d.jsxs(a$,{children:[d.jsxs(s$,{to:"/",children:[d.jsx(r4,{}),d.jsx("span",{children:"Back to Home"})]}),d.jsxs(o$,{to:"/categories",children:[d.jsx(zr,{}),d.jsx("span",{children:"Browse Recipes"})]})]}),d.jsxs(l$,{children:[d.jsx(c$,{children:"Looking for something specific?"}),d.jsxs(u$,{children:[d.jsx(Yl,{to:"/categories",children:"Popular Categories"}),d.jsx(Yl,{to:"/favorites",children:"Your Favorites"}),d.jsx(Yl,{to:"/meal-planner",children:"Meal Planner"}),d.jsx(Yl,{to:"/explore",children:"Explore Recipes"})]})]})]})}),e$=g(Z.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 300px);
  padding: 2rem 0;
`,t$=g.div`
  text-align: center;
  max-width: 600px;
  padding: 3rem 2rem;
  background-color: var(--color-card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
`,n$=g.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
  line-height: 1;
`,r$=g.h2`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
`,i$=g.p`
  font-size: 1.1rem;
  color: var(--color-text-light);
  margin-bottom: 2rem;
`,a$=g.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`,s$=g(Ce)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,o$=g(Ce)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-md);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`,l$=g.div`
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
`,c$=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
`,u$=g.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`,Yl=g(Ce)`
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`,d$=({message:e,type:t="info"})=>{const n=et();_.useEffect(()=>{const a=setTimeout(()=>{n(Av())},5e3);return()=>clearTimeout(a)},[n,e]);const r=()=>{n(Av())},i=()=>{switch(t){case"success":return d.jsx(Tk,{});case"warning":return d.jsx(Ek,{});case"error":return d.jsx(Pk,{});case"info":default:return d.jsx(Ck,{})}};return d.jsxs(f$,{initial:{x:"100%",opacity:0},animate:{x:0,opacity:1},exit:{x:"100%",opacity:0},transition:{type:"spring",stiffness:300,damping:30},$type:t,children:[d.jsx(h$,{children:i()}),d.jsx(m$,{children:e}),d.jsx(p$,{onClick:r,children:d.jsx(Ra,{})})]})},f$=g(Z.div)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: var(--color-card-bg);
  border-left: 4px solid ${({$type:e})=>{switch(e){case"success":return"var(--color-success)";case"warning":return"var(--color-warning)";case"error":return"var(--color-error)";case"info":default:return"var(--color-info)"}}};
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  z-index: 1000;
  max-width: 400px;
  min-width: 300px;
`,h$=g.div`
  margin-right: 1rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  color: ${({$type:e})=>{switch(e){case"success":return"var(--color-success)";case"warning":return"var(--color-warning)";case"error":return"var(--color-error)";case"info":default:return"var(--color-info)"}}};
`,m$=g.p`
  flex: 1;
  margin: 0;
  color: var(--color-text);
  font-size: 0.875rem;
`,p$=g.button`
  background: none;
  border: none;
  color: var(--color-text-light);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.25rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--color-text);
  }
`,g$=()=>{const e=et(),t=Yn(),[n,r]=_.useState(""),[i,a]=_.useState("name"),{searchByName:s,searchByIngredient:o}=Wt();_.useEffect(()=>{const f=setTimeout(()=>{const h=document.getElementById("search-input");h&&h.focus()},100);return()=>clearTimeout(f)},[]);const l=()=>{e(zO())},c=f=>{f.preventDefault(),n.trim()&&(i==="name"?s(n):i==="ingredient"&&o(n),t(`/search?type=${i}&query=${encodeURIComponent(n)}`),l())},u=f=>{f.type==="name"?s(f.term):f.type==="ingredient"&&o(f.term),t(`/search?type=${f.type}&query=${encodeURIComponent(f.term)}`),l()};return d.jsxs(d.Fragment,{children:[d.jsx(y$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:l}),d.jsxs(v$,{initial:{y:"-100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"-100%",opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[d.jsxs(b$,{children:[d.jsx(x$,{children:"Search Recipes"}),d.jsx(w$,{onClick:l,children:d.jsx(Ra,{})})]}),d.jsxs(S$,{onSubmit:c,children:[d.jsxs(_$,{children:[d.jsx(_b,{type:"button",$active:i==="name",onClick:()=>a("name"),children:"By Name"}),d.jsx(_b,{type:"button",$active:i==="ingredient",onClick:()=>a("ingredient"),children:"By Ingredient"})]}),d.jsxs(T$,{children:[d.jsx(E$,{children:d.jsx(Aa,{})}),d.jsx(j$,{id:"search-input",type:"text",placeholder:i==="name"?"Search recipes by name...":"Search recipes by ingredient...",value:n,onChange:f=>r(f.target.value)}),n&&d.jsx(C$,{type:"button",onClick:()=>r(""),children:d.jsx(Ra,{})})]}),d.jsx(A$,{type:"submit",children:"Search"})]}),d.jsxs(R$,{children:[d.jsxs(k$,{children:[d.jsx(jk,{}),d.jsx("span",{children:"Recent Searches"})]}),d.jsxs(O$,{children:[d.jsxs(sh,{onClick:()=>u({term:"Chicken",type:"name"}),children:[d.jsx(oh,{children:"Chicken"}),d.jsx(lh,{children:"By Name"})]}),d.jsxs(sh,{onClick:()=>u({term:"Pasta",type:"name"}),children:[d.jsx(oh,{children:"Pasta"}),d.jsx(lh,{children:"By Name"})]}),d.jsxs(sh,{onClick:()=>u({term:"Tomato",type:"ingredient"}),children:[d.jsx(oh,{children:"Tomato"}),d.jsx(lh,{children:"By Ingredient"})]})]})]})]})]})},y$=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`,v$=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-card-bg);
  z-index: 1001;
  padding: 2rem;
  border-bottom-left-radius: var(--radius-lg);
  border-bottom-right-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-height: 80vh;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    width: 600px;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`,b$=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,x$=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
`,w$=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,S$=g.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`,_$=g.div`
  display: flex;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--color-border);
`,_b=g.button`
  flex: 1;
  padding: 0.75rem;
  border: none;
  background-color: ${({$active:e})=>e?"var(--color-primary)":"var(--color-card-bg)"};
  color: ${({$active:e})=>e?"white":"var(--color-text)"};
  font-weight: ${({$active:e})=>e?"600":"400"};
  cursor: pointer;
  transition: background-color var(--transition-fast), color var(--transition-fast);
  
  &:hover {
    background-color: ${({$active:e})=>e?"var(--color-primary)":"var(--color-border)"};
  }
`,T$=g.div`
  position: relative;
  display: flex;
  align-items: center;
`,E$=g.div`
  position: absolute;
  left: 1rem;
  color: var(--color-text-light);
`,j$=g.input`
  width: 100%;
  padding: 1rem 3rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 1rem;
  color: var(--color-text);
  background-color: var(--color-card-bg);
  transition: border-color var(--transition-fast);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
  
  &::placeholder {
    color: var(--color-text-light);
  }
`,C$=g.button`
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color-text-light);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--color-text);
  }
`,A$=g.button`
  padding: 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,R$=g.div`
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`,k$=g.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,O$=g.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,sh=g.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,oh=g.span`
  color: var(--color-text);
  font-weight: 500;
`,lh=g.span`
  color: var(--color-text-light);
  font-size: 0.75rem;
`,M$=()=>{const e=et(),{categories:t,areas:n,ingredients:r,loadCategories:i,loadAreas:a,loadIngredients:s,applyFilter:o,resetFilters:l}=Wt(),[c,u]=_.useState(""),[f,h]=_.useState(""),[m,v]=_.useState("");_.useEffect(()=>{t.length===0&&i(),n.length===0&&a(),r.length===0&&s()},[t.length,n.length,r.length,i,a,s]);const w=()=>{e(LO())},S=()=>{c&&o("category",c),f&&o("area",f),m&&o("ingredient",m),w()},p=()=>{u(""),h(""),v(""),l(),w()};return d.jsxs(d.Fragment,{children:[d.jsx(D$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:w}),d.jsxs(z$,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"100%",opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[d.jsxs(L$,{children:[d.jsxs(P$,{children:[d.jsx(n4,{}),d.jsx("span",{children:"Filter Recipes"})]}),d.jsx(B$,{onClick:w,children:d.jsx(Ra,{})})]}),d.jsxs(U$,{children:[d.jsxs(ch,{children:[d.jsxs(uh,{children:[d.jsx(Tb,{children:d.jsx(zr,{})}),d.jsx("span",{children:"Category"})]}),d.jsxs(Eb,{children:[d.jsx(Kl,{$active:c==="",onClick:()=>u(""),children:"All"}),t.map(y=>d.jsx(Kl,{$active:c===y.strCategory,onClick:()=>u(y.strCategory),children:y.strCategory},y.idCategory||y.strCategory))]})]}),d.jsxs(ch,{children:[d.jsxs(uh,{children:[d.jsx(Tb,{children:d.jsx(ed,{})}),d.jsx("span",{children:"Cuisine"})]}),d.jsxs(Eb,{children:[d.jsx(Kl,{$active:f==="",onClick:()=>h(""),children:"All"}),n.map(y=>d.jsx(Kl,{$active:f===y.strArea,onClick:()=>h(y.strArea),children:y.strArea},y.strArea))]})]}),d.jsxs(ch,{children:[d.jsx(uh,{children:d.jsx("span",{children:"Main Ingredient"})}),d.jsxs(N$,{value:m,onChange:y=>v(y.target.value),children:[d.jsx("option",{value:"",children:"All Ingredients"}),r.slice(0,100).map(y=>d.jsx("option",{value:y.strIngredient,children:y.strIngredient},y.idIngredient||y.strIngredient))]})]})]}),d.jsxs($$,{children:[d.jsx(V$,{onClick:p,children:"Reset Filters"}),d.jsx(H$,{onClick:S,children:"Apply Filters"})]})]})]})},D$=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`,z$=g(Z.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-card-bg);
  z-index: 1001;
  padding: 2rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-height: 80vh;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    width: 600px;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`,L$=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,P$=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`,B$=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,U$=g.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`,ch=g.div``,uh=g.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Tb=g.span`
  color: var(--color-primary);
  display: flex;
  align-items: center;
`,Eb=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,Kl=g.button`
  padding: 0.5rem 1rem;
  background-color: ${({$active:e})=>e?"var(--color-primary)":"var(--color-background)"};
  color: ${({$active:e})=>e?"white":"var(--color-text)"};
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${({$active:e})=>e?"var(--color-primary-dark)":"var(--color-border)"};
  }
`,N$=g.select`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,$$=g.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,V$=g.button`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,H$=g.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,F$=()=>{const e=et(),{recipes:t,searchByName:n,favorites:r,addRecipeToMealPlan:i,status:a}=Wt(),[s,o]=_.useState(""),[l,c]=_.useState([]),[u,f]=_.useState("search"),[h,m]=_.useState(""),[v,w]=_.useState("");_.useEffect(()=>{m(new Date().toISOString().split("T")[0]),w("dinner")},[]),_.useEffect(()=>{if(s.trim()===""){c([]);return}const x=setTimeout(()=>{n(s)},500);return()=>clearTimeout(x)},[s,n]),_.useEffect(()=>{if(s.trim()===""){c([]);return}const x=t.filter(T=>T.strMeal.toLowerCase().includes(s.toLowerCase()));c(x)},[t,s]);const S=()=>{e(BO())},p=x=>{i(h,v,x),S()},y=x=>new Date(x).toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"}),b=x=>x.charAt(0).toUpperCase()+x.slice(1);return d.jsxs(d.Fragment,{children:[d.jsx(q$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:S}),d.jsxs(G$,{initial:{y:"100%",opacity:0},animate:{y:0,opacity:1},exit:{y:"100%",opacity:0},transition:{type:"spring",damping:25,stiffness:300},children:[d.jsxs(I$,{children:[d.jsxs(Y$,{children:[d.jsx(Ga,{}),d.jsx("span",{children:"Add to Meal Plan"})]}),d.jsx(K$,{onClick:S,children:d.jsx(Ra,{})})]}),d.jsxs(X$,{children:[d.jsxs(jb,{children:[d.jsx(Cb,{children:"Day:"}),d.jsx(Ab,{children:y(h)})]}),d.jsxs(jb,{children:[d.jsx(Cb,{children:"Meal:"}),d.jsx(Ab,{children:b(v)})]})]}),d.jsxs(Q$,{children:[d.jsxs(Rb,{$active:u==="search",onClick:()=>f("search"),children:[d.jsx(Aa,{}),d.jsx("span",{children:"Search Recipes"})]}),d.jsxs(Rb,{$active:u==="favorites",onClick:()=>f("favorites"),children:[d.jsx(zr,{}),d.jsx("span",{children:"Your Favorites"})]})]}),u==="search"&&d.jsxs(d.Fragment,{children:[d.jsx(Z$,{children:d.jsx(J$,{type:"text",placeholder:"Search for recipes...",value:s,onChange:x=>o(x.target.value)})}),d.jsx(kb,{children:a==="loading"?d.jsx(W$,{children:"Searching recipes..."}):s.trim()===""?d.jsx(dh,{children:"Enter a search term to find recipes"}):l.length===0?d.jsxs(dh,{children:['No recipes found matching "',s,'"']}):l.map(x=>d.jsxs(Ob,{children:[d.jsx(Mb,{src:x.strMealThumb,alt:x.strMeal}),d.jsxs(Db,{children:[d.jsx(zb,{children:x.strMeal}),d.jsx(Lb,{children:x.strCategory})]}),d.jsx(Pb,{onClick:()=>p(x),children:"Add"})]},x.idMeal))})]}),u==="favorites"&&d.jsx(kb,{children:r.length===0?d.jsx(dh,{children:"You don't have any favorite recipes yet"}):r.map(x=>d.jsxs(Ob,{children:[d.jsx(Mb,{src:x.strMealThumb,alt:x.strMeal}),d.jsxs(Db,{children:[d.jsx(zb,{children:x.strMeal}),d.jsx(Lb,{children:x.strCategory})]}),d.jsx(Pb,{onClick:()=>p(x),children:"Add"})]},x.idMeal))})]})]})},q$=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(3px);
`,G$=g(Z.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--color-card-bg);
  z-index: 1001;
  padding: 2rem;
  border-top-left-radius: var(--radius-lg);
  border-top-right-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  max-height: 80vh;
  overflow-y: auto;
  
  @media (min-width: 768px) {
    width: 600px;
    left: 50%;
    transform: translateX(-50%) !important;
  }
`,I$=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`,Y$=g.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--color-primary);
  }
`,K$=g.button`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,X$=g.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: var(--color-background);
  border-radius: var(--radius-md);
`,jb=g.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Cb=g.span`
  font-weight: 600;
  color: var(--color-text);
`,Ab=g.span`
  color: var(--color-primary);
  font-weight: 500;
`,Q$=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`,Rb=g.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: ${({$active:e})=>e?"var(--color-primary)":"var(--color-background)"};
  color: ${({$active:e})=>e?"white":"var(--color-text)"};
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  font-weight: ${({$active:e})=>e?"600":"500"};
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${({$active:e})=>e?"var(--color-primary-dark)":"var(--color-border)"};
  }
`,Z$=g.div`
  margin-bottom: 1.5rem;
`,J$=g.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--color-text);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
`,kb=g.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-height: 400px;
  overflow-y: auto;
`,Ob=g.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background-color: var(--color-background);
  border-radius: var(--radius-md);
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-border);
  }
`,Mb=g.img`
  width: 50px;
  height: 50px;
  border-radius: var(--radius-sm);
  object-fit: cover;
`,Db=g.div`
  flex: 1;
`,zb=g.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`,Lb=g.p`
  font-size: 0.75rem;
  color: var(--color-text-light);
`,Pb=g.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-fast);
  
  &:hover {
    background-color: var(--color-primary-dark);
  }
`,W$=g.p`
  text-align: center;
  padding: 2rem;
  color: var(--color-text-light);
`,dh=g.p`
  text-align: center;
  padding: 2rem;
  color: var(--color-text-light);
`,eV=()=>d.jsx(nV,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:d.jsxs(rV,{children:[d.jsx(iV,{}),d.jsx(aV,{children:"Loading..."})]})}),tV=AC`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,nV=g(Z.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(3px);
`,rV=g.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-card-bg);
  padding: 2rem;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
`,iV=g.div`
  width: 50px;
  height: 50px;
  border: 5px solid rgba(255, 107, 107, 0.3);
  border-radius: 50%;
  border-top-color: var(--color-primary);
  animation: ${tV} 1s ease-in-out infinite;
  margin-bottom: 1rem;
`,aV=g.p`
  color: var(--color-text);
  font-size: 1rem;
  font-weight: 500;
`,sV=CC`
  :root {
    /* Light theme colors */
    --color-primary: #ff6b6b;
    --color-primary-light: #ff8e8e;
    --color-primary-dark: #e05050;
    --color-secondary: #4ecdc4;
    --color-accent: #ffd166;
    --color-background: #f9f9f9;
    --color-card-bg: #ffffff;
    --color-text: #333333;
    --color-text-light: #666666;
    --color-border: #e0e0e0;
    --color-success: #6bcd69;
    --color-warning: #ffc145;
    --color-error: #ff6b6b;
    --color-info: #4ecdc4;
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  [data-theme="dark"] {
    /* Dark theme colors */
    --color-primary: #ff6b6b;
    --color-primary-light: #ff8e8e;
    --color-primary-dark: #e05050;
    --color-secondary: #4ecdc4;
    --color-accent: #ffd166;
    --color-background: #1a1a1a;
    --color-card-bg: #2a2a2a;
    --color-text: #f0f0f0;
    --color-text-light: #b0b0b0;
    --color-border: #444444;
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--color-background);
    color: var(--color-text);
    line-height: 1.6;
    transition: background-color var(--transition-normal), color var(--transition-normal);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--color-primary-dark);
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .text-center {
    text-align: center;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Responsive breakpoints */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`,oV=({children:e})=>{const t=le(a0);return et(),_.useEffect(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),d.jsx("div",{className:`theme-${t}`,children:e})};function lV(){et();const e=le(HO),t=le(NO),n=le($O),r=le(VO),i=le(FO);return d.jsx(oV,{children:d.jsxs(vj,{children:[d.jsx(sV,{}),d.jsxs(cV,{children:[d.jsx(xD,{}),d.jsx(CL,{}),d.jsxs(uV,{children:[d.jsx(mc,{mode:"wait",children:i&&d.jsx(eV,{})}),d.jsx(dV,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},children:d.jsxs(KE,{children:[d.jsx(nt,{path:"/",element:d.jsx(KL,{})}),d.jsx(nt,{path:"/categories",element:d.jsx(dP,{})}),d.jsx(nt,{path:"/category/:categoryName",element:d.jsx(RP,{})}),d.jsx(nt,{path:"/recipe/:recipeId",element:d.jsx(pB,{})}),d.jsx(nt,{path:"/favorites",element:d.jsx(TB,{})}),d.jsx(nt,{path:"/meal-planner",element:d.jsx(FB,{})}),d.jsx(nt,{path:"/profile",element:d.jsx(lU,{})}),d.jsx(nt,{path:"/login",element:d.jsx(_U,{})}),d.jsx(nt,{path:"/register",element:d.jsx(HU,{})}),d.jsx(nt,{path:"/explore",element:d.jsx(aN,{})}),d.jsx(nt,{path:"/about",element:d.jsx(wN,{})}),d.jsx(nt,{path:"/contact",element:d.jsx(zN,{})}),d.jsx(nt,{path:"*",element:d.jsx(WN,{})})]})})]}),d.jsx(AD,{}),d.jsxs(mc,{children:[t&&d.jsx(g$,{}),n&&d.jsx(M$,{}),r&&d.jsx(F$,{})]}),d.jsx(mc,{children:e.message&&d.jsx(d$,{message:e.message,type:e.type})})]})]})})}const cV=g.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,uV=g.main`
  flex: 1;
  position: relative;
`,dV=g(Z.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`,fV=dO({reducer:{recipes:jL,user:bD,ui:qO}});ET.createRoot(document.getElementById("root")).render(d.jsx(Ve.StrictMode,{children:d.jsx(GT,{store:fV,children:d.jsx(lV,{})})}));export{Bb as g};
