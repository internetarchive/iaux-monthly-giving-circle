(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();function d(o,t,e,i){var n=arguments.length,a=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(a=(n<3?s(a):n>3?s(t,e,a):s(t,e))||a);return n>3&&a&&Object.defineProperty(t,e,a),a}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=window,ie=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ke=Symbol(),se=new WeakMap;let Ye=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ie&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=se.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&se.set(e,t))}return t}toString(){return this.cssText}};const Ze=o=>new Ye(typeof o=="string"?o:o+"",void 0,ke),Qe=(o,t)=>{ie?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=_t.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},re=ie?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ze(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bt;const St=window,le=St.trustedTypes,Xe=le?le.emptyScript:"",de=St.reactiveElementPolyfillSupport,Jt={toAttribute(o,t){switch(t){case Boolean:o=o?Xe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Ne=(o,t)=>t!==o&&(t==t||o==o),Ut={attribute:!0,type:String,converter:Jt,reflect:!1,hasChanged:Ne},Kt="finalized";let rt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ut){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ut}static finalize(){if(this.hasOwnProperty(Kt))return!1;this[Kt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(re(n))}else t!==void 0&&e.push(re(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Qe(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ut){var n;const a=this.constructor._$Ep(t,i);if(a!==void 0&&i.reflect===!0){const s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Jt).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,a=n._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=n.getPropertyOptions(a),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Jt;this._$El=a,this[a]=l.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ne)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,a)=>this[a]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostUpdate)===null||a===void 0?void 0:a.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};rt[Kt]=!0,rt.elementProperties=new Map,rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},de?.({ReactiveElement:rt}),((Bt=St.reactiveElementVersions)!==null&&Bt!==void 0?Bt:St.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;const wt=window,K=wt.trustedTypes,ce=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,Yt="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,Be="?"+k,ti=`<${Be}>`,z=document,Ct=()=>z.createComment(""),ct=o=>o===null||typeof o!="object"&&typeof o!="function",Ue=Array.isArray,ei=o=>Ue(o)||typeof o?.[Symbol.iterator]=="function",Rt=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,he=/>/g,F=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,me=/"/g,Fe=/^(?:script|style|textarea|title)$/i,ut=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),ge=new WeakMap,H=z.createTreeWalker(z,129,null,!1);function Re(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(t):t}const ii=(o,t)=>{const e=o.length-1,i=[];let n,a=t===2?"<svg>":"",s=lt;for(let l=0;l<e;l++){const r=o[l];let c,u,h=-1,g=0;for(;g<r.length&&(s.lastIndex=g,u=s.exec(r),u!==null);)g=s.lastIndex,s===lt?u[1]==="!--"?s=ue:u[1]!==void 0?s=he:u[2]!==void 0?(Fe.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=F):u[3]!==void 0&&(s=F):s===F?u[0]===">"?(s=n??lt,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?F:u[3]==='"'?me:pe):s===me||s===pe?s=F:s===ue||s===he?s=lt:(s=F,n=void 0);const y=s===F&&o[l+1].startsWith("/>")?" ":"";a+=s===lt?r+ti:h>=0?(i.push(c),r.slice(0,h)+Yt+r.slice(h)+k+y):r+k+(h===-2?(i.push(void 0),l):y)}return[Re(o,a+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};let Zt=class He{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,s=0;const l=t.length-1,r=this.parts,[c,u]=ii(t,e);if(this.el=He.createElement(c,i),H.currentNode=this.el.content,e===2){const h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(n=H.nextNode())!==null&&r.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const g of n.getAttributeNames())if(g.endsWith(Yt)||g.startsWith(k)){const y=u[s++];if(h.push(g),y!==void 0){const M=n.getAttribute(y.toLowerCase()+Yt).split(k),w=/([.?@])?(.*)/.exec(y);r.push({type:1,index:a,name:w[2],strings:M,ctor:w[1]==="."?oi:w[1]==="?"?si:w[1]==="@"?ri:Tt})}else r.push({type:6,index:a})}for(const g of h)n.removeAttribute(g)}if(Fe.test(n.tagName)){const h=n.textContent.split(k),g=h.length-1;if(g>0){n.textContent=K?K.emptyScript:"";for(let y=0;y<g;y++)n.append(h[y],Ct()),H.nextNode(),r.push({type:2,index:++a});n.append(h[g],Ct())}}}else if(n.nodeType===8)if(n.data===Be)r.push({type:2,index:a});else{let h=-1;for(;(h=n.data.indexOf(k,h+1))!==-1;)r.push({type:7,index:a}),h+=k.length-1}a++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}};function Y(o,t,e=o,i){var n,a,s,l;if(t===ut)return t;let r=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const c=ct(t)?void 0:t._$litDirective$;return r?.constructor!==c&&((a=r?._$AO)===null||a===void 0||a.call(r,!1),c===void 0?r=void 0:(r=new c(o),r._$AT(o,e,i)),i!==void 0?((s=(l=e)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=Y(o,r._$AS(o,t.values),r,i)),t}let ni=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,a=((e=t?.creationScope)!==null&&e!==void 0?e:z).importNode(i,!0);H.currentNode=a;let s=H.nextNode(),l=0,r=0,c=n[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new Oe(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new li(s,this,t)),this._$AV.push(u),c=n[++r]}l!==c?.index&&(s=H.nextNode(),l++)}return H.currentNode=z,a}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},Oe=class Le{constructor(t,e,i,n){var a;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(a=n?.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),ct(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==ut&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ei(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.$(z.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,a=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Zt.createElement(Re(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.v(i);else{const s=new ni(a,this),l=s.u(this.options);s.v(i),this.$(l),this._$AH=s}}_$AC(t){let e=ge.get(t.strings);return e===void 0&&ge.set(t.strings,e=new Zt(t)),e}T(t){Ue(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new Le(this.k(Ct()),this.k(Ct()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},Tt=class{constructor(t,e,i,n,a){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const a=this.strings;let s=!1;if(a===void 0)t=Y(this,t,e,0),s=!ct(t)||t!==this._$AH&&t!==ut,s&&(this._$AH=t);else{const l=t;let r,c;for(t=a[0],r=0;r<a.length-1;r++)c=Y(this,l[i+r],e,r),c===ut&&(c=this._$AH[r]),s||(s=!ct(c)||c!==this._$AH[r]),c===A?t=A:t!==A&&(t+=(c??"")+a[r+1]),this._$AH[r]=c}s&&!n&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},oi=class extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}};const ai=K?K.emptyScript:"";let si=class extends Tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,ai):this.element.removeAttribute(this.name)}},ri=class extends Tt{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){var i;if((t=(i=Y(this,t,e,0))!==null&&i!==void 0?i:A)===ut)return;const n=this._$AH,a=t===A&&n!==A||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==A&&(n===A||a);a&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},li=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}};const ve=wt.litHtmlPolyfillSupport;ve?.(Zt,Oe),((Ft=wt.litHtmlVersions)!==null&&Ft!==void 0?Ft:wt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=window,ne=At.ShadowRoot&&(At.ShadyCSS===void 0||At.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oe=Symbol(),ye=new WeakMap;let ze=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ne&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ye.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ye.set(e,t))}return t}toString(){return this.cssText}};const di=o=>new ze(typeof o=="string"?o:o+"",void 0,oe),v=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,n,a)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+o[a+1],o[0]);return new ze(e,o,oe)},ci=(o,t)=>{ne?o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=At.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,o.appendChild(i)})},fe=ne?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return di(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ht;const Et=window,$e=Et.trustedTypes,ui=$e?$e.emptyScript:"",be=Et.reactiveElementPolyfillSupport,Qt={toAttribute(o,t){switch(t){case Boolean:o=o?ui:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},qe=(o,t)=>t!==o&&(t==t||o==o),Ot={attribute:!0,type:String,converter:Qt,reflect:!1,hasChanged:qe},Xt="finalized";let W=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Ot){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const a=this[t];this[e]=n,this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ot}static finalize(){if(this.hasOwnProperty(Xt))return!1;this[Xt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(fe(n))}else t!==void 0&&e.push(fe(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return ci(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Ot){var n;const a=this.constructor._$Ep(t,i);if(a!==void 0&&i.reflect===!0){const s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Qt).toAttribute(e,i.type);this._$El=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,a=n._$Ev.get(t);if(a!==void 0&&this._$El!==a){const s=n.getPropertyOptions(a),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Qt;this._$El=a,this[a]=l.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||qe)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,a)=>this[a]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var a;return(a=n.hostUpdate)===null||a===void 0?void 0:a.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};W[Xt]=!0,W.elementProperties=new Map,W.elementStyles=[],W.shadowRootOptions={mode:"open"},be?.({ReactiveElement:W}),((Ht=Et.reactiveElementVersions)!==null&&Ht!==void 0?Ht:Et.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lt;const xt=window,Z=xt.trustedTypes,_e=Z?Z.createPolicy("lit-html",{createHTML:o=>o}):void 0,te="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,Ge="?"+N,hi=`<${Ge}>`,q=document,ht=()=>q.createComment(""),pt=o=>o===null||typeof o!="object"&&typeof o!="function",je=Array.isArray,pi=o=>je(o)||typeof o?.[Symbol.iterator]=="function",zt=`[ 	
\f\r]`,dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,Se=/>/g,R=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),we=/'/g,Ce=/"/g,Ve=/^(?:script|style|textarea|title)$/i,mi=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),p=mi(1),Q=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ee=new WeakMap,O=q.createTreeWalker(q,129,null,!1);function We(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(t):t}const gi=(o,t)=>{const e=o.length-1,i=[];let n,a=t===2?"<svg>":"",s=dt;for(let l=0;l<e;l++){const r=o[l];let c,u,h=-1,g=0;for(;g<r.length&&(s.lastIndex=g,u=s.exec(r),u!==null);)g=s.lastIndex,s===dt?u[1]==="!--"?s=Ae:u[1]!==void 0?s=Se:u[2]!==void 0?(Ve.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=R):u[3]!==void 0&&(s=R):s===R?u[0]===">"?(s=n??dt,h=-1):u[1]===void 0?h=-2:(h=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?R:u[3]==='"'?Ce:we):s===Ce||s===we?s=R:s===Ae||s===Se?s=dt:(s=R,n=void 0);const y=s===R&&o[l+1].startsWith("/>")?" ":"";a+=s===dt?r+hi:h>=0?(i.push(c),r.slice(0,h)+te+r.slice(h)+N+y):r+N+(h===-2?(i.push(void 0),l):y)}return[We(o,a+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class mt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let a=0,s=0;const l=t.length-1,r=this.parts,[c,u]=gi(t,e);if(this.el=mt.createElement(c,i),O.currentNode=this.el.content,e===2){const h=this.el.content,g=h.firstChild;g.remove(),h.append(...g.childNodes)}for(;(n=O.nextNode())!==null&&r.length<l;){if(n.nodeType===1){if(n.hasAttributes()){const h=[];for(const g of n.getAttributeNames())if(g.endsWith(te)||g.startsWith(N)){const y=u[s++];if(h.push(g),y!==void 0){const M=n.getAttribute(y.toLowerCase()+te).split(N),w=/([.?@])?(.*)/.exec(y);r.push({type:1,index:a,name:w[2],strings:M,ctor:w[1]==="."?yi:w[1]==="?"?$i:w[1]==="@"?bi:Pt})}else r.push({type:6,index:a})}for(const g of h)n.removeAttribute(g)}if(Ve.test(n.tagName)){const h=n.textContent.split(N),g=h.length-1;if(g>0){n.textContent=Z?Z.emptyScript:"";for(let y=0;y<g;y++)n.append(h[y],ht()),O.nextNode(),r.push({type:2,index:++a});n.append(h[g],ht())}}}else if(n.nodeType===8)if(n.data===Ge)r.push({type:2,index:a});else{let h=-1;for(;(h=n.data.indexOf(N,h+1))!==-1;)r.push({type:7,index:a}),h+=N.length-1}a++}}static createElement(t,e){const i=q.createElement("template");return i.innerHTML=t,i}}function X(o,t,e=o,i){var n,a,s,l;if(t===Q)return t;let r=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const c=pt(t)?void 0:t._$litDirective$;return r?.constructor!==c&&((a=r?._$AO)===null||a===void 0||a.call(r,!1),c===void 0?r=void 0:(r=new c(o),r._$AT(o,e,i)),i!==void 0?((s=(l=e)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=r:e._$Cl=r),r!==void 0&&(t=X(o,r._$AS(o,t.values),r,i)),t}class vi{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:n}=this._$AD,a=((e=t?.creationScope)!==null&&e!==void 0?e:q).importNode(i,!0);O.currentNode=a;let s=O.nextNode(),l=0,r=0,c=n[0];for(;c!==void 0;){if(l===c.index){let u;c.type===2?u=new $t(s,s.nextSibling,this,t):c.type===1?u=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(u=new _i(s,this,t)),this._$AV.push(u),c=n[++r]}l!==c?.index&&(s=O.nextNode(),l++)}return O.currentNode=q,a}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class $t{constructor(t,e,i,n){var a;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cp=(a=n?.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=X(this,t,e),pt(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==Q&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):pi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==f&&pt(this._$AH)?this._$AA.nextSibling.data=t:this.$(q.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:n}=t,a=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=mt.createElement(We(n.h,n.h[0]),this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.v(i);else{const s=new vi(a,this),l=s.u(this.options);s.v(i),this.$(l),this._$AH=s}}_$AC(t){let e=Ee.get(t.strings);return e===void 0&&Ee.set(t.strings,e=new mt(t)),e}T(t){je(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const a of t)n===e.length?e.push(i=new $t(this.k(ht()),this.k(ht()),this,this.options)):i=e[n],i._$AI(a),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Pt{constructor(t,e,i,n,a){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=a,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const a=this.strings;let s=!1;if(a===void 0)t=X(this,t,e,0),s=!pt(t)||t!==this._$AH&&t!==Q,s&&(this._$AH=t);else{const l=t;let r,c;for(t=a[0],r=0;r<a.length-1;r++)c=X(this,l[i+r],e,r),c===Q&&(c=this._$AH[r]),s||(s=!pt(c)||c!==this._$AH[r]),c===f?t=f:t!==f&&(t+=(c??"")+a[r+1]),this._$AH[r]=c}s&&!n&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class yi extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}const fi=Z?Z.emptyScript:"";class $i extends Pt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==f?this.element.setAttribute(this.name,fi):this.element.removeAttribute(this.name)}}class bi extends Pt{constructor(t,e,i,n,a){super(t,e,i,n,a),this.type=5}_$AI(t,e=this){var i;if((t=(i=X(this,t,e,0))!==null&&i!==void 0?i:f)===Q)return;const n=this._$AH,a=t===f&&n!==f||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==f&&(n===f||a);a&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class _i{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){X(this,t)}}const xe=xt.litHtmlPolyfillSupport;xe?.(mt,$t),((Lt=xt.litHtmlVersions)!==null&&Lt!==void 0?Lt:xt.litHtmlVersions=[]).push("2.8.0");const Ai=(o,t,e)=>{var i,n;const a=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let s=a._$litPart$;if(s===void 0){const l=(n=e?.renderBefore)!==null&&n!==void 0?n:null;a._$litPart$=s=new $t(t.insertBefore(ht(),l),l,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qt,Gt;class S extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ai(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Q}}S.finalized=!0,S._$litElement$=!0,(qt=globalThis.litElementHydrateSupport)===null||qt===void 0||qt.call(globalThis,{LitElement:S});const Me=globalThis.litElementPolyfillSupport;Me?.({LitElement:S});((Gt=globalThis.litElementVersions)!==null&&Gt!==void 0?Gt:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=o=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(o,t):((e,i)=>{const{kind:n,elements:a}=i;return{kind:n,elements:a,finisher(s){customElements.define(e,s)}}})(o,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=(o,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,o)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,o)}},wi=(o,t,e)=>{t.constructor.createProperty(e,o)};function m(o){return(t,e)=>e!==void 0?wi(o,t,e):Si(o,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=({finisher:o,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const a=(n=e.originalKey)!==null&&n!==void 0?n:e.key,s=t!=null?{kind:"method",placement:"prototype",key:a,descriptor:t(e.key)}:{...e,key:a};return o!=null&&(s.finisher=function(l){o(l,a)}),s}{const a=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),o?.(a,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $(o,t){return Ci({descriptor:e=>{const i={get(){var n,a;return(a=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(o))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var a,s;return this[n]===void 0&&(this[n]=(s=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(o))!==null&&s!==void 0?s:null),this[n]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jt;((jt=window.HTMLSlotElement)===null||jt===void 0?void 0:jt.prototype.assignedElements)!=null;const Ei="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let tt=class extends S{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return p`
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
          <a class="link" href=${Ei}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};tt.styles=v`
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
  `;d([m({type:String})],tt.prototype,"patronName",void 0);d([m({type:String})],tt.prototype,"baseHost",void 0);d([m({type:String})],tt.prototype,"defaultMonthlyDonationAmount",void 0);tt=d([E("ia-mgc-welcome")],tt);const xi=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Mi extends S{static get styles(){return v`
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
    `}render(){return xi}}customElements.define("ia-icon-donate",Mi);let et=class extends S{constructor(){super(...arguments),this.isDisabled=!1}render(){return p`
      <button
        ?disabled=${this.isDisabled}
        @click=${t=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(t,this))}}
      >
        <slot></slot>
      </button>
    `}};et.styles=v`
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
  `;d([m({type:Boolean,reflect:!0})],et.prototype,"isDisabled",void 0);d([m({type:Object})],et.prototype,"clickHandler",void 0);d([$("button")],et.prototype,"button",void 0);et=d([E("ia-button")],et);let gt=class extends S{constructor(){super(...arguments),this.plans=[],this.canEdit=!1}render(){return p`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(t=>{var e,i,n,a,s,l,r,c,u,h,g,y,M,w,U,bt,T,at;let st=(i=(e=t.payment)===null||e===void 0?void 0:e.paymentMethodType)!==null&&i!==void 0?i:"Method not found";st==="creditCard"&&(st="Credit card");const kt=(a=(n=t.payment)===null||n===void 0?void 0:n.cardType)!==null&&a!==void 0?a:"Card type not found",Nt=!((s=t.payment)===null||s===void 0)&&s.last4?`...${(l=t.payment)===null||l===void 0?void 0:l.last4}`:"CC number not found";return p`
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
                    <p>${st}</p>
                    ${((r=t.payment)===null||r===void 0?void 0:r.paymentMethodType)==="creditCard"?p`<p>${kt}</p>
                          <p>${Nt}</p>`:f}
                    ${((c=t.payment)===null||c===void 0?void 0:c.paymentMethodType)==="Paypal"?p`<p>
                          Paypal email:
                          <a href=${`mailto:${(u=t.payment)===null||u===void 0?void 0:u.paypalEmail}`}
                            >${(h=t.payment)===null||h===void 0?void 0:h.paypalEmail}</a
                          >
                        </p>`:f}
                    ${((g=t.payment)===null||g===void 0?void 0:g.paymentMethodType)==="Venmo"?p`<p>
                          Venmo username:
                          <a href=${`mailto:${(y=t.payment)===null||y===void 0?void 0:y.venmoUsername}`}
                            >${(M=t.payment)===null||M===void 0?void 0:M.paypalEmail}</a
                          >
                        </p>`:f}
                    ${((w=t.payment)===null||w===void 0?void 0:w.paymentMethodType)!=="creditCard"?p`<p>
                          Expires:
                          ${(bt=(U=t.payment)===null||U===void 0?void 0:U.expirationMonth)!==null&&bt!==void 0?bt:"month not found"}/${(at=(T=t.payment)===null||T===void 0?void 0:T.expirationYear)!==null&&at!==void 0?at:"year not found"}
                        </p>`:f}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${t.nextBillingDate}</p>
                  </div>
                </div>
                ${this.planCTA(t)}
              </li>
            `})}
        </ul>
      </section>
    `}planCTA(t){if(!this.canEdit)return p`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}>donations@archive.org</a>.
      </p>`;const e=t.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return p`<ia-button
      class="ia-button link edit-donation"
      .isDisabled=${t.plan.isCancelled}
      .clickHandler=${async(i,n)=>{n.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:t}}))}}
      >${e}</ia-button
    >`}};gt.styles=v`
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

    .email-edit-plan {
      margin-bottom: 0;
    }

    @media screen and (max-width: 500px) {
      ul li .info {
        display: block;
      }
    }
  `;d([m({type:Array})],gt.prototype,"plans",void 0);d([m({type:Boolean,reflect:!0})],gt.prototype,"canEdit",void 0);gt=d([E("ia-mgc-plans")],gt);let Mt=class extends S{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?p` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:f}render(){return p`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};Mt.styles=v`
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
  `;d([m({type:String})],Mt.prototype,"titleStyle",void 0);Mt=d([E("ia-mgc-title")],Mt);let vt=class extends S{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const n={...i},{id:a}=t;n[a]=t,this.receiptDispatcher={...n},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const s=CSS.escape(a),l=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${s} ia-button`);l.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return p`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],n=i?.emailStatus==="pending",a=!i||!i.emailStatus?f:p`<ia-mgc-update-status
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
                          .clickHandler=${async(s,l)=>{if(!n&&(l.isDisabled=!0,await l.updateComplete),!n&&(this.emailReceipt(t),this.receiptDispatcher)){const c={...this.receiptDispatcher};c[t.id].emailStatus="pending",this.receiptDispatcher=c}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </ia-button>
                        ${a}
                      </div>
                    </td>
                  </tr>
                `}):p`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};vt.styles=v`
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
  `;d([m({type:Array})],vt.prototype,"receipts",void 0);d([m({type:Object})],vt.prototype,"receiptDispatcher",void 0);vt=d([E("ia-mgc-receipts")],vt);var ee;(function(o){o.HideBadge="hidebadge",o.ShowBadge="showbadge",o.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(ee||(ee={}));let yt=class extends S{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=ee.ShowBadge}render(){return p`
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
    `}static get styles(){const t=v`var(--formSectionBadgeTransition, 0.25s ease-out)`,e=v`var(--formSectionBadgeMargin, 1rem)`,i=v`var(--formSectionBadgeBackgroundColor, #333)`,n=v`var(--formSectionBadgeRadius, 1.2rem)`,a=v`calc(${n} * 2)`,s=v`var(--formSectionBadgeFontSize, 1.8rem)`,l=v`var(--formSectionBadgeFontWeight, bold)`,r=v`var(--formSectionBadgeFontColor, #fff)`,c=v`var(--formSectionTitleFontSize, 1.8rem)`,u=v`var(--formSectionTitleFontWeight, bold)`,h=v`var(--formSectionContentBackgroundColor, transparent)`,g=v`var(--formSectionTextColor, #333)`,y=v`calc(${n} * 2)`;return v`
      :host {
        display: block;
        background-color: ${h};
        color: ${g};
      }
      .container {
        position: relative;
        padding: 0.5rem;
      }

      .content-container {
        position: relative;
        left: calc(${a} + ${e});
        width: calc(100% - (${a} + ${e}));
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
        width: ${a};
      }

      .badge {
        background-color: ${i};
        color: ${r};
        width: ${a};
        height: ${a};
        border-radius: ${n};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${l};
        font-size: ${s};
      }

      .title {
        line-height: ${y};
        margin-bottom: 0.5rem;
        font-size: ${c};
        font-weight: ${u};
      }
    `}};d([m({type:String})],yt.prototype,"sectionBadge",void 0);d([m({type:String})],yt.prototype,"headline",void 0);d([m({type:String})],yt.prototype,"badgeMode",void 0);yt=d([E("donation-form-section")],yt);class Di{constructor(t){this.streetAddress=t?.streetAddress,this.extendedAddress=t?.extendedAddress,this.locality=t?.locality,this.region=t?.region,this.postalCode=t?.postalCode,this.countryCodeAlpha2=t?.countryCodeAlpha2}}class Ii{constructor(t){this.email=t?.email,this.firstName=t?.firstName,this.lastName=t?.lastName}}class Ti{constructor(t){this.customer=t.customer,this.billing=t.billing}}var De;(function(o){o.CreditCard="Credit Card",o.PayPal="PayPal",o.GooglePay="Google Pay",o.Venmo="Venmo",o.ApplePay="Apple Pay"})(De||(De={}));class D{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return D.calculateFeeAmount(this.amount)}get total(){return D.calculateTotal(this.amount,this.coverFees)}static calculateTotal(t,e){const i=e?this.calculateFeeAmount(t):0,n=t+i;return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(t){const e=t*.02+.49;return isNaN(e)?0:this.roundAmount(e)}static roundAmount(t){return Math.round(t*100)/100}constructor(t){this.donationType=t.donationType,this.amount=t.amount,this.coverFees=t.coverFees}}var J;(function(o){o.OneTime="one-time",o.Monthly="monthly",o.Upsell="up_sell"})(J||(J={}));new D({donationType:J.OneTime,amount:10,coverFees:!1});let Dt=class extends S{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?p`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:f}};Dt.styles=v`
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
  `;d([m({type:String})],Dt.prototype,"status",void 0);Dt=d([E("ia-mgc-update-status")],Dt);let x=class extends S{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(t){t.has("plan")&&this.plan&&this.captureAmountChanges(),t.has("coverFees")&&this.captureAmountChanges(),t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),t.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var t;return p`
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
                  .clickHandler=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                >
                  Edit...
                </ia-button>`}
          ${this.currentlyEditing?this.editAmountForm:f}
        </donation-form-section>
      </section>
    `}async amountUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Amount updated":"Failed. Try again.",t==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=t,this.updateMessage="Amount updated";return}this.form.querySelector("ia-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(t){var e,i,n,a,s;t.preventDefault();const l=this.form.querySelector('input[name="amount"]');this.newAmount=Number(l.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(e=this.plan)===null||e===void 0?void 0:e.plan.amount,display:(i=this.donationPaymentInfo)===null||i===void 0?void 0:i.amount});const r=Number(D.calculateTotal(Number((n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:r,baseAmount:(a=this.donationPaymentInfo)===null||a===void 0?void 0:a.amount,coverFees:this.coverFees,feeCovered:(s=this.donationPaymentInfo)===null||s===void 0?void 0:s.feeAmountCovered}}))}captureAmountChanges(t){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new D({donationType:J.Monthly,amount:0,coverFees:!0});return}let e;if(t)e=new D({donationType:J.Monthly,amount:t,coverFees:!0});else{const i=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;e=new D({donationType:J.Monthly,amount:i,coverFees:!0})}this.donationPaymentInfo=e}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const t=this.form.querySelector('input[name="amount"]');t.value="",this.newAmount=0,this.donationPaymentInfo=void 0}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:D.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){var t;return`I'll generously add $${(t=this.donationPaymentInfo)===null||t===void 0?void 0:t.feeAmountCovered} to cover fees.`}get editAmountForm(){var t;return p`
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
                .clickHandler=${async(e,i)=>{var n;if(this.clearStatusMessaging(),!this.newAmount){this.errorMessage="Please enter a new amount";return}i.isDisabled=!0,await i.updateComplete;const a=this.form.querySelector('input[name="amount"]'),s=(n=Number(a.value))!==null&&n!==void 0?n:0,l=s<1,r=s>=9999;if(l&&(this.errorMessage="Please enter a valid amount"),r&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),r||l){i.isDisabled=!1,await i.updateComplete;return}this.requestAmountUpdate(e)}}
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
    `}};x.styles=v`
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
  `;d([m({type:Object})],x.prototype,"plan",void 0);d([m({type:Object})],x.prototype,"donationPaymentInfo",void 0);d([m({type:Number})],x.prototype,"newAmount",void 0);d([m({type:Boolean,reflect:!0})],x.prototype,"currentlyEditing",void 0);d([m({type:Boolean})],x.prototype,"coverFees",void 0);d([m({type:String})],x.prototype,"updateMessage",void 0);d([m({type:String})],x.prototype,"errorMessage",void 0);d([m({type:String})],x.prototype,"updateStatus",void 0);d([$("form")],x.prototype,"form",void 0);x=d([E("ia-mgc-edit-plan-amount")],x);let C=class extends S{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(t){this.dateInput&&t.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(t){t.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus()}render(){var t;return p`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?f:p` <p class="current-date">
                  ${(t=this.plan)===null||t===void 0?void 0:t.nextBillingDate}
                  <ia-mgc-update-status .status=${this.updateStatus}
                    >${this.updateMessage}</ia-mgc-update-status
                  >
                </p>
                <ia-button
                  id="edit-date"
                  class="ia-button link"
                  .clickHandler=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                >
                  Edit...
                </ia-button>`}
          ${this.currentlyEditing?this.editDateForm:f}
        </donation-form-section>
      </section>
    `}async dateUpdated(t){if(this.clearInputField(),this.updateStatus=t,this.updateMessage=t==="success"?"Date updated":"Failed to update date, please try again",t==="success"){this.closeForm(),await this.updateComplete;return}this.form.querySelector("ia-button#edit-date").isDisabled=!1,await this.updateComplete}requestDateUpdate(t){t.preventDefault(),console.log("<plan-date> - requestDateUpdate",{newValue:this.newDate}),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1}clearInputField(){const t=this.form.querySelector('input[name="edit-date"]');t.value="",this.newDate=void 0}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}get minDate(){const t=new Date,e=new Date(t);e.setDate(t.getDate()+1);const i=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0");return`${i}-${n}-${e.getDate()}`}get maxDate(){const t=new Date,e=t.getFullYear()+1,i=String(t.getMonth()+1).padStart(2,"0"),n=new Date(e,t.getMonth()+1,0).getDate();return`${e}-${i}-${n}`}get editDateForm(){var t,e,i,n;return console.log("editdate",{min:this.minDate,max:this.maxDate,plan:this.plan,nextBillingDate:(t=this.plan)===null||t===void 0?void 0:t.nextBillingDate,lastBillingDate:(e=this.plan)===null||e===void 0?void 0:e.lastBillingDateLocale}),p`
      <section>
        <form id="edit-date">
          <p>Last donation date: ${(i=this.plan)===null||i===void 0?void 0:i.lastBillingDateLocale}</p>

          <p>Next donation date: ${(n=this.plan)===null||n===void 0?void 0:n.nextBillingDate}</p>
          <div class="date-holder">
            <input
              type="date"
              id="edit-date"
              name="edit-date"
              min=${this.minDate}
              max=${this.maxDate}
              value=""
              @focus=${()=>this.clearStatusMessaging()}
              @change=${async a=>{var s,l,r,c,u;if(this.clearStatusMessaging(),await this.updateComplete,console.log("date changed",a.target.value),console.log("date changed THIS",this),!a.target.value){this.errorMessage="Please enter a date",this.allowEditing=!0;return}let g;try{g=new Date((s=a.target)===null||s===void 0?void 0:s.value)}catch(T){console.error("Invalid date format:",T),this.errorMessage="Please enter a valid date format (YYYY-MM-DD)";return}const y=new Date;y.setHours(0,0,0,0);const M=new Date(y);M.setDate(y.getDate()+1),M.setHours(0,0,0,0);const w=new Date(g);if(w.setHours(0,0,0,0),w<y){this.errorMessage="Date must be at least tomorrow.",this.allowEditing=!1;return}console.log("validDate",g);const U=new Date(g).toISOString();if(this.newDate=U,console.log("newDate",U),((l=this.plan)===null||l===void 0?void 0:l.payment.lastBillingDate.date)&&new Date((r=this.plan)===null||r===void 0?void 0:r.payment.lastBillingDate.date)){const T=new Date((u=(c=this.plan)===null||c===void 0?void 0:c.payment.lastBillingDate.date)!==null&&u!==void 0?u:""),at=T.getMonth(),st=T.getFullYear(),kt=g.getFullYear(),Nt=g.getMonth();if(kt===st&&Nt===at){this.warningMessage="You have already made a donation this month. Is that cool with you?",this.allowEditing=!0;return}}console.log("newDate",U),this.allowEditing=!0}}
            />
          </div>
          <div>
            <div class="cta-container">
              <ia-button
                class="ia-button secondary"
                .clickHandler=${a=>{a.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-button>
              <ia-button
                id="edit-date"
                class="ia-button primary"
                type="submit"
                .isDisabled=${!this.allowEditing}
                .clickHandler=${async(a,s)=>{if(this.clearStatusMessaging(),!this.newDate){this.errorMessage="Please enter a valid date";return}s.isDisabled=!0,await s.updateComplete,this.requestDateUpdate(a)}}
              >
                Update
              </ia-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error">${this.warningMessage}</p>
          <p class="error">${this.errorMessage}</p>
        </form>
      </section>
    `}};C.styles=v`
    input[name='edit-date'] {
      margin: 10px 0;
      min-width: 140px;
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
  `;d([m({type:Object})],C.prototype,"plan",void 0);d([m({type:String})],C.prototype,"newDate",void 0);d([m({type:Boolean,reflect:!0})],C.prototype,"currentlyEditing",void 0);d([m({type:Boolean})],C.prototype,"allowEditing",void 0);d([m({type:String})],C.prototype,"updateMessage",void 0);d([m({type:String})],C.prototype,"errorMessage",void 0);d([m({type:String})],C.prototype,"warningMessage",void 0);d([m({type:String})],C.prototype,"updateStatus",void 0);d([$("form")],C.prototype,"form",void 0);d([$("form ia-button#edit-date")],C.prototype,"formSubmitButton",void 0);d([$('form input[name="edit-date"]')],C.prototype,"dateInput",void 0);C=d([E("ia-mgc-edit-date")],C);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ie=o=>o??A;var L;(function(o){o.LeaveSpace="leave-space",o.CompressSpace="compress-space"})(L||(L={}));let G=class extends S{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=L.LeaveSpace,this.requiredIndicatorSpaceOption=L.LeaveSpace}render(){return p`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?p` * `:f}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===L.CompressSpace?"compress-space":""}static get styles(){const t=v`var(--inputBorder, 1px solid #d9d9d9)`,e=v`var(--badgedInputBorderErrorColor, red)`,i=v`var(--badgedInputIconSize, 1.4rem)`,n=v`var(--badgedInputIconSpacerWidth, 3rem)`,a=v`var(--badgedInputNoIconSpacerWidth, 1rem)`,s=v`var(--badgedInputHeight, 3rem)`,l=v`var(--badgedInputRequiredIndicatorColor, red)`,r=v`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,c=v`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return v`
      .input-wrapper {
        border: ${t};
        height: ${s};
        display: flex;
        align-items: center;
      }

      .input-wrapper.error {
        box-shadow: inset 0px 0px 0px 1px ${e};
        border-color: ${e};
      }

      .input-wrapper.compress-space .icon-container {
        width: ${a};
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
        font-size: ${c};
        margin: ${r};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};d([m({type:Boolean})],G.prototype,"error",void 0);d([m({type:Object})],G.prototype,"icon",void 0);d([m({type:Boolean})],G.prototype,"required",void 0);d([m({type:String})],G.prototype,"iconSpaceOption",void 0);d([m({type:String})],G.prototype,"requiredIndicatorSpaceOption",void 0);G=d([E("badged-input")],G);const Pi=p`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`,ki=p`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`,Ni=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,Te={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let _=class extends S{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(t){var e;t.has("donorEmail")&&(this.emailField.value=(e=this.donorEmail)!==null&&e!==void 0?e:"")}reportValidity(){const t=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let e=!0;return t.forEach(([i,n])=>{const a=i.checkValidity();e=e&&a,a||(n.error=!0)}),e?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",e}focus(){this.emailField.focus()}render(){return p`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:Pi})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:Ni})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:ki,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:L.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return p`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${t=>{var e,i,n,a,s,l,r,c,u,h;const g=this.selectedCountry;this.selectedCountry=!((e=t.target)===null||e===void 0)&&e.value?(i=t.target)===null||i===void 0?void 0:i.value:g,this.selectedCountry==="US"?((n=this.postalBadgedInput)===null||n===void 0||n.setAttribute("required",""),(a=this.postalCodeField)===null||a===void 0||a.setAttribute("required",""),(s=this.regionBadgedInput)===null||s===void 0||s.setAttribute("required",""),(l=this.regionField)===null||l===void 0||l.setAttribute("required","")):((r=this.postalBadgedInput)===null||r===void 0||r.removeAttribute("required"),(c=this.postalCodeField)===null||c===void 0||c.removeAttribute("required"),(u=this.regionBadgedInput)===null||u===void 0||u.removeAttribute("required"),(h=this.regionField)===null||h===void 0||h.removeAttribute("required"))}}
        >
          ${Object.keys(Te).map(t=>{const e=Te[t];return p`
              <option value=${t} ?selected=${t===this.selectedCountry}>${e}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(t){this.errorMessage.innerText="";const i=t.target.id,n=this.querySelector(`badged-input.${i}`);n.error=!1}generateInput(t){var e,i,n,a;const s=(e=t.required)!==null&&e!==void 0?e:!0,l=(i=t.fieldType)!==null&&i!==void 0?i:"text",r=(n=t.iconSpaceOption)!==null&&n!==void 0?n:L.LeaveSpace;return p`
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
          maxlength=${Ie(t.maxlength)}
          autocomplete=${(a=t.autocomplete)!==null&&a!==void 0?a:"on"}
          pattern=${Ie(t.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${s}
        />
      </badged-input>
    `}get donorContactInfo(){return new Ti({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new Di({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new Ii({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const t=v`var(--badgedInputNoIconSpacerWidth, 3rem)`,e=v`var(--badgedInputIconSpacerWidth, 5rem)`,i=v`var(--fieldSetSpacing, 1rem)`,n=v`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,a=v`var(--contactFieldFontSize, 1.6rem)`,s=v`var(--inputFieldFontColor, #333)`,l=v`calc(100% - ${e})`,r=v`calc(100% - ${t})`;return p`
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
          color: ${s};
          font-size: ${a};
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
          font-size: ${a};
          font-family: ${n};
          border: 0;
          background: #fff;
        }
      </style>
    `}};d([$("badged-input.donation-contact-form-email")],_.prototype,"emailBadgedInput",void 0);d([$("#donation-contact-form-email")],_.prototype,"emailField",void 0);d([$("badged-input.donation-contact-form-first-name")],_.prototype,"firstNameBadgedInput",void 0);d([$("#donation-contact-form-first-name")],_.prototype,"firstNameField",void 0);d([$("badged-input.donation-contact-form-last-name")],_.prototype,"lastNameBadgedInput",void 0);d([$("#donation-contact-form-last-name")],_.prototype,"lastNameField",void 0);d([$("badged-input.donation-contact-form-postal-code")],_.prototype,"postalBadgedInput",void 0);d([$("#donation-contact-form-postal-code")],_.prototype,"postalCodeField",void 0);d([$("badged-input.donation-contact-form-street-address")],_.prototype,"streetAddressBadgedInput",void 0);d([$("#donation-contact-form-street-address")],_.prototype,"streetAddressField",void 0);d([$("badged-input.donation-contact-form-extended-address")],_.prototype,"extendedAddressBadgedInput",void 0);d([$("#donation-contact-form-extended-address")],_.prototype,"extendedAddressField",void 0);d([$("badged-input.donation-contact-form-locality")],_.prototype,"localityBadgedInput",void 0);d([$("#donation-contact-form-locality")],_.prototype,"localityField",void 0);d([$("badged-input.donation-contact-form-region")],_.prototype,"regionBadgedInput",void 0);d([$("#donation-contact-form-region")],_.prototype,"regionField",void 0);d([$("#donation-contact-form-countryCodeAlpha2")],_.prototype,"countryCodeAlpha2Field",void 0);d([$("#donation-contact-form-error-message")],_.prototype,"errorMessage",void 0);d([$("form")],_.prototype,"form",void 0);d([m({type:String})],_.prototype,"selectedCountry",void 0);d([m({type:String})],_.prototype,"donorEmail",void 0);_=d([E("contact-form")],_);let j=class extends S{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(t){t.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(t){t.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var t;return`cancel-donation-form-${(t=this.plan)===null||t===void 0?void 0:t.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:p`
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
    `}};j.styles=v`
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
  `;d([m({type:Object})],j.prototype,"plan",void 0);d([m({type:Boolean,reflect:!0})],j.prototype,"patronWantsToKeepPlan",void 0);d([m({type:Boolean,reflect:!0})],j.prototype,"initialCancelRequest",void 0);d([$("form")],j.prototype,"form",void 0);j=d([E("ia-mgc-cancel-plan")],j);let ft=class extends S{createRenderRoot(){return this}amountUpdates(t){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(t)}dateUpdates(t){this.querySelector("ia-mgc-edit-date").dateUpdated(t)}render(){return p`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${t=>{var e;const{amount:i,baseAmount:n,coverFees:a,feeCovered:s}=t.detail;this.plan&&((e=this.updateAmountHandler)===null||e===void 0||e.call(this,this.plan,{amount:i,baseAmount:n,coverFees:a,feeCovered:s}))}}
        ></ia-mgc-edit-plan-amount>
        <hr />
        <ia-mgc-edit-date
          @updateDate=${t=>{const{newDate:e}=t.detail;this.plan&&this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:e}}))}}
          .plan=${this.plan}
        ></ia-mgc-edit-date>
        <hr />
        <ia-mgc-cancel-plan
          .plan=${this.plan}
          @cancelPlan=${()=>{var t;this.plan&&((t=this.cancelPlanHandler)===null||t===void 0||t.call(this,this.plan))}}
        ></ia-mgc-cancel-plan>
        <hr />
        <p class="email-edit-plan">
          Need to update your plan further? Please email us at
          <a href=${this.mailToText}>donations@archive.org</a>.
        </p>
      </section>
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};d([m({type:Object})],ft.prototype,"plan",void 0);d([m({type:Object})],ft.prototype,"cancelPlanHandler",void 0);d([m({type:Object})],ft.prototype,"updateAmountHandler",void 0);ft=d([E("ia-mgc-edit-plan")],ft);var P;(function(o){o.welcome="ShowWelcome",o.receipts="ShowReceipts",o.plans="ShowPlans",o.editPlan="ShowEditForm"})(P||(P={}));let I=class extends S{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!1}createRenderRoot(){return this}updated(t){t.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(t){var e;this.updates.unshift(t);const{plan:i,donationId:n=""}=t,a=(e=i?.id)!==null&&e!==void 0?e:n;if(t.action==="amountUpdate"){this.editFormElement.amountUpdates(t.status);return}if(t.action==="dateUpdate"){this.editingThisPlan=i,this.editFormElement.dateUpdates(t.status);return}if(t.action==="cancel"||i?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:a,emailStatus:t.status})}render(){const t=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return p`
      ${this.sectionTitle}
      ${t?p`<ia-mgc-edit-plan
            .plan=${this.editingThisPlan}
            .cancelPlanHandler=${e=>{console.log("cancelPlan",e),this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:e}}))}}
            .updateAmountHandler=${(e,i)=>{console.log("updateAmount",e,{...i}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:e,amountOptions:i}}))}}
            @updateDate=${e=>{const{newDate:i}=e.detail;console.log("updateDate",i),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.editingThisPlan,newDate:i}}))}}
          ></ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let t="",e="",i=p``;const n=p`
      <ia-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(P.receipts))}}
      >
        View recent donation history
      </ia-button>
    `,a=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":t="Recent donations",e="default",i=p`<ia-button
          class="link slim"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const s=this.plans.length?P.plans:P.welcome;this.dispatchEvent(new Event(s)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-button>`;break;case"editPlan":t="Monthly Giving Circle",e="default",i=p`<ia-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const s=this.plans.length?P.plans:P.welcome;this.dispatchEvent(new Event(s)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-button>`;break;default:t="Monthly Giving Circle",e="heart",a&&(i=n);break}return p`
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
              @editThisPlan=${async t=>{this.editingThisPlan=t.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(P.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:p`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};d([m({type:String})],I.prototype,"patronName",void 0);d([m({type:Array})],I.prototype,"receipts",void 0);d([m({type:Array})],I.prototype,"updates",void 0);d([m({type:Array})],I.prototype,"plans",void 0);d([m({type:Object})],I.prototype,"editingThisPlan",void 0);d([m({type:String,reflect:!0})],I.prototype,"viewToDisplay",void 0);d([m({type:Boolean,reflect:!0})],I.prototype,"canEdit",void 0);I=d([E("ia-monthly-giving-circle")],I);class Vt{constructor(t){this.receipt=t}get amountFormatted(){var t,e;const i=(t=this.receipt.total_amount)!==null&&t!==void 0?t:this.receipt.net_amount,n=(e=this.receipt.currency)!==null&&e!==void 0?e:"CURR not found";return i?`${n} ${this.currencySymbol}${i}`:"no amount found, can't find total_amount or net_amount"}get amount(){var t,e;return(e=(t=`${this.receipt.total_amount}`)!==null&&t!==void 0?t:`${this.receipt.net_amount}`)!==null&&e!==void 0?e:"no amount found, can't find total_amount or net_amount"}get isTest(){var t;return(t=this.receipt.isTest)!==null&&t!==void 0?t:!1}get id(){var t;return(t=this.receipt.token)!==null&&t!==void 0?t:"no token found"}get date(){var t;return(t=this.receipt.date)!==null&&t!==void 0?t:"no date found"}get currencySymbol(){return this.receipt.currency==="USD"?"$":""}}class Bi{constructor(t){var e;this.plan=t,this.payment=t.btdata,this.currency=(e=t.currency)!==null&&e!==void 0?e:"USD"}get id(){return this.plan.token}get currencySymbol(){return this.currency==="USD"?"$":""}get amount(){return this.plan.amount}setAmount(t){this.plan.oldAmount=this.plan.amount,this.plan.amount=t}setNextBillingDate(t){this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=t}get startDate(){return new Date(this.plan.start_date).toLocaleDateString()}get nextBillingDate(){const t=new Date(this.payment.nextBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return t??"not found"}get lastBillingDateLocale(){const t=new Date(this.payment.lastBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return console.log("lastBillingDate from model",t),t??"not found"}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}}let B=[];const it=new Date;it.setDate(it.getDate()+25);it.setMinutes(0);it.setSeconds(0);it.setMilliseconds(0);console.log("nextPaymentIn25Days",it.toISOString());const V=new Date;V.setMinutes(0);V.setSeconds(0);V.setMilliseconds(0);V.setDate(1);console.log("lastPaymentInTheSameMonth",V.toISOString());const It=new Date;It.setMonth(It.getMonth()+1);const ot=new Date(It);ot.setMinutes(0);ot.setSeconds(0);ot.setMilliseconds(0);ot.setDate(1);console.log("nextPaymentFirstOfMonth",ot.toISOString());const Pe={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:V.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:It.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:V.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:ot.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},Je=Object.keys(Pe).map(o=>new Bi(Pe[o])),Ke=[new Vt({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new Vt({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new Vt({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})];let Wt=!0;const nt=document.getElementById("interaction-status-area"),ae=()=>Math.floor(Math.random()+.5),b=document.querySelector("ia-monthly-giving-circle");b.receipts=Ke;b.plans=Je;b.addEventListener("EmailReceiptRequest",o=>{const{donation:t}=o.detail,e=ae()===1,i=e?"success":"fail",n=e?3e3:8e3;nt.innerText=`Email receipt request for donation ${t.id} will return ${i} in ${n} ms.`;const s={message:i==="success"?"Email receipt sent":"Email receipt failed",status:i,donationId:t.id};B=[s,...B],setTimeout(()=>{b.updateReceived(s),console.log("EmailReceiptRequest index.html ----",s),nt.innerText=""},n)});b.addEventListener("cancelPlan",async o=>{const{plan:t}=o.detail,i=b.plans.map(n=>(n.plan.token===t.plan.token&&(console.log("p 2 plan",n,t),n.cancelPlan()),n));b.plans=i,await b.updateComplete,console.log("plan cancelled & plan list updated",b.plans)});b.addEventListener("updateAmount",async o=>{const{plan:t,amountOptions:e}=o.detail,i=ae()===1,n=i?"success":"fail",a=i?1500:5e3;nt.innerText=`Amount Update Request received: will return ${n} in ${a} ms - Details: ${JSON.stringify(e)}`;const s=n==="success"?"Amount updated":"Amount failed to update";i&&t.setAmount(e.amount);const l={message:s,status:n,plan:t,donationId:t.id,action:"amountUpdate"};B=[l,...B],setTimeout(()=>{b.updateReceived(l),console.log("Amount Update Request --- index.html ----",l),nt.innerText=""},a)});b.addEventListener("updateDate",o=>{const{newDate:t,plan:e}=o.detail,i=ae()===1,n=i?"success":"fail",a=i?3e3:8e3;nt.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(e.id)} -- Update will return ${n} in ${a} ms`;const s=n==="success"?"Date updated":"Date failed to update";i&&e.setNextBillingDate(t);const l={message:s,status:n,plan:e,donationId:e.id,action:"dateUpdate"};B=[l,...B],setTimeout(()=>{b.updateReceived(l),console.log("Amount Update Request --- index.html ----",l),nt.innerText=""},a)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(Wt){b.receipts=[],Wt=!1;return}b.receipts=Ke,await b.updateComplete,Wt=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{B=[],b.updates=B,await b.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{b.plans=b.plans.length?[]:Je,await b.updateComplete});document.getElementById("toggle-editable-perms").addEventListener("click",async()=>{b.canEdit=!b.canEdit,await b.updateComplete});
