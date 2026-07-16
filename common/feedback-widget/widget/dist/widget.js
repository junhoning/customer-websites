"use strict";(()=>{var T0=Object.create;var vc=Object.defineProperty;var R0=Object.getOwnPropertyDescriptor;var E0=Object.getOwnPropertyNames;var $0=Object.getPrototypeOf,M0=Object.prototype.hasOwnProperty;var $t=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var z0=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of E0(t))!M0.call(e,o)&&o!==a&&vc(e,o,{get:()=>t[o],enumerable:!(r=R0(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?T0($0(e)):{},z0(t||!e||!e.__esModule?vc(a,"default",{value:e,enumerable:!0}):a,e));var Rc=$t(A=>{"use strict";var ro=Symbol.for("react.element"),D0=Symbol.for("react.portal"),A0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),F0=Symbol.for("react.profiler"),O0=Symbol.for("react.provider"),j0=Symbol.for("react.context"),_0=Symbol.for("react.forward_ref"),N0=Symbol.for("react.suspense"),H0=Symbol.for("react.memo"),U0=Symbol.for("react.lazy"),xc=Symbol.iterator;function q0(e){return e===null||typeof e!="object"?null:(e=xc&&e[xc]||e["@@iterator"],typeof e=="function"?e:null)}var wc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lc=Object.assign,Sc={};function lr(e,t,a){this.props=e,this.context=t,this.refs=Sc,this.updater=a||wc}lr.prototype.isReactComponent={};lr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};lr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cc(){}Cc.prototype=lr.prototype;function Pl(e,t,a){this.props=e,this.context=t,this.refs=Sc,this.updater=a||wc}var Tl=Pl.prototype=new Cc;Tl.constructor=Pl;Lc(Tl,lr.prototype);Tl.isPureReactComponent=!0;var bc=Array.isArray,Ic=Object.prototype.hasOwnProperty,Rl={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function Pc(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)Ic.call(t,r)&&!kc.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:ro,type:e,key:i,ref:n,props:o,_owner:Rl.current}}function W0(e,t){return{$$typeof:ro,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===ro}function V0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var yc=/\/+/g;function kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?V0(""+e.key):t.toString(36)}function vi(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case ro:case D0:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+kl(n,0):r,bc(o)?(a="",e!=null&&(a=e.replace(yc,"$&/")+"/"),vi(o,t,a,"",function(d){return d})):o!=null&&(El(o)&&(o=W0(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(yc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",bc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+kl(i,s);n+=vi(i,t,a,u,o)}else if(u=q0(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+kl(i,s++),n+=vi(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function hi(e,t,a){if(e==null)return e;var r=[],o=0;return vi(e,r,"","",function(i){return t.call(a,i,o++)}),r}function G0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},xi={transition:null},X0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:xi,ReactCurrentOwner:Rl};function Tc(){throw Error("act(...) is not supported in production builds of React.")}A.Children={map:hi,forEach:function(e,t,a){hi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return hi(e,function(){t++}),t},toArray:function(e){return hi(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};A.Component=lr;A.Fragment=A0;A.Profiler=F0;A.PureComponent=Pl;A.StrictMode=B0;A.Suspense=N0;A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X0;A.act=Tc;A.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Rl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ic.call(t,u)&&!kc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:ro,type:e.type,key:o,ref:i,props:r,_owner:n}};A.createContext=function(e){return e={$$typeof:j0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O0,_context:e},e.Consumer=e};A.createElement=Pc;A.createFactory=function(e){var t=Pc.bind(null,e);return t.type=e,t};A.createRef=function(){return{current:null}};A.forwardRef=function(e){return{$$typeof:_0,render:e}};A.isValidElement=El;A.lazy=function(e){return{$$typeof:U0,_payload:{_status:-1,_result:e},_init:G0}};A.memo=function(e,t){return{$$typeof:H0,type:e,compare:t===void 0?null:t}};A.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};A.unstable_act=Tc;A.useCallback=function(e,t){return ke.current.useCallback(e,t)};A.useContext=function(e){return ke.current.useContext(e)};A.useDebugValue=function(){};A.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};A.useEffect=function(e,t){return ke.current.useEffect(e,t)};A.useId=function(){return ke.current.useId()};A.useImperativeHandle=function(e,t,a){return ke.current.useImperativeHandle(e,t,a)};A.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};A.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};A.useMemo=function(e,t){return ke.current.useMemo(e,t)};A.useReducer=function(e,t,a){return ke.current.useReducer(e,t,a)};A.useRef=function(e){return ke.current.useRef(e)};A.useState=function(e){return ke.current.useState(e)};A.useSyncExternalStore=function(e,t,a){return ke.current.useSyncExternalStore(e,t,a)};A.useTransition=function(){return ke.current.useTransition()};A.version="18.3.1"});var I=$t((sC,Ec)=>{"use strict";Ec.exports=Rc()});var _c=$t(U=>{"use strict";function Dl(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<bi(o,t))e[r]=t,e[a]=o,a=r;else break e}}function st(e){return e.length===0?null:e[0]}function wi(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>bi(s,a))u<o&&0>bi(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>bi(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function bi(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?($c=performance,U.unstable_now=function(){return $c.now()}):($l=Date,Mc=$l.now(),U.unstable_now=function(){return $l.now()-Mc});var $c,$l,Mc,wt=[],Zt=[],Y0=1,Qe=null,be=3,Li=!1,Pa=!1,io=!1,Ac=typeof setTimeout=="function"?setTimeout:null,Bc=typeof clearTimeout=="function"?clearTimeout:null,zc=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Al(e){for(var t=st(Zt);t!==null;){if(t.callback===null)wi(Zt);else if(t.startTime<=e)wi(Zt),t.sortIndex=t.expirationTime,Dl(wt,t);else break;t=st(Zt)}}function Bl(e){if(io=!1,Al(e),!Pa)if(st(wt)!==null)Pa=!0,Ol(Fl);else{var t=st(Zt);t!==null&&jl(Bl,t.startTime-e)}}function Fl(e,t){Pa=!1,io&&(io=!1,Bc(no),no=-1),Li=!0;var a=be;try{for(Al(t),Qe=st(wt);Qe!==null&&(!(Qe.expirationTime>t)||e&&!jc());){var r=Qe.callback;if(typeof r=="function"){Qe.callback=null,be=Qe.priorityLevel;var o=r(Qe.expirationTime<=t);t=U.unstable_now(),typeof o=="function"?Qe.callback=o:Qe===st(wt)&&wi(wt),Al(t)}else wi(wt);Qe=st(wt)}if(Qe!==null)var i=!0;else{var n=st(Zt);n!==null&&jl(Bl,n.startTime-t),i=!1}return i}finally{Qe=null,be=a,Li=!1}}var Si=!1,yi=null,no=-1,Fc=5,Oc=-1;function jc(){return!(U.unstable_now()-Oc<Fc)}function Ml(){if(yi!==null){var e=U.unstable_now();Oc=e;var t=!0;try{t=yi(!0,e)}finally{t?oo():(Si=!1,yi=null)}}else Si=!1}var oo;typeof zc=="function"?oo=function(){zc(Ml)}:typeof MessageChannel<"u"?(zl=new MessageChannel,Dc=zl.port2,zl.port1.onmessage=Ml,oo=function(){Dc.postMessage(null)}):oo=function(){Ac(Ml,0)};var zl,Dc;function Ol(e){yi=e,Si||(Si=!0,oo())}function jl(e,t){no=Ac(function(){e(U.unstable_now())},t)}U.unstable_IdlePriority=5;U.unstable_ImmediatePriority=1;U.unstable_LowPriority=4;U.unstable_NormalPriority=3;U.unstable_Profiling=null;U.unstable_UserBlockingPriority=2;U.unstable_cancelCallback=function(e){e.callback=null};U.unstable_continueExecution=function(){Pa||Li||(Pa=!0,Ol(Fl))};U.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fc=0<e?Math.floor(1e3/e):5};U.unstable_getCurrentPriorityLevel=function(){return be};U.unstable_getFirstCallbackNode=function(){return st(wt)};U.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var a=be;be=t;try{return e()}finally{be=a}};U.unstable_pauseExecution=function(){};U.unstable_requestPaint=function(){};U.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=be;be=e;try{return t()}finally{be=a}};U.unstable_scheduleCallback=function(e,t,a){var r=U.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:Y0++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,Dl(Zt,e),st(wt)===null&&e===st(Zt)&&(io?(Bc(no),no=-1):io=!0,jl(Bl,a-r))):(e.sortIndex=o,Dl(wt,e),Pa||Li||(Pa=!0,Ol(Fl))),e};U.unstable_shouldYield=jc;U.unstable_wrapCallback=function(e){var t=be;return function(){var a=be;be=t;try{return e.apply(this,arguments)}finally{be=a}}}});var Hc=$t((dC,Nc)=>{"use strict";Nc.exports=_c()});var Gg=$t(Ve=>{"use strict";var K0=I(),qe=Hc();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kf=new Set,Ro={};function _a(e,t){Tr(e,t),Tr(e+"Capture",t)}function Tr(e,t){for(Ro[e]=t,e=0;e<t.length;e++)Kf.add(t[e])}var Ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=Object.prototype.hasOwnProperty,Q0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uc={},qc={};function Z0(e){return ss.call(qc,e)?!0:ss.call(Uc,e)?!1:Q0.test(e)?qc[e]=!0:(Uc[e]=!0,!1)}function J0(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function eb(e,t,a,r){if(t===null||typeof t>"u"||J0(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Re(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var ge={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ge[e]=new Re(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ge[t]=new Re(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ge[e]=new Re(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ge[e]=new Re(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ge[e]=new Re(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ge[e]=new Re(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ge[e]=new Re(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ge[e]=new Re(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ge[e]=new Re(e,5,!1,e.toLowerCase(),null,!1,!1)});var eu=/[\-:]([a-z])/g;function tu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(eu,tu);ge[t]=new Re(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(eu,tu);ge[t]=new Re(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(eu,tu);ge[t]=new Re(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ge[e]=new Re(e,1,!1,e.toLowerCase(),null,!1,!1)});ge.xlinkHref=new Re("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ge[e]=new Re(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,a,r){var o=ge.hasOwnProperty(t)?ge[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(eb(t,a,o,r)&&(a=null),r||o===null?Z0(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Nt=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ci=Symbol.for("react.element"),dr=Symbol.for("react.portal"),cr=Symbol.for("react.fragment"),ru=Symbol.for("react.strict_mode"),us=Symbol.for("react.profiler"),Qf=Symbol.for("react.provider"),Zf=Symbol.for("react.context"),ou=Symbol.for("react.forward_ref"),ds=Symbol.for("react.suspense"),cs=Symbol.for("react.suspense_list"),iu=Symbol.for("react.memo"),ea=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Jf=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Wc=Symbol.iterator;function lo(e){return e===null||typeof e!="object"?null:(e=Wc&&e[Wc]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,_l;function ho(e){if(_l===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_l=t&&t[1]||""}return`
`+_l+e}var Nl=!1;function Hl(e,t){if(!e||Nl)return"";Nl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?ho(e):""}function tb(e){switch(e.tag){case 5:return ho(e.type);case 16:return ho("Lazy");case 13:return ho("Suspense");case 19:return ho("SuspenseList");case 0:case 2:case 15:return e=Hl(e.type,!1),e;case 11:return e=Hl(e.type.render,!1),e;case 1:return e=Hl(e.type,!0),e;default:return""}}function fs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cr:return"Fragment";case dr:return"Portal";case us:return"Profiler";case ru:return"StrictMode";case ds:return"Suspense";case cs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zf:return(e.displayName||"Context")+".Consumer";case Qf:return(e._context.displayName||"Context")+".Provider";case ou:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case iu:return t=e.displayName||null,t!==null?t:fs(e.type)||"Memo";case ea:t=e._payload,e=e._init;try{return fs(e(t))}catch{}}return null}function ab(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fs(t);case 8:return t===ru?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ga(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rb(e){var t=ep(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ii(e){e._valueTracker||(e._valueTracker=rb(e))}function tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=ep(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function Ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ps(e,t){var a=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Vc(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=ga(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ap(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function gs(e,t){ap(e,t);var a=ga(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ms(e,t.type,a):t.hasOwnProperty("defaultValue")&&ms(e,t.type,ga(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gc(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function ms(e,t,a){(t!=="number"||Ji(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var vo=Array.isArray;function Lr(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ga(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xc(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(C(92));if(vo(a)){if(1<a.length)throw Error(C(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:ga(a)}}function rp(e,t){var a=ga(t.value),r=ga(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function Yc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function op(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?op(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ki,ip=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ki=ki||document.createElement("div"),ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Eo(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var yo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ob=["Webkit","ms","Moz","O"];Object.keys(yo).forEach(function(e){ob.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yo[t]=yo[e]})});function np(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||yo.hasOwnProperty(e)&&yo[e]?(""+t).trim():t+"px"}function lp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=np(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var ib=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xs(e,t){if(t){if(ib[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ys=null;function nu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ws=null,Sr=null,Cr=null;function Kc(e){if(e=Xo(e)){if(typeof ws!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Tn(t),ws(e.stateNode,e.type,t))}}function sp(e){Sr?Cr?Cr.push(e):Cr=[e]:Sr=e}function up(){if(Sr){var e=Sr,t=Cr;if(Cr=Sr=null,Kc(e),t)for(e=0;e<t.length;e++)Kc(t[e])}}function dp(e,t){return e(t)}function cp(){}var Ul=!1;function fp(e,t,a){if(Ul)return e(t,a);Ul=!0;try{return dp(e,t,a)}finally{Ul=!1,(Sr!==null||Cr!==null)&&(cp(),up())}}function $o(e,t){var a=e.stateNode;if(a===null)return null;var r=Tn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(C(231,t,typeof a));return a}var Ls=!1;if(Ft)try{sr={},Object.defineProperty(sr,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",sr,sr),window.removeEventListener("test",sr,sr)}catch{Ls=!1}var sr;function nb(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var wo=!1,en=null,tn=!1,Ss=null,lb={onError:function(e){wo=!0,en=e}};function sb(e,t,a,r,o,i,n,s,u){wo=!1,en=null,nb.apply(lb,arguments)}function ub(e,t,a,r,o,i,n,s,u){if(sb.apply(this,arguments),wo){if(wo){var d=en;wo=!1,en=null}else throw Error(C(198));tn||(tn=!0,Ss=d)}}function Na(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qc(e){if(Na(e)!==e)throw Error(C(188))}function db(e){var t=e.alternate;if(!t){if(t=Na(e),t===null)throw Error(C(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return Qc(o),e;if(i===r)return Qc(o),t;i=i.sibling}throw Error(C(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(C(189))}}if(a.alternate!==r)throw Error(C(190))}if(a.tag!==3)throw Error(C(188));return a.stateNode.current===a?e:t}function gp(e){return e=db(e),e!==null?mp(e):null}function mp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mp(e);if(t!==null)return t;e=e.sibling}return null}var hp=qe.unstable_scheduleCallback,Zc=qe.unstable_cancelCallback,cb=qe.unstable_shouldYield,fb=qe.unstable_requestPaint,ae=qe.unstable_now,pb=qe.unstable_getCurrentPriorityLevel,lu=qe.unstable_ImmediatePriority,vp=qe.unstable_UserBlockingPriority,an=qe.unstable_NormalPriority,gb=qe.unstable_LowPriority,xp=qe.unstable_IdlePriority,Cn=null,It=null;function mb(e){if(It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(Cn,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:xb,hb=Math.log,vb=Math.LN2;function xb(e){return e>>>=0,e===0?32:31-(hb(e)/vb|0)|0}var Pi=64,Ti=4194304;function xo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function rn(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=xo(s):(i&=n,i!==0&&(r=xo(i)))}else n=a&~o,n!==0?r=xo(n):i!==0&&(r=xo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-pt(t),o=1<<a,r|=e[a],t&=~o;return r}function bb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yb(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-pt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=bb(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Cs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bp(){var e=Pi;return Pi<<=1,(Pi&4194240)===0&&(Pi=64),e}function ql(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Vo(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=a}function wb(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-pt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function su(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-pt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var j=0;function yp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var wp,uu,Lp,Sp,Cp,Is=!1,Ri=[],na=null,la=null,sa=null,Mo=new Map,zo=new Map,aa=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jc(e,t){switch(e){case"focusin":case"focusout":na=null;break;case"dragenter":case"dragleave":la=null;break;case"mouseover":case"mouseout":sa=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function so(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Xo(t),t!==null&&uu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Sb(e,t,a,r,o){switch(t){case"focusin":return na=so(na,e,t,a,r,o),!0;case"dragenter":return la=so(la,e,t,a,r,o),!0;case"mouseover":return sa=so(sa,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Mo.set(i,so(Mo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,zo.set(i,so(zo.get(i)||null,e,t,a,r,o)),!0}return!1}function Ip(e){var t=Ea(e.target);if(t!==null){var a=Na(t);if(a!==null){if(t=a.tag,t===13){if(t=pp(a),t!==null){e.blockedOn=t,Cp(e.priority,function(){Lp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ui(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);ys=r,a.target.dispatchEvent(r),ys=null}else return t=Xo(a),t!==null&&uu(t),e.blockedOn=a,!1;t.shift()}return!0}function ef(e,t,a){Ui(e)&&a.delete(t)}function Cb(){Is=!1,na!==null&&Ui(na)&&(na=null),la!==null&&Ui(la)&&(la=null),sa!==null&&Ui(sa)&&(sa=null),Mo.forEach(ef),zo.forEach(ef)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,Cb)))}function Do(e){function t(o){return uo(o,e)}if(0<Ri.length){uo(Ri[0],e);for(var a=1;a<Ri.length;a++){var r=Ri[a];r.blockedOn===e&&(r.blockedOn=null)}}for(na!==null&&uo(na,e),la!==null&&uo(la,e),sa!==null&&uo(sa,e),Mo.forEach(t),zo.forEach(t),a=0;a<aa.length;a++)r=aa[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<aa.length&&(a=aa[0],a.blockedOn===null);)Ip(a),a.blockedOn===null&&aa.shift()}var Ir=Nt.ReactCurrentBatchConfig,on=!0;function Ib(e,t,a,r){var o=j,i=Ir.transition;Ir.transition=null;try{j=1,du(e,t,a,r)}finally{j=o,Ir.transition=i}}function kb(e,t,a,r){var o=j,i=Ir.transition;Ir.transition=null;try{j=4,du(e,t,a,r)}finally{j=o,Ir.transition=i}}function du(e,t,a,r){if(on){var o=ks(e,t,a,r);if(o===null)Ql(e,t,r,nn,a),Jc(e,r);else if(Sb(o,e,t,a,r))r.stopPropagation();else if(Jc(e,r),t&4&&-1<Lb.indexOf(e)){for(;o!==null;){var i=Xo(o);if(i!==null&&wp(i),i=ks(e,t,a,r),i===null&&Ql(e,t,r,nn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ql(e,t,r,null,a)}}var nn=null;function ks(e,t,a,r){if(nn=null,e=nu(r),e=Ea(e),e!==null)if(t=Na(e),t===null)e=null;else if(a=t.tag,a===13){if(e=pp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return nn=e,null}function kp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pb()){case lu:return 1;case vp:return 4;case an:case gb:return 16;case xp:return 536870912;default:return 16}default:return 16}}var oa=null,cu=null,qi=null;function Pp(){if(qi)return qi;var e,t=cu,a=t.length,r,o="value"in oa?oa.value:oa.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return qi=o.slice(e,1<r?1-r:void 0)}function Wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function tf(){return!1}function We(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ei:tf,this.isPropagationStopped=tf,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fu=We(Ar),Go=K({},Ar,{view:0,detail:0}),Pb=We(Go),Wl,Vl,co,In=K({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Wl=e.screenX-co.screenX,Vl=e.screenY-co.screenY):Vl=Wl=0,co=e),Wl)},movementY:function(e){return"movementY"in e?e.movementY:Vl}}),af=We(In),Tb=K({},In,{dataTransfer:0}),Rb=We(Tb),Eb=K({},Go,{relatedTarget:0}),Gl=We(Eb),$b=K({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Mb=We($b),zb=K({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Db=We(zb),Ab=K({},Ar,{data:0}),rf=We(Ab),Bb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ob={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ob[e])?!!t[e]:!1}function pu(){return jb}var _b=K({},Go,{key:function(e){if(e.key){var t=Bb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Fb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(e){return e.type==="keypress"?Wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nb=We(_b),Hb=K({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=We(Hb),Ub=K({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),qb=We(Ub),Wb=K({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vb=We(Wb),Gb=K({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xb=We(Gb),Yb=[9,13,27,32],gu=Ft&&"CompositionEvent"in window,Lo=null;Ft&&"documentMode"in document&&(Lo=document.documentMode);var Kb=Ft&&"TextEvent"in window&&!Lo,Tp=Ft&&(!gu||Lo&&8<Lo&&11>=Lo),nf=" ",lf=!1;function Rp(e,t){switch(e){case"keyup":return Yb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function Qb(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(lf=!0,nf);case"textInput":return e=t.data,e===nf&&lf?null:e;default:return null}}function Zb(e,t){if(fr)return e==="compositionend"||!gu&&Rp(e,t)?(e=Pp(),qi=cu=oa=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tp&&t.locale!=="ko"?null:t.data;default:return null}}var Jb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jb[e.type]:t==="textarea"}function $p(e,t,a,r){sp(r),t=ln(t,"onChange"),0<t.length&&(a=new fu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var So=null,Ao=null;function e1(e){Hp(e,0)}function kn(e){var t=mr(e);if(tp(t))return e}function t1(e,t){if(e==="change")return t}var Mp=!1;Ft&&(Ft?(Mi="oninput"in document,Mi||(Xl=document.createElement("div"),Xl.setAttribute("oninput","return;"),Mi=typeof Xl.oninput=="function"),$i=Mi):$i=!1,Mp=$i&&(!document.documentMode||9<document.documentMode));var $i,Mi,Xl;function uf(){So&&(So.detachEvent("onpropertychange",zp),Ao=So=null)}function zp(e){if(e.propertyName==="value"&&kn(Ao)){var t=[];$p(t,Ao,e,nu(e)),fp(e1,t)}}function a1(e,t,a){e==="focusin"?(uf(),So=t,Ao=a,So.attachEvent("onpropertychange",zp)):e==="focusout"&&uf()}function r1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kn(Ao)}function o1(e,t){if(e==="click")return kn(t)}function i1(e,t){if(e==="input"||e==="change")return kn(t)}function n1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:n1;function Bo(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!ss.call(t,o)||!mt(e[o],t[o]))return!1}return!0}function df(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cf(e,t){var a=df(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=df(a)}}function Dp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ap(){for(var e=window,t=Ji();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ji(e.document)}return t}function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function l1(e){var t=Ap(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Dp(a.ownerDocument.documentElement,a)){if(r!==null&&mu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=cf(a,i);var n=cf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s1=Ft&&"documentMode"in document&&11>=document.documentMode,pr=null,Ps=null,Co=null,Ts=!1;function ff(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ts||pr==null||pr!==Ji(r)||(r=pr,"selectionStart"in r&&mu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Co&&Bo(Co,r)||(Co=r,r=ln(Ps,"onSelect"),0<r.length&&(t=new fu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=pr)))}function zi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var gr={animationend:zi("Animation","AnimationEnd"),animationiteration:zi("Animation","AnimationIteration"),animationstart:zi("Animation","AnimationStart"),transitionend:zi("Transition","TransitionEnd")},Yl={},Bp={};Ft&&(Bp=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Pn(e){if(Yl[e])return Yl[e];if(!gr[e])return e;var t=gr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Bp)return Yl[e]=t[a];return e}var Fp=Pn("animationend"),Op=Pn("animationiteration"),jp=Pn("animationstart"),_p=Pn("transitionend"),Np=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ha(e,t){Np.set(e,t),_a(t,[e])}for(Di=0;Di<pf.length;Di++)Ai=pf[Di],gf=Ai.toLowerCase(),mf=Ai[0].toUpperCase()+Ai.slice(1),ha(gf,"on"+mf);var Ai,gf,mf,Di;ha(Fp,"onAnimationEnd");ha(Op,"onAnimationIteration");ha(jp,"onAnimationStart");ha("dblclick","onDoubleClick");ha("focusin","onFocus");ha("focusout","onBlur");ha(_p,"onTransitionEnd");Tr("onMouseEnter",["mouseout","mouseover"]);Tr("onMouseLeave",["mouseout","mouseover"]);Tr("onPointerEnter",["pointerout","pointerover"]);Tr("onPointerLeave",["pointerout","pointerover"]);_a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_a("onBeforeInput",["compositionend","keypress","textInput","paste"]);_a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),u1=new Set("cancel close invalid load scroll toggle".split(" ").concat(bo));function hf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,ub(r,t,void 0,e),e.currentTarget=null}function Hp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;hf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;hf(o,s,d),i=u}}}if(tn)throw e=Ss,tn=!1,Ss=null,e}function W(e,t){var a=t[zs];a===void 0&&(a=t[zs]=new Set);var r=e+"__bubble";a.has(r)||(Up(t,e,2,!1),a.add(r))}function Kl(e,t,a){var r=0;t&&(r|=4),Up(a,e,r,t)}var Bi="_reactListening"+Math.random().toString(36).slice(2);function Fo(e){if(!e[Bi]){e[Bi]=!0,Kf.forEach(function(a){a!=="selectionchange"&&(u1.has(a)||Kl(a,!1,e),Kl(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bi]||(t[Bi]=!0,Kl("selectionchange",!1,t))}}function Up(e,t,a,r){switch(kp(t)){case 1:var o=Ib;break;case 4:o=kb;break;default:o=du}a=o.bind(null,t,a,e),o=void 0,!Ls||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function Ql(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=Ea(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}fp(function(){var d=i,p=nu(a),h=[];e:{var x=Np.get(e);if(x!==void 0){var y=fu,b=e;switch(e){case"keypress":if(Wi(a)===0)break e;case"keydown":case"keyup":y=Nb;break;case"focusin":b="focus",y=Gl;break;case"focusout":b="blur",y=Gl;break;case"beforeblur":case"afterblur":y=Gl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Rb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=qb;break;case Fp:case Op:case jp:y=Mb;break;case _p:y=Vb;break;case"scroll":y=Pb;break;case"wheel":y=Xb;break;case"copy":case"cut":case"paste":y=Db;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=of}var w=(t&4)!==0,$=!w&&e==="scroll",g=w?x!==null?x+"Capture":null:x;w=[];for(var f=d,v;f!==null;){v=f;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,g!==null&&(S=$o(f,g),S!=null&&w.push(Oo(f,S,v)))),$)break;f=f.return}0<w.length&&(x=new y(x,b,null,a,p),h.push({event:x,listeners:w}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&a!==ys&&(b=a.relatedTarget||a.fromElement)&&(Ea(b)||b[Ot]))break e;if((y||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?Ea(b):null,b!==null&&($=Na(b),b!==$||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=af,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=of,S="onPointerLeave",g="onPointerEnter",f="pointer"),$=y==null?x:mr(y),v=b==null?x:mr(b),x=new w(S,f+"leave",y,a,p),x.target=$,x.relatedTarget=v,S=null,Ea(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=v,w.relatedTarget=$,S=w),$=S,y&&b)t:{for(w=y,g=b,f=0,v=w;v;v=ur(v))f++;for(v=0,S=g;S;S=ur(S))v++;for(;0<f-v;)w=ur(w),f--;for(;0<v-f;)g=ur(g),v--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=ur(w),g=ur(g)}w=null}else w=null;y!==null&&vf(h,x,y,w,!1),b!==null&&$!==null&&vf(h,$,b,w,!0)}}e:{if(x=d?mr(d):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var P=t1;else if(sf(x))if(Mp)P=i1;else{P=r1;var R=a1}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=o1);if(P&&(P=P(e,d))){$p(h,P,a,p);break e}R&&R(e,x,d),e==="focusout"&&(R=x._wrapperState)&&R.controlled&&x.type==="number"&&ms(x,"number",x.value)}switch(R=d?mr(d):window,e){case"focusin":(sf(R)||R.contentEditable==="true")&&(pr=R,Ps=d,Co=null);break;case"focusout":Co=Ps=pr=null;break;case"mousedown":Ts=!0;break;case"contextmenu":case"mouseup":case"dragend":Ts=!1,ff(h,a,p);break;case"selectionchange":if(s1)break;case"keydown":case"keyup":ff(h,a,p)}var k;if(gu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else fr?Rp(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(Tp&&a.locale!=="ko"&&(fr||T!=="onCompositionStart"?T==="onCompositionEnd"&&fr&&(k=Pp()):(oa=p,cu="value"in oa?oa.value:oa.textContent,fr=!0)),R=ln(d,T),0<R.length&&(T=new rf(T,e,null,a,p),h.push({event:T,listeners:R}),k?T.data=k:(k=Ep(a),k!==null&&(T.data=k)))),(k=Kb?Qb(e,a):Zb(e,a))&&(d=ln(d,"onBeforeInput"),0<d.length&&(p=new rf("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}Hp(h,t)})}function Oo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ln(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=$o(e,a),i!=null&&r.unshift(Oo(e,i,o)),i=$o(e,t),i!=null&&r.push(Oo(e,i,o))),e=e.return}return r}function ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function vf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=$o(a,i),u!=null&&n.unshift(Oo(a,u,s))):o||(u=$o(a,i),u!=null&&n.push(Oo(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var d1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(d1,`
`).replace(c1,"")}function Fi(e,t,a){if(t=xf(t),xf(e)!==t&&a)throw Error(C(425))}function sn(){}var Rs=null,Es=null;function $s(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ms=typeof setTimeout=="function"?setTimeout:void 0,f1=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,p1=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(e){return bf.resolve(null).then(e).catch(g1)}:Ms;function g1(e){setTimeout(function(){throw e})}function Zl(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Do(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Do(t)}function ua(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Br,jo="__reactProps$"+Br,Ot="__reactContainer$"+Br,zs="__reactEvents$"+Br,m1="__reactListeners$"+Br,h1="__reactHandles$"+Br;function Ea(e){var t=e[Ct];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ot]||a[Ct]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=yf(e);e!==null;){if(a=e[Ct])return a;e=yf(e)}return t}e=a,a=e.parentNode}return null}function Xo(e){return e=e[Ct]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Tn(e){return e[jo]||null}var Ds=[],hr=-1;function va(e){return{current:e}}function V(e){0>hr||(e.current=Ds[hr],Ds[hr]=null,hr--)}function q(e,t){hr++,Ds[hr]=e.current,e.current=t}var ma={},Se=va(ma),Fe=va(!1),Aa=ma;function Rr(e,t){var a=e.type.contextTypes;if(!a)return ma;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Oe(e){return e=e.childContextTypes,e!=null}function un(){V(Fe),V(Se)}function wf(e,t,a){if(Se.current!==ma)throw Error(C(168));q(Se,t),q(Fe,a)}function qp(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,ab(e)||"Unknown",o));return K({},a,r)}function dn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ma,Aa=Se.current,q(Se,e),q(Fe,Fe.current),!0}function Lf(e,t,a){var r=e.stateNode;if(!r)throw Error(C(169));a?(e=qp(e,t,Aa),r.__reactInternalMemoizedMergedChildContext=e,V(Fe),V(Se),q(Se,e)):V(Fe),q(Fe,a)}var zt=null,Rn=!1,Jl=!1;function Wp(e){zt===null?zt=[e]:zt.push(e)}function v1(e){Rn=!0,Wp(e)}function xa(){if(!Jl&&zt!==null){Jl=!0;var e=0,t=j;try{var a=zt;for(j=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}zt=null,Rn=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),hp(lu,xa),o}finally{j=t,Jl=!1}}return null}var vr=[],xr=0,cn=null,fn=0,Ze=[],Je=0,Ba=null,Dt=1,At="";function Ta(e,t){vr[xr++]=fn,vr[xr++]=cn,cn=e,fn=t}function Vp(e,t,a){Ze[Je++]=Dt,Ze[Je++]=At,Ze[Je++]=Ba,Ba=e;var r=Dt;e=At;var o=32-pt(r)-1;r&=~(1<<o),a+=1;var i=32-pt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,Dt=1<<32-pt(t)+o|a<<o|r,At=i+e}else Dt=1<<i|a<<o|r,At=e}function hu(e){e.return!==null&&(Ta(e,1),Vp(e,1,0))}function vu(e){for(;e===cn;)cn=vr[--xr],vr[xr]=null,fn=vr[--xr],vr[xr]=null;for(;e===Ba;)Ba=Ze[--Je],Ze[Je]=null,At=Ze[--Je],Ze[Je]=null,Dt=Ze[--Je],Ze[Je]=null}var Ue=null,He=null,G=!1,ft=null;function Gp(e,t){var a=et(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Sf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,He=ua(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Ba!==null?{id:Dt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=et(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ue=e,He=null,!0):!1;default:return!1}}function As(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bs(e){if(G){var t=He;if(t){var a=t;if(!Sf(e,t)){if(As(e))throw Error(C(418));t=ua(a.nextSibling);var r=Ue;t&&Sf(e,t)?Gp(r,a):(e.flags=e.flags&-4097|2,G=!1,Ue=e)}}else{if(As(e))throw Error(C(418));e.flags=e.flags&-4097|2,G=!1,Ue=e}}}function Cf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function Oi(e){if(e!==Ue)return!1;if(!G)return Cf(e),G=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$s(e.type,e.memoizedProps)),t&&(t=He)){if(As(e))throw Xp(),Error(C(418));for(;t;)Gp(e,t),t=ua(t.nextSibling)}if(Cf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){He=ua(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}He=null}}else He=Ue?ua(e.stateNode.nextSibling):null;return!0}function Xp(){for(var e=He;e;)e=ua(e.nextSibling)}function Er(){He=Ue=null,G=!1}function xu(e){ft===null?ft=[e]:ft.push(e)}var x1=Nt.ReactCurrentBatchConfig;function fo(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(C(309));var r=a.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!a._owner)throw Error(C(290,e))}return e}function ji(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function If(e){var t=e._init;return t(e._payload)}function Yp(e){function t(g,f){if(e){var v=g.deletions;v===null?(g.deletions=[f],g.flags|=16):v.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=pa(g,f),g.index=0,g.sibling=null,g}function i(g,f,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<f?(g.flags|=2,f):v):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,v,S){return f===null||f.tag!==6?(f=ns(v,g.mode,S),f.return=g,f):(f=o(f,v),f.return=g,f)}function u(g,f,v,S){var P=v.type;return P===cr?p(g,f,v.props.children,S,v.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ea&&If(P)===f.type)?(S=o(f,v.props),S.ref=fo(g,f,v),S.return=g,S):(S=Zi(v.type,v.key,v.props,null,g.mode,S),S.ref=fo(g,f,v),S.return=g,S)}function d(g,f,v,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==v.containerInfo||f.stateNode.implementation!==v.implementation?(f=ls(v,g.mode,S),f.return=g,f):(f=o(f,v.children||[]),f.return=g,f)}function p(g,f,v,S,P){return f===null||f.tag!==7?(f=Da(v,g.mode,S,P),f.return=g,f):(f=o(f,v),f.return=g,f)}function h(g,f,v){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ns(""+f,g.mode,v),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ci:return v=Zi(f.type,f.key,f.props,null,g.mode,v),v.ref=fo(g,null,f),v.return=g,v;case dr:return f=ls(f,g.mode,v),f.return=g,f;case ea:var S=f._init;return h(g,S(f._payload),v)}if(vo(f)||lo(f))return f=Da(f,g.mode,v,null),f.return=g,f;ji(g,f)}return null}function x(g,f,v,S){var P=f!==null?f.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:s(g,f,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ci:return v.key===P?u(g,f,v,S):null;case dr:return v.key===P?d(g,f,v,S):null;case ea:return P=v._init,x(g,f,P(v._payload),S)}if(vo(v)||lo(v))return P!==null?null:p(g,f,v,S,null);ji(g,v)}return null}function y(g,f,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(v)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ci:return g=g.get(S.key===null?v:S.key)||null,u(f,g,S,P);case dr:return g=g.get(S.key===null?v:S.key)||null,d(f,g,S,P);case ea:var R=S._init;return y(g,f,v,R(S._payload),P)}if(vo(S)||lo(S))return g=g.get(v)||null,p(f,g,S,P,null);ji(f,S)}return null}function b(g,f,v,S){for(var P=null,R=null,k=f,T=f=0,H=null;k!==null&&T<v.length;T++){k.index>T?(H=k,k=null):H=k.sibling;var z=x(g,k,v[T],S);if(z===null){k===null&&(k=H);break}e&&k&&z.alternate===null&&t(g,k),f=i(z,f,T),R===null?P=z:R.sibling=z,R=z,k=H}if(T===v.length)return a(g,k),G&&Ta(g,T),P;if(k===null){for(;T<v.length;T++)k=h(g,v[T],S),k!==null&&(f=i(k,f,T),R===null?P=k:R.sibling=k,R=k);return G&&Ta(g,T),P}for(k=r(g,k);T<v.length;T++)H=y(k,g,T,v[T],S),H!==null&&(e&&H.alternate!==null&&k.delete(H.key===null?T:H.key),f=i(H,f,T),R===null?P=H:R.sibling=H,R=H);return e&&k.forEach(function(te){return t(g,te)}),G&&Ta(g,T),P}function w(g,f,v,S){var P=lo(v);if(typeof P!="function")throw Error(C(150));if(v=P.call(v),v==null)throw Error(C(151));for(var R=P=null,k=f,T=f=0,H=null,z=v.next();k!==null&&!z.done;T++,z=v.next()){k.index>T?(H=k,k=null):H=k.sibling;var te=x(g,k,z.value,S);if(te===null){k===null&&(k=H);break}e&&k&&te.alternate===null&&t(g,k),f=i(te,f,T),R===null?P=te:R.sibling=te,R=te,k=H}if(z.done)return a(g,k),G&&Ta(g,T),P;if(k===null){for(;!z.done;T++,z=v.next())z=h(g,z.value,S),z!==null&&(f=i(z,f,T),R===null?P=z:R.sibling=z,R=z);return G&&Ta(g,T),P}for(k=r(g,k);!z.done;T++,z=v.next())z=y(k,g,T,z.value,S),z!==null&&(e&&z.alternate!==null&&k.delete(z.key===null?T:z.key),f=i(z,f,T),R===null?P=z:R.sibling=z,R=z);return e&&k.forEach(function(Ia){return t(g,Ia)}),G&&Ta(g,T),P}function $(g,f,v,S){if(typeof v=="object"&&v!==null&&v.type===cr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Ci:e:{for(var P=v.key,R=f;R!==null;){if(R.key===P){if(P=v.type,P===cr){if(R.tag===7){a(g,R.sibling),f=o(R,v.props.children),f.return=g,g=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ea&&If(P)===R.type){a(g,R.sibling),f=o(R,v.props),f.ref=fo(g,R,v),f.return=g,g=f;break e}a(g,R);break}else t(g,R);R=R.sibling}v.type===cr?(f=Da(v.props.children,g.mode,S,v.key),f.return=g,g=f):(S=Zi(v.type,v.key,v.props,null,g.mode,S),S.ref=fo(g,f,v),S.return=g,g=S)}return n(g);case dr:e:{for(R=v.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===v.containerInfo&&f.stateNode.implementation===v.implementation){a(g,f.sibling),f=o(f,v.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=ls(v,g.mode,S),f.return=g,g=f}return n(g);case ea:return R=v._init,$(g,f,R(v._payload),S)}if(vo(v))return b(g,f,v,S);if(lo(v))return w(g,f,v,S);ji(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,v),f.return=g,g=f):(a(g,f),f=ns(v,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return $}var $r=Yp(!0),Kp=Yp(!1),pn=va(null),gn=null,br=null,bu=null;function yu(){bu=br=gn=null}function wu(e){var t=pn.current;V(pn),e._currentValue=t}function Fs(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function kr(e,t){gn=e,bu=br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(bu!==e)if(e={context:e,memoizedValue:t,next:null},br===null){if(gn===null)throw Error(C(308));br=e,gn.dependencies={lanes:0,firstContext:e}}else br=br.next=e;return t}var $a=null;function Lu(e){$a===null?$a=[e]:$a.push(e)}function Qp(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Lu(t)):(a.next=o.next,o.next=a),t.interleaved=a,jt(e,r)}function jt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ta=!1;function Su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function da(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,jt(e,a)}return o=r.interleaved,o===null?(t.next=t,Lu(r)):(t.next=o.next,o.next=t),r.interleaved=t,jt(e,a)}function Vi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,su(e,a)}}function kf(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function mn(e,t,a,r){var o=e.updateQueue;ta=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var x=s.lane,y=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(x=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(y,h,x);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,x=typeof b=="function"?b.call(y,h,x):b,x==null)break e;h=K({},h,x);break e;case 2:ta=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=h):p=p.next=y,n|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Oa|=n,e.lanes=n,e.memoizedState=h}}function Pf(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Yo={},kt=va(Yo),_o=va(Yo),No=va(Yo);function Ma(e){if(e===Yo)throw Error(C(174));return e}function Cu(e,t){switch(q(No,t),q(_o,e),q(kt,Yo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vs(t,e)}V(kt),q(kt,t)}function Mr(){V(kt),V(_o),V(No)}function Jp(e){Ma(No.current);var t=Ma(kt.current),a=vs(t,e.type);t!==a&&(q(_o,e),q(kt,a))}function Iu(e){_o.current===e&&(V(kt),V(_o))}var X=va(0);function hn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var es=[];function ku(){for(var e=0;e<es.length;e++)es[e]._workInProgressVersionPrimary=null;es.length=0}var Gi=Nt.ReactCurrentDispatcher,ts=Nt.ReactCurrentBatchConfig,Fa=0,Y=null,ne=null,ue=null,vn=!1,Io=!1,Ho=0,b1=0;function ye(){throw Error(C(321))}function Pu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!mt(e[a],t[a]))return!1;return!0}function Tu(e,t,a,r,o,i){if(Fa=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?S1:C1,e=a(r,o),Io){i=0;do{if(Io=!1,Ho=0,25<=i)throw Error(C(301));i+=1,ue=ne=null,t.updateQueue=null,Gi.current=I1,e=a(r,o)}while(Io)}if(Gi.current=xn,t=ne!==null&&ne.next!==null,Fa=0,ue=ne=Y=null,vn=!1,t)throw Error(C(300));return e}function Ru(){var e=Ho!==0;return Ho=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?Y.memoizedState=ue=e:ue=ue.next=e,ue}function rt(){if(ne===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=ue===null?Y.memoizedState:ue.next;if(t!==null)ue=t,ne=e;else{if(e===null)throw Error(C(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},ue===null?Y.memoizedState=ue=e:ue=ue.next=e}return ue}function Uo(e,t){return typeof t=="function"?t(e):t}function as(e){var t=rt(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=ne,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Fa&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,Y.lanes|=p,Oa|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,mt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,Y.lanes|=i,Oa|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function rs(e){var t=rt(),a=t.queue;if(a===null)throw Error(C(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);mt(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function eg(){}function tg(e,t){var a=Y,r=rt(),o=t(),i=!mt(r.memoizedState,o);if(i&&(r.memoizedState=o,Be=!0),r=r.queue,Eu(og.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ue!==null&&ue.memoizedState.tag&1){if(a.flags|=2048,qo(9,rg.bind(null,a,r,o,t),void 0,null),de===null)throw Error(C(349));(Fa&30)!==0||ag(a,t,o)}return o}function ag(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function rg(e,t,a,r){t.value=a,t.getSnapshot=r,ig(t)&&ng(e)}function og(e,t,a){return a(function(){ig(t)&&ng(e)})}function ig(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!mt(e,a)}catch{return!0}}function ng(e){var t=jt(e,1);t!==null&&gt(t,e,1,-1)}function Tf(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:e},t.queue=e,e=e.dispatch=L1.bind(null,Y,e),[t.memoizedState,e]}function qo(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function lg(){return rt().memoizedState}function Xi(e,t,a,r){var o=St();Y.flags|=e,o.memoizedState=qo(1|t,a,void 0,r===void 0?null:r)}function En(e,t,a,r){var o=rt();r=r===void 0?null:r;var i=void 0;if(ne!==null){var n=ne.memoizedState;if(i=n.destroy,r!==null&&Pu(r,n.deps)){o.memoizedState=qo(t,a,i,r);return}}Y.flags|=e,o.memoizedState=qo(1|t,a,i,r)}function Rf(e,t){return Xi(8390656,8,e,t)}function Eu(e,t){return En(2048,8,e,t)}function sg(e,t){return En(4,2,e,t)}function ug(e,t){return En(4,4,e,t)}function dg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cg(e,t,a){return a=a!=null?a.concat([e]):null,En(4,4,dg.bind(null,t,e),a)}function $u(){}function fg(e,t){var a=rt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function pg(e,t){var a=rt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Pu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function gg(e,t,a){return(Fa&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=a):(mt(a,t)||(a=bp(),Y.lanes|=a,Oa|=a,e.baseState=!0),t)}function y1(e,t){var a=j;j=a!==0&&4>a?a:4,e(!0);var r=ts.transition;ts.transition={};try{e(!1),t()}finally{j=a,ts.transition=r}}function mg(){return rt().memoizedState}function w1(e,t,a){var r=fa(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},hg(e))vg(t,a);else if(a=Qp(e,t,a,r),a!==null){var o=Te();gt(a,e,r,o),xg(a,t,r)}}function L1(e,t,a){var r=fa(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(hg(e))vg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,mt(s,n)){var u=t.interleaved;u===null?(o.next=o,Lu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=Qp(e,t,o,r),a!==null&&(o=Te(),gt(a,e,r,o),xg(a,t,r))}}function hg(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function vg(e,t){Io=vn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,su(e,a)}}var xn={readContext:at,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},S1={readContext:at,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:Rf,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,Xi(4194308,4,dg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Xi(4,2,e,t)},useMemo:function(e,t){var a=St();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=St();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=w1.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:Tf,useDebugValue:$u,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=Tf(!1),t=e[0];return e=y1.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=Y,o=St();if(G){if(a===void 0)throw Error(C(407));a=a()}else{if(a=t(),de===null)throw Error(C(349));(Fa&30)!==0||ag(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,Rf(og.bind(null,r,i,e),[e]),r.flags|=2048,qo(9,rg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=St(),t=de.identifierPrefix;if(G){var a=At,r=Dt;a=(r&~(1<<32-pt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Ho++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=b1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},C1={readContext:at,useCallback:fg,useContext:at,useEffect:Eu,useImperativeHandle:cg,useInsertionEffect:sg,useLayoutEffect:ug,useMemo:pg,useReducer:as,useRef:lg,useState:function(){return as(Uo)},useDebugValue:$u,useDeferredValue:function(e){var t=rt();return gg(t,ne.memoizedState,e)},useTransition:function(){var e=as(Uo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1},I1={readContext:at,useCallback:fg,useContext:at,useEffect:Eu,useImperativeHandle:cg,useInsertionEffect:sg,useLayoutEffect:ug,useMemo:pg,useReducer:rs,useRef:lg,useState:function(){return rs(Uo)},useDebugValue:$u,useDeferredValue:function(e){var t=rt();return ne===null?t.memoizedState=e:gg(t,ne.memoizedState,e)},useTransition:function(){var e=rs(Uo)[0],t=rt().memoizedState;return[e,t]},useMutableSource:eg,useSyncExternalStore:tg,useId:mg,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function Os(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:K({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $n={isMounted:function(e){return(e=e._reactInternals)?Na(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Te(),o=fa(e),i=Bt(r,o);i.payload=t,a!=null&&(i.callback=a),t=da(e,i,o),t!==null&&(gt(t,e,o,r),Vi(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Te(),o=fa(e),i=Bt(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=da(e,i,o),t!==null&&(gt(t,e,o,r),Vi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Te(),r=fa(e),o=Bt(a,r);o.tag=2,t!=null&&(o.callback=t),t=da(e,o,r),t!==null&&(gt(t,e,r,a),Vi(t,e,r))}};function Ef(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Bo(a,r)||!Bo(o,i):!0}function bg(e,t,a){var r=!1,o=ma,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=Oe(t)?Aa:Se.current,r=t.contextTypes,i=(r=r!=null)?Rr(e,o):ma),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$n,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function $f(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&$n.enqueueReplaceState(t,t.state,null)}function js(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Su(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=Oe(t)?Aa:Se.current,o.context=Rr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Os(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&$n.enqueueReplaceState(o,o.state,null),mn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var a="",r=t;do a+=tb(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function os(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function _s(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function yg(e,t,a){a=Bt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){yn||(yn=!0,Ks=r),_s(e,t)},a}function wg(e,t,a){a=Bt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){_s(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){_s(e,t),typeof r!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function Mf(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new k1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=_1.bind(null,e,t,a),t.then(e,e))}function zf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Df(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Bt(-1,1),t.tag=2,da(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var P1=Nt.ReactCurrentOwner,Be=!1;function Pe(e,t,a,r){t.child=e===null?Kp(t,null,a,r):$r(t,e.child,a,r)}function Af(e,t,a,r,o){a=a.render;var i=t.ref;return kr(t,o),r=Tu(e,t,a,r,i,o),a=Ru(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(G&&a&&hu(t),t.flags|=1,Pe(e,t,r,o),t.child)}function Bf(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!ju(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Lg(e,t,i,r,o)):(e=Zi(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(n,r)&&e.ref===t.ref)return _t(e,t,o)}return t.flags|=1,e=pa(i,r),e.ref=t.ref,e.return=t,t.child=e}function Lg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Bo(i,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,_t(e,t,o)}return Ns(e,t,a,r,o)}function Sg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(wr,Ne),Ne|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(wr,Ne),Ne|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,q(wr,Ne),Ne|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,q(wr,Ne),Ne|=r;return Pe(e,t,o,a),t.child}function Cg(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Ns(e,t,a,r,o){var i=Oe(a)?Aa:Se.current;return i=Rr(t,i),kr(t,o),a=Tu(e,t,a,r,i,o),r=Ru(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,_t(e,t,o)):(G&&r&&hu(t),t.flags|=1,Pe(e,t,a,o),t.child)}function Ff(e,t,a,r,o){if(Oe(a)){var i=!0;dn(t)}else i=!1;if(kr(t,o),t.stateNode===null)Yi(e,t),bg(t,a,r),js(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=at(d):(d=Oe(a)?Aa:Se.current,d=Rr(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&$f(t,n,r,d),ta=!1;var x=t.memoizedState;n.state=x,mn(t,r,n,o),u=t.memoizedState,s!==r||x!==u||Fe.current||ta?(typeof p=="function"&&(Os(t,a,p,r),u=t.memoizedState),(s=ta||Ef(t,a,s,r,x,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,Zp(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:dt(t.type,s),n.props=d,h=t.pendingProps,x=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Oe(a)?Aa:Se.current,u=Rr(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||x!==u)&&$f(t,n,r,u),ta=!1,x=t.memoizedState,n.state=x,mn(t,r,n,o);var b=t.memoizedState;s!==h||x!==b||Fe.current||ta?(typeof y=="function"&&(Os(t,a,y,r),b=t.memoizedState),(d=ta||Ef(t,a,d,r,x,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return Hs(e,t,a,r,i,o)}function Hs(e,t,a,r,o,i){Cg(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Lf(t,a,!1),_t(e,t,i);r=t.stateNode,P1.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=$r(t,e.child,null,i),t.child=$r(t,null,s,i)):Pe(e,t,s,i),t.memoizedState=r.state,o&&Lf(t,a,!0),t.child}function Ig(e){var t=e.stateNode;t.pendingContext?wf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&wf(e,t.context,!1),Cu(e,t.containerInfo)}function Of(e,t,a,r,o){return Er(),xu(o),t.flags|=256,Pe(e,t,a,r),t.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function kg(e,t,a){var r=t.pendingProps,o=X.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),q(X,o&1),e===null)return Bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Dn(n,r,0,null),e=Da(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=qs(a),t.memoizedState=Us,e):Mu(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return T1(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=pa(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=pa(s,i):(i=Da(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?qs(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=Us,r}return i=e.child,e=i.sibling,r=pa(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function Mu(e,t){return t=Dn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function _i(e,t,a,r){return r!==null&&xu(r),$r(t,e.child,null,a),e=Mu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function T1(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=os(Error(C(422))),_i(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Dn({mode:"visible",children:r.children},o,0,null),i=Da(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&$r(t,e.child,null,n),t.child.memoizedState=qs(n),t.memoizedState=Us,i);if((t.mode&1)===0)return _i(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=os(i,r,void 0),_i(e,t,n,r)}if(s=(n&e.childLanes)!==0,Be||s){if(r=de,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,jt(e,o),gt(r,e,o,-1))}return Ou(),r=os(Error(C(421))),_i(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=N1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,He=ua(o.nextSibling),Ue=t,G=!0,ft=null,e!==null&&(Ze[Je++]=Dt,Ze[Je++]=At,Ze[Je++]=Ba,Dt=e.id,At=e.overflow,Ba=t),t=Mu(t,r.children),t.flags|=4096,t)}function jf(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fs(e.return,t,a)}function is(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function Pg(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Pe(e,t,r.children,a),r=X.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jf(e,a,t);else if(e.tag===19)jf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(X,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&hn(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),is(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&hn(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}is(t,!0,a,null,i);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Oa|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,a=pa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=pa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function R1(e,t,a){switch(t.tag){case 3:Ig(t),Er();break;case 5:Jp(t);break;case 1:Oe(t.type)&&dn(t);break;case 4:Cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;q(pn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(X,X.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?kg(e,t,a):(q(X,X.current&1),e=_t(e,t,a),e!==null?e.sibling:null);q(X,X.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Pg(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),q(X,X.current),r)break;return null;case 22:case 23:return t.lanes=0,Sg(e,t,a)}return _t(e,t,a)}var Tg,Ws,Rg,Eg;Tg=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};Ws=function(){};Rg=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ma(kt.current);var i=null;switch(a){case"input":o=ps(e,o),r=ps(e,r),i=[];break;case"select":o=K({},o,{value:void 0}),r=K({},r,{value:void 0}),i=[];break;case"textarea":o=hs(e,o),r=hs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=sn)}xs(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ro.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&W("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Eg=function(e,t,a,r){a!==r&&(t.flags|=4)};function po(e,t){if(!G)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function E1(e,t,a){var r=t.pendingProps;switch(vu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return Oe(t.type)&&un(),we(t),null;case 3:return r=t.stateNode,Mr(),V(Fe),V(Se),ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Oi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Js(ft),ft=null))),Ws(e,t),we(t),null;case 5:Iu(t);var o=Ma(No.current);if(a=t.type,e!==null&&t.stateNode!=null)Rg(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return we(t),null}if(e=Ma(kt.current),Oi(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Ct]=t,r[jo]=i,e=(t.mode&1)!==0,a){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(o=0;o<bo.length;o++)W(bo[o],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":Vc(r,i),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},W("invalid",r);break;case"textarea":Xc(r,i),W("invalid",r)}xs(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Fi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Fi(r.textContent,s,e),o=["children",""+s]):Ro.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&W("scroll",r)}switch(a){case"input":Ii(r),Gc(r,i,!0);break;case"textarea":Ii(r),Yc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=sn)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=op(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Ct]=t,e[jo]=r,Tg(e,t,!1,!1),t.stateNode=e;e:{switch(n=bs(a,r),a){case"dialog":W("cancel",e),W("close",e),o=r;break;case"iframe":case"object":case"embed":W("load",e),o=r;break;case"video":case"audio":for(o=0;o<bo.length;o++)W(bo[o],e);o=r;break;case"source":W("error",e),o=r;break;case"img":case"image":case"link":W("error",e),W("load",e),o=r;break;case"details":W("toggle",e),o=r;break;case"input":Vc(e,r),o=ps(e,r),W("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=K({},r,{value:void 0}),W("invalid",e);break;case"textarea":Xc(e,r),o=hs(e,r),W("invalid",e);break;default:o=r}xs(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?lp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&ip(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Eo(e,u):typeof u=="number"&&Eo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ro.hasOwnProperty(i)?u!=null&&i==="onScroll"&&W("scroll",e):u!=null&&au(e,i,u,n))}switch(a){case"input":Ii(e),Gc(e,r,!1);break;case"textarea":Ii(e),Yc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ga(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Lr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=sn)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return we(t),null;case 6:if(e&&t.stateNode!=null)Eg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(a=Ma(No.current),Ma(kt.current),Oi(t)){if(r=t.stateNode,a=t.memoizedProps,r[Ct]=t,(i=r.nodeValue!==a)&&(e=Ue,e!==null))switch(e.tag){case 3:Fi(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Fi(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Ct]=t,t.stateNode=r}return we(t),null;case 13:if(V(X),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(G&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Xp(),Er(),t.flags|=98560,i=!1;else if(i=Oi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Ct]=t}else Er(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;we(t),i=!1}else ft!==null&&(Js(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(X.current&1)!==0?le===0&&(le=3):Ou())),t.updateQueue!==null&&(t.flags|=4),we(t),null);case 4:return Mr(),Ws(e,t),e===null&&Fo(t.stateNode.containerInfo),we(t),null;case 10:return wu(t.type._context),we(t),null;case 17:return Oe(t.type)&&un(),we(t),null;case 19:if(V(X),i=t.memoizedState,i===null)return we(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)po(i,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=hn(e),n!==null){for(t.flags|=128,po(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return q(X,X.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>Dr&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304)}else{if(!r)if(e=hn(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!G)return we(t),null}else 2*ae()-i.renderingStartTime>Dr&&a!==1073741824&&(t.flags|=128,r=!0,po(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,a=X.current,q(X,r?a&1|2:a&1),t):(we(t),null);case 22:case 23:return Fu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ne&1073741824)!==0&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function $1(e,t){switch(vu(t),t.tag){case 1:return Oe(t.type)&&un(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mr(),V(Fe),V(Se),ku(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Iu(t),null;case 13:if(V(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Er()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(X),null;case 4:return Mr(),null;case 10:return wu(t.type._context),null;case 22:case 23:return Fu(),null;case 24:return null;default:return null}}var Ni=!1,Le=!1,M1=typeof WeakSet=="function"?WeakSet:Set,E=null;function yr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){Z(e,t,r)}else a.current=null}function Vs(e,t,a){try{a()}catch(r){Z(e,t,r)}}var _f=!1;function z1(e,t){if(Rs=on,e=Ap(),mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,x=null;t:for(;;){for(var y;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(y=h.firstChild)!==null;)x=h,h=y;for(;;){if(h===e)break t;if(x===a&&++d===o&&(s=n),x===i&&++p===r&&(u=n),(y=h.nextSibling)!==null)break;h=x,x=h.parentNode}h=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Es={focusedElem:e,selectionRange:a},on=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,$=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:dt(t.type,w),$);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(S){Z(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return b=_f,_f=!1,b}function ko(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Vs(t,a,i)}o=o.next}while(o!==r)}}function Mn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function Gs(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function $g(e){var t=e.alternate;t!==null&&(e.alternate=null,$g(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ct],delete t[jo],delete t[zs],delete t[m1],delete t[h1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Mg(e){return e.tag===5||e.tag===3||e.tag===4}function Nf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Mg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xs(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(e=e.child,e!==null))for(Xs(e,t,a),e=e.sibling;e!==null;)Xs(e,t,a),e=e.sibling}function Ys(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ys(e,t,a),e=e.sibling;e!==null;)Ys(e,t,a),e=e.sibling}var fe=null,ct=!1;function Jt(e,t,a){for(a=a.child;a!==null;)zg(e,t,a),a=a.sibling}function zg(e,t,a){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(Cn,a)}catch{}switch(a.tag){case 5:Le||yr(a,t);case 6:var r=fe,o=ct;fe=null,Jt(e,t,a),fe=r,ct=o,fe!==null&&(ct?(e=fe,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):fe.removeChild(a.stateNode));break;case 18:fe!==null&&(ct?(e=fe,a=a.stateNode,e.nodeType===8?Zl(e.parentNode,a):e.nodeType===1&&Zl(e,a),Do(e)):Zl(fe,a.stateNode));break;case 4:r=fe,o=ct,fe=a.stateNode.containerInfo,ct=!0,Jt(e,t,a),fe=r,ct=o;break;case 0:case 11:case 14:case 15:if(!Le&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&Vs(a,t,n),o=o.next}while(o!==r)}Jt(e,t,a);break;case 1:if(!Le&&(yr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){Z(a,t,s)}Jt(e,t,a);break;case 21:Jt(e,t,a);break;case 22:a.mode&1?(Le=(r=Le)||a.memoizedState!==null,Jt(e,t,a),Le=r):Jt(e,t,a);break;default:Jt(e,t,a)}}function Hf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new M1),t.forEach(function(r){var o=H1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function ut(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:fe=s.stateNode,ct=!1;break e;case 3:fe=s.stateNode.containerInfo,ct=!0;break e;case 4:fe=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(fe===null)throw Error(C(160));zg(i,n,o),fe=null,ct=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){Z(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dg(t,e),t=t.sibling}function Dg(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ut(t,e),Lt(e),r&4){try{ko(3,e,e.return),Mn(3,e)}catch(w){Z(e,e.return,w)}try{ko(5,e,e.return)}catch(w){Z(e,e.return,w)}}break;case 1:ut(t,e),Lt(e),r&512&&a!==null&&yr(a,a.return);break;case 5:if(ut(t,e),Lt(e),r&512&&a!==null&&yr(a,a.return),e.flags&32){var o=e.stateNode;try{Eo(o,"")}catch(w){Z(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&ap(o,i),bs(s,n);var d=bs(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?lp(o,h):p==="dangerouslySetInnerHTML"?ip(o,h):p==="children"?Eo(o,h):au(o,p,h,d)}switch(s){case"input":gs(o,i);break;case"textarea":rp(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Lr(o,!!i.multiple,y,!1):x!==!!i.multiple&&(i.defaultValue!=null?Lr(o,!!i.multiple,i.defaultValue,!0):Lr(o,!!i.multiple,i.multiple?[]:"",!1))}o[jo]=i}catch(w){Z(e,e.return,w)}}break;case 6:if(ut(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){Z(e,e.return,w)}}break;case 3:if(ut(t,e),Lt(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(w){Z(e,e.return,w)}break;case 4:ut(t,e),Lt(e);break;case 13:ut(t,e),Lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Au=ae())),r&4&&Hf(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Le=(d=Le)||p,ut(t,e),Le=d):ut(t,e),Lt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for(E=e,p=e.child;p!==null;){for(h=E=p;E!==null;){switch(x=E,y=x.child,x.tag){case 0:case 11:case 14:case 15:ko(4,x,x.return);break;case 1:yr(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,a=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){Z(r,a,w)}}break;case 5:yr(x,x.return);break;case 22:if(x.memoizedState!==null){qf(h);continue}}y!==null?(y.return=x,E=y):qf(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=np("display",n))}catch(w){Z(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){Z(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ut(t,e),Lt(e),r&4&&Hf(e);break;case 21:break;default:ut(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Mg(a)){var r=a;break e}a=a.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Eo(o,""),r.flags&=-33);var i=Nf(e);Ys(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=Nf(e);Xs(e,s,n);break;default:throw Error(C(161))}}catch(u){Z(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D1(e,t,a){E=e,Ag(e,t,a)}function Ag(e,t,a){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||Ni;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Le;s=Ni;var d=Le;if(Ni=n,(Le=u)&&!d)for(E=o;E!==null;)n=E,u=n.child,n.tag===22&&n.memoizedState!==null?Wf(o):u!==null?(u.return=n,E=u):Wf(o);for(;i!==null;)E=i,Ag(i,t,a),i=i.sibling;E=o,Ni=s,Le=d}Uf(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,E=i):Uf(e,t,a)}}function Uf(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Le||Mn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:dt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Pf(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Pf(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Do(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Le||t.flags&512&&Gs(t)}catch(x){Z(t,t.return,x)}}if(t===e){E=null;break}if(a=t.sibling,a!==null){a.return=t.return,E=a;break}E=t.return}}function qf(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}function Wf(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Mn(4,t)}catch(u){Z(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){Z(t,o,u)}}var i=t.return;try{Gs(t)}catch(u){Z(t,i,u)}break;case 5:var n=t.return;try{Gs(t)}catch(u){Z(t,n,u)}}}catch(u){Z(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var A1=Math.ceil,bn=Nt.ReactCurrentDispatcher,zu=Nt.ReactCurrentOwner,tt=Nt.ReactCurrentBatchConfig,B=0,de=null,oe=null,pe=0,Ne=0,wr=va(0),le=0,Wo=null,Oa=0,zn=0,Du=0,Po=null,Ae=null,Au=0,Dr=1/0,Mt=null,yn=!1,Ks=null,ca=null,Hi=!1,ia=null,wn=0,To=0,Qs=null,Ki=-1,Qi=0;function Te(){return(B&6)!==0?ae():Ki!==-1?Ki:Ki=ae()}function fa(e){return(e.mode&1)===0?1:(B&2)!==0&&pe!==0?pe&-pe:x1.transition!==null?(Qi===0&&(Qi=bp()),Qi):(e=j,e!==0||(e=window.event,e=e===void 0?16:kp(e.type)),e)}function gt(e,t,a,r){if(50<To)throw To=0,Qs=null,Error(C(185));Vo(e,a,r),((B&2)===0||e!==de)&&(e===de&&((B&2)===0&&(zn|=a),le===4&&ra(e,pe)),je(e,r),a===1&&B===0&&(t.mode&1)===0&&(Dr=ae()+500,Rn&&xa()))}function je(e,t){var a=e.callbackNode;yb(e,t);var r=rn(e,e===de?pe:0);if(r===0)a!==null&&Zc(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Zc(a),t===1)e.tag===0?v1(Vf.bind(null,e)):Wp(Vf.bind(null,e)),p1(function(){(B&6)===0&&xa()}),a=null;else{switch(yp(r)){case 1:a=lu;break;case 4:a=vp;break;case 16:a=an;break;case 536870912:a=xp;break;default:a=an}a=Ug(a,Bg.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function Bg(e,t){if(Ki=-1,Qi=0,(B&6)!==0)throw Error(C(327));var a=e.callbackNode;if(Pr()&&e.callbackNode!==a)return null;var r=rn(e,e===de?pe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ln(e,r);else{t=r;var o=B;B|=2;var i=Og();(de!==e||pe!==t)&&(Mt=null,Dr=ae()+500,za(e,t));do try{O1();break}catch(s){Fg(e,s)}while(!0);yu(),bn.current=i,B=o,oe!==null?t=0:(de=null,pe=0,t=le)}if(t!==0){if(t===2&&(o=Cs(e),o!==0&&(r=o,t=Zs(e,o))),t===1)throw a=Wo,za(e,0),ra(e,r),je(e,ae()),a;if(t===6)ra(e,r);else{if(o=e.current.alternate,(r&30)===0&&!B1(o)&&(t=Ln(e,r),t===2&&(i=Cs(e),i!==0&&(r=i,t=Zs(e,i))),t===1))throw a=Wo,za(e,0),ra(e,r),je(e,ae()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Ra(e,Ae,Mt);break;case 3:if(ra(e,r),(r&130023424)===r&&(t=Au+500-ae(),10<t)){if(rn(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ms(Ra.bind(null,e,Ae,Mt),t);break}Ra(e,Ae,Mt);break;case 4:if(ra(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-pt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A1(r/1960))-r,10<r){e.timeoutHandle=Ms(Ra.bind(null,e,Ae,Mt),r);break}Ra(e,Ae,Mt);break;case 5:Ra(e,Ae,Mt);break;default:throw Error(C(329))}}}return je(e,ae()),e.callbackNode===a?Bg.bind(null,e):null}function Zs(e,t){var a=Po;return e.current.memoizedState.isDehydrated&&(za(e,t).flags|=256),e=Ln(e,t),e!==2&&(t=Ae,Ae=a,t!==null&&Js(t)),e}function Js(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function B1(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!mt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ra(e,t){for(t&=~Du,t&=~zn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-pt(t),r=1<<a;e[a]=-1,t&=~r}}function Vf(e){if((B&6)!==0)throw Error(C(327));Pr();var t=rn(e,0);if((t&1)===0)return je(e,ae()),null;var a=Ln(e,t);if(e.tag!==0&&a===2){var r=Cs(e);r!==0&&(t=r,a=Zs(e,r))}if(a===1)throw a=Wo,za(e,0),ra(e,t),je(e,ae()),a;if(a===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ra(e,Ae,Mt),je(e,ae()),null}function Bu(e,t){var a=B;B|=1;try{return e(t)}finally{B=a,B===0&&(Dr=ae()+500,Rn&&xa())}}function ja(e){ia!==null&&ia.tag===0&&(B&6)===0&&Pr();var t=B;B|=1;var a=tt.transition,r=j;try{if(tt.transition=null,j=1,e)return e()}finally{j=r,tt.transition=a,B=t,(B&6)===0&&xa()}}function Fu(){Ne=wr.current,V(wr)}function za(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,f1(a)),oe!==null)for(a=oe.return;a!==null;){var r=a;switch(vu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&un();break;case 3:Mr(),V(Fe),V(Se),ku();break;case 5:Iu(r);break;case 4:Mr();break;case 13:V(X);break;case 19:V(X);break;case 10:wu(r.type._context);break;case 22:case 23:Fu()}a=a.return}if(de=e,oe=e=pa(e.current,null),pe=Ne=t,le=0,Wo=null,Du=zn=Oa=0,Ae=Po=null,$a!==null){for(t=0;t<$a.length;t++)if(a=$a[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}$a=null}return e}function Fg(e,t){do{var a=oe;try{if(yu(),Gi.current=xn,vn){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}vn=!1}if(Fa=0,ue=ne=Y=null,Io=!1,Ho=0,zu.current=null,a===null||a.return===null){le=1,Wo=t,oe=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=pe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=zf(n);if(y!==null){y.flags&=-257,Df(y,n,s,i,t),y.mode&1&&Mf(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){Mf(i,d,t),Ou();break e}u=Error(C(426))}}else if(G&&s.mode&1){var $=zf(n);if($!==null){($.flags&65536)===0&&($.flags|=256),Df($,n,s,i,t),xu(zr(u,s));break e}}i=u=zr(u,s),le!==4&&(le=2),Po===null?Po=[i]:Po.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=yg(i,u,t);kf(i,g);break e;case 1:s=u;var f=i.type,v=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ca===null||!ca.has(v)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=wg(i,s,t);kf(i,S);break e}}i=i.return}while(i!==null)}_g(a)}catch(P){t=P,oe===a&&a!==null&&(oe=a=a.return);continue}break}while(!0)}function Og(){var e=bn.current;return bn.current=xn,e===null?xn:e}function Ou(){(le===0||le===3||le===2)&&(le=4),de===null||(Oa&268435455)===0&&(zn&268435455)===0||ra(de,pe)}function Ln(e,t){var a=B;B|=2;var r=Og();(de!==e||pe!==t)&&(Mt=null,za(e,t));do try{F1();break}catch(o){Fg(e,o)}while(!0);if(yu(),B=a,bn.current=r,oe!==null)throw Error(C(261));return de=null,pe=0,le}function F1(){for(;oe!==null;)jg(oe)}function O1(){for(;oe!==null&&!cb();)jg(oe)}function jg(e){var t=Hg(e.alternate,e,Ne);e.memoizedProps=e.pendingProps,t===null?_g(e):oe=t,zu.current=null}function _g(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=E1(a,t,Ne),a!==null){oe=a;return}}else{if(a=$1(a,t),a!==null){a.flags&=32767,oe=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{le=6,oe=null;return}}if(t=t.sibling,t!==null){oe=t;return}oe=t=e}while(t!==null);le===0&&(le=5)}function Ra(e,t,a){var r=j,o=tt.transition;try{tt.transition=null,j=1,j1(e,t,a,r)}finally{tt.transition=o,j=r}return null}function j1(e,t,a,r){do Pr();while(ia!==null);if((B&6)!==0)throw Error(C(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(wb(e,i),e===de&&(oe=de=null,pe=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Hi||(Hi=!0,Ug(an,function(){return Pr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=tt.transition,tt.transition=null;var n=j;j=1;var s=B;B|=4,zu.current=null,z1(e,a),Dg(a,e),l1(Es),on=!!Rs,Es=Rs=null,e.current=a,D1(a,e,o),fb(),B=s,j=n,tt.transition=i}else e.current=a;if(Hi&&(Hi=!1,ia=e,wn=o),i=e.pendingLanes,i===0&&(ca=null),mb(a.stateNode,r),je(e,ae()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(yn)throw yn=!1,e=Ks,Ks=null,e;return(wn&1)!==0&&e.tag!==0&&Pr(),i=e.pendingLanes,(i&1)!==0?e===Qs?To++:(To=0,Qs=e):To=0,xa(),null}function Pr(){if(ia!==null){var e=yp(wn),t=tt.transition,a=j;try{if(tt.transition=null,j=16>e?16:e,ia===null)var r=!1;else{if(e=ia,ia=null,wn=0,(B&6)!==0)throw Error(C(331));var o=B;for(B|=4,E=e.current;E!==null;){var i=E,n=i.child;if((E.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(E=d;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:ko(8,p,i)}var h=p.child;if(h!==null)h.return=p,E=h;else for(;E!==null;){p=E;var x=p.sibling,y=p.return;if($g(p),p===d){E=null;break}if(x!==null){x.return=y,E=x;break}E=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}E=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,E=n;else e:for(;E!==null;){if(i=E,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:ko(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,E=g;break e}E=i.return}}var f=e.current;for(E=f;E!==null;){n=E;var v=n.child;if((n.subtreeFlags&2064)!==0&&v!==null)v.return=n,E=v;else e:for(n=f;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Mn(9,s)}}catch(P){Z(s,s.return,P)}if(s===n){E=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,E=S;break e}E=s.return}}if(B=o,xa(),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(Cn,e)}catch{}r=!0}return r}finally{j=a,tt.transition=t}}return!1}function Gf(e,t,a){t=zr(a,t),t=yg(e,t,1),e=da(e,t,1),t=Te(),e!==null&&(Vo(e,1,t),je(e,t))}function Z(e,t,a){if(e.tag===3)Gf(e,e,a);else for(;t!==null;){if(t.tag===3){Gf(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ca===null||!ca.has(r))){e=zr(a,e),e=wg(t,e,1),t=da(t,e,1),e=Te(),t!==null&&(Vo(t,1,e),je(t,e));break}}t=t.return}}function _1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&a,de===e&&(pe&a)===a&&(le===4||le===3&&(pe&130023424)===pe&&500>ae()-Au?za(e,0):Du|=a),je(e,t)}function Ng(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ti,Ti<<=1,(Ti&130023424)===0&&(Ti=4194304)));var a=Te();e=jt(e,t),e!==null&&(Vo(e,t,a),je(e,a))}function N1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ng(e,a)}function H1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Ng(e,a)}var Hg;Hg=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Be=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return Be=!1,R1(e,t,a);Be=(e.flags&131072)!==0}else Be=!1,G&&(t.flags&1048576)!==0&&Vp(t,fn,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yi(e,t),e=t.pendingProps;var o=Rr(t,Se.current);kr(t,a),o=Tu(null,t,r,e,o,a);var i=Ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Oe(r)?(i=!0,dn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Su(t),o.updater=$n,t.stateNode=o,o._reactInternals=t,js(t,r,e,a),t=Hs(null,t,r,!0,i,a)):(t.tag=0,G&&i&&hu(t),Pe(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(Yi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=q1(r),e=dt(r,e),o){case 0:t=Ns(null,t,r,e,a);break e;case 1:t=Ff(null,t,r,e,a);break e;case 11:t=Af(null,t,r,e,a);break e;case 14:t=Bf(null,t,r,dt(r.type,e),a);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Ns(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Ff(e,t,r,o,a);case 3:e:{if(Ig(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Zp(e,t),mn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=zr(Error(C(423)),t),t=Of(e,t,r,a,o);break e}else if(r!==o){o=zr(Error(C(424)),t),t=Of(e,t,r,a,o);break e}else for(He=ua(t.stateNode.containerInfo.firstChild),Ue=t,G=!0,ft=null,a=Kp(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Er(),r===o){t=_t(e,t,a);break e}Pe(e,t,r,a)}t=t.child}return t;case 5:return Jp(t),e===null&&Bs(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,$s(r,o)?n=null:i!==null&&$s(r,i)&&(t.flags|=32),Cg(e,t),Pe(e,t,n,a),t.child;case 6:return e===null&&Bs(t),null;case 13:return kg(e,t,a);case 4:return Cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$r(t,null,r,a):Pe(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Af(e,t,r,o,a);case 7:return Pe(e,t,t.pendingProps,a),t.child;case 8:return Pe(e,t,t.pendingProps.children,a),t.child;case 12:return Pe(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,q(pn,r._currentValue),r._currentValue=n,i!==null)if(mt(i.value,n)){if(i.children===o.children&&!Fe.current){t=_t(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Bt(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Fs(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(C(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Fs(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Pe(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,kr(t,a),o=at(o),r=r(o),t.flags|=1,Pe(e,t,r,a),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),Bf(e,t,r,o,a);case 15:return Lg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Yi(e,t),t.tag=1,Oe(r)?(e=!0,dn(t)):e=!1,kr(t,a),bg(t,r,o),js(t,r,o,a),Hs(null,t,r,!0,e,a);case 19:return Pg(e,t,a);case 22:return Sg(e,t,a)}throw Error(C(156,t.tag))};function Ug(e,t){return hp(e,t)}function U1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,r){return new U1(e,t,a,r)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function q1(e){if(typeof e=="function")return ju(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ou)return 11;if(e===iu)return 14}return 2}function pa(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function Zi(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")ju(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case cr:return Da(a.children,o,i,t);case ru:n=8,o|=8;break;case us:return e=et(12,a,t,o|2),e.elementType=us,e.lanes=i,e;case ds:return e=et(13,a,t,o),e.elementType=ds,e.lanes=i,e;case cs:return e=et(19,a,t,o),e.elementType=cs,e.lanes=i,e;case Jf:return Dn(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qf:n=10;break e;case Zf:n=9;break e;case ou:n=11;break e;case iu:n=14;break e;case ea:n=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=et(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Da(e,t,a,r){return e=et(7,e,r,t),e.lanes=a,e}function Dn(e,t,a,r){return e=et(22,e,r,t),e.elementType=Jf,e.lanes=a,e.stateNode={isHidden:!1},e}function ns(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function ls(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function W1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ql(0),this.expirationTimes=ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _u(e,t,a,r,o,i,n,s,u){return e=new W1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=et(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Su(i),e}function V1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function qg(e){if(!e)return ma;e=e._reactInternals;e:{if(Na(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Oe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var a=e.type;if(Oe(a))return qp(e,a,t)}return t}function Wg(e,t,a,r,o,i,n,s,u){return e=_u(a,r,!0,e,o,i,n,s,u),e.context=qg(null),a=e.current,r=Te(),o=fa(a),i=Bt(r,o),i.callback=t??null,da(a,i,o),e.current.lanes=o,Vo(e,o,r),je(e,r),e}function An(e,t,a,r){var o=t.current,i=Te(),n=fa(o);return a=qg(a),t.context===null?t.context=a:t.pendingContext=a,t=Bt(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=da(o,t,n),e!==null&&(gt(e,o,n,i),Vi(e,o,n)),n}function Sn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Nu(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function G1(){return null}var Vg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hu(e){this._internalRoot=e}Bn.prototype.render=Hu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));An(e,t,null,null)};Bn.prototype.unmount=Hu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ja(function(){An(null,e,null,null)}),t[Ot]=null}};function Bn(e){this._internalRoot=e}Bn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<aa.length&&t!==0&&t<aa[a].priority;a++);aa.splice(a,0,e),a===0&&Ip(e)}};function Uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Fn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yf(){}function X1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Sn(n);i.call(d)}}var n=Wg(t,r,e,0,null,!1,!1,"",Yf);return e._reactRootContainer=n,e[Ot]=n.current,Fo(e.nodeType===8?e.parentNode:e),ja(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Sn(u);s.call(d)}}var u=_u(e,0,!1,null,null,!1,!1,"",Yf);return e._reactRootContainer=u,e[Ot]=u.current,Fo(e.nodeType===8?e.parentNode:e),ja(function(){An(t,u,a,r)}),u}function On(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Sn(n);s.call(u)}}An(t,n,e,o)}else n=X1(a,t,e,o,r);return Sn(n)}wp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=xo(t.pendingLanes);a!==0&&(su(t,a|1),je(t,ae()),(B&6)===0&&(Dr=ae()+500,xa()))}break;case 13:ja(function(){var r=jt(e,1);if(r!==null){var o=Te();gt(r,e,1,o)}}),Nu(e,1)}};uu=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var a=Te();gt(t,e,134217728,a)}Nu(e,134217728)}};Lp=function(e){if(e.tag===13){var t=fa(e),a=jt(e,t);if(a!==null){var r=Te();gt(a,e,t,r)}Nu(e,t)}};Sp=function(){return j};Cp=function(e,t){var a=j;try{return j=e,t()}finally{j=a}};ws=function(e,t,a){switch(t){case"input":if(gs(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Tn(r);if(!o)throw Error(C(90));tp(r),gs(r,o)}}}break;case"textarea":rp(e,a);break;case"select":t=a.value,t!=null&&Lr(e,!!a.multiple,t,!1)}};dp=Bu;cp=ja;var Y1={usingClientEntryPoint:!1,Events:[Xo,mr,Tn,sp,up,Bu]},go={findFiberByHostInstance:Ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K1={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=gp(e),e===null?null:e.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||G1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(mo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!mo.isDisabled&&mo.supportsFiber))try{Cn=mo.inject(K1),It=mo}catch{}var mo;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Y1;Ve.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uu(t))throw Error(C(200));return V1(e,t,null,a)};Ve.createRoot=function(e,t){if(!Uu(e))throw Error(C(299));var a=!1,r="",o=Vg;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_u(e,1,!1,null,null,a,!1,r,o),e[Ot]=t.current,Fo(e.nodeType===8?e.parentNode:e),new Hu(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=gp(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return ja(e)};Ve.hydrate=function(e,t,a){if(!Fn(t))throw Error(C(200));return On(null,e,t,!0,a)};Ve.hydrateRoot=function(e,t,a){if(!Uu(e))throw Error(C(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=Vg;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Wg(t,null,e,1,a??null,o,!1,i,n),e[Ot]=t.current,Fo(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new Bn(t)};Ve.render=function(e,t,a){if(!Fn(t))throw Error(C(200));return On(null,e,t,!1,a)};Ve.unmountComponentAtNode=function(e){if(!Fn(e))throw Error(C(40));return e._reactRootContainer?(ja(function(){On(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Ve.unstable_batchedUpdates=Bu;Ve.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!Fn(a))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return On(e,t,a,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426"});var ba=$t((fC,Yg)=>{"use strict";function Xg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xg)}catch(e){console.error(e)}}Xg(),Yg.exports=Gg()});var Qg=$t(qu=>{"use strict";var Kg=ba();qu.createRoot=Kg.createRoot,qu.hydrateRoot=Kg.hydrateRoot;var pC});var ih=$t(Jn=>{"use strict";var Hy=I(),Uy=Symbol.for("react.element"),qy=Symbol.for("react.fragment"),Wy=Object.prototype.hasOwnProperty,Vy=Hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function oh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)Wy.call(t,r)&&!Gy.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Uy,type:e,key:i,ref:n,props:o,_owner:Vy.current}}Jn.Fragment=qy;Jn.jsx=oh;Jn.jsxs=oh});var m=$t((sI,nh)=>{"use strict";nh.exports=ih()});var k0=c(Qg(),1);var se=c(I());var _="-ms-",Ha="-moz-",F="-webkit-",jn="comm",ya="rule",Fr="decl";var Zg="@import";var Jg="@namespace",_n="@keyframes";var em="@layer";var Wu=Math.abs,Ko=String.fromCharCode,Qo=Object.assign;function tm(e,t){return Q(e,0)^45?(((t<<2^Q(e,0))<<2^Q(e,1))<<2^Q(e,2))<<2^Q(e,3):0}function Nn(e){return e.trim()}function ht(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,a){return e.replace(t,a)}function Or(e,t,a){return e.indexOf(t,a)}function Q(e,t){return e.charCodeAt(t)|0}function vt(e,t,a){return e.slice(t,a)}function Ce(e){return e.length}function Hn(e){return e.length}function Ua(e,t){return t.push(e),e}function am(e,t){return e.map(t).join("")}function Vu(e,t){return e.filter(function(a){return!ht(a,t)})}var Un=1,jr=1,rm=0,ot=0,ie=0,Nr="";function Zo(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:Un,column:jr,length:n,return:"",siblings:s}}function Ht(e,t){return Qo(Zo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function qa(e){for(;e.root;)e=Ht(e.root,{children:[e]});Ua(e,e.siblings)}function om(){return ie}function im(){return ie=ot>0?Q(Nr,--ot):0,jr--,ie===10&&(jr=1,Un--),ie}function it(){return ie=ot<rm?Q(Nr,ot++):0,jr++,ie===10&&(jr=1,Un++),ie}function Ut(){return Q(Nr,ot)}function Jo(){return ot}function qn(e,t){return vt(Nr,e,t)}function _r(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function nm(e){return Un=jr=1,rm=Ce(Nr=e),ot=0,[]}function lm(e){return Nr="",e}function Wn(e){return Nn(qn(ot-1,Gu(e===91?e+2:e===40?e+1:e)))}function sm(e){for(;(ie=Ut())&&ie<33;)it();return _r(e)>2||_r(ie)>3?"":" "}function um(e,t){for(;--t&&it()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return qn(e,Jo()+(t<6&&Ut()==32&&it()==32))}function Gu(e){for(;it();)switch(ie){case e:return ot;case 34:case 39:e!==34&&e!==39&&Gu(ie);break;case 40:e===41&&Gu(e);break;case 92:it();break}return ot}function dm(e,t){for(;it()&&e+ie!==57;)if(e+ie===84&&Ut()===47)break;return"/*"+qn(t,ot-1)+"*"+Ko(e===47?e:it())}function cm(e){for(;!_r(Ut());)it();return qn(e,ot)}function gm(e){return lm(Vn("",null,null,null,[""],e=nm(e),0,[0],e))}function Vn(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,x=0,y=0,b=0,w=1,$=1,g=1,f=0,v="",S=o,P=i,R=r,k=v;$;)switch(b=f,f=it()){case 40:if(b!=108&&Q(k,h-1)==58){Or(k+=M(Wn(f),"&","&\f"),"&\f",Wu(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Wn(f);break;case 9:case 10:case 13:case 32:k+=sm(b);break;case 92:k+=um(Jo()-1,7);continue;case 47:switch(Ut()){case 42:case 47:Ua(Q1(dm(it(),Jo()),t,a,u),u),(_r(b||1)==5||_r(Ut()||1)==5)&&Ce(k)&&vt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=Ce(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:$=0;case 59+p:g==-1&&(k=M(k,/\f/g,"")),y>0&&(Ce(k)-h||w===0&&b===47)&&Ua(y>32?pm(k+";",r,a,h-1,u):pm(M(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(Ua(R=fm(k,t,a,d,p,o,s,v,S=[],P=[],h,i),i),f===123)if(p===0)Vn(k,t,R,R,S,i,h,s,P);else{switch(x){case 99:if(Q(k,3)===110)break;case 108:if(Q(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?Vn(e,R,R,r&&Ua(fm(e,R,R,0,0,o,s,v,o,S=[],h,P),P),o,P,h,s,r?S:P):Vn(k,R,R,R,[""],P,0,s,P)}}d=p=y=0,w=g=1,v=k="",h=n;break;case 58:h=1+Ce(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&im()==125)continue}switch(k+=Ko(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ce(k)-1)*g,g=1;break;case 64:Ut()===45&&(k+=Wn(it())),x=Ut(),p=h=Ce(v=k+=cm(Jo())),f++;break;case 45:b===45&&Ce(k)==2&&(w=0)}}return i}function fm(e,t,a,r,o,i,n,s,u,d,p,h){for(var x=o-1,y=o===0?i:[""],b=Hn(y),w=0,$=0,g=0;w<r;++w)for(var f=0,v=vt(e,x+1,x=Wu($=n[w])),S=e;f<b;++f)(S=Nn($>0?y[f]+" "+v:M(v,/&\f/g,y[f])))&&(u[g++]=S);return Zo(e,t,a,o===0?ya:s,u,d,p,h)}function Q1(e,t,a,r){return Zo(e,t,a,jn,Ko(om()),vt(e,2,-2),0,r)}function pm(e,t,a,r,o){return Zo(e,t,a,Fr,vt(e,0,r),vt(e,r+1,-1),r,o)}function Xu(e,t,a){switch(tm(e,t)){case 5103:return F+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return F+e+e;case 4855:return F+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Ha+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return F+e+Ha+e+_+e+e;case 5936:switch(Q(e,t+11)){case 114:return F+e+_+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return F+e+_+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return F+e+_+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return F+e+_+e+e;case 6165:return F+e+_+"flex-"+e+e;case 5187:return F+e+M(e,/(\w+).+(:[^]+)/,F+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return F+e+_+"flex-item-"+M(e,/flex-|-self/g,"")+(ht(e,/flex-|baseline/)?"":_+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return F+e+_+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return F+e+_+M(e,"shrink","negative")+e;case 5292:return F+e+_+M(e,"basis","preferred-size")+e;case 6060:return F+"box-"+M(e,"-grow","")+F+e+_+M(e,"grow","positive")+e;case 4554:return F+M(e,/([^-])(transform)/g,"$1"+F+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,F+"$1"),/(image-set)/,F+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,F+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,F+"box-pack:$3"+_+"flex-pack:$3"),/space-between/,"justify")+F+e+e;case 4200:if(!ht(e,/flex-|baseline/))return _+"grid-column-align"+vt(e,t)+e;break;case 2592:case 3360:return _+M(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,ht(r.props,/grid-\w+-end/)})?~Or(e+(a=a[t].value),"span",0)?e:_+M(e,"-start","")+e+_+"grid-row-span:"+(~Or(a,"span",0)?ht(a,/\d+/):+ht(a,/\d+/)-+ht(e,/\d+/))+";":_+M(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return ht(r.props,/grid-\w+-start/)})?e:_+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,F+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ce(e)-1-t>6)switch(Q(e,t+1)){case 109:if(Q(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+F+"$2-$3$1"+Ha+(Q(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Or(e,"stretch",0)?Xu(M(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return _+o+":"+i+d+(n?_+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Q(e,t+6)===121)return M(e,":",":"+F)+e;break;case 6444:switch(Q(e,Q(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+F+(Q(e,14)===45?"inline-":"")+"box$3$1"+F+"$2$3$1"+_+"$2box$3")+e;case 100:return M(e,":",":"+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Hr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function mm(e,t,a,r){switch(e.type){case em:if(e.children.length)break;case Zg:case Jg:case Fr:return e.return=e.return||e.value;case jn:return"";case _n:return e.return=e.value+"{"+Hr(e.children,r)+"}";case ya:if(!Ce(e.value=e.props.join(",")))return""}return Ce(a=Hr(e.children,r))?e.return=e.value+"{"+a+"}":""}function hm(e){var t=Hn(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function vm(e){return function(t){t.root||(t=t.return)&&e(t)}}function xm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Fr:e.return=Xu(e.value,e.length,a);return;case _n:return Hr([Ht(e,{value:M(e.value,"@","@"+F)})],r);case ya:if(e.length)return am(a=e.props,function(o){switch(ht(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":qa(Ht(e,{props:[M(o,/:(read-\w+)/,":"+Ha+"$1")]})),qa(Ht(e,{props:[o]})),Qo(e,{props:Vu(a,r)});break;case"::placeholder":qa(Ht(e,{props:[M(o,/:(plac\w+)/,":"+F+"input-$1")]})),qa(Ht(e,{props:[M(o,/:(plac\w+)/,":"+Ha+"$1")]})),qa(Ht(e,{props:[M(o,/:(plac\w+)/,_+"input-$1")]})),qa(Ht(e,{props:[o]})),Qo(e,{props:Vu(a,r)});break}return""})}}var Yu,Ku,qt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Rm="active",Em="data-styled-version",Qn="6.4.3",ud=`/*!sc*/
`,ri=typeof window<"u"&&typeof document<"u";function bm(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var Z1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(Ku=(Yu=bm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&Yu!==void 0?Yu:bm("SC_DISABLE_SPEEDY"))!==null&&Ku!==void 0?Ku:typeof process<"u"&&process.env!==void 0&&!1),$m="sc-keyframes-",J1={};function ni(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var UC=1<<30,Gn=new Map,Yn=new Map,Xn=1,ti=e=>{if(Gn.has(e))return Gn.get(e);for(;Yn.has(Xn);)Xn++;let t=Xn++;return Gn.set(e,t),Yn.set(t,e),t},ey=e=>Yn.get(e),ty=(e,t)=>{Xn=t+1,Gn.set(e,t),Yn.set(t,e)};var dd=Object.freeze([]),Ur=Object.freeze({});function Mm(e,t,a=Ur){return e.theme!==a.theme&&e.theme||t||a.theme}var ay=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ry=/(^-|-$)/g;function zm(e){return e.replace(ay,"-").replace(ry,"")}var oy=/(a)(d)/gi,ym=e=>String.fromCharCode(e+(e>25?39:97));function cd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=ym(t%52)+a;return(ym(t%52)+a).replace(oy,"$1-$2")}var ed=5381,Va=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Dm=e=>Va(ed,e);function fd(e){return cd(Dm(e)>>>0)}function iy(e){return e.displayName||e.name||"Component"}function td(e){return typeof e=="string"&&!0}function ny(e){return td(e)?`styled.${e}`:`Styled(${iy(e)})`}var Am=Symbol.for("react.memo"),ly=Symbol.for("react.forward_ref"),sy={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},uy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},dy={[ly]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Am]:Bm};function wm(e){return("type"in(t=e)&&t.type.$$typeof)===Am?Bm:"$$typeof"in e?dy[e.$$typeof]:sy;var t}var cy=Object.defineProperty,fy=Object.getOwnPropertyNames,py=Object.getOwnPropertySymbols,gy=Object.getOwnPropertyDescriptor,my=Object.getPrototypeOf,hy=Object.prototype;function Fm(e,t,a){if(typeof t!="string"){let r=my(t);r&&r!==hy&&Fm(e,r,a);let o=fy(t).concat(py(t)),i=wm(e),n=wm(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in uy||a&&a[u]||n&&u in n||i&&u in i)){let d=gy(t,u);try{cy(e,u,d)}catch{}}}}return e}function li(e){return typeof e=="function"}var vy=Symbol.for("react.forward_ref");function pd(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===vy&&"styledComponentId"in e}function ai(e,t){return e&&t?e+" "+t:e||t||""}function Kn(e,t){return e.join(t||"")}function oi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ad(e,t,a=!1){if(!a&&!oi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=ad(e[r],t[r]);else if(oi(t))for(let r in t)e[r]=ad(e[r],t[r]);return e}function gd(e,t){Object.defineProperty(e,"toString",{value:t})}var xy=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw ni(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+ud;return t}},by=`style[${qt}][${Em}="${Qn}"]`,yy=new RegExp(`^${qt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Lm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,rd=e=>{if(!e)return document;if(Lm(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Lm(t))return t}return document},wy=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},Ly=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(ud),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(yy);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(ty(p,d),wy(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},Qu=e=>{let t=rd(e.options.target).querySelectorAll(by);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(qt)!==Rm&&(Ly(e,o),o.parentNode&&o.parentNode.removeChild(o))}},ei=!1;function Sy(){if(ei!==!1)return ei;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return ei=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return ei=t.getAttribute("content")||void 0}return ei=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var Om=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${qt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(qt,Rm),o.setAttribute(Em,Qn);let s=t||Sy();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},Cy=class{constructor(e,t){this.element=Om(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw ni(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Iy=class{constructor(e,t){this.element=Om(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Sm=ri,ky={isServer:!ri,useCSSOMInjection:!Z1},ii=class e{static registerId(t){return ti(t)}constructor(t=Ur,a={},r){this.options=Object.assign(Object.assign({},ky),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&ri&&Sm&&(Sm=!1,Qu(this)),gd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=ey(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let x=qt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=h+x+'{content:"'+y+'"}'+ud}return s})(this))}rehydrate(){!this.server&&ri&&Qu(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&ri&&t.target!==this.options.target&&rd(this.options.target)!==rd(t.target)&&Qu(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Cy(r,o):new Iy(r,o))(this.options),new xy(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){ti(t),t.startsWith($m)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(ti(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(ti(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},jm=new WeakSet,Py={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Ty(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Py||e.startsWith("--")?String(t).trim():t+"px"}var Wa=47;function Cm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var _m=Symbol.for("sc-keyframes");function Ry(e){return typeof e=="object"&&e!==null&&_m in e}function Nm(e){return li(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Hm=e=>e==null||e===!1||e==="",Ey=Symbol.for("react.client.reference");function Im(e){return e.$$typeof===Ey}function Um(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!Hm(r)&&(Array.isArray(r)&&jm.has(r)||li(r)?t.push(Cm(a)+":",r,";"):oi(r)?(t.push(a+" {"),Um(r,t),t.push("}")):t.push(Cm(a)+": "+Ty(a,r)+";"))}}function wa(e,t,a,r,o=[]){if(Hm(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Im(e))return o;if(Nm(e)&&t){let n=e(t);return wa(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)wa(e[n],t,a,r,o);return o}return pd(e)?(o.push(`.${e.styledComponentId}`),o):Ry(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):Im(e)?o:oi(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Um(e,o),o):(o.push(e.toString()),o)}var $y=Dm(Qn),od=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Va($y,a),this.baseStyle=r,ii.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(Nm(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=Kn(wa(u,t,a,r)))}else i+=Kn(wa(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=cd(Va(Va(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=ai(o,s)}}return o}},My=/&/g;function qm(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Zu(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==Wa||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===Wa&&(n=!1,u++);else if(d!==34&&d!==39||qm(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function Wm(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Wm(i.children,t)}return e}function Vm({options:e=Ur,plugins:t=dd}=Ur){let a,r,o,i=(x,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:x,n=t.slice();n.push(x=>{x.type===ya&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(My,r).replace(o,i))}),e.prefix&&n.push(xm),n.push(mm);let s=[],u=hm(n.concat(vm(x=>s.push(x)))),d=(x,y="",b="",w="&")=>{a=w,r=y,o=void 0;let $=(function(f){let v=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!v&&!S)return f;if(!v)return Zu(f);let P=f.length,R="",k=0,T=0,H=0,z=0,te=0,Ia=!1;for(;T<P;){let ve=f.charCodeAt(T);if(ve!==34&&ve!==39||qm(f,T))if(H===0)if(ve===Wa&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==Wa);)T++;T+=2}else if(ve!==40)if(ve!==41)if(z>0)T++;else if(ve===42&&T+1<P&&f.charCodeAt(T+1)===Wa)R+=f.substring(k,T),T+=2,k=T,Ia=!0;else if(ve===Wa&&T+1<P&&f.charCodeAt(T+1)===Wa){for(R+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,Ia=!0}else ve===123?te++:ve===125&&te--,T++;else z>0&&z--,T++;else z++,T++;else T++;else H===0?H=ve:H===ve&&(H=0),T++}return Ia?(k<P&&(R+=f.substring(k)),te===0?R:Zu(R)):te===0?f:Zu(f)})(x),g=gm(b||y?b+" "+y+" { "+$+" }":$);return e.namespace&&(g=Wm(g,e.namespace)),s=[],Hr(g,u),s},p=e,h=ed;for(let x=0;x<t.length;x++)t[x].name||ni(15),h=Va(h,t[x].name);return p?.namespace&&(h=Va(h,p.namespace)),p?.prefix&&(h=Va(h,"p")),d.hash=h!==ed?h.toString():"",d}var zy=new ii,id=Vm(),md=se.default.createContext({shouldForwardProp:void 0,styleSheet:zy,stylis:id,stylisPlugins:void 0}),qC=md.Consumer;function hd(){return se.default.useContext(md)}function Gm(e){var t;let a=hd(),{styleSheet:r}=a,o=se.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=se.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:Vm({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=se.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return se.default.createElement(md.Provider,{value:u},e.children)}var vd=se.default.createContext(void 0),WC=vd.Consumer;var km=Object.prototype.hasOwnProperty,Ju={};function Dy(e,t){let a=typeof e!="string"?"sc":zm(e);Ju[a]=(Ju[a]||0)+1;let r=a+"-"+fd(Qn+a+Ju[a]);return t?t+"-"+r:r}function Ay(e,t,a){let r=pd(e),o=e,i=!td(e),{attrs:n=dd,componentId:s=Dy(t.displayName,t.parentComponentId),displayName:u=ny(e)}=t,d=t.displayName&&t.componentId?zm(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let $=t.shouldForwardProp;h=(g,f)=>w(g,f)&&$(g,f)}else h=w}let x=new od(a,d,r?o.componentStyle:void 0);function y(w,$){return(function(g,f,v){let{attrs:S,componentStyle:P,defaultProps:R,foldedComponentIds:k,styledComponentId:T,target:H}=g,z=se.default.useContext(vd),te=hd(),Ia=g.shouldForwardProp||te.shouldForwardProp,ve=Mm(f,z,R)||Ur,Yt,to;{let Kt=se.default.useRef(null),lt=Kt.current;if(lt!==null&&lt[1]===ve&&lt[2]===te.styleSheet&&lt[3]===te.stylis&&lt[7]===P&&(function(nr,_e,ze){let De=nr,xe=_e,ao=0;for(let ka in xe)if(km.call(xe,ka)&&(ao++,De[ka]!==xe[ka]))return!1;return ao===ze})(lt[0],f,lt[4]))Yt=lt[5],to=lt[6];else{Yt=(function(_e,ze,De){let xe=Object.assign(Object.assign({},ze),{className:void 0,theme:De}),ao=_e.length>1;for(let ka=0;ka<_e.length;ka++){let Il=_e[ka],mi=li(Il)?Il(ao?Object.assign({},xe):xe):Il;for(let Qt in mi)Qt==="className"?xe.className=ai(xe.className,mi[Qt]):Qt==="style"?xe.style=Object.assign(Object.assign({},xe.style),mi[Qt]):Qt in ze&&ze[Qt]===void 0||(xe[Qt]=mi[Qt])}return"className"in ze&&typeof ze.className=="string"&&(xe.className=ai(xe.className,ze.className)),xe})(S,f,ve),to=(function(_e,ze,De,xe){return _e.generateAndInjectStyles(ze,De,xe)})(P,Yt,te.styleSheet,te.stylis);let nr=0;for(let _e in f)km.call(f,_e)&&nr++;Kt.current=[f,ve,te.styleSheet,te.stylis,nr,Yt,to,P]}}let gi=Yt.as||H,Sl=(function(Kt,lt,nr,_e){let ze={};for(let De in Kt)Kt[De]===void 0||De[0]==="$"||De==="as"||De==="theme"&&Kt.theme===nr||(De==="forwardedAs"?ze.as=Kt.forwardedAs:_e&&!_e(De,lt)||(ze[De]=Kt[De]));return ze})(Yt,gi,ve,Ia),Cl=ai(k,T);return to&&(Cl+=" "+to),Yt.className&&(Cl+=" "+Yt.className),Sl[td(gi)&&gi.includes("-")?"class":"className"]=Cl,v&&(Sl.ref=v),(0,se.createElement)(gi,Sl)})(b,w,$)}y.displayName=u;let b=se.default.forwardRef(y);return b.attrs=p,b.componentStyle=x,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?ai(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function($,...g){for(let f of g)ad($,f,!0);return $})({},o.defaultProps,w):w}}),gd(b,()=>`.${b.styledComponentId}`),i&&Fm(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var By=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Pm(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var Tm=e=>(jm.add(e),e);function L(e,...t){if(li(e)||oi(e))return Tm(wa(Pm(dd,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?wa(a):Tm(wa(Pm(a,t)))}function nd(e,t,a=Ur){if(!t)throw ni(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>nd(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>nd(e,t,Object.assign(Object.assign({},a),o)),r}var Xm=e=>nd(Ay,e),l=Xm;By.forEach(e=>{l[e]=Xm(e)});var ld=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(li(i)&&!pd(i))return!1}return!0})(t),ii.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=Kn(wa(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function Ym(e,...t){let a=L(e,...t),r=`sc-global-${fd(JSON.stringify(a))}`,o=new ld(a,r),i=s=>{let u=hd(),d=se.default.useContext(vd),p;{let h=se.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],x=se.default.useRef(o);se.default.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),se.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,J1,d,h);else{let x=Object.assign(Object.assign({},u),{theme:Mm(u,p,i.defaultProps)});o.renderStyles(s,x,d,h)}}return se.default.memo(i)}var Km,sd=class{constructor(t,a){this[Km]=!0,this.inject=(r,o=id)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=$m+t,this.rules=a,ti(this.id),gd(this,()=>{throw ni(12,String(this.name))})}getName(t=id){return t.hash?this.name+cd(+t.hash>>>0):this.name}};function Pt(e,...t){let a=Kn(L(e,...t)),r=fd(a);return new sd(r,a)}Km=_m;var VC=`__sc-${qt}__`;var GC=`:not(style[${qt}])`,XC=`style[${qt}]`;var Qm=`/* Generated from src/tokens. Do not edit directly. */

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
`;var Ga=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Xa=e=>e.comments[0]?.body??"",Zm=e=>e.comments[0]?.author??"";function Jm(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:Ga(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}var eh="fbw:author",Zn=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;Jm(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.applySeedOverrides(),this.notify()}applySeedOverrides(){this.seedThreads=this.rawSeeds.filter(t=>!this.overrides[t.id]?.hidden).map(t=>{let a=this.overrides[t.id];return a?{...t,origin:"seed",resolved:a.resolved??t.resolved,comments:[...t.comments,...a.addedComments??[]]}:{...t,origin:"seed"}})}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r){let o={id:Ga(),author:a,body:r,createdAt:new Date().toISOString()};if(this.isSeed(t)){let i=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...i.addedComments??[],o]});return}this.threads=this.threads.map(i=>i.id===t?{...i,comments:[...i.comments,o]}:i),this.persist()}canRemoveComment(t,a){if(this.isSeed(t))return(this.overrides[t]?.addedComments??[]).some(o=>o.id===a);let r=this.threads.find(o=>o.id===t);return!!r&&r.comments.findIndex(o=>o.id===a)>0}removeComment(t,a){if(this.canRemoveComment(t,a)){if(this.isSeed(t)){let r=(this.overrides[t]?.addedComments??[]).filter(o=>o.id!==a);this.overrideSeed(t,{addedComments:r});return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r),this.persist()}}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.applySeedOverrides(),this.notify()}get author(){return localStorage.getItem(eh)??""}set author(t){localStorage.setItem(eh,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){localStorage.setItem(this.threadsKey,JSON.stringify(this.threads)),this.notify()}notify(){this.listeners.forEach(t=>t())}};var qr="fbw-host",Oy="#2563eb",xd="fbw:pending-jump",jy=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function _y(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${jy(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function th(e){return{page:location.pathname,selector:_y(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ya(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==qr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function Ny(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${Oy}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function bd(e){if(e.page!==location.pathname)return!1;let t=Ya(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>Ny(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function ah(e){sessionStorage.setItem(xd,JSON.stringify(e)),location.assign(e.page)}function rh(){let e=sessionStorage.getItem(xd);if(e){sessionStorage.removeItem(xd);try{let t=JSON.parse(e);setTimeout(()=>bd(t),400)}catch{}}}var pi=c(I(),1);var Td=c(I(),1),Rd=c(I(),1),Ed=c(I(),1),$d=c(I(),1),il=c(I(),1),ow=c(I(),1),yh=c(I(),1),wh=c(I(),1),Lh=c(I(),1),di=c(I(),1),cw=c(I(),1);var fw=c(m(),1),pw=c(m(),1);var zh=c(m(),1);var Dh=c(m(),1);var Ah=c(m(),1);var Fw=c(m(),1),Fh=c(m(),1);var jw=c(m(),1);var _w=c(m(),1),Nw=c(m(),1),Hw=c(m(),1),Oh=c(m(),1),Uw=c(m(),1),_h=c(I(),1);var Hh=c(m(),1),Uh=c(I(),1),qh=c(m(),1);var Wh=c(I(),1);var Vh=c(m(),1);var Gh=c(m(),1),Ad=c(I(),1);var Bd=c(m(),1),Yh=c(I(),1);var Kh=c(m(),1),Qh=c(I(),1);var Zh=c(m(),1),Jh=c(I(),1);var ev=c(m(),1),tv=c(I(),1);var av=c(m(),1),rv=c(I(),1);var r2=c(m(),1),ov=c(m(),1),o2=c(I(),1),i2=c(ba(),1),n2=c(I(),1);var l2=c(m(),1),s2=c(I(),1),iv=c(m(),1),sl=c(I(),1),u2=c(ba(),1),d2=c(m(),1),ul=c(I(),1);var nv=c(m(),1),Qr=c(I(),1);var lv=c(m(),1),Qa=c(I(),1);var $e=c(m(),1),g2=c(I(),1),jd=c(m(),1),m2=c(I(),1),_d=c(m(),1),h2=c(I(),1),sv=c(m(),1),Nd=c(I(),1);var uv=c(m(),1);var dv=c(m(),1);var cv=c(m(),1);var fv=c(m(),1);var pv=c(m(),1),Hd=c(I(),1),x2=c(ba(),1);var gv=c(I(),1);var mv=c(m(),1),Ud=c(m(),1);var hv=c(m(),1);var xv=c(m(),1),w2=c(I(),1);var L2=c(m(),1);var tl=c(I());var el=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var lh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var sh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var yd=e=>{let t=sh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var si=c(I());var uh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var dh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var ch=(0,si.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,si.createElement)("svg",{ref:u,...uh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:el("lucide",o),...!i&&!dh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,si.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Wr=(e,t)=>{let a=(0,tl.forwardRef)(({className:r,...o},i)=>(0,tl.createElement)(ch,{ref:i,iconNode:t,className:el(`lucide-${lh(yd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=yd(e),a};var Xy=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Vr=Wr("check",Xy);var Yy=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Wt=Wr("trash-2",Yy);var Ky=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ge=Wr("x",Ky);var bv=c(I(),1);var yv=c(m(),1),wv=c(m(),1);var Lv=c(m(),1),T2=c(I(),1);var Sv=c(m(),1);var Cv=c(I(),1);var Iv=c(m(),1);var Pv=c(m(),1);var $2=c(m(),1);var z2=c(m(),1);var dl=c(m(),1);var B2=c(m(),1);var Ev=c(m(),1);var W2=c(m(),1),rr=c(I(),1);var $v=c(m(),1);var Mv=c(m(),1);var zv=c(m(),1),K2=c(I(),1);var Dv=c(m(),1);var Av=c(m(),1);var Q2=c(m(),1);var Bv=c(m(),1);var tL=c(m(),1);var Fv=c(m(),1);var rL=c(I(),1);var Ov=c(m(),1),oL=c(I(),1);var Nv=c(m(),1),iL=c(I(),1),Hv=c(m(),1),nL=c(m(),1),Uv=c(m(),1),qv=c(I(),1);var qd=c(m(),1),Wv=c(m(),1);var Vv=c(m(),1);var Pd=c(m(),1),tr=c(I(),1);var Ie=c(m(),1),xL=c(I(),1),bL=c(ba(),1);var Xv=c(m(),1);var Wd=c(I(),1),Vd=c(m(),1),Gd=c(I(),1);var Yv=c(m(),1),Zr=c(I(),1),yL=c(ba(),1);var Kv=c(m(),1),wL=c(m(),1),Qv=c(I(),1),Xd=c(m(),1),Zv=c(I(),1);var Jv=c(m(),1);var ex=c(m(),1),CL=c(I(),1),Yd=c(m(),1),tx=c(I(),1),IL=c(ba(),1),kL=c(m(),1),Ye=c(I(),1),cl=c(m(),1);var Kd=c(I(),1),ox=c(m(),1);var ix=c(I(),1);var nx=c(m(),1),lx=c(I(),1);var sx=c(m(),1);var ux=c(m(),1);var dx=c(m(),1);var cx=c(m(),1);var bt=c(m(),1),gx=c(I(),1);var Yr=c(m(),1);var GL=c(m(),1),gl=c(I(),1);var Qd=c(m(),1),XL=c(m(),1),or=c(I(),1);var mx=c(m(),1),ml=c(I(),1);var hx=c(m(),1),vx=c(I(),1);var hl=c(m(),1);var QL=c(m(),1);var xx=c(m(),1);var bx=c(m(),1);var yx=c(m(),1),ZL=c(I(),1);var wx=c(m(),1),Lx=c(I(),1);var Sx=c(m(),1),Cx=c(m(),1);var Za=c(m(),1),kx=c(m(),1);var Px=c(m(),1);var Tx=c(m(),1),lS=c(I(),1);var Rx=c(m(),1);var sS=c(m(),1),vl=c(I(),1);var Ex=c(m(),1);var uS=c(m(),1),$x=c(I(),1);var Ja=c(m(),1);var Mx=c(m(),1),zx=c(I(),1);var Dx=c(m(),1);var Ax=c(m(),1);var mS=c(m(),1);var Bx=c(m(),1),hS=c(I(),1),vS=c(m(),1),Fx=c(I(),1),xS=c(m(),1),Ox=c(m(),1);var wS=c(m(),1);var LS=c(I(),1);var Zd=c(m(),1);var Jd=c(m(),1),ec=c(I(),1),Nx=c(I(),1),tc=c(m(),1),ac=c(m(),1);var Hx=c(m(),1),rc=c(I(),1);var IS=c(m(),1),Ux=c(m(),1),qx=c(m(),1);var Wx=c(m(),1);var oc=c(m(),1),kS=c(m(),1),PS=c(m(),1);var Vx=c(m(),1),Gx=c(I(),1),Xx=c(m(),1),TS=c(I(),1);var ic=c(m(),1),nc=c(I(),1);var lc=c(m(),1),Yx=c(m(),1),sc=c(m(),1),Kx=c(m(),1),Qx=c(m(),1);var Zx=c(m(),1);var uc=c(m(),1);var dc=c(m(),1);var Jx=c(m(),1),cc=c(m(),1),e0=c(m(),1),RS=c(I(),1),a0=c(m(),1),r0=c(m(),1),ES=c(I(),1);var o0=c(m(),1),i0=c(m(),1);var $S=c(m(),1);var bh={};var Md={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},zd={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},me={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},Gr={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Tt={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},xt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},iw={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},O={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},ui={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},J={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},ee={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},al={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Rt={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},Sh={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},Ch={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Sd={zero:"0deg",half:"180deg",full:"360deg"},nl={horizontal:"90deg",diagonal:"135deg"},Ee={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},Ka={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Me={sm:`@media (max-width: ${Ka.sm}px)`,smPlus:`@media (max-width: ${Ka.smPlus}px)`,md:`@media (max-width: ${Ka.md}px)`,mdWide:`@media (max-width: ${Ka.mdWide}px)`,lg:`@media (max-width: ${Ka.lg}px)`,xl:`@media (max-width: ${Ka.xl}px)`},N={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},Xe={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},nw={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},lw={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var wd={press:.95,drag:.985,hoverLift:1.04},sw={landscape:"4 / 3"},uw={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},Xr={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function Ih(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Rt.xs,md:Rt.md,lg:Rt["2xl"],xl:Rt["4xl"],pill:Rt.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:Ka,motion:Ee,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var La=Ih("portalDark",Md,Sh),dw=Ih("portalLight",zd,Ch);var k5=(0,di.createContext)(null);var Vt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,he=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,Dd=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,T5=L`
  ${Vt}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,ar=L`
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
`,ci=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,gw=L`
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

  ${ci}
`,kh=L`
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

  ${ci}
`,mw=L`
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

  ${ci}
`,hw=L`
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

  ${ci}
`,vw=L`
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

  ${ci}
`,Ph=L`
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
`,xw=L`
  ${Ph}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,bw=L`
  ${Ph}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Th=L`
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
    ${kh}
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
`,Rh=L`
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
`,yw=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,Eh=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,ww=L`
  ${Eh}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,Lw=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,$h=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,Sw=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,Mh=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Cw={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function Iw(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var kw={"--ig-radius-2xs":Rt["2xs"],"--ig-radius-xxs":Rt.xxs,"--ig-radius-xs":Rt.xs,"--ig-radius-sm":La.radius.sm,"--ig-radius-md":La.radius.md,"--ig-radius-lg":La.radius.lg,"--ig-radius-xl":La.radius.xl,"--ig-radius-2xl":Rt["2xl"],"--ig-radius-4xl":Rt["4xl"],"--ig-radius-pill":La.radius.pill,"--ig-font-sans":La.typography.fontSans,"--ig-font-mono":La.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(me.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(me.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(me.svgFillSoft),"--ig-opacity-svg-fill-medium":String(me.svgFillMedium),"--ig-opacity-dim":String(me.dim),"--ig-opacity-dim-soft":String(me.dimSoft),"--ig-opacity-ghost":String(me.ghost),"--ig-opacity-faded":String(me.faded),"--ig-opacity-disabled":String(me.disabled),"--ig-opacity-overlay":String(me.overlay),"--ig-opacity-muted":String(me.muted),"--ig-opacity-subtle":String(me.subtle),"--ig-opacity-emphatic":String(me.emphatic),"--ig-opacity-loud":String(me.loud),"--ig-opacity-loud-plus":String(me.loudPlus),"--ig-opacity-prominent":String(me.prominent),"--ig-opacity-near":String(me.near),"--ig-blur-2xs":Gr.blur2xs,"--ig-blur-xs":Gr.blurXs,"--ig-blur-sm":Gr.blurSm,"--ig-blur-md":Gr.blurMd,"--ig-blur-lg":Gr.blurLg,"--ig-blur-xl":Gr.blurXl,"--ig-icon-xs":Tt.xs,"--ig-icon-sub":Tt.sub,"--ig-icon-2xs":Tt["2xs"],"--ig-icon-sm":Tt.sm,"--ig-icon-sm-plus":Tt.smPlus,"--ig-icon-md":Tt.md,"--ig-icon-lg":Tt.lg,"--ig-icon-xl":Tt.xl,"--ig-icon-2xl":Tt["2xl"],"--ig-icon-3xl":Tt["3xl"],"--ig-svg-stroke-bold":String(iw.bold),"--ig-popup-3xs":O["3xs"],"--ig-popup-2xs":O["2xs"],"--ig-popup-2xs-plus":O["2xsPlus"],"--ig-popup-xs":O.xs,"--ig-popup-sm":O.sm,"--ig-popup-md":O.md,"--ig-popup-lg":O.lg,"--ig-popup-xl":O.xl,"--ig-popup-2xl-narrow":O["2xlNarrow"],"--ig-popup-2xl":O["2xl"],"--ig-popup-3xl":O["3xl"],"--ig-popup-xs-tight":O.xsTight,"--ig-popup-2xl-wide":O["2xlWide"],"--ig-popup-3xl-narrow":O["3xlNarrow"],"--ig-popup-3xl-mid":O["3xlMid"],"--ig-popup-3xl-wide":O["3xlWide"],"--ig-popup-4xl-narrow":O["4xlNarrow"],"--ig-popup-4xl-mid":O["4xlMid"],"--ig-popup-4xl":O["4xl"],"--ig-popup-list-min":O.listMin,"--ig-popup-md-narrow":O.mdNarrow,"--ig-popup-xs-plus":O.xsPlus,"--ig-popup-xs-narrow":O.xsNarrow,"--ig-popup-sm-narrow":O.smNarrow,"--ig-popup-2xs-narrow":O["2xsNarrow"],"--ig-popup-3xs-plus":O["3xsPlus"],"--ig-popup-3xs-wide":O["3xsWide"],"--ig-popup-2xs-narrow-tight":O["2xsNarrowTight"],"--ig-popup-2xs-tight":O["2xsTight"],"--ig-popup-lg-plus":O.lgPlus,"--ig-popup-filter-panel":O.filterPanel,"--ig-space-0":ee[0],"--ig-space-1px":ee["1px"],"--ig-space-2px":ee["2px"],"--ig-space-3px":ee["3px"],"--ig-space-neg-1px":ee["-1px"],"--ig-space-neg-2px":ee["-2px"],"--ig-transform-hover-lift-y":ee.hoverLiftY,"--ig-space-1":ee[1],"--ig-space-1-plus":ee["1Plus"],"--ig-space-2":ee[2],"--ig-space-2-plus":ee["2Plus"],"--ig-space-3":ee[3],"--ig-space-4":ee[4],"--ig-space-5":ee[5],"--ig-space-6":ee[6],"--ig-space-7":ee[7],"--ig-space-8":ee[8],"--ig-space-9":ee[9],"--ig-space-10":ee[10],"--ig-space-11":ee[11],"--ig-space-12":ee[12],"--ig-space-13":ee[13],"--ig-border-1px":al["1px"],"--ig-border-1_5px":al["1_5px"],"--ig-border-2px":al["2px"],"--ig-border-3px":al["3px"],"--ig-z-hidden":String(N.hidden),"--ig-z-base":String(N.base),"--ig-z-raised":String(N.raised),"--ig-z-raised-plus":String(N.raisedPlus),"--ig-z-capture":String(N.capture),"--ig-z-capture-high":String(N.captureHigh),"--ig-z-capture-super":String(N.captureSuper),"--ig-z-capture-top":String(N.captureTop),"--ig-z-sticky":String(N.sticky),"--ig-z-sticky-plus":String(N.stickyPlus),"--ig-z-sticky-top":String(N.stickyTop),"--ig-z-header":String(N.header),"--ig-z-overlay":String(N.overlay),"--ig-z-overlay-low":String(N.overlayLow),"--ig-z-dot-menu":String(N.dotMenu),"--ig-z-dot-menu-plus":String(N.dotMenuPlus),"--ig-z-topbar":String(N.topbar),"--ig-z-dropdown":String(N.dropdown),"--ig-z-mobile-nav-backdrop":String(N.mobileNavBackdrop),"--ig-z-mobile-nav":String(N.mobileNav),"--ig-z-mobile-menu":String(N.mobileMenu),"--ig-z-popover":String(N.popover),"--ig-z-context-menu":String(N.contextMenu),"--ig-z-drawer":String(N.drawer),"--ig-z-modal":String(N.modal),"--ig-z-toast":String(N.toast),"--ig-z-tooltip":String(N.tooltip),"--ig-scale-press":String(wd.press),"--ig-scale-drag":String(wd.drag),"--ig-scale-hover-lift":String(wd.hoverLift),"--ig-aspect-landscape":sw.landscape,"--ig-control-height-xs":Xe.xs,"--ig-control-height-xs-plus":Xe.xsPlus,"--ig-control-height-sm":Xe.sm,"--ig-control-height-sm-plus":Xe.smPlus,"--ig-control-height-md":Xe.md,"--ig-control-height-mid-plus":Xe.midPlus,"--ig-control-height-mid-plus-tall":Xe.midPlusTall,"--ig-control-height-2xl-wide":Xe["2xlWide"],"--ig-control-height-lg":Xe.lg,"--ig-control-height-xl":Xe.xl,"--ig-control-height-2xl":Xe["2xl"],"--ig-control-height-3xl":Xe["3xl"],"--ig-control-height-3xl-plus":Xe["3xlPlus"],"--ig-page-max-width":J.pageMaxWidth,"--ig-layout-topbar":J.topbarHeight,"--ig-layout-capture-bar":J.captureBar,"--ig-layout-capture-grid":J.captureGrid,"--ig-layout-histogram-width":J.histogramWidth,"--ig-layout-histogram-height":J.histogramHeight,"--ig-layout-dataset-card-min-height":J.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":J.datasetCardRecentMinHeight,"--ig-layout-log-time-min":J.logTimeMin,"--ig-layout-log-detail-left":J.logDetailLeft,"--ig-layout-log-detail-top":J.logDetailTop,"--ig-layout-log-detail-width":J.logDetailWidth,"--ig-layout-color-plane-height":J.colorPlaneHeight,"--ig-layout-color-thumb-size":J.colorThumbSize,"--ig-layout-shadow-y-offset":J.shadowYOffset,"--ig-layout-shadow-blur":J.shadowBlur,"--ig-layout-sidebar-header":J.sidebarHeader,"--ig-layout-sidebar-collapse":J.sidebarCollapse,"--ig-layout-panel-min-height":J.panelMinHeight,"--ig-layout-loading-panel-height":J.loadingPanelHeight,"--ig-form-label-col":J.formLabelCol,"--ig-form-label-col-wide":J.formLabelColWide,"--ig-motion-fastest":Ee.fastest,"--ig-motion-swift":Ee.swift,"--ig-motion-fast":Ee.fast,"--ig-motion-fast-ease":Ee.fastEase,"--ig-motion-normal":Ee.normal,"--ig-motion-normal-ease":Ee.normalEase,"--ig-motion-mobile-nav":Ee.mobileNav,"--ig-motion-spinner":Ee.spinner,"--ig-motion-spinner-fast":Ee.spinnerFast,"--ig-motion-spinner-slow":Ee.spinnerSlow,"--ig-motion-progress-bar":Ee.progressBar,"--ig-motion-sync-spin":Ee.syncSpin,"--ig-motion-shimmer":Ee.shimmer,"--ig-motion-skeleton":Ee.skeleton};function Cd(e="dark"){return{...kw,...Iw(e==="light"?dw:La,e==="light"?zd:Md,e==="light"?Ch:Sh,e==="light")}}var D5=Cd("dark");function Ld(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function Pw(){let e=Cd("dark"),t=Cd("light");return[Ld(":root",Cw),Ld(":root, :root[data-theme='dark']",e),Ld(":root[data-theme='light']",t)].join(`
`)+`
`}var B5=Ym`
  ${Pw()}

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
    background: ${Md.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${zd.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function er(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function ol(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var Tw=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${er(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${er(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${ol(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${ol(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function Rw({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,zh.jsx)(Tw,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var Ew=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>er(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function Id({gap:e,align:t,justify:a,as:r,...o}){return(0,Dh.jsx)(Ew,{as:r,$gap:e,$align:t,$justify:a,...o})}var j5=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>er(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var _5=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>er(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${ol(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var N5=l.div`
  width: 100%;
  max-width: ${e=>ol(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>er(e.$padding)??"var(--ig-space-11)"};
`;var $w={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},Mw={default:void 0,mono:"var(--ig-font-mono)"},zw={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},mh={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function Dw(e){return typeof e=="string"?zw[e]:e??"var(--ig-font-weight-regular)"}function Aw(e){if(e)return e in mh?mh[e]:e}var Bw=l.span`
  margin: 0;
  color: ${e=>$w[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&Mw[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Bh({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,Ah.jsx)(Bw,{as:e,$tone:t,$size:a,$weight:Dw(r),$align:o,$uppercase:i,$letterSpacing:Aw(n),$fontFamily:s,$tabularNums:u,...d})}var q5=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function Ow(e){return(0,Fh.jsx)(Bh,{size:"var(--ig-font-size-sm)",...e})}var V5=l.div`
  ${e=>e.$elevation==="raised"?he:e.$elevation==="card"?Dd:Vt}
  border-radius: ${e=>er(e.$radius)??"var(--ig-radius-2xl)"};
`;var X5=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,Y5=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,K5=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??xt.lg}px`};
  height: ${e=>`${e.$size??xt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var qw={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function jh(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Nh=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${qw[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?bw:e.$variant==="secondary"?vw:hw:e.$variant==="ghost"?xw:e.$variant==="secondary"?kh:e.$variant==="accent"?mw:gw}
`,Kr=_h.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let x="Button",y=d??(u&&u!==x?u:void 0);return(0,Hh.jsxs)(Nh,{ref:h,$variant:jh(t,a),$size:r,$tone:o,...p,"data-ig-component":x,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),Ke=Uh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,qh.jsx)(Nh,{ref:d,type:"button",$variant:jh(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),J5=l(Ke).attrs({variant:"secondary",size:"sm"})`
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
`,Ww={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},Vw={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},Gw=l.button`
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
  font-size: ${e=>Ww[e.$size]};
  color: ${e=>Vw[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,ll=(0,Wh.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Vh.jsxs)(Gw,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),a3=l(Ke).attrs({variant:"secondary",size:"sm"})`
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
`,r3=l.span`
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
`;var Xw={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},Xh=l.input`
  ${ar}
  ${e=>Xw[e.$size]}
`,Sa=(0,Ad.forwardRef)(({size:e="md",...t},a)=>(0,Bd.jsx)(Xh,{ref:a,$size:e,...t}));Sa.displayName="TextField";var i3=l.textarea`
  ${ar}
`,Yw=(0,Ad.forwardRef)(({size:e="md",...t},a)=>(0,Bd.jsx)(Xh,{ref:a,$size:e,type:"password",...t}));Yw.displayName="PasswordField";var Kw={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},Qw=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>Kw[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,l3=(0,Yh.forwardRef)(function({variant:t="default",minHeight:a=nw.midPlusTall,...r},o){return(0,Kh.jsx)(Qw,{ref:o,$variant:t,$minHeight:a,...r})}),Zw=l.input.attrs({type:"color"})`
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
`,u3=(0,Qh.forwardRef)(function(t,a){return(0,Zh.jsx)(Zw,{ref:a,...t})}),Jw={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},e2=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>Jw[e.$orientation]}
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
`,c3=(0,Jh.forwardRef)(function({orientation:t="vertical",...a},r){return(0,ev.jsx)(e2,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),t2={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},a2=l.div`
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
  ${e=>t2[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${nl.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,p3=(0,tv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,av.jsx)(a2,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),h3=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var v3=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,x3=l.input`
  ${ar}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,b3=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,y3=l.button`
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
`;var L3=l.div`
  position: relative;
`,S3=l.button`
  ${ar}
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
`,C3=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,I3=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Sd.half})`:`rotate(${Sd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,k3=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,P3=l.button`
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
`,T3=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,R3=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,E3=l.select`
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
`;var M3=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,z3=l.input`
  ${ar}
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
`,A3=l.button`
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
`;var F3=l.div`
  position: relative;
  width: 100%;
`,O3=l.textarea`
  ${ar}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,j3=l.div`
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
`,_3=l.button`
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
`,N3=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,H3=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var Fd=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,c2=l.span`
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
`,Od=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,f2=l.span`
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
`,p2=l.span`
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
`,q3=Qa.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),x=Qa.default.useRef(null);Qa.default.useImperativeHandle(d,()=>x.current),Qa.default.useEffect(()=>{x.current&&(x.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,$e.jsxs)(Fd,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,$e.jsx)(Od,{ref:x,type:"checkbox",checked:a,disabled:r,...u}),(0,$e.jsx)(f2,{$checked:!!y,$disabled:r,children:o?(0,$e.jsx)("svg",{viewBox:"0 0 12 12",children:(0,$e.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,$e.jsx)("svg",{viewBox:"0 0 12 12",children:(0,$e.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),W3=Qa.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,$e.jsxs)(Fd,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,$e.jsx)(Od,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,$e.jsx)(p2,{$checked:!!a,$disabled:r}),t]})}),V3=Qa.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,$e.jsxs)(Fd,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,$e.jsx)(Od,{ref:s,type:"checkbox",checked:t,...n}),(0,$e.jsx)(c2,{$checked:t}),a]})});var X3=l.input`
  display: none;
`,v2={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},Y3={...v2,cursor:"pointer"};var Q3=l.button`
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
`;var J3=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,eP=l.button`
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
`;var aP=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Me.sm} {
    grid-template-columns: 1fr;
  }
`,rP=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,oP=l.div`
  min-width: 0;
`,iP=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var nP=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,lP=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var uP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,dP=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var b2={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},y2=l.div`
  ${he}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>b2[e.$variant]}
`,pP=(0,gv.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,mv.jsx)(y2,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var gP={minWidth:ui.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},mP=l.button`
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
`;var vP=l.button`
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
`;var hh={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},vv=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>hh[e.$size??"sm"]};
  height: ${e=>hh[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,yP=l.label`
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
`;var LP=l.button`
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
`;var S2={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},C2={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},I2=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":C2[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>S2[e.$size]}
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
`,IP=(0,bv.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,yv.jsxs)(I2,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var kP=l.button`
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
`,PP=l.div`
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
`;var k2={bottom:L`
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
  `},RP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>k2[e.$placement]}
`,EP=l.div`
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
`,P2={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},$P=l.button`
  flex-shrink: 0;
  ${e=>P2[e.$size]}
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
`,MP=l.span`
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
  ${ar}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,AP=l.span`
  color: var(--ig-color-text-soft);
`,BP=l.div`
  ${Th}
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

  ${Rh}
`;var R2=l.div`
  ${he}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,jP=l.div`
  ${he}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,E2=l.div`
  ${he}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,kv=(0,Cv.forwardRef)(({anchor:e,style:t,...a},r)=>(0,Iv.jsx)(E2,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));kv.displayName="MenuPopover";var _P=l.div`
  ${he}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,NP=l(R2)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,UP=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,qP=l.span`
  ${({$tone:e,tone:t})=>{let a=uw[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,WP=l(kv)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var VP=l.div`
  ${Th}
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

  ${Rh}
`;var XP=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,YP=l.button`
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
`;var M2={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},fi=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>M2[e.$tone??"neutral"]};
`,ZP=l(fi)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,e4=l.p`
  ${$h}
  ${Mh}
  margin: 0;
`,a4=l.div`
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
`,A2=l.span`
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
`;function Tv({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,dl.jsxs)(D2,{className:o,style:i,children:[e,!a&&t!=null?(0,dl.jsx)(A2,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var kd=20,Rv=120,F2=Rv*Math.PI/180,O2=kd/Math.sin(F2),j2=Pt`
  from { background-position: 0 0; }
  to   { background-position: ${O2.toFixed(3)}px 0; }
`,_2=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${Rv}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${kd/2}px,
      var(--ig-color-white-06) ${kd}px
    );
    animation: ${j2} var(--ig-motion-shimmer) linear infinite;
  }
`,N2=Pt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,H2={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},i4=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,n4=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>H2[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${N2} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&_2}
`;var s4={display:"flex",width:"100%",height:xt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},u4=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var U2=L`
  background:
    linear-gradient(
      ${nl.horizontal},
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
`,c4=l.div.attrs({"aria-hidden":!0})`
  ${U2}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,q2=l.div`
  ${({$tone:e="info"})=>L`
    background: ${Xr[e].background};
    border-color: ${Xr[e].border};
    color: ${Xr[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,p4=l(q2)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,V2=Pt`
  to { transform: rotate(${Sd.full}); }
`,m4={sm:xt.sm,md:xt.lg,lg:xt["3xl"]};var h4=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${V2} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var G2=Pt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,X2=Pt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,x4=l.div`
  ${({$tone:e})=>L`
    background: ${Xr[e].background};
    border-color: ${Xr[e].border};
    color: ${Xr[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?X2:G2} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,b4=l.span`
  flex: 1;
`,y4=l.button`
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
`,w4=l.button`
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
`,L4=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,S4=(0,rr.createContext)(()=>{});var I4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,k4=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,Y2=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,P4=l(Y2)``,T4=l.div`
  flex: 1;
`,R4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var $4=l.div`
  ${Mh}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,M4=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,z4=l.div`
  ${$h}
`,D4=l.div`
  ${Sw}
  max-width: var(--ig-popup-md);
`,A4=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var F4=l.div`
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
`,O4=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,j4=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,_4=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var H4=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,U4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,q4=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,W4=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var G4=l.span`
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
`;var Z2={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},J2=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>Z2[e.$variant]}
`,Y4=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,eL=Pt`from { opacity: 0 } to { opacity: 1 }`,K4=l(J2)`
  animation: ${eL} var(--ig-motion-fast);
`;var Z4=l.div`
  ${he}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var rl=l.span`
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
`,eT=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,tT=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${rl}:hover &,
          ${rl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${rl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${rl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var aL={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},rT=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>aL[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,jv=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,iT=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:jv}
`,nT=l.div`
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
`,lT=l.button`
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
`;var sT=l.div`
  ${jv}
`,_v={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},dT=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>_v[e.$radius].root};
`,cT=l.div`
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
`,fT=l.button`
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
  border-radius: ${e=>_v[e.$radius].item};
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
`,pT=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,gT=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mT=l.span`
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
`;var vT=l.header`
  display: none;
  ${Me.md} {
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
`;var xT=l.div`
  display: none;
  ${Me.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,bT=l.aside`
  display: none;
  ${Me.md} {
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
`;var yT=l.button`
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
`;var wT=l.button`
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
`;var LT={marginLeft:"auto",minWidth:xt.xl,height:xt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var CT=l.div`
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
`,IT=l.button`
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
`;var lL=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Gv=l.div`
  ${he}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,PT=l(Gv)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,sL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,uL=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,dL=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,TT=l.aside`
  ${he}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,cL=l(Ke)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function fL({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,Pd.jsx)(cL,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,Pd.jsx)(Ge,{size:xt.md})})}var pL='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',gL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,mL={margin:0,lineHeight:"var(--ig-line-height-loose)"};function hL({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,tr.useId)(),u=(0,tr.useRef)(null);return(0,tr.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,tr.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let x=Array.from(h.querySelectorAll(pL)).filter(w=>w.offsetParent!==null);if(x.length===0){p.preventDefault(),h.focus();return}let y=x[0],b=x[x.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,Ie.jsx)(lL,{onClick:()=>o?.(),children:(0,Ie.jsxs)(Gv,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,Ie.jsxs)(sL,{children:[(0,Ie.jsx)(uL,{id:s,children:e}),o?(0,Ie.jsx)(fL,{onClick:()=>o()}):null]}),(0,Ie.jsxs)(gL,{children:[t?(0,Ie.jsx)(Ow,{as:"p",tone:"muted",style:mL,children:t}):null,a,r?(0,Ie.jsx)(dL,{children:r}):null]})]})})}function vL({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,Ie.jsx)(hL,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,Ie.jsxs)(Ie.Fragment,{children:[(0,Ie.jsx)(Kr,{type:"button",variant:"secondary",onClick:i,children:r}),(0,Ie.jsx)(Kr,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var zT=l.div`
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
`,DT=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,AT=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,BT=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,FT=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var jT=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,_T=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${he}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,NT=l.div`
  position: relative;
  display: block;
  width: 100%;
`,HT=l.button`
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
`,UT=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${he}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,qT=l.button`
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
`;var WT={minWidth:ui.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var GT=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var YT=l.div`
  ${he}
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
`,KT=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var QT={display:"inline-flex",alignItems:"center",justifyContent:"center",width:xt.md,height:xt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var LL=l.div`
  ${he}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,SL=(0,Zv.forwardRef)(({anchor:e,width:t=ui.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,Jv.jsx)(LL,{ref:o,$width:t,style:{...i,...a},...r})});SL.displayName="FilterPopover";var eR=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,tR=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,aR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var rR={minWidth:ui.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var ax=(0,Ye.createContext)(null);function fl(){let e=(0,Ye.useContext)(ax);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function rx({children:e}){let[t,a]=(0,Ye.useState)(null),r=(0,Ye.useRef)(null);r.current=t;let o=(0,Ye.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,Ye.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,Ye.useMemo)(()=>o,[o]);return(0,cl.jsxs)(ax.Provider,{value:n,children:[e,t?(0,cl.jsx)(vL,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var iR=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,nR=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,PL=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,TL=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,lR=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,sR=l(PL)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,uR=l(TL)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,dR=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,cR=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,RL=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,EL=L`
  transition: transform var(--ig-motion-normal);
`,fR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&RL}
  ${e=>e.$isAnimating&&EL}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,pR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var mR=l.section`
  ${Vt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,hR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,$L=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,xR=ix.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,nx.jsx)($L,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),ML=l.div`
  ${Vt}
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
`,yR=lx.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,sx.jsx)(ML,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),LR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var CR=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var zL={panel:Vt,card:Dd,raised:he},DL=l.div`
  ${e=>zL[e.$elevation]}
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
`;function fx({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,cx.jsx)(DL,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var AL=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,BL=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,FL=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,OL=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,jL=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,_L=l.textarea`
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
`,NL=l.div`
  display: flex;
  justify-content: flex-end;
`,HL=l.button`
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
`;function px({author:e,timestamp:t,body:a,actions:r}){return(0,bt.jsxs)(AL,{children:[(0,bt.jsxs)(BL,{children:[(0,bt.jsx)(FL,{children:e}),t&&(0,bt.jsx)("span",{children:t}),r]}),(0,bt.jsx)(OL,{children:a})]})}function pl({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,bt.jsxs)(jL,{children:[(0,bt.jsx)(_L,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,bt.jsx)(NL,{children:(0,bt.jsx)(HL,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var UL=l.button`
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
`,qL=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,WL=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,VL=(0,gx.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,Yr.jsxs)(UL,{ref:n,type:o??"button",$active:a,...i,children:[(0,Yr.jsx)(vv,{$color:e,$size:"sm"}),(0,Yr.jsx)(qL,{children:t}),r!=null&&(0,Yr.jsx)(WL,{children:r})]}));VL.displayName="TagListItem";var RR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var $R=l.div`
  position: relative;
  width: 100%;
`,MR=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,zR=l.div`
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
`,AR=l.button`
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
`;var FR=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,OR=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,jR=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,_R=(0,or.createContext)(null);var HR=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,UR=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,qR=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var YL=l.button`
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
`,KL=(0,vx.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,hl.jsxs)(YL,{ref:o,type:a??"button",...r,children:[e&&(0,hl.jsx)(vv,{$color:e,$size:"xs"}),t]}));KL.displayName="ActionChip";var GR=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,XR=l.kbd`
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
`;var KR=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,QR=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,ZR=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var e8=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var a8=l.li`
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
`;var o8=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var JL=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,eS=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,tS=l.button`
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

  ${e=>e.$variant==="flat"?JL:eS}

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
`,aS=(0,Lx.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,Sx.jsx)(tS,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});aS.displayName="SelectableListItem";var rS={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},oS={flexShrink:0},iS={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},nS=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function Ix({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,Za.jsxs)(Id,{as:"aside",gap:0,className:o,style:rS,children:[(0,Za.jsx)(Rw,{style:oS,children:e}),t?(0,Za.jsxs)(Id,{gap:3,style:iS,children:[(0,Za.jsx)(Bh,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,Za.jsx)(nS,{children:i},n):null)]})}var s8=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var d8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${nl.diagonal},
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
`;var p8=l.button`
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
`,g8=l.div`
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
`;var h8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${nl.diagonal},
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
`;var x8=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var y8=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var dS=l.button`
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
`,cS=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,fS=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,pS=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,gS=(0,$x.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,Ja.jsxs)(dS,{ref:i,type:r??"button",...o,children:[(0,Ja.jsxs)(cS,{children:[(0,Ja.jsx)("span",{children:e}),t!=null&&(0,Ja.jsx)(fS,{children:t})]}),(0,Ja.jsx)(pS,{children:a})]}));gS.displayName="OptionRow";var S8=l.span`
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
`,I8=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var P8=l.table`
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
`,T8=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var E8=l.table`
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
`;var M8=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,z8=l.div`
  ${Vt}
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
`,A8=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var B8={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},O8=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var _8=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var H8=l.div`
  ${yw}
  height: 100%;
  min-height: 0;
`,U8=l.header`
  ${ww}
  flex-shrink: 0;

  ${Me.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,q8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,W8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,V8=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Me.md} {
    font-size: var(--ig-font-size-xl);
  }
`,G8=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,X8=l.div`
  ${Lw}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Me.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,bS=l.section`
  ${Vt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,Y8=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,K8=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,Q8=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,Z8=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,yS=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,J8=l(yS)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Me.md} {
    grid-template-columns: 1fr;
  }
`,eE=l(bS)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,tE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,aE=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,rE=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,iE=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Me.lg} {
    grid-template-columns: 1fr;
  }
`;var nE=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,lE=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Me.lg} {
    grid-template-columns: 1fr;
  }
`,sE=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Me.lg} {
    grid-template-columns: 1fr;
  }
`,uE=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Me.lg} {
    grid-template-columns: 1fr;
  }
`,cE=l.nav`
  ${Vt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,fE=l.aside`
  ${Vt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,pE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,gE=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,mE=l.div`
  ${Eh}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,hE=l.aside`
  ${he}
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
`,xE=l.aside`
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
  ${Me.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,jx=l.div`
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
`,bE=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${jx}:hover & { opacity: 0; }
  `}
`,yE=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${jx}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,wE=l.button`
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
`,LE=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,SE=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,_x=`
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
`,CE=l.a`
  ${_x}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,IE=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,kE=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,PE=l.button`
  ${_x}
`,TE=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,RE=l.span`
  display: contents;
`;var $E=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Me.md} {
    justify-content: flex-start;
  }
`,ME=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,zE=l.div`
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
  ${Me.md} {
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
`,AE=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,BE=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,FE=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,OE=ui.md;var SS=11;var CS=3,jE=SS+CS*2;var NE=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,HE=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,UE=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,qE=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,WE=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var YE=l.div`
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
`,KE=l.span`
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
`;var QE=l.div`
  ${he}
  position: absolute;
  top: calc(100% + var(--ig-space-3));
  left: 0;
  z-index: var(--ig-z-popover);
  width: 100%;
  box-sizing: border-box;
  padding: var(--ig-space-5);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`,ZE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,JE=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,e$=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,t$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,a$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,r$=l(Sa).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,o$=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,i$=l(Sa).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,n$=l.input`
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
`,l$=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var s$=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,u$=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,d$=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,c$=l.button`
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
`,f$=l(Sa).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,p$=l(Kr).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var m$=l.section`
  ${he}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,h$=l.h3`
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
`,v$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var b$=l.label`
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
`,y$=l.div`
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
`;var L$=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var C$=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var k$=l.div`
  ${Dd}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,P$=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function t0({children:e,className:t}){return(0,e0.jsx)(Id,{gap:3,className:t,children:e})}var R$=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var $$=new URL("./assets/favicon.ico","http://localhost/").href,M$=new URL("./assets/favicon.png","http://localhost/").href,z$=new URL("./assets/brand-mark.png","http://localhost/").href,D$=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var A$=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function MS(){try{if(typeof bh<"u"&&bh.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var vh=(...e)=>{},xh=MS(),B$={debug:xh?console.debug.bind(console):vh,log:xh?console.log.bind(console):vh,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var O$=lw.canvasExportBg;var Gt=c(I(),1);function n0(e){let[,t]=(0,Gt.useReducer)(a=>a+1,0);(0,Gt.useEffect)(()=>e.subscribe(t),[e])}function Jr(e){let[t,a]=(0,Gt.useState)(null);return(0,Gt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function l0(){let[,e]=(0,Gt.useReducer)(t=>t+1,0);(0,Gt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Ca=c(I(),1);var u0=c(m(),1),zS=500,DS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,xl=e=>e instanceof Element&&e.id!==qr&&e!==document.documentElement&&e!==document.body;function s0({active:e,onPick:t}){let[a,r]=(0,Ca.useState)(null),o=Jr(a),i=(0,Ca.useRef)({x:-1,y:-1}),n=(0,Ca.useRef)(e);return n.current=e,(0,Ca.useEffect)(()=>{e||r(null)},[e]),(0,Ca.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!xl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(xl(b)?b:null)})},p=b=>{!n.current||!xl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,x=()=>clearTimeout(h),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:$}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(w,$);xl(g)&&t(g,w,$)},zS)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",x,{passive:!0}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{cancelAnimationFrame(u),x(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[t]),o?(0,u0.jsx)(DS,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var d0=c(m(),1),AS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: "코멘트 대상";
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
`;function fc({el:e}){let t=Jr(e);return t?(0,d0.jsx)(AS,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var c0=c(I(),1);var ir=c(m(),1),bl="#f59e0b",BS=l.button`
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
  background: ${bl};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,FS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${bl};
  background: color-mix(in srgb, ${bl} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${bl};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function f0({store:e,onPinClick:t}){l0();let[a,r]=(0,c0.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ya(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),x=`${Math.round(p/8)}:${Math.round(h/8)}`,y=o.get(x)??0;o.set(x,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,ir.jsx)(BS,{className:"fbw-pin",type:"button",title:Xa(n),style:{left:w,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`\uCF54\uBA58\uD2B8 ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,ir.jsxs)(ir.Fragment,{children:[i,a&&(0,ir.jsx)(FS,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var pc=c(I(),1);var eo=c(I(),1);var p0=c(m(),1),OS=340,jS=l.div`
  position: fixed;
  width: ${OS}px;
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
`;function yl({targetEl:e,point:t,children:a}){let r=(0,eo.useRef)(null),o=Jr(e??null),[i,n]=(0,eo.useState)(null);return(0,eo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,x=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:x}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,p0.jsx)(jS,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var wl=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Ll=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var Et=c(m(),1),_S=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function g0({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,pc.useState)(""),[u,d]=(0,pc.useState)(e.author),p=()=>{let h=n.trim();if(!h)return;let x=u.trim()||"\uACE0\uAC1D";e.author=x;let y=new Date().toISOString(),b={id:Ga(),createdAt:y,anchor:a,resolved:!1,comments:[{id:Ga(),author:x,body:h,createdAt:y}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(b),i(b)};return(0,Et.jsxs)(yl,{targetEl:t,point:r,children:[(0,Et.jsxs)(wl,{className:"fbw-composer",children:[(0,Et.jsx)(Ll,{children:"\uCF54\uBA58\uD2B8 \uC791\uC131"}),(0,Et.jsx)(Ke,{variant:"ghost",size:"sm","aria-label":"\uB2EB\uAE30",onClick:o,children:(0,Et.jsx)(Ge,{size:16})})]}),(0,Et.jsxs)(_S,{children:["\uB300\uC0C1: ",a.textSnippet||a.selector]}),(0,Et.jsx)(Sa,{size:"sm",placeholder:"\uC774\uB984 (\uAE30\uC5B5\uB429\uB2C8\uB2E4)","aria-label":"\uC791\uC131\uC790 \uC774\uB984",value:u,onChange:h=>d(h.target.value)}),(0,Et.jsx)(pl,{value:n,onChange:s,onSubmit:p,placeholder:"\uC774 \uC704\uCE58\uC5D0 \uB300\uD574 \uD558\uACE0 \uC2F6\uC740 \uB9D0\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694",submitLabel:"\uB0A8\uAE30\uAE30"})]})}var gc=c(I(),1);var ce=c(m(),1),NS=e=>new Date(e).toLocaleDateString("ko-KR",{month:"numeric",day:"numeric"});function m0({store:e,thread:t,number:a,onClose:r}){let o=fl(),[i,n]=(0,gc.useState)(""),[s,u]=(0,gc.useState)(e.author),d=t.anchor.page===location.pathname?Ya(t.anchor):null,p=()=>{let y=i.trim();if(!y)return;let b=s.trim()||"\uACE0\uAC1D";e.author=b,e.addComment(t.id,b,y),n("")},h=async()=>{await o({title:"\uC774 \uCF54\uBA58\uD2B8 \uC2A4\uB808\uB4DC\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?",description:Xa(t),confirmLabel:"\uC0AD\uC81C",cancelLabel:"\uCDE8\uC18C",danger:!0})&&(e.removeThread(t.id),r())},x=async y=>{await o({title:"\uC774 \uB2F5\uAE00\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?",description:y.body,confirmLabel:"\uC0AD\uC81C",cancelLabel:"\uCDE8\uC18C",danger:!0})&&e.removeComment(t.id,y.id)};return(0,ce.jsxs)(yl,{targetEl:d,children:[(0,ce.jsxs)(wl,{className:"fbw-thread",children:[(0,ce.jsxs)(Ll,{children:["\uCF54\uBA58\uD2B8 ",a]}),t.resolved&&(0,ce.jsx)(fi,{$tone:"success",children:"\uC644\uB8CC\uB428"}),(0,ce.jsx)(Ke,{variant:"ghost",size:"sm",tone:"danger","aria-label":"\uC2A4\uB808\uB4DC \uC0AD\uC81C",onClick:h,children:(0,ce.jsx)(Wt,{size:16})}),(0,ce.jsx)(Ke,{variant:"ghost",size:"sm","aria-label":"\uB2EB\uAE30",onClick:r,children:(0,ce.jsx)(Ge,{size:16})})]}),(0,ce.jsx)(t0,{children:t.comments.map(y=>(0,ce.jsx)(px,{author:y.author,timestamp:NS(y.createdAt),body:y.body,actions:e.canRemoveComment(t.id,y.id)?(0,ce.jsx)(Ke,{variant:"ghost",size:"sm",tone:"danger","aria-label":"\uB2F5\uAE00 \uC0AD\uC81C",onClick:()=>x(y),children:(0,ce.jsx)(Wt,{size:14})}):void 0},y.id))}),!e.author&&(0,ce.jsx)(Sa,{size:"sm",placeholder:"\uC774\uB984 (\uAE30\uC5B5\uB429\uB2C8\uB2E4)","aria-label":"\uC791\uC131\uC790 \uC774\uB984",value:s,onChange:y=>u(y.target.value)}),(0,ce.jsx)(pl,{value:i,onChange:n,onSubmit:p,placeholder:"\uB2F5\uAE00\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694",submitLabel:"\uB2F5\uAE00"}),(0,ce.jsx)(ll,{tone:t.resolved?"muted":"accent",iconLeading:(0,ce.jsx)(Vr,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?"\uC644\uB8CC \uCDE8\uC18C":"\uC644\uB8CC \uCC98\uB9AC"})]})}var mc=c(I(),1);function h0(e,t){return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:t},null,2)}function v0(e,t){let a=new Blob([h0(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function x0(e,t){try{return await navigator.clipboard.writeText(h0(e,t)),!0}catch{return!1}}var nt=c(m(),1),US=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,qS=l.span`
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
`,WS=l.span`
  margin-left: auto;
`,VS=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,GS=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function b0({store:e,thread:t,number:a,onSelect:r}){let o=fl(),i=async s=>{s.stopPropagation(),await o({title:"\uC774 \uCF54\uBA58\uD2B8 \uC2A4\uB808\uB4DC\uB97C \uC0AD\uC81C\uD560\uAE4C\uC694?",description:Xa(t),confirmLabel:"\uC0AD\uC81C",cancelLabel:"\uCDE8\uC18C",danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,nt.jsxs)(fx,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,nt.jsxs)(US,{children:[(0,nt.jsx)(qS,{children:a}),(0,nt.jsx)("span",{children:Zm(t)}),t.resolved&&(0,nt.jsx)(fi,{$tone:"success",children:"\uC644\uB8CC"}),(0,nt.jsx)(WS,{}),(0,nt.jsx)(Ke,{variant:"ghost",size:"sm",tone:"danger","aria-label":"\uC2A4\uB808\uB4DC \uC0AD\uC81C",onClick:i,children:(0,nt.jsx)(Wt,{size:14})})]}),(0,nt.jsx)(VS,{children:Xa(t)}),(0,nt.jsxs)(GS,{children:[t.anchor.page,n>0&&` \xB7 \uB2F5\uAE00 ${n}`]})]})}var re=c(m(),1),XS=320,YS=l.button`
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
`,KS=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${XS}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,QS=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,ZS=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,JS=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function y0({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,mc.useState)(null),[n,s]=(0,mc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),h=w=>u.findIndex($=>$.id===w.id)+1,x=w=>{if(!bd(w.anchor)){ah(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await x0(e.project,e.exportList())?"\uBCF5\uC0AC\uB428!":"\uBCF5\uC0AC \uC2E4\uD328"),setTimeout(()=>i(null),1500)},b=w=>w.map($=>(0,re.jsx)(b0,{store:e,thread:$,number:h($),onSelect:x},$.id));return(0,re.jsxs)(re.Fragment,{children:[(0,re.jsxs)(YS,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:["\uCF54\uBA58\uD2B8 ",u.length]}),(0,re.jsx)(KS,{$open:t,className:"fbw-sidebar",children:(0,re.jsx)(Ix,{headerSlot:(0,re.jsxs)(QS,{children:[(0,re.jsxs)("span",{children:["\uCF54\uBA58\uD2B8 \uBAA9\uB85D (",u.length,")"]}),(0,re.jsx)(Ke,{variant:"ghost",size:"sm","aria-label":"\uB2EB\uAE30",onClick:()=>a(!1),children:(0,re.jsx)(Ge,{size:16})})]}),bodySectionTitle:"\uC9C4\uD589 \uC911",bodySlot:d.length===0?(0,re.jsxs)(ZS,{children:["\uC544\uC9C1 \uCF54\uBA58\uD2B8\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.",(0,re.jsx)("br",{}),"\uD398\uC774\uC9C0 \uC694\uC18C\uC5D0 \uC6B0\uD074\uB9AD(\uBAA8\uBC14\uC77C: \uAE38\uAC8C \uB204\uB974\uAE30)\uD574 \uBCF4\uC138\uC694."]}):b(d),footerSlots:[p.length>0&&(0,re.jsxs)(re.Fragment,{children:[(0,re.jsxs)(ll,{tone:"muted",onClick:()=>s(w=>!w),children:["\uC644\uB8CC\uB428 ",p.length," ",n?"\uC811\uAE30":"\uD3BC\uCE58\uAE30"]}),n&&b(p)]}),(0,re.jsxs)(JS,{children:[(0,re.jsx)(Kr,{variant:"secondary",size:"sm",onClick:y,children:o??"\uBCF5\uC0AC"}),(0,re.jsx)(Kr,{variant:"solid",size:"sm",onClick:()=>v0(e.project,e.exportList()),children:"JSON \uB0B4\uB824\uBC1B\uAE30"})]})]})})]})}var Xt=c(m(),1),w0=l.button`
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
`,eC=l.span`
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

  ${w0}:hover + & {
    opacity: 1;
  }
`,tC=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function L0({store:e}){let t=e.list().length;return(0,Xt.jsxs)(Xt.Fragment,{children:[(0,Xt.jsxs)(w0,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?"\uCF54\uBA58\uD2B8 \uBAA8\uB4DC \uB044\uAE30":"\uCF54\uBA58\uD2B8 \uBAA8\uB4DC \uCF1C\uAE30",onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,Xt.jsx)(tC,{children:(0,Xt.jsx)(Tv,{children:t})})]}),(0,Xt.jsx)(eC,{children:e.enabled?"\uCF54\uBA58\uD2B8 \uBAA8\uB4DC \uCF1C\uC9D0 \u2014 \uC6B0\uD074\uB9AD(\uAE38\uAC8C \uB204\uB974\uAE30)\uC73C\uB85C \uC791\uC131":"\uCF54\uBA58\uD2B8 \uBAA8\uB4DC \uCF1C\uAE30"})]})}var yt=c(m(),1);function S0({store:e}){n0(e);let[t,a]=(0,pi.useState)(null),[r,o]=(0,pi.useState)(!1),i=e.enabled;(0,pi.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ya(n.anchor):null;return(0,yt.jsxs)(rx,{children:[i&&(0,yt.jsx)(s0,{active:!t,onPick:(d,p,h)=>a({kind:"draft",el:d,anchor:th(d),point:{x:p,y:h}})}),i&&(0,yt.jsx)(f0,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,yt.jsx)(fc,{el:t.el}),u&&(0,yt.jsx)(fc,{el:u}),t?.kind==="draft"&&(0,yt.jsx)(g0,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,yt.jsx)(m0,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,yt.jsx)(y0,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,yt.jsx)(L0,{store:e})]})}var hc=c(m(),1),aC=2147483e3;function rC(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var oC=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`,P0=document.currentScript??document.querySelector("script[data-project]"),iC=P0?.dataset.project??"default",C0=P0?.dataset.seed;function I0(){if(document.getElementById(qr))return;let e=document.createElement("div");e.id=qr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${aC};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=rC(Qm)+oC;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new Zn(iC);(0,k0.createRoot)(o).render((0,hc.jsx)(Gm,{target:r,children:(0,hc.jsx)(S0,{store:i})})),C0&&typeof fetch=="function"&&fetch(C0).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),rh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",I0):I0();})();
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
