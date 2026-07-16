"use strict";(()=>{var W0=Object.create;var Ic=Object.defineProperty;var V0=Object.getOwnPropertyDescriptor;var G0=Object.getOwnPropertyNames;var X0=Object.getPrototypeOf,Y0=Object.prototype.hasOwnProperty;var Bt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var K0=(e,t,a,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of G0(t))!Y0.call(e,o)&&o!==a&&Ic(e,o,{get:()=>t[o],enumerable:!(r=V0(t,o))||r.enumerable});return e};var c=(e,t,a)=>(a=e!=null?W0(X0(e)):{},K0(t||!e||!e.__esModule?Ic(a,"default",{value:e,enumerable:!0}):a,e));var Fc=Bt(B=>{"use strict";var co=Symbol.for("react.element"),Q0=Symbol.for("react.portal"),Z0=Symbol.for("react.fragment"),J0=Symbol.for("react.strict_mode"),eb=Symbol.for("react.profiler"),tb=Symbol.for("react.provider"),ab=Symbol.for("react.context"),rb=Symbol.for("react.forward_ref"),ob=Symbol.for("react.suspense"),ib=Symbol.for("react.memo"),nb=Symbol.for("react.lazy"),kc=Symbol.iterator;function lb(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Rc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$c=Object.assign,Ec={};function pr(e,t,a){this.props=e,this.context=t,this.refs=Ec,this.updater=a||Rc}pr.prototype.isReactComponent={};pr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};pr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Mc(){}Mc.prototype=pr.prototype;function Bl(e,t,a){this.props=e,this.context=t,this.refs=Ec,this.updater=a||Rc}var Fl=Bl.prototype=new Mc;Fl.constructor=Bl;$c(Fl,pr.prototype);Fl.isPureReactComponent=!0;var Pc=Array.isArray,zc=Object.prototype.hasOwnProperty,Ol={current:null},Ac={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,a){var r,o={},i=null,n=null;if(t!=null)for(r in t.ref!==void 0&&(n=t.ref),t.key!==void 0&&(i=""+t.key),t)zc.call(t,r)&&!Ac.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=a;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:co,type:e,key:i,ref:n,props:o,_owner:Ol.current}}function sb(e,t){return{$$typeof:co,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function jl(e){return typeof e=="object"&&e!==null&&e.$$typeof===co}function ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return t[a]})}var Tc=/\/+/g;function Dl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ub(""+e.key):t.toString(36)}function Pi(e,t,a,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var n=!1;if(e===null)n=!0;else switch(i){case"string":case"number":n=!0;break;case"object":switch(e.$$typeof){case co:case Q0:n=!0}}if(n)return n=e,o=o(n),e=r===""?"."+Dl(n,0):r,Pc(o)?(a="",e!=null&&(a=e.replace(Tc,"$&/")+"/"),Pi(o,t,a,"",function(d){return d})):o!=null&&(jl(o)&&(o=sb(o,a+(!o.key||n&&n.key===o.key?"":(""+o.key).replace(Tc,"$&/")+"/")+e)),t.push(o)),1;if(n=0,r=r===""?".":r+":",Pc(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Dl(i,s);n+=Pi(i,t,a,u,o)}else if(u=lb(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Dl(i,s++),n+=Pi(i,t,a,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return n}function ki(e,t,a){if(e==null)return e;var r=[],o=0;return Pi(e,r,"","",function(i){return t.call(a,i,o++)}),r}function db(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},Ti={transition:null},cb={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:Ti,ReactCurrentOwner:Ol};function Bc(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:ki,forEach:function(e,t,a){ki(e,function(){t.apply(this,arguments)},a)},count:function(e){var t=0;return ki(e,function(){t++}),t},toArray:function(e){return ki(e,function(t){return t})||[]},only:function(e){if(!jl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Component=pr;B.Fragment=Z0;B.Profiler=eb;B.PureComponent=Bl;B.StrictMode=J0;B.Suspense=ob;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cb;B.act=Bc;B.cloneElement=function(e,t,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$c({},e.props),o=e.key,i=e.ref,n=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,n=Ol.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)zc.call(t,u)&&!Ac.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=a;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:co,type:e.type,key:o,ref:i,props:r,_owner:n}};B.createContext=function(e){return e={$$typeof:ab,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:tb,_context:e},e.Consumer=e};B.createElement=Dc;B.createFactory=function(e){var t=Dc.bind(null,e);return t.type=e,t};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:rb,render:e}};B.isValidElement=jl;B.lazy=function(e){return{$$typeof:nb,_payload:{_status:-1,_result:e},_init:db}};B.memo=function(e,t){return{$$typeof:ib,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=Ti.transition;Ti.transition={};try{e()}finally{Ti.transition=t}};B.unstable_act=Bc;B.useCallback=function(e,t){return Te.current.useCallback(e,t)};B.useContext=function(e){return Te.current.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};B.useEffect=function(e,t){return Te.current.useEffect(e,t)};B.useId=function(){return Te.current.useId()};B.useImperativeHandle=function(e,t,a){return Te.current.useImperativeHandle(e,t,a)};B.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};B.useMemo=function(e,t){return Te.current.useMemo(e,t)};B.useReducer=function(e,t,a){return Te.current.useReducer(e,t,a)};B.useRef=function(e){return Te.current.useRef(e)};B.useState=function(e){return Te.current.useState(e)};B.useSyncExternalStore=function(e,t,a){return Te.current.useSyncExternalStore(e,t,a)};B.useTransition=function(){return Te.current.useTransition()};B.version="18.3.1"});var C=Bt((zC,Oc)=>{"use strict";Oc.exports=Fc()});var Xc=Bt(q=>{"use strict";function Ul(e,t){var a=e.length;e.push(t);e:for(;0<a;){var r=a-1>>>1,o=e[r];if(0<Ri(o,t))e[r]=t,e[a]=o,a=r;else break e}}function ft(e){return e.length===0?null:e[0]}function Ei(e){if(e.length===0)return null;var t=e[0],a=e.pop();if(a!==t){e[0]=a;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var n=2*(r+1)-1,s=e[n],u=n+1,d=e[u];if(0>Ri(s,a))u<o&&0>Ri(d,s)?(e[r]=d,e[u]=a,r=u):(e[r]=s,e[n]=a,r=n);else if(u<o&&0>Ri(d,a))e[r]=d,e[u]=a,r=u;else break e}}return t}function Ri(e,t){var a=e.sortIndex-t.sortIndex;return a!==0?a:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(jc=performance,q.unstable_now=function(){return jc.now()}):(Nl=Date,Nc=Nl.now(),q.unstable_now=function(){return Nl.now()-Nc});var jc,Nl,Nc,It=[],aa=[],fb=1,et=null,ye=3,Mi=!1,za=!1,po=!1,Uc=typeof setTimeout=="function"?setTimeout:null,qc=typeof clearTimeout=="function"?clearTimeout:null,_c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ql(e){for(var t=ft(aa);t!==null;){if(t.callback===null)Ei(aa);else if(t.startTime<=e)Ei(aa),t.sortIndex=t.expirationTime,Ul(It,t);else break;t=ft(aa)}}function Wl(e){if(po=!1,ql(e),!za)if(ft(It)!==null)za=!0,Gl(Vl);else{var t=ft(aa);t!==null&&Xl(Wl,t.startTime-e)}}function Vl(e,t){za=!1,po&&(po=!1,qc(go),go=-1),Mi=!0;var a=ye;try{for(ql(t),et=ft(It);et!==null&&(!(et.expirationTime>t)||e&&!Gc());){var r=et.callback;if(typeof r=="function"){et.callback=null,ye=et.priorityLevel;var o=r(et.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?et.callback=o:et===ft(It)&&Ei(It),ql(t)}else Ei(It);et=ft(It)}if(et!==null)var i=!0;else{var n=ft(aa);n!==null&&Xl(Wl,n.startTime-t),i=!1}return i}finally{et=null,ye=a,Mi=!1}}var zi=!1,$i=null,go=-1,Wc=5,Vc=-1;function Gc(){return!(q.unstable_now()-Vc<Wc)}function _l(){if($i!==null){var e=q.unstable_now();Vc=e;var t=!0;try{t=$i(!0,e)}finally{t?fo():(zi=!1,$i=null)}}else zi=!1}var fo;typeof _c=="function"?fo=function(){_c(_l)}:typeof MessageChannel<"u"?(Hl=new MessageChannel,Hc=Hl.port2,Hl.port1.onmessage=_l,fo=function(){Hc.postMessage(null)}):fo=function(){Uc(_l,0)};var Hl,Hc;function Gl(e){$i=e,zi||(zi=!0,fo())}function Xl(e,t){go=Uc(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){za||Mi||(za=!0,Gl(Vl))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wc=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return ye};q.unstable_getFirstCallbackNode=function(){return ft(It)};q.unstable_next=function(e){switch(ye){case 1:case 2:case 3:var t=3;break;default:t=ye}var a=ye;ye=t;try{return e()}finally{ye=a}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var a=ye;ye=e;try{return t()}finally{ye=a}};q.unstable_scheduleCallback=function(e,t,a){var r=q.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?r+a:r):a=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=a+o,e={id:fb++,callback:t,priorityLevel:e,startTime:a,expirationTime:o,sortIndex:-1},a>r?(e.sortIndex=a,Ul(aa,e),ft(It)===null&&e===ft(aa)&&(po?(qc(go),go=-1):po=!0,Xl(Wl,a-r))):(e.sortIndex=o,Ul(It,e),za||Mi||(za=!0,Gl(Vl))),e};q.unstable_shouldYield=Gc;q.unstable_wrapCallback=function(e){var t=ye;return function(){var a=ye;ye=t;try{return e.apply(this,arguments)}finally{ye=a}}}});var Kc=Bt((DC,Yc)=>{"use strict";Yc.exports=Xc()});var tm=Bt(Ye=>{"use strict";var pb=C(),Ge=Kc();function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var op=new Set,Bo={};function Va(e,t){Ar(e,t),Ar(e+"Capture",t)}function Ar(e,t){for(Bo[e]=t,e=0;e<t.length;e++)op.add(t[e])}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vs=Object.prototype.hasOwnProperty,gb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qc={},Zc={};function mb(e){return vs.call(Zc,e)?!0:vs.call(Qc,e)?!1:gb.test(e)?Zc[e]=!0:(Qc[e]=!0,!1)}function hb(e,t,a,r){if(a!==null&&a.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vb(e,t,a,r){if(t===null||typeof t>"u"||hb(e,t,a,r))return!0;if(r)return!1;if(a!==null)switch(a.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ee(e,t,a,r,o,i,n){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=a,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=n}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new Ee(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new Ee(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new Ee(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new Ee(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new Ee(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new Ee(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new Ee(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new Ee(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new Ee(e,5,!1,e.toLowerCase(),null,!1,!1)});var uu=/[\-:]([a-z])/g;function du(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(uu,du);me[t]=new Ee(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(uu,du);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(uu,du);me[t]=new Ee(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new Ee("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new Ee(e,1,!1,e.toLowerCase(),null,!0,!0)});function cu(e,t,a,r){var o=me.hasOwnProperty(t)?me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vb(t,a,o,r)&&(a=null),r||o===null?mb(t)&&(a===null?e.removeAttribute(t):e.setAttribute(t,""+a)):o.mustUseProperty?e[o.propertyName]=a===null?o.type===3?!1:"":a:(t=o.attributeName,r=o.attributeNamespace,a===null?e.removeAttribute(t):(o=o.type,a=o===3||o===4&&a===!0?"":""+a,r?e.setAttributeNS(r,t,a):e.setAttribute(t,a))))}var Vt=pb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),hr=Symbol.for("react.portal"),vr=Symbol.for("react.fragment"),fu=Symbol.for("react.strict_mode"),xs=Symbol.for("react.profiler"),ip=Symbol.for("react.provider"),np=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),bs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),gu=Symbol.for("react.memo"),oa=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var lp=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Jc=Symbol.iterator;function mo(e){return e===null||typeof e!="object"?null:(e=Jc&&e[Jc]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Yl;function So(e){if(Yl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||""}return`
`+Yl+e}var Kl=!1;function Ql(e,t){if(!e||Kl)return"";Kl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),i=r.stack.split(`
`),n=o.length-1,s=i.length-1;1<=n&&0<=s&&o[n]!==i[s];)s--;for(;1<=n&&0<=s;n--,s--)if(o[n]!==i[s]){if(n!==1||s!==1)do if(n--,s--,0>s||o[n]!==i[s]){var u=`
`+o[n].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=n&&0<=s);break}}}finally{Kl=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?So(e):""}function xb(e){switch(e.tag){case 5:return So(e.type);case 16:return So("Lazy");case 13:return So("Suspense");case 19:return So("SuspenseList");case 0:case 2:case 15:return e=Ql(e.type,!1),e;case 11:return e=Ql(e.type.render,!1),e;case 1:return e=Ql(e.type,!0),e;default:return""}}function ws(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case vr:return"Fragment";case hr:return"Portal";case xs:return"Profiler";case fu:return"StrictMode";case bs:return"Suspense";case ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case np:return(e.displayName||"Context")+".Consumer";case ip:return(e._context.displayName||"Context")+".Provider";case pu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gu:return t=e.displayName||null,t!==null?t:ws(e.type)||"Memo";case oa:t=e._payload,e=e._init;try{return ws(e(t))}catch{}}return null}function bb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ws(t);case 8:return t===fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function xa(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yb(e){var t=sp(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(n){r=""+n,i.call(this,n)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(n){r=""+n},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Di(e){e._valueTracker||(e._valueTracker=yb(e))}function up(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=sp(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ls(e,t){var a=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function ef(e,t){var a=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;a=xa(t.value!=null?t.value:a),e._wrapperState={initialChecked:r,initialValue:a,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dp(e,t){t=t.checked,t!=null&&cu(e,"checked",t,!1)}function Ss(e,t){dp(e,t);var a=xa(t.value),r=t.type;if(a!=null)r==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Cs(e,t.type,a):t.hasOwnProperty("defaultValue")&&Cs(e,t.type,xa(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function tf(e,t,a){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,a||t===e.value||(e.value=t),e.defaultValue=t}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function Cs(e,t,a){(t!=="number"||dn(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var Co=Array.isArray;function Tr(e,t,a,r){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&r&&(e[a].defaultSelected=!0)}else{for(a=""+xa(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function af(e,t){var a=t.value;if(a==null){if(a=t.children,t=t.defaultValue,a!=null){if(t!=null)throw Error(I(92));if(Co(a)){if(1<a.length)throw Error(I(93));a=a[0]}t=a}t==null&&(t=""),a=t}e._wrapperState={initialValue:xa(a)}}function cp(e,t){var a=xa(t.value),r=xa(t.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),t.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),r!=null&&(e.defaultValue=""+r)}function rf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ks(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,pp=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,a,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,a,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fo(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wb=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(e){wb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Po[t]=Po[e]})});function gp(e,t,a){return t==null||typeof t=="boolean"||t===""?"":a||typeof t!="number"||t===0||Po.hasOwnProperty(e)&&Po[e]?(""+t).trim():t+"px"}function mp(e,t){e=e.style;for(var a in t)if(t.hasOwnProperty(a)){var r=a.indexOf("--")===0,o=gp(a,t[a],r);a==="float"&&(a="cssFloat"),r?e.setProperty(a,o):e[a]=o}}var Lb=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ps(e,t){if(t){if(Lb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Ts(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rs=null;function mu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var $s=null,Rr=null,$r=null;function of(e){if(e=ti(e)){if(typeof $s!="function")throw Error(I(280));var t=e.stateNode;t&&(t=On(t),$s(e.stateNode,e.type,t))}}function hp(e){Rr?$r?$r.push(e):$r=[e]:Rr=e}function vp(){if(Rr){var e=Rr,t=$r;if($r=Rr=null,of(e),t)for(e=0;e<t.length;e++)of(t[e])}}function xp(e,t){return e(t)}function bp(){}var Zl=!1;function yp(e,t,a){if(Zl)return e(t,a);Zl=!0;try{return xp(e,t,a)}finally{Zl=!1,(Rr!==null||$r!==null)&&(bp(),vp())}}function Oo(e,t){var a=e.stateNode;if(a===null)return null;var r=On(a);if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(I(231,t,typeof a));return a}var Es=!1;if(Ht)try{gr={},Object.defineProperty(gr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",gr,gr),window.removeEventListener("test",gr,gr)}catch{Es=!1}var gr;function Sb(e,t,a,r,o,i,n,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(a,d)}catch(p){this.onError(p)}}var To=!1,cn=null,fn=!1,Ms=null,Cb={onError:function(e){To=!0,cn=e}};function Ib(e,t,a,r,o,i,n,s,u){To=!1,cn=null,Sb.apply(Cb,arguments)}function kb(e,t,a,r,o,i,n,s,u){if(Ib.apply(this,arguments),To){if(To){var d=cn;To=!1,cn=null}else throw Error(I(198));fn||(fn=!0,Ms=d)}}function Ga(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function wp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nf(e){if(Ga(e)!==e)throw Error(I(188))}function Pb(e){var t=e.alternate;if(!t){if(t=Ga(e),t===null)throw Error(I(188));return t!==e?null:e}for(var a=e,r=t;;){var o=a.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){a=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===a)return nf(o),e;if(i===r)return nf(o),t;i=i.sibling}throw Error(I(188))}if(a.return!==r.return)a=o,r=i;else{for(var n=!1,s=o.child;s;){if(s===a){n=!0,a=o,r=i;break}if(s===r){n=!0,r=o,a=i;break}s=s.sibling}if(!n){for(s=i.child;s;){if(s===a){n=!0,a=i,r=o;break}if(s===r){n=!0,r=i,a=o;break}s=s.sibling}if(!n)throw Error(I(189))}}if(a.alternate!==r)throw Error(I(190))}if(a.tag!==3)throw Error(I(188));return a.stateNode.current===a?e:t}function Lp(e){return e=Pb(e),e!==null?Sp(e):null}function Sp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sp(e);if(t!==null)return t;e=e.sibling}return null}var Cp=Ge.unstable_scheduleCallback,lf=Ge.unstable_cancelCallback,Tb=Ge.unstable_shouldYield,Rb=Ge.unstable_requestPaint,re=Ge.unstable_now,$b=Ge.unstable_getCurrentPriorityLevel,hu=Ge.unstable_ImmediatePriority,Ip=Ge.unstable_UserBlockingPriority,pn=Ge.unstable_NormalPriority,Eb=Ge.unstable_LowPriority,kp=Ge.unstable_IdlePriority,An=null,Rt=null;function Mb(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(An,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:Db,zb=Math.log,Ab=Math.LN2;function Db(e){return e>>>=0,e===0?32:31-(zb(e)/Ab|0)|0}var Fi=64,Oi=4194304;function Io(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gn(e,t){var a=e.pendingLanes;if(a===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,n=a&268435455;if(n!==0){var s=n&~o;s!==0?r=Io(s):(i&=n,i!==0&&(r=Io(i)))}else n=a&~o,n!==0?r=Io(n):i!==0&&(r=Io(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=a&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)a=31-vt(t),o=1<<a,r|=e[a],t&=~o;return r}function Bb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fb(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var n=31-vt(i),s=1<<n,u=o[n];u===-1?((s&a)===0||(s&r)!==0)&&(o[n]=Bb(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function zs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pp(){var e=Fi;return Fi<<=1,(Fi&4194240)===0&&(Fi=64),e}function Jl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Jo(e,t,a){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=a}function Ob(e,t){var a=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<a;){var o=31-vt(a),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,a&=~i}}function vu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-vt(a),o=1<<r;o&t|e[r]&t&&(e[r]|=t),a&=~o}}var N=0;function Tp(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rp,xu,$p,Ep,Mp,As=!1,ji=[],da=null,ca=null,fa=null,jo=new Map,No=new Map,na=[],jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":da=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(t.pointerId)}}function ho(e,t,a,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=ti(t),t!==null&&xu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Nb(e,t,a,r,o){switch(t){case"focusin":return da=ho(da,e,t,a,r,o),!0;case"dragenter":return ca=ho(ca,e,t,a,r,o),!0;case"mouseover":return fa=ho(fa,e,t,a,r,o),!0;case"pointerover":var i=o.pointerId;return jo.set(i,ho(jo.get(i)||null,e,t,a,r,o)),!0;case"gotpointercapture":return i=o.pointerId,No.set(i,ho(No.get(i)||null,e,t,a,r,o)),!0}return!1}function zp(e){var t=Ba(e.target);if(t!==null){var a=Ga(t);if(a!==null){if(t=a.tag,t===13){if(t=wp(a),t!==null){e.blockedOn=t,Mp(e.priority,function(){$p(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ji(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Rs=r,a.target.dispatchEvent(r),Rs=null}else return t=ti(a),t!==null&&xu(t),e.blockedOn=a,!1;t.shift()}return!0}function uf(e,t,a){Ji(e)&&a.delete(t)}function _b(){As=!1,da!==null&&Ji(da)&&(da=null),ca!==null&&Ji(ca)&&(ca=null),fa!==null&&Ji(fa)&&(fa=null),jo.forEach(uf),No.forEach(uf)}function vo(e,t){e.blockedOn===t&&(e.blockedOn=null,As||(As=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,_b)))}function _o(e){function t(o){return vo(o,e)}if(0<ji.length){vo(ji[0],e);for(var a=1;a<ji.length;a++){var r=ji[a];r.blockedOn===e&&(r.blockedOn=null)}}for(da!==null&&vo(da,e),ca!==null&&vo(ca,e),fa!==null&&vo(fa,e),jo.forEach(t),No.forEach(t),a=0;a<na.length;a++)r=na[a],r.blockedOn===e&&(r.blockedOn=null);for(;0<na.length&&(a=na[0],a.blockedOn===null);)zp(a),a.blockedOn===null&&na.shift()}var Er=Vt.ReactCurrentBatchConfig,mn=!0;function Hb(e,t,a,r){var o=N,i=Er.transition;Er.transition=null;try{N=1,bu(e,t,a,r)}finally{N=o,Er.transition=i}}function Ub(e,t,a,r){var o=N,i=Er.transition;Er.transition=null;try{N=4,bu(e,t,a,r)}finally{N=o,Er.transition=i}}function bu(e,t,a,r){if(mn){var o=Ds(e,t,a,r);if(o===null)ns(e,t,r,hn,a),sf(e,r);else if(Nb(o,e,t,a,r))r.stopPropagation();else if(sf(e,r),t&4&&-1<jb.indexOf(e)){for(;o!==null;){var i=ti(o);if(i!==null&&Rp(i),i=Ds(e,t,a,r),i===null&&ns(e,t,r,hn,a),i===o)break;o=i}o!==null&&r.stopPropagation()}else ns(e,t,r,null,a)}}var hn=null;function Ds(e,t,a,r){if(hn=null,e=mu(r),e=Ba(e),e!==null)if(t=Ga(e),t===null)e=null;else if(a=t.tag,a===13){if(e=wp(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return hn=e,null}function Ap(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($b()){case hu:return 1;case Ip:return 4;case pn:case Eb:return 16;case kp:return 536870912;default:return 16}default:return 16}}var sa=null,yu=null,en=null;function Dp(){if(en)return en;var e,t=yu,a=t.length,r,o="value"in sa?sa.value:sa.textContent,i=o.length;for(e=0;e<a&&t[e]===o[e];e++);var n=a-e;for(r=1;r<=n&&t[a-r]===o[i-r];r++);return en=o.slice(e,1<r?1-r:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ni(){return!0}function df(){return!1}function Xe(e){function t(a,r,o,i,n){this._reactName=a,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=n,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ni:df,this.isPropagationStopped=df,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ni)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ni)},persist:function(){},isPersistent:Ni}),t}var _r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wu=Xe(_r),ei=Q({},_r,{view:0,detail:0}),qb=Xe(ei),es,ts,xo,Dn=Q({},ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xo&&(xo&&e.type==="mousemove"?(es=e.screenX-xo.screenX,ts=e.screenY-xo.screenY):ts=es=0,xo=e),es)},movementY:function(e){return"movementY"in e?e.movementY:ts}}),cf=Xe(Dn),Wb=Q({},Dn,{dataTransfer:0}),Vb=Xe(Wb),Gb=Q({},ei,{relatedTarget:0}),as=Xe(Gb),Xb=Q({},_r,{animationName:0,elapsedTime:0,pseudoElement:0}),Yb=Xe(Xb),Kb=Q({},_r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qb=Xe(Kb),Zb=Q({},_r,{data:0}),ff=Xe(Zb),Jb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ty[e])?!!t[e]:!1}function Lu(){return ay}var ry=Q({},ei,{key:function(e){if(e.key){var t=Jb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=tn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(e){return e.type==="keypress"?tn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?tn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),oy=Xe(ry),iy=Q({},Dn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=Xe(iy),ny=Q({},ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),ly=Xe(ny),sy=Q({},_r,{propertyName:0,elapsedTime:0,pseudoElement:0}),uy=Xe(sy),dy=Q({},Dn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cy=Xe(dy),fy=[9,13,27,32],Su=Ht&&"CompositionEvent"in window,Ro=null;Ht&&"documentMode"in document&&(Ro=document.documentMode);var py=Ht&&"TextEvent"in window&&!Ro,Bp=Ht&&(!Su||Ro&&8<Ro&&11>=Ro),gf=" ",mf=!1;function Fp(e,t){switch(e){case"keyup":return fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xr=!1;function gy(e,t){switch(e){case"compositionend":return Op(t);case"keypress":return t.which!==32?null:(mf=!0,gf);case"textInput":return e=t.data,e===gf&&mf?null:e;default:return null}}function my(e,t){if(xr)return e==="compositionend"||!Su&&Fp(e,t)?(e=Dp(),en=yu=sa=null,xr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bp&&t.locale!=="ko"?null:t.data;default:return null}}var hy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!hy[e.type]:t==="textarea"}function jp(e,t,a,r){hp(r),t=vn(t,"onChange"),0<t.length&&(a=new wu("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var $o=null,Ho=null;function vy(e){Kp(e,0)}function Bn(e){var t=wr(e);if(up(t))return e}function xy(e,t){if(e==="change")return t}var Np=!1;Ht&&(Ht?(Hi="oninput"in document,Hi||(rs=document.createElement("div"),rs.setAttribute("oninput","return;"),Hi=typeof rs.oninput=="function"),_i=Hi):_i=!1,Np=_i&&(!document.documentMode||9<document.documentMode));var _i,Hi,rs;function vf(){$o&&($o.detachEvent("onpropertychange",_p),Ho=$o=null)}function _p(e){if(e.propertyName==="value"&&Bn(Ho)){var t=[];jp(t,Ho,e,mu(e)),yp(vy,t)}}function by(e,t,a){e==="focusin"?(vf(),$o=t,Ho=a,$o.attachEvent("onpropertychange",_p)):e==="focusout"&&vf()}function yy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bn(Ho)}function wy(e,t){if(e==="click")return Bn(t)}function Ly(e,t){if(e==="input"||e==="change")return Bn(t)}function Sy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Sy;function Uo(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var o=a[r];if(!vs.call(t,o)||!bt(e[o],t[o]))return!1}return!0}function xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function bf(e,t){var a=xf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xf(a)}}function Hp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Up(){for(var e=window,t=dn();t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=dn(e.document)}return t}function Cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Cy(e){var t=Up(),a=e.focusedElem,r=e.selectionRange;if(t!==a&&a&&a.ownerDocument&&Hp(a.ownerDocument.documentElement,a)){if(r!==null&&Cu(a)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in a)a.selectionStart=t,a.selectionEnd=Math.min(e,a.value.length);else if(e=(t=a.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=a.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=bf(a,i);var n=bf(a,r);o&&n&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==n.node||e.focusOffset!==n.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(n.node,n.offset)):(t.setEnd(n.node,n.offset),e.addRange(t)))}}for(t=[],e=a;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<t.length;a++)e=t[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Iy=Ht&&"documentMode"in document&&11>=document.documentMode,br=null,Bs=null,Eo=null,Fs=!1;function yf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fs||br==null||br!==dn(r)||(r=br,"selectionStart"in r&&Cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Uo(Eo,r)||(Eo=r,r=vn(Bs,"onSelect"),0<r.length&&(t=new wu("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=br)))}function Ui(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var yr={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},os={},qp={};Ht&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Fn(e){if(os[e])return os[e];if(!yr[e])return e;var t=yr[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in qp)return os[e]=t[a];return e}var Wp=Fn("animationend"),Vp=Fn("animationiteration"),Gp=Fn("animationstart"),Xp=Fn("transitionend"),Yp=new Map,wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ya(e,t){Yp.set(e,t),Va(t,[e])}for(qi=0;qi<wf.length;qi++)Wi=wf[qi],Lf=Wi.toLowerCase(),Sf=Wi[0].toUpperCase()+Wi.slice(1),ya(Lf,"on"+Sf);var Wi,Lf,Sf,qi;ya(Wp,"onAnimationEnd");ya(Vp,"onAnimationIteration");ya(Gp,"onAnimationStart");ya("dblclick","onDoubleClick");ya("focusin","onFocus");ya("focusout","onBlur");ya(Xp,"onTransitionEnd");Ar("onMouseEnter",["mouseout","mouseover"]);Ar("onMouseLeave",["mouseout","mouseover"]);Ar("onPointerEnter",["pointerout","pointerover"]);Ar("onPointerLeave",["pointerout","pointerover"]);Va("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Va("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Va("onBeforeInput",["compositionend","keypress","textInput","paste"]);Va("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Va("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Va("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ky=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function Cf(e,t,a){var r=e.type||"unknown-event";e.currentTarget=a,kb(r,t,void 0,e),e.currentTarget=null}function Kp(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var n=r.length-1;0<=n;n--){var s=r[n],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;Cf(o,s,d),i=u}else for(n=0;n<r.length;n++){if(s=r[n],u=s.instance,d=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;Cf(o,s,d),i=u}}}if(fn)throw e=Ms,fn=!1,Ms=null,e}function V(e,t){var a=t[Hs];a===void 0&&(a=t[Hs]=new Set);var r=e+"__bubble";a.has(r)||(Qp(t,e,2,!1),a.add(r))}function is(e,t,a){var r=0;t&&(r|=4),Qp(a,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function qo(e){if(!e[Vi]){e[Vi]=!0,op.forEach(function(a){a!=="selectionchange"&&(ky.has(a)||is(a,!1,e),is(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vi]||(t[Vi]=!0,is("selectionchange",!1,t))}}function Qp(e,t,a,r){switch(Ap(t)){case 1:var o=Hb;break;case 4:o=Ub;break;default:o=bu}a=o.bind(null,t,a,e),o=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function ns(e,t,a,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var n=r.tag;if(n===3||n===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(n===4)for(n=r.return;n!==null;){var u=n.tag;if((u===3||u===4)&&(u=n.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;n=n.return}for(;s!==null;){if(n=Ba(s),n===null)return;if(u=n.tag,u===5||u===6){r=i=n;continue e}s=s.parentNode}}r=r.return}yp(function(){var d=i,p=mu(a),h=[];e:{var v=Yp.get(e);if(v!==void 0){var y=wu,b=e;switch(e){case"keypress":if(tn(a)===0)break e;case"keydown":case"keyup":y=oy;break;case"focusin":b="focus",y=as;break;case"focusout":b="blur",y=as;break;case"beforeblur":case"afterblur":y=as;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=cf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Vb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=ly;break;case Wp:case Vp:case Gp:y=Yb;break;case Xp:y=uy;break;case"scroll":y=qb;break;case"wheel":y=cy;break;case"copy":case"cut":case"paste":y=Qb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=pf}var w=(t&4)!==0,M=!w&&e==="scroll",g=w?v!==null?v+"Capture":null:v;w=[];for(var f=d,x;f!==null;){x=f;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,g!==null&&(S=Oo(f,g),S!=null&&w.push(Wo(f,S,x)))),M)break;f=f.return}0<w.length&&(v=new y(v,b,null,a,p),h.push({event:v,listeners:w}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",v&&a!==Rs&&(b=a.relatedTarget||a.fromElement)&&(Ba(b)||b[Ut]))break e;if((y||v)&&(v=p.window===p?p:(v=p.ownerDocument)?v.defaultView||v.parentWindow:window,y?(b=a.relatedTarget||a.toElement,y=d,b=b?Ba(b):null,b!==null&&(M=Ga(b),b!==M||b.tag!==5&&b.tag!==6)&&(b=null)):(y=null,b=d),y!==b)){if(w=cf,S="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=pf,S="onPointerLeave",g="onPointerEnter",f="pointer"),M=y==null?v:wr(y),x=b==null?v:wr(b),v=new w(S,f+"leave",y,a,p),v.target=M,v.relatedTarget=x,S=null,Ba(p)===d&&(w=new w(g,f+"enter",b,a,p),w.target=x,w.relatedTarget=M,S=w),M=S,y&&b)t:{for(w=y,g=b,f=0,x=w;x;x=mr(x))f++;for(x=0,S=g;S;S=mr(S))x++;for(;0<f-x;)w=mr(w),f--;for(;0<x-f;)g=mr(g),x--;for(;f--;){if(w===g||g!==null&&w===g.alternate)break t;w=mr(w),g=mr(g)}w=null}else w=null;y!==null&&If(h,v,y,w,!1),b!==null&&M!==null&&If(h,M,b,w,!0)}}e:{if(v=d?wr(d):window,y=v.nodeName&&v.nodeName.toLowerCase(),y==="select"||y==="input"&&v.type==="file")var P=xy;else if(hf(v))if(Np)P=Ly;else{P=yy;var R=by}else(y=v.nodeName)&&y.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(P=wy);if(P&&(P=P(e,d))){jp(h,P,a,p);break e}R&&R(e,v,d),e==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&Cs(v,"number",v.value)}switch(R=d?wr(d):window,e){case"focusin":(hf(R)||R.contentEditable==="true")&&(br=R,Bs=d,Eo=null);break;case"focusout":Eo=Bs=br=null;break;case"mousedown":Fs=!0;break;case"contextmenu":case"mouseup":case"dragend":Fs=!1,yf(h,a,p);break;case"selectionchange":if(Iy)break;case"keydown":case"keyup":yf(h,a,p)}var k;if(Su)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else xr?Fp(e,a)&&(T="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(T="onCompositionStart");T&&(Bp&&a.locale!=="ko"&&(xr||T!=="onCompositionStart"?T==="onCompositionEnd"&&xr&&(k=Dp()):(sa=p,yu="value"in sa?sa.value:sa.textContent,xr=!0)),R=vn(d,T),0<R.length&&(T=new ff(T,e,null,a,p),h.push({event:T,listeners:R}),k?T.data=k:(k=Op(a),k!==null&&(T.data=k)))),(k=py?gy(e,a):my(e,a))&&(d=vn(d,"onBeforeInput"),0<d.length&&(p=new ff("onBeforeInput","beforeinput",null,a,p),h.push({event:p,listeners:d}),p.data=k))}Kp(h,t)})}function Wo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function vn(e,t){for(var a=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Oo(e,a),i!=null&&r.unshift(Wo(e,i,o)),i=Oo(e,t),i!=null&&r.push(Wo(e,i,o))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function If(e,t,a,r,o){for(var i=t._reactName,n=[];a!==null&&a!==r;){var s=a,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Oo(a,i),u!=null&&n.unshift(Wo(a,u,s))):o||(u=Oo(a,i),u!=null&&n.push(Wo(a,u,s)))),a=a.return}n.length!==0&&e.push({event:t,listeners:n})}var Py=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function kf(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(Ty,"")}function Gi(e,t,a){if(t=kf(t),kf(e)!==t&&a)throw Error(I(425))}function xn(){}var Os=null,js=null;function Ns(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _s=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Pf=typeof Promise=="function"?Promise:void 0,$y=typeof queueMicrotask=="function"?queueMicrotask:typeof Pf<"u"?function(e){return Pf.resolve(null).then(e).catch(Ey)}:_s;function Ey(e){setTimeout(function(){throw e})}function ls(e,t){var a=t,r=0;do{var o=a.nextSibling;if(e.removeChild(a),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(r===0){e.removeChild(o),_o(t);return}r--}else a!=="$"&&a!=="$?"&&a!=="$!"||r++;a=o}while(a);_o(t)}function pa(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}var Hr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Hr,Vo="__reactProps$"+Hr,Ut="__reactContainer$"+Hr,Hs="__reactEvents$"+Hr,My="__reactListeners$"+Hr,zy="__reactHandles$"+Hr;function Ba(e){var t=e[Tt];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ut]||a[Tt]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Tf(e);e!==null;){if(a=e[Tt])return a;e=Tf(e)}return t}e=a,a=e.parentNode}return null}function ti(e){return e=e[Tt]||e[Ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function wr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function On(e){return e[Vo]||null}var Us=[],Lr=-1;function wa(e){return{current:e}}function G(e){0>Lr||(e.current=Us[Lr],Us[Lr]=null,Lr--)}function W(e,t){Lr++,Us[Lr]=e.current,e.current=t}var ba={},Ce=wa(ba),Ne=wa(!1),_a=ba;function Dr(e,t){var a=e.type.contextTypes;if(!a)return ba;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in a)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function _e(e){return e=e.childContextTypes,e!=null}function bn(){G(Ne),G(Ce)}function Rf(e,t,a){if(Ce.current!==ba)throw Error(I(168));W(Ce,t),W(Ne,a)}function Zp(e,t,a){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return a;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(I(108,bb(e)||"Unknown",o));return Q({},a,r)}function yn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ba,_a=Ce.current,W(Ce,e),W(Ne,Ne.current),!0}function $f(e,t,a){var r=e.stateNode;if(!r)throw Error(I(169));a?(e=Zp(e,t,_a),r.__reactInternalMemoizedMergedChildContext=e,G(Ne),G(Ce),W(Ce,e)):G(Ne),W(Ne,a)}var Ot=null,jn=!1,ss=!1;function Jp(e){Ot===null?Ot=[e]:Ot.push(e)}function Ay(e){jn=!0,Jp(e)}function La(){if(!ss&&Ot!==null){ss=!0;var e=0,t=N;try{var a=Ot;for(N=1;e<a.length;e++){var r=a[e];do r=r(!0);while(r!==null)}Ot=null,jn=!1}catch(o){throw Ot!==null&&(Ot=Ot.slice(e+1)),Cp(hu,La),o}finally{N=t,ss=!1}}return null}var Sr=[],Cr=0,wn=null,Ln=0,tt=[],at=0,Ha=null,jt=1,Nt="";function Aa(e,t){Sr[Cr++]=Ln,Sr[Cr++]=wn,wn=e,Ln=t}function eg(e,t,a){tt[at++]=jt,tt[at++]=Nt,tt[at++]=Ha,Ha=e;var r=jt;e=Nt;var o=32-vt(r)-1;r&=~(1<<o),a+=1;var i=32-vt(t)+o;if(30<i){var n=o-o%5;i=(r&(1<<n)-1).toString(32),r>>=n,o-=n,jt=1<<32-vt(t)+o|a<<o|r,Nt=i+e}else jt=1<<i|a<<o|r,Nt=e}function Iu(e){e.return!==null&&(Aa(e,1),eg(e,1,0))}function ku(e){for(;e===wn;)wn=Sr[--Cr],Sr[Cr]=null,Ln=Sr[--Cr],Sr[Cr]=null;for(;e===Ha;)Ha=tt[--at],tt[at]=null,Nt=tt[--at],tt[at]=null,jt=tt[--at],tt[at]=null}var Ve=null,We=null,X=!1,ht=null;function tg(e,t){var a=rt(5,null,null,0);a.elementType="DELETED",a.stateNode=t,a.return=e,t=e.deletions,t===null?(e.deletions=[a],e.flags|=16):t.push(a)}function Ef(e,t){switch(e.tag){case 5:var a=e.type;return t=t.nodeType!==1||a.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=pa(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(a=Ha!==null?{id:jt,overflow:Nt}:null,e.memoizedState={dehydrated:t,treeContext:a,retryLane:1073741824},a=rt(18,null,null,0),a.stateNode=t,a.return=e,e.child=a,Ve=e,We=null,!0):!1;default:return!1}}function qs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ws(e){if(X){var t=We;if(t){var a=t;if(!Ef(e,t)){if(qs(e))throw Error(I(418));t=pa(a.nextSibling);var r=Ve;t&&Ef(e,t)?tg(r,a):(e.flags=e.flags&-4097|2,X=!1,Ve=e)}}else{if(qs(e))throw Error(I(418));e.flags=e.flags&-4097|2,X=!1,Ve=e}}}function Mf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Xi(e){if(e!==Ve)return!1;if(!X)return Mf(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ns(e.type,e.memoizedProps)),t&&(t=We)){if(qs(e))throw ag(),Error(I(418));for(;t;)tg(e,t),t=pa(t.nextSibling)}if(Mf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(t===0){We=pa(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?pa(e.stateNode.nextSibling):null;return!0}function ag(){for(var e=We;e;)e=pa(e.nextSibling)}function Br(){We=Ve=null,X=!1}function Pu(e){ht===null?ht=[e]:ht.push(e)}var Dy=Vt.ReactCurrentBatchConfig;function bo(e,t,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(I(309));var r=a.stateNode}if(!r)throw Error(I(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(n){var s=o.refs;n===null?delete s[i]:s[i]=n},t._stringRef=i,t)}if(typeof e!="string")throw Error(I(284));if(!a._owner)throw Error(I(290,e))}return e}function Yi(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zf(e){var t=e._init;return t(e._payload)}function rg(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function a(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function o(g,f){return g=va(g,f),g.index=0,g.sibling=null,g}function i(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function n(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,x,S){return f===null||f.tag!==6?(f=ms(x,g.mode,S),f.return=g,f):(f=o(f,x),f.return=g,f)}function u(g,f,x,S){var P=x.type;return P===vr?p(g,f,x.props.children,S,x.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===oa&&zf(P)===f.type)?(S=o(f,x.props),S.ref=bo(g,f,x),S.return=g,S):(S=un(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,f,x),S.return=g,S)}function d(g,f,x,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=hs(x,g.mode,S),f.return=g,f):(f=o(f,x.children||[]),f.return=g,f)}function p(g,f,x,S,P){return f===null||f.tag!==7?(f=Na(x,g.mode,S,P),f.return=g,f):(f=o(f,x),f.return=g,f)}function h(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ms(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ai:return x=un(f.type,f.key,f.props,null,g.mode,x),x.ref=bo(g,null,f),x.return=g,x;case hr:return f=hs(f,g.mode,x),f.return=g,f;case oa:var S=f._init;return h(g,S(f._payload),x)}if(Co(f)||mo(f))return f=Na(f,g.mode,x,null),f.return=g,f;Yi(g,f)}return null}function v(g,f,x,S){var P=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:s(g,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ai:return x.key===P?u(g,f,x,S):null;case hr:return x.key===P?d(g,f,x,S):null;case oa:return P=x._init,v(g,f,P(x._payload),S)}if(Co(x)||mo(x))return P!==null?null:p(g,f,x,S,null);Yi(g,x)}return null}function y(g,f,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(x)||null,s(f,g,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ai:return g=g.get(S.key===null?x:S.key)||null,u(f,g,S,P);case hr:return g=g.get(S.key===null?x:S.key)||null,d(f,g,S,P);case oa:var R=S._init;return y(g,f,x,R(S._payload),P)}if(Co(S)||mo(S))return g=g.get(x)||null,p(f,g,S,P,null);Yi(f,S)}return null}function b(g,f,x,S){for(var P=null,R=null,k=f,T=f=0,U=null;k!==null&&T<x.length;T++){k.index>T?(U=k,k=null):U=k.sibling;var A=v(g,k,x[T],S);if(A===null){k===null&&(k=U);break}e&&k&&A.alternate===null&&t(g,k),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A,k=U}if(T===x.length)return a(g,k),X&&Aa(g,T),P;if(k===null){for(;T<x.length;T++)k=h(g,x[T],S),k!==null&&(f=i(k,f,T),R===null?P=k:R.sibling=k,R=k);return X&&Aa(g,T),P}for(k=r(g,k);T<x.length;T++)U=y(k,g,T,x[T],S),U!==null&&(e&&U.alternate!==null&&k.delete(U.key===null?T:U.key),f=i(U,f,T),R===null?P=U:R.sibling=U,R=U);return e&&k.forEach(function(ae){return t(g,ae)}),X&&Aa(g,T),P}function w(g,f,x,S){var P=mo(x);if(typeof P!="function")throw Error(I(150));if(x=P.call(x),x==null)throw Error(I(151));for(var R=P=null,k=f,T=f=0,U=null,A=x.next();k!==null&&!A.done;T++,A=x.next()){k.index>T?(U=k,k=null):U=k.sibling;var ae=v(g,k,A.value,S);if(ae===null){k===null&&(k=U);break}e&&k&&ae.alternate===null&&t(g,k),f=i(ae,f,T),R===null?P=ae:R.sibling=ae,R=ae,k=U}if(A.done)return a(g,k),X&&Aa(g,T),P;if(k===null){for(;!A.done;T++,A=x.next())A=h(g,A.value,S),A!==null&&(f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return X&&Aa(g,T),P}for(k=r(g,k);!A.done;T++,A=x.next())A=y(k,g,T,A.value,S),A!==null&&(e&&A.alternate!==null&&k.delete(A.key===null?T:A.key),f=i(A,f,T),R===null?P=A:R.sibling=A,R=A);return e&&k.forEach(function(Ea){return t(g,Ea)}),X&&Aa(g,T),P}function M(g,f,x,S){if(typeof x=="object"&&x!==null&&x.type===vr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ai:e:{for(var P=x.key,R=f;R!==null;){if(R.key===P){if(P=x.type,P===vr){if(R.tag===7){a(g,R.sibling),f=o(R,x.props.children),f.return=g,g=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===oa&&zf(P)===R.type){a(g,R.sibling),f=o(R,x.props),f.ref=bo(g,R,x),f.return=g,g=f;break e}a(g,R);break}else t(g,R);R=R.sibling}x.type===vr?(f=Na(x.props.children,g.mode,S,x.key),f.return=g,g=f):(S=un(x.type,x.key,x.props,null,g.mode,S),S.ref=bo(g,f,x),S.return=g,g=S)}return n(g);case hr:e:{for(R=x.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){a(g,f.sibling),f=o(f,x.children||[]),f.return=g,g=f;break e}else{a(g,f);break}else t(g,f);f=f.sibling}f=hs(x,g.mode,S),f.return=g,g=f}return n(g);case oa:return R=x._init,M(g,f,R(x._payload),S)}if(Co(x))return b(g,f,x,S);if(mo(x))return w(g,f,x,S);Yi(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(a(g,f.sibling),f=o(f,x),f.return=g,g=f):(a(g,f),f=ms(x,g.mode,S),f.return=g,g=f),n(g)):a(g,f)}return M}var Fr=rg(!0),og=rg(!1),Sn=wa(null),Cn=null,Ir=null,Tu=null;function Ru(){Tu=Ir=Cn=null}function $u(e){var t=Sn.current;G(Sn),e._currentValue=t}function Vs(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function Mr(e,t){Cn=e,Tu=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Tu!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Cn===null)throw Error(I(308));Ir=e,Cn.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var Fa=null;function Eu(e){Fa===null?Fa=[e]:Fa.push(e)}function ig(e,t,a,r){var o=t.interleaved;return o===null?(a.next=a,Eu(t)):(a.next=o.next,o.next=a),t.interleaved=a,qt(e,r)}function qt(e,t){e.lanes|=t;var a=e.alternate;for(a!==null&&(a.lanes|=t),a=e,e=e.return;e!==null;)e.childLanes|=t,a=e.alternate,a!==null&&(a.childLanes|=t),a=e,e=e.return;return a.tag===3?a.stateNode:null}var ia=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ng(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(F&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qt(e,a)}return o=r.interleaved,o===null?(t.next=t,Eu(r)):(t.next=o.next,o.next=t),r.interleaved=t,qt(e,a)}function an(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,vu(e,a)}}function Af(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var o=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var n={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?o=i=n:i=i.next=n,a=a.next}while(a!==null);i===null?o=i=t:i=i.next=t}else o=i=t;a={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}function In(e,t,a,r){var o=e.updateQueue;ia=!1;var i=o.firstBaseUpdate,n=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,n===null?i=d:n.next=d,n=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==n&&(s===null?p.firstBaseUpdate=d:s.next=d,p.lastBaseUpdate=u))}if(i!==null){var h=o.baseState;n=0,p=d=u=null,s=i;do{var v=s.lane,y=s.eventTime;if((r&v)===v){p!==null&&(p=p.next={eventTime:y,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var b=e,w=s;switch(v=t,y=a,w.tag){case 1:if(b=w.payload,typeof b=="function"){h=b.call(y,h,v);break e}h=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=w.payload,v=typeof b=="function"?b.call(y,h,v):b,v==null)break e;h=Q({},h,v);break e;case 2:ia=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else y={eventTime:y,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(d=p=y,u=h):p=p.next=y,n|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(p===null&&(u=h),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do n|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);qa|=n,e.lanes=n,e.memoizedState=h}}function Df(e,t,a){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=a,typeof o!="function")throw Error(I(191,o));o.call(r)}}}var ai={},$t=wa(ai),Go=wa(ai),Xo=wa(ai);function Oa(e){if(e===ai)throw Error(I(174));return e}function zu(e,t){switch(W(Xo,t),W(Go,e),W($t,ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ks(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ks(t,e)}G($t),W($t,t)}function Or(){G($t),G(Go),G(Xo)}function lg(e){Oa(Xo.current);var t=Oa($t.current),a=ks(t,e.type);t!==a&&(W(Go,e),W($t,a))}function Au(e){Go.current===e&&(G($t),G(Go))}var Y=wa(0);function kn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var us=[];function Du(){for(var e=0;e<us.length;e++)us[e]._workInProgressVersionPrimary=null;us.length=0}var rn=Vt.ReactCurrentDispatcher,ds=Vt.ReactCurrentBatchConfig,Ua=0,K=null,le=null,de=null,Pn=!1,Mo=!1,Yo=0,By=0;function we(){throw Error(I(321))}function Bu(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!bt(e[a],t[a]))return!1;return!0}function Fu(e,t,a,r,o,i){if(Ua=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,rn.current=e===null||e.memoizedState===null?Ny:_y,e=a(r,o),Mo){i=0;do{if(Mo=!1,Yo=0,25<=i)throw Error(I(301));i+=1,de=le=null,t.updateQueue=null,rn.current=Hy,e=a(r,o)}while(Mo)}if(rn.current=Tn,t=le!==null&&le.next!==null,Ua=0,de=le=K=null,Pn=!1,t)throw Error(I(300));return e}function Ou(){var e=Yo!==0;return Yo=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?K.memoizedState=de=e:de=de.next=e,de}function nt(){if(le===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=de===null?K.memoizedState:de.next;if(t!==null)de=t,le=e;else{if(e===null)throw Error(I(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},de===null?K.memoizedState=de=e:de=de.next=e}return de}function Ko(e,t){return typeof t=="function"?t(e):t}function cs(e){var t=nt(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=le,o=r.baseQueue,i=a.pending;if(i!==null){if(o!==null){var n=o.next;o.next=i.next,i.next=n}r.baseQueue=o=i,a.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=n=null,u=null,d=i;do{var p=d.lane;if((Ua&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=h,n=r):u=u.next=h,K.lanes|=p,qa|=p}d=d.next}while(d!==null&&d!==i);u===null?n=r:u.next=s,bt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=n,t.baseQueue=u,a.lastRenderedState=r}if(e=a.interleaved,e!==null){o=e;do i=o.lane,K.lanes|=i,qa|=i,o=o.next;while(o!==e)}else o===null&&(a.lanes=0);return[t.memoizedState,a.dispatch]}function fs(e){var t=nt(),a=t.queue;if(a===null)throw Error(I(311));a.lastRenderedReducer=e;var r=a.dispatch,o=a.pending,i=t.memoizedState;if(o!==null){a.pending=null;var n=o=o.next;do i=e(i,n.action),n=n.next;while(n!==o);bt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,r]}function sg(){}function ug(e,t){var a=K,r=nt(),o=t(),i=!bt(r.memoizedState,o);if(i&&(r.memoizedState=o,je=!0),r=r.queue,ju(fg.bind(null,a,r,e),[e]),r.getSnapshot!==t||i||de!==null&&de.memoizedState.tag&1){if(a.flags|=2048,Qo(9,cg.bind(null,a,r,o,t),void 0,null),ce===null)throw Error(I(349));(Ua&30)!==0||dg(a,t,o)}return o}function dg(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function cg(e,t,a,r){t.value=a,t.getSnapshot=r,pg(t)&&gg(e)}function fg(e,t,a){return a(function(){pg(t)&&gg(e)})}function pg(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!bt(e,a)}catch{return!0}}function gg(e){var t=qt(e,1);t!==null&&xt(t,e,1,-1)}function Bf(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=e,e=e.dispatch=jy.bind(null,K,e),[t.memoizedState,e]}function Qo(e,t,a,r){return e={tag:e,create:t,destroy:a,deps:r,next:null},t=K.updateQueue,t===null?(t={lastEffect:null,stores:null},K.updateQueue=t,t.lastEffect=e.next=e):(a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e)),e}function mg(){return nt().memoizedState}function on(e,t,a,r){var o=Pt();K.flags|=e,o.memoizedState=Qo(1|t,a,void 0,r===void 0?null:r)}function Nn(e,t,a,r){var o=nt();r=r===void 0?null:r;var i=void 0;if(le!==null){var n=le.memoizedState;if(i=n.destroy,r!==null&&Bu(r,n.deps)){o.memoizedState=Qo(t,a,i,r);return}}K.flags|=e,o.memoizedState=Qo(1|t,a,i,r)}function Ff(e,t){return on(8390656,8,e,t)}function ju(e,t){return Nn(2048,8,e,t)}function hg(e,t){return Nn(4,2,e,t)}function vg(e,t){return Nn(4,4,e,t)}function xg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bg(e,t,a){return a=a!=null?a.concat([e]):null,Nn(4,4,xg.bind(null,t,e),a)}function Nu(){}function yg(e,t){var a=nt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function wg(e,t){var a=nt();t=t===void 0?null:t;var r=a.memoizedState;return r!==null&&t!==null&&Bu(t,r[1])?r[0]:(e=e(),a.memoizedState=[e,t],e)}function Lg(e,t,a){return(Ua&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=a):(bt(a,t)||(a=Pp(),K.lanes|=a,qa|=a,e.baseState=!0),t)}function Fy(e,t){var a=N;N=a!==0&&4>a?a:4,e(!0);var r=ds.transition;ds.transition={};try{e(!1),t()}finally{N=a,ds.transition=r}}function Sg(){return nt().memoizedState}function Oy(e,t,a){var r=ha(e);if(a={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null},Cg(e))Ig(t,a);else if(a=ig(e,t,a,r),a!==null){var o=$e();xt(a,e,r,o),kg(a,t,r)}}function jy(e,t,a){var r=ha(e),o={lane:r,action:a,hasEagerState:!1,eagerState:null,next:null};if(Cg(e))Ig(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var n=t.lastRenderedState,s=i(n,a);if(o.hasEagerState=!0,o.eagerState=s,bt(s,n)){var u=t.interleaved;u===null?(o.next=o,Eu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}a=ig(e,t,o,r),a!==null&&(o=$e(),xt(a,e,r,o),kg(a,t,r))}}function Cg(e){var t=e.alternate;return e===K||t!==null&&t===K}function Ig(e,t){Mo=Pn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function kg(e,t,a){if((a&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,vu(e,a)}}var Tn={readContext:it,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Ny={readContext:it,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Ff,useImperativeHandle:function(e,t,a){return a=a!=null?a.concat([e]):null,on(4194308,4,xg.bind(null,t,e),a)},useLayoutEffect:function(e,t){return on(4194308,4,e,t)},useInsertionEffect:function(e,t){return on(4,2,e,t)},useMemo:function(e,t){var a=Pt();return t=t===void 0?null:t,e=e(),a.memoizedState=[e,t],e},useReducer:function(e,t,a){var r=Pt();return t=a!==void 0?a(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Oy.bind(null,K,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:Bf,useDebugValue:Nu,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=Bf(!1),t=e[0];return e=Fy.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,a){var r=K,o=Pt();if(X){if(a===void 0)throw Error(I(407));a=a()}else{if(a=t(),ce===null)throw Error(I(349));(Ua&30)!==0||dg(r,t,a)}o.memoizedState=a;var i={value:a,getSnapshot:t};return o.queue=i,Ff(fg.bind(null,r,i,e),[e]),r.flags|=2048,Qo(9,cg.bind(null,r,i,a,t),void 0,null),a},useId:function(){var e=Pt(),t=ce.identifierPrefix;if(X){var a=Nt,r=jt;a=(r&~(1<<32-vt(r)-1)).toString(32)+a,t=":"+t+"R"+a,a=Yo++,0<a&&(t+="H"+a.toString(32)),t+=":"}else a=By++,t=":"+t+"r"+a.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},_y={readContext:it,useCallback:yg,useContext:it,useEffect:ju,useImperativeHandle:bg,useInsertionEffect:hg,useLayoutEffect:vg,useMemo:wg,useReducer:cs,useRef:mg,useState:function(){return cs(Ko)},useDebugValue:Nu,useDeferredValue:function(e){var t=nt();return Lg(t,le.memoizedState,e)},useTransition:function(){var e=cs(Ko)[0],t=nt().memoizedState;return[e,t]},useMutableSource:sg,useSyncExternalStore:ug,useId:Sg,unstable_isNewReconciler:!1},Hy={readContext:it,useCallback:yg,useContext:it,useEffect:ju,useImperativeHandle:bg,useInsertionEffect:hg,useLayoutEffect:vg,useMemo:wg,useReducer:fs,useRef:mg,useState:function(){return fs(Ko)},useDebugValue:Nu,useDeferredValue:function(e){var t=nt();return le===null?t.memoizedState=e:Lg(t,le.memoizedState,e)},useTransition:function(){var e=fs(Ko)[0],t=nt().memoizedState;return[e,t]},useMutableSource:sg,useSyncExternalStore:ug,useId:Sg,unstable_isNewReconciler:!1};function gt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var a in e)t[a]===void 0&&(t[a]=e[a]);return t}return t}function Gs(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:Q({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _n={isMounted:function(e){return(e=e._reactInternals)?Ga(e)===e:!1},enqueueSetState:function(e,t,a){e=e._reactInternals;var r=$e(),o=ha(e),i=_t(r,o);i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,o),t!==null&&(xt(t,e,o,r),an(t,e,o))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=$e(),o=ha(e),i=_t(r,o);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ga(e,i,o),t!==null&&(xt(t,e,o,r),an(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=$e(),r=ha(e),o=_t(a,r);o.tag=2,t!=null&&(o.callback=t),t=ga(e,o,r),t!==null&&(xt(t,e,r,a),an(t,e,r))}};function Of(e,t,a,r,o,i,n){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,n):t.prototype&&t.prototype.isPureReactComponent?!Uo(a,r)||!Uo(o,i):!0}function Pg(e,t,a){var r=!1,o=ba,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(o=_e(t)?_a:Ce.current,r=t.contextTypes,i=(r=r!=null)?Dr(e,o):ba),t=new t(a,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_n,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function jf(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&_n.enqueueReplaceState(t,t.state,null)}function Xs(e,t,a,r){var o=e.stateNode;o.props=a,o.state=e.memoizedState,o.refs={},Mu(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=it(i):(i=_e(t)?_a:Ce.current,o.context=Dr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Gs(e,t,i,a),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&_n.enqueueReplaceState(o,o.state,null),In(e,a,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function jr(e,t){try{var a="",r=t;do a+=xb(r),r=r.return;while(r);var o=a}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ps(e,t,a){return{value:e,source:null,stack:a??null,digest:t??null}}function Ys(e,t){try{console.error(t.value)}catch(a){setTimeout(function(){throw a})}}var Uy=typeof WeakMap=="function"?WeakMap:Map;function Tg(e,t,a){a=_t(-1,a),a.tag=3,a.payload={element:null};var r=t.value;return a.callback=function(){$n||($n=!0,iu=r),Ys(e,t)},a}function Rg(e,t,a){a=_t(-1,a),a.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;a.payload=function(){return r(o)},a.callback=function(){Ys(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Ys(e,t),typeof r!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n!==null?n:""})}),a}function Nf(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Uy;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(a)||(o.add(a),e=r1.bind(null,e,t,a),t.then(e,e))}function _f(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hf(e,t,a,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(t=_t(-1,1),t.tag=2,ga(a,t,1))),a.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var qy=Vt.ReactCurrentOwner,je=!1;function Re(e,t,a,r){t.child=e===null?og(t,null,a,r):Fr(t,e.child,a,r)}function Uf(e,t,a,r,o){a=a.render;var i=t.ref;return Mr(t,o),r=Fu(e,t,a,r,i,o),a=Ou(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(X&&a&&Iu(t),t.flags|=1,Re(e,t,r,o),t.child)}function qf(e,t,a,r,o){if(e===null){var i=a.type;return typeof i=="function"&&!Xu(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(t.tag=15,t.type=i,$g(e,t,i,r,o)):(e=un(a.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var n=i.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(n,r)&&e.ref===t.ref)return Wt(e,t,o)}return t.flags|=1,e=va(i,r),e.ref=t.ref,e.return=t,t.child=e}function $g(e,t,a,r,o){if(e!==null){var i=e.memoizedProps;if(Uo(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Wt(e,t,o)}return Ks(e,t,a,r,o)}function Eg(e,t,a){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Pr,qe),qe|=a;else{if((a&1073741824)===0)return e=i!==null?i.baseLanes|a:a,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Pr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:a,W(Pr,qe),qe|=r}else i!==null?(r=i.baseLanes|a,t.memoizedState=null):r=a,W(Pr,qe),qe|=r;return Re(e,t,o,a),t.child}function Mg(e,t){var a=t.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,a,r,o){var i=_e(a)?_a:Ce.current;return i=Dr(t,i),Mr(t,o),a=Fu(e,t,a,r,i,o),r=Ou(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Wt(e,t,o)):(X&&r&&Iu(t),t.flags|=1,Re(e,t,a,o),t.child)}function Wf(e,t,a,r,o){if(_e(a)){var i=!0;yn(t)}else i=!1;if(Mr(t,o),t.stateNode===null)nn(e,t),Pg(t,a,r),Xs(t,a,r,o),r=!0;else if(e===null){var n=t.stateNode,s=t.memoizedProps;n.props=s;var u=n.context,d=a.contextType;typeof d=="object"&&d!==null?d=it(d):(d=_e(a)?_a:Ce.current,d=Dr(t,d));var p=a.getDerivedStateFromProps,h=typeof p=="function"||typeof n.getSnapshotBeforeUpdate=="function";h||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==r||u!==d)&&jf(t,n,r,d),ia=!1;var v=t.memoizedState;n.state=v,In(t,r,n,o),u=t.memoizedState,s!==r||v!==u||Ne.current||ia?(typeof p=="function"&&(Gs(t,a,p,r),u=t.memoizedState),(s=ia||Of(t,a,s,r,v,u,d))?(h||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),n.props=r,n.state=u,n.context=d,r=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{n=t.stateNode,ng(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:gt(t.type,s),n.props=d,h=t.pendingProps,v=n.context,u=a.contextType,typeof u=="object"&&u!==null?u=it(u):(u=_e(a)?_a:Ce.current,u=Dr(t,u));var y=a.getDerivedStateFromProps;(p=typeof y=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(s!==h||v!==u)&&jf(t,n,r,u),ia=!1,v=t.memoizedState,n.state=v,In(t,r,n,o);var b=t.memoizedState;s!==h||v!==b||Ne.current||ia?(typeof y=="function"&&(Gs(t,a,y,r),b=t.memoizedState),(d=ia||Of(t,a,d,r,v,b,u)||!1)?(p||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(r,b,u),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(r,b,u)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=b),n.props=r,n.state=b,n.context=u,r=d):(typeof n.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Qs(e,t,a,r,i,o)}function Qs(e,t,a,r,o,i){Mg(e,t);var n=(t.flags&128)!==0;if(!r&&!n)return o&&$f(t,a,!1),Wt(e,t,i);r=t.stateNode,qy.current=t;var s=n&&typeof a.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&n?(t.child=Fr(t,e.child,null,i),t.child=Fr(t,null,s,i)):Re(e,t,s,i),t.memoizedState=r.state,o&&$f(t,a,!0),t.child}function zg(e){var t=e.stateNode;t.pendingContext?Rf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Rf(e,t.context,!1),zu(e,t.containerInfo)}function Vf(e,t,a,r,o){return Br(),Pu(o),t.flags|=256,Re(e,t,a,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Js(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ag(e,t,a){var r=t.pendingProps,o=Y.current,i=!1,n=(t.flags&128)!==0,s;if((s=n)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),W(Y,o&1),e===null)return Ws(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(n=r.children,e=r.fallback,i?(r=t.mode,i=t.child,n={mode:"hidden",children:n},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=n):i=qn(n,r,0,null),e=Na(e,r,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Js(a),t.memoizedState=Zs,e):_u(t,n));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Wy(e,t,n,r,s,o,a);if(i){i=r.fallback,n=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(n&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=va(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=va(s,i):(i=Na(i,n,a,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,n=e.child.memoizedState,n=n===null?Js(a):{baseLanes:n.baseLanes|a,cachePool:null,transitions:n.transitions},i.memoizedState=n,i.childLanes=e.childLanes&~a,t.memoizedState=Zs,r}return i=e.child,e=i.sibling,r=va(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=a),r.return=t,r.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=r,t.memoizedState=null,r}function _u(e,t){return t=qn({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ki(e,t,a,r){return r!==null&&Pu(r),Fr(t,e.child,null,a),e=_u(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wy(e,t,a,r,o,i,n){if(a)return t.flags&256?(t.flags&=-257,r=ps(Error(I(422))),Ki(e,t,n,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=qn({mode:"visible",children:r.children},o,0,null),i=Na(i,o,n,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Fr(t,e.child,null,n),t.child.memoizedState=Js(n),t.memoizedState=Zs,i);if((t.mode&1)===0)return Ki(e,t,n,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(I(419)),r=ps(i,r,void 0),Ki(e,t,n,r)}if(s=(n&e.childLanes)!==0,je||s){if(r=ce,r!==null){switch(n&-n){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|n))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,qt(e,o),xt(r,e,o,-1))}return Gu(),r=ps(Error(I(421))),Ki(e,t,n,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=o1.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=pa(o.nextSibling),Ve=t,X=!0,ht=null,e!==null&&(tt[at++]=jt,tt[at++]=Nt,tt[at++]=Ha,jt=e.id,Nt=e.overflow,Ha=t),t=_u(t,r.children),t.flags|=4096,t)}function Gf(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vs(e.return,t,a)}function gs(e,t,a,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=a,i.tailMode=o)}function Dg(e,t,a){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,a),r=Y.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gf(e,a,t);else if(e.tag===19)Gf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&kn(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),gs(t,!1,o,a,i);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&kn(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}gs(t,!0,a,null,i);break;case"together":gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function nn(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),qa|=t.lanes,(a&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,a=va(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Vy(e,t,a){switch(t.tag){case 3:zg(t),Br();break;case 5:lg(t);break;case 1:_e(t.type)&&yn(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;W(Sn,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):(a&t.child.childLanes)!==0?Ag(e,t,a):(W(Y,Y.current&1),e=Wt(e,t,a),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(a&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Dg(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Eg(e,t,a)}return Wt(e,t,a)}var Bg,eu,Fg,Og;Bg=function(e,t){for(var a=t.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};eu=function(){};Fg=function(e,t,a,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Oa($t.current);var i=null;switch(a){case"input":o=Ls(e,o),r=Ls(e,r),i=[];break;case"select":o=Q({},o,{value:void 0}),r=Q({},r,{value:void 0}),i=[];break;case"textarea":o=Is(e,o),r=Is(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xn)}Ps(a,r);var n;a=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(n in s)s.hasOwnProperty(n)&&(a||(a={}),a[n]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Bo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(n in s)!s.hasOwnProperty(n)||u&&u.hasOwnProperty(n)||(a||(a={}),a[n]="");for(n in u)u.hasOwnProperty(n)&&s[n]!==u[n]&&(a||(a={}),a[n]=u[n])}else a||(i||(i=[]),i.push(d,a)),a=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Bo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&V("scroll",e),i||s===u||(i=[])):(i=i||[]).push(d,u))}a&&(i=i||[]).push("style",a);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};Og=function(e,t,a,r){a!==r&&(t.flags|=4)};function yo(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Gy(e,t,a){var r=t.pendingProps;switch(ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return _e(t.type)&&bn(),Le(t),null;case 3:return r=t.stateNode,Or(),G(Ne),G(Ce),Du(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ht!==null&&(su(ht),ht=null))),eu(e,t),Le(t),null;case 5:Au(t);var o=Oa(Xo.current);if(a=t.type,e!==null&&t.stateNode!=null)Fg(e,t,a,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return Le(t),null}if(e=Oa($t.current),Xi(t)){r=t.stateNode,a=t.type;var i=t.memoizedProps;switch(r[Tt]=t,r[Vo]=i,e=(t.mode&1)!==0,a){case"dialog":V("cancel",r),V("close",r);break;case"iframe":case"object":case"embed":V("load",r);break;case"video":case"audio":for(o=0;o<ko.length;o++)V(ko[o],r);break;case"source":V("error",r);break;case"img":case"image":case"link":V("error",r),V("load",r);break;case"details":V("toggle",r);break;case"input":ef(r,i),V("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},V("invalid",r);break;case"textarea":af(r,i),V("invalid",r)}Ps(a,i),o=null;for(var n in i)if(i.hasOwnProperty(n)){var s=i[n];n==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Gi(r.textContent,s,e),o=["children",""+s]):Bo.hasOwnProperty(n)&&s!=null&&n==="onScroll"&&V("scroll",r)}switch(a){case"input":Di(r),tf(r,i,!0);break;case"textarea":Di(r),rf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=xn)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{n=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fp(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=n.createElement(a,{is:r.is}):(e=n.createElement(a),a==="select"&&(n=e,r.multiple?n.multiple=!0:r.size&&(n.size=r.size))):e=n.createElementNS(e,a),e[Tt]=t,e[Vo]=r,Bg(e,t,!1,!1),t.stateNode=e;e:{switch(n=Ts(a,r),a){case"dialog":V("cancel",e),V("close",e),o=r;break;case"iframe":case"object":case"embed":V("load",e),o=r;break;case"video":case"audio":for(o=0;o<ko.length;o++)V(ko[o],e);o=r;break;case"source":V("error",e),o=r;break;case"img":case"image":case"link":V("error",e),V("load",e),o=r;break;case"details":V("toggle",e),o=r;break;case"input":ef(e,r),o=Ls(e,r),V("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Q({},r,{value:void 0}),V("invalid",e);break;case"textarea":af(e,r),o=Is(e,r),V("invalid",e);break;default:o=r}Ps(a,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?mp(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&pp(e,u)):i==="children"?typeof u=="string"?(a!=="textarea"||u!=="")&&Fo(e,u):typeof u=="number"&&Fo(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Bo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&V("scroll",e):u!=null&&cu(e,i,u,n))}switch(a){case"input":Di(e),tf(e,r,!1);break;case"textarea":Di(e),rf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+xa(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Tr(e,!!r.multiple,i,!1):r.defaultValue!=null&&Tr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xn)}switch(a){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Og(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(a=Oa(Xo.current),Oa($t.current),Xi(t)){if(r=t.stateNode,a=t.memoizedProps,r[Tt]=t,(i=r.nodeValue!==a)&&(e=Ve,e!==null))switch(e.tag){case 3:Gi(r.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Gi(r.nodeValue,a,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(a.nodeType===9?a:a.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Le(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ag(),Br(),t.flags|=98560,i=!1;else if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(I(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Tt]=t}else Br(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else ht!==null&&(su(ht),ht=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=a,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Y.current&1)!==0?se===0&&(se=3):Gu())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Or(),eu(e,t),e===null&&qo(t.stateNode.containerInfo),Le(t),null;case 10:return $u(t.type._context),Le(t),null;case 17:return _e(t.type)&&bn(),Le(t),null;case 19:if(G(Y),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,n=i.rendering,n===null)if(r)yo(i,!1);else{if(se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=kn(e),n!==null){for(t.flags|=128,yo(i,!1),r=n.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=a,a=t.child;a!==null;)i=a,e=r,i.flags&=14680066,n=i.alternate,n===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=n.childLanes,i.lanes=n.lanes,i.child=n.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=n.memoizedProps,i.memoizedState=n.memoizedState,i.updateQueue=n.updateQueue,i.type=n.type,e=n.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&re()>Nr&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304)}else{if(!r)if(e=kn(n),e!==null){if(t.flags|=128,r=!0,a=e.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),yo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!n.alternate&&!X)return Le(t),null}else 2*re()-i.renderingStartTime>Nr&&a!==1073741824&&(t.flags|=128,r=!0,yo(i,!1),t.lanes=4194304);i.isBackwards?(n.sibling=t.child,t.child=n):(a=i.last,a!==null?a.sibling=n:t.child=n,i.last=n)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=re(),t.sibling=null,a=Y.current,W(Y,r?a&1|2:a&1),t):(Le(t),null);case 22:case 23:return Vu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(qe&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function Xy(e,t){switch(ku(t),t.tag){case 1:return _e(t.type)&&bn(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),G(Ne),G(Ce),Du(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Au(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));Br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return Or(),null;case 10:return $u(t.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Qi=!1,Se=!1,Yy=typeof WeakSet=="function"?WeakSet:Set,E=null;function kr(e,t){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(r){J(e,t,r)}else a.current=null}function tu(e,t,a){try{a()}catch(r){J(e,t,r)}}var Xf=!1;function Ky(e,t){if(Os=mn,e=Up(),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var n=0,s=-1,u=-1,d=0,p=0,h=e,v=null;t:for(;;){for(var y;h!==a||o!==0&&h.nodeType!==3||(s=n+o),h!==i||r!==0&&h.nodeType!==3||(u=n+r),h.nodeType===3&&(n+=h.nodeValue.length),(y=h.firstChild)!==null;)v=h,h=y;for(;;){if(h===e)break t;if(v===a&&++d===o&&(s=n),v===i&&++p===r&&(u=n),(y=h.nextSibling)!==null)break;h=v,v=h.parentNode}h=y}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(js={focusedElem:e,selectionRange:a},mn=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var b=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var w=b.memoizedProps,M=b.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:gt(t.type,w),M);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){J(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return b=Xf,Xf=!1,b}function zo(e,t,a){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&tu(t,a,i)}o=o.next}while(o!==r)}}function Hn(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var a=t=t.next;do{if((a.tag&e)===e){var r=a.create;a.destroy=r()}a=a.next}while(a!==t)}}function au(e){var t=e.ref;if(t!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof t=="function"?t(e):t.current=e}}function jg(e){var t=e.alternate;t!==null&&(e.alternate=null,jg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[Vo],delete t[Hs],delete t[My],delete t[zy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ng(e){return e.tag===5||e.tag===3||e.tag===4}function Yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ng(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ru(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.nodeType===8?a.parentNode.insertBefore(e,t):a.insertBefore(e,t):(a.nodeType===8?(t=a.parentNode,t.insertBefore(e,a)):(t=a,t.appendChild(e)),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=xn));else if(r!==4&&(e=e.child,e!==null))for(ru(e,t,a),e=e.sibling;e!==null;)ru(e,t,a),e=e.sibling}function ou(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,a),e=e.sibling;e!==null;)ou(e,t,a),e=e.sibling}var pe=null,mt=!1;function ra(e,t,a){for(a=a.child;a!==null;)_g(e,t,a),a=a.sibling}function _g(e,t,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(An,a)}catch{}switch(a.tag){case 5:Se||kr(a,t);case 6:var r=pe,o=mt;pe=null,ra(e,t,a),pe=r,mt=o,pe!==null&&(mt?(e=pe,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):pe.removeChild(a.stateNode));break;case 18:pe!==null&&(mt?(e=pe,a=a.stateNode,e.nodeType===8?ls(e.parentNode,a):e.nodeType===1&&ls(e,a),_o(e)):ls(pe,a.stateNode));break;case 4:r=pe,o=mt,pe=a.stateNode.containerInfo,mt=!0,ra(e,t,a),pe=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Se&&(r=a.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,n=i.destroy;i=i.tag,n!==void 0&&((i&2)!==0||(i&4)!==0)&&tu(a,t,n),o=o.next}while(o!==r)}ra(e,t,a);break;case 1:if(!Se&&(kr(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=a.memoizedProps,r.state=a.memoizedState,r.componentWillUnmount()}catch(s){J(a,t,s)}ra(e,t,a);break;case 21:ra(e,t,a);break;case 22:a.mode&1?(Se=(r=Se)||a.memoizedState!==null,ra(e,t,a),Se=r):ra(e,t,a);break;default:ra(e,t,a)}}function Kf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new Yy),t.forEach(function(r){var o=i1.bind(null,e,r);a.has(r)||(a.add(r),r.then(o,o))})}}function pt(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var o=a[r];try{var i=e,n=t,s=n;e:for(;s!==null;){switch(s.tag){case 5:pe=s.stateNode,mt=!1;break e;case 3:pe=s.stateNode.containerInfo,mt=!0;break e;case 4:pe=s.stateNode.containerInfo,mt=!0;break e}s=s.return}if(pe===null)throw Error(I(160));_g(i,n,o),pe=null,mt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){J(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hg(t,e),t=t.sibling}function Hg(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),kt(e),r&4){try{zo(3,e,e.return),Hn(3,e)}catch(w){J(e,e.return,w)}try{zo(5,e,e.return)}catch(w){J(e,e.return,w)}}break;case 1:pt(t,e),kt(e),r&512&&a!==null&&kr(a,a.return);break;case 5:if(pt(t,e),kt(e),r&512&&a!==null&&kr(a,a.return),e.flags&32){var o=e.stateNode;try{Fo(o,"")}catch(w){J(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,n=a!==null?a.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&dp(o,i),Ts(s,n);var d=Ts(s,i);for(n=0;n<u.length;n+=2){var p=u[n],h=u[n+1];p==="style"?mp(o,h):p==="dangerouslySetInnerHTML"?pp(o,h):p==="children"?Fo(o,h):cu(o,p,h,d)}switch(s){case"input":Ss(o,i);break;case"textarea":cp(o,i);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?Tr(o,!!i.multiple,y,!1):v!==!!i.multiple&&(i.defaultValue!=null?Tr(o,!!i.multiple,i.defaultValue,!0):Tr(o,!!i.multiple,i.multiple?[]:"",!1))}o[Vo]=i}catch(w){J(e,e.return,w)}}break;case 6:if(pt(t,e),kt(e),r&4){if(e.stateNode===null)throw Error(I(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){J(e,e.return,w)}}break;case 3:if(pt(t,e),kt(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{_o(t.containerInfo)}catch(w){J(e,e.return,w)}break;case 4:pt(t,e),kt(e);break;case 13:pt(t,e),kt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(qu=re())),r&4&&Kf(e);break;case 22:if(p=a!==null&&a.memoizedState!==null,e.mode&1?(Se=(d=Se)||p,pt(t,e),Se=d):pt(t,e),kt(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!p&&(e.mode&1)!==0)for(E=e,p=e.child;p!==null;){for(h=E=p;E!==null;){switch(v=E,y=v.child,v.tag){case 0:case 11:case 14:case 15:zo(4,v,v.return);break;case 1:kr(v,v.return);var b=v.stateNode;if(typeof b.componentWillUnmount=="function"){r=v,a=v.return;try{t=r,b.props=t.memoizedProps,b.state=t.memoizedState,b.componentWillUnmount()}catch(w){J(r,a,w)}}break;case 5:kr(v,v.return);break;case 22:if(v.memoizedState!==null){Zf(h);continue}}y!==null?(y.return=v,E=y):Zf(h)}p=p.sibling}e:for(p=null,h=e;;){if(h.tag===5){if(p===null){p=h;try{o=h.stateNode,d?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=h.stateNode,u=h.memoizedProps.style,n=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=gp("display",n))}catch(w){J(e,e.return,w)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){J(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pt(t,e),kt(e),r&4&&Kf(e);break;case 21:break;default:pt(t,e),kt(e)}}function kt(e){var t=e.flags;if(t&2){try{e:{for(var a=e.return;a!==null;){if(Ng(a)){var r=a;break e}a=a.return}throw Error(I(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Fo(o,""),r.flags&=-33);var i=Yf(e);ou(e,i,o);break;case 3:case 4:var n=r.stateNode.containerInfo,s=Yf(e);ru(e,s,n);break;default:throw Error(I(161))}}catch(u){J(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qy(e,t,a){E=e,Ug(e,t,a)}function Ug(e,t,a){for(var r=(e.mode&1)!==0;E!==null;){var o=E,i=o.child;if(o.tag===22&&r){var n=o.memoizedState!==null||Qi;if(!n){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Se;s=Qi;var d=Se;if(Qi=n,(Se=u)&&!d)for(E=o;E!==null;)n=E,u=n.child,n.tag===22&&n.memoizedState!==null?Jf(o):u!==null?(u.return=n,E=u):Jf(o);for(;i!==null;)E=i,Ug(i,t,a),i=i.sibling;E=o,Qi=s,Se=d}Qf(e,t,a)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,E=i):Qf(e,t,a)}}function Qf(e){for(;E!==null;){var t=E;if((t.flags&8772)!==0){var a=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Se||Hn(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Se)if(a===null)r.componentDidMount();else{var o=t.elementType===t.type?a.memoizedProps:gt(t.type,a.memoizedProps);r.componentDidUpdate(o,a.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Df(t,i,r);break;case 3:var n=t.updateQueue;if(n!==null){if(a=null,t.child!==null)switch(t.child.tag){case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}Df(t,n,a)}break;case 5:var s=t.stateNode;if(a===null&&t.flags&4){a=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break;case"img":u.src&&(a.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&_o(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Se||t.flags&512&&au(t)}catch(v){J(t,t.return,v)}}if(t===e){E=null;break}if(a=t.sibling,a!==null){a.return=t.return,E=a;break}E=t.return}}function Zf(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var a=t.sibling;if(a!==null){a.return=t.return,E=a;break}E=t.return}}function Jf(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var a=t.return;try{Hn(4,t)}catch(u){J(t,a,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){J(t,o,u)}}var i=t.return;try{au(t)}catch(u){J(t,i,u)}break;case 5:var n=t.return;try{au(t)}catch(u){J(t,n,u)}}}catch(u){J(t,t.return,u)}if(t===e){E=null;break}var s=t.sibling;if(s!==null){s.return=t.return,E=s;break}E=t.return}}var Zy=Math.ceil,Rn=Vt.ReactCurrentDispatcher,Hu=Vt.ReactCurrentOwner,ot=Vt.ReactCurrentBatchConfig,F=0,ce=null,ie=null,ge=0,qe=0,Pr=wa(0),se=0,Zo=null,qa=0,Un=0,Uu=0,Ao=null,Oe=null,qu=0,Nr=1/0,Ft=null,$n=!1,iu=null,ma=null,Zi=!1,ua=null,En=0,Do=0,nu=null,ln=-1,sn=0;function $e(){return(F&6)!==0?re():ln!==-1?ln:ln=re()}function ha(e){return(e.mode&1)===0?1:(F&2)!==0&&ge!==0?ge&-ge:Dy.transition!==null?(sn===0&&(sn=Pp()),sn):(e=N,e!==0||(e=window.event,e=e===void 0?16:Ap(e.type)),e)}function xt(e,t,a,r){if(50<Do)throw Do=0,nu=null,Error(I(185));Jo(e,a,r),((F&2)===0||e!==ce)&&(e===ce&&((F&2)===0&&(Un|=a),se===4&&la(e,ge)),He(e,r),a===1&&F===0&&(t.mode&1)===0&&(Nr=re()+500,jn&&La()))}function He(e,t){var a=e.callbackNode;Fb(e,t);var r=gn(e,e===ce?ge:0);if(r===0)a!==null&&lf(a),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(a!=null&&lf(a),t===1)e.tag===0?Ay(ep.bind(null,e)):Jp(ep.bind(null,e)),$y(function(){(F&6)===0&&La()}),a=null;else{switch(Tp(r)){case 1:a=hu;break;case 4:a=Ip;break;case 16:a=pn;break;case 536870912:a=kp;break;default:a=pn}a=Qg(a,qg.bind(null,e))}e.callbackPriority=t,e.callbackNode=a}}function qg(e,t){if(ln=-1,sn=0,(F&6)!==0)throw Error(I(327));var a=e.callbackNode;if(zr()&&e.callbackNode!==a)return null;var r=gn(e,e===ce?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Mn(e,r);else{t=r;var o=F;F|=2;var i=Vg();(ce!==e||ge!==t)&&(Ft=null,Nr=re()+500,ja(e,t));do try{t1();break}catch(s){Wg(e,s)}while(!0);Ru(),Rn.current=i,F=o,ie!==null?t=0:(ce=null,ge=0,t=se)}if(t!==0){if(t===2&&(o=zs(e),o!==0&&(r=o,t=lu(e,o))),t===1)throw a=Zo,ja(e,0),la(e,r),He(e,re()),a;if(t===6)la(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Jy(o)&&(t=Mn(e,r),t===2&&(i=zs(e),i!==0&&(r=i,t=lu(e,i))),t===1))throw a=Zo,ja(e,0),la(e,r),He(e,re()),a;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:Da(e,Oe,Ft);break;case 3:if(la(e,r),(r&130023424)===r&&(t=qu+500-re(),10<t)){if(gn(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){$e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=_s(Da.bind(null,e,Oe,Ft),t);break}Da(e,Oe,Ft);break;case 4:if(la(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var n=31-vt(r);i=1<<n,n=t[n],n>o&&(o=n),r&=~i}if(r=o,r=re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zy(r/1960))-r,10<r){e.timeoutHandle=_s(Da.bind(null,e,Oe,Ft),r);break}Da(e,Oe,Ft);break;case 5:Da(e,Oe,Ft);break;default:throw Error(I(329))}}}return He(e,re()),e.callbackNode===a?qg.bind(null,e):null}function lu(e,t){var a=Ao;return e.current.memoizedState.isDehydrated&&(ja(e,t).flags|=256),e=Mn(e,t),e!==2&&(t=Oe,Oe=a,t!==null&&su(t)),e}function su(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function Jy(e){for(var t=e;;){if(t.flags&16384){var a=t.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var r=0;r<a.length;r++){var o=a[r],i=o.getSnapshot;o=o.value;try{if(!bt(i(),o))return!1}catch{return!1}}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function la(e,t){for(t&=~Uu,t&=~Un,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var a=31-vt(t),r=1<<a;e[a]=-1,t&=~r}}function ep(e){if((F&6)!==0)throw Error(I(327));zr();var t=gn(e,0);if((t&1)===0)return He(e,re()),null;var a=Mn(e,t);if(e.tag!==0&&a===2){var r=zs(e);r!==0&&(t=r,a=lu(e,r))}if(a===1)throw a=Zo,ja(e,0),la(e,t),He(e,re()),a;if(a===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Da(e,Oe,Ft),He(e,re()),null}function Wu(e,t){var a=F;F|=1;try{return e(t)}finally{F=a,F===0&&(Nr=re()+500,jn&&La())}}function Wa(e){ua!==null&&ua.tag===0&&(F&6)===0&&zr();var t=F;F|=1;var a=ot.transition,r=N;try{if(ot.transition=null,N=1,e)return e()}finally{N=r,ot.transition=a,F=t,(F&6)===0&&La()}}function Vu(){qe=Pr.current,G(Pr)}function ja(e,t){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,Ry(a)),ie!==null)for(a=ie.return;a!==null;){var r=a;switch(ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bn();break;case 3:Or(),G(Ne),G(Ce),Du();break;case 5:Au(r);break;case 4:Or();break;case 13:G(Y);break;case 19:G(Y);break;case 10:$u(r.type._context);break;case 22:case 23:Vu()}a=a.return}if(ce=e,ie=e=va(e.current,null),ge=qe=t,se=0,Zo=null,Uu=Un=qa=0,Oe=Ao=null,Fa!==null){for(t=0;t<Fa.length;t++)if(a=Fa[t],r=a.interleaved,r!==null){a.interleaved=null;var o=r.next,i=a.pending;if(i!==null){var n=i.next;i.next=o,r.next=n}a.pending=r}Fa=null}return e}function Wg(e,t){do{var a=ie;try{if(Ru(),rn.current=Tn,Pn){for(var r=K.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Pn=!1}if(Ua=0,de=le=K=null,Mo=!1,Yo=0,Hu.current=null,a===null||a.return===null){se=1,Zo=t,ie=null;break}e:{var i=e,n=a.return,s=a,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=s,h=p.tag;if((p.mode&1)===0&&(h===0||h===11||h===15)){var v=p.alternate;v?(p.updateQueue=v.updateQueue,p.memoizedState=v.memoizedState,p.lanes=v.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=_f(n);if(y!==null){y.flags&=-257,Hf(y,n,s,i,t),y.mode&1&&Nf(i,d,t),t=y,u=d;var b=t.updateQueue;if(b===null){var w=new Set;w.add(u),t.updateQueue=w}else b.add(u);break e}else{if((t&1)===0){Nf(i,d,t),Gu();break e}u=Error(I(426))}}else if(X&&s.mode&1){var M=_f(n);if(M!==null){(M.flags&65536)===0&&(M.flags|=256),Hf(M,n,s,i,t),Pu(jr(u,s));break e}}i=u=jr(u,s),se!==4&&(se=2),Ao===null?Ao=[i]:Ao.push(i),i=n;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Tg(i,u,t);Af(i,g);break e;case 1:s=u;var f=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(ma===null||!ma.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Rg(i,s,t);Af(i,S);break e}}i=i.return}while(i!==null)}Xg(a)}catch(P){t=P,ie===a&&a!==null&&(ie=a=a.return);continue}break}while(!0)}function Vg(){var e=Rn.current;return Rn.current=Tn,e===null?Tn:e}function Gu(){(se===0||se===3||se===2)&&(se=4),ce===null||(qa&268435455)===0&&(Un&268435455)===0||la(ce,ge)}function Mn(e,t){var a=F;F|=2;var r=Vg();(ce!==e||ge!==t)&&(Ft=null,ja(e,t));do try{e1();break}catch(o){Wg(e,o)}while(!0);if(Ru(),F=a,Rn.current=r,ie!==null)throw Error(I(261));return ce=null,ge=0,se}function e1(){for(;ie!==null;)Gg(ie)}function t1(){for(;ie!==null&&!Tb();)Gg(ie)}function Gg(e){var t=Kg(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?Xg(e):ie=t,Hu.current=null}function Xg(e){var t=e;do{var a=t.alternate;if(e=t.return,(t.flags&32768)===0){if(a=Gy(a,t,qe),a!==null){ie=a;return}}else{if(a=Xy(a,t),a!==null){a.flags&=32767,ie=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{se=6,ie=null;return}}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);se===0&&(se=5)}function Da(e,t,a){var r=N,o=ot.transition;try{ot.transition=null,N=1,a1(e,t,a,r)}finally{ot.transition=o,N=r}return null}function a1(e,t,a,r){do zr();while(ua!==null);if((F&6)!==0)throw Error(I(327));a=e.finishedWork;var o=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if(Ob(e,i),e===ce&&(ie=ce=null,ge=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zi||(Zi=!0,Qg(pn,function(){return zr(),null})),i=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var n=N;N=1;var s=F;F|=4,Hu.current=null,Ky(e,a),Hg(a,e),Cy(js),mn=!!Os,js=Os=null,e.current=a,Qy(a,e,o),Rb(),F=s,N=n,ot.transition=i}else e.current=a;if(Zi&&(Zi=!1,ua=e,En=o),i=e.pendingLanes,i===0&&(ma=null),Mb(a.stateNode,r),He(e,re()),t!==null)for(r=e.onRecoverableError,a=0;a<t.length;a++)o=t[a],r(o.value,{componentStack:o.stack,digest:o.digest});if($n)throw $n=!1,e=iu,iu=null,e;return(En&1)!==0&&e.tag!==0&&zr(),i=e.pendingLanes,(i&1)!==0?e===nu?Do++:(Do=0,nu=e):Do=0,La(),null}function zr(){if(ua!==null){var e=Tp(En),t=ot.transition,a=N;try{if(ot.transition=null,N=16>e?16:e,ua===null)var r=!1;else{if(e=ua,ua=null,En=0,(F&6)!==0)throw Error(I(331));var o=F;for(F|=4,E=e.current;E!==null;){var i=E,n=i.child;if((E.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(E=d;E!==null;){var p=E;switch(p.tag){case 0:case 11:case 15:zo(8,p,i)}var h=p.child;if(h!==null)h.return=p,E=h;else for(;E!==null;){p=E;var v=p.sibling,y=p.return;if(jg(p),p===d){E=null;break}if(v!==null){v.return=y,E=v;break}E=y}}}var b=i.alternate;if(b!==null){var w=b.child;if(w!==null){b.child=null;do{var M=w.sibling;w.sibling=null,w=M}while(w!==null)}}E=i}}if((i.subtreeFlags&2064)!==0&&n!==null)n.return=i,E=n;else e:for(;E!==null;){if(i=E,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:zo(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,E=g;break e}E=i.return}}var f=e.current;for(E=f;E!==null;){n=E;var x=n.child;if((n.subtreeFlags&2064)!==0&&x!==null)x.return=n,E=x;else e:for(n=f;E!==null;){if(s=E,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Hn(9,s)}}catch(P){J(s,s.return,P)}if(s===n){E=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,E=S;break e}E=s.return}}if(F=o,La(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(An,e)}catch{}r=!0}return r}finally{N=a,ot.transition=t}}return!1}function tp(e,t,a){t=jr(a,t),t=Tg(e,t,1),e=ga(e,t,1),t=$e(),e!==null&&(Jo(e,1,t),He(e,t))}function J(e,t,a){if(e.tag===3)tp(e,e,a);else for(;t!==null;){if(t.tag===3){tp(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ma===null||!ma.has(r))){e=jr(a,e),e=Rg(t,e,1),t=ga(t,e,1),e=$e(),t!==null&&(Jo(t,1,e),He(t,e));break}}t=t.return}}function r1(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),t=$e(),e.pingedLanes|=e.suspendedLanes&a,ce===e&&(ge&a)===a&&(se===4||se===3&&(ge&130023424)===ge&&500>re()-qu?ja(e,0):Uu|=a),He(e,t)}function Yg(e,t){t===0&&((e.mode&1)===0?t=1:(t=Oi,Oi<<=1,(Oi&130023424)===0&&(Oi=4194304)));var a=$e();e=qt(e,t),e!==null&&(Jo(e,t,a),He(e,a))}function o1(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Yg(e,a)}function i1(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),Yg(e,a)}var Kg;Kg=function(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)je=!0;else{if((e.lanes&a)===0&&(t.flags&128)===0)return je=!1,Vy(e,t,a);je=(e.flags&131072)!==0}else je=!1,X&&(t.flags&1048576)!==0&&eg(t,Ln,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;nn(e,t),e=t.pendingProps;var o=Dr(t,Ce.current);Mr(t,a),o=Fu(null,t,r,e,o,a);var i=Ou();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(r)?(i=!0,yn(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Mu(t),o.updater=_n,t.stateNode=o,o._reactInternals=t,Xs(t,r,e,a),t=Qs(null,t,r,!0,i,a)):(t.tag=0,X&&i&&Iu(t),Re(null,t,o,a),t=t.child),t;case 16:r=t.elementType;e:{switch(nn(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=l1(r),e=gt(r,e),o){case 0:t=Ks(null,t,r,e,a);break e;case 1:t=Wf(null,t,r,e,a);break e;case 11:t=Uf(null,t,r,e,a);break e;case 14:t=qf(null,t,r,gt(r.type,e),a);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Ks(e,t,r,o,a);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Wf(e,t,r,o,a);case 3:e:{if(zg(t),e===null)throw Error(I(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ng(e,t),In(t,r,null,a);var n=t.memoizedState;if(r=n.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:n.cache,pendingSuspenseBoundaries:n.pendingSuspenseBoundaries,transitions:n.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=jr(Error(I(423)),t),t=Vf(e,t,r,a,o);break e}else if(r!==o){o=jr(Error(I(424)),t),t=Vf(e,t,r,a,o);break e}else for(We=pa(t.stateNode.containerInfo.firstChild),Ve=t,X=!0,ht=null,a=og(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Br(),r===o){t=Wt(e,t,a);break e}Re(e,t,r,a)}t=t.child}return t;case 5:return lg(t),e===null&&Ws(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,n=o.children,Ns(r,o)?n=null:i!==null&&Ns(r,i)&&(t.flags|=32),Mg(e,t),Re(e,t,n,a),t.child;case 6:return e===null&&Ws(t),null;case 13:return Ag(e,t,a);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,a):Re(e,t,r,a),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),Uf(e,t,r,o,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,n=o.value,W(Sn,r._currentValue),r._currentValue=n,i!==null)if(bt(i.value,n)){if(i.children===o.children&&!Ne.current){t=Wt(e,t,a);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){n=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=_t(-1,a&-a),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Vs(i.return,a,t),s.lanes|=a;break}u=u.next}}else if(i.tag===10)n=i.type===t.type?null:i.child;else if(i.tag===18){if(n=i.return,n===null)throw Error(I(341));n.lanes|=a,s=n.alternate,s!==null&&(s.lanes|=a),Vs(n,a,t),n=i.sibling}else n=i.child;if(n!==null)n.return=i;else for(n=i;n!==null;){if(n===t){n=null;break}if(i=n.sibling,i!==null){i.return=n.return,n=i;break}n=n.return}i=n}Re(e,t,o.children,a),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Mr(t,a),o=it(o),r=r(o),t.flags|=1,Re(e,t,r,a),t.child;case 14:return r=t.type,o=gt(r,t.pendingProps),o=gt(r.type,o),qf(e,t,r,o,a);case 15:return $g(e,t,t.type,t.pendingProps,a);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:gt(r,o),nn(e,t),t.tag=1,_e(r)?(e=!0,yn(t)):e=!1,Mr(t,a),Pg(t,r,o),Xs(t,r,o,a),Qs(null,t,r,!0,e,a);case 19:return Dg(e,t,a);case 22:return Eg(e,t,a)}throw Error(I(156,t.tag))};function Qg(e,t){return Cp(e,t)}function n1(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,a,r){return new n1(e,t,a,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function l1(e){if(typeof e=="function")return Xu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===pu)return 11;if(e===gu)return 14}return 2}function va(e,t){var a=e.alternate;return a===null?(a=rt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function un(e,t,a,r,o,i){var n=2;if(r=e,typeof e=="function")Xu(e)&&(n=1);else if(typeof e=="string")n=5;else e:switch(e){case vr:return Na(a.children,o,i,t);case fu:n=8,o|=8;break;case xs:return e=rt(12,a,t,o|2),e.elementType=xs,e.lanes=i,e;case bs:return e=rt(13,a,t,o),e.elementType=bs,e.lanes=i,e;case ys:return e=rt(19,a,t,o),e.elementType=ys,e.lanes=i,e;case lp:return qn(a,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ip:n=10;break e;case np:n=9;break e;case pu:n=11;break e;case gu:n=14;break e;case oa:n=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=rt(n,a,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Na(e,t,a,r){return e=rt(7,e,r,t),e.lanes=a,e}function qn(e,t,a,r){return e=rt(22,e,r,t),e.elementType=lp,e.lanes=a,e.stateNode={isHidden:!1},e}function ms(e,t,a){return e=rt(6,e,null,t),e.lanes=a,e}function hs(e,t,a){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function s1(e,t,a,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Yu(e,t,a,r,o,i,n,s,u){return e=new s1(e,t,a,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(i),e}function u1(e,t,a){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:a}}function Zg(e){if(!e)return ba;e=e._reactInternals;e:{if(Ga(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var a=e.type;if(_e(a))return Zp(e,a,t)}return t}function Jg(e,t,a,r,o,i,n,s,u){return e=Yu(a,r,!0,e,o,i,n,s,u),e.context=Zg(null),a=e.current,r=$e(),o=ha(a),i=_t(r,o),i.callback=t??null,ga(a,i,o),e.current.lanes=o,Jo(e,o,r),He(e,r),e}function Wn(e,t,a,r){var o=t.current,i=$e(),n=ha(o);return a=Zg(a),t.context===null?t.context=a:t.pendingContext=a,t=_t(i,n),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ga(o,t,n),e!==null&&(xt(e,o,n,i),an(e,o,n)),n}function zn(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ap(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ku(e,t){ap(e,t),(e=e.alternate)&&ap(e,t)}function d1(){return null}var em=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}Vn.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Wn(e,t,null,null)};Vn.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wa(function(){Wn(null,e,null,null)}),t[Ut]=null}};function Vn(e){this._internalRoot=e}Vn.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ep();e={blockedOn:null,target:e,priority:t};for(var a=0;a<na.length&&t!==0&&t<na[a].priority;a++);na.splice(a,0,e),a===0&&zp(e)}};function Zu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gn(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function c1(e,t,a,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var d=zn(n);i.call(d)}}var n=Jg(t,r,e,0,null,!1,!1,"",rp);return e._reactRootContainer=n,e[Ut]=n.current,qo(e.nodeType===8?e.parentNode:e),Wa(),n}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=zn(u);s.call(d)}}var u=Yu(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=u,e[Ut]=u.current,qo(e.nodeType===8?e.parentNode:e),Wa(function(){Wn(t,u,a,r)}),u}function Xn(e,t,a,r,o){var i=a._reactRootContainer;if(i){var n=i;if(typeof o=="function"){var s=o;o=function(){var u=zn(n);s.call(u)}}Wn(t,n,e,o)}else n=c1(a,t,e,o,r);return zn(n)}Rp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var a=Io(t.pendingLanes);a!==0&&(vu(t,a|1),He(t,re()),(F&6)===0&&(Nr=re()+500,La()))}break;case 13:Wa(function(){var r=qt(e,1);if(r!==null){var o=$e();xt(r,e,1,o)}}),Ku(e,1)}};xu=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var a=$e();xt(t,e,134217728,a)}Ku(e,134217728)}};$p=function(e){if(e.tag===13){var t=ha(e),a=qt(e,t);if(a!==null){var r=$e();xt(a,e,t,r)}Ku(e,t)}};Ep=function(){return N};Mp=function(e,t){var a=N;try{return N=e,t()}finally{N=a}};$s=function(e,t,a){switch(t){case"input":if(Ss(e,a),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var o=On(r);if(!o)throw Error(I(90));up(r),Ss(r,o)}}}break;case"textarea":cp(e,a);break;case"select":t=a.value,t!=null&&Tr(e,!!a.multiple,t,!1)}};xp=Wu;bp=Wa;var f1={usingClientEntryPoint:!1,Events:[ti,wr,On,hp,vp,Wu]},wo={findFiberByHostInstance:Ba,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},p1={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lp(e),e===null?null:e.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||d1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Lo.isDisabled&&Lo.supportsFiber))try{An=Lo.inject(p1),Rt=Lo}catch{}var Lo;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f1;Ye.createPortal=function(e,t){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(t))throw Error(I(200));return u1(e,t,null,a)};Ye.createRoot=function(e,t){if(!Zu(e))throw Error(I(299));var a=!1,r="",o=em;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Yu(e,1,!1,null,null,a,!1,r,o),e[Ut]=t.current,qo(e.nodeType===8?e.parentNode:e),new Qu(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Lp(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return Wa(e)};Ye.hydrate=function(e,t,a){if(!Gn(t))throw Error(I(200));return Xn(null,e,t,!0,a)};Ye.hydrateRoot=function(e,t,a){if(!Zu(e))throw Error(I(405));var r=a!=null&&a.hydratedSources||null,o=!1,i="",n=em;if(a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(n=a.onRecoverableError)),t=Jg(t,null,e,1,a??null,o,!1,i,n),e[Ut]=t.current,qo(e),r)for(e=0;e<r.length;e++)a=r[e],o=a._getVersion,o=o(a._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[a,o]:t.mutableSourceEagerHydrationData.push(a,o);return new Vn(t)};Ye.render=function(e,t,a){if(!Gn(t))throw Error(I(200));return Xn(null,e,t,!1,a)};Ye.unmountComponentAtNode=function(e){if(!Gn(e))throw Error(I(40));return e._reactRootContainer?(Wa(function(){Xn(null,null,e,!1,function(){e._reactRootContainer=null,e[Ut]=null})}),!0):!1};Ye.unstable_batchedUpdates=Wu;Ye.unstable_renderSubtreeIntoContainer=function(e,t,a,r){if(!Gn(a))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return Xn(e,t,a,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426"});var Sa=Bt((FC,rm)=>{"use strict";function am(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(am)}catch(e){console.error(e)}}am(),rm.exports=tm()});var im=Bt(Ju=>{"use strict";var om=Sa();Ju.createRoot=om.createRoot,Ju.hydrateRoot=om.hydrateRoot;var OC});var vh=Bt(dl=>{"use strict";var nw=C(),lw=Symbol.for("react.element"),sw=Symbol.for("react.fragment"),uw=Object.prototype.hasOwnProperty,dw=nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cw={key:!0,ref:!0,__self:!0,__source:!0};function hh(e,t,a){var r,o={},i=null,n=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(n=t.ref);for(r in t)uw.call(t,r)&&!cw.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:lw,type:e,key:i,ref:n,props:o,_owner:dw.current}}dl.Fragment=sw;dl.jsx=hh;dl.jsxs=hh});var m=Bt((OI,xh)=>{"use strict";xh.exports=vh()});var q0=c(im(),1);var ue=c(C());var _="-ms-",Xa="-moz-",O="-webkit-",Yn="comm",Ca="rule",Ur="decl";var nm="@import";var lm="@namespace",Kn="@keyframes";var sm="@layer";var ed=Math.abs,ri=String.fromCharCode,oi=Object.assign;function um(e,t){return Z(e,0)^45?(((t<<2^Z(e,0))<<2^Z(e,1))<<2^Z(e,2))<<2^Z(e,3):0}function Qn(e){return e.trim()}function yt(e,t){return(e=t.exec(e))?e[0]:e}function z(e,t,a){return e.replace(t,a)}function qr(e,t,a){return e.indexOf(t,a)}function Z(e,t){return e.charCodeAt(t)|0}function wt(e,t,a){return e.slice(t,a)}function Ie(e){return e.length}function Zn(e){return e.length}function Ya(e,t){return t.push(e),e}function dm(e,t){return e.map(t).join("")}function td(e,t){return e.filter(function(a){return!yt(a,t)})}var Jn=1,Wr=1,cm=0,lt=0,ne=0,Gr="";function ii(e,t,a,r,o,i,n,s){return{value:e,root:t,parent:a,type:r,props:o,children:i,line:Jn,column:Wr,length:n,return:"",siblings:s}}function Gt(e,t){return oi(ii("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ka(e){for(;e.root;)e=Gt(e.root,{children:[e]});Ya(e,e.siblings)}function fm(){return ne}function pm(){return ne=lt>0?Z(Gr,--lt):0,Wr--,ne===10&&(Wr=1,Jn--),ne}function st(){return ne=lt<cm?Z(Gr,lt++):0,Wr++,ne===10&&(Wr=1,Jn++),ne}function Xt(){return Z(Gr,lt)}function ni(){return lt}function el(e,t){return wt(Gr,e,t)}function Vr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gm(e){return Jn=Wr=1,cm=Ie(Gr=e),lt=0,[]}function mm(e){return Gr="",e}function tl(e){return Qn(el(lt-1,ad(e===91?e+2:e===40?e+1:e)))}function hm(e){for(;(ne=Xt())&&ne<33;)st();return Vr(e)>2||Vr(ne)>3?"":" "}function vm(e,t){for(;--t&&st()&&!(ne<48||ne>102||ne>57&&ne<65||ne>70&&ne<97););return el(e,ni()+(t<6&&Xt()==32&&st()==32))}function ad(e){for(;st();)switch(ne){case e:return lt;case 34:case 39:e!==34&&e!==39&&ad(ne);break;case 40:e===41&&ad(e);break;case 92:st();break}return lt}function xm(e,t){for(;st()&&e+ne!==57;)if(e+ne===84&&Xt()===47)break;return"/*"+el(t,lt-1)+"*"+ri(e===47?e:st())}function bm(e){for(;!Vr(Xt());)st();return el(e,lt)}function Lm(e){return mm(al("",null,null,null,[""],e=gm(e),0,[0],e))}function al(e,t,a,r,o,i,n,s,u){for(var d=0,p=0,h=n,v=0,y=0,b=0,w=1,M=1,g=1,f=0,x="",S=o,P=i,R=r,k=x;M;)switch(b=f,f=st()){case 40:if(b!=108&&Z(k,h-1)==58){qr(k+=z(tl(f),"&","&\f"),"&\f",ed(d?s[d-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=tl(f);break;case 9:case 10:case 13:case 32:k+=hm(b);break;case 92:k+=vm(ni()-1,7);continue;case 47:switch(Xt()){case 42:case 47:Ya(g1(xm(st(),ni()),t,a,u),u),(Vr(b||1)==5||Vr(Xt()||1)==5)&&Ie(k)&&wt(k,-1,void 0)!==" "&&(k+=" ");break;default:k+="/"}break;case 123*w:s[d++]=Ie(k)*g;case 125*w:case 59:case 0:switch(f){case 0:case 125:M=0;case 59+p:g==-1&&(k=z(k,/\f/g,"")),y>0&&(Ie(k)-h||w===0&&b===47)&&Ya(y>32?wm(k+";",r,a,h-1,u):wm(z(k," ","")+";",r,a,h-2,u),u);break;case 59:k+=";";default:if(Ya(R=ym(k,t,a,d,p,o,s,x,S=[],P=[],h,i),i),f===123)if(p===0)al(k,t,R,R,S,i,h,s,P);else{switch(v){case 99:if(Z(k,3)===110)break;case 108:if(Z(k,2)===97)break;default:p=0;case 100:case 109:case 115:}p?al(e,R,R,r&&Ya(ym(e,R,R,0,0,o,s,x,o,S=[],h,P),P),o,P,h,s,r?S:P):al(k,R,R,R,[""],P,0,s,P)}}d=p=y=0,w=g=1,x=k="",h=n;break;case 58:h=1+Ie(k),y=b;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&pm()==125)continue}switch(k+=ri(f),f*w){case 38:g=p>0?1:(k+="\f",-1);break;case 44:s[d++]=(Ie(k)-1)*g,g=1;break;case 64:Xt()===45&&(k+=tl(st())),v=Xt(),p=h=Ie(x=k+=bm(ni())),f++;break;case 45:b===45&&Ie(k)==2&&(w=0)}}return i}function ym(e,t,a,r,o,i,n,s,u,d,p,h){for(var v=o-1,y=o===0?i:[""],b=Zn(y),w=0,M=0,g=0;w<r;++w)for(var f=0,x=wt(e,v+1,v=ed(M=n[w])),S=e;f<b;++f)(S=Qn(M>0?y[f]+" "+x:z(x,/&\f/g,y[f])))&&(u[g++]=S);return ii(e,t,a,o===0?Ca:s,u,d,p,h)}function g1(e,t,a,r){return ii(e,t,a,Yn,ri(fm()),wt(e,2,-2),0,r)}function wm(e,t,a,r,o){return ii(e,t,a,Ur,wt(e,0,r),wt(e,r+1,-1),r,o)}function rd(e,t,a){switch(um(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return O+e+e;case 4855:return O+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Xa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Xa+e+_+e+e;case 5936:switch(Z(e,t+11)){case 114:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+_+z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+_+e+e;case 6165:return O+e+_+"flex-"+e+e;case 5187:return O+e+z(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+_+"flex-$1$2")+e;case 5443:return O+e+_+"flex-item-"+z(e,/flex-|-self/g,"")+(yt(e,/flex-|baseline/)?"":_+"grid-row-"+z(e,/flex-|-self/g,""))+e;case 4675:return O+e+_+"flex-line-pack"+z(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+_+z(e,"shrink","negative")+e;case 5292:return O+e+_+z(e,"basis","preferred-size")+e;case 6060:return O+"box-"+z(e,"-grow","")+O+e+_+z(e,"grow","positive")+e;case 4554:return O+z(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return z(z(z(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return z(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return z(z(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+_+"flex-pack:$3"),/space-between/,"justify")+O+e+e;case 4200:if(!yt(e,/flex-|baseline/))return _+"grid-column-align"+wt(e,t)+e;break;case 2592:case 3360:return _+z(e,"template-","")+e;case 4384:case 3616:return a&&a.some(function(r,o){return t=o,yt(r.props,/grid-\w+-end/)})?~qr(e+(a=a[t].value),"span",0)?e:_+z(e,"-start","")+e+_+"grid-row-span:"+(~qr(a,"span",0)?yt(a,/\d+/):+yt(a,/\d+/)-+yt(e,/\d+/))+";":_+z(e,"-start","")+e;case 4896:case 4128:return a&&a.some(function(r){return yt(r.props,/grid-\w+-start/)})?e:_+z(z(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return z(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ie(e)-1-t>6)switch(Z(e,t+1)){case 109:if(Z(e,t+4)!==45)break;case 102:return z(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Xa+(Z(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~qr(e,"stretch",0)?rd(z(e,"stretch","fill-available"),t,a)+e:e}break;case 5152:case 5920:return z(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,n,s,u,d){return _+o+":"+i+d+(n?_+o+"-span:"+(s?u:+u-+i)+d:"")+e});case 4949:if(Z(e,t+6)===121)return z(e,":",":"+O)+e;break;case 6444:switch(Z(e,Z(e,14)===45?18:11)){case 120:return z(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(Z(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+_+"$2box$3")+e;case 100:return z(e,":",":"+_)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return z(e,"scroll-","scroll-snap-")+e}return e}function Xr(e,t){for(var a="",r=0;r<e.length;r++)a+=t(e[r],r,e,t)||"";return a}function Sm(e,t,a,r){switch(e.type){case sm:if(e.children.length)break;case nm:case lm:case Ur:return e.return=e.return||e.value;case Yn:return"";case Kn:return e.return=e.value+"{"+Xr(e.children,r)+"}";case Ca:if(!Ie(e.value=e.props.join(",")))return""}return Ie(a=Xr(e.children,r))?e.return=e.value+"{"+a+"}":""}function Cm(e){var t=Zn(e);return function(a,r,o,i){for(var n="",s=0;s<t;s++)n+=e[s](a,r,o,i)||"";return n}}function Im(e){return function(t){t.root||(t=t.return)&&e(t)}}function km(e,t,a,r){if(e.length>-1&&!e.return)switch(e.type){case Ur:e.return=rd(e.value,e.length,a);return;case Kn:return Xr([Gt(e,{value:z(e.value,"@","@"+O)})],r);case Ca:if(e.length)return dm(a=e.props,function(o){switch(yt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ka(Gt(e,{props:[z(o,/:(read-\w+)/,":"+Xa+"$1")]})),Ka(Gt(e,{props:[o]})),oi(e,{props:td(a,r)});break;case"::placeholder":Ka(Gt(e,{props:[z(o,/:(plac\w+)/,":"+O+"input-$1")]})),Ka(Gt(e,{props:[z(o,/:(plac\w+)/,":"+Xa+"$1")]})),Ka(Gt(e,{props:[z(o,/:(plac\w+)/,_+"input-$1")]})),Ka(Gt(e,{props:[o]})),oi(e,{props:td(a,r)});break}return""})}}var od,id,Yt=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Fm="active",Om="data-styled-version",ll="6.4.3",xd=`/*!sc*/
`,di=typeof window<"u"&&typeof document<"u";function Pm(e){if(typeof process<"u"&&process.env!==void 0){let t=process.env[e];if(t!==void 0&&t!=="")return t!=="false"}}var m1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(id=(od=Pm("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&od!==void 0?od:Pm("SC_DISABLE_SPEEDY"))!==null&&id!==void 0?id:typeof process<"u"&&process.env!==void 0&&!1),jm="sc-keyframes-",h1={};function pi(e,...t){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}var gI=1<<30,rl=new Map,il=new Map,ol=1,si=e=>{if(rl.has(e))return rl.get(e);for(;il.has(ol);)ol++;let t=ol++;return rl.set(e,t),il.set(t,e),t},v1=e=>il.get(e),x1=(e,t)=>{ol=t+1,rl.set(e,t),il.set(t,e)};var bd=Object.freeze([]),Yr=Object.freeze({});function Nm(e,t,a=Yr){return e.theme!==a.theme&&e.theme||t||a.theme}var b1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,y1=/(^-|-$)/g;function _m(e){return e.replace(b1,"-").replace(y1,"")}var w1=/(a)(d)/gi,Tm=e=>String.fromCharCode(e+(e>25?39:97));function yd(e){let t,a="";for(t=Math.abs(e);t>52;t=t/52|0)a=Tm(t%52)+a;return(Tm(t%52)+a).replace(w1,"$1-$2")}var ud=5381,Za=(e,t)=>{let a=t.length;for(;a;)e=33*e^t.charCodeAt(--a);return e},Hm=e=>Za(ud,e);function wd(e){return yd(Hm(e)>>>0)}function L1(e){return e.displayName||e.name||"Component"}function dd(e){return typeof e=="string"&&!0}function S1(e){return dd(e)?`styled.${e}`:`Styled(${L1(e)})`}var Um=Symbol.for("react.memo"),C1=Symbol.for("react.forward_ref"),I1={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},k1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},P1={[C1]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Um]:qm};function Rm(e){return("type"in(t=e)&&t.type.$$typeof)===Um?qm:"$$typeof"in e?P1[e.$$typeof]:I1;var t}var T1=Object.defineProperty,R1=Object.getOwnPropertyNames,$1=Object.getOwnPropertySymbols,E1=Object.getOwnPropertyDescriptor,M1=Object.getPrototypeOf,z1=Object.prototype;function Wm(e,t,a){if(typeof t!="string"){let r=M1(t);r&&r!==z1&&Wm(e,r,a);let o=R1(t).concat($1(t)),i=Rm(e),n=Rm(t);for(let s=0;s<o.length;++s){let u=o[s];if(!(u in k1||a&&a[u]||n&&u in n||i&&u in i)){let d=E1(t,u);try{T1(e,u,d)}catch{}}}}return e}function gi(e){return typeof e=="function"}var A1=Symbol.for("react.forward_ref");function Ld(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===A1&&"styledComponentId"in e}function ui(e,t){return e&&t?e+" "+t:e||t||""}function nl(e,t){return e.join(t||"")}function ci(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function cd(e,t,a=!1){if(!a&&!ci(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let r=0;r<t.length;r++)e[r]=cd(e[r],t[r]);else if(ci(t))for(let r in t)e[r]=cd(e[r],t[r]);return e}function Sd(e,t){Object.defineProperty(e,"toString",{value:t})}var D1=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let a=this._cGroup;a<e;a++)t+=this.groupSizes[a];else for(let a=this._cGroup-1;a>=e;a--)t-=this.groupSizes[a];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let o=this.groupSizes,i=o.length,n=i;for(;e>=n;)if(n<<=1,n<0)throw pi(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(o),this.length=n;for(let s=i;s<n;s++)this.groupSizes[s]=0}let a=this.indexOfGroup(e+1),r=0;for(let o=0,i=t.length;o<i;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],a=this.indexOfGroup(e),r=a+t;this.groupSizes[e]=0;for(let o=a;o<r;o++)this.tag.deleteRule(a);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||this.groupSizes[e]===0)return t;let a=this.groupSizes[e],r=this.indexOfGroup(e),o=r+a;for(let i=r;i<o;i++)t+=this.tag.getRule(i)+xd;return t}},B1=`style[${Yt}][${Om}="${ll}"]`,F1=new RegExp(`^${Yt}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),$m=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,fd=e=>{if(!e)return document;if($m(e))return e;if("getRootNode"in e){let t=e.getRootNode();if($m(t))return t}return document},O1=(e,t,a)=>{let r=a.split(","),o;for(let i=0,n=r.length;i<n;i++)(o=r[i])&&e.registerName(t,o)},j1=(e,t)=>{var a;let r=((a=t.textContent)!==null&&a!==void 0?a:"").split(xd),o=[];for(let i=0,n=r.length;i<n;i++){let s=r[i].trim();if(!s)continue;let u=s.match(F1);if(u){let d=0|parseInt(u[1],10),p=u[2];d!==0&&(x1(p,d),O1(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(s)}},nd=e=>{let t=fd(e.options.target).querySelectorAll(B1);for(let a=0,r=t.length;a<r;a++){let o=t[a];o&&o.getAttribute(Yt)!==Fm&&(j1(e,o),o.parentNode&&o.parentNode.removeChild(o))}},li=!1;function N1(){if(li!==!1)return li;if(typeof document<"u"){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return li=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return li=t.getAttribute("content")||void 0}return li=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}var Vm=(e,t)=>{let a=document.head,r=e||a,o=document.createElement("style"),i=(u=>{let d=Array.from(u.querySelectorAll(`style[${Yt}]`));return d[d.length-1]})(r),n=i!==void 0?i.nextSibling:null;o.setAttribute(Yt,Fm),o.setAttribute(Om,ll);let s=t||N1();return s&&o.setAttribute("nonce",s),r.insertBefore(o,n),o},_1=class{constructor(e,t){this.element=Vm(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(a=>{var r;if(a.sheet)return a.sheet;let o=(r=a.getRootNode().styleSheets)!==null&&r!==void 0?r:document.styleSheets;for(let i=0,n=o.length;i<n;i++){let s=o[i];if(s.ownerNode===a)return s}throw pi(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},H1=class{constructor(e,t){this.element=Vm(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let a=document.createTextNode(t);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},Em=di,U1={isServer:!di,useCSSOMInjection:!m1},fi=class e{static registerId(t){return si(t)}constructor(t=Yr,a={},r){this.options=Object.assign(Object.assign({},U1),t),this.gs=a,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!t.isServer,!this.server&&di&&Em&&(Em=!1,nd(this)),Sd(this,()=>(o=>{let i=o.getTag(),{length:n}=i,s="";for(let u=0;u<n;u++){let d=v1(u);if(d===void 0)continue;let p=o.names.get(d);if(p===void 0||!p.size)continue;let h=i.getGroup(u);if(h.length===0)continue;let v=Yt+".g"+u+'[id="'+d+'"]',y="";for(let b of p)b.length>0&&(y+=b+",");s+=h+v+'{content:"'+y+'"}'+xd}return s})(this))}rehydrate(){!this.server&&di&&nd(this)}reconstructWithOptions(t,a=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,a&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&di&&t.target!==this.options.target&&fd(this.options.target)!==fd(t.target)&&nd(r),r}allocateGSInstance(t){return this.gs[t]=(this.gs[t]||0)+1}getTag(){return this.tag||(this.tag=(t=(({useCSSOMInjection:a,target:r,nonce:o})=>a?new _1(r,o):new H1(r,o))(this.options),new D1(t)));var t}hasNameForId(t,a){var r,o;return(o=(r=this.names.get(t))===null||r===void 0?void 0:r.has(a))!==null&&o!==void 0&&o}registerName(t,a){si(t),t.startsWith(jm)&&this.keyframeIds.add(t);let r=this.names.get(t);r?r.add(a):this.names.set(t,new Set([a]))}insertRules(t,a,r){this.registerName(t,a),this.getTag().insertRules(si(t),r)}clearNames(t){this.names.has(t)&&this.names.get(t).clear()}clearRules(t){this.getTag().clearGroup(si(t)),this.clearNames(t)}clearTag(){this.tag=void 0}},Gm=new WeakSet,q1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function W1(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in q1||e.startsWith("--")?String(t).trim():t+"px"}var Qa=47;function Mm(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t="";for(let a=0;a<e.length;a++){let r=e.charCodeAt(a);t+=r>=65&&r<=90?"-"+String.fromCharCode(r+32):e[a]}return t.startsWith("ms-")?"-"+t:t}var Xm=Symbol.for("sc-keyframes");function V1(e){return typeof e=="object"&&e!==null&&Xm in e}function Ym(e){return gi(e)&&!(e.prototype&&e.prototype.isReactComponent)}var Km=e=>e==null||e===!1||e==="",G1=Symbol.for("react.client.reference");function zm(e){return e.$$typeof===G1}function Qm(e,t){for(let a in e){let r=e[a];e.hasOwnProperty(a)&&!Km(r)&&(Array.isArray(r)&&Gm.has(r)||gi(r)?t.push(Mm(a)+":",r,";"):ci(r)?(t.push(a+" {"),Qm(r,t),t.push("}")):t.push(Mm(a)+": "+W1(a,r)+";"))}}function Ia(e,t,a,r,o=[]){if(Km(e))return o;let i=typeof e;if(i==="string")return o.push(e),o;if(i==="function"){if(zm(e))return o;if(Ym(e)&&t){let n=e(t);return Ia(n,t,a,r,o)}return o.push(e),o}if(Array.isArray(e)){for(let n=0;n<e.length;n++)Ia(e[n],t,a,r,o);return o}return Ld(e)?(o.push(`.${e.styledComponentId}`),o):V1(e)?(a?(e.inject(a,r),o.push(e.getName(r))):o.push(e),o):zm(e)?o:ci(e)?e.toString!==Object.prototype.toString?(o.push(e.toString()),o):(Qm(e,o),o):(o.push(e.toString()),o)}var X1=Hm(ll),pd=class{constructor(t,a,r){this.rules=t,this.componentId=a,this.baseHash=Za(X1,a),this.baseStyle=r,fi.registerId(a)}generateAndInjectStyles(t,a,r){let o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,a,r):"";{let i="";for(let n=0;n<this.rules.length;n++){let s=this.rules[n];if(typeof s=="string")i+=s;else if(s)if(Ym(s)){let u=s(t);typeof u=="string"?i+=u:u!=null&&u!==!1&&(i+=nl(Ia(u,t,a,r)))}else i+=nl(Ia(s,t,a,r))}if(i){this.dynamicNameCache||(this.dynamicNameCache=new Map);let n=r.hash?r.hash+i:i,s=this.dynamicNameCache.get(n);if(!s){if(s=yd(Za(Za(this.baseHash,r.hash),i)>>>0),this.dynamicNameCache.size>=200){let u=this.dynamicNameCache.keys().next().value;u!==void 0&&this.dynamicNameCache.delete(u)}this.dynamicNameCache.set(n,s)}if(!a.hasNameForId(this.componentId,s)){let u=r(i,"."+s,void 0,this.componentId);a.insertRules(this.componentId,s,u)}o=ui(o,s)}}return o}},Y1=/&/g;function Zm(e,t){let a=0;for(;--t>=0&&e.charCodeAt(t)===92;)a++;return!(1&~a)}function ld(e){let t=e.length,a="",r=0,o=0,i=0,n=!1,s=!1;for(let u=0;u<t;u++){let d=e.charCodeAt(u);if(i!==0||n||d!==Qa||e.charCodeAt(u+1)!==42)if(n)d===42&&e.charCodeAt(u+1)===Qa&&(n=!1,u++);else if(d!==34&&d!==39||Zm(e,u)){if(i===0)if(d===123)o++;else if(d===125){if(o--,o<0){s=!0;let p=u+1;for(;p<t;){let h=e.charCodeAt(p);if(h===59||h===10)break;p++}p<t&&e.charCodeAt(p)===59&&p++,o=0,u=p-1,r=p;continue}o===0&&(a+=e.substring(r,u+1),r=u+1)}else d===59&&o===0&&(a+=e.substring(r,u+1),r=u+1)}else i===0?i=d:i===d&&(i=0);else n=!0,u++}return s||o!==0||i!==0?(r<t&&o===0&&i===0&&(a+=e.substring(r)),a):e}function Jm(e,t){let a=t+" ",r=","+a;for(let o=0;o<e.length;o++){let i=e[o];if(i.type==="rule"){i.value=(a+i.value).replaceAll(",",r);let n=i.props,s=[];for(let u=0;u<n.length;u++)s[u]=a+n[u];i.props=s}Array.isArray(i.children)&&i.type!=="@keyframes"&&Jm(i.children,t)}return e}function eh({options:e=Yr,plugins:t=bd}=Yr){let a,r,o,i=(v,y,b)=>b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?`.${a}`:v,n=t.slice();n.push(v=>{v.type===Ca&&v.value.includes("&")&&(o||(o=new RegExp(`\\${r}\\b`,"g")),v.props[0]=v.props[0].replace(Y1,r).replace(o,i))}),e.prefix&&n.push(km),n.push(Sm);let s=[],u=Cm(n.concat(Im(v=>s.push(v)))),d=(v,y="",b="",w="&")=>{a=w,r=y,o=void 0;let M=(function(f){let x=f.indexOf("//")!==-1,S=f.indexOf("}")!==-1;if(!x&&!S)return f;if(!x)return ld(f);let P=f.length,R="",k=0,T=0,U=0,A=0,ae=0,Ea=!1;for(;T<P;){let xe=f.charCodeAt(T);if(xe!==34&&xe!==39||Zm(f,T))if(U===0)if(xe===Qa&&T+1<P&&f.charCodeAt(T+1)===42){for(T+=2;T+1<P&&(f.charCodeAt(T)!==42||f.charCodeAt(T+1)!==Qa);)T++;T+=2}else if(xe!==40)if(xe!==41)if(A>0)T++;else if(xe===42&&T+1<P&&f.charCodeAt(T+1)===Qa)R+=f.substring(k,T),T+=2,k=T,Ea=!0;else if(xe===Qa&&T+1<P&&f.charCodeAt(T+1)===Qa){for(R+=f.substring(k,T);T<P&&f.charCodeAt(T)!==10;)T++;k=T,Ea=!0}else xe===123?ae++:xe===125&&ae--,T++;else A>0&&A--,T++;else A++,T++;else T++;else U===0?U=xe:U===xe&&(U=0),T++}return Ea?(k<P&&(R+=f.substring(k)),ae===0?R:ld(R)):ae===0?f:ld(f)})(v),g=Lm(b||y?b+" "+y+" { "+M+" }":M);return e.namespace&&(g=Jm(g,e.namespace)),s=[],Xr(g,u),s},p=e,h=ud;for(let v=0;v<t.length;v++)t[v].name||pi(15),h=Za(h,t[v].name);return p?.namespace&&(h=Za(h,p.namespace)),p?.prefix&&(h=Za(h,"p")),d.hash=h!==ud?h.toString():"",d}var K1=new fi,gd=eh(),Cd=ue.default.createContext({shouldForwardProp:void 0,styleSheet:K1,stylis:gd,stylisPlugins:void 0}),mI=Cd.Consumer;function Id(){return ue.default.useContext(Cd)}function th(e){var t;let a=Id(),{styleSheet:r}=a,o=ue.default.useMemo(()=>{let d=r;return e.sheet?d=e.sheet:e.target?d=d.reconstructWithOptions(e.nonce!==void 0?{target:e.target,nonce:e.nonce}:{target:e.target},!1):e.nonce!==void 0&&(d=d.reconstructWithOptions({nonce:e.nonce})),e.disableCSSOMInjection&&(d=d.reconstructWithOptions({useCSSOMInjection:!1})),d},[e.disableCSSOMInjection,e.nonce,e.sheet,e.target,r]),i=ue.default.useMemo(()=>{var d;return e.stylisPlugins===void 0&&e.namespace===void 0&&e.enableVendorPrefixes===void 0?a.stylis:eh({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:(d=e.stylisPlugins)!==null&&d!==void 0?d:a.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins,a.stylis,a.stylisPlugins]),n="shouldForwardProp"in e?e.shouldForwardProp:a.shouldForwardProp,s=(t=e.stylisPlugins)!==null&&t!==void 0?t:a.stylisPlugins,u=ue.default.useMemo(()=>({shouldForwardProp:n,styleSheet:o,stylis:i,stylisPlugins:s}),[n,o,i,s]);return ue.default.createElement(Cd.Provider,{value:u},e.children)}var kd=ue.default.createContext(void 0),hI=kd.Consumer;var Am=Object.prototype.hasOwnProperty,sd={};function Q1(e,t){let a=typeof e!="string"?"sc":_m(e);sd[a]=(sd[a]||0)+1;let r=a+"-"+wd(ll+a+sd[a]);return t?t+"-"+r:r}function Z1(e,t,a){let r=Ld(e),o=e,i=!dd(e),{attrs:n=bd,componentId:s=Q1(t.displayName,t.parentComponentId),displayName:u=S1(e)}=t,d=t.displayName&&t.componentId?_m(t.displayName)+"-"+t.componentId:t.componentId||s,p=r&&o.attrs?o.attrs.concat(n).filter(Boolean):n,{shouldForwardProp:h}=t;if(r&&o.shouldForwardProp){let w=o.shouldForwardProp;if(t.shouldForwardProp){let M=t.shouldForwardProp;h=(g,f)=>w(g,f)&&M(g,f)}else h=w}let v=new pd(a,d,r?o.componentStyle:void 0);function y(w,M){return(function(g,f,x){let{attrs:S,componentStyle:P,defaultProps:R,foldedComponentIds:k,styledComponentId:T,target:U}=g,A=ue.default.useContext(kd),ae=Id(),Ea=g.shouldForwardProp||ae.shouldForwardProp,xe=Nm(f,A,R)||Yr,Jt,so;{let ea=ue.default.useRef(null),ct=ea.current;if(ct!==null&&ct[1]===xe&&ct[2]===ae.styleSheet&&ct[3]===ae.stylis&&ct[7]===P&&(function(fr,Ue,Be){let Fe=fr,be=Ue,uo=0;for(let Ma in be)if(Am.call(be,Ma)&&(uo++,Fe[Ma]!==be[Ma]))return!1;return uo===Be})(ct[0],f,ct[4]))Jt=ct[5],so=ct[6];else{Jt=(function(Ue,Be,Fe){let be=Object.assign(Object.assign({},Be),{className:void 0,theme:Fe}),uo=Ue.length>1;for(let Ma=0;Ma<Ue.length;Ma++){let Al=Ue[Ma],Ii=gi(Al)?Al(uo?Object.assign({},be):be):Al;for(let ta in Ii)ta==="className"?be.className=ui(be.className,Ii[ta]):ta==="style"?be.style=Object.assign(Object.assign({},be.style),Ii[ta]):ta in Be&&Be[ta]===void 0||(be[ta]=Ii[ta])}return"className"in Be&&typeof Be.className=="string"&&(be.className=ui(be.className,Be.className)),be})(S,f,xe),so=(function(Ue,Be,Fe,be){return Ue.generateAndInjectStyles(Be,Fe,be)})(P,Jt,ae.styleSheet,ae.stylis);let fr=0;for(let Ue in f)Am.call(f,Ue)&&fr++;ea.current=[f,xe,ae.styleSheet,ae.stylis,fr,Jt,so,P]}}let Ci=Jt.as||U,Ml=(function(ea,ct,fr,Ue){let Be={};for(let Fe in ea)ea[Fe]===void 0||Fe[0]==="$"||Fe==="as"||Fe==="theme"&&ea.theme===fr||(Fe==="forwardedAs"?Be.as=ea.forwardedAs:Ue&&!Ue(Fe,ct)||(Be[Fe]=ea[Fe]));return Be})(Jt,Ci,xe,Ea),zl=ui(k,T);return so&&(zl+=" "+so),Jt.className&&(zl+=" "+Jt.className),Ml[dd(Ci)&&Ci.includes("-")?"class":"className"]=zl,x&&(Ml.ref=x),(0,ue.createElement)(Ci,Ml)})(b,w,M)}y.displayName=u;let b=ue.default.forwardRef(y);return b.attrs=p,b.componentStyle=v,b.displayName=u,b.shouldForwardProp=h,b.foldedComponentIds=r?ui(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=d,b.target=r?o.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(w){this._foldedDefaultProps=r?(function(M,...g){for(let f of g)cd(M,f,!0);return M})({},o.defaultProps,w):w}}),Sd(b,()=>`.${b.styledComponentId}`),i&&Wm(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var J1=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Dm(e,t){let a=[e[0]];for(let r=0,o=t.length;r<o;r+=1)a.push(t[r],e[r+1]);return a}var Bm=e=>(Gm.add(e),e);function L(e,...t){if(gi(e)||ci(e))return Bm(Ia(Dm(bd,[e,...t])));let a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?Ia(a):Bm(Ia(Dm(a,t)))}function md(e,t,a=Yr){if(!t)throw pi(1,t);let r=(o,...i)=>e(t,a,L(o,...i));return r.attrs=o=>md(e,t,Object.assign(Object.assign({},a),{attrs:Array.prototype.concat(a.attrs,o).filter(Boolean)})),r.withConfig=o=>md(e,t,Object.assign(Object.assign({},a),o)),r}var ah=e=>md(Z1,e),l=ah;J1.forEach(e=>{l[e]=ah(e)});var hd=class{constructor(t,a){this.instanceRules=new Map,this.rules=t,this.componentId=a,this.isStatic=(function(r){for(let o=0;o<r.length;o+=1){let i=r[o];if(gi(i)&&!Ld(i))return!1}return!0})(t),fi.registerId(this.componentId)}removeStyles(t,a){this.instanceRules.delete(t),this.rebuildGroup(a)}renderStyles(t,a,r,o){let i=this.componentId;if(this.isStatic){if(r.hasNameForId(i,i+t))this.instanceRules.has(t)||this.computeRules(t,a,r,o);else{let s=this.computeRules(t,a,r,o);r.insertRules(i,s.name,s.rules)}return}let n=this.instanceRules.get(t);if(this.computeRules(t,a,r,o),!r.server&&n){let s=n.rules,u=this.instanceRules.get(t).rules;if(s.length===u.length){let d=!0;for(let p=0;p<s.length;p++)if(s[p]!==u[p]){d=!1;break}if(d)return}}this.rebuildGroup(r)}computeRules(t,a,r,o){let i=nl(Ia(this.rules,a,r,o)),n={name:this.componentId+t,rules:o(i,"")};return this.instanceRules.set(t,n),n}rebuildGroup(t){let a=this.componentId;t.clearRules(a);for(let r of this.instanceRules.values())t.insertRules(a,r.name,r.rules)}};function rh(e,...t){let a=L(e,...t),r=`sc-global-${wd(JSON.stringify(a))}`,o=new hd(a,r),i=s=>{let u=Id(),d=ue.default.useContext(kd),p;{let h=ue.default.useRef(null);h.current===null&&(h.current=u.styleSheet.allocateGSInstance(r)),p=h.current}u.styleSheet.server&&n(p,s,u.styleSheet,d,u.stylis);{let h=o.isStatic?[p,u.styleSheet,o]:[p,s,u.styleSheet,d,u.stylis,o],v=ue.default.useRef(o);ue.default.useLayoutEffect(()=>{u.styleSheet.server||(v.current!==o&&(u.styleSheet.clearRules(r),v.current=o),n(p,s,u.styleSheet,d,u.stylis))},h),ue.default.useLayoutEffect(()=>()=>{u.styleSheet.server||o.removeStyles(p,u.styleSheet)},[p,u.styleSheet,o])}return u.styleSheet.server&&o.instanceRules.delete(p),null};function n(s,u,d,p,h){if(o.isStatic)o.renderStyles(s,h1,d,h);else{let v=Object.assign(Object.assign({},u),{theme:Nm(u,p,i.defaultProps)});o.renderStyles(s,v,d,h)}}return ue.default.memo(i)}var oh,vd=class{constructor(t,a){this[oh]=!0,this.inject=(r,o=gd)=>{let i=this.getName(o);if(!r.hasNameForId(this.id,i)){let n=o(this.rules,i,"@keyframes");r.insertRules(this.id,i,n)}},this.name=t,this.id=jm+t,this.rules=a,si(this.id),Sd(this,()=>{throw pi(12,String(this.name))})}getName(t=gd){return t.hash?this.name+yd(+t.hash>>>0):this.name}};function Et(e,...t){let a=nl(L(e,...t)),r=wd(a);return new vd(r,a)}oh=Xm;var vI=`__sc-${Yt}__`;var xI=`:not(style[${Yt}])`,bI=`style[${Yt}]`;var ih=`/* Generated from src/tokens. Do not edit directly. */

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
`;var sl=document.currentScript??document.querySelector("script[data-project]"),ut={project:sl?.dataset.project??"default",seedUrl:sl?.dataset.seed,version:sl?.dataset.version||void 0,compareBase:sl?.dataset.compareBase??`${location.protocol}//${location.hostname}:3001`,embed:new URLSearchParams(location.search).get("fbw")==="embed"};var Ja=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`,mi=e=>e.comments[0]?.body??"",nh=e=>e.comments[0]?.author??"";function lh(e){let t=`fbw:${e}`,a=`fbw:overrides:${e}`,r=`fbw:v2:${e}`;if(localStorage.getItem(r)===null){try{let o=localStorage.getItem(t);if(o){let s=JSON.parse(o).map(u=>({id:u.id,createdAt:u.createdAt,anchor:u.anchor,resolved:u.status==="\uC644\uB8CC",comments:[{id:Ja(),author:u.author,body:u.content,createdAt:u.createdAt}],meta:u.meta??{userAgent:"",viewport:""}}));localStorage.setItem(r,JSON.stringify(s))}let i=localStorage.getItem(a);if(i){let n=JSON.parse(i),s={};for(let[u,d]of Object.entries(n))d?.hidden&&(s[u]={hidden:!0});Object.keys(s).length>0&&localStorage.setItem(`fbw:v2:overrides:${e}`,JSON.stringify(s))}}catch{}localStorage.removeItem(t),localStorage.removeItem(a)}}function sh(e,t){return e.filter(a=>!t[a.id]?.hidden).map(a=>{let r=t[a.id];if(!r)return{...a,origin:"seed"};let o=new Set(r.hiddenCommentIds??[]),i=a.comments.filter(n=>!o.has(n.id)).map(n=>r.editedBodies?.[n.id]?{...n,body:r.editedBodies[n.id]}:n);return{...a,origin:"seed",resolved:r.resolved??a.resolved,comments:[...i,...r.addedComments??[]]}}).filter(a=>a.comments.length>0)}function uh(e,t,a){let r=e.addedComments??[];return r.some(o=>o.id===t)?{addedComments:r.map(o=>o.id===t?{...o,body:a}:o)}:{editedBodies:{...e.editedBodies,[t]:a}}}function dh(e,t){let a=e.addedComments??[];return a.some(r=>r.id===t)?{addedComments:a.filter(r=>r.id!==t)}:{hiddenCommentIds:[...e.hiddenCommentIds??[],t]}}var ch="fbw:author",ul=class{constructor(t){this.project=t;this.threads=[];this.rawSeeds=[];this.seedThreads=[];this.overrides={};this.listeners=new Set;this._enabled=!1;lh(t);try{this.threads=JSON.parse(localStorage.getItem(this.threadsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.threads=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get threadsKey(){return`fbw:v2:${this.project}`}get overridesKey(){return`fbw:v2:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedThreads,...this.threads]}find(t){return this.list().find(a=>a.id===t)}exportList(){return[...this.seedThreads.filter(t=>this.overrides[t.id]),...this.threads]}seed(t){let a=new Set(this.threads.map(r=>r.id));this.rawSeeds=t.filter(r=>!a.has(r.id)),this.refreshSeeds(),this.notify()}refreshSeeds(){this.seedThreads=sh(this.rawSeeds,this.overrides)}addThread(t){this.threads.push(t),this.persist()}addComment(t,a,r,o){let i={id:Ja(),author:a,body:r,createdAt:new Date().toISOString(),version:o};if(this.isSeed(t)){let n=this.overrides[t]??{};this.overrideSeed(t,{addedComments:[...n.addedComments??[],i]});return}this.threads=this.threads.map(n=>n.id===t?{...n,comments:[...n.comments,i]}:n),this.persist()}updateComment(t,a,r){if(this.isSeed(t)){this.overrideSeed(t,uh(this.overrides[t]??{},a,r));return}this.threads=this.threads.map(o=>o.id===t?{...o,comments:o.comments.map(i=>i.id===a?{...i,body:r}:i)}:o),this.persist()}removeComment(t,a){if(this.isSeed(t)){this.overrideSeed(t,dh(this.overrides[t]??{},a));return}this.threads=this.threads.map(r=>r.id===t?{...r,comments:r.comments.filter(o=>o.id!==a)}:r).filter(r=>r.comments.length>0),this.persist()}setResolved(t,a){if(this.isSeed(t)){this.overrideSeed(t,{resolved:a});return}this.threads=this.threads.map(r=>r.id===t?{...r,resolved:a}:r),this.persist()}removeThread(t){if(this.isSeed(t)){this.overrideSeed(t,{hidden:!0});return}this.threads=this.threads.filter(a=>a.id!==t),this.persist()}isSeed(t){return this.rawSeeds.some(a=>a.id===t)}overrideSeed(t,a){this.overrides[t]={...this.overrides[t],...a},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.refreshSeeds(),this.notify()}get author(){return localStorage.getItem(ch)??""}set author(t){localStorage.setItem(ch,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){localStorage.setItem(this.threadsKey,JSON.stringify(this.threads)),this.notify()}notify(){this.listeners.forEach(t=>t())}};var Kr="fbw-host",tw="#2563eb",Pd="fbw:pending-jump",aw=e=>typeof globalThis.CSS?.escape=="function"?CSS.escape(e):e.replace(/[^\w-]/g,"\\$&");function rw(e){let t=[],a=e;for(;a&&a!==document.body&&a!==document.documentElement;){if(a.id)return t.unshift(`#${aw(a.id)}`),t.join(" > ");let r=a.parentElement;if(!r)break;let o=a.tagName.toLowerCase(),i=Array.from(r.children).filter(n=>n.tagName===a.tagName);t.unshift(i.length>1?`${o}:nth-of-type(${i.indexOf(a)+1})`:o),a=r}return t.unshift("body"),t.join(" > ")}function fh(e){return{page:location.pathname,selector:rw(e),textSnippet:(e.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function ka(e){try{let o=document.querySelector(e.selector);if(o)return o}catch{}let t=e.textSnippet.slice(0,20).trim();if(!t)return null;let a=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),r;for(;r=a.nextNode();){let o=r;if(o.id!==Kr&&o.childElementCount===0&&(o.textContent??"").trim().includes(t))return o}return null}function ow(e,t=2500){let a=e.style;if(!a)return;let r={outline:a.outline,offset:a.outlineOffset};a.outline=`3px solid ${tw}`,a.outlineOffset="3px",setTimeout(()=>{a.outline=r.outline,a.outlineOffset=r.offset},t)}function hi(e){if(e.page!==location.pathname)return!1;let t=ka(e);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>ow(t),350)):window.scrollTo({top:e.scrollY,behavior:"smooth"}),!0}function ph(e){sessionStorage.setItem(Pd,JSON.stringify(e)),location.assign(e.page)}function gh(){let e=sessionStorage.getItem(Pd);if(e){sessionStorage.removeItem(Pd);try{let t=JSON.parse(e);setTimeout(()=>hi(t),400)}catch{}}}var iw=e=>typeof e=="object"&&e!==null&&e.type==="fbw:jump"&&typeof e.anchor?.page=="string";function mh(){window.addEventListener("message",e=>{iw(e.data)&&hi(e.data.anchor)})}var Si=c(C(),1);var Bd=c(C(),1),Fd=c(C(),1),Od=c(C(),1),jd=c(C(),1),hl=c(C(),1),Sw=c(C(),1),Mh=c(C(),1),zh=c(C(),1),Ah=c(C(),1),bi=c(C(),1),$w=c(C(),1);var Ew=c(m(),1),Mw=c(m(),1);var Wh=c(m(),1);var Vh=c(m(),1);var Gh=c(m(),1);var a2=c(m(),1),Yh=c(m(),1);var o2=c(m(),1);var i2=c(m(),1),n2=c(m(),1),l2=c(m(),1),Kh=c(m(),1),s2=c(m(),1),Zh=c(C(),1);var ev=c(m(),1),tv=c(C(),1),av=c(m(),1);var rv=c(C(),1);var ov=c(m(),1);var iv=c(m(),1),Ud=c(C(),1);var qd=c(m(),1),lv=c(C(),1);var sv=c(m(),1),uv=c(C(),1);var dv=c(m(),1),cv=c(C(),1);var fv=c(m(),1),pv=c(C(),1);var gv=c(m(),1),mv=c(C(),1);var L2=c(m(),1),hv=c(m(),1),S2=c(C(),1),C2=c(Sa(),1),I2=c(C(),1);var k2=c(m(),1),P2=c(C(),1),vv=c(m(),1),xl=c(C(),1),T2=c(Sa(),1),R2=c(m(),1),bl=c(C(),1);var xv=c(m(),1),ro=c(C(),1);var bv=c(m(),1),ar=c(C(),1);var Ae=c(m(),1),z2=c(C(),1),Gd=c(m(),1),A2=c(C(),1),Xd=c(m(),1),D2=c(C(),1),yv=c(m(),1),Yd=c(C(),1);var wv=c(m(),1);var Lv=c(m(),1);var Sv=c(m(),1);var Cv=c(m(),1);var Iv=c(m(),1),Kd=c(C(),1),F2=c(Sa(),1);var kv=c(C(),1);var Pv=c(m(),1),Qd=c(m(),1);var Tv=c(m(),1);var $v=c(m(),1),N2=c(C(),1);var _2=c(m(),1);var fl=c(C());var cl=(...e)=>e.filter((t,a,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===a).join(" ").trim();var bh=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var yh=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,r)=>r?r.toUpperCase():a.toLowerCase());var Td=e=>{let t=yh(e);return t.charAt(0).toUpperCase()+t.slice(1)};var vi=c(C());var wh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var Lh=e=>{for(let t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};var Sh=(0,vi.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:o="",children:i,iconNode:n,...s},u)=>(0,vi.createElement)("svg",{ref:u,...wh,width:t,height:t,stroke:e,strokeWidth:r?Number(a)*24/Number(t):a,className:cl("lucide",o),...!i&&!Lh(s)&&{"aria-hidden":"true"},...s},[...n.map(([d,p])=>(0,vi.createElement)(d,p)),...Array.isArray(i)?i:[i]]));var Mt=(e,t)=>{let a=(0,fl.forwardRef)(({className:r,...o},i)=>(0,fl.createElement)(Sh,{ref:i,iconNode:t,className:cl(`lucide-${bh(Td(e))}`,`lucide-${e}`,r),...o}));return a.displayName=Td(e),a};var fw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Qr=Mt("check",fw);var pw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],er=Mt("maximize-2",pw);var gw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Zr=Mt("pencil",gw);var mw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Pa=Mt("trash-2",mw);var hw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Me=Mt("x",hw);var Ev=c(C(),1);var Mv=c(m(),1),zv=c(m(),1);var Av=c(m(),1),G2=c(C(),1);var Dv=c(m(),1);var Bv=c(C(),1);var Fv=c(m(),1);var jv=c(m(),1);var K2=c(m(),1);var Z2=c(m(),1);var yl=c(m(),1);var tL=c(m(),1);var Hv=c(m(),1);var dL=c(m(),1),ur=c(C(),1);var Uv=c(m(),1);var qv=c(m(),1);var Wv=c(m(),1),mL=c(C(),1);var Vv=c(m(),1);var Gv=c(m(),1);var hL=c(m(),1);var Xv=c(m(),1);var yL=c(m(),1);var Yv=c(m(),1);var LL=c(C(),1);var Kv=c(m(),1),SL=c(C(),1);var Jv=c(m(),1),CL=c(C(),1),ex=c(m(),1),IL=c(m(),1),tx=c(m(),1),ax=c(C(),1);var Zd=c(m(),1),rx=c(m(),1);var ox=c(m(),1);var Dd=c(m(),1),nr=c(C(),1);var ke=c(m(),1),FL=c(C(),1),OL=c(Sa(),1);var nx=c(m(),1);var Jd=c(C(),1),ec=c(m(),1),tc=c(C(),1);var lx=c(m(),1),oo=c(C(),1),jL=c(Sa(),1);var sx=c(m(),1),NL=c(m(),1),ux=c(C(),1),ac=c(m(),1),dx=c(C(),1);var cx=c(m(),1);var fx=c(m(),1),UL=c(C(),1),rc=c(m(),1),px=c(C(),1),qL=c(Sa(),1),WL=c(m(),1),Qe=c(C(),1),wl=c(m(),1);var oc=c(C(),1),hx=c(m(),1);var vx=c(C(),1);var xx=c(m(),1),bx=c(C(),1);var yx=c(m(),1);var wx=c(m(),1);var Lx=c(m(),1);var Sx=c(m(),1);var St=c(m(),1),kx=c(C(),1);var to=c(m(),1);var fS=c(m(),1),Sl=c(C(),1);var ic=c(m(),1),pS=c(m(),1),dr=c(C(),1);var Px=c(m(),1),Cl=c(C(),1);var Tx=c(m(),1),Rx=c(C(),1);var Il=c(m(),1);var hS=c(m(),1);var $x=c(m(),1);var Ex=c(m(),1);var Mx=c(m(),1),vS=c(C(),1);var zx=c(m(),1),Ax=c(C(),1);var Dx=c(m(),1),Bx=c(m(),1);var rr=c(m(),1),Ox=c(m(),1);var jx=c(m(),1);var Nx=c(m(),1),kS=c(C(),1);var _x=c(m(),1);var PS=c(m(),1),kl=c(C(),1);var Hx=c(m(),1);var TS=c(m(),1),Ux=c(C(),1);var or=c(m(),1);var qx=c(m(),1),Wx=c(C(),1);var Vx=c(m(),1);var Gx=c(m(),1);var AS=c(m(),1);var Xx=c(m(),1),DS=c(C(),1),BS=c(m(),1),Yx=c(C(),1),FS=c(m(),1),Kx=c(m(),1);var NS=c(m(),1);var _S=c(C(),1);var nc=c(m(),1);var lc=c(m(),1),sc=c(C(),1),Jx=c(C(),1),uc=c(m(),1),dc=c(m(),1);var e0=c(m(),1),cc=c(C(),1);var qS=c(m(),1),t0=c(m(),1),a0=c(m(),1);var r0=c(m(),1);var fc=c(m(),1),WS=c(m(),1),VS=c(m(),1);var o0=c(m(),1),i0=c(C(),1),n0=c(m(),1),GS=c(C(),1);var pc=c(m(),1),gc=c(C(),1);var mc=c(m(),1),l0=c(m(),1),hc=c(m(),1),s0=c(m(),1),u0=c(m(),1);var d0=c(m(),1);var vc=c(m(),1);var xc=c(m(),1);var c0=c(m(),1),bc=c(m(),1),f0=c(m(),1),XS=c(C(),1),g0=c(m(),1),m0=c(m(),1),YS=c(C(),1);var h0=c(m(),1),v0=c(m(),1);var KS=c(m(),1);var Eh={};var Nd={slate950:"#0f1115",slate925:"#10151d",slate900:"#111821",slate880:"rgba(12, 15, 20, 0.88)",slate860:"rgba(12, 15, 20, 0.8)",slate840:"rgba(13, 18, 27, 0.92)",white04:"rgba(255, 255, 255, 0.04)",white06:"rgba(255, 255, 255, 0.06)",white07:"rgba(255, 255, 255, 0.07)",white08:"rgba(255, 255, 255, 0.08)",white10:"rgba(255, 255, 255, 0.1)",white12:"rgba(255, 255, 255, 0.12)",white18:"rgba(255, 255, 255, 0.18)",white24:"rgba(255, 255, 255, 0.24)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#4d88ff",blue600:"#2962d9",blue300:"#8cb6ff",blueTint12:"rgba(77, 136, 255, 0.12)",blueTint14:"rgba(77, 136, 255, 0.14)",blueTint16:"rgba(77, 136, 255, 0.16)",blueTint18:"rgba(77, 136, 255, 0.18)",blueTint28:"rgba(77, 136, 255, 0.28)",blueTint38:"rgba(91, 144, 255, 0.38)",blueTint42:"rgba(77, 136, 255, 0.42)",green500:"#35c6a7",greenTint12:"rgba(43, 181, 114, 0.12)",greenTint18:"rgba(43, 181, 114, 0.18)",amber500:"#ffd179",amberTint18:"rgba(251, 146, 60, 0.18)",amberTint20:"rgba(255, 196, 61, 0.2)",red300:"#ff9a9a",redTint12:"rgba(239, 68, 68, 0.12)",redTint18:"rgba(239, 68, 68, 0.18)",cyanTint18:"rgba(56, 189, 248, 0.18)",violet300:"#c084fc",borderStrong:"rgba(148, 163, 184, 0.18)",overlayBackdrop:"rgba(4, 8, 14, 0.72)",radialA:"rgba(66, 139, 202, 0.18)",radialB:"rgba(0, 158, 115, 0.12)",textPrimary:"#edf2f7",textSecondary:"#d7deea",textMuted:"#98a2b3",textSoft:"#7e8fa3",textSuccess:"#9ef0c1",textWarning:"#ffe08a",textDanger:"#fca5a5",textInfo:"#cfe0ff",textSuccessSoft:"#b7f6d1",textWarningSoft:"#ffd6a5",textDangerSoft:"#fecaca",textCyan:"#8fe6ff",textBlue:"#a9c6ff",textSlate:"#cbd5e1",textSlateSoft:"#d5dee9",textOrange:"#fdba74",tagClassificationBg:"rgba(110, 200, 122, 0.15)",tagClassificationText:"#6ec87a",tagSegmentationBg:"rgba(180, 120, 230, 0.15)",tagSegmentationText:"#c07be8",tagObjectDetectionBg:"rgba(77, 136, 255, 0.15)",syncChipSyncedBg:"rgba(34, 197, 94, 0.92)",syncChipUploadingBg:"rgba(234, 179, 8, 0.92)",syncChipFailedBg:"rgba(220, 38, 38, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(12, 16, 24, 0.92)",imageGroupCircleBorder:"rgba(255, 255, 255, 0.14)",dangerDimBg:"rgba(120, 28, 28, 0.18)",dangerDimBorder:"rgba(224, 92, 92, 0.45)"},_d={slate950:"#ffffff",slate925:"#f7f9fb",slate900:"#eef2f7",slate880:"rgba(255, 255, 255, 0.92)",slate860:"rgba(255, 255, 255, 0.85)",slate840:"rgba(247, 249, 251, 0.92)",white04:"rgba(15, 18, 25, 0.04)",white06:"rgba(15, 18, 25, 0.05)",white07:"rgba(15, 18, 25, 0.06)",white08:"rgba(15, 18, 25, 0.08)",white10:"rgba(15, 18, 25, 0.09)",white12:"rgba(15, 18, 25, 0.10)",white18:"rgba(15, 18, 25, 0.14)",white24:"rgba(15, 18, 25, 0.18)",shadowSoft:"rgba(0, 0, 0, 0.28)",shadowMedium:"rgba(0, 0, 0, 0.35)",shadowStrong:"rgba(0, 0, 0, 0.4)",blue500:"#214bb8",blue600:"#143fa6",blue300:"#214bb8",blueTint12:"rgba(58, 115, 230, 0.12)",blueTint14:"rgba(58, 115, 230, 0.14)",blueTint16:"rgba(58, 115, 230, 0.16)",blueTint18:"rgba(58, 115, 230, 0.18)",blueTint28:"rgba(58, 115, 230, 0.28)",blueTint38:"rgba(58, 115, 230, 0.38)",blueTint42:"rgba(58, 115, 230, 0.42)",green500:"#1a8f6f",greenTint12:"rgba(26, 143, 111, 0.12)",greenTint18:"rgba(26, 143, 111, 0.18)",amber500:"#b8761a",amberTint18:"rgba(184, 118, 26, 0.18)",amberTint20:"rgba(184, 118, 26, 0.2)",red300:"#cc2929",redTint12:"rgba(204, 41, 41, 0.12)",redTint18:"rgba(204, 41, 41, 0.18)",cyanTint18:"rgba(14, 116, 144, 0.18)",violet300:"#7c3aed",borderStrong:"rgba(15, 23, 42, 0.14)",overlayBackdrop:"rgba(15, 23, 42, 0.32)",radialA:"rgba(58, 115, 230, 0.10)",radialB:"rgba(26, 143, 111, 0.07)",textPrimary:"#0f1219",textSecondary:"#384155",textMuted:"#475467",textSoft:"#5e6776",textSuccess:"#0e5a44",textWarning:"#7a4f10",textDanger:"#8a1818",textInfo:"#1f4fb8",textSuccessSoft:"#0e5a44",textWarningSoft:"#7a4f10",textDangerSoft:"#8a1818",textCyan:"#0e5b6c",textBlue:"#1f4fb8",textSlate:"#374151",textSlateSoft:"#384155",textOrange:"#7d4310",tagClassificationBg:"rgba(34, 139, 50, 0.12)",tagClassificationText:"#2f7a3a",tagSegmentationBg:"rgba(120, 60, 175, 0.12)",tagSegmentationText:"#7c3aed",tagObjectDetectionBg:"rgba(33, 75, 184, 0.12)",syncChipSyncedBg:"rgba(22, 163, 74, 0.92)",syncChipUploadingBg:"rgba(202, 138, 4, 0.92)",syncChipFailedBg:"rgba(185, 28, 28, 0.92)",syncChipLocalBg:"rgba(75, 85, 99, 0.92)",syncChipOnText:"#ffffff",imageGroupCircleBg:"rgba(15, 23, 42, 0.85)",imageGroupCircleBorder:"var(--ig-color-white-18)",dangerDimBg:"rgba(185, 28, 28, 0.10)",dangerDimBorder:"rgba(185, 28, 28, 0.40)"},he={svgFillFaint:.07,svgFillSubtle:.13,svgFillSoft:.15,svgFillMedium:.22,dim:.3,dimSoft:.38,ghost:.35,faded:.4,disabled:.5,overlay:.55,muted:.6,subtle:.7,emphatic:.8,loud:.85,loudPlus:.86,prominent:.88,near:.9},Jr={blur2xs:"blur(1px)",blurXs:"blur(8px)",blurSm:"blur(10px)",blurMd:"blur(12px)",blurLg:"blur(14px)",blurXl:"blur(16px)"},zt={sub:"8px","2xs":"11px",xs:"12px",xsPlus:"13px",sm:"14px",smPlus:"15px",md:"16px",lg:"18px",xl:"20px","2xl":"22px","3xl":"24px"},Lt={"2xs":11,xs:12,xsPlus:13,sm:14,smPlus:15,md:16,lg:18,xl:20,"2xl":22,"3xl":24},Cw={thin:1.3,mid:1.8,regular:2,midBold:2.4,bold:2.5},j={"3xs":"80px","3xsPlus":"96px","3xsWide":"104px","2xsNarrowTight":"116px","2xsNarrow":"120px","2xsTight":"124px","2xs":"140px","2xsPlus":"160px",xsNarrow:"190px",listMin:"200px",xsTight:"210px",xs:"220px",xsPlus:"240px",smNarrow:"260px",sm:"280px",mdNarrow:"300px",md:"320px",lg:"360px",filterPanel:"380px",xl:"480px","2xlNarrow":"420px",lgPlus:"440px","2xl":"560px","3xl":"920px","2xlWide":"520px","3xlNarrow":"640px","3xlMid":"720px","3xlWide":"820px","4xlNarrow":"960px","4xlMid":"1120px","4xl":"1200px"},xi={"3xs":80,"3xsPlus":96,"3xsWide":104,"2xsNarrowTight":116,"2xsNarrow":120,"2xsTight":124,"2xs":140,"2xsPlus":160,xsNarrow:190,listMin:200,xsTight:210,xs:220,xsPlus:240,smNarrow:260,sm:280,mdNarrow:300,md:320,lg:360,filterPanel:380,xl:480,"2xlNarrow":420,lgPlus:440,"2xl":560,"2xlWide":520,"3xlNarrow":640,"3xlMid":720,"3xlWide":820,"3xl":920,"4xlNarrow":960,"4xlMid":1120,"4xl":1200},ee={pageMaxWidth:"1280px",topbarHeight:"80px",sidebarHeader:"72px",sidebarCollapse:"100px",panelMinHeight:"300px",loadingPanelHeight:"180px",shadowYOffset:"40px",shadowBlur:"80px",formLabelCol:"140px",formLabelColWide:"160px",captureBar:"100px",captureGrid:"100px",histogramWidth:"224px",histogramHeight:"84px",datasetCardMinHeight:"112px",datasetCardRecentMinHeight:"108px",logTimeMin:"45px",logDetailLeft:"254px",logDetailTop:"58px",logDetailWidth:"272px",colorPlaneHeight:"120px",colorThumbSize:"18px"},te={0:"0px","1px":"1px","2px":"2px","3px":"3px","-1px":"-1px","-2px":"-2px",hoverLiftY:"-1px",1:"4px","1Plus":"5px",2:"6px","2Plus":"7px",3:"8px",4:"10px",5:"12px",6:"14px",7:"16px",8:"18px",9:"20px",10:"22px",11:"24px",12:"28px",13:"32px"},pl={"1px":"1px","1_5px":"1.5px","2px":"2px","3px":"3px"},At={"2xs":"6px",xxs:"8px",xs:"10px",sm:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"20px","4xl":"24px",pill:"999px"},D={fontSans:'"IBM Plex Sans", "Segoe UI", sans-serif',fontMono:'"IBM Plex Mono", "SFMono-Regular", Consolas, monospace',size3xs:"10px",size2xs:"11px",sizeXs:"12px",sizeSm:"13px",sizeMd:"14px",sizeLg:"15px",sizeXl:"16px",size2xl:"18px",size3xl:"20px",size3xlPlus:"22px",size4xl:"24px",size5xl:"28px",weightRegular:400,weightMedium:500,weightSemibold:600,weightBold:700,weightBlack:800,letterSpacingHeading:"-0.02em",letterSpacingMicro:"0.01em",letterSpacingTight:"0.03em",letterSpacingNormal:"0.04em",letterSpacingWide:"0.05em",letterSpacingWider:"0.06em",letterSpacingWidest:"0.08em",lineHeightNone:1,lineHeightTight:1.35,lineHeightSnug:1.4,lineHeightBase:1.45,lineHeightRelaxed:1.5,lineHeightRelaxedPlus:1.55,lineHeightLoose:1.6,textClampNarrow:"5.5em",textClampMid:"8em",svgTspanDyPrimary:"-0.2em",svgTspanDySecondary:"1.2em"},Dh={panel:"0 20px 60px rgba(0, 0, 0, 0.25)",floating:"0 30px 80px var(--ig-color-overlay-dim)",popover:"0 24px 60px var(--ig-color-blue-tint-34), inset 0 1px 0 rgba(255, 255, 255, 0.05)",menu:"0 20px 40px rgba(0, 0, 0, 0.35)",hoverLift:"0 12px 24px var(--ig-color-blue-strong-tint-24)",focusRing:"0 0 0 3px var(--ig-color-blue-tint-16)",drawerLift:"0 16px 48px rgba(4, 8, 14, 0.72)",dangerHoverLift:"0 10px 28px rgba(127, 29, 29, 0.32)",controlElevated:"inset 0 1px 0 rgba(255, 255, 255, 0.05), 0 10px 24px rgba(0, 0, 0, 0.12)",toast:"0 6px 20px var(--ig-color-overlay-dim)"},Bh={panel:"0 16px 40px rgba(15, 23, 42, 0.08)",floating:"0 24px 60px rgba(15, 23, 42, 0.14)",popover:"0 20px 48px rgba(15, 23, 42, 0.12)",menu:"0 16px 32px rgba(15, 23, 42, 0.10)",hoverLift:"0 12px 24px rgba(58, 115, 230, 0.16)",focusRing:"0 0 0 3px rgba(58, 115, 230, 0.20)",drawerLift:"0 16px 48px rgba(15, 23, 42, 0.32)",dangerHoverLift:"0 10px 28px rgba(185, 28, 28, 0.20)",controlElevated:"0 10px 24px rgba(15, 23, 42, 0.08)",toast:"0 6px 20px rgba(15, 23, 42, 0.12)"},Ed={zero:"0deg",half:"180deg",full:"360deg"},vl={horizontal:"90deg",diagonal:"135deg"},ze={fastest:"0.12s",swift:"0.15s",fast:"0.16s ease",fastEase:"0.16s ease",normal:"0.24s ease",normalEase:"0.2s ease",mobileNav:"0.28s cubic-bezier(0.4, 0, 0.2, 1)",spinner:"0.7s",spinnerFast:"0.75s",spinnerSlow:"0.8s",shimmer:"1s",progressBar:"1.2s",skeleton:"1.3s",syncSpin:"1.5s"},tr={sm:640,smPlus:720,md:768,mdWide:860,lg:1024,xl:1280},De={sm:`@media (max-width: ${tr.sm}px)`,smPlus:`@media (max-width: ${tr.smPlus}px)`,md:`@media (max-width: ${tr.md}px)`,mdWide:`@media (max-width: ${tr.mdWide}px)`,lg:`@media (max-width: ${tr.lg}px)`,xl:`@media (max-width: ${tr.xl}px)`},H={hidden:0,base:1,raised:2,raisedPlus:3,captureHigh:4,capture:5,captureSuper:6,captureTop:7,sticky:10,stickyPlus:20,stickyTop:30,header:20,overlay:24,overlayLow:50,dotMenu:200,dotMenuPlus:201,dropdown:100,mobileNavBackdrop:110,mobileNav:120,mobileMenu:200,popover:500,contextMenu:1e3,drawer:1100,modal:1200,topbar:9998,toast:9e3,tooltip:9999},Ke={xs:"28px",xsPlus:"30px",sm:"32px",smPlus:"34px",md:"36px",midPlus:"40px",midPlusTall:"60px","2xlWide":"56px",lg:"44px",xl:"48px","2xl":"52px","3xl":"60px","3xlPlus":"64px"},Iw={xs:28,xsPlus:30,sm:32,smPlus:34,md:36,midPlus:40,midPlusTall:60,"2xlWide":56,lg:44,xl:48,"2xl":52,"3xl":60,"3xlPlus":64},kw={blue:"#60a5fa",purple:"#a78bfa",green:"#34d399",cyan:"#22d3ee",neutral:"#94a3b8",gold:"#facc15",violet:"#6c5ce7",teal:"#00b894",amber:"#fdcb6e",tickColor:"#9ca3af",tagClassification:"#6ec87a",tagSegmentation:"#c07be8",coral:"#e17055",lightBlue:"#74b9ff",lightViolet:"#a29bfe",mint:"#55efc4",canvasExportBg:"#181818",white:"#ffffff"};var Rd={press:.95,drag:.985,hoverLift:1.04},Pw={landscape:"4 / 3"},Tw={running:{background:"var(--ig-color-status-running-bg)",color:"var(--ig-color-status-running-text)"},completed:{background:"var(--ig-color-status-completed-bg)",color:"var(--ig-color-status-completed-text)"},queued:{background:"var(--ig-color-status-queued-bg)",color:"var(--ig-color-status-queued-text)"},draft:{background:"var(--ig-color-status-draft-bg)",color:"var(--ig-color-status-draft-text)"},failed:{background:"var(--ig-color-status-failed-bg)",color:"var(--ig-color-status-failed-text)"},stopped:{background:"var(--ig-color-status-stopped-bg)",color:"var(--ig-color-status-stopped-text)"},interrupted:{background:"var(--ig-color-status-interrupted-bg)",color:"var(--ig-color-status-interrupted-text)"},warning:{background:"var(--ig-color-status-warning-bg)",color:"var(--ig-color-status-warning-text)"},idle:{background:"var(--ig-color-status-idle-bg)",color:"var(--ig-color-status-idle-text)"}},eo={info:{background:"var(--ig-color-alert-info-bg)",border:"var(--ig-color-alert-info-border)",color:"var(--ig-color-alert-info-text)"},success:{background:"var(--ig-color-alert-success-bg)",border:"var(--ig-color-alert-success-border)",color:"var(--ig-color-alert-success-text)"},warning:{background:"var(--ig-color-alert-warning-bg)",border:"var(--ig-color-alert-warning-border)",color:"var(--ig-color-alert-warning-text)"},danger:{background:"var(--ig-color-alert-danger-bg)",border:"var(--ig-color-alert-danger-border)",color:"var(--ig-color-alert-danger-text)"}};function Fh(e,t,a){return{name:e,colors:{bgCanvas:t.slate950,bgCanvasAlt:t.slate925,bgRadialA:t.radialA,bgRadialB:t.radialB,surfaceHeader:t.slate880,surfacePanel:t.slate860,surfaceRaised:t.slate925,surfaceMuted:t.slate840,surfaceInteractive:t.white04,surfaceActive:t.blueTint16,borderSubtle:t.white08,borderStrong:t.borderStrong,textPrimary:t.textPrimary,textSecondary:t.textSecondary,textMuted:t.textMuted,textSoft:t.textSoft,accent:t.blue500,accentStrong:t.blue600,accentSoft:t.blue300,success:t.green500,warning:t.amber500,danger:t.red300},radius:{sm:At.xs,md:At.md,lg:At["2xl"],xl:At["4xl"],pill:At.pill},shadows:{panel:a.panel,floating:a.floating},breakpoints:tr,motion:ze,typography:{fontSans:D.fontSans,fontMono:D.fontMono}}}var Ta=Fh("portalDark",Nd,Dh),Rw=Fh("portalLight",_d,Bh);var l3=(0,bi.createContext)(null);var Kt=L`
  background: var(--ig-color-surface-panel);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,ve=L`
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-floating);
`,Hd=L`
  background: linear-gradient(180deg, var(--ig-color-surface-card-a) 0%, var(--ig-color-surface-card-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-panel);
`,u3=L`
  ${Kt}
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
`,yi=L`
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    background: var(--ig-color-surface-muted);
    color: var(--ig-color-text-soft);
  }
`,zw=L`
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

  ${yi}
`,Oh=L`
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

  ${yi}
`,Aw=L`
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

  ${yi}
`,Dw=L`
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

  ${yi}
`,Bw=L`
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

  ${yi}
`,jh=L`
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
`,Fw=L`
  ${jh}
  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive-hover);
    color: var(--ig-color-text-primary);
  }
`,Ow=L`
  ${jh}
  &:hover:not(:disabled) {
    background: var(--ig-color-alert-danger-bg);
    color: var(--ig-color-danger);
  }
`,Nh=L`
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
    ${Oh}
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
`,_h=L`
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
`,jw=L`
  display: flex;
  flex-direction: column;
  min-height: 0;
  background:
    radial-gradient(circle at top left, var(--ig-color-bg-radial-a), transparent 32%),
    radial-gradient(circle at top right, var(--ig-color-bg-radial-b), transparent 28%),
    var(--ig-color-bg-canvas);
  color: var(--ig-color-text-primary);
`,Hh=L`
  background: var(--ig-color-surface-header);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  backdrop-filter: var(--ig-blur-lg);
`,Nw=L`
  ${Hh}
  padding: var(--ig-space-10) var(--ig-space-11) var(--ig-space-8);
`,_w=L`
  flex: 1;
  min-height: 0;
  padding: var(--ig-space-8) var(--ig-space-11) var(--ig-space-11);
  overflow: hidden;
`,Uh=L`
  color: var(--ig-color-state-title);
  font-size: var(--ig-font-size-state-title);
  font-weight: var(--ig-font-weight-state-title);
`,Hw=L`
  color: var(--ig-color-state-description);
  font-size: var(--ig-font-size-state-description);
  line-height: var(--ig-line-height-state-description);
`,qh=L`
  flex: 1;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Uw={"--portal-bg-base":"var(--ig-color-bg-canvas)","--portal-bg-radial-a":"var(--ig-color-bg-radial-a)","--portal-bg-radial-b":"var(--ig-color-bg-radial-b)","--portal-surface-header":"var(--ig-color-surface-header)","--portal-surface-panel":"var(--ig-color-surface-panel)","--portal-surface-elevated":"var(--ig-color-surface-raised)","--portal-surface-muted":"var(--ig-color-surface-muted)","--portal-surface-interactive":"var(--ig-color-surface-interactive)","--portal-surface-active":"var(--ig-color-surface-active)","--portal-border":"var(--ig-color-border-subtle)","--portal-border-strong":"var(--ig-color-border-strong)","--portal-text-primary":"var(--ig-color-text-primary)","--portal-text-secondary":"var(--ig-color-text-secondary)","--portal-text-muted":"var(--ig-color-text-muted)","--portal-text-soft":"var(--ig-color-text-soft)","--portal-accent":"var(--ig-color-accent)","--portal-accent-strong":"var(--ig-color-accent-strong)","--portal-accent-soft":"var(--ig-color-accent-soft)","--portal-success":"var(--ig-color-success)","--portal-warning":"var(--ig-color-warning)","--portal-danger":"var(--ig-color-danger)","--portal-shadow":"var(--ig-shadow-panel)","--portal-scrollbar-thumb":"var(--ig-scrollbar-thumb)","--portal-scrollbar-thumb-hover":"var(--ig-scrollbar-thumb-hover)","--portal-scrollbar-thumb-active":"var(--ig-scrollbar-thumb-active)"};function qw(e,t,a,r){return{"--ig-color-bg-canvas":e.colors.bgCanvas,"--ig-color-bg-radial-a":e.colors.bgRadialA,"--ig-color-bg-radial-b":e.colors.bgRadialB,"--ig-color-surface-header":e.colors.surfaceHeader,"--ig-color-surface-panel":e.colors.surfacePanel,"--ig-color-surface-raised":e.colors.surfaceRaised,"--ig-color-surface-muted":e.colors.surfaceMuted,"--ig-color-surface-interactive":e.colors.surfaceInteractive,"--ig-color-surface-active":e.colors.surfaceActive,"--ig-color-border-subtle":e.colors.borderSubtle,"--ig-color-border-strong":e.colors.borderStrong,"--ig-color-text-primary":e.colors.textPrimary,"--ig-color-text-secondary":e.colors.textSecondary,"--ig-color-text-muted":e.colors.textMuted,"--ig-color-text-soft":e.colors.textSoft,"--ig-color-state-title":e.colors.textPrimary,"--ig-color-state-description":e.colors.textMuted,"--ig-color-accent":e.colors.accent,"--ig-color-accent-strong":e.colors.accentStrong,"--ig-color-accent-soft":e.colors.accentSoft,"--ig-color-success":e.colors.success,"--ig-color-warning":e.colors.warning,"--ig-color-danger":e.colors.danger,"--ig-color-surface-card-a":r?"rgba(255, 255, 255, 0.96)":"rgba(18, 21, 28, 0.96)","--ig-color-surface-card-b":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-surface-interactive-hover":t.white07,"--ig-color-surface-focus":r?"rgba(255, 255, 255, 0.98)":"rgba(16, 22, 32, 0.98)","--ig-color-accent-ring":r?"rgba(58, 115, 230, 0.55)":"rgba(91, 144, 255, 0.7)","--ig-color-accent-border-strong":t.blueTint38,"--ig-color-accent-soft-surface":t.blueTint12,"--ig-color-accent-soft-surface-hover":t.blueTint18,"--ig-color-on-accent":"#ffffff","--ig-shadow-panel":a.panel,"--ig-shadow-floating":a.floating,"--ig-shadow-popover":a.popover,"--ig-shadow-menu":a.menu,"--ig-shadow-hover-lift":a.hoverLift,"--ig-shadow-focus-ring":a.focusRing,"--ig-shadow-drawer-lift":a.drawerLift,"--ig-shadow-danger-hover-lift":a.dangerHoverLift,"--ig-shadow-control-elevated":a.controlElevated,"--ig-shadow-toast":a.toast,"--ig-scrollbar-thumb":r?"rgba(15, 23, 42, 0.18)":"rgba(148, 163, 184, 0.22)","--ig-scrollbar-thumb-hover":r?"rgba(15, 23, 42, 0.28)":"rgba(148, 163, 184, 0.34)","--ig-scrollbar-thumb-active":r?"rgba(15, 23, 42, 0.36)":"rgba(148, 163, 184, 0.42)","--ig-color-status-running-bg":t.greenTint18,"--ig-color-status-running-text":t.textSuccess,"--ig-color-status-completed-bg":t.cyanTint18,"--ig-color-status-completed-text":t.textCyan,"--ig-color-status-queued-bg":t.blueTint18,"--ig-color-status-queued-text":t.textBlue,"--ig-color-status-draft-bg":t.amberTint20,"--ig-color-status-draft-text":t.textWarning,"--ig-color-status-failed-bg":t.redTint18,"--ig-color-status-failed-text":t.textDanger,"--ig-color-status-stopped-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(148, 163, 184, 0.16)","--ig-color-status-stopped-text":t.textSlateSoft,"--ig-color-status-interrupted-bg":t.amberTint18,"--ig-color-status-interrupted-text":t.textOrange,"--ig-color-status-warning-bg":t.amberTint18,"--ig-color-status-warning-text":t.textOrange,"--ig-color-status-idle-bg":r?"rgba(15, 23, 42, 0.10)":"rgba(67, 76, 94, 0.22)","--ig-color-status-idle-text":t.textSlate,"--ig-color-alert-info-bg":t.blueTint12,"--ig-color-alert-info-border":r?"rgba(58, 115, 230, 0.32)":"rgba(77, 136, 255, 0.26)","--ig-color-alert-info-text":t.textInfo,"--ig-color-alert-success-bg":t.greenTint12,"--ig-color-alert-success-border":r?"rgba(26, 143, 111, 0.32)":"rgba(43, 181, 114, 0.26)","--ig-color-alert-success-text":t.textSuccessSoft,"--ig-color-alert-warning-bg":r?"rgba(184, 118, 26, 0.12)":"rgba(251, 146, 60, 0.12)","--ig-color-alert-warning-border":r?"rgba(184, 118, 26, 0.32)":"rgba(251, 146, 60, 0.26)","--ig-color-alert-warning-text":t.textWarningSoft,"--ig-color-alert-danger-bg":t.redTint12,"--ig-color-alert-danger-border":r?"rgba(204, 41, 41, 0.32)":"rgba(239, 68, 68, 0.26)","--ig-color-alert-danger-text":t.textDangerSoft,"--ig-color-chart-1":t.blue500,"--ig-color-chart-2":t.green500,"--ig-color-chart-3":t.amber500,"--ig-color-chart-4":t.red300,"--ig-color-chart-5":t.blue300,"--ig-color-chart-6":t.violet300,"--ig-color-chart-grid":r?"rgba(15, 23, 42, 0.08)":"var(--ig-color-white-08)","--ig-color-chart-separator":r?"rgba(255, 255, 255, 0.82)":"rgba(10, 14, 20, 0.62)","--ig-color-badge-neutral":t.white08,"--ig-color-badge-accent":t.blueTint18,"--ig-color-badge-success":t.greenTint18,"--ig-color-badge-warning":t.amberTint18,"--ig-color-badge-danger":t.redTint18,"--ig-color-tag-classification-bg":t.tagClassificationBg,"--ig-color-tag-classification-text":t.tagClassificationText,"--ig-color-tag-segmentation-bg":t.tagSegmentationBg,"--ig-color-tag-segmentation-text":t.tagSegmentationText,"--ig-color-tag-object-detection-bg":t.tagObjectDetectionBg,"--ig-color-sync-chip-synced-bg":t.syncChipSyncedBg,"--ig-color-sync-chip-uploading-bg":t.syncChipUploadingBg,"--ig-color-sync-chip-failed-bg":t.syncChipFailedBg,"--ig-color-sync-chip-local-bg":t.syncChipLocalBg,"--ig-color-sync-chip-on-text":t.syncChipOnText,"--ig-color-image-option-bg":r?"rgba(0, 0, 0, 0.5)":"rgba(0, 0, 0, 0.6)","--ig-color-image-option-bg-hover":r?"rgba(0, 0, 0, 0.7)":"rgba(0, 0, 0, 0.8)","--ig-color-image-group-circle-bg":t.imageGroupCircleBg,"--ig-color-image-group-circle-border":t.imageGroupCircleBorder,"--ig-color-danger-dim-bg":t.dangerDimBg,"--ig-color-danger-dim-border":t.dangerDimBorder,"--ig-color-progress-track":t.white08,"--ig-color-skeleton-start":t.white06,"--ig-color-skeleton-mid":t.white12,"--ig-color-image-card-hover-border":t.blueTint28,"--ig-color-media-placeholder-a":t.blueTint14,"--ig-color-media-placeholder-b":t.greenTint12,"--ig-color-avatar-bg":t.blueTint18,"--ig-color-selection-bg":t.blueTint14,"--ig-color-focus-bg-soft":t.blueTint16,"--ig-color-active-bg":t.blueTint28,"--ig-color-danger-bg-soft":r?"rgba(220, 38, 38, 0.10)":"rgba(239, 68, 68, 0.08)","--ig-color-danger-bg":r?"rgba(220, 38, 38, 0.14)":"rgba(239, 68, 68, 0.12)","--ig-color-danger-bg-hover":r?"rgba(220, 38, 38, 0.20)":"rgba(239, 68, 68, 0.18)","--ig-color-danger-bg-strong":r?"rgba(220, 38, 38, 0.6)":"rgba(239, 68, 68, 0.6)","--ig-color-danger-overlay":r?"rgba(220, 38, 38, 0.92)":"rgba(239, 68, 68, 0.92)","--ig-color-danger-overlay-hover":r?"rgba(185, 28, 28, 0.96)":"rgba(220, 38, 38, 0.96)","--ig-color-danger-button-bg":r?"rgba(220, 38, 60, 0.20)":"rgba(255, 95, 122, 0.18)","--ig-color-danger-button-border":r?"rgba(220, 38, 60, 0.30)":"rgba(255, 95, 122, 0.28)","--ig-color-success-bg-soft":r?"rgba(22, 163, 74, 0.10)":"rgba(43, 181, 114, 0.08)","--ig-color-success-bg":r?"rgba(22, 163, 74, 0.18)":"rgba(60, 210, 120, 0.15)","--ig-color-warning-bg":r?"rgba(217, 119, 6, 0.18)":"rgba(255, 180, 60, 0.15)","--ig-color-dropdown-open-shadow":r?"0 0 0 3px rgba(58, 115, 230, 0.20), 0 18px 36px rgba(15, 23, 42, 0.10)":"0 0 0 3px var(--ig-color-blue-tint-16), 0 18px 36px rgba(0, 0, 0, 0.18)","--ig-color-dropdown-menu-a":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-dropdown-menu-b":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-dropdown-option-hover":t.white06,"--ig-color-toggle-on-bg":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.4)","--ig-color-toggle-on-border":r?"rgba(58, 115, 230, 0.65)":"rgba(77, 136, 255, 0.55)","--ig-color-toggle-off-bg":t.white12,"--ig-color-toggle-off-border":t.borderStrong,"--ig-color-tab-surface":t.white04,"--ig-color-tab-highlight":t.blueTint18,"--ig-color-toolbar-surface":r?"rgba(247, 249, 251, 0.84)":"rgba(8, 12, 18, 0.84)","--ig-color-modal-backdrop":t.overlayBackdrop,"--ig-color-overlay-dim":"rgba(0, 0, 0, 0.45)","--ig-color-overlay-mid":"rgba(0, 0, 0, 0.5)","--ig-color-overlay-strong":"rgba(0, 0, 0, 0.55)","--ig-color-lightbox-backdrop":"rgba(0, 0, 0, 0.85)","--ig-color-lightbox-surface":r?"rgba(255, 255, 255, 0.7)":"rgba(7, 10, 20, 0.7)","--ig-color-sidebar-bg-top":r?"rgba(247, 249, 251, 0.96)":"rgba(12, 15, 20, 0.96)","--ig-color-sidebar-bg-bottom":r?"rgba(241, 245, 249, 0.94)":"rgba(10, 14, 20, 0.94)","--ig-color-surface-dropdown-mobile-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-mobile-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(10, 14, 20, 0.98)","--ig-color-surface-calendar-top":r?"rgba(255, 255, 255, 0.96)":"rgba(17, 23, 32, 0.96)","--ig-color-surface-calendar-bottom":r?"rgba(247, 249, 251, 0.96)":"rgba(10, 14, 20, 0.96)","--ig-color-danger-soft-surface":r?"rgba(220, 38, 38, 0.12)":"rgba(164, 44, 44, 0.22)","--ig-color-danger-button-gradient-mid":r?"#a23030":"#7f1d1d","--ig-color-danger-button-gradient-end":r?"#b13838":"#8f2f2f","--ig-color-danger-button-text":r?"#ffffff":"#fff4f4","--ig-color-danger-button-text-strong":r?"#ffffff":"#ffe1e1","--ig-color-svg-stroke-on-overlay":"#ffffff","--ig-color-pie-slice-label":r?"#0f1219":"#eef4ff","--ig-color-annotation-outline-dark":"var(--ig-color-image-option-bg)","--ig-color-annotation-outline-light":"rgba(255, 255, 255, 0.9)","--ig-color-white-04":t.white04,"--ig-color-white-06":t.white06,"--ig-color-white-07":t.white07,"--ig-color-white-08":t.white08,"--ig-color-white-10":t.white10,"--ig-color-white-12":t.white12,"--ig-color-white-18":t.white18,"--ig-color-white-20":r?"rgba(15, 18, 25, 0.16)":"rgba(255, 255, 255, 0.2)","--ig-color-white-24":t.white24,"--ig-color-shadow-soft":t.shadowSoft,"--ig-color-shadow-medium":t.shadowMedium,"--ig-color-shadow-strong":t.shadowStrong,"--ig-color-white-30":r?"rgba(15, 18, 25, 0.22)":"rgba(255, 255, 255, 0.3)","--ig-color-white-40":r?"rgba(15, 18, 25, 0.32)":"rgba(255, 255, 255, 0.4)","--ig-color-white-70":r?"rgba(15, 18, 25, 0.62)":"rgba(255, 255, 255, 0.7)","--ig-color-white-90":r?"rgba(15, 18, 25, 0.82)":"rgba(255, 255, 255, 0.9)","--ig-color-white-96":r?"rgba(15, 18, 25, 0.88)":"rgba(255, 255, 255, 0.96)","--ig-color-inset-highlight":r?"rgba(15, 18, 25, 0.05)":"rgba(255, 255, 255, 0.05)","--ig-color-slate-tint-18":t.borderStrong,"--ig-color-blue-tint-06":r?"rgba(58, 115, 230, 0.06)":"rgba(77, 136, 255, 0.06)","--ig-color-blue-tint-08":r?"rgba(58, 115, 230, 0.08)":"rgba(77, 136, 255, 0.08)","--ig-color-blue-tint-10":r?"rgba(58, 115, 230, 0.1)":"rgba(77, 136, 255, 0.1)","--ig-color-blue-tint-12":t.blueTint12,"--ig-color-blue-tint-14":t.blueTint14,"--ig-color-blue-tint-15":r?"rgba(58, 115, 230, 0.15)":"rgba(77, 136, 255, 0.15)","--ig-color-blue-tint-16":t.blueTint16,"--ig-color-blue-tint-18":t.blueTint18,"--ig-color-blue-tint-20":r?"rgba(58, 115, 230, 0.2)":"rgba(77, 136, 255, 0.2)","--ig-color-blue-tint-25":r?"rgba(58, 115, 230, 0.25)":"rgba(77, 136, 255, 0.25)","--ig-color-blue-tint-28":t.blueTint28,"--ig-color-blue-tint-35":r?"rgba(58, 115, 230, 0.35)":"rgba(77, 136, 255, 0.35)","--ig-color-blue-tint-38":t.blueTint38,"--ig-color-blue-tint-40":r?"rgba(58, 115, 230, 0.4)":"rgba(77, 136, 255, 0.4)","--ig-color-blue-tint-50":r?"rgba(58, 115, 230, 0.5)":"rgba(77, 136, 255, 0.5)","--ig-color-blue-tint-55":r?"rgba(58, 115, 230, 0.55)":"rgba(77, 136, 255, 0.55)","--ig-color-blue-tint-60":r?"rgba(58, 115, 230, 0.6)":"rgba(77, 136, 255, 0.6)","--ig-color-blue-tint-70":r?"rgba(58, 115, 230, 0.7)":"rgba(77, 136, 255, 0.7)","--ig-color-blue-tint-78":r?"rgba(58, 115, 230, 0.78)":"rgba(77, 136, 255, 0.78)","--ig-color-blue-tint-80":r?"rgba(58, 115, 230, 0.8)":"rgba(77, 136, 255, 0.8)","--ig-color-blue-tint-85":r?"rgba(58, 115, 230, 0.85)":"rgba(77, 136, 255, 0.85)","--ig-color-blue-tint-90":r?"rgba(58, 115, 230, 0.9)":"rgba(77, 136, 255, 0.9)","--ig-color-blue-tint-92":r?"rgba(58, 115, 230, 0.92)":"rgba(77, 136, 255, 0.92)","--ig-color-blue-tint-62":r?"rgba(58, 115, 230, 0.62)":"rgba(77, 136, 255, 0.62)","--ig-color-blue-tint-34":r?"rgba(58, 115, 230, 0.34)":"rgba(77, 136, 255, 0.34)","--ig-color-blue-strong-tint-20":r?"rgba(20, 63, 166, 0.2)":"rgba(41, 98, 217, 0.2)","--ig-color-blue-strong-tint-24":r?"rgba(20, 63, 166, 0.24)":"rgba(41, 98, 217, 0.24)","--ig-color-blue-strong-tint-30":r?"rgba(20, 63, 166, 0.3)":"rgba(41, 98, 217, 0.3)","--ig-color-slate-tint-86":r?"rgba(229, 231, 235, 0.86)":"rgba(75, 85, 99, 0.86)","--ig-color-white-32":r?"rgba(15, 18, 25, 0.24)":"rgba(255, 255, 255, 0.32)","--ig-color-white-35":r?"rgba(15, 18, 25, 0.27)":"rgba(255, 255, 255, 0.35)","--ig-color-white-45":r?"rgba(15, 18, 25, 0.37)":"rgba(255, 255, 255, 0.45)","--ig-color-white-55":r?"rgba(15, 18, 25, 0.47)":"rgba(255, 255, 255, 0.55)","--ig-color-white-62":r?"rgba(15, 18, 25, 0.54)":"rgba(255, 255, 255, 0.62)","--ig-color-white-80":r?"rgba(15, 18, 25, 0.72)":"rgba(255, 255, 255, 0.8)","--ig-color-overlay-archived":"rgba(0, 0, 0, 0.36)","--ig-color-overlay-darker":r?"rgba(0, 0, 0, 0.48)":"rgba(0, 0, 0, 0.65)","--ig-color-overlay-darkest":r?"rgba(0, 0, 0, 0.62)":"rgba(0, 0, 0, 0.82)","--ig-color-overlay-near-opaque":r?"rgba(0, 0, 0, 0.72)":"rgba(0, 0, 0, 0.92)","--ig-color-capture-surface-loud":r?"rgba(229, 231, 235, 0.86)":"rgba(17, 24, 39, 0.86)","--ig-color-capture-surface":r?"rgba(229, 231, 235, 0.7)":"rgba(17, 24, 39, 0.7)","--ig-color-capture-overlay":r?"rgba(0, 0, 0, 0.24)":"rgba(0, 0, 0, 0.36)","--ig-color-app-backdrop":r?"rgba(0, 0, 0, 0.22)":"rgba(0, 0, 0, 0.32)","--ig-color-yellow-tint-50":r?"rgba(202, 138, 4, 0.5)":"rgba(255, 255, 0, 0.5)","--ig-color-slate-gray-tint-12":r?"rgba(71, 85, 105, 0.12)":"rgba(127, 139, 157, 0.12)","--ig-color-slate-gray-tint-16":r?"rgba(71, 85, 105, 0.16)":"rgba(127, 139, 157, 0.16)","--ig-color-slate-gray-tint-18":r?"rgba(71, 85, 105, 0.18)":"rgba(127, 139, 157, 0.18)","--ig-color-overlay-deep":r?"rgba(0, 0, 0, 0.58)":"rgba(0, 0, 0, 0.78)","--ig-color-capture-bg-loud":r?"rgba(229, 231, 235, 0.82)":"rgba(12, 16, 22, 0.82)","--ig-color-blue-accent-solid":r?"rgba(58, 115, 230, 1)":"rgba(77, 136, 255, 1)","--ig-color-surface-dropdown-grid-top":r?"rgba(255, 255, 255, 0.98)":"rgba(18, 24, 34, 0.98)","--ig-color-surface-dropdown-grid-bottom":r?"rgba(247, 249, 251, 0.98)":"rgba(12, 16, 24, 0.98)","--ig-color-green-tint-success-soft":r?"rgba(22, 163, 74, 0.08)":"rgba(52, 211, 153, 0.06)","--ig-color-amber-tint-warning-soft":r?"rgba(217, 119, 6, 0.08)":"rgba(250, 204, 21, 0.06)","--ig-color-project-tag-general":r?"rgba(71, 85, 105, 0.92)":"rgba(100, 116, 139, 0.92)","--ig-color-project-tag-deflectometry":r?"rgba(2, 132, 199, 0.92)":"rgba(14, 165, 233, 0.92)","--ig-color-project-tag-photometric-stereo":r?"rgba(124, 58, 237, 0.92)":"rgba(167, 139, 250, 0.92)"}}var Ww={"--ig-radius-2xs":At["2xs"],"--ig-radius-xxs":At.xxs,"--ig-radius-xs":At.xs,"--ig-radius-sm":Ta.radius.sm,"--ig-radius-md":Ta.radius.md,"--ig-radius-lg":Ta.radius.lg,"--ig-radius-xl":Ta.radius.xl,"--ig-radius-2xl":At["2xl"],"--ig-radius-4xl":At["4xl"],"--ig-radius-pill":Ta.radius.pill,"--ig-font-sans":Ta.typography.fontSans,"--ig-font-mono":Ta.typography.fontMono,"--ig-font-size-3xs":D.size3xs,"--ig-font-size-2xs":D.size2xs,"--ig-font-size-xs":D.sizeXs,"--ig-font-size-sm":D.sizeSm,"--ig-font-size-md":D.sizeMd,"--ig-font-size-lg":D.sizeLg,"--ig-font-size-xl":D.sizeXl,"--ig-font-size-2xl":D.size2xl,"--ig-font-size-3xl":D.size3xl,"--ig-font-size-3xl-plus":D.size3xlPlus,"--ig-font-size-4xl":D.size4xl,"--ig-font-size-5xl":D.size5xl,"--ig-font-size-state-title":D.sizeSm,"--ig-font-size-state-description":D.sizeXs,"--ig-font-weight-state-title":"600","--ig-line-height-state-description":"1.5","--ig-font-weight-regular":String(D.weightRegular),"--ig-font-weight-medium":String(D.weightMedium),"--ig-font-weight-semibold":String(D.weightSemibold),"--ig-font-weight-bold":String(D.weightBold),"--ig-font-weight-black":String(D.weightBlack),"--ig-letter-spacing-heading":D.letterSpacingHeading,"--ig-text-clamp-narrow":D.textClampNarrow,"--ig-text-clamp-mid":D.textClampMid,"--ig-letter-spacing-micro":D.letterSpacingMicro,"--ig-letter-spacing-tight":D.letterSpacingTight,"--ig-letter-spacing-normal":D.letterSpacingNormal,"--ig-letter-spacing-wide":D.letterSpacingWide,"--ig-letter-spacing-wider":D.letterSpacingWider,"--ig-letter-spacing-widest":D.letterSpacingWidest,"--ig-line-height-none":String(D.lineHeightNone),"--ig-line-height-tight":String(D.lineHeightTight),"--ig-line-height-snug":String(D.lineHeightSnug),"--ig-line-height-base":String(D.lineHeightBase),"--ig-line-height-relaxed":String(D.lineHeightRelaxed),"--ig-line-height-relaxed-plus":String(D.lineHeightRelaxedPlus),"--ig-line-height-loose":String(D.lineHeightLoose),"--ig-opacity-svg-fill-faint":String(he.svgFillFaint),"--ig-opacity-svg-fill-subtle":String(he.svgFillSubtle),"--ig-opacity-svg-fill-soft":String(he.svgFillSoft),"--ig-opacity-svg-fill-medium":String(he.svgFillMedium),"--ig-opacity-dim":String(he.dim),"--ig-opacity-dim-soft":String(he.dimSoft),"--ig-opacity-ghost":String(he.ghost),"--ig-opacity-faded":String(he.faded),"--ig-opacity-disabled":String(he.disabled),"--ig-opacity-overlay":String(he.overlay),"--ig-opacity-muted":String(he.muted),"--ig-opacity-subtle":String(he.subtle),"--ig-opacity-emphatic":String(he.emphatic),"--ig-opacity-loud":String(he.loud),"--ig-opacity-loud-plus":String(he.loudPlus),"--ig-opacity-prominent":String(he.prominent),"--ig-opacity-near":String(he.near),"--ig-blur-2xs":Jr.blur2xs,"--ig-blur-xs":Jr.blurXs,"--ig-blur-sm":Jr.blurSm,"--ig-blur-md":Jr.blurMd,"--ig-blur-lg":Jr.blurLg,"--ig-blur-xl":Jr.blurXl,"--ig-icon-xs":zt.xs,"--ig-icon-sub":zt.sub,"--ig-icon-2xs":zt["2xs"],"--ig-icon-sm":zt.sm,"--ig-icon-sm-plus":zt.smPlus,"--ig-icon-md":zt.md,"--ig-icon-lg":zt.lg,"--ig-icon-xl":zt.xl,"--ig-icon-2xl":zt["2xl"],"--ig-icon-3xl":zt["3xl"],"--ig-svg-stroke-bold":String(Cw.bold),"--ig-popup-3xs":j["3xs"],"--ig-popup-2xs":j["2xs"],"--ig-popup-2xs-plus":j["2xsPlus"],"--ig-popup-xs":j.xs,"--ig-popup-sm":j.sm,"--ig-popup-md":j.md,"--ig-popup-lg":j.lg,"--ig-popup-xl":j.xl,"--ig-popup-2xl-narrow":j["2xlNarrow"],"--ig-popup-2xl":j["2xl"],"--ig-popup-3xl":j["3xl"],"--ig-popup-xs-tight":j.xsTight,"--ig-popup-2xl-wide":j["2xlWide"],"--ig-popup-3xl-narrow":j["3xlNarrow"],"--ig-popup-3xl-mid":j["3xlMid"],"--ig-popup-3xl-wide":j["3xlWide"],"--ig-popup-4xl-narrow":j["4xlNarrow"],"--ig-popup-4xl-mid":j["4xlMid"],"--ig-popup-4xl":j["4xl"],"--ig-popup-list-min":j.listMin,"--ig-popup-md-narrow":j.mdNarrow,"--ig-popup-xs-plus":j.xsPlus,"--ig-popup-xs-narrow":j.xsNarrow,"--ig-popup-sm-narrow":j.smNarrow,"--ig-popup-2xs-narrow":j["2xsNarrow"],"--ig-popup-3xs-plus":j["3xsPlus"],"--ig-popup-3xs-wide":j["3xsWide"],"--ig-popup-2xs-narrow-tight":j["2xsNarrowTight"],"--ig-popup-2xs-tight":j["2xsTight"],"--ig-popup-lg-plus":j.lgPlus,"--ig-popup-filter-panel":j.filterPanel,"--ig-space-0":te[0],"--ig-space-1px":te["1px"],"--ig-space-2px":te["2px"],"--ig-space-3px":te["3px"],"--ig-space-neg-1px":te["-1px"],"--ig-space-neg-2px":te["-2px"],"--ig-transform-hover-lift-y":te.hoverLiftY,"--ig-space-1":te[1],"--ig-space-1-plus":te["1Plus"],"--ig-space-2":te[2],"--ig-space-2-plus":te["2Plus"],"--ig-space-3":te[3],"--ig-space-4":te[4],"--ig-space-5":te[5],"--ig-space-6":te[6],"--ig-space-7":te[7],"--ig-space-8":te[8],"--ig-space-9":te[9],"--ig-space-10":te[10],"--ig-space-11":te[11],"--ig-space-12":te[12],"--ig-space-13":te[13],"--ig-border-1px":pl["1px"],"--ig-border-1_5px":pl["1_5px"],"--ig-border-2px":pl["2px"],"--ig-border-3px":pl["3px"],"--ig-z-hidden":String(H.hidden),"--ig-z-base":String(H.base),"--ig-z-raised":String(H.raised),"--ig-z-raised-plus":String(H.raisedPlus),"--ig-z-capture":String(H.capture),"--ig-z-capture-high":String(H.captureHigh),"--ig-z-capture-super":String(H.captureSuper),"--ig-z-capture-top":String(H.captureTop),"--ig-z-sticky":String(H.sticky),"--ig-z-sticky-plus":String(H.stickyPlus),"--ig-z-sticky-top":String(H.stickyTop),"--ig-z-header":String(H.header),"--ig-z-overlay":String(H.overlay),"--ig-z-overlay-low":String(H.overlayLow),"--ig-z-dot-menu":String(H.dotMenu),"--ig-z-dot-menu-plus":String(H.dotMenuPlus),"--ig-z-topbar":String(H.topbar),"--ig-z-dropdown":String(H.dropdown),"--ig-z-mobile-nav-backdrop":String(H.mobileNavBackdrop),"--ig-z-mobile-nav":String(H.mobileNav),"--ig-z-mobile-menu":String(H.mobileMenu),"--ig-z-popover":String(H.popover),"--ig-z-context-menu":String(H.contextMenu),"--ig-z-drawer":String(H.drawer),"--ig-z-modal":String(H.modal),"--ig-z-toast":String(H.toast),"--ig-z-tooltip":String(H.tooltip),"--ig-scale-press":String(Rd.press),"--ig-scale-drag":String(Rd.drag),"--ig-scale-hover-lift":String(Rd.hoverLift),"--ig-aspect-landscape":Pw.landscape,"--ig-control-height-xs":Ke.xs,"--ig-control-height-xs-plus":Ke.xsPlus,"--ig-control-height-sm":Ke.sm,"--ig-control-height-sm-plus":Ke.smPlus,"--ig-control-height-md":Ke.md,"--ig-control-height-mid-plus":Ke.midPlus,"--ig-control-height-mid-plus-tall":Ke.midPlusTall,"--ig-control-height-2xl-wide":Ke["2xlWide"],"--ig-control-height-lg":Ke.lg,"--ig-control-height-xl":Ke.xl,"--ig-control-height-2xl":Ke["2xl"],"--ig-control-height-3xl":Ke["3xl"],"--ig-control-height-3xl-plus":Ke["3xlPlus"],"--ig-page-max-width":ee.pageMaxWidth,"--ig-layout-topbar":ee.topbarHeight,"--ig-layout-capture-bar":ee.captureBar,"--ig-layout-capture-grid":ee.captureGrid,"--ig-layout-histogram-width":ee.histogramWidth,"--ig-layout-histogram-height":ee.histogramHeight,"--ig-layout-dataset-card-min-height":ee.datasetCardMinHeight,"--ig-layout-dataset-card-recent-min-height":ee.datasetCardRecentMinHeight,"--ig-layout-log-time-min":ee.logTimeMin,"--ig-layout-log-detail-left":ee.logDetailLeft,"--ig-layout-log-detail-top":ee.logDetailTop,"--ig-layout-log-detail-width":ee.logDetailWidth,"--ig-layout-color-plane-height":ee.colorPlaneHeight,"--ig-layout-color-thumb-size":ee.colorThumbSize,"--ig-layout-shadow-y-offset":ee.shadowYOffset,"--ig-layout-shadow-blur":ee.shadowBlur,"--ig-layout-sidebar-header":ee.sidebarHeader,"--ig-layout-sidebar-collapse":ee.sidebarCollapse,"--ig-layout-panel-min-height":ee.panelMinHeight,"--ig-layout-loading-panel-height":ee.loadingPanelHeight,"--ig-form-label-col":ee.formLabelCol,"--ig-form-label-col-wide":ee.formLabelColWide,"--ig-motion-fastest":ze.fastest,"--ig-motion-swift":ze.swift,"--ig-motion-fast":ze.fast,"--ig-motion-fast-ease":ze.fastEase,"--ig-motion-normal":ze.normal,"--ig-motion-normal-ease":ze.normalEase,"--ig-motion-mobile-nav":ze.mobileNav,"--ig-motion-spinner":ze.spinner,"--ig-motion-spinner-fast":ze.spinnerFast,"--ig-motion-spinner-slow":ze.spinnerSlow,"--ig-motion-progress-bar":ze.progressBar,"--ig-motion-sync-spin":ze.syncSpin,"--ig-motion-shimmer":ze.shimmer,"--ig-motion-skeleton":ze.skeleton};function Md(e="dark"){return{...Ww,...qw(e==="light"?Rw:Ta,e==="light"?_d:Nd,e==="light"?Bh:Dh,e==="light")}}var m3=Md("dark");function $d(e,t){let a=Object.entries(t).map(([r,o])=>`  ${r}: ${o};`);return`${e} {
${a.join(`
`)}
}`}function Vw(){let e=Md("dark"),t=Md("light");return[$d(":root",Uw),$d(":root, :root[data-theme='dark']",e),$d(":root[data-theme='light']",t)].join(`
`)+`
`}var v3=rh`
  ${Vw()}

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
    background: ${Nd.slate900};
    color: var(--ig-color-text-primary);
  }

  html[data-theme='light'] select option {
    background: ${_d.slate900};
    color: var(--ig-color-text-primary);
  }

  a {
    color: inherit;
  }
`;function ir(e){if(e!=null)return typeof e=="number"?`${e}px`:e}function ml(e){if(e!=null)return typeof e=="number"?`${e}px`:e}var Gw=l.div`
  display: ${e=>e.$display??"block"};
  min-width: 0;
  ${e=>e.$padding!=null?`padding: ${ir(e.$padding)};`:""}
  ${e=>e.$gap!=null?`gap: ${ir(e.$gap)};`:""}
  ${e=>e.$width!=null?`width: ${ml(e.$width)};`:""}
  ${e=>e.$height!=null?`height: ${ml(e.$height)};`:""}
  ${e=>e.$align?`align-items: ${e.$align};`:""}
  ${e=>e.$justify?`justify-content: ${e.$justify};`:""}
  ${e=>e.$direction?`flex-direction: ${e.$direction};`:""}
  ${e=>e.$wrap?`flex-wrap: ${e.$wrap};`:""}
`;function Xw({as:e,display:t,padding:a,gap:r,width:o,height:i,align:n,justify:s,direction:u,wrap:d,...p}){return(0,Wh.jsx)(Gw,{as:e,$display:t,$padding:a,$gap:r,$width:o,$height:i,$align:n,$justify:s,$direction:u,$wrap:d,...p})}var Yw=l.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-7)"};
  align-items: ${e=>e.$align??"stretch"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;function zd({gap:e,align:t,justify:a,as:r,...o}){return(0,Vh.jsx)(Yw,{as:r,$gap:e,$align:t,$justify:a,...o})}var y3=l.div`
  display: flex;
  flex-wrap: ${e=>e.$wrap??"wrap"};
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-5)"};
  align-items: ${e=>e.$align??"center"};
  justify-content: ${e=>e.$justify??"flex-start"};
`;var w3=l.div`
  display: grid;
  min-width: 0;
  gap: ${e=>ir(e.$gap)??"var(--ig-space-7)"};
  grid-template-columns: ${e=>e.$columns??`repeat(auto-fit, minmax(min(${ml(e.$minItemWidth)??"var(--ig-popup-xs)"}, 100%), 1fr))`};
`;var L3=l.div`
  width: 100%;
  max-width: ${e=>ml(e.$maxWidth)??"var(--ig-page-max-width)"};
  margin: 0 auto;
  padding-inline: ${e=>ir(e.$padding)??"var(--ig-space-11)"};
`;var Kw={default:"var(--ig-color-text-primary)",secondary:"var(--ig-color-text-secondary)",muted:"var(--ig-color-text-muted)",soft:"var(--ig-color-text-soft)",accent:"var(--ig-color-accent-soft)",success:"var(--ig-color-status-running-text)",warning:"var(--ig-color-status-draft-text)",danger:"var(--ig-color-status-failed-text)"},Qw={default:void 0,mono:"var(--ig-font-mono)"},Zw={regular:"var(--ig-font-weight-regular)",medium:"var(--ig-font-weight-medium)",semibold:"var(--ig-font-weight-semibold)",bold:"var(--ig-font-weight-bold)",black:"var(--ig-font-weight-black)"},Ph={tight:"var(--ig-letter-spacing-tight)",normal:"var(--ig-letter-spacing-normal)",wide:"var(--ig-letter-spacing-wide)",wider:"var(--ig-letter-spacing-wider)",widest:"var(--ig-letter-spacing-widest)"};function Jw(e){return typeof e=="string"?Zw[e]:e??"var(--ig-font-weight-regular)"}function e2(e){if(e)return e in Ph?Ph[e]:e}var t2=l.span`
  margin: 0;
  color: ${e=>Kw[e.$tone??"default"]};
  font-size: ${e=>e.$size??"var(--ig-font-size-md)"};
  font-weight: ${e=>e.$weight??"var(--ig-font-weight-regular)"};
  line-height: var(--ig-line-height-base);
  word-break: break-word;
  ${e=>e.$align&&L`text-align: ${e.$align};`}
  ${e=>e.$uppercase&&L`text-transform: uppercase;`}
  ${e=>e.$letterSpacing&&L`letter-spacing: ${e.$letterSpacing};`}
  ${e=>{let t=e.$fontFamily&&Qw[e.$fontFamily];return t?L`font-family: ${t};`:""}}
  ${e=>e.$tabularNums&&L`font-variant-numeric: tabular-nums;`}
`;function Xh({as:e,tone:t,size:a,weight:r,align:o,uppercase:i,letterSpacing:n,fontFamily:s,tabularNums:u,...d}){return(0,Gh.jsx)(t2,{as:e,$tone:t,$size:a,$weight:Jw(r),$align:o,$uppercase:i,$letterSpacing:e2(n),$fontFamily:s,$tabularNums:u,...d})}var I3=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  letter-spacing: var(--ig-letter-spacing-heading);
  font-size: ${e=>e.$level===1?"var(--ig-font-size-5xl)":e.$level===2?"var(--ig-font-size-4xl)":e.$level===3?"var(--ig-font-size-2xl)":"var(--ig-font-size-xl)"};
  font-weight: ${e=>e.$level===1?"var(--ig-font-weight-black)":e.$level===2?"var(--ig-font-weight-bold)":"var(--ig-font-weight-semibold)"};
`;function r2(e){return(0,Yh.jsx)(Xh,{size:"var(--ig-font-size-sm)",...e})}var P3=l.div`
  ${e=>e.$elevation==="raised"?ve:e.$elevation==="card"?Hd:Kt}
  border-radius: ${e=>ir(e.$radius)??"var(--ig-radius-2xl)"};
`;var R3=l.hr`
  width: 100%;
  height: var(--ig-space-1px);
  margin: 0;
  border: 0;
  background: var(--ig-color-border-subtle);
`,$3=l.div`
  min-width: 0;
  min-height: 0;
  overflow: auto;
`,E3=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${e=>`${e.$size??Lt.lg}px`};
  height: ${e=>`${e.$size??Lt.lg}px`};
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
`;var u2={sm:"var(--ig-space-3) var(--ig-space-6)",md:"var(--ig-space-4) var(--ig-space-8)",lg:"var(--ig-space-5) var(--ig-space-10)"};function Qh(e,t){return e||(t==="ghost"?"secondary":t==="accent"?"accent":"solid")}var Jh=l.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  min-width: 0;
  white-space: nowrap;
  height: ${e=>e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"};
  ${e=>e.$iconOnly?`width: ${e.$size==="sm"?"var(--ig-control-height-sm)":e.$size==="lg"?"var(--ig-control-height-lg)":"var(--ig-control-height-md)"}; padding: 0;`:`padding: 0 ${u2[e.$size].split(" ")[1]};`}
  font-size: ${e=>e.$size==="sm"?"var(--ig-font-size-sm)":e.$size==="lg"?"var(--ig-font-size-lg)":"var(--ig-font-size-md)"};
  font-weight: var(--ig-font-weight-semibold);
  line-height: var(--ig-line-height-none);
  ${e=>e.$tone==="danger"?e.$variant==="ghost"?Ow:e.$variant==="secondary"?Bw:Dw:e.$variant==="ghost"?Fw:e.$variant==="secondary"?Oh:e.$variant==="accent"?Aw:zw}
`,ao=Zh.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",leadingIcon:i,trailingIcon:n,children:s,"data-ig-component":u,"data-ig-slot":d,...p},h){let v="Button",y=d??(u&&u!==v?u:void 0);return(0,ev.jsxs)(Jh,{ref:h,$variant:Qh(t,a),$size:r,$tone:o,...p,"data-ig-component":v,"data-ig-layer":"components","data-ig-slot":y,children:[i,s,n]})}),Pe=tv.default.forwardRef(function({variant:t,$variant:a,size:r="md",tone:o="default",children:i,"data-ig-component":n,"data-ig-slot":s,...u},d){let p="IconButton",h=s??(n&&n!==p?n:void 0);return(0,av.jsx)(Jh,{ref:d,type:"button",$variant:Qh(t,a),$size:r,$tone:o,$iconOnly:!0,"aria-label":u["aria-label"]??"Action",...u,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,children:i})}),A3=l(Pe).attrs({variant:"secondary",size:"sm"})`
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
`,d2={xs:"var(--ig-font-size-xs)",sm:"var(--ig-font-size-sm)"},c2={accent:"var(--ig-color-accent)",muted:"var(--ig-color-text-muted)"},f2=l.button`
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
  font-size: ${e=>d2[e.$size]};
  color: ${e=>c2[e.$tone]};
  &:hover:not(:disabled) {
    text-decoration: underline;
  }
  &:disabled {
    opacity: var(--ig-opacity-disabled);
    cursor: not-allowed;
  }
`,sr=(0,rv.forwardRef)(function({tone:t="accent",size:a="sm",iconLeading:r,iconTrailing:o,type:i="button",children:n,...s},u){return(0,ov.jsxs)(f2,{ref:u,$tone:t,$size:a,type:i,...s,children:[r,n,o]})}),F3=l(Pe).attrs({variant:"secondary",size:"sm"})`
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
`,O3=l.span`
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
`;var p2={sm:L`
    height: var(--ig-control-height-sm);
    padding: 0 var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `,md:L``,lg:L`
    height: var(--ig-control-height-lg);
    padding: 0 var(--ig-space-6);
  `},nv=l.input`
  ${lr}
  ${e=>p2[e.$size]}
`,Ra=(0,Ud.forwardRef)(({size:e="md",...t},a)=>(0,qd.jsx)(nv,{ref:a,$size:e,...t}));Ra.displayName="TextField";var N3=l.textarea`
  ${lr}
`,g2=(0,Ud.forwardRef)(({size:e="md",...t},a)=>(0,qd.jsx)(nv,{ref:a,$size:e,type:"password",...t}));g2.displayName="PasswordField";var m2={default:L`
    font-family: inherit;
    font-size: var(--ig-font-size-sm);
  `,monospace:L`
    font-family: var(--ig-font-mono);
    font-size: var(--ig-font-size-2xs);
  `},h2=l.textarea`
  width: 100%;
  min-height: ${e=>e.$minHeight}px;
  padding: var(--ig-space-3);
  background: var(--ig-color-surface-muted);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  color: var(--ig-color-text-primary);
  resize: vertical;
  box-sizing: border-box;
  ${e=>m2[e.$variant]}
  &::placeholder {
    color: var(--ig-color-text-soft);
  }
  &:focus-visible {
    outline: none;
    border-color: var(--ig-color-accent);
  }
`,H3=(0,lv.forwardRef)(function({variant:t="default",minHeight:a=Iw.midPlusTall,...r},o){return(0,sv.jsx)(h2,{ref:o,$variant:t,$minHeight:a,...r})}),v2=l.input.attrs({type:"color"})`
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
`,q3=(0,uv.forwardRef)(function(t,a){return(0,dv.jsx)(v2,{ref:a,...t})}),x2={vertical:L`
    flex: 0 0 var(--ig-space-3);
    cursor: col-resize;
    &::after { inset: 0 var(--ig-space-3px); }
  `,horizontal:L`
    flex: 0 0 var(--ig-space-3);
    cursor: row-resize;
    &::after { inset: var(--ig-space-3px) 0; }
  `},b2=l.div`
  position: relative;
  z-index: var(--ig-z-sticky);
  ${e=>x2[e.$orientation]}
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
`,V3=(0,cv.forwardRef)(function({orientation:t="vertical",...a},r){return(0,fv.jsx)(b2,{ref:r,$orientation:t,role:"separator","aria-orientation":t,...a})}),y2={outlined:L`
    border: var(--ig-border-2px) dashed var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-lg);
    background: transparent;
  `,filled:L`
    border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-radius: var(--ig-radius-xxs);
    background: var(--ig-color-surface-raised);
  `},w2=l.div`
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
  ${e=>y2[e.$variant]}
  ${e=>e.$active&&!e.$disabled&&L`
      border-color: var(--ig-color-accent);
      background: var(--ig-color-accent-soft-surface);
    `}
  ${e=>e.$disabled&&e.$variant==="outlined"&&L`
      background: repeating-linear-gradient(
        ${vl.diagonal},
        var(--ig-color-surface-muted) 0 var(--ig-space-4),
        var(--ig-color-bg-canvas) var(--ig-space-4) var(--ig-space-9)
      );
    `}
`,X3=(0,pv.forwardRef)(function({variant:t="outlined",active:a=!1,disabled:r=!1,children:o,...i},n){return(0,gv.jsx)(w2,{ref:n,$variant:t,$active:a,$disabled:r,...i,children:o})}),Q3=l.div`
  position: absolute;
  ${e=>e.$side==="left"?`left: ${e.$inset};`:`right: ${e.$inset};`}
  ${e=>e.$stretchY?"top: var(--ig-space-1px); bottom: var(--ig-space-1px);":"top: 50%; transform: translateY(-50%);"}
  display: flex;
  align-items: center;
`;var Z3=l.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`,J3=l.input`
  ${lr}
  padding-left: calc(var(--ig-space-5) + var(--ig-space-9));
  padding-right: calc(var(--ig-space-5) + var(--ig-space-9));
  ${e=>e.$size==="sm"&&"padding-top: var(--ig-space-3); padding-bottom: var(--ig-space-3); font-size: var(--ig-font-size-sm);"}
`,eP=l.span`
  display: flex;
  pointer-events: none;
  color: var(--ig-color-text-soft);
`,tP=l.button`
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
`;var rP=l.div`
  position: relative;
`,oP=l.button`
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
`,iP=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,nP=l.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-soft);
  transform: ${e=>e.$open?`rotate(${Ed.half})`:`rotate(${Ed.zero})`};
  transition: transform var(--ig-motion-fast), color var(--ig-motion-fast);
`,lP=l.div.attrs(({$layout:e})=>({style:{left:`${e.left}px`,width:`${e.width}px`,maxHeight:`${e.maxHeight}px`,...typeof e.top=="number"?{top:`${e.top}px`}:{},...typeof e.bottom=="number"?{bottom:`${e.bottom}px`}:{}}}))`
  position: fixed;
  z-index: calc(var(--ig-z-modal) + 10);
  padding: var(--ig-space-2);
  border-radius: var(--ig-radius-md);
  background: linear-gradient(180deg, var(--ig-color-dropdown-menu-a) 0%, var(--ig-color-dropdown-menu-b) 100%);
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  box-shadow: var(--ig-shadow-popover);
  backdrop-filter: var(--ig-blur-xl);
  overflow-y: auto;
`,sP=l.button`
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
`,uP=l.div`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
`,dP=l.div`
  margin-top: var(--ig-space-1);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,cP=l.select`
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
`;var pP=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,gP=l.input`
  ${lr}
  padding-right: var(--ig-space-13);
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button { -webkit-appearance: none; margin: 0; }
`,mP=l.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: var(--ig-control-height-xs);
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,hP=l.button`
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
`;var xP=l.div`
  position: relative;
  width: 100%;
`,bP=l.textarea`
  ${lr}
  font-size: var(--ig-font-size-xs);
  resize: vertical;
  min-height: var(--ig-control-height-mid-plus-tall);
`,yP=l.div`
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
`,wP=l.button`
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
`,LP=l.span`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-medium);
`,SP=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`;var Wd=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-sm);
  cursor: pointer;
  user-select: none;
`,$2=l.span`
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
`,Vd=l.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,E2=l.span`
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
`,M2=l.span`
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
`,IP=ar.default.forwardRef(function({label:t,checked:a,disabled:r,indeterminate:o,"data-ig-component":i,"data-ig-label":n,"data-ig-slot":s,...u},d){let p="Checkbox",h=s??(i&&i!==p?i:void 0),v=ar.default.useRef(null);ar.default.useImperativeHandle(d,()=>v.current),ar.default.useEffect(()=>{v.current&&(v.current.indeterminate=!!o)},[o]);let y=o?"indeterminate":!!a,b=typeof t=="string"?t:void 0,w=n??u["aria-label"]??b;return(0,Ae.jsxs)(Wd,{"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":h,"data-ig-kind":"checkbox","data-ig-label":w,children:[(0,Ae.jsx)(Vd,{ref:v,type:"checkbox",checked:a,disabled:r,...u}),(0,Ae.jsx)(E2,{$checked:!!y,$disabled:r,children:o?(0,Ae.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Ae.jsx)("line",{x1:"2",y1:"6",x2:"10",y2:"6"})}):(0,Ae.jsx)("svg",{viewBox:"0 0 12 12",children:(0,Ae.jsx)("polyline",{points:"2 6 5 9 10 3"})})}),t]})}),kP=ar.default.forwardRef(function({label:t,checked:a,disabled:r,"data-ig-component":o,"data-ig-label":i,"data-ig-slot":n,...s},u){let d="Radio",p=n??(o&&o!==d?o:void 0),h=typeof t=="string"?t:void 0;return(0,Ae.jsxs)(Wd,{"data-ig-component":d,"data-ig-layer":"components","data-ig-slot":p,"data-ig-kind":"radio","data-ig-label":i??s["aria-label"]??h,children:[(0,Ae.jsx)(Vd,{ref:u,type:"radio",checked:a,disabled:r,...s}),(0,Ae.jsx)(M2,{$checked:!!a,$disabled:r}),t]})}),PP=ar.default.forwardRef(function({checked:t=!1,label:a,"data-ig-component":r,"data-ig-label":o,"data-ig-slot":i,...n},s){let u="Switch",d=i??(r&&r!==u?r:void 0),p=typeof a=="string"?a:void 0;return(0,Ae.jsxs)(Wd,{"data-ig-component":u,"data-ig-layer":"components","data-ig-slot":d,"data-ig-kind":"switch","data-ig-label":o??n["aria-label"]??p,children:[(0,Ae.jsx)(Vd,{ref:s,type:"checkbox",checked:t,...n}),(0,Ae.jsx)($2,{$checked:t}),a]})});var RP=l.input`
  display: none;
`,B2={flexDirection:"column",gap:"var(--ig-space-4)",padding:"var(--ig-space-10) var(--ig-space-6)",textAlign:"center",fontSize:"var(--ig-font-size-sm)"},$P={...B2,cursor:"pointer"};var MP=l.button`
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
`;var AP=l.div`
  display: inline-flex;
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: ${e=>e.$shape==="pill"?"var(--ig-radius-pill)":"var(--ig-radius-md)"};
  overflow: hidden;
  background: ${e=>e.$shape==="pill"?"var(--ig-color-surface-raised)":"var(--ig-color-surface-muted)"};
`,DP=l.button`
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
`;var FP=l.div`
  display: grid;
  grid-template-columns: var(--ig-form-label-col) 1fr;
  gap: var(--ig-space-3);
  align-items: start;
  ${De.sm} {
    grid-template-columns: 1fr;
  }
`,OP=l.label`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
  padding-top: var(--ig-space-3);
`,jP=l.div`
  min-width: 0;
`,NP=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
  margin-top: var(--ig-space-1);
`;var _P=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,HP=l.label`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-normal);
`;var qP=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  flex-wrap: wrap;
`,WP=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  white-space: nowrap;
  &:hover { color: var(--ig-color-text-primary); }
`;var O2={tooltip:L`
    z-index: var(--ig-z-tooltip);
    pointer-events: none;
  `,menu:L`
    z-index: var(--ig-z-context-menu);
    pointer-events: auto;
  `},j2=l.div`
  ${ve}
  position: fixed;
  border-radius: var(--ig-radius-md);
  ${e=>O2[e.$variant]}
`,XP=(0,kv.forwardRef)(function({top:t,left:a,variant:r="menu",children:o,style:i,...n},s){return(0,Pv.jsx)(j2,{ref:s,$variant:r,style:{top:t,left:a,...i},...n,children:o})});var YP={minWidth:xi.sm,maxWidth:"min(var(--ig-popup-2xl-narrow), calc(100vw - var(--ig-space-11)))",padding:"var(--ig-space-4)",overflow:"visible",zIndex:"var(--ig-z-tooltip)"},KP=l.button`
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
`;var ZP=l.button`
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
`;var Th={xs:"var(--ig-icon-sub)",sm:"var(--ig-icon-xs)",md:"var(--ig-icon-md)"},Rv=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>Th[e.$size??"sm"]};
  height: ${e=>Th[e.$size??"sm"]};
  border-radius: ${e=>e.$shape==="square"?"var(--ig-radius-2xs)":"50%"};
  background: ${e=>e.$color};
`,tT=l.label`
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
`;var rT=l.button`
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
`;var H2={sm:L`
    padding: var(--ig-space-2) var(--ig-space-3);
    font-size: var(--ig-font-size-sm);
  `,md:L`
    padding: var(--ig-space-3) var(--ig-space-4);
    font-size: var(--ig-font-size-sm);
  `},U2={default:"var(--ig-color-text-primary)",danger:"var(--ig-color-danger)"},q2=l.button`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  width: 100%;
  border: none;
  border-radius: var(--ig-radius-sm);
  background: ${e=>e.$active?"var(--ig-color-selection-bg)":"transparent"};
  color: ${e=>e.$active?"var(--ig-color-accent)":U2[e.$tone]};
  text-align: left;
  cursor: pointer;
  font-family: inherit;
  transition: background-color var(--ig-motion-fast);
  ${e=>H2[e.$size]}
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
`,nT=(0,Ev.forwardRef)(function({tone:t="default",size:a="sm",active:r=!1,iconLeading:o,iconTrailing:i,type:n="button",children:s,...u},d){return(0,Mv.jsxs)(q2,{ref:d,$tone:t,$size:a,$active:r,type:n,...u,children:[o,s,i]})});var lT=l.button`
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
`,sT=l.div`
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
`;var W2={bottom:L`
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
  `},dT=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  padding: var(--ig-space-3) var(--ig-space-4);
  background: var(--ig-color-overlay-strong);
  flex-shrink: 0;
  ${e=>W2[e.$placement]}
`,cT=l.div`
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
`,V2={sm:L`
    width: var(--ig-control-height-md);
    height: var(--ig-control-height-md);
  `,md:L`
    width: var(--ig-control-height-mid-plus);
    height: var(--ig-control-height-mid-plus);
  `},fT=l.button`
  flex-shrink: 0;
  ${e=>V2[e.$size]}
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
`,pT=l.span`
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
`;var mT=l.button`
  ${lr}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  text-align: left;
  cursor: pointer;
  border-radius: var(--ig-radius-md);
  min-width: var(--ig-popup-2xs);
`,hT=l.span`
  color: var(--ig-color-text-soft);
`,vT=l.div`
  ${Nh}
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

  ${_h}
`;var X2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-7);
`,yT=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-3);
  min-width: var(--ig-popup-xs);
`,Y2=l.div`
  ${ve}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  box-shadow: var(--ig-shadow-popover);
`,Ov=(0,Bv.forwardRef)(({anchor:e,style:t,...a},r)=>(0,Fv.jsx)(Y2,{ref:r,style:e?{position:"fixed",top:e.top,left:e.left,...t}:t,...a}));Ov.displayName="MenuPopover";var wT=l.div`
  ${ve}
  border-radius: var(--ig-radius-sm);
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  max-width: var(--ig-popup-sm);
`,LT=l(X2)`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  min-width: var(--ig-popup-xs);
  max-width: var(--ig-popup-md);
  box-shadow: var(--ig-shadow-popover);
`,CT=l.span`
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  word-break: break-word;
`,IT=l.span`
  ${({$tone:e,tone:t})=>{let a=Tw[e??t??"idle"];return L`
      background: ${a.background};
      color: ${a.color};
    `}}
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,kT=l(Ov)`
  position: absolute;
  top: calc(100% + var(--ig-space-4));
  right: 0;
  z-index: var(--ig-z-overlay);
  width: min(var(--ig-popup-lg), calc(100vw - var(--ig-control-height-mid-plus)));
  padding: var(--ig-space-7);
  border-radius: var(--ig-radius-2xl);
`;var PT=l.div`
  ${Nh}
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

  ${_h}
`;var RT=l.div`
  display: flex;
  flex-direction: ${e=>e.$orientation==="horizontal"?"row":"column"};
  gap: var(--ig-space-2);
`,$T=l.button`
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
`;var Q2={neutral:"var(--ig-color-badge-neutral)",accent:"var(--ig-color-badge-accent)",success:"var(--ig-color-badge-success)",warning:"var(--ig-color-badge-warning)",danger:"var(--ig-color-badge-danger)"},wi=l.span`
  padding: var(--ig-space-1) var(--ig-space-4);
  border-radius: var(--ig-radius-pill);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  background: ${e=>Q2[e.$tone??"neutral"]};
`,zT=l(wi)`
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,DT=l.p`
  ${Uh}
  ${qh}
  margin: 0;
`,FT=l.div`
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
`;var J2=l.span`
  position: relative;
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,eL=l.span`
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
`;function Nv({children:e,value:t,hidden:a=!1,tone:r="danger",className:o,style:i}){return(0,yl.jsxs)(J2,{className:o,style:i,children:[e,!a&&t!=null?(0,yl.jsx)(eL,{"data-ig-notification-badge":"",$tone:r,children:t}):null]})}var Ad=20,_v=120,aL=_v*Math.PI/180,rL=Ad/Math.sin(aL),oL=Et`
  from { background-position: 0 0; }
  to   { background-position: ${rL.toFixed(3)}px 0; }
`,iL=L`
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /**
     * Continuous wave (peak ↔ baseline) — fully-transparent gap 이 없으므로
     * 어느 위치도 "shimmer 가 비어 보이는" 구간이 없음.
     */
    background-image: repeating-linear-gradient(
      ${_v}deg,
      var(--ig-color-white-06) 0,
      var(--ig-color-white-24) ${Ad/2}px,
      var(--ig-color-white-06) ${Ad}px
    );
    animation: ${oL} var(--ig-motion-shimmer) linear infinite;
  }
`,nL=Et`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
`,lL={accent:"linear-gradient(135deg, var(--ig-color-accent) 0%, var(--ig-color-accent-strong) 100%)",danger:"var(--ig-color-danger)",success:"var(--ig-color-success)"},NT=l.div`
  width: 100%;
  height: var(--ig-space-3);
  border-radius: var(--ig-radius-pill);
  background: var(--ig-color-progress-track);
  overflow: hidden;
`,_T=l.div`
  position: relative;
  width: ${e=>e.$indeterminate?"30%":`${Math.max(0,Math.min(100,e.$value))}%`};
  height: 100%;
  border-radius: inherit;
  background: ${e=>lL[e.$tone]};
  transition: width var(--ig-motion-normal);
  overflow: hidden;
  ${e=>e.$indeterminate?L`animation: ${nL} var(--ig-motion-progress-bar) linear infinite;`:e.$active&&iL}
`;var UT={display:"flex",width:"100%",height:Lt["3xl"],borderRadius:"var(--ig-radius-pill)",overflow:"hidden",background:"var(--ig-color-progress-track)"},qT=l.div`
  flex: 0 0 ${e=>e.$width}%;
  background: ${e=>e.$color};
  transition: flex-basis var(--ig-motion-normal);
`;var sL=L`
  background:
    linear-gradient(
      ${vl.horizontal},
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
`,VT=l.div.attrs({"aria-hidden":!0})`
  ${sL}
  width: 100%;
  height: ${e=>e.$height??"var(--ig-icon-md)"};
  border-radius: var(--ig-radius-sm);
`,uL=l.div`
  ${({$tone:e="info"})=>L`
    background: ${eo[e].background};
    border-color: ${eo[e].border};
    color: ${eo[e].color};
  `}
  padding: var(--ig-space-5) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
`,XT=l(uL)`
  padding: var(--ig-space-3) var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
`,cL=Et`
  to { transform: rotate(${Ed.full}); }
`,KT={sm:Lt.sm,md:Lt.lg,lg:Lt["3xl"]};var QT=l.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${e=>e.$px}px;
  height: ${e=>e.$px}px;
  border: var(--ig-border-2px) solid var(--ig-color-border-subtle);
  border-top-color: ${e=>e.$color};
  border-radius: 50%;
  animation: ${cL} var(--ig-motion-spinner) linear infinite;
  vertical-align: middle;
`;var fL=Et`
  from { opacity: 0; transform: translateY(var(--ig-space-5)); }
  to   { opacity: 1; transform: translateY(0); }
`,pL=Et`
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(var(--ig-space-5)); }
`,JT=l.div`
  ${({$tone:e})=>L`
    background: ${eo[e].background};
    border-color: ${eo[e].border};
    color: ${eo[e].color};
  `}
  padding: var(--ig-space-4) var(--ig-space-6);
  border: var(--ig-border-1px) solid;
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  box-shadow: var(--ig-shadow-floating);
  pointer-events: auto;
  animation: ${({$leaving:e})=>e?pL:fL} var(--ig-motion-normal) forwards;
  max-width: var(--ig-popup-lg);
  word-break: break-word;
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,e4=l.span`
  flex: 1;
`,t4=l.button`
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
`,a4=l.button`
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
`,r4=l.div`
  position: fixed;
  bottom: var(--ig-space-6);
  right: var(--ig-space-6);
  z-index: var(--ig-z-toast);
  display: flex;
  flex-direction: column-reverse;
  gap: var(--ig-space-3);
  pointer-events: none;
`,o4=(0,ur.createContext)(()=>{});var n4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-md);
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,l4=l.span`
  font-weight: var(--ig-font-weight-semibold);
  white-space: nowrap;
`,gL=l.button`
  border: none;
  background: none;
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  cursor: pointer;
  text-decoration: underline;
  &:hover { color: var(--ig-color-text-primary); }
`,s4=l(gL)``,u4=l.div`
  flex: 1;
`,d4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`;var f4=l.div`
  ${qh}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-10) var(--ig-space-6);
  text-align: center;
  color: var(--ig-color-text-muted);
`,p4=l.div`
  color: var(--ig-color-text-soft);
  opacity: var(--ig-opacity-muted);
`,g4=l.div`
  ${Uh}
`,m4=l.div`
  ${Hw}
  max-width: var(--ig-popup-md);
`,h4=l.button`
  border: var(--ig-border-1px) solid var(--ig-color-border-strong);
  border-radius: var(--ig-radius-sm);
  background: transparent;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-2) var(--ig-space-5);
  cursor: pointer;
  transition: background var(--ig-motion-fast);
  &:hover { background: var(--ig-color-surface-interactive); }
`;var x4=l.div`
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
`,b4=l.h2`
  margin: 0;
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-lg);
`,y4=l.pre`
  color: var(--ig-color-danger);
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-sm);
  max-width: var(--ig-popup-xl);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
`,w4=l.button`
  padding: var(--ig-space-3) var(--ig-space-6);
  cursor: pointer;
`;var S4=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,C4=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
`,I4=l.span`
  flex-shrink: 0;
  color: ${e=>e.$status==="done"?"var(--ig-color-success)":e.$status==="error"?"var(--ig-color-danger)":e.$status==="running"?"var(--ig-color-accent)":"var(--ig-color-text-soft)"};
`,k4=l.span`
  font-size: var(--ig-font-size-sm);
  color: ${e=>e.$status==="pending"?"var(--ig-color-text-soft)":"var(--ig-color-text-primary)"};
`;var T4=l.span`
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
`;var vL={archived:L`
    background: var(--ig-color-overlay-archived);
    color: var(--ig-color-text-secondary);
  `,processing:L`
    background: var(--ig-color-lightbox-surface);
    color: var(--ig-color-text-primary);
  `},xL=l.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--ig-space-3);
  pointer-events: none;
  ${e=>vL[e.$variant]}
`,$4=l.span`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-medium);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,bL=Et`from { opacity: 0 } to { opacity: 1 }`,E4=l(xL)`
  animation: ${bL} var(--ig-motion-fast);
`;var z4=l.div`
  ${ve}
  border-radius: var(--ig-radius-md);
  padding: var(--ig-space-4) var(--ig-space-5);
  min-width: var(--ig-popup-2xs);
`;var gl=l.span`
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
`,D4=l.span`
  width: var(--ig-space-2);
  height: var(--ig-space-2);
  border-radius: 50%;
  background: currentColor;
`,B4=l.span`
  display: inline-block;
  overflow: hidden;
  transition:
    opacity var(--ig-motion-fast),
    max-width var(--ig-motion-fast);

  ${({$collapseUntilHover:e})=>e?L`
          max-width: 0;
          opacity: 0;

          ${gl}:hover &,
          ${gl}:focus-visible &,
          :where([data-state-chip-hover-scope='true']:hover) ${gl} &,
          :where([data-state-chip-hover-scope='true']:focus-within) ${gl} & {
            max-width: var(--ig-popup-3xs-plus);
            opacity: 1;
          }
        `:L`
          max-width: var(--ig-popup-3xs-plus);
        `}
`;var wL={success:"var(--ig-color-success)",warning:"var(--ig-color-warning)",danger:"var(--ig-color-danger)",neutral:"var(--ig-color-text-muted)"},O4=l.button`
  width: var(--ig-space-5);
  height: var(--ig-space-5);
  border-radius: var(--ig-radius-pill);
  border: none;
  padding: 0;
  background: ${e=>wL[e.$tone]};
  box-shadow: 0 0 0 var(--ig-space-2px) var(--ig-color-border-subtle);
  cursor: default;
`,Qv=L`
  display: inline-flex;
  position: relative;
  padding: var(--ig-space-1);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-tab-surface);
  gap: var(--ig-space-1);
`,N4=l.div`
  ${e=>e.$variant==="underline"?L`
          display: inline-flex;
          position: relative;
          align-items: stretch;
          gap: 0;
          width: 100%;
          border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
        `:Qv}
`,_4=l.div`
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
`,H4=l.button`
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
`;var U4=l.div`
  ${Qv}
`,Zv={xs:{root:"var(--ig-radius-sm)",item:"var(--ig-radius-xs)"},sm:{root:"var(--ig-radius-md)",item:"var(--ig-radius-sm)"},md:{root:"var(--ig-radius-lg)",item:"var(--ig-radius-md)"},lg:{root:"var(--ig-radius-xl)",item:"var(--ig-radius-lg)"}},W4=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  width: 100%;
  padding: var(--ig-space-2);
  border-radius: ${e=>Zv[e.$radius].root};
`,V4=l.div`
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
`,G4=l.button`
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
  border-radius: ${e=>Zv[e.$radius].item};
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
`,X4=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  min-width: 0;
`,Y4=l.span`
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,K4=l.span`
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
`;var Z4=l.header`
  display: none;
  ${De.md} {
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
`;var J4=l.div`
  display: none;
  ${De.md} {
    display: block;
    position: fixed;
    inset: 0;
    background: var(--ig-color-modal-backdrop);
    z-index: var(--ig-z-mobile-nav-backdrop);
    opacity: ${e=>e.$visible?1:0};
    pointer-events: ${e=>e.$visible?"auto":"none"};
    transition: opacity var(--ig-motion-normal);
  }
`,eR=l.aside`
  display: none;
  ${De.md} {
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
`;var tR=l.button`
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
`;var aR=l.button`
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
`;var rR={marginLeft:"auto",minWidth:Lt.xl,height:Lt.xl,padding:"0 var(--ig-space-2)",borderRadius:"var(--ig-radius-pill)",background:"var(--ig-color-danger)",color:"var(--ig-color-text-primary)",fontSize:"var(--ig-font-size-2xs)",fontWeight:"var(--ig-font-weight-bold)",display:"flex",alignItems:"center",justifyContent:"center"};var iR=l.div`
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
`,nR=l.button`
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
`;var kL=l.div`
  position: fixed;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--ig-z-modal);
  padding: var(--ig-space-11);
`,ix=l.div`
  ${ve}
  width: min(var(--ig-popup-3xl), 100%);
  max-height: calc(100vh - var(--ig-control-height-xl));
  @supports (height: 1dvh) { max-height: calc(100dvh - var(--ig-control-height-xl)); }
  overflow: hidden;
  border-radius: var(--ig-radius-4xl);
  display: flex;
  flex-direction: column;
`,sR=l(ix)`
  width: auto;
  min-width: var(--ig-popup-md);
  max-width: min(var(--ig-popup-2xl), calc(100vw - var(--ig-control-height-xl)));
  padding: var(--ig-space-9);
  border-radius: var(--ig-radius-lg);
`,PL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-7);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
  flex-shrink: 0;
`,TL=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-3xl);
  font-weight: var(--ig-font-weight-bold);
`,RL=l.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--ig-space-3);
`,uR=l.aside`
  ${ve}
  position: fixed;
  top: 0;
  bottom: 0;
  ${e=>e.$side==="left"?"left: 0;":"right: 0;"}
  width: min(var(--ig-popup-2xl-narrow), 100vw);
  z-index: var(--ig-z-drawer);
  padding: var(--ig-space-9);
  border-radius: 0;
`,$L=l(Pe)`
  border-color: transparent;
  background: transparent;
  color: var(--ig-color-text-muted);

  &:hover:not(:disabled) {
    background: var(--ig-color-surface-interactive);
    border-color: var(--ig-color-border-subtle);
    color: var(--ig-color-text-primary);
  }
`;function EL({"aria-label":e="Close dialog",title:t="Close",children:a,...r}){return(0,Dd.jsx)($L,{type:"button",variant:"secondary","aria-label":e,title:t,...r,children:a??(0,Dd.jsx)(Me,{size:Lt.md})})}var ML='button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',zL=l.div`
  padding: var(--ig-space-9) var(--ig-space-10) var(--ig-space-10);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
  flex: 1;
  min-height: 0;
  overflow-y: auto;
`,AL={margin:0,lineHeight:"var(--ig-line-height-loose)"};function DL({title:e,description:t,children:a,actions:r,onClose:o,width:i="min(var(--ig-popup-3xl-mid), 100%)",height:n}){let s=(0,nr.useId)(),u=(0,nr.useRef)(null);return(0,nr.useEffect)(()=>{let d=document.activeElement;return u.current?.focus(),()=>d?.focus?.()},[]),(0,nr.useEffect)(()=>{let d=p=>{if(p.key==="Escape"&&o){p.stopPropagation(),o();return}if(p.key==="Tab"){let h=u.current;if(!h)return;let v=Array.from(h.querySelectorAll(ML)).filter(w=>w.offsetParent!==null);if(v.length===0){p.preventDefault(),h.focus();return}let y=v[0],b=v[v.length-1];p.shiftKey&&document.activeElement===y?(p.preventDefault(),b.focus()):!p.shiftKey&&document.activeElement===b&&(p.preventDefault(),y.focus())}};return window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d)},[o]),(0,ke.jsx)(kL,{onClick:()=>o?.(),children:(0,ke.jsxs)(ix,{ref:u,role:"dialog","aria-modal":"true","aria-labelledby":s,tabIndex:-1,onClick:d=>d.stopPropagation(),style:{width:i,...n?{height:n}:{}},children:[(0,ke.jsxs)(PL,{children:[(0,ke.jsx)(TL,{id:s,children:e}),o?(0,ke.jsx)(EL,{onClick:()=>o()}):null]}),(0,ke.jsxs)(zL,{children:[t?(0,ke.jsx)(r2,{as:"p",tone:"muted",style:AL,children:t}):null,a,r?(0,ke.jsx)(RL,{children:r}):null]})]})})}function BL({title:e,description:t,confirmLabel:a="Confirm",cancelLabel:r="Cancel",onConfirm:o,onCancel:i,confirmVariant:n="solid",danger:s=!1}){return(0,ke.jsx)(DL,{title:e,description:t,onClose:i,width:"min(var(--ig-popup-2xl-wide), 100%)",actions:(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(ao,{type:"button",variant:"secondary",onClick:i,children:r}),(0,ke.jsx)(ao,{type:"button",variant:n,tone:s?"danger":"default",onClick:o,children:a})]})})}var gR=l.div`
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
`,mR=l.div`
  padding: var(--ig-space-7) var(--ig-space-11);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`,hR=l.div`
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
`,vR=l.div`
  width: ${e=>e.$width};
  background-color: var(--ig-color-surface-panel);
  border-right: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  padding: var(--ig-space-5) 0;
  flex-shrink: 0;
  overflow-y: auto;
`,xR=l.div`
  flex: 1;
  padding: var(--ig-space-11);
  overflow-y: auto;
`;var yR=l.div`
  position: fixed;
  inset: 0;
  z-index: var(--ig-z-context-menu);
`,wR=l.div.attrs(e=>({style:{left:e.$x,top:e.$y}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 1);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,LR=l.div`
  position: relative;
  display: block;
  width: 100%;
`,SR=l.button`
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
`,CR=l.div.attrs(e=>({style:{left:e.$left,top:e.$top}}))`
  position: fixed;
  z-index: calc(var(--ig-z-context-menu) + 2);
  min-width: var(--ig-popup-2xs);
  padding: var(--ig-space-1) 0;
  ${ve}
  border-radius: var(--ig-radius-lg);
  overflow: hidden;
  box-shadow: var(--ig-shadow-popover);
`,IR=l.button`
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
`;var kR={minWidth:xi.xs,padding:"var(--ig-space-2)",display:"flex",flexDirection:"column",gap:"var(--ig-space-2px)"};var TR=l.span`
  display: inline-block;
  position: relative;
  transition: transform var(--ig-motion-fast);
  transform-origin: center;
  ${e=>e.$open&&e.$scale!==1&&`transform: scale(${e.$scale}); z-index: var(--ig-z-raised);`}
`;var $R=l.div`
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
`,ER=l.span`
  position: relative;
  display: inline-flex;
  align-items: center;
`;var MR={display:"inline-flex",alignItems:"center",justifyContent:"center",width:Lt.md,height:Lt.md,borderRadius:"var(--ig-radius-pill)",border:"var(--ig-border-1px) solid var(--ig-color-border-strong)",color:"var(--ig-color-text-muted)",fontSize:"var(--ig-font-size-3xs)",fontWeight:"var(--ig-font-weight-bold)",lineHeight:"var(--ig-line-height-none)",cursor:"help",background:"var(--ig-color-surface-raised)"};var _L=l.div`
  ${ve}
  width: ${e=>`${e.$width}px`};
  padding: var(--ig-space-5);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  box-shadow: var(--ig-shadow-popover);
  z-index: var(--ig-z-dropdown);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);
`,HL=(0,dx.forwardRef)(({anchor:e,width:t=xi.sm,style:a,...r},o)=>{let i=e?{position:"fixed",top:e.top,left:e.left,maxHeight:`calc(100vh - ${e.top}px - var(--ig-space-7))`,overflowY:"auto"}:void 0;return(0,cx.jsx)(_L,{ref:o,$width:t,style:{...i,...a},...r})});HL.displayName="FilterPopover";var DR=l.div`
  margin-bottom: var(--ig-space-5);
  &:last-child { margin-bottom: 0; }
`,BR=l.div`
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  text-transform: uppercase;
  letter-spacing: var(--ig-letter-spacing-wide);
`,FR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-3);
`;var OR={minWidth:xi.xs,borderRadius:"var(--ig-radius-sm)",overflow:"hidden"};var gx=(0,Qe.createContext)(null);function Ll(){let e=(0,Qe.useContext)(gx);if(!e)throw new Error("useConfirm must be used within a ConfirmProvider");return e}function mx({children:e}){let[t,a]=(0,Qe.useState)(null),r=(0,Qe.useRef)(null);r.current=t;let o=(0,Qe.useCallback)(s=>new Promise(u=>{a({options:s,resolve:u})}),[]),i=(0,Qe.useCallback)(s=>{let u=r.current;u&&(u.resolve(s),a(null))},[]),n=(0,Qe.useMemo)(()=>o,[o]);return(0,wl.jsxs)(gx.Provider,{value:n,children:[e,t?(0,wl.jsx)(BL,{title:t.options.title,description:t.options.description??"",confirmLabel:t.options.confirmLabel??"Confirm",cancelLabel:t.options.cancelLabel??"Cancel",danger:t.options.danger??!1,onConfirm:()=>i(!0),onCancel:()=>i(!1)}):null]})}var NR=l.div.attrs({tabIndex:0,role:"region"})`
  overflow-x: auto;
  &:focus-visible {
    outline: var(--ig-border-2px) solid var(--ig-color-accent-ring);
    outline-offset: var(--ig-space-neg-2px);
  }
`,_R=l.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`,VL=l.th`
  text-align: ${e=>e.$numeric?"right":"left"};
  padding: var(--ig-space-4) var(--ig-space-5);
  color: var(--ig-color-text-muted);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-medium);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,GL=l.td`
  padding: var(--ig-space-5);
  color: ${e=>e.$muted?"var(--ig-color-text-muted)":"var(--ig-color-text-secondary)"};
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  ${e=>e.$numeric&&"text-align: right; font-variant-numeric: tabular-nums;"}
  ${e=>e.$mono&&"font-family: var(--ig-font-mono); font-size: var(--ig-font-size-xs);"}
`,HR=l.tfoot`
  & td {
    font-weight: var(--ig-font-weight-semibold);
    color: var(--ig-color-text-primary);
    border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
    border-bottom: none;
  }
`,UR=l(VL)`width: var(--ig-control-height-md); padding: var(--ig-space-4) var(--ig-space-2);`,qR=l(GL)`width: var(--ig-control-height-md); padding: var(--ig-space-3) var(--ig-space-2);`,WR=l.span`
  position: absolute;
  width: var(--ig-space-1px);
  height: var(--ig-space-1px);
  padding: 0;
  margin: var(--ig-space-neg-1px);
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`,VR=l.button.attrs({type:"button","aria-label":"Reorder row"})`
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
`,XL=L`
  position: relative;
  z-index: var(--ig-z-sticky);
  box-shadow: var(--ig-shadow-menu);
  background: var(--ig-color-surface-raised);
`,YL=L`
  transition: transform var(--ig-motion-normal);
`,GR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transform: translateY(${e=>e.$yOffset}px);
  ${e=>e.$isDragging&&XL}
  ${e=>e.$isAnimating&&YL}
  &:hover {
    background: var(--ig-color-white-04);
  }
`,XR=l.tr`
  cursor: ${e=>e.$clickable?"pointer":"default"};
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var KR=l.section`
  ${Kt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
`,QR=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
`,KL=l.div`
  display: grid;
  grid-template-columns: ${e=>e.$columns?`repeat(${e.$columns}, minmax(0, 1fr))`:`repeat(auto-fit, minmax(min(${e.$minWidth}px, 100%), 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  min-width: 0;
`,JR=vx.default.forwardRef(function({minWidth:t=180,columns:a,gap:r=6,children:o,...i},n){return(0,xx.jsx)(KL,{ref:n,$minWidth:t,$columns:a,$gap:r,...i,children:o})}),QL=l.div`
  ${Kt}
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
`,t8=bx.default.forwardRef(function({selected:t,draggable:a,ariaLabel:r="Grid item",children:o,onClick:i,onKeyDown:n,...s},u){return(0,yx.jsx)(QL,{ref:u,$selected:t,role:"button",tabIndex:0,"aria-label":r,"aria-pressed":t,draggable:a,onClick:i,onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&i&&(p.preventDefault(),i(p)),n?.(p)},...s,children:o})}),r8=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-4);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-secondary);

  &:not(:last-child) {
    margin-bottom: var(--ig-space-2);
  }
`;var i8=l.div`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-3);
  color: var(--ig-color-text-secondary);
  font-size: var(--ig-font-size-xs);
`;var ZL={panel:Kt,card:Hd,raised:ve},JL=l.div`
  ${e=>ZL[e.$elevation]}
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
`;function Cx({elevation:e="panel",radius:t="var(--ig-radius-lg)",padding:a="var(--ig-space-6)",overflow:r="visible",flat:o=!1,border:i="default",tone:n="default",children:s,...u}){return(0,Sx.jsx)(JL,{$elevation:e,$radius:t,$padding:a,$overflow:r,$flat:o,$border:i,$tone:n,...u,children:s})}var eS=l.div`
  padding: var(--ig-space-3) var(--ig-space-4);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
`,tS=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,aS=l.span`
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
  margin-right: auto;
`,rS=l.div`
  font-size: var(--ig-font-size-xs);
  line-height: var(--ig-line-height-relaxed);
  white-space: pre-wrap;
  color: var(--ig-color-text-primary);
`,oS=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,iS=l.textarea`
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
`,nS=l.div`
  display: flex;
  justify-content: flex-end;
`,lS=l.button`
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
`;function Ix({author:e,timestamp:t,body:a,actions:r}){return(0,St.jsxs)(eS,{children:[(0,St.jsxs)(tS,{children:[(0,St.jsx)(aS,{children:e}),t&&(0,St.jsx)("span",{children:t}),r]}),(0,St.jsx)(rS,{children:a})]})}function io({value:e,onChange:t,onSubmit:a,placeholder:r="Add a comment...",submitLabel:o="Send",disabled:i,maxLength:n}){return(0,St.jsxs)(oS,{children:[(0,St.jsx)(iS,{value:e,onChange:s=>t(s.target.value),placeholder:r,maxLength:n,disabled:i,onKeyDown:s=>{s.key==="Enter"&&(s.ctrlKey||s.metaKey)&&a&&(s.preventDefault(),a())}}),a&&(0,St.jsx)(nS,{children:(0,St.jsx)(lS,{type:"button",disabled:i||!e.trim(),onClick:a,children:o})})]})}var sS=l.button`
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
`,uS=l.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,dS=l.span`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-soft);
`,cS=(0,kx.forwardRef)(({color:e,label:t,active:a=!1,count:r,type:o,...i},n)=>(0,to.jsxs)(sS,{ref:n,type:o??"button",$active:a,...i,children:[(0,to.jsx)(Rv,{$color:e,$size:"sm"}),(0,to.jsx)(uS,{children:t}),r!=null&&(0,to.jsx)(dS,{children:r})]}));cS.displayName="TagListItem";var d8=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-1);
  overflow-y: auto;
`;var f8=l.div`
  position: relative;
  width: 100%;
`,p8=l.input`
  width: 100%;
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-sm);
  background: var(--ig-color-surface-muted);
  color: var(--ig-color-text-primary);
  font-size: var(--ig-font-size-sm);
  &::placeholder { color: var(--ig-color-text-soft); }
  &:focus-visible { border-color: var(--ig-color-accent-ring); box-shadow: var(--ig-shadow-focus-ring); }
`,g8=l.div`
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
`,m8=l.div`
  padding: var(--ig-space-4);
  text-align: center;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-soft);
`,h8=l.button`
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
`;var x8=l.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,b8=l.div`
  transform: translate(${e=>e.$panX}px, ${e=>e.$panY}px) scale(${e=>e.$zoom});
  transform-origin: center center;
  transition: ${e=>(e.$zoom===1,"none")};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`,y8=l.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`,w8=(0,dr.createContext)(null);var S8=l.div`
  display: flex;
  flex-direction: ${e=>e.$direction==="horizontal"?"row":"column"};
  flex: 1;
  min-width: 0;
  min-height: 0;
`,C8=l.div`
  overflow: auto;
  min-width: 0;
  min-height: 0;
`,I8=l.div`
  flex-shrink: 0;
  ${e=>e.$direction==="horizontal"?"width: var(--ig-space-1); cursor: col-resize;":"height: var(--ig-space-1); cursor: row-resize;"}
  background: transparent;
  transition: background var(--ig-motion-fast);
  &:hover, &:active {
    background: var(--ig-color-accent-soft);
  }
`;var gS=l.button`
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
`,mS=(0,Rx.forwardRef)(({color:e,children:t,type:a,...r},o)=>(0,Il.jsxs)(gS,{ref:o,type:a??"button",...r,children:[e&&(0,Il.jsx)(Rv,{$color:e,$size:"xs"}),t]}));mS.displayName="ActionChip";var T8=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2px);
`,R8=l.kbd`
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
`;var E8=l.div`
  display: flex;
  gap: var(--ig-space-3);
  align-items: baseline;
  min-width: 0;
`,M8=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
  flex-shrink: 0;
  min-width: var(--ig-popup-3xs);
`,z8=l.span`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  flex-wrap: wrap;
`;var D8=l.li`
  padding: var(--ig-space-4) var(--ig-space-6);
  cursor: pointer;
  list-style: none;
  background: ${e=>e.$selected?"var(--ig-color-accent-soft-surface)":"transparent"};
  border-left: var(--ig-border-3px) solid ${e=>e.$selected?"var(--ig-color-accent)":"transparent"};
  transition: background-color var(--ig-motion-fast);
  &:hover {
    background: var(--ig-color-white-04);
  }
`;var F8=l.li`
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
`;var j8=l.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-2);
  padding: var(--ig-space-2) 0;
  background: none;
  border: none;
  cursor: pointer;
  user-select: none;
`;var xS=L`
  padding: var(--ig-space-3) var(--ig-space-7);
  border: none;
  background: transparent;
`,bS=L`
  padding: var(--ig-space-3) var(--ig-space-4);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-interactive);
`,yS=l.button`
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

  ${e=>e.$variant==="flat"?xS:bS}

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
`,wS=(0,Ax.forwardRef)(({variant:e="card",selected:t=!1,dragOver:a=!1,as:r="button",type:o,children:i,"data-ig-component":n,"data-ig-slot":s,...u},d)=>{let p="SelectableListItem";return(0,Dx.jsx)(yS,{as:r,ref:d,type:r==="button"?o??"button":void 0,$variant:e,$selected:t,$dragOver:a,"data-ig-component":p,"data-ig-layer":"components","data-ig-slot":s??(n&&n!==p?n:void 0),...u,children:i})});wS.displayName="SelectableListItem";var LS={height:"100%",background:"var(--ig-color-surface-panel)",overflow:"hidden"},SS={flexShrink:0},CS={flex:"1 1 0",overflowY:"auto",padding:"var(--ig-space-5)",borderBottom:"var(--ig-border-1px) solid var(--ig-color-border-subtle)"},IS=l.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
  padding: var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;function Fx({headerSlot:e,bodySlot:t,bodySectionTitle:a="Section",footerSlots:r,className:o}){return(0,rr.jsxs)(zd,{as:"aside",gap:0,className:o,style:LS,children:[(0,rr.jsx)(Xw,{style:SS,children:e}),t?(0,rr.jsxs)(zd,{gap:3,style:CS,children:[(0,rr.jsx)(Xh,{size:"var(--ig-font-size-sm)",weight:"semibold",tone:"muted",uppercase:!0,letterSpacing:"normal",children:a}),t]}):null,r?.map((i,n)=>i?(0,rr.jsx)(IS,{children:i},n):null)]})}var U8=l.section`
  display: flex;
  flex-direction: column;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var W8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio};
  background: linear-gradient(
      ${vl.diagonal},
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
`;var X8=l.button`
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
`,Y8=l.div`
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
`;var Q8=l.div`
  position: relative;
  aspect-ratio: ${e=>e.$ratio??"auto"};
  background:
    linear-gradient(
      ${vl.diagonal},
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
`;var J8=l.aside`
  flex: ${e=>e.$width==="auto"?"1":e.$collapsed?"0 0 0":`0 0 ${e.$width}px`};
  width: ${e=>e.$width==="auto"?"auto":e.$collapsed?"0":`${e.$width}px`};
  min-width: 0;
  overflow: hidden;
  ${e=>e.$bg&&`background: ${e.$bg};`}
  ${e=>e.$collapsed&&"transition: flex-basis var(--ig-motion-fast), width var(--ig-motion-fast);"}
`;var t$=l.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  > * {
    pointer-events: auto;
  }
`;var RS=l.button`
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
`,$S=l.span`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2px);
  min-width: 0;
  font-size: var(--ig-font-size-sm);
`,ES=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,MS=l.span`
  font-size: var(--ig-font-size-xs);
  white-space: nowrap;
  flex-shrink: 0;
`,zS=(0,Ux.forwardRef)(({primary:e,secondary:t,actionLabel:a,type:r,...o},i)=>(0,or.jsxs)(RS,{ref:i,type:r??"button",...o,children:[(0,or.jsxs)($S,{children:[(0,or.jsx)("span",{children:e}),t!=null&&(0,or.jsx)(ES,{children:t})]}),(0,or.jsx)(MS,{children:a})]}));zS.displayName="OptionRow";var o$=l.span`
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
`,n$=l.div`
  font-family: var(--ig-font-mono);
  font-size: var(--ig-font-size-xs);
  padding: var(--ig-space-4);
  background: var(--ig-color-surface-raised);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  border-radius: var(--ig-radius-xs);
  color: var(--ig-color-text-primary);
  user-select: all;
  word-break: break-all;
`;var s$=l.table`
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
`,u$=l.td`
  background: color-mix(in srgb, var(--ig-color-accent) ${e=>Math.round((.08+e.$intensity*.55)*100)}%, transparent);
  border-radius: var(--ig-radius-2xs);
  font-size: var(--ig-font-size-xs);
  color: ${e=>e.$intensity>.5?"var(--ig-color-text-primary)":"var(--ig-color-text-secondary)"};
  text-align: center;
  padding: var(--ig-space-2) var(--ig-space-3);
  font-variant-numeric: tabular-nums;
  min-width: var(--ig-control-height-2xl-wide);
`;var c$=l.table`
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
`;var p$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-2xs-narrow), 1fr));
  gap: var(--ig-space-5);
`,g$=l.div`
  ${Kt}
  border-radius: var(--ig-radius-lg);
  padding: var(--ig-space-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ig-space-4);
  color: var(--ig-color-text-secondary);
`,m$=l.div`
  width: var(--ig-control-height-lg);
  height: var(--ig-control-height-lg);
  border-radius: var(--ig-radius-md);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--ig-color-accent-soft-surface);
  color: var(--ig-color-accent-soft);
`,h$=l.div`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
  word-break: break-word;
`;var v$={fill:"var(--ig-color-text-soft)",fontSize:parseInt(D.size3xs,10),fontWeight:D.weightMedium},b$=l.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: var(--ig-space-4) var(--ig-space-6);
`;var w$=l.div`
  margin-bottom: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-bold);
  color: var(--ig-color-text-primary);
`;var S$=l.div`
  ${jw}
  height: 100%;
  min-height: 0;
`,C$=l.header`
  ${Nw}
  flex-shrink: 0;

  ${De.md} {
    padding: var(--ig-space-6) var(--ig-space-7) var(--ig-space-5);
  }
`,I$=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-7);
  flex-wrap: wrap;
`,k$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,P$=l.h1`
  margin: 0;
  font-size: var(--ig-font-size-2xl);
  font-weight: var(--ig-font-weight-bold);
  letter-spacing: var(--ig-letter-spacing-heading);

  ${De.md} {
    font-size: var(--ig-font-size-xl);
  }
`,T$=l.p`
  margin: 0;
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-muted);
`,R$=l.div`
  ${_w}
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-8);

  ${De.md} {
    padding: var(--ig-space-5) var(--ig-space-6) var(--ig-space-7);
    gap: var(--ig-space-5);
  }
`,OS=l.section`
  ${Kt}
  border-radius: var(--ig-radius-xl);
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,$$=l.div`
  padding: var(--ig-space-7) var(--ig-space-8) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,E$=l.h2`
  margin: 0;
  font-size: var(--ig-font-size-md);
  font-weight: var(--ig-font-weight-bold);
`,M$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,z$=l.h3`
  margin: 0 0 var(--ig-space-5);
  font-size: var(--ig-font-size-lg);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-primary);
`,jS=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
  flex-wrap: wrap;
  padding: var(--ig-space-6) var(--ig-space-7);
  border-radius: var(--ig-radius-lg);
  border: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-toolbar-surface);
`,A$=l(jS)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto;
  align-items: center;

  ${De.md} {
    grid-template-columns: 1fr;
  }
`,D$=l(OS)`
  padding: var(--ig-space-8);
  gap: var(--ig-space-6);
`,B$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  min-width: 0;
`,F$=l.label`
  font-size: var(--ig-font-size-sm);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,O$=l.span`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,N$=l.div`
  display: grid;
  grid-template-columns: ${e=>`${e.$hasSidebar?`minmax(0, ${e.$sidebarWidth}) `:""}minmax(0, 1fr)${e.$hasInspector?` minmax(0, ${e.$inspectorWidth})`:""}`};
  gap: var(--ig-space-7);
  min-width: 0;

  ${De.lg} {
    grid-template-columns: 1fr;
  }
`;var _$=l.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--ig-popup-sm-narrow), 1fr));
  gap: var(--ig-space-7);
`,H$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-sm), var(--ig-popup-lg)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${De.lg} {
    grid-template-columns: 1fr;
  }
`,U$=l.div`
  display: grid;
  grid-template-columns: minmax(var(--ig-popup-xs), var(--ig-popup-sm)) minmax(0, 1fr);
  gap: var(--ig-space-7);
  min-width: 0;

  ${De.lg} {
    grid-template-columns: 1fr;
  }
`,q$=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(var(--ig-popup-sm), var(--ig-popup-lg));
  gap: var(--ig-space-7);
  min-width: 0;

  ${De.lg} {
    grid-template-columns: 1fr;
  }
`,V$=l.nav`
  ${Kt}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-3);
`,G$=l.aside`
  ${Kt}
  width: ${e=>typeof e.$width=="number"?`${e.$width}px`:e.$width??"var(--ig-popup-sm)"};
  min-width: 0;
  min-height: 0;
  border-radius: var(--ig-radius-2xl);
  padding: var(--ig-space-8) var(--ig-space-7);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-7);
`,X$=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,Y$=l.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,K$=l.div`
  ${Hh}
  padding: var(--ig-space-6) var(--ig-space-8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-5);
`,Q$=l.aside`
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
`,J$=l.aside`
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
  ${De.md} {
    display: none;
  }
  overflow: hidden;
  container-type: inline-size;
  container-name: sidebar-shell;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`,Qx=l.div`
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
`,eE=l.span`
  display: inline-flex;
  align-items: center;
  ${e=>!e.$expanded&&`
    transition: opacity var(--ig-motion-fast);
    ${Qx}:hover & { opacity: 0; }
  `}
`,tE=l.span`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-color-text-muted);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--ig-motion-fast);
  ${Qx}:hover & {
    opacity: 1;
    color: var(--ig-color-text-primary);
  }
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,aE=l.button`
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
`,rE=l.div`
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  & svg { width: var(--ig-icon-lg); height: var(--ig-icon-lg); flex-shrink: 0; }
`,oE=l.nav`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: var(--ig-space-5) 0;
  gap: var(--ig-space-1);
  min-height: 0;
`,Zx=`
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
`,iE=l.a`
  ${Zx}
  /* react-router NavLink auto-applies "active" class + aria-current="page". */
  &.active,
  &[aria-current='page'] {
    color: var(--ig-color-accent-soft);
    background: var(--ig-color-focus-bg-soft);
  }
`,nE=l.span`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  color: var(--ig-color-text-muted);
  svg { width: var(--ig-icon-md); height: var(--ig-icon-md); }
`,lE=l.div`
  display: flex;
  flex-direction: column;
  padding-left: var(--ig-space-7);
  gap: var(--ig-space-1);
  @container sidebar-shell (max-width: 100px) {
    padding-left: 0;
  }
`,sE=l.button`
  ${Zx}
`,uE=l.div`
  display: flex;
  flex-direction: column;
  padding: var(--ig-space-5) 0;
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  gap: var(--ig-space-1);
  flex-shrink: 0;
`,dE=l.span`
  display: contents;
`;var fE=l.div`
  position: ${e=>e.$positioning};
  inset: 0;
  z-index: var(--ig-z-modal);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${De.md} {
    justify-content: flex-start;
  }
`,pE=l.div`
  position: absolute;
  inset: 0;
  background: var(--ig-color-modal-backdrop);
  z-index: var(--ig-z-hidden);
  cursor: default;
`,gE=l.div`
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
  ${De.md} {
    width: 100vw;
    max-width: 100vw;
    height: 100dvh;
    max-height: 100dvh;
    border-radius: 0;
    border: 0;
  }
`,mE=l.div`
  flex: 1;
  min-width: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-bg-canvas);
`,hE=l.div`
  position: absolute;
  top: var(--ig-space-3);
  right: var(--ig-space-7);
  z-index: var(--ig-z-sticky-plus);
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
`,vE=l.div`
  width: var(--ig-space-1);
  flex-shrink: 0;
  cursor: col-resize;
  background: transparent;
  &:hover { background: var(--ig-color-white-08); }
`,xE=l.aside.attrs(e=>({style:{width:`${e.$width}px`}}))`
  flex-shrink: 0;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  background: var(--ig-color-surface-raised);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,bE=xi.md;var HS=11;var US=3,yE=HS+US*2;var LE=l.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  background: var(--ig-color-bg-canvas);
  display: flex;
  align-items: center;
  justify-content: center;
`,SE=l.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform: ${e=>`translate(${e.$panX}px, ${e.$panY}px) scale(${e.$zoom})`};
  transform-origin: center center;
`,CE=l.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  aspect-ratio: ${e=>e.$aspect};
  flex-shrink: 0;
`,IE=l.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
  user-select: none;
`,kE=l.div`
  position: absolute;
  inset: 0;
  z-index: var(--ig-z-capture);
`;var $E=l.div`
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
`,EE=l.span`
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
`;var ME=l.div`
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
`,zE=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-4);
`,AE=l.strong`
  font-size: var(--ig-font-size-sm);
  color: var(--ig-color-text-primary);
`,DE=l.code`
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,BE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
`,FE=l.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--ig-space-3);
  margin-bottom: var(--ig-space-5);
`,OE=l(Ra).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,jE=l.label`
  display: grid;
  grid-template-columns: var(--ig-control-height-3xl-plus) minmax(0, 1fr) var(--ig-control-height-2xl);
  align-items: center;
  gap: var(--ig-space-3);
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
`,NE=l(Ra).attrs({size:"sm",type:"number"})`
  width: var(--ig-control-height-2xl);
  height: var(--ig-control-height-xs);
  padding: 0 var(--ig-space-3);
  text-align: right;
  font-family: var(--ig-font-mono);
`,_E=l.input`
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
`,HE=l.div`
  display: flex;
  justify-content: flex-end;
  margin-top: var(--ig-space-5);
  padding-top: var(--ig-space-4);
  border-top: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`;var UE=l.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
`,qE=l.span`
  font-size: var(--ig-font-size-xs);
  font-weight: var(--ig-font-weight-semibold);
  color: var(--ig-color-text-muted);
`,WE=l.div`
  display: grid;
  grid-template-columns: var(--ig-control-height-sm) minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--ig-space-3);
`,VE=l.button`
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
`,GE=l(Ra).attrs({size:"sm"})`
  min-width: 0;
  font-family: var(--ig-font-mono);
  text-transform: lowercase;
`,XE=l(ao).attrs({variant:"secondary",size:"sm"})`
  white-space: nowrap;
`;var KE=l.section`
  ${ve}
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--ig-radius-lg);
  ${e=>e.$tone==="danger"&&`
    background: var(--ig-color-alert-danger-bg);
    border-color: var(--ig-color-alert-danger-border);
  `}
`,QE=l.h3`
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
`,ZE=l.div`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-4);
  padding: var(--ig-space-5);
`;var eM=l.label`
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
`,tM=l.div`
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
`;var rM=l.section`
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-2);
  padding: var(--ig-space-3) 0;
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  &:last-child {
    border-bottom: none;
  }
`;var iM=l.label`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-2);
  padding: var(--ig-space-1) var(--ig-space-2);
  border-radius: var(--ig-radius-xs);
  cursor: pointer;
  &:hover {
    background: var(--ig-color-surface-interactive-hover);
  }
`;var lM=l.div`
  ${Hd}
  border-radius: var(--ig-radius-xl);
  padding: var(--ig-space-8);
  display: flex;
  flex-direction: column;
  gap: var(--ig-space-6);
  min-width: 0;
`,sM=l.div`
  width: 100%;
  height: ${e=>`${e.$height}px`};
  min-width: 0;
  min-height: ${e=>`${e.$height}px`};
`;function p0({children:e,className:t}){return(0,f0.jsx)(zd,{gap:3,className:t,children:e})}var dM=l.div`
  position: absolute;
  top: ${e=>`${e.$top}px`};
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: ${e=>`repeat(${e.$columns}, minmax(0, 1fr))`};
  gap: ${e=>`var(--ig-space-${e.$gap})`};
  padding: 0 var(--ig-space-1);
`;var fM=new URL("./assets/favicon.ico","http://localhost/").href,pM=new URL("./assets/favicon.png","http://localhost/").href,gM=new URL("./assets/brand-mark.png","http://localhost/").href,mM=new URL("./assets/ingradient_logo_l_white.png","http://localhost/").href;var hM=l.img`
  display: block;
  max-width: 100%;
  height: auto;
`;function QS(){try{if(typeof Eh<"u"&&Eh.env?.DEV)return!0}catch{}return globalThis.process?.env?.NODE_ENV==="development"}var Rh=(...e)=>{},$h=QS(),vM={debug:$h?console.debug.bind(console):Rh,log:$h?console.log.bind(console):Rh,info:console.info.bind(console),warn:console.warn.bind(console),error:console.error.bind(console)};var bM=kw.canvasExportBg;var Qt=c(C(),1);function x0(e){let[,t]=(0,Qt.useReducer)(a=>a+1,0);(0,Qt.useEffect)(()=>e.subscribe(t),[e])}function no(e){let[t,a]=(0,Qt.useState)(null);return(0,Qt.useEffect)(()=>{if(!e){a(null);return}let r=0,o=()=>a(e.getBoundingClientRect()),i=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",i,{passive:!0,capture:!0}),window.addEventListener("resize",i,{passive:!0}),o(),()=>{cancelAnimationFrame(r),window.removeEventListener("scroll",i,{capture:!0}),window.removeEventListener("resize",i)}},[e]),t}function b0(){let[,e]=(0,Qt.useReducer)(t=>t+1,0);(0,Qt.useEffect)(()=>{let t=0,a=()=>{cancelAnimationFrame(t),t=requestAnimationFrame(e)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a,{passive:!0}),()=>{cancelAnimationFrame(t),window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[])}var $a=c(C(),1);var w0=c(m(),1),ZS=500,JS=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px dashed var(--ig-color-accent);
  background: color-mix(in srgb, var(--ig-color-accent) 7%, transparent);
  border-radius: var(--ig-radius-sm);
`,Pl=e=>e instanceof Element&&e.id!==Kr&&e!==document.documentElement&&e!==document.body;function y0({active:e,onPick:t}){let[a,r]=(0,$a.useState)(null),o=no(a),i=(0,$a.useRef)({x:-1,y:-1}),n=(0,$a.useRef)(e);return n.current=e,(0,$a.useEffect)(()=>{e||r(null)},[e]),(0,$a.useEffect)(()=>{let s=b=>{if(i.current={x:b.clientX,y:b.clientY},!n.current||!Pl(b.target)){r(null);return}r(b.target)},u=0,d=()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(!n.current||i.current.x<0){r(null);return}let b=document.elementFromPoint(i.current.x,i.current.y);r(Pl(b)?b:null)})},p=b=>{!n.current||!Pl(b.target)||(b.preventDefault(),r(null),t(b.target,b.clientX,b.clientY))},h,v=()=>clearTimeout(h),y=b=>{if(!n.current||b.touches.length!==1)return;let{clientX:w,clientY:M}=b.touches[0];h=setTimeout(()=>{let g=document.elementFromPoint(w,M);Pl(g)&&t(g,w,M)},ZS)};return document.addEventListener("mousemove",s),document.addEventListener("scroll",d,{passive:!0,capture:!0}),document.addEventListener("contextmenu",p,!0),document.addEventListener("touchstart",y,{passive:!0}),document.addEventListener("touchmove",v,{passive:!0}),document.addEventListener("touchend",v),document.addEventListener("touchcancel",v),()=>{cancelAnimationFrame(u),v(),document.removeEventListener("mousemove",s),document.removeEventListener("scroll",d,{capture:!0}),document.removeEventListener("contextmenu",p,!0),document.removeEventListener("touchstart",y),document.removeEventListener("touchmove",v),document.removeEventListener("touchend",v),document.removeEventListener("touchcancel",v)}},[t]),o?(0,w0.jsx)(JS,{className:"fbw-hoverbox",style:{left:o.left-2,top:o.top-2,width:o.width,height:o.height}}):null}var L0=c(m(),1),eC=l.div`
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
`;function yc({el:e}){let t=no(e);return t?(0,L0.jsx)(eC,{className:"fbw-selectbox",style:{left:t.left-2,top:t.top-2,width:t.width,height:t.height}}):null}var S0=c(C(),1);var $={toggleOn:"Turn on comment mode",toggleOff:"Turn off comment mode",toggleHintOn:"Comment mode on \u2014 right-click (long-press) to comment",target:"Comment target",composerTitle:"New comment",composerTarget:"Target",namePlaceholder:"Your name (remembered)",nameAria:"Author name",composerPlaceholder:"Leave a comment on this spot\u2026",post:"Post",thread:"Comment",replyPlaceholder:"Write a reply\u2026",reply:"Reply",archive:"Archive",unarchive:"Unarchive",archivedBadge:"Archived",close:"Close",deleteThreadAria:"Delete thread",deleteCommentAria:"Delete comment",editCommentAria:"Edit comment",save:"Save",deleteThreadTitle:"Delete this comment thread?",deleteCommentTitle:"Delete this comment?",deleteLastCommentHint:"This is the last comment \u2014 the thread will be deleted.",delete:"Delete",cancel:"Cancel",tab:"Comments",listTitle:"Comments",openSection:"Open",showArchived:e=>`Show archived (${e})`,hideArchived:e=>`Hide archived (${e})`,emptyLine1:"No comments yet.",emptyLine2:"Right-click any element (long-press on mobile).",copy:"Copy",copied:"Copied!",copyFailed:"Copy failed",downloadJson:"Download JSON",replies:"replies",compare:"Compare",compareDisabledHint:"No version recorded for this thread",before:"Before",after:"After",current:"current",versionChipTitle:"Set as compare baseline (Before)",defaultAuthor:"Guest"};var cr=c(m(),1),Tl="#f59e0b",tC=l.button`
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
  background: ${Tl};
  color: #1f2937;
  font-size: var(--ig-font-size-2xs);
  font-weight: var(--ig-font-weight-bold);
  box-shadow: var(--ig-shadow-raised);

  &:hover {
    background: var(--ig-color-accent);
    color: var(--ig-color-on-accent);
  }
`,aC=l.div`
  position: fixed;
  pointer-events: none;
  border: 2px solid ${Tl};
  background: color-mix(in srgb, ${Tl} 12%, transparent);
  border-radius: var(--ig-radius-sm);

  &::after {
    content: attr(data-label);
    position: absolute;
    top: -22px;
    left: -2px;
    padding: 2px 8px;
    border-radius: var(--ig-radius-sm);
    background: ${Tl};
    color: #1f2937;
    font-size: var(--ig-font-size-2xs);
    font-weight: var(--ig-font-weight-bold);
    white-space: nowrap;
  }
`;function C0({store:e,onPinClick:t}){b0();let[a,r]=(0,S0.useState)(null),o=new Map,i=[];return e.list().forEach((n,s)=>{if(n.resolved||n.anchor.page!==location.pathname)return;let u=ka(n.anchor);if(!u)return;let d=u.getBoundingClientRect();if(d.bottom<0||d.top>window.innerHeight)return;let p=Math.max(16,d.right-4),h=Math.max(16,d.top+4),v=`${Math.round(p/8)}:${Math.round(h/8)}`,y=o.get(v)??0;o.set(v,y+1);let b=p-y*28,w=b>=16?b:p+y*28;i.push((0,cr.jsx)(tC,{className:"fbw-pin",type:"button",title:mi(n),style:{left:w,top:h},onMouseEnter:()=>r({rect:u.getBoundingClientRect(),label:`${$.thread} ${s+1}`}),onMouseLeave:()=>r(null),onClick:()=>t(n.id),children:s+1},n.id))}),(0,cr.jsxs)(cr.Fragment,{children:[i,a&&(0,cr.jsx)(aC,{className:"fbw-pin-hoverbox","data-label":a.label,style:{left:a.rect.left-2,top:a.rect.top-2,width:a.rect.width,height:a.rect.height}})]})}var wc=c(C(),1);var lo=c(C(),1);var I0=c(m(),1),rC=340,oC=l.div`
  position: fixed;
  width: ${rC}px;
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
`;function Rl({targetEl:e,point:t,children:a}){let r=(0,lo.useRef)(null),o=no(e??null),[i,n]=(0,lo.useState)(null);return(0,lo.useLayoutEffect)(()=>{let s=r.current;if(!s)return;let u=s.getBoundingClientRect(),d;if(o){let p=Math.min(Math.max(12,o.left),window.innerWidth-u.width-12),h=o.bottom+8,v=h+u.height>window.innerHeight?Math.max(12,o.top-u.height-8):h;d={left:p,top:v}}else t?d={left:Math.max(12,Math.min(t.x,window.innerWidth-u.width-12)),top:Math.max(12,Math.min(t.y,window.innerHeight-u.height-12))}:d={left:Math.max(12,window.innerWidth-u.width-336),top:90};n(p=>p&&p.left===d.left&&p.top===d.top?p:d)}),(0,I0.jsx)(oC,{ref:r,style:i?{left:i.left,top:i.top}:{visibility:"hidden"},children:a})}var $l=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
`,El=l.span`
  font-weight: var(--ig-font-weight-bold);
  font-size: var(--ig-font-size-sm);
  margin-right: auto;
`;var Dt=c(m(),1),iC=l.div`
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;function k0({store:e,el:t,anchor:a,point:r,onClose:o,onSaved:i}){let[n,s]=(0,wc.useState)(""),[u,d]=(0,wc.useState)(e.author),p=()=>{let h=n.trim();if(!h)return;let v=u.trim()||$.defaultAuthor;e.author=v;let y=new Date().toISOString(),b={id:Ja(),createdAt:y,anchor:a,resolved:!1,comments:[{id:Ja(),author:v,body:h,createdAt:y,version:ut.version}],meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};e.addThread(b),i(b)};return(0,Dt.jsxs)(Rl,{targetEl:t,point:r,children:[(0,Dt.jsxs)($l,{className:"fbw-composer",children:[(0,Dt.jsx)(El,{children:$.composerTitle}),(0,Dt.jsx)(Pe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:o,children:(0,Dt.jsx)(Me,{size:16})})]}),(0,Dt.jsxs)(iC,{children:[$.composerTarget,": ",a.textSnippet||a.selector]}),(0,Dt.jsx)(Ra,{size:"sm",placeholder:$.namePlaceholder,"aria-label":$.nameAria,value:u,onChange:h=>d(h.target.value)}),(0,Dt.jsx)(io,{value:n,onChange:s,onSubmit:p,placeholder:$.composerPlaceholder,submitLabel:$.post})]})}var Li=c(C(),1);var Ze=c(m(),1),nC=l.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  background: var(--ig-color-surface-panel);
`,lC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-4);
  padding: var(--ig-space-3) var(--ig-space-5);
  border-bottom: var(--ig-border-1px) solid var(--ig-color-border-subtle);
`,P0=l.span`
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
`,sC=l.div`
  flex: 1;
  display: flex;
  gap: 2px;
  background: var(--ig-color-border-subtle);

  @media (max-width: 767px) {
    flex-direction: column;
  }
`,T0=l.iframe`
  flex: 1;
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
`,R0=(e,t)=>`${e}${t}?fbw=embed`;function $0({beforeVersion:e,anchor:t,onClose:a}){let r=o=>{o.currentTarget.contentWindow?.postMessage({type:"fbw:jump",anchor:t},"*")};return(0,Ze.jsxs)(nC,{className:"fbw-compare",children:[(0,Ze.jsxs)(lC,{children:[(0,Ze.jsxs)(P0,{children:[$.before," ",(0,Ze.jsx)("code",{children:e})]}),(0,Ze.jsxs)(P0,{children:[$.after," ",(0,Ze.jsx)("code",{children:ut.version??$.current})]}),(0,Ze.jsx)(Pe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:a,children:(0,Ze.jsx)(Me,{size:16})})]}),(0,Ze.jsxs)(sC,{children:[(0,Ze.jsx)(T0,{className:"fbw-compare-before",title:$.before,src:R0(ut.compareBase,t.page),onLoad:r}),(0,Ze.jsx)(T0,{className:"fbw-compare-after",title:$.after,src:R0(location.origin,t.page),onLoad:r})]})]})}var Lc=c(C(),1);var M0=c(m(),1),uC=l.button`
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
`;function E0({version:e,changed:t,active:a,onSelect:r}){return(0,M0.jsx)(uC,{type:"button",className:"fbw-verchip",title:$.versionChipTitle,$changed:t,$active:a,onClick:()=>r(e),children:e})}var Je=c(m(),1),dC=l.span`
  display: inline-flex;
  align-items: center;
  gap: var(--ig-space-1);
`,cC=l.div`
  display: flex;
  justify-content: flex-start;
`,fC=e=>new Date(e).toLocaleDateString("en-US",{month:"short",day:"numeric"});function z0({store:e,thread:t,comment:a,prevVersion:r,baseline:o,onSelectBaseline:i}){let n=Ll(),[s,u]=(0,Lc.useState)(!1),[d,p]=(0,Lc.useState)(a.body),h=()=>{let y=d.trim();y&&(e.updateComment(t.id,a.id,y),u(!1))},v=async()=>{let y=t.comments.length===1;await n({title:$.deleteCommentTitle,description:y?$.deleteLastCommentHint:a.body,confirmLabel:$.delete,cancelLabel:$.cancel,danger:!0})&&e.removeComment(t.id,a.id)};return s?(0,Je.jsxs)("div",{children:[(0,Je.jsx)(io,{value:d,onChange:p,onSubmit:h,submitLabel:$.save}),(0,Je.jsx)(cC,{children:(0,Je.jsx)(sr,{tone:"muted",onClick:()=>{u(!1),p(a.body)},children:$.cancel})})]}):(0,Je.jsx)(Ix,{author:a.author,timestamp:fC(a.createdAt),body:a.body,actions:(0,Je.jsxs)(dC,{children:[a.version&&(0,Je.jsx)(E0,{version:a.version,changed:r!==void 0&&a.version!==r,active:a.version===o,onSelect:i}),(0,Je.jsx)(Pe,{variant:"ghost",size:"sm","aria-label":$.editCommentAria,onClick:()=>u(!0),children:(0,Je.jsx)(Zr,{size:14})}),(0,Je.jsx)(Pe,{variant:"ghost",size:"sm",tone:"danger","aria-label":$.deleteCommentAria,onClick:v,children:(0,Je.jsx)(Pa,{size:14})})]})})}var fe=c(m(),1),pC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;function A0({store:e,thread:t,number:a,onClose:r}){let[o,i]=(0,Li.useState)(""),[n,s]=(0,Li.useState)(e.author),[u,d]=(0,Li.useState)(t.comments[0]?.version),[p,h]=(0,Li.useState)(!1),v=t.anchor.page===location.pathname?ka(t.anchor):null,y=()=>{let b=o.trim();if(!b)return;let w=n.trim()||$.defaultAuthor;e.author=w,e.addComment(t.id,w,b,ut.version),i("")};return(0,fe.jsxs)(Rl,{targetEl:v,children:[(0,fe.jsxs)($l,{className:"fbw-thread",children:[(0,fe.jsxs)(El,{children:[$.thread," ",a]}),t.resolved&&(0,fe.jsx)(wi,{$tone:"success",children:$.archivedBadge}),(0,fe.jsx)(Pe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:r,children:(0,fe.jsx)(Me,{size:16})})]}),(0,fe.jsx)(p0,{children:t.comments.map((b,w)=>(0,fe.jsx)(z0,{store:e,thread:t,comment:b,prevVersion:w>0?t.comments[w-1].version:void 0,baseline:u,onSelectBaseline:d},b.id))}),!e.author&&(0,fe.jsx)(Ra,{size:"sm",placeholder:$.namePlaceholder,"aria-label":$.nameAria,value:n,onChange:b=>s(b.target.value)}),(0,fe.jsx)(io,{value:o,onChange:i,onSubmit:y,placeholder:$.replyPlaceholder,submitLabel:$.reply}),(0,fe.jsxs)(pC,{children:[(0,fe.jsx)(sr,{tone:t.resolved?"muted":"accent",iconLeading:(0,fe.jsx)(Qr,{size:14}),onClick:()=>e.setResolved(t.id,!t.resolved),children:t.resolved?$.unarchive:$.archive}),(0,fe.jsx)(sr,{tone:"accent",iconLeading:(0,fe.jsx)(er,{size:14}),disabled:!u,title:u?void 0:$.compareDisabledHint,onClick:()=>h(!0),children:$.compare})]}),p&&u&&(0,fe.jsx)($0,{beforeVersion:u,anchor:t.anchor,onClose:()=>h(!1)})]})}var Sc=c(C(),1);function D0(e,t){return JSON.stringify({project:e,schemaVersion:2,exportedAt:new Date().toISOString(),threads:t},null,2)}function B0(e,t){let a=new Blob([D0(e,t)],{type:"application/json"}),r=URL.createObjectURL(a),o=document.createElement("a");o.href=r,o.download=`comments-${e}-${new Date().toISOString().slice(0,10)}.json`,o.click(),URL.revokeObjectURL(r)}async function F0(e,t){try{return await navigator.clipboard.writeText(D0(e,t)),!0}catch{return!1}}var dt=c(m(),1),mC=l.div`
  display: flex;
  align-items: center;
  gap: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`,hC=l.span`
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
`,vC=l.span`
  margin-left: auto;
`,xC=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-xs);
  word-break: keep-all;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,bC=l.div`
  margin-top: var(--ig-space-2);
  font-size: var(--ig-font-size-2xs);
  color: var(--ig-color-text-muted);
`;function O0({store:e,thread:t,number:a,onSelect:r}){let o=Ll(),i=async s=>{s.stopPropagation(),await o({title:$.deleteThreadTitle,description:mi(t),confirmLabel:$.delete,cancelLabel:$.cancel,danger:!0})&&e.removeThread(t.id)},n=t.comments.length-1;return(0,dt.jsxs)(Cx,{className:"fbw-card",padding:"var(--ig-space-4)",style:{cursor:"pointer"},onClick:()=>r(t),children:[(0,dt.jsxs)(mC,{children:[(0,dt.jsx)(hC,{children:a}),(0,dt.jsx)("span",{children:nh(t)}),t.resolved&&(0,dt.jsx)(wi,{$tone:"success",children:$.archivedBadge}),(0,dt.jsx)(vC,{}),(0,dt.jsx)(Pe,{variant:"ghost",size:"sm",tone:"danger","aria-label":$.deleteThreadAria,onClick:i,children:(0,dt.jsx)(Pa,{size:14})})]}),(0,dt.jsx)(xC,{children:mi(t)}),(0,dt.jsxs)(bC,{children:[t.anchor.page,n>0&&` \xB7 ${n} ${$.replies}`]})]})}var oe=c(m(),1),yC=320,wC=l.button`
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
`,LC=l.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${yC}px;
  border-left: var(--ig-border-1px) solid var(--ig-color-border-subtle);
  box-shadow: var(--ig-shadow-overlay);
  transform: translateX(${e=>e.$open?"0":"100%"});
  transition: transform 0.2s;
`,SC=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--ig-space-4) var(--ig-space-5);
  font-weight: var(--ig-font-weight-bold);
`,CC=l.div`
  padding: var(--ig-space-6) 0;
  font-size: var(--ig-font-size-xs);
  color: var(--ig-color-text-muted);
  text-align: center;
`,IC=l.div`
  display: flex;
  gap: var(--ig-space-3);
  & > * {
    flex: 1;
  }
`;function j0({store:e,open:t,onOpenChange:a,onOpenThread:r}){let[o,i]=(0,Sc.useState)(null),[n,s]=(0,Sc.useState)(!1),u=e.list(),d=u.filter(w=>!w.resolved),p=u.filter(w=>w.resolved),h=w=>u.findIndex(M=>M.id===w.id)+1,v=w=>{if(!hi(w.anchor)){ph(w.anchor);return}setTimeout(()=>r(w.id),450)},y=async()=>{i(await F0(e.project,e.exportList())?$.copied:$.copyFailed),setTimeout(()=>i(null),1500)},b=w=>w.map(M=>(0,oe.jsx)(O0,{store:e,thread:M,number:h(M),onSelect:v},M.id));return(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsxs)(wC,{className:"fbw-sidetab",type:"button",onClick:()=>a(!t),children:[$.tab," ",u.length]}),(0,oe.jsx)(LC,{$open:t,className:"fbw-sidebar",children:(0,oe.jsx)(Fx,{headerSlot:(0,oe.jsxs)(SC,{children:[(0,oe.jsxs)("span",{children:[$.listTitle," (",u.length,")"]}),(0,oe.jsx)(Pe,{variant:"ghost",size:"sm","aria-label":$.close,onClick:()=>a(!1),children:(0,oe.jsx)(Me,{size:16})})]}),bodySectionTitle:$.openSection,bodySlot:d.length===0?(0,oe.jsxs)(CC,{children:[$.emptyLine1,(0,oe.jsx)("br",{}),$.emptyLine2]}):b(d),footerSlots:[p.length>0&&(0,oe.jsxs)(oe.Fragment,{children:[(0,oe.jsx)(sr,{tone:"muted",onClick:()=>s(w=>!w),children:n?$.hideArchived(p.length):$.showArchived(p.length)}),n&&b(p)]}),(0,oe.jsxs)(IC,{children:[(0,oe.jsx)(ao,{variant:"secondary",size:"sm",onClick:y,children:o??$.copy}),(0,oe.jsx)(ao,{variant:"solid",size:"sm",onClick:()=>B0(e.project,e.exportList()),children:$.downloadJson})]})]})})]})}var Zt=c(m(),1),N0=l.button`
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
`,kC=l.span`
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

  ${N0}:hover + & {
    opacity: 1;
  }
`,PC=l.span`
  position: absolute;
  top: -4px;
  right: -4px;
`;function _0({store:e}){let t=e.list().length;return(0,Zt.jsxs)(Zt.Fragment,{children:[(0,Zt.jsxs)(N0,{className:"fbw-toggle",type:"button",$on:e.enabled,"aria-label":e.enabled?$.toggleOff:$.toggleOn,onClick:()=>e.setEnabled(!e.enabled),children:["\u{1F4AC}",t>0&&(0,Zt.jsx)(PC,{children:(0,Zt.jsx)(Nv,{children:t})})]}),(0,Zt.jsx)(kC,{children:e.enabled?$.toggleHintOn:$.toggleOn})]})}var Ct=c(m(),1);function H0({store:e}){x0(e);let[t,a]=(0,Si.useState)(null),[r,o]=(0,Si.useState)(!1),i=e.enabled;(0,Si.useEffect)(()=>{i||(a(null),o(!1))},[i]);let n=t?.kind==="thread"?e.find(t.id):void 0,s=n?e.list().findIndex(d=>d.id===n.id)+1:0,u=n&&n.anchor.page===location.pathname?ka(n.anchor):null;return(0,Ct.jsxs)(mx,{children:[i&&(0,Ct.jsx)(y0,{active:!t,onPick:(d,p,h)=>{let v=e.list().find(y=>!y.resolved&&y.anchor.page===location.pathname&&ka(y.anchor)===d);if(v){a({kind:"thread",id:v.id});return}a({kind:"draft",el:d,anchor:fh(d),point:{x:p,y:h}})}}),i&&(0,Ct.jsx)(C0,{store:e,onPinClick:d=>a({kind:"thread",id:d})}),t?.kind==="draft"&&(0,Ct.jsx)(yc,{el:t.el}),u&&(0,Ct.jsx)(yc,{el:u}),t?.kind==="draft"&&(0,Ct.jsx)(k0,{store:e,el:t.el,anchor:t.anchor,point:t.point,onClose:()=>a(null),onSaved:d=>{a({kind:"thread",id:d.id}),o(!0)}}),n&&(0,Ct.jsx)(A0,{store:e,thread:n,number:s,onClose:()=>a(null)}),i&&(0,Ct.jsx)(j0,{store:e,open:r,onOpenChange:o,onOpenThread:d=>a({kind:"thread",id:d})}),(0,Ct.jsx)(_0,{store:e})]})}var Cc=c(m(),1),TC=2147483e3;function RC(e){return e.replaceAll(":root, :root[data-theme='dark']",":host").replaceAll(":root[data-theme='light']",":host").replaceAll(":root",":host")}var $C=`
.fbw-root {
  font-family: var(--ig-font-sans);
  font-size: 14px; line-height: 1.5;
  color: var(--ig-color-text-primary);
  /* host\uB294 none \u2014 \uC704\uC82F UI\uB294 \uC5EC\uAE30\uC11C \uB418\uC0B4\uB9B0\uB2E4. \uC624\uBC84\uB808\uC774(hover/select \uBC15\uC2A4)\uB294 \uAC1C\uBCC4\uB85C none */
  pointer-events: auto;
}
.fbw-root *, .fbw-root *::before, .fbw-root *::after { box-sizing: border-box; }
`;function U0(){if(ut.embed){mh();return}if(document.getElementById(Kr))return;let e=document.createElement("div");e.id=Kr,e.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${TC};`;let t=e.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=RC(ih)+$C;let r=document.createElement("div"),o=document.createElement("div");o.className="fbw-root",t.append(a,r,o),document.body.appendChild(e);let i=new ul(ut.project);(0,q0.createRoot)(o).render((0,Cc.jsx)(th,{target:r,children:(0,Cc.jsx)(H0,{store:i})})),ut.seedUrl&&typeof fetch=="function"&&fetch(ut.seedUrl).then(n=>n.ok?n.json():null).then(n=>{Array.isArray(n?.threads)&&i.seed(n.threads)}).catch(()=>{}),gh()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",U0):U0();})();
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
