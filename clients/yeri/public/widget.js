"use strict";(()=>{var o={z:2147483e3,color:{panel:"#ffffff",panelDark:"#1f2937",text:"#111827",subtext:"#6b7280",line:"#e5e7eb",accent:"#2563eb",accentSoft:"#dbeafe",danger:"#dc2626",pin:"#f59e0b",onDark:"#ffffff",statusWait:"#6b7280",statusDoing:"#d97706",statusDone:"#16a34a",statusAsk:"#dc2626"},radius:{panel:"12px",field:"8px",pill:"999px"},font:'-apple-system, BlinkMacSystemFont, "Pretendard", "Malgun Gothic", sans-serif',shadow:"0 8px 28px rgba(0, 0, 0, 0.22)",sidebarW:"320px"};var A="fbw:author",v=class{constructor(t){this.project=t;this.items=[];this.seedItems=[];this.overrides={};this.listeners=new Set;this._enabled=!1;try{this.items=JSON.parse(localStorage.getItem(this.itemsKey)??"[]"),this.overrides=JSON.parse(localStorage.getItem(this.overridesKey)??"{}")}catch{this.items=[],this.overrides={}}this._enabled=sessionStorage.getItem(this.modeKey)==="1"}get itemsKey(){return`fbw:${this.project}`}get overridesKey(){return`fbw:overrides:${this.project}`}get modeKey(){return`fbw:mode:${this.project}`}get enabled(){return this._enabled}setEnabled(t){this._enabled=t,sessionStorage.setItem(this.modeKey,t?"1":"0"),this.notify()}list(){return[...this.seedItems,...this.items]}exportList(){return[...this.seedItems.filter(t=>this.overrides[t.id]),...this.items]}seed(t){let e=new Set(this.items.map(n=>n.id));this.seedItems=t.filter(n=>!e.has(n.id)&&!this.overrides[n.id]?.hidden).map(n=>({...n,...this.overrides[n.id],origin:"seed"})),this.notify()}add(t){this.items.push(t),this.persist()}remove(t){if(this.seedItems.some(e=>e.id===t)){this.overrides[t]={...this.overrides[t],hidden:!0},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.seedItems=this.seedItems.filter(e=>e.id!==t),this.notify();return}this.items=this.items.filter(e=>e.id!==t),this.persist()}update(t,e){if(this.seedItems.some(n=>n.id===t)){this.overrides[t]={...this.overrides[t],...e},localStorage.setItem(this.overridesKey,JSON.stringify(this.overrides)),this.seedItems=this.seedItems.map(n=>n.id===t?{...n,...e}:n),this.notify();return}this.items=this.items.map(n=>n.id===t?{...n,...e}:n),this.persist()}get author(){return localStorage.getItem(A)??""}set author(t){localStorage.setItem(A,t)}subscribe(t){return this.listeners.add(t),()=>this.listeners.delete(t)}persist(){localStorage.setItem(this.itemsKey,JSON.stringify(this.items)),this.notify()}notify(){this.listeners.forEach(t=>t())}};var S="fbw-host",T="fbw:pending-jump",ne=i=>typeof globalThis.CSS?.escape=="function"?CSS.escape(i):i.replace(/[^\w-]/g,"\\$&");function re(i){let t=[],e=i;for(;e&&e!==document.body&&e!==document.documentElement;){if(e.id)return t.unshift(`#${ne(e.id)}`),t.join(" > ");let n=e.parentElement;if(!n)break;let r=e.tagName.toLowerCase(),l=Array.from(n.children).filter(s=>s.tagName===e.tagName);t.unshift(l.length>1?`${r}:nth-of-type(${l.indexOf(e)+1})`:r),e=n}return t.unshift("body"),t.join(" > ")}function q(i){return{page:location.pathname,selector:re(i),textSnippet:(i.textContent??"").trim().slice(0,40),scrollY:Math.round(window.scrollY)}}function y(i){try{let r=document.querySelector(i.selector);if(r)return r}catch{}let t=i.textSnippet.slice(0,20).trim();if(!t)return null;let e=document.createTreeWalker(document.body,NodeFilter.SHOW_ELEMENT),n;for(;n=e.nextNode();){let r=n;if(r.id!==S&&r.childElementCount===0&&(r.textContent??"").trim().includes(t))return r}return null}function ie(i,t=2500){let e=i.style;if(!e)return;let n={outline:e.outline,offset:e.outlineOffset};e.outline=`3px solid ${o.color.accent}`,e.outlineOffset="3px",setTimeout(()=>{e.outline=n.outline,e.outlineOffset=n.offset},t)}function C(i){if(i.page!==location.pathname)return!1;let t=y(i);return t?(t.scrollIntoView?.({behavior:"smooth",block:"center"}),setTimeout(()=>ie(t),350)):window.scrollTo({top:i.scrollY,behavior:"smooth"}),!0}function N(i){sessionStorage.setItem(T,JSON.stringify(i)),location.assign(i.page)}function O(){let i=sessionStorage.getItem(T);if(i){sessionStorage.removeItem(T);try{let t=JSON.parse(i);setTimeout(()=>C(t),400)}catch{}}}var z=`
.fbw-toggle {
  position: fixed; left: 16px; bottom: 16px;
  width: 52px; height: 52px; border: none; border-radius: ${o.radius.pill};
  background: ${o.color.panelDark}; color: ${o.color.onDark};
  font-size: 22px; cursor: pointer; pointer-events: auto;
  box-shadow: ${o.shadow}; transition: background 0.15s;
}
.fbw-toggle.fbw-on { background: ${o.color.accent}; }
.fbw-toggle-badge {
  position: absolute; top: -4px; right: -4px;
  min-width: 20px; height: 20px; padding: 0 5px;
  border-radius: ${o.radius.pill}; background: ${o.color.pin};
  color: ${o.color.text}; font-size: 11px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
}
.fbw-toggle-label {
  position: fixed; left: 76px; bottom: 28px; padding: 4px 10px;
  border-radius: ${o.radius.field}; background: ${o.color.panelDark};
  color: ${o.color.onDark}; font-size: 12px; pointer-events: none;
  opacity: 0; transition: opacity 0.15s;
}
.fbw-toggle:hover + .fbw-toggle-label { opacity: 1; }
`;function B(i){let t=document.createElement("div"),e=document.createElement("button");e.type="button",e.className="fbw-toggle";let n=document.createElement("span");n.className="fbw-toggle-label";let r=()=>{e.classList.toggle("fbw-on",i.enabled),e.setAttribute("aria-label",i.enabled?"\uD53C\uB4DC\uBC31 \uBAA8\uB4DC \uB044\uAE30":"\uD53C\uB4DC\uBC31 \uBAA8\uB4DC \uCF1C\uAE30"),n.textContent=i.enabled?"\uD53C\uB4DC\uBC31 \uBAA8\uB4DC \uCF1C\uC9D0 \u2014 \uC6B0\uD074\uB9AD(\uAE38\uAC8C \uB204\uB974\uAE30)\uC73C\uB85C \uC791\uC131":"\uD53C\uB4DC\uBC31 \uBAA8\uB4DC \uCF1C\uAE30";let l=i.list().length;if(e.innerHTML="\u{1F4AC}",l>0){let s=document.createElement("span");s.className="fbw-toggle-badge",s.textContent=String(l),e.appendChild(s)}};return e.addEventListener("click",()=>i.setEnabled(!i.enabled)),i.subscribe(r),r(),t.append(e,n),t}var D=`
.fbw-hoverbox {
  position: fixed; display: none; pointer-events: none;
  border: 2px dashed ${o.color.accent};
  background: rgba(37, 99, 235, 0.07); border-radius: 4px;
}
`,se=500;function R(i,t,e,n){let r=document.createElement("div");r.className="fbw-hoverbox",i.appendChild(r);let l=a=>a instanceof Element&&a!==t&&a!==document.documentElement&&a!==document.body,s=a=>{let b=a.getBoundingClientRect();r.style.display="block",r.style.left=`${b.left-2}px`,r.style.top=`${b.top-2}px`,r.style.width=`${b.width}px`,r.style.height=`${b.height}px`},c=()=>r.style.display="none",u=()=>!e.enabled||!!i.querySelector(".fbw-form"),m=-1,p=-1;document.addEventListener("mousemove",a=>{if(m=a.clientX,p=a.clientY,u()||!l(a.target)){c();return}s(a.target)});let f=0;document.addEventListener("scroll",()=>{cancelAnimationFrame(f),f=requestAnimationFrame(()=>{if(u()||m<0){c();return}let a=document.elementFromPoint(m,p);l(a)?s(a):c()})},{passive:!0,capture:!0}),document.addEventListener("contextmenu",a=>{!e.enabled||!l(a.target)||(a.preventDefault(),r.style.display="none",n(a.target,a.clientX,a.clientY))},!0);let d,h=()=>clearTimeout(d);document.addEventListener("touchstart",a=>{if(!e.enabled||a.touches.length!==1)return;let{clientX:b,clientY:g}=a.touches[0];d=setTimeout(()=>{let w=document.elementFromPoint(b,g);l(w)&&n(w,b,g)},se)},{passive:!0}),document.addEventListener("touchmove",h,{passive:!0}),document.addEventListener("touchend",h),document.addEventListener("touchcancel",h),e.subscribe(()=>{e.enabled||(r.style.display="none")})}var $=["\uBB38\uAD6C","\uB514\uC790\uC778","\uAD6C\uC870","\uC815\uBCF4","\uAE30\uB2A5","\uC624\uB958"];var j=()=>globalThis.crypto?.randomUUID?.()??`id-${Date.now()}-${Math.random().toString(36).slice(2,10)}`;var Y=`
.fbw-selectbox {
  position: fixed; pointer-events: none;
  border: 2px solid ${o.color.accent};
  background: rgba(37, 99, 235, 0.12); border-radius: 4px;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.15);
}
.fbw-selectbox::after {
  content: "\uD53C\uB4DC\uBC31 \uB300\uC0C1"; position: absolute; top: -22px; left: -2px;
  padding: 2px 8px; border-radius: 4px;
  background: ${o.color.accent}; color: ${o.color.onDark};
  font-size: 11px; font-weight: 700; white-space: nowrap;
}
`,E=null;function J(){E?.()}function I(i,t){E?.();let e=document.createElement("div");e.className="fbw-selectbox",i.appendChild(e);let n=!0,r=0,l=()=>{if(!n)return;let c=t.getBoundingClientRect();e.style.left=`${c.left-2}px`,e.style.top=`${c.top-2}px`,e.style.width=`${c.width}px`,e.style.height=`${c.height}px`},s=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(l)};window.addEventListener("scroll",s,{passive:!0,capture:!0}),window.addEventListener("resize",s,{passive:!0}),l(),E=()=>{n=!1,cancelAnimationFrame(r),window.removeEventListener("scroll",s,{capture:!0}),window.removeEventListener("resize",s),e.remove(),E=null}}var M=`
.fbw-form {
  position: fixed; width: 300px; padding: 14px; pointer-events: auto;
  background: ${o.color.panel}; border: 1px solid ${o.color.line};
  border-radius: ${o.radius.panel}; box-shadow: ${o.shadow};
  display: flex; flex-direction: column; gap: 8px;
}
.fbw-form h4 { margin: 0; font-size: 14px; color: ${o.color.text}; }
.fbw-form .fbw-target {
  font-size: 11px; color: ${o.color.subtext}; white-space: nowrap;
  overflow: hidden; text-overflow: ellipsis;
}
.fbw-form textarea, .fbw-form select, .fbw-form input {
  width: 100%; padding: 8px 10px; font-size: 13px; font-family: inherit;
  border: 1px solid ${o.color.line}; border-radius: ${o.radius.field};
  background: ${o.color.panel}; color: ${o.color.text};
}
.fbw-form textarea { min-height: 70px; resize: vertical; }
.fbw-form textarea.fbw-error { border-color: ${o.color.danger}; }
.fbw-form .fbw-row { display: flex; gap: 8px; }
.fbw-form .fbw-actions { display: flex; gap: 8px; justify-content: flex-end; }
.fbw-btn {
  padding: 7px 14px; font-size: 13px; font-weight: 600; cursor: pointer;
  border: 1px solid ${o.color.line}; border-radius: ${o.radius.field};
  background: ${o.color.panel}; color: ${o.color.text};
}
.fbw-btn-primary { background: ${o.color.accent}; border-color: ${o.color.accent}; color: ${o.color.onDark}; }
`;function H(i,t){i.querySelector(".fbw-form")?.remove();let e=document.createElement("div");e.className="fbw-form",e.innerHTML=`
    <h4></h4>
    <div class="fbw-target"></div>
    <textarea placeholder="\uC694\uCCAD \uB0B4\uC6A9\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694 (\uBB38\uAD6C \uC218\uC815\uC740 \uBC14\uAFC0 \uBB38\uC7A5\uC744 \uADF8\uB300\uB85C)"></textarea>
    <div class="fbw-row">
      <select data-role="type">${$.map(p=>`<option>${p}</option>`).join("")}</select>
      <select data-role="priority">
        <option value="A">A (\uAF2D)</option>
        <option value="B">B (\uAC00\uB2A5\uD558\uBA74)</option>
        <option value="C">C (\uC544\uC774\uB514\uC5B4)</option>
      </select>
    </div>
    <input type="text" data-role="author" placeholder="\uC791\uC131\uC790 \uC774\uB984 (\uC120\uD0DD)" />
    <div class="fbw-actions">
      <button type="button" class="fbw-btn" data-role="cancel">\uCDE8\uC18C</button>
      <button type="button" class="fbw-btn fbw-btn-primary" data-role="save">\uC800\uC7A5</button>
    </div>
  `,e.querySelector("h4").textContent=t.title,e.querySelector(".fbw-target").textContent=`\u{1F4CD} ${t.targetText}`;let n=e.querySelector("textarea"),r=e.querySelector("[data-role=type]"),l=e.querySelector("[data-role=priority]"),s=e.querySelector("[data-role=author]"),c=e.querySelector("[data-role=cancel]"),u=e.querySelector("[data-role=save]");n.value=t.initial.content,r.value=t.initial.type,l.value=t.initial.priority,s.value=t.initial.author,t.cancelLabel&&(c.textContent=t.cancelLabel);let m=()=>{J(),e.remove()};if(c.addEventListener("click",m),t.onDelete){let p=document.createElement("button");p.type="button",p.className="fbw-btn fbw-btn-danger",p.style.marginRight="auto",p.textContent="\uC0AD\uC81C",p.addEventListener("click",async()=>{await t.onDelete()&&m()}),e.querySelector(".fbw-actions").prepend(p)}u.addEventListener("click",()=>{let p=n.value.trim();if(!p){n.classList.add("fbw-error"),n.focus();return}m(),t.onSubmit({content:p,type:r.value,priority:l.value,author:s.value.trim()})}),i.appendChild(e),t.position(e),n.focus()}var _=`
.fbw-modal-backdrop {
  position: fixed; inset: 0; pointer-events: auto;
  background: rgba(17, 24, 39, 0.45);
  display: flex; align-items: center; justify-content: center;
}
.fbw-modal {
  width: 300px; max-width: calc(100vw - 40px); padding: 18px;
  background: ${o.color.panel}; border-radius: ${o.radius.panel};
  box-shadow: ${o.shadow};
  display: flex; flex-direction: column; gap: 12px;
}
.fbw-modal h4 { margin: 0; font-size: 14px; color: ${o.color.text}; }
.fbw-modal p {
  margin: 0; font-size: 13px; color: ${o.color.subtext};
  word-break: keep-all; overflow: hidden; display: -webkit-box;
  -webkit-line-clamp: 2; -webkit-box-orient: vertical;
}
.fbw-modal .fbw-actions { display: flex; gap: 8px; justify-content: flex-end; }
.fbw-btn-danger { background: ${o.color.danger}; border-color: ${o.color.danger}; color: ${o.color.onDark}; }
`;function k(i,t){return new Promise(e=>{i.querySelector(".fbw-modal-backdrop")?.remove();let n=document.createElement("div");n.className="fbw-modal-backdrop",n.innerHTML=`
      <div class="fbw-modal" role="alertdialog">
        <h4></h4>
        ${t.detail?"<p></p>":""}
        <div class="fbw-actions">
          <button type="button" class="fbw-btn" data-role="cancel">\uCDE8\uC18C</button>
          <button type="button" class="fbw-btn fbw-btn-danger" data-role="confirm"></button>
        </div>
      </div>
    `,n.querySelector("h4").textContent=t.title,t.detail&&(n.querySelector("p").textContent=t.detail),n.querySelector("[data-role=confirm]").textContent=t.confirmLabel;let r=l=>{n.remove(),e(l)};n.querySelector("[data-role=cancel]").addEventListener("click",()=>r(!1)),n.querySelector("[data-role=confirm]").addEventListener("click",()=>r(!0)),n.addEventListener("click",l=>{l.target===n&&r(!1)}),i.appendChild(n),n.querySelector("[data-role=cancel]").focus()})}function ae(i,t){let e=t.getBoundingClientRect(),n=i.getBoundingClientRect(),r=Math.min(Math.max(12,e.left),window.innerWidth-n.width-12),l=e.bottom+8,s=l+n.height>window.innerHeight?Math.max(12,e.top-n.height-8):l;i.style.left=`${r}px`,i.style.top=`${s}px`}function K(i,t,e,n,r,l){let s=q(e);I(i,e),H(i,{title:"\uD53C\uB4DC\uBC31 \uC791\uC131",targetText:s.textSnippet||s.selector,initial:{content:"",type:$[0],priority:"B",author:t.author},position:c=>{let u=c.getBoundingClientRect();c.style.left=`${Math.min(n,window.innerWidth-u.width-12)}px`,c.style.top=`${Math.min(r,window.innerHeight-u.height-12)}px`},onSubmit:c=>{c.author&&(t.author=c.author);let u={id:j(),createdAt:new Date().toISOString(),author:c.author||"\uACE0\uAC1D",anchor:s,type:c.type,priority:c.priority,content:c.content,status:"\uB300\uAE30",meta:{userAgent:navigator.userAgent,viewport:`${window.innerWidth}x${window.innerHeight}`}};t.add(u),l(u)}})}function F(i,t,e){let n=e.anchor.page===location.pathname?y(e.anchor):null;n&&I(i,n),H(i,{title:"\uD53C\uB4DC\uBC31 \uC218\uC815",targetText:e.anchor.textSnippet||e.anchor.page,initial:{content:e.content,type:e.type,priority:e.priority,author:e.author},cancelLabel:"\uB2EB\uAE30",position:r=>{if(n)return ae(r,n);r.style.right=`calc(${o.sidebarW} + 16px)`,r.style.top="90px"},onDelete:async()=>{let r=await k(i,{title:"\uC774 \uD53C\uB4DC\uBC31\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?",detail:e.content,confirmLabel:"\uC0AD\uC81C"});return r&&t.remove(e.id),r},onSubmit:r=>{t.update(e.id,{content:r.content,type:r.type,priority:r.priority,author:r.author||e.author})}})}var U=`
.fbw-pin {
  position: fixed; min-width: 24px; height: 24px; padding: 0 6px;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; justify-content: center;
  border: none; border-radius: ${o.radius.pill}; cursor: pointer; pointer-events: auto;
  background: ${o.color.pin}; color: ${o.color.text};
  font-size: 12px; font-weight: 700; box-shadow: ${o.shadow};
}
.fbw-pin:hover { background: ${o.color.accent}; color: ${o.color.onDark}; }
.fbw-pin-hoverbox {
  position: fixed; display: none; pointer-events: none;
  border: 2px solid ${o.color.pin};
  background: rgba(245, 158, 11, 0.12); border-radius: 4px;
}
.fbw-pin-hoverbox::after {
  content: attr(data-label); position: absolute; top: -22px; left: -2px;
  padding: 2px 8px; border-radius: 4px;
  background: ${o.color.pin}; color: ${o.color.text};
  font-size: 11px; font-weight: 700; white-space: nowrap;
}
`;function W(i,t,e){let n=document.createElement("div");i.appendChild(n);let r=document.createElement("div");r.className="fbw-pin-hoverbox",i.appendChild(r);let l=!1,s=(p,f)=>{let d=p.getBoundingClientRect();r.setAttribute("data-label",f),r.style.display="block",r.style.left=`${d.left-2}px`,r.style.top=`${d.top-2}px`,r.style.width=`${d.width}px`,r.style.height=`${d.height}px`},c=()=>r.style.display="none",u=()=>{if(n.textContent="",c(),!t.enabled)return;let p=new Map;t.list().forEach((f,d)=>{if(f.anchor.page!==location.pathname)return;let h=y(f.anchor);if(!h)return;let a=h.getBoundingClientRect();if(a.bottom<0||a.top>window.innerHeight)return;let b=Math.max(16,a.right-4),g=Math.max(16,a.top+4),w=`${Math.round(b/8)}:${Math.round(g/8)}`,L=p.get(w)??0;p.set(w,L+1);let x=document.createElement("button");x.type="button",x.className="fbw-pin",x.textContent=String(d+1),x.title=f.content;let P=b-L*28;x.style.left=`${P>=16?P:b+L*28}px`,x.style.top=`${g}px`,x.addEventListener("mouseenter",()=>s(h,`\uD53C\uB4DC\uBC31 ${d+1}`)),x.addEventListener("mouseleave",c),x.addEventListener("click",()=>e(f.id)),n.appendChild(x)})},m=()=>{l||(l=!0,requestAnimationFrame(()=>{l=!1,u()}))};window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("resize",m,{passive:!0}),t.subscribe(m),u()}function X(i,t){return JSON.stringify({project:i,exportedAt:new Date().toISOString(),items:t},null,2)}function V(i,t){let e=new Blob([X(i,t)],{type:"application/json"}),n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=`feedback-${i}-${new Date().toISOString().slice(0,10)}.json`,r.click(),URL.revokeObjectURL(n)}async function G(i,t){try{return await navigator.clipboard.writeText(X(i,t)),!0}catch{return!1}}var Q=`
.fbw-sidetab {
  position: fixed; right: 0; top: 50%; transform: translateY(-50%);
  padding: 10px 8px; border: none; border-radius: ${o.radius.field} 0 0 ${o.radius.field};
  background: ${o.color.accent}; color: ${o.color.onDark};
  font-size: 12px; font-weight: 700; writing-mode: vertical-rl;
  cursor: pointer; pointer-events: auto; box-shadow: ${o.shadow};
}
.fbw-sidebar {
  position: fixed; top: 0; right: 0; bottom: 0; width: ${o.sidebarW};
  background: ${o.color.panel}; border-left: 1px solid ${o.color.line};
  box-shadow: ${o.shadow}; pointer-events: auto;
  display: flex; flex-direction: column;
  transform: translateX(100%); transition: transform 0.2s;
}
.fbw-sidebar.fbw-open { transform: translateX(0); }
.fbw-sb-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 16px; border-bottom: 1px solid ${o.color.line};
  font-size: 14px; font-weight: 700; color: ${o.color.text};
}
.fbw-sb-close { border: none; background: none; font-size: 16px; cursor: pointer; color: ${o.color.subtext}; }
.fbw-sb-list { flex: 1; overflow-y: auto; padding: 8px; display: flex; flex-direction: column; gap: 8px; }
.fbw-sb-empty { padding: 24px 16px; font-size: 13px; color: ${o.color.subtext}; text-align: center; }
.fbw-card {
  padding: 10px 12px; border: 1px solid ${o.color.line};
  border-radius: ${o.radius.field}; cursor: pointer; background: ${o.color.panel};
}
.fbw-card:hover { border-color: ${o.color.accent}; background: ${o.color.accentSoft}; }
.fbw-card-focus { border-color: ${o.color.accent}; background: ${o.color.accentSoft}; box-shadow: 0 0 0 2px ${o.color.accentSoft}; }
.fbw-card-top { display: flex; align-items: center; gap: 6px; font-size: 11px; color: ${o.color.subtext}; }
.fbw-card-num {
  min-width: 18px; height: 18px; border-radius: ${o.radius.pill};
  background: ${o.color.pin}; color: ${o.color.text};
  font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center;
}
.fbw-card-status { margin-left: auto; font-weight: 700; }
.fbw-card-edit, .fbw-card-del {
  border: none; background: none; cursor: pointer; padding: 0 2px;
  font-size: 13px; color: ${o.color.subtext};
}
.fbw-card-edit:hover { color: ${o.color.accent}; }
.fbw-card-del:hover { color: ${o.color.danger}; }
.fbw-card-body { margin-top: 5px; font-size: 13px; color: ${o.color.text}; word-break: keep-all; }
.fbw-card-page { margin-top: 4px; font-size: 11px; color: ${o.color.subtext}; }
.fbw-sb-foot { padding: 12px 16px; border-top: 1px solid ${o.color.line}; display: flex; gap: 8px; }
.fbw-sb-foot .fbw-btn { flex: 1; }
`,le={\uB300\uAE30:o.color.statusWait,"\uC9C4\uD589 \uC911":o.color.statusDoing,\uC644\uB8CC:o.color.statusDone,"\uD655\uC778 \uD544\uC694":o.color.statusAsk};function Z(i,t){let e=document.createElement("button");e.type="button",e.className="fbw-sidetab";let n=document.createElement("div");n.className="fbw-sidebar",n.innerHTML=`
    <div class="fbw-sb-head"><span data-role="title"></span>
      <button type="button" class="fbw-sb-close" aria-label="\uB2EB\uAE30">\u2715</button></div>
    <div class="fbw-sb-list"></div>
    <div class="fbw-sb-foot">
      <button type="button" class="fbw-btn" data-role="copy">\uBCF5\uC0AC</button>
      <button type="button" class="fbw-btn fbw-btn-primary" data-role="download">JSON \uB0B4\uB824\uBC1B\uAE30</button>
    </div>
  `;let r=n.querySelector(".fbw-sb-list"),l=n.querySelector("[data-role=title]"),s=()=>n.classList.add("fbw-open"),c=()=>n.classList.remove("fbw-open");e.addEventListener("click",()=>n.classList.contains("fbw-open")?c():s()),n.querySelector(".fbw-sb-close").addEventListener("click",c),n.querySelector("[data-role=download]").addEventListener("click",()=>V(t.project,t.exportList()));let u=n.querySelector("[data-role=copy]");u.addEventListener("click",async()=>{u.textContent=await G(t.project,t.exportList())?"\uBCF5\uC0AC\uB428!":"\uBCF5\uC0AC \uC2E4\uD328",setTimeout(()=>u.textContent="\uBCF5\uC0AC",1500)});let m=()=>{let f=t.list();if(e.textContent=`\uD53C\uB4DC\uBC31 ${f.length}`,e.style.display=t.enabled?"block":"none",t.enabled||c(),l.textContent=`\uD53C\uB4DC\uBC31 \uBAA9\uB85D (${f.length})`,r.textContent="",f.length===0){r.innerHTML='<div class="fbw-sb-empty">\uC544\uC9C1 \uD53C\uB4DC\uBC31\uC774 \uC5C6\uC2B5\uB2C8\uB2E4.<br/>\uD398\uC774\uC9C0 \uC694\uC18C\uC5D0 \uC6B0\uD074\uB9AD(\uBAA8\uBC14\uC77C: \uAE38\uAC8C \uB204\uB974\uAE30)\uD574 \uBCF4\uC138\uC694.</div>';return}f.forEach((d,h)=>{let a=document.createElement("div");a.className="fbw-card",a.dataset.id=d.id,a.innerHTML=`
        <div class="fbw-card-top">
          <span class="fbw-card-num">${h+1}</span>
          <span>${d.type} \xB7 ${d.priority}</span>
          <span class="fbw-card-status" style="color:${le[d.status]}">${d.status}</span>
          <button type="button" class="fbw-card-edit" title="\uC218\uC815" aria-label="\uD53C\uB4DC\uBC31 \uC218\uC815">\u270E</button>
          <button type="button" class="fbw-card-del" title="\uC0AD\uC81C" aria-label="\uD53C\uB4DC\uBC31 \uC0AD\uC81C">\u{1F5D1}</button>
        </div>
        <div class="fbw-card-body"></div>
        <div class="fbw-card-page">${d.anchor.page} \xB7 ${d.author}</div>
      `,a.querySelector(".fbw-card-body").textContent=d.content,a.addEventListener("click",()=>{if(!C(d.anchor)){N(d.anchor);return}setTimeout(()=>F(i,t,d),450)}),a.querySelector(".fbw-card-edit")?.addEventListener("click",b=>{b.stopPropagation(),F(i,t,d)}),a.querySelector(".fbw-card-del")?.addEventListener("click",async b=>{b.stopPropagation(),await k(i,{title:"\uC774 \uD53C\uB4DC\uBC31\uC744 \uC0AD\uC81C\uD560\uAE4C\uC694?",detail:d.content,confirmLabel:"\uC0AD\uC81C"})&&t.remove(d.id)}),r.appendChild(a)})},p=f=>{s();let d=r.querySelector(`[data-id="${f}"]`);d&&(d.scrollIntoView?.({block:"center"}),d.classList.add("fbw-card-focus"),setTimeout(()=>d.classList.remove("fbw-card-focus"),1600))};return t.subscribe(m),m(),i.append(e,n),{open:s,focus:p}}var ce=`
.fbw-root {
  font-family: ${o.font}; font-size: 14px; line-height: 1.5;
  color: ${o.color.text};
}
.fbw-root * { box-sizing: border-box; }
`,oe=document.currentScript??document.querySelector("script[data-project]"),de=oe?.dataset.project??"default",ee=oe?.dataset.seed;function te(){if(document.getElementById(S))return;let i=document.createElement("div");i.id=S,i.style.cssText=`position:fixed;inset:0;pointer-events:none;z-index:${o.z};`;let t=i.attachShadow({mode:"open"}),e=document.createElement("style");e.textContent=ce+z+D+Y+M+U+Q+_;let n=document.createElement("div");n.className="fbw-root",t.append(e,n),document.body.appendChild(i);let r=new v(de);n.appendChild(B(r));let l=Z(n,r);W(n,r,s=>l.focus(s)),R(n,i,r,(s,c,u)=>K(n,r,s,c,u,()=>l.open())),ee&&typeof fetch=="function"&&fetch(ee).then(s=>s.ok?s.json():null).then(s=>{Array.isArray(s?.items)&&r.seed(s.items)}).catch(()=>{}),O()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",te):te();})();
