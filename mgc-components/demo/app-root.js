(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();function l(o,t,e,i){var n=arguments.length,s=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,e,i);else for(var c=o.length-1;c>=0;c--)(r=o[c])&&(s=(n<3?r(s):n>3?r(t,e,s):r(t,e))||s);return n>3&&s&&Object.defineProperty(t,e,s),s}function at(o,t,e,i){function n(s){return s instanceof e?s:new e(function(r){r(s)})}return new(e||(e=Promise))(function(s,r){function c(u){try{d(i.next(u))}catch(h){r(h)}}function a(u){try{d(i.throw(u))}catch(h){r(h)}}function d(u){u.done?s(u.value):n(u.value).then(c,a)}d((i=i.apply(o,t||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const lt=window,Ht=lt.ShadowRoot&&(lt.ShadyCSS===void 0||lt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),zt=new WeakMap;let Re=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ht&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&zt.set(e,t))}return t}toString(){return this.cssText}};const Fe=o=>new Re(typeof o=="string"?o:o+"",void 0,fe),Ue=(o,t)=>{Ht?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=lt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},Vt=Ht?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Fe(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt;const ct=window,jt=ct.trustedTypes,Oe=jt?jt.emptyScript:"",Wt=ct.reactiveElementPolyfillSupport,Mt={toAttribute(o,t){switch(t){case Boolean:o=o?Oe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},$e=(o,t)=>t!==o&&(t==t||o==o),At={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:$e},Dt="finalized";let Y=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||At}static finalize(){if(this.hasOwnProperty(Dt))return!1;this[Dt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Vt(n))}else t!==void 0&&e.push(Vt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ue(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=At){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Mt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Mt;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||$e)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Y[Dt]=!0,Y.elementProperties=new Map,Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Wt?.({ReactiveElement:Y}),((bt=ct.reactiveElementVersions)!==null&&bt!==void 0?bt:ct.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const ut=window,G=ut.trustedTypes,Kt=G?G.createPolicy("lit-html",{createHTML:o=>o}):void 0,Nt="$lit$",P=`lit$${(Math.random()+"").slice(9)}$`,be="?"+P,ke=`<${be}>`,F=document,ht=()=>F.createComment(""),tt=o=>o===null||typeof o!="object"&&typeof o!="function",Ae=Array.isArray,He=o=>Ae(o)||typeof o?.[Symbol.iterator]=="function",St=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zt=/-->/g,Jt=/>/g,M=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Qt=/"/g,_e=/^(?:script|style|textarea|title)$/i,et=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Xt=new WeakMap,N=F.createTreeWalker(F,129,null,!1);function Se(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Kt!==void 0?Kt.createHTML(t):t}const Le=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=Q;for(let c=0;c<e;c++){const a=o[c];let d,u,h=-1,v=0;for(;v<a.length&&(r.lastIndex=v,u=r.exec(a),u!==null);)v=r.lastIndex,r===Q?u[1]==="!--"?r=Zt:u[1]!==void 0?r=Jt:u[2]!==void 0?(_e.test(u[2])&&(n=RegExp("</"+u[2],"g")),r=M):u[3]!==void 0&&(r=M):r===M?u[0]===">"?(r=n??Q,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?M:u[3]==='"'?Qt:Yt):r===Qt||r===Yt?r=M:r===Zt||r===Jt?r=Q:(r=M,n=void 0);const f=r===M&&o[c+1].startsWith("/>")?" ":"";s+=r===Q?a+ke:h>=0?(i.push(d),a.slice(0,h)+Nt+a.slice(h)+P+f):a+P+(h===-2?(i.push(void 0),c):f)}return[Se(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Bt=class Ce{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[d,u]=Le(t,e);if(this.el=Ce.createElement(d,i),N.currentNode=this.el.content,e===2){const h=this.el.content,v=h.firstChild;v.remove(),h.append(...v.childNodes)}for(;(n=N.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const v of n.getAttributeNames())if(v.endsWith(Nt)||v.startsWith(P)){const f=u[r++];if(h.push(v),f!==void 0){const $t=n.getAttribute(f.toLowerCase()+Nt).split(P),I=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:I[2],strings:$t,ctor:I[1]==="."?Ge:I[1]==="?"?Ve:I[1]==="@"?je:yt})}else a.push({type:6,index:s})}for(const v of h)n.removeAttribute(v)}if(_e.test(n.tagName)){const h=n.textContent.split(P),v=h.length-1;if(v>0){n.textContent=G?G.emptyScript:"";for(let f=0;f<v;f++)n.append(h[f],ht()),N.nextNode(),a.push({type:2,index:++s});n.append(h[v],ht())}}}else if(n.nodeType===8)if(n.data===be)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(P,h+1))!==-1;)a.push({type:7,index:s}),h+=P.length-1}s++}}static createElement(t,e){const i=F.createElement("template");return i.innerHTML=t,i}};function z(o,t,e=o,i){var n,s,r,c;if(t===et)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=tt(t)?void 0:t._$litDirective$;return a?.constructor!==d&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=z(o,a._$AS(o,t.values),a,i)),t}let qe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:F).importNode(i,!0);N.currentNode=s;let r=N.nextNode(),c=0,a=0,d=n[0];for(;d!==void 0;){if(c===d.index){let u;d.type===2?u=new we(r,r.nextSibling,this,t):d.type===1?u=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(u=new We(r,this,t)),this._$AV.push(u),d=n[++a]}c!==d?.index&&(r=N.nextNode(),c++)}return N.currentNode=F,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},we=class Ee{constructor(t,e,i,n){var s;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),tt(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):He(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(F.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Bt.createElement(Se(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new qe(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Xt.get(t.strings);return e===void 0&&Xt.set(t.strings,e=new Bt(t)),e}T(t){Ae(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new Ee(this.k(ht()),this.k(ht()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},yt=class{constructor(t,e,i,n,s){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=z(this,t,e,0),r=!tt(t)||t!==this._$AH&&t!==et,r&&(this._$AH=t);else{const c=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=z(this,c[i+a],e,a),d===et&&(d=this._$AH[a]),r||(r=!tt(d)||d!==this._$AH[a]),d===A?t=A:t!==A&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!n&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ge=class extends yt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}};const ze=G?G.emptyScript:"";let Ve=class extends yt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,ze):this.element.removeAttribute(this.name)}},je=class extends yt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=z(this,t,e,0))!==null&&i!==void 0?i:A)===et)return;const n=this._$AH,s=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==A&&(n===A||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},We=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}};const te=ut.litHtmlPolyfillSupport;te?.(Bt,we),((_t=ut.litHtmlVersions)!==null&&_t!==void 0?_t:ut.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=window,Lt=dt.ShadowRoot&&(dt.ShadyCSS===void 0||dt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol(),ee=new WeakMap;let Ie=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Lt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ee.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ee.set(e,t))}return t}toString(){return this.cssText}};const Ke=o=>new Ie(typeof o=="string"?o:o+"",void 0,qt),y=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,s)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[s+1],o[0]);return new Ie(e,o,qt)},Ze=(o,t)=>{Lt?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=dt.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},ie=Lt?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ke(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const pt=window,ne=pt.trustedTypes,Je=ne?ne.emptyScript:"",oe=pt.reactiveElementPolyfillSupport,Rt={toAttribute(o,t){switch(t){case Boolean:o=o?Je:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},xe=(o,t)=>t!==o&&(t==t||o==o),wt={attribute:!0,type:String,converter:Rt,reflect:!1,hasChanged:xe},Ft="finalized";let L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=wt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||wt}static finalize(){if(this.hasOwnProperty(Ft))return!1;this[Ft]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(ie(n))}else t!==void 0&&e.push(ie(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ze(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=wt){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const r=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Rt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=n.getPropertyOptions(s),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Rt;this._$El=s,this[s]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||xe)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};L[Ft]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},oe?.({ReactiveElement:L}),((Ct=pt.reactiveElementVersions)!==null&&Ct!==void 0?Ct:pt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;const mt=window,V=mt.trustedTypes,se=V?V.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ut="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Pe="?"+T,Ye=`<${Pe}>`,U=document,it=()=>U.createComment(""),nt=o=>o===null||typeof o!="object"&&typeof o!="function",Te=Array.isArray,Qe=o=>Te(o)||typeof o?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,ae=/>/g,D=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,de=/"/g,Me=/^(?:script|style|textarea|title)$/i,Xe=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),m=Xe(1),j=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),ce=new WeakMap,B=U.createTreeWalker(U,129,null,!1);function De(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(t):t}const ti=(o,t)=>{const e=o.length-1,i=[];let n,s=t===2?"<svg>":"",r=X;for(let c=0;c<e;c++){const a=o[c];let d,u,h=-1,v=0;for(;v<a.length&&(r.lastIndex=v,u=r.exec(a),u!==null);)v=r.lastIndex,r===X?u[1]==="!--"?r=re:u[1]!==void 0?r=ae:u[2]!==void 0?(Me.test(u[2])&&(n=RegExp("</"+u[2],"g")),r=D):u[3]!==void 0&&(r=D):r===D?u[0]===">"?(r=n??X,h=-1):u[1]===void 0?h=-2:(h=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?D:u[3]==='"'?de:le):r===de||r===le?r=D:r===re||r===ae?r=X:(r=D,n=void 0);const f=r===D&&o[c+1].startsWith("/>")?" ":"";s+=r===X?a+Ye:h>=0?(i.push(d),a.slice(0,h)+Ut+a.slice(h)+T+f):a+T+(h===-2?(i.push(void 0),c):f)}return[De(o,s+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class ot{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,r=0;const c=t.length-1,a=this.parts,[d,u]=ti(t,e);if(this.el=ot.createElement(d,i),B.currentNode=this.el.content,e===2){const h=this.el.content,v=h.firstChild;v.remove(),h.append(...v.childNodes)}for(;(n=B.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const v of n.getAttributeNames())if(v.endsWith(Ut)||v.startsWith(T)){const f=u[r++];if(h.push(v),f!==void 0){const $t=n.getAttribute(f.toLowerCase()+Ut).split(T),I=/([.?@])?(.*)/.exec(f);a.push({type:1,index:s,name:I[2],strings:$t,ctor:I[1]==="."?ii:I[1]==="?"?oi:I[1]==="@"?si:gt})}else a.push({type:6,index:s})}for(const v of h)n.removeAttribute(v)}if(Me.test(n.tagName)){const h=n.textContent.split(T),v=h.length-1;if(v>0){n.textContent=V?V.emptyScript:"";for(let f=0;f<v;f++)n.append(h[f],it()),B.nextNode(),a.push({type:2,index:++s});n.append(h[v],it())}}}else if(n.nodeType===8)if(n.data===Pe)a.push({type:2,index:s});else{let h=-1;for(;(h=n.data.indexOf(T,h+1))!==-1;)a.push({type:7,index:s}),h+=T.length-1}s++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function W(o,t,e=o,i){var n,s,r,c;if(t===j)return t;let a=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const d=nt(t)?void 0:t._$litDirective$;return a?.constructor!==d&&((s=a?._$AO)===null||s===void 0||s.call(a,!1),d===void 0?a=void 0:(a=new d(o),a._$AT(o,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=W(o,a._$AS(o,t.values),a,i)),t}class ei{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);B.currentNode=s;let r=B.nextNode(),c=0,a=0,d=n[0];for(;d!==void 0;){if(c===d.index){let u;d.type===2?u=new rt(r,r.nextSibling,this,t):d.type===1?u=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(u=new ri(r,this,t)),this._$AV.push(u),d=n[++a]}c!==d?.index&&(r=B.nextNode(),c++)}return B.currentNode=U,s}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class rt{constructor(t,e,i,n){var s;this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),nt(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==j&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qe(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&nt(this._$AH)?this._$AA.nextSibling.data=t:this.$(U.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ot.createElement(De(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(i);else{const r=new ei(s,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=ce.get(t.strings);return e===void 0&&ce.set(t.strings,e=new ot(t)),e}T(t){Te(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new rt(this.k(it()),this.k(it()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class gt{constructor(t,e,i,n,s){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let r=!1;if(s===void 0)t=W(this,t,e,0),r=!nt(t)||t!==this._$AH&&t!==j,r&&(this._$AH=t);else{const c=t;let a,d;for(t=s[0],a=0;a<s.length-1;a++)d=W(this,c[i+a],e,a),d===j&&(d=this._$AH[a]),r||(r=!nt(d)||d!==this._$AH[a]),d===g?t=g:t!==g&&(t+=(d??"")+s[a+1]),this._$AH[a]=d}r&&!n&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ii extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}const ni=V?V.emptyScript:"";class oi extends gt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==g?this.element.setAttribute(this.name,ni):this.element.removeAttribute(this.name)}}class si extends gt{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=W(this,t,e,0))!==null&&i!==void 0?i:g)===j)return;const n=this._$AH,s=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==g&&(n===g||s);s&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ri{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const ue=mt.litHtmlPolyfillSupport;ue?.(ot,rt),((Et=mt.litHtmlVersions)!==null&&Et!==void 0?Et:mt.litHtmlVersions=[]).push("2.8.0");const ai=(o,t,e)=>{var i,n;const s=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=s._$litPart$;if(r===void 0){const c=(n=e?.renderBefore)!==null&&n!==void 0?n:null;s._$litPart$=r=new rt(t.insertBefore(it(),c),c,void 0,e??{})}return r._$AI(o),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt,Pt;class _ extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ai(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return j}}_.finalized=!0,_._$litElement$=!0,(xt=globalThis.litElementHydrateSupport)===null||xt===void 0||xt.call(globalThis,{LitElement:_});const he=globalThis.litElementPolyfillSupport;he?.({LitElement:_});((Pt=globalThis.litElementVersions)!==null&&Pt!==void 0?Pt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(r){customElements.define(e,r)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},di=(o,t,e)=>{t.constructor.createProperty(e,o)};function p(o){return(t,e)=>e!==void 0?di(o,t,e):li(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ci=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const s=(n=e.originalKey)!==null&&n!==void 0?n:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return o!=null&&(r.finisher=function(c){o(c,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(s,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(o,t){return ci({descriptor:e=>{const i={get(){var n,s;return(s=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var s,r;return this[n]===void 0&&(this[n]=(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(o))!==null&&r!==void 0?r:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tt;((Tt=window.HTMLSlotElement)===null||Tt===void 0?void 0:Tt.prototype.assignedElements)!=null;const ui=m`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class hi extends _{static get styles(){return y`
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
    `}render(){return ui}}customElements.define("ia-icon-donate",hi);const pi="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let vt=class extends _{constructor(){super(...arguments),this.patronName=""}createRenderRoot(){return this}render(){return m`
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

        <a href=${"https://archive.org/donate/?amt=5&contrib_type=monthly&origin=iawww-usrsttng"} target="_blank" class="link join-mgc"
          >Click here to join the Monthly Giving Circle</a
        >
        <p>
          Already a monthly donor but don't see your donation details here?
          <a class="link" href=${pi}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};vt.styles=y`
    section {
      margin: 1rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
  `;l([p({type:String})],vt.prototype,"patronName",void 0);vt=l([C("iaux-mgc-welcome")],vt);let K=class extends _{constructor(){super(...arguments),this.baseHost="archive.org",this.giverId="",this.activePlans=[],this.planIdToDisplay=""}createRenderRoot(){return this}render(){return this.activePlans.length?m`
      <section class="monthly-giving-circle">
        <ul>
          ${this.activePlans.map(t=>{var e,i,n,s,r;const c=(e=t.payment.paymentMethodType)!==null&&e!==void 0?e:"Method not found",a=(i=t.payment.cardType)!==null&&i!==void 0?i:"Card type not found",d=t.payment.last4?`...${t.payment.last4}`:"CC number not found",u=(n=t.payment.nextBillingDate)!==null&&n!==void 0?n:"";return console.log(" ******** "),console.log("plan: ",t),m`
              <li>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${t.currencyType} ${t.amount}/month</p>
                    ${t.isTest?m`<p>(Test payment)</p>`:g}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${c}</p>
                    ${t.payment.cardType==="creditCard"?m`<p>${a}</p>
                          <p>${d}</p>`:g}
                    ${t.payment.paymentMethodType==="Paypal"?m`<p>
                          Paypal email:
                          <a href=${`mailto:${t.payment.paypalEmail}`}
                            >${t.payment.paypalEmail}</a
                          >
                        </p>`:g}
                    ${t.payment.paymentMethodType==="Venmo"?m`<p>
                          Venmo username:
                          <a href=${`mailto:${t.payment.venmoUsername}`}
                            >${t.payment.paypalEmail}</a
                          >
                        </p>`:g}
                    <p>
                      Expires:
                      ${(s=t.payment.expirationMonth)!==null&&s!==void 0?s:"month not found"}/${(r=t.payment.expirationYear)!==null&&r!==void 0?r:"year not found"}
                    </p>
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>
                      ${u?this.formatTime(u):"not found"}
                    </p>
                  </div>
                </div>
                <button
                  class="ia-button link edit-donation"
                  @click=${()=>this.manageDonation(t)}
                >
                  Manage this monthly donation
                </button>
              </li>
            `})}
        </ul>
      </section>
    `:m`<p>No active plans found</p>`}formatTime(t){return t?new Date(t.date).toLocaleDateString("default",{month:"long",day:"numeric",year:"numeric"}):""}manageDonation(t){const e=t.id;this.planIdToDisplay=e,this.dispatchEvent(new CustomEvent("displaySubscriptionDetails",{detail:{plan:t},bubbles:!0,composed:!0})),console.log("Manage donation: ",t)}};l([p({type:String})],K.prototype,"baseHost",void 0);l([p({type:String})],K.prototype,"giverId",void 0);l([p({type:Array})],K.prototype,"activePlans",void 0);l([p({type:String,reflect:!0})],K.prototype,"planIdToDisplay",void 0);K=l([C("iaux-mgc-subscription-summary")],K);var Ot;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(Ot||(Ot={}));let st=class extends _{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=Ot.ShowBadge}render(){return m`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?m` <div class="title">${this.headline}</div> `:""}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){const t=y`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=y`var(--formSectionBadgeMargin, 1rem)`,i=y`var(--formSectionBadgeBackgroundColor, #333)`,n=y`var(--formSectionBadgeRadius, 1.2rem)`,s=y`calc(${n} * 2)`,r=y`var(--formSectionBadgeFontSize, 1.8rem)`,c=y`var(--formSectionBadgeFontWeight, bold)`,a=y`var(--formSectionBadgeFontColor, #fff)`,d=y`var(--formSectionTitleFontSize, 1.8rem)`,u=y`var(--formSectionTitleFontWeight, bold)`,h=y`var(--formSectionContentBackgroundColor, transparent)`,v=y`var(--formSectionTextColor, #333)`,f=y`calc(${n} * 2)`;return y`
      :host {
        display: block;
        background-color: ${h};
        color: ${v};
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
        line-height: ${f};
        margin-bottom: 0.5rem;
        font-size: ${d};
        font-weight: ${u};
      }
    `}};l([p({type:String})],st.prototype,"sectionBadge",void 0);l([p({type:String})],st.prototype,"headline",void 0);l([p({type:String})],st.prototype,"badgeMode",void 0);st=l([C("donation-form-section")],st);class mi{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class vi{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class yi{constructor(t){this.customer=t.customer,this.billing=t.billing}}var pe;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(pe||(pe={}));class x{constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return x.calculateFeeAmount(this.amount)}get total(){return x.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.022+.3;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}}var q;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(q||(q={}));new x({donationType:q.OneTime,amount:10,coverFees:!1});let O=class extends _{constructor(){super(...arguments),this.currentlyEditing=!1,this.coverFees=!1}createRenderRoot(){return this}updated(t){t.has("plan")&&this.plan&&this.updatePlanInfo(),t.has("coverFees")&&this.updatePlanInfo(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.updatePlanInfo()}updatePlanInfo(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new x({donationType:q.Monthly,amount:0,coverFees:this.coverFees});return}let e;if(t)e=new x({donationType:q.Monthly,amount:t,coverFees:this.coverFees});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;console.log("AMOUNT --- ",i),e=new x({donationType:q.Monthly,amount:i,coverFees:this.coverFees})}this.donationPaymentInfo=e}render(){var t;return console.log("plan -- ",this.plan,this.donationPaymentInfo),m`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?g:m`<p>USD $${(t=this.plan)===null||t===void 0?void 0:t.amount}</p>
                <button
                  class="ia-button link"
                  @click=${()=>{this.currentlyEditing=!0}}
                >
                  Edit...
                </button>`}
          ${this.currentlyEditing?this.editAmountForm:g}
        </donation-form-section>
      </section>
    `}totalAmountWithFees(){const{amount:t}=this.donationPaymentInfo;return x.calculateTotal(t,this.coverFees)}get coveredFeesText(){var t,e;const i=this.querySelector("input#amount"),n=!(!((t=this.donationPaymentInfo)===null||t===void 0)&&t.feeAmountCovered);return!i||n?"I'll generously cover fees":`I'll generously add $${(e=this.donationPaymentInfo)===null||e===void 0?void 0:e.feeAmountCovered} to cover fees.`}closeForm(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.donationPaymentInfo=void 0,this.currentlyEditing=!1,this.coverFees=!1}get editAmountForm(){var t,e,i;return console.log("plan -- ",this.plan),m`
      <section>
        <form id="edit-plan-amount">
          <p>Current donation amount: $${(t=this.plan)===null||t===void 0?void 0:t.amount}</p>
          ${!((e=this.plan)===null||e===void 0)&&e.summary.oldAmount?m`<p>
                Previous donation amount: $${(i=this.plan)===null||i===void 0?void 0:i.summary.oldAmount}
              </p>`:g}
          <div>
            $
            <input
              required
              type="number"
              min="1"
              max="9999"
              id="amount"
              name="amount"
              placeholder="Enter new amount"
              @input=${n=>{const s=n.target,r=s?.value,c=Number(r);console.log("new val",c),this.updatePlanInfo(c)}}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container" style="display: flex;">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${n=>{console.log("checkbox",n);const r=n.target.checked;this.coverFees=r}}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>Total: USD $${this.totalAmountWithFees()}</p>
            <button
              class="ia-button secondary"
              @click=${n=>{n.preventDefault(),this.closeForm()}}
            >
              Cancel
            </button>
            <button
              class="ia-button primary"
              type="submit"
              @click=${n=>{var s;n.preventDefault(),n.target.disabled=!0;const r=this.form.querySelector('input[name="amount"]'),c=r.value;if(!c){n.target.disabled=!1;return}console.log("<plan-amount> - update amount",{newValue:c,oldValue:r,display:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.amount}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,newAmount:Number(x.calculateTotal(Number(this.donationPaymentInfo.amount),this.coverFees))}}))}}
            >
              Update
            </button>
          </div>
        </form>
      </section>
    `}};l([p({type:Object})],O.prototype,"plan",void 0);l([p({type:Object})],O.prototype,"donationPaymentInfo",void 0);l([p({type:Boolean})],O.prototype,"currentlyEditing",void 0);l([p({type:Boolean})],O.prototype,"coverFees",void 0);l([b("form")],O.prototype,"form",void 0);O=l([C("iaux-mgc-edit-plan-amount")],O);let k=class extends _{constructor(){super(...arguments),this.baseHost="archive.org",this.giverId="",this.activePlans=[],this.planIdToDisplay=""}createRenderRoot(){return this}firstUpdated(){this.setupBraintreeManager()}paymentSelected(t){console.log("paymentSelected",t.detail)}paymentSelectorFirstUpdated(){console.log("paymentSelectorFirstUpdated")}render(){var t;return m`
      <section>
        <h3>Payment method</h3>
        <p>this payment method</p>
        <p>Expires: when</p>

        <payment-selector
          .paymentProviders=${(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders}
          @firstUpdated=${this.paymentSelectorFirstUpdated}
          @creditCardSelected=${this.paymentSelected}
          @venmoSelected=${this.paymentSelected}
          @applePaySelected=${this.paymentSelected}
          @googlePaySelected=${this.paymentSelected}
          @paypalBlockerSelected=${this.paymentSelected}
          @resetPaymentMethod=${async()=>{debugger}}
          tabindex="0"
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
          <slot></slot>
        </payment-selector>
        <contact-form></contact-form>
        <form>
          <button>Cancel</button>
          <button>Update</button>
        </form>
      </section>
    `}setupBraintreeManager(){}};l([p({type:String})],k.prototype,"baseHost",void 0);l([p({type:String})],k.prototype,"giverId",void 0);l([p({type:Array})],k.prototype,"activePlans",void 0);l([p({type:String})],k.prototype,"planIdToDisplay",void 0);l([p({type:Object})],k.prototype,"braintreeManager",void 0);k=l([C("iaux-mgc-edit-plan-payment-method")],k);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=o=>o??A;var R;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(R||(R={}));let H=class extends _{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=R.LeaveSpace,this.requiredIndicatorSpaceOption=R.LeaveSpace}render(){return m`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?m` * `:g}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===R.CompressSpace?"compress-space":""}static get styles(){const t=y`var(--inputBorder, 1px solid #d9d9d9)`,e=y`var(--badgedInputBorderErrorColor, red)`,i=y`var(--badgedInputIconSize, 1.4rem)`,n=y`var(--badgedInputIconSpacerWidth, 3rem)`,s=y`var(--badgedInputNoIconSpacerWidth, 1rem)`,r=y`var(--badgedInputHeight, 3rem)`,c=y`var(--badgedInputRequiredIndicatorColor, red)`,a=y`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,d=y`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return y`
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
        color: ${c};
        font-size: ${d};
        margin: ${a};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};l([p({type:Boolean})],H.prototype,"error",void 0);l([p({type:Object})],H.prototype,"icon",void 0);l([p({type:Boolean})],H.prototype,"required",void 0);l([p({type:String})],H.prototype,"iconSpaceOption",void 0);l([p({type:String})],H.prototype,"requiredIndicatorSpaceOption",void 0);H=l([C("badged-input")],H);const gi=m`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`,fi=m`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`,$i=m`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,ve={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let $=class extends _{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,n])=>{const s=i.checkValidity();e=e&&s,s||(n.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return m`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:gi})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:$i})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:fi,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:R.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return m`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,n,s,r,c,a,d,u,h;const v=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:v,this.selectedCountry==="US"?((n=this.postalBadgedInput)===null||n===void 0||n.setAttribute("required",""),(s=this.postalCodeField)===null||s===void 0||s.setAttribute("required",""),(r=this.regionBadgedInput)===null||r===void 0||r.setAttribute("required",""),(c=this.regionField)===null||c===void 0||c.setAttribute("required","")):((a=this.postalBadgedInput)===null||a===void 0||a.removeAttribute("required"),(d=this.postalCodeField)===null||d===void 0||d.removeAttribute("required"),(u=this.regionBadgedInput)===null||u===void 0||u.removeAttribute("required"),(h=this.regionField)===null||h===void 0||h.removeAttribute("required"))}}
        >
          ${Object.keys(ve).map(t=>{const e=ve[t];return m`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n,s;const r=(e=t.required)!==null&&e!==void 0?e:!0,c=(i=t.fieldType)!==null&&i!==void 0?i:"text",a=(n=t.iconSpaceOption)!==null&&n!==void 0?n:R.LeaveSpace;return m`
      <badged-input
        class=${t.id}
        .icon=${t.icon}
        .iconSpaceOption=${a}
        ?required=${t.required}
      >
        <label for=${t.id}>${t.placeholder}</label>
        <input
          type=${c}
          id=${t.id}
          class="donation-contact-form-input"
          name=${t.name}
          aria-label=${t.placeholder}
          placeholder=${t.placeholder}
          maxlength=${me(t.maxlength)}
          autocomplete=${(s=t.autocomplete)!==null&&s!==void 0?s:"on"}
          pattern=${me(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${r}
        />
      </badged-input>
    `}get donorContactInfo(){return new yi({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new mi({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new vi({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=y`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=y`var(--badgedInputIconSpacerWidth, 5rem)`,i=y`var(--fieldSetSpacing, 1rem)`,n=y`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,s=y`var(--contactFieldFontSize, 1.6rem)`,r=y`var(--inputFieldFontColor, #333)`,c=y`calc(100% - ${e})`,a=y`calc(100% - ${t})`;return m`
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
          width: ${c};
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
          width: ${c};
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
    `}};l([b("badged-input.donation-contact-form-email")],$.prototype,"emailBadgedInput",void 0);l([b("#donation-contact-form-email")],$.prototype,"emailField",void 0);l([b("badged-input.donation-contact-form-first-name")],$.prototype,"firstNameBadgedInput",void 0);l([b("#donation-contact-form-first-name")],$.prototype,"firstNameField",void 0);l([b("badged-input.donation-contact-form-last-name")],$.prototype,"lastNameBadgedInput",void 0);l([b("#donation-contact-form-last-name")],$.prototype,"lastNameField",void 0);l([b("badged-input.donation-contact-form-postal-code")],$.prototype,"postalBadgedInput",void 0);l([b("#donation-contact-form-postal-code")],$.prototype,"postalCodeField",void 0);l([b("badged-input.donation-contact-form-street-address")],$.prototype,"streetAddressBadgedInput",void 0);l([b("#donation-contact-form-street-address")],$.prototype,"streetAddressField",void 0);l([b("badged-input.donation-contact-form-extended-address")],$.prototype,"extendedAddressBadgedInput",void 0);l([b("#donation-contact-form-extended-address")],$.prototype,"extendedAddressField",void 0);l([b("badged-input.donation-contact-form-locality")],$.prototype,"localityBadgedInput",void 0);l([b("#donation-contact-form-locality")],$.prototype,"localityField",void 0);l([b("badged-input.donation-contact-form-region")],$.prototype,"regionBadgedInput",void 0);l([b("#donation-contact-form-region")],$.prototype,"regionField",void 0);l([b("#donation-contact-form-countryCodeAlpha2")],$.prototype,"countryCodeAlpha2Field",void 0);l([b("#donation-contact-form-error-message")],$.prototype,"errorMessage",void 0);l([b("form")],$.prototype,"form",void 0);l([p({type:String})],$.prototype,"selectedCountry",void 0);l([p({type:String})],$.prototype,"donorEmail",void 0);$=l([C("contact-form")],$);let Z=class extends _{constructor(){super(...arguments),this.displayDate="",this.currentlyEditing=!1}createRenderRoot(){return this}get dateFormatted(){return""}get maxDate(){return""}get minDate(){return""}get nextBillingDate(){var t,e;return!((t=this.plan)===null||t===void 0)&&t.payment.nextBillingDate.date?new Date((e=this.plan)===null||e===void 0?void 0:e.payment.nextBillingDate.date).toLocaleDateString():"not found"}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus()}render(){return m`
      <section>
        <h3>Donation date - Next billing date: ${this.nextBillingDate}</h3>
        ${this.currentlyEditing?g:m`<p>${this.nextBillingDate}</p>
              <button
                class="link ia-button"
                @click=${()=>{this.currentlyEditing=!0}}
              >
                Edit...
              </button>`}
        ${this.currentlyEditing?this.editDateForm:g}
      </section>
    `}get editDateForm(){var t,e;return m`
      <section>
        ${!((t=this.plan)===null||t===void 0)&&t.summary.oldDate?m`<p>Previous date: ${(e=this.plan)===null||e===void 0?void 0:e.summary.oldDate}</p>`:g}
        <form id="edit-donation-date">
          <p>${this.displayDate}</p>
          <input
            required
            type="date"
            id="date"
            name="new-date"
            .value=${this.dateFormatted}
            min=${this.minDate}
            max=${this.maxDate}
          />
          <div>
            <button
              class="ia-button secondary"
              type="button"
              @click=${i=>{i.preventDefault();const s=this.form.querySelector('input[name="new-date"]').value;console.log("cancel date",{newDateValue:s,displayDate:this.displayDate})}}
            >
              Cancel
            </button>
            <button
              class="ia-button primary"
              type="submit"
              @click=${i=>{i.preventDefault();const s=this.form.querySelector('input[name="new-date"]').value;s&&(this.dispatchEvent(new CustomEvent("updateDate",{detail:{newDateValue:s,plan:this.plan}})),console.log("update date",{newDateValue:s,displayDate:this.displayDate}))}}
            >
              Update
            </button>
          </div>
        </form>
      </section>
    `}};l([p({type:String})],Z.prototype,"displayDate",void 0);l([p({type:Object})],Z.prototype,"plan",void 0);l([p({type:Boolean})],Z.prototype,"currentlyEditing",void 0);l([b("form#edit-donation-date")],Z.prototype,"form",void 0);Z=l([C("iaux-mgc-edit-donation-date")],Z);let J=class extends _{constructor(){super(...arguments),this.requestToCancel=!1,this.initialCancelRequest=!1}createRenderRoot(){return this}updated(t){var e,i;t.has("plan")&&console.log("plan updated",this.plan),t.has("requestToCancel")&&this.requestToCancel&&((i=(e=this.form)===null||e===void 0?void 0:e.querySelector("button"))===null||i===void 0||i.removeAttribute("disabled"))}async cancelPlan(t){var e;t.preventDefault(),this.requestToCancel=!0;const i=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`button#${`submit-${this.formId}`}`);i?.setAttribute("disabled","true"),console.log("canceling subscription",{plan:this.plan}),this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:this.plan}}))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){var t,e;return m`
      <donation-form-section
        badgemode="hidebadge"
        headline="Cancel recurring donation (requires confirmation)"
      >
        <div class="warning">
          ${!((t=this.plan)===null||t===void 0)&&t.summary.isCancelled?m`<p>
                Previous donation amount: $${(e=this.plan)===null||e===void 0?void 0:e.summary.oldAmount}
              </p>`:g}
          <p>
            You can also pause your recurring donation by setting the next
            donation date up to 12 months in the future.
          </p>
          <button
            class="ia-button"
            @click=${()=>{if(this.initialCancelRequest){this.initialCancelRequest=!1,this.requestToCancel=!1;return}this.initialCancelRequest=!0,this.requestToCancel=!1}}
          >
            Let's cancel my donation
          </button>
        </div>
      </donation-form-section>
      <hr />
      ${this.initialCancelRequest?this.confirmCancelation:g}
    `}get confirmCancelation(){return m`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <button class="x"  @click=${()=>{this.initialCancelRequest=!1,this.requestToCancel=!1}}>X</button>

      <p>Canceling ends your monthly recurring donation to the Internet Archive, effective immediately. You will not be charged moving forward.</p>
      <p>Canceling does not affect your account or access to the Internet Archive, although you will no longer have access to any of the Monthly Giving Circle perks.</p>
      <p>If you have any questions regarding donations, contact us at <a href="mailto:donations@archive.org">donations@archive.org</a></p>

      <form id=${this.formId} @submit=${t=>this.cancelPlan(t)}>
        <div class="checkbox-option-container">
          <input id=${`confirm-${this.formId}`} type="checkbox" required @change=${t=>{var e,i,n,s;this.requestToCancel=t.target.checked,this.requestToCancel?(i=(e=this.form)===null||e===void 0?void 0:e.querySelector("button"))===null||i===void 0||i.removeAttribute("disabled"):(s=(n=this.form)===null||n===void 0?void 0:n.querySelector("button"))===null||s===void 0||s.setAttribute("disabled","true")}}>
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my subscription</b></label>
        </div>

        <button class="ia-button" disabled="true" id=${`submit-${this.formId}`} type="submit">I'm sure I want to cancel my recurring donation.</button>
      </form>
    </section>
    `}};l([p({type:Object})],J.prototype,"plan",void 0);l([p({type:Boolean,reflect:!0})],J.prototype,"requestToCancel",void 0);l([p({type:Boolean,reflect:!0})],J.prototype,"initialCancelRequest",void 0);l([b("form")],J.prototype,"form",void 0);J=l([C("iaux-mgc-cancel-plan")],J);let S=class extends _{constructor(){super(...arguments),this.planId="",this.baseHost="archive.org",this.amount="",this.paymentMethod="",this.planDate="",this.newAmount="",this.newPaymentMethod="",this.newPlanDate="",this.openForms=[]}createRenderRoot(){return this}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}get currencySymbol(){var t;return((t=this.plan)===null||t===void 0?void 0:t.currencyType)==="USD"?"$":""}get displayAmount(){var t,e;return`${(t=this.plan)===null||t===void 0?void 0:t.currencyType}${this.currencySymbol}${(e=this.plan)===null||e===void 0?void 0:e.amount}`}clearForm(t){if(t&&t==="amount"){const e=this.querySelector("iaux-mgc-edit-plan-amount");e?.closeForm()}}render(){var t,e;return console.log("EDIT SUBSCRIPTION -- this.plan",this.plan),m`
      <section id="edit-subscription" planId=${(e=(t=this.plan)===null||t===void 0?void 0:t.id)!==null&&e!==void 0?e:g}>
        <iaux-mgc-edit-plan-amount
          .plan=${this.plan}
          @formOpened=${()=>{const i=this.openForms;i.includes("amount")||(this.openForms=[...i,"amount"])}}
          @updateAmount=${i=>{console.log("updateAmount",i.detail);const{originalPlanDetails:n}=i.detail,{newDonationInfo:s}=i.detail,{newAmount:r}=i.detail;this.dispatchEvent(new CustomEvent("editAmount",{detail:{originalPlanDetails:n,newDonationInfo:s,newAmount:r}}))}}
        >
        </iaux-mgc-edit-plan-amount>
        <iaux-mgc-edit-plan-payment-methodz
          .plan=${this.plan}
          @formOpened=${()=>{const i=this.openForms;i.includes("payment")||(this.openForms=[...i,"payment"])}}
          @editPaymentMethod=${i=>{alert("Payment method edited");const{newPaymentMethod:n}=i.detail,{plan:s}=i.detail;this.dispatchEvent(new CustomEvent("editPaymentMethod",{detail:{newPaymentMethod:n,plan:s}}))}}
        ></iaux-mgc-edit-plan-payment-methodz>
        <hr />
        <iaux-mgc-edit-donation-date
          .plan=${this.plan}
          @formOpened=${()=>{const i=this.openForms;i.includes("date")||(this.openForms=[...i,"date"])}}
          @editDate=${i=>{alert("Date edited");const{newDate:n}=i.detail,{plan:s}=i.detail;this.dispatchEvent(new CustomEvent("editDate",{detail:{newDate:n,plan:s}}))}}
        >
        </iaux-mgc-edit-donation-date>
        <hr />
        <iaux-mgc-cancel-plan
          .plan=${this.plan}
          @formOpened=${()=>{const i=this.openForms;i.includes("cancel")||(this.openForms=[...i,"canncel"])}}
          @cancelSubscription=${i=>{alert("Plan cancelled");const{plan:n}=i.detail;this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:n}}))}}
        ></iaux-mgc-cancel-plan>
      </section>
    `}};S.styles=y`
    section {
      margin: 1rem;
    }

    ul {
      list-style-type: disc;
      padding-left: 1rem;
    }
  `;l([p({type:Object})],S.prototype,"plan",void 0);l([p({type:String})],S.prototype,"planId",void 0);l([p({type:String})],S.prototype,"baseHost",void 0);l([p({type:String})],S.prototype,"amount",void 0);l([p({type:String})],S.prototype,"paymentMethod",void 0);l([p({type:String})],S.prototype,"planDate",void 0);l([p({type:String})],S.prototype,"newAmount",void 0);l([p({type:String})],S.prototype,"newPaymentMethod",void 0);l([p({type:String})],S.prototype,"newPlanDate",void 0);l([p({type:Array})],S.prototype,"openForms",void 0);S=l([C("iaux-mgc-edit-subscription")],S);class Ne{constructor(t){this.summary=t,this.payment=t.btdata,this.currencyType="USD"}get id(){return this.summary.token}get amount(){return this.summary.amount}get startDate(){return this.summary.start_date}get isTest(){return this.summary.is_test}}let kt=class extends _{constructor(){super(...arguments),this.donations=[]}createRenderRoot(){return this}donationAmountFormatted(t){return`USD ${t}`}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}render(){return m`
      <h3>
        Recent donations
        <button
          class="ia-button primary"
          @click=${()=>this.dispatchEvent(new CustomEvent("close"))}
        >
          Back to account settings
        </button>
      </h3>
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
                    <td>${t.date}</td>
                    <td>${this.donationAmountFormatted(t.amount)}</td>
                    <td class="status">${t.status}</td>
                    <td>
                      <button
                        class="ia-button link"
                        @click=${()=>{e||this.emailReceipt(t)}}
                        ?disabled=${e}
                      >
                        ${e?"Unavailable":"Email receipt"}
                      </button>
                    </td>
                  </tr>
                `}):m`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};l([p({type:Array})],kt.prototype,"donations",void 0);kt=l([C("iaux-mgc-recent-donations")],kt);let E=class extends _{constructor(){super(...arguments),this.seeRecentDonations=!1,this.giverId="",this.activePlans=[],this.recentDonations=[],this.planIdToDisplay="",this.subscriptionUpdatedMessages=[]}createRenderRoot(){return this}updated(t){var e;if(t.has("seeRecentDonations")&&this.seeRecentDonations&&!t.get("seeRecentDonations")&&this.dispatchEvent(new Event("viewChange-recentDonations")),t.has("activePlans")){debugger;this.activePlans.length&&!(!((e=t.get("planIdToDisplay"))===null||e===void 0)&&e.length)&&this.dispatchEvent(new Event("viewChange-summary"))}if(t.has("planIdToDisplay")){debugger;this.planIdToDisplay&&!t.get("planIdToDisplay")&&this.dispatchEvent(new Event("viewChange-edit"))}t.has("foo")&&this.dispatchEvent(new Event("viewChange-welcome"))}createSummary(t){return console.log("--- planUpdateComplete",t),new Ne(t)}subscriptionUpdated(t){const{updatedSection:e}=t,i=this.subscriptionUpdatedMessages;i.push(t),this.subscriptionUpdatedMessages=i,this.editSubEl.clearForm(e),console.log("subscriptionUpdated",t)}get certainPlan(){const t=this.activePlans.find(e=>e.id===this.planIdToDisplay);return console.log("certain plan --- ",this.planIdToDisplay,t),t}render(){if(this.seeRecentDonations)return m`
        <iaux-mgc-recent-donations
          .donations=${this.recentDonations}
          @close=${()=>{this.seeRecentDonations=!1}}
          @EmailReceiptRequest=${e=>{const{donation:i}=e.detail;console.log("EmailReceiptRequest",i),this.dispatchEvent(new CustomEvent("sendDonationReceipt",{detail:{donation:i}}))}}
        ></iaux-mgc-recent-donations>
      `;const t=this.activePlans.length?"with-plans":"without-plans";return m`
      <section class=${t}>
        <h2 class="mgc-title">
          <span class="heart-label">
            <span class="heart-icon">
              <svg
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
                aria-labelledby="donateTitleID donateDescID"
              >
                <path
                  class="fill-color"
                  d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"
                ></path>
              </svg>
            </span>
            <p style="margin: 5px 0 0;">Monthly Giving Circle</p>
          </span>
          ${this.planIdToDisplay?this.renderReturnToAccountSettingsButton:this.renderSeeRecentDonationsButton}
        </h2>
        <div class=${"subscription-updates"}>
          ${this.subscriptionUpdatedMessages.map(e=>m`
              <div
                class=${`subscription-update ${e.success?"success":"error"}`}
              >
                ${e.displayMessage}
              </div>
            `)}
        </div>
        ${this.renderBody()}
      </section>
    `}renderBody(){return this.planIdToDisplay?m`
        <iaux-mgc-edit-subscription
          .plan=${this.certainPlan}
          @closeEditSubscription=${()=>{this.planIdToDisplay=""}}
          @editAmount=${t=>{console.log("updateAmount mgc!",t.detail);const{plan:e}=t.detail,{newAmount:i}=t.detail;this.dispatchEvent(new CustomEvent("editAmount",{detail:{plan:e,newAmount:i}}))}}
          @editDate=${t=>{console.log("updateDate mgc!",t.detail);const{plan:e}=t.detail,{newDate:i}=t.detail;this.dispatchEvent(new CustomEvent("editDate",{detail:{plan:e,newDate:i}}))}}
          @cancelPlan=${t=>{console.log("cancelPlan mgc!",t.detail);const{plan:e}=t.detail;this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:e}}))}}
        ></iaux-mgc-edit-subscription>
      `:this.giverId&&this.activePlans.length?m`
        <iaux-mgc-subscription-summary
          .activePlans=${this.activePlans}
          .giverId=${this.giverId}
          .planIdToDisplay=${this.planIdToDisplay}
          @displaySubscriptionDetails=${t=>{console.log("displaySubscriptionDetails",t.detail),this.planToDisplay=t.detail.plan;debugger;this.planIdToDisplay=t.detail.plan.id,this.dispatchEvent(new Event("showEditView"))}}
        >
        </iaux-mgc-subscription-summary>
      `:m`<iaux-mgc-welcome
      .patronName=${this.giverId}
    ></iaux-mgc-welcome>`}get renderReturnToAccountSettingsButton(){return m` <button
      class="ia-button primary"
      @click=${()=>{this.seeRecentDonations=!1,this.planIdToDisplay="",this.planToDisplay=void 0,this.dispatchEvent(new Event("closeEditView"))}}
    >
      Back to account settings
    </button>`}get renderSeeRecentDonationsButton(){return this.recentDonations.length?m`
      <button
        class="ia-button link"
        @click=${()=>{this.seeRecentDonations=!0,this.recentDonations.length||(this.seeRecentDonations=!0,this.dispatchEvent(new Event("mgc-recent-donations-request"))),console.log("View recent donation history")}}
      >
        View recent donation history
      </button>
    `:g}};l([p({type:Boolean,reflect:!0})],E.prototype,"seeRecentDonations",void 0);l([p({type:String})],E.prototype,"giverId",void 0);l([p({type:Array})],E.prototype,"activePlans",void 0);l([p({type:Array})],E.prototype,"recentDonations",void 0);l([p({type:String,reflect:!0})],E.prototype,"planIdToDisplay",void 0);l([p({type:Object})],E.prototype,"planToDisplay",void 0);l([p({type:Array})],E.prototype,"subscriptionUpdatedMessages",void 0);l([b("iaux-mgc-edit-subscription")],E.prototype,"editSubEl",void 0);E=l([C("iaux-monthly-giving-circle")],E);let bi=()=>({events:{},emit(o,...t){(this.events[o]||[]).forEach(e=>e(...t))},on(o,t){return(this.events[o]=this.events[o]||[]).push(t),()=>this.events[o]=(this.events[o]||[]).filter(e=>e!==t)}});function Ai(o){return new Promise(t=>setTimeout(t,o))}var w;(function(o){o.retryNumber="retryNumber",o.owner="owner",o.dynamicImportLoaded="dynamicImportLoaded",o.hasBeenRetried="hasBeenRetried"})(w||(w={}));const ye="lazyLoaderService";class _i{constructor(t){var e,i,n;this.emitter=bi(),this.container=(e=t?.container)!==null&&e!==void 0?e:document.head,this.retryCount=(i=t?.retryCount)!==null&&i!==void 0?i:2,this.retryInterval=(n=t?.retryInterval)!==null&&n!==void 0?n:1}on(t,e){return this.emitter.on(t,e)}loadBundle(t){return at(this,void 0,void 0,function*(){let e,i;return t.module&&(e=this.loadScript({src:t.module,bundleType:"module"})),t.nomodule&&(i=this.loadScript({src:t.nomodule,bundleType:"nomodule"})),Promise.race([e,i])})}loadScript(t){return at(this,void 0,void 0,function*(){return this.doLoad(t)})}doLoad(t){var e;return at(this,void 0,void 0,function*(){const i=(e=t.retryNumber)!==null&&e!==void 0?e:0,n=`script[src='${t.src}'][async][${w.owner}='${ye}'][${w.retryNumber}='${i}']`;let s=this.container.querySelector(n);return s||(s=this.getScriptTag(Object.assign(Object.assign({},t),{retryNumber:i})),this.container.appendChild(s)),new Promise((r,c)=>{if(s.getAttribute(w.dynamicImportLoaded)){r();return}const a=t.scriptBeingRetried,d=s.onload||a?.onload;s.onload=h=>{d?.(h),s.setAttribute(w.dynamicImportLoaded,"true"),r()};const u=s.onerror||a?.onerror;s.onerror=h=>at(this,void 0,void 0,function*(){const v=s.getAttribute(w.hasBeenRetried);if(i<this.retryCount&&!v){s.setAttribute(w.hasBeenRetried,"true"),yield Ai(this.retryInterval*1e3);const f=i+1;this.emitter.emit("scriptLoadRetried",t.src,f),this.doLoad(Object.assign(Object.assign({},t),{retryNumber:f,scriptBeingRetried:s}))}else v||this.emitter.emit("scriptLoadFailed",t.src,h),u?.(h),c(h)})})})}getScriptTag(t){var e;const i=t.src.replace("'",'"'),n=document.createElement("script"),s=t.retryNumber;n.setAttribute(w.owner,ye),n.setAttribute("src",i),n.setAttribute(w.retryNumber,s.toString()),n.async=!0;const r=(e=t.attributes)!==null&&e!==void 0?e:{};switch(Object.keys(r).forEach(c=>{n.setAttribute(c,r[c])}),t.bundleType){case"module":n.setAttribute("type",t.bundleType);break;case"nomodule":n.setAttribute(t.bundleType,"");break}return n}}const Be=new _i;Be.on("scriptLoadRetried",async(o,t)=>{console.debug("scriptLoadRetried",o,t)});Be.on("scriptLoadFailed",async o=>{console.debug("scriptLoadFailed",o)});const ge=document.querySelector("iaux-monthly-giving-circle"),Si=document.querySelector("#load-summaries"),Ci=await fetch("./data.json"),ft=await Ci.json(),wi=ft.value;console.log(ft);window.data=ft;const Ei=Object.keys(ft.value),Gt=Ei.map(o=>{const t=wi[o],e=new Ne({...t,id:o});return console.log("Summary payment data",e.payment),e});console.log("Summaries!",Gt);window.summaries=Gt;Si.addEventListener("click",async()=>{ge.activePlans=Gt,ge.giverId="giver-123"});
