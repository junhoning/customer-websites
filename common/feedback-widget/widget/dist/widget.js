"use strict";(()=>{var O0=Object.create;var Lc=Object.defineProperty;var j0=Object.getOwnPropertyDescriptor;var N0=Object.getOwnPropertyNames;var _0=Object.getPrototypeOf,H0=Object.prototype.hasOwnProperty;var At=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var U0=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of N0(t))!H0.call(e,o)&&o!==a&&Lc(e,o,{get:()=>t[o],enumerable:!(r=j0(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?O0(_0(e)):{},U0(t||!e||!e.__esModule?Lc(a,"default",{value:e,enumerable:!0}):a,e));var Ac=At(B=>{"use strict";var lo=Symbol.for("react.element"),q0=Symbol.for("react.portal"),W0=Symbol.for("react.fragment"),V0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),K0=Symbol.for("react.forward_ref"),Q0=Symbol.for("react.suspense"),Z0=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),Sc=Symbol.iterator;function eb(e){return e===null||typeof e!="object"?null:(e=Sc&&e[Sc]||e["@@iterator"],typeof e=="function"?e:null)}var kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Tc={};function fr(e,t,a){this.props=e,this.context=t,this.refs=Tc,this.updater=a||kc}fr.prototype.isReactComponent={};fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Rc(){}Rc.prototype=fr.prototype;function Al(e,t,a){this.props=e,this.context=t,this.refs=Tc,this.updater=a||kc}var Dl=Al.prototype=new Rc;Dl.constructor=Al;Pc(Dl,fr.prototype);Dl.isPureReactComponent=!0;var Cc=Array.isArray,$c=Object.prototype.hasOwnProperty,Bl={current:null},Ec={key:!0,ref:!0,__self:!0,__source:!0};function Mc(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)$c.call(t,r)&&!Ec.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:lo,type:e,key:i,ref:n,props:o,_owner:Bl.current}}function tb(e,t){return{$$typeof:lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===lo}function ab(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Ic=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ab(""+e.key):t.toString(36)}function Ci(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case lo:case q0:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+zl(n,0):r,Cc(o)?(a="",e!=null&&(a=e.replace(Ic,"$&/")+"/"),Ci(o,t,a,"",function(d){return d})):o!=null&&(Fl(o)&&(o=tb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(Ic,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",Cc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+zl(i,s);n+=Ci(i,t,a,u,o)}else if(u=eb(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+zl(i,s++),n+=Ci(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Si(e,t,a){if(e==null)return e;var r=[],o=0;return Ci(e,r,"","",function(i){return t.call(a,i,o++)}),r}function rb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},Ii={transition:null},ob={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:Ii,ReactCurrentOwner:Bl};function zc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Si,forEach:function(e,t,a){Si(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Si(e,function(){t++}),t},toArray:function(e){return Si(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=fr;B.Fragment=W0;B.Profiler=G0;B.PureComponent=Al;B.StrictMode=V0;B.Suspense=Q0;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ob;B.act=zc;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Bl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)$c.call(t,u)&&!Ec.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:lo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:Y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:X0,_context:e},e.Consumer=e};B.createElement=Mc;B.createFactory=function(e){var t=Mc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:K0,render:e}};B.isValidElement=Fl;B.lazy=function(e){return{$$typeof:J0,_payload:{_status:-1,_result:e},_init:rb}};B.memo=function(e,t){return{$$typeof:Z0,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ii.transition;Ii.transition={};try{e()}finally{Ii.transition=t}};B.unstable_act=zc;B.useCallback=function(e,t){return Pe.current.useCallback(e,t)};B.useContext=function(e){return Pe.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};B.useEffect=function(e,t){return Pe.current.useEffect(e,t)};B.useId=function(){return Pe.current.useId()};B.useImperativeHandle=function(e,t,a){return Pe.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Pe.current.useMemo(e,t)};B.useReducer=function(e,t,a){return Pe.current.useReducer(e,t,a)};B.useRef=function(e){return Pe.current.useRef(e)};B.useState=function(e){return Pe.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return Pe.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return Pe.current.useTransition()};B.version="18.3.1"});var I=At((CC,Dc)=>{"use strict";Dc.exports=Ac()});var Wc=At(q=>{"use strict";function _l(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<ki(o,t))e[r]=t,e[a]=o,a=r;else break e}}function ct(e){return e.length===0?null:e[0]}function Ti(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>ki(s,a))u<o&&0>ki(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>ki(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function ki(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Bc=performance,q.unstable_now=function(){return Bc.now()}):(Ol=Date,Fc=Ol.now(),q.unstable_now=function(){return Ol.now()-Fc});var Bc,Ol,Fc,Ct=[],ta=[],ib=1,Je=null,ye=3,Ri=!1,Ea=!1,uo=!1,Nc=typeof setTimeout=="function"?setTimeout:null,_c=typeof clearTimeout=="function"?clearTimeout:null,Oc=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Hl(e){for(var t=ct(ta);t!==null;){if(t.callback===null)Ti(ta);else if(t.startTime<=e)Ti(ta),t.sortIndex=t.expirationTime,_l(Ct,t);else break;t=ct(ta)}}function Ul(e){if(uo=!1,Hl(e),!Ea)if(ct(Ct)!==null)Ea=!0,Wl(ql);else{var t=ct(ta);t!==null&&Vl(Ul,t.startTime-e)}}function ql(e,t){Ea=!1,uo&&(uo=!1,_c(co),co=-1),Ri=!0;var a=ye;try{for(Hl(t),Je=ct(Ct);Je!==null&&(!(Je.expirationTime>t)||e&&!qc());){var r=Je.callback;if(typeof r=="function"){Je.callback=null,ye=Je.priorityLevel;var o=r(Je.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?Je.callback=o:Je===ct(Ct)&&Ti(Ct),Hl(t)}else Ti(Ct);Je=ct(Ct)}if(Je!==null)var i=!0;else{var n=ct(ta);n!==null&&Vl(Ul,n.startTime-t),i=!1}return i}finally{Je=null,ye=a,Ri=!1}}var $i=!1,Pi=null,co=-1,Hc=5,Uc=-1;function qc(){return!(q.unstable_now()-Uc<Hc)}function jl(){if(Pi!==null){var e=q.unstable_now();Uc=e;var t=!0;try{t=Pi(!0,e)}finally{t?so():($i=!1,Pi=null)}}else $i=!1}var so;typeof Oc=="function"?so=function(){Oc(jl)}:typeof MessageChannel<"u"?(Nl=new MessageChannel,jc=Nl.port2,Nl.port1.onmessage=jl,so=function(){jc.postMessage(null)}):so=function(){Nc(jl,0)};var Nl,jc;function Wl(e){Pi=e,$i||($i=!0,so())}function Vl(e,t){co=Nc(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Ea||Ri||(Ea=!0,Wl(ql))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Hc=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return ye};q.unstable_getFirstCallbackNode=function(){return ct(Ct)};q.unstable_next=function(e){switch(ye){case 1:case 2:case 3:var t=3;break;default:t=ye}var a=ye;ye=t;try{return e()}finally{ye=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ye;ye=e;try{return t()}finally{ye=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:ib++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,_l(ta,e),ct(Ct)===null&&e===ct(ta)&&(uo?(_c(co),co=-1):uo=!0,Vl(Ul,a-r))):(e.sortIndex=o,_l(Ct,e),Ea||Ri||(Ea=!0,Wl(ql))),e};q.unstable_shouldYield=qc;q.unstable_wrapCallback=function(e){var t=ye;return function(){var a=ye;ye=t;try{return e.apply(this,arguments)}finally{ye=a}}}});var Gc=At((kC,Vc)=>{"use strict";Vc.exports=Wc()});var Zg=At(Ye=>{"use strict";var nb=I(),Ge=Gc();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tp=new Set,zo={};function qa(e,t){zr(e,t),zr(e+"Capture",t)}function zr(e,t){for(zo[e]=t,e=0;e<t.length;e++)tp.add(t[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ms=Object.prototype.hasOwnProperty,lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xc={},Yc={};function sb(e){return ms.call(Yc,e)?!0:ms.call(Xc,e)?!1:lb.test(e)?Yc[e]=!0:(Xc[e]=!0,!1)}function ub(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function db(e,t,a,r){if(t===null||typeof t>"u"||ub(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var lu=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lu,su);me[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lu,su);me[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lu,su);me[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function uu(e,t,a,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(db(t,a,o,r)&&(a=null),r||o===null?sb(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var qt=nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ei=Symbol.for("react.element"),mr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),hs=Symbol.for("react.profiler"),ap=Symbol.for("react.provider"),rp=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),xs=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),ra=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var op=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Kc=Symbol.iterator;function fo(e){return e===null||typeof e!="object"?null:(e=Kc&&e[Kc]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Gl;function yo(e){if(Gl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Gl=t&&t[1]||""}return`
`+Gl+e}var Xl=!1;function Yl(e,t){if(!e||Xl)return"";Xl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{Xl=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?yo(e):""}function cb(e){switch(e.tag){case 5:return yo(e.type);case 16:return yo("Lazy");case 13:return yo("Suspense");case 19:return yo("SuspenseList");case 0:case 2:case 15:return e=Yl(e.type,!1),e;case 11:return e=Yl(e.type.render,!1),e;case 1:return e=Yl(e.type,!0),e;default:return""}}function bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case hr:return"Fragment";case mr:return"Portal";case hs:return"Profiler";case du:return"StrictMode";case vs:return"Suspense";case xs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rp:return(e.displayName||"Context")+".Consumer";case ap:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return t=e.displayName||null,t!==null?t:bs(e.type)||"Memo";case ra:t=e._payload,e=e._init;try{return bs(e(t))}catch{}}return null}function fb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bs(t);case 8:return t===du?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function va(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ip(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pb(e){var t=ip(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mi(e){e._valueTracker||(e._valueTracker=pb(e))}function np(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=ip(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ys(e,t){var a=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Qc(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=va(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lp(e,t){t=t.checked,t!=null&&uu(e,"checked",t,!1)}function ws(e,t){lp(e,t);var a=va(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ls(e,t.type,a):t.hasOwnProperty("defaultValue")&&Ls(e,t.type,va(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zc(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Ls(e,t,a){(t!=="number"||ln(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var wo=Array.isArray;function Pr(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+va(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ss(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(C(92));if(wo(a)){if(1<a.length)throw Error(C(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:va(a)}}function sp(e,t){var a=va(t.value),r=va(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function up(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?up(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zi,dp=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zi=zi||document.createElement("div"),zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gb=["Webkit","ms","Moz","O"];Object.keys(Co).forEach(function(e){gb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Co[t]=Co[e]})});function cp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Co.hasOwnProperty(e)&&Co[e]?(""+t).trim():t+"px"}function fp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=cp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var mb=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Is(e,t){if(t){if(mb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ks(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ps=null;function pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ts=null,Tr=null,Rr=null;function tf(e){if(e=Zo(e)){if(typeof Ts!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Dn(t),Ts(e.stateNode,e.type,t))}}function pp(e){Tr?Rr?Rr.push(e):Rr=[e]:Tr=e}function gp(){if(Tr){var e=Tr,t=Rr;if(Rr=Tr=null,tf(e),t)for(e=0;e<t.length;e++)tf(t[e])}}function mp(e,t){return e(t)}function hp(){}var Kl=!1;function vp(e,t,a){if(Kl)return e(t,a);Kl=!0;try{return mp(e,t,a)}finally{Kl=!1,(Tr!==null||Rr!==null)&&(hp(),gp())}}function Do(e,t){var a=e.stateNode;if(a===null)return null;var r=Dn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,t,typeof a));return a}var Rs=!1;if(Nt)try{pr={},Object.defineProperty(pr,"passive",{get:function(){Rs=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{Rs=!1}var pr;function hb(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var Io=!1,sn=null,un=!1,$s=null,vb={onError:function(e){Io=!0,sn=e}};function xb(e,t,a,r,o,i,n,s,u){Io=!1,sn=null,hb.apply(vb,arguments)}function bb(e,t,a,r,o,i,n,s,u){if(xb.apply(this,arguments),Io){if(Io){var d=sn;Io=!1,sn=null}else throw Error(C(198));un||(un=!0,$s=d)}}function Wa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function xp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function af(e){if(Wa(e)!==e)throw Error(C(188))}function yb(e){var t=e.alternate;if(!t){if(t=Wa(e),t===null)throw Error(C(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return af(o),e;if(i===r)return af(o),t;i=i.sibling}throw Error(C(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(C(189))}}if(a.alternate!==r)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:t}function bp(e){return e=yb(e),e!==null?yp(e):null}function yp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=yp(e);if(t!==null)return t;e=e.sibling}return null}var wp=Ge.unstable_scheduleCallback,rf=Ge.unstable_cancelCallback,wb=Ge.unstable_shouldYield,Lb=Ge.unstable_requestPaint,oe=Ge.unstable_now,Sb=Ge.unstable_getCurrentPriorityLevel,gu=Ge.unstable_ImmediatePriority,Lp=Ge.unstable_UserBlockingPriority,dn=Ge.unstable_NormalPriority,Cb=Ge.unstable_LowPriority,Sp=Ge.unstable_IdlePriority,En=null,Tt=null;function Ib(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(En,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Tb,kb=Math.log,Pb=Math.LN2;function Tb(e){return e>>>=0,e===0?32:31-(kb(e)/Pb|0)|0}var Ai=64,Di=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cn(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=Lo(s):(i&=n,i!==0&&(r=Lo(i)))}else n=a&~o,n!==0?r=Lo(n):i!==0&&(r=Lo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-ht(t),o=1<<a,r|=e[a],t&=~o;return r}function Rb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $b(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-ht(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=Rb(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Es(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cp(){var e=Ai;return Ai<<=1,(Ai&4194240)===0&&(Ai=64),e}function Ql(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ko(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=a}function Eb(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-ht(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function mu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-ht(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var N=0;function Ip(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var kp,hu,Pp,Tp,Rp,Ms=!1,Bi=[],ua=null,da=null,ca=null,Bo=new Map,Fo=new Map,ia=[],Mb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":ua=null;break;case"dragenter":case"dragleave":da=null;break;case"mouseover":case"mouseout":ca=null;break;case"pointerover":case"pointerout":Bo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(t.pointerId)}}function po(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Zo(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function zb(e,t,a,r,o){switch(t){case"focusin":return ua=po(ua,e,t,a,r,o),!0;case"dragenter":return da=po(da,e,t,a,r,o),!0;case"mouseover":return ca=po(ca,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Bo.set(i,po(Bo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Fo.set(i,po(Fo.get(i)||null,e,t,a,r,o)),!0}return!1}function $p(e){var t=Aa(e.target);if(t!==null){var a=Wa(t);if(a!==null){if(t=a.tag,t===13){if(t=xp(a),t!==null){e.blockedOn=t,Rp(e.priority,function(){Pp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=zs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ps=r,a.target.dispatchEvent(r),Ps=null}else return t=Zo(a),t!==null&&hu(t),e.blockedOn=a,!1;t.shift()}return!0}function nf(e,t,a){Ki(e)&&a.delete(t)}function Ab(){Ms=!1,ua!==null&&Ki(ua)&&(ua=null),da!==null&&Ki(da)&&(da=null),ca!==null&&Ki(ca)&&(ca=null),Bo.forEach(nf),Fo.forEach(nf)}function go(e,t){e.blockedOn===t&&(e.blockedOn=null,Ms||(Ms=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Ab)))}function Oo(e){function t(o){return go(o,e)}if(0<Bi.length){go(Bi[0],e);for(var a=1;a<Bi.length;a++){var r=Bi[a];r.blockedOn===e&&(r.blockedOn=null)}}for(ua!==null&&go(ua,e),da!==null&&go(da,e),ca!==null&&go(ca,e),Bo.forEach(t),Fo.forEach(t),a=0;a<ia.length;a++)r=ia[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<ia.length&&(a=ia[0],a.blockedOn===null);)$p(a),a.blockedOn===null&&ia.shift()}var $r=qt.ReactCurrentBatchConfig,fn=!0;function Db(e,t,a,r){var o=N,i=$r.transition;$r.transition=null;try{N=1,vu(e,t,a,r)}finally{N=o,$r.transition=i}}function Bb(e,t,a,r){var o=N,i=$r.transition;$r.transition=null;try{N=4,vu(e,t,a,r)}finally{N=o,$r.transition=i}}function vu(e,t,a,r){if(fn){var o=zs(e,t,a,r);if(o===null)os(e,t,r,pn,a),of(e,r);else if(zb(o,e,t,a,r))r.stopPropagation();else if(of(e,r),t&4&&-1<Mb.indexOf(e)){for(;o!==null;){var i=Zo(o);if(i!==null&&kp(i),i=zs(e,t,a,r),i===null&&os(e,t,r,pn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else os(e,t,r,null,a)}}var pn=null;function zs(e,t,a,r){if(pn=null,e=pu(r),e=Aa(e),e!==null)if(t=Wa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=xp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return pn=e,null}function Ep(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sb()){case gu:return 1;case Lp:return 4;case dn:case Cb:return 16;case Sp:return 536870912;default:return 16}default:return 16}}var la=null,xu=null,Qi=null;function Mp(){if(Qi)return Qi;var e,t=xu,a=t.length,r,o="value"in la?la.value:la.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return Qi=o.slice(e,1<r?1-r:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function lf(){return!1}function Xe(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fi:lf,this.isPropagationStopped=lf,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=Xe(Nr),Qo=Z({},Nr,{view:0,detail:0}),Fb=Xe(Qo),Zl,Jl,mo,Mn=Z({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mo&&(mo&&e.type==="mousemove"?(Zl=e.screenX-mo.screenX,Jl=e.screenY-mo.screenY):Jl=Zl=0,mo=e),Zl)},movementY:function(e){return"movementY"in e?e.movementY:Jl}}),sf=Xe(Mn),Ob=Z({},Mn,{dataTransfer:0}),jb=Xe(Ob),Nb=Z({},Qo,{relatedTarget:0}),es=Xe(Nb),_b=Z({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Hb=Xe(_b),Ub=Z({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qb=Xe(Ub),Wb=Z({},Nr,{data:0}),uf=Xe(Wb),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xb[e])?!!t[e]:!1}function yu(){return Yb}var Kb=Z({},Qo,{key:function(e){if(e.key){var t=Vb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qb=Xe(Kb),Zb=Z({},Mn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=Xe(Zb),Jb=Z({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),ey=Xe(Jb),ty=Z({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ay=Xe(ty),ry=Z({},Mn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),oy=Xe(ry),iy=[9,13,27,32],wu=Nt&&"CompositionEvent"in window,ko=null;Nt&&"documentMode"in document&&(ko=document.documentMode);var ny=Nt&&"TextEvent"in window&&!ko,zp=Nt&&(!wu||ko&&8<ko&&11>=ko),cf=" ",ff=!1;function Ap(e,t){switch(e){case"keyup":return iy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function ly(e,t){switch(e){case"compositionend":return Dp(t);case"keypress":return t.which!==32?null:(ff=!0,cf);case"textInput":return e=t.data,e===cf&&ff?null:e;default:return null}}function sy(e,t){if(vr)return e==="compositionend"||!wu&&Ap(e,t)?(e=Mp(),Qi=xu=la=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zp&&t.locale!=="ko"?null:t.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uy[e.type]:t==="textarea"}function Bp(e,t,a,r){pp(r),t=gn(t,"onChange"),0<t.length&&(a=new bu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Po=null,jo=null;function dy(e){Gp(e,0)}function zn(e){var t=yr(e);if(np(t))return e}function cy(e,t){if(e==="change")return t}var Fp=!1;Nt&&(Nt?(ji="oninput"in document,ji||(ts=document.createElement("div"),ts.setAttribute("oninput","return;"),ji=typeof ts.oninput=="function"),Oi=ji):Oi=!1,Fp=Oi&&(!document.documentMode||9<document.documentMode));var Oi,ji,ts;function gf(){Po&&(Po.detachEvent("onpropertychange",Op),jo=Po=null)}function Op(e){if(e.propertyName==="value"&&zn(jo)){var t=[];Bp(t,jo,e,pu(e)),vp(dy,t)}}function fy(e,t,a){e==="focusin"?(gf(),Po=t,jo=a,Po.attachEvent("onpropertychange",Op)):e==="focusout"&&gf()}function py(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zn(jo)}function gy(e,t){if(e==="click")return zn(t)}function my(e,t){if(e==="input"||e==="change")return zn(t)}function hy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:hy;function No(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!ms.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function mf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hf(e,t){var a=mf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mf(a)}}function jp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Np(){for(var e=window,t=ln();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=ln(e.document)}return t}function Lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vy(e){var t=Np(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&jp(a.ownerDocument.documentElement,a)){if(r!==null&&Lu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=hf(a,i);var n=hf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xy=Nt&&"documentMode"in document&&11>=document.documentMode,xr=null,As=null,To=null,Ds=!1;function vf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ds||xr==null||xr!==ln(r)||(r=xr,"selectionStart"in r&&Lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),To&&No(To,r)||(To=r,r=gn(As,"onSelect"),0<r.length&&(t=new bu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=xr)))}function Ni(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var br={animationend:Ni("Animation","AnimationEnd"),animationiteration:Ni("Animation","AnimationIteration"),animationstart:Ni("Animation","AnimationStart"),transitionend:Ni("Transition","TransitionEnd")},as={},_p={};Nt&&(_p=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function An(e){if(as[e])return as[e];if(!br[e])return e;var t=br[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in _p)return as[e]=t[a];return e}var Hp=An("animationend"),Up=An("animationiteration"),qp=An("animationstart"),Wp=An("transitionend"),Vp=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ba(e,t){Vp.set(e,t),qa(t,[e])}for(_i=0;_i<xf.length;_i++)Hi=xf[_i],bf=Hi.toLowerCase(),yf=Hi[0].toUpperCase()+Hi.slice(1),ba(bf,"on"+yf);var Hi,bf,yf,_i;ba(Hp,"onAnimationEnd");ba(Up,"onAnimationIteration");ba(qp,"onAnimationStart");ba("dblclick","onDoubleClick");ba("focusin","onFocus");ba("focusout","onBlur");ba(Wp,"onTransitionEnd");zr("onMouseEnter",["mouseout","mouseover"]);zr("onMouseLeave",["mouseout","mouseover"]);zr("onPointerEnter",["pointerout","pointerover"]);zr("onPointerLeave",["pointerout","pointerover"]);qa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qa("onBeforeInput",["compositionend","keypress","textInput","paste"]);qa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),by=new Set("cancel close invalid load scroll toggle".split(" ").concat(So));function wf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,bb(r,t,void 0,e),e.currentTarget=null}function Gp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;wf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;wf(o,s,d),i=u}}}if(un)throw e=$s,un=!1,$s=null,e}function V(e,t){var a=t[Ns];a===void 0&&(a=t[Ns]=new Set);var r=e+"__bubble";a.has(r)||(Xp(t,e,2,!1),a.add(r))}function rs(e,t,a){var r=0;t&&(r|=4),Xp(a,e,r,t)}var Ui="_reactListening"+Math.random().toString(36).slice(2);function _o(e){if(!e[Ui]){e[Ui]=!0,tp.forEach(function(a){a!=="selectionchange"&&(by.has(a)||rs(a,!1,e),rs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ui]||(t[Ui]=!0,rs("selectionchange",!1,t))}}function Xp(e,t,a,r){switch(Ep(t)){case 1:var o=Db;break;case 4:o=Bb;break;default:o=vu}a=o.bind(null,t,a,e),o=void 0,!Rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function os(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=Aa(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}vp(function(){var d=i,p=pu(a),h=[];e:{var x=Vp.get(e);if(x!==void 0){var w=bu,b=e;switch(e){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":w=Qb;break;case"focusin":b="focus",w=es;break;case"focusout":b="blur",w=es;break;case"beforeblur":case"afterblur":w=es;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=jb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=ey;break;case Hp:case Up:case qp:w=Hb;break;case Wp:w=ay;break;case"scroll":w=Fb;break;case"wheel":w=oy;break;case"copy":case"cut":case"paste":w=qb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=df}var y=(t&4)!==0,M=!y&&e==="scroll",g=y?x!==null?x+"Capture":null:x;y=[];for(var f=d,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=Do(f,g),S!=null&&y.push(Ho(f,S,v)))),M)break;f=f.return}0<y.length&&(x=new w(x,b,null,a,p),h.push({event:x,listeners:y}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",x&&a!==Ps&&(b=a.relatedTarget||a.fromElement)&&(Aa(b)||b[_t]))break e;if((w||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,w?(b=a.relatedTarget||a.toElement,w=d,b=b?Aa(b):null,b!==null&&(M=Wa(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=d),w!==b)){if(y=sf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=df,S="onPointerLeave",g="onPointerEnter",f="pointer"),M=w==null?x:yr(w),v=b==null?x:yr(b),x=new y(S,f+"leave",w,a,p),x.target=M,x.relatedTarget=v,S=null,Aa(p)===d&&(y=new y(g,f+"enter",b,a,p),y.target=v,y.relatedTarget=M,S=y),M=S,w&&b)t:{for(y=w,g=b,f=0,v=y;v;v=gr(v))f++;for(v=0,S=g;S;S=gr(S))v++;for(;0<f-v;)y=gr(y),f--;for(;0<v-f;)g=gr(g),v--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=gr(y),g=gr(g)}y=null}else y=null;w!==null&&Lf(h,x,w,y,!1),b!==null&&M!==null&&Lf(h,M,b,y,!0)}}e:{if(x=d?yr(d):window,w=x.nodeName&&x.nodeName.toLowerCase(),w==="select"||w==="input"&&x.type==="file")var P=cy;else if(pf(x))if(Fp)P=my;else{P=py;var R=fy}else(w=x.nodeName)&&w.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=gy);if(P&&(P=P(e,d))){Bp(h,P,a,p);break e}R&&R(e,x,d),e==="focusout"&&(R=x._wrapperState)&&R.controlled&&x.type==="number"&&Ls(x,"number",x.value)}switch(R=d?yr(d):window,e){case"focusin":(pf(R)||R.contentEditable==="true")&&(xr=R,As=d,To=null);break;case"focusout":To=As=xr=null;break;case"mousedown":Ds=!0;break;case"contextmenu":case"mouseup":case"dragend":Ds=!1,vf(h,a,p);break;case"selectionchange":if(xy)break;case"keydown":case"keyup":vf(h,a,p)}var k;if(wu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else vr?Ap(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(zp&&a.locale!=="ko"&&(vr||T!=="onCompositionStart"?T==="onCompositionEnd"&&vr&&(k=Mp()):(la=p,xu="value"in la?la.value:la.textContent,vr=!0)),R=gn(d,T),0<R.length&&(T=new uf(T,e,null,a,p),h.push({event:T,listeners:R}),k?T.data=k:(k=Dp(a),k!==null&&(T.data=k)))),(k=ny?ly(e,a):sy(e,a))&&(d=gn(d,"onBeforeInput"),0<d.length&&(p=new uf("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}Gp(h,t)})}function Ho(e,t,a){return{instance:e,listener:t,currentTarget:a}}function gn(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Do(e,a),i!=null&&r.unshift(Ho(e,i,o)),i=Do(e,t),i!=null&&r.push(Ho(e,i,o))),e=e.return}return r}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Do(a,i),u!=null&&n.unshift(Ho(a,u,s))):o||(u=Do(a,i),u!=null&&n.push(Ho(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var yy=/\r\n?/g,wy=/\u0000|\uFFFD/g;function Sf(e){return(typeof e=="string"?e:""+e).replace(yy,`
`).replace(wy,"")}function qi(e,t,a){if(t=Sf(t),Sf(e)!==t&&a)throw Error(C(425))}function mn(){}var Bs=null,Fs=null;function Os(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var js=typeof setTimeout=="function"?setTimeout:void 0,Ly=typeof clearTimeout=="function"?clearTimeout:void 0,Cf=typeof Promise=="function"?Promise:void 0,Sy=typeof queueMicrotask=="function"?queueMicrotask:typeof Cf<"u"?function(e){return Cf.resolve(null).then(e).catch(Cy)}:js;function Cy(e){setTimeout(function(){throw e})}function is(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Oo(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Oo(t)}function fa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function If(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Pt="__reactFiber$"+_r,Uo="__reactProps$"+_r,_t="__reactContainer$"+_r,Ns="__reactEvents$"+_r,Iy="__reactListeners$"+_r,ky="__reactHandles$"+_r;function Aa(e){var t=e[Pt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[_t]||a[Pt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=If(e);e!==null;){if(a=e[Pt])return a;e=If(e)}return t}e=a,a=e.parentNode}return null}function Zo(e){return e=e[Pt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function yr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Dn(e){return e[Uo]||null}var _s=[],wr=-1;function ya(e){return{current:e}}function G(e){0>wr||(e.current=_s[wr],_s[wr]=null,wr--)}function W(e,t){wr++,_s[wr]=e.current,e.current=t}var xa={},Ce=ya(xa),Ne=ya(!1),ja=xa;function Ar(e,t){var a=e.type.contextTypes;if(!a)return xa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function hn(){G(Ne),G(Ce)}function kf(e,t,a){if(Ce.current!==xa)throw Error(C(168));W(Ce,t),W(Ne,a)}function Yp(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,fb(e)||"Unknown",o));return Z({},a,r)}function vn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xa,ja=Ce.current,W(Ce,e),W(Ne,Ne.current),!0}function Pf(e,t,a){var r=e.stateNode;if(!r)throw Error(C(169));a?(e=Yp(e,t,ja),r.__reactInternalMemoizedMergedChildContext=e,G(Ne),G(Ce),W(Ce,e)):G(Ne),W(Ne,a)}var Bt=null,Bn=!1,ns=!1;function Kp(e){Bt===null?Bt=[e]:Bt.push(e)}function Py(e){Bn=!0,Kp(e)}function wa(){if(!ns&&Bt!==null){ns=!0;var e=0,t=N;try{var a=Bt;for(N=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}Bt=null,Bn=!1}catch(o){throw Bt!==null&&(Bt=Bt.slice(e+1)),wp(gu,wa),o}finally{N=t,ns=!1}}return null}var Lr=[],Sr=0,xn=null,bn=0,et=[],tt=0,Na=null,Ft=1,Ot="";function Ma(e,t){Lr[Sr++]=bn,Lr[Sr++]=xn,xn=e,bn=t}function Qp(e,t,a){et[tt++]=Ft,et[tt++]=Ot,et[tt++]=Na,Na=e;var r=Ft;e=Ot;var o=32-ht(r)-1;r&=~(1<<o),a+=1;var i=32-ht(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,Ft=1<<32-ht(t)+o|a<<o|r,Ot=i+e}else Ft=1<<i|a<<o|r,Ot=e}function Su(e){e.return!==null&&(Ma(e,1),Qp(e,1,0))}function Cu(e){for(;e===xn;)xn=Lr[--Sr],Lr[Sr]=null,bn=Lr[--Sr],Lr[Sr]=null;for(;e===Na;)Na=et[--tt],et[tt]=null,Ot=et[--tt],et[tt]=null,Ft=et[--tt],et[tt]=null}var Ve=null,We=null,X=!1,mt=null;function Zp(e,t){var a=at(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Tf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=fa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Na!==null?{id:Ft,overflow:Ot}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=at(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ve=e,We=null,!0):!1;default:return!1}}function Hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(X){var t=We;if(t){var a=t;if(!Tf(e,t)){if(Hs(e))throw Error(C(418));t=fa(a.nextSibling);var r=Ve;t&&Tf(e,t)?Zp(r,a):(e.flags=e.flags&-4097|2,X=!1,Ve=e)}}else{if(Hs(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,Ve=e}}}function Rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Wi(e){if(e!==Ve)return!1;if(!X)return Rf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Os(e.type,e.memoizedProps)),t&&(t=We)){if(Hs(e))throw Jp(),Error(C(418));for(;t;)Zp(e,t),t=fa(t.nextSibling)}if(Rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){We=fa(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?fa(e.stateNode.nextSibling):null;return!0}function Jp(){for(var e=We;e;)e=fa(e.nextSibling)}function Dr(){We=Ve=null,X=!1}function Iu(e){mt===null?mt=[e]:mt.push(e)}var Ty=qt.ReactCurrentBatchConfig;function ho(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(C(309));var r=a.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!a._owner)throw Error(C(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function $f(e){var t=e._init;return t(e._payload)}function eg(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=ha(g,f),g.index=0,g.sibling=null,g}function i(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,v,S){return f===null||f.tag!==6?(f=ps(v,g.mode,S),f.return=g,f):(f=o(f,v),f.return=g,f)}function u(g,f,v,S){var P=v.type;return P===hr?p(g,f,v.props.children,S,v.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ra&&$f(P)===f.type)?(S=o(f,v.props),S.ref=ho(g,f,v),S.return=g,S):(S=nn(v.type,v.key,v.props,null,g.mode,S),S.ref=ho(g,f,v),S.return=g,S)}function d(g,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=gs(v,g.mode,S),f.return=g,f):(f=o(f,v.children||[]),f.return=g,f)}function p(g,f,v,S,P){return f===null||f.tag!==7?(f=Oa(v,g.mode,S,P),f.return=g,f):(f=o(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ps(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ei:return v=nn(f.type,f.key,f.props,null,g.mode,v),v.ref=ho(g,null,f),v.return=g,v;case mr:return f=gs(f,g.mode,v),f.return=g,f;case ra:var S=f._init;return h(g,S(f._payload),v)}if(wo(f)||fo(f))return f=Oa(f,g.mode,v,null),f.return=g,f;Vi(g,f)}return null}function x(g,f,v,S){var P=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(g,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ei:return v.key===P?u(g,f,v,S):null;case mr:return v.key===P?d(g,f,v,S):null;case ra:return P=v._init,x(g,f,P(v._payload),S)}if(wo(v)||fo(v))return P!==null?null:p(g,f,v,S,null);Vi(g,v)}return null}function w(g,f,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ei:return g=g.get(S.key===null?v:S.key)||null,u(f,g,S,P);case mr:return g=g.get(S.key===null?v:S.key)||null,d(f,g,S,P);case ra:var R=S._init;return w(g,f,v,R(S._payload),P)}if(wo(S)||fo(S))return g=g.get(v)||null,p(f,g,S,P,null);Vi(f,S)}return null}function b(g,f,v,S){for(var P=null,R=null,k=f,T=f=0,U=null;k!==null&&T<v.length;T++){k.index>T?(U=k,k=null):U=k.sibling;var A=x(g,k,v[T],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A,k=U}if(T===v.length)return a(g,k),X&&Ma(g,T),P;if(k===null){for(;T<v.length;T++)k=h(g,v[T],S),k!==null&&(f=i(k,f,T),R===null?P=k:R.sibling=k,R=k);return X&&Ma(g,T),P}for(k=r(g,k);T<v.length;T++)U=w(k,g,T,v[T],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?T:U.key),f=i(U,f,T),R===null?P=U:R.sibling=U,R=U);return e&&k.forEach(function(re){return t(g,re)}),X&&Ma(g,T),P}function y(g,f,v,S){var P=fo(v);if(typeof P!="function")throw Error(C(150));if(v=P.call(v),v==null)throw Error(C(151));for(var R=P=null,k=f,T=f=0,U=null,A=v.next();k!==null&&!A.done;T++,A=v.next()){k.index>T?(U=k,k=null):U=k.sibling;var re=x(g,k,A.value,S);if(re===null){k===null&&(k=U);break}e&&k&&re.alternate===null&&t(g,k),f=i(re,f,T),R===null?P=re:R.sibling=re,R=re,k=U}if(A.done)return a(g,k),X&&Ma(g,T),P;if(k===null){for(;!A.done;T++,A=v.next())A=h(g,A.value,S),A!==null&&(f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return X&&Ma(g,T),P}for(k=r(g,k);!A.done;T++,A=v.next())A=w(k,g,T,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return e&&k.forEach(function(Ra){return t(g,Ra)}),X&&Ma(g,T),P}function M(g,f,v,S){if(typeof v=="object"&&v!==null&&v.type===hr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ei:e:{for(var P=v.key,R=f;R!==null;){if(R.key===P){if(P=v.type,P===hr){if(R.tag===7){a(g,R.sibling),f=o(R,v.props.children),f.return=g,g=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ra&&$f(P)===R.type){a(g,R.sibling),f=o(R,v.props),f.ref=ho(g,R,v),f.return=g,g=f;break e}a(g,R);break}else t(g,R);R=R.sibling}v.type===hr?(f=Oa(v.props.children,g.mode,S,v.key),f.return=g,g=f):(S=nn(v.type,v.key,v.props,null,g.mode,S),S.ref=ho(g,f,v),S.return=g,g=S)}return n(g);case mr:e:{for(R=v.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){a(g,f.sibling),f=o(f,v.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=gs(v,g.mode,S),f.return=g,g=f}return n(g);case ra:return R=v._init,M(g,f,R(v._payload),S)}if(wo(v))return b(g,f,v,S);if(fo(v))return y(g,f,v,S);Vi(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,v),f.return=g,g=f):(a(g,f),f=ps(v,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return M}var Br=eg(!0),tg=eg(!1),yn=ya(null),wn=null,Cr=null,ku=null;function Pu(){ku=Cr=wn=null}function Tu(e){var t=yn.current;G(yn),e._currentValue=t}function qs(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Er(e,t){wn=e,ku=Cr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function ot(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},Cr===null){if(wn===null)throw Error(C(308));Cr=e,wn.dependencies={lanes:0,firstContext:e}}else Cr=Cr.next=e;return t}var Da=null;function Ru(e){Da===null?Da=[e]:Da.push(e)}function ag(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Ru(t)):(a.next=o.next,o.next=a),t.interleaved=a,Ht(e,r)}function Ht(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var oa=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function pa(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Ht(e,a)}return o=r.interleaved,o===null?(t.next=t,Ru(r)):(t.next=o.next,o.next=t),r.interleaved=t,Ht(e,a)}function Ji(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,mu(e,a)}}function Ef(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Ln(e,t,a,r){var o=e.updateQueue;oa=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var x=s.lane,w=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,y=s;switch(x=t,w=a,y.tag){case 1:if(b=y.payload,typeof b=="function"){h=b.call(w,h,x);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,x=typeof b=="function"?b.call(w,h,x):b,x==null)break e;h=Z({},h,x);break e;case 2:oa=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else w={eventTime:w,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=w,u=h):p=p.next=w,n|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ha|=n,e.lanes=n,e.memoizedState=h}}function Mf(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Jo={},Rt=ya(Jo),qo=ya(Jo),Wo=ya(Jo);function Ba(e){if(e===Jo)throw Error(C(174));return e}function Eu(e,t){switch(W(Wo,t),W(qo,e),W(Rt,Jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}G(Rt),W(Rt,t)}function Fr(){G(Rt),G(qo),G(Wo)}function og(e){Ba(Wo.current);var t=Ba(Rt.current),a=Cs(t,e.type);t!==a&&(W(qo,e),W(Rt,a))}function Mu(e){qo.current===e&&(G(Rt),G(qo))}var K=ya(0);function Sn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ls=[];function zu(){for(var e=0;e<ls.length;e++)ls[e]._workInProgressVersionPrimary=null;ls.length=0}var en=qt.ReactCurrentDispatcher,ss=qt.ReactCurrentBatchConfig,_a=0,Q=null,se=null,ce=null,Cn=!1,Ro=!1,Vo=0,Ry=0;function we(){throw Error(C(321))}function Au(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!xt(e[a],t[a]))return!1;return!0}function Du(e,t,a,r,o,i){if(_a=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,en.current=e===null||e.memoizedState===null?zy:Ay,e=a(r,o),Ro){i=0;do{if(Ro=!1,Vo=0,25<=i)throw Error(C(301));i+=1,ce=se=null,t.updateQueue=null,en.current=Dy,e=a(r,o)}while(Ro)}if(en.current=In,t=se!==null&&se.next!==null,_a=0,ce=se=Q=null,Cn=!1,t)throw Error(C(300));return e}function Bu(){var e=Vo!==0;return Vo=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?Q.memoizedState=ce=e:ce=ce.next=e,ce}function it(){if(se===null){var e=Q.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ce===null?Q.memoizedState:ce.next;if(t!==null)ce=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ce===null?Q.memoizedState=ce=e:ce=ce.next=e}return ce}function Go(e,t){return typeof t=="function"?t(e):t}function us(e){var t=it(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((_a&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,Q.lanes|=p,Ha|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,xt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,Q.lanes|=i,Ha|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function ds(e){var t=it(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);xt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function ig(){}function ng(e,t){var a=Q,r=it(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,Fu(ug.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(a.flags|=2048,Xo(9,sg.bind(null,a,r,o,t),void 0,null),fe===null)throw Error(C(349));(_a&30)!==0||lg(a,t,o)}return o}function lg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function sg(e,t,a,r){t.value=a,t.getSnapshot=r,dg(t)&&cg(e)}function ug(e,t,a){return a(function(){dg(t)&&cg(e)})}function dg(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!xt(e,a)}catch{return!0}}function cg(e){var t=Ht(e,1);t!==null&&vt(t,e,1,-1)}function zf(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t.queue=e,e=e.dispatch=My.bind(null,Q,e),[t.memoizedState,e]}function Xo(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=Q.updateQueue,t===null?(t={lastEffect:null,stores:null},Q.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function fg(){return it().memoizedState}function tn(e,t,a,r){var o=kt();Q.flags|=e,o.memoizedState=Xo(1|t,a,void 0,r===void 0?null:r)}function Fn(e,t,a,r){var o=it();r=r===void 0?null:r;var i=void 0;if(se!==null){var n=se.memoizedState;if(i=n.destroy,r!==null&&Au(r,n.deps)){o.memoizedState=Xo(t,a,i,r);return}}Q.flags|=e,o.memoizedState=Xo(1|t,a,i,r)}function Af(e,t){return tn(8390656,8,e,t)}function Fu(e,t){return Fn(2048,8,e,t)}function pg(e,t){return Fn(4,2,e,t)}function gg(e,t){return Fn(4,4,e,t)}function mg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hg(e,t,a){return a=a!=null?a.concat([e]):null,Fn(4,4,mg.bind(null,t,e),a)}function Ou(){}function vg(e,t){var a=it();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function xg(e,t){var a=it();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Au(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function bg(e,t,a){return(_a&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=a):(xt(a,t)||(a=Cp(),Q.lanes|=a,Ha|=a,e.baseState=!0),t)}function $y(e,t){var a=N;N=a!==0&&4>a?a:4,e(!0);var r=ss.transition;ss.transition={};try{e(!1),t()}finally{N=a,ss.transition=r}}function yg(){return it().memoizedState}function Ey(e,t,a){var r=ma(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},wg(e))Lg(t,a);else if(a=ag(e,t,a,r),a!==null){var o=Re();vt(a,e,r,o),Sg(a,t,r)}}function My(e,t,a){var r=ma(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(wg(e))Lg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,xt(s,n)){var u=t.interleaved;u===null?(o.next=o,Ru(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=ag(e,t,o,r),a!==null&&(o=Re(),vt(a,e,r,o),Sg(a,t,r))}}function wg(e){var t=e.alternate;return e===Q||t!==null&&t===Q}function Lg(e,t){Ro=Cn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Sg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,mu(e,a)}}var In={readContext:ot,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},zy={readContext:ot,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:Af,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,tn(4194308,4,mg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return tn(4194308,4,e,t)},useInsertionEffect:function(e,t){return tn(4,2,e,t)},useMemo:function(e,t){var a=kt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=kt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ey.bind(null,Q,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:zf,useDebugValue:Ou,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=zf(!1),t=e[0];return e=$y.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=Q,o=kt();if(X){if(a===void 0)throw Error(C(407));a=a()}else{if(a=t(),fe===null)throw Error(C(349));(_a&30)!==0||lg(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,Af(ug.bind(null,r,i,e),[e]),r.flags|=2048,Xo(9,sg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=kt(),t=fe.identifierPrefix;if(X){var a=Ot,r=Ft;a=(r&~(1<<32-ht(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Vo++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=Ry++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ay={readContext:ot,useCallback:vg,useContext:ot,useEffect:Fu,useImperativeHandle:hg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:xg,useReducer:us,useRef:fg,useState:function(){return us(Go)},useDebugValue:Ou,useDeferredValue:function(e){var t=it();return bg(t,se.memoizedState,e)},useTransition:function(){var e=us(Go)[0],t=it().memoizedState;return[e,t]},useMutableSource:ig,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1},Dy={readContext:ot,useCallback:vg,useContext:ot,useEffect:Fu,useImperativeHandle:hg,useInsertionEffect:pg,useLayoutEffect:gg,useMemo:xg,useReducer:ds,useRef:fg,useState:function(){return ds(Go)},useDebugValue:Ou,useDeferredValue:function(e){var t=it();return se===null?t.memoizedState=e:bg(t,se.memoizedState,e)},useTransition:function(){var e=ds(Go)[0],t=it().memoizedState;return[e,t]},useMutableSource:ig,useSyncExternalStore:ng,useId:yg,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function Ws(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var On={isMounted:function(e){return(e=e._reactInternals)?Wa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Re(),o=ma(e),i=jt(r,o);i.payload=t,a!=null&&(i.callback=a),t=pa(e,i,o),t!==null&&(vt(t,e,o,r),Ji(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Re(),o=ma(e),i=jt(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=pa(e,i,o),t!==null&&(vt(t,e,o,r),Ji(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Re(),r=ma(e),o=jt(a,r);o.tag=2,t!=null&&(o.callback=t),t=pa(e,o,r),t!==null&&(vt(t,e,r,a),Ji(t,e,r))}};function Df(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!No(a,r)||!No(o,i):!0}function Cg(e,t,a){var r=!1,o=xa,i=t.contextType;return typeof i=="object"&&i!==null?i=ot(i):(o=_e(t)?ja:Ce.current,r=t.contextTypes,i=(r=r!=null)?Ar(e,o):xa),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=On,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Bf(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&On.enqueueReplaceState(t,t.state,null)}function Vs(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},$u(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ot(i):(i=_e(t)?ja:Ce.current,o.context=Ar(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ws(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&On.enqueueReplaceState(o,o.state,null),Ln(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Or(e,t){try{var a="",r=t;do a+=cb(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function cs(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Gs(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var By=typeof WeakMap=="function"?WeakMap:Map;function Ig(e,t,a){a=jt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){Pn||(Pn=!0,ru=r),Gs(e,t)},a}function kg(e,t,a){a=jt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){Gs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Gs(e,t),typeof r!="function"&&(ga===null?ga=new Set([this]):ga.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function Ff(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new By;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=Ky.bind(null,e,t,a),t.then(e,e))}function Of(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function jf(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=jt(-1,1),t.tag=2,pa(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Fy=qt.ReactCurrentOwner,je=!1;function Te(e,t,a,r){t.child=e===null?tg(t,null,a,r):Br(t,e.child,a,r)}function Nf(e,t,a,r,o){a=a.render;var i=t.ref;return Er(t,o),r=Du(e,t,a,r,i,o),a=Bu(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(X&&a&&Su(t),t.flags|=1,Te(e,t,r,o),t.child)}function _f(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Pg(e,t,i,r,o)):(e=nn(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:No,a(n,r)&&e.ref===t.ref)return Ut(e,t,o)}return t.flags|=1,e=ha(i,r),e.ref=t.ref,e.return=t,t.child=e}function Pg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(No(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Ut(e,t,o)}return Xs(e,t,a,r,o)}function Tg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(kr,qe),qe|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(kr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W(kr,qe),qe|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W(kr,qe),qe|=r;return Te(e,t,o,a),t.child}function Rg(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Xs(e,t,a,r,o){var i=_e(a)?ja:Ce.current;return i=Ar(t,i),Er(t,o),a=Du(e,t,a,r,i,o),r=Bu(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ut(e,t,o)):(X&&r&&Su(t),t.flags|=1,Te(e,t,a,o),t.child)}function Hf(e,t,a,r,o){if(_e(a)){var i=!0;vn(t)}else i=!1;if(Er(t,o),t.stateNode===null)an(e,t),Cg(t,a,r),Vs(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=ot(d):(d=_e(a)?ja:Ce.current,d=Ar(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&Bf(t,n,r,d),oa=!1;var x=t.memoizedState;n.state=x,Ln(t,r,n,o),u=t.memoizedState,s!==r||x!==u||Ne.current||oa?(typeof p=="function"&&(Ws(t,a,p,r),u=t.memoizedState),(s=oa||Df(t,a,s,r,x,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,rg(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:pt(t.type,s),n.props=d,h=t.pendingProps,x=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=ot(u):(u=_e(a)?ja:Ce.current,u=Ar(t,u));var w=a.getDerivedStateFromProps;(p=typeof w=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||x!==u)&&Bf(t,n,r,u),oa=!1,x=t.memoizedState,n.state=x,Ln(t,r,n,o);var b=t.memoizedState;s!==h||x!==b||Ne.current||oa?(typeof w=="function"&&(Ws(t,a,w,r),b=t.memoizedState),(d=oa||Df(t,a,d,r,x,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Ys(e,t,a,r,i,o)}function Ys(e,t,a,r,o,i){Rg(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Pf(t,a,!1),Ut(e,t,i);r=t.stateNode,Fy.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=Br(t,e.child,null,i),t.child=Br(t,null,s,i)):Te(e,t,s,i),t.memoizedState=r.state,o&&Pf(t,a,!0),t.child}function $g(e){var t=e.stateNode;t.pendingContext?kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&kf(e,t.context,!1),Eu(e,t.containerInfo)}function Uf(e,t,a,r,o){return Dr(),Iu(o),t.flags|=256,Te(e,t,a,r),t.child}var Ks={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Eg(e,t,a){var r=t.pendingProps,o=K.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(K,o&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=_n(n,r,0,null),e=Oa(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Qs(a),t.memoizedState=Ks,e):ju(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Oy(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ha(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ha(s,i):(i=Oa(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?Qs(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=Ks,r}return i=e.child,e=i.sibling,r=ha(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=_n({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Gi(e,t,a,r){return r!==null&&Iu(r),Br(t,e.child,null,a),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oy(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=cs(Error(C(422))),Gi(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=_n({mode:"visible",children:r.children},o,0,null),i=Oa(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Br(t,e.child,null,n),t.child.memoizedState=Qs(n),t.memoizedState=Ks,i);if((t.mode&1)===0)return Gi(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=cs(i,r,void 0),Gi(e,t,n,r)}if(s=(n&e.childLanes)!==0,je||s){if(r=fe,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Ht(e,o),vt(r,e,o,-1))}return Wu(),r=cs(Error(C(421))),Gi(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Qy.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=fa(o.nextSibling),Ve=t,X=!0,mt=null,e!==null&&(et[tt++]=Ft,et[tt++]=Ot,et[tt++]=Na,Ft=e.id,Ot=e.overflow,Na=t),t=ju(t,r.children),t.flags|=4096,t)}function qf(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qs(e.return,t,a)}function fs(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function Mg(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Te(e,t,r.children,a),r=K.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qf(e,a,t);else if(e.tag===19)qf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(K,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&Sn(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),fs(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Sn(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}fs(t,!0,a,null,i);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function an(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,a=ha(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ha(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jy(e,t,a){switch(t.tag){case 3:$g(t),Dr();break;case 5:og(t);break;case 1:_e(t.type)&&vn(t);break;case 4:Eu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(yn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(K,K.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?Eg(e,t,a):(W(K,K.current&1),e=Ut(e,t,a),e!==null?e.sibling:null);W(K,K.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Mg(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Tg(e,t,a)}return Ut(e,t,a)}var zg,Zs,Ag,Dg;zg=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Zs=function(){};Ag=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ba(Rt.current);var i=null;switch(a){case"input":o=ys(e,o),r=ys(e,r),i=[];break;case"select":o=Z({},o,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":o=Ss(e,o),r=Ss(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=mn)}Is(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Dg=function(e,t,a,r){a!==r&&(t.flags|=4)};function vo(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Ny(e,t,a){var r=t.pendingProps;switch(Cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return _e(t.type)&&hn(),Le(t),null;case 3:return r=t.stateNode,Fr(),G(Ne),G(Ce),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(nu(mt),mt=null))),Zs(e,t),Le(t),null;case 5:Mu(t);var o=Ba(Wo.current);if(a=t.type,e!==null&&t.stateNode!=null)Ag(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Le(t),null}if(e=Ba(Rt.current),Wi(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Pt]=t,r[Uo]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<So.length;o++)V(So[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Qc(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Jc(r,i),V("invalid",r)}Is(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&qi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&qi(r.textContent,s,e),o=["children",""+s]):zo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Mi(r),Zc(r,i,!0);break;case"textarea":Mi(r),ef(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=mn)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=up(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Pt]=t,e[Uo]=r,zg(e,t,!1,!1),t.stateNode=e;e:{switch(n=ks(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<So.length;o++)V(So[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Qc(e,r),o=ys(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Z({},r,{value:void 0}),V("invalid",e);break;case"textarea":Jc(e,r),o=Ss(e,r),V("invalid",e);break;default:o=r}Is(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?fp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dp(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Ao(e,u):typeof u=="number"&&Ao(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&uu(e,i,u,n))}switch(a){case"input":Mi(e),Zc(e,r,!1);break;case"textarea":Mi(e),ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+va(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Pr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Pr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mn)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Dg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(a=Ba(Wo.current),Ba(Rt.current),Wi(t)){if(r=t.stateNode,a=t.memoizedProps,r[Pt]=t,(i=r.nodeValue!==a)&&(e=Ve,e!==null))switch(e.tag){case 3:qi(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&qi(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Le(t),null;case 13:if(G(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jp(),Dr(),t.flags|=98560,i=!1;else if(i=Wi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Pt]=t}else Dr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else mt!==null&&(nu(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(K.current&1)!==0?ue===0&&(ue=3):Wu())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Fr(),Zs(e,t),e===null&&_o(t.stateNode.containerInfo),Le(t),null;case 10:return Tu(t.type._context),Le(t),null;case 17:return _e(t.type)&&hn(),Le(t),null;case 19:if(G(K),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)vo(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Sn(e),n!==null){for(t.flags|=128,vo(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>jr&&(t.flags|=128,r=!0,vo(i,!1),t.lanes=4194304)}else{if(!r)if(e=Sn(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),vo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Le(t),null}else 2*oe()-i.renderingStartTime>jr&&a!==1073741824&&(t.flags|=128,r=!0,vo(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,a=K.current,W(K,r?a&1|2:a&1),t):(Le(t),null);case 22:case 23:return qu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function _y(e,t){switch(Cu(t),t.tag){case 1:return _e(t.type)&&hn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fr(),G(Ne),G(Ce),zu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Mu(t),null;case 13:if(G(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Dr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(K),null;case 4:return Fr(),null;case 10:return Tu(t.type._context),null;case 22:case 23:return qu(),null;case 24:return null;default:return null}}var Xi=!1,Se=!1,Hy=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ir(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){ee(e,t,r)}else a.current=null}function Js(e,t,a){try{a()}catch(r){ee(e,t,r)}}var Wf=!1;function Uy(e,t){if(Bs=fn,e=Np(),Lu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,x=null;t:for(;;){for(var w;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(w=h.firstChild)!==null;)x=h,h=w;for(;;){if(h===e)break t;if(x===a&&++d===o&&(s=n),x===i&&++p===r&&(u=n),(w=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=w}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fs={focusedElem:e,selectionRange:a},fn=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,M=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:pt(t.type,y),M);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){ee(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=Wf,Wf=!1,b}function $o(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Js(t,a,i)}o=o.next}while(o!==r)}}function jn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function eu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function Bg(e){var t=e.alternate;t!==null&&(e.alternate=null,Bg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[Uo],delete t[Ns],delete t[Iy],delete t[ky])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fg(e){return e.tag===5||e.tag===3||e.tag===4}function Vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=mn));else if(r!==4&&(e=e.child,e!==null))for(tu(e,t,a),e=e.sibling;e!==null;)tu(e,t,a),e=e.sibling}function au(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(au(e,t,a),e=e.sibling;e!==null;)au(e,t,a),e=e.sibling}var pe=null,gt=!1;function aa(e,t,a){for(a=a.child;a!==null;)Og(e,t,a),a=a.sibling}function Og(e,t,a){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(En,a)}catch{}switch(a.tag){case 5:Se||Ir(a,t);case 6:var r=pe,o=gt;pe=null,aa(e,t,a),pe=r,gt=o,pe!==null&&(gt?(e=pe,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):pe.removeChild(a.stateNode));break;case 18:pe!==null&&(gt?(e=pe,a=a.stateNode,e.nodeType===8?is(e.parentNode,a):e.nodeType===1&&is(e,a),Oo(e)):is(pe,a.stateNode));break;case 4:r=pe,o=gt,pe=a.stateNode.containerInfo,gt=!0,aa(e,t,a),pe=r,gt=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&Js(a,t,n),o=o.next}while(o!==r)}aa(e,t,a);break;case 1:if(!Se&&(Ir(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){ee(a,t,s)}aa(e,t,a);break;case 21:aa(e,t,a);break;case 22:a.mode&1?(Se=(r=Se)||a.memoizedState!==null,aa(e,t,a),Se=r):aa(e,t,a);break;default:aa(e,t,a)}}function Gf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Hy),t.forEach(function(r){var o=Zy.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function ft(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,gt=!1;break e;case 3:pe=s.stateNode.containerInfo,gt=!0;break e;case 4:pe=s.stateNode.containerInfo,gt=!0;break e}s=s.return}if(pe===null)throw Error(C(160));Og(i,n,o),pe=null,gt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){ee(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jg(t,e),t=t.sibling}function jg(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),It(e),r&4){try{$o(3,e,e.return),jn(3,e)}catch(y){ee(e,e.return,y)}try{$o(5,e,e.return)}catch(y){ee(e,e.return,y)}}break;case 1:ft(t,e),It(e),r&512&&a!==null&&Ir(a,a.return);break;case 5:if(ft(t,e),It(e),r&512&&a!==null&&Ir(a,a.return),e.flags&32){var o=e.stateNode;try{Ao(o,"")}catch(y){ee(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&lp(o,i),ks(s,n);var d=ks(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?fp(o,h):p==="dangerouslySetInnerHTML"?dp(o,h):p==="children"?Ao(o,h):uu(o,p,h,d)}switch(s){case"input":ws(o,i);break;case"textarea":sp(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Pr(o,!!i.multiple,w,!1):x!==!!i.multiple&&(i.defaultValue!=null?Pr(o,!!i.multiple,i.defaultValue,!0):Pr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Uo]=i}catch(y){ee(e,e.return,y)}}break;case 6:if(ft(t,e),It(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){ee(e,e.return,y)}}break;case 3:if(ft(t,e),It(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(t.containerInfo)}catch(y){ee(e,e.return,y)}break;case 4:ft(t,e),It(e);break;case 13:ft(t,e),It(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Hu=oe())),r&4&&Gf(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Se=(d=Se)||p,ft(t,e),Se=d):ft(t,e),It(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for($=e,p=e.child;p!==null;){for(h=$=p;$!==null;){switch(x=$,w=x.child,x.tag){case 0:case 11:case 14:case 15:$o(4,x,x.return);break;case 1:Ir(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,a=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){ee(r,a,y)}}break;case 5:Ir(x,x.return);break;case 22:if(x.memoizedState!==null){Yf(h);continue}}w!==null?(w.return=x,$=w):Yf(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=cp("display",n))}catch(y){ee(e,e.return,y)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(y){ee(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ft(t,e),It(e),r&4&&Gf(e);break;case 21:break;default:ft(t,e),It(e)}}function It(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Fg(a)){var r=a;break e}a=a.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ao(o,""),r.flags&=-33);var i=Vf(e);au(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=Vf(e);tu(e,s,n);break;default:throw Error(C(161))}}catch(u){ee(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qy(e,t,a){$=e,Ng(e,t,a)}function Ng(e,t,a){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||Xi;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Se;s=Xi;var d=Se;if(Xi=n,(Se=u)&&!d)for($=o;$!==null;)n=$,u=n.child,n.tag===22&&n.memoizedState!==null?Kf(o):u!==null?(u.return=n,$=u):Kf(o);for(;i!==null;)$=i,Ng(i,t,a),i=i.sibling;$=o,Xi=s,Se=d}Xf(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):Xf(e,t,a)}}function Xf(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Se||jn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:pt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Mf(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Mf(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Oo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Se||t.flags&512&&eu(t)}catch(x){ee(t,t.return,x)}}if(t===e){$=null;break}if(a=t.sibling,a!==null){a.return=t.return,$=a;break}$=t.return}}function Yf(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}function Kf(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{jn(4,t)}catch(u){ee(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){ee(t,o,u)}}var i=t.return;try{eu(t)}catch(u){ee(t,i,u)}break;case 5:var n=t.return;try{eu(t)}catch(u){ee(t,n,u)}}}catch(u){ee(t,t.return,u)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var Wy=Math.ceil,kn=qt.ReactCurrentDispatcher,Nu=qt.ReactCurrentOwner,rt=qt.ReactCurrentBatchConfig,F=0,fe=null,ne=null,ge=0,qe=0,kr=ya(0),ue=0,Yo=null,Ha=0,Nn=0,_u=0,Eo=null,Oe=null,Hu=0,jr=1/0,Dt=null,Pn=!1,ru=null,ga=null,Yi=!1,sa=null,Tn=0,Mo=0,ou=null,rn=-1,on=0;function Re(){return(F&6)!==0?oe():rn!==-1?rn:rn=oe()}function ma(e){return(e.mode&1)===0?1:(F&2)!==0&&ge!==0?ge&-ge:Ty.transition!==null?(on===0&&(on=Cp()),on):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ep(e.type)),e)}function vt(e,t,a,r){if(50<Mo)throw Mo=0,ou=null,Error(C(185));Ko(e,a,r),((F&2)===0||e!==fe)&&(e===fe&&((F&2)===0&&(Nn|=a),ue===4&&na(e,ge)),He(e,r),a===1&&F===0&&(t.mode&1)===0&&(jr=oe()+500,Bn&&wa()))}function He(e,t){var a=e.callbackNode;$b(e,t);var r=cn(e,e===fe?ge:0);if(r===0)a!==null&&rf(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&rf(a),t===1)e.tag===0?Py(Qf.bind(null,e)):Kp(Qf.bind(null,e)),Sy(function(){(F&6)===0&&wa()}),a=null;else{switch(Ip(r)){case 1:a=gu;break;case 4:a=Lp;break;case 16:a=dn;break;case 536870912:a=Sp;break;default:a=dn}a=Xg(a,_g.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function _g(e,t){if(rn=-1,on=0,(F&6)!==0)throw Error(C(327));var a=e.callbackNode;if(Mr()&&e.callbackNode!==a)return null;var r=cn(e,e===fe?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Rn(e,r);else{t=r;var o=F;F|=2;var i=Ug();(fe!==e||ge!==t)&&(Dt=null,jr=oe()+500,Fa(e,t));do try{Xy();break}catch(s){Hg(e,s)}while(!0);Pu(),kn.current=i,F=o,ne!==null?t=0:(fe=null,ge=0,t=ue)}if(t!==0){if(t===2&&(o=Es(e),o!==0&&(r=o,t=iu(e,o))),t===1)throw a=Yo,Fa(e,0),na(e,r),He(e,oe()),a;if(t===6)na(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Vy(o)&&(t=Rn(e,r),t===2&&(i=Es(e),i!==0&&(r=i,t=iu(e,i))),t===1))throw a=Yo,Fa(e,0),na(e,r),He(e,oe()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:za(e,Oe,Dt);break;case 3:if(na(e,r),(r&130023424)===r&&(t=Hu+500-oe(),10<t)){if(cn(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=js(za.bind(null,e,Oe,Dt),t);break}za(e,Oe,Dt);break;case 4:if(na(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-ht(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Wy(r/1960))-r,10<r){e.timeoutHandle=js(za.bind(null,e,Oe,Dt),r);break}za(e,Oe,Dt);break;case 5:za(e,Oe,Dt);break;default:throw Error(C(329))}}}return He(e,oe()),e.callbackNode===a?_g.bind(null,e):null}function iu(e,t){var a=Eo;return e.current.memoizedState.isDehydrated&&(Fa(e,t).flags|=256),e=Rn(e,t),e!==2&&(t=Oe,Oe=a,t!==null&&nu(t)),e}function nu(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Vy(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function na(e,t){for(t&=~_u,t&=~Nn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-ht(t),r=1<<a;e[a]=-1,t&=~r}}function Qf(e){if((F&6)!==0)throw Error(C(327));Mr();var t=cn(e,0);if((t&1)===0)return He(e,oe()),null;var a=Rn(e,t);if(e.tag!==0&&a===2){var r=Es(e);r!==0&&(t=r,a=iu(e,r))}if(a===1)throw a=Yo,Fa(e,0),na(e,t),He(e,oe()),a;if(a===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,za(e,Oe,Dt),He(e,oe()),null}function Uu(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(jr=oe()+500,Bn&&wa())}}function Ua(e){sa!==null&&sa.tag===0&&(F&6)===0&&Mr();var t=F;F|=1;var a=rt.transition,r=N;try{if(rt.transition=null,N=1,e)return e()}finally{N=r,rt.transition=a,F=t,(F&6)===0&&wa()}}function qu(){qe=kr.current,G(kr)}function Fa(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Ly(a)),ne!==null)for(a=ne.return;a!==null;){var r=a;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hn();break;case 3:Fr(),G(Ne),G(Ce),zu();break;case 5:Mu(r);break;case 4:Fr();break;case 13:G(K);break;case 19:G(K);break;case 10:Tu(r.type._context);break;case 22:case 23:qu()}a=a.return}if(fe=e,ne=e=ha(e.current,null),ge=qe=t,ue=0,Yo=null,_u=Nn=Ha=0,Oe=Eo=null,Da!==null){for(t=0;t<Da.length;t++)if(a=Da[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}Da=null}return e}function Hg(e,t){do{var a=ne;try{if(Pu(),en.current=In,Cn){for(var r=Q.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Cn=!1}if(_a=0,ce=se=Q=null,Ro=!1,Vo=0,Nu.current=null,a===null||a.return===null){ue=1,Yo=t,ne=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=Of(n);if(w!==null){w.flags&=-257,jf(w,n,s,i,t),w.mode&1&&Ff(i,d,t),t=w,u=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(u),t.updateQueue=y}else b.add(u);break e}else{if((t&1)===0){Ff(i,d,t),Wu();break e}u=Error(C(426))}}else if(X&&s.mode&1){var M=Of(n);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),jf(M,n,s,i,t),Iu(Or(u,s));break e}}i=u=Or(u,s),ue!==4&&(ue=2),Eo===null?Eo=[i]:Eo.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Ig(i,u,t);Ef(i,g);break e;case 1:s=u;var f=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ga===null||!ga.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=kg(i,s,t);Ef(i,S);break e}}i=i.return}while(i!==null)}Wg(a)}catch(P){t=P,ne===a&&a!==null&&(ne=a=a.return);continue}break}while(!0)}function Ug(){var e=kn.current;return kn.current=In,e===null?In:e}function Wu(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||(Ha&268435455)===0&&(Nn&268435455)===0||na(fe,ge)}function Rn(e,t){var a=F;F|=2;var r=Ug();(fe!==e||ge!==t)&&(Dt=null,Fa(e,t));do try{Gy();break}catch(o){Hg(e,o)}while(!0);if(Pu(),F=a,kn.current=r,ne!==null)throw Error(C(261));return fe=null,ge=0,ue}function Gy(){for(;ne!==null;)qg(ne)}function Xy(){for(;ne!==null&&!wb();)qg(ne)}function qg(e){var t=Gg(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Wg(e):ne=t,Nu.current=null}function Wg(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=Ny(a,t,qe),a!==null){ne=a;return}}else{if(a=_y(a,t),a!==null){a.flags&=32767,ne=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ne=null;return}}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ue===0&&(ue=5)}function za(e,t,a){var r=N,o=rt.transition;try{rt.transition=null,N=1,Yy(e,t,a,r)}finally{rt.transition=o,N=r}return null}function Yy(e,t,a,r){do Mr();while(sa!==null);if((F&6)!==0)throw Error(C(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Eb(e,i),e===fe&&(ne=fe=null,ge=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Yi||(Yi=!0,Xg(dn,function(){return Mr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=rt.transition,rt.transition=null;var n=N;N=1;var s=F;F|=4,Nu.current=null,Uy(e,a),jg(a,e),vy(Fs),fn=!!Bs,Fs=Bs=null,e.current=a,qy(a,e,o),Lb(),F=s,N=n,rt.transition=i}else e.current=a;if(Yi&&(Yi=!1,sa=e,Tn=o),i=e.pendingLanes,i===0&&(ga=null),Ib(a.stateNode,r),He(e,oe()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(Pn)throw Pn=!1,e=ru,ru=null,e;return(Tn&1)!==0&&e.tag!==0&&Mr(),i=e.pendingLanes,(i&1)!==0?e===ou?Mo++:(Mo=0,ou=e):Mo=0,wa(),null}function Mr(){if(sa!==null){var e=Ip(Tn),t=rt.transition,a=N;try{if(rt.transition=null,N=16>e?16:e,sa===null)var r=!1;else{if(e=sa,sa=null,Tn=0,(F&6)!==0)throw Error(C(331));var o=F;for(F|=4,$=e.current;$!==null;){var i=$,n=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:$o(8,p,i)}var h=p.child;if(h!==null)h.return=p,$=h;else for(;$!==null;){p=$;var x=p.sibling,w=p.return;if(Bg(p),p===d){$=null;break}if(x!==null){x.return=w,$=x;break}$=w}}}var b=i.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,$=n;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:$o(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var f=e.current;for($=f;$!==null;){n=$;var v=n.child;if((n.subtreeFlags&2064)!==0&&v!==null)v.return=n,$=v;else e:for(n=f;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:jn(9,s)}}catch(P){ee(s,s.return,P)}if(s===n){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(F=o,wa(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(En,e)}catch{}r=!0}return r}finally{N=a,rt.transition=t}}return!1}function Zf(e,t,a){t=Or(a,t),t=Ig(e,t,1),e=pa(e,t,1),t=Re(),e!==null&&(Ko(e,1,t),He(e,t))}function ee(e,t,a){if(e.tag===3)Zf(e,e,a);else for(;t!==null;){if(t.tag===3){Zf(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ga===null||!ga.has(r))){e=Or(a,e),e=kg(t,e,1),t=pa(t,e,1),e=Re(),t!==null&&(Ko(t,1,e),He(t,e));break}}t=t.return}}function Ky(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&a,fe===e&&(ge&a)===a&&(ue===4||ue===3&&(ge&130023424)===ge&&500>oe()-Hu?Fa(e,0):_u|=a),He(e,t)}function Vg(e,t){t===0&&((e.mode&1)===0?t=1:(t=Di,Di<<=1,(Di&130023424)===0&&(Di=4194304)));var a=Re();e=Ht(e,t),e!==null&&(Ko(e,t,a),He(e,a))}function Qy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vg(e,a)}function Zy(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Vg(e,a)}var Gg;Gg=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)je=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return je=!1,jy(e,t,a);je=(e.flags&131072)!==0}else je=!1,X&&(t.flags&1048576)!==0&&Qp(t,bn,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;an(e,t),e=t.pendingProps;var o=Ar(t,Ce.current);Er(t,a),o=Du(null,t,r,e,o,a);var i=Bu();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,vn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$u(t),o.updater=On,t.stateNode=o,o._reactInternals=t,Vs(t,r,e,a),t=Ys(null,t,r,!0,i,a)):(t.tag=0,X&&i&&Su(t),Te(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(an(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=e1(r),e=pt(r,e),o){case 0:t=Xs(null,t,r,e,a);break e;case 1:t=Hf(null,t,r,e,a);break e;case 11:t=Nf(null,t,r,e,a);break e;case 14:t=_f(null,t,r,pt(r.type,e),a);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Xs(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Hf(e,t,r,o,a);case 3:e:{if($g(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rg(e,t),Ln(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Or(Error(C(423)),t),t=Uf(e,t,r,a,o);break e}else if(r!==o){o=Or(Error(C(424)),t),t=Uf(e,t,r,a,o);break e}else for(We=fa(t.stateNode.containerInfo.firstChild),Ve=t,X=!0,mt=null,a=tg(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Dr(),r===o){t=Ut(e,t,a);break e}Te(e,t,r,a)}t=t.child}return t;case 5:return og(t),e===null&&Us(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Os(r,o)?n=null:i!==null&&Os(r,i)&&(t.flags|=32),Rg(e,t),Te(e,t,n,a),t.child;case 6:return e===null&&Us(t),null;case 13:return Eg(e,t,a);case 4:return Eu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Br(t,null,r,a):Te(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),Nf(e,t,r,o,a);case 7:return Te(e,t,t.pendingProps,a),t.child;case 8:return Te(e,t,t.pendingProps.children,a),t.child;case 12:return Te(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W(yn,r._currentValue),r._currentValue=n,i!==null)if(xt(i.value,n)){if(i.children===o.children&&!Ne.current){t=Ut(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jt(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),qs(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(C(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),qs(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Te(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Er(t,a),o=ot(o),r=r(o),t.flags|=1,Te(e,t,r,a),t.child;case 14:return r=t.type,o=pt(r,t.pendingProps),o=pt(r.type,o),_f(e,t,r,o,a);case 15:return Pg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:pt(r,o),an(e,t),t.tag=1,_e(r)?(e=!0,vn(t)):e=!1,Er(t,a),Cg(t,r,o),Vs(t,r,o,a),Ys(null,t,r,!0,e,a);case 19:return Mg(e,t,a);case 22:return Tg(e,t,a)}throw Error(C(156,t.tag))};function Xg(e,t){return wp(e,t)}function Jy(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,a,r){return new Jy(e,t,a,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function e1(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===fu)return 14}return 2}function ha(e,t){var a=e.alternate;return a===null?(a=at(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function nn(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")Vu(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case hr:return Oa(a.children,o,i,t);case du:n=8,o|=8;break;case hs:return e=at(12,a,t,o|2),e.elementType=hs,e.lanes=i,e;case vs:return e=at(13,a,t,o),e.elementType=vs,e.lanes=i,e;case xs:return e=at(19,a,t,o),e.elementType=xs,e.lanes=i,e;case op:return _n(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ap:n=10;break e;case rp:n=9;break e;case cu:n=11;break e;case fu:n=14;break e;case ra:n=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=at(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Oa(e,t,a,r){return e=at(7,e,r,t),e.lanes=a,e}function _n(e,t,a,r){return e=at(22,e,r,t),e.elementType=op,e.lanes=a,e.stateNode={isHidden:!1},e}function ps(e,t,a){return e=at(6,e,null,t),e.lanes=a,e}function gs(e,t,a){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function t1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Gu(e,t,a,r,o,i,n,s,u){return e=new t1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(i),e}function a1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function Yg(e){if(!e)return xa;e=e._reactInternals;e:{if(Wa(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var a=e.type;if(_e(a))return Yp(e,a,t)}return t}function Kg(e,t,a,r,o,i,n,s,u){return e=Gu(a,r,!0,e,o,i,n,s,u),e.context=Yg(null),a=e.current,r=Re(),o=ma(a),i=jt(r,o),i.callback=t??null,pa(a,i,o),e.current.lanes=o,Ko(e,o,r),He(e,r),e}function Hn(e,t,a,r){var o=t.current,i=Re(),n=ma(o);return a=Yg(a),t.context===null?t.context=a:t.pendingContext=a,t=jt(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=pa(o,t,n),e!==null&&(vt(e,o,n,i),Ji(e,o,n)),n}function $n(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Xu(e,t){Jf(e,t),(e=e.alternate)&&Jf(e,t)}function r1(){return null}var Qg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Un.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Hn(e,t,null,null)};Un.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ua(function(){Hn(null,e,null,null)}),t[_t]=null}};function Un(e){this._internalRoot=e}Un.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ia.length&&t!==0&&t<ia[a].priority;a++);ia.splice(a,0,e),a===0&&$p(e)}};function Ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ep(){}function o1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=$n(n);i.call(d)}}var n=Kg(t,r,e,0,null,!1,!1,"",ep);return e._reactRootContainer=n,e[_t]=n.current,_o(e.nodeType===8?e.parentNode:e),Ua(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=$n(u);s.call(d)}}var u=Gu(e,0,!1,null,null,!1,!1,"",ep);return e._reactRootContainer=u,e[_t]=u.current,_o(e.nodeType===8?e.parentNode:e),Ua(function(){Hn(t,u,a,r)}),u}function Wn(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=$n(n);s.call(u)}}Hn(t,n,e,o)}else n=o1(a,t,e,o,r);return $n(n)}kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Lo(t.pendingLanes);a!==0&&(mu(t,a|1),He(t,oe()),(F&6)===0&&(jr=oe()+500,wa()))}break;case 13:Ua(function(){var r=Ht(e,1);if(r!==null){var o=Re();vt(r,e,1,o)}}),Xu(e,1)}};hu=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var a=Re();vt(t,e,134217728,a)}Xu(e,134217728)}};Pp=function(e){if(e.tag===13){var t=ma(e),a=Ht(e,t);if(a!==null){var r=Re();vt(a,e,t,r)}Xu(e,t)}};Tp=function(){return N};Rp=function(e,t){var a=N;try{return N=e,t()}finally{N=a}};Ts=function(e,t,a){switch(t){case"input":if(ws(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Dn(r);if(!o)throw Error(C(90));np(r),ws(r,o)}}}break;case"textarea":sp(e,a);break;case"select":t=a.value,t!=null&&Pr(e,!!a.multiple,t,!1)}};mp=Uu;hp=Ua;var i1={usingClientEntryPoint:!1,Events:[Zo,yr,Dn,pp,gp,Uu]},xo={findFiberByHostInstance:Aa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n1={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bp(e),e===null?null:e.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||r1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bo.isDisabled&&bo.supportsFiber))try{En=bo.inject(n1),Tt=bo}catch{}var bo;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=i1;Ye.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(t))throw Error(C(200));return a1(e,t,null,a)};Ye.createRoot=function(e,t){if(!Ku(e))throw Error(C(299));var a=!1,r="",o=Qg;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Gu(e,1,!1,null,null,a,!1,r,o),e[_t]=t.current,_o(e.nodeType===8?e.parentNode:e),new Yu(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=bp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Ua(e)};Ye.hydrate=function(e,t,a){if(!qn(t))throw Error(C(200));return Wn(null,e,t,!0,a)};Ye.hydrateRoot=function(e,t,a){if(!Ku(e))throw Error(C(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=Qg;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Kg(t,null,e,1,a??null,o,!1,i,n),e[_t]=t.current,_o(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new Un(t)};Ye.render=function(e,t,a){if(!qn(t))throw Error(C(200));return Wn(null,e,t,!1,a)};Ye.unmountComponentAtNode=function(e){if(!qn(e))throw Error(C(40));return e._reactRootContainer?(Ua(function(){Wn(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ye.unstable_batchedUpdates=Uu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!qn(a))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Wn(e,t,a,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426"});var La=At((TC,em)=>{"use strict";function Jg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jg)}catch(e){console.error(e)}}Jg(),em.exports=Zg()});var am=At(Qu=>{"use strict";var tm=La();Qu.createRoot=tm.createRoot,Qu.hydrateRoot=tm.hydrateRoot;var RC});var ch=At(ll=>{"use strict";var J1=I(),ew=Symbol.for("react.element"),tw=Symbol.for("react.fragment"),aw=Object.prototype.hasOwnProperty,rw=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ow={key:!0,ref:!0,__self:!0,__source:!0};function dh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)aw.call(t,r)&&!ow.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ew,type:e,key:i,ref:n,props:o,_owner:rw.current}}ll.Fragment=tw;ll.jsx=dh;ll.jsxs=dh});var m=At((PI,fh)=>{"use strict";fh.exports=ch()});var F0=c(am(),1);var de=c(I());var _="-ms-",Va="-moz-",O="-webkit-",Vn="comm",Sa="rule",Hr="decl";var rm="@import";var om="@namespace",Gn="@keyframes";var im="@layer";var Zu=Math.abs,ei=String.fromCharCode,ti=Object.assign;function nm(e,t){return J(e,0)^45?(((t<<2^J(e,0))<<2^J(e,1))<<2^J(e,2))<<2^J(e,3):0}function Xn(e){return e.trim()}function bt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,a){return e.replace(t,a)}function Ur(e,t,a){return e.indexOf(t,a)}function J(e,t){return e.charCodeAt(t)|0}function yt(e,t,a){return e.slice(t,a)}function Ie(e){return e.length}function Yn(e){return e.length}function Ga(e,t){return t.push(e),e}function lm(e,t){return e.map(t).join("")}function Ju(e,t){return e.filter(function(a){return!bt(a,t)})}var Kn=1,qr=1,sm=0,nt=0,le=0,Vr="";function ai(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:Kn,column:qr,length:n,return:"",siblings:s}}function Wt(e,t){return ti(ai("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xa(e){for(;e.root;)e=Wt(e.root,{children:[e]});Ga(e,e.siblings)}function um(){return le}function dm(){return le=nt>0?J(Vr,--nt):0,qr--,le===10&&(qr=1,Kn--),le}function lt(){return le=nt<sm?J(Vr,nt++):0,qr++,le===10&&(qr=1,Kn++),le}function Vt(){return J(Vr,nt)}function ri(){return nt}function Qn(e,t){return yt(Vr,e,t)}function Wr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function cm(e){return Kn=qr=1,sm=Ie(Vr=e),nt=0,[]}function fm(e){return Vr="",e}function Zn(e){return Xn(Qn(nt-1,ed(e===91?e+2:e===40?e+1:e)))}function pm(e){for(;(le=Vt())&&le<33;)lt();return Wr(e)>2||Wr(le)>3?"":" "}function gm(e,t){for(;--t&&lt()&&!(le<48||le>102||le>57&&le<65||le>70&&le<97););return Qn(e,ri()+(t<6&&Vt()==32&&lt()==32))}function ed(e){for(;lt();)switch(le){case e:return nt;case 34:case 39:e!==34&&e!==39&&ed(le);break;case 40:e===41&&ed(e);break;case 92:lt();break}return nt}function mm(e,t){for(;lt()&&e+le!==57;)if(e+le===84&&Vt()===47)break;return"/*"+Qn(t,nt-1)+"*"+ei(e===47?e:lt())}function hm(e){for(;!Wr(Vt());)lt();return Qn(e,nt)}function bm(e){return fm(Jn("",null,null,null,[""],e=cm(e),0,[0],e))}function Jn(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,x=0,w=0,b=0,y=1,M=1,g=1,f=0,v="",S=o,P=i,R=r,k=v;M;)switch(b=f,f=lt()){case 40:if(b!=108&&J(k,h-1)==58){Ur(k+=z(Zn(f),"&","&\f"),"&\f",Zu(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Zn(f);break;case 9:case 10:case 13:case 32:k+=pm(b);break;case 92:k+=gm(ri()-1,7);continue;case 47:switch(Vt()){case 42:case 47:Ga(l1(mm(lt(),ri()),t,a,u),u),(Wr(b||1)==5||Wr(Vt()||1)==5)&&Ie(k)&&yt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:s[d++]=Ie(k)*g;case 125*y:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+p:g==-1&&(k=z(k,/\f/g,"")),w>0&&(Ie(k)-h||y===0&&b===47)&&Ga(w>32?xm(k+";",r,a,h-1,u):xm(z(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(Ga(R=vm(k,t,a,d,p,o,s,v,S=[],P=[],h,i),i),f===123)if(p===0)Jn(k,t,R,R,S,i,h,s,P);else{switch(x){case 99:if(J(k,3)===110)break;case 108:if(J(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Jn(e,R,R,r&&Ga(vm(e,R,R,0,0,o,s,v,o,S=[],h,P),P),o,P,h,s,r?S:P):Jn(k,R,R,R,[""],P,0,s,P)}}d=p=w=0,y=g=1,v=k="",h=n;break;case 58:h=1+Ie(k),w=b;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&dm()==125)continue}switch(k+=ei(f),f*y){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ie(k)-1)*g,g=1;break;case 64:Vt()===45&&(k+=Zn(lt())),x=Vt(),p=h=Ie(v=k+=hm(ri())),f++;break;case 45:b===45&&Ie(k)==2&&(y=0)}}return i}function vm(e,t,a,r,o,i,n,s,u,d,p,h){for(var x=o-1,w=o===0?i:[""],b=Yn(w),y=0,M=0,g=0;y<r;++y)for(var f=0,v=yt(e,x+1,x=Zu(M=n[y])),S=e;f<b;++f)(S=Xn(M>0?w[f]+" "+v:z(v,/&\f/g,w[f])))&&(u[g++]=S);return ai(e,t,a,o===0?Sa:s,u,d,p,h)}function l1(e,t,a,r){return ai(e,t,a,Vn,ei(um()),yt(e,2,-2),0,r)}function xm(e,t,a,r,o){return ai(e,t,a,Hr,yt(e,0,r),yt(e,r+1,-1),r,o)}function td(e,t,a){switch(nm(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Va+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Va+e+_+e+e;case 5936:switch(J(e,t+11)){case 114:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+_+e+e;case 6165:return O+e+_+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return O+e+_+"flex-item-"+z(e,/flex-|-self/g,"")+(bt(e,/flex-|baseline/)?"":_+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+_+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+_+z(e,"shrink","negative")+e;case 5292:return O+e+_+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+_+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+_+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!bt(e,/flex-|baseline/))return _+"grid-column-align"+yt(e,t)+e;break;case 2592:case 3360:return _+z(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,bt(r.props,/grid-\w+-end/)})?~Ur(e+(a=a[t].value),"span",0)?e:_+z(e,"-start","")+e+_+"grid-row-span:"+(~Ur(a,"span",0)?bt(a,/\d+/):+bt(a,/\d+/)-+bt(e,/\d+/))+";":_+z(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return bt(r.props,/grid-\w+-start/)})?e:_+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(e)-1-t>6)switch(J(e,t+1)){case 109:if(J(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Va+(J(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ur(e,"stretch",0)?td(z(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return _+o+":"+i+d+(n?_+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(J(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(J(e,J(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(J(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+_+"$2box$3")+e;case 100:return z(e,":",":"+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Gr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function ym(e,t,a,r){switch(e.type){case im:if(e.children.length)break;case rm:case om:case Hr:return e.return=e.return||e.value;case Vn:return"";case Gn:return e.return=e.value+"{"+Gr(e.children,r)+"}";case Sa:if(!Ie(e.value=e.props.join(",")))return""}return Ie(a=Gr(e.children,r))?e.return=e.value+"{"+a+"}":""}function wm(e){var t=Yn(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Lm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Sm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Hr:e.return=td(e.value,e.length,a);return;case Gn:return Gr([Wt(e,{value:z(e.value,"@","@"+O)})],r);case Sa:if(e.length)return lm(a=e.props,function(o){switch(bt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xa(Wt(e,{props:[z(o,/:(read-\w+)/,":"+Va+"$1")]})),Xa(Wt(e,{props:[o]})),ti(e,{props:Ju(a,r)});break;case"::placeholder":Xa(Wt(e,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),Xa(Wt(e,{props:[z(o,/:(plac\w+)/,":"+Va+"$1")]})),Xa(Wt(e,{props:[z(o,/:(plac\w+)/,_+"input-$1")]})),Xa(Wt(e,{props:[o]})),ti(e,{props:Ju(a,r)});break}return""})}}var ad,rd,Gt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Am="active",Dm="data-styled-version",ol="6.4.3",hd=`/*!sc*/
`,li=typeof window<"u"&&typeof document<"u";function Cm(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var s1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(rd=(ad=Cm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&ad!==void 0?ad:Cm("SC_DISABLE_SPEEDY"))!==null&&rd!==void 0?rd:typeof process<"u"&&process.env!==void 0&&!1),Bm="sc-keyframes-",u1={};function di(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var iI=1<<30,el=new Map,al=new Map,tl=1,ii=e=>{if(el.has(e))return el.get(e);for(;al.has(tl);)tl++;let t=tl++;return el.set(e,t),al.set(t,e),t},d1=e=>al.get(e),c1=(e,t)=>{tl=t+1,el.set(e,t),al.set(t,e)};var vd=Object.freeze([]),Xr=Object.freeze({});function Fm(e,t,a=Xr){return e.theme!==a.theme&&e.theme||t||a.theme}var f1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,p1=/(^-|-$)/g;function Om(e){return e.replace(f1,"-").replace(p1,"")}var g1=/(a)(d)/gi,Im=e=>String.fromCharCode(e+(e>25?39:97));function xd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Im(t%52)+a;return(Im(t%52)+a).replace(g1,"$1-$2")}var ld=5381,Ka=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},jm=e=>Ka(ld,e);function bd(e){return xd(jm(e)>>>0)}function m1(e){return e.displayName||e.name||"Component"}function sd(e){return typeof e=="string"&&!0}function h1(e){return sd(e)?`styled.${e}`:`Styled(${m1(e)})`}var Nm=Symbol.for("react.memo"),v1=Symbol.for("react.forward_ref"),x1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},b1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_m={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y1={[v1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Nm]:_m};function km(e){return("type"in(t=e)&&t.type.$$typeof)===Nm?_m:"$$typeof"in e?y1[e.$$typeof]:x1;var t}var w1=Object.defineProperty,L1=Object.getOwnPropertyNames,S1=Object.getOwnPropertySymbols,C1=Object.getOwnPropertyDescriptor,I1=Object.getPrototypeOf,k1=Object.prototype;function Hm(e,t,a){if(typeof t!="string"){let r=I1(t);r&&r!==k1&&Hm(e,r,a);let o=L1(t).concat(S1(t)),i=km(e),n=km(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in b1||a&&a[u]||n&&u in n||i&&u in i)){let d=C1(t,u);try{w1(e,u,d)}catch{}}}}return e}function ci(e){return typeof e=="function"}var P1=Symbol.for("react.forward_ref");function yd(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===P1&&"styledComponentId"in e}function ni(e,t){return e&&t?e+" "+t:e||t||""}function rl(e,t){return e.join(t||"")}function si(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ud(e,t,a=!1){if(!a&&!si(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ud(e[r],t[r]);else if(si(t))for(let r in t)e[r]=ud(e[r],t[r]);return e}function wd(e,t){Object.defineProperty(e,"toString",{value:t})}var T1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw di(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+hd;return t}},R1=`style[${Gt}][${Dm}="${ol}"]`,$1=new RegExp(`^${Gt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Pm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,dd=e=>{if(!e)return document;if(Pm(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Pm(t))return t}return document},E1=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},M1=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(hd),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match($1);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(c1(p,d),E1(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},od=e=>{let t=dd(e.options.target).querySelectorAll(R1);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Gt)!==Am&&(M1(e,o),o.parentNode&&o.parentNode.removeChild(o))}},oi=!1;function z1(){if(oi!==!1)return oi;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return oi=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return oi=t.getAttribute("content")||void 0}return oi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var Um=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Gt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Gt,Am),o.setAttribute(Dm,ol);let s=t||z1();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},A1=class{constructor(e,t){this.element=Um(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw di(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},D1=class{constructor(e,t){this.element=Um(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Tm=li,B1={isServer:!li,useCSSOMInjection:!s1},ui=class e{static registerId(t){return ii(t)}constructor(t=Xr,a={},r){this.options=Object.assign(Object.assign({},B1),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&li&&Tm&&(Tm=!1,od(this)),wd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=d1(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let x=Gt+".g"+u+'[id="'+d+'"]',w="";for(let b of p)b.length>0&&(w+=b+",");s+=h+x+'{content:"'+w+'"}'+hd}return s})(this))}rehydrate(){!this.server&&li&&od(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&li&&t.target!==this.options.target&&dd(this.options.target)!==dd(t.target)&&od(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new A1(r,o):new D1(r,o))(this.options),new T1(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){ii(t),t.startsWith(Bm)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(ii(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(ii(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},qm=new WeakSet,F1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function O1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in F1||e.startsWith("--")?String(t).trim():t+"px"}var Ya=47;function Rm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var Wm=Symbol.for("sc-keyframes");function j1(e){return typeof e=="object"&&e!==null&&Wm in e}function Vm(e){return ci(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Gm=e=>e==null||e===!1||e==="",N1=Symbol.for("react.client.reference");function $m(e){return e.$$typeof===N1}function Xm(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!Gm(r)&&(Array.isArray(r)&&qm.has(r)||ci(r)?t.push(Rm(a)+":",r,";"):si(r)?(t.push(a+" {"),Xm(r,t),t.push("}")):t.push(Rm(a)+": "+O1(a,r)+";"))}}function Ca(e,t,a,r,o=[]){if(Gm(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if($m(e))return o;if(Vm(e)&&t){let n=e(t);return Ca(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)Ca(e[n],t,a,r,o);return o}return yd(e)?(o.push(`.${e.styledComponentId}`),o):j1(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):$m(e)?o:si(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Xm(e,o),o):(o.push(e.toString()),o)}var _1=jm(ol),cd=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Ka(_1,a),this.baseStyle=r,ui.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(Vm(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=rl(Ca(u,t,a,r)))}else i+=rl(Ca(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=xd(Ka(Ka(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=ni(o,s)}}return o}},H1=/&/g;function Ym(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function id(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==Ya||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===Ya&&(n=!1,u++);else if(d!==34&&d!==39||Ym(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function Km(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Km(i.children,t)}return e}function Qm({options:e=Xr,plugins:t=vd}=Xr){let a,r,o,i=(x,w,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:x,n=t.slice();n.push(x=>{x.type===Sa&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(H1,r).replace(o,i))}),e.prefix&&n.push(Sm),n.push(ym);let s=[],u=wm(n.concat(Lm(x=>s.push(x)))),d=(x,w="",b="",y="&")=>{a=y,r=w,o=void 0;let M=(function(f){let v=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!v&&!S)return f;if(!v)return id(f);let P=f.length,R="",k=0,T=0,U=0,A=0,re=0,Ra=!1;for(;T<P;){let xe=f.charCodeAt(T);if(xe!==34&&xe!==39||Ym(f,T))if(U===0)if(xe===Ya&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==Ya);)T++;T+=2}else if(xe!==40)if(xe!==41)if(A>0)T++;else if(xe===42&&T+1<P&&f.charCodeAt(T+1)===Ya)R+=f.substring(k,T),T+=2,k=T,Ra=!0;else if(xe===Ya&&T+1<P&&f.charCodeAt(T+1)===Ya){for(R+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,Ra=!0}else xe===123?re++:xe===125&&re--,T++;else A>0&&A--,T++;else A++,T++;else T++;else U===0?U=xe:U===xe&&(U=0),T++}return Ra?(k<P&&(R+=f.substring(k)),re===0?R:id(R)):re===0?f:id(f)})(x),g=bm(b||w?b+" "+w+" { "+M+" }":M);return e.namespace&&(g=Km(g,e.namespace)),s=[],Gr(g,u),s},p=e,h=ld;for(let x=0;x<t.length;x++)t[x].name||di(15),h=Ka(h,t[x].name);return p?.namespace&&(h=Ka(h,p.namespace)),p?.prefix&&(h=Ka(h,"p")),d.hash=h!==ld?h.toString():"",d}var U1=new ui,fd=Qm(),Ld=de.default.createContext({shouldForwardProp:void 0,styleSheet:U1,stylis:fd,stylisPlugins:void 0}),nI=Ld.Consumer;function Sd(){return de.default.useContext(Ld)}function Zm(e){var t;let a=Sd(),{styleSheet:r}=a,o=de.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=de.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:Qm({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=de.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return de.default.createElement(Ld.Provider,{value:u},e.children)}var Cd=de.default.createContext(void 0),lI=Cd.Consumer;var Em=Object.prototype.hasOwnProperty,nd={};function q1(e,t){let a=typeof e!="string"?"sc":Om(e);nd[a]=(nd[a]||0)+1;let r=a+"-"+bd(ol+a+nd[a]);return t?t+"-"+r:r}function W1(e,t,a){let r=yd(e),o=e,i=!sd(e),{attrs:n=vd,componentId:s=q1(t.displayName,t.parentComponentId),displayName:u=h1(e)}=t,d=t.displayName&&t.componentId?Om(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let y=o.shouldForwardProp;if(t.shouldForwardProp){let M=t.shouldForwardProp;h=(g,f)=>y(g,f)&&M(g,f)}else h=y}let x=new cd(a,d,r?o.componentStyle:void 0);function w(y,M){return(function(g,f,v){let{attrs:S,componentStyle:P,defaultProps:R,foldedComponentIds:k,styledComponentId:T,target:U}=g,A=de.default.useContext(Cd),re=Sd(),Ra=g.shouldForwardProp||re.shouldForwardProp,xe=Fm(f,A,R)||Xr,Zt,io;{let Jt=de.default.useRef(null),dt=Jt.current;if(dt!==null&&dt[1]===xe&&dt[2]===re.styleSheet&&dt[3]===re.stylis&&dt[7]===P&&(function(cr,Ue,Be){let Fe=cr,be=Ue,no=0;for(let $a in be)if(Em.call(be,$a)&&(no++,Fe[$a]!==be[$a]))return!1;return no===Be})(dt[0],f,dt[4]))Zt=dt[5],io=dt[6];else{Zt=(function(Ue,Be,Fe){let be=Object.assign(Object.assign({},Be),{className:void 0,theme:Fe}),no=Ue.length>1;for(let $a=0;$a<Ue.length;$a++){let Ml=Ue[$a],Li=ci(Ml)?Ml(no?Object.assign({},be):be):Ml;for(let ea in Li)ea==="className"?be.className=ni(be.className,Li[ea]):ea==="style"?be.style=Object.assign(Object.assign({},be.style),Li[ea]):ea in Be&&Be[ea]===void 0||(be[ea]=Li[ea])}return"className"in Be&&typeof Be.className=="string"&&(be.className=ni(be.className,Be.className)),be})(S,f,xe),io=(function(Ue,Be,Fe,be){return Ue.generateAndInjectStyles(Be,Fe,be)})(P,Zt,re.styleSheet,re.stylis);let cr=0;for(let Ue in f)Em.call(f,Ue)&&cr++;Jt.current=[f,xe,re.styleSheet,re.stylis,cr,Zt,io,P]}}let wi=Zt.as||U,$l=(function(Jt,dt,cr,Ue){let Be={};for(let Fe in Jt)Jt[Fe]===void 0||Fe[0]==="$"||Fe==="as"||Fe==="theme"&&Jt.theme===cr||(Fe==="forwardedAs"?Be.as=Jt.forwardedAs:Ue&&!Ue(Fe,dt)||(Be[Fe]=Jt[Fe]));return Be})(Zt,wi,xe,Ra),El=ni(k,T);return io&&(El+=" "+io),Zt.className&&(El+=" "+Zt.className),$l[sd(wi)&&wi.includes("-")?"class":"className"]=El,v&&($l.ref=v),(0,de.createElement)(wi,$l)})(b,y,M)}w.displayName=u;let b=de.default.forwardRef(w);return b.attrs=p,b.componentStyle=x,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?ni(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?(function(M,...g){for(let f of g)ud(M,f,!0);return M})({},o.defaultProps,y):y}}),wd(b,()=>`.${b.styledComponentId}`),i&&Hm(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var V1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Mm(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var zm=e=>(qm.add(e),e);function L(e,...t){if(ci(e)||si(e))return zm(Ca(Mm(vd,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ca(a):zm(Ca(Mm(a,t)))}function pd(e,t,a=Xr){if(!t)throw di(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>pd(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>pd(e,t,Object.assign(Object.assign({},a),o)),r}var Jm=e=>pd(W1,e),l=Jm;V1.forEach(e=>{l[e]=Jm(e)});var gd=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(ci(i)&&!yd(i))return!1}return!0})(t),ui.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=rl(Ca(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function eh(e,...t){let a=L(e,...t),r=`sc-global-${bd(JSON.stringify(a))}`,o=new gd(a,r),i=s=>{let u=Sd(),d=de.default.useContext(Cd),p;{let h=de.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],x=de.default.useRef(o);de.default.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),de.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,u1,d,h);else{let x=Object.assign(Object.assign({},u),{theme:Fm(u,p,i.defaultProps)});o.renderStyles(s,x,d,h)}}return de.default.memo(i)}var th,md=class{constructor(t,a){this[th]=!0,this.inject=(r,o=fd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=Bm+t,this.rules=a,ii(this.id),wd(this,()=>{throw di(12,String(this.name))})}getName(t=fd){return t.hash?this.name+xd(+t.hash>>>0):this.name}};function $t(e,...t){let a=rl(L(e,...t)),r=bd(a);return new md(r,a)}th=Wm;var sI=`__sc-${Gt}__`;var uI=`:not(style[${Gt}])`,dI=`style[${Gt}]`;var ah=`/* Generated from src/tokens. Do not edit directly. */

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
`;var il=document.currentScript??document.querySelector("script[data-project]"),st={project:il?.dataset.project??"default",seedUrl:il?.dataset.seed,version:il?.dataset.version||void 0,compareBase:il?.dataset.compareBase??`${location.protocol}//${location.hostname}:3001`,embed:new URLSearchParams(location.search).get("fbw")==="embed"};var Qa=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Za=e=>e.comments[0]?.body??"",rh=e=>e.comments[0]?.author??"";function oh(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:Qa(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}var ih="fbw:author",nl=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;oh(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.applySeedOverrides(),this.notify()}applySeedOverrides(){this.seedThreads=this.rawSeeds.filter(t=>!this.overrides[t.id]?.hidden).map(t=>{let a=this.overrides[t.id];return a?{...t,origin:"seed",resolved:a.resolved??t.resolved,comments:[...t.comments,...a.addedComments??[]]}:{...t,origin:"seed"}})}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o){let i={id:Qa(),author:a,body:r,createdAt:new Date().toISOString(),version:o};if(this.isSeed(t)){let n=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...n.addedComments??[],i]});return}this.threads=this.threads.map(n=>n.id===t?{...n,comments:[...n.comments,i]}:n),this.persist()}canRemoveComment(t,a){if(this.isSeed(t))return(this.overrides[t]?.addedComments??[]).some(o=>o.id===a);let r=this.threads.find(o=>o.id===t);return!!r&&r.comments.findIndex(o=>o.id===a)>0}removeComment(t,a){if(this.canRemoveComment(t,a)){if(this.isSeed(t)){let r=(this.overrides[t]?.addedComments??[]).filter(o=>o.id!==a);this.overrideSeed(t,{addedComments:r});return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r),this.persist()}}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.applySeedOverrides(),this.notify()}get author(){return localStorage.getItem(ih)??""}set author(t){localStorage.setItem(ih,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){localStorage.setItem(this.threadsKey,JSON.stringify(this.threads)),this.notify()}notify(){this.listeners.forEach(t=>t())}};var Yr="fbw-host",X1="#2563eb",Id="fbw:pending-jump",Y1=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function K1(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${Y1(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function nh(e){return{page:location.pathname,selector:K1(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ja(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==Yr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function Q1(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${X1}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function fi(e){if(e.page!==location.pathname)return!1;let t=Ja(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>Q1(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function lh(e){sessionStorage.setItem(Id,JSON.stringify(e)),location.assign(e.page)}function sh(){let e=sessionStorage.getItem(Id);if(e){sessionStorage.removeItem(Id);try{let t=JSON.parse(e);setTimeout(()=>fi(t),400)}catch{}}}var Z1=e=>typeof e=="object"&&e!==null&&e.type==="fbw:jump"&&typeof e.anchor?.page=="string";function uh(){window.addEventListener("message",e=>{Z1(e.data)&&fi(e.data.anchor)})}var yi=c(I(),1);var Ad=c(I(),1),Dd=c(I(),1),Bd=c(I(),1),Fd=c(I(),1),pl=c(I(),1),mw=c(I(),1),kh=c(I(),1),Ph=c(I(),1),Th=c(I(),1),mi=c(I(),1),Lw=c(I(),1);var Sw=c(m(),1),Cw=c(m(),1);var jh=c(m(),1);var Nh=c(m(),1);var _h=c(m(),1);var Xw=c(m(),1),Uh=c(m(),1);var Kw=c(m(),1);var Qw=c(m(),1),Zw=c(m(),1),Jw=c(m(),1),qh=c(m(),1),e2=c(m(),1),Vh=c(I(),1);var Xh=c(m(),1),Yh=c(I(),1),Kh=c(m(),1);var Qh=c(I(),1);var Zh=c(m(),1);var Jh=c(m(),1),_d=c(I(),1);var Hd=c(m(),1),tv=c(I(),1);var av=c(m(),1),rv=c(I(),1);var ov=c(m(),1),iv=c(I(),1);var nv=c(m(),1),lv=c(I(),1);var sv=c(m(),1),uv=c(I(),1);var g2=c(m(),1),dv=c(m(),1),m2=c(I(),1),h2=c(La(),1),v2=c(I(),1);var x2=c(m(),1),b2=c(I(),1),cv=c(m(),1),ml=c(I(),1),y2=c(La(),1),w2=c(m(),1),hl=c(I(),1);var fv=c(m(),1),to=c(I(),1);var pv=c(m(),1),ar=c(I(),1);var ze=c(m(),1),I2=c(I(),1),Wd=c(m(),1),k2=c(I(),1),Vd=c(m(),1),P2=c(I(),1),gv=c(m(),1),Gd=c(I(),1);var mv=c(m(),1);var hv=c(m(),1);var vv=c(m(),1);var xv=c(m(),1);var bv=c(m(),1),Xd=c(I(),1),R2=c(La(),1);var yv=c(I(),1);var wv=c(m(),1),Yd=c(m(),1);var Lv=c(m(),1);var Cv=c(m(),1),M2=c(I(),1);var z2=c(m(),1);var ul=c(I());var sl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var ph=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var gh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var kd=e=>{let t=gh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var pi=c(I());var mh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var hh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var vh=(0,pi.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,pi.createElement)("svg",{ref:u,...mh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:sl("lucide",o),...!i&&!hh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,pi.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Ia=(e,t)=>{let a=(0,ul.forwardRef)(({className:r,...o},i)=>(0,ul.createElement)(vh,{ref:i,iconNode:t,className:sl(`lucide-${ph(kd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=kd(e),a};var iw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Kr=Ia("check",iw);var nw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],er=Ia("maximize-2",nw);var lw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Xt=Ia("trash-2",lw);var sw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ee=Ia("x",sw);var Iv=c(I(),1);var kv=c(m(),1),Pv=c(m(),1);var Tv=c(m(),1),j2=c(I(),1);var Rv=c(m(),1);var $v=c(I(),1);var Ev=c(m(),1);var zv=c(m(),1);var H2=c(m(),1);var q2=c(m(),1);var vl=c(m(),1);var G2=c(m(),1);var Bv=c(m(),1);var aL=c(m(),1),sr=c(I(),1);var Fv=c(m(),1);var Ov=c(m(),1);var jv=c(m(),1),lL=c(I(),1);var Nv=c(m(),1);var _v=c(m(),1);var sL=c(m(),1);var Hv=c(m(),1);var fL=c(m(),1);var Uv=c(m(),1);var gL=c(I(),1);var qv=c(m(),1),mL=c(I(),1);var Gv=c(m(),1),hL=c(I(),1),Xv=c(m(),1),vL=c(m(),1),Yv=c(m(),1),Kv=c(I(),1);var Kd=c(m(),1),Qv=c(m(),1);var Zv=c(m(),1);var zd=c(m(),1),nr=c(I(),1);var ke=c(m(),1),RL=c(I(),1),$L=c(La(),1);var ex=c(m(),1);var Qd=c(I(),1),Zd=c(m(),1),Jd=c(I(),1);var tx=c(m(),1),ao=c(I(),1),EL=c(La(),1);var ax=c(m(),1),ML=c(m(),1),rx=c(I(),1),ec=c(m(),1),ox=c(I(),1);var ix=c(m(),1);var nx=c(m(),1),DL=c(I(),1),tc=c(m(),1),lx=c(I(),1),BL=c(La(),1),FL=c(m(),1),Qe=c(I(),1),xl=c(m(),1);var ac=c(I(),1),dx=c(m(),1);var cx=c(I(),1);var fx=c(m(),1),px=c(I(),1);var gx=c(m(),1);var mx=c(m(),1);var hx=c(m(),1);var vx=c(m(),1);var Lt=c(m(),1),yx=c(I(),1);var Jr=c(m(),1);var oS=c(m(),1),wl=c(I(),1);var rc=c(m(),1),iS=c(m(),1),ur=c(I(),1);var wx=c(m(),1),Ll=c(I(),1);var Lx=c(m(),1),Sx=c(I(),1);var Sl=c(m(),1);var sS=c(m(),1);var Cx=c(m(),1);var Ix=c(m(),1);var kx=c(m(),1),uS=c(I(),1);var Px=c(m(),1),Tx=c(I(),1);var Rx=c(m(),1),$x=c(m(),1);var rr=c(m(),1),Mx=c(m(),1);var zx=c(m(),1);var Ax=c(m(),1),xS=c(I(),1);var Dx=c(m(),1);var bS=c(m(),1),Cl=c(I(),1);var Bx=c(m(),1);var yS=c(m(),1),Fx=c(I(),1);var or=c(m(),1);var Ox=c(m(),1),jx=c(I(),1);var Nx=c(m(),1);var _x=c(m(),1);var kS=c(m(),1);var Hx=c(m(),1),PS=c(I(),1),TS=c(m(),1),Ux=c(I(),1),RS=c(m(),1),qx=c(m(),1);var MS=c(m(),1);var zS=c(I(),1);var oc=c(m(),1);var ic=c(m(),1),nc=c(I(),1),Gx=c(I(),1),lc=c(m(),1),sc=c(m(),1);var Xx=c(m(),1),uc=c(I(),1);var BS=c(m(),1),Yx=c(m(),1),Kx=c(m(),1);var Qx=c(m(),1);var dc=c(m(),1),FS=c(m(),1),OS=c(m(),1);var Zx=c(m(),1),Jx=c(I(),1),e0=c(m(),1),jS=c(I(),1);var cc=c(m(),1),fc=c(I(),1);var pc=c(m(),1),t0=c(m(),1),gc=c(m(),1),a0=c(m(),1),r0=c(m(),1);var o0=c(m(),1);var mc=c(m(),1);var hc=c(m(),1);var i0=c(m(),1),vc=c(m(),1),n0=c(m(),1),NS=c(I(),1),s0=c(m(),1),u0=c(m(),1),_S=c(I(),1);var d0=c(m(),1),c0=c(m(),1);var HS=c(m(),1);var Ih={};var Od={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},jd={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},he={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},Qr={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Et={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},wt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},hw={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},gi={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},te={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},ae={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},dl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Mt={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},Rh={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},$h={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Rd={zero:"0deg",half:"180deg",full:"360deg"},gl={horizontal:"90deg",diagonal:"135deg"},Me={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},tr={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Ae={sm:`@media (max-width: ${tr.sm}px)`,smPlus:`@media (max-width: ${tr.smPlus}px)`,md:`@media (max-width: ${tr.md}px)`,mdWide:`@media (max-width: ${tr.mdWide}px)`,lg:`@media (max-width: ${tr.lg}px)`,xl:`@media (max-width: ${tr.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},Ke={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},vw={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},xw={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Pd={press:.95,drag:.985,hoverLift:1.04},bw={landscape:"4 / 3"},yw={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},Zr={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function Eh(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Mt.xs,md:Mt.md,lg:Mt["2xl"],xl:Mt["4xl"],pill:Mt.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:tr,motion:Me,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var ka=Eh("portalDark",Od,Rh),ww=Eh("portalLight",jd,$h);var X5=(0,mi.createContext)(null);var Yt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,ve=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,Nd=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,K5=L`
  ${Yt}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,lr=L`
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
`,hi=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,Iw=L`
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

  ${hi}
`,Mh=L`
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

  ${hi}
`,kw=L`
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

  ${hi}
`,Pw=L`
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

  ${hi}
`,Tw=L`
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

  ${hi}
`,zh=L`
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
`,Rw=L`
  ${zh}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,$w=L`
  ${zh}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Ah=L`
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
    ${Mh}
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
`,Dh=L`
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
`,Ew=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,Bh=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,Mw=L`
  ${Bh}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,zw=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Fh=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,Aw=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,Oh=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Dw={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function Bw(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var Fw={"--ig-radius-2xs":Mt["2xs"],"--ig-radius-xxs":Mt.xxs,"--ig-radius-xs":Mt.xs,"--ig-radius-sm":ka.radius.sm,"--ig-radius-md":ka.radius.md,"--ig-radius-lg":ka.radius.lg,"--ig-radius-xl":ka.radius.xl,"--ig-radius-2xl":Mt["2xl"],"--ig-radius-4xl":Mt["4xl"],"--ig-radius-pill":ka.radius.pill,"--ig-font-sans":ka.typography.fontSans,"--ig-font-mono":ka.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(he.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(he.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(he.svgFillSoft),"--ig-opacity-svg-fill-medium":String(he.svgFillMedium),"--ig-opacity-dim":String(he.dim),"--ig-opacity-dim-soft":String(he.dimSoft),"--ig-opacity-ghost":String(he.ghost),"--ig-opacity-faded":String(he.faded),"--ig-opacity-disabled":String(he.disabled),"--ig-opacity-overlay":String(he.overlay),"--ig-opacity-muted":String(he.muted),"--ig-opacity-subtle":String(he.subtle),"--ig-opacity-emphatic":String(he.emphatic),"--ig-opacity-loud":String(he.loud),"--ig-opacity-loud-plus":String(he.loudPlus),"--ig-opacity-prominent":String(he.prominent),"--ig-opacity-near":String(he.near),"--ig-blur-2xs":Qr.blur2xs,"--ig-blur-xs":Qr.blurXs,"--ig-blur-sm":Qr.blurSm,"--ig-blur-md":Qr.blurMd,"--ig-blur-lg":Qr.blurLg,"--ig-blur-xl":Qr.blurXl,"--ig-icon-xs":Et.xs,"--ig-icon-sub":Et.sub,"--ig-icon-2xs":Et["2xs"],"--ig-icon-sm":Et.sm,"--ig-icon-sm-plus":Et.smPlus,"--ig-icon-md":Et.md,"--ig-icon-lg":Et.lg,"--ig-icon-xl":Et.xl,"--ig-icon-2xl":Et["2xl"],"--ig-icon-3xl":Et["3xl"],"--ig-svg-stroke-bold":String(hw.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":ae[0],"--ig-space-1px":ae["1px"],"--ig-space-2px":ae["2px"],"--ig-space-3px":ae["3px"],"--ig-space-neg-1px":ae["-1px"],"--ig-space-neg-2px":ae["-2px"],"--ig-transform-hover-lift-y":ae.hoverLiftY,"--ig-space-1":ae[1],"--ig-space-1-plus":ae["1Plus"],"--ig-space-2":ae[2],"--ig-space-2-plus":ae["2Plus"],"--ig-space-3":ae[3],"--ig-space-4":ae[4],"--ig-space-5":ae[5],"--ig-space-6":ae[6],"--ig-space-7":ae[7],"--ig-space-8":ae[8],"--ig-space-9":ae[9],"--ig-space-10":ae[10],"--ig-space-11":ae[11],"--ig-space-12":ae[12],"--ig-space-13":ae[13],"--ig-border-1px":dl["1px"],"--ig-border-1_5px":dl["1_5px"],"--ig-border-2px":dl["2px"],"--ig-border-3px":dl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Pd.press),"--ig-scale-drag":String(Pd.drag),"--ig-scale-hover-lift":String(Pd.hoverLift),"--ig-aspect-landscape":bw.landscape,"--ig-control-height-xs":Ke.xs,"--ig-control-height-xs-plus":Ke.xsPlus,"--ig-control-height-sm":Ke.sm,"--ig-control-height-sm-plus":Ke.smPlus,"--ig-control-height-md":Ke.md,"--ig-control-height-mid-plus":Ke.midPlus,"--ig-control-height-mid-plus-tall":Ke.midPlusTall,"--ig-control-height-2xl-wide":Ke["2xlWide"],"--ig-control-height-lg":Ke.lg,"--ig-control-height-xl":Ke.xl,"--ig-control-height-2xl":Ke["2xl"],"--ig-control-height-3xl":Ke["3xl"],"--ig-control-height-3xl-plus":Ke["3xlPlus"],"--ig-page-max-width":te.pageMaxWidth,"--ig-layout-topbar":te.topbarHeight,"--ig-layout-capture-bar":te.captureBar,"--ig-layout-capture-grid":te.captureGrid,"--ig-layout-histogram-width":te.histogramWidth,"--ig-layout-histogram-height":te.histogramHeight,"--ig-layout-dataset-card-min-height":te.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":te.datasetCardRecentMinHeight,"--ig-layout-log-time-min":te.logTimeMin,"--ig-layout-log-detail-left":te.logDetailLeft,"--ig-layout-log-detail-top":te.logDetailTop,"--ig-layout-log-detail-width":te.logDetailWidth,"--ig-layout-color-plane-height":te.colorPlaneHeight,"--ig-layout-color-thumb-size":te.colorThumbSize,"--ig-layout-shadow-y-offset":te.shadowYOffset,"--ig-layout-shadow-blur":te.shadowBlur,"--ig-layout-sidebar-header":te.sidebarHeader,"--ig-layout-sidebar-collapse":te.sidebarCollapse,"--ig-layout-panel-min-height":te.panelMinHeight,"--ig-layout-loading-panel-height":te.loadingPanelHeight,"--ig-form-label-col":te.formLabelCol,"--ig-form-label-col-wide":te.formLabelColWide,"--ig-motion-fastest":Me.fastest,"--ig-motion-swift":Me.swift,"--ig-motion-fast":Me.fast,"--ig-motion-fast-ease":Me.fastEase,"--ig-motion-normal":Me.normal,"--ig-motion-normal-ease":Me.normalEase,"--ig-motion-mobile-nav":Me.mobileNav,"--ig-motion-spinner":Me.spinner,"--ig-motion-spinner-fast":Me.spinnerFast,"--ig-motion-spinner-slow":Me.spinnerSlow,"--ig-motion-progress-bar":Me.progressBar,"--ig-motion-sync-spin":Me.syncSpin,"--ig-motion-shimmer":Me.shimmer,"--ig-motion-skeleton":Me.skeleton};function $d(e="dark"){return{...Fw,...Bw(e==="light"?ww:ka,e==="light"?jd:Od,e==="light"?$h:Rh,e==="light")}}var a3=$d("dark");function Td(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function Ow(){let e=$d("dark"),t=$d("light");return[Td(":root",Dw),Td(":root, :root[data-theme='dark']",e),Td(":root[data-theme='light']",t)].join(`
`)+`
`}var o3=eh`
  ${Ow()}

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
    background: ${Od.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${jd.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function ir(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function fl(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var jw=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${ir(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${ir(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${fl(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${fl(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function Nw({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,jh.jsx)(jw,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var _w=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function Ed({gap:e,align:t,justify:a,as:r,...o}){return(0,Nh.jsx)(_w,{as:r,$gap:e,$align:t,$justify:a,...o})}var l3=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var s3=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${fl(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var u3=l.div`
  width: 100%;
  max-width: ${e=>fl(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>ir(e.$padding)??"var(--ig-space-11)"};
`;var Hw={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},Uw={default:void 0,mono:"var(--ig-font-mono)"},qw={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},wh={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function Ww(e){return typeof e=="string"?qw[e]:e??"var(--ig-font-weight-regular)"}function Vw(e){if(e)return e in wh?wh[e]:e}var Gw=l.span`
  margin: 0;
  color: ${e=>Hw[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&Uw[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Hh({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,_h.jsx)(Gw,{as:e,$tone:t,$size:a,$weight:Ww(r),$align:o,$uppercase:i,$letterSpacing:Vw(n),$fontFamily:s,$tabularNums:u,...d})}var f3=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function Yw(e){return(0,Uh.jsx)(Hh,{size:"var(--ig-font-size-sm)",...e})}var g3=l.div`
  ${e=>e.$elevation==="raised"?ve:e.$elevation==="card"?Nd:Yt}
  border-radius: ${e=>ir(e.$radius)??"var(--ig-radius-2xl)"};
`;var h3=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,v3=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,x3=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??wt.lg}px`};
  height: ${e=>`${e.$size??wt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var t2={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function Wh(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Gh=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${t2[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?$w:e.$variant==="secondary"?Tw:Pw:e.$variant==="ghost"?Rw:e.$variant==="secondary"?Mh:e.$variant==="accent"?kw:Iw}
`,eo=Vh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let x="Button",w=d??(u&&u!==x?u:void 0);return(0,Xh.jsxs)(Gh,{ref:h,$variant:Wh(t,a),$size:r,$tone:o,...p,"data-ig-component":x,"data-ig-layer":"components","data-ig-slot":w,children:[i,s,n]})}),De=Yh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,Kh.jsx)(Gh,{ref:d,type:"button",$variant:Wh(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),w3=l(De).attrs({variant:"secondary",size:"sm"})`
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
`,a2={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},r2={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},o2=l.button`
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
  font-size: ${e=>a2[e.$size]};
  color: ${e=>r2[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,vi=(0,Qh.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Zh.jsxs)(o2,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),C3=l(De).attrs({variant:"secondary",size:"sm"})`
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
`,I3=l.span`
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
`;var i2={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},ev=l.input`
  ${lr}
  ${e=>i2[e.$size]}
`,Pa=(0,_d.forwardRef)(({size:e="md",...t},a)=>(0,Hd.jsx)(ev,{ref:a,$size:e,...t}));Pa.displayName="TextField";var P3=l.textarea`
  ${lr}
`,n2=(0,_d.forwardRef)(({size:e="md",...t},a)=>(0,Hd.jsx)(ev,{ref:a,$size:e,type:"password",...t}));n2.displayName="PasswordField";var l2={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},s2=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>l2[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,R3=(0,tv.forwardRef)(function({variant:t="default",minHeight:a=vw.midPlusTall,...r},o){return(0,av.jsx)(s2,{ref:o,$variant:t,$minHeight:a,...r})}),u2=l.input.attrs({type:"color"})`
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
`,E3=(0,rv.forwardRef)(function(t,a){return(0,ov.jsx)(u2,{ref:a,...t})}),d2={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},c2=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>d2[e.$orientation]}
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
`,z3=(0,iv.forwardRef)(function({orientation:t="vertical",...a},r){return(0,nv.jsx)(c2,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),f2={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},p2=l.div`
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
  ${e=>f2[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${gl.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,D3=(0,lv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,sv.jsx)(p2,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),O3=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var j3=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,N3=l.input`
  ${lr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,_3=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,H3=l.button`
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
`;var q3=l.div`
  position: relative;
`,W3=l.button`
  ${lr}
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
`,V3=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,G3=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Rd.half})`:`rotate(${Rd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,X3=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,Y3=l.button`
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
`,K3=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,Q3=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,Z3=l.select`
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
`;var eP=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,tP=l.input`
  ${lr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,aP=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,rP=l.button`
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
`;var iP=l.div`
  position: relative;
  width: 100%;
`,nP=l.textarea`
  ${lr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,lP=l.div`
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
`,sP=l.button`
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
`,uP=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,dP=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var Ud=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,L2=l.span`
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
`,qd=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,S2=l.span`
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
`,C2=l.span`
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
`,fP=ar.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),x=ar.default.useRef(null);ar.default.useImperativeHandle(d,()=>x.current),ar.default.useEffect(()=>{x.current&&(x.current.indeterminate=!!o)},[o]);let w=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,y=n??u["aria-label"]??b;return(0,ze.jsxs)(Ud,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":y,children:[(0,ze.jsx)(qd,{ref:x,type:"checkbox",checked:a,disabled:r,...u}),(0,ze.jsx)(S2,{$checked:!!w,$disabled:r,children:o?(0,ze.jsx)("svg",{viewBox:"0 0 12 12",children:(0,ze.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,ze.jsx)("svg",{viewBox:"0 0 12 12",children:(0,ze.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),pP=ar.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,ze.jsxs)(Ud,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,ze.jsx)(qd,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,ze.jsx)(C2,{$checked:!!a,$disabled:r}),t]})}),gP=ar.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,ze.jsxs)(Ud,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,ze.jsx)(qd,{ref:s,type:"checkbox",checked:t,...n}),(0,ze.jsx)(L2,{$checked:t}),a]})});var hP=l.input`
  display: none;
`,T2={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},vP={...T2,cursor:"pointer"};var bP=l.button`
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
`;var wP=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,LP=l.button`
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
`;var CP=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Ae.sm} {
    grid-template-columns: 1fr;
  }
`,IP=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,kP=l.div`
  min-width: 0;
`,PP=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var TP=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,RP=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var EP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,MP=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var $2={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},E2=l.div`
  ${ve}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>$2[e.$variant]}
`,DP=(0,yv.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,wv.jsx)(E2,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var BP={minWidth:gi.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},FP=l.button`
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
`;var jP=l.button`
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
`;var Lh={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},Sv=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>Lh[e.$size??"sm"]};
  height: ${e=>Lh[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,HP=l.label`
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
`;var qP=l.button`
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
`;var A2={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},D2={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},B2=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":D2[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>A2[e.$size]}
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
`,GP=(0,Iv.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,kv.jsxs)(B2,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var XP=l.button`
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
`,YP=l.div`
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
`;var F2={bottom:L`
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
  `},QP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>F2[e.$placement]}
`,ZP=l.div`
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
`,O2={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},JP=l.button`
  flex-shrink: 0;
  ${e=>O2[e.$size]}
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
`,eT=l.span`
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
`;var aT=l.button`
  ${lr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,rT=l.span`
  color: var(--ig-color-text-soft);
`,oT=l.div`
  ${Ah}
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

  ${Dh}
`;var N2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,lT=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,_2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Mv=(0,$v.forwardRef)(({anchor:e,style:t,...a},r)=>(0,Ev.jsx)(_2,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Mv.displayName="MenuPopover";var sT=l.div`
  ${ve}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,uT=l(N2)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,cT=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,fT=l.span`
  ${({$tone:e,tone:t})=>{let a=yw[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,pT=l(Mv)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var gT=l.div`
  ${Ah}
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

  ${Dh}
`;var hT=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,vT=l.button`
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
`;var U2={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},xi=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>U2[e.$tone??"neutral"]};
`,yT=l(xi)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,LT=l.p`
  ${Fh}
  ${Oh}
  margin: 0;
`,CT=l.div`
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
`;var W2=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,V2=l.span`
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
`;function Av({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,vl.jsxs)(W2,{className:o,style:i,children:[e,!a&&t!=null?(0,vl.jsx)(V2,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var Md=20,Dv=120,X2=Dv*Math.PI/180,Y2=Md/Math.sin(X2),K2=$t`
  from { background-position: 0 0; }
  to   { background-position: ${Y2.toFixed(3)}px 0; }
`,Q2=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${Dv}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${Md/2}px,
      var(--ig-color-white-06) ${Md}px
    );
    animation: ${K2} var(--ig-motion-shimmer) linear infinite;
  }
`,Z2=$t`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,J2={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},PT=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,TT=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>J2[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${Z2} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&Q2}
`;var $T={display:"flex",width:"100%",height:wt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},ET=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var eL=L`
  background:
    linear-gradient(
      ${gl.horizontal},
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
`,zT=l.div.attrs({"aria-hidden":!0})`
  ${eL}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,tL=l.div`
  ${({$tone:e="info"})=>L`
    background: ${Zr[e].background};
    border-color: ${Zr[e].border};
    color: ${Zr[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,DT=l(tL)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,rL=$t`
  to { transform: rotate(${Rd.full}); }
`,FT={sm:wt.sm,md:wt.lg,lg:wt["3xl"]};var OT=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${rL} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var oL=$t`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,iL=$t`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,NT=l.div`
  ${({$tone:e})=>L`
    background: ${Zr[e].background};
    border-color: ${Zr[e].border};
    color: ${Zr[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?iL:oL} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,_T=l.span`
  flex: 1;
`,HT=l.button`
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
`,UT=l.button`
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
`,qT=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,WT=(0,sr.createContext)(()=>{});var GT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,XT=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,nL=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,YT=l(nL)``,KT=l.div`
  flex: 1;
`,QT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var JT=l.div`
  ${Oh}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,e4=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,t4=l.div`
  ${Fh}
`,a4=l.div`
  ${Aw}
  max-width: var(--ig-popup-md);
`,r4=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var i4=l.div`
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
`,n4=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,l4=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,s4=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var d4=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,c4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,f4=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,p4=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var m4=l.span`
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
`;var uL={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},dL=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>uL[e.$variant]}
`,v4=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,cL=$t`from { opacity: 0 } to { opacity: 1 }`,x4=l(dL)`
  animation: ${cL} var(--ig-motion-fast);
`;var y4=l.div`
  ${ve}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var cl=l.span`
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
`,L4=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,S4=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${cl}:hover &,
          ${cl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${cl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${cl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var pL={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},I4=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>pL[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,Wv=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,P4=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:Wv}
`,T4=l.div`
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
`,R4=l.button`
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
`;var $4=l.div`
  ${Wv}
`,Vv={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},M4=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Vv[e.$radius].root};
`,z4=l.div`
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
`,A4=l.button`
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
  border-radius: ${e=>Vv[e.$radius].item};
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
`,D4=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,B4=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,F4=l.span`
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
`;var j4=l.header`
  display: none;
  ${Ae.md} {
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
`;var N4=l.div`
  display: none;
  ${Ae.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,_4=l.aside`
  display: none;
  ${Ae.md} {
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
`;var H4=l.button`
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
`;var U4=l.button`
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
`;var q4={marginLeft:"auto",minWidth:wt.xl,height:wt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var V4=l.div`
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
`,G4=l.button`
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
`;var xL=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Jv=l.div`
  ${ve}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,Y4=l(Jv)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,bL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,yL=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,wL=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,K4=l.aside`
  ${ve}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,LL=l(De)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function SL({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,zd.jsx)(LL,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,zd.jsx)(Ee,{size:wt.md})})}var CL='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',IL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,kL={margin:0,lineHeight:"var(--ig-line-height-loose)"};function PL({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,nr.useId)(),u=(0,nr.useRef)(null);return(0,nr.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,nr.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let x=Array.from(h.querySelectorAll(CL)).filter(y=>y.offsetParent!==null);if(x.length===0){p.preventDefault(),h.focus();return}let w=x[0],b=x[x.length-1];p.shiftKey&&document.activeElement===w?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),w.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,ke.jsx)(xL,{onClick:()=>o?.(),children:(0,ke.jsxs)(Jv,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,ke.jsxs)(bL,{children:[(0,ke.jsx)(yL,{id:s,children:e}),o?(0,ke.jsx)(SL,{onClick:()=>o()}):null]}),(0,ke.jsxs)(IL,{children:[t?(0,ke.jsx)(Yw,{as:"p",tone:"muted",style:kL,children:t}):null,a,r?(0,ke.jsx)(wL,{children:r}):null]})]})})}function TL({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,ke.jsx)(PL,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(eo,{type:"button",variant:"secondary",onClick:i,children:r}),(0,ke.jsx)(eo,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var tR=l.div`
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
`,aR=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,rR=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,oR=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,iR=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var lR=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,sR=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,uR=l.div`
  position: relative;
  display: block;
  width: 100%;
`,dR=l.button`
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
`,cR=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,fR=l.button`
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
`;var pR={minWidth:gi.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var mR=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var vR=l.div`
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
`,xR=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var bR={display:"inline-flex",alignItems:"center",justifyContent:"center",width:wt.md,height:wt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var zL=l.div`
  ${ve}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,AL=(0,ox.forwardRef)(({anchor:e,width:t=gi.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,ix.jsx)(zL,{ref:o,$width:t,style:{...i,...a},...r})});AL.displayName="FilterPopover";var LR=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,SR=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,CR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var IR={minWidth:gi.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var sx=(0,Qe.createContext)(null);function bl(){let e=(0,Qe.useContext)(sx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function ux({children:e}){let[t,a]=(0,Qe.useState)(null),r=(0,Qe.useRef)(null);r.current=t;let o=(0,Qe.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,Qe.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,Qe.useMemo)(()=>o,[o]);return(0,xl.jsxs)(sx.Provider,{value:n,children:[e,t?(0,xl.jsx)(TL,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var PR=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,TR=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,OL=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,jL=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,RR=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,$R=l(OL)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,ER=l(jL)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,MR=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,zR=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,NL=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,_L=L`
  transition: transform var(--ig-motion-normal);
`,AR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&NL}
  ${e=>e.$isAnimating&&_L}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,DR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var FR=l.section`
  ${Yt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,OR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,HL=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,NR=cx.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,fx.jsx)(HL,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),UL=l.div`
  ${Yt}
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
`,HR=px.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,gx.jsx)(UL,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),qR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var VR=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var qL={panel:Yt,card:Nd,raised:ve},WL=l.div`
  ${e=>qL[e.$elevation]}
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
`;function xx({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,vx.jsx)(WL,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var VL=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,GL=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,XL=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,YL=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,KL=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,QL=l.textarea`
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
`,ZL=l.div`
  display: flex;
  justify-content: flex-end;
`,JL=l.button`
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
`;function bx({author:e,timestamp:t,body:a,actions:r}){return(0,Lt.jsxs)(VL,{children:[(0,Lt.jsxs)(GL,{children:[(0,Lt.jsx)(XL,{children:e}),t&&(0,Lt.jsx)("span",{children:t}),r]}),(0,Lt.jsx)(YL,{children:a})]})}function yl({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,Lt.jsxs)(KL,{children:[(0,Lt.jsx)(QL,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,Lt.jsx)(ZL,{children:(0,Lt.jsx)(JL,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var eS=l.button`
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
`,tS=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,aS=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,rS=(0,yx.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,Jr.jsxs)(eS,{ref:n,type:o??"button",$active:a,...i,children:[(0,Jr.jsx)(Sv,{$color:e,$size:"sm"}),(0,Jr.jsx)(tS,{children:t}),r!=null&&(0,Jr.jsx)(aS,{children:r})]}));rS.displayName="TagListItem";var QR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var JR=l.div`
  position: relative;
  width: 100%;
`,e$=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,t$=l.div`
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
`,a$=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,r$=l.button`
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
`;var i$=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,n$=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,l$=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,s$=(0,ur.createContext)(null);var d$=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,c$=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,f$=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var nS=l.button`
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
`,lS=(0,Sx.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,Sl.jsxs)(nS,{ref:o,type:a??"button",...r,children:[e&&(0,Sl.jsx)(Sv,{$color:e,$size:"xs"}),t]}));lS.displayName="ActionChip";var m$=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,h$=l.kbd`
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
`;var x$=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,b$=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,y$=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var L$=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var C$=l.li`
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
`;var k$=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var dS=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,cS=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,fS=l.button`
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

  ${e=>e.$variant==="flat"?dS:cS}

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
`,pS=(0,Tx.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,Rx.jsx)(fS,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});pS.displayName="SelectableListItem";var gS={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},mS={flexShrink:0},hS={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},vS=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function Ex({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,rr.jsxs)(Ed,{as:"aside",gap:0,className:o,style:gS,children:[(0,rr.jsx)(Nw,{style:mS,children:e}),t?(0,rr.jsxs)(Ed,{gap:3,style:hS,children:[(0,rr.jsx)(Hh,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,rr.jsx)(vS,{children:i},n):null)]})}var $$=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var M$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${gl.diagonal},
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
`;var D$=l.button`
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
`,B$=l.div`
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
`;var O$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${gl.diagonal},
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
`;var N$=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var H$=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var wS=l.button`
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
`,LS=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,SS=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,CS=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,IS=(0,Fx.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,or.jsxs)(wS,{ref:i,type:r??"button",...o,children:[(0,or.jsxs)(LS,{children:[(0,or.jsx)("span",{children:e}),t!=null&&(0,or.jsx)(SS,{children:t})]}),(0,or.jsx)(CS,{children:a})]}));IS.displayName="OptionRow";var W$=l.span`
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
`,G$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var Y$=l.table`
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
`,K$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var Z$=l.table`
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
`;var e8=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,t8=l.div`
  ${Yt}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,a8=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,r8=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var o8={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},n8=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var s8=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var d8=l.div`
  ${Ew}
  height: 100%;
  min-height: 0;
`,c8=l.header`
  ${Mw}
  flex-shrink: 0;

  ${Ae.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,f8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,p8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,g8=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Ae.md} {
    font-size: var(--ig-font-size-xl);
  }
`,m8=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,h8=l.div`
  ${zw}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Ae.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,$S=l.section`
  ${Yt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,v8=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,x8=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,b8=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,y8=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,ES=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,w8=l(ES)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Ae.md} {
    grid-template-columns: 1fr;
  }
`,L8=l($S)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,S8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,C8=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,I8=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,P8=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Ae.lg} {
    grid-template-columns: 1fr;
  }
`;var T8=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,R8=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Ae.lg} {
    grid-template-columns: 1fr;
  }
`,$8=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Ae.lg} {
    grid-template-columns: 1fr;
  }
`,E8=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Ae.lg} {
    grid-template-columns: 1fr;
  }
`,z8=l.nav`
  ${Yt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,A8=l.aside`
  ${Yt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,D8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,B8=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,F8=l.div`
  ${Bh}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,O8=l.aside`
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
`,N8=l.aside`
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
  ${Ae.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,Wx=l.div`
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
`,_8=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${Wx}:hover & { opacity: 0; }
  `}
`,H8=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${Wx}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,U8=l.button`
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
`,q8=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,W8=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,Vx=`
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
`,V8=l.a`
  ${Vx}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,G8=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,X8=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,Y8=l.button`
  ${Vx}
`,K8=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,Q8=l.span`
  display: contents;
`;var J8=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Ae.md} {
    justify-content: flex-start;
  }
`,eE=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,tE=l.div`
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
  ${Ae.md} {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
    border: 0;
  }
`,aE=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,rE=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,oE=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,iE=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,nE=gi.md;var AS=11;var DS=3,lE=AS+DS*2;var uE=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,dE=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,cE=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,fE=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,pE=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var vE=l.div`
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
`,xE=l.span`
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
`;var bE=l.div`
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
`,yE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,wE=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,LE=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,SE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,CE=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,IE=l(Pa).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,kE=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,PE=l(Pa).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,TE=l.input`
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
`,RE=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var $E=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,EE=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,ME=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,zE=l.button`
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
`,AE=l(Pa).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,DE=l(eo).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var FE=l.section`
  ${ve}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,OE=l.h3`
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
`,jE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var _E=l.label`
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
`,HE=l.div`
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
`;var qE=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var VE=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var XE=l.div`
  ${Nd}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,YE=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function l0({children:e,className:t}){return(0,n0.jsx)(Ed,{gap:3,className:t,children:e})}var QE=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var JE=new URL("./assets/favicon.ico","http://localhost/").href,eM=new URL("./assets/favicon.png","http://localhost/").href,tM=new URL("./assets/brand-mark.png","http://localhost/").href,aM=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var rM=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function US(){try{if(typeof Ih<"u"&&Ih.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var Sh=(...e)=>{},Ch=US(),oM={debug:Ch?console.debug.bind(console):Sh,log:Ch?console.log.bind(console):Sh,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var nM=xw.canvasExportBg;var Kt=c(I(),1);function f0(e){let[,t]=(0,Kt.useReducer)(a=>a+1,0);(0,Kt.useEffect)(()=>e.subscribe(t),[e])}function ro(e){let[t,a]=(0,Kt.useState)(null);return(0,Kt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function p0(){let[,e]=(0,Kt.useReducer)(t=>t+1,0);(0,Kt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Ta=c(I(),1);var m0=c(m(),1),qS=500,WS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,Il=e=>e instanceof Element&&e.id!==Yr&&e!==document.documentElement&&e!==document.body;function g0({active:e,onPick:t}){let[a,r]=(0,Ta.useState)(null),o=ro(a),i=(0,Ta.useRef)({x:-1,y:-1}),n=(0,Ta.useRef)(e);return n.current=e,(0,Ta.useEffect)(()=>{e||r(null)},[e]),(0,Ta.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!Il(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(Il(b)?b:null)})},p=b=>{!n.current||!Il(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,x=()=>clearTimeout(h),w=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:y,clientY:M}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(y,M);Il(g)&&t(g,y,M)},qS)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",w,{passive:!0}),document.addEventListener("touchmove",x,{passive:!0}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{cancelAnimationFrame(u),x(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",w),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[t]),o?(0,m0.jsx)(WS,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var h0=c(m(),1),VS=l.div`
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
`;function xc({el:e}){let t=ro(e);return t?(0,h0.jsx)(VS,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var v0=c(I(),1);var E={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteReplyAria:"Delete reply",deleteThreadTitle:"Delete this comment thread?",deleteReplyTitle:"Delete this reply?",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareDisabledHint:"No version recorded for this thread",before:"Before",after:"After",current:"current",versionChipTitle:"Set as compare baseline (Before)",defaultAuthor:"Guest"};var dr=c(m(),1),kl="#f59e0b",GS=l.button`
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
  background: ${kl};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,XS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${kl};
  background: color-mix(in srgb, ${kl} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${kl};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function x0({store:e,onPinClick:t}){p0();let[a,r]=(0,v0.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ja(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),x=`${Math.round(p/8)}:${Math.round(h/8)}`,w=o.get(x)??0;o.set(x,w+1);let b=p-w*28,y=b>=16?b:p+w*28;i.push((0,dr.jsx)(GS,{className:"fbw-pin",type:"button",title:Za(n),style:{left:y,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${E.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,dr.jsxs)(dr.Fragment,{children:[i,a&&(0,dr.jsx)(XS,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var bc=c(I(),1);var oo=c(I(),1);var b0=c(m(),1),YS=340,KS=l.div`
  position: fixed;
  width: ${YS}px;
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
`;function Pl({targetEl:e,point:t,children:a}){let r=(0,oo.useRef)(null),o=ro(e??null),[i,n]=(0,oo.useState)(null);return(0,oo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,x=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:x}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,b0.jsx)(KS,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var Tl=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Rl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var zt=c(m(),1),QS=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function y0({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,bc.useState)(""),[u,d]=(0,bc.useState)(e.author),p=()=>{let h=n.trim();if(!h)return;let x=u.trim()||E.defaultAuthor;e.author=x;let w=new Date().toISOString(),b={id:Qa(),createdAt:w,anchor:a,resolved:!1,comments:[{id:Qa(),author:x,body:h,createdAt:w,version:st.version}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(b),i(b)};return(0,zt.jsxs)(Pl,{targetEl:t,point:r,children:[(0,zt.jsxs)(Tl,{className:"fbw-composer",children:[(0,zt.jsx)(Rl,{children:E.composerTitle}),(0,zt.jsx)(De,{variant:"ghost",size:"sm","aria-label":E.close,onClick:o,children:(0,zt.jsx)(Ee,{size:16})})]}),(0,zt.jsxs)(QS,{children:[E.composerTarget,": ",a.textSnippet||a.selector]}),(0,zt.jsx)(Pa,{size:"sm",placeholder:E.namePlaceholder,"aria-label":E.nameAria,value:u,onChange:h=>d(h.target.value)}),(0,zt.jsx)(yl,{value:n,onChange:s,onSubmit:p,placeholder:E.composerPlaceholder,submitLabel:E.post})]})}var bi=c(I(),1);var Ze=c(m(),1),ZS=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-surface-panel);
`,JS=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,w0=l.span`
  flex: 1;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);

  code {
    font-weight: var(--ig-font-weight-regular);
    color: var(--ig-color-text-muted);
  }
`,eC=l.div`
  flex: 1;
  display: flex;
  gap: 2px;
  background: var(--ig-color-border-subtle);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,L0=l.iframe`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`,S0=(e,t)=>`${e}${t}?fbw=embed`;function C0({beforeVersion:e,anchor:t,onClose:a}){let r=o=>{o.currentTarget.contentWindow?.postMessage({type:"fbw:jump",anchor:t},"*")};return(0,Ze.jsxs)(ZS,{className:"fbw-compare",children:[(0,Ze.jsxs)(JS,{children:[(0,Ze.jsxs)(w0,{children:[E.before," ",(0,Ze.jsx)("code",{children:e})]}),(0,Ze.jsxs)(w0,{children:[E.after," ",(0,Ze.jsx)("code",{children:st.version??E.current})]}),(0,Ze.jsx)(De,{variant:"ghost",size:"sm","aria-label":E.close,onClick:a,children:(0,Ze.jsx)(Ee,{size:16})})]}),(0,Ze.jsxs)(eC,{children:[(0,Ze.jsx)(L0,{className:"fbw-compare-before",title:E.before,src:S0(st.compareBase,t.page),onLoad:r}),(0,Ze.jsx)(L0,{className:"fbw-compare-after",title:E.after,src:S0(location.origin,t.page),onLoad:r})]})]})}var k0=c(m(),1),tC=l.button`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  cursor: pointer;
  border: var(--ig-border-1px) solid
    ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-border-subtle)"};
  color: ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
  background: ${e=>e.$active?"var(--ig-color-accent-soft, transparent)":"transparent"};
  ${e=>e.$active&&"font-weight: var(--ig-font-weight-bold);"}
`;function I0({version:e,changed:t,active:a,onSelect:r}){return(0,k0.jsx)(tC,{type:"button",className:"fbw-verchip",title:E.versionChipTitle,$changed:t,$active:a,onClick:()=>r(e),children:e})}var Y=c(m(),1),aC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,rC=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,oC=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function P0({store:e,thread:t,number:a,onClose:r}){let o=bl(),[i,n]=(0,bi.useState)(""),[s,u]=(0,bi.useState)(e.author),[d,p]=(0,bi.useState)(t.comments[0]?.version),[h,x]=(0,bi.useState)(!1),w=t.anchor.page===location.pathname?Ja(t.anchor):null,b=()=>{let g=i.trim();if(!g)return;let f=s.trim()||E.defaultAuthor;e.author=f,e.addComment(t.id,f,g,st.version),n("")},y=async()=>{await o({title:E.deleteThreadTitle,description:Za(t),confirmLabel:E.delete,cancelLabel:E.cancel,danger:!0})&&(e.removeThread(t.id),r())},M=async g=>{await o({title:E.deleteReplyTitle,description:g.body,confirmLabel:E.delete,cancelLabel:E.cancel,danger:!0})&&e.removeComment(t.id,g.id)};return(0,Y.jsxs)(Pl,{targetEl:w,children:[(0,Y.jsxs)(Tl,{className:"fbw-thread",children:[(0,Y.jsxs)(Rl,{children:[E.thread," ",a]}),t.resolved&&(0,Y.jsx)(xi,{$tone:"success",children:E.archivedBadge}),(0,Y.jsx)(De,{variant:"ghost",size:"sm",tone:"danger","aria-label":E.deleteThreadAria,onClick:y,children:(0,Y.jsx)(Xt,{size:16})}),(0,Y.jsx)(De,{variant:"ghost",size:"sm","aria-label":E.close,onClick:r,children:(0,Y.jsx)(Ee,{size:16})})]}),(0,Y.jsx)(l0,{children:t.comments.map((g,f)=>(0,Y.jsx)(bx,{author:g.author,timestamp:oC(g.createdAt),body:g.body,actions:(0,Y.jsxs)(rC,{children:[g.version&&(0,Y.jsx)(I0,{version:g.version,changed:f>0&&g.version!==t.comments[f-1].version,active:g.version===d,onSelect:p}),e.canRemoveComment(t.id,g.id)&&(0,Y.jsx)(De,{variant:"ghost",size:"sm",tone:"danger","aria-label":E.deleteReplyAria,onClick:()=>M(g),children:(0,Y.jsx)(Xt,{size:14})})]})},g.id))}),!e.author&&(0,Y.jsx)(Pa,{size:"sm",placeholder:E.namePlaceholder,"aria-label":E.nameAria,value:s,onChange:g=>u(g.target.value)}),(0,Y.jsx)(yl,{value:i,onChange:n,onSubmit:b,placeholder:E.replyPlaceholder,submitLabel:E.reply}),(0,Y.jsxs)(aC,{children:[(0,Y.jsx)(vi,{tone:t.resolved?"muted":"accent",iconLeading:(0,Y.jsx)(Kr,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?E.unarchive:E.archive}),(0,Y.jsx)(vi,{tone:"accent",iconLeading:(0,Y.jsx)(er,{size:14}),disabled:!d,title:d?void 0:E.compareDisabledHint,onClick:()=>x(!0),children:E.compare})]}),h&&d&&(0,Y.jsx)(C0,{beforeVersion:d,anchor:t.anchor,onClose:()=>x(!1)})]})}var yc=c(I(),1);function T0(e,t){return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:t},null,2)}function R0(e,t){let a=new Blob([T0(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function $0(e,t){try{return await navigator.clipboard.writeText(T0(e,t)),!0}catch{return!1}}var ut=c(m(),1),nC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,lC=l.span`
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
`,sC=l.span`
  margin-left: auto;
`,uC=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,dC=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function E0({store:e,thread:t,number:a,onSelect:r}){let o=bl(),i=async s=>{s.stopPropagation(),await o({title:E.deleteThreadTitle,description:Za(t),confirmLabel:E.delete,cancelLabel:E.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,ut.jsxs)(xx,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,ut.jsxs)(nC,{children:[(0,ut.jsx)(lC,{children:a}),(0,ut.jsx)("span",{children:rh(t)}),t.resolved&&(0,ut.jsx)(xi,{$tone:"success",children:E.archivedBadge}),(0,ut.jsx)(sC,{}),(0,ut.jsx)(De,{variant:"ghost",size:"sm",tone:"danger","aria-label":E.deleteThreadAria,onClick:i,children:(0,ut.jsx)(Xt,{size:14})})]}),(0,ut.jsx)(uC,{children:Za(t)}),(0,ut.jsxs)(dC,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${E.replies}`]})]})}var ie=c(m(),1),cC=320,fC=l.button`
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
`,pC=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${cC}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,gC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,mC=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,hC=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function M0({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,yc.useState)(null),[n,s]=(0,yc.useState)(!1),u=e.list(),d=u.filter(y=>!y.resolved),p=u.filter(y=>y.resolved),h=y=>u.findIndex(M=>M.id===y.id)+1,x=y=>{if(!fi(y.anchor)){lh(y.anchor);return}setTimeout(()=>r(y.id),450)},w=async()=>{i(await $0(e.project,e.exportList())?E.copied:E.copyFailed),setTimeout(()=>i(null),1500)},b=y=>y.map(M=>(0,ie.jsx)(E0,{store:e,thread:M,number:h(M),onSelect:x},M.id));return(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsxs)(fC,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[E.tab," ",u.length]}),(0,ie.jsx)(pC,{$open:t,className:"fbw-sidebar",children:(0,ie.jsx)(Ex,{headerSlot:(0,ie.jsxs)(gC,{children:[(0,ie.jsxs)("span",{children:[E.listTitle," (",u.length,")"]}),(0,ie.jsx)(De,{variant:"ghost",size:"sm","aria-label":E.close,onClick:()=>a(!1),children:(0,ie.jsx)(Ee,{size:16})})]}),bodySectionTitle:E.openSection,bodySlot:d.length===0?(0,ie.jsxs)(mC,{children:[E.emptyLine1,(0,ie.jsx)("br",{}),E.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,ie.jsxs)(ie.Fragment,{children:[(0,ie.jsx)(vi,{tone:"muted",onClick:()=>s(y=>!y),children:n?E.hideArchived(p.length):E.showArchived(p.length)}),n&&b(p)]}),(0,ie.jsxs)(hC,{children:[(0,ie.jsx)(eo,{variant:"secondary",size:"sm",onClick:w,children:o??E.copy}),(0,ie.jsx)(eo,{variant:"solid",size:"sm",onClick:()=>R0(e.project,e.exportList()),children:E.downloadJson})]})]})})]})}var Qt=c(m(),1),z0=l.button`
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
`,vC=l.span`
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

  ${z0}:hover + & {
    opacity: 1;
  }
`,xC=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function A0({store:e}){let t=e.list().length;return(0,Qt.jsxs)(Qt.Fragment,{children:[(0,Qt.jsxs)(z0,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?E.toggleOff:E.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,Qt.jsx)(xC,{children:(0,Qt.jsx)(Av,{children:t})})]}),(0,Qt.jsx)(vC,{children:e.enabled?E.toggleHintOn:E.toggleOn})]})}var St=c(m(),1);function D0({store:e}){f0(e);let[t,a]=(0,yi.useState)(null),[r,o]=(0,yi.useState)(!1),i=e.enabled;(0,yi.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ja(n.anchor):null;return(0,St.jsxs)(ux,{children:[i&&(0,St.jsx)(g0,{active:!t,onPick:(d,p,h)=>a({kind:"draft",el:d,anchor:nh(d),point:{x:p,y:h}})}),i&&(0,St.jsx)(x0,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,St.jsx)(xc,{el:t.el}),u&&(0,St.jsx)(xc,{el:u}),t?.kind==="draft"&&(0,St.jsx)(y0,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,St.jsx)(P0,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,St.jsx)(M0,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,St.jsx)(A0,{store:e})]})}var wc=c(m(),1),bC=2147483e3;function yC(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var wC=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function B0(){if(st.embed){uh();return}if(document.getElementById(Yr))return;let e=document.createElement("div");e.id=Yr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${bC};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=yC(ah)+wC;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new nl(st.project);(0,F0.createRoot)(o).render((0,wc.jsx)(Zm,{target:r,children:(0,wc.jsx)(D0,{store:i})})),st.seedUrl&&typeof fetch=="function"&&fetch(st.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),sh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",B0):B0();})();
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
lucide-react/dist/esm/icons/maximize-2.js:
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
