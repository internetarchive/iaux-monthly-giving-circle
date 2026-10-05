import{LazyLoaderService as cm}from"https://esm.archive.org/@internetarchive/lazy-loader-service";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function m(o,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(s=(n<3?r(s):n>3?r(t,e,s):r(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}function y(o,t,e,i){function n(s){return s instanceof e?s:new e(function(r){r(s)})}return new(e||(e=Promise))(function(s,r){function c(d){try{l(i.next(d))}catch(h){r(h)}}function a(d){try{l(i.throw(d))}catch(h){r(h)}}function l(d){d.done?s(d.value):n(d.value).then(c,a)}l((i=i.apply(o,t||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=globalThis,_l=ho.ShadowRoot&&(ho.ShadyCSS===void 0||ho.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Al=Symbol(),Jl=new WeakMap;let Au=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Al)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(_l&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Jl.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Jl.set(e,t))}return t}toString(){return this.cssText}};const hm=o=>new Au(typeof o=="string"?o:o+"",void 0,Al),mt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new Au(e,o,Al)},um=(o,t)=>{if(_l)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=ho.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},Ql=_l?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return hm(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pm,defineProperty:mm,getOwnPropertyDescriptor:vm,getOwnPropertyNames:gm,getOwnPropertySymbols:ym,getPrototypeOf:$m}=Object,Cs=globalThis,Xl=Cs.trustedTypes,fm=Xl?Xl.emptyScript:"",_m=Cs.reactiveElementPolyfillSupport,vn=(o,t)=>o,Mo={toAttribute(o,t){switch(t){case Boolean:o=o?fm:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},bl=(o,t)=>!pm(o,t),td={attribute:!0,type:String,converter:Mo,reflect:!1,useDefault:!1,hasChanged:bl};Symbol.metadata??=Symbol("metadata"),Cs.litPropertyMetadata??=new WeakMap;let je=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=td){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&mm(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=vm(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){const c=n?.call(this);s?.call(this,r),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??td}static _$Ei(){if(this.hasOwnProperty(vn("elementProperties")))return;const t=$m(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(vn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vn("properties"))){const e=this.properties,i=[...gm(e),...ym(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Ql(n))}else t!==void 0&&e.push(Ql(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return um(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:Mo).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Mo;this._$Em=n;const c=r.fromAttribute(e,s.type);this[n]=c??this._$Ej?.get(n)??c,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){const r=this.constructor;if(n===!1&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??bl)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:r}=s,c=this[n];r!==!0||this._$AL.has(n)||c===void 0||this.C(n,void 0,s,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};je.elementStyles=[],je.shadowRootOptions={mode:"open"},je[vn("elementProperties")]=new Map,je[vn("finalized")]=new Map,_m?.({ReactiveElement:je}),(Cs.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=globalThis,ed=o=>o,xo=Sl.trustedTypes,id=xo?xo.createPolicy("lit-html",{createHTML:o=>o}):void 0,bu="$lit$",Ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Su="?"+Ct,Am=`<${Su}>`,Ee=document,yn=()=>Ee.createComment(""),$n=o=>o===null||typeof o!="object"&&typeof o!="function",Cl=Array.isArray,bm=o=>Cl(o)||typeof o?.[Symbol.iterator]=="function",Ws=`[ 	
\f\r]`,Di=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nd=/-->/g,od=/>/g,Vt=RegExp(`>|${Ws}(?:([^\\s"'>=/]+)(${Ws}*=${Ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sd=/'/g,rd=/"/g,Cu=/^(?:script|style|textarea|title)$/i,Sm=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),S=Sm(1),We=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),ad=new WeakMap,le=Ee.createTreeWalker(Ee,129);function Eu(o,t){if(!Cl(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return id!==void 0?id.createHTML(t):t}const Cm=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",r=Di;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Di?d[1]==="!--"?r=nd:d[1]!==void 0?r=od:d[2]!==void 0?(Cu.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Vt):d[3]!==void 0&&(r=Vt):r===Vt?d[0]===">"?(r=n??Di,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Vt:d[3]==='"'?rd:sd):r===rd||r===sd?r=Vt:r===nd||r===od?r=Di:(r=Vt,n=void 0);const p=r===Vt&&o[c+1].startsWith("/>")?" ":"";s+=r===Di?a+Am:h>=0?(i.push(l),a.slice(0,h)+bu+a.slice(h)+Ct+p):a+Ct+(h===-2?c:p)}return[Eu(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let da=class wu{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Cm(t,e);if(this.el=wu.createElement(l,i),le.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=le.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(bu)){const u=d[r++],p=n.getAttribute(h).split(Ct),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:_[2],strings:p,ctor:_[1]==="."?wm:_[1]==="?"?Pm:_[1]==="@"?Mm:Es}),n.removeAttribute(h)}else h.startsWith(Ct)&&(a.push({type:6,index:s}),n.removeAttribute(h));if(Cu.test(n.tagName)){const h=n.textContent.split(Ct),u=h.length-1;if(u>0){n.textContent=xo?xo.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],yn()),le.nextNode(),a.push({type:2,index:++s});n.append(h[u],yn())}}}else if(n.nodeType===8)if(n.data===Su)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Ct,h+1))!==-1;)a.push({type:7,index:s}),h+=Ct.length-1}s++}}static createElement(t,e){const i=Ee.createElement("template");return i.innerHTML=t,i}};function Ge(o,t,e=o,i){if(t===We)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const s=$n(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=Ge(o,n._$AS(o,t.values),n,i)),t}let Em=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Ee).importNode(e,!0);le.currentNode=n;let s=le.nextNode(),r=0,c=0,a=i[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new El(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new xm(s,this,t)),this._$AV.push(l),a=i[++c]}r!==a?.index&&(s=le.nextNode(),r++)}return le.currentNode=Ee,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},El=class Pu{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ge(this,t,e),$n(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==We&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):bm(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&$n(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ee.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=da.createElement(Eu(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const s=new Em(n,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=ad.get(t.strings);return e===void 0&&ad.set(t.strings,e=new da(t)),e}k(t){Cl(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Pu(this.O(yn()),this.O(yn()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=ed(t).nextSibling;ed(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},Es=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ge(this,t,e,0),r=!$n(t)||t!==this._$AH&&t!==We,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ge(this,c[i+a],e,a),l===We&&(l=this._$AH[a]),r||=!$n(l)||l!==this._$AH[a],l===C?t=C:t!==C&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},wm=class extends Es{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}},Pm=class extends Es{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}},Mm=class extends Es{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=Ge(this,t,e,0)??C)===We)return;const i=this._$AH,n=t===C&&i!==C||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==C&&(i===C||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},xm=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ge(this,t)}};const Tm=Sl.litHtmlPolyfillSupport;Tm?.(da,El),(Sl.litHtmlVersions??=[]).push("3.3.3");const km=(o,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=e?.renderBefore??null;i._$litPart$=n=new El(t.insertBefore(yn(),s),s,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wl=globalThis;let J=class extends je{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=km(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return We}};J._$litElement$=!0,J.finalized=!0,wl.litElementHydrateSupport?.({LitElement:J});const Im=wl.litElementPolyfillSupport;Im?.({LitElement:J});(wl.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hm={attribute:!0,type:String,converter:Mo,reflect:!1,hasChanged:bl},Um=(o=Hm,t,e)=>{const{kind:i,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),i==="accessor"){const{name:r}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,a,o,!0,c)},init(c){return c!==void 0&&this.C(r,void 0,o,c),c}}}if(i==="setter"){const{name:r}=e;return function(c){const a=this[r];t.call(this,c),this.requestUpdate(r,a,o,!0,c)}}throw Error("Unsupported decorator location: "+i)};function f(o){return(t,e)=>typeof e=="object"?Um(o,t,e):((i,n,s)=>{const r=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(n,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mu(o){return f({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nm=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(o,t){return(e,i,n)=>{const s=r=>r.renderRoot?.querySelector(o)??null;return Nm(e,i,{get(){return s(this)}})}}const Dm="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let Ke=class extends J{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return S`
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
          <a class="link" href=${Dm}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};Ke.styles=mt`
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
  `;m([f({type:String})],Ke.prototype,"patronName",void 0);m([f({type:String})],Ke.prototype,"baseHost",void 0);m([f({type:String})],Ke.prototype,"defaultMonthlyDonationAmount",void 0);Ke=m([ot("ia-mgc-welcome")],Ke);class eo{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class io{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class Fm{constructor(t){this.customer=t.customer,this.billing=t.billing}}var b;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(b||(b={}));class D{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return D.calculateFeeAmount(this.amount)}get total(){return D.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.0219+.29;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var E;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(E||(E={}));class xu{constructor(t){this.logged_in_user=t?.logged_in_user,this.referrer=t?.referrer,this.fee_amount_covered=t?.fee_amount_covered,this.origin=t?.origin}}class Rm{constructor(t){this.customFields=new xu,this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.recaptchaToken=t.recaptchaToken,this.customerId=t.customerId,this.deviceData=t.deviceData,this.upsellOnetimeTransactionId=t.upsellOnetimeTransactionId,this.bin=t.bin,this.binName=t.binName,this.amount=t.amount,this.donationType=t.donationType,this.customer=t.customer,this.billing=t.billing,t.customFields&&(this.customFields=t.customFields)}}class Om{constructor(t){this.id=t.id}}class Lm{constructor(t){this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.amount=t.amount,this.donationType=t.donationType,this.transaction_id=t.transaction_id,this.customer_id=t.customer_id,this.customer=new io(t.customer),this.billing=new eo(t.billing),t.subscription&&(this.subscription=new Om(t.subscription))}}class Bm{constructor(t){this.code=t.code,this.message=t.message}}class zm{constructor(t){this.message=t.message;const{errors:e=[]}=t;this.errors=e.map(i=>new Bm(i))}}class Vm{constructor(t){this.success=t.success,this.success?this.value=new Lm(t.value):this.value=new zm(t.value)}}const ws=[5,10,25,50,100,500,1e3],Tu=new D({donationType:E.OneTime,amount:10,coverFees:!1});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const uo=window,Pl=uo.ShadowRoot&&(uo.ShadyCSS===void 0||uo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ku=Symbol(),ld=new WeakMap;let jm=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ku)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ld.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ld.set(e,t))}return t}toString(){return this.cssText}};const qm=o=>new jm(typeof o=="string"?o:o+"",void 0,ku),Wm=(o,t)=>{Pl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=uo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},dd=Pl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return qm(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gs;const To=window,cd=To.trustedTypes,Gm=cd?cd.emptyScript:"",hd=To.reactiveElementPolyfillSupport,ca={toAttribute(o,t){switch(t){case Boolean:o=o?Gm:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Iu=(o,t)=>t!==o&&(t==t||o==o),Ks={attribute:!0,type:String,converter:ca,reflect:!1,hasChanged:Iu},ha="finalized";let Fi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ks){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ks}static finalize(){if(this.hasOwnProperty(ha))return!1;this[ha]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(dd(n))}else t!==void 0&&e.push(dd(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Wm(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ks){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ca).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ca;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Iu)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Fi[ha]=!0,Fi.elementProperties=new Map,Fi.elementStyles=[],Fi.shadowRootOptions={mode:"open"},hd?.({ReactiveElement:Fi}),((Gs=To.reactiveElementVersions)!==null&&Gs!==void 0?Gs:To.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zs;const ko=window,Ze=ko.trustedTypes,ud=Ze?Ze.createPolicy("lit-html",{createHTML:o=>o}):void 0,ua="$lit$",Et=`lit$${(Math.random()+"").slice(9)}$`,Hu="?"+Et,Km=`<${Hu}>`,we=document,Io=()=>we.createComment(""),fn=o=>o===null||typeof o!="object"&&typeof o!="function",Uu=Array.isArray,Zm=o=>Uu(o)||typeof o?.[Symbol.iterator]=="function",Ys=`[ 	
\f\r]`,Ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pd=/-->/g,md=/>/g,jt=RegExp(`>|${Ys}(?:([^\\s"'>=/]+)(${Ys}*=${Ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vd=/'/g,gd=/"/g,Nu=/^(?:script|style|textarea|title)$/i,_n=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),yd=new WeakMap,de=we.createTreeWalker(we,129,null,!1);function Du(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ud!==void 0?ud.createHTML(t):t}const Ym=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Ri;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Ri?d[1]==="!--"?r=pd:d[1]!==void 0?r=md:d[2]!==void 0?(Nu.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=jt):d[3]!==void 0&&(r=jt):r===jt?d[0]===">"?(r=n??Ri,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?jt:d[3]==='"'?gd:vd):r===gd||r===vd?r=jt:r===pd||r===md?r=Ri:(r=jt,n=void 0);const p=r===jt&&o[c+1].startsWith("/>")?" ":"";s+=r===Ri?a+Km:h>=0?(i.push(l),a.slice(0,h)+ua+a.slice(h)+Et+p):a+Et+(h===-2?(i.push(void 0),c):p)}return[Du(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let pa=class Fu{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Ym(t,e);if(this.el=Fu.createElement(l,i),de.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=de.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(ua)||u.startsWith(Et)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ua).split(Et),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Qm:g[1]==="?"?tv:g[1]==="@"?ev:Ps})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(Nu.test(n.tagName)){const h=n.textContent.split(Et),u=h.length-1;if(u>0){n.textContent=Ze?Ze.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Io()),de.nextNode(),a.push({type:2,index:++s});n.append(h[u],Io())}}}else if(n.nodeType===8)if(n.data===Hu)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Et,h+1))!==-1;)a.push({type:7,index:s}),h+=Et.length-1}s++}}static createElement(t,e){const i=we.createElement("template");return i.innerHTML=t,i}};function Ye(o,t,e=o,i){var n,s,r,c;if(t===_n)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=fn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ye(o,a._$AS(o,t.values),a,i)),t}let Jm=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:we).importNode(i,!0);de.currentNode=s;let r=de.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Ru(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new iv(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=de.nextNode(),c++)}return de.currentNode=we,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ru=class Ou{constructor(t,e,i,n){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ye(this,t,e),fn(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==_n&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zm(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&fn(this._$AH)?this._$AA.nextSibling.data=t:this.$(we.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=pa.createElement(Du(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Jm(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=yd.get(t.strings);return e===void 0&&yd.set(t.strings,e=new pa(t)),e}T(t){Uu(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Ou(this.k(Io()),this.k(Io()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ps=class{constructor(t,e,i,n,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ye(this,t,e,0),r=!fn(t)||t!==this._$AH&&t!==_n,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ye(this,c[i+a],e,a),l===_n&&(l=this._$AH[a]),r||(r=!fn(l)||l!==this._$AH[a]),l===R?t=R:t!==R&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qm=class extends Ps{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}};const Xm=Ze?Ze.emptyScript:"";let tv=class extends Ps{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Xm):this.element.removeAttribute(this.name)}},ev=class extends Ps{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ye(this,t,e,0))!==null&&i!==void 0?i:R)===_n)return;const n=this._$AH,s=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},iv=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ye(this,t)}};const $d=ko.litHtmlPolyfillSupport;$d?.(pa,Ru),((Zs=ko.litHtmlVersions)!==null&&Zs!==void 0?Zs:ko.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const po=window,Ml=po.ShadowRoot&&(po.ShadyCSS===void 0||po.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xl=Symbol(),fd=new WeakMap;let Lu=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==xl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ml&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=fd.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&fd.set(e,t))}return t}toString(){return this.cssText}};const nv=o=>new Lu(typeof o=="string"?o:o+"",void 0,xl),v=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new Lu(e,o,xl)},ov=(o,t)=>{Ml?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=po.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},_d=Ml?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return nv(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Js;const Ho=window,Ad=Ho.trustedTypes,sv=Ad?Ad.emptyScript:"",bd=Ho.reactiveElementPolyfillSupport,ma={toAttribute(o,t){switch(t){case Boolean:o=o?sv:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Bu=(o,t)=>t!==o&&(t==t||o==o),Qs={attribute:!0,type:String,converter:ma,reflect:!1,hasChanged:Bu},va="finalized";let qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Qs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qs}static finalize(){if(this.hasOwnProperty(va))return!1;this[va]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(_d(n))}else t!==void 0&&e.push(_d(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ov(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Qs){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ma).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ma;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Bu)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};qe[va]=!0,qe.elementProperties=new Map,qe.elementStyles=[],qe.shadowRootOptions={mode:"open"},bd?.({ReactiveElement:qe}),((Js=Ho.reactiveElementVersions)!==null&&Js!==void 0?Js:Ho.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xs;const Uo=window,Je=Uo.trustedTypes,Sd=Je?Je.createPolicy("lit-html",{createHTML:o=>o}):void 0,ga="$lit$",wt=`lit$${(Math.random()+"").slice(9)}$`,zu="?"+wt,rv=`<${zu}>`,Pe=document,An=()=>Pe.createComment(""),bn=o=>o===null||typeof o!="object"&&typeof o!="function",Vu=Array.isArray,av=o=>Vu(o)||typeof o?.[Symbol.iterator]=="function",tr=`[ 	
\f\r]`,Oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cd=/-->/g,Ed=/>/g,qt=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wd=/'/g,Pd=/"/g,ju=/^(?:script|style|textarea|title)$/i,lv=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),$=lv(1),Qe=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Md=new WeakMap,ce=Pe.createTreeWalker(Pe,129,null,!1);function qu(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sd!==void 0?Sd.createHTML(t):t}const dv=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Oi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Oi?d[1]==="!--"?r=Cd:d[1]!==void 0?r=Ed:d[2]!==void 0?(ju.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=qt):d[3]!==void 0&&(r=qt):r===qt?d[0]===">"?(r=n??Oi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?qt:d[3]==='"'?Pd:wd):r===Pd||r===wd?r=qt:r===Cd||r===Ed?r=Oi:(r=qt,n=void 0);const p=r===qt&&o[c+1].startsWith("/>")?" ":"";s+=r===Oi?a+rv:h>=0?(i.push(l),a.slice(0,h)+ga+a.slice(h)+wt+p):a+wt+(h===-2?(i.push(void 0),c):p)}return[qu(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let ya=class Wu{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=dv(t,e);if(this.el=Wu.createElement(l,i),ce.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=ce.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(ga)||u.startsWith(wt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ga).split(wt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?hv:g[1]==="?"?pv:g[1]==="@"?mv:Ms})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(ju.test(n.tagName)){const h=n.textContent.split(wt),u=h.length-1;if(u>0){n.textContent=Je?Je.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],An()),ce.nextNode(),a.push({type:2,index:++s});n.append(h[u],An())}}}else if(n.nodeType===8)if(n.data===zu)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(wt,h+1))!==-1;)a.push({type:7,index:s}),h+=wt.length-1}s++}}static createElement(t,e){const i=Pe.createElement("template");return i.innerHTML=t,i}};function Xe(o,t,e=o,i){var n,s,r,c;if(t===Qe)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=bn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Xe(o,a._$AS(o,t.values),a,i)),t}let cv=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Pe).importNode(i,!0);ce.currentNode=s;let r=ce.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Tl(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new vv(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=ce.nextNode(),c++)}return ce.currentNode=Pe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Tl=class Gu{constructor(t,e,i,n){var s;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Xe(this,t,e),bn(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==Qe&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):av(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&bn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Pe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ya.createElement(qu(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new cv(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Md.get(t.strings);return e===void 0&&Md.set(t.strings,e=new ya(t)),e}T(t){Vu(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Gu(this.k(An()),this.k(An()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ms=class{constructor(t,e,i,n,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Xe(this,t,e,0),r=!bn(t)||t!==this._$AH&&t!==Qe,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Xe(this,c[i+a],e,a),l===Qe&&(l=this._$AH[a]),r||(r=!bn(l)||l!==this._$AH[a]),l===T?t=T:t!==T&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},hv=class extends Ms{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}};const uv=Je?Je.emptyScript:"";let pv=class extends Ms{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,uv):this.element.removeAttribute(this.name)}},mv=class extends Ms{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Xe(this,t,e,0))!==null&&i!==void 0?i:T)===Qe)return;const n=this._$AH,s=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==T&&(n===T||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},vv=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Xe(this,t)}};const xd=Uo.litHtmlPolyfillSupport;xd?.(ya,Tl),((Xs=Uo.litHtmlVersions)!==null&&Xs!==void 0?Xs:Uo.litHtmlVersions=[]).push("2.8.0");const gv=(o,t,e)=>{var i,n;const s=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=s._$litPart$;if(r===void 0){const c=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new Tl(t.insertBefore(An(),c),c,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er,ir;let I=class extends qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gv(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Qe}};I.finalized=!0,I._$litElement$=!0,(er=globalThis.litElementHydrateSupport)===null||er===void 0||er.call(globalThis,{LitElement:I});const Td=globalThis.litElementPolyfillSupport;Td?.({LitElement:I});((ir=globalThis.litElementVersions)!==null&&ir!==void 0?ir:globalThis.litElementVersions=[]).push("3.3.3");const yv=$`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class $v extends I{static get styles(){return v`
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
    `}render(){return yv}}customElements.define("ia-icon-donate",$v);let ti=class extends J{constructor(){super(...arguments),this.isDisabled=!1}render(){return S`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};ti.styles=mt`
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
      border-color: #f18286;
      background-color: #d9534f;
      color: #fff;
    }

    :host(.link) button {
      color: var(--link-button-color, #4b64ff);
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
      opacity: var(--disabled-button-opacity, 0.5);
      background-color: var(--primaryDisableCTAFill, #767676);
      border: 1px solid var(--secondaryCTABorder, #999);
    }
  `;m([f({type:Boolean,reflect:!0})],ti.prototype,"isDisabled",void 0);m([f({type:Object})],ti.prototype,"clickHandler",void 0);m([ft("button")],ti.prototype,"button",void 0);ti=m([ot("ia-mgc-button")],ti);let Sn=class extends J{constructor(){super(...arguments),this.plans=[],this.canEdit=!0}render(){return S`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,n,s,r,c,a,l,d,h,u,p,_,g,N,st;let rt=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";rt==="creditCard"&&(rt="Credit card");const Ni=(s=(n=t.payment)===null||n===void 0?void 0:n.cardType)!==null&&s!==void 0?s:"Card type not found",no=!((r=t.payment)===null||r===void 0)&&r.last4?`...${(c=t.payment)===null||c===void 0?void 0:c.last4}`:"CC number not found";return S`
              <li class=${`${t.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${t.currency} ${t.amountFormatted}/month</p>
                    ${t.isTest?S`<p class="is-test">(Test payment)</p>`:C}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${rt}</p>
                    ${!((a=t.payment)===null||a===void 0)&&a.cardType&&(!((l=t.payment)===null||l===void 0)&&l.last4)?S`<p>${Ni} ${no}</p>`:C}
                    ${((d=t.payment)===null||d===void 0?void 0:d.paymentMethodType)===b.PayPal?S`<p>
                          Paypal email:
                          <a href=${`mailto:${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}`}
                            >${(u=t.payment)===null||u===void 0?void 0:u.paypalEmail}</a
                          >
                        </p>`:C}
                    ${((p=t.payment)===null||p===void 0?void 0:p.paymentMethodType)===b.Venmo?S`<p>
                          Venmo username:
                          <a href=${`mailto:${(_=t.payment)===null||_===void 0?void 0:_.venmoUsername}`}
                            >${(g=t.payment)===null||g===void 0?void 0:g.venmoUsername}</a
                          >
                        </p>`:C}
                    ${!((N=t.payment)===null||N===void 0)&&N.expirationMonth&&(!((st=t.payment)===null||st===void 0)&&st.expirationYear)?S`<p>
                          Expires:
                          ${t.payment.expirationMonth}/${t.payment.expirationYear}
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
    `}planCTA(t){if(!this.canEdit)return S`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}>donations@archive.org</a>.
      </p>`;const e=t.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return S`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${t.plan.isCancelled}
      .clickHandler=${async(i,n)=>{n.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:t}}))}}
      >${e}</ia-mgc-button
    >`}};Sn.styles=mt`
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
      --primaryDisableCTAFill: transparent;
      --secondaryCTABorder: none;
      /* read "Plan is cancelled" as plain status text, in the card's own color */
      --link-button-color: currentColor;
      --disabled-button-opacity: 1;
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
  `;m([f({type:Array})],Sn.prototype,"plans",void 0);m([f({type:Boolean,reflect:!0})],Sn.prototype,"canEdit",void 0);Sn=m([ot("ia-mgc-plans")],Sn);let No=class extends J{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?S` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:C}render(){return S`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};No.styles=mt`
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
  `;m([f({type:String})],No.prototype,"titleStyle",void 0);No=m([ot("ia-mgc-title")],No);let Cn=class extends J{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const n={...i},{id:s}=t;n[s]=t,this.receiptDispatcher={...n},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=CSS.escape(s),c=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${r} ia-mgc-button`);c.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return S`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],n=i?.emailStatus==="pending",s=!i||!i.emailStatus?C:S`<ia-mgc-update-status
                        .status=${i.emailStatus}
                        >${this.emailStatusMessageToDisplay(i)}</ia-mgc-update-status
                      >`;return S`
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
                          .clickHandler=${async(r,c)=>{if(!n&&(c.isDisabled=!0,await c.updateComplete),!n&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-mgc-button>
                        ${s}
                      </div>
                    </td>
                  </tr>
                `}):S`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};Cn.styles=mt`
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
  `;m([f({type:Array})],Cn.prototype,"receipts",void 0);m([f({type:Object})],Cn.prototype,"receiptDispatcher",void 0);Cn=m([ot("ia-mgc-receipts")],Cn);var ut;(function(o){o.Development="dev",o.Production="prod"})(ut||(ut={}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mo=window,kl=mo.ShadowRoot&&(mo.ShadyCSS===void 0||mo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ku=Symbol(),kd=new WeakMap;let fv=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ku)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(kl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=kd.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&kd.set(e,t))}return t}toString(){return this.cssText}};const _v=o=>new fv(typeof o=="string"?o:o+"",void 0,Ku),Av=(o,t)=>{kl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=mo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Id=kl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _v(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nr;const Do=window,Hd=Do.trustedTypes,bv=Hd?Hd.emptyScript:"",Ud=Do.reactiveElementPolyfillSupport,$a={toAttribute(o,t){switch(t){case Boolean:o=o?bv:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Zu=(o,t)=>t!==o&&(t==t||o==o),or={attribute:!0,type:String,converter:$a,reflect:!1,hasChanged:Zu},fa="finalized";let Li=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=or){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||or}static finalize(){if(this.hasOwnProperty(fa))return!1;this[fa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Id(n))}else t!==void 0&&e.push(Id(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Av(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=or){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:$a).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:$a;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Zu)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Li[fa]=!0,Li.elementProperties=new Map,Li.elementStyles=[],Li.shadowRootOptions={mode:"open"},Ud?.({ReactiveElement:Li}),((nr=Do.reactiveElementVersions)!==null&&nr!==void 0?nr:Do.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sr;const Fo=window,ei=Fo.trustedTypes,Nd=ei?ei.createPolicy("lit-html",{createHTML:o=>o}):void 0,_a="$lit$",Pt=`lit$${(Math.random()+"").slice(9)}$`,Yu="?"+Pt,Sv=`<${Yu}>`,Me=document,Ro=()=>Me.createComment(""),En=o=>o===null||typeof o!="object"&&typeof o!="function",Ju=Array.isArray,Cv=o=>Ju(o)||typeof o?.[Symbol.iterator]=="function",rr=`[ 	
\f\r]`,Bi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dd=/-->/g,Fd=/>/g,Wt=RegExp(`>|${rr}(?:([^\\s"'>=/]+)(${rr}*=${rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rd=/'/g,Od=/"/g,Qu=/^(?:script|style|textarea|title)$/i,wn=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Ld=new WeakMap,he=Me.createTreeWalker(Me,129,null,!1);function Xu(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nd!==void 0?Nd.createHTML(t):t}const Ev=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Bi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Bi?d[1]==="!--"?r=Dd:d[1]!==void 0?r=Fd:d[2]!==void 0?(Qu.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Wt):d[3]!==void 0&&(r=Wt):r===Wt?d[0]===">"?(r=n??Bi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Wt:d[3]==='"'?Od:Rd):r===Od||r===Rd?r=Wt:r===Dd||r===Fd?r=Bi:(r=Wt,n=void 0);const p=r===Wt&&o[c+1].startsWith("/>")?" ":"";s+=r===Bi?a+Sv:h>=0?(i.push(l),a.slice(0,h)+_a+a.slice(h)+Pt+p):a+Pt+(h===-2?(i.push(void 0),c):p)}return[Xu(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Aa=class tp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Ev(t,e);if(this.el=tp.createElement(l,i),he.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=he.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(_a)||u.startsWith(Pt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+_a).split(Pt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Pv:g[1]==="?"?xv:g[1]==="@"?Tv:xs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(Qu.test(n.tagName)){const h=n.textContent.split(Pt),u=h.length-1;if(u>0){n.textContent=ei?ei.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Ro()),he.nextNode(),a.push({type:2,index:++s});n.append(h[u],Ro())}}}else if(n.nodeType===8)if(n.data===Yu)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Pt,h+1))!==-1;)a.push({type:7,index:s}),h+=Pt.length-1}s++}}static createElement(t,e){const i=Me.createElement("template");return i.innerHTML=t,i}};function ii(o,t,e=o,i){var n,s,r,c;if(t===wn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=En(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ii(o,a._$AS(o,t.values),a,i)),t}let wv=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Me).importNode(i,!0);he.currentNode=s;let r=he.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new ep(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new kv(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=he.nextNode(),c++)}return he.currentNode=Me,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ep=class ip{constructor(t,e,i,n){var s;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ii(this,t,e),En(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==wn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Cv(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&En(this._$AH)?this._$AA.nextSibling.data=t:this.$(Me.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Aa.createElement(Xu(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new wv(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Ld.get(t.strings);return e===void 0&&Ld.set(t.strings,e=new Aa(t)),e}T(t){Ju(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new ip(this.k(Ro()),this.k(Ro()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},xs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ii(this,t,e,0),r=!En(t)||t!==this._$AH&&t!==wn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ii(this,c[i+a],e,a),l===wn&&(l=this._$AH[a]),r||(r=!En(l)||l!==this._$AH[a]),l===F?t=F:t!==F&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Pv=class extends xs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}};const Mv=ei?ei.emptyScript:"";let xv=class extends xs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,Mv):this.element.removeAttribute(this.name)}},Tv=class extends xs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ii(this,t,e,0))!==null&&i!==void 0?i:F)===wn)return;const n=this._$AH,s=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==F&&(n===F||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},kv=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ii(this,t)}};const Bd=Fo.litHtmlPolyfillSupport;Bd?.(Aa,ep),((sr=Fo.litHtmlVersions)!==null&&sr!==void 0?sr:Fo.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vt=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iv=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},Hv=(o,t,e)=>{t.constructor.createProperty(e,o)};function A(o){return(t,e)=>e!==void 0?Hv(o,t,e):Iv(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uv=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(c){o(c,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(o,t){return Uv({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;((ar=window.HTMLSlotElement)===null||ar===void 0?void 0:ar.prototype.assignedElements)!=null;/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */var Nv={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:Ov,fromCents:!1},np=function(t){return Math.round(t)},Il=function(t){return Math.pow(10,t)},Dv=function(t,e){return np(t/e)*e},Fv=/(\d)(?=(\d{3})+\b)/g,Rv=/(\d)(?=(\d\d)+\d\b)/g;function X(o,t){var e=this;if(!(e instanceof X))return new X(o,t);var i=Object.assign({},Nv,t),n=Il(i.precision),s=vo(o,i);e.intValue=s,e.value=s/n,i.increment=i.increment||1/n,i.useVedic?i.groups=Rv:i.groups=Fv,this.s=i,this.p=n}function vo(o,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=0,n=t.decimal,s=t.errorOnInvalid,r=t.precision,c=t.fromCents,a=Il(r),l=typeof o=="number",d=o instanceof X;if(d&&c)return o.intValue;if(l||d)i=d?o.value:o;else if(typeof o=="string"){var h=new RegExp("[^-\\d"+n+"]","g"),u=new RegExp("\\"+n,"g");i=o.replace(/\((.*)\)/,"-$1").replace(h,"").replace(u,"."),i=i||0}else{if(s)throw Error("Invalid Input");i=0}return c||(i*=a,i=i.toFixed(4)),e?np(i):i}function Ov(o,t){var e=t.pattern,i=t.negativePattern,n=t.symbol,s=t.separator,r=t.decimal,c=t.groups,a=(""+o).replace(/^-/,"").split("."),l=a[0],d=a[1];return(o.value>=0?e:i).replace("!",n).replace("#",l.replace(c,"$1"+s)+(d?r+d:""))}X.prototype={add:function(t){var e=this.intValue,i=this.s,n=this.p;return X((e+=vo(t,i))/(i.fromCents?1:n),i)},subtract:function(t){var e=this.intValue,i=this.s,n=this.p;return X((e-=vo(t,i))/(i.fromCents?1:n),i)},multiply:function(t){var e=this.intValue,i=this.s;return X((e*=t)/(i.fromCents?1:Il(i.precision)),i)},divide:function(t){var e=this.intValue,i=this.s;return X(e/=vo(t,i,!1),i)},distribute:function(t){for(var e=this.intValue,i=this.p,n=this.s,s=[],r=Math[e>=0?"floor":"ceil"](e/t),c=Math.abs(e-r*t),a=n.fromCents?1:i;t!==0;t--){var l=X(r/a,n);c-- >0&&(l=l[e>=0?"add":"subtract"](1/a)),s.push(l)}return s},dollars:function(){return~~this.value},cents:function(){var t=this.intValue,e=this.p;return~~(t%e)},format:function(t){var e=this.s;return typeof t=="function"?t(this,e):e.format(this,Object.assign({},e,t))},toString:function(){var t=this.intValue,e=this.p,i=this.s;return Dv(t/e,i.increment).toFixed(i.precision)},toJSON:function(){return this.value}};let Lv=()=>({events:{},emit(o,...t){(this.events[o]||[]).forEach(e=>e(...t))},on(o,t){return(this.events[o]=this.events[o]||[]).push(t),()=>this.events[o]=(this.events[o]||[]).filter(e=>e!==t)}});function Bv(o){return new Promise(t=>setTimeout(t,o))}var gt;(function(o){o.retryNumber="retryNumber",o.owner="owner",o.dynamicImportLoaded="dynamicImportLoaded",o.hasBeenRetried="hasBeenRetried"})(gt||(gt={}));const zd="lazyLoaderService";class zv{constructor(t){var e,i,n;this.emitter=Lv(),this.container=(e=t?.container)!==null&&e!==void 0?e:document.head,this.retryCount=(i=t?.retryCount)!==null&&i!==void 0?i:2,this.retryInterval=(n=t?.retryInterval)!==null&&n!==void 0?n:1}on(t,e){return this.emitter.on(t,e)}loadBundle(t){return y(this,void 0,void 0,function*(){let e,i;return t.module&&(e=this.loadScript({src:t.module,bundleType:"module"})),t.nomodule&&(i=this.loadScript({src:t.nomodule,bundleType:"nomodule"})),Promise.race([e,i])})}loadScript(t){return y(this,void 0,void 0,function*(){return this.doLoad(t)})}doLoad(t){var e;return y(this,void 0,void 0,function*(){const i=(e=t.retryNumber)!==null&&e!==void 0?e:0,n=`script[src='${t.src}'][async][${gt.owner}='${zd}'][${gt.retryNumber}='${i}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},t),{retryNumber:i})),this.container.appendChild(s)),new Promise((r,c)=>{if(s.getAttribute(gt.dynamicImportLoaded)){r();return}const a=t.scriptBeingRetried,l=s.onload||a?.onload;s.onload=h=>{l?.(h),s.setAttribute(gt.dynamicImportLoaded,"true"),r()};const d=s.onerror||a?.onerror;s.onerror=h=>y(this,void 0,void 0,function*(){const u=s.getAttribute(gt.hasBeenRetried);if(i<this.retryCount&&!u){s.setAttribute(gt.hasBeenRetried,"true"),yield Bv(this.retryInterval*1e3);const p=i+1;this.emitter.emit("scriptLoadRetried",t.src,p),this.doLoad(Object.assign(Object.assign({},t),{retryNumber:p,scriptBeingRetried:s}))}else u||this.emitter.emit("scriptLoadFailed",t.src,h),d?.(h),c(h)})})})}getScriptTag(t){var e;const i=t.src.replace("'",'"'),n=document.createElement("script"),s=t.retryNumber;n.setAttribute(gt.owner,zd),n.setAttribute("src",i),n.setAttribute(gt.retryNumber,s.toString()),n.async=!0;const r=(e=t.attributes)!==null&&e!==void 0?e:{};switch(Object.keys(r).forEach(c=>{n.setAttribute(c,r[c])}),t.bundleType){case"module":n.setAttribute("type",t.bundleType);break;case"nomodule":n.setAttribute(t.bundleType,"");break}return n}}class H{constructor(t){this.generator=t.generator}get(){return y(this,void 0,void 0,function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then(t=>t),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)})}generateSingletonAndCache(){return y(this,void 0,void 0,function*(){const t=yield this.generator();return this.cachedResponse=t,t})}}class op{constructor(t,e){this.braintreeClient=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("client"),window.braintree.client})}),this.dataCollector=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("data-collector"),window.braintree.dataCollector})}),this.hostedFields=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("hosted-fields"),window.braintree.hostedFields})}),this.venmo=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("venmo"),window.braintree.venmo})}),this.payPal=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("paypal-checkout"),window.braintree.paypalCheckout})}),this.applePay=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("apple-pay"),window.braintree.applePay})}),this.googlePayBraintreeClient=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("google-payment"),window.braintree.googlePayment})}),this.googlePaymentsClient=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://pay.google.com/gp/p/js/pay.js"}),new google.payments.api.PaymentsClient({environment:this.environment===ut.Development?"TEST":"PRODUCTION"})})}),this.recaptchaLibrary=new H({generator:()=>new Promise(i=>{window.donationFormGrecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.donationFormGrecaptchaLoadedCallback},10),i(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=donationFormGrecaptchaLoadedCallback&render=explicit"})})}),this.paypalLibrary=new H({generator:()=>y(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://www.paypalobjects.com/api/checkout.js",attributes:{"data-version-4":"","log-level":"warn"}}),window.paypal})}),this.braintreeVersion="3.62.2",this.environment=ut.Development,this.lazyLoader=t,this.environment=e}loadBraintreeScript(t){return y(this,void 0,void 0,function*(){const e=this.environment===ut.Production?"min.js":"js",i=`${t}.${e}`,n=`https://js.braintreegateway.com/web/${this.braintreeVersion}/js/${i}`;yield this.lazyLoader.loadScript({src:n})})}}let Ii=()=>({emit(o,...t){for(let e=this.events[o]||[],i=0,n=e.length;i<n;i++)e[i](...t)},events:{},on(o,t){return(this.events[o]||=[]).push(t),()=>{this.events[o]=this.events[o]?.filter(e=>t!==e)}}});class Vv extends Error{constructor(t){super(t),this.name="DonationFormError"}}class jv{on(t,e){return this.emitter.on(t,e)}constructor(t){var e,i;this.instance=new H({generator:()=>y(this,void 0,void 0,function*(){const n=yield this.braintreeManager.instance.get();return yield this.createHostedFields(n)})}),this.emitter=Ii(),this.braintreeManager=t.braintreeManager,this.hostedFieldClient=t.hostedFieldClient,this.hostedFieldConfig=t.hostedFieldConfig,this.maxRetryCount=(e=t.maxRetryCount)!==null&&e!==void 0?e:2,this.loadTimeout=((i=t.loadTimeout)!==null&&i!==void 0?i:6)*1e3}createHostedFields(t){return y(this,arguments,void 0,function*(e,i=0){this.hostedFieldConfig.hostedFieldContainer.resetHostedFields();try{let n;const s=new Promise((a,l)=>{n=window.setTimeout(()=>{const d=new Vv("Timeout loading Hosted Fields");l(d)},this.loadTimeout)}),r=new Promise((a,l)=>y(this,void 0,void 0,function*(){try{const d=yield this.hostedFieldClient.create({client:e,styles:this.hostedFieldConfig.hostedFieldStyle,fields:this.hostedFieldConfig.hostedFieldFieldOptions});window.clearTimeout(n),a(d)}catch(d){d instanceof Error&&d.message.includes("Hosted Fields timed out")||l(d)}}));return yield Promise.race([s,r])}catch(n){if(i>=this.maxRetryCount)throw this.emitter.emit("hostedFieldsFailed",n),n;const s=i+1;return this.emitter.emit("hostedFieldsRetry",s),this.createHostedFields(e,s)}})}tokenizeHostedFields(){return y(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}focusField(t){return y(this,void 0,void 0,function*(){const e=yield this.instance.get();e?.focus(t)})}markFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.markFieldErrors(t)}removeFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.removeFieldErrors(t)}showErrorMessage(t){this.hostedFieldConfig.hostedFieldContainer.showErrorMessage(t)}hideErrorMessage(){this.hostedFieldConfig.hostedFieldContainer.hideErrorMessage()}}class qv{constructor(t){this.session=t.session,this.donationInfo=t.donationInfo,this.applePayInstance=t.applePayInstance,this.braintreeManager=t.braintreeManager}onvalidatemerchant(t){return y(this,void 0,void 0,function*(){return new Promise((e,i)=>{this.applePayInstance.performValidation({validationURL:t.validationURL,displayName:"Internet Archive"},(n,s)=>{var r;n?((r=this.delegate)===null||r===void 0||r.paymentFailed(n),this.session.abort(),i(`Merchant validation error: ${n}`)):(this.session.completeMerchantValidation(s),e())})})})}oncancel(){return y(this,void 0,void 0,function*(){var t;(t=this.delegate)===null||t===void 0||t.paymentCancelled()})}onpaymentauthorized(t){return y(this,void 0,void 0,function*(){var e,i,n,s;let r;try{r=yield this.applePayInstance.tokenize({token:t.payment.token})}catch(g){(e=this.delegate)===null||e===void 0||e.paymentFailed(g),this.session.completePayment(ApplePaySession.STATUS_FAILURE);return}const c=t.payment,a=c.billingContact,l=c.shippingContact,d=a?.addressLines;let h,u;d&&(h=d[0],u=d[1]);const p=new eo({streetAddress:h,extendedAddress:u,locality:a?.locality,region:a?.administrativeArea,postalCode:a?.postalCode,countryCodeAlpha2:a?.countryCode}),_=new io({email:l?.emailAddress,firstName:l?.givenName,lastName:l?.familyName});try{const g=yield this.braintreeManager.submitDonation({nonce:r.nonce,paymentProvider:b.ApplePay,donationInfo:this.donationInfo,billingInfo:p,customerInfo:_});g.success?((i=this.delegate)===null||i===void 0||i.paymentComplete(g),this.session.completePayment(ApplePaySession.STATUS_SUCCESS)):((n=this.delegate)===null||n===void 0||n.paymentFailed("Failure submitting data"),this.session.completePayment(ApplePaySession.STATUS_FAILURE))}catch(g){(s=this.delegate)===null||s===void 0||s.paymentFailed(g),this.session.completePayment(ApplePaySession.STATUS_FAILURE)}})}}class Wv{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.applePayClient=t.applePayClient,this.applePaySessionManager=t.applePaySessionManager,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>y(this,void 0,void 0,function*(){if(!this.applePaySessionManager.canMakePayments())return;const i=yield this.braintreeManager.instance.get();return yield this.applePayClient.create({client:i})})})}isAvailable(){return y(this,void 0,void 0,function*(){try{return!!(yield this.instance.get())}catch{return!1}})}createPaymentRequest(t,e){return y(this,void 0,void 0,function*(){const i=yield this.instance.get();let n="Internet Archive Monthly";e.donationType===E.OneTime&&(n="Internet Archive");const s=i.createPaymentRequest({total:{label:n,amount:e.total},requiredBillingContactFields:["postalAddress"],requiredShippingContactFields:["name","email"]}),r=this.applePaySessionManager.createNewPaymentSession(s),c=new qv({donationInfo:e,session:r,applePayInstance:i,braintreeManager:this.braintreeManager});return r.onvalidatemerchant=c.onvalidatemerchant.bind(c),r.onpaymentauthorized=c.onpaymentauthorized.bind(c),r.oncancel=c.oncancel.bind(c),r.begin(),c})}}class Gv{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.venmoClient=t.venmoClient,this.venmoProfileId=t.venmoProfileId,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>this.braintreeManager.instance.get().then(i=>this.venmoClient.create({client:i,profileId:this.venmoProfileId}))})}isBrowserSupported(){return y(this,void 0,void 0,function*(){var t;if(this.isMobileFirefox())return!1;const e=yield this.instance.get();return(t=e?.isBrowserSupported())!==null&&t!==void 0?t:!1})}startPayment(){return y(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}isMobileFirefox(){const t=navigator.userAgent.indexOf("FxiOS")!==-1,e=navigator.userAgent.indexOf("Firefox")!==-1,i=navigator.userAgent.indexOf("Mobile")!==-1;return(e||t)&&i}}class Kv{constructor(t){this.donationInfo=t.donationInfo,this.paypalInstance=t.paypalInstance}payment(){return y(this,void 0,void 0,function*(){var t;const i=this.donationInfo.donationType===E.OneTime?"checkout":"vault",n={flow:i,intent:"capture"};return n.enableShippingAddress=!0,i==="checkout"?(n.amount=this.donationInfo.total,n.currency="USD"):n.billingAgreementDescription=`Subscribe to donate ${X(this.donationInfo.total,{symbol:"$"}).format()} monthly`,(t=this.delegate)===null||t===void 0||t.payPalPaymentStarted(this,n),this.paypalInstance.createPayment(n)})}onAuthorize(t){return y(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentAuthorized(this,i),i})}onConfirm(t){return y(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentConfirmed(this,i),i})}onCancel(t){var e;(e=this.delegate)===null||e===void 0||e.payPalPaymentCancelled(this,t)}onError(t){var e;console.error("PayPal error",t),(e=this.delegate)===null||e===void 0||e.payPalPaymentError(this,t)}}class Zv{constructor(t){this.braintreeManager=t.braintreeManager,this.paypalClient=t.paypalClient,this.paypalButtonGenerator=t.paypalButton,this.hostingEnvironment=t.hostingEnvironment,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.paypalClient.create({client:e}))})}renderPayPalButton(t){return y(this,void 0,void 0,function*(){const e=this.hostingEnvironment===ut.Development?"sandbox":"production",i=yield this.instance.get();if(!i)return;const n=new Kv({donationInfo:t.donationInfo,paypalInstance:i});return this.paypalButtonGenerator.render({env:e,style:t.style,payment:n.payment.bind(n),onAuthorize:n.onAuthorize.bind(n),onCancel:n.onCancel.bind(n),onError:n.onError.bind(n),funding:{disallowed:[paypal.FUNDING.VENMO]}},t.selector),n})}}class Pn{canMakePayments(){return"ApplePaySession"in window&&ApplePaySession.supportsVersion(Pn.VERSION)&&ApplePaySession.canMakePayments()}createNewPaymentSession(t){return new ApplePaySession(Pn.VERSION,t)}}Pn.VERSION=3;class Yv{isBrowserSupported(){return y(this,void 0,void 0,function*(){return this.paymentsClient.isReadyToPay({apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}}],existingPaymentMethodRequired:!1}).then(t=>t.result)})}constructor(t){this.braintreeManager=t.braintreeManager,this.googlePayMerchantId=t.googlePayMerchantId,this.googlePayBraintreeClient=t.googlePayBraintreeClient,this.paymentsClient=t.googlePaymentsClient,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.googlePayBraintreeClient.create({client:e,googlePayVersion:2,googleMerchantId:this.googlePayMerchantId}))})}}class Jv{on(t,e){return this.emitter.on(t,e)}constructor(t){this.creditCardHandler=new H({generator:()=>y(this,void 0,void 0,function*(){const e=yield this.paymentClients.hostedFields.get(),i=new jv({braintreeManager:this.braintreeManager,hostedFieldClient:e,hostedFieldConfig:this.hostedFieldConfig});return i.on("hostedFieldsRetry",n=>{this.emitter.emit("hostedFieldsRetry",n)}),i.on("hostedFieldsFailed",n=>{this.emitter.emit("hostedFieldsFailed",n)}),i})}),this.applePayHandler=new H({generator:()=>y(this,void 0,void 0,function*(){const e=yield this.paymentClients.applePay.get(),i=new Pn;return new Wv({braintreeManager:this.braintreeManager,applePayClient:e,applePaySessionManager:i})})}),this.venmoHandler=new H({generator:()=>y(this,void 0,void 0,function*(){const e=yield this.paymentClients.venmo.get();if(this.venmoProfileId)return new Gv({braintreeManager:this.braintreeManager,venmoClient:e,venmoProfileId:this.venmoProfileId})})}),this.paypalHandler=new H({generator:()=>y(this,void 0,void 0,function*(){const e=this.paymentClients.paypalLibrary.get(),i=this.paymentClients.payPal.get(),n=yield Promise.all([i,e]);return new Zv({braintreeManager:this.braintreeManager,paypalClient:n[0],paypalButton:n[1].Button,hostingEnvironment:this.hostingEnvironment})})}),this.googlePayHandler=new H({generator:()=>y(this,void 0,void 0,function*(){const e=this.paymentClients.googlePaymentsClient.get(),i=this.paymentClients.googlePayBraintreeClient.get(),n=yield Promise.all([i,e]);return new Yv({braintreeManager:this.braintreeManager,googlePayMerchantId:this.googlePayMerchantId,googlePayBraintreeClient:n[0],googlePaymentsClient:n[1]})})}),this.hostingEnvironment=ut.Development,this.emitter=Ii(),this.braintreeManager=t.braintreeManager,this.venmoProfileId=t.venmoProfileId,this.googlePayMerchantId=t.googlePayMerchantId,this.paymentClients=t.paymentClients,this.hostingEnvironment=t.hostingEnvironment,this.hostedFieldConfig=t.hostedFieldConfig}}class sp{on(t,e){return this.emitter.on(t,e)}startup(){return y(this,void 0,void 0,function*(){return this.collectDeviceData()})}submitDonation(t){return y(this,void 0,void 0,function*(){const e=new xu;e.fee_amount_covered=t.donationInfo.feeAmountCovered,e.logged_in_user=this.loggedInUser,e.referrer=this.referrer,e.origin=this.origin;const i=D.calculateTotal(t.donationInfo.amount,t.donationInfo.coverFees),n=new Rm({deviceData:this.deviceData,paymentProvider:t.paymentProvider,paymentMethodNonce:t.nonce,amount:i,donationType:t.donationInfo.donationType,customer:t.customerInfo,billing:t.billingInfo,customFields:e,upsellOnetimeTransactionId:t.upsellOnetimeTransactionId,customerId:t.customerId,recaptchaToken:t.recaptchaToken,bin:t.bin,binName:t.binName}),s=yield this.endpointManager.submitData(n);return new Vm(s)})}submitUpsellDonation(t){return y(this,void 0,void 0,function*(){const e=t.oneTimeDonationResponse,i=new D({amount:t.amount,donationType:E.Upsell,coverFees:!1});return this.submitDonation({nonce:e.paymentMethodNonce,paymentProvider:e.paymentProvider,customerId:e.customer_id,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing,upsellOnetimeTransactionId:e.transaction_id})})}donationSuccessful(t){this.endpointManager.donationSuccessful(t)}collectDeviceData(){return y(this,void 0,void 0,function*(){if(this.deviceDataCollectionStarted)return;this.deviceDataCollectionStarted=!0;const t=yield this.instance.get();if(t)return this.paymentClients.dataCollector.get().then(e=>e?.create({client:t,kount:!1,paypal:!0})).then(e=>{this.deviceData=e?.deviceData})})}constructor(t){this.emitter=Ii(),this.instance=new H({generator:()=>y(this,void 0,void 0,function*(){const e=yield this.paymentClients.braintreeClient.get();return e?.create({authorization:this.authorizationToken})})}),this.deviceDataCollectionStarted=!1,this.hostingEnvironment=ut.Development,this.authorizationToken=t.authorizationToken,this.endpointManager=t.endpointManager,this.hostingEnvironment=t.hostingEnvironment,this.paymentClients=t.paymentClients,this.referrer=t.referrer,this.loggedInUser=t.loggedInUser,this.origin=t.origin,this.paymentProviders=new Jv({braintreeManager:this,paymentClients:this.paymentClients,venmoProfileId:t.venmoProfileId,googlePayMerchantId:t.googlePayMerchantId,hostingEnvironment:t.hostingEnvironment,hostedFieldConfig:t.hostedFieldConfig}),this.paymentProviders.on("hostedFieldsRetry",e=>{this.emitter.emit("paymentProvidersHostedFieldsRetry",e)}),this.paymentProviders.on("hostedFieldsFailed",e=>{this.emitter.emit("paymentProvidersHostedFieldsFailed",e)})}setReferrer(t){this.referrer=t}setLoggedInUser(t){this.loggedInUser=t}setOrigin(t){this.origin=t}}var Q;(function(o){o.Number="number",o.CVV="cvv",o.ExpirationDate="expirationDate"})(Q||(Q={}));class Qv{fieldFor(t){switch(t){case Q.Number:return this.number;case Q.CVV:return this.cvv;case Q.ExpirationDate:return this.expirationDate}}markFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!0})}removeFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!1})}showErrorMessage(t){const e=t??"Some payment information below is missing or incorrect.";this.errorContainer.innerHTML=e,this.errorContainer.style.display="block"}hideErrorMessage(){this.errorContainer.style.display="none"}resetHostedFields(){[this.number,this.cvv,this.expirationDate].forEach(e=>{for(;e.firstChild;)e.firstChild.remove()})}constructor(t){this.number=t.number,this.cvv=t.cvv,this.expirationDate=t.expirationDate,this.errorContainer=t.errorContainer}}class Xv{constructor(t){this.started=!1,this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.recaptchaManager=t.recaptchaManager,this.emitter=Ii()}on(t,e){return this.emitter.on(t,e)}startup(){return y(this,void 0,void 0,function*(){var t;if(this.started)return;this.started=!0;const e=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get(),i=yield e?.instance.get();i?.on("focus",n=>{const{emittedBy:s,fields:r}=n,c=r[s],{container:a}=c;a.parentElement.error=!1,e.hideErrorMessage()}),i?.on("blur",n=>{const{emittedBy:s,fields:r}=n,c=r[s],{container:a,isEmpty:l,isValid:d}=c;!l&&!d&&(a.parentElement.error=!0)}),i?.on("validityChange",n=>{const{fields:s}=n,r=s.cvv.isValid&&s.expirationDate.isValid&&s.number.isValid;this.emitter.emit("validityChanged",r)})})}tokenizeFields(){return y(this,void 0,void 0,function*(){let t;const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();try{t=yield e?.tokenizeHostedFields()}catch(i){this.handleHostedFieldTokenizationError(i);return}return t})}paymentInitiated(t,e,i){return y(this,void 0,void 0,function*(){let n;try{n=yield this.recaptchaManager.execute()}catch{this.donationFlowModalManager.showErrorModal({message:"Recaptcha failure"});return}this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:b.CreditCard,recaptchaToken:n,bin:t.details.bin,donationInfo:e,customerInfo:i.customer,billingInfo:i.billing})})}handleHostedFieldTokenizationError(t){return y(this,void 0,void 0,function*(){const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();switch(e.showErrorMessage(),t.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e.markFieldErrors([Q.Number,Q.CVV,Q.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":Object.keys(t.details.invalidFields).forEach(i=>{e.markFieldErrors([i])});break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e.markFieldErrors([Q.CVV]);break}})}}class rp{keydown(t){var e,i;const n=t.key;if(t.metaKey)return;switch(n){case"Tab":case"Delete":case"Backspace":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return}const s=t.target,r=s.value,c=r.slice(0,(e=s.selectionStart)!==null&&e!==void 0?e:0),a=r.slice((i=s.selectionEnd)!==null&&i!==void 0?i:0),l=`${c}${n}${a}`,d=/^[0-9]+(\.[0-9]{0,2})?$/g;l.match(d)||t.preventDefault()}}var Lt;(function(o){o.YesButton="YesButton",o.PayPalUpsellSlot="PayPalUpsellSlot"})(Lt||(Lt={}));let ni=class extends I{constructor(){super(...arguments),this.yesButtonMode=Lt.YesButton,this.amount=5,this.currencyValidator=new rp}render(){return $`
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
    `}get yesButton(){switch(this.yesButtonMode){case Lt.YesButton:return $`
          <button
            class="cta-button"
            tabindex="0"
            id="yes-button"
            @click=${this.yesSelected}
            .disabled=${this.error!==void 0}
          >
            YES, I'll donate monthly
          </button>
        `;case Lt.PayPalUpsellSlot:return $`
          <div class="paypal-upsell-slot-container">
            <div class="paypal-upsell-slot-blocker ${this.error?"":"hidden"}"></div>
            <button class="cta-button" id="paypal-cover-button">YES, I'll donate monthly</button>
            <slot class="paypal-upsell-slot"></slot>
          </div>
        `}}amountChanged(t){const i=t.target.value;i.length!==0&&this.handleCustomAmountInput(i)}handleCustomAmountInput(t){const e=parseFloat(t);isNaN(e)?this.error=$` Please enter a valid amount. `:this.processAmount(e)}processAmount(t){if(t>=1e4){this.error=$`
        To make a donation of $10,000 or more, please contact our philanthropy department at
        <a href="mailto:donations@archive.org">donations@archive.org</a>
      `;return}if(t<1){this.amountInput&&this.amountInput.value.length>0&&(this.error=$` The minimum donation amount is $1. `);return}this.error=void 0,this.amount=t;const e=new CustomEvent("amountChanged",{detail:{amount:this.amount}});this.dispatchEvent(e)}yesSelected(){const t=new CustomEvent("yesSelected",{detail:{amount:this.amount}});this.dispatchEvent(t)}noThanksSelected(){this.dispatchEvent(new Event("noThanksSelected"))}static get styles(){const t=v`var(--upsellCTAButtonColor, #194880)`,e=v`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`,i=v`var(--upsellAmountInputOffset, -1rem)`;return v`
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
    `}};m([A({type:String})],ni.prototype,"yesButtonMode",void 0);m([A({type:Number})],ni.prototype,"amount",void 0);m([A({type:Object})],ni.prototype,"error",void 0);m([M("#amount-input")],ni.prototype,"amountInput",void 0);ni=m([vt("upsell-modal-content")],ni);class se{constructor(t){var e,i,n,s,r,c,a;this.title=t?.title,this.subtitle=t?.subtitle,this.headline=t?.headline,this.message=t?.message,this.headerColor=(e=t?.headerColor)!==null&&e!==void 0?e:"#55A183",this.bodyColor=(i=t?.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(n=t?.showProcessingIndicator)!==null&&n!==void 0?n:!1,this.processingImageMode=(s=t?.processingImageMode)!==null&&s!==void 0?s:"complete",this.showCloseButton=(r=t?.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(c=t?.showHeaderLogo)!==null&&c!==void 0?c:!0,this.closeOnBackdropClick=(a=t?.closeOnBackdropClick)!==null&&a!==void 0?a:!0}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const go=window,Hl=go.ShadowRoot&&(go.ShadyCSS===void 0||go.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ap=Symbol(),Vd=new WeakMap;let tg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ap)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Hl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Vd.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vd.set(e,t))}return t}toString(){return this.cssText}};const eg=o=>new tg(typeof o=="string"?o:o+"",void 0,ap),ig=(o,t)=>{Hl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=go.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},jd=Hl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return eg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lr;const Oo=window,qd=Oo.trustedTypes,ng=qd?qd.emptyScript:"",Wd=Oo.reactiveElementPolyfillSupport,ba={toAttribute(o,t){switch(t){case Boolean:o=o?ng:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},lp=(o,t)=>t!==o&&(t==t||o==o),dr={attribute:!0,type:String,converter:ba,reflect:!1,hasChanged:lp},Sa="finalized";let zi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=dr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dr}static finalize(){if(this.hasOwnProperty(Sa))return!1;this[Sa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(jd(n))}else t!==void 0&&e.push(jd(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ig(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=dr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ba).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ba;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||lp)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};zi[Sa]=!0,zi.elementProperties=new Map,zi.elementStyles=[],zi.shadowRootOptions={mode:"open"},Wd?.({ReactiveElement:zi}),((lr=Oo.reactiveElementVersions)!==null&&lr!==void 0?lr:Oo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var cr;const Lo=window,oi=Lo.trustedTypes,Gd=oi?oi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ca="$lit$",Mt=`lit$${(Math.random()+"").slice(9)}$`,dp="?"+Mt,og=`<${dp}>`,xe=document,Bo=()=>xe.createComment(""),Mn=o=>o===null||typeof o!="object"&&typeof o!="function",cp=Array.isArray,sg=o=>cp(o)||typeof o?.[Symbol.iterator]=="function",hr=`[ 	
\f\r]`,Vi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kd=/-->/g,Zd=/>/g,Gt=RegExp(`>|${hr}(?:([^\\s"'>=/]+)(${hr}*=${hr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yd=/'/g,Jd=/"/g,hp=/^(?:script|style|textarea|title)$/i,xn=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Qd=new WeakMap,ue=xe.createTreeWalker(xe,129,null,!1);function up(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gd!==void 0?Gd.createHTML(t):t}const rg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Vi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Vi?d[1]==="!--"?r=Kd:d[1]!==void 0?r=Zd:d[2]!==void 0?(hp.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Gt):d[3]!==void 0&&(r=Gt):r===Gt?d[0]===">"?(r=n??Vi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Gt:d[3]==='"'?Jd:Yd):r===Jd||r===Yd?r=Gt:r===Kd||r===Zd?r=Vi:(r=Gt,n=void 0);const p=r===Gt&&o[c+1].startsWith("/>")?" ":"";s+=r===Vi?a+og:h>=0?(i.push(l),a.slice(0,h)+Ca+a.slice(h)+Mt+p):a+Mt+(h===-2?(i.push(void 0),c):p)}return[up(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ea=class pp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=rg(t,e);if(this.el=pp.createElement(l,i),ue.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=ue.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ca)||u.startsWith(Mt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ca).split(Mt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?lg:g[1]==="?"?cg:g[1]==="@"?hg:Ts})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(hp.test(n.tagName)){const h=n.textContent.split(Mt),u=h.length-1;if(u>0){n.textContent=oi?oi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Bo()),ue.nextNode(),a.push({type:2,index:++s});n.append(h[u],Bo())}}}else if(n.nodeType===8)if(n.data===dp)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Mt,h+1))!==-1;)a.push({type:7,index:s}),h+=Mt.length-1}s++}}static createElement(t,e){const i=xe.createElement("template");return i.innerHTML=t,i}};function si(o,t,e=o,i){var n,s,r,c;if(t===xn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Mn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=si(o,a._$AS(o,t.values),a,i)),t}let ag=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:xe).importNode(i,!0);ue.currentNode=s;let r=ue.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new mp(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new ug(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=ue.nextNode(),c++)}return ue.currentNode=xe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},mp=class vp{constructor(t,e,i,n){var s;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=si(this,t,e),Mn(t)?t===O||t==null||t===""?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==xn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):sg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&Mn(this._$AH)?this._$AA.nextSibling.data=t:this.$(xe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ea.createElement(up(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new ag(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Qd.get(t.strings);return e===void 0&&Qd.set(t.strings,e=new Ea(t)),e}T(t){cp(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new vp(this.k(Bo()),this.k(Bo()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ts=class{constructor(t,e,i,n,s){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=si(this,t,e,0),r=!Mn(t)||t!==this._$AH&&t!==xn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=si(this,c[i+a],e,a),l===xn&&(l=this._$AH[a]),r||(r=!Mn(l)||l!==this._$AH[a]),l===O?t=O:t!==O&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},lg=class extends Ts{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}};const dg=oi?oi.emptyScript:"";let cg=class extends Ts{constructor(){super(...arguments),this.type=4}j(t){t&&t!==O?this.element.setAttribute(this.name,dg):this.element.removeAttribute(this.name)}},hg=class extends Ts{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=si(this,t,e,0))!==null&&i!==void 0?i:O)===xn)return;const n=this._$AH,s=t===O&&n!==O||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==O&&(n===O||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},ug=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){si(this,t)}};const Xd=Lo.litHtmlPolyfillSupport;Xd?.(Ea,mp),((cr=Lo.litHtmlVersions)!==null&&cr!==void 0?cr:Lo.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gp=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pg=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},mg=(o,t,e)=>{t.constructor.createProperty(e,o)};function ks(o){return(t,e)=>e!==void 0?mg(o,t,e):pg(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vg=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(c){o(c,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function gg(o,t){return vg({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur;((ur=window.HTMLSlotElement)===null||ur===void 0?void 0:ur.prototype.assignedElements)!=null;function*Ul(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*Ul(o.shadowRoot.activeElement)))}function yg(){return[...Ul()].pop()}const tc=new WeakMap;function yp(o){let t=tc.get(o);return t||(t=window.getComputedStyle(o,null),tc.set(o,t)),t}function $g(o){if("checkVisibility"in o&&typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=yp(o);return t.visibility!=="hidden"&&t.display!=="none"}function fg(o){const t=yp(o),{overflowY:e,overflowX:i}=t;return e==="scroll"||i==="scroll"?!0:e!=="auto"||i!=="auto"?!1:o.scrollHeight>o.clientHeight&&e==="auto"||o.scrollWidth>o.clientWidth&&i==="auto"}function _g(o){const t=o.tagName.toLowerCase(),e=Number(o.getAttribute("tabindex"));return o.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||o.hasAttribute("disabled")||o.closest("[inert]")||t==="input"&&o.getAttribute("type")==="radio"&&!o.hasAttribute("checked")||!$g(o)?!1:(t==="audio"||t==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:fg(o)}function Ag(o,t){var e;return((e=o.getRootNode({composed:!0}))===null||e===void 0?void 0:e.host)!==t}function ec(o){const t=new WeakMap,e=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!e.includes(n)&&_g(n)&&e.push(n),n instanceof HTMLSlotElement&&Ag(n,o)&&n.assignedElements({flatten:!0}).forEach(s=>{i(s)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const s of Array.from(n.children))i(s)}return i(o),e.sort((n,s)=>{const r=Number(n.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-r})}let ji=[];class bg{constructor(t){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const n=yg();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=ec(this.element);let r=s.findIndex(a=>a===n);this.previousFocus=this.currentFocus;const c=this.tabDirection==="forward"?1:-1;for(;;){r+c>=s.length?r=0:r+c<0?r=s.length-1:r+=c,this.previousFocus=this.currentFocus;const a=s[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const l=[...Ul()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ji.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ji=ji.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ji[ji.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=ec(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],n=this.tabDirection==="forward"?e:i;typeof n?.focus=="function"&&(this.currentFocus=n,n.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yo=window,Nl=yo.ShadowRoot&&(yo.ShadyCSS===void 0||yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$p=Symbol(),ic=new WeakMap;let Sg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==$p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Nl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ic.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ic.set(e,t))}return t}toString(){return this.cssText}};const Cg=o=>new Sg(typeof o=="string"?o:o+"",void 0,$p),Eg=(o,t)=>{Nl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=yo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},nc=Nl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Cg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pr;const zo=window,oc=zo.trustedTypes,wg=oc?oc.emptyScript:"",sc=zo.reactiveElementPolyfillSupport,wa={toAttribute(o,t){switch(t){case Boolean:o=o?wg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},fp=(o,t)=>t!==o&&(t==t||o==o),mr={attribute:!0,type:String,converter:wa,reflect:!1,hasChanged:fp},Pa="finalized";let qi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=mr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mr}static finalize(){if(this.hasOwnProperty(Pa))return!1;this[Pa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(nc(n))}else t!==void 0&&e.push(nc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Eg(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=mr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:wa).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:wa;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||fp)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};qi[Pa]=!0,qi.elementProperties=new Map,qi.elementStyles=[],qi.shadowRootOptions={mode:"open"},sc?.({ReactiveElement:qi}),((pr=zo.reactiveElementVersions)!==null&&pr!==void 0?pr:zo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;const Vo=window,ri=Vo.trustedTypes,rc=ri?ri.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ma="$lit$",xt=`lit$${(Math.random()+"").slice(9)}$`,_p="?"+xt,Pg=`<${_p}>`,Te=document,jo=()=>Te.createComment(""),Tn=o=>o===null||typeof o!="object"&&typeof o!="function",Ap=Array.isArray,Mg=o=>Ap(o)||typeof o?.[Symbol.iterator]=="function",gr=`[ 	
\f\r]`,Wi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ac=/-->/g,lc=/>/g,Kt=RegExp(`>|${gr}(?:([^\\s"'>=/]+)(${gr}*=${gr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dc=/'/g,cc=/"/g,bp=/^(?:script|style|textarea|title)$/i,kn=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),hc=new WeakMap,pe=Te.createTreeWalker(Te,129,null,!1);function Sp(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return rc!==void 0?rc.createHTML(t):t}const xg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Wi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Wi?d[1]==="!--"?r=ac:d[1]!==void 0?r=lc:d[2]!==void 0?(bp.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Kt):d[3]!==void 0&&(r=Kt):r===Kt?d[0]===">"?(r=n??Wi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Kt:d[3]==='"'?cc:dc):r===cc||r===dc?r=Kt:r===ac||r===lc?r=Wi:(r=Kt,n=void 0);const p=r===Kt&&o[c+1].startsWith("/>")?" ":"";s+=r===Wi?a+Pg:h>=0?(i.push(l),a.slice(0,h)+Ma+a.slice(h)+xt+p):a+xt+(h===-2?(i.push(void 0),c):p)}return[Sp(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let xa=class Cp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=xg(t,e);if(this.el=Cp.createElement(l,i),pe.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=pe.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ma)||u.startsWith(xt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ma).split(xt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?kg:g[1]==="?"?Hg:g[1]==="@"?Ug:Is})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(bp.test(n.tagName)){const h=n.textContent.split(xt),u=h.length-1;if(u>0){n.textContent=ri?ri.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],jo()),pe.nextNode(),a.push({type:2,index:++s});n.append(h[u],jo())}}}else if(n.nodeType===8)if(n.data===_p)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(xt,h+1))!==-1;)a.push({type:7,index:s}),h+=xt.length-1}s++}}static createElement(t,e){const i=Te.createElement("template");return i.innerHTML=t,i}};function ai(o,t,e=o,i){var n,s,r,c;if(t===kn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Tn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ai(o,a._$AS(o,t.values),a,i)),t}let Tg=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Te).importNode(i,!0);pe.currentNode=s;let r=pe.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Ep(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Ng(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=pe.nextNode(),c++)}return pe.currentNode=Te,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ep=class wp{constructor(t,e,i,n){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ai(this,t,e),Tn(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==kn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Mg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&Tn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Te.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xa.createElement(Sp(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Tg(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=hc.get(t.strings);return e===void 0&&hc.set(t.strings,e=new xa(t)),e}T(t){Ap(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new wp(this.k(jo()),this.k(jo()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Is=class{constructor(t,e,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ai(this,t,e,0),r=!Tn(t)||t!==this._$AH&&t!==kn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ai(this,c[i+a],e,a),l===kn&&(l=this._$AH[a]),r||(r=!Tn(l)||l!==this._$AH[a]),l===L?t=L:t!==L&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},kg=class extends Is{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}};const Ig=ri?ri.emptyScript:"";let Hg=class extends Is{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Ig):this.element.removeAttribute(this.name)}},Ug=class extends Is{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ai(this,t,e,0))!==null&&i!==void 0?i:L)===kn)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ng=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ai(this,t)}};const uc=Vo.litHtmlPolyfillSupport;uc?.(xa,Ep),((vr=Vo.litHtmlVersions)!==null&&vr!==void 0?vr:Vo.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dg=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fg=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},Rg=(o,t,e)=>{t.constructor.createProperty(e,o)};function Og(o){return(t,e)=>e!==void 0?Rg(o,t,e):Fg(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yr;((yr=window.HTMLSlotElement)===null||yr===void 0?void 0:yr.prototype.assignedElements)!=null;var pc;(function(o){o.processing="processing",o.complete="complete"})(pc||(pc={}));let Ta=class extends I{constructor(){super(...arguments),this.mode="processing"}render(){return $`
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
    `}static get styles(){const t=v`var(--activityIndicatorCheckmarkColor, #31A481)`,e=v`var(--activityIndicatorCompletedRingColor, #31A481)`,i=v`var(--activityIndicatorLoadingRingColor, #333333)`,n=v`var(--activityIndicatorLoadingDotColor, #333333)`;return v`
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
    `}};m([Og({type:String})],Ta.prototype,"mode",void 0);Ta=m([Dg("ia-activity-indicator")],Ta);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $o=window,Dl=$o.ShadowRoot&&($o.ShadyCSS===void 0||$o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pp=Symbol(),mc=new WeakMap;let Lg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Pp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Dl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=mc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mc.set(e,t))}return t}toString(){return this.cssText}};const Bg=o=>new Lg(typeof o=="string"?o:o+"",void 0,Pp),zg=(o,t)=>{Dl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=$o.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},vc=Dl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Bg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r;const qo=window,gc=qo.trustedTypes,Vg=gc?gc.emptyScript:"",yc=qo.reactiveElementPolyfillSupport,ka={toAttribute(o,t){switch(t){case Boolean:o=o?Vg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Mp=(o,t)=>t!==o&&(t==t||o==o),fr={attribute:!0,type:String,converter:ka,reflect:!1,hasChanged:Mp},Ia="finalized";let Gi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=fr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fr}static finalize(){if(this.hasOwnProperty(Ia))return!1;this[Ia]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(vc(n))}else t!==void 0&&e.push(vc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zg(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=fr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ka).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ka;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Mp)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Gi[Ia]=!0,Gi.elementProperties=new Map,Gi.elementStyles=[],Gi.shadowRootOptions={mode:"open"},yc?.({ReactiveElement:Gi}),(($r=qo.reactiveElementVersions)!==null&&$r!==void 0?$r:qo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _r;const Wo=window,li=Wo.trustedTypes,$c=li?li.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ha="$lit$",Tt=`lit$${(Math.random()+"").slice(9)}$`,xp="?"+Tt,jg=`<${xp}>`,ke=document,Go=()=>ke.createComment(""),In=o=>o===null||typeof o!="object"&&typeof o!="function",Tp=Array.isArray,qg=o=>Tp(o)||typeof o?.[Symbol.iterator]=="function",Ar=`[ 	
\f\r]`,Ki=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fc=/-->/g,_c=/>/g,Zt=RegExp(`>|${Ar}(?:([^\\s"'>=/]+)(${Ar}*=${Ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ac=/'/g,bc=/"/g,kp=/^(?:script|style|textarea|title)$/i,Hn=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Sc=new WeakMap,me=ke.createTreeWalker(ke,129,null,!1);function Ip(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $c!==void 0?$c.createHTML(t):t}const Wg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Ki;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Ki?d[1]==="!--"?r=fc:d[1]!==void 0?r=_c:d[2]!==void 0?(kp.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Zt):d[3]!==void 0&&(r=Zt):r===Zt?d[0]===">"?(r=n??Ki,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Zt:d[3]==='"'?bc:Ac):r===bc||r===Ac?r=Zt:r===fc||r===_c?r=Ki:(r=Zt,n=void 0);const p=r===Zt&&o[c+1].startsWith("/>")?" ":"";s+=r===Ki?a+jg:h>=0?(i.push(l),a.slice(0,h)+Ha+a.slice(h)+Tt+p):a+Tt+(h===-2?(i.push(void 0),c):p)}return[Ip(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ua=class Hp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Wg(t,e);if(this.el=Hp.createElement(l,i),me.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=me.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ha)||u.startsWith(Tt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ha).split(Tt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Kg:g[1]==="?"?Yg:g[1]==="@"?Jg:Hs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(kp.test(n.tagName)){const h=n.textContent.split(Tt),u=h.length-1;if(u>0){n.textContent=li?li.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Go()),me.nextNode(),a.push({type:2,index:++s});n.append(h[u],Go())}}}else if(n.nodeType===8)if(n.data===xp)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Tt,h+1))!==-1;)a.push({type:7,index:s}),h+=Tt.length-1}s++}}static createElement(t,e){const i=ke.createElement("template");return i.innerHTML=t,i}};function di(o,t,e=o,i){var n,s,r,c;if(t===Hn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=In(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=di(o,a._$AS(o,t.values),a,i)),t}let Gg=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ke).importNode(i,!0);me.currentNode=s;let r=me.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Up(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Qg(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=me.nextNode(),c++)}return me.currentNode=ke,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Up=class Np{constructor(t,e,i,n){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=di(this,t,e),In(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==Hn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):qg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&In(this._$AH)?this._$AA.nextSibling.data=t:this.$(ke.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ua.createElement(Ip(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Gg(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Sc.get(t.strings);return e===void 0&&Sc.set(t.strings,e=new Ua(t)),e}T(t){Tp(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Np(this.k(Go()),this.k(Go()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Hs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=di(this,t,e,0),r=!In(t)||t!==this._$AH&&t!==Hn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=di(this,c[i+a],e,a),l===Hn&&(l=this._$AH[a]),r||(r=!In(l)||l!==this._$AH[a]),l===B?t=B:t!==B&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Kg=class extends Hs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}};const Zg=li?li.emptyScript:"";let Yg=class extends Hs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Zg):this.element.removeAttribute(this.name)}},Jg=class extends Hs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=di(this,t,e,0))!==null&&i!==void 0?i:B)===Hn)return;const n=this._$AH,s=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==B&&(n===B||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Qg=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){di(this,t)}};const Cc=Wo.litHtmlPolyfillSupport;Cc?.(Ua,Up),((_r=Wo.litHtmlVersions)!==null&&_r!==void 0?_r:Wo.litHtmlVersions=[]).push("2.8.0");const Xg=$`
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
`;class ty extends I{static get styles(){return v`
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
    `}render(){return Xg}}customElements.define("ia-icon-close",ty);const ey=$`
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
`;let Na=class extends I{constructor(){super(...arguments),this.config=new se}render(){return $`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?$`<div class="logo-icon">${ey}</div>`:T}
            ${this.config.title?$`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?$`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?$` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?$` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(t){if(t.preventDefault(),t.type==="keydown"&&t.key!==" "&&t.key!=="Enter")return;const e=new Event("closeButtonPressed");this.dispatchEvent(e)}get closeButtonTemplate(){return $`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const t=v`var(--modalLogoSize, 6.5rem)`,e=v`var(--processingImageSize, 7.5rem)`,i=v`var(--modalCornerRadius, 1rem)`,n=v`var(--modalBorder, 2px solid black)`,s=v`var(--modalBottomMargin, 2.5rem)`,r=v`var(--modalTopMargin, 5rem)`,c=v`var(--modalHeaderBottomPadding, 0.5em)`,a=v`var(--modalBottomPadding, 2rem)`,l=v`var(--modalScrollOffset, 5px)`,d=v`var(--modalTitleFontSize, 1.8rem)`,h=v`var(--modalSubtitleFontSize, 1.4rem)`,u=v`var(--modalHeadlineFontSize, 1.6rem)`,p=v`var(--modalMessageFontSize, 1.4rem)`,_=v`var(--modalTitleLineHeight, normal)`,g=v`var(--modalSubtitleLineHeight, normal)`,N=v`var(--modalHeadlineLineHeight, normal)`,st=v`var(--modalMessageLineHeight, normal)`;return v`
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
        padding-bottom: ${c};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${d};
        font-weight: bold;
        line-height: ${_};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${h};
        line-height: ${g};
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
        line-height: ${N};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${st};
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
    `}};m([ks({type:Object})],Na.prototype,"config",void 0);Na=m([gp("modal-template")],Na);function iy(o,t,e){var i=e||{},n=i.noTrailing,s=n===void 0?!1:n,r=i.noLeading,c=r===void 0?!1:r,a=i.debounceMode,l=a===void 0?void 0:a,d,h=!1,u=0;function p(){d&&clearTimeout(d)}function _(N){var st=N||{},rt=st.upcomingOnly,Ni=rt===void 0?!1:rt;p(),h=!Ni}function g(){for(var N=arguments.length,st=new Array(N),rt=0;rt<N;rt++)st[rt]=arguments[rt];var Ni=this,no=Date.now()-u;if(h)return;function oo(){u=Date.now(),t.apply(Ni,st)}function Yl(){d=void 0}!c&&l&&!d&&oo(),p(),l===void 0&&no>o?c?(u=Date.now(),s||(d=setTimeout(l?Yl:oo,o))):oo():s!==!0&&(d=setTimeout(l?Yl:oo,l===void 0?o-no:o))}return g.cancel=_,g}var Ce;(function(o){o.Open="open",o.Closed="closed"})(Ce||(Ce={}));class ny{constructor(t){this.windowResizeThrottler=iy(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case Ce.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Ce.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let ci=class extends I{constructor(){super(...arguments),this.mode=Ce.Closed,this.hostBridge=new ny(this),this.modal=new bg(this),this.closeOnBackdropClick=!0}firstUpdated(){return y(this,void 0,void 0,function*(){yield new Promise(t=>setTimeout(t,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",t=>{t.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return $`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Ce.Closed,this.customModalContent=void 0,this.modalTemplate.config=new se,this.modal.deactivate()}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}showModal(t){return y(this,void 0,void 0,function*(){this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.modalTemplate.config=t.config,this.customModalContent=t.customModalContent,this.mode=Ce.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=v`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=v`var(--modalBackdropZindex, 1000)`,i=v`var(--modalWidth, 32rem)`,n=v`var(--modalMaxWidth, 95%)`,s=v`var(--modalZindex, 2000)`;return v`
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
    `}};m([ks({type:String,reflect:!0})],ci.prototype,"mode",void 0);m([ks({type:Object})],ci.prototype,"customModalContent",void 0);m([ks({type:Object})],ci.prototype,"hostBridge",void 0);m([gg("modal-template")],ci.prototype,"modalTemplate",void 0);ci=m([gp("modal-manager")],ci);let Ie=class extends I{constructor(){super(...arguments),this.amount=5,this.currencyType="$",this.donationType=E.OneTime,this.confirmDonation=()=>{},this.cancelDonation=()=>{}}get confirmationText(){const t=X(this.amount,{symbol:this.currencySymbol}).format();return $`
      <p>
        You are about to make a <b>${this.donationType}</b> donation of
        <b>${t} ${this.currencyType}</b> to the Internet Archive.
      </p>
    `}get confirmUpsellText(){const t=X(this.amount,{symbol:this.currencySymbol}).format();return $`<p>
      You are about to begin making <b>monthly</b> donations of
      <b>${t} ${this.currencyType}</b> to the Internet Archive. (Your first recurring
      contribution will be next month.)
    </p>`}confirm(){this===null||this===void 0||this.confirmDonation()}cancel(){this===null||this===void 0||this.cancelDonation()}get confirmCTA(){return this.donationType===E.Upsell?"Start monthly donation":"Complete donation"}render(){return $`
      ${this.donationType===E.Upsell?this.confirmUpsellText:this.confirmationText}

      <div class="cta-group">
        <button id="confirm" @click=${()=>this.confirm()}>${this.confirmCTA}</button>
        <button id="cancel" @click=${()=>this.cancel()}>Cancel</button>
      </div>
    `}static get styles(){const t=v`var(--upsellCTAButtonColor, #194880)`,e=v`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`;return v`
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
    }`}get currencySymbol(){switch(this.currencyType){case"AUD":return"AU$";case"BRL":return"R$";case"CAD":return"CA$";case"CHF":return"Fr";case"CNY":return"¥";case"CZK":return"Kč";case"DKK":return"Kr";case"EUR":return"€";case"GBP":return"£";case"HKD":return"HK$";case"HUF":return"Ft";case"ILS":return"₪";case"JPY":return"¥";case"MXN":return"MX$";case"MYR":return"RM";case"NOK":return"kr";case"PLN":return"zł";case"RUB":return"₽";case"SEK":return"kr";case"SGD":return"S$";case"THB":return"฿";case"TYD":return"NT$";default:return"$"}}};m([A({type:Number})],Ie.prototype,"amount",void 0);m([A({type:String})],Ie.prototype,"currencyType",void 0);m([A({type:String})],Ie.prototype,"donationType",void 0);m([A({type:Function})],Ie.prototype,"confirmDonation",void 0);m([A({type:Function})],Ie.prototype,"cancelDonation",void 0);Ie=m([vt("confirm-donation-modal")],Ie);let Ec=class extends I{render(){return $`
      <div class="container">
        <a
          href="https://help.archive.org/help/why-is-there-a-problem-processing-my-donation/"
          rel="noopener"
          target="_blank"
        >
          Questions?
        </a>
      </div>
    `}static get styles(){const t=v`var(--errorModalQuestionsLinkTopMargin, 1rem)`,e=v`var(--errorModalQuestionsLinkFontColor, #333)`,i=v`var(--errorModalQuestionsLinkFontSize, 1.4rem)`;return v`
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
    `}};Ec=m([vt("donation-form-error-modal-content")],Ec);var re;(function(o){o.Blue="#497fbf",o.Green="#55A183",o.Red="#691916"})(re||(re={}));class Us{constructor(t){this.modalManager=t.modalManager,this.braintreeManager=t.braintreeManager,this.analytics=t.analytics}closeModal(){this.modalManager.closeModal()}showProcessingModal(){const t=new se({headerColor:re.Blue,showProcessingIndicator:!0,closeOnBackdropClick:!1,showCloseButton:!1,processingImageMode:"processing",title:$` Processing... `});this.modalManager.showModal({config:t})}showThankYouModal(t){const e=new se({showProcessingIndicator:!0,processingImageMode:"complete",headerColor:re.Green,title:$` Thank You! `});this.modalManager.showModal({config:e});let n=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}`;t.upsellSuccessResponse&&(n+="-upsell");const s=t.successResponse.donationType;this.analytics.logDonationFlowEvent(n,s),this.braintreeManager.donationSuccessful(t)}showErrorModal(t){const e=new se({headerColor:re.Red,title:$` Processing error `,headline:$` There's been a problem completing your donation. `,message:$` ${t?.message} `});this.modalManager.showModal({config:e,userClosedModalCallback:t?.userClosedModalCallback,customModalContent:$`
        <donation-form-error-modal-content></donation-form-error-modal-content>
      `})}showConfirmationStepModal(t){const e=()=>{t?.confirmDonationCB()},i=()=>{t?.cancelDonationCB()},n=t.donationType===E.Upsell?"Confirm monthly donation":"Complete donation",s=new se({closeOnBackdropClick:!1,headerColor:re.Green,title:$`${n}`,message:$`
        <confirm-donation-modal
          .amount="${t.amount}"
          .currencyType="${t.currencyType}"
          .donationType="${t.donationType}"
          .confirmDonation=${e}
          .cancelDonation=${i}
        ></confirm-donation-modal>
      `});return this.modalManager.showModal({config:s,userClosedModalCallback:i})}showUpsellModal(t){var e;const i=new se({headerColor:re.Green,title:$` Donation received `,processingImageMode:"complete",showProcessingIndicator:!0}),n=Us.getDefaultUpsellAmount(t.oneTimeAmount);t.amountChanged&&t.amountChanged(n);const s=$`
      <upsell-modal-content
        .amount=${n}
        .yesButtonMode=${(e=t?.ctaMode)!==null&&e!==void 0?e:Lt.YesButton}
        @yesSelected=${r=>t?.yesSelected?t.yesSelected(r.detail.amount):void 0}
        @noThanksSelected=${t?.noSelected}
        @amountChanged=${r=>t?.amountChanged?t.amountChanged(r.detail.amount):void 0}
      >
        <slot name="paypal-upsell-button"></slot>
      </upsell-modal-content>
    `;return this.modalManager.showModal({config:i,customModalContent:s,userClosedModalCallback:t?.userClosedModalCallback})}startDonationSubmissionFlow(t){return y(this,void 0,void 0,function*(){this.showProcessingModal();try{const e=yield this.braintreeManager.submitDonation(t);if(e.success)return this.handleSuccessfulDonationResponse(t.donationInfo,e.value),e;{const i=e.value;return this.showErrorModal({message:i.message}),e}}catch(e){this.showErrorModal({message:`${e}`}),console.error("error getting a response",e);return}})}upsellModalYesSelected(t,e){return y(this,void 0,void 0,function*(){this.showProcessingModal();try{const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.completeUpsell({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.showErrorModal({message:n.message})}return i}catch(i){this.showErrorModal({message:`${i}`}),console.error("error getting a response",i);return}})}completeUpsell(t){this.showThankYouModal(t);const i=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}-upsell`,n=t.successResponse.donationType;this.analytics.logDonationFlowEvent(i,n),this.braintreeManager.donationSuccessful(t)}static getDefaultUpsellAmount(t){let e=5;return t<=10?e=8:t>10&&t<=25?e=10:t>25&&t<=100?e=25:t>100&&(e=50),e}handleSuccessfulDonationResponse(t,e){switch(t.donationType){case E.OneTime:this.showUpsellModal({oneTimeAmount:e.amount,yesSelected:i=>{this.upsellModalYesSelected(e,i)},noSelected:()=>{this.showThankYouModal({successResponse:e})},userClosedModalCallback:()=>{this.showThankYouModal({successResponse:e})}});break;case E.Monthly:this.showThankYouModal({successResponse:e});break;case E.Upsell:break}}}class oy{constructor(t){this.upsellButtonDataSource=t.upsellButtonDataSource,this.oneTimePayload=t.oneTimePayload,this.oneTimeSuccessResponse=t.oneTimeSuccessResponse}}class sy{updateDonationInfo(t){this.buttonDataSource&&(this.buttonDataSource.donationInfo=t)}updateUpsellDonationInfo(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo=t)}constructor(t){this.emitter=Ii(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}payPalPaymentStarted(t,e){return y(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentStarted",t,e)})}payPalPaymentAuthorized(t,e){return y(this,void 0,void 0,function*(){const{donationType:i,total:n}=t.donationInfo;this.donationFlowModalManager.showConfirmationStepModal({donationType:i,amount:n,currencyType:"USD",confirmDonationCB:()=>{this.payPalPaymentConfirmed(t,e)},cancelDonationCB:()=>{this.donationFlowModalManager.closeModal(),this.payPalPaymentCancelled(t,{})}})})}payPalPaymentConfirmed(t,e){return y(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentConfirmed",t,{}),this.donationFlowModalManager.showProcessingModal();const i=t.donationInfo.donationType,n=e?.details,s=new io({email:n?.email,firstName:n?.firstName,lastName:n?.lastName}),r=n.shippingAddress,c=new eo({streetAddress:r?.line1,extendedAddress:r?.line2,locality:r?.city,region:r?.state,postalCode:r?.postalCode,countryCodeAlpha2:r?.countryCode}),a=this.upsellButtonDataSourceContainer?this.upsellButtonDataSourceContainer.oneTimeSuccessResponse.transaction_id:void 0,l=yield this.braintreeManager.submitDonation({nonce:e.nonce,paymentProvider:b.PayPal,donationInfo:t.donationInfo,customerInfo:s,billingInfo:c,upsellOnetimeTransactionId:a});if(!l.success){const h=l.value;this.donationFlowModalManager.showErrorModal({message:h.message});return}const d=l.value;switch(i){case E.OneTime:this.showUpsellModal(e,d);break;case E.Monthly:this.donationFlowModalManager.showThankYouModal({successResponse:d});break;case E.Upsell:this.upsellButtonDataSourceContainer?this.donationFlowModalManager.showThankYouModal({successResponse:this.upsellButtonDataSourceContainer.oneTimeSuccessResponse,upsellSuccessResponse:d}):this.donationFlowModalManager.showErrorModal({message:"Error setting up monthly donation"});break}})}payPalPaymentCancelled(t,e){return y(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentCancelled",t,e)})}payPalPaymentError(t,e){return y(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentError",t,e),console.error("PaymentSector:payPalPaymentError error:",t,t.donationInfo,e)})}renderPayPalButton(t){return y(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get();this.buttonDataSource=yield i?.renderPayPalButton({selector:"#paypal-button",style:{color:"blue",label:"paypal",shape:"rect",size:"medium",tagline:!1},donationInfo:t}),this.buttonDataSource&&(this.buttonDataSource.delegate=this)})}showUpsellModal(t,e){return y(this,void 0,void 0,function*(){this.donationFlowModalManager.showUpsellModal({oneTimeAmount:e.amount,amountChanged:this.upsellAmountChanged.bind(this),noSelected:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})},ctaMode:Lt.PayPalUpsellSlot,userClosedModalCallback:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})}});const i=Us.getDefaultUpsellAmount(e.amount),n=new D({amount:i,donationType:E.Upsell,coverFees:!1});this.upsellButtonDataSourceContainer||this.renderUpsellPayPalButton({donationInfo:n,oneTimePayload:t,oneTimeSuccessResponse:e})})}upsellAmountChanged(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo.amount=t)}renderUpsellPayPalButton(t){return y(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get(),n=yield i?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:t.donationInfo});n?(n.delegate=this,this.upsellButtonDataSourceContainer=new oy({upsellButtonDataSource:n,oneTimePayload:t.oneTimePayload,oneTimeSuccessResponse:t.oneTimeSuccessResponse})):console.error("error rendering paypal upsell button")})}}class ry{constructor(t){this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}paymentInitiated(t,e){return y(this,void 0,void 0,function*(){var i;this.donationFlowModalManager.showProcessingModal();const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.applePayHandler.get();this.applePayDataSource=yield n?.createPaymentRequest(e,t),this.applePayDataSource&&(this.applePayDataSource.delegate=this)})}modalYesSelected(t,e){return y(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal();const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.donationFlowModalManager.showThankYouModal({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.donationFlowModalManager.showErrorModal({message:n.message})}})}paymentComplete(t){var e;if(t.success){const i=t.value;((e=this.applePayDataSource)===null||e===void 0?void 0:e.donationInfo.donationType)==E.OneTime?this.donationFlowModalManager.showUpsellModal({oneTimeAmount:i.amount,yesSelected:this.modalYesSelected.bind(this,i),noSelected:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i}),userClosedModalCallback:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i})}):this.donationFlowModalManager.showThankYouModal({successResponse:i})}else{const i=t.value;this.donationFlowModalManager.showErrorModal({message:i.message})}}paymentFailed(){this.donationFlowModalManager.showErrorModal({message:"Payment failed"})}paymentCancelled(){this.donationFlowModalManager.closeModal()}}class wc{constructor(t){this.contactInfo=t.contactInfo,this.donationInfo=t.donationInfo}}class ay{constructor(t){var e,i;this.persistanceKey="venmoRestorationStateInfo",this.storageSystem=(i=(e=t?.storageSystem)!==null&&e!==void 0?e:this.getAvailableStorageSystem(()=>localStorage))!==null&&i!==void 0?i:this.getAvailableStorageSystem(()=>sessionStorage)}clearState(){var t;(t=this.storageSystem)===null||t===void 0||t.removeItem(this.persistanceKey)}persistState(t,e){var i;const n=new wc({contactInfo:t,donationInfo:e}),s=JSON.stringify(n);(i=this.storageSystem)===null||i===void 0||i.setItem(this.persistanceKey,s)}getRestorationState(){return y(this,void 0,void 0,function*(){var t;const e=(t=this.storageSystem)===null||t===void 0?void 0:t.getItem(this.persistanceKey);if(!e){console.error("restoreState: No stored data");return}const i=JSON.parse(e);if(!i){console.error("restoreState: Data could not be deserialized");return}return new wc(i)})}getAvailableStorageSystem(t){try{const e=t();return e.setItem("foo","bar"),e.removeItem("foo"),e}catch{return}}}class ly{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.restorationStateHandler=(e=t.restorationStateHandler)!==null&&e!==void 0?e:new ay}startup(){return y(this,void 0,void 0,function*(){const t=yield this.braintreeManager.paymentProviders.venmoHandler.get(),e=yield t?.instance.get();if(e?.hasTokenizationResult()){const i=yield this.restorationStateHandler.getRestorationState();i?this.paymentInitiated(i.contactInfo,i.donationInfo):(console.error("no restoration info"),this.donationFlowModalManager.showErrorModal({message:"Error restoring donation session"}))}})}paymentInitiated(t,e){return y(this,void 0,void 0,function*(){this.restorationStateHandler.persistState(t,e);try{const i=yield this.braintreeManager.paymentProviders.venmoHandler.get(),n=yield i?.startPayment();if(!n){this.restorationStateHandler.clearState(),this.donationFlowModalManager.showErrorModal({message:"Error setting up the donation"});return}this.handleTokenizationResult(n,t,e)}catch(i){this.restorationStateHandler.clearState(),this.handleTokenizationError(i),this.donationFlowModalManager.showErrorModal({message:"There was a problem loading your donation information. Please try again."})}})}handleTokenizationResult(t,e,i){return y(this,void 0,void 0,function*(){this.restorationStateHandler.clearState(),this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:b.Venmo,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing})})}handleTokenizationError(t){switch(t.code){case"VENMO_APP_CANCELED":break;case"VENMO_CANCELED":break;default:console.error("Error!",t)}}}class dy{constructor(t){this.emitter=Ii(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}paymentInitiated(t){return y(this,void 0,void 0,function*(){var e,i;const n=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.googlePayHandler.get(),s=yield n.instance.get(),r=yield s.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${t.total}`}}),c=r.allowedPaymentMethods[0];c.parameters.billingAddressRequired=!0,c.parameters.billingAddressParameters={format:"FULL",phoneNumberRequired:!1};try{const a=yield n.paymentsClient.loadPaymentData(r),l=yield s.parseResponse(a),d=(i=a.paymentMethodData.info)===null||i===void 0?void 0:i.billingAddress,h=d?.name;let u=h,p="";const _=h?.lastIndexOf(" ");_&&_!==-1&&(u=h?.substr(0,_),p=h?.substr(_));const g=new io({email:a.email,firstName:u,lastName:p}),N=new eo({streetAddress:d?.address1,extendedAddress:d?.address2,locality:d?.locality,region:d?.administrativeArea,postalCode:d?.postalCode,countryCodeAlpha2:d?.countryCode});this.donationFlowModalManager.startDonationSubmissionFlow({nonce:l.nonce,paymentProvider:b.GooglePay,bin:l.details.bin,binName:l.binData.issuingBank,donationInfo:t,customerInfo:g,billingInfo:N})}catch{this.emitter.emit("paymentCancelled"),this.donationFlowModalManager.closeModal()}})}}class cy{startup(){return y(this,void 0,void 0,function*(){var t,e;(t=this.venmoHandler)===null||t===void 0||t.startup(),(e=this.creditCardHandler)===null||e===void 0||e.startup()})}showUpsellModal(t){return y(this,void 0,void 0,function*(){return this.donationFlowModalManager.showUpsellModal(t)})}showConfirmationStepModal(t){return this.donationFlowModalManager.showConfirmationStepModal(t)}get creditCardHandler(){return this.creditCardHandlerCache?this.creditCardHandlerCache:(this.creditCardHandlerCache=new Xv({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager,recaptchaManager:this.recaptchaManager}),this.creditCardHandlerCache)}get paypalHandler(){return this.paypalHandlerCache?this.paypalHandlerCache:(this.paypalHandlerCache=new sy({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.paypalHandlerCache)}get applePayHandler(){return this.applePayHandlerCache?this.applePayHandlerCache:(this.applePayHandlerCache=new ry({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.applePayHandlerCache)}get venmoHandler(){return this.venmoHandlerCache?this.venmoHandlerCache:(this.venmoHandlerCache=new ly({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.venmoHandlerCache)}get googlePayHandler(){return this.googlePayHandlerCache?this.googlePayHandlerCache:(this.googlePayHandlerCache=new dy({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.googlePayHandlerCache)}constructor(t){this.braintreeManager=t.braintreeManager,this.modalManager=t.modalManager,this.recaptchaManager=t.recaptchaManager,this.resources=t.resources,this.donationFlowModalManager=new Us({braintreeManager:this.braintreeManager,modalManager:this.modalManager,analytics:this.resources.analytics})}}class hy{constructor(t){this.isExecuting=!1,this.grecaptchaLibrary=t.grecaptchaLibrary,this.siteKey=t.siteKey}execute(){return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,e)=>{this.executionSuccessBlock=i=>{this.finishExecution(),t(i)},this.executionExpiredBlock=()=>{this.finishExecution(),e("expired")},this.executionErrorBlock=()=>{this.finishExecution(),e("error")},this.grecaptchaLibrary.execute()})}finishExecution(){this.isExecuting=!1,this.grecaptchaLibrary.reset()}setup(t,e,i,n){this.grecaptchaLibrary.render(t,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:e,theme:i,type:n,size:"invisible"})}responseHandler(t){this.executionSuccessBlock&&(this.executionSuccessBlock(t),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class uy{constructor(t){this.hostedFieldFieldOptions=t.hostedFieldFieldOptions,this.hostedFieldStyle=t.hostedFieldStyle,this.hostedFieldContainer=t.hostedFieldContainer}}var pt;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(pt||(pt={}));let He=class extends I{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=pt.LeaveSpace,this.requiredIndicatorSpaceOption=pt.LeaveSpace}render(){return $`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?$` * `:T}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===pt.CompressSpace?"compress-space":""}static get styles(){const t=v`var(--inputBorder, 1px solid #d9d9d9)`,e=v`var(--badgedInputBorderErrorColor, red)`,i=v`var(--badgedInputIconSize, 20px)`,n=v`var(--badgedInputIconColor, #2c2c2c)`,s=v`var(--badgedInputIconSpacerWidth, 3rem)`,r=v`var(--badgedInputNoIconSpacerWidth, 1rem)`,c=v`var(--badgedInputHeight, 3rem)`,a=v`var(--badgedInputRequiredIndicatorColor, red)`,l=v`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,d=v`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return v`
      .input-wrapper {
        border: ${t};
        height: ${c};
        display: flex;
        align-items: center;
      }

      .input-wrapper.error {
        box-shadow: inset 0px 0px 0px 1px ${e};
        border-color: ${e};
      }

      .input-wrapper.compress-space .icon-container {
        width: ${r};
      }

      .icon-container {
        width: ${s};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-container svg {
        height: ${i};
        width: ${i};
        fill: ${n};
      }

      .required-indicator {
        color: ${a};
        font-size: ${d};
        margin: ${l};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};m([A({type:Boolean})],He.prototype,"error",void 0);m([A({type:Object})],He.prototype,"icon",void 0);m([A({type:Boolean})],He.prototype,"required",void 0);m([A({type:String})],He.prototype,"iconSpaceOption",void 0);m([A({type:String})],He.prototype,"requiredIndicatorSpaceOption",void 0);He=m([vt("badged-input")],He);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=o=>o??F,br={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const py=o=>typeof o!="string"&&"strTag"in o,my=(o,t,e)=>{let i=o[0];for(let n=1;n<o.length;n++)i+=t[n-1],i+=o[n];return i};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vy=o=>py(o)?my(o.strings,o.values):o;let ro=vy;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class gy{constructor(){this.settled=!1,this.promise=new Promise((t,e)=>{this._resolve=t,this._reject=e})}resolve(t){this.settled=!0,this._resolve(t)}reject(t){this.settled=!0,this._reject(t)}}/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */for(let o=0;o<256;o++)(o>>4&15).toString(16)+(o&15).toString(16);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let yy=new gy;yy.resolve();let U=class extends I{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail="",this.minTwoCharPattern=".*\\S{2,}.*",this.minTwoCharValidationMessage=ro("Enter at least two characters"),this.streetAddressPattern=".*?\\S.{2,}\\S.*?",this.streetAddressValidationMessage=ro("Enter at least four characters"),this.usZipCodePattern="^\\d{5}(-?\\d{4})?$",this.usZipCodeValidationMessage=ro("Enter a valid 5 or 9 digit zip/postal code")}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){return this.validateFormFields(),this.validateForm()}validateFormFields(){[{badgedInput:this.emailBadgedInput,inputField:this.emailField},{badgedInput:this.firstNameBadgedInput,inputField:this.firstNameField},{badgedInput:this.lastNameBadgedInput,inputField:this.lastNameField},{badgedInput:this.streetAddressBadgedInput,inputField:this.streetAddressField},{badgedInput:this.localityBadgedInput,inputField:this.localityField},{badgedInput:this.regionBadgedInput,inputField:this.regionField},{badgedInput:this.postalBadgedInput,inputField:this.postalCodeField}].forEach(({badgedInput:e,inputField:i})=>{e.error=!i.checkValidity()})}validateForm(){const t=this.form.reportValidity();return t?this.errorMessage.innerText="":this.errorMessage.innerText=ro("Please enter any missing or invalid contact information below"),t}focus(){this.emailField.focus()}render(){return $`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <div class="row">
          ${this.generateInput({id:"donation-contact-form-email",label:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",minlength:5,maxlength:255})}
        </div>

        <div class="row">
          ${this.generateInput({id:"donation-contact-form-first-name",label:"First name",name:"fname",required:!0,validationPattern:this.minTwoCharPattern,validationMessage:this.minTwoCharValidationMessage,maxlength:255,autocomplete:"given-name"})}
          ${this.generateInput({id:"donation-contact-form-last-name",label:"Last name",name:"lname",autocomplete:"family-name",required:!0,validationPattern:this.minTwoCharPattern,validationMessage:this.minTwoCharValidationMessage,maxlength:255})}
        </div>

        <div class="row">
          ${this.generateInput({id:"donation-contact-form-street-address",label:"Address",required:!0,autocomplete:"address-line1",name:"street-address",validationPattern:this.streetAddressPattern,validationMessage:this.streetAddressValidationMessage})}
        </div>
        <div class="row">
          ${this.generateInput({id:"donation-contact-form-locality",label:"City",autocomplete:"address-level2",required:!0,name:"locality",validationPattern:this.minTwoCharPattern,validationMessage:this.minTwoCharValidationMessage})}
        </div>
        <div class="row">${this.countrySelectorTemplate}</div>
        <div class="row region-postal-row">
          ${this.generateInput({id:"donation-contact-form-region",label:"State / Province",autocomplete:"address-level1",required:this.regionAndPostalCodeRequired,name:"region",validationPattern:this.regionAndPostalCodeRequired?this.minTwoCharPattern:void 0,validationMessage:this.regionAndPostalCodeRequired?this.minTwoCharValidationMessage:void 0})}
          ${this.generateInput({id:"donation-contact-form-postal-code",label:"Zip / Postal Code",autocomplete:"postal-code",required:this.regionAndPostalCodeRequired,name:"postal",validationPattern:this.regionAndPostalCodeRequired?this.usZipCodePattern:void 0,validationMessage:this.regionAndPostalCodeRequired?this.usZipCodeValidationMessage:void 0})}
        </div>
      </form>
      ${this.getStyles}
    `}get regionAndPostalCodeRequired(){return this.selectedCountry==="US"}get countrySelectorTemplate(){return $`
      <div class="field">
        <label for="donation-contact-form-countryCodeAlpha2" class="field-label">
          Country<span class="required-asterisk"> *</span>
        </label>
        <badged-input .iconSpaceOption=${pt.CompressSpace}>
          <select
            id="donation-contact-form-countryCodeAlpha2"
            @change=${t=>{const e=t.target.value;br[e]&&(this.selectedCountry=e)}}
          >
            ${Object.keys(br).map(t=>{const e=br[t];return $`
                <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
              `})}
          </select>
        </badged-input>
      </div>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n;const s=(e=t.required)!==null&&e!==void 0?e:!0,r=(i=t.fieldType)!==null&&i!==void 0?i:"text";return $`
      <div class="field ${t.id}">
        <label for=${t.id} class="field-label">
          ${t.label}${s?$`<span class="required-asterisk"> *</span>`:T}
        </label>
        <badged-input
          class=${t.id}
          .iconSpaceOption=${pt.CompressSpace}
          .requiredIndicatorSpaceOption=${pt.CompressSpace}
        >
          <input
            type=${r}
            id=${t.id}
            class="donation-contact-form-input"
            name=${t.name}
            maxlength=${so(t.maxlength)}
            minlength=${so(t.minlength)}
            autocomplete=${(n=t.autocomplete)!==null&&n!==void 0?n:"on"}
            pattern=${so(t.validationPattern)}
            title=${so(t.validationMessage)}
            @focus=${this.inputFocused}
            ?required=${s}
          />
        </badged-input>
      </div>
    `}get donorContactInfo(){return new Fm({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new eo({streetAddress:this.streetAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new io({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=v`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=v`var(--fieldRowGap, 5px)`,i=v`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,n=v`var(--contactFieldFontSize, 14px)`,s=v`var(--inputFieldFontColor, #2c2c2c)`,r=v`var(--fieldLabelFontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,c=v`var(--fieldLabelFontSize, 14px)`,a=v`var(--fieldLabelColor, #2c2c2c)`,l=v`var(--fieldLabelMarginBottom, 5px)`,d=v`var(--badgedInputRequiredIndicatorColor, red)`,h=v`calc(100% - ${t})`;return $`
      <style>
        /*
          **NOTE**
          This element is in the lightDOM so be sure to prefix all styles
          with "contact-form" so styles don't leak.
         */
        /*
          Grid (not flex) so that a label wrapping to two lines in one column
          doesn't push that column's input out of alignment with its siblings -
          all labels share row-line 1 and all inputs share row-line 2, each
          sized to the tallest content in that line.
        */
        contact-form .row {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          grid-template-rows: auto auto;
          column-gap: ${e};
        }

        /*
          Per WEBDEV-8310 QA feedback: State/Province gives up space to
          Zip/Postal Code so "Zip / Postal Code" stops wrapping to two lines.
          30px (not 10px) is what "Zip / Postal Code *" actually needs at this
          width, measured against its rendered label width plus a safety margin.
        */
        contact-form .row.region-postal-row {
          grid-template-columns: calc(60% - 30px) calc(40% + 30px);
        }

        /* uniform vertical rhythm between every field, regardless of grouping */
        contact-form .row + .row {
          margin-top: ${e};
        }

        contact-form .field {
          display: contents;
        }

        contact-form .field-label {
          display: block;
          font-family: ${r};
          font-size: ${c};
          font-weight: bold;
          color: ${a};
          margin-bottom: ${l};
        }

        contact-form .required-asterisk {
          color: ${d};
        }

        contact-form badged-input.donation-contact-form-region,
        contact-form badged-input.donation-contact-form-postal-code {
          width: 100%;
        }

        contact-form #donation-contact-form-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        contact-form .donation-contact-form-input {
          width: ${h};
          border: 0;
          outline: 0;
          background: transparent;
          font-weight: bold;
          color: ${s};
          font-size: ${n};
          padding: 0;
          font-family: ${i};
        }

        contact-form #donation-contact-form-countryCodeAlpha2 {
          width: ${h};
          height: 100%;
          box-sizing: border-box;
          font-weight: bold;
          font-size: ${n};
          color: ${s};
          font-family: ${i};
          border: 0;
          background: #fff;
        }
      </style>
    `}};m([M("badged-input.donation-contact-form-email")],U.prototype,"emailBadgedInput",void 0);m([M("#donation-contact-form-email")],U.prototype,"emailField",void 0);m([M("badged-input.donation-contact-form-first-name")],U.prototype,"firstNameBadgedInput",void 0);m([M("#donation-contact-form-first-name")],U.prototype,"firstNameField",void 0);m([M("badged-input.donation-contact-form-last-name")],U.prototype,"lastNameBadgedInput",void 0);m([M("#donation-contact-form-last-name")],U.prototype,"lastNameField",void 0);m([M("badged-input.donation-contact-form-postal-code")],U.prototype,"postalBadgedInput",void 0);m([M("#donation-contact-form-postal-code")],U.prototype,"postalCodeField",void 0);m([M("badged-input.donation-contact-form-street-address")],U.prototype,"streetAddressBadgedInput",void 0);m([M("#donation-contact-form-street-address")],U.prototype,"streetAddressField",void 0);m([M("badged-input.donation-contact-form-locality")],U.prototype,"localityBadgedInput",void 0);m([M("#donation-contact-form-locality")],U.prototype,"localityField",void 0);m([M("badged-input.donation-contact-form-region")],U.prototype,"regionBadgedInput",void 0);m([M("#donation-contact-form-region")],U.prototype,"regionField",void 0);m([M("#donation-contact-form-countryCodeAlpha2")],U.prototype,"countryCodeAlpha2Field",void 0);m([M("#donation-contact-form-error-message")],U.prototype,"errorMessage",void 0);m([M("form")],U.prototype,"form",void 0);m([A({type:String})],U.prototype,"selectedCountry",void 0);m([A({type:String})],U.prototype,"donorEmail",void 0);U=m([vt("contact-form")],U);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fo=window,Fl=fo.ShadowRoot&&(fo.ShadyCSS===void 0||fo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dp=Symbol(),Pc=new WeakMap;let $y=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Dp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Fl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Pc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Pc.set(e,t))}return t}toString(){return this.cssText}};const fy=o=>new $y(typeof o=="string"?o:o+"",void 0,Dp),_y=(o,t)=>{Fl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=fo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Mc=Fl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return fy(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sr;const Ko=window,xc=Ko.trustedTypes,Ay=xc?xc.emptyScript:"",Tc=Ko.reactiveElementPolyfillSupport,Da={toAttribute(o,t){switch(t){case Boolean:o=o?Ay:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Fp=(o,t)=>t!==o&&(t==t||o==o),Cr={attribute:!0,type:String,converter:Da,reflect:!1,hasChanged:Fp},Fa="finalized";let Zi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Cr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Cr}static finalize(){if(this.hasOwnProperty(Fa))return!1;this[Fa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Mc(n))}else t!==void 0&&e.push(Mc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _y(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Cr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Da).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Da;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Fp)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Zi[Fa]=!0,Zi.elementProperties=new Map,Zi.elementStyles=[],Zi.shadowRootOptions={mode:"open"},Tc?.({ReactiveElement:Zi}),((Sr=Ko.reactiveElementVersions)!==null&&Sr!==void 0?Sr:Ko.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Er;const Zo=window,hi=Zo.trustedTypes,kc=hi?hi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ra="$lit$",kt=`lit$${(Math.random()+"").slice(9)}$`,Rp="?"+kt,by=`<${Rp}>`,Ue=document,Yo=()=>Ue.createComment(""),Un=o=>o===null||typeof o!="object"&&typeof o!="function",Op=Array.isArray,Sy=o=>Op(o)||typeof o?.[Symbol.iterator]=="function",wr=`[ 	
\f\r]`,Yi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ic=/-->/g,Hc=/>/g,Yt=RegExp(`>|${wr}(?:([^\\s"'>=/]+)(${wr}*=${wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Uc=/'/g,Nc=/"/g,Lp=/^(?:script|style|textarea|title)$/i,Nn=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Dc=new WeakMap,ve=Ue.createTreeWalker(Ue,129,null,!1);function Bp(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return kc!==void 0?kc.createHTML(t):t}const Cy=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Yi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Yi?d[1]==="!--"?r=Ic:d[1]!==void 0?r=Hc:d[2]!==void 0?(Lp.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Yt):d[3]!==void 0&&(r=Yt):r===Yt?d[0]===">"?(r=n??Yi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Yt:d[3]==='"'?Nc:Uc):r===Nc||r===Uc?r=Yt:r===Ic||r===Hc?r=Yi:(r=Yt,n=void 0);const p=r===Yt&&o[c+1].startsWith("/>")?" ":"";s+=r===Yi?a+by:h>=0?(i.push(l),a.slice(0,h)+Ra+a.slice(h)+kt+p):a+kt+(h===-2?(i.push(void 0),c):p)}return[Bp(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Oa=class zp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Cy(t,e);if(this.el=zp.createElement(l,i),ve.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=ve.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ra)||u.startsWith(kt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ra).split(kt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?wy:g[1]==="?"?My:g[1]==="@"?xy:Ns})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(Lp.test(n.tagName)){const h=n.textContent.split(kt),u=h.length-1;if(u>0){n.textContent=hi?hi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Yo()),ve.nextNode(),a.push({type:2,index:++s});n.append(h[u],Yo())}}}else if(n.nodeType===8)if(n.data===Rp)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(kt,h+1))!==-1;)a.push({type:7,index:s}),h+=kt.length-1}s++}}static createElement(t,e){const i=Ue.createElement("template");return i.innerHTML=t,i}};function ui(o,t,e=o,i){var n,s,r,c;if(t===Nn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Un(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ui(o,a._$AS(o,t.values),a,i)),t}let Ey=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ue).importNode(i,!0);ve.currentNode=s;let r=ve.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Vp(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Ty(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=ve.nextNode(),c++)}return ve.currentNode=Ue,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Vp=class jp{constructor(t,e,i,n){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ui(this,t,e),Un(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Nn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Sy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&Un(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ue.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Oa.createElement(Bp(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Ey(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Dc.get(t.strings);return e===void 0&&Dc.set(t.strings,e=new Oa(t)),e}T(t){Op(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new jp(this.k(Yo()),this.k(Yo()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ns=class{constructor(t,e,i,n,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ui(this,t,e,0),r=!Un(t)||t!==this._$AH&&t!==Nn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ui(this,c[i+a],e,a),l===Nn&&(l=this._$AH[a]),r||(r=!Un(l)||l!==this._$AH[a]),l===z?t=z:t!==z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},wy=class extends Ns{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const Py=hi?hi.emptyScript:"";let My=class extends Ns{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Py):this.element.removeAttribute(this.name)}},xy=class extends Ns{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ui(this,t,e,0))!==null&&i!==void 0?i:z)===Nn)return;const n=this._$AH,s=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==z&&(n===z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ty=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ui(this,t)}};const Fc=Zo.litHtmlPolyfillSupport;Fc?.(Oa,Vp),((Er=Zo.litHtmlVersions)!==null&&Er!==void 0?Er:Zo.litHtmlVersions=[]).push("2.8.0");const ky=$`
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
 */const _o=window,Rl=_o.ShadowRoot&&(_o.ShadyCSS===void 0||_o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qp=Symbol(),Rc=new WeakMap;let Iy=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==qp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Rl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Rc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Rc.set(e,t))}return t}toString(){return this.cssText}};const Hy=o=>new Iy(typeof o=="string"?o:o+"",void 0,qp),Uy=(o,t)=>{Rl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=_o.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Oc=Rl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Hy(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pr;const Jo=window,Lc=Jo.trustedTypes,Ny=Lc?Lc.emptyScript:"",Bc=Jo.reactiveElementPolyfillSupport,La={toAttribute(o,t){switch(t){case Boolean:o=o?Ny:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Wp=(o,t)=>t!==o&&(t==t||o==o),Mr={attribute:!0,type:String,converter:La,reflect:!1,hasChanged:Wp},Ba="finalized";let Ji=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Mr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Mr}static finalize(){if(this.hasOwnProperty(Ba))return!1;this[Ba]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Oc(n))}else t!==void 0&&e.push(Oc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Uy(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Mr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:La).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:La;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Wp)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Ji[Ba]=!0,Ji.elementProperties=new Map,Ji.elementStyles=[],Ji.shadowRootOptions={mode:"open"},Bc?.({ReactiveElement:Ji}),((Pr=Jo.reactiveElementVersions)!==null&&Pr!==void 0?Pr:Jo.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xr;const Qo=window,pi=Qo.trustedTypes,zc=pi?pi.createPolicy("lit-html",{createHTML:o=>o}):void 0,za="$lit$",It=`lit$${(Math.random()+"").slice(9)}$`,Gp="?"+It,Dy=`<${Gp}>`,Ne=document,Xo=()=>Ne.createComment(""),Dn=o=>o===null||typeof o!="object"&&typeof o!="function",Kp=Array.isArray,Fy=o=>Kp(o)||typeof o?.[Symbol.iterator]=="function",Tr=`[ 	
\f\r]`,Qi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vc=/-->/g,jc=/>/g,Jt=RegExp(`>|${Tr}(?:([^\\s"'>=/]+)(${Tr}*=${Tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qc=/'/g,Wc=/"/g,Zp=/^(?:script|style|textarea|title)$/i,Fn=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),Gc=new WeakMap,ge=Ne.createTreeWalker(Ne,129,null,!1);function Yp(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return zc!==void 0?zc.createHTML(t):t}const Ry=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Qi;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Qi?d[1]==="!--"?r=Vc:d[1]!==void 0?r=jc:d[2]!==void 0?(Zp.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Jt):d[3]!==void 0&&(r=Jt):r===Jt?d[0]===">"?(r=n??Qi,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Jt:d[3]==='"'?Wc:qc):r===Wc||r===qc?r=Jt:r===Vc||r===jc?r=Qi:(r=Jt,n=void 0);const p=r===Jt&&o[c+1].startsWith("/>")?" ":"";s+=r===Qi?a+Dy:h>=0?(i.push(l),a.slice(0,h)+za+a.slice(h)+It+p):a+It+(h===-2?(i.push(void 0),c):p)}return[Yp(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Va=class Jp{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Ry(t,e);if(this.el=Jp.createElement(l,i),ge.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=ge.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(za)||u.startsWith(It)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+za).split(It),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Ly:g[1]==="?"?zy:g[1]==="@"?Vy:Ds})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(Zp.test(n.tagName)){const h=n.textContent.split(It),u=h.length-1;if(u>0){n.textContent=pi?pi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],Xo()),ge.nextNode(),a.push({type:2,index:++s});n.append(h[u],Xo())}}}else if(n.nodeType===8)if(n.data===Gp)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(It,h+1))!==-1;)a.push({type:7,index:s}),h+=It.length-1}s++}}static createElement(t,e){const i=Ne.createElement("template");return i.innerHTML=t,i}};function mi(o,t,e=o,i){var n,s,r,c;if(t===Fn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Dn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=mi(o,a._$AS(o,t.values),a,i)),t}let Oy=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ne).importNode(i,!0);ge.currentNode=s;let r=ge.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Qp(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new jy(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=ge.nextNode(),c++)}return ge.currentNode=Ne,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Qp=class Xp{constructor(t,e,i,n){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=mi(this,t,e),Dn(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==Fn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Fy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&Dn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ne.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Va.createElement(Yp(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Oy(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Gc.get(t.strings);return e===void 0&&Gc.set(t.strings,e=new Va(t)),e}T(t){Kp(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Xp(this.k(Xo()),this.k(Xo()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ds=class{constructor(t,e,i,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=mi(this,t,e,0),r=!Dn(t)||t!==this._$AH&&t!==Fn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=mi(this,c[i+a],e,a),l===Fn&&(l=this._$AH[a]),r||(r=!Dn(l)||l!==this._$AH[a]),l===V?t=V:t!==V&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ly=class extends Ds{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}};const By=pi?pi.emptyScript:"";let zy=class extends Ds{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,By):this.element.removeAttribute(this.name)}},Vy=class extends Ds{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=mi(this,t,e,0))!==null&&i!==void 0?i:V)===Fn)return;const n=this._$AH,s=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==V&&(n===V||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},jy=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){mi(this,t)}};const Kc=Qo.litHtmlPolyfillSupport;Kc?.(Va,Qp),((xr=Qo.litHtmlVersions)!==null&&xr!==void 0?xr:Qo.litHtmlVersions=[]).push("2.8.0");const qy=$`
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
 */const Ao=window,Ol=Ao.ShadowRoot&&(Ao.ShadyCSS===void 0||Ao.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t0=Symbol(),Zc=new WeakMap;let Wy=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==t0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ol&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Zc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Zc.set(e,t))}return t}toString(){return this.cssText}};const Gy=o=>new Wy(typeof o=="string"?o:o+"",void 0,t0),Ky=(o,t)=>{Ol?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Ao.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Yc=Ol?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Gy(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kr;const ts=window,Jc=ts.trustedTypes,Zy=Jc?Jc.emptyScript:"",Qc=ts.reactiveElementPolyfillSupport,ja={toAttribute(o,t){switch(t){case Boolean:o=o?Zy:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},e0=(o,t)=>t!==o&&(t==t||o==o),Ir={attribute:!0,type:String,converter:ja,reflect:!1,hasChanged:e0},qa="finalized";let Xi=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ir){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ir}static finalize(){if(this.hasOwnProperty(qa))return!1;this[qa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Yc(n))}else t!==void 0&&e.push(Yc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ky(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ir){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ja).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ja;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||e0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Xi[qa]=!0,Xi.elementProperties=new Map,Xi.elementStyles=[],Xi.shadowRootOptions={mode:"open"},Qc?.({ReactiveElement:Xi}),((kr=ts.reactiveElementVersions)!==null&&kr!==void 0?kr:ts.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hr;const es=window,vi=es.trustedTypes,Xc=vi?vi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Wa="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,i0="?"+Ht,Yy=`<${i0}>`,De=document,is=()=>De.createComment(""),Rn=o=>o===null||typeof o!="object"&&typeof o!="function",n0=Array.isArray,Jy=o=>n0(o)||typeof o?.[Symbol.iterator]=="function",Ur=`[ 	
\f\r]`,tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,th=/-->/g,eh=/>/g,Qt=RegExp(`>|${Ur}(?:([^\\s"'>=/]+)(${Ur}*=${Ur}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ih=/'/g,nh=/"/g,o0=/^(?:script|style|textarea|title)$/i,On=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),oh=new WeakMap,ye=De.createTreeWalker(De,129,null,!1);function s0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xc!==void 0?Xc.createHTML(t):t}const Qy=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=tn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===tn?d[1]==="!--"?r=th:d[1]!==void 0?r=eh:d[2]!==void 0?(o0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Qt):d[3]!==void 0&&(r=Qt):r===Qt?d[0]===">"?(r=n??tn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Qt:d[3]==='"'?nh:ih):r===nh||r===ih?r=Qt:r===th||r===eh?r=tn:(r=Qt,n=void 0);const p=r===Qt&&o[c+1].startsWith("/>")?" ":"";s+=r===tn?a+Yy:h>=0?(i.push(l),a.slice(0,h)+Wa+a.slice(h)+Ht+p):a+Ht+(h===-2?(i.push(void 0),c):p)}return[s0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ga=class r0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Qy(t,e);if(this.el=r0.createElement(l,i),ye.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=ye.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Wa)||u.startsWith(Ht)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Wa).split(Ht),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?t$:g[1]==="?"?i$:g[1]==="@"?n$:Fs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(o0.test(n.tagName)){const h=n.textContent.split(Ht),u=h.length-1;if(u>0){n.textContent=vi?vi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],is()),ye.nextNode(),a.push({type:2,index:++s});n.append(h[u],is())}}}else if(n.nodeType===8)if(n.data===i0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Ht,h+1))!==-1;)a.push({type:7,index:s}),h+=Ht.length-1}s++}}static createElement(t,e){const i=De.createElement("template");return i.innerHTML=t,i}};function gi(o,t,e=o,i){var n,s,r,c;if(t===On)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Rn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=gi(o,a._$AS(o,t.values),a,i)),t}let Xy=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:De).importNode(i,!0);ye.currentNode=s;let r=ye.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new a0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new o$(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=ye.nextNode(),c++)}return ye.currentNode=De,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},a0=class l0{constructor(t,e,i,n){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gi(this,t,e),Rn(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==On&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Jy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&Rn(this._$AH)?this._$AA.nextSibling.data=t:this.$(De.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ga.createElement(s0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Xy(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=oh.get(t.strings);return e===void 0&&oh.set(t.strings,e=new Ga(t)),e}T(t){n0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new l0(this.k(is()),this.k(is()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Fs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=gi(this,t,e,0),r=!Rn(t)||t!==this._$AH&&t!==On,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=gi(this,c[i+a],e,a),l===On&&(l=this._$AH[a]),r||(r=!Rn(l)||l!==this._$AH[a]),l===j?t=j:t!==j&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},t$=class extends Fs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}};const e$=vi?vi.emptyScript:"";let i$=class extends Fs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,e$):this.element.removeAttribute(this.name)}},n$=class extends Fs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=gi(this,t,e,0))!==null&&i!==void 0?i:j)===On)return;const n=this._$AH,s=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},o$=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gi(this,t)}};const sh=es.litHtmlPolyfillSupport;sh?.(Ga,a0),((Hr=es.litHtmlVersions)!==null&&Hr!==void 0?Hr:es.litHtmlVersions=[]).push("2.8.0");const Ll=$`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="lockTitleID lockDescID">
  <title id="lockTitleID">Lock icon</title>
  <desc id="lockDescID">An illustration of a lock</desc>
  <path
    d="m9.8480234 5.66075891v-2.17912633c-.00688261-.97492716-.37725298-1.79574705-1.11111111-2.46245966s-1.63734389-1.00632179-2.71045726-1.01882754c-1.04529617-.01250574-1.94175593.31459769-2.68937928.9813103-.74762335.66671262-1.13190232 1.4842758-1.15283692 2.45268954v2.22641369c-.04846504.00625288-.10037138.01250575-.15571902.01875862-.05534764.00625288-.09348877.00937931-.11442337.00937931-.35302046.00625288-.59362498.06917241-.72181356.18875862-.12818859.1195862-.19228288.33022987-.19228288.631931v4.73576994c0 .5030957.269999.7546436.80999699.7546436h8.36968211c.2839076 0 .491533-.0597931.6228761-.1793793s.197158-.3082145.1974448-.565885v-4.82057452c0-.25793103-.0640943-.44499615-.1922829-.56119538s-.3340933-.17755555-.6177141-.18406896c-.0415824 0-.102092-.00468965-.1815288-.01406896-.07943676-.00937931-.13306375-.01406897-.16088096-.01406897zm-1.85873446.00937931h-3.92523766c-.01376522-.12583907-.02064783-.21077393-.02064783-.25480458l-.01032391-.97154019c0-.65420686.0034413-.9813103.01032391-.9813103.00688261-.49684289.1919961-.91513405.55534047-1.2548735.36334438-.33973945.81845687-.51273561 1.36533747-.51898848.52623277-.01875862.98492995.13691187 1.37609154.46701147.39116158.3300996.60050759.74044441.62803802 1.23103443.01376522.2076475.02064783.83032946.02064783 1.86804589v.41503446z"
    class="fill-color"
  />
</svg>
`;let yi=class extends I{get hostedFieldContainer(){return new Qv({number:this.numberField,cvv:this.cvvField,expirationDate:this.expirationField,errorContainer:this.errorMessageField})}render(){return $`
      <div id="braintree-error-message"></div>
      <div class="braintree-row">
        <div class="field">
          <label class="field-label">Card Number<span class="required-asterisk"> *</span></label>
          <badged-input
            .icon=${ky}
            .requiredIndicatorSpaceOption=${pt.CompressSpace}
            class="creditcard"
          >
            <div class="braintree-input" id="braintree-creditcard"></div>
          </badged-input>
        </div>
      </div>
      <div class="braintree-row expiration-cvv-row">
        <div class="field">
          <label class="field-label"
            >Expiration (MM / YY)<span class="required-asterisk"> *</span></label
          >
          <badged-input
            .icon=${qy}
            .requiredIndicatorSpaceOption=${pt.CompressSpace}
            class="expiration"
          >
            <div class="braintree-input" id="braintree-expiration"></div>
          </badged-input>
        </div>
        <div class="field">
          <label class="field-label">CVC<span class="required-asterisk"> *</span></label>
          <badged-input
            .icon=${Ll}
            .requiredIndicatorSpaceOption=${pt.CompressSpace}
            class="cvv"
          >
            <div class="braintree-input" id="braintree-cvv"></div>
          </badged-input>
        </div>
      </div>
      ${this.getStyles}
    `}createRenderRoot(){return this}get getStyles(){const t=v`var(--fieldLabelFontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,e=v`var(--fieldLabelFontSize, 14px)`,i=v`var(--fieldLabelColor, #2c2c2c)`,n=v`var(--fieldLabelMarginBottom, 5px)`,s=v`var(--fieldRowGap, 5px)`,r=v`var(--badgedInputRequiredIndicatorColor, red)`;return $`
      <style>
        /*
          **NOTE**
          This element is in the lightDOM so be sure to prefix all styles
          with "credit-card-fields" so styles don't leak.
         */
        credit-card-fields .field-label {
          display: block;
          font-family: ${t};
          font-size: ${e};
          font-weight: bold;
          color: ${i};
          margin-bottom: ${n};
        }

        credit-card-fields .required-asterisk {
          color: ${r};
        }

        /*
          Grid (not flex) so that a label wrapping to two lines in one column
          doesn't push that column's input out of alignment with its sibling -
          both labels share row-line 1 and both inputs share row-line 2.
        */
        credit-card-fields .braintree-row {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          grid-template-rows: auto auto;
          column-gap: ${s};
        }

        /*
          Per WEBDEV-8310 QA feedback: CVC gives up space to Expiration so
          "Expiration (MM / YY)" stops wrapping to two lines. 25px (not 10px)
          is what it actually needs, measured against its rendered label
          width plus a safety margin - CVC's own label has plenty of room to
          spare.
        */
        credit-card-fields .braintree-row.expiration-cvv-row {
          grid-template-columns: calc(50% + 25px) calc(50% - 25px);
        }

        /* uniform vertical rhythm between every field, regardless of grouping */
        credit-card-fields .braintree-row + .braintree-row {
          margin-top: ${s};
        }

        credit-card-fields .field {
          display: contents;
        }

        credit-card-fields badged-input {
          width: 100%;
        }

        credit-card-fields .braintree-input {
          width: 100%;
          height: 100%;
        }

        credit-card-fields #braintree-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }
      </style>
    `}};m([M("#braintree-creditcard")],yi.prototype,"numberField",void 0);m([M("#braintree-expiration")],yi.prototype,"expirationField",void 0);m([M("#braintree-cvv")],yi.prototype,"cvvField",void 0);m([M("#braintree-error-message")],yi.prototype,"errorMessageField",void 0);yi=m([vt("credit-card-fields")],yi);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bo=window,Bl=bo.ShadowRoot&&(bo.ShadyCSS===void 0||bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,d0=Symbol(),rh=new WeakMap;let s$=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==d0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Bl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=rh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&rh.set(e,t))}return t}toString(){return this.cssText}};const r$=o=>new s$(typeof o=="string"?o:o+"",void 0,d0),a$=(o,t)=>{Bl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=bo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},ah=Bl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nr;const ns=window,lh=ns.trustedTypes,l$=lh?lh.emptyScript:"",dh=ns.reactiveElementPolyfillSupport,Ka={toAttribute(o,t){switch(t){case Boolean:o=o?l$:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},c0=(o,t)=>t!==o&&(t==t||o==o),Dr={attribute:!0,type:String,converter:Ka,reflect:!1,hasChanged:c0},Za="finalized";let en=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Dr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Dr}static finalize(){if(this.hasOwnProperty(Za))return!1;this[Za]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ah(n))}else t!==void 0&&e.push(ah(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return a$(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Dr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ka).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ka;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};en[Za]=!0,en.elementProperties=new Map,en.elementStyles=[],en.shadowRootOptions={mode:"open"},dh?.({ReactiveElement:en}),((Nr=ns.reactiveElementVersions)!==null&&Nr!==void 0?Nr:ns.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fr;const os=window,$i=os.trustedTypes,ch=$i?$i.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ya="$lit$",Ut=`lit$${(Math.random()+"").slice(9)}$`,h0="?"+Ut,d$=`<${h0}>`,Fe=document,ss=()=>Fe.createComment(""),Ln=o=>o===null||typeof o!="object"&&typeof o!="function",u0=Array.isArray,c$=o=>u0(o)||typeof o?.[Symbol.iterator]=="function",Rr=`[ 	
\f\r]`,nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,hh=/-->/g,uh=/>/g,Xt=RegExp(`>|${Rr}(?:([^\\s"'>=/]+)(${Rr}*=${Rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ph=/'/g,mh=/"/g,p0=/^(?:script|style|textarea|title)$/i,Bn=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),vh=new WeakMap,$e=Fe.createTreeWalker(Fe,129,null,!1);function m0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ch!==void 0?ch.createHTML(t):t}const h$=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=nn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===nn?d[1]==="!--"?r=hh:d[1]!==void 0?r=uh:d[2]!==void 0?(p0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Xt):d[3]!==void 0&&(r=Xt):r===Xt?d[0]===">"?(r=n??nn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Xt:d[3]==='"'?mh:ph):r===mh||r===ph?r=Xt:r===hh||r===uh?r=nn:(r=Xt,n=void 0);const p=r===Xt&&o[c+1].startsWith("/>")?" ":"";s+=r===nn?a+d$:h>=0?(i.push(l),a.slice(0,h)+Ya+a.slice(h)+Ut+p):a+Ut+(h===-2?(i.push(void 0),c):p)}return[m0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ja=class v0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=h$(t,e);if(this.el=v0.createElement(l,i),$e.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=$e.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(Ya)||u.startsWith(Ut)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+Ya).split(Ut),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?p$:g[1]==="?"?v$:g[1]==="@"?g$:Rs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(p0.test(n.tagName)){const h=n.textContent.split(Ut),u=h.length-1;if(u>0){n.textContent=$i?$i.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],ss()),$e.nextNode(),a.push({type:2,index:++s});n.append(h[u],ss())}}}else if(n.nodeType===8)if(n.data===h0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Ut,h+1))!==-1;)a.push({type:7,index:s}),h+=Ut.length-1}s++}}static createElement(t,e){const i=Fe.createElement("template");return i.innerHTML=t,i}};function fi(o,t,e=o,i){var n,s,r,c;if(t===Bn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Ln(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=fi(o,a._$AS(o,t.values),a,i)),t}let u$=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Fe).importNode(i,!0);$e.currentNode=s;let r=$e.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new g0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new y$(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=$e.nextNode(),c++)}return $e.currentNode=Fe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},g0=class y0{constructor(t,e,i,n){var s;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=fi(this,t,e),Ln(t)?t===q||t==null||t===""?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==Bn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):c$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&Ln(this._$AH)?this._$AA.nextSibling.data=t:this.$(Fe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ja.createElement(m0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new u$(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=vh.get(t.strings);return e===void 0&&vh.set(t.strings,e=new Ja(t)),e}T(t){u0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new y0(this.k(ss()),this.k(ss()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Rs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=fi(this,t,e,0),r=!Ln(t)||t!==this._$AH&&t!==Bn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=fi(this,c[i+a],e,a),l===Bn&&(l=this._$AH[a]),r||(r=!Ln(l)||l!==this._$AH[a]),l===q?t=q:t!==q&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},p$=class extends Rs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}};const m$=$i?$i.emptyScript:"";let v$=class extends Rs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,m$):this.element.removeAttribute(this.name)}},g$=class extends Rs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=fi(this,t,e,0))!==null&&i!==void 0?i:q)===Bn)return;const n=this._$AH,s=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==q&&(n===q||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},y$=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){fi(this,t)}};const gh=os.litHtmlPolyfillSupport;gh?.(Ja,g0),((Fr=os.litHtmlVersions)!==null&&Fr!==void 0?Fr:os.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $$=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f$=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},_$=(o,t,e)=>{t.constructor.createProperty(e,o)};function _t(o){return(t,e)=>e!==void 0?_$(o,t,e):f$(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $0(o){return _t({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A$=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(c){o(c,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function f0(o,t){return A$({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Or;((Or=window.HTMLSlotElement)===null||Or===void 0?void 0:Or.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const So=window,zl=So.ShadowRoot&&(So.ShadyCSS===void 0||So.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_0=Symbol(),yh=new WeakMap;let b$=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==_0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(zl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=yh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&yh.set(e,t))}return t}toString(){return this.cssText}};const S$=o=>new b$(typeof o=="string"?o:o+"",void 0,_0),C$=(o,t)=>{zl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=So.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},$h=zl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return S$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lr;const rs=window,fh=rs.trustedTypes,E$=fh?fh.emptyScript:"",_h=rs.reactiveElementPolyfillSupport,Qa={toAttribute(o,t){switch(t){case Boolean:o=o?E$:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},A0=(o,t)=>t!==o&&(t==t||o==o),Br={attribute:!0,type:String,converter:Qa,reflect:!1,hasChanged:A0},Xa="finalized";let on=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Br){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Br}static finalize(){if(this.hasOwnProperty(Xa))return!1;this[Xa]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift($h(n))}else t!==void 0&&e.push($h(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return C$(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Br){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Qa).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Qa;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||A0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};on[Xa]=!0,on.elementProperties=new Map,on.elementStyles=[],on.shadowRootOptions={mode:"open"},_h?.({ReactiveElement:on}),((Lr=rs.reactiveElementVersions)!==null&&Lr!==void 0?Lr:rs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zr;const as=window,_i=as.trustedTypes,Ah=_i?_i.createPolicy("lit-html",{createHTML:o=>o}):void 0,tl="$lit$",Nt=`lit$${(Math.random()+"").slice(9)}$`,b0="?"+Nt,w$=`<${b0}>`,Re=document,ls=()=>Re.createComment(""),zn=o=>o===null||typeof o!="object"&&typeof o!="function",S0=Array.isArray,P$=o=>S0(o)||typeof o?.[Symbol.iterator]=="function",Vr=`[ 	
\f\r]`,sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bh=/-->/g,Sh=/>/g,te=RegExp(`>|${Vr}(?:([^\\s"'>=/]+)(${Vr}*=${Vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ch=/'/g,Eh=/"/g,C0=/^(?:script|style|textarea|title)$/i,Vn=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),wh=new WeakMap,fe=Re.createTreeWalker(Re,129,null,!1);function E0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ah!==void 0?Ah.createHTML(t):t}const M$=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=sn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===sn?d[1]==="!--"?r=bh:d[1]!==void 0?r=Sh:d[2]!==void 0?(C0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=te):d[3]!==void 0&&(r=te):r===te?d[0]===">"?(r=n??sn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?te:d[3]==='"'?Eh:Ch):r===Eh||r===Ch?r=te:r===bh||r===Sh?r=sn:(r=te,n=void 0);const p=r===te&&o[c+1].startsWith("/>")?" ":"";s+=r===sn?a+w$:h>=0?(i.push(l),a.slice(0,h)+tl+a.slice(h)+Nt+p):a+Nt+(h===-2?(i.push(void 0),c):p)}return[E0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let el=class w0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=M$(t,e);if(this.el=w0.createElement(l,i),fe.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=fe.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(tl)||u.startsWith(Nt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+tl).split(Nt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?T$:g[1]==="?"?I$:g[1]==="@"?H$:Os})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(C0.test(n.tagName)){const h=n.textContent.split(Nt),u=h.length-1;if(u>0){n.textContent=_i?_i.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],ls()),fe.nextNode(),a.push({type:2,index:++s});n.append(h[u],ls())}}}else if(n.nodeType===8)if(n.data===b0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Nt,h+1))!==-1;)a.push({type:7,index:s}),h+=Nt.length-1}s++}}static createElement(t,e){const i=Re.createElement("template");return i.innerHTML=t,i}};function Ai(o,t,e=o,i){var n,s,r,c;if(t===Vn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=zn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ai(o,a._$AS(o,t.values),a,i)),t}let x$=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Re).importNode(i,!0);fe.currentNode=s;let r=fe.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new P0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new U$(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=fe.nextNode(),c++)}return fe.currentNode=Re,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},P0=class M0{constructor(t,e,i,n){var s;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ai(this,t,e),zn(t)?t===W||t==null||t===""?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==Vn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):P$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&zn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Re.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=el.createElement(E0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new x$(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=wh.get(t.strings);return e===void 0&&wh.set(t.strings,e=new el(t)),e}T(t){S0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new M0(this.k(ls()),this.k(ls()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Os=class{constructor(t,e,i,n,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ai(this,t,e,0),r=!zn(t)||t!==this._$AH&&t!==Vn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ai(this,c[i+a],e,a),l===Vn&&(l=this._$AH[a]),r||(r=!zn(l)||l!==this._$AH[a]),l===W?t=W:t!==W&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},T$=class extends Os{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}};const k$=_i?_i.emptyScript:"";let I$=class extends Os{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,k$):this.element.removeAttribute(this.name)}},H$=class extends Os{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ai(this,t,e,0))!==null&&i!==void 0?i:W)===Vn)return;const n=this._$AH,s=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==W&&(n===W||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},U$=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ai(this,t)}};const Ph=as.litHtmlPolyfillSupport;Ph?.(el,P0),((zr=as.litHtmlVersions)!==null&&zr!==void 0?zr:as.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N$=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D$=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},F$=(o,t,e)=>{t.constructor.createProperty(e,o)};function Vl(o){return(t,e)=>e!==void 0?F$(o,t,e):D$(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jr;((jr=window.HTMLSlotElement)===null||jr===void 0?void 0:jr.prototype.assignedElements)!=null;var bi;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(bi||(bi={}));let jn=class extends I{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=bi.ShowBadge}render(){return $`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?$` <div class="title">${this.headline}</div> `:""}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){const t=v`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=v`var(--formSectionBadgeMargin, 1rem)`,i=v`var(--formSectionBadgeBackgroundColor, #333)`,n=v`var(--formSectionBadgeRadius, 1.2rem)`,s=v`calc(${n} * 2)`,r=v`var(--formSectionBadgeFontSize, 1.8rem)`,c=v`var(--formSectionBadgeFontWeight, bold)`,a=v`var(--formSectionBadgeFontColor, #fff)`,l=v`var(--formSectionTitleFontSize, 1.8rem)`,d=v`var(--formSectionTitleFontWeight, bold)`,h=v`var(--formSectionContentBackgroundColor, transparent)`,u=v`var(--formSectionTextColor, #333)`,p=v`calc(${n} * 2)`;return v`
      :host {
        display: block;
        background-color: ${h};
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
        font-weight: ${c};
        font-size: ${r};
      }

      .title {
        line-height: ${p};
        margin-bottom: 0.5rem;
        font-size: ${l};
        font-weight: ${d};
      }
    `}};m([Vl({type:String})],jn.prototype,"sectionBadge",void 0);m([Vl({type:String})],jn.prototype,"headline",void 0);m([Vl({type:String})],jn.prototype,"badgeMode",void 0);jn=m([N$("donation-form-section")],jn);var gn;(function(o){o.HideNumbers="hidenumbers",o.ShowNumbers="shownumbers"})(gn||(gn={}));var yt;(function(o){o.DonationType="donationType",o.Amount="amount"})(yt||(yt={}));var lt;(function(o){o.ValidDonationAmount="valid_donation_amount",o.InvalidDonationAmount="invalid_donation_amount",o.DonationTooHigh="donation_too_high",o.DonationTooLow="donation_too_low"})(lt||(lt={}));var dt;(function(o){o.Button="button",o.Checkbox="checkbox",o.Hide="hide"})(dt||(dt={}));var Bt;(function(o){o.SingleLine="single-line",o.MultiLine="multi-line"})(Bt||(Bt={}));let et=class extends I{constructor(){super(...arguments),this.donationInfo=Tu,this.stepNumberMode=gn.ShowNumbers,this.amountOptions=ws,this.amountSelectionLayout=Bt.MultiLine,this.frequencySelectionMode=dt.Button,this.customAmountMode="display",this.coverFeesCheckboxMode="display",this.amountTitleDisplayMode="default",this.customAmountSelected=!1,this.currencyValidator=new rp}render(){const e=this.amountTitleDisplayMode==="default"?"Choose an amount (USD)":"";return $`
      ${this.frequencySelectionMode===dt.Button?this.frequencyButtonsTemplate:T}

      <donation-form-section
        sectionBadge="${this.amountSelectionSectionNumber}"
        headline=${e}
        badgeMode=${this.formSectionNumberMode}
      >
        ${this.amountTitleDisplayMode==="slot"?$`<slot name="edit-donation-amount-title"></slot>`:T}
        <ul class="amount-selector">
          ${this.presetAmountsTemplate}
          ${this.customAmountMode==="display"?$`<li class="custom-amount">${this.customAmountTemplate}</li>`:T}
        </ul>

        <div class="errors">${this.error}</div>

        ${this.coverFeesCheckboxMode==="display"?$` <div class="checkbox-options">
              ${this.coverFeesCheckboxTemplate}
              ${this.frequencySelectionMode===dt.Checkbox?this.frequencyCheckboxTemplate:T}
            </div>`:T}
      </donation-form-section>
    `}updated(t){t.has("customAmountSelected")&&this.customAmountButton&&(this.customAmountButton.checked=this.customAmountSelected),t.has("amountOptions")&&(this.customAmountSelected=!1,this.updateSelectedDonationInfo(),this.setupAmountColumnsLayoutConfig()),t.has("amountSelectionLayout")&&this.setupAmountColumnsLayoutConfig(),t.has("donationInfo")&&this.updateSelectedDonationInfo(),t.has("defaultSelectedAmount")&&this.defaultSelectedAmount!==void 0&&(this.customAmountSelected=!1,this.donationInfo=new D({donationType:this.donationInfo.donationType,amount:this.defaultSelectedAmount,coverFees:this.donationInfo.coverFees}))}get frequencyButtonsTemplate(){return $`
      <donation-form-section
        sectionBadge="1"
        headline="Choose a frequency"
        badgeMode=${this.formSectionNumberMode}
      >
        <ul class="frequency-selector">
          ${this.frequencyTemplate}
        </ul>
      </donation-form-section>
    `}get frequencyCheckboxTemplate(){return $`
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
    `}get coverFeesCheckboxTemplate(){return $`
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
    `}get amountSelectionSectionNumber(){return this.frequencySelectionMode===dt.Button?2:1}get formSectionNumberMode(){switch(this.stepNumberMode){case gn.ShowNumbers:return bi.ShowBadge;case gn.HideNumbers:return bi.HideBadge}}setupAmountColumnsLayoutConfig(){const t=this.customAmountMode==="hide"&&this.coverFeesCheckboxMode==="hide"&&this.frequencySelectionMode===dt.Hide,e=this.amountOptions.length;let i=5,n=3;switch(e){case 7:i=5,n=3;break;case 6:i=4,n=2;break;case 5:i=4,n=3;break;case 4:if(t){i=4,n=0;break}i=3,n=2;break;case 3:i=2,n=1;break}this.amountSelectionLayout===Bt.SingleLine&&(i=e+3,n=3),this.style.setProperty("--paymentSelectorAmountColumnCount",`${i}`),this.style.setProperty("--paymentSelectorCustomAmountColSpan",`${n}`)}updateSelectedDonationInfo(){var t,e;const i=((t=this.shadowRoot)===null||t===void 0?void 0:t.activeElement)===this.customAmountInput;if(!this.isCustomAmount&&!(this.customAmountSelected&&i)){const n=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`input[type="radio"][name="${yt.Amount}"][value="${this.donationInfo.amount}"]`);n.checked=!0,this.customAmountSelected=!1,this.error=void 0,this.customAmountInput&&(this.customAmountInput.value="")}else if(this.customAmountSelected=!0,!i){this.customAmountInput.value=this.customAmountDisplayValue;const n=this.getDonationInfoStatus(this.donationInfo.amount);this.handleDonationInfoStatus(n)}}get coverFeesTextTemplate(){const t=X(this.donationInfo.fee,{symbol:"$"}).format();return $` I'll generously add ${t} to cover fees. `}formatShortenedAmount(t){const e=t%1===0?0:2;return X(t,{symbol:"$",precision:e}).format()}get frequencyTemplate(){return $`
      <li>
        ${this.getRadioButton({group:yt.DonationType,value:E.OneTime,displayText:"One time",checked:this.donationInfo.donationType===E.OneTime})}
      </li>

      <li>
        ${this.getRadioButton({group:yt.DonationType,value:E.Monthly,displayText:"Monthly",checked:this.donationInfo.donationType===E.Monthly})}
      </li>
    `}get presetAmountsTemplate(){return $`
      ${this.amountOptions.map(t=>{const e=!this.customAmountSelected&&t===this.donationInfo.amount,i=this.formatShortenedAmount(t);return $`
          <li>
            ${this.getRadioButton({group:yt.Amount,value:`${t}`,displayText:`${i}`,checked:e})}
          </li>
        `})}
    `}getRadioButton(t){const e=`${t.group}-${t.value}-option`;return $`
      <div class="selection-button">
        <input
          type="radio"
          name=${t.group}
          value=${t.value}
          id=${e}
          tabindex="0"
          .checked=${t.checked}
          @change=${this.radioSelected}
          @click=${i=>{t.group===yt.Amount&&parseFloat(t.value)===this.donationInfo.amount&&this.radioSelected(i)}}
        />
        <label for=${e}> ${t.displayText} </label>
      </div>
    `}get isCustomAmount(){return!this.amountOptions.includes(this.donationInfo.amount)}get customAmountDisplayValue(){return this.isCustomAmount?X(this.donationInfo.amount,{symbol:""}).format():""}get customAmountTemplate(){return $`
      <div class="selection-button">
        <input
          type="radio"
          name=${yt.Amount}
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
            @blur=${this.customAmountBlurred}
          />
        </label>
      </div>
    `}customRadioSelected(){this.customAmountInput.focus()}customAmountFocused(t){const e=t.target;this.customAmountSelected=!0,this.handleCustomAmountInput(e.value)}customAmountBlurred(){this.updateSelectedDonationInfo()}coverFeesChecked(t){const i=t.target.checked;this.updateDonationInfo({coverFees:i})}customAmountChanged(t){const i=t.target.value;this.customAmountSelected=!0,this.handleCustomAmountInput(i)}handleCustomAmountInput(t){const e=parseFloat(t);isNaN(e)?this.dispatchEditDonationError(lt.InvalidDonationAmount):this.amountChanged(e)}handleDonationInfoStatus(t){switch(t){case lt.ValidDonationAmount:this.error=void 0;break;case lt.DonationTooHigh:this.error=$`
          To make a donation of $10,000 or more, please contact our philanthropy
          department at
          <a href="mailto:donations@archive.org">donations@archive.org</a>
        `,this.dispatchEditDonationError(t);break;case lt.DonationTooLow:this.customAmountInput.value.length>0&&(this.error=$` Please select an amount (minimum $1) `),this.dispatchEditDonationError(t);break;case lt.InvalidDonationAmount:this.error=$` Please enter a valid donation amount `,this.dispatchEditDonationError(t);break}}amountChanged(t){const e=this.getDonationInfoStatus(t);this.handleDonationInfoStatus(e),e===lt.ValidDonationAmount&&this.updateDonationInfo({amount:t})}getDonationInfoStatus(t){return isNaN(t)?lt.InvalidDonationAmount:t>=1e4?lt.DonationTooHigh:t<1?lt.DonationTooLow:lt.ValidDonationAmount}radioSelected(t){const e=t.target,i=e.name,{value:n}=e;switch(i){case yt.Amount:this.presetAmountChanged(parseFloat(n));break;case yt.DonationType:this.updateDonationInfo({donationType:n});break}}monthlyCheckboxChecked(t){const i=t.target.checked?E.Monthly:E.OneTime;this.updateDonationInfo({donationType:i})}dispatchEditDonationError(t){const e=new CustomEvent("editDonationError",{detail:{error:t}});this.dispatchEvent(e)}presetAmountChanged(t){this.error=void 0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=""),this.updateDonationInfo({amount:t})}updateDonationInfo(t){var e,i,n;const s=new D({donationType:(e=t.donationType)!==null&&e!==void 0?e:this.donationInfo.donationType,amount:(i=t.amount)!==null&&i!==void 0?i:this.donationInfo.amount,coverFees:(n=t.coverFees)!==null&&n!==void 0?n:this.donationInfo.coverFees});this.donationInfo=s;const r=new CustomEvent("donationInfoChanged",{detail:{donationInfo:s}});this.dispatchEvent(r)}static get styles(){const t=v`var(--paymentButtonBorderColor, #333)`,e=v`var(--paymentButtonGridGap, 1rem)`,i=v`var(--paymentButtonFontSize, 1.6rem)`,n=v`var(--paymentButtonFontColor, #000)`,s=v`var(--paymentButtonSelectedFontColor, #000)`,r=v`var(--paymentButtonSelectedColor, #f9bf3b)`,c=v`var(--paymentButtonFocusedOutlineColor, #7fb3f9)`,a=v`var(--paymentButtonColor, #fff)`,l=v`var(--coverFeesFontSize, 1.2rem)`,d=v`var(--coverFeesFontWeight, bold)`,h=v`var(--customAmountWidth, 4rem)`,u=v`var(--inputFieldFontColor, #333)`,p=v`var(--inputBorder, 1px solid #d9d9d9)`,_=v`var(--paymentSelectorAmountColumnCount, 5)`,g=v`var(--paymentSelectorCustomAmountColSpan, 3)`;return v`
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
        grid-column: span ${g};
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
        outline: 2px solid ${c};
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
        font-weight: ${d};
        flex: 1;
      }

      #custom-amount-input {
        width: ${h};
        font-size: 1.6rem;
        font-weight: bold;
        color: ${u};
        padding: 0.1rem;
        border: ${p};
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    `}};m([_t({type:Object})],et.prototype,"donationInfo",void 0);m([_t({type:String})],et.prototype,"stepNumberMode",void 0);m([_t({type:Number})],et.prototype,"defaultSelectedAmount",void 0);m([_t({type:Array})],et.prototype,"amountOptions",void 0);m([_t({type:String})],et.prototype,"amountSelectionLayout",void 0);m([_t({type:String,reflect:!0})],et.prototype,"frequencySelectionMode",void 0);m([_t({type:String,reflect:!0})],et.prototype,"customAmountMode",void 0);m([_t({type:String,reflect:!0})],et.prototype,"coverFeesCheckboxMode",void 0);m([_t({type:String,reflect:!0})],et.prototype,"amountTitleDisplayMode",void 0);m([$0()],et.prototype,"error",void 0);m([$0()],et.prototype,"customAmountSelected",void 0);m([f0("#custom-amount-button")],et.prototype,"customAmountButton",void 0);m([f0("#custom-amount-input")],et.prototype,"customAmountInput",void 0);et=m([$$("donation-form-edit-donation")],et);let x=class extends I{constructor(){super(...arguments),this.analyticsCategory="DonationForm",this.amountOptions=ws,this.donationInfo=Tu,this.amountSelectionLayout=Bt.MultiLine,this.frequencySelectionMode=dt.Button,this.donorEmail="",this.lazyLoaderService=new zv,this.recaptchaManagerSetup=!1}updated(t){var e,i,n;t.has("referrer")&&this.referrer&&((e=this.braintreeManager)===null||e===void 0||e.setReferrer(this.referrer),this.logDonationFlowEvent("referrer",this.referrer)),t.has("loggedInUser")&&this.loggedInUser&&((i=this.braintreeManager)===null||i===void 0||i.setLoggedInUser(this.loggedInUser)),t.has("origin")&&this.origin&&((n=this.braintreeManager)===null||n===void 0||n.setOrigin(this.origin),this.logDonationFlowEvent("origin",this.origin)),(t.has("paymentClients")||t.has("braintreeAuthToken")||t.has("endpointManager")||t.has("environment"))&&(this.setupBraintreeManager(),this.setupRecaptchaManager()),t.has("recaptchaSiteKey")&&this.setupRecaptchaManager(),(t.has("braintreeManager")||t.has("recaptchaManager")||t.has("modalManager")||t.has("recaptchaElement"))&&this.setupPaymentFlowHandlers(),(t.has("environment")||t.has("lazyLoaderService"))&&this.environment&&(this.paymentClients=new op(this.lazyLoaderService,this.environment))}showConfirmationStepDev(t){return y(this,void 0,void 0,function*(){this.donationForm.showConfirmationModalDev(t)})}showUpsellModalDev(t){return y(this,void 0,void 0,function*(){this.donationForm.showUpsellModalDev(t)})}setupBraintreeManager(){this.braintreeManager===void 0&&this.braintreeAuthToken&&this.endpointManager&&this.paymentClients&&this.environment&&(this.braintreeManager=new sp({paymentClients:this.paymentClients,endpointManager:this.endpointManager,authorizationToken:this.braintreeAuthToken,venmoProfileId:this.venmoProfileId,googlePayMerchantId:this.googlePayMerchantId,hostedFieldConfig:this.hostedFieldConfig,hostingEnvironment:this.environment,referrer:this.referrer,loggedInUser:this.loggedInUser,origin:this.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:t}});this.dispatchEvent(e)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:t}});this.dispatchEvent(e)}))}setupRecaptchaManager(){return y(this,void 0,void 0,function*(){if(!this.recaptchaSiteKey||!this.paymentClients||this.recaptchaManagerSetup)return;this.recaptchaManagerSetup=!0;const t=yield this.paymentClients.recaptchaLibrary.get();this.recaptchaManager=new hy({grecaptchaLibrary:t,siteKey:this.recaptchaSiteKey})})}firstUpdated(){this.configureFromQueryParams(),this.trackViewedEvent()}configureFromQueryParams(){const t=new URLSearchParams(window.location.search);let e=this.amountOptions;const i=t.get("dollarAmounts");i&&(e=i.slice(1,-1).split(",").map(N=>parseFloat(N)).filter(N=>!isNaN(N)));let n=this.donationInfo.coverFees;const s=t.get("coverFees");s&&(n=s==="true");let r=this.donationInfo.donationType;t.get("contrib_type")==="monthly"&&(r=E.Monthly);let a=this.donationInfo.amount;const l=t.get("amt");if(l){const p=X(l).value;p>0&&(a=p)}const d=t.get("amountLayout");if(d){const p=d;Object.values(Bt).includes(p)&&(this.amountSelectionLayout=p)}const h=t.get("frequencyMode");if(h){const p=h;Object.values(dt).includes(p)&&(this.frequencySelectionMode=p)}const u=new D({donationType:r,amount:a,coverFees:n});this.amountOptions=e,this.donationInfo=u}setupPaymentFlowHandlers(){var t;this.paymentFlowHandlers||!this.braintreeManager||!this.recaptchaManager||!this.modalManager||!this.recaptchaElement||(this.paymentFlowHandlers=new cy({braintreeManager:this.braintreeManager,modalManager:this.modalManager,recaptchaManager:this.recaptchaManager,resources:{analytics:{logEvent:this.logEvent.bind(this),logDonationFlowEvent:this.logDonationFlowEvent.bind(this)}}}),this.donationForm.braintreeManager=this.braintreeManager,this.donationForm.paymentFlowHandlers=this.paymentFlowHandlers,this.braintreeManager.startup(),(t=this.paymentFlowHandlers)===null||t===void 0||t.startup(),this.recaptchaManager.setup(this.recaptchaElement,1,"light","image"))}get hostedFieldConfig(){const t={input:{"font-size":"16px","font-family":'"Helvetica Neue", Helvetica, Arial, sans-serif',"font-weight":"700",color:"#333"},":focus":{color:"#333"},".valid":{color:"#333"},".invalid":{color:"#333"}},e={number:{selector:"#braintree-creditcard"},cvv:{selector:"#braintree-cvv"},expirationDate:{selector:"#braintree-expiration"}},i=this.creditCardFieldsElement.hostedFieldContainer;return new uy({hostedFieldStyle:t,hostedFieldFieldOptions:e,hostedFieldContainer:i})}render(){return $`
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
            <credit-card-fields></credit-card-fields>
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
    `}createRenderRoot(){return this}donationInfoChanged(t){this.logEvent("DonationInfoChanged"),this.donationInfo=t.detail.donationInfo}trackViewedEvent(){this.logEvent("Viewed")}paymentProviderSelected(t){const e=t.detail.paymentProvider,i=t.detail.previousPaymentProvider,n=this.removeSpaces(e??"unset");let s=`ProviderFirstSelected-${n}`,r;i!==void 0&&(s=`ProviderChangedTo-${n}`,r=`ProviderChangedFrom-${this.removeSpaces(i)}`),this.logEvent(s,r)}paymentFlowConfirmed(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowConfirmed",i)}paymentFlowStarted(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowStarted",i)}paymentFlowCancelled(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e);this.logEvent("PaymentFlowCancelled",i)}paymentFlowError(t){const e=t.detail.paymentProvider,i=this.removeSpaces(e),n=t.detail.error,s=`${i}-${n}`;this.logEvent("PaymentFlowError",s)}removeSpaces(t){return t.replace(/\s+/g,"")}logEvent(t,e){var i;const n={action:t,label:e,category:this.analyticsCategory};(i=this.analyticsHandler)===null||i===void 0||i.sendEvent(n)}logDonationFlowEvent(t,e){var i;const n={action:t,label:e,category:"DonationFlow"};(i=this.analyticsHandler)===null||i===void 0||i.sendEventNoSampling(n)}get getStyles(){return $`
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

        .donation-form-controller-container div[slot='braintree-hosted-fields'] {
          background-color: white;
        }
      </style>
    `}};m([A({type:String})],x.prototype,"environment",void 0);m([A({type:String})],x.prototype,"braintreeAuthToken",void 0);m([A({type:String})],x.prototype,"recaptchaSiteKey",void 0);m([A({type:String})],x.prototype,"venmoProfileId",void 0);m([A({type:String})],x.prototype,"googlePayMerchantId",void 0);m([A({type:String})],x.prototype,"analyticsCategory",void 0);m([A({type:Array})],x.prototype,"amountOptions",void 0);m([A({type:Object})],x.prototype,"donationInfo",void 0);m([A({type:String})],x.prototype,"amountSelectionLayout",void 0);m([A({type:String})],x.prototype,"frequencySelectionMode",void 0);m([A({type:String})],x.prototype,"referrer",void 0);m([A({type:String})],x.prototype,"loggedInUser",void 0);m([A({type:String})],x.prototype,"origin",void 0);m([A({type:String})],x.prototype,"donorEmail",void 0);m([A({type:Object})],x.prototype,"endpointManager",void 0);m([A({type:Object})],x.prototype,"analyticsHandler",void 0);m([A({type:Object})],x.prototype,"modalManager",void 0);m([A({type:Object})],x.prototype,"recaptchaElement",void 0);m([A({type:Object})],x.prototype,"braintreeManager",void 0);m([A({type:Object})],x.prototype,"recaptchaManager",void 0);m([A({type:Object})],x.prototype,"paymentFlowHandlers",void 0);m([A({type:Object})],x.prototype,"paymentClients",void 0);m([A({type:Object})],x.prototype,"lazyLoaderService",void 0);m([M("donation-form")],x.prototype,"donationForm",void 0);m([M("credit-card-fields")],x.prototype,"creditCardFieldsElement",void 0);m([M("contact-form")],x.prototype,"contactForm",void 0);x=m([vt("donation-form-controller")],x);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Co=window,jl=Co.ShadowRoot&&(Co.ShadyCSS===void 0||Co.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x0=Symbol(),Mh=new WeakMap;let R$=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==x0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(jl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Mh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Mh.set(e,t))}return t}toString(){return this.cssText}};const O$=o=>new R$(typeof o=="string"?o:o+"",void 0,x0),L$=(o,t)=>{jl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Co.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},xh=jl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return O$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr;const ds=window,Th=ds.trustedTypes,B$=Th?Th.emptyScript:"",kh=ds.reactiveElementPolyfillSupport,il={toAttribute(o,t){switch(t){case Boolean:o=o?B$:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},T0=(o,t)=>t!==o&&(t==t||o==o),Wr={attribute:!0,type:String,converter:il,reflect:!1,hasChanged:T0},nl="finalized";let rn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Wr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wr}static finalize(){if(this.hasOwnProperty(nl))return!1;this[nl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(xh(n))}else t!==void 0&&e.push(xh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return L$(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Wr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:il).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:il;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||T0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};rn[nl]=!0,rn.elementProperties=new Map,rn.elementStyles=[],rn.shadowRootOptions={mode:"open"},kh?.({ReactiveElement:rn}),((qr=ds.reactiveElementVersions)!==null&&qr!==void 0?qr:ds.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gr;const cs=window,Si=cs.trustedTypes,Ih=Si?Si.createPolicy("lit-html",{createHTML:o=>o}):void 0,ol="$lit$",Dt=`lit$${(Math.random()+"").slice(9)}$`,k0="?"+Dt,z$=`<${k0}>`,Oe=document,hs=()=>Oe.createComment(""),qn=o=>o===null||typeof o!="object"&&typeof o!="function",I0=Array.isArray,V$=o=>I0(o)||typeof o?.[Symbol.iterator]=="function",Kr=`[ 	
\f\r]`,an=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hh=/-->/g,Uh=/>/g,ee=RegExp(`>|${Kr}(?:([^\\s"'>=/]+)(${Kr}*=${Kr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nh=/'/g,Dh=/"/g,H0=/^(?:script|style|textarea|title)$/i,Wn=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),Fh=new WeakMap,_e=Oe.createTreeWalker(Oe,129,null,!1);function U0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ih!==void 0?Ih.createHTML(t):t}const j$=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=an;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===an?d[1]==="!--"?r=Hh:d[1]!==void 0?r=Uh:d[2]!==void 0?(H0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ee):d[3]!==void 0&&(r=ee):r===ee?d[0]===">"?(r=n??an,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ee:d[3]==='"'?Dh:Nh):r===Dh||r===Nh?r=ee:r===Hh||r===Uh?r=an:(r=ee,n=void 0);const p=r===ee&&o[c+1].startsWith("/>")?" ":"";s+=r===an?a+z$:h>=0?(i.push(l),a.slice(0,h)+ol+a.slice(h)+Dt+p):a+Dt+(h===-2?(i.push(void 0),c):p)}return[U0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let sl=class N0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=j$(t,e);if(this.el=N0.createElement(l,i),_e.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=_e.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(ol)||u.startsWith(Dt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ol).split(Dt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?W$:g[1]==="?"?K$:g[1]==="@"?Z$:Ls})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(H0.test(n.tagName)){const h=n.textContent.split(Dt),u=h.length-1;if(u>0){n.textContent=Si?Si.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],hs()),_e.nextNode(),a.push({type:2,index:++s});n.append(h[u],hs())}}}else if(n.nodeType===8)if(n.data===k0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Dt,h+1))!==-1;)a.push({type:7,index:s}),h+=Dt.length-1}s++}}static createElement(t,e){const i=Oe.createElement("template");return i.innerHTML=t,i}};function Ci(o,t,e=o,i){var n,s,r,c;if(t===Wn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=qn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ci(o,a._$AS(o,t.values),a,i)),t}let q$=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Oe).importNode(i,!0);_e.currentNode=s;let r=_e.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new D0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Y$(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=_e.nextNode(),c++)}return _e.currentNode=Oe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},D0=class F0{constructor(t,e,i,n){var s;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ci(this,t,e),qn(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==Wn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):V$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&qn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Oe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=sl.createElement(U0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new q$(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Fh.get(t.strings);return e===void 0&&Fh.set(t.strings,e=new sl(t)),e}T(t){I0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new F0(this.k(hs()),this.k(hs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ls=class{constructor(t,e,i,n,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ci(this,t,e,0),r=!qn(t)||t!==this._$AH&&t!==Wn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ci(this,c[i+a],e,a),l===Wn&&(l=this._$AH[a]),r||(r=!qn(l)||l!==this._$AH[a]),l===G?t=G:t!==G&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},W$=class extends Ls{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}};const G$=Si?Si.emptyScript:"";let K$=class extends Ls{constructor(){super(...arguments),this.type=4}j(t){t&&t!==G?this.element.setAttribute(this.name,G$):this.element.removeAttribute(this.name)}},Z$=class extends Ls{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ci(this,t,e,0))!==null&&i!==void 0?i:G)===Wn)return;const n=this._$AH,s=t===G&&n!==G||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==G&&(n===G||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Y$=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ci(this,t)}};const Rh=cs.litHtmlPolyfillSupport;Rh?.(sl,D0),((Gr=cs.litHtmlVersions)!==null&&Gr!==void 0?Gr:cs.litHtmlVersions=[]).push("2.8.0");const J$=$`
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
 */const Eo=window,ql=Eo.ShadowRoot&&(Eo.ShadyCSS===void 0||Eo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R0=Symbol(),Oh=new WeakMap;let Q$=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==R0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ql&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Oh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Oh.set(e,t))}return t}toString(){return this.cssText}};const X$=o=>new Q$(typeof o=="string"?o:o+"",void 0,R0),tf=(o,t)=>{ql?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Eo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Lh=ql?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return X$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zr;const us=window,Bh=us.trustedTypes,ef=Bh?Bh.emptyScript:"",zh=us.reactiveElementPolyfillSupport,rl={toAttribute(o,t){switch(t){case Boolean:o=o?ef:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},O0=(o,t)=>t!==o&&(t==t||o==o),Yr={attribute:!0,type:String,converter:rl,reflect:!1,hasChanged:O0},al="finalized";let ln=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Yr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Yr}static finalize(){if(this.hasOwnProperty(al))return!1;this[al]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Lh(n))}else t!==void 0&&e.push(Lh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return tf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Yr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:rl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:rl;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||O0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ln[al]=!0,ln.elementProperties=new Map,ln.elementStyles=[],ln.shadowRootOptions={mode:"open"},zh?.({ReactiveElement:ln}),((Zr=us.reactiveElementVersions)!==null&&Zr!==void 0?Zr:us.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jr;const ps=window,Ei=ps.trustedTypes,Vh=Ei?Ei.createPolicy("lit-html",{createHTML:o=>o}):void 0,ll="$lit$",Ft=`lit$${(Math.random()+"").slice(9)}$`,L0="?"+Ft,nf=`<${L0}>`,Le=document,ms=()=>Le.createComment(""),Gn=o=>o===null||typeof o!="object"&&typeof o!="function",B0=Array.isArray,of=o=>B0(o)||typeof o?.[Symbol.iterator]=="function",Qr=`[ 	
\f\r]`,dn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jh=/-->/g,qh=/>/g,ie=RegExp(`>|${Qr}(?:([^\\s"'>=/]+)(${Qr}*=${Qr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wh=/'/g,Gh=/"/g,z0=/^(?:script|style|textarea|title)$/i,Kn=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Kh=new WeakMap,Ae=Le.createTreeWalker(Le,129,null,!1);function V0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vh!==void 0?Vh.createHTML(t):t}const sf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=dn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===dn?d[1]==="!--"?r=jh:d[1]!==void 0?r=qh:d[2]!==void 0?(z0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ie):d[3]!==void 0&&(r=ie):r===ie?d[0]===">"?(r=n??dn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ie:d[3]==='"'?Gh:Wh):r===Gh||r===Wh?r=ie:r===jh||r===qh?r=dn:(r=ie,n=void 0);const p=r===ie&&o[c+1].startsWith("/>")?" ":"";s+=r===dn?a+nf:h>=0?(i.push(l),a.slice(0,h)+ll+a.slice(h)+Ft+p):a+Ft+(h===-2?(i.push(void 0),c):p)}return[V0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let dl=class j0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=sf(t,e);if(this.el=j0.createElement(l,i),Ae.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=Ae.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(ll)||u.startsWith(Ft)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ll).split(Ft),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?af:g[1]==="?"?df:g[1]==="@"?cf:Bs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(z0.test(n.tagName)){const h=n.textContent.split(Ft),u=h.length-1;if(u>0){n.textContent=Ei?Ei.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],ms()),Ae.nextNode(),a.push({type:2,index:++s});n.append(h[u],ms())}}}else if(n.nodeType===8)if(n.data===L0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Ft,h+1))!==-1;)a.push({type:7,index:s}),h+=Ft.length-1}s++}}static createElement(t,e){const i=Le.createElement("template");return i.innerHTML=t,i}};function wi(o,t,e=o,i){var n,s,r,c;if(t===Kn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Gn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=wi(o,a._$AS(o,t.values),a,i)),t}let rf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Le).importNode(i,!0);Ae.currentNode=s;let r=Ae.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new q0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new hf(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=Ae.nextNode(),c++)}return Ae.currentNode=Le,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},q0=class W0{constructor(t,e,i,n){var s;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=wi(this,t,e),Gn(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==Kn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):of(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&Gn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Le.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=dl.createElement(V0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new rf(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Kh.get(t.strings);return e===void 0&&Kh.set(t.strings,e=new dl(t)),e}T(t){B0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new W0(this.k(ms()),this.k(ms()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Bs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=wi(this,t,e,0),r=!Gn(t)||t!==this._$AH&&t!==Kn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=wi(this,c[i+a],e,a),l===Kn&&(l=this._$AH[a]),r||(r=!Gn(l)||l!==this._$AH[a]),l===K?t=K:t!==K&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},af=class extends Bs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}};const lf=Ei?Ei.emptyScript:"";let df=class extends Bs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,lf):this.element.removeAttribute(this.name)}},cf=class extends Bs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=wi(this,t,e,0))!==null&&i!==void 0?i:K)===Kn)return;const n=this._$AH,s=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==K&&(n===K||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},hf=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){wi(this,t)}};const Zh=ps.litHtmlPolyfillSupport;Zh?.(dl,q0),((Jr=ps.litHtmlVersions)!==null&&Jr!==void 0?Jr:ps.litHtmlVersions=[]).push("2.8.0");const uf=$`
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
 */const wo=window,Wl=wo.ShadowRoot&&(wo.ShadyCSS===void 0||wo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G0=Symbol(),Yh=new WeakMap;let pf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==G0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Wl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Yh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Yh.set(e,t))}return t}toString(){return this.cssText}};const mf=o=>new pf(typeof o=="string"?o:o+"",void 0,G0),vf=(o,t)=>{Wl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=wo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Jh=Wl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xr;const vs=window,Qh=vs.trustedTypes,gf=Qh?Qh.emptyScript:"",Xh=vs.reactiveElementPolyfillSupport,cl={toAttribute(o,t){switch(t){case Boolean:o=o?gf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},K0=(o,t)=>t!==o&&(t==t||o==o),ta={attribute:!0,type:String,converter:cl,reflect:!1,hasChanged:K0},hl="finalized";let cn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ta){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ta}static finalize(){if(this.hasOwnProperty(hl))return!1;this[hl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Jh(n))}else t!==void 0&&e.push(Jh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return vf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ta){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:cl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:cl;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||K0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};cn[hl]=!0,cn.elementProperties=new Map,cn.elementStyles=[],cn.shadowRootOptions={mode:"open"},Xh?.({ReactiveElement:cn}),((Xr=vs.reactiveElementVersions)!==null&&Xr!==void 0?Xr:vs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ea;const gs=window,Pi=gs.trustedTypes,tu=Pi?Pi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ul="$lit$",Rt=`lit$${(Math.random()+"").slice(9)}$`,Z0="?"+Rt,yf=`<${Z0}>`,Be=document,ys=()=>Be.createComment(""),Zn=o=>o===null||typeof o!="object"&&typeof o!="function",Y0=Array.isArray,$f=o=>Y0(o)||typeof o?.[Symbol.iterator]=="function",ia=`[ 	
\f\r]`,hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eu=/-->/g,iu=/>/g,ne=RegExp(`>|${ia}(?:([^\\s"'>=/]+)(${ia}*=${ia}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nu=/'/g,ou=/"/g,J0=/^(?:script|style|textarea|title)$/i,Yn=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),su=new WeakMap,be=Be.createTreeWalker(Be,129,null,!1);function Q0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return tu!==void 0?tu.createHTML(t):t}const ff=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=hn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===hn?d[1]==="!--"?r=eu:d[1]!==void 0?r=iu:d[2]!==void 0?(J0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ne):d[3]!==void 0&&(r=ne):r===ne?d[0]===">"?(r=n??hn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ne:d[3]==='"'?ou:nu):r===ou||r===nu?r=ne:r===eu||r===iu?r=hn:(r=ne,n=void 0);const p=r===ne&&o[c+1].startsWith("/>")?" ":"";s+=r===hn?a+yf:h>=0?(i.push(l),a.slice(0,h)+ul+a.slice(h)+Rt+p):a+Rt+(h===-2?(i.push(void 0),c):p)}return[Q0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let pl=class X0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=ff(t,e);if(this.el=X0.createElement(l,i),be.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=be.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(ul)||u.startsWith(Rt)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+ul).split(Rt),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Af:g[1]==="?"?Sf:g[1]==="@"?Cf:zs})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(J0.test(n.tagName)){const h=n.textContent.split(Rt),u=h.length-1;if(u>0){n.textContent=Pi?Pi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],ys()),be.nextNode(),a.push({type:2,index:++s});n.append(h[u],ys())}}}else if(n.nodeType===8)if(n.data===Z0)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Rt,h+1))!==-1;)a.push({type:7,index:s}),h+=Rt.length-1}s++}}static createElement(t,e){const i=Be.createElement("template");return i.innerHTML=t,i}};function Mi(o,t,e=o,i){var n,s,r,c;if(t===Yn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Zn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Mi(o,a._$AS(o,t.values),a,i)),t}let _f=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Be).importNode(i,!0);be.currentNode=s;let r=be.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new tm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Ef(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=be.nextNode(),c++)}return be.currentNode=Be,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},tm=class em{constructor(t,e,i,n){var s;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mi(this,t,e),Zn(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==Yn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):$f(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&Zn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Be.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=pl.createElement(Q0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new _f(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=su.get(t.strings);return e===void 0&&su.set(t.strings,e=new pl(t)),e}T(t){Y0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new em(this.k(ys()),this.k(ys()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},zs=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Mi(this,t,e,0),r=!Zn(t)||t!==this._$AH&&t!==Yn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Mi(this,c[i+a],e,a),l===Yn&&(l=this._$AH[a]),r||(r=!Zn(l)||l!==this._$AH[a]),l===Z?t=Z:t!==Z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Af=class extends zs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}};const bf=Pi?Pi.emptyScript:"";let Sf=class extends zs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Z?this.element.setAttribute(this.name,bf):this.element.removeAttribute(this.name)}},Cf=class extends zs{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Mi(this,t,e,0))!==null&&i!==void 0?i:Z)===Yn)return;const n=this._$AH,s=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Z&&(n===Z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ef=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Mi(this,t)}};const ru=gs.litHtmlPolyfillSupport;ru?.(pl,tm),((ea=gs.litHtmlVersions)!==null&&ea!==void 0?ea:gs.litHtmlVersions=[]).push("2.8.0");const wf=$`
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
 */const Po=window,Gl=Po.ShadowRoot&&(Po.ShadyCSS===void 0||Po.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,im=Symbol(),au=new WeakMap;let Pf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==im)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Gl&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=au.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&au.set(e,t))}return t}toString(){return this.cssText}};const Mf=o=>new Pf(typeof o=="string"?o:o+"",void 0,im),xf=(o,t)=>{Gl?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Po.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},lu=Gl?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Mf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var na;const $s=window,du=$s.trustedTypes,Tf=du?du.emptyScript:"",cu=$s.reactiveElementPolyfillSupport,ml={toAttribute(o,t){switch(t){case Boolean:o=o?Tf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},nm=(o,t)=>t!==o&&(t==t||o==o),oa={attribute:!0,type:String,converter:ml,reflect:!1,hasChanged:nm},vl="finalized";let un=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=oa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||oa}static finalize(){if(this.hasOwnProperty(vl))return!1;this[vl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(lu(n))}else t!==void 0&&e.push(lu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return xf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=oa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ml).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ml;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||nm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};un[vl]=!0,un.elementProperties=new Map,un.elementStyles=[],un.shadowRootOptions={mode:"open"},cu?.({ReactiveElement:un}),((na=$s.reactiveElementVersions)!==null&&na!==void 0?na:$s.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sa;const fs=window,xi=fs.trustedTypes,hu=xi?xi.createPolicy("lit-html",{createHTML:o=>o}):void 0,gl="$lit$",Ot=`lit$${(Math.random()+"").slice(9)}$`,om="?"+Ot,kf=`<${om}>`,ze=document,_s=()=>ze.createComment(""),Jn=o=>o===null||typeof o!="object"&&typeof o!="function",sm=Array.isArray,If=o=>sm(o)||typeof o?.[Symbol.iterator]=="function",ra=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,uu=/-->/g,pu=/>/g,oe=RegExp(`>|${ra}(?:([^\\s"'>=/]+)(${ra}*=${ra}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mu=/'/g,vu=/"/g,rm=/^(?:script|style|textarea|title)$/i,Qn=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),gu=new WeakMap,Se=ze.createTreeWalker(ze,129,null,!1);function am(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return hu!==void 0?hu.createHTML(t):t}const Hf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=pn;for(let c=0;c<e;c++){const a=o[c];let l,d,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===pn?d[1]==="!--"?r=uu:d[1]!==void 0?r=pu:d[2]!==void 0?(rm.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=oe):d[3]!==void 0&&(r=oe):r===oe?d[0]===">"?(r=n??pn,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?oe:d[3]==='"'?vu:mu):r===vu||r===mu?r=oe:r===uu||r===pu?r=pn:(r=oe,n=void 0);const p=r===oe&&o[c+1].startsWith("/>")?" ":"";s+=r===pn?a+kf:h>=0?(i.push(l),a.slice(0,h)+gl+a.slice(h)+Ot+p):a+Ot+(h===-2?(i.push(void 0),c):p)}return[am(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class Xn{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[l,d]=Hf(t,e);if(this.el=Xn.createElement(l,i),Se.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(n=Se.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const u of n.getAttributeNames())if(u.endsWith(gl)||u.startsWith(Ot)){const p=d[r++];if(h.push(u),p!==void 0){const _=n.getAttribute(p.toLowerCase()+gl).split(Ot),g=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:g[2],strings:_,ctor:g[1]==="."?Nf:g[1]==="?"?Ff:g[1]==="@"?Rf:js})}else a.push({type:6,index:s})}for(const u of h)n.removeAttribute(u)}if(rm.test(n.tagName)){const h=n.textContent.split(Ot),u=h.length-1;if(u>0){n.textContent=xi?xi.emptyScript:"";for(let p=0;p<u;p++)n.append(h[p],_s()),Se.nextNode(),a.push({type:2,index:++s});n.append(h[u],_s())}}}else if(n.nodeType===8)if(n.data===om)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(Ot,h+1))!==-1;)a.push({type:7,index:s}),h+=Ot.length-1}s++}}static createElement(t,e){const i=ze.createElement("template");return i.innerHTML=t,i}}function Ti(o,t,e=o,i){var n,s,r,c;if(t===Qn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Jn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ti(o,a._$AS(o,t.values),a,i)),t}class Uf{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ze).importNode(i,!0);Se.currentNode=s;let r=Se.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let d;l.type===2?d=new Vs(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Of(r,this,t)),this._$AV.push(d),l=n[++a]}c!==l?.index&&(r=Se.nextNode(),c++)}return Se.currentNode=ze,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Vs{constructor(t,e,i,n){var s;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ti(this,t,e),Jn(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Qn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):If(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&Jn(this._$AH)?this._$AA.nextSibling.data=t:this.$(ze.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Xn.createElement(am(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Uf(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=gu.get(t.strings);return e===void 0&&gu.set(t.strings,e=new Xn(t)),e}T(t){sm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Vs(this.k(_s()),this.k(_s()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class js{constructor(t,e,i,n,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ti(this,t,e,0),r=!Jn(t)||t!==this._$AH&&t!==Qn,r&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ti(this,c[i+a],e,a),l===Qn&&(l=this._$AH[a]),r||(r=!Jn(l)||l!==this._$AH[a]),l===Y?t=Y:t!==Y&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Nf extends js{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}}const Df=xi?xi.emptyScript:"";class Ff extends js{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,Df):this.element.removeAttribute(this.name)}}class Rf extends js{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ti(this,t,e,0))!==null&&i!==void 0?i:Y)===Qn)return;const n=this._$AH,s=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Y&&(n===Y||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Of{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ti(this,t)}}const yu=fs.litHtmlPolyfillSupport;yu?.(Xn,Vs),((sa=fs.litHtmlVersions)!==null&&sa!==void 0?sa:fs.litHtmlVersions=[]).push("2.8.0");const Lf=$`
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
`;var k;(function(o){o.Loading="loading",o.Available="available",o.Unavailable="unavailable"})(k||(k={}));let At=class extends I{constructor(){super(...arguments),this.donationInfoValid=!0,this.applePayMode=k.Loading,this.googlePayMode=k.Loading,this.venmoMode=k.Loading,this.payPalMode=k.Loading,this.paymentModeSelected=void 0}render(){const t=this.paymentModeSelected?"payment-selected":"";return $`
      <div
        class="payment-container ${this.donationInfoValid?"donation-info-valid":"donation-info-invalid"} ${t}"
      >
        <div class="payment-provider-container">
          <button
            class="applepay provider-button ${this.applePayMode} ${this.paymentModeSelected==="apple"?"selected":""}"
            @click=${e=>{this.paymentModeSelected="apple",this.applePaySelected(e)}}
            tabindex="0"
          >
            <div class="payment-image">${J$}</div>
          </button>

          <button
            class="googlepay provider-button ${this.googlePayMode} ${this.paymentModeSelected==="google"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="google",this.googlePaySelected()}}
            tabindex="0"
          >
            <div class="payment-image">${uf}</div>
          </button>

          <button
            class="venmo provider-button ${this.venmoMode} ${this.paymentModeSelected==="venmo"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="venmo",this.venmoSelected()}}
            tabindex="0"
          >
            <div class="payment-image">${Lf}</div>
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
                ${wf}
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

      ${this.paymentModeSelected?$`
            <button
              id="change-payment-method"
              @click=${()=>{this.paymentModeSelected=void 0,this.dispatchEvent(new Event("resetPaymentMethod")),this.setButtonVisibility()}}
            >
              Change payment method
            </button>

            <slot name="credit-card-fields"></slot>
          `:T}
    `}firstUpdated(){this.dispatchEvent(new Event("firstUpdated"))}updated(t){t.has("paymentProviders")&&this.setButtonVisibility()}showPaypalButton(){this.payPalMode=k.Available}setButtonVisibility(){return y(this,void 0,void 0,function*(){var t,e,i;(t=this.paymentProviders)===null||t===void 0||t.venmoHandler.get().then(n=>{if(!n){this.venmoMode=k.Unavailable;return}n.isBrowserSupported().then(s=>{this.venmoMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading venmo",s),this.venmoMode=k.Unavailable})}).catch(n=>{console.error("venmo unavailable",n),this.venmoMode=k.Unavailable}),(e=this.paymentProviders)===null||e===void 0||e.applePayHandler.get().then(n=>{if(!n){console.error("applePayHandler unavailable"),this.applePayMode=k.Unavailable;return}n.isAvailable().then(s=>{this.applePayMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading applepay",s),this.applePayMode=k.Unavailable})}).catch(n=>{console.error("apple pay unavailable",n),this.applePayMode=k.Unavailable}),(i=this.paymentProviders)===null||i===void 0||i.googlePayHandler.get().then(n=>{if(!n){console.error("google pay handler unavailable"),this.googlePayMode=k.Unavailable;return}n.isBrowserSupported().then(s=>{this.googlePayMode=s?k.Available:k.Unavailable}).catch(s=>{console.error("error loading googlepay",s),this.googlePayMode=k.Unavailable})}).catch(n=>{console.error("google pay unavailable",n),this.googlePayMode=k.Unavailable})})}googlePaySelected(){this.dispatchEvent(new Event("googlePaySelected"))}applePaySelected(t){const e=new CustomEvent("applePaySelected",{detail:{originalEvent:t}});this.dispatchEvent(e)}venmoSelected(){this.dispatchEvent(new Event("venmoSelected"))}creditCardSelected(){this.dispatchEvent(new Event("creditCardSelected"))}localPaypalButtonClicked(){this.dispatchEvent(new Event("paypalBlockerSelected"))}static get styles(){const t=v`var(--paymentButtonWidth, 5rem)`,e=v`var(--paymentButtonHeight, 3.2rem)`,i=v`var(--creditCardFontSize, 1.8rem)`;return v`
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
        margin-bottom: 10px;
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
    `}};m([A({type:Boolean})],At.prototype,"donationInfoValid",void 0);m([A({type:Object})],At.prototype,"paymentProviders",void 0);m([A({type:String})],At.prototype,"applePayMode",void 0);m([A({type:String})],At.prototype,"googlePayMode",void 0);m([A({type:String})],At.prototype,"venmoMode",void 0);m([A({type:String})],At.prototype,"payPalMode",void 0);m([A({type:String})],At.prototype,"paymentModeSelected",void 0);At=m([vt("payment-selector")],At);var ae;(function(o){o.Summary="summary",o.Edit="edit"})(ae||(ae={}));let zt=class extends I{constructor(){super(...arguments),this.mode=ae.Edit,this.amountOptions=ws,this.amountSelectionLayout=Bt.MultiLine,this.frequencySelectionMode=dt.Button}render(){return $` ${this.currentTemplate} `}get currentTemplate(){switch(this.mode){case ae.Summary:return this.donationSummaryTemplate;case ae.Edit:return this.editDonationTemplate}}get editDonationTemplate(){return $`
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
    `}get donationSummaryTemplate(){return $`
      <donation-summary .donationInfo=${this.donationInfo} @editClicked=${this.summaryEditClicked}>
      </donation-summary>
    `}donationInfoChanged(t){this.donationInfo=t.detail.donationInfo;const e=new CustomEvent("donationInfoChanged",{detail:{donationInfo:this.donationInfo}});this.dispatchEvent(e)}editDonationError(t){const e=new CustomEvent("editDonationError",{detail:t.detail});this.dispatchEvent(e)}summaryEditClicked(){this.mode=ae.Edit}showSummaryClicked(){this.mode=ae.Summary}static get styles(){return v``}};m([A({type:Object})],zt.prototype,"donationInfo",void 0);m([A({type:String})],zt.prototype,"mode",void 0);m([A({type:Array})],zt.prototype,"amountOptions",void 0);m([A({type:String})],zt.prototype,"amountSelectionLayout",void 0);m([A({type:String})],zt.prototype,"frequencySelectionMode",void 0);m([M("edit-donation")],zt.prototype,"editDonation",void 0);zt=m([vt("donation-form-header")],zt);let yl=class extends I{render(){return $`
      <div class="top-line"></div>
      <div class="total-line">Total: ${this.totalAmount}</div>
    `}get totalAmount(){if(!this.donationInfo)return;const t=X(this.donationInfo.total,{symbol:"$"}).format(),e=this.donationInfo.donationType===E.Monthly?"/month":"";return`${t}${e}`}static get styles(){const t=v`var(--totalAmountLineColor, #333)`,e=v`var(--totalAmountLineThickness, 2px)`,i=v`var(--totalAmountVerticalSpacing, 0.5rem)`,n=v`var(--totalAmountFontSize, 2.6rem)`;return v`
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
    `}};m([A({type:Object})],yl.prototype,"donationInfo",void 0);yl=m([vt("donation-form-total-amount")],yl);let tt=class extends I{constructor(){super(...arguments),this.amountOptions=ws,this.amountSelectionLayout=Bt.MultiLine,this.frequencySelectionMode=dt.Button,this.creditCardVisible=!1,this.contactFormVisible=!1,this.donationInfoValid=!0,this.paypalButtonNeedsRender=!0,this.flowHandlersConfigured=!1,this.flowHandlerListenersBound=!1}render(){var t;return $`
      <donation-form-header
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-header>

      <donation-form-section
        .badgeMode=${bi.HideBadgeLeaveSpacing}
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
          @resetPaymentMethod=${()=>y(this,void 0,void 0,function*(){this.selectedPaymentProvider=void 0,this.contactFormVisible=!1,this.requestUpdate()})}
          tabindex="0"
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
          <div
            class="credit-card-fields ${this.creditCardVisible?"":"hidden"}"
            slot="credit-card-fields"
          >
            <slot name="braintree-hosted-fields"></slot>
          </div>
        </payment-selector>
      </donation-form-section>

      <div class="contact-form-section ${this.contactFormVisible?"":"hidden"}">
        ${this.contactFormSectionTemplate}
      </div>
      <slot name="recaptcha"></slot>
    `}showConfirmationModalDev(t){return y(this,void 0,void 0,function*(){var e;(e=this.paymentFlowHandlers)===null||e===void 0||e.showConfirmationStepModal(t)})}showUpsellModalDev(t){return y(this,void 0,void 0,function*(){var e,i;if((e=this.paymentFlowHandlers)===null||e===void 0||e.showUpsellModal(t),t.ctaMode===Lt.PayPalUpsellSlot){const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.paypalHandler.get(),s=new D({amount:t.oneTimeAmount,donationType:E.OneTime,coverFees:!1});n?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:s})}})}get contactFormSectionTemplate(){const t=this.selectedPaymentProvider===b.Venmo?"Help us stay in touch":"Enter contact information";return $`
      <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart+1}
        headline=${t}
        id="contactFormSection"
      >
        <slot name="contact-form"></slot>
      </donation-form-section>

      <donation-form-section .sectionBadge=${this.paymentSelectorNumberingStart+2}>
        <slot name="recaptcha"></slot>
        <button id="donate-button" @click=${this.donateClicked}>Donate</button>

        <div class="secure-process-note">${Ll} Your payment will be securely processed</div>
      </donation-form-section>
    `}get paymentSelectorNumberingStart(){return this.frequencySelectionMode===dt.Button?3:2}editDonationError(){this.donationInfoValid=!1}paymentSelectorFirstUpdated(){var t;!((t=this.paymentFlowHandlers)===null||t===void 0)&&t.paypalHandler&&this.renderPayPalButtonIfNeeded()}applePaySelected(t){var e,i;if(this.selectedPaymentProvider=b.ApplePay,this.contactFormVisible=!1,this.creditCardVisible=!1,!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}const n=t.detail.originalEvent;this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.applePayHandler)===null||i===void 0||i.paymentInitiated(this.donationInfo,n)),this.emitPaymentFlowStartedEvent()}googlePaySelected(){var t,e;this.selectedPaymentProvider=b.GooglePay,this.contactFormVisible=!1,this.creditCardVisible=!1,this.donationInfoValid?(this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.googlePayHandler)===null||e===void 0||e.paymentInitiated(this.donationInfo)),this.emitPaymentFlowStartedEvent()):this.showInvalidDonationInfoAlert()}creditCardSelected(){return y(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=b.CreditCard,this.contactFormVisible=!0,this.creditCardVisible=!0,this.focusCreditCardNumberField()})}venmoSelected(){return y(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=b.Venmo,this.contactFormVisible=!0,this.creditCardVisible=!1,this.focusContactForm()})}paypalBlockerSelected(){this.contactFormVisible=!1,this.creditCardVisible=!1,this.showInvalidDonationInfoAlert()}focusContactForm(){return y(this,void 0,void 0,function*(){var t;yield this.updateComplete,this.contactFormSection&&((t=this.contactForm)===null||t===void 0||t.focus())})}focusCreditCardNumberField(){return y(this,void 0,void 0,function*(){var t;yield this.updateComplete;const e=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get();e?.focusField(Q.Number)})}donateClicked(){return y(this,void 0,void 0,function*(){if(!this.contactForm){alert("Please enter contact info.");return}if(!this.donationInfoValid||!this.donationInfo){this.showInvalidDonationInfoAlert();return}const t=this.contactForm.donorContactInfo;switch(this.selectedPaymentProvider){case b.CreditCard:this.handleCreditCardDonationFlow(t,this.donationInfo);break;case b.Venmo:this.handleVenmoDonationFlow(t,this.donationInfo);break}})}handleCreditCardDonationFlow(t,e){return y(this,void 0,void 0,function*(){var i,n,s;const r=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.creditCardHandler,c=yield(n=this.braintreeManager)===null||n===void 0?void 0:n.paymentProviders.creditCardHandler.get();c?.hideErrorMessage();const a=(s=this.contactForm)===null||s===void 0?void 0:s.reportValidity(),l=yield r?.tokenizeFields();!a||l===void 0||(this.emitPaymentFlowStartedEvent(),r?.paymentInitiated(l,e,t))})}handleVenmoDonationFlow(t,e){return y(this,void 0,void 0,function*(){var i,n,s;!((i=this.contactForm)===null||i===void 0)&&i.reportValidity()&&((s=(n=this.paymentFlowHandlers)===null||n===void 0?void 0:n.venmoHandler)===null||s===void 0||s.paymentInitiated(t,e))})}emitPaymentFlowStartedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowStarted",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowConfirmedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowConfirmed",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowCancelledEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowCancelled",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowErrorEvent(t){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowError",{detail:{paymentProvider:this.selectedPaymentProvider,error:t}});this.dispatchEvent(e)}showInvalidDonationInfoAlert(){alert("Please enter a valid donation amount.")}renderPayPalButtonIfNeeded(){return y(this,void 0,void 0,function*(){var t,e;this.paypalButtonNeedsRender&&(this.paypalButtonNeedsRender=!1,this.donationInfo&&(yield(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0?void 0:e.renderPayPalButton(this.donationInfo)),this.paymentSelector.showPaypalButton())})}updated(t){var e,i;if(t.has("donationInfo")&&this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||i===void 0||i.updateDonationInfo(this.donationInfo),this.donationFormHeader.donationInfo=this.donationInfo),(t.has("paymentFlowHandlers")||t.has("donationInfo"))&&this.donationInfo&&this.paymentFlowHandlers&&this.setupFlowHandlers(),t.has("donationInfoValid")&&(this.paymentSelector.donationInfoValid=this.donationInfoValid),t.has("selectedPaymentProvider")){const n=new CustomEvent("paymentProviderSelected",{detail:{paymentProvider:this.selectedPaymentProvider,previousPaymentProvider:t.get("selectedPaymentProvider")}});this.dispatchEvent(n)}}setupFlowHandlers(){var t,e;this.flowHandlersConfigured||(this.flowHandlersConfigured=!0,this.bindFlowListenerEvents(),this.renderPayPalButtonIfNeeded(),this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.updateDonationInfo(this.donationInfo)))}bindFlowListenerEvents(){var t,e,i,n,s,r,c,a,l,d;this.flowHandlerListenersBound||(this.flowHandlerListenersBound=!0,(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.on("payPalPaymentStarted",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowStartedEvent()}),(n=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.paypalHandler)===null||n===void 0||n.on("payPalPaymentConfirmed",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowConfirmedEvent()}),(r=(s=this.paymentFlowHandlers)===null||s===void 0?void 0:s.paypalHandler)===null||r===void 0||r.on("payPalPaymentCancelled",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowCancelledEvent()}),(a=(c=this.paymentFlowHandlers)===null||c===void 0?void 0:c.paypalHandler)===null||a===void 0||a.on("payPalPaymentError",(h,u)=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowErrorEvent(u)}),(d=(l=this.paymentFlowHandlers)===null||l===void 0?void 0:l.googlePayHandler)===null||d===void 0||d.on("paymentCancelled",()=>{this.selectedPaymentProvider=b.GooglePay,this.emitPaymentFlowCancelledEvent()}))}donationInfoChanged(t){const e=t.detail.donationInfo;this.donationInfo=new D({amount:e.amount,donationType:e.donationType,coverFees:e.coverFees}),this.donationInfoValid=!0;const i=new CustomEvent("donationInfoChanged",{detail:{donationInfo:e}});this.dispatchEvent(i)}static get styles(){const t=v`var(--donateButtonFontSize, 2.6rem)`,e=v`var(--donateButtonHeight, 4rem)`,i=v`var(--donateButtonColor, rgba(49, 164, 129, 1))`,n=v`var(--donateButtonTextColor, #fff)`,s=v`var(--donateButtonHoverColor, rgba(39, 131, 103, 1))`,r=v`var(--donateTotalAmountTopMargin, 1.5rem)`,c=v`var(--donateTotalAmountBottomMargin, 1.2rem)`;return v`
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
        margin-bottom: ${c};
      }
    `}};m([A({type:Object})],tt.prototype,"braintreeManager",void 0);m([A({type:Object})],tt.prototype,"paymentFlowHandlers",void 0);m([A({type:Object})],tt.prototype,"donationRequest",void 0);m([A({type:Object})],tt.prototype,"donationInfo",void 0);m([A({type:Object})],tt.prototype,"contactForm",void 0);m([A({type:Array})],tt.prototype,"amountOptions",void 0);m([A({type:String})],tt.prototype,"amountSelectionLayout",void 0);m([A({type:String})],tt.prototype,"frequencySelectionMode",void 0);m([A({type:Boolean})],tt.prototype,"creditCardVisible",void 0);m([A({type:Boolean})],tt.prototype,"contactFormVisible",void 0);m([A({type:Boolean})],tt.prototype,"donationInfoValid",void 0);m([A({type:String})],tt.prototype,"selectedPaymentProvider",void 0);m([M("#contactFormSection")],tt.prototype,"contactFormSection",void 0);m([M("donation-form-header")],tt.prototype,"donationFormHeader",void 0);m([M("payment-selector")],tt.prototype,"paymentSelector",void 0);tt=m([vt("donation-form")],tt);const aa="venmo_mgc_pending_",Bf=60*60*1e3;class zf{constructor(t){this.storage=t??this.resolveStorage()}setPending(t){var e;const i={planId:t,timestamp:Date.now()};try{(e=this.storage)===null||e===void 0||e.setItem(`${aa}${t}`,JSON.stringify(i))}catch{}}getPending(t){var e,i;let n=null;try{n=(i=(e=this.storage)===null||e===void 0?void 0:e.getItem(`${aa}${t}`))!==null&&i!==void 0?i:null}catch{return null}if(!n)return null;try{const s=JSON.parse(n);return Date.now()-s.timestamp>Bf?(this.clearPending(t),null):s}catch{return this.clearPending(t),null}}clearPending(t){var e;try{(e=this.storage)===null||e===void 0||e.removeItem(`${aa}${t}`)}catch{}}resolveStorage(){for(const t of[localStorage,sessionStorage])try{return t.setItem("__venmo_test__","1"),t.removeItem("__venmo_test__"),t}catch{}}}const Vf={USD:"en-US"},jf={USD:"$"};function As(o,t="USD"){var e;if(!Number.isFinite(o))return"Invalid amount";const i=(e=Vf[t])!==null&&e!==void 0?e:"en-US";return new Intl.NumberFormat(i,{style:"currency",currency:t,minimumFractionDigits:2,maximumFractionDigits:2}).format(o)}let $l=class extends J{render(){return S`
      <div class="mgc-donation-section-info">
        <span><slot></slot></span>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.dispatchEvent(new Event("editingRequested"))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};$l.styles=mt`
    span {
      max-width: 300px;
      margin-right: 10px;
      display: inline-grid;
    }
  `;$l=m([ot("ia-mgc-form-section-info")],$l);let bs=class extends J{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?S`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:C}};bs.styles=mt`
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
  `;m([f({type:String})],bs.prototype,"status",void 0);bs=m([ot("ia-mgc-update-status")],bs);let ct=class extends J{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t,e;return S`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?C:S`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span
                  >${(t=this.plan)===null||t===void 0?void 0:t.currency} ${(e=this.plan)===null||e===void 0?void 0:e.amountFormatted}</span
                >
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:C}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-mgc-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,n,s,r;t.preventDefault();const c=this.form.querySelector('input[name="amount"]');this.newAmount=Number(c.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const a=Number(D.calculateTotal(Number((n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:a,baseAmount:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount,coverFees:this.coverFees,feeCovered:(r=this.donationPaymentInfo)===null||r===void 0?void 0:r.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new D({donationType:E.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new D({donationType:E.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new D({donationType:E.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(t,e){var i;t.preventDefault(),this.clearStatusMessaging();const n=e??this.form.querySelector("#update-amount");if(n&&this.updateButtonState(n),!this.newAmount){this.errorMessage="Please enter a new amount",n&&(n.isDisabled=!1);return}const s=this.form.querySelector('input[name="amount"]'),r=(i=Number(s.value))!==null&&i!==void 0?i:0,c=r<1,a=r>=9999;if(c&&(this.errorMessage="Please enter a valid amount"),a&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),a||c){n&&this.updateButtonState(n);return}this.requestAmountUpdate(t)}async updateButtonState(t){t.isDisabled=!0,await t?.updateComplete}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:D.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){if(!this.newAmount)return"I'll generously cover the fees.";const t=D.calculateFeeAmount(this.newAmount);return`I'll generously add ${As(t)} to cover fees.`}get editAmountForm(){var t,e,i,n,s;return S`
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
            ${jf[(n=(i=this.plan)===null||i===void 0?void 0:i.currency)!==null&&n!==void 0?n:"USD"]}
            <input
              min="1"
              max="9999"
              type="number"
              id="amount"
              name="amount"
              ?required=${!0}
              @focus=${()=>this.clearStatusMessaging()}
              @input=${r=>{const c=Number(r.target.value);this.captureAmountChanges(c),this.newAmount=c}}
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
              ${As(this.totalAmountWithFees())}
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
                .clickHandler=${(r,c)=>this.handleSubmit(r,c)}
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
    `}};ct.styles=mt`
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
  `;m([f({type:Object})],ct.prototype,"plan",void 0);m([f({type:Object})],ct.prototype,"donationPaymentInfo",void 0);m([f({type:Number})],ct.prototype,"newAmount",void 0);m([f({type:Boolean,reflect:!0})],ct.prototype,"currentlyEditing",void 0);m([f({type:Boolean})],ct.prototype,"coverFees",void 0);m([f({type:String})],ct.prototype,"updateMessage",void 0);m([f({type:String})],ct.prototype,"errorMessage",void 0);m([f({type:String})],ct.prototype,"updateStatus",void 0);m([ft("form")],ct.prototype,"form",void 0);ct=m([ot("ia-mgc-edit-plan-amount")],ct);var Ss;(function(o){o.invalid_date="Please enter a valid date format (YYYY-MM-DD)",o.date_too_early="Date must be at least tomorrow.",o.second_donation_this_month="The date you selected will result in an additional donation for this month.",o.date_out_of_range="New donation date must be within the next 12 months.",o.same_next_billing_date=""})(Ss||(Ss={}));let it=class extends J{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(t){this.dateInput&&t.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.dateInput.focus()}render(){var t;return S`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?C:S`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${(t=this.plan)===null||t===void 0?void 0:t.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:C}
        </donation-form-section>
      </section>
    `}async dateUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Date updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value="",this.newDate=void 0}formatDateToYYYYMMDD(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}validateChosenDate(t){var e,i,n;if(!t)return{valid:!1,errorCode:"invalid_date"};let s;try{s=new Date(`${t}T00:00:00`)}catch{return{valid:!1,errorCode:"invalid_date"}}const r=new Date;r.setHours(0,0,0,0),new Date(r).setDate(r.getDate()+1);const a=new Date(s);if(a.setHours(0,0,0,0),!((e=this.plan)===null||e===void 0)&&e.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(a):!1)return{valid:!1,errorCode:"same_next_billing_date"};if(a<r)return{valid:!1,errorCode:"date_too_early"};const d=new Date(r);if(d.setFullYear(d.getFullYear()+1),a>d)return{valid:!1,errorCode:"date_out_of_range"};const h=!((i=this.plan)===null||i===void 0)&&i.payment&&(!((n=this.plan.payment.lastBillingDate)===null||n===void 0)&&n.date)?new Date(this.plan.payment.lastBillingDate.date):null;if(h){const u=h.getMonth(),p=h.getFullYear(),_=s.getFullYear(),g=s.getMonth();if(_===p&&g===u)return{valid:!0,errorCode:"second_donation_this_month"}}return{valid:!0,errorCode:""}}get minDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate()+1);const i=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${i}-${n}-${s}`}get maxDate(){const t=new Date,e=t.getFullYear()+1,i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}get editDateForm(){var t,e,i,n,s;const r=!((t=this.plan)===null||t===void 0)&&t.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):"",c=(i=(e=this.dateInput)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:r;return S`
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
              .value=${c}
              @focus=${()=>this.clearStatusMessaging()}
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;const a=this.dateInput.value,{valid:l,errorCode:d}=this.validateChosenDate(a);if(this.allowEditing=l,d)if(d==="second_donation_this_month")this.errorMessage=Ss[d],this.warningMessage="You have already made a donation this month.";else{this.errorMessage=Ss[d],this.newDate=void 0;return}const h=new Date(`${a}T00:00:00`),u=new Date(h).toISOString();this.newDate=u}}
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
            ${this.warningMessage?S`<span>${this.warningMessage}</span><br />`:""}
            ${this.errorMessage}
          </p>
        </form>
      </section>
    `}};it.styles=mt`
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
  `;m([f({type:Object})],it.prototype,"plan",void 0);m([f({type:String})],it.prototype,"newDate",void 0);m([f({type:Boolean,reflect:!0})],it.prototype,"currentlyEditing",void 0);m([f({type:Boolean})],it.prototype,"allowEditing",void 0);m([f({type:String})],it.prototype,"updateMessage",void 0);m([f({type:String})],it.prototype,"errorMessage",void 0);m([f({type:String})],it.prototype,"warningMessage",void 0);m([f({type:String})],it.prototype,"updateStatus",void 0);m([ft("form")],it.prototype,"form",void 0);m([ft("form ia-mgc-button#edit-date")],it.prototype,"formSubmitButton",void 0);m([ft('form input[name="edit-date"]')],it.prototype,"dateInput",void 0);it=m([ot("ia-mgc-edit-date")],it);let Ve=class extends J{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:S`
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
    `}get confirmCancelation(){return S`
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
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my recurring donation.</b></label>
        </div>

        <ia-mgc-button
          class="cancel"
          .isDisabled=${this.patronWantsToKeepPlan}
          id=${`submit-${this.formId}`}
          type="submit"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.cancelThisPlan(t)}}
        >Cancel recurring donation</ia-mgc-button>
      </form>
    </section>
    <p class="pause-note">
      You can also pause your recurring donation by setting the next donation
      date up to 12 months in the future.
    </p>
    `}};Ve.styles=mt`
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

    .pause-note {
      font-style: italic;
      margin: 5px 0;
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

    /* keep the red cancel fill while disabled; the button's 0.5 opacity
       fades it to pink until the confirm checkbox is ticked */
    ia-mgc-button.cancel:not(.link) {
      --primaryDisableCTAFill: #d9534f;
      --secondaryCTABorder: #f18286;
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
  `;m([f({type:Object})],Ve.prototype,"plan",void 0);m([f({type:Boolean,reflect:!0})],Ve.prototype,"patronWantsToKeepPlan",void 0);m([f({type:Boolean,reflect:!0})],Ve.prototype,"initialCancelRequest",void 0);m([ft("form")],Ve.prototype,"form",void 0);Ve=m([ot("ia-mgc-cancel-plan")],Ve);let bt=class extends J{constructor(){super(...arguments),this.displayCreditCard=!1,this.patronEmail="",this.elementConnected=!1}get creditCardFieldsElement(){var t,e;return(e=(t=this.closest("form"))===null||t===void 0?void 0:t.querySelector("credit-card-fields"))!==null&&e!==void 0?e:null}createRenderRoot(){return this}disconnectedCallback(){this.elementConnected=!1}connectedCallback(){super.connectedCallback(),console.log("connectedCallback",{paymentConfig:this.paymentConfig}),this.elementConnected=!0}updated(t){if(t.has("elementConnected")&&this.elementConnected&&this.paymentConfig){const{braintreeAuthToken:i,endpointManager:n,paymentClients:s,environment:r}=this.paymentConfig||{};!this.braintreeManager&&i&&n&&s&&r&&this.setupBraintreeManager()}this.braintreeManager&&t.has("displayCreditCard")&&this.displayCreditCard&&this.setupCreditCardHandler()}async validateCreditCardFields(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());let i=!1,n=null;try{n=await e?.tokenizeHostedFields(),i=!0}catch(s){const r=s;switch(e?.showErrorMessage(),r.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e?.markFieldErrors([Q.Number,Q.CVV,Q.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e?.markFieldErrors([Q.CVV]);break}}return i?n:!1}async setupCreditCardHandler(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());try{await e?.tokenizeHostedFields()}catch{}e?.removeFieldErrors([Q.Number,Q.CVV,Q.ExpirationDate])}render(){return S``}async renderPayPalVaultButton(){var t,e,i;console.log("[PayPal] renderPayPalVaultButton called");const n=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.paypalHandler.get());if(console.log("[PayPal] handler:",n),!n)return;const s=document.querySelector("#ia-mgc-paypal-button");console.log("[PayPal] container element:",s);const r=new D({donationType:E.Monthly,amount:(i=(e=this.plan)===null||e===void 0?void 0:e.amount)!==null&&i!==void 0?i:0,coverFees:!1}),c=await n.renderPayPalButton({selector:"#ia-mgc-paypal-button",style:{color:"blue",shape:"rect",size:"medium"},donationInfo:r});console.log("[PayPal] dataSource:",c),c&&(c.delegate={payPalPaymentStarted:async()=>{console.log("PayPal payment started")},payPalPaymentAuthorized:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentConfirmed:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentCancelled:async()=>{console.log("PayPal payment cancelled")},payPalPaymentError:async(a,l)=>{console.error("PayPal vault error:",l),this.dispatchEvent(new CustomEvent("PayPalVaultError",{detail:{error:l}}))}})}handlePayPalAuthorized(t){this.dispatchEvent(new CustomEvent("PayPalVaultAuthorized",{detail:{paymentMethodInfo:{description:`PayPal - ${t.details.email}`,nonce:t.nonce,type:t.type,details:{email:t.details.email}}}}))}async startVenmoPayment(){var t,e,i,n,s,r,c;const a=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.venmoHandler.get());if(a){!((e=this.plan)===null||e===void 0)&&e.id&&((i=this.venmoPendingStorage)===null||i===void 0||i.setPending(this.plan.id));try{const l=await a.startPayment();!((n=this.plan)===null||n===void 0)&&n.id&&((s=this.venmoPendingStorage)===null||s===void 0||s.clearPending(this.plan.id)),this.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:`Venmo - ${l.details.username}`,nonce:l.nonce,type:l.type,details:{username:l.details.username}}}}))}catch(l){!((r=this.plan)===null||r===void 0)&&r.id&&((c=this.venmoPendingStorage)===null||c===void 0||c.clearPending(this.plan.id));const d=l?.code;d==="VENMO_APP_CANCELED"||d==="VENMO_CANCELED"?console.log("Venmo payment cancelled"):(console.error("Venmo payment error:",l),this.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:l}})))}}}async startGooglePayPayment(){var t,e,i;const n=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.googlePayHandler.get());if(n)try{const s=await n.instance.get();if(!s)return;const r=await s.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${(i=(e=this.plan)===null||e===void 0?void 0:e.amount)!==null&&i!==void 0?i:0}`}}),c=await n.paymentsClient.loadPaymentData(r),a=await s.parseResponse(c);this.dispatchEvent(new CustomEvent("GooglePayVaultAuthorized",{detail:{paymentMethodInfo:{description:`Google Pay - ${a.details.cardType} - ${a.details.lastFour}`,nonce:a.nonce,type:a.type,details:{cardType:a.details.cardType,lastFour:a.details.lastFour}}}}))}catch(s){s?.statusCode==="CANCELED"?console.log("Google Pay payment cancelled"):(console.error("Google Pay payment error:",s),this.dispatchEvent(new CustomEvent("GooglePayError",{detail:{error:s}})))}}async startApplePayPayment(t){var e,i,n;const s=await((e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.applePayHandler.get());if(s)try{const r=await s.instance.get();if(!r)return;const c=r.createPaymentRequest({total:{label:"Internet Archive Monthly",amount:`${(n=(i=this.plan)===null||i===void 0?void 0:i.amount)!==null&&n!==void 0?n:0}`},requiredBillingContactFields:["postalAddress"]}),a=new ApplePaySession(3,c);a.onvalidatemerchant=l=>{r.performValidation({validationURL:l.validationURL,displayName:"Internet Archive"},(d,h)=>{if(d){console.error("Apple Pay merchant validation error:",d),a.abort(),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:d}}));return}a.completeMerchantValidation(h)})},a.onpaymentauthorized=async l=>{try{const d=await r.tokenize({token:l.payment.token});a.completePayment(ApplePaySession.STATUS_SUCCESS),this.dispatchEvent(new CustomEvent("ApplePayVaultAuthorized",{detail:{paymentMethodInfo:{description:`Apple Pay - ${d.details.cardType} - ${d.details.dpanLastTwo}`,nonce:d.nonce,type:d.type,details:{cardType:d.details.cardType,lastTwo:d.details.dpanLastTwo}}}}))}catch(d){a.completePayment(ApplePaySession.STATUS_FAILURE),console.error("Apple Pay tokenization error:",d),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:d}}))}},a.oncancel=()=>{console.log("Apple Pay payment cancelled")},a.begin()}catch(r){console.error("Apple Pay error:",r),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:r}}))}}async checkVenmoRestoration(){var t,e,i,n,s,r,c;const a=(t=this.plan)===null||t===void 0?void 0:t.id;if(!(!a||!(!((e=this.venmoPendingStorage)===null||e===void 0)&&e.getPending(a))))try{const d=await((i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.venmoHandler.get());if(!d){(n=this.venmoPendingStorage)===null||n===void 0||n.clearPending(a);return}const h=await d.instance.get();if(!h){(s=this.venmoPendingStorage)===null||s===void 0||s.clearPending(a);return}if((r=this.venmoPendingStorage)===null||r===void 0||r.clearPending(a),!h.hasTokenizationResult())return;const u=await d.startPayment();this.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:`Venmo - ${u.details.username}`,nonce:u.nonce,type:u.type,details:{username:u.details.username}}}}))}catch(d){(c=this.venmoPendingStorage)===null||c===void 0||c.clearPending(a);const h=d?.code;h!=="VENMO_APP_CANCELED"&&h!=="VENMO_CANCELED"&&(console.error("Venmo restoration error:",d),this.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:d}})))}}async setupBraintreeManager(){var t,e,i,n,s,r,c,a,l,d;this.braintreeManager=new sp({paymentClients:(e=(t=this.paymentConfig)===null||t===void 0?void 0:t.paymentClients)!==null&&e!==void 0?e:{},endpointManager:(i=this.paymentConfig)===null||i===void 0?void 0:i.endpointManager,authorizationToken:(s=(n=this.paymentConfig)===null||n===void 0?void 0:n.braintreeAuthToken)!==null&&s!==void 0?s:"",venmoProfileId:(r=this.paymentConfig)===null||r===void 0?void 0:r.venmoProfileId,googlePayMerchantId:(c=this.paymentConfig)===null||c===void 0?void 0:c.googlePayMerchantId,hostedFieldConfig:{hostedFieldStyle:{},hostedFieldFieldOptions:{number:{selector:"#braintree-creditcard"},cvv:{selector:"#braintree-cvv"},expirationDate:{selector:"#braintree-expiration"}},hostedFieldContainer:(a=this.creditCardFieldsElement)===null||a===void 0?void 0:a.hostedFieldContainer},hostingEnvironment:(l=this.paymentConfig)===null||l===void 0?void 0:l.environment,referrer:window.location.href,loggedInUser:this.patronEmail,origin:window.location.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",h=>{const u=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:h}});this.dispatchEvent(u)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",h=>{const u=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:h}});this.dispatchEvent(u)}),!(!((d=this.paymentConfig)===null||d===void 0)&&d.googlePayMerchantId)&&this.braintreeManager&&(this.braintreeManager.paymentProviders.googlePayHandler={get:async()=>null}),await this.checkVenmoRestoration(),this.dispatchEvent(new Event("BraintreeManagerSetupComplete"))}get contactForm(){return this.querySelector('form[name="contact-form"]')}};m([f({type:Object})],bt.prototype,"plan",void 0);m([f({type:Boolean})],bt.prototype,"displayCreditCard",void 0);m([f({type:String})],bt.prototype,"patronEmail",void 0);m([f({type:Object})],bt.prototype,"paymentConfig",void 0);m([f({type:Object})],bt.prototype,"braintreeManager",void 0);m([Mu()],bt.prototype,"elementConnected",void 0);m([f({type:Object})],bt.prototype,"venmoPendingStorage",void 0);bt=m([ot("ia-mgc-braintree-manager")],bt);class mn{constructor(t){var e;this.paymentMethodInfo=t.paymentMethodInfo,this.donorContactInfo=t.donorContactInfo,this.paymentProvider=(e=t.paymentProvider)!==null&&e!==void 0?e:"unknown"}}const qf="creditCard";let nt=class extends J{constructor(){super(...arguments),this.paymentConfig={braintreeAuthToken:"",endpointManager:void 0,paymentClients:void 0,environment:"Development",venmoProfileId:"",googlePayMerchantId:"",referrer:"",origin:""},this.patronEmail="",this.currentlyEditing=!1,this.newPaymentMethod="",this.selectedPaymentProvider="",this.paymentSelectorFirstUpdated=!1,this.updateMessage="",this.updateStatus=""}createRenderRoot(){return this}firstUpdated(){this.checkAndRestoreVenmoState()}checkAndRestoreVenmoState(){var t,e;!((t=this.plan)===null||t===void 0)&&t.id&&!((e=this.venmoPendingStorage)===null||e===void 0)&&e.getPending(this.plan.id)&&(this.currentlyEditing=!0,this.selectedPaymentProvider=b.Venmo)}submitPaymentMethodChange(t){t.preventDefault()}selectProvider(t){this.selectedPaymentProvider=t,this.authorizedPaymentMethodRequest=void 0}clearStatusMessaging(){this.updateMessage="",this.updateStatus=""}async paymentMethodUpdated(t){if(this.updateStatus=t,this.updateMessage=t==="success"?"Payment method updated":"Failed to update date, please try again",t==="success"){this.currentlyEditing=!1,this.selectedPaymentProvider="",this.authorizedPaymentMethodRequest=void 0;return}this.updateRequestButton.isDisabled=!1}get updateRequestButton(){return this.querySelector("ia-mgc-button#edit-plan-payment-method-submit")}get contactFormElement(){return this.querySelector("contact-form")}get contactFormSection(){const t=this.selectedPaymentProvider===b.Venmo?"Help us stay in touch":"Enter payment information";return S`
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
    `}get paymentFormSection(){return S``}get creditCardElement(){return this.querySelector("contact-form")}get creditCardFieldsElement(){return this.querySelector("credit-card-fields")}get braintreeManagerElement(){return this.querySelector("ia-mgc-braintree-manager")}get paymentMethodDetail(){var t,e;const{paymentMethodType:i,paypalEmail:n,venmoUsername:s,cardType:r,last4:c}=(e=(t=this.plan)===null||t===void 0?void 0:t.payment)!==null&&e!==void 0?e:{};return i===b.PayPal?n??"":i===b.Venmo?s??"":`${r} - ${c}`}render(){var t,e,i,n,s;const r=this.selectedPaymentProvider===b.CreditCard||this.selectedPaymentProvider===b.Venmo,c=this.selectedPaymentProvider===b.CreditCard,a=!!this.selectedPaymentProvider,l=this.selectedPaymentProvider===b.CreditCard||!!this.authorizedPaymentMethodRequest;return S`
      <style>
        ${this.styles}
      </style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${this.currentlyEditing?C:S`<ia-mgc-form-section-info
              @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
              ><span>
                ${((e=(t=this.plan)===null||t===void 0?void 0:t.payment)===null||e===void 0?void 0:e.paymentMethodType)===qf?"Credit Card":(n=(i=this.plan)===null||i===void 0?void 0:i.payment)===null||n===void 0?void 0:n.paymentMethodType}:
                ${this.paymentMethodDetail}
              </span></ia-mgc-form-section-info
            >`}
        ${this.currentlyEditing?S`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${(s=this.braintreeManager)===null||s===void 0?void 0:s.paymentProviders}
                @firstUpdated=${d=>{var h;this.paymentSelectorFirstUpdated=!0,(h=d.target)===null||h===void 0||h.showPaypalButton()}}
                @creditCardSelected=${()=>{this.selectProvider(b.CreditCard)}}
                @venmoSelected=${()=>{this.selectProvider(b.Venmo)}}
                @applePaySelected=${d=>{var h;this.selectProvider(b.ApplePay),(h=this.braintreeManagerElement)===null||h===void 0||h.startApplePayPayment(d.detail.originalEvent)}}
                @googlePaySelected=${()=>{var d;this.selectProvider(b.GooglePay),(d=this.braintreeManagerElement)===null||d===void 0||d.startGooglePayPayment()}}
                @paypalSelected=${()=>{this.selectProvider(b.PayPal)}}
                @resetPaymentMethod=${async()=>{this.selectProvider("")}}
                tabindex="0"
              >
                <div slot="paypal-button">
                  <div id="ia-mgc-paypal-button"></div>
                </div>
                <div
                  slot="credit-card-fields"
                  class="${c?"":"hidden"}"
                >
                  <credit-card-fields></credit-card-fields>
                </div>
              </payment-selector>

              <div class="${r?"":"hidden"}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>

              <ia-mgc-braintree-manager
                class="${a?"":"hidden"}"
                .displayCreditCard=${c}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                .venmoPendingStorage=${this.venmoPendingStorage}
                @BraintreeManagerSetupComplete=${()=>{var d,h;this.braintreeManager=(d=this.braintreeManagerElement)===null||d===void 0?void 0:d.braintreeManager,(h=this.braintreeManagerElement)===null||h===void 0||h.renderPayPalVaultButton()}}
                @PayPalVaultAuthorized=${d=>{this.handlePayPalVaultAuthorized(d)}}
                @PayPalVaultError=${()=>{this.updateStatus="fail",this.updateMessage="PayPal error, please try again"}}
                @VenmoAuthorized=${d=>{this.handleVenmoAuthorized(d)}}
                @VenmoError=${()=>{this.showVenmoError("Venmo error, please try again"),this.dispatchEvent(new CustomEvent("VenmoError",{bubbles:!0,composed:!0}))}}
                @GooglePayVaultAuthorized=${d=>{this.handleGooglePayVaultAuthorized(d)}}
                @GooglePayError=${()=>{this.updateStatus="fail",this.updateMessage="Google Pay error, please try again"}}
                @ApplePayVaultAuthorized=${d=>{this.handleApplePayVaultAuthorized(d)}}
                @ApplePayError=${()=>{this.updateStatus="fail",this.updateMessage="Apple Pay error, please try again"}}
              ></ia-mgc-braintree-manager>

              <ia-mgc-button
                id="edit-plan-payment-method-cancel"
                class="secondary"
                .clickHandler=${()=>{var d,h;this.selectedPaymentProvider===b.Venmo&&(!((d=this.plan)===null||d===void 0)&&d.id)&&((h=this.venmoPendingStorage)===null||h===void 0||h.clearPending(this.plan.id)),this.currentlyEditing=!1,this.selectedPaymentProvider="",this.authorizedPaymentMethodRequest=void 0,this.clearStatusMessaging()}}
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!l}
                .clickHandler=${async(d,h)=>{var u,p,_;const g=h;if(g.isDisabled=!0,this.selectedPaymentProvider!==b.CreditCard){if(!this.authorizedPaymentMethodRequest){g.isDisabled=!1;return}this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:this.authorizedPaymentMethodRequest}}));return}const N=(u=this.creditCardElement)===null||u===void 0?void 0:u.reportValidity(),st=await((p=this.braintreeManagerElement)===null||p===void 0?void 0:p.validateCreditCardFields());if(!N||!st){g.isDisabled=!1;return}const rt=new mn({paymentMethodInfo:st,donorContactInfo:(_=this.contactFormElement)===null||_===void 0?void 0:_.donorContactInfo,paymentProvider:b.CreditCard});this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:rt}}))}}
                >Update payment method</ia-mgc-button
              >
              ${this.selectedPaymentProvider===b.Venmo?S`<ia-mgc-button
                      id="edit-plan-payment-method-venmo-submit"
                      class="primary"
                      .clickHandler=${async(d,h)=>{var u,p;const _=h;if(_.isDisabled=!0,!((u=this.contactFormElement)===null||u===void 0?void 0:u.reportValidity())){_.isDisabled=!1;return}this.dispatchEvent(new CustomEvent("VenmoRedirectStarted",{bubbles:!0,composed:!0})),await((p=this.braintreeManagerElement)===null||p===void 0?void 0:p.startVenmoPayment()),_.isDisabled=!1}}
                      >Pay with Venmo</ia-mgc-button
                    >`:C}
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>
              <div class="secure-process-note">
                ${Ll} Your payment will be securely processed
              </div>
            </form>
          `:C}
      </donation-form-section>
    `}showVenmoError(t="Venmo payment cancelled, please try again."){this.updateStatus="fail",this.updateMessage=t}handleVenmoAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new mn({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.Venmo})}handleGooglePayVaultAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new mn({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.GooglePay})}handleApplePayVaultAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new mn({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.ApplePay})}handlePayPalVaultAuthorized(t){var e,i,n,s;const{paymentMethodInfo:r}=t.detail,c=(i=(e=r?.details)===null||e===void 0?void 0:e.email)!==null&&i!==void 0?i:"",a=(s=(n=this.contactFormElement)===null||n===void 0?void 0:n.donorContactInfo)!==null&&s!==void 0?s:{customer:{email:c}};this.authorizedPaymentMethodRequest=new mn({paymentMethodInfo:r,donorContactInfo:a,paymentProvider:b.PayPal})}get styles(){return mt`
      payment-selector {
        display: block;
        margin-bottom: 5px;
        padding-bottom: 10px;
      }

      ia-mgc-braintree-manager {
        display: block;
        margin: 10px 0;
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
    `}};m([f({type:Object})],nt.prototype,"plan",void 0);m([f({type:Object})],nt.prototype,"paymentConfig",void 0);m([f({type:String})],nt.prototype,"patronEmail",void 0);m([f({type:Boolean,reflect:!0})],nt.prototype,"currentlyEditing",void 0);m([f({type:String,reflect:!0})],nt.prototype,"newPaymentMethod",void 0);m([f({type:Object})],nt.prototype,"braintreeManager",void 0);m([f({type:String,reflect:!0})],nt.prototype,"selectedPaymentProvider",void 0);m([f({type:Boolean})],nt.prototype,"paymentSelectorFirstUpdated",void 0);m([f({type:String})],nt.prototype,"updateMessage",void 0);m([f({type:String})],nt.prototype,"updateStatus",void 0);m([f({type:Object})],nt.prototype,"venmoPendingStorage",void 0);m([Mu()],nt.prototype,"authorizedPaymentMethodRequest",void 0);nt=m([ot("ia-mgc-edit-payment-method")],nt);let ht=class extends J{constructor(){super(...arguments),this.patronEmail="",this.canEditPaymentMethod=!1,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:ut.Development,paymentClients:void 0,endpointManager:void 0}}createRenderRoot(){return this}paymentMethodUpdates(t){this.querySelector("ia-mgc-edit-payment-method").paymentMethodUpdated(t)}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}dateUpdates(t){this.querySelector("ia-mgc-edit-date").dateUpdated(t)}render(){return S`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${t=>{var e;const{amount:i,baseAmount:n,coverFees:s,feeCovered:r}=t.detail;this.plan&&((e=this.updateAmountHandler)===null||e===void 0||e.call(this,this.plan,{amount:i,baseAmount:n,coverFees:s,feeCovered:r}))}}
        ></ia-mgc-edit-plan-amount>
        ${this.canEditPaymentMethod?S`
              <hr />
              <ia-mgc-edit-payment-method
                .plan=${this.plan}
                .patronEmail=${this.patronEmail}
                .paymentConfig=${this.paymentConfig}
                .venmoPendingStorage=${this.venmoPendingStorage}
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
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};m([f({type:Object})],ht.prototype,"plan",void 0);m([f({type:String})],ht.prototype,"patronEmail",void 0);m([f({type:Boolean})],ht.prototype,"canEditPaymentMethod",void 0);m([f({type:Object})],ht.prototype,"updateAmountHandler",void 0);m([f({type:Object})],ht.prototype,"venmoPendingStorage",void 0);m([f({type:Object})],ht.prototype,"paymentConfig",void 0);m([ft("#braintree-creditcard")],ht.prototype,"braintreeNumberInput",void 0);m([ft("#braintree-expiration")],ht.prototype,"braintreeExpirationDateInput",void 0);m([ft("#braintree-cvv")],ht.prototype,"braintreeCVVInput",void 0);m([ft("#braintree-error-message")],ht.prototype,"braintreeErrorMessage",void 0);ht=m([ot("ia-mgc-edit-plan")],ht);var St;(function(o){o.welcome="ShowWelcome",o.receipts="ShowReceipts",o.plans="ShowPlans",o.editPlan="ShowEditForm"})(St||(St={}));let at=class extends J{constructor(){super(...arguments),this.patronName="",this.patronEmail="",this.canEditPaymentMethod=!1,this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!0,this.venmoPendingStorage=new zf,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:ut.Development,paymentClients:void 0,endpointManager:{}}}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:n=""}=t,s=(e=i?.id)!==null&&e!==void 0?e:n;if(t.action==="paymentMethodUpdate"){this.editFormElement.paymentMethodUpdates(t.status);return}if(t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="dateUpdate"){this.editingThisPlan=i,this.editFormElement.dateUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:s,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return S`
      ${this.sectionTitle}
      ${t?S`<ia-mgc-edit-plan
            .canEditPaymentMethod=${this.canEditPaymentMethod}
            .patronEmail=${this.patronEmail}
            .plan=${this.editingThisPlan}
            .paymentConfig=${this.paymentConfig}
            .venmoPendingStorage=${this.venmoPendingStorage}
            @cancelPlan=${()=>{this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:this.editingThisPlan}}))}}
            .updateAmountHandler=${(e,i)=>{console.log("updateAmount",e,{...i}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:e,amountOptions:i}}))}}
            @updateDate=${e=>{const{newDate:i}=e.detail;console.log("updateDate",i),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.editingThisPlan,newDate:i}}))}}
            @UpdatePaymentMethod=${e=>{const{newPaymentMethodRequest:i}=e.detail;console.log("UpdatePaymentMethod",i),console.warn("UPDATE PAYMENT METHOD",{plan:this.editingThisPlan,newPaymentMethodRequest:i}),this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{plan:this.editingThisPlan,newPaymentMethodRequest:i}}))}}
          >
          </ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let t="",e="",i=S``;const n=S`
      <ia-mgc-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(St.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,s=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=S`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?St.plans:St.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=S`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?St.plans:St.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;default:t="Monthly Giving Circle",e="heart",s&&(i=n);break}return S`
      <ia-mgc-title titleStyle=${e}>
        <span slot="title">${t}</span>
        <span slot="action">${i}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay==="receipts"?S`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></ia-mgc-receipts>
      `:S`
      ${this.viewToDisplay==="plans"&&this.plans.length?S`
            <ia-mgc-plans
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(St.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:S`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};m([f({type:String})],at.prototype,"patronName",void 0);m([f({type:String})],at.prototype,"patronEmail",void 0);m([f({type:Boolean})],at.prototype,"canEditPaymentMethod",void 0);m([f({type:Array})],at.prototype,"receipts",void 0);m([f({type:Array})],at.prototype,"updates",void 0);m([f({type:Array})],at.prototype,"plans",void 0);m([f({type:Object})],at.prototype,"editingThisPlan",void 0);m([f({type:String,reflect:!0})],at.prototype,"viewToDisplay",void 0);m([f({type:Boolean,reflect:!0})],at.prototype,"canEdit",void 0);m([f({type:Object})],at.prototype,"venmoPendingStorage",void 0);m([f({type:Object})],at.prototype,"paymentConfig",void 0);at=m([ot("ia-monthly-giving-circle")],at);class ao{constructor(t){this.receipt=t}get amount(){var t;return As(this.receipt.total_amount,(t=this.receipt.currency)!==null&&t!==void 0?t:"USD")}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}}class Wf{constructor(t){var e;this.plan=t,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get amount(){return this.plan.amount}get amountFormatted(){return As(this.plan.amount,this.currency)}get payment(){return this.plan.btdata}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}get nextBillingDate(){var t,e,i;return(i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:""}setNextBillingDate(t){this.payment&&(this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=t)}formatDateUTC(t){const e=new Date(t);return Number.isNaN(e.getTime())?"Invalid date":new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(e)}get nextBillingDateLocale(){var t,e,i;const n=(i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:"";return n?this.formatDateUTC(n):"not found"}get lastBillingDateLocale(){var t,e,i;const n=(i=(e=(t=this.payment)===null||t===void 0?void 0:t.lastBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:"";return n?this.formatDateUTC(n):""}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(t){const e=this.plan.processor_id;this.plan.processor_id=t,this.plan.oldProcessorId=e}setNewPaymentMethod(t){var e,i,n,s,r,c,a;const l=this.payment,{details:d,type:h}=t.paymentMethodInfo,u=(i=(e=d.email)!==null&&e!==void 0?e:d.description)!==null&&i!==void 0?i:"not_found";let p;switch(t.paymentProvider){case b.PayPal:p={...this.plan.btdata,paymentMethodType:"PayPal",paypalEmail:u,cardType:null,last4:null,expirationMonth:null,expirationYear:null};break;case b.Venmo:p={...this.plan.btdata,paymentMethodType:b.Venmo,venmoUsername:d.username,cardType:null,last4:null,expirationMonth:null,expirationYear:null};break;case b.GooglePay:p={...this.plan.btdata,paymentMethodType:b.GooglePay,cardType:(n=d.cardType)!==null&&n!==void 0?n:null,last4:(s=d.lastFour)!==null&&s!==void 0?s:null,expirationMonth:null,expirationYear:null};break;case b.ApplePay:p={...this.plan.btdata,paymentMethodType:b.ApplePay,cardType:(r=d.cardType)!==null&&r!==void 0?r:null,last4:(c=d.lastTwo)!==null&&c!==void 0?c:null,expirationMonth:null,expirationYear:null};break;default:p={...this.plan.btdata,...d,paymentMethodType:h,last4:(a=d.lastFour)!==null&&a!==void 0?a:"unknown"}}this.plan.old_btData=l,this.plan.btdata=p}}let $t=[];const ki=new Date;ki.setDate(ki.getDate()+25);ki.setMinutes(0);ki.setSeconds(0);ki.setMilliseconds(0);console.log("nextPaymentIn25Days",ki.toISOString());const Hi=new Date;Hi.setMinutes(0);Hi.setSeconds(0);Hi.setMilliseconds(0);Hi.setDate(1);console.log("lastPaymentInTheSameMonth",Hi.toISOString());const fl=new Date;fl.setMonth(fl.getMonth()+1);const Ui=new Date(fl);Ui.setMinutes(0);Ui.setSeconds(0);Ui.setMilliseconds(0);Ui.setDate(1);console.log("nextPaymentFirstOfMonth",Ui.toISOString());const Gf=new Date;Gf.setHours(0,0,0,0);const Kl=new Date;Kl.setHours(0,0,0,0);Kl.setDate(0);const to=new Date;to.setHours(0,0,0,0);to.setMonth(to.getMonth()+1);to.setDate(0);const $u={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10.3,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:Kl.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:to.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"PayPal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:2.5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:Hi.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Ui.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}},51902:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar777gigglingSoda",amount:7.5,currency:"USD",start_date:"2024-09-10 00:00:00",is_test:!0,btdata:{billingDayOfMonth:10,nextBillingDate:{date:"2024-10-10 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Google Pay",last4:"4242",cardType:"Visa",expirationMonth:null,expirationYear:null}},62813:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar888hummingTonic",amount:12,currency:"USD",start_date:"2024-11-05 00:00:00",is_test:!0,btdata:{billingDayOfMonth:5,nextBillingDate:{date:"2024-12-05 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Apple Pay",last4:"42",cardType:"Visa",expirationMonth:null,expirationYear:null}}},lm=Object.keys($u).map(o=>new Wf($u[o])),dm=[new ao({currency:"USD",total_amount:1,net_amount:1,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-1",token:"foo-token-1",is_test:!1}),new ao({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-4",token:"foo-token-4",is_test:!1}),new ao({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,fee_covered:!0,date:new Date("2022-09-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new ao({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})],Kf={referrer:"",origin:"",braintreeAuthToken:"sandbox_x634jsj7_7zybks4ybp63pbmd",venmoProfileId:"1953896702662410263",googlePayMerchantId:"merchant-id-placeholder",environment:"dev",paymentClients:new op(new cm,ut.Development),endpointManager:{submitData:async o=>{debugger},donationSuccessful:o=>{debugger}}};let la=!0;const w=document.getElementById("interaction-status-area"),Zf=()=>Math.floor(Math.random()+.5),qs=()=>document.getElementById("force-successful-requests").checked?1:Zf(),P=document.querySelector("ia-monthly-giving-circle");P.paymentConfig=Kf;P.receipts=dm;P.plans=lm;P.addEventListener("EmailReceiptRequest",o=>{const{donation:t}=o.detail,e=qs()===1,i=e?"success":"fail",n=e?1500:5e3;w.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${n} ms.`;const r={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};$t=[r,...$t],setTimeout(()=>{P.updateReceived(r),console.log("EmailReceiptRequest index.html ----",r),w.innerText=""},n)});P.addEventListener("cancelPlan",async o=>{const{plan:t}=o.detail,i=P.plans.map(n=>(n.plan.token===t.plan.token&&(console.log("p 2 plan",n,t),n.cancelPlan()),n));P.plans=i,await P.updateComplete,console.log("plan cancelled & plan list updated",P.plans)});P.addEventListener("updateAmount",async o=>{const{plan:t,amountOptions:e}=o.detail,i=qs()===1,n=i?"success":"fail",s=i?1500:5e3;w.innerText=`Amount Update Request received: will return ${n} in ${s} ms - Details: ${JSON.stringify(e)}`;const r=n==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const c={message:r,status:n,plan:t,donationId:t.id,action:"amountUpdate"};$t=[c,...$t],setTimeout(()=>{P.updateReceived(c),console.log("Amount Update Request --- index.html ----",c),w.innerText=""},s)});P.addEventListener("updateDate",o=>{const{newDate:t,plan:e}=o.detail,i=qs()===1,n=i?"success":"fail",s=i?1500:5e3;w.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(e.id)} -- Update will return ${n} in ${s} ms`;const r=n==="success"?"Date updated":"Date failed to update";i&&(e.setNextBillingDate(t),e.setNewProcessorId("new-processor_id@1"));const c={message:r,status:n,plan:e,donationId:e.id,action:"dateUpdate"};$t=[c,...$t],setTimeout(()=>{P.updateReceived(c),console.log("Amount Update Request --- index.html ----",c),w.innerText=""},s)});P.addEventListener("UpdatePaymentMethod",o=>{console.log("UpdatePaymentMethod received:",o.detail);const{plan:t,newPaymentMethodRequest:e}=o.detail,i=e?.paymentProvider,n=i==="PayPal",s=i==="Venmo",r=i==="Google Pay",c=i==="Apple Pay",a=n||s||r||c?!0:qs()===1,l=a?"success":"fail",d=a?1500:4e3,h=e?.paymentMethodInfo?.details,u=e?.paymentMethodInfo?.nonce;let p;n?p=`PayPal (${h?.email}, nonce: ${u})`:s?p=`Venmo (@${h?.username}, nonce: ${u})`:r?p=`Google Pay (${h?.cardType} - ${h?.lastFour}, nonce: ${u})`:c?p=`Apple Pay (${h?.cardType} - ${h?.lastTwo}, nonce: ${u})`:p="Credit Card",w.innerText=`Updating ${p} for plan: ${t?t.id:"no plan"} — will return ${l} in ${d} ms`;const _=l==="success"?"Payment method updated":"Payment method failed to update";a&&t&&(console.log("demo - setting new payment method",e),t.setNewPaymentMethod(e));const g={message:_,status:l,plan:t,donationId:t?t.id:null,action:"paymentMethodUpdate"};$t=[g,...$t],setTimeout(()=>{P.updateReceived(g),console.log("UpdatePaymentMethod --- index.html ----",g),w.innerText=""},d)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(la){P.receipts=[],la=!1;return}P.receipts=dm,await P.updateComplete,la=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{$t=[],P.updates=$t,await P.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{P.plans=P.plans.length?[]:lm,await P.updateComplete});document.getElementById("toggle-prefilled-email").addEventListener("click",async()=>{P.patronEmail=P.patronEmail?"":"you@thisemail.com",await P.updateComplete});document.getElementById("toggle-edit-payment-method").addEventListener("click",async()=>{P.canEditPaymentMethod=!P.canEditPaymentMethod,await P.updateComplete});document.getElementById("mock-venmo-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:"Venmo - @mock_venmo_user",nonce:`mock-venmo-nonce-${Date.now()}`,type:"VenmoAccount",details:{username:"mock_venmo_user"}}}})),w.innerText="Mock VenmoAuthorized event dispatched."});document.getElementById("mock-venmo-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:{code:"VENMO_MOCK_ERROR",message:"Mock Venmo error for demo"}}})),w.innerText="Mock VenmoError event dispatched."});document.getElementById("mock-googlepay-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("GooglePayVaultAuthorized",{detail:{paymentMethodInfo:{description:"Google Pay - Visa - 4242",nonce:`mock-googlepay-nonce-${Date.now()}`,type:"AndroidPayCard",details:{cardType:"Visa",lastFour:"4242"}}}})),w.innerText="Mock GooglePayVaultAuthorized event dispatched."});document.getElementById("mock-googlepay-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("GooglePayError",{detail:{error:{message:"Mock Google Pay error for demo"}}})),w.innerText="Mock GooglePayError event dispatched."});document.getElementById("mock-applepay-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("ApplePayVaultAuthorized",{detail:{paymentMethodInfo:{description:"Apple Pay - Visa - 42",nonce:`mock-applepay-nonce-${Date.now()}`,type:"ApplePayCard",details:{cardType:"Visa",lastTwo:"42"}}}})),w.innerText="Mock ApplePayVaultAuthorized event dispatched."});document.getElementById("mock-applepay-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:{message:"Mock Apple Pay error for demo"}}})),w.innerText="Mock ApplePayError event dispatched."});class Zl{static STATUS_SUCCESS=1;static STATUS_FAILURE=2;static supportsVersion(){return!0}static canMakePayments(){return!0}constructor(t,e){this.version=t,this.paymentRequest=e}begin(){if(!window.confirm(`Apple Pay Demo

This is a simulated Apple Pay sheet — no real Apple Pay session exists in this browser.

Click OK to simulate a successful payment authorization for Visa ...42.`)){w.innerText="Simulated Apple Pay sheet cancelled.",this.oncancel?.();return}w.innerText="Simulated Apple Pay sheet: auto-validating merchant...",Promise.resolve().then(()=>{this.onvalidatemerchant?.({validationURL:"https://fake.apple.example/validate"})})}completeMerchantValidation(){w.innerText="Simulated Apple Pay: merchant validated, auto-authorizing payment...",Promise.resolve().then(()=>{this.onpaymentauthorized?.({payment:{token:{fake:!0},billingContact:{},shippingContact:{emailAddress:"demo-donor@example.com"}}})})}abort(){w.innerText="Simulated Apple Pay session aborted."}completePayment(t){w.innerText=t===Zl.STATUS_SUCCESS?"Simulated Apple Pay: payment completed successfully.":"Simulated Apple Pay: payment failed."}}function Yf(){const o={createPaymentRequest:t=>t,performValidation:(t,e)=>{e(null,{fakeMerchantSession:!0})},tokenize:()=>Promise.resolve({nonce:`demo-fake-applepay-nonce-${Date.now()}`,type:"ApplePayCard",details:{cardType:"Visa",dpanLastTwo:"42"}})};return{isAvailable:async()=>!0,instance:{get:async()=>o}}}let lo=null;function fu(){const t=document.querySelector("ia-mgc-braintree-manager")?.braintreeManager;t&&!t.__demoApplePayPatched&&(t.paymentProviders.applePayHandler={get:async()=>Yf()},t.__demoApplePayPatched=!0);const e=document.querySelector("ia-mgc-edit-payment-method payment-selector");e&&(e.applePayMode="available")}document.getElementById("simulate-applepay").addEventListener("change",o=>{o.target.checked?(window.ApplePaySession=Zl,fu(),lo=setInterval(fu,300),w.innerText="Apple Pay simulation enabled — open a plan in edit mode to see the icon."):(delete window.ApplePaySession,lo&&(clearInterval(lo),lo=null),w.innerText="Apple Pay simulation disabled.")});function Jf(){const o={createPaymentDataRequest:t=>t,parseResponse:()=>Promise.resolve({nonce:`demo-fake-googlepay-nonce-${Date.now()}`,type:"AndroidPayCard",details:{cardType:"Visa",lastFour:"4242"}})};return{isBrowserSupported:async()=>!0,instance:{get:async()=>o},paymentsClient:{loadPaymentData:()=>{if(!window.confirm(`Google Pay Demo

This is a simulated Google Pay sheet — no real Google Pay session exists in this browser.

Click OK to simulate a successful payment authorization for Visa ...4242.`)){w.innerText="Simulated Google Pay sheet cancelled.";const e=new Error("User closed the Payment Request UI.");return e.statusCode="CANCELED",Promise.reject(e)}return w.innerText="Simulated Google Pay sheet: auto-authorizing payment...",Promise.resolve({fakePaymentData:!0})}}}}let co=null;function _u(){const t=document.querySelector("ia-mgc-braintree-manager")?.braintreeManager;t&&!t.__demoGooglePayPatched&&(t.paymentProviders.googlePayHandler={get:async()=>Jf()},t.__demoGooglePayPatched=!0);const e=document.querySelector("ia-mgc-edit-payment-method payment-selector");e&&(e.googlePayMode="available")}document.getElementById("simulate-googlepay").addEventListener("change",o=>{o.target.checked?(_u(),co=setInterval(_u,300),w.innerText="Google Pay simulation enabled — open a plan in edit mode to see the icon."):(co&&(clearInterval(co),co=null),w.innerText="Google Pay simulation disabled.")});
