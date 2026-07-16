"use strict";(()=>{var Ib=Object.create;var Wc=Object.defineProperty;var kb=Object.getOwnPropertyDescriptor;var Pb=Object.getOwnPropertyNames;var Tb=Object.getPrototypeOf,Rb=Object.prototype.hasOwnProperty;var Ot=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Eb=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Pb(t))!Rb.call(e,o)&&o!==a&&Wc(e,o,{get:()=>t[o],enumerable:!(r=kb(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?Ib(Tb(e)):{},Eb(t||!e||!e.__esModule?Wc(a,"default",{value:e,enumerable:!0}):a,e));var rf=Ot(B=>{"use strict";var bo=Symbol.for("react.element"),$b=Symbol.for("react.portal"),Mb=Symbol.for("react.fragment"),zb=Symbol.for("react.strict_mode"),Ab=Symbol.for("react.profiler"),Db=Symbol.for("react.provider"),Bb=Symbol.for("react.context"),Fb=Symbol.for("react.forward_ref"),Ob=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),_b=Symbol.for("react.lazy"),Vc=Symbol.iterator;function Nb(e){return e===null||typeof e!="object"?null:(e=Vc&&e[Vc]||e["@@iterator"],typeof e=="function"?e:null)}var Yc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Kc=Object.assign,Qc={};function hr(e,t,a){this.props=e,this.context=t,this.refs=Qc,this.updater=a||Yc}hr.prototype.isReactComponent={};hr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};hr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Zc(){}Zc.prototype=hr.prototype;function Xl(e,t,a){this.props=e,this.context=t,this.refs=Qc,this.updater=a||Yc}var Yl=Xl.prototype=new Zc;Yl.constructor=Xl;Kc(Yl,hr.prototype);Yl.isPureReactComponent=!0;var Gc=Array.isArray,Jc=Object.prototype.hasOwnProperty,Kl={current:null},ef={key:!0,ref:!0,__self:!0,__source:!0};function tf(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)Jc.call(t,r)&&!ef.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:bo,type:e,key:i,ref:n,props:o,_owner:Kl.current}}function Hb(e,t){return{$$typeof:bo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===bo}function Ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Xc=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ub(""+e.key):t.toString(36)}function Di(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case bo:case $b:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+Gl(n,0):r,Gc(o)?(a="",e!=null&&(a=e.replace(Xc,"$&/")+"/"),Di(o,t,a,"",function(d){return d})):o!=null&&(Ql(o)&&(o=Hb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(Xc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",Gc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Gl(i,s);n+=Di(i,t,a,u,o)}else if(u=Nb(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Gl(i,s++),n+=Di(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function Ai(e,t,a){if(e==null)return e;var r=[],o=0;return Di(e,r,"","",function(i){return t.call(a,i,o++)}),r}function qb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},Bi={transition:null},Wb={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:Kl};function af(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Ai,forEach:function(e,t,a){Ai(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return Ai(e,function(){t++}),t},toArray:function(e){return Ai(e,function(t){return t})||[]},only:function(e){if(!Ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=hr;B.Fragment=Mb;B.Profiler=Ab;B.PureComponent=Xl;B.StrictMode=zb;B.Suspense=Ob;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wb;B.act=af;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Kc({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Kl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Jc.call(t,u)&&!ef.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:bo,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:Bb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Db,_context:e},e.Consumer=e};B.createElement=tf;B.createFactory=function(e){var t=tf.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Fb,render:e}};B.isValidElement=Ql;B.lazy=function(e){return{$$typeof:_b,_payload:{_status:-1,_result:e},_init:qb}};B.memo=function(e,t){return{$$typeof:jb,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};B.unstable_act=af;B.useCallback=function(e,t){return Ee.current.useCallback(e,t)};B.useContext=function(e){return Ee.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};B.useEffect=function(e,t){return Ee.current.useEffect(e,t)};B.useId=function(){return Ee.current.useId()};B.useImperativeHandle=function(e,t,a){return Ee.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Ee.current.useMemo(e,t)};B.useReducer=function(e,t,a){return Ee.current.useReducer(e,t,a)};B.useRef=function(e){return Ee.current.useRef(e)};B.useState=function(e){return Ee.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return Ee.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return Ee.current.useTransition()};B.version="18.3.1"});var C=Ot((GI,of)=>{"use strict";of.exports=rf()});var mf=Ot(q=>{"use strict";function ts(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<Fi(o,t))e[r]=t,e[a]=o,a=r;else break e}}function pt(e){return e.length===0?null:e[0]}function ji(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>Fi(s,a))u<o&&0>Fi(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>Fi(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function Fi(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(nf=performance,q.unstable_now=function(){return nf.now()}):(Zl=Date,lf=Zl.now(),q.unstable_now=function(){return Zl.now()-lf});var nf,Zl,lf,Pt=[],oa=[],Vb=1,at=null,ye=3,_i=!1,Ba=!1,wo=!1,df=typeof setTimeout=="function"?setTimeout:null,cf=typeof clearTimeout=="function"?clearTimeout:null,sf=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function as(e){for(var t=pt(oa);t!==null;){if(t.callback===null)ji(oa);else if(t.startTime<=e)ji(oa),t.sortIndex=t.expirationTime,ts(Pt,t);else break;t=pt(oa)}}function rs(e){if(wo=!1,as(e),!Ba)if(pt(Pt)!==null)Ba=!0,is(os);else{var t=pt(oa);t!==null&&ns(rs,t.startTime-e)}}function os(e,t){Ba=!1,wo&&(wo=!1,cf(Lo),Lo=-1),_i=!0;var a=ye;try{for(as(t),at=pt(Pt);at!==null&&(!(at.expirationTime>t)||e&&!gf());){var r=at.callback;if(typeof r=="function"){at.callback=null,ye=at.priorityLevel;var o=r(at.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?at.callback=o:at===pt(Pt)&&ji(Pt),as(t)}else ji(Pt);at=pt(Pt)}if(at!==null)var i=!0;else{var n=pt(oa);n!==null&&ns(rs,n.startTime-t),i=!1}return i}finally{at=null,ye=a,_i=!1}}var Ni=!1,Oi=null,Lo=-1,ff=5,pf=-1;function gf(){return!(q.unstable_now()-pf<ff)}function Jl(){if(Oi!==null){var e=q.unstable_now();pf=e;var t=!0;try{t=Oi(!0,e)}finally{t?yo():(Ni=!1,Oi=null)}}else Ni=!1}var yo;typeof sf=="function"?yo=function(){sf(Jl)}:typeof MessageChannel<"u"?(es=new MessageChannel,uf=es.port2,es.port1.onmessage=Jl,yo=function(){uf.postMessage(null)}):yo=function(){df(Jl,0)};var es,uf;function is(e){Oi=e,Ni||(Ni=!0,yo())}function ns(e,t){Lo=df(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){Ba||_i||(Ba=!0,is(os))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ff=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return ye};q.unstable_getFirstCallbackNode=function(){return pt(Pt)};q.unstable_next=function(e){switch(ye){case 1:case 2:case 3:var t=3;break;default:t=ye}var a=ye;ye=t;try{return e()}finally{ye=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ye;ye=e;try{return t()}finally{ye=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:Vb++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,ts(oa,e),pt(Pt)===null&&e===pt(oa)&&(wo?(cf(Lo),Lo=-1):wo=!0,ns(rs,a-r))):(e.sortIndex=o,ts(Pt,e),Ba||_i||(Ba=!0,is(os))),e};q.unstable_shouldYield=gf;q.unstable_wrapCallback=function(e){var t=ye;return function(){var a=ye;ye=t;try{return e.apply(this,arguments)}finally{ye=a}}}});var vf=Ot((YI,hf)=>{"use strict";hf.exports=mf()});var wm=Ot(Qe=>{"use strict";var Gb=C(),Ye=vf();function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,qo={};function Ya(e,t){Fr(e,t),Fr(e+"Capture",t)}function Fr(e,t){for(qo[e]=t,e=0;e<t.length;e++)Cp.add(t[e])}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rs=Object.prototype.hasOwnProperty,Xb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xf={},bf={};function Yb(e){return Rs.call(bf,e)?!0:Rs.call(xf,e)?!1:Xb.test(e)?bf[e]=!0:(xf[e]=!0,!1)}function Kb(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qb(e,t,a,r){if(t===null||typeof t>"u"||Kb(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var wu=/[\-:]([a-z])/g;function Lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(wu,Lu);me[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(wu,Lu);me[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(wu,Lu);me[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Su(e,t,a,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qb(t,a,o,r)&&(a=null),r||o===null?Yb(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Xt=Gb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Hi=Symbol.for("react.element"),br=Symbol.for("react.portal"),yr=Symbol.for("react.fragment"),Cu=Symbol.for("react.strict_mode"),Es=Symbol.for("react.profiler"),Ip=Symbol.for("react.provider"),kp=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),$s=Symbol.for("react.suspense"),Ms=Symbol.for("react.suspense_list"),ku=Symbol.for("react.memo"),na=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var Pp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var yf=Symbol.iterator;function So(e){return e===null||typeof e!="object"?null:(e=yf&&e[yf]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,ls;function $o(e){if(ls===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ls=t&&t[1]||""}return`
`+ls+e}var ss=!1;function us(e,t){if(!e||ss)return"";ss=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{ss=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?$o(e):""}function Zb(e){switch(e.tag){case 5:return $o(e.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return e=us(e.type,!1),e;case 11:return e=us(e.type.render,!1),e;case 1:return e=us(e.type,!0),e;default:return""}}function zs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case yr:return"Fragment";case br:return"Portal";case Es:return"Profiler";case Cu:return"StrictMode";case $s:return"Suspense";case Ms:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kp:return(e.displayName||"Context")+".Consumer";case Ip:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ku:return t=e.displayName||null,t!==null?t:zs(e.type)||"Memo";case na:t=e._payload,e=e._init;try{return zs(e(t))}catch{}}return null}function Jb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return zs(t);case 8:return t===Cu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ya(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ey(e){var t=Tp(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=ey(e))}function Rp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=Tp(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function As(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function wf(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=ya(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ep(e,t){t=t.checked,t!=null&&Su(e,"checked",t,!1)}function Ds(e,t){Ep(e,t);var a=ya(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bs(e,t.type,a):t.hasOwnProperty("defaultValue")&&Bs(e,t.type,ya(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Lf(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Bs(e,t,a){(t!=="number"||xn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Mo=Array.isArray;function $r(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+ya(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Fs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sf(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(I(92));if(Mo(a)){if(1<a.length)throw Error(I(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:ya(a)}}function $p(e,t){var a=ya(t.value),r=ya(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function Cf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Os(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var qi,zp=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(qi=qi||document.createElement("div"),qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wo(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Do={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ty=["Webkit","ms","Moz","O"];Object.keys(Do).forEach(function(e){ty.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Do[t]=Do[e]})});function Ap(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Do.hasOwnProperty(e)&&Do[e]?(""+t).trim():t+"px"}function Dp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=Ap(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var ay=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(ay[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function _s(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ns=null;function Pu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Mr=null,zr=null;function If(e){if(e=ui(e)){if(typeof Hs!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Vn(t),Hs(e.stateNode,e.type,t))}}function Bp(e){Mr?zr?zr.push(e):zr=[e]:Mr=e}function Fp(){if(Mr){var e=Mr,t=zr;if(zr=Mr=null,If(e),t)for(e=0;e<t.length;e++)If(t[e])}}function Op(e,t){return e(t)}function jp(){}var ds=!1;function _p(e,t,a){if(ds)return e(t,a);ds=!0;try{return Op(e,t,a)}finally{ds=!1,(Mr!==null||zr!==null)&&(jp(),Fp())}}function Vo(e,t){var a=e.stateNode;if(a===null)return null;var r=Vn(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(I(231,t,typeof a));return a}var Us=!1;if(qt)try{vr={},Object.defineProperty(vr,"passive",{get:function(){Us=!0}}),window.addEventListener("test",vr,vr),window.removeEventListener("test",vr,vr)}catch{Us=!1}var vr;function ry(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var Bo=!1,bn=null,yn=!1,qs=null,oy={onError:function(e){Bo=!0,bn=e}};function iy(e,t,a,r,o,i,n,s,u){Bo=!1,bn=null,ry.apply(oy,arguments)}function ny(e,t,a,r,o,i,n,s,u){if(iy.apply(this,arguments),Bo){if(Bo){var d=bn;Bo=!1,bn=null}else throw Error(I(198));yn||(yn=!0,qs=d)}}function Ka(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function Np(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kf(e){if(Ka(e)!==e)throw Error(I(188))}function ly(e){var t=e.alternate;if(!t){if(t=Ka(e),t===null)throw Error(I(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return kf(o),e;if(i===r)return kf(o),t;i=i.sibling}throw Error(I(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(I(189))}}if(a.alternate!==r)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?e:t}function Hp(e){return e=ly(e),e!==null?Up(e):null}function Up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Up(e);if(t!==null)return t;e=e.sibling}return null}var qp=Ye.unstable_scheduleCallback,Pf=Ye.unstable_cancelCallback,sy=Ye.unstable_shouldYield,uy=Ye.unstable_requestPaint,re=Ye.unstable_now,dy=Ye.unstable_getCurrentPriorityLevel,Tu=Ye.unstable_ImmediatePriority,Wp=Ye.unstable_UserBlockingPriority,wn=Ye.unstable_NormalPriority,cy=Ye.unstable_LowPriority,Vp=Ye.unstable_IdlePriority,Hn=null,$t=null;function fy(e){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Hn,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:my,py=Math.log,gy=Math.LN2;function my(e){return e>>>=0,e===0?32:31-(py(e)/gy|0)|0}var Wi=64,Vi=4194304;function zo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ln(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=zo(s):(i&=n,i!==0&&(r=zo(i)))}else n=a&~o,n!==0?r=zo(n):i!==0&&(r=zo(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-xt(t),o=1<<a,r|=e[a],t&=~o;return r}function hy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vy(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-xt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=hy(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Gp(){var e=Wi;return Wi<<=1,(Wi&4194240)===0&&(Wi=64),e}function cs(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function li(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=a}function xy(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-xt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function Ru(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-xt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var _=0;function Xp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Yp,Eu,Kp,Qp,Zp,Vs=!1,Gi=[],fa=null,pa=null,ga=null,Go=new Map,Xo=new Map,sa=[],by="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tf(e,t){switch(e){case"focusin":case"focusout":fa=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(t.pointerId)}}function Co(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ui(t),t!==null&&Eu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function yy(e,t,a,r,o){switch(t){case"focusin":return fa=Co(fa,e,t,a,r,o),!0;case"dragenter":return pa=Co(pa,e,t,a,r,o),!0;case"mouseover":return ga=Co(ga,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return Go.set(i,Co(Go.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xo.set(i,Co(Xo.get(i)||null,e,t,a,r,o)),!0}return!1}function Jp(e){var t=ja(e.target);if(t!==null){var a=Ka(t);if(a!==null){if(t=a.tag,t===13){if(t=Np(a),t!==null){e.blockedOn=t,Zp(e.priority,function(){Kp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Ns=r,a.target.dispatchEvent(r),Ns=null}else return t=ui(a),t!==null&&Eu(t),e.blockedOn=a,!1;t.shift()}return!0}function Rf(e,t,a){sn(e)&&a.delete(t)}function wy(){Vs=!1,fa!==null&&sn(fa)&&(fa=null),pa!==null&&sn(pa)&&(pa=null),ga!==null&&sn(ga)&&(ga=null),Go.forEach(Rf),Xo.forEach(Rf)}function Io(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,wy)))}function Yo(e){function t(o){return Io(o,e)}if(0<Gi.length){Io(Gi[0],e);for(var a=1;a<Gi.length;a++){var r=Gi[a];r.blockedOn===e&&(r.blockedOn=null)}}for(fa!==null&&Io(fa,e),pa!==null&&Io(pa,e),ga!==null&&Io(ga,e),Go.forEach(t),Xo.forEach(t),a=0;a<sa.length;a++)r=sa[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<sa.length&&(a=sa[0],a.blockedOn===null);)Jp(a),a.blockedOn===null&&sa.shift()}var Ar=Xt.ReactCurrentBatchConfig,Sn=!0;function Ly(e,t,a,r){var o=_,i=Ar.transition;Ar.transition=null;try{_=1,$u(e,t,a,r)}finally{_=o,Ar.transition=i}}function Sy(e,t,a,r){var o=_,i=Ar.transition;Ar.transition=null;try{_=4,$u(e,t,a,r)}finally{_=o,Ar.transition=i}}function $u(e,t,a,r){if(Sn){var o=Gs(e,t,a,r);if(o===null)xs(e,t,r,Cn,a),Tf(e,r);else if(yy(o,e,t,a,r))r.stopPropagation();else if(Tf(e,r),t&4&&-1<by.indexOf(e)){for(;o!==null;){var i=ui(o);if(i!==null&&Yp(i),i=Gs(e,t,a,r),i===null&&xs(e,t,r,Cn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else xs(e,t,r,null,a)}}var Cn=null;function Gs(e,t,a,r){if(Cn=null,e=Pu(r),e=ja(e),e!==null)if(t=Ka(e),t===null)e=null;else if(a=t.tag,a===13){if(e=Np(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cn=e,null}function eg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dy()){case Tu:return 1;case Wp:return 4;case wn:case cy:return 16;case Vp:return 536870912;default:return 16}default:return 16}}var da=null,Mu=null,un=null;function tg(){if(un)return un;var e,t=Mu,a=t.length,r,o="value"in da?da.value:da.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return un=o.slice(e,1<r?1-r:void 0)}function dn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Ef(){return!1}function Ke(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Xi:Ef,this.isPropagationStopped=Ef,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zu=Ke(qr),si=Q({},qr,{view:0,detail:0}),Cy=Ke(si),fs,ps,ko,Un=Q({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ko&&(ko&&e.type==="mousemove"?(fs=e.screenX-ko.screenX,ps=e.screenY-ko.screenY):ps=fs=0,ko=e),fs)},movementY:function(e){return"movementY"in e?e.movementY:ps}}),$f=Ke(Un),Iy=Q({},Un,{dataTransfer:0}),ky=Ke(Iy),Py=Q({},si,{relatedTarget:0}),gs=Ke(Py),Ty=Q({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ry=Ke(Ty),Ey=Q({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$y=Ke(Ey),My=Q({},qr,{data:0}),Mf=Ke(My),zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ay={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dy[e])?!!t[e]:!1}function Au(){return By}var Fy=Q({},si,{key:function(e){if(e.key){var t=zy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ay[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Au,charCode:function(e){return e.type==="keypress"?dn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Oy=Ke(Fy),jy=Q({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zf=Ke(jy),_y=Q({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Au}),Ny=Ke(_y),Hy=Q({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uy=Ke(Hy),qy=Q({},Un,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wy=Ke(qy),Vy=[9,13,27,32],Du=qt&&"CompositionEvent"in window,Fo=null;qt&&"documentMode"in document&&(Fo=document.documentMode);var Gy=qt&&"TextEvent"in window&&!Fo,ag=qt&&(!Du||Fo&&8<Fo&&11>=Fo),Af=" ",Df=!1;function rg(e,t){switch(e){case"keyup":return Vy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function Xy(e,t){switch(e){case"compositionend":return og(t);case"keypress":return t.which!==32?null:(Df=!0,Af);case"textInput":return e=t.data,e===Af&&Df?null:e;default:return null}}function Yy(e,t){if(wr)return e==="compositionend"||!Du&&rg(e,t)?(e=tg(),un=Mu=da=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ag&&t.locale!=="ko"?null:t.data;default:return null}}var Ky={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ky[e.type]:t==="textarea"}function ig(e,t,a,r){Bp(r),t=In(t,"onChange"),0<t.length&&(a=new zu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var Oo=null,Ko=null;function Qy(e){hg(e,0)}function qn(e){var t=Cr(e);if(Rp(t))return e}function Zy(e,t){if(e==="change")return t}var ng=!1;qt&&(qt?(Ki="oninput"in document,Ki||(ms=document.createElement("div"),ms.setAttribute("oninput","return;"),Ki=typeof ms.oninput=="function"),Yi=Ki):Yi=!1,ng=Yi&&(!document.documentMode||9<document.documentMode));var Yi,Ki,ms;function Ff(){Oo&&(Oo.detachEvent("onpropertychange",lg),Ko=Oo=null)}function lg(e){if(e.propertyName==="value"&&qn(Ko)){var t=[];ig(t,Ko,e,Pu(e)),_p(Qy,t)}}function Jy(e,t,a){e==="focusin"?(Ff(),Oo=t,Ko=a,Oo.attachEvent("onpropertychange",lg)):e==="focusout"&&Ff()}function e1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qn(Ko)}function t1(e,t){if(e==="click")return qn(t)}function a1(e,t){if(e==="input"||e==="change")return qn(t)}function r1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:r1;function Qo(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!Rs.call(t,o)||!yt(e[o],t[o]))return!1}return!0}function Of(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jf(e,t){var a=Of(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Of(a)}}function sg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ug(){for(var e=window,t=xn();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xn(e.document)}return t}function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o1(e){var t=ug(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&sg(a.ownerDocument.documentElement,a)){if(r!==null&&Bu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=jf(a,i);var n=jf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var i1=qt&&"documentMode"in document&&11>=document.documentMode,Lr=null,Xs=null,jo=null,Ys=!1;function _f(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ys||Lr==null||Lr!==xn(r)||(r=Lr,"selectionStart"in r&&Bu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),jo&&Qo(jo,r)||(jo=r,r=In(Xs,"onSelect"),0<r.length&&(t=new zu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Lr)))}function Qi(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sr={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},hs={},dg={};qt&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function Wn(e){if(hs[e])return hs[e];if(!Sr[e])return e;var t=Sr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in dg)return hs[e]=t[a];return e}var cg=Wn("animationend"),fg=Wn("animationiteration"),pg=Wn("animationstart"),gg=Wn("transitionend"),mg=new Map,Nf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function La(e,t){mg.set(e,t),Ya(t,[e])}for(Zi=0;Zi<Nf.length;Zi++)Ji=Nf[Zi],Hf=Ji.toLowerCase(),Uf=Ji[0].toUpperCase()+Ji.slice(1),La(Hf,"on"+Uf);var Ji,Hf,Uf,Zi;La(cg,"onAnimationEnd");La(fg,"onAnimationIteration");La(pg,"onAnimationStart");La("dblclick","onDoubleClick");La("focusin","onFocus");La("focusout","onBlur");La(gg,"onTransitionEnd");Fr("onMouseEnter",["mouseout","mouseover"]);Fr("onMouseLeave",["mouseout","mouseover"]);Fr("onPointerEnter",["pointerout","pointerover"]);Fr("onPointerLeave",["pointerout","pointerover"]);Ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ya("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ao));function qf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,ny(r,t,void 0,e),e.currentTarget=null}function hg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;qf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;qf(o,s,d),i=u}}}if(yn)throw e=qs,yn=!1,qs=null,e}function V(e,t){var a=t[eu];a===void 0&&(a=t[eu]=new Set);var r=e+"__bubble";a.has(r)||(vg(t,e,2,!1),a.add(r))}function vs(e,t,a){var r=0;t&&(r|=4),vg(a,e,r,t)}var en="_reactListening"+Math.random().toString(36).slice(2);function Zo(e){if(!e[en]){e[en]=!0,Cp.forEach(function(a){a!=="selectionchange"&&(n1.has(a)||vs(a,!1,e),vs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[en]||(t[en]=!0,vs("selectionchange",!1,t))}}function vg(e,t,a,r){switch(eg(t)){case 1:var o=Ly;break;case 4:o=Sy;break;default:o=$u}a=o.bind(null,t,a,e),o=void 0,!Us||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function xs(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=ja(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}_p(function(){var d=i,p=Pu(a),h=[];e:{var v=mg.get(e);if(v!==void 0){var y=zu,b=e;switch(e){case"keypress":if(dn(a)===0)break e;case"keydown":case"keyup":y=Oy;break;case"focusin":b="focus",y=gs;break;case"focusout":b="blur",y=gs;break;case"beforeblur":case"afterblur":y=gs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=$f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=ky;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ny;break;case cg:case fg:case pg:y=Ry;break;case gg:y=Uy;break;case"scroll":y=Cy;break;case"wheel":y=Wy;break;case"copy":case"cut":case"paste":y=$y;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zf}var w=(t&4)!==0,M=!w&&e==="scroll",g=w?v!==null?v+"Capture":null:v;w=[];for(var f=d,x;f!==null;){x=f;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=Vo(f,g),S!=null&&w.push(Jo(f,S,x)))),M)break;f=f.return}0<w.length&&(v=new y(v,b,null,a,p),h.push({event:v,listeners:w}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&a!==Ns&&(b=a.relatedTarget||a.fromElement)&&(ja(b)||b[Wt]))break e;if((y||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?ja(b):null,b!==null&&(M=Ka(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=$f,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=zf,S="onPointerLeave",g="onPointerEnter",f="pointer"),M=y==null?v:Cr(y),x=b==null?v:Cr(b),v=new w(S,f+"leave",y,a,p),v.target=M,v.relatedTarget=x,S=null,ja(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=x,w.relatedTarget=M,S=w),M=S,y&&b)t:{for(w=y,g=b,f=0,x=w;x;x=xr(x))f++;for(x=0,S=g;S;S=xr(S))x++;for(;0<f-x;)w=xr(w),f--;for(;0<x-f;)g=xr(g),x--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=xr(w),g=xr(g)}w=null}else w=null;y!==null&&Wf(h,v,y,w,!1),b!==null&&M!==null&&Wf(h,M,b,w,!0)}}e:{if(v=d?Cr(d):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var P=Zy;else if(Bf(v))if(ng)P=a1;else{P=e1;var R=Jy}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=t1);if(P&&(P=P(e,d))){ig(h,P,a,p);break e}R&&R(e,v,d),e==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&Bs(v,"number",v.value)}switch(R=d?Cr(d):window,e){case"focusin":(Bf(R)||R.contentEditable==="true")&&(Lr=R,Xs=d,jo=null);break;case"focusout":jo=Xs=Lr=null;break;case"mousedown":Ys=!0;break;case"contextmenu":case"mouseup":case"dragend":Ys=!1,_f(h,a,p);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":_f(h,a,p)}var k;if(Du)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wr?rg(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(ag&&a.locale!=="ko"&&(wr||T!=="onCompositionStart"?T==="onCompositionEnd"&&wr&&(k=tg()):(da=p,Mu="value"in da?da.value:da.textContent,wr=!0)),R=In(d,T),0<R.length&&(T=new Mf(T,e,null,a,p),h.push({event:T,listeners:R}),k?T.data=k:(k=og(a),k!==null&&(T.data=k)))),(k=Gy?Xy(e,a):Yy(e,a))&&(d=In(d,"onBeforeInput"),0<d.length&&(p=new Mf("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}hg(h,t)})}function Jo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function In(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Vo(e,a),i!=null&&r.unshift(Jo(e,i,o)),i=Vo(e,t),i!=null&&r.push(Jo(e,i,o))),e=e.return}return r}function xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wf(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Vo(a,i),u!=null&&n.unshift(Jo(a,u,s))):o||(u=Vo(a,i),u!=null&&n.push(Jo(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var l1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(l1,`
`).replace(s1,"")}function tn(e,t,a){if(t=Vf(t),Vf(e)!==t&&a)throw Error(I(425))}function kn(){}var Ks=null,Qs=null;function Zs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Js=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,Gf=typeof Promise=="function"?Promise:void 0,d1=typeof queueMicrotask=="function"?queueMicrotask:typeof Gf<"u"?function(e){return Gf.resolve(null).then(e).catch(c1)}:Js;function c1(e){setTimeout(function(){throw e})}function bs(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),Yo(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);Yo(t)}function ma(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Wr=Math.random().toString(36).slice(2),Et="__reactFiber$"+Wr,ei="__reactProps$"+Wr,Wt="__reactContainer$"+Wr,eu="__reactEvents$"+Wr,f1="__reactListeners$"+Wr,p1="__reactHandles$"+Wr;function ja(e){var t=e[Et];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Wt]||a[Et]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xf(e);e!==null;){if(a=e[Et])return a;e=Xf(e)}return t}e=a,a=e.parentNode}return null}function ui(e){return e=e[Et]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Vn(e){return e[ei]||null}var tu=[],Ir=-1;function Sa(e){return{current:e}}function G(e){0>Ir||(e.current=tu[Ir],tu[Ir]=null,Ir--)}function W(e,t){Ir++,tu[Ir]=e.current,e.current=t}var wa={},Ce=Sa(wa),He=Sa(!1),qa=wa;function Or(e,t){var a=e.type.contextTypes;if(!a)return wa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ue(e){return e=e.childContextTypes,e!=null}function Pn(){G(He),G(Ce)}function Yf(e,t,a){if(Ce.current!==wa)throw Error(I(168));W(Ce,t),W(He,a)}function xg(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,Jb(e)||"Unknown",o));return Q({},a,r)}function Tn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wa,qa=Ce.current,W(Ce,e),W(He,He.current),!0}function Kf(e,t,a){var r=e.stateNode;if(!r)throw Error(I(169));a?(e=xg(e,t,qa),r.__reactInternalMemoizedMergedChildContext=e,G(He),G(Ce),W(Ce,e)):G(He),W(He,a)}var _t=null,Gn=!1,ys=!1;function bg(e){_t===null?_t=[e]:_t.push(e)}function g1(e){Gn=!0,bg(e)}function Ca(){if(!ys&&_t!==null){ys=!0;var e=0,t=_;try{var a=_t;for(_=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}_t=null,Gn=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),qp(Tu,Ca),o}finally{_=t,ys=!1}}return null}var kr=[],Pr=0,Rn=null,En=0,rt=[],ot=0,Wa=null,Nt=1,Ht="";function Fa(e,t){kr[Pr++]=En,kr[Pr++]=Rn,Rn=e,En=t}function yg(e,t,a){rt[ot++]=Nt,rt[ot++]=Ht,rt[ot++]=Wa,Wa=e;var r=Nt;e=Ht;var o=32-xt(r)-1;r&=~(1<<o),a+=1;var i=32-xt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,Nt=1<<32-xt(t)+o|a<<o|r,Ht=i+e}else Nt=1<<i|a<<o|r,Ht=e}function Fu(e){e.return!==null&&(Fa(e,1),yg(e,1,0))}function Ou(e){for(;e===Rn;)Rn=kr[--Pr],kr[Pr]=null,En=kr[--Pr],kr[Pr]=null;for(;e===Wa;)Wa=rt[--ot],rt[ot]=null,Ht=rt[--ot],rt[ot]=null,Nt=rt[--ot],rt[ot]=null}var Xe=null,Ge=null,X=!1,vt=null;function wg(e,t){var a=it(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Qf(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=ma(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Wa!==null?{id:Nt,overflow:Ht}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=it(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Xe=e,Ge=null,!0):!1;default:return!1}}function au(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ru(e){if(X){var t=Ge;if(t){var a=t;if(!Qf(e,t)){if(au(e))throw Error(I(418));t=ma(a.nextSibling);var r=Xe;t&&Qf(e,t)?wg(r,a):(e.flags=e.flags&-4097|2,X=!1,Xe=e)}}else{if(au(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,Xe=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function an(e){if(e!==Xe)return!1;if(!X)return Zf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zs(e.type,e.memoizedProps)),t&&(t=Ge)){if(au(e))throw Lg(),Error(I(418));for(;t;)wg(e,t),t=ma(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){Ge=ma(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?ma(e.stateNode.nextSibling):null;return!0}function Lg(){for(var e=Ge;e;)e=ma(e.nextSibling)}function jr(){Ge=Xe=null,X=!1}function ju(e){vt===null?vt=[e]:vt.push(e)}var m1=Xt.ReactCurrentBatchConfig;function Po(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(I(309));var r=a.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!a._owner)throw Error(I(290,e))}return e}function rn(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jf(e){var t=e._init;return t(e._payload)}function Sg(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=ba(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,x,S){return f===null||f.tag!==6?(f=Ps(x,g.mode,S),f.return=g,f):(f=o(f,x),f.return=g,f)}function u(g,f,x,S){var P=x.type;return P===yr?p(g,f,x.props.children,S,x.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===na&&Jf(P)===f.type)?(S=o(f,x.props),S.ref=Po(g,f,x),S.return=g,S):(S=vn(x.type,x.key,x.props,null,g.mode,S),S.ref=Po(g,f,x),S.return=g,S)}function d(g,f,x,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=Ts(x,g.mode,S),f.return=g,f):(f=o(f,x.children||[]),f.return=g,f)}function p(g,f,x,S,P){return f===null||f.tag!==7?(f=Ua(x,g.mode,S,P),f.return=g,f):(f=o(f,x),f.return=g,f)}function h(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ps(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Hi:return x=vn(f.type,f.key,f.props,null,g.mode,x),x.ref=Po(g,null,f),x.return=g,x;case br:return f=Ts(f,g.mode,x),f.return=g,f;case na:var S=f._init;return h(g,S(f._payload),x)}if(Mo(f)||So(f))return f=Ua(f,g.mode,x,null),f.return=g,f;rn(g,f)}return null}function v(g,f,x,S){var P=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:s(g,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Hi:return x.key===P?u(g,f,x,S):null;case br:return x.key===P?d(g,f,x,S):null;case na:return P=x._init,v(g,f,P(x._payload),S)}if(Mo(x)||So(x))return P!==null?null:p(g,f,x,S,null);rn(g,x)}return null}function y(g,f,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Hi:return g=g.get(S.key===null?x:S.key)||null,u(f,g,S,P);case br:return g=g.get(S.key===null?x:S.key)||null,d(f,g,S,P);case na:var R=S._init;return y(g,f,x,R(S._payload),P)}if(Mo(S)||So(S))return g=g.get(x)||null,p(f,g,S,P,null);rn(f,S)}return null}function b(g,f,x,S){for(var P=null,R=null,k=f,T=f=0,U=null;k!==null&&T<x.length;T++){k.index>T?(U=k,k=null):U=k.sibling;var A=v(g,k,x[T],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A,k=U}if(T===x.length)return a(g,k),X&&Fa(g,T),P;if(k===null){for(;T<x.length;T++)k=h(g,x[T],S),k!==null&&(f=i(k,f,T),R===null?P=k:R.sibling=k,R=k);return X&&Fa(g,T),P}for(k=r(g,k);T<x.length;T++)U=y(k,g,T,x[T],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?T:U.key),f=i(U,f,T),R===null?P=U:R.sibling=U,R=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&Fa(g,T),P}function w(g,f,x,S){var P=So(x);if(typeof P!="function")throw Error(I(150));if(x=P.call(x),x==null)throw Error(I(151));for(var R=P=null,k=f,T=f=0,U=null,A=x.next();k!==null&&!A.done;T++,A=x.next()){k.index>T?(U=k,k=null):U=k.sibling;var ae=v(g,k,A.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,T),R===null?P=ae:R.sibling=ae,R=ae,k=U}if(A.done)return a(g,k),X&&Fa(g,T),P;if(k===null){for(;!A.done;T++,A=x.next())A=h(g,A.value,S),A!==null&&(f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return X&&Fa(g,T),P}for(k=r(g,k);!A.done;T++,A=x.next())A=y(k,g,T,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return e&&k.forEach(function(Aa){return t(g,Aa)}),X&&Fa(g,T),P}function M(g,f,x,S){if(typeof x=="object"&&x!==null&&x.type===yr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Hi:e:{for(var P=x.key,R=f;R!==null;){if(R.key===P){if(P=x.type,P===yr){if(R.tag===7){a(g,R.sibling),f=o(R,x.props.children),f.return=g,g=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===na&&Jf(P)===R.type){a(g,R.sibling),f=o(R,x.props),f.ref=Po(g,R,x),f.return=g,g=f;break e}a(g,R);break}else t(g,R);R=R.sibling}x.type===yr?(f=Ua(x.props.children,g.mode,S,x.key),f.return=g,g=f):(S=vn(x.type,x.key,x.props,null,g.mode,S),S.ref=Po(g,f,x),S.return=g,g=S)}return n(g);case br:e:{for(R=x.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(g,f.sibling),f=o(f,x.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=Ts(x,g.mode,S),f.return=g,g=f}return n(g);case na:return R=x._init,M(g,f,R(x._payload),S)}if(Mo(x))return b(g,f,x,S);if(So(x))return w(g,f,x,S);rn(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,x),f.return=g,g=f):(a(g,f),f=Ps(x,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return M}var _r=Sg(!0),Cg=Sg(!1),$n=Sa(null),Mn=null,Tr=null,_u=null;function Nu(){_u=Tr=Mn=null}function Hu(e){var t=$n.current;G($n),e._currentValue=t}function ou(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Dr(e,t){Mn=e,_u=Tr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ne=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(_u!==e)if(e={context:e,memoizedValue:t,next:null},Tr===null){if(Mn===null)throw Error(I(308));Tr=e,Mn.dependencies={lanes:0,firstContext:e}}else Tr=Tr.next=e;return t}var _a=null;function Uu(e){_a===null?_a=[e]:_a.push(e)}function Ig(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Uu(t)):(a.next=o.next,o.next=a),t.interleaved=a,Vt(e,r)}function Vt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var la=!1;function qu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ha(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Vt(e,a)}return o=r.interleaved,o===null?(t.next=t,Uu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Vt(e,a)}function cn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Ru(e,a)}}function ep(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function zn(e,t,a,r){var o=e.updateQueue;la=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var v=s.lane,y=s.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(v=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(y,h,v);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,v=typeof b=="function"?b.call(y,h,v):b,v==null)break e;h=Q({},h,v);break e;case 2:la=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else y={eventTime:y,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=h):p=p.next=y,n|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Ga|=n,e.lanes=n,e.memoizedState=h}}function tp(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var di={},Mt=Sa(di),ti=Sa(di),ai=Sa(di);function Na(e){if(e===di)throw Error(I(174));return e}function Wu(e,t){switch(W(ai,t),W(ti,e),W(Mt,di),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Os(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Os(t,e)}G(Mt),W(Mt,t)}function Nr(){G(Mt),G(ti),G(ai)}function Pg(e){Na(ai.current);var t=Na(Mt.current),a=Os(t,e.type);t!==a&&(W(ti,e),W(Mt,a))}function Vu(e){ti.current===e&&(G(Mt),G(ti))}var Y=Sa(0);function An(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ws=[];function Gu(){for(var e=0;e<ws.length;e++)ws[e]._workInProgressVersionPrimary=null;ws.length=0}var fn=Xt.ReactCurrentDispatcher,Ls=Xt.ReactCurrentBatchConfig,Va=0,K=null,le=null,de=null,Dn=!1,_o=!1,ri=0,h1=0;function we(){throw Error(I(321))}function Xu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!yt(e[a],t[a]))return!1;return!0}function Yu(e,t,a,r,o,i){if(Va=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fn.current=e===null||e.memoizedState===null?y1:w1,e=a(r,o),_o){i=0;do{if(_o=!1,ri=0,25<=i)throw Error(I(301));i+=1,de=le=null,t.updateQueue=null,fn.current=L1,e=a(r,o)}while(_o)}if(fn.current=Bn,t=le!==null&&le.next!==null,Va=0,de=le=K=null,Dn=!1,t)throw Error(I(300));return e}function Ku(){var e=ri!==0;return ri=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?K.memoizedState=de=e:de=de.next=e,de}function st(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?K.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(I(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?K.memoizedState=de=e:de=de.next=e}return de}function oi(e,t){return typeof t=="function"?t(e):t}function Ss(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Va&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,K.lanes|=p,Ga|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,yt(r,t.memoizedState)||(Ne=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,Ga|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function Cs(e){var t=st(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);yt(i,t.memoizedState)||(Ne=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function Tg(){}function Rg(e,t){var a=K,r=st(),o=t(),i=!yt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ne=!0),r=r.queue,Qu(Mg.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(a.flags|=2048,ii(9,$g.bind(null,a,r,o,t),void 0,null),ce===null)throw Error(I(349));(Va&30)!==0||Eg(a,t,o)}return o}function Eg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function $g(e,t,a,r){t.value=a,t.getSnapshot=r,zg(t)&&Ag(e)}function Mg(e,t,a){return a(function(){zg(t)&&Ag(e)})}function zg(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!yt(e,a)}catch{return!0}}function Ag(e){var t=Vt(e,1);t!==null&&bt(t,e,1,-1)}function ap(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:e},t.queue=e,e=e.dispatch=b1.bind(null,K,e),[t.memoizedState,e]}function ii(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function Dg(){return st().memoizedState}function pn(e,t,a,r){var o=Rt();K.flags|=e,o.memoizedState=ii(1|t,a,void 0,r===void 0?null:r)}function Xn(e,t,a,r){var o=st();r=r===void 0?null:r;var i=void 0;if(le!==null){var n=le.memoizedState;if(i=n.destroy,r!==null&&Xu(r,n.deps)){o.memoizedState=ii(t,a,i,r);return}}K.flags|=e,o.memoizedState=ii(1|t,a,i,r)}function rp(e,t){return pn(8390656,8,e,t)}function Qu(e,t){return Xn(2048,8,e,t)}function Bg(e,t){return Xn(4,2,e,t)}function Fg(e,t){return Xn(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jg(e,t,a){return a=a!=null?a.concat([e]):null,Xn(4,4,Og.bind(null,t,e),a)}function Zu(){}function _g(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Ng(e,t){var a=st();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Xu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function Hg(e,t,a){return(Va&21)===0?(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=a):(yt(a,t)||(a=Gp(),K.lanes|=a,Ga|=a,e.baseState=!0),t)}function v1(e,t){var a=_;_=a!==0&&4>a?a:4,e(!0);var r=Ls.transition;Ls.transition={};try{e(!1),t()}finally{_=a,Ls.transition=r}}function Ug(){return st().memoizedState}function x1(e,t,a){var r=xa(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},qg(e))Wg(t,a);else if(a=Ig(e,t,a,r),a!==null){var o=Me();bt(a,e,r,o),Vg(a,t,r)}}function b1(e,t,a){var r=xa(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(qg(e))Wg(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,yt(s,n)){var u=t.interleaved;u===null?(o.next=o,Uu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=Ig(e,t,o,r),a!==null&&(o=Me(),bt(a,e,r,o),Vg(a,t,r))}}function qg(e){var t=e.alternate;return e===K||t!==null&&t===K}function Wg(e,t){_o=Dn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Vg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,Ru(e,a)}}var Bn={readContext:lt,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},y1={readContext:lt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:rp,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,pn(4194308,4,Og.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pn(4194308,4,e,t)},useInsertionEffect:function(e,t){return pn(4,2,e,t)},useMemo:function(e,t){var a=Rt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Rt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=x1.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:ap,useDebugValue:Zu,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=ap(!1),t=e[0];return e=v1.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=Rt();if(X){if(a===void 0)throw Error(I(407));a=a()}else{if(a=t(),ce===null)throw Error(I(349));(Va&30)!==0||Eg(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,rp(Mg.bind(null,r,i,e),[e]),r.flags|=2048,ii(9,$g.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Rt(),t=ce.identifierPrefix;if(X){var a=Ht,r=Nt;a=(r&~(1<<32-xt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=h1++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},w1={readContext:lt,useCallback:_g,useContext:lt,useEffect:Qu,useImperativeHandle:jg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Ng,useReducer:Ss,useRef:Dg,useState:function(){return Ss(oi)},useDebugValue:Zu,useDeferredValue:function(e){var t=st();return Hg(t,le.memoizedState,e)},useTransition:function(){var e=Ss(oi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:Rg,useId:Ug,unstable_isNewReconciler:!1},L1={readContext:lt,useCallback:_g,useContext:lt,useEffect:Qu,useImperativeHandle:jg,useInsertionEffect:Bg,useLayoutEffect:Fg,useMemo:Ng,useReducer:Cs,useRef:Dg,useState:function(){return Cs(oi)},useDebugValue:Zu,useDeferredValue:function(e){var t=st();return le===null?t.memoizedState=e:Hg(t,le.memoizedState,e)},useTransition:function(){var e=Cs(oi)[0],t=st().memoizedState;return[e,t]},useMutableSource:Tg,useSyncExternalStore:Rg,useId:Ug,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function iu(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Yn={isMounted:function(e){return(e=e._reactInternals)?Ka(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=Me(),o=xa(e),i=Ut(r,o);i.payload=t,a!=null&&(i.callback=a),t=ha(e,i,o),t!==null&&(bt(t,e,o,r),cn(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=Me(),o=xa(e),i=Ut(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ha(e,i,o),t!==null&&(bt(t,e,o,r),cn(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Me(),r=xa(e),o=Ut(a,r);o.tag=2,t!=null&&(o.callback=t),t=ha(e,o,r),t!==null&&(bt(t,e,r,a),cn(t,e,r))}};function op(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Qo(a,r)||!Qo(o,i):!0}function Gg(e,t,a){var r=!1,o=wa,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=Ue(t)?qa:Ce.current,r=t.contextTypes,i=(r=r!=null)?Or(e,o):wa),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Yn,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function ip(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Yn.enqueueReplaceState(t,t.state,null)}function nu(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},qu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=Ue(t)?qa:Ce.current,o.context=Or(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(iu(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Yn.enqueueReplaceState(o,o.state,null),zn(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Hr(e,t){try{var a="",r=t;do a+=Zb(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Is(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function lu(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var S1=typeof WeakMap=="function"?WeakMap:Map;function Xg(e,t,a){a=Ut(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){On||(On=!0,vu=r),lu(e,t)},a}function Yg(e,t,a){a=Ut(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){lu(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){lu(e,t),typeof r!="function"&&(va===null?va=new Set([this]):va.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function np(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new S1;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=F1.bind(null,e,t,a),t.then(e,e))}function lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sp(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=Ut(-1,1),t.tag=2,ha(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var C1=Xt.ReactCurrentOwner,Ne=!1;function $e(e,t,a,r){t.child=e===null?Cg(t,null,a,r):_r(t,e.child,a,r)}function up(e,t,a,r,o){a=a.render;var i=t.ref;return Dr(t,o),r=Yu(e,t,a,r,i,o),a=Ku(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(X&&a&&Fu(t),t.flags|=1,$e(e,t,r,o),t.child)}function dp(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!nd(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,Kg(e,t,i,r,o)):(e=vn(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(n,r)&&e.ref===t.ref)return Gt(e,t,o)}return t.flags|=1,e=ba(i,r),e.ref=t.ref,e.return=t,t.child=e}function Kg(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Qo(i,r)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Ne=!0);else return t.lanes=e.lanes,Gt(e,t,o)}return su(e,t,a,r,o)}function Qg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Er,Ve),Ve|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Er,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W(Er,Ve),Ve|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W(Er,Ve),Ve|=r;return $e(e,t,o,a),t.child}function Zg(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function su(e,t,a,r,o){var i=Ue(a)?qa:Ce.current;return i=Or(t,i),Dr(t,o),a=Yu(e,t,a,r,i,o),r=Ku(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Gt(e,t,o)):(X&&r&&Fu(t),t.flags|=1,$e(e,t,a,o),t.child)}function cp(e,t,a,r,o){if(Ue(a)){var i=!0;Tn(t)}else i=!1;if(Dr(t,o),t.stateNode===null)gn(e,t),Gg(t,a,r),nu(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=lt(d):(d=Ue(a)?qa:Ce.current,d=Or(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&ip(t,n,r,d),la=!1;var v=t.memoizedState;n.state=v,zn(t,r,n,o),u=t.memoizedState,s!==r||v!==u||He.current||la?(typeof p=="function"&&(iu(t,a,p,r),u=t.memoizedState),(s=la||op(t,a,s,r,v,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,kg(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:mt(t.type,s),n.props=d,h=t.pendingProps,v=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=Ue(a)?qa:Ce.current,u=Or(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||v!==u)&&ip(t,n,r,u),la=!1,v=t.memoizedState,n.state=v,zn(t,r,n,o);var b=t.memoizedState;s!==h||v!==b||He.current||la?(typeof y=="function"&&(iu(t,a,y,r),b=t.memoizedState),(d=la||op(t,a,d,r,v,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return uu(e,t,a,r,i,o)}function uu(e,t,a,r,o,i){Zg(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&Kf(t,a,!1),Gt(e,t,i);r=t.stateNode,C1.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=_r(t,e.child,null,i),t.child=_r(t,null,s,i)):$e(e,t,s,i),t.memoizedState=r.state,o&&Kf(t,a,!0),t.child}function Jg(e){var t=e.stateNode;t.pendingContext?Yf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yf(e,t.context,!1),Wu(e,t.containerInfo)}function fp(e,t,a,r,o){return jr(),ju(o),t.flags|=256,$e(e,t,a,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0};function cu(e){return{baseLanes:e,cachePool:null,transitions:null}}function em(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return ru(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=Zn(n,r,0,null),e=Ua(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=cu(a),t.memoizedState=du,e):Ju(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return I1(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ba(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=ba(s,i):(i=Ua(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?cu(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=du,r}return i=e.child,e=i.sibling,r=ba(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function Ju(e,t){return t=Zn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function on(e,t,a,r){return r!==null&&ju(r),_r(t,e.child,null,a),e=Ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function I1(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=Is(Error(I(422))),on(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Zn({mode:"visible",children:r.children},o,0,null),i=Ua(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&_r(t,e.child,null,n),t.child.memoizedState=cu(n),t.memoizedState=du,i);if((t.mode&1)===0)return on(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=Is(i,r,void 0),on(e,t,n,r)}if(s=(n&e.childLanes)!==0,Ne||s){if(r=ce,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Vt(e,o),bt(r,e,o,-1))}return id(),r=Is(Error(I(421))),on(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=O1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ge=ma(o.nextSibling),Xe=t,X=!0,vt=null,e!==null&&(rt[ot++]=Nt,rt[ot++]=Ht,rt[ot++]=Wa,Nt=e.id,Ht=e.overflow,Wa=t),t=Ju(t,r.children),t.flags|=4096,t)}function pp(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ou(e.return,t,a)}function ks(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function tm(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if($e(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,a,t);else if(e.tag===19)pp(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&An(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),ks(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&An(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}ks(t,!0,a,null,i);break;case"together":ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function gn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ga|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,a=ba(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ba(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function k1(e,t,a){switch(t.tag){case 3:Jg(t),jr();break;case 5:Pg(t);break;case 1:Ue(t.type)&&Tn(t);break;case 4:Wu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W($n,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?em(e,t,a):(W(Y,Y.current&1),e=Gt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return tm(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Qg(e,t,a)}return Gt(e,t,a)}var am,fu,rm,om;am=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};fu=function(){};rm=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Na(Mt.current);var i=null;switch(a){case"input":o=As(e,o),r=As(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Fs(e,o),r=Fs(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=kn)}js(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(qo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(qo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};om=function(e,t,a,r){a!==r&&(t.flags|=4)};function To(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function P1(e,t,a){var r=t.pendingProps;switch(Ou(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Ue(t.type)&&Pn(),Le(t),null;case 3:return r=t.stateNode,Nr(),G(He),G(Ce),Gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(an(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vt!==null&&(yu(vt),vt=null))),fu(e,t),Le(t),null;case 5:Vu(t);var o=Na(ai.current);if(a=t.type,e!==null&&t.stateNode!=null)rm(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Le(t),null}if(e=Na(Mt.current),an(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Et]=t,r[ei]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<Ao.length;o++)V(Ao[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":wf(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":Sf(r,i),V("invalid",r)}js(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&tn(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&tn(r.textContent,s,e),o=["children",""+s]):qo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Ui(r),Lf(r,i,!0);break;case"textarea":Ui(r),Cf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=kn)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mp(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Et]=t,e[ei]=r,am(e,t,!1,!1),t.stateNode=e;e:{switch(n=_s(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<Ao.length;o++)V(Ao[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":wf(e,r),o=As(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":Sf(e,r),o=Fs(e,r),V("invalid",e);break;default:o=r}js(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Dp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&zp(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Wo(e,u):typeof u=="number"&&Wo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(qo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&Su(e,i,u,n))}switch(a){case"input":Ui(e),Lf(e,r,!1);break;case"textarea":Ui(e),Cf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ya(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?$r(e,!!r.multiple,i,!1):r.defaultValue!=null&&$r(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=kn)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)om(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(a=Na(ai.current),Na(Mt.current),an(t)){if(r=t.stateNode,a=t.memoizedProps,r[Et]=t,(i=r.nodeValue!==a)&&(e=Xe,e!==null))switch(e.tag){case 3:tn(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tn(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Le(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Lg(),jr(),t.flags|=98560,i=!1;else if(i=an(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Et]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else vt!==null&&(yu(vt),vt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?se===0&&(se=3):id())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Nr(),fu(e,t),e===null&&Zo(t.stateNode.containerInfo),Le(t),null;case 10:return Hu(t.type._context),Le(t),null;case 17:return Ue(t.type)&&Pn(),Le(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)To(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=An(e),n!==null){for(t.flags|=128,To(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Ur&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304)}else{if(!r)if(e=An(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),To(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Le(t),null}else 2*re()-i.renderingStartTime>Ur&&a!==1073741824&&(t.flags|=128,r=!0,To(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Le(t),null);case 22:case 23:return od(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function T1(e,t){switch(Ou(t),t.tag){case 1:return Ue(t.type)&&Pn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Nr(),G(He),G(Ce),Gu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Vu(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return Nr(),null;case 10:return Hu(t.type._context),null;case 22:case 23:return od(),null;case 24:return null;default:return null}}var nn=!1,Se=!1,R1=typeof WeakSet=="function"?WeakSet:Set,$=null;function Rr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function pu(e,t,a){try{a()}catch(r){J(e,t,r)}}var gp=!1;function E1(e,t){if(Ks=Sn,e=ug(),Bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,v=null;t:for(;;){for(var y;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(y=h.firstChild)!==null;)v=h,h=y;for(;;){if(h===e)break t;if(v===a&&++d===o&&(s=n),v===i&&++p===r&&(u=n),(y=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qs={focusedElem:e,selectionRange:a},Sn=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:mt(t.type,w),M);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return b=gp,gp=!1,b}function No(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&pu(t,a,i)}o=o.next}while(o!==r)}}function Kn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function gu(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function im(e){var t=e.alternate;t!==null&&(e.alternate=null,im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[ei],delete t[eu],delete t[f1],delete t[p1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nm(e){return e.tag===5||e.tag===3||e.tag===4}function mp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kn));else if(r!==4&&(e=e.child,e!==null))for(mu(e,t,a),e=e.sibling;e!==null;)mu(e,t,a),e=e.sibling}function hu(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hu(e,t,a),e=e.sibling;e!==null;)hu(e,t,a),e=e.sibling}var pe=null,ht=!1;function ia(e,t,a){for(a=a.child;a!==null;)lm(e,t,a),a=a.sibling}function lm(e,t,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 5:Se||Rr(a,t);case 6:var r=pe,o=ht;pe=null,ia(e,t,a),pe=r,ht=o,pe!==null&&(ht?(e=pe,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):pe.removeChild(a.stateNode));break;case 18:pe!==null&&(ht?(e=pe,a=a.stateNode,e.nodeType===8?bs(e.parentNode,a):e.nodeType===1&&bs(e,a),Yo(e)):bs(pe,a.stateNode));break;case 4:r=pe,o=ht,pe=a.stateNode.containerInfo,ht=!0,ia(e,t,a),pe=r,ht=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&pu(a,t,n),o=o.next}while(o!==r)}ia(e,t,a);break;case 1:if(!Se&&(Rr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}ia(e,t,a);break;case 21:ia(e,t,a);break;case 22:a.mode&1?(Se=(r=Se)||a.memoizedState!==null,ia(e,t,a),Se=r):ia(e,t,a);break;default:ia(e,t,a)}}function hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new R1),t.forEach(function(r){var o=j1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function gt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,ht=!1;break e;case 3:pe=s.stateNode.containerInfo,ht=!0;break e;case 4:pe=s.stateNode.containerInfo,ht=!0;break e}s=s.return}if(pe===null)throw Error(I(160));lm(i,n,o),pe=null,ht=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sm(t,e),t=t.sibling}function sm(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gt(t,e),Tt(e),r&4){try{No(3,e,e.return),Kn(3,e)}catch(w){J(e,e.return,w)}try{No(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:gt(t,e),Tt(e),r&512&&a!==null&&Rr(a,a.return);break;case 5:if(gt(t,e),Tt(e),r&512&&a!==null&&Rr(a,a.return),e.flags&32){var o=e.stateNode;try{Wo(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ep(o,i),_s(s,n);var d=_s(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?Dp(o,h):p==="dangerouslySetInnerHTML"?zp(o,h):p==="children"?Wo(o,h):Su(o,p,h,d)}switch(s){case"input":Ds(o,i);break;case"textarea":$p(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?$r(o,!!i.multiple,y,!1):v!==!!i.multiple&&(i.defaultValue!=null?$r(o,!!i.multiple,i.defaultValue,!0):$r(o,!!i.multiple,i.multiple?[]:"",!1))}o[ei]=i}catch(w){J(e,e.return,w)}}break;case 6:if(gt(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(gt(t,e),Tt(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Yo(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:gt(t,e),Tt(e);break;case 13:gt(t,e),Tt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ad=re())),r&4&&hp(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Se=(d=Se)||p,gt(t,e),Se=d):gt(t,e),Tt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for($=e,p=e.child;p!==null;){for(h=$=p;$!==null;){switch(v=$,y=v.child,v.tag){case 0:case 11:case 14:case 15:No(4,v,v.return);break;case 1:Rr(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,a=v.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){J(r,a,w)}}break;case 5:Rr(v,v.return);break;case 22:if(v.memoizedState!==null){xp(h);continue}}y!==null?(y.return=v,$=y):xp(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ap("display",n))}catch(w){J(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){J(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:gt(t,e),Tt(e),r&4&&hp(e);break;case 21:break;default:gt(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(nm(a)){var r=a;break e}a=a.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Wo(o,""),r.flags&=-33);var i=mp(e);hu(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=mp(e);mu(e,s,n);break;default:throw Error(I(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $1(e,t,a){$=e,um(e,t,a)}function um(e,t,a){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||nn;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Se;s=nn;var d=Se;if(nn=n,(Se=u)&&!d)for($=o;$!==null;)n=$,u=n.child,n.tag===22&&n.memoizedState!==null?bp(o):u!==null?(u.return=n,$=u):bp(o);for(;i!==null;)$=i,um(i,t,a),i=i.sibling;$=o,nn=s,Se=d}vp(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,$=i):vp(e,t,a)}}function vp(e){for(;$!==null;){var t=$;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Se||Kn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:mt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&tp(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}tp(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Yo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Se||t.flags&512&&gu(t)}catch(v){J(t,t.return,v)}}if(t===e){$=null;break}if(a=t.sibling,a!==null){a.return=t.return,$=a;break}$=t.return}}function xp(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var a=t.sibling;if(a!==null){a.return=t.return,$=a;break}$=t.return}}function bp(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Kn(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{gu(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{gu(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){$=null;break}var s=t.sibling;if(s!==null){s.return=t.return,$=s;break}$=t.return}}var M1=Math.ceil,Fn=Xt.ReactCurrentDispatcher,ed=Xt.ReactCurrentOwner,nt=Xt.ReactCurrentBatchConfig,F=0,ce=null,ie=null,ge=0,Ve=0,Er=Sa(0),se=0,ni=null,Ga=0,Qn=0,td=0,Ho=null,_e=null,ad=0,Ur=1/0,jt=null,On=!1,vu=null,va=null,ln=!1,ca=null,jn=0,Uo=0,xu=null,mn=-1,hn=0;function Me(){return(F&6)!==0?re():mn!==-1?mn:mn=re()}function xa(e){return(e.mode&1)===0?1:(F&2)!==0&&ge!==0?ge&-ge:m1.transition!==null?(hn===0&&(hn=Gp()),hn):(e=_,e!==0||(e=window.event,e=e===void 0?16:eg(e.type)),e)}function bt(e,t,a,r){if(50<Uo)throw Uo=0,xu=null,Error(I(185));li(e,a,r),((F&2)===0||e!==ce)&&(e===ce&&((F&2)===0&&(Qn|=a),se===4&&ua(e,ge)),qe(e,r),a===1&&F===0&&(t.mode&1)===0&&(Ur=re()+500,Gn&&Ca()))}function qe(e,t){var a=e.callbackNode;vy(e,t);var r=Ln(e,e===ce?ge:0);if(r===0)a!==null&&Pf(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&Pf(a),t===1)e.tag===0?g1(yp.bind(null,e)):bg(yp.bind(null,e)),d1(function(){(F&6)===0&&Ca()}),a=null;else{switch(Xp(r)){case 1:a=Tu;break;case 4:a=Wp;break;case 16:a=wn;break;case 536870912:a=Vp;break;default:a=wn}a=vm(a,dm.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function dm(e,t){if(mn=-1,hn=0,(F&6)!==0)throw Error(I(327));var a=e.callbackNode;if(Br()&&e.callbackNode!==a)return null;var r=Ln(e,e===ce?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=_n(e,r);else{t=r;var o=F;F|=2;var i=fm();(ce!==e||ge!==t)&&(jt=null,Ur=re()+500,Ha(e,t));do try{D1();break}catch(s){cm(e,s)}while(!0);Nu(),Fn.current=i,F=o,ie!==null?t=0:(ce=null,ge=0,t=se)}if(t!==0){if(t===2&&(o=Ws(e),o!==0&&(r=o,t=bu(e,o))),t===1)throw a=ni,Ha(e,0),ua(e,r),qe(e,re()),a;if(t===6)ua(e,r);else{if(o=e.current.alternate,(r&30)===0&&!z1(o)&&(t=_n(e,r),t===2&&(i=Ws(e),i!==0&&(r=i,t=bu(e,i))),t===1))throw a=ni,Ha(e,0),ua(e,r),qe(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Oa(e,_e,jt);break;case 3:if(ua(e,r),(r&130023424)===r&&(t=ad+500-re(),10<t)){if(Ln(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Me(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Js(Oa.bind(null,e,_e,jt),t);break}Oa(e,_e,jt);break;case 4:if(ua(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-xt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*M1(r/1960))-r,10<r){e.timeoutHandle=Js(Oa.bind(null,e,_e,jt),r);break}Oa(e,_e,jt);break;case 5:Oa(e,_e,jt);break;default:throw Error(I(329))}}}return qe(e,re()),e.callbackNode===a?dm.bind(null,e):null}function bu(e,t){var a=Ho;return e.current.memoizedState.isDehydrated&&(Ha(e,t).flags|=256),e=_n(e,t),e!==2&&(t=_e,_e=a,t!==null&&yu(t)),e}function yu(e){_e===null?_e=e:_e.push.apply(_e,e)}function z1(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!yt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ua(e,t){for(t&=~td,t&=~Qn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-xt(t),r=1<<a;e[a]=-1,t&=~r}}function yp(e){if((F&6)!==0)throw Error(I(327));Br();var t=Ln(e,0);if((t&1)===0)return qe(e,re()),null;var a=_n(e,t);if(e.tag!==0&&a===2){var r=Ws(e);r!==0&&(t=r,a=bu(e,r))}if(a===1)throw a=ni,Ha(e,0),ua(e,t),qe(e,re()),a;if(a===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Oa(e,_e,jt),qe(e,re()),null}function rd(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(Ur=re()+500,Gn&&Ca())}}function Xa(e){ca!==null&&ca.tag===0&&(F&6)===0&&Br();var t=F;F|=1;var a=nt.transition,r=_;try{if(nt.transition=null,_=1,e)return e()}finally{_=r,nt.transition=a,F=t,(F&6)===0&&Ca()}}function od(){Ve=Er.current,G(Er)}function Ha(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,u1(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(Ou(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pn();break;case 3:Nr(),G(He),G(Ce),Gu();break;case 5:Vu(r);break;case 4:Nr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Hu(r.type._context);break;case 22:case 23:od()}a=a.return}if(ce=e,ie=e=ba(e.current,null),ge=Ve=t,se=0,ni=null,td=Qn=Ga=0,_e=Ho=null,_a!==null){for(t=0;t<_a.length;t++)if(a=_a[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}_a=null}return e}function cm(e,t){do{var a=ie;try{if(Nu(),fn.current=Bn,Dn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Dn=!1}if(Va=0,de=le=K=null,_o=!1,ri=0,ed.current=null,a===null||a.return===null){se=1,ni=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=lp(n);if(y!==null){y.flags&=-257,sp(y,n,s,i,t),y.mode&1&&np(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){np(i,d,t),id();break e}u=Error(I(426))}}else if(X&&s.mode&1){var M=lp(n);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),sp(M,n,s,i,t),ju(Hr(u,s));break e}}i=u=Hr(u,s),se!==4&&(se=2),Ho===null?Ho=[i]:Ho.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Xg(i,u,t);ep(i,g);break e;case 1:s=u;var f=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(va===null||!va.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Yg(i,s,t);ep(i,S);break e}}i=i.return}while(i!==null)}gm(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function fm(){var e=Fn.current;return Fn.current=Bn,e===null?Bn:e}function id(){(se===0||se===3||se===2)&&(se=4),ce===null||(Ga&268435455)===0&&(Qn&268435455)===0||ua(ce,ge)}function _n(e,t){var a=F;F|=2;var r=fm();(ce!==e||ge!==t)&&(jt=null,Ha(e,t));do try{A1();break}catch(o){cm(e,o)}while(!0);if(Nu(),F=a,Fn.current=r,ie!==null)throw Error(I(261));return ce=null,ge=0,se}function A1(){for(;ie!==null;)pm(ie)}function D1(){for(;ie!==null&&!sy();)pm(ie)}function pm(e){var t=hm(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?gm(e):ie=t,ed.current=null}function gm(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=P1(a,t,Ve),a!==null){ie=a;return}}else{if(a=T1(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Oa(e,t,a){var r=_,o=nt.transition;try{nt.transition=null,_=1,B1(e,t,a,r)}finally{nt.transition=o,_=r}return null}function B1(e,t,a,r){do Br();while(ca!==null);if((F&6)!==0)throw Error(I(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(xy(e,i),e===ce&&(ie=ce=null,ge=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ln||(ln=!0,vm(wn,function(){return Br(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var n=_;_=1;var s=F;F|=4,ed.current=null,E1(e,a),sm(a,e),o1(Qs),Sn=!!Ks,Qs=Ks=null,e.current=a,$1(a,e,o),uy(),F=s,_=n,nt.transition=i}else e.current=a;if(ln&&(ln=!1,ca=e,jn=o),i=e.pendingLanes,i===0&&(va=null),fy(a.stateNode,r),qe(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if(On)throw On=!1,e=vu,vu=null,e;return(jn&1)!==0&&e.tag!==0&&Br(),i=e.pendingLanes,(i&1)!==0?e===xu?Uo++:(Uo=0,xu=e):Uo=0,Ca(),null}function Br(){if(ca!==null){var e=Xp(jn),t=nt.transition,a=_;try{if(nt.transition=null,_=16>e?16:e,ca===null)var r=!1;else{if(e=ca,ca=null,jn=0,(F&6)!==0)throw Error(I(331));var o=F;for(F|=4,$=e.current;$!==null;){var i=$,n=i.child;if(($.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for($=d;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:No(8,p,i)}var h=p.child;if(h!==null)h.return=p,$=h;else for(;$!==null;){p=$;var v=p.sibling,y=p.return;if(im(p),p===d){$=null;break}if(v!==null){v.return=y,$=v;break}$=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}$=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,$=n;else e:for(;$!==null;){if(i=$,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:No(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,$=g;break e}$=i.return}}var f=e.current;for($=f;$!==null;){n=$;var x=n.child;if((n.subtreeFlags&2064)!==0&&x!==null)x.return=n,$=x;else e:for(n=f;$!==null;){if(s=$,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Kn(9,s)}}catch(P){J(s,s.return,P)}if(s===n){$=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,$=S;break e}$=s.return}}if(F=o,Ca(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Hn,e)}catch{}r=!0}return r}finally{_=a,nt.transition=t}}return!1}function wp(e,t,a){t=Hr(a,t),t=Xg(e,t,1),e=ha(e,t,1),t=Me(),e!==null&&(li(e,1,t),qe(e,t))}function J(e,t,a){if(e.tag===3)wp(e,e,a);else for(;t!==null;){if(t.tag===3){wp(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(va===null||!va.has(r))){e=Hr(a,e),e=Yg(t,e,1),t=ha(t,e,1),e=Me(),t!==null&&(li(t,1,e),qe(t,e));break}}t=t.return}}function F1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=Me(),e.pingedLanes|=e.suspendedLanes&a,ce===e&&(ge&a)===a&&(se===4||se===3&&(ge&130023424)===ge&&500>re()-ad?Ha(e,0):td|=a),qe(e,t)}function mm(e,t){t===0&&((e.mode&1)===0?t=1:(t=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var a=Me();e=Vt(e,t),e!==null&&(li(e,t,a),qe(e,a))}function O1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),mm(e,a)}function j1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),mm(e,a)}var hm;hm=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ne=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return Ne=!1,k1(e,t,a);Ne=(e.flags&131072)!==0}else Ne=!1,X&&(t.flags&1048576)!==0&&yg(t,En,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;gn(e,t),e=t.pendingProps;var o=Or(t,Ce.current);Dr(t,a),o=Yu(null,t,r,e,o,a);var i=Ku();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,Tn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,qu(t),o.updater=Yn,t.stateNode=o,o._reactInternals=t,nu(t,r,e,a),t=uu(null,t,r,!0,i,a)):(t.tag=0,X&&i&&Fu(t),$e(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(gn(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=N1(r),e=mt(r,e),o){case 0:t=su(null,t,r,e,a);break e;case 1:t=cp(null,t,r,e,a);break e;case 11:t=up(null,t,r,e,a);break e;case 14:t=dp(null,t,r,mt(r.type,e),a);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),su(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),cp(e,t,r,o,a);case 3:e:{if(Jg(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,kg(e,t),zn(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Hr(Error(I(423)),t),t=fp(e,t,r,a,o);break e}else if(r!==o){o=Hr(Error(I(424)),t),t=fp(e,t,r,a,o);break e}else for(Ge=ma(t.stateNode.containerInfo.firstChild),Xe=t,X=!0,vt=null,a=Cg(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(jr(),r===o){t=Gt(e,t,a);break e}$e(e,t,r,a)}t=t.child}return t;case 5:return Pg(t),e===null&&ru(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Zs(r,o)?n=null:i!==null&&Zs(r,i)&&(t.flags|=32),Zg(e,t),$e(e,t,n,a),t.child;case 6:return e===null&&ru(t),null;case 13:return em(e,t,a);case 4:return Wu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=_r(t,null,r,a):$e(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),up(e,t,r,o,a);case 7:return $e(e,t,t.pendingProps,a),t.child;case 8:return $e(e,t,t.pendingProps.children,a),t.child;case 12:return $e(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W($n,r._currentValue),r._currentValue=n,i!==null)if(yt(i.value,n)){if(i.children===o.children&&!He.current){t=Gt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ut(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),ou(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(I(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),ou(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}$e(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dr(t,a),o=lt(o),r=r(o),t.flags|=1,$e(e,t,r,a),t.child;case 14:return r=t.type,o=mt(r,t.pendingProps),o=mt(r.type,o),dp(e,t,r,o,a);case 15:return Kg(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:mt(r,o),gn(e,t),t.tag=1,Ue(r)?(e=!0,Tn(t)):e=!1,Dr(t,a),Gg(t,r,o),nu(t,r,o,a),uu(null,t,r,!0,e,a);case 19:return tm(e,t,a);case 22:return Qg(e,t,a)}throw Error(I(156,t.tag))};function vm(e,t){return qp(e,t)}function _1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,r){return new _1(e,t,a,r)}function nd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function N1(e){if(typeof e=="function")return nd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===ku)return 14}return 2}function ba(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function vn(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")nd(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case yr:return Ua(a.children,o,i,t);case Cu:n=8,o|=8;break;case Es:return e=it(12,a,t,o|2),e.elementType=Es,e.lanes=i,e;case $s:return e=it(13,a,t,o),e.elementType=$s,e.lanes=i,e;case Ms:return e=it(19,a,t,o),e.elementType=Ms,e.lanes=i,e;case Pp:return Zn(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ip:n=10;break e;case kp:n=9;break e;case Iu:n=11;break e;case ku:n=14;break e;case na:n=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=it(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Ua(e,t,a,r){return e=it(7,e,r,t),e.lanes=a,e}function Zn(e,t,a,r){return e=it(22,e,r,t),e.elementType=Pp,e.lanes=a,e.stateNode={isHidden:!1},e}function Ps(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Ts(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cs(0),this.expirationTimes=cs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ld(e,t,a,r,o,i,n,s,u){return e=new H1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(i),e}function U1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function xm(e){if(!e)return wa;e=e._reactInternals;e:{if(Ka(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var a=e.type;if(Ue(a))return xg(e,a,t)}return t}function bm(e,t,a,r,o,i,n,s,u){return e=ld(a,r,!0,e,o,i,n,s,u),e.context=xm(null),a=e.current,r=Me(),o=xa(a),i=Ut(r,o),i.callback=t??null,ha(a,i,o),e.current.lanes=o,li(e,o,r),qe(e,r),e}function Jn(e,t,a,r){var o=t.current,i=Me(),n=xa(o);return a=xm(a),t.context===null?t.context=a:t.pendingContext=a,t=Ut(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ha(o,t,n),e!==null&&(bt(e,o,n,i),cn(e,o,n)),n}function Nn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function sd(e,t){Lp(e,t),(e=e.alternate)&&Lp(e,t)}function q1(){return null}var ym=typeof reportError=="function"?reportError:function(e){console.error(e)};function ud(e){this._internalRoot=e}el.prototype.render=ud.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Jn(e,t,null,null)};el.prototype.unmount=ud.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xa(function(){Jn(null,e,null,null)}),t[Wt]=null}};function el(e){this._internalRoot=e}el.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<sa.length&&t!==0&&t<sa[a].priority;a++);sa.splice(a,0,e),a===0&&Jp(e)}};function dd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function tl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sp(){}function W1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=Nn(n);i.call(d)}}var n=bm(t,r,e,0,null,!1,!1,"",Sp);return e._reactRootContainer=n,e[Wt]=n.current,Zo(e.nodeType===8?e.parentNode:e),Xa(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=Nn(u);s.call(d)}}var u=ld(e,0,!1,null,null,!1,!1,"",Sp);return e._reactRootContainer=u,e[Wt]=u.current,Zo(e.nodeType===8?e.parentNode:e),Xa(function(){Jn(t,u,a,r)}),u}function al(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=Nn(n);s.call(u)}}Jn(t,n,e,o)}else n=W1(a,t,e,o,r);return Nn(n)}Yp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=zo(t.pendingLanes);a!==0&&(Ru(t,a|1),qe(t,re()),(F&6)===0&&(Ur=re()+500,Ca()))}break;case 13:Xa(function(){var r=Vt(e,1);if(r!==null){var o=Me();bt(r,e,1,o)}}),sd(e,1)}};Eu=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var a=Me();bt(t,e,134217728,a)}sd(e,134217728)}};Kp=function(e){if(e.tag===13){var t=xa(e),a=Vt(e,t);if(a!==null){var r=Me();bt(a,e,t,r)}sd(e,t)}};Qp=function(){return _};Zp=function(e,t){var a=_;try{return _=e,t()}finally{_=a}};Hs=function(e,t,a){switch(t){case"input":if(Ds(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=Vn(r);if(!o)throw Error(I(90));Rp(r),Ds(r,o)}}}break;case"textarea":$p(e,a);break;case"select":t=a.value,t!=null&&$r(e,!!a.multiple,t,!1)}};Op=rd;jp=Xa;var V1={usingClientEntryPoint:!1,Events:[ui,Cr,Vn,Bp,Fp,rd]},Ro={findFiberByHostInstance:ja,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},G1={bundleType:Ro.bundleType,version:Ro.version,rendererPackageName:Ro.rendererPackageName,rendererConfig:Ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Hp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ro.findFiberByHostInstance||q1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Eo.isDisabled&&Eo.supportsFiber))try{Hn=Eo.inject(G1),$t=Eo}catch{}var Eo;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;Qe.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dd(t))throw Error(I(200));return U1(e,t,null,a)};Qe.createRoot=function(e,t){if(!dd(e))throw Error(I(299));var a=!1,r="",o=ym;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ld(e,1,!1,null,null,a,!1,r,o),e[Wt]=t.current,Zo(e.nodeType===8?e.parentNode:e),new ud(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Hp(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return Xa(e)};Qe.hydrate=function(e,t,a){if(!tl(t))throw Error(I(200));return al(null,e,t,!0,a)};Qe.hydrateRoot=function(e,t,a){if(!dd(e))throw Error(I(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=ym;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=bm(t,null,e,1,a??null,o,!1,i,n),e[Wt]=t.current,Zo(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new el(t)};Qe.render=function(e,t,a){if(!tl(t))throw Error(I(200));return al(null,e,t,!1,a)};Qe.unmountComponentAtNode=function(e){if(!tl(e))throw Error(I(40));return e._reactRootContainer?(Xa(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};Qe.unstable_batchedUpdates=rd;Qe.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!tl(a))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return al(e,t,a,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426"});var Ia=Ot((QI,Sm)=>{"use strict";function Lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)}catch(e){console.error(e)}}Lm(),Sm.exports=wm()});var Im=Ot(cd=>{"use strict";var Cm=Ia();cd.createRoot=Cm.createRoot,cd.hydrateRoot=Cm.hydrateRoot;var ZI});var Bh=Ot(vl=>{"use strict";var jw=C(),_w=Symbol.for("react.element"),Nw=Symbol.for("react.fragment"),Hw=Object.prototype.hasOwnProperty,Uw=jw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qw={key:!0,ref:!0,__self:!0,__source:!0};function Dh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)Hw.call(t,r)&&!qw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:_w,type:e,key:i,ref:n,props:o,_owner:Uw.current}}vl.Fragment=Nw;vl.jsx=Dh;vl.jsxs=Dh});var m=Ot((Kk,Fh)=>{"use strict";Fh.exports=Bh()});var Cb=c(Im(),1);var ue=c(C());var N="-ms-",Qa="-moz-",O="-webkit-",rl="comm",ka="rule",Vr="decl";var km="@import";var Pm="@namespace",ol="@keyframes";var Tm="@layer";var fd=Math.abs,ci=String.fromCharCode,fi=Object.assign;function Rm(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function il(e){return e.trim()}function wt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,a){return e.replace(t,a)}function Gr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function Lt(e,t,a){return e.slice(t,a)}function Ie(e){return e.length}function nl(e){return e.length}function Za(e,t){return t.push(e),e}function Em(e,t){return e.map(t).join("")}function pd(e,t){return e.filter(function(a){return!wt(a,t)})}var ll=1,Xr=1,$m=0,ut=0,ne=0,Kr="";function pi(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:ll,column:Xr,length:n,return:"",siblings:s}}function Yt(e,t){return fi(pi("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ja(e){for(;e.root;)e=Yt(e.root,{children:[e]});Za(e,e.siblings)}function Mm(){return ne}function zm(){return ne=ut>0?Z(Kr,--ut):0,Xr--,ne===10&&(Xr=1,ll--),ne}function dt(){return ne=ut<$m?Z(Kr,ut++):0,Xr++,ne===10&&(Xr=1,ll++),ne}function Kt(){return Z(Kr,ut)}function gi(){return ut}function sl(e,t){return Lt(Kr,e,t)}function Yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Am(e){return ll=Xr=1,$m=Ie(Kr=e),ut=0,[]}function Dm(e){return Kr="",e}function ul(e){return il(sl(ut-1,gd(e===91?e+2:e===40?e+1:e)))}function Bm(e){for(;(ne=Kt())&&ne<33;)dt();return Yr(e)>2||Yr(ne)>3?"":" "}function Fm(e,t){for(;--t&&dt()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return sl(e,gi()+(t<6&&Kt()==32&&dt()==32))}function gd(e){for(;dt();)switch(ne){case e:return ut;case 34:case 39:e!==34&&e!==39&&gd(ne);break;case 40:e===41&&gd(e);break;case 92:dt();break}return ut}function Om(e,t){for(;dt()&&e+ne!==57;)if(e+ne===84&&Kt()===47)break;return"/*"+sl(t,ut-1)+"*"+ci(e===47?e:dt())}function jm(e){for(;!Yr(Kt());)dt();return sl(e,ut)}function Hm(e){return Dm(dl("",null,null,null,[""],e=Am(e),0,[0],e))}function dl(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,v=0,y=0,b=0,w=1,M=1,g=1,f=0,x="",S=o,P=i,R=r,k=x;M;)switch(b=f,f=dt()){case 40:if(b!=108&&Z(k,h-1)==58){Gr(k+=z(ul(f),"&","&\f"),"&\f",fd(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=ul(f);break;case 9:case 10:case 13:case 32:k+=Bm(b);break;case 92:k+=Fm(gi()-1,7);continue;case 47:switch(Kt()){case 42:case 47:Za(X1(Om(dt(),gi()),t,a,u),u),(Yr(b||1)==5||Yr(Kt()||1)==5)&&Ie(k)&&Lt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=Ie(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+p:g==-1&&(k=z(k,/\f/g,"")),y>0&&(Ie(k)-h||w===0&&b===47)&&Za(y>32?Nm(k+";",r,a,h-1,u):Nm(z(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(Za(R=_m(k,t,a,d,p,o,s,x,S=[],P=[],h,i),i),f===123)if(p===0)dl(k,t,R,R,S,i,h,s,P);else{switch(v){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?dl(e,R,R,r&&Za(_m(e,R,R,0,0,o,s,x,o,S=[],h,P),P),o,P,h,s,r?S:P):dl(k,R,R,R,[""],P,0,s,P)}}d=p=y=0,w=g=1,x=k="",h=n;break;case 58:h=1+Ie(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&zm()==125)continue}switch(k+=ci(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ie(k)-1)*g,g=1;break;case 64:Kt()===45&&(k+=ul(dt())),v=Kt(),p=h=Ie(x=k+=jm(gi())),f++;break;case 45:b===45&&Ie(k)==2&&(w=0)}}return i}function _m(e,t,a,r,o,i,n,s,u,d,p,h){for(var v=o-1,y=o===0?i:[""],b=nl(y),w=0,M=0,g=0;w<r;++w)for(var f=0,x=Lt(e,v+1,v=fd(M=n[w])),S=e;f<b;++f)(S=il(M>0?y[f]+" "+x:z(x,/&\f/g,y[f])))&&(u[g++]=S);return pi(e,t,a,o===0?ka:s,u,d,p,h)}function X1(e,t,a,r){return pi(e,t,a,rl,ci(Mm()),Lt(e,2,-2),0,r)}function Nm(e,t,a,r,o){return pi(e,t,a,Vr,Lt(e,0,r),Lt(e,r+1,-1),r,o)}function md(e,t,a){switch(Rm(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Qa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Qa+e+N+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+N+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+N+e+e;case 6165:return O+e+N+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+N+"flex-$1$2")+e;case 5443:return O+e+N+"flex-item-"+z(e,/flex-|-self/g,"")+(wt(e,/flex-|baseline/)?"":N+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+N+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+N+z(e,"shrink","negative")+e;case 5292:return O+e+N+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+N+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+N+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!wt(e,/flex-|baseline/))return N+"grid-column-align"+Lt(e,t)+e;break;case 2592:case 3360:return N+z(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,wt(r.props,/grid-\w+-end/)})?~Gr(e+(a=a[t].value),"span",0)?e:N+z(e,"-start","")+e+N+"grid-row-span:"+(~Gr(a,"span",0)?wt(a,/\d+/):+wt(a,/\d+/)-+wt(e,/\d+/))+";":N+z(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return wt(r.props,/grid-\w+-start/)})?e:N+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Qa+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gr(e,"stretch",0)?md(z(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return N+o+":"+i+d+(n?N+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+N+"$2box$3")+e;case 100:return z(e,":",":"+N)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Qr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function Um(e,t,a,r){switch(e.type){case Tm:if(e.children.length)break;case km:case Pm:case Vr:return e.return=e.return||e.value;case rl:return"";case ol:return e.return=e.value+"{"+Qr(e.children,r)+"}";case ka:if(!Ie(e.value=e.props.join(",")))return""}return Ie(a=Qr(e.children,r))?e.return=e.value+"{"+a+"}":""}function qm(e){var t=nl(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Wm(e){return function(t){t.root||(t=t.return)&&e(t)}}function Vm(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Vr:e.return=md(e.value,e.length,a);return;case ol:return Qr([Yt(e,{value:z(e.value,"@","@"+O)})],r);case ka:if(e.length)return Em(a=e.props,function(o){switch(wt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ja(Yt(e,{props:[z(o,/:(read-\w+)/,":"+Qa+"$1")]})),Ja(Yt(e,{props:[o]})),fi(e,{props:pd(a,r)});break;case"::placeholder":Ja(Yt(e,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ja(Yt(e,{props:[z(o,/:(plac\w+)/,":"+Qa+"$1")]})),Ja(Yt(e,{props:[z(o,/:(plac\w+)/,N+"input-$1")]})),Ja(Yt(e,{props:[o]})),fi(e,{props:pd(a,r)});break}return""})}}var hd,vd,Qt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",rh="active",oh="data-styled-version",ml="6.4.3",Ed=`/*!sc*/
`,xi=typeof window<"u"&&typeof document<"u";function Gm(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var Y1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(vd=(hd=Gm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&hd!==void 0?hd:Gm("SC_DISABLE_SPEEDY"))!==null&&vd!==void 0?vd:typeof process<"u"&&process.env!==void 0&&!1),ih="sc-keyframes-",K1={};function wi(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var Tk=1<<30,cl=new Map,pl=new Map,fl=1,hi=e=>{if(cl.has(e))return cl.get(e);for(;pl.has(fl);)fl++;let t=fl++;return cl.set(e,t),pl.set(t,e),t},Q1=e=>pl.get(e),Z1=(e,t)=>{fl=t+1,cl.set(e,t),pl.set(t,e)};var $d=Object.freeze([]),Zr=Object.freeze({});function nh(e,t,a=Zr){return e.theme!==a.theme&&e.theme||t||a.theme}var J1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ew=/(^-|-$)/g;function lh(e){return e.replace(J1,"-").replace(ew,"")}var tw=/(a)(d)/gi,Xm=e=>String.fromCharCode(e+(e>25?39:97));function Md(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Xm(t%52)+a;return(Xm(t%52)+a).replace(tw,"$1-$2")}var wd=5381,tr=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},sh=e=>tr(wd,e);function zd(e){return Md(sh(e)>>>0)}function aw(e){return e.displayName||e.name||"Component"}function Ld(e){return typeof e=="string"&&!0}function rw(e){return Ld(e)?`styled.${e}`:`Styled(${aw(e)})`}var uh=Symbol.for("react.memo"),ow=Symbol.for("react.forward_ref"),iw={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},nw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lw={[ow]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[uh]:dh};function Ym(e){return("type"in(t=e)&&t.type.$$typeof)===uh?dh:"$$typeof"in e?lw[e.$$typeof]:iw;var t}var sw=Object.defineProperty,uw=Object.getOwnPropertyNames,dw=Object.getOwnPropertySymbols,cw=Object.getOwnPropertyDescriptor,fw=Object.getPrototypeOf,pw=Object.prototype;function ch(e,t,a){if(typeof t!="string"){let r=fw(t);r&&r!==pw&&ch(e,r,a);let o=uw(t).concat(dw(t)),i=Ym(e),n=Ym(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in nw||a&&a[u]||n&&u in n||i&&u in i)){let d=cw(t,u);try{sw(e,u,d)}catch{}}}}return e}function Li(e){return typeof e=="function"}var gw=Symbol.for("react.forward_ref");function Ad(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===gw&&"styledComponentId"in e}function vi(e,t){return e&&t?e+" "+t:e||t||""}function gl(e,t){return e.join(t||"")}function bi(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sd(e,t,a=!1){if(!a&&!bi(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=Sd(e[r],t[r]);else if(bi(t))for(let r in t)e[r]=Sd(e[r],t[r]);return e}function Dd(e,t){Object.defineProperty(e,"toString",{value:t})}var mw=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw wi(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+Ed;return t}},hw=`style[${Qt}][${oh}="${ml}"]`,vw=new RegExp(`^${Qt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Km=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,Cd=e=>{if(!e)return document;if(Km(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(Km(t))return t}return document},xw=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},bw=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(Ed),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(vw);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(Z1(p,d),xw(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},xd=e=>{let t=Cd(e.options.target).querySelectorAll(hw);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Qt)!==rh&&(bw(e,o),o.parentNode&&o.parentNode.removeChild(o))}},mi=!1;function yw(){if(mi!==!1)return mi;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return mi=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return mi=t.getAttribute("content")||void 0}return mi=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var fh=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Qt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Qt,rh),o.setAttribute(oh,ml);let s=t||yw();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},ww=class{constructor(e,t){this.element=fh(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw wi(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},Lw=class{constructor(e,t){this.element=fh(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Qm=xi,Sw={isServer:!xi,useCSSOMInjection:!Y1},yi=class e{static registerId(t){return hi(t)}constructor(t=Zr,a={},r){this.options=Object.assign(Object.assign({},Sw),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&xi&&Qm&&(Qm=!1,xd(this)),Dd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=Q1(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let v=Qt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=h+v+'{content:"'+y+'"}'+Ed}return s})(this))}rehydrate(){!this.server&&xi&&xd(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&xi&&t.target!==this.options.target&&Cd(this.options.target)!==Cd(t.target)&&xd(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new ww(r,o):new Lw(r,o))(this.options),new mw(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){hi(t),t.startsWith(ih)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(hi(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(hi(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},ph=new WeakSet,Cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Iw(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in Cw||e.startsWith("--")?String(t).trim():t+"px"}var er=47;function Zm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var gh=Symbol.for("sc-keyframes");function kw(e){return typeof e=="object"&&e!==null&&gh in e}function mh(e){return Li(e)&&!(e.prototype&&e.prototype.isReactComponent)}var hh=e=>e==null||e===!1||e==="",Pw=Symbol.for("react.client.reference");function Jm(e){return e.$$typeof===Pw}function vh(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!hh(r)&&(Array.isArray(r)&&ph.has(r)||Li(r)?t.push(Zm(a)+":",r,";"):bi(r)?(t.push(a+" {"),vh(r,t),t.push("}")):t.push(Zm(a)+": "+Iw(a,r)+";"))}}function Pa(e,t,a,r,o=[]){if(hh(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(Jm(e))return o;if(mh(e)&&t){let n=e(t);return Pa(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)Pa(e[n],t,a,r,o);return o}return Ad(e)?(o.push(`.${e.styledComponentId}`),o):kw(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):Jm(e)?o:bi(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(vh(e,o),o):(o.push(e.toString()),o)}var Tw=sh(ml),Id=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=tr(Tw,a),this.baseStyle=r,yi.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(mh(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=gl(Pa(u,t,a,r)))}else i+=gl(Pa(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=Md(tr(tr(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=vi(o,s)}}return o}},Rw=/&/g;function xh(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function bd(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==er||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===er&&(n=!1,u++);else if(d!==34&&d!==39||xh(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function bh(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&bh(i.children,t)}return e}function yh({options:e=Zr,plugins:t=$d}=Zr){let a,r,o,i=(v,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:v,n=t.slice();n.push(v=>{v.type===ka&&v.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),v.props[0]=v.props[0].replace(Rw,r).replace(o,i))}),e.prefix&&n.push(Vm),n.push(Um);let s=[],u=qm(n.concat(Wm(v=>s.push(v)))),d=(v,y="",b="",w="&")=>{a=w,r=y,o=void 0;let M=(function(f){let x=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!x&&!S)return f;if(!x)return bd(f);let P=f.length,R="",k=0,T=0,U=0,A=0,ae=0,Aa=!1;for(;T<P;){let xe=f.charCodeAt(T);if(xe!==34&&xe!==39||xh(f,T))if(U===0)if(xe===er&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==er);)T++;T+=2}else if(xe!==40)if(xe!==41)if(A>0)T++;else if(xe===42&&T+1<P&&f.charCodeAt(T+1)===er)R+=f.substring(k,T),T+=2,k=T,Aa=!0;else if(xe===er&&T+1<P&&f.charCodeAt(T+1)===er){for(R+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,Aa=!0}else xe===123?ae++:xe===125&&ae--,T++;else A>0&&A--,T++;else A++,T++;else T++;else U===0?U=xe:U===xe&&(U=0),T++}return Aa?(k<P&&(R+=f.substring(k)),ae===0?R:bd(R)):ae===0?f:bd(f)})(v),g=Hm(b||y?b+" "+y+" { "+M+" }":M);return e.namespace&&(g=bh(g,e.namespace)),s=[],Qr(g,u),s},p=e,h=wd;for(let v=0;v<t.length;v++)t[v].name||wi(15),h=tr(h,t[v].name);return p?.namespace&&(h=tr(h,p.namespace)),p?.prefix&&(h=tr(h,"p")),d.hash=h!==wd?h.toString():"",d}var Ew=new yi,kd=yh(),Bd=ue.default.createContext({shouldForwardProp:void 0,styleSheet:Ew,stylis:kd,stylisPlugins:void 0}),Rk=Bd.Consumer;function Fd(){return ue.default.useContext(Bd)}function wh(e){var t;let a=Fd(),{styleSheet:r}=a,o=ue.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=ue.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:yh({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=ue.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return ue.default.createElement(Bd.Provider,{value:u},e.children)}var Od=ue.default.createContext(void 0),Ek=Od.Consumer;var eh=Object.prototype.hasOwnProperty,yd={};function $w(e,t){let a=typeof e!="string"?"sc":lh(e);yd[a]=(yd[a]||0)+1;let r=a+"-"+zd(ml+a+yd[a]);return t?t+"-"+r:r}function Mw(e,t,a){let r=Ad(e),o=e,i=!Ld(e),{attrs:n=$d,componentId:s=$w(t.displayName,t.parentComponentId),displayName:u=rw(e)}=t,d=t.displayName&&t.componentId?lh(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let M=t.shouldForwardProp;h=(g,f)=>w(g,f)&&M(g,f)}else h=w}let v=new Id(a,d,r?o.componentStyle:void 0);function y(w,M){return(function(g,f,x){let{attrs:S,componentStyle:P,defaultProps:R,foldedComponentIds:k,styledComponentId:T,target:U}=g,A=ue.default.useContext(Od),ae=Fd(),Aa=g.shouldForwardProp||ae.shouldForwardProp,xe=nh(f,A,R)||Zr,ta,vo;{let aa=ue.default.useRef(null),ft=aa.current;if(ft!==null&&ft[1]===xe&&ft[2]===ae.styleSheet&&ft[3]===ae.stylis&&ft[7]===P&&(function(mr,We,Oe){let je=mr,be=We,xo=0;for(let Da in be)if(eh.call(be,Da)&&(xo++,je[Da]!==be[Da]))return!1;return xo===Oe})(ft[0],f,ft[4]))ta=ft[5],vo=ft[6];else{ta=(function(We,Oe,je){let be=Object.assign(Object.assign({},Oe),{className:void 0,theme:je}),xo=We.length>1;for(let Da=0;Da<We.length;Da++){let Vl=We[Da],zi=Li(Vl)?Vl(xo?Object.assign({},be):be):Vl;for(let ra in zi)ra==="className"?be.className=vi(be.className,zi[ra]):ra==="style"?be.style=Object.assign(Object.assign({},be.style),zi[ra]):ra in Oe&&Oe[ra]===void 0||(be[ra]=zi[ra])}return"className"in Oe&&typeof Oe.className=="string"&&(be.className=vi(be.className,Oe.className)),be})(S,f,xe),vo=(function(We,Oe,je,be){return We.generateAndInjectStyles(Oe,je,be)})(P,ta,ae.styleSheet,ae.stylis);let mr=0;for(let We in f)eh.call(f,We)&&mr++;aa.current=[f,xe,ae.styleSheet,ae.stylis,mr,ta,vo,P]}}let Mi=ta.as||U,ql=(function(aa,ft,mr,We){let Oe={};for(let je in aa)aa[je]===void 0||je[0]==="$"||je==="as"||je==="theme"&&aa.theme===mr||(je==="forwardedAs"?Oe.as=aa.forwardedAs:We&&!We(je,ft)||(Oe[je]=aa[je]));return Oe})(ta,Mi,xe,Aa),Wl=vi(k,T);return vo&&(Wl+=" "+vo),ta.className&&(Wl+=" "+ta.className),ql[Ld(Mi)&&Mi.includes("-")?"class":"className"]=Wl,x&&(ql.ref=x),(0,ue.createElement)(Mi,ql)})(b,w,M)}y.displayName=u;let b=ue.default.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?vi(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function(M,...g){for(let f of g)Sd(M,f,!0);return M})({},o.defaultProps,w):w}}),Dd(b,()=>`.${b.styledComponentId}`),i&&ch(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var zw=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function th(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var ah=e=>(ph.add(e),e);function L(e,...t){if(Li(e)||bi(e))return ah(Pa(th($d,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Pa(a):ah(Pa(th(a,t)))}function Pd(e,t,a=Zr){if(!t)throw wi(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>Pd(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>Pd(e,t,Object.assign(Object.assign({},a),o)),r}var Lh=e=>Pd(Mw,e),l=Lh;zw.forEach(e=>{l[e]=Lh(e)});var Td=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(Li(i)&&!Ad(i))return!1}return!0})(t),yi.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=gl(Pa(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function Sh(e,...t){let a=L(e,...t),r=`sc-global-${zd(JSON.stringify(a))}`,o=new Td(a,r),i=s=>{let u=Fd(),d=ue.default.useContext(Od),p;{let h=ue.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],v=ue.default.useRef(o);ue.default.useLayoutEffect(()=>{u.styleSheet.server||(v.current!==o&&(u.styleSheet.clearRules(r),v.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),ue.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,K1,d,h);else{let v=Object.assign(Object.assign({},u),{theme:nh(u,p,i.defaultProps)});o.renderStyles(s,v,d,h)}}return ue.default.memo(i)}var Ch,Rd=class{constructor(t,a){this[Ch]=!0,this.inject=(r,o=kd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=ih+t,this.rules=a,hi(this.id),Dd(this,()=>{throw wi(12,String(this.name))})}getName(t=kd){return t.hash?this.name+Md(+t.hash>>>0):this.name}};function zt(e,...t){let a=gl(L(e,...t)),r=zd(a);return new Rd(r,a)}Ch=gh;var $k=`__sc-${Qt}__`;var Mk=`:not(style[${Qt}])`,zk=`style[${Qt}]`;var Ih=`/* Generated from src/tokens. Do not edit directly. */

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
`;var jd=document.currentScript??document.querySelector("script[data-project]"),Ta={project:jd?.dataset.project??"default",seedUrl:jd?.dataset.seed,version:jd?.dataset.version||void 0};var ar=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,Si=e=>e.comments[0]?.body??"",kh=e=>e.comments[0]?.author??"";function Ph(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:ar(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}function Th(e,t){return e.filter(a=>!t[a.id]?.hidden).map(a=>{let r=t[a.id];if(!r)return{...a,origin:"seed"};let o=new Set(r.hiddenCommentIds??[]),i=a.comments.filter(n=>!o.has(n.id)).map(n=>r.editedBodies?.[n.id]?{...n,body:r.editedBodies[n.id]}:n);return{...a,origin:"seed",resolved:r.resolved??a.resolved,comments:[...i,...r.addedComments??[]]}}).filter(a=>a.comments.length>0)}function Rh(e,t,a){let r=e.addedComments??[];return r.some(o=>o.id===t)?{addedComments:r.map(o=>o.id===t?{...o,body:a}:o)}:{editedBodies:{...e.editedBodies,[t]:a}}}function Eh(e,t){let a=e.addedComments??[];return a.some(r=>r.id===t)?{addedComments:a.filter(r=>r.id!==t)}:{hiddenCommentIds:[...e.hiddenCommentIds??[],t]}}var $h="fbw:author",hl=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;Ph(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.refreshSeeds(),this.notify()}refreshSeeds(){this.seedThreads=Th(this.rawSeeds,this.overrides)}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o){let i={id:ar(),author:a,body:r,createdAt:new Date().toISOString(),version:o};if(this.isSeed(t)){let n=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...n.addedComments??[],i]});return}this.threads=this.threads.map(n=>n.id===t?{...n,comments:[...n.comments,i]}:n),this.persist()}updateComment(t,a,r){if(this.isSeed(t)){this.overrideSeed(t,Rh(this.overrides[t]??{},a,r));return}this.threads=this.threads.map(o=>o.id===t?{...o,comments:o.comments.map(i=>i.id===a?{...i,body:r}:i)}:o),this.persist()}removeComment(t,a){if(this.isSeed(t)){this.overrideSeed(t,Eh(this.overrides[t]??{},a));return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r).filter(r=>r.comments.length>0),this.persist()}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.refreshSeeds(),this.notify()}get author(){return localStorage.getItem($h)??""}set author(t){localStorage.setItem($h,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){try{localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}catch{this.threads=this.threads.map(({beforeShot:t,...a})=>a),localStorage.setItem(this.threadsKey,JSON.stringify(this.threads))}this.notify()}notify(){this.listeners.forEach(t=>t())}};var Jr="fbw-host",Dw="#2563eb",_d="fbw:pending-jump",Bw=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function Fw(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${Bw(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function Mh(e){return{page:location.pathname,selector:Fw(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function Ra(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==Jr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function Ow(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${Dw}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function Nd(e){if(e.page!==location.pathname)return!1;let t=Ra(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>Ow(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function zh(e){sessionStorage.setItem(_d,JSON.stringify(e)),location.assign(e.page)}function Ah(){let e=sessionStorage.getItem(_d);if(e){sessionStorage.removeItem(_d);try{let t=JSON.parse(e);setTimeout(()=>Nd(t),400)}catch{}}}var $i=c(C(),1);var ac=c(C(),1),rc=c(C(),1),oc=c(C(),1),ic=c(C(),1),kl=c(C(),1),M2=c(C(),1),gv=c(C(),1),mv=c(C(),1),hv=c(C(),1),Ti=c(C(),1),j2=c(C(),1);var _2=c(m(),1),N2=c(m(),1);var Pv=c(m(),1);var Tv=c(m(),1);var Rv=c(m(),1);var cL=c(m(),1),$v=c(m(),1);var pL=c(m(),1);var gL=c(m(),1),mL=c(m(),1),hL=c(m(),1),Mv=c(m(),1),vL=c(m(),1),Av=c(C(),1);var Bv=c(m(),1),Fv=c(C(),1),Ov=c(m(),1);var jv=c(C(),1);var _v=c(m(),1);var Nv=c(m(),1),uc=c(C(),1);var dc=c(m(),1),Uv=c(C(),1);var qv=c(m(),1),Wv=c(C(),1);var Vv=c(m(),1),Gv=c(C(),1);var Xv=c(m(),1),Yv=c(C(),1);var Kv=c(m(),1),Qv=c(C(),1);var $L=c(m(),1),Zv=c(m(),1),ML=c(C(),1),zL=c(Ia(),1),AL=c(C(),1);var DL=c(m(),1),BL=c(C(),1),Jv=c(m(),1),Tl=c(C(),1),FL=c(Ia(),1),OL=c(m(),1),Rl=c(C(),1);var ex=c(m(),1),fo=c(C(),1);var tx=c(m(),1),ir=c(C(),1);var Be=c(m(),1),HL=c(C(),1),pc=c(m(),1),UL=c(C(),1),gc=c(m(),1),qL=c(C(),1),ax=c(m(),1),mc=c(C(),1);var rx=c(m(),1);var ox=c(m(),1);var ix=c(m(),1);var nx=c(m(),1);var lx=c(m(),1),hc=c(C(),1),VL=c(Ia(),1);var sx=c(C(),1);var ux=c(m(),1),vc=c(m(),1);var dx=c(m(),1);var fx=c(m(),1),YL=c(C(),1);var KL=c(m(),1);var bl=c(C());var xl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var Oh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var jh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var Hd=e=>{let t=jh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var Ci=c(C());var _h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Nh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Hh=(0,Ci.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,Ci.createElement)("svg",{ref:u,..._h,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:xl("lucide",o),...!i&&!Nh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,Ci.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var At=(e,t)=>{let a=(0,bl.forwardRef)(({className:r,...o},i)=>(0,bl.createElement)(Hh,{ref:i,iconNode:t,className:xl(`lucide-${Oh(Hd(e))}`,`lucide-${e}`,r),...o}));return a.displayName=Hd(e),a};var Ww=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],eo=At("check",Ww);var Vw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],rr=At("maximize-2",Vw);var Gw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],to=At("pencil",Gw);var Xw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ea=At("trash-2",Xw);var Yw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ae=At("x",Yw);var px=c(C(),1);var gx=c(m(),1),mx=c(m(),1);var hx=c(m(),1),aS=c(C(),1);var vx=c(m(),1);var xx=c(C(),1);var bx=c(m(),1);var wx=c(m(),1);var iS=c(m(),1);var lS=c(m(),1);var El=c(m(),1);var dS=c(m(),1);var Cx=c(m(),1);var bS=c(m(),1),fr=c(C(),1);var Ix=c(m(),1);var kx=c(m(),1);var Px=c(m(),1),CS=c(C(),1);var Tx=c(m(),1);var Rx=c(m(),1);var IS=c(m(),1);var Ex=c(m(),1);var RS=c(m(),1);var $x=c(m(),1);var $S=c(C(),1);var Mx=c(m(),1),MS=c(C(),1);var Dx=c(m(),1),zS=c(C(),1),Bx=c(m(),1),AS=c(m(),1),Fx=c(m(),1),Ox=c(C(),1);var xc=c(m(),1),jx=c(m(),1);var _x=c(m(),1);var tc=c(m(),1),ur=c(C(),1);var Pe=c(m(),1),VS=c(C(),1),GS=c(Ia(),1);var Hx=c(m(),1);var bc=c(C(),1),yc=c(m(),1),wc=c(C(),1);var Ux=c(m(),1),po=c(C(),1),XS=c(Ia(),1);var qx=c(m(),1),YS=c(m(),1),Wx=c(C(),1),Lc=c(m(),1),Vx=c(C(),1);var Gx=c(m(),1);var Xx=c(m(),1),ZS=c(C(),1),Sc=c(m(),1),Yx=c(C(),1),JS=c(Ia(),1),eC=c(m(),1),et=c(C(),1),$l=c(m(),1);var Cc=c(C(),1),Zx=c(m(),1);var Jx=c(C(),1);var e0=c(m(),1),t0=c(C(),1);var a0=c(m(),1);var r0=c(m(),1);var o0=c(m(),1);var i0=c(m(),1);var It=c(m(),1),s0=c(C(),1);var uo=c(m(),1);var wC=c(m(),1),zl=c(C(),1);var Ic=c(m(),1),LC=c(m(),1),pr=c(C(),1);var u0=c(m(),1),Al=c(C(),1);var d0=c(m(),1),c0=c(C(),1);var Dl=c(m(),1);var IC=c(m(),1);var f0=c(m(),1);var p0=c(m(),1);var g0=c(m(),1),kC=c(C(),1);var m0=c(m(),1),h0=c(C(),1);var v0=c(m(),1),x0=c(m(),1);var nr=c(m(),1),y0=c(m(),1);var w0=c(m(),1);var L0=c(m(),1),DC=c(C(),1);var S0=c(m(),1);var BC=c(m(),1),Bl=c(C(),1);var C0=c(m(),1);var FC=c(m(),1),I0=c(C(),1);var lr=c(m(),1);var k0=c(m(),1),P0=c(C(),1);var T0=c(m(),1);var R0=c(m(),1);var UC=c(m(),1);var E0=c(m(),1),qC=c(C(),1),WC=c(m(),1),$0=c(C(),1),VC=c(m(),1),M0=c(m(),1);var YC=c(m(),1);var KC=c(C(),1);var kc=c(m(),1);var Pc=c(m(),1),Tc=c(C(),1),D0=c(C(),1),Rc=c(m(),1),Ec=c(m(),1);var B0=c(m(),1),$c=c(C(),1);var JC=c(m(),1),F0=c(m(),1),O0=c(m(),1);var j0=c(m(),1);var Mc=c(m(),1),eI=c(m(),1),tI=c(m(),1);var _0=c(m(),1),N0=c(C(),1),H0=c(m(),1),aI=c(C(),1);var zc=c(m(),1),Ac=c(C(),1);var Dc=c(m(),1),U0=c(m(),1),Bc=c(m(),1),q0=c(m(),1),W0=c(m(),1);var V0=c(m(),1);var Fc=c(m(),1);var Oc=c(m(),1);var G0=c(m(),1),jc=c(m(),1),X0=c(m(),1),rI=c(C(),1),K0=c(m(),1),Q0=c(m(),1),oI=c(C(),1);var Z0=c(m(),1),J0=c(m(),1);var iI=c(m(),1);function Uh(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;let a=document.implementation.createHTMLDocument(),r=a.createElement("base"),o=a.createElement("a");return a.head.appendChild(r),a.body.appendChild(o),t&&(r.href=t),o.href=e,o.href}var qh=(()=>{let e=0,t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function St(e){let t=[];for(let a=0,r=e.length;a<r;a++)t.push(e[a]);return t}var ao=null;function wl(e={}){return ao||(e.includeStyleProperties?(ao=e.includeStyleProperties,ao):(ao=St(window.getComputedStyle(document.documentElement)),ao))}function yl(e,t){let r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function Kw(e){let t=yl(e,"border-left-width"),a=yl(e,"border-right-width");return e.clientWidth+t+a}function Qw(e){let t=yl(e,"border-top-width"),a=yl(e,"border-bottom-width");return e.clientHeight+t+a}function Ud(e,t={}){let a=t.width||Kw(e),r=t.height||Qw(e);return{width:a,height:r}}function Wh(){let e,t;try{t=process}catch{}let a=t&&t.env?t.env.devicePixelRatio:null;return a&&(e=parseInt(a,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}var Ze=16384;function Vh(e){(e.width>Ze||e.height>Ze)&&(e.width>Ze&&e.height>Ze?e.width>e.height?(e.height*=Ze/e.width,e.width=Ze):(e.width*=Ze/e.height,e.height=Ze):e.width>Ze?(e.height*=Ze/e.width,e.width=Ze):(e.width*=Ze/e.height,e.height=Ze))}function ro(e){return new Promise((t,a)=>{let r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=a,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function Zw(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Gh(e,t,a){let r="http://www.w3.org/2000/svg",o=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return o.setAttribute("width",`${t}`),o.setAttribute("height",`${a}`),o.setAttribute("viewBox",`0 0 ${t} ${a}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),o.appendChild(i),i.appendChild(e),Zw(o)}var ke=(e,t)=>{if(e instanceof t)return!0;let a=Object.getPrototypeOf(e);return a===null?!1:a.constructor.name===t.name||ke(a,t)};function Jw(e){let t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function e2(e,t){return wl(t).map(a=>{let r=e.getPropertyValue(a),o=e.getPropertyPriority(a);return`${a}: ${r}${o?" !important":""};`}).join(" ")}function t2(e,t,a,r){let o=`.${e}:${t}`,i=a.cssText?Jw(a):e2(a,r);return document.createTextNode(`${o}{${i}}`)}function Xh(e,t,a,r){let o=window.getComputedStyle(e,a),i=o.getPropertyValue("content");if(i===""||i==="none")return;let n=qh();try{t.className=`${t.className} ${n}`}catch{return}let s=document.createElement("style");s.appendChild(t2(n,a,o,r)),t.appendChild(s)}function Yh(e,t,a){Xh(e,t,":before",a),Xh(e,t,":after",a)}var Kh="application/font-woff",Qh="image/jpeg",a2={woff:Kh,woff2:Kh,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Qh,jpeg:Qh,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function r2(e){let t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function oo(e){let t=r2(e).toLowerCase();return a2[t]||""}function o2(e){return e.split(/,/)[1]}function Ii(e){return e.search(/^(data:)/)!==-1}function Wd(e,t){return`data:${t};base64,${e}`}async function Vd(e,t,a){let r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);let o=await r.blob();return new Promise((i,n)=>{let s=new FileReader;s.onerror=n,s.onloadend=()=>{try{i(a({res:r,result:s.result}))}catch(u){n(u)}},s.readAsDataURL(o)})}var qd={};function i2(e,t,a){let r=e.replace(/\?.*/,"");return a&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function io(e,t,a){let r=i2(e,t,a.includeQueryParams);if(qd[r]!=null)return qd[r];a.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let o;try{let i=await Vd(e,a.fetchRequestInit,({res:n,result:s})=>(t||(t=n.headers.get("Content-Type")||""),o2(s)));o=Wd(i,t)}catch(i){o=a.imagePlaceholder||"";let n=`Failed to fetch resource: ${e}`;i&&(n=typeof i=="string"?i:i.message),n&&console.warn(n)}return qd[r]=o,o}async function n2(e){let t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):ro(t)}async function l2(e,t){if(e.currentSrc){let i=document.createElement("canvas"),n=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,n?.drawImage(e,0,0,i.width,i.height);let s=i.toDataURL();return ro(s)}let a=e.poster,r=oo(a),o=await io(a,r,t);return ro(o)}async function s2(e,t){var a;try{if(!((a=e?.contentDocument)===null||a===void 0)&&a.body)return await ki(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function u2(e,t){return ke(e,HTMLCanvasElement)?n2(e):ke(e,HTMLVideoElement)?l2(e,t):ke(e,HTMLIFrameElement)?s2(e,t):e.cloneNode(Zh(e))}var d2=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",Zh=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function c2(e,t,a){var r,o;if(Zh(t))return t;let i=[];return d2(e)&&e.assignedNodes?i=St(e.assignedNodes()):ke(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?i=St(e.contentDocument.body.childNodes):i=St(((o=e.shadowRoot)!==null&&o!==void 0?o:e).childNodes),i.length===0||ke(e,HTMLVideoElement)||await i.reduce((n,s)=>n.then(()=>ki(s,a)).then(u=>{u&&t.appendChild(u)}),Promise.resolve()),t}function f2(e,t,a){let r=t.style;if(!r)return;let o=window.getComputedStyle(e);o.cssText?(r.cssText=o.cssText,r.transformOrigin=o.transformOrigin):wl(a).forEach(i=>{let n=o.getPropertyValue(i);i==="font-size"&&n.endsWith("px")&&(n=`${Math.floor(parseFloat(n.substring(0,n.length-2)))-.1}px`),ke(e,HTMLIFrameElement)&&i==="display"&&n==="inline"&&(n="block"),i==="d"&&t.getAttribute("d")&&(n=`path(${t.getAttribute("d")})`),r.setProperty(i,n,o.getPropertyPriority(i))})}function p2(e,t){ke(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),ke(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function g2(e,t){if(ke(e,HTMLSelectElement)){let r=Array.from(t.children).find(o=>e.value===o.getAttribute("value"));r&&r.setAttribute("selected","")}}function m2(e,t,a){return ke(t,Element)&&(f2(e,t,a),Yh(e,t,a),p2(e,t),g2(e,t)),t}async function h2(e,t){let a=e.querySelectorAll?e.querySelectorAll("use"):[];if(a.length===0)return e;let r={};for(let i=0;i<a.length;i++){let s=a[i].getAttribute("xlink:href");if(s){let u=e.querySelector(s),d=document.querySelector(s);!u&&d&&!r[s]&&(r[s]=await ki(d,t,!0))}}let o=Object.values(r);if(o.length){let i="http://www.w3.org/1999/xhtml",n=document.createElementNS(i,"svg");n.setAttribute("xmlns",i),n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.overflow="hidden",n.style.display="none";let s=document.createElementNS(i,"defs");n.appendChild(s);for(let u=0;u<o.length;u++)s.appendChild(o[u]);e.appendChild(n)}return e}async function ki(e,t,a){return!a&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>u2(r,t)).then(r=>c2(e,r,t)).then(r=>m2(e,r,t)).then(r=>h2(r,t))}var Jh=/url\((['"]?)([^'"]+?)\1\)/g,v2=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,x2=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function b2(e){let t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function y2(e){let t=[];return e.replace(Jh,(a,r,o)=>(t.push(o),a)),t.filter(a=>!Ii(a))}async function w2(e,t,a,r,o){try{let i=a?Uh(t,a):t,n=oo(t),s;if(o){let u=await o(i);s=Wd(u,n)}else s=await io(i,n,r);return e.replace(b2(t),`$1${s}$3`)}catch{}return e}function L2(e,{preferredFontFormat:t}){return t?e.replace(x2,a=>{for(;;){let[r,,o]=v2.exec(a)||[];if(!o)return"";if(o===t)return`src: ${r};`}}):e}function Gd(e){return e.search(Jh)!==-1}async function Ll(e,t,a){if(!Gd(e))return e;let r=L2(e,a);return y2(r).reduce((i,n)=>i.then(s=>w2(s,n,t,a)),Promise.resolve(r))}async function no(e,t,a){var r;let o=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(o){let i=await Ll(o,null,a);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function S2(e,t){await no("background",e,t)||await no("background-image",e,t),await no("mask",e,t)||await no("-webkit-mask",e,t)||await no("mask-image",e,t)||await no("-webkit-mask-image",e,t)}async function C2(e,t){let a=ke(e,HTMLImageElement);if(!(a&&!Ii(e.src))&&!(ke(e,SVGImageElement)&&!Ii(e.href.baseVal)))return;let r=a?e.src:e.href.baseVal,o=await io(r,oo(r),t);await new Promise((i,n)=>{e.onload=i,e.onerror=t.onImageErrorHandler?(...u)=>{try{i(t.onImageErrorHandler(...u))}catch(d){n(d)}}:n;let s=e;s.decode&&(s.decode=i),s.loading==="lazy"&&(s.loading="eager"),a?(e.srcset="",e.src=o):e.href.baseVal=o})}async function I2(e,t){let r=St(e.childNodes).map(o=>Xd(o,t));await Promise.all(r).then(()=>e)}async function Xd(e,t){ke(e,Element)&&(await S2(e,t),await C2(e,t),await I2(e,t))}function ev(e,t){let{style:a}=e;t.backgroundColor&&(a.backgroundColor=t.backgroundColor),t.width&&(a.width=`${t.width}px`),t.height&&(a.height=`${t.height}px`);let r=t.style;return r!=null&&Object.keys(r).forEach(o=>{a[o]=r[o]}),e}var tv={};async function av(e){let t=tv[e];if(t!=null)return t;let r=await(await fetch(e)).text();return t={url:e,cssText:r},tv[e]=t,t}async function rv(e,t){let a=e.cssText,r=/url\(["']?([^"')]+)["']?\)/g,i=(a.match(/url\([^)]+\)/g)||[]).map(async n=>{let s=n.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),Vd(s,t.fetchRequestInit,({result:u})=>(a=a.replace(n,`url(${u})`),[n,u]))});return Promise.all(i).then(()=>a)}function ov(e){if(e==null)return[];let t=[],a=/(\/\*[\s\S]*?\*\/)/gi,r=e.replace(a,""),o=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){let u=o.exec(r);if(u===null)break;t.push(u[0])}r=r.replace(o,"");let i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,n="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(n,"gi");for(;;){let u=i.exec(r);if(u===null){if(u=s.exec(r),u===null)break;i.lastIndex=s.lastIndex}else s.lastIndex=i.lastIndex;t.push(u[0])}return t}async function k2(e,t){let a=[],r=[];return e.forEach(o=>{if("cssRules"in o)try{St(o.cssRules||[]).forEach((i,n)=>{if(i.type===CSSRule.IMPORT_RULE){let s=n+1,u=i.href,d=av(u).then(p=>rv(p,t)).then(p=>ov(p).forEach(h=>{try{o.insertRule(h,h.startsWith("@import")?s+=1:o.cssRules.length)}catch(v){console.error("Error inserting rule from remote css",{rule:h,error:v})}})).catch(p=>{console.error("Error loading remote css",p.toString())});r.push(d)}})}catch(i){let n=e.find(s=>s.href==null)||document.styleSheets[0];o.href!=null&&r.push(av(o.href).then(s=>rv(s,t)).then(s=>ov(s).forEach(u=>{n.insertRule(u,n.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(o=>{if("cssRules"in o)try{St(o.cssRules||[]).forEach(i=>{a.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${o.href}`,i)}}),a))}function P2(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Gd(t.style.getPropertyValue("src")))}async function T2(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");let a=St(e.ownerDocument.styleSheets),r=await k2(a,t);return P2(r)}function iv(e){return e.trim().replace(/["']/g,"")}function R2(e){let t=new Set;function a(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(i=>{t.add(iv(i))}),Array.from(r.children).forEach(i=>{i instanceof HTMLElement&&a(i)})}return a(e),t}async function nv(e,t){let a=await T2(e,t),r=R2(e);return(await Promise.all(a.filter(i=>r.has(iv(i.style.fontFamily))).map(i=>{let n=i.parentStyleSheet?i.parentStyleSheet.href:null;return Ll(i.cssText,n,t)}))).join(`
`)}async function lv(e,t){let a=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await nv(e,t);if(a){let r=document.createElement("style"),o=document.createTextNode(a);r.appendChild(o),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function E2(e,t={}){let{width:a,height:r}=Ud(e,t),o=await ki(e,t,!0);return await lv(o,t),await Xd(o,t),ev(o,t),await Gh(o,a,r)}async function sv(e,t={}){let{width:a,height:r}=Ud(e,t),o=await E2(e,t),i=await ro(o),n=document.createElement("canvas"),s=n.getContext("2d"),u=t.pixelRatio||Wh(),d=t.canvasWidth||a,p=t.canvasHeight||r;return n.width=d*u,n.height=p*u,t.skipAutoScale||Vh(n),n.style.width=`${d}`,n.style.height=`${p}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,n.width,n.height)),s.drawImage(i,0,0,n.width,n.height),n}var pv={};var nc={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},lc={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},he={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},lo={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},Dt={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},Ct={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},z2={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},Pi={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},Sl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},Bt={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},vv={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},xv={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Qd={zero:"0deg",half:"180deg",full:"360deg"},Pl={horizontal:"90deg",diagonal:"135deg"},De={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},or={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},Fe={sm:`@media (max-width: ${or.sm}px)`,smPlus:`@media (max-width: ${or.smPlus}px)`,md:`@media (max-width: ${or.md}px)`,mdWide:`@media (max-width: ${or.mdWide}px)`,lg:`@media (max-width: ${or.lg}px)`,xl:`@media (max-width: ${or.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},Je={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},A2={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},D2={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Yd={press:.95,drag:.985,hoverLift:1.04},B2={landscape:"4 / 3"},F2={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},so={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function bv(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:Bt.xs,md:Bt.md,lg:Bt["2xl"],xl:Bt["4xl"],pill:Bt.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:or,motion:De,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var $a=bv("portalDark",nc,vv),O2=bv("portalLight",lc,xv);var oP=(0,Ti.createContext)(null);var Zt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,ve=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,sc=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,nP=L`
  ${Zt}
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
`,Ri=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,H2=L`
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

  ${Ri}
`,yv=L`
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

  ${Ri}
`,U2=L`
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

  ${Ri}
`,q2=L`
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

  ${Ri}
`,W2=L`
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

  ${Ri}
`,wv=L`
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
`,V2=L`
  ${wv}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,G2=L`
  ${wv}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Lv=L`
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
    ${yv}
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
`,Sv=L`
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
`,X2=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,Cv=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,Y2=L`
  ${Cv}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,K2=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Iv=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,Q2=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,kv=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Z2={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function J2(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var eL={"--ig-radius-2xs":Bt["2xs"],"--ig-radius-xxs":Bt.xxs,"--ig-radius-xs":Bt.xs,"--ig-radius-sm":$a.radius.sm,"--ig-radius-md":$a.radius.md,"--ig-radius-lg":$a.radius.lg,"--ig-radius-xl":$a.radius.xl,"--ig-radius-2xl":Bt["2xl"],"--ig-radius-4xl":Bt["4xl"],"--ig-radius-pill":$a.radius.pill,"--ig-font-sans":$a.typography.fontSans,"--ig-font-mono":$a.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(he.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(he.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(he.svgFillSoft),"--ig-opacity-svg-fill-medium":String(he.svgFillMedium),"--ig-opacity-dim":String(he.dim),"--ig-opacity-dim-soft":String(he.dimSoft),"--ig-opacity-ghost":String(he.ghost),"--ig-opacity-faded":String(he.faded),"--ig-opacity-disabled":String(he.disabled),"--ig-opacity-overlay":String(he.overlay),"--ig-opacity-muted":String(he.muted),"--ig-opacity-subtle":String(he.subtle),"--ig-opacity-emphatic":String(he.emphatic),"--ig-opacity-loud":String(he.loud),"--ig-opacity-loud-plus":String(he.loudPlus),"--ig-opacity-prominent":String(he.prominent),"--ig-opacity-near":String(he.near),"--ig-blur-2xs":lo.blur2xs,"--ig-blur-xs":lo.blurXs,"--ig-blur-sm":lo.blurSm,"--ig-blur-md":lo.blurMd,"--ig-blur-lg":lo.blurLg,"--ig-blur-xl":lo.blurXl,"--ig-icon-xs":Dt.xs,"--ig-icon-sub":Dt.sub,"--ig-icon-2xs":Dt["2xs"],"--ig-icon-sm":Dt.sm,"--ig-icon-sm-plus":Dt.smPlus,"--ig-icon-md":Dt.md,"--ig-icon-lg":Dt.lg,"--ig-icon-xl":Dt.xl,"--ig-icon-2xl":Dt["2xl"],"--ig-icon-3xl":Dt["3xl"],"--ig-svg-stroke-bold":String(z2.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":Sl["1px"],"--ig-border-1_5px":Sl["1_5px"],"--ig-border-2px":Sl["2px"],"--ig-border-3px":Sl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Yd.press),"--ig-scale-drag":String(Yd.drag),"--ig-scale-hover-lift":String(Yd.hoverLift),"--ig-aspect-landscape":B2.landscape,"--ig-control-height-xs":Je.xs,"--ig-control-height-xs-plus":Je.xsPlus,"--ig-control-height-sm":Je.sm,"--ig-control-height-sm-plus":Je.smPlus,"--ig-control-height-md":Je.md,"--ig-control-height-mid-plus":Je.midPlus,"--ig-control-height-mid-plus-tall":Je.midPlusTall,"--ig-control-height-2xl-wide":Je["2xlWide"],"--ig-control-height-lg":Je.lg,"--ig-control-height-xl":Je.xl,"--ig-control-height-2xl":Je["2xl"],"--ig-control-height-3xl":Je["3xl"],"--ig-control-height-3xl-plus":Je["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":De.fastest,"--ig-motion-swift":De.swift,"--ig-motion-fast":De.fast,"--ig-motion-fast-ease":De.fastEase,"--ig-motion-normal":De.normal,"--ig-motion-normal-ease":De.normalEase,"--ig-motion-mobile-nav":De.mobileNav,"--ig-motion-spinner":De.spinner,"--ig-motion-spinner-fast":De.spinnerFast,"--ig-motion-spinner-slow":De.spinnerSlow,"--ig-motion-progress-bar":De.progressBar,"--ig-motion-sync-spin":De.syncSpin,"--ig-motion-shimmer":De.shimmer,"--ig-motion-skeleton":De.skeleton};function Zd(e="dark"){return{...eL,...J2(e==="light"?O2:$a,e==="light"?lc:nc,e==="light"?xv:vv,e==="light")}}var fP=Zd("dark");function Kd(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function tL(){let e=Zd("dark"),t=Zd("light");return[Kd(":root",Z2),Kd(":root, :root[data-theme='dark']",e),Kd(":root[data-theme='light']",t)].join(`
`)+`
`}var gP=Sh`
  ${tL()}

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
    background: ${nc.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${lc.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function sr(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function Il(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var aL=l.div`
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
`;function rL({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Pv.jsx)(aL,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var oL=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function Jd({gap:e,align:t,justify:a,as:r,...o}){return(0,Tv.jsx)(oL,{as:r,$gap:e,$align:t,$justify:a,...o})}var vP=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var xP=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>sr(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${Il(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var bP=l.div`
  width: 100%;
  max-width: ${e=>Il(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>sr(e.$padding)??"var(--ig-space-11)"};
`;var iL={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},nL={default:void 0,mono:"var(--ig-font-mono)"},lL={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},uv={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function sL(e){return typeof e=="string"?lL[e]:e??"var(--ig-font-weight-regular)"}function uL(e){if(e)return e in uv?uv[e]:e}var dL=l.span`
  margin: 0;
  color: ${e=>iL[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&nL[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Ev({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,Rv.jsx)(dL,{as:e,$tone:t,$size:a,$weight:sL(r),$align:o,$uppercase:i,$letterSpacing:uL(n),$fontFamily:s,$tabularNums:u,...d})}var LP=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function fL(e){return(0,$v.jsx)(Ev,{size:"var(--ig-font-size-sm)",...e})}var CP=l.div`
  ${e=>e.$elevation==="raised"?ve:e.$elevation==="card"?sc:Zt}
  border-radius: ${e=>sr(e.$radius)??"var(--ig-radius-2xl)"};
`;var kP=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,PP=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,TP=l.span`
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
`;var xL={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function zv(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Dv=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${xL[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?G2:e.$variant==="secondary"?W2:q2:e.$variant==="ghost"?V2:e.$variant==="secondary"?yv:e.$variant==="accent"?U2:H2}
`,co=Av.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let v="Button",y=d??(u&&u!==v?u:void 0);return(0,Bv.jsxs)(Dv,{ref:h,$variant:zv(t,a),$size:r,$tone:o,...p,"data-ig-component":v,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),Te=Fv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,Ov.jsx)(Dv,{ref:d,type:"button",$variant:zv(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),$P=l(Te).attrs({variant:"secondary",size:"sm"})`
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
`,bL={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},yL={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},wL=l.button`
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
  font-size: ${e=>bL[e.$size]};
  color: ${e=>yL[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,cr=(0,jv.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,_v.jsxs)(wL,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),AP=l(Te).attrs({variant:"secondary",size:"sm"})`
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
`,DP=l.span`
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
`;var LL={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},Hv=l.input`
  ${dr}
  ${e=>LL[e.$size]}
`,Ma=(0,uc.forwardRef)(({size:e="md",...t},a)=>(0,dc.jsx)(Hv,{ref:a,$size:e,...t}));Ma.displayName="TextField";var FP=l.textarea`
  ${dr}
`,SL=(0,uc.forwardRef)(({size:e="md",...t},a)=>(0,dc.jsx)(Hv,{ref:a,$size:e,type:"password",...t}));SL.displayName="PasswordField";var CL={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},IL=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>CL[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,jP=(0,Uv.forwardRef)(function({variant:t="default",minHeight:a=A2.midPlusTall,...r},o){return(0,qv.jsx)(IL,{ref:o,$variant:t,$minHeight:a,...r})}),kL=l.input.attrs({type:"color"})`
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
`,NP=(0,Wv.forwardRef)(function(t,a){return(0,Vv.jsx)(kL,{ref:a,...t})}),PL={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},TL=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>PL[e.$orientation]}
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
`,UP=(0,Gv.forwardRef)(function({orientation:t="vertical",...a},r){return(0,Xv.jsx)(TL,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),RL={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},EL=l.div`
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
  ${e=>RL[e.$variant]}
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
`,WP=(0,Yv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,Kv.jsx)(EL,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),XP=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var YP=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,KP=l.input`
  ${dr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,QP=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,ZP=l.button`
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
`;var eT=l.div`
  position: relative;
`,tT=l.button`
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
`,aT=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,rT=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Qd.half})`:`rotate(${Qd.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,oT=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,iT=l.button`
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
`,nT=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,lT=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,sT=l.select`
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
`;var dT=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,cT=l.input`
  ${dr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,fT=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,pT=l.button`
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
`;var mT=l.div`
  position: relative;
  width: 100%;
`,hT=l.textarea`
  ${dr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,vT=l.div`
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
`,xT=l.button`
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
`,bT=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,yT=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var cc=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,jL=l.span`
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
`,fc=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,_L=l.span`
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
`,NL=l.span`
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
`,LT=ir.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),v=ir.default.useRef(null);ir.default.useImperativeHandle(d,()=>v.current),ir.default.useEffect(()=>{v.current&&(v.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,Be.jsxs)(cc,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,Be.jsx)(fc,{ref:v,type:"checkbox",checked:a,disabled:r,...u}),(0,Be.jsx)(_L,{$checked:!!y,$disabled:r,children:o?(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Be.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Be.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),ST=ir.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,Be.jsxs)(cc,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,Be.jsx)(fc,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Be.jsx)(NL,{$checked:!!a,$disabled:r}),t]})}),CT=ir.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Be.jsxs)(cc,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Be.jsx)(fc,{ref:s,type:"checkbox",checked:t,...n}),(0,Be.jsx)(jL,{$checked:t}),a]})});var kT=l.input`
  display: none;
`,WL={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},PT={...WL,cursor:"pointer"};var RT=l.button`
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
`;var $T=l.div`
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
`;var AT=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${Fe.sm} {
    grid-template-columns: 1fr;
  }
`,DT=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,BT=l.div`
  min-width: 0;
`,FT=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var OT=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,jT=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var NT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,HT=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var GL={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},XL=l.div`
  ${ve}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>GL[e.$variant]}
`,WT=(0,sx.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,ux.jsx)(XL,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var VT={minWidth:Pi.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},GT=l.button`
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
`;var YT=l.button`
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
`;var dv={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},cx=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>dv[e.$size??"sm"]};
  height: ${e=>dv[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,ZT=l.label`
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
`;var e4=l.button`
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
`;var QL={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},ZL={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},JL=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":ZL[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>QL[e.$size]}
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
`,r4=(0,px.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,gx.jsxs)(JL,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var o4=l.button`
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
`,i4=l.div`
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
`;var eS={bottom:L`
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
  `},l4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>eS[e.$placement]}
`,s4=l.div`
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
`,tS={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},u4=l.button`
  flex-shrink: 0;
  ${e=>tS[e.$size]}
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
`,d4=l.span`
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
`;var f4=l.button`
  ${dr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,p4=l.span`
  color: var(--ig-color-text-soft);
`,g4=l.div`
  ${Lv}
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

  ${Sv}
`;var rS=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,v4=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,oS=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,yx=(0,xx.forwardRef)(({anchor:e,style:t,...a},r)=>(0,bx.jsx)(oS,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));yx.displayName="MenuPopover";var x4=l.div`
  ${ve}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,b4=l(rS)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,w4=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,L4=l.span`
  ${({$tone:e,tone:t})=>{let a=F2[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,S4=l(yx)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var C4=l.div`
  ${Lv}
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

  ${Sv}
`;var k4=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,P4=l.button`
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
`;var nS={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},Ei=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>nS[e.$tone??"neutral"]};
`,E4=l(Ei)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,M4=l.p`
  ${Iv}
  ${kv}
  margin: 0;
`,A4=l.div`
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
`;var sS=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,uS=l.span`
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
`;function Lx({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,El.jsxs)(sS,{className:o,style:i,children:[e,!a&&t!=null?(0,El.jsx)(uS,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var ec=20,Sx=120,cS=Sx*Math.PI/180,fS=ec/Math.sin(cS),pS=zt`
  from { background-position: 0 0; }
  to   { background-position: ${fS.toFixed(3)}px 0; }
`,gS=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${Sx}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${ec/2}px,
      var(--ig-color-white-06) ${ec}px
    );
    animation: ${pS} var(--ig-motion-shimmer) linear infinite;
  }
`,mS=zt`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,hS={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},F4=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,O4=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>hS[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${mS} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&gS}
`;var _4={display:"flex",width:"100%",height:Ct["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},N4=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var vS=L`
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
`,U4=l.div.attrs({"aria-hidden":!0})`
  ${vS}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,xS=l.div`
  ${({$tone:e="info"})=>L`
    background: ${so[e].background};
    border-color: ${so[e].border};
    color: ${so[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,W4=l(xS)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,yS=zt`
  to { transform: rotate(${Qd.full}); }
`,G4={sm:Ct.sm,md:Ct.lg,lg:Ct["3xl"]};var X4=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${yS} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var wS=zt`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,LS=zt`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,K4=l.div`
  ${({$tone:e})=>L`
    background: ${so[e].background};
    border-color: ${so[e].border};
    color: ${so[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?LS:wS} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,Q4=l.span`
  flex: 1;
`,Z4=l.button`
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
`,J4=l.button`
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
`,eR=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,tR=(0,fr.createContext)(()=>{});var rR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,oR=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,SS=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,iR=l(SS)``,nR=l.div`
  flex: 1;
`,lR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var uR=l.div`
  ${kv}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,dR=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,cR=l.div`
  ${Iv}
`,fR=l.div`
  ${Q2}
  max-width: var(--ig-popup-md);
`,pR=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var mR=l.div`
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
`,hR=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,vR=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,xR=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var yR=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,wR=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,LR=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,SR=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var IR=l.span`
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
`;var kS={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},PS=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>kS[e.$variant]}
`,PR=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,TS=zt`from { opacity: 0 } to { opacity: 1 }`,TR=l(PS)`
  animation: ${TS} var(--ig-motion-fast);
`;var ER=l.div`
  ${ve}
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
`,zR=l.span`
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
`;var ES={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},DR=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>ES[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,zx=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,FR=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:zx}
`,OR=l.div`
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
`,jR=l.button`
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
`;var _R=l.div`
  ${zx}
`,Ax={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},HR=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Ax[e.$radius].root};
`,UR=l.div`
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
`,qR=l.button`
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
  border-radius: ${e=>Ax[e.$radius].item};
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
`,WR=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,VR=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,GR=l.span`
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
`;var YR=l.header`
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
`;var KR=l.div`
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
`,QR=l.aside`
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
`;var ZR=l.button`
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
`;var JR=l.button`
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
`;var e8={marginLeft:"auto",minWidth:Ct.xl,height:Ct.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var a8=l.div`
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
`,r8=l.button`
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
`;var DS=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,Nx=l.div`
  ${ve}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,i8=l(Nx)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,BS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,FS=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,OS=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,n8=l.aside`
  ${ve}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,jS=l(Te)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function _S({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,tc.jsx)(jS,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,tc.jsx)(Ae,{size:Ct.md})})}var NS='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',HS=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,US={margin:0,lineHeight:"var(--ig-line-height-loose)"};function qS({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,ur.useId)(),u=(0,ur.useRef)(null);return(0,ur.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,ur.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let v=Array.from(h.querySelectorAll(NS)).filter(w=>w.offsetParent!==null);if(v.length===0){p.preventDefault(),h.focus();return}let y=v[0],b=v[v.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,Pe.jsx)(DS,{onClick:()=>o?.(),children:(0,Pe.jsxs)(Nx,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,Pe.jsxs)(BS,{children:[(0,Pe.jsx)(FS,{id:s,children:e}),o?(0,Pe.jsx)(_S,{onClick:()=>o()}):null]}),(0,Pe.jsxs)(HS,{children:[t?(0,Pe.jsx)(fL,{as:"p",tone:"muted",style:US,children:t}):null,a,r?(0,Pe.jsx)(OS,{children:r}):null]})]})})}function WS({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,Pe.jsx)(qS,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,Pe.jsxs)(Pe.Fragment,{children:[(0,Pe.jsx)(co,{type:"button",variant:"secondary",onClick:i,children:r}),(0,Pe.jsx)(co,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var c8=l.div`
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
`,f8=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,p8=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,g8=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,m8=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var v8=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,x8=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,b8=l.div`
  position: relative;
  display: block;
  width: 100%;
`,y8=l.button`
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
`,w8=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,L8=l.button`
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
`;var S8={minWidth:Pi.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var I8=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var P8=l.div`
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
`,T8=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var R8={display:"inline-flex",alignItems:"center",justifyContent:"center",width:Ct.md,height:Ct.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var KS=l.div`
  ${ve}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,QS=(0,Vx.forwardRef)(({anchor:e,width:t=Pi.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,Gx.jsx)(KS,{ref:o,$width:t,style:{...i,...a},...r})});QS.displayName="FilterPopover";var M8=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,z8=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,A8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var D8={minWidth:Pi.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var Kx=(0,et.createContext)(null);function Ml(){let e=(0,et.useContext)(Kx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function Qx({children:e}){let[t,a]=(0,et.useState)(null),r=(0,et.useRef)(null);r.current=t;let o=(0,et.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,et.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,et.useMemo)(()=>o,[o]);return(0,$l.jsxs)(Kx.Provider,{value:n,children:[e,t?(0,$l.jsx)(WS,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var F8=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,O8=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,tC=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,aC=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,j8=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,_8=l(tC)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,N8=l(aC)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,H8=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,U8=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,rC=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,oC=L`
  transition: transform var(--ig-motion-normal);
`,q8=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&rC}
  ${e=>e.$isAnimating&&oC}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,W8=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var G8=l.section`
  ${Zt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,X8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,iC=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,K8=Jx.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,e0.jsx)(iC,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),nC=l.div`
  ${Zt}
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
`,Z8=t0.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,a0.jsx)(nC,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),eE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var aE=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var lC={panel:Zt,card:sc,raised:ve},sC=l.div`
  ${e=>lC[e.$elevation]}
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
`;function n0({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,i0.jsx)(sC,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var uC=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,dC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,cC=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,fC=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,pC=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,gC=l.textarea`
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
`,mC=l.div`
  display: flex;
  justify-content: flex-end;
`,hC=l.button`
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
`;function l0({author:e,timestamp:t,body:a,actions:r}){return(0,It.jsxs)(uC,{children:[(0,It.jsxs)(dC,{children:[(0,It.jsx)(cC,{children:e}),t&&(0,It.jsx)("span",{children:t}),r]}),(0,It.jsx)(fC,{children:a})]})}function go({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,It.jsxs)(pC,{children:[(0,It.jsx)(gC,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,It.jsx)(mC,{children:(0,It.jsx)(hC,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var vC=l.button`
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
`,xC=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,bC=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,yC=(0,s0.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,uo.jsxs)(vC,{ref:n,type:o??"button",$active:a,...i,children:[(0,uo.jsx)(cx,{$color:e,$size:"sm"}),(0,uo.jsx)(xC,{children:t}),r!=null&&(0,uo.jsx)(bC,{children:r})]}));yC.displayName="TagListItem";var lE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var uE=l.div`
  position: relative;
  width: 100%;
`,dE=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,cE=l.div`
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
`,fE=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,pE=l.button`
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
`;var mE=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,hE=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,vE=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,xE=(0,pr.createContext)(null);var yE=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,wE=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,LE=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var SC=l.button`
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
`,CC=(0,c0.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,Dl.jsxs)(SC,{ref:o,type:a??"button",...r,children:[e&&(0,Dl.jsx)(cx,{$color:e,$size:"xs"}),t]}));CC.displayName="ActionChip";var IE=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,kE=l.kbd`
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
`;var TE=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,RE=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,EE=l.span`
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
`;var AE=l.li`
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
`;var BE=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var PC=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,TC=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,RC=l.button`
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

  ${e=>e.$variant==="flat"?PC:TC}

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
`,EC=(0,h0.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,v0.jsx)(RC,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});EC.displayName="SelectableListItem";var $C={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},MC={flexShrink:0},zC={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},AC=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function b0({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,nr.jsxs)(Jd,{as:"aside",gap:0,className:o,style:$C,children:[(0,nr.jsx)(rL,{style:MC,children:e}),t?(0,nr.jsxs)(Jd,{gap:3,style:zC,children:[(0,nr.jsx)(Ev,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,nr.jsx)(AC,{children:i},n):null)]})}var _E=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var HE=l.div`
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
`;var WE=l.button`
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
`,VE=l.div`
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
`;var XE=l.div`
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
`;var KE=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var ZE=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var OC=l.button`
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
`,jC=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,_C=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,NC=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,HC=(0,I0.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,lr.jsxs)(OC,{ref:i,type:r??"button",...o,children:[(0,lr.jsxs)(jC,{children:[(0,lr.jsx)("span",{children:e}),t!=null&&(0,lr.jsx)(_C,{children:t})]}),(0,lr.jsx)(NC,{children:a})]}));HC.displayName="OptionRow";var t$=l.span`
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
`,r$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var i$=l.table`
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
`,n$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var s$=l.table`
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
`;var d$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,c$=l.div`
  ${Zt}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,f$=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,p$=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var g$={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},h$=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var x$=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var y$=l.div`
  ${X2}
  height: 100%;
  min-height: 0;
`,w$=l.header`
  ${Y2}
  flex-shrink: 0;

  ${Fe.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,L$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,S$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,C$=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${Fe.md} {
    font-size: var(--ig-font-size-xl);
  }
`,I$=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,k$=l.div`
  ${K2}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${Fe.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,GC=l.section`
  ${Zt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,P$=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,T$=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,R$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,E$=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,XC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,$$=l(XC)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${Fe.md} {
    grid-template-columns: 1fr;
  }
`,M$=l(GC)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,z$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,A$=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,D$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,F$=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`;var O$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,j$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,_$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,N$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${Fe.lg} {
    grid-template-columns: 1fr;
  }
`,U$=l.nav`
  ${Zt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,q$=l.aside`
  ${Zt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,W$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,V$=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,G$=l.div`
  ${Cv}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,X$=l.aside`
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
`,K$=l.aside`
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
`,z0=l.div`
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
`,Q$=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${z0}:hover & { opacity: 0; }
  `}
`,Z$=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${z0}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,J$=l.button`
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
`,eM=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,tM=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,A0=`
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
`,aM=l.a`
  ${A0}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,rM=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,oM=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,iM=l.button`
  ${A0}
`,nM=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,lM=l.span`
  display: contents;
`;var uM=l.div`
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
`,dM=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,cM=l.div`
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
`,fM=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,pM=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,gM=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,mM=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,hM=Pi.md;var QC=11;var ZC=3,vM=QC+ZC*2;var bM=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,yM=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,wM=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,LM=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,SM=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var PM=l.div`
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
`,TM=l.span`
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
`;var RM=l.div`
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
`,EM=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,$M=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,MM=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,zM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,AM=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,DM=l(Ma).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,BM=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,FM=l(Ma).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,OM=l.input`
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
`,jM=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var _M=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,NM=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,HM=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,UM=l.button`
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
`,qM=l(Ma).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,WM=l(co).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var GM=l.section`
  ${ve}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,XM=l.h3`
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
`,YM=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var QM=l.label`
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
`,ZM=l.div`
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
`;var ez=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var az=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var oz=l.div`
  ${sc}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,iz=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function Y0({children:e,className:t}){return(0,X0.jsx)(Jd,{gap:3,className:t,children:e})}var lz=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var uz=new URL("./assets/favicon.ico","http://localhost/").href,dz=new URL("./assets/favicon.png","http://localhost/").href,cz=new URL("./assets/brand-mark.png","http://localhost/").href,fz=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var pz=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function nI(){try{if(typeof pv<"u"&&pv.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var cv=(...e)=>{},fv=nI(),gz={debug:fv?console.debug.bind(console):cv,log:fv?console.log.bind(console):cv,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var hz=D2.canvasExportBg;var Jt=c(C(),1);function eb(e){let[,t]=(0,Jt.useReducer)(a=>a+1,0);(0,Jt.useEffect)(()=>e.subscribe(t),[e])}function mo(e){let[t,a]=(0,Jt.useState)(null);return(0,Jt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function tb(){let[,e]=(0,Jt.useReducer)(t=>t+1,0);(0,Jt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var za=c(C(),1);var rb=c(m(),1),lI=500,sI=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,Fl=e=>e instanceof Element&&e.id!==Jr&&e!==document.documentElement&&e!==document.body;function ab({active:e,onPick:t}){let[a,r]=(0,za.useState)(null),o=mo(a),i=(0,za.useRef)({x:-1,y:-1}),n=(0,za.useRef)(e);return n.current=e,(0,za.useEffect)(()=>{e||r(null)},[e]),(0,za.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!Fl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(Fl(b)?b:null)})},p=b=>{!n.current||!Fl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,v=()=>clearTimeout(h),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:M}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(w,M);Fl(g)&&t(g,w,M)},lI)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",v,{passive:!0}),document.addEventListener("touchend",v),document.addEventListener("touchcancel",v),()=>{cancelAnimationFrame(u),v(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",v)}},[t]),o?(0,rb.jsx)(sI,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var ob=c(m(),1),uI=l.div`
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
`;function _c({el:e}){let t=mo(e);return t?(0,ob.jsx)(uI,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var ib=c(C(),1);var E={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteCommentAria:"Delete comment",editCommentAria:"Edit comment",save:"Save",deleteThreadTitle:"Delete this comment thread?",deleteCommentTitle:"Delete this comment?",deleteLastCommentHint:"This is the last comment \u2014 the thread will be deleted.",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareDisabledHint:"No screenshot was saved for this thread",before:"Before",after:"After",captureFailed:"Could not capture the current view",versionChipTitle:"Site version when this was written",defaultAuthor:"Guest"};var gr=c(m(),1),Ol="#f59e0b",dI=l.button`
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
`,cI=l.div`
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
`;function nb({store:e,onPinClick:t}){tb();let[a,r]=(0,ib.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=Ra(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),v=`${Math.round(p/8)}:${Math.round(h/8)}`,y=o.get(v)??0;o.set(v,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,gr.jsx)(dI,{className:"fbw-pin",type:"button",title:Si(n),style:{left:w,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${E.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,gr.jsxs)(gr.Fragment,{children:[i,a&&(0,gr.jsx)(cI,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var Nc=c(C(),1);var fI=800,pI=.8;function gI(e){let t=e.closest("section, article, header, footer, nav, aside");return!t||t===document.body||t===document.documentElement?e:t}async function jl(e){try{if(!document.createElement("canvas").getContext("2d"))return;let t=await sv(gI(e),{pixelRatio:1});if(t.width===0||t.height===0)return;let a=Math.min(1,fI/t.width),r=document.createElement("canvas");r.width=Math.round(t.width*a),r.height=Math.round(t.height*a);let o=r.getContext("2d");return o?(o.fillStyle="#ffffff",o.fillRect(0,0,r.width,r.height),o.drawImage(t,0,0,r.width,r.height),r.toDataURL("image/jpeg",pI)):void 0}catch{return}}var ho=c(C(),1);var lb=c(m(),1),mI=340,hI=l.div`
  position: fixed;
  width: ${mI}px;
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
`;function _l({targetEl:e,point:t,children:a}){let r=(0,ho.useRef)(null),o=mo(e??null),[i,n]=(0,ho.useState)(null);return(0,ho.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,v=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:v}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,lb.jsx)(hI,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var Nl=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,Hl=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var Ft=c(m(),1),vI=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function sb({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,Nc.useState)(""),[u,d]=(0,Nc.useState)(e.author),p=async()=>{let h=n.trim();if(!h)return;let v=u.trim()||E.defaultAuthor;e.author=v;let y=new Date().toISOString(),b=await jl(t),w={id:ar(),createdAt:y,anchor:a,resolved:!1,comments:[{id:ar(),author:v,body:h,createdAt:y,version:Ta.version}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`},beforeShot:b};e.addThread(w),i(w)};return(0,Ft.jsxs)(_l,{targetEl:t,point:r,children:[(0,Ft.jsxs)(Nl,{className:"fbw-composer",children:[(0,Ft.jsx)(Hl,{children:E.composerTitle}),(0,Ft.jsx)(Te,{variant:"ghost",size:"sm","aria-label":E.close,onClick:o,children:(0,Ft.jsx)(Ae,{size:16})})]}),(0,Ft.jsxs)(vI,{children:[E.composerTarget,": ",a.textSnippet||a.selector]}),(0,Ft.jsx)(Ma,{size:"sm",placeholder:E.namePlaceholder,"aria-label":E.nameAria,value:u,onChange:h=>d(h.target.value)}),(0,Ft.jsx)(go,{value:n,onChange:s,onSubmit:p,placeholder:E.composerPlaceholder,submitLabel:E.post})]})}var Ul=c(C(),1);var Re=c(m(),1),xI=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: color-mix(in srgb, #000 50%, transparent);
`,bI=l.div`
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
`,yI=l.div`
  display: flex;
  align-items: center;
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);

  span {
    margin-right: auto;
  }
`,wI=l.div`
  display: flex;
  gap: var(--ig-space-4);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,ub=l.figure`
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
`,LI=l.div`
  padding: var(--ig-space-6);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`;function db({before:e,after:t,onClose:a}){return(0,Re.jsx)(xI,{className:"fbw-area-compare",onClick:a,children:(0,Re.jsxs)(bI,{onClick:r=>r.stopPropagation(),children:[(0,Re.jsxs)(yI,{children:[(0,Re.jsxs)("span",{children:[E.before," / ",E.after]}),(0,Re.jsx)(Te,{variant:"ghost",size:"sm","aria-label":E.close,onClick:a,children:(0,Re.jsx)(Ae,{size:16})})]}),(0,Re.jsxs)(wI,{children:[(0,Re.jsxs)(ub,{children:[(0,Re.jsx)("figcaption",{children:E.before}),(0,Re.jsx)("img",{className:"fbw-shot-before",src:e,alt:E.before})]}),(0,Re.jsxs)(ub,{children:[(0,Re.jsx)("figcaption",{children:E.after}),t?(0,Re.jsx)("img",{className:"fbw-shot-after",src:t,alt:E.after}):(0,Re.jsx)(LI,{children:E.captureFailed})]})]})]})})}var Hc=c(C(),1);var fb=c(m(),1),SI=l.span`
  padding: 0 var(--ig-space-2);
  border-radius: var(--ig-radius-pill);
  font-family: var(--ig-font-mono, monospace);
  font-size: var(--ig-font-size-3xs, 10px);
  line-height: 16px;
  border: var(--ig-border-1px) solid
    ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-border-subtle)"};
  color: ${e=>e.$changed?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`;function cb({version:e,changed:t}){return(0,fb.jsx)(SI,{className:"fbw-verchip",title:E.versionChipTitle,$changed:t,children:e})}var tt=c(m(),1),CI=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`,II=l.div`
  display: flex;
  justify-content: flex-start;
`,kI=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function pb({store:e,thread:t,comment:a,prevVersion:r}){let o=Ml(),[i,n]=(0,Hc.useState)(!1),[s,u]=(0,Hc.useState)(a.body),d=()=>{let h=s.trim();h&&(e.updateComment(t.id,a.id,h),n(!1))},p=async()=>{let h=t.comments.length===1;await o({title:E.deleteCommentTitle,description:h?E.deleteLastCommentHint:a.body,confirmLabel:E.delete,cancelLabel:E.cancel,danger:!0})&&e.removeComment(t.id,a.id)};return i?(0,tt.jsxs)("div",{children:[(0,tt.jsx)(go,{value:s,onChange:u,onSubmit:d,submitLabel:E.save}),(0,tt.jsx)(II,{children:(0,tt.jsx)(cr,{tone:"muted",onClick:()=>{n(!1),u(a.body)},children:E.cancel})})]}):(0,tt.jsx)(l0,{author:a.author,timestamp:kI(a.createdAt),body:a.body,actions:(0,tt.jsxs)(CI,{children:[a.version&&(0,tt.jsx)(cb,{version:a.version,changed:r!==void 0&&a.version!==r}),(0,tt.jsx)(Te,{variant:"ghost",size:"sm","aria-label":E.editCommentAria,onClick:()=>n(!0),children:(0,tt.jsx)(to,{size:14})}),(0,tt.jsx)(Te,{variant:"ghost",size:"sm",tone:"danger","aria-label":E.deleteCommentAria,onClick:p,children:(0,tt.jsx)(Ea,{size:14})})]})})}var fe=c(m(),1),PI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;function gb({store:e,thread:t,number:a,onClose:r}){let[o,i]=(0,Ul.useState)(""),[n,s]=(0,Ul.useState)(e.author),[u,d]=(0,Ul.useState)(null),p=t.anchor.page===location.pathname?Ra(t.anchor):null,h=async()=>{if(!t.beforeShot)return;let y=p?await jl(p):void 0;d({before:t.beforeShot,after:y})},v=()=>{let y=o.trim();if(!y)return;let b=n.trim()||E.defaultAuthor;e.author=b,e.addComment(t.id,b,y,Ta.version),i("")};return(0,fe.jsxs)(_l,{targetEl:p,children:[(0,fe.jsxs)(Nl,{className:"fbw-thread",children:[(0,fe.jsxs)(Hl,{children:[E.thread," ",a]}),t.resolved&&(0,fe.jsx)(Ei,{$tone:"success",children:E.archivedBadge}),(0,fe.jsx)(Te,{variant:"ghost",size:"sm","aria-label":E.close,onClick:r,children:(0,fe.jsx)(Ae,{size:16})})]}),(0,fe.jsx)(Y0,{children:t.comments.map((y,b)=>(0,fe.jsx)(pb,{store:e,thread:t,comment:y,prevVersion:b>0?t.comments[b-1].version:void 0},y.id))}),!e.author&&(0,fe.jsx)(Ma,{size:"sm",placeholder:E.namePlaceholder,"aria-label":E.nameAria,value:n,onChange:y=>s(y.target.value)}),(0,fe.jsx)(go,{value:o,onChange:i,onSubmit:v,placeholder:E.replyPlaceholder,submitLabel:E.reply}),(0,fe.jsxs)(PI,{children:[(0,fe.jsx)(cr,{tone:t.resolved?"muted":"accent",iconLeading:(0,fe.jsx)(eo,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?E.unarchive:E.archive}),(0,fe.jsx)(cr,{tone:"accent",iconLeading:(0,fe.jsx)(rr,{size:14}),disabled:!t.beforeShot,title:t.beforeShot?void 0:E.compareDisabledHint,onClick:h,children:E.compare})]}),u&&(0,fe.jsx)(db,{before:u.before,after:u.after,onClose:()=>d(null)})]})}var Uc=c(C(),1);function mb(e,t){let a=t.map(({beforeShot:r,...o})=>o);return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:a},null,2)}function hb(e,t){let a=new Blob([mb(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function vb(e,t){try{return await navigator.clipboard.writeText(mb(e,t)),!0}catch{return!1}}var ct=c(m(),1),RI=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,EI=l.span`
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
`,$I=l.span`
  margin-left: auto;
`,MI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,zI=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function xb({store:e,thread:t,number:a,onSelect:r}){let o=Ml(),i=async s=>{s.stopPropagation(),await o({title:E.deleteThreadTitle,description:Si(t),confirmLabel:E.delete,cancelLabel:E.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,ct.jsxs)(n0,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,ct.jsxs)(RI,{children:[(0,ct.jsx)(EI,{children:a}),(0,ct.jsx)("span",{children:kh(t)}),t.resolved&&(0,ct.jsx)(Ei,{$tone:"success",children:E.archivedBadge}),(0,ct.jsx)($I,{}),(0,ct.jsx)(Te,{variant:"ghost",size:"sm",tone:"danger","aria-label":E.deleteThreadAria,onClick:i,children:(0,ct.jsx)(Ea,{size:14})})]}),(0,ct.jsx)(MI,{children:Si(t)}),(0,ct.jsxs)(zI,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${E.replies}`]})]})}var oe=c(m(),1),AI=320,DI=l.button`
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
`,BI=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${AI}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,FI=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,OI=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,jI=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function bb({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,Uc.useState)(null),[n,s]=(0,Uc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),h=w=>u.findIndex(M=>M.id===w.id)+1,v=w=>{if(!Nd(w.anchor)){zh(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await vb(e.project,e.exportList())?E.copied:E.copyFailed),setTimeout(()=>i(null),1500)},b=w=>w.map(M=>(0,oe.jsx)(xb,{store:e,thread:M,number:h(M),onSelect:v},M.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(DI,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[E.tab," ",u.length]}),(0,oe.jsx)(BI,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(b0,{headerSlot:(0,oe.jsxs)(FI,{children:[(0,oe.jsxs)("span",{children:[E.listTitle," (",u.length,")"]}),(0,oe.jsx)(Te,{variant:"ghost",size:"sm","aria-label":E.close,onClick:()=>a(!1),children:(0,oe.jsx)(Ae,{size:16})})]}),bodySectionTitle:E.openSection,bodySlot:d.length===0?(0,oe.jsxs)(OI,{children:[E.emptyLine1,(0,oe.jsx)("br",{}),E.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(cr,{tone:"muted",onClick:()=>s(w=>!w),children:n?E.hideArchived(p.length):E.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(jI,{children:[(0,oe.jsx)(co,{variant:"secondary",size:"sm",onClick:y,children:o??E.copy}),(0,oe.jsx)(co,{variant:"solid",size:"sm",onClick:()=>hb(e.project,e.exportList()),children:E.downloadJson})]})]})})]})}var ea=c(m(),1),yb=l.button`
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
`,_I=l.span`
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

  ${yb}:hover + & {
    opacity: 1;
  }
`,NI=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function wb({store:e}){let t=e.list().length;return(0,ea.jsxs)(ea.Fragment,{children:[(0,ea.jsxs)(yb,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?E.toggleOff:E.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,ea.jsx)(NI,{children:(0,ea.jsx)(Lx,{children:t})})]}),(0,ea.jsx)(_I,{children:e.enabled?E.toggleHintOn:E.toggleOn})]})}var kt=c(m(),1);function Lb({store:e}){eb(e);let[t,a]=(0,$i.useState)(null),[r,o]=(0,$i.useState)(!1),i=e.enabled;(0,$i.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?Ra(n.anchor):null;return(0,kt.jsxs)(Qx,{children:[i&&(0,kt.jsx)(ab,{active:!t,onPick:(d,p,h)=>{let v=e.list().find(y=>!y.resolved&&y.anchor.page===location.pathname&&Ra(y.anchor)===d);if(v){a({kind:"thread",id:v.id});return}a({kind:"draft",el:d,anchor:Mh(d),point:{x:p,y:h}})}}),i&&(0,kt.jsx)(nb,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,kt.jsx)(_c,{el:t.el}),u&&(0,kt.jsx)(_c,{el:u}),t?.kind==="draft"&&(0,kt.jsx)(sb,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,kt.jsx)(gb,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,kt.jsx)(bb,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,kt.jsx)(wb,{store:e})]})}var qc=c(m(),1),HI=2147483e3;function UI(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var qI=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function Sb(){if(document.getElementById(Jr))return;let e=document.createElement("div");e.id=Jr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${HI};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=UI(Ih)+qI;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new hl(Ta.project);(0,Cb.createRoot)(o).render((0,qc.jsx)(wh,{target:r,children:(0,qc.jsx)(Lb,{store:i})})),Ta.seedUrl&&typeof fetch=="function"&&fetch(Ta.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),Ah()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Sb):Sb();})();
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
