"use strict";(()=>{var Pb=Object.create;var Gc=Object.defineProperty;var Tb=Object.getOwnPropertyDescriptor;var Rb=Object.getOwnPropertyNames;var Eb=Object.getPrototypeOf,$b=Object.prototype.hasOwnProperty;var Ft=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var zb=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Rb(t))!$b.call(e,o)&&o!==a&&Gc(e,o,{get:()=>t[o],enumerable:!(r=Tb(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?Pb(Eb(e)):{},zb(t||!e||!e.__esModule?Gc(a,"default",{value:e,enumerable:!0}):a,e));var nf=Ft(B=>{"use strict";var xo=Symbol.for("react.element"),Mb=Symbol.for("react.portal"),Ab=Symbol.for("react.fragment"),Db=Symbol.for("react.strict_mode"),Bb=Symbol.for("react.profiler"),Fb=Symbol.for("react.provider"),Ob=Symbol.for("react.context"),jb=Symbol.for("react.forward_ref"),_b=Symbol.for("react.suspense"),Nb=Symbol.for("react.memo"),Hb=Symbol.for("react.lazy"),Xc=Symbol.iterator;function Ub(e){return e===null||typeof e!="object"?null:(e=Xc&&e[Xc]||e["@@iterator"],typeof e=="function"?e:null)}var Qc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zc=Object.assign,Jc={};function mr(e,t,a){this.props=e,this.context=t,this.refs=Jc,this.updater=a||Qc}mr.prototype.isReactComponent={};mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ef(){}ef.prototype=mr.prototype;function Xl(e,t,a){this.props=e,this.context=t,this.refs=Jc,this.updater=a||Qc}var Yl=Xl.prototype=new ef;Yl.constructor=Xl;Zc(Yl,mr.prototype);Yl.isPureReactComponent=!0;var Yc=Array.isArray,tf=Object.prototype.hasOwnProperty,Kl={current:null},af={key:!0,ref:!0,__self:!0,__source:!0};function rf(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)tf.call(t,r)&&!af.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:xo,type:e,key:i,ref:n,props:o,_owner:Kl.current}}function qb(e,t){return{$$typeof:xo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===xo}function Wb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Kc=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wb(""+e.key):t.toString(36)}function Di(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case xo:case Mb:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+Gl(n,0):r,Yc(o)?(a="",e!=null&&(a=e.replace(Kc,"$&/")+"/"),Di(o,t,a,"",function(d){return d})):o!=null&&(Ql(o)&&(o=qb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(Kc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",Yc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Gl(i,s);n+=Di(i,t,a,u,o)}else if(u=Ub(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Gl(i,s++),n+=Di(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Ai(e,t,a){if(e==null)return e;var r=[],o=0;return Di(e,r,"","",function(i){return t.call(a,i,o++)}),r}function Vb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Bi={transition:null},Gb={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Kl};function of(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ai,forEach:function(e,t,a){Ai(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=mr;B.Fragment=Ab;B.Profiler=Bb;B.PureComponent=Xl;B.StrictMode=Db;B.Suspense=_b;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gb;B.act=of;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Zc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Kl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)tf.call(t,u)&&!af.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:xo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:Ob,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fb,_context:e},e.Consumer=e};B.createElement=rf;B.createFactory=function(e){var t=rf.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:jb,render:e}};B.isValidElement=Ql;B.lazy=function(e){return{$$typeof:Hb,_payload:{_status:-1,_result:e},_init:Vb}};B.memo=function(e,t){return{$$typeof:Nb,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};B.unstable_act=of;B.useCallback=function(e,t){return Ee.current.useCallback(e,t)};B.useContext=function(e){return Ee.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ee.current.useEffect(e,t)};B.useId=function(){return Ee.current.useId()};B.useImperativeHandle=function(e,t,a){return Ee.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ee.current.useMemo(e,t)};B.useReducer=function(e,t,a){return Ee.current.useReducer(e,t,a)};B.useRef=function(e){return Ee.current.useRef(e)};B.useState=function(e){return Ee.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return Ee.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return Ee.current.useTransition()};B.version="18.3.1"});var C=Ft((QI,lf)=>{"use strict";lf.exports=nf()});var vf=Ft(q=>{"use strict";function ts(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<Fi(o,t))e[r]=t,e[a]=o,a=r;else break e}}function pt(e){return e.length===0?null:e[0]}function ji(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>Fi(s,a))u<o&&0>Fi(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>Fi(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function Fi(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(sf=performance,q.unstable_now=function(){return sf.now()}):(Zl=Date,uf=Zl.now(),q.unstable_now=function(){return Zl.now()-uf});var sf,Zl,uf,Pt=[],ra=[],Xb=1,at=null,we=3,_i=!1,Fa=!1,yo=!1,ff=typeof setTimeout=="function"?setTimeout:null,pf=typeof clearTimeout=="function"?clearTimeout:null,df=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function as(e){for(var t=pt(ra);t!==null;){if(t.callback===null)ji(ra);else if(t.startTime<=e)ji(ra),t.sortIndex=t.expirationTime,ts(Pt,t);else break;t=pt(ra)}}function rs(e){if(yo=!1,as(e),!Fa)if(pt(Pt)!==null)Fa=!0,is(os);else{var t=pt(ra);t!==null&&ns(rs,t.startTime-e)}}function os(e,t){Fa=!1,yo&&(yo=!1,pf(wo),wo=-1),_i=!0;var a=we;try{for(as(t),at=pt(Pt);at!==null&&(!(at.expirationTime>t)||e&&!hf());){var r=at.callback;if(typeof r=="function"){at.callback=null,we=at.priorityLevel;var o=r(at.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?at.callback=o:at===pt(Pt)&&ji(Pt),as(t)}else ji(Pt);at=pt(Pt)}if(at!==null)var i=!0;else{var n=pt(ra);n!==null&&ns(rs,n.startTime-t),i=!1}return i}finally{at=null,we=a,_i=!1}}var Ni=!1,Oi=null,wo=-1,gf=5,mf=-1;function hf(){return!(q.unstable_now()-mf<gf)}function Jl(){if(Oi!==null){var e=q.unstable_now();mf=e;var t=!0;try{t=Oi(!0,e)}finally{t?bo():(Ni=!1,Oi=null)}}else Ni=!1}var bo;typeof df=="function"?bo=function(){df(Jl)}:typeof MessageChannel<"u"?(es=new MessageChannel,cf=es.port2,es.port1.onmessage=Jl,bo=function(){cf.postMessage(null)}):bo=function(){ff(Jl,0)};var es,cf;function is(e){Oi=e,Ni||(Ni=!0,bo())}function ns(e,t){wo=ff(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Fa||_i||(Fa=!0,is(os))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gf=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return we};q.unstable_getFirstCallbackNode=function(){return pt(Pt)};q.unstable_next=function(e){switch(we){case 1:case 2:case 3:var t=3;break;default:t=we}var a=we;we=t;try{return e()}finally{we=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=we;we=e;try{return t()}finally{we=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:Xb++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,ts(ra,e),pt(Pt)===null&&e===pt(ra)&&(yo?(pf(wo),wo=-1):yo=!0,ns(rs,a-r))):(e.sortIndex=o,ts(Pt,e),Fa||_i||(Fa=!0,is(os))),e};q.unstable_shouldYield=hf;q.unstable_wrapCallback=function(e){var t=we;return function(){var a=we;we=t;try{return e.apply(this,arguments)}finally{we=a}}}});var bf=Ft((JI,xf)=>{"use strict";xf.exports=vf()});var Sm=Ft(Ze=>{"use strict";var Yb=C(),Ke=bf();function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var kp=new Set,Uo={};function Ka(e,t){Br(e,t),Br(e+"Capture",t)}function Br(e,t){for(Uo[e]=t,e=0;e<t.length;e++)kp.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,Kb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},wf={};function Qb(e){return Rs.call(wf,e)?!0:Rs.call(yf,e)?!1:Kb.test(e)?wf[e]=!0:(yf[e]=!0,!1)}function Zb(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jb(e,t,a,r){if(t===null||typeof t>"u"||Zb(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wu,Lu);he[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wu,Lu);he[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wu,Lu);he[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,t,a,r){var o=he.hasOwnProperty(t)?he[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jb(t,a,o,r)&&(a=null),r||o===null?Qb(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Gt=Yb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),xr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),Pp=Symbol.for("react.provider"),Tp=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),zs=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),ia=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Rp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Lf=Symbol.iterator;function Lo(e){return e===null||typeof e!="object"?null:(e=Lf&&e[Lf]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ls;function Eo(e){if(ls===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ls=t&&t[1]||""}return`
`+ls+e}var ss=!1;function us(e,t){if(!e||ss)return"";ss=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{ss=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?Eo(e):""}function ey(e){switch(e.tag){case 5:return Eo(e.type);case 16:return Eo("Lazy");case 13:return Eo("Suspense");case 19:return Eo("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function Ms(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case xr:return"Portal";case Es:return"Profiler";case Cu:return"StrictMode";case $s:return"Suspense";case zs:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tp:return(e.displayName||"Context")+".Consumer";case Pp:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:Ms(e.type)||"Memo";case ia:t=e._payload,e=e._init;try{return Ms(e(t))}catch{}}return null}function ty(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ms(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ba(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ay(e){var t=Ep(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=ay(e))}function $p(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=Ep(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function Sf(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=ba(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function zp(e,t){t=t.checked,t!=null&&Su(e,"checked",t,!1)}function Ds(e,t){zp(e,t);var a=ba(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,a):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,ba(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cf(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Bs(e,t,a){(t!=="number"||xn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var $o=Array.isArray;function Er(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ba(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function If(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(I(92));if($o(a)){if(1<a.length)throw Error(I(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:ba(a)}}function Mp(e,t){var a=ba(t.value),r=ba(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function kf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ap(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ap(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,Dp=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qo(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Ao={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ry=["Webkit","ms","Moz","O"];Object.keys(Ao).forEach(function(e){ry.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ao[t]=Ao[e]})});function Bp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Ao.hasOwnProperty(e)&&Ao[e]?(""+t).trim():t+"px"}function Fp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=Bp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var oy=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(oy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,$r=null,zr=null;function Pf(e){if(e=si(e)){if(typeof Hs!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Vn(t),Hs(e.stateNode,e.type,t))}}function Op(e){$r?zr?zr.push(e):zr=[e]:$r=e}function jp(){if($r){var e=$r,t=zr;if(zr=$r=null,Pf(e),t)for(e=0;e<t.length;e++)Pf(t[e])}}function _p(e,t){return e(t)}function Np(){}var ds=!1;function Hp(e,t,a){if(ds)return e(t,a);ds=!0;try{return _p(e,t,a)}finally{ds=!1,($r!==null||zr!==null)&&(Np(),jp())}}function Wo(e,t){var a=e.stateNode;if(a===null)return null;var r=Vn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(I(231,t,typeof a));return a}var Us=!1;if(Ut)try{hr={},Object.defineProperty(hr,"passive",{get:function(){Us=!0}}),window.addEventListener("test",hr,hr),window.removeEventListener("test",hr,hr)}catch{Us=!1}var hr;function iy(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var Do=!1,bn=null,yn=!1,qs=null,ny={onError:function(e){Do=!0,bn=e}};function ly(e,t,a,r,o,i,n,s,u){Do=!1,bn=null,iy.apply(ny,arguments)}function sy(e,t,a,r,o,i,n,s,u){if(ly.apply(this,arguments),Do){if(Do){var d=bn;Do=!1,bn=null}else throw Error(I(198));yn||(yn=!0,qs=d)}}function Qa(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Up(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tf(e){if(Qa(e)!==e)throw Error(I(188))}function uy(e){var t=e.alternate;if(!t){if(t=Qa(e),t===null)throw Error(I(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return Tf(o),e;if(i===r)return Tf(o),t;i=i.sibling}throw Error(I(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(I(189))}}if(a.alternate!==r)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?e:t}function qp(e){return e=uy(e),e!==null?Wp(e):null}function Wp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wp(e);if(t!==null)return t;e=e.sibling}return null}var Vp=Ke.unstable_scheduleCallback,Rf=Ke.unstable_cancelCallback,dy=Ke.unstable_shouldYield,cy=Ke.unstable_requestPaint,re=Ke.unstable_now,fy=Ke.unstable_getCurrentPriorityLevel,Tu=Ke.unstable_ImmediatePriority,Gp=Ke.unstable_UserBlockingPriority,wn=Ke.unstable_NormalPriority,py=Ke.unstable_LowPriority,Xp=Ke.unstable_IdlePriority,Hn=null,$t=null;function gy(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Hn,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:vy,my=Math.log,hy=Math.LN2;function vy(e){return e>>>=0,e===0?32:31-(my(e)/hy|0)|0}var Wi=64,Vi=4194304;function zo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ln(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=zo(s):(i&=n,i!==0&&(r=zo(i)))}else n=a&~o,n!==0?r=zo(n):i!==0&&(r=zo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-xt(t),o=1<<a,r|=e[a],t&=~o;return r}function xy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function by(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-xt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=xy(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yp(){var e=Wi;return Wi<<=1,(Wi&4194240)===0&&(Wi=64),e}function cs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function ni(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=a}function yy(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-xt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function Ru(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-xt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var _=0;function Kp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Qp,Eu,Zp,Jp,eg,Vs=!1,Gi=[],ca=null,fa=null,pa=null,Vo=new Map,Go=new Map,la=[],wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ef(e,t){switch(e){case"focusin":case"focusout":ca=null;break;case"dragenter":case"dragleave":fa=null;break;case"mouseover":case"mouseout":pa=null;break;case"pointerover":case"pointerout":Vo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(t.pointerId)}}function So(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=si(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Ly(e,t,a,r,o){switch(t){case"focusin":return ca=So(ca,e,t,a,r,o),!0;case"dragenter":return fa=So(fa,e,t,a,r,o),!0;case"mouseover":return pa=So(pa,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Vo.set(i,So(Vo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Go.set(i,So(Go.get(i)||null,e,t,a,r,o)),!0}return!1}function tg(e){var t=_a(e.target);if(t!==null){var a=Qa(t);if(a!==null){if(t=a.tag,t===13){if(t=Up(a),t!==null){e.blockedOn=t,eg(e.priority,function(){Zp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ns=r,a.target.dispatchEvent(r),Ns=null}else return t=si(a),t!==null&&Eu(t),e.blockedOn=a,!1;t.shift()}return!0}function $f(e,t,a){sn(e)&&a.delete(t)}function Sy(){Vs=!1,ca!==null&&sn(ca)&&(ca=null),fa!==null&&sn(fa)&&(fa=null),pa!==null&&sn(pa)&&(pa=null),Vo.forEach($f),Go.forEach($f)}function Co(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Sy)))}function Xo(e){function t(o){return Co(o,e)}if(0<Gi.length){Co(Gi[0],e);for(var a=1;a<Gi.length;a++){var r=Gi[a];r.blockedOn===e&&(r.blockedOn=null)}}for(ca!==null&&Co(ca,e),fa!==null&&Co(fa,e),pa!==null&&Co(pa,e),Vo.forEach(t),Go.forEach(t),a=0;a<la.length;a++)r=la[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<la.length&&(a=la[0],a.blockedOn===null);)tg(a),a.blockedOn===null&&la.shift()}var Mr=Gt.ReactCurrentBatchConfig,Sn=!0;function Cy(e,t,a,r){var o=_,i=Mr.transition;Mr.transition=null;try{_=1,$u(e,t,a,r)}finally{_=o,Mr.transition=i}}function Iy(e,t,a,r){var o=_,i=Mr.transition;Mr.transition=null;try{_=4,$u(e,t,a,r)}finally{_=o,Mr.transition=i}}function $u(e,t,a,r){if(Sn){var o=Gs(e,t,a,r);if(o===null)xs(e,t,r,Cn,a),Ef(e,r);else if(Ly(o,e,t,a,r))r.stopPropagation();else if(Ef(e,r),t&4&&-1<wy.indexOf(e)){for(;o!==null;){var i=si(o);if(i!==null&&Qp(i),i=Gs(e,t,a,r),i===null&&xs(e,t,r,Cn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else xs(e,t,r,null,a)}}var Cn=null;function Gs(e,t,a,r){if(Cn=null,e=Pu(r),e=_a(e),e!==null)if(t=Qa(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Up(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cn=e,null}function ag(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fy()){case Tu:return 1;case Gp:return 4;case wn:case py:return 16;case Xp:return 536870912;default:return 16}default:return 16}}var ua=null,zu=null,un=null;function rg(){if(un)return un;var e,t=zu,a=t.length,r,o="value"in ua?ua.value:ua.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return un=o.slice(e,1<r?1-r:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function zf(){return!1}function Qe(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:zf,this.isPropagationStopped=zf,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var Ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mu=Qe(Ur),li=Q({},Ur,{view:0,detail:0}),ky=Qe(li),fs,ps,Io,Un=Q({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Io&&(Io&&e.type==="mousemove"?(fs=e.screenX-Io.screenX,ps=e.screenY-Io.screenY):ps=fs=0,Io=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),Mf=Qe(Un),Py=Q({},Un,{dataTransfer:0}),Ty=Qe(Py),Ry=Q({},li,{relatedTarget:0}),gs=Qe(Ry),Ey=Q({},Ur,{animationName:0,elapsedTime:0,pseudoElement:0}),$y=Qe(Ey),zy=Q({},Ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),My=Qe(zy),Ay=Q({},Ur,{data:0}),Af=Qe(Ay),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fy[e])?!!t[e]:!1}function Au(){return Oy}var jy=Q({},li,{key:function(e){if(e.key){var t=Dy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?By[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_y=Qe(jy),Ny=Q({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Df=Qe(Ny),Hy=Q({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Uy=Qe(Hy),qy=Q({},Ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wy=Qe(qy),Vy=Q({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Gy=Qe(Vy),Xy=[9,13,27,32],Du=Ut&&"CompositionEvent"in window,Bo=null;Ut&&"documentMode"in document&&(Bo=document.documentMode);var Yy=Ut&&"TextEvent"in window&&!Bo,og=Ut&&(!Du||Bo&&8<Bo&&11>=Bo),Bf=" ",Ff=!1;function ig(e,t){switch(e){case"keyup":return Xy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ng(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var yr=!1;function Ky(e,t){switch(e){case"compositionend":return ng(t);case"keypress":return t.which!==32?null:(Ff=!0,Bf);case"textInput":return e=t.data,e===Bf&&Ff?null:e;default:return null}}function Qy(e,t){if(yr)return e==="compositionend"||!Du&&ig(e,t)?(e=rg(),un=zu=ua=null,yr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return og&&t.locale!=="ko"?null:t.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Zy[e.type]:t==="textarea"}function lg(e,t,a,r){Op(r),t=In(t,"onChange"),0<t.length&&(a=new Mu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Fo=null,Yo=null;function Jy(e){xg(e,0)}function qn(e){var t=Sr(e);if($p(t))return e}function e1(e,t){if(e==="change")return t}var sg=!1;Ut&&(Ut?(Ki="oninput"in document,Ki||(ms=document.createElement("div"),ms.setAttribute("oninput","return;"),Ki=typeof ms.oninput=="function"),Yi=Ki):Yi=!1,sg=Yi&&(!document.documentMode||9<document.documentMode));var Yi,Ki,ms;function jf(){Fo&&(Fo.detachEvent("onpropertychange",ug),Yo=Fo=null)}function ug(e){if(e.propertyName==="value"&&qn(Yo)){var t=[];lg(t,Yo,e,Pu(e)),Hp(Jy,t)}}function t1(e,t,a){e==="focusin"?(jf(),Fo=t,Yo=a,Fo.attachEvent("onpropertychange",ug)):e==="focusout"&&jf()}function a1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Yo)}function r1(e,t){if(e==="click")return qn(t)}function o1(e,t){if(e==="input"||e==="change")return qn(t)}function i1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:i1;function Ko(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Rs.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nf(e,t){var a=_f(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_f(a)}}function dg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function cg(){for(var e=window,t=xn();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xn(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function n1(e){var t=cg(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&dg(a.ownerDocument.documentElement,a)){if(r!==null&&Bu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Nf(a,i);var n=Nf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var l1=Ut&&"documentMode"in document&&11>=document.documentMode,wr=null,Xs=null,Oo=null,Ys=!1;function Hf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ys||wr==null||wr!==xn(r)||(r=wr,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Oo&&Ko(Oo,r)||(Oo=r,r=In(Xs,"onSelect"),0<r.length&&(t=new Mu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=wr)))}function Qi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Lr={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},hs={},fg={};Ut&&(fg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Wn(e){if(hs[e])return hs[e];if(!Lr[e])return e;var t=Lr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fg)return hs[e]=t[a];return e}var pg=Wn("animationend"),gg=Wn("animationiteration"),mg=Wn("animationstart"),hg=Wn("transitionend"),vg=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wa(e,t){vg.set(e,t),Ka(t,[e])}for(Zi=0;Zi<Uf.length;Zi++)Ji=Uf[Zi],qf=Ji.toLowerCase(),Wf=Ji[0].toUpperCase()+Ji.slice(1),wa(qf,"on"+Wf);var Ji,qf,Wf,Zi;wa(pg,"onAnimationEnd");wa(gg,"onAnimationIteration");wa(mg,"onAnimationStart");wa("dblclick","onDoubleClick");wa("focusin","onFocus");wa("focusout","onBlur");wa(hg,"onTransitionEnd");Br("onMouseEnter",["mouseout","mouseover"]);Br("onMouseLeave",["mouseout","mouseover"]);Br("onPointerEnter",["pointerout","pointerover"]);Br("onPointerLeave",["pointerout","pointerover"]);Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),s1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mo));function Vf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,sy(r,t,void 0,e),e.currentTarget=null}function xg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Vf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Vf(o,s,d),i=u}}}if(yn)throw e=qs,yn=!1,qs=null,e}function V(e,t){var a=t[eu];a===void 0&&(a=t[eu]=new Set);var r=e+"__bubble";a.has(r)||(bg(t,e,2,!1),a.add(r))}function vs(e,t,a){var r=0;t&&(r|=4),bg(a,e,r,t)}var en="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[en]){e[en]=!0,kp.forEach(function(a){a!=="selectionchange"&&(s1.has(a)||vs(a,!1,e),vs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[en]||(t[en]=!0,vs("selectionchange",!1,t))}}function bg(e,t,a,r){switch(ag(t)){case 1:var o=Cy;break;case 4:o=Iy;break;default:o=$u}a=o.bind(null,t,a,e),o=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function xs(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=_a(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}Hp(function(){var d=i,p=Pu(a),h=[];e:{var v=vg.get(e);if(v!==void 0){var y=Mu,b=e;switch(e){case"keypress":if(dn(a)===0)break e;case"keydown":case"keyup":y=_y;break;case"focusin":b="focus",y=gs;break;case"focusout":b="blur",y=gs;break;case"beforeblur":case"afterblur":y=gs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ty;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Uy;break;case pg:case gg:case mg:y=$y;break;case hg:y=Wy;break;case"scroll":y=ky;break;case"wheel":y=Gy;break;case"copy":case"cut":case"paste":y=My;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Df}var w=(t&4)!==0,z=!w&&e==="scroll",g=w?v!==null?v+"Capture":null:v;w=[];for(var f=d,x;f!==null;){x=f;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=Wo(f,g),S!=null&&w.push(Zo(f,S,x)))),z)break;f=f.return}0<w.length&&(v=new y(v,b,null,a,p),h.push({event:v,listeners:w}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&a!==Ns&&(b=a.relatedTarget||a.fromElement)&&(_a(b)||b[qt]))break e;if((y||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?_a(b):null,b!==null&&(z=Qa(b),b!==z||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=Mf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=Df,S="onPointerLeave",g="onPointerEnter",f="pointer"),z=y==null?v:Sr(y),x=b==null?v:Sr(b),v=new w(S,f+"leave",y,a,p),v.target=z,v.relatedTarget=x,S=null,_a(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=x,w.relatedTarget=z,S=w),z=S,y&&b)t:{for(w=y,g=b,f=0,x=w;x;x=vr(x))f++;for(x=0,S=g;S;S=vr(S))x++;for(;0<f-x;)w=vr(w),f--;for(;0<x-f;)g=vr(g),x--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=vr(w),g=vr(g)}w=null}else w=null;y!==null&&Gf(h,v,y,w,!1),b!==null&&z!==null&&Gf(h,z,b,w,!0)}}e:{if(v=d?Sr(d):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var P=e1;else if(Of(v))if(sg)P=o1;else{P=a1;var E=t1}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=r1);if(P&&(P=P(e,d))){lg(h,P,a,p);break e}E&&E(e,v,d),e==="focusout"&&(E=v._wrapperState)&&E.controlled&&v.type==="number"&&Bs(v,"number",v.value)}switch(E=d?Sr(d):window,e){case"focusin":(Of(E)||E.contentEditable==="true")&&(wr=E,Xs=d,Oo=null);break;case"focusout":Oo=Xs=wr=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,Hf(h,a,p);break;case"selectionchange":if(l1)break;case"keydown":case"keyup":Hf(h,a,p)}var k;if(Du)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else yr?ig(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(og&&a.locale!=="ko"&&(yr||T!=="onCompositionStart"?T==="onCompositionEnd"&&yr&&(k=rg()):(ua=p,zu="value"in ua?ua.value:ua.textContent,yr=!0)),E=In(d,T),0<E.length&&(T=new Af(T,e,null,a,p),h.push({event:T,listeners:E}),k?T.data=k:(k=ng(a),k!==null&&(T.data=k)))),(k=Yy?Ky(e,a):Qy(e,a))&&(d=In(d,"onBeforeInput"),0<d.length&&(p=new Af("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}xg(h,t)})}function Zo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function In(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Wo(e,a),i!=null&&r.unshift(Zo(e,i,o)),i=Wo(e,t),i!=null&&r.push(Zo(e,i,o))),e=e.return}return r}function vr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Wo(a,i),u!=null&&n.unshift(Zo(a,u,s))):o||(u=Wo(a,i),u!=null&&n.push(Zo(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var u1=/\r\n?/g,d1=/\u0000|\uFFFD/g;function Xf(e){return(typeof e=="string"?e:""+e).replace(u1,`
`).replace(d1,"")}function tn(e,t,a){if(t=Xf(t),Xf(e)!==t&&a)throw Error(I(425))}function kn(){}var Ks=null,Qs=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(e){return Yf.resolve(null).then(e).catch(p1)}:Js;function p1(e){setTimeout(function(){throw e})}function bs(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Xo(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Xo(t)}function ga(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Et="__reactFiber$"+qr,Jo="__reactProps$"+qr,qt="__reactContainer$"+qr,eu="__reactEvents$"+qr,g1="__reactListeners$"+qr,m1="__reactHandles$"+qr;function _a(e){var t=e[Et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[qt]||a[Et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Kf(e);e!==null;){if(a=e[Et])return a;e=Kf(e)}return t}e=a,a=e.parentNode}return null}function si(e){return e=e[Et]||e[qt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Vn(e){return e[Jo]||null}var tu=[],Cr=-1;function La(e){return{current:e}}function G(e){0>Cr||(e.current=tu[Cr],tu[Cr]=null,Cr--)}function W(e,t){Cr++,tu[Cr]=e.current,e.current=t}var ya={},Ie=La(ya),Ue=La(!1),Wa=ya;function Fr(e,t){var a=e.type.contextTypes;if(!a)return ya;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function qe(e){return e=e.childContextTypes,e!=null}function Pn(){G(Ue),G(Ie)}function Qf(e,t,a){if(Ie.current!==ya)throw Error(I(168));W(Ie,t),W(Ue,a)}function yg(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,ty(e)||"Unknown",o));return Q({},a,r)}function Tn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ya,Wa=Ie.current,W(Ie,e),W(Ue,Ue.current),!0}function Zf(e,t,a){var r=e.stateNode;if(!r)throw Error(I(169));a?(e=yg(e,t,Wa),r.__reactInternalMemoizedMergedChildContext=e,G(Ue),G(Ie),W(Ie,e)):G(Ue),W(Ue,a)}var jt=null,Gn=!1,ys=!1;function wg(e){jt===null?jt=[e]:jt.push(e)}function h1(e){Gn=!0,wg(e)}function Sa(){if(!ys&&jt!==null){ys=!0;var e=0,t=_;try{var a=jt;for(_=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}jt=null,Gn=!1}catch(o){throw jt!==null&&(jt=jt.slice(e+1)),Vp(Tu,Sa),o}finally{_=t,ys=!1}}return null}var Ir=[],kr=0,Rn=null,En=0,rt=[],ot=0,Va=null,_t=1,Nt="";function Oa(e,t){Ir[kr++]=En,Ir[kr++]=Rn,Rn=e,En=t}function Lg(e,t,a){rt[ot++]=_t,rt[ot++]=Nt,rt[ot++]=Va,Va=e;var r=_t;e=Nt;var o=32-xt(r)-1;r&=~(1<<o),a+=1;var i=32-xt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,_t=1<<32-xt(t)+o|a<<o|r,Nt=i+e}else _t=1<<i|a<<o|r,Nt=e}function Fu(e){e.return!==null&&(Oa(e,1),Lg(e,1,0))}function Ou(e){for(;e===Rn;)Rn=Ir[--kr],Ir[kr]=null,En=Ir[--kr],Ir[kr]=null;for(;e===Va;)Va=rt[--ot],rt[ot]=null,Nt=rt[--ot],rt[ot]=null,_t=rt[--ot],rt[ot]=null}var Ye=null,Xe=null,X=!1,vt=null;function Sg(e,t){var a=it(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Jf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=ga(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Va!==null?{id:_t,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=it(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ye=e,Xe=null,!0):!1;default:return!1}}function au(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(X){var t=Xe;if(t){var a=t;if(!Jf(e,t)){if(au(e))throw Error(I(418));t=ga(a.nextSibling);var r=Ye;t&&Jf(e,t)?Sg(r,a):(e.flags=e.flags&-4097|2,X=!1,Ye=e)}}else{if(au(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,Ye=e}}}function ep(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function an(e){if(e!==Ye)return!1;if(!X)return ep(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=Xe)){if(au(e))throw Cg(),Error(I(418));for(;t;)Sg(e,t),t=ga(t.nextSibling)}if(ep(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Xe=ga(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ye?ga(e.stateNode.nextSibling):null;return!0}function Cg(){for(var e=Xe;e;)e=ga(e.nextSibling)}function Or(){Xe=Ye=null,X=!1}function ju(e){vt===null?vt=[e]:vt.push(e)}var v1=Gt.ReactCurrentBatchConfig;function ko(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(I(309));var r=a.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!a._owner)throw Error(I(290,e))}return e}function rn(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tp(e){var t=e._init;return t(e._payload)}function Ig(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=xa(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,x,S){return f===null||f.tag!==6?(f=Ps(x,g.mode,S),f.return=g,f):(f=o(f,x),f.return=g,f)}function u(g,f,x,S){var P=x.type;return P===br?p(g,f,x.props.children,S,x.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ia&&tp(P)===f.type)?(S=o(f,x.props),S.ref=ko(g,f,x),S.return=g,S):(S=vn(x.type,x.key,x.props,null,g.mode,S),S.ref=ko(g,f,x),S.return=g,S)}function d(g,f,x,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Ts(x,g.mode,S),f.return=g,f):(f=o(f,x.children||[]),f.return=g,f)}function p(g,f,x,S,P){return f===null||f.tag!==7?(f=qa(x,g.mode,S,P),f.return=g,f):(f=o(f,x),f.return=g,f)}function h(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ps(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hi:return x=vn(f.type,f.key,f.props,null,g.mode,x),x.ref=ko(g,null,f),x.return=g,x;case xr:return f=Ts(f,g.mode,x),f.return=g,f;case ia:var S=f._init;return h(g,S(f._payload),x)}if($o(f)||Lo(f))return f=qa(f,g.mode,x,null),f.return=g,f;rn(g,f)}return null}function v(g,f,x,S){var P=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:s(g,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hi:return x.key===P?u(g,f,x,S):null;case xr:return x.key===P?d(g,f,x,S):null;case ia:return P=x._init,v(g,f,P(x._payload),S)}if($o(x)||Lo(x))return P!==null?null:p(g,f,x,S,null);rn(g,x)}return null}function y(g,f,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hi:return g=g.get(S.key===null?x:S.key)||null,u(f,g,S,P);case xr:return g=g.get(S.key===null?x:S.key)||null,d(f,g,S,P);case ia:var E=S._init;return y(g,f,x,E(S._payload),P)}if($o(S)||Lo(S))return g=g.get(x)||null,p(f,g,S,P,null);rn(f,S)}return null}function b(g,f,x,S){for(var P=null,E=null,k=f,T=f=0,U=null;k!==null&&T<x.length;T++){k.index>T?(U=k,k=null):U=k.sibling;var A=v(g,k,x[T],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,T),E===null?P=A:E.sibling=A,E=A,k=U}if(T===x.length)return a(g,k),X&&Oa(g,T),P;if(k===null){for(;T<x.length;T++)k=h(g,x[T],S),k!==null&&(f=i(k,f,T),E===null?P=k:E.sibling=k,E=k);return X&&Oa(g,T),P}for(k=r(g,k);T<x.length;T++)U=y(k,g,T,x[T],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?T:U.key),f=i(U,f,T),E===null?P=U:E.sibling=U,E=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&Oa(g,T),P}function w(g,f,x,S){var P=Lo(x);if(typeof P!="function")throw Error(I(150));if(x=P.call(x),x==null)throw Error(I(151));for(var E=P=null,k=f,T=f=0,U=null,A=x.next();k!==null&&!A.done;T++,A=x.next()){k.index>T?(U=k,k=null):U=k.sibling;var ae=v(g,k,A.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,T),E===null?P=ae:E.sibling=ae,E=ae,k=U}if(A.done)return a(g,k),X&&Oa(g,T),P;if(k===null){for(;!A.done;T++,A=x.next())A=h(g,A.value,S),A!==null&&(f=i(A,f,T),E===null?P=A:E.sibling=A,E=A);return X&&Oa(g,T),P}for(k=r(g,k);!A.done;T++,A=x.next())A=y(k,g,T,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=i(A,f,T),E===null?P=A:E.sibling=A,E=A);return e&&k.forEach(function(Da){return t(g,Da)}),X&&Oa(g,T),P}function z(g,f,x,S){if(typeof x=="object"&&x!==null&&x.type===br&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Hi:e:{for(var P=x.key,E=f;E!==null;){if(E.key===P){if(P=x.type,P===br){if(E.tag===7){a(g,E.sibling),f=o(E,x.props.children),f.return=g,g=f;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ia&&tp(P)===E.type){a(g,E.sibling),f=o(E,x.props),f.ref=ko(g,E,x),f.return=g,g=f;break e}a(g,E);break}else t(g,E);E=E.sibling}x.type===br?(f=qa(x.props.children,g.mode,S,x.key),f.return=g,g=f):(S=vn(x.type,x.key,x.props,null,g.mode,S),S.ref=ko(g,f,x),S.return=g,g=S)}return n(g);case xr:e:{for(E=x.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(g,f.sibling),f=o(f,x.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=Ts(x,g.mode,S),f.return=g,g=f}return n(g);case ia:return E=x._init,z(g,f,E(x._payload),S)}if($o(x))return b(g,f,x,S);if(Lo(x))return w(g,f,x,S);rn(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,x),f.return=g,g=f):(a(g,f),f=Ps(x,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return z}var jr=Ig(!0),kg=Ig(!1),$n=La(null),zn=null,Pr=null,_u=null;function Nu(){_u=Pr=zn=null}function Hu(e){var t=$n.current;G($n),e._currentValue=t}function ou(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Ar(e,t){zn=e,_u=Pr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(He=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},Pr===null){if(zn===null)throw Error(I(308));Pr=e,zn.dependencies={lanes:0,firstContext:e}}else Pr=Pr.next=e;return t}var Na=null;function Uu(e){Na===null?Na=[e]:Na.push(e)}function Pg(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Uu(t)):(a.next=o.next,o.next=a),t.interleaved=a,Wt(e,r)}function Wt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var na=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ma(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Wt(e,a)}return o=r.interleaved,o===null?(t.next=t,Uu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Wt(e,a)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Ru(e,a)}}function ap(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function Mn(e,t,a,r){var o=e.updateQueue;na=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var v=s.lane,y=s.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(v=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(y,h,v);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,v=typeof b=="function"?b.call(y,h,v):b,v==null)break e;h=Q({},h,v);break e;case 2:na=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else y={eventTime:y,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=h):p=p.next=y,n|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Xa|=n,e.lanes=n,e.memoizedState=h}}function rp(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var ui={},zt=La(ui),ei=La(ui),ti=La(ui);function Ha(e){if(e===ui)throw Error(I(174));return e}function Wu(e,t){switch(W(ti,t),W(ei,e),W(zt,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}G(zt),W(zt,t)}function _r(){G(zt),G(ei),G(ti)}function Rg(e){Ha(ti.current);var t=Ha(zt.current),a=Os(t,e.type);t!==a&&(W(ei,e),W(zt,a))}function Vu(e){ei.current===e&&(G(zt),G(ei))}var Y=La(0);function An(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function Gu(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var fn=Gt.ReactCurrentDispatcher,Ls=Gt.ReactCurrentBatchConfig,Ga=0,K=null,se=null,fe=null,Dn=!1,jo=!1,ai=0,x1=0;function Le(){throw Error(I(321))}function Xu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Yu(e,t,a,r,o,i){if(Ga=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fn.current=e===null||e.memoizedState===null?L1:S1,e=a(r,o),jo){i=0;do{if(jo=!1,ai=0,25<=i)throw Error(I(301));i+=1,fe=se=null,t.updateQueue=null,fn.current=C1,e=a(r,o)}while(jo)}if(fn.current=Bn,t=se!==null&&se.next!==null,Ga=0,fe=se=K=null,Dn=!1,t)throw Error(I(300));return e}function Ku(){var e=ai!==0;return ai=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?K.memoizedState=fe=e:fe=fe.next=e,fe}function st(){if(se===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=fe===null?K.memoizedState:fe.next;if(t!==null)fe=t,se=e;else{if(e===null)throw Error(I(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},fe===null?K.memoizedState=fe=e:fe=fe.next=e}return fe}function ri(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=se,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Ga&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,K.lanes|=p,Xa|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,yt(r,t.memoizedState)||(He=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,Xa|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Cs(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);yt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function Eg(){}function $g(e,t){var a=K,r=st(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,He=!0),r=r.queue,Qu(Ag.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||fe!==null&&fe.memoizedState.tag&1){if(a.flags|=2048,oi(9,Mg.bind(null,a,r,o,t),void 0,null),pe===null)throw Error(I(349));(Ga&30)!==0||zg(a,t,o)}return o}function zg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Mg(e,t,a,r){t.value=a,t.getSnapshot=r,Dg(t)&&Bg(e)}function Ag(e,t,a){return a(function(){Dg(t)&&Bg(e)})}function Dg(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function Bg(e){var t=Wt(e,1);t!==null&&bt(t,e,1,-1)}function op(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ri,lastRenderedState:e},t.queue=e,e=e.dispatch=w1.bind(null,K,e),[t.memoizedState,e]}function oi(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function Fg(){return st().memoizedState}function pn(e,t,a,r){var o=Rt();K.flags|=e,o.memoizedState=oi(1|t,a,void 0,r===void 0?null:r)}function Xn(e,t,a,r){var o=st();r=r===void 0?null:r;var i=void 0;if(se!==null){var n=se.memoizedState;if(i=n.destroy,r!==null&&Xu(r,n.deps)){o.memoizedState=oi(t,a,i,r);return}}K.flags|=e,o.memoizedState=oi(1|t,a,i,r)}function ip(e,t){return pn(8390656,8,e,t)}function Qu(e,t){return Xn(2048,8,e,t)}function Og(e,t){return Xn(4,2,e,t)}function jg(e,t){return Xn(4,4,e,t)}function _g(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ng(e,t,a){return a=a!=null?a.concat([e]):null,Xn(4,4,_g.bind(null,t,e),a)}function Zu(){}function Hg(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Ug(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function qg(e,t,a){return(Ga&21)===0?(e.baseState&&(e.baseState=!1,He=!0),e.memoizedState=a):(yt(a,t)||(a=Yp(),K.lanes|=a,Xa|=a,e.baseState=!0),t)}function b1(e,t){var a=_;_=a!==0&&4>a?a:4,e(!0);var r=Ls.transition;Ls.transition={};try{e(!1),t()}finally{_=a,Ls.transition=r}}function Wg(){return st().memoizedState}function y1(e,t,a){var r=va(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},Vg(e))Gg(t,a);else if(a=Pg(e,t,a,r),a!==null){var o=ze();bt(a,e,r,o),Xg(a,t,r)}}function w1(e,t,a){var r=va(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vg(e))Gg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,yt(s,n)){var u=t.interleaved;u===null?(o.next=o,Uu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=Pg(e,t,o,r),a!==null&&(o=ze(),bt(a,e,r,o),Xg(a,t,r))}}function Vg(e){var t=e.alternate;return e===K||t!==null&&t===K}function Gg(e,t){jo=Dn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Xg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Ru(e,a)}}var Bn={readContext:lt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},L1={readContext:lt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:ip,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,pn(4194308,4,_g.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pn(4194308,4,e,t)},useInsertionEffect:function(e,t){return pn(4,2,e,t)},useMemo:function(e,t){var a=Rt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Rt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:op,useDebugValue:Zu,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=op(!1),t=e[0];return e=b1.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=Rt();if(X){if(a===void 0)throw Error(I(407));a=a()}else{if(a=t(),pe===null)throw Error(I(349));(Ga&30)!==0||zg(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,ip(Ag.bind(null,r,i,e),[e]),r.flags|=2048,oi(9,Mg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Rt(),t=pe.identifierPrefix;if(X){var a=Nt,r=_t;a=(r&~(1<<32-xt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=ai++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=x1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},S1={readContext:lt,useCallback:Hg,useContext:lt,useEffect:Qu,useImperativeHandle:Ng,useInsertionEffect:Og,useLayoutEffect:jg,useMemo:Ug,useReducer:Ss,useRef:Fg,useState:function(){return Ss(ri)},useDebugValue:Zu,useDeferredValue:function(e){var t=st();return qg(t,se.memoizedState,e)},useTransition:function(){var e=Ss(ri)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:$g,useId:Wg,unstable_isNewReconciler:!1},C1={readContext:lt,useCallback:Hg,useContext:lt,useEffect:Qu,useImperativeHandle:Ng,useInsertionEffect:Og,useLayoutEffect:jg,useMemo:Ug,useReducer:Cs,useRef:Fg,useState:function(){return Cs(ri)},useDebugValue:Zu,useDeferredValue:function(e){var t=st();return se===null?t.memoizedState=e:qg(t,se.memoizedState,e)},useTransition:function(){var e=Cs(ri)[0],t=st().memoizedState;return[e,t]},useMutableSource:Eg,useSyncExternalStore:$g,useId:Wg,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function iu(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yn={isMounted:function(e){return(e=e._reactInternals)?Qa(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=ze(),o=va(e),i=Ht(r,o);i.payload=t,a!=null&&(i.callback=a),t=ma(e,i,o),t!==null&&(bt(t,e,o,r),cn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=ze(),o=va(e),i=Ht(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ma(e,i,o),t!==null&&(bt(t,e,o,r),cn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ze(),r=va(e),o=Ht(a,r);o.tag=2,t!=null&&(o.callback=t),t=ma(e,o,r),t!==null&&(bt(t,e,r,a),cn(t,e,r))}};function np(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Ko(a,r)||!Ko(o,i):!0}function Yg(e,t,a){var r=!1,o=ya,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=qe(t)?Wa:Ie.current,r=t.contextTypes,i=(r=r!=null)?Fr(e,o):ya),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function lp(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Yn.enqueueReplaceState(t,t.state,null)}function nu(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},qu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=qe(t)?Wa:Ie.current,o.context=Fr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(iu(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yn.enqueueReplaceState(o,o.state,null),Mn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Nr(e,t){try{var a="",r=t;do a+=ey(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Is(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var I1=typeof WeakMap=="function"?WeakMap:Map;function Kg(e,t,a){a=Ht(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){On||(On=!0,vu=r),lu(e,t)},a}function Qg(e,t,a){a=Ht(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){lu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){lu(e,t),typeof r!="function"&&(ha===null?ha=new Set([this]):ha.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function sp(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new I1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=j1.bind(null,e,t,a),t.then(e,e))}function up(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dp(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Ht(-1,1),t.tag=2,ma(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var k1=Gt.ReactCurrentOwner,He=!1;function $e(e,t,a,r){t.child=e===null?kg(t,null,a,r):jr(t,e.child,a,r)}function cp(e,t,a,r,o){a=a.render;var i=t.ref;return Ar(t,o),r=Yu(e,t,a,r,i,o),a=Ku(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(X&&a&&Fu(t),t.flags|=1,$e(e,t,r,o),t.child)}function fp(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!nd(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Zg(e,t,i,r,o)):(e=vn(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Ko,a(n,r)&&e.ref===t.ref)return Vt(e,t,o)}return t.flags|=1,e=xa(i,r),e.ref=t.ref,e.return=t,t.child=e}function Zg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Ko(i,r)&&e.ref===t.ref)if(He=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Vt(e,t,o)}return su(e,t,a,r,o)}function Jg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Rr,Ge),Ge|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Rr,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W(Rr,Ge),Ge|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W(Rr,Ge),Ge|=r;return $e(e,t,o,a),t.child}function em(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,a,r,o){var i=qe(a)?Wa:Ie.current;return i=Fr(t,i),Ar(t,o),a=Yu(e,t,a,r,i,o),r=Ku(),e!==null&&!He?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Vt(e,t,o)):(X&&r&&Fu(t),t.flags|=1,$e(e,t,a,o),t.child)}function pp(e,t,a,r,o){if(qe(a)){var i=!0;Tn(t)}else i=!1;if(Ar(t,o),t.stateNode===null)gn(e,t),Yg(t,a,r),nu(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=lt(d):(d=qe(a)?Wa:Ie.current,d=Fr(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&lp(t,n,r,d),na=!1;var v=t.memoizedState;n.state=v,Mn(t,r,n,o),u=t.memoizedState,s!==r||v!==u||Ue.current||na?(typeof p=="function"&&(iu(t,a,p,r),u=t.memoizedState),(s=na||np(t,a,s,r,v,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,Tg(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:mt(t.type,s),n.props=d,h=t.pendingProps,v=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=qe(a)?Wa:Ie.current,u=Fr(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||v!==u)&&lp(t,n,r,u),na=!1,v=t.memoizedState,n.state=v,Mn(t,r,n,o);var b=t.memoizedState;s!==h||v!==b||Ue.current||na?(typeof y=="function"&&(iu(t,a,y,r),b=t.memoizedState),(d=na||np(t,a,d,r,v,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return uu(e,t,a,r,i,o)}function uu(e,t,a,r,o,i){em(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Zf(t,a,!1),Vt(e,t,i);r=t.stateNode,k1.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=jr(t,e.child,null,i),t.child=jr(t,null,s,i)):$e(e,t,s,i),t.memoizedState=r.state,o&&Zf(t,a,!0),t.child}function tm(e){var t=e.stateNode;t.pendingContext?Qf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qf(e,t.context,!1),Wu(e,t.containerInfo)}function gp(e,t,a,r,o){return Or(),ju(o),t.flags|=256,$e(e,t,a,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function am(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Zn(n,r,0,null),e=qa(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=cu(a),t.memoizedState=du,e):Ju(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return P1(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=xa(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=xa(s,i):(i=qa(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?cu(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=du,r}return i=e.child,e=i.sibling,r=xa(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function Ju(e,t){return t=Zn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function on(e,t,a,r){return r!==null&&ju(r),jr(t,e.child,null,a),e=Ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function P1(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=Is(Error(I(422))),on(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zn({mode:"visible",children:r.children},o,0,null),i=qa(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&jr(t,e.child,null,n),t.child.memoizedState=cu(n),t.memoizedState=du,i);if((t.mode&1)===0)return on(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Is(i,r,void 0),on(e,t,n,r)}if(s=(n&e.childLanes)!==0,He||s){if(r=pe,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Wt(e,o),bt(r,e,o,-1))}return id(),r=Is(Error(I(421))),on(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=ga(o.nextSibling),Ye=t,X=!0,vt=null,e!==null&&(rt[ot++]=_t,rt[ot++]=Nt,rt[ot++]=Va,_t=e.id,Nt=e.overflow,Va=t),t=Ju(t,r.children),t.flags|=4096,t)}function mp(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,a)}function ks(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function rm(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mp(e,a,t);else if(e.tag===19)mp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&An(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),ks(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&An(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}ks(t,!0,a,null,i);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Xa|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,a=xa(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=xa(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function T1(e,t,a){switch(t.tag){case 3:tm(t),Or();break;case 5:Rg(t);break;case 1:qe(t.type)&&Tn(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W($n,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?am(e,t,a):(W(Y,Y.current&1),e=Vt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return rm(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Jg(e,t,a)}return Vt(e,t,a)}var om,fu,im,nm;om=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};fu=function(){};im=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ha(zt.current);var i=null;switch(a){case"input":o=As(e,o),r=As(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Fs(e,o),r=Fs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kn)}js(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Uo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Uo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};nm=function(e,t,a,r){a!==r&&(t.flags|=4)};function Po(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function R1(e,t,a){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return qe(t.type)&&Pn(),Se(t),null;case 3:return r=t.stateNode,_r(),G(Ue),G(Ie),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(an(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(yu(vt),vt=null))),fu(e,t),Se(t),null;case 5:Vu(t);var o=Ha(ti.current);if(a=t.type,e!==null&&t.stateNode!=null)im(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Se(t),null}if(e=Ha(zt.current),an(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Et]=t,r[Jo]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Mo.length;o++)V(Mo[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":Sf(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":If(r,i),V("invalid",r)}js(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&tn(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&tn(r.textContent,s,e),o=["children",""+s]):Uo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Ui(r),Cf(r,i,!0);break;case"textarea":Ui(r),kf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kn)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ap(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Et]=t,e[Jo]=r,om(e,t,!1,!1),t.stateNode=e;e:{switch(n=_s(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Mo.length;o++)V(Mo[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":Sf(e,r),o=As(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":If(e,r),o=Fs(e,r),V("invalid",e);break;default:o=r}js(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Fp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Dp(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&qo(e,u):typeof u=="number"&&qo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Uo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&Su(e,i,u,n))}switch(a){case"input":Ui(e),Cf(e,r,!1);break;case"textarea":Ui(e),kf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ba(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Er(e,!!r.multiple,i,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=kn)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)nm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(a=Ha(ti.current),Ha(zt.current),an(t)){if(r=t.stateNode,a=t.memoizedProps,r[Et]=t,(i=r.nodeValue!==a)&&(e=Ye,e!==null))switch(e.tag){case 3:tn(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tn(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Se(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Cg(),Or(),t.flags|=98560,i=!1;else if(i=an(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Et]=t}else Or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),i=!1}else vt!==null&&(yu(vt),vt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?ue===0&&(ue=3):id())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return _r(),fu(e,t),e===null&&Qo(t.stateNode.containerInfo),Se(t),null;case 10:return Hu(t.type._context),Se(t),null;case 17:return qe(t.type)&&Pn(),Se(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Se(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)Po(i,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=An(e),n!==null){for(t.flags|=128,Po(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Hr&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304)}else{if(!r)if(e=An(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),Po(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Se(t),null}else 2*re()-i.renderingStartTime>Hr&&a!==1073741824&&(t.flags|=128,r=!0,Po(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Se(t),null);case 22:case 23:return od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ge&1073741824)!==0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function E1(e,t){switch(Ou(t),t.tag){case 1:return qe(t.type)&&Pn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),G(Ue),G(Ie),Gu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vu(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return _r(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var nn=!1,Ce=!1,$1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Tr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function pu(e,t,a){try{a()}catch(r){J(e,t,r)}}var hp=!1;function z1(e,t){if(Ks=Sn,e=cg(),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,v=null;t:for(;;){for(var y;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(y=h.firstChild)!==null;)v=h,h=y;for(;;){if(h===e)break t;if(v===a&&++d===o&&(s=n),v===i&&++p===r&&(u=n),(y=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qs={focusedElem:e,selectionRange:a},Sn=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,z=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:mt(t.type,w),z);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=hp,hp=!1,b}function _o(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pu(t,a,i)}o=o.next}while(o!==r)}}function Kn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function gu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function lm(e){var t=e.alternate;t!==null&&(e.alternate=null,lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[Jo],delete t[eu],delete t[g1],delete t[m1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function sm(e){return e.tag===5||e.tag===3||e.tag===4}function vp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kn));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,a),e=e.sibling;e!==null;)mu(e,t,a),e=e.sibling}function hu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,a),e=e.sibling;e!==null;)hu(e,t,a),e=e.sibling}var ge=null,ht=!1;function oa(e,t,a){for(a=a.child;a!==null;)um(e,t,a),a=a.sibling}function um(e,t,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 5:Ce||Tr(a,t);case 6:var r=ge,o=ht;ge=null,oa(e,t,a),ge=r,ht=o,ge!==null&&(ht?(e=ge,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ge.removeChild(a.stateNode));break;case 18:ge!==null&&(ht?(e=ge,a=a.stateNode,e.nodeType===8?bs(e.parentNode,a):e.nodeType===1&&bs(e,a),Xo(e)):bs(ge,a.stateNode));break;case 4:r=ge,o=ht,ge=a.stateNode.containerInfo,ht=!0,oa(e,t,a),ge=r,ht=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&pu(a,t,n),o=o.next}while(o!==r)}oa(e,t,a);break;case 1:if(!Ce&&(Tr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}oa(e,t,a);break;case 21:oa(e,t,a);break;case 22:a.mode&1?(Ce=(r=Ce)||a.memoizedState!==null,oa(e,t,a),Ce=r):oa(e,t,a);break;default:oa(e,t,a)}}function xp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new $1),t.forEach(function(r){var o=N1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function gt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:ge=s.stateNode,ht=!1;break e;case 3:ge=s.stateNode.containerInfo,ht=!0;break e;case 4:ge=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(ge===null)throw Error(I(160));um(i,n,o),ge=null,ht=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dm(t,e),t=t.sibling}function dm(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Tt(e),r&4){try{_o(3,e,e.return),Kn(3,e)}catch(w){J(e,e.return,w)}try{_o(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:gt(t,e),Tt(e),r&512&&a!==null&&Tr(a,a.return);break;case 5:if(gt(t,e),Tt(e),r&512&&a!==null&&Tr(a,a.return),e.flags&32){var o=e.stateNode;try{qo(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&zp(o,i),_s(s,n);var d=_s(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?Fp(o,h):p==="dangerouslySetInnerHTML"?Dp(o,h):p==="children"?qo(o,h):Su(o,p,h,d)}switch(s){case"input":Ds(o,i);break;case"textarea":Mp(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Er(o,!!i.multiple,y,!1):v!==!!i.multiple&&(i.defaultValue!=null?Er(o,!!i.multiple,i.defaultValue,!0):Er(o,!!i.multiple,i.multiple?[]:"",!1))}o[Jo]=i}catch(w){J(e,e.return,w)}}break;case 6:if(gt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(gt(t,e),Tt(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Xo(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:gt(t,e),Tt(e);break;case 13:gt(t,e),Tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ad=re())),r&4&&xp(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Ce=(d=Ce)||p,gt(t,e),Ce=d):gt(t,e),Tt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for($=e,p=e.child;p!==null;){for(h=$=p;$!==null;){switch(v=$,y=v.child,v.tag){case 0:case 11:case 14:case 15:_o(4,v,v.return);break;case 1:Tr(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,a=v.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){J(r,a,w)}}break;case 5:Tr(v,v.return);break;case 22:if(v.memoizedState!==null){yp(h);continue}}y!==null?(y.return=v,$=y):yp(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Bp("display",n))}catch(w){J(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){J(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(t,e),Tt(e),r&4&&xp(e);break;case 21:break;default:gt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(sm(a)){var r=a;break e}a=a.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qo(o,""),r.flags&=-33);var i=vp(e);hu(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=vp(e);mu(e,s,n);break;default:throw Error(I(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function M1(e,t,a){$=e,cm(e,t,a)}function cm(e,t,a){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||nn;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ce;s=nn;var d=Ce;if(nn=n,(Ce=u)&&!d)for($=o;$!==null;)n=$,u=n.child,n.tag===22&&n.memoizedState!==null?wp(o):u!==null?(u.return=n,$=u):wp(o);for(;i!==null;)$=i,cm(i,t,a),i=i.sibling;$=o,nn=s,Ce=d}bp(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):bp(e,t,a)}}function bp(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||Kn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:mt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&rp(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}rp(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Xo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ce||t.flags&512&&gu(t)}catch(v){J(t,t.return,v)}}if(t===e){$=null;break}if(a=t.sibling,a!==null){a.return=t.return,$=a;break}$=t.return}}function yp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}function wp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Kn(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{gu(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{gu(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var A1=Math.ceil,Fn=Gt.ReactCurrentDispatcher,ed=Gt.ReactCurrentOwner,nt=Gt.ReactCurrentBatchConfig,F=0,pe=null,ie=null,me=0,Ge=0,Rr=La(0),ue=0,ii=null,Xa=0,Qn=0,td=0,No=null,Ne=null,ad=0,Hr=1/0,Ot=null,On=!1,vu=null,ha=null,ln=!1,da=null,jn=0,Ho=0,xu=null,mn=-1,hn=0;function ze(){return(F&6)!==0?re():mn!==-1?mn:mn=re()}function va(e){return(e.mode&1)===0?1:(F&2)!==0&&me!==0?me&-me:v1.transition!==null?(hn===0&&(hn=Yp()),hn):(e=_,e!==0||(e=window.event,e=e===void 0?16:ag(e.type)),e)}function bt(e,t,a,r){if(50<Ho)throw Ho=0,xu=null,Error(I(185));ni(e,a,r),((F&2)===0||e!==pe)&&(e===pe&&((F&2)===0&&(Qn|=a),ue===4&&sa(e,me)),We(e,r),a===1&&F===0&&(t.mode&1)===0&&(Hr=re()+500,Gn&&Sa()))}function We(e,t){var a=e.callbackNode;by(e,t);var r=Ln(e,e===pe?me:0);if(r===0)a!==null&&Rf(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Rf(a),t===1)e.tag===0?h1(Lp.bind(null,e)):wg(Lp.bind(null,e)),f1(function(){(F&6)===0&&Sa()}),a=null;else{switch(Kp(r)){case 1:a=Tu;break;case 4:a=Gp;break;case 16:a=wn;break;case 536870912:a=Xp;break;default:a=wn}a=bm(a,fm.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function fm(e,t){if(mn=-1,hn=0,(F&6)!==0)throw Error(I(327));var a=e.callbackNode;if(Dr()&&e.callbackNode!==a)return null;var r=Ln(e,e===pe?me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=_n(e,r);else{t=r;var o=F;F|=2;var i=gm();(pe!==e||me!==t)&&(Ot=null,Hr=re()+500,Ua(e,t));do try{F1();break}catch(s){pm(e,s)}while(!0);Nu(),Fn.current=i,F=o,ie!==null?t=0:(pe=null,me=0,t=ue)}if(t!==0){if(t===2&&(o=Ws(e),o!==0&&(r=o,t=bu(e,o))),t===1)throw a=ii,Ua(e,0),sa(e,r),We(e,re()),a;if(t===6)sa(e,r);else{if(o=e.current.alternate,(r&30)===0&&!D1(o)&&(t=_n(e,r),t===2&&(i=Ws(e),i!==0&&(r=i,t=bu(e,i))),t===1))throw a=ii,Ua(e,0),sa(e,r),We(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:ja(e,Ne,Ot);break;case 3:if(sa(e,r),(r&130023424)===r&&(t=ad+500-re(),10<t)){if(Ln(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ze(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Js(ja.bind(null,e,Ne,Ot),t);break}ja(e,Ne,Ot);break;case 4:if(sa(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-xt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*A1(r/1960))-r,10<r){e.timeoutHandle=Js(ja.bind(null,e,Ne,Ot),r);break}ja(e,Ne,Ot);break;case 5:ja(e,Ne,Ot);break;default:throw Error(I(329))}}}return We(e,re()),e.callbackNode===a?fm.bind(null,e):null}function bu(e,t){var a=No;return e.current.memoizedState.isDehydrated&&(Ua(e,t).flags|=256),e=_n(e,t),e!==2&&(t=Ne,Ne=a,t!==null&&yu(t)),e}function yu(e){Ne===null?Ne=e:Ne.push.apply(Ne,e)}function D1(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function sa(e,t){for(t&=~td,t&=~Qn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-xt(t),r=1<<a;e[a]=-1,t&=~r}}function Lp(e){if((F&6)!==0)throw Error(I(327));Dr();var t=Ln(e,0);if((t&1)===0)return We(e,re()),null;var a=_n(e,t);if(e.tag!==0&&a===2){var r=Ws(e);r!==0&&(t=r,a=bu(e,r))}if(a===1)throw a=ii,Ua(e,0),sa(e,t),We(e,re()),a;if(a===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ja(e,Ne,Ot),We(e,re()),null}function rd(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(Hr=re()+500,Gn&&Sa())}}function Ya(e){da!==null&&da.tag===0&&(F&6)===0&&Dr();var t=F;F|=1;var a=nt.transition,r=_;try{if(nt.transition=null,_=1,e)return e()}finally{_=r,nt.transition=a,F=t,(F&6)===0&&Sa()}}function od(){Ge=Rr.current,G(Rr)}function Ua(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,c1(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pn();break;case 3:_r(),G(Ue),G(Ie),Gu();break;case 5:Vu(r);break;case 4:_r();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Hu(r.type._context);break;case 22:case 23:od()}a=a.return}if(pe=e,ie=e=xa(e.current,null),me=Ge=t,ue=0,ii=null,td=Qn=Xa=0,Ne=No=null,Na!==null){for(t=0;t<Na.length;t++)if(a=Na[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}Na=null}return e}function pm(e,t){do{var a=ie;try{if(Nu(),fn.current=Bn,Dn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Dn=!1}if(Ga=0,fe=se=K=null,jo=!1,ai=0,ed.current=null,a===null||a.return===null){ue=1,ii=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=me,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=up(n);if(y!==null){y.flags&=-257,dp(y,n,s,i,t),y.mode&1&&sp(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){sp(i,d,t),id();break e}u=Error(I(426))}}else if(X&&s.mode&1){var z=up(n);if(z!==null){(z.flags&65536)===0&&(z.flags|=256),dp(z,n,s,i,t),ju(Nr(u,s));break e}}i=u=Nr(u,s),ue!==4&&(ue=2),No===null?No=[i]:No.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Kg(i,u,t);ap(i,g);break e;case 1:s=u;var f=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ha===null||!ha.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Qg(i,s,t);ap(i,S);break e}}i=i.return}while(i!==null)}hm(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function gm(){var e=Fn.current;return Fn.current=Bn,e===null?Bn:e}function id(){(ue===0||ue===3||ue===2)&&(ue=4),pe===null||(Xa&268435455)===0&&(Qn&268435455)===0||sa(pe,me)}function _n(e,t){var a=F;F|=2;var r=gm();(pe!==e||me!==t)&&(Ot=null,Ua(e,t));do try{B1();break}catch(o){pm(e,o)}while(!0);if(Nu(),F=a,Fn.current=r,ie!==null)throw Error(I(261));return pe=null,me=0,ue}function B1(){for(;ie!==null;)mm(ie)}function F1(){for(;ie!==null&&!dy();)mm(ie)}function mm(e){var t=xm(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?hm(e):ie=t,ed.current=null}function hm(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=R1(a,t,Ge),a!==null){ie=a;return}}else{if(a=E1(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);ue===0&&(ue=5)}function ja(e,t,a){var r=_,o=nt.transition;try{nt.transition=null,_=1,O1(e,t,a,r)}finally{nt.transition=o,_=r}return null}function O1(e,t,a,r){do Dr();while(da!==null);if((F&6)!==0)throw Error(I(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(yy(e,i),e===pe&&(ie=pe=null,me=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ln||(ln=!0,bm(wn,function(){return Dr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var n=_;_=1;var s=F;F|=4,ed.current=null,z1(e,a),dm(a,e),n1(Qs),Sn=!!Ks,Qs=Ks=null,e.current=a,M1(a,e,o),cy(),F=s,_=n,nt.transition=i}else e.current=a;if(ln&&(ln=!1,da=e,jn=o),i=e.pendingLanes,i===0&&(ha=null),gy(a.stateNode,r),We(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(On)throw On=!1,e=vu,vu=null,e;return(jn&1)!==0&&e.tag!==0&&Dr(),i=e.pendingLanes,(i&1)!==0?e===xu?Ho++:(Ho=0,xu=e):Ho=0,Sa(),null}function Dr(){if(da!==null){var e=Kp(jn),t=nt.transition,a=_;try{if(nt.transition=null,_=16>e?16:e,da===null)var r=!1;else{if(e=da,da=null,jn=0,(F&6)!==0)throw Error(I(331));var o=F;for(F|=4,$=e.current;$!==null;){var i=$,n=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:_o(8,p,i)}var h=p.child;if(h!==null)h.return=p,$=h;else for(;$!==null;){p=$;var v=p.sibling,y=p.return;if(lm(p),p===d){$=null;break}if(v!==null){v.return=y,$=v;break}$=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var z=w.sibling;w.sibling=null,w=z}while(w!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,$=n;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var f=e.current;for($=f;$!==null;){n=$;var x=n.child;if((n.subtreeFlags&2064)!==0&&x!==null)x.return=n,$=x;else e:for(n=f;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Kn(9,s)}}catch(P){J(s,s.return,P)}if(s===n){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(F=o,Sa(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Hn,e)}catch{}r=!0}return r}finally{_=a,nt.transition=t}}return!1}function Sp(e,t,a){t=Nr(a,t),t=Kg(e,t,1),e=ma(e,t,1),t=ze(),e!==null&&(ni(e,1,t),We(e,t))}function J(e,t,a){if(e.tag===3)Sp(e,e,a);else for(;t!==null;){if(t.tag===3){Sp(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ha===null||!ha.has(r))){e=Nr(a,e),e=Qg(t,e,1),t=ma(t,e,1),e=ze(),t!==null&&(ni(t,1,e),We(t,e));break}}t=t.return}}function j1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=ze(),e.pingedLanes|=e.suspendedLanes&a,pe===e&&(me&a)===a&&(ue===4||ue===3&&(me&130023424)===me&&500>re()-ad?Ua(e,0):td|=a),We(e,t)}function vm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var a=ze();e=Wt(e,t),e!==null&&(ni(e,t,a),We(e,a))}function _1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vm(e,a)}function N1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),vm(e,a)}var xm;xm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)He=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return He=!1,T1(e,t,a);He=(e.flags&131072)!==0}else He=!1,X&&(t.flags&1048576)!==0&&Lg(t,En,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gn(e,t),e=t.pendingProps;var o=Fr(t,Ie.current);Ar(t,a),o=Yu(null,t,r,e,o,a);var i=Ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(i=!0,Tn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qu(t),o.updater=Yn,t.stateNode=o,o._reactInternals=t,nu(t,r,e,a),t=uu(null,t,r,!0,i,a)):(t.tag=0,X&&i&&Fu(t),$e(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(gn(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=U1(r),e=mt(r,e),o){case 0:t=su(null,t,r,e,a);break e;case 1:t=pp(null,t,r,e,a);break e;case 11:t=cp(null,t,r,e,a);break e;case 14:t=fp(null,t,r,mt(r.type,e),a);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),su(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),pp(e,t,r,o,a);case 3:e:{if(tm(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Tg(e,t),Mn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Nr(Error(I(423)),t),t=gp(e,t,r,a,o);break e}else if(r!==o){o=Nr(Error(I(424)),t),t=gp(e,t,r,a,o);break e}else for(Xe=ga(t.stateNode.containerInfo.firstChild),Ye=t,X=!0,vt=null,a=kg(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Or(),r===o){t=Vt(e,t,a);break e}$e(e,t,r,a)}t=t.child}return t;case 5:return Rg(t),e===null&&ru(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Zs(r,o)?n=null:i!==null&&Zs(r,i)&&(t.flags|=32),em(e,t),$e(e,t,n,a),t.child;case 6:return e===null&&ru(t),null;case 13:return am(e,t,a);case 4:return Wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=jr(t,null,r,a):$e(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),cp(e,t,r,o,a);case 7:return $e(e,t,t.pendingProps,a),t.child;case 8:return $e(e,t,t.pendingProps.children,a),t.child;case 12:return $e(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W($n,r._currentValue),r._currentValue=n,i!==null)if(yt(i.value,n)){if(i.children===o.children&&!Ue.current){t=Vt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ht(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),ou(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(I(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),ou(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}$e(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Ar(t,a),o=lt(o),r=r(o),t.flags|=1,$e(e,t,r,a),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),fp(e,t,r,o,a);case 15:return Zg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),gn(e,t),t.tag=1,qe(r)?(e=!0,Tn(t)):e=!1,Ar(t,a),Yg(t,r,o),nu(t,r,o,a),uu(null,t,r,!0,e,a);case 19:return rm(e,t,a);case 22:return Jg(e,t,a)}throw Error(I(156,t.tag))};function bm(e,t){return Vp(e,t)}function H1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,r){return new H1(e,t,a,r)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function U1(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===ku)return 14}return 2}function xa(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function vn(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")nd(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case br:return qa(a.children,o,i,t);case Cu:n=8,o|=8;break;case Es:return e=it(12,a,t,o|2),e.elementType=Es,e.lanes=i,e;case $s:return e=it(13,a,t,o),e.elementType=$s,e.lanes=i,e;case zs:return e=it(19,a,t,o),e.elementType=zs,e.lanes=i,e;case Rp:return Zn(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Pp:n=10;break e;case Tp:n=9;break e;case Iu:n=11;break e;case ku:n=14;break e;case ia:n=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=it(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function qa(e,t,a,r){return e=it(7,e,r,t),e.lanes=a,e}function Zn(e,t,a,r){return e=it(22,e,r,t),e.elementType=Rp,e.lanes=a,e.stateNode={isHidden:!1},e}function Ps(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Ts(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function q1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ld(e,t,a,r,o,i,n,s,u){return e=new q1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(i),e}function W1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function ym(e){if(!e)return ya;e=e._reactInternals;e:{if(Qa(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var a=e.type;if(qe(a))return yg(e,a,t)}return t}function wm(e,t,a,r,o,i,n,s,u){return e=ld(a,r,!0,e,o,i,n,s,u),e.context=ym(null),a=e.current,r=ze(),o=va(a),i=Ht(r,o),i.callback=t??null,ma(a,i,o),e.current.lanes=o,ni(e,o,r),We(e,r),e}function Jn(e,t,a,r){var o=t.current,i=ze(),n=va(o);return a=ym(a),t.context===null?t.context=a:t.pendingContext=a,t=Ht(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ma(o,t,n),e!==null&&(bt(e,o,n,i),cn(e,o,n)),n}function Nn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function sd(e,t){Cp(e,t),(e=e.alternate)&&Cp(e,t)}function V1(){return null}var Lm=typeof reportError=="function"?reportError:function(e){console.error(e)};function ud(e){this._internalRoot=e}el.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Jn(e,t,null,null)};el.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ya(function(){Jn(null,e,null,null)}),t[qt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<la.length&&t!==0&&t<la[a].priority;a++);la.splice(a,0,e),a===0&&tg(e)}};function dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ip(){}function G1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Nn(n);i.call(d)}}var n=wm(t,r,e,0,null,!1,!1,"",Ip);return e._reactRootContainer=n,e[qt]=n.current,Qo(e.nodeType===8?e.parentNode:e),Ya(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Nn(u);s.call(d)}}var u=ld(e,0,!1,null,null,!1,!1,"",Ip);return e._reactRootContainer=u,e[qt]=u.current,Qo(e.nodeType===8?e.parentNode:e),Ya(function(){Jn(t,u,a,r)}),u}function al(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Nn(n);s.call(u)}}Jn(t,n,e,o)}else n=G1(a,t,e,o,r);return Nn(n)}Qp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=zo(t.pendingLanes);a!==0&&(Ru(t,a|1),We(t,re()),(F&6)===0&&(Hr=re()+500,Sa()))}break;case 13:Ya(function(){var r=Wt(e,1);if(r!==null){var o=ze();bt(r,e,1,o)}}),sd(e,1)}};Eu=function(e){if(e.tag===13){var t=Wt(e,134217728);if(t!==null){var a=ze();bt(t,e,134217728,a)}sd(e,134217728)}};Zp=function(e){if(e.tag===13){var t=va(e),a=Wt(e,t);if(a!==null){var r=ze();bt(a,e,t,r)}sd(e,t)}};Jp=function(){return _};eg=function(e,t){var a=_;try{return _=e,t()}finally{_=a}};Hs=function(e,t,a){switch(t){case"input":if(Ds(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Vn(r);if(!o)throw Error(I(90));$p(r),Ds(r,o)}}}break;case"textarea":Mp(e,a);break;case"select":t=a.value,t!=null&&Er(e,!!a.multiple,t,!1)}};_p=rd;Np=Ya;var X1={usingClientEntryPoint:!1,Events:[si,Sr,Vn,Op,jp,rd]},To={findFiberByHostInstance:_a,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y1={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Gt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qp(e),e===null?null:e.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||V1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ro.isDisabled&&Ro.supportsFiber))try{Hn=Ro.inject(Y1),$t=Ro}catch{}var Ro;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X1;Ze.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(t))throw Error(I(200));return W1(e,t,null,a)};Ze.createRoot=function(e,t){if(!dd(e))throw Error(I(299));var a=!1,r="",o=Lm;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ld(e,1,!1,null,null,a,!1,r,o),e[qt]=t.current,Qo(e.nodeType===8?e.parentNode:e),new ud(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=qp(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Ya(e)};Ze.hydrate=function(e,t,a){if(!tl(t))throw Error(I(200));return al(null,e,t,!0,a)};Ze.hydrateRoot=function(e,t,a){if(!dd(e))throw Error(I(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=Lm;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=wm(t,null,e,1,a??null,o,!1,i,n),e[qt]=t.current,Qo(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new el(t)};Ze.render=function(e,t,a){if(!tl(t))throw Error(I(200));return al(null,e,t,!1,a)};Ze.unmountComponentAtNode=function(e){if(!tl(e))throw Error(I(40));return e._reactRootContainer?(Ya(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=rd;Ze.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!tl(a))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return al(e,t,a,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426"});var Ca=Ft((tk,Im)=>{"use strict";function Cm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)}catch(e){console.error(e)}}Cm(),Im.exports=Sm()});var Pm=Ft(cd=>{"use strict";var km=Ca();cd.createRoot=km.createRoot,cd.hydrateRoot=km.hydrateRoot;var ak});var Oh=Ft(vl=>{"use strict";var Nw=C(),Hw=Symbol.for("react.element"),Uw=Symbol.for("react.fragment"),qw=Object.prototype.hasOwnProperty,Ww=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vw={key:!0,ref:!0,__self:!0,__source:!0};function Fh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)qw.call(t,r)&&!Vw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Hw,type:e,key:i,ref:n,props:o,_owner:Ww.current}}vl.Fragment=Uw;vl.jsx=Fh;vl.jsxs=Fh});var m=Ft((e5,jh)=>{"use strict";jh.exports=Oh()});var kb=c(Pm(),1);var de=c(C());var N="-ms-",Za="-moz-",O="-webkit-",rl="comm",Ia="rule",Wr="decl";var Tm="@import";var Rm="@namespace",ol="@keyframes";var Em="@layer";var fd=Math.abs,di=String.fromCharCode,ci=Object.assign;function $m(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function il(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,a){return e.replace(t,a)}function Vr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function Lt(e,t,a){return e.slice(t,a)}function ke(e){return e.length}function nl(e){return e.length}function Ja(e,t){return t.push(e),e}function zm(e,t){return e.map(t).join("")}function pd(e,t){return e.filter(function(a){return!wt(a,t)})}var ll=1,Gr=1,Mm=0,ut=0,ne=0,Yr="";function fi(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:ll,column:Gr,length:n,return:"",siblings:s}}function Xt(e,t){return ci(fi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function er(e){for(;e.root;)e=Xt(e.root,{children:[e]});Ja(e,e.siblings)}function Am(){return ne}function Dm(){return ne=ut>0?Z(Yr,--ut):0,Gr--,ne===10&&(Gr=1,ll--),ne}function dt(){return ne=ut<Mm?Z(Yr,ut++):0,Gr++,ne===10&&(Gr=1,ll++),ne}function Yt(){return Z(Yr,ut)}function pi(){return ut}function sl(e,t){return Lt(Yr,e,t)}function Xr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Bm(e){return ll=Gr=1,Mm=ke(Yr=e),ut=0,[]}function Fm(e){return Yr="",e}function ul(e){return il(sl(ut-1,gd(e===91?e+2:e===40?e+1:e)))}function Om(e){for(;(ne=Yt())&&ne<33;)dt();return Xr(e)>2||Xr(ne)>3?"":" "}function jm(e,t){for(;--t&&dt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return sl(e,pi()+(t<6&&Yt()==32&&dt()==32))}function gd(e){for(;dt();)switch(ne){case e:return ut;case 34:case 39:e!==34&&e!==39&&gd(ne);break;case 40:e===41&&gd(e);break;case 92:dt();break}return ut}function _m(e,t){for(;dt()&&e+ne!==57;)if(e+ne===84&&Yt()===47)break;return"/*"+sl(t,ut-1)+"*"+di(e===47?e:dt())}function Nm(e){for(;!Xr(Yt());)dt();return sl(e,ut)}function qm(e){return Fm(dl("",null,null,null,[""],e=Bm(e),0,[0],e))}function dl(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,v=0,y=0,b=0,w=1,z=1,g=1,f=0,x="",S=o,P=i,E=r,k=x;z;)switch(b=f,f=dt()){case 40:if(b!=108&&Z(k,h-1)==58){Vr(k+=M(ul(f),"&","&\f"),"&\f",fd(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=ul(f);break;case 9:case 10:case 13:case 32:k+=Om(b);break;case 92:k+=jm(pi()-1,7);continue;case 47:switch(Yt()){case 42:case 47:Ja(K1(_m(dt(),pi()),t,a,u),u),(Xr(b||1)==5||Xr(Yt()||1)==5)&&ke(k)&&Lt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=ke(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:z=0;case 59+p:g==-1&&(k=M(k,/\f/g,"")),y>0&&(ke(k)-h||w===0&&b===47)&&Ja(y>32?Um(k+";",r,a,h-1,u):Um(M(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(Ja(E=Hm(k,t,a,d,p,o,s,x,S=[],P=[],h,i),i),f===123)if(p===0)dl(k,t,E,E,S,i,h,s,P);else{switch(v){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?dl(e,E,E,r&&Ja(Hm(e,E,E,0,0,o,s,x,o,S=[],h,P),P),o,P,h,s,r?S:P):dl(k,E,E,E,[""],P,0,s,P)}}d=p=y=0,w=g=1,x=k="",h=n;break;case 58:h=1+ke(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&Dm()==125)continue}switch(k+=di(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(ke(k)-1)*g,g=1;break;case 64:Yt()===45&&(k+=ul(dt())),v=Yt(),p=h=ke(x=k+=Nm(pi())),f++;break;case 45:b===45&&ke(k)==2&&(w=0)}}return i}function Hm(e,t,a,r,o,i,n,s,u,d,p,h){for(var v=o-1,y=o===0?i:[""],b=nl(y),w=0,z=0,g=0;w<r;++w)for(var f=0,x=Lt(e,v+1,v=fd(z=n[w])),S=e;f<b;++f)(S=il(z>0?y[f]+" "+x:M(x,/&\f/g,y[f])))&&(u[g++]=S);return fi(e,t,a,o===0?Ia:s,u,d,p,h)}function K1(e,t,a,r){return fi(e,t,a,rl,di(Am()),Lt(e,2,-2),0,r)}function Um(e,t,a,r,o){return fi(e,t,a,Wr,Lt(e,0,r),Lt(e,r+1,-1),r,o)}function md(e,t,a){switch($m(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Za+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Za+e+N+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+N+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+N+e+e;case 6165:return O+e+N+"flex-"+e+e;case 5187:return O+e+M(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return O+e+N+"flex-item-"+M(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":N+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return O+e+N+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+N+M(e,"shrink","negative")+e;case 5292:return O+e+N+M(e,"basis","preferred-size")+e;case 6060:return O+"box-"+M(e,"-grow","")+O+e+N+M(e,"grow","positive")+e;case 4554:return O+M(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+N+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!wt(e,/flex-|baseline/))return N+"grid-column-align"+Lt(e,t)+e;break;case 2592:case 3360:return N+M(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,wt(r.props,/grid-\w+-end/)})?~Vr(e+(a=a[t].value),"span",0)?e:N+M(e,"-start","")+e+N+"grid-row-span:"+(~Vr(a,"span",0)?wt(a,/\d+/):+wt(a,/\d+/)-+wt(e,/\d+/))+";":N+M(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:N+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ke(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Za+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Vr(e,"stretch",0)?md(M(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return N+o+":"+i+d+(n?N+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return M(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+N+"$2box$3")+e;case 100:return M(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function Kr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function Wm(e,t,a,r){switch(e.type){case Em:if(e.children.length)break;case Tm:case Rm:case Wr:return e.return=e.return||e.value;case rl:return"";case ol:return e.return=e.value+"{"+Kr(e.children,r)+"}";case Ia:if(!ke(e.value=e.props.join(",")))return""}return ke(a=Kr(e.children,r))?e.return=e.value+"{"+a+"}":""}function Vm(e){var t=nl(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Gm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Xm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Wr:e.return=md(e.value,e.length,a);return;case ol:return Kr([Xt(e,{value:M(e.value,"@","@"+O)})],r);case Ia:if(e.length)return zm(a=e.props,function(o){switch(wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":er(Xt(e,{props:[M(o,/:(read-\w+)/,":"+Za+"$1")]})),er(Xt(e,{props:[o]})),ci(e,{props:pd(a,r)});break;case"::placeholder":er(Xt(e,{props:[M(o,/:(plac\w+)/,":"+O+"input-$1")]})),er(Xt(e,{props:[M(o,/:(plac\w+)/,":"+Za+"$1")]})),er(Xt(e,{props:[M(o,/:(plac\w+)/,N+"input-$1")]})),er(Xt(e,{props:[o]})),ci(e,{props:pd(a,r)});break}return""})}}var hd,vd,Kt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ih="active",nh="data-styled-version",ml="6.4.3",Ed=`/*!sc*/
`,vi=typeof window<"u"&&typeof document<"u";function Ym(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var Q1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(vd=(hd=Ym("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&hd!==void 0?hd:Ym("SC_DISABLE_SPEEDY"))!==null&&vd!==void 0?vd:typeof process<"u"&&process.env!==void 0&&!1),lh="sc-keyframes-",Z1={};function yi(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var zk=1<<30,cl=new Map,pl=new Map,fl=1,mi=e=>{if(cl.has(e))return cl.get(e);for(;pl.has(fl);)fl++;let t=fl++;return cl.set(e,t),pl.set(t,e),t},J1=e=>pl.get(e),ew=(e,t)=>{fl=t+1,cl.set(e,t),pl.set(t,e)};var $d=Object.freeze([]),Qr=Object.freeze({});function sh(e,t,a=Qr){return e.theme!==a.theme&&e.theme||t||a.theme}var tw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aw=/(^-|-$)/g;function uh(e){return e.replace(tw,"-").replace(aw,"")}var rw=/(a)(d)/gi,Km=e=>String.fromCharCode(e+(e>25?39:97));function zd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Km(t%52)+a;return(Km(t%52)+a).replace(rw,"$1-$2")}var wd=5381,ar=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},dh=e=>ar(wd,e);function Md(e){return zd(dh(e)>>>0)}function ow(e){return e.displayName||e.name||"Component"}function Ld(e){return typeof e=="string"&&!0}function iw(e){return Ld(e)?`styled.${e}`:`Styled(${ow(e)})`}var ch=Symbol.for("react.memo"),nw=Symbol.for("react.forward_ref"),lw={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},sw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uw={[nw]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ch]:fh};function Qm(e){return("type"in(t=e)&&t.type.$$typeof)===ch?fh:"$$typeof"in e?uw[e.$$typeof]:lw;var t}var dw=Object.defineProperty,cw=Object.getOwnPropertyNames,fw=Object.getOwnPropertySymbols,pw=Object.getOwnPropertyDescriptor,gw=Object.getPrototypeOf,mw=Object.prototype;function ph(e,t,a){if(typeof t!="string"){let r=gw(t);r&&r!==mw&&ph(e,r,a);let o=cw(t).concat(fw(t)),i=Qm(e),n=Qm(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in sw||a&&a[u]||n&&u in n||i&&u in i)){let d=pw(t,u);try{dw(e,u,d)}catch{}}}}return e}function wi(e){return typeof e=="function"}var hw=Symbol.for("react.forward_ref");function Ad(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===hw&&"styledComponentId"in e}function hi(e,t){return e&&t?e+" "+t:e||t||""}function gl(e,t){return e.join(t||"")}function xi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sd(e,t,a=!1){if(!a&&!xi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Sd(e[r],t[r]);else if(xi(t))for(let r in t)e[r]=Sd(e[r],t[r]);return e}function Dd(e,t){Object.defineProperty(e,"toString",{value:t})}var vw=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw yi(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+Ed;return t}},xw=`style[${Kt}][${nh}="${ml}"]`,bw=new RegExp(`^${Kt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Zm=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Cd=e=>{if(!e)return document;if(Zm(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Zm(t))return t}return document},yw=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},ww=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Ed),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(bw);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(ew(p,d),yw(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},xd=e=>{let t=Cd(e.options.target).querySelectorAll(xw);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Kt)!==ih&&(ww(e,o),o.parentNode&&o.parentNode.removeChild(o))}},gi=!1;function Lw(){if(gi!==!1)return gi;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return gi=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return gi=t.getAttribute("content")||void 0}return gi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var gh=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Kt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Kt,ih),o.setAttribute(nh,ml);let s=t||Lw();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},Sw=class{constructor(e,t){this.element=gh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw yi(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Cw=class{constructor(e,t){this.element=gh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Jm=vi,Iw={isServer:!vi,useCSSOMInjection:!Q1},bi=class e{static registerId(t){return mi(t)}constructor(t=Qr,a={},r){this.options=Object.assign(Object.assign({},Iw),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vi&&Jm&&(Jm=!1,xd(this)),Dd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=J1(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let v=Kt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=h+v+'{content:"'+y+'"}'+Ed}return s})(this))}rehydrate(){!this.server&&vi&&xd(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&vi&&t.target!==this.options.target&&Cd(this.options.target)!==Cd(t.target)&&xd(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new Sw(r,o):new Cw(r,o))(this.options),new vw(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){mi(t),t.startsWith(lh)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(mi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(mi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},mh=new WeakSet,kw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Pw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in kw||e.startsWith("--")?String(t).trim():t+"px"}var tr=47;function eh(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var hh=Symbol.for("sc-keyframes");function Tw(e){return typeof e=="object"&&e!==null&&hh in e}function vh(e){return wi(e)&&!(e.prototype&&e.prototype.isReactComponent)}var xh=e=>e==null||e===!1||e==="",Rw=Symbol.for("react.client.reference");function th(e){return e.$$typeof===Rw}function bh(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!xh(r)&&(Array.isArray(r)&&mh.has(r)||wi(r)?t.push(eh(a)+":",r,";"):xi(r)?(t.push(a+" {"),bh(r,t),t.push("}")):t.push(eh(a)+": "+Pw(a,r)+";"))}}function ka(e,t,a,r,o=[]){if(xh(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(th(e))return o;if(vh(e)&&t){let n=e(t);return ka(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)ka(e[n],t,a,r,o);return o}return Ad(e)?(o.push(`.${e.styledComponentId}`),o):Tw(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):th(e)?o:xi(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(bh(e,o),o):(o.push(e.toString()),o)}var Ew=dh(ml),Id=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=ar(Ew,a),this.baseStyle=r,bi.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(vh(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=gl(ka(u,t,a,r)))}else i+=gl(ka(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=zd(ar(ar(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=hi(o,s)}}return o}},$w=/&/g;function yh(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function bd(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==tr||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===tr&&(n=!1,u++);else if(d!==34&&d!==39||yh(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function wh(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&wh(i.children,t)}return e}function Lh({options:e=Qr,plugins:t=$d}=Qr){let a,r,o,i=(v,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:v,n=t.slice();n.push(v=>{v.type===Ia&&v.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),v.props[0]=v.props[0].replace($w,r).replace(o,i))}),e.prefix&&n.push(Xm),n.push(Wm);let s=[],u=Vm(n.concat(Gm(v=>s.push(v)))),d=(v,y="",b="",w="&")=>{a=w,r=y,o=void 0;let z=(function(f){let x=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!x&&!S)return f;if(!x)return bd(f);let P=f.length,E="",k=0,T=0,U=0,A=0,ae=0,Da=!1;for(;T<P;){let be=f.charCodeAt(T);if(be!==34&&be!==39||yh(f,T))if(U===0)if(be===tr&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==tr);)T++;T+=2}else if(be!==40)if(be!==41)if(A>0)T++;else if(be===42&&T+1<P&&f.charCodeAt(T+1)===tr)E+=f.substring(k,T),T+=2,k=T,Da=!0;else if(be===tr&&T+1<P&&f.charCodeAt(T+1)===tr){for(E+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,Da=!0}else be===123?ae++:be===125&&ae--,T++;else A>0&&A--,T++;else A++,T++;else T++;else U===0?U=be:U===be&&(U=0),T++}return Da?(k<P&&(E+=f.substring(k)),ae===0?E:bd(E)):ae===0?f:bd(f)})(v),g=qm(b||y?b+" "+y+" { "+z+" }":z);return e.namespace&&(g=wh(g,e.namespace)),s=[],Kr(g,u),s},p=e,h=wd;for(let v=0;v<t.length;v++)t[v].name||yi(15),h=ar(h,t[v].name);return p?.namespace&&(h=ar(h,p.namespace)),p?.prefix&&(h=ar(h,"p")),d.hash=h!==wd?h.toString():"",d}var zw=new bi,kd=Lh(),Bd=de.default.createContext({shouldForwardProp:void 0,styleSheet:zw,stylis:kd,stylisPlugins:void 0}),Mk=Bd.Consumer;function Fd(){return de.default.useContext(Bd)}function Sh(e){var t;let a=Fd(),{styleSheet:r}=a,o=de.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=de.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:Lh({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=de.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return de.default.createElement(Bd.Provider,{value:u},e.children)}var Od=de.default.createContext(void 0),Ak=Od.Consumer;var ah=Object.prototype.hasOwnProperty,yd={};function Mw(e,t){let a=typeof e!="string"?"sc":uh(e);yd[a]=(yd[a]||0)+1;let r=a+"-"+Md(ml+a+yd[a]);return t?t+"-"+r:r}function Aw(e,t,a){let r=Ad(e),o=e,i=!Ld(e),{attrs:n=$d,componentId:s=Mw(t.displayName,t.parentComponentId),displayName:u=iw(e)}=t,d=t.displayName&&t.componentId?uh(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let z=t.shouldForwardProp;h=(g,f)=>w(g,f)&&z(g,f)}else h=w}let v=new Id(a,d,r?o.componentStyle:void 0);function y(w,z){return(function(g,f,x){let{attrs:S,componentStyle:P,defaultProps:E,foldedComponentIds:k,styledComponentId:T,target:U}=g,A=de.default.useContext(Od),ae=Fd(),Da=g.shouldForwardProp||ae.shouldForwardProp,be=sh(f,A,E)||Qr,ea,ho;{let ta=de.default.useRef(null),ft=ta.current;if(ft!==null&&ft[1]===be&&ft[2]===ae.styleSheet&&ft[3]===ae.stylis&&ft[7]===P&&(function(gr,Ve,je){let _e=gr,ye=Ve,vo=0;for(let Ba in ye)if(ah.call(ye,Ba)&&(vo++,_e[Ba]!==ye[Ba]))return!1;return vo===je})(ft[0],f,ft[4]))ea=ft[5],ho=ft[6];else{ea=(function(Ve,je,_e){let ye=Object.assign(Object.assign({},je),{className:void 0,theme:_e}),vo=Ve.length>1;for(let Ba=0;Ba<Ve.length;Ba++){let Vl=Ve[Ba],Mi=wi(Vl)?Vl(vo?Object.assign({},ye):ye):Vl;for(let aa in Mi)aa==="className"?ye.className=hi(ye.className,Mi[aa]):aa==="style"?ye.style=Object.assign(Object.assign({},ye.style),Mi[aa]):aa in je&&je[aa]===void 0||(ye[aa]=Mi[aa])}return"className"in je&&typeof je.className=="string"&&(ye.className=hi(ye.className,je.className)),ye})(S,f,be),ho=(function(Ve,je,_e,ye){return Ve.generateAndInjectStyles(je,_e,ye)})(P,ea,ae.styleSheet,ae.stylis);let gr=0;for(let Ve in f)ah.call(f,Ve)&&gr++;ta.current=[f,be,ae.styleSheet,ae.stylis,gr,ea,ho,P]}}let zi=ea.as||U,ql=(function(ta,ft,gr,Ve){let je={};for(let _e in ta)ta[_e]===void 0||_e[0]==="$"||_e==="as"||_e==="theme"&&ta.theme===gr||(_e==="forwardedAs"?je.as=ta.forwardedAs:Ve&&!Ve(_e,ft)||(je[_e]=ta[_e]));return je})(ea,zi,be,Da),Wl=hi(k,T);return ho&&(Wl+=" "+ho),ea.className&&(Wl+=" "+ea.className),ql[Ld(zi)&&zi.includes("-")?"class":"className"]=Wl,x&&(ql.ref=x),(0,de.createElement)(zi,ql)})(b,w,z)}y.displayName=u;let b=de.default.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?hi(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function(z,...g){for(let f of g)Sd(z,f,!0);return z})({},o.defaultProps,w):w}}),Dd(b,()=>`.${b.styledComponentId}`),i&&ph(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var Dw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function rh(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var oh=e=>(mh.add(e),e);function L(e,...t){if(wi(e)||xi(e))return oh(ka(rh($d,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?ka(a):oh(ka(rh(a,t)))}function Pd(e,t,a=Qr){if(!t)throw yi(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>Pd(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>Pd(e,t,Object.assign(Object.assign({},a),o)),r}var Ch=e=>Pd(Aw,e),l=Ch;Dw.forEach(e=>{l[e]=Ch(e)});var Td=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(wi(i)&&!Ad(i))return!1}return!0})(t),bi.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=gl(ka(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function Ih(e,...t){let a=L(e,...t),r=`sc-global-${Md(JSON.stringify(a))}`,o=new Td(a,r),i=s=>{let u=Fd(),d=de.default.useContext(Od),p;{let h=de.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],v=de.default.useRef(o);de.default.useLayoutEffect(()=>{u.styleSheet.server||(v.current!==o&&(u.styleSheet.clearRules(r),v.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),de.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,Z1,d,h);else{let v=Object.assign(Object.assign({},u),{theme:sh(u,p,i.defaultProps)});o.renderStyles(s,v,d,h)}}return de.default.memo(i)}var kh,Rd=class{constructor(t,a){this[kh]=!0,this.inject=(r,o=kd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=lh+t,this.rules=a,mi(this.id),Dd(this,()=>{throw yi(12,String(this.name))})}getName(t=kd){return t.hash?this.name+zd(+t.hash>>>0):this.name}};function Mt(e,...t){let a=gl(L(e,...t)),r=Md(a);return new Rd(r,a)}kh=hh;var Dk=`__sc-${Kt}__`;var Bk=`:not(style[${Kt}])`,Fk=`style[${Kt}]`;var Ph=`/* Generated from src/tokens. Do not edit directly. */

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
`;var jd=document.currentScript??document.querySelector("script[data-project]"),Pa={project:jd?.dataset.project??"default",seedUrl:jd?.dataset.seed,version:jd?.dataset.version||void 0};var rr=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Li=e=>e.comments[0]?.body??"",Th=e=>e.comments[0]?.author??"";function Rh(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:rr(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}function _d(e){return e.map(t=>{if(!t.beforeShot||t.comments.length===0||t.comments[0].shot)return t;let{beforeShot:a,...r}=t;return{...r,comments:[{...t.comments[0],shot:a},...t.comments.slice(1)]}})}function Eh(e,t){return e.filter(a=>!t[a.id]?.hidden).map(a=>{let r=t[a.id];if(!r)return{...a,origin:"seed"};let o=new Set(r.hiddenCommentIds??[]),i=a.comments.filter(n=>!o.has(n.id)).map(n=>r.editedBodies?.[n.id]?{...n,body:r.editedBodies[n.id]}:n);return{...a,origin:"seed",resolved:r.resolved??a.resolved,comments:[...i,...r.addedComments??[]]}}).filter(a=>a.comments.length>0)}function $h(e,t,a){let r=e.addedComments??[];return r.some(o=>o.id===t)?{addedComments:r.map(o=>o.id===t?{...o,body:a}:o)}:{editedBodies:{...e.editedBodies,[t]:a}}}function zh(e,t){let a=e.addedComments??[];return a.some(r=>r.id===t)?{addedComments:a.filter(r=>r.id!==t)}:{hiddenCommentIds:[...e.hiddenCommentIds??[],t]}}var Mh="fbw:author",hl=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;Rh(t);try{this.threads=_d(JSON.parse(localStorage.getItem(this.threadsKey)??"[]")),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=_d(t.filter(r=>!a.has(r.id))),this.refreshSeeds(),this.notify()}refreshSeeds(){this.seedThreads=Eh(this.rawSeeds,this.overrides)}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o,i){let n={id:rr(),author:a,body:r,createdAt:new Date().toISOString(),version:o,shot:i};if(this.isSeed(t)){let s=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...s.addedComments??[],n]});return}this.threads=this.threads.map(s=>s.id===t?{...s,comments:[...s.comments,n]}:s),this.persist()}updateComment(t,a,r){if(this.isSeed(t)){this.overrideSeed(t,$h(this.overrides[t]??{},a,r));return}this.threads=this.threads.map(o=>o.id===t?{...o,comments:o.comments.map(i=>i.id===a?{...i,body:r}:i)}:o),this.persist()}removeComment(t,a){if(this.isSeed(t)){this.overrideSeed(t,zh(this.overrides[t]??{},a));return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r).filter(r=>r.comments.length>0),this.persist()}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.refreshSeeds(),this.notify()}get author(){return localStorage.getItem(Mh)??""}set author(t){localStorage.setItem(Mh,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){try{localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}catch{this.threads=this.threads.map(t=>({...t,comments:t.comments.map(({shot:a,...r})=>r)})),localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}this.notify()}notify(){this.listeners.forEach(t=>t())}};var Zr="fbw-host",Fw="#2563eb",Nd="fbw:pending-jump",Ow=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function jw(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${Ow(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function Ah(e){return{page:location.pathname,selector:jw(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ta(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==Zr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function _w(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${Fw}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function Hd(e){if(e.page!==location.pathname)return!1;let t=Ta(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>_w(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function Dh(e){sessionStorage.setItem(Nd,JSON.stringify(e)),location.assign(e.page)}function Bh(){let e=sessionStorage.getItem(Nd);if(e){sessionStorage.removeItem(Nd);try{let t=JSON.parse(e);setTimeout(()=>Hd(t),400)}catch{}}}var $i=c(C(),1);var rc=c(C(),1),oc=c(C(),1),ic=c(C(),1),nc=c(C(),1),kl=c(C(),1),A2=c(C(),1),hv=c(C(),1),vv=c(C(),1),xv=c(C(),1),Pi=c(C(),1),N2=c(C(),1);var H2=c(m(),1),U2=c(m(),1);var Rv=c(m(),1);var Ev=c(m(),1);var $v=c(m(),1);var pL=c(m(),1),Mv=c(m(),1);var mL=c(m(),1);var hL=c(m(),1),vL=c(m(),1),xL=c(m(),1),Av=c(m(),1),bL=c(m(),1),Bv=c(C(),1);var Ov=c(m(),1),jv=c(C(),1),_v=c(m(),1);var Nv=c(C(),1);var Hv=c(m(),1);var Uv=c(m(),1),dc=c(C(),1);var cc=c(m(),1),Wv=c(C(),1);var Vv=c(m(),1),Gv=c(C(),1);var Xv=c(m(),1),Yv=c(C(),1);var Kv=c(m(),1),Qv=c(C(),1);var Zv=c(m(),1),Jv=c(C(),1);var ML=c(m(),1),ex=c(m(),1),AL=c(C(),1),DL=c(Ca(),1),BL=c(C(),1);var FL=c(m(),1),OL=c(C(),1),tx=c(m(),1),Tl=c(C(),1),jL=c(Ca(),1),_L=c(m(),1),Rl=c(C(),1);var ax=c(m(),1),co=c(C(),1);var rx=c(m(),1),ir=c(C(),1);var Be=c(m(),1),qL=c(C(),1),gc=c(m(),1),WL=c(C(),1),mc=c(m(),1),VL=c(C(),1),ox=c(m(),1),hc=c(C(),1);var ix=c(m(),1);var nx=c(m(),1);var lx=c(m(),1);var sx=c(m(),1);var ux=c(m(),1),vc=c(C(),1),XL=c(Ca(),1);var dx=c(C(),1);var cx=c(m(),1),xc=c(m(),1);var fx=c(m(),1);var gx=c(m(),1),QL=c(C(),1);var ZL=c(m(),1);var bl=c(C());var xl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var _h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Nh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var Ud=e=>{let t=Nh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Si=c(C());var Hh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Uh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var qh=(0,Si.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,Si.createElement)("svg",{ref:u,...Hh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:xl("lucide",o),...!i&&!Uh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,Si.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Ra=(e,t)=>{let a=(0,bl.forwardRef)(({className:r,...o},i)=>(0,bl.createElement)(qh,{ref:i,iconNode:t,className:xl(`lucide-${_h(Ud(e))}`,`lucide-${e}`,r),...o}));return a.displayName=Ud(e),a};var Gw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Jr=Ra("check",Gw);var Xw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],eo=Ra("pencil",Xw);var Yw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ea=Ra("trash-2",Yw);var Kw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ae=Ra("x",Kw);var mx=c(C(),1);var hx=c(m(),1),vx=c(m(),1);var xx=c(m(),1),oS=c(C(),1);var bx=c(m(),1);var yx=c(C(),1);var wx=c(m(),1);var Sx=c(m(),1);var lS=c(m(),1);var uS=c(m(),1);var El=c(m(),1);var fS=c(m(),1);var kx=c(m(),1);var wS=c(m(),1),cr=c(C(),1);var Px=c(m(),1);var Tx=c(m(),1);var Rx=c(m(),1),kS=c(C(),1);var Ex=c(m(),1);var $x=c(m(),1);var PS=c(m(),1);var zx=c(m(),1);var $S=c(m(),1);var Mx=c(m(),1);var MS=c(C(),1);var Ax=c(m(),1),AS=c(C(),1);var Fx=c(m(),1),DS=c(C(),1),Ox=c(m(),1),BS=c(m(),1),jx=c(m(),1),_x=c(C(),1);var bc=c(m(),1),Nx=c(m(),1);var Hx=c(m(),1);var ac=c(m(),1),ur=c(C(),1);var Te=c(m(),1),XS=c(C(),1),YS=c(Ca(),1);var qx=c(m(),1);var yc=c(C(),1),wc=c(m(),1),Lc=c(C(),1);var Wx=c(m(),1),fo=c(C(),1),KS=c(Ca(),1);var Vx=c(m(),1),QS=c(m(),1),Gx=c(C(),1),Sc=c(m(),1),Xx=c(C(),1);var Yx=c(m(),1);var Kx=c(m(),1),eC=c(C(),1),Cc=c(m(),1),Qx=c(C(),1),tC=c(Ca(),1),aC=c(m(),1),tt=c(C(),1),$l=c(m(),1);var Ic=c(C(),1),e0=c(m(),1);var t0=c(C(),1);var a0=c(m(),1),r0=c(C(),1);var o0=c(m(),1);var i0=c(m(),1);var n0=c(m(),1);var l0=c(m(),1);var It=c(m(),1),d0=c(C(),1);var so=c(m(),1);var SC=c(m(),1),Ml=c(C(),1);var kc=c(m(),1),CC=c(m(),1),fr=c(C(),1);var c0=c(m(),1),Al=c(C(),1);var f0=c(m(),1),p0=c(C(),1);var Dl=c(m(),1);var PC=c(m(),1);var g0=c(m(),1);var m0=c(m(),1);var h0=c(m(),1),TC=c(C(),1);var v0=c(m(),1),x0=c(C(),1);var b0=c(m(),1),y0=c(m(),1);var nr=c(m(),1),L0=c(m(),1);var S0=c(m(),1);var C0=c(m(),1),FC=c(C(),1);var I0=c(m(),1);var OC=c(m(),1),Bl=c(C(),1);var k0=c(m(),1);var jC=c(m(),1),P0=c(C(),1);var lr=c(m(),1);var T0=c(m(),1),R0=c(C(),1);var E0=c(m(),1);var $0=c(m(),1);var WC=c(m(),1);var z0=c(m(),1),VC=c(C(),1),GC=c(m(),1),M0=c(C(),1),XC=c(m(),1),A0=c(m(),1);var QC=c(m(),1);var ZC=c(C(),1);var Pc=c(m(),1);var Tc=c(m(),1),Rc=c(C(),1),F0=c(C(),1),Ec=c(m(),1),$c=c(m(),1);var O0=c(m(),1),zc=c(C(),1);var tI=c(m(),1),j0=c(m(),1),_0=c(m(),1);var N0=c(m(),1);var Mc=c(m(),1),aI=c(m(),1),rI=c(m(),1);var H0=c(m(),1),U0=c(C(),1),q0=c(m(),1),oI=c(C(),1);var Ac=c(m(),1),Dc=c(C(),1);var Bc=c(m(),1),W0=c(m(),1),Fc=c(m(),1),V0=c(m(),1),G0=c(m(),1);var X0=c(m(),1);var Oc=c(m(),1);var jc=c(m(),1);var Y0=c(m(),1),_c=c(m(),1),K0=c(m(),1),iI=c(C(),1),Z0=c(m(),1),J0=c(m(),1),nI=c(C(),1);var eb=c(m(),1),tb=c(m(),1);var lI=c(m(),1);function Wh(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let a=document.implementation.createHTMLDocument(),r=a.createElement("base"),o=a.createElement("a");return a.head.appendChild(r),a.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}var Vh=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function St(e){let t=[];for(let a=0,r=e.length;a<r;a++)t.push(e[a]);return t}var to=null;function wl(e={}){return to||(e.includeStyleProperties?(to=e.includeStyleProperties,to):(to=St(window.getComputedStyle(document.documentElement)),to))}function yl(e,t){let r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function Qw(e){let t=yl(e,"border-left-width"),a=yl(e,"border-right-width");return e.clientWidth+t+a}function Zw(e){let t=yl(e,"border-top-width"),a=yl(e,"border-bottom-width");return e.clientHeight+t+a}function qd(e,t={}){let a=t.width||Qw(e),r=t.height||Zw(e);return{width:a,height:r}}function Gh(){let e,t;try{t=process}catch{}let a=t&&t.env?t.env.devicePixelRatio:null;return a&&(e=parseInt(a,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var Je=16384;function Xh(e){(e.width>Je||e.height>Je)&&(e.width>Je&&e.height>Je?e.width>e.height?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je):e.width>Je?(e.height*=Je/e.width,e.width=Je):(e.width*=Je/e.height,e.height=Je))}function ao(e){return new Promise((t,a)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=a,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function Jw(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Yh(e,t,a){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${a}`),o.setAttribute("viewBox",`0 0 ${t} ${a}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),Jw(o)}var Pe=(e,t)=>{if(e instanceof t)return!0;let a=Object.getPrototypeOf(e);return a===null?!1:a.constructor.name===t.name||Pe(a,t)};function e2(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function t2(e,t){return wl(t).map(a=>{let r=e.getPropertyValue(a),o=e.getPropertyPriority(a);return`${a}: ${r}${o?" !important":""};`}).join(" ")}function a2(e,t,a,r){let o=`.${e}:${t}`,i=a.cssText?e2(a):t2(a,r);return document.createTextNode(`${o}{${i}}`)}function Kh(e,t,a,r){let o=window.getComputedStyle(e,a),i=o.getPropertyValue("content");if(i===""||i==="none")return;let n=Vh();try{t.className=`${t.className} ${n}`}catch{return}let s=document.createElement("style");s.appendChild(a2(n,a,o,r)),t.appendChild(s)}function Qh(e,t,a){Kh(e,t,":before",a),Kh(e,t,":after",a)}var Zh="application/font-woff",Jh="image/jpeg",r2={woff:Zh,woff2:Zh,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Jh,jpeg:Jh,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function o2(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function ro(e){let t=o2(e).toLowerCase();return r2[t]||""}function i2(e){return e.split(/,/)[1]}function Ci(e){return e.search(/^(data:)/)!==-1}function Vd(e,t){return`data:${t};base64,${e}`}async function Gd(e,t,a){let r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((i,n)=>{let s=new FileReader;s.onerror=n,s.onloadend=()=>{try{i(a({res:r,result:s.result}))}catch(u){n(u)}},s.readAsDataURL(o)})}var Wd={};function n2(e,t,a){let r=e.replace(/\?.*/,"");return a&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function oo(e,t,a){let r=n2(e,t,a.includeQueryParams);if(Wd[r]!=null)return Wd[r];a.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{let i=await Gd(e,a.fetchRequestInit,({res:n,result:s})=>(t||(t=n.headers.get("Content-Type")||""),i2(s)));o=Vd(i,t)}catch(i){o=a.imagePlaceholder||"";let n=`Failed to fetch resource: ${e}`;i&&(n=typeof i=="string"?i:i.message),n&&console.warn(n)}return Wd[r]=o,o}async function l2(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):ao(t)}async function s2(e,t){if(e.currentSrc){let i=document.createElement("canvas"),n=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,n?.drawImage(e,0,0,i.width,i.height);let s=i.toDataURL();return ao(s)}let a=e.poster,r=ro(a),o=await oo(a,r,t);return ao(o)}async function u2(e,t){var a;try{if(!((a=e?.contentDocument)===null||a===void 0)&&a.body)return await Ii(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function d2(e,t){return Pe(e,HTMLCanvasElement)?l2(e):Pe(e,HTMLVideoElement)?s2(e,t):Pe(e,HTMLIFrameElement)?u2(e,t):e.cloneNode(ev(e))}var c2=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",ev=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function f2(e,t,a){var r,o;if(ev(t))return t;let i=[];return c2(e)&&e.assignedNodes?i=St(e.assignedNodes()):Pe(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?i=St(e.contentDocument.body.childNodes):i=St(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),i.length===0||Pe(e,HTMLVideoElement)||await i.reduce((n,s)=>n.then(()=>Ii(s,a)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function p2(e,t,a){let r=t.style;if(!r)return;let o=window.getComputedStyle(e);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):wl(a).forEach(i=>{let n=o.getPropertyValue(i);i==="font-size"&&n.endsWith("px")&&(n=`${Math.floor(parseFloat(n.substring(0,n.length-2)))-.1}px`),Pe(e,HTMLIFrameElement)&&i==="display"&&n==="inline"&&(n="block"),i==="d"&&t.getAttribute("d")&&(n=`path(${t.getAttribute("d")})`),r.setProperty(i,n,o.getPropertyPriority(i))})}function g2(e,t){Pe(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),Pe(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function m2(e,t){if(Pe(e,HTMLSelectElement)){let r=Array.from(t.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function h2(e,t,a){return Pe(t,Element)&&(p2(e,t,a),Qh(e,t,a),g2(e,t),m2(e,t)),t}async function v2(e,t){let a=e.querySelectorAll?e.querySelectorAll("use"):[];if(a.length===0)return e;let r={};for(let i=0;i<a.length;i++){let s=a[i].getAttribute("xlink:href");if(s){let u=e.querySelector(s),d=document.querySelector(s);!u&&d&&!r[s]&&(r[s]=await Ii(d,t,!0))}}let o=Object.values(r);if(o.length){let i="http://www.w3.org/1999/xhtml",n=document.createElementNS(i,"svg");n.setAttribute("xmlns",i),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let s=document.createElementNS(i,"defs");n.appendChild(s);for(let u=0;u<o.length;u++)s.appendChild(o[u]);e.appendChild(n)}return e}async function Ii(e,t,a){return!a&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>d2(r,t)).then(r=>f2(e,r,t)).then(r=>h2(e,r,t)).then(r=>v2(r,t))}var tv=/url\((['"]?)([^'"]+?)\1\)/g,x2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,b2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function y2(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function w2(e){let t=[];return e.replace(tv,(a,r,o)=>(t.push(o),a)),t.filter(a=>!Ci(a))}async function L2(e,t,a,r,o){try{let i=a?Wh(t,a):t,n=ro(t),s;if(o){let u=await o(i);s=Vd(u,n)}else s=await oo(i,n,r);return e.replace(y2(t),`$1${s}$3`)}catch{}return e}function S2(e,{preferredFontFormat:t}){return t?e.replace(b2,a=>{for(;;){let[r,,o]=x2.exec(a)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function Xd(e){return e.search(tv)!==-1}async function Ll(e,t,a){if(!Xd(e))return e;let r=S2(e,a);return w2(r).reduce((i,n)=>i.then(s=>L2(s,n,t,a)),Promise.resolve(r))}async function io(e,t,a){var r;let o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){let i=await Ll(o,null,a);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function C2(e,t){await io("background",e,t)||await io("background-image",e,t),await io("mask",e,t)||await io("-webkit-mask",e,t)||await io("mask-image",e,t)||await io("-webkit-mask-image",e,t)}async function I2(e,t){let a=Pe(e,HTMLImageElement);if(!(a&&!Ci(e.src))&&!(Pe(e,SVGImageElement)&&!Ci(e.href.baseVal)))return;let r=a?e.src:e.href.baseVal,o=await oo(r,ro(r),t);await new Promise((i,n)=>{e.onload=i,e.onerror=t.onImageErrorHandler?(...u)=>{try{i(t.onImageErrorHandler(...u))}catch(d){n(d)}}:n;let s=e;s.decode&&(s.decode=i),s.loading==="lazy"&&(s.loading="eager"),a?(e.srcset="",e.src=o):e.href.baseVal=o})}async function k2(e,t){let r=St(e.childNodes).map(o=>Yd(o,t));await Promise.all(r).then(()=>e)}async function Yd(e,t){Pe(e,Element)&&(await C2(e,t),await I2(e,t),await k2(e,t))}function av(e,t){let{style:a}=e;t.backgroundColor&&(a.backgroundColor=t.backgroundColor),t.width&&(a.width=`${t.width}px`),t.height&&(a.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(o=>{a[o]=r[o]}),e}var rv={};async function ov(e){let t=rv[e];if(t!=null)return t;let r=await(await fetch(e)).text();return t={url:e,cssText:r},rv[e]=t,t}async function iv(e,t){let a=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(a.match(/url\([^)]+\)/g)||[]).map(async n=>{let s=n.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),Gd(s,t.fetchRequestInit,({result:u})=>(a=a.replace(n,`url(${u})`),[n,u]))});return Promise.all(i).then(()=>a)}function nv(e){if(e==null)return[];let t=[],a=/(\/\*[\s\S]*?\*\/)/gi,r=e.replace(a,""),o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=o.exec(r);if(u===null)break;t.push(u[0])}r=r.replace(o,"");let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,n="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(n,"gi");for(;;){let u=i.exec(r);if(u===null){if(u=s.exec(r),u===null)break;i.lastIndex=s.lastIndex}else s.lastIndex=i.lastIndex;t.push(u[0])}return t}async function P2(e,t){let a=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{St(o.cssRules||[]).forEach((i,n)=>{if(i.type===CSSRule.IMPORT_RULE){let s=n+1,u=i.href,d=ov(u).then(p=>iv(p,t)).then(p=>nv(p).forEach(h=>{try{o.insertRule(h,h.startsWith("@import")?s+=1:o.cssRules.length)}catch(v){console.error("Error inserting rule from remote css",{rule:h,error:v})}})).catch(p=>{console.error("Error loading remote css",p.toString())});r.push(d)}})}catch(i){let n=e.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(ov(o.href).then(s=>iv(s,t)).then(s=>nv(s).forEach(u=>{n.insertRule(u,n.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{St(o.cssRules||[]).forEach(i=>{a.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${o.href}`,i)}}),a))}function T2(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Xd(t.style.getPropertyValue("src")))}async function R2(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let a=St(e.ownerDocument.styleSheets),r=await P2(a,t);return T2(r)}function lv(e){return e.trim().replace(/["']/g,"")}function E2(e){let t=new Set;function a(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(i=>{t.add(lv(i))}),Array.from(r.children).forEach(i=>{i instanceof HTMLElement&&a(i)})}return a(e),t}async function sv(e,t){let a=await R2(e,t),r=E2(e);return(await Promise.all(a.filter(i=>r.has(lv(i.style.fontFamily))).map(i=>{let n=i.parentStyleSheet?i.parentStyleSheet.href:null;return Ll(i.cssText,n,t)}))).join(`
`)}async function uv(e,t){let a=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await sv(e,t);if(a){let r=document.createElement("style"),o=document.createTextNode(a);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function $2(e,t={}){let{width:a,height:r}=qd(e,t),o=await Ii(e,t,!0);return await uv(o,t),await Yd(o,t),av(o,t),await Yh(o,a,r)}async function dv(e,t={}){let{width:a,height:r}=qd(e,t),o=await $2(e,t),i=await ao(o),n=document.createElement("canvas"),s=n.getContext("2d"),u=t.pixelRatio||Gh(),d=t.canvasWidth||a,p=t.canvasHeight||r;return n.width=d*u,n.height=p*u,t.skipAutoScale||Xh(n),n.style.width=`${d}`,n.style.height=`${p}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,n.width,n.height)),s.drawImage(i,0,0,n.width,n.height),n}var mv={};var lc={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},sc={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},ve={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},no={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},At={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},Ct={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},D2={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},ki={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Sl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Dt={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},bv={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},yv={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Zd={zero:"0deg",half:"180deg",full:"360deg"},Pl={horizontal:"90deg",diagonal:"135deg"},De={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},or={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Fe={sm:`@media (max-width: ${or.sm}px)`,smPlus:`@media (max-width: ${or.smPlus}px)`,md:`@media (max-width: ${or.md}px)`,mdWide:`@media (max-width: ${or.mdWide}px)`,lg:`@media (max-width: ${or.lg}px)`,xl:`@media (max-width: ${or.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},et={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},B2={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},F2={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Kd={press:.95,drag:.985,hoverLift:1.04},O2={landscape:"4 / 3"},j2={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},lo={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function wv(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Dt.xs,md:Dt.md,lg:Dt["2xl"],xl:Dt["4xl"],pill:Dt.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:or,motion:De,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var $a=wv("portalDark",lc,bv),_2=wv("portalLight",sc,yv);var iP=(0,Pi.createContext)(null);var Qt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,xe=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,uc=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,lP=L`
  ${Qt}
  border-radius: var(--ig-radius-4xl);
  overflow: hidden;
`,dr=L`
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
`,Ti=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,q2=L`
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

  ${Ti}
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

  ${Ti}
`,W2=L`
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

  ${Ti}
`,V2=L`
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

  ${Ti}
`,G2=L`
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

  ${Ti}
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
`,X2=L`
  ${Sv}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,Y2=L`
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
`,K2=L`
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
`,Q2=L`
  ${kv}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,Z2=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Pv=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,J2=L`
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
`,eL={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function tL(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var aL={"--ig-radius-2xs":Dt["2xs"],"--ig-radius-xxs":Dt.xxs,"--ig-radius-xs":Dt.xs,"--ig-radius-sm":$a.radius.sm,"--ig-radius-md":$a.radius.md,"--ig-radius-lg":$a.radius.lg,"--ig-radius-xl":$a.radius.xl,"--ig-radius-2xl":Dt["2xl"],"--ig-radius-4xl":Dt["4xl"],"--ig-radius-pill":$a.radius.pill,"--ig-font-sans":$a.typography.fontSans,"--ig-font-mono":$a.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(ve.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(ve.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(ve.svgFillSoft),"--ig-opacity-svg-fill-medium":String(ve.svgFillMedium),"--ig-opacity-dim":String(ve.dim),"--ig-opacity-dim-soft":String(ve.dimSoft),"--ig-opacity-ghost":String(ve.ghost),"--ig-opacity-faded":String(ve.faded),"--ig-opacity-disabled":String(ve.disabled),"--ig-opacity-overlay":String(ve.overlay),"--ig-opacity-muted":String(ve.muted),"--ig-opacity-subtle":String(ve.subtle),"--ig-opacity-emphatic":String(ve.emphatic),"--ig-opacity-loud":String(ve.loud),"--ig-opacity-loud-plus":String(ve.loudPlus),"--ig-opacity-prominent":String(ve.prominent),"--ig-opacity-near":String(ve.near),"--ig-blur-2xs":no.blur2xs,"--ig-blur-xs":no.blurXs,"--ig-blur-sm":no.blurSm,"--ig-blur-md":no.blurMd,"--ig-blur-lg":no.blurLg,"--ig-blur-xl":no.blurXl,"--ig-icon-xs":At.xs,"--ig-icon-sub":At.sub,"--ig-icon-2xs":At["2xs"],"--ig-icon-sm":At.sm,"--ig-icon-sm-plus":At.smPlus,"--ig-icon-md":At.md,"--ig-icon-lg":At.lg,"--ig-icon-xl":At.xl,"--ig-icon-2xl":At["2xl"],"--ig-icon-3xl":At["3xl"],"--ig-svg-stroke-bold":String(D2.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":Sl["1px"],"--ig-border-1_5px":Sl["1_5px"],"--ig-border-2px":Sl["2px"],"--ig-border-3px":Sl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Kd.press),"--ig-scale-drag":String(Kd.drag),"--ig-scale-hover-lift":String(Kd.hoverLift),"--ig-aspect-landscape":O2.landscape,"--ig-control-height-xs":et.xs,"--ig-control-height-xs-plus":et.xsPlus,"--ig-control-height-sm":et.sm,"--ig-control-height-sm-plus":et.smPlus,"--ig-control-height-md":et.md,"--ig-control-height-mid-plus":et.midPlus,"--ig-control-height-mid-plus-tall":et.midPlusTall,"--ig-control-height-2xl-wide":et["2xlWide"],"--ig-control-height-lg":et.lg,"--ig-control-height-xl":et.xl,"--ig-control-height-2xl":et["2xl"],"--ig-control-height-3xl":et["3xl"],"--ig-control-height-3xl-plus":et["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":De.fastest,"--ig-motion-swift":De.swift,"--ig-motion-fast":De.fast,"--ig-motion-fast-ease":De.fastEase,"--ig-motion-normal":De.normal,"--ig-motion-normal-ease":De.normalEase,"--ig-motion-mobile-nav":De.mobileNav,"--ig-motion-spinner":De.spinner,"--ig-motion-spinner-fast":De.spinnerFast,"--ig-motion-spinner-slow":De.spinnerSlow,"--ig-motion-progress-bar":De.progressBar,"--ig-motion-sync-spin":De.syncSpin,"--ig-motion-shimmer":De.shimmer,"--ig-motion-skeleton":De.skeleton};function Jd(e="dark"){return{...aL,...tL(e==="light"?_2:$a,e==="light"?sc:lc,e==="light"?yv:bv,e==="light")}}var pP=Jd("dark");function Qd(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function rL(){let e=Jd("dark"),t=Jd("light");return[Qd(":root",eL),Qd(":root, :root[data-theme='dark']",e),Qd(":root[data-theme='light']",t)].join(`
`)+`
`}var mP=Ih`
  ${rL()}

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
`;function sr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function Il(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var oL=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${sr(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${sr(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${Il(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${Il(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function iL({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Rv.jsx)(oL,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var nL=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function ec({gap:e,align:t,justify:a,as:r,...o}){return(0,Ev.jsx)(nL,{as:r,$gap:e,$align:t,$justify:a,...o})}var xP=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var bP=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${Il(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var yP=l.div`
  width: 100%;
  max-width: ${e=>Il(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>sr(e.$padding)??"var(--ig-space-11)"};
`;var lL={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},sL={default:void 0,mono:"var(--ig-font-mono)"},uL={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},cv={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function dL(e){return typeof e=="string"?uL[e]:e??"var(--ig-font-weight-regular)"}function cL(e){if(e)return e in cv?cv[e]:e}var fL=l.span`
  margin: 0;
  color: ${e=>lL[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&sL[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function zv({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,$v.jsx)(fL,{as:e,$tone:t,$size:a,$weight:dL(r),$align:o,$uppercase:i,$letterSpacing:cL(n),$fontFamily:s,$tabularNums:u,...d})}var SP=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function gL(e){return(0,Mv.jsx)(zv,{size:"var(--ig-font-size-sm)",...e})}var IP=l.div`
  ${e=>e.$elevation==="raised"?xe:e.$elevation==="card"?uc:Qt}
  border-radius: ${e=>sr(e.$radius)??"var(--ig-radius-2xl)"};
`;var PP=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,TP=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,RP=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??Ct.lg}px`};
  height: ${e=>`${e.$size??Ct.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var yL={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function Dv(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Fv=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${yL[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?Y2:e.$variant==="secondary"?G2:V2:e.$variant==="ghost"?X2:e.$variant==="secondary"?Lv:e.$variant==="accent"?W2:q2}
`,uo=Bv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let v="Button",y=d??(u&&u!==v?u:void 0);return(0,Ov.jsxs)(Fv,{ref:h,$variant:Dv(t,a),$size:r,$tone:o,...p,"data-ig-component":v,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),Re=jv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,_v.jsx)(Fv,{ref:d,type:"button",$variant:Dv(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),zP=l(Re).attrs({variant:"secondary",size:"sm"})`
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
`,wL={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},LL={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},SL=l.button`
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
  font-size: ${e=>wL[e.$size]};
  color: ${e=>LL[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,za=(0,Nv.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,Hv.jsxs)(SL,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),DP=l(Re).attrs({variant:"secondary",size:"sm"})`
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
`,BP=l.span`
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
`;var CL={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},qv=l.input`
  ${dr}
  ${e=>CL[e.$size]}
`,Ma=(0,dc.forwardRef)(({size:e="md",...t},a)=>(0,cc.jsx)(qv,{ref:a,$size:e,...t}));Ma.displayName="TextField";var OP=l.textarea`
  ${dr}
`,IL=(0,dc.forwardRef)(({size:e="md",...t},a)=>(0,cc.jsx)(qv,{ref:a,$size:e,type:"password",...t}));IL.displayName="PasswordField";var kL={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},PL=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>kL[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,_P=(0,Wv.forwardRef)(function({variant:t="default",minHeight:a=B2.midPlusTall,...r},o){return(0,Vv.jsx)(PL,{ref:o,$variant:t,$minHeight:a,...r})}),TL=l.input.attrs({type:"color"})`
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
`,HP=(0,Gv.forwardRef)(function(t,a){return(0,Xv.jsx)(TL,{ref:a,...t})}),RL={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},EL=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>RL[e.$orientation]}
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
`,qP=(0,Yv.forwardRef)(function({orientation:t="vertical",...a},r){return(0,Kv.jsx)(EL,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),$L={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},zL=l.div`
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
  ${e=>$L[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${Pl.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,VP=(0,Qv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,Zv.jsx)(zL,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),YP=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var KP=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,QP=l.input`
  ${dr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,ZP=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,JP=l.button`
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
`;var tT=l.div`
  position: relative;
`,aT=l.button`
  ${dr}
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
`,rT=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,oT=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Zd.half})`:`rotate(${Zd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,iT=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,nT=l.button`
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
`,lT=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,sT=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,uT=l.select`
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
`;var cT=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,fT=l.input`
  ${dr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,pT=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,gT=l.button`
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
`;var hT=l.div`
  position: relative;
  width: 100%;
`,vT=l.textarea`
  ${dr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,xT=l.div`
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
`,bT=l.button`
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
`,yT=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,wT=l.span`
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
`,NL=l.span`
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
`,HL=l.span`
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
`,UL=l.span`
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
`,ST=ir.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),v=ir.default.useRef(null);ir.default.useImperativeHandle(d,()=>v.current),ir.default.useEffect(()=>{v.current&&(v.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,Be.jsxs)(fc,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,Be.jsx)(pc,{ref:v,type:"checkbox",checked:a,disabled:r,...u}),(0,Be.jsx)(HL,{$checked:!!y,$disabled:r,children:o?(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),CT=ir.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,Be.jsxs)(fc,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,Be.jsx)(pc,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Be.jsx)(UL,{$checked:!!a,$disabled:r}),t]})}),IT=ir.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Be.jsxs)(fc,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Be.jsx)(pc,{ref:s,type:"checkbox",checked:t,...n}),(0,Be.jsx)(NL,{$checked:t}),a]})});var PT=l.input`
  display: none;
`,GL={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},TT={...GL,cursor:"pointer"};var ET=l.button`
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
`;var zT=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,MT=l.button`
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
`;var DT=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Fe.sm} {
    grid-template-columns: 1fr;
  }
`,BT=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,FT=l.div`
  min-width: 0;
`,OT=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var jT=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,_T=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var HT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,UT=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var YL={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},KL=l.div`
  ${xe}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>YL[e.$variant]}
`,VT=(0,dx.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,cx.jsx)(KL,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var GT={minWidth:ki.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},XT=l.button`
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
`;var KT=l.button`
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
`,JT=l.label`
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
`;var t4=l.button`
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
`;var JL={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},eS={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},tS=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":eS[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>JL[e.$size]}
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
`,o4=(0,mx.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,hx.jsxs)(tS,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var i4=l.button`
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
`,n4=l.div`
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
`;var aS={bottom:L`
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
  `},s4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>aS[e.$placement]}
`,u4=l.div`
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
`,rS={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},d4=l.button`
  flex-shrink: 0;
  ${e=>rS[e.$size]}
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
`,c4=l.span`
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
`;var p4=l.button`
  ${dr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,g4=l.span`
  color: var(--ig-color-text-soft);
`,m4=l.div`
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
`;var iS=l.div`
  ${xe}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,x4=l.div`
  ${xe}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,nS=l.div`
  ${xe}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Lx=(0,yx.forwardRef)(({anchor:e,style:t,...a},r)=>(0,wx.jsx)(nS,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Lx.displayName="MenuPopover";var b4=l.div`
  ${xe}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,y4=l(iS)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,L4=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,S4=l.span`
  ${({$tone:e,tone:t})=>{let a=j2[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,C4=l(Lx)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var I4=l.div`
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
`;var P4=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,T4=l.button`
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
`;var sS={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},Ri=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>sS[e.$tone??"neutral"]};
`,$4=l(Ri)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,M4=l.p`
  ${Pv}
  ${Tv}
  margin: 0;
`,D4=l.div`
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
`;var dS=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,cS=l.span`
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
`;function Cx({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,El.jsxs)(dS,{className:o,style:i,children:[e,!a&&t!=null?(0,El.jsx)(cS,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var tc=20,Ix=120,pS=Ix*Math.PI/180,gS=tc/Math.sin(pS),mS=Mt`
  from { background-position: 0 0; }
  to   { background-position: ${gS.toFixed(3)}px 0; }
`,hS=L`
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
    animation: ${mS} var(--ig-motion-shimmer) linear infinite;
  }
`,vS=Mt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,xS={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},O4=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,j4=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>xS[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${vS} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&hS}
`;var N4={display:"flex",width:"100%",height:Ct["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},H4=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var bS=L`
  background:
    linear-gradient(
      ${Pl.horizontal},
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
`,q4=l.div.attrs({"aria-hidden":!0})`
  ${bS}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,yS=l.div`
  ${({$tone:e="info"})=>L`
    background: ${lo[e].background};
    border-color: ${lo[e].border};
    color: ${lo[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,V4=l(yS)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,LS=Mt`
  to { transform: rotate(${Zd.full}); }
`,X4={sm:Ct.sm,md:Ct.lg,lg:Ct["3xl"]};var Y4=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${LS} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var SS=Mt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,CS=Mt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,Q4=l.div`
  ${({$tone:e})=>L`
    background: ${lo[e].background};
    border-color: ${lo[e].border};
    color: ${lo[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?CS:SS} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,Z4=l.span`
  flex: 1;
`,J4=l.button`
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
`,eR=l.button`
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
`,tR=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,aR=(0,cr.createContext)(()=>{});var oR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,iR=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,IS=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,nR=l(IS)``,lR=l.div`
  flex: 1;
`,sR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var dR=l.div`
  ${Tv}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,cR=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,fR=l.div`
  ${Pv}
`,pR=l.div`
  ${J2}
  max-width: var(--ig-popup-md);
`,gR=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var hR=l.div`
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
`,vR=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,xR=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,bR=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var wR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,LR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,SR=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,CR=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var kR=l.span`
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
`;var TS={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},RS=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>TS[e.$variant]}
`,TR=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,ES=Mt`from { opacity: 0 } to { opacity: 1 }`,RR=l(RS)`
  animation: ${ES} var(--ig-motion-fast);
`;var $R=l.div`
  ${xe}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var Cl=l.span`
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
`,MR=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,AR=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${Cl}:hover &,
          ${Cl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${Cl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${Cl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var zS={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},BR=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>zS[e.$tone]};
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
`,OR=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:Dx}
`,jR=l.div`
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
`,_R=l.button`
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
`;var NR=l.div`
  ${Dx}
`,Bx={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},UR=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Bx[e.$radius].root};
`,qR=l.div`
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
`,WR=l.button`
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
`,VR=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,GR=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,XR=l.span`
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
`;var KR=l.header`
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
`;var QR=l.div`
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
`,ZR=l.aside`
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
`;var JR=l.button`
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
`;var e8=l.button`
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
`;var t8={marginLeft:"auto",minWidth:Ct.xl,height:Ct.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var r8=l.div`
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
`,o8=l.button`
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
`;var FS=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Ux=l.div`
  ${xe}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,n8=l(Ux)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,OS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,jS=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,_S=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,l8=l.aside`
  ${xe}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,NS=l(Re)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function HS({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,ac.jsx)(NS,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,ac.jsx)(Ae,{size:Ct.md})})}var US='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',qS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,WS={margin:0,lineHeight:"var(--ig-line-height-loose)"};function VS({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,ur.useId)(),u=(0,ur.useRef)(null);return(0,ur.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,ur.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let v=Array.from(h.querySelectorAll(US)).filter(w=>w.offsetParent!==null);if(v.length===0){p.preventDefault(),h.focus();return}let y=v[0],b=v[v.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,Te.jsx)(FS,{onClick:()=>o?.(),children:(0,Te.jsxs)(Ux,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,Te.jsxs)(OS,{children:[(0,Te.jsx)(jS,{id:s,children:e}),o?(0,Te.jsx)(HS,{onClick:()=>o()}):null]}),(0,Te.jsxs)(qS,{children:[t?(0,Te.jsx)(gL,{as:"p",tone:"muted",style:WS,children:t}):null,a,r?(0,Te.jsx)(_S,{children:r}):null]})]})})}function GS({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,Te.jsx)(VS,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)(uo,{type:"button",variant:"secondary",onClick:i,children:r}),(0,Te.jsx)(uo,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var f8=l.div`
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
`,p8=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,g8=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,m8=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,h8=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var x8=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,b8=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${xe}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,y8=l.div`
  position: relative;
  display: block;
  width: 100%;
`,w8=l.button`
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
`,L8=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${xe}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,S8=l.button`
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
`;var C8={minWidth:ki.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var k8=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var T8=l.div`
  ${xe}
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
`,R8=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var E8={display:"inline-flex",alignItems:"center",justifyContent:"center",width:Ct.md,height:Ct.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var ZS=l.div`
  ${xe}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,JS=(0,Xx.forwardRef)(({anchor:e,width:t=ki.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,Yx.jsx)(ZS,{ref:o,$width:t,style:{...i,...a},...r})});JS.displayName="FilterPopover";var M8=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,A8=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,D8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var B8={minWidth:ki.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var Zx=(0,tt.createContext)(null);function zl(){let e=(0,tt.useContext)(Zx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function Jx({children:e}){let[t,a]=(0,tt.useState)(null),r=(0,tt.useRef)(null);r.current=t;let o=(0,tt.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,tt.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,tt.useMemo)(()=>o,[o]);return(0,$l.jsxs)(Zx.Provider,{value:n,children:[e,t?(0,$l.jsx)(GS,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var O8=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,j8=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,rC=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,oC=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,_8=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,N8=l(rC)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,H8=l(oC)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,U8=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,q8=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,iC=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,nC=L`
  transition: transform var(--ig-motion-normal);
`,W8=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&iC}
  ${e=>e.$isAnimating&&nC}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,V8=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var X8=l.section`
  ${Qt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,Y8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,lC=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,Q8=t0.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,a0.jsx)(lC,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),sC=l.div`
  ${Qt}
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
`,J8=r0.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,o0.jsx)(sC,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),tE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var rE=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var uC={panel:Qt,card:uc,raised:xe},dC=l.div`
  ${e=>uC[e.$elevation]}
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
`;function s0({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,l0.jsx)(dC,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var cC=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,fC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,pC=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,gC=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,mC=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,hC=l.textarea`
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
`,vC=l.div`
  display: flex;
  justify-content: flex-end;
`,xC=l.button`
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
`;function u0({author:e,timestamp:t,body:a,actions:r}){return(0,It.jsxs)(cC,{children:[(0,It.jsxs)(fC,{children:[(0,It.jsx)(pC,{children:e}),t&&(0,It.jsx)("span",{children:t}),r]}),(0,It.jsx)(gC,{children:a})]})}function po({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,It.jsxs)(mC,{children:[(0,It.jsx)(hC,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,It.jsx)(vC,{children:(0,It.jsx)(xC,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var bC=l.button`
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
`,yC=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,wC=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,LC=(0,d0.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,so.jsxs)(bC,{ref:n,type:o??"button",$active:a,...i,children:[(0,so.jsx)(px,{$color:e,$size:"sm"}),(0,so.jsx)(yC,{children:t}),r!=null&&(0,so.jsx)(wC,{children:r})]}));LC.displayName="TagListItem";var sE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var dE=l.div`
  position: relative;
  width: 100%;
`,cE=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,fE=l.div`
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
`,pE=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,gE=l.button`
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
`;var hE=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,vE=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,xE=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,bE=(0,fr.createContext)(null);var wE=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,LE=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,SE=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var IC=l.button`
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
`,kC=(0,p0.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,Dl.jsxs)(IC,{ref:o,type:a??"button",...r,children:[e&&(0,Dl.jsx)(px,{$color:e,$size:"xs"}),t]}));kC.displayName="ActionChip";var kE=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,PE=l.kbd`
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
`;var RE=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,EE=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,$E=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var ME=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var DE=l.li`
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
`;var FE=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var RC=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,EC=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,$C=l.button`
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

  ${e=>e.$variant==="flat"?RC:EC}

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
`,zC=(0,x0.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,b0.jsx)($C,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});zC.displayName="SelectableListItem";var MC={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},AC={flexShrink:0},DC={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},BC=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function w0({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,nr.jsxs)(ec,{as:"aside",gap:0,className:o,style:MC,children:[(0,nr.jsx)(iL,{style:AC,children:e}),t?(0,nr.jsxs)(ec,{gap:3,style:DC,children:[(0,nr.jsx)(zv,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,nr.jsx)(BC,{children:i},n):null)]})}var NE=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var UE=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${Pl.diagonal},
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
`;var VE=l.button`
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
`,GE=l.div`
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
`;var YE=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${Pl.diagonal},
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
`;var QE=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var JE=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var _C=l.button`
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
`,NC=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,HC=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,UC=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,qC=(0,P0.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,lr.jsxs)(_C,{ref:i,type:r??"button",...o,children:[(0,lr.jsxs)(NC,{children:[(0,lr.jsx)("span",{children:e}),t!=null&&(0,lr.jsx)(HC,{children:t})]}),(0,lr.jsx)(UC,{children:a})]}));qC.displayName="OptionRow";var a$=l.span`
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
`,o$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var n$=l.table`
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
`,l$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var u$=l.table`
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
`;var c$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,f$=l.div`
  ${Qt}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,p$=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,g$=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var m$={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},v$=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var b$=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var w$=l.div`
  ${K2}
  height: 100%;
  min-height: 0;
`,L$=l.header`
  ${Q2}
  flex-shrink: 0;

  ${Fe.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,S$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,C$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,I$=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Fe.md} {
    font-size: var(--ig-font-size-xl);
  }
`,k$=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,P$=l.div`
  ${Z2}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Fe.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,YC=l.section`
  ${Qt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,T$=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,R$=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,E$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,$$=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,KC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,z$=l(KC)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Fe.md} {
    grid-template-columns: 1fr;
  }
`,M$=l(YC)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,A$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,D$=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,B$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,O$=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`;var j$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,_$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,N$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,H$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,q$=l.nav`
  ${Qt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,W$=l.aside`
  ${Qt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,V$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,G$=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,X$=l.div`
  ${kv}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,Y$=l.aside`
  ${xe}
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
`,Q$=l.aside`
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
`,Z$=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${D0}:hover & { opacity: 0; }
  `}
`,J$=l.span`
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
`,ez=l.button`
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
`,tz=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,az=l.nav`
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
`,rz=l.a`
  ${B0}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,oz=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,iz=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,nz=l.button`
  ${B0}
`,lz=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,sz=l.span`
  display: contents;
`;var dz=l.div`
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
`,cz=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,fz=l.div`
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
`,pz=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,gz=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,mz=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,hz=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,vz=ki.md;var JC=11;var eI=3,xz=JC+eI*2;var yz=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,wz=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,Lz=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,Sz=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,Cz=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var Tz=l.div`
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
`,Rz=l.span`
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
`;var Ez=l.div`
  ${xe}
  position: absolute;
  top: calc(100% + var(--ig-space-3));
  left: 0;
  z-index: var(--ig-z-popover);
  width: 100%;
  box-sizing: border-box;
  padding: var(--ig-space-5);
  border-radius: var(--ig-radius-lg);
  box-shadow: var(--ig-shadow-popover);
`,$z=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,zz=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,Mz=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,Az=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,Dz=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,Bz=l(Ma).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,Fz=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,Oz=l(Ma).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,jz=l.input`
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
`,_z=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var Nz=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,Hz=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,Uz=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,qz=l.button`
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
`,Wz=l(Ma).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,Vz=l(uo).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var Xz=l.section`
  ${xe}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,Yz=l.h3`
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
`,Kz=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var Zz=l.label`
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
`,Jz=l.div`
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
`;var tM=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var rM=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var iM=l.div`
  ${uc}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,nM=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function Q0({children:e,className:t}){return(0,K0.jsx)(ec,{gap:3,className:t,children:e})}var sM=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var dM=new URL("./assets/favicon.ico","http://localhost/").href,cM=new URL("./assets/favicon.png","http://localhost/").href,fM=new URL("./assets/brand-mark.png","http://localhost/").href,pM=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var gM=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function sI(){try{if(typeof mv<"u"&&mv.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var pv=(...e)=>{},gv=sI(),mM={debug:gv?console.debug.bind(console):pv,log:gv?console.log.bind(console):pv,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var vM=F2.canvasExportBg;var Zt=c(C(),1);function ab(e){let[,t]=(0,Zt.useReducer)(a=>a+1,0);(0,Zt.useEffect)(()=>e.subscribe(t),[e])}function go(e){let[t,a]=(0,Zt.useState)(null);return(0,Zt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function rb(){let[,e]=(0,Zt.useReducer)(t=>t+1,0);(0,Zt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var Aa=c(C(),1);var ib=c(m(),1),uI=500,dI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,Fl=e=>e instanceof Element&&e.id!==Zr&&e!==document.documentElement&&e!==document.body;function ob({active:e,onPick:t}){let[a,r]=(0,Aa.useState)(null),o=go(a),i=(0,Aa.useRef)({x:-1,y:-1}),n=(0,Aa.useRef)(e);return n.current=e,(0,Aa.useEffect)(()=>{e||r(null)},[e]),(0,Aa.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!Fl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(Fl(b)?b:null)})},p=b=>{!n.current||!Fl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,v=()=>clearTimeout(h),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:z}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(w,z);Fl(g)&&t(g,w,z)},uI)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",v,{passive:!0}),document.addEventListener("touchend",v),document.addEventListener("touchcancel",v),()=>{cancelAnimationFrame(u),v(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",v)}},[t]),o?(0,ib.jsx)(dI,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var nb=c(m(),1),cI=l.div`
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
`;function Nc({el:e}){let t=go(e);return t?(0,nb.jsx)(cI,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var lb=c(C(),1);var R={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteCommentAria:"Delete comment",editCommentAria:"Edit comment",save:"Save",deleteThreadTitle:"Delete this comment thread?",deleteCommentTitle:"Delete this comment?",deleteLastCommentHint:"This is the last comment \u2014 the thread will be deleted.",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareThumbHint:"Click to compare before / after",before:"Before",after:"After",captureFailed:"Could not capture the current view",zoomHint:"Click to enlarge",zoomBack:"Back to side-by-side",versionChipTitle:"Site version when this was written",defaultAuthor:"Guest"};var pr=c(m(),1),Ol="#f59e0b",fI=l.button`
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
  background: ${Ol};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,pI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${Ol};
  background: color-mix(in srgb, ${Ol} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${Ol};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function sb({store:e,onPinClick:t}){rb();let[a,r]=(0,lb.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ta(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),v=`${Math.round(p/8)}:${Math.round(h/8)}`,y=o.get(v)??0;o.set(v,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,pr.jsx)(fI,{className:"fbw-pin",type:"button",title:Li(n),style:{left:w,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${R.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,pr.jsxs)(pr.Fragment,{children:[i,a&&(0,pr.jsx)(pI,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var Hc=c(C(),1);var gI=800,mI=.8;function hI(e){let t=e.closest("section, article, header, footer, nav, aside");return!t||t===document.body||t===document.documentElement?e:t}async function Ei(e){try{if(!document.createElement("canvas").getContext("2d"))return;let t=await dv(hI(e),{pixelRatio:1});if(t.width===0||t.height===0)return;let a=Math.min(1,gI/t.width),r=document.createElement("canvas");r.width=Math.round(t.width*a),r.height=Math.round(t.height*a);let o=r.getContext("2d");return o?(o.fillStyle="#ffffff",o.fillRect(0,0,r.width,r.height),o.drawImage(t,0,0,r.width,r.height),r.toDataURL("image/jpeg",mI)):void 0}catch{return}}var mo=c(C(),1);var ub=c(m(),1),vI=340,xI=l.div`
  position: fixed;
  width: ${vI}px;
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
`;function jl({targetEl:e,point:t,children:a}){let r=(0,mo.useRef)(null),o=go(e??null),[i,n]=(0,mo.useState)(null);return(0,mo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,v=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:v}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,ub.jsx)(xI,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var _l=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Nl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var Bt=c(m(),1),bI=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function db({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,Hc.useState)(""),[u,d]=(0,Hc.useState)(e.author),p=async()=>{let h=n.trim();if(!h)return;let v=u.trim()||R.defaultAuthor;e.author=v;let y=new Date().toISOString(),b=await Ei(t),w={id:rr(),createdAt:y,anchor:a,resolved:!1,comments:[{id:rr(),author:v,body:h,createdAt:y,version:Pa.version,shot:b}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(w),i(w)};return(0,Bt.jsxs)(jl,{targetEl:t,point:r,children:[(0,Bt.jsxs)(_l,{className:"fbw-composer",children:[(0,Bt.jsx)(Nl,{children:R.composerTitle}),(0,Bt.jsx)(Re,{variant:"ghost",size:"sm","aria-label":R.close,onClick:o,children:(0,Bt.jsx)(Ae,{size:16})})]}),(0,Bt.jsxs)(bI,{children:[R.composerTarget,": ",a.textSnippet||a.selector]}),(0,Bt.jsx)(Ma,{size:"sm",placeholder:R.namePlaceholder,"aria-label":R.nameAria,value:u,onChange:h=>d(h.target.value)}),(0,Bt.jsx)(po,{value:n,onChange:s,onSubmit:p,placeholder:R.composerPlaceholder,submitLabel:R.post})]})}var Ul=c(C(),1);var Hl=c(C(),1);var le=c(m(),1),yI=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 55%, transparent);
`,wI=l.div`
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
`,LI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`,SI=l.div`
  display: flex;
  align-items: flex-start;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,Uc=l.figcaption`
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
`,cb=l.figure`
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
`,CI=l.img`
  display: block;
  max-width: 100%;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  cursor: zoom-out;
`,II=l.div`
  padding: var(--ig-space-7);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  border: var(--ig-border-1px) dashed var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
`;function fb({before:e,after:t,onClose:a}){let[r,o]=(0,Hl.useState)(null);(0,Hl.useEffect)(()=>{let n=s=>{s.key==="Escape"&&o(u=>u?null:(a(),u))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[a]);let i=r==="before"?e:t;return(0,le.jsx)(yI,{className:"fbw-area-compare",onClick:a,children:(0,le.jsxs)(wI,{onClick:n=>n.stopPropagation(),children:[(0,le.jsxs)(LI,{children:[(0,le.jsxs)("span",{children:[R.before," / ",R.after]}),r&&(0,le.jsx)(za,{tone:"muted",onClick:()=>o(null),children:R.zoomBack}),(0,le.jsx)(Re,{variant:"ghost",size:"sm","aria-label":R.close,onClick:a,children:(0,le.jsx)(Ae,{size:16})})]}),r&&i?(0,le.jsxs)("figure",{style:{margin:0},children:[(0,le.jsx)(Uc,{$after:r==="after",children:r==="after"?R.after:R.before}),(0,le.jsx)(CI,{src:i,alt:r,onClick:()=>o(null)})]}):(0,le.jsxs)(SI,{children:[(0,le.jsxs)(cb,{children:[(0,le.jsx)(Uc,{children:R.before}),(0,le.jsx)("img",{className:"fbw-shot-before",src:e,alt:R.before,title:R.zoomHint,onClick:()=>o("before")})]}),(0,le.jsxs)(cb,{children:[(0,le.jsx)(Uc,{$after:!0,children:R.after}),t?(0,le.jsx)("img",{className:"fbw-shot-after",src:t,alt:R.after,title:R.zoomHint,onClick:()=>o("after")}):(0,le.jsx)(II,{children:R.captureFailed})]})]})]})})}var qc=c(C(),1);var gb=c(m(),1),kI=l.span`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  border: var(--ig-border-1px) solid
    ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-border-subtle)"};
  color: ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`;function pb({version:e,changed:t}){return(0,gb.jsx)(kI,{className:"fbw-verchip",title:R.versionChipTitle,$changed:t,children:e})}var ce=c(m(),1),PI=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`,TI=l.button`
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
`,RI=l.span`
  position: absolute;
  right: var(--ig-space-2);
  bottom: var(--ig-space-2);
  padding: 1px var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-accent-strong);
  color: var(--ig-color-on-accent);
  font-size: var(--ig-font-size-3xs, 10px);
  font-weight: var(--ig-font-weight-bold);
`,EI=l.div`
  display: flex;
  justify-content: flex-start;
`,$I=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function mb({store:e,thread:t,comment:a,prevVersion:r,onCompare:o}){let i=zl(),[n,s]=(0,qc.useState)(!1),[u,d]=(0,qc.useState)(a.body),p=()=>{let v=u.trim();v&&(e.updateComment(t.id,a.id,v),s(!1))},h=async()=>{let v=t.comments.length===1;await i({title:R.deleteCommentTitle,description:v?R.deleteLastCommentHint:a.body,confirmLabel:R.delete,cancelLabel:R.cancel,danger:!0})&&e.removeComment(t.id,a.id)};return n?(0,ce.jsxs)("div",{children:[(0,ce.jsx)(po,{value:u,onChange:d,onSubmit:p,submitLabel:R.save}),(0,ce.jsx)(EI,{children:(0,ce.jsx)(za,{tone:"muted",onClick:()=>{s(!1),d(a.body)},children:R.cancel})})]}):(0,ce.jsx)(u0,{author:a.author,timestamp:$I(a.createdAt),body:(0,ce.jsxs)(ce.Fragment,{children:[a.body,a.shot&&(0,ce.jsxs)(TI,{type:"button",className:"fbw-shot-thumb",title:R.compareThumbHint,onClick:()=>o(a.shot),children:[(0,ce.jsx)("img",{src:a.shot,alt:R.before}),(0,ce.jsx)(RI,{children:R.compare})]})]}),actions:(0,ce.jsxs)(PI,{children:[a.version&&(0,ce.jsx)(pb,{version:a.version,changed:r!==void 0&&a.version!==r}),(0,ce.jsx)(Re,{variant:"ghost",size:"sm","aria-label":R.editCommentAria,onClick:()=>s(!0),children:(0,ce.jsx)(eo,{size:14})}),(0,ce.jsx)(Re,{variant:"ghost",size:"sm",tone:"danger","aria-label":R.deleteCommentAria,onClick:h,children:(0,ce.jsx)(Ea,{size:14})})]})})}var Oe=c(m(),1);function hb({store:e,thread:t,number:a,onClose:r}){let[o,i]=(0,Ul.useState)(""),[n,s]=(0,Ul.useState)(e.author),[u,d]=(0,Ul.useState)(null),p=t.anchor.page===location.pathname?Ta(t.anchor):null,h=async y=>{let b=p?await Ei(p):void 0;d({before:y,after:b})},v=async()=>{let y=o.trim();if(!y)return;let b=n.trim()||R.defaultAuthor;e.author=b;let w=p?await Ei(p):void 0;e.addComment(t.id,b,y,Pa.version,w),i("")};return(0,Oe.jsxs)(jl,{targetEl:p,children:[(0,Oe.jsxs)(_l,{className:"fbw-thread",children:[(0,Oe.jsxs)(Nl,{children:[R.thread," ",a]}),t.resolved&&(0,Oe.jsx)(Ri,{$tone:"success",children:R.archivedBadge}),(0,Oe.jsx)(Re,{variant:"ghost",size:"sm","aria-label":R.close,onClick:r,children:(0,Oe.jsx)(Ae,{size:16})})]}),(0,Oe.jsx)(Q0,{children:t.comments.map((y,b)=>(0,Oe.jsx)(mb,{store:e,thread:t,comment:y,prevVersion:b>0?t.comments[b-1].version:void 0,onCompare:h},y.id))}),!e.author&&(0,Oe.jsx)(Ma,{size:"sm",placeholder:R.namePlaceholder,"aria-label":R.nameAria,value:n,onChange:y=>s(y.target.value)}),(0,Oe.jsx)(po,{value:o,onChange:i,onSubmit:v,placeholder:R.replyPlaceholder,submitLabel:R.reply}),(0,Oe.jsx)(za,{tone:t.resolved?"muted":"accent",iconLeading:(0,Oe.jsx)(Jr,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?R.unarchive:R.archive}),u&&(0,Oe.jsx)(fb,{before:u.before,after:u.after,onClose:()=>d(null)})]})}var Wc=c(C(),1);function vb(e,t){let a=t.map(({beforeShot:r,...o})=>({...o,comments:o.comments.map(({shot:i,...n})=>n)}));return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:a},null,2)}function xb(e,t){let a=new Blob([vb(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function bb(e,t){try{return await navigator.clipboard.writeText(vb(e,t)),!0}catch{return!1}}var ct=c(m(),1),MI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,AI=l.span`
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
`,DI=l.span`
  margin-left: auto;
`,BI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,FI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function yb({store:e,thread:t,number:a,onSelect:r}){let o=zl(),i=async s=>{s.stopPropagation(),await o({title:R.deleteThreadTitle,description:Li(t),confirmLabel:R.delete,cancelLabel:R.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,ct.jsxs)(s0,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,ct.jsxs)(MI,{children:[(0,ct.jsx)(AI,{children:a}),(0,ct.jsx)("span",{children:Th(t)}),t.resolved&&(0,ct.jsx)(Ri,{$tone:"success",children:R.archivedBadge}),(0,ct.jsx)(DI,{}),(0,ct.jsx)(Re,{variant:"ghost",size:"sm",tone:"danger","aria-label":R.deleteThreadAria,onClick:i,children:(0,ct.jsx)(Ea,{size:14})})]}),(0,ct.jsx)(BI,{children:Li(t)}),(0,ct.jsxs)(FI,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${R.replies}`]})]})}var oe=c(m(),1),OI=320,jI=l.button`
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
`,_I=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${OI}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,NI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,HI=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,UI=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function wb({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,Wc.useState)(null),[n,s]=(0,Wc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),h=w=>u.findIndex(z=>z.id===w.id)+1,v=w=>{if(!Hd(w.anchor)){Dh(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await bb(e.project,e.exportList())?R.copied:R.copyFailed),setTimeout(()=>i(null),1500)},b=w=>w.map(z=>(0,oe.jsx)(yb,{store:e,thread:z,number:h(z),onSelect:v},z.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(jI,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[R.tab," ",u.length]}),(0,oe.jsx)(_I,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(w0,{headerSlot:(0,oe.jsxs)(NI,{children:[(0,oe.jsxs)("span",{children:[R.listTitle," (",u.length,")"]}),(0,oe.jsx)(Re,{variant:"ghost",size:"sm","aria-label":R.close,onClick:()=>a(!1),children:(0,oe.jsx)(Ae,{size:16})})]}),bodySectionTitle:R.openSection,bodySlot:d.length===0?(0,oe.jsxs)(HI,{children:[R.emptyLine1,(0,oe.jsx)("br",{}),R.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(za,{tone:"muted",onClick:()=>s(w=>!w),children:n?R.hideArchived(p.length):R.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(UI,{children:[(0,oe.jsx)(uo,{variant:"secondary",size:"sm",onClick:y,children:o??R.copy}),(0,oe.jsx)(uo,{variant:"solid",size:"sm",onClick:()=>xb(e.project,e.exportList()),children:R.downloadJson})]})]})})]})}var Jt=c(m(),1),Lb=l.button`
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
`,qI=l.span`
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

  ${Lb}:hover + & {
    opacity: 1;
  }
`,WI=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function Sb({store:e}){let t=e.list().length;return(0,Jt.jsxs)(Jt.Fragment,{children:[(0,Jt.jsxs)(Lb,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?R.toggleOff:R.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,Jt.jsx)(WI,{children:(0,Jt.jsx)(Cx,{children:t})})]}),(0,Jt.jsx)(qI,{children:e.enabled?R.toggleHintOn:R.toggleOn})]})}var kt=c(m(),1);function Cb({store:e}){ab(e);let[t,a]=(0,$i.useState)(null),[r,o]=(0,$i.useState)(!1),i=e.enabled;(0,$i.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ta(n.anchor):null;return(0,kt.jsxs)(Jx,{children:[i&&(0,kt.jsx)(ob,{active:!t,onPick:(d,p,h)=>{let v=e.list().find(y=>!y.resolved&&y.anchor.page===location.pathname&&Ta(y.anchor)===d);if(v){a({kind:"thread",id:v.id});return}a({kind:"draft",el:d,anchor:Ah(d),point:{x:p,y:h}})}}),i&&(0,kt.jsx)(sb,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,kt.jsx)(Nc,{el:t.el}),u&&(0,kt.jsx)(Nc,{el:u}),t?.kind==="draft"&&(0,kt.jsx)(db,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,kt.jsx)(hb,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,kt.jsx)(wb,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,kt.jsx)(Sb,{store:e})]})}var Vc=c(m(),1),VI=2147483e3;function GI(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var XI=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function Ib(){if(document.getElementById(Zr))return;let e=document.createElement("div");e.id=Zr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${VI};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=GI(Ph)+XI;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new hl(Pa.project);(0,kb.createRoot)(o).render((0,Vc.jsx)(Sh,{target:r,children:(0,Vc.jsx)(Cb,{store:i})})),Pa.seedUrl&&typeof fetch=="function"&&fetch(Pa.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),Bh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ib):Ib();})();
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
