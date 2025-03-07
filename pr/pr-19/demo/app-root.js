(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function c(o,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(a=o[l])&&(s=(n<3?a(s):n>3?a(t,e,s):a(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=window,Kt=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ce=Symbol(),Zt=new WeakMap;let Ve=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Kt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Zt.set(e,t))}return t}toString(){return this.cssText}};const We=o=>new Ve(typeof o=="string"?o:o+"",void 0,Ce),Ke=(o,t)=>{Kt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=dt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Qt=Kt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return We(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt;const ut=window,Xt=ut.trustedTypes,Je=Xt?Xt.emptyScript:"",te=ut.reactiveElementPolyfillSupport,Ot={toAttribute(o,t){switch(t){case Boolean:o=o?Je:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},we=(o,t)=>t!==o&&(t==t||o==o),It={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:we},Lt="finalized";let Z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=It){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||It}static finalize(){if(this.hasOwnProperty(Lt))return!1;this[Lt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Qt(n))}else t!==void 0&&e.push(Qt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ke(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=It){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Ot).toAttribute(e,i.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=n.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Ot;this._$El=s,this[s]=l.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||we)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Z[Lt]=!0,Z.elementProperties=new Map,Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},te?.({ReactiveElement:Z}),((xt=ut.reactiveElementVersions)!==null&&xt!==void 0?xt:ut.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mt;const ht=window,q=ht.trustedTypes,ee=q?q.createPolicy("lit-html",{createHTML:o=>o}):void 0,zt="$lit$",I=`lit$${(Math.random()+"").slice(9)}$`,Ee="?"+I,Ye=`<${Ee}>`,R=document,pt=()=>R.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",xe=Array.isArray,Ze=o=>xe(o)||typeof o?.[Symbol.iterator]=="function",Tt=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,ne=/>/g,k=RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oe=/'/g,se=/"/g,Ie=/^(?:script|style|textarea|title)$/i,et=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ae=new WeakMap,N=R.createTreeWalker(R,129,null,!1);function Me(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ee!==void 0?ee.createHTML(t):t}const Qe=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",a=Q;for(let l=0;l<e;l++){const r=o[l];let d,u,h=-1,m=0;for(;m<r.length&&(a.lastIndex=m,u=a.exec(r),u!==null);)m=a.lastIndex,a===Q?u[1]==="!--"?a=ie:u[1]!==void 0?a=ne:u[2]!==void 0?(Ie.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=k):u[3]!==void 0&&(a=k):a===k?u[0]===">"?(a=n??Q,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?k:u[3]==='"'?se:oe):a===se||a===oe?a=k:a===ie||a===ne?a=Q:(a=k,n=void 0);const y=a===k&&o[l+1].startsWith("/>")?" ":"";s+=a===Q?r+Ye:h>=0?(i.push(d),r.slice(0,h)+zt+r.slice(h)+I+y):r+I+(h===-2?(i.push(void 0),l):y)}return[Me(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let qt=class Te{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const l=t.length-1,r=this.parts,[d,u]=Qe(t,e);if(this.el=Te.createElement(d,i),N.currentNode=this.el.content,e===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(n=N.nextNode())!==null&&r.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const m of n.getAttributeNames())if(m.endsWith(zt)||m.startsWith(I)){const y=u[a++];if(h.push(m),y!==void 0){const P=n.getAttribute(y.toLowerCase()+zt).split(I),C=/([.?@])?(.*)/.exec(y);r.push({type:1,index:s,name:C[2],strings:P,ctor:C[1]==="."?ti:C[1]==="?"?ii:C[1]==="@"?ni:bt})}else r.push({type:6,index:s})}for(const m of h)n.removeAttribute(m)}if(Ie.test(n.tagName)){const h=n.textContent.split(I),m=h.length-1;if(m>0){n.textContent=q?q.emptyScript:"";for(let y=0;y<m;y++)n.append(h[y],pt()),N.nextNode(),r.push({type:2,index:++s});n.append(h[m],pt())}}}else if(n.nodeType===8)if(n.data===Ee)r.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(I,h+1))!==-1;)r.push({type:7,index:s}),h+=I.length-1}s++}}static createElement(t,e){const i=R.createElement("template");return i.innerHTML=t,i}};function G(o,t,e=o,i){var n,s,a,l;if(t===et)return t;let r=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=tt(t)?void 0:t._$litDirective$;return r?.constructor!==d&&((s=r?._$AO)===null||s===void 0||s.call(r,!1),d===void 0?r=void 0:(r=new d(o),r._$AT(o,e,i)),i!==void 0?((a=(l=e)._$Co)!==null&&a!==void 0?a:l._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=G(o,r._$AS(o,t.values),r,i)),t}let Xe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:R).importNode(i,!0);N.currentNode=s;let a=N.nextNode(),l=0,r=0,d=n[0];for(;d!==void 0;){if(l===d.index){let u;d.type===2?u=new Pe(a,a.nextSibling,this,t):d.type===1?u=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(u=new oi(a,this,t)),this._$AV.push(u),d=n[++r]}l!==d?.index&&(a=N.nextNode(),l++)}return N.currentNode=R,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Pe=class ke{constructor(t,e,i,n){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=G(this,t,e),tt(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ze(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(R.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=qt.createElement(Me(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const a=new Xe(s,this),l=a.u(this.options);a.v(i),this.$(l),this._$AH=a}}_$AC(t){let e=ae.get(t.strings);return e===void 0&&ae.set(t.strings,e=new qt(t)),e}T(t){xe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new ke(this.k(pt()),this.k(pt()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},bt=class{constructor(t,e,i,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(s===void 0)t=G(this,t,e,0),a=!tt(t)||t!==this._$AH&&t!==et,a&&(this._$AH=t);else{const l=t;let r,d;for(t=s[0],r=0;r<s.length-1;r++)d=G(this,l[i+r],e,r),d===et&&(d=this._$AH[r]),a||(a=!tt(d)||d!==this._$AH[r]),d===A?t=A:t!==A&&(t+=(d??"")+s[r+1]),this._$AH[r]=d}a&&!n&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ti=class extends bt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}};const ei=q?q.emptyScript:"";let ii=class extends bt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,ei):this.element.removeAttribute(this.name)}},ni=class extends bt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=G(this,t,e,0))!==null&&i!==void 0?i:A)===et)return;const n=this._$AH,s=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},oi=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){G(this,t)}};const re=ht.litHtmlPolyfillSupport;re?.(qt,Pe),((Mt=ht.litHtmlVersions)!==null&&Mt!==void 0?Mt:ht.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct=window,Jt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),le=new WeakMap;let De=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Jt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=le.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&le.set(e,t))}return t}toString(){return this.cssText}};const si=o=>new De(typeof o=="string"?o:o+"",void 0,Yt),v=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new De(e,o,Yt)},ai=(o,t)=>{Jt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=ct.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},de=Jt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return si(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pt;const mt=window,ce=mt.trustedTypes,ri=ce?ce.emptyScript:"",ue=mt.reactiveElementPolyfillSupport,Gt={toAttribute(o,t){switch(t){case Boolean:o=o?ri:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ne=(o,t)=>t!==o&&(t==t||o==o),kt={attribute:!0,type:String,converter:Gt,reflect:!1,hasChanged:Ne},jt="finalized";let L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=kt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||kt}static finalize(){if(this.hasOwnProperty(jt))return!1;this[jt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(de(n))}else t!==void 0&&e.push(de(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ai(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=kt){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const a=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Gt).toAttribute(e,i.type);this._$El=t,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const a=n.getPropertyOptions(s),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?a.converter:Gt;this._$El=s,this[s]=l.fromAttribute(e,a.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ne)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};L[jt]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},ue?.({ReactiveElement:L}),((Pt=mt.reactiveElementVersions)!==null&&Pt!==void 0?Pt:mt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dt;const vt=window,j=vt.trustedTypes,he=j?j.createPolicy("lit-html",{createHTML:o=>o}):void 0,Vt="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,Ue="?"+M,li=`<${Ue}>`,F=document,it=()=>F.createComment(""),nt=o=>o===null||typeof o!="object"&&typeof o!="function",Be=Array.isArray,di=o=>Be(o)||typeof o?.[Symbol.iterator]=="function",Nt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,D=RegExp(`>|${Nt}(?:([^\\s"'>=/]+)(${Nt}*=${Nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ve=/'/g,ge=/"/g,Re=/^(?:script|style|textarea|title)$/i,ci=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=ci(1),V=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),fe=new WeakMap,U=F.createTreeWalker(F,129,null,!1);function Fe(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(t):t}const ui=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",a=X;for(let l=0;l<e;l++){const r=o[l];let d,u,h=-1,m=0;for(;m<r.length&&(a.lastIndex=m,u=a.exec(r),u!==null);)m=a.lastIndex,a===X?u[1]==="!--"?a=pe:u[1]!==void 0?a=me:u[2]!==void 0?(Re.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=D):u[3]!==void 0&&(a=D):a===D?u[0]===">"?(a=n??X,h=-1):u[1]===void 0?h=-2:(h=a.lastIndex-u[2].length,d=u[1],a=u[3]===void 0?D:u[3]==='"'?ge:ve):a===ge||a===ve?a=D:a===pe||a===me?a=X:(a=D,n=void 0);const y=a===D&&o[l+1].startsWith("/>")?" ":"";s+=a===X?r+li:h>=0?(i.push(d),r.slice(0,h)+Vt+r.slice(h)+M+y):r+M+(h===-2?(i.push(void 0),l):y)}return[Fe(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class ot{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,a=0;const l=t.length-1,r=this.parts,[d,u]=ui(t,e);if(this.el=ot.createElement(d,i),U.currentNode=this.el.content,e===2){const h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(n=U.nextNode())!==null&&r.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const m of n.getAttributeNames())if(m.endsWith(Vt)||m.startsWith(M)){const y=u[a++];if(h.push(m),y!==void 0){const P=n.getAttribute(y.toLowerCase()+Vt).split(M),C=/([.?@])?(.*)/.exec(y);r.push({type:1,index:s,name:C[2],strings:P,ctor:C[1]==="."?pi:C[1]==="?"?vi:C[1]==="@"?gi:At})}else r.push({type:6,index:s})}for(const m of h)n.removeAttribute(m)}if(Re.test(n.tagName)){const h=n.textContent.split(M),m=h.length-1;if(m>0){n.textContent=j?j.emptyScript:"";for(let y=0;y<m;y++)n.append(h[y],it()),U.nextNode(),r.push({type:2,index:++s});n.append(h[m],it())}}}else if(n.nodeType===8)if(n.data===Ue)r.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(M,h+1))!==-1;)r.push({type:7,index:s}),h+=M.length-1}s++}}static createElement(t,e){const i=F.createElement("template");return i.innerHTML=t,i}}function W(o,t,e=o,i){var n,s,a,l;if(t===V)return t;let r=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=nt(t)?void 0:t._$litDirective$;return r?.constructor!==d&&((s=r?._$AO)===null||s===void 0||s.call(r,!1),d===void 0?r=void 0:(r=new d(o),r._$AT(o,e,i)),i!==void 0?((a=(l=e)._$Co)!==null&&a!==void 0?a:l._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=W(o,r._$AS(o,t.values),r,i)),t}class hi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:F).importNode(i,!0);U.currentNode=s;let a=U.nextNode(),l=0,r=0,d=n[0];for(;d!==void 0;){if(l===d.index){let u;d.type===2?u=new lt(a,a.nextSibling,this,t):d.type===1?u=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(u=new fi(a,this,t)),this._$AV.push(u),d=n[++r]}l!==d?.index&&(a=U.nextNode(),l++)}return U.currentNode=F,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class lt{constructor(t,e,i,n){var s;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),nt(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):di(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==f&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.$(F.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ot.createElement(Fe(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const a=new hi(s,this),l=a.u(this.options);a.v(i),this.$(l),this._$AH=a}}_$AC(t){let e=fe.get(t.strings);return e===void 0&&fe.set(t.strings,e=new ot(t)),e}T(t){Be(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new lt(this.k(it()),this.k(it()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class At{constructor(t,e,i,n,s){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let a=!1;if(s===void 0)t=W(this,t,e,0),a=!nt(t)||t!==this._$AH&&t!==V,a&&(this._$AH=t);else{const l=t;let r,d;for(t=s[0],r=0;r<s.length-1;r++)d=W(this,l[i+r],e,r),d===V&&(d=this._$AH[r]),a||(a=!nt(d)||d!==this._$AH[r]),d===f?t=f:t!==f&&(t+=(d??"")+s[r+1]),this._$AH[r]=d}a&&!n&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class pi extends At{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const mi=j?j.emptyScript:"";class vi extends At{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,mi):this.element.removeAttribute(this.name)}}class gi extends At{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=W(this,t,e,0))!==null&&i!==void 0?i:f)===V)return;const n=this._$AH,s=t===f&&n!==f||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,a=t!==f&&(n===f||s);s&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class fi{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const ye=vt.litHtmlPolyfillSupport;ye?.(ot,lt),((Dt=vt.litHtmlVersions)!==null&&Dt!==void 0?Dt:vt.litHtmlVersions=[]).push("2.8.0");const yi=(o,t,e)=>{var i,n;const s=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let a=s._$litPart$;if(a===void 0){const l=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=a=new lt(t.insertBefore(it(),l),l,void 0,e??{})}return a._$AI(o),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ut,Bt;class S extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yi(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return V}}S.finalized=!0,S._$litElement$=!0,(Ut=globalThis.litElementHydrateSupport)===null||Ut===void 0||Ut.call(globalThis,{LitElement:S});const $e=globalThis.litElementPolyfillSupport;$e?.({LitElement:S});((Bt=globalThis.litElementVersions)!==null&&Bt!==void 0?Bt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(a){customElements.define(e,a)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $i=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},bi=(o,t,e)=>{t.constructor.createProperty(e,o)};function g(o){return(t,e)=>e!==void 0?bi(o,t,e):$i(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ai=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,a=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(a.finisher=function(l){o(l,s)}),a}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(o,t){return Ai({descriptor:e=>{const i={get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var s,a;return this[n]===void 0&&(this[n]=(a=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&a!==void 0?a:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rt;((Rt=window.HTMLSlotElement)===null||Rt===void 0?void 0:Rt.prototype.assignedElements)!=null;const _i="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let K=class extends S{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return p`
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
          <a class="link" href=${_i}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};K.styles=v`
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
  `;c([g({type:String})],K.prototype,"patronName",void 0);c([g({type:String})],K.prototype,"baseHost",void 0);c([g({type:String})],K.prototype,"defaultMonthlyDonationAmount",void 0);K=c([w("ia-mgc-welcome")],K);const Si=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Ci extends S{static get styles(){return v`
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
    `}render(){return Si}}customElements.define("ia-icon-donate",Ci);let J=class extends S{constructor(){super(...arguments),this.isDisabled=!1}render(){return p`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};J.styles=v`
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
      color: #222 !important;
    }
  `;c([g({type:Boolean,reflect:!0})],J.prototype,"isDisabled",void 0);c([g({type:Object})],J.prototype,"clickHandler",void 0);c([b("button")],J.prototype,"button",void 0);J=c([w("ia-button")],J);let gt=class extends S{constructor(){super(...arguments),this.plans=[]}render(){return p`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,n,s,a,l,r,d,u,h,m,y,P,C,_t,St,Ct,wt;let Et=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";Et==="creditCard"&&(Et="Credit card");const ze=(s=(n=t.payment)===null||n===void 0?void 0:n.cardType)!==null&&s!==void 0?s:"Card type not found",qe=!((a=t.payment)===null||a===void 0)&&a.last4?`...${(l=t.payment)===null||l===void 0?void 0:l.last4}`:"CC number not found",Ge=t.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return p`
              <li class=${`${t.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${t.currency}
                      ${t.currencySymbol}${t.amount}/month
                    </p>
                    ${t.isTest?p`<p class="is-test">(Test payment)</p>`:f}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${Et}</p>
                    ${((r=t.payment)===null||r===void 0?void 0:r.paymentMethodType)==="creditCard"?p`<p>${ze}</p>
                          <p>${qe}</p>`:f}
                    ${((d=t.payment)===null||d===void 0?void 0:d.paymentMethodType)==="Paypal"?p`<p>
                          Paypal email:
                          <a href=${`mailto:${(u=t.payment)===null||u===void 0?void 0:u.paypalEmail}`}
                            >${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}</a
                          >
                        </p>`:f}
                    ${((m=t.payment)===null||m===void 0?void 0:m.paymentMethodType)==="Venmo"?p`<p>
                          Venmo username:
                          <a href=${`mailto:${(y=t.payment)===null||y===void 0?void 0:y.venmoUsername}`}
                            >${(P=t.payment)===null||P===void 0?void 0:P.paypalEmail}</a
                          >
                        </p>`:f}
                    ${((C=t.payment)===null||C===void 0?void 0:C.paymentMethodType)!=="creditCard"?p`<p>
                          Expires:
                          ${(St=(_t=t.payment)===null||_t===void 0?void 0:_t.expirationMonth)!==null&&St!==void 0?St:"month not found"}/${(wt=(Ct=t.payment)===null||Ct===void 0?void 0:Ct.expirationYear)!==null&&wt!==void 0?wt:"year not found"}
                        </p>`:f}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${t.nextBillingDate}</p>
                  </div>
                </div>
                <ia-button
                  class="ia-button link edit-donation"
                  .isDisabled=${t.plan.isCancelled}
                  .clickHandler=${async(ki,je)=>{je.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:t}}))}}
                >
                  ${Ge}
                </ia-button>
              </li>
            `})}
        </ul>
      </section>
    `}};gt.styles=v`
    :host {
      max-height: 500px;
      overflow-y: scroll;
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

    @media screen and (max-width: 500px) {
      ul li .info {
        display: block;
      }
    }
  `;c([g({type:Array})],gt.prototype,"plans",void 0);gt=c([w("ia-mgc-plans")],gt);let ft=class extends S{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?p` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:f}render(){return p`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};ft.styles=v`
    :host {
      padding-bottom: 5px;
      display: block;
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
      align-items: flex-end;
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

    @media screen and (max-width: 450px) {
      h2,
      slot[name='action'] {
        display: block;
      }
      slot[name='action'] {
        margin-top: 10px;
      }
    }
  `;c([g({type:String})],ft.prototype,"titleStyle",void 0);ft=c([w("ia-mgc-title")],ft);let st=class extends S{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const n={...i},{id:s}=t;n[s]=t,this.receiptDispatcher={...n},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const a=CSS.escape(s),l=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${a} ia-button`);l.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return p`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],n=i?.emailStatus==="pending",s=!i||!i.emailStatus?f:p`<ia-mgc-update-status
                        .status=${i.emailStatus}
                        >${this.emailStatusMessageToDisplay(i)}</ia-mgc-update-status
                      >`;return p`
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
                        <ia-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async(a,l)=>{if(!n&&(l.isDisabled=!0,await l.updateComplete),!n&&(this.emailReceipt(t),this.receiptDispatcher)){const d={...this.receiptDispatcher};d[t.id].emailStatus="pending",this.receiptDispatcher=d}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-button>
                        ${s}
                      </div>
                    </td>
                  </tr>
                `}):p`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};st.styles=v`
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
    ia-button-style {
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
  `;c([g({type:Array})],st.prototype,"receipts",void 0);c([g({type:Object})],st.prototype,"receiptDispatcher",void 0);st=c([w("ia-mgc-receipts")],st);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=o=>o??A;class wi{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class Ei{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class xi{constructor(t){this.customer=t.customer,this.billing=t.billing}}var Ae;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(Ae||(Ae={}));class x{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return x.calculateFeeAmount(this.amount)}get total(){return x.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.02+.49;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var z;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(z||(z={}));new x({donationType:z.OneTime,amount:10,coverFees:!1});var B;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(B||(B={}));let H=class extends S{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=B.LeaveSpace,this.requiredIndicatorSpaceOption=B.LeaveSpace}render(){return p`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?p` * `:f}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===B.CompressSpace?"compress-space":""}static get styles(){const t=v`var(--inputBorder, 1px solid #d9d9d9)`,e=v`var(--badgedInputBorderErrorColor, red)`,i=v`var(--badgedInputIconSize, 1.4rem)`,n=v`var(--badgedInputIconSpacerWidth, 3rem)`,s=v`var(--badgedInputNoIconSpacerWidth, 1rem)`,a=v`var(--badgedInputHeight, 3rem)`,l=v`var(--badgedInputRequiredIndicatorColor, red)`,r=v`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,d=v`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return v`
      .input-wrapper {
        border: ${t};
        height: ${a};
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
        color: ${l};
        font-size: ${d};
        margin: ${r};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};c([g({type:Boolean})],H.prototype,"error",void 0);c([g({type:Object})],H.prototype,"icon",void 0);c([g({type:Boolean})],H.prototype,"required",void 0);c([g({type:String})],H.prototype,"iconSpaceOption",void 0);c([g({type:String})],H.prototype,"requiredIndicatorSpaceOption",void 0);H=c([w("badged-input")],H);const Ii=p`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`,Mi=p`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`,Ti=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,_e={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let $=class extends S{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,n])=>{const s=i.checkValidity();e=e&&s,s||(n.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return p`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:Ii})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:Ti})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:Mi,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:B.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return p`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,n,s,a,l,r,d,u,h;const m=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:m,this.selectedCountry==="US"?((n=this.postalBadgedInput)===null||n===void 0||n.setAttribute("required",""),(s=this.postalCodeField)===null||s===void 0||s.setAttribute("required",""),(a=this.regionBadgedInput)===null||a===void 0||a.setAttribute("required",""),(l=this.regionField)===null||l===void 0||l.setAttribute("required","")):((r=this.postalBadgedInput)===null||r===void 0||r.removeAttribute("required"),(d=this.postalCodeField)===null||d===void 0||d.removeAttribute("required"),(u=this.regionBadgedInput)===null||u===void 0||u.removeAttribute("required"),(h=this.regionField)===null||h===void 0||h.removeAttribute("required"))}}
        >
          ${Object.keys(_e).map(t=>{const e=_e[t];return p`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n,s;const a=(e=t.required)!==null&&e!==void 0?e:!0,l=(i=t.fieldType)!==null&&i!==void 0?i:"text",r=(n=t.iconSpaceOption)!==null&&n!==void 0?n:B.LeaveSpace;return p`
      <badged-input
        class=${t.id}
        .icon=${t.icon}
        .iconSpaceOption=${r}
        ?required=${t.required}
      >
        <label for=${t.id}>${t.placeholder}</label>
        <input
          type=${l}
          id=${t.id}
          class="donation-contact-form-input"
          name=${t.name}
          aria-label=${t.placeholder}
          placeholder=${t.placeholder}
          maxlength=${be(t.maxlength)}
          autocomplete=${(s=t.autocomplete)!==null&&s!==void 0?s:"on"}
          pattern=${be(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${a}
        />
      </badged-input>
    `}get donorContactInfo(){return new xi({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new wi({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new Ei({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=v`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=v`var(--badgedInputIconSpacerWidth, 5rem)`,i=v`var(--fieldSetSpacing, 1rem)`,n=v`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,s=v`var(--contactFieldFontSize, 1.6rem)`,a=v`var(--inputFieldFontColor, #333)`,l=v`calc(100% - ${e})`,r=v`calc(100% - ${t})`;return p`
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
          width: ${l};
        }

        contact-form #donation-contact-form-postal-code {
          width: ${r};
        }

        contact-form #donation-contact-form-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        contact-form #donation-contact-form-last-name {
          width: ${r};
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
          width: ${l};
          border: 0;
          outline: 0;
          background: transparent;
          font-weight: bold;
          color: ${a};
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
    `}};c([b("badged-input.donation-contact-form-email")],$.prototype,"emailBadgedInput",void 0);c([b("#donation-contact-form-email")],$.prototype,"emailField",void 0);c([b("badged-input.donation-contact-form-first-name")],$.prototype,"firstNameBadgedInput",void 0);c([b("#donation-contact-form-first-name")],$.prototype,"firstNameField",void 0);c([b("badged-input.donation-contact-form-last-name")],$.prototype,"lastNameBadgedInput",void 0);c([b("#donation-contact-form-last-name")],$.prototype,"lastNameField",void 0);c([b("badged-input.donation-contact-form-postal-code")],$.prototype,"postalBadgedInput",void 0);c([b("#donation-contact-form-postal-code")],$.prototype,"postalCodeField",void 0);c([b("badged-input.donation-contact-form-street-address")],$.prototype,"streetAddressBadgedInput",void 0);c([b("#donation-contact-form-street-address")],$.prototype,"streetAddressField",void 0);c([b("badged-input.donation-contact-form-extended-address")],$.prototype,"extendedAddressBadgedInput",void 0);c([b("#donation-contact-form-extended-address")],$.prototype,"extendedAddressField",void 0);c([b("badged-input.donation-contact-form-locality")],$.prototype,"localityBadgedInput",void 0);c([b("#donation-contact-form-locality")],$.prototype,"localityField",void 0);c([b("badged-input.donation-contact-form-region")],$.prototype,"regionBadgedInput",void 0);c([b("#donation-contact-form-region")],$.prototype,"regionField",void 0);c([b("#donation-contact-form-countryCodeAlpha2")],$.prototype,"countryCodeAlpha2Field",void 0);c([b("#donation-contact-form-error-message")],$.prototype,"errorMessage",void 0);c([b("form")],$.prototype,"form",void 0);c([g({type:String})],$.prototype,"selectedCountry",void 0);c([g({type:String})],$.prototype,"donorEmail",void 0);$=c([w("contact-form")],$);var Wt;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(Wt||(Wt={}));let at=class extends S{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=Wt.ShowBadge}render(){return p`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?p` <div class="title">${this.headline}</div> `:""}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){const t=v`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=v`var(--formSectionBadgeMargin, 1rem)`,i=v`var(--formSectionBadgeBackgroundColor, #333)`,n=v`var(--formSectionBadgeRadius, 1.2rem)`,s=v`calc(${n} * 2)`,a=v`var(--formSectionBadgeFontSize, 1.8rem)`,l=v`var(--formSectionBadgeFontWeight, bold)`,r=v`var(--formSectionBadgeFontColor, #fff)`,d=v`var(--formSectionTitleFontSize, 1.8rem)`,u=v`var(--formSectionTitleFontWeight, bold)`,h=v`var(--formSectionContentBackgroundColor, transparent)`,m=v`var(--formSectionTextColor, #333)`,y=v`calc(${n} * 2)`;return v`
      :host {
        display: block;
        background-color: ${h};
        color: ${m};
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
        color: ${r};
        width: ${s};
        height: ${s};
        border-radius: ${n};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${l};
        font-size: ${a};
      }

      .title {
        line-height: ${y};
        margin-bottom: 0.5rem;
        font-size: ${d};
        font-weight: ${u};
      }
    `}};c([g({type:String})],at.prototype,"sectionBadge",void 0);c([g({type:String})],at.prototype,"headline",void 0);c([g({type:String})],at.prototype,"badgeMode",void 0);at=c([w("donation-form-section")],at);let O=class extends S{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:p`
      <ia-button
        class="clear-container slim"
        .clickHandler=${(t,e)=>{if(e.isDisabled=!0,this.initialCancelRequest){this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0;return}this.initialCancelRequest=!0}}
      >
        <donation-form-section
          badgemode="hidebadge"
          headline="Cancel recurring donation (requires confirmation)"
        >
          <div class="warning">
            <p>
              You can also pause your recurring donation by setting the next
              donation date up to 12 months in the future.
            </p>
            <p>Let's cancel my donation</p>
          </div>
        </donation-form-section>
      </ia-button>

      ${this.initialCancelRequest?this.confirmCancelation:f}
    `}get confirmCancelation(){return p`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <ia-button class='text exit-cancel'  @click=${()=>{this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0}}>X</ia-button>

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

        <ia-button
          class="cancel"
          .isDisabled=${this.patronWantsToKeepPlan}
          id=${`submit-${this.formId}`}
          type="submit"
          .clickHandler=${(t,e)=>{e.isDisabled=!0,this.cancelThisPlan(t)}}
        >I'm sure I want to cancel my recurring donation.</ia-button>
      </form>
    </section>
    `}};O.styles=v`
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

    ia-button.exit-cancel {
      --button-border: 1px solid;
      --button-border-radius: 50%;
      position: absolute;
      top: -5px;
      right: -10px;
    }

    ia-button {
      --button-height: auto;
    }

    ia-button > * {
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
  `;c([g({type:Object})],O.prototype,"plan",void 0);c([g({type:Boolean,reflect:!0})],O.prototype,"patronWantsToKeepPlan",void 0);c([g({type:Boolean,reflect:!0})],O.prototype,"initialCancelRequest",void 0);c([b("form")],O.prototype,"form",void 0);O=c([w("ia-mgc-cancel-plan")],O);let yt=class extends S{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?p`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:f}};yt.styles=v`
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
  `;c([g({type:String})],yt.prototype,"status",void 0);yt=c([w("ia-mgc-update-status")],yt);let E=class extends S{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t;return p`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?f:p` <p class="current-amount">
                  USD $${(t=this.plan)===null||t===void 0?void 0:t.amount}
                  <ia-mgc-update-status .status=${this.updateStatus}
                    >${this.updateMessage}</ia-mgc-update-status
                  >
                </p>
                <ia-button
                  id="edit-amount"
                  class="ia-button link"
                  .clickHandler=${()=>{this.currentlyEditing=!0}}
                >
                  Edit...
                </ia-button>`}
          ${this.currentlyEditing?this.editAmountForm:f}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed. Try again.",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,n,s,a;t.preventDefault();const l=this.form.querySelector('input[name="amount"]');this.newAmount=Number(l.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const r=Number(x.calculateTotal(Number((n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:r,baseAmount:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount,coverFees:this.coverFees,feeCovered:(a=this.donationPaymentInfo)===null||a===void 0?void 0:a.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new x({donationType:z.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new x({donationType:z.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new x({donationType:z.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:x.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){var t;return`I'll generously add $${(t=this.donationPaymentInfo)===null||t===void 0?void 0:t.feeAmountCovered} to cover fees.`}get editAmountForm(){var t;return p`
      <section>
        <form id="edit-plan-amount">
          <p>Current donation amount: $${(t=this.plan)===null||t===void 0?void 0:t.amount}</p>
          <div>
            $
            <input
              type="number"
              id="amount"
              name="amount"
              required="true"
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
                @change=${e=>{const n=e.target.checked;this.coverFees=n,this.captureAmountChanges()}}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>Total: USD $${this.totalAmountWithFees()}</p>
            <div class="cta-container">
              <ia-button
                class="ia-button secondary"
                .clickHandler=${e=>{e.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-button>
              <ia-button
                id="update-amount"
                class="ia-button primary"
                type="submit"
                .clickHandler=${async(e,i)=>{var n;if(this.clearStatusMessaging(),!this.newAmount){this.errorMessage="Please enter a new amount";return}i.isDisabled=!0,await i.updateComplete;const s=this.form.querySelector('input[name="amount"]'),a=(n=Number(s.value))!==null&&n!==void 0?n:0,l=a<1,r=a>=9999;if(l&&(this.errorMessage="Please enter a valid amount"),r&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),r||l){i.isDisabled=!1,await i.updateComplete;return}this.requestAmountUpdate(e)}}
              >
                Update
              </ia-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error">${this.errorMessage}</p>
        </form>
      </section>
    `}};E.styles=v`
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
  `;c([g({type:Object})],E.prototype,"plan",void 0);c([g({type:Object})],E.prototype,"donationPaymentInfo",void 0);c([g({type:Number})],E.prototype,"newAmount",void 0);c([g({type:Boolean,reflect:!0})],E.prototype,"currentlyEditing",void 0);c([g({type:Boolean})],E.prototype,"coverFees",void 0);c([g({type:String})],E.prototype,"updateMessage",void 0);c([g({type:String})],E.prototype,"errorMessage",void 0);c([g({type:String})],E.prototype,"updateStatus",void 0);c([b("form")],E.prototype,"form",void 0);E=c([w("ia-mgc-edit-plan-amount")],E);let rt=class extends S{createRenderRoot(){return this}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}render(){return p`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${t=>{var e;const{amount:i,baseAmount:n,coverFees:s,feeCovered:a}=t.detail;this.plan&&((e=this.updateAmountHandler)===null||e===void 0||e.call(this,this.plan,{amount:i,baseAmount:n,coverFees:s,feeCovered:a}))}}
        ></ia-mgc-edit-plan-amount>
        <hr />
        <ia-mgc-cancel-plan
          .plan=${this.plan}
          @cancelPlan=${()=>{var t;this.plan&&((t=this.cancelPlanHandler)===null||t===void 0||t.call(this,this.plan))}}
        ></ia-mgc-cancel-plan>
      </section>
    `}};c([g({type:Object})],rt.prototype,"plan",void 0);c([g({type:Object})],rt.prototype,"cancelPlanHandler",void 0);c([g({type:Object})],rt.prototype,"updateAmountHandler",void 0);rt=c([w("ia-mgc-edit-plan")],rt);let T=class extends S{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:n=""}=t,s=(e=i?.id)!==null&&e!==void 0?e:n;if(this.editingThisPlan&&this.editingThisPlan.id,t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:s,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return p`
      ${this.sectionTitle}
      ${t?p`<ia-mgc-edit-plan
            .plan=${this.editingThisPlan}
            .cancelPlanHandler=${e=>{console.log("cancelPlan",e),this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:e}}))}}
            .updateAmountHandler=${(e,i)=>{console.log("updateAmount",e,{...i}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:e,amountOptions:i}}))}}
          ></ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let t="",e="",i=p``;const n=p`
      <ia-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new CustomEvent("ShowReceipts"))}}
      >
        View recent donation history
      </ia-button>
    `,s=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=p`<ia-button
          class="link slim"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome",this.dispatchEvent(new CustomEvent("ShowWelcome")),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=p`<ia-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome",this.dispatchEvent(new CustomEvent("ShowWelcome")),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-button>`;break;default:t="Monthly Giving Circle",e="heart",s&&(i=n);break}return p`
      <ia-mgc-title titleStyle=${e}>
        <span slot="title">${t}</span>
        <span slot="action">${i}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay==="receipts"?p`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></ia-mgc-receipts>
      `:p`
      ${this.viewToDisplay==="plans"&&this.plans.length?p`
            <ia-mgc-plans
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event("ShowEditForm")),await this.updateComplete}}
              .plans=${this.plans}
            ></ia-mgc-plans>
          `:p`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};c([g({type:String})],T.prototype,"patronName",void 0);c([g({type:Array})],T.prototype,"receipts",void 0);c([g({type:Array})],T.prototype,"updates",void 0);c([g({type:Array})],T.prototype,"plans",void 0);c([g({type:Object})],T.prototype,"editingThisPlan",void 0);c([g({type:String,reflect:!0})],T.prototype,"viewToDisplay",void 0);T=c([w("ia-monthly-giving-circle")],T);class Ft{constructor(t){this.receipt=t}get amountFormatted(){var t,e;const i=(t=this.receipt.total_amount)!==null&&t!==void 0?t:this.receipt.net_amount,n=(e=this.receipt.currency)!==null&&e!==void 0?e:"CURR not found";return i?`${n} ${this.currencySymbol}${i}`:"no amount found, can't find total_amount or net_amount"}get amount(){var t,e;return(e=(t=`${this.receipt.total_amount}`)!==null&&t!==void 0?t:`${this.receipt.net_amount}`)!==null&&e!==void 0?e:"no amount found, can't find total_amount or net_amount"}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}get currencySymbol(){return this.receipt.currency==="USD"?"$":""}}class Pi{constructor(t){var e;this.plan=t,this.payment=t.btdata,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get currencySymbol(){return this.currency==="USD"?"$":""}get amount(){return this.plan.amount}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}get startDate(){return new Date(this.plan.start_date).toLocaleDateString()}get nextBillingDate(){const t=new Date(this.payment.nextBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return t??"not found"}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}}let Y=[];const Se={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,nextBillingDate:{date:"2024-09-09 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},He=Object.keys(Se).map(o=>new Pi(Se[o])),Oe=[new Ft({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new Ft({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new Ft({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})];let Ht=!0;const $t=document.getElementById("interaction-status-area"),Le=()=>Math.floor(Math.random()+.5),_=document.querySelector("ia-monthly-giving-circle");_.receipts=Oe;_.plans=He;_.addEventListener("EmailReceiptRequest",o=>{const{donation:t}=o.detail,e=Le()===1,i=e?"success":"fail",n=e?3e3:8e3;$t.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${n} ms.`;const a={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};Y=[a,...Y],setTimeout(()=>{_.updateReceived(a),console.log("EmailReceiptRequest index.html ----",a),$t.innerText=""},n)});_.addEventListener("cancelPlan",async o=>{const{plan:t}=o.detail,i=_.plans.map(n=>(n.plan.token===t.plan.token&&(console.log("p 2 plan",n,t),n.cancelPlan()),n));_.plans=i,await _.updateComplete,console.log("plan cancelled & plan list updated",_.plans)});_.addEventListener("updateAmount",async o=>{const{plan:t,amountOptions:e}=o.detail,i=Le()===1,n=i?"success":"fail",s=i?1500:5e3;$t.innerText=`Amount Update Request received: will return ${n} in ${s} ms - Details: ${JSON.stringify(e)}`;const a=n==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const l={message:a,status:n,plan:t,donationId:t.id,action:"amountUpdate"};Y=[l,...Y],setTimeout(()=>{_.updateReceived(l),console.log("Amount Update Request --- index.html ----",l),$t.innerText=""},s)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(Ht){_.receipts=[],Ht=!1;return}_.receipts=Oe,await _.updateComplete,Ht=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{Y=[],_.updates=Y,await _.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{_.plans=_.plans.length?[]:He,await _.updateComplete});
