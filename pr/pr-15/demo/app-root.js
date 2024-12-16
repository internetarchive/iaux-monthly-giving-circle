(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function m(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var h=n.length-1;h>=0;h--)(r=n[h])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=window,xt=Z.ShadowRoot&&(Z.ShadyCSS===void 0||Z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Yt=Symbol(),Nt=new WeakMap;let ve=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(xt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Nt.set(e,t))}return t}toString(){return this.cssText}};const me=n=>new ve(typeof n=="string"?n:n+"",void 0,Yt),_e=(n,t)=>{xt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Ut=xt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return me(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const Q=window,Ht=Q.trustedTypes,ye=Ht?Ht.emptyScript:"",Rt=Q.reactiveElementPolyfillSupport,gt={toAttribute(n,t){switch(t){case Boolean:n=n?ye:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},te=(n,t)=>t!==n&&(t==t||n==n),ht={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:te},At="finalized";let O=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ht}static finalize(){if(this.hasOwnProperty(At))return!1;this[At]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Ut(s))}else t!==void 0&&e.push(Ut(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ht){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:gt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:gt;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||te)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};O[At]=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},Rt?.({ReactiveElement:O}),((at=Q.reactiveElementVersions)!==null&&at!==void 0?at:Q.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;const X=window,N=X.trustedTypes,Tt=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,bt="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,ee="?"+A,fe=`<${ee}>`,x=document,Y=()=>x.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",ie=Array.isArray,ge=n=>ie(n)||typeof n?.[Symbol.iterator]=="function",dt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Ot=/>/g,E=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Lt=/"/g,se=/^(?:script|style|textarea|title)$/i,z=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),It=new WeakMap,w=x.createTreeWalker(x,129,null,!1);function ne(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tt!==void 0?Tt.createHTML(t):t}const Ae=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=D;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===D?c[1]==="!--"?r=kt:c[1]!==void 0?r=Ot:c[2]!==void 0?(se.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=E):c[3]!==void 0&&(r=E):r===E?c[0]===">"?(r=s??D,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?E:c[3]==='"'?Lt:Dt):r===Lt||r===Dt?r=E:r===kt||r===Ot?r=D:(r=E,s=void 0);const p=r===E&&n[h+1].startsWith("/>")?" ":"";o+=r===D?l+fe:d>=0?(i.push(a),l.slice(0,d)+bt+l.slice(d)+A+p):l+A+(d===-2?(i.push(void 0),h):p)}return[ne(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let Et=class oe{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Ae(t,e);if(this.el=oe.createElement(a,i),w.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=w.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(bt)||u.startsWith(A)){const p=c[r++];if(d.push(u),p!==void 0){const lt=s.getAttribute(p.toLowerCase()+bt).split(A),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:lt,ctor:f[1]==="."?Ee:f[1]==="?"?we:f[1]==="@"?Ce:ot})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(se.test(s.tagName)){const d=s.textContent.split(A),u=d.length-1;if(u>0){s.textContent=N?N.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],Y()),w.nextNode(),l.push({type:2,index:++o});s.append(d[u],Y())}}}else if(s.nodeType===8)if(s.data===ee)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:o}),d+=A.length-1}o++}}static createElement(t,e){const i=x.createElement("template");return i.innerHTML=t,i}};function U(n,t,e=n,i){var s,o,r,h;if(t===z)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=j(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=U(n,l._$AS(n,t.values),l,i)),t}let be=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:x).importNode(i,!0);w.currentNode=o;let r=w.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new re(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new xe(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=w.nextNode(),h++)}return w.currentNode=x,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},re=class le{constructor(t,e,i,s){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),j(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ge(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(x.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Et.createElement(ne(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new be(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new Et(t)),e}T(t){ie(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new le(this.k(Y()),this.k(Y()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ot=class{constructor(t,e,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=U(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==z,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=U(this,h[i+l],e,l),a===z&&(a=this._$AH[l]),r||(r=!j(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Ee=class extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}};const Se=N?N.emptyScript:"";let we=class extends ot{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,Se):this.element.removeAttribute(this.name)}},Ce=class extends ot{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=U(this,t,e,0))!==null&&i!==void 0?i:v)===z)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},xe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}};const jt=X.litHtmlPolyfillSupport;jt?.(Et,re),((ct=X.litHtmlVersions)!==null&&ct!==void 0?ct:X.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=window,Pt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mt=Symbol(),zt=new WeakMap;let ae=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Mt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&zt.set(e,t))}return t}toString(){return this.cssText}};const Pe=n=>new ae(typeof n=="string"?n:n+"",void 0,Mt),q=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new ae(e,n,Mt)},Me=(n,t)=>{Pt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=K.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Bt=Pt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pe(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const tt=window,Vt=tt.trustedTypes,Ne=Vt?Vt.emptyScript:"",Wt=tt.reactiveElementPolyfillSupport,St={toAttribute(n,t){switch(t){case Boolean:n=n?Ne:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},he=(n,t)=>t!==n&&(t==t||n==n),pt={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:he},wt="finalized";let M=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pt}static finalize(){if(this.hasOwnProperty(wt))return!1;this[wt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Bt(s))}else t!==void 0&&e.push(Bt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=pt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:St).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:St;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||he)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};M[wt]=!0,M.elementProperties=new Map,M.elementStyles=[],M.shadowRootOptions={mode:"open"},Wt?.({ReactiveElement:M}),((ut=tt.reactiveElementVersions)!==null&&ut!==void 0?ut:tt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const et=window,H=et.trustedTypes,Gt=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ct="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+b,Ue=`<${ce}>`,P=document,B=()=>P.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",de=Array.isArray,He=n=>de(n)||typeof n?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qt=/-->/g,Jt=/>/g,S=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Zt=/"/g,ue=/^(?:script|style|textarea|title)$/i,Re=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_=Re(1),R=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Kt=new WeakMap,C=P.createTreeWalker(P,129,null,!1);function pe(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gt!==void 0?Gt.createHTML(t):t}const Te=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=L;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===L?c[1]==="!--"?r=qt:c[1]!==void 0?r=Jt:c[2]!==void 0?(ue.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=S):c[3]!==void 0&&(r=S):r===S?c[0]===">"?(r=s??L,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?S:c[3]==='"'?Zt:Ft):r===Zt||r===Ft?r=S:r===qt||r===Jt?r=L:(r=S,s=void 0);const p=r===S&&n[h+1].startsWith("/>")?" ":"";o+=r===L?l+Ue:d>=0?(i.push(a),l.slice(0,d)+Ct+l.slice(d)+b+p):l+b+(d===-2?(i.push(void 0),h):p)}return[pe(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class W{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Te(t,e);if(this.el=W.createElement(a,i),C.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=C.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(Ct)||u.startsWith(b)){const p=c[r++];if(d.push(u),p!==void 0){const lt=s.getAttribute(p.toLowerCase()+Ct).split(b),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:lt,ctor:f[1]==="."?Oe:f[1]==="?"?Le:f[1]==="@"?Ie:rt})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(ue.test(s.tagName)){const d=s.textContent.split(b),u=d.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],B()),C.nextNode(),l.push({type:2,index:++o});s.append(d[u],B())}}}else if(s.nodeType===8)if(s.data===ce)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(b,d+1))!==-1;)l.push({type:7,index:o}),d+=b.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function T(n,t,e=n,i){var s,o,r,h;if(t===R)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=V(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=T(n,l._$AS(n,t.values),l,i)),t}class ke{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:P).importNode(i,!0);C.currentNode=o;let r=C.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new J(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new je(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=C.nextNode(),h++)}return C.currentNode=P,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),V(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):He(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(pe(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new ke(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new W(t)),e}T(t){de(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.k(B()),this.k(B()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class rt{constructor(t,e,i,s,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=T(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=T(this,h[i+l],e,l),a===R&&(a=this._$AH[l]),r||(r=!V(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Oe extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const De=H?H.emptyScript:"";class Le extends rt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,De):this.element.removeAttribute(this.name)}}class Ie extends rt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=T(this,t,e,0))!==null&&i!==void 0?i:$)===R)return;const s=this._$AH,o=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class je{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const Qt=et.litHtmlPolyfillSupport;Qt?.(W,J),(($t=et.litHtmlVersions)!==null&&$t!==void 0?$t:et.litHtmlVersions=[]).push("2.8.0");const ze=(n,t,e)=>{var i,s;const o=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new J(t.insertBefore(B(),h),h,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,_t;class y extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ze(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return R}}y.finalized=!0,y._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:y});const Xt=globalThis.litElementPolyfillSupport;Xt?.({LitElement:y});((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},Ve=(n,t,e)=>{t.constructor.createProperty(e,n)};function g(n){return(t,e)=>e!==void 0?Ve(n,t,e):Be(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;((yt=window.HTMLSlotElement)===null||yt===void 0?void 0:yt.prototype.assignedElements)!=null;const We="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let k=class extends y{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return _`
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
          <a class="link" href=${We}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};k.styles=q`
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
  `;m([g({type:String})],k.prototype,"patronName",void 0);m([g({type:String})],k.prototype,"baseHost",void 0);m([g({type:String})],k.prototype,"defaultMonthlyDonationAmount",void 0);k=m([F("iaux-mgc-welcome")],k);const Ge=_`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class qe extends y{static get styles(){return q`
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
    `}render(){return Ge}}customElements.define("ia-icon-donate",qe);let it=class extends y{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?_` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:$}render(){return _`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};it.styles=q`
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
  `;m([g({type:String})],it.prototype,"titleStyle",void 0);it=m([F("iaux-mgc-title")],it);let st=class extends y{constructor(){super(...arguments),this.styleType="primary"}render(){return _`<slot buttonStyle=${this.styleType}></slot>`}};st.styles=q`
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
    }
  `;m([g({type:String})],st.prototype,"styleType",void 0);st=m([F("iaux-button-style")],st);let nt=class extends y{constructor(){super(...arguments),this.donations=[]}donationAmountFormatted(t){return`USD ${t}`}dateFormatted(t){const e=t.split("-"),i=e[0],s=parseInt(e[1],10),o=e[2];return`${{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[s]} ${o}, ${i}`}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}render(){return _`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th>Donor</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          ${this.donations.length?this.donations.map(t=>{const e=t.status==="pending";return _`
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
                `}):_`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};nt.styles=q`
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    button {
      padding: 1rem 0;
    }
  `;m([g({type:Array})],nt.prototype,"donations",void 0);nt=m([F("iaux-mgc-receipts")],nt);let G=class extends y{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}get showReceiptsCTA(){return _`
      <iaux-button-style class="link">
        <button
          @click=${()=>{this.viewToDisplay="receipts"}}
        >
          Show receipts
        </button>
      </iaux-button-style>
    `}render(){return console.log("***",this.viewToDisplay,this.receipts),this.viewToDisplay==="receipts"?_`
        <iaux-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <iaux-button-style class="link">
              <button
                @click=${t=>{const e=t.target;e.disabled=!0,this.viewToDisplay="welcome"}}
              >
                Back to account settings
              </button>
            </iaux-button-style>
          </span>
        </iaux-mgc-title>
        <iaux-mgc-receipts
          .donations=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></iaux-mgc-receipts>
      `:_`
      <iaux-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length?this.showReceiptsCTA:$}</span
        >
      </iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `}};m([g({type:String})],G.prototype,"patronName",void 0);m([g({type:Array})],G.prototype,"receipts",void 0);m([g({type:String})],G.prototype,"viewToDisplay",void 0);G=m([F("iaux-monthly-giving-circle")],G);const $e=[{amount:100,date:"2020-01-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed"},{amount:100,date:"2023-02-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",is_test:!0},{amount:100,date:"2024-03-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Pending",is_test:!0}];let ft=!1;const I=document.querySelector("iaux-monthly-giving-circle");I.receipts=$e;I.addEventListener("EmailReceiptRequest",n=>{alert(`EmailReceiptRequest: ${JSON.stringify(n.detail)}`)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(ft){I.receipts=[],ft=!1;return}I.receipts=$e,await I.updateComplete,ft=!0});
