"use strict";(()=>{var Mb=Object.create;var Vc=Object.defineProperty;var zb=Object.getOwnPropertyDescriptor;var Ab=Object.getOwnPropertyNames;var Db=Object.getPrototypeOf,Bb=Object.prototype.hasOwnProperty;var Nt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Fb=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Ab(t))!Bb.call(e,o)&&o!==a&&Vc(e,o,{get:()=>t[o],enumerable:!(r=zb(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?Mb(Db(e)):{},Fb(t||!e||!e.__esModule?Vc(a,"default",{value:e,enumerable:!0}):a,e));var of=Nt(B=>{"use strict";var Lo=Symbol.for("react.element"),Ob=Symbol.for("react.portal"),jb=Symbol.for("react.fragment"),Nb=Symbol.for("react.strict_mode"),_b=Symbol.for("react.profiler"),Hb=Symbol.for("react.provider"),Ub=Symbol.for("react.context"),qb=Symbol.for("react.forward_ref"),Wb=Symbol.for("react.suspense"),Vb=Symbol.for("react.memo"),Gb=Symbol.for("react.lazy"),Gc=Symbol.iterator;function Xb(e){return e===null||typeof e!="object"?null:(e=Gc&&e[Gc]||e["@@iterator"],typeof e=="function"?e:null)}var Kc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qc=Object.assign,Zc={};function vr(e,t,a){this.props=e,this.context=t,this.refs=Zc,this.updater=a||Kc}vr.prototype.isReactComponent={};vr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};vr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Jc(){}Jc.prototype=vr.prototype;function Ql(e,t,a){this.props=e,this.context=t,this.refs=Zc,this.updater=a||Kc}var Zl=Ql.prototype=new Jc;Zl.constructor=Ql;Qc(Zl,vr.prototype);Zl.isPureReactComponent=!0;var Xc=Array.isArray,ef=Object.prototype.hasOwnProperty,Jl={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)ef.call(t,r)&&!tf.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Lo,type:e,key:i,ref:n,props:o,_owner:Jl.current}}function Yb(e,t){return{$$typeof:Lo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function es(e){return typeof e=="object"&&e!==null&&e.$$typeof===Lo}function Kb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Yc=/\/+/g;function Kl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Kb(""+e.key):t.toString(36)}function ji(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case Lo:case Ob:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+Kl(n,0):r,Xc(o)?(a="",e!=null&&(a=e.replace(Yc,"$&/")+"/"),ji(o,t,a,"",function(d){return d})):o!=null&&(es(o)&&(o=Yb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(Yc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",Xc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Kl(i,s);n+=ji(i,t,a,u,o)}else if(u=Xb(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Kl(i,s++),n+=ji(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Oi(e,t,a){if(e==null)return e;var r=[],o=0;return ji(e,r,"","",function(i){return t.call(a,i,o++)}),r}function Qb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Ni={transition:null},Zb={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ni,ReactCurrentOwner:Jl};function rf(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Oi,forEach:function(e,t,a){Oi(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Oi(e,function(){t++}),t},toArray:function(e){return Oi(e,function(t){return t})||[]},only:function(e){if(!es(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=vr;B.Fragment=jb;B.Profiler=_b;B.PureComponent=Ql;B.StrictMode=Nb;B.Suspense=Wb;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zb;B.act=rf;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ef.call(t,u)&&!tf.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Lo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:Ub,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Hb,_context:e},e.Consumer=e};B.createElement=af;B.createFactory=function(e){var t=af.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:qb,render:e}};B.isValidElement=es;B.lazy=function(e){return{$$typeof:Gb,_payload:{_status:-1,_result:e},_init:Qb}};B.memo=function(e,t){return{$$typeof:Vb,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ni.transition;Ni.transition={};try{e()}finally{Ni.transition=t}};B.unstable_act=rf;B.useCallback=function(e,t){return $e.current.useCallback(e,t)};B.useContext=function(e){return $e.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};B.useEffect=function(e,t){return $e.current.useEffect(e,t)};B.useId=function(){return $e.current.useId()};B.useImperativeHandle=function(e,t,a){return $e.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return $e.current.useMemo(e,t)};B.useReducer=function(e,t,a){return $e.current.useReducer(e,t,a)};B.useRef=function(e){return $e.current.useRef(e)};B.useState=function(e){return $e.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return $e.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return $e.current.useTransition()};B.version="18.3.1"});var C=Nt((rk,nf)=>{"use strict";nf.exports=of()});var hf=Nt(q=>{"use strict";function os(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<_i(o,t))e[r]=t,e[a]=o,a=r;else break e}}function mt(e){return e.length===0?null:e[0]}function Ui(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>_i(s,a))u<o&&0>_i(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>_i(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function _i(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(lf=performance,q.unstable_now=function(){return lf.now()}):(ts=Date,sf=ts.now(),q.unstable_now=function(){return ts.now()-sf});var lf,ts,sf,Rt=[],na=[],Jb=1,ot=null,Le=3,qi=!1,Fa=!1,Co=!1,cf=typeof setTimeout=="function"?setTimeout:null,ff=typeof clearTimeout=="function"?clearTimeout:null,uf=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function is(e){for(var t=mt(na);t!==null;){if(t.callback===null)Ui(na);else if(t.startTime<=e)Ui(na),t.sortIndex=t.expirationTime,os(Rt,t);else break;t=mt(na)}}function ns(e){if(Co=!1,is(e),!Fa)if(mt(Rt)!==null)Fa=!0,ss(ls);else{var t=mt(na);t!==null&&us(ns,t.startTime-e)}}function ls(e,t){Fa=!1,Co&&(Co=!1,ff(Io),Io=-1),qi=!0;var a=Le;try{for(is(t),ot=mt(Rt);ot!==null&&(!(ot.expirationTime>t)||e&&!mf());){var r=ot.callback;if(typeof r=="function"){ot.callback=null,Le=ot.priorityLevel;var o=r(ot.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?ot.callback=o:ot===mt(Rt)&&Ui(Rt),is(t)}else Ui(Rt);ot=mt(Rt)}if(ot!==null)var i=!0;else{var n=mt(na);n!==null&&us(ns,n.startTime-t),i=!1}return i}finally{ot=null,Le=a,qi=!1}}var Wi=!1,Hi=null,Io=-1,pf=5,gf=-1;function mf(){return!(q.unstable_now()-gf<pf)}function as(){if(Hi!==null){var e=q.unstable_now();gf=e;var t=!0;try{t=Hi(!0,e)}finally{t?So():(Wi=!1,Hi=null)}}else Wi=!1}var So;typeof uf=="function"?So=function(){uf(as)}:typeof MessageChannel<"u"?(rs=new MessageChannel,df=rs.port2,rs.port1.onmessage=as,So=function(){df.postMessage(null)}):So=function(){cf(as,0)};var rs,df;function ss(e){Hi=e,Wi||(Wi=!0,So())}function us(e,t){Io=cf(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Fa||qi||(Fa=!0,ss(ls))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pf=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return Le};q.unstable_getFirstCallbackNode=function(){return mt(Rt)};q.unstable_next=function(e){switch(Le){case 1:case 2:case 3:var t=3;break;default:t=Le}var a=Le;Le=t;try{return e()}finally{Le=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=Le;Le=e;try{return t()}finally{Le=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:Jb++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,os(na,e),mt(Rt)===null&&e===mt(na)&&(Co?(ff(Io),Io=-1):Co=!0,us(ns,a-r))):(e.sortIndex=o,os(Rt,e),Fa||qi||(Fa=!0,ss(ls))),e};q.unstable_shouldYield=mf;q.unstable_wrapCallback=function(e){var t=Le;return function(){var a=Le;Le=t;try{return e.apply(this,arguments)}finally{Le=a}}}});var xf=Nt((ik,vf)=>{"use strict";vf.exports=hf()});var Lm=Nt(Qe=>{"use strict";var ey=C(),Ye=xf();function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ip=new Set,Go={};function Ka(e,t){Or(e,t),Or(e+"Capture",t)}function Or(e,t){for(Go[e]=t,e=0;e<t.length;e++)Ip.add(t[e])}var Vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ms=Object.prototype.hasOwnProperty,ty=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},yf={};function ay(e){return Ms.call(yf,e)?!0:Ms.call(bf,e)?!1:ty.test(e)?yf[e]=!0:(bf[e]=!0,!1)}function ry(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function oy(e,t,a,r){if(t===null||typeof t>"u"||ry(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cu=/[\-:]([a-z])/g;function Iu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cu,Iu);he[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cu,Iu);he[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cu,Iu);he[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function ku(e,t,a,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(oy(t,a,o,r)&&(a=null),r||o===null?ay(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Kt=ey.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),yr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Pu=Symbol.for("react.strict_mode"),zs=Symbol.for("react.profiler"),kp=Symbol.for("react.provider"),Pp=Symbol.for("react.context"),Tu=Symbol.for("react.forward_ref"),As=Symbol.for("react.suspense"),Ds=Symbol.for("react.suspense_list"),Ru=Symbol.for("react.memo"),sa=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Tp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var wf=Symbol.iterator;function ko(e){return e===null||typeof e!="object"?null:(e=wf&&e[wf]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ds;function Ao(e){if(ds===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ds=t&&t[1]||""}return`
`+ds+e}var cs=!1;function fs(e,t){if(!e||cs)return"";cs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{cs=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Ao(e):""}function iy(e){switch(e.tag){case 5:return Ao(e.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return e=fs(e.type,!1),e;case 11:return e=fs(e.type.render,!1),e;case 1:return e=fs(e.type,!0),e;default:return""}}function Bs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case yr:return"Portal";case zs:return"Profiler";case Pu:return"StrictMode";case As:return"Suspense";case Ds:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pp:return(e.displayName||"Context")+".Consumer";case kp:return(e._context.displayName||"Context")+".Provider";case Tu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ru:return t=e.displayName||null,t!==null?t:Bs(e.type)||"Memo";case sa:t=e._payload,e=e._init;try{return Bs(e(t))}catch{}}return null}function ny(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bs(t);case 8:return t===Pu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function La(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ly(e){var t=Rp(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=ly(e))}function Ep(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=Rp(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function Ln(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fs(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Lf(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=La(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $p(e,t){t=t.checked,t!=null&&ku(e,"checked",t,!1)}function Os(e,t){$p(e,t);var a=La(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?js(e,t.type,a):t.hasOwnProperty("defaultValue")&&js(e,t.type,La(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sf(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function js(e,t,a){(t!=="number"||Ln(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Do=Array.isArray;function Mr(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+La(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ns(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cf(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(I(92));if(Do(a)){if(1<a.length)throw Error(I(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:La(a)}}function Mp(e,t){var a=La(t.value),r=La(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function If(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _s(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xi,Ap=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xi=Xi||document.createElement("div"),Xi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xo(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sy=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(e){sy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Oo[t]=Oo[e]})});function Dp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Oo.hasOwnProperty(e)&&Oo[e]?(""+t).trim():t+"px"}function Bp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=Dp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var uy=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hs(e,t){if(t){if(uy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Us(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qs=null;function Eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,zr=null,Ar=null;function kf(e){if(e=fi(e)){if(typeof Ws!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Kn(t),Ws(e.stateNode,e.type,t))}}function Fp(e){zr?Ar?Ar.push(e):Ar=[e]:zr=e}function Op(){if(zr){var e=zr,t=Ar;if(Ar=zr=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function jp(e,t){return e(t)}function Np(){}var ps=!1;function _p(e,t,a){if(ps)return e(t,a);ps=!0;try{return jp(e,t,a)}finally{ps=!1,(zr!==null||Ar!==null)&&(Np(),Op())}}function Yo(e,t){var a=e.stateNode;if(a===null)return null;var r=Kn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(I(231,t,typeof a));return a}var Vs=!1;if(Vt)try{xr={},Object.defineProperty(xr,"passive",{get:function(){Vs=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Vs=!1}var xr;function dy(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var jo=!1,Sn=null,Cn=!1,Gs=null,cy={onError:function(e){jo=!0,Sn=e}};function fy(e,t,a,r,o,i,n,s,u){jo=!1,Sn=null,dy.apply(cy,arguments)}function py(e,t,a,r,o,i,n,s,u){if(fy.apply(this,arguments),jo){if(jo){var d=Sn;jo=!1,Sn=null}else throw Error(I(198));Cn||(Cn=!0,Gs=d)}}function Qa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Hp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pf(e){if(Qa(e)!==e)throw Error(I(188))}function gy(e){var t=e.alternate;if(!t){if(t=Qa(e),t===null)throw Error(I(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return Pf(o),e;if(i===r)return Pf(o),t;i=i.sibling}throw Error(I(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(I(189))}}if(a.alternate!==r)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?e:t}function Up(e){return e=gy(e),e!==null?qp(e):null}function qp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qp(e);if(t!==null)return t;e=e.sibling}return null}var Wp=Ye.unstable_scheduleCallback,Tf=Ye.unstable_cancelCallback,my=Ye.unstable_shouldYield,hy=Ye.unstable_requestPaint,re=Ye.unstable_now,vy=Ye.unstable_getCurrentPriorityLevel,$u=Ye.unstable_ImmediatePriority,Vp=Ye.unstable_UserBlockingPriority,In=Ye.unstable_NormalPriority,xy=Ye.unstable_LowPriority,Gp=Ye.unstable_IdlePriority,Vn=null,zt=null;function by(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Vn,e,void 0,(e.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:Ly,yy=Math.log,wy=Math.LN2;function Ly(e){return e>>>=0,e===0?32:31-(yy(e)/wy|0)|0}var Yi=64,Ki=4194304;function Bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function kn(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=Bo(s):(i&=n,i!==0&&(r=Bo(i)))}else n=a&~o,n!==0?r=Bo(n):i!==0&&(r=Bo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-yt(t),o=1<<a,r|=e[a],t&=~o;return r}function Sy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cy(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-yt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=Sy(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Xs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Xp(){var e=Yi;return Yi<<=1,(Yi&4194240)===0&&(Yi=64),e}function gs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function di(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-yt(t),e[t]=a}function Iy(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-yt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function Mu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-yt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var N=0;function Yp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Kp,zu,Qp,Zp,Jp,Ys=!1,Qi=[],ga=null,ma=null,ha=null,Ko=new Map,Qo=new Map,da=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":ha=null;break;case"pointerover":case"pointerout":Ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(t.pointerId)}}function Po(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=fi(t),t!==null&&zu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Py(e,t,a,r,o){switch(t){case"focusin":return ga=Po(ga,e,t,a,r,o),!0;case"dragenter":return ma=Po(ma,e,t,a,r,o),!0;case"mouseover":return ha=Po(ha,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Ko.set(i,Po(Ko.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Qo.set(i,Po(Qo.get(i)||null,e,t,a,r,o)),!0}return!1}function eg(e){var t=Na(e.target);if(t!==null){var a=Qa(t);if(a!==null){if(t=a.tag,t===13){if(t=Hp(a),t!==null){e.blockedOn=t,Jp(e.priority,function(){Qp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);qs=r,a.target.dispatchEvent(r),qs=null}else return t=fi(a),t!==null&&zu(t),e.blockedOn=a,!1;t.shift()}return!0}function Ef(e,t,a){fn(e)&&a.delete(t)}function Ty(){Ys=!1,ga!==null&&fn(ga)&&(ga=null),ma!==null&&fn(ma)&&(ma=null),ha!==null&&fn(ha)&&(ha=null),Ko.forEach(Ef),Qo.forEach(Ef)}function To(e,t){e.blockedOn===t&&(e.blockedOn=null,Ys||(Ys=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Ty)))}function Zo(e){function t(o){return To(o,e)}if(0<Qi.length){To(Qi[0],e);for(var a=1;a<Qi.length;a++){var r=Qi[a];r.blockedOn===e&&(r.blockedOn=null)}}for(ga!==null&&To(ga,e),ma!==null&&To(ma,e),ha!==null&&To(ha,e),Ko.forEach(t),Qo.forEach(t),a=0;a<da.length;a++)r=da[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<da.length&&(a=da[0],a.blockedOn===null);)eg(a),a.blockedOn===null&&da.shift()}var Dr=Kt.ReactCurrentBatchConfig,Pn=!0;function Ry(e,t,a,r){var o=N,i=Dr.transition;Dr.transition=null;try{N=1,Au(e,t,a,r)}finally{N=o,Dr.transition=i}}function Ey(e,t,a,r){var o=N,i=Dr.transition;Dr.transition=null;try{N=4,Au(e,t,a,r)}finally{N=o,Dr.transition=i}}function Au(e,t,a,r){if(Pn){var o=Ks(e,t,a,r);if(o===null)ws(e,t,r,Tn,a),Rf(e,r);else if(Py(o,e,t,a,r))r.stopPropagation();else if(Rf(e,r),t&4&&-1<ky.indexOf(e)){for(;o!==null;){var i=fi(o);if(i!==null&&Kp(i),i=Ks(e,t,a,r),i===null&&ws(e,t,r,Tn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else ws(e,t,r,null,a)}}var Tn=null;function Ks(e,t,a,r){if(Tn=null,e=Eu(r),e=Na(e),e!==null)if(t=Qa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Hp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function tg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case $u:return 1;case Vp:return 4;case In:case xy:return 16;case Gp:return 536870912;default:return 16}default:return 16}}var fa=null,Du=null,pn=null;function ag(){if(pn)return pn;var e,t=Du,a=t.length,r,o="value"in fa?fa.value:fa.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return pn=o.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zi(){return!0}function $f(){return!1}function Ke(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zi:$f,this.isPropagationStopped=$f,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zi)},persist:function(){},isPersistent:Zi}),t}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bu=Ke(Wr),ci=Q({},Wr,{view:0,detail:0}),$y=Ke(ci),ms,hs,Ro,Gn=Q({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ro&&(Ro&&e.type==="mousemove"?(ms=e.screenX-Ro.screenX,hs=e.screenY-Ro.screenY):hs=ms=0,Ro=e),ms)},movementY:function(e){return"movementY"in e?e.movementY:hs}}),Mf=Ke(Gn),My=Q({},Gn,{dataTransfer:0}),zy=Ke(My),Ay=Q({},ci,{relatedTarget:0}),vs=Ke(Ay),Dy=Q({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),By=Ke(Dy),Fy=Q({},Wr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Oy=Ke(Fy),jy=Q({},Wr,{data:0}),zf=Ke(jy),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hy[e])?!!t[e]:!1}function Fu(){return Uy}var qy=Q({},ci,{key:function(e){if(e.key){var t=Ny[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_y[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(e){return e.type==="keypress"?gn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=Ke(qy),Vy=Q({},Gn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=Ke(Vy),Gy=Q({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),Xy=Ke(Gy),Yy=Q({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ky=Ke(Yy),Qy=Q({},Gn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=Ke(Qy),Jy=[9,13,27,32],Ou=Vt&&"CompositionEvent"in window,No=null;Vt&&"documentMode"in document&&(No=document.documentMode);var e1=Vt&&"TextEvent"in window&&!No,rg=Vt&&(!Ou||No&&8<No&&11>=No),Df=" ",Bf=!1;function og(e,t){switch(e){case"keyup":return Jy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Lr=!1;function t1(e,t){switch(e){case"compositionend":return ig(t);case"keypress":return t.which!==32?null:(Bf=!0,Df);case"textInput":return e=t.data,e===Df&&Bf?null:e;default:return null}}function a1(e,t){if(Lr)return e==="compositionend"||!Ou&&og(e,t)?(e=ag(),pn=Du=fa=null,Lr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return rg&&t.locale!=="ko"?null:t.data;default:return null}}var r1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!r1[e.type]:t==="textarea"}function ng(e,t,a,r){Fp(r),t=Rn(t,"onChange"),0<t.length&&(a=new Bu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var _o=null,Jo=null;function o1(e){vg(e,0)}function Xn(e){var t=Ir(e);if(Ep(t))return e}function i1(e,t){if(e==="change")return t}var lg=!1;Vt&&(Vt?(en="oninput"in document,en||(xs=document.createElement("div"),xs.setAttribute("oninput","return;"),en=typeof xs.oninput=="function"),Ji=en):Ji=!1,lg=Ji&&(!document.documentMode||9<document.documentMode));var Ji,en,xs;function Of(){_o&&(_o.detachEvent("onpropertychange",sg),Jo=_o=null)}function sg(e){if(e.propertyName==="value"&&Xn(Jo)){var t=[];ng(t,Jo,e,Eu(e)),_p(o1,t)}}function n1(e,t,a){e==="focusin"?(Of(),_o=t,Jo=a,_o.attachEvent("onpropertychange",sg)):e==="focusout"&&Of()}function l1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xn(Jo)}function s1(e,t){if(e==="click")return Xn(t)}function u1(e,t){if(e==="input"||e==="change")return Xn(t)}function d1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Lt=typeof Object.is=="function"?Object.is:d1;function ei(e,t){if(Lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Ms.call(t,o)||!Lt(e[o],t[o]))return!1}return!0}function jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var a=jf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function ug(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ug(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dg(){for(var e=window,t=Ln();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ln(e.document)}return t}function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c1(e){var t=dg(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&ug(a.ownerDocument.documentElement,a)){if(r!==null&&ju(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Nf(a,i);var n=Nf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f1=Vt&&"documentMode"in document&&11>=document.documentMode,Sr=null,Qs=null,Ho=null,Zs=!1;function _f(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zs||Sr==null||Sr!==Ln(r)||(r=Sr,"selectionStart"in r&&ju(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ho&&ei(Ho,r)||(Ho=r,r=Rn(Qs,"onSelect"),0<r.length&&(t=new Bu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Sr)))}function tn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Cr={animationend:tn("Animation","AnimationEnd"),animationiteration:tn("Animation","AnimationIteration"),animationstart:tn("Animation","AnimationStart"),transitionend:tn("Transition","TransitionEnd")},bs={},cg={};Vt&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Yn(e){if(bs[e])return bs[e];if(!Cr[e])return e;var t=Cr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in cg)return bs[e]=t[a];return e}var fg=Yn("animationend"),pg=Yn("animationiteration"),gg=Yn("animationstart"),mg=Yn("transitionend"),hg=new Map,Hf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ca(e,t){hg.set(e,t),Ka(t,[e])}for(an=0;an<Hf.length;an++)rn=Hf[an],Uf=rn.toLowerCase(),qf=rn[0].toUpperCase()+rn.slice(1),Ca(Uf,"on"+qf);var rn,Uf,qf,an;Ca(fg,"onAnimationEnd");Ca(pg,"onAnimationIteration");Ca(gg,"onAnimationStart");Ca("dblclick","onDoubleClick");Ca("focusin","onFocus");Ca("focusout","onBlur");Ca(mg,"onTransitionEnd");Or("onMouseEnter",["mouseout","mouseover"]);Or("onMouseLeave",["mouseout","mouseover"]);Or("onPointerEnter",["pointerout","pointerover"]);Or("onPointerLeave",["pointerout","pointerover"]);Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),p1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Wf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,py(r,t,void 0,e),e.currentTarget=null}function vg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Wf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Wf(o,s,d),i=u}}}if(Cn)throw e=Gs,Cn=!1,Gs=null,e}function V(e,t){var a=t[ru];a===void 0&&(a=t[ru]=new Set);var r=e+"__bubble";a.has(r)||(xg(t,e,2,!1),a.add(r))}function ys(e,t,a){var r=0;t&&(r|=4),xg(a,e,r,t)}var on="_reactListening"+Math.random().toString(36).slice(2);function ti(e){if(!e[on]){e[on]=!0,Ip.forEach(function(a){a!=="selectionchange"&&(p1.has(a)||ys(a,!1,e),ys(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[on]||(t[on]=!0,ys("selectionchange",!1,t))}}function xg(e,t,a,r){switch(tg(t)){case 1:var o=Ry;break;case 4:o=Ey;break;default:o=Au}a=o.bind(null,t,a,e),o=void 0,!Vs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function ws(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=Na(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}_p(function(){var d=i,p=Eu(a),v=[];e:{var x=hg.get(e);if(x!==void 0){var y=Bu,b=e;switch(e){case"keypress":if(gn(a)===0)break e;case"keydown":case"keyup":y=Wy;break;case"focusin":b="focus",y=vs;break;case"focusout":b="blur",y=vs;break;case"beforeblur":case"afterblur":y=vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Xy;break;case fg:case pg:case gg:y=By;break;case mg:y=Ky;break;case"scroll":y=$y;break;case"wheel":y=Zy;break;case"copy":case"cut":case"paste":y=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Af}var w=(t&4)!==0,M=!w&&e==="scroll",g=w?x!==null?x+"Capture":null:x;w=[];for(var f=d,h;f!==null;){h=f;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Yo(f,g),S!=null&&w.push(ai(f,S,h)))),M)break;f=f.return}0<w.length&&(x=new y(x,b,null,a,p),v.push({event:x,listeners:w}))}}if((t&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",x&&a!==qs&&(b=a.relatedTarget||a.fromElement)&&(Na(b)||b[Gt]))break e;if((y||x)&&(x=p.window===p?p:(x=p.ownerDocument)?x.defaultView||x.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?Na(b):null,b!==null&&(M=Qa(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=Mf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Af,S="onPointerLeave",g="onPointerEnter",f="pointer"),M=y==null?x:Ir(y),h=b==null?x:Ir(b),x=new w(S,f+"leave",y,a,p),x.target=M,x.relatedTarget=h,S=null,Na(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=h,w.relatedTarget=M,S=w),M=S,y&&b)t:{for(w=y,g=b,f=0,h=w;h;h=br(h))f++;for(h=0,S=g;S;S=br(S))h++;for(;0<f-h;)w=br(w),f--;for(;0<h-f;)g=br(g),h--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=br(w),g=br(g)}w=null}else w=null;y!==null&&Vf(v,x,y,w,!1),b!==null&&M!==null&&Vf(v,M,b,w,!0)}}e:{if(x=d?Ir(d):window,y=x.nodeName&&x.nodeName.toLowerCase(),y==="select"||y==="input"&&x.type==="file")var P=i1;else if(Ff(x))if(lg)P=u1;else{P=l1;var E=n1}else(y=x.nodeName)&&y.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(P=s1);if(P&&(P=P(e,d))){ng(v,P,a,p);break e}E&&E(e,x,d),e==="focusout"&&(E=x._wrapperState)&&E.controlled&&x.type==="number"&&js(x,"number",x.value)}switch(E=d?Ir(d):window,e){case"focusin":(Ff(E)||E.contentEditable==="true")&&(Sr=E,Qs=d,Ho=null);break;case"focusout":Ho=Qs=Sr=null;break;case"mousedown":Zs=!0;break;case"contextmenu":case"mouseup":case"dragend":Zs=!1,_f(v,a,p);break;case"selectionchange":if(f1)break;case"keydown":case"keyup":_f(v,a,p)}var k;if(Ou)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Lr?og(e,a)&&(R="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(R="onCompositionStart");R&&(rg&&a.locale!=="ko"&&(Lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Lr&&(k=ag()):(fa=p,Du="value"in fa?fa.value:fa.textContent,Lr=!0)),E=Rn(d,R),0<E.length&&(R=new zf(R,e,null,a,p),v.push({event:R,listeners:E}),k?R.data=k:(k=ig(a),k!==null&&(R.data=k)))),(k=e1?t1(e,a):a1(e,a))&&(d=Rn(d,"onBeforeInput"),0<d.length&&(p=new zf("onBeforeInput","beforeinput",null,a,p),v.push({event:p,listeners:d}),p.data=k))}vg(v,t)})}function ai(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Rn(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yo(e,a),i!=null&&r.unshift(ai(e,i,o)),i=Yo(e,t),i!=null&&r.push(ai(e,i,o))),e=e.return}return r}function br(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Vf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Yo(a,i),u!=null&&n.unshift(ai(a,u,s))):o||(u=Yo(a,i),u!=null&&n.push(ai(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var g1=/\r\n?/g,m1=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(g1,`
`).replace(m1,"")}function nn(e,t,a){if(t=Gf(t),Gf(e)!==t&&a)throw Error(I(425))}function En(){}var Js=null,eu=null;function tu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var au=typeof setTimeout=="function"?setTimeout:void 0,h1=typeof clearTimeout=="function"?clearTimeout:void 0,Xf=typeof Promise=="function"?Promise:void 0,v1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xf<"u"?function(e){return Xf.resolve(null).then(e).catch(x1)}:au;function x1(e){setTimeout(function(){throw e})}function Ls(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Zo(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Zo(t)}function va(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Yf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Vr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Vr,ri="__reactProps$"+Vr,Gt="__reactContainer$"+Vr,ru="__reactEvents$"+Vr,b1="__reactListeners$"+Vr,y1="__reactHandles$"+Vr;function Na(e){var t=e[Mt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Gt]||a[Mt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Yf(e);e!==null;){if(a=e[Mt])return a;e=Yf(e)}return t}e=a,a=e.parentNode}return null}function fi(e){return e=e[Mt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ir(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Kn(e){return e[ri]||null}var ou=[],kr=-1;function Ia(e){return{current:e}}function G(e){0>kr||(e.current=ou[kr],ou[kr]=null,kr--)}function W(e,t){kr++,ou[kr]=e.current,e.current=t}var Sa={},ke=Ia(Sa),He=Ia(!1),Wa=Sa;function jr(e,t){var a=e.type.contextTypes;if(!a)return Sa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function $n(){G(He),G(ke)}function Kf(e,t,a){if(ke.current!==Sa)throw Error(I(168));W(ke,t),W(He,a)}function bg(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,ny(e)||"Unknown",o));return Q({},a,r)}function Mn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Sa,Wa=ke.current,W(ke,e),W(He,He.current),!0}function Qf(e,t,a){var r=e.stateNode;if(!r)throw Error(I(169));a?(e=bg(e,t,Wa),r.__reactInternalMemoizedMergedChildContext=e,G(He),G(ke),W(ke,e)):G(He),W(He,a)}var Ht=null,Qn=!1,Ss=!1;function yg(e){Ht===null?Ht=[e]:Ht.push(e)}function w1(e){Qn=!0,yg(e)}function ka(){if(!Ss&&Ht!==null){Ss=!0;var e=0,t=N;try{var a=Ht;for(N=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}Ht=null,Qn=!1}catch(o){throw Ht!==null&&(Ht=Ht.slice(e+1)),Wp($u,ka),o}finally{N=t,Ss=!1}}return null}var Pr=[],Tr=0,zn=null,An=0,it=[],nt=0,Va=null,Ut=1,qt="";function Oa(e,t){Pr[Tr++]=An,Pr[Tr++]=zn,zn=e,An=t}function wg(e,t,a){it[nt++]=Ut,it[nt++]=qt,it[nt++]=Va,Va=e;var r=Ut;e=qt;var o=32-yt(r)-1;r&=~(1<<o),a+=1;var i=32-yt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,Ut=1<<32-yt(t)+o|a<<o|r,qt=i+e}else Ut=1<<i|a<<o|r,qt=e}function Nu(e){e.return!==null&&(Oa(e,1),wg(e,1,0))}function _u(e){for(;e===zn;)zn=Pr[--Tr],Pr[Tr]=null,An=Pr[--Tr],Pr[Tr]=null;for(;e===Va;)Va=it[--nt],it[nt]=null,qt=it[--nt],it[nt]=null,Ut=it[--nt],it[nt]=null}var Xe=null,Ge=null,X=!1,bt=null;function Lg(e,t){var a=lt(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Zf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=va(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Va!==null?{id:Ut,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=lt(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Xe=e,Ge=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function nu(e){if(X){var t=Ge;if(t){var a=t;if(!Zf(e,t)){if(iu(e))throw Error(I(418));t=va(a.nextSibling);var r=Xe;t&&Zf(e,t)?Lg(r,a):(e.flags=e.flags&-4097|2,X=!1,Xe=e)}}else{if(iu(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,Xe=e}}}function Jf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function ln(e){if(e!==Xe)return!1;if(!X)return Jf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tu(e.type,e.memoizedProps)),t&&(t=Ge)){if(iu(e))throw Sg(),Error(I(418));for(;t;)Lg(e,t),t=va(t.nextSibling)}if(Jf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Ge=va(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?va(e.stateNode.nextSibling):null;return!0}function Sg(){for(var e=Ge;e;)e=va(e.nextSibling)}function Nr(){Ge=Xe=null,X=!1}function Hu(e){bt===null?bt=[e]:bt.push(e)}var L1=Kt.ReactCurrentBatchConfig;function Eo(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(I(309));var r=a.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!a._owner)throw Error(I(290,e))}return e}function sn(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ep(e){var t=e._init;return t(e._payload)}function Cg(e){function t(g,f){if(e){var h=g.deletions;h===null?(g.deletions=[f],g.flags|=16):h.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=wa(g,f),g.index=0,g.sibling=null,g}function i(g,f,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<f?(g.flags|=2,f):h):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,h,S){return f===null||f.tag!==6?(f=Es(h,g.mode,S),f.return=g,f):(f=o(f,h),f.return=g,f)}function u(g,f,h,S){var P=h.type;return P===wr?p(g,f,h.props.children,S,h.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sa&&ep(P)===f.type)?(S=o(f,h.props),S.ref=Eo(g,f,h),S.return=g,S):(S=wn(h.type,h.key,h.props,null,g.mode,S),S.ref=Eo(g,f,h),S.return=g,S)}function d(g,f,h,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=$s(h,g.mode,S),f.return=g,f):(f=o(f,h.children||[]),f.return=g,f)}function p(g,f,h,S,P){return f===null||f.tag!==7?(f=qa(h,g.mode,S,P),f.return=g,f):(f=o(f,h),f.return=g,f)}function v(g,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Es(""+f,g.mode,h),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Vi:return h=wn(f.type,f.key,f.props,null,g.mode,h),h.ref=Eo(g,null,f),h.return=g,h;case yr:return f=$s(f,g.mode,h),f.return=g,f;case sa:var S=f._init;return v(g,S(f._payload),h)}if(Do(f)||ko(f))return f=qa(f,g.mode,h,null),f.return=g,f;sn(g,f)}return null}function x(g,f,h,S){var P=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return P!==null?null:s(g,f,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:return h.key===P?u(g,f,h,S):null;case yr:return h.key===P?d(g,f,h,S):null;case sa:return P=h._init,x(g,f,P(h._payload),S)}if(Do(h)||ko(h))return P!==null?null:p(g,f,h,S,null);sn(g,h)}return null}function y(g,f,h,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vi:return g=g.get(S.key===null?h:S.key)||null,u(f,g,S,P);case yr:return g=g.get(S.key===null?h:S.key)||null,d(f,g,S,P);case sa:var E=S._init;return y(g,f,h,E(S._payload),P)}if(Do(S)||ko(S))return g=g.get(h)||null,p(f,g,S,P,null);sn(f,S)}return null}function b(g,f,h,S){for(var P=null,E=null,k=f,R=f=0,U=null;k!==null&&R<h.length;R++){k.index>R?(U=k,k=null):U=k.sibling;var A=x(g,k,h[R],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,R),E===null?P=A:E.sibling=A,E=A,k=U}if(R===h.length)return a(g,k),X&&Oa(g,R),P;if(k===null){for(;R<h.length;R++)k=v(g,h[R],S),k!==null&&(f=i(k,f,R),E===null?P=k:E.sibling=k,E=k);return X&&Oa(g,R),P}for(k=r(g,k);R<h.length;R++)U=y(k,g,R,h[R],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?R:U.key),f=i(U,f,R),E===null?P=U:E.sibling=U,E=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&Oa(g,R),P}function w(g,f,h,S){var P=ko(h);if(typeof P!="function")throw Error(I(150));if(h=P.call(h),h==null)throw Error(I(151));for(var E=P=null,k=f,R=f=0,U=null,A=h.next();k!==null&&!A.done;R++,A=h.next()){k.index>R?(U=k,k=null):U=k.sibling;var ae=x(g,k,A.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,R),E===null?P=ae:E.sibling=ae,E=ae,k=U}if(A.done)return a(g,k),X&&Oa(g,R),P;if(k===null){for(;!A.done;R++,A=h.next())A=v(g,A.value,S),A!==null&&(f=i(A,f,R),E===null?P=A:E.sibling=A,E=A);return X&&Oa(g,R),P}for(k=r(g,k);!A.done;R++,A=h.next())A=y(k,g,R,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?R:A.key),f=i(A,f,R),E===null?P=A:E.sibling=A,E=A);return e&&k.forEach(function(Da){return t(g,Da)}),X&&Oa(g,R),P}function M(g,f,h,S){if(typeof h=="object"&&h!==null&&h.type===wr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Vi:e:{for(var P=h.key,E=f;E!==null;){if(E.key===P){if(P=h.type,P===wr){if(E.tag===7){a(g,E.sibling),f=o(E,h.props.children),f.return=g,g=f;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sa&&ep(P)===E.type){a(g,E.sibling),f=o(E,h.props),f.ref=Eo(g,E,h),f.return=g,g=f;break e}a(g,E);break}else t(g,E);E=E.sibling}h.type===wr?(f=qa(h.props.children,g.mode,S,h.key),f.return=g,g=f):(S=wn(h.type,h.key,h.props,null,g.mode,S),S.ref=Eo(g,f,h),S.return=g,g=S)}return n(g);case yr:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){a(g,f.sibling),f=o(f,h.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=$s(h,g.mode,S),f.return=g,g=f}return n(g);case sa:return E=h._init,M(g,f,E(h._payload),S)}if(Do(h))return b(g,f,h,S);if(ko(h))return w(g,f,h,S);sn(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,h),f.return=g,g=f):(a(g,f),f=Es(h,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return M}var _r=Cg(!0),Ig=Cg(!1),Dn=Ia(null),Bn=null,Rr=null,Uu=null;function qu(){Uu=Rr=Bn=null}function Wu(e){var t=Dn.current;G(Dn),e._currentValue=t}function lu(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Br(e,t){Bn=e,Uu=Rr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(_e=!0),e.firstContext=null)}function ut(e){var t=e._currentValue;if(Uu!==e)if(e={context:e,memoizedValue:t,next:null},Rr===null){if(Bn===null)throw Error(I(308));Rr=e,Bn.dependencies={lanes:0,firstContext:e}}else Rr=Rr.next=e;return t}var _a=null;function Vu(e){_a===null?_a=[e]:_a.push(e)}function kg(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Vu(t)):(a.next=o.next,o.next=a),t.interleaved=a,Xt(e,r)}function Xt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ua=!1;function Gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Pg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xa(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Xt(e,a)}return o=r.interleaved,o===null?(t.next=t,Vu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Xt(e,a)}function mn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Mu(e,a)}}function tp(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Fn(e,t,a,r){var o=e.updateQueue;ua=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var v=o.baseState;n=0,p=d=u=null,s=i;do{var x=s.lane,y=s.eventTime;if((r&x)===x){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(x=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){v=b.call(y,v,x);break e}v=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,x=typeof b=="function"?b.call(y,v,x):b,x==null)break e;v=Q({},v,x);break e;case 2:ua=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,x=o.effects,x===null?o.effects=[s]:x.push(s))}else y={eventTime:y,lane:x,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=v):p=p.next=y,n|=x;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;x=s,s=x.next,x.next=null,o.lastBaseUpdate=x,o.shared.pending=null}}while(!0);if(p===null&&(u=v),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xa|=n,e.lanes=n,e.memoizedState=v}}function ap(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var pi={},At=Ia(pi),oi=Ia(pi),ii=Ia(pi);function Ha(e){if(e===pi)throw Error(I(174));return e}function Xu(e,t){switch(W(ii,t),W(oi,e),W(At,pi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_s(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_s(t,e)}G(At),W(At,t)}function Hr(){G(At),G(oi),G(ii)}function Tg(e){Ha(ii.current);var t=Ha(At.current),a=_s(t,e.type);t!==a&&(W(oi,e),W(At,a))}function Yu(e){oi.current===e&&(G(At),G(oi))}var Y=Ia(0);function On(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Cs=[];function Ku(){for(var e=0;e<Cs.length;e++)Cs[e]._workInProgressVersionPrimary=null;Cs.length=0}var hn=Kt.ReactCurrentDispatcher,Is=Kt.ReactCurrentBatchConfig,Ga=0,K=null,le=null,ce=null,jn=!1,Uo=!1,ni=0,S1=0;function Se(){throw Error(I(321))}function Qu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Lt(e[a],t[a]))return!1;return!0}function Zu(e,t,a,r,o,i){if(Ga=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hn.current=e===null||e.memoizedState===null?P1:T1,e=a(r,o),Uo){i=0;do{if(Uo=!1,ni=0,25<=i)throw Error(I(301));i+=1,ce=le=null,t.updateQueue=null,hn.current=R1,e=a(r,o)}while(Uo)}if(hn.current=Nn,t=le!==null&&le.next!==null,Ga=0,ce=le=K=null,jn=!1,t)throw Error(I(300));return e}function Ju(){var e=ni!==0;return ni=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ce===null?K.memoizedState=ce=e:ce=ce.next=e,ce}function dt(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ce===null?K.memoizedState:ce.next;if(t!==null)ce=t,le=e;else{if(e===null)throw Error(I(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ce===null?K.memoizedState=ce=e:ce=ce.next=e}return ce}function li(e,t){return typeof t=="function"?t(e):t}function ks(e){var t=dt(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Ga&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,n=r):u=u.next=v,K.lanes|=p,Xa|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,Lt(r,t.memoizedState)||(_e=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,Xa|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Ps(e){var t=dt(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);Lt(i,t.memoizedState)||(_e=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function Rg(){}function Eg(e,t){var a=K,r=dt(),o=t(),i=!Lt(r.memoizedState,o);if(i&&(r.memoizedState=o,_e=!0),r=r.queue,ed(zg.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||ce!==null&&ce.memoizedState.tag&1){if(a.flags|=2048,si(9,Mg.bind(null,a,r,o,t),void 0,null),fe===null)throw Error(I(349));(Ga&30)!==0||$g(a,t,o)}return o}function $g(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Mg(e,t,a,r){t.value=a,t.getSnapshot=r,Ag(t)&&Dg(e)}function zg(e,t,a){return a(function(){Ag(t)&&Dg(e)})}function Ag(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Lt(e,a)}catch{return!0}}function Dg(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function rp(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:li,lastRenderedState:e},t.queue=e,e=e.dispatch=k1.bind(null,K,e),[t.memoizedState,e]}function si(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function Bg(){return dt().memoizedState}function vn(e,t,a,r){var o=$t();K.flags|=e,o.memoizedState=si(1|t,a,void 0,r===void 0?null:r)}function Zn(e,t,a,r){var o=dt();r=r===void 0?null:r;var i=void 0;if(le!==null){var n=le.memoizedState;if(i=n.destroy,r!==null&&Qu(r,n.deps)){o.memoizedState=si(t,a,i,r);return}}K.flags|=e,o.memoizedState=si(1|t,a,i,r)}function op(e,t){return vn(8390656,8,e,t)}function ed(e,t){return Zn(2048,8,e,t)}function Fg(e,t){return Zn(4,2,e,t)}function Og(e,t){return Zn(4,4,e,t)}function jg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,a){return a=a!=null?a.concat([e]):null,Zn(4,4,jg.bind(null,t,e),a)}function td(){}function _g(e,t){var a=dt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Hg(e,t){var a=dt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Qu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function Ug(e,t,a){return(Ga&21)===0?(e.baseState&&(e.baseState=!1,_e=!0),e.memoizedState=a):(Lt(a,t)||(a=Xp(),K.lanes|=a,Xa|=a,e.baseState=!0),t)}function C1(e,t){var a=N;N=a!==0&&4>a?a:4,e(!0);var r=Is.transition;Is.transition={};try{e(!1),t()}finally{N=a,Is.transition=r}}function qg(){return dt().memoizedState}function I1(e,t,a){var r=ya(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},Wg(e))Vg(t,a);else if(a=kg(e,t,a,r),a!==null){var o=ze();wt(a,e,r,o),Gg(a,t,r)}}function k1(e,t,a){var r=ya(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(Wg(e))Vg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,Lt(s,n)){var u=t.interleaved;u===null?(o.next=o,Vu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=kg(e,t,o,r),a!==null&&(o=ze(),wt(a,e,r,o),Gg(a,t,r))}}function Wg(e){var t=e.alternate;return e===K||t!==null&&t===K}function Vg(e,t){Uo=jn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Gg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Mu(e,a)}}var Nn={readContext:ut,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},P1={readContext:ut,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ut,useEffect:op,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,vn(4194308,4,jg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return vn(4194308,4,e,t)},useInsertionEffect:function(e,t){return vn(4,2,e,t)},useMemo:function(e,t){var a=$t();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=$t();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=I1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:rp,useDebugValue:td,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=rp(!1),t=e[0];return e=C1.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=$t();if(X){if(a===void 0)throw Error(I(407));a=a()}else{if(a=t(),fe===null)throw Error(I(349));(Ga&30)!==0||$g(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,op(zg.bind(null,r,i,e),[e]),r.flags|=2048,si(9,Mg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=$t(),t=fe.identifierPrefix;if(X){var a=qt,r=Ut;a=(r&~(1<<32-yt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=ni++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=S1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T1={readContext:ut,useCallback:_g,useContext:ut,useEffect:ed,useImperativeHandle:Ng,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Hg,useReducer:ks,useRef:Bg,useState:function(){return ks(li)},useDebugValue:td,useDeferredValue:function(e){var t=dt();return Ug(t,le.memoizedState,e)},useTransition:function(){var e=ks(li)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Rg,useSyncExternalStore:Eg,useId:qg,unstable_isNewReconciler:!1},R1={readContext:ut,useCallback:_g,useContext:ut,useEffect:ed,useImperativeHandle:Ng,useInsertionEffect:Fg,useLayoutEffect:Og,useMemo:Hg,useReducer:Ps,useRef:Bg,useState:function(){return Ps(li)},useDebugValue:td,useDeferredValue:function(e){var t=dt();return le===null?t.memoizedState=e:Ug(t,le.memoizedState,e)},useTransition:function(){var e=Ps(li)[0],t=dt().memoizedState;return[e,t]},useMutableSource:Rg,useSyncExternalStore:Eg,useId:qg,unstable_isNewReconciler:!1};function vt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function su(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Jn={isMounted:function(e){return(e=e._reactInternals)?Qa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=ze(),o=ya(e),i=Wt(r,o);i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,o),t!==null&&(wt(t,e,o,r),mn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=ze(),o=ya(e),i=Wt(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=xa(e,i,o),t!==null&&(wt(t,e,o,r),mn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ze(),r=ya(e),o=Wt(a,r);o.tag=2,t!=null&&(o.callback=t),t=xa(e,o,r),t!==null&&(wt(t,e,r,a),mn(t,e,r))}};function ip(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!ei(a,r)||!ei(o,i):!0}function Xg(e,t,a){var r=!1,o=Sa,i=t.contextType;return typeof i=="object"&&i!==null?i=ut(i):(o=Ue(t)?Wa:ke.current,r=t.contextTypes,i=(r=r!=null)?jr(e,o):Sa),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Jn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function np(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Jn.enqueueReplaceState(t,t.state,null)}function uu(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Gu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=ut(i):(i=Ue(t)?Wa:ke.current,o.context=jr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(su(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Jn.enqueueReplaceState(o,o.state,null),Fn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ur(e,t){try{var a="",r=t;do a+=iy(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ts(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function du(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var E1=typeof WeakMap=="function"?WeakMap:Map;function Yg(e,t,a){a=Wt(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){Hn||(Hn=!0,yu=r),du(e,t)},a}function Kg(e,t,a){a=Wt(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){du(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){du(e,t),typeof r!="function"&&(ba===null?ba=new Set([this]):ba.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function lp(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new E1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=q1.bind(null,e,t,a),t.then(e,e))}function sp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function up(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Wt(-1,1),t.tag=2,xa(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var $1=Kt.ReactCurrentOwner,_e=!1;function Me(e,t,a,r){t.child=e===null?Ig(t,null,a,r):_r(t,e.child,a,r)}function dp(e,t,a,r,o){a=a.render;var i=t.ref;return Br(t,o),r=Zu(e,t,a,r,i,o),a=Ju(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(X&&a&&Nu(t),t.flags|=1,Me(e,t,r,o),t.child)}function cp(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!ud(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Qg(e,t,i,r,o)):(e=wn(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:ei,a(n,r)&&e.ref===t.ref)return Yt(e,t,o)}return t.flags|=1,e=wa(i,r),e.ref=t.ref,e.return=t,t.child=e}function Qg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(ei(i,r)&&e.ref===t.ref)if(_e=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(_e=!0);else return t.lanes=e.lanes,Yt(e,t,o)}return cu(e,t,a,r,o)}function Zg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W($r,Ve),Ve|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W($r,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W($r,Ve),Ve|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W($r,Ve),Ve|=r;return Me(e,t,o,a),t.child}function Jg(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,a,r,o){var i=Ue(a)?Wa:ke.current;return i=jr(t,i),Br(t,o),a=Zu(e,t,a,r,i,o),r=Ju(),e!==null&&!_e?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Yt(e,t,o)):(X&&r&&Nu(t),t.flags|=1,Me(e,t,a,o),t.child)}function fp(e,t,a,r,o){if(Ue(a)){var i=!0;Mn(t)}else i=!1;if(Br(t,o),t.stateNode===null)xn(e,t),Xg(t,a,r),uu(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=ut(d):(d=Ue(a)?Wa:ke.current,d=jr(t,d));var p=a.getDerivedStateFromProps,v=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&np(t,n,r,d),ua=!1;var x=t.memoizedState;n.state=x,Fn(t,r,n,o),u=t.memoizedState,s!==r||x!==u||He.current||ua?(typeof p=="function"&&(su(t,a,p,r),u=t.memoizedState),(s=ua||ip(t,a,s,r,x,u,d))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,Pg(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:vt(t.type,s),n.props=d,v=t.pendingProps,x=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=ut(u):(u=Ue(a)?Wa:ke.current,u=jr(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==v||x!==u)&&np(t,n,r,u),ua=!1,x=t.memoizedState,n.state=x,Fn(t,r,n,o);var b=t.memoizedState;s!==v||x!==b||He.current||ua?(typeof y=="function"&&(su(t,a,y,r),b=t.memoizedState),(d=ua||ip(t,a,d,r,x,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(t.flags|=1024),r=!1)}return fu(e,t,a,r,i,o)}function fu(e,t,a,r,o,i){Jg(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Qf(t,a,!1),Yt(e,t,i);r=t.stateNode,$1.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=_r(t,e.child,null,i),t.child=_r(t,null,s,i)):Me(e,t,s,i),t.memoizedState=r.state,o&&Qf(t,a,!0),t.child}function em(e){var t=e.stateNode;t.pendingContext?Kf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kf(e,t.context,!1),Xu(e,t.containerInfo)}function pp(e,t,a,r,o){return Nr(),Hu(o),t.flags|=256,Me(e,t,a,r),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function gu(e){return{baseLanes:e,cachePool:null,transitions:null}}function tm(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return nu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=al(n,r,0,null),e=qa(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=gu(a),t.memoizedState=pu,e):ad(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return M1(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=wa(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=wa(s,i):(i=qa(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?gu(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=pu,r}return i=e.child,e=i.sibling,r=wa(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function ad(e,t){return t=al({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function un(e,t,a,r){return r!==null&&Hu(r),_r(t,e.child,null,a),e=ad(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M1(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=Ts(Error(I(422))),un(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=al({mode:"visible",children:r.children},o,0,null),i=qa(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&_r(t,e.child,null,n),t.child.memoizedState=gu(n),t.memoizedState=pu,i);if((t.mode&1)===0)return un(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Ts(i,r,void 0),un(e,t,n,r)}if(s=(n&e.childLanes)!==0,_e||s){if(r=fe,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Xt(e,o),wt(r,e,o,-1))}return sd(),r=Ts(Error(I(421))),un(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=W1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=va(o.nextSibling),Xe=t,X=!0,bt=null,e!==null&&(it[nt++]=Ut,it[nt++]=qt,it[nt++]=Va,Ut=e.id,qt=e.overflow,Va=t),t=ad(t,r.children),t.flags|=4096,t)}function gp(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),lu(e.return,t,a)}function Rs(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function am(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Me(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gp(e,a,t);else if(e.tag===19)gp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&On(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Rs(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&On(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Rs(t,!0,a,null,i);break;case"together":Rs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,a=wa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function z1(e,t,a){switch(t.tag){case 3:em(t),Nr();break;case 5:Tg(t);break;case 1:Ue(t.type)&&Mn(t);break;case 4:Xu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Dn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?tm(e,t,a):(W(Y,Y.current&1),e=Yt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return am(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Zg(e,t,a)}return Yt(e,t,a)}var rm,mu,om,im;rm=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};mu=function(){};om=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ha(At.current);var i=null;switch(a){case"input":o=Fs(e,o),r=Fs(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Ns(e,o),r=Ns(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=En)}Hs(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Go.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Go.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};im=function(e,t,a,r){a!==r&&(t.flags|=4)};function $o(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function A1(e,t,a){var r=t.pendingProps;switch(_u(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ue(t.type)&&$n(),Ce(t),null;case 3:return r=t.stateNode,Hr(),G(He),G(ke),Ku(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,bt!==null&&(Su(bt),bt=null))),mu(e,t),Ce(t),null;case 5:Yu(t);var o=Ha(ii.current);if(a=t.type,e!==null&&t.stateNode!=null)om(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Ce(t),null}if(e=Ha(At.current),ln(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Mt]=t,r[ri]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Fo.length;o++)V(Fo[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Lf(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Cf(r,i),V("invalid",r)}Hs(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&nn(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&nn(r.textContent,s,e),o=["children",""+s]):Go.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Gi(r),Sf(r,i,!0);break;case"textarea":Gi(r),If(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=En)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zp(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Mt]=t,e[ri]=r,rm(e,t,!1,!1),t.stateNode=e;e:{switch(n=Us(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Fo.length;o++)V(Fo[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Lf(e,r),o=Fs(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Cf(e,r),o=Ns(e,r),V("invalid",e);break;default:o=r}Hs(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Bp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ap(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Xo(e,u):typeof u=="number"&&Xo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Go.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&ku(e,i,u,n))}switch(a){case"input":Gi(e),Sf(e,r,!1);break;case"textarea":Gi(e),If(e);break;case"option":r.value!=null&&e.setAttribute("value",""+La(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Mr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=En)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)im(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(a=Ha(ii.current),Ha(At.current),ln(t)){if(r=t.stateNode,a=t.memoizedProps,r[Mt]=t,(i=r.nodeValue!==a)&&(e=Xe,e!==null))switch(e.tag){case 3:nn(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&nn(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Mt]=t,t.stateNode=r}return Ce(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Sg(),Nr(),t.flags|=98560,i=!1;else if(i=ln(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Mt]=t}else Nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else bt!==null&&(Su(bt),bt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?se===0&&(se=3):sd())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return Hr(),mu(e,t),e===null&&ti(t.stateNode.containerInfo),Ce(t),null;case 10:return Wu(t.type._context),Ce(t),null;case 17:return Ue(t.type)&&$n(),Ce(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)$o(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=On(e),n!==null){for(t.flags|=128,$o(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>qr&&(t.flags|=128,r=!0,$o(i,!1),t.lanes=4194304)}else{if(!r)if(e=On(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),$o(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Ce(t),null}else 2*re()-i.renderingStartTime>qr&&a!==1073741824&&(t.flags|=128,r=!0,$o(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Ce(t),null);case 22:case 23:return ld(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function D1(e,t){switch(_u(t),t.tag){case 1:return Ue(t.type)&&$n(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hr(),G(He),G(ke),Ku(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Yu(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return Hr(),null;case 10:return Wu(t.type._context),null;case 22:case 23:return ld(),null;case 24:return null;default:return null}}var dn=!1,Ie=!1,B1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Er(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function hu(e,t,a){try{a()}catch(r){J(e,t,r)}}var mp=!1;function F1(e,t){if(Js=Pn,e=dg(),ju(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,v=e,x=null;t:for(;;){for(var y;v!==a||o!==0&&v.nodeType!==3||(s=n+o),v!==i||r!==0&&v.nodeType!==3||(u=n+r),v.nodeType===3&&(n+=v.nodeValue.length),(y=v.firstChild)!==null;)x=v,v=y;for(;;){if(v===e)break t;if(x===a&&++d===o&&(s=n),x===i&&++p===r&&(u=n),(y=v.nextSibling)!==null)break;v=x,x=v.parentNode}v=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(eu={focusedElem:e,selectionRange:a},Pn=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:vt(t.type,w),M);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=mp,mp=!1,b}function qo(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&hu(t,a,i)}o=o.next}while(o!==r)}}function el(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function vu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function nm(e){var t=e.alternate;t!==null&&(e.alternate=null,nm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[ri],delete t[ru],delete t[b1],delete t[y1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lm(e){return e.tag===5||e.tag===3||e.tag===4}function hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=En));else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,a),e=e.sibling;e!==null;)xu(e,t,a),e=e.sibling}function bu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bu(e,t,a),e=e.sibling;e!==null;)bu(e,t,a),e=e.sibling}var ge=null,xt=!1;function la(e,t,a){for(a=a.child;a!==null;)sm(e,t,a),a=a.sibling}function sm(e,t,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Vn,a)}catch{}switch(a.tag){case 5:Ie||Er(a,t);case 6:var r=ge,o=xt;ge=null,la(e,t,a),ge=r,xt=o,ge!==null&&(xt?(e=ge,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ge.removeChild(a.stateNode));break;case 18:ge!==null&&(xt?(e=ge,a=a.stateNode,e.nodeType===8?Ls(e.parentNode,a):e.nodeType===1&&Ls(e,a),Zo(e)):Ls(ge,a.stateNode));break;case 4:r=ge,o=xt,ge=a.stateNode.containerInfo,xt=!0,la(e,t,a),ge=r,xt=o;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&hu(a,t,n),o=o.next}while(o!==r)}la(e,t,a);break;case 1:if(!Ie&&(Er(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}la(e,t,a);break;case 21:la(e,t,a);break;case 22:a.mode&1?(Ie=(r=Ie)||a.memoizedState!==null,la(e,t,a),Ie=r):la(e,t,a);break;default:la(e,t,a)}}function vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new B1),t.forEach(function(r){var o=V1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function ht(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,xt=!1;break e;case 3:ge=s.stateNode.containerInfo,xt=!0;break e;case 4:ge=s.stateNode.containerInfo,xt=!0;break e}s=s.return}if(ge===null)throw Error(I(160));sm(i,n,o),ge=null,xt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)um(t,e),t=t.sibling}function um(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Et(e),r&4){try{qo(3,e,e.return),el(3,e)}catch(w){J(e,e.return,w)}try{qo(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:ht(t,e),Et(e),r&512&&a!==null&&Er(a,a.return);break;case 5:if(ht(t,e),Et(e),r&512&&a!==null&&Er(a,a.return),e.flags&32){var o=e.stateNode;try{Xo(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&$p(o,i),Us(s,n);var d=Us(s,i);for(n=0;n<u.length;n+=2){var p=u[n],v=u[n+1];p==="style"?Bp(o,v):p==="dangerouslySetInnerHTML"?Ap(o,v):p==="children"?Xo(o,v):ku(o,p,v,d)}switch(s){case"input":Os(o,i);break;case"textarea":Mp(o,i);break;case"select":var x=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Mr(o,!!i.multiple,y,!1):x!==!!i.multiple&&(i.defaultValue!=null?Mr(o,!!i.multiple,i.defaultValue,!0):Mr(o,!!i.multiple,i.multiple?[]:"",!1))}o[ri]=i}catch(w){J(e,e.return,w)}}break;case 6:if(ht(t,e),Et(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(ht(t,e),Et(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Zo(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:ht(t,e),Et(e);break;case 13:ht(t,e),Et(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(id=re())),r&4&&vp(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Ie=(d=Ie)||p,ht(t,e),Ie=d):ht(t,e),Et(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for($=e,p=e.child;p!==null;){for(v=$=p;$!==null;){switch(x=$,y=x.child,x.tag){case 0:case 11:case 14:case 15:qo(4,x,x.return);break;case 1:Er(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){r=x,a=x.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){J(r,a,w)}}break;case 5:Er(x,x.return);break;case 22:if(x.memoizedState!==null){bp(v);continue}}y!==null?(y.return=x,$=y):bp(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{o=v.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,u=v.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Dp("display",n))}catch(w){J(e,e.return,w)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(w){J(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ht(t,e),Et(e),r&4&&vp(e);break;case 21:break;default:ht(t,e),Et(e)}}function Et(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(lm(a)){var r=a;break e}a=a.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Xo(o,""),r.flags&=-33);var i=hp(e);bu(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=hp(e);xu(e,s,n);break;default:throw Error(I(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function O1(e,t,a){$=e,dm(e,t,a)}function dm(e,t,a){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||dn;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ie;s=dn;var d=Ie;if(dn=n,(Ie=u)&&!d)for($=o;$!==null;)n=$,u=n.child,n.tag===22&&n.memoizedState!==null?yp(o):u!==null?(u.return=n,$=u):yp(o);for(;i!==null;)$=i,dm(i,t,a),i=i.sibling;$=o,dn=s,Ie=d}xp(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):xp(e,t,a)}}function xp(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ie||el(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:vt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ap(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}ap(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Zo(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ie||t.flags&512&&vu(t)}catch(x){J(t,t.return,x)}}if(t===e){$=null;break}if(a=t.sibling,a!==null){a.return=t.return,$=a;break}$=t.return}}function bp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}function yp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{el(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{vu(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{vu(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var j1=Math.ceil,_n=Kt.ReactCurrentDispatcher,rd=Kt.ReactCurrentOwner,st=Kt.ReactCurrentBatchConfig,F=0,fe=null,ie=null,me=0,Ve=0,$r=Ia(0),se=0,ui=null,Xa=0,tl=0,od=0,Wo=null,Ne=null,id=0,qr=1/0,_t=null,Hn=!1,yu=null,ba=null,cn=!1,pa=null,Un=0,Vo=0,wu=null,bn=-1,yn=0;function ze(){return(F&6)!==0?re():bn!==-1?bn:bn=re()}function ya(e){return(e.mode&1)===0?1:(F&2)!==0&&me!==0?me&-me:L1.transition!==null?(yn===0&&(yn=Xp()),yn):(e=N,e!==0||(e=window.event,e=e===void 0?16:tg(e.type)),e)}function wt(e,t,a,r){if(50<Vo)throw Vo=0,wu=null,Error(I(185));di(e,a,r),((F&2)===0||e!==fe)&&(e===fe&&((F&2)===0&&(tl|=a),se===4&&ca(e,me)),qe(e,r),a===1&&F===0&&(t.mode&1)===0&&(qr=re()+500,Qn&&ka()))}function qe(e,t){var a=e.callbackNode;Cy(e,t);var r=kn(e,e===fe?me:0);if(r===0)a!==null&&Tf(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Tf(a),t===1)e.tag===0?w1(wp.bind(null,e)):yg(wp.bind(null,e)),v1(function(){(F&6)===0&&ka()}),a=null;else{switch(Yp(r)){case 1:a=$u;break;case 4:a=Vp;break;case 16:a=In;break;case 536870912:a=Gp;break;default:a=In}a=xm(a,cm.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function cm(e,t){if(bn=-1,yn=0,(F&6)!==0)throw Error(I(327));var a=e.callbackNode;if(Fr()&&e.callbackNode!==a)return null;var r=kn(e,e===fe?me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=qn(e,r);else{t=r;var o=F;F|=2;var i=pm();(fe!==e||me!==t)&&(_t=null,qr=re()+500,Ua(e,t));do try{H1();break}catch(s){fm(e,s)}while(!0);qu(),_n.current=i,F=o,ie!==null?t=0:(fe=null,me=0,t=se)}if(t!==0){if(t===2&&(o=Xs(e),o!==0&&(r=o,t=Lu(e,o))),t===1)throw a=ui,Ua(e,0),ca(e,r),qe(e,re()),a;if(t===6)ca(e,r);else{if(o=e.current.alternate,(r&30)===0&&!N1(o)&&(t=qn(e,r),t===2&&(i=Xs(e),i!==0&&(r=i,t=Lu(e,i))),t===1))throw a=ui,Ua(e,0),ca(e,r),qe(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:ja(e,Ne,_t);break;case 3:if(ca(e,r),(r&130023424)===r&&(t=id+500-re(),10<t)){if(kn(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=au(ja.bind(null,e,Ne,_t),t);break}ja(e,Ne,_t);break;case 4:if(ca(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-yt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j1(r/1960))-r,10<r){e.timeoutHandle=au(ja.bind(null,e,Ne,_t),r);break}ja(e,Ne,_t);break;case 5:ja(e,Ne,_t);break;default:throw Error(I(329))}}}return qe(e,re()),e.callbackNode===a?cm.bind(null,e):null}function Lu(e,t){var a=Wo;return e.current.memoizedState.isDehydrated&&(Ua(e,t).flags|=256),e=qn(e,t),e!==2&&(t=Ne,Ne=a,t!==null&&Su(t)),e}function Su(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function N1(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!Lt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ca(e,t){for(t&=~od,t&=~tl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-yt(t),r=1<<a;e[a]=-1,t&=~r}}function wp(e){if((F&6)!==0)throw Error(I(327));Fr();var t=kn(e,0);if((t&1)===0)return qe(e,re()),null;var a=qn(e,t);if(e.tag!==0&&a===2){var r=Xs(e);r!==0&&(t=r,a=Lu(e,r))}if(a===1)throw a=ui,Ua(e,0),ca(e,t),qe(e,re()),a;if(a===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ja(e,Ne,_t),qe(e,re()),null}function nd(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(qr=re()+500,Qn&&ka())}}function Ya(e){pa!==null&&pa.tag===0&&(F&6)===0&&Fr();var t=F;F|=1;var a=st.transition,r=N;try{if(st.transition=null,N=1,e)return e()}finally{N=r,st.transition=a,F=t,(F&6)===0&&ka()}}function ld(){Ve=$r.current,G($r)}function Ua(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,h1(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(_u(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$n();break;case 3:Hr(),G(He),G(ke),Ku();break;case 5:Yu(r);break;case 4:Hr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Wu(r.type._context);break;case 22:case 23:ld()}a=a.return}if(fe=e,ie=e=wa(e.current,null),me=Ve=t,se=0,ui=null,od=tl=Xa=0,Ne=Wo=null,_a!==null){for(t=0;t<_a.length;t++)if(a=_a[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}_a=null}return e}function fm(e,t){do{var a=ie;try{if(qu(),hn.current=Nn,jn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}jn=!1}if(Ga=0,ce=le=K=null,Uo=!1,ni=0,rd.current=null,a===null||a.return===null){se=1,ui=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=me,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,v=p.tag;if((p.mode&1)===0&&(v===0||v===11||v===15)){var x=p.alternate;x?(p.updateQueue=x.updateQueue,p.memoizedState=x.memoizedState,p.lanes=x.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=sp(n);if(y!==null){y.flags&=-257,up(y,n,s,i,t),y.mode&1&&lp(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){lp(i,d,t),sd();break e}u=Error(I(426))}}else if(X&&s.mode&1){var M=sp(n);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),up(M,n,s,i,t),Hu(Ur(u,s));break e}}i=u=Ur(u,s),se!==4&&(se=2),Wo===null?Wo=[i]:Wo.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Yg(i,u,t);tp(i,g);break e;case 1:s=u;var f=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ba===null||!ba.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Kg(i,s,t);tp(i,S);break e}}i=i.return}while(i!==null)}mm(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function pm(){var e=_n.current;return _n.current=Nn,e===null?Nn:e}function sd(){(se===0||se===3||se===2)&&(se=4),fe===null||(Xa&268435455)===0&&(tl&268435455)===0||ca(fe,me)}function qn(e,t){var a=F;F|=2;var r=pm();(fe!==e||me!==t)&&(_t=null,Ua(e,t));do try{_1();break}catch(o){fm(e,o)}while(!0);if(qu(),F=a,_n.current=r,ie!==null)throw Error(I(261));return fe=null,me=0,se}function _1(){for(;ie!==null;)gm(ie)}function H1(){for(;ie!==null&&!my();)gm(ie)}function gm(e){var t=vm(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?mm(e):ie=t,rd.current=null}function mm(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=A1(a,t,Ve),a!==null){ie=a;return}}else{if(a=D1(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function ja(e,t,a){var r=N,o=st.transition;try{st.transition=null,N=1,U1(e,t,a,r)}finally{st.transition=o,N=r}return null}function U1(e,t,a,r){do Fr();while(pa!==null);if((F&6)!==0)throw Error(I(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Iy(e,i),e===fe&&(ie=fe=null,me=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cn||(cn=!0,xm(In,function(){return Fr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=st.transition,st.transition=null;var n=N;N=1;var s=F;F|=4,rd.current=null,F1(e,a),um(a,e),c1(eu),Pn=!!Js,eu=Js=null,e.current=a,O1(a,e,o),hy(),F=s,N=n,st.transition=i}else e.current=a;if(cn&&(cn=!1,pa=e,Un=o),i=e.pendingLanes,i===0&&(ba=null),by(a.stateNode,r),qe(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(Hn)throw Hn=!1,e=yu,yu=null,e;return(Un&1)!==0&&e.tag!==0&&Fr(),i=e.pendingLanes,(i&1)!==0?e===wu?Vo++:(Vo=0,wu=e):Vo=0,ka(),null}function Fr(){if(pa!==null){var e=Yp(Un),t=st.transition,a=N;try{if(st.transition=null,N=16>e?16:e,pa===null)var r=!1;else{if(e=pa,pa=null,Un=0,(F&6)!==0)throw Error(I(331));var o=F;for(F|=4,$=e.current;$!==null;){var i=$,n=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:qo(8,p,i)}var v=p.child;if(v!==null)v.return=p,$=v;else for(;$!==null;){p=$;var x=p.sibling,y=p.return;if(nm(p),p===d){$=null;break}if(x!==null){x.return=y,$=x;break}$=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,$=n;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:qo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var f=e.current;for($=f;$!==null;){n=$;var h=n.child;if((n.subtreeFlags&2064)!==0&&h!==null)h.return=n,$=h;else e:for(n=f;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:el(9,s)}}catch(P){J(s,s.return,P)}if(s===n){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(F=o,ka(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Vn,e)}catch{}r=!0}return r}finally{N=a,st.transition=t}}return!1}function Lp(e,t,a){t=Ur(a,t),t=Yg(e,t,1),e=xa(e,t,1),t=ze(),e!==null&&(di(e,1,t),qe(e,t))}function J(e,t,a){if(e.tag===3)Lp(e,e,a);else for(;t!==null;){if(t.tag===3){Lp(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ba===null||!ba.has(r))){e=Ur(a,e),e=Kg(t,e,1),t=xa(t,e,1),e=ze(),t!==null&&(di(t,1,e),qe(t,e));break}}t=t.return}}function q1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&a,fe===e&&(me&a)===a&&(se===4||se===3&&(me&130023424)===me&&500>re()-id?Ua(e,0):od|=a),qe(e,t)}function hm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var a=ze();e=Xt(e,t),e!==null&&(di(e,t,a),qe(e,a))}function W1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),hm(e,a)}function V1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),hm(e,a)}var vm;vm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)_e=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return _e=!1,z1(e,t,a);_e=(e.flags&131072)!==0}else _e=!1,X&&(t.flags&1048576)!==0&&wg(t,An,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;xn(e,t),e=t.pendingProps;var o=jr(t,ke.current);Br(t,a),o=Zu(null,t,r,e,o,a);var i=Ju();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,Mn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Gu(t),o.updater=Jn,t.stateNode=o,o._reactInternals=t,uu(t,r,e,a),t=fu(null,t,r,!0,i,a)):(t.tag=0,X&&i&&Nu(t),Me(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(xn(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=X1(r),e=vt(r,e),o){case 0:t=cu(null,t,r,e,a);break e;case 1:t=fp(null,t,r,e,a);break e;case 11:t=dp(null,t,r,e,a);break e;case 14:t=cp(null,t,r,vt(r.type,e),a);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),cu(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),fp(e,t,r,o,a);case 3:e:{if(em(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Pg(e,t),Fn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ur(Error(I(423)),t),t=pp(e,t,r,a,o);break e}else if(r!==o){o=Ur(Error(I(424)),t),t=pp(e,t,r,a,o);break e}else for(Ge=va(t.stateNode.containerInfo.firstChild),Xe=t,X=!0,bt=null,a=Ig(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Nr(),r===o){t=Yt(e,t,a);break e}Me(e,t,r,a)}t=t.child}return t;case 5:return Tg(t),e===null&&nu(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,tu(r,o)?n=null:i!==null&&tu(r,i)&&(t.flags|=32),Jg(e,t),Me(e,t,n,a),t.child;case 6:return e===null&&nu(t),null;case 13:return tm(e,t,a);case 4:return Xu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,a):Me(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),dp(e,t,r,o,a);case 7:return Me(e,t,t.pendingProps,a),t.child;case 8:return Me(e,t,t.pendingProps.children,a),t.child;case 12:return Me(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W(Dn,r._currentValue),r._currentValue=n,i!==null)if(Lt(i.value,n)){if(i.children===o.children&&!He.current){t=Yt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Wt(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),lu(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(I(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),lu(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Me(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Br(t,a),o=ut(o),r=r(o),t.flags|=1,Me(e,t,r,a),t.child;case 14:return r=t.type,o=vt(r,t.pendingProps),o=vt(r.type,o),cp(e,t,r,o,a);case 15:return Qg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:vt(r,o),xn(e,t),t.tag=1,Ue(r)?(e=!0,Mn(t)):e=!1,Br(t,a),Xg(t,r,o),uu(t,r,o,a),fu(null,t,r,!0,e,a);case 19:return am(e,t,a);case 22:return Zg(e,t,a)}throw Error(I(156,t.tag))};function xm(e,t){return Wp(e,t)}function G1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,r){return new G1(e,t,a,r)}function ud(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X1(e){if(typeof e=="function")return ud(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tu)return 11;if(e===Ru)return 14}return 2}function wa(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function wn(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")ud(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case wr:return qa(a.children,o,i,t);case Pu:n=8,o|=8;break;case zs:return e=lt(12,a,t,o|2),e.elementType=zs,e.lanes=i,e;case As:return e=lt(13,a,t,o),e.elementType=As,e.lanes=i,e;case Ds:return e=lt(19,a,t,o),e.elementType=Ds,e.lanes=i,e;case Tp:return al(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kp:n=10;break e;case Pp:n=9;break e;case Tu:n=11;break e;case Ru:n=14;break e;case sa:n=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=lt(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qa(e,t,a,r){return e=lt(7,e,r,t),e.lanes=a,e}function al(e,t,a,r){return e=lt(22,e,r,t),e.elementType=Tp,e.lanes=a,e.stateNode={isHidden:!1},e}function Es(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function $s(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Y1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gs(0),this.expirationTimes=gs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function dd(e,t,a,r,o,i,n,s,u){return e=new Y1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=lt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gu(i),e}function K1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function bm(e){if(!e)return Sa;e=e._reactInternals;e:{if(Qa(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var a=e.type;if(Ue(a))return bg(e,a,t)}return t}function ym(e,t,a,r,o,i,n,s,u){return e=dd(a,r,!0,e,o,i,n,s,u),e.context=bm(null),a=e.current,r=ze(),o=ya(a),i=Wt(r,o),i.callback=t??null,xa(a,i,o),e.current.lanes=o,di(e,o,r),qe(e,r),e}function rl(e,t,a,r){var o=t.current,i=ze(),n=ya(o);return a=bm(a),t.context===null?t.context=a:t.pendingContext=a,t=Wt(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xa(o,t,n),e!==null&&(wt(e,o,n,i),mn(e,o,n)),n}function Wn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Sp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function cd(e,t){Sp(e,t),(e=e.alternate)&&Sp(e,t)}function Q1(){return null}var wm=typeof reportError=="function"?reportError:function(e){console.error(e)};function fd(e){this._internalRoot=e}ol.prototype.render=fd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));rl(e,t,null,null)};ol.prototype.unmount=fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ya(function(){rl(null,e,null,null)}),t[Gt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<da.length&&t!==0&&t<da[a].priority;a++);da.splice(a,0,e),a===0&&eg(e)}};function pd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function il(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function Z1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Wn(n);i.call(d)}}var n=ym(t,r,e,0,null,!1,!1,"",Cp);return e._reactRootContainer=n,e[Gt]=n.current,ti(e.nodeType===8?e.parentNode:e),Ya(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Wn(u);s.call(d)}}var u=dd(e,0,!1,null,null,!1,!1,"",Cp);return e._reactRootContainer=u,e[Gt]=u.current,ti(e.nodeType===8?e.parentNode:e),Ya(function(){rl(t,u,a,r)}),u}function nl(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Wn(n);s.call(u)}}rl(t,n,e,o)}else n=Z1(a,t,e,o,r);return Wn(n)}Kp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Bo(t.pendingLanes);a!==0&&(Mu(t,a|1),qe(t,re()),(F&6)===0&&(qr=re()+500,ka()))}break;case 13:Ya(function(){var r=Xt(e,1);if(r!==null){var o=ze();wt(r,e,1,o)}}),cd(e,1)}};zu=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var a=ze();wt(t,e,134217728,a)}cd(e,134217728)}};Qp=function(e){if(e.tag===13){var t=ya(e),a=Xt(e,t);if(a!==null){var r=ze();wt(a,e,t,r)}cd(e,t)}};Zp=function(){return N};Jp=function(e,t){var a=N;try{return N=e,t()}finally{N=a}};Ws=function(e,t,a){switch(t){case"input":if(Os(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Kn(r);if(!o)throw Error(I(90));Ep(r),Os(r,o)}}}break;case"textarea":Mp(e,a);break;case"select":t=a.value,t!=null&&Mr(e,!!a.multiple,t,!1)}};jp=nd;Np=Ya;var J1={usingClientEntryPoint:!1,Events:[fi,Ir,Kn,Fp,Op,nd]},Mo={findFiberByHostInstance:Na,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ew={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Up(e),e===null?null:e.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||Q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(zo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!zo.isDisabled&&zo.supportsFiber))try{Vn=zo.inject(ew),zt=zo}catch{}var zo;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Qe.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pd(t))throw Error(I(200));return K1(e,t,null,a)};Qe.createRoot=function(e,t){if(!pd(e))throw Error(I(299));var a=!1,r="",o=wm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=dd(e,1,!1,null,null,a,!1,r,o),e[Gt]=t.current,ti(e.nodeType===8?e.parentNode:e),new fd(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Up(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Ya(e)};Qe.hydrate=function(e,t,a){if(!il(t))throw Error(I(200));return nl(null,e,t,!0,a)};Qe.hydrateRoot=function(e,t,a){if(!pd(e))throw Error(I(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=wm;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=ym(t,null,e,1,a??null,o,!1,i,n),e[Gt]=t.current,ti(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new ol(t)};Qe.render=function(e,t,a){if(!il(t))throw Error(I(200));return nl(null,e,t,!1,a)};Qe.unmountComponentAtNode=function(e){if(!il(e))throw Error(I(40));return e._reactRootContainer?(Ya(function(){nl(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Qe.unstable_batchedUpdates=nd;Qe.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!il(a))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return nl(e,t,a,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426"});var Pa=Nt((lk,Cm)=>{"use strict";function Sm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sm)}catch(e){console.error(e)}}Sm(),Cm.exports=Lm()});var km=Nt(gd=>{"use strict";var Im=Pa();gd.createRoot=Im.createRoot,gd.hydrateRoot=Im.hydrateRoot;var sk});var Oh=Nt(Ll=>{"use strict";var Gw=C(),Xw=Symbol.for("react.element"),Yw=Symbol.for("react.fragment"),Kw=Object.prototype.hasOwnProperty,Qw=Gw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zw={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)Kw.call(t,r)&&!Zw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Xw,type:e,key:i,ref:n,props:o,_owner:Qw.current}}Ll.Fragment=Yw;Ll.jsx=Fh;Ll.jsxs=Fh});var m=Nt((s5,jh)=>{"use strict";jh.exports=Oh()});var $b=c(km(),1);var ue=c(C());var _="-ms-",Za="-moz-",O="-webkit-",ll="comm",Ta="rule",Gr="decl";var Pm="@import";var Tm="@namespace",sl="@keyframes";var Rm="@layer";var md=Math.abs,gi=String.fromCharCode,mi=Object.assign;function Em(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function ul(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,a){return e.replace(t,a)}function Xr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function Ct(e,t,a){return e.slice(t,a)}function Pe(e){return e.length}function dl(e){return e.length}function Ja(e,t){return t.push(e),e}function $m(e,t){return e.map(t).join("")}function hd(e,t){return e.filter(function(a){return!St(a,t)})}var cl=1,Yr=1,Mm=0,ct=0,ne=0,Qr="";function hi(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:cl,column:Yr,length:n,return:"",siblings:s}}function Qt(e,t){return mi(hi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=Qt(e.root,{children:[e]});Ja(e,e.siblings)}function zm(){return ne}function Am(){return ne=ct>0?Z(Qr,--ct):0,Yr--,ne===10&&(Yr=1,cl--),ne}function ft(){return ne=ct<Mm?Z(Qr,ct++):0,Yr++,ne===10&&(Yr=1,cl++),ne}function Zt(){return Z(Qr,ct)}function vi(){return ct}function fl(e,t){return Ct(Qr,e,t)}function Kr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Dm(e){return cl=Yr=1,Mm=Pe(Qr=e),ct=0,[]}function Bm(e){return Qr="",e}function pl(e){return ul(fl(ct-1,vd(e===91?e+2:e===40?e+1:e)))}function Fm(e){for(;(ne=Zt())&&ne<33;)ft();return Kr(e)>2||Kr(ne)>3?"":" "}function Om(e,t){for(;--t&&ft()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return fl(e,vi()+(t<6&&Zt()==32&&ft()==32))}function vd(e){for(;ft();)switch(ne){case e:return ct;case 34:case 39:e!==34&&e!==39&&vd(ne);break;case 40:e===41&&vd(e);break;case 92:ft();break}return ct}function jm(e,t){for(;ft()&&e+ne!==57;)if(e+ne===84&&Zt()===47)break;return"/*"+fl(t,ct-1)+"*"+gi(e===47?e:ft())}function Nm(e){for(;!Kr(Zt());)ft();return fl(e,ct)}function Um(e){return Bm(gl("",null,null,null,[""],e=Dm(e),0,[0],e))}function gl(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,v=n,x=0,y=0,b=0,w=1,M=1,g=1,f=0,h="",S=o,P=i,E=r,k=h;M;)switch(b=f,f=ft()){case 40:if(b!=108&&Z(k,v-1)==58){Xr(k+=z(pl(f),"&","&\f"),"&\f",md(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=pl(f);break;case 9:case 10:case 13:case 32:k+=Fm(b);break;case 92:k+=Om(vi()-1,7);continue;case 47:switch(Zt()){case 42:case 47:Ja(tw(jm(ft(),vi()),t,a,u),u),(Kr(b||1)==5||Kr(Zt()||1)==5)&&Pe(k)&&Ct(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=Pe(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+p:g==-1&&(k=z(k,/\f/g,"")),y>0&&(Pe(k)-v||w===0&&b===47)&&Ja(y>32?Hm(k+";",r,a,v-1,u):Hm(z(k," ","")+";",r,a,v-2,u),u);break;case 59:k+=";";default:if(Ja(E=_m(k,t,a,d,p,o,s,h,S=[],P=[],v,i),i),f===123)if(p===0)gl(k,t,E,E,S,i,v,s,P);else{switch(x){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?gl(e,E,E,r&&Ja(_m(e,E,E,0,0,o,s,h,o,S=[],v,P),P),o,P,v,s,r?S:P):gl(k,E,E,E,[""],P,0,s,P)}}d=p=y=0,w=g=1,h=k="",v=n;break;case 58:v=1+Pe(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Am()==125)continue}switch(k+=gi(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Pe(k)-1)*g,g=1;break;case 64:Zt()===45&&(k+=pl(ft())),x=Zt(),p=v=Pe(h=k+=Nm(vi())),f++;break;case 45:b===45&&Pe(k)==2&&(w=0)}}return i}function _m(e,t,a,r,o,i,n,s,u,d,p,v){for(var x=o-1,y=o===0?i:[""],b=dl(y),w=0,M=0,g=0;w<r;++w)for(var f=0,h=Ct(e,x+1,x=md(M=n[w])),S=e;f<b;++f)(S=ul(M>0?y[f]+" "+h:z(h,/&\f/g,y[f])))&&(u[g++]=S);return hi(e,t,a,o===0?Ta:s,u,d,p,v)}function tw(e,t,a,r){return hi(e,t,a,ll,gi(zm()),Ct(e,2,-2),0,r)}function Hm(e,t,a,r,o){return hi(e,t,a,Gr,Ct(e,0,r),Ct(e,r+1,-1),r,o)}function xd(e,t,a){switch(Em(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Za+e+_+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+_+e+e;case 6165:return O+e+_+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return O+e+_+"flex-item-"+z(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":_+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+_+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+_+z(e,"shrink","negative")+e;case 5292:return O+e+_+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+_+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+_+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!St(e,/flex-|baseline/))return _+"grid-column-align"+Ct(e,t)+e;break;case 2592:case 3360:return _+z(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,St(r.props,/grid-\w+-end/)})?~Xr(e+(a=a[t].value),"span",0)?e:_+z(e,"-start","")+e+_+"grid-row-span:"+(~Xr(a,"span",0)?St(a,/\d+/):+St(a,/\d+/)-+St(e,/\d+/))+";":_+z(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return St(r.props,/grid-\w+-start/)})?e:_+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Pe(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Za+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xr(e,"stretch",0)?xd(z(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return _+o+":"+i+d+(n?_+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+_+"$2box$3")+e;case 100:return z(e,":",":"+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Zr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function qm(e,t,a,r){switch(e.type){case Rm:if(e.children.length)break;case Pm:case Tm:case Gr:return e.return=e.return||e.value;case ll:return"";case sl:return e.return=e.value+"{"+Zr(e.children,r)+"}";case Ta:if(!Pe(e.value=e.props.join(",")))return""}return Pe(a=Zr(e.children,r))?e.return=e.value+"{"+a+"}":""}function Wm(e){var t=dl(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Vm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Gm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Gr:e.return=xd(e.value,e.length,a);return;case sl:return Zr([Qt(e,{value:z(e.value,"@","@"+O)})],r);case Ta:if(e.length)return $m(a=e.props,function(o){switch(St(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(Qt(e,{props:[z(o,/:(read-\w+)/,":"+Za+"$1")]})),er(Qt(e,{props:[o]})),mi(e,{props:hd(a,r)});break;case"::placeholder":er(Qt(e,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),er(Qt(e,{props:[z(o,/:(plac\w+)/,":"+Za+"$1")]})),er(Qt(e,{props:[z(o,/:(plac\w+)/,_+"input-$1")]})),er(Qt(e,{props:[o]})),mi(e,{props:hd(a,r)});break}return""})}}var bd,yd,Jt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",oh="active",ih="data-styled-version",bl="6.4.3",zd=`/*!sc*/
`,wi=typeof window<"u"&&typeof document<"u";function Xm(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var aw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(yd=(bd=Xm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&bd!==void 0?bd:Xm("SC_DISABLE_SPEEDY"))!==null&&yd!==void 0?yd:typeof process<"u"&&process.env!==void 0&&!1),nh="sc-keyframes-",rw={};function Ci(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var Ok=1<<30,ml=new Map,vl=new Map,hl=1,bi=e=>{if(ml.has(e))return ml.get(e);for(;vl.has(hl);)hl++;let t=hl++;return ml.set(e,t),vl.set(t,e),t},ow=e=>vl.get(e),iw=(e,t)=>{hl=t+1,ml.set(e,t),vl.set(t,e)};var Ad=Object.freeze([]),Jr=Object.freeze({});function lh(e,t,a=Jr){return e.theme!==a.theme&&e.theme||t||a.theme}var nw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,lw=/(^-|-$)/g;function sh(e){return e.replace(nw,"-").replace(lw,"")}var sw=/(a)(d)/gi,Ym=e=>String.fromCharCode(e+(e>25?39:97));function Dd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Ym(t%52)+a;return(Ym(t%52)+a).replace(sw,"$1-$2")}var Cd=5381,ar=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},uh=e=>ar(Cd,e);function Bd(e){return Dd(uh(e)>>>0)}function uw(e){return e.displayName||e.name||"Component"}function Id(e){return typeof e=="string"&&!0}function dw(e){return Id(e)?`styled.${e}`:`Styled(${uw(e)})`}var dh=Symbol.for("react.memo"),cw=Symbol.for("react.forward_ref"),fw={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},pw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ch={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},gw={[cw]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[dh]:ch};function Km(e){return("type"in(t=e)&&t.type.$$typeof)===dh?ch:"$$typeof"in e?gw[e.$$typeof]:fw;var t}var mw=Object.defineProperty,hw=Object.getOwnPropertyNames,vw=Object.getOwnPropertySymbols,xw=Object.getOwnPropertyDescriptor,bw=Object.getPrototypeOf,yw=Object.prototype;function fh(e,t,a){if(typeof t!="string"){let r=bw(t);r&&r!==yw&&fh(e,r,a);let o=hw(t).concat(vw(t)),i=Km(e),n=Km(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in pw||a&&a[u]||n&&u in n||i&&u in i)){let d=xw(t,u);try{mw(e,u,d)}catch{}}}}return e}function Ii(e){return typeof e=="function"}var ww=Symbol.for("react.forward_ref");function Fd(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===ww&&"styledComponentId"in e}function yi(e,t){return e&&t?e+" "+t:e||t||""}function xl(e,t){return e.join(t||"")}function Li(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function kd(e,t,a=!1){if(!a&&!Li(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=kd(e[r],t[r]);else if(Li(t))for(let r in t)e[r]=kd(e[r],t[r]);return e}function Od(e,t){Object.defineProperty(e,"toString",{value:t})}var Lw=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw Ci(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+zd;return t}},Sw=`style[${Jt}][${ih}="${bl}"]`,Cw=new RegExp(`^${Jt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Qm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Pd=e=>{if(!e)return document;if(Qm(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Qm(t))return t}return document},Iw=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},kw=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(zd),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(Cw);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(iw(p,d),Iw(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},wd=e=>{let t=Pd(e.options.target).querySelectorAll(Sw);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Jt)!==oh&&(kw(e,o),o.parentNode&&o.parentNode.removeChild(o))}},xi=!1;function Pw(){if(xi!==!1)return xi;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return xi=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return xi=t.getAttribute("content")||void 0}return xi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var ph=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Jt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Jt,oh),o.setAttribute(ih,bl);let s=t||Pw();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},Tw=class{constructor(e,t){this.element=ph(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw Ci(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Rw=class{constructor(e,t){this.element=ph(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Zm=wi,Ew={isServer:!wi,useCSSOMInjection:!aw},Si=class e{static registerId(t){return bi(t)}constructor(t=Jr,a={},r){this.options=Object.assign(Object.assign({},Ew),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&wi&&Zm&&(Zm=!1,wd(this)),Od(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=ow(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let v=i.getGroup(u);if(v.length===0)continue;let x=Jt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=v+x+'{content:"'+y+'"}'+zd}return s})(this))}rehydrate(){!this.server&&wi&&wd(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&wi&&t.target!==this.options.target&&Pd(this.options.target)!==Pd(t.target)&&wd(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Tw(r,o):new Rw(r,o))(this.options),new Lw(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){bi(t),t.startsWith(nh)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(bi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(bi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},gh=new WeakSet,$w={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in $w||e.startsWith("--")?String(t).trim():t+"px"}var tr=47;function Jm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var mh=Symbol.for("sc-keyframes");function zw(e){return typeof e=="object"&&e!==null&&mh in e}function hh(e){return Ii(e)&&!(e.prototype&&e.prototype.isReactComponent)}var vh=e=>e==null||e===!1||e==="",Aw=Symbol.for("react.client.reference");function eh(e){return e.$$typeof===Aw}function xh(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!vh(r)&&(Array.isArray(r)&&gh.has(r)||Ii(r)?t.push(Jm(a)+":",r,";"):Li(r)?(t.push(a+" {"),xh(r,t),t.push("}")):t.push(Jm(a)+": "+Mw(a,r)+";"))}}function Ra(e,t,a,r,o=[]){if(vh(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(eh(e))return o;if(hh(e)&&t){let n=e(t);return Ra(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)Ra(e[n],t,a,r,o);return o}return Fd(e)?(o.push(`.${e.styledComponentId}`),o):zw(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):eh(e)?o:Li(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(xh(e,o),o):(o.push(e.toString()),o)}var Dw=uh(bl),Td=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=ar(Dw,a),this.baseStyle=r,Si.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(hh(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=xl(Ra(u,t,a,r)))}else i+=xl(Ra(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=Dd(ar(ar(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=yi(o,s)}}return o}},Bw=/&/g;function bh(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function Ld(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==tr||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===tr&&(n=!1,u++);else if(d!==34&&d!==39||bh(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let v=e.charCodeAt(p);if(v===59||v===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function yh(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&yh(i.children,t)}return e}function wh({options:e=Jr,plugins:t=Ad}=Jr){let a,r,o,i=(x,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:x,n=t.slice();n.push(x=>{x.type===Ta&&x.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),x.props[0]=x.props[0].replace(Bw,r).replace(o,i))}),e.prefix&&n.push(Gm),n.push(qm);let s=[],u=Wm(n.concat(Vm(x=>s.push(x)))),d=(x,y="",b="",w="&")=>{a=w,r=y,o=void 0;let M=(function(f){let h=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!h&&!S)return f;if(!h)return Ld(f);let P=f.length,E="",k=0,R=0,U=0,A=0,ae=0,Da=!1;for(;R<P;){let ye=f.charCodeAt(R);if(ye!==34&&ye!==39||bh(f,R))if(U===0)if(ye===tr&&R+1<P&&f.charCodeAt(R+1)===42){for(R+=2;R+1<P&&(f.charCodeAt(R)!==42||f.charCodeAt(R+1)!==tr);)R++;R+=2}else if(ye!==40)if(ye!==41)if(A>0)R++;else if(ye===42&&R+1<P&&f.charCodeAt(R+1)===tr)E+=f.substring(k,R),R+=2,k=R,Da=!0;else if(ye===tr&&R+1<P&&f.charCodeAt(R+1)===tr){for(E+=f.substring(k,R);R<P&&f.charCodeAt(R)!==10;)R++;k=R,Da=!0}else ye===123?ae++:ye===125&&ae--,R++;else A>0&&A--,R++;else A++,R++;else R++;else U===0?U=ye:U===ye&&(U=0),R++}return Da?(k<P&&(E+=f.substring(k)),ae===0?E:Ld(E)):ae===0?f:Ld(f)})(x),g=Um(b||y?b+" "+y+" { "+M+" }":M);return e.namespace&&(g=yh(g,e.namespace)),s=[],Zr(g,u),s},p=e,v=Cd;for(let x=0;x<t.length;x++)t[x].name||Ci(15),v=ar(v,t[x].name);return p?.namespace&&(v=ar(v,p.namespace)),p?.prefix&&(v=ar(v,"p")),d.hash=v!==Cd?v.toString():"",d}var Fw=new Si,Rd=wh(),jd=ue.default.createContext({shouldForwardProp:void 0,styleSheet:Fw,stylis:Rd,stylisPlugins:void 0}),jk=jd.Consumer;function Nd(){return ue.default.useContext(jd)}function Lh(e){var t;let a=Nd(),{styleSheet:r}=a,o=ue.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=ue.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:wh({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=ue.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return ue.default.createElement(jd.Provider,{value:u},e.children)}var _d=ue.default.createContext(void 0),Nk=_d.Consumer;var th=Object.prototype.hasOwnProperty,Sd={};function Ow(e,t){let a=typeof e!="string"?"sc":sh(e);Sd[a]=(Sd[a]||0)+1;let r=a+"-"+Bd(bl+a+Sd[a]);return t?t+"-"+r:r}function jw(e,t,a){let r=Fd(e),o=e,i=!Id(e),{attrs:n=Ad,componentId:s=Ow(t.displayName,t.parentComponentId),displayName:u=dw(e)}=t,d=t.displayName&&t.componentId?sh(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:v}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let M=t.shouldForwardProp;v=(g,f)=>w(g,f)&&M(g,f)}else v=w}let x=new Td(a,d,r?o.componentStyle:void 0);function y(w,M){return(function(g,f,h){let{attrs:S,componentStyle:P,defaultProps:E,foldedComponentIds:k,styledComponentId:R,target:U}=g,A=ue.default.useContext(_d),ae=Nd(),Da=g.shouldForwardProp||ae.shouldForwardProp,ye=lh(f,A,E)||Jr,ra,yo;{let oa=ue.default.useRef(null),gt=oa.current;if(gt!==null&&gt[1]===ye&&gt[2]===ae.styleSheet&&gt[3]===ae.stylis&&gt[7]===P&&(function(hr,We,Oe){let je=hr,we=We,wo=0;for(let Ba in we)if(th.call(we,Ba)&&(wo++,je[Ba]!==we[Ba]))return!1;return wo===Oe})(gt[0],f,gt[4]))ra=gt[5],yo=gt[6];else{ra=(function(We,Oe,je){let we=Object.assign(Object.assign({},Oe),{className:void 0,theme:je}),wo=We.length>1;for(let Ba=0;Ba<We.length;Ba++){let Yl=We[Ba],Fi=Ii(Yl)?Yl(wo?Object.assign({},we):we):Yl;for(let ia in Fi)ia==="className"?we.className=yi(we.className,Fi[ia]):ia==="style"?we.style=Object.assign(Object.assign({},we.style),Fi[ia]):ia in Oe&&Oe[ia]===void 0||(we[ia]=Fi[ia])}return"className"in Oe&&typeof Oe.className=="string"&&(we.className=yi(we.className,Oe.className)),we})(S,f,ye),yo=(function(We,Oe,je,we){return We.generateAndInjectStyles(Oe,je,we)})(P,ra,ae.styleSheet,ae.stylis);let hr=0;for(let We in f)th.call(f,We)&&hr++;oa.current=[f,ye,ae.styleSheet,ae.stylis,hr,ra,yo,P]}}let Bi=ra.as||U,Gl=(function(oa,gt,hr,We){let Oe={};for(let je in oa)oa[je]===void 0||je[0]==="$"||je==="as"||je==="theme"&&oa.theme===hr||(je==="forwardedAs"?Oe.as=oa.forwardedAs:We&&!We(je,gt)||(Oe[je]=oa[je]));return Oe})(ra,Bi,ye,Da),Xl=yi(k,R);return yo&&(Xl+=" "+yo),ra.className&&(Xl+=" "+ra.className),Gl[Id(Bi)&&Bi.includes("-")?"class":"className"]=Xl,h&&(Gl.ref=h),(0,ue.createElement)(Bi,Gl)})(b,w,M)}y.displayName=u;let b=ue.default.forwardRef(y);return b.attrs=p,b.componentStyle=x,b.displayName=u,b.shouldForwardProp=v,b.foldedComponentIds=r?yi(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function(M,...g){for(let f of g)kd(M,f,!0);return M})({},o.defaultProps,w):w}}),Od(b,()=>`.${b.styledComponentId}`),i&&fh(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var Nw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ah(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var rh=e=>(gh.add(e),e);function L(e,...t){if(Ii(e)||Li(e))return rh(Ra(ah(Ad,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ra(a):rh(Ra(ah(a,t)))}function Ed(e,t,a=Jr){if(!t)throw Ci(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>Ed(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>Ed(e,t,Object.assign(Object.assign({},a),o)),r}var Sh=e=>Ed(jw,e),l=Sh;Nw.forEach(e=>{l[e]=Sh(e)});var $d=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(Ii(i)&&!Fd(i))return!1}return!0})(t),Si.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=xl(Ra(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function Ch(e,...t){let a=L(e,...t),r=`sc-global-${Bd(JSON.stringify(a))}`,o=new $d(a,r),i=s=>{let u=Nd(),d=ue.default.useContext(_d),p;{let v=ue.default.useRef(null);v.current===null&&(v.current=u.styleSheet.allocateGSInstance(r)),p=v.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let v=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],x=ue.default.useRef(o);ue.default.useLayoutEffect(()=>{u.styleSheet.server||(x.current!==o&&(u.styleSheet.clearRules(r),x.current=o),n(p,s,u.styleSheet,d,u.stylis))},v),ue.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,v){if(o.isStatic)o.renderStyles(s,rw,d,v);else{let x=Object.assign(Object.assign({},u),{theme:lh(u,p,i.defaultProps)});o.renderStyles(s,x,d,v)}}return ue.default.memo(i)}var Ih,Md=class{constructor(t,a){this[Ih]=!0,this.inject=(r,o=Rd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=nh+t,this.rules=a,bi(this.id),Od(this,()=>{throw Ci(12,String(this.name))})}getName(t=Rd){return t.hash?this.name+Dd(+t.hash>>>0):this.name}};function Dt(e,...t){let a=xl(L(e,...t)),r=Bd(a);return new Md(r,a)}Ih=mh;var _k=`__sc-${Jt}__`;var Hk=`:not(style[${Jt}])`,Uk=`style[${Jt}]`;var kh=`/* Generated from src/tokens. Do not edit directly. */

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
`;var yl=document.currentScript??document.querySelector("script[data-project]"),Ze={project:yl?.dataset.project??"default",seedUrl:yl?.dataset.seed,version:yl?.dataset.version||void 0,compareBase:yl?.dataset.compareBase??`${location.protocol}//${location.hostname}:3001`,embed:new URLSearchParams(location.search).get("fbw")==="embed"};var rr=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,ki=e=>e.comments[0]?.body??"",Ph=e=>e.comments[0]?.author??"";function Th(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:rr(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}function Rh(e,t){return e.filter(a=>!t[a.id]?.hidden).map(a=>{let r=t[a.id];if(!r)return{...a,origin:"seed"};let o=new Set(r.hiddenCommentIds??[]),i=a.comments.filter(n=>!o.has(n.id)).map(n=>r.editedBodies?.[n.id]?{...n,body:r.editedBodies[n.id]}:n);return{...a,origin:"seed",resolved:r.resolved??a.resolved,comments:[...i,...r.addedComments??[]]}}).filter(a=>a.comments.length>0)}function Eh(e,t,a){let r=e.addedComments??[];return r.some(o=>o.id===t)?{addedComments:r.map(o=>o.id===t?{...o,body:a}:o)}:{editedBodies:{...e.editedBodies,[t]:a}}}function $h(e,t){let a=e.addedComments??[];return a.some(r=>r.id===t)?{addedComments:a.filter(r=>r.id!==t)}:{hiddenCommentIds:[...e.hiddenCommentIds??[],t]}}var Mh="fbw:author",wl=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;Th(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.refreshSeeds(),this.notify()}refreshSeeds(){this.seedThreads=Rh(this.rawSeeds,this.overrides)}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o){let i={id:rr(),author:a,body:r,createdAt:new Date().toISOString(),version:o};if(this.isSeed(t)){let n=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...n.addedComments??[],i]});return}this.threads=this.threads.map(n=>n.id===t?{...n,comments:[...n.comments,i]}:n),this.persist()}updateComment(t,a,r){if(this.isSeed(t)){this.overrideSeed(t,Eh(this.overrides[t]??{},a,r));return}this.threads=this.threads.map(o=>o.id===t?{...o,comments:o.comments.map(i=>i.id===a?{...i,body:r}:i)}:o),this.persist()}removeComment(t,a){if(this.isSeed(t)){this.overrideSeed(t,$h(this.overrides[t]??{},a));return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r).filter(r=>r.comments.length>0),this.persist()}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.refreshSeeds(),this.notify()}get author(){return localStorage.getItem(Mh)??""}set author(t){localStorage.setItem(Mh,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){try{localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}catch{this.threads=this.threads.map(({beforeShot:t,...a})=>a),localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}this.notify()}notify(){this.listeners.forEach(t=>t())}};var eo="fbw-host",Hw="#2563eb",Hd="fbw:pending-jump",Uw=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function qw(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${Uw(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function zh(e){return{page:location.pathname,selector:qw(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ea(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==eo&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function Ww(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${Hw}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function Pi(e){if(e.page!==location.pathname)return!1;let t=Ea(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>Ww(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function Ah(e){sessionStorage.setItem(Hd,JSON.stringify(e)),location.assign(e.page)}function Dh(){let e=sessionStorage.getItem(Hd);if(e){sessionStorage.removeItem(Hd);try{let t=JSON.parse(e);setTimeout(()=>Pi(t),400)}catch{}}}var Vw=e=>typeof e=="object"&&e!==null&&e.type==="fbw:jump"&&typeof e.anchor?.page=="string";function Bh(){window.addEventListener("message",e=>{Vw(e.data)&&Pi(e.data.anchor)})}var Di=c(C(),1);var rc=c(C(),1),oc=c(C(),1),ic=c(C(),1),nc=c(C(),1),$l=c(C(),1),N2=c(C(),1),hv=c(C(),1),vv=c(C(),1),xv=c(C(),1),Mi=c(C(),1),G2=c(C(),1);var X2=c(m(),1),Y2=c(m(),1);var Rv=c(m(),1);var Ev=c(m(),1);var $v=c(m(),1);var bL=c(m(),1),zv=c(m(),1);var wL=c(m(),1);var LL=c(m(),1),SL=c(m(),1),CL=c(m(),1),Av=c(m(),1),IL=c(m(),1),Bv=c(C(),1);var Ov=c(m(),1),jv=c(C(),1),Nv=c(m(),1);var _v=c(C(),1);var Hv=c(m(),1);var Uv=c(m(),1),dc=c(C(),1);var cc=c(m(),1),Wv=c(C(),1);var Vv=c(m(),1),Gv=c(C(),1);var Xv=c(m(),1),Yv=c(C(),1);var Kv=c(m(),1),Qv=c(C(),1);var Zv=c(m(),1),Jv=c(C(),1);var jL=c(m(),1),ex=c(m(),1),NL=c(C(),1),_L=c(Pa(),1),HL=c(C(),1);var UL=c(m(),1),qL=c(C(),1),tx=c(m(),1),zl=c(C(),1),WL=c(Pa(),1),VL=c(m(),1),Al=c(C(),1);var ax=c(m(),1),po=c(C(),1);var rx=c(m(),1),nr=c(C(),1);var Be=c(m(),1),KL=c(C(),1),gc=c(m(),1),QL=c(C(),1),mc=c(m(),1),ZL=c(C(),1),ox=c(m(),1),hc=c(C(),1);var ix=c(m(),1);var nx=c(m(),1);var lx=c(m(),1);var sx=c(m(),1);var ux=c(m(),1),vc=c(C(),1),eS=c(Pa(),1);var dx=c(C(),1);var cx=c(m(),1),xc=c(m(),1);var fx=c(m(),1);var gx=c(m(),1),rS=c(C(),1);var oS=c(m(),1);var Cl=c(C());var Sl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var Nh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var _h=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var Ud=e=>{let t=_h(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Ti=c(C());var Hh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Uh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var qh=(0,Ti.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,Ti.createElement)("svg",{ref:u,...Hh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:Sl("lucide",o),...!i&&!Uh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,Ti.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Bt=(e,t)=>{let a=(0,Cl.forwardRef)(({className:r,...o},i)=>(0,Cl.createElement)(qh,{ref:i,iconNode:t,className:Sl(`lucide-${Nh(Ud(e))}`,`lucide-${e}`,r),...o}));return a.displayName=Ud(e),a};var Jw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],to=Bt("check",Jw);var e2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],or=Bt("maximize-2",e2);var t2=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],ao=Bt("pencil",t2);var a2=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],$a=Bt("trash-2",a2);var r2=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ve=Bt("x",r2);var mx=c(C(),1);var hx=c(m(),1),vx=c(m(),1);var xx=c(m(),1),dS=c(C(),1);var bx=c(m(),1);var yx=c(C(),1);var wx=c(m(),1);var Sx=c(m(),1);var pS=c(m(),1);var mS=c(m(),1);var Dl=c(m(),1);var xS=c(m(),1);var kx=c(m(),1);var PS=c(m(),1),pr=c(C(),1);var Px=c(m(),1);var Tx=c(m(),1);var Rx=c(m(),1),MS=c(C(),1);var Ex=c(m(),1);var $x=c(m(),1);var zS=c(m(),1);var Mx=c(m(),1);var FS=c(m(),1);var zx=c(m(),1);var jS=c(C(),1);var Ax=c(m(),1),NS=c(C(),1);var Fx=c(m(),1),_S=c(C(),1),Ox=c(m(),1),HS=c(m(),1),jx=c(m(),1),Nx=c(C(),1);var bc=c(m(),1),_x=c(m(),1);var Hx=c(m(),1);var ac=c(m(),1),dr=c(C(),1);var Re=c(m(),1),eC=c(C(),1),tC=c(Pa(),1);var qx=c(m(),1);var yc=c(C(),1),wc=c(m(),1),Lc=c(C(),1);var Wx=c(m(),1),go=c(C(),1),aC=c(Pa(),1);var Vx=c(m(),1),rC=c(m(),1),Gx=c(C(),1),Sc=c(m(),1),Xx=c(C(),1);var Yx=c(m(),1);var Kx=c(m(),1),nC=c(C(),1),Cc=c(m(),1),Qx=c(C(),1),lC=c(Pa(),1),sC=c(m(),1),tt=c(C(),1),Bl=c(m(),1);var Ic=c(C(),1),e0=c(m(),1);var t0=c(C(),1);var a0=c(m(),1),r0=c(C(),1);var o0=c(m(),1);var i0=c(m(),1);var n0=c(m(),1);var l0=c(m(),1);var Pt=c(m(),1),d0=c(C(),1);var co=c(m(),1);var RC=c(m(),1),Fl=c(C(),1);var kc=c(m(),1),EC=c(m(),1),gr=c(C(),1);var c0=c(m(),1),Ol=c(C(),1);var f0=c(m(),1),p0=c(C(),1);var jl=c(m(),1);var zC=c(m(),1);var g0=c(m(),1);var m0=c(m(),1);var h0=c(m(),1),AC=c(C(),1);var v0=c(m(),1),x0=c(C(),1);var b0=c(m(),1),y0=c(m(),1);var lr=c(m(),1),L0=c(m(),1);var S0=c(m(),1);var C0=c(m(),1),UC=c(C(),1);var I0=c(m(),1);var qC=c(m(),1),Nl=c(C(),1);var k0=c(m(),1);var WC=c(m(),1),P0=c(C(),1);var sr=c(m(),1);var T0=c(m(),1),R0=c(C(),1);var E0=c(m(),1);var $0=c(m(),1);var QC=c(m(),1);var M0=c(m(),1),ZC=c(C(),1),JC=c(m(),1),z0=c(C(),1),eI=c(m(),1),A0=c(m(),1);var rI=c(m(),1);var oI=c(C(),1);var Pc=c(m(),1);var Tc=c(m(),1),Rc=c(C(),1),F0=c(C(),1),Ec=c(m(),1),$c=c(m(),1);var O0=c(m(),1),Mc=c(C(),1);var lI=c(m(),1),j0=c(m(),1),N0=c(m(),1);var _0=c(m(),1);var zc=c(m(),1),sI=c(m(),1),uI=c(m(),1);var H0=c(m(),1),U0=c(C(),1),q0=c(m(),1),dI=c(C(),1);var Ac=c(m(),1),Dc=c(C(),1);var Bc=c(m(),1),W0=c(m(),1),Fc=c(m(),1),V0=c(m(),1),G0=c(m(),1);var X0=c(m(),1);var Oc=c(m(),1);var jc=c(m(),1);var Y0=c(m(),1),Nc=c(m(),1),K0=c(m(),1),cI=c(C(),1),Z0=c(m(),1),J0=c(m(),1),fI=c(C(),1);var eb=c(m(),1),tb=c(m(),1);var pI=c(m(),1);function Wh(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let a=document.implementation.createHTMLDocument(),r=a.createElement("base"),o=a.createElement("a");return a.head.appendChild(r),a.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}var Vh=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function It(e){let t=[];for(let a=0,r=e.length;a<r;a++)t.push(e[a]);return t}var ro=null;function kl(e={}){return ro||(e.includeStyleProperties?(ro=e.includeStyleProperties,ro):(ro=It(window.getComputedStyle(document.documentElement)),ro))}function Il(e,t){let r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function o2(e){let t=Il(e,"border-left-width"),a=Il(e,"border-right-width");return e.clientWidth+t+a}function i2(e){let t=Il(e,"border-top-width"),a=Il(e,"border-bottom-width");return e.clientHeight+t+a}function qd(e,t={}){let a=t.width||o2(e),r=t.height||i2(e);return{width:a,height:r}}function Gh(){let e,t;try{t=process}catch{}let a=t&&t.env?t.env.devicePixelRatio:null;return a&&(e=parseInt(a,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var Je=16384;function Xh(e){(e.width>Je||e.height>Je)&&(e.width>Je&&e.height>Je?e.width>e.height?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je):e.width>Je?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je))}function oo(e){return new Promise((t,a)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=a,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function n2(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Yh(e,t,a){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${a}`),o.setAttribute("viewBox",`0 0 ${t} ${a}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),n2(o)}var Te=(e,t)=>{if(e instanceof t)return!0;let a=Object.getPrototypeOf(e);return a===null?!1:a.constructor.name===t.name||Te(a,t)};function l2(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function s2(e,t){return kl(t).map(a=>{let r=e.getPropertyValue(a),o=e.getPropertyPriority(a);return`${a}: ${r}${o?" !important":""};`}).join(" ")}function u2(e,t,a,r){let o=`.${e}:${t}`,i=a.cssText?l2(a):s2(a,r);return document.createTextNode(`${o}{${i}}`)}function Kh(e,t,a,r){let o=window.getComputedStyle(e,a),i=o.getPropertyValue("content");if(i===""||i==="none")return;let n=Vh();try{t.className=`${t.className} ${n}`}catch{return}let s=document.createElement("style");s.appendChild(u2(n,a,o,r)),t.appendChild(s)}function Qh(e,t,a){Kh(e,t,":before",a),Kh(e,t,":after",a)}var Zh="application/font-woff",Jh="image/jpeg",d2={woff:Zh,woff2:Zh,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Jh,jpeg:Jh,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function c2(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function io(e){let t=c2(e).toLowerCase();return d2[t]||""}function f2(e){return e.split(/,/)[1]}function Ri(e){return e.search(/^(data:)/)!==-1}function Vd(e,t){return`data:${t};base64,${e}`}async function Gd(e,t,a){let r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((i,n)=>{let s=new FileReader;s.onerror=n,s.onloadend=()=>{try{i(a({res:r,result:s.result}))}catch(u){n(u)}},s.readAsDataURL(o)})}var Wd={};function p2(e,t,a){let r=e.replace(/\?.*/,"");return a&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function no(e,t,a){let r=p2(e,t,a.includeQueryParams);if(Wd[r]!=null)return Wd[r];a.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{let i=await Gd(e,a.fetchRequestInit,({res:n,result:s})=>(t||(t=n.headers.get("Content-Type")||""),f2(s)));o=Vd(i,t)}catch(i){o=a.imagePlaceholder||"";let n=`Failed to fetch resource: ${e}`;i&&(n=typeof i=="string"?i:i.message),n&&console.warn(n)}return Wd[r]=o,o}async function g2(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):oo(t)}async function m2(e,t){if(e.currentSrc){let i=document.createElement("canvas"),n=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,n?.drawImage(e,0,0,i.width,i.height);let s=i.toDataURL();return oo(s)}let a=e.poster,r=io(a),o=await no(a,r,t);return oo(o)}async function h2(e,t){var a;try{if(!((a=e?.contentDocument)===null||a===void 0)&&a.body)return await Ei(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function v2(e,t){return Te(e,HTMLCanvasElement)?g2(e):Te(e,HTMLVideoElement)?m2(e,t):Te(e,HTMLIFrameElement)?h2(e,t):e.cloneNode(ev(e))}var x2=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",ev=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function b2(e,t,a){var r,o;if(ev(t))return t;let i=[];return x2(e)&&e.assignedNodes?i=It(e.assignedNodes()):Te(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?i=It(e.contentDocument.body.childNodes):i=It(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),i.length===0||Te(e,HTMLVideoElement)||await i.reduce((n,s)=>n.then(()=>Ei(s,a)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function y2(e,t,a){let r=t.style;if(!r)return;let o=window.getComputedStyle(e);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):kl(a).forEach(i=>{let n=o.getPropertyValue(i);i==="font-size"&&n.endsWith("px")&&(n=`${Math.floor(parseFloat(n.substring(0,n.length-2)))-.1}px`),Te(e,HTMLIFrameElement)&&i==="display"&&n==="inline"&&(n="block"),i==="d"&&t.getAttribute("d")&&(n=`path(${t.getAttribute("d")})`),r.setProperty(i,n,o.getPropertyPriority(i))})}function w2(e,t){Te(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Te(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function L2(e,t){if(Te(e,HTMLSelectElement)){let r=Array.from(t.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function S2(e,t,a){return Te(t,Element)&&(y2(e,t,a),Qh(e,t,a),w2(e,t),L2(e,t)),t}async function C2(e,t){let a=e.querySelectorAll?e.querySelectorAll("use"):[];if(a.length===0)return e;let r={};for(let i=0;i<a.length;i++){let s=a[i].getAttribute("xlink:href");if(s){let u=e.querySelector(s),d=document.querySelector(s);!u&&d&&!r[s]&&(r[s]=await Ei(d,t,!0))}}let o=Object.values(r);if(o.length){let i="http://www.w3.org/1999/xhtml",n=document.createElementNS(i,"svg");n.setAttribute("xmlns",i),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let s=document.createElementNS(i,"defs");n.appendChild(s);for(let u=0;u<o.length;u++)s.appendChild(o[u]);e.appendChild(n)}return e}async function Ei(e,t,a){return!a&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>v2(r,t)).then(r=>b2(e,r,t)).then(r=>S2(e,r,t)).then(r=>C2(r,t))}var tv=/url\((['"]?)([^'"]+?)\1\)/g,I2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,k2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function P2(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function T2(e){let t=[];return e.replace(tv,(a,r,o)=>(t.push(o),a)),t.filter(a=>!Ri(a))}async function R2(e,t,a,r,o){try{let i=a?Wh(t,a):t,n=io(t),s;if(o){let u=await o(i);s=Vd(u,n)}else s=await no(i,n,r);return e.replace(P2(t),`$1${s}$3`)}catch{}return e}function E2(e,{preferredFontFormat:t}){return t?e.replace(k2,a=>{for(;;){let[r,,o]=I2.exec(a)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function Xd(e){return e.search(tv)!==-1}async function Pl(e,t,a){if(!Xd(e))return e;let r=E2(e,a);return T2(r).reduce((i,n)=>i.then(s=>R2(s,n,t,a)),Promise.resolve(r))}async function lo(e,t,a){var r;let o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){let i=await Pl(o,null,a);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function $2(e,t){await lo("background",e,t)||await lo("background-image",e,t),await lo("mask",e,t)||await lo("-webkit-mask",e,t)||await lo("mask-image",e,t)||await lo("-webkit-mask-image",e,t)}async function M2(e,t){let a=Te(e,HTMLImageElement);if(!(a&&!Ri(e.src))&&!(Te(e,SVGImageElement)&&!Ri(e.href.baseVal)))return;let r=a?e.src:e.href.baseVal,o=await no(r,io(r),t);await new Promise((i,n)=>{e.onload=i,e.onerror=t.onImageErrorHandler?(...u)=>{try{i(t.onImageErrorHandler(...u))}catch(d){n(d)}}:n;let s=e;s.decode&&(s.decode=i),s.loading==="lazy"&&(s.loading="eager"),a?(e.srcset="",e.src=o):e.href.baseVal=o})}async function z2(e,t){let r=It(e.childNodes).map(o=>Yd(o,t));await Promise.all(r).then(()=>e)}async function Yd(e,t){Te(e,Element)&&(await $2(e,t),await M2(e,t),await z2(e,t))}function av(e,t){let{style:a}=e;t.backgroundColor&&(a.backgroundColor=t.backgroundColor),t.width&&(a.width=`${t.width}px`),t.height&&(a.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(o=>{a[o]=r[o]}),e}var rv={};async function ov(e){let t=rv[e];if(t!=null)return t;let r=await(await fetch(e)).text();return t={url:e,cssText:r},rv[e]=t,t}async function iv(e,t){let a=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(a.match(/url\([^)]+\)/g)||[]).map(async n=>{let s=n.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),Gd(s,t.fetchRequestInit,({result:u})=>(a=a.replace(n,`url(${u})`),[n,u]))});return Promise.all(i).then(()=>a)}function nv(e){if(e==null)return[];let t=[],a=/(\/\*[\s\S]*?\*\/)/gi,r=e.replace(a,""),o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=o.exec(r);if(u===null)break;t.push(u[0])}r=r.replace(o,"");let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,n="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(n,"gi");for(;;){let u=i.exec(r);if(u===null){if(u=s.exec(r),u===null)break;i.lastIndex=s.lastIndex}else s.lastIndex=i.lastIndex;t.push(u[0])}return t}async function A2(e,t){let a=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{It(o.cssRules||[]).forEach((i,n)=>{if(i.type===CSSRule.IMPORT_RULE){let s=n+1,u=i.href,d=ov(u).then(p=>iv(p,t)).then(p=>nv(p).forEach(v=>{try{o.insertRule(v,v.startsWith("@import")?s+=1:o.cssRules.length)}catch(x){console.error("Error inserting rule from remote css",{rule:v,error:x})}})).catch(p=>{console.error("Error loading remote css",p.toString())});r.push(d)}})}catch(i){let n=e.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(ov(o.href).then(s=>iv(s,t)).then(s=>nv(s).forEach(u=>{n.insertRule(u,n.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{It(o.cssRules||[]).forEach(i=>{a.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${o.href}`,i)}}),a))}function D2(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Xd(t.style.getPropertyValue("src")))}async function B2(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let a=It(e.ownerDocument.styleSheets),r=await A2(a,t);return D2(r)}function lv(e){return e.trim().replace(/["']/g,"")}function F2(e){let t=new Set;function a(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(i=>{t.add(lv(i))}),Array.from(r.children).forEach(i=>{i instanceof HTMLElement&&a(i)})}return a(e),t}async function sv(e,t){let a=await B2(e,t),r=F2(e);return(await Promise.all(a.filter(i=>r.has(lv(i.style.fontFamily))).map(i=>{let n=i.parentStyleSheet?i.parentStyleSheet.href:null;return Pl(i.cssText,n,t)}))).join(`
`)}async function uv(e,t){let a=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await sv(e,t);if(a){let r=document.createElement("style"),o=document.createTextNode(a);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function O2(e,t={}){let{width:a,height:r}=qd(e,t),o=await Ei(e,t,!0);return await uv(o,t),await Yd(o,t),av(o,t),await Yh(o,a,r)}async function dv(e,t={}){let{width:a,height:r}=qd(e,t),o=await O2(e,t),i=await oo(o),n=document.createElement("canvas"),s=n.getContext("2d"),u=t.pixelRatio||Gh(),d=t.canvasWidth||a,p=t.canvasHeight||r;return n.width=d*u,n.height=p*u,t.skipAutoScale||Xh(n),n.style.width=`${d}`,n.style.height=`${p}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,n.width,n.height)),s.drawImage(i,0,0,n.width,n.height),n}var mv={};var lc={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},sc={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},xe={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},so={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Ft={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},kt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},_2={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},$i={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Tl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Ot={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},bv={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},yv={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Zd={zero:"0deg",half:"180deg",full:"360deg"},Ml={horizontal:"90deg",diagonal:"135deg"},De={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},ir={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Fe={sm:`@media (max-width: ${ir.sm}px)`,smPlus:`@media (max-width: ${ir.smPlus}px)`,md:`@media (max-width: ${ir.md}px)`,mdWide:`@media (max-width: ${ir.mdWide}px)`,lg:`@media (max-width: ${ir.lg}px)`,xl:`@media (max-width: ${ir.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},et={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},H2={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},U2={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Kd={press:.95,drag:.985,hoverLift:1.04},q2={landscape:"4 / 3"},W2={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},uo={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function wv(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Ot.xs,md:Ot.md,lg:Ot["2xl"],xl:Ot["4xl"],pill:Ot.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:ir,motion:De,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var Ma=wv("portalDark",lc,bv),V2=wv("portalLight",sc,yv);var hP=(0,Mi.createContext)(null);var ea=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,be=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,uc=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,xP=L`
  ${ea}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,cr=L`
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
`,zi=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,K2=L`
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

  ${zi}
`,Lv=L`
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

  ${zi}
`,Q2=L`
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

  ${zi}
`,Z2=L`
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

  ${zi}
`,J2=L`
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

  ${zi}
`,Sv=L`
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
`,eL=L`
  ${Sv}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,tL=L`
  ${Sv}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Cv=L`
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
    ${Lv}
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
`,Iv=L`
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
`,aL=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,kv=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,rL=L`
  ${kv}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,oL=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Pv=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,iL=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,Tv=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,nL={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function lL(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var sL={"--ig-radius-2xs":Ot["2xs"],"--ig-radius-xxs":Ot.xxs,"--ig-radius-xs":Ot.xs,"--ig-radius-sm":Ma.radius.sm,"--ig-radius-md":Ma.radius.md,"--ig-radius-lg":Ma.radius.lg,"--ig-radius-xl":Ma.radius.xl,"--ig-radius-2xl":Ot["2xl"],"--ig-radius-4xl":Ot["4xl"],"--ig-radius-pill":Ma.radius.pill,"--ig-font-sans":Ma.typography.fontSans,"--ig-font-mono":Ma.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(xe.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(xe.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(xe.svgFillSoft),"--ig-opacity-svg-fill-medium":String(xe.svgFillMedium),"--ig-opacity-dim":String(xe.dim),"--ig-opacity-dim-soft":String(xe.dimSoft),"--ig-opacity-ghost":String(xe.ghost),"--ig-opacity-faded":String(xe.faded),"--ig-opacity-disabled":String(xe.disabled),"--ig-opacity-overlay":String(xe.overlay),"--ig-opacity-muted":String(xe.muted),"--ig-opacity-subtle":String(xe.subtle),"--ig-opacity-emphatic":String(xe.emphatic),"--ig-opacity-loud":String(xe.loud),"--ig-opacity-loud-plus":String(xe.loudPlus),"--ig-opacity-prominent":String(xe.prominent),"--ig-opacity-near":String(xe.near),"--ig-blur-2xs":so.blur2xs,"--ig-blur-xs":so.blurXs,"--ig-blur-sm":so.blurSm,"--ig-blur-md":so.blurMd,"--ig-blur-lg":so.blurLg,"--ig-blur-xl":so.blurXl,"--ig-icon-xs":Ft.xs,"--ig-icon-sub":Ft.sub,"--ig-icon-2xs":Ft["2xs"],"--ig-icon-sm":Ft.sm,"--ig-icon-sm-plus":Ft.smPlus,"--ig-icon-md":Ft.md,"--ig-icon-lg":Ft.lg,"--ig-icon-xl":Ft.xl,"--ig-icon-2xl":Ft["2xl"],"--ig-icon-3xl":Ft["3xl"],"--ig-svg-stroke-bold":String(_2.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":Tl["1px"],"--ig-border-1_5px":Tl["1_5px"],"--ig-border-2px":Tl["2px"],"--ig-border-3px":Tl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Kd.press),"--ig-scale-drag":String(Kd.drag),"--ig-scale-hover-lift":String(Kd.hoverLift),"--ig-aspect-landscape":q2.landscape,"--ig-control-height-xs":et.xs,"--ig-control-height-xs-plus":et.xsPlus,"--ig-control-height-sm":et.sm,"--ig-control-height-sm-plus":et.smPlus,"--ig-control-height-md":et.md,"--ig-control-height-mid-plus":et.midPlus,"--ig-control-height-mid-plus-tall":et.midPlusTall,"--ig-control-height-2xl-wide":et["2xlWide"],"--ig-control-height-lg":et.lg,"--ig-control-height-xl":et.xl,"--ig-control-height-2xl":et["2xl"],"--ig-control-height-3xl":et["3xl"],"--ig-control-height-3xl-plus":et["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":De.fastest,"--ig-motion-swift":De.swift,"--ig-motion-fast":De.fast,"--ig-motion-fast-ease":De.fastEase,"--ig-motion-normal":De.normal,"--ig-motion-normal-ease":De.normalEase,"--ig-motion-mobile-nav":De.mobileNav,"--ig-motion-spinner":De.spinner,"--ig-motion-spinner-fast":De.spinnerFast,"--ig-motion-spinner-slow":De.spinnerSlow,"--ig-motion-progress-bar":De.progressBar,"--ig-motion-sync-spin":De.syncSpin,"--ig-motion-shimmer":De.shimmer,"--ig-motion-skeleton":De.skeleton};function Jd(e="dark"){return{...sL,...lL(e==="light"?V2:Ma,e==="light"?sc:lc,e==="light"?yv:bv,e==="light")}}var CP=Jd("dark");function Qd(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function uL(){let e=Jd("dark"),t=Jd("light");return[Qd(":root",nL),Qd(":root, :root[data-theme='dark']",e),Qd(":root[data-theme='light']",t)].join(`
`)+`
`}var kP=Ch`
  ${uL()}

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
    background: ${lc.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${sc.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function ur(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function El(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var dL=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${ur(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${ur(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${El(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${El(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function cL({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Rv.jsx)(dL,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var fL=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>ur(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function ec({gap:e,align:t,justify:a,as:r,...o}){return(0,Ev.jsx)(fL,{as:r,$gap:e,$align:t,$justify:a,...o})}var RP=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>ur(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var EP=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>ur(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${El(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var $P=l.div`
  width: 100%;
  max-width: ${e=>El(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>ur(e.$padding)??"var(--ig-space-11)"};
`;var pL={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},gL={default:void 0,mono:"var(--ig-font-mono)"},mL={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},cv={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function hL(e){return typeof e=="string"?mL[e]:e??"var(--ig-font-weight-regular)"}function vL(e){if(e)return e in cv?cv[e]:e}var xL=l.span`
  margin: 0;
  color: ${e=>pL[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&gL[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Mv({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,$v.jsx)(xL,{as:e,$tone:t,$size:a,$weight:hL(r),$align:o,$uppercase:i,$letterSpacing:vL(n),$fontFamily:s,$tabularNums:u,...d})}var AP=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function yL(e){return(0,zv.jsx)(Mv,{size:"var(--ig-font-size-sm)",...e})}var BP=l.div`
  ${e=>e.$elevation==="raised"?be:e.$elevation==="card"?uc:ea}
  border-radius: ${e=>ur(e.$radius)??"var(--ig-radius-2xl)"};
`;var OP=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,jP=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,NP=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??kt.lg}px`};
  height: ${e=>`${e.$size??kt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var kL={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function Dv(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Fv=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${kL[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?tL:e.$variant==="secondary"?J2:Z2:e.$variant==="ghost"?eL:e.$variant==="secondary"?Lv:e.$variant==="accent"?Q2:K2}
`,fo=Bv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},v){let x="Button",y=d??(u&&u!==x?u:void 0);return(0,Ov.jsxs)(Fv,{ref:v,$variant:Dv(t,a),$size:r,$tone:o,...p,"data-ig-component":x,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),pe=jv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",v=s??(n&&n!==p?n:void 0);return(0,Nv.jsx)(Fv,{ref:d,type:"button",$variant:Dv(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":v,children:i})}),UP=l(pe).attrs({variant:"secondary",size:"sm"})`
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
`,PL={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},TL={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},RL=l.button`
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
  font-size: ${e=>PL[e.$size]};
  color: ${e=>TL[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,fr=(0,_v.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Hv.jsxs)(RL,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),VP=l(pe).attrs({variant:"secondary",size:"sm"})`
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
`,GP=l.span`
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
`;var EL={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},qv=l.input`
  ${cr}
  ${e=>EL[e.$size]}
`,za=(0,dc.forwardRef)(({size:e="md",...t},a)=>(0,cc.jsx)(qv,{ref:a,$size:e,...t}));za.displayName="TextField";var YP=l.textarea`
  ${cr}
`,$L=(0,dc.forwardRef)(({size:e="md",...t},a)=>(0,cc.jsx)(qv,{ref:a,$size:e,type:"password",...t}));$L.displayName="PasswordField";var ML={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},zL=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>ML[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,QP=(0,Wv.forwardRef)(function({variant:t="default",minHeight:a=H2.midPlusTall,...r},o){return(0,Vv.jsx)(zL,{ref:o,$variant:t,$minHeight:a,...r})}),AL=l.input.attrs({type:"color"})`
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
`,JP=(0,Gv.forwardRef)(function(t,a){return(0,Xv.jsx)(AL,{ref:a,...t})}),DL={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},BL=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>DL[e.$orientation]}
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
`,tT=(0,Yv.forwardRef)(function({orientation:t="vertical",...a},r){return(0,Kv.jsx)(BL,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),FL={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},OL=l.div`
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
  ${e=>FL[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${Ml.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,rT=(0,Qv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,Zv.jsx)(OL,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),nT=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var lT=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,sT=l.input`
  ${cr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,uT=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,dT=l.button`
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
`;var fT=l.div`
  position: relative;
`,pT=l.button`
  ${cr}
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
`,gT=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,mT=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Zd.half})`:`rotate(${Zd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,hT=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,vT=l.button`
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
`,xT=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,bT=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,yT=l.select`
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
`;var LT=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,ST=l.input`
  ${cr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,CT=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,IT=l.button`
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
`;var PT=l.div`
  position: relative;
  width: 100%;
`,TT=l.textarea`
  ${cr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,RT=l.div`
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
`,ET=l.button`
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
`,$T=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,MT=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var fc=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,GL=l.span`
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
`,pc=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,XL=l.span`
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
`,YL=l.span`
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
`,AT=nr.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",v=s??(i&&i!==p?i:void 0),x=nr.default.useRef(null);nr.default.useImperativeHandle(d,()=>x.current),nr.default.useEffect(()=>{x.current&&(x.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,Be.jsxs)(fc,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":v,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,Be.jsx)(pc,{ref:x,type:"checkbox",checked:a,disabled:r,...u}),(0,Be.jsx)(XL,{$checked:!!y,$disabled:r,children:o?(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),DT=nr.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),v=typeof t=="string"?t:void 0;return(0,Be.jsxs)(fc,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??v,children:[(0,Be.jsx)(pc,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Be.jsx)(YL,{$checked:!!a,$disabled:r}),t]})}),BT=nr.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Be.jsxs)(fc,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Be.jsx)(pc,{ref:s,type:"checkbox",checked:t,...n}),(0,Be.jsx)(GL,{$checked:t}),a]})});var OT=l.input`
  display: none;
`,JL={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},jT={...JL,cursor:"pointer"};var _T=l.button`
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
`;var UT=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,qT=l.button`
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
`;var VT=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Fe.sm} {
    grid-template-columns: 1fr;
  }
`,GT=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,XT=l.div`
  min-width: 0;
`,YT=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var KT=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,QT=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var JT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,e4=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var tS={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},aS=l.div`
  ${be}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>tS[e.$variant]}
`,r4=(0,dx.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,cx.jsx)(aS,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var o4={minWidth:$i.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},i4=l.button`
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
`;var l4=l.button`
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
`;var fv={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},px=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>fv[e.$size??"sm"]};
  height: ${e=>fv[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,d4=l.label`
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
`;var f4=l.button`
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
`;var iS={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},nS={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},lS=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":nS[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>iS[e.$size]}
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
`,m4=(0,mx.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,hx.jsxs)(lS,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var h4=l.button`
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
`,v4=l.div`
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
`;var sS={bottom:L`
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
  `},b4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>sS[e.$placement]}
`,y4=l.div`
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
`,uS={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},w4=l.button`
  flex-shrink: 0;
  ${e=>uS[e.$size]}
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
`,L4=l.span`
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
`;var C4=l.button`
  ${cr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,I4=l.span`
  color: var(--ig-color-text-soft);
`,k4=l.div`
  ${Cv}
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

  ${Iv}
`;var cS=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,R4=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,fS=l.div`
  ${be}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Lx=(0,yx.forwardRef)(({anchor:e,style:t,...a},r)=>(0,wx.jsx)(fS,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Lx.displayName="MenuPopover";var E4=l.div`
  ${be}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,$4=l(cS)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,z4=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,A4=l.span`
  ${({$tone:e,tone:t})=>{let a=W2[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,D4=l(Lx)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var B4=l.div`
  ${Cv}
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

  ${Iv}
`;var O4=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,j4=l.button`
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
`;var gS={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},Ai=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>gS[e.$tone??"neutral"]};
`,H4=l(Ai)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,q4=l.p`
  ${Pv}
  ${Tv}
  margin: 0;
`,V4=l.div`
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
`;var hS=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,vS=l.span`
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
`;function Cx({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,Dl.jsxs)(hS,{className:o,style:i,children:[e,!a&&t!=null?(0,Dl.jsx)(vS,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var tc=20,Ix=120,bS=Ix*Math.PI/180,yS=tc/Math.sin(bS),wS=Dt`
  from { background-position: 0 0; }
  to   { background-position: ${yS.toFixed(3)}px 0; }
`,LS=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${Ix}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${tc/2}px,
      var(--ig-color-white-06) ${tc}px
    );
    animation: ${wS} var(--ig-motion-shimmer) linear infinite;
  }
`,SS=Dt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,CS={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},Y4=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,K4=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>CS[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${SS} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&LS}
`;var Z4={display:"flex",width:"100%",height:kt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},J4=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var IS=L`
  background:
    linear-gradient(
      ${Ml.horizontal},
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
`,tR=l.div.attrs({"aria-hidden":!0})`
  ${IS}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,kS=l.div`
  ${({$tone:e="info"})=>L`
    background: ${uo[e].background};
    border-color: ${uo[e].border};
    color: ${uo[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,rR=l(kS)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,TS=Dt`
  to { transform: rotate(${Zd.full}); }
`,iR={sm:kt.sm,md:kt.lg,lg:kt["3xl"]};var nR=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${TS} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var RS=Dt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,ES=Dt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,sR=l.div`
  ${({$tone:e})=>L`
    background: ${uo[e].background};
    border-color: ${uo[e].border};
    color: ${uo[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?ES:RS} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,uR=l.span`
  flex: 1;
`,dR=l.button`
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
`,cR=l.button`
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
`,fR=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,pR=(0,pr.createContext)(()=>{});var mR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,hR=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,$S=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,vR=l($S)``,xR=l.div`
  flex: 1;
`,bR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var wR=l.div`
  ${Tv}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,LR=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,SR=l.div`
  ${Pv}
`,CR=l.div`
  ${iL}
  max-width: var(--ig-popup-md);
`,IR=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var PR=l.div`
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
`,TR=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,RR=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,ER=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var MR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,zR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,AR=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,DR=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var FR=l.span`
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
`;var AS={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},DS=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>AS[e.$variant]}
`,jR=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,BS=Dt`from { opacity: 0 } to { opacity: 1 }`,NR=l(DS)`
  animation: ${BS} var(--ig-motion-fast);
`;var HR=l.div`
  ${be}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var Rl=l.span`
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
`,qR=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,WR=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${Rl}:hover &,
          ${Rl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${Rl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${Rl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var OS={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},GR=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>OS[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,Dx=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,YR=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:Dx}
`,KR=l.div`
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
`,QR=l.button`
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
`;var ZR=l.div`
  ${Dx}
`,Bx={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},e8=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Bx[e.$radius].root};
`,t8=l.div`
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
`,a8=l.button`
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
  border-radius: ${e=>Bx[e.$radius].item};
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
`,r8=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,o8=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,i8=l.span`
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
`;var l8=l.header`
  display: none;
  ${Fe.md} {
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
`;var s8=l.div`
  display: none;
  ${Fe.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,u8=l.aside`
  display: none;
  ${Fe.md} {
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
`;var d8=l.button`
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
`;var c8=l.button`
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
`;var f8={marginLeft:"auto",minWidth:kt.xl,height:kt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var g8=l.div`
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
`,m8=l.button`
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
`;var US=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Ux=l.div`
  ${be}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,v8=l(Ux)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,qS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,WS=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,VS=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,x8=l.aside`
  ${be}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,GS=l(pe)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function XS({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,ac.jsx)(GS,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,ac.jsx)(ve,{size:kt.md})})}var YS='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',KS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,QS={margin:0,lineHeight:"var(--ig-line-height-loose)"};function ZS({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,dr.useId)(),u=(0,dr.useRef)(null);return(0,dr.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,dr.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let v=u.current;if(!v)return;let x=Array.from(v.querySelectorAll(YS)).filter(w=>w.offsetParent!==null);if(x.length===0){p.preventDefault(),v.focus();return}let y=x[0],b=x[x.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,Re.jsx)(US,{onClick:()=>o?.(),children:(0,Re.jsxs)(Ux,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,Re.jsxs)(qS,{children:[(0,Re.jsx)(WS,{id:s,children:e}),o?(0,Re.jsx)(XS,{onClick:()=>o()}):null]}),(0,Re.jsxs)(KS,{children:[t?(0,Re.jsx)(yL,{as:"p",tone:"muted",style:QS,children:t}):null,a,r?(0,Re.jsx)(VS,{children:r}):null]})]})})}function JS({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,Re.jsx)(ZS,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,Re.jsxs)(Re.Fragment,{children:[(0,Re.jsx)(fo,{type:"button",variant:"secondary",onClick:i,children:r}),(0,Re.jsx)(fo,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var S8=l.div`
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
`,C8=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,I8=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,k8=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,P8=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var R8=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,E8=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${be}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,$8=l.div`
  position: relative;
  display: block;
  width: 100%;
`,M8=l.button`
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
`,z8=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${be}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,A8=l.button`
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
`;var D8={minWidth:$i.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var F8=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var j8=l.div`
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
`,N8=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var _8={display:"inline-flex",alignItems:"center",justifyContent:"center",width:kt.md,height:kt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var oC=l.div`
  ${be}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,iC=(0,Xx.forwardRef)(({anchor:e,width:t=$i.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,Yx.jsx)(oC,{ref:o,$width:t,style:{...i,...a},...r})});iC.displayName="FilterPopover";var q8=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,W8=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,V8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var G8={minWidth:$i.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var Zx=(0,tt.createContext)(null);function mo(){let e=(0,tt.useContext)(Zx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function Jx({children:e}){let[t,a]=(0,tt.useState)(null),r=(0,tt.useRef)(null);r.current=t;let o=(0,tt.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,tt.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,tt.useMemo)(()=>o,[o]);return(0,Bl.jsxs)(Zx.Provider,{value:n,children:[e,t?(0,Bl.jsx)(JS,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var Y8=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,K8=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,uC=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,dC=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,Q8=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,Z8=l(uC)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,J8=l(dC)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,eE=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,tE=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,cC=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,fC=L`
  transition: transform var(--ig-motion-normal);
`,aE=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&cC}
  ${e=>e.$isAnimating&&fC}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,rE=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var iE=l.section`
  ${ea}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,nE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,pC=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,sE=t0.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,a0.jsx)(pC,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),gC=l.div`
  ${ea}
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
`,dE=r0.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,o0.jsx)(gC,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),fE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var gE=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var mC={panel:ea,card:uc,raised:be},hC=l.div`
  ${e=>mC[e.$elevation]}
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
`;function s0({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,l0.jsx)(hC,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var vC=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,xC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,bC=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,yC=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,wC=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,LC=l.textarea`
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
`,SC=l.div`
  display: flex;
  justify-content: flex-end;
`,CC=l.button`
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
`;function u0({author:e,timestamp:t,body:a,actions:r}){return(0,Pt.jsxs)(vC,{children:[(0,Pt.jsxs)(xC,{children:[(0,Pt.jsx)(bC,{children:e}),t&&(0,Pt.jsx)("span",{children:t}),r]}),(0,Pt.jsx)(yC,{children:a})]})}function ho({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,Pt.jsxs)(wC,{children:[(0,Pt.jsx)(LC,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,Pt.jsx)(SC,{children:(0,Pt.jsx)(CC,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var IC=l.button`
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
`,kC=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,PC=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,TC=(0,d0.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,co.jsxs)(IC,{ref:n,type:o??"button",$active:a,...i,children:[(0,co.jsx)(px,{$color:e,$size:"sm"}),(0,co.jsx)(kC,{children:t}),r!=null&&(0,co.jsx)(PC,{children:r})]}));TC.displayName="TagListItem";var bE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var wE=l.div`
  position: relative;
  width: 100%;
`,LE=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,SE=l.div`
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
`,CE=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,IE=l.button`
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
`;var PE=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,TE=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,RE=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,EE=(0,gr.createContext)(null);var ME=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,zE=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,AE=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var $C=l.button`
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
`,MC=(0,p0.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,jl.jsxs)($C,{ref:o,type:a??"button",...r,children:[e&&(0,jl.jsx)(px,{$color:e,$size:"xs"}),t]}));MC.displayName="ActionChip";var FE=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,OE=l.kbd`
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
`;var NE=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,_E=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,HE=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var qE=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var VE=l.li`
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
`;var XE=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var DC=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,BC=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,FC=l.button`
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

  ${e=>e.$variant==="flat"?DC:BC}

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
`,OC=(0,x0.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,b0.jsx)(FC,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});OC.displayName="SelectableListItem";var jC={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},NC={flexShrink:0},_C={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},HC=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function w0({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,lr.jsxs)(ec,{as:"aside",gap:0,className:o,style:jC,children:[(0,lr.jsx)(cL,{style:NC,children:e}),t?(0,lr.jsxs)(ec,{gap:3,style:_C,children:[(0,lr.jsx)(Mv,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,lr.jsx)(HC,{children:i},n):null)]})}var ZE=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var e$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${Ml.diagonal},
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
`;var r$=l.button`
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
`,o$=l.div`
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
`;var n$=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${Ml.diagonal},
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
`;var s$=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var d$=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var VC=l.button`
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
`,GC=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,XC=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,YC=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,KC=(0,P0.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,sr.jsxs)(VC,{ref:i,type:r??"button",...o,children:[(0,sr.jsxs)(GC,{children:[(0,sr.jsx)("span",{children:e}),t!=null&&(0,sr.jsx)(XC,{children:t})]}),(0,sr.jsx)(YC,{children:a})]}));KC.displayName="OptionRow";var p$=l.span`
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
`,m$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var v$=l.table`
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
`,x$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var y$=l.table`
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
`;var L$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,S$=l.div`
  ${ea}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,C$=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,I$=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var k$={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},T$=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var E$=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var M$=l.div`
  ${aL}
  height: 100%;
  min-height: 0;
`,z$=l.header`
  ${rL}
  flex-shrink: 0;

  ${Fe.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,A$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,D$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,B$=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Fe.md} {
    font-size: var(--ig-font-size-xl);
  }
`,F$=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,O$=l.div`
  ${oL}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Fe.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,tI=l.section`
  ${ea}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,j$=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,N$=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,_$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,H$=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,aI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,U$=l(aI)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Fe.md} {
    grid-template-columns: 1fr;
  }
`,q$=l(tI)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,W$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,V$=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,G$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,Y$=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`;var K$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,Q$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,Z$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,J$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,tM=l.nav`
  ${ea}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,aM=l.aside`
  ${ea}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,rM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,oM=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,iM=l.div`
  ${kv}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,nM=l.aside`
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
`,sM=l.aside`
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
  ${Fe.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,D0=l.div`
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
`,uM=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${D0}:hover & { opacity: 0; }
  `}
`,dM=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${D0}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,cM=l.button`
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
`,fM=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,pM=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,B0=`
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
`,gM=l.a`
  ${B0}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,mM=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,hM=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,vM=l.button`
  ${B0}
`,xM=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,bM=l.span`
  display: contents;
`;var wM=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Fe.md} {
    justify-content: flex-start;
  }
`,LM=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,SM=l.div`
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
  ${Fe.md} {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
    border: 0;
  }
`,CM=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,IM=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,kM=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,PM=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,TM=$i.md;var iI=11;var nI=3,RM=iI+nI*2;var $M=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,MM=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,zM=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,AM=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,DM=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var jM=l.div`
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
`,NM=l.span`
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
`;var _M=l.div`
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
`,HM=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,UM=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,qM=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,WM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,VM=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,GM=l(za).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,XM=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,YM=l(za).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,KM=l.input`
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
`,QM=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var ZM=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,JM=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,ez=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,tz=l.button`
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
`,az=l(za).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,rz=l(fo).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var iz=l.section`
  ${be}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,nz=l.h3`
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
`,lz=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var uz=l.label`
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
`,dz=l.div`
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
`;var fz=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var gz=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var hz=l.div`
  ${uc}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,vz=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function Q0({children:e,className:t}){return(0,K0.jsx)(ec,{gap:3,className:t,children:e})}var bz=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var wz=new URL("./assets/favicon.ico","http://localhost/").href,Lz=new URL("./assets/favicon.png","http://localhost/").href,Sz=new URL("./assets/brand-mark.png","http://localhost/").href,Cz=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var Iz=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function gI(){try{if(typeof mv<"u"&&mv.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var pv=(...e)=>{},gv=gI(),kz={debug:gv?console.debug.bind(console):pv,log:gv?console.log.bind(console):pv,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var Tz=U2.canvasExportBg;var ta=c(C(),1);function ab(e){let[,t]=(0,ta.useReducer)(a=>a+1,0);(0,ta.useEffect)(()=>e.subscribe(t),[e])}function vo(e){let[t,a]=(0,ta.useState)(null);return(0,ta.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function rb(){let[,e]=(0,ta.useReducer)(t=>t+1,0);(0,ta.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Aa=c(C(),1);var ib=c(m(),1),mI=500,hI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,_l=e=>e instanceof Element&&e.id!==eo&&e!==document.documentElement&&e!==document.body;function ob({active:e,onPick:t}){let[a,r]=(0,Aa.useState)(null),o=vo(a),i=(0,Aa.useRef)({x:-1,y:-1}),n=(0,Aa.useRef)(e);return n.current=e,(0,Aa.useEffect)(()=>{e||r(null)},[e]),(0,Aa.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!_l(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(_l(b)?b:null)})},p=b=>{!n.current||!_l(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},v,x=()=>clearTimeout(v),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:M}=b.touches[0];v=setTimeout(()=>{let g=document.elementFromPoint(w,M);_l(g)&&t(g,w,M)},mI)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",x,{passive:!0}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x),()=>{cancelAnimationFrame(u),x(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}},[t]),o?(0,ib.jsx)(hI,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var nb=c(m(),1),vI=l.div`
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
`;function _c({el:e}){let t=vo(e);return t?(0,nb.jsx)(vI,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var lb=c(C(),1);var T={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteCommentAria:"Delete comment",editCommentAria:"Edit comment",save:"Save",deleteThreadTitle:"Delete this comment thread?",deleteCommentTitle:"Delete this comment?",deleteLastCommentHint:"This is the last comment \u2014 the thread will be deleted.",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareDisabledHint:"Nothing to compare for this thread",before:"Before",after:"After",current:"current",captureFailed:"Could not capture the current view",beforeServerDownTitle:"Compare is not available right now",beforeServerDownHint:"The previous version of the site is not running. Please ask the site owner to start it, then try again.",ok:"OK",versionChipTitle:"Set as compare baseline (Before)",defaultAuthor:"Guest"};var mr=c(m(),1),Hl="#f59e0b",xI=l.button`
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
`,bI=l.div`
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
`;function sb({store:e,onPinClick:t}){rb();let[a,r]=(0,lb.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ea(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),v=Math.max(16,d.top+4),x=`${Math.round(p/8)}:${Math.round(v/8)}`,y=o.get(x)??0;o.set(x,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,mr.jsx)(xI,{className:"fbw-pin",type:"button",title:ki(n),style:{left:w,top:v},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${T.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,mr.jsxs)(mr.Fragment,{children:[i,a&&(0,mr.jsx)(bI,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var Hc=c(C(),1);var yI=800,wI=.8;async function Ul(e){try{if(!document.createElement("canvas").getContext("2d"))return;let t=await dv(e,{pixelRatio:1});if(t.width===0||t.height===0)return;let a=Math.min(1,yI/t.width),r=document.createElement("canvas");r.width=Math.round(t.width*a),r.height=Math.round(t.height*a);let o=r.getContext("2d");return o?(o.fillStyle="#ffffff",o.fillRect(0,0,r.width,r.height),o.drawImage(t,0,0,r.width,r.height),r.toDataURL("image/jpeg",wI)):void 0}catch{return}}var xo=c(C(),1);var ub=c(m(),1),LI=340,SI=l.div`
  position: fixed;
  width: ${LI}px;
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
`;function ql({targetEl:e,point:t,children:a}){let r=(0,xo.useRef)(null),o=vo(e??null),[i,n]=(0,xo.useState)(null);return(0,xo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),v=o.bottom+8,x=v+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):v;d={left:p,top:x}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,ub.jsx)(SI,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var Wl=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Vl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var jt=c(m(),1),CI=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function db({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,Hc.useState)(""),[u,d]=(0,Hc.useState)(e.author),p=async()=>{let v=n.trim();if(!v)return;let x=u.trim()||T.defaultAuthor;e.author=x;let y=new Date().toISOString(),b=await Ul(t),w={id:rr(),createdAt:y,anchor:a,resolved:!1,comments:[{id:rr(),author:x,body:v,createdAt:y,version:Ze.version}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`},beforeShot:b};e.addThread(w),i(w)};return(0,jt.jsxs)(ql,{targetEl:t,point:r,children:[(0,jt.jsxs)(Wl,{className:"fbw-composer",children:[(0,jt.jsx)(Vl,{children:T.composerTitle}),(0,jt.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.close,onClick:o,children:(0,jt.jsx)(ve,{size:16})})]}),(0,jt.jsxs)(CI,{children:[T.composerTarget,": ",a.textSnippet||a.selector]}),(0,jt.jsx)(za,{size:"sm",placeholder:T.namePlaceholder,"aria-label":T.nameAria,value:u,onChange:v=>d(v.target.value)}),(0,jt.jsx)(ho,{value:n,onChange:s,onSubmit:p,placeholder:T.composerPlaceholder,submitLabel:T.post})]})}var bo=c(C(),1);var at=c(m(),1),II=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-surface-panel);
`,kI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,cb=l.span`
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
`,PI=l.div`
  flex: 1;
  display: flex;
  gap: 2px;
  background: var(--ig-color-border-subtle);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,fb=l.iframe`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`,pb=(e,t)=>`${e}${t}?fbw=embed`;async function gb(){if(typeof fetch!="function")return!0;try{let e=new AbortController,t=setTimeout(()=>e.abort(),1500);return await fetch(`${Ze.compareBase}/`,{mode:"no-cors",signal:e.signal}),clearTimeout(t),!0}catch{return!1}}function mb({beforeVersion:e,anchor:t,onClose:a}){let r=o=>{o.currentTarget.contentWindow?.postMessage({type:"fbw:jump",anchor:t},"*")};return(0,at.jsxs)(II,{className:"fbw-compare",children:[(0,at.jsxs)(kI,{children:[(0,at.jsxs)(cb,{children:[T.before," ",(0,at.jsx)("code",{children:e})]}),(0,at.jsxs)(cb,{children:[T.after," ",(0,at.jsx)("code",{children:Ze.version??T.current})]}),(0,at.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.close,onClick:a,children:(0,at.jsx)(ve,{size:16})})]}),(0,at.jsxs)(PI,{children:[(0,at.jsx)(fb,{className:"fbw-compare-before",title:T.before,src:pb(Ze.compareBase,t.page),onLoad:r}),(0,at.jsx)(fb,{className:"fbw-compare-after",title:T.after,src:pb(location.origin,t.page),onLoad:r})]})]})}var Ee=c(m(),1),TI=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 50%, transparent);
`,RI=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  max-width: min(1100px, 92vw);
  max-height: 88vh;
  overflow: auto;
  padding: var(--ig-space-5);
  background: var(--ig-color-surface-panel);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-overlay);
`,EI=l.div`
  display: flex;
  align-items: center;
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`,$I=l.div`
  display: flex;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,hb=l.figure`
  flex: 1;
  min-width: 0;
  margin: 0;

  figcaption {
    margin-bottom: var(--ig-space-2);
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    color: var(--ig-color-text-muted);
    text-transform: uppercase;
  }

  img {
    display: block;
    width: 100%;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-sm);
  }
`,MI=l.div`
  padding: var(--ig-space-6);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`;function vb({before:e,after:t,onClose:a}){return(0,Ee.jsx)(TI,{className:"fbw-area-compare",onClick:a,children:(0,Ee.jsxs)(RI,{onClick:r=>r.stopPropagation(),children:[(0,Ee.jsxs)(EI,{children:[(0,Ee.jsxs)("span",{children:[T.before," / ",T.after]}),(0,Ee.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.close,onClick:a,children:(0,Ee.jsx)(ve,{size:16})})]}),(0,Ee.jsxs)($I,{children:[(0,Ee.jsxs)(hb,{children:[(0,Ee.jsx)("figcaption",{children:T.before}),(0,Ee.jsx)("img",{className:"fbw-shot-before",src:e,alt:T.before})]}),(0,Ee.jsxs)(hb,{children:[(0,Ee.jsx)("figcaption",{children:T.after}),t?(0,Ee.jsx)("img",{className:"fbw-shot-after",src:t,alt:T.after}):(0,Ee.jsx)(MI,{children:T.captureFailed})]})]})]})})}var Uc=c(C(),1);var bb=c(m(),1),zI=l.button`
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
`;function xb({version:e,changed:t,active:a,onSelect:r}){return(0,bb.jsx)(zI,{type:"button",className:"fbw-verchip",title:T.versionChipTitle,$changed:t,$active:a,onClick:()=>r(e),children:e})}var rt=c(m(),1),AI=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`,DI=l.div`
  display: flex;
  justify-content: flex-start;
`,BI=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function yb({store:e,thread:t,comment:a,prevVersion:r,baseline:o,onSelectBaseline:i}){let n=mo(),[s,u]=(0,Uc.useState)(!1),[d,p]=(0,Uc.useState)(a.body),v=()=>{let y=d.trim();y&&(e.updateComment(t.id,a.id,y),u(!1))},x=async()=>{let y=t.comments.length===1;await n({title:T.deleteCommentTitle,description:y?T.deleteLastCommentHint:a.body,confirmLabel:T.delete,cancelLabel:T.cancel,danger:!0})&&e.removeComment(t.id,a.id)};return s?(0,rt.jsxs)("div",{children:[(0,rt.jsx)(ho,{value:d,onChange:p,onSubmit:v,submitLabel:T.save}),(0,rt.jsx)(DI,{children:(0,rt.jsx)(fr,{tone:"muted",onClick:()=>{u(!1),p(a.body)},children:T.cancel})})]}):(0,rt.jsx)(u0,{author:a.author,timestamp:BI(a.createdAt),body:a.body,actions:(0,rt.jsxs)(AI,{children:[a.version&&(0,rt.jsx)(xb,{version:a.version,changed:r!==void 0&&a.version!==r,active:a.version===o,onSelect:i}),(0,rt.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.editCommentAria,onClick:()=>u(!0),children:(0,rt.jsx)(ao,{size:14})}),(0,rt.jsx)(pe,{variant:"ghost",size:"sm",tone:"danger","aria-label":T.deleteCommentAria,onClick:x,children:(0,rt.jsx)($a,{size:14})})]})})}var de=c(m(),1),FI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;function wb({store:e,thread:t,number:a,onClose:r}){let o=mo(),[i,n]=(0,bo.useState)(""),[s,u]=(0,bo.useState)(e.author),[d,p]=(0,bo.useState)(t.comments[0]?.version),[v,x]=(0,bo.useState)(!1),[y,b]=(0,bo.useState)(null),w=t.anchor.page===location.pathname?Ea(t.anchor):null,M=!!t.beforeShot,g=async()=>{if(t.beforeShot){let h=w?await Ul(w):void 0;b({before:t.beforeShot,after:h});return}if(d){if(await gb()){x(!0);return}await o({title:T.beforeServerDownTitle,description:T.beforeServerDownHint,confirmLabel:T.ok,cancelLabel:T.close})}},f=()=>{let h=i.trim();if(!h)return;let S=s.trim()||T.defaultAuthor;e.author=S,e.addComment(t.id,S,h,Ze.version),n("")};return(0,de.jsxs)(ql,{targetEl:w,children:[(0,de.jsxs)(Wl,{className:"fbw-thread",children:[(0,de.jsxs)(Vl,{children:[T.thread," ",a]}),t.resolved&&(0,de.jsx)(Ai,{$tone:"success",children:T.archivedBadge}),(0,de.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.close,onClick:r,children:(0,de.jsx)(ve,{size:16})})]}),(0,de.jsx)(Q0,{children:t.comments.map((h,S)=>(0,de.jsx)(yb,{store:e,thread:t,comment:h,prevVersion:S>0?t.comments[S-1].version:void 0,baseline:d,onSelectBaseline:p},h.id))}),!e.author&&(0,de.jsx)(za,{size:"sm",placeholder:T.namePlaceholder,"aria-label":T.nameAria,value:s,onChange:h=>u(h.target.value)}),(0,de.jsx)(ho,{value:i,onChange:n,onSubmit:f,placeholder:T.replyPlaceholder,submitLabel:T.reply}),(0,de.jsxs)(FI,{children:[(0,de.jsx)(fr,{tone:t.resolved?"muted":"accent",iconLeading:(0,de.jsx)(to,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?T.unarchive:T.archive}),(0,de.jsx)(fr,{tone:"accent",iconLeading:(0,de.jsx)(or,{size:14}),disabled:!M&&!d,title:M||d?void 0:T.compareDisabledHint,onClick:g,children:T.compare})]}),y&&(0,de.jsx)(vb,{before:y.before,after:y.after,onClose:()=>b(null)}),v&&d&&(0,de.jsx)(mb,{beforeVersion:d,anchor:t.anchor,onClose:()=>x(!1)})]})}var qc=c(C(),1);function Lb(e,t){let a=t.map(({beforeShot:r,...o})=>o);return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:a},null,2)}function Sb(e,t){let a=new Blob([Lb(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function Cb(e,t){try{return await navigator.clipboard.writeText(Lb(e,t)),!0}catch{return!1}}var pt=c(m(),1),jI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,NI=l.span`
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
`,_I=l.span`
  margin-left: auto;
`,HI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,UI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function Ib({store:e,thread:t,number:a,onSelect:r}){let o=mo(),i=async s=>{s.stopPropagation(),await o({title:T.deleteThreadTitle,description:ki(t),confirmLabel:T.delete,cancelLabel:T.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,pt.jsxs)(s0,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,pt.jsxs)(jI,{children:[(0,pt.jsx)(NI,{children:a}),(0,pt.jsx)("span",{children:Ph(t)}),t.resolved&&(0,pt.jsx)(Ai,{$tone:"success",children:T.archivedBadge}),(0,pt.jsx)(_I,{}),(0,pt.jsx)(pe,{variant:"ghost",size:"sm",tone:"danger","aria-label":T.deleteThreadAria,onClick:i,children:(0,pt.jsx)($a,{size:14})})]}),(0,pt.jsx)(HI,{children:ki(t)}),(0,pt.jsxs)(UI,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${T.replies}`]})]})}var oe=c(m(),1),qI=320,WI=l.button`
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
`,VI=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${qI}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,GI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,XI=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,YI=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function kb({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,qc.useState)(null),[n,s]=(0,qc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),v=w=>u.findIndex(M=>M.id===w.id)+1,x=w=>{if(!Pi(w.anchor)){Ah(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await Cb(e.project,e.exportList())?T.copied:T.copyFailed),setTimeout(()=>i(null),1500)},b=w=>w.map(M=>(0,oe.jsx)(Ib,{store:e,thread:M,number:v(M),onSelect:x},M.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(WI,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[T.tab," ",u.length]}),(0,oe.jsx)(VI,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(w0,{headerSlot:(0,oe.jsxs)(GI,{children:[(0,oe.jsxs)("span",{children:[T.listTitle," (",u.length,")"]}),(0,oe.jsx)(pe,{variant:"ghost",size:"sm","aria-label":T.close,onClick:()=>a(!1),children:(0,oe.jsx)(ve,{size:16})})]}),bodySectionTitle:T.openSection,bodySlot:d.length===0?(0,oe.jsxs)(XI,{children:[T.emptyLine1,(0,oe.jsx)("br",{}),T.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(fr,{tone:"muted",onClick:()=>s(w=>!w),children:n?T.hideArchived(p.length):T.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(YI,{children:[(0,oe.jsx)(fo,{variant:"secondary",size:"sm",onClick:y,children:o??T.copy}),(0,oe.jsx)(fo,{variant:"solid",size:"sm",onClick:()=>Sb(e.project,e.exportList()),children:T.downloadJson})]})]})})]})}var aa=c(m(),1),Pb=l.button`
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
`,KI=l.span`
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

  ${Pb}:hover + & {
    opacity: 1;
  }
`,QI=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function Tb({store:e}){let t=e.list().length;return(0,aa.jsxs)(aa.Fragment,{children:[(0,aa.jsxs)(Pb,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?T.toggleOff:T.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,aa.jsx)(QI,{children:(0,aa.jsx)(Cx,{children:t})})]}),(0,aa.jsx)(KI,{children:e.enabled?T.toggleHintOn:T.toggleOn})]})}var Tt=c(m(),1);function Rb({store:e}){ab(e);let[t,a]=(0,Di.useState)(null),[r,o]=(0,Di.useState)(!1),i=e.enabled;(0,Di.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ea(n.anchor):null;return(0,Tt.jsxs)(Jx,{children:[i&&(0,Tt.jsx)(ob,{active:!t,onPick:(d,p,v)=>{let x=e.list().find(y=>!y.resolved&&y.anchor.page===location.pathname&&Ea(y.anchor)===d);if(x){a({kind:"thread",id:x.id});return}a({kind:"draft",el:d,anchor:zh(d),point:{x:p,y:v}})}}),i&&(0,Tt.jsx)(sb,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,Tt.jsx)(_c,{el:t.el}),u&&(0,Tt.jsx)(_c,{el:u}),t?.kind==="draft"&&(0,Tt.jsx)(db,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,Tt.jsx)(wb,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,Tt.jsx)(kb,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,Tt.jsx)(Tb,{store:e})]})}var Wc=c(m(),1),ZI=2147483e3;function JI(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var ek=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function Eb(){if(Ze.embed){Bh();return}if(document.getElementById(eo))return;let e=document.createElement("div");e.id=eo,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${ZI};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=JI(kh)+ek;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new wl(Ze.project);(0,$b.createRoot)(o).render((0,Wc.jsx)(Lh,{target:r,children:(0,Wc.jsx)(Rb,{store:i})})),Ze.seedUrl&&typeof fetch=="function"&&fetch(Ze.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),Dh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Eb):Eb();})();
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
