(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function $(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var c=n.length-1;c>=0;c--)(r=n[c])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window,Pt=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,le=Symbol(),Ot=new WeakMap;let xe=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==le)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ot.set(e,t))}return t}toString(){return this.cssText}};const Me=n=>new xe(typeof n=="string"?n:n+"",void 0,le),ke=(n,t)=>{Pt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},It=Pt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Me(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt;const tt=window,jt=tt.trustedTypes,Te=jt?jt.emptyScript:"",zt=tt.reactiveElementPolyfillSupport,xt={toAttribute(n,t){switch(t){case Boolean:n=n?Te:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ae=(n,t)=>t!==n&&(t==t||n==n),vt={attribute:!0,type:String,converter:xt,reflect:!1,hasChanged:ae},Mt="finalized";let B=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||vt}static finalize(){if(this.hasOwnProperty(Mt))return!1;this[Mt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(It(s))}else t!==void 0&&e.push(It(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ke(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=vt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:xt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:xt;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ae)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};B[Mt]=!0,B.elementProperties=new Map,B.elementStyles=[],B.shadowRootOptions={mode:"open"},zt?.({ReactiveElement:B}),((mt=tt.reactiveElementVersions)!==null&&mt!==void 0?mt:tt.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const et=window,U=et.trustedTypes,Lt=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,kt="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,ce="?"+b,De=`<${ce}>`,k=document,it=()=>k.createComment(""),q=n=>n===null||typeof n!="object"&&typeof n!="function",de=Array.isArray,Ne=n=>de(n)||typeof n?.[Symbol.iterator]=="function",yt=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Jt=/>/g,w=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,qt=/"/g,he=/^(?:script|style|textarea|title)$/i,G=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Gt=new WeakMap,x=k.createTreeWalker(k,129,null,!1);function ue(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lt!==void 0?Lt.createHTML(t):t}const Ue=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=J;for(let c=0;c<e;c++){const l=n[c];let a,d,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,d=r.exec(l),d!==null);)u=r.lastIndex,r===J?d[1]==="!--"?r=Bt:d[1]!==void 0?r=Jt:d[2]!==void 0?(he.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=w):d[3]!==void 0&&(r=w):r===w?d[0]===">"?(r=s??J,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,a=d[1],r=d[3]===void 0?w:d[3]==='"'?qt:Vt):r===qt||r===Vt?r=w:r===Bt||r===Jt?r=J:(r=w,s=void 0);const m=r===w&&n[c+1].startsWith("/>")?" ":"";o+=r===J?l+De:h>=0?(i.push(a),l.slice(0,h)+kt+l.slice(h)+b+m):l+b+(h===-2?(i.push(void 0),c):m)}return[ue(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let Tt=class pe{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,d]=Ue(t,e);if(this.el=pe.createElement(a,i),x.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=x.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(kt)||u.startsWith(b)){const m=d[r++];if(h.push(u),m!==void 0){const E=s.getAttribute(m.toLowerCase()+kt).split(b),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:g[2],strings:E,ctor:g[1]==="."?Re:g[1]==="?"?Oe:g[1]==="@"?Ie:at})}else l.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(he.test(s.tagName)){const h=s.textContent.split(b),u=h.length-1;if(u>0){s.textContent=U?U.emptyScript:"";for(let m=0;m<u;m++)s.append(h[m],it()),x.nextNode(),l.push({type:2,index:++o});s.append(h[u],it())}}}else if(s.nodeType===8)if(s.data===ce)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)l.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}};function P(n,t,e=n,i){var s,o,r,c;if(t===G)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=q(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=P(n,l._$AS(n,t.values),l,i)),t}let Pe=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:k).importNode(i,!0);x.currentNode=o;let r=x.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let d;a.type===2?d=new me(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new je(r,this,t)),this._$AV.push(d),a=s[++l]}c!==a?.index&&(r=x.nextNode(),c++)}return x.currentNode=k,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},me=class ve{constructor(t,e,i,s){var o;this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),q(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==G&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ne(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==y&&q(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Tt.createElement(ue(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Pe(o,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=Gt.get(t.strings);return e===void 0&&Gt.set(t.strings,e=new Tt(t)),e}T(t){de(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new ve(this.k(it()),this.k(it()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},at=class{constructor(t,e,i,s,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=P(this,t,e,0),r=!q(t)||t!==this._$AH&&t!==G,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=P(this,c[i+l],e,l),a===G&&(a=this._$AH[l]),r||(r=!q(a)||a!==this._$AH[l]),a===y?t=y:t!==y&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Re=class extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}};const He=U?U.emptyScript:"";let Oe=class extends at{constructor(){super(...arguments),this.type=4}j(t){t&&t!==y?this.element.setAttribute(this.name,He):this.element.removeAttribute(this.name)}},Ie=class extends at{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=P(this,t,e,0))!==null&&i!==void 0?i:y)===G)return;const s=this._$AH,o=t===y&&s!==y||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==y&&(s===y||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},je=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}};const Wt=et.litHtmlPolyfillSupport;Wt?.(Tt,me),(($t=et.litHtmlVersions)!==null&&$t!==void 0?$t:et.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window,Rt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ht=Symbol(),Yt=new WeakMap;let $e=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ht)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Yt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Yt.set(e,t))}return t}toString(){return this.cssText}};const ze=n=>new $e(typeof n=="string"?n:n+"",void 0,Ht),z=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new $e(e,n,Ht)},Le=(n,t)=>{Rt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Zt=Rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ze(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ft;const st=window,Ft=st.trustedTypes,Be=Ft?Ft.emptyScript:"",Kt=st.reactiveElementPolyfillSupport,Dt={toAttribute(n,t){switch(t){case Boolean:n=n?Be:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ye=(n,t)=>t!==n&&(t==t||n==n),gt={attribute:!0,type:String,converter:Dt,reflect:!1,hasChanged:ye},Nt="finalized";let N=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||gt}static finalize(){if(this.hasOwnProperty(Nt))return!1;this[Nt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Zt(s))}else t!==void 0&&e.push(Zt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Le(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=gt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Dt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:Dt;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ye)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};N[Nt]=!0,N.elementProperties=new Map,N.elementStyles=[],N.shadowRootOptions={mode:"open"},Kt?.({ReactiveElement:N}),((ft=st.reactiveElementVersions)!==null&&ft!==void 0?ft:st.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const nt=window,R=nt.trustedTypes,Qt=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ut="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,fe="?"+S,Je=`<${fe}>`,T=document,W=()=>T.createComment(""),Y=n=>n===null||typeof n!="object"&&typeof n!="function",ge=Array.isArray,Ve=n=>ge(n)||typeof n?.[Symbol.iterator]=="function",At=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xt=/-->/g,te=/>/g,C=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,ie=/"/g,_e=/^(?:script|style|textarea|title)$/i,qe=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),v=qe(1),H=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),se=new WeakMap,M=T.createTreeWalker(T,129,null,!1);function Ae(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qt!==void 0?Qt.createHTML(t):t}const Ge=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=V;for(let c=0;c<e;c++){const l=n[c];let a,d,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,d=r.exec(l),d!==null);)u=r.lastIndex,r===V?d[1]==="!--"?r=Xt:d[1]!==void 0?r=te:d[2]!==void 0?(_e.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=C):d[3]!==void 0&&(r=C):r===C?d[0]===">"?(r=s??V,h=-1):d[1]===void 0?h=-2:(h=r.lastIndex-d[2].length,a=d[1],r=d[3]===void 0?C:d[3]==='"'?ie:ee):r===ie||r===ee?r=C:r===Xt||r===te?r=V:(r=C,s=void 0);const m=r===C&&n[c+1].startsWith("/>")?" ":"";o+=r===V?l+Je:h>=0?(i.push(a),l.slice(0,h)+Ut+l.slice(h)+S+m):l+S+(h===-2?(i.push(void 0),c):m)}return[Ae(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class Z{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,l=this.parts,[a,d]=Ge(t,e);if(this.el=Z.createElement(a,i),M.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(s=M.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const u of s.getAttributeNames())if(u.endsWith(Ut)||u.startsWith(S)){const m=d[r++];if(h.push(u),m!==void 0){const E=s.getAttribute(m.toLowerCase()+Ut).split(S),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:g[2],strings:E,ctor:g[1]==="."?Ye:g[1]==="?"?Fe:g[1]==="@"?Ke:ct})}else l.push({type:6,index:o})}for(const u of h)s.removeAttribute(u)}if(_e.test(s.tagName)){const h=s.textContent.split(S),u=h.length-1;if(u>0){s.textContent=R?R.emptyScript:"";for(let m=0;m<u;m++)s.append(h[m],W()),M.nextNode(),l.push({type:2,index:++o});s.append(h[u],W())}}}else if(s.nodeType===8)if(s.data===fe)l.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:o}),h+=S.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function O(n,t,e=n,i){var s,o,r,c;if(t===H)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=Y(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=O(n,l._$AS(n,t.values),l,i)),t}class We{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:T).importNode(i,!0);M.currentNode=o;let r=M.nextNode(),c=0,l=0,a=s[0];for(;a!==void 0;){if(c===a.index){let d;a.type===2?d=new K(r,r.nextSibling,this,t):a.type===1?d=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(d=new Qe(r,this,t)),this._$AV.push(d),a=s[++l]}c!==a?.index&&(r=M.nextNode(),c++)}return M.currentNode=T,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var o;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),Y(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ve(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&Y(this._$AH)?this._$AA.nextSibling.data=t:this.$(T.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Z.createElement(Ae(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new We(o,this),c=r.u(this.options);r.v(i),this.$(c),this._$AH=r}}_$AC(t){let e=se.get(t.strings);return e===void 0&&se.set(t.strings,e=new Z(t)),e}T(t){ge(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.k(W()),this.k(W()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ct{constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=O(this,t,e,0),r=!Y(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const c=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=O(this,c[i+l],e,l),a===H&&(a=this._$AH[l]),r||(r=!Y(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ye extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Ze=R?R.emptyScript:"";class Fe extends ct{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Ze):this.element.removeAttribute(this.name)}}class Ke extends ct{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=O(this,t,e,0))!==null&&i!==void 0?i:p)===H)return;const s=this._$AH,o=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==p&&(s===p||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Qe{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const ne=nt.litHtmlPolyfillSupport;ne?.(Z,K),((_t=nt.litHtmlVersions)!==null&&_t!==void 0?_t:nt.litHtmlVersions=[]).push("2.8.0");const Xe=(n,t,e)=>{var i,s;const o=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new K(t.insertBefore(W(),c),c,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var bt,St;class A extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Xe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return H}}A.finalized=!0,A._$litElement$=!0,(bt=globalThis.litElementHydrateSupport)===null||bt===void 0||bt.call(globalThis,{LitElement:A});const oe=globalThis.litElementPolyfillSupport;oe?.({LitElement:A});((St=globalThis.litElementVersions)!==null&&St!==void 0?St:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ti=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},ei=(n,t,e)=>{t.constructor.createProperty(e,n)};function f(n){return(t,e)=>e!==void 0?ei(n,t,e):ti(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ii=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(c){n(c,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n?.(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function si(n,t){return ii({descriptor:e=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et;((Et=window.HTMLSlotElement)===null||Et===void 0?void 0:Et.prototype.assignedElements)!=null;const ni="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let I=class extends A{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return v`
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
          <a class="link" href=${ni}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};I.styles=z`
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
  `;$([f({type:String})],I.prototype,"patronName",void 0);$([f({type:String})],I.prototype,"baseHost",void 0);$([f({type:String})],I.prototype,"defaultMonthlyDonationAmount",void 0);I=$([L("ia-mgc-welcome")],I);const oi=v`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class ri extends A{static get styles(){return z`
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
    `}render(){return oi}}customElements.define("ia-icon-donate",ri);let j=class extends A{constructor(){super(...arguments),this.isDisabled=!1}render(){return v`
      <button
        ?disabled=${this.isDisabled}
        @click=${()=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(this))}}
      >
        <slot></slot>
      </button>
    `}};j.styles=z`
    :host {
      display: inline-block;
      height: var(--button-height, 30px);
    }

    button {
      border: none;
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
      background-color: #194880;
      border-color: #c5d1df;
    }

    :host(.secondary) button {
      background: #333;
    }

    :host(.cancel) button {
      background-color: #e51c26;
      border-color: #f8c6c8;
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

    :host([isdisabled]) button {
      cursor: not-allowed;
      opacity: 0.5;
      color: #222 !important;
    }
  `;$([f({type:Boolean,reflect:!0})],j.prototype,"isDisabled",void 0);$([f({type:Object})],j.prototype,"clickHandler",void 0);$([si("button")],j.prototype,"button",void 0);j=$([L("ia-button")],j);let ot=class extends A{constructor(){super(...arguments),this.plans=[]}render(){return v`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,s,o,r,c,l,a,d,h,u,m,E,g,dt,ht,ut,pt;const Ee=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found",we=(o=(s=t.payment)===null||s===void 0?void 0:s.cardType)!==null&&o!==void 0?o:"Card type not found",Ce=!((r=t.payment)===null||r===void 0)&&r.last4?`...${(c=t.payment)===null||c===void 0?void 0:c.last4}`:"CC number not found";return v`
              <li>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${t.currency}
                      ${t.currencySymbol}${t.amount}/month
                    </p>
                    ${t.isTest?v`<p class="is-test">(Test payment)</p>`:p}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${Ee}</p>
                    ${((l=t.payment)===null||l===void 0?void 0:l.cardType)==="creditCard"?v`<p>${we}</p>
                          <p>${Ce}</p>`:p}
                    ${((a=t.payment)===null||a===void 0?void 0:a.paymentMethodType)==="Paypal"?v`<p>
                          Paypal email:
                          <a href=${`mailto:${(d=t.payment)===null||d===void 0?void 0:d.paypalEmail}`}
                            >${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}</a
                          >
                        </p>`:p}
                    ${((u=t.payment)===null||u===void 0?void 0:u.paymentMethodType)==="Venmo"?v`<p>
                          Venmo username:
                          <a href=${`mailto:${(m=t.payment)===null||m===void 0?void 0:m.venmoUsername}`}
                            >${(E=t.payment)===null||E===void 0?void 0:E.paypalEmail}</a
                          >
                        </p>`:p}
                    ${((g=t.payment)===null||g===void 0?void 0:g.cardType)!=="creditCard"?v`<p>
                          Expires:
                          ${(ht=(dt=t.payment)===null||dt===void 0?void 0:dt.expirationMonth)!==null&&ht!==void 0?ht:"month not found"}/${(pt=(ut=t.payment)===null||ut===void 0?void 0:ut.expirationYear)!==null&&pt!==void 0?pt:"year not found"}
                        </p>`:p}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${t.nextBillingDate}</p>
                  </div>
                </div>
                <ia-button
                  class="ia-button link edit-donation"
                  isdisabled
                  .clickHandler=${()=>console.log(t)}
                >
                  Manage this monthly donation
                </ia-button>
              </li>
            `})}
        </ul>
      </section>
    `}};ot.styles=z`
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
  `;$([f({type:Array})],ot.prototype,"plans",void 0);ot=$([L("ia-mgc-plans")],ot);let rt=class extends A{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?v` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:p}render(){return v`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};rt.styles=z`
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

    @media screen and (max-width: 500px) {
      h2,
      slot[name='action'] {
        display: block;
      }
    }
  `;$([f({type:String})],rt.prototype,"titleStyle",void 0);rt=$([L("ia-mgc-title")],rt);let F=class extends A{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const s={...i},{id:o}=t;s[o]=t,this.receiptDispatcher={...s},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=CSS.escape(o),c=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${r} ia-button`);c.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"✓ Sent";case"fail":return"✖ Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return v`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],s=i?.emailStatus==="pending",o=!i||!i.emailStatus?p:v`<span
                        class=${`sent-status ${i.emailStatus}`}
                        >${this.emailStatusMessageToDisplay(i)}</span
                      >`;return v`
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
                          .clickHandler=${async r=>{if(!s&&(r.isDisabled=!0,await r.updateComplete),!s&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-button>
                        ${o}
                      </div>
                    </td>
                  </tr>
                `}):v`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};F.styles=z`
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

    .sent-status.success,
    .sent-status.fail {
      padding: 5px;
      background: rgb(238, 253, 238);
      width: 55px;
      min-height: 20px;
    }
    .sent-status.success {
      color: rgb(33, 149, 24);
      border-left: 5px solid rgb(33, 149, 24);
    }
    .sent-status.fail {
      color: #bb0505;
      border-left: 5px solid #bb0505;
    }
  `;$([f({type:Array})],F.prototype,"receipts",void 0);$([f({type:Object})],F.prototype,"receiptDispatcher",void 0);F=$([L("ia-mgc-receipts")],F);let D=class extends A{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}updateReceived(t){this.receiptListElement.emailSent({id:t.donationId,emailStatus:t.status}),this.updates.unshift(t)}get showReceiptsCTA(){return v`
      <ia-button
        class="link slim"
        .clickHandler=${()=>{this.viewToDisplay="receipts",this.dispatchEvent(new CustomEvent("ShowReceipts"))}}
      >
        View recent donation history
      </ia-button>
    `}get headerSection(){return this.viewToDisplay==="receipts"?v`
        <ia-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <ia-button
              class="link slim"
              id="close-receipts"
              .clickHandler=${async()=>{this.viewToDisplay="welcome",this.dispatchEvent(new CustomEvent("ShowWelcome")),this.updates=[],await this.updateComplete}}
            >
              Back to account settings
            </ia-button>
          </span>
        </ia-mgc-title>
      `:this.plans.length?v`
        <ia-mgc-title titleStyle="heart">
          <span slot="title">Monthly Giving Circle</span>
          <span slot="action"
            >${this.receipts.length?this.showReceiptsCTA:p}</span
          >
        </ia-mgc-title>
      `:v`
      <ia-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length?this.showReceiptsCTA:p}</span
        >
      </ia-mgc-title>
    `}render(){return v`
      ${this.headerSection}
      ${this.viewToDisplay==="receipts"?v`
            <ia-mgc-receipts
              .receipts=${this.receipts}
              @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
            ></ia-mgc-receipts>
          `:p}
      ${this.viewToDisplay==="plans"?v` <ia-mgc-plans .plans=${this.plans}></ia-mgc-plans> `:p}
      ${this.viewToDisplay==="welcome"?v`
            <ia-mgc-welcome .patronName=${this.patronName}></ia-mgc-welcome>
          `:p}
    `}};$([f({type:String})],D.prototype,"patronName",void 0);$([f({type:Array})],D.prototype,"receipts",void 0);$([f({type:Array})],D.prototype,"updates",void 0);$([f({type:Array})],D.prototype,"plans",void 0);$([f({type:String,reflect:!0})],D.prototype,"viewToDisplay",void 0);D=$([L("ia-monthly-giving-circle")],D);class wt{constructor(t){this.receipt=t}get amountFormatted(){var t,e;const i=(t=this.receipt.total_amount)!==null&&t!==void 0?t:this.receipt.net_amount,s=(e=this.receipt.currency)!==null&&e!==void 0?e:"CURR not found";return i?`${s} ${this.currencySymbol}${i}`:"no amount found, can't find total_amount or net_amount"}get amount(){var t,e;return(e=(t=`${this.receipt.total_amount}`)!==null&&t!==void 0?t:`${this.receipt.net_amount}`)!==null&&e!==void 0?e:"no amount found, can't find total_amount or net_amount"}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}get currencySymbol(){return this.receipt.currency==="USD"?"$":""}}class li{constructor(t){var e;this.plan=t,this.payment=t.btdata,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get currencySymbol(){return this.currency==="USD"?"$":""}get amount(){return this.plan.amount}get startDate(){return new Date(this.plan.start_date).toLocaleDateString()}get nextBillingDate(){const t=new Date(this.payment.nextBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return t??"not found"}get isTest(){return this.plan.is_test}}let lt=[];const re={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,nextBillingDate:{date:"2024-09-09 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},be=Object.keys(re).map(n=>new li(re[n])),Se=[new wt({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new wt({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new wt({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})];let Ct=!0;const _=document.querySelector("ia-monthly-giving-circle");_.receipts=Se;_.plans=be;_.addEventListener("EmailReceiptRequest",n=>{const t=document.getElementById("interaction-status-area"),{donation:e}=n.detail,i=Math.floor(Math.random()+.5),s=i===1?"success":"fail",o=i===1?3e3:8e3;t.innerText=`Email receipt request for donation ${e.id} will return ${s} in ${o} ms.`;const c={message:s==="success"?"Email receipt sent":"Email receipt failed",status:s,donationId:e.id};lt=[c,...lt],setTimeout(()=>{_.updateReceived(c),console.log("EmailReceiptRequest index.html ----",c),t.innerText=""},o)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(Ct){_.receipts=[],Ct=!1;return}_.receipts=Se,await _.updateComplete,Ct=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{lt=[],_.updates=lt,await _.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{_.plans=_.plans.length?[]:be,await _.updateComplete});
