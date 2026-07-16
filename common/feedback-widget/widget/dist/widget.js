"use strict";(()=>{var Bb=Object.create;var Jc=Object.defineProperty;var Fb=Object.getOwnPropertyDescriptor;var Ob=Object.getOwnPropertyNames;var jb=Object.getPrototypeOf,_b=Object.prototype.hasOwnProperty;var Nt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Nb=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ob(t))!_b.call(e,o)&&o!==a&&Jc(e,o,{get:()=>t[o],enumerable:!(r=Fb(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?Bb(jb(e)):{},Nb(t||!e||!e.__esModule?Jc(a,"default",{value:e,enumerable:!0}):a,e));var ff=Nt(B=>{"use strict";var wo=Symbol.for("react.element"),Hb=Symbol.for("react.portal"),Ub=Symbol.for("react.fragment"),qb=Symbol.for("react.strict_mode"),Wb=Symbol.for("react.profiler"),Vb=Symbol.for("react.provider"),Gb=Symbol.for("react.context"),Xb=Symbol.for("react.forward_ref"),Yb=Symbol.for("react.suspense"),Kb=Symbol.for("react.memo"),Qb=Symbol.for("react.lazy"),ef=Symbol.iterator;function Zb(e){return e===null||typeof e!="object"?null:(e=ef&&e[ef]||e["@@iterator"],typeof e=="function"?e:null)}var rf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},of=Object.assign,nf={};function vr(e,t,a){this.props=e,this.context=t,this.refs=nf,this.updater=a||rf}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function lf(){}lf.prototype=vr.prototype;function ts(e,t,a){this.props=e,this.context=t,this.refs=nf,this.updater=a||rf}var as=ts.prototype=new lf;as.constructor=ts;of(as,vr.prototype);as.isPureReactComponent=!0;var tf=Array.isArray,sf=Object.prototype.hasOwnProperty,rs={current:null},uf={key:!0,ref:!0,__self:!0,__source:!0};function df(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)sf.call(t,r)&&!uf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:wo,type:e,key:i,ref:n,props:o,_owner:rs.current}}function Jb(e,t){return{$$typeof:wo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===wo}function ey(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var af=/\/+/g;function es(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ey(""+e.key):t.toString(36)}function ji(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case wo:case Hb:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+es(n,0):r,tf(o)?(a="",e!=null&&(a=e.replace(af,"$&/")+"/"),ji(o,t,a,"",function(d){return d})):o!=null&&(os(o)&&(o=Jb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(af,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",tf(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+es(i,s);n+=ji(i,t,a,u,o)}else if(u=Zb(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+es(i,s++),n+=ji(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Oi(e,t,a){if(e==null)return e;var r=[],o=0;return ji(e,r,"","",function(i){return t.call(a,i,o++)}),r}function ty(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},_i={transition:null},ay={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:_i,ReactCurrentOwner:rs};function cf(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Oi,forEach:function(e,t,a){Oi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=vr;B.Fragment=Ub;B.Profiler=Wb;B.PureComponent=ts;B.StrictMode=qb;B.Suspense=Yb;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ay;B.act=cf;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=of({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)sf.call(t,u)&&!uf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:wo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:Gb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Vb,_context:e},e.Consumer=e};B.createElement=df;B.createFactory=function(e){var t=df.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Xb,render:e}};B.isValidElement=os;B.lazy=function(e){return{$$typeof:Qb,_payload:{_status:-1,_result:e},_init:ty}};B.memo=function(e,t){return{$$typeof:Kb,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=_i.transition;_i.transition={};try{e()}finally{_i.transition=t}};B.unstable_act=cf;B.useCallback=function(e,t){return $e.current.useCallback(e,t)};B.useContext=function(e){return $e.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};B.useEffect=function(e,t){return $e.current.useEffect(e,t)};B.useId=function(){return $e.current.useId()};B.useImperativeHandle=function(e,t,a){return $e.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return $e.current.useMemo(e,t)};B.useReducer=function(e,t,a){return $e.current.useReducer(e,t,a)};B.useRef=function(e){return $e.current.useRef(e)};B.useState=function(e){return $e.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return $e.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return $e.current.useTransition()};B.version="18.3.1"});var C=Nt((mk,pf)=>{"use strict";pf.exports=ff()});var Sf=Nt(q=>{"use strict";function ss(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<Ni(o,t))e[r]=t,e[a]=o,a=r;else break e}}function vt(e){return e.length===0?null:e[0]}function Ui(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>Ni(s,a))u<o&&0>Ni(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>Ni(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function Ni(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(gf=performance,q.unstable_now=function(){return gf.now()}):(is=Date,mf=is.now(),q.unstable_now=function(){return is.now()-mf});var gf,is,mf,Et=[],la=[],ry=1,at=null,Se=3,qi=!1,ja=!1,So=!1,xf=typeof setTimeout=="function"?setTimeout:null,bf=typeof clearTimeout=="function"?clearTimeout:null,hf=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function us(e){for(var t=vt(la);t!==null;){if(t.callback===null)Ui(la);else if(t.startTime<=e)Ui(la),t.sortIndex=t.expirationTime,ss(Et,t);else break;t=vt(la)}}function ds(e){if(So=!1,us(e),!ja)if(vt(Et)!==null)ja=!0,fs(cs);else{var t=vt(la);t!==null&&ps(ds,t.startTime-e)}}function cs(e,t){ja=!1,So&&(So=!1,bf(Co),Co=-1),qi=!0;var a=Se;try{for(us(t),at=vt(Et);at!==null&&(!(at.expirationTime>t)||e&&!Lf());){var r=at.callback;if(typeof r=="function"){at.callback=null,Se=at.priorityLevel;var o=r(at.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?at.callback=o:at===vt(Et)&&Ui(Et),us(t)}else Ui(Et);at=vt(Et)}if(at!==null)var i=!0;else{var n=vt(la);n!==null&&ps(ds,n.startTime-t),i=!1}return i}finally{at=null,Se=a,qi=!1}}var Wi=!1,Hi=null,Co=-1,yf=5,wf=-1;function Lf(){return!(q.unstable_now()-wf<yf)}function ns(){if(Hi!==null){var e=q.unstable_now();wf=e;var t=!0;try{t=Hi(!0,e)}finally{t?Lo():(Wi=!1,Hi=null)}}else Wi=!1}var Lo;typeof hf=="function"?Lo=function(){hf(ns)}:typeof MessageChannel<"u"?(ls=new MessageChannel,vf=ls.port2,ls.port1.onmessage=ns,Lo=function(){vf.postMessage(null)}):Lo=function(){xf(ns,0)};var ls,vf;function fs(e){Hi=e,Wi||(Wi=!0,Lo())}function ps(e,t){Co=xf(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){ja||qi||(ja=!0,fs(cs))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):yf=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return Se};q.unstable_getFirstCallbackNode=function(){return vt(Et)};q.unstable_next=function(e){switch(Se){case 1:case 2:case 3:var t=3;break;default:t=Se}var a=Se;Se=t;try{return e()}finally{Se=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Se;Se=e;try{return t()}finally{Se=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:ry++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,ss(la,e),vt(Et)===null&&e===vt(la)&&(So?(bf(Co),Co=-1):So=!0,ps(ds,a-r))):(e.sortIndex=o,ss(Et,e),ja||qi||(ja=!0,fs(cs))),e};q.unstable_shouldYield=Lf;q.unstable_wrapCallback=function(e){var t=Se;return function(){var a=Se;Se=t;try{return e.apply(this,arguments)}finally{Se=a}}}});var If=Nt((vk,Cf)=>{"use strict";Cf.exports=Sf()});var Rm=Nt(Ze=>{"use strict";var oy=C(),Ke=If();function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ap=new Set,Vo={};function Za(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(Vo[e]=t,e=0;e<t.length;e++)Ap.add(t[e])}var Gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bs=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kf={},Pf={};function ny(e){return Bs.call(Pf,e)?!0:Bs.call(kf,e)?!1:iy.test(e)?Pf[e]=!0:(kf[e]=!0,!1)}function ly(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function sy(e,t,a,r){if(t===null||typeof t>"u"||ly(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Tu=/[\-:]([a-z])/g;function Ru(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Tu,Ru);ve[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Tu,Ru);ve[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Tu,Ru);ve[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Eu(e,t,a,r){var o=ve.hasOwnProperty(t)?ve[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(sy(t,a,o,r)&&(a=null),r||o===null?ny(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Qt=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),yr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),$u=Symbol.for("react.strict_mode"),Fs=Symbol.for("react.profiler"),Mp=Symbol.for("react.provider"),zp=Symbol.for("react.context"),Au=Symbol.for("react.forward_ref"),Os=Symbol.for("react.suspense"),js=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),ua=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Dp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Tf=Symbol.iterator;function Io(e){return e===null||typeof e!="object"?null:(e=Tf&&e[Tf]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,gs;function Mo(e){if(gs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);gs=t&&t[1]||""}return`
`+gs+e}var ms=!1;function hs(e,t){if(!e||ms)return"";ms=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{ms=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Mo(e):""}function uy(e){switch(e.tag){case 5:return Mo(e.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return e=hs(e.type,!1),e;case 11:return e=hs(e.type.render,!1),e;case 1:return e=hs(e.type,!0),e;default:return""}}function _s(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case yr:return"Portal";case Fs:return"Profiler";case $u:return"StrictMode";case Os:return"Suspense";case js:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case zp:return(e.displayName||"Context")+".Consumer";case Mp:return(e._context.displayName||"Context")+".Provider";case Au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Mu:return t=e.displayName||null,t!==null?t:_s(e.type)||"Memo";case ua:t=e._payload,e=e._init;try{return _s(e(t))}catch{}}return null}function dy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _s(t);case 8:return t===$u?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Sa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cy(e){var t=Bp(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=cy(e))}function Fp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=Bp(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ns(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Rf(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=Sa(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Op(e,t){t=t.checked,t!=null&&Eu(e,"checked",t,!1)}function Hs(e,t){Op(e,t);var a=Sa(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Us(e,t.type,a):t.hasOwnProperty("defaultValue")&&Us(e,t.type,Sa(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ef(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Us(e,t,a){(t!=="number"||Ln(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var zo=Array.isArray;function Ar(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Sa(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function qs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $f(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(I(92));if(zo(a)){if(1<a.length)throw Error(I(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:Sa(a)}}function jp(e,t){var a=Sa(t.value),r=Sa(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function Af(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function _p(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ws(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?_p(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Np=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Go(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fy=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(e){fy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fo[t]=Fo[e]})});function Hp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Fo.hasOwnProperty(e)&&Fo[e]?(""+t).trim():t+"px"}function Up(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=Hp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var py=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vs(e,t){if(t){if(py[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Gs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function zu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Mr=null,zr=null;function Mf(e){if(e=ci(e)){if(typeof Ys!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Kn(t),Ys(e.stateNode,e.type,t))}}function qp(e){Mr?zr?zr.push(e):zr=[e]:Mr=e}function Wp(){if(Mr){var e=Mr,t=zr;if(zr=Mr=null,Mf(e),t)for(e=0;e<t.length;e++)Mf(t[e])}}function Vp(e,t){return e(t)}function Gp(){}var vs=!1;function Xp(e,t,a){if(vs)return e(t,a);vs=!0;try{return Vp(e,t,a)}finally{vs=!1,(Mr!==null||zr!==null)&&(Gp(),Wp())}}function Xo(e,t){var a=e.stateNode;if(a===null)return null;var r=Kn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(I(231,t,typeof a));return a}var Ks=!1;if(Gt)try{xr={},Object.defineProperty(xr,"passive",{get:function(){Ks=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Ks=!1}var xr;function gy(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var Oo=!1,Sn=null,Cn=!1,Qs=null,my={onError:function(e){Oo=!0,Sn=e}};function hy(e,t,a,r,o,i,n,s,u){Oo=!1,Sn=null,gy.apply(my,arguments)}function vy(e,t,a,r,o,i,n,s,u){if(hy.apply(this,arguments),Oo){if(Oo){var d=Sn;Oo=!1,Sn=null}else throw Error(I(198));Cn||(Cn=!0,Qs=d)}}function Ja(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Yp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zf(e){if(Ja(e)!==e)throw Error(I(188))}function xy(e){var t=e.alternate;if(!t){if(t=Ja(e),t===null)throw Error(I(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return zf(o),e;if(i===r)return zf(o),t;i=i.sibling}throw Error(I(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(I(189))}}if(a.alternate!==r)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?e:t}function Kp(e){return e=xy(e),e!==null?Qp(e):null}function Qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Qp(e);if(t!==null)return t;e=e.sibling}return null}var Zp=Ke.unstable_scheduleCallback,Df=Ke.unstable_cancelCallback,by=Ke.unstable_shouldYield,yy=Ke.unstable_requestPaint,re=Ke.unstable_now,wy=Ke.unstable_getCurrentPriorityLevel,Du=Ke.unstable_ImmediatePriority,Jp=Ke.unstable_UserBlockingPriority,In=Ke.unstable_NormalPriority,Ly=Ke.unstable_LowPriority,eg=Ke.unstable_IdlePriority,Vn=null,zt=null;function Sy(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Vn,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:ky,Cy=Math.log,Iy=Math.LN2;function ky(e){return e>>>=0,e===0?32:31-(Cy(e)/Iy|0)|0}var Yi=64,Ki=4194304;function Do(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kn(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=Do(s):(i&=n,i!==0&&(r=Do(i)))}else n=a&~o,n!==0?r=Do(n):i!==0&&(r=Do(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-Lt(t),o=1<<a,r|=e[a],t&=~o;return r}function Py(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ty(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-Lt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=Py(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function tg(){var e=Yi;return Yi<<=1,(Yi&4194240)===0&&(Yi=64),e}function xs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ui(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=a}function Ry(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-Lt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function Bu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-Lt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var _=0;function ag(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var rg,Fu,og,ig,ng,Js=!1,Qi=[],ma=null,ha=null,va=null,Yo=new Map,Ko=new Map,ca=[],Ey="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bf(e,t){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":ha=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":Yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(t.pointerId)}}function ko(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ci(t),t!==null&&Fu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $y(e,t,a,r,o){switch(t){case"focusin":return ma=ko(ma,e,t,a,r,o),!0;case"dragenter":return ha=ko(ha,e,t,a,r,o),!0;case"mouseover":return va=ko(va,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Yo.set(i,ko(Yo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Ko.set(i,ko(Ko.get(i)||null,e,t,a,r,o)),!0}return!1}function lg(e){var t=Ha(e.target);if(t!==null){var a=Ja(t);if(a!==null){if(t=a.tag,t===13){if(t=Yp(a),t!==null){e.blockedOn=t,ng(e.priority,function(){og(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Xs=r,a.target.dispatchEvent(r),Xs=null}else return t=ci(a),t!==null&&Fu(t),e.blockedOn=a,!1;t.shift()}return!0}function Ff(e,t,a){fn(e)&&a.delete(t)}function Ay(){Js=!1,ma!==null&&fn(ma)&&(ma=null),ha!==null&&fn(ha)&&(ha=null),va!==null&&fn(va)&&(va=null),Yo.forEach(Ff),Ko.forEach(Ff)}function Po(e,t){e.blockedOn===t&&(e.blockedOn=null,Js||(Js=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Ay)))}function Qo(e){function t(o){return Po(o,e)}if(0<Qi.length){Po(Qi[0],e);for(var a=1;a<Qi.length;a++){var r=Qi[a];r.blockedOn===e&&(r.blockedOn=null)}}for(ma!==null&&Po(ma,e),ha!==null&&Po(ha,e),va!==null&&Po(va,e),Yo.forEach(t),Ko.forEach(t),a=0;a<ca.length;a++)r=ca[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<ca.length&&(a=ca[0],a.blockedOn===null);)lg(a),a.blockedOn===null&&ca.shift()}var Dr=Qt.ReactCurrentBatchConfig,Pn=!0;function My(e,t,a,r){var o=_,i=Dr.transition;Dr.transition=null;try{_=1,Ou(e,t,a,r)}finally{_=o,Dr.transition=i}}function zy(e,t,a,r){var o=_,i=Dr.transition;Dr.transition=null;try{_=4,Ou(e,t,a,r)}finally{_=o,Dr.transition=i}}function Ou(e,t,a,r){if(Pn){var o=eu(e,t,a,r);if(o===null)Is(e,t,r,Tn,a),Bf(e,r);else if($y(o,e,t,a,r))r.stopPropagation();else if(Bf(e,r),t&4&&-1<Ey.indexOf(e)){for(;o!==null;){var i=ci(o);if(i!==null&&rg(i),i=eu(e,t,a,r),i===null&&Is(e,t,r,Tn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else Is(e,t,r,null,a)}}var Tn=null;function eu(e,t,a,r){if(Tn=null,e=zu(r),e=Ha(e),e!==null)if(t=Ja(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Yp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function sg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wy()){case Du:return 1;case Jp:return 4;case In:case Ly:return 16;case eg:return 536870912;default:return 16}default:return 16}}var pa=null,ju=null,pn=null;function ug(){if(pn)return pn;var e,t=ju,a=t.length,r,o="value"in pa?pa.value:pa.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return pn=o.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function Of(){return!1}function Qe(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zi:Of,this.isPropagationStopped=Of,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_u=Qe(Wr),di=Q({},Wr,{view:0,detail:0}),Dy=Qe(di),bs,ys,To,Gn=Q({},di,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==To&&(To&&e.type==="mousemove"?(bs=e.screenX-To.screenX,ys=e.screenY-To.screenY):ys=bs=0,To=e),bs)},movementY:function(e){return"movementY"in e?e.movementY:ys}}),jf=Qe(Gn),By=Q({},Gn,{dataTransfer:0}),Fy=Qe(By),Oy=Q({},di,{relatedTarget:0}),ws=Qe(Oy),jy=Q({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),_y=Qe(jy),Ny=Q({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hy=Qe(Ny),Uy=Q({},Wr,{data:0}),_f=Qe(Uy),qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vy[e])?!!t[e]:!1}function Nu(){return Gy}var Xy=Q({},di,{key:function(e){if(e.key){var t=qy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?gn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yy=Qe(Xy),Ky=Q({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=Qe(Ky),Qy=Q({},di,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Zy=Qe(Qy),Jy=Q({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),e1=Qe(Jy),t1=Q({},Gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Qe(t1),r1=[9,13,27,32],Hu=Gt&&"CompositionEvent"in window,jo=null;Gt&&"documentMode"in document&&(jo=document.documentMode);var o1=Gt&&"TextEvent"in window&&!jo,dg=Gt&&(!Hu||jo&&8<jo&&11>=jo),Hf=" ",Uf=!1;function cg(e,t){switch(e){case"keyup":return r1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function i1(e,t){switch(e){case"compositionend":return fg(t);case"keypress":return t.which!==32?null:(Uf=!0,Hf);case"textInput":return e=t.data,e===Hf&&Uf?null:e;default:return null}}function n1(e,t){if(Lr)return e==="compositionend"||!Hu&&cg(e,t)?(e=ug(),pn=ju=pa=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return dg&&t.locale!=="ko"?null:t.data;default:return null}}var l1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!l1[e.type]:t==="textarea"}function pg(e,t,a,r){qp(r),t=Rn(t,"onChange"),0<t.length&&(a=new _u("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var _o=null,Zo=null;function s1(e){Cg(e,0)}function Xn(e){var t=Ir(e);if(Fp(t))return e}function u1(e,t){if(e==="change")return t}var gg=!1;Gt&&(Gt?(en="oninput"in document,en||(Ls=document.createElement("div"),Ls.setAttribute("oninput","return;"),en=typeof Ls.oninput=="function"),Ji=en):Ji=!1,gg=Ji&&(!document.documentMode||9<document.documentMode));var Ji,en,Ls;function Wf(){_o&&(_o.detachEvent("onpropertychange",mg),Zo=_o=null)}function mg(e){if(e.propertyName==="value"&&Xn(Zo)){var t=[];pg(t,Zo,e,zu(e)),Xp(s1,t)}}function d1(e,t,a){e==="focusin"?(Wf(),_o=t,Zo=a,_o.attachEvent("onpropertychange",mg)):e==="focusout"&&Wf()}function c1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xn(Zo)}function f1(e,t){if(e==="click")return Xn(t)}function p1(e,t){if(e==="input"||e==="change")return Xn(t)}function g1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:g1;function Jo(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Bs.call(t,o)||!Ct(e[o],t[o]))return!1}return!0}function Vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gf(e,t){var a=Vf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function hg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?hg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vg(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ln(e.document)}return t}function Uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function m1(e){var t=vg(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&hg(a.ownerDocument.documentElement,a)){if(r!==null&&Uu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Gf(a,i);var n=Gf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var h1=Gt&&"documentMode"in document&&11>=document.documentMode,Sr=null,tu=null,No=null,au=!1;function Xf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;au||Sr==null||Sr!==Ln(r)||(r=Sr,"selectionStart"in r&&Uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),No&&Jo(No,r)||(No=r,r=Rn(tu,"onSelect"),0<r.length&&(t=new _u("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Sr)))}function tn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Cr={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionend:tn("Transition","TransitionEnd")},Ss={},xg={};Gt&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Yn(e){if(Ss[e])return Ss[e];if(!Cr[e])return e;var t=Cr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in xg)return Ss[e]=t[a];return e}var bg=Yn("animationend"),yg=Yn("animationiteration"),wg=Yn("animationstart"),Lg=Yn("transitionend"),Sg=new Map,Yf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ia(e,t){Sg.set(e,t),Za(t,[e])}for(an=0;an<Yf.length;an++)rn=Yf[an],Kf=rn.toLowerCase(),Qf=rn[0].toUpperCase()+rn.slice(1),Ia(Kf,"on"+Qf);var rn,Kf,Qf,an;Ia(bg,"onAnimationEnd");Ia(yg,"onAnimationIteration");Ia(wg,"onAnimationStart");Ia("dblclick","onDoubleClick");Ia("focusin","onFocus");Ia("focusout","onBlur");Ia(Lg,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Za("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Za("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Za("onBeforeInput",["compositionend","keypress","textInput","paste"]);Za("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Za("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),v1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bo));function Zf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,vy(r,t,void 0,e),e.currentTarget=null}function Cg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Zf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Zf(o,s,d),i=u}}}if(Cn)throw e=Qs,Cn=!1,Qs=null,e}function V(e,t){var a=t[lu];a===void 0&&(a=t[lu]=new Set);var r=e+"__bubble";a.has(r)||(Ig(t,e,2,!1),a.add(r))}function Cs(e,t,a){var r=0;t&&(r|=4),Ig(a,e,r,t)}var on="_reactListening"+Math.random().toString(36).slice(2);function ei(e){if(!e[on]){e[on]=!0,Ap.forEach(function(a){a!=="selectionchange"&&(v1.has(a)||Cs(a,!1,e),Cs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[on]||(t[on]=!0,Cs("selectionchange",!1,t))}}function Ig(e,t,a,r){switch(sg(t)){case 1:var o=My;break;case 4:o=zy;break;default:o=Ou}a=o.bind(null,t,a,e),o=void 0,!Ks||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Is(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=Ha(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}Xp(function(){var d=i,p=zu(a),v=[];e:{var h=Sg.get(e);if(h!==void 0){var w=_u,b=e;switch(e){case"keypress":if(gn(a)===0)break e;case"keydown":case"keyup":w=Yy;break;case"focusin":b="focus",w=ws;break;case"focusout":b="blur",w=ws;break;case"beforeblur":case"afterblur":w=ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Fy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Zy;break;case bg:case yg:case wg:w=_y;break;case Lg:w=e1;break;case"scroll":w=Dy;break;case"wheel":w=a1;break;case"copy":case"cut":case"paste":w=Hy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Nf}var y=(t&4)!==0,A=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var f=d,x;f!==null;){x=f;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=Xo(f,g),S!=null&&y.push(ti(f,S,x)))),A)break;f=f.return}0<y.length&&(h=new w(h,b,null,a,p),v.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&a!==Xs&&(b=a.relatedTarget||a.fromElement)&&(Ha(b)||b[Xt]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(b=a.relatedTarget||a.toElement,w=d,b=b?Ha(b):null,b!==null&&(A=Ja(b),b!==A||b.tag!==5&&b.tag!==6)&&(b=null)):(w=null,b=d),w!==b)){if(y=jf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=Nf,S="onPointerLeave",g="onPointerEnter",f="pointer"),A=w==null?h:Ir(w),x=b==null?h:Ir(b),h=new y(S,f+"leave",w,a,p),h.target=A,h.relatedTarget=x,S=null,Ha(p)===d&&(y=new y(g,f+"enter",b,a,p),y.target=x,y.relatedTarget=A,S=y),A=S,w&&b)t:{for(y=w,g=b,f=0,x=y;x;x=br(x))f++;for(x=0,S=g;S;S=br(S))x++;for(;0<f-x;)y=br(y),f--;for(;0<x-f;)g=br(g),x--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=br(y),g=br(g)}y=null}else y=null;w!==null&&Jf(v,h,w,y,!1),b!==null&&A!==null&&Jf(v,A,b,y,!0)}}e:{if(h=d?Ir(d):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var P=u1;else if(qf(h))if(gg)P=p1;else{P=c1;var E=d1}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=f1);if(P&&(P=P(e,d))){pg(v,P,a,p);break e}E&&E(e,h,d),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Us(h,"number",h.value)}switch(E=d?Ir(d):window,e){case"focusin":(qf(E)||E.contentEditable==="true")&&(Sr=E,tu=d,No=null);break;case"focusout":No=tu=Sr=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Xf(v,a,p);break;case"selectionchange":if(h1)break;case"keydown":case"keyup":Xf(v,a,p)}var k;if(Hu)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Lr?cg(e,a)&&(R="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(R="onCompositionStart");R&&(dg&&a.locale!=="ko"&&(Lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Lr&&(k=ug()):(pa=p,ju="value"in pa?pa.value:pa.textContent,Lr=!0)),E=Rn(d,R),0<E.length&&(R=new _f(R,e,null,a,p),v.push({event:R,listeners:E}),k?R.data=k:(k=fg(a),k!==null&&(R.data=k)))),(k=o1?i1(e,a):n1(e,a))&&(d=Rn(d,"onBeforeInput"),0<d.length&&(p=new _f("onBeforeInput","beforeinput",null,a,p),v.push({event:p,listeners:d}),p.data=k))}Cg(v,t)})}function ti(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Rn(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Xo(e,a),i!=null&&r.unshift(ti(e,i,o)),i=Xo(e,t),i!=null&&r.push(ti(e,i,o))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Jf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Xo(a,i),u!=null&&n.unshift(ti(a,u,s))):o||(u=Xo(a,i),u!=null&&n.push(ti(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var x1=/\r\n?/g,b1=/\u0000|\uFFFD/g;function ep(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(b1,"")}function nn(e,t,a){if(t=ep(t),ep(e)!==t&&a)throw Error(I(425))}function En(){}var ru=null,ou=null;function iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,y1=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,w1=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(e){return tp.resolve(null).then(e).catch(L1)}:nu;function L1(e){setTimeout(function(){throw e})}function ks(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Qo(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Qo(t)}function xa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ap(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Vr,ai="__reactProps$"+Vr,Xt="__reactContainer$"+Vr,lu="__reactEvents$"+Vr,S1="__reactListeners$"+Vr,C1="__reactHandles$"+Vr;function Ha(e){var t=e[Mt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xt]||a[Mt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=ap(e);e!==null;){if(a=e[Mt])return a;e=ap(e)}return t}e=a,a=e.parentNode}return null}function ci(e){return e=e[Mt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Kn(e){return e[ai]||null}var su=[],kr=-1;function ka(e){return{current:e}}function G(e){0>kr||(e.current=su[kr],su[kr]=null,kr--)}function W(e,t){kr++,su[kr]=e.current,e.current=t}var Ca={},Pe=ka(Ca),Ue=ka(!1),Ga=Ca;function jr(e,t){var a=e.type.contextTypes;if(!a)return Ca;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qe(e){return e=e.childContextTypes,e!=null}function $n(){G(Ue),G(Pe)}function rp(e,t,a){if(Pe.current!==Ca)throw Error(I(168));W(Pe,t),W(Ue,a)}function kg(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,dy(e)||"Unknown",o));return Q({},a,r)}function An(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ca,Ga=Pe.current,W(Pe,e),W(Ue,Ue.current),!0}function op(e,t,a){var r=e.stateNode;if(!r)throw Error(I(169));a?(e=kg(e,t,Ga),r.__reactInternalMemoizedMergedChildContext=e,G(Ue),G(Pe),W(Pe,e)):G(Ue),W(Ue,a)}var Ut=null,Qn=!1,Ps=!1;function Pg(e){Ut===null?Ut=[e]:Ut.push(e)}function I1(e){Qn=!0,Pg(e)}function Pa(){if(!Ps&&Ut!==null){Ps=!0;var e=0,t=_;try{var a=Ut;for(_=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}Ut=null,Qn=!1}catch(o){throw Ut!==null&&(Ut=Ut.slice(e+1)),Zp(Du,Pa),o}finally{_=t,Ps=!1}}return null}var Pr=[],Tr=0,Mn=null,zn=0,rt=[],ot=0,Xa=null,qt=1,Wt="";function _a(e,t){Pr[Tr++]=zn,Pr[Tr++]=Mn,Mn=e,zn=t}function Tg(e,t,a){rt[ot++]=qt,rt[ot++]=Wt,rt[ot++]=Xa,Xa=e;var r=qt;e=Wt;var o=32-Lt(r)-1;r&=~(1<<o),a+=1;var i=32-Lt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,qt=1<<32-Lt(t)+o|a<<o|r,Wt=i+e}else qt=1<<i|a<<o|r,Wt=e}function qu(e){e.return!==null&&(_a(e,1),Tg(e,1,0))}function Wu(e){for(;e===Mn;)Mn=Pr[--Tr],Pr[Tr]=null,zn=Pr[--Tr],Pr[Tr]=null;for(;e===Xa;)Xa=rt[--ot],rt[ot]=null,Wt=rt[--ot],rt[ot]=null,qt=rt[--ot],rt[ot]=null}var Ye=null,Xe=null,X=!1,wt=null;function Rg(e,t){var a=it(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function ip(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=xa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Xa!==null?{id:qt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=it(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ye=e,Xe=null,!0):!1;default:return!1}}function uu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function du(e){if(X){var t=Xe;if(t){var a=t;if(!ip(e,t)){if(uu(e))throw Error(I(418));t=xa(a.nextSibling);var r=Ye;t&&ip(e,t)?Rg(r,a):(e.flags=e.flags&-4097|2,X=!1,Ye=e)}}else{if(uu(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,Ye=e}}}function np(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ln(e){if(e!==Ye)return!1;if(!X)return np(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!iu(e.type,e.memoizedProps)),t&&(t=Xe)){if(uu(e))throw Eg(),Error(I(418));for(;t;)Rg(e,t),t=xa(t.nextSibling)}if(np(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Xe=xa(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ye?xa(e.stateNode.nextSibling):null;return!0}function Eg(){for(var e=Xe;e;)e=xa(e.nextSibling)}function _r(){Xe=Ye=null,X=!1}function Vu(e){wt===null?wt=[e]:wt.push(e)}var k1=Qt.ReactCurrentBatchConfig;function Ro(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(I(309));var r=a.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!a._owner)throw Error(I(290,e))}return e}function sn(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function lp(e){var t=e._init;return t(e._payload)}function $g(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=La(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,x,S){return f===null||f.tag!==6?(f=zs(x,g.mode,S),f.return=g,f):(f=o(f,x),f.return=g,f)}function u(g,f,x,S){var P=x.type;return P===wr?p(g,f,x.props.children,S,x.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ua&&lp(P)===f.type)?(S=o(f,x.props),S.ref=Ro(g,f,x),S.return=g,S):(S=wn(x.type,x.key,x.props,null,g.mode,S),S.ref=Ro(g,f,x),S.return=g,S)}function d(g,f,x,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Ds(x,g.mode,S),f.return=g,f):(f=o(f,x.children||[]),f.return=g,f)}function p(g,f,x,S,P){return f===null||f.tag!==7?(f=Va(x,g.mode,S,P),f.return=g,f):(f=o(f,x),f.return=g,f)}function v(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=zs(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vi:return x=wn(f.type,f.key,f.props,null,g.mode,x),x.ref=Ro(g,null,f),x.return=g,x;case yr:return f=Ds(f,g.mode,x),f.return=g,f;case ua:var S=f._init;return v(g,S(f._payload),x)}if(zo(f)||Io(f))return f=Va(f,g.mode,x,null),f.return=g,f;sn(g,f)}return null}function h(g,f,x,S){var P=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:s(g,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vi:return x.key===P?u(g,f,x,S):null;case yr:return x.key===P?d(g,f,x,S):null;case ua:return P=x._init,h(g,f,P(x._payload),S)}if(zo(x)||Io(x))return P!==null?null:p(g,f,x,S,null);sn(g,x)}return null}function w(g,f,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vi:return g=g.get(S.key===null?x:S.key)||null,u(f,g,S,P);case yr:return g=g.get(S.key===null?x:S.key)||null,d(f,g,S,P);case ua:var E=S._init;return w(g,f,x,E(S._payload),P)}if(zo(S)||Io(S))return g=g.get(x)||null,p(f,g,S,P,null);sn(f,S)}return null}function b(g,f,x,S){for(var P=null,E=null,k=f,R=f=0,U=null;k!==null&&R<x.length;R++){k.index>R?(U=k,k=null):U=k.sibling;var z=h(g,k,x[R],S);if(z===null){k===null&&(k=U);break}e&&k&&z.alternate===null&&t(g,k),f=i(z,f,R),E===null?P=z:E.sibling=z,E=z,k=U}if(R===x.length)return a(g,k),X&&_a(g,R),P;if(k===null){for(;R<x.length;R++)k=v(g,x[R],S),k!==null&&(f=i(k,f,R),E===null?P=k:E.sibling=k,E=k);return X&&_a(g,R),P}for(k=r(g,k);R<x.length;R++)U=w(k,g,R,x[R],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?R:U.key),f=i(U,f,R),E===null?P=U:E.sibling=U,E=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&_a(g,R),P}function y(g,f,x,S){var P=Io(x);if(typeof P!="function")throw Error(I(150));if(x=P.call(x),x==null)throw Error(I(151));for(var E=P=null,k=f,R=f=0,U=null,z=x.next();k!==null&&!z.done;R++,z=x.next()){k.index>R?(U=k,k=null):U=k.sibling;var ae=h(g,k,z.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,R),E===null?P=ae:E.sibling=ae,E=ae,k=U}if(z.done)return a(g,k),X&&_a(g,R),P;if(k===null){for(;!z.done;R++,z=x.next())z=v(g,z.value,S),z!==null&&(f=i(z,f,R),E===null?P=z:E.sibling=z,E=z);return X&&_a(g,R),P}for(k=r(g,k);!z.done;R++,z=x.next())z=w(k,g,R,z.value,S),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?R:z.key),f=i(z,f,R),E===null?P=z:E.sibling=z,E=z);return e&&k.forEach(function(Fa){return t(g,Fa)}),X&&_a(g,R),P}function A(g,f,x,S){if(typeof x=="object"&&x!==null&&x.type===wr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Vi:e:{for(var P=x.key,E=f;E!==null;){if(E.key===P){if(P=x.type,P===wr){if(E.tag===7){a(g,E.sibling),f=o(E,x.props.children),f.return=g,g=f;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ua&&lp(P)===E.type){a(g,E.sibling),f=o(E,x.props),f.ref=Ro(g,E,x),f.return=g,g=f;break e}a(g,E);break}else t(g,E);E=E.sibling}x.type===wr?(f=Va(x.props.children,g.mode,S,x.key),f.return=g,g=f):(S=wn(x.type,x.key,x.props,null,g.mode,S),S.ref=Ro(g,f,x),S.return=g,g=S)}return n(g);case yr:e:{for(E=x.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(g,f.sibling),f=o(f,x.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=Ds(x,g.mode,S),f.return=g,g=f}return n(g);case ua:return E=x._init,A(g,f,E(x._payload),S)}if(zo(x))return b(g,f,x,S);if(Io(x))return y(g,f,x,S);sn(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,x),f.return=g,g=f):(a(g,f),f=zs(x,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return A}var Nr=$g(!0),Ag=$g(!1),Dn=ka(null),Bn=null,Rr=null,Gu=null;function Xu(){Gu=Rr=Bn=null}function Yu(e){var t=Dn.current;G(Dn),e._currentValue=t}function cu(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Br(e,t){Bn=e,Gu=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Gu!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Bn===null)throw Error(I(308));Rr=e,Bn.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var Ua=null;function Ku(e){Ua===null?Ua=[e]:Ua.push(e)}function Mg(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Ku(t)):(a.next=o.next,o.next=a),t.interleaved=a,Yt(e,r)}function Yt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var da=!1;function Qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ba(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Yt(e,a)}return o=r.interleaved,o===null?(t.next=t,Ku(r)):(t.next=o.next,o.next=t),r.interleaved=t,Yt(e,a)}function mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Bu(e,a)}}function sp(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Fn(e,t,a,r){var o=e.updateQueue;da=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var v=o.baseState;n=0,p=d=u=null,s=i;do{var h=s.lane,w=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,y=s;switch(h=t,w=a,y.tag){case 1:if(b=y.payload,typeof b=="function"){v=b.call(w,v,h);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,h=typeof b=="function"?b.call(w,v,h):b,h==null)break e;v=Q({},v,h);break e;case 2:da=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else w={eventTime:w,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=w,u=v):p=p.next=w,n|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(u=v),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ka|=n,e.lanes=n,e.memoizedState=v}}function up(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var fi={},Dt=ka(fi),ri=ka(fi),oi=ka(fi);function qa(e){if(e===fi)throw Error(I(174));return e}function Zu(e,t){switch(W(oi,t),W(ri,e),W(Dt,fi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ws(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ws(t,e)}G(Dt),W(Dt,t)}function Hr(){G(Dt),G(ri),G(oi)}function Dg(e){qa(oi.current);var t=qa(Dt.current),a=Ws(t,e.type);t!==a&&(W(ri,e),W(Dt,a))}function Ju(e){ri.current===e&&(G(Dt),G(ri))}var Y=ka(0);function On(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ts=[];function ed(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var hn=Qt.ReactCurrentDispatcher,Rs=Qt.ReactCurrentBatchConfig,Ya=0,K=null,ue=null,fe=null,jn=!1,Ho=!1,ii=0,P1=0;function Ce(){throw Error(I(321))}function td(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ct(e[a],t[a]))return!1;return!0}function ad(e,t,a,r,o,i){if(Ya=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hn.current=e===null||e.memoizedState===null?$1:A1,e=a(r,o),Ho){i=0;do{if(Ho=!1,ii=0,25<=i)throw Error(I(301));i+=1,fe=ue=null,t.updateQueue=null,hn.current=M1,e=a(r,o)}while(Ho)}if(hn.current=_n,t=ue!==null&&ue.next!==null,Ya=0,fe=ue=K=null,jn=!1,t)throw Error(I(300));return e}function rd(){var e=ii!==0;return ii=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?K.memoizedState=fe=e:fe=fe.next=e,fe}function st(){if(ue===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=fe===null?K.memoizedState:fe.next;if(t!==null)fe=t,ue=e;else{if(e===null)throw Error(I(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},fe===null?K.memoizedState=fe=e:fe=fe.next=e}return fe}function ni(e,t){return typeof t=="function"?t(e):t}function Es(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Ya&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,n=r):u=u.next=v,K.lanes|=p,Ka|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,Ct(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,Ka|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function $s(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);Ct(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function Bg(){}function Fg(e,t){var a=K,r=st(),o=t(),i=!Ct(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,od(_g.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(a.flags|=2048,li(9,jg.bind(null,a,r,o,t),void 0,null),pe===null)throw Error(I(349));(Ya&30)!==0||Og(a,t,o)}return o}function Og(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function jg(e,t,a,r){t.value=a,t.getSnapshot=r,Ng(t)&&Hg(e)}function _g(e,t,a){return a(function(){Ng(t)&&Hg(e)})}function Ng(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ct(e,a)}catch{return!0}}function Hg(e){var t=Yt(e,1);t!==null&&St(t,e,1,-1)}function dp(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},t.queue=e,e=e.dispatch=E1.bind(null,K,e),[t.memoizedState,e]}function li(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function Ug(){return st().memoizedState}function vn(e,t,a,r){var o=At();K.flags|=e,o.memoizedState=li(1|t,a,void 0,r===void 0?null:r)}function Zn(e,t,a,r){var o=st();r=r===void 0?null:r;var i=void 0;if(ue!==null){var n=ue.memoizedState;if(i=n.destroy,r!==null&&td(r,n.deps)){o.memoizedState=li(t,a,i,r);return}}K.flags|=e,o.memoizedState=li(1|t,a,i,r)}function cp(e,t){return vn(8390656,8,e,t)}function od(e,t){return Zn(2048,8,e,t)}function qg(e,t){return Zn(4,2,e,t)}function Wg(e,t){return Zn(4,4,e,t)}function Vg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gg(e,t,a){return a=a!=null?a.concat([e]):null,Zn(4,4,Vg.bind(null,t,e),a)}function id(){}function Xg(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Yg(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&td(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function Kg(e,t,a){return(Ya&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=a):(Ct(a,t)||(a=tg(),K.lanes|=a,Ka|=a,e.baseState=!0),t)}function T1(e,t){var a=_;_=a!==0&&4>a?a:4,e(!0);var r=Rs.transition;Rs.transition={};try{e(!1),t()}finally{_=a,Rs.transition=r}}function Qg(){return st().memoizedState}function R1(e,t,a){var r=wa(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},Zg(e))Jg(t,a);else if(a=Mg(e,t,a,r),a!==null){var o=Me();St(a,e,r,o),em(a,t,r)}}function E1(e,t,a){var r=wa(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zg(e))Jg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,Ct(s,n)){var u=t.interleaved;u===null?(o.next=o,Ku(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=Mg(e,t,o,r),a!==null&&(o=Me(),St(a,e,r,o),em(a,t,r))}}function Zg(e){var t=e.alternate;return e===K||t!==null&&t===K}function Jg(e,t){Ho=jn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function em(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Bu(e,a)}}var _n={readContext:lt,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},$1={readContext:lt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:cp,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,vn(4194308,4,Vg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vn(4194308,4,e,t)},useInsertionEffect:function(e,t){return vn(4,2,e,t)},useMemo:function(e,t){var a=At();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=At();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=R1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:dp,useDebugValue:id,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=dp(!1),t=e[0];return e=T1.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=At();if(X){if(a===void 0)throw Error(I(407));a=a()}else{if(a=t(),pe===null)throw Error(I(349));(Ya&30)!==0||Og(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,cp(_g.bind(null,r,i,e),[e]),r.flags|=2048,li(9,jg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=At(),t=pe.identifierPrefix;if(X){var a=Wt,r=qt;a=(r&~(1<<32-Lt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=ii++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=P1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},A1={readContext:lt,useCallback:Xg,useContext:lt,useEffect:od,useImperativeHandle:Gg,useInsertionEffect:qg,useLayoutEffect:Wg,useMemo:Yg,useReducer:Es,useRef:Ug,useState:function(){return Es(ni)},useDebugValue:id,useDeferredValue:function(e){var t=st();return Kg(t,ue.memoizedState,e)},useTransition:function(){var e=Es(ni)[0],t=st().memoizedState;return[e,t]},useMutableSource:Bg,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1},M1={readContext:lt,useCallback:Xg,useContext:lt,useEffect:od,useImperativeHandle:Gg,useInsertionEffect:qg,useLayoutEffect:Wg,useMemo:Yg,useReducer:$s,useRef:Ug,useState:function(){return $s(ni)},useDebugValue:id,useDeferredValue:function(e){var t=st();return ue===null?t.memoizedState=e:Kg(t,ue.memoizedState,e)},useTransition:function(){var e=$s(ni)[0],t=st().memoizedState;return[e,t]},useMutableSource:Bg,useSyncExternalStore:Fg,useId:Qg,unstable_isNewReconciler:!1};function bt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function fu(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jn={isMounted:function(e){return(e=e._reactInternals)?Ja(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Me(),o=wa(e),i=Vt(r,o);i.payload=t,a!=null&&(i.callback=a),t=ba(e,i,o),t!==null&&(St(t,e,o,r),mn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Me(),o=wa(e),i=Vt(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ba(e,i,o),t!==null&&(St(t,e,o,r),mn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Me(),r=wa(e),o=Vt(a,r);o.tag=2,t!=null&&(o.callback=t),t=ba(e,o,r),t!==null&&(St(t,e,r,a),mn(t,e,r))}};function fp(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Jo(a,r)||!Jo(o,i):!0}function tm(e,t,a){var r=!1,o=Ca,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=qe(t)?Ga:Pe.current,r=t.contextTypes,i=(r=r!=null)?jr(e,o):Ca),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function pp(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Jn.enqueueReplaceState(t,t.state,null)}function pu(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Qu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=qe(t)?Ga:Pe.current,o.context=jr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(fu(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jn.enqueueReplaceState(o,o.state,null),Fn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var a="",r=t;do a+=uy(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function As(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function gu(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var z1=typeof WeakMap=="function"?WeakMap:Map;function am(e,t,a){a=Vt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){Hn||(Hn=!0,Cu=r),gu(e,t)},a}function rm(e,t,a){a=Vt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){gu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){gu(e,t),typeof r!="function"&&(ya===null?ya=new Set([this]):ya.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function gp(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new z1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=X1.bind(null,e,t,a),t.then(e,e))}function mp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hp(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Vt(-1,1),t.tag=2,ba(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var D1=Qt.ReactCurrentOwner,He=!1;function Ae(e,t,a,r){t.child=e===null?Ag(t,null,a,r):Nr(t,e.child,a,r)}function vp(e,t,a,r,o){a=a.render;var i=t.ref;return Br(t,o),r=ad(e,t,a,r,i,o),a=rd(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kt(e,t,o)):(X&&a&&qu(t),t.flags|=1,Ae(e,t,r,o),t.child)}function xp(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!pd(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,om(e,t,i,r,o)):(e=wn(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Jo,a(n,r)&&e.ref===t.ref)return Kt(e,t,o)}return t.flags|=1,e=La(i,r),e.ref=t.ref,e.return=t,t.child=e}function om(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Jo(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Kt(e,t,o)}return mu(e,t,a,r,o)}function im(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W($r,Ge),Ge|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W($r,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W($r,Ge),Ge|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W($r,Ge),Ge|=r;return Ae(e,t,o,a),t.child}function nm(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function mu(e,t,a,r,o){var i=qe(a)?Ga:Pe.current;return i=jr(t,i),Br(t,o),a=ad(e,t,a,r,i,o),r=rd(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Kt(e,t,o)):(X&&r&&qu(t),t.flags|=1,Ae(e,t,a,o),t.child)}function bp(e,t,a,r,o){if(qe(a)){var i=!0;An(t)}else i=!1;if(Br(t,o),t.stateNode===null)xn(e,t),tm(t,a,r),pu(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=lt(d):(d=qe(a)?Ga:Pe.current,d=jr(t,d));var p=a.getDerivedStateFromProps,v=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&pp(t,n,r,d),da=!1;var h=t.memoizedState;n.state=h,Fn(t,r,n,o),u=t.memoizedState,s!==r||h!==u||Ue.current||da?(typeof p=="function"&&(fu(t,a,p,r),u=t.memoizedState),(s=da||fp(t,a,s,r,h,u,d))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,zg(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:bt(t.type,s),n.props=d,v=t.pendingProps,h=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=qe(a)?Ga:Pe.current,u=jr(t,u));var w=a.getDerivedStateFromProps;(p=typeof w=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==v||h!==u)&&pp(t,n,r,u),da=!1,h=t.memoizedState,n.state=h,Fn(t,r,n,o);var b=t.memoizedState;s!==v||h!==b||Ue.current||da?(typeof w=="function"&&(fu(t,a,w,r),b=t.memoizedState),(d=da||fp(t,a,d,r,h,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return hu(e,t,a,r,i,o)}function hu(e,t,a,r,o,i){nm(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&op(t,a,!1),Kt(e,t,i);r=t.stateNode,D1.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=Nr(t,e.child,null,i),t.child=Nr(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=r.state,o&&op(t,a,!0),t.child}function lm(e){var t=e.stateNode;t.pendingContext?rp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rp(e,t.context,!1),Zu(e,t.containerInfo)}function yp(e,t,a,r,o){return _r(),Vu(o),t.flags|=256,Ae(e,t,a,r),t.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function xu(e){return{baseLanes:e,cachePool:null,transitions:null}}function sm(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return du(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=al(n,r,0,null),e=Va(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=xu(a),t.memoizedState=vu,e):nd(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return B1(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=La(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=La(s,i):(i=Va(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?xu(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=vu,r}return i=e.child,e=i.sibling,r=La(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function nd(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function un(e,t,a,r){return r!==null&&Vu(r),Nr(t,e.child,null,a),e=nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function B1(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=As(Error(I(422))),un(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),i=Va(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Nr(t,e.child,null,n),t.child.memoizedState=xu(n),t.memoizedState=vu,i);if((t.mode&1)===0)return un(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=As(i,r,void 0),un(e,t,n,r)}if(s=(n&e.childLanes)!==0,He||s){if(r=pe,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Yt(e,o),St(r,e,o,-1))}return fd(),r=As(Error(I(421))),un(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Y1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=xa(o.nextSibling),Ye=t,X=!0,wt=null,e!==null&&(rt[ot++]=qt,rt[ot++]=Wt,rt[ot++]=Xa,qt=e.id,Wt=e.overflow,Xa=t),t=nd(t,r.children),t.flags|=4096,t)}function wp(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cu(e.return,t,a)}function Ms(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function um(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wp(e,a,t);else if(e.tag===19)wp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&On(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Ms(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&On(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Ms(t,!0,a,null,i);break;case"together":Ms(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Kt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ka|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,a=La(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=La(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function F1(e,t,a){switch(t.tag){case 3:lm(t),_r();break;case 5:Dg(t);break;case 1:qe(t.type)&&An(t);break;case 4:Zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Dn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?sm(e,t,a):(W(Y,Y.current&1),e=Kt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return um(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,im(e,t,a)}return Kt(e,t,a)}var dm,bu,cm,fm;dm=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};bu=function(){};cm=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,qa(Dt.current);var i=null;switch(a){case"input":o=Ns(e,o),r=Ns(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=qs(e,o),r=qs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=En)}Vs(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Vo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Vo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};fm=function(e,t,a,r){a!==r&&(t.flags|=4)};function Eo(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function O1(e,t,a){var r=t.pendingProps;switch(Wu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return qe(t.type)&&$n(),Ie(t),null;case 3:return r=t.stateNode,Hr(),G(Ue),G(Pe),ed(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wt!==null&&(Pu(wt),wt=null))),bu(e,t),Ie(t),null;case 5:Ju(t);var o=qa(oi.current);if(a=t.type,e!==null&&t.stateNode!=null)cm(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ie(t),null}if(e=qa(Dt.current),ln(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Mt]=t,r[ai]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Bo.length;o++)V(Bo[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Rf(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":$f(r,i),V("invalid",r)}Vs(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&nn(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&nn(r.textContent,s,e),o=["children",""+s]):Vo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Gi(r),Ef(r,i,!0);break;case"textarea":Gi(r),Af(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=En)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=_p(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Mt]=t,e[ai]=r,dm(e,t,!1,!1),t.stateNode=e;e:{switch(n=Gs(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Bo.length;o++)V(Bo[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Rf(e,r),o=Ns(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":$f(e,r),o=qs(e,r),V("invalid",e);break;default:o=r}Vs(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Up(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Np(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Go(e,u):typeof u=="number"&&Go(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Vo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&Eu(e,i,u,n))}switch(a){case"input":Gi(e),Ef(e,r,!1);break;case"textarea":Gi(e),Af(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Sa(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Ar(e,!!r.multiple,i,!1):r.defaultValue!=null&&Ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=En)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)fm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(a=qa(oi.current),qa(Dt.current),ln(t)){if(r=t.stateNode,a=t.memoizedProps,r[Mt]=t,(i=r.nodeValue!==a)&&(e=Ye,e!==null))switch(e.tag){case 3:nn(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nn(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ie(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Eg(),_r(),t.flags|=98560,i=!1;else if(i=ln(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Mt]=t}else _r(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else wt!==null&&(Pu(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?de===0&&(de=3):fd())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return Hr(),bu(e,t),e===null&&ei(t.stateNode.containerInfo),Ie(t),null;case 10:return Yu(t.type._context),Ie(t),null;case 17:return qe(t.type)&&$n(),Ie(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)Eo(i,!1);else{if(de!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=On(e),n!==null){for(t.flags|=128,Eo(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>qr&&(t.flags|=128,r=!0,Eo(i,!1),t.lanes=4194304)}else{if(!r)if(e=On(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),Eo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Ie(t),null}else 2*re()-i.renderingStartTime>qr&&a!==1073741824&&(t.flags|=128,r=!0,Eo(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Ie(t),null);case 22:case 23:return cd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ge&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function j1(e,t){switch(Wu(t),t.tag){case 1:return qe(t.type)&&$n(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),G(Ue),G(Pe),ed(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ju(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return Hr(),null;case 10:return Yu(t.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var dn=!1,ke=!1,_1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Er(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function yu(e,t,a){try{a()}catch(r){J(e,t,r)}}var Lp=!1;function N1(e,t){if(ru=Pn,e=vg(),Uu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,v=e,h=null;t:for(;;){for(var w;v!==a||o!==0&&v.nodeType!==3||(s=n+o),v!==i||r!==0&&v.nodeType!==3||(u=n+r),v.nodeType===3&&(n+=v.nodeValue.length),(w=v.firstChild)!==null;)h=v,v=w;for(;;){if(v===e)break t;if(h===a&&++d===o&&(s=n),h===i&&++p===r&&(u=n),(w=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=w}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(ou={focusedElem:e,selectionRange:a},Pn=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,A=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:bt(t.type,y),A);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=Lp,Lp=!1,b}function Uo(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&yu(t,a,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function wu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function pm(e){var t=e.alternate;t!==null&&(e.alternate=null,pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[ai],delete t[lu],delete t[S1],delete t[C1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function gm(e){return e.tag===5||e.tag===3||e.tag===4}function Sp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=En));else if(r!==4&&(e=e.child,e!==null))for(Lu(e,t,a),e=e.sibling;e!==null;)Lu(e,t,a),e=e.sibling}function Su(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Su(e,t,a),e=e.sibling;e!==null;)Su(e,t,a),e=e.sibling}var me=null,yt=!1;function sa(e,t,a){for(a=a.child;a!==null;)mm(e,t,a),a=a.sibling}function mm(e,t,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Vn,a)}catch{}switch(a.tag){case 5:ke||Er(a,t);case 6:var r=me,o=yt;me=null,sa(e,t,a),me=r,yt=o,me!==null&&(yt?(e=me,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):me.removeChild(a.stateNode));break;case 18:me!==null&&(yt?(e=me,a=a.stateNode,e.nodeType===8?ks(e.parentNode,a):e.nodeType===1&&ks(e,a),Qo(e)):ks(me,a.stateNode));break;case 4:r=me,o=yt,me=a.stateNode.containerInfo,yt=!0,sa(e,t,a),me=r,yt=o;break;case 0:case 11:case 14:case 15:if(!ke&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&yu(a,t,n),o=o.next}while(o!==r)}sa(e,t,a);break;case 1:if(!ke&&(Er(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}sa(e,t,a);break;case 21:sa(e,t,a);break;case 22:a.mode&1?(ke=(r=ke)||a.memoizedState!==null,sa(e,t,a),ke=r):sa(e,t,a);break;default:sa(e,t,a)}}function Cp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new _1),t.forEach(function(r){var o=K1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function xt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:me=s.stateNode,yt=!1;break e;case 3:me=s.stateNode.containerInfo,yt=!0;break e;case 4:me=s.stateNode.containerInfo,yt=!0;break e}s=s.return}if(me===null)throw Error(I(160));mm(i,n,o),me=null,yt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)hm(t,e),t=t.sibling}function hm(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),$t(e),r&4){try{Uo(3,e,e.return),el(3,e)}catch(y){J(e,e.return,y)}try{Uo(5,e,e.return)}catch(y){J(e,e.return,y)}}break;case 1:xt(t,e),$t(e),r&512&&a!==null&&Er(a,a.return);break;case 5:if(xt(t,e),$t(e),r&512&&a!==null&&Er(a,a.return),e.flags&32){var o=e.stateNode;try{Go(o,"")}catch(y){J(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Op(o,i),Gs(s,n);var d=Gs(s,i);for(n=0;n<u.length;n+=2){var p=u[n],v=u[n+1];p==="style"?Up(o,v):p==="dangerouslySetInnerHTML"?Np(o,v):p==="children"?Go(o,v):Eu(o,p,v,d)}switch(s){case"input":Hs(o,i);break;case"textarea":jp(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Ar(o,!!i.multiple,w,!1):h!==!!i.multiple&&(i.defaultValue!=null?Ar(o,!!i.multiple,i.defaultValue,!0):Ar(o,!!i.multiple,i.multiple?[]:"",!1))}o[ai]=i}catch(y){J(e,e.return,y)}}break;case 6:if(xt(t,e),$t(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){J(e,e.return,y)}}break;case 3:if(xt(t,e),$t(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Qo(t.containerInfo)}catch(y){J(e,e.return,y)}break;case 4:xt(t,e),$t(e);break;case 13:xt(t,e),$t(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ud=re())),r&4&&Cp(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(ke=(d=ke)||p,xt(t,e),ke=d):xt(t,e),$t(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for($=e,p=e.child;p!==null;){for(v=$=p;$!==null;){switch(h=$,w=h.child,h.tag){case 0:case 11:case 14:case 15:Uo(4,h,h.return);break;case 1:Er(h,h.return);var b=h.stateNode;if(typeof b.componentWillUnmount=="function"){r=h,a=h.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(y){J(r,a,y)}}break;case 5:Er(h,h.return);break;case 22:if(h.memoizedState!==null){kp(v);continue}}w!==null?(w.return=h,$=w):kp(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{o=v.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,u=v.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Hp("display",n))}catch(y){J(e,e.return,y)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(y){J(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:xt(t,e),$t(e),r&4&&Cp(e);break;case 21:break;default:xt(t,e),$t(e)}}function $t(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(gm(a)){var r=a;break e}a=a.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Go(o,""),r.flags&=-33);var i=Sp(e);Su(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=Sp(e);Lu(e,s,n);break;default:throw Error(I(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function H1(e,t,a){$=e,vm(e,t,a)}function vm(e,t,a){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||dn;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||ke;s=dn;var d=ke;if(dn=n,(ke=u)&&!d)for($=o;$!==null;)n=$,u=n.child,n.tag===22&&n.memoizedState!==null?Pp(o):u!==null?(u.return=n,$=u):Pp(o);for(;i!==null;)$=i,vm(i,t,a),i=i.sibling;$=o,dn=s,ke=d}Ip(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):Ip(e,t,a)}}function Ip(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ke||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ke)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:bt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&up(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}up(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Qo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}ke||t.flags&512&&wu(t)}catch(h){J(t,t.return,h)}}if(t===e){$=null;break}if(a=t.sibling,a!==null){a.return=t.return,$=a;break}$=t.return}}function kp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}function Pp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{el(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{wu(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{wu(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var U1=Math.ceil,Nn=Qt.ReactCurrentDispatcher,ld=Qt.ReactCurrentOwner,nt=Qt.ReactCurrentBatchConfig,F=0,pe=null,ie=null,he=0,Ge=0,$r=ka(0),de=0,si=null,Ka=0,tl=0,sd=0,qo=null,Ne=null,ud=0,qr=1/0,Ht=null,Hn=!1,Cu=null,ya=null,cn=!1,ga=null,Un=0,Wo=0,Iu=null,bn=-1,yn=0;function Me(){return(F&6)!==0?re():bn!==-1?bn:bn=re()}function wa(e){return(e.mode&1)===0?1:(F&2)!==0&&he!==0?he&-he:k1.transition!==null?(yn===0&&(yn=tg()),yn):(e=_,e!==0||(e=window.event,e=e===void 0?16:sg(e.type)),e)}function St(e,t,a,r){if(50<Wo)throw Wo=0,Iu=null,Error(I(185));ui(e,a,r),((F&2)===0||e!==pe)&&(e===pe&&((F&2)===0&&(tl|=a),de===4&&fa(e,he)),We(e,r),a===1&&F===0&&(t.mode&1)===0&&(qr=re()+500,Qn&&Pa()))}function We(e,t){var a=e.callbackNode;Ty(e,t);var r=kn(e,e===pe?he:0);if(r===0)a!==null&&Df(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Df(a),t===1)e.tag===0?I1(Tp.bind(null,e)):Pg(Tp.bind(null,e)),w1(function(){(F&6)===0&&Pa()}),a=null;else{switch(ag(r)){case 1:a=Du;break;case 4:a=Jp;break;case 16:a=In;break;case 536870912:a=eg;break;default:a=In}a=Im(a,xm.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function xm(e,t){if(bn=-1,yn=0,(F&6)!==0)throw Error(I(327));var a=e.callbackNode;if(Fr()&&e.callbackNode!==a)return null;var r=kn(e,e===pe?he:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=qn(e,r);else{t=r;var o=F;F|=2;var i=ym();(pe!==e||he!==t)&&(Ht=null,qr=re()+500,Wa(e,t));do try{V1();break}catch(s){bm(e,s)}while(!0);Xu(),Nn.current=i,F=o,ie!==null?t=0:(pe=null,he=0,t=de)}if(t!==0){if(t===2&&(o=Zs(e),o!==0&&(r=o,t=ku(e,o))),t===1)throw a=si,Wa(e,0),fa(e,r),We(e,re()),a;if(t===6)fa(e,r);else{if(o=e.current.alternate,(r&30)===0&&!q1(o)&&(t=qn(e,r),t===2&&(i=Zs(e),i!==0&&(r=i,t=ku(e,i))),t===1))throw a=si,Wa(e,0),fa(e,r),We(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Na(e,Ne,Ht);break;case 3:if(fa(e,r),(r&130023424)===r&&(t=ud+500-re(),10<t)){if(kn(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=nu(Na.bind(null,e,Ne,Ht),t);break}Na(e,Ne,Ht);break;case 4:if(fa(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-Lt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*U1(r/1960))-r,10<r){e.timeoutHandle=nu(Na.bind(null,e,Ne,Ht),r);break}Na(e,Ne,Ht);break;case 5:Na(e,Ne,Ht);break;default:throw Error(I(329))}}}return We(e,re()),e.callbackNode===a?xm.bind(null,e):null}function ku(e,t){var a=qo;return e.current.memoizedState.isDehydrated&&(Wa(e,t).flags|=256),e=qn(e,t),e!==2&&(t=Ne,Ne=a,t!==null&&Pu(t)),e}function Pu(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function q1(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!Ct(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t){for(t&=~sd,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-Lt(t),r=1<<a;e[a]=-1,t&=~r}}function Tp(e){if((F&6)!==0)throw Error(I(327));Fr();var t=kn(e,0);if((t&1)===0)return We(e,re()),null;var a=qn(e,t);if(e.tag!==0&&a===2){var r=Zs(e);r!==0&&(t=r,a=ku(e,r))}if(a===1)throw a=si,Wa(e,0),fa(e,t),We(e,re()),a;if(a===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Na(e,Ne,Ht),We(e,re()),null}function dd(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(qr=re()+500,Qn&&Pa())}}function Qa(e){ga!==null&&ga.tag===0&&(F&6)===0&&Fr();var t=F;F|=1;var a=nt.transition,r=_;try{if(nt.transition=null,_=1,e)return e()}finally{_=r,nt.transition=a,F=t,(F&6)===0&&Pa()}}function cd(){Ge=$r.current,G($r)}function Wa(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,y1(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(Wu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$n();break;case 3:Hr(),G(Ue),G(Pe),ed();break;case 5:Ju(r);break;case 4:Hr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Yu(r.type._context);break;case 22:case 23:cd()}a=a.return}if(pe=e,ie=e=La(e.current,null),he=Ge=t,de=0,si=null,sd=tl=Ka=0,Ne=qo=null,Ua!==null){for(t=0;t<Ua.length;t++)if(a=Ua[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}Ua=null}return e}function bm(e,t){do{var a=ie;try{if(Xu(),hn.current=_n,jn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jn=!1}if(Ya=0,fe=ue=K=null,Ho=!1,ii=0,ld.current=null,a===null||a.return===null){de=1,si=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=he,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,v=p.tag;if((p.mode&1)===0&&(v===0||v===11||v===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var w=mp(n);if(w!==null){w.flags&=-257,hp(w,n,s,i,t),w.mode&1&&gp(i,d,t),t=w,u=d;var b=t.updateQueue;if(b===null){var y=new Set;y.add(u),t.updateQueue=y}else b.add(u);break e}else{if((t&1)===0){gp(i,d,t),fd();break e}u=Error(I(426))}}else if(X&&s.mode&1){var A=mp(n);if(A!==null){(A.flags&65536)===0&&(A.flags|=256),hp(A,n,s,i,t),Vu(Ur(u,s));break e}}i=u=Ur(u,s),de!==4&&(de=2),qo===null?qo=[i]:qo.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=am(i,u,t);sp(i,g);break e;case 1:s=u;var f=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ya===null||!ya.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=rm(i,s,t);sp(i,S);break e}}i=i.return}while(i!==null)}Lm(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function ym(){var e=Nn.current;return Nn.current=_n,e===null?_n:e}function fd(){(de===0||de===3||de===2)&&(de=4),pe===null||(Ka&268435455)===0&&(tl&268435455)===0||fa(pe,he)}function qn(e,t){var a=F;F|=2;var r=ym();(pe!==e||he!==t)&&(Ht=null,Wa(e,t));do try{W1();break}catch(o){bm(e,o)}while(!0);if(Xu(),F=a,Nn.current=r,ie!==null)throw Error(I(261));return pe=null,he=0,de}function W1(){for(;ie!==null;)wm(ie)}function V1(){for(;ie!==null&&!by();)wm(ie)}function wm(e){var t=Cm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Lm(e):ie=t,ld.current=null}function Lm(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=O1(a,t,Ge),a!==null){ie=a;return}}else{if(a=j1(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{de=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);de===0&&(de=5)}function Na(e,t,a){var r=_,o=nt.transition;try{nt.transition=null,_=1,G1(e,t,a,r)}finally{nt.transition=o,_=r}return null}function G1(e,t,a,r){do Fr();while(ga!==null);if((F&6)!==0)throw Error(I(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Ry(e,i),e===pe&&(ie=pe=null,he=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cn||(cn=!0,Im(In,function(){return Fr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var n=_;_=1;var s=F;F|=4,ld.current=null,N1(e,a),hm(a,e),m1(ou),Pn=!!ru,ou=ru=null,e.current=a,H1(a,e,o),yy(),F=s,_=n,nt.transition=i}else e.current=a;if(cn&&(cn=!1,ga=e,Un=o),i=e.pendingLanes,i===0&&(ya=null),Sy(a.stateNode,r),We(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hn)throw Hn=!1,e=Cu,Cu=null,e;return(Un&1)!==0&&e.tag!==0&&Fr(),i=e.pendingLanes,(i&1)!==0?e===Iu?Wo++:(Wo=0,Iu=e):Wo=0,Pa(),null}function Fr(){if(ga!==null){var e=ag(Un),t=nt.transition,a=_;try{if(nt.transition=null,_=16>e?16:e,ga===null)var r=!1;else{if(e=ga,ga=null,Un=0,(F&6)!==0)throw Error(I(331));var o=F;for(F|=4,$=e.current;$!==null;){var i=$,n=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Uo(8,p,i)}var v=p.child;if(v!==null)v.return=p,$=v;else for(;$!==null;){p=$;var h=p.sibling,w=p.return;if(pm(p),p===d){$=null;break}if(h!==null){h.return=w,$=h;break}$=w}}}var b=i.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var A=y.sibling;y.sibling=null,y=A}while(y!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,$=n;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Uo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var f=e.current;for($=f;$!==null;){n=$;var x=n.child;if((n.subtreeFlags&2064)!==0&&x!==null)x.return=n,$=x;else e:for(n=f;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:el(9,s)}}catch(P){J(s,s.return,P)}if(s===n){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(F=o,Pa(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Vn,e)}catch{}r=!0}return r}finally{_=a,nt.transition=t}}return!1}function Rp(e,t,a){t=Ur(a,t),t=am(e,t,1),e=ba(e,t,1),t=Me(),e!==null&&(ui(e,1,t),We(e,t))}function J(e,t,a){if(e.tag===3)Rp(e,e,a);else for(;t!==null;){if(t.tag===3){Rp(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ya===null||!ya.has(r))){e=Ur(a,e),e=rm(t,e,1),t=ba(t,e,1),e=Me(),t!==null&&(ui(t,1,e),We(t,e));break}}t=t.return}}function X1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&a,pe===e&&(he&a)===a&&(de===4||de===3&&(he&130023424)===he&&500>re()-ud?Wa(e,0):sd|=a),We(e,t)}function Sm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var a=Me();e=Yt(e,t),e!==null&&(ui(e,t,a),We(e,a))}function Y1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Sm(e,a)}function K1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Sm(e,a)}var Cm;Cm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)He=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return He=!1,F1(e,t,a);He=(e.flags&131072)!==0}else He=!1,X&&(t.flags&1048576)!==0&&Tg(t,zn,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xn(e,t),e=t.pendingProps;var o=jr(t,Pe.current);Br(t,a),o=ad(null,t,r,e,o,a);var i=rd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(i=!0,An(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Qu(t),o.updater=Jn,t.stateNode=o,o._reactInternals=t,pu(t,r,e,a),t=hu(null,t,r,!0,i,a)):(t.tag=0,X&&i&&qu(t),Ae(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(xn(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Z1(r),e=bt(r,e),o){case 0:t=mu(null,t,r,e,a);break e;case 1:t=bp(null,t,r,e,a);break e;case 11:t=vp(null,t,r,e,a);break e;case 14:t=xp(null,t,r,bt(r.type,e),a);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),mu(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),bp(e,t,r,o,a);case 3:e:{if(lm(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,zg(e,t),Fn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ur(Error(I(423)),t),t=yp(e,t,r,a,o);break e}else if(r!==o){o=Ur(Error(I(424)),t),t=yp(e,t,r,a,o);break e}else for(Xe=xa(t.stateNode.containerInfo.firstChild),Ye=t,X=!0,wt=null,a=Ag(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_r(),r===o){t=Kt(e,t,a);break e}Ae(e,t,r,a)}t=t.child}return t;case 5:return Dg(t),e===null&&du(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,iu(r,o)?n=null:i!==null&&iu(r,i)&&(t.flags|=32),nm(e,t),Ae(e,t,n,a),t.child;case 6:return e===null&&du(t),null;case 13:return sm(e,t,a);case 4:return Zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nr(t,null,r,a):Ae(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),vp(e,t,r,o,a);case 7:return Ae(e,t,t.pendingProps,a),t.child;case 8:return Ae(e,t,t.pendingProps.children,a),t.child;case 12:return Ae(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W(Dn,r._currentValue),r._currentValue=n,i!==null)if(Ct(i.value,n)){if(i.children===o.children&&!Ue.current){t=Kt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Vt(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),cu(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(I(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),cu(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Ae(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Br(t,a),o=lt(o),r=r(o),t.flags|=1,Ae(e,t,r,a),t.child;case 14:return r=t.type,o=bt(r,t.pendingProps),o=bt(r.type,o),xp(e,t,r,o,a);case 15:return om(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:bt(r,o),xn(e,t),t.tag=1,qe(r)?(e=!0,An(t)):e=!1,Br(t,a),tm(t,r,o),pu(t,r,o,a),hu(null,t,r,!0,e,a);case 19:return um(e,t,a);case 22:return im(e,t,a)}throw Error(I(156,t.tag))};function Im(e,t){return Zp(e,t)}function Q1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,r){return new Q1(e,t,a,r)}function pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Z1(e){if(typeof e=="function")return pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Au)return 11;if(e===Mu)return 14}return 2}function La(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function wn(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")pd(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case wr:return Va(a.children,o,i,t);case $u:n=8,o|=8;break;case Fs:return e=it(12,a,t,o|2),e.elementType=Fs,e.lanes=i,e;case Os:return e=it(13,a,t,o),e.elementType=Os,e.lanes=i,e;case js:return e=it(19,a,t,o),e.elementType=js,e.lanes=i,e;case Dp:return al(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mp:n=10;break e;case zp:n=9;break e;case Au:n=11;break e;case Mu:n=14;break e;case ua:n=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=it(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Va(e,t,a,r){return e=it(7,e,r,t),e.lanes=a,e}function al(e,t,a,r){return e=it(22,e,r,t),e.elementType=Dp,e.lanes=a,e.stateNode={isHidden:!1},e}function zs(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Ds(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function J1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function gd(e,t,a,r,o,i,n,s,u){return e=new J1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qu(i),e}function ew(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function km(e){if(!e)return Ca;e=e._reactInternals;e:{if(Ja(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var a=e.type;if(qe(a))return kg(e,a,t)}return t}function Pm(e,t,a,r,o,i,n,s,u){return e=gd(a,r,!0,e,o,i,n,s,u),e.context=km(null),a=e.current,r=Me(),o=wa(a),i=Vt(r,o),i.callback=t??null,ba(a,i,o),e.current.lanes=o,ui(e,o,r),We(e,r),e}function rl(e,t,a,r){var o=t.current,i=Me(),n=wa(o);return a=km(a),t.context===null?t.context=a:t.pendingContext=a,t=Vt(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ba(o,t,n),e!==null&&(St(e,o,n,i),mn(e,o,n)),n}function Wn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ep(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function md(e,t){Ep(e,t),(e=e.alternate)&&Ep(e,t)}function tw(){return null}var Tm=typeof reportError=="function"?reportError:function(e){console.error(e)};function hd(e){this._internalRoot=e}ol.prototype.render=hd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));rl(e,t,null,null)};ol.prototype.unmount=hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qa(function(){rl(null,e,null,null)}),t[Xt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=ig();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ca.length&&t!==0&&t<ca[a].priority;a++);ca.splice(a,0,e),a===0&&lg(e)}};function vd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $p(){}function aw(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Wn(n);i.call(d)}}var n=Pm(t,r,e,0,null,!1,!1,"",$p);return e._reactRootContainer=n,e[Xt]=n.current,ei(e.nodeType===8?e.parentNode:e),Qa(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Wn(u);s.call(d)}}var u=gd(e,0,!1,null,null,!1,!1,"",$p);return e._reactRootContainer=u,e[Xt]=u.current,ei(e.nodeType===8?e.parentNode:e),Qa(function(){rl(t,u,a,r)}),u}function nl(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Wn(n);s.call(u)}}rl(t,n,e,o)}else n=aw(a,t,e,o,r);return Wn(n)}rg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Do(t.pendingLanes);a!==0&&(Bu(t,a|1),We(t,re()),(F&6)===0&&(qr=re()+500,Pa()))}break;case 13:Qa(function(){var r=Yt(e,1);if(r!==null){var o=Me();St(r,e,1,o)}}),md(e,1)}};Fu=function(e){if(e.tag===13){var t=Yt(e,134217728);if(t!==null){var a=Me();St(t,e,134217728,a)}md(e,134217728)}};og=function(e){if(e.tag===13){var t=wa(e),a=Yt(e,t);if(a!==null){var r=Me();St(a,e,t,r)}md(e,t)}};ig=function(){return _};ng=function(e,t){var a=_;try{return _=e,t()}finally{_=a}};Ys=function(e,t,a){switch(t){case"input":if(Hs(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Kn(r);if(!o)throw Error(I(90));Fp(r),Hs(r,o)}}}break;case"textarea":jp(e,a);break;case"select":t=a.value,t!=null&&Ar(e,!!a.multiple,t,!1)}};Vp=dd;Gp=Qa;var rw={usingClientEntryPoint:!1,Events:[ci,Ir,Kn,qp,Wp,dd]},$o={findFiberByHostInstance:Ha,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kp(e),e===null?null:e.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||tw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ao.isDisabled&&Ao.supportsFiber))try{Vn=Ao.inject(ow),zt=Ao}catch{}var Ao;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rw;Ze.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vd(t))throw Error(I(200));return ew(e,t,null,a)};Ze.createRoot=function(e,t){if(!vd(e))throw Error(I(299));var a=!1,r="",o=Tm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=gd(e,1,!1,null,null,a,!1,r,o),e[Xt]=t.current,ei(e.nodeType===8?e.parentNode:e),new hd(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Kp(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Qa(e)};Ze.hydrate=function(e,t,a){if(!il(t))throw Error(I(200));return nl(null,e,t,!0,a)};Ze.hydrateRoot=function(e,t,a){if(!vd(e))throw Error(I(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=Tm;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Pm(t,null,e,1,a??null,o,!1,i,n),e[Xt]=t.current,ei(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new ol(t)};Ze.render=function(e,t,a){if(!il(t))throw Error(I(200));return nl(null,e,t,!1,a)};Ze.unmountComponentAtNode=function(e){if(!il(e))throw Error(I(40));return e._reactRootContainer?(Qa(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};Ze.unstable_batchedUpdates=dd;Ze.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!il(a))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return nl(e,t,a,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426"});var Ta=Nt((bk,$m)=>{"use strict";function Em(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Em)}catch(e){console.error(e)}}Em(),$m.exports=Rm()});var Mm=Nt(xd=>{"use strict";var Am=Ta();xd.createRoot=Am.createRoot,xd.hydrateRoot=Am.hydrateRoot;var yk});var qh=Nt(wl=>{"use strict";var Kw=C(),Qw=Symbol.for("react.element"),Zw=Symbol.for("react.fragment"),Jw=Object.prototype.hasOwnProperty,e2=Kw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t2={key:!0,ref:!0,__self:!0,__source:!0};function Uh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)Jw.call(t,r)&&!t2.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Qw,type:e,key:i,ref:n,props:o,_owner:e2.current}}wl.Fragment=Zw;wl.jsx=Uh;wl.jsxs=Uh});var m=Nt((x5,Wh)=>{"use strict";Wh.exports=qh()});var Db=c(Mm(),1);var ce=c(C());var N="-ms-",er="-moz-",O="-webkit-",ll="comm",Ra="rule",Gr="decl";var zm="@import";var Dm="@namespace",sl="@keyframes";var Bm="@layer";var bd=Math.abs,pi=String.fromCharCode,gi=Object.assign;function Fm(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function ul(e){return e.trim()}function It(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,a){return e.replace(t,a)}function Xr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function kt(e,t,a){return e.slice(t,a)}function Te(e){return e.length}function dl(e){return e.length}function tr(e,t){return t.push(e),e}function Om(e,t){return e.map(t).join("")}function yd(e,t){return e.filter(function(a){return!It(a,t)})}var cl=1,Yr=1,jm=0,ut=0,ne=0,Qr="";function mi(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:cl,column:Yr,length:n,return:"",siblings:s}}function Zt(e,t){return gi(mi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ar(e){for(;e.root;)e=Zt(e.root,{children:[e]});tr(e,e.siblings)}function _m(){return ne}function Nm(){return ne=ut>0?Z(Qr,--ut):0,Yr--,ne===10&&(Yr=1,cl--),ne}function dt(){return ne=ut<jm?Z(Qr,ut++):0,Yr++,ne===10&&(Yr=1,cl++),ne}function Jt(){return Z(Qr,ut)}function hi(){return ut}function fl(e,t){return kt(Qr,e,t)}function Kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hm(e){return cl=Yr=1,jm=Te(Qr=e),ut=0,[]}function Um(e){return Qr="",e}function pl(e){return ul(fl(ut-1,wd(e===91?e+2:e===40?e+1:e)))}function qm(e){for(;(ne=Jt())&&ne<33;)dt();return Kr(e)>2||Kr(ne)>3?"":" "}function Wm(e,t){for(;--t&&dt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return fl(e,hi()+(t<6&&Jt()==32&&dt()==32))}function wd(e){for(;dt();)switch(ne){case e:return ut;case 34:case 39:e!==34&&e!==39&&wd(ne);break;case 40:e===41&&wd(e);break;case 92:dt();break}return ut}function Vm(e,t){for(;dt()&&e+ne!==57;)if(e+ne===84&&Jt()===47)break;return"/*"+fl(t,ut-1)+"*"+pi(e===47?e:dt())}function Gm(e){for(;!Kr(Jt());)dt();return fl(e,ut)}function Km(e){return Um(gl("",null,null,null,[""],e=Hm(e),0,[0],e))}function gl(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,v=n,h=0,w=0,b=0,y=1,A=1,g=1,f=0,x="",S=o,P=i,E=r,k=x;A;)switch(b=f,f=dt()){case 40:if(b!=108&&Z(k,v-1)==58){Xr(k+=M(pl(f),"&","&\f"),"&\f",bd(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=pl(f);break;case 9:case 10:case 13:case 32:k+=qm(b);break;case 92:k+=Wm(hi()-1,7);continue;case 47:switch(Jt()){case 42:case 47:tr(iw(Vm(dt(),hi()),t,a,u),u),(Kr(b||1)==5||Kr(Jt()||1)==5)&&Te(k)&&kt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*y:s[d++]=Te(k)*g;case 125*y:case 59:case 0:switch(f){case 0:case 125:A=0;case 59+p:g==-1&&(k=M(k,/\f/g,"")),w>0&&(Te(k)-v||y===0&&b===47)&&tr(w>32?Ym(k+";",r,a,v-1,u):Ym(M(k," ","")+";",r,a,v-2,u),u);break;case 59:k+=";";default:if(tr(E=Xm(k,t,a,d,p,o,s,x,S=[],P=[],v,i),i),f===123)if(p===0)gl(k,t,E,E,S,i,v,s,P);else{switch(h){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?gl(e,E,E,r&&tr(Xm(e,E,E,0,0,o,s,x,o,S=[],v,P),P),o,P,v,s,r?S:P):gl(k,E,E,E,[""],P,0,s,P)}}d=p=w=0,y=g=1,x=k="",v=n;break;case 58:v=1+Te(k),w=b;default:if(y<1){if(f==123)--y;else if(f==125&&y++==0&&Nm()==125)continue}switch(k+=pi(f),f*y){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Te(k)-1)*g,g=1;break;case 64:Jt()===45&&(k+=pl(dt())),h=Jt(),p=v=Te(x=k+=Gm(hi())),f++;break;case 45:b===45&&Te(k)==2&&(y=0)}}return i}function Xm(e,t,a,r,o,i,n,s,u,d,p,v){for(var h=o-1,w=o===0?i:[""],b=dl(w),y=0,A=0,g=0;y<r;++y)for(var f=0,x=kt(e,h+1,h=bd(A=n[y])),S=e;f<b;++f)(S=ul(A>0?w[f]+" "+x:M(x,/&\f/g,w[f])))&&(u[g++]=S);return mi(e,t,a,o===0?Ra:s,u,d,p,v)}function iw(e,t,a,r){return mi(e,t,a,ll,pi(_m()),kt(e,2,-2),0,r)}function Ym(e,t,a,r,o){return mi(e,t,a,Gr,kt(e,0,r),kt(e,r+1,-1),r,o)}function Ld(e,t,a){switch(Fm(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return er+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+er+e+N+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+N+e+e;case 6165:return O+e+N+"flex-"+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return O+e+N+"flex-item-"+M(e,/flex-|-self/g,"")+(It(e,/flex-|baseline/)?"":N+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return O+e+N+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+N+M(e,"shrink","negative")+e;case 5292:return O+e+N+M(e,"basis","preferred-size")+e;case 6060:return O+"box-"+M(e,"-grow","")+O+e+N+M(e,"grow","positive")+e;case 4554:return O+M(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+N+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!It(e,/flex-|baseline/))return N+"grid-column-align"+kt(e,t)+e;break;case 2592:case 3360:return N+M(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,It(r.props,/grid-\w+-end/)})?~Xr(e+(a=a[t].value),"span",0)?e:N+M(e,"-start","")+e+N+"grid-row-span:"+(~Xr(a,"span",0)?It(a,/\d+/):+It(a,/\d+/)-+It(e,/\d+/))+";":N+M(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return It(r.props,/grid-\w+-start/)})?e:N+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Te(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+er+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xr(e,"stretch",0)?Ld(M(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return N+o+":"+i+d+(n?N+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return M(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+N+"$2box$3")+e;case 100:return M(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Zr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function Qm(e,t,a,r){switch(e.type){case Bm:if(e.children.length)break;case zm:case Dm:case Gr:return e.return=e.return||e.value;case ll:return"";case sl:return e.return=e.value+"{"+Zr(e.children,r)+"}";case Ra:if(!Te(e.value=e.props.join(",")))return""}return Te(a=Zr(e.children,r))?e.return=e.value+"{"+a+"}":""}function Zm(e){var t=dl(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Jm(e){return function(t){t.root||(t=t.return)&&e(t)}}function eh(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Gr:e.return=Ld(e.value,e.length,a);return;case sl:return Zr([Zt(e,{value:M(e.value,"@","@"+O)})],r);case Ra:if(e.length)return Om(a=e.props,function(o){switch(It(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ar(Zt(e,{props:[M(o,/:(read-\w+)/,":"+er+"$1")]})),ar(Zt(e,{props:[o]})),gi(e,{props:yd(a,r)});break;case"::placeholder":ar(Zt(e,{props:[M(o,/:(plac\w+)/,":"+O+"input-$1")]})),ar(Zt(e,{props:[M(o,/:(plac\w+)/,":"+er+"$1")]})),ar(Zt(e,{props:[M(o,/:(plac\w+)/,N+"input-$1")]})),ar(Zt(e,{props:[o]})),gi(e,{props:yd(a,r)});break}return""})}}var Sd,Cd,ea=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ch="active",fh="data-styled-version",bl="6.4.3",Fd=`/*!sc*/
`,yi=typeof window<"u"&&typeof document<"u";function th(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var nw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Cd=(Sd=th("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Sd!==void 0?Sd:th("SC_DISABLE_SPEEDY"))!==null&&Cd!==void 0?Cd:typeof process<"u"&&process.env!==void 0&&!1),ph="sc-keyframes-",lw={};function Si(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var Kk=1<<30,ml=new Map,vl=new Map,hl=1,xi=e=>{if(ml.has(e))return ml.get(e);for(;vl.has(hl);)hl++;let t=hl++;return ml.set(e,t),vl.set(t,e),t},sw=e=>vl.get(e),uw=(e,t)=>{hl=t+1,ml.set(e,t),vl.set(t,e)};var Od=Object.freeze([]),Jr=Object.freeze({});function gh(e,t,a=Jr){return e.theme!==a.theme&&e.theme||t||a.theme}var dw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cw=/(^-|-$)/g;function mh(e){return e.replace(dw,"-").replace(cw,"")}var fw=/(a)(d)/gi,ah=e=>String.fromCharCode(e+(e>25?39:97));function jd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=ah(t%52)+a;return(ah(t%52)+a).replace(fw,"$1-$2")}var Td=5381,or=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},hh=e=>or(Td,e);function _d(e){return jd(hh(e)>>>0)}function pw(e){return e.displayName||e.name||"Component"}function Rd(e){return typeof e=="string"&&!0}function gw(e){return Rd(e)?`styled.${e}`:`Styled(${pw(e)})`}var vh=Symbol.for("react.memo"),mw=Symbol.for("react.forward_ref"),hw={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},vw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},xw={[mw]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[vh]:xh};function rh(e){return("type"in(t=e)&&t.type.$$typeof)===vh?xh:"$$typeof"in e?xw[e.$$typeof]:hw;var t}var bw=Object.defineProperty,yw=Object.getOwnPropertyNames,ww=Object.getOwnPropertySymbols,Lw=Object.getOwnPropertyDescriptor,Sw=Object.getPrototypeOf,Cw=Object.prototype;function bh(e,t,a){if(typeof t!="string"){let r=Sw(t);r&&r!==Cw&&bh(e,r,a);let o=yw(t).concat(ww(t)),i=rh(e),n=rh(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in vw||a&&a[u]||n&&u in n||i&&u in i)){let d=Lw(t,u);try{bw(e,u,d)}catch{}}}}return e}function Ci(e){return typeof e=="function"}var Iw=Symbol.for("react.forward_ref");function Nd(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Iw&&"styledComponentId"in e}function bi(e,t){return e&&t?e+" "+t:e||t||""}function xl(e,t){return e.join(t||"")}function wi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ed(e,t,a=!1){if(!a&&!wi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Ed(e[r],t[r]);else if(wi(t))for(let r in t)e[r]=Ed(e[r],t[r]);return e}function Hd(e,t){Object.defineProperty(e,"toString",{value:t})}var kw=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw Si(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+Fd;return t}},Pw=`style[${ea}][${fh}="${bl}"]`,Tw=new RegExp(`^${ea}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),oh=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,$d=e=>{if(!e)return document;if(oh(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(oh(t))return t}return document},Rw=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},Ew=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Fd),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(Tw);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(uw(p,d),Rw(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},Id=e=>{let t=$d(e.options.target).querySelectorAll(Pw);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(ea)!==ch&&(Ew(e,o),o.parentNode&&o.parentNode.removeChild(o))}},vi=!1;function $w(){if(vi!==!1)return vi;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return vi=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return vi=t.getAttribute("content")||void 0}return vi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var yh=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${ea}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(ea,ch),o.setAttribute(fh,bl);let s=t||$w();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},Aw=class{constructor(e,t){this.element=yh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw Si(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Mw=class{constructor(e,t){this.element=yh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},ih=yi,zw={isServer:!yi,useCSSOMInjection:!nw},Li=class e{static registerId(t){return xi(t)}constructor(t=Jr,a={},r){this.options=Object.assign(Object.assign({},zw),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&yi&&ih&&(ih=!1,Id(this)),Hd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=sw(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let v=i.getGroup(u);if(v.length===0)continue;let h=ea+".g"+u+'[id="'+d+'"]',w="";for(let b of p)b.length>0&&(w+=b+",");s+=v+h+'{content:"'+w+'"}'+Fd}return s})(this))}rehydrate(){!this.server&&yi&&Id(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&yi&&t.target!==this.options.target&&$d(this.options.target)!==$d(t.target)&&Id(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Aw(r,o):new Mw(r,o))(this.options),new kw(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){xi(t),t.startsWith(ph)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(xi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(xi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},wh=new WeakSet,Dw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Bw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Dw||e.startsWith("--")?String(t).trim():t+"px"}var rr=47;function nh(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var Lh=Symbol.for("sc-keyframes");function Fw(e){return typeof e=="object"&&e!==null&&Lh in e}function Sh(e){return Ci(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Ch=e=>e==null||e===!1||e==="",Ow=Symbol.for("react.client.reference");function lh(e){return e.$$typeof===Ow}function Ih(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!Ch(r)&&(Array.isArray(r)&&wh.has(r)||Ci(r)?t.push(nh(a)+":",r,";"):wi(r)?(t.push(a+" {"),Ih(r,t),t.push("}")):t.push(nh(a)+": "+Bw(a,r)+";"))}}function Ea(e,t,a,r,o=[]){if(Ch(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(lh(e))return o;if(Sh(e)&&t){let n=e(t);return Ea(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)Ea(e[n],t,a,r,o);return o}return Nd(e)?(o.push(`.${e.styledComponentId}`),o):Fw(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):lh(e)?o:wi(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Ih(e,o),o):(o.push(e.toString()),o)}var jw=hh(bl),Ad=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=or(jw,a),this.baseStyle=r,Li.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(Sh(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=xl(Ea(u,t,a,r)))}else i+=xl(Ea(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=jd(or(or(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=bi(o,s)}}return o}},_w=/&/g;function kh(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function kd(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==rr||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===rr&&(n=!1,u++);else if(d!==34&&d!==39||kh(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let v=e.charCodeAt(p);if(v===59||v===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function Ph(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Ph(i.children,t)}return e}function Th({options:e=Jr,plugins:t=Od}=Jr){let a,r,o,i=(h,w,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:h,n=t.slice();n.push(h=>{h.type===Ra&&h.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),h.props[0]=h.props[0].replace(_w,r).replace(o,i))}),e.prefix&&n.push(eh),n.push(Qm);let s=[],u=Zm(n.concat(Jm(h=>s.push(h)))),d=(h,w="",b="",y="&")=>{a=y,r=w,o=void 0;let A=(function(f){let x=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!x&&!S)return f;if(!x)return kd(f);let P=f.length,E="",k=0,R=0,U=0,z=0,ae=0,Fa=!1;for(;R<P;){let we=f.charCodeAt(R);if(we!==34&&we!==39||kh(f,R))if(U===0)if(we===rr&&R+1<P&&f.charCodeAt(R+1)===42){for(R+=2;R+1<P&&(f.charCodeAt(R)!==42||f.charCodeAt(R+1)!==rr);)R++;R+=2}else if(we!==40)if(we!==41)if(z>0)R++;else if(we===42&&R+1<P&&f.charCodeAt(R+1)===rr)E+=f.substring(k,R),R+=2,k=R,Fa=!0;else if(we===rr&&R+1<P&&f.charCodeAt(R+1)===rr){for(E+=f.substring(k,R);R<P&&f.charCodeAt(R)!==10;)R++;k=R,Fa=!0}else we===123?ae++:we===125&&ae--,R++;else z>0&&z--,R++;else z++,R++;else R++;else U===0?U=we:U===we&&(U=0),R++}return Fa?(k<P&&(E+=f.substring(k)),ae===0?E:kd(E)):ae===0?f:kd(f)})(h),g=Km(b||w?b+" "+w+" { "+A+" }":A);return e.namespace&&(g=Ph(g,e.namespace)),s=[],Zr(g,u),s},p=e,v=Td;for(let h=0;h<t.length;h++)t[h].name||Si(15),v=or(v,t[h].name);return p?.namespace&&(v=or(v,p.namespace)),p?.prefix&&(v=or(v,"p")),d.hash=v!==Td?v.toString():"",d}var Nw=new Li,Md=Th(),Ud=ce.default.createContext({shouldForwardProp:void 0,styleSheet:Nw,stylis:Md,stylisPlugins:void 0}),Qk=Ud.Consumer;function qd(){return ce.default.useContext(Ud)}function Rh(e){var t;let a=qd(),{styleSheet:r}=a,o=ce.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=ce.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:Th({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=ce.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return ce.default.createElement(Ud.Provider,{value:u},e.children)}var Wd=ce.default.createContext(void 0),Zk=Wd.Consumer;var sh=Object.prototype.hasOwnProperty,Pd={};function Hw(e,t){let a=typeof e!="string"?"sc":mh(e);Pd[a]=(Pd[a]||0)+1;let r=a+"-"+_d(bl+a+Pd[a]);return t?t+"-"+r:r}function Uw(e,t,a){let r=Nd(e),o=e,i=!Rd(e),{attrs:n=Od,componentId:s=Hw(t.displayName,t.parentComponentId),displayName:u=gw(e)}=t,d=t.displayName&&t.componentId?mh(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:v}=t;if(r&&o.shouldForwardProp){let y=o.shouldForwardProp;if(t.shouldForwardProp){let A=t.shouldForwardProp;v=(g,f)=>y(g,f)&&A(g,f)}else v=y}let h=new Ad(a,d,r?o.componentStyle:void 0);function w(y,A){return(function(g,f,x){let{attrs:S,componentStyle:P,defaultProps:E,foldedComponentIds:k,styledComponentId:R,target:U}=g,z=ce.default.useContext(Wd),ae=qd(),Fa=g.shouldForwardProp||ae.shouldForwardProp,we=gh(f,z,E)||Jr,oa,bo;{let ia=ce.default.useRef(null),ht=ia.current;if(ht!==null&&ht[1]===we&&ht[2]===ae.styleSheet&&ht[3]===ae.stylis&&ht[7]===P&&(function(hr,Ve,je){let _e=hr,Le=Ve,yo=0;for(let Oa in Le)if(sh.call(Le,Oa)&&(yo++,_e[Oa]!==Le[Oa]))return!1;return yo===je})(ht[0],f,ht[4]))oa=ht[5],bo=ht[6];else{oa=(function(Ve,je,_e){let Le=Object.assign(Object.assign({},je),{className:void 0,theme:_e}),yo=Ve.length>1;for(let Oa=0;Oa<Ve.length;Oa++){let Jl=Ve[Oa],Fi=Ci(Jl)?Jl(yo?Object.assign({},Le):Le):Jl;for(let na in Fi)na==="className"?Le.className=bi(Le.className,Fi[na]):na==="style"?Le.style=Object.assign(Object.assign({},Le.style),Fi[na]):na in je&&je[na]===void 0||(Le[na]=Fi[na])}return"className"in je&&typeof je.className=="string"&&(Le.className=bi(Le.className,je.className)),Le})(S,f,we),bo=(function(Ve,je,_e,Le){return Ve.generateAndInjectStyles(je,_e,Le)})(P,oa,ae.styleSheet,ae.stylis);let hr=0;for(let Ve in f)sh.call(f,Ve)&&hr++;ia.current=[f,we,ae.styleSheet,ae.stylis,hr,oa,bo,P]}}let Bi=oa.as||U,Ql=(function(ia,ht,hr,Ve){let je={};for(let _e in ia)ia[_e]===void 0||_e[0]==="$"||_e==="as"||_e==="theme"&&ia.theme===hr||(_e==="forwardedAs"?je.as=ia.forwardedAs:Ve&&!Ve(_e,ht)||(je[_e]=ia[_e]));return je})(oa,Bi,we,Fa),Zl=bi(k,R);return bo&&(Zl+=" "+bo),oa.className&&(Zl+=" "+oa.className),Ql[Rd(Bi)&&Bi.includes("-")?"class":"className"]=Zl,x&&(Ql.ref=x),(0,ce.createElement)(Bi,Ql)})(b,y,A)}w.displayName=u;let b=ce.default.forwardRef(w);return b.attrs=p,b.componentStyle=h,b.displayName=u,b.shouldForwardProp=v,b.foldedComponentIds=r?bi(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(y){this._foldedDefaultProps=r?(function(A,...g){for(let f of g)Ed(A,f,!0);return A})({},o.defaultProps,y):y}}),Hd(b,()=>`.${b.styledComponentId}`),i&&bh(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var qw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function uh(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var dh=e=>(wh.add(e),e);function L(e,...t){if(Ci(e)||wi(e))return dh(Ea(uh(Od,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ea(a):dh(Ea(uh(a,t)))}function zd(e,t,a=Jr){if(!t)throw Si(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>zd(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>zd(e,t,Object.assign(Object.assign({},a),o)),r}var Eh=e=>zd(Uw,e),l=Eh;qw.forEach(e=>{l[e]=Eh(e)});var Dd=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(Ci(i)&&!Nd(i))return!1}return!0})(t),Li.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=xl(Ea(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function $h(e,...t){let a=L(e,...t),r=`sc-global-${_d(JSON.stringify(a))}`,o=new Dd(a,r),i=s=>{let u=qd(),d=ce.default.useContext(Wd),p;{let v=ce.default.useRef(null);v.current===null&&(v.current=u.styleSheet.allocateGSInstance(r)),p=v.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let v=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],h=ce.default.useRef(o);ce.default.useLayoutEffect(()=>{u.styleSheet.server||(h.current!==o&&(u.styleSheet.clearRules(r),h.current=o),n(p,s,u.styleSheet,d,u.stylis))},v),ce.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,v){if(o.isStatic)o.renderStyles(s,lw,d,v);else{let h=Object.assign(Object.assign({},u),{theme:gh(u,p,i.defaultProps)});o.renderStyles(s,h,d,v)}}return ce.default.memo(i)}var Ah,Bd=class{constructor(t,a){this[Ah]=!0,this.inject=(r,o=Md)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=ph+t,this.rules=a,xi(this.id),Hd(this,()=>{throw Si(12,String(this.name))})}getName(t=Md){return t.hash?this.name+jd(+t.hash>>>0):this.name}};function Bt(e,...t){let a=xl(L(e,...t)),r=_d(a);return new Bd(r,a)}Ah=Lh;var Jk=`__sc-${ea}__`;var e5=`:not(style[${ea}])`,t5=`style[${ea}]`;var Mh=`/* Generated from src/tokens. Do not edit directly. */

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
`;var Vd=document.currentScript??document.querySelector("script[data-project]"),$a={project:Vd?.dataset.project??"default",seedUrl:Vd?.dataset.seed,version:Vd?.dataset.version||void 0};var ir=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Ii=e=>e.comments[0]?.body??"",zh=e=>e.comments[0]?.author??"";function Dh(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:ir(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}function Gd(e){return e.map(t=>{if(!t.beforeShot||t.comments.length===0||t.comments[0].shot)return t;let{beforeShot:a,...r}=t;return{...r,comments:[{...t.comments[0],shot:a},...t.comments.slice(1)]}})}function Bh(e,t){return e.filter(a=>!t[a.id]?.hidden).map(a=>{let r=t[a.id];if(!r)return{...a,origin:"seed"};let o=new Set(r.hiddenCommentIds??[]),i=a.comments.filter(n=>!o.has(n.id)).map(n=>r.editedBodies?.[n.id]?{...n,body:r.editedBodies[n.id]}:n);return{...a,origin:"seed",resolved:r.resolved??a.resolved,comments:[...i,...r.addedComments??[]]}}).filter(a=>a.comments.length>0)}function Fh(e,t,a){let r=e.addedComments??[];return r.some(o=>o.id===t)?{addedComments:r.map(o=>o.id===t?{...o,body:a}:o)}:{editedBodies:{...e.editedBodies,[t]:a}}}function Oh(e,t){let a=e.addedComments??[];return a.some(r=>r.id===t)?{addedComments:a.filter(r=>r.id!==t)}:{hiddenCommentIds:[...e.hiddenCommentIds??[],t]}}var jh="fbw:author",yl=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;Dh(t);try{this.threads=Gd(JSON.parse(localStorage.getItem(this.threadsKey)??"[]")),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=Gd(t.filter(r=>!a.has(r.id))),this.refreshSeeds(),this.notify()}refreshSeeds(){this.seedThreads=Bh(this.rawSeeds,this.overrides)}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o,i,n){let s={id:ir(),author:a,body:r,createdAt:new Date().toISOString(),version:o,shot:i,attachments:n?.length?n:void 0};if(this.isSeed(t)){let u=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...u.addedComments??[],s]});return}this.threads=this.threads.map(u=>u.id===t?{...u,comments:[...u.comments,s]}:u),this.persist()}updateComment(t,a,r){if(this.isSeed(t)){this.overrideSeed(t,Fh(this.overrides[t]??{},a,r));return}this.threads=this.threads.map(o=>o.id===t?{...o,comments:o.comments.map(i=>i.id===a?{...i,body:r}:i)}:o),this.persist()}removeComment(t,a){if(this.isSeed(t)){this.overrideSeed(t,Oh(this.overrides[t]??{},a));return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r).filter(r=>r.comments.length>0),this.persist()}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.refreshSeeds(),this.notify()}get author(){return localStorage.getItem(jh)??""}set author(t){localStorage.setItem(jh,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){try{localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}catch{this.threads=this.threads.map(t=>({...t,comments:t.comments.map(({shot:a,...r})=>r)}));try{localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}catch{this.threads=this.threads.map(t=>({...t,comments:t.comments.map(({attachments:a,...r})=>r)})),localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}}this.notify()}notify(){this.listeners.forEach(t=>t())}};var eo="fbw-host",Vw="#2563eb",Xd="fbw:pending-jump",Gw=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function Xw(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${Gw(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function _h(e){return{page:location.pathname,selector:Xw(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Aa(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==eo&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function Yw(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${Vw}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function Yd(e){if(e.page!==location.pathname)return!1;let t=Aa(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>Yw(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function Nh(e){sessionStorage.setItem(Xd,JSON.stringify(e)),location.assign(e.page)}function Hh(){let e=sessionStorage.getItem(Xd);if(e){sessionStorage.removeItem(Xd);try{let t=JSON.parse(e);setTimeout(()=>Yd(t),400)}catch{}}}var Di=c(C(),1);var dc=c(C(),1),cc=c(C(),1),fc=c(C(),1),pc=c(C(),1),El=c(C(),1),q2=c(C(),1),Lv=c(C(),1),Sv=c(C(),1),Cv=c(C(),1),Ei=c(C(),1),Q2=c(C(),1);var Z2=c(m(),1),J2=c(m(),1);var Dv=c(m(),1);var Bv=c(m(),1);var Fv=c(m(),1);var SL=c(m(),1),jv=c(m(),1);var IL=c(m(),1);var kL=c(m(),1),PL=c(m(),1),TL=c(m(),1),_v=c(m(),1),RL=c(m(),1),Hv=c(C(),1);var qv=c(m(),1),Wv=c(C(),1),Vv=c(m(),1);var Gv=c(C(),1);var Xv=c(m(),1);var Yv=c(m(),1),vc=c(C(),1);var xc=c(m(),1),Qv=c(C(),1);var Zv=c(m(),1),Jv=c(C(),1);var ex=c(m(),1),tx=c(C(),1);var ax=c(m(),1),rx=c(C(),1);var ox=c(m(),1),ix=c(C(),1);var UL=c(m(),1),nx=c(m(),1),qL=c(C(),1),WL=c(Ta(),1),VL=c(C(),1);var GL=c(m(),1),XL=c(C(),1),lx=c(m(),1),Al=c(C(),1),YL=c(Ta(),1),KL=c(m(),1),Ml=c(C(),1);var sx=c(m(),1),go=c(C(),1);var ux=c(m(),1),lr=c(C(),1);var Fe=c(m(),1),eS=c(C(),1),wc=c(m(),1),tS=c(C(),1),Lc=c(m(),1),aS=c(C(),1),dx=c(m(),1),Sc=c(C(),1);var cx=c(m(),1);var fx=c(m(),1);var px=c(m(),1);var gx=c(m(),1);var mx=c(m(),1),Cc=c(C(),1),oS=c(Ta(),1);var hx=c(C(),1);var vx=c(m(),1),Ic=c(m(),1);var xx=c(m(),1);var yx=c(m(),1),lS=c(C(),1);var sS=c(m(),1);var Sl=c(C());var Ll=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var Vh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Gh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var Kd=e=>{let t=Gh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var ki=c(C());var Xh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Yh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Kh=(0,ki.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,ki.createElement)("svg",{ref:u,...Xh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:Ll("lucide",o),...!i&&!Yh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,ki.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Ft=(e,t)=>{let a=(0,Sl.forwardRef)(({className:r,...o},i)=>(0,Sl.createElement)(Kh,{ref:i,iconNode:t,className:Ll(`lucide-${Vh(Kd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=Kd(e),a};var a2=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],to=Ft("check",a2);var r2=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],ao=Ft("paperclip",r2);var o2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ro=Ft("pencil",o2);var i2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ma=Ft("trash-2",i2);var n2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],De=Ft("x",n2);var wx=c(C(),1);var Lx=c(m(),1),Sx=c(m(),1);var Cx=c(m(),1),gS=c(C(),1);var Ix=c(m(),1);var kx=c(C(),1);var Px=c(m(),1);var Rx=c(m(),1);var vS=c(m(),1);var bS=c(m(),1);var zl=c(m(),1);var LS=c(m(),1);var Ax=c(m(),1);var $S=c(m(),1),pr=c(C(),1);var Mx=c(m(),1);var zx=c(m(),1);var Dx=c(m(),1),BS=c(C(),1);var Bx=c(m(),1);var Fx=c(m(),1);var FS=c(m(),1);var Ox=c(m(),1);var NS=c(m(),1);var jx=c(m(),1);var US=c(C(),1);var _x=c(m(),1),qS=c(C(),1);var Ux=c(m(),1),WS=c(C(),1),qx=c(m(),1),VS=c(m(),1),Wx=c(m(),1),Vx=c(C(),1);var kc=c(m(),1),Gx=c(m(),1);var Xx=c(m(),1);var uc=c(m(),1),cr=c(C(),1);var Ee=c(m(),1),oC=c(C(),1),iC=c(Ta(),1);var Kx=c(m(),1);var Pc=c(C(),1),Tc=c(m(),1),Rc=c(C(),1);var Qx=c(m(),1),mo=c(C(),1),nC=c(Ta(),1);var Zx=c(m(),1),lC=c(m(),1),Jx=c(C(),1),Ec=c(m(),1),e0=c(C(),1);var t0=c(m(),1);var a0=c(m(),1),dC=c(C(),1),$c=c(m(),1),r0=c(C(),1),cC=c(Ta(),1),fC=c(m(),1),tt=c(C(),1),Dl=c(m(),1);var Ac=c(C(),1),n0=c(m(),1);var l0=c(C(),1);var s0=c(m(),1),u0=c(C(),1);var d0=c(m(),1);var c0=c(m(),1);var f0=c(m(),1);var p0=c(m(),1);var ct=c(m(),1),h0=c(C(),1);var fo=c(m(),1);var zC=c(m(),1),Fl=c(C(),1);var Mc=c(m(),1),DC=c(m(),1),gr=c(C(),1);var v0=c(m(),1),Ol=c(C(),1);var x0=c(m(),1),b0=c(C(),1);var jl=c(m(),1);var OC=c(m(),1);var y0=c(m(),1);var w0=c(m(),1);var L0=c(m(),1),jC=c(C(),1);var S0=c(m(),1),C0=c(C(),1);var I0=c(m(),1),k0=c(m(),1);var sr=c(m(),1),T0=c(m(),1);var R0=c(m(),1);var E0=c(m(),1),XC=c(C(),1);var $0=c(m(),1);var YC=c(m(),1),_l=c(C(),1);var A0=c(m(),1);var KC=c(m(),1),M0=c(C(),1);var ur=c(m(),1);var z0=c(m(),1),D0=c(C(),1);var B0=c(m(),1);var F0=c(m(),1);var aI=c(m(),1);var O0=c(m(),1),rI=c(C(),1),oI=c(m(),1),j0=c(C(),1),iI=c(m(),1),_0=c(m(),1);var sI=c(m(),1);var uI=c(C(),1);var zc=c(m(),1);var Dc=c(m(),1),Bc=c(C(),1),U0=c(C(),1),Fc=c(m(),1),Oc=c(m(),1);var q0=c(m(),1),jc=c(C(),1);var fI=c(m(),1),W0=c(m(),1),V0=c(m(),1);var G0=c(m(),1);var _c=c(m(),1),pI=c(m(),1),gI=c(m(),1);var X0=c(m(),1),Y0=c(C(),1),K0=c(m(),1),mI=c(C(),1);var Nc=c(m(),1),Hc=c(C(),1);var Uc=c(m(),1),Q0=c(m(),1),qc=c(m(),1),Z0=c(m(),1),J0=c(m(),1);var eb=c(m(),1);var Wc=c(m(),1);var Vc=c(m(),1);var tb=c(m(),1),Gc=c(m(),1),ab=c(m(),1),hI=c(C(),1),ob=c(m(),1),ib=c(m(),1),vI=c(C(),1);var nb=c(m(),1),lb=c(m(),1);var xI=c(m(),1);function Qh(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let a=document.implementation.createHTMLDocument(),r=a.createElement("base"),o=a.createElement("a");return a.head.appendChild(r),a.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}var Zh=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function Pt(e){let t=[];for(let a=0,r=e.length;a<r;a++)t.push(e[a]);return t}var oo=null;function Il(e={}){return oo||(e.includeStyleProperties?(oo=e.includeStyleProperties,oo):(oo=Pt(window.getComputedStyle(document.documentElement)),oo))}function Cl(e,t){let r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function l2(e){let t=Cl(e,"border-left-width"),a=Cl(e,"border-right-width");return e.clientWidth+t+a}function s2(e){let t=Cl(e,"border-top-width"),a=Cl(e,"border-bottom-width");return e.clientHeight+t+a}function Qd(e,t={}){let a=t.width||l2(e),r=t.height||s2(e);return{width:a,height:r}}function Jh(){let e,t;try{t=process}catch{}let a=t&&t.env?t.env.devicePixelRatio:null;return a&&(e=parseInt(a,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var Je=16384;function ev(e){(e.width>Je||e.height>Je)&&(e.width>Je&&e.height>Je?e.width>e.height?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je):e.width>Je?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je))}function io(e){return new Promise((t,a)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=a,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function u2(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function tv(e,t,a){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${a}`),o.setAttribute("viewBox",`0 0 ${t} ${a}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),u2(o)}var Re=(e,t)=>{if(e instanceof t)return!0;let a=Object.getPrototypeOf(e);return a===null?!1:a.constructor.name===t.name||Re(a,t)};function d2(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function c2(e,t){return Il(t).map(a=>{let r=e.getPropertyValue(a),o=e.getPropertyPriority(a);return`${a}: ${r}${o?" !important":""};`}).join(" ")}function f2(e,t,a,r){let o=`.${e}:${t}`,i=a.cssText?d2(a):c2(a,r);return document.createTextNode(`${o}{${i}}`)}function av(e,t,a,r){let o=window.getComputedStyle(e,a),i=o.getPropertyValue("content");if(i===""||i==="none")return;let n=Zh();try{t.className=`${t.className} ${n}`}catch{return}let s=document.createElement("style");s.appendChild(f2(n,a,o,r)),t.appendChild(s)}function rv(e,t,a){av(e,t,":before",a),av(e,t,":after",a)}var ov="application/font-woff",iv="image/jpeg",p2={woff:ov,woff2:ov,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:iv,jpeg:iv,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function g2(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function no(e){let t=g2(e).toLowerCase();return p2[t]||""}function m2(e){return e.split(/,/)[1]}function Pi(e){return e.search(/^(data:)/)!==-1}function Jd(e,t){return`data:${t};base64,${e}`}async function ec(e,t,a){let r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((i,n)=>{let s=new FileReader;s.onerror=n,s.onloadend=()=>{try{i(a({res:r,result:s.result}))}catch(u){n(u)}},s.readAsDataURL(o)})}var Zd={};function h2(e,t,a){let r=e.replace(/\?.*/,"");return a&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function lo(e,t,a){let r=h2(e,t,a.includeQueryParams);if(Zd[r]!=null)return Zd[r];a.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{let i=await ec(e,a.fetchRequestInit,({res:n,result:s})=>(t||(t=n.headers.get("Content-Type")||""),m2(s)));o=Jd(i,t)}catch(i){o=a.imagePlaceholder||"";let n=`Failed to fetch resource: ${e}`;i&&(n=typeof i=="string"?i:i.message),n&&console.warn(n)}return Zd[r]=o,o}async function v2(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):io(t)}async function x2(e,t){if(e.currentSrc){let i=document.createElement("canvas"),n=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,n?.drawImage(e,0,0,i.width,i.height);let s=i.toDataURL();return io(s)}let a=e.poster,r=no(a),o=await lo(a,r,t);return io(o)}async function b2(e,t){var a;try{if(!((a=e?.contentDocument)===null||a===void 0)&&a.body)return await Ti(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function y2(e,t){return Re(e,HTMLCanvasElement)?v2(e):Re(e,HTMLVideoElement)?x2(e,t):Re(e,HTMLIFrameElement)?b2(e,t):e.cloneNode(nv(e))}var w2=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",nv=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function L2(e,t,a){var r,o;if(nv(t))return t;let i=[];return w2(e)&&e.assignedNodes?i=Pt(e.assignedNodes()):Re(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?i=Pt(e.contentDocument.body.childNodes):i=Pt(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),i.length===0||Re(e,HTMLVideoElement)||await i.reduce((n,s)=>n.then(()=>Ti(s,a)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function S2(e,t,a){let r=t.style;if(!r)return;let o=window.getComputedStyle(e);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):Il(a).forEach(i=>{let n=o.getPropertyValue(i);i==="font-size"&&n.endsWith("px")&&(n=`${Math.floor(parseFloat(n.substring(0,n.length-2)))-.1}px`),Re(e,HTMLIFrameElement)&&i==="display"&&n==="inline"&&(n="block"),i==="d"&&t.getAttribute("d")&&(n=`path(${t.getAttribute("d")})`),r.setProperty(i,n,o.getPropertyPriority(i))})}function C2(e,t){Re(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Re(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function I2(e,t){if(Re(e,HTMLSelectElement)){let r=Array.from(t.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function k2(e,t,a){return Re(t,Element)&&(S2(e,t,a),rv(e,t,a),C2(e,t),I2(e,t)),t}async function P2(e,t){let a=e.querySelectorAll?e.querySelectorAll("use"):[];if(a.length===0)return e;let r={};for(let i=0;i<a.length;i++){let s=a[i].getAttribute("xlink:href");if(s){let u=e.querySelector(s),d=document.querySelector(s);!u&&d&&!r[s]&&(r[s]=await Ti(d,t,!0))}}let o=Object.values(r);if(o.length){let i="http://www.w3.org/1999/xhtml",n=document.createElementNS(i,"svg");n.setAttribute("xmlns",i),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let s=document.createElementNS(i,"defs");n.appendChild(s);for(let u=0;u<o.length;u++)s.appendChild(o[u]);e.appendChild(n)}return e}async function Ti(e,t,a){return!a&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>y2(r,t)).then(r=>L2(e,r,t)).then(r=>k2(e,r,t)).then(r=>P2(r,t))}var lv=/url\((['"]?)([^'"]+?)\1\)/g,T2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,R2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function E2(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function $2(e){let t=[];return e.replace(lv,(a,r,o)=>(t.push(o),a)),t.filter(a=>!Pi(a))}async function A2(e,t,a,r,o){try{let i=a?Qh(t,a):t,n=no(t),s;if(o){let u=await o(i);s=Jd(u,n)}else s=await lo(i,n,r);return e.replace(E2(t),`$1${s}$3`)}catch{}return e}function M2(e,{preferredFontFormat:t}){return t?e.replace(R2,a=>{for(;;){let[r,,o]=T2.exec(a)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function tc(e){return e.search(lv)!==-1}async function kl(e,t,a){if(!tc(e))return e;let r=M2(e,a);return $2(r).reduce((i,n)=>i.then(s=>A2(s,n,t,a)),Promise.resolve(r))}async function so(e,t,a){var r;let o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){let i=await kl(o,null,a);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function z2(e,t){await so("background",e,t)||await so("background-image",e,t),await so("mask",e,t)||await so("-webkit-mask",e,t)||await so("mask-image",e,t)||await so("-webkit-mask-image",e,t)}async function D2(e,t){let a=Re(e,HTMLImageElement);if(!(a&&!Pi(e.src))&&!(Re(e,SVGImageElement)&&!Pi(e.href.baseVal)))return;let r=a?e.src:e.href.baseVal,o=await lo(r,no(r),t);await new Promise((i,n)=>{e.onload=i,e.onerror=t.onImageErrorHandler?(...u)=>{try{i(t.onImageErrorHandler(...u))}catch(d){n(d)}}:n;let s=e;s.decode&&(s.decode=i),s.loading==="lazy"&&(s.loading="eager"),a?(e.srcset="",e.src=o):e.href.baseVal=o})}async function B2(e,t){let r=Pt(e.childNodes).map(o=>ac(o,t));await Promise.all(r).then(()=>e)}async function ac(e,t){Re(e,Element)&&(await z2(e,t),await D2(e,t),await B2(e,t))}function sv(e,t){let{style:a}=e;t.backgroundColor&&(a.backgroundColor=t.backgroundColor),t.width&&(a.width=`${t.width}px`),t.height&&(a.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(o=>{a[o]=r[o]}),e}var uv={};async function dv(e){let t=uv[e];if(t!=null)return t;let r=await(await fetch(e)).text();return t={url:e,cssText:r},uv[e]=t,t}async function cv(e,t){let a=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(a.match(/url\([^)]+\)/g)||[]).map(async n=>{let s=n.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),ec(s,t.fetchRequestInit,({result:u})=>(a=a.replace(n,`url(${u})`),[n,u]))});return Promise.all(i).then(()=>a)}function fv(e){if(e==null)return[];let t=[],a=/(\/\*[\s\S]*?\*\/)/gi,r=e.replace(a,""),o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=o.exec(r);if(u===null)break;t.push(u[0])}r=r.replace(o,"");let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,n="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(n,"gi");for(;;){let u=i.exec(r);if(u===null){if(u=s.exec(r),u===null)break;i.lastIndex=s.lastIndex}else s.lastIndex=i.lastIndex;t.push(u[0])}return t}async function F2(e,t){let a=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{Pt(o.cssRules||[]).forEach((i,n)=>{if(i.type===CSSRule.IMPORT_RULE){let s=n+1,u=i.href,d=dv(u).then(p=>cv(p,t)).then(p=>fv(p).forEach(v=>{try{o.insertRule(v,v.startsWith("@import")?s+=1:o.cssRules.length)}catch(h){console.error("Error inserting rule from remote css",{rule:v,error:h})}})).catch(p=>{console.error("Error loading remote css",p.toString())});r.push(d)}})}catch(i){let n=e.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(dv(o.href).then(s=>cv(s,t)).then(s=>fv(s).forEach(u=>{n.insertRule(u,n.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{Pt(o.cssRules||[]).forEach(i=>{a.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${o.href}`,i)}}),a))}function O2(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>tc(t.style.getPropertyValue("src")))}async function j2(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let a=Pt(e.ownerDocument.styleSheets),r=await F2(a,t);return O2(r)}function pv(e){return e.trim().replace(/["']/g,"")}function _2(e){let t=new Set;function a(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(i=>{t.add(pv(i))}),Array.from(r.children).forEach(i=>{i instanceof HTMLElement&&a(i)})}return a(e),t}async function gv(e,t){let a=await j2(e,t),r=_2(e);return(await Promise.all(a.filter(i=>r.has(pv(i.style.fontFamily))).map(i=>{let n=i.parentStyleSheet?i.parentStyleSheet.href:null;return kl(i.cssText,n,t)}))).join(`
`)}async function mv(e,t){let a=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await gv(e,t);if(a){let r=document.createElement("style"),o=document.createTextNode(a);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function N2(e,t={}){let{width:a,height:r}=Qd(e,t),o=await Ti(e,t,!0);return await mv(o,t),await ac(o,t),sv(o,t),await tv(o,a,r)}async function hv(e,t={}){let{width:a,height:r}=Qd(e,t),o=await N2(e,t),i=await io(o),n=document.createElement("canvas"),s=n.getContext("2d"),u=t.pixelRatio||Jh(),d=t.canvasWidth||a,p=t.canvasHeight||r;return n.width=d*u,n.height=p*u,t.skipAutoScale||ev(n),n.style.width=`${d}`,n.style.height=`${p}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,n.width,n.height)),s.drawImage(i,0,0,n.width,n.height),n}var wv={};var gc={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},mc={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},xe={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},uo={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Ot={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},Tt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},W2={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},Ri={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Pl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},jt={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},Iv={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},kv={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},ic={zero:"0deg",half:"180deg",full:"360deg"},$l={horizontal:"90deg",diagonal:"135deg"},Be={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},nr={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Oe={sm:`@media (max-width: ${nr.sm}px)`,smPlus:`@media (max-width: ${nr.smPlus}px)`,md:`@media (max-width: ${nr.md}px)`,mdWide:`@media (max-width: ${nr.mdWide}px)`,lg:`@media (max-width: ${nr.lg}px)`,xl:`@media (max-width: ${nr.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},et={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},V2={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},G2={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var rc={press:.95,drag:.985,hoverLift:1.04},X2={landscape:"4 / 3"},Y2={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},co={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function Pv(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:jt.xs,md:jt.md,lg:jt["2xl"],xl:jt["4xl"],pill:jt.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:nr,motion:Be,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var za=Pv("portalDark",gc,Iv),K2=Pv("portalLight",mc,kv);var kP=(0,Ei.createContext)(null);var ta=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,be=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,hc=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,TP=L`
  ${ta}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,fr=L`
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
`,$i=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,eL=L`
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

  ${$i}
`,Tv=L`
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

  ${$i}
`,tL=L`
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

  ${$i}
`,aL=L`
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

  ${$i}
`,rL=L`
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

  ${$i}
`,Rv=L`
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
`,oL=L`
  ${Rv}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,iL=L`
  ${Rv}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Ev=L`
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
    ${Tv}
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
`,$v=L`
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
`,nL=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,Av=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,lL=L`
  ${Av}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,sL=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Mv=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,uL=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,zv=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,dL={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function cL(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var fL={"--ig-radius-2xs":jt["2xs"],"--ig-radius-xxs":jt.xxs,"--ig-radius-xs":jt.xs,"--ig-radius-sm":za.radius.sm,"--ig-radius-md":za.radius.md,"--ig-radius-lg":za.radius.lg,"--ig-radius-xl":za.radius.xl,"--ig-radius-2xl":jt["2xl"],"--ig-radius-4xl":jt["4xl"],"--ig-radius-pill":za.radius.pill,"--ig-font-sans":za.typography.fontSans,"--ig-font-mono":za.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(xe.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(xe.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(xe.svgFillSoft),"--ig-opacity-svg-fill-medium":String(xe.svgFillMedium),"--ig-opacity-dim":String(xe.dim),"--ig-opacity-dim-soft":String(xe.dimSoft),"--ig-opacity-ghost":String(xe.ghost),"--ig-opacity-faded":String(xe.faded),"--ig-opacity-disabled":String(xe.disabled),"--ig-opacity-overlay":String(xe.overlay),"--ig-opacity-muted":String(xe.muted),"--ig-opacity-subtle":String(xe.subtle),"--ig-opacity-emphatic":String(xe.emphatic),"--ig-opacity-loud":String(xe.loud),"--ig-opacity-loud-plus":String(xe.loudPlus),"--ig-opacity-prominent":String(xe.prominent),"--ig-opacity-near":String(xe.near),"--ig-blur-2xs":uo.blur2xs,"--ig-blur-xs":uo.blurXs,"--ig-blur-sm":uo.blurSm,"--ig-blur-md":uo.blurMd,"--ig-blur-lg":uo.blurLg,"--ig-blur-xl":uo.blurXl,"--ig-icon-xs":Ot.xs,"--ig-icon-sub":Ot.sub,"--ig-icon-2xs":Ot["2xs"],"--ig-icon-sm":Ot.sm,"--ig-icon-sm-plus":Ot.smPlus,"--ig-icon-md":Ot.md,"--ig-icon-lg":Ot.lg,"--ig-icon-xl":Ot.xl,"--ig-icon-2xl":Ot["2xl"],"--ig-icon-3xl":Ot["3xl"],"--ig-svg-stroke-bold":String(W2.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":Pl["1px"],"--ig-border-1_5px":Pl["1_5px"],"--ig-border-2px":Pl["2px"],"--ig-border-3px":Pl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(rc.press),"--ig-scale-drag":String(rc.drag),"--ig-scale-hover-lift":String(rc.hoverLift),"--ig-aspect-landscape":X2.landscape,"--ig-control-height-xs":et.xs,"--ig-control-height-xs-plus":et.xsPlus,"--ig-control-height-sm":et.sm,"--ig-control-height-sm-plus":et.smPlus,"--ig-control-height-md":et.md,"--ig-control-height-mid-plus":et.midPlus,"--ig-control-height-mid-plus-tall":et.midPlusTall,"--ig-control-height-2xl-wide":et["2xlWide"],"--ig-control-height-lg":et.lg,"--ig-control-height-xl":et.xl,"--ig-control-height-2xl":et["2xl"],"--ig-control-height-3xl":et["3xl"],"--ig-control-height-3xl-plus":et["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":Be.fastest,"--ig-motion-swift":Be.swift,"--ig-motion-fast":Be.fast,"--ig-motion-fast-ease":Be.fastEase,"--ig-motion-normal":Be.normal,"--ig-motion-normal-ease":Be.normalEase,"--ig-motion-mobile-nav":Be.mobileNav,"--ig-motion-spinner":Be.spinner,"--ig-motion-spinner-fast":Be.spinnerFast,"--ig-motion-spinner-slow":Be.spinnerSlow,"--ig-motion-progress-bar":Be.progressBar,"--ig-motion-sync-spin":Be.syncSpin,"--ig-motion-shimmer":Be.shimmer,"--ig-motion-skeleton":Be.skeleton};function nc(e="dark"){return{...fL,...cL(e==="light"?K2:za,e==="light"?mc:gc,e==="light"?kv:Iv,e==="light")}}var zP=nc("dark");function oc(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function pL(){let e=nc("dark"),t=nc("light");return[oc(":root",dL),oc(":root, :root[data-theme='dark']",e),oc(":root[data-theme='light']",t)].join(`
`)+`
`}var BP=$h`
  ${pL()}

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
    background: ${gc.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${mc.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function dr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function Rl(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var gL=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${dr(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${dr(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${Rl(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${Rl(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function mL({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Dv.jsx)(gL,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var hL=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>dr(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function lc({gap:e,align:t,justify:a,as:r,...o}){return(0,Bv.jsx)(hL,{as:r,$gap:e,$align:t,$justify:a,...o})}var jP=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>dr(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var _P=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>dr(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${Rl(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var NP=l.div`
  width: 100%;
  max-width: ${e=>Rl(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>dr(e.$padding)??"var(--ig-space-11)"};
`;var vL={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},xL={default:void 0,mono:"var(--ig-font-mono)"},bL={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},vv={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function yL(e){return typeof e=="string"?bL[e]:e??"var(--ig-font-weight-regular)"}function wL(e){if(e)return e in vv?vv[e]:e}var LL=l.span`
  margin: 0;
  color: ${e=>vL[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&xL[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Ov({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,Fv.jsx)(LL,{as:e,$tone:t,$size:a,$weight:yL(r),$align:o,$uppercase:i,$letterSpacing:wL(n),$fontFamily:s,$tabularNums:u,...d})}var qP=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function CL(e){return(0,jv.jsx)(Ov,{size:"var(--ig-font-size-sm)",...e})}var VP=l.div`
  ${e=>e.$elevation==="raised"?be:e.$elevation==="card"?hc:ta}
  border-radius: ${e=>dr(e.$radius)??"var(--ig-radius-2xl)"};
`;var XP=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,YP=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,KP=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??Tt.lg}px`};
  height: ${e=>`${e.$size??Tt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var EL={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function Nv(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Uv=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${EL[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?iL:e.$variant==="secondary"?rL:aL:e.$variant==="ghost"?oL:e.$variant==="secondary"?Tv:e.$variant==="accent"?tL:eL}
`,po=Hv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},v){let h="Button",w=d??(u&&u!==h?u:void 0);return(0,qv.jsxs)(Uv,{ref:v,$variant:Nv(t,a),$size:r,$tone:o,...p,"data-ig-component":h,"data-ig-layer":"components","data-ig-slot":w,children:[i,s,n]})}),ge=Wv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",v=s??(n&&n!==p?n:void 0);return(0,Vv.jsx)(Uv,{ref:d,type:"button",$variant:Nv(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":v,children:i})}),JP=l(ge).attrs({variant:"secondary",size:"sm"})`
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
`,$L={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},AL={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},ML=l.button`
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
  font-size: ${e=>$L[e.$size]};
  color: ${e=>AL[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,_t=(0,Gv.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Xv.jsxs)(ML,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),aT=l(ge).attrs({variant:"secondary",size:"sm"})`
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
`,rT=l.span`
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
`;var zL={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},Kv=l.input`
  ${fr}
  ${e=>zL[e.$size]}
`,Da=(0,vc.forwardRef)(({size:e="md",...t},a)=>(0,xc.jsx)(Kv,{ref:a,$size:e,...t}));Da.displayName="TextField";var iT=l.textarea`
  ${fr}
`,DL=(0,vc.forwardRef)(({size:e="md",...t},a)=>(0,xc.jsx)(Kv,{ref:a,$size:e,type:"password",...t}));DL.displayName="PasswordField";var BL={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},FL=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>BL[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,lT=(0,Qv.forwardRef)(function({variant:t="default",minHeight:a=V2.midPlusTall,...r},o){return(0,Zv.jsx)(FL,{ref:o,$variant:t,$minHeight:a,...r})}),OL=l.input.attrs({type:"color"})`
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
`,uT=(0,Jv.forwardRef)(function(t,a){return(0,ex.jsx)(OL,{ref:a,...t})}),jL={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},_L=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>jL[e.$orientation]}
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
`,cT=(0,tx.forwardRef)(function({orientation:t="vertical",...a},r){return(0,ax.jsx)(_L,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),NL={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},HL=l.div`
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
  ${e=>NL[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${$l.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,pT=(0,rx.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,ox.jsx)(HL,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),hT=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var vT=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,xT=l.input`
  ${fr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,bT=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,yT=l.button`
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
`;var LT=l.div`
  position: relative;
`,ST=l.button`
  ${fr}
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
`,CT=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,IT=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${ic.half})`:`rotate(${ic.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,kT=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,PT=l.button`
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
`,TT=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,RT=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,ET=l.select`
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
`;var AT=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,MT=l.input`
  ${fr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,zT=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,DT=l.button`
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
`;var FT=l.div`
  position: relative;
  width: 100%;
`,OT=l.textarea`
  ${fr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,jT=l.div`
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
`,_T=l.button`
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
`,NT=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,HT=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var bc=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,QL=l.span`
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
`,yc=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,ZL=l.span`
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
`,JL=l.span`
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
`,qT=lr.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",v=s??(i&&i!==p?i:void 0),h=lr.default.useRef(null);lr.default.useImperativeHandle(d,()=>h.current),lr.default.useEffect(()=>{h.current&&(h.current.indeterminate=!!o)},[o]);let w=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,y=n??u["aria-label"]??b;return(0,Fe.jsxs)(bc,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":v,"data-ig-kind":"checkbox","data-ig-label":y,children:[(0,Fe.jsx)(yc,{ref:h,type:"checkbox",checked:a,disabled:r,...u}),(0,Fe.jsx)(ZL,{$checked:!!w,$disabled:r,children:o?(0,Fe.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Fe.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Fe.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Fe.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),WT=lr.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),v=typeof t=="string"?t:void 0;return(0,Fe.jsxs)(bc,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??v,children:[(0,Fe.jsx)(yc,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Fe.jsx)(JL,{$checked:!!a,$disabled:r}),t]})}),VT=lr.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Fe.jsxs)(bc,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Fe.jsx)(yc,{ref:s,type:"checkbox",checked:t,...n}),(0,Fe.jsx)(QL,{$checked:t}),a]})});var XT=l.input`
  display: none;
`,rS={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},YT={...rS,cursor:"pointer"};var QT=l.button`
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
`;var JT=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,e4=l.button`
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
`;var a4=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Oe.sm} {
    grid-template-columns: 1fr;
  }
`,r4=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,o4=l.div`
  min-width: 0;
`,i4=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var n4=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,l4=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var u4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,d4=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var iS={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},nS=l.div`
  ${be}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>iS[e.$variant]}
`,p4=(0,hx.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,vx.jsx)(nS,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var g4={minWidth:Ri.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},m4=l.button`
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
`;var v4=l.button`
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
`;var xv={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},bx=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>xv[e.$size??"sm"]};
  height: ${e=>xv[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,y4=l.label`
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
`;var L4=l.button`
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
`;var uS={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},dS={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},cS=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":dS[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>uS[e.$size]}
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
`,I4=(0,wx.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,Lx.jsxs)(cS,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var k4=l.button`
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
`,P4=l.div`
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
`;var fS={bottom:L`
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
  `},R4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>fS[e.$placement]}
`,E4=l.div`
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
`,pS={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},$4=l.button`
  flex-shrink: 0;
  ${e=>pS[e.$size]}
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
`,A4=l.span`
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
`;var z4=l.button`
  ${fr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,D4=l.span`
  color: var(--ig-color-text-soft);
`,B4=l.div`
  ${Ev}
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

  ${$v}
`;var mS=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,j4=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,hS=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Tx=(0,kx.forwardRef)(({anchor:e,style:t,...a},r)=>(0,Px.jsx)(hS,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Tx.displayName="MenuPopover";var _4=l.div`
  ${be}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,N4=l(mS)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,U4=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,q4=l.span`
  ${({$tone:e,tone:t})=>{let a=Y2[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,W4=l(Tx)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var V4=l.div`
  ${Ev}
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

  ${$v}
`;var X4=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,Y4=l.button`
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
`;var xS={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},Ai=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>xS[e.$tone??"neutral"]};
`,Z4=l(Ai)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,eR=l.p`
  ${Mv}
  ${zv}
  margin: 0;
`,aR=l.div`
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
`;var yS=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,wS=l.span`
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
`;function Ex({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,zl.jsxs)(yS,{className:o,style:i,children:[e,!a&&t!=null?(0,zl.jsx)(wS,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var sc=20,$x=120,SS=$x*Math.PI/180,CS=sc/Math.sin(SS),IS=Bt`
  from { background-position: 0 0; }
  to   { background-position: ${CS.toFixed(3)}px 0; }
`,kS=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${$x}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${sc/2}px,
      var(--ig-color-white-06) ${sc}px
    );
    animation: ${IS} var(--ig-motion-shimmer) linear infinite;
  }
`,PS=Bt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,TS={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},iR=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,nR=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>TS[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${PS} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&kS}
`;var sR={display:"flex",width:"100%",height:Tt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},uR=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var RS=L`
  background:
    linear-gradient(
      ${$l.horizontal},
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
`,cR=l.div.attrs({"aria-hidden":!0})`
  ${RS}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,ES=l.div`
  ${({$tone:e="info"})=>L`
    background: ${co[e].background};
    border-color: ${co[e].border};
    color: ${co[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,pR=l(ES)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,AS=Bt`
  to { transform: rotate(${ic.full}); }
`,mR={sm:Tt.sm,md:Tt.lg,lg:Tt["3xl"]};var hR=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${AS} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var MS=Bt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,zS=Bt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,xR=l.div`
  ${({$tone:e})=>L`
    background: ${co[e].background};
    border-color: ${co[e].border};
    color: ${co[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?zS:MS} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,bR=l.span`
  flex: 1;
`,yR=l.button`
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
`,wR=l.button`
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
`,LR=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,SR=(0,pr.createContext)(()=>{});var IR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,kR=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,DS=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,PR=l(DS)``,TR=l.div`
  flex: 1;
`,RR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var $R=l.div`
  ${zv}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,AR=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,MR=l.div`
  ${Mv}
`,zR=l.div`
  ${uL}
  max-width: var(--ig-popup-md);
`,DR=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var FR=l.div`
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
`,OR=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,jR=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,_R=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var HR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,UR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,qR=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,WR=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var GR=l.span`
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
`;var OS={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},jS=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>OS[e.$variant]}
`,YR=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,_S=Bt`from { opacity: 0 } to { opacity: 1 }`,KR=l(jS)`
  animation: ${_S} var(--ig-motion-fast);
`;var ZR=l.div`
  ${be}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var Tl=l.span`
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
`,e8=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,t8=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${Tl}:hover &,
          ${Tl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${Tl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${Tl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var HS={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},r8=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>HS[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,Nx=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,i8=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:Nx}
`,n8=l.div`
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
`,l8=l.button`
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
`;var s8=l.div`
  ${Nx}
`,Hx={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},d8=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Hx[e.$radius].root};
`,c8=l.div`
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
`,f8=l.button`
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
  border-radius: ${e=>Hx[e.$radius].item};
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
`,p8=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,g8=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,m8=l.span`
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
`;var v8=l.header`
  display: none;
  ${Oe.md} {
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
`;var x8=l.div`
  display: none;
  ${Oe.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,b8=l.aside`
  display: none;
  ${Oe.md} {
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
`;var y8=l.button`
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
`;var w8=l.button`
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
`;var L8={marginLeft:"auto",minWidth:Tt.xl,height:Tt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var C8=l.div`
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
`,I8=l.button`
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
`;var GS=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Yx=l.div`
  ${be}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,P8=l(Yx)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,XS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,YS=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,KS=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,T8=l.aside`
  ${be}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,QS=l(ge)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function ZS({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,uc.jsx)(QS,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,uc.jsx)(De,{size:Tt.md})})}var JS='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',eC=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,tC={margin:0,lineHeight:"var(--ig-line-height-loose)"};function aC({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,cr.useId)(),u=(0,cr.useRef)(null);return(0,cr.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,cr.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let v=u.current;if(!v)return;let h=Array.from(v.querySelectorAll(JS)).filter(y=>y.offsetParent!==null);if(h.length===0){p.preventDefault(),v.focus();return}let w=h[0],b=h[h.length-1];p.shiftKey&&document.activeElement===w?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),w.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,Ee.jsx)(GS,{onClick:()=>o?.(),children:(0,Ee.jsxs)(Yx,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,Ee.jsxs)(XS,{children:[(0,Ee.jsx)(YS,{id:s,children:e}),o?(0,Ee.jsx)(ZS,{onClick:()=>o()}):null]}),(0,Ee.jsxs)(eC,{children:[t?(0,Ee.jsx)(CL,{as:"p",tone:"muted",style:tC,children:t}):null,a,r?(0,Ee.jsx)(KS,{children:r}):null]})]})})}function rC({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,Ee.jsx)(aC,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,Ee.jsxs)(Ee.Fragment,{children:[(0,Ee.jsx)(po,{type:"button",variant:"secondary",onClick:i,children:r}),(0,Ee.jsx)(po,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var M8=l.div`
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
`,z8=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,D8=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,B8=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,F8=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var j8=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,_8=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${be}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,N8=l.div`
  position: relative;
  display: block;
  width: 100%;
`,H8=l.button`
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
`,U8=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${be}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,q8=l.button`
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
`;var W8={minWidth:Ri.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var G8=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var Y8=l.div`
  ${be}
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
`,K8=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var Q8={display:"inline-flex",alignItems:"center",justifyContent:"center",width:Tt.md,height:Tt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var sC=l.div`
  ${be}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,uC=(0,e0.forwardRef)(({anchor:e,width:t=Ri.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,t0.jsx)(sC,{ref:o,$width:t,style:{...i,...a},...r})});uC.displayName="FilterPopover";var eE=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,tE=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,aE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var rE={minWidth:Ri.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var o0=(0,tt.createContext)(null);function Bl(){let e=(0,tt.useContext)(o0);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function i0({children:e}){let[t,a]=(0,tt.useState)(null),r=(0,tt.useRef)(null);r.current=t;let o=(0,tt.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,tt.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,tt.useMemo)(()=>o,[o]);return(0,Dl.jsxs)(o0.Provider,{value:n,children:[e,t?(0,Dl.jsx)(rC,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var iE=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,nE=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,pC=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,gC=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,lE=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,sE=l(pC)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,uE=l(gC)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,dE=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,cE=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,mC=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,hC=L`
  transition: transform var(--ig-motion-normal);
`,fE=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&mC}
  ${e=>e.$isAnimating&&hC}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,pE=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var mE=l.section`
  ${ta}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,hE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,vC=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,xE=l0.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,s0.jsx)(vC,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),xC=l.div`
  ${ta}
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
`,yE=u0.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,d0.jsx)(xC,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),LE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var CE=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var bC={panel:ta,card:hc,raised:be},yC=l.div`
  ${e=>bC[e.$elevation]}
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
`;function g0({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,p0.jsx)(yC,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var wC=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,LC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,SC=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,CC=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,IC=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,kC=l.textarea`
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
`,PC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,TC=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,RC=l.button`
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
`;function m0({author:e,timestamp:t,body:a,actions:r}){return(0,ct.jsxs)(wC,{children:[(0,ct.jsxs)(LC,{children:[(0,ct.jsx)(SC,{children:e}),t&&(0,ct.jsx)("span",{children:t}),r]}),(0,ct.jsx)(CC,{children:a})]})}function ho({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n,accessory:s}){return(0,ct.jsxs)(IC,{children:[(0,ct.jsx)(kC,{value:e,onChange:u=>t(u.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:u=>{u.key==="Enter"&&(u.ctrlKey||u.metaKey)&&a&&(u.preventDefault(),a())}}),a&&(0,ct.jsxs)(PC,{children:[(0,ct.jsx)(TC,{children:s}),(0,ct.jsx)(RC,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})]})]})}var EC=l.button`
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
`,$C=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,AC=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,MC=(0,h0.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,fo.jsxs)(EC,{ref:n,type:o??"button",$active:a,...i,children:[(0,fo.jsx)(bx,{$color:e,$size:"sm"}),(0,fo.jsx)($C,{children:t}),r!=null&&(0,fo.jsx)(AC,{children:r})]}));MC.displayName="TagListItem";var RE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var $E=l.div`
  position: relative;
  width: 100%;
`,AE=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,ME=l.div`
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
`,zE=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,DE=l.button`
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
`;var FE=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,OE=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,jE=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,_E=(0,gr.createContext)(null);var HE=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,UE=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,qE=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var BC=l.button`
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
`,FC=(0,b0.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,jl.jsxs)(BC,{ref:o,type:a??"button",...r,children:[e&&(0,jl.jsx)(bx,{$color:e,$size:"xs"}),t]}));FC.displayName="ActionChip";var GE=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,XE=l.kbd`
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
`;var KE=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,QE=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,ZE=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var e$=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var a$=l.li`
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
`;var o$=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var _C=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,NC=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,HC=l.button`
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

  ${e=>e.$variant==="flat"?_C:NC}

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
`,UC=(0,C0.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,I0.jsx)(HC,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});UC.displayName="SelectableListItem";var qC={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},WC={flexShrink:0},VC={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},GC=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function P0({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,sr.jsxs)(lc,{as:"aside",gap:0,className:o,style:qC,children:[(0,sr.jsx)(mL,{style:WC,children:e}),t?(0,sr.jsxs)(lc,{gap:3,style:VC,children:[(0,sr.jsx)(Ov,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,sr.jsx)(GC,{children:i},n):null)]})}var s$=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var d$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${$l.diagonal},
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
`;var p$=l.button`
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
`,g$=l.div`
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
`;var h$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${$l.diagonal},
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
`;var x$=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var y$=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var QC=l.button`
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
`,ZC=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,JC=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,eI=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,tI=(0,M0.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,ur.jsxs)(QC,{ref:i,type:r??"button",...o,children:[(0,ur.jsxs)(ZC,{children:[(0,ur.jsx)("span",{children:e}),t!=null&&(0,ur.jsx)(JC,{children:t})]}),(0,ur.jsx)(eI,{children:a})]}));tI.displayName="OptionRow";var S$=l.span`
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
`,I$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var P$=l.table`
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
`,T$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var E$=l.table`
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
`;var A$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,M$=l.div`
  ${ta}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,z$=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,D$=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var B$={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},O$=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var _$=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var H$=l.div`
  ${nL}
  height: 100%;
  min-height: 0;
`,U$=l.header`
  ${lL}
  flex-shrink: 0;

  ${Oe.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,q$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,W$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,V$=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Oe.md} {
    font-size: var(--ig-font-size-xl);
  }
`,G$=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,X$=l.div`
  ${sL}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Oe.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,nI=l.section`
  ${ta}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Y$=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,K$=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,Q$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,Z$=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,lI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,J$=l(lI)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Oe.md} {
    grid-template-columns: 1fr;
  }
`,eA=l(nI)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,tA=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,aA=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,rA=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,iA=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Oe.lg} {
    grid-template-columns: 1fr;
  }
`;var nA=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,lA=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Oe.lg} {
    grid-template-columns: 1fr;
  }
`,sA=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Oe.lg} {
    grid-template-columns: 1fr;
  }
`,uA=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Oe.lg} {
    grid-template-columns: 1fr;
  }
`,cA=l.nav`
  ${ta}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,fA=l.aside`
  ${ta}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,pA=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,gA=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,mA=l.div`
  ${Av}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,hA=l.aside`
  ${be}
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
`,xA=l.aside`
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
  ${Oe.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,N0=l.div`
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
`,bA=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${N0}:hover & { opacity: 0; }
  `}
`,yA=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${N0}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,wA=l.button`
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
`,LA=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,SA=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,H0=`
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
`,CA=l.a`
  ${H0}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,IA=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,kA=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,PA=l.button`
  ${H0}
`,TA=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,RA=l.span`
  display: contents;
`;var $A=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Oe.md} {
    justify-content: flex-start;
  }
`,AA=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,MA=l.div`
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
  ${Oe.md} {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
    border: 0;
  }
`,zA=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,DA=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,BA=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,FA=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,OA=Ri.md;var dI=11;var cI=3,jA=dI+cI*2;var NA=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,HA=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,UA=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,qA=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,WA=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var YA=l.div`
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
`,KA=l.span`
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
`;var QA=l.div`
  ${be}
  position: absolute;
  top: calc(100% + var(--ig-space-3));
  left: 0;
  z-index: var(--ig-z-popover);
  width: 100%;
  box-sizing: border-box;
  padding: var(--ig-space-5);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`,ZA=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,JA=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,eM=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,tM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,aM=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,rM=l(Da).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,oM=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,iM=l(Da).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,nM=l.input`
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
`,lM=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var sM=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,uM=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,dM=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,cM=l.button`
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
`,fM=l(Da).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,pM=l(po).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var mM=l.section`
  ${be}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,hM=l.h3`
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
`,vM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var bM=l.label`
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
`,yM=l.div`
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
`;var LM=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var CM=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var kM=l.div`
  ${hc}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,PM=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function rb({children:e,className:t}){return(0,ab.jsx)(lc,{gap:3,className:t,children:e})}var RM=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var $M=new URL("./assets/favicon.ico","http://localhost/").href,AM=new URL("./assets/favicon.png","http://localhost/").href,MM=new URL("./assets/brand-mark.png","http://localhost/").href,zM=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var DM=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function bI(){try{if(typeof wv<"u"&&wv.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var bv=(...e)=>{},yv=bI(),BM={debug:yv?console.debug.bind(console):bv,log:yv?console.log.bind(console):bv,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var OM=G2.canvasExportBg;var aa=c(C(),1);function sb(e){let[,t]=(0,aa.useReducer)(a=>a+1,0);(0,aa.useEffect)(()=>e.subscribe(t),[e])}function vo(e){let[t,a]=(0,aa.useState)(null);return(0,aa.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function ub(){let[,e]=(0,aa.useReducer)(t=>t+1,0);(0,aa.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Ba=c(C(),1);var cb=c(m(),1),yI=500,wI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,Nl=e=>e instanceof Element&&e.id!==eo&&e!==document.documentElement&&e!==document.body;function db({active:e,onPick:t}){let[a,r]=(0,Ba.useState)(null),o=vo(a),i=(0,Ba.useRef)({x:-1,y:-1}),n=(0,Ba.useRef)(e);return n.current=e,(0,Ba.useEffect)(()=>{e||r(null)},[e]),(0,Ba.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!Nl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(Nl(b)?b:null)})},p=b=>{!n.current||!Nl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},v,h=()=>clearTimeout(v),w=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:y,clientY:A}=b.touches[0];v=setTimeout(()=>{let g=document.elementFromPoint(y,A);Nl(g)&&t(g,y,A)},yI)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",w,{passive:!0}),document.addEventListener("touchmove",h,{passive:!0}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h),()=>{cancelAnimationFrame(u),h(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",w),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",h),document.removeEventListener("touchcancel",h)}},[t]),o?(0,cb.jsx)(wI,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var fb=c(m(),1),LI=l.div`
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
`;function Xc({el:e}){let t=vo(e);return t?(0,fb.jsx)(LI,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var pb=c(C(),1);var T={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteCommentAria:"Delete comment",editCommentAria:"Edit comment",save:"Save",deleteThreadTitle:"Delete this comment thread?",deleteCommentTitle:"Delete this comment?",deleteLastCommentHint:"This is the last comment \u2014 the thread will be deleted.",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareThumbHint:"Click to compare before / after",before:"Before",after:"After",captureFailed:"Could not capture the current view",zoomHint:"Click to enlarge",zoomBack:"Back to side-by-side",attachAria:"Attach images",attachHint:"Attach images (logo, photo, reference\u2026)",removeAttachment:"Remove attachment",versionChipTitle:"Site version when this was written",defaultAuthor:"Guest"};var mr=c(m(),1),Hl="#f59e0b",SI=l.button`
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
  background: ${Hl};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,CI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${Hl};
  background: color-mix(in srgb, ${Hl} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${Hl};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function gb({store:e,onPinClick:t}){ub();let[a,r]=(0,pb.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Aa(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),v=Math.max(16,d.top+4),h=`${Math.round(p/8)}:${Math.round(v/8)}`,w=o.get(h)??0;o.set(h,w+1);let b=p-w*28,y=b>=16?b:p+w*28;i.push((0,mr.jsx)(SI,{className:"fbw-pin",type:"button",title:Ii(n),style:{left:y,top:v},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${T.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,mr.jsxs)(mr.Fragment,{children:[i,a&&(0,mr.jsx)(CI,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var Xl=c(C(),1);var II=800,kI=.8;function PI(e){let t=e.closest("section, article, header, footer, nav, aside");return!t||t===document.body||t===document.documentElement?e:t}async function Mi(e){try{if(!document.createElement("canvas").getContext("2d"))return;let t=await hv(PI(e),{pixelRatio:1});if(t.width===0||t.height===0)return;let a=Math.min(1,II/t.width),r=document.createElement("canvas");r.width=Math.round(t.width*a),r.height=Math.round(t.height*a);let o=r.getContext("2d");return o?(o.fillStyle="#ffffff",o.fillRect(0,0,r.width,r.height),o.drawImage(t,0,0,r.width,r.height),r.toDataURL("image/jpeg",kI)):void 0}catch{return}}var xo=c(C(),1);var mb=c(m(),1),TI=340,RI=l.div`
  position: fixed;
  width: ${TI}px;
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
`;function Ul({targetEl:e,point:t,children:a}){let r=(0,xo.useRef)(null),o=vo(e??null),[i,n]=(0,xo.useState)(null);return(0,xo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),v=o.bottom+8,h=v+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):v;d={left:p,top:h}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,mb.jsx)(RI,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var ql=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Wl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var vb=c(C(),1);var EI=e=>new Promise((t,a)=>{let r=new FileReader;r.onload=()=>t(String(r.result)),r.onerror=()=>a(r.error),r.readAsDataURL(e)}),$I=e=>new Promise((t,a)=>{let r=new Image;r.onload=()=>t(r),r.onerror=()=>a(new Error("\uC774\uBBF8\uC9C0 \uB85C\uB4DC \uC2E4\uD328")),r.src=e});async function hb(e){if(!e.type.startsWith("image/"))return;let t=await EI(e);if(!document.createElement("canvas").getContext("2d"))return{name:e.name,dataUrl:t};try{let a=await $I(t),r=Math.max(a.width,a.height);if(r<=1200&&t.length<=4e5)return{name:e.name,dataUrl:t};let o=Math.min(1,1200/r),i=document.createElement("canvas");i.width=Math.round(a.width*o),i.height=Math.round(a.height*o);let n=i.getContext("2d");return n.fillStyle="#ffffff",n.fillRect(0,0,i.width,i.height),n.drawImage(a,0,0,i.width,i.height),{name:e.name,dataUrl:i.toDataURL("image/jpeg",.85)}}catch{return{name:e.name,dataUrl:t}}}var ft=c(m(),1),AI=l.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--ig-space-2);
`,MI=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
  max-width: 180px;
  padding: 1px var(--ig-space-3);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);

  em {
    font-style: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;function Vl({pending:e,onChange:t}){let a=(0,vb.useRef)(null),r=async o=>{if(!o)return;let i=(await Promise.all([...o].map(hb))).filter(n=>!!n);i.length>0&&t([...e,...i]),a.current&&(a.current.value="")};return(0,ft.jsxs)(ft.Fragment,{children:[(0,ft.jsx)("input",{ref:a,type:"file",accept:"image/*",multiple:!0,hidden:!0,"aria-label":T.attachAria,onChange:o=>r(o.target.files)}),(0,ft.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.attachAria,title:T.attachHint,onClick:()=>a.current?.click(),children:(0,ft.jsx)(ao,{size:14})})]})}function Gl({pending:e,onChange:t}){return e.length===0?null:(0,ft.jsx)(AI,{children:e.map((a,r)=>(0,ft.jsxs)(MI,{children:[(0,ft.jsx)("em",{children:a.name}),(0,ft.jsx)(_t,{tone:"muted",size:"sm","aria-label":T.removeAttachment,onClick:()=>t(e.filter((o,i)=>i!==r)),children:"\u2715"})]},`${a.name}-${r}`))})}var pt=c(m(),1),zI=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function xb({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,Xl.useState)(""),[u,d]=(0,Xl.useState)(e.author),[p,v]=(0,Xl.useState)([]),h=async()=>{let w=n.trim();if(!w)return;let b=u.trim()||T.defaultAuthor;e.author=b;let y=new Date().toISOString(),A=await Mi(t),g={id:ir(),createdAt:y,anchor:a,resolved:!1,comments:[{id:ir(),author:b,body:w,createdAt:y,version:$a.version,shot:A,attachments:p.length?p:void 0}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(g),i(g)};return(0,pt.jsxs)(Ul,{targetEl:t,point:r,children:[(0,pt.jsxs)(ql,{className:"fbw-composer",children:[(0,pt.jsx)(Wl,{children:T.composerTitle}),(0,pt.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.close,onClick:o,children:(0,pt.jsx)(De,{size:16})})]}),(0,pt.jsxs)(zI,{children:[T.composerTarget,": ",a.textSnippet||a.selector]}),(0,pt.jsx)(Da,{size:"sm",placeholder:T.namePlaceholder,"aria-label":T.nameAria,value:u,onChange:w=>d(w.target.value)}),(0,pt.jsx)(Gl,{pending:p,onChange:v}),(0,pt.jsx)(ho,{value:n,onChange:s,onSubmit:h,placeholder:T.composerPlaceholder,submitLabel:T.post,accessory:(0,pt.jsx)(Vl,{pending:p,onChange:v})})]})}var zi=c(C(),1);var Yl=c(C(),1);var le=c(m(),1),DI=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 55%, transparent);
`,BI=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  max-width: min(1200px, 94vw);
  max-height: 90vh;
  overflow: auto;
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`,FI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`,OI=l.div`
  display: flex;
  align-items: flex-start;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,Yc=l.figcaption`
  display: inline-block;
  margin-bottom: var(--ig-space-2);
  padding: 2px var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  background: ${e=>e.$after?"var(--ig-color-accent-strong)":"var(--ig-color-surface-muted)"};
  color: ${e=>e.$after?"var(--ig-color-on-accent)":"var(--ig-color-text-muted)"};
`,bb=l.figure`
  flex: 1;
  min-width: 0;
  margin: 0;

  img {
    display: block;
    width: 100%;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-sm);
    cursor: zoom-in;
    transition: border-color 0.12s;
  }
  img:hover {
    border-color: var(--ig-color-accent);
  }
`,jI=l.img`
  display: block;
  max-width: 100%;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  cursor: zoom-out;
`,_I=l.div`
  padding: var(--ig-space-7);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  border: var(--ig-border-1px) dashed var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
`;function yb({before:e,after:t,onClose:a}){let[r,o]=(0,Yl.useState)(null);(0,Yl.useEffect)(()=>{let n=s=>{s.key==="Escape"&&o(u=>u?null:(a(),u))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[a]);let i=r==="before"?e:t;return(0,le.jsx)(DI,{className:"fbw-area-compare",onClick:a,children:(0,le.jsxs)(BI,{onClick:n=>n.stopPropagation(),children:[(0,le.jsxs)(FI,{children:[(0,le.jsxs)("span",{children:[T.before," / ",T.after]}),r&&(0,le.jsx)(_t,{tone:"muted",onClick:()=>o(null),children:T.zoomBack}),(0,le.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.close,onClick:a,children:(0,le.jsx)(De,{size:16})})]}),r&&i?(0,le.jsxs)("figure",{style:{margin:0},children:[(0,le.jsx)(Yc,{$after:r==="after",children:r==="after"?T.after:T.before}),(0,le.jsx)(jI,{src:i,alt:r,onClick:()=>o(null)})]}):(0,le.jsxs)(OI,{children:[(0,le.jsxs)(bb,{children:[(0,le.jsx)(Yc,{children:T.before}),(0,le.jsx)("img",{className:"fbw-shot-before",src:e,alt:T.before,title:T.zoomHint,onClick:()=>o("before")})]}),(0,le.jsxs)(bb,{children:[(0,le.jsx)(Yc,{$after:!0,children:T.after}),t?(0,le.jsx)("img",{className:"fbw-shot-after",src:t,alt:T.after,title:T.zoomHint,onClick:()=>o("after")}):(0,le.jsx)(_I,{children:T.captureFailed})]})]})]})})}var Kc=c(C(),1);var Lb=c(m(),1),NI=l.span`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  border: var(--ig-border-1px) solid
    ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-border-subtle)"};
  color: ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`;function wb({version:e,changed:t}){return(0,Lb.jsx)(NI,{className:"fbw-verchip",title:T.versionChipTitle,$changed:t,children:e})}var Kl=c(C(),1);var gt=c(m(),1),HI=l.span`
  display: flex;
  flex-wrap: wrap;
  gap: var(--ig-space-2);
  margin-top: var(--ig-space-2);
`,UI=l.button`
  padding: 0;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  overflow: hidden;
  cursor: zoom-in;
  background: none;

  img {
    display: block;
    height: 72px;
    max-width: 140px;
    object-fit: cover;
  }
  &:hover {
    border-color: var(--ig-color-accent);
  }
`,qI=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 65%, transparent);
  cursor: zoom-out;

  img {
    max-width: 92vw;
    max-height: 88vh;
    border-radius: var(--ig-radius-sm);
  }

  figcaption {
    position: fixed;
    bottom: var(--ig-space-5);
    left: 50%;
    transform: translateX(-50%);
    padding: 2px var(--ig-space-4);
    border-radius: var(--ig-radius-pill);
    background: color-mix(in srgb, #000 70%, transparent);
    color: #fff;
    font-size: var(--ig-font-size-2xs);
  }
`;function Sb({attachments:e}){let[t,a]=(0,Kl.useState)(null);return(0,Kl.useEffect)(()=>{if(!t)return;let r=o=>o.key==="Escape"&&a(null);return document.addEventListener("keydown",r),()=>document.removeEventListener("keydown",r)},[t]),(0,gt.jsxs)(gt.Fragment,{children:[(0,gt.jsx)(HI,{className:"fbw-attachments",children:e.map((r,o)=>(0,gt.jsx)(UI,{type:"button",title:r.name,onClick:()=>a(r),children:(0,gt.jsx)("img",{src:r.dataUrl,alt:r.name})},`${r.name}-${o}`))}),t&&(0,gt.jsx)(qI,{onClick:()=>a(null),children:(0,gt.jsxs)("figure",{style:{margin:0},children:[(0,gt.jsx)("img",{src:t.dataUrl,alt:t.name}),(0,gt.jsx)("figcaption",{children:t.name})]})})]})}var se=c(m(),1),WI=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`,VI=l.button`
  position: relative;
  display: block;
  width: 100%;
  margin-top: var(--ig-space-2);
  padding: 0;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  overflow: hidden;
  cursor: pointer;
  background: none;

  img {
    display: block;
    width: 100%;
    max-height: 140px;
    object-fit: cover;
    object-position: top;
  }
  &:hover {
    border-color: var(--ig-color-accent);
  }
`,GI=l.span`
  position: absolute;
  right: var(--ig-space-2);
  bottom: var(--ig-space-2);
  padding: 1px var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-3xs, 10px);
  font-weight: var(--ig-font-weight-bold);
`,XI=l.div`
  display: flex;
  justify-content: flex-start;
`,YI=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function Cb({store:e,thread:t,comment:a,prevVersion:r,onCompare:o}){let i=Bl(),[n,s]=(0,Kc.useState)(!1),[u,d]=(0,Kc.useState)(a.body),p=()=>{let h=u.trim();h&&(e.updateComment(t.id,a.id,h),s(!1))},v=async()=>{let h=t.comments.length===1;await i({title:T.deleteCommentTitle,description:h?T.deleteLastCommentHint:a.body,confirmLabel:T.delete,cancelLabel:T.cancel,danger:!0})&&e.removeComment(t.id,a.id)};return n?(0,se.jsxs)("div",{children:[(0,se.jsx)(ho,{value:u,onChange:d,onSubmit:p,submitLabel:T.save}),(0,se.jsx)(XI,{children:(0,se.jsx)(_t,{tone:"muted",onClick:()=>{s(!1),d(a.body)},children:T.cancel})})]}):(0,se.jsx)(m0,{author:a.author,timestamp:YI(a.createdAt),body:(0,se.jsxs)(se.Fragment,{children:[a.body,a.attachments&&a.attachments.length>0&&(0,se.jsx)(Sb,{attachments:a.attachments}),a.shot&&(0,se.jsxs)(VI,{type:"button",className:"fbw-shot-thumb",title:T.compareThumbHint,onClick:()=>o(a.shot),children:[(0,se.jsx)("img",{src:a.shot,alt:T.before}),(0,se.jsx)(GI,{children:T.compare})]})]}),actions:(0,se.jsxs)(WI,{children:[a.version&&(0,se.jsx)(wb,{version:a.version,changed:r!==void 0&&a.version!==r}),(0,se.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.editCommentAria,onClick:()=>s(!0),children:(0,se.jsx)(ro,{size:14})}),(0,se.jsx)(ge,{variant:"ghost",size:"sm",tone:"danger","aria-label":T.deleteCommentAria,onClick:v,children:(0,se.jsx)(Ma,{size:14})})]})})}var ye=c(m(),1);function Ib({store:e,thread:t,number:a,onClose:r}){let[o,i]=(0,zi.useState)(""),[n,s]=(0,zi.useState)(e.author),[u,d]=(0,zi.useState)([]),[p,v]=(0,zi.useState)(null),h=t.anchor.page===location.pathname?Aa(t.anchor):null,w=async y=>{let A=h?await Mi(h):void 0;v({before:y,after:A})},b=async()=>{let y=o.trim();if(!y)return;let A=n.trim()||T.defaultAuthor;e.author=A;let g=h?await Mi(h):void 0;e.addComment(t.id,A,y,$a.version,g,u),i(""),d([])};return(0,ye.jsxs)(Ul,{targetEl:h,children:[(0,ye.jsxs)(ql,{className:"fbw-thread",children:[(0,ye.jsxs)(Wl,{children:[T.thread," ",a]}),t.resolved&&(0,ye.jsx)(Ai,{$tone:"success",children:T.archivedBadge}),(0,ye.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.close,onClick:r,children:(0,ye.jsx)(De,{size:16})})]}),(0,ye.jsx)(rb,{children:t.comments.map((y,A)=>(0,ye.jsx)(Cb,{store:e,thread:t,comment:y,prevVersion:A>0?t.comments[A-1].version:void 0,onCompare:w},y.id))}),!e.author&&(0,ye.jsx)(Da,{size:"sm",placeholder:T.namePlaceholder,"aria-label":T.nameAria,value:n,onChange:y=>s(y.target.value)}),(0,ye.jsx)(Gl,{pending:u,onChange:d}),(0,ye.jsx)(ho,{value:o,onChange:i,onSubmit:b,placeholder:T.replyPlaceholder,submitLabel:T.reply,accessory:(0,ye.jsx)(Vl,{pending:u,onChange:d})}),(0,ye.jsx)(_t,{tone:t.resolved?"muted":"accent",iconLeading:(0,ye.jsx)(to,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?T.unarchive:T.archive}),p&&(0,ye.jsx)(yb,{before:p.before,after:p.after,onClose:()=>v(null)})]})}var Qc=c(C(),1);function kb(e,t){let a=t.map(({beforeShot:r,...o})=>({...o,comments:o.comments.map(({shot:i,...n})=>n)}));return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:a},null,2)}function Pb(e,t){let a=new Blob([kb(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function Tb(e,t){try{return await navigator.clipboard.writeText(kb(e,t)),!0}catch{return!1}}var mt=c(m(),1),QI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,ZI=l.span`
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
`,JI=l.span`
  margin-left: auto;
`,ek=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,tk=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function Rb({store:e,thread:t,number:a,onSelect:r}){let o=Bl(),i=async s=>{s.stopPropagation(),await o({title:T.deleteThreadTitle,description:Ii(t),confirmLabel:T.delete,cancelLabel:T.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,mt.jsxs)(g0,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,mt.jsxs)(QI,{children:[(0,mt.jsx)(ZI,{children:a}),(0,mt.jsx)("span",{children:zh(t)}),t.resolved&&(0,mt.jsx)(Ai,{$tone:"success",children:T.archivedBadge}),(0,mt.jsx)(JI,{}),(0,mt.jsx)(ge,{variant:"ghost",size:"sm",tone:"danger","aria-label":T.deleteThreadAria,onClick:i,children:(0,mt.jsx)(Ma,{size:14})})]}),(0,mt.jsx)(ek,{children:Ii(t)}),(0,mt.jsxs)(tk,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${T.replies}`]})]})}var oe=c(m(),1),ak=320,rk=l.button`
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
`,ok=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${ak}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,ik=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,nk=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,lk=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function Eb({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,Qc.useState)(null),[n,s]=(0,Qc.useState)(!1),u=e.list(),d=u.filter(y=>!y.resolved),p=u.filter(y=>y.resolved),v=y=>u.findIndex(A=>A.id===y.id)+1,h=y=>{if(!Yd(y.anchor)){Nh(y.anchor);return}setTimeout(()=>r(y.id),450)},w=async()=>{i(await Tb(e.project,e.exportList())?T.copied:T.copyFailed),setTimeout(()=>i(null),1500)},b=y=>y.map(A=>(0,oe.jsx)(Rb,{store:e,thread:A,number:v(A),onSelect:h},A.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(rk,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[T.tab," ",u.length]}),(0,oe.jsx)(ok,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(P0,{headerSlot:(0,oe.jsxs)(ik,{children:[(0,oe.jsxs)("span",{children:[T.listTitle," (",u.length,")"]}),(0,oe.jsx)(ge,{variant:"ghost",size:"sm","aria-label":T.close,onClick:()=>a(!1),children:(0,oe.jsx)(De,{size:16})})]}),bodySectionTitle:T.openSection,bodySlot:d.length===0?(0,oe.jsxs)(nk,{children:[T.emptyLine1,(0,oe.jsx)("br",{}),T.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(_t,{tone:"muted",onClick:()=>s(y=>!y),children:n?T.hideArchived(p.length):T.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(lk,{children:[(0,oe.jsx)(po,{variant:"secondary",size:"sm",onClick:w,children:o??T.copy}),(0,oe.jsx)(po,{variant:"solid",size:"sm",onClick:()=>Pb(e.project,e.exportList()),children:T.downloadJson})]})]})})]})}var ra=c(m(),1),$b=l.button`
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
`,sk=l.span`
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

  ${$b}:hover + & {
    opacity: 1;
  }
`,uk=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function Ab({store:e}){let t=e.list().length;return(0,ra.jsxs)(ra.Fragment,{children:[(0,ra.jsxs)($b,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?T.toggleOff:T.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,ra.jsx)(uk,{children:(0,ra.jsx)(Ex,{children:t})})]}),(0,ra.jsx)(sk,{children:e.enabled?T.toggleHintOn:T.toggleOn})]})}var Rt=c(m(),1);function Mb({store:e}){sb(e);let[t,a]=(0,Di.useState)(null),[r,o]=(0,Di.useState)(!1),i=e.enabled;(0,Di.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Aa(n.anchor):null;return(0,Rt.jsxs)(i0,{children:[i&&(0,Rt.jsx)(db,{active:!t,onPick:(d,p,v)=>{let h=e.list().find(w=>!w.resolved&&w.anchor.page===location.pathname&&Aa(w.anchor)===d);if(h){a({kind:"thread",id:h.id});return}a({kind:"draft",el:d,anchor:_h(d),point:{x:p,y:v}})}}),i&&(0,Rt.jsx)(gb,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,Rt.jsx)(Xc,{el:t.el}),u&&(0,Rt.jsx)(Xc,{el:u}),t?.kind==="draft"&&(0,Rt.jsx)(xb,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,Rt.jsx)(Ib,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,Rt.jsx)(Eb,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,Rt.jsx)(Ab,{store:e})]})}var Zc=c(m(),1),dk=2147483e3;function ck(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var fk=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function zb(){if(document.getElementById(eo))return;let e=document.createElement("div");e.id=eo,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${dk};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=ck(Mh)+fk;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new yl($a.project);(0,Db.createRoot)(o).render((0,Zc.jsx)(Rh,{target:r,children:(0,Zc.jsx)(Mb,{store:i})})),$a.seedUrl&&typeof fetch=="function"&&fetch($a.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),Hh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",zb):zb();})();
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
lucide-react/dist/esm/icons/paperclip.js:
lucide-react/dist/esm/icons/pencil.js:
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
