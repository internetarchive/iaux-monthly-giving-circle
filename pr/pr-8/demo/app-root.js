import{LazyLoaderService as R$}from"https://esm.archive.org/@internetarchive/lazy-loader-service";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function v(o,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var h=o.length-1;h>=0;h--)(r=o[h])&&(s=(n<3?r(s):n>3?r(t,e,s):r(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}function g(o,t,e,i){function n(s){return s instanceof e?s:new e(function(r){r(s)})}return new(e||(e=Promise))(function(s,r){function h(d){try{l(i.next(d))}catch(c){r(c)}}function a(d){try{l(i.throw(d))}catch(c){r(c)}}function l(d){d.done?s(d.value):n(d.value).then(h,a)}l((i=i.apply(o,t||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=globalThis,Nd=Bo.ShadowRoot&&(Bo.ShadyCSS===void 0||Bo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Dd=Symbol(),vh=new WeakMap;let f0=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Dd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Nd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=vh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&vh.set(e,t))}return t}toString(){return this.cssText}};const F$=o=>new f0(typeof o=="string"?o:o+"",void 0,Dd),mt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new f0(e,o,Dd)},L$=(o,t)=>{if(Nd)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=Bo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)}},mh=Nd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return F$(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:B$,defineProperty:z$,getOwnPropertyDescriptor:V$,getOwnPropertyNames:j$,getOwnPropertySymbols:q$,getPrototypeOf:W$}=Object,ur=globalThis,$h=ur.trustedTypes,G$=$h?$h.emptyScript:"",K$=ur.reactiveElementPolyfillSupport,Bn=(o,t)=>o,as={toAttribute(o,t){switch(t){case Boolean:o=o?G$:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Od=(o,t)=>!B$(o,t),gh={attribute:!0,type:String,converter:as,reflect:!1,useDefault:!1,hasChanged:Od};Symbol.metadata??=Symbol("metadata"),ur.litPropertyMetadata??=new WeakMap;let si=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gh){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&z$(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:s}=V$(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:n,set(r){const h=n?.call(this);s?.call(this,r),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gh}static _$Ei(){if(this.hasOwnProperty(Bn("elementProperties")))return;const t=W$(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Bn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Bn("properties"))){const e=this.properties,i=[...j$(e),...q$(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(mh(n))}else t!==void 0&&e.push(mh(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return L$(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const s=(i.converter?.toAttribute!==void 0?i.converter:as).toAttribute(e,i.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=i.getPropertyOptions(n),r=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:as;this._$Em=n;const h=r.fromAttribute(e,s.type);this[n]=h??this._$Ej?.get(n)??h,this._$Em=null}}requestUpdate(t,e,i,n=!1,s){if(t!==void 0){const r=this.constructor;if(n===!1&&(s=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??Od)(s,e)||i.useDefault&&i.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:s},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),s!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[n,s]of i){const{wrapped:r}=s,h=this[n];r!==!0||this._$AL.has(n)||h===void 0||this.C(n,void 0,s,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};si.elementStyles=[],si.shadowRootOptions={mode:"open"},si[Bn("elementProperties")]=new Map,si[Bn("finalized")]=new Map,K$?.({ReactiveElement:si}),(ur.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rd=globalThis,yh=o=>o,ls=Rd.trustedTypes,fh=ls?ls.createPolicy("lit-html",{createHTML:o=>o}):void 0,_0="$lit$",wt=`lit$${Math.random().toFixed(9).slice(2)}$`,A0="?"+wt,Z$=`<${A0}>`,Oe=document,Vn=()=>Oe.createComment(""),jn=o=>o===null||typeof o!="object"&&typeof o!="function",Fd=Array.isArray,Y$=o=>Fd(o)||typeof o?.[Symbol.iterator]=="function",Rr=`[ 	
\f\r]`,nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_h=/-->/g,Ah=/>/g,Kt=RegExp(`>|${Rr}(?:([^\\s"'>=/]+)(${Rr}*=${Rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bh=/'/g,Sh=/"/g,b0=/^(?:script|style|textarea|title)$/i,J$=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),S=J$(1),ai=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),Eh=new WeakMap,$e=Oe.createTreeWalker(Oe,129);function S0(o,t){if(!Fd(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return fh!==void 0?fh.createHTML(t):t}const X$=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":t===3?"<math>":"",r=nn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===nn?d[1]==="!--"?r=_h:d[1]!==void 0?r=Ah:d[2]!==void 0?(b0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Kt):d[3]!==void 0&&(r=Kt):r===Kt?d[0]===">"?(r=n??nn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Kt:d[3]==='"'?Sh:bh):r===Sh||r===bh?r=Kt:r===_h||r===Ah?r=nn:(r=Kt,n=void 0);const p=r===Kt&&o[h+1].startsWith("/>")?" ":"";s+=r===nn?a+Z$:c>=0?(i.push(l),a.slice(0,c)+_0+a.slice(c)+wt+p):a+wt+(c===-2?h:p)}return[S0(o,s+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let ul=class E0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=X$(t,e);if(this.el=E0.createElement(l,i),$e.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(n=$e.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes())for(const c of n.getAttributeNames())if(c.endsWith(_0)){const u=d[r++],p=n.getAttribute(c).split(wt),f=/([.?@])?(.*)/.exec(u);a.push({type:1,index:s,name:f[2],strings:p,ctor:f[1]==="."?tg:f[1]==="?"?eg:f[1]==="@"?ig:pr}),n.removeAttribute(c)}else c.startsWith(wt)&&(a.push({type:6,index:s}),n.removeAttribute(c));if(b0.test(n.tagName)){const c=n.textContent.split(wt),u=c.length-1;if(u>0){n.textContent=ls?ls.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Vn()),$e.nextNode(),a.push({type:2,index:++s});n.append(c[u],Vn())}}}else if(n.nodeType===8)if(n.data===A0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(wt,c+1))!==-1;)a.push({type:7,index:s}),c+=wt.length-1}s++}}static createElement(t,e){const i=Oe.createElement("template");return i.innerHTML=t,i}};function li(o,t,e=o,i){if(t===ai)return t;let n=i!==void 0?e._$Co?.[i]:e._$Cl;const s=jn(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(o),n._$AT(o,e,i)),i!==void 0?(e._$Co??=[])[i]=n:e._$Cl=n),n!==void 0&&(t=li(o,n._$AS(o,t.values),n,i)),t}let Q$=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??Oe).importNode(e,!0);$e.currentNode=n;let s=$e.nextNode(),r=0,h=0,a=i[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new Ld(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new ng(s,this,t)),this._$AV.push(l),a=i[++h]}r!==a?.index&&(s=$e.nextNode(),r++)}return $e.currentNode=Oe,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ld=class C0{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=li(this,t,e),jn(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==ai&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Y$(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&jn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Oe.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ul.createElement(S0(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const s=new Q$(n,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Eh.get(t.strings);return e===void 0&&Eh.set(t.strings,e=new ul(t)),e}k(t){Fd(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new C0(this.O(Vn()),this.O(Vn()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=yh(t).nextSibling;yh(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},pr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,s){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=li(this,t,e,0),r=!jn(t)||t!==this._$AH&&t!==ai,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=li(this,h[i+a],e,a),l===ai&&(l=this._$AH[a]),r||=!jn(l)||l!==this._$AH[a],l===E?t=E:t!==E&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},tg=class extends pr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}},eg=class extends pr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}},ig=class extends pr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){if((t=li(this,t,e,0)??E)===ai)return;const i=this._$AH,n=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==E&&(i===E||n);n&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ng=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){li(this,t)}};const og=Rd.litHtmlPolyfillSupport;og?.(ul,Ld),(Rd.litHtmlVersions??=[]).push("3.3.3");const sg=(o,t,e)=>{const i=e?.renderBefore??t;let n=i._$litPart$;if(n===void 0){const s=e?.renderBefore??null;i._$litPart$=n=new Ld(t.insertBefore(Vn(),s),s,void 0,e??{})}return n._$AI(o),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bd=globalThis;let tt=class extends si{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=sg(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ai}};tt._$litElement$=!0,tt.finalized=!0,Bd.litElementHydrateSupport?.({LitElement:tt});const rg=Bd.litElementPolyfillSupport;rg?.({LitElement:tt});(Bd.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ag={attribute:!0,type:String,converter:as,reflect:!1,hasChanged:Od},lg=(o=ag,t,e)=>{const{kind:i,metadata:n}=e;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),i==="setter"&&((o=Object.create(o)).wrapped=!0),s.set(e.name,o),i==="accessor"){const{name:r}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(r,a,o,!0,h)},init(h){return h!==void 0&&this.C(r,void 0,o,h),h}}}if(i==="setter"){const{name:r}=e;return function(h){const a=this[r];t.call(this,h),this.requestUpdate(r,a,o,!0,h)}}throw Error("Unsupported decorator location: "+i)};function _(o){return(t,e)=>typeof e=="object"?lg(o,t,e):((i,n,s)=>{const r=n.hasOwnProperty(s);return n.constructor.createProperty(s,i),r?Object.getOwnPropertyDescriptor(n,s):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w0(o){return _({...o,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dg=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(o,t){return(e,i,n)=>{const s=r=>r.renderRoot?.querySelector(o)??null;return dg(e,i,{get(){return s(this)}})}}const hg="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let di=class extends tt{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return S`
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
          <a class="link" href=${hg}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};di.styles=mt`
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
  `;v([_({type:String})],di.prototype,"patronName",void 0);v([_({type:String})],di.prototype,"baseHost",void 0);v([_({type:String})],di.prototype,"defaultMonthlyDonationAmount",void 0);di=v([at("ia-mgc-welcome")],di);class Uo{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class No{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class cg{constructor(t){this.customer=t.customer,this.billing=t.billing}}var b;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(b||(b={}));class N{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return N.calculateFeeAmount(this.amount)}get total(){return N.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.0219+.29;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var C;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(C||(C={}));class P0{constructor(t){this.logged_in_user=t?.logged_in_user,this.referrer=t?.referrer,this.fee_amount_covered=t?.fee_amount_covered,this.origin=t?.origin}}class ug{constructor(t){this.customFields=new P0,this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.recaptchaToken=t.recaptchaToken,this.customerId=t.customerId,this.deviceData=t.deviceData,this.upsellOnetimeTransactionId=t.upsellOnetimeTransactionId,this.bin=t.bin,this.binName=t.binName,this.amount=t.amount,this.donationType=t.donationType,this.customer=t.customer,this.billing=t.billing,t.customFields&&(this.customFields=t.customFields)}}class pg{constructor(t){this.id=t.id}}class vg{constructor(t){this.paymentProvider=t.paymentProvider,this.paymentMethodNonce=t.paymentMethodNonce,this.amount=t.amount,this.donationType=t.donationType,this.transaction_id=t.transaction_id,this.customer_id=t.customer_id,this.customer=new No(t.customer),this.billing=new Uo(t.billing),t.subscription&&(this.subscription=new pg(t.subscription))}}class mg{constructor(t){this.code=t.code,this.message=t.message}}class $g{constructor(t){this.message=t.message;const{errors:e=[]}=t;this.errors=e.map(i=>new mg(i))}}class gg{constructor(t){this.success=t.success,this.success?this.value=new vg(t.value):this.value=new $g(t.value)}}const vr=[5,10,25,50,100,500,1e3],M0=new N({donationType:C.OneTime,amount:10,coverFees:!1});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zo=window,zd=zo.ShadowRoot&&(zo.ShadyCSS===void 0||zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x0=Symbol(),Ch=new WeakMap;let yg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==x0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(zd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ch.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ch.set(e,t))}return t}toString(){return this.cssText}};const fg=o=>new yg(typeof o=="string"?o:o+"",void 0,x0),_g=(o,t)=>{zd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=zo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},wh=zd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return fg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fr;const ds=window,Ph=ds.trustedTypes,Ag=Ph?Ph.emptyScript:"",Mh=ds.reactiveElementPolyfillSupport,pl={toAttribute(o,t){switch(t){case Boolean:o=o?Ag:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},T0=(o,t)=>t!==o&&(t==t||o==o),Lr={attribute:!0,type:String,converter:pl,reflect:!1,hasChanged:T0},vl="finalized";let on=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Lr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Lr}static finalize(){if(this.hasOwnProperty(vl))return!1;this[vl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(wh(n))}else t!==void 0&&e.push(wh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _g(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Lr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:pl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:pl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||T0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};on[vl]=!0,on.elementProperties=new Map,on.elementStyles=[],on.shadowRootOptions={mode:"open"},Mh?.({ReactiveElement:on}),((Fr=ds.reactiveElementVersions)!==null&&Fr!==void 0?Fr:ds.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Br;const hs=window,hi=hs.trustedTypes,xh=hi?hi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ml="$lit$",Pt=`lit$${(Math.random()+"").slice(9)}$`,k0="?"+Pt,bg=`<${k0}>`,Re=document,cs=()=>Re.createComment(""),qn=o=>o===null||typeof o!="object"&&typeof o!="function",I0=Array.isArray,Sg=o=>I0(o)||typeof o?.[Symbol.iterator]=="function",zr=`[ 	
\f\r]`,sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Th=/-->/g,kh=/>/g,Zt=RegExp(`>|${zr}(?:([^\\s"'>=/]+)(${zr}*=${zr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ih=/'/g,Hh=/"/g,H0=/^(?:script|style|textarea|title)$/i,Wn=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Uh=new WeakMap,ge=Re.createTreeWalker(Re,129,null,!1);function U0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xh!==void 0?xh.createHTML(t):t}const Eg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=sn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===sn?d[1]==="!--"?r=Th:d[1]!==void 0?r=kh:d[2]!==void 0?(H0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Zt):d[3]!==void 0&&(r=Zt):r===Zt?d[0]===">"?(r=n??sn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Zt:d[3]==='"'?Hh:Ih):r===Hh||r===Ih?r=Zt:r===Th||r===kh?r=sn:(r=Zt,n=void 0);const p=r===Zt&&o[h+1].startsWith("/>")?" ":"";s+=r===sn?a+bg:c>=0?(i.push(l),a.slice(0,c)+ml+a.slice(c)+Pt+p):a+Pt+(c===-2?(i.push(void 0),h):p)}return[U0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let $l=class N0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Eg(t,e);if(this.el=N0.createElement(l,i),ge.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=ge.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ml)||u.startsWith(Pt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+ml).split(Pt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?wg:m[1]==="?"?Mg:m[1]==="@"?xg:mr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(H0.test(n.tagName)){const c=n.textContent.split(Pt),u=c.length-1;if(u>0){n.textContent=hi?hi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],cs()),ge.nextNode(),a.push({type:2,index:++s});n.append(c[u],cs())}}}else if(n.nodeType===8)if(n.data===k0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Pt,c+1))!==-1;)a.push({type:7,index:s}),c+=Pt.length-1}s++}}static createElement(t,e){const i=Re.createElement("template");return i.innerHTML=t,i}};function ci(o,t,e=o,i){var n,s,r,h;if(t===Wn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=qn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ci(o,a._$AS(o,t.values),a,i)),t}let Cg=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Re).importNode(i,!0);ge.currentNode=s;let r=ge.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new D0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Tg(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=ge.nextNode(),h++)}return ge.currentNode=Re,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},D0=class O0{constructor(t,e,i,n){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ci(this,t,e),qn(t)?t===R||t==null||t===""?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==Wn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Sg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&qn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Re.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=$l.createElement(U0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Cg(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Uh.get(t.strings);return e===void 0&&Uh.set(t.strings,e=new $l(t)),e}T(t){I0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new O0(this.k(cs()),this.k(cs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},mr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ci(this,t,e,0),r=!qn(t)||t!==this._$AH&&t!==Wn,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ci(this,h[i+a],e,a),l===Wn&&(l=this._$AH[a]),r||(r=!qn(l)||l!==this._$AH[a]),l===R?t=R:t!==R&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},wg=class extends mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}};const Pg=hi?hi.emptyScript:"";let Mg=class extends mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,Pg):this.element.removeAttribute(this.name)}},xg=class extends mr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ci(this,t,e,0))!==null&&i!==void 0?i:R)===Wn)return;const n=this._$AH,s=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Tg=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ci(this,t)}};const Nh=hs.litHtmlPolyfillSupport;Nh?.($l,D0),((Br=hs.litHtmlVersions)!==null&&Br!==void 0?Br:hs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vo=window,Vd=Vo.ShadowRoot&&(Vo.ShadyCSS===void 0||Vo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jd=Symbol(),Dh=new WeakMap;let R0=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==jd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Vd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Dh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dh.set(e,t))}return t}toString(){return this.cssText}};const kg=o=>new R0(typeof o=="string"?o:o+"",void 0,jd),$=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new R0(e,o,jd)},Ig=(o,t)=>{Vd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Vo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Oh=Vd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return kg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vr;const us=window,Rh=us.trustedTypes,Hg=Rh?Rh.emptyScript:"",Fh=us.reactiveElementPolyfillSupport,gl={toAttribute(o,t){switch(t){case Boolean:o=o?Hg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},F0=(o,t)=>t!==o&&(t==t||o==o),jr={attribute:!0,type:String,converter:gl,reflect:!1,hasChanged:F0},yl="finalized";let ri=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=jr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||jr}static finalize(){if(this.hasOwnProperty(yl))return!1;this[yl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Oh(n))}else t!==void 0&&e.push(Oh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ig(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=jr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:gl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:gl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||F0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ri[yl]=!0,ri.elementProperties=new Map,ri.elementStyles=[],ri.shadowRootOptions={mode:"open"},Fh?.({ReactiveElement:ri}),((Vr=us.reactiveElementVersions)!==null&&Vr!==void 0?Vr:us.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qr;const ps=window,ui=ps.trustedTypes,Lh=ui?ui.createPolicy("lit-html",{createHTML:o=>o}):void 0,fl="$lit$",Mt=`lit$${(Math.random()+"").slice(9)}$`,L0="?"+Mt,Ug=`<${L0}>`,Fe=document,Gn=()=>Fe.createComment(""),Kn=o=>o===null||typeof o!="object"&&typeof o!="function",B0=Array.isArray,Ng=o=>B0(o)||typeof o?.[Symbol.iterator]=="function",Wr=`[ 	
\f\r]`,rn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bh=/-->/g,zh=/>/g,Yt=RegExp(`>|${Wr}(?:([^\\s"'>=/]+)(${Wr}*=${Wr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vh=/'/g,jh=/"/g,z0=/^(?:script|style|textarea|title)$/i,Dg=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),y=Dg(1),pi=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),qh=new WeakMap,ye=Fe.createTreeWalker(Fe,129,null,!1);function V0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lh!==void 0?Lh.createHTML(t):t}const Og=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=rn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===rn?d[1]==="!--"?r=Bh:d[1]!==void 0?r=zh:d[2]!==void 0?(z0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Yt):d[3]!==void 0&&(r=Yt):r===Yt?d[0]===">"?(r=n??rn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Yt:d[3]==='"'?jh:Vh):r===jh||r===Vh?r=Yt:r===Bh||r===zh?r=rn:(r=Yt,n=void 0);const p=r===Yt&&o[h+1].startsWith("/>")?" ":"";s+=r===rn?a+Ug:c>=0?(i.push(l),a.slice(0,c)+fl+a.slice(c)+Mt+p):a+Mt+(c===-2?(i.push(void 0),h):p)}return[V0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let _l=class j0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Og(t,e);if(this.el=j0.createElement(l,i),ye.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=ye.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(fl)||u.startsWith(Mt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+fl).split(Mt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Fg:m[1]==="?"?Bg:m[1]==="@"?zg:$r})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(z0.test(n.tagName)){const c=n.textContent.split(Mt),u=c.length-1;if(u>0){n.textContent=ui?ui.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Gn()),ye.nextNode(),a.push({type:2,index:++s});n.append(c[u],Gn())}}}else if(n.nodeType===8)if(n.data===L0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Mt,c+1))!==-1;)a.push({type:7,index:s}),c+=Mt.length-1}s++}}static createElement(t,e){const i=Fe.createElement("template");return i.innerHTML=t,i}};function vi(o,t,e=o,i){var n,s,r,h;if(t===pi)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Kn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=vi(o,a._$AS(o,t.values),a,i)),t}let Rg=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Fe).importNode(i,!0);ye.currentNode=s;let r=ye.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new qd(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Vg(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=ye.nextNode(),h++)}return ye.currentNode=Fe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},qd=class q0{constructor(t,e,i,n){var s;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=vi(this,t,e),Kn(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==pi&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ng(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&Kn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Fe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_l.createElement(V0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Rg(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=qh.get(t.strings);return e===void 0&&qh.set(t.strings,e=new _l(t)),e}T(t){B0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new q0(this.k(Gn()),this.k(Gn()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},$r=class{constructor(t,e,i,n,s){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=vi(this,t,e,0),r=!Kn(t)||t!==this._$AH&&t!==pi,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=vi(this,h[i+a],e,a),l===pi&&(l=this._$AH[a]),r||(r=!Kn(l)||l!==this._$AH[a]),l===T?t=T:t!==T&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Fg=class extends $r{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}};const Lg=ui?ui.emptyScript:"";let Bg=class extends $r{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Lg):this.element.removeAttribute(this.name)}},zg=class extends $r{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=vi(this,t,e,0))!==null&&i!==void 0?i:T)===pi)return;const n=this._$AH,s=t===T&&n!==T||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==T&&(n===T||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Vg=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){vi(this,t)}};const Wh=ps.litHtmlPolyfillSupport;Wh?.(_l,qd),((qr=ps.litHtmlVersions)!==null&&qr!==void 0?qr:ps.litHtmlVersions=[]).push("2.8.0");const jg=(o,t,e)=>{var i,n;const s=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=s._$litPart$;if(r===void 0){const h=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new qd(t.insertBefore(Gn(),h),h,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gr,Kr;let U=class extends ri{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jg(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return pi}};U.finalized=!0,U._$litElement$=!0,(Gr=globalThis.litElementHydrateSupport)===null||Gr===void 0||Gr.call(globalThis,{LitElement:U});const Gh=globalThis.litElementPolyfillSupport;Gh?.({LitElement:U});((Kr=globalThis.litElementVersions)!==null&&Kr!==void 0?Kr:globalThis.litElementVersions=[]).push("3.3.3");const qg=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Wg extends U{static get styles(){return $`
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
    `}render(){return qg}}customElements.define("ia-icon-donate",Wg);let mi=class extends tt{constructor(){super(...arguments),this.isDisabled=!1}render(){return S`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};mi.styles=mt`
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
  `;v([_({type:Boolean,reflect:!0})],mi.prototype,"isDisabled",void 0);v([_({type:Object})],mi.prototype,"clickHandler",void 0);v([_t("button")],mi.prototype,"button",void 0);mi=v([at("ia-mgc-button")],mi);let Zn=class extends tt{constructor(){super(...arguments),this.plans=[],this.canEdit=!0}render(){return S`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,n,s,r,h,a,l,d,c,u,p,f,m,O,lt;let dt=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";dt==="creditCard"&&(dt="Credit card");const en=(s=(n=t.payment)===null||n===void 0?void 0:n.cardType)!==null&&s!==void 0?s:"Card type not found",Do=!((r=t.payment)===null||r===void 0)&&r.last4?`...${(h=t.payment)===null||h===void 0?void 0:h.last4}`:"CC number not found";return S`
              <li class=${`${t.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${t.currency} ${t.amountFormatted}/month</p>
                    ${t.isTest?S`<p class="is-test">(Test payment)</p>`:E}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${dt}</p>
                    ${!((a=t.payment)===null||a===void 0)&&a.cardType&&(!((l=t.payment)===null||l===void 0)&&l.last4)?S`<p>${en} ${Do}</p>`:E}
                    ${((d=t.payment)===null||d===void 0?void 0:d.paymentMethodType)===b.PayPal?S`<p>
                          Paypal email:
                          <a href=${`mailto:${(c=t.payment)===null||c===void 0?void 0:c.paypalEmail}`}
                            >${(u=t.payment)===null||u===void 0?void 0:u.paypalEmail}</a
                          >
                        </p>`:E}
                    ${((p=t.payment)===null||p===void 0?void 0:p.paymentMethodType)===b.Venmo?S`<p>
                          Venmo username:
                          <a href=${`mailto:${(f=t.payment)===null||f===void 0?void 0:f.venmoUsername}`}
                            >${(m=t.payment)===null||m===void 0?void 0:m.venmoUsername}</a
                          >
                        </p>`:E}
                    ${!((O=t.payment)===null||O===void 0)&&O.expirationMonth&&(!((lt=t.payment)===null||lt===void 0)&&lt.expirationYear)?S`<p>
                          Expires:
                          ${t.payment.expirationMonth}/${t.payment.expirationYear}
                        </p>`:E}
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
    >`}};Zn.styles=mt`
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
  `;v([_({type:Array})],Zn.prototype,"plans",void 0);v([_({type:Boolean,reflect:!0})],Zn.prototype,"canEdit",void 0);Zn=v([at("ia-mgc-plans")],Zn);let vs=class extends tt{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?S` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:E}render(){return S`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};vs.styles=mt`
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
  `;v([_({type:String})],vs.prototype,"titleStyle",void 0);vs=v([at("ia-mgc-title")],vs);let Yn=class extends tt{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const n={...i},{id:s}=t;n[s]=t,this.receiptDispatcher={...n},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=CSS.escape(s),h=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${r} ia-mgc-button`);h.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return S`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],n=i?.emailStatus==="pending",s=!i||!i.emailStatus?E:S`<ia-mgc-update-status
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
                          .clickHandler=${async(r,h)=>{if(!n&&(h.isDisabled=!0,await h.updateComplete),!n&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
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
    `}};Yn.styles=mt`
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
  `;v([_({type:Array})],Yn.prototype,"receipts",void 0);v([_({type:Object})],Yn.prototype,"receiptDispatcher",void 0);Yn=v([at("ia-mgc-receipts")],Yn);var $t;(function(o){o.Development="dev",o.Production="prod"})($t||($t={}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jo=window,Wd=jo.ShadowRoot&&(jo.ShadyCSS===void 0||jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W0=Symbol(),Kh=new WeakMap;let Gg=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==W0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Wd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Kh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Kh.set(e,t))}return t}toString(){return this.cssText}};const Kg=o=>new Gg(typeof o=="string"?o:o+"",void 0,W0),Zg=(o,t)=>{Wd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=jo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Zh=Wd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Kg(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zr;const ms=window,Yh=ms.trustedTypes,Yg=Yh?Yh.emptyScript:"",Jh=ms.reactiveElementPolyfillSupport,Al={toAttribute(o,t){switch(t){case Boolean:o=o?Yg:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},G0=(o,t)=>t!==o&&(t==t||o==o),Yr={attribute:!0,type:String,converter:Al,reflect:!1,hasChanged:G0},bl="finalized";let an=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Yr){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Yr}static finalize(){if(this.hasOwnProperty(bl))return!1;this[bl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Zh(n))}else t!==void 0&&e.push(Zh(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Zg(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Yr){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Al).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Al;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||G0)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};an[bl]=!0,an.elementProperties=new Map,an.elementStyles=[],an.shadowRootOptions={mode:"open"},Jh?.({ReactiveElement:an}),((Zr=ms.reactiveElementVersions)!==null&&Zr!==void 0?Zr:ms.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Jr;const $s=window,$i=$s.trustedTypes,Xh=$i?$i.createPolicy("lit-html",{createHTML:o=>o}):void 0,Sl="$lit$",xt=`lit$${(Math.random()+"").slice(9)}$`,K0="?"+xt,Jg=`<${K0}>`,Le=document,gs=()=>Le.createComment(""),Jn=o=>o===null||typeof o!="object"&&typeof o!="function",Z0=Array.isArray,Xg=o=>Z0(o)||typeof o?.[Symbol.iterator]=="function",Xr=`[ 	
\f\r]`,ln=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qh=/-->/g,tc=/>/g,Jt=RegExp(`>|${Xr}(?:([^\\s"'>=/]+)(${Xr}*=${Xr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ec=/'/g,ic=/"/g,Y0=/^(?:script|style|textarea|title)$/i,Xn=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),nc=new WeakMap,fe=Le.createTreeWalker(Le,129,null,!1);function J0(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xh!==void 0?Xh.createHTML(t):t}const Qg=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=ln;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===ln?d[1]==="!--"?r=Qh:d[1]!==void 0?r=tc:d[2]!==void 0?(Y0.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Jt):d[3]!==void 0&&(r=Jt):r===Jt?d[0]===">"?(r=n??ln,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Jt:d[3]==='"'?ic:ec):r===ic||r===ec?r=Jt:r===Qh||r===tc?r=ln:(r=Jt,n=void 0);const p=r===Jt&&o[h+1].startsWith("/>")?" ":"";s+=r===ln?a+Jg:c>=0?(i.push(l),a.slice(0,c)+Sl+a.slice(c)+xt+p):a+xt+(c===-2?(i.push(void 0),h):p)}return[J0(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let El=class X0{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Qg(t,e);if(this.el=X0.createElement(l,i),fe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=fe.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Sl)||u.startsWith(xt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Sl).split(xt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?ey:m[1]==="?"?ny:m[1]==="@"?oy:gr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Y0.test(n.tagName)){const c=n.textContent.split(xt),u=c.length-1;if(u>0){n.textContent=$i?$i.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],gs()),fe.nextNode(),a.push({type:2,index:++s});n.append(c[u],gs())}}}else if(n.nodeType===8)if(n.data===K0)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(xt,c+1))!==-1;)a.push({type:7,index:s}),c+=xt.length-1}s++}}static createElement(t,e){const i=Le.createElement("template");return i.innerHTML=t,i}};function gi(o,t,e=o,i){var n,s,r,h;if(t===Xn)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Jn(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=gi(o,a._$AS(o,t.values),a,i)),t}let ty=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Le).importNode(i,!0);fe.currentNode=s;let r=fe.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Q0(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new sy(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=fe.nextNode(),h++)}return fe.currentNode=Le,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Q0=class tv{constructor(t,e,i,n){var s;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gi(this,t,e),Jn(t)?t===D||t==null||t===""?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==Xn&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Xg(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&Jn(this._$AH)?this._$AA.nextSibling.data=t:this.$(Le.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=El.createElement(J0(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new ty(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=nc.get(t.strings);return e===void 0&&nc.set(t.strings,e=new El(t)),e}T(t){Z0(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new tv(this.k(gs()),this.k(gs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},gr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=gi(this,t,e,0),r=!Jn(t)||t!==this._$AH&&t!==Xn,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=gi(this,h[i+a],e,a),l===Xn&&(l=this._$AH[a]),r||(r=!Jn(l)||l!==this._$AH[a]),l===D?t=D:t!==D&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ey=class extends gr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}};const iy=$i?$i.emptyScript:"";let ny=class extends gr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,iy):this.element.removeAttribute(this.name)}},oy=class extends gr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=gi(this,t,e,0))!==null&&i!==void 0?i:D)===Xn)return;const n=this._$AH,s=t===D&&n!==D||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==D&&(n===D||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},sy=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gi(this,t)}};const oc=$s.litHtmlPolyfillSupport;oc?.(El,Q0),((Jr=$s.litHtmlVersions)!==null&&Jr!==void 0?Jr:$s.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ry=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},ay=(o,t,e)=>{t.constructor.createProperty(e,o)};function A(o){return(t,e)=>e!==void 0?ay(o,t,e):ry(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ly=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(h){o(h,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(o,t){return ly({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qr;((Qr=window.HTMLSlotElement)===null||Qr===void 0?void 0:Qr.prototype.assignedElements)!=null;/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */var dy={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:py,fromCents:!1},ev=function(t){return Math.round(t)},Gd=function(t){return Math.pow(10,t)},hy=function(t,e){return ev(t/e)*e},cy=/(\d)(?=(\d{3})+\b)/g,uy=/(\d)(?=(\d\d)+\d\b)/g;function et(o,t){var e=this;if(!(e instanceof et))return new et(o,t);var i=Object.assign({},dy,t),n=Gd(i.precision),s=qo(o,i);e.intValue=s,e.value=s/n,i.increment=i.increment||1/n,i.useVedic?i.groups=uy:i.groups=cy,this.s=i,this.p=n}function qo(o,t){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=0,n=t.decimal,s=t.errorOnInvalid,r=t.precision,h=t.fromCents,a=Gd(r),l=typeof o=="number",d=o instanceof et;if(d&&h)return o.intValue;if(l||d)i=d?o.value:o;else if(typeof o=="string"){var c=new RegExp("[^-\\d"+n+"]","g"),u=new RegExp("\\"+n,"g");i=o.replace(/\((.*)\)/,"-$1").replace(c,"").replace(u,"."),i=i||0}else{if(s)throw Error("Invalid Input");i=0}return h||(i*=a,i=i.toFixed(4)),e?ev(i):i}function py(o,t){var e=t.pattern,i=t.negativePattern,n=t.symbol,s=t.separator,r=t.decimal,h=t.groups,a=(""+o).replace(/^-/,"").split("."),l=a[0],d=a[1];return(o.value>=0?e:i).replace("!",n).replace("#",l.replace(h,"$1"+s)+(d?r+d:""))}et.prototype={add:function(t){var e=this.intValue,i=this.s,n=this.p;return et((e+=qo(t,i))/(i.fromCents?1:n),i)},subtract:function(t){var e=this.intValue,i=this.s,n=this.p;return et((e-=qo(t,i))/(i.fromCents?1:n),i)},multiply:function(t){var e=this.intValue,i=this.s;return et((e*=t)/(i.fromCents?1:Gd(i.precision)),i)},divide:function(t){var e=this.intValue,i=this.s;return et(e/=qo(t,i,!1),i)},distribute:function(t){for(var e=this.intValue,i=this.p,n=this.s,s=[],r=Math[e>=0?"floor":"ceil"](e/t),h=Math.abs(e-r*t),a=n.fromCents?1:i;t!==0;t--){var l=et(r/a,n);h-- >0&&(l=l[e>=0?"add":"subtract"](1/a)),s.push(l)}return s},dollars:function(){return~~this.value},cents:function(){var t=this.intValue,e=this.p;return~~(t%e)},format:function(t){var e=this.s;return typeof t=="function"?t(this,e):e.format(this,Object.assign({},e,t))},toString:function(){var t=this.intValue,e=this.p,i=this.s;return hy(t/e,i.increment).toFixed(i.precision)},toJSON:function(){return this.value}};let vy=()=>({events:{},emit(o,...t){(this.events[o]||[]).forEach(e=>e(...t))},on(o,t){return(this.events[o]=this.events[o]||[]).push(t),()=>this.events[o]=(this.events[o]||[]).filter(e=>e!==t)}});function my(o){return new Promise(t=>setTimeout(t,o))}var gt;(function(o){o.retryNumber="retryNumber",o.owner="owner",o.dynamicImportLoaded="dynamicImportLoaded",o.hasBeenRetried="hasBeenRetried"})(gt||(gt={}));const sc="lazyLoaderService";class $y{constructor(t){var e,i,n;this.emitter=vy(),this.container=(e=t?.container)!==null&&e!==void 0?e:document.head,this.retryCount=(i=t?.retryCount)!==null&&i!==void 0?i:2,this.retryInterval=(n=t?.retryInterval)!==null&&n!==void 0?n:1}on(t,e){return this.emitter.on(t,e)}loadBundle(t){return g(this,void 0,void 0,function*(){let e,i;return t.module&&(e=this.loadScript({src:t.module,bundleType:"module"})),t.nomodule&&(i=this.loadScript({src:t.nomodule,bundleType:"nomodule"})),Promise.race([e,i])})}loadScript(t){return g(this,void 0,void 0,function*(){return this.doLoad(t)})}doLoad(t){var e;return g(this,void 0,void 0,function*(){const i=(e=t.retryNumber)!==null&&e!==void 0?e:0,n=`script[src='${t.src}'][async][${gt.owner}='${sc}'][${gt.retryNumber}='${i}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},t),{retryNumber:i})),this.container.appendChild(s)),new Promise((r,h)=>{if(s.getAttribute(gt.dynamicImportLoaded)){r();return}const a=t.scriptBeingRetried,l=s.onload||a?.onload;s.onload=c=>{l?.(c),s.setAttribute(gt.dynamicImportLoaded,"true"),r()};const d=s.onerror||a?.onerror;s.onerror=c=>g(this,void 0,void 0,function*(){const u=s.getAttribute(gt.hasBeenRetried);if(i<this.retryCount&&!u){s.setAttribute(gt.hasBeenRetried,"true"),yield my(this.retryInterval*1e3);const p=i+1;this.emitter.emit("scriptLoadRetried",t.src,p),this.doLoad(Object.assign(Object.assign({},t),{retryNumber:p,scriptBeingRetried:s}))}else u||this.emitter.emit("scriptLoadFailed",t.src,c),d?.(c),h(c)})})})}getScriptTag(t){var e;const i=t.src.replace("'",'"'),n=document.createElement("script"),s=t.retryNumber;n.setAttribute(gt.owner,sc),n.setAttribute("src",i),n.setAttribute(gt.retryNumber,s.toString()),n.async=!0;const r=(e=t.attributes)!==null&&e!==void 0?e:{};switch(Object.keys(r).forEach(h=>{n.setAttribute(h,r[h])}),t.bundleType){case"module":n.setAttribute("type",t.bundleType);break;case"nomodule":n.setAttribute(t.bundleType,"");break}return n}}class H{constructor(t){this.generator=t.generator}get(){return g(this,void 0,void 0,function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then(t=>t),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)})}generateSingletonAndCache(){return g(this,void 0,void 0,function*(){const t=yield this.generator();return this.cachedResponse=t,t})}}class iv{constructor(t,e){this.braintreeClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("client"),window.braintree.client})}),this.dataCollector=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("data-collector"),window.braintree.dataCollector})}),this.hostedFields=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("hosted-fields"),window.braintree.hostedFields})}),this.venmo=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("venmo"),window.braintree.venmo})}),this.payPal=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("paypal-checkout"),window.braintree.paypalCheckout})}),this.applePay=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("apple-pay"),window.braintree.applePay})}),this.googlePayBraintreeClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("google-payment"),window.braintree.googlePayment})}),this.googlePaymentsClient=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://pay.google.com/gp/p/js/pay.js"}),new google.payments.api.PaymentsClient({environment:this.environment===$t.Development?"TEST":"PRODUCTION"})})}),this.recaptchaLibrary=new H({generator:()=>new Promise(i=>{window.donationFormGrecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.donationFormGrecaptchaLoadedCallback},10),i(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=donationFormGrecaptchaLoadedCallback&render=explicit"})})}),this.paypalLibrary=new H({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://www.paypalobjects.com/api/checkout.js",attributes:{"data-version-4":"","log-level":"warn"}}),window.paypal})}),this.braintreeVersion="3.62.2",this.environment=$t.Development,this.lazyLoader=t,this.environment=e}loadBraintreeScript(t){return g(this,void 0,void 0,function*(){const e=this.environment===$t.Production?"min.js":"js",i=`${t}.${e}`,n=`https://js.braintreegateway.com/web/${this.braintreeVersion}/js/${i}`;yield this.lazyLoader.loadScript({src:n})})}}let Xi=()=>({emit(o,...t){for(let e=this.events[o]||[],i=0,n=e.length;i<n;i++)e[i](...t)},events:{},on(o,t){return(this.events[o]||=[]).push(t),()=>{this.events[o]=this.events[o]?.filter(e=>t!==e)}}});class gy extends Error{constructor(t){super(t),this.name="DonationFormError"}}class yy{on(t,e){return this.emitter.on(t,e)}constructor(t){var e,i;this.instance=new H({generator:()=>g(this,void 0,void 0,function*(){const n=yield this.braintreeManager.instance.get();return yield this.createHostedFields(n)})}),this.emitter=Xi(),this.braintreeManager=t.braintreeManager,this.hostedFieldClient=t.hostedFieldClient,this.hostedFieldConfig=t.hostedFieldConfig,this.maxRetryCount=(e=t.maxRetryCount)!==null&&e!==void 0?e:2,this.loadTimeout=((i=t.loadTimeout)!==null&&i!==void 0?i:6)*1e3}createHostedFields(t){return g(this,arguments,void 0,function*(e,i=0){this.hostedFieldConfig.hostedFieldContainer.resetHostedFields();try{let n;const s=new Promise((a,l)=>{n=window.setTimeout(()=>{const d=new gy("Timeout loading Hosted Fields");l(d)},this.loadTimeout)}),r=new Promise((a,l)=>g(this,void 0,void 0,function*(){try{const d=yield this.hostedFieldClient.create({client:e,styles:this.hostedFieldConfig.hostedFieldStyle,fields:this.hostedFieldConfig.hostedFieldFieldOptions});window.clearTimeout(n),a(d)}catch(d){d instanceof Error&&d.message.includes("Hosted Fields timed out")||l(d)}}));return yield Promise.race([s,r])}catch(n){if(i>=this.maxRetryCount)throw this.emitter.emit("hostedFieldsFailed",n),n;const s=i+1;return this.emitter.emit("hostedFieldsRetry",s),this.createHostedFields(e,s)}})}tokenizeHostedFields(){return g(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}markFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.markFieldErrors(t)}removeFieldErrors(t){this.hostedFieldConfig.hostedFieldContainer.removeFieldErrors(t)}showErrorMessage(t){this.hostedFieldConfig.hostedFieldContainer.showErrorMessage(t)}hideErrorMessage(){this.hostedFieldConfig.hostedFieldContainer.hideErrorMessage()}}class fy{constructor(t){this.session=t.session,this.donationInfo=t.donationInfo,this.applePayInstance=t.applePayInstance,this.braintreeManager=t.braintreeManager}onvalidatemerchant(t){return g(this,void 0,void 0,function*(){return new Promise((e,i)=>{this.applePayInstance.performValidation({validationURL:t.validationURL,displayName:"Internet Archive"},(n,s)=>{var r;n?((r=this.delegate)===null||r===void 0||r.paymentFailed(n),this.session.abort(),i(`Merchant validation error: ${n}`)):(this.session.completeMerchantValidation(s),e())})})})}oncancel(){return g(this,void 0,void 0,function*(){var t;(t=this.delegate)===null||t===void 0||t.paymentCancelled()})}onpaymentauthorized(t){return g(this,void 0,void 0,function*(){var e,i,n,s;let r;try{r=yield this.applePayInstance.tokenize({token:t.payment.token})}catch(m){(e=this.delegate)===null||e===void 0||e.paymentFailed(m),this.session.completePayment(ApplePaySession.STATUS_FAILURE);return}const h=t.payment,a=h.billingContact,l=h.shippingContact,d=a?.addressLines;let c,u;d&&(c=d[0],u=d[1]);const p=new Uo({streetAddress:c,extendedAddress:u,locality:a?.locality,region:a?.administrativeArea,postalCode:a?.postalCode,countryCodeAlpha2:a?.countryCode}),f=new No({email:l?.emailAddress,firstName:l?.givenName,lastName:l?.familyName});try{const m=yield this.braintreeManager.submitDonation({nonce:r.nonce,paymentProvider:b.ApplePay,donationInfo:this.donationInfo,billingInfo:p,customerInfo:f});m.success?((i=this.delegate)===null||i===void 0||i.paymentComplete(m),this.session.completePayment(ApplePaySession.STATUS_SUCCESS)):((n=this.delegate)===null||n===void 0||n.paymentFailed("Failure submitting data"),this.session.completePayment(ApplePaySession.STATUS_FAILURE))}catch(m){(s=this.delegate)===null||s===void 0||s.paymentFailed(m),this.session.completePayment(ApplePaySession.STATUS_FAILURE)}})}}class _y{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.applePayClient=t.applePayClient,this.applePaySessionManager=t.applePaySessionManager,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>g(this,void 0,void 0,function*(){if(!this.applePaySessionManager.canMakePayments())return;const i=yield this.braintreeManager.instance.get();return yield this.applePayClient.create({client:i})})})}isAvailable(){return g(this,void 0,void 0,function*(){try{return!!(yield this.instance.get())}catch{return!1}})}createPaymentRequest(t,e){return g(this,void 0,void 0,function*(){const i=yield this.instance.get();let n="Internet Archive Monthly";e.donationType===C.OneTime&&(n="Internet Archive");const s=i.createPaymentRequest({total:{label:n,amount:e.total},requiredBillingContactFields:["postalAddress"],requiredShippingContactFields:["name","email"]}),r=this.applePaySessionManager.createNewPaymentSession(s),h=new fy({donationInfo:e,session:r,applePayInstance:i,braintreeManager:this.braintreeManager});return r.onvalidatemerchant=h.onvalidatemerchant.bind(h),r.onpaymentauthorized=h.onpaymentauthorized.bind(h),r.oncancel=h.oncancel.bind(h),r.begin(),h})}}class Ay{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.venmoClient=t.venmoClient,this.venmoProfileId=t.venmoProfileId,this.instance=(e=t.instancePromisedSingleton)!==null&&e!==void 0?e:new H({generator:()=>this.braintreeManager.instance.get().then(i=>this.venmoClient.create({client:i,profileId:this.venmoProfileId}))})}isBrowserSupported(){return g(this,void 0,void 0,function*(){var t;if(this.isMobileFirefox())return!1;const e=yield this.instance.get();return(t=e?.isBrowserSupported())!==null&&t!==void 0?t:!1})}startPayment(){return g(this,void 0,void 0,function*(){const t=yield this.instance.get();return t?.tokenize()})}isMobileFirefox(){const t=navigator.userAgent.indexOf("FxiOS")!==-1,e=navigator.userAgent.indexOf("Firefox")!==-1,i=navigator.userAgent.indexOf("Mobile")!==-1;return(e||t)&&i}}class by{constructor(t){this.donationInfo=t.donationInfo,this.paypalInstance=t.paypalInstance}payment(){return g(this,void 0,void 0,function*(){var t;const i=this.donationInfo.donationType===C.OneTime?"checkout":"vault",n={flow:i,intent:"capture"};return n.enableShippingAddress=!0,i==="checkout"?(n.amount=this.donationInfo.total,n.currency="USD"):n.billingAgreementDescription=`Subscribe to donate ${et(this.donationInfo.total,{symbol:"$"}).format()} monthly`,(t=this.delegate)===null||t===void 0||t.payPalPaymentStarted(this,n),this.paypalInstance.createPayment(n)})}onAuthorize(t){return g(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentAuthorized(this,i),i})}onConfirm(t){return g(this,void 0,void 0,function*(){var e;const i=yield this.paypalInstance.tokenizePayment(t);return(e=this.delegate)===null||e===void 0||e.payPalPaymentConfirmed(this,i),i})}onCancel(t){var e;(e=this.delegate)===null||e===void 0||e.payPalPaymentCancelled(this,t)}onError(t){var e;console.error("PayPal error",t),(e=this.delegate)===null||e===void 0||e.payPalPaymentError(this,t)}}class Sy{constructor(t){this.braintreeManager=t.braintreeManager,this.paypalClient=t.paypalClient,this.paypalButtonGenerator=t.paypalButton,this.hostingEnvironment=t.hostingEnvironment,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.paypalClient.create({client:e}))})}renderPayPalButton(t){return g(this,void 0,void 0,function*(){const e=this.hostingEnvironment===$t.Development?"sandbox":"production",i=yield this.instance.get();if(!i)return;const n=new by({donationInfo:t.donationInfo,paypalInstance:i});return this.paypalButtonGenerator.render({env:e,style:t.style,payment:n.payment.bind(n),onAuthorize:n.onAuthorize.bind(n),onCancel:n.onCancel.bind(n),onError:n.onError.bind(n),funding:{disallowed:[paypal.FUNDING.VENMO]}},t.selector),n})}}class Qn{canMakePayments(){return"ApplePaySession"in window&&ApplePaySession.supportsVersion(Qn.VERSION)&&ApplePaySession.canMakePayments()}createNewPaymentSession(t){return new ApplePaySession(Qn.VERSION,t)}}Qn.VERSION=3;class Ey{isBrowserSupported(){return g(this,void 0,void 0,function*(){return this.paymentsClient.isReadyToPay({apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}}],existingPaymentMethodRequired:!1}).then(t=>t.result)})}constructor(t){this.braintreeManager=t.braintreeManager,this.googlePayMerchantId=t.googlePayMerchantId,this.googlePayBraintreeClient=t.googlePayBraintreeClient,this.paymentsClient=t.googlePaymentsClient,this.instance=new H({generator:()=>this.braintreeManager.instance.get().then(e=>this.googlePayBraintreeClient.create({client:e,googlePayVersion:2,googleMerchantId:this.googlePayMerchantId}))})}}class Cy{on(t,e){return this.emitter.on(t,e)}constructor(t){this.creditCardHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.hostedFields.get(),i=new yy({braintreeManager:this.braintreeManager,hostedFieldClient:e,hostedFieldConfig:this.hostedFieldConfig});return i.on("hostedFieldsRetry",n=>{this.emitter.emit("hostedFieldsRetry",n)}),i.on("hostedFieldsFailed",n=>{this.emitter.emit("hostedFieldsFailed",n)}),i})}),this.applePayHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.applePay.get(),i=new Qn;return new _y({braintreeManager:this.braintreeManager,applePayClient:e,applePaySessionManager:i})})}),this.venmoHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.venmo.get();if(this.venmoProfileId)return new Ay({braintreeManager:this.braintreeManager,venmoClient:e,venmoProfileId:this.venmoProfileId})})}),this.paypalHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=this.paymentClients.paypalLibrary.get(),i=this.paymentClients.payPal.get(),n=yield Promise.all([i,e]);return new Sy({braintreeManager:this.braintreeManager,paypalClient:n[0],paypalButton:n[1].Button,hostingEnvironment:this.hostingEnvironment})})}),this.googlePayHandler=new H({generator:()=>g(this,void 0,void 0,function*(){const e=this.paymentClients.googlePaymentsClient.get(),i=this.paymentClients.googlePayBraintreeClient.get(),n=yield Promise.all([i,e]);return new Ey({braintreeManager:this.braintreeManager,googlePayMerchantId:this.googlePayMerchantId,googlePayBraintreeClient:n[0],googlePaymentsClient:n[1]})})}),this.hostingEnvironment=$t.Development,this.emitter=Xi(),this.braintreeManager=t.braintreeManager,this.venmoProfileId=t.venmoProfileId,this.googlePayMerchantId=t.googlePayMerchantId,this.paymentClients=t.paymentClients,this.hostingEnvironment=t.hostingEnvironment,this.hostedFieldConfig=t.hostedFieldConfig}}class nv{on(t,e){return this.emitter.on(t,e)}startup(){return g(this,void 0,void 0,function*(){return this.collectDeviceData()})}submitDonation(t){return g(this,void 0,void 0,function*(){const e=new P0;e.fee_amount_covered=t.donationInfo.feeAmountCovered,e.logged_in_user=this.loggedInUser,e.referrer=this.referrer,e.origin=this.origin;const i=N.calculateTotal(t.donationInfo.amount,t.donationInfo.coverFees),n=new ug({deviceData:this.deviceData,paymentProvider:t.paymentProvider,paymentMethodNonce:t.nonce,amount:i,donationType:t.donationInfo.donationType,customer:t.customerInfo,billing:t.billingInfo,customFields:e,upsellOnetimeTransactionId:t.upsellOnetimeTransactionId,customerId:t.customerId,recaptchaToken:t.recaptchaToken,bin:t.bin,binName:t.binName}),s=yield this.endpointManager.submitData(n);return new gg(s)})}submitUpsellDonation(t){return g(this,void 0,void 0,function*(){const e=t.oneTimeDonationResponse,i=new N({amount:t.amount,donationType:C.Upsell,coverFees:!1});return this.submitDonation({nonce:e.paymentMethodNonce,paymentProvider:e.paymentProvider,customerId:e.customer_id,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing,upsellOnetimeTransactionId:e.transaction_id})})}donationSuccessful(t){this.endpointManager.donationSuccessful(t)}collectDeviceData(){return g(this,void 0,void 0,function*(){if(this.deviceDataCollectionStarted)return;this.deviceDataCollectionStarted=!0;const t=yield this.instance.get();if(t)return this.paymentClients.dataCollector.get().then(e=>e?.create({client:t,kount:!1,paypal:!0})).then(e=>{this.deviceData=e?.deviceData})})}constructor(t){this.emitter=Xi(),this.instance=new H({generator:()=>g(this,void 0,void 0,function*(){const e=yield this.paymentClients.braintreeClient.get();return e?.create({authorization:this.authorizationToken})})}),this.deviceDataCollectionStarted=!1,this.hostingEnvironment=$t.Development,this.authorizationToken=t.authorizationToken,this.endpointManager=t.endpointManager,this.hostingEnvironment=t.hostingEnvironment,this.paymentClients=t.paymentClients,this.referrer=t.referrer,this.loggedInUser=t.loggedInUser,this.origin=t.origin,this.paymentProviders=new Cy({braintreeManager:this,paymentClients:this.paymentClients,venmoProfileId:t.venmoProfileId,googlePayMerchantId:t.googlePayMerchantId,hostingEnvironment:t.hostingEnvironment,hostedFieldConfig:t.hostedFieldConfig}),this.paymentProviders.on("hostedFieldsRetry",e=>{this.emitter.emit("paymentProvidersHostedFieldsRetry",e)}),this.paymentProviders.on("hostedFieldsFailed",e=>{this.emitter.emit("paymentProvidersHostedFieldsFailed",e)})}setReferrer(t){this.referrer=t}setLoggedInUser(t){this.loggedInUser=t}setOrigin(t){this.origin=t}}var nt;(function(o){o.Number="number",o.CVV="cvv",o.ExpirationDate="expirationDate"})(nt||(nt={}));class ov{fieldFor(t){switch(t){case nt.Number:return this.number;case nt.CVV:return this.cvv;case nt.ExpirationDate:return this.expirationDate}}markFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!0})}removeFieldErrors(t){t.forEach(e=>{const i=this.fieldFor(e);i.parentElement.error=!1})}showErrorMessage(t){const e=t??"Some payment information below is missing or incorrect.";this.errorContainer.innerHTML=e,this.errorContainer.style.display="block"}hideErrorMessage(){this.errorContainer.style.display="none"}resetHostedFields(){[this.number,this.cvv,this.expirationDate].forEach(e=>{for(;e.firstChild;)e.firstChild.remove()})}constructor(t){this.number=t.number,this.cvv=t.cvv,this.expirationDate=t.expirationDate,this.errorContainer=t.errorContainer}}class wy{constructor(t){this.started=!1,this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.recaptchaManager=t.recaptchaManager,this.emitter=Xi()}on(t,e){return this.emitter.on(t,e)}startup(){return g(this,void 0,void 0,function*(){var t;if(this.started)return;this.started=!0;const e=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get(),i=yield e?.instance.get();i?.on("focus",n=>{const{emittedBy:s,fields:r}=n,h=r[s],{container:a}=h;a.parentElement.error=!1,e.hideErrorMessage()}),i?.on("blur",n=>{const{emittedBy:s,fields:r}=n,h=r[s],{container:a,isEmpty:l,isValid:d}=h;(l||!d)&&(a.parentElement.error=!0)}),i?.on("validityChange",n=>{const{fields:s}=n,r=s.cvv.isValid&&s.expirationDate.isValid&&s.number.isValid;this.emitter.emit("validityChanged",r)})})}tokenizeFields(){return g(this,void 0,void 0,function*(){let t;const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();try{t=yield e?.tokenizeHostedFields()}catch(i){this.handleHostedFieldTokenizationError(i);return}return t})}paymentInitiated(t,e,i){return g(this,void 0,void 0,function*(){let n;try{n=yield this.recaptchaManager.execute()}catch{this.donationFlowModalManager.showErrorModal({message:"Recaptcha failure"});return}this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:b.CreditCard,recaptchaToken:n,bin:t.details.bin,donationInfo:e,customerInfo:i.customer,billingInfo:i.billing})})}handleHostedFieldTokenizationError(t){return g(this,void 0,void 0,function*(){const e=yield this.braintreeManager.paymentProviders.creditCardHandler.get();switch(e.showErrorMessage(),t.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e.markFieldErrors([nt.Number,nt.CVV,nt.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":Object.keys(t.details.invalidFields).forEach(i=>{e.markFieldErrors([i])});break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e.markFieldErrors([nt.CVV]);break}})}}class sv{keydown(t){var e,i;const n=t.key;if(t.metaKey)return;switch(n){case"Tab":case"Delete":case"Backspace":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return}const s=t.target,r=s.value,h=r.slice(0,(e=s.selectionStart)!==null&&e!==void 0?e:0),a=r.slice((i=s.selectionEnd)!==null&&i!==void 0?i:0),l=`${h}${n}${a}`,d=/^[0-9]+(\.[0-9]{0,2})?$/g;l.match(d)||t.preventDefault()}}var qt;(function(o){o.YesButton="YesButton",o.PayPalUpsellSlot="PayPalUpsellSlot"})(qt||(qt={}));let yi=class extends U{constructor(){super(...arguments),this.yesButtonMode=qt.YesButton,this.amount=5,this.currencyValidator=new sv}render(){return y`
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
    `}get yesButton(){switch(this.yesButtonMode){case qt.YesButton:return y`
          <button
            class="cta-button"
            tabindex="0"
            id="yes-button"
            @click=${this.yesSelected}
            .disabled=${this.error!==void 0}
          >
            YES, I'll donate monthly
          </button>
        `;case qt.PayPalUpsellSlot:return y`
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
    `}};v([A({type:String})],yi.prototype,"yesButtonMode",void 0);v([A({type:Number})],yi.prototype,"amount",void 0);v([A({type:Object})],yi.prototype,"error",void 0);v([x("#amount-input")],yi.prototype,"amountInput",void 0);yi=v([At("upsell-modal-content")],yi);class pe{constructor(t){var e,i,n,s,r,h,a;this.title=t?.title,this.subtitle=t?.subtitle,this.headline=t?.headline,this.message=t?.message,this.headerColor=(e=t?.headerColor)!==null&&e!==void 0?e:"#55A183",this.bodyColor=(i=t?.bodyColor)!==null&&i!==void 0?i:"#f5f5f7",this.showProcessingIndicator=(n=t?.showProcessingIndicator)!==null&&n!==void 0?n:!1,this.processingImageMode=(s=t?.processingImageMode)!==null&&s!==void 0?s:"complete",this.showCloseButton=(r=t?.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(h=t?.showHeaderLogo)!==null&&h!==void 0?h:!0,this.closeOnBackdropClick=(a=t?.closeOnBackdropClick)!==null&&a!==void 0?a:!0}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wo=window,Kd=Wo.ShadowRoot&&(Wo.ShadyCSS===void 0||Wo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rv=Symbol(),rc=new WeakMap;let Py=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==rv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=rc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&rc.set(e,t))}return t}toString(){return this.cssText}};const My=o=>new Py(typeof o=="string"?o:o+"",void 0,rv),xy=(o,t)=>{Kd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Wo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},ac=Kd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return My(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ta;const ys=window,lc=ys.trustedTypes,Ty=lc?lc.emptyScript:"",dc=ys.reactiveElementPolyfillSupport,Cl={toAttribute(o,t){switch(t){case Boolean:o=o?Ty:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},av=(o,t)=>t!==o&&(t==t||o==o),ea={attribute:!0,type:String,converter:Cl,reflect:!1,hasChanged:av},wl="finalized";let dn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ea){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ea}static finalize(){if(this.hasOwnProperty(wl))return!1;this[wl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ac(n))}else t!==void 0&&e.push(ac(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return xy(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ea){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Cl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Cl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||av)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};dn[wl]=!0,dn.elementProperties=new Map,dn.elementStyles=[],dn.shadowRootOptions={mode:"open"},dc?.({ReactiveElement:dn}),((ta=ys.reactiveElementVersions)!==null&&ta!==void 0?ta:ys.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ia;const fs=window,fi=fs.trustedTypes,hc=fi?fi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Pl="$lit$",Tt=`lit$${(Math.random()+"").slice(9)}$`,lv="?"+Tt,ky=`<${lv}>`,Be=document,_s=()=>Be.createComment(""),to=o=>o===null||typeof o!="object"&&typeof o!="function",dv=Array.isArray,Iy=o=>dv(o)||typeof o?.[Symbol.iterator]=="function",na=`[ 	
\f\r]`,hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cc=/-->/g,uc=/>/g,Xt=RegExp(`>|${na}(?:([^\\s"'>=/]+)(${na}*=${na}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pc=/'/g,vc=/"/g,hv=/^(?:script|style|textarea|title)$/i,eo=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),mc=new WeakMap,_e=Be.createTreeWalker(Be,129,null,!1);function cv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return hc!==void 0?hc.createHTML(t):t}const Hy=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=hn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===hn?d[1]==="!--"?r=cc:d[1]!==void 0?r=uc:d[2]!==void 0?(hv.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Xt):d[3]!==void 0&&(r=Xt):r===Xt?d[0]===">"?(r=n??hn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Xt:d[3]==='"'?vc:pc):r===vc||r===pc?r=Xt:r===cc||r===uc?r=hn:(r=Xt,n=void 0);const p=r===Xt&&o[h+1].startsWith("/>")?" ":"";s+=r===hn?a+ky:c>=0?(i.push(l),a.slice(0,c)+Pl+a.slice(c)+Tt+p):a+Tt+(c===-2?(i.push(void 0),h):p)}return[cv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ml=class uv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Hy(t,e);if(this.el=uv.createElement(l,i),_e.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=_e.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Pl)||u.startsWith(Tt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Pl).split(Tt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Ny:m[1]==="?"?Oy:m[1]==="@"?Ry:yr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(hv.test(n.tagName)){const c=n.textContent.split(Tt),u=c.length-1;if(u>0){n.textContent=fi?fi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],_s()),_e.nextNode(),a.push({type:2,index:++s});n.append(c[u],_s())}}}else if(n.nodeType===8)if(n.data===lv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Tt,c+1))!==-1;)a.push({type:7,index:s}),c+=Tt.length-1}s++}}static createElement(t,e){const i=Be.createElement("template");return i.innerHTML=t,i}};function _i(o,t,e=o,i){var n,s,r,h;if(t===eo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=to(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=_i(o,a._$AS(o,t.values),a,i)),t}let Uy=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Be).importNode(i,!0);_e.currentNode=s;let r=_e.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new pv(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Fy(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=_e.nextNode(),h++)}return _e.currentNode=Be,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},pv=class vv{constructor(t,e,i,n){var s;this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=_i(this,t,e),to(t)?t===F||t==null||t===""?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==eo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Iy(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==F&&to(this._$AH)?this._$AA.nextSibling.data=t:this.$(Be.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ml.createElement(cv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Uy(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=mc.get(t.strings);return e===void 0&&mc.set(t.strings,e=new Ml(t)),e}T(t){dv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new vv(this.k(_s()),this.k(_s()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},yr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=_i(this,t,e,0),r=!to(t)||t!==this._$AH&&t!==eo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=_i(this,h[i+a],e,a),l===eo&&(l=this._$AH[a]),r||(r=!to(l)||l!==this._$AH[a]),l===F?t=F:t!==F&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ny=class extends yr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}};const Dy=fi?fi.emptyScript:"";let Oy=class extends yr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==F?this.element.setAttribute(this.name,Dy):this.element.removeAttribute(this.name)}},Ry=class extends yr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=_i(this,t,e,0))!==null&&i!==void 0?i:F)===eo)return;const n=this._$AH,s=t===F&&n!==F||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==F&&(n===F||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Fy=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_i(this,t)}};const $c=fs.litHtmlPolyfillSupport;$c?.(Ml,pv),((ia=fs.litHtmlVersions)!==null&&ia!==void 0?ia:fs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mv=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ly=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},By=(o,t,e)=>{t.constructor.createProperty(e,o)};function fr(o){return(t,e)=>e!==void 0?By(o,t,e):Ly(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zy=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(h){o(h,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Vy(o,t){return zy({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var oa;((oa=window.HTMLSlotElement)===null||oa===void 0?void 0:oa.prototype.assignedElements)!=null;function*Zd(o=document.activeElement){o!=null&&(yield o,"shadowRoot"in o&&o.shadowRoot&&o.shadowRoot.mode!=="closed"&&(yield*Zd(o.shadowRoot.activeElement)))}function jy(){return[...Zd()].pop()}const gc=new WeakMap;function $v(o){let t=gc.get(o);return t||(t=window.getComputedStyle(o,null),gc.set(o,t)),t}function qy(o){if("checkVisibility"in o&&typeof o.checkVisibility=="function")return o.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const t=$v(o);return t.visibility!=="hidden"&&t.display!=="none"}function Wy(o){const t=$v(o),{overflowY:e,overflowX:i}=t;return e==="scroll"||i==="scroll"?!0:e!=="auto"||i!=="auto"?!1:o.scrollHeight>o.clientHeight&&e==="auto"||o.scrollWidth>o.clientWidth&&i==="auto"}function Gy(o){const t=o.tagName.toLowerCase(),e=Number(o.getAttribute("tabindex"));return o.hasAttribute("tabindex")&&(isNaN(e)||e<=-1)||o.hasAttribute("disabled")||o.closest("[inert]")||t==="input"&&o.getAttribute("type")==="radio"&&!o.hasAttribute("checked")||!qy(o)?!1:(t==="audio"||t==="video")&&o.hasAttribute("controls")||o.hasAttribute("tabindex")||o.hasAttribute("contenteditable")&&o.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(t)?!0:Wy(o)}function Ky(o,t){var e;return((e=o.getRootNode({composed:!0}))===null||e===void 0?void 0:e.host)!==t}function yc(o){const t=new WeakMap,e=[];function i(n){if(n instanceof Element){if(n.hasAttribute("inert")||n.closest("[inert]")||t.has(n))return;t.set(n,!0),!e.includes(n)&&Gy(n)&&e.push(n),n instanceof HTMLSlotElement&&Ky(n,o)&&n.assignedElements({flatten:!0}).forEach(s=>{i(s)}),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&i(n.shadowRoot)}for(const s of Array.from(n.children))i(s)}return i(o),e.sort((n,s)=>{const r=Number(n.getAttribute("tabindex"))||0;return(Number(s.getAttribute("tabindex"))||0)-r})}let cn=[];class Zy{constructor(t){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var i;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const n=jy();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=yc(this.element);let r=s.findIndex(a=>a===n);this.previousFocus=this.currentFocus;const h=this.tabDirection==="forward"?1:-1;for(;;){r+h>=s.length?r=0:r+h<0?r=s.length-1:r+=h,this.previousFocus=this.currentFocus;const a=s[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(i=this.currentFocus)===null||i===void 0||i.focus({preventScroll:!1});const l=[...Zd()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){cn.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){cn=cn.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return cn[cn.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=yc(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],n=this.tabDirection==="forward"?e:i;typeof n?.focus=="function"&&(this.currentFocus=n,n.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Go=window,Yd=Go.ShadowRoot&&(Go.ShadyCSS===void 0||Go.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gv=Symbol(),fc=new WeakMap;let Yy=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==gv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Yd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=fc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&fc.set(e,t))}return t}toString(){return this.cssText}};const Jy=o=>new Yy(typeof o=="string"?o:o+"",void 0,gv),Xy=(o,t)=>{Yd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Go.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},_c=Yd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Jy(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var sa;const As=window,Ac=As.trustedTypes,Qy=Ac?Ac.emptyScript:"",bc=As.reactiveElementPolyfillSupport,xl={toAttribute(o,t){switch(t){case Boolean:o=o?Qy:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},yv=(o,t)=>t!==o&&(t==t||o==o),ra={attribute:!0,type:String,converter:xl,reflect:!1,hasChanged:yv},Tl="finalized";let un=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ra){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ra}static finalize(){if(this.hasOwnProperty(Tl))return!1;this[Tl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(_c(n))}else t!==void 0&&e.push(_c(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Xy(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ra){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:xl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:xl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||yv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};un[Tl]=!0,un.elementProperties=new Map,un.elementStyles=[],un.shadowRootOptions={mode:"open"},bc?.({ReactiveElement:un}),((sa=As.reactiveElementVersions)!==null&&sa!==void 0?sa:As.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var aa;const bs=window,Ai=bs.trustedTypes,Sc=Ai?Ai.createPolicy("lit-html",{createHTML:o=>o}):void 0,kl="$lit$",kt=`lit$${(Math.random()+"").slice(9)}$`,fv="?"+kt,tf=`<${fv}>`,ze=document,Ss=()=>ze.createComment(""),io=o=>o===null||typeof o!="object"&&typeof o!="function",_v=Array.isArray,ef=o=>_v(o)||typeof o?.[Symbol.iterator]=="function",la=`[ 	
\f\r]`,pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ec=/-->/g,Cc=/>/g,Qt=RegExp(`>|${la}(?:([^\\s"'>=/]+)(${la}*=${la}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wc=/'/g,Pc=/"/g,Av=/^(?:script|style|textarea|title)$/i,no=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),Mc=new WeakMap,Ae=ze.createTreeWalker(ze,129,null,!1);function bv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Sc!==void 0?Sc.createHTML(t):t}const nf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=pn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===pn?d[1]==="!--"?r=Ec:d[1]!==void 0?r=Cc:d[2]!==void 0?(Av.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=Qt):d[3]!==void 0&&(r=Qt):r===Qt?d[0]===">"?(r=n??pn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?Qt:d[3]==='"'?Pc:wc):r===Pc||r===wc?r=Qt:r===Ec||r===Cc?r=pn:(r=Qt,n=void 0);const p=r===Qt&&o[h+1].startsWith("/>")?" ":"";s+=r===pn?a+tf:c>=0?(i.push(l),a.slice(0,c)+kl+a.slice(c)+kt+p):a+kt+(c===-2?(i.push(void 0),h):p)}return[bv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Il=class Sv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=nf(t,e);if(this.el=Sv.createElement(l,i),Ae.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ae.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(kl)||u.startsWith(kt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+kl).split(kt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?sf:m[1]==="?"?af:m[1]==="@"?lf:_r})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Av.test(n.tagName)){const c=n.textContent.split(kt),u=c.length-1;if(u>0){n.textContent=Ai?Ai.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ss()),Ae.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ss())}}}else if(n.nodeType===8)if(n.data===fv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(kt,c+1))!==-1;)a.push({type:7,index:s}),c+=kt.length-1}s++}}static createElement(t,e){const i=ze.createElement("template");return i.innerHTML=t,i}};function bi(o,t,e=o,i){var n,s,r,h;if(t===no)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=io(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=bi(o,a._$AS(o,t.values),a,i)),t}let of=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ze).importNode(i,!0);Ae.currentNode=s;let r=Ae.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Ev(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new df(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Ae.nextNode(),h++)}return Ae.currentNode=ze,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ev=class Cv{constructor(t,e,i,n){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=bi(this,t,e),io(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==no&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ef(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&io(this._$AH)?this._$AA.nextSibling.data=t:this.$(ze.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Il.createElement(bv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new of(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Mc.get(t.strings);return e===void 0&&Mc.set(t.strings,e=new Il(t)),e}T(t){_v(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Cv(this.k(Ss()),this.k(Ss()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},_r=class{constructor(t,e,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=bi(this,t,e,0),r=!io(t)||t!==this._$AH&&t!==no,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=bi(this,h[i+a],e,a),l===no&&(l=this._$AH[a]),r||(r=!io(l)||l!==this._$AH[a]),l===L?t=L:t!==L&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},sf=class extends _r{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}};const rf=Ai?Ai.emptyScript:"";let af=class extends _r{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,rf):this.element.removeAttribute(this.name)}},lf=class extends _r{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=bi(this,t,e,0))!==null&&i!==void 0?i:L)===no)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},df=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){bi(this,t)}};const xc=bs.litHtmlPolyfillSupport;xc?.(Il,Ev),((aa=bs.litHtmlVersions)!==null&&aa!==void 0?aa:bs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hf=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cf=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},uf=(o,t,e)=>{t.constructor.createProperty(e,o)};function pf(o){return(t,e)=>e!==void 0?uf(o,t,e):cf(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var da;((da=window.HTMLSlotElement)===null||da===void 0?void 0:da.prototype.assignedElements)!=null;var Tc;(function(o){o.processing="processing",o.complete="complete"})(Tc||(Tc={}));let Hl=class extends U{constructor(){super(...arguments),this.mode="processing"}render(){return y`
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
    `}};v([pf({type:String})],Hl.prototype,"mode",void 0);Hl=v([hf("ia-activity-indicator")],Hl);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ko=window,Jd=Ko.ShadowRoot&&(Ko.ShadyCSS===void 0||Ko.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wv=Symbol(),kc=new WeakMap;let vf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Jd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=kc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&kc.set(e,t))}return t}toString(){return this.cssText}};const mf=o=>new vf(typeof o=="string"?o:o+"",void 0,wv),$f=(o,t)=>{Jd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Ko.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Ic=Jd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return mf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ha;const Es=window,Hc=Es.trustedTypes,gf=Hc?Hc.emptyScript:"",Uc=Es.reactiveElementPolyfillSupport,Ul={toAttribute(o,t){switch(t){case Boolean:o=o?gf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Pv=(o,t)=>t!==o&&(t==t||o==o),ca={attribute:!0,type:String,converter:Ul,reflect:!1,hasChanged:Pv},Nl="finalized";let vn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ca){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ca}static finalize(){if(this.hasOwnProperty(Nl))return!1;this[Nl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Ic(n))}else t!==void 0&&e.push(Ic(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $f(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ca){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ul).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ul;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Pv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};vn[Nl]=!0,vn.elementProperties=new Map,vn.elementStyles=[],vn.shadowRootOptions={mode:"open"},Uc?.({ReactiveElement:vn}),((ha=Es.reactiveElementVersions)!==null&&ha!==void 0?ha:Es.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ua;const Cs=window,Si=Cs.trustedTypes,Nc=Si?Si.createPolicy("lit-html",{createHTML:o=>o}):void 0,Dl="$lit$",It=`lit$${(Math.random()+"").slice(9)}$`,Mv="?"+It,yf=`<${Mv}>`,Ve=document,ws=()=>Ve.createComment(""),oo=o=>o===null||typeof o!="object"&&typeof o!="function",xv=Array.isArray,ff=o=>xv(o)||typeof o?.[Symbol.iterator]=="function",pa=`[ 	
\f\r]`,mn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dc=/-->/g,Oc=/>/g,te=RegExp(`>|${pa}(?:([^\\s"'>=/]+)(${pa}*=${pa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rc=/'/g,Fc=/"/g,Tv=/^(?:script|style|textarea|title)$/i,so=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),Lc=new WeakMap,be=Ve.createTreeWalker(Ve,129,null,!1);function kv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nc!==void 0?Nc.createHTML(t):t}const _f=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=mn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===mn?d[1]==="!--"?r=Dc:d[1]!==void 0?r=Oc:d[2]!==void 0?(Tv.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=te):d[3]!==void 0&&(r=te):r===te?d[0]===">"?(r=n??mn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?te:d[3]==='"'?Fc:Rc):r===Fc||r===Rc?r=te:r===Dc||r===Oc?r=mn:(r=te,n=void 0);const p=r===te&&o[h+1].startsWith("/>")?" ":"";s+=r===mn?a+yf:c>=0?(i.push(l),a.slice(0,c)+Dl+a.slice(c)+It+p):a+It+(c===-2?(i.push(void 0),h):p)}return[kv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ol=class Iv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=_f(t,e);if(this.el=Iv.createElement(l,i),be.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=be.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Dl)||u.startsWith(It)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Dl).split(It),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?bf:m[1]==="?"?Ef:m[1]==="@"?Cf:Ar})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Tv.test(n.tagName)){const c=n.textContent.split(It),u=c.length-1;if(u>0){n.textContent=Si?Si.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],ws()),be.nextNode(),a.push({type:2,index:++s});n.append(c[u],ws())}}}else if(n.nodeType===8)if(n.data===Mv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(It,c+1))!==-1;)a.push({type:7,index:s}),c+=It.length-1}s++}}static createElement(t,e){const i=Ve.createElement("template");return i.innerHTML=t,i}};function Ei(o,t,e=o,i){var n,s,r,h;if(t===so)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=oo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ei(o,a._$AS(o,t.values),a,i)),t}let Af=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ve).importNode(i,!0);be.currentNode=s;let r=be.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Hv(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new wf(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=be.nextNode(),h++)}return be.currentNode=Ve,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Hv=class Uv{constructor(t,e,i,n){var s;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ei(this,t,e),oo(t)?t===B||t==null||t===""?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==so&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ff(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==B&&oo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ve.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ol.createElement(kv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Af(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Lc.get(t.strings);return e===void 0&&Lc.set(t.strings,e=new Ol(t)),e}T(t){xv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Uv(this.k(ws()),this.k(ws()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ar=class{constructor(t,e,i,n,s){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ei(this,t,e,0),r=!oo(t)||t!==this._$AH&&t!==so,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ei(this,h[i+a],e,a),l===so&&(l=this._$AH[a]),r||(r=!oo(l)||l!==this._$AH[a]),l===B?t=B:t!==B&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},bf=class extends Ar{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===B?void 0:t}};const Sf=Si?Si.emptyScript:"";let Ef=class extends Ar{constructor(){super(...arguments),this.type=4}j(t){t&&t!==B?this.element.setAttribute(this.name,Sf):this.element.removeAttribute(this.name)}},Cf=class extends Ar{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ei(this,t,e,0))!==null&&i!==void 0?i:B)===so)return;const n=this._$AH,s=t===B&&n!==B||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==B&&(n===B||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},wf=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ei(this,t)}};const Bc=Cs.litHtmlPolyfillSupport;Bc?.(Ol,Hv),((ua=Cs.litHtmlVersions)!==null&&ua!==void 0?ua:Cs.litHtmlVersions=[]).push("2.8.0");const Pf=y`
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
`;class Mf extends U{static get styles(){return $`
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
    `}render(){return Pf}}customElements.define("ia-icon-close",Mf);const xf=y`
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
`;let Rl=class extends U{constructor(){super(...arguments),this.config=new pe}render(){return y`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?y`<div class="logo-icon">${xf}</div>`:T}
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
    `}static get styles(){const t=$`var(--modalLogoSize, 6.5rem)`,e=$`var(--processingImageSize, 7.5rem)`,i=$`var(--modalCornerRadius, 1rem)`,n=$`var(--modalBorder, 2px solid black)`,s=$`var(--modalBottomMargin, 2.5rem)`,r=$`var(--modalTopMargin, 5rem)`,h=$`var(--modalHeaderBottomPadding, 0.5em)`,a=$`var(--modalBottomPadding, 2rem)`,l=$`var(--modalScrollOffset, 5px)`,d=$`var(--modalTitleFontSize, 1.8rem)`,c=$`var(--modalSubtitleFontSize, 1.4rem)`,u=$`var(--modalHeadlineFontSize, 1.6rem)`,p=$`var(--modalMessageFontSize, 1.4rem)`,f=$`var(--modalTitleLineHeight, normal)`,m=$`var(--modalSubtitleLineHeight, normal)`,O=$`var(--modalHeadlineLineHeight, normal)`,lt=$`var(--modalMessageLineHeight, normal)`;return $`
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
        padding-bottom: ${h};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${d};
        font-weight: bold;
        line-height: ${f};
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
        line-height: ${O};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${p};
        line-height: ${lt};
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
    `}};v([fr({type:Object})],Rl.prototype,"config",void 0);Rl=v([mv("modal-template")],Rl);function Tf(o,t,e){var i=e||{},n=i.noTrailing,s=n===void 0?!1:n,r=i.noLeading,h=r===void 0?!1:r,a=i.debounceMode,l=a===void 0?void 0:a,d,c=!1,u=0;function p(){d&&clearTimeout(d)}function f(O){var lt=O||{},dt=lt.upcomingOnly,en=dt===void 0?!1:dt;p(),c=!en}function m(){for(var O=arguments.length,lt=new Array(O),dt=0;dt<O;dt++)lt[dt]=arguments[dt];var en=this,Do=Date.now()-u;if(c)return;function Oo(){u=Date.now(),t.apply(en,lt)}function ph(){d=void 0}!h&&l&&!d&&Oo(),p(),l===void 0&&Do>o?h?(u=Date.now(),s||(d=setTimeout(l?ph:Oo,o))):Oo():s!==!0&&(d=setTimeout(l?ph:Oo,l===void 0?o-Do:o))}return m.cancel=f,m}var Ne;(function(o){o.Open="open",o.Closed="closed"})(Ne||(Ne={}));class kf{constructor(t){this.windowResizeThrottler=Tf(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=t}handleModeChange(t){switch(t){case Ne.Open:this.startResizeListener(),this.stopDocumentScroll();break;case Ne.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let Ci=class extends U{constructor(){super(...arguments),this.mode=Ne.Closed,this.hostBridge=new kf(this),this.modal=new Zy(this),this.closeOnBackdropClick=!0}firstUpdated(){return g(this,void 0,void 0,function*(){yield new Promise(t=>setTimeout(t,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",t=>{t.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return y`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=Ne.Closed,this.customModalContent=void 0,this.modalTemplate.config=new pe,this.modal.deactivate()}callUserClosedModalCallback(){const t=this.userClosedModalCallback;this.userClosedModalCallback=void 0,t&&t()}showModal(t){return g(this,void 0,void 0,function*(){this.closeOnBackdropClick=t.config.closeOnBackdropClick,this.userClosedModalCallback=t.userClosedModalCallback,this.modalTemplate.config=t.config,this.customModalContent=t.customModalContent,this.mode=Ne.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(t){t.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const t=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(t)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const t=$`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,e=$`var(--modalBackdropZindex, 1000)`,i=$`var(--modalWidth, 32rem)`,n=$`var(--modalMaxWidth, 95%)`,s=$`var(--modalZindex, 2000)`;return $`
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
    `}};v([fr({type:String,reflect:!0})],Ci.prototype,"mode",void 0);v([fr({type:Object})],Ci.prototype,"customModalContent",void 0);v([fr({type:Object})],Ci.prototype,"hostBridge",void 0);v([Vy("modal-template")],Ci.prototype,"modalTemplate",void 0);Ci=v([mv("modal-manager")],Ci);let je=class extends U{constructor(){super(...arguments),this.amount=5,this.currencyType="$",this.donationType=C.OneTime,this.confirmDonation=()=>{},this.cancelDonation=()=>{}}get confirmationText(){const t=et(this.amount,{symbol:this.currencySymbol}).format();return y`
      <p>
        You are about to make a <b>${this.donationType}</b> donation of
        <b>${t} ${this.currencyType}</b> to the Internet Archive.
      </p>
    `}get confirmUpsellText(){const t=et(this.amount,{symbol:this.currencySymbol}).format();return y`<p>
      You are about to begin making <b>monthly</b> donations of
      <b>${t} ${this.currencyType}</b> to the Internet Archive. (Your first recurring
      contribution will be next month.)
    </p>`}confirm(){this===null||this===void 0||this.confirmDonation()}cancel(){this===null||this===void 0||this.cancelDonation()}get confirmCTA(){return this.donationType===C.Upsell?"Start monthly donation":"Complete donation"}render(){return y`
      ${this.donationType===C.Upsell?this.confirmUpsellText:this.confirmationText}

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
    }`}get currencySymbol(){switch(this.currencyType){case"AUD":return"AU$";case"BRL":return"R$";case"CAD":return"CA$";case"CHF":return"Fr";case"CNY":return"¥";case"CZK":return"Kč";case"DKK":return"Kr";case"EUR":return"€";case"GBP":return"£";case"HKD":return"HK$";case"HUF":return"Ft";case"ILS":return"₪";case"JPY":return"¥";case"MXN":return"MX$";case"MYR":return"RM";case"NOK":return"kr";case"PLN":return"zł";case"RUB":return"₽";case"SEK":return"kr";case"SGD":return"S$";case"THB":return"฿";case"TYD":return"NT$";default:return"$"}}};v([A({type:Number})],je.prototype,"amount",void 0);v([A({type:String})],je.prototype,"currencyType",void 0);v([A({type:String})],je.prototype,"donationType",void 0);v([A({type:Function})],je.prototype,"confirmDonation",void 0);v([A({type:Function})],je.prototype,"cancelDonation",void 0);je=v([At("confirm-donation-modal")],je);let zc=class extends U{render(){return y`
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
    `}};zc=v([At("donation-form-error-modal-content")],zc);var ve;(function(o){o.Blue="#497fbf",o.Green="#55A183",o.Red="#691916"})(ve||(ve={}));class br{constructor(t){this.modalManager=t.modalManager,this.braintreeManager=t.braintreeManager,this.analytics=t.analytics}closeModal(){this.modalManager.closeModal()}showProcessingModal(){const t=new pe({headerColor:ve.Blue,showProcessingIndicator:!0,closeOnBackdropClick:!1,showCloseButton:!1,processingImageMode:"processing",title:y` Processing... `});this.modalManager.showModal({config:t})}showThankYouModal(t){const e=new pe({showProcessingIndicator:!0,processingImageMode:"complete",headerColor:ve.Green,title:y` Thank You! `});this.modalManager.showModal({config:e});let n=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}`;t.upsellSuccessResponse&&(n+="-upsell");const s=t.successResponse.donationType;this.analytics.logDonationFlowEvent(n,s),this.braintreeManager.donationSuccessful(t)}showErrorModal(t){const e=new pe({headerColor:ve.Red,title:y` Processing error `,headline:y` There's been a problem completing your donation. `,message:y` ${t?.message} `});this.modalManager.showModal({config:e,userClosedModalCallback:t?.userClosedModalCallback,customModalContent:y`
        <donation-form-error-modal-content></donation-form-error-modal-content>
      `})}showConfirmationStepModal(t){const e=()=>{t?.confirmDonationCB()},i=()=>{t?.cancelDonationCB()},n=t.donationType===C.Upsell?"Confirm monthly donation":"Complete donation",s=new pe({closeOnBackdropClick:!1,headerColor:ve.Green,title:y`${n}`,message:y`
        <confirm-donation-modal
          .amount="${t.amount}"
          .currencyType="${t.currencyType}"
          .donationType="${t.donationType}"
          .confirmDonation=${e}
          .cancelDonation=${i}
        ></confirm-donation-modal>
      `});return this.modalManager.showModal({config:s,userClosedModalCallback:i})}showUpsellModal(t){var e;const i=new pe({headerColor:ve.Green,title:y` Donation received `,processingImageMode:"complete",showProcessingIndicator:!0}),n=br.getDefaultUpsellAmount(t.oneTimeAmount);t.amountChanged&&t.amountChanged(n);const s=y`
      <upsell-modal-content
        .amount=${n}
        .yesButtonMode=${(e=t?.ctaMode)!==null&&e!==void 0?e:qt.YesButton}
        @yesSelected=${r=>t?.yesSelected?t.yesSelected(r.detail.amount):void 0}
        @noThanksSelected=${t?.noSelected}
        @amountChanged=${r=>t?.amountChanged?t.amountChanged(r.detail.amount):void 0}
      >
        <slot name="paypal-upsell-button"></slot>
      </upsell-modal-content>
    `;return this.modalManager.showModal({config:i,customModalContent:s,userClosedModalCallback:t?.userClosedModalCallback})}startDonationSubmissionFlow(t){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const e=yield this.braintreeManager.submitDonation(t);if(e.success)return this.handleSuccessfulDonationResponse(t.donationInfo,e.value),e;{const i=e.value;return this.showErrorModal({message:i.message}),e}}catch(e){this.showErrorModal({message:`${e}`}),console.error("error getting a response",e);return}})}upsellModalYesSelected(t,e){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.completeUpsell({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.showErrorModal({message:n.message})}return i}catch(i){this.showErrorModal({message:`${i}`}),console.error("error getting a response",i);return}})}completeUpsell(t){this.showThankYouModal(t);const i=`Donated-${t.successResponse.paymentProvider.replace(/\s+/g,"")}-upsell`,n=t.successResponse.donationType;this.analytics.logDonationFlowEvent(i,n),this.braintreeManager.donationSuccessful(t)}static getDefaultUpsellAmount(t){let e=5;return t<=10?e=8:t>10&&t<=25?e=10:t>25&&t<=100?e=25:t>100&&(e=50),e}handleSuccessfulDonationResponse(t,e){switch(t.donationType){case C.OneTime:this.showUpsellModal({oneTimeAmount:e.amount,yesSelected:i=>{this.upsellModalYesSelected(e,i)},noSelected:()=>{this.showThankYouModal({successResponse:e})},userClosedModalCallback:()=>{this.showThankYouModal({successResponse:e})}});break;case C.Monthly:this.showThankYouModal({successResponse:e});break;case C.Upsell:break}}}class If{constructor(t){this.upsellButtonDataSource=t.upsellButtonDataSource,this.oneTimePayload=t.oneTimePayload,this.oneTimeSuccessResponse=t.oneTimeSuccessResponse}}class Hf{updateDonationInfo(t){this.buttonDataSource&&(this.buttonDataSource.donationInfo=t)}updateUpsellDonationInfo(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo=t)}constructor(t){this.emitter=Xi(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}payPalPaymentStarted(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentStarted",t,e)})}payPalPaymentAuthorized(t,e){return g(this,void 0,void 0,function*(){const{donationType:i,total:n}=t.donationInfo;this.donationFlowModalManager.showConfirmationStepModal({donationType:i,amount:n,currencyType:"USD",confirmDonationCB:()=>{this.payPalPaymentConfirmed(t,e)},cancelDonationCB:()=>{this.donationFlowModalManager.closeModal(),this.payPalPaymentCancelled(t,{})}})})}payPalPaymentConfirmed(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentConfirmed",t,{}),this.donationFlowModalManager.showProcessingModal();const i=t.donationInfo.donationType,n=e?.details,s=new No({email:n?.email,firstName:n?.firstName,lastName:n?.lastName}),r=n.shippingAddress,h=new Uo({streetAddress:r?.line1,extendedAddress:r?.line2,locality:r?.city,region:r?.state,postalCode:r?.postalCode,countryCodeAlpha2:r?.countryCode}),a=this.upsellButtonDataSourceContainer?this.upsellButtonDataSourceContainer.oneTimeSuccessResponse.transaction_id:void 0,l=yield this.braintreeManager.submitDonation({nonce:e.nonce,paymentProvider:b.PayPal,donationInfo:t.donationInfo,customerInfo:s,billingInfo:h,upsellOnetimeTransactionId:a});if(!l.success){const c=l.value;this.donationFlowModalManager.showErrorModal({message:c.message});return}const d=l.value;switch(i){case C.OneTime:this.showUpsellModal(e,d);break;case C.Monthly:this.donationFlowModalManager.showThankYouModal({successResponse:d});break;case C.Upsell:this.upsellButtonDataSourceContainer?this.donationFlowModalManager.showThankYouModal({successResponse:this.upsellButtonDataSourceContainer.oneTimeSuccessResponse,upsellSuccessResponse:d}):this.donationFlowModalManager.showErrorModal({message:"Error setting up monthly donation"});break}})}payPalPaymentCancelled(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentCancelled",t,e)})}payPalPaymentError(t,e){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentError",t,e),console.error("PaymentSector:payPalPaymentError error:",t,t.donationInfo,e)})}renderPayPalButton(t){return g(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get();this.buttonDataSource=yield i?.renderPayPalButton({selector:"#paypal-button",style:{color:"blue",label:"paypal",shape:"rect",size:"medium",tagline:!1},donationInfo:t}),this.buttonDataSource&&(this.buttonDataSource.delegate=this)})}showUpsellModal(t,e){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showUpsellModal({oneTimeAmount:e.amount,amountChanged:this.upsellAmountChanged.bind(this),noSelected:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})},ctaMode:qt.PayPalUpsellSlot,userClosedModalCallback:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:e})}});const i=br.getDefaultUpsellAmount(e.amount),n=new N({amount:i,donationType:C.Upsell,coverFees:!1});this.upsellButtonDataSourceContainer||this.renderUpsellPayPalButton({donationInfo:n,oneTimePayload:t,oneTimeSuccessResponse:e})})}upsellAmountChanged(t){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo.amount=t)}renderUpsellPayPalButton(t){return g(this,void 0,void 0,function*(){var e;const i=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.paypalHandler.get(),n=yield i?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:t.donationInfo});n?(n.delegate=this,this.upsellButtonDataSourceContainer=new If({upsellButtonDataSource:n,oneTimePayload:t.oneTimePayload,oneTimeSuccessResponse:t.oneTimeSuccessResponse})):console.error("error rendering paypal upsell button")})}}class Uf{constructor(t){this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}paymentInitiated(t,e){return g(this,void 0,void 0,function*(){var i;this.donationFlowModalManager.showProcessingModal();const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.applePayHandler.get();this.applePayDataSource=yield n?.createPaymentRequest(e,t),this.applePayDataSource&&(this.applePayDataSource.delegate=this)})}modalYesSelected(t,e){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal();const i=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:t,amount:e});if(i.success)this.donationFlowModalManager.showThankYouModal({successResponse:t,upsellSuccessResponse:i.value});else{const n=i.value;this.donationFlowModalManager.showErrorModal({message:n.message})}})}paymentComplete(t){var e;if(t.success){const i=t.value;((e=this.applePayDataSource)===null||e===void 0?void 0:e.donationInfo.donationType)==C.OneTime?this.donationFlowModalManager.showUpsellModal({oneTimeAmount:i.amount,yesSelected:this.modalYesSelected.bind(this,i),noSelected:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i}),userClosedModalCallback:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:i})}):this.donationFlowModalManager.showThankYouModal({successResponse:i})}else{const i=t.value;this.donationFlowModalManager.showErrorModal({message:i.message})}}paymentFailed(){this.donationFlowModalManager.showErrorModal({message:"Payment failed"})}paymentCancelled(){this.donationFlowModalManager.closeModal()}}class Vc{constructor(t){this.contactInfo=t.contactInfo,this.donationInfo=t.donationInfo}}class Nf{constructor(t){this.persistanceKey="venmoRestorationStateInfo",t?.storageSystem?this.storageSystem=t.storageSystem:this.storageSystemAvailable(localStorage)?this.storageSystem=localStorage:this.storageSystemAvailable(sessionStorage)&&(this.storageSystem=sessionStorage)}clearState(){var t;(t=this.storageSystem)===null||t===void 0||t.removeItem(this.persistanceKey)}persistState(t,e){var i;const n=new Vc({contactInfo:t,donationInfo:e}),s=JSON.stringify(n);(i=this.storageSystem)===null||i===void 0||i.setItem(this.persistanceKey,s)}getRestorationState(){return g(this,void 0,void 0,function*(){var t;const e=(t=this.storageSystem)===null||t===void 0?void 0:t.getItem(this.persistanceKey);if(!e){console.error("restoreState: No stored data");return}const i=JSON.parse(e);if(!i){console.error("restoreState: Data could not be deserialized");return}return new Vc(i)})}storageSystemAvailable(t){try{return t.setItem("foo","bar"),t.removeItem("foo"),!0}catch{return!1}}}class Df{constructor(t){var e;this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager,this.restorationStateHandler=(e=t.restorationStateHandler)!==null&&e!==void 0?e:new Nf}startup(){return g(this,void 0,void 0,function*(){const t=yield this.braintreeManager.paymentProviders.venmoHandler.get(),e=yield t?.instance.get();if(e?.hasTokenizationResult()){const i=yield this.restorationStateHandler.getRestorationState();i?this.paymentInitiated(i.contactInfo,i.donationInfo):(console.error("no restoration info"),this.donationFlowModalManager.showErrorModal({message:"Error restoring donation session"}))}})}paymentInitiated(t,e){return g(this,void 0,void 0,function*(){this.restorationStateHandler.persistState(t,e);try{const i=yield this.braintreeManager.paymentProviders.venmoHandler.get(),n=yield i?.startPayment();if(!n){this.restorationStateHandler.clearState(),this.donationFlowModalManager.showErrorModal({message:"Error setting up the donation"});return}this.handleTokenizationResult(n,t,e)}catch(i){this.restorationStateHandler.clearState(),this.handleTokenizationError(i),this.donationFlowModalManager.showErrorModal({message:"There was a problem loading your donation information. Please try again."})}})}handleTokenizationResult(t,e,i){return g(this,void 0,void 0,function*(){this.restorationStateHandler.clearState(),this.donationFlowModalManager.startDonationSubmissionFlow({nonce:t.nonce,paymentProvider:b.Venmo,donationInfo:i,customerInfo:e.customer,billingInfo:e.billing})})}handleTokenizationError(t){switch(t.code){case"VENMO_APP_CANCELED":break;case"VENMO_CANCELED":break;default:console.error("Error!",t)}}}class Of{constructor(t){this.emitter=Xi(),this.braintreeManager=t.braintreeManager,this.donationFlowModalManager=t.donationFlowModalManager}on(t,e){return this.emitter.on(t,e)}paymentInitiated(t){return g(this,void 0,void 0,function*(){var e,i;const n=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.googlePayHandler.get(),s=yield n.instance.get(),r=yield s.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${t.total}`}}),h=r.allowedPaymentMethods[0];h.parameters.billingAddressRequired=!0,h.parameters.billingAddressParameters={format:"FULL",phoneNumberRequired:!1};try{const a=yield n.paymentsClient.loadPaymentData(r),l=yield s.parseResponse(a),d=(i=a.paymentMethodData.info)===null||i===void 0?void 0:i.billingAddress,c=d?.name;let u=c,p="";const f=c?.lastIndexOf(" ");f&&f!==-1&&(u=c?.substr(0,f),p=c?.substr(f));const m=new No({email:a.email,firstName:u,lastName:p}),O=new Uo({streetAddress:d?.address1,extendedAddress:d?.address2,locality:d?.locality,region:d?.administrativeArea,postalCode:d?.postalCode,countryCodeAlpha2:d?.countryCode});this.donationFlowModalManager.startDonationSubmissionFlow({nonce:l.nonce,paymentProvider:b.GooglePay,bin:l.details.bin,binName:l.binData.issuingBank,donationInfo:t,customerInfo:m,billingInfo:O})}catch{this.emitter.emit("paymentCancelled"),this.donationFlowModalManager.closeModal()}})}}class Rf{startup(){return g(this,void 0,void 0,function*(){var t,e;(t=this.venmoHandler)===null||t===void 0||t.startup(),(e=this.creditCardHandler)===null||e===void 0||e.startup()})}showUpsellModal(t){return g(this,void 0,void 0,function*(){return this.donationFlowModalManager.showUpsellModal(t)})}showConfirmationStepModal(t){return this.donationFlowModalManager.showConfirmationStepModal(t)}get creditCardHandler(){return this.creditCardHandlerCache?this.creditCardHandlerCache:(this.creditCardHandlerCache=new wy({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager,recaptchaManager:this.recaptchaManager}),this.creditCardHandlerCache)}get paypalHandler(){return this.paypalHandlerCache?this.paypalHandlerCache:(this.paypalHandlerCache=new Hf({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.paypalHandlerCache)}get applePayHandler(){return this.applePayHandlerCache?this.applePayHandlerCache:(this.applePayHandlerCache=new Uf({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.applePayHandlerCache)}get venmoHandler(){return this.venmoHandlerCache?this.venmoHandlerCache:(this.venmoHandlerCache=new Df({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.venmoHandlerCache)}get googlePayHandler(){return this.googlePayHandlerCache?this.googlePayHandlerCache:(this.googlePayHandlerCache=new Of({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.googlePayHandlerCache)}constructor(t){this.braintreeManager=t.braintreeManager,this.modalManager=t.modalManager,this.recaptchaManager=t.recaptchaManager,this.resources=t.resources,this.donationFlowModalManager=new br({braintreeManager:this.braintreeManager,modalManager:this.modalManager,analytics:this.resources.analytics})}}class Ff{constructor(t){this.isExecuting=!1,this.grecaptchaLibrary=t.grecaptchaLibrary,this.siteKey=t.siteKey}execute(){return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((t,e)=>{this.executionSuccessBlock=i=>{this.finishExecution(),t(i)},this.executionExpiredBlock=()=>{this.finishExecution(),e("expired")},this.executionErrorBlock=()=>{this.finishExecution(),e("error")},this.grecaptchaLibrary.execute()})}finishExecution(){this.isExecuting=!1,this.grecaptchaLibrary.reset()}setup(t,e,i,n){this.grecaptchaLibrary.render(t,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:e,theme:i,type:n,size:"invisible"})}responseHandler(t){this.executionSuccessBlock&&(this.executionSuccessBlock(t),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Lf{constructor(t){this.hostedFieldFieldOptions=t.hostedFieldFieldOptions,this.hostedFieldStyle=t.hostedFieldStyle,this.hostedFieldContainer=t.hostedFieldContainer}}var De;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(De||(De={}));let qe=class extends U{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=De.LeaveSpace,this.requiredIndicatorSpaceOption=De.LeaveSpace}render(){return y`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?y` * `:T}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===De.CompressSpace?"compress-space":""}static get styles(){const t=$`var(--inputBorder, 1px solid #d9d9d9)`,e=$`var(--badgedInputBorderErrorColor, red)`,i=$`var(--badgedInputIconSize, 1.4rem)`,n=$`var(--badgedInputIconSpacerWidth, 3rem)`,s=$`var(--badgedInputNoIconSpacerWidth, 1rem)`,r=$`var(--badgedInputHeight, 3rem)`,h=$`var(--badgedInputRequiredIndicatorColor, red)`,a=$`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,l=$`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return $`
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
        color: ${h};
        font-size: ${l};
        margin: ${a};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};v([A({type:Boolean})],qe.prototype,"error",void 0);v([A({type:Object})],qe.prototype,"icon",void 0);v([A({type:Boolean})],qe.prototype,"required",void 0);v([A({type:String})],qe.prototype,"iconSpaceOption",void 0);v([A({type:String})],qe.prototype,"requiredIndicatorSpaceOption",void 0);qe=v([At("badged-input")],qe);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jc=o=>o??D;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zo=window,Xd=Zo.ShadowRoot&&(Zo.ShadyCSS===void 0||Zo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Nv=Symbol(),qc=new WeakMap;let Bf=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Nv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=qc.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&qc.set(e,t))}return t}toString(){return this.cssText}};const zf=o=>new Bf(typeof o=="string"?o:o+"",void 0,Nv),Vf=(o,t)=>{Xd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Zo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Wc=Xd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zf(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var va;const Ps=window,Gc=Ps.trustedTypes,jf=Gc?Gc.emptyScript:"",Kc=Ps.reactiveElementPolyfillSupport,Fl={toAttribute(o,t){switch(t){case Boolean:o=o?jf:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Dv=(o,t)=>t!==o&&(t==t||o==o),ma={attribute:!0,type:String,converter:Fl,reflect:!1,hasChanged:Dv},Ll="finalized";let $n=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ma){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ma}static finalize(){if(this.hasOwnProperty(Ll))return!1;this[Ll]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Wc(n))}else t!==void 0&&e.push(Wc(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Vf(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ma){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Fl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Fl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Dv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};$n[Ll]=!0,$n.elementProperties=new Map,$n.elementStyles=[],$n.shadowRootOptions={mode:"open"},Kc?.({ReactiveElement:$n}),((va=Ps.reactiveElementVersions)!==null&&va!==void 0?va:Ps.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $a;const Ms=window,wi=Ms.trustedTypes,Zc=wi?wi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Bl="$lit$",Ht=`lit$${(Math.random()+"").slice(9)}$`,Ov="?"+Ht,qf=`<${Ov}>`,We=document,xs=()=>We.createComment(""),ro=o=>o===null||typeof o!="object"&&typeof o!="function",Rv=Array.isArray,Wf=o=>Rv(o)||typeof o?.[Symbol.iterator]=="function",ga=`[ 	
\f\r]`,gn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yc=/-->/g,Jc=/>/g,ee=RegExp(`>|${ga}(?:([^\\s"'>=/]+)(${ga}*=${ga}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xc=/'/g,Qc=/"/g,Fv=/^(?:script|style|textarea|title)$/i,ao=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),tu=new WeakMap,Se=We.createTreeWalker(We,129,null,!1);function Lv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zc!==void 0?Zc.createHTML(t):t}const Gf=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=gn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===gn?d[1]==="!--"?r=Yc:d[1]!==void 0?r=Jc:d[2]!==void 0?(Fv.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ee):d[3]!==void 0&&(r=ee):r===ee?d[0]===">"?(r=n??gn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ee:d[3]==='"'?Qc:Xc):r===Qc||r===Xc?r=ee:r===Yc||r===Jc?r=gn:(r=ee,n=void 0);const p=r===ee&&o[h+1].startsWith("/>")?" ":"";s+=r===gn?a+qf:c>=0?(i.push(l),a.slice(0,c)+Bl+a.slice(c)+Ht+p):a+Ht+(c===-2?(i.push(void 0),h):p)}return[Lv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let zl=class Bv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Gf(t,e);if(this.el=Bv.createElement(l,i),Se.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Se.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Bl)||u.startsWith(Ht)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Bl).split(Ht),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Zf:m[1]==="?"?Jf:m[1]==="@"?Xf:Sr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Fv.test(n.tagName)){const c=n.textContent.split(Ht),u=c.length-1;if(u>0){n.textContent=wi?wi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],xs()),Se.nextNode(),a.push({type:2,index:++s});n.append(c[u],xs())}}}else if(n.nodeType===8)if(n.data===Ov)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ht,c+1))!==-1;)a.push({type:7,index:s}),c+=Ht.length-1}s++}}static createElement(t,e){const i=We.createElement("template");return i.innerHTML=t,i}};function Pi(o,t,e=o,i){var n,s,r,h;if(t===ao)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=ro(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Pi(o,a._$AS(o,t.values),a,i)),t}let Kf=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:We).importNode(i,!0);Se.currentNode=s;let r=Se.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new zv(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new Qf(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Se.nextNode(),h++)}return Se.currentNode=We,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},zv=class Vv{constructor(t,e,i,n){var s;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Pi(this,t,e),ro(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==ao&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Wf(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&ro(this._$AH)?this._$AA.nextSibling.data=t:this.$(We.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=zl.createElement(Lv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Kf(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=tu.get(t.strings);return e===void 0&&tu.set(t.strings,e=new zl(t)),e}T(t){Rv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Vv(this.k(xs()),this.k(xs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Sr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Pi(this,t,e,0),r=!ro(t)||t!==this._$AH&&t!==ao,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Pi(this,h[i+a],e,a),l===ao&&(l=this._$AH[a]),r||(r=!ro(l)||l!==this._$AH[a]),l===z?t=z:t!==z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Zf=class extends Sr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};const Yf=wi?wi.emptyScript:"";let Jf=class extends Sr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Yf):this.element.removeAttribute(this.name)}},Xf=class extends Sr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Pi(this,t,e,0))!==null&&i!==void 0?i:z)===ao)return;const n=this._$AH,s=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==z&&(n===z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Qf=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Pi(this,t)}};const eu=Ms.litHtmlPolyfillSupport;eu?.(zl,zv),(($a=Ms.litHtmlVersions)!==null&&$a!==void 0?$a:Ms.litHtmlVersions=[]).push("2.8.0");const t1=y`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yo=window,Qd=Yo.ShadowRoot&&(Yo.ShadyCSS===void 0||Yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jv=Symbol(),iu=new WeakMap;let e1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==jv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Qd&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=iu.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&iu.set(e,t))}return t}toString(){return this.cssText}};const i1=o=>new e1(typeof o=="string"?o:o+"",void 0,jv),n1=(o,t)=>{Qd?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Yo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},nu=Qd?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return i1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ya;const Ts=window,ou=Ts.trustedTypes,o1=ou?ou.emptyScript:"",su=Ts.reactiveElementPolyfillSupport,Vl={toAttribute(o,t){switch(t){case Boolean:o=o?o1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},qv=(o,t)=>t!==o&&(t==t||o==o),fa={attribute:!0,type:String,converter:Vl,reflect:!1,hasChanged:qv},jl="finalized";let yn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=fa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||fa}static finalize(){if(this.hasOwnProperty(jl))return!1;this[jl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(nu(n))}else t!==void 0&&e.push(nu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return n1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=fa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Vl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Vl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||qv)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};yn[jl]=!0,yn.elementProperties=new Map,yn.elementStyles=[],yn.shadowRootOptions={mode:"open"},su?.({ReactiveElement:yn}),((ya=Ts.reactiveElementVersions)!==null&&ya!==void 0?ya:Ts.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _a;const ks=window,Mi=ks.trustedTypes,ru=Mi?Mi.createPolicy("lit-html",{createHTML:o=>o}):void 0,ql="$lit$",Ut=`lit$${(Math.random()+"").slice(9)}$`,Wv="?"+Ut,s1=`<${Wv}>`,Ge=document,Is=()=>Ge.createComment(""),lo=o=>o===null||typeof o!="object"&&typeof o!="function",Gv=Array.isArray,r1=o=>Gv(o)||typeof o?.[Symbol.iterator]=="function",Aa=`[ 	
\f\r]`,fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,au=/-->/g,lu=/>/g,ie=RegExp(`>|${Aa}(?:([^\\s"'>=/]+)(${Aa}*=${Aa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),du=/'/g,hu=/"/g,Kv=/^(?:script|style|textarea|title)$/i,ho=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),cu=new WeakMap,Ee=Ge.createTreeWalker(Ge,129,null,!1);function Zv(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ru!==void 0?ru.createHTML(t):t}const a1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=fn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===fn?d[1]==="!--"?r=au:d[1]!==void 0?r=lu:d[2]!==void 0?(Kv.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ie):d[3]!==void 0&&(r=ie):r===ie?d[0]===">"?(r=n??fn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ie:d[3]==='"'?hu:du):r===hu||r===du?r=ie:r===au||r===lu?r=fn:(r=ie,n=void 0);const p=r===ie&&o[h+1].startsWith("/>")?" ":"";s+=r===fn?a+s1:c>=0?(i.push(l),a.slice(0,c)+ql+a.slice(c)+Ut+p):a+Ut+(c===-2?(i.push(void 0),h):p)}return[Zv(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Wl=class Yv{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=a1(t,e);if(this.el=Yv.createElement(l,i),Ee.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ee.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ql)||u.startsWith(Ut)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+ql).split(Ut),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?d1:m[1]==="?"?c1:m[1]==="@"?u1:Er})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Kv.test(n.tagName)){const c=n.textContent.split(Ut),u=c.length-1;if(u>0){n.textContent=Mi?Mi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Is()),Ee.nextNode(),a.push({type:2,index:++s});n.append(c[u],Is())}}}else if(n.nodeType===8)if(n.data===Wv)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ut,c+1))!==-1;)a.push({type:7,index:s}),c+=Ut.length-1}s++}}static createElement(t,e){const i=Ge.createElement("template");return i.innerHTML=t,i}};function xi(o,t,e=o,i){var n,s,r,h;if(t===ho)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=lo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=xi(o,a._$AS(o,t.values),a,i)),t}let l1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ge).importNode(i,!0);Ee.currentNode=s;let r=Ee.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Jv(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new p1(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Ee.nextNode(),h++)}return Ee.currentNode=Ge,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Jv=class Xv{constructor(t,e,i,n){var s;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xi(this,t,e),lo(t)?t===V||t==null||t===""?(this._$AH!==V&&this._$AR(),this._$AH=V):t!==this._$AH&&t!==ho&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):r1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==V&&lo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ge.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Wl.createElement(Zv(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new l1(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=cu.get(t.strings);return e===void 0&&cu.set(t.strings,e=new Wl(t)),e}T(t){Gv(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Xv(this.k(Is()),this.k(Is()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Er=class{constructor(t,e,i,n,s){this.type=1,this._$AH=V,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=xi(this,t,e,0),r=!lo(t)||t!==this._$AH&&t!==ho,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=xi(this,h[i+a],e,a),l===ho&&(l=this._$AH[a]),r||(r=!lo(l)||l!==this._$AH[a]),l===V?t=V:t!==V&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},d1=class extends Er{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===V?void 0:t}};const h1=Mi?Mi.emptyScript:"";let c1=class extends Er{constructor(){super(...arguments),this.type=4}j(t){t&&t!==V?this.element.setAttribute(this.name,h1):this.element.removeAttribute(this.name)}},u1=class extends Er{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=xi(this,t,e,0))!==null&&i!==void 0?i:V)===ho)return;const n=this._$AH,s=t===V&&n!==V||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==V&&(n===V||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},p1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){xi(this,t)}};const uu=ks.litHtmlPolyfillSupport;uu?.(Wl,Jv),((_a=ks.litHtmlVersions)!==null&&_a!==void 0?_a:ks.litHtmlVersions=[]).push("2.8.0");const v1=y`
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
 */const Jo=window,th=Jo.ShadowRoot&&(Jo.ShadyCSS===void 0||Jo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qv=Symbol(),pu=new WeakMap;let m1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(th&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=pu.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pu.set(e,t))}return t}toString(){return this.cssText}};const $1=o=>new m1(typeof o=="string"?o:o+"",void 0,Qv),g1=(o,t)=>{th?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Jo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},vu=th?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return $1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ba;const Hs=window,mu=Hs.trustedTypes,y1=mu?mu.emptyScript:"",$u=Hs.reactiveElementPolyfillSupport,Gl={toAttribute(o,t){switch(t){case Boolean:o=o?y1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},tm=(o,t)=>t!==o&&(t==t||o==o),Sa={attribute:!0,type:String,converter:Gl,reflect:!1,hasChanged:tm},Kl="finalized";let _n=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Sa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Sa}static finalize(){if(this.hasOwnProperty(Kl))return!1;this[Kl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(vu(n))}else t!==void 0&&e.push(vu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return g1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Sa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Gl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Gl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};_n[Kl]=!0,_n.elementProperties=new Map,_n.elementStyles=[],_n.shadowRootOptions={mode:"open"},$u?.({ReactiveElement:_n}),((ba=Hs.reactiveElementVersions)!==null&&ba!==void 0?ba:Hs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ea;const Us=window,Ti=Us.trustedTypes,gu=Ti?Ti.createPolicy("lit-html",{createHTML:o=>o}):void 0,Zl="$lit$",Nt=`lit$${(Math.random()+"").slice(9)}$`,em="?"+Nt,f1=`<${em}>`,Ke=document,Ns=()=>Ke.createComment(""),co=o=>o===null||typeof o!="object"&&typeof o!="function",im=Array.isArray,_1=o=>im(o)||typeof o?.[Symbol.iterator]=="function",Ca=`[ 	
\f\r]`,An=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yu=/-->/g,fu=/>/g,ne=RegExp(`>|${Ca}(?:([^\\s"'>=/]+)(${Ca}*=${Ca}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_u=/'/g,Au=/"/g,nm=/^(?:script|style|textarea|title)$/i,uo=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),bu=new WeakMap,Ce=Ke.createTreeWalker(Ke,129,null,!1);function om(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return gu!==void 0?gu.createHTML(t):t}const A1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=An;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===An?d[1]==="!--"?r=yu:d[1]!==void 0?r=fu:d[2]!==void 0?(nm.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ne):d[3]!==void 0&&(r=ne):r===ne?d[0]===">"?(r=n??An,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ne:d[3]==='"'?Au:_u):r===Au||r===_u?r=ne:r===yu||r===fu?r=An:(r=ne,n=void 0);const p=r===ne&&o[h+1].startsWith("/>")?" ":"";s+=r===An?a+f1:c>=0?(i.push(l),a.slice(0,c)+Zl+a.slice(c)+Nt+p):a+Nt+(c===-2?(i.push(void 0),h):p)}return[om(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Yl=class sm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=A1(t,e);if(this.el=sm.createElement(l,i),Ce.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ce.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Zl)||u.startsWith(Nt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Zl).split(Nt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?S1:m[1]==="?"?C1:m[1]==="@"?w1:Cr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(nm.test(n.tagName)){const c=n.textContent.split(Nt),u=c.length-1;if(u>0){n.textContent=Ti?Ti.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ns()),Ce.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ns())}}}else if(n.nodeType===8)if(n.data===em)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Nt,c+1))!==-1;)a.push({type:7,index:s}),c+=Nt.length-1}s++}}static createElement(t,e){const i=Ke.createElement("template");return i.innerHTML=t,i}};function ki(o,t,e=o,i){var n,s,r,h;if(t===uo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=co(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ki(o,a._$AS(o,t.values),a,i)),t}let b1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ke).importNode(i,!0);Ce.currentNode=s;let r=Ce.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new rm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new P1(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Ce.nextNode(),h++)}return Ce.currentNode=Ke,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},rm=class am{constructor(t,e,i,n){var s;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ki(this,t,e),co(t)?t===j||t==null||t===""?(this._$AH!==j&&this._$AR(),this._$AH=j):t!==this._$AH&&t!==uo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):_1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==j&&co(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ke.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Yl.createElement(om(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new b1(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=bu.get(t.strings);return e===void 0&&bu.set(t.strings,e=new Yl(t)),e}T(t){im(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new am(this.k(Ns()),this.k(Ns()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Cr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=j,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ki(this,t,e,0),r=!co(t)||t!==this._$AH&&t!==uo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ki(this,h[i+a],e,a),l===uo&&(l=this._$AH[a]),r||(r=!co(l)||l!==this._$AH[a]),l===j?t=j:t!==j&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},S1=class extends Cr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===j?void 0:t}};const E1=Ti?Ti.emptyScript:"";let C1=class extends Cr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==j?this.element.setAttribute(this.name,E1):this.element.removeAttribute(this.name)}},w1=class extends Cr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ki(this,t,e,0))!==null&&i!==void 0?i:j)===uo)return;const n=this._$AH,s=t===j&&n!==j||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==j&&(n===j||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},P1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ki(this,t)}};const Su=Us.litHtmlPolyfillSupport;Su?.(Yl,rm),((Ea=Us.litHtmlVersions)!==null&&Ea!==void 0?Ea:Us.litHtmlVersions=[]).push("2.8.0");const M1=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,Eu={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let k=class extends U{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,n])=>{const s=i.checkValidity();e=e&&s,s||(n.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return y`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:t1})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:M1})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:v1,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:De.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return y`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,n,s,r,h,a,l,d,c;const u=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:u,this.selectedCountry==="US"?((n=this.postalBadgedInput)===null||n===void 0||n.setAttribute("required",""),(s=this.postalCodeField)===null||s===void 0||s.setAttribute("required",""),(r=this.regionBadgedInput)===null||r===void 0||r.setAttribute("required",""),(h=this.regionField)===null||h===void 0||h.setAttribute("required","")):((a=this.postalBadgedInput)===null||a===void 0||a.removeAttribute("required"),(l=this.postalCodeField)===null||l===void 0||l.removeAttribute("required"),(d=this.regionBadgedInput)===null||d===void 0||d.removeAttribute("required"),(c=this.regionField)===null||c===void 0||c.removeAttribute("required"))}}
        >
          ${Object.keys(Eu).map(t=>{const e=Eu[t];return y`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n,s;const r=(e=t.required)!==null&&e!==void 0?e:!0,h=(i=t.fieldType)!==null&&i!==void 0?i:"text",a=(n=t.iconSpaceOption)!==null&&n!==void 0?n:De.LeaveSpace;return y`
      <badged-input
        class=${t.id}
        .icon=${t.icon}
        .iconSpaceOption=${a}
        ?required=${t.required}
      >
        <label for=${t.id}>${t.placeholder}</label>
        <input
          type=${h}
          id=${t.id}
          class="donation-contact-form-input"
          name=${t.name}
          aria-label=${t.placeholder}
          placeholder=${t.placeholder}
          maxlength=${jc(t.maxlength)}
          autocomplete=${(s=t.autocomplete)!==null&&s!==void 0?s:"on"}
          pattern=${jc(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${r}
        />
      </badged-input>
    `}get donorContactInfo(){return new cg({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new Uo({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new No({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=$`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=$`var(--badgedInputIconSpacerWidth, 5rem)`,i=$`var(--fieldSetSpacing, 1rem)`,n=$`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,s=$`var(--contactFieldFontSize, 1.6rem)`,r=$`var(--inputFieldFontColor, #333)`,h=$`calc(100% - ${e})`,a=$`calc(100% - ${t})`;return y`
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
          width: ${h};
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
          width: ${h};
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
    `}};v([x("badged-input.donation-contact-form-email")],k.prototype,"emailBadgedInput",void 0);v([x("#donation-contact-form-email")],k.prototype,"emailField",void 0);v([x("badged-input.donation-contact-form-first-name")],k.prototype,"firstNameBadgedInput",void 0);v([x("#donation-contact-form-first-name")],k.prototype,"firstNameField",void 0);v([x("badged-input.donation-contact-form-last-name")],k.prototype,"lastNameBadgedInput",void 0);v([x("#donation-contact-form-last-name")],k.prototype,"lastNameField",void 0);v([x("badged-input.donation-contact-form-postal-code")],k.prototype,"postalBadgedInput",void 0);v([x("#donation-contact-form-postal-code")],k.prototype,"postalCodeField",void 0);v([x("badged-input.donation-contact-form-street-address")],k.prototype,"streetAddressBadgedInput",void 0);v([x("#donation-contact-form-street-address")],k.prototype,"streetAddressField",void 0);v([x("badged-input.donation-contact-form-extended-address")],k.prototype,"extendedAddressBadgedInput",void 0);v([x("#donation-contact-form-extended-address")],k.prototype,"extendedAddressField",void 0);v([x("badged-input.donation-contact-form-locality")],k.prototype,"localityBadgedInput",void 0);v([x("#donation-contact-form-locality")],k.prototype,"localityField",void 0);v([x("badged-input.donation-contact-form-region")],k.prototype,"regionBadgedInput",void 0);v([x("#donation-contact-form-region")],k.prototype,"regionField",void 0);v([x("#donation-contact-form-countryCodeAlpha2")],k.prototype,"countryCodeAlpha2Field",void 0);v([x("#donation-contact-form-error-message")],k.prototype,"errorMessage",void 0);v([x("form")],k.prototype,"form",void 0);v([A({type:String})],k.prototype,"selectedCountry",void 0);v([A({type:String})],k.prototype,"donorEmail",void 0);k=v([At("contact-form")],k);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xo=window,eh=Xo.ShadowRoot&&(Xo.ShadyCSS===void 0||Xo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lm=Symbol(),Cu=new WeakMap;let x1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==lm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(eh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Cu.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Cu.set(e,t))}return t}toString(){return this.cssText}};const T1=o=>new x1(typeof o=="string"?o:o+"",void 0,lm),k1=(o,t)=>{eh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Xo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},wu=eh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return T1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wa;const Ds=window,Pu=Ds.trustedTypes,I1=Pu?Pu.emptyScript:"",Mu=Ds.reactiveElementPolyfillSupport,Jl={toAttribute(o,t){switch(t){case Boolean:o=o?I1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},dm=(o,t)=>t!==o&&(t==t||o==o),Pa={attribute:!0,type:String,converter:Jl,reflect:!1,hasChanged:dm},Xl="finalized";let bn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Pa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Pa}static finalize(){if(this.hasOwnProperty(Xl))return!1;this[Xl]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(wu(n))}else t!==void 0&&e.push(wu(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return k1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Pa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Jl).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Jl;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||dm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};bn[Xl]=!0,bn.elementProperties=new Map,bn.elementStyles=[],bn.shadowRootOptions={mode:"open"},Mu?.({ReactiveElement:bn}),((wa=Ds.reactiveElementVersions)!==null&&wa!==void 0?wa:Ds.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ma;const Os=window,Ii=Os.trustedTypes,xu=Ii?Ii.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ql="$lit$",Dt=`lit$${(Math.random()+"").slice(9)}$`,hm="?"+Dt,H1=`<${hm}>`,Ze=document,Rs=()=>Ze.createComment(""),po=o=>o===null||typeof o!="object"&&typeof o!="function",cm=Array.isArray,U1=o=>cm(o)||typeof o?.[Symbol.iterator]=="function",xa=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tu=/-->/g,ku=/>/g,oe=RegExp(`>|${xa}(?:([^\\s"'>=/]+)(${xa}*=${xa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Iu=/'/g,Hu=/"/g,um=/^(?:script|style|textarea|title)$/i,vo=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),Uu=new WeakMap,we=Ze.createTreeWalker(Ze,129,null,!1);function pm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return xu!==void 0?xu.createHTML(t):t}const N1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Sn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Sn?d[1]==="!--"?r=Tu:d[1]!==void 0?r=ku:d[2]!==void 0?(um.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=oe):d[3]!==void 0&&(r=oe):r===oe?d[0]===">"?(r=n??Sn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?oe:d[3]==='"'?Hu:Iu):r===Hu||r===Iu?r=oe:r===Tu||r===ku?r=Sn:(r=oe,n=void 0);const p=r===oe&&o[h+1].startsWith("/>")?" ":"";s+=r===Sn?a+H1:c>=0?(i.push(l),a.slice(0,c)+Ql+a.slice(c)+Dt+p):a+Dt+(c===-2?(i.push(void 0),h):p)}return[pm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let td=class vm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=N1(t,e);if(this.el=vm.createElement(l,i),we.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=we.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Ql)||u.startsWith(Dt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Ql).split(Dt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?O1:m[1]==="?"?F1:m[1]==="@"?L1:wr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(um.test(n.tagName)){const c=n.textContent.split(Dt),u=c.length-1;if(u>0){n.textContent=Ii?Ii.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Rs()),we.nextNode(),a.push({type:2,index:++s});n.append(c[u],Rs())}}}else if(n.nodeType===8)if(n.data===hm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Dt,c+1))!==-1;)a.push({type:7,index:s}),c+=Dt.length-1}s++}}static createElement(t,e){const i=Ze.createElement("template");return i.innerHTML=t,i}};function Hi(o,t,e=o,i){var n,s,r,h;if(t===vo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=po(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Hi(o,a._$AS(o,t.values),a,i)),t}let D1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ze).importNode(i,!0);we.currentNode=s;let r=we.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new mm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new B1(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=we.nextNode(),h++)}return we.currentNode=Ze,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},mm=class $m{constructor(t,e,i,n){var s;this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Hi(this,t,e),po(t)?t===q||t==null||t===""?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==vo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):U1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==q&&po(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ze.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=td.createElement(pm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new D1(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Uu.get(t.strings);return e===void 0&&Uu.set(t.strings,e=new td(t)),e}T(t){cm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new $m(this.k(Rs()),this.k(Rs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},wr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Hi(this,t,e,0),r=!po(t)||t!==this._$AH&&t!==vo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Hi(this,h[i+a],e,a),l===vo&&(l=this._$AH[a]),r||(r=!po(l)||l!==this._$AH[a]),l===q?t=q:t!==q&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},O1=class extends wr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}};const R1=Ii?Ii.emptyScript:"";let F1=class extends wr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==q?this.element.setAttribute(this.name,R1):this.element.removeAttribute(this.name)}},L1=class extends wr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Hi(this,t,e,0))!==null&&i!==void 0?i:q)===vo)return;const n=this._$AH,s=t===q&&n!==q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==q&&(n===q||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},B1=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Hi(this,t)}};const Nu=Os.litHtmlPolyfillSupport;Nu?.(td,mm),((Ma=Os.litHtmlVersions)!==null&&Ma!==void 0?Ma:Os.litHtmlVersions=[]).push("2.8.0");const gm=y`
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
 */const Qo=window,ih=Qo.ShadowRoot&&(Qo.ShadyCSS===void 0||Qo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ym=Symbol(),Du=new WeakMap;let z1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ym)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ih&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Du.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Du.set(e,t))}return t}toString(){return this.cssText}};const V1=o=>new z1(typeof o=="string"?o:o+"",void 0,ym),j1=(o,t)=>{ih?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Qo.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Ou=ih?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return V1(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ta;const Fs=window,Ru=Fs.trustedTypes,q1=Ru?Ru.emptyScript:"",Fu=Fs.reactiveElementPolyfillSupport,ed={toAttribute(o,t){switch(t){case Boolean:o=o?q1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},fm=(o,t)=>t!==o&&(t==t||o==o),ka={attribute:!0,type:String,converter:ed,reflect:!1,hasChanged:fm},id="finalized";let En=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ka){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ka}static finalize(){if(this.hasOwnProperty(id))return!1;this[id]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Ou(n))}else t!==void 0&&e.push(Ou(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return j1(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ka){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ed).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ed;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||fm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};En[id]=!0,En.elementProperties=new Map,En.elementStyles=[],En.shadowRootOptions={mode:"open"},Fu?.({ReactiveElement:En}),((Ta=Fs.reactiveElementVersions)!==null&&Ta!==void 0?Ta:Fs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ia;const Ls=window,Ui=Ls.trustedTypes,Lu=Ui?Ui.createPolicy("lit-html",{createHTML:o=>o}):void 0,nd="$lit$",Ot=`lit$${(Math.random()+"").slice(9)}$`,_m="?"+Ot,W1=`<${_m}>`,Ye=document,Bs=()=>Ye.createComment(""),mo=o=>o===null||typeof o!="object"&&typeof o!="function",Am=Array.isArray,G1=o=>Am(o)||typeof o?.[Symbol.iterator]=="function",Ha=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bu=/-->/g,zu=/>/g,se=RegExp(`>|${Ha}(?:([^\\s"'>=/]+)(${Ha}*=${Ha}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vu=/'/g,ju=/"/g,bm=/^(?:script|style|textarea|title)$/i,$o=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),qu=new WeakMap,Pe=Ye.createTreeWalker(Ye,129,null,!1);function Sm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lu!==void 0?Lu.createHTML(t):t}const K1=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Cn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Cn?d[1]==="!--"?r=Bu:d[1]!==void 0?r=zu:d[2]!==void 0?(bm.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=se):d[3]!==void 0&&(r=se):r===se?d[0]===">"?(r=n??Cn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?se:d[3]==='"'?ju:Vu):r===ju||r===Vu?r=se:r===Bu||r===zu?r=Cn:(r=se,n=void 0);const p=r===se&&o[h+1].startsWith("/>")?" ":"";s+=r===Cn?a+W1:c>=0?(i.push(l),a.slice(0,c)+nd+a.slice(c)+Ot+p):a+Ot+(c===-2?(i.push(void 0),h):p)}return[Sm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let od=class Em{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=K1(t,e);if(this.el=Em.createElement(l,i),Pe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Pe.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(nd)||u.startsWith(Ot)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+nd).split(Ot),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?Y1:m[1]==="?"?X1:m[1]==="@"?Q1:Pr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(bm.test(n.tagName)){const c=n.textContent.split(Ot),u=c.length-1;if(u>0){n.textContent=Ui?Ui.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Bs()),Pe.nextNode(),a.push({type:2,index:++s});n.append(c[u],Bs())}}}else if(n.nodeType===8)if(n.data===_m)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ot,c+1))!==-1;)a.push({type:7,index:s}),c+=Ot.length-1}s++}}static createElement(t,e){const i=Ye.createElement("template");return i.innerHTML=t,i}};function Ni(o,t,e=o,i){var n,s,r,h;if(t===$o)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=mo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ni(o,a._$AS(o,t.values),a,i)),t}let Z1=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Ye).importNode(i,!0);Pe.currentNode=s;let r=Pe.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Cm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new t_(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Pe.nextNode(),h++)}return Pe.currentNode=Ye,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Cm=class wm{constructor(t,e,i,n){var s;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ni(this,t,e),mo(t)?t===W||t==null||t===""?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==$o&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):G1(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==W&&mo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Ye.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=od.createElement(Sm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new Z1(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=qu.get(t.strings);return e===void 0&&qu.set(t.strings,e=new od(t)),e}T(t){Am(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new wm(this.k(Bs()),this.k(Bs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Pr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ni(this,t,e,0),r=!mo(t)||t!==this._$AH&&t!==$o,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ni(this,h[i+a],e,a),l===$o&&(l=this._$AH[a]),r||(r=!mo(l)||l!==this._$AH[a]),l===W?t=W:t!==W&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y1=class extends Pr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}};const J1=Ui?Ui.emptyScript:"";let X1=class extends Pr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==W?this.element.setAttribute(this.name,J1):this.element.removeAttribute(this.name)}},Q1=class extends Pr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ni(this,t,e,0))!==null&&i!==void 0?i:W)===$o)return;const n=this._$AH,s=t===W&&n!==W||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==W&&(n===W||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},t_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ni(this,t)}};const Wu=Ls.litHtmlPolyfillSupport;Wu?.(od,Cm),((Ia=Ls.litHtmlVersions)!==null&&Ia!==void 0?Ia:Ls.litHtmlVersions=[]).push("2.8.0");const Pm=y`
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
 */const ts=window,nh=ts.ShadowRoot&&(ts.ShadyCSS===void 0||ts.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mm=Symbol(),Gu=new WeakMap;let e_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Mm)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(nh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Gu.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Gu.set(e,t))}return t}toString(){return this.cssText}};const i_=o=>new e_(typeof o=="string"?o:o+"",void 0,Mm),n_=(o,t)=>{nh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ts.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Ku=nh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return i_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ua;const zs=window,Zu=zs.trustedTypes,o_=Zu?Zu.emptyScript:"",Yu=zs.reactiveElementPolyfillSupport,sd={toAttribute(o,t){switch(t){case Boolean:o=o?o_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xm=(o,t)=>t!==o&&(t==t||o==o),Na={attribute:!0,type:String,converter:sd,reflect:!1,hasChanged:xm},rd="finalized";let wn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Na){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Na}static finalize(){if(this.hasOwnProperty(rd))return!1;this[rd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Ku(n))}else t!==void 0&&e.push(Ku(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return n_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Na){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:sd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:sd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};wn[rd]=!0,wn.elementProperties=new Map,wn.elementStyles=[],wn.shadowRootOptions={mode:"open"},Yu?.({ReactiveElement:wn}),((Ua=zs.reactiveElementVersions)!==null&&Ua!==void 0?Ua:zs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Da;const Vs=window,Di=Vs.trustedTypes,Ju=Di?Di.createPolicy("lit-html",{createHTML:o=>o}):void 0,ad="$lit$",Rt=`lit$${(Math.random()+"").slice(9)}$`,Tm="?"+Rt,s_=`<${Tm}>`,Je=document,js=()=>Je.createComment(""),go=o=>o===null||typeof o!="object"&&typeof o!="function",km=Array.isArray,r_=o=>km(o)||typeof o?.[Symbol.iterator]=="function",Oa=`[ 	
\f\r]`,Pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xu=/-->/g,Qu=/>/g,re=RegExp(`>|${Oa}(?:([^\\s"'>=/]+)(${Oa}*=${Oa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tp=/'/g,ep=/"/g,Im=/^(?:script|style|textarea|title)$/i,yo=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),ip=new WeakMap,Me=Je.createTreeWalker(Je,129,null,!1);function Hm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ju!==void 0?Ju.createHTML(t):t}const a_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Pn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Pn?d[1]==="!--"?r=Xu:d[1]!==void 0?r=Qu:d[2]!==void 0?(Im.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=re):d[3]!==void 0&&(r=re):r===re?d[0]===">"?(r=n??Pn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?re:d[3]==='"'?ep:tp):r===ep||r===tp?r=re:r===Xu||r===Qu?r=Pn:(r=re,n=void 0);const p=r===re&&o[h+1].startsWith("/>")?" ":"";s+=r===Pn?a+s_:c>=0?(i.push(l),a.slice(0,c)+ad+a.slice(c)+Rt+p):a+Rt+(c===-2?(i.push(void 0),h):p)}return[Hm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let ld=class Um{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=a_(t,e);if(this.el=Um.createElement(l,i),Me.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Me.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(ad)||u.startsWith(Rt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+ad).split(Rt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?d_:m[1]==="?"?c_:m[1]==="@"?u_:Mr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Im.test(n.tagName)){const c=n.textContent.split(Rt),u=c.length-1;if(u>0){n.textContent=Di?Di.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],js()),Me.nextNode(),a.push({type:2,index:++s});n.append(c[u],js())}}}else if(n.nodeType===8)if(n.data===Tm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Rt,c+1))!==-1;)a.push({type:7,index:s}),c+=Rt.length-1}s++}}static createElement(t,e){const i=Je.createElement("template");return i.innerHTML=t,i}};function Oi(o,t,e=o,i){var n,s,r,h;if(t===yo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=go(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Oi(o,a._$AS(o,t.values),a,i)),t}let l_=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Je).importNode(i,!0);Me.currentNode=s;let r=Me.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Nm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new p_(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Me.nextNode(),h++)}return Me.currentNode=Je,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Nm=class Dm{constructor(t,e,i,n){var s;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Oi(this,t,e),go(t)?t===G||t==null||t===""?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==yo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):r_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==G&&go(this._$AH)?this._$AA.nextSibling.data=t:this.$(Je.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ld.createElement(Hm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new l_(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=ip.get(t.strings);return e===void 0&&ip.set(t.strings,e=new ld(t)),e}T(t){km(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Dm(this.k(js()),this.k(js()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Mr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Oi(this,t,e,0),r=!go(t)||t!==this._$AH&&t!==yo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Oi(this,h[i+a],e,a),l===yo&&(l=this._$AH[a]),r||(r=!go(l)||l!==this._$AH[a]),l===G?t=G:t!==G&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},d_=class extends Mr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}};const h_=Di?Di.emptyScript:"";let c_=class extends Mr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==G?this.element.setAttribute(this.name,h_):this.element.removeAttribute(this.name)}},u_=class extends Mr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Oi(this,t,e,0))!==null&&i!==void 0?i:G)===yo)return;const n=this._$AH,s=t===G&&n!==G||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==G&&(n===G||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},p_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Oi(this,t)}};const np=Vs.litHtmlPolyfillSupport;np?.(ld,Nm),((Da=Vs.litHtmlVersions)!==null&&Da!==void 0?Da:Vs.litHtmlVersions=[]).push("2.8.0");const xr=y`
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
 */const es=window,oh=es.ShadowRoot&&(es.ShadyCSS===void 0||es.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Om=Symbol(),op=new WeakMap;let v_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Om)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(oh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=op.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&op.set(e,t))}return t}toString(){return this.cssText}};const m_=o=>new v_(typeof o=="string"?o:o+"",void 0,Om),$_=(o,t)=>{oh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=es.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},sp=oh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return m_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ra;const qs=window,rp=qs.trustedTypes,g_=rp?rp.emptyScript:"",ap=qs.reactiveElementPolyfillSupport,dd={toAttribute(o,t){switch(t){case Boolean:o=o?g_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Rm=(o,t)=>t!==o&&(t==t||o==o),Fa={attribute:!0,type:String,converter:dd,reflect:!1,hasChanged:Rm},hd="finalized";let Mn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Fa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Fa}static finalize(){if(this.hasOwnProperty(hd))return!1;this[hd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(sp(n))}else t!==void 0&&e.push(sp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return $_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Fa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:dd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:dd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Rm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Mn[hd]=!0,Mn.elementProperties=new Map,Mn.elementStyles=[],Mn.shadowRootOptions={mode:"open"},ap?.({ReactiveElement:Mn}),((Ra=qs.reactiveElementVersions)!==null&&Ra!==void 0?Ra:qs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var La;const Ws=window,Ri=Ws.trustedTypes,lp=Ri?Ri.createPolicy("lit-html",{createHTML:o=>o}):void 0,cd="$lit$",Ft=`lit$${(Math.random()+"").slice(9)}$`,Fm="?"+Ft,y_=`<${Fm}>`,Xe=document,Gs=()=>Xe.createComment(""),fo=o=>o===null||typeof o!="object"&&typeof o!="function",Lm=Array.isArray,f_=o=>Lm(o)||typeof o?.[Symbol.iterator]=="function",Ba=`[ 	
\f\r]`,xn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dp=/-->/g,hp=/>/g,ae=RegExp(`>|${Ba}(?:([^\\s"'>=/]+)(${Ba}*=${Ba}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),cp=/'/g,up=/"/g,Bm=/^(?:script|style|textarea|title)$/i,_o=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),pp=new WeakMap,xe=Xe.createTreeWalker(Xe,129,null,!1);function zm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return lp!==void 0?lp.createHTML(t):t}const __=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=xn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===xn?d[1]==="!--"?r=dp:d[1]!==void 0?r=hp:d[2]!==void 0?(Bm.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ae):d[3]!==void 0&&(r=ae):r===ae?d[0]===">"?(r=n??xn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ae:d[3]==='"'?up:cp):r===up||r===cp?r=ae:r===dp||r===hp?r=xn:(r=ae,n=void 0);const p=r===ae&&o[h+1].startsWith("/>")?" ":"";s+=r===xn?a+y_:c>=0?(i.push(l),a.slice(0,c)+cd+a.slice(c)+Ft+p):a+Ft+(c===-2?(i.push(void 0),h):p)}return[zm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let ud=class Vm{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=__(t,e);if(this.el=Vm.createElement(l,i),xe.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=xe.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(cd)||u.startsWith(Ft)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+cd).split(Ft),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?b_:m[1]==="?"?E_:m[1]==="@"?C_:Tr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Bm.test(n.tagName)){const c=n.textContent.split(Ft),u=c.length-1;if(u>0){n.textContent=Ri?Ri.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Gs()),xe.nextNode(),a.push({type:2,index:++s});n.append(c[u],Gs())}}}else if(n.nodeType===8)if(n.data===Fm)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Ft,c+1))!==-1;)a.push({type:7,index:s}),c+=Ft.length-1}s++}}static createElement(t,e){const i=Xe.createElement("template");return i.innerHTML=t,i}};function Fi(o,t,e=o,i){var n,s,r,h;if(t===_o)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=fo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Fi(o,a._$AS(o,t.values),a,i)),t}let A_=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Xe).importNode(i,!0);xe.currentNode=s;let r=xe.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new jm(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new w_(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=xe.nextNode(),h++)}return xe.currentNode=Xe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},jm=class qm{constructor(t,e,i,n){var s;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Fi(this,t,e),fo(t)?t===K||t==null||t===""?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==_o&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):f_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==K&&fo(this._$AH)?this._$AA.nextSibling.data=t:this.$(Xe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ud.createElement(zm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new A_(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=pp.get(t.strings);return e===void 0&&pp.set(t.strings,e=new ud(t)),e}T(t){Lm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new qm(this.k(Gs()),this.k(Gs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Tr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Fi(this,t,e,0),r=!fo(t)||t!==this._$AH&&t!==_o,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Fi(this,h[i+a],e,a),l===_o&&(l=this._$AH[a]),r||(r=!fo(l)||l!==this._$AH[a]),l===K?t=K:t!==K&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},b_=class extends Tr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===K?void 0:t}};const S_=Ri?Ri.emptyScript:"";let E_=class extends Tr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==K?this.element.setAttribute(this.name,S_):this.element.removeAttribute(this.name)}},C_=class extends Tr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Fi(this,t,e,0))!==null&&i!==void 0?i:K)===_o)return;const n=this._$AH,s=t===K&&n!==K||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==K&&(n===K||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},w_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Fi(this,t)}};const vp=Ws.litHtmlPolyfillSupport;vp?.(ud,jm),((La=Ws.litHtmlVersions)!==null&&La!==void 0?La:Ws.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P_=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const M_=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},x_=(o,t,e)=>{t.constructor.createProperty(e,o)};function bt(o){return(t,e)=>e!==void 0?x_(o,t,e):M_(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wm(o){return bt({...o,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T_=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(h){o(h,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gm(o,t){return T_({descriptor:e=>({get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var za;((za=window.HTMLSlotElement)===null||za===void 0?void 0:za.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=window,sh=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Km=Symbol(),mp=new WeakMap;let k_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Km)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(sh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=mp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&mp.set(e,t))}return t}toString(){return this.cssText}};const I_=o=>new k_(typeof o=="string"?o:o+"",void 0,Km),H_=(o,t)=>{sh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=is.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},$p=sh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return I_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Va;const Ks=window,gp=Ks.trustedTypes,U_=gp?gp.emptyScript:"",yp=Ks.reactiveElementPolyfillSupport,pd={toAttribute(o,t){switch(t){case Boolean:o=o?U_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Zm=(o,t)=>t!==o&&(t==t||o==o),ja={attribute:!0,type:String,converter:pd,reflect:!1,hasChanged:Zm},vd="finalized";let Tn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=ja){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ja}static finalize(){if(this.hasOwnProperty(vd))return!1;this[vd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift($p(n))}else t!==void 0&&e.push($p(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return H_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ja){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:pd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:pd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Zm)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Tn[vd]=!0,Tn.elementProperties=new Map,Tn.elementStyles=[],Tn.shadowRootOptions={mode:"open"},yp?.({ReactiveElement:Tn}),((Va=Ks.reactiveElementVersions)!==null&&Va!==void 0?Va:Ks.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qa;const Zs=window,Li=Zs.trustedTypes,fp=Li?Li.createPolicy("lit-html",{createHTML:o=>o}):void 0,md="$lit$",Lt=`lit$${(Math.random()+"").slice(9)}$`,Ym="?"+Lt,N_=`<${Ym}>`,Qe=document,Ys=()=>Qe.createComment(""),Ao=o=>o===null||typeof o!="object"&&typeof o!="function",Jm=Array.isArray,D_=o=>Jm(o)||typeof o?.[Symbol.iterator]=="function",Wa=`[ 	
\f\r]`,kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_p=/-->/g,Ap=/>/g,le=RegExp(`>|${Wa}(?:([^\\s"'>=/]+)(${Wa}*=${Wa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bp=/'/g,Sp=/"/g,Xm=/^(?:script|style|textarea|title)$/i,bo=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),Ep=new WeakMap,Te=Qe.createTreeWalker(Qe,129,null,!1);function Qm(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return fp!==void 0?fp.createHTML(t):t}const O_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=kn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===kn?d[1]==="!--"?r=_p:d[1]!==void 0?r=Ap:d[2]!==void 0?(Xm.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=le):d[3]!==void 0&&(r=le):r===le?d[0]===">"?(r=n??kn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?le:d[3]==='"'?Sp:bp):r===Sp||r===bp?r=le:r===_p||r===Ap?r=kn:(r=le,n=void 0);const p=r===le&&o[h+1].startsWith("/>")?" ":"";s+=r===kn?a+N_:c>=0?(i.push(l),a.slice(0,c)+md+a.slice(c)+Lt+p):a+Lt+(c===-2?(i.push(void 0),h):p)}return[Qm(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let $d=class t${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=O_(t,e);if(this.el=t$.createElement(l,i),Te.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Te.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(md)||u.startsWith(Lt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+md).split(Lt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?F_:m[1]==="?"?B_:m[1]==="@"?z_:kr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(Xm.test(n.tagName)){const c=n.textContent.split(Lt),u=c.length-1;if(u>0){n.textContent=Li?Li.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Ys()),Te.nextNode(),a.push({type:2,index:++s});n.append(c[u],Ys())}}}else if(n.nodeType===8)if(n.data===Ym)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Lt,c+1))!==-1;)a.push({type:7,index:s}),c+=Lt.length-1}s++}}static createElement(t,e){const i=Qe.createElement("template");return i.innerHTML=t,i}};function Bi(o,t,e=o,i){var n,s,r,h;if(t===bo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Ao(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Bi(o,a._$AS(o,t.values),a,i)),t}let R_=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Qe).importNode(i,!0);Te.currentNode=s;let r=Te.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new e$(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new V_(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Te.nextNode(),h++)}return Te.currentNode=Qe,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},e$=class i${constructor(t,e,i,n){var s;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Bi(this,t,e),Ao(t)?t===Z||t==null||t===""?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==bo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):D_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&Ao(this._$AH)?this._$AA.nextSibling.data=t:this.$(Qe.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=$d.createElement(Qm(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new R_(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Ep.get(t.strings);return e===void 0&&Ep.set(t.strings,e=new $d(t)),e}T(t){Jm(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new i$(this.k(Ys()),this.k(Ys()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},kr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Bi(this,t,e,0),r=!Ao(t)||t!==this._$AH&&t!==bo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Bi(this,h[i+a],e,a),l===bo&&(l=this._$AH[a]),r||(r=!Ao(l)||l!==this._$AH[a]),l===Z?t=Z:t!==Z&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F_=class extends kr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}};const L_=Li?Li.emptyScript:"";let B_=class extends kr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Z?this.element.setAttribute(this.name,L_):this.element.removeAttribute(this.name)}},z_=class extends kr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Bi(this,t,e,0))!==null&&i!==void 0?i:Z)===bo)return;const n=this._$AH,s=t===Z&&n!==Z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Z&&(n===Z||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},V_=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Bi(this,t)}};const Cp=Zs.litHtmlPolyfillSupport;Cp?.($d,e$),((qa=Zs.litHtmlVersions)!==null&&qa!==void 0?qa:Zs.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j_=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q_=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},W_=(o,t,e)=>{t.constructor.createProperty(e,o)};function rh(o){return(t,e)=>e!==void 0?W_(o,t,e):q_(o,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ga;((Ga=window.HTMLSlotElement)===null||Ga===void 0?void 0:Ga.prototype.assignedElements)!=null;var zi;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(zi||(zi={}));let So=class extends U{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=zi.ShowBadge}render(){return y`
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
    `}static get styles(){const t=$`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=$`var(--formSectionBadgeMargin, 1rem)`,i=$`var(--formSectionBadgeBackgroundColor, #333)`,n=$`var(--formSectionBadgeRadius, 1.2rem)`,s=$`calc(${n} * 2)`,r=$`var(--formSectionBadgeFontSize, 1.8rem)`,h=$`var(--formSectionBadgeFontWeight, bold)`,a=$`var(--formSectionBadgeFontColor, #fff)`,l=$`var(--formSectionTitleFontSize, 1.8rem)`,d=$`var(--formSectionTitleFontWeight, bold)`,c=$`var(--formSectionContentBackgroundColor, transparent)`,u=$`var(--formSectionTextColor, #333)`,p=$`calc(${n} * 2)`;return $`
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
        font-weight: ${h};
        font-size: ${r};
      }

      .title {
        line-height: ${p};
        margin-bottom: 0.5rem;
        font-size: ${l};
        font-weight: ${d};
      }
    `}};v([rh({type:String})],So.prototype,"sectionBadge",void 0);v([rh({type:String})],So.prototype,"headline",void 0);v([rh({type:String})],So.prototype,"badgeMode",void 0);So=v([j_("donation-form-section")],So);var zn;(function(o){o.HideNumbers="hidenumbers",o.ShowNumbers="shownumbers"})(zn||(zn={}));var yt;(function(o){o.DonationType="donationType",o.Amount="amount"})(yt||(yt={}));var ct;(function(o){o.ValidDonationAmount="valid_donation_amount",o.InvalidDonationAmount="invalid_donation_amount",o.DonationTooHigh="donation_too_high",o.DonationTooLow="donation_too_low"})(ct||(ct={}));var ut;(function(o){o.Button="button",o.Checkbox="checkbox",o.Hide="hide"})(ut||(ut={}));var Wt;(function(o){o.SingleLine="single-line",o.MultiLine="multi-line"})(Wt||(Wt={}));let ot=class extends U{constructor(){super(...arguments),this.donationInfo=M0,this.stepNumberMode=zn.ShowNumbers,this.amountOptions=vr,this.amountSelectionLayout=Wt.MultiLine,this.frequencySelectionMode=ut.Button,this.customAmountMode="display",this.coverFeesCheckboxMode="display",this.amountTitleDisplayMode="default",this.customAmountSelected=!1,this.currencyValidator=new sv}render(){const e=this.amountTitleDisplayMode==="default"?"Choose an amount (USD)":"";return y`
      ${this.frequencySelectionMode===ut.Button?this.frequencyButtonsTemplate:T}

      <donation-form-section
        sectionBadge="${this.amountSelectionSectionNumber}"
        headline=${e}
        badgeMode=${this.formSectionNumberMode}
      >
        ${this.amountTitleDisplayMode==="slot"?y`<slot name="edit-donation-amount-title"></slot>`:T}
        <ul class="amount-selector">
          ${this.presetAmountsTemplate}
          ${this.customAmountMode==="display"?y`<li class="custom-amount">${this.customAmountTemplate}</li>`:T}
        </ul>

        <div class="errors">${this.error}</div>

        ${this.coverFeesCheckboxMode==="display"?y` <div class="checkbox-options">
              ${this.coverFeesCheckboxTemplate}
              ${this.frequencySelectionMode===ut.Checkbox?this.frequencyCheckboxTemplate:T}
            </div>`:T}
      </donation-form-section>
    `}updated(t){t.has("customAmountSelected")&&this.customAmountButton&&(this.customAmountButton.checked=this.customAmountSelected),t.has("amountOptions")&&(this.customAmountSelected=!1,this.updateSelectedDonationInfo(),this.setupAmountColumnsLayoutConfig()),t.has("amountSelectionLayout")&&this.setupAmountColumnsLayoutConfig(),t.has("donationInfo")&&this.updateSelectedDonationInfo(),t.has("defaultSelectedAmount")&&this.defaultSelectedAmount!==void 0&&(this.customAmountSelected=!1,this.donationInfo=new N({donationType:this.donationInfo.donationType,amount:this.defaultSelectedAmount,coverFees:this.donationInfo.coverFees}))}get frequencyButtonsTemplate(){return y`
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
          .checked=${this.donationInfo.donationType===C.Monthly}
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
    `}get amountSelectionSectionNumber(){return this.frequencySelectionMode===ut.Button?2:1}get formSectionNumberMode(){switch(this.stepNumberMode){case zn.ShowNumbers:return zi.ShowBadge;case zn.HideNumbers:return zi.HideBadge}}setupAmountColumnsLayoutConfig(){const t=this.customAmountMode==="hide"&&this.coverFeesCheckboxMode==="hide"&&this.frequencySelectionMode===ut.Hide,e=this.amountOptions.length;let i=5,n=3;switch(e){case 7:i=5,n=3;break;case 6:i=4,n=2;break;case 5:i=4,n=3;break;case 4:if(t){i=4,n=0;break}i=3,n=2;break;case 3:i=2,n=1;break}this.amountSelectionLayout===Wt.SingleLine&&(i=e+3,n=3),this.style.setProperty("--paymentSelectorAmountColumnCount",`${i}`),this.style.setProperty("--paymentSelectorCustomAmountColSpan",`${n}`)}updateSelectedDonationInfo(){var t,e;if(!this.customAmountSelected&&!this.isCustomAmount){const i=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`input[type="radio"][name="${yt.Amount}"][value="${this.donationInfo.amount}"]`);i.checked=!0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value="")}else if(this.customAmountSelected=!0,((e=this.shadowRoot)===null||e===void 0?void 0:e.activeElement)!==this.customAmountInput){this.customAmountInput.value=this.customAmountDisplayValue;const i=this.getDonationInfoStatus(this.donationInfo.amount);this.handleDonationInfoStatus(i)}}get coverFeesTextTemplate(){const t=et(this.donationInfo.fee,{symbol:"$"}).format();return y` I'll generously add ${t} to cover fees. `}formatShortenedAmount(t){const e=t%1===0?0:2;return et(t,{symbol:"$",precision:e}).format()}get frequencyTemplate(){return y`
      <li>
        ${this.getRadioButton({group:yt.DonationType,value:C.OneTime,displayText:"One time",checked:this.donationInfo.donationType===C.OneTime})}
      </li>

      <li>
        ${this.getRadioButton({group:yt.DonationType,value:C.Monthly,displayText:"Monthly",checked:this.donationInfo.donationType===C.Monthly})}
      </li>
    `}get presetAmountsTemplate(){return y`
      ${this.amountOptions.map(t=>{const e=!this.customAmountSelected&&t===this.donationInfo.amount,i=this.formatShortenedAmount(t);return y`
          <li>
            ${this.getRadioButton({group:yt.Amount,value:`${t}`,displayText:`${i}`,checked:e})}
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
          @click=${i=>{t.group===yt.Amount&&parseFloat(t.value)===this.donationInfo.amount&&this.radioSelected(i)}}
        />
        <label for=${e}> ${t.displayText} </label>
      </div>
    `}get isCustomAmount(){return!this.amountOptions.includes(this.donationInfo.amount)}get customAmountDisplayValue(){return this.isCustomAmount?et(this.donationInfo.amount,{symbol:""}).format():""}get customAmountTemplate(){return y`
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
            @blur=${t=>{const e=t.target;e.value=this.customAmountDisplayValue}}
          />
        </label>
      </div>
    `}customRadioSelected(){this.customAmountInput.focus()}customAmountFocused(t){const e=t.target;this.customAmountSelected=!0,this.handleCustomAmountInput(e.value)}coverFeesChecked(t){const i=t.target.checked;this.updateDonationInfo({coverFees:i})}customAmountChanged(t){const i=t.target.value;this.customAmountSelected=!0,this.handleCustomAmountInput(i)}handleCustomAmountInput(t){const e=parseFloat(t);isNaN(e)?this.dispatchEditDonationError(ct.InvalidDonationAmount):this.amountChanged(e)}handleDonationInfoStatus(t){switch(t){case ct.ValidDonationAmount:this.error=void 0;break;case ct.DonationTooHigh:this.error=y`
          To make a donation of $10,000 or more, please contact our philanthropy
          department at
          <a href="mailto:donations@archive.org">donations@archive.org</a>
        `,this.dispatchEditDonationError(t);break;case ct.DonationTooLow:this.customAmountInput.value.length>0&&(this.error=y` Please select an amount (minimum $1) `),this.dispatchEditDonationError(t);break;case ct.InvalidDonationAmount:this.error=y` Please enter a valid donation amount `,this.dispatchEditDonationError(t);break}}amountChanged(t){const e=this.getDonationInfoStatus(t);this.handleDonationInfoStatus(e),e===ct.ValidDonationAmount&&this.updateDonationInfo({amount:t})}getDonationInfoStatus(t){return isNaN(t)?ct.InvalidDonationAmount:t>=1e4?ct.DonationTooHigh:t<1?ct.DonationTooLow:ct.ValidDonationAmount}radioSelected(t){const e=t.target,i=e.name,{value:n}=e;switch(i){case yt.Amount:this.presetAmountChanged(parseFloat(n));break;case yt.DonationType:this.updateDonationInfo({donationType:n});break}}monthlyCheckboxChecked(t){const i=t.target.checked?C.Monthly:C.OneTime;this.updateDonationInfo({donationType:i})}dispatchEditDonationError(t){const e=new CustomEvent("editDonationError",{detail:{error:t}});this.dispatchEvent(e)}presetAmountChanged(t){this.error=void 0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=""),this.updateDonationInfo({amount:t})}updateDonationInfo(t){var e,i,n;const s=new N({donationType:(e=t.donationType)!==null&&e!==void 0?e:this.donationInfo.donationType,amount:(i=t.amount)!==null&&i!==void 0?i:this.donationInfo.amount,coverFees:(n=t.coverFees)!==null&&n!==void 0?n:this.donationInfo.coverFees});this.donationInfo=s;const r=new CustomEvent("donationInfoChanged",{detail:{donationInfo:s}});this.dispatchEvent(r)}static get styles(){const t=$`var(--paymentButtonBorderColor, #333)`,e=$`var(--paymentButtonGridGap, 1rem)`,i=$`var(--paymentButtonFontSize, 1.6rem)`,n=$`var(--paymentButtonFontColor, #000)`,s=$`var(--paymentButtonSelectedFontColor, #000)`,r=$`var(--paymentButtonSelectedColor, #f9bf3b)`,h=$`var(--paymentButtonFocusedOutlineColor, #7fb3f9)`,a=$`var(--paymentButtonColor, #fff)`,l=$`var(--coverFeesFontSize, 1.2rem)`,d=$`var(--coverFeesFontWeight, bold)`,c=$`var(--customAmountWidth, 4rem)`,u=$`var(--inputFieldFontColor, #333)`,p=$`var(--inputBorder, 1px solid #d9d9d9)`,f=$`var(--paymentSelectorAmountColumnCount, 5)`,m=$`var(--paymentSelectorCustomAmountColSpan, 3)`;return $`
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
        grid-template-columns: repeat(${f}, 1fr);
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
        outline: 2px solid ${h};
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
    `}};v([bt({type:Object})],ot.prototype,"donationInfo",void 0);v([bt({type:String})],ot.prototype,"stepNumberMode",void 0);v([bt({type:Number})],ot.prototype,"defaultSelectedAmount",void 0);v([bt({type:Array})],ot.prototype,"amountOptions",void 0);v([bt({type:String})],ot.prototype,"amountSelectionLayout",void 0);v([bt({type:String,reflect:!0})],ot.prototype,"frequencySelectionMode",void 0);v([bt({type:String,reflect:!0})],ot.prototype,"customAmountMode",void 0);v([bt({type:String,reflect:!0})],ot.prototype,"coverFeesCheckboxMode",void 0);v([bt({type:String,reflect:!0})],ot.prototype,"amountTitleDisplayMode",void 0);v([Wm()],ot.prototype,"error",void 0);v([Wm()],ot.prototype,"customAmountSelected",void 0);v([Gm("#custom-amount-button")],ot.prototype,"customAmountButton",void 0);v([Gm("#custom-amount-input")],ot.prototype,"customAmountInput",void 0);ot=v([P_("donation-form-edit-donation")],ot);let P=class extends U{constructor(){super(...arguments),this.analyticsCategory="DonationForm",this.amountOptions=vr,this.donationInfo=M0,this.amountSelectionLayout=Wt.MultiLine,this.frequencySelectionMode=ut.Button,this.donorEmail="",this.lazyLoaderService=new $y,this.recaptchaManagerSetup=!1}updated(t){var e,i,n;t.has("referrer")&&this.referrer&&((e=this.braintreeManager)===null||e===void 0||e.setReferrer(this.referrer),this.logDonationFlowEvent("referrer",this.referrer)),t.has("loggedInUser")&&this.loggedInUser&&((i=this.braintreeManager)===null||i===void 0||i.setLoggedInUser(this.loggedInUser)),t.has("origin")&&this.origin&&((n=this.braintreeManager)===null||n===void 0||n.setOrigin(this.origin),this.logDonationFlowEvent("origin",this.origin)),(t.has("paymentClients")||t.has("braintreeAuthToken")||t.has("endpointManager")||t.has("environment"))&&(this.setupBraintreeManager(),this.setupRecaptchaManager()),t.has("recaptchaSiteKey")&&this.setupRecaptchaManager(),(t.has("braintreeManager")||t.has("recaptchaManager")||t.has("modalManager")||t.has("recaptchaElement"))&&this.setupPaymentFlowHandlers(),(t.has("environment")||t.has("lazyLoaderService"))&&this.environment&&(this.paymentClients=new iv(this.lazyLoaderService,this.environment))}showConfirmationStepDev(t){return g(this,void 0,void 0,function*(){this.donationForm.showConfirmationModalDev(t)})}showUpsellModalDev(t){return g(this,void 0,void 0,function*(){this.donationForm.showUpsellModalDev(t)})}setupBraintreeManager(){this.braintreeManager===void 0&&this.braintreeAuthToken&&this.endpointManager&&this.paymentClients&&this.environment&&(this.braintreeManager=new nv({paymentClients:this.paymentClients,endpointManager:this.endpointManager,authorizationToken:this.braintreeAuthToken,venmoProfileId:this.venmoProfileId,googlePayMerchantId:this.googlePayMerchantId,hostedFieldConfig:this.hostedFieldConfig,hostingEnvironment:this.environment,referrer:this.referrer,loggedInUser:this.loggedInUser,origin:this.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:t}});this.dispatchEvent(e)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",t=>{const e=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:t}});this.dispatchEvent(e)}))}setupRecaptchaManager(){return g(this,void 0,void 0,function*(){if(!this.recaptchaSiteKey||!this.paymentClients||this.recaptchaManagerSetup)return;this.recaptchaManagerSetup=!0;const t=yield this.paymentClients.recaptchaLibrary.get();this.recaptchaManager=new Ff({grecaptchaLibrary:t,siteKey:this.recaptchaSiteKey})})}firstUpdated(){this.configureFromQueryParams(),this.trackViewedEvent()}configureFromQueryParams(){const t=new URLSearchParams(window.location.search);let e=this.amountOptions;const i=t.get("dollarAmounts");i&&(e=i.slice(1,-1).split(",").map(O=>parseFloat(O)).filter(O=>!isNaN(O)));let n=this.donationInfo.coverFees;const s=t.get("coverFees");s&&(n=s==="true");let r=this.donationInfo.donationType;t.get("contrib_type")==="monthly"&&(r=C.Monthly);let a=this.donationInfo.amount;const l=t.get("amt");if(l){const p=et(l).value;p>0&&(a=p)}const d=t.get("amountLayout");if(d){const p=d;Object.values(Wt).includes(p)&&(this.amountSelectionLayout=p)}const c=t.get("frequencyMode");if(c){const p=c;Object.values(ut).includes(p)&&(this.frequencySelectionMode=p)}const u=new N({donationType:r,amount:a,coverFees:n});this.amountOptions=e,this.donationInfo=u}setupPaymentFlowHandlers(){var t;this.paymentFlowHandlers||!this.braintreeManager||!this.recaptchaManager||!this.modalManager||!this.recaptchaElement||(this.paymentFlowHandlers=new Rf({braintreeManager:this.braintreeManager,modalManager:this.modalManager,recaptchaManager:this.recaptchaManager,resources:{analytics:{logEvent:this.logEvent.bind(this),logDonationFlowEvent:this.logDonationFlowEvent.bind(this)}}}),this.donationForm.braintreeManager=this.braintreeManager,this.donationForm.paymentFlowHandlers=this.paymentFlowHandlers,this.braintreeManager.startup(),(t=this.paymentFlowHandlers)===null||t===void 0||t.startup(),this.recaptchaManager.setup(this.recaptchaElement,1,"light","image"))}get hostedFieldConfig(){const t={input:{"font-size":"16px","font-family":'"Helvetica Neue", Helvetica, Arial, sans-serif',"font-weight":"700",color:"#333"},":focus":{color:"#333"},".valid":{},".invalid":{color:"#b00b00"}},e={number:{selector:"#braintree-creditcard",placeholder:"Card number"},cvv:{selector:"#braintree-cvv",placeholder:"CVC"},expirationDate:{selector:"#braintree-expiration",placeholder:"MM / YY"}},i=new ov({number:this.braintreeNumberInput,cvv:this.braintreeCVVInput,expirationDate:this.braintreeExpirationDateInput,errorContainer:this.braintreeErrorMessage});return new Lf({hostedFieldStyle:t,hostedFieldFieldOptions:e,hostedFieldContainer:i})}render(){return y`
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
              <badged-input .icon=${gm} ?required=${!0} class="creditcard">
                <div class="braintree-input" id="braintree-creditcard"></div>
              </badged-input>
            </div>
            <div class="braintree-row">
              <badged-input .icon=${Pm} ?required=${!0} class="expiration">
                <div class="braintree-input" id="braintree-expiration"></div>
              </badged-input>
              <badged-input .icon=${xr} ?required=${!0} class="cvv">
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
    `}};v([A({type:String})],P.prototype,"environment",void 0);v([A({type:String})],P.prototype,"braintreeAuthToken",void 0);v([A({type:String})],P.prototype,"recaptchaSiteKey",void 0);v([A({type:String})],P.prototype,"venmoProfileId",void 0);v([A({type:String})],P.prototype,"googlePayMerchantId",void 0);v([A({type:String})],P.prototype,"analyticsCategory",void 0);v([A({type:Array})],P.prototype,"amountOptions",void 0);v([A({type:Object})],P.prototype,"donationInfo",void 0);v([A({type:String})],P.prototype,"amountSelectionLayout",void 0);v([A({type:String})],P.prototype,"frequencySelectionMode",void 0);v([A({type:String})],P.prototype,"referrer",void 0);v([A({type:String})],P.prototype,"loggedInUser",void 0);v([A({type:String})],P.prototype,"origin",void 0);v([A({type:String})],P.prototype,"donorEmail",void 0);v([A({type:Object})],P.prototype,"endpointManager",void 0);v([A({type:Object})],P.prototype,"analyticsHandler",void 0);v([A({type:Object})],P.prototype,"modalManager",void 0);v([A({type:Object})],P.prototype,"recaptchaElement",void 0);v([A({type:Object})],P.prototype,"braintreeManager",void 0);v([A({type:Object})],P.prototype,"recaptchaManager",void 0);v([A({type:Object})],P.prototype,"paymentFlowHandlers",void 0);v([A({type:Object})],P.prototype,"paymentClients",void 0);v([A({type:Object})],P.prototype,"lazyLoaderService",void 0);v([x("donation-form")],P.prototype,"donationForm",void 0);v([x("#braintree-creditcard")],P.prototype,"braintreeNumberInput",void 0);v([x("#braintree-cvv")],P.prototype,"braintreeCVVInput",void 0);v([x("#braintree-expiration")],P.prototype,"braintreeExpirationDateInput",void 0);v([x("#braintree-error-message")],P.prototype,"braintreeErrorMessage",void 0);v([x("contact-form")],P.prototype,"contactForm",void 0);P=v([At("donation-form-controller")],P);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=window,ah=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n$=Symbol(),wp=new WeakMap;let G_=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ah&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=wp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&wp.set(e,t))}return t}toString(){return this.cssText}};const K_=o=>new G_(typeof o=="string"?o:o+"",void 0,n$),Z_=(o,t)=>{ah?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ns.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Pp=ah?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return K_(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ka;const Js=window,Mp=Js.trustedTypes,Y_=Mp?Mp.emptyScript:"",xp=Js.reactiveElementPolyfillSupport,gd={toAttribute(o,t){switch(t){case Boolean:o=o?Y_:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},o$=(o,t)=>t!==o&&(t==t||o==o),Za={attribute:!0,type:String,converter:gd,reflect:!1,hasChanged:o$},yd="finalized";let In=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Za){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Za}static finalize(){if(this.hasOwnProperty(yd))return!1;this[yd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Pp(n))}else t!==void 0&&e.push(Pp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Z_(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Za){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:gd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:gd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||o$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};In[yd]=!0,In.elementProperties=new Map,In.elementStyles=[],In.shadowRootOptions={mode:"open"},xp?.({ReactiveElement:In}),((Ka=Js.reactiveElementVersions)!==null&&Ka!==void 0?Ka:Js.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ya;const Xs=window,Vi=Xs.trustedTypes,Tp=Vi?Vi.createPolicy("lit-html",{createHTML:o=>o}):void 0,fd="$lit$",Bt=`lit$${(Math.random()+"").slice(9)}$`,s$="?"+Bt,J_=`<${s$}>`,ti=document,Qs=()=>ti.createComment(""),Eo=o=>o===null||typeof o!="object"&&typeof o!="function",r$=Array.isArray,X_=o=>r$(o)||typeof o?.[Symbol.iterator]=="function",Ja=`[ 	
\f\r]`,Hn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kp=/-->/g,Ip=/>/g,de=RegExp(`>|${Ja}(?:([^\\s"'>=/]+)(${Ja}*=${Ja}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hp=/'/g,Up=/"/g,a$=/^(?:script|style|textarea|title)$/i,Co=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),Np=new WeakMap,ke=ti.createTreeWalker(ti,129,null,!1);function l$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tp!==void 0?Tp.createHTML(t):t}const Q_=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Hn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Hn?d[1]==="!--"?r=kp:d[1]!==void 0?r=Ip:d[2]!==void 0?(a$.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=de):d[3]!==void 0&&(r=de):r===de?d[0]===">"?(r=n??Hn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?de:d[3]==='"'?Up:Hp):r===Up||r===Hp?r=de:r===kp||r===Ip?r=Hn:(r=de,n=void 0);const p=r===de&&o[h+1].startsWith("/>")?" ":"";s+=r===Hn?a+J_:c>=0?(i.push(l),a.slice(0,c)+fd+a.slice(c)+Bt+p):a+Bt+(c===-2?(i.push(void 0),h):p)}return[l$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let _d=class d${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=Q_(t,e);if(this.el=d$.createElement(l,i),ke.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=ke.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(fd)||u.startsWith(Bt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+fd).split(Bt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?e2:m[1]==="?"?n2:m[1]==="@"?o2:Ir})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(a$.test(n.tagName)){const c=n.textContent.split(Bt),u=c.length-1;if(u>0){n.textContent=Vi?Vi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],Qs()),ke.nextNode(),a.push({type:2,index:++s});n.append(c[u],Qs())}}}else if(n.nodeType===8)if(n.data===s$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Bt,c+1))!==-1;)a.push({type:7,index:s}),c+=Bt.length-1}s++}}static createElement(t,e){const i=ti.createElement("template");return i.innerHTML=t,i}};function ji(o,t,e=o,i){var n,s,r,h;if(t===Co)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Eo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=ji(o,a._$AS(o,t.values),a,i)),t}let t2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ti).importNode(i,!0);ke.currentNode=s;let r=ke.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new h$(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new s2(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=ke.nextNode(),h++)}return ke.currentNode=ti,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},h$=class c${constructor(t,e,i,n){var s;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ji(this,t,e),Eo(t)?t===Y||t==null||t===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==Co&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):X_(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Y&&Eo(this._$AH)?this._$AA.nextSibling.data=t:this.$(ti.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=_d.createElement(l$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new t2(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Np.get(t.strings);return e===void 0&&Np.set(t.strings,e=new _d(t)),e}T(t){r$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new c$(this.k(Qs()),this.k(Qs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ir=class{constructor(t,e,i,n,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=ji(this,t,e,0),r=!Eo(t)||t!==this._$AH&&t!==Co,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=ji(this,h[i+a],e,a),l===Co&&(l=this._$AH[a]),r||(r=!Eo(l)||l!==this._$AH[a]),l===Y?t=Y:t!==Y&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},e2=class extends Ir{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Y?void 0:t}};const i2=Vi?Vi.emptyScript:"";let n2=class extends Ir{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Y?this.element.setAttribute(this.name,i2):this.element.removeAttribute(this.name)}},o2=class extends Ir{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=ji(this,t,e,0))!==null&&i!==void 0?i:Y)===Co)return;const n=this._$AH,s=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Y&&(n===Y||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},s2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ji(this,t)}};const Dp=Xs.litHtmlPolyfillSupport;Dp?.(_d,h$),((Ya=Xs.litHtmlVersions)!==null&&Ya!==void 0?Ya:Xs.litHtmlVersions=[]).push("2.8.0");const r2=y`
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
 */const os=window,lh=os.ShadowRoot&&(os.ShadyCSS===void 0||os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,u$=Symbol(),Op=new WeakMap;let a2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==u$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(lh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Op.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Op.set(e,t))}return t}toString(){return this.cssText}};const l2=o=>new a2(typeof o=="string"?o:o+"",void 0,u$),d2=(o,t)=>{lh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=os.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Rp=lh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xa;const tr=window,Fp=tr.trustedTypes,h2=Fp?Fp.emptyScript:"",Lp=tr.reactiveElementPolyfillSupport,Ad={toAttribute(o,t){switch(t){case Boolean:o=o?h2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},p$=(o,t)=>t!==o&&(t==t||o==o),Qa={attribute:!0,type:String,converter:Ad,reflect:!1,hasChanged:p$},bd="finalized";let Un=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Qa){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Qa}static finalize(){if(this.hasOwnProperty(bd))return!1;this[bd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Rp(n))}else t!==void 0&&e.push(Rp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return d2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Qa){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ad).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ad;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Un[bd]=!0,Un.elementProperties=new Map,Un.elementStyles=[],Un.shadowRootOptions={mode:"open"},Lp?.({ReactiveElement:Un}),((Xa=tr.reactiveElementVersions)!==null&&Xa!==void 0?Xa:tr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var tl;const er=window,qi=er.trustedTypes,Bp=qi?qi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Sd="$lit$",zt=`lit$${(Math.random()+"").slice(9)}$`,v$="?"+zt,c2=`<${v$}>`,ei=document,ir=()=>ei.createComment(""),wo=o=>o===null||typeof o!="object"&&typeof o!="function",m$=Array.isArray,u2=o=>m$(o)||typeof o?.[Symbol.iterator]=="function",el=`[ 	
\f\r]`,Nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zp=/-->/g,Vp=/>/g,he=RegExp(`>|${el}(?:([^\\s"'>=/]+)(${el}*=${el}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jp=/'/g,qp=/"/g,$$=/^(?:script|style|textarea|title)$/i,Po=Symbol.for("lit-noChange"),J=Symbol.for("lit-nothing"),Wp=new WeakMap,Ie=ei.createTreeWalker(ei,129,null,!1);function g$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bp!==void 0?Bp.createHTML(t):t}const p2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Nn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Nn?d[1]==="!--"?r=zp:d[1]!==void 0?r=Vp:d[2]!==void 0?($$.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=he):d[3]!==void 0&&(r=he):r===he?d[0]===">"?(r=n??Nn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?he:d[3]==='"'?qp:jp):r===qp||r===jp?r=he:r===zp||r===Vp?r=Nn:(r=he,n=void 0);const p=r===he&&o[h+1].startsWith("/>")?" ":"";s+=r===Nn?a+c2:c>=0?(i.push(l),a.slice(0,c)+Sd+a.slice(c)+zt+p):a+zt+(c===-2?(i.push(void 0),h):p)}return[g$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ed=class y${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=p2(t,e);if(this.el=y$.createElement(l,i),Ie.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ie.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Sd)||u.startsWith(zt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Sd).split(zt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?m2:m[1]==="?"?g2:m[1]==="@"?y2:Hr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if($$.test(n.tagName)){const c=n.textContent.split(zt),u=c.length-1;if(u>0){n.textContent=qi?qi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],ir()),Ie.nextNode(),a.push({type:2,index:++s});n.append(c[u],ir())}}}else if(n.nodeType===8)if(n.data===v$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(zt,c+1))!==-1;)a.push({type:7,index:s}),c+=zt.length-1}s++}}static createElement(t,e){const i=ei.createElement("template");return i.innerHTML=t,i}};function Wi(o,t,e=o,i){var n,s,r,h;if(t===Po)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=wo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Wi(o,a._$AS(o,t.values),a,i)),t}let v2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ei).importNode(i,!0);Ie.currentNode=s;let r=Ie.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new f$(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new f2(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Ie.nextNode(),h++)}return Ie.currentNode=ei,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},f$=class _${constructor(t,e,i,n){var s;this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Wi(this,t,e),wo(t)?t===J||t==null||t===""?(this._$AH!==J&&this._$AR(),this._$AH=J):t!==this._$AH&&t!==Po&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):u2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==J&&wo(this._$AH)?this._$AA.nextSibling.data=t:this.$(ei.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Ed.createElement(g$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new v2(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Wp.get(t.strings);return e===void 0&&Wp.set(t.strings,e=new Ed(t)),e}T(t){m$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new _$(this.k(ir()),this.k(ir()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Hr=class{constructor(t,e,i,n,s){this.type=1,this._$AH=J,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Wi(this,t,e,0),r=!wo(t)||t!==this._$AH&&t!==Po,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Wi(this,h[i+a],e,a),l===Po&&(l=this._$AH[a]),r||(r=!wo(l)||l!==this._$AH[a]),l===J?t=J:t!==J&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},m2=class extends Hr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===J?void 0:t}};const $2=qi?qi.emptyScript:"";let g2=class extends Hr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==J?this.element.setAttribute(this.name,$2):this.element.removeAttribute(this.name)}},y2=class extends Hr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Wi(this,t,e,0))!==null&&i!==void 0?i:J)===Po)return;const n=this._$AH,s=t===J&&n!==J||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==J&&(n===J||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},f2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Wi(this,t)}};const Gp=er.litHtmlPolyfillSupport;Gp?.(Ed,f$),((tl=er.litHtmlVersions)!==null&&tl!==void 0?tl:er.litHtmlVersions=[]).push("2.8.0");const _2=y`
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
 */const ss=window,dh=ss.ShadowRoot&&(ss.ShadyCSS===void 0||ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,A$=Symbol(),Kp=new WeakMap;let A2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==A$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(dh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Kp.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Kp.set(e,t))}return t}toString(){return this.cssText}};const b2=o=>new A2(typeof o=="string"?o:o+"",void 0,A$),S2=(o,t)=>{dh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ss.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Zp=dh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return b2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var il;const nr=window,Yp=nr.trustedTypes,E2=Yp?Yp.emptyScript:"",Jp=nr.reactiveElementPolyfillSupport,Cd={toAttribute(o,t){switch(t){case Boolean:o=o?E2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},b$=(o,t)=>t!==o&&(t==t||o==o),nl={attribute:!0,type:String,converter:Cd,reflect:!1,hasChanged:b$},wd="finalized";let Dn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=nl){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||nl}static finalize(){if(this.hasOwnProperty(wd))return!1;this[wd]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Zp(n))}else t!==void 0&&e.push(Zp(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return S2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=nl){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Cd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Cd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||b$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Dn[wd]=!0,Dn.elementProperties=new Map,Dn.elementStyles=[],Dn.shadowRootOptions={mode:"open"},Jp?.({ReactiveElement:Dn}),((il=nr.reactiveElementVersions)!==null&&il!==void 0?il:nr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ol;const or=window,Gi=or.trustedTypes,Xp=Gi?Gi.createPolicy("lit-html",{createHTML:o=>o}):void 0,Pd="$lit$",Vt=`lit$${(Math.random()+"").slice(9)}$`,S$="?"+Vt,C2=`<${S$}>`,ii=document,sr=()=>ii.createComment(""),Mo=o=>o===null||typeof o!="object"&&typeof o!="function",E$=Array.isArray,w2=o=>E$(o)||typeof o?.[Symbol.iterator]=="function",sl=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qp=/-->/g,t0=/>/g,ce=RegExp(`>|${sl}(?:([^\\s"'>=/]+)(${sl}*=${sl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e0=/'/g,i0=/"/g,C$=/^(?:script|style|textarea|title)$/i,xo=Symbol.for("lit-noChange"),X=Symbol.for("lit-nothing"),n0=new WeakMap,He=ii.createTreeWalker(ii,129,null,!1);function w$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xp!==void 0?Xp.createHTML(t):t}const P2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=On;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===On?d[1]==="!--"?r=Qp:d[1]!==void 0?r=t0:d[2]!==void 0?(C$.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ce):d[3]!==void 0&&(r=ce):r===ce?d[0]===">"?(r=n??On,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ce:d[3]==='"'?i0:e0):r===i0||r===e0?r=ce:r===Qp||r===t0?r=On:(r=ce,n=void 0);const p=r===ce&&o[h+1].startsWith("/>")?" ":"";s+=r===On?a+C2:c>=0?(i.push(l),a.slice(0,c)+Pd+a.slice(c)+Vt+p):a+Vt+(c===-2?(i.push(void 0),h):p)}return[w$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Md=class P${constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=P2(t,e);if(this.el=P$.createElement(l,i),He.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=He.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(Pd)||u.startsWith(Vt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+Pd).split(Vt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?x2:m[1]==="?"?k2:m[1]==="@"?I2:Ur})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(C$.test(n.tagName)){const c=n.textContent.split(Vt),u=c.length-1;if(u>0){n.textContent=Gi?Gi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],sr()),He.nextNode(),a.push({type:2,index:++s});n.append(c[u],sr())}}}else if(n.nodeType===8)if(n.data===S$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(Vt,c+1))!==-1;)a.push({type:7,index:s}),c+=Vt.length-1}s++}}static createElement(t,e){const i=ii.createElement("template");return i.innerHTML=t,i}};function Ki(o,t,e=o,i){var n,s,r,h;if(t===xo)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Mo(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ki(o,a._$AS(o,t.values),a,i)),t}let M2=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ii).importNode(i,!0);He.currentNode=s;let r=He.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new M$(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new H2(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=He.nextNode(),h++)}return He.currentNode=ii,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},M$=class x${constructor(t,e,i,n){var s;this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ki(this,t,e),Mo(t)?t===X||t==null||t===""?(this._$AH!==X&&this._$AR(),this._$AH=X):t!==this._$AH&&t!==xo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):w2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==X&&Mo(this._$AH)?this._$AA.nextSibling.data=t:this.$(ii.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Md.createElement(w$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new M2(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=n0.get(t.strings);return e===void 0&&n0.set(t.strings,e=new Md(t)),e}T(t){E$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new x$(this.k(sr()),this.k(sr()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ur=class{constructor(t,e,i,n,s){this.type=1,this._$AH=X,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=X}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Ki(this,t,e,0),r=!Mo(t)||t!==this._$AH&&t!==xo,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Ki(this,h[i+a],e,a),l===xo&&(l=this._$AH[a]),r||(r=!Mo(l)||l!==this._$AH[a]),l===X?t=X:t!==X&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},x2=class extends Ur{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===X?void 0:t}};const T2=Gi?Gi.emptyScript:"";let k2=class extends Ur{constructor(){super(...arguments),this.type=4}j(t){t&&t!==X?this.element.setAttribute(this.name,T2):this.element.removeAttribute(this.name)}},I2=class extends Ur{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ki(this,t,e,0))!==null&&i!==void 0?i:X)===xo)return;const n=this._$AH,s=t===X&&n!==X||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==X&&(n===X||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},H2=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ki(this,t)}};const o0=or.litHtmlPolyfillSupport;o0?.(Md,M$),((ol=or.litHtmlVersions)!==null&&ol!==void 0?ol:or.litHtmlVersions=[]).push("2.8.0");const U2=y`
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
 */const rs=window,hh=rs.ShadowRoot&&(rs.ShadyCSS===void 0||rs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,T$=Symbol(),s0=new WeakMap;let N2=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==T$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(hh&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=s0.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s0.set(e,t))}return t}toString(){return this.cssText}};const D2=o=>new N2(typeof o=="string"?o:o+"",void 0,T$),O2=(o,t)=>{hh?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=rs.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},r0=hh?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return D2(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rl;const rr=window,a0=rr.trustedTypes,R2=a0?a0.emptyScript:"",l0=rr.reactiveElementPolyfillSupport,xd={toAttribute(o,t){switch(t){case Boolean:o=o?R2:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},k$=(o,t)=>t!==o&&(t==t||o==o),al={attribute:!0,type:String,converter:xd,reflect:!1,hasChanged:k$},Td="finalized";let Rn=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=al){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||al}static finalize(){if(this.hasOwnProperty(Td))return!1;this[Td]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(r0(n))}else t!==void 0&&e.push(r0(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return O2(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=al){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:xd).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:xd;this._$El=s,this[s]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||k$)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Rn[Td]=!0,Rn.elementProperties=new Map,Rn.elementStyles=[],Rn.shadowRootOptions={mode:"open"},l0?.({ReactiveElement:Rn}),((rl=rr.reactiveElementVersions)!==null&&rl!==void 0?rl:rr.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ll;const ar=window,Zi=ar.trustedTypes,d0=Zi?Zi.createPolicy("lit-html",{createHTML:o=>o}):void 0,kd="$lit$",jt=`lit$${(Math.random()+"").slice(9)}$`,I$="?"+jt,F2=`<${I$}>`,ni=document,lr=()=>ni.createComment(""),To=o=>o===null||typeof o!="object"&&typeof o!="function",H$=Array.isArray,L2=o=>H$(o)||typeof o?.[Symbol.iterator]=="function",dl=`[ 	
\f\r]`,Fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,h0=/-->/g,c0=/>/g,ue=RegExp(`>|${dl}(?:([^\\s"'>=/]+)(${dl}*=${dl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),u0=/'/g,p0=/"/g,U$=/^(?:script|style|textarea|title)$/i,ko=Symbol.for("lit-noChange"),Q=Symbol.for("lit-nothing"),v0=new WeakMap,Ue=ni.createTreeWalker(ni,129,null,!1);function N$(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return d0!==void 0?d0.createHTML(t):t}const B2=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Fn;for(let h=0;h<e;h++){const a=o[h];let l,d,c=-1,u=0;for(;u<a.length&&(r.lastIndex=u,d=r.exec(a),d!==null);)u=r.lastIndex,r===Fn?d[1]==="!--"?r=h0:d[1]!==void 0?r=c0:d[2]!==void 0?(U$.test(d[2])&&(n=RegExp("</"+d[2],"g")),r=ue):d[3]!==void 0&&(r=ue):r===ue?d[0]===">"?(r=n??Fn,c=-1):d[1]===void 0?c=-2:(c=r.lastIndex-d[2].length,l=d[1],r=d[3]===void 0?ue:d[3]==='"'?p0:u0):r===p0||r===u0?r=ue:r===h0||r===c0?r=Fn:(r=ue,n=void 0);const p=r===ue&&o[h+1].startsWith("/>")?" ":"";s+=r===Fn?a+F2:c>=0?(i.push(l),a.slice(0,c)+kd+a.slice(c)+jt+p):a+jt+(c===-2?(i.push(void 0),h):p)}return[N$(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class Io{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const h=t.length-1,a=this.parts,[l,d]=B2(t,e);if(this.el=Io.createElement(l,i),Ue.currentNode=this.el.content,e===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(n=Ue.nextNode())!==null&&a.length<h;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const u of n.getAttributeNames())if(u.endsWith(kd)||u.startsWith(jt)){const p=d[r++];if(c.push(u),p!==void 0){const f=n.getAttribute(p.toLowerCase()+kd).split(jt),m=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:m[2],strings:f,ctor:m[1]==="."?V2:m[1]==="?"?q2:m[1]==="@"?W2:Dr})}else a.push({type:6,index:s})}for(const u of c)n.removeAttribute(u)}if(U$.test(n.tagName)){const c=n.textContent.split(jt),u=c.length-1;if(u>0){n.textContent=Zi?Zi.emptyScript:"";for(let p=0;p<u;p++)n.append(c[p],lr()),Ue.nextNode(),a.push({type:2,index:++s});n.append(c[u],lr())}}}else if(n.nodeType===8)if(n.data===I$)a.push({type:2,index:s});else{let c=-1;for(;(c=n.data.indexOf(jt,c+1))!==-1;)a.push({type:7,index:s}),c+=jt.length-1}s++}}static createElement(t,e){const i=ni.createElement("template");return i.innerHTML=t,i}}function Yi(o,t,e=o,i){var n,s,r,h;if(t===ko)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=To(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Yi(o,a._$AS(o,t.values),a,i)),t}class z2{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:ni).importNode(i,!0);Ue.currentNode=s;let r=Ue.nextNode(),h=0,a=0,l=n[0];for(;l!==void 0;){if(h===l.index){let d;l.type===2?d=new Nr(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new G2(r,this,t)),this._$AV.push(d),l=n[++a]}h!==l?.index&&(r=Ue.nextNode(),h++)}return Ue.currentNode=ni,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Nr{constructor(t,e,i,n){var s;this.type=2,this._$AH=Q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Yi(this,t,e),To(t)?t===Q||t==null||t===""?(this._$AH!==Q&&this._$AR(),this._$AH=Q):t!==this._$AH&&t!==ko&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):L2(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Q&&To(this._$AH)?this._$AA.nextSibling.data=t:this.$(ni.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Io.createElement(N$(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new z2(s,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=v0.get(t.strings);return e===void 0&&v0.set(t.strings,e=new Io(t)),e}T(t){H$(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Nr(this.k(lr()),this.k(lr()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Dr{constructor(t,e,i,n,s){this.type=1,this._$AH=Q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Q}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=Yi(this,t,e,0),r=!To(t)||t!==this._$AH&&t!==ko,r&&(this._$AH=t);else{const h=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=Yi(this,h[i+a],e,a),l===ko&&(l=this._$AH[a]),r||(r=!To(l)||l!==this._$AH[a]),l===Q?t=Q:t!==Q&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}r&&!n&&this.j(t)}j(t){t===Q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class V2 extends Dr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Q?void 0:t}}const j2=Zi?Zi.emptyScript:"";class q2 extends Dr{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Q?this.element.setAttribute(this.name,j2):this.element.removeAttribute(this.name)}}class W2 extends Dr{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Yi(this,t,e,0))!==null&&i!==void 0?i:Q)===ko)return;const n=this._$AH,s=t===Q&&n!==Q||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==Q&&(n===Q||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class G2{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Yi(this,t)}}const m0=ar.litHtmlPolyfillSupport;m0?.(Io,Nr),((ll=ar.litHtmlVersions)!==null&&ll!==void 0?ll:ar.litHtmlVersions=[]).push("2.8.0");const K2=y`
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
`;var I;(function(o){o.Loading="loading",o.Available="available",o.Unavailable="unavailable"})(I||(I={}));let St=class extends U{constructor(){super(...arguments),this.donationInfoValid=!0,this.applePayMode=I.Loading,this.googlePayMode=I.Loading,this.venmoMode=I.Loading,this.payPalMode=I.Loading,this.paymentModeSelected=void 0}render(){const t=this.paymentModeSelected?"payment-selected":"";return y`
      <div
        class="payment-container ${this.donationInfoValid?"donation-info-valid":"donation-info-invalid"} ${t}"
      >
        <div class="payment-provider-container">
          <button
            class="applepay provider-button ${this.applePayMode} ${this.paymentModeSelected==="apple"?"selected":""}"
            @click=${e=>{this.paymentModeSelected="apple",this.applePaySelected(e)}}
            tabindex="0"
          >
            <div class="payment-image">${r2}</div>
          </button>

          <button
            class="googlepay provider-button ${this.googlePayMode} ${this.paymentModeSelected==="google"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="google",this.googlePaySelected()}}
            tabindex="0"
          >
            <div class="payment-image">${_2}</div>
          </button>

          <button
            class="venmo provider-button ${this.venmoMode} ${this.paymentModeSelected==="venmo"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="venmo",this.venmoSelected()}}
            tabindex="0"
          >
            <div class="payment-image">${K2}</div>
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
                ${U2}
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
          `:T}
    `}firstUpdated(){this.dispatchEvent(new Event("firstUpdated"))}updated(t){t.has("paymentProviders")&&this.setButtonVisibility()}showPaypalButton(){this.payPalMode=I.Available}setButtonVisibility(){return g(this,void 0,void 0,function*(){var t,e,i;(t=this.paymentProviders)===null||t===void 0||t.venmoHandler.get().then(n=>{if(!n){this.venmoMode=I.Unavailable;return}n.isBrowserSupported().then(s=>{this.venmoMode=s?I.Available:I.Unavailable}).catch(s=>{console.error("error loading venmo",s),this.venmoMode=I.Unavailable})}).catch(n=>{console.error("venmo unavailable",n),this.venmoMode=I.Unavailable}),(e=this.paymentProviders)===null||e===void 0||e.applePayHandler.get().then(n=>{if(!n){console.error("applePayHandler unavailable"),this.applePayMode=I.Unavailable;return}n.isAvailable().then(s=>{this.applePayMode=s?I.Available:I.Unavailable}).catch(s=>{console.error("error loading applepay",s),this.applePayMode=I.Unavailable})}).catch(n=>{console.error("apple pay unavailable",n),this.applePayMode=I.Unavailable}),(i=this.paymentProviders)===null||i===void 0||i.googlePayHandler.get().then(n=>{if(!n){console.error("google pay handler unavailable"),this.googlePayMode=I.Unavailable;return}n.isBrowserSupported().then(s=>{this.googlePayMode=s?I.Available:I.Unavailable}).catch(s=>{console.error("error loading googlepay",s),this.googlePayMode=I.Unavailable})}).catch(n=>{console.error("google pay unavailable",n),this.googlePayMode=I.Unavailable})})}googlePaySelected(){this.dispatchEvent(new Event("googlePaySelected"))}applePaySelected(t){const e=new CustomEvent("applePaySelected",{detail:{originalEvent:t}});this.dispatchEvent(e)}venmoSelected(){this.dispatchEvent(new Event("venmoSelected"))}creditCardSelected(){this.dispatchEvent(new Event("creditCardSelected"))}localPaypalButtonClicked(){this.dispatchEvent(new Event("paypalBlockerSelected"))}static get styles(){const t=$`var(--paymentButtonWidth, 5rem)`,e=$`var(--paymentButtonHeight, 3.2rem)`,i=$`var(--creditCardFontSize, 1.8rem)`;return $`
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
    `}};v([A({type:Boolean})],St.prototype,"donationInfoValid",void 0);v([A({type:Object})],St.prototype,"paymentProviders",void 0);v([A({type:String})],St.prototype,"applePayMode",void 0);v([A({type:String})],St.prototype,"googlePayMode",void 0);v([A({type:String})],St.prototype,"venmoMode",void 0);v([A({type:String})],St.prototype,"payPalMode",void 0);v([A({type:String})],St.prototype,"paymentModeSelected",void 0);St=v([At("payment-selector")],St);var me;(function(o){o.Summary="summary",o.Edit="edit"})(me||(me={}));let Gt=class extends U{constructor(){super(...arguments),this.mode=me.Edit,this.amountOptions=vr,this.amountSelectionLayout=Wt.MultiLine,this.frequencySelectionMode=ut.Button}render(){return y` ${this.currentTemplate} `}get currentTemplate(){switch(this.mode){case me.Summary:return this.donationSummaryTemplate;case me.Edit:return this.editDonationTemplate}}get editDonationTemplate(){return y`
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
    `}donationInfoChanged(t){this.donationInfo=t.detail.donationInfo;const e=new CustomEvent("donationInfoChanged",{detail:{donationInfo:this.donationInfo}});this.dispatchEvent(e)}editDonationError(t){const e=new CustomEvent("editDonationError",{detail:t.detail});this.dispatchEvent(e)}summaryEditClicked(){this.mode=me.Edit}showSummaryClicked(){this.mode=me.Summary}static get styles(){return $``}};v([A({type:Object})],Gt.prototype,"donationInfo",void 0);v([A({type:String})],Gt.prototype,"mode",void 0);v([A({type:Array})],Gt.prototype,"amountOptions",void 0);v([A({type:String})],Gt.prototype,"amountSelectionLayout",void 0);v([A({type:String})],Gt.prototype,"frequencySelectionMode",void 0);v([x("edit-donation")],Gt.prototype,"editDonation",void 0);Gt=v([At("donation-form-header")],Gt);let Id=class extends U{render(){return y`
      <div class="top-line"></div>
      <div class="total-line">Total: ${this.totalAmount}</div>
    `}get totalAmount(){if(!this.donationInfo)return;const t=et(this.donationInfo.total,{symbol:"$"}).format(),e=this.donationInfo.donationType===C.Monthly?"/month":"";return`${t}${e}`}static get styles(){const t=$`var(--totalAmountLineColor, #333)`,e=$`var(--totalAmountLineThickness, 2px)`,i=$`var(--totalAmountVerticalSpacing, 0.5rem)`,n=$`var(--totalAmountFontSize, 2.6rem)`;return $`
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
    `}};v([A({type:Object})],Id.prototype,"donationInfo",void 0);Id=v([At("donation-form-total-amount")],Id);let it=class extends U{constructor(){super(...arguments),this.amountOptions=vr,this.amountSelectionLayout=Wt.MultiLine,this.frequencySelectionMode=ut.Button,this.creditCardVisible=!1,this.contactFormVisible=!1,this.donationInfoValid=!0,this.paypalButtonNeedsRender=!0,this.flowHandlersConfigured=!1,this.flowHandlerListenersBound=!1}render(){var t;return y`
      <donation-form-header
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-header>

      <donation-form-section
        .badgeMode=${zi.HideBadgeLeaveSpacing}
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
    `}showConfirmationModalDev(t){return g(this,void 0,void 0,function*(){var e;(e=this.paymentFlowHandlers)===null||e===void 0||e.showConfirmationStepModal(t)})}showUpsellModalDev(t){return g(this,void 0,void 0,function*(){var e,i;if((e=this.paymentFlowHandlers)===null||e===void 0||e.showUpsellModal(t),t.ctaMode===qt.PayPalUpsellSlot){const n=yield(i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.paypalHandler.get(),s=new N({amount:t.oneTimeAmount,donationType:C.OneTime,coverFees:!1});n?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:s})}})}get contactFormSectionTemplate(){const t=this.selectedPaymentProvider===b.Venmo?"Help us stay in touch":"Enter payment information";return y`
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

        <div class="secure-process-note">${xr} Your payment will be securely processed</div>
      </donation-form-section>
    `}get paymentSelectorNumberingStart(){return this.frequencySelectionMode===ut.Button?3:2}editDonationError(){this.donationInfoValid=!1}paymentSelectorFirstUpdated(){var t;!((t=this.paymentFlowHandlers)===null||t===void 0)&&t.paypalHandler&&this.renderPayPalButtonIfNeeded()}applePaySelected(t){var e,i;if(this.selectedPaymentProvider=b.ApplePay,this.contactFormVisible=!1,this.creditCardVisible=!1,!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}const n=t.detail.originalEvent;this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.applePayHandler)===null||i===void 0||i.paymentInitiated(this.donationInfo,n)),this.emitPaymentFlowStartedEvent()}googlePaySelected(){var t,e;this.selectedPaymentProvider=b.GooglePay,this.contactFormVisible=!1,this.creditCardVisible=!1,this.donationInfoValid?(this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.googlePayHandler)===null||e===void 0||e.paymentInitiated(this.donationInfo)),this.emitPaymentFlowStartedEvent()):this.showInvalidDonationInfoAlert()}creditCardSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=b.CreditCard,this.contactFormVisible=!0,this.creditCardVisible=!0,this.focusContactForm()})}venmoSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=b.Venmo,this.contactFormVisible=!0,this.creditCardVisible=!1,this.focusContactForm()})}paypalBlockerSelected(){this.contactFormVisible=!1,this.creditCardVisible=!1,this.showInvalidDonationInfoAlert()}focusContactForm(){return g(this,void 0,void 0,function*(){var t;yield this.updateComplete,this.contactFormSection&&((t=this.contactForm)===null||t===void 0||t.focus())})}donateClicked(){return g(this,void 0,void 0,function*(){if(!this.contactForm){alert("Please enter contact info.");return}if(!this.donationInfoValid||!this.donationInfo){this.showInvalidDonationInfoAlert();return}const t=this.contactForm.donorContactInfo;switch(this.selectedPaymentProvider){case b.CreditCard:this.handleCreditCardDonationFlow(t,this.donationInfo);break;case b.Venmo:this.handleVenmoDonationFlow(t,this.donationInfo);break}})}handleCreditCardDonationFlow(t,e){return g(this,void 0,void 0,function*(){var i,n,s;const r=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.creditCardHandler,h=yield(n=this.braintreeManager)===null||n===void 0?void 0:n.paymentProviders.creditCardHandler.get();h?.hideErrorMessage();const a=(s=this.contactForm)===null||s===void 0?void 0:s.reportValidity(),l=yield r?.tokenizeFields();!a||l===void 0||(this.emitPaymentFlowStartedEvent(),r?.paymentInitiated(l,e,t))})}handleVenmoDonationFlow(t,e){return g(this,void 0,void 0,function*(){var i,n,s;!((i=this.contactForm)===null||i===void 0)&&i.reportValidity()&&((s=(n=this.paymentFlowHandlers)===null||n===void 0?void 0:n.venmoHandler)===null||s===void 0||s.paymentInitiated(t,e))})}emitPaymentFlowStartedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowStarted",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowConfirmedEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowConfirmed",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowCancelledEvent(){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowCancelled",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(t)}emitPaymentFlowErrorEvent(t){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowError",{detail:{paymentProvider:this.selectedPaymentProvider,error:t}});this.dispatchEvent(e)}showInvalidDonationInfoAlert(){alert("Please enter a valid donation amount.")}renderPayPalButtonIfNeeded(){return g(this,void 0,void 0,function*(){var t,e;this.paypalButtonNeedsRender&&(this.paypalButtonNeedsRender=!1,this.donationInfo&&(yield(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0?void 0:e.renderPayPalButton(this.donationInfo)),this.paymentSelector.showPaypalButton())})}updated(t){var e,i;if(t.has("donationInfo")&&this.donationInfo&&((i=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||i===void 0||i.updateDonationInfo(this.donationInfo),this.donationFormHeader.donationInfo=this.donationInfo),(t.has("paymentFlowHandlers")||t.has("donationInfo"))&&this.donationInfo&&this.paymentFlowHandlers&&this.setupFlowHandlers(),t.has("donationInfoValid")&&(this.paymentSelector.donationInfoValid=this.donationInfoValid),t.has("selectedPaymentProvider")){const n=new CustomEvent("paymentProviderSelected",{detail:{paymentProvider:this.selectedPaymentProvider,previousPaymentProvider:t.get("selectedPaymentProvider")}});this.dispatchEvent(n)}}setupFlowHandlers(){var t,e;this.flowHandlersConfigured||(this.flowHandlersConfigured=!0,this.bindFlowListenerEvents(),this.renderPayPalButtonIfNeeded(),this.donationInfo&&((e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.updateDonationInfo(this.donationInfo)))}bindFlowListenerEvents(){var t,e,i,n,s,r,h,a,l,d;this.flowHandlerListenersBound||(this.flowHandlerListenersBound=!0,(e=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||e===void 0||e.on("payPalPaymentStarted",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowStartedEvent()}),(n=(i=this.paymentFlowHandlers)===null||i===void 0?void 0:i.paypalHandler)===null||n===void 0||n.on("payPalPaymentConfirmed",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowConfirmedEvent()}),(r=(s=this.paymentFlowHandlers)===null||s===void 0?void 0:s.paypalHandler)===null||r===void 0||r.on("payPalPaymentCancelled",()=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowCancelledEvent()}),(a=(h=this.paymentFlowHandlers)===null||h===void 0?void 0:h.paypalHandler)===null||a===void 0||a.on("payPalPaymentError",(c,u)=>{this.selectedPaymentProvider=b.PayPal,this.emitPaymentFlowErrorEvent(u)}),(d=(l=this.paymentFlowHandlers)===null||l===void 0?void 0:l.googlePayHandler)===null||d===void 0||d.on("paymentCancelled",()=>{this.selectedPaymentProvider=b.GooglePay,this.emitPaymentFlowCancelledEvent()}))}donationInfoChanged(t){const e=t.detail.donationInfo;this.donationInfo=new N({amount:e.amount,donationType:e.donationType,coverFees:e.coverFees}),this.donationInfoValid=!0;const i=new CustomEvent("donationInfoChanged",{detail:{donationInfo:e}});this.dispatchEvent(i)}static get styles(){const t=$`var(--donateButtonFontSize, 2.6rem)`,e=$`var(--donateButtonHeight, 4rem)`,i=$`var(--donateButtonColor, rgba(49, 164, 129, 1))`,n=$`var(--donateButtonTextColor, #fff)`,s=$`var(--donateButtonHoverColor, rgba(39, 131, 103, 1))`,r=$`var(--donateTotalAmountTopMargin, 1.5rem)`,h=$`var(--donateTotalAmountBottomMargin, 1.2rem)`;return $`
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
        margin-bottom: ${h};
      }
    `}};v([A({type:Object})],it.prototype,"braintreeManager",void 0);v([A({type:Object})],it.prototype,"paymentFlowHandlers",void 0);v([A({type:Object})],it.prototype,"donationRequest",void 0);v([A({type:Object})],it.prototype,"donationInfo",void 0);v([A({type:Object})],it.prototype,"contactForm",void 0);v([A({type:Array})],it.prototype,"amountOptions",void 0);v([A({type:String})],it.prototype,"amountSelectionLayout",void 0);v([A({type:String})],it.prototype,"frequencySelectionMode",void 0);v([A({type:Boolean})],it.prototype,"creditCardVisible",void 0);v([A({type:Boolean})],it.prototype,"contactFormVisible",void 0);v([A({type:Boolean})],it.prototype,"donationInfoValid",void 0);v([A({type:String})],it.prototype,"selectedPaymentProvider",void 0);v([x("#contactFormSection")],it.prototype,"contactFormSection",void 0);v([x("donation-form-header")],it.prototype,"donationFormHeader",void 0);v([x("payment-selector")],it.prototype,"paymentSelector",void 0);it=v([At("donation-form")],it);const hl="venmo_mgc_pending_",Z2=60*60*1e3;class Y2{constructor(t){this.storage=t??this.resolveStorage()}setPending(t){var e;const i={planId:t,timestamp:Date.now()};try{(e=this.storage)===null||e===void 0||e.setItem(`${hl}${t}`,JSON.stringify(i))}catch{}}getPending(t){var e,i;let n=null;try{n=(i=(e=this.storage)===null||e===void 0?void 0:e.getItem(`${hl}${t}`))!==null&&i!==void 0?i:null}catch{return null}if(!n)return null;try{const s=JSON.parse(n);return Date.now()-s.timestamp>Z2?(this.clearPending(t),null):s}catch{return this.clearPending(t),null}}clearPending(t){var e;try{(e=this.storage)===null||e===void 0||e.removeItem(`${hl}${t}`)}catch{}}resolveStorage(){for(const t of[localStorage,sessionStorage])try{return t.setItem("__venmo_test__","1"),t.removeItem("__venmo_test__"),t}catch{}}}const J2={USD:"en-US"},X2={USD:"$"};function dr(o,t="USD"){var e;if(!Number.isFinite(o))return"Invalid amount";const i=(e=J2[t])!==null&&e!==void 0?e:"en-US";return new Intl.NumberFormat(i,{style:"currency",currency:t,minimumFractionDigits:2,maximumFractionDigits:2}).format(o)}let Hd=class extends tt{render(){return S`
      <div class="mgc-donation-section-info">
        <span><slot></slot></span>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.dispatchEvent(new Event("editingRequested"))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};Hd.styles=mt`
    span {
      max-width: 300px;
      margin-right: 10px;
      display: inline-grid;
    }
  `;Hd=v([at("ia-mgc-form-section-info")],Hd);let hr=class extends tt{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?S`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:E}};hr.styles=mt`
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
  `;v([_({type:String})],hr.prototype,"status",void 0);hr=v([at("ia-mgc-update-status")],hr);let pt=class extends tt{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t,e;return S`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?E:S`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span
                  >${(t=this.plan)===null||t===void 0?void 0:t.currency} ${(e=this.plan)===null||e===void 0?void 0:e.amountFormatted}</span
                >
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:E}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-mgc-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,n,s,r;t.preventDefault();const h=this.form.querySelector('input[name="amount"]');this.newAmount=Number(h.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const a=Number(N.calculateTotal(Number((n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:a,baseAmount:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount,coverFees:this.coverFees,feeCovered:(r=this.donationPaymentInfo)===null||r===void 0?void 0:r.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new N({donationType:C.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new N({donationType:C.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new N({donationType:C.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(t,e){var i;t.preventDefault(),this.clearStatusMessaging();const n=e??this.form.querySelector("#update-amount");if(n&&this.updateButtonState(n),!this.newAmount){this.errorMessage="Please enter a new amount",n&&(n.isDisabled=!1);return}const s=this.form.querySelector('input[name="amount"]'),r=(i=Number(s.value))!==null&&i!==void 0?i:0,h=r<1,a=r>=9999;if(h&&(this.errorMessage="Please enter a valid amount"),a&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),a||h){n&&this.updateButtonState(n);return}this.requestAmountUpdate(t)}async updateButtonState(t){t.isDisabled=!0,await t?.updateComplete}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:N.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){if(!this.newAmount)return"I'll generously cover the fees.";const t=N.calculateFeeAmount(this.newAmount);return`I'll generously add ${dr(t)} to cover fees.`}get editAmountForm(){var t,e,i,n,s;return S`
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
            ${X2[(n=(i=this.plan)===null||i===void 0?void 0:i.currency)!==null&&n!==void 0?n:"USD"]}
            <input
              min="1"
              max="9999"
              type="number"
              id="amount"
              name="amount"
              ?required=${!0}
              @focus=${()=>this.clearStatusMessaging()}
              @input=${r=>{const h=Number(r.target.value);this.captureAmountChanges(h),this.newAmount=h}}
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
              ${dr(this.totalAmountWithFees())}
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
                .clickHandler=${(r,h)=>this.handleSubmit(r,h)}
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
    `}};pt.styles=mt`
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
  `;v([_({type:Object})],pt.prototype,"plan",void 0);v([_({type:Object})],pt.prototype,"donationPaymentInfo",void 0);v([_({type:Number})],pt.prototype,"newAmount",void 0);v([_({type:Boolean,reflect:!0})],pt.prototype,"currentlyEditing",void 0);v([_({type:Boolean})],pt.prototype,"coverFees",void 0);v([_({type:String})],pt.prototype,"updateMessage",void 0);v([_({type:String})],pt.prototype,"errorMessage",void 0);v([_({type:String})],pt.prototype,"updateStatus",void 0);v([_t("form")],pt.prototype,"form",void 0);pt=v([at("ia-mgc-edit-plan-amount")],pt);var cr;(function(o){o.invalid_date="Please enter a valid date format (YYYY-MM-DD)",o.date_too_early="Date must be at least tomorrow.",o.second_donation_this_month="The date you selected will result in an additional donation for this month.",o.date_out_of_range="New donation date must be within the next 12 months.",o.same_next_billing_date=""})(cr||(cr={}));let st=class extends tt{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(t){this.dateInput&&t.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.dateInput.focus()}render(){var t;return S`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?E:S`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${(t=this.plan)===null||t===void 0?void 0:t.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:E}
        </donation-form-section>
      </section>
    `}async dateUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Date updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value="",this.newDate=void 0}formatDateToYYYYMMDD(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}validateChosenDate(t){var e,i,n;if(!t)return{valid:!1,errorCode:"invalid_date"};let s;try{s=new Date(`${t}T00:00:00`)}catch{return{valid:!1,errorCode:"invalid_date"}}const r=new Date;r.setHours(0,0,0,0),new Date(r).setDate(r.getDate()+1);const a=new Date(s);if(a.setHours(0,0,0,0),!((e=this.plan)===null||e===void 0)&&e.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(a):!1)return{valid:!1,errorCode:"same_next_billing_date"};if(a<r)return{valid:!1,errorCode:"date_too_early"};const d=new Date(r);if(d.setFullYear(d.getFullYear()+1),a>d)return{valid:!1,errorCode:"date_out_of_range"};const c=!((i=this.plan)===null||i===void 0)&&i.payment&&(!((n=this.plan.payment.lastBillingDate)===null||n===void 0)&&n.date)?new Date(this.plan.payment.lastBillingDate.date):null;if(c){const u=c.getMonth(),p=c.getFullYear(),f=s.getFullYear(),m=s.getMonth();if(f===p&&m===u)return{valid:!0,errorCode:"second_donation_this_month"}}return{valid:!0,errorCode:""}}get minDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate()+1);const i=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${i}-${n}-${s}`}get maxDate(){const t=new Date,e=t.getFullYear()+1,i=String(t.getMonth()+1).padStart(2,"0"),n=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${n}`}get editDateForm(){var t,e,i,n,s;const r=!((t=this.plan)===null||t===void 0)&&t.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):"",h=(i=(e=this.dateInput)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:r;return S`
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
              .value=${h}
              @focus=${()=>this.clearStatusMessaging()}
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;const a=this.dateInput.value,{valid:l,errorCode:d}=this.validateChosenDate(a);if(this.allowEditing=l,d)if(d==="second_donation_this_month")this.errorMessage=cr[d],this.warningMessage="You have already made a donation this month.";else{this.errorMessage=cr[d],this.newDate=void 0;return}const c=new Date(`${a}T00:00:00`),u=new Date(c).toISOString();this.newDate=u}}
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
    `}};st.styles=mt`
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
  `;v([_({type:Object})],st.prototype,"plan",void 0);v([_({type:String})],st.prototype,"newDate",void 0);v([_({type:Boolean,reflect:!0})],st.prototype,"currentlyEditing",void 0);v([_({type:Boolean})],st.prototype,"allowEditing",void 0);v([_({type:String})],st.prototype,"updateMessage",void 0);v([_({type:String})],st.prototype,"errorMessage",void 0);v([_({type:String})],st.prototype,"warningMessage",void 0);v([_({type:String})],st.prototype,"updateStatus",void 0);v([_t("form")],st.prototype,"form",void 0);v([_t("form ia-mgc-button#edit-date")],st.prototype,"formSubmitButton",void 0);v([_t('form input[name="edit-date"]')],st.prototype,"dateInput",void 0);st=v([at("ia-mgc-edit-date")],st);let oi=class extends tt{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:S`
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

      ${this.initialCancelRequest?this.confirmCancelation:E}
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
    `}};oi.styles=mt`
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
  `;v([_({type:Object})],oi.prototype,"plan",void 0);v([_({type:Boolean,reflect:!0})],oi.prototype,"patronWantsToKeepPlan",void 0);v([_({type:Boolean,reflect:!0})],oi.prototype,"initialCancelRequest",void 0);v([_t("form")],oi.prototype,"form",void 0);oi=v([at("ia-mgc-cancel-plan")],oi);let Et=class extends tt{constructor(){super(...arguments),this.displayCreditCard=!1,this.patronEmail="",this.elementConnected=!1}get braintreeInputs(){return{errorMessage:this.querySelector("#braintree-error-message"),number:this.querySelector("#braintree-creditcard"),cvv:this.querySelector("#braintree-cvv"),expirationDate:this.querySelector("#braintree-expiration")}}createRenderRoot(){return this}disconnectedCallback(){this.elementConnected=!1}connectedCallback(){super.connectedCallback(),console.log("connectedCallback",{paymentConfig:this.paymentConfig}),this.elementConnected=!0}updated(t){if(t.has("elementConnected")&&this.elementConnected&&this.paymentConfig){const{braintreeAuthToken:i,endpointManager:n,paymentClients:s,environment:r}=this.paymentConfig||{};!this.braintreeManager&&i&&n&&s&&r&&this.setupBraintreeManager()}this.braintreeManager&&t.has("displayCreditCard")&&this.displayCreditCard&&this.setupCreditCardHandler()}async validateCreditCardFields(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());let i=!1,n=null;try{n=await e?.tokenizeHostedFields(),i=!0}catch(s){const r=s;switch(e?.showErrorMessage(),r.code){case"HOSTED_FIELDS_FIELDS_EMPTY":e?.markFieldErrors([nt.Number,nt.CVV,nt.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":e?.markFieldErrors([nt.CVV]);break}}return i?n:!1}async setupCreditCardHandler(){var t;const e=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.creditCardHandler.get());try{await e?.tokenizeHostedFields()}catch{}e?.removeFieldErrors([nt.Number,nt.CVV,nt.ExpirationDate])}render(){return S` <div>${this.creditCardTemplate}</div> `}lightDomCSS(){return mt`
      contact-form form badged-input {
        width: 100%;
      }

      #ia-mgc-cc-area .braintree-input {
        width: 100%;
        display: block;
        height: stretch;
        height: -webkit-fill-available;
      }
    `}get creditCardTemplate(){return S`
      <div id="ia-mgc-cc-area" style="border: 1px sold red;">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
        <div class="braintree-row">
          <badged-input
            .icon=${gm}
            ?required=${!0}
            class="creditcard"
          >
            <div class="braintree-input" id="braintree-creditcard"></div>
          </badged-input>
        </div>
        <div class="braintree-row">
          <badged-input
            .icon=${Pm}
            ?required=${!0}
            class="expiration"
          >
            <div class="braintree-input" id="braintree-expiration"></div>
          </badged-input>
          <badged-input .icon=${xr} ?required=${!0} class="cvv">
            <div class="braintree-input" id="braintree-cvv"></div>
          </badged-input>
        </div>
      </div>
    `}async renderPayPalVaultButton(){var t,e,i;console.log("[PayPal] renderPayPalVaultButton called");const n=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.paypalHandler.get());if(console.log("[PayPal] handler:",n),!n)return;const s=document.querySelector("#ia-mgc-paypal-button");console.log("[PayPal] container element:",s);const r=new N({donationType:C.Monthly,amount:(i=(e=this.plan)===null||e===void 0?void 0:e.amount)!==null&&i!==void 0?i:0,coverFees:!1}),h=await n.renderPayPalButton({selector:"#ia-mgc-paypal-button",style:{color:"blue",shape:"rect",size:"medium"},donationInfo:r});console.log("[PayPal] dataSource:",h),h&&(h.delegate={payPalPaymentStarted:async()=>{console.log("PayPal payment started")},payPalPaymentAuthorized:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentConfirmed:async(a,l)=>{this.handlePayPalAuthorized(l)},payPalPaymentCancelled:async()=>{console.log("PayPal payment cancelled")},payPalPaymentError:async(a,l)=>{console.error("PayPal vault error:",l),this.dispatchEvent(new CustomEvent("PayPalVaultError",{detail:{error:l}}))}})}handlePayPalAuthorized(t){this.dispatchEvent(new CustomEvent("PayPalVaultAuthorized",{detail:{paymentMethodInfo:{description:`PayPal - ${t.details.email}`,nonce:t.nonce,type:t.type,details:{email:t.details.email}}}}))}async startVenmoPayment(){var t,e,i,n,s,r,h;const a=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.venmoHandler.get());if(a){!((e=this.plan)===null||e===void 0)&&e.id&&((i=this.venmoPendingStorage)===null||i===void 0||i.setPending(this.plan.id));try{const l=await a.startPayment();!((n=this.plan)===null||n===void 0)&&n.id&&((s=this.venmoPendingStorage)===null||s===void 0||s.clearPending(this.plan.id)),this.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:`Venmo - ${l.details.username}`,nonce:l.nonce,type:l.type,details:{username:l.details.username}}}}))}catch(l){!((r=this.plan)===null||r===void 0)&&r.id&&((h=this.venmoPendingStorage)===null||h===void 0||h.clearPending(this.plan.id));const d=l?.code;d==="VENMO_APP_CANCELED"||d==="VENMO_CANCELED"?console.log("Venmo payment cancelled"):(console.error("Venmo payment error:",l),this.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:l}})))}}}async startGooglePayPayment(){var t,e,i;const n=await((t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.googlePayHandler.get());if(n)try{const s=await n.instance.get();if(!s)return;const r=await s.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${(i=(e=this.plan)===null||e===void 0?void 0:e.amount)!==null&&i!==void 0?i:0}`}}),h=await n.paymentsClient.loadPaymentData(r),a=await s.parseResponse(h);this.dispatchEvent(new CustomEvent("GooglePayVaultAuthorized",{detail:{paymentMethodInfo:{description:`Google Pay - ${a.details.cardType} - ${a.details.lastFour}`,nonce:a.nonce,type:a.type,details:{cardType:a.details.cardType,lastFour:a.details.lastFour}}}}))}catch(s){s?.statusCode==="CANCELED"?console.log("Google Pay payment cancelled"):(console.error("Google Pay payment error:",s),this.dispatchEvent(new CustomEvent("GooglePayError",{detail:{error:s}})))}}async startApplePayPayment(t){var e,i,n;const s=await((e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.applePayHandler.get());if(s)try{const r=await s.instance.get();if(!r)return;const h=r.createPaymentRequest({total:{label:"Internet Archive Monthly",amount:`${(n=(i=this.plan)===null||i===void 0?void 0:i.amount)!==null&&n!==void 0?n:0}`},requiredBillingContactFields:["postalAddress"]}),a=new ApplePaySession(3,h);a.onvalidatemerchant=l=>{r.performValidation({validationURL:l.validationURL,displayName:"Internet Archive"},(d,c)=>{if(d){console.error("Apple Pay merchant validation error:",d),a.abort(),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:d}}));return}a.completeMerchantValidation(c)})},a.onpaymentauthorized=async l=>{try{const d=await r.tokenize({token:l.payment.token});a.completePayment(ApplePaySession.STATUS_SUCCESS),this.dispatchEvent(new CustomEvent("ApplePayVaultAuthorized",{detail:{paymentMethodInfo:{description:`Apple Pay - ${d.details.cardType} - ${d.details.dpanLastTwo}`,nonce:d.nonce,type:d.type,details:{cardType:d.details.cardType,lastTwo:d.details.dpanLastTwo}}}}))}catch(d){a.completePayment(ApplePaySession.STATUS_FAILURE),console.error("Apple Pay tokenization error:",d),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:d}}))}},a.oncancel=()=>{console.log("Apple Pay payment cancelled")},a.begin()}catch(r){console.error("Apple Pay error:",r),this.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:r}}))}}async checkVenmoRestoration(){var t,e,i,n,s,r,h;const a=(t=this.plan)===null||t===void 0?void 0:t.id;if(!(!a||!(!((e=this.venmoPendingStorage)===null||e===void 0)&&e.getPending(a))))try{const d=await((i=this.braintreeManager)===null||i===void 0?void 0:i.paymentProviders.venmoHandler.get());if(!d){(n=this.venmoPendingStorage)===null||n===void 0||n.clearPending(a);return}const c=await d.instance.get();if(!c){(s=this.venmoPendingStorage)===null||s===void 0||s.clearPending(a);return}if((r=this.venmoPendingStorage)===null||r===void 0||r.clearPending(a),!c.hasTokenizationResult())return;const u=await d.startPayment();this.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:`Venmo - ${u.details.username}`,nonce:u.nonce,type:u.type,details:{username:u.details.username}}}}))}catch(d){(h=this.venmoPendingStorage)===null||h===void 0||h.clearPending(a);const c=d?.code;c!=="VENMO_APP_CANCELED"&&c!=="VENMO_CANCELED"&&(console.error("Venmo restoration error:",d),this.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:d}})))}}async setupBraintreeManager(){var t,e,i,n,s,r,h,a,l;this.braintreeManager=new nv({paymentClients:(e=(t=this.paymentConfig)===null||t===void 0?void 0:t.paymentClients)!==null&&e!==void 0?e:{},endpointManager:(i=this.paymentConfig)===null||i===void 0?void 0:i.endpointManager,authorizationToken:(s=(n=this.paymentConfig)===null||n===void 0?void 0:n.braintreeAuthToken)!==null&&s!==void 0?s:"",venmoProfileId:(r=this.paymentConfig)===null||r===void 0?void 0:r.venmoProfileId,googlePayMerchantId:(h=this.paymentConfig)===null||h===void 0?void 0:h.googlePayMerchantId,hostedFieldConfig:{hostedFieldStyle:{},hostedFieldFieldOptions:{number:{selector:"#braintree-creditcard",placeholder:"Card number"},cvv:{selector:"#braintree-cvv",placeholder:"CVC"},expirationDate:{selector:"#braintree-expiration",placeholder:"MM / YY"}},hostedFieldContainer:new ov({number:this.braintreeInputs.number,cvv:this.braintreeInputs.cvv,expirationDate:this.braintreeInputs.expirationDate,errorContainer:this.braintreeInputs.errorMessage})},hostingEnvironment:(a=this.paymentConfig)===null||a===void 0?void 0:a.environment,referrer:window.location.href,loggedInUser:this.patronEmail,origin:window.location.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",d=>{const c=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:d}});this.dispatchEvent(c)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",d=>{const c=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:d}});this.dispatchEvent(c)}),!(!((l=this.paymentConfig)===null||l===void 0)&&l.googlePayMerchantId)&&this.braintreeManager&&(this.braintreeManager.paymentProviders.googlePayHandler={get:async()=>null}),await this.checkVenmoRestoration(),this.dispatchEvent(new Event("BraintreeManagerSetupComplete"))}get contactForm(){return this.querySelector('form[name="contact-form"]')}};v([_({type:Object})],Et.prototype,"plan",void 0);v([_({type:Boolean,reflect:!0})],Et.prototype,"displayCreditCard",void 0);v([_({type:String})],Et.prototype,"patronEmail",void 0);v([_({type:Object})],Et.prototype,"paymentConfig",void 0);v([_({type:Object})],Et.prototype,"braintreeManager",void 0);v([w0()],Et.prototype,"elementConnected",void 0);v([_({type:Object})],Et.prototype,"venmoPendingStorage",void 0);Et=v([at("ia-mgc-braintree-manager")],Et);class Ln{constructor(t){var e;this.paymentMethodInfo=t.paymentMethodInfo,this.donorContactInfo=t.donorContactInfo,this.paymentProvider=(e=t.paymentProvider)!==null&&e!==void 0?e:"unknown"}}const Q2="creditCard";let rt=class extends tt{constructor(){super(...arguments),this.paymentConfig={braintreeAuthToken:"",endpointManager:void 0,paymentClients:void 0,environment:"Development",venmoProfileId:"",googlePayMerchantId:"",referrer:"",origin:""},this.patronEmail="",this.currentlyEditing=!1,this.newPaymentMethod="",this.selectedPaymentProvider="",this.paymentSelectorFirstUpdated=!1,this.updateMessage="",this.updateStatus=""}createRenderRoot(){return this}firstUpdated(){this.checkAndRestoreVenmoState()}checkAndRestoreVenmoState(){var t,e;!((t=this.plan)===null||t===void 0)&&t.id&&!((e=this.venmoPendingStorage)===null||e===void 0)&&e.getPending(this.plan.id)&&(this.currentlyEditing=!0,this.selectedPaymentProvider=b.Venmo)}submitPaymentMethodChange(t){t.preventDefault()}selectProvider(t){this.selectedPaymentProvider=t,this.authorizedPaymentMethodRequest=void 0}clearStatusMessaging(){this.updateMessage="",this.updateStatus=""}async paymentMethodUpdated(t){if(this.updateStatus=t,this.updateMessage=t==="success"?"Payment method updated":"Failed to update date, please try again",t==="success"){this.currentlyEditing=!1,this.selectedPaymentProvider="",this.authorizedPaymentMethodRequest=void 0;return}this.updateRequestButton.isDisabled=!1}get updateRequestButton(){return this.querySelector("ia-mgc-button#edit-plan-payment-method-submit")}get contactFormElement(){return this.querySelector("contact-form")}get contactFormSection(){const t=this.selectedPaymentProvider===b.Venmo?"Help us stay in touch":"Enter payment information";return S`
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
    `}get paymentFormSection(){return S``}get creditCardElement(){return this.querySelector("contact-form")}get braintreeManagerElement(){return this.querySelector("ia-mgc-braintree-manager")}get paymentMethodDetail(){var t,e;const{paymentMethodType:i,paypalEmail:n,venmoUsername:s,cardType:r,last4:h}=(e=(t=this.plan)===null||t===void 0?void 0:t.payment)!==null&&e!==void 0?e:{};return i===b.PayPal?n??"":i===b.Venmo?s??"":`${r} - ${h}`}render(){var t,e,i,n,s;const r=this.selectedPaymentProvider===b.CreditCard||this.selectedPaymentProvider===b.Venmo,h=this.selectedPaymentProvider===b.CreditCard,a=!!this.selectedPaymentProvider,l=this.selectedPaymentProvider===b.CreditCard||!!this.authorizedPaymentMethodRequest;return S`
      <style>
        ${this.styles}
      </style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${this.currentlyEditing?E:S`<ia-mgc-form-section-info
              @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
              ><span>
                ${((e=(t=this.plan)===null||t===void 0?void 0:t.payment)===null||e===void 0?void 0:e.paymentMethodType)===Q2?"Credit Card":(n=(i=this.plan)===null||i===void 0?void 0:i.payment)===null||n===void 0?void 0:n.paymentMethodType}:
                ${this.paymentMethodDetail}
              </span></ia-mgc-form-section-info
            >`}
        ${this.currentlyEditing?S`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${(s=this.braintreeManager)===null||s===void 0?void 0:s.paymentProviders}
                @firstUpdated=${d=>{var c;this.paymentSelectorFirstUpdated=!0,(c=d.target)===null||c===void 0||c.showPaypalButton()}}
                @creditCardSelected=${()=>{this.selectProvider(b.CreditCard)}}
                @venmoSelected=${()=>{this.selectProvider(b.Venmo)}}
                @applePaySelected=${d=>{var c;this.selectProvider(b.ApplePay),(c=this.braintreeManagerElement)===null||c===void 0||c.startApplePayPayment(d.detail.originalEvent)}}
                @googlePaySelected=${()=>{var d;this.selectProvider(b.GooglePay),(d=this.braintreeManagerElement)===null||d===void 0||d.startGooglePayPayment()}}
                @paypalSelected=${()=>{this.selectProvider(b.PayPal)}}
                @resetPaymentMethod=${async()=>{this.selectProvider("")}}
                tabindex="0"
              >
                <div slot="paypal-button">
                  <div id="ia-mgc-paypal-button"></div>
                </div>
              </payment-selector>

              <div class="${r?"":"hidden"}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>

              <ia-mgc-braintree-manager
                class="${a?"":"hidden"}"
                .displayCreditCard=${h}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                .venmoPendingStorage=${this.venmoPendingStorage}
                @BraintreeManagerSetupComplete=${()=>{var d,c;this.braintreeManager=(d=this.braintreeManagerElement)===null||d===void 0?void 0:d.braintreeManager,(c=this.braintreeManagerElement)===null||c===void 0||c.renderPayPalVaultButton()}}
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
                .clickHandler=${()=>{var d,c;this.selectedPaymentProvider===b.Venmo&&(!((d=this.plan)===null||d===void 0)&&d.id)&&((c=this.venmoPendingStorage)===null||c===void 0||c.clearPending(this.plan.id)),this.currentlyEditing=!1,this.selectedPaymentProvider="",this.authorizedPaymentMethodRequest=void 0,this.clearStatusMessaging()}}
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!l}
                .clickHandler=${async(d,c)=>{var u,p,f;const m=c;if(m.isDisabled=!0,this.selectedPaymentProvider!==b.CreditCard){if(!this.authorizedPaymentMethodRequest){m.isDisabled=!1;return}this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:this.authorizedPaymentMethodRequest}}));return}if(!((u=this.creditCardElement)===null||u===void 0?void 0:u.reportValidity())){m.isDisabled=!1;return}const lt=await((p=this.braintreeManagerElement)===null||p===void 0?void 0:p.validateCreditCardFields());if(!lt){m.isDisabled=!1;return}const dt=new Ln({paymentMethodInfo:lt,donorContactInfo:(f=this.contactFormElement)===null||f===void 0?void 0:f.donorContactInfo,paymentProvider:b.CreditCard});this.dispatchEvent(new CustomEvent("UpdatePaymentMethod",{detail:{newPaymentMethodRequest:dt}}))}}
                >Update payment method</ia-mgc-button
              >
              ${this.selectedPaymentProvider===b.Venmo?S`<ia-mgc-button
                      id="edit-plan-payment-method-venmo-submit"
                      class="primary"
                      .clickHandler=${async(d,c)=>{var u,p;const f=c;if(f.isDisabled=!0,!((u=this.contactFormElement)===null||u===void 0?void 0:u.reportValidity())){f.isDisabled=!1;return}this.dispatchEvent(new CustomEvent("VenmoRedirectStarted",{bubbles:!0,composed:!0})),await((p=this.braintreeManagerElement)===null||p===void 0?void 0:p.startVenmoPayment()),f.isDisabled=!1}}
                      >Pay with Venmo</ia-mgc-button
                    >`:E}
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>
              <div class="secure-process-note">
                ${xr} Your payment will be securely processed
              </div>
            </form>
          `:E}
      </donation-form-section>
    `}showVenmoError(t="Venmo payment cancelled, please try again."){this.updateStatus="fail",this.updateMessage=t}handleVenmoAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new Ln({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.Venmo})}handleGooglePayVaultAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new Ln({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.GooglePay})}handleApplePayVaultAuthorized(t){var e,i;const{paymentMethodInfo:n}=t.detail;this.authorizedPaymentMethodRequest=new Ln({paymentMethodInfo:n,donorContactInfo:(i=(e=this.contactFormElement)===null||e===void 0?void 0:e.donorContactInfo)!==null&&i!==void 0?i:{},paymentProvider:b.ApplePay})}handlePayPalVaultAuthorized(t){var e,i,n,s;const{paymentMethodInfo:r}=t.detail,h=(i=(e=r?.details)===null||e===void 0?void 0:e.email)!==null&&i!==void 0?i:"",a=(s=(n=this.contactFormElement)===null||n===void 0?void 0:n.donorContactInfo)!==null&&s!==void 0?s:{customer:{email:h}};this.authorizedPaymentMethodRequest=new Ln({paymentMethodInfo:r,donorContactInfo:a,paymentProvider:b.PayPal})}get styles(){return mt`
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
    `}};v([_({type:Object})],rt.prototype,"plan",void 0);v([_({type:Object})],rt.prototype,"paymentConfig",void 0);v([_({type:String})],rt.prototype,"patronEmail",void 0);v([_({type:Boolean,reflect:!0})],rt.prototype,"currentlyEditing",void 0);v([_({type:String,reflect:!0})],rt.prototype,"newPaymentMethod",void 0);v([_({type:Object})],rt.prototype,"braintreeManager",void 0);v([_({type:String,reflect:!0})],rt.prototype,"selectedPaymentProvider",void 0);v([_({type:Boolean})],rt.prototype,"paymentSelectorFirstUpdated",void 0);v([_({type:String})],rt.prototype,"updateMessage",void 0);v([_({type:String})],rt.prototype,"updateStatus",void 0);v([_({type:Object})],rt.prototype,"venmoPendingStorage",void 0);v([w0()],rt.prototype,"authorizedPaymentMethodRequest",void 0);rt=v([at("ia-mgc-edit-payment-method")],rt);let vt=class extends tt{constructor(){super(...arguments),this.patronEmail="",this.canEditPaymentMethod=!1,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:$t.Development,paymentClients:void 0,endpointManager:void 0}}createRenderRoot(){return this}paymentMethodUpdates(t){this.querySelector("ia-mgc-edit-payment-method").paymentMethodUpdated(t)}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}dateUpdates(t){this.querySelector("ia-mgc-edit-date").dateUpdated(t)}render(){return S`
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
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};v([_({type:Object})],vt.prototype,"plan",void 0);v([_({type:String})],vt.prototype,"patronEmail",void 0);v([_({type:Boolean})],vt.prototype,"canEditPaymentMethod",void 0);v([_({type:Object})],vt.prototype,"updateAmountHandler",void 0);v([_({type:Object})],vt.prototype,"venmoPendingStorage",void 0);v([_({type:Object})],vt.prototype,"paymentConfig",void 0);v([_t("#braintree-creditcard")],vt.prototype,"braintreeNumberInput",void 0);v([_t("#braintree-expiration")],vt.prototype,"braintreeExpirationDateInput",void 0);v([_t("#braintree-cvv")],vt.prototype,"braintreeCVVInput",void 0);v([_t("#braintree-error-message")],vt.prototype,"braintreeErrorMessage",void 0);vt=v([at("ia-mgc-edit-plan")],vt);var Ct;(function(o){o.welcome="ShowWelcome",o.receipts="ShowReceipts",o.plans="ShowPlans",o.editPlan="ShowEditForm"})(Ct||(Ct={}));let ht=class extends tt{constructor(){super(...arguments),this.patronName="",this.patronEmail="",this.canEditPaymentMethod=!1,this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!0,this.venmoPendingStorage=new Y2,this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"",venmoProfileId:"",googlePayMerchantId:"",environment:$t.Development,paymentClients:void 0,endpointManager:{}}}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:n=""}=t,s=(e=i?.id)!==null&&e!==void 0?e:n;if(t.action==="paymentMethodUpdate"){this.editFormElement.paymentMethodUpdates(t.status);return}if(t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="dateUpdate"){this.editingThisPlan=i,this.editFormElement.dateUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:s,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return S`
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
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(Ct.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,s=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=S`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?Ct.plans:Ct.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=S`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?Ct.plans:Ct.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
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
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(Ct.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:S`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};v([_({type:String})],ht.prototype,"patronName",void 0);v([_({type:String})],ht.prototype,"patronEmail",void 0);v([_({type:Boolean})],ht.prototype,"canEditPaymentMethod",void 0);v([_({type:Array})],ht.prototype,"receipts",void 0);v([_({type:Array})],ht.prototype,"updates",void 0);v([_({type:Array})],ht.prototype,"plans",void 0);v([_({type:Object})],ht.prototype,"editingThisPlan",void 0);v([_({type:String,reflect:!0})],ht.prototype,"viewToDisplay",void 0);v([_({type:Boolean,reflect:!0})],ht.prototype,"canEdit",void 0);v([_({type:Object})],ht.prototype,"venmoPendingStorage",void 0);v([_({type:Object})],ht.prototype,"paymentConfig",void 0);ht=v([at("ia-monthly-giving-circle")],ht);class Ro{constructor(t){this.receipt=t}get amount(){var t;return dr(this.receipt.total_amount,(t=this.receipt.currency)!==null&&t!==void 0?t:"USD")}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}}class tA{constructor(t){var e;this.plan=t,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get amount(){return this.plan.amount}get amountFormatted(){return dr(this.plan.amount,this.currency)}get payment(){return this.plan.btdata}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}get nextBillingDate(){var t,e,i;return(i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:""}setNextBillingDate(t){this.payment&&(this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=t)}formatDateUTC(t){const e=new Date(t);return Number.isNaN(e.getTime())?"Invalid date":new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"}).format(e)}get nextBillingDateLocale(){var t,e,i;const n=(i=(e=(t=this.payment)===null||t===void 0?void 0:t.nextBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:"";return n?this.formatDateUTC(n):"not found"}get lastBillingDateLocale(){var t,e,i;const n=(i=(e=(t=this.payment)===null||t===void 0?void 0:t.lastBillingDate)===null||e===void 0?void 0:e.date)!==null&&i!==void 0?i:"";return n?this.formatDateUTC(n):""}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(t){const e=this.plan.processor_id;this.plan.processor_id=t,this.plan.oldProcessorId=e}setNewPaymentMethod(t){var e,i,n,s,r,h,a;const l=this.payment,{details:d,type:c}=t.paymentMethodInfo,u=(i=(e=d.email)!==null&&e!==void 0?e:d.description)!==null&&i!==void 0?i:"not_found";let p;switch(t.paymentProvider){case b.PayPal:p={...this.plan.btdata,paymentMethodType:"PayPal",paypalEmail:u,cardType:null,last4:null,expirationMonth:null,expirationYear:null};break;case b.Venmo:p={...this.plan.btdata,paymentMethodType:b.Venmo,venmoUsername:d.username,cardType:null,last4:null,expirationMonth:null,expirationYear:null};break;case b.GooglePay:p={...this.plan.btdata,paymentMethodType:b.GooglePay,cardType:(n=d.cardType)!==null&&n!==void 0?n:null,last4:(s=d.lastFour)!==null&&s!==void 0?s:null,expirationMonth:null,expirationYear:null};break;case b.ApplePay:p={...this.plan.btdata,paymentMethodType:b.ApplePay,cardType:(r=d.cardType)!==null&&r!==void 0?r:null,last4:(h=d.lastTwo)!==null&&h!==void 0?h:null,expirationMonth:null,expirationYear:null};break;default:p={...this.plan.btdata,...d,paymentMethodType:c,last4:(a=d.lastFour)!==null&&a!==void 0?a:"unknown"}}this.plan.old_btData=l,this.plan.btdata=p}}let ft=[];const Ji=new Date;Ji.setDate(Ji.getDate()+25);Ji.setMinutes(0);Ji.setSeconds(0);Ji.setMilliseconds(0);console.log("nextPaymentIn25Days",Ji.toISOString());const Qi=new Date;Qi.setMinutes(0);Qi.setSeconds(0);Qi.setMilliseconds(0);Qi.setDate(1);console.log("lastPaymentInTheSameMonth",Qi.toISOString());const Ud=new Date;Ud.setMonth(Ud.getMonth()+1);const tn=new Date(Ud);tn.setMinutes(0);tn.setSeconds(0);tn.setMilliseconds(0);tn.setDate(1);console.log("nextPaymentFirstOfMonth",tn.toISOString());const eA=new Date;eA.setHours(0,0,0,0);const ch=new Date;ch.setHours(0,0,0,0);ch.setDate(0);const Ho=new Date;Ho.setHours(0,0,0,0);Ho.setMonth(Ho.getMonth()+1);Ho.setDate(0);const $0={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10.3,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:ch.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Ho.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"PayPal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:2.5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:Qi.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:tn.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}},51902:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar777gigglingSoda",amount:7.5,currency:"USD",start_date:"2024-09-10 00:00:00",is_test:!0,btdata:{billingDayOfMonth:10,nextBillingDate:{date:"2024-10-10 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Google Pay",last4:"4242",cardType:"Visa",expirationMonth:null,expirationYear:null}},62813:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar888hummingTonic",amount:12,currency:"USD",start_date:"2024-11-05 00:00:00",is_test:!0,btdata:{billingDayOfMonth:5,nextBillingDate:{date:"2024-12-05 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Apple Pay",last4:"42",cardType:"Visa",expirationMonth:null,expirationYear:null}}},D$=Object.keys($0).map(o=>new tA($0[o])),O$=[new Ro({currency:"USD",total_amount:1,net_amount:1,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-1",token:"foo-token-1",is_test:!1}),new Ro({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-4",token:"foo-token-4",is_test:!1}),new Ro({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,fee_covered:!0,date:new Date("2022-09-22 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new Ro({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})],iA={referrer:"",origin:"",braintreeAuthToken:"sandbox_x634jsj7_7zybks4ybp63pbmd",venmoProfileId:"1953896702662410263",googlePayMerchantId:"merchant-id-placeholder",environment:"dev",paymentClients:new iv(new R$,$t.Development),endpointManager:{submitData:async o=>{debugger},donationSuccessful:o=>{debugger}}};let cl=!0;const w=document.getElementById("interaction-status-area"),nA=()=>Math.floor(Math.random()+.5),Or=()=>document.getElementById("force-successful-requests").checked?1:nA(),M=document.querySelector("ia-monthly-giving-circle");M.paymentConfig=iA;M.receipts=O$;M.plans=D$;M.addEventListener("EmailReceiptRequest",o=>{const{donation:t}=o.detail,e=Or()===1,i=e?"success":"fail",n=e?1500:5e3;w.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${n} ms.`;const r={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};ft=[r,...ft],setTimeout(()=>{M.updateReceived(r),console.log("EmailReceiptRequest index.html ----",r),w.innerText=""},n)});M.addEventListener("cancelPlan",async o=>{const{plan:t}=o.detail,i=M.plans.map(n=>(n.plan.token===t.plan.token&&(console.log("p 2 plan",n,t),n.cancelPlan()),n));M.plans=i,await M.updateComplete,console.log("plan cancelled & plan list updated",M.plans)});M.addEventListener("updateAmount",async o=>{const{plan:t,amountOptions:e}=o.detail,i=Or()===1,n=i?"success":"fail",s=i?1500:5e3;w.innerText=`Amount Update Request received: will return ${n} in ${s} ms - Details: ${JSON.stringify(e)}`;const r=n==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const h={message:r,status:n,plan:t,donationId:t.id,action:"amountUpdate"};ft=[h,...ft],setTimeout(()=>{M.updateReceived(h),console.log("Amount Update Request --- index.html ----",h),w.innerText=""},s)});M.addEventListener("updateDate",o=>{const{newDate:t,plan:e}=o.detail,i=Or()===1,n=i?"success":"fail",s=i?1500:5e3;w.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(e.id)} -- Update will return ${n} in ${s} ms`;const r=n==="success"?"Date updated":"Date failed to update";i&&(e.setNextBillingDate(t),e.setNewProcessorId("new-processor_id@1"));const h={message:r,status:n,plan:e,donationId:e.id,action:"dateUpdate"};ft=[h,...ft],setTimeout(()=>{M.updateReceived(h),console.log("Amount Update Request --- index.html ----",h),w.innerText=""},s)});M.addEventListener("UpdatePaymentMethod",o=>{console.log("UpdatePaymentMethod received:",o.detail);const{plan:t,newPaymentMethodRequest:e}=o.detail,i=e?.paymentProvider,n=i==="PayPal",s=i==="Venmo",r=i==="Google Pay",h=i==="Apple Pay",a=n||s||r||h?!0:Or()===1,l=a?"success":"fail",d=a?1500:4e3,c=e?.paymentMethodInfo?.details,u=e?.paymentMethodInfo?.nonce;let p;n?p=`PayPal (${c?.email}, nonce: ${u})`:s?p=`Venmo (@${c?.username}, nonce: ${u})`:r?p=`Google Pay (${c?.cardType} - ${c?.lastFour}, nonce: ${u})`:h?p=`Apple Pay (${c?.cardType} - ${c?.lastTwo}, nonce: ${u})`:p="Credit Card",w.innerText=`Updating ${p} for plan: ${t?t.id:"no plan"} — will return ${l} in ${d} ms`;const f=l==="success"?"Payment method updated":"Payment method failed to update";a&&t&&(console.log("demo - setting new payment method",e),t.setNewPaymentMethod(e));const m={message:f,status:l,plan:t,donationId:t?t.id:null,action:"paymentMethodUpdate"};ft=[m,...ft],setTimeout(()=>{M.updateReceived(m),console.log("UpdatePaymentMethod --- index.html ----",m),w.innerText=""},d)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(cl){M.receipts=[],cl=!1;return}M.receipts=O$,await M.updateComplete,cl=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{ft=[],M.updates=ft,await M.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{M.plans=M.plans.length?[]:D$,await M.updateComplete});document.getElementById("toggle-prefilled-email").addEventListener("click",async()=>{M.patronEmail=M.patronEmail?"":"you@thisemail.com",await M.updateComplete});document.getElementById("toggle-edit-payment-method").addEventListener("click",async()=>{M.canEditPaymentMethod=!M.canEditPaymentMethod,await M.updateComplete});document.getElementById("mock-venmo-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("VenmoAuthorized",{detail:{paymentMethodInfo:{description:"Venmo - @mock_venmo_user",nonce:`mock-venmo-nonce-${Date.now()}`,type:"VenmoAccount",details:{username:"mock_venmo_user"}}}})),w.innerText="Mock VenmoAuthorized event dispatched."});document.getElementById("mock-venmo-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("VenmoError",{detail:{error:{code:"VENMO_MOCK_ERROR",message:"Mock Venmo error for demo"}}})),w.innerText="Mock VenmoError event dispatched."});document.getElementById("mock-googlepay-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("GooglePayVaultAuthorized",{detail:{paymentMethodInfo:{description:"Google Pay - Visa - 4242",nonce:`mock-googlepay-nonce-${Date.now()}`,type:"AndroidPayCard",details:{cardType:"Visa",lastFour:"4242"}}}})),w.innerText="Mock GooglePayVaultAuthorized event dispatched."});document.getElementById("mock-googlepay-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("GooglePayError",{detail:{error:{message:"Mock Google Pay error for demo"}}})),w.innerText="Mock GooglePayError event dispatched."});document.getElementById("mock-applepay-success").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("ApplePayVaultAuthorized",{detail:{paymentMethodInfo:{description:"Apple Pay - Visa - 42",nonce:`mock-applepay-nonce-${Date.now()}`,type:"ApplePayCard",details:{cardType:"Visa",lastTwo:"42"}}}})),w.innerText="Mock ApplePayVaultAuthorized event dispatched."});document.getElementById("mock-applepay-error").addEventListener("click",()=>{const o=document.querySelector("ia-mgc-braintree-manager");if(!o){w.innerText="No braintree manager found — open a plan in edit mode first.";return}o.dispatchEvent(new CustomEvent("ApplePayError",{detail:{error:{message:"Mock Apple Pay error for demo"}}})),w.innerText="Mock ApplePayError event dispatched."});class uh{static STATUS_SUCCESS=1;static STATUS_FAILURE=2;static supportsVersion(){return!0}static canMakePayments(){return!0}constructor(t,e){this.version=t,this.paymentRequest=e}begin(){if(!window.confirm(`Apple Pay Demo

This is a simulated Apple Pay sheet — no real Apple Pay session exists in this browser.

Click OK to simulate a successful payment authorization for Visa ...42.`)){w.innerText="Simulated Apple Pay sheet cancelled.",this.oncancel?.();return}w.innerText="Simulated Apple Pay sheet: auto-validating merchant...",Promise.resolve().then(()=>{this.onvalidatemerchant?.({validationURL:"https://fake.apple.example/validate"})})}completeMerchantValidation(){w.innerText="Simulated Apple Pay: merchant validated, auto-authorizing payment...",Promise.resolve().then(()=>{this.onpaymentauthorized?.({payment:{token:{fake:!0},billingContact:{},shippingContact:{emailAddress:"demo-donor@example.com"}}})})}abort(){w.innerText="Simulated Apple Pay session aborted."}completePayment(t){w.innerText=t===uh.STATUS_SUCCESS?"Simulated Apple Pay: payment completed successfully.":"Simulated Apple Pay: payment failed."}}function oA(){const o={createPaymentRequest:t=>t,performValidation:(t,e)=>{e(null,{fakeMerchantSession:!0})},tokenize:()=>Promise.resolve({nonce:`demo-fake-applepay-nonce-${Date.now()}`,type:"ApplePayCard",details:{cardType:"Visa",dpanLastTwo:"42"}})};return{isAvailable:async()=>!0,instance:{get:async()=>o}}}let Fo=null;function g0(){const t=document.querySelector("ia-mgc-braintree-manager")?.braintreeManager;t&&!t.__demoApplePayPatched&&(t.paymentProviders.applePayHandler={get:async()=>oA()},t.__demoApplePayPatched=!0);const e=document.querySelector("ia-mgc-edit-payment-method payment-selector");e&&(e.applePayMode="available")}document.getElementById("simulate-applepay").addEventListener("change",o=>{o.target.checked?(window.ApplePaySession=uh,g0(),Fo=setInterval(g0,300),w.innerText="Apple Pay simulation enabled — open a plan in edit mode to see the icon."):(delete window.ApplePaySession,Fo&&(clearInterval(Fo),Fo=null),w.innerText="Apple Pay simulation disabled.")});function sA(){const o={createPaymentDataRequest:t=>t,parseResponse:()=>Promise.resolve({nonce:`demo-fake-googlepay-nonce-${Date.now()}`,type:"AndroidPayCard",details:{cardType:"Visa",lastFour:"4242"}})};return{isBrowserSupported:async()=>!0,instance:{get:async()=>o},paymentsClient:{loadPaymentData:()=>{if(!window.confirm(`Google Pay Demo

This is a simulated Google Pay sheet — no real Google Pay session exists in this browser.

Click OK to simulate a successful payment authorization for Visa ...4242.`)){w.innerText="Simulated Google Pay sheet cancelled.";const e=new Error("User closed the Payment Request UI.");return e.statusCode="CANCELED",Promise.reject(e)}return w.innerText="Simulated Google Pay sheet: auto-authorizing payment...",Promise.resolve({fakePaymentData:!0})}}}}let Lo=null;function y0(){const t=document.querySelector("ia-mgc-braintree-manager")?.braintreeManager;t&&!t.__demoGooglePayPatched&&(t.paymentProviders.googlePayHandler={get:async()=>sA()},t.__demoGooglePayPatched=!0);const e=document.querySelector("ia-mgc-edit-payment-method payment-selector");e&&(e.googlePayMode="available")}document.getElementById("simulate-googlepay").addEventListener("change",o=>{o.target.checked?(y0(),Lo=setInterval(y0,300),w.innerText="Google Pay simulation enabled — open a plan in edit mode to see the icon."):(Lo&&(clearInterval(Lo),Lo=null),w.innerText="Google Pay simulation disabled.")});
