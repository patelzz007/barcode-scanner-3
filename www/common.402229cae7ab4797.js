"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{9673:(y,h,i)=>{i.d(h,{c:()=>r});var d=i(6393),l=i(9951),c=i(6535);const r=(o,n)=>{let e,t;const f=(a,p,E)=>{if(typeof document>"u")return;const w=document.elementFromPoint(a,p);w&&n(w)?w!==e&&(s(),u(w,E)):s()},u=(a,p)=>{e=a,t||(t=e);const E=e;(0,d.w)(()=>E.classList.add("ion-activated")),p()},s=(a=!1)=>{if(!e)return;const p=e;(0,d.w)(()=>p.classList.remove("ion-activated")),a&&t!==e&&e.click(),e=void 0};return(0,c.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>f(a.currentX,a.currentY,l.a),onMove:a=>f(a.currentX,a.currentY,l.b),onEnd:()=>{s(!0),(0,l.h)(),t=void 0}})}},1836:(y,h,i)=>{i.d(h,{g:()=>l});var d=i(1848);const l=()=>{if(void 0!==d.w)return d.w.Capacitor}},983:(y,h,i)=>{i.d(h,{c:()=>d,i:()=>l});const d=(c,r,o)=>"function"==typeof o?o(c,r):"string"==typeof o?c[o]===r[o]:Array.isArray(r)?r.includes(c):c===r,l=(c,r,o)=>void 0!==c&&(Array.isArray(c)?c.some(n=>d(n,r,o)):d(c,r,o))},4510:(y,h,i)=>{i.d(h,{g:()=>d});const d=(n,e,t,f,u)=>c(n[1],e[1],t[1],f[1],u).map(s=>l(n[0],e[0],t[0],f[0],s)),l=(n,e,t,f,u)=>u*(3*e*Math.pow(u-1,2)+u*(-3*t*u+3*t+f*u))-n*Math.pow(u-1,3),c=(n,e,t,f,u)=>o((f-=u)-3*(t-=u)+3*(e-=u)-(n-=u),3*t-6*e+3*n,3*e-3*n,n).filter(a=>a>=0&&a<=1),o=(n,e,t,f)=>{if(0===n)return((n,e,t)=>{const f=e*e-4*n*t;return f<0?[]:[(-e+Math.sqrt(f))/(2*n),(-e-Math.sqrt(f))/(2*n)]})(e,t,f);const u=(3*(t/=n)-(e/=n)*e)/3,s=(2*e*e*e-9*e*t+27*(f/=n))/27;if(0===u)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-u),-Math.sqrt(-u)];const a=Math.pow(s/2,2)+Math.pow(u/3,3);if(0===a)return[Math.pow(s/2,.5)-e/3];if(a>0)return[Math.pow(-s/2+Math.sqrt(a),1/3)-Math.pow(s/2+Math.sqrt(a),1/3)-e/3];const p=Math.sqrt(Math.pow(-u/3,3)),E=Math.acos(-s/(2*Math.sqrt(Math.pow(-u/3,3)))),w=2*Math.pow(p,1/3);return[w*Math.cos(E/3)-e/3,w*Math.cos((E+2*Math.PI)/3)-e/3,w*Math.cos((E+4*Math.PI)/3)-e/3]}},4162:(y,h,i)=>{i.d(h,{i:()=>d});const d=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(y,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>r});const d="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=o=>{let n=[],e=!0;const t=o?o.shadowRoot:document,f=o||document.body,u=M=>{n.forEach(_=>_.classList.remove(d)),M.forEach(_=>_.classList.add(d)),n=M},s=()=>{e=!1,u([])},a=M=>{e=c.includes(M.key),e||u([])},p=M=>{if(e&&void 0!==M.composedPath){const _=M.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));u(_)}},E=()=>{t.activeElement===f&&u([])};return t.addEventListener("keydown",a),t.addEventListener("focusin",p),t.addEventListener("focusout",E),t.addEventListener("touchstart",s,{passive:!0}),t.addEventListener("mousedown",s),{destroy:()=>{t.removeEventListener("keydown",a),t.removeEventListener("focusin",p),t.removeEventListener("focusout",E),t.removeEventListener("touchstart",s),t.removeEventListener("mousedown",s)},setFocus:u}}},2131:(y,h,i)=>{i.d(h,{c:()=>l});var d=i(2831);const l=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const u=void 0!==e.label||c(e),s=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,a=(0,d.h)(e);t=!0===e.legacy||!u&&!s&&null!==a}return t}}},c=n=>!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||o.includes(n.tagName)&&""!==n.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(y,h,i)=>{i.d(h,{I:()=>l,a:()=>e,b:()=>t,c:()=>n,d:()=>u,h:()=>f});var d=i(1836),l=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(l||{});const r={getEngine(){const s=window.TapticEngine;if(s)return s;const a=(0,d.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,d.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,d.g)(),impact(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.style:s.style.toLowerCase();a.impact({style:p})},notification(s){const a=this.getEngine();if(!a)return;const p=this.isCapacitor()?s.type:s.type.toLowerCase();a.notification({type:p})},selection(){const s=this.isCapacitor()?l.Light:"light";this.impact({style:s})},selectionStart(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionStart():s.gestureSelectionStart())},selectionChanged(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionChanged():s.gestureSelectionChanged())},selectionEnd(){const s=this.getEngine();s&&(this.isCapacitor()?s.selectionEnd():s.gestureSelectionEnd())}},o=()=>r.available(),n=()=>{o()&&r.selection()},e=()=>{o()&&r.selectionStart()},t=()=>{o()&&r.selectionChanged()},f=()=>{o()&&r.selectionEnd()},u=s=>{o()&&r.impact(s)}},3145:(y,h,i)=>{i.d(h,{I:()=>n,a:()=>u,b:()=>o,c:()=>p,d:()=>w,f:()=>s,g:()=>f,i:()=>t,p:()=>E,r:()=>M,s:()=>a});var d=i(5861),l=i(2831),c=i(2400);const o="ion-content",n=".ion-content-scroll-host",e=`${o}, ${n}`,t=_=>"ION-CONTENT"===_.tagName,f=function(){var _=(0,d.Z)(function*(v){return t(v)?(yield new Promise(m=>(0,l.c)(v,m)),v.getScrollElement()):v});return function(m){return _.apply(this,arguments)}}(),u=_=>_.querySelector(n)||_.querySelector(e),s=_=>_.closest(e),a=(_,v)=>t(_)?_.scrollToTop(v):Promise.resolve(_.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(_,v,m,O)=>t(_)?_.scrollByPoint(v,m,O):Promise.resolve(_.scrollBy({top:m,left:v,behavior:O>0?"smooth":"auto"})),E=_=>(0,c.b)(_,o),w=_=>{if(t(_)){const m=_.scrollY;return _.scrollY=!1,m}return _.style.setProperty("overflow","hidden"),!0},M=(_,v)=>{t(_)?_.scrollY=v:_.style.removeProperty("overflow")}},1076:(y,h,i)=>{i.d(h,{a:()=>d,b:()=>p,c:()=>e,d:()=>E,e:()=>D,f:()=>n,g:()=>w,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>t,m:()=>s,n:()=>M,o:()=>u,p:()=>o,q:()=>r,r:()=>m,s:()=>g,t:()=>a,u:()=>_,v:()=>v,w:()=>f});const d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8494:(y,h,i)=>{i.d(h,{c:()=>r,g:()=>o});var d=i(1848),l=i(2831),c=i(2400);const r=(e,t,f)=>{let u,s;if(void 0!==d.w&&"MutationObserver"in d.w){const w=Array.isArray(t)?t:[t];u=new MutationObserver(M=>{for(const _ of M)for(const v of _.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&w.includes(v.slot))return f(),void(0,l.r)(()=>a(v))}),u.observe(e,{childList:!0})}const a=w=>{var M;s&&(s.disconnect(),s=void 0),s=new MutationObserver(_=>{f();for(const v of _)for(const m of v.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&E()}),s.observe(null!==(M=w.parentElement)&&void 0!==M?M:w,{subtree:!0,childList:!0})},E=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),E()}}},o=(e,t,f)=>{const u=null==e?0:e.toString().length,s=n(u,t);if(void 0===f)return s;try{return f(u,t)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),s}},n=(e,t)=>`${e} / ${t}`},6591:(y,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>C,keyboardDidClose:()=>_,keyboardDidOpen:()=>w,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>E,setKeyboardOpen:()=>p,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var d=i(3920);i(1836),i(1848);const r="ionKeyboardDidShow",o="ionKeyboardDidHide";let e={},t={},f=!1;const u=()=>{e={},t={},f=!1},s=g=>{if(d.K.getEngine())a(g);else{if(!g.visualViewport)return;t=C(g.visualViewport),g.visualViewport.onresize=()=>{O(g),w()||M(g)?p(g):_(g)&&E(g)}}},a=g=>{g.addEventListener("keyboardDidShow",D=>p(g,D)),g.addEventListener("keyboardDidHide",()=>E(g))},p=(g,D)=>{v(g,D),f=!0},E=g=>{m(g),f=!1},w=()=>!f&&e.width===t.width&&(e.height-t.height)*t.scale>150,M=g=>f&&!_(g),_=g=>f&&t.height===g.innerHeight,v=(g,D)=>{const L=new CustomEvent(r,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-t.height}});g.dispatchEvent(L)},m=g=>{const D=new CustomEvent(o);g.dispatchEvent(D)},O=g=>{e=Object.assign({},t),t=C(g.visualViewport)},C=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},3920:(y,h,i)=>{i.d(h,{K:()=>r,a:()=>c});var d=i(1836),l=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(l||{}),c=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(c||{});const r={getEngine(){const o=(0,d.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(n=>{if(n.code!==l.Unimplemented)throw n}):Promise.resolve(void 0)}}},9252:(y,h,i)=>{i.d(h,{c:()=>n});var d=i(5861),l=i(1848),c=i(3920);const r=e=>{if(void 0===l.d||e===c.a.None||void 0===e)return null;const t=l.d.querySelector("ion-app");return null!=t?t:l.d.body},o=e=>{const t=r(e);return null===t?0:t.clientHeight},n=function(){var e=(0,d.Z)(function*(t){let f,u,s,a;const p=function(){var v=(0,d.Z)(function*(){const m=yield c.K.getResizeMode(),O=void 0===m?void 0:m.mode;f=()=>{void 0===a&&(a=o(O)),s=!0,E(s,O)},u=()=>{s=!1,E(s,O)},null==l.w||l.w.addEventListener("keyboardWillShow",f),null==l.w||l.w.addEventListener("keyboardWillHide",u)});return function(){return v.apply(this,arguments)}}(),E=(v,m)=>{t&&t(v,w(m))},w=v=>{if(0===a||a===o(v))return;const m=r(v);return null!==m?new Promise(O=>{const g=new ResizeObserver(()=>{m.clientHeight===a&&(g.disconnect(),O())});g.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",f),null==l.w||l.w.removeEventListener("keyboardWillHide",u),f=u=void 0},isKeyboardVisible:()=>s}});return function(f){return e.apply(this,arguments)}}()},9229:(y,h,i)=>{i.d(h,{c:()=>l});var d=i(5861);const l=()=>{let c;return{lock:function(){var o=(0,d.Z)(function*(){const n=c;let e;return c=new Promise(t=>e=t),void 0!==n&&(yield n),e});return function(){return o.apply(this,arguments)}}()}}},6672:(y,h,i)=>{i.d(h,{c:()=>c});var d=i(1848),l=i(2831);const c=(r,o,n)=>{let e;const t=()=>!(void 0===o()||void 0!==r.label||null===n()),u=()=>{const a=o();if(void 0===a)return;if(!t())return void a.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===a.offsetParent&&void 0!==d.w&&"IntersectionObserver"in d.w){if(void 0!==e)return;const E=e=new IntersectionObserver(w=>{1===w[0].intersectionRatio&&(u(),E.disconnect(),e=void 0)},{threshold:.01,root:r});E.observe(a)}else a.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,l.r)(()=>{u()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},2217:(y,h,i)=>{i.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,r,o)=>{const n=c*r/o-c+"ms",e=2*Math.PI*r/o;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(c,r,o)=>{const n=r/o,e=c*n-c+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,r,o)=>({y1:14,y2:26,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${360/o*r+(r<o/2?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,r,o)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":c*r/o-c+"ms"}})}}},7696:(y,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>o});var d=i(2831),l=i(4162),c=i(6535);i(2019);const o=(n,e,t,f,u)=>{const s=n.ownerDocument.defaultView;let a=(0,l.i)(n);const E=m=>a?-m.deltaX:m.deltaX;return(0,c.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(a=(0,l.i)(n),(m=>{const{startX:C}=m;return a?C>=s.innerWidth-50:C<=50})(m)&&e()),onStart:t,onMove:m=>{const C=E(m)/s.innerWidth;f(C)},onEnd:m=>{const O=E(m),C=s.innerWidth,g=O/C,D=(m=>a?-m.velocityX:m.velocityX)(m),L=D>=0&&(D>.2||O>C/2),b=(L?1-g:g)*C;let x=0;if(b>5){const T=b/Math.abs(D);x=Math.min(T,540)}u(L,g<=0?.01:(0,d.l)(0,g,.9999),x)}})}},6806:(y,h,i)=>{i.d(h,{w:()=>d});const d=(r,o,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(l(t,o))});return e.observe(r,{childList:!0,subtree:!0}),e},l=(r,o)=>{let n;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=c(e.addedNodes[t],o)||n}),n},c=(r,o)=>{if(1!==r.nodeType)return;const n=r;return(n.tagName===o.toUpperCase()?[n]:Array.from(n.querySelectorAll(o))).find(t=>t.value===n.value)}},4281:(y,h,i)=>{i.d(h,{Z:()=>l});var d=i(9212);let l=(()=>{var c;class r{}return(c=r).\u0275fac=function(n){return new(n||c)},c.\u0275cmp=d.Xpm({type:c,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(n,e){1&n&&(d.TgZ(0,"div",0)(1,"strong"),d._uU(2),d.qZA(),d.TgZ(3,"p"),d._uU(4,"Explore "),d.TgZ(5,"a",1),d._uU(6,"UI Components"),d.qZA()()()),2&n&&(d.xp6(2),d.Oqu(e.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})()},3554:(y,h,i)=>{i.d(h,{e:()=>o});var d=i(6814),l=i(95),c=i(878),r=i(9212);let o=(()=>{var n;class e{}return(n=e).\u0275fac=function(f){return new(f||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[d.ez,l.u5,c.Pc]}),e})()}}]);