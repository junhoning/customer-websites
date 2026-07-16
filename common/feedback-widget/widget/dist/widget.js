"use strict";(()=>{var R0=Object.create;var xc=Object.defineProperty;var E0=Object.getOwnPropertyDescriptor;var $0=Object.getOwnPropertyNames;var M0=Object.getPrototypeOf,z0=Object.prototype.hasOwnProperty;var Mt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var A0=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of $0(t))!z0.call(e,o)&&o!==a&&xc(e,o,{get:()=>t[o],enumerable:!(r=E0(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?R0(M0(e)):{},A0(t||!e||!e.__esModule?xc(a,"default",{value:e,enumerable:!0}):a,e));var Ec=Mt(B=>{"use strict";var oo=Symbol.for("react.element"),D0=Symbol.for("react.portal"),B0=Symbol.for("react.fragment"),F0=Symbol.for("react.strict_mode"),O0=Symbol.for("react.profiler"),j0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),N0=Symbol.for("react.forward_ref"),H0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),q0=Symbol.for("react.lazy"),bc=Symbol.iterator;function W0(e){return e===null||typeof e!="object"?null:(e=bc&&e[bc]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sc=Object.assign,Cc={};function sr(e,t,a){this.props=e,this.context=t,this.refs=Cc,this.updater=a||Lc}sr.prototype.isReactComponent={};sr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ic(){}Ic.prototype=sr.prototype;function Tl(e,t,a){this.props=e,this.context=t,this.refs=Cc,this.updater=a||Lc}var Rl=Tl.prototype=new Ic;Rl.constructor=Tl;Sc(Rl,sr.prototype);Rl.isPureReactComponent=!0;var yc=Array.isArray,kc=Object.prototype.hasOwnProperty,El={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Tc(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)kc.call(t,r)&&!Pc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:oo,type:e,key:i,ref:n,props:o,_owner:El.current}}function V0(e,t){return{$$typeof:oo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $l(e){return typeof e=="object"&&e!==null&&e.$$typeof===oo}function G0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var wc=/\/+/g;function Pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?G0(""+e.key):t.toString(36)}function xi(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case oo:case D0:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+Pl(n,0):r,yc(o)?(a="",e!=null&&(a=e.replace(wc,"$&/")+"/"),xi(o,t,a,"",function(d){return d})):o!=null&&($l(o)&&(o=V0(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(wc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",yc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Pl(i,s);n+=xi(i,t,a,u,o)}else if(u=W0(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Pl(i,s++),n+=xi(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function vi(e,t,a){if(e==null)return e;var r=[],o=0;return xi(e,r,"","",function(i){return t.call(a,i,o++)}),r}function X0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},bi={transition:null},Y0={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:bi,ReactCurrentOwner:El};function Rc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:vi,forEach:function(e,t,a){vi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return vi(e,function(){t++}),t},toArray:function(e){return vi(e,function(t){return t})||[]},only:function(e){if(!$l(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=sr;B.Fragment=B0;B.Profiler=O0;B.PureComponent=Tl;B.StrictMode=F0;B.Suspense=H0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y0;B.act=Rc;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Sc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=El.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)kc.call(t,u)&&!Pc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:oo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:_0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:j0,_context:e},e.Consumer=e};B.createElement=Tc;B.createFactory=function(e){var t=Tc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:N0,render:e}};B.isValidElement=$l;B.lazy=function(e){return{$$typeof:q0,_payload:{_status:-1,_result:e},_init:X0}};B.memo=function(e,t){return{$$typeof:U0,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=bi.transition;bi.transition={};try{e()}finally{bi.transition=t}};B.unstable_act=Rc;B.useCallback=function(e,t){return Pe.current.useCallback(e,t)};B.useContext=function(e){return Pe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};B.useEffect=function(e,t){return Pe.current.useEffect(e,t)};B.useId=function(){return Pe.current.useId()};B.useImperativeHandle=function(e,t,a){return Pe.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Pe.current.useMemo(e,t)};B.useReducer=function(e,t,a){return Pe.current.useReducer(e,t,a)};B.useRef=function(e){return Pe.current.useRef(e)};B.useState=function(e){return Pe.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return Pe.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return Pe.current.useTransition()};B.version="18.3.1"});var I=Mt((uC,$c)=>{"use strict";$c.exports=Ec()});var Nc=Mt(q=>{"use strict";function Dl(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<yi(o,t))e[r]=t,e[a]=o,a=r;else break e}}function ut(e){return e.length===0?null:e[0]}function Li(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>yi(s,a))u<o&&0>yi(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>yi(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function yi(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Mc=performance,q.unstable_now=function(){return Mc.now()}):(Ml=Date,zc=Ml.now(),q.unstable_now=function(){return Ml.now()-zc});var Mc,Ml,zc,Lt=[],Jt=[],K0=1,Ze=null,ye=3,Si=!1,Ta=!1,no=!1,Bc=typeof setTimeout=="function"?setTimeout:null,Fc=typeof clearTimeout=="function"?clearTimeout:null,Ac=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Bl(e){for(var t=ut(Jt);t!==null;){if(t.callback===null)Li(Jt);else if(t.startTime<=e)Li(Jt),t.sortIndex=t.expirationTime,Dl(Lt,t);else break;t=ut(Jt)}}function Fl(e){if(no=!1,Bl(e),!Ta)if(ut(Lt)!==null)Ta=!0,jl(Ol);else{var t=ut(Jt);t!==null&&_l(Fl,t.startTime-e)}}function Ol(e,t){Ta=!1,no&&(no=!1,Fc(lo),lo=-1),Si=!0;var a=ye;try{for(Bl(t),Ze=ut(Lt);Ze!==null&&(!(Ze.expirationTime>t)||e&&!_c());){var r=Ze.callback;if(typeof r=="function"){Ze.callback=null,ye=Ze.priorityLevel;var o=r(Ze.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?Ze.callback=o:Ze===ut(Lt)&&Li(Lt),Bl(t)}else Li(Lt);Ze=ut(Lt)}if(Ze!==null)var i=!0;else{var n=ut(Jt);n!==null&&_l(Fl,n.startTime-t),i=!1}return i}finally{Ze=null,ye=a,Si=!1}}var Ci=!1,wi=null,lo=-1,Oc=5,jc=-1;function _c(){return!(q.unstable_now()-jc<Oc)}function zl(){if(wi!==null){var e=q.unstable_now();jc=e;var t=!0;try{t=wi(!0,e)}finally{t?io():(Ci=!1,wi=null)}}else Ci=!1}var io;typeof Ac=="function"?io=function(){Ac(zl)}:typeof MessageChannel<"u"?(Al=new MessageChannel,Dc=Al.port2,Al.port1.onmessage=zl,io=function(){Dc.postMessage(null)}):io=function(){Bc(zl,0)};var Al,Dc;function jl(e){wi=e,Ci||(Ci=!0,io())}function _l(e,t){lo=Bc(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Ta||Si||(Ta=!0,jl(Ol))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Oc=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return ye};q.unstable_getFirstCallbackNode=function(){return ut(Lt)};q.unstable_next=function(e){switch(ye){case 1:case 2:case 3:var t=3;break;default:t=ye}var a=ye;ye=t;try{return e()}finally{ye=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ye;ye=e;try{return t()}finally{ye=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:K0++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,Dl(Jt,e),ut(Lt)===null&&e===ut(Jt)&&(no?(Fc(lo),lo=-1):no=!0,_l(Fl,a-r))):(e.sortIndex=o,Dl(Lt,e),Ta||Si||(Ta=!0,jl(Ol))),e};q.unstable_shouldYield=_c;q.unstable_wrapCallback=function(e){var t=ye;return function(){var a=ye;ye=t;try{return e.apply(this,arguments)}finally{ye=a}}}});var Uc=Mt((cC,Hc)=>{"use strict";Hc.exports=Nc()});var Xg=Mt(Ge=>{"use strict";var Q0=I(),We=Uc();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qf=new Set,Eo={};function Na(e,t){Rr(e,t),Rr(e+"Capture",t)}function Rr(e,t){for(Eo[e]=t,e=0;e<t.length;e++)Qf.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),us=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qc={},Wc={};function J0(e){return us.call(Wc,e)?!0:us.call(qc,e)?!1:Z0.test(e)?Wc[e]=!0:(qc[e]=!0,!1)}function eb(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function tb(e,t,a,r){if(t===null||typeof t>"u"||eb(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var tu=/[\-:]([a-z])/g;function au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(tu,au);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(tu,au);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(tu,au);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function ru(e,t,a,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(tb(t,a,o,r)&&(a=null),r||o===null?J0(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Ht=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ii=Symbol.for("react.element"),cr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),ou=Symbol.for("react.strict_mode"),ds=Symbol.for("react.profiler"),Zf=Symbol.for("react.provider"),Jf=Symbol.for("react.context"),iu=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),fs=Symbol.for("react.suspense_list"),nu=Symbol.for("react.memo"),ta=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var ep=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Vc=Symbol.iterator;function so(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Nl;function vo(e){if(Nl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Hl=!1;function Ul(e,t){if(!e||Hl)return"";Hl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{Hl=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?vo(e):""}function ab(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=Ul(e.type,!1),e;case 11:return e=Ul(e.type.render,!1),e;case 1:return e=Ul(e.type,!0),e;default:return""}}function ps(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case cr:return"Portal";case ds:return"Profiler";case ou:return"StrictMode";case cs:return"Suspense";case fs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jf:return(e.displayName||"Context")+".Consumer";case Zf:return(e._context.displayName||"Context")+".Provider";case iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case nu:return t=e.displayName||null,t!==null?t:ps(e.type)||"Memo";case ta:t=e._payload,e=e._init;try{return ps(e(t))}catch{}}return null}function rb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ps(t);case 8:return t===ou?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ma(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ob(e){var t=tp(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ki(e){e._valueTracker||(e._valueTracker=ob(e))}function ap(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=tp(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function en(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gs(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Gc(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=ma(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function rp(e,t){t=t.checked,t!=null&&ru(e,"checked",t,!1)}function ms(e,t){rp(e,t);var a=ma(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,a):t.hasOwnProperty("defaultValue")&&hs(e,t.type,ma(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xc(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function hs(e,t,a){(t!=="number"||en(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var xo=Array.isArray;function Sr(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ma(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function vs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Yc(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(C(92));if(xo(a)){if(1<a.length)throw Error(C(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:ma(a)}}function op(e,t){var a=ma(t.value),r=ma(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function Kc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ip(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ip(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,np=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $o(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var wo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ib=["Webkit","ms","Moz","O"];Object.keys(wo).forEach(function(e){ib.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),wo[t]=wo[e]})});function lp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||wo.hasOwnProperty(e)&&wo[e]?(""+t).trim():t+"px"}function sp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=lp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var nb=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bs(e,t){if(t){if(nb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ys(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Cr=null,Ir=null;function Qc(e){if(e=Yo(e)){if(typeof Ls!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Rn(t),Ls(e.stateNode,e.type,t))}}function up(e){Cr?Ir?Ir.push(e):Ir=[e]:Cr=e}function dp(){if(Cr){var e=Cr,t=Ir;if(Ir=Cr=null,Qc(e),t)for(e=0;e<t.length;e++)Qc(t[e])}}function cp(e,t){return e(t)}function fp(){}var ql=!1;function pp(e,t,a){if(ql)return e(t,a);ql=!0;try{return cp(e,t,a)}finally{ql=!1,(Cr!==null||Ir!==null)&&(fp(),dp())}}function Mo(e,t){var a=e.stateNode;if(a===null)return null;var r=Rn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,t,typeof a));return a}var Ss=!1;if(Ot)try{ur={},Object.defineProperty(ur,"passive",{get:function(){Ss=!0}}),window.addEventListener("test",ur,ur),window.removeEventListener("test",ur,ur)}catch{Ss=!1}var ur;function lb(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var Lo=!1,tn=null,an=!1,Cs=null,sb={onError:function(e){Lo=!0,tn=e}};function ub(e,t,a,r,o,i,n,s,u){Lo=!1,tn=null,lb.apply(sb,arguments)}function db(e,t,a,r,o,i,n,s,u){if(ub.apply(this,arguments),Lo){if(Lo){var d=tn;Lo=!1,tn=null}else throw Error(C(198));an||(an=!0,Cs=d)}}function Ha(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function gp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Zc(e){if(Ha(e)!==e)throw Error(C(188))}function cb(e){var t=e.alternate;if(!t){if(t=Ha(e),t===null)throw Error(C(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return Zc(o),e;if(i===r)return Zc(o),t;i=i.sibling}throw Error(C(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(C(189))}}if(a.alternate!==r)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:t}function mp(e){return e=cb(e),e!==null?hp(e):null}function hp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hp(e);if(t!==null)return t;e=e.sibling}return null}var vp=We.unstable_scheduleCallback,Jc=We.unstable_cancelCallback,fb=We.unstable_shouldYield,pb=We.unstable_requestPaint,re=We.unstable_now,gb=We.unstable_getCurrentPriorityLevel,su=We.unstable_ImmediatePriority,xp=We.unstable_UserBlockingPriority,rn=We.unstable_NormalPriority,mb=We.unstable_LowPriority,bp=We.unstable_IdlePriority,In=null,kt=null;function hb(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(In,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:bb,vb=Math.log,xb=Math.LN2;function bb(e){return e>>>=0,e===0?32:31-(vb(e)/xb|0)|0}var Ti=64,Ri=4194304;function bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function on(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=bo(s):(i&=n,i!==0&&(r=bo(i)))}else n=a&~o,n!==0?r=bo(n):i!==0&&(r=bo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-gt(t),o=1<<a,r|=e[a],t&=~o;return r}function yb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wb(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-gt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=yb(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Is(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yp(){var e=Ti;return Ti<<=1,(Ti&4194240)===0&&(Ti=64),e}function Wl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Go(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=a}function Lb(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-gt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function uu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-gt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var _=0;function wp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Lp,du,Sp,Cp,Ip,ks=!1,Ei=[],la=null,sa=null,ua=null,zo=new Map,Ao=new Map,ra=[],Sb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ef(e,t){switch(e){case"focusin":case"focusout":la=null;break;case"dragenter":case"dragleave":sa=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ao.delete(t.pointerId)}}function uo(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Yo(t),t!==null&&du(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cb(e,t,a,r,o){switch(t){case"focusin":return la=uo(la,e,t,a,r,o),!0;case"dragenter":return sa=uo(sa,e,t,a,r,o),!0;case"mouseover":return ua=uo(ua,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return zo.set(i,uo(zo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ao.set(i,uo(Ao.get(i)||null,e,t,a,r,o)),!0}return!1}function kp(e){var t=$a(e.target);if(t!==null){var a=Ha(t);if(a!==null){if(t=a.tag,t===13){if(t=gp(a),t!==null){e.blockedOn=t,Ip(e.priority,function(){Sp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ps(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ws=r,a.target.dispatchEvent(r),ws=null}else return t=Yo(a),t!==null&&du(t),e.blockedOn=a,!1;t.shift()}return!0}function tf(e,t,a){qi(e)&&a.delete(t)}function Ib(){ks=!1,la!==null&&qi(la)&&(la=null),sa!==null&&qi(sa)&&(sa=null),ua!==null&&qi(ua)&&(ua=null),zo.forEach(tf),Ao.forEach(tf)}function co(e,t){e.blockedOn===t&&(e.blockedOn=null,ks||(ks=!0,We.unstable_scheduleCallback(We.unstable_NormalPriority,Ib)))}function Do(e){function t(o){return co(o,e)}if(0<Ei.length){co(Ei[0],e);for(var a=1;a<Ei.length;a++){var r=Ei[a];r.blockedOn===e&&(r.blockedOn=null)}}for(la!==null&&co(la,e),sa!==null&&co(sa,e),ua!==null&&co(ua,e),zo.forEach(t),Ao.forEach(t),a=0;a<ra.length;a++)r=ra[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<ra.length&&(a=ra[0],a.blockedOn===null);)kp(a),a.blockedOn===null&&ra.shift()}var kr=Ht.ReactCurrentBatchConfig,nn=!0;function kb(e,t,a,r){var o=_,i=kr.transition;kr.transition=null;try{_=1,cu(e,t,a,r)}finally{_=o,kr.transition=i}}function Pb(e,t,a,r){var o=_,i=kr.transition;kr.transition=null;try{_=4,cu(e,t,a,r)}finally{_=o,kr.transition=i}}function cu(e,t,a,r){if(nn){var o=Ps(e,t,a,r);if(o===null)Zl(e,t,r,ln,a),ef(e,r);else if(Cb(o,e,t,a,r))r.stopPropagation();else if(ef(e,r),t&4&&-1<Sb.indexOf(e)){for(;o!==null;){var i=Yo(o);if(i!==null&&Lp(i),i=Ps(e,t,a,r),i===null&&Zl(e,t,r,ln,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else Zl(e,t,r,null,a)}}var ln=null;function Ps(e,t,a,r){if(ln=null,e=lu(r),e=$a(e),e!==null)if(t=Ha(e),t===null)e=null;else if(a=t.tag,a===13){if(e=gp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ln=e,null}function Pp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gb()){case su:return 1;case xp:return 4;case rn:case mb:return 16;case bp:return 536870912;default:return 16}default:return 16}}var ia=null,fu=null,Wi=null;function Tp(){if(Wi)return Wi;var e,t=fu,a=t.length,r,o="value"in ia?ia.value:ia.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return Wi=o.slice(e,1<r?1-r:void 0)}function Vi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $i(){return!0}function af(){return!1}function Ve(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$i:af,this.isPropagationStopped=af,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$i)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$i)},persist:function(){},isPersistent:$i}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Ve(Br),Xo=Q({},Br,{view:0,detail:0}),Tb=Ve(Xo),Vl,Gl,fo,kn=Q({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(Vl=e.screenX-fo.screenX,Gl=e.screenY-fo.screenY):Gl=Vl=0,fo=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Gl}}),rf=Ve(kn),Rb=Q({},kn,{dataTransfer:0}),Eb=Ve(Rb),$b=Q({},Xo,{relatedTarget:0}),Xl=Ve($b),Mb=Q({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),zb=Ve(Mb),Ab=Q({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Db=Ve(Ab),Bb=Q({},Br,{data:0}),of=Ve(Bb),Fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ob={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _b(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jb[e])?!!t[e]:!1}function gu(){return _b}var Nb=Q({},Xo,{key:function(e){if(e.key){var t=Fb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ob[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(e){return e.type==="keypress"?Vi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hb=Ve(Nb),Ub=Q({},kn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nf=Ve(Ub),qb=Q({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),Wb=Ve(qb),Vb=Q({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gb=Ve(Vb),Xb=Q({},kn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Yb=Ve(Xb),Kb=[9,13,27,32],mu=Ot&&"CompositionEvent"in window,So=null;Ot&&"documentMode"in document&&(So=document.documentMode);var Qb=Ot&&"TextEvent"in window&&!So,Rp=Ot&&(!mu||So&&8<So&&11>=So),lf=" ",sf=!1;function Ep(e,t){switch(e){case"keyup":return Kb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $p(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function Zb(e,t){switch(e){case"compositionend":return $p(t);case"keypress":return t.which!==32?null:(sf=!0,lf);case"textInput":return e=t.data,e===lf&&sf?null:e;default:return null}}function Jb(e,t){if(pr)return e==="compositionend"||!mu&&Ep(e,t)?(e=Tp(),Wi=fu=ia=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rp&&t.locale!=="ko"?null:t.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ey[e.type]:t==="textarea"}function Mp(e,t,a,r){up(r),t=sn(t,"onChange"),0<t.length&&(a=new pu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Co=null,Bo=null;function ty(e){Up(e,0)}function Pn(e){var t=hr(e);if(ap(t))return e}function ay(e,t){if(e==="change")return t}var zp=!1;Ot&&(Ot?(zi="oninput"in document,zi||(Yl=document.createElement("div"),Yl.setAttribute("oninput","return;"),zi=typeof Yl.oninput=="function"),Mi=zi):Mi=!1,zp=Mi&&(!document.documentMode||9<document.documentMode));var Mi,zi,Yl;function df(){Co&&(Co.detachEvent("onpropertychange",Ap),Bo=Co=null)}function Ap(e){if(e.propertyName==="value"&&Pn(Bo)){var t=[];Mp(t,Bo,e,lu(e)),pp(ty,t)}}function ry(e,t,a){e==="focusin"?(df(),Co=t,Bo=a,Co.attachEvent("onpropertychange",Ap)):e==="focusout"&&df()}function oy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Bo)}function iy(e,t){if(e==="click")return Pn(t)}function ny(e,t){if(e==="input"||e==="change")return Pn(t)}function ly(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:ly;function Fo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!us.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function cf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ff(e,t){var a=cf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cf(a)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bp(){for(var e=window,t=en();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=en(e.document)}return t}function hu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function sy(e){var t=Bp(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Dp(a.ownerDocument.documentElement,a)){if(r!==null&&hu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ff(a,i);var n=ff(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uy=Ot&&"documentMode"in document&&11>=document.documentMode,gr=null,Ts=null,Io=null,Rs=!1;function pf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Rs||gr==null||gr!==en(r)||(r=gr,"selectionStart"in r&&hu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&Fo(Io,r)||(Io=r,r=sn(Ts,"onSelect"),0<r.length&&(t=new pu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=gr)))}function Ai(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var mr={animationend:Ai("Animation","AnimationEnd"),animationiteration:Ai("Animation","AnimationIteration"),animationstart:Ai("Animation","AnimationStart"),transitionend:Ai("Transition","TransitionEnd")},Kl={},Fp={};Ot&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Tn(e){if(Kl[e])return Kl[e];if(!mr[e])return e;var t=mr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Fp)return Kl[e]=t[a];return e}var Op=Tn("animationend"),jp=Tn("animationiteration"),_p=Tn("animationstart"),Np=Tn("transitionend"),Hp=new Map,gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function va(e,t){Hp.set(e,t),Na(t,[e])}for(Di=0;Di<gf.length;Di++)Bi=gf[Di],mf=Bi.toLowerCase(),hf=Bi[0].toUpperCase()+Bi.slice(1),va(mf,"on"+hf);var Bi,mf,hf,Di;va(Op,"onAnimationEnd");va(jp,"onAnimationIteration");va(_p,"onAnimationStart");va("dblclick","onDoubleClick");va("focusin","onFocus");va("focusout","onBlur");va(Np,"onTransitionEnd");Rr("onMouseEnter",["mouseout","mouseover"]);Rr("onMouseLeave",["mouseout","mouseover"]);Rr("onPointerEnter",["pointerout","pointerover"]);Rr("onPointerLeave",["pointerout","pointerover"]);Na("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Na("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Na("onBeforeInput",["compositionend","keypress","textInput","paste"]);Na("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Na("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Na("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dy=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function vf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,db(r,t,void 0,e),e.currentTarget=null}function Up(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;vf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;vf(o,s,d),i=u}}}if(an)throw e=Cs,an=!1,Cs=null,e}function V(e,t){var a=t[As];a===void 0&&(a=t[As]=new Set);var r=e+"__bubble";a.has(r)||(qp(t,e,2,!1),a.add(r))}function Ql(e,t,a){var r=0;t&&(r|=4),qp(a,e,r,t)}var Fi="_reactListening"+Math.random().toString(36).slice(2);function Oo(e){if(!e[Fi]){e[Fi]=!0,Qf.forEach(function(a){a!=="selectionchange"&&(dy.has(a)||Ql(a,!1,e),Ql(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fi]||(t[Fi]=!0,Ql("selectionchange",!1,t))}}function qp(e,t,a,r){switch(Pp(t)){case 1:var o=kb;break;case 4:o=Pb;break;default:o=cu}a=o.bind(null,t,a,e),o=void 0,!Ss||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Zl(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=$a(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}pp(function(){var d=i,p=lu(a),h=[];e:{var x=Hp.get(e);if(x!==void 0){var y=pu,b=e;switch(e){case"keypress":if(Vi(a)===0)break e;case"keydown":case"keyup":y=Hb;break;case"focusin":b="focus",y=Xl;break;case"focusout":b="blur",y=Xl;break;case"beforeblur":case"afterblur":y=Xl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Eb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Wb;break;case Op:case jp:case _p:y=zb;break;case Np:y=Gb;break;case"scroll":y=Tb;break;case"wheel":y=Yb;break;case"copy":case"cut":case"paste":y=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=nf}var w=(t&4)!==0,M=!w&&e==="scroll",g=w?x!==null?x+"Capture":null:x;w=[];for(var f=d,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=Mo(f,g),S!=null&&w.push(jo(f,S,v)))),M)break;f=f.return}0<w.length&&(x=new y(x,b,null,a,p),h.push({event:x,listeners:w}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&a!==ws&&(b=a.relatedTarget||a.fromElement)&&($a(b)||b[jt]))break e;if((y||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?$a(b):null,b!==null&&(M=Ha(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=rf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=nf,S="onPointerLeave",g="onPointerEnter",f="pointer"),M=y==null?x:hr(y),v=b==null?x:hr(b),x=new w(S,f+"leave",y,a,p),x.target=M,x.relatedTarget=v,S=null,$a(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=v,w.relatedTarget=M,S=w),M=S,y&&b)t:{for(w=y,g=b,f=0,v=w;v;v=dr(v))f++;for(v=0,S=g;S;S=dr(S))v++;for(;0<f-v;)w=dr(w),f--;for(;0<v-f;)g=dr(g),v--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=dr(w),g=dr(g)}w=null}else w=null;y!==null&&xf(h,x,y,w,!1),b!==null&&M!==null&&xf(h,M,b,w,!0)}}e:{if(x=d?hr(d):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var P=ay;else if(uf(x))if(zp)P=ny;else{P=oy;var R=ry}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=iy);if(P&&(P=P(e,d))){Mp(h,P,a,p);break e}R&&R(e,x,d),e==="focusout"&&(R=x._wrapperState)&&R.controlled&&x.type==="number"&&hs(x,"number",x.value)}switch(R=d?hr(d):window,e){case"focusin":(uf(R)||R.contentEditable==="true")&&(gr=R,Ts=d,Io=null);break;case"focusout":Io=Ts=gr=null;break;case"mousedown":Rs=!0;break;case"contextmenu":case"mouseup":case"dragend":Rs=!1,pf(h,a,p);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":pf(h,a,p)}var k;if(mu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else pr?Ep(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(Rp&&a.locale!=="ko"&&(pr||T!=="onCompositionStart"?T==="onCompositionEnd"&&pr&&(k=Tp()):(ia=p,fu="value"in ia?ia.value:ia.textContent,pr=!0)),R=sn(d,T),0<R.length&&(T=new of(T,e,null,a,p),h.push({event:T,listeners:R}),k?T.data=k:(k=$p(a),k!==null&&(T.data=k)))),(k=Qb?Zb(e,a):Jb(e,a))&&(d=sn(d,"onBeforeInput"),0<d.length&&(p=new of("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}Up(h,t)})}function jo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function sn(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Mo(e,a),i!=null&&r.unshift(jo(e,i,o)),i=Mo(e,t),i!=null&&r.push(jo(e,i,o))),e=e.return}return r}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function xf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Mo(a,i),u!=null&&n.unshift(jo(a,u,s))):o||(u=Mo(a,i),u!=null&&n.push(jo(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var cy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function bf(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(fy,"")}function Oi(e,t,a){if(t=bf(t),bf(e)!==t&&a)throw Error(C(425))}function un(){}var Es=null,$s=null;function Ms(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zs=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch(my)}:zs;function my(e){setTimeout(function(){throw e})}function Jl(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Do(t)}function da(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),It="__reactFiber$"+Fr,_o="__reactProps$"+Fr,jt="__reactContainer$"+Fr,As="__reactEvents$"+Fr,hy="__reactListeners$"+Fr,vy="__reactHandles$"+Fr;function $a(e){var t=e[It];if(t)return t;for(var a=e.parentNode;a;){if(t=a[jt]||a[It]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=wf(e);e!==null;){if(a=e[It])return a;e=wf(e)}return t}e=a,a=e.parentNode}return null}function Yo(e){return e=e[It]||e[jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function hr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Rn(e){return e[_o]||null}var Ds=[],vr=-1;function xa(e){return{current:e}}function G(e){0>vr||(e.current=Ds[vr],Ds[vr]=null,vr--)}function W(e,t){vr++,Ds[vr]=e.current,e.current=t}var ha={},Ce=xa(ha),Oe=xa(!1),Ba=ha;function Er(e,t){var a=e.type.contextTypes;if(!a)return ha;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function je(e){return e=e.childContextTypes,e!=null}function dn(){G(Oe),G(Ce)}function Lf(e,t,a){if(Ce.current!==ha)throw Error(C(168));W(Ce,t),W(Oe,a)}function Wp(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,rb(e)||"Unknown",o));return Q({},a,r)}function cn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ha,Ba=Ce.current,W(Ce,e),W(Oe,Oe.current),!0}function Sf(e,t,a){var r=e.stateNode;if(!r)throw Error(C(169));a?(e=Wp(e,t,Ba),r.__reactInternalMemoizedMergedChildContext=e,G(Oe),G(Ce),W(Ce,e)):G(Oe),W(Oe,a)}var At=null,En=!1,es=!1;function Vp(e){At===null?At=[e]:At.push(e)}function xy(e){En=!0,Vp(e)}function ba(){if(!es&&At!==null){es=!0;var e=0,t=_;try{var a=At;for(_=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}At=null,En=!1}catch(o){throw At!==null&&(At=At.slice(e+1)),vp(su,ba),o}finally{_=t,es=!1}}return null}var xr=[],br=0,fn=null,pn=0,Je=[],et=0,Fa=null,Dt=1,Bt="";function Ra(e,t){xr[br++]=pn,xr[br++]=fn,fn=e,pn=t}function Gp(e,t,a){Je[et++]=Dt,Je[et++]=Bt,Je[et++]=Fa,Fa=e;var r=Dt;e=Bt;var o=32-gt(r)-1;r&=~(1<<o),a+=1;var i=32-gt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,Dt=1<<32-gt(t)+o|a<<o|r,Bt=i+e}else Dt=1<<i|a<<o|r,Bt=e}function vu(e){e.return!==null&&(Ra(e,1),Gp(e,1,0))}function xu(e){for(;e===fn;)fn=xr[--br],xr[br]=null,pn=xr[--br],xr[br]=null;for(;e===Fa;)Fa=Je[--et],Je[et]=null,Bt=Je[--et],Je[et]=null,Dt=Je[--et],Je[et]=null}var qe=null,Ue=null,X=!1,pt=null;function Xp(e,t){var a=tt(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Cf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ue=da(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Fa!==null?{id:Dt,overflow:Bt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=tt(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,qe=e,Ue=null,!0):!1;default:return!1}}function Bs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fs(e){if(X){var t=Ue;if(t){var a=t;if(!Cf(e,t)){if(Bs(e))throw Error(C(418));t=da(a.nextSibling);var r=qe;t&&Cf(e,t)?Xp(r,a):(e.flags=e.flags&-4097|2,X=!1,qe=e)}}else{if(Bs(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,qe=e}}}function If(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ji(e){if(e!==qe)return!1;if(!X)return If(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ms(e.type,e.memoizedProps)),t&&(t=Ue)){if(Bs(e))throw Yp(),Error(C(418));for(;t;)Xp(e,t),t=da(t.nextSibling)}if(If(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Ue=da(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=qe?da(e.stateNode.nextSibling):null;return!0}function Yp(){for(var e=Ue;e;)e=da(e.nextSibling)}function $r(){Ue=qe=null,X=!1}function bu(e){pt===null?pt=[e]:pt.push(e)}var by=Ht.ReactCurrentBatchConfig;function po(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(C(309));var r=a.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!a._owner)throw Error(C(290,e))}return e}function _i(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function kf(e){var t=e._init;return t(e._payload)}function Kp(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=ga(g,f),g.index=0,g.sibling=null,g}function i(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,v,S){return f===null||f.tag!==6?(f=ls(v,g.mode,S),f.return=g,f):(f=o(f,v),f.return=g,f)}function u(g,f,v,S){var P=v.type;return P===fr?p(g,f,v.props.children,S,v.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ta&&kf(P)===f.type)?(S=o(f,v.props),S.ref=po(g,f,v),S.return=g,S):(S=Ji(v.type,v.key,v.props,null,g.mode,S),S.ref=po(g,f,v),S.return=g,S)}function d(g,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ss(v,g.mode,S),f.return=g,f):(f=o(f,v.children||[]),f.return=g,f)}function p(g,f,v,S,P){return f===null||f.tag!==7?(f=Da(v,g.mode,S,P),f.return=g,f):(f=o(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ls(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ii:return v=Ji(f.type,f.key,f.props,null,g.mode,v),v.ref=po(g,null,f),v.return=g,v;case cr:return f=ss(f,g.mode,v),f.return=g,f;case ta:var S=f._init;return h(g,S(f._payload),v)}if(xo(f)||so(f))return f=Da(f,g.mode,v,null),f.return=g,f;_i(g,f)}return null}function x(g,f,v,S){var P=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(g,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:return v.key===P?u(g,f,v,S):null;case cr:return v.key===P?d(g,f,v,S):null;case ta:return P=v._init,x(g,f,P(v._payload),S)}if(xo(v)||so(v))return P!==null?null:p(g,f,v,S,null);_i(g,v)}return null}function y(g,f,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ii:return g=g.get(S.key===null?v:S.key)||null,u(f,g,S,P);case cr:return g=g.get(S.key===null?v:S.key)||null,d(f,g,S,P);case ta:var R=S._init;return y(g,f,v,R(S._payload),P)}if(xo(S)||so(S))return g=g.get(v)||null,p(f,g,S,P,null);_i(f,S)}return null}function b(g,f,v,S){for(var P=null,R=null,k=f,T=f=0,U=null;k!==null&&T<v.length;T++){k.index>T?(U=k,k=null):U=k.sibling;var A=x(g,k,v[T],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A,k=U}if(T===v.length)return a(g,k),X&&Ra(g,T),P;if(k===null){for(;T<v.length;T++)k=h(g,v[T],S),k!==null&&(f=i(k,f,T),R===null?P=k:R.sibling=k,R=k);return X&&Ra(g,T),P}for(k=r(g,k);T<v.length;T++)U=y(k,g,T,v[T],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?T:U.key),f=i(U,f,T),R===null?P=U:R.sibling=U,R=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&Ra(g,T),P}function w(g,f,v,S){var P=so(v);if(typeof P!="function")throw Error(C(150));if(v=P.call(v),v==null)throw Error(C(151));for(var R=P=null,k=f,T=f=0,U=null,A=v.next();k!==null&&!A.done;T++,A=v.next()){k.index>T?(U=k,k=null):U=k.sibling;var ae=x(g,k,A.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,T),R===null?P=ae:R.sibling=ae,R=ae,k=U}if(A.done)return a(g,k),X&&Ra(g,T),P;if(k===null){for(;!A.done;T++,A=v.next())A=h(g,A.value,S),A!==null&&(f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return X&&Ra(g,T),P}for(k=r(g,k);!A.done;T++,A=v.next())A=y(k,g,T,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return e&&k.forEach(function(ka){return t(g,ka)}),X&&Ra(g,T),P}function M(g,f,v,S){if(typeof v=="object"&&v!==null&&v.type===fr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ii:e:{for(var P=v.key,R=f;R!==null;){if(R.key===P){if(P=v.type,P===fr){if(R.tag===7){a(g,R.sibling),f=o(R,v.props.children),f.return=g,g=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ta&&kf(P)===R.type){a(g,R.sibling),f=o(R,v.props),f.ref=po(g,R,v),f.return=g,g=f;break e}a(g,R);break}else t(g,R);R=R.sibling}v.type===fr?(f=Da(v.props.children,g.mode,S,v.key),f.return=g,g=f):(S=Ji(v.type,v.key,v.props,null,g.mode,S),S.ref=po(g,f,v),S.return=g,g=S)}return n(g);case cr:e:{for(R=v.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){a(g,f.sibling),f=o(f,v.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=ss(v,g.mode,S),f.return=g,g=f}return n(g);case ta:return R=v._init,M(g,f,R(v._payload),S)}if(xo(v))return b(g,f,v,S);if(so(v))return w(g,f,v,S);_i(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,v),f.return=g,g=f):(a(g,f),f=ls(v,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return M}var Mr=Kp(!0),Qp=Kp(!1),gn=xa(null),mn=null,yr=null,yu=null;function wu(){yu=yr=mn=null}function Lu(e){var t=gn.current;G(gn),e._currentValue=t}function Os(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Pr(e,t){mn=e,yu=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(yu!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(mn===null)throw Error(C(308));yr=e,mn.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Ma=null;function Su(e){Ma===null?Ma=[e]:Ma.push(e)}function Zp(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Su(t)):(a.next=o.next,o.next=a),t.interleaved=a,_t(e,r)}function _t(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var aa=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,_t(e,a)}return o=r.interleaved,o===null?(t.next=t,Su(r)):(t.next=o.next,o.next=t),r.interleaved=t,_t(e,a)}function Gi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,uu(e,a)}}function Pf(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function hn(e,t,a,r){var o=e.updateQueue;aa=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var x=s.lane,y=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(x=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(y,h,x);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,x=typeof b=="function"?b.call(y,h,x):b,x==null)break e;h=Q({},h,x);break e;case 2:aa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=h):p=p.next=y,n|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);ja|=n,e.lanes=n,e.memoizedState=h}}function Tf(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Ko={},Pt=xa(Ko),No=xa(Ko),Ho=xa(Ko);function za(e){if(e===Ko)throw Error(C(174));return e}function Iu(e,t){switch(W(Ho,t),W(No,e),W(Pt,Ko),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xs(t,e)}G(Pt),W(Pt,t)}function zr(){G(Pt),G(No),G(Ho)}function eg(e){za(Ho.current);var t=za(Pt.current),a=xs(t,e.type);t!==a&&(W(No,e),W(Pt,a))}function ku(e){No.current===e&&(G(Pt),G(No))}var Y=xa(0);function vn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ts=[];function Pu(){for(var e=0;e<ts.length;e++)ts[e]._workInProgressVersionPrimary=null;ts.length=0}var Xi=Ht.ReactCurrentDispatcher,as=Ht.ReactCurrentBatchConfig,Oa=0,K=null,le=null,de=null,xn=!1,ko=!1,Uo=0,yy=0;function we(){throw Error(C(321))}function Tu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ht(e[a],t[a]))return!1;return!0}function Ru(e,t,a,r,o,i){if(Oa=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xi.current=e===null||e.memoizedState===null?Cy:Iy,e=a(r,o),ko){i=0;do{if(ko=!1,Uo=0,25<=i)throw Error(C(301));i+=1,de=le=null,t.updateQueue=null,Xi.current=ky,e=a(r,o)}while(ko)}if(Xi.current=bn,t=le!==null&&le.next!==null,Oa=0,de=le=K=null,xn=!1,t)throw Error(C(300));return e}function Eu(){var e=Uo!==0;return Uo=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?K.memoizedState=de=e:de=de.next=e,de}function ot(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?K.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(C(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?K.memoizedState=de=e:de=de.next=e}return de}function qo(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=ot(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Oa&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,K.lanes|=p,ja|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,ht(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,ja|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function os(e){var t=ot(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);ht(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function tg(){}function ag(e,t){var a=K,r=ot(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,$u(ig.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(a.flags|=2048,Wo(9,og.bind(null,a,r,o,t),void 0,null),ce===null)throw Error(C(349));(Oa&30)!==0||rg(a,t,o)}return o}function rg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function og(e,t,a,r){t.value=a,t.getSnapshot=r,ng(t)&&lg(e)}function ig(e,t,a){return a(function(){ng(t)&&lg(e)})}function ng(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ht(e,a)}catch{return!0}}function lg(e){var t=_t(e,1);t!==null&&mt(t,e,1,-1)}function Rf(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=Sy.bind(null,K,e),[t.memoizedState,e]}function Wo(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function sg(){return ot().memoizedState}function Yi(e,t,a,r){var o=Ct();K.flags|=e,o.memoizedState=Wo(1|t,a,void 0,r===void 0?null:r)}function $n(e,t,a,r){var o=ot();r=r===void 0?null:r;var i=void 0;if(le!==null){var n=le.memoizedState;if(i=n.destroy,r!==null&&Tu(r,n.deps)){o.memoizedState=Wo(t,a,i,r);return}}K.flags|=e,o.memoizedState=Wo(1|t,a,i,r)}function Ef(e,t){return Yi(8390656,8,e,t)}function $u(e,t){return $n(2048,8,e,t)}function ug(e,t){return $n(4,2,e,t)}function dg(e,t){return $n(4,4,e,t)}function cg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function fg(e,t,a){return a=a!=null?a.concat([e]):null,$n(4,4,cg.bind(null,t,e),a)}function Mu(){}function pg(e,t){var a=ot();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function gg(e,t){var a=ot();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Tu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function mg(e,t,a){return(Oa&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=a):(ht(a,t)||(a=yp(),K.lanes|=a,ja|=a,e.baseState=!0),t)}function wy(e,t){var a=_;_=a!==0&&4>a?a:4,e(!0);var r=as.transition;as.transition={};try{e(!1),t()}finally{_=a,as.transition=r}}function hg(){return ot().memoizedState}function Ly(e,t,a){var r=pa(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},vg(e))xg(t,a);else if(a=Zp(e,t,a,r),a!==null){var o=Re();mt(a,e,r,o),bg(a,t,r)}}function Sy(e,t,a){var r=pa(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(vg(e))xg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,ht(s,n)){var u=t.interleaved;u===null?(o.next=o,Su(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=Zp(e,t,o,r),a!==null&&(o=Re(),mt(a,e,r,o),bg(a,t,r))}}function vg(e){var t=e.alternate;return e===K||t!==null&&t===K}function xg(e,t){ko=xn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function bg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,uu(e,a)}}var bn={readContext:rt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Cy={readContext:rt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ef,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Yi(4194308,4,cg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yi(4,2,e,t)},useMemo:function(e,t){var a=Ct();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Ct();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ly.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:Rf,useDebugValue:Mu,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=Rf(!1),t=e[0];return e=wy.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=Ct();if(X){if(a===void 0)throw Error(C(407));a=a()}else{if(a=t(),ce===null)throw Error(C(349));(Oa&30)!==0||rg(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,Ef(ig.bind(null,r,i,e),[e]),r.flags|=2048,Wo(9,og.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Ct(),t=ce.identifierPrefix;if(X){var a=Bt,r=Dt;a=(r&~(1<<32-gt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Uo++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=yy++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Iy={readContext:rt,useCallback:pg,useContext:rt,useEffect:$u,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:gg,useReducer:rs,useRef:sg,useState:function(){return rs(qo)},useDebugValue:Mu,useDeferredValue:function(e){var t=ot();return mg(t,le.memoizedState,e)},useTransition:function(){var e=rs(qo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:tg,useSyncExternalStore:ag,useId:hg,unstable_isNewReconciler:!1},ky={readContext:rt,useCallback:pg,useContext:rt,useEffect:$u,useImperativeHandle:fg,useInsertionEffect:ug,useLayoutEffect:dg,useMemo:gg,useReducer:os,useRef:sg,useState:function(){return os(qo)},useDebugValue:Mu,useDeferredValue:function(e){var t=ot();return le===null?t.memoizedState=e:mg(t,le.memoizedState,e)},useTransition:function(){var e=os(qo)[0],t=ot().memoizedState;return[e,t]},useMutableSource:tg,useSyncExternalStore:ag,useId:hg,unstable_isNewReconciler:!1};function ct(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function js(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mn={isMounted:function(e){return(e=e._reactInternals)?Ha(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Re(),o=pa(e),i=Ft(r,o);i.payload=t,a!=null&&(i.callback=a),t=ca(e,i,o),t!==null&&(mt(t,e,o,r),Gi(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Re(),o=pa(e),i=Ft(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ca(e,i,o),t!==null&&(mt(t,e,o,r),Gi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Re(),r=pa(e),o=Ft(a,r);o.tag=2,t!=null&&(o.callback=t),t=ca(e,o,r),t!==null&&(mt(t,e,r,a),Gi(t,e,r))}};function $f(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Fo(a,r)||!Fo(o,i):!0}function yg(e,t,a){var r=!1,o=ha,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(o=je(t)?Ba:Ce.current,r=t.contextTypes,i=(r=r!=null)?Er(e,o):ha),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Mf(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Mn.enqueueReplaceState(t,t.state,null)}function _s(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Cu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=rt(i):(i=je(t)?Ba:Ce.current,o.context=Er(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(js(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Mn.enqueueReplaceState(o,o.state,null),hn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t){try{var a="",r=t;do a+=ab(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function is(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Ns(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function wg(e,t,a){a=Ft(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){wn||(wn=!0,Qs=r),Ns(e,t)},a}function Lg(e,t,a){a=Ft(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){Ns(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Ns(e,t),typeof r!="function"&&(fa===null?fa=new Set([this]):fa.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function zf(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Py;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=Ny.bind(null,e,t,a),t.then(e,e))}function Af(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Df(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Ft(-1,1),t.tag=2,ca(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Ty=Ht.ReactCurrentOwner,Fe=!1;function Te(e,t,a,r){t.child=e===null?Qp(t,null,a,r):Mr(t,e.child,a,r)}function Bf(e,t,a,r,o){a=a.render;var i=t.ref;return Pr(t,o),r=Ru(e,t,a,r,i,o),a=Eu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(X&&a&&vu(t),t.flags|=1,Te(e,t,r,o),t.child)}function Ff(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!_u(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Sg(e,t,i,r,o)):(e=Ji(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(n,r)&&e.ref===t.ref)return Nt(e,t,o)}return t.flags|=1,e=ga(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Fo(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,Nt(e,t,o)}return Hs(e,t,a,r,o)}function Cg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Lr,He),He|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Lr,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W(Lr,He),He|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W(Lr,He),He|=r;return Te(e,t,o,a),t.child}function Ig(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Hs(e,t,a,r,o){var i=je(a)?Ba:Ce.current;return i=Er(t,i),Pr(t,o),a=Ru(e,t,a,r,i,o),r=Eu(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Nt(e,t,o)):(X&&r&&vu(t),t.flags|=1,Te(e,t,a,o),t.child)}function Of(e,t,a,r,o){if(je(a)){var i=!0;cn(t)}else i=!1;if(Pr(t,o),t.stateNode===null)Ki(e,t),yg(t,a,r),_s(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=je(a)?Ba:Ce.current,d=Er(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Mf(t,n,r,d),aa=!1;var x=t.memoizedState;n.state=x,hn(t,r,n,o),u=t.memoizedState,s!==r||x!==u||Oe.current||aa?(typeof p=="function"&&(js(t,a,p,r),u=t.memoizedState),(s=aa||$f(t,a,s,r,x,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,Jp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:ct(t.type,s),n.props=d,h=t.pendingProps,x=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=je(a)?Ba:Ce.current,u=Er(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||x!==u)&&Mf(t,n,r,u),aa=!1,x=t.memoizedState,n.state=x,hn(t,r,n,o);var b=t.memoizedState;s!==h||x!==b||Oe.current||aa?(typeof y=="function"&&(js(t,a,y,r),b=t.memoizedState),(d=aa||$f(t,a,d,r,x,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Us(e,t,a,r,i,o)}function Us(e,t,a,r,o,i){Ig(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Sf(t,a,!1),Nt(e,t,i);r=t.stateNode,Ty.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=Mr(t,e.child,null,i),t.child=Mr(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&Sf(t,a,!0),t.child}function kg(e){var t=e.stateNode;t.pendingContext?Lf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lf(e,t.context,!1),Iu(e,t.containerInfo)}function jf(e,t,a,r,o){return $r(),bu(o),t.flags|=256,Te(e,t,a,r),t.child}var qs={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pg(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Fs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Dn(n,r,0,null),e=Da(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ws(a),t.memoizedState=qs,e):zu(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Ry(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ga(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ga(s,i):(i=Da(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?Ws(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=qs,r}return i=e.child,e=i.sibling,r=ga(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=Dn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,a,r){return r!==null&&bu(r),Mr(t,e.child,null,a),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ry(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=is(Error(C(422))),Ni(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Dn({mode:"visible",children:r.children},o,0,null),i=Da(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Mr(t,e.child,null,n),t.child.memoizedState=Ws(n),t.memoizedState=qs,i);if((t.mode&1)===0)return Ni(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=is(i,r,void 0),Ni(e,t,n,r)}if(s=(n&e.childLanes)!==0,Fe||s){if(r=ce,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,_t(e,o),mt(r,e,o,-1))}return ju(),r=is(Error(C(421))),Ni(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Hy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ue=da(o.nextSibling),qe=t,X=!0,pt=null,e!==null&&(Je[et++]=Dt,Je[et++]=Bt,Je[et++]=Fa,Dt=e.id,Bt=e.overflow,Fa=t),t=zu(t,r.children),t.flags|=4096,t)}function _f(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Os(e.return,t,a)}function ns(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function Tg(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_f(e,a,t);else if(e.tag===19)_f(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&vn(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),ns(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&vn(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}ns(t,!0,a,null,i);break;case"together":ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ki(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ja|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,a=ga(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ga(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Ey(e,t,a){switch(t.tag){case 3:kg(t),$r();break;case 5:eg(t);break;case 1:je(t.type)&&cn(t);break;case 4:Iu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(gn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?Pg(e,t,a):(W(Y,Y.current&1),e=Nt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Tg(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Cg(e,t,a)}return Nt(e,t,a)}var Rg,Vs,Eg,$g;Rg=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Vs=function(){};Eg=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,za(Pt.current);var i=null;switch(a){case"input":o=gs(e,o),r=gs(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=vs(e,o),r=vs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=un)}bs(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Eo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};$g=function(e,t,a,r){a!==r&&(t.flags|=4)};function go(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function $y(e,t,a){var r=t.pendingProps;switch(xu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return je(t.type)&&dn(),Le(t),null;case 3:return r=t.stateNode,zr(),G(Oe),G(Ce),Pu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(eu(pt),pt=null))),Vs(e,t),Le(t),null;case 5:ku(t);var o=za(Ho.current);if(a=t.type,e!==null&&t.stateNode!=null)Eg(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Le(t),null}if(e=za(Pt.current),ji(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[It]=t,r[_o]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<yo.length;o++)V(yo[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Gc(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Yc(r,i),V("invalid",r)}bs(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Oi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Oi(r.textContent,s,e),o=["children",""+s]):Eo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":ki(r),Xc(r,i,!0);break;case"textarea":ki(r),Kc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=un)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ip(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[It]=t,e[_o]=r,Rg(e,t,!1,!1),t.stateNode=e;e:{switch(n=ys(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<yo.length;o++)V(yo[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Gc(e,r),o=gs(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Yc(e,r),o=vs(e,r),V("invalid",e);break;default:o=r}bs(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?sp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&np(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&$o(e,u):typeof u=="number"&&$o(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Eo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&ru(e,i,u,n))}switch(a){case"input":ki(e),Xc(e,r,!1);break;case"textarea":ki(e),Kc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ma(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Sr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Sr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=un)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)$g(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(a=za(Ho.current),za(Pt.current),ji(t)){if(r=t.stateNode,a=t.memoizedProps,r[It]=t,(i=r.nodeValue!==a)&&(e=qe,e!==null))switch(e.tag){case 3:Oi(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oi(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[It]=t,t.stateNode=r}return Le(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Yp(),$r(),t.flags|=98560,i=!1;else if(i=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[It]=t}else $r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else pt!==null&&(eu(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?se===0&&(se=3):ju())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return zr(),Vs(e,t),e===null&&Oo(t.stateNode.containerInfo),Le(t),null;case 10:return Lu(t.type._context),Le(t),null;case 17:return je(t.type)&&dn(),Le(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)go(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=vn(e),n!==null){for(t.flags|=128,go(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Dr&&(t.flags|=128,r=!0,go(i,!1),t.lanes=4194304)}else{if(!r)if(e=vn(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),go(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Le(t),null}else 2*re()-i.renderingStartTime>Dr&&a!==1073741824&&(t.flags|=128,r=!0,go(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Le(t),null);case 22:case 23:return Ou(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(He&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function My(e,t){switch(xu(t),t.tag){case 1:return je(t.type)&&dn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),G(Oe),G(Ce),Pu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ku(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));$r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return zr(),null;case 10:return Lu(t.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var Hi=!1,Se=!1,zy=typeof WeakSet=="function"?WeakSet:Set,E=null;function wr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function Gs(e,t,a){try{a()}catch(r){J(e,t,r)}}var Nf=!1;function Ay(e,t){if(Es=nn,e=Bp(),hu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,x=null;t:for(;;){for(var y;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(y=h.firstChild)!==null;)x=h,h=y;for(;;){if(h===e)break t;if(x===a&&++d===o&&(s=n),x===i&&++p===r&&(u=n),(y=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for($s={focusedElem:e,selectionRange:a},nn=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ct(t.type,w),M);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return b=Nf,Nf=!1,b}function Po(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gs(t,a,i)}o=o.next}while(o!==r)}}function zn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Xs(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Mg(e){var t=e.alternate;t!==null&&(e.alternate=null,Mg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[It],delete t[_o],delete t[As],delete t[hy],delete t[vy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zg(e){return e.tag===5||e.tag===3||e.tag===4}function Hf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,a),e=e.sibling;e!==null;)Ys(e,t,a),e=e.sibling}function Ks(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,a),e=e.sibling;e!==null;)Ks(e,t,a),e=e.sibling}var pe=null,ft=!1;function ea(e,t,a){for(a=a.child;a!==null;)Ag(e,t,a),a=a.sibling}function Ag(e,t,a){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(In,a)}catch{}switch(a.tag){case 5:Se||wr(a,t);case 6:var r=pe,o=ft;pe=null,ea(e,t,a),pe=r,ft=o,pe!==null&&(ft?(e=pe,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):pe.removeChild(a.stateNode));break;case 18:pe!==null&&(ft?(e=pe,a=a.stateNode,e.nodeType===8?Jl(e.parentNode,a):e.nodeType===1&&Jl(e,a),Do(e)):Jl(pe,a.stateNode));break;case 4:r=pe,o=ft,pe=a.stateNode.containerInfo,ft=!0,ea(e,t,a),pe=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&Gs(a,t,n),o=o.next}while(o!==r)}ea(e,t,a);break;case 1:if(!Se&&(wr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}ea(e,t,a);break;case 21:ea(e,t,a);break;case 22:a.mode&1?(Se=(r=Se)||a.memoizedState!==null,ea(e,t,a),Se=r):ea(e,t,a);break;default:ea(e,t,a)}}function Uf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new zy),t.forEach(function(r){var o=Uy.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function dt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,ft=!1;break e;case 3:pe=s.stateNode.containerInfo,ft=!0;break e;case 4:pe=s.stateNode.containerInfo,ft=!0;break e}s=s.return}if(pe===null)throw Error(C(160));Ag(i,n,o),pe=null,ft=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dg(t,e),t=t.sibling}function Dg(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{Po(3,e,e.return),zn(3,e)}catch(w){J(e,e.return,w)}try{Po(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:dt(t,e),St(e),r&512&&a!==null&&wr(a,a.return);break;case 5:if(dt(t,e),St(e),r&512&&a!==null&&wr(a,a.return),e.flags&32){var o=e.stateNode;try{$o(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&rp(o,i),ys(s,n);var d=ys(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?sp(o,h):p==="dangerouslySetInnerHTML"?np(o,h):p==="children"?$o(o,h):ru(o,p,h,d)}switch(s){case"input":ms(o,i);break;case"textarea":op(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Sr(o,!!i.multiple,y,!1):x!==!!i.multiple&&(i.defaultValue!=null?Sr(o,!!i.multiple,i.defaultValue,!0):Sr(o,!!i.multiple,i.multiple?[]:"",!1))}o[_o]=i}catch(w){J(e,e.return,w)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(dt(t,e),St(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Bu=re())),r&4&&Uf(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Se=(d=Se)||p,dt(t,e),Se=d):dt(t,e),St(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for(E=e,p=e.child;p!==null;){for(h=E=p;E!==null;){switch(x=E,y=x.child,x.tag){case 0:case 11:case 14:case 15:Po(4,x,x.return);break;case 1:wr(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,a=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){J(r,a,w)}}break;case 5:wr(x,x.return);break;case 22:if(x.memoizedState!==null){Wf(h);continue}}y!==null?(y.return=x,E=y):Wf(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=lp("display",n))}catch(w){J(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){J(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:dt(t,e),St(e),r&4&&Uf(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(zg(a)){var r=a;break e}a=a.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&($o(o,""),r.flags&=-33);var i=Hf(e);Ks(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=Hf(e);Ys(e,s,n);break;default:throw Error(C(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Dy(e,t,a){E=e,Bg(e,t,a)}function Bg(e,t,a){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||Hi;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Se;s=Hi;var d=Se;if(Hi=n,(Se=u)&&!d)for(E=o;E!==null;)n=E,u=n.child,n.tag===22&&n.memoizedState!==null?Vf(o):u!==null?(u.return=n,E=u):Vf(o);for(;i!==null;)E=i,Bg(i,t,a),i=i.sibling;E=o,Hi=s,Se=d}qf(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,E=i):qf(e,t,a)}}function qf(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Se||zn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:ct(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Tf(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Tf(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Do(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Se||t.flags&512&&Xs(t)}catch(x){J(t,t.return,x)}}if(t===e){E=null;break}if(a=t.sibling,a!==null){a.return=t.return,E=a;break}E=t.return}}function Wf(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}function Vf(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{zn(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{Xs(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{Xs(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var By=Math.ceil,yn=Ht.ReactCurrentDispatcher,Au=Ht.ReactCurrentOwner,at=Ht.ReactCurrentBatchConfig,F=0,ce=null,ie=null,ge=0,He=0,Lr=xa(0),se=0,Vo=null,ja=0,An=0,Du=0,To=null,Be=null,Bu=0,Dr=1/0,zt=null,wn=!1,Qs=null,fa=null,Ui=!1,na=null,Ln=0,Ro=0,Zs=null,Qi=-1,Zi=0;function Re(){return(F&6)!==0?re():Qi!==-1?Qi:Qi=re()}function pa(e){return(e.mode&1)===0?1:(F&2)!==0&&ge!==0?ge&-ge:by.transition!==null?(Zi===0&&(Zi=yp()),Zi):(e=_,e!==0||(e=window.event,e=e===void 0?16:Pp(e.type)),e)}function mt(e,t,a,r){if(50<Ro)throw Ro=0,Zs=null,Error(C(185));Go(e,a,r),((F&2)===0||e!==ce)&&(e===ce&&((F&2)===0&&(An|=a),se===4&&oa(e,ge)),_e(e,r),a===1&&F===0&&(t.mode&1)===0&&(Dr=re()+500,En&&ba()))}function _e(e,t){var a=e.callbackNode;wb(e,t);var r=on(e,e===ce?ge:0);if(r===0)a!==null&&Jc(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Jc(a),t===1)e.tag===0?xy(Gf.bind(null,e)):Vp(Gf.bind(null,e)),gy(function(){(F&6)===0&&ba()}),a=null;else{switch(wp(r)){case 1:a=su;break;case 4:a=xp;break;case 16:a=rn;break;case 536870912:a=bp;break;default:a=rn}a=qg(a,Fg.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Fg(e,t){if(Qi=-1,Zi=0,(F&6)!==0)throw Error(C(327));var a=e.callbackNode;if(Tr()&&e.callbackNode!==a)return null;var r=on(e,e===ce?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Sn(e,r);else{t=r;var o=F;F|=2;var i=jg();(ce!==e||ge!==t)&&(zt=null,Dr=re()+500,Aa(e,t));do try{jy();break}catch(s){Og(e,s)}while(!0);wu(),yn.current=i,F=o,ie!==null?t=0:(ce=null,ge=0,t=se)}if(t!==0){if(t===2&&(o=Is(e),o!==0&&(r=o,t=Js(e,o))),t===1)throw a=Vo,Aa(e,0),oa(e,r),_e(e,re()),a;if(t===6)oa(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Fy(o)&&(t=Sn(e,r),t===2&&(i=Is(e),i!==0&&(r=i,t=Js(e,i))),t===1))throw a=Vo,Aa(e,0),oa(e,r),_e(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Ea(e,Be,zt);break;case 3:if(oa(e,r),(r&130023424)===r&&(t=Bu+500-re(),10<t)){if(on(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=zs(Ea.bind(null,e,Be,zt),t);break}Ea(e,Be,zt);break;case 4:if(oa(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-gt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*By(r/1960))-r,10<r){e.timeoutHandle=zs(Ea.bind(null,e,Be,zt),r);break}Ea(e,Be,zt);break;case 5:Ea(e,Be,zt);break;default:throw Error(C(329))}}}return _e(e,re()),e.callbackNode===a?Fg.bind(null,e):null}function Js(e,t){var a=To;return e.current.memoizedState.isDehydrated&&(Aa(e,t).flags|=256),e=Sn(e,t),e!==2&&(t=Be,Be=a,t!==null&&eu(t)),e}function eu(e){Be===null?Be=e:Be.push.apply(Be,e)}function Fy(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function oa(e,t){for(t&=~Du,t&=~An,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-gt(t),r=1<<a;e[a]=-1,t&=~r}}function Gf(e){if((F&6)!==0)throw Error(C(327));Tr();var t=on(e,0);if((t&1)===0)return _e(e,re()),null;var a=Sn(e,t);if(e.tag!==0&&a===2){var r=Is(e);r!==0&&(t=r,a=Js(e,r))}if(a===1)throw a=Vo,Aa(e,0),oa(e,t),_e(e,re()),a;if(a===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ea(e,Be,zt),_e(e,re()),null}function Fu(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(Dr=re()+500,En&&ba())}}function _a(e){na!==null&&na.tag===0&&(F&6)===0&&Tr();var t=F;F|=1;var a=at.transition,r=_;try{if(at.transition=null,_=1,e)return e()}finally{_=r,at.transition=a,F=t,(F&6)===0&&ba()}}function Ou(){He=Lr.current,G(Lr)}function Aa(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,py(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(xu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&dn();break;case 3:zr(),G(Oe),G(Ce),Pu();break;case 5:ku(r);break;case 4:zr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Lu(r.type._context);break;case 22:case 23:Ou()}a=a.return}if(ce=e,ie=e=ga(e.current,null),ge=He=t,se=0,Vo=null,Du=An=ja=0,Be=To=null,Ma!==null){for(t=0;t<Ma.length;t++)if(a=Ma[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}Ma=null}return e}function Og(e,t){do{var a=ie;try{if(wu(),Xi.current=bn,xn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xn=!1}if(Oa=0,de=le=K=null,ko=!1,Uo=0,Au.current=null,a===null||a.return===null){se=1,Vo=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=Af(n);if(y!==null){y.flags&=-257,Df(y,n,s,i,t),y.mode&1&&zf(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){zf(i,d,t),ju();break e}u=Error(C(426))}}else if(X&&s.mode&1){var M=Af(n);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),Df(M,n,s,i,t),bu(Ar(u,s));break e}}i=u=Ar(u,s),se!==4&&(se=2),To===null?To=[i]:To.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=wg(i,u,t);Pf(i,g);break e;case 1:s=u;var f=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(fa===null||!fa.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Lg(i,s,t);Pf(i,S);break e}}i=i.return}while(i!==null)}Ng(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function jg(){var e=yn.current;return yn.current=bn,e===null?bn:e}function ju(){(se===0||se===3||se===2)&&(se=4),ce===null||(ja&268435455)===0&&(An&268435455)===0||oa(ce,ge)}function Sn(e,t){var a=F;F|=2;var r=jg();(ce!==e||ge!==t)&&(zt=null,Aa(e,t));do try{Oy();break}catch(o){Og(e,o)}while(!0);if(wu(),F=a,yn.current=r,ie!==null)throw Error(C(261));return ce=null,ge=0,se}function Oy(){for(;ie!==null;)_g(ie)}function jy(){for(;ie!==null&&!fb();)_g(ie)}function _g(e){var t=Ug(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Ng(e):ie=t,Au.current=null}function Ng(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=$y(a,t,He),a!==null){ie=a;return}}else{if(a=My(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Ea(e,t,a){var r=_,o=at.transition;try{at.transition=null,_=1,_y(e,t,a,r)}finally{at.transition=o,_=r}return null}function _y(e,t,a,r){do Tr();while(na!==null);if((F&6)!==0)throw Error(C(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Lb(e,i),e===ce&&(ie=ce=null,ge=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ui||(Ui=!0,qg(rn,function(){return Tr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=at.transition,at.transition=null;var n=_;_=1;var s=F;F|=4,Au.current=null,Ay(e,a),Dg(a,e),sy($s),nn=!!Es,$s=Es=null,e.current=a,Dy(a,e,o),pb(),F=s,_=n,at.transition=i}else e.current=a;if(Ui&&(Ui=!1,na=e,Ln=o),i=e.pendingLanes,i===0&&(fa=null),hb(a.stateNode,r),_e(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(wn)throw wn=!1,e=Qs,Qs=null,e;return(Ln&1)!==0&&e.tag!==0&&Tr(),i=e.pendingLanes,(i&1)!==0?e===Zs?Ro++:(Ro=0,Zs=e):Ro=0,ba(),null}function Tr(){if(na!==null){var e=wp(Ln),t=at.transition,a=_;try{if(at.transition=null,_=16>e?16:e,na===null)var r=!1;else{if(e=na,na=null,Ln=0,(F&6)!==0)throw Error(C(331));var o=F;for(F|=4,E=e.current;E!==null;){var i=E,n=i.child;if((E.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(E=d;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:Po(8,p,i)}var h=p.child;if(h!==null)h.return=p,E=h;else for(;E!==null;){p=E;var x=p.sibling,y=p.return;if(Mg(p),p===d){E=null;break}if(x!==null){x.return=y,E=x;break}E=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}E=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,E=n;else e:for(;E!==null;){if(i=E,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Po(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,E=g;break e}E=i.return}}var f=e.current;for(E=f;E!==null;){n=E;var v=n.child;if((n.subtreeFlags&2064)!==0&&v!==null)v.return=n,E=v;else e:for(n=f;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:zn(9,s)}}catch(P){J(s,s.return,P)}if(s===n){E=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,E=S;break e}E=s.return}}if(F=o,ba(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(In,e)}catch{}r=!0}return r}finally{_=a,at.transition=t}}return!1}function Xf(e,t,a){t=Ar(a,t),t=wg(e,t,1),e=ca(e,t,1),t=Re(),e!==null&&(Go(e,1,t),_e(e,t))}function J(e,t,a){if(e.tag===3)Xf(e,e,a);else for(;t!==null;){if(t.tag===3){Xf(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fa===null||!fa.has(r))){e=Ar(a,e),e=Lg(t,e,1),t=ca(t,e,1),e=Re(),t!==null&&(Go(t,1,e),_e(t,e));break}}t=t.return}}function Ny(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&a,ce===e&&(ge&a)===a&&(se===4||se===3&&(ge&130023424)===ge&&500>re()-Bu?Aa(e,0):Du|=a),_e(e,t)}function Hg(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ri,Ri<<=1,(Ri&130023424)===0&&(Ri=4194304)));var a=Re();e=_t(e,t),e!==null&&(Go(e,t,a),_e(e,a))}function Hy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Hg(e,a)}function Uy(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Hg(e,a)}var Ug;Ug=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)Fe=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return Fe=!1,Ey(e,t,a);Fe=(e.flags&131072)!==0}else Fe=!1,X&&(t.flags&1048576)!==0&&Gp(t,pn,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ki(e,t),e=t.pendingProps;var o=Er(t,Ce.current);Pr(t,a),o=Ru(null,t,r,e,o,a);var i=Eu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,je(r)?(i=!0,cn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Cu(t),o.updater=Mn,t.stateNode=o,o._reactInternals=t,_s(t,r,e,a),t=Us(null,t,r,!0,i,a)):(t.tag=0,X&&i&&vu(t),Te(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(Ki(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Wy(r),e=ct(r,e),o){case 0:t=Hs(null,t,r,e,a);break e;case 1:t=Of(null,t,r,e,a);break e;case 11:t=Bf(null,t,r,e,a);break e;case 14:t=Ff(null,t,r,ct(r.type,e),a);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Hs(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Of(e,t,r,o,a);case 3:e:{if(kg(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Jp(e,t),hn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ar(Error(C(423)),t),t=jf(e,t,r,a,o);break e}else if(r!==o){o=Ar(Error(C(424)),t),t=jf(e,t,r,a,o);break e}else for(Ue=da(t.stateNode.containerInfo.firstChild),qe=t,X=!0,pt=null,a=Qp(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($r(),r===o){t=Nt(e,t,a);break e}Te(e,t,r,a)}t=t.child}return t;case 5:return eg(t),e===null&&Fs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Ms(r,o)?n=null:i!==null&&Ms(r,i)&&(t.flags|=32),Ig(e,t),Te(e,t,n,a),t.child;case 6:return e===null&&Fs(t),null;case 13:return Pg(e,t,a);case 4:return Iu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Mr(t,null,r,a):Te(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Bf(e,t,r,o,a);case 7:return Te(e,t,t.pendingProps,a),t.child;case 8:return Te(e,t,t.pendingProps.children,a),t.child;case 12:return Te(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W(gn,r._currentValue),r._currentValue=n,i!==null)if(ht(i.value,n)){if(i.children===o.children&&!Oe.current){t=Nt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ft(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Os(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(C(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Os(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Te(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Pr(t,a),o=rt(o),r=r(o),t.flags|=1,Te(e,t,r,a),t.child;case 14:return r=t.type,o=ct(r,t.pendingProps),o=ct(r.type,o),Ff(e,t,r,o,a);case 15:return Sg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ct(r,o),Ki(e,t),t.tag=1,je(r)?(e=!0,cn(t)):e=!1,Pr(t,a),yg(t,r,o),_s(t,r,o,a),Us(null,t,r,!0,e,a);case 19:return Tg(e,t,a);case 22:return Cg(e,t,a)}throw Error(C(156,t.tag))};function qg(e,t){return vp(e,t)}function qy(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,a,r){return new qy(e,t,a,r)}function _u(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wy(e){if(typeof e=="function")return _u(e)?1:0;if(e!=null){if(e=e.$$typeof,e===iu)return 11;if(e===nu)return 14}return 2}function ga(e,t){var a=e.alternate;return a===null?(a=tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Ji(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")_u(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case fr:return Da(a.children,o,i,t);case ou:n=8,o|=8;break;case ds:return e=tt(12,a,t,o|2),e.elementType=ds,e.lanes=i,e;case cs:return e=tt(13,a,t,o),e.elementType=cs,e.lanes=i,e;case fs:return e=tt(19,a,t,o),e.elementType=fs,e.lanes=i,e;case ep:return Dn(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Zf:n=10;break e;case Jf:n=9;break e;case iu:n=11;break e;case nu:n=14;break e;case ta:n=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=tt(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Da(e,t,a,r){return e=tt(7,e,r,t),e.lanes=a,e}function Dn(e,t,a,r){return e=tt(22,e,r,t),e.elementType=ep,e.lanes=a,e.stateNode={isHidden:!1},e}function ls(e,t,a){return e=tt(6,e,null,t),e.lanes=a,e}function ss(e,t,a){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vy(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Nu(e,t,a,r,o,i,n,s,u){return e=new Vy(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cu(i),e}function Gy(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function Wg(e){if(!e)return ha;e=e._reactInternals;e:{if(Ha(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var a=e.type;if(je(a))return Wp(e,a,t)}return t}function Vg(e,t,a,r,o,i,n,s,u){return e=Nu(a,r,!0,e,o,i,n,s,u),e.context=Wg(null),a=e.current,r=Re(),o=pa(a),i=Ft(r,o),i.callback=t??null,ca(a,i,o),e.current.lanes=o,Go(e,o,r),_e(e,r),e}function Bn(e,t,a,r){var o=t.current,i=Re(),n=pa(o);return a=Wg(a),t.context===null?t.context=a:t.pendingContext=a,t=Ft(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ca(o,t,n),e!==null&&(mt(e,o,n,i),Gi(e,o,n)),n}function Cn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Yf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Hu(e,t){Yf(e,t),(e=e.alternate)&&Yf(e,t)}function Xy(){return null}var Gg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uu(e){this._internalRoot=e}Fn.prototype.render=Uu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Bn(e,t,null,null)};Fn.prototype.unmount=Uu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_a(function(){Bn(null,e,null,null)}),t[jt]=null}};function Fn(e){this._internalRoot=e}Fn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Cp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ra.length&&t!==0&&t<ra[a].priority;a++);ra.splice(a,0,e),a===0&&kp(e)}};function qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function On(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Kf(){}function Yy(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Cn(n);i.call(d)}}var n=Vg(t,r,e,0,null,!1,!1,"",Kf);return e._reactRootContainer=n,e[jt]=n.current,Oo(e.nodeType===8?e.parentNode:e),_a(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Cn(u);s.call(d)}}var u=Nu(e,0,!1,null,null,!1,!1,"",Kf);return e._reactRootContainer=u,e[jt]=u.current,Oo(e.nodeType===8?e.parentNode:e),_a(function(){Bn(t,u,a,r)}),u}function jn(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Cn(n);s.call(u)}}Bn(t,n,e,o)}else n=Yy(a,t,e,o,r);return Cn(n)}Lp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=bo(t.pendingLanes);a!==0&&(uu(t,a|1),_e(t,re()),(F&6)===0&&(Dr=re()+500,ba()))}break;case 13:_a(function(){var r=_t(e,1);if(r!==null){var o=Re();mt(r,e,1,o)}}),Hu(e,1)}};du=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var a=Re();mt(t,e,134217728,a)}Hu(e,134217728)}};Sp=function(e){if(e.tag===13){var t=pa(e),a=_t(e,t);if(a!==null){var r=Re();mt(a,e,t,r)}Hu(e,t)}};Cp=function(){return _};Ip=function(e,t){var a=_;try{return _=e,t()}finally{_=a}};Ls=function(e,t,a){switch(t){case"input":if(ms(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Rn(r);if(!o)throw Error(C(90));ap(r),ms(r,o)}}}break;case"textarea":op(e,a);break;case"select":t=a.value,t!=null&&Sr(e,!!a.multiple,t,!1)}};cp=Fu;fp=_a;var Ky={usingClientEntryPoint:!1,Events:[Yo,hr,Rn,up,dp,Fu]},mo={findFiberByHostInstance:$a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qy={bundleType:mo.bundleType,version:mo.version,rendererPackageName:mo.rendererPackageName,rendererConfig:mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mp(e),e===null?null:e.stateNode},findFiberByHostInstance:mo.findFiberByHostInstance||Xy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ho=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ho.isDisabled&&ho.supportsFiber))try{In=ho.inject(Qy),kt=ho}catch{}var ho;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Ge.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qu(t))throw Error(C(200));return Gy(e,t,null,a)};Ge.createRoot=function(e,t){if(!qu(e))throw Error(C(299));var a=!1,r="",o=Gg;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Nu(e,1,!1,null,null,a,!1,r,o),e[jt]=t.current,Oo(e.nodeType===8?e.parentNode:e),new Uu(t)};Ge.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=mp(t),e=e===null?null:e.stateNode,e};Ge.flushSync=function(e){return _a(e)};Ge.hydrate=function(e,t,a){if(!On(t))throw Error(C(200));return jn(null,e,t,!0,a)};Ge.hydrateRoot=function(e,t,a){if(!qu(e))throw Error(C(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=Gg;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Vg(t,null,e,1,a??null,o,!1,i,n),e[jt]=t.current,Oo(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new Fn(t)};Ge.render=function(e,t,a){if(!On(t))throw Error(C(200));return jn(null,e,t,!1,a)};Ge.unmountComponentAtNode=function(e){if(!On(e))throw Error(C(40));return e._reactRootContainer?(_a(function(){jn(null,null,e,!1,function(){e._reactRootContainer=null,e[jt]=null})}),!0):!1};Ge.unstable_batchedUpdates=Fu;Ge.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!On(a))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return jn(e,t,a,!1,r)};Ge.version="18.3.1-next-f1338f8080-20240426"});var ya=Mt((pC,Kg)=>{"use strict";function Yg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg)}catch(e){console.error(e)}}Yg(),Kg.exports=Xg()});var Zg=Mt(Wu=>{"use strict";var Qg=ya();Wu.createRoot=Qg.createRoot,Wu.hydrateRoot=Qg.hydrateRoot;var gC});var nh=Mt(el=>{"use strict";var U1=I(),q1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,G1=U1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X1={key:!0,ref:!0,__self:!0,__source:!0};function ih(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)V1.call(t,r)&&!X1.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:q1,type:e,key:i,ref:n,props:o,_owner:G1.current}}el.Fragment=W1;el.jsx=ih;el.jsxs=ih});var m=Mt((uI,lh)=>{"use strict";lh.exports=nh()});var P0=c(Zg(),1);var ue=c(I());var N="-ms-",Ua="-moz-",O="-webkit-",_n="comm",wa="rule",Or="decl";var Jg="@import";var em="@namespace",Nn="@keyframes";var tm="@layer";var Vu=Math.abs,Qo=String.fromCharCode,Zo=Object.assign;function am(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function Hn(e){return e.trim()}function vt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,a){return e.replace(t,a)}function jr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function xt(e,t,a){return e.slice(t,a)}function Ie(e){return e.length}function Un(e){return e.length}function qa(e,t){return t.push(e),e}function rm(e,t){return e.map(t).join("")}function Gu(e,t){return e.filter(function(a){return!vt(a,t)})}var qn=1,_r=1,om=0,it=0,ne=0,Hr="";function Jo(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:qn,column:_r,length:n,return:"",siblings:s}}function Ut(e,t){return Zo(Jo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Wa(e){for(;e.root;)e=Ut(e.root,{children:[e]});qa(e,e.siblings)}function im(){return ne}function nm(){return ne=it>0?Z(Hr,--it):0,_r--,ne===10&&(_r=1,qn--),ne}function nt(){return ne=it<om?Z(Hr,it++):0,_r++,ne===10&&(_r=1,qn++),ne}function qt(){return Z(Hr,it)}function ei(){return it}function Wn(e,t){return xt(Hr,e,t)}function Nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function lm(e){return qn=_r=1,om=Ie(Hr=e),it=0,[]}function sm(e){return Hr="",e}function Vn(e){return Hn(Wn(it-1,Xu(e===91?e+2:e===40?e+1:e)))}function um(e){for(;(ne=qt())&&ne<33;)nt();return Nr(e)>2||Nr(ne)>3?"":" "}function dm(e,t){for(;--t&&nt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return Wn(e,ei()+(t<6&&qt()==32&&nt()==32))}function Xu(e){for(;nt();)switch(ne){case e:return it;case 34:case 39:e!==34&&e!==39&&Xu(ne);break;case 40:e===41&&Xu(e);break;case 92:nt();break}return it}function cm(e,t){for(;nt()&&e+ne!==57;)if(e+ne===84&&qt()===47)break;return"/*"+Wn(t,it-1)+"*"+Qo(e===47?e:nt())}function fm(e){for(;!Nr(qt());)nt();return Wn(e,it)}function mm(e){return sm(Gn("",null,null,null,[""],e=lm(e),0,[0],e))}function Gn(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,x=0,y=0,b=0,w=1,M=1,g=1,f=0,v="",S=o,P=i,R=r,k=v;M;)switch(b=f,f=nt()){case 40:if(b!=108&&Z(k,h-1)==58){jr(k+=z(Vn(f),"&","&\f"),"&\f",Vu(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Vn(f);break;case 9:case 10:case 13:case 32:k+=um(b);break;case 92:k+=dm(ei()-1,7);continue;case 47:switch(qt()){case 42:case 47:qa(Zy(cm(nt(),ei()),t,a,u),u),(Nr(b||1)==5||Nr(qt()||1)==5)&&Ie(k)&&xt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=Ie(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+p:g==-1&&(k=z(k,/\f/g,"")),y>0&&(Ie(k)-h||w===0&&b===47)&&qa(y>32?gm(k+";",r,a,h-1,u):gm(z(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(qa(R=pm(k,t,a,d,p,o,s,v,S=[],P=[],h,i),i),f===123)if(p===0)Gn(k,t,R,R,S,i,h,s,P);else{switch(x){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Gn(e,R,R,r&&qa(pm(e,R,R,0,0,o,s,v,o,S=[],h,P),P),o,P,h,s,r?S:P):Gn(k,R,R,R,[""],P,0,s,P)}}d=p=y=0,w=g=1,v=k="",h=n;break;case 58:h=1+Ie(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&nm()==125)continue}switch(k+=Qo(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ie(k)-1)*g,g=1;break;case 64:qt()===45&&(k+=Vn(nt())),x=qt(),p=h=Ie(v=k+=fm(ei())),f++;break;case 45:b===45&&Ie(k)==2&&(w=0)}}return i}function pm(e,t,a,r,o,i,n,s,u,d,p,h){for(var x=o-1,y=o===0?i:[""],b=Un(y),w=0,M=0,g=0;w<r;++w)for(var f=0,v=xt(e,x+1,x=Vu(M=n[w])),S=e;f<b;++f)(S=Hn(M>0?y[f]+" "+v:z(v,/&\f/g,y[f])))&&(u[g++]=S);return Jo(e,t,a,o===0?wa:s,u,d,p,h)}function Zy(e,t,a,r){return Jo(e,t,a,_n,Qo(im()),xt(e,2,-2),0,r)}function gm(e,t,a,r,o){return Jo(e,t,a,Or,xt(e,0,r),xt(e,r+1,-1),r,o)}function Yu(e,t,a){switch(am(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ua+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Ua+e+N+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+N+e+e;case 6165:return O+e+N+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return O+e+N+"flex-item-"+z(e,/flex-|-self/g,"")+(vt(e,/flex-|baseline/)?"":N+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+N+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+N+z(e,"shrink","negative")+e;case 5292:return O+e+N+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+N+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+N+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!vt(e,/flex-|baseline/))return N+"grid-column-align"+xt(e,t)+e;break;case 2592:case 3360:return N+z(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,vt(r.props,/grid-\w+-end/)})?~jr(e+(a=a[t].value),"span",0)?e:N+z(e,"-start","")+e+N+"grid-row-span:"+(~jr(a,"span",0)?vt(a,/\d+/):+vt(a,/\d+/)-+vt(e,/\d+/))+";":N+z(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return vt(r.props,/grid-\w+-start/)})?e:N+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Ua+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jr(e,"stretch",0)?Yu(z(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return N+o+":"+i+d+(n?N+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+N+"$2box$3")+e;case 100:return z(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Ur(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function hm(e,t,a,r){switch(e.type){case tm:if(e.children.length)break;case Jg:case em:case Or:return e.return=e.return||e.value;case _n:return"";case Nn:return e.return=e.value+"{"+Ur(e.children,r)+"}";case wa:if(!Ie(e.value=e.props.join(",")))return""}return Ie(a=Ur(e.children,r))?e.return=e.value+"{"+a+"}":""}function vm(e){var t=Un(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function xm(e){return function(t){t.root||(t=t.return)&&e(t)}}function bm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Or:e.return=Yu(e.value,e.length,a);return;case Nn:return Ur([Ut(e,{value:z(e.value,"@","@"+O)})],r);case wa:if(e.length)return rm(a=e.props,function(o){switch(vt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Ut(e,{props:[z(o,/:(read-\w+)/,":"+Ua+"$1")]})),Wa(Ut(e,{props:[o]})),Zo(e,{props:Gu(a,r)});break;case"::placeholder":Wa(Ut(e,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),Wa(Ut(e,{props:[z(o,/:(plac\w+)/,":"+Ua+"$1")]})),Wa(Ut(e,{props:[z(o,/:(plac\w+)/,N+"input-$1")]})),Wa(Ut(e,{props:[o]})),Zo(e,{props:Gu(a,r)});break}return""})}}var Ku,Qu,Wt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Em="active",$m="data-styled-version",Zn="6.4.3",dd=`/*!sc*/
`,oi=typeof window<"u"&&typeof document<"u";function ym(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var Jy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Qu=(Ku=ym("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Ku!==void 0?Ku:ym("SC_DISABLE_SPEEDY"))!==null&&Qu!==void 0?Qu:typeof process<"u"&&process.env!==void 0&&!1),Mm="sc-keyframes-",e1={};function li(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var qC=1<<30,Xn=new Map,Kn=new Map,Yn=1,ai=e=>{if(Xn.has(e))return Xn.get(e);for(;Kn.has(Yn);)Yn++;let t=Yn++;return Xn.set(e,t),Kn.set(t,e),t},t1=e=>Kn.get(e),a1=(e,t)=>{Yn=t+1,Xn.set(e,t),Kn.set(t,e)};var cd=Object.freeze([]),qr=Object.freeze({});function zm(e,t,a=qr){return e.theme!==a.theme&&e.theme||t||a.theme}var r1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,o1=/(^-|-$)/g;function Am(e){return e.replace(r1,"-").replace(o1,"")}var i1=/(a)(d)/gi,wm=e=>String.fromCharCode(e+(e>25?39:97));function fd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=wm(t%52)+a;return(wm(t%52)+a).replace(i1,"$1-$2")}var td=5381,Ga=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Dm=e=>Ga(td,e);function pd(e){return fd(Dm(e)>>>0)}function n1(e){return e.displayName||e.name||"Component"}function ad(e){return typeof e=="string"&&!0}function l1(e){return ad(e)?`styled.${e}`:`Styled(${n1(e)})`}var Bm=Symbol.for("react.memo"),s1=Symbol.for("react.forward_ref"),u1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},d1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c1={[s1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Bm]:Fm};function Lm(e){return("type"in(t=e)&&t.type.$$typeof)===Bm?Fm:"$$typeof"in e?c1[e.$$typeof]:u1;var t}var f1=Object.defineProperty,p1=Object.getOwnPropertyNames,g1=Object.getOwnPropertySymbols,m1=Object.getOwnPropertyDescriptor,h1=Object.getPrototypeOf,v1=Object.prototype;function Om(e,t,a){if(typeof t!="string"){let r=h1(t);r&&r!==v1&&Om(e,r,a);let o=p1(t).concat(g1(t)),i=Lm(e),n=Lm(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in d1||a&&a[u]||n&&u in n||i&&u in i)){let d=m1(t,u);try{f1(e,u,d)}catch{}}}}return e}function si(e){return typeof e=="function"}var x1=Symbol.for("react.forward_ref");function gd(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===x1&&"styledComponentId"in e}function ri(e,t){return e&&t?e+" "+t:e||t||""}function Qn(e,t){return e.join(t||"")}function ii(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rd(e,t,a=!1){if(!a&&!ii(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=rd(e[r],t[r]);else if(ii(t))for(let r in t)e[r]=rd(e[r],t[r]);return e}function md(e,t){Object.defineProperty(e,"toString",{value:t})}var b1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw li(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+dd;return t}},y1=`style[${Wt}][${$m}="${Zn}"]`,w1=new RegExp(`^${Wt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Sm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,od=e=>{if(!e)return document;if(Sm(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Sm(t))return t}return document},L1=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},S1=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(dd),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(w1);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(a1(p,d),L1(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},Zu=e=>{let t=od(e.options.target).querySelectorAll(y1);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Wt)!==Em&&(S1(e,o),o.parentNode&&o.parentNode.removeChild(o))}},ti=!1;function C1(){if(ti!==!1)return ti;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ti=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ti=t.getAttribute("content")||void 0}return ti=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var jm=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Wt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Wt,Em),o.setAttribute($m,Zn);let s=t||C1();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},I1=class{constructor(e,t){this.element=jm(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw li(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},k1=class{constructor(e,t){this.element=jm(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Cm=oi,P1={isServer:!oi,useCSSOMInjection:!Jy},ni=class e{static registerId(t){return ai(t)}constructor(t=qr,a={},r){this.options=Object.assign(Object.assign({},P1),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&oi&&Cm&&(Cm=!1,Zu(this)),md(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=t1(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let x=Wt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=h+x+'{content:"'+y+'"}'+dd}return s})(this))}rehydrate(){!this.server&&oi&&Zu(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&oi&&t.target!==this.options.target&&od(this.options.target)!==od(t.target)&&Zu(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new I1(r,o):new k1(r,o))(this.options),new b1(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){ai(t),t.startsWith(Mm)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(ai(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(ai(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},_m=new WeakSet,T1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function R1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in T1||e.startsWith("--")?String(t).trim():t+"px"}var Va=47;function Im(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var Nm=Symbol.for("sc-keyframes");function E1(e){return typeof e=="object"&&e!==null&&Nm in e}function Hm(e){return si(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Um=e=>e==null||e===!1||e==="",$1=Symbol.for("react.client.reference");function km(e){return e.$$typeof===$1}function qm(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!Um(r)&&(Array.isArray(r)&&_m.has(r)||si(r)?t.push(Im(a)+":",r,";"):ii(r)?(t.push(a+" {"),qm(r,t),t.push("}")):t.push(Im(a)+": "+R1(a,r)+";"))}}function La(e,t,a,r,o=[]){if(Um(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(km(e))return o;if(Hm(e)&&t){let n=e(t);return La(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)La(e[n],t,a,r,o);return o}return gd(e)?(o.push(`.${e.styledComponentId}`),o):E1(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):km(e)?o:ii(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(qm(e,o),o):(o.push(e.toString()),o)}var M1=Dm(Zn),id=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Ga(M1,a),this.baseStyle=r,ni.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(Hm(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=Qn(La(u,t,a,r)))}else i+=Qn(La(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=fd(Ga(Ga(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=ri(o,s)}}return o}},z1=/&/g;function Wm(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Ju(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==Va||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===Va&&(n=!1,u++);else if(d!==34&&d!==39||Wm(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function Vm(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Vm(i.children,t)}return e}function Gm({options:e=qr,plugins:t=cd}=qr){let a,r,o,i=(x,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:x,n=t.slice();n.push(x=>{x.type===wa&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(z1,r).replace(o,i))}),e.prefix&&n.push(bm),n.push(hm);let s=[],u=vm(n.concat(xm(x=>s.push(x)))),d=(x,y="",b="",w="&")=>{a=w,r=y,o=void 0;let M=(function(f){let v=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!v&&!S)return f;if(!v)return Ju(f);let P=f.length,R="",k=0,T=0,U=0,A=0,ae=0,ka=!1;for(;T<P;){let xe=f.charCodeAt(T);if(xe!==34&&xe!==39||Wm(f,T))if(U===0)if(xe===Va&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==Va);)T++;T+=2}else if(xe!==40)if(xe!==41)if(A>0)T++;else if(xe===42&&T+1<P&&f.charCodeAt(T+1)===Va)R+=f.substring(k,T),T+=2,k=T,ka=!0;else if(xe===Va&&T+1<P&&f.charCodeAt(T+1)===Va){for(R+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,ka=!0}else xe===123?ae++:xe===125&&ae--,T++;else A>0&&A--,T++;else A++,T++;else T++;else U===0?U=xe:U===xe&&(U=0),T++}return ka?(k<P&&(R+=f.substring(k)),ae===0?R:Ju(R)):ae===0?f:Ju(f)})(x),g=mm(b||y?b+" "+y+" { "+M+" }":M);return e.namespace&&(g=Vm(g,e.namespace)),s=[],Ur(g,u),s},p=e,h=td;for(let x=0;x<t.length;x++)t[x].name||li(15),h=Ga(h,t[x].name);return p?.namespace&&(h=Ga(h,p.namespace)),p?.prefix&&(h=Ga(h,"p")),d.hash=h!==td?h.toString():"",d}var A1=new ni,nd=Gm(),hd=ue.default.createContext({shouldForwardProp:void 0,styleSheet:A1,stylis:nd,stylisPlugins:void 0}),WC=hd.Consumer;function vd(){return ue.default.useContext(hd)}function Xm(e){var t;let a=vd(),{styleSheet:r}=a,o=ue.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=ue.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:Gm({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=ue.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return ue.default.createElement(hd.Provider,{value:u},e.children)}var xd=ue.default.createContext(void 0),VC=xd.Consumer;var Pm=Object.prototype.hasOwnProperty,ed={};function D1(e,t){let a=typeof e!="string"?"sc":Am(e);ed[a]=(ed[a]||0)+1;let r=a+"-"+pd(Zn+a+ed[a]);return t?t+"-"+r:r}function B1(e,t,a){let r=gd(e),o=e,i=!ad(e),{attrs:n=cd,componentId:s=D1(t.displayName,t.parentComponentId),displayName:u=l1(e)}=t,d=t.displayName&&t.componentId?Am(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let M=t.shouldForwardProp;h=(g,f)=>w(g,f)&&M(g,f)}else h=w}let x=new id(a,d,r?o.componentStyle:void 0);function y(w,M){return(function(g,f,v){let{attrs:S,componentStyle:P,defaultProps:R,foldedComponentIds:k,styledComponentId:T,target:U}=g,A=ue.default.useContext(xd),ae=vd(),ka=g.shouldForwardProp||ae.shouldForwardProp,xe=zm(f,A,R)||qr,Kt,ao;{let Qt=ue.default.useRef(null),st=Qt.current;if(st!==null&&st[1]===xe&&st[2]===ae.styleSheet&&st[3]===ae.stylis&&st[7]===P&&(function(lr,Ne,Ae){let De=lr,be=Ne,ro=0;for(let Pa in be)if(Pm.call(be,Pa)&&(ro++,De[Pa]!==be[Pa]))return!1;return ro===Ae})(st[0],f,st[4]))Kt=st[5],ao=st[6];else{Kt=(function(Ne,Ae,De){let be=Object.assign(Object.assign({},Ae),{className:void 0,theme:De}),ro=Ne.length>1;for(let Pa=0;Pa<Ne.length;Pa++){let kl=Ne[Pa],hi=si(kl)?kl(ro?Object.assign({},be):be):kl;for(let Zt in hi)Zt==="className"?be.className=ri(be.className,hi[Zt]):Zt==="style"?be.style=Object.assign(Object.assign({},be.style),hi[Zt]):Zt in Ae&&Ae[Zt]===void 0||(be[Zt]=hi[Zt])}return"className"in Ae&&typeof Ae.className=="string"&&(be.className=ri(be.className,Ae.className)),be})(S,f,xe),ao=(function(Ne,Ae,De,be){return Ne.generateAndInjectStyles(Ae,De,be)})(P,Kt,ae.styleSheet,ae.stylis);let lr=0;for(let Ne in f)Pm.call(f,Ne)&&lr++;Qt.current=[f,xe,ae.styleSheet,ae.stylis,lr,Kt,ao,P]}}let mi=Kt.as||U,Cl=(function(Qt,st,lr,Ne){let Ae={};for(let De in Qt)Qt[De]===void 0||De[0]==="$"||De==="as"||De==="theme"&&Qt.theme===lr||(De==="forwardedAs"?Ae.as=Qt.forwardedAs:Ne&&!Ne(De,st)||(Ae[De]=Qt[De]));return Ae})(Kt,mi,xe,ka),Il=ri(k,T);return ao&&(Il+=" "+ao),Kt.className&&(Il+=" "+Kt.className),Cl[ad(mi)&&mi.includes("-")?"class":"className"]=Il,v&&(Cl.ref=v),(0,ue.createElement)(mi,Cl)})(b,w,M)}y.displayName=u;let b=ue.default.forwardRef(y);return b.attrs=p,b.componentStyle=x,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?ri(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function(M,...g){for(let f of g)rd(M,f,!0);return M})({},o.defaultProps,w):w}}),md(b,()=>`.${b.styledComponentId}`),i&&Om(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var F1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Tm(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var Rm=e=>(_m.add(e),e);function L(e,...t){if(si(e)||ii(e))return Rm(La(Tm(cd,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?La(a):Rm(La(Tm(a,t)))}function ld(e,t,a=qr){if(!t)throw li(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>ld(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>ld(e,t,Object.assign(Object.assign({},a),o)),r}var Ym=e=>ld(B1,e),l=Ym;F1.forEach(e=>{l[e]=Ym(e)});var sd=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(si(i)&&!gd(i))return!1}return!0})(t),ni.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=Qn(La(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function Km(e,...t){let a=L(e,...t),r=`sc-global-${pd(JSON.stringify(a))}`,o=new sd(a,r),i=s=>{let u=vd(),d=ue.default.useContext(xd),p;{let h=ue.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],x=ue.default.useRef(o);ue.default.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),ue.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,e1,d,h);else{let x=Object.assign(Object.assign({},u),{theme:zm(u,p,i.defaultProps)});o.renderStyles(s,x,d,h)}}return ue.default.memo(i)}var Qm,ud=class{constructor(t,a){this[Qm]=!0,this.inject=(r,o=nd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=Mm+t,this.rules=a,ai(this.id),md(this,()=>{throw li(12,String(this.name))})}getName(t=nd){return t.hash?this.name+fd(+t.hash>>>0):this.name}};function Tt(e,...t){let a=Qn(L(e,...t)),r=pd(a);return new ud(r,a)}Qm=Nm;var GC=`__sc-${Wt}__`;var XC=`:not(style[${Wt}])`,YC=`style[${Wt}]`;var Zm=`/* Generated from src/tokens. Do not edit directly. */

:root {
  --portal-bg-base: var(--ig-color-bg-canvas);
  --portal-bg-radial-a: var(--ig-color-bg-radial-a);
  --portal-bg-radial-b: var(--ig-color-bg-radial-b);
  --portal-surface-header: var(--ig-color-surface-header);
  --portal-surface-panel: var(--ig-color-surface-panel);
  --portal-surface-elevated: var(--ig-color-surface-raised);
  --portal-surface-muted: var(--ig-color-surface-muted);
  --portal-surface-interactive: var(--ig-color-surface-interactive);
  --portal-surface-active: var(--ig-color-surface-active);
  --portal-border: var(--ig-color-border-subtle);
  --portal-border-strong: var(--ig-color-border-strong);
  --portal-text-primary: var(--ig-color-text-primary);
  --portal-text-secondary: var(--ig-color-text-secondary);
  --portal-text-muted: var(--ig-color-text-muted);
  --portal-text-soft: var(--ig-color-text-soft);
  --portal-accent: var(--ig-color-accent);
  --portal-accent-strong: var(--ig-color-accent-strong);
  --portal-accent-soft: var(--ig-color-accent-soft);
  --portal-success: var(--ig-color-success);
  --portal-warning: var(--ig-color-warning);
  --portal-danger: var(--ig-color-danger);
  --portal-shadow: var(--ig-shadow-panel);
  --portal-scrollbar-thumb: var(--ig-scrollbar-thumb);
  --portal-scrollbar-thumb-hover: var(--ig-scrollbar-thumb-hover);
  --portal-scrollbar-thumb-active: var(--ig-scrollbar-thumb-active);
}
:root, :root[data-theme='dark'] {
  --ig-radius-2xs: 6px;
  --ig-radius-xxs: 8px;
  --ig-radius-xs: 10px;
  --ig-radius-sm: 10px;
  --ig-radius-md: 14px;
  --ig-radius-lg: 20px;
  --ig-radius-xl: 24px;
  --ig-radius-2xl: 20px;
  --ig-radius-4xl: 24px;
  --ig-radius-pill: 999px;
  --ig-font-sans: "IBM Plex Sans", "Segoe UI", sans-serif;
  --ig-font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
  --ig-font-size-3xs: 10px;
  --ig-font-size-2xs: 11px;
  --ig-font-size-xs: 12px;
  --ig-font-size-sm: 13px;
  --ig-font-size-md: 14px;
  --ig-font-size-lg: 15px;
  --ig-font-size-xl: 16px;
  --ig-font-size-2xl: 18px;
  --ig-font-size-3xl: 20px;
  --ig-font-size-3xl-plus: 22px;
  --ig-font-size-4xl: 24px;
  --ig-font-size-5xl: 28px;
  --ig-font-size-state-title: 13px;
  --ig-font-size-state-description: 12px;
  --ig-font-weight-state-title: 600;
  --ig-line-height-state-description: 1.5;
  --ig-font-weight-regular: 400;
  --ig-font-weight-medium: 500;
  --ig-font-weight-semibold: 600;
  --ig-font-weight-bold: 700;
  --ig-font-weight-black: 800;
  --ig-letter-spacing-heading: -0.02em;
  --ig-text-clamp-narrow: 5.5em;
  --ig-text-clamp-mid: 8em;
  --ig-letter-spacing-micro: 0.01em;
  --ig-letter-spacing-tight: 0.03em;
  --ig-letter-spacing-normal: 0.04em;
  --ig-letter-spacing-wide: 0.05em;
  --ig-letter-spacing-wider: 0.06em;
  --ig-letter-spacing-widest: 0.08em;
  --ig-line-height-none: 1;
  --ig-line-height-tight: 1.35;
  --ig-line-height-snug: 1.4;
  --ig-line-height-base: 1.45;
  --ig-line-height-relaxed: 1.5;
  --ig-line-height-relaxed-plus: 1.55;
  --ig-line-height-loose: 1.6;
  --ig-opacity-svg-fill-faint: 0.07;
  --ig-opacity-svg-fill-subtle: 0.13;
  --ig-opacity-svg-fill-soft: 0.15;
  --ig-opacity-svg-fill-medium: 0.22;
  --ig-opacity-dim: 0.3;
  --ig-opacity-dim-soft: 0.38;
  --ig-opacity-ghost: 0.35;
  --ig-opacity-faded: 0.4;
  --ig-opacity-disabled: 0.5;
  --ig-opacity-overlay: 0.55;
  --ig-opacity-muted: 0.6;
  --ig-opacity-subtle: 0.7;
  --ig-opacity-emphatic: 0.8;
  --ig-opacity-loud: 0.85;
  --ig-opacity-loud-plus: 0.86;
  --ig-opacity-prominent: 0.88;
  --ig-opacity-near: 0.9;
  --ig-blur-2xs: blur(1px);
  --ig-blur-xs: blur(8px);
  --ig-blur-sm: blur(10px);
  --ig-blur-md: blur(12px);
  --ig-blur-lg: blur(14px);
  --ig-blur-xl: blur(16px);
  --ig-icon-xs: 12px;
  --ig-icon-sub: 8px;
  --ig-icon-2xs: 11px;
  --ig-icon-sm: 14px;
  --ig-icon-sm-plus: 15px;
  --ig-icon-md: 16px;
  --ig-icon-lg: 18px;
  --ig-icon-xl: 20px;
  --ig-icon-2xl: 22px;
  --ig-icon-3xl: 24px;
  --ig-svg-stroke-bold: 2.5;
  --ig-popup-3xs: 80px;
  --ig-popup-2xs: 140px;
  --ig-popup-2xs-plus: 160px;
  --ig-popup-xs: 220px;
  --ig-popup-sm: 280px;
  --ig-popup-md: 320px;
  --ig-popup-lg: 360px;
  --ig-popup-xl: 480px;
  --ig-popup-2xl-narrow: 420px;
  --ig-popup-2xl: 560px;
  --ig-popup-3xl: 920px;
  --ig-popup-xs-tight: 210px;
  --ig-popup-2xl-wide: 520px;
  --ig-popup-3xl-narrow: 640px;
  --ig-popup-3xl-mid: 720px;
  --ig-popup-3xl-wide: 820px;
  --ig-popup-4xl-narrow: 960px;
  --ig-popup-4xl-mid: 1120px;
  --ig-popup-4xl: 1200px;
  --ig-popup-list-min: 200px;
  --ig-popup-md-narrow: 300px;
  --ig-popup-xs-plus: 240px;
  --ig-popup-xs-narrow: 190px;
  --ig-popup-sm-narrow: 260px;
  --ig-popup-2xs-narrow: 120px;
  --ig-popup-3xs-plus: 96px;
  --ig-popup-3xs-wide: 104px;
  --ig-popup-2xs-narrow-tight: 116px;
  --ig-popup-2xs-tight: 124px;
  --ig-popup-lg-plus: 440px;
  --ig-popup-filter-panel: 380px;
  --ig-space-0: 0px;
  --ig-space-1px: 1px;
  --ig-space-2px: 2px;
  --ig-space-3px: 3px;
  --ig-space-neg-1px: -1px;
  --ig-space-neg-2px: -2px;
  --ig-transform-hover-lift-y: -1px;
  --ig-space-1: 4px;
  --ig-space-1-plus: 5px;
  --ig-space-2: 6px;
  --ig-space-2-plus: 7px;
  --ig-space-3: 8px;
  --ig-space-4: 10px;
  --ig-space-5: 12px;
  --ig-space-6: 14px;
  --ig-space-7: 16px;
  --ig-space-8: 18px;
  --ig-space-9: 20px;
  --ig-space-10: 22px;
  --ig-space-11: 24px;
  --ig-space-12: 28px;
  --ig-space-13: 32px;
  --ig-border-1px: 1px;
  --ig-border-1_5px: 1.5px;
  --ig-border-2px: 2px;
  --ig-border-3px: 3px;
  --ig-z-hidden: 0;
  --ig-z-base: 1;
  --ig-z-raised: 2;
  --ig-z-raised-plus: 3;
  --ig-z-capture: 5;
  --ig-z-capture-high: 4;
  --ig-z-capture-super: 6;
  --ig-z-capture-top: 7;
  --ig-z-sticky: 10;
  --ig-z-sticky-plus: 20;
  --ig-z-sticky-top: 30;
  --ig-z-header: 20;
  --ig-z-overlay: 24;
  --ig-z-overlay-low: 50;
  --ig-z-dot-menu: 200;
  --ig-z-dot-menu-plus: 201;
  --ig-z-topbar: 9998;
  --ig-z-dropdown: 100;
  --ig-z-mobile-nav-backdrop: 110;
  --ig-z-mobile-nav: 120;
  --ig-z-mobile-menu: 200;
  --ig-z-popover: 500;
  --ig-z-context-menu: 1000;
  --ig-z-drawer: 1100;
  --ig-z-modal: 1200;
  --ig-z-toast: 9000;
  --ig-z-tooltip: 9999;
  --ig-scale-press: 0.95;
  --ig-scale-drag: 0.985;
  --ig-scale-hover-lift: 1.04;
  --ig-aspect-landscape: 4 / 3;
  --ig-control-height-xs: 28px;
  --ig-control-height-xs-plus: 30px;
  --ig-control-height-sm: 32px;
  --ig-control-height-sm-plus: 34px;
  --ig-control-height-md: 36px;
  --ig-control-height-mid-plus: 40px;
  --ig-control-height-mid-plus-tall: 60px;
  --ig-control-height-2xl-wide: 56px;
  --ig-control-height-lg: 44px;
  --ig-control-height-xl: 48px;
  --ig-control-height-2xl: 52px;
  --ig-control-height-3xl: 60px;
  --ig-control-height-3xl-plus: 64px;
  --ig-page-max-width: 1280px;
  --ig-layout-topbar: 80px;
  --ig-layout-capture-bar: 100px;
  --ig-layout-capture-grid: 100px;
  --ig-layout-histogram-width: 224px;
  --ig-layout-histogram-height: 84px;
  --ig-layout-dataset-card-min-height: 112px;
  --ig-layout-dataset-card-recent-min-height: 108px;
  --ig-layout-log-time-min: 45px;
  --ig-layout-log-detail-left: 254px;
  --ig-layout-log-detail-top: 58px;
  --ig-layout-log-detail-width: 272px;
  --ig-layout-color-plane-height: 120px;
  --ig-layout-color-thumb-size: 18px;
  --ig-layout-shadow-y-offset: 40px;
  --ig-layout-shadow-blur: 80px;
  --ig-layout-sidebar-header: 72px;
  --ig-layout-sidebar-collapse: 100px;
  --ig-layout-panel-min-height: 300px;
  --ig-layout-loading-panel-height: 180px;
  --ig-form-label-col: 140px;
  --ig-form-label-col-wide: 160px;
  --ig-motion-fastest: 0.12s;
  --ig-motion-swift: 0.15s;
  --ig-motion-fast: 0.16s ease;
  --ig-motion-fast-ease: 0.16s ease;
  --ig-motion-normal: 0.24s ease;
  --ig-motion-normal-ease: 0.2s ease;
  --ig-motion-mobile-nav: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --ig-motion-spinner: 0.7s;
  --ig-motion-spinner-fast: 0.75s;
  --ig-motion-spinner-slow: 0.8s;
  --ig-motion-progress-bar: 1.2s;
  --ig-motion-sync-spin: 1.5s;
  --ig-motion-shimmer: 1s;
  --ig-motion-skeleton: 1.3s;
  --ig-color-bg-canvas: #0f1115;
  --ig-color-bg-radial-a: rgba(66, 139, 202, 0.18);
  --ig-color-bg-radial-b: rgba(0, 158, 115, 0.12);
  --ig-color-surface-header: rgba(12, 15, 20, 0.88);
  --ig-color-surface-panel: rgba(12, 15, 20, 0.8);
  --ig-color-surface-raised: #10151d;
  --ig-color-surface-muted: rgba(13, 18, 27, 0.92);
  --ig-color-surface-interactive: rgba(255, 255, 255, 0.04);
  --ig-color-surface-active: rgba(77, 136, 255, 0.16);
  --ig-color-border-subtle: rgba(255, 255, 255, 0.08);
  --ig-color-border-strong: rgba(148, 163, 184, 0.18);
  --ig-color-text-primary: #edf2f7;
  --ig-color-text-secondary: #d7deea;
  --ig-color-text-muted: #98a2b3;
  --ig-color-text-soft: #7e8fa3;
  --ig-color-state-title: #edf2f7;
  --ig-color-state-description: #98a2b3;
  --ig-color-accent: #4d88ff;
  --ig-color-accent-strong: #2962d9;
  --ig-color-accent-soft: #8cb6ff;
  --ig-color-success: #35c6a7;
  --ig-color-warning: #ffd179;
  --ig-color-danger: #ff9a9a;
  --ig-color-surface-card-a: rgba(18, 21, 28, 0.96);
  --ig-color-surface-card-b: rgba(10, 14, 20, 0.96);
  --ig-color-surface-interactive-hover: rgba(255, 255, 255, 0.07);
  --ig-color-surface-focus: rgba(16, 22, 32, 0.98);
  --ig-color-accent-ring: rgba(91, 144, 255, 0.7);
  --ig-color-accent-border-strong: rgba(91, 144, 255, 0.38);
  --ig-color-accent-soft-surface: rgba(77, 136, 255, 0.12);
  --ig-color-accent-soft-surface-hover: rgba(77, 136, 255, 0.18);
  --ig-color-on-accent: #ffffff;
  --ig-shadow-panel: 0 20px 60px rgba(0, 0, 0, 0.25);
  --ig-shadow-floating: 0 30px 80px var(--ig-color-overlay-dim);
  --ig-shadow-popover: 0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  --ig-shadow-menu: 0 20px 40px rgba(0, 0, 0, 0.35);
  --ig-shadow-hover-lift: 0 12px 24px var(--ig-color-blue-strong-tint-24);
  --ig-shadow-focus-ring: 0 0 0 3px var(--ig-color-blue-tint-16);
  --ig-shadow-drawer-lift: 0 16px 48px rgba(4, 8, 14, 0.72);
  --ig-shadow-danger-hover-lift: 0 10px 28px rgba(127, 29, 29, 0.32);
  --ig-shadow-control-elevated: inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12);
  --ig-shadow-toast: 0 6px 20px var(--ig-color-overlay-dim);
  --ig-scrollbar-thumb: rgba(148, 163, 184, 0.22);
  --ig-scrollbar-thumb-hover: rgba(148, 163, 184, 0.34);
  --ig-scrollbar-thumb-active: rgba(148, 163, 184, 0.42);
  --ig-color-status-running-bg: rgba(43, 181, 114, 0.18);
  --ig-color-status-running-text: #9ef0c1;
  --ig-color-status-completed-bg: rgba(56, 189, 248, 0.18);
  --ig-color-status-completed-text: #8fe6ff;
  --ig-color-status-queued-bg: rgba(77, 136, 255, 0.18);
  --ig-color-status-queued-text: #a9c6ff;
  --ig-color-status-draft-bg: rgba(255, 196, 61, 0.2);
  --ig-color-status-draft-text: #ffe08a;
  --ig-color-status-failed-bg: rgba(239, 68, 68, 0.18);
  --ig-color-status-failed-text: #fca5a5;
  --ig-color-status-stopped-bg: rgba(148, 163, 184, 0.16);
  --ig-color-status-stopped-text: #d5dee9;
  --ig-color-status-interrupted-bg: rgba(251, 146, 60, 0.18);
  --ig-color-status-interrupted-text: #fdba74;
  --ig-color-status-warning-bg: rgba(251, 146, 60, 0.18);
  --ig-color-status-warning-text: #fdba74;
  --ig-color-status-idle-bg: rgba(67, 76, 94, 0.22);
  --ig-color-status-idle-text: #cbd5e1;
  --ig-color-alert-info-bg: rgba(77, 136, 255, 0.12);
  --ig-color-alert-info-border: rgba(77, 136, 255, 0.26);
  --ig-color-alert-info-text: #cfe0ff;
  --ig-color-alert-success-bg: rgba(43, 181, 114, 0.12);
  --ig-color-alert-success-border: rgba(43, 181, 114, 0.26);
  --ig-color-alert-success-text: #b7f6d1;
  --ig-color-alert-warning-bg: rgba(251, 146, 60, 0.12);
  --ig-color-alert-warning-border: rgba(251, 146, 60, 0.26);
  --ig-color-alert-warning-text: #ffd6a5;
  --ig-color-alert-danger-bg: rgba(239, 68, 68, 0.12);
  --ig-color-alert-danger-border: rgba(239, 68, 68, 0.26);
  --ig-color-alert-danger-text: #fecaca;
  --ig-color-chart-1: #4d88ff;
  --ig-color-chart-2: #35c6a7;
  --ig-color-chart-3: #ffd179;
  --ig-color-chart-4: #ff9a9a;
  --ig-color-chart-5: #8cb6ff;
  --ig-color-chart-6: #c084fc;
  --ig-color-chart-grid: var(--ig-color-white-08);
  --ig-color-chart-separator: rgba(10, 14, 20, 0.62);
  --ig-color-badge-neutral: rgba(255, 255, 255, 0.08);
  --ig-color-badge-accent: rgba(77, 136, 255, 0.18);
  --ig-color-badge-success: rgba(43, 181, 114, 0.18);
  --ig-color-badge-warning: rgba(251, 146, 60, 0.18);
  --ig-color-badge-danger: rgba(239, 68, 68, 0.18);
  --ig-color-tag-classification-bg: rgba(110, 200, 122, 0.15);
  --ig-color-tag-classification-text: #6ec87a;
  --ig-color-tag-segmentation-bg: rgba(180, 120, 230, 0.15);
  --ig-color-tag-segmentation-text: #c07be8;
  --ig-color-tag-object-detection-bg: rgba(77, 136, 255, 0.15);
  --ig-color-sync-chip-synced-bg: rgba(34, 197, 94, 0.92);
  --ig-color-sync-chip-uploading-bg: rgba(234, 179, 8, 0.92);
  --ig-color-sync-chip-failed-bg: rgba(220, 38, 38, 0.92);
  --ig-color-sync-chip-local-bg: rgba(75, 85, 99, 0.92);
  --ig-color-sync-chip-on-text: #ffffff;
  --ig-color-image-option-bg: rgba(0, 0, 0, 0.6);
  --ig-color-image-option-bg-hover: rgba(0, 0, 0, 0.8);
  --ig-color-image-group-circle-bg: rgba(12, 16, 24, 0.92);
  --ig-color-image-group-circle-border: rgba(255, 255, 255, 0.14);
  --ig-color-danger-dim-bg: rgba(120, 28, 28, 0.18);
  --ig-color-danger-dim-border: rgba(224, 92, 92, 0.45);
  --ig-color-progress-track: rgba(255, 255, 255, 0.08);
  --ig-color-skeleton-start: rgba(255, 255, 255, 0.06);
  --ig-color-skeleton-mid: rgba(255, 255, 255, 0.12);
  --ig-color-image-card-hover-border: rgba(77, 136, 255, 0.28);
  --ig-color-media-placeholder-a: rgba(77, 136, 255, 0.14);
  --ig-color-media-placeholder-b: rgba(43, 181, 114, 0.12);
  --ig-color-avatar-bg: rgba(77, 136, 255, 0.18);
  --ig-color-selection-bg: rgba(77, 136, 255, 0.14);
  --ig-color-focus-bg-soft: rgba(77, 136, 255, 0.16);
  --ig-color-active-bg: rgba(77, 136, 255, 0.28);
  --ig-color-danger-bg-soft: rgba(239, 68, 68, 0.08);
  --ig-color-danger-bg: rgba(239, 68, 68, 0.12);
  --ig-color-danger-bg-hover: rgba(239, 68, 68, 0.18);
  --ig-color-danger-bg-strong: rgba(239, 68, 68, 0.6);
  --ig-color-danger-overlay: rgba(239, 68, 68, 0.92);
  --ig-color-danger-overlay-hover: rgba(220, 38, 38, 0.96);
  --ig-color-danger-button-bg: rgba(255, 95, 122, 0.18);
  --ig-color-danger-button-border: rgba(255, 95, 122, 0.28);
  --ig-color-success-bg-soft: rgba(43, 181, 114, 0.08);
  --ig-color-success-bg: rgba(60, 210, 120, 0.15);
  --ig-color-warning-bg: rgba(255, 180, 60, 0.15);
  --ig-color-dropdown-open-shadow: 0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18);
  --ig-color-dropdown-menu-a: rgba(18, 24, 34, 0.98);
  --ig-color-dropdown-menu-b: rgba(10, 14, 20, 0.98);
  --ig-color-dropdown-option-hover: rgba(255, 255, 255, 0.06);
  --ig-color-toggle-on-bg: rgba(77, 136, 255, 0.4);
  --ig-color-toggle-on-border: rgba(77, 136, 255, 0.55);
  --ig-color-toggle-off-bg: rgba(255, 255, 255, 0.12);
  --ig-color-toggle-off-border: rgba(148, 163, 184, 0.18);
  --ig-color-tab-surface: rgba(255, 255, 255, 0.04);
  --ig-color-tab-highlight: rgba(77, 136, 255, 0.18);
  --ig-color-toolbar-surface: rgba(8, 12, 18, 0.84);
  --ig-color-modal-backdrop: rgba(4, 8, 14, 0.72);
  --ig-color-overlay-dim: rgba(0, 0, 0, 0.45);
  --ig-color-overlay-mid: rgba(0, 0, 0, 0.5);
  --ig-color-overlay-strong: rgba(0, 0, 0, 0.55);
  --ig-color-lightbox-backdrop: rgba(0, 0, 0, 0.85);
  --ig-color-lightbox-surface: rgba(7, 10, 20, 0.7);
  --ig-color-sidebar-bg-top: rgba(12, 15, 20, 0.96);
  --ig-color-sidebar-bg-bottom: rgba(10, 14, 20, 0.94);
  --ig-color-surface-dropdown-mobile-top: rgba(18, 24, 34, 0.98);
  --ig-color-surface-dropdown-mobile-bottom: rgba(10, 14, 20, 0.98);
  --ig-color-surface-calendar-top: rgba(17, 23, 32, 0.96);
  --ig-color-surface-calendar-bottom: rgba(10, 14, 20, 0.96);
  --ig-color-danger-soft-surface: rgba(164, 44, 44, 0.22);
  --ig-color-danger-button-gradient-mid: #7f1d1d;
  --ig-color-danger-button-gradient-end: #8f2f2f;
  --ig-color-danger-button-text: #fff4f4;
  --ig-color-danger-button-text-strong: #ffe1e1;
  --ig-color-svg-stroke-on-overlay: #ffffff;
  --ig-color-pie-slice-label: #eef4ff;
  --ig-color-annotation-outline-dark: var(--ig-color-image-option-bg);
  --ig-color-annotation-outline-light: rgba(255, 255, 255, 0.9);
  --ig-color-white-04: rgba(255, 255, 255, 0.04);
  --ig-color-white-06: rgba(255, 255, 255, 0.06);
  --ig-color-white-07: rgba(255, 255, 255, 0.07);
  --ig-color-white-08: rgba(255, 255, 255, 0.08);
  --ig-color-white-10: rgba(255, 255, 255, 0.1);
  --ig-color-white-12: rgba(255, 255, 255, 0.12);
  --ig-color-white-18: rgba(255, 255, 255, 0.18);
  --ig-color-white-20: rgba(255, 255, 255, 0.2);
  --ig-color-white-24: rgba(255, 255, 255, 0.24);
  --ig-color-shadow-soft: rgba(0, 0, 0, 0.28);
  --ig-color-shadow-medium: rgba(0, 0, 0, 0.35);
  --ig-color-shadow-strong: rgba(0, 0, 0, 0.4);
  --ig-color-white-30: rgba(255, 255, 255, 0.3);
  --ig-color-white-40: rgba(255, 255, 255, 0.4);
  --ig-color-white-70: rgba(255, 255, 255, 0.7);
  --ig-color-white-90: rgba(255, 255, 255, 0.9);
  --ig-color-white-96: rgba(255, 255, 255, 0.96);
  --ig-color-inset-highlight: rgba(255, 255, 255, 0.05);
  --ig-color-slate-tint-18: rgba(148, 163, 184, 0.18);
  --ig-color-blue-tint-06: rgba(77, 136, 255, 0.06);
  --ig-color-blue-tint-08: rgba(77, 136, 255, 0.08);
  --ig-color-blue-tint-10: rgba(77, 136, 255, 0.1);
  --ig-color-blue-tint-12: rgba(77, 136, 255, 0.12);
  --ig-color-blue-tint-14: rgba(77, 136, 255, 0.14);
  --ig-color-blue-tint-15: rgba(77, 136, 255, 0.15);
  --ig-color-blue-tint-16: rgba(77, 136, 255, 0.16);
  --ig-color-blue-tint-18: rgba(77, 136, 255, 0.18);
  --ig-color-blue-tint-20: rgba(77, 136, 255, 0.2);
  --ig-color-blue-tint-25: rgba(77, 136, 255, 0.25);
  --ig-color-blue-tint-28: rgba(77, 136, 255, 0.28);
  --ig-color-blue-tint-35: rgba(77, 136, 255, 0.35);
  --ig-color-blue-tint-38: rgba(91, 144, 255, 0.38);
  --ig-color-blue-tint-40: rgba(77, 136, 255, 0.4);
  --ig-color-blue-tint-50: rgba(77, 136, 255, 0.5);
  --ig-color-blue-tint-55: rgba(77, 136, 255, 0.55);
  --ig-color-blue-tint-60: rgba(77, 136, 255, 0.6);
  --ig-color-blue-tint-70: rgba(77, 136, 255, 0.7);
  --ig-color-blue-tint-78: rgba(77, 136, 255, 0.78);
  --ig-color-blue-tint-80: rgba(77, 136, 255, 0.8);
  --ig-color-blue-tint-85: rgba(77, 136, 255, 0.85);
  --ig-color-blue-tint-90: rgba(77, 136, 255, 0.9);
  --ig-color-blue-tint-92: rgba(77, 136, 255, 0.92);
  --ig-color-blue-tint-62: rgba(77, 136, 255, 0.62);
  --ig-color-blue-tint-34: rgba(77, 136, 255, 0.34);
  --ig-color-blue-strong-tint-20: rgba(41, 98, 217, 0.2);
  --ig-color-blue-strong-tint-24: rgba(41, 98, 217, 0.24);
  --ig-color-blue-strong-tint-30: rgba(41, 98, 217, 0.3);
  --ig-color-slate-tint-86: rgba(75, 85, 99, 0.86);
  --ig-color-white-32: rgba(255, 255, 255, 0.32);
  --ig-color-white-35: rgba(255, 255, 255, 0.35);
  --ig-color-white-45: rgba(255, 255, 255, 0.45);
  --ig-color-white-55: rgba(255, 255, 255, 0.55);
  --ig-color-white-62: rgba(255, 255, 255, 0.62);
  --ig-color-white-80: rgba(255, 255, 255, 0.8);
  --ig-color-overlay-archived: rgba(0, 0, 0, 0.36);
  --ig-color-overlay-darker: rgba(0, 0, 0, 0.65);
  --ig-color-overlay-darkest: rgba(0, 0, 0, 0.82);
  --ig-color-overlay-near-opaque: rgba(0, 0, 0, 0.92);
  --ig-color-capture-surface-loud: rgba(17, 24, 39, 0.86);
  --ig-color-capture-surface: rgba(17, 24, 39, 0.7);
  --ig-color-capture-overlay: rgba(0, 0, 0, 0.36);
  --ig-color-app-backdrop: rgba(0, 0, 0, 0.32);
  --ig-color-yellow-tint-50: rgba(255, 255, 0, 0.5);
  --ig-color-slate-gray-tint-12: rgba(127, 139, 157, 0.12);
  --ig-color-slate-gray-tint-16: rgba(127, 139, 157, 0.16);
  --ig-color-slate-gray-tint-18: rgba(127, 139, 157, 0.18);
  --ig-color-overlay-deep: rgba(0, 0, 0, 0.78);
  --ig-color-capture-bg-loud: rgba(12, 16, 22, 0.82);
  --ig-color-blue-accent-solid: rgba(77, 136, 255, 1);
  --ig-color-surface-dropdown-grid-top: rgba(18, 24, 34, 0.98);
  --ig-color-surface-dropdown-grid-bottom: rgba(12, 16, 24, 0.98);
  --ig-color-green-tint-success-soft: rgba(52, 211, 153, 0.06);
  --ig-color-amber-tint-warning-soft: rgba(250, 204, 21, 0.06);
  --ig-color-project-tag-general: rgba(100, 116, 139, 0.92);
  --ig-color-project-tag-deflectometry: rgba(14, 165, 233, 0.92);
  --ig-color-project-tag-photometric-stereo: rgba(167, 139, 250, 0.92);
}
:root[data-theme='light'] {
  --ig-radius-2xs: 6px;
  --ig-radius-xxs: 8px;
  --ig-radius-xs: 10px;
  --ig-radius-sm: 10px;
  --ig-radius-md: 14px;
  --ig-radius-lg: 20px;
  --ig-radius-xl: 24px;
  --ig-radius-2xl: 20px;
  --ig-radius-4xl: 24px;
  --ig-radius-pill: 999px;
  --ig-font-sans: "IBM Plex Sans", "Segoe UI", sans-serif;
  --ig-font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
  --ig-font-size-3xs: 10px;
  --ig-font-size-2xs: 11px;
  --ig-font-size-xs: 12px;
  --ig-font-size-sm: 13px;
  --ig-font-size-md: 14px;
  --ig-font-size-lg: 15px;
  --ig-font-size-xl: 16px;
  --ig-font-size-2xl: 18px;
  --ig-font-size-3xl: 20px;
  --ig-font-size-3xl-plus: 22px;
  --ig-font-size-4xl: 24px;
  --ig-font-size-5xl: 28px;
  --ig-font-size-state-title: 13px;
  --ig-font-size-state-description: 12px;
  --ig-font-weight-state-title: 600;
  --ig-line-height-state-description: 1.5;
  --ig-font-weight-regular: 400;
  --ig-font-weight-medium: 500;
  --ig-font-weight-semibold: 600;
  --ig-font-weight-bold: 700;
  --ig-font-weight-black: 800;
  --ig-letter-spacing-heading: -0.02em;
  --ig-text-clamp-narrow: 5.5em;
  --ig-text-clamp-mid: 8em;
  --ig-letter-spacing-micro: 0.01em;
  --ig-letter-spacing-tight: 0.03em;
  --ig-letter-spacing-normal: 0.04em;
  --ig-letter-spacing-wide: 0.05em;
  --ig-letter-spacing-wider: 0.06em;
  --ig-letter-spacing-widest: 0.08em;
  --ig-line-height-none: 1;
  --ig-line-height-tight: 1.35;
  --ig-line-height-snug: 1.4;
  --ig-line-height-base: 1.45;
  --ig-line-height-relaxed: 1.5;
  --ig-line-height-relaxed-plus: 1.55;
  --ig-line-height-loose: 1.6;
  --ig-opacity-svg-fill-faint: 0.07;
  --ig-opacity-svg-fill-subtle: 0.13;
  --ig-opacity-svg-fill-soft: 0.15;
  --ig-opacity-svg-fill-medium: 0.22;
  --ig-opacity-dim: 0.3;
  --ig-opacity-dim-soft: 0.38;
  --ig-opacity-ghost: 0.35;
  --ig-opacity-faded: 0.4;
  --ig-opacity-disabled: 0.5;
  --ig-opacity-overlay: 0.55;
  --ig-opacity-muted: 0.6;
  --ig-opacity-subtle: 0.7;
  --ig-opacity-emphatic: 0.8;
  --ig-opacity-loud: 0.85;
  --ig-opacity-loud-plus: 0.86;
  --ig-opacity-prominent: 0.88;
  --ig-opacity-near: 0.9;
  --ig-blur-2xs: blur(1px);
  --ig-blur-xs: blur(8px);
  --ig-blur-sm: blur(10px);
  --ig-blur-md: blur(12px);
  --ig-blur-lg: blur(14px);
  --ig-blur-xl: blur(16px);
  --ig-icon-xs: 12px;
  --ig-icon-sub: 8px;
  --ig-icon-2xs: 11px;
  --ig-icon-sm: 14px;
  --ig-icon-sm-plus: 15px;
  --ig-icon-md: 16px;
  --ig-icon-lg: 18px;
  --ig-icon-xl: 20px;
  --ig-icon-2xl: 22px;
  --ig-icon-3xl: 24px;
  --ig-svg-stroke-bold: 2.5;
  --ig-popup-3xs: 80px;
  --ig-popup-2xs: 140px;
  --ig-popup-2xs-plus: 160px;
  --ig-popup-xs: 220px;
  --ig-popup-sm: 280px;
  --ig-popup-md: 320px;
  --ig-popup-lg: 360px;
  --ig-popup-xl: 480px;
  --ig-popup-2xl-narrow: 420px;
  --ig-popup-2xl: 560px;
  --ig-popup-3xl: 920px;
  --ig-popup-xs-tight: 210px;
  --ig-popup-2xl-wide: 520px;
  --ig-popup-3xl-narrow: 640px;
  --ig-popup-3xl-mid: 720px;
  --ig-popup-3xl-wide: 820px;
  --ig-popup-4xl-narrow: 960px;
  --ig-popup-4xl-mid: 1120px;
  --ig-popup-4xl: 1200px;
  --ig-popup-list-min: 200px;
  --ig-popup-md-narrow: 300px;
  --ig-popup-xs-plus: 240px;
  --ig-popup-xs-narrow: 190px;
  --ig-popup-sm-narrow: 260px;
  --ig-popup-2xs-narrow: 120px;
  --ig-popup-3xs-plus: 96px;
  --ig-popup-3xs-wide: 104px;
  --ig-popup-2xs-narrow-tight: 116px;
  --ig-popup-2xs-tight: 124px;
  --ig-popup-lg-plus: 440px;
  --ig-popup-filter-panel: 380px;
  --ig-space-0: 0px;
  --ig-space-1px: 1px;
  --ig-space-2px: 2px;
  --ig-space-3px: 3px;
  --ig-space-neg-1px: -1px;
  --ig-space-neg-2px: -2px;
  --ig-transform-hover-lift-y: -1px;
  --ig-space-1: 4px;
  --ig-space-1-plus: 5px;
  --ig-space-2: 6px;
  --ig-space-2-plus: 7px;
  --ig-space-3: 8px;
  --ig-space-4: 10px;
  --ig-space-5: 12px;
  --ig-space-6: 14px;
  --ig-space-7: 16px;
  --ig-space-8: 18px;
  --ig-space-9: 20px;
  --ig-space-10: 22px;
  --ig-space-11: 24px;
  --ig-space-12: 28px;
  --ig-space-13: 32px;
  --ig-border-1px: 1px;
  --ig-border-1_5px: 1.5px;
  --ig-border-2px: 2px;
  --ig-border-3px: 3px;
  --ig-z-hidden: 0;
  --ig-z-base: 1;
  --ig-z-raised: 2;
  --ig-z-raised-plus: 3;
  --ig-z-capture: 5;
  --ig-z-capture-high: 4;
  --ig-z-capture-super: 6;
  --ig-z-capture-top: 7;
  --ig-z-sticky: 10;
  --ig-z-sticky-plus: 20;
  --ig-z-sticky-top: 30;
  --ig-z-header: 20;
  --ig-z-overlay: 24;
  --ig-z-overlay-low: 50;
  --ig-z-dot-menu: 200;
  --ig-z-dot-menu-plus: 201;
  --ig-z-topbar: 9998;
  --ig-z-dropdown: 100;
  --ig-z-mobile-nav-backdrop: 110;
  --ig-z-mobile-nav: 120;
  --ig-z-mobile-menu: 200;
  --ig-z-popover: 500;
  --ig-z-context-menu: 1000;
  --ig-z-drawer: 1100;
  --ig-z-modal: 1200;
  --ig-z-toast: 9000;
  --ig-z-tooltip: 9999;
  --ig-scale-press: 0.95;
  --ig-scale-drag: 0.985;
  --ig-scale-hover-lift: 1.04;
  --ig-aspect-landscape: 4 / 3;
  --ig-control-height-xs: 28px;
  --ig-control-height-xs-plus: 30px;
  --ig-control-height-sm: 32px;
  --ig-control-height-sm-plus: 34px;
  --ig-control-height-md: 36px;
  --ig-control-height-mid-plus: 40px;
  --ig-control-height-mid-plus-tall: 60px;
  --ig-control-height-2xl-wide: 56px;
  --ig-control-height-lg: 44px;
  --ig-control-height-xl: 48px;
  --ig-control-height-2xl: 52px;
  --ig-control-height-3xl: 60px;
  --ig-control-height-3xl-plus: 64px;
  --ig-page-max-width: 1280px;
  --ig-layout-topbar: 80px;
  --ig-layout-capture-bar: 100px;
  --ig-layout-capture-grid: 100px;
  --ig-layout-histogram-width: 224px;
  --ig-layout-histogram-height: 84px;
  --ig-layout-dataset-card-min-height: 112px;
  --ig-layout-dataset-card-recent-min-height: 108px;
  --ig-layout-log-time-min: 45px;
  --ig-layout-log-detail-left: 254px;
  --ig-layout-log-detail-top: 58px;
  --ig-layout-log-detail-width: 272px;
  --ig-layout-color-plane-height: 120px;
  --ig-layout-color-thumb-size: 18px;
  --ig-layout-shadow-y-offset: 40px;
  --ig-layout-shadow-blur: 80px;
  --ig-layout-sidebar-header: 72px;
  --ig-layout-sidebar-collapse: 100px;
  --ig-layout-panel-min-height: 300px;
  --ig-layout-loading-panel-height: 180px;
  --ig-form-label-col: 140px;
  --ig-form-label-col-wide: 160px;
  --ig-motion-fastest: 0.12s;
  --ig-motion-swift: 0.15s;
  --ig-motion-fast: 0.16s ease;
  --ig-motion-fast-ease: 0.16s ease;
  --ig-motion-normal: 0.24s ease;
  --ig-motion-normal-ease: 0.2s ease;
  --ig-motion-mobile-nav: 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  --ig-motion-spinner: 0.7s;
  --ig-motion-spinner-fast: 0.75s;
  --ig-motion-spinner-slow: 0.8s;
  --ig-motion-progress-bar: 1.2s;
  --ig-motion-sync-spin: 1.5s;
  --ig-motion-shimmer: 1s;
  --ig-motion-skeleton: 1.3s;
  --ig-color-bg-canvas: #ffffff;
  --ig-color-bg-radial-a: rgba(58, 115, 230, 0.10);
  --ig-color-bg-radial-b: rgba(26, 143, 111, 0.07);
  --ig-color-surface-header: rgba(255, 255, 255, 0.92);
  --ig-color-surface-panel: rgba(255, 255, 255, 0.85);
  --ig-color-surface-raised: #f7f9fb;
  --ig-color-surface-muted: rgba(247, 249, 251, 0.92);
  --ig-color-surface-interactive: rgba(15, 18, 25, 0.04);
  --ig-color-surface-active: rgba(58, 115, 230, 0.16);
  --ig-color-border-subtle: rgba(15, 18, 25, 0.08);
  --ig-color-border-strong: rgba(15, 23, 42, 0.14);
  --ig-color-text-primary: #0f1219;
  --ig-color-text-secondary: #384155;
  --ig-color-text-muted: #475467;
  --ig-color-text-soft: #5e6776;
  --ig-color-state-title: #0f1219;
  --ig-color-state-description: #475467;
  --ig-color-accent: #214bb8;
  --ig-color-accent-strong: #143fa6;
  --ig-color-accent-soft: #214bb8;
  --ig-color-success: #1a8f6f;
  --ig-color-warning: #b8761a;
  --ig-color-danger: #cc2929;
  --ig-color-surface-card-a: rgba(255, 255, 255, 0.96);
  --ig-color-surface-card-b: rgba(247, 249, 251, 0.96);
  --ig-color-surface-interactive-hover: rgba(15, 18, 25, 0.06);
  --ig-color-surface-focus: rgba(255, 255, 255, 0.98);
  --ig-color-accent-ring: rgba(58, 115, 230, 0.55);
  --ig-color-accent-border-strong: rgba(58, 115, 230, 0.38);
  --ig-color-accent-soft-surface: rgba(58, 115, 230, 0.12);
  --ig-color-accent-soft-surface-hover: rgba(58, 115, 230, 0.18);
  --ig-color-on-accent: #ffffff;
  --ig-shadow-panel: 0 16px 40px rgba(15, 23, 42, 0.08);
  --ig-shadow-floating: 0 24px 60px rgba(15, 23, 42, 0.14);
  --ig-shadow-popover: 0 20px 48px rgba(15, 23, 42, 0.12);
  --ig-shadow-menu: 0 16px 32px rgba(15, 23, 42, 0.10);
  --ig-shadow-hover-lift: 0 12px 24px rgba(58, 115, 230, 0.16);
  --ig-shadow-focus-ring: 0 0 0 3px rgba(58, 115, 230, 0.20);
  --ig-shadow-drawer-lift: 0 16px 48px rgba(15, 23, 42, 0.32);
  --ig-shadow-danger-hover-lift: 0 10px 28px rgba(185, 28, 28, 0.20);
  --ig-shadow-control-elevated: 0 10px 24px rgba(15, 23, 42, 0.08);
  --ig-shadow-toast: 0 6px 20px rgba(15, 23, 42, 0.12);
  --ig-scrollbar-thumb: rgba(15, 23, 42, 0.18);
  --ig-scrollbar-thumb-hover: rgba(15, 23, 42, 0.28);
  --ig-scrollbar-thumb-active: rgba(15, 23, 42, 0.36);
  --ig-color-status-running-bg: rgba(26, 143, 111, 0.18);
  --ig-color-status-running-text: #0e5a44;
  --ig-color-status-completed-bg: rgba(14, 116, 144, 0.18);
  --ig-color-status-completed-text: #0e5b6c;
  --ig-color-status-queued-bg: rgba(58, 115, 230, 0.18);
  --ig-color-status-queued-text: #1f4fb8;
  --ig-color-status-draft-bg: rgba(184, 118, 26, 0.2);
  --ig-color-status-draft-text: #7a4f10;
  --ig-color-status-failed-bg: rgba(204, 41, 41, 0.18);
  --ig-color-status-failed-text: #8a1818;
  --ig-color-status-stopped-bg: rgba(15, 23, 42, 0.10);
  --ig-color-status-stopped-text: #384155;
  --ig-color-status-interrupted-bg: rgba(184, 118, 26, 0.18);
  --ig-color-status-interrupted-text: #7d4310;
  --ig-color-status-warning-bg: rgba(184, 118, 26, 0.18);
  --ig-color-status-warning-text: #7d4310;
  --ig-color-status-idle-bg: rgba(15, 23, 42, 0.10);
  --ig-color-status-idle-text: #374151;
  --ig-color-alert-info-bg: rgba(58, 115, 230, 0.12);
  --ig-color-alert-info-border: rgba(58, 115, 230, 0.32);
  --ig-color-alert-info-text: #1f4fb8;
  --ig-color-alert-success-bg: rgba(26, 143, 111, 0.12);
  --ig-color-alert-success-border: rgba(26, 143, 111, 0.32);
  --ig-color-alert-success-text: #0e5a44;
  --ig-color-alert-warning-bg: rgba(184, 118, 26, 0.12);
  --ig-color-alert-warning-border: rgba(184, 118, 26, 0.32);
  --ig-color-alert-warning-text: #7a4f10;
  --ig-color-alert-danger-bg: rgba(204, 41, 41, 0.12);
  --ig-color-alert-danger-border: rgba(204, 41, 41, 0.32);
  --ig-color-alert-danger-text: #8a1818;
  --ig-color-chart-1: #214bb8;
  --ig-color-chart-2: #1a8f6f;
  --ig-color-chart-3: #b8761a;
  --ig-color-chart-4: #cc2929;
  --ig-color-chart-5: #214bb8;
  --ig-color-chart-6: #7c3aed;
  --ig-color-chart-grid: rgba(15, 23, 42, 0.08);
  --ig-color-chart-separator: rgba(255, 255, 255, 0.82);
  --ig-color-badge-neutral: rgba(15, 18, 25, 0.08);
  --ig-color-badge-accent: rgba(58, 115, 230, 0.18);
  --ig-color-badge-success: rgba(26, 143, 111, 0.18);
  --ig-color-badge-warning: rgba(184, 118, 26, 0.18);
  --ig-color-badge-danger: rgba(204, 41, 41, 0.18);
  --ig-color-tag-classification-bg: rgba(34, 139, 50, 0.12);
  --ig-color-tag-classification-text: #2f7a3a;
  --ig-color-tag-segmentation-bg: rgba(120, 60, 175, 0.12);
  --ig-color-tag-segmentation-text: #7c3aed;
  --ig-color-tag-object-detection-bg: rgba(33, 75, 184, 0.12);
  --ig-color-sync-chip-synced-bg: rgba(22, 163, 74, 0.92);
  --ig-color-sync-chip-uploading-bg: rgba(202, 138, 4, 0.92);
  --ig-color-sync-chip-failed-bg: rgba(185, 28, 28, 0.92);
  --ig-color-sync-chip-local-bg: rgba(75, 85, 99, 0.92);
  --ig-color-sync-chip-on-text: #ffffff;
  --ig-color-image-option-bg: rgba(0, 0, 0, 0.5);
  --ig-color-image-option-bg-hover: rgba(0, 0, 0, 0.7);
  --ig-color-image-group-circle-bg: rgba(15, 23, 42, 0.85);
  --ig-color-image-group-circle-border: var(--ig-color-white-18);
  --ig-color-danger-dim-bg: rgba(185, 28, 28, 0.10);
  --ig-color-danger-dim-border: rgba(185, 28, 28, 0.40);
  --ig-color-progress-track: rgba(15, 18, 25, 0.08);
  --ig-color-skeleton-start: rgba(15, 18, 25, 0.05);
  --ig-color-skeleton-mid: rgba(15, 18, 25, 0.10);
  --ig-color-image-card-hover-border: rgba(58, 115, 230, 0.28);
  --ig-color-media-placeholder-a: rgba(58, 115, 230, 0.14);
  --ig-color-media-placeholder-b: rgba(26, 143, 111, 0.12);
  --ig-color-avatar-bg: rgba(58, 115, 230, 0.18);
  --ig-color-selection-bg: rgba(58, 115, 230, 0.14);
  --ig-color-focus-bg-soft: rgba(58, 115, 230, 0.16);
  --ig-color-active-bg: rgba(58, 115, 230, 0.28);
  --ig-color-danger-bg-soft: rgba(220, 38, 38, 0.10);
  --ig-color-danger-bg: rgba(220, 38, 38, 0.14);
  --ig-color-danger-bg-hover: rgba(220, 38, 38, 0.20);
  --ig-color-danger-bg-strong: rgba(220, 38, 38, 0.6);
  --ig-color-danger-overlay: rgba(220, 38, 38, 0.92);
  --ig-color-danger-overlay-hover: rgba(185, 28, 28, 0.96);
  --ig-color-danger-button-bg: rgba(220, 38, 60, 0.20);
  --ig-color-danger-button-border: rgba(220, 38, 60, 0.30);
  --ig-color-success-bg-soft: rgba(22, 163, 74, 0.10);
  --ig-color-success-bg: rgba(22, 163, 74, 0.18);
  --ig-color-warning-bg: rgba(217, 119, 6, 0.18);
  --ig-color-dropdown-open-shadow: 0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10);
  --ig-color-dropdown-menu-a: rgba(255, 255, 255, 0.98);
  --ig-color-dropdown-menu-b: rgba(247, 249, 251, 0.98);
  --ig-color-dropdown-option-hover: rgba(15, 18, 25, 0.05);
  --ig-color-toggle-on-bg: rgba(58, 115, 230, 0.5);
  --ig-color-toggle-on-border: rgba(58, 115, 230, 0.65);
  --ig-color-toggle-off-bg: rgba(15, 18, 25, 0.10);
  --ig-color-toggle-off-border: rgba(15, 23, 42, 0.14);
  --ig-color-tab-surface: rgba(15, 18, 25, 0.04);
  --ig-color-tab-highlight: rgba(58, 115, 230, 0.18);
  --ig-color-toolbar-surface: rgba(247, 249, 251, 0.84);
  --ig-color-modal-backdrop: rgba(15, 23, 42, 0.32);
  --ig-color-overlay-dim: rgba(0, 0, 0, 0.45);
  --ig-color-overlay-mid: rgba(0, 0, 0, 0.5);
  --ig-color-overlay-strong: rgba(0, 0, 0, 0.55);
  --ig-color-lightbox-backdrop: rgba(0, 0, 0, 0.85);
  --ig-color-lightbox-surface: rgba(255, 255, 255, 0.7);
  --ig-color-sidebar-bg-top: rgba(247, 249, 251, 0.96);
  --ig-color-sidebar-bg-bottom: rgba(241, 245, 249, 0.94);
  --ig-color-surface-dropdown-mobile-top: rgba(255, 255, 255, 0.98);
  --ig-color-surface-dropdown-mobile-bottom: rgba(247, 249, 251, 0.98);
  --ig-color-surface-calendar-top: rgba(255, 255, 255, 0.96);
  --ig-color-surface-calendar-bottom: rgba(247, 249, 251, 0.96);
  --ig-color-danger-soft-surface: rgba(220, 38, 38, 0.12);
  --ig-color-danger-button-gradient-mid: #a23030;
  --ig-color-danger-button-gradient-end: #b13838;
  --ig-color-danger-button-text: #ffffff;
  --ig-color-danger-button-text-strong: #ffffff;
  --ig-color-svg-stroke-on-overlay: #ffffff;
  --ig-color-pie-slice-label: #0f1219;
  --ig-color-annotation-outline-dark: var(--ig-color-image-option-bg);
  --ig-color-annotation-outline-light: rgba(255, 255, 255, 0.9);
  --ig-color-white-04: rgba(15, 18, 25, 0.04);
  --ig-color-white-06: rgba(15, 18, 25, 0.05);
  --ig-color-white-07: rgba(15, 18, 25, 0.06);
  --ig-color-white-08: rgba(15, 18, 25, 0.08);
  --ig-color-white-10: rgba(15, 18, 25, 0.09);
  --ig-color-white-12: rgba(15, 18, 25, 0.10);
  --ig-color-white-18: rgba(15, 18, 25, 0.14);
  --ig-color-white-20: rgba(15, 18, 25, 0.16);
  --ig-color-white-24: rgba(15, 18, 25, 0.18);
  --ig-color-shadow-soft: rgba(0, 0, 0, 0.28);
  --ig-color-shadow-medium: rgba(0, 0, 0, 0.35);
  --ig-color-shadow-strong: rgba(0, 0, 0, 0.4);
  --ig-color-white-30: rgba(15, 18, 25, 0.22);
  --ig-color-white-40: rgba(15, 18, 25, 0.32);
  --ig-color-white-70: rgba(15, 18, 25, 0.62);
  --ig-color-white-90: rgba(15, 18, 25, 0.82);
  --ig-color-white-96: rgba(15, 18, 25, 0.88);
  --ig-color-inset-highlight: rgba(15, 18, 25, 0.05);
  --ig-color-slate-tint-18: rgba(15, 23, 42, 0.14);
  --ig-color-blue-tint-06: rgba(58, 115, 230, 0.06);
  --ig-color-blue-tint-08: rgba(58, 115, 230, 0.08);
  --ig-color-blue-tint-10: rgba(58, 115, 230, 0.1);
  --ig-color-blue-tint-12: rgba(58, 115, 230, 0.12);
  --ig-color-blue-tint-14: rgba(58, 115, 230, 0.14);
  --ig-color-blue-tint-15: rgba(58, 115, 230, 0.15);
  --ig-color-blue-tint-16: rgba(58, 115, 230, 0.16);
  --ig-color-blue-tint-18: rgba(58, 115, 230, 0.18);
  --ig-color-blue-tint-20: rgba(58, 115, 230, 0.2);
  --ig-color-blue-tint-25: rgba(58, 115, 230, 0.25);
  --ig-color-blue-tint-28: rgba(58, 115, 230, 0.28);
  --ig-color-blue-tint-35: rgba(58, 115, 230, 0.35);
  --ig-color-blue-tint-38: rgba(58, 115, 230, 0.38);
  --ig-color-blue-tint-40: rgba(58, 115, 230, 0.4);
  --ig-color-blue-tint-50: rgba(58, 115, 230, 0.5);
  --ig-color-blue-tint-55: rgba(58, 115, 230, 0.55);
  --ig-color-blue-tint-60: rgba(58, 115, 230, 0.6);
  --ig-color-blue-tint-70: rgba(58, 115, 230, 0.7);
  --ig-color-blue-tint-78: rgba(58, 115, 230, 0.78);
  --ig-color-blue-tint-80: rgba(58, 115, 230, 0.8);
  --ig-color-blue-tint-85: rgba(58, 115, 230, 0.85);
  --ig-color-blue-tint-90: rgba(58, 115, 230, 0.9);
  --ig-color-blue-tint-92: rgba(58, 115, 230, 0.92);
  --ig-color-blue-tint-62: rgba(58, 115, 230, 0.62);
  --ig-color-blue-tint-34: rgba(58, 115, 230, 0.34);
  --ig-color-blue-strong-tint-20: rgba(20, 63, 166, 0.2);
  --ig-color-blue-strong-tint-24: rgba(20, 63, 166, 0.24);
  --ig-color-blue-strong-tint-30: rgba(20, 63, 166, 0.3);
  --ig-color-slate-tint-86: rgba(229, 231, 235, 0.86);
  --ig-color-white-32: rgba(15, 18, 25, 0.24);
  --ig-color-white-35: rgba(15, 18, 25, 0.27);
  --ig-color-white-45: rgba(15, 18, 25, 0.37);
  --ig-color-white-55: rgba(15, 18, 25, 0.47);
  --ig-color-white-62: rgba(15, 18, 25, 0.54);
  --ig-color-white-80: rgba(15, 18, 25, 0.72);
  --ig-color-overlay-archived: rgba(0, 0, 0, 0.36);
  --ig-color-overlay-darker: rgba(0, 0, 0, 0.48);
  --ig-color-overlay-darkest: rgba(0, 0, 0, 0.62);
  --ig-color-overlay-near-opaque: rgba(0, 0, 0, 0.72);
  --ig-color-capture-surface-loud: rgba(229, 231, 235, 0.86);
  --ig-color-capture-surface: rgba(229, 231, 235, 0.7);
  --ig-color-capture-overlay: rgba(0, 0, 0, 0.24);
  --ig-color-app-backdrop: rgba(0, 0, 0, 0.22);
  --ig-color-yellow-tint-50: rgba(202, 138, 4, 0.5);
  --ig-color-slate-gray-tint-12: rgba(71, 85, 105, 0.12);
  --ig-color-slate-gray-tint-16: rgba(71, 85, 105, 0.16);
  --ig-color-slate-gray-tint-18: rgba(71, 85, 105, 0.18);
  --ig-color-overlay-deep: rgba(0, 0, 0, 0.58);
  --ig-color-capture-bg-loud: rgba(229, 231, 235, 0.82);
  --ig-color-blue-accent-solid: rgba(58, 115, 230, 1);
  --ig-color-surface-dropdown-grid-top: rgba(255, 255, 255, 0.98);
  --ig-color-surface-dropdown-grid-bottom: rgba(247, 249, 251, 0.98);
  --ig-color-green-tint-success-soft: rgba(22, 163, 74, 0.08);
  --ig-color-amber-tint-warning-soft: rgba(217, 119, 6, 0.08);
  --ig-color-project-tag-general: rgba(71, 85, 105, 0.92);
  --ig-color-project-tag-deflectometry: rgba(2, 132, 199, 0.92);
  --ig-color-project-tag-photometric-stereo: rgba(124, 58, 237, 0.92);
}
`;var Xa=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Ya=e=>e.comments[0]?.body??"",Jm=e=>e.comments[0]?.author??"";function eh(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:Xa(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}var th="fbw:author",Jn=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;eh(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.applySeedOverrides(),this.notify()}applySeedOverrides(){this.seedThreads=this.rawSeeds.filter(t=>!this.overrides[t.id]?.hidden).map(t=>{let a=this.overrides[t.id];return a?{...t,origin:"seed",resolved:a.resolved??t.resolved,comments:[...t.comments,...a.addedComments??[]]}:{...t,origin:"seed"}})}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r){let o={id:Xa(),author:a,body:r,createdAt:new Date().toISOString()};if(this.isSeed(t)){let i=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...i.addedComments??[],o]});return}this.threads=this.threads.map(i=>i.id===t?{...i,comments:[...i.comments,o]}:i),this.persist()}canRemoveComment(t,a){if(this.isSeed(t))return(this.overrides[t]?.addedComments??[]).some(o=>o.id===a);let r=this.threads.find(o=>o.id===t);return!!r&&r.comments.findIndex(o=>o.id===a)>0}removeComment(t,a){if(this.canRemoveComment(t,a)){if(this.isSeed(t)){let r=(this.overrides[t]?.addedComments??[]).filter(o=>o.id!==a);this.overrideSeed(t,{addedComments:r});return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r),this.persist()}}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.applySeedOverrides(),this.notify()}get author(){return localStorage.getItem(th)??""}set author(t){localStorage.setItem(th,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){localStorage.setItem(this.threadsKey,JSON.stringify(this.threads)),this.notify()}notify(){this.listeners.forEach(t=>t())}};var Wr="fbw-host",j1="#2563eb",bd="fbw:pending-jump",_1=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function N1(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${_1(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function ah(e){return{page:location.pathname,selector:N1(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ka(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==Wr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function H1(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${j1}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function yd(e){if(e.page!==location.pathname)return!1;let t=Ka(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>H1(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function rh(e){sessionStorage.setItem(bd,JSON.stringify(e)),location.assign(e.page)}function oh(){let e=sessionStorage.getItem(bd);if(e){sessionStorage.removeItem(bd);try{let t=JSON.parse(e);setTimeout(()=>yd(t),400)}catch{}}}var gi=c(I(),1);var Rd=c(I(),1),Ed=c(I(),1),$d=c(I(),1),Md=c(I(),1),nl=c(I(),1),iw=c(I(),1),wh=c(I(),1),Lh=c(I(),1),Sh=c(I(),1),ci=c(I(),1),fw=c(I(),1);var pw=c(m(),1),gw=c(m(),1);var Ah=c(m(),1);var Dh=c(m(),1);var Bh=c(m(),1);var Ow=c(m(),1),Oh=c(m(),1);var _w=c(m(),1);var Nw=c(m(),1),Hw=c(m(),1),Uw=c(m(),1),jh=c(m(),1),qw=c(m(),1),Nh=c(I(),1);var Uh=c(m(),1),qh=c(I(),1),Wh=c(m(),1);var Vh=c(I(),1);var Gh=c(m(),1);var Xh=c(m(),1),Bd=c(I(),1);var Fd=c(m(),1),Kh=c(I(),1);var Qh=c(m(),1),Zh=c(I(),1);var Jh=c(m(),1),ev=c(I(),1);var tv=c(m(),1),av=c(I(),1);var rv=c(m(),1),ov=c(I(),1);var o2=c(m(),1),iv=c(m(),1),i2=c(I(),1),n2=c(ya(),1),l2=c(I(),1);var s2=c(m(),1),u2=c(I(),1),nv=c(m(),1),ul=c(I(),1),d2=c(ya(),1),c2=c(m(),1),dl=c(I(),1);var lv=c(m(),1),Zr=c(I(),1);var sv=c(m(),1),Za=c(I(),1);var Me=c(m(),1),m2=c(I(),1),_d=c(m(),1),h2=c(I(),1),Nd=c(m(),1),v2=c(I(),1),uv=c(m(),1),Hd=c(I(),1);var dv=c(m(),1);var cv=c(m(),1);var fv=c(m(),1);var pv=c(m(),1);var gv=c(m(),1),Ud=c(I(),1),b2=c(ya(),1);var mv=c(I(),1);var hv=c(m(),1),qd=c(m(),1);var vv=c(m(),1);var bv=c(m(),1),L2=c(I(),1);var S2=c(m(),1);var al=c(I());var tl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var sh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var uh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var wd=e=>{let t=uh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var ui=c(I());var dh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var ch=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var fh=(0,ui.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,ui.createElement)("svg",{ref:u,...dh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:tl("lucide",o),...!i&&!ch(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,ui.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Vr=(e,t)=>{let a=(0,al.forwardRef)(({className:r,...o},i)=>(0,al.createElement)(fh,{ref:i,iconNode:t,className:tl(`lucide-${sh(wd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=wd(e),a};var Y1=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gr=Vr("check",Y1);var K1=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Vt=Vr("trash-2",K1);var Q1=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Xe=Vr("x",Q1);var yv=c(I(),1);var wv=c(m(),1),Lv=c(m(),1);var Sv=c(m(),1),R2=c(I(),1);var Cv=c(m(),1);var Iv=c(I(),1);var kv=c(m(),1);var Tv=c(m(),1);var M2=c(m(),1);var A2=c(m(),1);var cl=c(m(),1);var F2=c(m(),1);var $v=c(m(),1);var V2=c(m(),1),or=c(I(),1);var Mv=c(m(),1);var zv=c(m(),1);var Av=c(m(),1),Q2=c(I(),1);var Dv=c(m(),1);var Bv=c(m(),1);var Z2=c(m(),1);var Fv=c(m(),1);var aL=c(m(),1);var Ov=c(m(),1);var oL=c(I(),1);var jv=c(m(),1),iL=c(I(),1);var Hv=c(m(),1),nL=c(I(),1),Uv=c(m(),1),lL=c(m(),1),qv=c(m(),1),Wv=c(I(),1);var Wd=c(m(),1),Vv=c(m(),1);var Gv=c(m(),1);var Td=c(m(),1),ar=c(I(),1);var ke=c(m(),1),bL=c(I(),1),yL=c(ya(),1);var Yv=c(m(),1);var Vd=c(I(),1),Gd=c(m(),1),Xd=c(I(),1);var Kv=c(m(),1),Jr=c(I(),1),wL=c(ya(),1);var Qv=c(m(),1),LL=c(m(),1),Zv=c(I(),1),Yd=c(m(),1),Jv=c(I(),1);var ex=c(m(),1);var tx=c(m(),1),IL=c(I(),1),Kd=c(m(),1),ax=c(I(),1),kL=c(ya(),1),PL=c(m(),1),Ke=c(I(),1),fl=c(m(),1);var Qd=c(I(),1),ix=c(m(),1);var nx=c(I(),1);var lx=c(m(),1),sx=c(I(),1);var ux=c(m(),1);var dx=c(m(),1);var cx=c(m(),1);var fx=c(m(),1);var yt=c(m(),1),mx=c(I(),1);var Kr=c(m(),1);var XL=c(m(),1),ml=c(I(),1);var Zd=c(m(),1),YL=c(m(),1),ir=c(I(),1);var hx=c(m(),1),hl=c(I(),1);var vx=c(m(),1),xx=c(I(),1);var vl=c(m(),1);var ZL=c(m(),1);var bx=c(m(),1);var yx=c(m(),1);var wx=c(m(),1),JL=c(I(),1);var Lx=c(m(),1),Sx=c(I(),1);var Cx=c(m(),1),Ix=c(m(),1);var Ja=c(m(),1),Px=c(m(),1);var Tx=c(m(),1);var Rx=c(m(),1),sS=c(I(),1);var Ex=c(m(),1);var uS=c(m(),1),xl=c(I(),1);var $x=c(m(),1);var dS=c(m(),1),Mx=c(I(),1);var er=c(m(),1);var zx=c(m(),1),Ax=c(I(),1);var Dx=c(m(),1);var Bx=c(m(),1);var hS=c(m(),1);var Fx=c(m(),1),vS=c(I(),1),xS=c(m(),1),Ox=c(I(),1),bS=c(m(),1),jx=c(m(),1);var LS=c(m(),1);var SS=c(I(),1);var Jd=c(m(),1);var ec=c(m(),1),tc=c(I(),1),Hx=c(I(),1),ac=c(m(),1),rc=c(m(),1);var Ux=c(m(),1),oc=c(I(),1);var kS=c(m(),1),qx=c(m(),1),Wx=c(m(),1);var Vx=c(m(),1);var ic=c(m(),1),PS=c(m(),1),TS=c(m(),1);var Gx=c(m(),1),Xx=c(I(),1),Yx=c(m(),1),RS=c(I(),1);var nc=c(m(),1),lc=c(I(),1);var sc=c(m(),1),Kx=c(m(),1),uc=c(m(),1),Qx=c(m(),1),Zx=c(m(),1);var Jx=c(m(),1);var dc=c(m(),1);var cc=c(m(),1);var e0=c(m(),1),fc=c(m(),1),t0=c(m(),1),ES=c(I(),1),r0=c(m(),1),o0=c(m(),1),$S=c(I(),1);var i0=c(m(),1),n0=c(m(),1);var MS=c(m(),1);var yh={};var zd={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},Ad={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},he={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},Xr={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Rt={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},bt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},nw={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},di={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},rl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Et={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},Ch={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},Ih={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Cd={zero:"0deg",half:"180deg",full:"360deg"},ll={horizontal:"90deg",diagonal:"135deg"},$e={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},Qa={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},ze={sm:`@media (max-width: ${Qa.sm}px)`,smPlus:`@media (max-width: ${Qa.smPlus}px)`,md:`@media (max-width: ${Qa.md}px)`,mdWide:`@media (max-width: ${Qa.mdWide}px)`,lg:`@media (max-width: ${Qa.lg}px)`,xl:`@media (max-width: ${Qa.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},Ye={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},lw={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},sw={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Ld={press:.95,drag:.985,hoverLift:1.04},uw={landscape:"4 / 3"},dw={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},Yr={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function kh(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Et.xs,md:Et.md,lg:Et["2xl"],xl:Et["4xl"],pill:Et.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:Qa,motion:$e,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var Sa=kh("portalDark",zd,Ch),cw=kh("portalLight",Ad,Ih);var P5=(0,ci.createContext)(null);var Gt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,ve=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,Dd=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,R5=L`
  ${Gt}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,rr=L`
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  height: var(--ig-control-height-md);
  padding: 0 var(--ig-space-5);
  border-radius: var(--ig-radius-md);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-md);
  line-height: var(--ig-line-height-none);
  transition:
    border-color var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &::placeholder {
    color: var(--ig-color-text-soft);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
    box-shadow: var(--ig-shadow-focus-ring);
    background: var(--ig-color-surface-focus);
  }

  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    border-style: dashed;
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }

  &:where(textarea) {
    height: auto;
    padding: var(--ig-space-4) var(--ig-space-5);
    line-height: var(--ig-line-height-snug);
  }

  &:where([type='date']),
  &:where([type='datetime-local']),
  &:where([type='time']) {
    padding-right: var(--ig-space-4);

    &::-webkit-calendar-picker-indicator {
      filter: invert(0.8) brightness(1.2);
      cursor: pointer;
      padding: var(--ig-space-1);
      border-radius: var(--ig-radius-xs);
      opacity: var(--ig-opacity-subtle);
      transition: opacity var(--ig-motion-fast);
    }

    &::-webkit-calendar-picker-indicator:hover {
      opacity: 1;
    }

    &::-webkit-datetime-edit {
      color: var(--ig-color-text-primary);
      font-size: var(--ig-font-size-sm);
    }

    &::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }

    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      color: var(--ig-color-text-primary);
      padding: var(--ig-space-2px);
      border-radius: var(--ig-radius-xs);
    }

    &::-webkit-datetime-edit-month-field:focus,
    &::-webkit-datetime-edit-day-field:focus,
    &::-webkit-datetime-edit-year-field:focus {
      background: var(--ig-color-accent-soft-surface);
      color: var(--ig-color-text-primary);
    }

    &::-webkit-datetime-edit-text {
      color: var(--ig-color-text-muted);
      padding: 0 var(--ig-space-1px);
    }
  }

  &:where(select) {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: calc(var(--ig-space-7) * 2.5);
    border-radius: var(--ig-radius-md);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%2398A2B3' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: calc(100% - var(--ig-space-7)) center;
    background-size: var(--ig-space-4) var(--ig-space-2);
    box-shadow: var(--ig-shadow-control-elevated);
  }
`,fi=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,mw=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid var(--ig-color-accent-strong);
  background: linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%);
  color: var(--ig-color-on-accent);
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(var(--ig-transform-hover-lift-y));
    box-shadow: var(--ig-shadow-hover-lift);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  ${fi}
`,Ph=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-secondary);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent-border-strong);
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  ${fi}
`,hw=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid var(--ig-color-accent);
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-accent-soft-surface-hover);
    color: var(--ig-color-text-primary);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  ${fi}
`,vw=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid color-mix(in srgb, var(--ig-color-alert-danger-border) 90%, transparent);
  background: linear-gradient(135deg, color-mix(in srgb, var(--ig-color-danger) 88%, var(--ig-color-danger-button-gradient-mid)) 0%, var(--ig-color-danger-button-gradient-end) 100%);
  color: var(--ig-color-danger-button-text);
  cursor: pointer;
  transition:
    transform var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast),
    opacity var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    transform: translateY(var(--ig-transform-hover-lift-y));
    box-shadow: var(--ig-shadow-danger-hover-lift);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  ${fi}
`,xw=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid color-mix(in srgb, var(--ig-color-alert-danger-border) 78%, transparent);
  background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 82%, transparent);
  color: var(--ig-color-alert-danger-text);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-alert-danger-border);
    background: color-mix(in srgb, var(--ig-color-alert-danger-bg) 96%, transparent);
    color: var(--ig-color-danger-button-text-strong);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  ${fi}
`,Th=L`
  border-radius: var(--ig-radius-sm);
  border: var(--ig-border-1px) solid transparent;
  background: transparent;
  color: var(--ig-color-text-muted);
  cursor: pointer;
  transition:
    background-color var(--ig-motion-fast),
    border-color var(--ig-motion-fast),
    color var(--ig-motion-fast),
    opacity var(--ig-motion-fast);

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,bw=L`
  ${Th}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,yw=L`
  ${Th}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Rh=L`
  .rdp-root {
    --rdp-nav_button-height: var(--ig-control-height-sm);
    --rdp-nav_button-width: var(--ig-control-height-sm);
    position: relative;
  }

  .rdp-nav {
    position: absolute;
    inset-block-start: 0;
    inset-inline: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--ig-control-height-sm);
    pointer-events: none;
  }

  .rdp-month {
    position: relative;
  }

  .rdp-month_caption {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--ig-control-height-sm);
    margin-inline: var(--ig-control-height-sm);
  }

  .rdp-button_previous,
  .rdp-button_next {
    ${Ph}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--ig-control-height-sm);
    height: var(--ig-control-height-sm);
    padding: 0;
    pointer-events: auto;
  }

  .rdp-root[data-nav-layout='around'] .rdp-button_previous,
  .rdp-root[data-nav-layout='around'] .rdp-button_next {
    position: absolute;
    inset-block-start: 0;
  }

  .rdp-root[data-nav-layout='around'] .rdp-button_previous {
    inset-inline-start: 0;
  }

  .rdp-root[data-nav-layout='around'] .rdp-button_next {
    inset-inline-end: 0;
  }

  .rdp-chevron {
    fill: currentColor;
  }
`,Eh=L`
  .rdp-weekday {
    padding-block: var(--ig-space-2);
    color: var(--ig-color-text-muted);
    font-size: var(--ig-font-size-xs);
    font-weight: var(--ig-font-weight-medium);
  }

  .rdp-day_button {
    border: var(--ig-border-1px) solid transparent;
    background: transparent;
    color: var(--ig-color-text-secondary);
    cursor: pointer;
    transition:
      background-color var(--ig-motion-fast),
      border-color var(--ig-motion-fast),
      color var(--ig-motion-fast),
      opacity var(--ig-motion-fast);
  }

  .rdp-day_button:hover {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }

  .rdp-outside:not(.rdp-selected) .rdp-day_button {
    color: var(--ig-color-text-soft);
    opacity: var(--ig-opacity-dim-soft);
  }

  .rdp-disabled .rdp-day_button {
    color: var(--ig-color-text-soft);
    cursor: default;
    opacity: var(--ig-opacity-dim);
  }

  .rdp-range_middle {
    background: var(--ig-color-accent-soft-surface);
  }

  .rdp-range_middle .rdp-day_button {
    background: var(--ig-color-blue-tint-18);
    color: var(--ig-color-text-primary);
  }

  .rdp-selected:not(.rdp-range_middle) .rdp-day_button {
    border-color: var(--ig-color-accent-strong);
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
    font-weight: var(--ig-font-weight-semibold);
  }

  .rdp-range_start,
  .rdp-range_end {
    background: var(--ig-color-accent-soft-surface);
  }

  .rdp-range_start .rdp-day_button,
  .rdp-range_end .rdp-day_button {
    box-shadow: var(--ig-shadow-focus-ring);
  }

  .rdp-today:not(.rdp-selected) .rdp-day_button {
    color: var(--ig-color-accent-soft);
    font-weight: var(--ig-font-weight-bold);
  }
`,ww=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,$h=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,Lw=L`
  ${$h}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,Sw=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Mh=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,Cw=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,zh=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Iw={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function kw(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var Pw={"--ig-radius-2xs":Et["2xs"],"--ig-radius-xxs":Et.xxs,"--ig-radius-xs":Et.xs,"--ig-radius-sm":Sa.radius.sm,"--ig-radius-md":Sa.radius.md,"--ig-radius-lg":Sa.radius.lg,"--ig-radius-xl":Sa.radius.xl,"--ig-radius-2xl":Et["2xl"],"--ig-radius-4xl":Et["4xl"],"--ig-radius-pill":Sa.radius.pill,"--ig-font-sans":Sa.typography.fontSans,"--ig-font-mono":Sa.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(he.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(he.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(he.svgFillSoft),"--ig-opacity-svg-fill-medium":String(he.svgFillMedium),"--ig-opacity-dim":String(he.dim),"--ig-opacity-dim-soft":String(he.dimSoft),"--ig-opacity-ghost":String(he.ghost),"--ig-opacity-faded":String(he.faded),"--ig-opacity-disabled":String(he.disabled),"--ig-opacity-overlay":String(he.overlay),"--ig-opacity-muted":String(he.muted),"--ig-opacity-subtle":String(he.subtle),"--ig-opacity-emphatic":String(he.emphatic),"--ig-opacity-loud":String(he.loud),"--ig-opacity-loud-plus":String(he.loudPlus),"--ig-opacity-prominent":String(he.prominent),"--ig-opacity-near":String(he.near),"--ig-blur-2xs":Xr.blur2xs,"--ig-blur-xs":Xr.blurXs,"--ig-blur-sm":Xr.blurSm,"--ig-blur-md":Xr.blurMd,"--ig-blur-lg":Xr.blurLg,"--ig-blur-xl":Xr.blurXl,"--ig-icon-xs":Rt.xs,"--ig-icon-sub":Rt.sub,"--ig-icon-2xs":Rt["2xs"],"--ig-icon-sm":Rt.sm,"--ig-icon-sm-plus":Rt.smPlus,"--ig-icon-md":Rt.md,"--ig-icon-lg":Rt.lg,"--ig-icon-xl":Rt.xl,"--ig-icon-2xl":Rt["2xl"],"--ig-icon-3xl":Rt["3xl"],"--ig-svg-stroke-bold":String(nw.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":rl["1px"],"--ig-border-1_5px":rl["1_5px"],"--ig-border-2px":rl["2px"],"--ig-border-3px":rl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Ld.press),"--ig-scale-drag":String(Ld.drag),"--ig-scale-hover-lift":String(Ld.hoverLift),"--ig-aspect-landscape":uw.landscape,"--ig-control-height-xs":Ye.xs,"--ig-control-height-xs-plus":Ye.xsPlus,"--ig-control-height-sm":Ye.sm,"--ig-control-height-sm-plus":Ye.smPlus,"--ig-control-height-md":Ye.md,"--ig-control-height-mid-plus":Ye.midPlus,"--ig-control-height-mid-plus-tall":Ye.midPlusTall,"--ig-control-height-2xl-wide":Ye["2xlWide"],"--ig-control-height-lg":Ye.lg,"--ig-control-height-xl":Ye.xl,"--ig-control-height-2xl":Ye["2xl"],"--ig-control-height-3xl":Ye["3xl"],"--ig-control-height-3xl-plus":Ye["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":$e.fastest,"--ig-motion-swift":$e.swift,"--ig-motion-fast":$e.fast,"--ig-motion-fast-ease":$e.fastEase,"--ig-motion-normal":$e.normal,"--ig-motion-normal-ease":$e.normalEase,"--ig-motion-mobile-nav":$e.mobileNav,"--ig-motion-spinner":$e.spinner,"--ig-motion-spinner-fast":$e.spinnerFast,"--ig-motion-spinner-slow":$e.spinnerSlow,"--ig-motion-progress-bar":$e.progressBar,"--ig-motion-sync-spin":$e.syncSpin,"--ig-motion-shimmer":$e.shimmer,"--ig-motion-skeleton":$e.skeleton};function Id(e="dark"){return{...Pw,...kw(e==="light"?cw:Sa,e==="light"?Ad:zd,e==="light"?Ih:Ch,e==="light")}}var D5=Id("dark");function Sd(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function Tw(){let e=Id("dark"),t=Id("light");return[Sd(":root",Iw),Sd(":root, :root[data-theme='dark']",e),Sd(":root[data-theme='light']",t)].join(`
`)+`
`}var F5=Km`
  ${Tw()}

  html,
  html[data-theme='dark'] {
    color-scheme: dark;
  }

  html[data-theme='light'] {
    color-scheme: light;
  }

  html,
  body,
  #root {
    /* min-height 로 변경 — content 가 viewport 보다 길어도 body 가 따라 늘어남 (배경 잘림 방지). */
    min-height: 100%;
    margin: 0;
    background:
      radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
      radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
      var(--ig-color-bg-canvas);
    color: var(--ig-color-text-primary);
  }

  body {
    font-family: var(--ig-font-sans);
    line-height: var(--ig-line-height-snug);
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: var(--ig-scrollbar-thumb) transparent;
  }

  *::-webkit-scrollbar {
    width: var(--ig-space-4);
    height: var(--ig-space-4);
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    border: var(--ig-border-2px) solid transparent;
    border-radius: var(--ig-radius-pill);
    background: var(--ig-scrollbar-thumb);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: var(--ig-scrollbar-thumb-hover);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-thumb:active {
    background: var(--ig-scrollbar-thumb-active);
    background-clip: padding-box;
  }

  *::-webkit-scrollbar-corner {
    background: transparent;
  }

  button,
  input,
  select,
  textarea {
    font: inherit;
  }

  input:not([type='checkbox']):not([type='radio']),
  select,
  textarea {
    color: var(--ig-color-text-primary);
  }

  select option {
    background: ${zd.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${Ad.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function tr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function il(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var Rw=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${tr(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${tr(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${il(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${il(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function Ew({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Ah.jsx)(Rw,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var $w=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>tr(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function kd({gap:e,align:t,justify:a,as:r,...o}){return(0,Dh.jsx)($w,{as:r,$gap:e,$align:t,$justify:a,...o})}var _5=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>tr(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var N5=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>tr(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${il(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var H5=l.div`
  width: 100%;
  max-width: ${e=>il(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>tr(e.$padding)??"var(--ig-space-11)"};
`;var Mw={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},zw={default:void 0,mono:"var(--ig-font-mono)"},Aw={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},hh={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function Dw(e){return typeof e=="string"?Aw[e]:e??"var(--ig-font-weight-regular)"}function Bw(e){if(e)return e in hh?hh[e]:e}var Fw=l.span`
  margin: 0;
  color: ${e=>Mw[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&zw[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Fh({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,Bh.jsx)(Fw,{as:e,$tone:t,$size:a,$weight:Dw(r),$align:o,$uppercase:i,$letterSpacing:Bw(n),$fontFamily:s,$tabularNums:u,...d})}var W5=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function jw(e){return(0,Oh.jsx)(Fh,{size:"var(--ig-font-size-sm)",...e})}var G5=l.div`
  ${e=>e.$elevation==="raised"?ve:e.$elevation==="card"?Dd:Gt}
  border-radius: ${e=>tr(e.$radius)??"var(--ig-radius-2xl)"};
`;var Y5=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,K5=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,Q5=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??bt.lg}px`};
  height: ${e=>`${e.$size??bt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var Ww={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function _h(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Hh=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${Ww[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?yw:e.$variant==="secondary"?xw:vw:e.$variant==="ghost"?bw:e.$variant==="secondary"?Ph:e.$variant==="accent"?hw:mw}
`,Qr=Nh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let x="Button",y=d??(u&&u!==x?u:void 0);return(0,Uh.jsxs)(Hh,{ref:h,$variant:_h(t,a),$size:r,$tone:o,...p,"data-ig-component":x,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),Qe=qh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,Wh.jsx)(Hh,{ref:d,type:"button",$variant:_h(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),e3=l(Qe).attrs({variant:"secondary",size:"sm"})`
  && {
    border-color: ${e=>e.$active?"var(--ig-color-accent-border-strong)":"transparent"};
    background: ${e=>e.$active?"var(--ig-color-blue-tint-18)":"transparent"};
    color: ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-text-muted)"};
  }

  &&:hover:not(:disabled) {
    border-color: ${e=>e.$active?"var(--ig-color-accent-border-strong)":"var(--ig-color-border-subtle)"};
    background: ${e=>e.$active?"var(--ig-color-accent-soft-surface-hover)":"var(--ig-color-surface-interactive-hover)"};
    color: var(--ig-color-text-primary);
  }
`,Vw={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},Gw={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},Xw=l.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  text-align: left;
  font-family: inherit;
  font-size: ${e=>Vw[e.$size]};
  color: ${e=>Gw[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,sl=(0,Vh.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Gh.jsxs)(Xw,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),r3=l(Qe).attrs({variant:"secondary",size:"sm"})`
  cursor: grab;
  color: var(--ig-color-text-secondary);
  &:hover {
    color: var(--ig-color-text-primary);
  }
  &:active {
    cursor: grabbing;
  }
  svg {
    width: var(--ig-icon-md);
    height: var(--ig-icon-md);
  }
`,o3=l.span`
  display: inline-grid;
  width: var(--ig-icon-sm);
  height: var(--ig-icon-sm);
  grid-template-columns: repeat(2, 1fr);
  gap: var(--ig-space-2px);
  span {
    width: 100%;
    height: 100%;
    border-radius: var(--ig-radius-pill);
    background: currentColor;
    opacity: var(--ig-opacity-subtle);
  }
`;var Yw={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},Yh=l.input`
  ${rr}
  ${e=>Yw[e.$size]}
`,Ca=(0,Bd.forwardRef)(({size:e="md",...t},a)=>(0,Fd.jsx)(Yh,{ref:a,$size:e,...t}));Ca.displayName="TextField";var n3=l.textarea`
  ${rr}
`,Kw=(0,Bd.forwardRef)(({size:e="md",...t},a)=>(0,Fd.jsx)(Yh,{ref:a,$size:e,type:"password",...t}));Kw.displayName="PasswordField";var Qw={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},Zw=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>Qw[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,s3=(0,Kh.forwardRef)(function({variant:t="default",minHeight:a=lw.midPlusTall,...r},o){return(0,Qh.jsx)(Zw,{ref:o,$variant:t,$minHeight:a,...r})}),Jw=l.input.attrs({type:"color"})`
  width: var(--ig-control-height-mid-plus);
  height: var(--ig-control-height-mid-plus);
  padding: var(--ig-space-2px);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-xxs);
  cursor: pointer;
  background: var(--ig-color-surface-raised);
  &:disabled {
    cursor: not-allowed;
    opacity: var(--ig-opacity-subtle);
  }
  &::-webkit-color-swatch-wrapper { padding: 0; }
  &::-webkit-color-swatch { border: none; border-radius: var(--ig-radius-2xs); }
`,d3=(0,Zh.forwardRef)(function(t,a){return(0,Jh.jsx)(Jw,{ref:a,...t})}),e2={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},t2=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>e2[e.$orientation]}
  &::after {
    content: '';
    position: absolute;
    background: transparent;
    transition: background var(--ig-motion-fast);
  }
  &:hover::after,
  &:active::after {
    background: var(--ig-color-white-12);
  }
`,f3=(0,ev.forwardRef)(function({orientation:t="vertical",...a},r){return(0,tv.jsx)(t2,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),a2={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},r2=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$disabled?"var(--ig-color-text-soft)":"var(--ig-color-text-muted)"};
  cursor: ${e=>e.$disabled?"not-allowed":"inherit"};
  opacity: ${e=>e.$disabled?"var(--ig-opacity-muted)":1};
  transition:
    border-color var(--ig-motion-fast),
    background var(--ig-motion-fast),
    color var(--ig-motion-fast);
  ${e=>a2[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${ll.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,g3=(0,av.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,rv.jsx)(r2,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),v3=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var x3=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,b3=l.input`
  ${rr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,y3=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,w3=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ig-icon-xl);
  height: var(--ig-icon-xl);
  border: none;
  border-radius: var(--ig-radius-xs);
  background: transparent;
  color: var(--ig-color-text-soft);
  cursor: pointer;
  &:hover { color: var(--ig-color-text-primary); }
`;var S3=l.div`
  position: relative;
`,C3=l.button`
  ${rr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  text-align: left;
  cursor: pointer;
  padding-right: var(--ig-space-6);
  border-radius: var(--ig-radius-md);

  ${e=>e.$open&&L`
      border-color: var(--ig-color-accent-ring);
      box-shadow: var(--ig-color-dropdown-open-shadow);
      background: var(--ig-color-surface-focus);
    `}
`,I3=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,k3=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Cd.half})`:`rotate(${Cd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,P3=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,T3=l.button`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: none;
  border-radius: var(--ig-radius-sm);
  white-space: nowrap;
  background: ${e=>e.$highlighted?"var(--ig-color-dropdown-option-hover)":e.$active?"var(--ig-color-surface-active)":"transparent"};
  color: ${e=>e.$active||e.$highlighted?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: left;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: var(--ig-color-dropdown-option-hover);
    color: var(--ig-color-text-primary);
  }

  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,R3=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,E3=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,$3=l.select`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  white-space: nowrap;
`;var z3=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,A3=l.input`
  ${rr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,D3=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,B3=l.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--ig-color-text-soft);
  cursor: pointer;
  font-size: var(--ig-font-size-3xs);
  line-height: var(--ig-line-height-none);
  padding: 0;
  &:hover { background: var(--ig-color-surface-interactive); color: var(--ig-color-text-primary); }
  &:first-child { border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle); }
  &:disabled { opacity: var(--ig-opacity-overlay); cursor: default; }
`;var O3=l.div`
  position: relative;
  width: 100%;
`,j3=l.textarea`
  ${rr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,_3=l.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  max-height: var(--ig-popup-2xs-plus);
  overflow-y: auto;
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-menu);
  z-index: var(--ig-z-dropdown);
`,N3=l.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: none;
  background: ${e=>e.$active?"var(--ig-color-surface-interactive)":"transparent"};
  color: var(--ig-color-text-primary);
  text-align: left;
  cursor: pointer;
  &:hover { background: var(--ig-color-surface-interactive); }
`,H3=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,U3=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var Od=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,f2=l.span`
  width: var(--ig-control-height-mid-plus);
  height: var(--ig-icon-3xl);
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$checked?"var(--ig-color-toggle-on-bg)":"var(--ig-color-toggle-off-bg)"};
  border: var(--ig-border-1px) solid ${e=>e.$checked?"var(--ig-color-toggle-on-border)":"var(--ig-color-toggle-off-border)"};
  position: relative;
  transition: background-color var(--ig-motion-fast);

  input:focus-visible + & {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
  }

  &::after {
    content: '';
    position: absolute;
    top: var(--ig-space-2px);
    left: ${e=>e.$checked?"var(--ig-space-8)":"var(--ig-space-2px)"};
    width: var(--ig-icon-lg);
    height: var(--ig-icon-lg);
    border-radius: var(--ig-radius-pill);
    background: var(--ig-color-on-accent);
    transition: left var(--ig-motion-fast);
  }
`,jd=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,p2=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ig-icon-lg);
  height: var(--ig-icon-lg);
  border-radius: var(--ig-radius-2xs);
  border: var(--ig-border-1_5px) solid ${e=>e.$checked?"var(--ig-color-accent)":"var(--ig-color-border-strong)"};
  background: ${e=>e.$checked?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast), border-color var(--ig-motion-fast);
  flex-shrink: 0;
  opacity: ${e=>e.$disabled?"var(--ig-opacity-disabled)":1};

  input:focus-visible + & {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
  }

  svg {
    width: var(--ig-icon-xs);
    height: var(--ig-icon-xs);
    stroke: var(--ig-color-on-accent);
    stroke-width: var(--ig-svg-stroke-bold);
    fill: none;
    opacity: ${e=>e.$checked?1:0};
    transition: opacity var(--ig-motion-fast);
  }
`,g2=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--ig-icon-lg);
  height: var(--ig-icon-lg);
  border-radius: var(--ig-radius-pill);
  border: var(--ig-border-1_5px) solid ${e=>e.$checked?"var(--ig-color-accent)":"var(--ig-color-border-strong)"};
  background: transparent;
  transition: border-color var(--ig-motion-fast);
  flex-shrink: 0;
  opacity: ${e=>e.$disabled?"var(--ig-opacity-disabled)":1};

  input:focus-visible + & {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
  }

  &::after {
    content: '';
    width: var(--ig-space-3);
    height: var(--ig-space-3);
    border-radius: var(--ig-radius-pill);
    background: var(--ig-color-accent);
    opacity: ${e=>e.$checked?1:0};
    transition: opacity var(--ig-motion-fast);
  }
`,W3=Za.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),x=Za.default.useRef(null);Za.default.useImperativeHandle(d,()=>x.current),Za.default.useEffect(()=>{x.current&&(x.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,Me.jsxs)(Od,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,Me.jsx)(jd,{ref:x,type:"checkbox",checked:a,disabled:r,...u}),(0,Me.jsx)(p2,{$checked:!!y,$disabled:r,children:o?(0,Me.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Me.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Me.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Me.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),V3=Za.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,Me.jsxs)(Od,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,Me.jsx)(jd,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Me.jsx)(g2,{$checked:!!a,$disabled:r}),t]})}),G3=Za.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Me.jsxs)(Od,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Me.jsx)(jd,{ref:s,type:"checkbox",checked:t,...n}),(0,Me.jsx)(f2,{$checked:t}),a]})});var Y3=l.input`
  display: none;
`,x2={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},K3={...x2,cursor:"pointer"};var Z3=l.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: ${e=>e.$size==="sm"?"var(--ig-space-1) var(--ig-space-3)":"var(--ig-space-2) var(--ig-space-4)"};
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-muted);
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-2xs)":"var(--ig-font-size-xs)"};
  cursor: pointer;
  transition: color var(--ig-motion-fast), border-color var(--ig-motion-fast);
  &:hover { color: var(--ig-color-text-primary); border-color: var(--ig-color-border-strong); }
`;var eP=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,tP=l.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: ${e=>e.$size==="sm"?"var(--ig-space-1) var(--ig-space-3)":"var(--ig-space-2) var(--ig-space-4)"};
  border: none;
  background: ${e=>e.$active?"var(--ig-color-accent-soft-surface)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-text-muted)"};
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-2xs)":"var(--ig-font-size-xs)"};
  font-weight: ${e=>e.$active?"var(--ig-font-weight-semibold)":"var(--ig-font-weight-regular)"};
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--ig-motion-fast), color var(--ig-motion-fast);
  &:hover:not(:disabled) {
    background: ${e=>e.$active?"var(--ig-color-accent-soft-surface-hover)":"var(--ig-color-surface-interactive)"};
  }
`;var rP=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${ze.sm} {
    grid-template-columns: 1fr;
  }
`,oP=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,iP=l.div`
  min-width: 0;
`,nP=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var lP=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,sP=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var dP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,cP=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var y2={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},w2=l.div`
  ${ve}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>y2[e.$variant]}
`,gP=(0,mv.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,hv.jsx)(w2,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var mP={minWidth:di.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},hP=l.button`
  display: inline-flex;
  align-items: center;
  gap: ${e=>e.$iconOnly?"0":"var(--ig-space-2)"};
  height: var(--ig-control-height-sm);
  width: ${e=>e.$iconOnly?"var(--ig-control-height-sm)":"auto"};
  padding: ${e=>e.$iconOnly?"0":"0 var(--ig-space-4)"};
  justify-content: center;
  border-radius: var(--ig-radius-xs);
  border: var(--ig-border-1px) solid ${e=>e.$active?"var(--ig-color-accent-border-strong)":"var(--ig-color-border-subtle)"};
  background: ${e=>e.$active?"var(--ig-color-focus-bg-soft)":"var(--ig-color-surface-interactive)"};
  color: ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-text-secondary)"};
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
  cursor: pointer;
  transition: background var(--ig-motion-fast), border-color var(--ig-motion-fast), color var(--ig-motion-fast);
  &:hover:not(:disabled) {
    background: ${e=>e.$active?"var(--ig-color-accent-soft-surface-hover)":"var(--ig-color-surface-interactive-hover)"};
  }
`;var xP=l.button`
  padding: var(--ig-space-2) var(--ig-space-5);
  font-size: var(--ig-font-size-sm);
  border-radius: var(--ig-radius-pill);
  border: var(--ig-border-1px) solid ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-border-strong)"};
  background: ${e=>e.$active?"var(--ig-color-accent-soft-surface-hover)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)"};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  transition: border-color var(--ig-motion-fast), color var(--ig-motion-fast), background var(--ig-motion-fast);
  &:hover {
    border-color: var(--ig-color-accent);
    color: var(--ig-color-text-primary);
  }
`;var vh={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},xv=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>vh[e.$size??"sm"]};
  height: ${e=>vh[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,wP=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-2xs);
  background: ${e=>e.$checked?"var(--ig-color-accent-soft-surface)":"transparent"};
  cursor: pointer;
  user-select: none;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var SP=l.button`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-xs);
  border: none;
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  background: ${e=>e.$active?"var(--ig-color-active-bg)":"var(--ig-color-white-08)"};
  color: ${e=>e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  transition: background var(--ig-motion-fast);
  &:hover {
    color: var(--ig-color-text-primary);
  }
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`;var C2={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},I2={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},k2=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":I2[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>C2[e.$size]}
  &:hover:not(:disabled),
  &[data-active='true']:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
  }
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,kP=(0,yv.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,wv.jsxs)(k2,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var PP=l.button`
  width: 100%;
  background: var(--ig-color-white-06);
  border: var(--ig-border-1px) solid var(--ig-color-white-10);
  border-radius: var(--ig-radius-xs);
  padding: var(--ig-space-3) var(--ig-space-6);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover { background: var(--ig-color-surface-interactive-hover); }
  ${e=>e.$loading&&"opacity: var(--ig-opacity-subtle);"}
`,TP=l.div`
  position: absolute;
  top: calc(100% + var(--ig-space-2));
  left: 0;
  right: 0;
  background: linear-gradient(180deg, var(--ig-color-surface-dropdown-mobile-top) 0%, var(--ig-color-surface-dropdown-mobile-bottom) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-slate-tint-18);
  border-radius: var(--ig-radius-xl);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  z-index: var(--ig-z-mobile-menu);
  overflow: hidden;
  max-height: 55vh;
  overflow-y: auto;
  min-height: 0;
  > button:not(:last-child) {
    border-bottom: var(--ig-border-1px) solid var(--ig-color-white-06);
  }
`;var P2={bottom:L`
    flex-direction: row;
    border-radius: 0 0 var(--ig-radius-md) var(--ig-radius-md);
  `,top:L`
    flex-direction: row;
    border-radius: var(--ig-radius-md) var(--ig-radius-md) 0 0;
  `,left:L`
    flex-direction: column;
    border-radius: var(--ig-radius-md) 0 0 var(--ig-radius-md);
  `,right:L`
    flex-direction: column;
    border-radius: 0 var(--ig-radius-md) var(--ig-radius-md) 0;
  `},EP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>P2[e.$placement]}
`,$P=l.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-1);
  ${e=>e.$placement==="bottom"||e.$placement==="top"?L`
          margin-left: auto;
          flex-direction: row;
        `:L`
          margin-top: auto;
          flex-direction: column;
        `}
`,T2={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},MP=l.button`
  flex-shrink: 0;
  ${e=>T2[e.$size]}
  border: none;
  border-radius: var(--ig-radius-xxs);
  background: ${e=>e.$active?"var(--ig-color-white-12)":"transparent"};
  color: ${e=>e.$danger?"var(--ig-color-alert-danger-text)":"var(--ig-color-text-primary)"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--ig-motion-fast), color var(--ig-motion-fast);
  &:hover:not(:disabled) {
    background: ${e=>e.$danger?"var(--ig-color-danger-soft-surface)":"var(--ig-color-white-08)"};
    color: ${e=>e.$danger?"var(--ig-color-status-failed-text)":"var(--ig-color-text-primary)"};
  }
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
  svg {
    width: var(--ig-icon-lg);
    height: var(--ig-icon-lg);
  }
`,zP=l.span`
  flex-shrink: 0;
  background: var(--ig-color-white-12);
  ${e=>e.$placement==="bottom"||e.$placement==="top"?L`
          width: var(--ig-space-1px);
          height: var(--ig-icon-2xl);
          margin: 0 var(--ig-space-2px);
        `:L`
          width: var(--ig-icon-2xl);
          height: var(--ig-space-1px);
          margin: var(--ig-space-2px) 0;
        `}
`;var DP=l.button`
  ${rr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,BP=l.span`
  color: var(--ig-color-text-soft);
`,FP=l.div`
  ${Rh}
  z-index: calc(var(--ig-z-modal) + 10);
  border-radius: var(--ig-radius-lg);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  padding: var(--ig-space-4);

  .rdp-root {
    --rdp-accent-color: var(--ig-color-accent);
    --rdp-accent-background-color: var(--ig-color-accent-soft-surface);
    --rdp-day_button-height: var(--ig-control-height-sm);
    --rdp-day_button-width: var(--ig-control-height-sm);
    font-family: var(--ig-font-sans);
    font-size: var(--ig-font-size-sm);
    color: var(--ig-color-text-primary);
  }

  .rdp-month_caption {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--ig-space-2) 0 var(--ig-space-3);
    font-weight: var(--ig-font-weight-semibold);
    font-size: var(--ig-font-size-sm);
  }

  .rdp-day {
    border-radius: var(--ig-radius-sm);
  }

  .rdp-day_button {
    border-radius: var(--ig-radius-sm);
    font-size: var(--ig-font-size-sm);
    width: var(--rdp-day_button-width);
    height: var(--rdp-day_button-height);
  }

  ${Eh}
`;var E2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,_P=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,$2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Pv=(0,Iv.forwardRef)(({anchor:e,style:t,...a},r)=>(0,kv.jsx)($2,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Pv.displayName="MenuPopover";var NP=l.div`
  ${ve}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,HP=l(E2)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,qP=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,WP=l.span`
  ${({$tone:e,tone:t})=>{let a=dw[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,VP=l(Pv)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var GP=l.div`
  ${Rh}
  padding: var(--ig-space-5);
  border-radius: var(--ig-radius-xl);
  background: linear-gradient(180deg, var(--ig-color-surface-calendar-top) 0%, var(--ig-color-surface-calendar-bottom) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-white-06);
  .rdp-root {
    --rdp-accent-color: var(--ig-color-accent);
    --rdp-accent-background-color: var(--ig-color-focus-bg-soft);
    margin: 0;
    color: var(--ig-color-text-primary);
  }
  .rdp-months { justify-content: center; }
  .rdp-month { width: 100%; }
  .rdp-caption_label {
    font-size: var(--ig-font-size-md);
    font-weight: var(--ig-font-weight-bold);
    color: var(--ig-color-text-primary);
  }
  .rdp-day { width: var(--ig-control-height-sm); height: var(--ig-control-height-sm); border-radius: var(--ig-radius-sm); font-size: var(--ig-font-size-sm); color: var(--ig-color-text-secondary); }
  .rdp-day_button { width: 100%; height: 100%; border-radius: var(--ig-radius-sm); }

  ${Eh}
`;var YP=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,KP=l.button`
  width: ${e=>e.$orientation==="horizontal"?"auto":"100%"};
  ${e=>e.$orientation==="horizontal"?"flex: 1;":""}
  padding: var(--ig-space-3) var(--ig-space-5);
  text-align: ${e=>e.$orientation==="horizontal"?"center":"left"};
  border-radius: var(--ig-radius-md);
  border: var(--ig-border-1px) solid
    ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-border-subtle)"};
  background: ${e=>e.$active?"var(--ig-color-accent-soft-surface)":"var(--ig-color-surface-muted)"};
  color: ${e=>e.$active?"var(--ig-color-accent)":"var(--ig-color-text-primary)"};
  font-size: var(--ig-font-size-sm);
  font-weight: ${e=>e.$active?"var(--ig-font-weight-semibold)":"var(--ig-font-weight-regular)"};
  font-family: inherit;
  cursor: pointer;
  transition:
    border-color var(--ig-motion-fast),
    background-color var(--ig-motion-fast),
    color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent);
  }

  &:disabled {
    opacity: var(--ig-opacity-faded);
    cursor: not-allowed;
  }
`;var z2={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},pi=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>z2[e.$tone??"neutral"]};
`,JP=l(pi)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,tT=l.p`
  ${Mh}
  ${zh}
  margin: 0;
`,rT=l.div`
  width: ${e=>`${e.$size}px`};
  height: ${e=>`${e.$size}px`};
  border-radius: var(--ig-radius-pill);
  overflow: hidden;
  background: var(--ig-color-avatar-bg);
  color: var(--ig-color-accent-soft);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--ig-font-weight-bold);
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;var D2=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,B2=l.span`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(42%, -42%);
  min-width: var(--ig-icon-lg);
  height: var(--ig-icon-lg);
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$tone==="accent"?"var(--ig-color-accent)":"var(--ig-color-danger)"};
  color: var(--ig-color-text-primary);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  line-height: var(--ig-line-height-none);
  white-space: nowrap;
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-bg-canvas);
  pointer-events: none;
`;function Rv({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,cl.jsxs)(D2,{className:o,style:i,children:[e,!a&&t!=null?(0,cl.jsx)(B2,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var Pd=20,Ev=120,O2=Ev*Math.PI/180,j2=Pd/Math.sin(O2),_2=Tt`
  from { background-position: 0 0; }
  to   { background-position: ${j2.toFixed(3)}px 0; }
`,N2=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${Ev}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${Pd/2}px,
      var(--ig-color-white-06) ${Pd}px
    );
    animation: ${_2} var(--ig-motion-shimmer) linear infinite;
  }
`,H2=Tt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,U2={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},nT=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,lT=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>U2[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${H2} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&N2}
`;var uT={display:"flex",width:"100%",height:bt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},dT=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var q2=L`
  background:
    linear-gradient(
      ${ll.horizontal},
      var(--ig-color-skeleton-start) 0%,
      var(--ig-color-skeleton-mid) 50%,
      var(--ig-color-skeleton-start) 100%
    )
    0 0 / 200% 100%;
  animation: skeletonShift var(--ig-motion-skeleton) linear infinite;

  @keyframes skeletonShift {
    to {
      background-position: -200% 0;
    }
  }
`,fT=l.div.attrs({"aria-hidden":!0})`
  ${q2}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,W2=l.div`
  ${({$tone:e="info"})=>L`
    background: ${Yr[e].background};
    border-color: ${Yr[e].border};
    color: ${Yr[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,gT=l(W2)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,G2=Tt`
  to { transform: rotate(${Cd.full}); }
`,hT={sm:bt.sm,md:bt.lg,lg:bt["3xl"]};var vT=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${G2} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var X2=Tt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,Y2=Tt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,bT=l.div`
  ${({$tone:e})=>L`
    background: ${Yr[e].background};
    border-color: ${Yr[e].border};
    color: ${Yr[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?Y2:X2} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,yT=l.span`
  flex: 1;
`,wT=l.button`
  flex-shrink: 0;
  background: transparent;
  border: var(--ig-border-1px) solid currentColor;
  border-radius: var(--ig-radius-sm);
  color: inherit;
  font: inherit;
  padding: var(--ig-space-2px) var(--ig-space-3);
  cursor: pointer;
  opacity: var(--ig-opacity-loud);
  &:hover { opacity: 1; }
`,LT=l.button`
  flex-shrink: 0;
  background: transparent;
  border: none;
  color: inherit;
  font-size: var(--ig-font-size-xl);
  line-height: var(--ig-line-height-none);
  padding: 0 var(--ig-space-2px);
  cursor: pointer;
  opacity: var(--ig-opacity-overlay);
  &:hover { opacity: 1; }
`,ST=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,CT=(0,or.createContext)(()=>{});var kT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,PT=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,K2=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,TT=l(K2)``,RT=l.div`
  flex: 1;
`,ET=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var MT=l.div`
  ${zh}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,zT=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,AT=l.div`
  ${Mh}
`,DT=l.div`
  ${Cw}
  max-width: var(--ig-popup-md);
`,BT=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var OT=l.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  @supports (height: 100dvh) {
    min-height: 100dvh;
  }
  gap: var(--ig-space-4);
  padding: var(--ig-space-8);
  color: var(--ig-color-text-muted);
`,jT=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,_T=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,NT=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var UT=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,qT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,WT=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,VT=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var XT=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>e.$size==="sm"?"var(--ig-icon-xl)":"var(--ig-icon-2xl)"};
  height: ${e=>e.$size==="sm"?"var(--ig-icon-xl)":"var(--ig-icon-2xl)"};
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-image-group-circle-bg);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  line-height: var(--ig-line-height-none);
  font-variant-numeric: tabular-nums;
  border: var(--ig-border-1px) solid var(--ig-color-image-group-circle-border);
`;var J2={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},eL=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>J2[e.$variant]}
`,KT=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,tL=Tt`from { opacity: 0 } to { opacity: 1 }`,QT=l(eL)`
  animation: ${tL} var(--ig-motion-fast);
`;var JT=l.div`
  ${ve}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var ol=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-1);
  height: var(--ig-icon-xl);
  padding: 0 var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-3xs);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-normal);
  white-space: nowrap;
  overflow: hidden;
  background: ${e=>e.$bg};
  color: ${e=>e.$color};
  transition:
    max-width var(--ig-motion-fast),
    padding var(--ig-motion-fast),
    border-radius var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: var(--ig-icon-xl);
          min-width: var(--ig-icon-xl);
          padding: 0;

          &:hover,
          &:focus-visible,
          :where([data-state-chip-hover-scope='true']:hover) &,
          :where([data-state-chip-hover-scope='true']:focus-within) & {
            max-width: var(--ig-popup-2xs-narrow);
            padding: 0 var(--ig-space-3);
          }
        `:L`
          max-width: var(--ig-popup-2xs-narrow);
        `}
`,t4=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,a4=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${ol}:hover &,
          ${ol}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${ol} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${ol} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var rL={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},o4=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>rL[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,_v=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,n4=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:_v}
`,l4=l.div`
  position: absolute;
  left: ${e=>`${e.$left}px`};
  width: ${e=>`${e.$width}px`};
  ${({$variant:e})=>e==="underline"?L`
          bottom: var(--ig-space-neg-1px);
          height: var(--ig-space-2px);
          border-radius: var(--ig-radius-pill);
          background: var(--ig-color-accent-soft);
        `:L`
          top: var(--ig-space-1);
          height: calc(100% - calc(var(--ig-space-1) * 2));
          border-radius: var(--ig-radius-sm);
          background: var(--ig-color-tab-highlight);
        `}
  opacity: ${e=>e.$visible?1:0};
  pointer-events: none;
  transition: left var(--ig-motion-normal), width var(--ig-motion-normal), opacity var(--ig-motion-fast);
`,s4=l.button`
  position: relative;
  z-index: var(--ig-z-base);
  border: 0;
  border-radius: ${e=>e.$variant==="underline"?"0":"var(--ig-radius-sm)"};
  background: transparent;
  padding: ${e=>e.$variant==="underline"?"var(--ig-space-4) var(--ig-space-9)":"var(--ig-space-4) var(--ig-space-6)"};
  color: ${e=>e.$variant==="underline"?e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)":e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  cursor: pointer;
  font-weight: ${e=>e.$variant==="underline"?e.$active?"var(--ig-font-weight-semibold)":"var(--ig-font-weight-medium)":"var(--ig-font-weight-semibold)"};
  transition: color var(--ig-motion-fast);

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }
`;var u4=l.div`
  ${_v}
`,Nv={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},c4=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Nv[e.$radius].root};
`,f4=l.div`
  position: absolute;
  left: var(--ig-space-2);
  right: var(--ig-space-2);
  top: ${e=>`${e.$top}px`};
  height: ${e=>`${e.$height}px`};
  border-left: var(--ig-border-3px) solid var(--ig-color-accent-soft);
  border-radius: var(--ig-radius-2xs);
  background: var(--ig-color-tab-highlight);
  opacity: ${e=>e.$visible?1:0};
  pointer-events: none;
  transition:
    top var(--ig-motion-normal),
    height var(--ig-motion-normal),
    opacity var(--ig-motion-fast);
`,p4=l.button`
  position: relative;
  z-index: var(--ig-z-base);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  width: 100%;
  min-height: var(--ig-control-height-lg);
  padding: var(--ig-space-4) var(--ig-space-4) var(--ig-space-4) var(--ig-space-5);
  border: 0;
  border-radius: ${e=>Nv[e.$radius].item};
  background: transparent;
  color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)"};
  font-size: var(--ig-font-size-sm);
  font-weight: ${e=>e.$active?"var(--ig-font-weight-semibold)":"var(--ig-font-weight-medium)"};
  text-align: left;
  cursor: pointer;
  transition:
    color var(--ig-motion-fast),
    background-color var(--ig-motion-fast);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-primary)"};
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,g4=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,m4=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,h4=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: var(--ig-icon-lg);
  height: var(--ig-icon-lg);
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-badge-accent);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  line-height: var(--ig-line-height-none);
`;var x4=l.header`
  display: none;
  ${ze.md} {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--ig-control-height-2xl);
    z-index: var(--ig-z-dropdown);
    align-items: center;
    gap: var(--ig-space-3);
    padding: 0 var(--ig-space-4);
    background: var(--ig-color-surface-header);
    border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    backdrop-filter: var(--ig-blur-lg);
  }
`;var b4=l.div`
  display: none;
  ${ze.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,y4=l.aside`
  display: none;
  ${ze.md} {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0 0 auto 0;
    max-height: 85vh;
    overflow-y: auto;
    background: var(--ig-color-surface-header);
    border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    box-shadow: var(--ig-shadow-drawer-lift);
    z-index: var(--ig-z-mobile-nav);
    transform: translateY(${e=>e.$open?"0":"-105%"});
    /* Material standard ease — slow tier 의 360ms ease 보다 specific 한 곡선 의도 */
    transition: transform var(--ig-motion-mobile-nav);
    padding-bottom: env(safe-area-inset-bottom, var(--ig-space-0));
    border-radius: 0 0 var(--ig-radius-xl) var(--ig-radius-xl);
  }
`;var w4=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: var(--ig-color-text-primary);
  span {
    font-size: var(--ig-font-size-md);
    font-weight: var(--ig-font-weight-bold);
    max-width: var(--ig-popup-xs);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;var L4=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  height: var(--ig-control-height-2xl);
  width: 100%;
  padding: 0 var(--ig-space-4);
  border-radius: var(--ig-radius-lg);
  border: none;
  background: ${e=>e.$active?"var(--ig-color-focus-bg-soft)":"none"};
  color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)"};
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-medium);
  text-align: left;
  cursor: pointer;
  transition: background var(--ig-motion-fast), color var(--ig-motion-fast);
  &:hover {
    color: var(--ig-color-text-primary);
    background: var(--ig-color-white-07);
  }
  svg { width: var(--ig-icon-2xl); height: var(--ig-icon-2xl); flex-shrink: 0; }
`;var S4={marginLeft:"auto",minWidth:bt.xl,height:bt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var I4=l.div`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--ig-control-height-3xl);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 var(--ig-space-3);
  padding-bottom: env(safe-area-inset-bottom, var(--ig-space-0));
  background: var(--ig-color-surface-header);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
  z-index: var(--ig-z-sticky);
`,k4=l.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3px);
  min-width: var(--ig-control-height-xl);
  height: var(--ig-control-height-xl);
  padding: 0 var(--ig-space-2);
  border: none;
  background: none;
  color: ${e=>e.$active?"var(--ig-color-accent-soft)":"var(--ig-color-text-muted)"};
  cursor: pointer;
  border-radius: var(--ig-radius-xs);
  -webkit-tap-highlight-color: transparent;
  transition: color var(--ig-motion-fast), background var(--ig-motion-fast);
  &:hover:not(:disabled) { color: var(--ig-color-text-primary); background: var(--ig-color-white-07); }
  &:disabled { opacity: var(--ig-opacity-faded); cursor: not-allowed; }
  svg { width: var(--ig-icon-xl); height: var(--ig-icon-xl); flex-shrink: 0; }
  span { font-size: var(--ig-font-size-3xs); line-height: var(--ig-line-height-none); white-space: nowrap; }
`;var sL=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Xv=l.div`
  ${ve}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,T4=l(Xv)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,uL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,dL=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,cL=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,R4=l.aside`
  ${ve}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,fL=l(Qe)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function pL({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,Td.jsx)(fL,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,Td.jsx)(Xe,{size:bt.md})})}var gL='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',mL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,hL={margin:0,lineHeight:"var(--ig-line-height-loose)"};function vL({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,ar.useId)(),u=(0,ar.useRef)(null);return(0,ar.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,ar.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let x=Array.from(h.querySelectorAll(gL)).filter(w=>w.offsetParent!==null);if(x.length===0){p.preventDefault(),h.focus();return}let y=x[0],b=x[x.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,ke.jsx)(sL,{onClick:()=>o?.(),children:(0,ke.jsxs)(Xv,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,ke.jsxs)(uL,{children:[(0,ke.jsx)(dL,{id:s,children:e}),o?(0,ke.jsx)(pL,{onClick:()=>o()}):null]}),(0,ke.jsxs)(mL,{children:[t?(0,ke.jsx)(jw,{as:"p",tone:"muted",style:hL,children:t}):null,a,r?(0,ke.jsx)(cL,{children:r}):null]})]})})}function xL({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,ke.jsx)(vL,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(Qr,{type:"button",variant:"secondary",onClick:i,children:r}),(0,ke.jsx)(Qr,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var A4=l.div`
  width: ${e=>e.$width};
  max-width: calc(100vw - var(--ig-space-13));
  ${e=>e.$height?`height: ${e.$height};`:`max-height: ${e.$maxHeight};`}
  background-color: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-lg);
  display: flex;
  flex-direction: column;
  box-shadow: var(--ig-shadow-floating);
  overflow: hidden;
`,D4=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,B4=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,F4=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,O4=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var _4=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,N4=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,H4=l.div`
  position: relative;
  display: block;
  width: 100%;
`,U4=l.button`
  display: block;
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-6);
  border: none;
  background: none;
  color: ${e=>e.$danger?"var(--ig-color-danger)":"var(--ig-color-text-primary)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,q4=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,W4=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  padding: var(--ig-space-2) var(--ig-space-6);
  border: none;
  background: none;
  color: ${e=>e.$color??"var(--ig-color-text-primary)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`;var V4={minWidth:di.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var X4=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var K4=l.div`
  ${ve}
  position: fixed;
  z-index: var(--ig-z-tooltip);
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
  min-width: var(--ig-popup-xs);
  line-height: var(--ig-line-height-snug);
  white-space: normal;
  box-shadow: var(--ig-shadow-popover);
  pointer-events: none;
`,Q4=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var Z4={display:"inline-flex",alignItems:"center",justifyContent:"center",width:bt.md,height:bt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var SL=l.div`
  ${ve}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,CL=(0,Jv.forwardRef)(({anchor:e,width:t=di.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,ex.jsx)(SL,{ref:o,$width:t,style:{...i,...a},...r})});CL.displayName="FilterPopover";var tR=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,aR=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,rR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var oR={minWidth:di.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var rx=(0,Ke.createContext)(null);function pl(){let e=(0,Ke.useContext)(rx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function ox({children:e}){let[t,a]=(0,Ke.useState)(null),r=(0,Ke.useRef)(null);r.current=t;let o=(0,Ke.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,Ke.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,Ke.useMemo)(()=>o,[o]);return(0,fl.jsxs)(rx.Provider,{value:n,children:[e,t?(0,fl.jsx)(xL,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var nR=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,lR=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,TL=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,RL=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,sR=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,uR=l(TL)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,dR=l(RL)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,cR=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,fR=l.button.attrs({type:"button","aria-label":"Reorder row"})`
  cursor: grab;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--ig-control-height-xs);
  height: var(--ig-control-height-xs);
  border: none;
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  user-select: none;
  &:hover {
    background: var(--ig-color-white-08);
    color: var(--ig-color-text-primary);
  }
`,EL=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,$L=L`
  transition: transform var(--ig-motion-normal);
`,pR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&EL}
  ${e=>e.$isAnimating&&$L}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,gR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var hR=l.section`
  ${Gt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,vR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,ML=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,bR=nx.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,lx.jsx)(ML,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),zL=l.div`
  ${Gt}
  position: relative;
  border-radius: var(--ig-radius-2xl);
  overflow: hidden;
  cursor: pointer;
  border: var(--ig-border-1px) solid
    ${e=>e.$selected?"var(--ig-color-accent-border-strong)":"var(--ig-color-border-subtle)"};
  box-shadow: ${e=>e.$selected?"0 0 0 var(--ig-space-2px) var(--ig-color-blue-tint-18), var(--ig-shadow-panel)":"var(--ig-shadow-panel)"};
  transition: transform var(--ig-motion-fast), border-color var(--ig-motion-fast),
    box-shadow var(--ig-motion-fast), background-color var(--ig-motion-fast);

  &:hover {
    transform: translateY(var(--ig-transform-hover-lift-y));
    border-color: var(--ig-color-blue-tint-28);
  }
`,wR=sx.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,ux.jsx)(zL,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),SR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var IR=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var AL={panel:Gt,card:Dd,raised:ve},DL=l.div`
  ${e=>AL[e.$elevation]}
  border-radius: ${e=>e.$radius};
  padding: ${e=>e.$padding};
  overflow: ${e=>e.$overflow};
  min-width: 0;
  ${e=>e.$border==="strong"&&L`
    border-color: var(--ig-color-border-strong);
  `}
  ${e=>e.$tone==="danger"&&L`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
  ${e=>e.$flat&&L`
    box-shadow: none;
  `}
`;function px({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,fx.jsx)(DL,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var BL=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,FL=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,OL=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,jL=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,_L=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,NL=l.textarea`
  width: 100%;
  min-height: var(--ig-control-height-2xl-wide);
  resize: vertical;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,HL=l.div`
  display: flex;
  justify-content: flex-end;
`,UL=l.button`
  padding: var(--ig-space-2) var(--ig-space-5);
  border: none;
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  cursor: pointer;
  &:disabled { opacity: var(--ig-opacity-faded); cursor: default; }
  &:hover:not(:disabled) { opacity: var(--ig-opacity-loud); }
`;function gx({author:e,timestamp:t,body:a,actions:r}){return(0,yt.jsxs)(BL,{children:[(0,yt.jsxs)(FL,{children:[(0,yt.jsx)(OL,{children:e}),t&&(0,yt.jsx)("span",{children:t}),r]}),(0,yt.jsx)(jL,{children:a})]})}function gl({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,yt.jsxs)(_L,{children:[(0,yt.jsx)(NL,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,yt.jsx)(HL,{children:(0,yt.jsx)(UL,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var qL=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  padding: var(--ig-space-2) var(--ig-space-3);
  border: none;
  border-radius: var(--ig-radius-xs);
  background: ${e=>e.$active?"var(--ig-color-surface-interactive)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-text-primary)":"var(--ig-color-text-muted)"};
  font-size: var(--ig-font-size-sm);
  text-align: left;
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`,WL=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,VL=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,GL=(0,mx.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,Kr.jsxs)(qL,{ref:n,type:o??"button",$active:a,...i,children:[(0,Kr.jsx)(xv,{$color:e,$size:"sm"}),(0,Kr.jsx)(WL,{children:t}),r!=null&&(0,Kr.jsx)(VL,{children:r})]}));GL.displayName="TagListItem";var ER=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var MR=l.div`
  position: relative;
  width: 100%;
`,zR=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,AR=l.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: var(--ig-z-dropdown);
  max-height: var(--ig-popup-list-min);
  overflow-y: auto;
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-menu);
  margin-top: var(--ig-space-1);
`,DR=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,BR=l.button`
  display: block;
  margin: var(--ig-space-2) auto var(--ig-space-3);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-accent-soft);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-4);
  cursor: pointer;
  &:hover { background: var(--ig-color-surface-interactive); }
`;var OR=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,jR=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,_R=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,NR=(0,ir.createContext)(null);var UR=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,qR=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,WR=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var KL=l.button`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-3);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`,QL=(0,xx.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,vl.jsxs)(KL,{ref:o,type:a??"button",...r,children:[e&&(0,vl.jsx)(xv,{$color:e,$size:"xs"}),t]}));QL.displayName="ActionChip";var XR=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,YR=l.kbd`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${e=>e.$size==="sm"?"var(--ig-icon-md)":"var(--ig-icon-xl)"};
  height: ${e=>e.$size==="sm"?"var(--ig-icon-md)":"var(--ig-icon-xl)"};
  padding: 0 ${e=>e.$size==="sm"?"var(--ig-space-3px)":"var(--ig-space-1)"};
  border-radius: var(--ig-radius-xs);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-soft);
  font-family: inherit;
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-3xs)":"var(--ig-font-size-2xs)"};
  font-weight: var(--ig-font-weight-medium);
  line-height: var(--ig-line-height-none);
`;var QR=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,ZR=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,JR=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var t8=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var r8=l.li`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-2) var(--ig-space-4) var(--ig-space-2) var(--ig-space-5);
  border-radius: var(--ig-radius-2xs);
  background: var(--ig-color-surface-interactive);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var i8=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var eS=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,tS=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,aS=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border-radius: var(--ig-radius-sm);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  font-family: inherit;
  text-align: left;
  cursor: pointer;
  transition: background-color var(--ig-motion-fast), border-color var(--ig-motion-fast);

  ${e=>e.$variant==="flat"?eS:tS}

  ${e=>e.$selected&&L`
      background: var(--ig-color-selection-bg);
      ${e.$variant==="card"&&"border-color: var(--ig-color-accent);"}
      color: var(--ig-color-accent);
    `}

  ${e=>e.$dragOver&&L`
      background: var(--ig-color-accent-soft-surface-hover);
      outline: var(--ig-border-2px) solid var(--ig-color-accent);
      outline-offset: var(--ig-space-neg-2px);
    `}

  &:hover:not(:disabled) {
    background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface-hover)":"var(--ig-color-surface-interactive-hover)"};
  }
`,rS=(0,Sx.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,Cx.jsx)(aS,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});rS.displayName="SelectableListItem";var oS={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},iS={flexShrink:0},nS={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},lS=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function kx({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,Ja.jsxs)(kd,{as:"aside",gap:0,className:o,style:oS,children:[(0,Ja.jsx)(Ew,{style:iS,children:e}),t?(0,Ja.jsxs)(kd,{gap:3,style:nS,children:[(0,Ja.jsx)(Fh,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,Ja.jsx)(lS,{children:i},n):null)]})}var u8=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var c8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${ll.diagonal},
      var(--ig-color-media-placeholder-a) 0%,
      var(--ig-color-media-placeholder-b) 100%
    ),
    var(--ig-color-surface-interactive);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;var g8=l.button`
  width: var(--ig-icon-lg);
  height: var(--ig-icon-lg);
  padding: 0;
  border: none;
  border-radius: var(--ig-radius-2xs);
  background: var(--ig-color-image-option-bg);
  color: var(--ig-color-on-accent);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-image-option-bg-hover);
  }
`,m8=l.div`
  position: relative;
  width: 100%;
  aspect-ratio: var(--ig-aspect-landscape);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-2px) solid transparent;
  border-radius: var(--ig-radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: border-color var(--ig-motion-fast), box-shadow var(--ig-motion-fast);
  box-shadow: none;
  &:hover {
    border-color: ${e=>e.$selected?"transparent":"var(--ig-color-image-card-hover-border)"};
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: var(--ig-border-2px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
    border-radius: inherit;
    pointer-events: none;
    z-index: var(--ig-z-capture-high);
  }
`;var v8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${ll.diagonal},
      var(--ig-color-media-placeholder-a) 0%,
      var(--ig-color-media-placeholder-b) 100%
    ),
    var(--ig-color-surface-interactive);
  border-radius: var(--ig-radius-md);
  overflow: hidden;

  video {
    width: 100%;
    height: 100%;
    display: block;
    background: var(--ig-color-surface-muted);
  }
`;var b8=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var w8=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var cS=l.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  padding: var(--ig-space-4) var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-interactive);
  color: var(--ig-color-text-primary);
  cursor: pointer;
  text-align: left;
  font: inherit;
  &:hover:not(:disabled) {
    border-color: var(--ig-color-accent);
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,fS=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,pS=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,gS=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,mS=(0,Mx.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,er.jsxs)(cS,{ref:i,type:r??"button",...o,children:[(0,er.jsxs)(fS,{children:[(0,er.jsx)("span",{children:e}),t!=null&&(0,er.jsx)(pS,{children:t})]}),(0,er.jsx)(gS,{children:a})]}));mS.displayName="OptionRow";var C8=l.span`
  display: inline-flex;
  align-items: center;
  padding: var(--ig-space-1px) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  font-size: var(--ig-font-size-3xs);
  font-weight: var(--ig-font-weight-semibold);
  letter-spacing: var(--ig-letter-spacing-tight);
  white-space: nowrap;
  flex-shrink: 0;
  background: ${e=>e.$bg};
  color: ${e=>e.$color};
`,k8=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var T8=l.table`
  border-collapse: separate;
  border-spacing: var(--ig-space-2px);
  width: 100%;
  & th {
    font-size: var(--ig-font-size-xs);
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-muted);
    text-align: center;
    padding: var(--ig-space-2);
    text-transform: uppercase;
    letter-spacing: var(--ig-letter-spacing-tight);
    white-space: nowrap;
  }
  & th.row-label {
    font-weight: var(--ig-font-weight-medium);
    color: var(--ig-color-text-secondary);
    text-align: left;
    padding: var(--ig-space-2) var(--ig-space-3);
    text-transform: none;
    letter-spacing: 0;
  }
`,R8=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var $8=l.table`
  width: max-content;
  border-collapse: collapse;
  & th {
    padding: var(--ig-space-4) var(--ig-space-3);
    border-bottom: var(--ig-border-1px) solid var(--ig-color-border-strong);
    border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-raised);
    color: var(--ig-color-text-secondary);
    font-size: var(--ig-font-size-xs);
    text-align: center;
    vertical-align: bottom;
  }
  & th.sticky-row-header {
    position: sticky;
    left: 0;
    z-index: var(--ig-z-raised);
  }
  & td {
    padding: var(--ig-space-3);
    border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    text-align: center;
  }
  & td.row-label {
    padding: var(--ig-space-4) var(--ig-space-5);
    color: var(--ig-color-text-primary);
    font-size: var(--ig-font-size-sm);
    font-weight: var(--ig-font-weight-semibold);
    white-space: nowrap;
    position: sticky;
    left: 0;
    z-index: var(--ig-z-base);
    background: var(--ig-color-surface-panel);
    text-align: left;
  }
`;var z8=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,A8=l.div`
  ${Gt}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,D8=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,B8=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var F8={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},j8=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var N8=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var U8=l.div`
  ${ww}
  height: 100%;
  min-height: 0;
`,q8=l.header`
  ${Lw}
  flex-shrink: 0;

  ${ze.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,W8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,V8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,G8=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${ze.md} {
    font-size: var(--ig-font-size-xl);
  }
`,X8=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,Y8=l.div`
  ${Sw}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${ze.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,yS=l.section`
  ${Gt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,K8=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,Q8=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,Z8=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,J8=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,wS=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,eE=l(wS)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${ze.md} {
    grid-template-columns: 1fr;
  }
`,tE=l(yS)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,aE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,rE=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,oE=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,nE=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${ze.lg} {
    grid-template-columns: 1fr;
  }
`;var lE=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,sE=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${ze.lg} {
    grid-template-columns: 1fr;
  }
`,uE=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${ze.lg} {
    grid-template-columns: 1fr;
  }
`,dE=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${ze.lg} {
    grid-template-columns: 1fr;
  }
`,fE=l.nav`
  ${Gt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,pE=l.aside`
  ${Gt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,gE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,mE=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,hE=l.div`
  ${$h}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,vE=l.aside`
  ${ve}
  position: fixed;
  inset: 0 auto 0 0;
  width: min(var(--ig-popup-md), calc(100vw - var(--ig-space-11)));
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  transform: translateX(${e=>e.$open===!1?"-100%":"0"});
  transition: transform var(--ig-motion-normal);
  z-index: var(--ig-z-drawer);
`,bE=l.aside`
  width: ${e=>e.$expanded?e.$widthExpanded:e.$widthCollapsed}px;
  min-width: ${e=>e.$expanded?e.$widthExpanded:e.$widthCollapsed}px;
  max-width: ${e=>e.$expanded?e.$widthExpanded:e.$widthCollapsed}px;
  flex: 0 0 ${e=>e.$expanded?e.$widthExpanded:e.$widthCollapsed}px;
  /* parent grid/flex cell 에 맞춰 stretch — caller 가 Shell height: 100vh + main content overflow:auto
   * 패턴 쓰면 sidebar 는 viewport 와 정확히 일치, sub-pixel sticky slip 발생 자체가 안 함.
   * (caller 가 document scroll 사용하면 sticky 가 필요할 수 있어 max-height 로 cap 만 유지) */
  height: 100%;
  max-height: 100dvh;
  background:
    linear-gradient(180deg, var(--ig-color-sidebar-bg-top) 0%, var(--ig-color-sidebar-bg-bottom) 100%),
    var(--ig-color-bg-canvas);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  flex-shrink: 0;
  transition: width var(--ig-motion-normal);
  ${ze.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,_x=l.div`
  position: relative;
  min-height: var(--ig-layout-sidebar-header);
  padding: var(--ig-space-7) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$expanded?"space-between":"center"};
  flex-shrink: 0;
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-sizing: border-box;
  /* button reset (when rendered as <button> in collapsed-clickable mode) */
  border-width: 0 0 var(--ig-border-1px) 0;
  border-style: solid;
  border-color: var(--ig-color-border-subtle);
  color: inherit;
  width: 100%;
  text-align: inherit;
  font: inherit;
  cursor: ${e=>e.$expanded?"default":"pointer"};
  &:hover { background: var(--ig-color-surface-interactive); }
`,yE=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${_x}:hover & { opacity: 0; }
  `}
`,wE=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${_x}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,LE=l.button`
  background: none;
  border: none;
  color: var(--ig-color-text-muted);
  cursor: pointer;
  padding: var(--ig-space-1);
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover { color: var(--ig-color-text-primary); }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,SE=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,CE=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,Nx=`
  display: flex;
  align-items: center;
  height: var(--ig-control-height-lg);
  padding: 0 var(--ig-space-8);
  gap: var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-sm);
  text-decoration: none;
  /* transition \uC81C\uAC70 \u2014 color/background \uBCC0\uD654\uB294 \uC989\uC2DC \uC801\uC6A9.
   * \uC774\uC804: transition \uC774 button \uC758 paint sequence \uB97C GPU layer \uB85C \uACA9\uB9AC \u2192 \uBE60\uB978 \uC2A4\uD06C\uB864 \uC2DC button \uC548
   *       icon (raster/SVG) \uC774 \uD55C \uD504\uB808\uC784 lag \uC73C\uB85C jitter \uCC98\uB7FC \uBCF4\uC774\uB294 \uD604\uC0C1\uC758 \uC6D0\uC778 \uCD94\uC815. */
  cursor: pointer;
  border: none;
  background: none;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    color: var(--ig-color-text-primary);
    background: var(--ig-color-white-06);
  }
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
  & span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @container sidebar-shell (max-width: 100px) {
    justify-content: center;
    padding: 0;
  }
`,IE=l.a`
  ${Nx}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,kE=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,PE=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,TE=l.button`
  ${Nx}
`,RE=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,EE=l.span`
  display: contents;
`;var ME=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${ze.md} {
    justify-content: flex-start;
  }
`,zE=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,AE=l.div`
  position: relative;
  z-index: var(--ig-z-base);
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: ${e=>e.$width??"95vw"};
  max-width: ${e=>e.$width??"95vw"};
  height: ${e=>e.$height??"calc(100vh - var(--ig-layout-topbar))"};
  max-height: ${e=>e.$height??"calc(100vh - var(--ig-layout-topbar))"};
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-floating);
  color: var(--ig-color-text-primary);
  overflow: hidden;
  isolation: isolate;
  ${ze.md} {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
    border: 0;
  }
`,DE=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,BE=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,FE=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,OE=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,jE=di.md;var CS=11;var IS=3,_E=CS+IS*2;var HE=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,UE=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,qE=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,WE=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,VE=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var KE=l.div`
  position: relative;
  height: var(--ig-layout-color-plane-height);
  margin-bottom: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  background:
    linear-gradient(180deg, var(--ig-color-white-96), transparent 50%, var(--ig-color-bg-canvas)),
    linear-gradient(90deg, hsl(${e=>e.$hue} 0% 50%), hsl(${e=>e.$hue} 100% 50%));
  box-shadow: inset 0 var(--ig-border-1px) 0 var(--ig-color-inset-highlight);
  cursor: crosshair;
  overflow: hidden;
  touch-action: none;

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
  }
`,QE=l.span`
  position: absolute;
  left: ${e=>e.$saturation}%;
  top: ${e=>100-e.$lightness}%;
  width: var(--ig-layout-color-thumb-size);
  height: var(--ig-layout-color-thumb-size);
  border: var(--ig-border-2px) solid var(--ig-color-text-primary);
  border-radius: var(--ig-radius-pill);
  box-shadow: var(--ig-shadow-focus-ring);
  transform: translate(-50%, -50%);
  pointer-events: none;
`;var ZE=l.div`
  ${ve}
  position: absolute;
  top: calc(100% + var(--ig-space-3));
  left: 0;
  z-index: var(--ig-z-popover);
  width: 100%;
  box-sizing: border-box;
  padding: var(--ig-space-5);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`,JE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,e$=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,t$=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,a$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,r$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,o$=l(Ca).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,i$=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,n$=l(Ca).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,l$=l.input`
  width: 100%;
  height: var(--ig-space-2);
  margin: 0;
  appearance: none;
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$track};
  cursor: pointer;

  &::-webkit-slider-thumb {
    width: var(--ig-space-7);
    height: var(--ig-space-7);
    appearance: none;
    border: var(--ig-border-2px) solid var(--ig-color-text-primary);
    border-radius: var(--ig-radius-pill);
    background: var(--ig-color-surface-raised);
    box-shadow: var(--ig-shadow-focus-ring);
  }

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-1);
  }
`,s$=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var u$=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,d$=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,c$=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,f$=l.button`
  width: var(--ig-control-height-sm);
  height: var(--ig-control-height-sm);
  padding: 0;
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-md);
  background: ${e=>e.$color};
  box-shadow: inset 0 0 0 var(--ig-border-2px) var(--ig-color-surface-panel);
  cursor: pointer;

  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: var(--ig-opacity-disabled);
  }
`,p$=l(Ca).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,g$=l(Qr).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var h$=l.section`
  ${ve}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,v$=l.h3`
  margin: 0;
  padding: var(--ig-space-4) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-bottom-color: var(--ig-color-alert-danger-border);
    color: var(--ig-color-alert-danger-text);
  `}
`,x$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var y$=l.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  padding: var(--ig-space-4) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-strong);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-md);
  &:last-child {
    border-bottom: 0;
  }
`,w$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  padding: var(--ig-space-4) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-strong);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-md);
  flex-wrap: wrap;
  &:last-child {
    border-bottom: 0;
  }
`;var S$=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var I$=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var P$=l.div`
  ${Dd}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,T$=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function a0({children:e,className:t}){return(0,t0.jsx)(kd,{gap:3,className:t,children:e})}var E$=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var M$=new URL("./assets/favicon.ico","http://localhost/").href,z$=new URL("./assets/favicon.png","http://localhost/").href,A$=new URL("./assets/brand-mark.png","http://localhost/").href,D$=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var B$=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function zS(){try{if(typeof yh<"u"&&yh.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var xh=(...e)=>{},bh=zS(),F$={debug:bh?console.debug.bind(console):xh,log:bh?console.log.bind(console):xh,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var j$=sw.canvasExportBg;var Xt=c(I(),1);function l0(e){let[,t]=(0,Xt.useReducer)(a=>a+1,0);(0,Xt.useEffect)(()=>e.subscribe(t),[e])}function eo(e){let[t,a]=(0,Xt.useState)(null);return(0,Xt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function s0(){let[,e]=(0,Xt.useReducer)(t=>t+1,0);(0,Xt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Ia=c(I(),1);var d0=c(m(),1),AS=500,DS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,bl=e=>e instanceof Element&&e.id!==Wr&&e!==document.documentElement&&e!==document.body;function u0({active:e,onPick:t}){let[a,r]=(0,Ia.useState)(null),o=eo(a),i=(0,Ia.useRef)({x:-1,y:-1}),n=(0,Ia.useRef)(e);return n.current=e,(0,Ia.useEffect)(()=>{e||r(null)},[e]),(0,Ia.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!bl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(bl(b)?b:null)})},p=b=>{!n.current||!bl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,x=()=>clearTimeout(h),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:M}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(w,M);bl(g)&&t(g,w,M)},AS)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",x,{passive:!0}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{cancelAnimationFrame(u),x(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[t]),o?(0,d0.jsx)(DS,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var c0=c(m(),1),BS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: "Comment target";
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function pc({el:e}){let t=eo(e);return t?(0,c0.jsx)(BS,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var f0=c(I(),1);var $={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteReplyAria:"Delete reply",deleteThreadTitle:"Delete this comment thread?",deleteReplyTitle:"Delete this reply?",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",defaultAuthor:"Guest"};var nr=c(m(),1),yl="#f59e0b",FS=l.button`
  position: fixed;
  min-width: 24px;
  height: 24px;
  padding: 0 6px;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--ig-radius-pill);
  cursor: pointer;
  pointer-events: auto;
  background: ${yl};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,OS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${yl};
  background: color-mix(in srgb, ${yl} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${yl};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function p0({store:e,onPinClick:t}){s0();let[a,r]=(0,f0.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ka(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),x=`${Math.round(p/8)}:${Math.round(h/8)}`,y=o.get(x)??0;o.set(x,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,nr.jsx)(FS,{className:"fbw-pin",type:"button",title:Ya(n),style:{left:w,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${$.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,nr.jsxs)(nr.Fragment,{children:[i,a&&(0,nr.jsx)(OS,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var gc=c(I(),1);var to=c(I(),1);var g0=c(m(),1),jS=340,_S=l.div`
  position: fixed;
  width: ${jS}px;
  max-width: calc(100vw - 24px);
  max-height: 70vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`;function wl({targetEl:e,point:t,children:a}){let r=(0,to.useRef)(null),o=eo(e??null),[i,n]=(0,to.useState)(null);return(0,to.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,x=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:x}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,g0.jsx)(_S,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var Ll=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Sl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var $t=c(m(),1),NS=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function m0({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,gc.useState)(""),[u,d]=(0,gc.useState)(e.author),p=()=>{let h=n.trim();if(!h)return;let x=u.trim()||$.defaultAuthor;e.author=x;let y=new Date().toISOString(),b={id:Xa(),createdAt:y,anchor:a,resolved:!1,comments:[{id:Xa(),author:x,body:h,createdAt:y}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(b),i(b)};return(0,$t.jsxs)(wl,{targetEl:t,point:r,children:[(0,$t.jsxs)(Ll,{className:"fbw-composer",children:[(0,$t.jsx)(Sl,{children:$.composerTitle}),(0,$t.jsx)(Qe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:o,children:(0,$t.jsx)(Xe,{size:16})})]}),(0,$t.jsxs)(NS,{children:[$.composerTarget,": ",a.textSnippet||a.selector]}),(0,$t.jsx)(Ca,{size:"sm",placeholder:$.namePlaceholder,"aria-label":$.nameAria,value:u,onChange:h=>d(h.target.value)}),(0,$t.jsx)(gl,{value:n,onChange:s,onSubmit:p,placeholder:$.composerPlaceholder,submitLabel:$.post})]})}var mc=c(I(),1);var fe=c(m(),1),HS=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function h0({store:e,thread:t,number:a,onClose:r}){let o=pl(),[i,n]=(0,mc.useState)(""),[s,u]=(0,mc.useState)(e.author),d=t.anchor.page===location.pathname?Ka(t.anchor):null,p=()=>{let y=i.trim();if(!y)return;let b=s.trim()||$.defaultAuthor;e.author=b,e.addComment(t.id,b,y),n("")},h=async()=>{await o({title:$.deleteThreadTitle,description:Ya(t),confirmLabel:$.delete,cancelLabel:$.cancel,danger:!0})&&(e.removeThread(t.id),r())},x=async y=>{await o({title:$.deleteReplyTitle,description:y.body,confirmLabel:$.delete,cancelLabel:$.cancel,danger:!0})&&e.removeComment(t.id,y.id)};return(0,fe.jsxs)(wl,{targetEl:d,children:[(0,fe.jsxs)(Ll,{className:"fbw-thread",children:[(0,fe.jsxs)(Sl,{children:[$.thread," ",a]}),t.resolved&&(0,fe.jsx)(pi,{$tone:"success",children:$.archivedBadge}),(0,fe.jsx)(Qe,{variant:"ghost",size:"sm",tone:"danger","aria-label":$.deleteThreadAria,onClick:h,children:(0,fe.jsx)(Vt,{size:16})}),(0,fe.jsx)(Qe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:r,children:(0,fe.jsx)(Xe,{size:16})})]}),(0,fe.jsx)(a0,{children:t.comments.map(y=>(0,fe.jsx)(gx,{author:y.author,timestamp:HS(y.createdAt),body:y.body,actions:e.canRemoveComment(t.id,y.id)?(0,fe.jsx)(Qe,{variant:"ghost",size:"sm",tone:"danger","aria-label":$.deleteReplyAria,onClick:()=>x(y),children:(0,fe.jsx)(Vt,{size:14})}):void 0},y.id))}),!e.author&&(0,fe.jsx)(Ca,{size:"sm",placeholder:$.namePlaceholder,"aria-label":$.nameAria,value:s,onChange:y=>u(y.target.value)}),(0,fe.jsx)(gl,{value:i,onChange:n,onSubmit:p,placeholder:$.replyPlaceholder,submitLabel:$.reply}),(0,fe.jsx)(sl,{tone:t.resolved?"muted":"accent",iconLeading:(0,fe.jsx)(Gr,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?$.unarchive:$.archive})]})}var hc=c(I(),1);function v0(e,t){return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:t},null,2)}function x0(e,t){let a=new Blob([v0(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function b0(e,t){try{return await navigator.clipboard.writeText(v0(e,t)),!0}catch{return!1}}var lt=c(m(),1),qS=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,WS=l.span`
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border-radius: var(--ig-radius-pill);
  background: #f59e0b;
  color: #1f2937;
  font-weight: var(--ig-font-weight-bold);
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,VS=l.span`
  margin-left: auto;
`,GS=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,XS=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function y0({store:e,thread:t,number:a,onSelect:r}){let o=pl(),i=async s=>{s.stopPropagation(),await o({title:$.deleteThreadTitle,description:Ya(t),confirmLabel:$.delete,cancelLabel:$.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,lt.jsxs)(px,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,lt.jsxs)(qS,{children:[(0,lt.jsx)(WS,{children:a}),(0,lt.jsx)("span",{children:Jm(t)}),t.resolved&&(0,lt.jsx)(pi,{$tone:"success",children:$.archivedBadge}),(0,lt.jsx)(VS,{}),(0,lt.jsx)(Qe,{variant:"ghost",size:"sm",tone:"danger","aria-label":$.deleteThreadAria,onClick:i,children:(0,lt.jsx)(Vt,{size:14})})]}),(0,lt.jsx)(GS,{children:Ya(t)}),(0,lt.jsxs)(XS,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${$.replies}`]})]})}var oe=c(m(),1),YS=320,KS=l.button`
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px 8px;
  border: none;
  border-radius: var(--ig-radius-sm) 0 0 var(--ig-radius-sm);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  writing-mode: vertical-rl;
  cursor: pointer;
  box-shadow: var(--ig-shadow-raised);
`,QS=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${YS}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,ZS=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,JS=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,eC=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function w0({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,hc.useState)(null),[n,s]=(0,hc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),h=w=>u.findIndex(M=>M.id===w.id)+1,x=w=>{if(!yd(w.anchor)){rh(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await b0(e.project,e.exportList())?$.copied:$.copyFailed),setTimeout(()=>i(null),1500)},b=w=>w.map(M=>(0,oe.jsx)(y0,{store:e,thread:M,number:h(M),onSelect:x},M.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(KS,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[$.tab," ",u.length]}),(0,oe.jsx)(QS,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(kx,{headerSlot:(0,oe.jsxs)(ZS,{children:[(0,oe.jsxs)("span",{children:[$.listTitle," (",u.length,")"]}),(0,oe.jsx)(Qe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:()=>a(!1),children:(0,oe.jsx)(Xe,{size:16})})]}),bodySectionTitle:$.openSection,bodySlot:d.length===0?(0,oe.jsxs)(JS,{children:[$.emptyLine1,(0,oe.jsx)("br",{}),$.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(sl,{tone:"muted",onClick:()=>s(w=>!w),children:n?$.hideArchived(p.length):$.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(eC,{children:[(0,oe.jsx)(Qr,{variant:"secondary",size:"sm",onClick:y,children:o??$.copy}),(0,oe.jsx)(Qr,{variant:"solid",size:"sm",onClick:()=>x0(e.project,e.exportList()),children:$.downloadJson})]})]})})]})}var Yt=c(m(),1),L0=l.button`
  position: fixed;
  left: 16px;
  bottom: 16px;
  width: 52px;
  height: 52px;
  border: none;
  border-radius: var(--ig-radius-pill);
  background: ${e=>e.$on?"var(--ig-color-accent-strong)":"var(--ig-color-surface-raised)"};
  color: var(--ig-color-text-primary);
  font-size: 22px;
  cursor: pointer;
  box-shadow: var(--ig-shadow-raised);
  transition: background 0.15s;
`,tC=l.span`
  position: fixed;
  left: 76px;
  bottom: 28px;
  padding: 4px 10px;
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-raised);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-2xs);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.15s;

  ${L0}:hover + & {
    opacity: 1;
  }
`,aC=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function S0({store:e}){let t=e.list().length;return(0,Yt.jsxs)(Yt.Fragment,{children:[(0,Yt.jsxs)(L0,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?$.toggleOff:$.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,Yt.jsx)(aC,{children:(0,Yt.jsx)(Rv,{children:t})})]}),(0,Yt.jsx)(tC,{children:e.enabled?$.toggleHintOn:$.toggleOn})]})}var wt=c(m(),1);function C0({store:e}){l0(e);let[t,a]=(0,gi.useState)(null),[r,o]=(0,gi.useState)(!1),i=e.enabled;(0,gi.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ka(n.anchor):null;return(0,wt.jsxs)(ox,{children:[i&&(0,wt.jsx)(u0,{active:!t,onPick:(d,p,h)=>a({kind:"draft",el:d,anchor:ah(d),point:{x:p,y:h}})}),i&&(0,wt.jsx)(p0,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,wt.jsx)(pc,{el:t.el}),u&&(0,wt.jsx)(pc,{el:u}),t?.kind==="draft"&&(0,wt.jsx)(m0,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,wt.jsx)(h0,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,wt.jsx)(w0,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,wt.jsx)(S0,{store:e})]})}var vc=c(m(),1),rC=2147483e3;function oC(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var iC=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`,T0=document.currentScript??document.querySelector("script[data-project]"),nC=T0?.dataset.project??"default",I0=T0?.dataset.seed;function k0(){if(document.getElementById(Wr))return;let e=document.createElement("div");e.id=Wr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${rC};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=oC(Zm)+iC;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new Jn(nC);(0,P0.createRoot)(o).render((0,vc.jsx)(Xm,{target:r,children:(0,vc.jsx)(C0,{store:i})})),I0&&typeof fetch=="function"&&fetch(I0).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),oh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",k0):k0();})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils/mergeClasses.js:
lucide-react/dist/esm/shared/src/utils/toKebabCase.js:
lucide-react/dist/esm/shared/src/utils/toCamelCase.js:
lucide-react/dist/esm/shared/src/utils/toPascalCase.js:
lucide-react/dist/esm/defaultAttributes.js:
lucide-react/dist/esm/shared/src/utils/hasA11yProp.js:
lucide-react/dist/esm/Icon.js:
lucide-react/dist/esm/createLucideIcon.js:
lucide-react/dist/esm/icons/check.js:
lucide-react/dist/esm/icons/trash-2.js:
lucide-react/dist/esm/icons/x.js:
lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.563.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
