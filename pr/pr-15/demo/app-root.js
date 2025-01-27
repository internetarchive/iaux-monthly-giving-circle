(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();function m(n,t,e,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,e,i);else for(var h=n.length-1;h>=0;h--)(r=n[h])&&(o=(s<3?r(o):s>3?r(t,e,o):r(t,e))||o);return s>3&&o&&Object.defineProperty(t,e,o),o}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Q=window,kt=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),Mt=new WeakMap;let fe=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(kt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Mt.set(e,t))}return t}toString(){return this.cssText}};const ye=n=>new fe(typeof n=="string"?n:n+"",void 0,ee),_e=(n,t)=>{kt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=Q.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},Rt=kt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ye(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var at;const Y=window,Ut=Y.trustedTypes,ge=Ut?Ut.emptyScript:"",Ht=Y.reactiveElementPolyfillSupport,At={toAttribute(n,t){switch(t){case Boolean:n=n?ge:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ie=(n,t)=>t!==n&&(t==t||n==n),ht={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:ie},bt="finalized";let L=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=ht){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ht}static finalize(){if(this.hasOwnProperty(bt))return!1;this[bt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Rt(s))}else t!==void 0&&e.push(Rt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return _e(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=ht){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:At).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:At;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ie)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};L[bt]=!0,L.elementProperties=new Map,L.elementStyles=[],L.shadowRootOptions={mode:"open"},Ht?.({ReactiveElement:L}),((at=Y.reactiveElementVersions)!==null&&at!==void 0?at:Y.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;const tt=window,M=tt.trustedTypes,Nt=M?M.createPolicy("lit-html",{createHTML:n=>n}):void 0,Et="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,se="?"+A,Ae=`<${se}>`,C=document,et=()=>C.createComment(""),z=n=>n===null||typeof n!="object"&&typeof n!="function",ne=Array.isArray,be=n=>ne(n)||typeof n?.[Symbol.iterator]=="function",dt=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Ot=/>/g,E=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Lt=/"/g,oe=/^(?:script|style|textarea|title)$/i,q=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),jt=new WeakMap,w=C.createTreeWalker(C,129,null,!1);function re(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}const Ee=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=j;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===j?c[1]==="!--"?r=Dt:c[1]!==void 0?r=Ot:c[2]!==void 0?(oe.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=E):c[3]!==void 0&&(r=E):r===E?c[0]===">"?(r=s??j,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?E:c[3]==='"'?Lt:It):r===Lt||r===It?r=E:r===Dt||r===Ot?r=j:(r=E,s=void 0);const p=r===E&&n[h+1].startsWith("/>")?" ":"";o+=r===j?l+Ae:d>=0?(i.push(a),l.slice(0,d)+Et+l.slice(d)+A+p):l+A+(d===-2?(i.push(void 0),h):p)}return[re(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};let St=class le{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=Ee(t,e);if(this.el=le.createElement(a,i),w.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=w.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(Et)||u.startsWith(A)){const p=c[r++];if(d.push(u),p!==void 0){const lt=s.getAttribute(p.toLowerCase()+Et).split(A),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:g[2],strings:lt,ctor:g[1]==="."?we:g[1]==="?"?Ce:g[1]==="@"?ke:ot})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if(oe.test(s.tagName)){const d=s.textContent.split(A),u=d.length-1;if(u>0){s.textContent=M?M.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],et()),w.nextNode(),l.push({type:2,index:++o});s.append(d[u],et())}}}else if(s.nodeType===8)if(s.data===se)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(A,d+1))!==-1;)l.push({type:7,index:o}),d+=A.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}};function R(n,t,e=n,i){var s,o,r,h;if(t===q)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=z(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=R(n,l._$AS(n,t.values),l,i)),t}let Se=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:C).importNode(i,!0);w.currentNode=o;let r=w.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new ae(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new Pe(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=w.nextNode(),h++)}return w.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},ae=class he{constructor(t,e,i,s){var o;this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),z(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==q&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):be(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==v&&z(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=St.createElement(re(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Se(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=jt.get(t.strings);return e===void 0&&jt.set(t.strings,e=new St(t)),e}T(t){ne(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new he(this.k(et()),this.k(et()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ot=class{constructor(t,e,i,s,o){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=v}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=R(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==q,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=R(this,h[i+l],e,l),a===q&&(a=this._$AH[l]),r||(r=!z(a)||a!==this._$AH[l]),a===v?t=v:t!==v&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},we=class extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}};const xe=M?M.emptyScript:"";let Ce=class extends ot{constructor(){super(...arguments),this.type=4}j(t){t&&t!==v?this.element.setAttribute(this.name,xe):this.element.removeAttribute(this.name)}},ke=class extends ot{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=R(this,t,e,0))!==null&&i!==void 0?i:v)===q)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}},Pe=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};const Bt=tt.litHtmlPolyfillSupport;Bt?.(St,ae),((ct=tt.litHtmlVersions)!==null&&ct!==void 0?ct:tt.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=window,Pt=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Tt=Symbol(),zt=new WeakMap;let ce=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Tt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=zt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&zt.set(e,t))}return t}toString(){return this.cssText}};const Te=n=>new ce(typeof n=="string"?n:n+"",void 0,Tt),J=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new ce(e,n,Tt)},Me=(n,t)=>{Pt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},qt=Pt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Te(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ut;const it=window,Vt=it.trustedTypes,Re=Vt?Vt.emptyScript:"",Wt=it.reactiveElementPolyfillSupport,wt={toAttribute(n,t){switch(t){case Boolean:n=n?Re:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},de=(n,t)=>t!==n&&(t==t||n==n),pt={attribute:!0,type:String,converter:wt,reflect:!1,hasChanged:de},xt="finalized";let P=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=pt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||pt}static finalize(){if(this.hasOwnProperty(xt))return!1;this[xt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(qt(s))}else t!==void 0&&e.push(qt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=pt){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:wt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:wt;this._$El=o,this[o]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||de)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};P[xt]=!0,P.elementProperties=new Map,P.elementStyles=[],P.shadowRootOptions={mode:"open"},Wt?.({ReactiveElement:P}),((ut=it.reactiveElementVersions)!==null&&ut!==void 0?ut:it.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $t;const st=window,U=st.trustedTypes,Gt=U?U.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ct="$lit$",b=`lit$${(Math.random()+"").slice(9)}$`,ue="?"+b,Ue=`<${ue}>`,k=document,V=()=>k.createComment(""),W=n=>n===null||typeof n!="object"&&typeof n!="function",pe=Array.isArray,He=n=>pe(n)||typeof n?.[Symbol.iterator]=="function",vt=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ft=/-->/g,Jt=/>/g,S=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kt=/'/g,Zt=/"/g,$e=/^(?:script|style|textarea|title)$/i,Ne=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),f=Ne(1),H=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Qt=new WeakMap,x=k.createTreeWalker(k,129,null,!1);function ve(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gt!==void 0?Gt.createHTML(t):t}const De=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=B;for(let h=0;h<e;h++){const l=n[h];let a,c,d=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===B?c[1]==="!--"?r=Ft:c[1]!==void 0?r=Jt:c[2]!==void 0?($e.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=S):c[3]!==void 0&&(r=S):r===S?c[0]===">"?(r=s??B,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?S:c[3]==='"'?Zt:Kt):r===Zt||r===Kt?r=S:r===Ft||r===Jt?r=B:(r=S,s=void 0);const p=r===S&&n[h+1].startsWith("/>")?" ":"";o+=r===B?l+Ue:d>=0?(i.push(a),l.slice(0,d)+Ct+l.slice(d)+b+p):l+b+(d===-2?(i.push(void 0),h):p)}return[ve(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),i]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const h=t.length-1,l=this.parts,[a,c]=De(t,e);if(this.el=G.createElement(a,i),x.currentNode=this.el.content,e===2){const d=this.el.content,u=d.firstChild;u.remove(),d.append(...u.childNodes)}for(;(s=x.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const u of s.getAttributeNames())if(u.endsWith(Ct)||u.startsWith(b)){const p=c[r++];if(d.push(u),p!==void 0){const lt=s.getAttribute(p.toLowerCase()+Ct).split(b),g=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:g[2],strings:lt,ctor:g[1]==="."?Ie:g[1]==="?"?je:g[1]==="@"?Be:rt})}else l.push({type:6,index:o})}for(const u of d)s.removeAttribute(u)}if($e.test(s.tagName)){const d=s.textContent.split(b),u=d.length-1;if(u>0){s.textContent=U?U.emptyScript:"";for(let p=0;p<u;p++)s.append(d[p],V()),x.nextNode(),l.push({type:2,index:++o});s.append(d[u],V())}}}else if(s.nodeType===8)if(s.data===ue)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(b,d+1))!==-1;)l.push({type:7,index:o}),d+=b.length-1}o++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function N(n,t,e=n,i){var s,o,r,h;if(t===H)return t;let l=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const a=W(t)?void 0:t._$litDirective$;return l?.constructor!==a&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=N(n,l._$AS(n,t.values),l,i)),t}class Oe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t?.creationScope)!==null&&e!==void 0?e:k).importNode(i,!0);x.currentNode=o;let r=x.nextNode(),h=0,l=0,a=s[0];for(;a!==void 0;){if(h===a.index){let c;a.type===2?c=new K(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new ze(r,this,t)),this._$AV.push(c),a=s[++l]}h!==a?.index&&(r=x.nextNode(),h++)}return x.currentNode=k,o}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{constructor(t,e,i,s){var o;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),W(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):He(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$&&W(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=G.createElement(ve(s.h,s.h[0]),this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.v(i);else{const r=new Oe(o,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=Qt.get(t.strings);return e===void 0&&Qt.set(t.strings,e=new G(t)),e}T(t){pe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new K(this.k(V()),this.k(V()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class rt{constructor(t,e,i,s,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=N(this,t,e,0),r=!W(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const h=t;let l,a;for(t=o[0],l=0;l<o.length-1;l++)a=N(this,h[i+l],e,l),a===H&&(a=this._$AH[l]),r||(r=!W(a)||a!==this._$AH[l]),a===$?t=$:t!==$&&(t+=(a??"")+o[l+1]),this._$AH[l]=a}r&&!s&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ie extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}}const Le=U?U.emptyScript:"";class je extends rt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==$?this.element.setAttribute(this.name,Le):this.element.removeAttribute(this.name)}}class Be extends rt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=N(this,t,e,0))!==null&&i!==void 0?i:$)===H)return;const s=this._$AH,o=t===$&&s!==$||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==$&&(s===$||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ze{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Xt=st.litHtmlPolyfillSupport;Xt?.(G,K),(($t=st.litHtmlVersions)!==null&&$t!==void 0?$t:st.litHtmlVersions=[]).push("2.8.0");const qe=(n,t,e)=>{var i,s;const o=(i=e?.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const h=(s=e?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new K(t.insertBefore(V(),h),h,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mt,ft;class _ extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qe(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return H}}_.finalized=!0,_._$litElement$=!0,(mt=globalThis.litElementHydrateSupport)===null||mt===void 0||mt.call(globalThis,{LitElement:_});const Yt=globalThis.litElementPolyfillSupport;Yt?.({LitElement:_});((ft=globalThis.litElementVersions)!==null&&ft!==void 0?ft:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z=n=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(n,t):((e,i)=>{const{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},We=(n,t,e)=>{t.constructor.createProperty(e,n)};function y(n){return(t,e)=>e!==void 0?We(n,t,e):Ve(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ge=({finisher:n,descriptor:t})=>(e,i)=>{var s;if(i===void 0){const o=(s=e.originalKey)!==null&&s!==void 0?s:e.key,r=t!=null?{kind:"method",placement:"prototype",key:o,descriptor:t(e.key)}:{...e,key:o};return n!=null&&(r.finisher=function(h){n(h,o)}),r}{const o=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),n?.(o,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fe(n,t){return Ge({descriptor:e=>{const i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(t){const s=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt;((yt=window.HTMLSlotElement)===null||yt===void 0?void 0:yt.prototype.assignedElements)!=null;const Je="mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!";let D=class extends _{constructor(){super(...arguments),this.patronName="",this.baseHost="archive.org",this.defaultMonthlyDonationAmount=5}render(){const t=`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`;return f`
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
          <a class="link" href=${Je}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){const t="mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20",e=encodeURIComponent(this.patronName);return`${t}${e}`}};D.styles=J`
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
  `;m([y({type:String})],D.prototype,"patronName",void 0);m([y({type:String})],D.prototype,"baseHost",void 0);m([y({type:String})],D.prototype,"defaultMonthlyDonationAmount",void 0);D=m([Z("iaux-mgc-welcome")],D);const Ke=f`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`;class Ze extends _{static get styles(){return J`
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
    `}render(){return Ke}}customElements.define("ia-icon-donate",Ze);let nt=class extends _{constructor(){super(...arguments),this.titleStyle="heart"}get heart(){return this.titleStyle==="heart"?f` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:$}render(){return f`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};nt.styles=J`
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
  `;m([y({type:String})],nt.prototype,"titleStyle",void 0);nt=m([Z("iaux-mgc-title")],nt);let O=class extends _{constructor(){super(...arguments),this.isDisabled=!1}render(){return f`
      <button
        ?disabled=${this.isDisabled}
        @click=${()=>{this.isDisabled||this.clickHandler&&(this===null||this===void 0||this.clickHandler(this))}}
      >
        <slot></slot>
      </button>
    `}};O.styles=J`
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
  `;m([y({type:Boolean,reflect:!0})],O.prototype,"isDisabled",void 0);m([y({type:Function})],O.prototype,"clickHandler",void 0);m([Fe("button")],O.prototype,"button",void 0);O=m([Z("iaux-button")],O);let F=class extends _{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(t){return!!t.has("receiptDispatcher")}updated(t){t.has("receipts")&&this.updateReceiptSentMap(),t.has("receiptDispatcher")&&console.log("receiptDispatcher UPDATED ---- ",this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{const t={};this.receipts.forEach(e=>{t[e.id]={id:e.id,emailStatus:""}}),this.receiptDispatcher=t}}emailReceipt(t){this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{donation:t}}))}donationAmountFormatted(t){return`USD $${t}`}async emailSent(t){var e;const i=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;const s={...i},{id:o}=t;s[o]=t,this.receiptDispatcher={...s},console.log("RECEIPTS -- emailSent",this.receiptDispatcher,t);const r=(e=this.shadowRoot)===null||e===void 0?void 0:e.querySelector(`#donation-${o} iaux-button`);r.isDisabled=!1}emailStatusMessageToDisplay(t){switch(t.emailStatus){case"success":return"✓ Sent";case"fail":return"✖ Failed";default:return""}}ctaButtonText(t,e){return e?.emailStatus==="pending"?"Sending...":"Email receipt"}render(){return f`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(t=>{var e;const i=(e=this.receiptDispatcher)===null||e===void 0?void 0:e[t.id],s=i?.emailStatus==="pending",o=!i||!i.emailStatus?$:f`<span
                        class=${`sent-status ${i.emailStatus}`}
                        >${this.emailStatusMessageToDisplay(i)}</span
                      >`;return f`
                  <tr
                    id=${`donation-${t.id}`}
                    class=${`${t.isTest?"test":""}`}
                  >
                    <td>
                      <div class="donation-date">${t.date}</div>
                    </td>
                    <td>
                      <div class="donation-amount">
                        ${this.donationAmountFormatted(t.amount)}
                      </div>
                    </td>
                    <td>
                      <div class="request-receipt">
                        <iaux-button
                          class="link slim"
                          style="--link-button-flex-align-items: center;"
                          .clickHandler=${async r=>{if(!s&&(r.isDisabled=!0,await r.updateComplete),!s&&(this.emailReceipt(t),this.receiptDispatcher)){const l={...this.receiptDispatcher};l[t.id].emailStatus="pending",this.receiptDispatcher=l}}}
                        >
                          ${this.ctaButtonText(t,i)}
                        </iaux-button>
                        ${o}
                      </div>
                    </td>
                  </tr>
                `}):f`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};F.styles=J`
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
    iaux-button-style {
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
  `;m([y({type:Array})],F.prototype,"receipts",void 0);m([y({type:Object})],F.prototype,"receiptDispatcher",void 0);F=m([Z("iaux-mgc-receipts")],F);let I=class extends _{constructor(){super(...arguments),this.patronName="",this.receipts=[],this.updates=[],this.viewToDisplay="welcome"}createRenderRoot(){return this}get receiptListElement(){return this.querySelector("iaux-mgc-receipts")}updateReceived(t){this.receiptListElement.emailSent({id:t.donationId,emailStatus:t.status}),this.updates.unshift(t)}get showReceiptsCTA(){return f`
      <iaux-button
        class="link"
        style="--button-padding: 0;"
        .clickHandler=${()=>{this.viewToDisplay="receipts",this.dispatchEvent(new CustomEvent("ShowReceipts"))}}
      >
        View recent donation history
      </iaux-button>
    `}render(){return this.viewToDisplay==="receipts"?f`
        <iaux-mgc-title titleStyle="default">
          <span slot="title">Recent donations</span>
          <span slot="action">
            <iaux-button
              class="link slim"
              id="close-receipts"
              .clickHandler=${async()=>{this.viewToDisplay="welcome",this.dispatchEvent(new CustomEvent("ShowWelcome")),this.updates=[],await this.updateComplete}}
            >
              Back to account settings
            </iaux-button>
          </span>
        </iaux-mgc-title>
        <iaux-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${t=>{console.log("EmailReceiptRequest",t.detail),this.dispatchEvent(new CustomEvent("EmailReceiptRequest",{detail:{...t.detail}}))}}
        ></iaux-mgc-receipts>
      `:f`
      <iaux-mgc-title titleStyle="heart">
        <span slot="title">Monthly Giving Circle</span>
        <span slot="action"
          >${this.receipts.length?this.showReceiptsCTA:$}</span
        >
      </iaux-mgc-title>
      <iaux-mgc-welcome .patronName=${this.patronName}></iaux-mgc-welcome>
    `}};m([y({type:String})],I.prototype,"patronName",void 0);m([y({type:Array})],I.prototype,"receipts",void 0);m([y({type:Array})],I.prototype,"updates",void 0);m([y({type:String,reflect:!0})],I.prototype,"viewToDisplay",void 0);I=m([Z("iaux-monthly-giving-circle")],I);class _t{constructor(t){this.id=t.id,this.amount=t.amount,this.date=t.date,this.isTest=t.isTest,this.token=t.token}}let te=[];const me=[new _t({amount:9999.99,date:new Date("2019-01-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-1",token:"foo-token-1",isTest:!1}),new _t({amount:100,date:new Date("2022-09-22 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-2",token:"foo-token-2",isTest:!0}),new _t({amount:100,date:new Date("2023-12-23 14:26:34").toLocaleString("US-EN",{year:"numeric",month:"short",day:"numeric"}),donor:"John Doe",paymentMethod:"Credit Card",status:"Completed",id:"foo-id-3",token:"foo-token-3",isTest:!1})];let gt=!0;const T=document.querySelector("iaux-monthly-giving-circle");T.receipts=me;T.addEventListener("EmailReceiptRequest",n=>{const t=document.getElementById("interaction-status-area"),{donation:e}=n.detail,i=Math.floor(Math.random()+.5),s=i===1?"success":"fail",o=i===1?3e3:8e3;t.innerText=`Email receipt request for donation ${e.id} will return ${s} in ${o} ms.`;const h={message:s==="success"?"Email receipt sent":"Email receipt failed",status:s,donationId:e.id};te=[h,...te],setTimeout(()=>{T.updateReceived(h),console.log("EmailReceiptRequest index.html ----",h),t.innerText=""},o)});document.getElementById("toggle-receipts").addEventListener("click",async()=>{if(gt){T.receipts=[],gt=!1;return}T.receipts=me,await T.updateComplete,gt=!0});
