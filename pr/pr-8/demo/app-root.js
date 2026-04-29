import{LazyLoaderService as U$}from"https://esm.archive.org/@internetarchive/lazy-loader-service";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function v(o,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var d=o.length-1;d>=0;d--)(r=o[d])&&(s=(n<3?r(s):n>3?r(t,e,s):r(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}function g(o,t,e,i){function n(s){return s instanceof e?s:new e(function(r){r(s)})}return new(e||(e=Promise))(function(s,r){function d(h){try{l(i.next(h))}catch(c){r(c)}}function a(h){try{l(i.throw(h))}catch(c){r(c)}}function l(h){h.done?s(h.value):n(h.value).then(d,a)}l((i=i.apply(o,t||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=globalThis,Hd=Fo.ShadowRoot&&(Fo.ShadyCSS===void 0||Fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ud=Symbol(),hh=new WeakMap;let v0=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ud)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Hd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=hh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&hh.set(e,t))}return t}toString(){return this.cssText}};const I$=o=>new v0(typeof o=="string"?o:o+"",void 0,Ud),pt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new v0(e,o,Ud)},N$=(o,t)=>{if(Hd)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=Fo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},ch=Hd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return I$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:D$,defineProperty:O$,getOwnPropertyDescriptor:R$,getOwnPropertyNames:F$,getOwnPropertySymbols:L$,getPrototypeOf:B$}=Object,hr=globalThis,uh=hr.trustedTypes,z$=uh?uh.emptyScript:"",j$=hr.reactiveElementPolyfillSupport,jn=(o,t)=>o,ss={toAttribute(o,t){switch(t){case Boolean:o=o?z$:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Id=(o,t)=>!D$(o,t),ph={attribute:!0,type:String,converter:ss,reflect:!1,useDefault:!1,hasChanged:Id};Symbol.metadata??=Symbol("metadata"),hr.litPropertyMetadata??=new WeakMap;let di=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ph){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&O$(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=R$(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){const d=n?.call(this);s?.call(this,r),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ph}static _$Ei(){if(this.hasOwnProperty(jn("elementProperties")))return;const t=B$(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(jn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(jn("properties"))){const e=this.properties,i=[...F$(e),...L$(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ch(n))}else t!==void 0&&e.push(ch(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return N$(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:ss).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ss;this._$Em=n;const d=r.fromAttribute(e,s.type);this[n]=d??this._$Ej?.get(n)??d,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){const r=this.constructor;if(n===!1&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Id)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:r}=s,d=this[n];r!==!0||this._$AL.has(n)||d===void 0||this.C(n,void 0,s,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};di.elementStyles=[],di.shadowRootOptions={mode:"open"},di[jn("elementProperties")]=new Map,di[jn("finalized")]=new Map,j$?.({ReactiveElement:di}),(hr.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nd=globalThis,vh=o=>o,rs=Nd.trustedTypes,mh=rs?rs.createPolicy("lit-html",{createHTML:o=>o}):void 0,m0="$lit$",Mt=`lit$${Math.random().toFixed(9).slice(2)}$`,$0="?"+Mt,V$=`<${$0}>`,Be=document,qn=()=>Be.createComment(""),Wn=o=>o===null||typeof o!="object"&&typeof o!="function",Dd=Array.isArray,q$=o=>Dd(o)||typeof o?.[Symbol.iterator]=="function",Dr=`[ 	
\f\r]`,rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$h=/-->/g,gh=/>/g,Qt=RegExp(`>|${Dr}(?:([^\\s"'>=/]+)(${Dr}*=${Dr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yh=/'/g,fh=/"/g,g0=/^(?:script|style|textarea|title)$/i,W$=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),b=W$(1),ci=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),_h=new WeakMap,_e=Be.createTreeWalker(Be,129);function y0(o,t){if(!Dd(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return mh!==void 0?mh.createHTML(t):t}const K$=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",r=rn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===rn?h[1]==="!--"?r=$h:h[1]!==void 0?r=gh:h[2]!==void 0?(g0.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=Qt):h[3]!==void 0&&(r=Qt):r===Qt?h[0]===">"?(r=n??rn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?Qt:h[3]==='"'?fh:yh):r===fh||r===yh?r=Qt:r===$h||r===gh?r=rn:(r=Qt,n=void 0);const p=r===Qt&&o[d+1].startsWith("/>")?" ":"";s+=r===rn?a+V$:c>=0?(i.push(l),a.slice(0,c)+m0+a.slice(c)+Mt+p):a+Mt+(c===-2?d:p)}return[y0(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let dl=class f0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=K$(t,e);if(this.el=f0.createElement(l,i),_e.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=_e.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(m0)){const u=h[r++],p=n.getAttribute(c).split(Mt),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:_[2],strings:p,ctor:_[1]==="."?G$:_[1]==="?"?Y$:_[1]==="@"?J$:cr}),n.removeAttribute(c)}else c.startsWith(Mt)&&(a.push({type:6,index:s}),n.removeAttribute(c));if(g0.test(n.tagName)){const c=n.textContent.split(Mt),u=c.length-1;if(u>0){n.textContent=rs?rs.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],qn()),_e.nextNode(),a.push({type:2,index:++s});n.append(c[u],qn())}}}else if(n.nodeType===8)if(n.data===$0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Mt,c+1))!==-1;)a.push({type:7,index:s}),c+=Mt.length-1}s++}}static createElement(t,e){const i=Be.createElement("template");return i.innerHTML=t,i}};function ui(o,t,e=o,i){if(t===ci)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const s=Wn(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=ui(o,n._$AS(o,t.values),n,i)),t}let Z$=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Be).importNode(e,!0);_e.currentNode=n;let s=_e.nextNode(),r=0,d=0,a=i[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new Od(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new Q$(s,this,t)),this._$AV.push(l),a=i[++d]}r!==a?.index&&(s=_e.nextNode(),r++)}return _e.currentNode=Be,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Od=class _0{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ui(this,t,e),Wn(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==ci&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):q$(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&Wn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Be.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=dl.createElement(y0(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const s=new Z$(n,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=_h.get(t.strings);return e===void 0&&_h.set(t.strings,e=new dl(t)),e}k(t){Dd(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new _0(this.O(qn()),this.O(qn()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=vh(t).nextSibling;vh(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},cr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ui(this,t,e,0),r=!Wn(t)||t!==this._$AH&&t!==ci,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ui(this,d[i+a],e,a),l===ci&&(l=this._$AH[a]),r||=!Wn(l)||l!==this._$AH[a],l===C?t=C:t!==C&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},G$=class extends cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}},Y$=class extends cr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}},J$=class extends cr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=ui(this,t,e,0)??C)===ci)return;const i=this._$AH,n=t===C&&i!==C||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==C&&(i===C||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Q$=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ui(this,t)}};const X$=Nd.litHtmlPolyfillSupport;X$?.(dl,Od),(Nd.litHtmlVersions??=[]).push("3.3.2");const tg=(o,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=e?.renderBefore??null;i._$litPart$=n=new Od(t.insertBefore(qn(),s),s,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rd=globalThis;let tt=class extends di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=tg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ci}};tt._$litElement$=!0,tt.finalized=!0,Rd.litElementHydrateSupport?.({LitElement:tt});const eg=Rd.litElementPolyfillSupport;eg?.({LitElement:tt});(Rd.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ig={attribute:!0,type:String,converter:ss,reflect:!1,hasChanged:Id},ng=(o=ig,t,e)=>{const{kind:i,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),i==="accessor"){const{name:r}=e;return{set(d){const a=t.get.call(this);t.set.call(this,d),this.requestUpdate(r,a,o,!0,d)},init(d){return d!==void 0&&this.C(r,void 0,o,d),d}}}if(i==="setter"){const{name:r}=e;return function(d){const a=this[r];t.call(this,d),this.requestUpdate(r,a,o,!0,d)}}throw Error("Unsupported decorator location: "+i)};function A(o){return(t,e)=>typeof e=="object"?ng(o,t,e):((i,n,s)=>{const r=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(n,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function og(o){return A({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sg=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function bt(o,t){return(e,i,n)=>{const s=r=>r.renderRoot?.querySelector(o)??null;return sg(e,i,{get(){return s(this)}})}}const rg="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let pi=class extends tt{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return b`
      <section>
        <p>
          Join the Monthly Giving Circle by starting a monthly recurring
          donation at any level to access benefits and perks:
        </p>
        <ul>
          <li>Exclusive webinars and virtual learning opportunities</li>
          <li>Discounts at Better World Books</li>
          <li>
            Access to the curated Monthly Giving Circle newsletter and more!
          </li>
        </ul>

        <a href=${t} target="_blank" class="link join-mgc"
          >Click here to join the Monthly Giving Circle</a
        >
        <p>
          Already a monthly donor but don't see your donation details here?
          <br />
          <a class="link" href=${rg}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};pi.styles=pt`
    :host {
      border: 1px solid #23765d;
      background-color: #eeffee;
      display: block;
      width: inherit;
    }

    section {
      margin: 0.5rem;
    }

    section > p {
      margin: 0;
    }

    section a.join-mgc {
      padding-bottom: 1rem;
      display: block;
    }

    ul {
      list-style-type: disc;
      padding-left: 1rem;
      margin-left: 1rem;
    }
  `;v([A({type:String})],pi.prototype,"patronName",void 0);v([A({type:String})],pi.prototype,"baseHost",void 0);v([A({type:String})],pi.prototype,"defaultMonthlyDonationAmount",void 0);pi=v([at("ia-mgc-welcome")],pi);class Do{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class Oo{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class ag{constructor(t){this.customer=t.customer,this.billing=t.billing}}var S;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(S||(S={}));class D{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return D.calculateFeeAmount(this.amount)}get total(){return D.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.0219+.29;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var E;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(E||(E={}));class A0{constructor(t){this.logged_in_user=t?.logged_in_user,this.referrer=t?.referrer,this.fee_amount_covered=t?.fee_amount_covered,this.origin=t?.origin}}class lg{constructor(t){this.customFields=new A0,this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.recaptchaToken=t.recaptchaToken,this.customerId=t.customerId,this.deviceData=t.deviceData,this.upsellOnetimeTransactionId=t.upsellOnetimeTransactionId,this.bin=t.bin,this.binName=t.binName,this.amount=t.amount,this.donationType=t.donationType,this.customer=t.customer,this.billing=t.billing,t.customFields&&(this.customFields=t.customFields)}}class dg{constructor(t){this.id=t.id}}class hg{constructor(t){this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.amount=t.amount,this.donationType=t.donationType,this.transaction_id=t.transaction_id,this.customer_id=t.customer_id,this.customer=new Oo(t.customer),this.billing=new Do(t.billing),t.subscription&&(this.subscription=new dg(t.subscription))}}class cg{constructor(t){this.code=t.code,this.message=t.message}}class ug{constructor(t){this.message=t.message;const{errors:e=[]}=t;this.errors=e.map(i=>new cg(i))}}class pg{constructor(t){this.success=t.success,this.success?this.value=new hg(t.value):this.value=new ug(t.value)}}const ur=[5,10,25,50,100,500,1e3],b0=new D({donationType:E.OneTime,amount:10,coverFees:!1});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo=window,Fd=Lo.ShadowRoot&&(Lo.ShadyCSS===void 0||Lo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,S0=Symbol(),Ah=new WeakMap;let vg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==S0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Fd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ah.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ah.set(e,t))}return t}toString(){return this.cssText}};const mg=o=>new vg(typeof o=="string"?o:o+"",void 0,S0),$g=(o,t)=>{Fd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Lo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},bh=Fd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Or;const as=window,Sh=as.trustedTypes,gg=Sh?Sh.emptyScript:"",Ch=as.reactiveElementPolyfillSupport,hl={toAttribute(o,t){switch(t){case Boolean:o=o?gg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},C0=(o,t)=>t!==o&&(t==t||o==o),Rr={attribute:!0,type:String,converter:hl,reflect:!1,hasChanged:C0},cl="finalized";let an=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Rr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Rr}static finalize(){if(this.hasOwnProperty(cl))return!1;this[cl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(bh(n))}else t!==void 0&&e.push(bh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $g(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Rr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:hl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:hl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||C0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};an[cl]=!0,an.elementProperties=new Map,an.elementStyles=[],an.shadowRootOptions={mode:"open"},Ch?.({ReactiveElement:an}),((Or=as.reactiveElementVersions)!==null&&Or!==void 0?Or:as.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fr;const ls=window,vi=ls.trustedTypes,Eh=vi?vi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ul="$lit$",xt=`lit$${(Math.random()+"").slice(9)}$`,E0="?"+xt,yg=`<${E0}>`,ze=document,ds=()=>ze.createComment(""),Kn=o=>o===null||typeof o!="object"&&typeof o!="function",w0=Array.isArray,fg=o=>w0(o)||typeof o?.[Symbol.iterator]=="function",Lr=`[ 	
\f\r]`,ln=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wh=/-->/g,Ph=/>/g,Xt=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mh=/'/g,xh=/"/g,P0=/^(?:script|style|textarea|title)$/i,Zn=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Th=new WeakMap,Ae=ze.createTreeWalker(ze,129,null,!1);function M0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Eh!==void 0?Eh.createHTML(t):t}const _g=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=ln;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===ln?h[1]==="!--"?r=wh:h[1]!==void 0?r=Ph:h[2]!==void 0?(P0.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=Xt):h[3]!==void 0&&(r=Xt):r===Xt?h[0]===">"?(r=n??ln,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?Xt:h[3]==='"'?xh:Mh):r===xh||r===Mh?r=Xt:r===wh||r===Ph?r=ln:(r=Xt,n=void 0);const p=r===Xt&&o[d+1].startsWith("/>")?" ":"";s+=r===ln?a+yg:c>=0?(i.push(l),a.slice(0,c)+ul+a.slice(c)+xt+p):a+xt+(c===-2?(i.push(void 0),d):p)}return[M0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let pl=class x0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=_g(t,e);if(this.el=x0.createElement(l,i),Ae.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ae.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ul)||u.startsWith(xt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ul).split(xt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?bg:m[1]==="?"?Cg:m[1]==="@"?Eg:pr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(P0.test(n.tagName)){const c=n.textContent.split(xt),u=c.length-1;if(u>0){n.textContent=vi?vi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],ds()),Ae.nextNode(),a.push({type:2,index:++s});n.append(c[u],ds())}}}else if(n.nodeType===8)if(n.data===E0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(xt,c+1))!==-1;)a.push({type:7,index:s}),c+=xt.length-1}s++}}static createElement(t,e){const i=ze.createElement("template");return i.innerHTML=t,i}};function mi(o,t,e=o,i){var n,s,r,d;if(t===Zn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Kn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=mi(o,a._$AS(o,t.values),a,i)),t}let Ag=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ze).importNode(i,!0);Ae.currentNode=s;let r=Ae.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new T0(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new wg(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ae.nextNode(),d++)}return Ae.currentNode=ze,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},T0=class k0{constructor(t,e,i,n){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=mi(this,t,e),Kn(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Zn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):fg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&Kn(this._$AH)?this._$AA.nextSibling.data=t:this.$(ze.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=pl.createElement(M0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Ag(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Th.get(t.strings);return e===void 0&&Th.set(t.strings,e=new pl(t)),e}T(t){w0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new k0(this.k(ds()),this.k(ds()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},pr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=mi(this,t,e,0),r=!Kn(t)||t!==this._$AH&&t!==Zn,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=mi(this,d[i+a],e,a),l===Zn&&(l=this._$AH[a]),r||(r=!Kn(l)||l!==this._$AH[a]),l===R?t=R:t!==R&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},bg=class extends pr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}};const Sg=vi?vi.emptyScript:"";let Cg=class extends pr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Sg):this.element.removeAttribute(this.name)}},Eg=class extends pr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=mi(this,t,e,0))!==null&&i!==void 0?i:R)===Zn)return;const n=this._$AH,s=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},wg=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){mi(this,t)}};const kh=ls.litHtmlPolyfillSupport;kh?.(pl,T0),((Fr=ls.litHtmlVersions)!==null&&Fr!==void 0?Fr:ls.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=window,Ld=Bo.ShadowRoot&&(Bo.ShadyCSS===void 0||Bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Bd=Symbol(),Hh=new WeakMap;let H0=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Bd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ld&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Hh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Hh.set(e,t))}return t}toString(){return this.cssText}};const Pg=o=>new H0(typeof o=="string"?o:o+"",void 0,Bd),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new H0(e,o,Bd)},Mg=(o,t)=>{Ld?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Bo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Uh=Ld?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Br;const hs=window,Ih=hs.trustedTypes,xg=Ih?Ih.emptyScript:"",Nh=hs.reactiveElementPolyfillSupport,vl={toAttribute(o,t){switch(t){case Boolean:o=o?xg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},U0=(o,t)=>t!==o&&(t==t||o==o),zr={attribute:!0,type:String,converter:vl,reflect:!1,hasChanged:U0},ml="finalized";let hi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=zr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zr}static finalize(){if(this.hasOwnProperty(ml))return!1;this[ml]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Uh(n))}else t!==void 0&&e.push(Uh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Mg(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=zr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:vl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:vl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||U0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};hi[ml]=!0,hi.elementProperties=new Map,hi.elementStyles=[],hi.shadowRootOptions={mode:"open"},Nh?.({ReactiveElement:hi}),((Br=hs.reactiveElementVersions)!==null&&Br!==void 0?Br:hs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jr;const cs=window,$i=cs.trustedTypes,Dh=$i?$i.createPolicy("lit-html",{createHTML:o=>o}):void 0,$l="$lit$",Tt=`lit$${(Math.random()+"").slice(9)}$`,I0="?"+Tt,Tg=`<${I0}>`,je=document,Gn=()=>je.createComment(""),Yn=o=>o===null||typeof o!="object"&&typeof o!="function",N0=Array.isArray,kg=o=>N0(o)||typeof o?.[Symbol.iterator]=="function",Vr=`[ 	
\f\r]`,dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oh=/-->/g,Rh=/>/g,te=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fh=/'/g,Lh=/"/g,D0=/^(?:script|style|textarea|title)$/i,Hg=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),y=Hg(1),gi=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Bh=new WeakMap,be=je.createTreeWalker(je,129,null,!1);function O0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Dh!==void 0?Dh.createHTML(t):t}const Ug=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=dn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===dn?h[1]==="!--"?r=Oh:h[1]!==void 0?r=Rh:h[2]!==void 0?(D0.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=te):h[3]!==void 0&&(r=te):r===te?h[0]===">"?(r=n??dn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?te:h[3]==='"'?Lh:Fh):r===Lh||r===Fh?r=te:r===Oh||r===Rh?r=dn:(r=te,n=void 0);const p=r===te&&o[d+1].startsWith("/>")?" ":"";s+=r===dn?a+Tg:c>=0?(i.push(l),a.slice(0,c)+$l+a.slice(c)+Tt+p):a+Tt+(c===-2?(i.push(void 0),d):p)}return[O0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let gl=class R0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=Ug(t,e);if(this.el=R0.createElement(l,i),be.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=be.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith($l)||u.startsWith(Tt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+$l).split(Tt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?Ng:m[1]==="?"?Og:m[1]==="@"?Rg:vr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(D0.test(n.tagName)){const c=n.textContent.split(Tt),u=c.length-1;if(u>0){n.textContent=$i?$i.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Gn()),be.nextNode(),a.push({type:2,index:++s});n.append(c[u],Gn())}}}else if(n.nodeType===8)if(n.data===I0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Tt,c+1))!==-1;)a.push({type:7,index:s}),c+=Tt.length-1}s++}}static createElement(t,e){const i=je.createElement("template");return i.innerHTML=t,i}};function yi(o,t,e=o,i){var n,s,r,d;if(t===gi)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Yn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=yi(o,a._$AS(o,t.values),a,i)),t}let Ig=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:je).importNode(i,!0);be.currentNode=s;let r=be.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new zd(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Fg(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=be.nextNode(),d++)}return be.currentNode=je,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},zd=class F0{constructor(t,e,i,n){var s;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=yi(this,t,e),Yn(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==gi&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):kg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&Yn(this._$AH)?this._$AA.nextSibling.data=t:this.$(je.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=gl.createElement(O0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Ig(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Bh.get(t.strings);return e===void 0&&Bh.set(t.strings,e=new gl(t)),e}T(t){N0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new F0(this.k(Gn()),this.k(Gn()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},vr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=yi(this,t,e,0),r=!Yn(t)||t!==this._$AH&&t!==gi,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=yi(this,d[i+a],e,a),l===gi&&(l=this._$AH[a]),r||(r=!Yn(l)||l!==this._$AH[a]),l===x?t=x:t!==x&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ng=class extends vr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}};const Dg=$i?$i.emptyScript:"";let Og=class extends vr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,Dg):this.element.removeAttribute(this.name)}},Rg=class extends vr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=yi(this,t,e,0))!==null&&i!==void 0?i:x)===gi)return;const n=this._$AH,s=t===x&&n!==x||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==x&&(n===x||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Fg=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){yi(this,t)}};const zh=cs.litHtmlPolyfillSupport;zh?.(gl,zd),((jr=cs.litHtmlVersions)!==null&&jr!==void 0?jr:cs.litHtmlVersions=[]).push("2.8.0");const Lg=(o,t,e)=>{var i,n;const s=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=s._$litPart$;if(r===void 0){const d=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new zd(t.insertBefore(Gn(),d),d,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr,Wr;let U=class extends hi{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lg(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return gi}};U.finalized=!0,U._$litElement$=!0,(qr=globalThis.litElementHydrateSupport)===null||qr===void 0||qr.call(globalThis,{LitElement:U});const jh=globalThis.litElementPolyfillSupport;jh?.({LitElement:U});((Wr=globalThis.litElementVersions)!==null&&Wr!==void 0?Wr:globalThis.litElementVersions=[]).push("3.3.3");const Bg=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class zg extends U{static get styles(){return $`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return Bg}}customElements.define("ia-icon-donate",zg);let fi=class extends tt{constructor(){super(...arguments),this.isDisabled=!1}render(){return b`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};fi.styles=pt`
    :host {
      display: inline-block;
      height: var(--button-height, 30px);
    }

    button {
      border: var(--button-border, yellow);
      background-color: var(--button-background-color, unset);
      border-radius: var(--button-border-radius, 0);

      cursor: pointer;
      line-height: normal;
      border-radius: 0.4rem;
      text-align: center;
      vertical-align: middle;
      display: inline-block;
      padding: 0.6rem 1.2rem;
      border: 1px solid transparent;

      white-space: nowrap;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
    }

    :host(.transparent) button {
      background-color: transparent;
    }

    :host(.slim) button {
      padding: 0;
    }

    :host(.primary) button {
      color: #ffeeee;
      background-color: #194880;
      border-color: #c5d1df;
    }

    :host(.secondary) button {
      background: #333;
      color: #ffeeee;
    }

    :host(.cancel) button {
      border-color: #ffeeee;
      background-color: #d9534f;
    }

    :host(.cancel) button:disabled {
      border: 2px solid #f18286;
    }

    :host(.link) button {
      color: #4b64ff;
      border: none;
      background: transparent;
      display: flex;
      align-items: var(--link-button-flex-align-items, flex-end);
      padding: var(--link-button-padding, inherit);
      height: inherit;
    }

    :host(.link.cancel) button {
      color: var(--link-cancel-color, #bb0505);
    }

    :host(.text) button {
      color: #222;
    }

    :host(.clear-container) button {
      height: inherit !important;
      background: transparent;
    }

    :host([isdisabled]) button {
      cursor: not-allowed;
      opacity: 0.5;
      background-color: var(--primaryDisableCTAFill, #767676);
      border: 1px solid var(--secondaryCTABorder, #999);
    }
  `;v([A({type:Boolean,reflect:!0})],fi.prototype,"isDisabled",void 0);v([A({type:Object})],fi.prototype,"clickHandler",void 0);v([bt("button")],fi.prototype,"button",void 0);fi=v([at("ia-mgc-button")],fi);let Jn=class extends tt{constructor(){super(...arguments),this.plans=[],this.canEdit=!0}render(){return b`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,n,s,r,d,a,l,h,c,u,p,_,m,I,N,et,vt;let gt=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";gt==="creditCard"&&(gt="Credit card");const yt=(s=(n=t.payment)===null||n===void 0?void 0:n.cardType)!==null&&s!==void 0?s:"Card type not found",wt=!((r=t.payment)===null||r===void 0)&&r.last4?`...${(d=t.payment)===null||d===void 0?void 0:d.last4}`:"CC number not found";return b`
              <li class=${`${t.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${t.currency} ${t.amountFormatted}/month</p>
                    ${t.isTest?b`<p class="is-test">(Test payment)</p>`:C}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${gt}</p>
                    ${((a=t.payment)===null||a===void 0?void 0:a.paymentMethodType)===S.CreditCard?b`<p>${yt}</p>
                          <p>${wt}</p>`:C}
                    ${((l=t.payment)===null||l===void 0?void 0:l.paymentMethodType)===S.PayPal?b`<p>
                          Paypal email:
                          <a href=${`mailto:${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}`}
                            >${(c=t.payment)===null||c===void 0?void 0:c.paypalEmail}</a
                          >
                        </p>`:C}
                    ${((u=t.payment)===null||u===void 0?void 0:u.paymentMethodType)===S.Venmo?b`<p>
                          Venmo username:
                          <a href=${`mailto:${(p=t.payment)===null||p===void 0?void 0:p.venmoUsername}`}
                            >${(_=t.payment)===null||_===void 0?void 0:_.venmoUsername}</a
                          >
                        </p>`:C}
                    ${((m=t.payment)===null||m===void 0?void 0:m.paymentMethodType)!==S.CreditCard?b`<p>
                          Expires:
                          ${(N=(I=t.payment)===null||I===void 0?void 0:I.expirationMonth)!==null&&N!==void 0?N:"month not found"}/${(vt=(et=t.payment)===null||et===void 0?void 0:et.expirationYear)!==null&&vt!==void 0?vt:"year not found"}
                        </p>`:C}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${t.nextBillingDateLocale}</p>
                  </div>
                </div>
                ${this.planCTA(t)}
              </li>
            `})}
        </ul>
      </section>
    `}planCTA(t){if(!this.canEdit)return b`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}>donations@archive.org</a>.
      </p>`;const e=t.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return b`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${t.plan.isCancelled}
      .clickHandler=${async(i,n)=>{n.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:t}}))}}
      >${e}</ia-mgc-button
    >`}};Jn.styles=pt`
    :host {
      max-height: 500px;
      overflow-y: auto;
      display: block;
    }

    .is-test {
      font-size: 0.8rem;
    }

    li {
      border: 1px solid #23765d;
      background-color: #eeffee;
      display: block;
      width: inherit;
    }
    li.cancelled {
      background-color: lightgoldenrodyellow;
    }
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    ul {
      padding: 0;
      list-style-type: none;
      margin: 0;
    }

    ul li {
      border: 1px solid #23765d;
      background-color: #eeffee;
      margin: 0.5rem 0;
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      position: relative;
    }

    ul li button.edit-donation {
      height: 30px;
      display: block;
      position: absolute;
      bottom: 0;
    }

    ul li .info {
      display: grid;
      min-height: 90px;
      grid-template-columns: 0.5fr 1fr 0.5fr;
      grid-template-rows: 1fr;
      gap: 0px 5px;
      grid-auto-flow: row;
      grid-template-areas: 'amount details next-donation';
    }

    ul li .info .amount {
      grid-area: amount;
    }

    ul li .info .payment-details {
      grid-area: details;
    }

    ul li .info .next-donation {
      grid-area: next-donation;
    }

    ul li .info > * {
      margin: 0 0 0.5rem 0;
    }

    ul li .info > * > * {
      margin: 0;
    }

    .email-edit-plan {
      margin-bottom: 0;
    }

    @media screen and (max-width: 500px) {
      ul li .info {
        display: block;
      }
    }
  `;v([A({type:Array})],Jn.prototype,"plans",void 0);v([A({type:Boolean,reflect:!0})],Jn.prototype,"canEdit",void 0);Jn=v([at("ia-mgc-plans")],Jn);let us=class extends tt{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?b` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:C}render(){return b`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};us.styles=pt`
    :host {
      padding-bottom: 5px;
      display: block;
      --link-button-padding: 0.5rem;
    }

    :host([titlestyle='default']) h2 {
      justify-content: flex-start;
      gap: 20px;
    }

    :host([titlestyle='heart']) h2 .title-section {
      width: 100%;
      display: flex;
    }

    h2 {
      font-size: 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      line-height: normal;
    }

    h2 .icon-donate {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: flex-end;
      align-items: center;
      justify-content: flex-start;
    }

    h2 .icon-donate {
      --iconFillColor: red;
      --iconWidth: 1.2em;
      --iconHeight: 1.2em;
    }

    slot[name='action'] {
      padding: 0 !important;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }

    ia-mgc-button {
      --link-button-padding: 0.5rem;
    }

    @media screen and (max-width: 450px) {
      h2,
      slot[name='action'] {
        display: block;
      }
      slot[name='action'] {
        margin-top: 10px;
      }
    }
  `;v([A({type:String})],us.prototype,"titleStyle",void 0);us=v([at("ia-mgc-title")],us);let Qn=class extends tt{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const n={...i},{id:s}=t;n[s]=t,this.receiptDispatcher={...n},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=CSS.escape(s),d=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${r} ia-mgc-button`);d.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return b`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],n=i?.emailStatus==="pending",s=!i||!i.emailStatus?C:b`<ia-mgc-update-status
                        .status=${i.emailStatus}
                        >${this.emailStatusMessageToDisplay(i)}</ia-mgc-update-status
                      >`;return b`
                  <tr
                    id=${`donation-${t.id}`}
                    class=${`${t.isTest?"test":""}`}
                  >
                    <td>
                      <div class="donation-date">${t.date}</div>
                    </td>
                    <td>
                      <div class="donation-amount">${t.amount}</div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <ia-mgc-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async(r,d)=>{if(!n&&(d.isDisabled=!0,await d.updateComplete),!n&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-mgc-button>
                        ${s}
                      </div>
                    </td>
                  </tr>
                `}):b`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};Qn.styles=pt`
    table {
      text-align: left;
      table-layout: fixed;
      min-width: 600px;
    }

    button {
      padding: 1rem 0;
    }

    td {
      padding: 0;
    }

    th.date {
      width: 55px;
    }
    th.amount {
      width: 55px;
    }
    th.action {
      width: 200px;
    }
    ia-mgc-button-style {
      display: inline-block;
    }

    .request-receipt {
      display: flex;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }
  `;v([A({type:Array})],Qn.prototype,"receipts",void 0);v([A({type:Object})],Qn.prototype,"receiptDispatcher",void 0);Qn=v([at("ia-mgc-receipts")],Qn);var mt;(function(o){o.Development="dev",o.Production="prod"})(mt||(mt={}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=window,jd=zo.ShadowRoot&&(zo.ShadyCSS===void 0||zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L0=Symbol(),Vh=new WeakMap;let jg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==L0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(jd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Vh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vh.set(e,t))}return t}toString(){return this.cssText}};const Vg=o=>new jg(typeof o=="string"?o:o+"",void 0,L0),qg=(o,t)=>{jd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=zo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},qh=jd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Vg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kr;const ps=window,Wh=ps.trustedTypes,Wg=Wh?Wh.emptyScript:"",Kh=ps.reactiveElementPolyfillSupport,yl={toAttribute(o,t){switch(t){case Boolean:o=o?Wg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},B0=(o,t)=>t!==o&&(t==t||o==o),Zr={attribute:!0,type:String,converter:yl,reflect:!1,hasChanged:B0},fl="finalized";let hn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Zr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Zr}static finalize(){if(this.hasOwnProperty(fl))return!1;this[fl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(qh(n))}else t!==void 0&&e.push(qh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return qg(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Zr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:yl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:yl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||B0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};hn[fl]=!0,hn.elementProperties=new Map,hn.elementStyles=[],hn.shadowRootOptions={mode:"open"},Kh?.({ReactiveElement:hn}),((Kr=ps.reactiveElementVersions)!==null&&Kr!==void 0?Kr:ps.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gr;const vs=window,_i=vs.trustedTypes,Zh=_i?_i.createPolicy("lit-html",{createHTML:o=>o}):void 0,_l="$lit$",kt=`lit$${(Math.random()+"").slice(9)}$`,z0="?"+kt,Kg=`<${z0}>`,Ve=document,ms=()=>Ve.createComment(""),Xn=o=>o===null||typeof o!="object"&&typeof o!="function",j0=Array.isArray,Zg=o=>j0(o)||typeof o?.[Symbol.iterator]=="function",Yr=`[ 	
\f\r]`,cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gh=/-->/g,Yh=/>/g,ee=RegExp(`>|${Yr}(?:([^\\s"'>=/]+)(${Yr}*=${Yr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jh=/'/g,Qh=/"/g,V0=/^(?:script|style|textarea|title)$/i,to=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Xh=new WeakMap,Se=Ve.createTreeWalker(Ve,129,null,!1);function q0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zh!==void 0?Zh.createHTML(t):t}const Gg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=cn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===cn?h[1]==="!--"?r=Gh:h[1]!==void 0?r=Yh:h[2]!==void 0?(V0.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ee):h[3]!==void 0&&(r=ee):r===ee?h[0]===">"?(r=n??cn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ee:h[3]==='"'?Qh:Jh):r===Qh||r===Jh?r=ee:r===Gh||r===Yh?r=cn:(r=ee,n=void 0);const p=r===ee&&o[d+1].startsWith("/>")?" ":"";s+=r===cn?a+Kg:c>=0?(i.push(l),a.slice(0,c)+_l+a.slice(c)+kt+p):a+kt+(c===-2?(i.push(void 0),d):p)}return[q0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Al=class W0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=Gg(t,e);if(this.el=W0.createElement(l,i),Se.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Se.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(_l)||u.startsWith(kt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+_l).split(kt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?Jg:m[1]==="?"?Xg:m[1]==="@"?ty:mr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(V0.test(n.tagName)){const c=n.textContent.split(kt),u=c.length-1;if(u>0){n.textContent=_i?_i.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],ms()),Se.nextNode(),a.push({type:2,index:++s});n.append(c[u],ms())}}}else if(n.nodeType===8)if(n.data===z0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(kt,c+1))!==-1;)a.push({type:7,index:s}),c+=kt.length-1}s++}}static createElement(t,e){const i=Ve.createElement("template");return i.innerHTML=t,i}};function Ai(o,t,e=o,i){var n,s,r,d;if(t===to)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Xn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ai(o,a._$AS(o,t.values),a,i)),t}let Yg=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ve).importNode(i,!0);Se.currentNode=s;let r=Se.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new K0(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new ey(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Se.nextNode(),d++)}return Se.currentNode=Ve,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},K0=class Z0{constructor(t,e,i,n){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ai(this,t,e),Xn(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==to&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&Xn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ve.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Al.createElement(q0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Yg(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Xh.get(t.strings);return e===void 0&&Xh.set(t.strings,e=new Al(t)),e}T(t){j0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Z0(this.k(ms()),this.k(ms()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},mr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ai(this,t,e,0),r=!Xn(t)||t!==this._$AH&&t!==to,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ai(this,d[i+a],e,a),l===to&&(l=this._$AH[a]),r||(r=!Xn(l)||l!==this._$AH[a]),l===O?t=O:t!==O&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Jg=class extends mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const Qg=_i?_i.emptyScript:"";let Xg=class extends mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,Qg):this.element.removeAttribute(this.name)}},ty=class extends mr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ai(this,t,e,0))!==null&&i!==void 0?i:O)===to)return;const n=this._$AH,s=t===O&&n!==O||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==O&&(n===O||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ey=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ai(this,t)}};const tc=vs.litHtmlPolyfillSupport;tc?.(Al,K0),((Gr=vs.litHtmlVersions)!==null&&Gr!==void 0?Gr:vs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const iy=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},ny=(o,t,e)=>{t.constructor.createProperty(e,o)};function f(o){return(t,e)=>e!==void 0?ny(o,t,e):iy(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oy=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(d){o(d,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(o,t){return oy({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jr;((Jr=window.HTMLSlotElement)===null||Jr===void 0?void 0:Jr.prototype.assignedElements)!=null;/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */var sy={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:dy,fromCents:!1},G0=function(t){return Math.round(t)},Vd=function(t){return Math.pow(10,t)},ry=function(t,e){return G0(t/e)*e},ay=/(\d)(?=(\d{3})+\b)/g,ly=/(\d)(?=(\d\d)+\d\b)/g;function it(o,t){var e=this;if(!(e instanceof it))return new it(o,t);var i=Object.assign({},sy,t),n=Vd(i.precision),s=jo(o,i);e.intValue=s,e.value=s/n,i.increment=i.increment||1/n,i.useVedic?i.groups=ly:i.groups=ay,this.s=i,this.p=n}function jo(o,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=0,n=t.decimal,s=t.errorOnInvalid,r=t.precision,d=t.fromCents,a=Vd(r),l=typeof o=="number",h=o instanceof it;if(h&&d)return o.intValue;if(l||h)i=h?o.value:o;else if(typeof o=="string"){var c=new RegExp("[^-\\d"+n+"]","g"),u=new RegExp("\\"+n,"g");i=o.replace(/\((.*)\)/,"-$1").replace(c,"").replace(u,"."),i=i||0}else{if(s)throw Error("Invalid Input");i=0}return d||(i*=a,i=i.toFixed(4)),e?G0(i):i}function dy(o,t){var e=t.pattern,i=t.negativePattern,n=t.symbol,s=t.separator,r=t.decimal,d=t.groups,a=(""+o).replace(/^-/,"").split("."),l=a[0],h=a[1];return(o.value>=0?e:i).replace("!",n).replace("#",l.replace(d,"$1"+s)+(h?r+h:""))}it.prototype={add:function(t){var e=this.intValue,i=this.s,n=this.p;return it((e+=jo(t,i))/(i.fromCents?1:n),i)},subtract:function(t){var e=this.intValue,i=this.s,n=this.p;return it((e-=jo(t,i))/(i.fromCents?1:n),i)},multiply:function(t){var e=this.intValue,i=this.s;return it((e*=t)/(i.fromCents?1:Vd(i.precision)),i)},divide:function(t){var e=this.intValue,i=this.s;return it(e/=jo(t,i,!1),i)},distribute:function(t){for(var e=this.intValue,i=this.p,n=this.s,s=[],r=Math[e>=0?"floor":"ceil"](e/t),d=Math.abs(e-r*t),a=n.fromCents?1:i;t!==0;t--){var l=it(r/a,n);d-- >0&&(l=l[e>=0?"add":"subtract"](1/a)),s.push(l)}return s},dollars:function(){return~~this.value},cents:function(){var t=this.intValue,e=this.p;return~~(t%e)},format:function(t){var e=this.s;return typeof t=="function"?t(this,e):e.format(this,Object.assign({},e,t))},toString:function(){var t=this.intValue,e=this.p,i=this.s;return ry(t/e,i.increment).toFixed(i.precision)},toJSON:function(){return this.value}};let hy=()=>({events:{},emit(o,...t){(this.events[o]||[]).forEach(e=>e(...t))},on(o,t){return(this.events[o]=this.events[o]||[]).push(t),()=>this.events[o]=(this.events[o]||[]).filter(e=>e!==t)}});function cy(o){return new Promise(t=>setTimeout(t,o))}var ft;(function(o){o.retryNumber="retryNumber",o.owner="owner",o.dynamicImportLoaded="dynamicImportLoaded",o.hasBeenRetried="hasBeenRetried"})(ft||(ft={}));const ec="lazyLoaderService";class uy{constructor(t){var e,i,n;this.emitter=hy(),this.container=(e=t?.container)!==null&&e!==void 0?e:document.head,this.retryCount=(i=t?.retryCount)!==null&&i!==void 0?i:2,this.retryInterval=(n=t?.retryInterval)!==null&&n!==void 0?n:1}on(t,e){return this.emitter.on(t,e)}loadBundle(t){return g(this,void 0,void 0,function*(){let e,i;return t.module&&(e=this.loadScript({src:t.module,bundleType:"module"})),t.nomodule&&(i=this.loadScript({src:t.nomodule,bundleType:"nomodule"})),Promise.race([e,i])})}loadScript(t){return g(this,void 0,void 0,function*(){return this.doLoad(t)})}doLoad(t){var e;return g(this,void 0,void 0,function*(){const i=(e=t.retryNumber)!==null&&e!==void 0?e:0,n=`script[src='${t.src}'][async][${ft.owner}='${ec}'][${ft.retryNumber}='${i}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},t),{retryNumber:i})),this.container.appendChild(s)),new Promise((r,d)=>{if(s.getAttribute(ft.dynamicImportLoaded)){r();return}const a=t.scriptBeingRetried,l=s.onload||a?.onload;s.onload=c=>{l?.(c),s.setAttribute(ft.dynamicImportLoaded,"true"),r()};const h=s.onerror||a?.onerror;s.onerror=c=>g(this,void 0,void 0,function*(){const u=s.getAttribute(ft.hasBeenRetried);if(i<this.retryCount&&!u){s.setAttribute(ft.hasBeenRetried,"true"),yield cy(this.retryInterval*1e3);const p=i+1;this.emitter.emit("scriptLoadRetried",t.src,p),this.doLoad(Object.assign(Object.assign({},t),{retryNumber:p,scriptBeingRetried:s}))}else u||this.emitter.emit("scriptLoadFailed",t.src,c),h?.(c),d(c)})})})}getScriptTag(t){var e;const i=t.src.replace("'",'"'),n=document.createElement("script"),s=t.retryNumber;n.setAttribute(ft.owner,ec),n.setAttribute("src",i),n.setAttribute(ft.retryNumber,s.toString()),n.async=!0;const r=(e=t.attributes)!==null&&e!==void 0?e:{};switch(Object.keys(r).forEach(d=>{n.setAttribute(d,r[d])}),t.bundleType){case"module":n.setAttribute("type",t.bundleType);break;case"nomodule":n.setAttribute(t.bundleType,"");break}return n}}class H{constructor(t){this.generator=t.generator}get(){return g(this,void 0,void 0,function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then(t=>t),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)})}generateSingletonAndCache(){return g(this,void 0,void 0,function*(){const t=yield this.generator();return this.cachedResponse=t,t})}}class Y0{constructor(t,e){this.braintreeClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("client"),window.braintree.client})}),this.dataCollector=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("data-collector"),window.braintree.dataCollector})}),this.hostedFields=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("hosted-fields"),window.braintree.hostedFields})}),this.venmo=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("venmo"),window.braintree.venmo})}),this.payPal=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("paypal-checkout"),window.braintree.paypalCheckout})}),this.applePay=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("apple-pay"),window.braintree.applePay})}),this.googlePayBraintreeClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("google-payment"),window.braintree.googlePayment})}),this.googlePaymentsClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://pay.google.com/gp/p/js/pay.js"}),new google.payments.api.PaymentsClient({environment:this.environment===mt.Development?"TEST":"PRODUCTION"})})}),this.recaptchaLibrary=new H({generator:()=>new Promise(i=>{window.donationFormGrecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.donationFormGrecaptchaLoadedCallback},10),i(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=donationFormGrecaptchaLoadedCallback&render=explicit"})})}),this.paypalLibrary=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://www.paypalobjects.com/api/checkout.js",attributes:{"data-version-4":"","log-level":"warn"}}),window.paypal})}),this.braintreeVersion="3.62.2",this.environment=mt.Development,this.lazyLoader=t,this.environment=e}loadBraintreeScript(t){return g(this,void 0,void 0,function*(){const e=this.environment===mt.Production?"min.js":"js",i=`${t}.${e}`,n=`https://js.braintreegateway.com/web/${this.braintreeVersion}/js/${i}`;yield this.lazyLoader.loadScript({src:n})})}}let nn=()=>({emit(o,...t){for(let e=this.events[o]||[],i=0,n=e.length;i<n;i++)e[i](...t)},events:{},on(o,t){return(this.events[o]||=[]).push(t),()=>{this.events[o]=this.events[o]?.filter(e=>t!==e)}}});class py extends Error{constructor(t){super(t),this.name="DonationFormError"}}class vy{on(t,e){return this.emitter.on(t,e)}constructor(t){var e,i;this.instance=new H({generator:()=>g(this,void 0,void 0,function*(){const n=yield this.braintreeManager.instance.get();return yield this.createHostedFields(n)})}),this.emitter=nn(),this.braintreeManager=t.braintreeManager,this.hostedFieldClient=t.hostedFieldClient,this.hostedFieldConfig=t.hostedFieldConfig,this.maxRetryCount=(e=t.maxRetryCount)!==null&&e!==void 0?e:2,this.loadTimeout=((i=t.loadTimeout)!==null&&i!==void 0?i:6)*1e3}createHostedFields(t){return g(this,arguments,void 0,function*(e,i=0){this.hostedFieldConfig.hostedFieldContainer.resetHostedFields();try{let n;const s=new Promise((a,l)=>{n=window.setTimeout(()=>{const h=new py("Timeout loading Hosted Fields");l(h)},this.loadTimeout)}),r=new Promise((a,l)=>g(this,void 0,void 0,function*(){try{const h=yield this.hostedFieldClient.create({client:e,styles:this.hostedFieldConfig.hostedFieldStyle,fields:this.hostedFieldConfig.hostedFieldFieldOptions});window.clearTimeout(n),a(h)}catch(h){h instanceof Error&&h.message.includes("Hosted Fields timed out")||l(h)}}));return yield Promise.race([s,r])}catch(n){if(i>=this.maxRetryCount)throw this.emitter.emit("hostedFieldsFailed",n),n;const s=i+1;return this.emitter.emit("hostedFieldsRetry",s),this.createHostedFields(e,s)}})}tokenizeHostedFields(){return g(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}markFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.markFieldErrors(t)}removeFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.removeFieldErrors(t)}showErrorMessage(t){this.hostedFieldConfig.hostedFieldContainer.showErrorMessage(t)}hideErrorMessage(){this.hostedFieldConfig.hostedFieldContainer.hideErrorMessage()}}class my{constructor(t){this.session=t.session,this.donationInfo=t.donationInfo,this.applePayInstance=t.applePayInstance,this.braintreeManager=t.braintreeManager}onvalidatemerchant(t){return g(this,void 0,void 0,function*(){return new Promise((e,i)=>{this.applePayInstance.performValidation({validationURL:t.validationURL,displayName:"Internet Archive"},(n,s)=>{var r;n?((r=this.delegate)===null||r===void 0||r.paymentFailed(n),this.session.abort(),i(`Merchant validation error: ${n}`)):(this.session.completeMerchantValidation(s),e())})})})}oncancel(){return g(this,void 0,void 0,function*(){var t;(t=this.delegate)===null||t===void 0||t.paymentCancelled()})}onpaymentauthorized(t){return g(this,void 0,void 0,function*(){var e,i,n,s;let r;try{r=yield this.applePayInstance.tokenize({token:t.payment.token})}catch(m){(e=this.delegate)===null||e===void 0||e.paymentFailed(m),this.session.completePayment(ApplePaySession.STATUS_FAILURE);return}const d=t.payment,a=d.billingContact,l=d.shippingContact,h=a?.addressLines;let c,u;h&&(c=h[0],u=h[1]);const p=new Do({streetAddress:c,extendedAddress:u,locality:a?.locality,region:a?.administrativeArea,postalCode:a?.postalCode,countryCodeAlpha2:a?.countryCode}),_=new Oo({email:l?.emailAddress,firstName:l?.givenName,lastName:l?.familyName});try{const m=yield this.braintreeManager.submitDonation({nonce:r.nonce,paymentProvider:S.ApplePay,donationInfo:this.donationInfo,billingInfo:p,customerInfo:_});m.success?((i=this.delegate)===null||i===void 0||i.paymentComplete(m),this.session.completePayment(ApplePaySession.STATUS_SUCCESS)):((n=this.delegate)===null||n===void 0||n.paymentFailed("Failure submitting data"),this.session.completePayment(ApplePaySession.STATUS_FAILURE))}catch(m){(s=this.delegate)===null||s===void 0||s.paymentFailed(m),this.session.completePayment(ApplePaySession.STATUS_FAILURE)}})}}class $y{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.applePayClient=t.applePayClient,this.applePaySessionManager=t.applePaySessionManager,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>g(this,void 0,void 0,function*(){if(!this.applePaySessionManager.canMakePayments())return;const i=yield this.braintreeManager.instance.get();return yield this.applePayClient.create({client:i})})})}isAvailable(){return g(this,void 0,void 0,function*(){try{return!!(yield this.instance.get())}catch{return!1}})}createPaymentRequest(t,e){return g(this,void 0,void 0,function*(){const i=yield this.instance.get();let n="Internet Archive Monthly";e.donationType===E.OneTime&&(n="Internet Archive");const s=i.createPaymentRequest({total:{label:n,amount:e.total},requiredBillingContactFields:["postalAddress"],requiredShippingContactFields:["name","email"]}),r=this.applePaySessionManager.createNewPaymentSession(s),d=new my({donationInfo:e,session:r,applePayInstance:i,braintreeManager:this.braintreeManager});return r.onvalidatemerchant=d.onvalidatemerchant.bind(d),r.onpaymentauthorized=d.onpaymentauthorized.bind(d),r.oncancel=d.oncancel.bind(d),r.begin(),d})}}class gy{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.venmoClient=t.venmoClient,this.venmoProfileId=t.venmoProfileId,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>this.braintreeManager.instance.get().then(i=>this.venmoClient.create({client:i,profileId:this.venmoProfileId}))})}isBrowserSupported(){return g(this,void 0,void 0,function*(){var t;if(this.isMobileFirefox())return!1;const e=yield this.instance.get();return(t=e?.isBrowserSupported())!==null&&t!==void 0?t:!1})}startPayment(){return g(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}isMobileFirefox(){const t=navigator.userAgent.indexOf("FxiOS")!==-1,e=navigator.userAgent.indexOf("Firefox")!==-1,i=navigator.userAgent.indexOf("Mobile")!==-1;return(e||t)&&i}}class yy{constructor(t){this.donationInfo=t.donationInfo,this.paypalInstance=t.paypalInstance}payment(){return g(this,void 0,void 0,function*(){var t;const i=this.donationInfo.donationType===E.OneTime?"checkout":"vault",n={flow:i,intent:"capture"};return n.enableShippingAddress=!0,i==="checkout"?(n.amount=this.donationInfo.total,n.currency="USD"):n.billingAgreementDescription=`Subscribe to donate ${it(this.donationInfo.total,{symbol:"$"}).format()} monthly`,(t=this.delegate)===null||t===void 0||t.payPalPaymentStarted(this,n),this.paypalInstance.createPayment(n)})}onAuthorize(t){return g(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentAuthorized(this,i),i})}onConfirm(t){return g(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentConfirmed(this,i),i})}onCancel(t){var e;(e=this.delegate)===null||e===void 0||e.payPalPaymentCancelled(this,t)}onError(t){var e;console.error("PayPal error",t),(e=this.delegate)===null||e===void 0||e.payPalPaymentError(this,t)}}class fy{constructor(t){this.braintreeManager=t.braintreeManager,this.paypalClient=t.paypalClient,this.paypalButtonGenerator=t.paypalButton,this.hostingEnvironment=t.hostingEnvironment,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.paypalClient.create({client:e}))})}renderPayPalButton(t){return g(this,void 0,void 0,function*(){const e=this.hostingEnvironment===mt.Development?"sandbox":"production",i=yield this.instance.get();if(!i)return;const n=new yy({donationInfo:t.donationInfo,paypalInstance:i});return this.paypalButtonGenerator.render({env:e,style:t.style,payment:n.payment.bind(n),onAuthorize:n.onAuthorize.bind(n),onCancel:n.onCancel.bind(n),onError:n.onError.bind(n),funding:{disallowed:[paypal.FUNDING.VENMO]}},t.selector),n})}}class eo{canMakePayments(){return"ApplePaySession"in window&&ApplePaySession.supportsVersion(eo.VERSION)&&ApplePaySession.canMakePayments()}createNewPaymentSession(t){return new ApplePaySession(eo.VERSION,t)}}eo.VERSION=3;class _y{isBrowserSupported(){return g(this,void 0,void 0,function*(){return this.paymentsClient.isReadyToPay({apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}}],existingPaymentMethodRequired:!1}).then(t=>t.result)})}constructor(t){this.braintreeManager=t.braintreeManager,this.googlePayMerchantId=t.googlePayMerchantId,this.googlePayBraintreeClient=t.googlePayBraintreeClient,this.paymentsClient=t.googlePaymentsClient,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.googlePayBraintreeClient.create({client:e,googlePayVersion:2,googleMerchantId:this.googlePayMerchantId}))})}}class Ay{on(t,e){return this.emitter.on(t,e)}constructor(t){this.creditCardHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.hostedFields.get(),i=new vy({braintreeManager:this.braintreeManager,hostedFieldClient:e,hostedFieldConfig:this.hostedFieldConfig});return i.on("hostedFieldsRetry",n=>{this.emitter.emit("hostedFieldsRetry",n)}),i.on("hostedFieldsFailed",n=>{this.emitter.emit("hostedFieldsFailed",n)}),i})}),this.applePayHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.applePay.get(),i=new eo;return new $y({braintreeManager:this.braintreeManager,applePayClient:e,applePaySessionManager:i})})}),this.venmoHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.venmo.get();if(this.venmoProfileId)return new gy({braintreeManager:this.braintreeManager,venmoClient:e,venmoProfileId:this.venmoProfileId})})}),this.paypalHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=this.paymentClients.paypalLibrary.get(),i=this.paymentClients.payPal.get(),n=yield Promise.all([i,e]);return new fy({braintreeManager:this.braintreeManager,paypalClient:n[0],paypalButton:n[1].Button,hostingEnvironment:this.hostingEnvironment})})}),this.googlePayHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=this.paymentClients.googlePaymentsClient.get(),i=this.paymentClients.googlePayBraintreeClient.get(),n=yield Promise.all([i,e]);return new _y({braintreeManager:this.braintreeManager,googlePayMerchantId:this.googlePayMerchantId,googlePayBraintreeClient:n[0],googlePaymentsClient:n[1]})})}),this.hostingEnvironment=mt.Development,this.emitter=nn(),this.braintreeManager=t.braintreeManager,this.venmoProfileId=t.venmoProfileId,this.googlePayMerchantId=t.googlePayMerchantId,this.paymentClients=t.paymentClients,this.hostingEnvironment=t.hostingEnvironment,this.hostedFieldConfig=t.hostedFieldConfig}}class J0{on(t,e){return this.emitter.on(t,e)}startup(){return g(this,void 0,void 0,function*(){return this.collectDeviceData()})}submitDonation(t){return g(this,void 0,void 0,function*(){const e=new A0;e.fee_amount_covered=t.donationInfo.feeAmountCovered,e.logged_in_user=this.loggedInUser,e.referrer=this.referrer,e.origin=this.origin;const i=D.calculateTotal(t.donationInfo.amount,t.donationInfo.coverFees),n=new lg({deviceData:this.deviceData,paymentProvider:t.paymentProvider,paymentMethodNonce:t.nonce,amount:i,donationType:t.donationInfo.donationType,customer:t.customerInfo,billing:t.billingInfo,customFields:e,upsellOnetimeTransactionId:t.upsellOnetimeTransactionId,customerId:t.customerId,recaptchaToken:t.recaptchaToken,bin:t.bin,binName:t.binName}),s=yield this.endpointManager.submitData(n);return new pg(s)})}submitUpsellDonation(t){return g(this,void 0,void 0,function*(){const e=t.oneTimeDonationResponse,i=new D({amount:t.amount,donationType:E.Upsell,coverFees:!1});return this.submitDonation({nonce:e.paymentMethodNonce,paymentProvider:e.paymentProvider,customerId:e.customer_id,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing,upsellOnetimeTransactionId:e.transaction_id})})}donationSuccessful(t){this.endpointManager.donationSuccessful(t)}collectDeviceData(){return g(this,void 0,void 0,function*(){if(this.deviceDataCollectionStarted)return;this.deviceDataCollectionStarted=!0;const t=yield this.instance.get();if(t)return this.paymentClients.dataCollector.get().then(e=>e?.create({client:t,kount:!1,paypal:!0})).then(e=>{this.deviceData=e?.deviceData})})}constructor(t){this.emitter=nn(),this.instance=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.braintreeClient.get();return e?.create({authorization:this.authorizationToken})})}),this.deviceDataCollectionStarted=!1,this.hostingEnvironment=mt.Development,this.authorizationToken=t.authorizationToken,this.endpointManager=t.endpointManager,this.hostingEnvironment=t.hostingEnvironment,this.paymentClients=t.paymentClients,this.referrer=t.referrer,this.loggedInUser=t.loggedInUser,this.origin=t.origin,this.paymentProviders=new Ay({braintreeManager:this,paymentClients:this.paymentClients,venmoProfileId:t.venmoProfileId,googlePayMerchantId:t.googlePayMerchantId,hostingEnvironment:t.hostingEnvironment,hostedFieldConfig:t.hostedFieldConfig}),this.paymentProviders.on("hostedFieldsRetry",e=>{this.emitter.emit("paymentProvidersHostedFieldsRetry",e)}),this.paymentProviders.on("hostedFieldsFailed",e=>{this.emitter.emit("paymentProvidersHostedFieldsFailed",e)})}setReferrer(t){this.referrer=t}setLoggedInUser(t){this.loggedInUser=t}setOrigin(t){this.origin=t}}var ot;(function(o){o.Number="number",o.CVV="cvv",o.ExpirationDate="expirationDate"})(ot||(ot={}));class Q0{fieldFor(t){switch(t){case ot.Number:return this.number;case ot.CVV:return this.cvv;case ot.ExpirationDate:return this.expirationDate}}markFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!0})}removeFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!1})}showErrorMessage(t){const e=t??"Some payment information below is missing or incorrect.";this.errorContainer.innerHTML=e,this.errorContainer.style.display="block"}hideErrorMessage(){this.errorContainer.style.display="none"}resetHostedFields(){[this.number,this.cvv,this.expirationDate].forEach(e=>{for(;e.firstChild;)e.firstChild.remove()})}constructor(t){this.number=t.number,this.cvv=t.cvv,this.expirationDate=t.expirationDate,this.errorContainer=t.errorContainer}}class by{constructor(t){this.started=!1,this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.recaptchaManager=t.recaptchaManager,this.emitter=nn()}on(t,e){return this.emitter.on(t,e)}startup(){return g(this,void 0,void 0,function*(){var t;if(this.started)return;this.started=!0;const e=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get(),i=yield e?.instance.get();i?.on("focus",n=>{const{emittedBy:s,fields:r}=n,d=r[s],{container:a}=d;a.parentElement.error=!1,e.hideErrorMessage()}),i?.on("blur",n=>{const{emittedBy:s,fields:r}=n,d=r[s],{container:a,isEmpty:l,isValid:h}=d;(l||!h)&&(a.parentElement.error=!0)}),i?.on("validityChange",n=>{const{fields:s}=n,r=s.cvv.isValid&&s.expirationDate.isValid&&s.number.isValid;this.emitter.emit("validityChanged",r)})})}tokenizeFields(){return g(this,void 0,void 0,function*(){let t;const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();try{t=yield e?.tokenizeHostedFields()}catch(i){this.handleHostedFieldTokenizationError(i);return}return t})}paymentInitiated(t,e,i){return g(this,void 0,void 0,function*(){let n;try{n=yield this.recaptchaManager.execute()}catch{this.donationFlowModalManager.showErrorModal({message:"Recaptcha failure"});return}this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:S.CreditCard,recaptchaToken:n,bin:t.details.bin,donationInfo:e,customerInfo:i.customer,billingInfo:i.billing})})}handleHostedFieldTokenizationError(t){return g(this,void 0,void 0,function*(){const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();switch(e.showErrorMessage(),t.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e.markFieldErrors([ot.Number,ot.CVV,ot.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":Object.keys(t.details.invalidFields).forEach(i=>{e.markFieldErrors([i])});break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e.markFieldErrors([ot.CVV]);break}})}}class X0{keydown(t){var e,i;const n=t.key;if(t.metaKey)return;switch(n){case"Tab":case"Delete":case"Backspace":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return}const s=t.target,r=s.value,d=r.slice(0,(e=s.selectionStart)!==null&&e!==void 0?e:0),a=r.slice((i=s.selectionEnd)!==null&&i!==void 0?i:0),l=`${d}${n}${a}`,h=/^[0-9]+(\.[0-9]{0,2})?$/g;l.match(h)||t.preventDefault()}}var Kt;(function(o){o.YesButton="YesButton",o.PayPalUpsellSlot="PayPalUpsellSlot"})(Kt||(Kt={}));let bi=class extends U{constructor(){super(...arguments),this.yesButtonMode=Kt.YesButton,this.amount=5,this.currencyValidator=new X0}render(){return y`
      <h3>Thank you for donating!</h3>
      <button @click=${this.noThanksSelected} class="cta-button" id="no-button">Continue</button>
      <p class="or_separator"><span>or</span></p>
      <h3>Join our Monthly Giving Circle</h3>
      <p class="appeal">Monthly support helps us reliably plan for the future.</p>
      <div class="monthly-amount">
        <h1>Enter your monthly amount</h1>
        <div class="amount-input">
          <span class="dollar-symbol">$</span>
          <input
            id="amount-input"
            type="text"
            tabindex="0"
            value=${this.amount}
            @input=${this.amountChanged}
            @keydown=${this.currencyValidator.keydown}
          />
        </div>
        <div class="error ${this.error?"":"hidden"}">${this.error}</div>
      </div>

      ${this.yesButton}
    `}get yesButton(){switch(this.yesButtonMode){case Kt.YesButton:return y`
          <button
            class="cta-button"
            tabindex="0"
            id="yes-button"
            @click=${this.yesSelected}
            .disabled=${this.error!==void 0}
          >
            YES, I'll donate monthly
          </button>
        `;case Kt.PayPalUpsellSlot:return y`
          <div class="paypal-upsell-slot-container">
            <div class="paypal-upsell-slot-blocker ${this.error?"":"hidden"}"></div>
            <button class="cta-button" id="paypal-cover-button">YES, I'll donate monthly</button>
            <slot class="paypal-upsell-slot"></slot>
          </div>
        `}}amountChanged(t){const i=t.target.value;i.length!==0&&this.handleCustomAmountInput(i)}handleCustomAmountInput(t){const e=parseFloat(t);isNaN(e)?this.error=y` Please enter a valid amount. `:this.processAmount(e)}processAmount(t){if(t>=1e4){this.error=y`
        To make a donation of $10,000 or more, please contact our philanthropy department at
        <a href="mailto:donations@archive.org">donations@archive.org</a>
      `;return}if(t<1){this.amountInput&&this.amountInput.value.length>0&&(this.error=y` The minimum donation amount is $1. `);return}this.error=void 0,this.amount=t;const e=new CustomEvent("amountChanged",{detail:{amount:this.amount}});this.dispatchEvent(e)}yesSelected(){const t=new CustomEvent("yesSelected",{detail:{amount:this.amount}});this.dispatchEvent(t)}noThanksSelected(){this.dispatchEvent(new Event("noThanksSelected"))}static get styles(){const t=$`var(--upsellCTAButtonColor, #194880)`,e=$`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`,i=$`var(--upsellAmountInputOffset, -1rem)`;return $`
      .monthly-amount {
        background-color: #fff;
        padding: 0.5rem 0.625rem;
        border-radius: 5px;
        text-align: center;
        margin-bottom: 0.5rem;
        margin-top: 0;
      }

      .monthly-amount h1 {
        font-size: 1.8rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.2em;
        margin: 0;
        padding: 0.5rem 0 0 0;
      }

      .hidden {
        display: none;
      }

      h3 {
        text-align: center;
        font-size: 1.8rem;
        margin: 0 1rem 0.5rem 1rem;
      }

      .appeal {
        text-align: center;
        font-size: 1.6rem;
        margin: 0.5rem 1rem;
      }

      .amount-input {
        transform: translate(${i}, 0); /* translate slightly to center the input */
      }

      .amount-input .dollar-symbol {
        font-size: 1.8rem;
        font-weight: bold;
      }

      .amount-input input {
        width: 100px;
        text-align: center;
        border: none;
        border-bottom: 1px solid gray;
        font-weight: bold;
        font-size: 3.4rem;
      }

      .cta-button {
        font-size: 2rem;
        display: block;
        width: 100%;
        margin-top: 0.5rem;
        padding: 1rem 2rem;
        background-color: ${t};
        color: #fff;
        border-radius: 5px;
        border: 0;
        font-weight: bold;
        line-height: normal;
        outline: none;
        cursor: pointer;
      }

      .cta-button:disabled {
        background-color: ${e};
        cursor: not-allowed;
      }

      .paypal-upsell-slot {
        text-align: center;
      }

      .paypal-upsell-slot-blocker {
        position: absolute;
        width: 100%;
        height: 4.5rem;
        bottom: 0;
        z-index: 250;
        cursor: not-allowed;
        background-color: rgba(255, 255, 255, 0.5);
      }

      .paypal-upsell-slot-blocker.hidden {
        display: none;
      }

      #paypal-cover-button {
        position: absolute;
        width: 100%;
        bottom: 0;
      }

      .paypal-upsell-slot-container {
        position: relative;
      }

      .paypal-upsell-slot-container .paypal-cta {
        font-size: 2.4rem;
        font-weight: bold;
        margin: 0 1rem 1rem 1rem;
        text-align: center;
      }

      .error {
        font-size: 1.4rem;
        margin: 0.5rem 0;
        color: red;
      }

      .or_separator {
        position: relative;
        margin: 0 2rem;
        font-size: 2.6rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
      }

      .or_separator:before {
        position: absolute;
        top: calc(50% - 1px);
        right: 0;
        left: 0;
        height: 2px;
        content: '';
        background: #333;
      }

      .or_separator span {
        display: inline-block;
        position: relative;
        padding: 0 1rem;
        background: #f5f5f7;
      }
    `}};v([f({type:String})],bi.prototype,"yesButtonMode",void 0);v([f({type:Number})],bi.prototype,"amount",void 0);v([f({type:Object})],bi.prototype,"error",void 0);v([M("#amount-input")],bi.prototype,"amountInput",void 0);bi=v([St("upsell-modal-content")],bi);class ge{constructor(t){var e,i,n,s,r,d,a;this.title=t?.title,this.subtitle=t?.subtitle,this.headline=t?.headline,this.message=t?.message,this.headerColor=(e=t?.headerColor)!==null&&e!==void 0?e:"#55A183",this.bodyColor=(i=t?.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(n=t?.showProcessingIndicator)!==null&&n!==void 0?n:!1,this.processingImageMode=(s=t?.processingImageMode)!==null&&s!==void 0?s:"complete",this.showCloseButton=(r=t?.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(d=t?.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(a=t?.closeOnBackdropClick)!==null&&a!==void 0?a:!0}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=window,qd=Vo.ShadowRoot&&(Vo.ShadyCSS===void 0||Vo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tv=Symbol(),ic=new WeakMap;let Sy=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==tv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(qd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ic.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ic.set(e,t))}return t}toString(){return this.cssText}};const Cy=o=>new Sy(typeof o=="string"?o:o+"",void 0,tv),Ey=(o,t)=>{qd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Vo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},nc=qd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Cy(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qr;const $s=window,oc=$s.trustedTypes,wy=oc?oc.emptyScript:"",sc=$s.reactiveElementPolyfillSupport,bl={toAttribute(o,t){switch(t){case Boolean:o=o?wy:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ev=(o,t)=>t!==o&&(t==t||o==o),Xr={attribute:!0,type:String,converter:bl,reflect:!1,hasChanged:ev},Sl="finalized";let un=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Xr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Xr}static finalize(){if(this.hasOwnProperty(Sl))return!1;this[Sl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(nc(n))}else t!==void 0&&e.push(nc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ey(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Xr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:bl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:bl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ev)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};un[Sl]=!0,un.elementProperties=new Map,un.elementStyles=[],un.shadowRootOptions={mode:"open"},sc?.({ReactiveElement:un}),((Qr=$s.reactiveElementVersions)!==null&&Qr!==void 0?Qr:$s.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ta;const gs=window,Si=gs.trustedTypes,rc=Si?Si.createPolicy("lit-html",{createHTML:o=>o}):void 0,Cl="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,iv="?"+Ht,Py=`<${iv}>`,qe=document,ys=()=>qe.createComment(""),io=o=>o===null||typeof o!="object"&&typeof o!="function",nv=Array.isArray,My=o=>nv(o)||typeof o?.[Symbol.iterator]=="function",ea=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ac=/-->/g,lc=/>/g,ie=RegExp(`>|${ea}(?:([^\\s"'>=/]+)(${ea}*=${ea}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dc=/'/g,hc=/"/g,ov=/^(?:script|style|textarea|title)$/i,no=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),cc=new WeakMap,Ce=qe.createTreeWalker(qe,129,null,!1);function sv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return rc!==void 0?rc.createHTML(t):t}const xy=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=pn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===pn?h[1]==="!--"?r=ac:h[1]!==void 0?r=lc:h[2]!==void 0?(ov.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ie):h[3]!==void 0&&(r=ie):r===ie?h[0]===">"?(r=n??pn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ie:h[3]==='"'?hc:dc):r===hc||r===dc?r=ie:r===ac||r===lc?r=pn:(r=ie,n=void 0);const p=r===ie&&o[d+1].startsWith("/>")?" ":"";s+=r===pn?a+Py:c>=0?(i.push(l),a.slice(0,c)+Cl+a.slice(c)+Ht+p):a+Ht+(c===-2?(i.push(void 0),d):p)}return[sv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let El=class rv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=xy(t,e);if(this.el=rv.createElement(l,i),Ce.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ce.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Cl)||u.startsWith(Ht)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Cl).split(Ht),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?ky:m[1]==="?"?Uy:m[1]==="@"?Iy:$r})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(ov.test(n.tagName)){const c=n.textContent.split(Ht),u=c.length-1;if(u>0){n.textContent=Si?Si.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],ys()),Ce.nextNode(),a.push({type:2,index:++s});n.append(c[u],ys())}}}else if(n.nodeType===8)if(n.data===iv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ht,c+1))!==-1;)a.push({type:7,index:s}),c+=Ht.length-1}s++}}static createElement(t,e){const i=qe.createElement("template");return i.innerHTML=t,i}};function Ci(o,t,e=o,i){var n,s,r,d;if(t===no)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=io(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ci(o,a._$AS(o,t.values),a,i)),t}let Ty=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:qe).importNode(i,!0);Ce.currentNode=s;let r=Ce.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new av(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Ny(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ce.nextNode(),d++)}return Ce.currentNode=qe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},av=class lv{constructor(t,e,i,n){var s;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ci(this,t,e),io(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==no&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):My(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&io(this._$AH)?this._$AA.nextSibling.data=t:this.$(qe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=El.createElement(sv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Ty(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=cc.get(t.strings);return e===void 0&&cc.set(t.strings,e=new El(t)),e}T(t){nv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new lv(this.k(ys()),this.k(ys()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},$r=class{constructor(t,e,i,n,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ci(this,t,e,0),r=!io(t)||t!==this._$AH&&t!==no,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ci(this,d[i+a],e,a),l===no&&(l=this._$AH[a]),r||(r=!io(l)||l!==this._$AH[a]),l===F?t=F:t!==F&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ky=class extends $r{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}};const Hy=Si?Si.emptyScript:"";let Uy=class extends $r{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,Hy):this.element.removeAttribute(this.name)}},Iy=class extends $r{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ci(this,t,e,0))!==null&&i!==void 0?i:F)===no)return;const n=this._$AH,s=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==F&&(n===F||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ny=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ci(this,t)}};const uc=gs.litHtmlPolyfillSupport;uc?.(El,av),((ta=gs.litHtmlVersions)!==null&&ta!==void 0?ta:gs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dv=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dy=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},Oy=(o,t,e)=>{t.constructor.createProperty(e,o)};function gr(o){return(t,e)=>e!==void 0?Oy(o,t,e):Dy(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ry=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(d){o(d,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fy(o,t){return Ry({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ia;((ia=window.HTMLSlotElement)===null||ia===void 0?void 0:ia.prototype.assignedElements)!=null;function*Wd(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*Wd(o.shadowRoot.activeElement)))}function Ly(){return[...Wd()].pop()}const pc=new WeakMap;function hv(o){let t=pc.get(o);return t||(t=window.getComputedStyle(o,null),pc.set(o,t)),t}function By(o){if("checkVisibility"in o&&typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=hv(o);return t.visibility!=="hidden"&&t.display!=="none"}function zy(o){const t=hv(o),{overflowY:e,overflowX:i}=t;return e==="scroll"||i==="scroll"?!0:e!=="auto"||i!=="auto"?!1:o.scrollHeight>o.clientHeight&&e==="auto"||o.scrollWidth>o.clientWidth&&i==="auto"}function jy(o){const t=o.tagName.toLowerCase(),e=Number(o.getAttribute("tabindex"));return o.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||o.hasAttribute("disabled")||o.closest("[inert]")||t==="input"&&o.getAttribute("type")==="radio"&&!o.hasAttribute("checked")||!By(o)?!1:(t==="audio"||t==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:zy(o)}function Vy(o,t){var e;return((e=o.getRootNode({composed:!0}))===null||e===void 0?void 0:e.host)!==t}function vc(o){const t=new WeakMap,e=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!e.includes(n)&&jy(n)&&e.push(n),n instanceof HTMLSlotElement&&Vy(n,o)&&n.assignedElements({flatten:!0}).forEach(s=>{i(s)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const s of Array.from(n.children))i(s)}return i(o),e.sort((n,s)=>{const r=Number(n.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-r})}let vn=[];class qy{constructor(t){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const n=Ly();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=vc(this.element);let r=s.findIndex(a=>a===n);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){r+d>=s.length?r=0:r+d<0?r=s.length-1:r+=d,this.previousFocus=this.currentFocus;const a=s[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const l=[...Wd()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){vn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){vn=vn.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return vn[vn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=vc(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],n=this.tabDirection==="forward"?e:i;typeof n?.focus=="function"&&(this.currentFocus=n,n.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=window,Kd=qo.ShadowRoot&&(qo.ShadyCSS===void 0||qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cv=Symbol(),mc=new WeakMap;let Wy=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==cv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=mc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mc.set(e,t))}return t}toString(){return this.cssText}};const Ky=o=>new Wy(typeof o=="string"?o:o+"",void 0,cv),Zy=(o,t)=>{Kd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=qo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},$c=Kd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ky(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var na;const fs=window,gc=fs.trustedTypes,Gy=gc?gc.emptyScript:"",yc=fs.reactiveElementPolyfillSupport,wl={toAttribute(o,t){switch(t){case Boolean:o=o?Gy:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},uv=(o,t)=>t!==o&&(t==t||o==o),oa={attribute:!0,type:String,converter:wl,reflect:!1,hasChanged:uv},Pl="finalized";let mn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=oa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||oa}static finalize(){if(this.hasOwnProperty(Pl))return!1;this[Pl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift($c(n))}else t!==void 0&&e.push($c(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Zy(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=oa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:wl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:wl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||uv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};mn[Pl]=!0,mn.elementProperties=new Map,mn.elementStyles=[],mn.shadowRootOptions={mode:"open"},yc?.({ReactiveElement:mn}),((na=fs.reactiveElementVersions)!==null&&na!==void 0?na:fs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sa;const _s=window,Ei=_s.trustedTypes,fc=Ei?Ei.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ml="$lit$",Ut=`lit$${(Math.random()+"").slice(9)}$`,pv="?"+Ut,Yy=`<${pv}>`,We=document,As=()=>We.createComment(""),oo=o=>o===null||typeof o!="object"&&typeof o!="function",vv=Array.isArray,Jy=o=>vv(o)||typeof o?.[Symbol.iterator]=="function",ra=`[ 	
\f\r]`,$n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_c=/-->/g,Ac=/>/g,ne=RegExp(`>|${ra}(?:([^\\s"'>=/]+)(${ra}*=${ra}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bc=/'/g,Sc=/"/g,mv=/^(?:script|style|textarea|title)$/i,so=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Cc=new WeakMap,Ee=We.createTreeWalker(We,129,null,!1);function $v(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return fc!==void 0?fc.createHTML(t):t}const Qy=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=$n;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===$n?h[1]==="!--"?r=_c:h[1]!==void 0?r=Ac:h[2]!==void 0?(mv.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ne):h[3]!==void 0&&(r=ne):r===ne?h[0]===">"?(r=n??$n,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ne:h[3]==='"'?Sc:bc):r===Sc||r===bc?r=ne:r===_c||r===Ac?r=$n:(r=ne,n=void 0);const p=r===ne&&o[d+1].startsWith("/>")?" ":"";s+=r===$n?a+Yy:c>=0?(i.push(l),a.slice(0,c)+Ml+a.slice(c)+Ut+p):a+Ut+(c===-2?(i.push(void 0),d):p)}return[$v(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let xl=class gv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=Qy(t,e);if(this.el=gv.createElement(l,i),Ee.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ee.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Ml)||u.startsWith(Ut)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ml).split(Ut),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?t1:m[1]==="?"?i1:m[1]==="@"?n1:yr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(mv.test(n.tagName)){const c=n.textContent.split(Ut),u=c.length-1;if(u>0){n.textContent=Ei?Ei.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],As()),Ee.nextNode(),a.push({type:2,index:++s});n.append(c[u],As())}}}else if(n.nodeType===8)if(n.data===pv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ut,c+1))!==-1;)a.push({type:7,index:s}),c+=Ut.length-1}s++}}static createElement(t,e){const i=We.createElement("template");return i.innerHTML=t,i}};function wi(o,t,e=o,i){var n,s,r,d;if(t===so)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=oo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=wi(o,a._$AS(o,t.values),a,i)),t}let Xy=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:We).importNode(i,!0);Ee.currentNode=s;let r=Ee.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new yv(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new o1(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ee.nextNode(),d++)}return Ee.currentNode=We,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},yv=class fv{constructor(t,e,i,n){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wi(this,t,e),oo(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==so&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&oo(this._$AH)?this._$AA.nextSibling.data=t:this.$(We.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xl.createElement($v(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Xy(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Cc.get(t.strings);return e===void 0&&Cc.set(t.strings,e=new xl(t)),e}T(t){vv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new fv(this.k(As()),this.k(As()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},yr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=wi(this,t,e,0),r=!oo(t)||t!==this._$AH&&t!==so,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=wi(this,d[i+a],e,a),l===so&&(l=this._$AH[a]),r||(r=!oo(l)||l!==this._$AH[a]),l===L?t=L:t!==L&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},t1=class extends yr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}};const e1=Ei?Ei.emptyScript:"";let i1=class extends yr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,e1):this.element.removeAttribute(this.name)}},n1=class extends yr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=wi(this,t,e,0))!==null&&i!==void 0?i:L)===so)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},o1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wi(this,t)}};const Ec=_s.litHtmlPolyfillSupport;Ec?.(xl,yv),((sa=_s.litHtmlVersions)!==null&&sa!==void 0?sa:_s.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const s1=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r1=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},a1=(o,t,e)=>{t.constructor.createProperty(e,o)};function l1(o){return(t,e)=>e!==void 0?a1(o,t,e):r1(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var aa;((aa=window.HTMLSlotElement)===null||aa===void 0?void 0:aa.prototype.assignedElements)!=null;var wc;(function(o){o.processing="processing",o.complete="complete"})(wc||(wc={}));let Tl=class extends U{constructor(){super(...arguments),this.mode="processing"}render(){return y`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `}static get styles(){const t=$`var(--activityIndicatorCheckmarkColor, #31A481)`,e=$`var(--activityIndicatorCompletedRingColor, #31A481)`,i=$`var(--activityIndicatorLoadingRingColor, #333333)`,n=$`var(--activityIndicatorLoadingDotColor, #333333)`;return $`
      #completed-ring {
        fill: ${e};
      }

      #check {
        fill: ${t};
      }

      #activity-ring {
        fill: ${i};
      }

      #activity-dots {
        fill: ${n};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `}};v([l1({type:String})],Tl.prototype,"mode",void 0);Tl=v([s1("ia-activity-indicator")],Tl);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=window,Zd=Wo.ShadowRoot&&(Wo.ShadyCSS===void 0||Wo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_v=Symbol(),Pc=new WeakMap;let d1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==_v)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Zd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Pc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Pc.set(e,t))}return t}toString(){return this.cssText}};const h1=o=>new d1(typeof o=="string"?o:o+"",void 0,_v),c1=(o,t)=>{Zd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Wo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Mc=Zd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return h1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var la;const bs=window,xc=bs.trustedTypes,u1=xc?xc.emptyScript:"",Tc=bs.reactiveElementPolyfillSupport,kl={toAttribute(o,t){switch(t){case Boolean:o=o?u1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Av=(o,t)=>t!==o&&(t==t||o==o),da={attribute:!0,type:String,converter:kl,reflect:!1,hasChanged:Av},Hl="finalized";let gn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=da){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||da}static finalize(){if(this.hasOwnProperty(Hl))return!1;this[Hl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Mc(n))}else t!==void 0&&e.push(Mc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return c1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=da){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:kl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:kl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Av)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};gn[Hl]=!0,gn.elementProperties=new Map,gn.elementStyles=[],gn.shadowRootOptions={mode:"open"},Tc?.({ReactiveElement:gn}),((la=bs.reactiveElementVersions)!==null&&la!==void 0?la:bs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ha;const Ss=window,Pi=Ss.trustedTypes,kc=Pi?Pi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ul="$lit$",It=`lit$${(Math.random()+"").slice(9)}$`,bv="?"+It,p1=`<${bv}>`,Ke=document,Cs=()=>Ke.createComment(""),ro=o=>o===null||typeof o!="object"&&typeof o!="function",Sv=Array.isArray,v1=o=>Sv(o)||typeof o?.[Symbol.iterator]=="function",ca=`[ 	
\f\r]`,yn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hc=/-->/g,Uc=/>/g,oe=RegExp(`>|${ca}(?:([^\\s"'>=/]+)(${ca}*=${ca}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ic=/'/g,Nc=/"/g,Cv=/^(?:script|style|textarea|title)$/i,ao=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Dc=new WeakMap,we=Ke.createTreeWalker(Ke,129,null,!1);function Ev(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return kc!==void 0?kc.createHTML(t):t}const m1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=yn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===yn?h[1]==="!--"?r=Hc:h[1]!==void 0?r=Uc:h[2]!==void 0?(Cv.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=oe):h[3]!==void 0&&(r=oe):r===oe?h[0]===">"?(r=n??yn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?oe:h[3]==='"'?Nc:Ic):r===Nc||r===Ic?r=oe:r===Hc||r===Uc?r=yn:(r=oe,n=void 0);const p=r===oe&&o[d+1].startsWith("/>")?" ":"";s+=r===yn?a+p1:c>=0?(i.push(l),a.slice(0,c)+Ul+a.slice(c)+It+p):a+It+(c===-2?(i.push(void 0),d):p)}return[Ev(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Il=class wv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=m1(t,e);if(this.el=wv.createElement(l,i),we.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=we.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Ul)||u.startsWith(It)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ul).split(It),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?g1:m[1]==="?"?f1:m[1]==="@"?_1:fr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Cv.test(n.tagName)){const c=n.textContent.split(It),u=c.length-1;if(u>0){n.textContent=Pi?Pi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Cs()),we.nextNode(),a.push({type:2,index:++s});n.append(c[u],Cs())}}}else if(n.nodeType===8)if(n.data===bv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(It,c+1))!==-1;)a.push({type:7,index:s}),c+=It.length-1}s++}}static createElement(t,e){const i=Ke.createElement("template");return i.innerHTML=t,i}};function Mi(o,t,e=o,i){var n,s,r,d;if(t===ao)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=ro(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Mi(o,a._$AS(o,t.values),a,i)),t}let $1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ke).importNode(i,!0);we.currentNode=s;let r=we.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Pv(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new A1(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=we.nextNode(),d++)}return we.currentNode=Ke,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Pv=class Mv{constructor(t,e,i,n){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mi(this,t,e),ro(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==ao&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):v1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&ro(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ke.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Il.createElement(Ev(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new $1(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Dc.get(t.strings);return e===void 0&&Dc.set(t.strings,e=new Il(t)),e}T(t){Sv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Mv(this.k(Cs()),this.k(Cs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},fr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Mi(this,t,e,0),r=!ro(t)||t!==this._$AH&&t!==ao,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Mi(this,d[i+a],e,a),l===ao&&(l=this._$AH[a]),r||(r=!ro(l)||l!==this._$AH[a]),l===B?t=B:t!==B&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},g1=class extends fr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}};const y1=Pi?Pi.emptyScript:"";let f1=class extends fr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,y1):this.element.removeAttribute(this.name)}},_1=class extends fr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Mi(this,t,e,0))!==null&&i!==void 0?i:B)===ao)return;const n=this._$AH,s=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==B&&(n===B||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},A1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Mi(this,t)}};const Oc=Ss.litHtmlPolyfillSupport;Oc?.(Il,Pv),((ha=Ss.litHtmlVersions)!==null&&ha!==void 0?ha:Ss.litHtmlVersions=[]).push("2.8.0");const b1=y`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`;class S1 extends U{static get styles(){return $`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `}render(){return b1}}customElements.define("ia-icon-close",S1);const C1=y`
  <svg
    class="ia-logo"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="logoTitleID logoDescID"
  >
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">
      A line drawing of the Internet Archive headquarters building façade.
    </desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" class="fill-color">
        <path
          d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z"
          id="path-1"
        ></path>
      </mask>
      <use class="fill-color" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" class="fill-color">
        <path
          d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z"
          id="swatch"
        ></path>
      </g>
    </g>
  </svg>
`;let Nl=class extends U{constructor(){super(...arguments),this.config=new ge}render(){return y`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?y`<div class="logo-icon">${C1}</div>`:x}
            ${this.config.title?y`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?y`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?"":"hidden"}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?y` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?y` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(t){if(t.preventDefault(),t.type==="keydown"&&t.key!==" "&&t.key!=="Enter")return;const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return y`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const t=$`var(--modalLogoSize, 6.5rem)`,e=$`var(--processingImageSize, 7.5rem)`,i=$`var(--modalCornerRadius, 1rem)`,n=$`var(--modalBorder, 2px solid black)`,s=$`var(--modalBottomMargin, 2.5rem)`,r=$`var(--modalTopMargin, 5rem)`,d=$`var(--modalHeaderBottomPadding, 0.5em)`,a=$`var(--modalBottomPadding, 2rem)`,l=$`var(--modalScrollOffset, 5px)`,h=$`var(--modalTitleFontSize, 1.8rem)`,c=$`var(--modalSubtitleFontSize, 1.4rem)`,u=$`var(--modalHeadlineFontSize, 1.6rem)`,p=$`var(--modalMessageFontSize, 1.4rem)`,_=$`var(--modalTitleLineHeight, normal)`,m=$`var(--modalSubtitleLineHeight, normal)`,I=$`var(--modalHeadlineLineHeight, normal)`,N=$`var(--modalMessageLineHeight, normal)`;return $`
      .processing-logo {
        margin: auto;
        width: ${e};
        height: ${e};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${i};
        width: 100%;
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${i}) calc(${i}) 0 0;
        border: ${n};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${h};
        font-weight: bold;
        line-height: ${_};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${c};
        line-height: ${m};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${i}) calc(${i});
        border: ${n};
        border-top: 0;
        padding: 0 1rem calc(${a} - ${l}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${s}));
        min-height: 5rem;
        padding: 0 0 calc(${l}) 0;
      }

      .headline {
        font-size: ${u};
        font-weight: bold;
        text-align: center;
        line-height: ${I};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${N};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${t};
        height: ${t};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${t} * 0.65);
        height: calc(${t} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `}};v([gr({type:Object})],Nl.prototype,"config",void 0);Nl=v([dv("modal-template")],Nl);function E1(o,t,e){var i=e||{},n=i.noTrailing,s=n===void 0?!1:n,r=i.noLeading,d=r===void 0?!1:r,a=i.debounceMode,l=a===void 0?void 0:a,h,c=!1,u=0;function p(){h&&clearTimeout(h)}function _(I){var N=I||{},et=N.upcomingOnly,vt=et===void 0?!1:et;p(),c=!vt}function m(){for(var I=arguments.length,N=new Array(I),et=0;et<I;et++)N[et]=arguments[et];var vt=this,gt=Date.now()-u;if(c)return;function yt(){u=Date.now(),t.apply(vt,N)}function wt(){h=void 0}!d&&l&&!h&&yt(),p(),l===void 0&&gt>o?d?(u=Date.now(),s||(h=setTimeout(l?wt:yt,o))):yt():s!==!0&&(h=setTimeout(l?wt:yt,l===void 0?o-gt:o))}return m.cancel=_,m}var Fe;(function(o){o.Open="open",o.Closed="closed"})(Fe||(Fe={}));class w1{constructor(t){this.windowResizeThrottler=E1(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case Fe.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Fe.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let xi=class extends U{constructor(){super(...arguments),this.mode=Fe.Closed,this.hostBridge=new w1(this),this.modal=new qy(this),this.closeOnBackdropClick=!0}firstUpdated(){return g(this,void 0,void 0,function*(){yield new Promise(t=>setTimeout(t,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",t=>{t.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return y`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Fe.Closed,this.customModalContent=void 0,this.modalTemplate.config=new ge,this.modal.deactivate()}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}showModal(t){return g(this,void 0,void 0,function*(){this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.modalTemplate.config=t.config,this.customModalContent=t.customModalContent,this.mode=Fe.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=$`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=$`var(--modalBackdropZindex, 1000)`,i=$`var(--modalWidth, 32rem)`,n=$`var(--modalMaxWidth, 95%)`,s=$`var(--modalZindex, 2000)`;return $`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${t};
        width: 100%;
        height: 100%;
        z-index: ${e};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${s};
        width: ${i};
        max-width: ${n};
      }
    `}};v([gr({type:String,reflect:!0})],xi.prototype,"mode",void 0);v([gr({type:Object})],xi.prototype,"customModalContent",void 0);v([gr({type:Object})],xi.prototype,"hostBridge",void 0);v([Fy("modal-template")],xi.prototype,"modalTemplate",void 0);xi=v([dv("modal-manager")],xi);let Ze=class extends U{constructor(){super(...arguments),this.amount=5,this.currencyType="$",this.donationType=E.OneTime,this.confirmDonation=()=>{},this.cancelDonation=()=>{}}get confirmationText(){const t=it(this.amount,{symbol:this.currencySymbol}).format();return y`
      <p>
        You are about to make a <b>${this.donationType}</b> donation of
        <b>${t} ${this.currencyType}</b> to the Internet Archive.
      </p>
    `}get confirmUpsellText(){const t=it(this.amount,{symbol:this.currencySymbol}).format();return y`<p>
      You are about to begin making <b>monthly</b> donations of
      <b>${t} ${this.currencyType}</b> to the Internet Archive. (Your first recurring
      contribution will be next month.)
    </p>`}confirm(){this===null||this===void 0||this.confirmDonation()}cancel(){this===null||this===void 0||this.cancelDonation()}get confirmCTA(){return this.donationType===E.Upsell?"Start monthly donation":"Complete donation"}render(){return y`
      ${this.donationType===E.Upsell?this.confirmUpsellText:this.confirmationText}

      <div class="cta-group">
        <button id="confirm" @click=${()=>this.confirm()}>${this.confirmCTA}</button>
        <button id="cancel" @click=${()=>this.cancel()}>Cancel</button>
      </div>
    `}static get styles(){const t=$`var(--upsellCTAButtonColor, #194880)`,e=$`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`;return $`
      :host {
        display: block;
      }

      button {
        outline: none;
        cursor: pointer;
      }

      button#confirm {
        font-size: 2rem;
        display: block;
        width: 100%;
        margin-top: 0.5rem;
        padding: 1rem 2rem;
        background-color: ${t};
        color: #fff;
        border-radius: 5px;
        border: 0;
        font-weight: bold;
        line-height: normal;
      }

      button#cancel {
        margin-top: 1rem;
        border: 0;
        text-decoration: underline;
        background-color: transparent;
      }

      button:disabled {
        background-color: ${e};
        cursor: not-allowed;
      }
    }`}get currencySymbol(){switch(this.currencyType){case"AUD":return"AU$";case"BRL":return"R$";case"CAD":return"CA$";case"CHF":return"Fr";case"CNY":return"¥";case"CZK":return"Kč";case"DKK":return"Kr";case"EUR":return"€";case"GBP":return"£";case"HKD":return"HK$";case"HUF":return"Ft";case"ILS":return"₪";case"JPY":return"¥";case"MXN":return"MX$";case"MYR":return"RM";case"NOK":return"kr";case"PLN":return"zł";case"RUB":return"₽";case"SEK":return"kr";case"SGD":return"S$";case"THB":return"฿";case"TYD":return"NT$";default:return"$"}}};v([f({type:Number})],Ze.prototype,"amount",void 0);v([f({type:String})],Ze.prototype,"currencyType",void 0);v([f({type:String})],Ze.prototype,"donationType",void 0);v([f({type:Function})],Ze.prototype,"confirmDonation",void 0);v([f({type:Function})],Ze.prototype,"cancelDonation",void 0);Ze=v([St("confirm-donation-modal")],Ze);let Rc=class extends U{render(){return y`
      <div class="container">
        <a
          href="https://help.archive.org/help/why-is-there-a-problem-processing-my-donation/"
          rel="noopener"
          target="_blank"
        >
          Questions?
        </a>
      </div>
    `}static get styles(){const t=$`var(--errorModalQuestionsLinkTopMargin, 1rem)`,e=$`var(--errorModalQuestionsLinkFontColor, #333)`,i=$`var(--errorModalQuestionsLinkFontSize, 1.4rem)`;return $`
      .container {
        margin-top: ${t};
        text-align: center;
      }

      a,
      a:link,
      a:visited {
        color: ${e};
        font-size: ${i};
      }
    `}};Rc=v([St("donation-form-error-modal-content")],Rc);var ye;(function(o){o.Blue="#497fbf",o.Green="#55A183",o.Red="#691916"})(ye||(ye={}));class _r{constructor(t){this.modalManager=t.modalManager,this.braintreeManager=t.braintreeManager,this.analytics=t.analytics}closeModal(){this.modalManager.closeModal()}showProcessingModal(){const t=new ge({headerColor:ye.Blue,showProcessingIndicator:!0,closeOnBackdropClick:!1,showCloseButton:!1,processingImageMode:"processing",title:y` Processing... `});this.modalManager.showModal({config:t})}showThankYouModal(t){const e=new ge({showProcessingIndicator:!0,processingImageMode:"complete",headerColor:ye.Green,title:y` Thank You! `});this.modalManager.showModal({config:e});let n=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}`;t.upsellSuccessResponse&&(n+="-upsell");const s=t.successResponse.donationType;this.analytics.logDonationFlowEvent(n,s),this.braintreeManager.donationSuccessful(t)}showErrorModal(t){const e=new ge({headerColor:ye.Red,title:y` Processing error `,headline:y` There's been a problem completing your donation. `,message:y` ${t?.message} `});this.modalManager.showModal({config:e,userClosedModalCallback:t?.userClosedModalCallback,customModalContent:y`
        <donation-form-error-modal-content></donation-form-error-modal-content>
      `})}showConfirmationStepModal(t){const e=()=>{t?.confirmDonationCB()},i=()=>{t?.cancelDonationCB()},n=t.donationType===E.Upsell?"Confirm monthly donation":"Complete donation",s=new ge({closeOnBackdropClick:!1,headerColor:ye.Green,title:y`${n}`,message:y`
        <confirm-donation-modal
          .amount="${t.amount}"
          .currencyType="${t.currencyType}"
          .donationType="${t.donationType}"
          .confirmDonation=${e}
          .cancelDonation=${i}
        ></confirm-donation-modal>
      `});return this.modalManager.showModal({config:s,userClosedModalCallback:i})}showUpsellModal(t){var e;const i=new ge({headerColor:ye.Green,title:y` Donation received `,processingImageMode:"complete",showProcessingIndicator:!0}),n=_r.getDefaultUpsellAmount(t.oneTimeAmount);t.amountChanged&&t.amountChanged(n);const s=y`
      <upsell-modal-content
        .amount=${n}
        .yesButtonMode=${(e=t?.ctaMode)!==null&&e!==void 0?e:Kt.YesButton}
        @yesSelected=${r=>t?.yesSelected?t.yesSelected(r.detail.amount):void 0}
        @noThanksSelected=${t?.noSelected}
        @amountChanged=${r=>t?.amountChanged?t.amountChanged(r.detail.amount):void 0}
      >
        <slot name="paypal-upsell-button"></slot>
      </upsell-modal-content>
    `;return this.modalManager.showModal({config:i,customModalContent:s,userClosedModalCallback:t?.userClosedModalCallback})}startDonationSubmissionFlow(t){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const e=yield this.braintreeManager.submitDonation(t);if(e.success)return this.handleSuccessfulDonationResponse(t.donationInfo,e.value),e;{const i=e.value;return this.showErrorModal({message:i.message}),e}}catch(e){this.showErrorModal({message:`${e}`}),console.error("error getting a response",e);return}})}upsellModalYesSelected(t,e){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.completeUpsell({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.showErrorModal({message:n.message})}return i}catch(i){this.showErrorModal({message:`${i}`}),console.error("error getting a response",i);return}})}completeUpsell(t){this.showThankYouModal(t);const i=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}-upsell`,n=t.successResponse.donationType;this.analytics.logDonationFlowEvent(i,n),this.braintreeManager.donationSuccessful(t)}static getDefaultUpsellAmount(t){let e=5;return t<=10?e=8:t>10&&t<=25?e=10:t>25&&t<=100?e=25:t>100&&(e=50),e}handleSuccessfulDonationResponse(t,e){switch(t.donationType){case E.OneTime:this.showUpsellModal({oneTimeAmount:e.amount,yesSelected:i=>{this.upsellModalYesSelected(e,i)},noSelected:()=>{this.showThankYouModal({successResponse:e})},userClosedModalCallback:()=>{this.showThankYouModal({successResponse:e})}});break;case E.Monthly:this.showThankYouModal({successResponse:e});break;case E.Upsell:break}}}class P1{constructor(t){this.upsellButtonDataSource=t.upsellButtonDataSource,this.oneTimePayload=t.oneTimePayload,this.oneTimeSuccessResponse=t.oneTimeSuccessResponse}}class M1{updateDonationInfo(t){this.buttonDataSource&&(this.buttonDataSource.donationInfo=t)}updateUpsellDonationInfo(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo=t)}constructor(t){this.emitter=nn(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}payPalPaymentStarted(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentStarted",t,e)})}payPalPaymentAuthorized(t,e){return g(this,void 0,void 0,function*(){const{donationType:i,total:n}=t.donationInfo;this.donationFlowModalManager.showConfirmationStepModal({donationType:i,amount:n,currencyType:"USD",confirmDonationCB:()=>{this.payPalPaymentConfirmed(t,e)},cancelDonationCB:()=>{this.donationFlowModalManager.closeModal(),this.payPalPaymentCancelled(t,{})}})})}payPalPaymentConfirmed(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentConfirmed",t,{}),this.donationFlowModalManager.showProcessingModal();const i=t.donationInfo.donationType,n=e?.details,s=new Oo({email:n?.email,firstName:n?.firstName,lastName:n?.lastName}),r=n.shippingAddress,d=new Do({streetAddress:r?.line1,extendedAddress:r?.line2,locality:r?.city,region:r?.state,postalCode:r?.postalCode,countryCodeAlpha2:r?.countryCode}),a=this.upsellButtonDataSourceContainer?this.upsellButtonDataSourceContainer.oneTimeSuccessResponse.transaction_id:void 0,l=yield this.braintreeManager.submitDonation({nonce:e.nonce,paymentProvider:S.PayPal,donationInfo:t.donationInfo,customerInfo:s,billingInfo:d,upsellOnetimeTransactionId:a});if(!l.success){const c=l.value;this.donationFlowModalManager.showErrorModal({message:c.message});return}const h=l.value;switch(i){case E.OneTime:this.showUpsellModal(e,h);break;case E.Monthly:this.donationFlowModalManager.showThankYouModal({successResponse:h});break;case E.Upsell:this.upsellButtonDataSourceContainer?this.donationFlowModalManager.showThankYouModal({successResponse:this.upsellButtonDataSourceContainer.oneTimeSuccessResponse,upsellSuccessResponse:h}):this.donationFlowModalManager.showErrorModal({message:"Error setting up monthly donation"});break}})}payPalPaymentCancelled(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentCancelled",t,e)})}payPalPaymentError(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentError",t,e),console.error("PaymentSector:payPalPaymentError error:",t,t.donationInfo,e)})}renderPayPalButton(t){return g(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get();this.buttonDataSource=yield i?.renderPayPalButton({selector:"#paypal-button",style:{color:"blue",label:"paypal",shape:"rect",size:"medium",tagline:!1},donationInfo:t}),this.buttonDataSource&&(this.buttonDataSource.delegate=this)})}showUpsellModal(t,e){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showUpsellModal({oneTimeAmount:e.amount,amountChanged:this.upsellAmountChanged.bind(this),noSelected:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})},ctaMode:Kt.PayPalUpsellSlot,userClosedModalCallback:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})}});const i=_r.getDefaultUpsellAmount(e.amount),n=new D({amount:i,donationType:E.Upsell,coverFees:!1});this.upsellButtonDataSourceContainer||this.renderUpsellPayPalButton({donationInfo:n,oneTimePayload:t,oneTimeSuccessResponse:e})})}upsellAmountChanged(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo.amount=t)}renderUpsellPayPalButton(t){return g(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get(),n=yield i?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:t.donationInfo});n?(n.delegate=this,this.upsellButtonDataSourceContainer=new P1({upsellButtonDataSource:n,oneTimePayload:t.oneTimePayload,oneTimeSuccessResponse:t.oneTimeSuccessResponse})):console.error("error rendering paypal upsell button")})}}class x1{constructor(t){this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}paymentInitiated(t,e){return g(this,void 0,void 0,function*(){var i;this.donationFlowModalManager.showProcessingModal();const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.applePayHandler.get();this.applePayDataSource=yield n?.createPaymentRequest(e,t),this.applePayDataSource&&(this.applePayDataSource.delegate=this)})}modalYesSelected(t,e){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal();const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.donationFlowModalManager.showThankYouModal({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.donationFlowModalManager.showErrorModal({message:n.message})}})}paymentComplete(t){var e;if(t.success){const i=t.value;((e=this.applePayDataSource)===null||e===void 0?void 0:e.donationInfo.donationType)==E.OneTime?this.donationFlowModalManager.showUpsellModal({oneTimeAmount:i.amount,yesSelected:this.modalYesSelected.bind(this,i),noSelected:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i}),userClosedModalCallback:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i})}):this.donationFlowModalManager.showThankYouModal({successResponse:i})}else{const i=t.value;this.donationFlowModalManager.showErrorModal({message:i.message})}}paymentFailed(){this.donationFlowModalManager.showErrorModal({message:"Payment failed"})}paymentCancelled(){this.donationFlowModalManager.closeModal()}}class Fc{constructor(t){this.contactInfo=t.contactInfo,this.donationInfo=t.donationInfo}}class T1{constructor(t){this.persistanceKey="venmoRestorationStateInfo",t?.storageSystem?this.storageSystem=t.storageSystem:this.storageSystemAvailable(localStorage)?this.storageSystem=localStorage:this.storageSystemAvailable(sessionStorage)&&(this.storageSystem=sessionStorage)}clearState(){var t;(t=this.storageSystem)===null||t===void 0||t.removeItem(this.persistanceKey)}persistState(t,e){var i;const n=new Fc({contactInfo:t,donationInfo:e}),s=JSON.stringify(n);(i=this.storageSystem)===null||i===void 0||i.setItem(this.persistanceKey,s)}getRestorationState(){return g(this,void 0,void 0,function*(){var t;const e=(t=this.storageSystem)===null||t===void 0?void 0:t.getItem(this.persistanceKey);if(!e){console.error("restoreState: No stored data");return}const i=JSON.parse(e);if(!i){console.error("restoreState: Data could not be deserialized");return}return new Fc(i)})}storageSystemAvailable(t){try{return t.setItem("foo","bar"),t.removeItem("foo"),!0}catch{return!1}}}class k1{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.restorationStateHandler=(e=t.restorationStateHandler)!==null&&e!==void 0?e:new T1}startup(){return g(this,void 0,void 0,function*(){const t=yield this.braintreeManager.paymentProviders.venmoHandler.get(),e=yield t?.instance.get();if(e?.hasTokenizationResult()){const i=yield this.restorationStateHandler.getRestorationState();i?this.paymentInitiated(i.contactInfo,i.donationInfo):(console.error("no restoration info"),this.donationFlowModalManager.showErrorModal({message:"Error restoring donation session"}))}})}paymentInitiated(t,e){return g(this,void 0,void 0,function*(){this.restorationStateHandler.persistState(t,e);try{const i=yield this.braintreeManager.paymentProviders.venmoHandler.get(),n=yield i?.startPayment();if(!n){this.restorationStateHandler.clearState(),this.donationFlowModalManager.showErrorModal({message:"Error setting up the donation"});return}this.handleTokenizationResult(n,t,e)}catch(i){this.restorationStateHandler.clearState(),this.handleTokenizationError(i),this.donationFlowModalManager.showErrorModal({message:"There was a problem loading your donation information. Please try again."})}})}handleTokenizationResult(t,e,i){return g(this,void 0,void 0,function*(){this.restorationStateHandler.clearState(),this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:S.Venmo,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing})})}handleTokenizationError(t){switch(t.code){case"VENMO_APP_CANCELED":break;case"VENMO_CANCELED":break;default:console.error("Error!",t)}}}class H1{constructor(t){this.emitter=nn(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}paymentInitiated(t){return g(this,void 0,void 0,function*(){var e,i;const n=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.googlePayHandler.get(),s=yield n.instance.get(),r=yield s.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${t.total}`}}),d=r.allowedPaymentMethods[0];d.parameters.billingAddressRequired=!0,d.parameters.billingAddressParameters={format:"FULL",phoneNumberRequired:!1};try{const a=yield n.paymentsClient.loadPaymentData(r),l=yield s.parseResponse(a),h=(i=a.paymentMethodData.info)===null||i===void 0?void 0:i.billingAddress,c=h?.name;let u=c,p="";const _=c?.lastIndexOf(" ");_&&_!==-1&&(u=c?.substr(0,_),p=c?.substr(_));const m=new Oo({email:a.email,firstName:u,lastName:p}),I=new Do({streetAddress:h?.address1,extendedAddress:h?.address2,locality:h?.locality,region:h?.administrativeArea,postalCode:h?.postalCode,countryCodeAlpha2:h?.countryCode});this.donationFlowModalManager.startDonationSubmissionFlow({nonce:l.nonce,paymentProvider:S.GooglePay,bin:l.details.bin,binName:l.binData.issuingBank,donationInfo:t,customerInfo:m,billingInfo:I})}catch{this.emitter.emit("paymentCancelled"),this.donationFlowModalManager.closeModal()}})}}class U1{startup(){return g(this,void 0,void 0,function*(){var t,e;(t=this.venmoHandler)===null||t===void 0||t.startup(),(e=this.creditCardHandler)===null||e===void 0||e.startup()})}showUpsellModal(t){return g(this,void 0,void 0,function*(){return this.donationFlowModalManager.showUpsellModal(t)})}showConfirmationStepModal(t){return this.donationFlowModalManager.showConfirmationStepModal(t)}get creditCardHandler(){return this.creditCardHandlerCache?this.creditCardHandlerCache:(this.creditCardHandlerCache=new by({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager,recaptchaManager:this.recaptchaManager}),this.creditCardHandlerCache)}get paypalHandler(){return this.paypalHandlerCache?this.paypalHandlerCache:(this.paypalHandlerCache=new M1({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.paypalHandlerCache)}get applePayHandler(){return this.applePayHandlerCache?this.applePayHandlerCache:(this.applePayHandlerCache=new x1({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.applePayHandlerCache)}get venmoHandler(){return this.venmoHandlerCache?this.venmoHandlerCache:(this.venmoHandlerCache=new k1({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.venmoHandlerCache)}get googlePayHandler(){return this.googlePayHandlerCache?this.googlePayHandlerCache:(this.googlePayHandlerCache=new H1({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.googlePayHandlerCache)}constructor(t){this.braintreeManager=t.braintreeManager,this.modalManager=t.modalManager,this.recaptchaManager=t.recaptchaManager,this.resources=t.resources,this.donationFlowModalManager=new _r({braintreeManager:this.braintreeManager,modalManager:this.modalManager,analytics:this.resources.analytics})}}class I1{constructor(t){this.isExecuting=!1,this.grecaptchaLibrary=t.grecaptchaLibrary,this.siteKey=t.siteKey}execute(){return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,e)=>{this.executionSuccessBlock=i=>{this.finishExecution(),t(i)},this.executionExpiredBlock=()=>{this.finishExecution(),e("expired")},this.executionErrorBlock=()=>{this.finishExecution(),e("error")},this.grecaptchaLibrary.execute()})}finishExecution(){this.isExecuting=!1,this.grecaptchaLibrary.reset()}setup(t,e,i,n){this.grecaptchaLibrary.render(t,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:e,theme:i,type:n,size:"invisible"})}responseHandler(t){this.executionSuccessBlock&&(this.executionSuccessBlock(t),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class N1{constructor(t){this.hostedFieldFieldOptions=t.hostedFieldFieldOptions,this.hostedFieldStyle=t.hostedFieldStyle,this.hostedFieldContainer=t.hostedFieldContainer}}var Le;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(Le||(Le={}));let Ge=class extends U{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=Le.LeaveSpace,this.requiredIndicatorSpaceOption=Le.LeaveSpace}render(){return y`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?y` * `:x}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===Le.CompressSpace?"compress-space":""}static get styles(){const t=$`var(--inputBorder, 1px solid #d9d9d9)`,e=$`var(--badgedInputBorderErrorColor, red)`,i=$`var(--badgedInputIconSize, 1.4rem)`,n=$`var(--badgedInputIconSpacerWidth, 3rem)`,s=$`var(--badgedInputNoIconSpacerWidth, 1rem)`,r=$`var(--badgedInputHeight, 3rem)`,d=$`var(--badgedInputRequiredIndicatorColor, red)`,a=$`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,l=$`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return $`
      .input-wrapper {
        border: ${t};
        height: ${r};
        display: flex;
        align-items: center;
      }

      .input-wrapper.error {
        box-shadow: inset 0px 0px 0px 1px ${e};
        border-color: ${e};
      }

      .input-wrapper.compress-space .icon-container {
        width: ${s};
      }

      .icon-container {
        width: ${n};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-container svg {
        height: ${i};
      }

      .required-indicator {
        color: ${d};
        font-size: ${l};
        margin: ${a};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};v([f({type:Boolean})],Ge.prototype,"error",void 0);v([f({type:Object})],Ge.prototype,"icon",void 0);v([f({type:Boolean})],Ge.prototype,"required",void 0);v([f({type:String})],Ge.prototype,"iconSpaceOption",void 0);v([f({type:String})],Ge.prototype,"requiredIndicatorSpaceOption",void 0);Ge=v([St("badged-input")],Ge);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lc=o=>o??O;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=window,Gd=Ko.ShadowRoot&&(Ko.ShadyCSS===void 0||Ko.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xv=Symbol(),Bc=new WeakMap;let D1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==xv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Gd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Bc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Bc.set(e,t))}return t}toString(){return this.cssText}};const O1=o=>new D1(typeof o=="string"?o:o+"",void 0,xv),R1=(o,t)=>{Gd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Ko.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},zc=Gd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return O1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ua;const Es=window,jc=Es.trustedTypes,F1=jc?jc.emptyScript:"",Vc=Es.reactiveElementPolyfillSupport,Dl={toAttribute(o,t){switch(t){case Boolean:o=o?F1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Tv=(o,t)=>t!==o&&(t==t||o==o),pa={attribute:!0,type:String,converter:Dl,reflect:!1,hasChanged:Tv},Ol="finalized";let fn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=pa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pa}static finalize(){if(this.hasOwnProperty(Ol))return!1;this[Ol]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(zc(n))}else t!==void 0&&e.push(zc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return R1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=pa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Dl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Dl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Tv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};fn[Ol]=!0,fn.elementProperties=new Map,fn.elementStyles=[],fn.shadowRootOptions={mode:"open"},Vc?.({ReactiveElement:fn}),((ua=Es.reactiveElementVersions)!==null&&ua!==void 0?ua:Es.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var va;const ws=window,Ti=ws.trustedTypes,qc=Ti?Ti.createPolicy("lit-html",{createHTML:o=>o}):void 0,Rl="$lit$",Nt=`lit$${(Math.random()+"").slice(9)}$`,kv="?"+Nt,L1=`<${kv}>`,Ye=document,Ps=()=>Ye.createComment(""),lo=o=>o===null||typeof o!="object"&&typeof o!="function",Hv=Array.isArray,B1=o=>Hv(o)||typeof o?.[Symbol.iterator]=="function",ma=`[ 	
\f\r]`,_n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wc=/-->/g,Kc=/>/g,se=RegExp(`>|${ma}(?:([^\\s"'>=/]+)(${ma}*=${ma}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zc=/'/g,Gc=/"/g,Uv=/^(?:script|style|textarea|title)$/i,ho=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Yc=new WeakMap,Pe=Ye.createTreeWalker(Ye,129,null,!1);function Iv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return qc!==void 0?qc.createHTML(t):t}const z1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=_n;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===_n?h[1]==="!--"?r=Wc:h[1]!==void 0?r=Kc:h[2]!==void 0?(Uv.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=se):h[3]!==void 0&&(r=se):r===se?h[0]===">"?(r=n??_n,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?se:h[3]==='"'?Gc:Zc):r===Gc||r===Zc?r=se:r===Wc||r===Kc?r=_n:(r=se,n=void 0);const p=r===se&&o[d+1].startsWith("/>")?" ":"";s+=r===_n?a+L1:c>=0?(i.push(l),a.slice(0,c)+Rl+a.slice(c)+Nt+p):a+Nt+(c===-2?(i.push(void 0),d):p)}return[Iv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Fl=class Nv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=z1(t,e);if(this.el=Nv.createElement(l,i),Pe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Pe.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Rl)||u.startsWith(Nt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Rl).split(Nt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?V1:m[1]==="?"?W1:m[1]==="@"?K1:Ar})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Uv.test(n.tagName)){const c=n.textContent.split(Nt),u=c.length-1;if(u>0){n.textContent=Ti?Ti.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ps()),Pe.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ps())}}}else if(n.nodeType===8)if(n.data===kv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Nt,c+1))!==-1;)a.push({type:7,index:s}),c+=Nt.length-1}s++}}static createElement(t,e){const i=Ye.createElement("template");return i.innerHTML=t,i}};function ki(o,t,e=o,i){var n,s,r,d;if(t===ho)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=lo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ki(o,a._$AS(o,t.values),a,i)),t}let j1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ye).importNode(i,!0);Pe.currentNode=s;let r=Pe.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Dv(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Z1(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Pe.nextNode(),d++)}return Pe.currentNode=Ye,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Dv=class Ov{constructor(t,e,i,n){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ki(this,t,e),lo(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==ho&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):B1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&lo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ye.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Fl.createElement(Iv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new j1(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Yc.get(t.strings);return e===void 0&&Yc.set(t.strings,e=new Fl(t)),e}T(t){Hv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Ov(this.k(Ps()),this.k(Ps()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ar=class{constructor(t,e,i,n,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ki(this,t,e,0),r=!lo(t)||t!==this._$AH&&t!==ho,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ki(this,d[i+a],e,a),l===ho&&(l=this._$AH[a]),r||(r=!lo(l)||l!==this._$AH[a]),l===z?t=z:t!==z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},V1=class extends Ar{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const q1=Ti?Ti.emptyScript:"";let W1=class extends Ar{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,q1):this.element.removeAttribute(this.name)}},K1=class extends Ar{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ki(this,t,e,0))!==null&&i!==void 0?i:z)===ho)return;const n=this._$AH,s=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==z&&(n===z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Z1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ki(this,t)}};const Jc=ws.litHtmlPolyfillSupport;Jc?.(Fl,Dv),((va=ws.litHtmlVersions)!==null&&va!==void 0?va:ws.litHtmlVersions=[]).push("2.8.0");const G1=y`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=window,Yd=Zo.ShadowRoot&&(Zo.ShadyCSS===void 0||Zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rv=Symbol(),Qc=new WeakMap;let Y1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Rv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Qc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Qc.set(e,t))}return t}toString(){return this.cssText}};const J1=o=>new Y1(typeof o=="string"?o:o+"",void 0,Rv),Q1=(o,t)=>{Yd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Zo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Xc=Yd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return J1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $a;const Ms=window,tu=Ms.trustedTypes,X1=tu?tu.emptyScript:"",eu=Ms.reactiveElementPolyfillSupport,Ll={toAttribute(o,t){switch(t){case Boolean:o=o?X1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Fv=(o,t)=>t!==o&&(t==t||o==o),ga={attribute:!0,type:String,converter:Ll,reflect:!1,hasChanged:Fv},Bl="finalized";let An=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ga){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ga}static finalize(){if(this.hasOwnProperty(Bl))return!1;this[Bl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Xc(n))}else t!==void 0&&e.push(Xc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Q1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ga){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ll).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ll;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Fv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};An[Bl]=!0,An.elementProperties=new Map,An.elementStyles=[],An.shadowRootOptions={mode:"open"},eu?.({ReactiveElement:An}),(($a=Ms.reactiveElementVersions)!==null&&$a!==void 0?$a:Ms.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ya;const xs=window,Hi=xs.trustedTypes,iu=Hi?Hi.createPolicy("lit-html",{createHTML:o=>o}):void 0,zl="$lit$",Dt=`lit$${(Math.random()+"").slice(9)}$`,Lv="?"+Dt,tf=`<${Lv}>`,Je=document,Ts=()=>Je.createComment(""),co=o=>o===null||typeof o!="object"&&typeof o!="function",Bv=Array.isArray,ef=o=>Bv(o)||typeof o?.[Symbol.iterator]=="function",fa=`[ 	
\f\r]`,bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nu=/-->/g,ou=/>/g,re=RegExp(`>|${fa}(?:([^\\s"'>=/]+)(${fa}*=${fa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),su=/'/g,ru=/"/g,zv=/^(?:script|style|textarea|title)$/i,uo=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),au=new WeakMap,Me=Je.createTreeWalker(Je,129,null,!1);function jv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return iu!==void 0?iu.createHTML(t):t}const nf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=bn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===bn?h[1]==="!--"?r=nu:h[1]!==void 0?r=ou:h[2]!==void 0?(zv.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=re):h[3]!==void 0&&(r=re):r===re?h[0]===">"?(r=n??bn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?re:h[3]==='"'?ru:su):r===ru||r===su?r=re:r===nu||r===ou?r=bn:(r=re,n=void 0);const p=r===re&&o[d+1].startsWith("/>")?" ":"";s+=r===bn?a+tf:c>=0?(i.push(l),a.slice(0,c)+zl+a.slice(c)+Dt+p):a+Dt+(c===-2?(i.push(void 0),d):p)}return[jv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let jl=class Vv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=nf(t,e);if(this.el=Vv.createElement(l,i),Me.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Me.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(zl)||u.startsWith(Dt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+zl).split(Dt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?sf:m[1]==="?"?af:m[1]==="@"?lf:br})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(zv.test(n.tagName)){const c=n.textContent.split(Dt),u=c.length-1;if(u>0){n.textContent=Hi?Hi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ts()),Me.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ts())}}}else if(n.nodeType===8)if(n.data===Lv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Dt,c+1))!==-1;)a.push({type:7,index:s}),c+=Dt.length-1}s++}}static createElement(t,e){const i=Je.createElement("template");return i.innerHTML=t,i}};function Ui(o,t,e=o,i){var n,s,r,d;if(t===uo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=co(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ui(o,a._$AS(o,t.values),a,i)),t}let of=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Je).importNode(i,!0);Me.currentNode=s;let r=Me.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new qv(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new df(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Me.nextNode(),d++)}return Me.currentNode=Je,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},qv=class Wv{constructor(t,e,i,n){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ui(this,t,e),co(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==uo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ef(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&co(this._$AH)?this._$AA.nextSibling.data=t:this.$(Je.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=jl.createElement(jv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new of(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=au.get(t.strings);return e===void 0&&au.set(t.strings,e=new jl(t)),e}T(t){Bv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Wv(this.k(Ts()),this.k(Ts()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},br=class{constructor(t,e,i,n,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ui(this,t,e,0),r=!co(t)||t!==this._$AH&&t!==uo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ui(this,d[i+a],e,a),l===uo&&(l=this._$AH[a]),r||(r=!co(l)||l!==this._$AH[a]),l===j?t=j:t!==j&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},sf=class extends br{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}};const rf=Hi?Hi.emptyScript:"";let af=class extends br{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,rf):this.element.removeAttribute(this.name)}},lf=class extends br{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ui(this,t,e,0))!==null&&i!==void 0?i:j)===uo)return;const n=this._$AH,s=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},df=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ui(this,t)}};const lu=xs.litHtmlPolyfillSupport;lu?.(jl,qv),((ya=xs.litHtmlVersions)!==null&&ya!==void 0?ya:xs.litHtmlVersions=[]).push("2.8.0");const hf=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go=window,Jd=Go.ShadowRoot&&(Go.ShadyCSS===void 0||Go.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Kv=Symbol(),du=new WeakMap;let cf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Kv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Jd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=du.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&du.set(e,t))}return t}toString(){return this.cssText}};const uf=o=>new cf(typeof o=="string"?o:o+"",void 0,Kv),pf=(o,t)=>{Jd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Go.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},hu=Jd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return uf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _a;const ks=window,cu=ks.trustedTypes,vf=cu?cu.emptyScript:"",uu=ks.reactiveElementPolyfillSupport,Vl={toAttribute(o,t){switch(t){case Boolean:o=o?vf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Zv=(o,t)=>t!==o&&(t==t||o==o),Aa={attribute:!0,type:String,converter:Vl,reflect:!1,hasChanged:Zv},ql="finalized";let Sn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Aa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Aa}static finalize(){if(this.hasOwnProperty(ql))return!1;this[ql]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(hu(n))}else t!==void 0&&e.push(hu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return pf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Aa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Vl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Vl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Zv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Sn[ql]=!0,Sn.elementProperties=new Map,Sn.elementStyles=[],Sn.shadowRootOptions={mode:"open"},uu?.({ReactiveElement:Sn}),((_a=ks.reactiveElementVersions)!==null&&_a!==void 0?_a:ks.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ba;const Hs=window,Ii=Hs.trustedTypes,pu=Ii?Ii.createPolicy("lit-html",{createHTML:o=>o}):void 0,Wl="$lit$",Ot=`lit$${(Math.random()+"").slice(9)}$`,Gv="?"+Ot,mf=`<${Gv}>`,Qe=document,Us=()=>Qe.createComment(""),po=o=>o===null||typeof o!="object"&&typeof o!="function",Yv=Array.isArray,$f=o=>Yv(o)||typeof o?.[Symbol.iterator]=="function",Sa=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vu=/-->/g,mu=/>/g,ae=RegExp(`>|${Sa}(?:([^\\s"'>=/]+)(${Sa}*=${Sa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$u=/'/g,gu=/"/g,Jv=/^(?:script|style|textarea|title)$/i,vo=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),yu=new WeakMap,xe=Qe.createTreeWalker(Qe,129,null,!1);function Qv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return pu!==void 0?pu.createHTML(t):t}const gf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Cn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Cn?h[1]==="!--"?r=vu:h[1]!==void 0?r=mu:h[2]!==void 0?(Jv.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ae):h[3]!==void 0&&(r=ae):r===ae?h[0]===">"?(r=n??Cn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ae:h[3]==='"'?gu:$u):r===gu||r===$u?r=ae:r===vu||r===mu?r=Cn:(r=ae,n=void 0);const p=r===ae&&o[d+1].startsWith("/>")?" ":"";s+=r===Cn?a+mf:c>=0?(i.push(l),a.slice(0,c)+Wl+a.slice(c)+Ot+p):a+Ot+(c===-2?(i.push(void 0),d):p)}return[Qv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Kl=class Xv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=gf(t,e);if(this.el=Xv.createElement(l,i),xe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=xe.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Wl)||u.startsWith(Ot)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Wl).split(Ot),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?ff:m[1]==="?"?Af:m[1]==="@"?bf:Sr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Jv.test(n.tagName)){const c=n.textContent.split(Ot),u=c.length-1;if(u>0){n.textContent=Ii?Ii.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Us()),xe.nextNode(),a.push({type:2,index:++s});n.append(c[u],Us())}}}else if(n.nodeType===8)if(n.data===Gv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ot,c+1))!==-1;)a.push({type:7,index:s}),c+=Ot.length-1}s++}}static createElement(t,e){const i=Qe.createElement("template");return i.innerHTML=t,i}};function Ni(o,t,e=o,i){var n,s,r,d;if(t===vo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=po(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ni(o,a._$AS(o,t.values),a,i)),t}let yf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Qe).importNode(i,!0);xe.currentNode=s;let r=xe.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new tm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Sf(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=xe.nextNode(),d++)}return xe.currentNode=Qe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tm=class em{constructor(t,e,i,n){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ni(this,t,e),po(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==vo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):$f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&po(this._$AH)?this._$AA.nextSibling.data=t:this.$(Qe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Kl.createElement(Qv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new yf(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=yu.get(t.strings);return e===void 0&&yu.set(t.strings,e=new Kl(t)),e}T(t){Yv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new em(this.k(Us()),this.k(Us()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Sr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ni(this,t,e,0),r=!po(t)||t!==this._$AH&&t!==vo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ni(this,d[i+a],e,a),l===vo&&(l=this._$AH[a]),r||(r=!po(l)||l!==this._$AH[a]),l===V?t=V:t!==V&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ff=class extends Sr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}};const _f=Ii?Ii.emptyScript:"";let Af=class extends Sr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,_f):this.element.removeAttribute(this.name)}},bf=class extends Sr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ni(this,t,e,0))!==null&&i!==void 0?i:V)===vo)return;const n=this._$AH,s=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==V&&(n===V||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Sf=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ni(this,t)}};const fu=Hs.litHtmlPolyfillSupport;fu?.(Kl,tm),((ba=Hs.litHtmlVersions)!==null&&ba!==void 0?ba:Hs.litHtmlVersions=[]).push("2.8.0");const Cf=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,_u={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let T=class extends U{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,n])=>{const s=i.checkValidity();e=e&&s,s||(n.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return y`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:G1})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:Cf})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:hf,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:Le.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return y`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,n,s,r,d,a,l,h,c;const u=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:u,this.selectedCountry==="US"?((n=this.postalBadgedInput)===null||n===void 0||n.setAttribute("required",""),(s=this.postalCodeField)===null||s===void 0||s.setAttribute("required",""),(r=this.regionBadgedInput)===null||r===void 0||r.setAttribute("required",""),(d=this.regionField)===null||d===void 0||d.setAttribute("required","")):((a=this.postalBadgedInput)===null||a===void 0||a.removeAttribute("required"),(l=this.postalCodeField)===null||l===void 0||l.removeAttribute("required"),(h=this.regionBadgedInput)===null||h===void 0||h.removeAttribute("required"),(c=this.regionField)===null||c===void 0||c.removeAttribute("required"))}}
        >
          ${Object.keys(_u).map(t=>{const e=_u[t];return y`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n,s;const r=(e=t.required)!==null&&e!==void 0?e:!0,d=(i=t.fieldType)!==null&&i!==void 0?i:"text",a=(n=t.iconSpaceOption)!==null&&n!==void 0?n:Le.LeaveSpace;return y`
      <badged-input
        class=${t.id}
        .icon=${t.icon}
        .iconSpaceOption=${a}
        ?required=${t.required}
      >
        <label for=${t.id}>${t.placeholder}</label>
        <input
          type=${d}
          id=${t.id}
          class="donation-contact-form-input"
          name=${t.name}
          aria-label=${t.placeholder}
          placeholder=${t.placeholder}
          maxlength=${Lc(t.maxlength)}
          autocomplete=${(s=t.autocomplete)!==null&&s!==void 0?s:"on"}
          pattern=${Lc(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${r}
        />
      </badged-input>
    `}get donorContactInfo(){return new ag({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new Do({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new Oo({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=$`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=$`var(--badgedInputIconSpacerWidth, 5rem)`,i=$`var(--fieldSetSpacing, 1rem)`,n=$`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,s=$`var(--contactFieldFontSize, 1.6rem)`,r=$`var(--inputFieldFontColor, #333)`,d=$`calc(100% - ${e})`,a=$`calc(100% - ${t})`;return y`
      <style>
        /*
          **NOTE**
          This element is in the lightDOM so be sure to prefix all styles
          with "contact-form" so styles don't leak.
         */
        contact-form fieldset {
          border: 0;
          padding: 0;
          margin: 0;
          margin-bottom: ${i};
          background-color: white;
        }

        /* These 1px and 0 margins in the next few selectors are to account for the
        double outlines caused by the fields being right next to each other */
        contact-form .row {
          display: flex;
          margin: -1px 0 0 0;
        }

        contact-form fieldset .row:first-child {
          margin-top: 0;
        }

        contact-form badged-input.donation-contact-form-region {
          width: 60%;
        }

        contact-form badged-input.donation-contact-form-postal-code {
          width: 40%;
        }

        contact-form #donation-contact-form-region {
          width: ${d};
        }

        contact-form #donation-contact-form-postal-code {
          width: ${a};
        }

        contact-form #donation-contact-form-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        contact-form #donation-contact-form-last-name {
          width: ${a};
        }

        /* only show for screen readers */
        contact-form label {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        contact-form .donation-contact-form-input {
          width: ${d};
          border: 0;
          outline: 0;
          background: transparent;
          font-weight: bold;
          color: ${r};
          font-size: ${s};
          padding: 0;
          font-family: ${n};
        }

        contact-form .donation-contact-form-input::placeholder {
          color: revert;
        }

        contact-form #donation-contact-form-countryCodeAlpha2 {
          width: calc(100%);
          height: 100%;
          box-sizing: border-box;
          font-weight: bold;
          font-size: ${s};
          font-family: ${n};
          border: 0;
          background: #fff;
        }
      </style>
    `}};v([M("badged-input.donation-contact-form-email")],T.prototype,"emailBadgedInput",void 0);v([M("#donation-contact-form-email")],T.prototype,"emailField",void 0);v([M("badged-input.donation-contact-form-first-name")],T.prototype,"firstNameBadgedInput",void 0);v([M("#donation-contact-form-first-name")],T.prototype,"firstNameField",void 0);v([M("badged-input.donation-contact-form-last-name")],T.prototype,"lastNameBadgedInput",void 0);v([M("#donation-contact-form-last-name")],T.prototype,"lastNameField",void 0);v([M("badged-input.donation-contact-form-postal-code")],T.prototype,"postalBadgedInput",void 0);v([M("#donation-contact-form-postal-code")],T.prototype,"postalCodeField",void 0);v([M("badged-input.donation-contact-form-street-address")],T.prototype,"streetAddressBadgedInput",void 0);v([M("#donation-contact-form-street-address")],T.prototype,"streetAddressField",void 0);v([M("badged-input.donation-contact-form-extended-address")],T.prototype,"extendedAddressBadgedInput",void 0);v([M("#donation-contact-form-extended-address")],T.prototype,"extendedAddressField",void 0);v([M("badged-input.donation-contact-form-locality")],T.prototype,"localityBadgedInput",void 0);v([M("#donation-contact-form-locality")],T.prototype,"localityField",void 0);v([M("badged-input.donation-contact-form-region")],T.prototype,"regionBadgedInput",void 0);v([M("#donation-contact-form-region")],T.prototype,"regionField",void 0);v([M("#donation-contact-form-countryCodeAlpha2")],T.prototype,"countryCodeAlpha2Field",void 0);v([M("#donation-contact-form-error-message")],T.prototype,"errorMessage",void 0);v([M("form")],T.prototype,"form",void 0);v([f({type:String})],T.prototype,"selectedCountry",void 0);v([f({type:String})],T.prototype,"donorEmail",void 0);T=v([St("contact-form")],T);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=window,Qd=Yo.ShadowRoot&&(Yo.ShadyCSS===void 0||Yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,im=Symbol(),Au=new WeakMap;let Ef=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==im)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Au.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Au.set(e,t))}return t}toString(){return this.cssText}};const wf=o=>new Ef(typeof o=="string"?o:o+"",void 0,im),Pf=(o,t)=>{Qd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Yo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},bu=Qd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return wf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ca;const Is=window,Su=Is.trustedTypes,Mf=Su?Su.emptyScript:"",Cu=Is.reactiveElementPolyfillSupport,Zl={toAttribute(o,t){switch(t){case Boolean:o=o?Mf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nm=(o,t)=>t!==o&&(t==t||o==o),Ea={attribute:!0,type:String,converter:Zl,reflect:!1,hasChanged:nm},Gl="finalized";let En=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ea){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ea}static finalize(){if(this.hasOwnProperty(Gl))return!1;this[Gl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(bu(n))}else t!==void 0&&e.push(bu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Pf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ea){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Zl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Zl;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||nm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};En[Gl]=!0,En.elementProperties=new Map,En.elementStyles=[],En.shadowRootOptions={mode:"open"},Cu?.({ReactiveElement:En}),((Ca=Is.reactiveElementVersions)!==null&&Ca!==void 0?Ca:Is.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wa;const Ns=window,Di=Ns.trustedTypes,Eu=Di?Di.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yl="$lit$",Rt=`lit$${(Math.random()+"").slice(9)}$`,om="?"+Rt,xf=`<${om}>`,Xe=document,Ds=()=>Xe.createComment(""),mo=o=>o===null||typeof o!="object"&&typeof o!="function",sm=Array.isArray,Tf=o=>sm(o)||typeof o?.[Symbol.iterator]=="function",Pa=`[ 	
\f\r]`,wn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wu=/-->/g,Pu=/>/g,le=RegExp(`>|${Pa}(?:([^\\s"'>=/]+)(${Pa}*=${Pa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mu=/'/g,xu=/"/g,rm=/^(?:script|style|textarea|title)$/i,$o=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Tu=new WeakMap,Te=Xe.createTreeWalker(Xe,129,null,!1);function am(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Eu!==void 0?Eu.createHTML(t):t}const kf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=wn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===wn?h[1]==="!--"?r=wu:h[1]!==void 0?r=Pu:h[2]!==void 0?(rm.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=le):h[3]!==void 0&&(r=le):r===le?h[0]===">"?(r=n??wn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?le:h[3]==='"'?xu:Mu):r===xu||r===Mu?r=le:r===wu||r===Pu?r=wn:(r=le,n=void 0);const p=r===le&&o[d+1].startsWith("/>")?" ":"";s+=r===wn?a+xf:c>=0?(i.push(l),a.slice(0,c)+Yl+a.slice(c)+Rt+p):a+Rt+(c===-2?(i.push(void 0),d):p)}return[am(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Jl=class lm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=kf(t,e);if(this.el=lm.createElement(l,i),Te.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Te.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Yl)||u.startsWith(Rt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Yl).split(Rt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?Uf:m[1]==="?"?Nf:m[1]==="@"?Df:Cr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(rm.test(n.tagName)){const c=n.textContent.split(Rt),u=c.length-1;if(u>0){n.textContent=Di?Di.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ds()),Te.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ds())}}}else if(n.nodeType===8)if(n.data===om)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Rt,c+1))!==-1;)a.push({type:7,index:s}),c+=Rt.length-1}s++}}static createElement(t,e){const i=Xe.createElement("template");return i.innerHTML=t,i}};function Oi(o,t,e=o,i){var n,s,r,d;if(t===$o)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=mo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Oi(o,a._$AS(o,t.values),a,i)),t}let Hf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Xe).importNode(i,!0);Te.currentNode=s;let r=Te.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new dm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Of(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Te.nextNode(),d++)}return Te.currentNode=Xe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},dm=class hm{constructor(t,e,i,n){var s;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Oi(this,t,e),mo(t)?t===q||t==null||t===""?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==$o&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Tf(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&mo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Xe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Jl.createElement(am(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Hf(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Tu.get(t.strings);return e===void 0&&Tu.set(t.strings,e=new Jl(t)),e}T(t){sm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new hm(this.k(Ds()),this.k(Ds()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Cr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Oi(this,t,e,0),r=!mo(t)||t!==this._$AH&&t!==$o,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Oi(this,d[i+a],e,a),l===$o&&(l=this._$AH[a]),r||(r=!mo(l)||l!==this._$AH[a]),l===q?t=q:t!==q&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Uf=class extends Cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}};const If=Di?Di.emptyScript:"";let Nf=class extends Cr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,If):this.element.removeAttribute(this.name)}},Df=class extends Cr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Oi(this,t,e,0))!==null&&i!==void 0?i:q)===$o)return;const n=this._$AH,s=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==q&&(n===q||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Of=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Oi(this,t)}};const ku=Ns.litHtmlPolyfillSupport;ku?.(Jl,dm),((wa=Ns.litHtmlVersions)!==null&&wa!==void 0?wa:Ns.litHtmlVersions=[]).push("2.8.0");const cm=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="creditCardTitleID creditCardDescID">
  <title id="creditCardTitleID">Credit card icon</title>
  <desc id="creditCardDescID">An illustration of a credit card</desc>
  <g class="fill-color" fill-rule="evenodd" transform="translate(0 2)">
    <g fill-rule="nonzero">
      <path d="m11.998 0v9h-11.998v-9z" />
      <g fill="#fff">
        <path d="m11.143 3.429h-10.286v4.714h10.286z" />
        <path d="m11.143.857h-10.286v1.286h10.286z" />
      </g>
    </g>
    <g>
      <path d="m8.143 6.429h1v1h-1z" />
      <path d="m9.429 6.429h1v1h-1z" />
    </g>
  </g>
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jo=window,Xd=Jo.ShadowRoot&&(Jo.ShadyCSS===void 0||Jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,um=Symbol(),Hu=new WeakMap;let Rf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==um)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Hu.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Hu.set(e,t))}return t}toString(){return this.cssText}};const Ff=o=>new Rf(typeof o=="string"?o:o+"",void 0,um),Lf=(o,t)=>{Xd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Jo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Uu=Xd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ff(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ma;const Os=window,Iu=Os.trustedTypes,Bf=Iu?Iu.emptyScript:"",Nu=Os.reactiveElementPolyfillSupport,Ql={toAttribute(o,t){switch(t){case Boolean:o=o?Bf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},pm=(o,t)=>t!==o&&(t==t||o==o),xa={attribute:!0,type:String,converter:Ql,reflect:!1,hasChanged:pm},Xl="finalized";let Pn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=xa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||xa}static finalize(){if(this.hasOwnProperty(Xl))return!1;this[Xl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Uu(n))}else t!==void 0&&e.push(Uu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Lf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=xa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ql).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ql;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||pm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Pn[Xl]=!0,Pn.elementProperties=new Map,Pn.elementStyles=[],Pn.shadowRootOptions={mode:"open"},Nu?.({ReactiveElement:Pn}),((Ma=Os.reactiveElementVersions)!==null&&Ma!==void 0?Ma:Os.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ta;const Rs=window,Ri=Rs.trustedTypes,Du=Ri?Ri.createPolicy("lit-html",{createHTML:o=>o}):void 0,td="$lit$",Ft=`lit$${(Math.random()+"").slice(9)}$`,vm="?"+Ft,zf=`<${vm}>`,ti=document,Fs=()=>ti.createComment(""),go=o=>o===null||typeof o!="object"&&typeof o!="function",mm=Array.isArray,jf=o=>mm(o)||typeof o?.[Symbol.iterator]=="function",ka=`[ 	
\f\r]`,Mn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ou=/-->/g,Ru=/>/g,de=RegExp(`>|${ka}(?:([^\\s"'>=/]+)(${ka}*=${ka}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Fu=/'/g,Lu=/"/g,$m=/^(?:script|style|textarea|title)$/i,yo=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Bu=new WeakMap,ke=ti.createTreeWalker(ti,129,null,!1);function gm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Du!==void 0?Du.createHTML(t):t}const Vf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Mn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Mn?h[1]==="!--"?r=Ou:h[1]!==void 0?r=Ru:h[2]!==void 0?($m.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=de):h[3]!==void 0&&(r=de):r===de?h[0]===">"?(r=n??Mn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?de:h[3]==='"'?Lu:Fu):r===Lu||r===Fu?r=de:r===Ou||r===Ru?r=Mn:(r=de,n=void 0);const p=r===de&&o[d+1].startsWith("/>")?" ":"";s+=r===Mn?a+zf:c>=0?(i.push(l),a.slice(0,c)+td+a.slice(c)+Ft+p):a+Ft+(c===-2?(i.push(void 0),d):p)}return[gm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let ed=class ym{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=Vf(t,e);if(this.el=ym.createElement(l,i),ke.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=ke.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(td)||u.startsWith(Ft)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+td).split(Ft),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?Wf:m[1]==="?"?Zf:m[1]==="@"?Gf:Er})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if($m.test(n.tagName)){const c=n.textContent.split(Ft),u=c.length-1;if(u>0){n.textContent=Ri?Ri.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Fs()),ke.nextNode(),a.push({type:2,index:++s});n.append(c[u],Fs())}}}else if(n.nodeType===8)if(n.data===vm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ft,c+1))!==-1;)a.push({type:7,index:s}),c+=Ft.length-1}s++}}static createElement(t,e){const i=ti.createElement("template");return i.innerHTML=t,i}};function Fi(o,t,e=o,i){var n,s,r,d;if(t===yo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=go(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Fi(o,a._$AS(o,t.values),a,i)),t}let qf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ti).importNode(i,!0);ke.currentNode=s;let r=ke.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new fm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new Yf(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=ke.nextNode(),d++)}return ke.currentNode=ti,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},fm=class _m{constructor(t,e,i,n){var s;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Fi(this,t,e),go(t)?t===W||t==null||t===""?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==yo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):jf(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&go(this._$AH)?this._$AA.nextSibling.data=t:this.$(ti.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ed.createElement(gm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new qf(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Bu.get(t.strings);return e===void 0&&Bu.set(t.strings,e=new ed(t)),e}T(t){mm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new _m(this.k(Fs()),this.k(Fs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Er=class{constructor(t,e,i,n,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Fi(this,t,e,0),r=!go(t)||t!==this._$AH&&t!==yo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Fi(this,d[i+a],e,a),l===yo&&(l=this._$AH[a]),r||(r=!go(l)||l!==this._$AH[a]),l===W?t=W:t!==W&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Wf=class extends Er{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}};const Kf=Ri?Ri.emptyScript:"";let Zf=class extends Er{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,Kf):this.element.removeAttribute(this.name)}},Gf=class extends Er{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Fi(this,t,e,0))!==null&&i!==void 0?i:W)===yo)return;const n=this._$AH,s=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==W&&(n===W||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Yf=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}};const zu=Rs.litHtmlPolyfillSupport;zu?.(ed,fm),((Ta=Rs.litHtmlVersions)!==null&&Ta!==void 0?Ta:Rs.litHtmlVersions=[]).push("2.8.0");const Am=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="calendarTitleID calendarDescID">
  <title id="calendarTitleID">Calendar icon</title>
  <desc id="calendarDescID">An illustration of a calendar</desc>

  <g class="fill-color" fill-rule="evenodd">
    <path d="m11.998.857v11h-11.998v-11z" fill-rule="nonzero" />
    <path d="m11.143 3h-10.286v8h10.286z" fill="#fff" fill-rule="nonzero" />
    <path d="m9 0h1v1h-1z" />
    <path d="m2.143 0h1v1h-1z" />
    <path d="m2.143.857h1v1h-1z" fill="#fff" />
    <path d="m9 .857h1v1h-1z" fill="#fff" />
    <path
      d="m4.92342857 9.14285714v-4.2h-.678c-.02400012.1600008-.07399962.29399946-.15.402s-.16899945.19499967-.279.261-.23399931.11199987-.372.138-.28099926.03700002-.429.033v.642h1.056v2.724zm3.336 0h-.852v-2.724h-1.056v-.642c.14800074.00400002.29099931-.00699987.429-.033s.26199945-.07199967.372-.138.20299962-.15299946.279-.261.12599988-.2419992.15-.402h.678z"
      fill-rule="nonzero"
    />
  </g>
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo=window,th=Qo.ShadowRoot&&(Qo.ShadyCSS===void 0||Qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bm=Symbol(),ju=new WeakMap;let Jf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==bm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(th&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ju.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ju.set(e,t))}return t}toString(){return this.cssText}};const Qf=o=>new Jf(typeof o=="string"?o:o+"",void 0,bm),Xf=(o,t)=>{th?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Qo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Vu=th?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Qf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ha;const Ls=window,qu=Ls.trustedTypes,t2=qu?qu.emptyScript:"",Wu=Ls.reactiveElementPolyfillSupport,id={toAttribute(o,t){switch(t){case Boolean:o=o?t2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Sm=(o,t)=>t!==o&&(t==t||o==o),Ua={attribute:!0,type:String,converter:id,reflect:!1,hasChanged:Sm},nd="finalized";let xn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ua){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ua}static finalize(){if(this.hasOwnProperty(nd))return!1;this[nd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Vu(n))}else t!==void 0&&e.push(Vu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ua){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:id).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:id;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Sm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};xn[nd]=!0,xn.elementProperties=new Map,xn.elementStyles=[],xn.shadowRootOptions={mode:"open"},Wu?.({ReactiveElement:xn}),((Ha=Ls.reactiveElementVersions)!==null&&Ha!==void 0?Ha:Ls.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ia;const Bs=window,Li=Bs.trustedTypes,Ku=Li?Li.createPolicy("lit-html",{createHTML:o=>o}):void 0,od="$lit$",Lt=`lit$${(Math.random()+"").slice(9)}$`,Cm="?"+Lt,e2=`<${Cm}>`,ei=document,zs=()=>ei.createComment(""),fo=o=>o===null||typeof o!="object"&&typeof o!="function",Em=Array.isArray,i2=o=>Em(o)||typeof o?.[Symbol.iterator]=="function",Na=`[ 	
\f\r]`,Tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zu=/-->/g,Gu=/>/g,he=RegExp(`>|${Na}(?:([^\\s"'>=/]+)(${Na}*=${Na}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yu=/'/g,Ju=/"/g,wm=/^(?:script|style|textarea|title)$/i,_o=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Qu=new WeakMap,He=ei.createTreeWalker(ei,129,null,!1);function Pm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ku!==void 0?Ku.createHTML(t):t}const n2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Tn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Tn?h[1]==="!--"?r=Zu:h[1]!==void 0?r=Gu:h[2]!==void 0?(wm.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=he):h[3]!==void 0&&(r=he):r===he?h[0]===">"?(r=n??Tn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?he:h[3]==='"'?Ju:Yu):r===Ju||r===Yu?r=he:r===Zu||r===Gu?r=Tn:(r=he,n=void 0);const p=r===he&&o[d+1].startsWith("/>")?" ":"";s+=r===Tn?a+e2:c>=0?(i.push(l),a.slice(0,c)+od+a.slice(c)+Lt+p):a+Lt+(c===-2?(i.push(void 0),d):p)}return[Pm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let sd=class Mm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=n2(t,e);if(this.el=Mm.createElement(l,i),He.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=He.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(od)||u.startsWith(Lt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+od).split(Lt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?s2:m[1]==="?"?a2:m[1]==="@"?l2:wr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(wm.test(n.tagName)){const c=n.textContent.split(Lt),u=c.length-1;if(u>0){n.textContent=Li?Li.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],zs()),He.nextNode(),a.push({type:2,index:++s});n.append(c[u],zs())}}}else if(n.nodeType===8)if(n.data===Cm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Lt,c+1))!==-1;)a.push({type:7,index:s}),c+=Lt.length-1}s++}}static createElement(t,e){const i=ei.createElement("template");return i.innerHTML=t,i}};function Bi(o,t,e=o,i){var n,s,r,d;if(t===_o)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=fo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Bi(o,a._$AS(o,t.values),a,i)),t}let o2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ei).importNode(i,!0);He.currentNode=s;let r=He.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new xm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new d2(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=He.nextNode(),d++)}return He.currentNode=ei,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},xm=class Tm{constructor(t,e,i,n){var s;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Bi(this,t,e),fo(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==_o&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):i2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&fo(this._$AH)?this._$AA.nextSibling.data=t:this.$(ei.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=sd.createElement(Pm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new o2(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Qu.get(t.strings);return e===void 0&&Qu.set(t.strings,e=new sd(t)),e}T(t){Em(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Tm(this.k(zs()),this.k(zs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},wr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Bi(this,t,e,0),r=!fo(t)||t!==this._$AH&&t!==_o,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Bi(this,d[i+a],e,a),l===_o&&(l=this._$AH[a]),r||(r=!fo(l)||l!==this._$AH[a]),l===K?t=K:t!==K&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},s2=class extends wr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}};const r2=Li?Li.emptyScript:"";let a2=class extends wr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,r2):this.element.removeAttribute(this.name)}},l2=class extends wr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Bi(this,t,e,0))!==null&&i!==void 0?i:K)===_o)return;const n=this._$AH,s=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==K&&(n===K||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},d2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Bi(this,t)}};const Xu=Bs.litHtmlPolyfillSupport;Xu?.(sd,xm),((Ia=Bs.litHtmlVersions)!==null&&Ia!==void 0?Ia:Bs.litHtmlVersions=[]).push("2.8.0");const Pr=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="lockTitleID lockDescID">
  <title id="lockTitleID">Lock icon</title>
  <desc id="lockDescID">An illustration of a lock</desc>
  <path
    d="m9.8480234 5.66075891v-2.17912633c-.00688261-.97492716-.37725298-1.79574705-1.11111111-2.46245966s-1.63734389-1.00632179-2.71045726-1.01882754c-1.04529617-.01250574-1.94175593.31459769-2.68937928.9813103-.74762335.66671262-1.13190232 1.4842758-1.15283692 2.45268954v2.22641369c-.04846504.00625288-.10037138.01250575-.15571902.01875862-.05534764.00625288-.09348877.00937931-.11442337.00937931-.35302046.00625288-.59362498.06917241-.72181356.18875862-.12818859.1195862-.19228288.33022987-.19228288.631931v4.73576994c0 .5030957.269999.7546436.80999699.7546436h8.36968211c.2839076 0 .491533-.0597931.6228761-.1793793s.197158-.3082145.1974448-.565885v-4.82057452c0-.25793103-.0640943-.44499615-.1922829-.56119538s-.3340933-.17755555-.6177141-.18406896c-.0415824 0-.102092-.00468965-.1815288-.01406896-.07943676-.00937931-.13306375-.01406897-.16088096-.01406897zm-1.85873446.00937931h-3.92523766c-.01376522-.12583907-.02064783-.21077393-.02064783-.25480458l-.01032391-.97154019c0-.65420686.0034413-.9813103.01032391-.9813103.00688261-.49684289.1919961-.91513405.55534047-1.2548735.36334438-.33973945.81845687-.51273561 1.36533747-.51898848.52623277-.01875862.98492995.13691187 1.37609154.46701147.39116158.3300996.60050759.74044441.62803802 1.23103443.01376522.2076475.02064783.83032946.02064783 1.86804589v.41503446z"
    class="fill-color"
  />
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=window,eh=Xo.ShadowRoot&&(Xo.ShadyCSS===void 0||Xo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,km=Symbol(),tp=new WeakMap;let h2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==km)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(eh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=tp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&tp.set(e,t))}return t}toString(){return this.cssText}};const c2=o=>new h2(typeof o=="string"?o:o+"",void 0,km),u2=(o,t)=>{eh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Xo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},ep=eh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return c2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Da;const js=window,ip=js.trustedTypes,p2=ip?ip.emptyScript:"",np=js.reactiveElementPolyfillSupport,rd={toAttribute(o,t){switch(t){case Boolean:o=o?p2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Hm=(o,t)=>t!==o&&(t==t||o==o),Oa={attribute:!0,type:String,converter:rd,reflect:!1,hasChanged:Hm},ad="finalized";let kn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Oa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Oa}static finalize(){if(this.hasOwnProperty(ad))return!1;this[ad]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ep(n))}else t!==void 0&&e.push(ep(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return u2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Oa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:rd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:rd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Hm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};kn[ad]=!0,kn.elementProperties=new Map,kn.elementStyles=[],kn.shadowRootOptions={mode:"open"},np?.({ReactiveElement:kn}),((Da=js.reactiveElementVersions)!==null&&Da!==void 0?Da:js.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ra;const Vs=window,zi=Vs.trustedTypes,op=zi?zi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ld="$lit$",Bt=`lit$${(Math.random()+"").slice(9)}$`,Um="?"+Bt,v2=`<${Um}>`,ii=document,qs=()=>ii.createComment(""),Ao=o=>o===null||typeof o!="object"&&typeof o!="function",Im=Array.isArray,m2=o=>Im(o)||typeof o?.[Symbol.iterator]=="function",Fa=`[ 	
\f\r]`,Hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sp=/-->/g,rp=/>/g,ce=RegExp(`>|${Fa}(?:([^\\s"'>=/]+)(${Fa}*=${Fa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ap=/'/g,lp=/"/g,Nm=/^(?:script|style|textarea|title)$/i,bo=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),dp=new WeakMap,Ue=ii.createTreeWalker(ii,129,null,!1);function Dm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return op!==void 0?op.createHTML(t):t}const $2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Hn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Hn?h[1]==="!--"?r=sp:h[1]!==void 0?r=rp:h[2]!==void 0?(Nm.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ce):h[3]!==void 0&&(r=ce):r===ce?h[0]===">"?(r=n??Hn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ce:h[3]==='"'?lp:ap):r===lp||r===ap?r=ce:r===sp||r===rp?r=Hn:(r=ce,n=void 0);const p=r===ce&&o[d+1].startsWith("/>")?" ":"";s+=r===Hn?a+v2:c>=0?(i.push(l),a.slice(0,c)+ld+a.slice(c)+Bt+p):a+Bt+(c===-2?(i.push(void 0),d):p)}return[Dm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let dd=class Om{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=$2(t,e);if(this.el=Om.createElement(l,i),Ue.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ue.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ld)||u.startsWith(Bt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ld).split(Bt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?y2:m[1]==="?"?_2:m[1]==="@"?A2:Mr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Nm.test(n.tagName)){const c=n.textContent.split(Bt),u=c.length-1;if(u>0){n.textContent=zi?zi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],qs()),Ue.nextNode(),a.push({type:2,index:++s});n.append(c[u],qs())}}}else if(n.nodeType===8)if(n.data===Um)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Bt,c+1))!==-1;)a.push({type:7,index:s}),c+=Bt.length-1}s++}}static createElement(t,e){const i=ii.createElement("template");return i.innerHTML=t,i}};function ji(o,t,e=o,i){var n,s,r,d;if(t===bo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Ao(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ji(o,a._$AS(o,t.values),a,i)),t}let g2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ii).importNode(i,!0);Ue.currentNode=s;let r=Ue.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Rm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new b2(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ue.nextNode(),d++)}return Ue.currentNode=ii,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Rm=class Fm{constructor(t,e,i,n){var s;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ji(this,t,e),Ao(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==bo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):m2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&Ao(this._$AH)?this._$AA.nextSibling.data=t:this.$(ii.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=dd.createElement(Dm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new g2(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=dp.get(t.strings);return e===void 0&&dp.set(t.strings,e=new dd(t)),e}T(t){Im(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Fm(this.k(qs()),this.k(qs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Mr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ji(this,t,e,0),r=!Ao(t)||t!==this._$AH&&t!==bo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ji(this,d[i+a],e,a),l===bo&&(l=this._$AH[a]),r||(r=!Ao(l)||l!==this._$AH[a]),l===Z?t=Z:t!==Z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},y2=class extends Mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}};const f2=zi?zi.emptyScript:"";let _2=class extends Mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Z?this.element.setAttribute(this.name,f2):this.element.removeAttribute(this.name)}},A2=class extends Mr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ji(this,t,e,0))!==null&&i!==void 0?i:Z)===bo)return;const n=this._$AH,s=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Z&&(n===Z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},b2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ji(this,t)}};const hp=Vs.litHtmlPolyfillSupport;hp?.(dd,Rm),((Ra=Vs.litHtmlVersions)!==null&&Ra!==void 0?Ra:Vs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S2=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C2=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},E2=(o,t,e)=>{t.constructor.createProperty(e,o)};function Ct(o){return(t,e)=>e!==void 0?E2(o,t,e):C2(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Lm(o){return Ct({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w2=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(d){o(d,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Bm(o,t){return w2({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var La;((La=window.HTMLSlotElement)===null||La===void 0?void 0:La.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=window,ih=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zm=Symbol(),cp=new WeakMap;let P2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==zm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ih&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=cp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&cp.set(e,t))}return t}toString(){return this.cssText}};const M2=o=>new P2(typeof o=="string"?o:o+"",void 0,zm),x2=(o,t)=>{ih?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ts.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},up=ih?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return M2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ba;const Ws=window,pp=Ws.trustedTypes,T2=pp?pp.emptyScript:"",vp=Ws.reactiveElementPolyfillSupport,hd={toAttribute(o,t){switch(t){case Boolean:o=o?T2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},jm=(o,t)=>t!==o&&(t==t||o==o),za={attribute:!0,type:String,converter:hd,reflect:!1,hasChanged:jm},cd="finalized";let Un=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=za){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||za}static finalize(){if(this.hasOwnProperty(cd))return!1;this[cd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(up(n))}else t!==void 0&&e.push(up(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return x2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=za){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:hd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:hd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||jm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Un[cd]=!0,Un.elementProperties=new Map,Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},vp?.({ReactiveElement:Un}),((Ba=Ws.reactiveElementVersions)!==null&&Ba!==void 0?Ba:Ws.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ja;const Ks=window,Vi=Ks.trustedTypes,mp=Vi?Vi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ud="$lit$",zt=`lit$${(Math.random()+"").slice(9)}$`,Vm="?"+zt,k2=`<${Vm}>`,ni=document,Zs=()=>ni.createComment(""),So=o=>o===null||typeof o!="object"&&typeof o!="function",qm=Array.isArray,H2=o=>qm(o)||typeof o?.[Symbol.iterator]=="function",Va=`[ 	
\f\r]`,In=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$p=/-->/g,gp=/>/g,ue=RegExp(`>|${Va}(?:([^\\s"'>=/]+)(${Va}*=${Va}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yp=/'/g,fp=/"/g,Wm=/^(?:script|style|textarea|title)$/i,Co=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),_p=new WeakMap,Ie=ni.createTreeWalker(ni,129,null,!1);function Km(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return mp!==void 0?mp.createHTML(t):t}const U2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=In;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===In?h[1]==="!--"?r=$p:h[1]!==void 0?r=gp:h[2]!==void 0?(Wm.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ue):h[3]!==void 0&&(r=ue):r===ue?h[0]===">"?(r=n??In,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ue:h[3]==='"'?fp:yp):r===fp||r===yp?r=ue:r===$p||r===gp?r=In:(r=ue,n=void 0);const p=r===ue&&o[d+1].startsWith("/>")?" ":"";s+=r===In?a+k2:c>=0?(i.push(l),a.slice(0,c)+ud+a.slice(c)+zt+p):a+zt+(c===-2?(i.push(void 0),d):p)}return[Km(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let pd=class Zm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=U2(t,e);if(this.el=Zm.createElement(l,i),Ie.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ie.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ud)||u.startsWith(zt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ud).split(zt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?N2:m[1]==="?"?O2:m[1]==="@"?R2:xr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Wm.test(n.tagName)){const c=n.textContent.split(zt),u=c.length-1;if(u>0){n.textContent=Vi?Vi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Zs()),Ie.nextNode(),a.push({type:2,index:++s});n.append(c[u],Zs())}}}else if(n.nodeType===8)if(n.data===Vm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(zt,c+1))!==-1;)a.push({type:7,index:s}),c+=zt.length-1}s++}}static createElement(t,e){const i=ni.createElement("template");return i.innerHTML=t,i}};function qi(o,t,e=o,i){var n,s,r,d;if(t===Co)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=So(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=qi(o,a._$AS(o,t.values),a,i)),t}let I2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ni).importNode(i,!0);Ie.currentNode=s;let r=Ie.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Gm(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new F2(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ie.nextNode(),d++)}return Ie.currentNode=ni,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Gm=class Ym{constructor(t,e,i,n){var s;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=qi(this,t,e),So(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==Co&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):H2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&So(this._$AH)?this._$AA.nextSibling.data=t:this.$(ni.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=pd.createElement(Km(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new I2(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=_p.get(t.strings);return e===void 0&&_p.set(t.strings,e=new pd(t)),e}T(t){qm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Ym(this.k(Zs()),this.k(Zs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},xr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=qi(this,t,e,0),r=!So(t)||t!==this._$AH&&t!==Co,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=qi(this,d[i+a],e,a),l===Co&&(l=this._$AH[a]),r||(r=!So(l)||l!==this._$AH[a]),l===G?t=G:t!==G&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},N2=class extends xr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}};const D2=Vi?Vi.emptyScript:"";let O2=class extends xr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==G?this.element.setAttribute(this.name,D2):this.element.removeAttribute(this.name)}},R2=class extends xr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=qi(this,t,e,0))!==null&&i!==void 0?i:G)===Co)return;const n=this._$AH,s=t===G&&n!==G||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==G&&(n===G||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},F2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qi(this,t)}};const Ap=Ks.litHtmlPolyfillSupport;Ap?.(pd,Gm),((ja=Ks.litHtmlVersions)!==null&&ja!==void 0?ja:Ks.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L2=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B2=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},z2=(o,t,e)=>{t.constructor.createProperty(e,o)};function nh(o){return(t,e)=>e!==void 0?z2(o,t,e):B2(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qa;((qa=window.HTMLSlotElement)===null||qa===void 0?void 0:qa.prototype.assignedElements)!=null;var Wi;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(Wi||(Wi={}));let Eo=class extends U{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=Wi.ShowBadge}render(){return y`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?y` <div class="title">${this.headline}</div> `:""}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){const t=$`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=$`var(--formSectionBadgeMargin, 1rem)`,i=$`var(--formSectionBadgeBackgroundColor, #333)`,n=$`var(--formSectionBadgeRadius, 1.2rem)`,s=$`calc(${n} * 2)`,r=$`var(--formSectionBadgeFontSize, 1.8rem)`,d=$`var(--formSectionBadgeFontWeight, bold)`,a=$`var(--formSectionBadgeFontColor, #fff)`,l=$`var(--formSectionTitleFontSize, 1.8rem)`,h=$`var(--formSectionTitleFontWeight, bold)`,c=$`var(--formSectionContentBackgroundColor, transparent)`,u=$`var(--formSectionTextColor, #333)`,p=$`calc(${n} * 2)`;return $`
      :host {
        display: block;
        background-color: ${c};
        color: ${u};
      }
      .container {
        position: relative;
        padding: 0.5rem;
      }

      .content-container {
        position: relative;
        left: calc(${s} + ${e});
        width: calc(100% - (${s} + ${e}));
        transition: ${t};
        z-index: 1;
      }

      .hidebadge .content-container {
        left: 0;
        width: 100%;
      }

      .hidebadge .badge-container {
        display: none;
      }

      .hidebadgeleavespacing .badge {
        display: none;
      }

      .badge-container {
        position: absolute;
        width: ${s};
      }

      .badge {
        background-color: ${i};
        color: ${a};
        width: ${s};
        height: ${s};
        border-radius: ${n};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${d};
        font-size: ${r};
      }

      .title {
        line-height: ${p};
        margin-bottom: 0.5rem;
        font-size: ${l};
        font-weight: ${h};
      }
    `}};v([nh({type:String})],Eo.prototype,"sectionBadge",void 0);v([nh({type:String})],Eo.prototype,"headline",void 0);v([nh({type:String})],Eo.prototype,"badgeMode",void 0);Eo=v([L2("donation-form-section")],Eo);var Vn;(function(o){o.HideNumbers="hidenumbers",o.ShowNumbers="shownumbers"})(Vn||(Vn={}));var _t;(function(o){o.DonationType="donationType",o.Amount="amount"})(_t||(_t={}));var lt;(function(o){o.ValidDonationAmount="valid_donation_amount",o.InvalidDonationAmount="invalid_donation_amount",o.DonationTooHigh="donation_too_high",o.DonationTooLow="donation_too_low"})(lt||(lt={}));var dt;(function(o){o.Button="button",o.Checkbox="checkbox",o.Hide="hide"})(dt||(dt={}));var Zt;(function(o){o.SingleLine="single-line",o.MultiLine="multi-line"})(Zt||(Zt={}));let st=class extends U{constructor(){super(...arguments),this.donationInfo=b0,this.stepNumberMode=Vn.ShowNumbers,this.amountOptions=ur,this.amountSelectionLayout=Zt.MultiLine,this.frequencySelectionMode=dt.Button,this.customAmountMode="display",this.coverFeesCheckboxMode="display",this.amountTitleDisplayMode="default",this.customAmountSelected=!1,this.currencyValidator=new X0}render(){const e=this.amountTitleDisplayMode==="default"?"Choose an amount (USD)":"";return y`
      ${this.frequencySelectionMode===dt.Button?this.frequencyButtonsTemplate:x}

      <donation-form-section
        sectionBadge="${this.amountSelectionSectionNumber}"
        headline=${e}
        badgeMode=${this.formSectionNumberMode}
      >
        ${this.amountTitleDisplayMode==="slot"?y`<slot name="edit-donation-amount-title"></slot>`:x}
        <ul class="amount-selector">
          ${this.presetAmountsTemplate}
          ${this.customAmountMode==="display"?y`<li class="custom-amount">${this.customAmountTemplate}</li>`:x}
        </ul>

        <div class="errors">${this.error}</div>

        ${this.coverFeesCheckboxMode==="display"?y` <div class="checkbox-options">
              ${this.coverFeesCheckboxTemplate}
              ${this.frequencySelectionMode===dt.Checkbox?this.frequencyCheckboxTemplate:x}
            </div>`:x}
      </donation-form-section>
    `}updated(t){t.has("customAmountSelected")&&this.customAmountButton&&(this.customAmountButton.checked=this.customAmountSelected),t.has("amountOptions")&&(this.customAmountSelected=!1,this.updateSelectedDonationInfo(),this.setupAmountColumnsLayoutConfig()),t.has("amountSelectionLayout")&&this.setupAmountColumnsLayoutConfig(),t.has("donationInfo")&&this.updateSelectedDonationInfo(),t.has("defaultSelectedAmount")&&this.defaultSelectedAmount!==void 0&&(this.customAmountSelected=!1,this.donationInfo=new D({donationType:this.donationInfo.donationType,amount:this.defaultSelectedAmount,coverFees:this.donationInfo.coverFees}))}get frequencyButtonsTemplate(){return y`
      <donation-form-section
        sectionBadge="1"
        headline="Choose a frequency"
        badgeMode=${this.formSectionNumberMode}
      >
        <ul class="frequency-selector">
          ${this.frequencyTemplate}
        </ul>
      </donation-form-section>
    `}get frequencyCheckboxTemplate(){return y`
      <div class="checkbox-option-container">
        <input
          type="checkbox"
          id="make-this-monthly"
          @input=${this.monthlyCheckboxChecked}
          .checked=${this.donationInfo.donationType===E.Monthly}
          tabindex="0"
        />
        <label for="make-this-monthly"> Make this monthly </label>
      </div>
    `}get coverFeesCheckboxTemplate(){return y`
      <div class="checkbox-option-container">
        <input
          type="checkbox"
          id="cover-fees"
          @input=${this.coverFeesChecked}
          .checked=${this.donationInfo.coverFees}
          tabindex="0"
        />
        <label for="cover-fees"> ${this.coverFeesTextTemplate} </label>
      </div>
    `}get amountSelectionSectionNumber(){return this.frequencySelectionMode===dt.Button?2:1}get formSectionNumberMode(){switch(this.stepNumberMode){case Vn.ShowNumbers:return Wi.ShowBadge;case Vn.HideNumbers:return Wi.HideBadge}}setupAmountColumnsLayoutConfig(){const t=this.customAmountMode==="hide"&&this.coverFeesCheckboxMode==="hide"&&this.frequencySelectionMode===dt.Hide,e=this.amountOptions.length;let i=5,n=3;switch(e){case 7:i=5,n=3;break;case 6:i=4,n=2;break;case 5:i=4,n=3;break;case 4:if(t){i=4,n=0;break}i=3,n=2;break;case 3:i=2,n=1;break}this.amountSelectionLayout===Zt.SingleLine&&(i=e+3,n=3),this.style.setProperty("--paymentSelectorAmountColumnCount",`${i}`),this.style.setProperty("--paymentSelectorCustomAmountColSpan",`${n}`)}updateSelectedDonationInfo(){var t,e;if(!this.customAmountSelected&&!this.isCustomAmount){const i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`input[type="radio"][name="${_t.Amount}"][value="${this.donationInfo.amount}"]`);i.checked=!0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value="")}else if(this.customAmountSelected=!0,((e=this.shadowRoot)===null||e===void 0?void 0:e.activeElement)!==this.customAmountInput){this.customAmountInput.value=this.customAmountDisplayValue;const i=this.getDonationInfoStatus(this.donationInfo.amount);this.handleDonationInfoStatus(i)}}get coverFeesTextTemplate(){const t=it(this.donationInfo.fee,{symbol:"$"}).format();return y` I'll generously add ${t} to cover fees. `}formatShortenedAmount(t){const e=t%1===0?0:2;return it(t,{symbol:"$",precision:e}).format()}get frequencyTemplate(){return y`
      <li>
        ${this.getRadioButton({group:_t.DonationType,value:E.OneTime,displayText:"One time",checked:this.donationInfo.donationType===E.OneTime})}
      </li>

      <li>
        ${this.getRadioButton({group:_t.DonationType,value:E.Monthly,displayText:"Monthly",checked:this.donationInfo.donationType===E.Monthly})}
      </li>
    `}get presetAmountsTemplate(){return y`
      ${this.amountOptions.map(t=>{const e=!this.customAmountSelected&&t===this.donationInfo.amount,i=this.formatShortenedAmount(t);return y`
          <li>
            ${this.getRadioButton({group:_t.Amount,value:`${t}`,displayText:`${i}`,checked:e})}
          </li>
        `})}
    `}getRadioButton(t){const e=`${t.group}-${t.value}-option`;return y`
      <div class="selection-button">
        <input
          type="radio"
          name=${t.group}
          value=${t.value}
          id=${e}
          tabindex="0"
          .checked=${t.checked}
          @change=${this.radioSelected}
          @click=${i=>{t.group===_t.Amount&&parseFloat(t.value)===this.donationInfo.amount&&this.radioSelected(i)}}
        />
        <label for=${e}> ${t.displayText} </label>
      </div>
    `}get isCustomAmount(){return!this.amountOptions.includes(this.donationInfo.amount)}get customAmountDisplayValue(){return this.isCustomAmount?it(this.donationInfo.amount,{symbol:""}).format():""}get customAmountTemplate(){return y`
      <div class="selection-button">
        <input
          type="radio"
          name=${_t.Amount}
          value="custom"
          id="custom-amount-button"
          tabindex="0"
          @change=${this.customRadioSelected}
        />

        <label for="custom-amount-button">
          <span class="custom-amount-text">Custom: $</span
          ><input
            type="text"
            id="custom-amount-input"
            tabindex="-1"
            value=${this.customAmountDisplayValue}
            @input=${this.customAmountChanged}
            @keydown=${this.currencyValidator.keydown}
            @focus=${this.customAmountFocused}
            @blur=${t=>{const e=t.target;e.value=this.customAmountDisplayValue}}
          />
        </label>
      </div>
    `}customRadioSelected(){this.customAmountInput.focus()}customAmountFocused(t){const e=t.target;this.customAmountSelected=!0,this.handleCustomAmountInput(e.value)}coverFeesChecked(t){const i=t.target.checked;this.updateDonationInfo({coverFees:i})}customAmountChanged(t){const i=t.target.value;this.customAmountSelected=!0,this.handleCustomAmountInput(i)}handleCustomAmountInput(t){const e=parseFloat(t);isNaN(e)?this.dispatchEditDonationError(lt.InvalidDonationAmount):this.amountChanged(e)}handleDonationInfoStatus(t){switch(t){case lt.ValidDonationAmount:this.error=void 0;break;case lt.DonationTooHigh:this.error=y`
          To make a donation of $10,000 or more, please contact our philanthropy
          department at
          <a href="mailto:donations@archive.org">donations@archive.org</a>
        `,this.dispatchEditDonationError(t);break;case lt.DonationTooLow:this.customAmountInput.value.length>0&&(this.error=y` Please select an amount (minimum $1) `),this.dispatchEditDonationError(t);break;case lt.InvalidDonationAmount:this.error=y` Please enter a valid donation amount `,this.dispatchEditDonationError(t);break}}amountChanged(t){const e=this.getDonationInfoStatus(t);this.handleDonationInfoStatus(e),e===lt.ValidDonationAmount&&this.updateDonationInfo({amount:t})}getDonationInfoStatus(t){return isNaN(t)?lt.InvalidDonationAmount:t>=1e4?lt.DonationTooHigh:t<1?lt.DonationTooLow:lt.ValidDonationAmount}radioSelected(t){const e=t.target,i=e.name,{value:n}=e;switch(i){case _t.Amount:this.presetAmountChanged(parseFloat(n));break;case _t.DonationType:this.updateDonationInfo({donationType:n});break}}monthlyCheckboxChecked(t){const i=t.target.checked?E.Monthly:E.OneTime;this.updateDonationInfo({donationType:i})}dispatchEditDonationError(t){const e=new CustomEvent("editDonationError",{detail:{error:t}});this.dispatchEvent(e)}presetAmountChanged(t){this.error=void 0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=""),this.updateDonationInfo({amount:t})}updateDonationInfo(t){var e,i,n;const s=new D({donationType:(e=t.donationType)!==null&&e!==void 0?e:this.donationInfo.donationType,amount:(i=t.amount)!==null&&i!==void 0?i:this.donationInfo.amount,coverFees:(n=t.coverFees)!==null&&n!==void 0?n:this.donationInfo.coverFees});this.donationInfo=s;const r=new CustomEvent("donationInfoChanged",{detail:{donationInfo:s}});this.dispatchEvent(r)}static get styles(){const t=$`var(--paymentButtonBorderColor, #333)`,e=$`var(--paymentButtonGridGap, 1rem)`,i=$`var(--paymentButtonFontSize, 1.6rem)`,n=$`var(--paymentButtonFontColor, #000)`,s=$`var(--paymentButtonSelectedFontColor, #000)`,r=$`var(--paymentButtonSelectedColor, #f9bf3b)`,d=$`var(--paymentButtonFocusedOutlineColor, #7fb3f9)`,a=$`var(--paymentButtonColor, #fff)`,l=$`var(--coverFeesFontSize, 1.2rem)`,h=$`var(--coverFeesFontWeight, bold)`,c=$`var(--customAmountWidth, 4rem)`,u=$`var(--inputFieldFontColor, #333)`,p=$`var(--inputBorder, 1px solid #d9d9d9)`,_=$`var(--paymentSelectorAmountColumnCount, 5)`,m=$`var(--paymentSelectorCustomAmountColSpan, 3)`;return $`
      :host {
        --formSectionContentBackgroundColor: var(
          --editFormBgColor,
          transparent
        );
        --formSectionBadgeBackgroundColor: var(--editFormBadgeBgColor, #333);
        --formSectionBadgeFontColor: var(--editFormBadgeFontColor, #fff);
        --formSectionTextColor: var(--editFormTextColor, #333);
      }
      .errors {
        color: red;
        font-size: 1.4rem;
        margin-top: 0.5rem;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-gap: ${e};
      }

      li {
        margin: 0;
        padding: 0;
        display: inline-block;
      }

      .frequency-selector {
        grid-template-columns: repeat(2, 1fr);
      }

      .amount-selector {
        grid-template-columns: repeat(${_}, 1fr);
      }

      .custom-amount {
        grid-column: span ${m};
      }

      .selection-button {
        height: 3rem;
      }

      .selection-button label {
        padding: 0 0.3rem;
        display: flex;
        cursor: pointer;
        text-align: center;
        font-size: ${i};
        font-weight: bold;
        border: 1px solid ${t};
        border-radius: 5px;
        background-color: #ccc;
        height: 100%;
        justify-content: center;
        align-items: center;
      }

      label[for='custom-amount-button'] {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .custom-amount-text {
        white-space: nowrap;
        margin-right: 0.5rem;
      }

      input[type='radio'] {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }

      input[type='radio'] + label {
        color: ${n};
        background-color: ${a};
      }

      input[type='radio']:checked + label {
        color: ${s};
        background-color: ${r};
      }

      input[type='radio']:focus + label {
        outline: 2px solid ${d};
      }

      .checkbox-options {
        margin-top: 1rem;
      }

      .checkbox-option-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .checkbox-option-container input {
        width: 2rem;
      }

      .checkbox-option-container label {
        font-size: ${l};
        font-weight: ${h};
        flex: 1;
      }

      #custom-amount-input {
        width: ${c};
        font-size: 1.6rem;
        font-weight: bold;
        color: ${u};
        padding: 0.1rem;
        border: ${p};
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    `}};v([Ct({type:Object})],st.prototype,"donationInfo",void 0);v([Ct({type:String})],st.prototype,"stepNumberMode",void 0);v([Ct({type:Number})],st.prototype,"defaultSelectedAmount",void 0);v([Ct({type:Array})],st.prototype,"amountOptions",void 0);v([Ct({type:String})],st.prototype,"amountSelectionLayout",void 0);v([Ct({type:String,reflect:!0})],st.prototype,"frequencySelectionMode",void 0);v([Ct({type:String,reflect:!0})],st.prototype,"customAmountMode",void 0);v([Ct({type:String,reflect:!0})],st.prototype,"coverFeesCheckboxMode",void 0);v([Ct({type:String,reflect:!0})],st.prototype,"amountTitleDisplayMode",void 0);v([Lm()],st.prototype,"error",void 0);v([Lm()],st.prototype,"customAmountSelected",void 0);v([Bm("#custom-amount-button")],st.prototype,"customAmountButton",void 0);v([Bm("#custom-amount-input")],st.prototype,"customAmountInput",void 0);st=v([S2("donation-form-edit-donation")],st);let w=class extends U{constructor(){super(...arguments),this.analyticsCategory="DonationForm",this.amountOptions=ur,this.donationInfo=b0,this.amountSelectionLayout=Zt.MultiLine,this.frequencySelectionMode=dt.Button,this.donorEmail="",this.lazyLoaderService=new uy,this.recaptchaManagerSetup=!1}updated(t){var e,i,n;t.has("referrer")&&this.referrer&&((e=this.braintreeManager)===null||e===void 0||e.setReferrer(this.referrer),this.logDonationFlowEvent("referrer",this.referrer)),t.has("loggedInUser")&&this.loggedInUser&&((i=this.braintreeManager)===null||i===void 0||i.setLoggedInUser(this.loggedInUser)),t.has("origin")&&this.origin&&((n=this.braintreeManager)===null||n===void 0||n.setOrigin(this.origin),this.logDonationFlowEvent("origin",this.origin)),(t.has("paymentClients")||t.has("braintreeAuthToken")||t.has("endpointManager")||t.has("environment"))&&(this.setupBraintreeManager(),this.setupRecaptchaManager()),t.has("recaptchaSiteKey")&&this.setupRecaptchaManager(),(t.has("braintreeManager")||t.has("recaptchaManager")||t.has("modalManager")||t.has("recaptchaElement"))&&this.setupPaymentFlowHandlers(),(t.has("environment")||t.has("lazyLoaderService"))&&this.environment&&(this.paymentClients=new Y0(this.lazyLoaderService,this.environment))}showConfirmationStepDev(t){return g(this,void 0,void 0,function*(){this.donationForm.showConfirmationModalDev(t)})}showUpsellModalDev(t){return g(this,void 0,void 0,function*(){this.donationForm.showUpsellModalDev(t)})}setupBraintreeManager(){this.braintreeManager===void 0&&this.braintreeAuthToken&&this.endpointManager&&this.paymentClients&&this.environment&&(this.braintreeManager=new J0({paymentClients:this.paymentClients,endpointManager:this.endpointManager,authorizationToken:this.braintreeAuthToken,venmoProfileId:this.venmoProfileId,googlePayMerchantId:this.googlePayMerchantId,hostedFieldConfig:this.hostedFieldConfig,hostingEnvironment:this.environment,referrer:this.referrer,loggedInUser:this.loggedInUser,origin:this.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:t}});this.dispatchEvent(e)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:t}});this.dispatchEvent(e)}))}setupRecaptchaManager(){return g(this,void 0,void 0,function*(){if(!this.recaptchaSiteKey||!this.paymentClients||this.recaptchaManagerSetup)return;this.recaptchaManagerSetup=!0;const t=yield this.paymentClients.recaptchaLibrary.get();this.recaptchaManager=new I1({grecaptchaLibrary:t,siteKey:this.recaptchaSiteKey})})}firstUpdated(){this.configureFromQueryParams(),this.trackViewedEvent()}configureFromQueryParams(){const t=new URLSearchParams(window.location.search);let e=this.amountOptions;const i=t.get("dollarAmounts");i&&(e=i.slice(1,-1).split(",").map(I=>parseFloat(I)).filter(I=>!isNaN(I)));let n=this.donationInfo.coverFees;const s=t.get("coverFees");s&&(n=s==="true");let r=this.donationInfo.donationType;t.get("contrib_type")==="monthly"&&(r=E.Monthly);let a=this.donationInfo.amount;const l=t.get("amt");if(l){const p=it(l).value;p>0&&(a=p)}const h=t.get("amountLayout");if(h){const p=h;Object.values(Zt).includes(p)&&(this.amountSelectionLayout=p)}const c=t.get("frequencyMode");if(c){const p=c;Object.values(dt).includes(p)&&(this.frequencySelectionMode=p)}const u=new D({donationType:r,amount:a,coverFees:n});this.amountOptions=e,this.donationInfo=u}setupPaymentFlowHandlers(){var t;this.paymentFlowHandlers||!this.braintreeManager||!this.recaptchaManager||!this.modalManager||!this.recaptchaElement||(this.paymentFlowHandlers=new U1({braintreeManager:this.braintreeManager,modalManager:this.modalManager,recaptchaManager:this.recaptchaManager,resources:{analytics:{logEvent:this.logEvent.bind(this),logDonationFlowEvent:this.logDonationFlowEvent.bind(this)}}}),this.donationForm.braintreeManager=this.braintreeManager,this.donationForm.paymentFlowHandlers=this.paymentFlowHandlers,this.braintreeManager.startup(),(t=this.paymentFlowHandlers)===null||t===void 0||t.startup(),this.recaptchaManager.setup(this.recaptchaElement,1,"light","image"))}get hostedFieldConfig(){const t={input:{"font-size":"16px","font-family":'"Helvetica Neue", Helvetica, Arial, sans-serif',"font-weight":"700",color:"#333"},":focus":{color:"#333"},".valid":{},".invalid":{color:"#b00b00"}},e={number:{selector:"#braintree-creditcard",placeholder:"Card number"},cvv:{selector:"#braintree-cvv",placeholder:"CVC"},expirationDate:{selector:"#braintree-expiration",placeholder:"MM / YY"}},i=new Q0({number:this.braintreeNumberInput,cvv:this.braintreeCVVInput,expirationDate:this.braintreeExpirationDateInput,errorContainer:this.braintreeErrorMessage});return new N1({hostedFieldStyle:t,hostedFieldFieldOptions:e,hostedFieldContainer:i})}render(){return y`
      <div class="donation-form-controller-container">
        <donation-form
          .environment=${this.environment}
          .braintreeManager=${this.braintreeManager}
          .contactForm=${this.contactForm}
          .amountOptions=${this.amountOptions}
          .donationInfo=${this.donationInfo}
          .amountSelectionLayout=${this.amountSelectionLayout}
          .frequencySelectionMode=${this.frequencySelectionMode}
          @donationInfoChanged=${this.donationInfoChanged}
          @paymentProviderSelected=${this.paymentProviderSelected}
          @paymentFlowStarted=${this.paymentFlowStarted}
          @paymentFlowConfirmed=${this.paymentFlowConfirmed}
          @paymentFlowCancelled=${this.paymentFlowCancelled}
          @paymentFlowError=${this.paymentFlowError}
        >
          <!--
            Why are these slots here?

            Due to the way Braintree, PayPal, and Recaptcha work, they cannot exist
            in the shadowDOM so must exist in the clearDOM and get passed
            in through a <slot>.

            Braintree / PayPal are working on a solution to this. See:
            - https://github.com/braintree/braintree-web-drop-in/issues/614#issuecomment-616796104
            - https://github.com/braintree/braintree-web-drop-in/issues/296#issuecomment-616749307
            - https://github.com/paypal/paypal-checkout-components/issues/353#issuecomment-595956216
          -->
          <div slot="braintree-hosted-fields">
            <div id="braintree-error-message"></div>
            <div class="braintree-row">
              <badged-input .icon=${cm} ?required=${!0} class="creditcard">
                <div class="braintree-input" id="braintree-creditcard"></div>
              </badged-input>
            </div>
            <div class="braintree-row">
              <badged-input .icon=${Am} ?required=${!0} class="expiration">
                <div class="braintree-input" id="braintree-expiration"></div>
              </badged-input>
              <badged-input .icon=${Pr} ?required=${!0} class="cvv">
                <div class="braintree-input" id="braintree-cvv"></div>
              </badged-input>
            </div>
          </div>

          <!--
            Form autocompletion does not work in the shadowDOM so
            we slot the contact form in from the lightDOM and pass
            in a reference to it in the <donation-form> tag above
          -->
          <div slot="contact-form">
            <contact-form .donorEmail=${this.donorEmail}></contact-form>
          </div>

          <div slot="paypal-button">
            <div id="paypal-button"></div>
          </div>

          <slot name="recaptcha" slot="recaptcha"> </slot>
        </donation-form>
      </div>

      ${this.getStyles}
    `}createRenderRoot(){return this}donationInfoChanged(t){this.logEvent("DonationInfoChanged"),this.donationInfo=t.detail.donationInfo}trackViewedEvent(){this.logEvent("Viewed")}paymentProviderSelected(t){const e=t.detail.paymentProvider,i=t.detail.previousPaymentProvider,n=this.removeSpaces(e??"unset");let s=`ProviderFirstSelected-${n}`,r;i!==void 0&&(s=`ProviderChangedTo-${n}`,r=`ProviderChangedFrom-${this.removeSpaces(i)}`),this.logEvent(s,r)}paymentFlowConfirmed(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowConfirmed",i)}paymentFlowStarted(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowStarted",i)}paymentFlowCancelled(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowCancelled",i)}paymentFlowError(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e),n=t.detail.error,s=`${i}-${n}`;this.logEvent("PaymentFlowError",s)}removeSpaces(t){return t.replace(/\s+/g,"")}logEvent(t,e){var i;const n={action:t,label:e,category:this.analyticsCategory};(i=this.analyticsHandler)===null||i===void 0||i.sendEvent(n)}logDonationFlowEvent(t,e){var i;const n={action:t,label:e,category:"DonationFlow"};(i=this.analyticsHandler)===null||i===void 0||i.sendEventNoSampling(n)}get getStyles(){return y`
      <style>
        .donation-form-controller-container {
          color: var(--donateFormTextColor, #333);
          background-color: var(--donateFormBgColor, transparent);

          --formSectionContentBackgroundColor: var(--donateFormBgColor, transparent);

          --editFormBadgeBgColor: var(--donateFormBadgeBgColor, #333);
          --formSectionBadgeBackgroundColor: var(--donateFormBadgeBgColor, #333);

          --editFormBadgeFontColor: var(--donateFormBadgeTextColor, #fff);
          --formSectionBadgeFontColor: var(--donateFormBadgeTextColor, #fff);

          --paymentButtonFontColor: var(--donateFormPaymentOptionTextColor);
          --paymentButtonColor: var(--donateFormPaymentOptionBgColor);

          --paymentButtonSelectedColor: var(--donateFormSelectedOptionBgColor);
          --paymentButtonSelectedFontColor: var(--donateFormSelectedOptionTextColor);
        }
        .donation-form-controller-container donation-form:focus {
          outline: none;
        }

        .donation-form-controller-container #paypal-button {
          opacity: 0.001;
          width: 5rem;
          height: 3rem;
          overflow: hidden;
        }

        .donation-form-controller-container .braintree-row {
          display: flex;
          margin-top: -1px;
        }

        .donation-form-controller-container badged-input {
          width: 100%;
        }

        .donation-form-controller-container badged-input.cvv {
          margin-left: -1px;
        }

        .donation-form-controller-container .braintree-input {
          width: 100%;
          height: 100%;
        }

        .donation-form-controller-container #braintree-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        .donation-form-controller-container div[slot='braintree-hosted-fields'] {
          background-color: white;
        }
      </style>
    `}};v([f({type:String})],w.prototype,"environment",void 0);v([f({type:String})],w.prototype,"braintreeAuthToken",void 0);v([f({type:String})],w.prototype,"recaptchaSiteKey",void 0);v([f({type:String})],w.prototype,"venmoProfileId",void 0);v([f({type:String})],w.prototype,"googlePayMerchantId",void 0);v([f({type:String})],w.prototype,"analyticsCategory",void 0);v([f({type:Array})],w.prototype,"amountOptions",void 0);v([f({type:Object})],w.prototype,"donationInfo",void 0);v([f({type:String})],w.prototype,"amountSelectionLayout",void 0);v([f({type:String})],w.prototype,"frequencySelectionMode",void 0);v([f({type:String})],w.prototype,"referrer",void 0);v([f({type:String})],w.prototype,"loggedInUser",void 0);v([f({type:String})],w.prototype,"origin",void 0);v([f({type:String})],w.prototype,"donorEmail",void 0);v([f({type:Object})],w.prototype,"endpointManager",void 0);v([f({type:Object})],w.prototype,"analyticsHandler",void 0);v([f({type:Object})],w.prototype,"modalManager",void 0);v([f({type:Object})],w.prototype,"recaptchaElement",void 0);v([f({type:Object})],w.prototype,"braintreeManager",void 0);v([f({type:Object})],w.prototype,"recaptchaManager",void 0);v([f({type:Object})],w.prototype,"paymentFlowHandlers",void 0);v([f({type:Object})],w.prototype,"paymentClients",void 0);v([f({type:Object})],w.prototype,"lazyLoaderService",void 0);v([M("donation-form")],w.prototype,"donationForm",void 0);v([M("#braintree-creditcard")],w.prototype,"braintreeNumberInput",void 0);v([M("#braintree-cvv")],w.prototype,"braintreeCVVInput",void 0);v([M("#braintree-expiration")],w.prototype,"braintreeExpirationDateInput",void 0);v([M("#braintree-error-message")],w.prototype,"braintreeErrorMessage",void 0);v([M("contact-form")],w.prototype,"contactForm",void 0);w=v([St("donation-form-controller")],w);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=window,oh=es.ShadowRoot&&(es.ShadyCSS===void 0||es.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jm=Symbol(),bp=new WeakMap;let j2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Jm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(oh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=bp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&bp.set(e,t))}return t}toString(){return this.cssText}};const V2=o=>new j2(typeof o=="string"?o:o+"",void 0,Jm),q2=(o,t)=>{oh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=es.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Sp=oh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return V2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wa;const Gs=window,Cp=Gs.trustedTypes,W2=Cp?Cp.emptyScript:"",Ep=Gs.reactiveElementPolyfillSupport,vd={toAttribute(o,t){switch(t){case Boolean:o=o?W2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Qm=(o,t)=>t!==o&&(t==t||o==o),Ka={attribute:!0,type:String,converter:vd,reflect:!1,hasChanged:Qm},md="finalized";let Nn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ka){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ka}static finalize(){if(this.hasOwnProperty(md))return!1;this[md]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Sp(n))}else t!==void 0&&e.push(Sp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return q2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ka){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:vd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:vd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Qm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Nn[md]=!0,Nn.elementProperties=new Map,Nn.elementStyles=[],Nn.shadowRootOptions={mode:"open"},Ep?.({ReactiveElement:Nn}),((Wa=Gs.reactiveElementVersions)!==null&&Wa!==void 0?Wa:Gs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Za;const Ys=window,Ki=Ys.trustedTypes,wp=Ki?Ki.createPolicy("lit-html",{createHTML:o=>o}):void 0,$d="$lit$",jt=`lit$${(Math.random()+"").slice(9)}$`,Xm="?"+jt,K2=`<${Xm}>`,oi=document,Js=()=>oi.createComment(""),wo=o=>o===null||typeof o!="object"&&typeof o!="function",t$=Array.isArray,Z2=o=>t$(o)||typeof o?.[Symbol.iterator]=="function",Ga=`[ 	
\f\r]`,Dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pp=/-->/g,Mp=/>/g,pe=RegExp(`>|${Ga}(?:([^\\s"'>=/]+)(${Ga}*=${Ga}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xp=/'/g,Tp=/"/g,e$=/^(?:script|style|textarea|title)$/i,Po=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),kp=new WeakMap,Ne=oi.createTreeWalker(oi,129,null,!1);function i$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return wp!==void 0?wp.createHTML(t):t}const G2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Dn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Dn?h[1]==="!--"?r=Pp:h[1]!==void 0?r=Mp:h[2]!==void 0?(e$.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=pe):h[3]!==void 0&&(r=pe):r===pe?h[0]===">"?(r=n??Dn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?pe:h[3]==='"'?Tp:xp):r===Tp||r===xp?r=pe:r===Pp||r===Mp?r=Dn:(r=pe,n=void 0);const p=r===pe&&o[d+1].startsWith("/>")?" ":"";s+=r===Dn?a+K2:c>=0?(i.push(l),a.slice(0,c)+$d+a.slice(c)+jt+p):a+jt+(c===-2?(i.push(void 0),d):p)}return[i$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let gd=class n${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=G2(t,e);if(this.el=n$.createElement(l,i),Ne.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ne.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith($d)||u.startsWith(jt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+$d).split(jt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?J2:m[1]==="?"?X2:m[1]==="@"?t_:Tr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(e$.test(n.tagName)){const c=n.textContent.split(jt),u=c.length-1;if(u>0){n.textContent=Ki?Ki.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Js()),Ne.nextNode(),a.push({type:2,index:++s});n.append(c[u],Js())}}}else if(n.nodeType===8)if(n.data===Xm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(jt,c+1))!==-1;)a.push({type:7,index:s}),c+=jt.length-1}s++}}static createElement(t,e){const i=oi.createElement("template");return i.innerHTML=t,i}};function Zi(o,t,e=o,i){var n,s,r,d;if(t===Po)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=wo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Zi(o,a._$AS(o,t.values),a,i)),t}let Y2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:oi).importNode(i,!0);Ne.currentNode=s;let r=Ne.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new o$(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new e_(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Ne.nextNode(),d++)}return Ne.currentNode=oi,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},o$=class s${constructor(t,e,i,n){var s;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Zi(this,t,e),wo(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Po&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Z2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&wo(this._$AH)?this._$AA.nextSibling.data=t:this.$(oi.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=gd.createElement(i$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Y2(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=kp.get(t.strings);return e===void 0&&kp.set(t.strings,e=new gd(t)),e}T(t){t$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new s$(this.k(Js()),this.k(Js()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Tr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Zi(this,t,e,0),r=!wo(t)||t!==this._$AH&&t!==Po,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Zi(this,d[i+a],e,a),l===Po&&(l=this._$AH[a]),r||(r=!wo(l)||l!==this._$AH[a]),l===Y?t=Y:t!==Y&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},J2=class extends Tr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}};const Q2=Ki?Ki.emptyScript:"";let X2=class extends Tr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,Q2):this.element.removeAttribute(this.name)}},t_=class extends Tr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Zi(this,t,e,0))!==null&&i!==void 0?i:Y)===Po)return;const n=this._$AH,s=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Y&&(n===Y||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},e_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Zi(this,t)}};const Hp=Ys.litHtmlPolyfillSupport;Hp?.(gd,o$),((Za=Ys.litHtmlVersions)!==null&&Za!==void 0?Za:Ys.litHtmlVersions=[]).push("2.8.0");const i_=y`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 468 300" aria-labelledby="applePayTitleID applePayDescID">
  <title id="donateTitleID">ApplePay icon</title>
  <desc id="donateDescID">An illustration of the Apple Pay logo</desc>
  <g fill="none">
    <path
      fill="#000"
      d="M425.540484,0 L41.8576242,0 C40.2596386,0 38.6588291,0 37.0636954,0.0093185241 C35.715305,0.0189194277 34.3700489,0.0338855422 33.0247929,0.0705948795 C30.0908697,0.149943524 27.1318148,0.323042169 24.2346009,0.84375 C21.2910768,1.37349398 18.5519955,2.2375753 15.8798381,3.59807982 C13.2528614,4.93401732 10.8478351,6.68138178 8.76362011,8.76647214 C6.67850151,10.8515625 4.93113705,13.2526355 3.59548193,15.882436 C2.23469503,18.5545934 1.37004895,21.2945218 0.843975904,24.240305 C0.320472515,27.138366 0.146216114,30.0968562 0.0671498494,33.0276732 C0.0310052711,34.3729292 0.0155026355,35.7181852 0.00672063253,37.0631589 C1.12951807e-05,38.6617093 1.12951807e-05,40.2591303 1.12951807e-05,41.8605045 L1.12951807e-05,257.36634 C1.12951807e-05,258.967715 1.12951807e-05,260.56234 0.00672063253,262.163997 C0.0155026355,263.50897 0.0310052711,264.854226 0.0671498494,266.199482 C0.146216114,269.12773 0.320472515,272.08622 0.843975904,274.983434 C1.37004895,277.930346 2.23469503,280.669145 3.59548193,283.341585 C4.93113705,285.971386 6.67850151,288.375565 8.76362011,290.457549 C10.8478351,292.546028 13.2528614,294.29311 15.8798381,295.625659 C18.5519955,296.989834 21.2910768,297.854198 24.2346009,298.38366 C27.1318148,298.900979 30.0908697,299.077184 33.0247929,299.156532 C34.3700489,299.187029 35.715305,299.205102 37.0636954,299.211314 C38.6588291,299.223739 40.2596386,299.223739 41.8576242,299.223739 L425.540484,299.223739 C427.135646,299.223739 428.736483,299.223739 430.331306,299.211314 C431.676591,299.205102 433.021875,299.187029 434.373287,299.156532 C437.300998,299.077184 440.259488,298.900979 443.16379,298.38366 C446.10336,297.854198 448.843006,296.989834 451.515446,295.625659 C454.145247,294.29311 456.543213,292.546028 458.631721,290.457549 C460.713422,288.375565 462.460759,285.971386 463.799831,283.341585 C465.163695,280.669145 466.027494,277.930346 466.551026,274.983434 C467.07484,272.08622 467.244832,269.12773 467.324181,266.199482 C467.36089,264.854226 467.378991,263.50897 467.385203,262.163997 C467.3976,260.56234 467.3976,258.967743 467.3976,257.36634 L467.3976,41.8605045 C467.3976,40.2591303 467.3976,38.6617093 467.385203,37.0631589 C467.378991,35.7181852 467.36089,34.3729292 467.324181,33.0276732 C467.244804,30.0968562 467.07484,27.138366 466.551026,24.240305 C466.027523,21.2945218 465.163695,18.5545934 463.799831,15.882436 C462.460759,13.2526355 460.713422,10.8515625 458.631721,8.76647214 C456.543213,6.68138178 454.145247,4.93401732 451.515446,3.59807982 C448.843006,2.2375753 446.10336,1.37349398 443.16379,0.84375 C440.259516,0.323042169 437.301026,0.149943524 434.373287,0.0705948795 C433.021875,0.0338855422 431.676591,0.0189194277 430.331306,0.0093185241 C428.736483,0 427.135646,0 425.540484,0 L425.540484,0 Z"
    />
    <path
      fill="#FFF"
      d="M425.540484,9.97364458 L430.260429,9.98268072 C431.539044,9.99171687 432.817686,10.0055535 434.103389,10.0405685 C436.339863,10.1009977 438.956052,10.2221386 441.394682,10.659262 C443.514505,11.0410392 445.292338,11.6216114 446.998503,12.4902108 C448.682897,13.3461032 450.22613,14.4677146 451.573588,15.813253 C452.926186,17.1678276 454.049238,18.713573 454.916425,20.4166039 C455.780196,22.1094691 456.357097,23.8788592 456.736615,26.0142131 C457.172609,28.4262989 457.293185,31.0496047 457.35449,33.299887 C457.388912,34.5700301 457.405855,35.8401732 457.412095,37.1405309 C457.423956,38.7131024 457.423956,40.2848268 457.423956,41.8605045 L457.423956,257.36634 C457.423956,258.942018 457.423956,260.510919 457.411813,262.117093 C457.405855,263.386954 457.38894,264.657097 457.354207,265.929499 C457.293185,268.176393 457.172637,270.798287 456.731278,273.238893 C456.357097,275.34488 455.780506,277.114552 454.911935,278.815889 C454.047261,280.514684 452.925932,282.058735 451.579236,283.404838 C450.224125,284.76026 448.685975,285.878483 446.981561,286.742282 C445.288131,287.606645 443.513347,288.186681 441.41442,288.564477 C438.926402,289.007812 436.200593,289.1298 434.147694,289.185429 C432.85609,289.214514 431.570698,289.231994 430.253991,289.238234 C428.68478,289.250095 427.109977,289.250095 425.540512,289.250095 L41.8576242,289.250095 C41.8367282,289.250095 41.8163968,289.250095 41.7952184,289.250095 C40.2438253,289.250095 38.6893261,289.250095 37.109695,289.237952 C35.821762,289.231994 34.5366529,289.214797 33.294183,289.186559 C31.1944089,289.1298 28.4669051,289.008095 25.9991905,288.5673 C23.8822195,288.186653 22.107436,287.606645 20.391698,286.730986 C18.7033791,285.874812 17.1663592,284.757718 15.8106551,283.399755 C14.4653991,282.056758 13.3474586,280.517508 12.4830949,278.816171 C11.617884,277.116529 11.039006,275.341491 10.6583867,273.210373 C10.2184111,270.774567 10.0975527,268.163121 10.0371517,265.931476 C10.0026732,264.653709 9.98827184,263.376224 9.98008283,262.106081 L9.97387048,258.356363 L9.97387048,257.36634 L9.97387048,41.8605045 L9.97387048,40.8704819 L9.97980045,37.1286709 C9.98827184,35.8509036 10.0026732,34.5734187 10.0371517,33.2967809 C10.0975527,31.0628765 10.2184111,28.4503012 10.6620294,25.9941642 C11.0392884,23.8822477 11.617884,22.1072101 12.487613,20.3990964 C13.3451995,18.7107492 14.4651167,17.1695218 15.8174605,15.8174887 C17.1644108,14.4699736 18.7064571,13.3497741 20.4055346,12.4856928 C22.1029179,11.6213291 23.8810617,11.0410392 25.998061,10.6601092 C28.4372553,10.2218562 31.0551958,10.1009977 33.2972892,10.0402861 C34.5753389,10.0055535 35.8533886,9.99171687 37.1218373,9.9829631 L41.8576242,9.97364458 L425.540484,9.97364458"
    />
    <g fill="#000">
      <path
        d="M64.3701386 18.7514966C68.3721341 13.7458678 71.0878627 7.02478351 70.371607.156635919 64.5132486.44793863 57.3642463 4.02159262 53.225325 9.03114646 49.5090129 13.3210561 46.2197715 20.3235599 47.0772734 26.9037933 53.6535818 27.4742282 60.223819 23.6166698 64.3701386 18.7514966M70.2968894 28.1885919C60.7465035 27.6197101 52.6263416 33.608895 48.0655453 33.608895 43.5022358 33.608895 36.5181714 28.4752636 28.9643216 28.6136295 19.1325163 28.7580384 10.0097377 34.3170181 5.02051515 43.1584055-5.24146716 60.845529 2.31238262 87.0817206 12.2916183 101.486888 17.1377591 108.613582 22.9781865 116.460599 30.6738472 116.178727 37.9449504 115.893411 40.7949222 111.470557 49.6332599 111.470557 58.4651029 111.470557 61.032328 116.178727 68.7292313 116.036098 76.7111119 115.893383 81.7012098 108.905845 86.5472941 101.772204 92.1067256 93.6481457 94.3825633 85.8036992 94.5257015 85.3730704 94.3825351 85.2304405 79.13438 79.3808641 78.9929926 61.8407474 78.8490355 47.1541604 90.9645005 40.1684017 91.5347094 39.7351751 84.6929926 29.6162462 74.0029511 28.4752636 70.2968894 28.1885919"
        transform="translate(63.226 81.89)"
      />
      <path
        d="M40.5024334.459215539C61.2600389.459215539 75.7143122 14.7676399 75.7143122 35.5995958 75.7143122 56.5059305 60.9626085 70.8886771 39.9819233 70.8886771L16.9992802 70.8886771 16.9992802 107.437566.394319742 107.437566.394319742.459215539 40.5024334.459215539 40.5024334.459215539zM16.999252 56.95065L36.0523017 56.95065C50.509427 56.95065 58.7375426 49.1672539 58.7375426 35.6739463 58.7375426 22.1820789 50.509427 14.4716214 36.1266522 14.4716214L16.999252 14.4716214 16.999252 56.95065 16.999252 56.95065zM80.0528476 85.271452C80.0528476 71.6294151 90.5060291 63.2525984 109.041449 62.2144301L130.391063 60.9546222 130.391063 54.9501323C130.391063 46.2758571 124.533862 41.0864557 114.74992 41.0864557 105.480784 41.0864557 99.6979342 45.5337073 98.2908371 52.5034268L83.1673243 52.5034268C84.0567915 38.4166704 96.0657712 28.0378676 115.341929 28.0378676 134.246278 28.0378676 146.329608 38.0463014 146.329608 53.6888842L146.329608 107.437595 130.983072 107.437595 130.983072 94.6120864 130.614143 94.6120864C126.092541 103.286362 116.231396 108.771753 106.001295 108.771753 90.7290807 108.771753 80.0528476 99.2823895 80.0528476 85.271452zM130.391063 78.2287939L130.391063 72.075603 111.189256 73.2610604C101.625542 73.9288597 96.2145005 78.1544433 96.2145005 84.8267325 96.2145005 91.6463108 101.848621 96.0949742 110.448546 96.0949742 121.642437 96.0949742 130.391063 88.3845167 130.391063 78.2287939zM160.81819 136.128737L160.81819 123.154528C162.002208 123.450546 164.670553 123.450546 166.006151 123.450546 173.419179 123.450546 177.423122 120.337453 179.868388 112.331006 179.868388 112.182277 181.278337 107.586324 181.278337 107.511973L153.107705 29.4464049 170.453375 29.4464049 190.175664 92.9075589 190.470242 92.9075589 210.19256 29.4464049 227.09495 29.4464049 197.883269 111.514477C191.21386 130.420266 183.503375 136.499106 167.34175 136.499106 166.00618 136.499106 162.002236 136.350377 160.81819 136.128737z"
        transform="translate(63.226 81.89) translate(112.952 7.853)"
      />
    </g>
  </g>
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=window,sh=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r$=Symbol(),Up=new WeakMap;let n_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(sh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Up.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Up.set(e,t))}return t}toString(){return this.cssText}};const o_=o=>new n_(typeof o=="string"?o:o+"",void 0,r$),s_=(o,t)=>{sh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=is.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Ip=sh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return o_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ya;const Qs=window,Np=Qs.trustedTypes,r_=Np?Np.emptyScript:"",Dp=Qs.reactiveElementPolyfillSupport,yd={toAttribute(o,t){switch(t){case Boolean:o=o?r_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},a$=(o,t)=>t!==o&&(t==t||o==o),Ja={attribute:!0,type:String,converter:yd,reflect:!1,hasChanged:a$},fd="finalized";let On=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ja){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ja}static finalize(){if(this.hasOwnProperty(fd))return!1;this[fd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Ip(n))}else t!==void 0&&e.push(Ip(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return s_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ja){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:yd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:yd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||a$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};On[fd]=!0,On.elementProperties=new Map,On.elementStyles=[],On.shadowRootOptions={mode:"open"},Dp?.({ReactiveElement:On}),((Ya=Qs.reactiveElementVersions)!==null&&Ya!==void 0?Ya:Qs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qa;const Xs=window,Gi=Xs.trustedTypes,Op=Gi?Gi.createPolicy("lit-html",{createHTML:o=>o}):void 0,_d="$lit$",Vt=`lit$${(Math.random()+"").slice(9)}$`,l$="?"+Vt,a_=`<${l$}>`,si=document,tr=()=>si.createComment(""),Mo=o=>o===null||typeof o!="object"&&typeof o!="function",d$=Array.isArray,l_=o=>d$(o)||typeof o?.[Symbol.iterator]=="function",Xa=`[ 	
\f\r]`,Rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rp=/-->/g,Fp=/>/g,ve=RegExp(`>|${Xa}(?:([^\\s"'>=/]+)(${Xa}*=${Xa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lp=/'/g,Bp=/"/g,h$=/^(?:script|style|textarea|title)$/i,xo=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),zp=new WeakMap,De=si.createTreeWalker(si,129,null,!1);function c$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Op!==void 0?Op.createHTML(t):t}const d_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Rn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Rn?h[1]==="!--"?r=Rp:h[1]!==void 0?r=Fp:h[2]!==void 0?(h$.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=ve):h[3]!==void 0&&(r=ve):r===ve?h[0]===">"?(r=n??Rn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?ve:h[3]==='"'?Bp:Lp):r===Bp||r===Lp?r=ve:r===Rp||r===Fp?r=Rn:(r=ve,n=void 0);const p=r===ve&&o[d+1].startsWith("/>")?" ":"";s+=r===Rn?a+a_:c>=0?(i.push(l),a.slice(0,c)+_d+a.slice(c)+Vt+p):a+Vt+(c===-2?(i.push(void 0),d):p)}return[c$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ad=class u${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=d_(t,e);if(this.el=u$.createElement(l,i),De.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=De.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(_d)||u.startsWith(Vt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+_d).split(Vt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?c_:m[1]==="?"?p_:m[1]==="@"?v_:kr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(h$.test(n.tagName)){const c=n.textContent.split(Vt),u=c.length-1;if(u>0){n.textContent=Gi?Gi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],tr()),De.nextNode(),a.push({type:2,index:++s});n.append(c[u],tr())}}}else if(n.nodeType===8)if(n.data===l$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Vt,c+1))!==-1;)a.push({type:7,index:s}),c+=Vt.length-1}s++}}static createElement(t,e){const i=si.createElement("template");return i.innerHTML=t,i}};function Yi(o,t,e=o,i){var n,s,r,d;if(t===xo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Mo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Yi(o,a._$AS(o,t.values),a,i)),t}let h_=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:si).importNode(i,!0);De.currentNode=s;let r=De.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new p$(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new m_(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=De.nextNode(),d++)}return De.currentNode=si,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},p$=class v${constructor(t,e,i,n){var s;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Yi(this,t,e),Mo(t)?t===J||t==null||t===""?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==xo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):l_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&Mo(this._$AH)?this._$AA.nextSibling.data=t:this.$(si.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ad.createElement(c$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new h_(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=zp.get(t.strings);return e===void 0&&zp.set(t.strings,e=new Ad(t)),e}T(t){d$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new v$(this.k(tr()),this.k(tr()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},kr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Yi(this,t,e,0),r=!Mo(t)||t!==this._$AH&&t!==xo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Yi(this,d[i+a],e,a),l===xo&&(l=this._$AH[a]),r||(r=!Mo(l)||l!==this._$AH[a]),l===J?t=J:t!==J&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},c_=class extends kr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}};const u_=Gi?Gi.emptyScript:"";let p_=class extends kr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==J?this.element.setAttribute(this.name,u_):this.element.removeAttribute(this.name)}},v_=class extends kr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Yi(this,t,e,0))!==null&&i!==void 0?i:J)===xo)return;const n=this._$AH,s=t===J&&n!==J||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==J&&(n===J||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},m_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Yi(this,t)}};const jp=Xs.litHtmlPolyfillSupport;jp?.(Ad,p$),((Qa=Xs.litHtmlVersions)!==null&&Qa!==void 0?Qa:Xs.litHtmlVersions=[]).push("2.8.0");const $_=y`
<svg viewBox="0 0 469 300" xmlns="http://www.w3.org/2000/svg" aria-labelledby="googlePayTitleID googlePayDescID">
  <title id="googlePayTitleID">GooglePay icon</title>
  <desc id="googlePayDescID">The GooglePay logo</desc>
  <g fill="none">
    <path
      d="m426.541557.09900471h-384.5859537c-1.6020287 0-3.2068878 0-4.8060861.00848612-1.3501196.01131483-2.6974088.02545836-4.0475283.06223154-2.9408266.07920377-5.9071271.25175484-8.811158.77506548-2.9493177.52896804-5.6948441 1.39455212-8.3724397 2.75798848-2.6351391 1.33797799-5.043843 3.08894709-7.13553773 5.1765322-2.08886428 2.09041387-3.84090626 4.49481397-5.17970411 7.13116817-1.36427179 2.6759559-2.23038625 5.4198009-2.75684798 8.3701415-.52646173 2.9050811-.69911853 5.8667364-.77837083 8.8029334-.03679572 1.3492928-.05377835 2.695757-.06226967 4.042221-.00611375 1.6010478-.00611375 3.2020954-.00611375 4.8059718v215.8811936c0 1.603877 0 3.202097.00611375 4.805973.00849132 1.346464.02547395 2.695757.06226967 4.042221.0792523 2.933368.2519091 5.897852.77837083 8.800105.52646173 2.95034 1.39257619 5.694185 2.75684798 8.372969 1.33879785 2.633526 3.09083983 5.040754 5.17970411 7.12834 2.09169473 2.090414 4.50039863 3.841383 7.13553773 5.176532 2.6775956 1.366265 5.423122 2.23185 8.3724397 2.763646 2.9040309.517653 5.8703314.693033 8.811158.772236 1.3501195.031116 2.6974087.050918 4.0475283.056575 1.5991983.011315 3.2040574.011315 4.8060861.011315h384.5859537c1.599199 0 3.204058 0 4.803256-.011315 1.347289-.005657 2.694578-.025459 4.050359-.056575 2.935166-.079203 5.901466-.254583 8.811157-.772236 2.946488-.531796 5.692014-1.397381 8.37244-2.763646 2.635139-1.335149 5.038182-3.086118 7.132707-5.176532 2.086035-2.087586 3.838077-4.494814 5.179705-7.12834 1.367102-2.678784 2.233216-5.422629 2.756848-8.372969.526462-2.902253.696288-5.866737.77554-8.800105.036796-1.346464.053778-2.695757.06227-4.042221.011322-1.603876.011322-3.202096.011322-4.805973v-215.8811936c0-1.6038764 0-3.204924-.011322-4.8059718-.008492-1.346464-.025474-2.6929282-.06227-4.042221-.079252-2.936197-.249078-5.8978523-.77554-8.8029334-.523632-2.9503406-1.389746-5.6941856-2.756848-8.3701415-1.341628-2.6363542-3.09367-5.0407543-5.179705-7.13116817-2.094525-2.08758511-4.497568-3.83855421-7.132707-5.1765322-2.680426-1.36343636-5.425952-2.22902044-8.37244-2.75798848-2.909691-.52331064-5.875991-.69586171-8.811157-.77506548-1.355781-.03677318-2.70307-.05091671-4.050359-.06223154-1.599198-.00848612-3.204057-.00848612-4.803256-.00848612"
      fill="#3c4043"
    />
    <path
      d="m426.541557 10.0899948 4.732495.0084861c1.279359.0084861 2.561548.0226296 3.849398.0594028 2.241708.0594028 4.865525.1810372 7.311024.6194866 2.12283.3818754 3.906007.9645889 5.615592 1.8330016 1.689772.857098 3.235192 1.9829231 4.585313 3.3293871 1.35578 1.357779 2.482295 2.9050813 3.351239 4.610791.866115 1.6972237 1.443525 3.4679938 1.825633 5.6064956.435888 2.4185437.557598 5.0464117.617037 7.3008905.036796 1.270089.053778 2.5430068.059439 3.8470403.011322 1.5755893.011322 3.14835.011322 4.726768v215.8811936c0 1.578418 0 3.151179-.011322 4.757884-.005661 1.272918-.022643 2.545836-.059439 3.821582-.059439 2.248821-.181149 4.87669-.622697 7.320692-.376448 2.110214-.953858 3.880984-1.825633 5.586695-.866115 1.70288-1.989799 3.247354-3.339919 4.596647-1.358611 1.357779-2.89837 2.477946-4.607955 3.343531-1.698263.865584-3.47578 1.448298-5.578796 1.824515-2.496448.444107-5.227821.56857-7.285551.622315-1.293511.031116-2.581361.048088-3.903177.053746-1.570893.011314-3.150279.011314-4.724003.011314h-384.5859537c-.0198131 0-.0396261 0-.0622696 0-1.5539113 0-3.1134834 0-4.6956991-.011314-1.2906803-.005658-2.5785302-.02263-3.8239236-.050917-2.1058469-.056574-4.8400513-.181037-7.3138554-.622315-2.1228296-.379046-3.9003455-.96176-5.6212527-1.838659-1.6926027-.857098-3.2323618-1.977266-4.5909726-3.337874-1.3472892-1.343635-2.4681433-2.88528-3.3342577-4.590989-.8689448-1.702882-1.449185-3.479309-1.8312943-5.614982-.4387181-2.441174-.560427-5.054898-.6226967-7.292405-.0339652-1.278574-.0481174-2.559979-.0566087-3.830068l-.00566093-3.756521v-217.8641178l.00566093-3.7480355c.0084913-1.2814039.0226435-2.5599791.0566087-3.8385543.0622697-2.2403353.1839786-4.8568884.6283576-7.3178627.3764484-2.1130435.9566886-3.8922997 1.8284639-5.6036669.8604536-1.6915663 1.984138-3.2360398 3.337088-4.5881613 1.3501196-1.3521215 2.8983699-2.4722892 4.599464-3.3378733 1.7010941-.8684127 3.4842709-1.4482975 5.6071005-1.8301729 2.4454996-.4384494 5.0693169-.5600838 7.3166859-.6194866 1.2793586-.0367732 2.5615477-.0509167 3.8324149-.0594028l4.7466469-.0084861z"
      fill="#fffffe"
    />
    <g transform="translate(53.778 84.906)">
      <g fill="#3c4043" transform="translate(158.35 8.41)">
        <path
          d="m13.4306616 63.5773585v42.7212935h-13.34775628v-105.45768165h35.40057118c8.5392479-.16819407 16.8297798 3.1115903 22.8818681 9.16657685 12.1041765 11.4371967 12.8503244 30.6954178 1.4922957 43.0576819-.4974319.5045823-.9948639 1.0091644-1.4922957 1.5137466-6.217899 5.9708896-13.8451883 8.9983828-22.8818681 8.9983828zm0-49.7854447v36.8345013h22.3844362c4.9743191.1681941 9.7828276-1.8501348 13.1819457-5.4663073 6.9640468-7.316442 6.7982361-19.090027-.4145266-26.1541779-3.3991181-3.3638814-7.9589106-5.2140161-12.7674191-5.2140161zm85.3095733 17.9967654c9.8657331 0 17.6588331 2.6911052 23.3793001 7.9892184 5.720466 5.2981131 8.539248 12.6986522 8.539248 22.0334232v44.4873312h-12.767419v-10.0075469h-.580338c-5.554657 8.2415099-12.850324 12.3622639-22.0528145 12.3622639-7.7931 0-14.4255256-2.354717-19.6485607-7.064151-5.1401297-4.3730455-8.0418158-10.8485172-7.8760052-17.660377 0-7.4846361 2.8187808-13.3714286 8.3734372-17.8285714 5.5546563-4.4571429 13.0161351-6.6436658 22.3015308-6.6436658 7.9589104 0 14.4255254 1.5137466 19.5656554 4.3730458v-3.1115903c0-4.6253369-1.989728-8.9983828-5.471751-12.025876-3.564929-3.1956874-8.124721-4.9617251-12.8503246-4.9617251-7.4614787 0-13.3477564 3.1956874-17.658833 9.587062l-11.7725553-7.4846362c6.3008043-9.3347708 15.834916-14.0442048 28.5194298-14.0442048zm-17.2443063 52.3924529c0 3.5320754 1.6581063 6.8118598 4.3939818 8.8301887 2.9845915 2.3547169 6.6324255 3.6161724 10.3631649 3.5320754 5.6375617 0 11.0264077-2.2706199 15.0058627-6.3072776 4.393981-4.2048518 6.632426-9.1665768 6.632426-14.8851752-4.145267-3.3638815-9.948639-5.0458221-17.410117-4.961725-5.3888462 0-9.9486387 1.3455525-13.5964727 3.9525605-3.5649288 2.6070082-5.3888457 5.8867925-5.3888457 9.8393532z"
        />
        <path
          d="m203.947 34.143-44.603 103.86h-13.762l16.581-36.33-29.266-67.53h14.509l21.141 51.804h.248l20.644-51.804z"
        />
      </g>
      <path
        d="m117.808458 62.7363881c0-4.1207546-.331621-8.2415094-.994864-12.278167h-56.2927112v23.2948786h32.2501691c-1.3264851 7.4846362-5.6375617 14.2123989-11.938366 18.4172507v15.1374666h19.2340341c11.275123-10.5121296 17.741738-26.0700811 17.741738-44.5714289z"
        fill="#4285f4"
      />
      <path
        d="m60.5208828 121.940701c16.0836319 0 29.6801042-5.382211 39.5458372-14.632884l-19.2340341-15.1374666c-5.3888456 3.7002695-12.2699871 5.8026954-20.3118031 5.8026954-15.5862 0-28.7681456-10.6803234-33.4937488-24.9768194h-19.81437125v15.6420486c10.11444885 20.435579 30.75787325 33.302426 53.30812005 33.302426z"
        fill="#34a853"
      />
      <path
        d="m27.027134 72.9962264c-2.4871596-7.4846361-2.4871596-15.6420485 0-23.2107817v-15.5579515h-19.81437125c-8.53924786 17.0716981-8.53924786 37.2549866 0 54.3266847z"
        fill="#fbbc04"
      />
      <path
        d="m60.5208828 24.8086253c8.5392479-.168194 16.7468744 3.1115903 22.881868 9.0824798l17.0784962-17.3239891c-10.8605972-10.25983837-25.120312-15.89433972-39.9603642-15.72614565-22.5502468 0-43.1936712 12.95094345-53.30812005 33.38652285l19.81437125 15.6420486c4.7256032-14.380593 17.9075488-25.0609165 33.4937488-25.0609165z"
        fill="#ea4335"
      />
    </g>
  </g>
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=window,rh=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m$=Symbol(),Vp=new WeakMap;let g_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==m$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Vp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vp.set(e,t))}return t}toString(){return this.cssText}};const y_=o=>new g_(typeof o=="string"?o:o+"",void 0,m$),f_=(o,t)=>{rh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ns.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},qp=rh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return y_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tl;const er=window,Wp=er.trustedTypes,__=Wp?Wp.emptyScript:"",Kp=er.reactiveElementPolyfillSupport,bd={toAttribute(o,t){switch(t){case Boolean:o=o?__:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},$$=(o,t)=>t!==o&&(t==t||o==o),el={attribute:!0,type:String,converter:bd,reflect:!1,hasChanged:$$},Sd="finalized";let Fn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=el){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||el}static finalize(){if(this.hasOwnProperty(Sd))return!1;this[Sd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(qp(n))}else t!==void 0&&e.push(qp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return f_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=el){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:bd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:bd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Fn[Sd]=!0,Fn.elementProperties=new Map,Fn.elementStyles=[],Fn.shadowRootOptions={mode:"open"},Kp?.({ReactiveElement:Fn}),((tl=er.reactiveElementVersions)!==null&&tl!==void 0?tl:er.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var il;const ir=window,Ji=ir.trustedTypes,Zp=Ji?Ji.createPolicy("lit-html",{createHTML:o=>o}):void 0,Cd="$lit$",qt=`lit$${(Math.random()+"").slice(9)}$`,g$="?"+qt,A_=`<${g$}>`,ri=document,nr=()=>ri.createComment(""),To=o=>o===null||typeof o!="object"&&typeof o!="function",y$=Array.isArray,b_=o=>y$(o)||typeof o?.[Symbol.iterator]=="function",nl=`[ 	
\f\r]`,Ln=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gp=/-->/g,Yp=/>/g,me=RegExp(`>|${nl}(?:([^\\s"'>=/]+)(${nl}*=${nl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Jp=/'/g,Qp=/"/g,f$=/^(?:script|style|textarea|title)$/i,ko=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),Xp=new WeakMap,Oe=ri.createTreeWalker(ri,129,null,!1);function _$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zp!==void 0?Zp.createHTML(t):t}const S_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Ln;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===Ln?h[1]==="!--"?r=Gp:h[1]!==void 0?r=Yp:h[2]!==void 0?(f$.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=me):h[3]!==void 0&&(r=me):r===me?h[0]===">"?(r=n??Ln,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?me:h[3]==='"'?Qp:Jp):r===Qp||r===Jp?r=me:r===Gp||r===Yp?r=Ln:(r=me,n=void 0);const p=r===me&&o[d+1].startsWith("/>")?" ":"";s+=r===Ln?a+A_:c>=0?(i.push(l),a.slice(0,c)+Cd+a.slice(c)+qt+p):a+qt+(c===-2?(i.push(void 0),d):p)}return[_$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ed=class A${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=S_(t,e);if(this.el=A$.createElement(l,i),Oe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Oe.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Cd)||u.startsWith(qt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Cd).split(qt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?E_:m[1]==="?"?P_:m[1]==="@"?M_:Hr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(f$.test(n.tagName)){const c=n.textContent.split(qt),u=c.length-1;if(u>0){n.textContent=Ji?Ji.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],nr()),Oe.nextNode(),a.push({type:2,index:++s});n.append(c[u],nr())}}}else if(n.nodeType===8)if(n.data===g$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(qt,c+1))!==-1;)a.push({type:7,index:s}),c+=qt.length-1}s++}}static createElement(t,e){const i=ri.createElement("template");return i.innerHTML=t,i}};function Qi(o,t,e=o,i){var n,s,r,d;if(t===ko)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=To(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Qi(o,a._$AS(o,t.values),a,i)),t}let C_=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ri).importNode(i,!0);Oe.currentNode=s;let r=Oe.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new b$(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new x_(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Oe.nextNode(),d++)}return Oe.currentNode=ri,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},b$=class S${constructor(t,e,i,n){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Qi(this,t,e),To(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==ko&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):b_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Q&&To(this._$AH)?this._$AA.nextSibling.data=t:this.$(ri.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ed.createElement(_$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new C_(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Xp.get(t.strings);return e===void 0&&Xp.set(t.strings,e=new Ed(t)),e}T(t){y$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new S$(this.k(nr()),this.k(nr()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Hr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Qi(this,t,e,0),r=!To(t)||t!==this._$AH&&t!==ko,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Qi(this,d[i+a],e,a),l===ko&&(l=this._$AH[a]),r||(r=!To(l)||l!==this._$AH[a]),l===Q?t=Q:t!==Q&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},E_=class extends Hr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}};const w_=Ji?Ji.emptyScript:"";let P_=class extends Hr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Q?this.element.setAttribute(this.name,w_):this.element.removeAttribute(this.name)}},M_=class extends Hr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Qi(this,t,e,0))!==null&&i!==void 0?i:Q)===ko)return;const n=this._$AH,s=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Q&&(n===Q||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},x_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Qi(this,t)}};const t0=ir.litHtmlPolyfillSupport;t0?.(Ed,b$),((il=ir.litHtmlVersions)!==null&&il!==void 0?il:ir.litHtmlVersions=[]).push("2.8.0");const T_=y`
<svg viewBox="0 0 468 300" xmlns="http://www.w3.org/2000/svg" aria-labelledby="payPalTitleID payPalDescID">
  <title id="payPalTitleID">PayPal icon</title>
  <desc id="payPalDescID">The PayPal logo</desc>
  <g fill="none" fill-rule="nonzero">
    <g>
      <path
        d="m426.088936 0h-384.1773743c-1.6000453 0-3.202918 0-4.8001076.0093427-1.3501283.00962581-2.6971182.02463075-4.044108.06143532-2.9377047.0795545-5.9005735.2531022-8.8015214.77516088-2.9473179.53111826-5.6899295 1.39744123-8.365531 2.76147524-2.6303624 1.33940326-5.0384885 3.09130081-7.1253898 5.18180042-2.08780603 2.09049964-3.8374226 4.49780164-5.1747992 7.13442444-1.36254076 2.6790896-2.22830126 5.4261262-2.75505234 8.3795514-.52417811 2.9055793-.6986591 5.8717446-.77782727 8.8101648-.03619117 1.348746-.05171378 2.697492-.06050711 4.0459548-.00671798 1.6026975-.00671798 3.2042625-.00671798 4.8097911v216.0649119c0 1.605529 0 3.204291.00671798 4.810103.00879333 1.348462.02431594 2.697208.06050711 4.045954.07916817 2.935844.25364916 5.90201.77782727 8.80674.52675108 2.954557 1.39251158 5.700461 2.75505234 8.379834 1.3373766 2.636623 3.08699317 5.047039 5.1747992 7.134425 2.0869013 2.093897 4.4950274 3.845511 7.1253898 5.181517 2.6756015 1.367714 5.4182131 2.23432 8.365531 2.765156 2.9009479.518661 5.8638167.695323 8.8015214.774877 1.3469898.030576 2.6939797.048696 4.044108.054924 1.5971896.012457 3.2000623.012457 4.8001076.012457h384.1773743c1.597218 0 3.200119 0 4.796997-.012457 1.347018-.006228 2.694037-.024348 4.04719-.054924 2.931485-.079554 5.893788-.256216 8.801833-.774877 2.943359-.530836 5.686536-1.397442 8.36242-2.765156 2.63319-1.336006 5.034248-3.08762 7.125447-5.181517 2.084385-2.087386 3.833973-4.497802 5.174771-7.134425 1.365622-2.679373 2.230535-5.425277 2.754741-8.379834.524489-2.90473.694701-5.870896.774152-8.80674.036756-1.348746.05488-2.697492.061101-4.045954.012412-1.605812.012412-3.204546.012412-4.810103v-216.0649119c0-1.6055286 0-3.2070936-.012412-4.8097911-.006221-1.3484628-.024345-2.6972088-.061101-4.0459548-.079479-2.9384202-.249663-5.9045855-.774152-8.8101648-.524178-2.9534252-1.389119-5.7004618-2.754741-8.3795514-1.340798-2.6366228-3.090386-5.0439248-5.174771-7.13442444-2.091199-2.09049961-4.492257-3.84239716-7.125447-5.18180042-2.675884-1.36403401-5.419061-2.23035698-8.36242-2.76147524-2.908017-.52205868-5.87032-.69560638-8.801833-.77516088-1.353153-.03680457-2.700172-.05180951-4.04719-.06143532-1.596878-.0093427-3.199779-.0093427-4.796997-.0093427z"
        fill="#333"
      />
      <path
        d="m426.077344 10 4.725746.0090596c1.280186.0090595 2.5604.022932 3.847682.0580377 2.239223.0605858 4.858628.1820405 7.300254.6202965 2.122429.3827662 3.902447.9648426 5.610709 1.8356924 1.686464.8581098 3.231593 1.9826271 4.580707 3.3316515 1.354261 1.358084 2.478692 2.9078342 3.346946 4.6152773.864832 1.6972511 1.442442 3.4712253 1.822427 5.6121115.43653 2.418335.557254 5.0484372.618634 7.3045496.034464 1.2734338.051428 2.5468676.057676 3.8505942.011875 1.5766458.011875 3.1524422.011875 4.7322022v216.0641685c0 1.57976 0 3.152725-.012158 4.763061-.005965 1.273151-.022901 2.546585-.057676 3.822284-.061097 2.252715-.181793 4.881401-.623695 7.328331-.374641 2.111442-.95194 3.885699-1.821579 5.591444-.865737 1.703196-1.988444 3.251248-3.336795 4.600839-1.356777 1.358933-2.896816 2.480053-4.603326 3.34609-1.695511.866603-3.472476 1.448141-5.573982 1.826916-2.491076.444484-5.220235.566788-7.275657.622561-1.293191.02916-2.580163.046685-3.898488.052942-1.57114.011891-3.147878.011891-4.719272.011891h-384.1544332c-.0209218 0-.0412781 0-.0624826 0-1.5532997 0-3.1097094 0-4.6912818-.012174-1.2895158-.005974-2.5762044-.023215-3.8202013-.051527-2.1023547-.056905-4.8332106-.178926-7.303958-.620862-2.1195728-.381634-3.8965375-.963144-5.6143841-1.841072-1.6903938-.858393-3.2293027-1.97838-4.586673-3.339861-1.3469093-1.346477-2.4662238-2.889716-3.3316498-4.59546-.8662742-1.704046-1.4458636-3.483682-1.8269507-5.620322-.4405163-2.442116-.5615233-5.060328-.6219985-7.297755-.0345209-1.281077-.0489399-2.561872-.057139-3.835306l-.00622-3.759432v-.992588-216.0641685-.9925876l.0059373-3.7515053c.0084818-1.2810777.0229008-2.5618724.0574217-3.8418177.0604752-2.239692.1814822-4.8590359.6256456-7.3215363.3777227-2.117388.9570294-3.8970244 1.8278273-5.6095635.8586405-1.6927213 1.9799341-3.2379418 3.3339398-4.5934777 1.3486057-1.3510062 2.8925472-2.474108 4.5937129-3.340428 1.6994694-.8666031 3.4797986-1.4483964 5.5993996-1.8303133 2.442192-.4393884 5.06335-.56056 7.3081989-.6214289 1.2796204-.0348226 2.5592408-.0486951 3.8292485-.0574715l4.7416072-.0093427z"
        fill="#fff"
      />
    </g>
    <g transform="translate(23 94)">
      <g fill="#238ec2">
        <path
          d="m400.83873 2.69525159-13.453417 85.59022681c-.260388 1.6582649 1.02176 3.1566421 2.69982 3.1566421h13.529554c2.241475 0 4.149469-1.6308556 4.498177-3.8449211l13.26612-84.05073558c.261911-1.65978771-1.020237-3.1596876-2.69982-3.1596876h-15.140614c-1.346103 0-2.491204.97912247-2.69982 2.30847537"
        />
        <path
          d="m360.463252 61.2598709c-1.515127 8.9689446-8.635464 14.9898625-17.715569 14.9898625-4.552995 0-8.196915-1.4648768-10.540413-4.2377882-2.32218-2.7485476-3.196233-6.6635147-2.459227-11.0246449 1.413104-8.8882393 8.647647-15.1025454 17.590704-15.1025454 4.457063 0 8.075096 1.4770588 10.464277 4.2758568 2.404408 2.8185936 3.348507 6.7609701 2.660228 11.0992592zm21.875698-30.5507529h-15.696415c-1.34458 0-2.489681.9775997-2.698297 2.3069526l-.691324 4.3885396-1.096374-1.5897416c-3.40028-4.9352036-10.975917-6.5828094-18.540894-6.5828094-17.340975 0-32.1542 13.1412549-35.038271 31.5709894-1.4999 9.195833.630415 17.9820486 5.84428 24.1156494 4.789021 5.6341417 11.624605 7.9806856 19.768224 7.9806856 13.97724 0 21.731037-8.9796037 21.731037-8.9796037l-.701984 4.362653c-.261911 1.6582649 1.020237 3.1596876 2.69982 3.1596876h14.135605c2.239952 0 4.147946-1.6293329 4.498177-3.8433983l8.484713-53.7329621c.261911-1.658265-1.020237-3.1566421-2.698297-3.1566421z"
        />
        <path
          d="m288.146759 31.085235c-1.792266 11.7662198-10.777961 11.7662198-19.469767 11.7662198h-4.945863l3.468805-21.9685846c.210138-1.3278301 1.355239-2.3054299 2.699819-2.3054299h2.265839c5.917372 0 11.505831 0 14.386857 3.3698259 1.723743 2.0176318 2.246043 5.0067724 1.59431 9.1379688zm-3.782489-30.69845878h-32.780046c-2.241474 0-4.149469 1.63085562-4.498177 3.84492105l-13.25546 84.05225833c-.261911 1.658265 1.020236 3.1581649 2.698297 3.1581649h16.818675c1.568423 0 2.905389-1.1420558 3.149028-2.6906834l3.759647-23.8293741c.348708-2.2140654 2.256703-3.844921 4.498177-3.844921h10.372912c21.590945 0 34.051535-10.4490488 37.308678-31.1598493 1.466399-9.0572636.059387-16.1745551-4.181447-21.15696366-4.662633-5.47729942-12.925026-8.37355282-23.890284-8.37355282z"
        />
      </g>
      <path
        d="m232.141867 30.709118h-15.777119c-1.509037 0-2.920618.7491886-3.767262 1.9963134l-21.763014 32.0521756-9.223243-30.8004824c-.577118-1.9262674-2.351112-3.2480066-4.362653-3.2480066h-15.509117c-1.872971 0-3.190142 1.8425166-2.587137 3.6149871l17.372952 50.9905056-16.340533 23.0558213c-1.282148 1.809017.012182 4.312403 2.229293 4.312403h15.761892c1.493809 0 2.893208-.732439 3.742897-1.959768l52.469087-75.7243876c1.254739-1.8120618-.041114-4.2895614-2.246043-4.2895614"
        fill="#253667"
      />
      <path
        d="m126.667688 61.2598709c-1.51665 8.9689446-8.635464 14.9898625-17.717091 14.9898625-4.551473 0-8.195392-1.4648768-10.5388909-4.2377882-2.3221801-2.7485476-3.1962334-6.6635147-2.4592267-11.0246449 1.4131036-8.8882393 8.6461236-15.1025454 17.5891816-15.1025454 4.457063 0 8.076618 1.4770588 10.465799 4.2758568 2.404408 2.8185936 3.348507 6.7609701 2.660228 11.0992592zm21.874175-30.5507529h-15.694892c-1.346103 0-2.491204.9775997-2.699819 2.3069526l-.689802 4.3885396-1.097896-1.5897416c-3.398758-4.9352036-10.974395-6.5828094-18.539372-6.5828094-17.3409749 0-32.1541994 13.1412549-35.0382709 31.5709894-1.4998999 9.195833.6304148 17.9820486 5.8427572 24.1156494 4.7905433 5.6341417 11.6261277 7.9806856 19.7697467 7.9806856 13.97724 0 21.729514-8.9796037 21.729514-8.9796037l-.700461 4.362653c-.261911 1.6582649 1.020237 3.1596876 2.69982 3.1596876h14.134082c2.241475 0 4.149469-1.6293329 4.498177-3.8433983l8.486236-53.7329621c.261911-1.658265-1.020237-3.1566421-2.69982-3.1566421z"
        fill="#253667"
      />
      <path
        d="m54.3511949 31.085235c-1.7922661 11.7662198-10.7794836 11.7662198-19.4697665 11.7662198h-4.9458629l3.4688041-21.9685846c.2101382-1.3278301 1.3537167-2.3054299 2.698297-2.3054299h2.2673614c5.9158488 0 11.5058311 0 14.3868571 3.3698259 1.7237428 2.0176318 2.246043 5.0067724 1.5943098 9.1379688zm-3.7840114-30.69845878h-32.7800457c-2.2399521 0-4.1494693 1.63085562-4.498177 3.84492105l-13.2554605 84.05225833c-.26038871 1.658265 1.02023648 3.1581649 2.69981982 3.1581649h15.65073208c2.2414748 0 4.1494693-1.6308556 4.498177-3.8449211l3.5769186-22.6751364c.3502304-2.2140654 2.2582249-3.844921 4.4996997-3.844921h10.371389c21.5924676 0 34.0530573-10.4490488 37.3102003-31.1598493 1.4648769-9.0572636.0593869-16.1745551-4.1829696-21.15696366-4.6611102-5.47729942-12.9235029-8.37355282-23.8902837-8.37355282z"
        fill="#253667"
      />
    </g>
  </g>
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=window,ah=os.ShadowRoot&&(os.ShadyCSS===void 0||os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C$=Symbol(),e0=new WeakMap;let k_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==C$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ah&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=e0.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&e0.set(e,t))}return t}toString(){return this.cssText}};const H_=o=>new k_(typeof o=="string"?o:o+"",void 0,C$),U_=(o,t)=>{ah?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=os.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},i0=ah?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return H_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ol;const or=window,n0=or.trustedTypes,I_=n0?n0.emptyScript:"",o0=or.reactiveElementPolyfillSupport,wd={toAttribute(o,t){switch(t){case Boolean:o=o?I_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},E$=(o,t)=>t!==o&&(t==t||o==o),sl={attribute:!0,type:String,converter:wd,reflect:!1,hasChanged:E$},Pd="finalized";let Bn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=sl){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||sl}static finalize(){if(this.hasOwnProperty(Pd))return!1;this[Pd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(i0(n))}else t!==void 0&&e.push(i0(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return U_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=sl){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:wd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:wd;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||E$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Bn[Pd]=!0,Bn.elementProperties=new Map,Bn.elementStyles=[],Bn.shadowRootOptions={mode:"open"},o0?.({ReactiveElement:Bn}),((ol=or.reactiveElementVersions)!==null&&ol!==void 0?ol:or.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rl;const sr=window,Xi=sr.trustedTypes,s0=Xi?Xi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Md="$lit$",Wt=`lit$${(Math.random()+"").slice(9)}$`,w$="?"+Wt,N_=`<${w$}>`,ai=document,rr=()=>ai.createComment(""),Ho=o=>o===null||typeof o!="object"&&typeof o!="function",P$=Array.isArray,D_=o=>P$(o)||typeof o?.[Symbol.iterator]=="function",al=`[ 	
\f\r]`,zn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,r0=/-->/g,a0=/>/g,$e=RegExp(`>|${al}(?:([^\\s"'>=/]+)(${al}*=${al}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),l0=/'/g,d0=/"/g,M$=/^(?:script|style|textarea|title)$/i,Uo=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),h0=new WeakMap,Re=ai.createTreeWalker(ai,129,null,!1);function x$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return s0!==void 0?s0.createHTML(t):t}const O_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=zn;for(let d=0;d<e;d++){const a=o[d];let l,h,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,h=r.exec(a),h!==null);)u=r.lastIndex,r===zn?h[1]==="!--"?r=r0:h[1]!==void 0?r=a0:h[2]!==void 0?(M$.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=$e):h[3]!==void 0&&(r=$e):r===$e?h[0]===">"?(r=n??zn,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,l=h[1],r=h[3]===void 0?$e:h[3]==='"'?d0:l0):r===d0||r===l0?r=$e:r===r0||r===a0?r=zn:(r=$e,n=void 0);const p=r===$e&&o[d+1].startsWith("/>")?" ":"";s+=r===zn?a+N_:c>=0?(i.push(l),a.slice(0,c)+Md+a.slice(c)+Wt+p):a+Wt+(c===-2?(i.push(void 0),d):p)}return[x$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class Io{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const d=t.length-1,a=this.parts,[l,h]=O_(t,e);if(this.el=Io.createElement(l,i),Re.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Re.nextNode())!==null&&a.length<d;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Md)||u.startsWith(Wt)){const p=h[r++];if(c.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Md).split(Wt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?F_:m[1]==="?"?B_:m[1]==="@"?z_:Ir})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(M$.test(n.tagName)){const c=n.textContent.split(Wt),u=c.length-1;if(u>0){n.textContent=Xi?Xi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],rr()),Re.nextNode(),a.push({type:2,index:++s});n.append(c[u],rr())}}}else if(n.nodeType===8)if(n.data===w$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Wt,c+1))!==-1;)a.push({type:7,index:s}),c+=Wt.length-1}s++}}static createElement(t,e){const i=ai.createElement("template");return i.innerHTML=t,i}}function tn(o,t,e=o,i){var n,s,r,d;if(t===Uo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Ho(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=tn(o,a._$AS(o,t.values),a,i)),t}class R_{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ai).importNode(i,!0);Re.currentNode=s;let r=Re.nextNode(),d=0,a=0,l=n[0];for(;l!==void 0;){if(d===l.index){let h;l.type===2?h=new Ur(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new j_(r,this,t)),this._$AV.push(h),l=n[++a]}d!==l?.index&&(r=Re.nextNode(),d++)}return Re.currentNode=ai,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Ur{constructor(t,e,i,n){var s;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=tn(this,t,e),Ho(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==Uo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):D_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&Ho(this._$AH)?this._$AA.nextSibling.data=t:this.$(ai.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Io.createElement(x$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new R_(s,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=h0.get(t.strings);return e===void 0&&h0.set(t.strings,e=new Io(t)),e}T(t){P$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Ur(this.k(rr()),this.k(rr()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Ir{constructor(t,e,i,n,s){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=tn(this,t,e,0),r=!Ho(t)||t!==this._$AH&&t!==Uo,r&&(this._$AH=t);else{const d=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=tn(this,d[i+a],e,a),l===Uo&&(l=this._$AH[a]),r||(r=!Ho(l)||l!==this._$AH[a]),l===X?t=X:t!==X&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class F_ extends Ir{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}}const L_=Xi?Xi.emptyScript:"";class B_ extends Ir{constructor(){super(...arguments),this.type=4}j(t){t&&t!==X?this.element.setAttribute(this.name,L_):this.element.removeAttribute(this.name)}}class z_ extends Ir{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=tn(this,t,e,0))!==null&&i!==void 0?i:X)===Uo)return;const n=this._$AH,s=t===X&&n!==X||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==X&&(n===X||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class j_{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){tn(this,t)}}const c0=sr.litHtmlPolyfillSupport;c0?.(Io,Ur),((rl=sr.litHtmlVersions)!==null&&rl!==void 0?rl:sr.litHtmlVersions=[]).push("2.8.0");const V_=y`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 449 300" aria-labelledby="venmoTitleID venmoDescID">
  <title id="venmoTitleID">Venmo icon</title>
  <desc id="venmoDescID">The Venmo logo</desc>
  <g fill="none">
    <rect width="448.934" height="299.289" fill="#3D95CE" rx="29.929" />
    <path
      fill="#FFF"
      d="M314.253648,95.768518 C314.253648,140.505629 276.917862,198.622312 246.615405,239.43135 L177.402732,239.43135 L149.644594,69.6528784 L210.247869,63.767475 L224.923984,184.575771 C238.636763,161.724586 255.559021,125.813905 255.559021,101.330492 C255.559021,87.9291341 253.314515,78.8010611 249.806862,71.285106 L304.995473,59.8578376 C311.376749,70.6382477 314.253648,81.742087 314.253648,95.768518 Z"
    />
  </g>
</svg>
`;var k;(function(o){o.Loading="loading",o.Available="available",o.Unavailable="unavailable"})(k||(k={}));let Et=class extends U{constructor(){super(...arguments),this.donationInfoValid=!0,this.applePayMode=k.Loading,this.googlePayMode=k.Loading,this.venmoMode=k.Loading,this.payPalMode=k.Loading,this.paymentModeSelected=void 0}render(){const t=this.paymentModeSelected?"payment-selected":"";return y`
      <div
        class="payment-container ${this.donationInfoValid?"donation-info-valid":"donation-info-invalid"} ${t}"
      >
        <div class="payment-provider-container">
          <button
            class="applepay provider-button ${this.applePayMode} ${this.paymentModeSelected==="apple"?"selected":""}"
            @click=${e=>{this.paymentModeSelected="apple",this.applePaySelected(e)}}
            tabindex="0"
          >
            <div class="payment-image">${i_}</div>
          </button>

          <button
            class="googlepay provider-button ${this.googlePayMode} ${this.paymentModeSelected==="google"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="google",this.googlePaySelected()}}
            tabindex="0"
          >
            <div class="payment-image">${$_}</div>
          </button>

          <button
            class="venmo provider-button ${this.venmoMode} ${this.paymentModeSelected==="venmo"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="venmo",this.venmoSelected()}}
            tabindex="0"
          >
            <div class="payment-image">${V_}</div>
          </button>

          <div
            class="paypal-container provider-button ${this.payPalMode}
              ${this.paymentModeSelected==="paypal"?"selected":""}"
            tabindex="0"
          >
            <div class="payment-image">
              <div
                class="paypal-local-button"
                @click=${()=>{this.paymentModeSelected="paypal",this.localPaypalButtonClicked()}}
              >
                ${T_}
              </div>
              <slot name="paypal-button"></slot>
            </div>
          </div>
        </div>

        <div class="credit-card-container">
          <button
            @click=${()=>{this.paymentModeSelected="cc",this.creditCardSelected()}}
            class="button-style credit-card-button ${this.paymentModeSelected==="cc"?"selected":""}"
            tabindex="0"
          >
            <div class="cc-title">Credit Card</div>
            <div class="cc-background"></div>
          </button>
        </div>
      </div>

      ${this.paymentModeSelected?y`
            <button
              id="change-payment-method"
              @click=${()=>{this.paymentModeSelected=void 0,this.dispatchEvent(new Event("resetPaymentMethod")),this.setButtonVisibility()}}
            >
              Change payment method
            </button>
          `:x}
    `}firstUpdated(){this.dispatchEvent(new Event("firstUpdated"))}updated(t){t.has("paymentProviders")&&this.setButtonVisibility()}showPaypalButton(){this.payPalMode=k.Available}setButtonVisibility(){return g(this,void 0,void 0,function*(){var t,e,i;(t=this.paymentProviders)===null||t===void 0||t.venmoHandler.get().then(n=>{if(!n){this.venmoMode=k.Unavailable;return}n.isBrowserSupported().then(s=>{this.venmoMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading venmo",s),this.venmoMode=k.Unavailable})}).catch(n=>{console.error("venmo unavailable",n),this.venmoMode=k.Unavailable}),(e=this.paymentProviders)===null||e===void 0||e.applePayHandler.get().then(n=>{if(!n){console.error("applePayHandler unavailable"),this.applePayMode=k.Unavailable;return}n.isAvailable().then(s=>{this.applePayMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading applepay",s),this.applePayMode=k.Unavailable})}).catch(n=>{console.error("apple pay unavailable",n),this.applePayMode=k.Unavailable}),(i=this.paymentProviders)===null||i===void 0||i.googlePayHandler.get().then(n=>{if(!n){console.error("google pay handler unavailable"),this.googlePayMode=k.Unavailable;return}n.isBrowserSupported().then(s=>{this.googlePayMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading googlepay",s),this.googlePayMode=k.Unavailable})}).catch(n=>{console.error("google pay unavailable",n),this.googlePayMode=k.Unavailable})})}googlePaySelected(){this.dispatchEvent(new Event("googlePaySelected"))}applePaySelected(t){const e=new CustomEvent("applePaySelected",{detail:{originalEvent:t}});this.dispatchEvent(e)}venmoSelected(){this.dispatchEvent(new Event("venmoSelected"))}creditCardSelected(){this.dispatchEvent(new Event("creditCardSelected"))}localPaypalButtonClicked(){this.dispatchEvent(new Event("paypalBlockerSelected"))}static get styles(){const t=$`var(--paymentButtonWidth, 5rem)`,e=$`var(--paymentButtonHeight, 3.2rem)`,i=$`var(--creditCardFontSize, 1.8rem)`;return $`
      button {
        color: inherit;
        font-family: inherit;
      }

      .payment-container {
        width: 100%;
      }

      .payment-provider-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1rem;
        margin-bottom: 1rem;
        max-width: 23rem;
      }

      .provider-button {
        border: 0;
        padding: 0;
        background: none;
        cursor: pointer;
        width: ${t};
        height: ${e};
      }

      .provider-button.unavailable {
        display: none;
      }

      .provider-button.loading {
        border: 1px solid #ddd;
        border-radius: 2px;
        /* account for the borders that don't exist once the provider loads, otherwise the layout shifts */
        margin-bottom: -2px;
      }

      .provider-button.loading .payment-image {
        display: none;
      }

      .paypal-local-button {
        position: absolute;
        width: ${t};
        height: ${e};
      }

      .donation-info-valid .paypal-local-button {
        z-index: 0;
      }

      .donation-info-invalid .paypal-local-button {
        z-index: 250;
      }

      .credit-card-button {
        color: var(--ccButtonFontColor, #333);
        background-color: var(--ccButtonColor, white);
        border: 1px solid #333;
        border-radius: 4px;
        cursor: pointer;
        margin: 0;
        padding: 0.7rem 1rem;
        width: 100%;
      }

      .credit-card-button .cc-background {
        height: 2.4rem;
        width: 100%;
        background-repeat: no-repeat;
        background-image: url(https://archive.org/images/cc_logos.png);
        background-position: 50% 50%;
        background-size: contain;
      }

      .credit-card-button .cc-title {
        font-size: ${i};
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      button#change-payment-method {
        margin-top: 10px;
        background: white;
        border: 1px solid;
        border-radius: 3px;
        padding: 5px;
      }

      button#change-payment-method:hover {
        cursor: pointer;
      }

      .payment-selected button:not(.selected),
      .payment-selected .paypal-container:not(.selected) {
        display: none;
      }
    `}};v([f({type:Boolean})],Et.prototype,"donationInfoValid",void 0);v([f({type:Object})],Et.prototype,"paymentProviders",void 0);v([f({type:String})],Et.prototype,"applePayMode",void 0);v([f({type:String})],Et.prototype,"googlePayMode",void 0);v([f({type:String})],Et.prototype,"venmoMode",void 0);v([f({type:String})],Et.prototype,"payPalMode",void 0);v([f({type:String})],Et.prototype,"paymentModeSelected",void 0);Et=v([St("payment-selector")],Et);var fe;(function(o){o.Summary="summary",o.Edit="edit"})(fe||(fe={}));let Gt=class extends U{constructor(){super(...arguments),this.mode=fe.Edit,this.amountOptions=ur,this.amountSelectionLayout=Zt.MultiLine,this.frequencySelectionMode=dt.Button}render(){return y` ${this.currentTemplate} `}get currentTemplate(){switch(this.mode){case fe.Summary:return this.donationSummaryTemplate;case fe.Edit:return this.editDonationTemplate}}get editDonationTemplate(){return y`
      <donation-form-edit-donation
        .donationInfo=${this.donationInfo}
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @showSummaryClicked=${this.showSummaryClicked}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-edit-donation>
    `}get donationSummaryTemplate(){return y`
      <donation-summary .donationInfo=${this.donationInfo} @editClicked=${this.summaryEditClicked}>
      </donation-summary>
    `}donationInfoChanged(t){this.donationInfo=t.detail.donationInfo;const e=new CustomEvent("donationInfoChanged",{detail:{donationInfo:this.donationInfo}});this.dispatchEvent(e)}editDonationError(t){const e=new CustomEvent("editDonationError",{detail:t.detail});this.dispatchEvent(e)}summaryEditClicked(){this.mode=fe.Edit}showSummaryClicked(){this.mode=fe.Summary}static get styles(){return $``}};v([f({type:Object})],Gt.prototype,"donationInfo",void 0);v([f({type:String})],Gt.prototype,"mode",void 0);v([f({type:Array})],Gt.prototype,"amountOptions",void 0);v([f({type:String})],Gt.prototype,"amountSelectionLayout",void 0);v([f({type:String})],Gt.prototype,"frequencySelectionMode",void 0);v([M("edit-donation")],Gt.prototype,"editDonation",void 0);Gt=v([St("donation-form-header")],Gt);let xd=class extends U{render(){return y`
      <div class="top-line"></div>
      <div class="total-line">Total: ${this.totalAmount}</div>
    `}get totalAmount(){if(!this.donationInfo)return;const t=it(this.donationInfo.total,{symbol:"$"}).format(),e=this.donationInfo.donationType===E.Monthly?"/month":"";return`${t}${e}`}static get styles(){const t=$`var(--totalAmountLineColor, #333)`,e=$`var(--totalAmountLineThickness, 2px)`,i=$`var(--totalAmountVerticalSpacing, 0.5rem)`,n=$`var(--totalAmountFontSize, 2.6rem)`;return $`
      .top-line {
        width: 100%;
        height: ${e};
        background-color: ${t};
      }

      .total-line {
        font-size: ${n};
        font-weight: bold;
        text-align: center;
        margin-top: ${i};
      }
    `}};v([f({type:Object})],xd.prototype,"donationInfo",void 0);xd=v([St("donation-form-total-amount")],xd);let nt=class extends U{constructor(){super(...arguments),this.amountOptions=ur,this.amountSelectionLayout=Zt.MultiLine,this.frequencySelectionMode=dt.Button,this.creditCardVisible=!1,this.contactFormVisible=!1,this.donationInfoValid=!0,this.paypalButtonNeedsRender=!0,this.flowHandlersConfigured=!1,this.flowHandlerListenersBound=!1}render(){var t;return y`
      <donation-form-header
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-header>

      <donation-form-section
        .badgeMode=${Wi.HideBadgeLeaveSpacing}
        id="total-amount-section"
      >
        <donation-form-total-amount .donationInfo=${this.donationInfo}>
        </donation-form-total-amount>
      </donation-form-section>

      <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart}
        headline="Choose a payment method"
      >
        <payment-selector
          .paymentProviders=${(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders}
          @firstUpdated=${this.paymentSelectorFirstUpdated}
          @creditCardSelected=${this.creditCardSelected}
          @venmoSelected=${this.venmoSelected}
          @applePaySelected=${this.applePaySelected}
          @googlePaySelected=${this.googlePaySelected}
          @paypalBlockerSelected=${this.paypalBlockerSelected}
          @resetPaymentMethod=${()=>g(this,void 0,void 0,function*(){this.selectedPaymentProvider=void 0,this.contactFormVisible=!1,this.requestUpdate()})}
          tabindex="0"
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
        </payment-selector>
      </donation-form-section>

      <div class="contact-form-section ${this.contactFormVisible?"":"hidden"}">
        ${this.contactFormSectionTemplate}
      </div>
      <slot name="recaptcha"></slot>
    `}showConfirmationModalDev(t){return g(this,void 0,void 0,function*(){var e;(e=this.paymentFlowHandlers)===null||e===void 0||e.showConfirmationStepModal(t)})}showUpsellModalDev(t){return g(this,void 0,void 0,function*(){var e,i;if((e=this.paymentFlowHandlers)===null||e===void 0||e.showUpsellModal(t),t.ctaMode===Kt.PayPalUpsellSlot){const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.paypalHandler.get(),s=new D({amount:t.oneTimeAmount,donationType:E.OneTime,coverFees:!1});n?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:s})}})}get contactFormSectionTemplate(){const t=this.selectedPaymentProvider===S.Venmo?"Help us stay in touch":"Enter payment information";return y`
      <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart+1}
        headline=${t}
        id="contactFormSection"
      >
        <slot name="contact-form"></slot>
        <div class="credit-card-fields" class="${this.creditCardVisible?"":"hidden"}">
          <slot name="braintree-hosted-fields"></slot>
        </div>
      </donation-form-section>

      <donation-form-section .sectionBadge=${this.paymentSelectorNumberingStart+2}>
        <slot name="recaptcha"></slot>
        <button id="donate-button" @click=${this.donateClicked}>Donate</button>

        <div class="secure-process-note">${Pr} Your payment will be securely processed</div>
      </donation-form-section>
    `}get paymentSelectorNumberingStart(){return this.frequencySelectionMode===dt.Button?3:2}editDonationError(){this.donationInfoValid=!1}paymentSelectorFirstUpdated(){var t;!((t=this.paymentFlowHandlers)===null||t===void 0)&&t.paypalHandler&&this.renderPayPalButtonIfNeeded()}applePaySelected(t){var e,i;if(this.selectedPaymentProvider=S.ApplePay,this.contactFormVisible=!1,this.creditCardVisible=!1,!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}const n=t.detail.originalEvent;this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.applePayHandler)===null||i===void 0||i.paymentInitiated(this.donationInfo,n)),this.emitPaymentFlowStartedEvent()}googlePaySelected(){var t,e;this.selectedPaymentProvider=S.GooglePay,this.contactFormVisible=!1,this.creditCardVisible=!1,this.donationInfoValid?(this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.googlePayHandler)===null||e===void 0||e.paymentInitiated(this.donationInfo)),this.emitPaymentFlowStartedEvent()):this.showInvalidDonationInfoAlert()}creditCardSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=S.CreditCard,this.contactFormVisible=!0,this.creditCardVisible=!0,this.focusContactForm()})}venmoSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=S.Venmo,this.contactFormVisible=!0,this.creditCardVisible=!1,this.focusContactForm()})}paypalBlockerSelected(){this.contactFormVisible=!1,this.creditCardVisible=!1,this.showInvalidDonationInfoAlert()}focusContactForm(){return g(this,void 0,void 0,function*(){var t;yield this.updateComplete,this.contactFormSection&&((t=this.contactForm)===null||t===void 0||t.focus())})}donateClicked(){return g(this,void 0,void 0,function*(){if(!this.contactForm){alert("Please enter contact info.");return}if(!this.donationInfoValid||!this.donationInfo){this.showInvalidDonationInfoAlert();return}const t=this.contactForm.donorContactInfo;switch(this.selectedPaymentProvider){case S.CreditCard:this.handleCreditCardDonationFlow(t,this.donationInfo);break;case S.Venmo:this.handleVenmoDonationFlow(t,this.donationInfo);break}})}handleCreditCardDonationFlow(t,e){return g(this,void 0,void 0,function*(){var i,n,s;const r=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.creditCardHandler,d=yield(n=this.braintreeManager)===null||n===void 0?void 0:n.paymentProviders.creditCardHandler.get();d?.hideErrorMessage();const a=(s=this.contactForm)===null||s===void 0?void 0:s.reportValidity(),l=yield r?.tokenizeFields();!a||l===void 0||(this.emitPaymentFlowStartedEvent(),r?.paymentInitiated(l,e,t))})}handleVenmoDonationFlow(t,e){return g(this,void 0,void 0,function*(){var i,n,s;!((i=this.contactForm)===null||i===void 0)&&i.reportValidity()&&((s=(n=this.paymentFlowHandlers)===null||n===void 0?void 0:n.venmoHandler)===null||s===void 0||s.paymentInitiated(t,e))})}emitPaymentFlowStartedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowStarted",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowConfirmedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowConfirmed",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowCancelledEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowCancelled",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowErrorEvent(t){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowError",{detail:{paymentProvider:this.selectedPaymentProvider,error:t}});this.dispatchEvent(e)}showInvalidDonationInfoAlert(){alert("Please enter a valid donation amount.")}renderPayPalButtonIfNeeded(){return g(this,void 0,void 0,function*(){var t,e;this.paypalButtonNeedsRender&&(this.paypalButtonNeedsRender=!1,this.donationInfo&&(yield(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0?void 0:e.renderPayPalButton(this.donationInfo)),this.paymentSelector.showPaypalButton())})}updated(t){var e,i;if(t.has("donationInfo")&&this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||i===void 0||i.updateDonationInfo(this.donationInfo),this.donationFormHeader.donationInfo=this.donationInfo),(t.has("paymentFlowHandlers")||t.has("donationInfo"))&&this.donationInfo&&this.paymentFlowHandlers&&this.setupFlowHandlers(),t.has("donationInfoValid")&&(this.paymentSelector.donationInfoValid=this.donationInfoValid),t.has("selectedPaymentProvider")){const n=new CustomEvent("paymentProviderSelected",{detail:{paymentProvider:this.selectedPaymentProvider,previousPaymentProvider:t.get("selectedPaymentProvider")}});this.dispatchEvent(n)}}setupFlowHandlers(){var t,e;this.flowHandlersConfigured||(this.flowHandlersConfigured=!0,this.bindFlowListenerEvents(),this.renderPayPalButtonIfNeeded(),this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.updateDonationInfo(this.donationInfo)))}bindFlowListenerEvents(){var t,e,i,n,s,r,d,a,l,h;this.flowHandlerListenersBound||(this.flowHandlerListenersBound=!0,(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.on("payPalPaymentStarted",()=>{this.selectedPaymentProvider=S.PayPal,this.emitPaymentFlowStartedEvent()}),(n=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.paypalHandler)===null||n===void 0||n.on("payPalPaymentConfirmed",()=>{this.selectedPaymentProvider=S.PayPal,this.emitPaymentFlowConfirmedEvent()}),(r=(s=this.paymentFlowHandlers)===null||s===void 0?void 0:s.paypalHandler)===null||r===void 0||r.on("payPalPaymentCancelled",()=>{this.selectedPaymentProvider=S.PayPal,this.emitPaymentFlowCancelledEvent()}),(a=(d=this.paymentFlowHandlers)===null||d===void 0?void 0:d.paypalHandler)===null||a===void 0||a.on("payPalPaymentError",(c,u)=>{this.selectedPaymentProvider=S.PayPal,this.emitPaymentFlowErrorEvent(u)}),(h=(l=this.paymentFlowHandlers)===null||l===void 0?void 0:l.googlePayHandler)===null||h===void 0||h.on("paymentCancelled",()=>{this.selectedPaymentProvider=S.GooglePay,this.emitPaymentFlowCancelledEvent()}))}donationInfoChanged(t){const e=t.detail.donationInfo;this.donationInfo=new D({amount:e.amount,donationType:e.donationType,coverFees:e.coverFees}),this.donationInfoValid=!0;const i=new CustomEvent("donationInfoChanged",{detail:{donationInfo:e}});this.dispatchEvent(i)}static get styles(){const t=$`var(--donateButtonFontSize, 2.6rem)`,e=$`var(--donateButtonHeight, 4rem)`,i=$`var(--donateButtonColor, rgba(49, 164, 129, 1))`,n=$`var(--donateButtonTextColor, #fff)`,s=$`var(--donateButtonHoverColor, rgba(39, 131, 103, 1))`,r=$`var(--donateTotalAmountTopMargin, 1.5rem)`,d=$`var(--donateTotalAmountBottomMargin, 1.2rem)`;return $`
      h1 {
        margin: 0;
        padding: 0;
      }

      .hidden {
        display: none;
      }

      .secure-process-note {
        margin-top: 0.5em;
        font-size: 0.75em;
        text-align: center;
      }

      .secure-process-note svg {
        width: 1.2rem;
        height: 1.5rem;
        vertical-align: bottom;
      }

      #donate-button {
        width: 100%;
        appearance: none;
        -webkit-appearance: none;
        font-size: ${t};
        font-weight: bold;
        text-align: center;
        color: ${n};
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: ${i};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: ${e};
      }

      #donate-button:hover {
        background-color: ${s};
      }

      #total-amount-section {
        display: block;
        margin-top: ${r};
        margin-bottom: ${d};
      }
    `}};v([f({type:Object})],nt.prototype,"braintreeManager",void 0);v([f({type:Object})],nt.prototype,"paymentFlowHandlers",void 0);v([f({type:Object})],nt.prototype,"donationRequest",void 0);v([f({type:Object})],nt.prototype,"donationInfo",void 0);v([f({type:Object})],nt.prototype,"contactForm",void 0);v([f({type:Array})],nt.prototype,"amountOptions",void 0);v([f({type:String})],nt.prototype,"amountSelectionLayout",void 0);v([f({type:String})],nt.prototype,"frequencySelectionMode",void 0);v([f({type:Boolean})],nt.prototype,"creditCardVisible",void 0);v([f({type:Boolean})],nt.prototype,"contactFormVisible",void 0);v([f({type:Boolean})],nt.prototype,"donationInfoValid",void 0);v([f({type:String})],nt.prototype,"selectedPaymentProvider",void 0);v([M("#contactFormSection")],nt.prototype,"contactFormSection",void 0);v([M("donation-form-header")],nt.prototype,"donationFormHeader",void 0);v([M("payment-selector")],nt.prototype,"paymentSelector",void 0);nt=v([St("donation-form")],nt);const q_={USD:"en-US"},W_={USD:"$"};function ar(o,t="USD"){var e;if(!Number.isFinite(o))return"Invalid amount";const i=(e=q_[t])!==null&&e!==void 0?e:"en-US";return new Intl.NumberFormat(i,{style:"currency",currency:t,minimumFractionDigits:2,maximumFractionDigits:2}).format(o)}let Td=class extends tt{render(){return b`
      <div class="mgc-donation-section-info">
        <span><slot></slot></span>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.dispatchEvent(new Event("editingRequested"))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};Td.styles=pt`
    span {
      max-width: 300px;
      margin-right: 10px;
      display: inline-grid;
    }
  `;Td=v([at("ia-mgc-form-section-info")],Td);let lr=class extends tt{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?b`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:C}};lr.styles=pt`
    .sent-status.success,
    .sent-status.fail {
      padding: 5px;
      background: rgb(238, 253, 238);
      width: 55px;
      min-height: 20px;
    }
    .sent-status.success {
      color: var(--mgc-success-color, rgb(33, 149, 24));
      border-left: 5px solid var(--mgc-success-color, rgb(33, 149, 24));
    }
    .sent-status.fail {
      color: var(--mgc-warning-color-dark, #bb0505);
      border-left: 5px solid var(--mgc-warning-color-dark, #bb0505);
    }
  `;v([A({type:String})],lr.prototype,"status",void 0);lr=v([at("ia-mgc-update-status")],lr);let ht=class extends tt{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t,e;return b`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?C:b`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span
                  >${(t=this.plan)===null||t===void 0?void 0:t.currency} ${(e=this.plan)===null||e===void 0?void 0:e.amountFormatted}</span
                >
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:C}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-mgc-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,n,s,r;t.preventDefault();const d=this.form.querySelector('input[name="amount"]');this.newAmount=Number(d.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const a=Number(D.calculateTotal(Number((n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:a,baseAmount:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount,coverFees:this.coverFees,feeCovered:(r=this.donationPaymentInfo)===null||r===void 0?void 0:r.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new D({donationType:E.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new D({donationType:E.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new D({donationType:E.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(t,e){var i;t.preventDefault(),this.clearStatusMessaging();const n=e??this.form.querySelector("#update-amount");if(n&&this.updateButtonState(n),!this.newAmount){this.errorMessage="Please enter a new amount",n&&(n.isDisabled=!1);return}const s=this.form.querySelector('input[name="amount"]'),r=(i=Number(s.value))!==null&&i!==void 0?i:0,d=r<1,a=r>=9999;if(d&&(this.errorMessage="Please enter a valid amount"),a&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),a||d){n&&this.updateButtonState(n);return}this.requestAmountUpdate(t)}async updateButtonState(t){t.isDisabled=!0,await t?.updateComplete}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:D.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){if(!this.newAmount)return"I'll generously cover the fees.";const t=D.calculateFeeAmount(this.newAmount);return`I'll generously add ${ar(t)} to cover fees.`}get editAmountForm(){var t,e,i,n,s;return b`
      <section>
        <form
          id="edit-plan-amount"
          @submit=${r=>this.handleSubmit(r)}
        >
          <p>
            Current donation amount: ${(t=this.plan)===null||t===void 0?void 0:t.currency}
            ${(e=this.plan)===null||e===void 0?void 0:e.amountFormatted}
          </p>
          <div>
            ${W_[(n=(i=this.plan)===null||i===void 0?void 0:i.currency)!==null&&n!==void 0?n:"USD"]}
            <input
              min="1"
              max="9999"
              type="number"
              id="amount"
              name="amount"
              ?required=${!0}
              @focus=${()=>this.clearStatusMessaging()}
              @input=${r=>{const d=Number(r.target.value);this.captureAmountChanges(d),this.newAmount=d}}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${r=>{const a=r.target.checked;this.coverFees=a,this.captureAmountChanges()}}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>
              Total: ${(s=this.plan)===null||s===void 0?void 0:s.currency}
              ${ar(this.totalAmountWithFees())}
            </p>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${r=>{r.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="update-amount"
                class="ia-button primary"
                type="submit"
                ?isDisabled=${!this.newAmount}
                .clickHandler=${(r,d)=>this.handleSubmit(r,d)}
              >
                Update
              </ia-mgc-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error">${this.errorMessage}</p>
        </form>
      </section>
    `}};ht.styles=pt`
    input#amount {
      width: 50px;
    }

    .cta-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    p.error {
      color: var(--mgc-warning-color-dark, #bb0505);
    }

    ia-mgc-update-status {
      display: inline-block;
      margin-left: 1rem;
    }

    .checkbox-option-container {
      margin: 10px 0;
      display: flex;
    }
  `;v([A({type:Object})],ht.prototype,"plan",void 0);v([A({type:Object})],ht.prototype,"donationPaymentInfo",void 0);v([A({type:Number})],ht.prototype,"newAmount",void 0);v([A({type:Boolean,reflect:!0})],ht.prototype,"currentlyEditing",void 0);v([A({type:Boolean})],ht.prototype,"coverFees",void 0);v([A({type:String})],ht.prototype,"updateMessage",void 0);v([A({type:String})],ht.prototype,"errorMessage",void 0);v([A({type:String})],ht.prototype,"updateStatus",void 0);v([bt("form")],ht.prototype,"form",void 0);ht=v([at("ia-mgc-edit-plan-amount")],ht);var dr;(function(o){o.invalid_date="Please enter a valid date format (YYYY-MM-DD)",o.date_too_early="Date must be at least tomorrow.",o.second_donation_this_month="The date you selected will result in an additional donation for this month.",o.date_out_of_range="New donation date must be within the next 12 months.",o.same_next_billing_date=""})(dr||(dr={}));let rt=class extends tt{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(t){this.dateInput&&t.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.dateInput.focus()}render(){var t;return b`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?C:b`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${(t=this.plan)===null||t===void 0?void 0:t.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:C}
        </donation-form-section>
      </section>
    `}async dateUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Date updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value="",this.newDate=void 0}formatDateToYYYYMMDD(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}validateChosenDate(t){var e,i,n;if(!t)return{valid:!1,errorCode:"invalid_date"};let s;try{s=new Date(`${t}T00:00:00`)}catch{return{valid:!1,errorCode:"invalid_date"}}const r=new Date;r.setHours(0,0,0,0),new Date(r).setDate(r.getDate()+1);const a=new Date(s);if(a.setHours(0,0,0,0),!((e=this.plan)===null||e===void 0)&&e.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(a):!1)return{valid:!1,errorCode:"same_next_billing_date"};if(a<r)return{valid:!1,errorCode:"date_too_early"};const h=new Date(r);if(h.setFullYear(h.getFullYear()+1),a>h)return{valid:!1,errorCode:"date_out_of_range"};const c=!((i=this.plan)===null||i===void 0)&&i.payment&&(!((n=this.plan.payment.lastBillingDate)===null||n===void 0)&&n.date)?new Date(this.plan.payment.lastBillingDate.date):null;if(c){const u=c.getMonth(),p=c.getFullYear(),_=s.getFullYear(),m=s.getMonth();if(_===p&&m===u)return{valid:!0,errorCode:"second_donation_this_month"}}return{valid:!0,errorCode:""}}get minDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate()+1);const i=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${i}-${n}-${s}`}get maxDate(){const t=new Date,e=t.getFullYear()+1,i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}get editDateForm(){var t,e,i,n,s;const r=!((t=this.plan)===null||t===void 0)&&t.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):"",d=(i=(e=this.dateInput)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:r;return b`
      <section>
        <form id="edit-date">
          <p id="form-info-last-donation-date">
            Last donation date: ${(n=this.plan)===null||n===void 0?void 0:n.lastBillingDateLocale}
          </p>

          <p id="form-info-next-donation-date">
            Next donation date: ${(s=this.plan)===null||s===void 0?void 0:s.nextBillingDateLocale}
          </p>
          <div class="date-holder">
            <input
              required
              type="date"
              id="edit-date"
              name="edit-date"
              min=${this.minDate}
              max=${this.maxDate}
              .value=${d}
              @focus=${()=>this.clearStatusMessaging()}
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;const a=this.dateInput.value,{valid:l,errorCode:h}=this.validateChosenDate(a);if(this.allowEditing=l,h)if(h==="second_donation_this_month")this.errorMessage=dr[h],this.warningMessage="You have already made a donation this month.";else{this.errorMessage=dr[h],this.newDate=void 0;return}const c=new Date(`${a}T00:00:00`),u=new Date(c).toISOString();this.newDate=u}}
            />
          </div>
          <div>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${a=>{a.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="edit-date"
                class="ia-button primary"
                type="submit"
                .isDisabled=${!this.allowEditing}
                .clickHandler=${async(a,l)=>{if(this.clearStatusMessaging(),!this.newDate){this.errorMessage="Please enter a valid date";return}l.isDisabled=!0,await l.updateComplete,this.requestDateUpdate(a)}}
              >
                Update
              </ia-mgc-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error error-msg">
            ${this.warningMessage?b`<span>${this.warningMessage}</span><br />`:""}
            ${this.errorMessage}
          </p>
        </form>
      </section>
    `}};rt.styles=pt`
    input[name='edit-date'] {
      margin: 10px 0;
      min-width: 140px;
      font-family: inherit;
    }

    .cta-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    p.error {
      color: var(--mgc-warning-color-dark, #bb0505);
    }

    ia-mgc-update-status {
      display: inline-block;
      margin-left: 1rem;
    }

    .checkbox-option-container {
      margin: 10px 0;
      display: flex;
    }
  `;v([A({type:Object})],rt.prototype,"plan",void 0);v([A({type:String})],rt.prototype,"newDate",void 0);v([A({type:Boolean,reflect:!0})],rt.prototype,"currentlyEditing",void 0);v([A({type:Boolean})],rt.prototype,"allowEditing",void 0);v([A({type:String})],rt.prototype,"updateMessage",void 0);v([A({type:String})],rt.prototype,"errorMessage",void 0);v([A({type:String})],rt.prototype,"warningMessage",void 0);v([A({type:String})],rt.prototype,"updateStatus",void 0);v([bt("form")],rt.prototype,"form",void 0);v([bt("form ia-mgc-button#edit-date")],rt.prototype,"formSubmitButton",void 0);v([bt('form input[name="edit-date"]')],rt.prototype,"dateInput",void 0);rt=v([at("ia-mgc-edit-date")],rt);let li=class extends tt{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:b`
      <donation-form-section
        badgemode="hidebadge"
        headline="Cancel recurring donation (requires confirmation)"
      >
        <div class="warning">
          <p>
            You can also pause your recurring donation by setting the next
            donation date up to 12 months in the future.
          </p>
          <ia-mgc-button
            class="link cancel"
            .clickHandler=${(t,e)=>{if(e.isDisabled=!0,this.initialCancelRequest){this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0;return}this.initialCancelRequest=!0}}
            >Let's cancel my donation</ia-mgc-button
          >
        </div>
      </donation-form-section>

      ${this.initialCancelRequest?this.confirmCancelation:C}
    `}get confirmCancelation(){return b`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <ia-mgc-button class='text exit-cancel'  @click=${()=>{this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0}}>X</ia-mgc-button>

      <p>Canceling ends your monthly recurring donation to the Internet Archive, effective immediately. You will not be charged moving forward.</p>
      <p>Canceling does not affect your account or access to the Internet Archive, although you will no longer have access to any of the Monthly Giving Circle perks.</p>
      <p>If you have any questions regarding donations, contact us at <a href="mailto:donations@archive.org">donations@archive.org</a></p>

      <form id=${this.formId} @submit=${t=>this.cancelThisPlan(t)}>
        <div class="checkbox-option-container">
          <input
            id=${`confirm-${this.formId}`}
            type="checkbox"
            required
            @change=${async t=>{t.preventDefault(),this.patronWantsToKeepPlan=!t.target.checked,await this.updateComplete}}>
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my subscription</b></label>
        </div>

        <ia-mgc-button
          class="cancel"
          .isDisabled=${this.patronWantsToKeepPlan}
          id=${`submit-${this.formId}`}
          type="submit"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.cancelThisPlan(t)}}
        >I'm sure I want to cancel my recurring donation.</ia-mgc-button>
      </form>
    </section>
    `}};li.styles=pt`
    :host {
      --formSectionTitleFontSize: 1.4rem;
    }
    .warning > * {
      margin: 5px 0;
    }

    .cancel-donation {
      display: block;
      border: 2px solid #d9534f;
      background-color: #ffeeee;
    }

    .cancel-donation > * {
      padding: 5px;
      position: relative;
    }

    ia-mgc-button.exit-cancel {
      --button-border: 1px solid;
      --button-border-radius: 50%;
      position: absolute;
      top: -5px;
      right: -10px;
    }

    ia-mgc-button.link.cancel {
      --link-cancel-color: var(--mgc-warning-color-dark, #bb0505);
    }

    ia-mgc-button {
      --button-height: auto;
    }

    ia-mgc-button > * {
      text-align: left;
      text-wrap: wrap;
    }

    h3 {
      position: relative;
    }

    .checkbox-option-container {
      display: flex;
      margin: 10px 0;
    }
  `;v([A({type:Object})],li.prototype,"plan",void 0);v([A({type:Boolean,reflect:!0})],li.prototype,"patronWantsToKeepPlan",void 0);v([A({type:Boolean,reflect:!0})],li.prototype,"initialCancelRequest",void 0);v([bt("form")],li.prototype,"form",void 0);li=v([at("ia-mgc-cancel-plan")],li);let Yt=class extends tt{constructor(){super(...arguments),this.displayCreditCard=!1,this.patronEmail="",this.elementConnected=!1}get braintreeInputs(){return{errorMessage:this.querySelector("#braintree-error-message"),number:this.querySelector("#braintree-creditcard"),cvv:this.querySelector("#braintree-cvv"),expirationDate:this.querySelector("#braintree-expiration")}}createRenderRoot(){return this}disconnectedCallback(){this.elementConnected=!1}connectedCallback(){super.connectedCallback(),console.log("connectedCallback",{paymentConfig:this.paymentConfig}),this.elementConnected=!0}updated(t){if(t.has("elementConnected")&&this.elementConnected&&this.paymentConfig){const{braintreeAuthToken:i,endpointManager:n,paymentClients:s,environment:r}=this.paymentConfig||{};!this.braintreeManager&&i&&n&&s&&r&&this.setupBraintreeManager()}this.braintreeManager&&t.has("displayCreditCard")&&this.displayCreditCard&&this.setupCreditCardHandler()}async validateCreditCardFields(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());let i=!1,n=null;try{n=await e?.tokenizeHostedFields(),i=!0}catch(s){const r=s;switch(e?.showErrorMessage(),r.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e?.markFieldErrors([ot.Number,ot.CVV,ot.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e?.markFieldErrors([ot.CVV]);break}}return i?n:!1}async setupCreditCardHandler(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());try{await e?.tokenizeHostedFields()}catch{}e?.removeFieldErrors([ot.Number,ot.CVV,ot.ExpirationDate])}render(){return b` <div>${this.creditCardTemplate}</div> `}lightDomCSS(){return pt`
      contact-form form badged-input {
        width: 100%;
      }

      #ia-mgc-cc-area .braintree-input {
        width: 100%;
        display: block;
        height: stretch;
        height: -webkit-fill-available;
      }
    `}get creditCardTemplate(){return b`
      <div id="ia-mgc-cc-area" style="border: 1px sold red;">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
        <div class="braintree-row">
          <badged-input
            .icon=${cm}
            ?required=${!0}
            class="creditcard"
          >
            <div class="braintree-input" id="braintree-creditcard"></div>
          </badged-input>
        </div>
        <div class="braintree-row">
          <badged-input
            .icon=${Am}
            ?required=${!0}
            class="expiration"
          >
            <div class="braintree-input" id="braintree-expiration"></div>
          </badged-input>
          <badged-input .icon=${Pr} ?required=${!0} class="cvv">
            <div class="braintree-input" id="braintree-cvv"></div>
          </badged-input>
        </div>
      </div>
    `}async renderPayPalVaultButton(){var t,e,i;console.log("[PayPal] renderPayPalVaultButton called");const n=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.paypalHandler.get());if(console.log("[PayPal] handler:",n),!n)return;const s=document.querySelector("#ia-mgc-paypal-button");console.log("[PayPal] container element:",s);const r=new D({donationType:E.Monthly,amount:(i=(e=this.plan)===null||e===void 0?void 0:e.amount)!==null&&i!==void 0?i:0,coverFees:!1}),d=await n.renderPayPalButton({selector:"#ia-mgc-paypal-button",style:{color:"blue",shape:"rect",size:"medium"},donationInfo:r});console.log("[PayPal] dataSource:",d),d&&(d.delegate={payPalPaymentStarted:async()=>{console.log("PayPal payment started")},payPalPaymentAuthorized:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentConfirmed:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentCancelled:async()=>{console.log("PayPal payment cancelled")},payPalPaymentError:async(a,l)=>{console.error("PayPal vault error:",l),this.dispatchEvent(new CustomEvent("PayPalVaultError",{detail:{error:l}}))}})}handlePayPalAuthorized(t){this.dispatchEvent(new CustomEvent("PayPalVaultAuthorized",{detail:{paymentMethodInfo:{description:`PayPal - ${t.details.email}`,nonce:t.nonce,type:t.type,details:{email:t.details.email}}}}))}async setupBraintreeManager(){var t,e,i,n,s,r,d,a;this.braintreeManager=new J0({paymentClients:(e=(t=this.paymentConfig)===null||t===void 0?void 0:t.paymentClients)!==null&&e!==void 0?e:{},endpointManager:(i=this.paymentConfig)===null||i===void 0?void 0:i.endpointManager,authorizationToken:(s=(n=this.paymentConfig)===null||n===void 0?void 0:n.braintreeAuthToken)!==null&&s!==void 0?s:"",venmoProfileId:(r=this.paymentConfig)===null||r===void 0?void 0:r.venmoProfileId,googlePayMerchantId:(d=this.paymentConfig)===null||d===void 0?void 0:d.googlePayMerchantId,hostedFieldConfig:{hostedFieldStyle:{},hostedFieldFieldOptions:{number:{selector:"#braintree-creditcard",placeholder:"Card number"},cvv:{selector:"#braintree-cvv",placeholder:"CVC"},expirationDate:{selector:"#braintree-expiration",placeholder:"MM / YY"}},hostedFieldContainer:new Q0({number:this.braintreeInputs.number,cvv:this.braintreeInputs.cvv,expirationDate:this.braintreeInputs.expirationDate,errorContainer:this.braintreeInputs.errorMessage})},hostingEnvironment:(a=this.paymentConfig)===null||a===void 0?void 0:a.environment,referrer:window.location.href,loggedInUser:this.patronEmail,origin:window.location.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",l=>{const h=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:l}});this.dispatchEvent(h)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",l=>{const h=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:l}});this.dispatchEvent(h)}),this.dispatchEvent(new Event("BraintreeManagerSetupComplete"))}get contactForm(){return this.querySelector('form[name="contact-form"]')}};v([A({type:Object})],Yt.prototype,"plan",void 0);v([A({type:Boolean,reflect:!0})],Yt.prototype,"displayCreditCard",void 0);v([A({type:String})],Yt.prototype,"patronEmail",void 0);v([A({type:Object})],Yt.prototype,"paymentConfig",void 0);v([A({type:Object})],Yt.prototype,"braintreeManager",void 0);v([og()],Yt.prototype,"elementConnected",void 0);Yt=v([at("ia-mgc-braintree-manager")],Yt);class u0{constructor(t){var e;this.paymentMethodInfo=t.paymentMethodInfo,this.donorContactInfo=t.donorContactInfo,this.paymentProvider=(e=t.paymentProvider)!==null&&e!==void 0?e:"unknown"}}let ct=class extends tt{constructor(){super(...arguments),this.paymentConfig={braintreeAuthToken:"",endpointManager:void 0,paymentClients:void 0,environment:"Development",venmoProfileId:"",googlePayMerchantId:"",referrer:"",origin:""},this.patronEmail="",this.currentlyEditing=!1,this.newPaymentMethod="",this.selectedPaymentProvider="",this.paymentSelectorFirstUpdated=!1,this.updateMessage="",this.updateStatus=""}createRenderRoot(){return this}submitPaymentMethodChange(t){t.preventDefault()}clearStatusMessaging(){this.updateMessage="",this.updateStatus=""}async paymentMethodUpdated(t){if(this.updateStatus=t,this.updateMessage=t==="success"?"Payment method updated":"Failed to update date, please try again",t==="success"){this.currentlyEditing=!1,this.selectedPaymentProvider="";return}this.updateRequestButton.isDisabled=!1}get updateRequestButton(){return this.querySelector("ia-mgc-button#edit-plan-payment-method-submit")}get contactFormElement(){return this.querySelector("contact-form")}get contactFormSection(){const t=this.selectedPaymentProvider===S.Venmo?"Help us stay in touch":"Enter payment information";return b`
      <donation-form-section
        badgemode="hidebadge"
        headline=${t}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot
            style="
              display: block;
              width: 100%;
              border: 1px solid blue;
              height: inherit;
          "
          ></slot>
        </div>
      </donation-form-section>
    `}get paymentFormSection(){return b``}get creditCardElement(){return this.querySelector("contact-form")}get braintreeManagerElement(){return this.querySelector("ia-mgc-braintree-manager")}render(){var t,e,i,n,s,r,d,a,l,h,c,u,p;const _=this.selectedPaymentProvider===S.CreditCard||this.selectedPaymentProvider===S.Venmo,m=this.selectedPaymentProvider===S.CreditCard,I=this.selectedPaymentProvider===S.CreditCard||this.selectedPaymentProvider===S.PayPal;return b`
      <style>
        ${this.styles}
      </style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${this.currentlyEditing?C:b`<ia-mgc-form-section-info
              @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
              ><span>
                ${((e=(t=this.plan)===null||t===void 0?void 0:t.payment)===null||e===void 0?void 0:e.paymentMethodType)==="creditCard"?"Credit Card":(n=(i=this.plan)===null||i===void 0?void 0:i.payment)===null||n===void 0?void 0:n.paymentMethodType}:
                ${((r=(s=this.plan)===null||s===void 0?void 0:s.payment)===null||r===void 0?void 0:r.paymentMethodType)===S.PayPal?(a=(d=this.plan)===null||d===void 0?void 0:d.payment)===null||a===void 0?void 0:a.paypalEmail:`${(h=(l=this.plan)===null||l===void 0?void 0:l.payment)===null||h===void 0?void 0:h.cardType} - ${(u=(c=this.plan)===null||c===void 0?void 0:c.payment)===null||u===void 0?void 0:u.last4}`}
              </span></ia-mgc-form-section-info
            >`}
        ${this.currentlyEditing?b`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${(p=this.braintreeManager)===null||p===void 0?void 0:p.paymentProviders}
                @firstUpdated=${N=>{var et;this.paymentSelectorFirstUpdated=!0,(et=N.target)===null||et===void 0||et.showPaypalButton()}}
                @creditCardSelected=${()=>{this.selectedPaymentProvider=S.CreditCard}}
                @venmoSelected=${()=>{this.selectedPaymentProvider=S.Venmo}}
                @applePaySelected=${()=>{this.selectedPaymentProvider=S.ApplePay}}
                @googlePaySelected=${()=>{this.selectedPaymentProvider=S.GooglePay}}
                @paypalSelected=${()=>{this.selectedPaymentProvider=S.PayPal}}
                @resetPaymentMethod=${async()=>{this.selectedPaymentProvider=""}}
                tabindex="0"
              >
                <div slot="paypal-button">
                  <div id="ia-mgc-paypal-button"></div>
                </div>
              </payment-selector>

              <div class="${_?"":"hidden"}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>

              <ia-mgc-braintree-manager
                class="${I?"":"hidden"}"
                .displayCreditCard=${m}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                @BraintreeManagerSetupComplete=${()=>{var N;(N=this.braintreeManagerElement)===null||N===void 0||N.renderPayPalVaultButton()}}
                @PayPalVaultAuthorized=${N=>{this.handlePayPalVaultAuthorized(N)}}
                @PayPalVaultError=${()=>{this.updateStatus="fail",this.updateMessage="PayPal error, please try again"}}
              ></ia-mgc-braintree-manager>

              <ia-mgc-button
                id="edit-plan-payment-method-cancel"
                class="secondary"
                .clickHandler=${()=>{this.currentlyEditing=!1,this.selectedPaymentProvider="",this.clearStatusMessaging()}}
                >Cancel</ia-mgc-button
              >
              ${this.selectedPaymentProvider!==S.PayPal?b`<ia-mgc-button
                      id="edit-plan-payment-method-submit"
                      class="primary"
                      type="submit"
                      .isDisabled=${!this.selectedPaymentProvider}
                      .clickHandler=${async(N,et)=>{var vt,gt,yt;const wt=et;if(wt.isDisabled=!0,!((vt=this.creditCardElement)===null||vt===void 0?void 0:vt.reportValidity())){wt.isDisabled=!1;return}const dh=await((gt=this.braintreeManagerElement)===null||gt===void 0?void 0:gt.validateCreditCardFields());if(!dh){wt.isDisabled=!1;return}const H$=new u0({paymentMethodInfo:dh,donorContactInfo:(yt=this.contactFormElement)===null||yt===void 0?void 0:yt.donorContactInfo,paymentProvider:this.selectedPaymentProvider});this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:H$}}))}}
                      >Update payment method</ia-mgc-button
                    >`:C}
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>
              <div class="secure-process-note">
                ${Pr} Your payment will be securely processed
              </div>
            </form>
          `:C}
      </donation-form-section>
    `}handlePayPalVaultAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail,s=new u0({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:S.PayPal});this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:s}}))}get styles(){return pt`
      payment-selector {
        display: block;
        margin-bottom: 5px;
        padding-bottom: 10px;
      }

      ia-mgc-braintree-manager {
        display: block;
        margin: 10px 0;
      }

      ia-mgc-braintree-manager:not([displaycreditcard]) #ia-mgc-cc-area {
        display: none;
      }

      .secure-process-note {
        margin-top: 0.5em;
        font-size: 0.75em;
      }

      .secure-process-note svg {
        width: 1.2rem;
        height: 1.5rem;
        vertical-align: bottom;
      }

      .hidden {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      #ia-mgc-paypal-button {
        opacity: 0.001;
        width: var(--paymentButtonWidth, 5rem);
        height: var(--paymentButtonHeight, 3.2rem);
        overflow: hidden;
      }
    `}};v([A({type:Object})],ct.prototype,"plan",void 0);v([A({type:Object})],ct.prototype,"paymentConfig",void 0);v([A({type:String})],ct.prototype,"patronEmail",void 0);v([A({type:Boolean,reflect:!0})],ct.prototype,"currentlyEditing",void 0);v([A({type:String,reflect:!0})],ct.prototype,"newPaymentMethod",void 0);v([A({type:Object})],ct.prototype,"braintreeManager",void 0);v([A({type:String,reflect:!0})],ct.prototype,"selectedPaymentProvider",void 0);v([A({type:Boolean})],ct.prototype,"paymentSelectorFirstUpdated",void 0);v([A({type:String})],ct.prototype,"updateMessage",void 0);v([A({type:String})],ct.prototype,"updateStatus",void 0);ct=v([at("ia-mgc-edit-payment-method")],ct);let $t=class extends tt{constructor(){super(...arguments),this.patronEmail="",this.canEditPaymentMethod=!1,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:mt.Development,paymentClients:void 0,endpointManager:void 0}}createRenderRoot(){return this}paymentMethodUpdates(t){this.querySelector("ia-mgc-edit-payment-method").paymentMethodUpdated(t)}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}dateUpdates(t){this.querySelector("ia-mgc-edit-date").dateUpdated(t)}render(){return b`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${t=>{var e;const{amount:i,baseAmount:n,coverFees:s,feeCovered:r}=t.detail;this.plan&&((e=this.updateAmountHandler)===null||e===void 0||e.call(this,this.plan,{amount:i,baseAmount:n,coverFees:s,feeCovered:r}))}}
        ></ia-mgc-edit-plan-amount>
        ${this.canEditPaymentMethod?b`
              <hr />
              <ia-mgc-edit-payment-method
                .plan=${this.plan}
                .patronEmail=${this.patronEmail}
                .paymentConfig=${this.paymentConfig}
                @UpdatePaymentMethod=${t=>{const{newPaymentMethodRequest:e}=t.detail;this.plan&&this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{plan:this.plan,newPaymentMethodRequest:e}}))}}
              >
              </ia-mgc-edit-payment-method>
            `:""}
        <hr />
        <ia-mgc-edit-date
          @updateDate=${t=>{const{newDate:e}=t.detail;this.plan&&this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:e}}))}}
          .plan=${this.plan}
        ></ia-mgc-edit-date>
        <hr />
        <ia-mgc-cancel-plan
          .plan=${this.plan}
          @cancelPlan=${()=>{this.dispatchEvent(new Event("cancelPlan"))}}
        ></ia-mgc-cancel-plan>
        <hr />
        <p class="email-edit-plan">
          Need to update your plan further? Please email us at
          <a href=${this.mailToText()}>donations@archive.org</a>.
        </p>
      </section>
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};v([A({type:Object})],$t.prototype,"plan",void 0);v([A({type:String})],$t.prototype,"patronEmail",void 0);v([A({type:Boolean})],$t.prototype,"canEditPaymentMethod",void 0);v([A({type:Object})],$t.prototype,"updateAmountHandler",void 0);v([A({type:Object})],$t.prototype,"paymentConfig",void 0);v([bt("#braintree-creditcard")],$t.prototype,"braintreeNumberInput",void 0);v([bt("#braintree-expiration")],$t.prototype,"braintreeExpirationDateInput",void 0);v([bt("#braintree-cvv")],$t.prototype,"braintreeCVVInput",void 0);v([bt("#braintree-error-message")],$t.prototype,"braintreeErrorMessage",void 0);$t=v([at("ia-mgc-edit-plan")],$t);var Pt;(function(o){o.welcome="ShowWelcome",o.receipts="ShowReceipts",o.plans="ShowPlans",o.editPlan="ShowEditForm"})(Pt||(Pt={}));let ut=class extends tt{constructor(){super(...arguments),this.patronName="",this.patronEmail="",this.canEditPaymentMethod=!1,this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!0,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:mt.Development,paymentClients:void 0,endpointManager:{}}}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:n=""}=t,s=(e=i?.id)!==null&&e!==void 0?e:n;if(t.action==="paymentMethodUpdate"){this.editFormElement.paymentMethodUpdates(t.status);return}if(t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="dateUpdate"){this.editingThisPlan=i,this.editFormElement.dateUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:s,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return b`
      ${this.sectionTitle}
      ${t?b`<ia-mgc-edit-plan
            .canEditPaymentMethod=${this.canEditPaymentMethod}
            .patronEmail=${this.patronEmail}
            .plan=${this.editingThisPlan}
            .paymentConfig=${this.paymentConfig}
            @cancelPlan=${()=>{this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:this.editingThisPlan}}))}}
            .updateAmountHandler=${(e,i)=>{console.log("updateAmount",e,{...i}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:e,amountOptions:i}}))}}
            @updateDate=${e=>{const{newDate:i}=e.detail;console.log("updateDate",i),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.editingThisPlan,newDate:i}}))}}
            @UpdatePaymentMethod=${e=>{const{newPaymentMethodRequest:i}=e.detail;console.log("UpdatePaymentMethod",i),console.warn("UPDATE PAYMENT METHOD",{plan:this.editingThisPlan,newPaymentMethodRequest:i}),this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{plan:this.editingThisPlan,newPaymentMethodRequest:i}}))}}
          >
          </ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let t="",e="",i=b``;const n=b`
      <ia-mgc-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(Pt.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,s=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=b`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?Pt.plans:Pt.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=b`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?Pt.plans:Pt.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;default:t="Monthly Giving Circle",e="heart",s&&(i=n);break}return b`
      <ia-mgc-title titleStyle=${e}>
        <span slot="title">${t}</span>
        <span slot="action">${i}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay==="receipts"?b`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></ia-mgc-receipts>
      `:b`
      ${this.viewToDisplay==="plans"&&this.plans.length?b`
            <ia-mgc-plans
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(Pt.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:b`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};v([A({type:String})],ut.prototype,"patronName",void 0);v([A({type:String})],ut.prototype,"patronEmail",void 0);v([A({type:Boolean})],ut.prototype,"canEditPaymentMethod",void 0);v([A({type:Array})],ut.prototype,"receipts",void 0);v([A({type:Array})],ut.prototype,"updates",void 0);v([A({type:Array})],ut.prototype,"plans",void 0);v([A({type:Object})],ut.prototype,"editingThisPlan",void 0);v([A({type:String,reflect:!0})],ut.prototype,"viewToDisplay",void 0);v([A({type:Boolean,reflect:!0})],ut.prototype,"canEdit",void 0);v([A({type:Object})],ut.prototype,"paymentConfig",void 0);ut=v([at("ia-monthly-giving-circle")],ut);class Ro{constructor(t){this.receipt=t}get amount(){var t;return ar(this.receipt.total_amount,(t=this.receipt.currency)!==null&&t!==void 0?t:"USD")}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}}class K_{constructor(t){var e;this.plan=t,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get amount(){return this.plan.amount}get amountFormatted(){return ar(this.plan.amount,this.currency)}get payment(){return this.plan.btdata}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}get nextBillingDate(){var t,e,i;return(i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:""}setNextBillingDate(t){this.payment&&(this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=t)}formatDateUTC(t){const e=new Date(t);return Number.isNaN(e.getTime())?"Invalid date":new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(e)}get nextBillingDateLocale(){var t,e;const i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate.date)!==null&&e!==void 0?e:"";return i?this.formatDateUTC(i):"not found"}get lastBillingDateLocale(){var t,e;const i=(e=(t=this.payment)===null||t===void 0?void 0:t.lastBillingDate.date)!==null&&e!==void 0?e:"";return i?this.formatDateUTC(i):""}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(t){const e=this.plan.processor_id;this.plan.processor_id=t,this.plan.oldProcessorId=e}setNewPaymentMethod(t){var e,i,n;const s=this.payment,{details:r,type:d}=t.paymentMethodInfo,a=t.paymentProvider===S.PayPal,l=t.paymentProvider===S.Venmo,h=(i=(e=r.email)!==null&&e!==void 0?e:r.description)!==null&&i!==void 0?i:"not_found";let c;a?c={...this.plan.btdata,paymentMethodType:"PayPal",paypalEmail:h,cardType:null,last4:null,expirationMonth:null,expirationYear:null}:l?c={...this.plan.btdata,paymentMethodType:S.Venmo,venmoUsername:r.username,cardType:null,last4:null,expirationMonth:null,expirationYear:null}:c={...this.plan.btdata,...r,paymentMethodType:d,last4:(n=r.lastFour)!==null&&n!==void 0?n:"unknown"},this.plan.old_btData=s,this.plan.btdata=c}}let At=[];const en=new Date;en.setDate(en.getDate()+25);en.setMinutes(0);en.setSeconds(0);en.setMilliseconds(0);console.log("nextPaymentIn25Days",en.toISOString());const on=new Date;on.setMinutes(0);on.setSeconds(0);on.setMilliseconds(0);on.setDate(1);console.log("lastPaymentInTheSameMonth",on.toISOString());const kd=new Date;kd.setMonth(kd.getMonth()+1);const sn=new Date(kd);sn.setMinutes(0);sn.setSeconds(0);sn.setMilliseconds(0);sn.setDate(1);console.log("nextPaymentFirstOfMonth",sn.toISOString());const Z_=new Date;Z_.setHours(0,0,0,0);const lh=new Date;lh.setHours(0,0,0,0);lh.setDate(0);const No=new Date;No.setHours(0,0,0,0);No.setMonth(No.getMonth()+1);No.setDate(0);const p0={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10.3,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:lh.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:No.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"PayPal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:2.5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:on.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:sn.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},T$=Object.keys(p0).map(o=>new K_(p0[o])),k$=[new Ro({currency:"USD",total_amount:1,net_amount:1,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-1",token:"foo-token-1",is_test:!1}),new Ro({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-4",token:"foo-token-4",is_test:!1}),new Ro({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,fee_covered:!0,date:new Date("2022-09-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new Ro({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})],G_={referrer:"",origin:"",braintreeAuthToken:"sandbox_x634jsj7_7zybks4ybp63pbmd",venmoProfileId:"1953896702662410263",googlePayMerchantId:"",environment:"dev",paymentClients:new Y0(new U$,mt.Development),endpointManager:{submitData:async o=>{debugger},donationSuccessful:o=>{debugger}}};let ll=!0;const Jt=document.getElementById("interaction-status-area"),Y_=()=>Math.floor(Math.random()+.5),Nr=()=>document.getElementById("force-successful-requests").checked?1:Y_(),P=document.querySelector("ia-monthly-giving-circle");P.paymentConfig=G_;P.receipts=k$;P.plans=T$;P.addEventListener("EmailReceiptRequest",o=>{const{donation:t}=o.detail,e=Nr()===1,i=e?"success":"fail",n=e?1500:5e3;Jt.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${n} ms.`;const r={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};At=[r,...At],setTimeout(()=>{P.updateReceived(r),console.log("EmailReceiptRequest index.html ----",r),Jt.innerText=""},n)});P.addEventListener("cancelPlan",async o=>{const{plan:t}=o.detail,i=P.plans.map(n=>(n.plan.token===t.plan.token&&(console.log("p 2 plan",n,t),n.cancelPlan()),n));P.plans=i,await P.updateComplete,console.log("plan cancelled & plan list updated",P.plans)});P.addEventListener("updateAmount",async o=>{const{plan:t,amountOptions:e}=o.detail,i=Nr()===1,n=i?"success":"fail",s=i?1500:5e3;Jt.innerText=`Amount Update Request received: will return ${n} in ${s} ms - Details: ${JSON.stringify(e)}`;const r=n==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const d={message:r,status:n,plan:t,donationId:t.id,action:"amountUpdate"};At=[d,...At],setTimeout(()=>{P.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Jt.innerText=""},s)});P.addEventListener("updateDate",o=>{const{newDate:t,plan:e}=o.detail,i=Nr()===1,n=i?"success":"fail",s=i?1500:5e3;Jt.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(e.id)} -- Update will return ${n} in ${s} ms`;const r=n==="success"?"Date updated":"Date failed to update";i&&(e.setNextBillingDate(t),e.setNewProcessorId("new-processor_id@1"));const d={message:r,status:n,plan:e,donationId:e.id,action:"dateUpdate"};At=[d,...At],setTimeout(()=>{P.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Jt.innerText=""},s)});P.addEventListener("UpdatePaymentMethod",o=>{console.log("UpdatePaymentMethod received:",o.detail);const{plan:t,newPaymentMethodRequest:e}=o.detail,i=e?.paymentProvider==="PayPal",n=i?!0:Nr()===1,s=n?"success":"fail",r=n?1500:4e3,d=e?.paymentMethodInfo?.details?.email,a=e?.paymentMethodInfo?.nonce,l=i?`PayPal (${d}, nonce: ${a})`:"payment method";Jt.innerText=`Updating ${l} for plan: ${t?t.id:"no plan"} -- Update will return ${s} in ${r} ms`;const h=s==="success"?"Payment method updated":"Payment method failed to update";n&&t&&(console.log("demo - setting new payment method",e),t.setNewPaymentMethod(e));const c={message:h,status:s,plan:t,donationId:t?t.id:null,action:"paymentMethodUpdate"};At=[c,...At],setTimeout(()=>{P.updateReceived(c),console.log("UpdatePaymentMethod --- index.html ----",c),Jt.innerText=""},r)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(ll){P.receipts=[],ll=!1;return}P.receipts=k$,await P.updateComplete,ll=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{At=[],P.updates=At,await P.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{P.plans=P.plans.length?[]:T$,await P.updateComplete});document.getElementById("toggle-prefilled-email").addEventListener("click",async()=>{P.patronEmail=P.patronEmail?"":"you@thisemail.com",await P.updateComplete});document.getElementById("toggle-edit-payment-method").addEventListener("click",async()=>{P.canEditPaymentMethod=!P.canEditPaymentMethod,await P.updateComplete});
