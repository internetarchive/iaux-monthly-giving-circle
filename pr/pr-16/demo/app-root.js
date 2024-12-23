(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function y(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var h=n.length-1;h>=0;h--)(r=n[h])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=window,It=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),Nt=new WeakMap;let ge=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(It&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Nt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Nt.set(e,t))}return t}toString(){return this.cssText}};const _e=n=>new ge(typeof n=="string"?n:n+"",void 0,ie),fe=(n,t)=>{It?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Pt=It?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _e(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;const X=window,kt=X.trustedTypes,Ae=kt?kt.emptyScript:"",Ht=X.reactiveElementPolyfillSupport,bt={toAttribute(n,t){switch(t){case Boolean:n=n?Ae:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},se=(n,t)=>t!==n&&(t==t||n==n),dt={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:se},Et="finalized";let z=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||dt}static finalize(){if(this.hasOwnProperty(Et))return!1;this[Et]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Pt(s))}else t!==void 0&&e.push(Pt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return fe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=dt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:bt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:bt;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||se)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};z[Et]=!0,z.elementProperties=new Map,z.elementStyles=[],z.shadowRootOptions={mode:"open"},Ht?.({ReactiveElement:z}),((ct=X.reactiveElementVersions)!==null&&ct!==void 0?ct:X.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const K=window,P=K.trustedTypes,Rt=P?P.createPolicy("lit-html",{createHTML:n=>n}):void 0,St="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,ne="?"+b,be=`<${ne}>`,M=document,tt=()=>M.createComment(""),V=n=>n===null||typeof n!="object"&&typeof n!="function",oe=Array.isArray,Ee=n=>oe(n)||typeof n?.[Symbol.iterator]=="function",pt=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,jt=/-->/g,Dt=/>/g,S=RegExp(`>|${pt}(?:([^\\s"'>=/]+)(${pt}*=${pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Jt=/"/g,re=/^(?:script|style|textarea|title)$/i,B=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Lt=new WeakMap,w=M.createTreeWalker(M,129,null,!1);function le(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const Se=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=J;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===J?c[1]==="!--"?r=jt:c[1]!==void 0?r=Dt:c[2]!==void 0?(re.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=S):c[3]!==void 0&&(r=S):r===S?c[0]===">"?(r=s??J,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?S:c[3]==='"'?Jt:zt):r===Jt||r===zt?r=S:r===jt||r===Dt?r=J:(r=S,s=void 0);const $=r===S&&n[h+1].startsWith("/>")?" ":"";o+=r===J?l+be:d>=0?(i.push(a),l.slice(0,d)+St+l.slice(d)+b+$):l+b+(d===-2?(i.push(void 0),h):$)}return[le(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let Ct=class ae{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Se(t,e);if(this.el=ae.createElement(a,i),w.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=w.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(St)||u.startsWith(b)){const $=c[r++];if(d.push(u),$!==void 0){const ht=s.getAttribute($.toLowerCase()+St).split(b),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:A[2],strings:ht,ctor:A[1]==="."?we:A[1]==="?"?Me:A[1]==="@"?Te:lt})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(re.test(s.tagName)){const d=s.textContent.split(b),u=d.length-1;if(u>0){s.textContent=P?P.emptyScript:"";for(let $=0;$<u;$++)s.append(d[$],tt()),w.nextNode(),l.push({type:2,index:++o});s.append(d[u],tt())}}}else if(s.nodeType===8)if(s.data===ne)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(b,d+1))!==-1;)l.push({type:7,index:o}),d+=b.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}};function k(n,t,e=n,i){var s,o,r,h;if(t===B)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=V(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=k(n,l._$AS(n,t.values),l,i)),t}let Ce=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:M).importNode(i,!0);w.currentNode=o;let r=w.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new he(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Ie(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=w.nextNode(),h++)}return w.currentNode=M,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},he=class ce{constructor(t,e,i,s){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),V(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==B&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ee(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&V(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Ct.createElement(le(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Ce(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Lt.get(t.strings);return e===void 0&&Lt.set(t.strings,e=new Ct(t)),e}T(t){oe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new ce(this.k(tt()),this.k(tt()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},lt=class{constructor(t,e,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=k(this,t,e,0),r=!V(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=k(this,h[i+l],e,l),a===B&&(a=this._$AH[l]),r||(r=!V(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},we=class extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}};const xe=P?P.emptyScript:"";let Me=class extends lt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,xe):this.element.removeAttribute(this.name)}},Te=class extends lt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=k(this,t,e,0))!==null&&i!==void 0?i:v)===B)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Ie=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};const Wt=K.litHtmlPolyfillSupport;Wt?.(Ct,he),((ut=K.litHtmlVersions)!==null&&ut!==void 0?ut:K.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window,Ot=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ut=Symbol(),Vt=new WeakMap;let de=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ut)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Ot&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vt.set(e,t))}return t}toString(){return this.cssText}};const Oe=n=>new de(typeof n=="string"?n:n+"",void 0,Ut),O=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new de(e,n,Ut)},Ue=(n,t)=>{Ot?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Bt=Ot?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Oe(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const et=window,Gt=et.trustedTypes,Ne=Gt?Gt.emptyScript:"",Yt=et.reactiveElementPolyfillSupport,wt={toAttribute(n,t){switch(t){case Boolean:n=n?Ne:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ue=(n,t)=>t!==n&&(t==t||n==n),mt={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:ue},xt="finalized";let N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||mt}static finalize(){if(this.hasOwnProperty(xt))return!1;this[xt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Bt(s))}else t!==void 0&&e.push(Bt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ue(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=mt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:wt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:wt;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ue)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};N[xt]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Yt?.({ReactiveElement:N}),(($t=et.reactiveElementVersions)!==null&&$t!==void 0?$t:et.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;const it=window,H=it.trustedTypes,Zt=H?H.createPolicy("lit-html",{createHTML:n=>n}):void 0,Mt="$lit$",E=`lit$${(Math.random()+"").slice(9)}$`,pe="?"+E,Pe=`<${pe}>`,T=document,G=()=>T.createComment(""),Y=n=>n===null||typeof n!="object"&&typeof n!="function",$e=Array.isArray,ke=n=>$e(n)||typeof n?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,qt=/>/g,C=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qt=/'/g,Xt=/"/g,me=/^(?:script|style|textarea|title)$/i,He=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=He(1),R=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Kt=new WeakMap,x=T.createTreeWalker(T,129,null,!1);function ye(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zt!==void 0?Zt.createHTML(t):t}const Re=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=L;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===L?c[1]==="!--"?r=Ft:c[1]!==void 0?r=qt:c[2]!==void 0?(me.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=C):c[3]!==void 0&&(r=C):r===C?c[0]===">"?(r=s??L,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?C:c[3]==='"'?Xt:Qt):r===Xt||r===Qt?r=C:r===Ft||r===qt?r=L:(r=C,s=void 0);const $=r===C&&n[h+1].startsWith("/>")?" ":"";o+=r===L?l+Pe:d>=0?(i.push(a),l.slice(0,d)+Mt+l.slice(d)+E+$):l+E+(d===-2?(i.push(void 0),h):$)}return[ye(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Re(t,e);if(this.el=Z.createElement(a,i),x.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=x.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(Mt)||u.startsWith(E)){const $=c[r++];if(d.push(u),$!==void 0){const ht=s.getAttribute($.toLowerCase()+Mt).split(E),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:o,name:A[2],strings:ht,ctor:A[1]==="."?De:A[1]==="?"?Je:A[1]==="@"?Le:at})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(me.test(s.tagName)){const d=s.textContent.split(E),u=d.length-1;if(u>0){s.textContent=H?H.emptyScript:"";for(let $=0;$<u;$++)s.append(d[$],G()),x.nextNode(),l.push({type:2,index:++o});s.append(d[u],G())}}}else if(s.nodeType===8)if(s.data===pe)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(E,d+1))!==-1;)l.push({type:7,index:o}),d+=E.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function j(n,t,e=n,i){var s,o,r,h;if(t===R)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=Y(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=j(n,l._$AS(n,t.values),l,i)),t}class je{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:T).importNode(i,!0);x.currentNode=o;let r=x.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new F(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new We(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=x.nextNode(),h++)}return x.currentNode=T,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),Y(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==R&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ke(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Z.createElement(ye(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new je(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new Z(t)),e}T(t){$e(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new F(this.k(G()),this.k(G()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class at{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=j(this,t,e,0),r=!Y(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=j(this,h[i+l],e,l),a===R&&(a=this._$AH[l]),r||(r=!Y(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class De extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const ze=H?H.emptyScript:"";class Je extends at{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,ze):this.element.removeAttribute(this.name)}}class Le extends at{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=j(this,t,e,0))!==null&&i!==void 0?i:p)===R)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class We{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const te=it.litHtmlPolyfillSupport;te?.(Z,F),((yt=it.litHtmlVersions)!==null&&yt!==void 0?yt:it.litHtmlVersions=[]).push("2.8.0");const Ve=(n,t,e)=>{var i,s;const o=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new F(t.insertBefore(G(),h),h,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gt,_t;class g extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return R}}g.finalized=!0,g._$litElement$=!0,(gt=globalThis.litElementHydrateSupport)===null||gt===void 0||gt.call(globalThis,{LitElement:g});const ee=globalThis.litElementPolyfillSupport;ee?.({LitElement:g});((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},Ge=(n,t,e)=>{t.constructor.createProperty(e,n)};function f(n){return(t,e)=>e!==void 0?Ge(n,t,e):Be(n,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;((ft=window.HTMLSlotElement)===null||ft===void 0?void 0:ft.prototype.assignedElements)!=null;const Ye="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let D=class extends g{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return m`
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
          <a class="link" href=${Ye}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};D.styles=O`
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
  `;y([f({type:String})],D.prototype,"patronName",void 0);y([f({type:String})],D.prototype,"baseHost",void 0);y([f({type:String})],D.prototype,"defaultMonthlyDonationAmount",void 0);D=y([U("iaux-mgc-welcome")],D);const Ze=m`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Fe extends g{static get styles(){return O`
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
    `}render(){return Ze}}customElements.define("ia-icon-donate",Fe);let Tt=class extends g{render(){return m`<slot></slot>`}};Tt.styles=O`
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
  `;Tt=y([U("iaux-button-style")],Tt);let st=class extends g{constructor(){super(...arguments),this.donations=[]}donationAmountFormatted(t){return`USD ${t}`}dateFormatted(t){const e=t.split("-"),i=e[0],s=parseInt(e[1],10),o=e[2];return`${{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[s]} ${o}, ${i}`}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}render(){return m`
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
    `}};st.styles=O`
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }

    button {
      padding: 1rem 0;
    }
  `;y([f({type:Array})],st.prototype,"donations",void 0);st=y([U("iaux-mgc-receipts")],st);let nt=class extends g{constructor(){super(...arguments),this.plans=[]}donationAmountFormatted(t){return`USD ${t}`}dateFormatted(t){const e=t.split("-"),i=e[0],s=parseInt(e[1],10),o=e[2];return`${{1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"}[s]} ${o}, ${i}`}render(){return m`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,s,o,r;const h=(e=t.payment.paymentMethodType)!==null&&e!==void 0?e:"Method not found",l=(i=t.payment.cardType)!==null&&i!==void 0?i:"Card type not found",a=t.payment.last4?`...${t.payment.last4}`:"CC number not found",c=(s=t.payment.nextBillingDate)!==null&&s!==void 0?s:"";return console.log(" ******** "),console.log("plan: ",t),m`
              <li>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>${t.currencyType} ${t.amount}/month</p>
                    ${t.isTest?m`<p>(Test payment)</p>`:p}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${h}</p>
                    ${t.payment.cardType==="creditCard"?m`<p>${l}</p>
                          <p>${a}</p>`:p}
                    ${t.payment.paymentMethodType==="Paypal"?m`<p>
                          Paypal email:
                          <a href=${`mailto:${t.payment.paypalEmail}`}
                            >${t.payment.paypalEmail}</a
                          >
                        </p>`:p}
                    ${t.payment.paymentMethodType==="Venmo"?m`<p>
                          Venmo username:
                          <a href=${`mailto:${t.payment.venmoUsername}`}
                            >${t.payment.paypalEmail}</a
                          >
                        </p>`:p}
                    <p>
                      Expires:
                      ${(o=t.payment.expirationMonth)!==null&&o!==void 0?o:"month not found"}/${(r=t.payment.expirationYear)!==null&&r!==void 0?r:"year not found"}
                    </p>
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>
                      ${c?m`${c}`:"not found"}
                    </p>
                  </div>
                </div>
                <button
                  class="ia-button link edit-donation"
                  @click=${()=>console.log(t)}
                >
                  Manage this monthly donation
                </button>
              </li>
            `})}
        </ul>
      </section>
    `}};nt.styles=O`
    table {
      width: 100%;
      text-align: left;
      max-width: 600px;
    }
  `;y([f({type:Array})],nt.prototype,"plans",void 0);nt=y([U("iaux-mgc-plans")],nt);let ot=class extends g{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?m` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:p}render(){return m`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};ot.styles=O`
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
  `;y([f({type:String})],ot.prototype,"titleStyle",void 0);ot=y([U("iaux-mgc-title")],ot);let rt=class extends g{constructor(){super(...arguments),this.updates=[]}render(){return this.updates.length?m`
      <ul>
        ${this.updates.map(t=>this.updateBlock(t))}
      </ul>
    `:p}updateBlock(t){const e=t.status==="success"?"✓":"✖";return m` <li class="${t.status}">${e} ${t.message}</li> `}};rt.styles=O`
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
    li.success {
      color: rgb(33, 149, 24);
      cursor: pointer;
      border-left: 5px solid rgb(33, 149, 24);
    }
    li.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
  `;y([f({type:Array})],rt.prototype,"updates",void 0);rt=y([U("iaux-update-queue")],rt);let I=class extends g{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}get showReceiptsCTA(){return m`
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
        <iaux-update-queue .updates=${this.updates}></iaux-update-queue>
        <iaux-mgc-receipts
          .donations=${this.receipts}
          @EmailReceiptRequest=${t=>{this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></iaux-mgc-receipts>
      `:this.plans.length?m`
        <iaux-mgc-title titleStyle="heart">
          <span slot="title">Monthly Giving Circle</span>
          <span slot="action"
            >${this.receipts.length?this.showReceiptsCTA:p}</span
          >
        </iaux-mgc-title>
        <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
      `:m`
      <iaux-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length?this.showReceiptsCTA:p}</span
        >
      </iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `}};y([f({type:String})],I.prototype,"patronName",void 0);y([f({type:Array})],I.prototype,"receipts",void 0);y([f({type:Array})],I.prototype,"updates",void 0);y([f({type:Array})],I.prototype,"plans",void 0);y([f({type:String})],I.prototype,"viewToDisplay",void 0);I=y([U("iaux-monthly-giving-circle")],I);let W=[];const qe=[{41:{token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTcyMzc1MDI3OS41MjgwMjksIm5iZiI6MTcyMzc1MDIxOS41MjgwMjksImV4cCI6MTcyMzc1MDg3OS41MjgwMjksImtleSI6eyJwaWQiOiI1czUzazYiLCJjaWQiOjgwMzUzOCwiYW1vdW50IjoxMCwicGF5bWVudE1ldGhvZFRva2VuIjoiZ3l3ZnA5IiwiY3VzdG9tZXJJZCI6IjY5OTk2NjAyNiJ9LCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.drnp9oK-UVsuzuRAW_MTFjdWjiS630B88P-c0jDzzVw",amount:10,start_date:"2024-05-22 00:00:00",contribution_status_id:5,is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTcyMzc1MDI3OS41Mjg3NzEsIm5iZiI6MTcyMzc1MDIxOS41Mjg3NzEsImV4cCI6MTcyMzc1MDg3OS41Mjg3NzEsImtleSI6eyJwaWQiOiI4NWRyNzIiLCJjaWQiOjgwMzUzOCwiYW1vdW50Ijo1LCJwYXltZW50TWV0aG9kVG9rZW4iOiJjZXBha256ZCIsImN1c3RvbWVySWQiOiIyOTY3MjM2OTUifSwidXNlciI6IkBpc2EtYXQtdGhlLWFyY2hpdmUifQ.csGjSCrk3FV-mm7O1SwoUKCghwTQCRaD8_LJemo4YhQ",amount:5,start_date:"2022-12-09 00:00:00",contribution_status_id:5,is_test:!0,btdata:{billingDayOfMonth:9,nextBillingDate:{date:"2024-09-09 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTcyMzc1MDI3OS41MjcyMTYsIm5iZiI6MTcyMzc1MDIxOS41MjcyMTYsImV4cCI6MTcyMzc1MDg3OS41MjcyMTYsImtleSI6eyJwaWQiOiIyN21yNnIiLCJjaWQiOjgwMzUzOCwiYW1vdW50Ijo1LCJwYXltZW50TWV0aG9kVG9rZW4iOiI4dDduenFnIiwiY3VzdG9tZXJJZCI6Ijg1MzkzMjIxMyJ9LCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.Si-IBV0VhSwTL1SDXpn5bfuFP4qp-r9Jkoe4bw4eRyw",amount:5,start_date:"2024-07-01 00:00:00",contribution_status_id:5,is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}}],ve=[{amount:100,date:"2020-01-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed"},{amount:100,date:"2023-02-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",is_test:!0},{amount:100,date:"2024-03-01",donor:"John Doe",paymentMethod:"Credit Card",status:"Pending",is_test:!0}];let At=!0;const _=document.querySelector("iaux-monthly-giving-circle");_.receipts=ve;_.addEventListener("EmailReceiptRequest",async()=>{const t=Math.floor(Math.random()+.5)===1?"success":"fail";W=[{message:t==="success"?"Email receipt sent":"Email receipt failed",status:t},...W],_.updates=W,await _.updateComplete});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(At){_.receipts=[],At=!1;return}_.receipts=ve,await _.updateComplete,At=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{W=[],_.updates=W,await _.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{_.plans=_.plans.length?[]:qe,await _.updateComplete});
