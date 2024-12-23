(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();function p(o,t,e,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,e,i);else for(var h=o.length-1;h>=0;h--)(r=o[h])&&(n=(s<3?r(n):s>3?r(t,e,n):r(t,e))||n);return s>3&&n&&Object.defineProperty(t,e,n),n}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window,Pt=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),Dt=new WeakMap;let me=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Dt.set(e,t))}return t}toString(){return this.cssText}};const ge=o=>new me(typeof o=="string"?o:o+"",void 0,ie),_e=(o,t)=>{Pt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},Ut=Pt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ge(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;const Y=window,Ht=Y.trustedTypes,Ae=Ht?Ht.emptyScript:"",Rt=Y.reactiveElementPolyfillSupport,bt={toAttribute(o,t){switch(t){case Boolean:o=o?Ae:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},se=(o,t)=>t!==o&&(t==t||o==o),dt={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:se},Et="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dt}static finalize(){if(this.hasOwnProperty(Et))return!1;this[Et]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ut(s))}else t!==void 0&&e.push(Ut(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=dt){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:bt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:bt;this._$El=n,this[n]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||se)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};z[Et]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},Rt?.({ReactiveElement:z}),((ct=Y.reactiveElementVersions)!==null&&ct!==void 0?ct:Y.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const tt=window,H=tt.trustedTypes,Ot=H?H.createPolicy("lit-html",{createHTML:o=>o}):void 0,St="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,oe="?"+E,be=`<${oe}>`,T=document,et=()=>T.createComment(""),G=o=>o===null||typeof o!="object"&&typeof o!="function",ne=Array.isArray,Ee=o=>ne(o)||typeof o?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,It=/>/g,w=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Bt=/"/g,re=/^(?:script|style|textarea|title)$/i,q=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),zt=new WeakMap,x=T.createTreeWalker(T,129,null,!1);function le(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const Se=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=V;for(let h=0;h<e;h++){const l=o[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===V?c[1]==="!--"?r=Lt:c[1]!==void 0?r=It:c[2]!==void 0?(re.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=w):c[3]!==void 0&&(r=w):r===w?c[0]===">"?(r=s??V,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?w:c[3]==='"'?Bt:jt):r===Bt||r===jt?r=w:r===Lt||r===It?r=V:(r=w,s=void 0);const $=r===w&&o[h+1].startsWith("/>")?" ":"";n+=r===V?l+be:d>=0?(i.push(a),l.slice(0,d)+St+l.slice(d)+E+$):l+E+(d===-2?(i.push(void 0),h):$)}return[le(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let wt=class ae{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Se(t,e);if(this.el=ae.createElement(a,i),x.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=x.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(St)||u.startsWith(E)){const $=c[r++];if(d.push(u),$!==void 0){const ht=s.getAttribute($.toLowerCase()+St).split(E),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:A[2],strings:ht,ctor:A[1]==="."?Ce:A[1]==="?"?Ne:A[1]==="@"?Te:lt})}else l.push({type:6,index:n})}for(const u of d)s.removeAttribute(u)}if(re.test(s.tagName)){const d=s.textContent.split(E),u=d.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let $=0;$<u;$++)s.append(d[$],et()),x.nextNode(),l.push({type:2,index:++n});s.append(d[u],et())}}}else if(s.nodeType===8)if(s.data===oe)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(E,d+1))!==-1;)l.push({type:7,index:n}),d+=E.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}};function R(o,t,e=o,i){var s,n,r,h;if(t===q)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=G(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=R(o,l._$AS(o,t.values),l,i)),t}let we=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:T).importNode(i,!0);x.currentNode=n;let r=x.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new he(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Pe(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=x.nextNode(),h++)}return x.currentNode=T,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},he=class ce{constructor(t,e,i,s){var n;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),G(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ee(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==f&&G(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=wt.createElement(le(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new we(n,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=zt.get(t.strings);return e===void 0&&zt.set(t.strings,e=new wt(t)),e}T(t){ne(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new ce(this.k(et()),this.k(et()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},lt=class{constructor(t,e,i,s,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=R(this,t,e,0),r=!G(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const h=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=R(this,h[i+l],e,l),a===q&&(a=this._$AH[l]),r||(r=!G(a)||a!==this._$AH[l]),a===f?t=f:t!==f&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ce=class extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}};const xe=H?H.emptyScript:"";let Ne=class extends lt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,xe):this.element.removeAttribute(this.name)}},Te=class extends lt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=R(this,t,e,0))!==null&&i!==void 0?i:f)===q)return;const s=this._$AH,n=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Pe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};const Vt=tt.litHtmlPolyfillSupport;Vt?.(wt,he),((ut=tt.litHtmlVersions)!==null&&ut!==void 0?ut:tt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window,kt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),Wt=new WeakMap;let de=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(kt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Wt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Wt.set(e,t))}return t}toString(){return this.cssText}};const ke=o=>new de(typeof o=="string"?o:o+"",void 0,Mt),M=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[n+1],o[0]);return new de(e,o,Mt)},Me=(o,t)=>{kt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)})},Gt=kt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ke(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const it=window,qt=it.trustedTypes,De=qt?qt.emptyScript:"",Jt=it.reactiveElementPolyfillSupport,Ct={toAttribute(o,t){switch(t){case Boolean:o=o?De:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},ue=(o,t)=>t!==o&&(t==t||o==o),vt={attribute:!0,type:String,converter:Ct,reflect:!1,hasChanged:ue},xt="finalized";let U=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vt}static finalize(){if(this.hasOwnProperty(xt))return!1;this[xt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Gt(s))}else t!==void 0&&e.push(Gt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=vt){var s;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ct).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=s.getPropertyOptions(n),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Ct;this._$El=n,this[n]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ue)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,n)=>this[n]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var n;return(n=s.hostUpdate)===null||n===void 0?void 0:n.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};U[xt]=!0,U.elementProperties=new Map,U.elementStyles=[],U.shadowRootOptions={mode:"open"},Jt?.({ReactiveElement:U}),(($t=it.reactiveElementVersions)!==null&&$t!==void 0?$t:it.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;const st=window,O=st.trustedTypes,Ft=O?O.createPolicy("lit-html",{createHTML:o=>o}):void 0,Nt="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,pe="?"+S,Ue=`<${pe}>`,P=document,J=()=>P.createComment(""),F=o=>o===null||typeof o!="object"&&typeof o!="function",$e=Array.isArray,He=o=>$e(o)||typeof o?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Kt=/-->/g,Zt=/>/g,C=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,Xt=/"/g,ve=/^(?:script|style|textarea|title)$/i,Re=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Re(1),L=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Yt=new WeakMap,N=P.createTreeWalker(P,129,null,!1);function ye(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(t):t}const Oe=(o,t)=>{const e=o.length-1,i=[];let s,n=t===2?"<svg>":"",r=W;for(let h=0;h<e;h++){const l=o[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===W?c[1]==="!--"?r=Kt:c[1]!==void 0?r=Zt:c[2]!==void 0?(ve.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=C):c[3]!==void 0&&(r=C):r===C?c[0]===">"?(r=s??W,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?C:c[3]==='"'?Xt:Qt):r===Xt||r===Qt?r=C:r===Kt||r===Zt?r=W:(r=C,s=void 0);const $=r===C&&o[h+1].startsWith("/>")?" ":"";n+=r===W?l+Ue:d>=0?(i.push(a),l.slice(0,d)+Nt+l.slice(d)+S+$):l+S+(d===-2?(i.push(void 0),h):$)}return[ye(o,n+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class K{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Oe(t,e);if(this.el=K.createElement(a,i),N.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=N.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(Nt)||u.startsWith(S)){const $=c[r++];if(d.push(u),$!==void 0){const ht=s.getAttribute($.toLowerCase()+Nt).split(S),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:n,name:A[2],strings:ht,ctor:A[1]==="."?Ie:A[1]==="?"?Be:A[1]==="@"?ze:at})}else l.push({type:6,index:n})}for(const u of d)s.removeAttribute(u)}if(ve.test(s.tagName)){const d=s.textContent.split(S),u=d.length-1;if(u>0){s.textContent=O?O.emptyScript:"";for(let $=0;$<u;$++)s.append(d[$],J()),N.nextNode(),l.push({type:2,index:++n});s.append(d[u],J())}}}else if(s.nodeType===8)if(s.data===pe)l.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(S,d+1))!==-1;)l.push({type:7,index:n}),d+=S.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function I(o,t,e=o,i){var s,n,r,h;if(t===L)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=F(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((n=l?._$AO)===null||n===void 0||n.call(l,!1),a===void 0?l=void 0:(l=new a(o),l._$AT(o,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=I(o,l._$AS(o,t.values),l,i)),t}class Le{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=((e=t?.creationScope)!==null&&e!==void 0?e:P).importNode(i,!0);N.currentNode=n;let r=N.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new Z(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Ve(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=N.nextNode(),h++)}return N.currentNode=P,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Z{constructor(t,e,i,s){var n;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(n=s?.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),F(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):He(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&F(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(ye(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new Le(n,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Yt.get(t.strings);return e===void 0&&Yt.set(t.strings,e=new K(t)),e}T(t){$e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.k(J()),this.k(J()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class at{constructor(t,e,i,s,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=I(this,t,e,0),r=!F(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const h=t;let l,a;for(t=n[0],l=0;l<n.length-1;l++)a=I(this,h[i+l],e,l),a===L&&(a=this._$AH[l]),r||(r=!F(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ie extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}const je=O?O.emptyScript:"";class Be extends at{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,je):this.element.removeAttribute(this.name)}}class ze extends at{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=I(this,t,e,0))!==null&&i!==void 0?i:v)===L)return;const s=this._$AH,n=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==v&&(s===v||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ve{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const te=st.litHtmlPolyfillSupport;te?.(K,Z),((yt=st.litHtmlVersions)!==null&&yt!==void 0?yt:st.litHtmlVersions=[]).push("2.8.0");const We=(o,t,e)=>{var i,s;const n=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;n._$litPart$=r=new Z(t.insertBefore(J(),h),h,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,gt;class g extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return L}}g.finalized=!0,g._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:g});const ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:g});((gt=globalThis.litElementVersions)!==null&&gt!==void 0?gt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:s,elements:n}=i;return{kind:s,elements:n,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},qe=(o,t,e)=>{t.constructor.createProperty(e,o)};function y(o){return(t,e)=>e!==void 0?qe(o,t,e):Ge(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=({finisher:o,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const n=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:n,descriptor:t(e.key)}:{...e,key:n};return o!=null&&(r.finisher=function(h){o(h,n)}),r}{const n=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(n,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(o,t){return Je({descriptor:e=>{const i={get(){var s,n;return(n=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&n!==void 0?n:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var n,r;return this[s]===void 0&&(this[s]=(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;((_t=window.HTMLSlotElement)===null||_t===void 0?void 0:_t.prototype.assignedElements)!=null;let k=class extends g{constructor(){super(...arguments),this.displayDurationSeconds=4,this.status="success",this.message="",this.displayedTransition=!1}updated(t){(t.has("message")||t.has("status"))&&(this.message||this.status)&&(this.displayedTransition=!0),t.has("displayedTransition")&&this.displayedTransition&&(console.log("new notif"),this.classList.add("new-notification"),setTimeout(async()=>{this.classList.remove("new-notification"),console.log("OLD notif"),this.classList.add("displayed-notification"),this.displayedTransition=!1,await this.updateComplete,this.dispatchEvent(new CustomEvent("NotificationDisplayed"))},this.secondsToDisplay))}get secondsToDisplay(){var t;return((t=this.displayDurationSeconds)!==null&&t!==void 0?t:4)*1e3}render(){const t=this.status==="success"?"✓":"✖";return m`<li>${t} ${this.message}</li>`}};k.styles=M`
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes close {
      100% {
        visibility: visible;
      }
      0% {
        visibility: hidden;
      }
    }

    :host() {
      display: block;
    }

    :host([status='success']) {
      color: rgb(33, 149, 24);
      border-left: 5px solid rgb(33, 149, 24);
    }
    :host([status='fail']) {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }

    :host(.new-notification) {
      animation: fadeIn 1s;
      /* animation-timing-function: ease-in; */
    }

    :host(.displayed-notification) {
      animation: close 1s;
      display: none;
      /* animation: ease-out 1s; */
    }

    li {
      padding: 10px;
    }

    li.success {
      color: rgb(33, 149, 24);
      cursor: pointer;
      border-left: 5px solid rgb(33, 149, 24);
    }
    li.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
    li.delete {
      background-color: salmon;
    }
  `;p([y({type:Number,reflect:!0})],k.prototype,"displayDurationSeconds",void 0);p([y({type:String,reflect:!0})],k.prototype,"status",void 0);p([y({type:String})],k.prototype,"message",void 0);p([y({type:Boolean,reflect:!0})],k.prototype,"displayedTransition",void 0);k=p([D("iaux-trans-ition")],k);let _=class extends g{constructor(){super(...arguments),this.displayDurationSeconds=4,this.maxNotifs=2,this.updates=[],this.notifsDisplaying=[],this.notifToDisplay=null,this.deleteEarliestNotif=!1}get earliestNotifElement(){return this.notificationList.lastElementChild}clear(){this.updates=[],this.notifsDisplaying=[]}updated(t){t.has("notifToDisplay")&&this.notifToDisplay&&this.cycleNotifs()}async cycleNotifs(){if(!this.notifToDisplay)return;const t=this.notifsDisplaying;this.deleteEarliestNotif&&(t.pop(),this.deleteEarliestNotif=!1,console.log("**** cycleNotifs - delete earliest notif"),await this.updateComplete),this.notifsDisplaying=[this.notifToDisplay,...t],this.notifToDisplay=null,console.log("**** cycleNotifs - notifToDisplay loaded in",this.notifToDisplay)}addNotification(t){const e=[...this.notifsDisplaying,t];this.updates=e,this.notifToDisplay=t,[t,...this.notifsDisplaying].length>this.maxNotifs&&(this.deleteEarliestNotif=!0,this.earliestNotifElement.classList.add("delete"),console.log("**** addNotif - delete earliest notif"))}get secondsToDisplay(){var t;return((t=this.displayDurationSeconds)!==null&&t!==void 0?t:4)*1e3}render(){return this.notifsDisplaying.length?m`
      <ul>
        ${this.notifsDisplaying.map(t=>this.updateBlock(t))}
      </ul>
    `:v}updateBlock(t){return m`<iaux-trans-ition
      .status=${t.status}
      .message=${t.message}
      @NotificationDisplayed=${()=>{const e=this.notifsDisplaying.filter(i=>i!==t);this.notifsDisplaying=e}}
    >
    </iaux-trans-ition>`}};_.styles=M`
    ul {
      display: grid;
      background: rgb(238, 253, 238);
      margin: 1.5rem 0px;
      width: fit-content;
      list-style-type: none;
      padding: 0;
    }
    li {
      padding: 10px;
    }
  `;p([y({type:Number})],_.prototype,"displayDurationSeconds",void 0);p([y({type:Number})],_.prototype,"maxNotifs",void 0);p([y({type:Array})],_.prototype,"updates",void 0);p([y({type:Array})],_.prototype,"notifsDisplaying",void 0);p([y({type:Object})],_.prototype,"notifToDisplay",void 0);p([y({type:Boolean})],_.prototype,"deleteEarliestNotif",void 0);p([Fe("ul")],_.prototype,"notificationList",void 0);_=p([D("iaux-notification-toast")],_);const Ke="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let j=class extends g{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return m`
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
          <a class="link" href=${Ke}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};j.styles=M`
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
    }
  `;p([y({type:String})],j.prototype,"patronName",void 0);p([y({type:String})],j.prototype,"baseHost",void 0);p([y({type:String})],j.prototype,"defaultMonthlyDonationAmount",void 0);j=p([D("iaux-mgc-welcome")],j);const Ze=m`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Qe extends g{static get styles(){return M`
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
    `}render(){return Ze}}customElements.define("ia-icon-donate",Qe);let ot=class extends g{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?m` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:v}render(){return m`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};ot.styles=M`
    :host {
      padding-bottom: 5px;
      display: block;
    }

    h2 {
      font-size: 1.5em;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      margin: 0;
      justify-content: space-between;
      gap: 10px;
      align-items: flex-end;
    }

    h2 .title-section {
      width: 100%;
      display: flex;
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
  `;p([y({type:String})],ot.prototype,"titleStyle",void 0);ot=p([D("iaux-mgc-title")],ot);let Tt=class extends g{render(){return m`<slot></slot>`}};Tt.styles=M`
    ::slotted(*) {
      height: 30px;
      border: none;
      cursor: pointer;
      color: #fff;
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

    :host(.disabled) ::slotted(*:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }

    :host(.transparent) ::slotted(*) {
      background-color: transparent;
    }

    :host(.slim) ::slotted(*) {
      padding: 0;
    }

    :host(.primary) ::slotted(*) {
      background-color: #194880;
      border-color: #c5d1df;
    }

    :host(.secondary) ::slotted(*) {
      background: #333;
    }

    :host(.cancel) ::slotted(*) {
      background-color: #e51c26;
      border-color: #f8c6c8;
    }

    :host(.link) ::slotted(*) {
      color: #4b64ff;
      border: none;
      background: transparent;
      display: flex;
      align-items: flex-end;
      padding: 0;
      height: inherit;
    }
  `;Tt=p([D("iaux-button-style")],Tt);let nt=class extends g{constructor(){super(...arguments),this.donations=[]}donationAmountFormatted(t){return`USD ${t}`}dateFormatted(t){const e=t.split("-"),i=e[0],s=parseInt(e[1],10),n=e[2];return`${{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[s]} ${n}, ${i}`}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}render(){return m`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th>Donor</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          ${this.donations.length?this.donations.map(t=>{const e=t.status==="pending";return m`
                  <tr id=${`donation-${t.id}`}>
                    <td>${this.dateFormatted(t.date)}</td>
                    <td>${this.donationAmountFormatted(t.amount)}</td>
                    <td class="status">${t.status}</td>
                    <td>
                      <iaux-button-style class="link">
                        <button
                          @click=${()=>{e||this.emailReceipt(t)}}
                          ?disabled=${e}
                        >
                          ${e?"Unavailable":"Email receipt"}
                        </button>
                      </iaux-button-style>
                    </td>
                  </tr>
                `}):m`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};nt.styles=M`
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    button {
      padding: 1rem 0;
    }
  `;p([y({type:Array})],nt.prototype,"donations",void 0);nt=p([D("iaux-mgc-receipts")],nt);let B=class extends g{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}get notificationToastElement(){return this.querySelector("iaux-notification-toast")}updateReceived(t){this.notificationToastElement.addNotification(t),this.updates.unshift(t)}get showReceiptsCTA(){return m`
      <iaux-button-style class="link">
        <button
          @click=${()=>{this.viewToDisplay="receipts"}}
        >
          Show receipts
        </button>
      </iaux-button-style>
    `}render(){return console.log("***",this.viewToDisplay,this.receipts),this.viewToDisplay==="receipts"?m`
        <iaux-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <iaux-button-style class="link">
              <button
                @click=${t=>{const e=t.target;e.disabled=!0,this.viewToDisplay="welcome",this.updates=[]}}
              >
                Back to account settings
              </button>
            </iaux-button-style>
          </span>
        </iaux-mgc-title>
        <iaux-notification-toast></iaux-notification-toast>
        <iaux-mgc-receipts
          .donations=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></iaux-mgc-receipts>
      `:m`
      <iaux-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length?this.showReceiptsCTA:v}</span
        >
      </iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `}};p([y({type:String})],B.prototype,"patronName",void 0);p([y({type:Array})],B.prototype,"receipts",void 0);p([y({type:Array})],B.prototype,"updates",void 0);p([y({type:String})],B.prototype,"viewToDisplay",void 0);B=p([D("iaux-monthly-giving-circle")],B);let rt=[];const fe=[{amount:100,date:"2020-01-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed"},{amount:100,date:"2023-02-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",is_test:!0},{amount:100,date:"2024-03-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Pending",is_test:!0}];let At=!0;const b=document.querySelector("iaux-monthly-giving-circle");b.receipts=fe;b.addEventListener("EmailReceiptRequest",async()=>{const t=Math.floor(Math.random()+.5)===1?"success":"fail",i={message:t==="success"?"Email receipt sent":"Email receipt failed",status:t};rt=[i,...rt],b.updateReceived(i),await b.updateComplete});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(At){b.receipts=[],At=!1;return}b.receipts=fe,await b.updateComplete,At=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{rt=[],b.updates=rt,await b.updateComplete});
