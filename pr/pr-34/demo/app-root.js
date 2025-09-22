(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function s(i,e,t,n){var o=arguments.length,a=o<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var d=i.length-1;d>=0;d--)(r=i[d])&&(a=(o<3?r(a):o>3?r(e,t,a):r(e,t))||a);return o>3&&a&&Object.defineProperty(e,t,a),a}function g(i,e,t,n){function o(a){return a instanceof t?a:new t(function(r){r(a)})}return new(t||(t=Promise))(function(a,r){function d(u){try{c(n.next(u))}catch(v){r(v)}}function l(u){try{c(n.throw(u))}catch(v){r(v)}}function c(u){u.done?a(u.value):o(u.value).then(d,l)}c((n=n.apply(i,e||[])).next())})}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=window,qt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xn=Symbol(),Zt=new WeakMap;let ao=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==xn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(qt&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Zt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Zt.set(t,e))}return e}toString(){return this.cssText}};const ro=i=>new ao(typeof i=="string"?i:i+"",void 0,xn),so=(i,e)=>{qt?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),o=it.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)})},Qt=qt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ro(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ct;const st=window,Xt=st.trustedTypes,lo=Xt?Xt.emptyScript:"",en=st.reactiveElementPolyfillSupport,Tt={toAttribute(i,e){switch(e){case Boolean:i=i?lo:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Dn=(i,e)=>e!==i&&(e==e||i==i),wt={attribute:!0,type:String,converter:Tt,reflect:!1,hasChanged:Dn},kt="finalized";let Re=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const o=this._$Ep(n,t);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,t=wt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wt}static finalize(){if(this.hasOwnProperty(kt))return!1;this[kt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of n)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(Qt(o))}else e!==void 0&&t.push(Qt(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return so(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=wt){var o;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const r=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Tt).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(e,t){var n;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const r=o.getPropertyOptions(a),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:Tt;this._$El=a,this[a]=d.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Dn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Re[kt]=!0,Re.elementProperties=new Map,Re.elementStyles=[],Re.shadowRootOptions={mode:"open"},en?.({ReactiveElement:Re}),((Ct=st.reactiveElementVersions)!==null&&Ct!==void 0?Ct:st.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const lt=window,Me=lt.trustedTypes,tn=Me?Me.createPolicy("lit-html",{createHTML:i=>i}):void 0,Bt="$lit$",ee=`lit$${(Math.random()+"").slice(9)}$`,Tn="?"+ee,co=`<${Tn}>`,ge=document,dt=()=>ge.createComment(""),qe=i=>i===null||typeof i!="object"&&typeof i!="function",kn=Array.isArray,uo=i=>kn(i)||typeof i?.[Symbol.iterator]=="function",St=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nn=/-->/g,on=/>/g,se=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),an=/'/g,rn=/"/g,Bn=/^(?:script|style|textarea|title)$/i,je=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),sn=new WeakMap,he=ge.createTreeWalker(ge,129,null,!1);function Ln(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tn!==void 0?tn.createHTML(e):e}const ho=(i,e)=>{const t=i.length-1,n=[];let o,a=e===2?"<svg>":"",r=Oe;for(let d=0;d<t;d++){const l=i[d];let c,u,v=-1,y=0;for(;y<l.length&&(r.lastIndex=y,u=r.exec(l),u!==null);)y=r.lastIndex,r===Oe?u[1]==="!--"?r=nn:u[1]!==void 0?r=on:u[2]!==void 0?(Bn.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=se):u[3]!==void 0&&(r=se):r===se?u[0]===">"?(r=o??Oe,v=-1):u[1]===void 0?v=-2:(v=r.lastIndex-u[2].length,c=u[1],r=u[3]===void 0?se:u[3]==='"'?rn:an):r===rn||r===an?r=se:r===nn||r===on?r=Oe:(r=se,o=void 0);const f=r===se&&i[d+1].startsWith("/>")?" ":"";a+=r===Oe?l+co:v>=0?(n.push(c),l.slice(0,v)+Bt+l.slice(v)+ee+f):l+ee+(v===-2?(n.push(void 0),d):f)}return[Ln(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};let Lt=class Hn{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,r=0;const d=e.length-1,l=this.parts,[c,u]=ho(e,t);if(this.el=Hn.createElement(c,n),he.currentNode=this.el.content,t===2){const v=this.el.content,y=v.firstChild;y.remove(),v.append(...y.childNodes)}for(;(o=he.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const v=[];for(const y of o.getAttributeNames())if(y.endsWith(Bt)||y.startsWith(ee)){const f=u[r++];if(v.push(y),f!==void 0){const I=o.getAttribute(f.toLowerCase()+Bt).split(ee),$=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:$[2],strings:I,ctor:$[1]==="."?mo:$[1]==="?"?go:$[1]==="@"?yo:vt})}else l.push({type:6,index:a})}for(const y of v)o.removeAttribute(y)}if(Bn.test(o.tagName)){const v=o.textContent.split(ee),y=v.length-1;if(y>0){o.textContent=Me?Me.emptyScript:"";for(let f=0;f<y;f++)o.append(v[f],dt()),he.nextNode(),l.push({type:2,index:++a});o.append(v[y],dt())}}}else if(o.nodeType===8)if(o.data===Tn)l.push({type:2,index:a});else{let v=-1;for(;(v=o.data.indexOf(ee,v+1))!==-1;)l.push({type:7,index:a}),v+=ee.length-1}a++}}static createElement(e,t){const n=ge.createElement("template");return n.innerHTML=e,n}};function Pe(i,e,t=i,n){var o,a,r,d;if(e===je)return e;let l=n!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[n]:t._$Cl;const c=qe(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((a=l?._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=Pe(i,l._$AS(i,e.values),l,n)),e}let po=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:ge).importNode(n,!0);he.currentNode=a;let r=he.nextNode(),d=0,l=0,c=o[0];for(;c!==void 0;){if(d===c.index){let u;c.type===2?u=new Nn(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new fo(r,this,e)),this._$AV.push(u),c=o[++l]}d!==c?.index&&(r=he.nextNode(),d++)}return he.currentNode=ge,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Nn=class Rn{constructor(e,t,n,o){var a;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),qe(e)?e===D||e==null||e===""?(this._$AH!==D&&this._$AR(),this._$AH=D):e!==this._$AH&&e!==je&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):uo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==D&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.$(ge.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Lt.createElement(Ln(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const r=new po(a,this),d=r.u(this.options);r.v(n),this.$(d),this._$AH=r}}_$AC(e){let t=sn.get(e.strings);return t===void 0&&sn.set(e.strings,t=new Lt(e)),t}T(e){kn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new Rn(this.k(dt()),this.k(dt()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},vt=class{constructor(e,t,n,o,a){this.type=1,this._$AH=D,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const a=this.strings;let r=!1;if(a===void 0)e=Pe(this,e,t,0),r=!qe(e)||e!==this._$AH&&e!==je,r&&(this._$AH=e);else{const d=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=Pe(this,d[n+l],t,l),c===je&&(c=this._$AH[l]),r||(r=!qe(c)||c!==this._$AH[l]),c===D?e=D:e!==D&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}r&&!o&&this.j(e)}j(e){e===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},mo=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===D?void 0:e}};const vo=Me?Me.emptyScript:"";let go=class extends vt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==D?this.element.setAttribute(this.name,vo):this.element.removeAttribute(this.name)}},yo=class extends vt{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Pe(this,e,t,0))!==null&&n!==void 0?n:D)===je)return;const o=this._$AH,a=e===D&&o!==D||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==D&&(o===D||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}},fo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};const ln=lt.litHtmlPolyfillSupport;ln?.(Lt,Nn),(($t=lt.litHtmlVersions)!==null&&$t!==void 0?$t:lt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=window,jt=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Gt=Symbol(),dn=new WeakMap;let On=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jt&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=dn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&dn.set(t,e))}return e}toString(){return this.cssText}};const bo=i=>new On(typeof i=="string"?i:i+"",void 0,Gt),m=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,o,a)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new On(t,i,Gt)},Co=(i,e)=>{jt?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),o=at.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,i.appendChild(n)})},cn=jt?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return bo(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mt;const ct=window,un=ct.trustedTypes,wo=un?un.emptyScript:"",hn=ct.reactiveElementPolyfillSupport,Ht={toAttribute(i,e){switch(e){case Boolean:i=i?wo:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Un=(i,e)=>e!==i&&(e==e||i==i),Pt={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Un},Nt="finalized";let Se=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const o=this._$Ep(n,t);o!==void 0&&(this._$Ev.set(o,n),e.push(o))}),e}static createProperty(e,t=Pt){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(o){const a=this[e];this[t]=o,this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Pt}static finalize(){if(this.hasOwnProperty(Nt))return!1;this[Nt]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const o of n)this.createProperty(o,t[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)t.unshift(cn(o))}else e!==void 0&&t.push(cn(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Co(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Pt){var o;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const r=(((o=n.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?n.converter:Ht).toAttribute(t,n.type);this._$El=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$El=null}}_$AK(e,t){var n;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const r=o.getPropertyOptions(a),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((n=r.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?r.converter:Ht;this._$El=a,this[a]=d.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,n){let o=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Un)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,a)=>this[a]=o),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(n)):this._$Ek()}catch(o){throw t=!1,this._$Ek(),o}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var o;return(o=n.hostUpdated)===null||o===void 0?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Se[Nt]=!0,Se.elementProperties=new Map,Se.elementStyles=[],Se.shadowRootOptions={mode:"open"},hn?.({ReactiveElement:Se}),((Mt=ct.reactiveElementVersions)!==null&&Mt!==void 0?Mt:ct.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var At;const ut=window,Ae=ut.trustedTypes,pn=Ae?Ae.createPolicy("lit-html",{createHTML:i=>i}):void 0,Rt="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,zn="?"+te,$o=`<${zn}>`,ye=document,Ge=()=>ye.createComment(""),Ye=i=>i===null||typeof i!="object"&&typeof i!="function",Vn=Array.isArray,So=i=>Vn(i)||typeof i?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,mn=/-->/g,vn=/>/g,le=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gn=/'/g,yn=/"/g,qn=/^(?:script|style|textarea|title)$/i,Mo=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),p=Mo(1),Ie=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),fn=new WeakMap,pe=ye.createTreeWalker(ye,129,null,!1);function jn(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return pn!==void 0?pn.createHTML(e):e}const Po=(i,e)=>{const t=i.length-1,n=[];let o,a=e===2?"<svg>":"",r=Ue;for(let d=0;d<t;d++){const l=i[d];let c,u,v=-1,y=0;for(;y<l.length&&(r.lastIndex=y,u=r.exec(l),u!==null);)y=r.lastIndex,r===Ue?u[1]==="!--"?r=mn:u[1]!==void 0?r=vn:u[2]!==void 0?(qn.test(u[2])&&(o=RegExp("</"+u[2],"g")),r=le):u[3]!==void 0&&(r=le):r===le?u[0]===">"?(r=o??Ue,v=-1):u[1]===void 0?v=-2:(v=r.lastIndex-u[2].length,c=u[1],r=u[3]===void 0?le:u[3]==='"'?yn:gn):r===yn||r===gn?r=le:r===mn||r===vn?r=Ue:(r=le,o=void 0);const f=r===le&&i[d+1].startsWith("/>")?" ":"";a+=r===Ue?l+$o:v>=0?(n.push(c),l.slice(0,v)+Rt+l.slice(v)+te+f):l+te+(v===-2?(n.push(void 0),d):f)}return[jn(i,a+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class We{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,r=0;const d=e.length-1,l=this.parts,[c,u]=Po(e,t);if(this.el=We.createElement(c,n),pe.currentNode=this.el.content,t===2){const v=this.el.content,y=v.firstChild;y.remove(),v.append(...y.childNodes)}for(;(o=pe.nextNode())!==null&&l.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const v=[];for(const y of o.getAttributeNames())if(y.endsWith(Rt)||y.startsWith(te)){const f=u[r++];if(v.push(y),f!==void 0){const I=o.getAttribute(f.toLowerCase()+Rt).split(te),$=/([.?@])?(.*)/.exec(f);l.push({type:1,index:a,name:$[2],strings:I,ctor:$[1]==="."?Io:$[1]==="?"?_o:$[1]==="@"?Fo:gt})}else l.push({type:6,index:a})}for(const y of v)o.removeAttribute(y)}if(qn.test(o.tagName)){const v=o.textContent.split(te),y=v.length-1;if(y>0){o.textContent=Ae?Ae.emptyScript:"";for(let f=0;f<y;f++)o.append(v[f],Ge()),pe.nextNode(),l.push({type:2,index:++a});o.append(v[y],Ge())}}}else if(o.nodeType===8)if(o.data===zn)l.push({type:2,index:a});else{let v=-1;for(;(v=o.data.indexOf(te,v+1))!==-1;)l.push({type:7,index:a}),v+=te.length-1}a++}}static createElement(e,t){const n=ye.createElement("template");return n.innerHTML=e,n}}function Ee(i,e,t=i,n){var o,a,r,d;if(e===Ie)return e;let l=n!==void 0?(o=t._$Co)===null||o===void 0?void 0:o[n]:t._$Cl;const c=Ye(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((a=l?._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=Ee(i,l._$AS(i,e.values),l,n)),e}class Ao{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:o}=this._$AD,a=((t=e?.creationScope)!==null&&t!==void 0?t:ye).importNode(n,!0);pe.currentNode=a;let r=pe.nextNode(),d=0,l=0,c=o[0];for(;c!==void 0;){if(d===c.index){let u;c.type===2?u=new et(r,r.nextSibling,this,e):c.type===1?u=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(u=new xo(r,this,e)),this._$AV.push(u),c=o[++l]}d!==c?.index&&(r=pe.nextNode(),d++)}return pe.currentNode=ye,a}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class et{constructor(e,t,n,o){var a;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cp=(a=o?.isConnected)===null||a===void 0||a}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),Ye(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):So(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&Ye(this._$AH)?this._$AA.nextSibling.data=e:this.$(ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:o}=e,a=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=We.createElement(jn(o.h,o.h[0]),this.options)),o);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===a)this._$AH.v(n);else{const r=new Ao(a,this),d=r.u(this.options);r.v(n),this.$(d),this._$AH=r}}_$AC(e){let t=fn.get(e.strings);return t===void 0&&fn.set(e.strings,t=new We(e)),t}T(e){Vn(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const a of e)o===t.length?t.push(n=new et(this.k(Ge()),this.k(Ge()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class gt{constructor(e,t,n,o,a){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,o){const a=this.strings;let r=!1;if(a===void 0)e=Ee(this,e,t,0),r=!Ye(e)||e!==this._$AH&&e!==Ie,r&&(this._$AH=e);else{const d=e;let l,c;for(e=a[0],l=0;l<a.length-1;l++)c=Ee(this,d[n+l],t,l),c===Ie&&(c=this._$AH[l]),r||(r=!Ye(c)||c!==this._$AH[l]),c===C?e=C:e!==C&&(e+=(c??"")+a[l+1]),this._$AH[l]=c}r&&!o&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Io extends gt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}const Eo=Ae?Ae.emptyScript:"";class _o extends gt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,Eo):this.element.removeAttribute(this.name)}}class Fo extends gt{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){var n;if((e=(n=Ee(this,e,t,0))!==null&&n!==void 0?n:C)===Ie)return;const o=this._$AH,a=e===C&&o!==C||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,r=e!==C&&(o===C||a);a&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class xo{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}}const bn=ut.litHtmlPolyfillSupport;bn?.(We,et),((At=ut.litHtmlVersions)!==null&&At!==void 0?At:ut.litHtmlVersions=[]).push("2.8.0");const Do=(i,e,t)=>{var n,o;const a=(n=t?.renderBefore)!==null&&n!==void 0?n:e;let r=a._$litPart$;if(r===void 0){const d=(o=t?.renderBefore)!==null&&o!==void 0?o:null;a._$litPart$=r=new et(e.insertBefore(Ge(),d),d,void 0,t??{})}return r._$AI(i),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Et,_t;class w extends Se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Do(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ie}}w.finalized=!0,w._$litElement$=!0,(Et=globalThis.litElementHydrateSupport)===null||Et===void 0||Et.call(globalThis,{LitElement:w});const Cn=globalThis.litElementPolyfillSupport;Cn?.({LitElement:w});((_t=globalThis.litElementVersions)!==null&&_t!==void 0?_t:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:o,elements:a}=n;return{kind:o,elements:a,finisher(r){customElements.define(t,r)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},ko=(i,e,t)=>{e.constructor.createProperty(t,i)};function h(i){return(e,t)=>t!==void 0?ko(i,e,t):To(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bo=({finisher:i,descriptor:e})=>(t,n)=>{var o;if(n===void 0){const a=(o=t.originalKey)!==null&&o!==void 0?o:t.key,r=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(t.key)}:{...t,key:a};return i!=null&&(r.finisher=function(d){i(d,a)}),r}{const a=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i?.(a,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(i,e){return Bo({descriptor:t=>{const n={get(){var o,a;return(a=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(i))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const o=typeof t=="symbol"?Symbol():"__"+t;n.get=function(){var a,r;return this[o]===void 0&&(this[o]=(r=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(i))!==null&&r!==void 0?r:null),this[o]}}return n}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ft;((Ft=window.HTMLSlotElement)===null||Ft===void 0?void 0:Ft.prototype.assignedElements)!=null;const Lo="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let _e=class extends w{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const e=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return p`
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

        <a href=${e} target="_blank" class="link join-mgc"
          >Click here to join the Monthly Giving Circle</a
        >
        <p>
          Already a monthly donor but don't see your donation details here?
          <br />
          <a class="link" href=${Lo}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const e="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",t=encodeURIComponent(this.patronName);return`${e}${t}`}};_e.styles=m`
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
  `;s([h({type:String})],_e.prototype,"patronName",void 0);s([h({type:String})],_e.prototype,"baseHost",void 0);s([h({type:String})],_e.prototype,"defaultMonthlyDonationAmount",void 0);_e=s([P("ia-mgc-welcome")],_e);const Ho=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class No extends w{static get styles(){return m`
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
    `}render(){return Ho}}customElements.define("ia-icon-donate",No);let Fe=class extends w{constructor(){super(...arguments),this.isDisabled=!1}render(){return p`
      <button
        ?disabled=${this.isDisabled}
        @click=${e=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(e,this))}}
      >
        <slot></slot>
      </button>
    `}};Fe.styles=m`
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
  `;s([h({type:Boolean,reflect:!0})],Fe.prototype,"isDisabled",void 0);s([h({type:Object})],Fe.prototype,"clickHandler",void 0);s([b("button")],Fe.prototype,"button",void 0);Fe=s([P("ia-mgc-button")],Fe);let Ke=class extends w{constructor(){super(...arguments),this.plans=[],this.canEdit=!1}render(){return p`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(e=>{var t,n,o,a,r,d,l,c,u,v,y,f,I,$,T,j,V,re;let we=(n=(t=e.payment)===null||t===void 0?void 0:t.paymentMethodType)!==null&&n!==void 0?n:"Method not found";we==="creditCard"&&(we="Credit card");const $e=(a=(o=e.payment)===null||o===void 0?void 0:o.cardType)!==null&&a!==void 0?a:"Card type not found",ot=!((r=e.payment)===null||r===void 0)&&r.last4?`...${(d=e.payment)===null||d===void 0?void 0:d.last4}`:"CC number not found";return p`
              <li class=${`${e.plan.isCancelled?"cancelled":""}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${e.currency}
                      ${e.currencySymbol}${e.amount}/month
                    </p>
                    ${e.isTest?p`<p class="is-test">(Test payment)</p>`:C}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${we}</p>
                    ${((l=e.payment)===null||l===void 0?void 0:l.paymentMethodType)==="creditCard"?p`<p>${$e}</p>
                          <p>${ot}</p>`:C}
                    ${((c=e.payment)===null||c===void 0?void 0:c.paymentMethodType)==="Paypal"?p`<p>
                          Paypal email:
                          <a href=${`mailto:${(u=e.payment)===null||u===void 0?void 0:u.paypalEmail}`}
                            >${(v=e.payment)===null||v===void 0?void 0:v.paypalEmail}</a
                          >
                        </p>`:C}
                    ${((y=e.payment)===null||y===void 0?void 0:y.paymentMethodType)==="Venmo"?p`<p>
                          Venmo username:
                          <a href=${`mailto:${(f=e.payment)===null||f===void 0?void 0:f.venmoUsername}`}
                            >${(I=e.payment)===null||I===void 0?void 0:I.paypalEmail}</a
                          >
                        </p>`:C}
                    ${(($=e.payment)===null||$===void 0?void 0:$.paymentMethodType)!=="creditCard"?p`<p>
                          Expires:
                          ${(j=(T=e.payment)===null||T===void 0?void 0:T.expirationMonth)!==null&&j!==void 0?j:"month not found"}/${(re=(V=e.payment)===null||V===void 0?void 0:V.expirationYear)!==null&&re!==void 0?re:"year not found"}
                        </p>`:C}
                  </div>
                  <div class="next-donation">
                    <h3>Next Donation</h3>
                    <p>${e.nextBillingDateLocale}</p>
                  </div>
                </div>
                ${this.planCTA(e)}
              </li>
            `})}
        </ul>
      </section>
    `}planCTA(e){if(!this.canEdit)return p`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}>donations@archive.org</a>.
      </p>`;const t=e.plan.isCancelled?"Plan is cancelled":"Manage this monthly donation";return p`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${e.plan.isCancelled}
      .clickHandler=${async(n,o)=>{o.isDisabled=!0,this.dispatchEvent(new CustomEvent("editThisPlan",{detail:{plan:e}}))}}
      >${t}</ia-mgc-button
    >`}};Ke.styles=m`
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
  `;s([h({type:Array})],Ke.prototype,"plans",void 0);s([h({type:Boolean,reflect:!0})],Ke.prototype,"canEdit",void 0);Ke=s([P("ia-mgc-plans")],Ke);let ht=class extends w{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?p` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:C}render(){return p`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};ht.styles=m`
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
  `;s([h({type:String})],ht.prototype,"titleStyle",void 0);ht=s([P("ia-mgc-title")],ht);let Je=class extends w{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(e){return!!e.has("receiptDispatcher")}updated(e){e.has("receipts")&&this.updateReceiptSentMap(),e.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const e={};this.receipts.forEach(t=>{e[t.id]={id:t.id,emailStatus:""}}),this.receiptDispatcher=e}}emailReceipt(e){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:e}}))}async emailSent(e){var t;const n=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const o={...n},{id:a}=e;o[a]=e,this.receiptDispatcher={...o},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,e);const r=CSS.escape(a),d=(t=this.shadowRoot)===null||t===void 0?void 0:t.querySelector(`#donation-${r} ia-mgc-button`);d.isDisabled=!1}emailStatusMessageToDisplay(e){switch(e.emailStatus){case"success":return"Sent";case"fail":return"Failed";default:return""}}ctaButtonText(e,t){return t?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return p`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(e=>{var t;const n=(t=this.receiptDispatcher)===null||t===void 0?void 0:t[e.id],o=n?.emailStatus==="pending",a=!n||!n.emailStatus?C:p`<ia-mgc-update-status
                        .status=${n.emailStatus}
                        >${this.emailStatusMessageToDisplay(n)}</ia-mgc-update-status
                      >`;return p`
                  <tr
                    id=${`donation-${e.id}`}
                    class=${`${e.isTest?"test":""}`}
                  >
                    <td>
                      <div class="donation-date">${e.date}</div>
                    </td>
                    <td>
                      <div class="donation-amount">
                        ${e.amountFormatted}
                      </div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <ia-mgc-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async(r,d)=>{if(!o&&(d.isDisabled=!0,await d.updateComplete),!o&&(this.emailReceipt(e),this.receiptDispatcher)){const c={...this.receiptDispatcher};c[e.id].emailStatus="pending",this.receiptDispatcher=c}}}
                        >
                          ${this.ctaButtonText(e,n)}
                        </ia-mgc-button>
                        ${a}
                      </div>
                    </td>
                  </tr>
                `}):p`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};Je.styles=m`
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
  `;s([h({type:Array})],Je.prototype,"receipts",void 0);s([h({type:Object})],Je.prototype,"receiptDispatcher",void 0);Je=s([P("ia-mgc-receipts")],Je);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const wn=i=>i??D;class tt{constructor(e){this.streetAddress=e?.streetAddress,this.extendedAddress=e?.extendedAddress,this.locality=e?.locality,this.region=e?.region,this.postalCode=e?.postalCode,this.countryCodeAlpha2=e?.countryCodeAlpha2}}class nt{constructor(e){this.email=e?.email,this.firstName=e?.firstName,this.lastName=e?.lastName}}class Ro{constructor(e){this.customer=e.customer,this.billing=e.billing}}var A;(function(i){i.CreditCard="Credit Card",i.PayPal="PayPal",i.GooglePay="Google Pay",i.Venmo="Venmo",i.ApplePay="Apple Pay"})(A||(A={}));class k{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return k.calculateFeeAmount(this.amount)}get total(){return k.calculateTotal(this.amount,this.coverFees)}static calculateTotal(e,t){const n=t?this.calculateFeeAmount(e):0,o=e+n;return isNaN(o)?0:this.roundAmount(o)}static calculateFeeAmount(e){const t=e*.02+.49;return isNaN(t)?0:this.roundAmount(t)}static roundAmount(e){return Math.round(e*100)/100}constructor(e){this.donationType=e.donationType,this.amount=e.amount,this.coverFees=e.coverFees}}var S;(function(i){i.OneTime="one-time",i.Monthly="monthly",i.Upsell="up_sell"})(S||(S={}));class Gn{constructor(e){this.logged_in_user=e?.logged_in_user,this.referrer=e?.referrer,this.fee_amount_covered=e?.fee_amount_covered,this.origin=e?.origin}}class Oo{constructor(e){this.customFields=new Gn,this.paymentProvider=e.paymentProvider,this.paymentMethodNonce=e.paymentMethodNonce,this.recaptchaToken=e.recaptchaToken,this.customerId=e.customerId,this.deviceData=e.deviceData,this.upsellOnetimeTransactionId=e.upsellOnetimeTransactionId,this.bin=e.bin,this.binName=e.binName,this.amount=e.amount,this.donationType=e.donationType,this.customer=e.customer,this.billing=e.billing,e.customFields&&(this.customFields=e.customFields)}}class Uo{constructor(e){this.id=e.id}}class zo{constructor(e){this.paymentProvider=e.paymentProvider,this.paymentMethodNonce=e.paymentMethodNonce,this.amount=e.amount,this.donationType=e.donationType,this.transaction_id=e.transaction_id,this.customer_id=e.customer_id,this.customer=new nt(e.customer),this.billing=new tt(e.billing),e.subscription&&(this.subscription=new Uo(e.subscription))}}class Vo{constructor(e){this.code=e.code,this.message=e.message}}class qo{constructor(e){this.message=e.message;const{errors:t=[]}=e;this.errors=t.map(n=>new Vo(n))}}class jo{constructor(e){this.success=e.success,this.success?this.value=new zo(e.value):this.value=new qo(e.value)}}const yt=[5,10,25,50,100,500,1e3],Yn=new k({donationType:S.OneTime,amount:10,coverFees:!1});var me;(function(i){i.LeaveSpace="leave-space",i.CompressSpace="compress-space"})(me||(me={}));let fe=class extends w{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=me.LeaveSpace,this.requiredIndicatorSpaceOption=me.LeaveSpace}render(){return p`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?p` * `:C}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?"error":""}get iconSpaceOptionClass(){return this.iconSpaceOption===me.CompressSpace?"compress-space":""}static get styles(){const e=m`var(--inputBorder, 1px solid #d9d9d9)`,t=m`var(--badgedInputBorderErrorColor, red)`,n=m`var(--badgedInputIconSize, 1.4rem)`,o=m`var(--badgedInputIconSpacerWidth, 3rem)`,a=m`var(--badgedInputNoIconSpacerWidth, 1rem)`,r=m`var(--badgedInputHeight, 3rem)`,d=m`var(--badgedInputRequiredIndicatorColor, red)`,l=m`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`,c=m`var(--badgedInputRequiredIndicatorFontSize, 2rem)`;return m`
      .input-wrapper {
        border: ${e};
        height: ${r};
        display: flex;
        align-items: center;
      }

      .input-wrapper.error {
        box-shadow: inset 0px 0px 0px 1px ${t};
        border-color: ${t};
      }

      .input-wrapper.compress-space .icon-container {
        width: ${a};
      }

      .icon-container {
        width: ${o};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-container svg {
        height: ${n};
      }

      .required-indicator {
        color: ${d};
        font-size: ${c};
        margin: ${l};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};s([h({type:Boolean})],fe.prototype,"error",void 0);s([h({type:Object})],fe.prototype,"icon",void 0);s([h({type:Boolean})],fe.prototype,"required",void 0);s([h({type:String})],fe.prototype,"iconSpaceOption",void 0);s([h({type:String})],fe.prototype,"requiredIndicatorSpaceOption",void 0);fe=s([P("badged-input")],fe);const Go=p`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`,Yo=p`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`,Wo=p`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,$n={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BQ:"Bonaire, Saint Eustatius and Saba ",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",VG:"British Virgin Islands",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos Islands",CO:"Colombia",KM:"Comoros",CK:"Cook Islands",CR:"Costa Rica",HR:"Croatia",CU:"Cuba",CW:"Curacao",CY:"Cyprus",CZ:"Czech Republic",CD:"Democratic Republic of the Congo",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",TL:"East Timor",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",CI:"Ivory Coast",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Laos",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",KP:"North Korea",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",CG:"Republic of the Congo",RE:"Reunion",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",KR:"South Korea",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",VI:"U.S. Virgin Islands",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",UM:"United States Minor Outlying Islands",US:"United States",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VA:"Vatican",VE:"Venezuela",VN:"Vietnam",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};let _=class extends w{constructor(){super(...arguments),this.selectedCountry="US",this.donorEmail=""}updated(e){var t;e.has("donorEmail")&&(this.emailField.value=(t=this.donorEmail)!==null&&t!==void 0?t:"")}reportValidity(){const e=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]];let t=!0;return e.forEach(([n,o])=>{const a=n.checkValidity();t=t&&a,a||(o.error=!0)}),t?this.errorMessage.innerText="":this.errorMessage.innerText="Please enter any missing contact information below",t}focus(){this.emailField.focus()}render(){return p`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-email",placeholder:"Email",required:!0,fieldType:"email",name:"email",autocomplete:"email",maxlength:255,icon:Go})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-first-name",placeholder:"First name",name:"fname",required:!0,maxlength:255,autocomplete:"given-name",icon:Wo})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-last-name",placeholder:"Last name",name:"lname",autocomplete:"family-name",required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-street-address",placeholder:"Address Line 1",required:!0,autocomplete:"address-line1",icon:Yo,name:"street-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-extended-address",placeholder:"Address Line 2 (optional)",autocomplete:"address-line2",required:!1,name:"extended-address"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-locality",placeholder:"City",autocomplete:"address-level2",required:!0,name:"locality"})}
          </div>
          <div class="row">
            ${this.generateInput({id:"donation-contact-form-region",placeholder:"State / Province",autocomplete:"address-level1",required:!0,name:"region"})}
            ${this.generateInput({id:"donation-contact-form-postal-code",placeholder:"Zip / Postal",autocomplete:"postal-code",required:!0,name:"postal",maxlength:9,validationPattern:"[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*",iconSpaceOption:me.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return p`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${e=>{var t,n,o,a,r,d,l,c,u,v;const y=this.selectedCountry;this.selectedCountry=!((t=e.target)===null||t===void 0)&&t.value?(n=e.target)===null||n===void 0?void 0:n.value:y,this.selectedCountry==="US"?((o=this.postalBadgedInput)===null||o===void 0||o.setAttribute("required",""),(a=this.postalCodeField)===null||a===void 0||a.setAttribute("required",""),(r=this.regionBadgedInput)===null||r===void 0||r.setAttribute("required",""),(d=this.regionField)===null||d===void 0||d.setAttribute("required","")):((l=this.postalBadgedInput)===null||l===void 0||l.removeAttribute("required"),(c=this.postalCodeField)===null||c===void 0||c.removeAttribute("required"),(u=this.regionBadgedInput)===null||u===void 0||u.removeAttribute("required"),(v=this.regionField)===null||v===void 0||v.removeAttribute("required"))}}
        >
          ${Object.keys($n).map(e=>{const t=$n[e];return p`
              <option value=${e} ?selected=${e===this.selectedCountry}>${t}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(e){this.errorMessage.innerText="";const n=e.target.id,o=this.querySelector(`badged-input.${n}`);o.error=!1}generateInput(e){var t,n,o,a;const r=(t=e.required)!==null&&t!==void 0?t:!0,d=(n=e.fieldType)!==null&&n!==void 0?n:"text",l=(o=e.iconSpaceOption)!==null&&o!==void 0?o:me.LeaveSpace;return p`
      <badged-input
        class=${e.id}
        .icon=${e.icon}
        .iconSpaceOption=${l}
        ?required=${e.required}
      >
        <label for=${e.id}>${e.placeholder}</label>
        <input
          type=${d}
          id=${e.id}
          class="donation-contact-form-input"
          name=${e.name}
          aria-label=${e.placeholder}
          placeholder=${e.placeholder}
          maxlength=${wn(e.maxlength)}
          autocomplete=${(a=e.autocomplete)!==null&&a!==void 0?a:"on"}
          pattern=${wn(e.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${r}
        />
      </badged-input>
    `}get donorContactInfo(){return new Ro({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new tt({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new nt({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){const e=m`var(--badgedInputNoIconSpacerWidth, 3rem)`,t=m`var(--badgedInputIconSpacerWidth, 5rem)`,n=m`var(--fieldSetSpacing, 1rem)`,o=m`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,a=m`var(--contactFieldFontSize, 1.6rem)`,r=m`var(--inputFieldFontColor, #333)`,d=m`calc(100% - ${t})`,l=m`calc(100% - ${e})`;return p`
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
          margin-bottom: ${n};
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
          width: ${l};
        }

        contact-form #donation-contact-form-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        contact-form #donation-contact-form-last-name {
          width: ${l};
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
          font-size: ${a};
          padding: 0;
          font-family: ${o};
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
          font-family: ${o};
          border: 0;
          background: #fff;
        }
      </style>
    `}};s([b("badged-input.donation-contact-form-email")],_.prototype,"emailBadgedInput",void 0);s([b("#donation-contact-form-email")],_.prototype,"emailField",void 0);s([b("badged-input.donation-contact-form-first-name")],_.prototype,"firstNameBadgedInput",void 0);s([b("#donation-contact-form-first-name")],_.prototype,"firstNameField",void 0);s([b("badged-input.donation-contact-form-last-name")],_.prototype,"lastNameBadgedInput",void 0);s([b("#donation-contact-form-last-name")],_.prototype,"lastNameField",void 0);s([b("badged-input.donation-contact-form-postal-code")],_.prototype,"postalBadgedInput",void 0);s([b("#donation-contact-form-postal-code")],_.prototype,"postalCodeField",void 0);s([b("badged-input.donation-contact-form-street-address")],_.prototype,"streetAddressBadgedInput",void 0);s([b("#donation-contact-form-street-address")],_.prototype,"streetAddressField",void 0);s([b("badged-input.donation-contact-form-extended-address")],_.prototype,"extendedAddressBadgedInput",void 0);s([b("#donation-contact-form-extended-address")],_.prototype,"extendedAddressField",void 0);s([b("badged-input.donation-contact-form-locality")],_.prototype,"localityBadgedInput",void 0);s([b("#donation-contact-form-locality")],_.prototype,"localityField",void 0);s([b("badged-input.donation-contact-form-region")],_.prototype,"regionBadgedInput",void 0);s([b("#donation-contact-form-region")],_.prototype,"regionField",void 0);s([b("#donation-contact-form-countryCodeAlpha2")],_.prototype,"countryCodeAlpha2Field",void 0);s([b("#donation-contact-form-error-message")],_.prototype,"errorMessage",void 0);s([b("form")],_.prototype,"form",void 0);s([h({type:String})],_.prototype,"selectedCountry",void 0);s([h({type:String})],_.prototype,"donorEmail",void 0);_=s([P("contact-form")],_);let Ko=()=>({events:{},emit(i,...e){(this.events[i]||[]).forEach(t=>t(...e))},on(i,e){return(this.events[i]=this.events[i]||[]).push(e),()=>this.events[i]=(this.events[i]||[]).filter(t=>t!==e)}});function Jo(i){return new Promise(e=>setTimeout(e,i))}var G;(function(i){i.retryNumber="retryNumber",i.owner="owner",i.dynamicImportLoaded="dynamicImportLoaded",i.hasBeenRetried="hasBeenRetried"})(G||(G={}));const Sn="lazyLoaderService";class Wn{constructor(e){var t,n,o;this.emitter=Ko(),this.container=(t=e?.container)!==null&&t!==void 0?t:document.head,this.retryCount=(n=e?.retryCount)!==null&&n!==void 0?n:2,this.retryInterval=(o=e?.retryInterval)!==null&&o!==void 0?o:1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return g(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:"module"})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:"nomodule"})),Promise.race([t,n])})}loadScript(e){return g(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){var t;return g(this,void 0,void 0,function*(){const n=(t=e.retryNumber)!==null&&t!==void 0?t:0,o=`script[src='${e.src}'][async][${G.owner}='${Sn}'][${G.retryNumber}='${n}']`;let a=this.container.querySelector(o);return a||(a=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:n})),this.container.appendChild(a)),new Promise((r,d)=>{if(a.getAttribute(G.dynamicImportLoaded)){r();return}const l=e.scriptBeingRetried,c=a.onload||l?.onload;a.onload=v=>{c?.(v),a.setAttribute(G.dynamicImportLoaded,"true"),r()};const u=a.onerror||l?.onerror;a.onerror=v=>g(this,void 0,void 0,function*(){const y=a.getAttribute(G.hasBeenRetried);if(n<this.retryCount&&!y){a.setAttribute(G.hasBeenRetried,"true"),yield Jo(this.retryInterval*1e3);const f=n+1;this.emitter.emit("scriptLoadRetried",e.src,f),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:f,scriptBeingRetried:a}))}else y||this.emitter.emit("scriptLoadFailed",e.src,v),u?.(v),d(v)})})})}getScriptTag(e){var t;const n=e.src.replace("'",'"'),o=document.createElement("script"),a=e.retryNumber;o.setAttribute(G.owner,Sn),o.setAttribute("src",n),o.setAttribute(G.retryNumber,a.toString()),o.async=!0;const r=(t=e.attributes)!==null&&t!==void 0?t:{};switch(Object.keys(r).forEach(d=>{o.setAttribute(d,r[d])}),e.bundleType){case"module":o.setAttribute("type",e.bundleType);break;case"nomodule":o.setAttribute(e.bundleType,"");break}return o}}var Z;(function(i){i.Development="dev",i.Production="prod"})(Z||(Z={}));class x{constructor(e){this.generator=e.generator}get(){return g(this,void 0,void 0,function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then(e=>e),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)})}generateSingletonAndCache(){return g(this,void 0,void 0,function*(){const e=yield this.generator();return this.cachedResponse=e,e})}}class Kn{constructor(e,t){this.braintreeClient=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("client"),window.braintree.client})}),this.dataCollector=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("data-collector"),window.braintree.dataCollector})}),this.hostedFields=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("hosted-fields"),window.braintree.hostedFields})}),this.venmo=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("venmo"),window.braintree.venmo})}),this.payPal=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("paypal-checkout"),window.braintree.paypalCheckout})}),this.applePay=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("apple-pay"),window.braintree.applePay})}),this.googlePayBraintreeClient=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.loadBraintreeScript("google-payment"),window.braintree.googlePayment})}),this.googlePaymentsClient=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://pay.google.com/gp/p/js/pay.js"}),new google.payments.api.PaymentsClient({environment:this.environment===Z.Development?"TEST":"PRODUCTION"})})}),this.recaptchaLibrary=new x({generator:()=>new Promise(n=>{window.donationFormGrecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.donationFormGrecaptchaLoadedCallback},10),n(window.grecaptcha)},this.lazyLoader.loadScript({src:"https://www.google.com/recaptcha/api.js?onload=donationFormGrecaptchaLoadedCallback&render=explicit"})})}),this.paypalLibrary=new x({generator:()=>g(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:"https://www.paypalobjects.com/api/checkout.js",attributes:{"data-version-4":"","log-level":"warn"}}),window.paypal})}),this.braintreeVersion="3.62.2",this.environment=Z.Development,this.lazyLoader=e,this.environment=t}loadBraintreeScript(e){return g(this,void 0,void 0,function*(){const t=this.environment===Z.Production?"min.js":"js",n=`${e}.${t}`,o=`https://js.braintreegateway.com/web/${this.braintreeVersion}/js/${n}`;yield this.lazyLoader.loadScript({src:o})})}}const Jn=p`
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
`,Zn=p`
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
`,ft=p`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="lockTitleID lockDescID">
  <title id="lockTitleID">Lock icon</title>
  <desc id="lockDescID">An illustration of a lock</desc>
  <path
    d="m9.8480234 5.66075891v-2.17912633c-.00688261-.97492716-.37725298-1.79574705-1.11111111-2.46245966s-1.63734389-1.00632179-2.71045726-1.01882754c-1.04529617-.01250574-1.94175593.31459769-2.68937928.9813103-.74762335.66671262-1.13190232 1.4842758-1.15283692 2.45268954v2.22641369c-.04846504.00625288-.10037138.01250575-.15571902.01875862-.05534764.00625288-.09348877.00937931-.11442337.00937931-.35302046.00625288-.59362498.06917241-.72181356.18875862-.12818859.1195862-.19228288.33022987-.19228288.631931v4.73576994c0 .5030957.269999.7546436.80999699.7546436h8.36968211c.2839076 0 .491533-.0597931.6228761-.1793793s.197158-.3082145.1974448-.565885v-4.82057452c0-.25793103-.0640943-.44499615-.1922829-.56119538s-.3340933-.17755555-.6177141-.18406896c-.0415824 0-.102092-.00468965-.1815288-.01406896-.07943676-.00937931-.13306375-.01406897-.16088096-.01406897zm-1.85873446.00937931h-3.92523766c-.01376522-.12583907-.02064783-.21077393-.02064783-.25480458l-.01032391-.97154019c0-.65420686.0034413-.9813103.01032391-.9813103.00688261-.49684289.1919961-.91513405.55534047-1.2548735.36334438-.33973945.81845687-.51273561 1.36533747-.51898848.52623277-.01875862.98492995.13691187 1.37609154.46701147.39116158.3300996.60050759.74044441.62803802 1.23103443.01376522.2076475.02064783.83032946.02064783 1.86804589v.41503446z"
    class="fill-color"
  />
</svg>
`;var xe;(function(i){i.HideBadge="hidebadge",i.ShowBadge="showbadge",i.HideBadgeLeaveSpacing="hidebadgeleavespacing"})(xe||(xe={}));let Ze=class extends w{constructor(){super(...arguments),this.sectionBadge="0",this.badgeMode=xe.ShowBadge}render(){return p`
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
    `}static get styles(){const e=m`var(--formSectionBadgeTransition, 0.25s ease-out)`,t=m`var(--formSectionBadgeMargin, 1rem)`,n=m`var(--formSectionBadgeBackgroundColor, #333)`,o=m`var(--formSectionBadgeRadius, 1.2rem)`,a=m`calc(${o} * 2)`,r=m`var(--formSectionBadgeFontSize, 1.8rem)`,d=m`var(--formSectionBadgeFontWeight, bold)`,l=m`var(--formSectionBadgeFontColor, #fff)`,c=m`var(--formSectionTitleFontSize, 1.8rem)`,u=m`var(--formSectionTitleFontWeight, bold)`,v=m`var(--formSectionContentBackgroundColor, transparent)`,y=m`var(--formSectionTextColor, #333)`,f=m`calc(${o} * 2)`;return m`
      :host {
        display: block;
        background-color: ${v};
        color: ${y};
      }
      .container {
        position: relative;
        padding: 0.5rem;
      }

      .content-container {
        position: relative;
        left: calc(${a} + ${t});
        width: calc(100% - (${a} + ${t}));
        transition: ${e};
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
        background-color: ${n};
        color: ${l};
        width: ${a};
        height: ${a};
        border-radius: ${o};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${d};
        font-size: ${r};
      }

      .title {
        line-height: ${f};
        margin-bottom: 0.5rem;
        font-size: ${c};
        font-weight: ${u};
      }
    `}};s([h({type:String})],Ze.prototype,"sectionBadge",void 0);s([h({type:String})],Ze.prototype,"headline",void 0);s([h({type:String})],Ze.prototype,"badgeMode",void 0);Ze=s([P("donation-form-section")],Ze);let Mn=class extends w{render(){return p`
      <div class="mgc-donation-section-info">
        <p><slot></slot></p>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(e,t)=>{t.isDisabled=!0,this.dispatchEvent(new Event("editingRequested"))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};Mn=s([P("ia-mgc-form-section-info")],Mn);let pt=class extends w{constructor(){super(...arguments),this.status=""}get glyph(){return this.status==="success"?"✓":this.status==="fail"?"✖":""}render(){return this.status?p`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:C}};pt.styles=m`
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
  `;s([h({type:String})],pt.prototype,"status",void 0);pt=s([P("ia-mgc-update-status")],pt);let z=class extends w{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage="",this.errorMessage="",this.updateStatus=""}updated(e){e.has("plan")&&this.plan&&this.captureAmountChanges(),e.has("coverFees")&&this.captureAmountChanges(),e.has("currentlyEditing")&&this.currentlyEditing&&this.form.focus(),e.has("donationPaymentInfo")&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){var e;return p`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?C:p`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>USD $${(e=this.plan)===null||e===void 0?void 0:e.amount}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:C}
        </donation-form-section>
      </section>
    `}async amountUpdated(e){if(this.clearInputField(),this.updateStatus=e,this.updateMessage=e==="success"?"Amount updated":"Failed. Try again.",e==="success"){this.closeForm(),await this.updateComplete,this.updateStatus=e,this.updateMessage="Amount updated";return}this.form.querySelector("ia-mgc-button#update-amount").isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(e){var t,n,o,a,r;e.preventDefault();const d=this.form.querySelector('input[name="amount"]');this.newAmount=Number(d.value),this.captureAmountChanges(this.newAmount),console.log("<plan-amount> - update amount",{newValue:this.newAmount,oldValue:(t=this.plan)===null||t===void 0?void 0:t.plan.amount,display:(n=this.donationPaymentInfo)===null||n===void 0?void 0:n.amount});const l=Number(k.calculateTotal(Number((o=this.donationPaymentInfo)===null||o===void 0?void 0:o.amount),this.coverFees));this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:this.plan,amount:l,baseAmount:(a=this.donationPaymentInfo)===null||a===void 0?void 0:a.amount,coverFees:this.coverFees,feeCovered:(r=this.donationPaymentInfo)===null||r===void 0?void 0:r.feeAmountCovered}}))}captureAmountChanges(e){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new k({donationType:S.Monthly,amount:0,coverFees:!0});return}let t;if(e)t=new k({donationType:S.Monthly,amount:e,coverFees:!0});else{const n=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;t=new k({donationType:S.Monthly,amount:n,coverFees:!0})}this.donationPaymentInfo=t}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=""}clearInputField(){const e=this.form.querySelector('input[name="amount"]');e.value="",this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(e,t){var n;e.preventDefault(),this.clearStatusMessaging();const o=t??this.form.querySelector("#update-amount");if(o&&this.updateButtonState(o),!this.newAmount){this.errorMessage="Please enter a new amount",o&&(o.isDisabled=!1);return}const a=this.form.querySelector('input[name="amount"]'),r=(n=Number(a.value))!==null&&n!==void 0?n:0,d=r<1,l=r>=9999;if(d&&(this.errorMessage="Please enter a valid amount"),l&&(this.errorMessage="Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org"),l||d){o&&this.updateButtonState(o);return}this.requestAmountUpdate(e)}async updateButtonState(e){e.isDisabled=!0,await e?.updateComplete}async clearStatusMessaging(){this.errorMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:k.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){var e;return`I'll generously add $${(e=this.donationPaymentInfo)===null||e===void 0?void 0:e.feeAmountCovered} to cover fees.`}get editAmountForm(){var e;return p`
      <section>
        <form
          id="edit-plan-amount"
          @submit=${t=>this.handleSubmit(t)}
        >
          <p>Current donation amount: $${(e=this.plan)===null||e===void 0?void 0:e.amount}</p>
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
              @input=${t=>{const n=Number(t.target.value);this.captureAmountChanges(n),this.newAmount=n}}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${t=>{const o=t.target.checked;this.coverFees=o,this.captureAmountChanges()}}
              />
              <label for="cover-fees">${this.coveredFeesText}</label>
            </div>
            <p>Total: USD $${this.totalAmountWithFees()}</p>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${t=>{t.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="update-amount"
                class="ia-button primary"
                type="submit"
                .clickHandler=${(t,n)=>this.handleSubmit(t,n)}
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
    `}};z.styles=m`
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
  `;s([h({type:Object})],z.prototype,"plan",void 0);s([h({type:Object})],z.prototype,"donationPaymentInfo",void 0);s([h({type:Number})],z.prototype,"newAmount",void 0);s([h({type:Boolean,reflect:!0})],z.prototype,"currentlyEditing",void 0);s([h({type:Boolean})],z.prototype,"coverFees",void 0);s([h({type:String})],z.prototype,"updateMessage",void 0);s([h({type:String})],z.prototype,"errorMessage",void 0);s([h({type:String})],z.prototype,"updateStatus",void 0);s([b("form")],z.prototype,"form",void 0);z=s([P("ia-mgc-edit-plan-amount")],z);var mt;(function(i){i.invalid_date="Please enter a valid date format (YYYY-MM-DD)",i.date_too_early="Date must be at least tomorrow.",i.second_donation_this_month="The date you selected will result in an additional donation for this month.",i.date_out_of_range="New donation date must be within the next 12 months.",i.same_next_billing_date=""})(mt||(mt={}));let N=class extends w{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage="",this.errorMessage="",this.warningMessage="",this.updateStatus=""}willUpdate(e){this.dateInput&&e.has("plan")&&this.plan&&(this.dateInput.setAttribute("min",this.minDate),this.dateInput.setAttribute("max",this.maxDate))}updated(e){e.has("currentlyEditing")&&this.currentlyEditing&&this.dateInput.focus()}render(){var e;return p`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?C:p`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${(e=this.plan)===null||e===void 0?void 0:e.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:C}
        </donation-form-section>
      </section>
    `}async dateUpdated(e){if(this.clearInputField(),this.updateStatus=e,this.updateMessage=e==="success"?"Date updated":"Failed to update date, please try again",e==="success"){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(e){e.preventDefault(),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value="",this.newDate=void 0}formatDateToYYYYMMDD(e){const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${o}`}async clearStatusMessaging(){this.errorMessage="",this.warningMessage="",this.updateMessage="",this.updateStatus="",await this.updateComplete}validateChosenDate(e){var t,n,o;if(!e)return{valid:!1,errorCode:"invalid_date"};let a;try{a=new Date(`${e}T00:00:00`)}catch{return{valid:!1,errorCode:"invalid_date"}}const r=new Date;r.setHours(0,0,0,0),new Date(r).setDate(r.getDate()+1);const l=new Date(a);if(l.setHours(0,0,0,0),!((t=this.plan)===null||t===void 0)&&t.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(l):!1)return{valid:!1,errorCode:"same_next_billing_date"};if(l<r)return{valid:!1,errorCode:"date_too_early"};const u=new Date(r);if(u.setFullYear(u.getFullYear()+1),l>u)return{valid:!1,errorCode:"date_out_of_range"};const v=!((n=this.plan)===null||n===void 0)&&n.payment.lastBillingDate.date?new Date((o=this.plan)===null||o===void 0?void 0:o.payment.lastBillingDate.date):null;if(v){const y=v.getMonth(),f=v.getFullYear(),I=a.getFullYear(),$=a.getMonth();if(I===f&&$===y)return{valid:!0,errorCode:"second_donation_this_month"}}return{valid:!0,errorCode:""}}get minDate(){const e=new Date,t=new Date(e);t.setDate(e.getDate()+1);const n=t.getFullYear(),o=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return`${n}-${o}-${a}`}get maxDate(){const e=new Date,t=e.getFullYear()+1,n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return`${t}-${n}-${o}`}get editDateForm(){var e,t,n,o,a;const r=!((e=this.plan)===null||e===void 0)&&e.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):"",d=(n=(t=this.dateInput)===null||t===void 0?void 0:t.value)!==null&&n!==void 0?n:r;return p`
      <section>
        <form id="edit-date">
          <p id="form-info-last-donation-date">
            Last donation date: ${(o=this.plan)===null||o===void 0?void 0:o.lastBillingDateLocale}
          </p>

          <p id="form-info-next-donation-date">
            Next donation date: ${(a=this.plan)===null||a===void 0?void 0:a.nextBillingDateLocale}
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
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;const l=this.dateInput.value,{valid:c,errorCode:u}=this.validateChosenDate(l);if(this.allowEditing=c,u)if(u==="second_donation_this_month")this.errorMessage=mt[u],this.warningMessage="You have already made a donation this month.";else{this.errorMessage=mt[u],this.newDate=void 0;return}const v=new Date(`${l}T00:00:00`),y=new Date(v).toISOString();this.newDate=y}}
            />
          </div>
          <div>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${l=>{l.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="edit-date"
                class="ia-button primary"
                type="submit"
                .isDisabled=${!this.allowEditing}
                .clickHandler=${async(l,c)=>{if(this.clearStatusMessaging(),!this.newDate){this.errorMessage="Please enter a valid date";return}c.isDisabled=!0,await c.updateComplete,this.requestDateUpdate(l)}}
              >
                Update
              </ia-mgc-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error error-msg">
            ${this.warningMessage?p`<span>${this.warningMessage}</span><br />`:""}
            ${this.errorMessage}
          </p>
        </form>
      </section>
    `}};N.styles=m`
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
  `;s([h({type:Object})],N.prototype,"plan",void 0);s([h({type:String})],N.prototype,"newDate",void 0);s([h({type:Boolean,reflect:!0})],N.prototype,"currentlyEditing",void 0);s([h({type:Boolean})],N.prototype,"allowEditing",void 0);s([h({type:String})],N.prototype,"updateMessage",void 0);s([h({type:String})],N.prototype,"errorMessage",void 0);s([h({type:String})],N.prototype,"warningMessage",void 0);s([h({type:String})],N.prototype,"updateStatus",void 0);s([b("form")],N.prototype,"form",void 0);s([b("form ia-mgc-button#edit-date")],N.prototype,"formSubmitButton",void 0);s([b('form input[name="edit-date"]')],N.prototype,"dateInput",void 0);N=s([P("ia-mgc-edit-date")],N);let be=class extends w{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(e){e.has("plan")&&console.log("plan updated",this.plan)}async cancelThisPlan(e){e.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event("cancelPlan"))}get formId(){var e;return`cancel-donation-form-${(e=this.plan)===null||e===void 0?void 0:e.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:p`
      <ia-mgc-button
        class="clear-container slim"
        .clickHandler=${(e,t)=>{if(t.isDisabled=!0,this.initialCancelRequest){this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0;return}this.initialCancelRequest=!0}}
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
      </ia-mgc-button>

      ${this.initialCancelRequest?this.confirmCancelation:C}
    `}get confirmCancelation(){return p`
    <section class="cancel-donation">
    <donation-form-section badgemode="hidebadge" headline="Cancel recurring donation">

      <ia-mgc-button class='text exit-cancel'  @click=${()=>{this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0}}>X</ia-mgc-button>

      <p>Canceling ends your monthly recurring donation to the Internet Archive, effective immediately. You will not be charged moving forward.</p>
      <p>Canceling does not affect your account or access to the Internet Archive, although you will no longer have access to any of the Monthly Giving Circle perks.</p>
      <p>If you have any questions regarding donations, contact us at <a href="mailto:donations@archive.org">donations@archive.org</a></p>

      <form id=${this.formId} @submit=${e=>this.cancelThisPlan(e)}>
        <div class="checkbox-option-container">
          <input
            id=${`confirm-${this.formId}`}
            type="checkbox"
            required
            @change=${async e=>{e.preventDefault(),this.patronWantsToKeepPlan=!e.target.checked,await this.updateComplete}}>
          <label for=${`confirm-${this.formId}`}><b>I'm sure I want to cancel my subscription</b></label>
        </div>

        <ia-mgc-button
          class="cancel"
          .isDisabled=${this.patronWantsToKeepPlan}
          id=${`submit-${this.formId}`}
          type="submit"
          .clickHandler=${(e,t)=>{t.isDisabled=!0,this.cancelThisPlan(e)}}
        >I'm sure I want to cancel my recurring donation.</ia-mgc-button>
      </form>
    </section>
    `}};be.styles=m`
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
  `;s([h({type:Object})],be.prototype,"plan",void 0);s([h({type:Boolean,reflect:!0})],be.prototype,"patronWantsToKeepPlan",void 0);s([h({type:Boolean,reflect:!0})],be.prototype,"initialCancelRequest",void 0);s([b("form")],be.prototype,"form",void 0);be=s([P("ia-mgc-cancel-plan")],be);const Zo=p`
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
`,Qo=p`
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
`,Xo=p`
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
`,ei=p`
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
`;var F;(function(i){i.Loading="loading",i.Available="available",i.Unavailable="unavailable"})(F||(F={}));let Q=class extends w{constructor(){super(...arguments),this.donationInfoValid=!0,this.applePayMode=F.Loading,this.googlePayMode=F.Loading,this.venmoMode=F.Loading,this.payPalMode=F.Loading,this.paymentModeSelected=void 0}render(){const e=this.paymentModeSelected?"payment-selected":"";return p`
      <div
        class="payment-container ${this.donationInfoValid?"donation-info-valid":"donation-info-invalid"} ${e}"
      >
        <div class="payment-provider-container">
          <button
            class="applepay provider-button ${this.applePayMode} ${this.paymentModeSelected==="apple"?"selected":""}"
            @click=${t=>{this.paymentModeSelected="apple",this.applePaySelected(t)}}
            tabindex="0"
          >
            <div class="payment-image">${Zo}</div>
          </button>

          <button
            class="googlepay provider-button ${this.googlePayMode} ${this.paymentModeSelected==="google"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="google",this.googlePaySelected()}}
            tabindex="0"
          >
            <div class="payment-image">${Qo}</div>
          </button>

          <button
            class="venmo provider-button ${this.venmoMode} ${this.paymentModeSelected==="venmo"?"selected":""}"
            @click=${()=>{this.paymentModeSelected="venmo",this.venmoSelected()}}
            tabindex="0"
          >
            <div class="payment-image">${ei}</div>
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
                ${Xo}
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

      ${this.paymentModeSelected?p`
            <button
              id="change-payment-method"
              @click=${()=>{this.paymentModeSelected=void 0,this.dispatchEvent(new Event("resetPaymentMethod")),this.setButtonVisibility()}}
            >
              Change payment method
            </button>
          `:C}
    `}firstUpdated(){this.dispatchEvent(new Event("firstUpdated"))}updated(e){e.has("paymentProviders")&&this.setButtonVisibility()}showPaypalButton(){this.payPalMode=F.Available}setButtonVisibility(){return g(this,void 0,void 0,function*(){var e,t,n;(e=this.paymentProviders)===null||e===void 0||e.venmoHandler.get().then(o=>{if(!o){this.venmoMode=F.Unavailable;return}o.isBrowserSupported().then(a=>{this.venmoMode=a?F.Available:F.Unavailable}).catch(a=>{console.error("error loading venmo",a),this.venmoMode=F.Unavailable})}).catch(o=>{console.error("venmo unavailable",o),this.venmoMode=F.Unavailable}),(t=this.paymentProviders)===null||t===void 0||t.applePayHandler.get().then(o=>{if(!o){console.error("applePayHandler unavailable"),this.applePayMode=F.Unavailable;return}o.isAvailable().then(a=>{this.applePayMode=a?F.Available:F.Unavailable}).catch(a=>{console.error("error loading applepay",a),this.applePayMode=F.Unavailable})}).catch(o=>{console.error("apple pay unavailable",o),this.applePayMode=F.Unavailable}),(n=this.paymentProviders)===null||n===void 0||n.googlePayHandler.get().then(o=>{if(!o){console.error("google pay handler unavailable"),this.googlePayMode=F.Unavailable;return}o.isBrowserSupported().then(a=>{this.googlePayMode=a?F.Available:F.Unavailable}).catch(a=>{console.error("error loading googlepay",a),this.googlePayMode=F.Unavailable})}).catch(o=>{console.error("google pay unavailable",o),this.googlePayMode=F.Unavailable})})}googlePaySelected(){this.dispatchEvent(new Event("googlePaySelected"))}applePaySelected(e){const t=new CustomEvent("applePaySelected",{detail:{originalEvent:e}});this.dispatchEvent(t)}venmoSelected(){this.dispatchEvent(new Event("venmoSelected"))}creditCardSelected(){this.dispatchEvent(new Event("creditCardSelected"))}localPaypalButtonClicked(){this.dispatchEvent(new Event("paypalBlockerSelected"))}static get styles(){const e=m`var(--paymentButtonWidth, 5rem)`,t=m`var(--paymentButtonHeight, 3.2rem)`,n=m`var(--creditCardFontSize, 1.8rem)`;return m`
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
        width: ${e};
        height: ${t};
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
        width: ${e};
        height: ${t};
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
        font-size: ${n};
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
    `}};s([h({type:Boolean})],Q.prototype,"donationInfoValid",void 0);s([h({type:Object})],Q.prototype,"paymentProviders",void 0);s([h({type:String})],Q.prototype,"applePayMode",void 0);s([h({type:String})],Q.prototype,"googlePayMode",void 0);s([h({type:String})],Q.prototype,"venmoMode",void 0);s([h({type:String})],Q.prototype,"payPalMode",void 0);s([h({type:String})],Q.prototype,"paymentModeSelected",void 0);Q=s([P("payment-selector")],Q);let q=class extends w{constructor(){super(...arguments),this.patronEmail="",this.currentlyEditing=!1,this.newPaymentMethod="",this.selectedPaymentProvider="",this.contactFormVisible=!1,this.paymentSelectorFirstUpdated=!1}submitPaymentMethodChange(e){e.preventDefault()}clearStatusMessaging(){}get contactFormSection(){const e=this.selectedPaymentProvider===A.Venmo?"Help us stay in touch":"Enter payment information",t=this.selectedPaymentProvider===A.CreditCard||this.selectedPaymentProvider===A.Venmo;return console.log("contactFormSectioncontactFormSection",{contactFormVisible:t}),p`
      <donation-form-section
        badgemode="hidebadge"
        headline=${e}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot name="contact-form"></slot>
          <slot name="braintree-hosted-fields"></slot>
        </div>
      </donation-form-section>
    `}render(){var e,t,n,o,a;const r=this.selectedPaymentProvider===A.CreditCard||this.selectedPaymentProvider===A.Venmo;return p`
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${this.currentlyEditing?C:p`<ia-mgc-form-section-info
              @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
              ><span>${((t=(e=this.plan)===null||e===void 0?void 0:e.payment)===null||t===void 0?void 0:t.paymentMethodType)==="creditCard"?"Credit card":(o=(n=this.plan)===null||n===void 0?void 0:n.payment)===null||o===void 0?void 0:o.paymentMethodType}</span>
            </ia-mgc-form-section-info>`}
      ${this.currentlyEditing?p`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${(a=this.braintreeManager)===null||a===void 0?void 0:a.paymentProviders}
                @firstUpdated=${()=>{this.paymentSelectorFirstUpdated=!0}}
                @creditCardSelected=${()=>{this.selectedPaymentProvider=A.CreditCard}}
                @venmoSelected=${()=>{this.selectedPaymentProvider=A.Venmo}}
                @applePaySelected=${()=>{this.selectedPaymentProvider=A.ApplePay}}
                @googlePaySelected=${()=>{this.selectedPaymentProvider=A.GooglePay}}
                @paypalBlockerSelected=${()=>{this.selectedPaymentProvider="paypalBlocker"}}
                @resetPaymentMethod=${async()=>{this.selectedPaymentProvider="",this.contactFormVisible=!1,this.requestUpdate()}}
                tabindex="0"
              >
                <slot name="paypal-button" slot="paypal-button"></slot>
              </payment-selector>

              <div class="${r?"":"hidden"}">
                ${this.contactFormSection}
              </div>

              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!this.selectedPaymentProvider}
                >Update payment method</ia-mgc-button
              >
              <div class="secure-process-note">${ft} Your payment will be securely processed</div>
            </form>
          `:C}
        </donation-form-section>

    `}};q.styles=m`
    payment-selector {
      display: block;
      border: 1px solid red;
      margin-bottom: 5px;
      padding-bottom: 10px;
    }

    .secure-process-note {
      margin-top: 0.5em;
      font-size: 0.75em;
    }

    .secure-process-note svg{
      width: 1.2rem;
      height: 1.5rem;
      vertical-align: bottom;
    }

    .hidden {
      display: none;
    }
  `;s([h({type:Object})],q.prototype,"plan",void 0);s([h({type:String})],q.prototype,"patronEmail",void 0);s([h({type:Boolean,reflect:!0})],q.prototype,"currentlyEditing",void 0);s([h({type:String,reflect:!0})],q.prototype,"newPaymentMethod",void 0);s([h({type:Object})],q.prototype,"braintreeManager",void 0);s([h({type:String,reflect:!0})],q.prototype,"selectedPaymentProvider",void 0);s([h({type:Boolean,reflect:!0})],q.prototype,"contactFormVisible",void 0);s([h({type:Boolean})],q.prototype,"paymentSelectorFirstUpdated",void 0);q=s([P("ia-mgc-edit-payment-method")],q);var J;(function(i){i.Number="number",i.CVV="cvv",i.ExpirationDate="expirationDate"})(J||(J={}));class Qn{fieldFor(e){switch(e){case J.Number:return this.number;case J.CVV:return this.cvv;case J.ExpirationDate:return this.expirationDate}}markFieldErrors(e){e.forEach(t=>{const n=this.fieldFor(t);n.parentElement.error=!0})}removeFieldErrors(e){e.forEach(t=>{const n=this.fieldFor(t);n.parentElement.error=!1})}showErrorMessage(e){const t=e??"Some payment information below is missing or incorrect.";this.errorContainer.innerHTML=t,this.errorContainer.style.display="block"}hideErrorMessage(){this.errorContainer.style.display="none"}resetHostedFields(){[this.number,this.cvv,this.expirationDate].forEach(t=>{for(;t.firstChild;)t.firstChild.remove()})}constructor(e){this.number=e.number,this.cvv=e.cvv,this.expirationDate=e.expirationDate,this.errorContainer=e.errorContainer}}/*!
 * currency.js - v2.0.4
 * http://scurker.github.io/currency.js
 *
 * Copyright (c) 2021 Jason Wilson
 * Released under MIT license
 */var ti={symbol:"$",separator:",",decimal:".",errorOnInvalid:!1,precision:2,pattern:"!#",negativePattern:"-!#",format:ai,fromCents:!1},Xn=function(e){return Math.round(e)},Yt=function(e){return Math.pow(10,e)},ni=function(e,t){return Xn(e/t)*t},oi=/(\d)(?=(\d{3})+\b)/g,ii=/(\d)(?=(\d\d)+\d\b)/g;function L(i,e){var t=this;if(!(t instanceof L))return new L(i,e);var n=Object.assign({},ti,e),o=Yt(n.precision),a=rt(i,n);t.intValue=a,t.value=a/o,n.increment=n.increment||1/o,n.useVedic?n.groups=ii:n.groups=oi,this.s=n,this.p=o}function rt(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,n=0,o=e.decimal,a=e.errorOnInvalid,r=e.precision,d=e.fromCents,l=Yt(r),c=typeof i=="number",u=i instanceof L;if(u&&d)return i.intValue;if(c||u)n=u?i.value:i;else if(typeof i=="string"){var v=new RegExp("[^-\\d"+o+"]","g"),y=new RegExp("\\"+o,"g");n=i.replace(/\((.*)\)/,"-$1").replace(v,"").replace(y,"."),n=n||0}else{if(a)throw Error("Invalid Input");n=0}return d||(n*=l,n=n.toFixed(4)),t?Xn(n):n}function ai(i,e){var t=e.pattern,n=e.negativePattern,o=e.symbol,a=e.separator,r=e.decimal,d=e.groups,l=(""+i).replace(/^-/,"").split("."),c=l[0],u=l[1];return(i.value>=0?t:n).replace("!",o).replace("#",c.replace(d,"$1"+a)+(u?r+u:""))}L.prototype={add:function(e){var t=this.intValue,n=this.s,o=this.p;return L((t+=rt(e,n))/(n.fromCents?1:o),n)},subtract:function(e){var t=this.intValue,n=this.s,o=this.p;return L((t-=rt(e,n))/(n.fromCents?1:o),n)},multiply:function(e){var t=this.intValue,n=this.s;return L((t*=e)/(n.fromCents?1:Yt(n.precision)),n)},divide:function(e){var t=this.intValue,n=this.s;return L(t/=rt(e,n,!1),n)},distribute:function(e){for(var t=this.intValue,n=this.p,o=this.s,a=[],r=Math[t>=0?"floor":"ceil"](t/e),d=Math.abs(t-r*e),l=o.fromCents?1:n;e!==0;e--){var c=L(r/l,o);d-- >0&&(c=c[t>=0?"add":"subtract"](1/l)),a.push(c)}return a},dollars:function(){return~~this.value},cents:function(){var e=this.intValue,t=this.p;return~~(e%t)},format:function(e){var t=this.s;return typeof e=="function"?e(this,t):t.format(this,Object.assign({},t,e))},toString:function(){var e=this.intValue,t=this.p,n=this.s;return ni(e/t,n.increment).toFixed(n.precision)},toJSON:function(){return this.value}};let Le=()=>({emit(i,...e){for(let t=this.events[i]||[],n=0,o=t.length;n<o;n++)t[n](...e)},events:{},on(i,e){return(this.events[i]||=[]).push(e),()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}});class ri extends Error{constructor(e){super(e),this.name="DonationFormError"}}class si{on(e,t){return this.emitter.on(e,t)}constructor(e){var t,n;this.instance=new x({generator:()=>g(this,void 0,void 0,function*(){const o=yield this.braintreeManager.instance.get();return yield this.createHostedFields(o)})}),this.emitter=Le(),this.braintreeManager=e.braintreeManager,this.hostedFieldClient=e.hostedFieldClient,this.hostedFieldConfig=e.hostedFieldConfig,this.maxRetryCount=(t=e.maxRetryCount)!==null&&t!==void 0?t:2,this.loadTimeout=((n=e.loadTimeout)!==null&&n!==void 0?n:6)*1e3}createHostedFields(e){return g(this,arguments,void 0,function*(t,n=0){this.hostedFieldConfig.hostedFieldContainer.resetHostedFields();try{let o;const a=new Promise((l,c)=>{o=window.setTimeout(()=>{const u=new ri("Timeout loading Hosted Fields");c(u)},this.loadTimeout)}),r=new Promise((l,c)=>g(this,void 0,void 0,function*(){try{const u=yield this.hostedFieldClient.create({client:t,styles:this.hostedFieldConfig.hostedFieldStyle,fields:this.hostedFieldConfig.hostedFieldFieldOptions});window.clearTimeout(o),l(u)}catch(u){u instanceof Error&&u.message.includes("Hosted Fields timed out")||c(u)}}));return yield Promise.race([a,r])}catch(o){if(n>=this.maxRetryCount)throw this.emitter.emit("hostedFieldsFailed",o),o;const a=n+1;return this.emitter.emit("hostedFieldsRetry",a),this.createHostedFields(t,a)}})}tokenizeHostedFields(){return g(this,void 0,void 0,function*(){const e=yield this.instance.get();return e?.tokenize()})}markFieldErrors(e){this.hostedFieldConfig.hostedFieldContainer.markFieldErrors(e)}removeFieldErrors(e){this.hostedFieldConfig.hostedFieldContainer.removeFieldErrors(e)}showErrorMessage(e){this.hostedFieldConfig.hostedFieldContainer.showErrorMessage(e)}hideErrorMessage(){this.hostedFieldConfig.hostedFieldContainer.hideErrorMessage()}}class li{constructor(e){this.session=e.session,this.donationInfo=e.donationInfo,this.applePayInstance=e.applePayInstance,this.braintreeManager=e.braintreeManager}onvalidatemerchant(e){return g(this,void 0,void 0,function*(){return new Promise((t,n)=>{this.applePayInstance.performValidation({validationURL:e.validationURL,displayName:"Internet Archive"},(o,a)=>{var r;o?((r=this.delegate)===null||r===void 0||r.paymentFailed(o),this.session.abort(),n(`Merchant validation error: ${o}`)):(this.session.completeMerchantValidation(a),t())})})})}oncancel(){return g(this,void 0,void 0,function*(){var e;(e=this.delegate)===null||e===void 0||e.paymentCancelled()})}onpaymentauthorized(e){return g(this,void 0,void 0,function*(){var t,n,o,a;let r;try{r=yield this.applePayInstance.tokenize({token:e.payment.token})}catch($){(t=this.delegate)===null||t===void 0||t.paymentFailed($),this.session.completePayment(ApplePaySession.STATUS_FAILURE);return}const d=e.payment,l=d.billingContact,c=d.shippingContact,u=l?.addressLines;let v,y;u&&(v=u[0],y=u[1]);const f=new tt({streetAddress:v,extendedAddress:y,locality:l?.locality,region:l?.administrativeArea,postalCode:l?.postalCode,countryCodeAlpha2:l?.countryCode}),I=new nt({email:c?.emailAddress,firstName:c?.givenName,lastName:c?.familyName});try{const $=yield this.braintreeManager.submitDonation({nonce:r.nonce,paymentProvider:A.ApplePay,donationInfo:this.donationInfo,billingInfo:f,customerInfo:I});$.success?((n=this.delegate)===null||n===void 0||n.paymentComplete($),this.session.completePayment(ApplePaySession.STATUS_SUCCESS)):((o=this.delegate)===null||o===void 0||o.paymentFailed("Failure submitting data"),this.session.completePayment(ApplePaySession.STATUS_FAILURE))}catch($){(a=this.delegate)===null||a===void 0||a.paymentFailed($),this.session.completePayment(ApplePaySession.STATUS_FAILURE)}})}}class di{constructor(e){var t;this.braintreeManager=e.braintreeManager,this.applePayClient=e.applePayClient,this.applePaySessionManager=e.applePaySessionManager,this.instance=(t=e.instancePromisedSingleton)!==null&&t!==void 0?t:new x({generator:()=>g(this,void 0,void 0,function*(){if(!this.applePaySessionManager.canMakePayments())return;const n=yield this.braintreeManager.instance.get();return yield this.applePayClient.create({client:n})})})}isAvailable(){return g(this,void 0,void 0,function*(){try{return!!(yield this.instance.get())}catch{return!1}})}createPaymentRequest(e,t){return g(this,void 0,void 0,function*(){const n=yield this.instance.get();let o="Internet Archive Monthly";t.donationType===S.OneTime&&(o="Internet Archive");const a=n.createPaymentRequest({total:{label:o,amount:t.total},requiredBillingContactFields:["postalAddress"],requiredShippingContactFields:["name","email"]}),r=this.applePaySessionManager.createNewPaymentSession(a),d=new li({donationInfo:t,session:r,applePayInstance:n,braintreeManager:this.braintreeManager});return r.onvalidatemerchant=d.onvalidatemerchant.bind(d),r.onpaymentauthorized=d.onpaymentauthorized.bind(d),r.oncancel=d.oncancel.bind(d),r.begin(),d})}}class ci{constructor(e){var t;this.braintreeManager=e.braintreeManager,this.venmoClient=e.venmoClient,this.venmoProfileId=e.venmoProfileId,this.instance=(t=e.instancePromisedSingleton)!==null&&t!==void 0?t:new x({generator:()=>this.braintreeManager.instance.get().then(n=>this.venmoClient.create({client:n,profileId:this.venmoProfileId}))})}isBrowserSupported(){return g(this,void 0,void 0,function*(){var e;if(this.isMobileFirefox())return!1;const t=yield this.instance.get();return(e=t?.isBrowserSupported())!==null&&e!==void 0?e:!1})}startPayment(){return g(this,void 0,void 0,function*(){const e=yield this.instance.get();return e?.tokenize()})}isMobileFirefox(){const e=navigator.userAgent.indexOf("FxiOS")!==-1,t=navigator.userAgent.indexOf("Firefox")!==-1,n=navigator.userAgent.indexOf("Mobile")!==-1;return(t||e)&&n}}class ui{constructor(e){this.donationInfo=e.donationInfo,this.paypalInstance=e.paypalInstance}payment(){return g(this,void 0,void 0,function*(){var e;const n=this.donationInfo.donationType===S.OneTime?"checkout":"vault",o={flow:n,intent:"capture"};return o.enableShippingAddress=!0,n==="checkout"?(o.amount=this.donationInfo.total,o.currency="USD"):o.billingAgreementDescription=`Subscribe to donate ${L(this.donationInfo.total,{symbol:"$"}).format()} monthly`,(e=this.delegate)===null||e===void 0||e.payPalPaymentStarted(this,o),this.paypalInstance.createPayment(o)})}onAuthorize(e){return g(this,void 0,void 0,function*(){var t;const n=yield this.paypalInstance.tokenizePayment(e);return(t=this.delegate)===null||t===void 0||t.payPalPaymentAuthorized(this,n),n})}onConfirm(e){return g(this,void 0,void 0,function*(){var t;const n=yield this.paypalInstance.tokenizePayment(e);return(t=this.delegate)===null||t===void 0||t.payPalPaymentConfirmed(this,n),n})}onCancel(e){var t;(t=this.delegate)===null||t===void 0||t.payPalPaymentCancelled(this,e)}onError(e){var t;console.error("PayPal error",e),(t=this.delegate)===null||t===void 0||t.payPalPaymentError(this,e)}}class hi{constructor(e){this.braintreeManager=e.braintreeManager,this.paypalClient=e.paypalClient,this.paypalButtonGenerator=e.paypalButton,this.hostingEnvironment=e.hostingEnvironment,this.instance=new x({generator:()=>this.braintreeManager.instance.get().then(t=>this.paypalClient.create({client:t}))})}renderPayPalButton(e){return g(this,void 0,void 0,function*(){const t=this.hostingEnvironment===Z.Development?"sandbox":"production",n=yield this.instance.get();if(!n)return;const o=new ui({donationInfo:e.donationInfo,paypalInstance:n});return this.paypalButtonGenerator.render({env:t,style:e.style,payment:o.payment.bind(o),onAuthorize:o.onAuthorize.bind(o),onCancel:o.onCancel.bind(o),onError:o.onError.bind(o),funding:{disallowed:[paypal.FUNDING.VENMO]}},e.selector),o})}}class Qe{canMakePayments(){return"ApplePaySession"in window&&ApplePaySession.supportsVersion(Qe.VERSION)&&ApplePaySession.canMakePayments()}createNewPaymentSession(e){return new ApplePaySession(Qe.VERSION,e)}}Qe.VERSION=3;class pi{isBrowserSupported(){return g(this,void 0,void 0,function*(){return this.paymentsClient.isReadyToPay({apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:"CARD",parameters:{allowedAuthMethods:["PAN_ONLY"],allowedCardNetworks:["AMEX","DISCOVER","INTERAC","JCB","MASTERCARD","VISA"]}}],existingPaymentMethodRequired:!1}).then(e=>e.result)})}constructor(e){this.braintreeManager=e.braintreeManager,this.googlePayMerchantId=e.googlePayMerchantId,this.googlePayBraintreeClient=e.googlePayBraintreeClient,this.paymentsClient=e.googlePaymentsClient,this.instance=new x({generator:()=>this.braintreeManager.instance.get().then(t=>this.googlePayBraintreeClient.create({client:t,googlePayVersion:2,googleMerchantId:this.googlePayMerchantId}))})}}class mi{on(e,t){return this.emitter.on(e,t)}constructor(e){this.creditCardHandler=new x({generator:()=>g(this,void 0,void 0,function*(){const t=yield this.paymentClients.hostedFields.get(),n=new si({braintreeManager:this.braintreeManager,hostedFieldClient:t,hostedFieldConfig:this.hostedFieldConfig});return n.on("hostedFieldsRetry",o=>{this.emitter.emit("hostedFieldsRetry",o)}),n.on("hostedFieldsFailed",o=>{this.emitter.emit("hostedFieldsFailed",o)}),n})}),this.applePayHandler=new x({generator:()=>g(this,void 0,void 0,function*(){const t=yield this.paymentClients.applePay.get(),n=new Qe;return new di({braintreeManager:this.braintreeManager,applePayClient:t,applePaySessionManager:n})})}),this.venmoHandler=new x({generator:()=>g(this,void 0,void 0,function*(){const t=yield this.paymentClients.venmo.get();if(this.venmoProfileId)return new ci({braintreeManager:this.braintreeManager,venmoClient:t,venmoProfileId:this.venmoProfileId})})}),this.paypalHandler=new x({generator:()=>g(this,void 0,void 0,function*(){const t=this.paymentClients.paypalLibrary.get(),n=this.paymentClients.payPal.get(),o=yield Promise.all([n,t]);return new hi({braintreeManager:this.braintreeManager,paypalClient:o[0],paypalButton:o[1].Button,hostingEnvironment:this.hostingEnvironment})})}),this.googlePayHandler=new x({generator:()=>g(this,void 0,void 0,function*(){const t=this.paymentClients.googlePaymentsClient.get(),n=this.paymentClients.googlePayBraintreeClient.get(),o=yield Promise.all([n,t]);return new pi({braintreeManager:this.braintreeManager,googlePayMerchantId:this.googlePayMerchantId,googlePayBraintreeClient:o[0],googlePaymentsClient:o[1]})})}),this.hostingEnvironment=Z.Development,this.emitter=Le(),this.braintreeManager=e.braintreeManager,this.venmoProfileId=e.venmoProfileId,this.googlePayMerchantId=e.googlePayMerchantId,this.paymentClients=e.paymentClients,this.hostingEnvironment=e.hostingEnvironment,this.hostedFieldConfig=e.hostedFieldConfig}}class eo{on(e,t){return this.emitter.on(e,t)}startup(){return g(this,void 0,void 0,function*(){return this.collectDeviceData()})}submitDonation(e){return g(this,void 0,void 0,function*(){const t=new Gn;t.fee_amount_covered=e.donationInfo.feeAmountCovered,t.logged_in_user=this.loggedInUser,t.referrer=this.referrer,t.origin=this.origin;const n=k.calculateTotal(e.donationInfo.amount,e.donationInfo.coverFees),o=new Oo({deviceData:this.deviceData,paymentProvider:e.paymentProvider,paymentMethodNonce:e.nonce,amount:n,donationType:e.donationInfo.donationType,customer:e.customerInfo,billing:e.billingInfo,customFields:t,upsellOnetimeTransactionId:e.upsellOnetimeTransactionId,customerId:e.customerId,recaptchaToken:e.recaptchaToken,bin:e.bin,binName:e.binName}),a=yield this.endpointManager.submitData(o);return new jo(a)})}submitUpsellDonation(e){return g(this,void 0,void 0,function*(){const t=e.oneTimeDonationResponse,n=new k({amount:e.amount,donationType:S.Upsell,coverFees:!1});return this.submitDonation({nonce:t.paymentMethodNonce,paymentProvider:t.paymentProvider,customerId:t.customer_id,donationInfo:n,customerInfo:t.customer,billingInfo:t.billing,upsellOnetimeTransactionId:t.transaction_id})})}donationSuccessful(e){this.endpointManager.donationSuccessful(e)}collectDeviceData(){return g(this,void 0,void 0,function*(){if(this.deviceDataCollectionStarted)return;this.deviceDataCollectionStarted=!0;const e=yield this.instance.get();if(e)return this.paymentClients.dataCollector.get().then(t=>t?.create({client:e,kount:!1,paypal:!0})).then(t=>{this.deviceData=t?.deviceData})})}constructor(e){this.emitter=Le(),this.instance=new x({generator:()=>g(this,void 0,void 0,function*(){const t=yield this.paymentClients.braintreeClient.get();return t?.create({authorization:this.authorizationToken})})}),this.deviceDataCollectionStarted=!1,this.hostingEnvironment=Z.Development,this.authorizationToken=e.authorizationToken,this.endpointManager=e.endpointManager,this.hostingEnvironment=e.hostingEnvironment,this.paymentClients=e.paymentClients,this.referrer=e.referrer,this.loggedInUser=e.loggedInUser,this.origin=e.origin,this.paymentProviders=new mi({braintreeManager:this,paymentClients:this.paymentClients,venmoProfileId:e.venmoProfileId,googlePayMerchantId:e.googlePayMerchantId,hostingEnvironment:e.hostingEnvironment,hostedFieldConfig:e.hostedFieldConfig}),this.paymentProviders.on("hostedFieldsRetry",t=>{this.emitter.emit("paymentProvidersHostedFieldsRetry",t)}),this.paymentProviders.on("hostedFieldsFailed",t=>{this.emitter.emit("paymentProvidersHostedFieldsFailed",t)})}setReferrer(e){this.referrer=e}setLoggedInUser(e){this.loggedInUser=e}setOrigin(e){this.origin=e}}class vi{constructor(e){this.started=!1,this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager,this.recaptchaManager=e.recaptchaManager,this.emitter=Le()}on(e,t){return this.emitter.on(e,t)}startup(){return g(this,void 0,void 0,function*(){var e;if(this.started)return;this.started=!0;const t=yield(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders.creditCardHandler.get(),n=yield t?.instance.get();n?.on("focus",o=>{const{emittedBy:a,fields:r}=o,d=r[a],{container:l}=d;l.parentElement.error=!1,t.hideErrorMessage()}),n?.on("blur",o=>{const{emittedBy:a,fields:r}=o,d=r[a],{container:l,isEmpty:c,isValid:u}=d;(c||!u)&&(l.parentElement.error=!0)}),n?.on("validityChange",o=>{const{fields:a}=o,r=a.cvv.isValid&&a.expirationDate.isValid&&a.number.isValid;this.emitter.emit("validityChanged",r)})})}tokenizeFields(){return g(this,void 0,void 0,function*(){let e;const t=yield this.braintreeManager.paymentProviders.creditCardHandler.get();try{e=yield t?.tokenizeHostedFields()}catch(n){this.handleHostedFieldTokenizationError(n);return}return e})}paymentInitiated(e,t,n){return g(this,void 0,void 0,function*(){let o;try{o=yield this.recaptchaManager.execute()}catch{this.donationFlowModalManager.showErrorModal({message:"Recaptcha failure"});return}this.donationFlowModalManager.startDonationSubmissionFlow({nonce:e.nonce,paymentProvider:A.CreditCard,recaptchaToken:o,bin:e.details.bin,donationInfo:t,customerInfo:n.customer,billingInfo:n.billing})})}handleHostedFieldTokenizationError(e){return g(this,void 0,void 0,function*(){const t=yield this.braintreeManager.paymentProviders.creditCardHandler.get();switch(t.showErrorMessage(),e.code){case"HOSTED_FIELDS_FIELDS_EMPTY":t.markFieldErrors([J.Number,J.CVV,J.ExpirationDate]);break;case"HOSTED_FIELDS_FIELDS_INVALID":Object.keys(e.details.invalidFields).forEach(n=>{t.markFieldErrors([n])});break;case"HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE":break;case"HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED":t.markFieldErrors([J.CVV]);break}})}}class to{keydown(e){var t,n;const o=e.key;if(e.metaKey)return;switch(o){case"Tab":case"Delete":case"Backspace":case"ArrowLeft":case"ArrowRight":case"ArrowUp":case"ArrowDown":return}const a=e.target,r=a.value,d=r.slice(0,(t=a.selectionStart)!==null&&t!==void 0?t:0),l=r.slice((n=a.selectionEnd)!==null&&n!==void 0?n:0),c=`${d}${o}${l}`,u=/^[0-9]+(\.[0-9]{0,2})?$/g;c.match(u)||e.preventDefault()}}var ne;(function(i){i.YesButton="YesButton",i.PayPalUpsellSlot="PayPalUpsellSlot"})(ne||(ne={}));let De=class extends w{constructor(){super(...arguments),this.yesButtonMode=ne.YesButton,this.amount=5,this.currencyValidator=new to}render(){return p`
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
    `}get yesButton(){switch(this.yesButtonMode){case ne.YesButton:return p`
          <button
            class="cta-button"
            tabindex="0"
            id="yes-button"
            @click=${this.yesSelected}
            .disabled=${this.error!==void 0}
          >
            YES, I'll donate monthly
          </button>
        `;case ne.PayPalUpsellSlot:return p`
          <div class="paypal-upsell-slot-container">
            <div class="paypal-upsell-slot-blocker ${this.error?"":"hidden"}"></div>
            <button class="cta-button" id="paypal-cover-button">YES, I'll donate monthly</button>
            <slot class="paypal-upsell-slot"></slot>
          </div>
        `}}amountChanged(e){const n=e.target.value;n.length!==0&&this.handleCustomAmountInput(n)}handleCustomAmountInput(e){const t=parseFloat(e);isNaN(t)?this.error=p` Please enter a valid amount. `:this.processAmount(t)}processAmount(e){if(e>=1e4){this.error=p`
        To make a donation of $10,000 or more, please contact our philanthropy department at
        <a href="mailto:donations@archive.org">donations@archive.org</a>
      `;return}if(e<1){this.amountInput&&this.amountInput.value.length>0&&(this.error=p` The minimum donation amount is $1. `);return}this.error=void 0,this.amount=e;const t=new CustomEvent("amountChanged",{detail:{amount:this.amount}});this.dispatchEvent(t)}yesSelected(){const e=new CustomEvent("yesSelected",{detail:{amount:this.amount}});this.dispatchEvent(e)}noThanksSelected(){this.dispatchEvent(new Event("noThanksSelected"))}static get styles(){const e=m`var(--upsellCTAButtonColor, #194880)`,t=m`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`,n=m`var(--upsellAmountInputOffset, -1rem)`;return m`
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
        transform: translate(${n}, 0); /* translate slightly to center the input */
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
        background-color: ${e};
        color: #fff;
        border-radius: 5px;
        border: 0;
        font-weight: bold;
        line-height: normal;
        outline: none;
        cursor: pointer;
      }

      .cta-button:disabled {
        background-color: ${t};
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
    `}};s([h({type:String})],De.prototype,"yesButtonMode",void 0);s([h({type:Number})],De.prototype,"amount",void 0);s([h({type:Object})],De.prototype,"error",void 0);s([b("#amount-input")],De.prototype,"amountInput",void 0);De=s([P("upsell-modal-content")],De);class de{constructor(e){var t,n,o,a,r,d,l;this.title=e?.title,this.subtitle=e?.subtitle,this.headline=e?.headline,this.message=e?.message,this.headerColor=(t=e?.headerColor)!==null&&t!==void 0?t:"#55A183",this.bodyColor=(n=e?.bodyColor)!==null&&n!==void 0?n:"#f5f5f7",this.showProcessingIndicator=(o=e?.showProcessingIndicator)!==null&&o!==void 0?o:!1,this.processingImageMode=(a=e?.processingImageMode)!==null&&a!==void 0?a:"complete",this.showCloseButton=(r=e?.showCloseButton)!==null&&r!==void 0?r:!0,this.showHeaderLogo=(d=e?.showHeaderLogo)!==null&&d!==void 0?d:!0,this.closeOnBackdropClick=(l=e?.closeOnBackdropClick)!==null&&l!==void 0?l:!0}}function*Wt(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*Wt(i.shadowRoot.activeElement)))}function gi(){return[...Wt()].pop()}const Pn=new WeakMap;function no(i){let e=Pn.get(i);return e||(e=window.getComputedStyle(i,null),Pn.set(i,e)),e}function yi(i){if("checkVisibility"in i&&typeof i.checkVisibility=="function")return i.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=no(i);return e.visibility!=="hidden"&&e.display!=="none"}function fi(i){const e=no(i),{overflowY:t,overflowX:n}=e;return t==="scroll"||n==="scroll"?!0:t!=="auto"||n!=="auto"?!1:i.scrollHeight>i.clientHeight&&t==="auto"||i.scrollWidth>i.clientWidth&&n==="auto"}function bi(i){const e=i.tagName.toLowerCase(),t=Number(i.getAttribute("tabindex"));return i.hasAttribute("tabindex")&&(isNaN(t)||t<=-1)||i.hasAttribute("disabled")||i.closest("[inert]")||e==="input"&&i.getAttribute("type")==="radio"&&!i.hasAttribute("checked")||!yi(i)?!1:(e==="audio"||e==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:fi(i)}function Ci(i,e){var t;return((t=i.getRootNode({composed:!0}))===null||t===void 0?void 0:t.host)!==e}function An(i){const e=new WeakMap,t=[];function n(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]")||e.has(o))return;e.set(o,!0),!t.includes(o)&&bi(o)&&t.push(o),o instanceof HTMLSlotElement&&Ci(o,i)&&o.assignedElements({flatten:!0}).forEach(a=>{n(a)}),o.shadowRoot!==null&&o.shadowRoot.mode==="open"&&n(o.shadowRoot)}for(const a of Array.from(o.children))n(a)}return n(i),t.sort((o,a)=>{const r=Number(o.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-r})}let ze=[];class wi{constructor(e){this.isExternalActivated=!1,this.tabDirection="forward",this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var n;if(t.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=gi();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const a=An(this.element);let r=a.findIndex(l=>l===o);this.previousFocus=this.currentFocus;const d=this.tabDirection==="forward"?1:-1;for(;;){r+d>=a.length?r=0:r+d<0?r=a.length-1:r+=d,this.previousFocus=this.currentFocus;const l=a[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||l&&this.possiblyHasTabbableChildren(l))return;t.preventDefault(),this.currentFocus=l,(n=this.currentFocus)===null||n===void 0||n.focus({preventScroll:!1});const c=[...Wt()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=e,this.elementsWithTabbableControls=["iframe"]}activate(){ze.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ze=ze.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ze[ze.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const e=An(this.element);if(!this.element.matches(":focus-within")){const t=e[0],n=e[e.length-1],o=this.tabDirection==="forward"?t:n;typeof o?.focus=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute("controls")}}var In;(function(i){i.processing="processing",i.complete="complete"})(In||(In={}));let Ot=class extends w{constructor(){super(...arguments),this.mode="processing"}render(){return p`
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
    `}static get styles(){const e=m`var(--activityIndicatorCheckmarkColor, #31A481)`,t=m`var(--activityIndicatorCompletedRingColor, #31A481)`,n=m`var(--activityIndicatorLoadingRingColor, #333333)`,o=m`var(--activityIndicatorLoadingDotColor, #333333)`;return m`
      #completed-ring {
        fill: ${t};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${n};
      }

      #activity-dots {
        fill: ${o};
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
    `}};s([h({type:String})],Ot.prototype,"mode",void 0);Ot=s([P("ia-activity-indicator")],Ot);const $i=p`
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
`;class Si extends w{static get styles(){return m`
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
    `}render(){return $i}}customElements.define("ia-icon-close",Si);const Mi=p`
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
`;let Ut=class extends w{constructor(){super(...arguments),this.config=new de}render(){return p`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:""}
            ${this.config.showHeaderLogo?p`<div class="logo-icon">${Mi}</div>`:C}
            ${this.config.title?p`<h1 class="title">${this.config.title}</h1>`:""}
            ${this.config.subtitle?p`<h2 class="subtitle">${this.config.subtitle}</h2>`:""}
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
              ${this.config.headline?p` <h1 class="headline">${this.config.headline}</h1> `:""}
              ${this.config.message?p` <p class="message">${this.config.message}</p> `:""}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(e){if(e.preventDefault(),e.type==="keydown"&&e.key!==" "&&e.key!=="Enter")return;const t=new Event("closeButtonPressed");this.dispatchEvent(t)}get closeButtonTemplate(){return p`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){const e=m`var(--modalLogoSize, 6.5rem)`,t=m`var(--processingImageSize, 7.5rem)`,n=m`var(--modalCornerRadius, 1rem)`,o=m`var(--modalBorder, 2px solid black)`,a=m`var(--modalBottomMargin, 2.5rem)`,r=m`var(--modalTopMargin, 5rem)`,d=m`var(--modalHeaderBottomPadding, 0.5em)`,l=m`var(--modalBottomPadding, 2rem)`,c=m`var(--modalScrollOffset, 5px)`,u=m`var(--modalTitleFontSize, 1.8rem)`,v=m`var(--modalSubtitleFontSize, 1.4rem)`,y=m`var(--modalHeadlineFontSize, 1.6rem)`,f=m`var(--modalMessageFontSize, 1.4rem)`,I=m`var(--modalTitleLineHeight, normal)`,$=m`var(--modalSubtitleLineHeight, normal)`,T=m`var(--modalHeadlineLineHeight, normal)`,j=m`var(--modalMessageLineHeight, normal)`;return m`
      .processing-logo {
        margin: auto;
        width: ${t};
        height: ${t};
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
        border-radius: ${n};
        width: 100%;
        margin-top: ${r};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${n}) calc(${n}) 0 0;
        border: ${o};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${d};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${u};
        font-weight: bold;
        line-height: ${I};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${v};
        line-height: ${$};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${n}) calc(${n});
        border: ${o};
        border-top: 0;
        padding: 0 1rem calc(${l} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${a}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${y};
        font-weight: bold;
        text-align: center;
        line-height: ${T};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${f};
        line-height: ${j};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${e};
        height: ${e};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${e} * 0.65);
        height: calc(${e} * 0.65);
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
    `}};s([h({type:Object})],Ut.prototype,"config",void 0);Ut=s([P("modal-template")],Ut);function Pi(i,e,t){var n=t||{},o=n.noTrailing,a=o===void 0?!1:o,r=n.noLeading,d=r===void 0?!1:r,l=n.debounceMode,c=l===void 0?void 0:l,u,v=!1,y=0;function f(){u&&clearTimeout(u)}function I(T){var j=T||{},V=j.upcomingOnly,re=V===void 0?!1:V;f(),v=!re}function $(){for(var T=arguments.length,j=new Array(T),V=0;V<T;V++)j[V]=arguments[V];var re=this,we=Date.now()-y;if(v)return;function $e(){y=Date.now(),e.apply(re,j)}function ot(){u=void 0}!d&&c&&!u&&$e(),f(),c===void 0&&we>i?d?(y=Date.now(),a||(u=setTimeout(c?ot:$e,i))):$e():a!==!0&&(u=setTimeout(c?ot:$e,c===void 0?i-we:i))}return $.cancel=I,$}var ve;(function(i){i.Open="open",i.Closed="closed"})(ve||(ve={}));class Ai{constructor(e){this.windowResizeThrottler=Pi(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case ve.Open:this.startResizeListener(),this.stopDocumentScroll();break;case ve.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty("--containerHeight",`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add("modal-manager-open")}resumeDocumentScroll(){document.body.classList.remove("modal-manager-open")}startResizeListener(){window.addEventListener("resize",this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener("resize",this.windowResizeThrottler)}}let Te=class extends w{constructor(){super(...arguments),this.mode=ve.Closed,this.hostBridge=new Ai(this),this.modal=new wi(this),this.closeOnBackdropClick=!0}firstUpdated(){return g(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return p`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=ve.Closed,this.customModalContent=void 0,this.modalTemplate.config=new de,this.modal.deactivate()}callUserClosedModalCallback(){const e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return g(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=ve.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(e){e.has("mode")&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){const e=new CustomEvent("modeChanged",{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){const e=m`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=m`var(--modalBackdropZindex, 1000)`,n=m`var(--modalWidth, 32rem)`,o=m`var(--modalMaxWidth, 95%)`,a=m`var(--modalZindex, 2000)`;return m`
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${e};
        width: 100%;
        height: 100%;
        z-index: ${t};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${a};
        width: ${n};
        max-width: ${o};
      }
    `}};s([h({type:String,reflect:!0})],Te.prototype,"mode",void 0);s([h({type:Object})],Te.prototype,"customModalContent",void 0);s([h({type:Object})],Te.prototype,"hostBridge",void 0);s([b("modal-template")],Te.prototype,"modalTemplate",void 0);Te=s([P("modal-manager")],Te);let Ce=class extends w{constructor(){super(...arguments),this.amount=5,this.currencyType="$",this.donationType=S.OneTime,this.confirmDonation=()=>{},this.cancelDonation=()=>{}}get confirmationText(){const e=L(this.amount,{symbol:this.currencySymbol}).format();return p`
      <p>
        You are about to make a <b>${this.donationType}</b> donation of
        <b>${e} ${this.currencyType}</b> to the Internet Archive.
      </p>
    `}get confirmUpsellText(){const e=L(this.amount,{symbol:this.currencySymbol}).format();return p`<p>
      You are about to begin making <b>monthly</b> donations of
      <b>${e} ${this.currencyType}</b> to the Internet Archive. (Your first recurring
      contribution will be next month.)
    </p>`}confirm(){this===null||this===void 0||this.confirmDonation()}cancel(){this===null||this===void 0||this.cancelDonation()}get confirmCTA(){return this.donationType===S.Upsell?"Start monthly donation":"Complete donation"}render(){return p`
      ${this.donationType===S.Upsell?this.confirmUpsellText:this.confirmationText}

      <div class="cta-group">
        <button id="confirm" @click=${()=>this.confirm()}>${this.confirmCTA}</button>
        <button id="cancel" @click=${()=>this.cancel()}>Cancel</button>
      </div>
    `}static get styles(){const e=m`var(--upsellCTAButtonColor, #194880)`,t=m`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`;return m`
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
        background-color: ${e};
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
        background-color: ${t};
        cursor: not-allowed;
      }
    }`}get currencySymbol(){switch(this.currencyType){case"AUD":return"AU$";case"BRL":return"R$";case"CAD":return"CA$";case"CHF":return"Fr";case"CNY":return"¥";case"CZK":return"Kč";case"DKK":return"Kr";case"EUR":return"€";case"GBP":return"£";case"HKD":return"HK$";case"HUF":return"Ft";case"ILS":return"₪";case"JPY":return"¥";case"MXN":return"MX$";case"MYR":return"RM";case"NOK":return"kr";case"PLN":return"zł";case"RUB":return"₽";case"SEK":return"kr";case"SGD":return"S$";case"THB":return"฿";case"TYD":return"NT$";default:return"$"}}};s([h({type:Number})],Ce.prototype,"amount",void 0);s([h({type:String})],Ce.prototype,"currencyType",void 0);s([h({type:String})],Ce.prototype,"donationType",void 0);s([h({type:Function})],Ce.prototype,"confirmDonation",void 0);s([h({type:Function})],Ce.prototype,"cancelDonation",void 0);Ce=s([P("confirm-donation-modal")],Ce);let En=class extends w{render(){return p`
      <div class="container">
        <a
          href="https://help.archive.org/help/why-is-there-a-problem-processing-my-donation/"
          rel="noopener"
          target="_blank"
        >
          Questions?
        </a>
      </div>
    `}static get styles(){const e=m`var(--errorModalQuestionsLinkTopMargin, 1rem)`,t=m`var(--errorModalQuestionsLinkFontColor, #333)`,n=m`var(--errorModalQuestionsLinkFontSize, 1.4rem)`;return m`
      .container {
        margin-top: ${e};
        text-align: center;
      }

      a,
      a:link,
      a:visited {
        color: ${t};
        font-size: ${n};
      }
    `}};En=s([P("donation-form-error-modal-content")],En);var ce;(function(i){i.Blue="#497fbf",i.Green="#55A183",i.Red="#691916"})(ce||(ce={}));class bt{constructor(e){this.modalManager=e.modalManager,this.braintreeManager=e.braintreeManager,this.analytics=e.analytics}closeModal(){this.modalManager.closeModal()}showProcessingModal(){const e=new de({headerColor:ce.Blue,showProcessingIndicator:!0,closeOnBackdropClick:!1,showCloseButton:!1,processingImageMode:"processing",title:p` Processing... `});this.modalManager.showModal({config:e})}showThankYouModal(e){const t=new de({showProcessingIndicator:!0,processingImageMode:"complete",headerColor:ce.Green,title:p` Thank You! `});this.modalManager.showModal({config:t});let o=`Donated-${e.successResponse.paymentProvider.replace(/\s+/g,"")}`;e.upsellSuccessResponse&&(o+="-upsell");const a=e.successResponse.donationType;this.analytics.logDonationFlowEvent(o,a),this.braintreeManager.donationSuccessful(e)}showErrorModal(e){const t=new de({headerColor:ce.Red,title:p` Processing error `,headline:p` There's been a problem completing your donation. `,message:p` ${e?.message} `});this.modalManager.showModal({config:t,userClosedModalCallback:e?.userClosedModalCallback,customModalContent:p`
        <donation-form-error-modal-content></donation-form-error-modal-content>
      `})}showConfirmationStepModal(e){const t=()=>{e?.confirmDonationCB()},n=()=>{e?.cancelDonationCB()},o=e.donationType===S.Upsell?"Confirm monthly donation":"Complete donation",a=new de({closeOnBackdropClick:!1,headerColor:ce.Green,title:p`${o}`,message:p`
        <confirm-donation-modal
          .amount="${e.amount}"
          .currencyType="${e.currencyType}"
          .donationType="${e.donationType}"
          .confirmDonation=${t}
          .cancelDonation=${n}
        ></confirm-donation-modal>
      `});return this.modalManager.showModal({config:a,userClosedModalCallback:n})}showUpsellModal(e){var t;const n=new de({headerColor:ce.Green,title:p` Donation received `,processingImageMode:"complete",showProcessingIndicator:!0}),o=bt.getDefaultUpsellAmount(e.oneTimeAmount);e.amountChanged&&e.amountChanged(o);const a=p`
      <upsell-modal-content
        .amount=${o}
        .yesButtonMode=${(t=e?.ctaMode)!==null&&t!==void 0?t:ne.YesButton}
        @yesSelected=${r=>e?.yesSelected?e.yesSelected(r.detail.amount):void 0}
        @noThanksSelected=${e?.noSelected}
        @amountChanged=${r=>e?.amountChanged?e.amountChanged(r.detail.amount):void 0}
      >
        <slot name="paypal-upsell-button"></slot>
      </upsell-modal-content>
    `;return this.modalManager.showModal({config:n,customModalContent:a,userClosedModalCallback:e?.userClosedModalCallback})}startDonationSubmissionFlow(e){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const t=yield this.braintreeManager.submitDonation(e);if(t.success)return this.handleSuccessfulDonationResponse(e.donationInfo,t.value),t;{const n=t.value;return this.showErrorModal({message:n.message}),t}}catch(t){this.showErrorModal({message:`${t}`}),console.error("error getting a response",t);return}})}upsellModalYesSelected(e,t){return g(this,void 0,void 0,function*(){this.showProcessingModal();try{const n=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:e,amount:t});if(n.success)this.completeUpsell({successResponse:e,upsellSuccessResponse:n.value});else{const o=n.value;this.showErrorModal({message:o.message})}return n}catch(n){this.showErrorModal({message:`${n}`}),console.error("error getting a response",n);return}})}completeUpsell(e){this.showThankYouModal(e);const n=`Donated-${e.successResponse.paymentProvider.replace(/\s+/g,"")}-upsell`,o=e.successResponse.donationType;this.analytics.logDonationFlowEvent(n,o),this.braintreeManager.donationSuccessful(e)}static getDefaultUpsellAmount(e){let t=5;return e<=10?t=7.71:e>10&&e<=25?t=10:e>25&&e<=100?t=25:e>100&&(t=50),t}handleSuccessfulDonationResponse(e,t){switch(e.donationType){case S.OneTime:this.showUpsellModal({oneTimeAmount:t.amount,yesSelected:n=>{this.upsellModalYesSelected(t,n)},noSelected:()=>{this.showThankYouModal({successResponse:t})},userClosedModalCallback:()=>{this.showThankYouModal({successResponse:t})}});break;case S.Monthly:this.showThankYouModal({successResponse:t});break;case S.Upsell:break}}}class Ii{constructor(e){this.upsellButtonDataSource=e.upsellButtonDataSource,this.oneTimePayload=e.oneTimePayload,this.oneTimeSuccessResponse=e.oneTimeSuccessResponse}}class Ei{updateDonationInfo(e){this.buttonDataSource&&(this.buttonDataSource.donationInfo=e)}updateUpsellDonationInfo(e){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo=e)}constructor(e){this.emitter=Le(),this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}on(e,t){return this.emitter.on(e,t)}payPalPaymentStarted(e,t){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentStarted",e,t)})}payPalPaymentAuthorized(e,t){return g(this,void 0,void 0,function*(){const{donationType:n,total:o}=e.donationInfo;this.donationFlowModalManager.showConfirmationStepModal({donationType:n,amount:o,currencyType:"USD",confirmDonationCB:()=>{this.payPalPaymentConfirmed(e,t)},cancelDonationCB:()=>{this.donationFlowModalManager.closeModal(),this.payPalPaymentCancelled(e,{})}})})}payPalPaymentConfirmed(e,t){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentConfirmed",e,{}),this.donationFlowModalManager.showProcessingModal();const n=e.donationInfo.donationType,o=t?.details,a=new nt({email:o?.email,firstName:o?.firstName,lastName:o?.lastName}),r=o.shippingAddress,d=new tt({streetAddress:r?.line1,extendedAddress:r?.line2,locality:r?.city,region:r?.state,postalCode:r?.postalCode,countryCodeAlpha2:r?.countryCode}),l=this.upsellButtonDataSourceContainer?this.upsellButtonDataSourceContainer.oneTimeSuccessResponse.transaction_id:void 0,c=yield this.braintreeManager.submitDonation({nonce:t.nonce,paymentProvider:A.PayPal,donationInfo:e.donationInfo,customerInfo:a,billingInfo:d,upsellOnetimeTransactionId:l});if(!c.success){const v=c.value;this.donationFlowModalManager.showErrorModal({message:v.message});return}const u=c.value;switch(n){case S.OneTime:this.showUpsellModal(t,u);break;case S.Monthly:this.donationFlowModalManager.showThankYouModal({successResponse:u});break;case S.Upsell:this.upsellButtonDataSourceContainer?this.donationFlowModalManager.showThankYouModal({successResponse:this.upsellButtonDataSourceContainer.oneTimeSuccessResponse,upsellSuccessResponse:u}):this.donationFlowModalManager.showErrorModal({message:"Error setting up monthly donation"});break}})}payPalPaymentCancelled(e,t){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentCancelled",e,t)})}payPalPaymentError(e,t){return g(this,void 0,void 0,function*(){this.emitter.emit("payPalPaymentError",e,t),console.error("PaymentSector:payPalPaymentError error:",e,e.donationInfo,t)})}renderPayPalButton(e){return g(this,void 0,void 0,function*(){var t;const n=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.paypalHandler.get();this.buttonDataSource=yield n?.renderPayPalButton({selector:"#paypal-button",style:{color:"blue",label:"paypal",shape:"rect",size:"medium",tagline:!1},donationInfo:e}),this.buttonDataSource&&(this.buttonDataSource.delegate=this)})}showUpsellModal(e,t){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showUpsellModal({oneTimeAmount:t.amount,amountChanged:this.upsellAmountChanged.bind(this),noSelected:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:t})},ctaMode:ne.PayPalUpsellSlot,userClosedModalCallback:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:t})}});const n=bt.getDefaultUpsellAmount(t.amount),o=new k({amount:n,donationType:S.Upsell,coverFees:!1});this.upsellButtonDataSourceContainer||this.renderUpsellPayPalButton({donationInfo:o,oneTimePayload:e,oneTimeSuccessResponse:t})})}upsellAmountChanged(e){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo.amount=e)}renderUpsellPayPalButton(e){return g(this,void 0,void 0,function*(){var t;const n=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.paypalHandler.get(),o=yield n?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:e.donationInfo});o?(o.delegate=this,this.upsellButtonDataSourceContainer=new Ii({upsellButtonDataSource:o,oneTimePayload:e.oneTimePayload,oneTimeSuccessResponse:e.oneTimeSuccessResponse})):console.error("error rendering paypal upsell button")})}}class _i{constructor(e){this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}paymentInitiated(e,t){return g(this,void 0,void 0,function*(){var n;this.donationFlowModalManager.showProcessingModal();const o=yield(n=this.braintreeManager)===null||n===void 0?void 0:n.paymentProviders.applePayHandler.get();this.applePayDataSource=yield o?.createPaymentRequest(t,e),this.applePayDataSource&&(this.applePayDataSource.delegate=this)})}modalYesSelected(e,t){return g(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal();const n=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:e,amount:t});if(n.success)this.donationFlowModalManager.showThankYouModal({successResponse:e,upsellSuccessResponse:n.value});else{const o=n.value;this.donationFlowModalManager.showErrorModal({message:o.message})}})}paymentComplete(e){var t;if(e.success){const n=e.value;((t=this.applePayDataSource)===null||t===void 0?void 0:t.donationInfo.donationType)==S.OneTime?this.donationFlowModalManager.showUpsellModal({oneTimeAmount:n.amount,yesSelected:this.modalYesSelected.bind(this,n),noSelected:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:n}),userClosedModalCallback:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:n})}):this.donationFlowModalManager.showThankYouModal({successResponse:n})}else{const n=e.value;this.donationFlowModalManager.showErrorModal({message:n.message})}}paymentFailed(){this.donationFlowModalManager.showErrorModal({message:"Payment failed"})}paymentCancelled(){this.donationFlowModalManager.closeModal()}}class _n{constructor(e){this.contactInfo=e.contactInfo,this.donationInfo=e.donationInfo}}class Fi{constructor(e){this.persistanceKey="venmoRestorationStateInfo",e?.storageSystem?this.storageSystem=e.storageSystem:this.storageSystemAvailable(localStorage)?this.storageSystem=localStorage:this.storageSystemAvailable(sessionStorage)&&(this.storageSystem=sessionStorage)}clearState(){var e;(e=this.storageSystem)===null||e===void 0||e.removeItem(this.persistanceKey)}persistState(e,t){var n;const o=new _n({contactInfo:e,donationInfo:t}),a=JSON.stringify(o);(n=this.storageSystem)===null||n===void 0||n.setItem(this.persistanceKey,a)}getRestorationState(){return g(this,void 0,void 0,function*(){var e;const t=(e=this.storageSystem)===null||e===void 0?void 0:e.getItem(this.persistanceKey);if(!t){console.error("restoreState: No stored data");return}const n=JSON.parse(t);if(!n){console.error("restoreState: Data could not be deserialized");return}return new _n(n)})}storageSystemAvailable(e){try{return e.setItem("foo","bar"),e.removeItem("foo"),!0}catch{return!1}}}class xi{constructor(e){var t;this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager,this.restorationStateHandler=(t=e.restorationStateHandler)!==null&&t!==void 0?t:new Fi}startup(){return g(this,void 0,void 0,function*(){const e=yield this.braintreeManager.paymentProviders.venmoHandler.get(),t=yield e?.instance.get();if(t?.hasTokenizationResult()){const n=yield this.restorationStateHandler.getRestorationState();n?this.paymentInitiated(n.contactInfo,n.donationInfo):(console.error("no restoration info"),this.donationFlowModalManager.showErrorModal({message:"Error restoring donation session"}))}})}paymentInitiated(e,t){return g(this,void 0,void 0,function*(){this.restorationStateHandler.persistState(e,t);try{const n=yield this.braintreeManager.paymentProviders.venmoHandler.get(),o=yield n?.startPayment();if(!o){this.restorationStateHandler.clearState(),this.donationFlowModalManager.showErrorModal({message:"Error setting up the donation"});return}this.handleTokenizationResult(o,e,t)}catch(n){this.restorationStateHandler.clearState(),this.handleTokenizationError(n),this.donationFlowModalManager.showErrorModal({message:"There was a problem loading your donation information. Please try again."})}})}handleTokenizationResult(e,t,n){return g(this,void 0,void 0,function*(){this.restorationStateHandler.clearState(),this.donationFlowModalManager.startDonationSubmissionFlow({nonce:e.nonce,paymentProvider:A.Venmo,donationInfo:n,customerInfo:t.customer,billingInfo:t.billing})})}handleTokenizationError(e){switch(e.code){case"VENMO_APP_CANCELED":break;case"VENMO_CANCELED":break;default:console.error("Error!",e)}}}class Di{constructor(e){this.emitter=Le(),this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}on(e,t){return this.emitter.on(e,t)}paymentInitiated(e){return g(this,void 0,void 0,function*(){var t,n;const o=yield(t=this.braintreeManager)===null||t===void 0?void 0:t.paymentProviders.googlePayHandler.get(),a=yield o.instance.get(),r=yield a.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:"USD",totalPriceStatus:"FINAL",totalPrice:`${e.total}`}}),d=r.allowedPaymentMethods[0];d.parameters.billingAddressRequired=!0,d.parameters.billingAddressParameters={format:"FULL",phoneNumberRequired:!1};try{const l=yield o.paymentsClient.loadPaymentData(r),c=yield a.parseResponse(l),u=(n=l.paymentMethodData.info)===null||n===void 0?void 0:n.billingAddress,v=u?.name;let y=v,f="";const I=v?.lastIndexOf(" ");I&&I!==-1&&(y=v?.substr(0,I),f=v?.substr(I));const $=new nt({email:l.email,firstName:y,lastName:f}),T=new tt({streetAddress:u?.address1,extendedAddress:u?.address2,locality:u?.locality,region:u?.administrativeArea,postalCode:u?.postalCode,countryCodeAlpha2:u?.countryCode});this.donationFlowModalManager.startDonationSubmissionFlow({nonce:c.nonce,paymentProvider:A.GooglePay,bin:c.details.bin,binName:c.binData.issuingBank,donationInfo:e,customerInfo:$,billingInfo:T})}catch{this.emitter.emit("paymentCancelled"),this.donationFlowModalManager.closeModal()}})}}class Ti{startup(){return g(this,void 0,void 0,function*(){var e,t;(e=this.venmoHandler)===null||e===void 0||e.startup(),(t=this.creditCardHandler)===null||t===void 0||t.startup()})}showUpsellModal(e){return g(this,void 0,void 0,function*(){return this.donationFlowModalManager.showUpsellModal(e)})}showConfirmationStepModal(e){return this.donationFlowModalManager.showConfirmationStepModal(e)}get creditCardHandler(){return this.creditCardHandlerCache?this.creditCardHandlerCache:(this.creditCardHandlerCache=new vi({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager,recaptchaManager:this.recaptchaManager}),this.creditCardHandlerCache)}get paypalHandler(){return this.paypalHandlerCache?this.paypalHandlerCache:(this.paypalHandlerCache=new Ei({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.paypalHandlerCache)}get applePayHandler(){return this.applePayHandlerCache?this.applePayHandlerCache:(this.applePayHandlerCache=new _i({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.applePayHandlerCache)}get venmoHandler(){return this.venmoHandlerCache?this.venmoHandlerCache:(this.venmoHandlerCache=new xi({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.venmoHandlerCache)}get googlePayHandler(){return this.googlePayHandlerCache?this.googlePayHandlerCache:(this.googlePayHandlerCache=new Di({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.googlePayHandlerCache)}constructor(e){this.braintreeManager=e.braintreeManager,this.modalManager=e.modalManager,this.recaptchaManager=e.recaptchaManager,this.resources=e.resources,this.donationFlowModalManager=new bt({braintreeManager:this.braintreeManager,modalManager:this.modalManager,analytics:this.resources.analytics})}}class ki{constructor(e){this.isExecuting=!1,this.grecaptchaLibrary=e.grecaptchaLibrary,this.siteKey=e.siteKey}execute(){return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((e,t)=>{this.executionSuccessBlock=n=>{this.finishExecution(),e(n)},this.executionExpiredBlock=()=>{this.finishExecution(),t("expired")},this.executionErrorBlock=()=>{this.finishExecution(),t("error")},this.grecaptchaLibrary.execute()})}finishExecution(){this.isExecuting=!1,this.grecaptchaLibrary.reset()}setup(e,t,n,o){this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t,theme:n,type:o,size:"invisible"})}responseHandler(e){this.executionSuccessBlock&&(this.executionSuccessBlock(e),this.executionSuccessBlock=void 0)}expiredHandler(){this.executionExpiredBlock&&(this.executionExpiredBlock(),this.executionExpiredBlock=void 0)}errorHandler(){this.executionErrorBlock&&(this.executionErrorBlock(),this.executionErrorBlock=void 0)}}class Bi{constructor(e){this.hostedFieldFieldOptions=e.hostedFieldFieldOptions,this.hostedFieldStyle=e.hostedFieldStyle,this.hostedFieldContainer=e.hostedFieldContainer}}var Ve;(function(i){i.HideNumbers="hidenumbers",i.ShowNumbers="shownumbers"})(Ve||(Ve={}));var Y;(function(i){i.DonationType="donationType",i.Amount="amount"})(Y||(Y={}));var O;(function(i){i.ValidDonationAmount="valid_donation_amount",i.InvalidDonationAmount="invalid_donation_amount",i.DonationTooHigh="donation_too_high",i.DonationTooLow="donation_too_low"})(O||(O={}));var U;(function(i){i.Button="button",i.Checkbox="checkbox",i.Hide="hide"})(U||(U={}));var oe;(function(i){i.SingleLine="single-line",i.MultiLine="multi-line"})(oe||(oe={}));let H=class extends w{constructor(){super(...arguments),this.donationInfo=Yn,this.stepNumberMode=Ve.ShowNumbers,this.amountOptions=yt,this.amountSelectionLayout=oe.MultiLine,this.frequencySelectionMode=U.Button,this.customAmountMode="display",this.customFeesCheckboxMode="display",this.amountTitleDisplayMode="default",this.customAmountSelected=!1,this.currencyValidator=new to}render(){const e="Choose an amount (USD)",t=this.amountTitleDisplayMode==="default"?e:"";return p`
      ${this.frequencySelectionMode===U.Button?this.frequencyButtonsTemplate:C}

      <donation-form-section
        sectionBadge="${this.amountSelectionSectionNumber}"
        headline=${t}
        badgeMode=${this.formSectionNumberMode}
      >
        ${this.amountTitleDisplayMode==="slot"?p`<slot name="edit-donation-amount-title"></slot>`:C}
        <ul class="amount-selector">
          ${this.presetAmountsTemplate}
          ${this.customAmountMode==="display"?p`<li class="custom-amount">${this.customAmountTemplate}</li>`:C}
        </ul>

        <div class="errors">${this.error}</div>

        ${this.customFeesCheckboxMode==="display"?p` <div class="checkbox-options">
              ${this.customFeesCheckboxTemplate}
              ${this.frequencySelectionMode===U.Checkbox?this.frequencyCheckboxTemplate:C}
            </div>`:C}
      </donation-form-section>
    `}updated(e){e.has("customAmountSelected")&&this.customAmountButton&&(this.customAmountButton.checked=this.customAmountSelected),e.has("amountOptions")&&(this.customAmountSelected=!1,this.updateSelectedDonationInfo(),this.setupAmountColumnsLayoutConfig()),e.has("amountSelectionLayout")&&this.setupAmountColumnsLayoutConfig(),e.has("donationInfo")&&this.updateSelectedDonationInfo(),e.has("defaultSelectedAmount")&&this.defaultSelectedAmount!==void 0&&(this.customAmountSelected=!1,this.donationInfo=new k({donationType:this.donationInfo.donationType,amount:this.defaultSelectedAmount,coverFees:this.donationInfo.coverFees}))}get frequencyButtonsTemplate(){return p`
      <donation-form-section
        sectionBadge="1"
        headline="Choose a frequency"
        badgeMode=${this.formSectionNumberMode}
      >
        <ul class="frequency-selector">
          ${this.frequencyTemplate}
        </ul>
      </donation-form-section>
    `}get frequencyCheckboxTemplate(){return p`
      <div class="checkbox-option-container">
        <input
          type="checkbox"
          id="make-this-monthly"
          @input=${this.monthlyCheckboxChecked}
          .checked=${this.donationInfo.donationType===S.Monthly}
          tabindex="0"
        />
        <label for="make-this-monthly"> Make this monthly </label>
      </div>
    `}get customFeesCheckboxTemplate(){return p`
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
    `}get amountSelectionSectionNumber(){return this.frequencySelectionMode===U.Button?2:1}get formSectionNumberMode(){switch(this.stepNumberMode){case Ve.ShowNumbers:return xe.ShowBadge;case Ve.HideNumbers:return xe.HideBadge}}setupAmountColumnsLayoutConfig(){const e=this.customAmountMode==="hide"&&this.customFeesCheckboxMode==="hide"&&this.frequencySelectionMode===U.Hide,t=this.amountOptions.length;let n=5,o=3;switch(t){case 7:n=5,o=3;break;case 6:n=4,o=2;break;case 5:n=4,o=3;break;case 4:if(e){n=4,o=0;break}n=3,o=2;break;case 3:n=2,o=1;break}this.amountSelectionLayout===oe.SingleLine&&(n=t+3,o=3),this.style.setProperty("--paymentSelectorAmountColumnCount",`${n}`),this.style.setProperty("--paymentSelectorCustomAmountColSpan",`${o}`)}updateSelectedDonationInfo(){var e,t;if(!this.customAmountSelected&&this.amountOptions.includes(this.donationInfo.amount)){const n=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`input[type="radio"][name="${Y.Amount}"][value="${this.donationInfo.amount}"]`);n.checked=!0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value="")}else if(this.customAmountSelected=!0,((t=this.shadowRoot)===null||t===void 0?void 0:t.activeElement)!==this.customAmountInput){this.customAmountInput.value=`${this.donationInfo.amount}`;const n=this.getDonationInfoStatus(this.donationInfo.amount);this.handleDonationInfoStatus(n)}}get coverFeesTextTemplate(){const e=L(this.donationInfo.fee,{symbol:"$"}).format();return p` I'll generously add ${e} to cover fees. `}formatShortenedAmount(e){const t=e%1===0?0:2;return L(e,{symbol:"$",precision:t}).format()}get frequencyTemplate(){return p`
      <li>
        ${this.getRadioButton({group:Y.DonationType,value:S.OneTime,displayText:"One time",checked:this.donationInfo.donationType===S.OneTime})}
      </li>

      <li>
        ${this.getRadioButton({group:Y.DonationType,value:S.Monthly,displayText:"Monthly",checked:this.donationInfo.donationType===S.Monthly})}
      </li>
    `}get presetAmountsTemplate(){return p`
      ${this.amountOptions.map(e=>{const t=!this.customAmountSelected&&e===this.donationInfo.amount,n=this.formatShortenedAmount(e);return p`
          <li>
            ${this.getRadioButton({group:Y.Amount,value:`${e}`,displayText:`${n}`,checked:t})}
          </li>
        `})}
    `}getRadioButton(e){const t=`${e.group}-${e.value}-option`;return p`
      <div class="selection-button">
        <input
          type="radio"
          name=${e.group}
          value=${e.value}
          id=${t}
          tabindex="0"
          .checked=${e.checked}
          @change=${this.radioSelected}
          @click=${n=>{e.group===Y.Amount&&parseFloat(e.value)===this.donationInfo.amount&&(console.log("SAME VALUE"),this.radioSelected(n))}}
        />
        <label for=${t}> ${e.displayText} </label>
      </div>
    `}get customAmountTemplate(){const t=!this.amountOptions.includes(this.donationInfo.amount)?this.donationInfo.amount:"";return p`
      <div class="selection-button">
        <input
          type="radio"
          name=${Y.Amount}
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
            value=${t}
            @input=${this.customAmountChanged}
            @keydown=${this.currencyValidator.keydown}
            @focus=${this.customAmountFocused}
          />
        </label>
      </div>
    `}customRadioSelected(){this.customAmountInput.focus()}customAmountFocused(e){const t=e.target;this.customAmountSelected=!0,this.handleCustomAmountInput(t.value)}coverFeesChecked(e){const n=e.target.checked;this.updateDonationInfo({coverFees:n})}customAmountChanged(e){const n=e.target.value;this.customAmountSelected=!0,this.handleCustomAmountInput(n)}handleCustomAmountInput(e){const t=parseFloat(e);isNaN(t)?this.dispatchEditDonationError(O.InvalidDonationAmount):this.amountChanged(t)}handleDonationInfoStatus(e){switch(e){case O.ValidDonationAmount:this.error=void 0;break;case O.DonationTooHigh:this.error=p`
          To make a donation of $10,000 or more, please contact our philanthropy
          department at
          <a href="mailto:donations@archive.org">donations@archive.org</a>
        `,this.dispatchEditDonationError(e);break;case O.DonationTooLow:this.customAmountInput.value.length>0&&(this.error=p` Please select an amount (minimum $1) `),this.dispatchEditDonationError(e);break;case O.InvalidDonationAmount:this.error=p` Please enter a valid donation amount `,this.dispatchEditDonationError(e);break}}amountChanged(e){const t=this.getDonationInfoStatus(e);this.handleDonationInfoStatus(t),t===O.ValidDonationAmount&&this.updateDonationInfo({amount:e})}getDonationInfoStatus(e){return isNaN(e)?O.InvalidDonationAmount:e>=1e4?O.DonationTooHigh:e<1?O.DonationTooLow:O.ValidDonationAmount}radioSelected(e){const t=e.target,n=t.name,{value:o}=t;switch(n){case Y.Amount:this.presetAmountChanged(parseFloat(o));break;case Y.DonationType:this.updateDonationInfo({donationType:o});break}}monthlyCheckboxChecked(e){const n=e.target.checked?S.Monthly:S.OneTime;this.updateDonationInfo({donationType:n})}dispatchEditDonationError(e){const t=new CustomEvent("editDonationError",{detail:{error:e}});this.dispatchEvent(t)}presetAmountChanged(e){this.error=void 0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=""),this.updateDonationInfo({amount:e})}updateDonationInfo(e){var t,n,o;const a=new k({donationType:(t=e.donationType)!==null&&t!==void 0?t:this.donationInfo.donationType,amount:(n=e.amount)!==null&&n!==void 0?n:this.donationInfo.amount,coverFees:(o=e.coverFees)!==null&&o!==void 0?o:this.donationInfo.coverFees});this.donationInfo=a;const r=new CustomEvent("donationInfoChanged",{detail:{donationInfo:a}});this.dispatchEvent(r)}static get styles(){const e=m`var(--paymentButtonBorderColor, #333)`,t=m`var(--paymentButtonGridGap, 1rem)`,n=m`var(--paymentButtonFontSize, 1.6rem)`,o=m`var(--paymentButtonFontColor, #000)`,a=m`var(--paymentButtonSelectedFontColor, #000)`,r=m`var(--paymentButtonSelectedColor, #f9bf3b)`,d=m`var(--paymentButtonFocusedOutlineColor, #7fb3f9)`,l=m`var(--paymentButtonColor, #fff)`,c=m`var(--coverFeesFontSize, 1.2rem)`,u=m`var(--coverFeesFontWeight, bold)`,v=m`var(--customAmountWidth, 4rem)`,y=m`var(--inputFieldFontColor, #333)`,f=m`var(--inputBorder, 1px solid #d9d9d9)`,I=m`var(--paymentSelectorAmountColumnCount, 5)`,$=m`var(--paymentSelectorCustomAmountColSpan, 3)`;return m`
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
        grid-gap: ${t};
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
        grid-template-columns: repeat(${I}, 1fr);
      }

      .custom-amount {
        grid-column: span ${$};
      }

      .selection-button {
        height: 3rem;
      }

      .selection-button label {
        padding: 0 0.3rem;
        display: flex;
        cursor: pointer;
        text-align: center;
        font-size: ${n};
        font-weight: bold;
        border: 1px solid ${e};
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
        color: ${o};
        background-color: ${l};
      }

      input[type='radio']:checked + label {
        color: ${a};
        background-color: ${r};
      }

      input[type='radio']:focus + label {
        outline: 2px solid ${d};
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
        font-size: ${c};
        font-weight: ${u};
        flex: 1;
      }

      #custom-amount-input {
        width: ${v};
        font-size: 1.6rem;
        font-weight: bold;
        color: ${y};
        padding: 0.1rem;
        border: ${f};
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    `}};s([h({type:Object})],H.prototype,"donationInfo",void 0);s([h({type:String})],H.prototype,"stepNumberMode",void 0);s([h({type:Number})],H.prototype,"defaultSelectedAmount",void 0);s([h({type:Array})],H.prototype,"amountOptions",void 0);s([h({type:String})],H.prototype,"amountSelectionLayout",void 0);s([h({type:String,reflect:!0})],H.prototype,"frequencySelectionMode",void 0);s([h({type:String,reflect:!0})],H.prototype,"customAmountMode",void 0);s([h({type:String,reflect:!0})],H.prototype,"customFeesCheckboxMode",void 0);s([h({type:String,reflect:!0})],H.prototype,"amountTitleDisplayMode",void 0);s([h({type:Object})],H.prototype,"error",void 0);s([h({type:Boolean})],H.prototype,"customAmountSelected",void 0);s([b("#custom-amount-button")],H.prototype,"customAmountButton",void 0);s([b("#custom-amount-input")],H.prototype,"customAmountInput",void 0);H=s([P("donation-form-edit-donation")],H);let M=class extends w{constructor(){super(...arguments),this.analyticsCategory="DonationForm",this.amountOptions=yt,this.donationInfo=Yn,this.amountSelectionLayout=oe.MultiLine,this.frequencySelectionMode=U.Button,this.donorEmail="",this.lazyLoaderService=new Wn,this.recaptchaManagerSetup=!1}updated(e){var t,n,o;e.has("referrer")&&this.referrer&&((t=this.braintreeManager)===null||t===void 0||t.setReferrer(this.referrer),this.logDonationFlowEvent("referrer",this.referrer)),e.has("loggedInUser")&&this.loggedInUser&&((n=this.braintreeManager)===null||n===void 0||n.setLoggedInUser(this.loggedInUser)),e.has("origin")&&this.origin&&((o=this.braintreeManager)===null||o===void 0||o.setOrigin(this.origin),this.logDonationFlowEvent("origin",this.origin)),(e.has("paymentClients")||e.has("braintreeAuthToken")||e.has("endpointManager")||e.has("environment"))&&(this.setupBraintreeManager(),this.setupRecaptchaManager()),e.has("recaptchaSiteKey")&&this.setupRecaptchaManager(),(e.has("braintreeManager")||e.has("recaptchaManager")||e.has("modalManager")||e.has("recaptchaElement"))&&this.setupPaymentFlowHandlers(),(e.has("environment")||e.has("lazyLoaderService"))&&this.environment&&(this.paymentClients=new Kn(this.lazyLoaderService,this.environment))}showConfirmationStepDev(e){return g(this,void 0,void 0,function*(){this.donationForm.showConfirmationModalDev(e)})}showUpsellModalDev(e){return g(this,void 0,void 0,function*(){this.donationForm.showUpsellModalDev(e)})}setupBraintreeManager(){this.braintreeManager===void 0&&this.braintreeAuthToken&&this.endpointManager&&this.paymentClients&&this.environment&&(this.braintreeManager=new eo({paymentClients:this.paymentClients,endpointManager:this.endpointManager,authorizationToken:this.braintreeAuthToken,venmoProfileId:this.venmoProfileId,googlePayMerchantId:this.googlePayMerchantId,hostedFieldConfig:this.hostedFieldConfig,hostingEnvironment:this.environment,referrer:this.referrer,loggedInUser:this.loggedInUser,origin:this.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",e=>{const t=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:e}});this.dispatchEvent(t)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",e=>{const t=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:e}});this.dispatchEvent(t)}))}setupRecaptchaManager(){return g(this,void 0,void 0,function*(){if(!this.recaptchaSiteKey||!this.paymentClients||this.recaptchaManagerSetup)return;this.recaptchaManagerSetup=!0;const e=yield this.paymentClients.recaptchaLibrary.get();this.recaptchaManager=new ki({grecaptchaLibrary:e,siteKey:this.recaptchaSiteKey})})}firstUpdated(){this.configureFromQueryParams(),this.trackViewedEvent()}configureFromQueryParams(){const e=new URLSearchParams(window.location.search);let t=this.amountOptions;const n=e.get("dollarAmounts");n&&(t=n.slice(1,-1).split(",").map(T=>parseFloat(T)).filter(T=>!isNaN(T)));let o=this.donationInfo.coverFees;const a=e.get("coverFees");a&&(o=a==="true");let r=this.donationInfo.donationType;e.get("contrib_type")==="monthly"&&(r=S.Monthly);let l=this.donationInfo.amount;const c=e.get("amt");if(c){const f=L(c).value;f>0&&(l=f)}const u=e.get("amountLayout");if(u){const f=u;Object.values(oe).includes(f)&&(this.amountSelectionLayout=f)}const v=e.get("frequencyMode");if(v){const f=v;Object.values(U).includes(f)&&(this.frequencySelectionMode=f)}const y=new k({donationType:r,amount:l,coverFees:o});this.amountOptions=t,this.donationInfo=y}setupPaymentFlowHandlers(){var e;this.paymentFlowHandlers||!this.braintreeManager||!this.recaptchaManager||!this.modalManager||!this.recaptchaElement||(this.paymentFlowHandlers=new Ti({braintreeManager:this.braintreeManager,modalManager:this.modalManager,recaptchaManager:this.recaptchaManager,resources:{analytics:{logEvent:this.logEvent.bind(this),logDonationFlowEvent:this.logDonationFlowEvent.bind(this)}}}),this.donationForm.braintreeManager=this.braintreeManager,this.donationForm.paymentFlowHandlers=this.paymentFlowHandlers,this.braintreeManager.startup(),(e=this.paymentFlowHandlers)===null||e===void 0||e.startup(),this.recaptchaManager.setup(this.recaptchaElement,1,"light","image"))}get hostedFieldConfig(){const e={input:{"font-size":"16px","font-family":'"Helvetica Neue", Helvetica, Arial, sans-serif',"font-weight":"700",color:"#333"},":focus":{color:"#333"},".valid":{},".invalid":{color:"#b00b00"}},t={number:{selector:"#braintree-creditcard",placeholder:"Card number"},cvv:{selector:"#braintree-cvv",placeholder:"CVC"},expirationDate:{selector:"#braintree-expiration",placeholder:"MM / YY"}},n=new Qn({number:this.braintreeNumberInput,cvv:this.braintreeCVVInput,expirationDate:this.braintreeExpirationDateInput,errorContainer:this.braintreeErrorMessage});return new Bi({hostedFieldStyle:e,hostedFieldFieldOptions:t,hostedFieldContainer:n})}render(){return p`
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
              <badged-input .icon=${Jn} ?required=${!0} class="creditcard">
                <div class="braintree-input" id="braintree-creditcard"></div>
              </badged-input>
            </div>
            <div class="braintree-row">
              <badged-input .icon=${Zn} ?required=${!0} class="expiration">
                <div class="braintree-input" id="braintree-expiration"></div>
              </badged-input>
              <badged-input .icon=${ft} ?required=${!0} class="cvv">
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
    `}createRenderRoot(){return this}donationInfoChanged(){this.logEvent("DonationInfoChanged")}trackViewedEvent(){this.logEvent("Viewed")}paymentProviderSelected(e){const t=e.detail.paymentProvider,n=e.detail.previousPaymentProvider,o=this.removeSpaces(t??"unset");let a=`ProviderFirstSelected-${o}`,r;n!==void 0&&(a=`ProviderChangedTo-${o}`,r=`ProviderChangedFrom-${this.removeSpaces(n)}`),this.logEvent(a,r)}paymentFlowConfirmed(e){const t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent("PaymentFlowConfirmed",n)}paymentFlowStarted(e){const t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent("PaymentFlowStarted",n)}paymentFlowCancelled(e){const t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent("PaymentFlowCancelled",n)}paymentFlowError(e){const t=e.detail.paymentProvider,n=this.removeSpaces(t),o=e.detail.error,a=`${n}-${o}`;this.logEvent("PaymentFlowError",a)}removeSpaces(e){return e.replace(/\s+/g,"")}logEvent(e,t){var n;const o={action:e,label:t,category:this.analyticsCategory};(n=this.analyticsHandler)===null||n===void 0||n.sendEvent(o)}logDonationFlowEvent(e,t){var n;const o={action:e,label:t,category:"DonationFlow"};(n=this.analyticsHandler)===null||n===void 0||n.sendEventNoSampling(o)}get getStyles(){return p`
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
    `}};s([h({type:String})],M.prototype,"environment",void 0);s([h({type:String})],M.prototype,"braintreeAuthToken",void 0);s([h({type:String})],M.prototype,"recaptchaSiteKey",void 0);s([h({type:String})],M.prototype,"venmoProfileId",void 0);s([h({type:String})],M.prototype,"googlePayMerchantId",void 0);s([h({type:String})],M.prototype,"analyticsCategory",void 0);s([h({type:Array})],M.prototype,"amountOptions",void 0);s([h({type:Object})],M.prototype,"donationInfo",void 0);s([h({type:String})],M.prototype,"amountSelectionLayout",void 0);s([h({type:String})],M.prototype,"frequencySelectionMode",void 0);s([h({type:String})],M.prototype,"referrer",void 0);s([h({type:String})],M.prototype,"loggedInUser",void 0);s([h({type:String})],M.prototype,"origin",void 0);s([h({type:String})],M.prototype,"donorEmail",void 0);s([h({type:Object})],M.prototype,"endpointManager",void 0);s([h({type:Object})],M.prototype,"analyticsHandler",void 0);s([h({type:Object})],M.prototype,"modalManager",void 0);s([h({type:Object})],M.prototype,"recaptchaElement",void 0);s([h({type:Object})],M.prototype,"braintreeManager",void 0);s([h({type:Object})],M.prototype,"recaptchaManager",void 0);s([h({type:Object})],M.prototype,"paymentFlowHandlers",void 0);s([h({type:Object})],M.prototype,"paymentClients",void 0);s([h({type:Object})],M.prototype,"lazyLoaderService",void 0);s([b("donation-form")],M.prototype,"donationForm",void 0);s([b("#braintree-creditcard")],M.prototype,"braintreeNumberInput",void 0);s([b("#braintree-cvv")],M.prototype,"braintreeCVVInput",void 0);s([b("#braintree-expiration")],M.prototype,"braintreeExpirationDateInput",void 0);s([b("#braintree-error-message")],M.prototype,"braintreeErrorMessage",void 0);s([b("contact-form")],M.prototype,"contactForm",void 0);M=s([P("donation-form-controller")],M);var ue;(function(i){i.Summary="summary",i.Edit="edit"})(ue||(ue={}));let ie=class extends w{constructor(){super(...arguments),this.mode=ue.Edit,this.amountOptions=yt,this.amountSelectionLayout=oe.MultiLine,this.frequencySelectionMode=U.Button}render(){return p` ${this.currentTemplate} `}get currentTemplate(){switch(this.mode){case ue.Summary:return this.donationSummaryTemplate;case ue.Edit:return this.editDonationTemplate}}get editDonationTemplate(){return p`
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
    `}get donationSummaryTemplate(){return p`
      <donation-summary .donationInfo=${this.donationInfo} @editClicked=${this.summaryEditClicked}>
      </donation-summary>
    `}donationInfoChanged(e){this.donationInfo=e.detail.donationInfo;const t=new CustomEvent("donationInfoChanged",{detail:{donationInfo:this.donationInfo}});this.dispatchEvent(t)}editDonationError(e){const t=new CustomEvent("editDonationError",{detail:e.detail});this.dispatchEvent(t)}summaryEditClicked(){this.mode=ue.Edit}showSummaryClicked(){this.mode=ue.Summary}static get styles(){return m``}};s([h({type:Object})],ie.prototype,"donationInfo",void 0);s([h({type:String})],ie.prototype,"mode",void 0);s([h({type:Array})],ie.prototype,"amountOptions",void 0);s([h({type:String})],ie.prototype,"amountSelectionLayout",void 0);s([h({type:String})],ie.prototype,"frequencySelectionMode",void 0);s([b("edit-donation")],ie.prototype,"editDonation",void 0);ie=s([P("donation-form-header")],ie);let zt=class extends w{render(){return p`
      <div class="top-line"></div>
      <div class="total-line">Total: ${this.totalAmount}</div>
    `}get totalAmount(){if(!this.donationInfo)return;const e=L(this.donationInfo.total,{symbol:"$"}).format(),t=this.donationInfo.donationType===S.Monthly?"/month":"";return`${e}${t}`}static get styles(){const e=m`var(--totalAmountLineColor, #333)`,t=m`var(--totalAmountLineThickness, 2px)`,n=m`var(--totalAmountVerticalSpacing, 0.5rem)`,o=m`var(--totalAmountFontSize, 2.6rem)`;return m`
      .top-line {
        width: 100%;
        height: ${t};
        background-color: ${e};
      }

      .total-line {
        font-size: ${o};
        font-weight: bold;
        text-align: center;
        margin-top: ${n};
      }
    `}};s([h({type:Object})],zt.prototype,"donationInfo",void 0);zt=s([P("donation-form-total-amount")],zt);let B=class extends w{constructor(){super(...arguments),this.amountOptions=yt,this.amountSelectionLayout=oe.MultiLine,this.frequencySelectionMode=U.Button,this.creditCardVisible=!1,this.contactFormVisible=!1,this.donationInfoValid=!0,this.paypalButtonNeedsRender=!0,this.flowHandlersConfigured=!1,this.flowHandlerListenersBound=!1}render(){var e;return p`
      <donation-form-header
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-header>

      <donation-form-section
        .badgeMode=${xe.HideBadgeLeaveSpacing}
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
          .paymentProviders=${(e=this.braintreeManager)===null||e===void 0?void 0:e.paymentProviders}
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
    `}showConfirmationModalDev(e){return g(this,void 0,void 0,function*(){var t;(t=this.paymentFlowHandlers)===null||t===void 0||t.showConfirmationStepModal(e)})}showUpsellModalDev(e){return g(this,void 0,void 0,function*(){var t,n;if((t=this.paymentFlowHandlers)===null||t===void 0||t.showUpsellModal(e),e.ctaMode===ne.PayPalUpsellSlot){const o=yield(n=this.braintreeManager)===null||n===void 0?void 0:n.paymentProviders.paypalHandler.get(),a=new k({amount:e.oneTimeAmount,donationType:S.OneTime,coverFees:!1});o?.renderPayPalButton({selector:"#paypal-upsell-button",style:{color:"blue",label:"paypal",shape:"rect",size:"responsive",tagline:!1},donationInfo:a})}})}get contactFormSectionTemplate(){const e=this.selectedPaymentProvider===A.Venmo?"Help us stay in touch":"Enter payment information";return p`
      <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart+1}
        headline=${e}
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

        <div class="secure-process-note">${ft} Your payment will be securely processed</div>
      </donation-form-section>
    `}get paymentSelectorNumberingStart(){return this.frequencySelectionMode===U.Button?3:2}editDonationError(){this.donationInfoValid=!1}paymentSelectorFirstUpdated(){var e;!((e=this.paymentFlowHandlers)===null||e===void 0)&&e.paypalHandler&&this.renderPayPalButtonIfNeeded()}applePaySelected(e){var t,n;if(this.selectedPaymentProvider=A.ApplePay,this.contactFormVisible=!1,this.creditCardVisible=!1,!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}const o=e.detail.originalEvent;this.donationInfo&&((n=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.applePayHandler)===null||n===void 0||n.paymentInitiated(this.donationInfo,o)),this.emitPaymentFlowStartedEvent()}googlePaySelected(){var e,t;this.selectedPaymentProvider=A.GooglePay,this.contactFormVisible=!1,this.creditCardVisible=!1,this.donationInfoValid?(this.donationInfo&&((t=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.googlePayHandler)===null||t===void 0||t.paymentInitiated(this.donationInfo)),this.emitPaymentFlowStartedEvent()):this.showInvalidDonationInfoAlert()}creditCardSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=A.CreditCard,this.contactFormVisible=!0,this.creditCardVisible=!0,this.focusContactForm()})}venmoSelected(){return g(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=A.Venmo,this.contactFormVisible=!0,this.creditCardVisible=!1,this.focusContactForm()})}paypalBlockerSelected(){this.contactFormVisible=!1,this.creditCardVisible=!1,this.showInvalidDonationInfoAlert()}focusContactForm(){return g(this,void 0,void 0,function*(){var e;yield this.updateComplete,this.contactFormSection&&((e=this.contactForm)===null||e===void 0||e.focus())})}donateClicked(){return g(this,void 0,void 0,function*(){if(!this.contactForm){alert("Please enter contact info.");return}if(!this.donationInfoValid||!this.donationInfo){this.showInvalidDonationInfoAlert();return}const e=this.contactForm.donorContactInfo;switch(this.selectedPaymentProvider){case A.CreditCard:this.handleCreditCardDonationFlow(e,this.donationInfo);break;case A.Venmo:this.handleVenmoDonationFlow(e,this.donationInfo);break}})}handleCreditCardDonationFlow(e,t){return g(this,void 0,void 0,function*(){var n,o,a;const r=(n=this.paymentFlowHandlers)===null||n===void 0?void 0:n.creditCardHandler,d=yield(o=this.braintreeManager)===null||o===void 0?void 0:o.paymentProviders.creditCardHandler.get();d?.hideErrorMessage();const l=(a=this.contactForm)===null||a===void 0?void 0:a.reportValidity(),c=yield r?.tokenizeFields();!l||c===void 0||(this.emitPaymentFlowStartedEvent(),r?.paymentInitiated(c,t,e))})}handleVenmoDonationFlow(e,t){return g(this,void 0,void 0,function*(){var n,o,a;!((n=this.contactForm)===null||n===void 0)&&n.reportValidity()&&((a=(o=this.paymentFlowHandlers)===null||o===void 0?void 0:o.venmoHandler)===null||a===void 0||a.paymentInitiated(e,t))})}emitPaymentFlowStartedEvent(){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowStarted",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowConfirmedEvent(){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowConfirmed",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowCancelledEvent(){if(!this.selectedPaymentProvider)return;const e=new CustomEvent("paymentFlowCancelled",{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowErrorEvent(e){if(!this.selectedPaymentProvider)return;const t=new CustomEvent("paymentFlowError",{detail:{paymentProvider:this.selectedPaymentProvider,error:e}});this.dispatchEvent(t)}showInvalidDonationInfoAlert(){alert("Please enter a valid donation amount.")}renderPayPalButtonIfNeeded(){return g(this,void 0,void 0,function*(){var e,t;this.paypalButtonNeedsRender&&(this.paypalButtonNeedsRender=!1,this.donationInfo&&(yield(t=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||t===void 0?void 0:t.renderPayPalButton(this.donationInfo)),this.paymentSelector.showPaypalButton())})}updated(e){var t,n;if(e.has("donationInfo")&&this.donationInfo&&((n=(t=this.paymentFlowHandlers)===null||t===void 0?void 0:t.paypalHandler)===null||n===void 0||n.updateDonationInfo(this.donationInfo),this.donationFormHeader.donationInfo=this.donationInfo),(e.has("paymentFlowHandlers")||e.has("donationInfo"))&&this.donationInfo&&this.paymentFlowHandlers&&this.setupFlowHandlers(),e.has("donationInfoValid")&&(this.paymentSelector.donationInfoValid=this.donationInfoValid),e.has("selectedPaymentProvider")){const o=new CustomEvent("paymentProviderSelected",{detail:{paymentProvider:this.selectedPaymentProvider,previousPaymentProvider:e.get("selectedPaymentProvider")}});this.dispatchEvent(o)}}setupFlowHandlers(){var e,t;this.flowHandlersConfigured||(this.flowHandlersConfigured=!0,this.bindFlowListenerEvents(),this.renderPayPalButtonIfNeeded(),this.donationInfo&&((t=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||t===void 0||t.updateDonationInfo(this.donationInfo)))}bindFlowListenerEvents(){var e,t,n,o,a,r,d,l,c,u;this.flowHandlerListenersBound||(this.flowHandlerListenersBound=!0,(t=(e=this.paymentFlowHandlers)===null||e===void 0?void 0:e.paypalHandler)===null||t===void 0||t.on("payPalPaymentStarted",()=>{this.selectedPaymentProvider=A.PayPal,this.emitPaymentFlowStartedEvent()}),(o=(n=this.paymentFlowHandlers)===null||n===void 0?void 0:n.paypalHandler)===null||o===void 0||o.on("payPalPaymentConfirmed",()=>{this.selectedPaymentProvider=A.PayPal,this.emitPaymentFlowConfirmedEvent()}),(r=(a=this.paymentFlowHandlers)===null||a===void 0?void 0:a.paypalHandler)===null||r===void 0||r.on("payPalPaymentCancelled",()=>{this.selectedPaymentProvider=A.PayPal,this.emitPaymentFlowCancelledEvent()}),(l=(d=this.paymentFlowHandlers)===null||d===void 0?void 0:d.paypalHandler)===null||l===void 0||l.on("payPalPaymentError",(v,y)=>{this.selectedPaymentProvider=A.PayPal,this.emitPaymentFlowErrorEvent(y)}),(u=(c=this.paymentFlowHandlers)===null||c===void 0?void 0:c.googlePayHandler)===null||u===void 0||u.on("paymentCancelled",()=>{this.selectedPaymentProvider=A.GooglePay,this.emitPaymentFlowCancelledEvent()}))}donationInfoChanged(e){const t=e.detail.donationInfo;this.donationInfo=new k({amount:t.amount,donationType:t.donationType,coverFees:t.coverFees}),this.donationInfoValid=!0;const n=new CustomEvent("donationInfoChanged",{detail:{donationInfo:t}});this.dispatchEvent(n)}static get styles(){const e=m`var(--donateButtonFontSize, 2.6rem)`,t=m`var(--donateButtonHeight, 4rem)`,n=m`var(--donateButtonColor, rgba(49, 164, 129, 1))`,o=m`var(--donateButtonTextColor, #fff)`,a=m`var(--donateButtonHoverColor, rgba(39, 131, 103, 1))`,r=m`var(--donateTotalAmountTopMargin, 1.5rem)`,d=m`var(--donateTotalAmountBottomMargin, 1.2rem)`;return m`
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
        font-size: ${e};
        font-weight: bold;
        text-align: center;
        color: ${o};
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: ${n};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: ${t};
      }

      #donate-button:hover {
        background-color: ${a};
      }

      #total-amount-section {
        display: block;
        margin-top: ${r};
        margin-bottom: ${d};
      }
    `}};s([h({type:Object})],B.prototype,"braintreeManager",void 0);s([h({type:Object})],B.prototype,"paymentFlowHandlers",void 0);s([h({type:Object})],B.prototype,"donationRequest",void 0);s([h({type:Object})],B.prototype,"donationInfo",void 0);s([h({type:Object})],B.prototype,"contactForm",void 0);s([h({type:Array})],B.prototype,"amountOptions",void 0);s([h({type:String})],B.prototype,"amountSelectionLayout",void 0);s([h({type:String})],B.prototype,"frequencySelectionMode",void 0);s([h({type:Boolean})],B.prototype,"creditCardVisible",void 0);s([h({type:Boolean})],B.prototype,"contactFormVisible",void 0);s([h({type:Boolean})],B.prototype,"donationInfoValid",void 0);s([h({type:String})],B.prototype,"selectedPaymentProvider",void 0);s([b("#contactFormSection")],B.prototype,"contactFormSection",void 0);s([b("donation-form-header")],B.prototype,"donationFormHeader",void 0);s([b("payment-selector")],B.prototype,"paymentSelector",void 0);B=s([P("donation-form")],B);let W=class extends w{constructor(){super(...arguments),this.patronEmail=""}createRenderRoot(){return this}firstUpdated(){setTimeout(()=>{this.setupBraintreeManager()},5e3)}lightDomCSS(){return m`
      contact-form form badged-input {
        width: 100%;
      }
    `}render(){return p`
      <div id="ia-mgc-cc-area">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
          <div class="braintree-row">
            <badged-input .icon=${Jn} ?required=${!0} class="creditcard">
              <div class="braintree-input" id="braintree-creditcard"></div>
            </badged-input>
          </div>
          <div class="braintree-row">
            <badged-input .icon=${Zn} ?required=${!0} class="expiration">
              <div class="braintree-input" id="braintree-expiration"></div>
            </badged-input>
            <badged-input .icon=${ft} ?required=${!0} class="cvv">
              <div class="braintree-input" id="braintree-cvv"></div>
            </badged-input>
          </div>
      </div>
    `}setupBraintreeManager(){var e,t,n,o,a,r,d,l;const{braintreeAuthToken:c,endpointManager:u,paymentClients:v,environment:y}=this.paymentConfig||{};this.braintreeManager===void 0&&c&&u&&(console.log("Setting up BraintreeManager",this.braintreeNumberInput),this.braintreeManager=new eo({paymentClients:(t=(e=this.paymentConfig)===null||e===void 0?void 0:e.paymentClients)!==null&&t!==void 0?t:{},endpointManager:(n=this.paymentConfig)===null||n===void 0?void 0:n.endpointManager,authorizationToken:(a=(o=this.paymentConfig)===null||o===void 0?void 0:o.braintreeAuthToken)!==null&&a!==void 0?a:"",venmoProfileId:(r=this.paymentConfig)===null||r===void 0?void 0:r.venmoProfileId,googlePayMerchantId:(d=this.paymentConfig)===null||d===void 0?void 0:d.googlePayMerchantId,hostedFieldConfig:{hostedFieldStyle:{},hostedFieldFieldOptions:{},hostedFieldContainer:new Qn({number:this.braintreeNumberInput,cvv:this.braintreeCVVInput,expirationDate:this.braintreeExpirationDateInput,errorContainer:this.braintreeErrorMessage})},hostingEnvironment:(l=this.paymentConfig)===null||l===void 0?void 0:l.environment,referrer:window.location.href,loggedInUser:this.patronEmail,origin:window.location.origin}),this.braintreeManager.on("paymentProvidersHostedFieldsRetry",f=>{const I=new CustomEvent("paymentProvidersHostedFieldsRetry",{detail:{retryNumber:f}});this.dispatchEvent(I)}),this.braintreeManager.on("paymentProvidersHostedFieldsFailed",f=>{const I=new CustomEvent("paymentProvidersHostedFieldsFailed",{detail:{error:f}});this.dispatchEvent(I)}))}};s([h({type:Object})],W.prototype,"plan",void 0);s([h({type:String})],W.prototype,"patronEmail",void 0);s([h({type:Object})],W.prototype,"paymentConfig",void 0);s([h({type:Object})],W.prototype,"braintreeManager",void 0);s([b("#braintree-error-message")],W.prototype,"braintreeErrorMessage",void 0);s([b("#braintree-creditcard")],W.prototype,"braintreeNumberInput",void 0);s([b("#braintree-cvv")],W.prototype,"braintreeCVVInput",void 0);s([b("#braintree-expiration")],W.prototype,"braintreeExpirationDateInput",void 0);W=s([P("ia-mgc-braintree-cc-hosted-fields")],W);let K=class extends w{constructor(){super(...arguments),this.patronEmail="",this.paymentConfig={referrer:"",origin:"",braintreeAuthToken:"sandbox_x634jsj7_7zybks4ybp63pbmd",venmoProfileId:"1953896702662410263",googlePayMerchantId:"",environment:"dev",paymentClients:new Kn(new Wn,Z.Development),endpointManager:{submitData:async e=>Promise.resolve({value:{},success:!0}),donationSuccessful:e=>!0}}}createRenderRoot(){return this}amountUpdates(e){this.querySelector("ia-mgc-edit-plan-amount").amountUpdated(e)}dateUpdates(e){this.querySelector("ia-mgc-edit-date").dateUpdated(e)}render(){return p`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${e=>{var t;const{amount:n,baseAmount:o,coverFees:a,feeCovered:r}=e.detail;this.plan&&((t=this.updateAmountHandler)===null||t===void 0||t.call(this,this.plan,{amount:n,baseAmount:o,coverFees:a,feeCovered:r}))}}
        ></ia-mgc-edit-plan-amount>
        <hr />
        <ia-mgc-edit-payment-method
          .plan=${this.plan}
          .patronEmail=${this.patronEmail}
          .paymentConfig=${this.paymentConfig}
          @UpdatePaymentMethod=${e=>{const{newPaymentMethod:t}=e.detail;this.plan&&this.dispatchEvent(new CustomEvent("updatePaymentMethod",{detail:{plan:this.plan,newPaymentMethod:t}}))}}
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
          <div slot="contact-form">
            <contact-form .donorEmail=${this.patronEmail}></contact-form>
          </div>
          <div slot="braintree-hosted-fields">
            <ia-mgc-braintree-cc-hosted-fields
              .plan=${this.plan}
              .paymentConfig=${this.paymentConfig}
              @BraintreeManagerSetupComplete=${()=>{debugger}}
            ></ia-mgc-braintree-cc-hosted-fields>
          </div>
        </ia-mgc-edit-payment-method>
      <hr />
      <ia-mgc-edit-date
        @updateDate=${e=>{const{newDate:t}=e.detail;this.plan&&this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.plan,newDate:t}}))}}
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
          <a href=${this.mailToText}>donations@archive.org</a>.
        </p>
      </section>
    `}mailToText(){return"mailto:donations@archive.org?subject=I'd like to update my monthly donation"}};s([h({type:Object})],K.prototype,"plan",void 0);s([h({type:String})],K.prototype,"patronEmail",void 0);s([h({type:Object})],K.prototype,"updateAmountHandler",void 0);s([h({type:Object})],K.prototype,"paymentConfig",void 0);s([b("#braintree-creditcard")],K.prototype,"braintreeNumberInput",void 0);s([b("#braintree-expiration")],K.prototype,"braintreeExpirationDateInput",void 0);s([b("#braintree-cvv")],K.prototype,"braintreeCVVInput",void 0);s([b("#braintree-error-message")],K.prototype,"braintreeErrorMessage",void 0);K=s([P("ia-mgc-edit-plan")],K);var X;(function(i){i.welcome="ShowWelcome",i.receipts="ShowReceipts",i.plans="ShowPlans",i.editPlan="ShowEditForm"})(X||(X={}));let R=class extends w{constructor(){super(...arguments),this.patronName="",this.patronEmail="",this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay="welcome",this.canEdit=!1,this.braintreeAuthToken="",this.venmoProfileId="",this.googleMerchantId=""}createRenderRoot(){return this}updated(e){e.has("plans")&&(this.viewToDisplay=this.plans.length?"plans":"welcome")}get receiptListElement(){return this.querySelector("ia-mgc-receipts")}get editFormElement(){return this.querySelector("ia-mgc-edit-plan")}updateReceived(e){var t;this.updates.unshift(e);const{plan:n,donationId:o=""}=e,a=(t=n?.id)!==null&&t!==void 0?t:o;if(e.action==="amountUpdate"){this.editFormElement.amountUpdates(e.status);return}if(e.action==="dateUpdate"){this.editingThisPlan=n,this.editFormElement.dateUpdates(e.status);return}if(e.action==="cancel"||n?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay="plans";return}this.receiptListElement.emailSent({id:a,emailStatus:e.status})}render(){const e=this.viewToDisplay==="editPlan"&&this.editingThisPlan;return p`
      ${this.sectionTitle}
      ${e?p`<ia-mgc-edit-plan
            .plan=${this.editingThisPlan}
            @cancelPlan=${()=>{this.dispatchEvent(new CustomEvent("cancelPlan",{detail:{plan:this.editingThisPlan}}))}}
            .updateAmountHandler=${(t,n)=>{console.log("updateAmount",t,{...n}),this.dispatchEvent(new CustomEvent("updateAmount",{detail:{plan:t,amountOptions:n}}))}}
            @updateDate=${t=>{const{newDate:n}=t.detail;console.log("updateDate",n),this.dispatchEvent(new CustomEvent("updateDate",{detail:{plan:this.editingThisPlan,newDate:n}}))}}
          >
          </ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let e="",t="",n=p``;const o=p`
      <ia-mgc-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay="receipts",await this.updateComplete,this.dispatchEvent(new Event(X.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,a=this.receipts.length&&(this.viewToDisplay==="plans"||this.viewToDisplay==="welcome");switch(this.viewToDisplay){case"receipts":e="Recent donations",t="default",n=p`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?X.plans:X.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case"editPlan":e="Monthly Giving Circle",t="default",n=p`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?"plans":"welcome";const r=this.plans.length?X.plans:X.welcome;this.dispatchEvent(new Event(r)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;default:e="Monthly Giving Circle",t="heart",a&&(n=o);break}return p`
      <ia-mgc-title titleStyle=${t}>
        <span slot="title">${e}</span>
        <span slot="action">${n}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay==="receipts"?p`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${e=>{console.log("EmailReceiptRequest",e.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...e.detail}}))}}
        ></ia-mgc-receipts>
      `:p`
      ${this.viewToDisplay==="plans"&&this.plans.length?p`
            <ia-mgc-plans
              @editThisPlan=${async e=>{this.editingThisPlan=e.detail.plan,this.viewToDisplay="editPlan",this.dispatchEvent(new Event(X.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:p`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};s([h({type:String})],R.prototype,"patronName",void 0);s([h({type:String})],R.prototype,"patronEmail",void 0);s([h({type:Array})],R.prototype,"receipts",void 0);s([h({type:Array})],R.prototype,"updates",void 0);s([h({type:Array})],R.prototype,"plans",void 0);s([h({type:Object})],R.prototype,"editingThisPlan",void 0);s([h({type:String,reflect:!0})],R.prototype,"viewToDisplay",void 0);s([h({type:Boolean,reflect:!0})],R.prototype,"canEdit",void 0);s([h({type:String,reflect:!0})],R.prototype,"braintreeAuthToken",void 0);s([h({type:String})],R.prototype,"venmoProfileId",void 0);s([h({type:String})],R.prototype,"googleMerchantId",void 0);R=s([P("ia-monthly-giving-circle")],R);class xt{constructor(e){this.receipt=e}get amountFormatted(){var e,t;const n=(e=this.receipt.total_amount)!==null&&e!==void 0?e:this.receipt.net_amount,o=(t=this.receipt.currency)!==null&&t!==void 0?t:"CURR not found";return n?`${o} ${this.currencySymbol}${n}`:"no amount found, can't find total_amount or net_amount"}get amount(){var e,t;return(t=(e=`${this.receipt.total_amount}`)!==null&&e!==void 0?e:`${this.receipt.net_amount}`)!==null&&t!==void 0?t:"no amount found, can't find total_amount or net_amount"}get isTest(){var e;return(e=this.receipt.isTest)!==null&&e!==void 0?e:!1}get id(){var e;return(e=this.receipt.token)!==null&&e!==void 0?e:"no token found"}get date(){var e;return(e=this.receipt.date)!==null&&e!==void 0?e:"no date found"}get currencySymbol(){return this.receipt.currency==="USD"?"$":""}}class Li{constructor(e){var t;this.plan=e,this.payment=e.btdata,this.currency=(t=e.currency)!==null&&t!==void 0?t:"USD"}get id(){return this.plan.token}get currencySymbol(){return this.currency==="USD"?"$":""}get amount(){return this.plan.amount}setAmount(e){this.plan.oldAmount=this.plan.amount,this.plan.amount=e}get nextBillingDate(){return this.payment.nextBillingDate.date}setNextBillingDate(e){this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=e}get nextBillingDateLocale(){const e=new Date(this.payment.nextBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return e??"not found"}get lastBillingDateLocale(){if(!this.payment.lastBillingDate.date)return"";const e=new Date(this.payment.lastBillingDate.date).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return console.log("lastBillingDate from model",e),e??"not found"}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(e){const t=this.plan.processor_id;this.plan.processor_id=e,this.plan.oldProcessorId=t}}let ae=[];const ke=new Date;ke.setDate(ke.getDate()+25);ke.setMinutes(0);ke.setSeconds(0);ke.setMilliseconds(0);console.log("nextPaymentIn25Days",ke.toISOString());const He=new Date;He.setMinutes(0);He.setSeconds(0);He.setMilliseconds(0);He.setDate(1);console.log("lastPaymentInTheSameMonth",He.toISOString());const Vt=new Date;Vt.setMonth(Vt.getMonth()+1);const Ne=new Date(Vt);Ne.setMinutes(0);Ne.setSeconds(0);Ne.setMilliseconds(0);Ne.setDate(1);console.log("nextPaymentFirstOfMonth",Ne.toISOString());const Hi=new Date;Hi.setHours(0,0,0,0);const Kt=new Date;Kt.setHours(0,0,0,0);Kt.setDate(0);const Xe=new Date;Xe.setHours(0,0,0,0);Xe.setMonth(Xe.getMonth()+1);Xe.setDate(0);const Fn={41:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ",amount:10,start_date:"2024-05-22 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:Kt.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Xe.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Paypal",last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:"donations-buyer@archive.org"}},23764:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar",amount:5,start_date:"2022-12-09 00:00:00",is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:He.toISOString(),timezone_type:3,timezone:"UTC"},nextBillingDate:{date:Ne.toISOString(),timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"creditCard",last4:"1111",cardType:"Visa",expirationMonth:"12",expirationYear:"2023"}},35406:{token:"Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider",amount:5,currency:"USD",start_date:"2024-07-01 00:00:00",is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:"2024-08-22 00:00:00.000000",timezone_type:3,timezone:"UTC"},status:"Active",paymentMethodType:"Venmo",last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:"venmojoe"}}},oo=Object.keys(Fn).map(i=>new Li(Fn[i])),io=[new xt({currency:"USD",net_amount:9999.99,total_amount:9999.99,fee_amount:0,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",token:"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA",is_test:!1}),new xt({currency:"USD",net_amount:100,total_amount:105.86,fee_amount:5.86,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",is_test:!0}),new xt({currency:"USD",net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",is_test:!1})];let Dt=!0;const Be=document.getElementById("interaction-status-area"),Jt=()=>Math.floor(Math.random()+.5),E=document.querySelector("ia-monthly-giving-circle");E.receipts=io;E.plans=oo;E.addEventListener("EmailReceiptRequest",i=>{const{donation:e}=i.detail,t=Jt()===1,n=t?"success":"fail",o=t?1500:5e3;Be.innerText=`Email receipt request for donation ${e.id} will return ${n} in ${o} ms.`;const r={message:n==="success"?"Email receipt sent":"Email receipt failed",status:n,donationId:e.id};ae=[r,...ae],setTimeout(()=>{E.updateReceived(r),console.log("EmailReceiptRequest index.html ----",r),Be.innerText=""},o)});E.addEventListener("cancelPlan",async i=>{const{plan:e}=i.detail,n=E.plans.map(o=>(o.plan.token===e.plan.token&&(console.log("p 2 plan",o,e),o.cancelPlan()),o));E.plans=n,await E.updateComplete,console.log("plan cancelled & plan list updated",E.plans)});E.addEventListener("updateAmount",async i=>{const{plan:e,amountOptions:t}=i.detail,n=Jt()===1,o=n?"success":"fail",a=n?1500:5e3;Be.innerText=`Amount Update Request received: will return ${o} in ${a} ms - Details: ${JSON.stringify(t)}`;const r=o==="success"?"Amount updated":"Amount failed to update";n&&e.setAmount(t.amount);const d={message:r,status:o,plan:e,donationId:e.id,action:"amountUpdate"};ae=[d,...ae],setTimeout(()=>{E.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Be.innerText=""},a)});E.addEventListener("updateDate",i=>{const{newDate:e,plan:t}=i.detail,n=Jt()===1,o=n?"success":"fail",a=n?1500:5e3;Be.innerText=`Updating next billing date for plan: ${e}, plan: ${JSON.stringify(t.id)} -- Update will return ${o} in ${a} ms`;const r=o==="success"?"Date updated":"Date failed to update";n&&(t.setNextBillingDate(e),t.setNewProcessorId("new-processor_id@1"));const d={message:r,status:o,plan:t,donationId:t.id,action:"dateUpdate"};ae=[d,...ae],setTimeout(()=>{E.updateReceived(d),console.log("Amount Update Request --- index.html ----",d),Be.innerText=""},a)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(Dt){E.receipts=[],Dt=!1;return}E.receipts=io,await E.updateComplete,Dt=!0});document.getElementById("clear-updates").addEventListener("click",async()=>{ae=[],E.updates=ae,await E.updateComplete});document.getElementById("toggle-plans").addEventListener("click",async()=>{E.plans=E.plans.length?[]:oo,await E.updateComplete});document.getElementById("toggle-editable-perms").addEventListener("click",async()=>{E.canEdit=!E.canEdit,await E.updateComplete});
