(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function $(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var d=n.length-1;d>=0;d--)(r=n[d])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He=globalThis,Ls=He.ShadowRoot&&(He.ShadyCSS===void 0||He.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zs=Symbol(),rn=new WeakMap;let Wo=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==zs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ls&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=rn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&rn.set(e,t))}return t}toString(){return this.cssText}};const da=n=>new Wo(typeof n=="string"?n:n+"",void 0,zs),k=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new Wo(e,n,zs)},ha=(n,t)=>{if(Ls)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=He.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},an=Ls?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return da(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ca,defineProperty:ua,getOwnPropertyDescriptor:pa,getOwnPropertyNames:$a,getOwnPropertySymbols:va,getPrototypeOf:ma}=Object,vi=globalThis,ln=vi.trustedTypes,ga=ln?ln.emptyScript:"",fa=vi.reactiveElementPolyfillSupport,ce=(n,t)=>n,Fe={toAttribute(n,t){switch(t){case Boolean:n=n?ga:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},js=(n,t)=>!ca(n,t),dn={attribute:!0,type:String,converter:Fe,reflect:!1,useDefault:!1,hasChanged:js};Symbol.metadata??=Symbol("metadata"),vi.litPropertyMetadata??=new WeakMap;let Et=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dn){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&ua(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=pa(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const d=s?.call(this);o?.call(this,r),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dn}static _$Ei(){if(this.hasOwnProperty(ce("elementProperties")))return;const t=ma(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ce("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce("properties"))){const e=this.properties,i=[...$a(e),...va(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(an(s))}else t!==void 0&&e.push(an(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ha(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:Fe).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Fe;this._$Em=s;const d=r.fromAttribute(e,o.type);this[s]=d??this._$Ej?.get(s)??d,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(t!==void 0){const r=this.constructor;if(s===!1&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??js)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),o!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i){const{wrapped:r}=o,d=this[s];r!==!0||this._$AL.has(s)||d===void 0||this.C(s,void 0,o,d)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Et.elementStyles=[],Et.shadowRootOptions={mode:"open"},Et[ce("elementProperties")]=new Map,Et[ce("finalized")]=new Map,fa?.({ReactiveElement:Et}),(vi.reactiveElementVersions??=[]).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fs=globalThis,hn=n=>n,qe=Fs.trustedTypes,cn=qe?qe.createPolicy("lit-html",{createHTML:n=>n}):void 0,Go="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Jo="?"+L,ya=`<${Jo}>`,pt=document,ue=()=>pt.createComment(""),pe=n=>n===null||typeof n!="object"&&typeof n!="function",qs=Array.isArray,_a=n=>qs(n)||typeof n?.[Symbol.iterator]=="function",Pi=`[ 	
\f\r]`,Zt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,un=/-->/g,pn=/>/g,K=RegExp(`>|${Pi}(?:([^\\s"'>=/]+)(${Pi}*=${Pi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$n=/'/g,vn=/"/g,Yo=/^(?:script|style|textarea|title)$/i,Aa=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=Aa(1),xt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),mn=new WeakMap,nt=pt.createTreeWalker(pt,129);function Ko(n,t){if(!qs(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return cn!==void 0?cn.createHTML(t):t}const ba=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",r=Zt;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===Zt?c[1]==="!--"?r=un:c[1]!==void 0?r=pn:c[2]!==void 0?(Yo.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=K):c[3]!==void 0&&(r=K):r===K?c[0]===">"?(r=s??Zt,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?K:c[3]==='"'?vn:$n):r===vn||r===$n?r=K:r===un||r===pn?r=Zt:(r=K,s=void 0);const p=r===K&&n[d+1].startsWith("/>")?" ":"";o+=r===Zt?a+ya:h>=0?(i.push(l),a.slice(0,h)+Go+a.slice(h)+L+p):a+L+(h===-2?d:p)}return[Ko(n,o+(n[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let ds=class Zo{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=ba(t,e);if(this.el=Zo.createElement(l,i),nt.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=nt.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Go)){const u=c[r++],p=s.getAttribute(h).split(L),_=/([.?@])?(.*)/.exec(u);a.push({type:1,index:o,name:_[2],strings:p,ctor:_[1]==="."?Ea:_[1]==="?"?wa:_[1]==="@"?Ca:mi}),s.removeAttribute(h)}else h.startsWith(L)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(Yo.test(s.tagName)){const h=s.textContent.split(L),u=h.length-1;if(u>0){s.textContent=qe?qe.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],ue()),nt.nextNode(),a.push({type:2,index:++o});s.append(h[u],ue())}}}else if(s.nodeType===8)if(s.data===Jo)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(L,h+1))!==-1;)a.push({type:7,index:o}),h+=L.length-1}o++}}static createElement(t,e){const i=pt.createElement("template");return i.innerHTML=t,i}};function Mt(n,t,e=n,i){if(t===xt)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=pe(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=Mt(n,s._$AS(n,t.values),s,i)),t}let Sa=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??pt).importNode(e,!0);nt.currentNode=s;let o=nt.nextNode(),r=0,d=0,a=i[0];for(;a!==void 0;){if(r===a.index){let l;a.type===2?l=new Vs(o,o.nextSibling,this,t):a.type===1?l=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(l=new xa(o,this,t)),this._$AV.push(l),a=i[++d]}r!==a?.index&&(o=nt.nextNode(),r++)}return nt.currentNode=pt,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Vs=class Qo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Mt(this,t,e),pe(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==xt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):_a(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&pe(this._$AH)?this._$AA.nextSibling.data=t:this.T(pt.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ds.createElement(Ko(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Sa(s,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=mn.get(t.strings);return e===void 0&&mn.set(t.strings,e=new ds(t)),e}k(t){qs(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Qo(this.O(ue()),this.O(ue()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=hn(t).nextSibling;hn(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},mi=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Mt(this,t,e,0),r=!pe(t)||t!==this._$AH&&t!==xt,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Mt(this,d[i+a],e,a),l===xt&&(l=this._$AH[a]),r||=!pe(l)||l!==this._$AH[a],l===y?t=y:t!==y&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ea=class extends mi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},wa=class extends mi{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Ca=class extends mi{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Mt(this,t,e,0)??y)===xt)return;const i=this._$AH,s=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},xa=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Mt(this,t)}};const Ma=Fs.litHtmlPolyfillSupport;Ma?.(ds,Vs),(Fs.litHtmlVersions??=[]).push("3.3.2");const Pa=(n,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new Vs(t.insertBefore(ue(),o),o,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ws=globalThis;let N=class extends Et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pa(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xt}};N._$litElement$=!0,N.finalized=!0,Ws.litElementHydrateSupport?.({LitElement:N});const Ta=Ws.litElementPolyfillSupport;Ta?.({LitElement:N});(Ws.litElementVersions??=[]).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Na={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:js},Ua=(n=Na,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),i==="setter"&&((n=Object.create(n)).wrapped=!0),o.set(e.name,n),i==="accessor"){const{name:r}=e;return{set(d){const a=t.get.call(this);t.set.call(this,d),this.requestUpdate(r,a,n,!0,d)},init(d){return d!==void 0&&this.C(r,void 0,n,d),d}}}if(i==="setter"){const{name:r}=e;return function(d){const a=this[r];t.call(this,d),this.requestUpdate(r,a,n,!0,d)}}throw Error("Unsupported decorator location: "+i)};function g(n){return(t,e)=>typeof e=="object"?Ua(n,t,e):((i,s,o)=>{const r=s.hasOwnProperty(o);return s.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(s,o):void 0})(n,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ia=(n,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(n,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Jt(n,t){return(e,i,s)=>{const o=r=>r.renderRoot?.querySelector(n)??null;return Ia(e,i,{get(){return o(this)}})}}const Da="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let Pt=class extends N{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return m`
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
          <a class="link" href=${Da}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};Pt.styles=k`
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
  `;$([g({type:String})],Pt.prototype,"patronName",void 0);$([g({type:String})],Pt.prototype,"baseHost",void 0);$([g({type:String})],Pt.prototype,"defaultMonthlyDonationAmount",void 0);Pt=$([H("ia-mgc-welcome")],Pt);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=window,Gs=ke.ShadowRoot&&(ke.ShadyCSS===void 0||ke.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xo=Symbol(),gn=new WeakMap;let Ha=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Xo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Gs&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=gn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&gn.set(e,t))}return t}toString(){return this.cssText}};const ka=n=>new Ha(typeof n=="string"?n:n+"",void 0,Xo),Oa=(n,t)=>{Gs?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=ke.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},fn=Gs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ka(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ti;const Ve=window,yn=Ve.trustedTypes,Ra=yn?yn.emptyScript:"",_n=Ve.reactiveElementPolyfillSupport,hs={toAttribute(n,t){switch(t){case Boolean:n=n?Ra:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},tr=(n,t)=>t!==n&&(t==t||n==n),Ni={attribute:!0,type:String,converter:hs,reflect:!1,hasChanged:tr},cs="finalized";let Qt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Ni){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ni}static finalize(){if(this.hasOwnProperty(cs))return!1;this[cs]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(fn(s))}else t!==void 0&&e.push(fn(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Oa(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ni){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:hs).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:hs;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Qt[cs]=!0,Qt.elementProperties=new Map,Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},_n?.({ReactiveElement:Qt}),((Ti=Ve.reactiveElementVersions)!==null&&Ti!==void 0?Ti:Ve.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ui;const We=window,Tt=We.trustedTypes,An=Tt?Tt.createPolicy("lit-html",{createHTML:n=>n}):void 0,us="$lit$",z=`lit$${(Math.random()+"").slice(9)}$`,er="?"+z,Ba=`<${er}>`,$t=document,Ge=()=>$t.createComment(""),$e=n=>n===null||typeof n!="object"&&typeof n!="function",ir=Array.isArray,La=n=>ir(n)||typeof n?.[Symbol.iterator]=="function",Ii=`[ 	
\f\r]`,Xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bn=/-->/g,Sn=/>/g,Z=RegExp(`>|${Ii}(?:([^\\s"'>=/]+)(${Ii}*=${Ii}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),En=/'/g,wn=/"/g,sr=/^(?:script|style|textarea|title)$/i,ve=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Cn=new WeakMap,ot=$t.createTreeWalker($t,129,null,!1);function nr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return An!==void 0?An.createHTML(t):t}const za=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=Xt;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===Xt?c[1]==="!--"?r=bn:c[1]!==void 0?r=Sn:c[2]!==void 0?(sr.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=Z):c[3]!==void 0&&(r=Z):r===Z?c[0]===">"?(r=s??Xt,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?Z:c[3]==='"'?wn:En):r===wn||r===En?r=Z:r===bn||r===Sn?r=Xt:(r=Z,s=void 0);const p=r===Z&&n[d+1].startsWith("/>")?" ":"";o+=r===Xt?a+Ba:h>=0?(i.push(l),a.slice(0,h)+us+a.slice(h)+z+p):a+z+(h===-2?(i.push(void 0),d):p)}return[nr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let ps=class or{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=za(t,e);if(this.el=or.createElement(l,i),ot.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=ot.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(us)||u.startsWith(z)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+us).split(z),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?Fa:v[1]==="?"?Va:v[1]==="@"?Wa:gi})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(sr.test(s.tagName)){const h=s.textContent.split(z),u=h.length-1;if(u>0){s.textContent=Tt?Tt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],Ge()),ot.nextNode(),a.push({type:2,index:++o});s.append(h[u],Ge())}}}else if(s.nodeType===8)if(s.data===er)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(z,h+1))!==-1;)a.push({type:7,index:o}),h+=z.length-1}o++}}static createElement(t,e){const i=$t.createElement("template");return i.innerHTML=t,i}};function Nt(n,t,e=n,i){var s,o,r,d;if(t===ve)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=$e(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Nt(n,a._$AS(n,t.values),a,i)),t}let ja=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:$t).importNode(i,!0);ot.currentNode=o;let r=ot.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new rr(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ga(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=ot.nextNode(),d++)}return ot.currentNode=$t,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},rr=class ar{constructor(t,e,i,s){var o;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Nt(this,t,e),$e(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==ve&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):La(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==C&&$e(this._$AH)?this._$AA.nextSibling.data=t:this.$($t.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ps.createElement(nr(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new ja(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Cn.get(t.strings);return e===void 0&&Cn.set(t.strings,e=new ps(t)),e}T(t){ir(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new ar(this.k(Ge()),this.k(Ge()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},gi=class{constructor(t,e,i,s,o){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Nt(this,t,e,0),r=!$e(t)||t!==this._$AH&&t!==ve,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Nt(this,d[i+a],e,a),l===ve&&(l=this._$AH[a]),r||(r=!$e(l)||l!==this._$AH[a]),l===C?t=C:t!==C&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Fa=class extends gi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}};const qa=Tt?Tt.emptyScript:"";let Va=class extends gi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==C?this.element.setAttribute(this.name,qa):this.element.removeAttribute(this.name)}},Wa=class extends gi{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Nt(this,t,e,0))!==null&&i!==void 0?i:C)===ve)return;const s=this._$AH,o=t===C&&s!==C||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==C&&(s===C||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ga=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Nt(this,t)}};const xn=We.litHtmlPolyfillSupport;xn?.(ps,rr),((Ui=We.litHtmlVersions)!==null&&Ui!==void 0?Ui:We.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=window,Js=Oe.ShadowRoot&&(Oe.ShadyCSS===void 0||Oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ys=Symbol(),Mn=new WeakMap;let lr=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ys)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Js&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Mn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Mn.set(e,t))}return t}toString(){return this.cssText}};const Ja=n=>new lr(typeof n=="string"?n:n+"",void 0,Ys),f=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new lr(e,n,Ys)},Ya=(n,t)=>{Js?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Oe.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Pn=Js?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ja(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Di;const Je=window,Tn=Je.trustedTypes,Ka=Tn?Tn.emptyScript:"",Nn=Je.reactiveElementPolyfillSupport,$s={toAttribute(n,t){switch(t){case Boolean:n=n?Ka:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},dr=(n,t)=>t!==n&&(t==t||n==n),Hi={attribute:!0,type:String,converter:$s,reflect:!1,hasChanged:dr},vs="finalized";let wt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Hi){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Hi}static finalize(){if(this.hasOwnProperty(vs))return!1;this[vs]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Pn(s))}else t!==void 0&&e.push(Pn(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ya(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Hi){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:$s).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:$s;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||dr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};wt[vs]=!0,wt.elementProperties=new Map,wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},Nn?.({ReactiveElement:wt}),((Di=Je.reactiveElementVersions)!==null&&Di!==void 0?Di:Je.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ki;const Ye=window,Ut=Ye.trustedTypes,Un=Ut?Ut.createPolicy("lit-html",{createHTML:n=>n}):void 0,ms="$lit$",j=`lit$${(Math.random()+"").slice(9)}$`,hr="?"+j,Za=`<${hr}>`,vt=document,me=()=>vt.createComment(""),ge=n=>n===null||typeof n!="object"&&typeof n!="function",cr=Array.isArray,Qa=n=>cr(n)||typeof n?.[Symbol.iterator]=="function",Oi=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,In=/-->/g,Dn=/>/g,Q=RegExp(`>|${Oi}(?:([^\\s"'>=/]+)(${Oi}*=${Oi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hn=/'/g,kn=/"/g,ur=/^(?:script|style|textarea|title)$/i,Xa=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),I=Xa(1),It=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),On=new WeakMap,rt=vt.createTreeWalker(vt,129,null,!1);function pr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Un!==void 0?Un.createHTML(t):t}const tl=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=te;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===te?c[1]==="!--"?r=In:c[1]!==void 0?r=Dn:c[2]!==void 0?(ur.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=Q):c[3]!==void 0&&(r=Q):r===Q?c[0]===">"?(r=s??te,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?Q:c[3]==='"'?kn:Hn):r===kn||r===Hn?r=Q:r===In||r===Dn?r=te:(r=Q,s=void 0);const p=r===Q&&n[d+1].startsWith("/>")?" ":"";o+=r===te?a+Za:h>=0?(i.push(l),a.slice(0,h)+ms+a.slice(h)+j+p):a+j+(h===-2?(i.push(void 0),d):p)}return[pr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let gs=class $r{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=tl(t,e);if(this.el=$r.createElement(l,i),rt.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=rt.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(ms)||u.startsWith(j)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+ms).split(j),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?il:v[1]==="?"?nl:v[1]==="@"?ol:fi})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(ur.test(s.tagName)){const h=s.textContent.split(j),u=h.length-1;if(u>0){s.textContent=Ut?Ut.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],me()),rt.nextNode(),a.push({type:2,index:++o});s.append(h[u],me())}}}else if(s.nodeType===8)if(s.data===hr)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(j,h+1))!==-1;)a.push({type:7,index:o}),h+=j.length-1}o++}}static createElement(t,e){const i=vt.createElement("template");return i.innerHTML=t,i}};function Dt(n,t,e=n,i){var s,o,r,d;if(t===It)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=ge(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Dt(n,a._$AS(n,t.values),a,i)),t}let el=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:vt).importNode(i,!0);rt.currentNode=o;let r=rt.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new Ks(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new rl(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=rt.nextNode(),d++)}return rt.currentNode=vt,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ks=class vr{constructor(t,e,i,s){var o;this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Dt(this,t,e),ge(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==It&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qa(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==S&&ge(this._$AH)?this._$AA.nextSibling.data=t:this.$(vt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=gs.createElement(pr(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new el(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=On.get(t.strings);return e===void 0&&On.set(t.strings,e=new gs(t)),e}T(t){cr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new vr(this.k(me()),this.k(me()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},fi=class{constructor(t,e,i,s,o){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Dt(this,t,e,0),r=!ge(t)||t!==this._$AH&&t!==It,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Dt(this,d[i+a],e,a),l===It&&(l=this._$AH[a]),r||(r=!ge(l)||l!==this._$AH[a]),l===S?t=S:t!==S&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},il=class extends fi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}};const sl=Ut?Ut.emptyScript:"";let nl=class extends fi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==S?this.element.setAttribute(this.name,sl):this.element.removeAttribute(this.name)}},ol=class extends fi{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Dt(this,t,e,0))!==null&&i!==void 0?i:S)===It)return;const s=this._$AH,o=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},rl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Dt(this,t)}};const Rn=Ye.litHtmlPolyfillSupport;Rn?.(gs,Ks),((ki=Ye.litHtmlVersions)!==null&&ki!==void 0?ki:Ye.litHtmlVersions=[]).push("2.8.0");const al=(n,t,e)=>{var i,s;const o=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const d=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new Ks(t.insertBefore(me(),d),d,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ri,Bi;let J=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=al(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return It}};J.finalized=!0,J._$litElement$=!0,(Ri=globalThis.litElementHydrateSupport)===null||Ri===void 0||Ri.call(globalThis,{LitElement:J});const Bn=globalThis.litElementPolyfillSupport;Bn?.({LitElement:J});((Bi=globalThis.litElementVersions)!==null&&Bi!==void 0?Bi:globalThis.litElementVersions=[]).push("3.3.3");const ll=I`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class dl extends J{static get styles(){return f`
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
    `}render(){return ll}}customElements.define("ia-icon-donate",dl);let Ht=class extends N{constructor(){super(...arguments),this.isDisabled=!1}render(){return m`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};Ht.styles=k`
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
  `;$([g({type:Boolean,reflect:!0})],Ht.prototype,"isDisabled",void 0);$([g({type:Object})],Ht.prototype,"clickHandler",void 0);$([Jt("button")],Ht.prototype,"button",void 0);Ht=$([H("ia-mgc-button")],Ht);let fe=class extends N{constructor(){super(...arguments),this.plans=[],this.canEdit=!1}render(){return m`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,s,o,r,d,a,l,c,h,u,p,_,v,Ie,wi,Ci,xi;let Mi=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";Mi==="creditCard"&&(Mi="Credit card");const aa=(o=(s=t.payment)===null||s===void 0?void 0:s.cardType)!==null&&o!==void 0?o:"Card type not found",la=!((r=t.payment)===null||r===void 0)&&r.last4?`...${(d=t.payment)===null||d===void 0?void 0:d.last4}`:"CC number not found";return m`
              <li class=${`${t.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${t.currency}
                      ${t.currencySymbol}${t.amountFormatted}/month
                    </p>
                    ${t.isTest?m`<p class="is-test">(Test payment)</p>`:y}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${Mi}</p>
                    ${((a=t.payment)===null||a===void 0?void 0:a.paymentMethodType)==="creditCard"?m`<p>${aa}</p>
                          <p>${la}</p>`:y}
                    ${((l=t.payment)===null||l===void 0?void 0:l.paymentMethodType)==="Paypal"?m`<p>
                          Paypal email:
                          <a href=${`mailto:${(c=t.payment)===null||c===void 0?void 0:c.paypalEmail}`}
                            >${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}</a
                          >
                        </p>`:y}
                    ${((u=t.payment)===null||u===void 0?void 0:u.paymentMethodType)==="Venmo"?m`<p>
                          Venmo username:
                          <a href=${`mailto:${(p=t.payment)===null||p===void 0?void 0:p.venmoUsername}`}
                            >${(_=t.payment)===null||_===void 0?void 0:_.paypalEmail}</a
                          >
                        </p>`:y}
                    ${((v=t.payment)===null||v===void 0?void 0:v.paymentMethodType)!=="creditCard"?m`<p>
                          Expires:
                          ${(wi=(Ie=t.payment)===null||Ie===void 0?void 0:Ie.expirationMonth)!==null&&wi!==void 0?wi:"month not found"}/${(xi=(Ci=t.payment)===null||Ci===void 0?void 0:Ci.expirationYear)!==null&&xi!==void 0?xi:"year not found"}
                        </p>`:y}
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
    `}planCTA(t){if(!this.canEdit)return m`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}>donations@archive.org</a>.
      </p>`;const e=t.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return m`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${t.plan.isCancelled}
      .clickHandler=${async(i,s)=>{s.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:t}}))}}
      >${e}</ia-mgc-button
    >`}};fe.styles=k`
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
  `;$([g({type:Array})],fe.prototype,"plans",void 0);$([g({type:Boolean,reflect:!0})],fe.prototype,"canEdit",void 0);fe=$([H("ia-mgc-plans")],fe);let Ke=class extends N{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?m` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:y}render(){return m`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};Ke.styles=k`
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
  `;$([g({type:String})],Ke.prototype,"titleStyle",void 0);Ke=$([H("ia-mgc-title")],Ke);let ye=class extends N{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const s={...i},{id:o}=t;s[o]=t,this.receiptDispatcher={...s},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=CSS.escape(o),d=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${r} ia-mgc-button`);d.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return m`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],s=i?.emailStatus==="pending",o=!i||!i.emailStatus?y:m`<ia-mgc-update-status
                        .status=${i.emailStatus}
                        >${this.emailStatusMessageToDisplay(i)}</ia-mgc-update-status
                      >`;return m`
                  <tr
                    id=${`donation-${t.id}`}
                    class=${`${t.isTest?"test":""}`}
                  >
                    <td>
                      <div class="donation-date">${t.date}</div>
                    </td>
                    <td>
                      <div class="donation-amount">
                        ${t.amountFormatted}
                      </div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <ia-mgc-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async(r,d)=>{if(!s&&(d.isDisabled=!0,await d.updateComplete),!s&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-mgc-button>
                        ${o}
                      </div>
                    </td>
                  </tr>
                `}):m`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};ye.styles=k`
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
  `;$([g({type:Array})],ye.prototype,"receipts",void 0);$([g({type:Object})],ye.prototype,"receiptDispatcher",void 0);ye=$([H("ia-mgc-receipts")],ye);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Re=window,Zs=Re.ShadowRoot&&(Re.ShadyCSS===void 0||Re.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mr=Symbol(),Ln=new WeakMap;let hl=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==mr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Zs&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ln.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ln.set(e,t))}return t}toString(){return this.cssText}};const cl=n=>new hl(typeof n=="string"?n:n+"",void 0,mr),ul=(n,t)=>{Zs?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Re.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},zn=Zs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return cl(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Li;const Ze=window,jn=Ze.trustedTypes,pl=jn?jn.emptyScript:"",Fn=Ze.reactiveElementPolyfillSupport,fs={toAttribute(n,t){switch(t){case Boolean:n=n?pl:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},gr=(n,t)=>t!==n&&(t==t||n==n),zi={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:gr},ys="finalized";let ee=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=zi){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zi}static finalize(){if(this.hasOwnProperty(ys))return!1;this[ys]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(zn(s))}else t!==void 0&&e.push(zn(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ul(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=zi){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:fs).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:fs;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||gr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ee[ys]=!0,ee.elementProperties=new Map,ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},Fn?.({ReactiveElement:ee}),((Li=Ze.reactiveElementVersions)!==null&&Li!==void 0?Li:Ze.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ji;const Qe=window,kt=Qe.trustedTypes,qn=kt?kt.createPolicy("lit-html",{createHTML:n=>n}):void 0,_s="$lit$",F=`lit$${(Math.random()+"").slice(9)}$`,fr="?"+F,$l=`<${fr}>`,mt=document,Xe=()=>mt.createComment(""),_e=n=>n===null||typeof n!="object"&&typeof n!="function",yr=Array.isArray,vl=n=>yr(n)||typeof n?.[Symbol.iterator]=="function",Fi=`[ 	
\f\r]`,ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vn=/-->/g,Wn=/>/g,X=RegExp(`>|${Fi}(?:([^\\s"'>=/]+)(${Fi}*=${Fi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gn=/'/g,Jn=/"/g,_r=/^(?:script|style|textarea|title)$/i,Ae=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Yn=new WeakMap,at=mt.createTreeWalker(mt,129,null,!1);function Ar(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return qn!==void 0?qn.createHTML(t):t}const ml=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=ie;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===ie?c[1]==="!--"?r=Vn:c[1]!==void 0?r=Wn:c[2]!==void 0?(_r.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=X):c[3]!==void 0&&(r=X):r===X?c[0]===">"?(r=s??ie,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?X:c[3]==='"'?Jn:Gn):r===Jn||r===Gn?r=X:r===Vn||r===Wn?r=ie:(r=X,s=void 0);const p=r===X&&n[d+1].startsWith("/>")?" ":"";o+=r===ie?a+$l:h>=0?(i.push(l),a.slice(0,h)+_s+a.slice(h)+F+p):a+F+(h===-2?(i.push(void 0),d):p)}return[Ar(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let As=class br{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=ml(t,e);if(this.el=br.createElement(l,i),at.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=at.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(_s)||u.startsWith(F)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+_s).split(F),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?fl:v[1]==="?"?_l:v[1]==="@"?Al:yi})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(_r.test(s.tagName)){const h=s.textContent.split(F),u=h.length-1;if(u>0){s.textContent=kt?kt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],Xe()),at.nextNode(),a.push({type:2,index:++o});s.append(h[u],Xe())}}}else if(s.nodeType===8)if(s.data===fr)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(F,h+1))!==-1;)a.push({type:7,index:o}),h+=F.length-1}o++}}static createElement(t,e){const i=mt.createElement("template");return i.innerHTML=t,i}};function Ot(n,t,e=n,i){var s,o,r,d;if(t===Ae)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=_e(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ot(n,a._$AS(n,t.values),a,i)),t}let gl=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:mt).importNode(i,!0);at.currentNode=o;let r=at.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new Sr(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new bl(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=at.nextNode(),d++)}return at.currentNode=mt,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Sr=class Er{constructor(t,e,i,s){var o;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ot(this,t,e),_e(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==Ae&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):vl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&_e(this._$AH)?this._$AA.nextSibling.data=t:this.$(mt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=As.createElement(Ar(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new gl(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=Yn.get(t.strings);return e===void 0&&Yn.set(t.strings,e=new As(t)),e}T(t){yr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Er(this.k(Xe()),this.k(Xe()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},yi=class{constructor(t,e,i,s,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Ot(this,t,e,0),r=!_e(t)||t!==this._$AH&&t!==Ae,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Ot(this,d[i+a],e,a),l===Ae&&(l=this._$AH[a]),r||(r=!_e(l)||l!==this._$AH[a]),l===x?t=x:t!==x&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},fl=class extends yi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}};const yl=kt?kt.emptyScript:"";let _l=class extends yi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==x?this.element.setAttribute(this.name,yl):this.element.removeAttribute(this.name)}},Al=class extends yi{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ot(this,t,e,0))!==null&&i!==void 0?i:x)===Ae)return;const s=this._$AH,o=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==x&&(s===x||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},bl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ot(this,t)}};const Kn=Qe.litHtmlPolyfillSupport;Kn?.(As,Sr),((ji=Qe.litHtmlVersions)!==null&&ji!==void 0?ji:Qe.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sl=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const El=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},wl=(n,t,e)=>{t.constructor.createProperty(e,n)};function Qs(n){return(t,e)=>e!==void 0?wl(n,t,e):El(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qi;((qi=window.HTMLSlotElement)===null||qi===void 0?void 0:qi.prototype.assignedElements)!=null;var bs;(function(n){n.HideBadge="hidebadge",n.ShowBadge="showbadge",n.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(bs||(bs={}));let be=class extends J{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=bs.ShowBadge}render(){return I`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?I` <div class="title">${this.headline}</div> `:""}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){const t=f`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=f`var(--formSectionBadgeMargin, 1rem)`,i=f`var(--formSectionBadgeBackgroundColor, #333)`,s=f`var(--formSectionBadgeRadius, 1.2rem)`,o=f`calc(${s} * 2)`,r=f`var(--formSectionBadgeFontSize, 1.8rem)`,d=f`var(--formSectionBadgeFontWeight, bold)`,a=f`var(--formSectionBadgeFontColor, #fff)`,l=f`var(--formSectionTitleFontSize, 1.8rem)`,c=f`var(--formSectionTitleFontWeight, bold)`,h=f`var(--formSectionContentBackgroundColor, transparent)`,u=f`var(--formSectionTextColor, #333)`,p=f`calc(${s} * 2)`;return f`
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
        left: calc(${o} + ${e});
        width: calc(100% - (${o} + ${e}));
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
        width: ${o};
      }

      .badge {
        background-color: ${i};
        color: ${a};
        width: ${o};
        height: ${o};
        border-radius: ${s};
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
        font-weight: ${c};
      }
    `}};$([Qs({type:String})],be.prototype,"sectionBadge",void 0);$([Qs({type:String})],be.prototype,"headline",void 0);$([Qs({type:String})],be.prototype,"badgeMode",void 0);be=$([Sl("donation-form-section")],be);class Cl{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class xl{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class Ml{constructor(t){this.customer=t.customer,this.billing=t.billing}}var Zn;(function(n){n.CreditCard="Credit Card",n.PayPal="PayPal",n.GooglePay="Google Pay",n.Venmo="Venmo",n.ApplePay="Apple Pay"})(Zn||(Zn={}));class O{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return O.calculateFeeAmount(this.amount)}get total(){return O.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,s=t+i;return isNaN(s)?0:this.roundAmount(s)}static calculateFeeAmount(t){const e=t*.0219+.29;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var Ct;(function(n){n.OneTime="one-time",n.Monthly="monthly",n.Upsell="up_sell"})(Ct||(Ct={}));new O({donationType:Ct.OneTime,amount:10,coverFees:!1});let Ss=class extends N{render(){return m`
      <div class="mgc-donation-section-info">
        <span><slot></slot></span>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.dispatchEvent(new Event("editingRequested"))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};Ss.styles=k`
    span {
      width: 95px;
      margin-right: 20px;
    }
  `;Ss=$([H("ia-mgc-form-section-info")],Ss);let ti=class extends N{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?m`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:y}};ti.styles=k`
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
  `;$([g({type:String})],ti.prototype,"status",void 0);ti=$([H("ia-mgc-update-status")],ti);let D=class extends N{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t;return m`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?y:m`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>USD $${(t=this.plan)===null||t===void 0?void 0:t.amountFormatted}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:y}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed. Try again.",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-mgc-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,s,o,r;t.preventDefault();const d=this.form.querySelector('input[name="amount"]');this.newAmount=Number(d.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const a=Number(O.calculateTotal(Number((s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:a,baseAmount:(o=this.donationPaymentInfo)===null||o===void 0?void 0:o.amount,coverFees:this.coverFees,feeCovered:(r=this.donationPaymentInfo)===null||r===void 0?void 0:r.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new O({donationType:Ct.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new O({donationType:Ct.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new O({donationType:Ct.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(t,e){var i;t.preventDefault(),this.clearStatusMessaging();const s=e??this.form.querySelector("#update-amount");if(s&&this.updateButtonState(s),!this.newAmount){this.errorMessage="Please enter a new amount",s&&(s.isDisabled=!1);return}const o=this.form.querySelector('input[name="amount"]'),r=(i=Number(o.value))!==null&&i!==void 0?i:0,d=r<1,a=r>=9999;if(d&&(this.errorMessage="Please enter a valid amount"),a&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),a||d){s&&this.updateButtonState(s);return}this.requestAmountUpdate(t)}async updateButtonState(t){t.isDisabled=!0,await t?.updateComplete}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:O.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){var t;return`I'll generously add $${(t=this.donationPaymentInfo)===null||t===void 0?void 0:t.feeAmountCovered} to cover fees.`}get editAmountForm(){var t;return m`
      <section>
        <form
          id="edit-plan-amount"
          @submit=${e=>this.handleSubmit(e)}
        >
          <p>Current donation amount: $${(t=this.plan)===null||t===void 0?void 0:t.amountFormatted}</p>
          <div>
            $
            <input
              min="1"
              max="9999"
              type="number"
              id="amount"
              name="amount"
              ?required=${!0}
              @focus=${()=>this.clearStatusMessaging()}
              @input=${e=>{const i=Number(e.target.value);this.captureAmountChanges(i),this.newAmount=i}}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${e=>{const s=e.target.checked;this.coverFees=s,this.captureAmountChanges()}}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>Total: USD $${this.totalAmountWithFees()}</p>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${e=>{e.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="update-amount"
                class="ia-button primary"
                type="submit"
                ?isDisabled=${!this.newAmount}
                .clickHandler=${(e,i)=>this.handleSubmit(e,i)}
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
    `}};D.styles=k`
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
  `;$([g({type:Object})],D.prototype,"plan",void 0);$([g({type:Object})],D.prototype,"donationPaymentInfo",void 0);$([g({type:Number})],D.prototype,"newAmount",void 0);$([g({type:Boolean,reflect:!0})],D.prototype,"currentlyEditing",void 0);$([g({type:Boolean})],D.prototype,"coverFees",void 0);$([g({type:String})],D.prototype,"updateMessage",void 0);$([g({type:String})],D.prototype,"errorMessage",void 0);$([g({type:String})],D.prototype,"updateStatus",void 0);$([Jt("form")],D.prototype,"form",void 0);D=$([H("ia-mgc-edit-plan-amount")],D);var ei;(function(n){n.invalid_date="Please enter a valid date format (YYYY-MM-DD)",n.date_too_early="Date must be at least tomorrow.",n.second_donation_this_month="The date you selected will result in an additional donation for this month.",n.date_out_of_range="New donation date must be within the next 12 months.",n.same_next_billing_date=""})(ei||(ei={}));let U=class extends N{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(t){this.dateInput&&t.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.dateInput.focus()}render(){var t;return m`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?y:m`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${(t=this.plan)===null||t===void 0?void 0:t.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:y}
        </donation-form-section>
      </section>
    `}async dateUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Date updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(t){t.preventDefault(),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value="",this.newDate=void 0}formatDateToYYYYMMDD(t){const e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${s}`}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}validateChosenDate(t){var e,i,s;if(!t)return{valid:!1,errorCode:"invalid_date"};let o;try{o=new Date(`${t}T00:00:00`)}catch{return{valid:!1,errorCode:"invalid_date"}}const r=new Date;r.setHours(0,0,0,0),new Date(r).setDate(r.getDate()+1);const a=new Date(o);if(a.setHours(0,0,0,0),!((e=this.plan)===null||e===void 0)&&e.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(a):!1)return{valid:!1,errorCode:"same_next_billing_date"};if(a<r)return{valid:!1,errorCode:"date_too_early"};const c=new Date(r);if(c.setFullYear(c.getFullYear()+1),a>c)return{valid:!1,errorCode:"date_out_of_range"};const h=!((i=this.plan)===null||i===void 0)&&i.payment.lastBillingDate.date?new Date((s=this.plan)===null||s===void 0?void 0:s.payment.lastBillingDate.date):null;if(h){const u=h.getMonth(),p=h.getFullYear(),_=o.getFullYear(),v=o.getMonth();if(_===p&&v===u)return{valid:!0,errorCode:"second_donation_this_month"}}return{valid:!0,errorCode:""}}get minDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate()+1);const i=e.getFullYear(),s=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${i}-${s}-${o}`}get maxDate(){const t=new Date,e=t.getFullYear()+1,i=String(t.getMonth()+1).padStart(2,"0"),s=String(t.getDate()).padStart(2,"0");return`${e}-${i}-${s}`}get editDateForm(){var t,e,i,s,o;const r=!((t=this.plan)===null||t===void 0)&&t.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):"",d=(i=(e=this.dateInput)===null||e===void 0?void 0:e.value)!==null&&i!==void 0?i:r;return m`
      <section>
        <form id="edit-date">
          <p id="form-info-last-donation-date">
            Last donation date: ${(s=this.plan)===null||s===void 0?void 0:s.lastBillingDateLocale}
          </p>

          <p id="form-info-next-donation-date">
            Next donation date: ${(o=this.plan)===null||o===void 0?void 0:o.nextBillingDateLocale}
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
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;const a=this.dateInput.value,{valid:l,errorCode:c}=this.validateChosenDate(a);if(this.allowEditing=l,c)if(c==="second_donation_this_month")this.errorMessage=ei[c],this.warningMessage="You have already made a donation this month.";else{this.errorMessage=ei[c],this.newDate=void 0;return}const h=new Date(`${a}T00:00:00`),u=new Date(h).toISOString();this.newDate=u}}
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
            ${this.warningMessage?m`<span>${this.warningMessage}</span><br />`:""}
            ${this.errorMessage}
          </p>
        </form>
      </section>
    `}};U.styles=k`
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
  `;$([g({type:Object})],U.prototype,"plan",void 0);$([g({type:String})],U.prototype,"newDate",void 0);$([g({type:Boolean,reflect:!0})],U.prototype,"currentlyEditing",void 0);$([g({type:Boolean})],U.prototype,"allowEditing",void 0);$([g({type:String})],U.prototype,"updateMessage",void 0);$([g({type:String})],U.prototype,"errorMessage",void 0);$([g({type:String})],U.prototype,"warningMessage",void 0);$([g({type:String})],U.prototype,"updateStatus",void 0);$([Jt("form")],U.prototype,"form",void 0);$([Jt("form ia-mgc-button#edit-date")],U.prototype,"formSubmitButton",void 0);$([Jt('form input[name="edit-date"]')],U.prototype,"dateInput",void 0);U=$([H("ia-mgc-edit-date")],U);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=window,Xs=Be.ShadowRoot&&(Be.ShadyCSS===void 0||Be.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wr=Symbol(),Qn=new WeakMap;let Pl=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Xs&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Qn.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Qn.set(e,t))}return t}toString(){return this.cssText}};const Tl=n=>new Pl(typeof n=="string"?n:n+"",void 0,wr),Nl=(n,t)=>{Xs?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Be.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Xn=Xs?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Tl(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vi;const ii=window,to=ii.trustedTypes,Ul=to?to.emptyScript:"",eo=ii.reactiveElementPolyfillSupport,Es={toAttribute(n,t){switch(t){case Boolean:n=n?Ul:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Cr=(n,t)=>t!==n&&(t==t||n==n),Wi={attribute:!0,type:String,converter:Es,reflect:!1,hasChanged:Cr},ws="finalized";let se=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Wi){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Wi}static finalize(){if(this.hasOwnProperty(ws))return!1;this[ws]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Xn(s))}else t!==void 0&&e.push(Xn(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Nl(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Wi){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Es).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Es;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Cr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};se[ws]=!0,se.elementProperties=new Map,se.elementStyles=[],se.shadowRootOptions={mode:"open"},eo?.({ReactiveElement:se}),((Vi=ii.reactiveElementVersions)!==null&&Vi!==void 0?Vi:ii.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gi;const si=window,Rt=si.trustedTypes,io=Rt?Rt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Cs="$lit$",q=`lit$${(Math.random()+"").slice(9)}$`,xr="?"+q,Il=`<${xr}>`,gt=document,ni=()=>gt.createComment(""),Se=n=>n===null||typeof n!="object"&&typeof n!="function",Mr=Array.isArray,Dl=n=>Mr(n)||typeof n?.[Symbol.iterator]=="function",Ji=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,so=/-->/g,no=/>/g,tt=RegExp(`>|${Ji}(?:([^\\s"'>=/]+)(${Ji}*=${Ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oo=/'/g,ro=/"/g,Pr=/^(?:script|style|textarea|title)$/i,Ee=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),ao=new WeakMap,lt=gt.createTreeWalker(gt,129,null,!1);function Tr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return io!==void 0?io.createHTML(t):t}const Hl=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=ne;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===ne?c[1]==="!--"?r=so:c[1]!==void 0?r=no:c[2]!==void 0?(Pr.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=tt):c[3]!==void 0&&(r=tt):r===tt?c[0]===">"?(r=s??ne,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?tt:c[3]==='"'?ro:oo):r===ro||r===oo?r=tt:r===so||r===no?r=ne:(r=tt,s=void 0);const p=r===tt&&n[d+1].startsWith("/>")?" ":"";o+=r===ne?a+Il:h>=0?(i.push(l),a.slice(0,h)+Cs+a.slice(h)+q+p):a+q+(h===-2?(i.push(void 0),d):p)}return[Tr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let xs=class Nr{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=Hl(t,e);if(this.el=Nr.createElement(l,i),lt.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=lt.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Cs)||u.startsWith(q)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+Cs).split(q),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?Ol:v[1]==="?"?Bl:v[1]==="@"?Ll:_i})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(Pr.test(s.tagName)){const h=s.textContent.split(q),u=h.length-1;if(u>0){s.textContent=Rt?Rt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],ni()),lt.nextNode(),a.push({type:2,index:++o});s.append(h[u],ni())}}}else if(s.nodeType===8)if(s.data===xr)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(q,h+1))!==-1;)a.push({type:7,index:o}),h+=q.length-1}o++}}static createElement(t,e){const i=gt.createElement("template");return i.innerHTML=t,i}};function Bt(n,t,e=n,i){var s,o,r,d;if(t===Ee)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=Se(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Bt(n,a._$AS(n,t.values),a,i)),t}let kl=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:gt).importNode(i,!0);lt.currentNode=o;let r=lt.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new Ur(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new zl(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=lt.nextNode(),d++)}return lt.currentNode=gt,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Ur=class Ir{constructor(t,e,i,s){var o;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Bt(this,t,e),Se(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==Ee&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Dl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==E&&Se(this._$AH)?this._$AA.nextSibling.data=t:this.$(gt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=xs.createElement(Tr(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new kl(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=ao.get(t.strings);return e===void 0&&ao.set(t.strings,e=new xs(t)),e}T(t){Mr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Ir(this.k(ni()),this.k(ni()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},_i=class{constructor(t,e,i,s,o){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Bt(this,t,e,0),r=!Se(t)||t!==this._$AH&&t!==Ee,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Bt(this,d[i+a],e,a),l===Ee&&(l=this._$AH[a]),r||(r=!Se(l)||l!==this._$AH[a]),l===E?t=E:t!==E&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ol=class extends _i{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}};const Rl=Rt?Rt.emptyScript:"";let Bl=class extends _i{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,Rl):this.element.removeAttribute(this.name)}},Ll=class extends _i{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Bt(this,t,e,0))!==null&&i!==void 0?i:E)===Ee)return;const s=this._$AH,o=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==E&&(s===E||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},zl=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}};const lo=si.litHtmlPolyfillSupport;lo?.(xs,Ur),((Gi=si.litHtmlVersions)!==null&&Gi!==void 0?Gi:si.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dr=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jl=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},Fl=(n,t,e)=>{t.constructor.createProperty(e,n)};function St(n){return(t,e)=>e!==void 0?Fl(n,t,e):jl(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ql=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(d){n(d,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n?.(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function w(n,t){return ql({descriptor:e=>({get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yi;((Yi=window.HTMLSlotElement)===null||Yi===void 0?void 0:Yi.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ho=n=>n??E;var ut;(function(n){n.LeaveSpace="leave-space",n.CompressSpace="compress-space"})(ut||(ut={}));let ft=class extends J{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=ut.LeaveSpace,this.requiredIndicatorSpaceOption=ut.LeaveSpace}render(){return I`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?I` * `:S}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===ut.CompressSpace?"compress-space":""}static get styles(){const t=f`var(--inputBorder, 1px solid #d9d9d9)`,e=f`var(--badgedInputBorderErrorColor, red)`,i=f`var(--badgedInputIconSize, 1.4rem)`,s=f`var(--badgedInputIconSpacerWidth, 3rem)`,o=f`var(--badgedInputNoIconSpacerWidth, 1rem)`,r=f`var(--badgedInputHeight, 3rem)`,d=f`var(--badgedInputRequiredIndicatorColor, red)`,a=f`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,l=f`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return f`
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
        width: ${o};
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
      }

      .required-indicator {
        color: ${d};
        font-size: ${l};
        margin: ${a};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};$([St({type:Boolean})],ft.prototype,"error",void 0);$([St({type:Object})],ft.prototype,"icon",void 0);$([St({type:Boolean})],ft.prototype,"required",void 0);$([St({type:String})],ft.prototype,"iconSpaceOption",void 0);$([St({type:String})],ft.prototype,"requiredIndicatorSpaceOption",void 0);ft=$([Dr("badged-input")],ft);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le=window,tn=Le.ShadowRoot&&(Le.ShadyCSS===void 0||Le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Hr=Symbol(),co=new WeakMap;let Vl=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Hr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(tn&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=co.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&co.set(e,t))}return t}toString(){return this.cssText}};const Wl=n=>new Vl(typeof n=="string"?n:n+"",void 0,Hr),Gl=(n,t)=>{tn?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Le.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},uo=tn?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Wl(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ki;const oi=window,po=oi.trustedTypes,Jl=po?po.emptyScript:"",$o=oi.reactiveElementPolyfillSupport,Ms={toAttribute(n,t){switch(t){case Boolean:n=n?Jl:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},kr=(n,t)=>t!==n&&(t==t||n==n),Zi={attribute:!0,type:String,converter:Ms,reflect:!1,hasChanged:kr},Ps="finalized";let oe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=Zi){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Zi}static finalize(){if(this.hasOwnProperty(Ps))return!1;this[Ps]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(uo(s))}else t!==void 0&&e.push(uo(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Gl(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Zi){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ms).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ms;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||kr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};oe[Ps]=!0,oe.elementProperties=new Map,oe.elementStyles=[],oe.shadowRootOptions={mode:"open"},$o?.({ReactiveElement:oe}),((Ki=oi.reactiveElementVersions)!==null&&Ki!==void 0?Ki:oi.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Qi;const ri=window,Lt=ri.trustedTypes,vo=Lt?Lt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ts="$lit$",V=`lit$${(Math.random()+"").slice(9)}$`,Or="?"+V,Yl=`<${Or}>`,yt=document,ai=()=>yt.createComment(""),we=n=>n===null||typeof n!="object"&&typeof n!="function",Rr=Array.isArray,Kl=n=>Rr(n)||typeof n?.[Symbol.iterator]=="function",Xi=`[ 	
\f\r]`,re=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mo=/-->/g,go=/>/g,et=RegExp(`>|${Xi}(?:([^\\s"'>=/]+)(${Xi}*=${Xi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fo=/'/g,yo=/"/g,Br=/^(?:script|style|textarea|title)$/i,Ce=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),_o=new WeakMap,dt=yt.createTreeWalker(yt,129,null,!1);function Lr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return vo!==void 0?vo.createHTML(t):t}const Zl=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=re;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===re?c[1]==="!--"?r=mo:c[1]!==void 0?r=go:c[2]!==void 0?(Br.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=et):c[3]!==void 0&&(r=et):r===et?c[0]===">"?(r=s??re,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?et:c[3]==='"'?yo:fo):r===yo||r===fo?r=et:r===mo||r===go?r=re:(r=et,s=void 0);const p=r===et&&n[d+1].startsWith("/>")?" ":"";o+=r===re?a+Yl:h>=0?(i.push(l),a.slice(0,h)+Ts+a.slice(h)+V+p):a+V+(h===-2?(i.push(void 0),d):p)}return[Lr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ns=class zr{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=Zl(t,e);if(this.el=zr.createElement(l,i),dt.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=dt.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Ts)||u.startsWith(V)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+Ts).split(V),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?Xl:v[1]==="?"?ed:v[1]==="@"?id:Ai})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(Br.test(s.tagName)){const h=s.textContent.split(V),u=h.length-1;if(u>0){s.textContent=Lt?Lt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],ai()),dt.nextNode(),a.push({type:2,index:++o});s.append(h[u],ai())}}}else if(s.nodeType===8)if(s.data===Or)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(V,h+1))!==-1;)a.push({type:7,index:o}),h+=V.length-1}o++}}static createElement(t,e){const i=yt.createElement("template");return i.innerHTML=t,i}};function zt(n,t,e=n,i){var s,o,r,d;if(t===Ce)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=we(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=zt(n,a._$AS(n,t.values),a,i)),t}let Ql=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:yt).importNode(i,!0);dt.currentNode=o;let r=dt.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new jr(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new sd(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=dt.nextNode(),d++)}return dt.currentNode=yt,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},jr=class Fr{constructor(t,e,i,s){var o;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=zt(this,t,e),we(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==Ce&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Kl(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==M&&we(this._$AH)?this._$AA.nextSibling.data=t:this.$(yt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ns.createElement(Lr(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Ql(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=_o.get(t.strings);return e===void 0&&_o.set(t.strings,e=new Ns(t)),e}T(t){Rr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Fr(this.k(ai()),this.k(ai()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Ai=class{constructor(t,e,i,s,o){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=zt(this,t,e,0),r=!we(t)||t!==this._$AH&&t!==Ce,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=zt(this,d[i+a],e,a),l===Ce&&(l=this._$AH[a]),r||(r=!we(l)||l!==this._$AH[a]),l===M?t=M:t!==M&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Xl=class extends Ai{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===M?void 0:t}};const td=Lt?Lt.emptyScript:"";let ed=class extends Ai{constructor(){super(...arguments),this.type=4}j(t){t&&t!==M?this.element.setAttribute(this.name,td):this.element.removeAttribute(this.name)}},id=class extends Ai{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=zt(this,t,e,0))!==null&&i!==void 0?i:M)===Ce)return;const s=this._$AH,o=t===M&&s!==M||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==M&&(s===M||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},sd=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){zt(this,t)}};const Ao=ri.litHtmlPolyfillSupport;Ao?.(Ns,jr),((Qi=ri.litHtmlVersions)!==null&&Qi!==void 0?Qi:ri.litHtmlVersions=[]).push("2.8.0");const nd=I`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=window,en=ze.ShadowRoot&&(ze.ShadyCSS===void 0||ze.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qr=Symbol(),bo=new WeakMap;let od=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==qr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(en&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=bo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&bo.set(e,t))}return t}toString(){return this.cssText}};const rd=n=>new od(typeof n=="string"?n:n+"",void 0,qr),ad=(n,t)=>{en?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=ze.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},So=en?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return rd(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ts;const li=window,Eo=li.trustedTypes,ld=Eo?Eo.emptyScript:"",wo=li.reactiveElementPolyfillSupport,Us={toAttribute(n,t){switch(t){case Boolean:n=n?ld:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Vr=(n,t)=>t!==n&&(t==t||n==n),es={attribute:!0,type:String,converter:Us,reflect:!1,hasChanged:Vr},Is="finalized";let ae=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=es){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||es}static finalize(){if(this.hasOwnProperty(Is))return!1;this[Is]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(So(s))}else t!==void 0&&e.push(So(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ad(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=es){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Us).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Us;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Vr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};ae[Is]=!0,ae.elementProperties=new Map,ae.elementStyles=[],ae.shadowRootOptions={mode:"open"},wo?.({ReactiveElement:ae}),((ts=li.reactiveElementVersions)!==null&&ts!==void 0?ts:li.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var is;const di=window,jt=di.trustedTypes,Co=jt?jt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ds="$lit$",W=`lit$${(Math.random()+"").slice(9)}$`,Wr="?"+W,dd=`<${Wr}>`,_t=document,hi=()=>_t.createComment(""),xe=n=>n===null||typeof n!="object"&&typeof n!="function",Gr=Array.isArray,hd=n=>Gr(n)||typeof n?.[Symbol.iterator]=="function",ss=`[ 	
\f\r]`,le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xo=/-->/g,Mo=/>/g,it=RegExp(`>|${ss}(?:([^\\s"'>=/]+)(${ss}*=${ss}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Po=/'/g,To=/"/g,Jr=/^(?:script|style|textarea|title)$/i,Me=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),No=new WeakMap,ht=_t.createTreeWalker(_t,129,null,!1);function Yr(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Co!==void 0?Co.createHTML(t):t}const cd=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=le;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===le?c[1]==="!--"?r=xo:c[1]!==void 0?r=Mo:c[2]!==void 0?(Jr.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=it):c[3]!==void 0&&(r=it):r===it?c[0]===">"?(r=s??le,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?it:c[3]==='"'?To:Po):r===To||r===Po?r=it:r===xo||r===Mo?r=le:(r=it,s=void 0);const p=r===it&&n[d+1].startsWith("/>")?" ":"";o+=r===le?a+dd:h>=0?(i.push(l),a.slice(0,h)+Ds+a.slice(h)+W+p):a+W+(h===-2?(i.push(void 0),d):p)}return[Yr(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let Hs=class Kr{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=cd(t,e);if(this.el=Kr.createElement(l,i),ht.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=ht.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Ds)||u.startsWith(W)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+Ds).split(W),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?pd:v[1]==="?"?vd:v[1]==="@"?md:bi})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(Jr.test(s.tagName)){const h=s.textContent.split(W),u=h.length-1;if(u>0){s.textContent=jt?jt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],hi()),ht.nextNode(),a.push({type:2,index:++o});s.append(h[u],hi())}}}else if(s.nodeType===8)if(s.data===Wr)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(W,h+1))!==-1;)a.push({type:7,index:o}),h+=W.length-1}o++}}static createElement(t,e){const i=_t.createElement("template");return i.innerHTML=t,i}};function Ft(n,t,e=n,i){var s,o,r,d;if(t===Me)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=xe(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Ft(n,a._$AS(n,t.values),a,i)),t}let ud=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:_t).importNode(i,!0);ht.currentNode=o;let r=ht.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new Zr(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new gd(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=ht.nextNode(),d++)}return ht.currentNode=_t,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Zr=class Qr{constructor(t,e,i,s){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ft(this,t,e),xe(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Me&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):hd(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==P&&xe(this._$AH)?this._$AA.nextSibling.data=t:this.$(_t.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Hs.createElement(Yr(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new ud(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=No.get(t.strings);return e===void 0&&No.set(t.strings,e=new Hs(t)),e}T(t){Gr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Qr(this.k(hi()),this.k(hi()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},bi=class{constructor(t,e,i,s,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Ft(this,t,e,0),r=!xe(t)||t!==this._$AH&&t!==Me,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Ft(this,d[i+a],e,a),l===Me&&(l=this._$AH[a]),r||(r=!xe(l)||l!==this._$AH[a]),l===P?t=P:t!==P&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pd=class extends bi{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}};const $d=jt?jt.emptyScript:"";let vd=class extends bi{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,$d):this.element.removeAttribute(this.name)}},md=class extends bi{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Ft(this,t,e,0))!==null&&i!==void 0?i:P)===Me)return;const s=this._$AH,o=t===P&&s!==P||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==P&&(s===P||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},gd=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ft(this,t)}};const Uo=di.litHtmlPolyfillSupport;Uo?.(Hs,Zr),((is=di.litHtmlVersions)!==null&&is!==void 0?is:di.litHtmlVersions=[]).push("2.8.0");const fd=I`
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
 */const je=window,sn=je.ShadowRoot&&(je.ShadyCSS===void 0||je.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xr=Symbol(),Io=new WeakMap;let yd=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(sn&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Io.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Io.set(e,t))}return t}toString(){return this.cssText}};const _d=n=>new yd(typeof n=="string"?n:n+"",void 0,Xr),Ad=(n,t)=>{sn?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=je.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Do=sn?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _d(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ns;const ci=window,Ho=ci.trustedTypes,bd=Ho?Ho.emptyScript:"",ko=ci.reactiveElementPolyfillSupport,ks={toAttribute(n,t){switch(t){case Boolean:n=n?bd:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ta=(n,t)=>t!==n&&(t==t||n==n),os={attribute:!0,type:String,converter:ks,reflect:!1,hasChanged:ta},Os="finalized";let de=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=os){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||os}static finalize(){if(this.hasOwnProperty(Os))return!1;this[Os]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Do(s))}else t!==void 0&&e.push(Do(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ad(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=os){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:ks).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:ks;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ta)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};de[Os]=!0,de.elementProperties=new Map,de.elementStyles=[],de.shadowRootOptions={mode:"open"},ko?.({ReactiveElement:de}),((ns=ci.reactiveElementVersions)!==null&&ns!==void 0?ns:ci.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rs;const ui=window,qt=ui.trustedTypes,Oo=qt?qt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Rs="$lit$",G=`lit$${(Math.random()+"").slice(9)}$`,ea="?"+G,Sd=`<${ea}>`,At=document,pi=()=>At.createComment(""),Pe=n=>n===null||typeof n!="object"&&typeof n!="function",ia=Array.isArray,Ed=n=>ia(n)||typeof n?.[Symbol.iterator]=="function",as=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ro=/-->/g,Bo=/>/g,st=RegExp(`>|${as}(?:([^\\s"'>=/]+)(${as}*=${as}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lo=/'/g,zo=/"/g,sa=/^(?:script|style|textarea|title)$/i,Te=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),jo=new WeakMap,ct=At.createTreeWalker(At,129,null,!1);function na(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Oo!==void 0?Oo.createHTML(t):t}const wd=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=he;for(let d=0;d<e;d++){const a=n[d];let l,c,h=-1,u=0;for(;u<a.length&&(r.lastIndex=u,c=r.exec(a),c!==null);)u=r.lastIndex,r===he?c[1]==="!--"?r=Ro:c[1]!==void 0?r=Bo:c[2]!==void 0?(sa.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=st):c[3]!==void 0&&(r=st):r===st?c[0]===">"?(r=s??he,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?st:c[3]==='"'?zo:Lo):r===zo||r===Lo?r=st:r===Ro||r===Bo?r=he:(r=st,s=void 0);const p=r===st&&n[d+1].startsWith("/>")?" ":"";o+=r===he?a+Sd:h>=0?(i.push(l),a.slice(0,h)+Rs+a.slice(h)+G+p):a+G+(h===-2?(i.push(void 0),d):p)}return[na(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class Ne{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,c]=wd(t,e);if(this.el=Ne.createElement(l,i),ct.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=ct.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Rs)||u.startsWith(G)){const p=c[r++];if(h.push(u),p!==void 0){const _=s.getAttribute(p.toLowerCase()+Rs).split(G),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?xd:v[1]==="?"?Pd:v[1]==="@"?Td:Ei})}else a.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(sa.test(s.tagName)){const h=s.textContent.split(G),u=h.length-1;if(u>0){s.textContent=qt?qt.emptyScript:"";for(let p=0;p<u;p++)s.append(h[p],pi()),ct.nextNode(),a.push({type:2,index:++o});s.append(h[u],pi())}}}else if(s.nodeType===8)if(s.data===ea)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(G,h+1))!==-1;)a.push({type:7,index:o}),h+=G.length-1}o++}}static createElement(t,e){const i=At.createElement("template");return i.innerHTML=t,i}}function Vt(n,t,e=n,i){var s,o,r,d;if(t===Te)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=Pe(t)?void 0:t._$litDirective$;return a?.constructor!==l&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=Vt(n,a._$AS(n,t.values),a,i)),t}class Cd{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:At).importNode(i,!0);ct.currentNode=o;let r=ct.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let c;l.type===2?c=new Si(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Nd(r,this,t)),this._$AV.push(c),l=s[++a]}d!==l?.index&&(r=ct.nextNode(),d++)}return ct.currentNode=At,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Si{constructor(t,e,i,s){var o;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Vt(this,t,e),Pe(t)?t===T||t==null||t===""?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==Te&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ed(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==T&&Pe(this._$AH)?this._$AA.nextSibling.data=t:this.$(At.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ne.createElement(na(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Cd(o,this),d=r.u(this.options);r.v(i),this.$(d),this._$AH=r}}_$AC(t){let e=jo.get(t.strings);return e===void 0&&jo.set(t.strings,e=new Ne(t)),e}T(t){ia(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Si(this.k(pi()),this.k(pi()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Ei{constructor(t,e,i,s,o){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=Vt(this,t,e,0),r=!Pe(t)||t!==this._$AH&&t!==Te,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=Vt(this,d[i+a],e,a),l===Te&&(l=this._$AH[a]),r||(r=!Pe(l)||l!==this._$AH[a]),l===T?t=T:t!==T&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class xd extends Ei{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}}const Md=qt?qt.emptyScript:"";class Pd extends Ei{constructor(){super(...arguments),this.type=4}j(t){t&&t!==T?this.element.setAttribute(this.name,Md):this.element.removeAttribute(this.name)}}class Td extends Ei{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=Vt(this,t,e,0))!==null&&i!==void 0?i:T)===Te)return;const s=this._$AH,o=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==T&&(s===T||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Nd{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Vt(this,t)}}const Fo=ui.litHtmlPolyfillSupport;Fo?.(Ne,Si),((rs=ui.litHtmlVersions)!==null&&rs!==void 0?rs:ui.litHtmlVersions=[]).push("2.8.0");const Ud=I`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,qo={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let b=class extends J{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,s])=>{const o=i.checkValidity();e=e&&o,o||(s.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return I`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:nd})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:Ud})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:fd,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:ut.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return I`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,s,o,r,d,a,l,c,h;const u=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:u,this.selectedCountry==="US"?((s=this.postalBadgedInput)===null||s===void 0||s.setAttribute("required",""),(o=this.postalCodeField)===null||o===void 0||o.setAttribute("required",""),(r=this.regionBadgedInput)===null||r===void 0||r.setAttribute("required",""),(d=this.regionField)===null||d===void 0||d.setAttribute("required","")):((a=this.postalBadgedInput)===null||a===void 0||a.removeAttribute("required"),(l=this.postalCodeField)===null||l===void 0||l.removeAttribute("required"),(c=this.regionBadgedInput)===null||c===void 0||c.removeAttribute("required"),(h=this.regionField)===null||h===void 0||h.removeAttribute("required"))}}
        >
          ${Object.keys(qo).map(t=>{const e=qo[t];return I`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,s=this.querySelector(`badged-input.${i}`);s.error=!1}generateInput(t){var e,i,s,o;const r=(e=t.required)!==null&&e!==void 0?e:!0,d=(i=t.fieldType)!==null&&i!==void 0?i:"text",a=(s=t.iconSpaceOption)!==null&&s!==void 0?s:ut.LeaveSpace;return I`
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
          maxlength=${ho(t.maxlength)}
          autocomplete=${(o=t.autocomplete)!==null&&o!==void 0?o:"on"}
          pattern=${ho(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${r}
        />
      </badged-input>
    `}get donorContactInfo(){return new Ml({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new Cl({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new xl({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=f`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=f`var(--badgedInputIconSpacerWidth, 5rem)`,i=f`var(--fieldSetSpacing, 1rem)`,s=f`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,o=f`var(--contactFieldFontSize, 1.6rem)`,r=f`var(--inputFieldFontColor, #333)`,d=f`calc(100% - ${e})`,a=f`calc(100% - ${t})`;return I`
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
          font-size: ${o};
          padding: 0;
          font-family: ${s};
        }

        contact-form .donation-contact-form-input::placeholder {
          color: revert;
        }

        contact-form #donation-contact-form-countryCodeAlpha2 {
          width: calc(100%);
          height: 100%;
          box-sizing: border-box;
          font-weight: bold;
          font-size: ${o};
          font-family: ${s};
          border: 0;
          background: #fff;
        }
      </style>
    `}};$([w("badged-input.donation-contact-form-email")],b.prototype,"emailBadgedInput",void 0);$([w("#donation-contact-form-email")],b.prototype,"emailField",void 0);$([w("badged-input.donation-contact-form-first-name")],b.prototype,"firstNameBadgedInput",void 0);$([w("#donation-contact-form-first-name")],b.prototype,"firstNameField",void 0);$([w("badged-input.donation-contact-form-last-name")],b.prototype,"lastNameBadgedInput",void 0);$([w("#donation-contact-form-last-name")],b.prototype,"lastNameField",void 0);$([w("badged-input.donation-contact-form-postal-code")],b.prototype,"postalBadgedInput",void 0);$([w("#donation-contact-form-postal-code")],b.prototype,"postalCodeField",void 0);$([w("badged-input.donation-contact-form-street-address")],b.prototype,"streetAddressBadgedInput",void 0);$([w("#donation-contact-form-street-address")],b.prototype,"streetAddressField",void 0);$([w("badged-input.donation-contact-form-extended-address")],b.prototype,"extendedAddressBadgedInput",void 0);$([w("#donation-contact-form-extended-address")],b.prototype,"extendedAddressField",void 0);$([w("badged-input.donation-contact-form-locality")],b.prototype,"localityBadgedInput",void 0);$([w("#donation-contact-form-locality")],b.prototype,"localityField",void 0);$([w("badged-input.donation-contact-form-region")],b.prototype,"regionBadgedInput",void 0);$([w("#donation-contact-form-region")],b.prototype,"regionField",void 0);$([w("#donation-contact-form-countryCodeAlpha2")],b.prototype,"countryCodeAlpha2Field",void 0);$([w("#donation-contact-form-error-message")],b.prototype,"errorMessage",void 0);$([w("form")],b.prototype,"form",void 0);$([St({type:String})],b.prototype,"selectedCountry",void 0);$([St({type:String})],b.prototype,"donorEmail",void 0);b=$([Dr("contact-form")],b);let bt=class extends N{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:m`
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

      ${this.initialCancelRequest?this.confirmCancelation:y}
    `}get confirmCancelation(){return m`
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
    `}};bt.styles=k`
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
  `;$([g({type:Object})],bt.prototype,"plan",void 0);$([g({type:Boolean,reflect:!0})],bt.prototype,"patronWantsToKeepPlan",void 0);$([g({type:Boolean,reflect:!0})],bt.prototype,"initialCancelRequest",void 0);$([Jt("form")],bt.prototype,"form",void 0);bt=$([H("ia-mgc-cancel-plan")],bt);let $i=class extends N{createRenderRoot(){return this}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}dateUpdates(t){this.querySelector("ia-mgc-edit-date").dateUpdated(t)}render(){return m`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${t=>{var e;const{amount:i,baseAmount:s,coverFees:o,feeCovered:r}=t.detail;this.plan&&((e=this.updateAmountHandler)===null||e===void 0||e.call(this,this.plan,{amount:i,baseAmount:s,coverFees:o,feeCovered:r}))}}
        ></ia-mgc-edit-plan-amount>
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
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};$([g({type:Object})],$i.prototype,"plan",void 0);$([g({type:Object})],$i.prototype,"updateAmountHandler",void 0);$i=$([H("ia-mgc-edit-plan")],$i);var B;(function(n){n.welcome="ShowWelcome",n.receipts="ShowReceipts",n.plans="ShowPlans",n.editPlan="ShowEditForm"})(B||(B={}));let R=class extends N{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!1}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:s=""}=t,o=(e=i?.id)!==null&&e!==void 0?e:s;if(t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="dateUpdate"){this.editingThisPlan=i,this.editFormElement.dateUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:o,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return m`
      ${this.sectionTitle}
      ${t?m`<ia-mgc-edit-plan
            .plan=${this.editingThisPlan}
            @cancelPlan=${()=>{this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:this.editingThisPlan}}))}}
            .updateAmountHandler=${(e,i)=>{console.log("updateAmount",e,{...i}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:e,amountOptions:i}}))}}
            @updateDate=${e=>{const{newDate:i}=e.detail;console.log("updateDate",i),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.editingThisPlan,newDate:i}}))}}
          ></ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let t="",e="",i=m``;const s=m`
      <ia-mgc-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(B.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,o=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=m`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?B.plans:B.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=m`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?B.plans:B.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;default:t="Monthly Giving Circle",e="heart",o&&(i=s);break}return m`
      <ia-mgc-title titleStyle=${e}>
        <span slot="title">${t}</span>
        <span slot="action">${i}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay==="receipts"?m`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></ia-mgc-receipts>
      `:m`
      ${this.viewToDisplay==="plans"&&this.plans.length?m`
            <ia-mgc-plans
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(B.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:m`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};$([g({type:String})],R.prototype,"patronName",void 0);$([g({type:Array})],R.prototype,"receipts",void 0);$([g({type:Array})],R.prototype,"updates",void 0);$([g({type:Array})],R.prototype,"plans",void 0);$([g({type:Object})],R.prototype,"editingThisPlan",void 0);$([g({type:String,reflect:!0})],R.prototype,"viewToDisplay",void 0);$([g({type:Boolean,reflect:!0})],R.prototype,"canEdit",void 0);R=$([H("ia-monthly-giving-circle")],R);class De{constructor(t){this.receipt=t}get amountFormatted(){var t;const e=this.receipt.total_amount.toFixed(2),i=(t=this.receipt.currency)!==null&&t!==void 0?t:"CURR not found";return e?`${i} ${this.currencySymbol}${e}`:"no amount found, can't find total_amount or net_amount"}get amount(){return this.receipt.total_amount.toFixed(2)}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}get currencySymbol(){return this.receipt.currency==="USD"?"$":""}}class Id{constructor(t){var e;this.plan=t,this.payment=t.btdata,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get currencySymbol(){return this.currency==="USD"?"$":""}get amount(){return this.plan.amount}get amountFormatted(){return this.plan.amount.toFixed(2)}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}get nextBillingDate(){return this.payment.nextBillingDate.date}setNextBillingDate(t){this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=t}get nextBillingDateLocale(){const t=new Date(this.payment.nextBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return t??"not found"}get lastBillingDateLocale(){if(!this.payment.lastBillingDate.date)return"";const t=new Date(this.payment.lastBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return console.log("lastBillingDate from model",t),t??"not found"}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(t){const e=this.plan.processor_id;this.plan.processor_id=t,this.plan.oldProcessorId=e}}let Y=[];const Wt=new Date;Wt.setDate(Wt.getDate()+25);Wt.setMinutes(0);Wt.setSeconds(0);Wt.setMilliseconds(0);console.log("nextPaymentIn25Days",Wt.toISOString());const Yt=new Date;Yt.setMinutes(0);Yt.setSeconds(0);Yt.setMilliseconds(0);Yt.setDate(1);console.log("lastPaymentInTheSameMonth",Yt.toISOString());const Bs=new Date;Bs.setMonth(Bs.getMonth()+1);const Kt=new Date(Bs);Kt.setMinutes(0);Kt.setSeconds(0);Kt.setMilliseconds(0);Kt.setDate(1);console.log("nextPaymentFirstOfMonth",Kt.toISOString());const Dd=new Date;Dd.setHours(0,0,0,0);const nn=new Date;nn.setHours(0,0,0,0);nn.setDate(0);const Ue=new Date;Ue.setHours(0,0,0,0);Ue.setMonth(Ue.getMonth()+1);Ue.setDate(0);const Vo={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10.3,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:nn.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Ue.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:2.5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:Yt.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Kt.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},oa=Object.keys(Vo).map(n=>new Id(Vo[n])),ra=[new De({currency:"USD",total_amount:1,net_amount:1,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new De({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,fee_covered:!1,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new De({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,fee_covered:!0,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new De({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})];let ls=!0;const Gt=document.getElementById("interaction-status-area"),on=()=>Math.floor(Math.random()+.5),A=document.querySelector("ia-monthly-giving-circle");A.receipts=ra;A.plans=oa;A.addEventListener("EmailReceiptRequest",n=>{const{donation:t}=n.detail,e=on()===1,i=e?"success":"fail",s=e?1500:5e3;Gt.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${s} ms.`;const r={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};Y=[r,...Y],setTimeout(()=>{A.updateReceived(r),console.log("EmailReceiptRequest index.html ----",r),Gt.innerText=""},s)});A.addEventListener("cancelPlan",async n=>{const{plan:t}=n.detail,i=A.plans.map(s=>(s.plan.token===t.plan.token&&(console.log("p 2 plan",s,t),s.cancelPlan()),s));A.plans=i,await A.updateComplete,console.log("plan cancelled & plan list updated",A.plans)});A.addEventListener("updateAmount",async n=>{const{plan:t,amountOptions:e}=n.detail,i=on()===1,s=i?"success":"fail",o=i?1500:5e3;Gt.innerText=`Amount Update Request received: will return ${s} in ${o} ms - Details: ${JSON.stringify(e)}`;const r=s==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const d={message:r,status:s,plan:t,donationId:t.id,action:"amountUpdate"};Y=[d,...Y],setTimeout(()=>{A.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Gt.innerText=""},o)});A.addEventListener("updateDate",n=>{const{newDate:t,plan:e}=n.detail,i=on()===1,s=i?"success":"fail",o=i?1500:5e3;Gt.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(e.id)} -- Update will return ${s} in ${o} ms`;const r=s==="success"?"Date updated":"Date failed to update";i&&(e.setNextBillingDate(t),e.setNewProcessorId("new-processor_id@1"));const d={message:r,status:s,plan:e,donationId:e.id,action:"dateUpdate"};Y=[d,...Y],setTimeout(()=>{A.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Gt.innerText=""},o)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(ls){A.receipts=[],ls=!1;return}A.receipts=ra,await A.updateComplete,ls=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{Y=[],A.updates=Y,await A.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{A.plans=A.plans.length?[]:oa,await A.updateComplete});document.getElementById("toggle-editable-perms").addEventListener("click",async()=>{A.canEdit=!A.canEdit,await A.updateComplete});
