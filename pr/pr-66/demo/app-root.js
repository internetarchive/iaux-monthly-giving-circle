import{LazyLoaderService as e}from"https://esm.archive.org/@internetarchive/lazy-loader-service";var t=Object.create,n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,a=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),c=(e,t,a,s)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var c=i(t),l=0,u=c.length,d;l<u;l++)d=c[l],!o.call(e,d)&&d!==a&&n(e,d,{get:(e=>t[e]).bind(null,d),enumerable:!(s=r(t,d))||s.enumerable});return e},l=(e,r,i)=>(i=e==null?{}:t(a(e)),c(r||!e||!e.__esModule?n(i,`default`,{value:e,enumerable:!0}):i,e));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function u(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function d(e,t,n,r){function i(e){return e instanceof n?e:new n(function(t){t(e)})}return new(n||=Promise)(function(n,a){function o(e){try{c(r.next(e))}catch(e){a(e)}}function s(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){e.done?n(e.value):i(e.value).then(o,s)}c((r=r.apply(e,t||[])).next())})}var f=window,ee=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,te=Symbol(),ne=new WeakMap,re=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ee&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ne.set(t,e))}return e}toString(){return this.cssText}},ie=e=>new re(typeof e==`string`?e:e+``,void 0,te),ae=(e,t)=>{ee?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{let n=document.createElement(`style`),r=f.litNonce;r!==void 0&&n.setAttribute(`nonce`,r),n.textContent=t.cssText,e.appendChild(n)}))},oe=ee?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ie(t)})(e):e,se=window,ce=se.trustedTypes,le=ce?ce.emptyScript:``,ue=se.reactiveElementPolyfillSupport,de={toAttribute(e,t){switch(t){case Boolean:e=e?le:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},fe=(e,t)=>t!==e&&(t==t||e==e),pe={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe},me=`finalized`,he=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){this.finalize(),(this.h??=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach(((t,n)=>{let r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))})),e}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e==`symbol`?Symbol():`__`+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){let i=this[e];this[t]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||pe}static finalize(){if(this.hasOwnProperty(me))return!1;this[me]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty(`properties`)){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(oe(e))}else e!==void 0&&t.push(oe(e));return t}static _$Ep(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)==null||e.forEach((e=>e(this)))}addController(e){var t;(this._$ES??=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$ES)==null||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach((e=>e.hostConnected?.call(e)))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach((e=>e.hostDisconnected?.call(e)))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=pe){let r=this.constructor._$Ep(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?de:n.converter).toAttribute(t,n.type);this._$El=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(e,t){let n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?de:e.converter;this._$El=r,this[r]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n||=this.constructor.getPropertyOptions(e)).hasChanged||fe)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&=(this._$Ei.forEach(((e,t)=>this[t]=e)),void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)==null||e.forEach((e=>e.hostUpdate?.call(e))),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)==null||t.forEach((e=>e.hostUpdated?.call(e))),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};he[me]=!0,he.elementProperties=new Map,he.elementStyles=[],he.shadowRootOptions={mode:`open`},ue?.({ReactiveElement:he}),(se.reactiveElementVersions??=[]).push(`1.6.3`);var ge=window,_e=ge.trustedTypes,ve=_e?_e.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ye=`$lit$`,p=`lit$${(Math.random()+``).slice(9)}$`,be=`?`+p,xe=`<${be}>`,Se=document,Ce=()=>Se.createComment(``),we=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Te=Array.isArray,Ee=e=>Te(e)||typeof e?.[Symbol.iterator]==`function`,De=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ae=/>/g,m=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),je=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Pe=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Fe=new WeakMap,Ie=Se.createTreeWalker(Se,129,null,!1);function Le(e,t){if(!Array.isArray(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ve===void 0?t:ve.createHTML(t)}var Re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:``,o=Oe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Oe?c[1]===`!--`?o=ke:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=m):(Ne.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=m):o=Ae:o===m?c[0]===`>`?(o=i??Oe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?m:c[3]===`"`?Me:je):o===Me||o===je?o=m:o===ke||o===Ae?o=Oe:(o=m,i=void 0);let d=o===m&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Oe?n+xe:l>=0?(r.push(s),n.slice(0,l)+ye+n.slice(l)+p+d):n+p+(l===-2?(r.push(void 0),t):d)}return[Le(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:``)),r]},ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Re(t,n);if(this.el=e.createElement(l,r),Ie.currentNode=this.el.content,n===2){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;(i=Ie.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){let e=[];for(let t of i.getAttributeNames())if(t.endsWith(ye)||t.startsWith(p)){let n=u[o++];if(e.push(t),n!==void 0){let e=i.getAttribute(n.toLowerCase()+ye).split(p),t=/([.?@])?(.*)/.exec(n);c.push({type:1,index:a,name:t[2],strings:e,ctor:t[1]===`.`?We:t[1]===`?`?Ke:t[1]===`@`?qe:Ue})}else c.push({type:6,index:a})}for(let t of e)i.removeAttribute(t)}if(Ne.test(i.tagName)){let e=i.textContent.split(p),t=e.length-1;if(t>0){i.textContent=_e?_e.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ce()),Ie.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ce())}}}else if(i.nodeType===8)if(i.data===be)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(p,e+1))!==-1;)c.push({type:7,index:a}),e+=p.length-1}a++}}static createElement(e,t){let n=Se.createElement(`template`);return n.innerHTML=e,n}};function Be(e,t,n=e,r){var i,a;if(t===Pe)return t;let o=r===void 0?n._$Cl:n._$Co?.[r],s=we(t)?void 0:t._$litDirective$;return o?.constructor!==s&&((i=o?._$AO)==null||i.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,n,r)),r===void 0?n._$Cl=o:((a=n)._$Co??(a._$Co=[]))[r]=o),o!==void 0&&(t=Be(e,o._$AS(e,t.values),o,r)),t}var Ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Se).importNode(t,!0);Ie.currentNode=r;let i=Ie.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new He(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ie.nextNode(),a++)}return Ie.currentNode=Se,r}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},He=class e{constructor(e,t,n,r){var i;this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(i=r?.isConnected)==null||i}get _$AU(){return this._$AM?._$AU??this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Be(this,e,t),we(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ee(e)?this.T(e):this._(e):this.$(e):this.g(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==h&&we(this._$AH)?this._$AA.nextSibling.data=e:this.$(Se.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ze.createElement(Le(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.v(t);else{let e=new Ve(r,this),n=e.u(this.options);e.v(t),this.$(n),this._$AH=e}}_$AC(e){let t=Fe.get(e.strings);return t===void 0&&Fe.set(e.strings,t=new ze(e)),t}T(t){Te(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.k(Ce()),this.k(Ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)==null||t.call(this,e))}},Ue=class{constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Be(this,e,t,0),a=!we(e)||e!==this._$AH&&e!==Pe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Be(this,r[n+o],t,o),s===Pe&&(s=this._$AH[o]),a||=!we(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},We=class extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ge=_e?_e.emptyScript:``,Ke=class extends Ue{constructor(){super(...arguments),this.type=4}j(e){e&&e!==h?this.element.setAttribute(this.name,Ge):this.element.removeAttribute(this.name)}},qe=class extends Ue{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Be(this,e,t,0)??h)===Pe)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}},Ye=ge.litHtmlPolyfillSupport;Ye?.(ze,He),(ge.litHtmlVersions??=[]).push(`2.8.0`);var Xe=window,Ze=Xe.ShadowRoot&&(Xe.ShadyCSS===void 0||Xe.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,Qe=Symbol(),$e=new WeakMap,et=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Qe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ze&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=$e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&$e.set(t,e))}return e}toString(){return this.cssText}},tt=e=>new et(typeof e==`string`?e:e+``,void 0,Qe),g=(e,...t)=>new et(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,Qe),nt=(e,t)=>{Ze?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{let n=document.createElement(`style`),r=Xe.litNonce;r!==void 0&&n.setAttribute(`nonce`,r),n.textContent=t.cssText,e.appendChild(n)}))},rt=Ze?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return tt(t)})(e):e,it=window,at=it.trustedTypes,ot=at?at.emptyScript:``,st=it.reactiveElementPolyfillSupport,ct={toAttribute(e,t){switch(t){case Boolean:e=e?ot:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},lt=(e,t)=>t!==e&&(t==t||e==e),ut={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:lt},dt=`finalized`,ft=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){this.finalize(),(this.h??=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach(((t,n)=>{let r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))})),e}static createProperty(e,t=ut){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let n=typeof e==`symbol`?Symbol():`__`+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){let i=this[e];this[t]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ut}static finalize(){if(this.hasOwnProperty(dt))return!1;this[dt]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty(`properties`)){let e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(rt(e))}else e!==void 0&&t.push(rt(e));return t}static _$Ep(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)==null||e.forEach((e=>e(this)))}addController(e){var t;(this._$ES??=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$ES)==null||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return nt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)==null||e.forEach((e=>e.hostConnected?.call(e)))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)==null||e.forEach((e=>e.hostDisconnected?.call(e)))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ut){let r=this.constructor._$Ep(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ct:n.converter).toAttribute(t,n.type);this._$El=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$El=null}}_$AK(e,t){let n=this.constructor,r=n._$Ev.get(e);if(r!==void 0&&this._$El!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ct:e.converter;this._$El=r,this[r]=i.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n||=this.constructor.getPropertyOptions(e)).hasChanged||lt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&=(this._$Ei.forEach(((e,t)=>this[t]=e)),void 0);let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)==null||e.forEach((e=>e.hostUpdate?.call(e))),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)==null||t.forEach((e=>e.hostUpdated?.call(e))),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ft[dt]=!0,ft.elementProperties=new Map,ft.elementStyles=[],ft.shadowRootOptions={mode:`open`},st?.({ReactiveElement:ft}),(it.reactiveElementVersions??=[]).push(`1.6.3`);var pt=window,mt=pt.trustedTypes,ht=mt?mt.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,gt=`$lit$`,_=`lit$${(Math.random()+``).slice(9)}$`,_t=`?`+_,vt=`<${_t}>`,v=document,yt=()=>v.createComment(``),bt=e=>e===null||typeof e!=`object`&&typeof e!=`function`,xt=Array.isArray,St=e=>xt(e)||typeof e?.[Symbol.iterator]==`function`,Ct=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Tt=/-->/g,Et=/>/g,Dt=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ot=/'/g,kt=/"/g,At=/^(?:script|style|textarea|title)$/i,y=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),jt=Symbol.for(`lit-noChange`),b=Symbol.for(`lit-nothing`),Mt=new WeakMap,Nt=v.createTreeWalker(v,129,null,!1);function Pt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ht===void 0?t:ht.createHTML(t)}var Ft=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:``,o=wt;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===wt?c[1]===`!--`?o=Tt:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Dt):(At.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Dt):o=Et:o===Dt?c[0]===`>`?(o=i??wt,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Dt:c[3]===`"`?kt:Ot):o===kt||o===Ot?o=Dt:o===Tt||o===Et?o=wt:(o=Dt,i=void 0);let d=o===Dt&&e[t+1].startsWith(`/>`)?` `:``;a+=o===wt?n+vt:l>=0?(r.push(s),n.slice(0,l)+gt+n.slice(l)+_+d):n+_+(l===-2?(r.push(void 0),t):d)}return[Pt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:``)),r]},It=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ft(t,n);if(this.el=e.createElement(l,r),Nt.currentNode=this.el.content,n===2){let e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;(i=Nt.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes()){let e=[];for(let t of i.getAttributeNames())if(t.endsWith(gt)||t.startsWith(_)){let n=u[o++];if(e.push(t),n!==void 0){let e=i.getAttribute(n.toLowerCase()+gt).split(_),t=/([.?@])?(.*)/.exec(n);c.push({type:1,index:a,name:t[2],strings:e,ctor:t[1]===`.`?Vt:t[1]===`?`?Ut:t[1]===`@`?Wt:Bt})}else c.push({type:6,index:a})}for(let t of e)i.removeAttribute(t)}if(At.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=mt?mt.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],yt()),Nt.nextNode(),c.push({type:2,index:++a});i.append(e[t],yt())}}}else if(i.nodeType===8)if(i.data===_t)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function Lt(e,t,n=e,r){var i,a;if(t===jt)return t;let o=r===void 0?n._$Cl:n._$Co?.[r],s=bt(t)?void 0:t._$litDirective$;return o?.constructor!==s&&((i=o?._$AO)==null||i.call(o,!1),s===void 0?o=void 0:(o=new s(e),o._$AT(e,n,r)),r===void 0?n._$Cl=o:((a=n)._$Co??(a._$Co=[]))[r]=o),o!==void 0&&(t=Lt(e,o._$AS(e,t.values),o,r)),t}var Rt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);Nt.currentNode=r;let i=Nt.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new zt(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Gt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Nt.nextNode(),a++)}return Nt.currentNode=v,r}v(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},zt=class e{constructor(e,t,n,r){var i;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(i=r?.isConnected)==null||i}get _$AU(){return this._$AM?._$AU??this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Lt(this,e,t),bt(e)?e===b||e==null||e===``?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==jt&&this._(e):e._$litType$===void 0?e.nodeType===void 0?St(e)?this.T(e):this._(e):this.$(e):this.g(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==b&&bt(this._$AH)?this._$AA.nextSibling.data=e:this.$(v.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=It.createElement(Pt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.v(t);else{let e=new Rt(r,this),n=e.u(this.options);e.v(t),this.$(n),this._$AH=e}}_$AC(e){let t=Mt.get(e.strings);return t===void 0&&Mt.set(e.strings,t=new It(e)),t}T(t){xt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.k(yt()),this.k(yt()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)==null||t.call(this,e))}},Bt=class{constructor(e,t,n,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Lt(this,e,t,0),a=!bt(e)||e!==this._$AH&&e!==jt,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Lt(this,r[n+o],t,o),s===jt&&(s=this._$AH[o]),a||=!bt(s)||s!==this._$AH[o],s===b?e=b:e!==b&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Vt=class extends Bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Ht=mt?mt.emptyScript:``,Ut=class extends Bt{constructor(){super(...arguments),this.type=4}j(e){e&&e!==b?this.element.setAttribute(this.name,Ht):this.element.removeAttribute(this.name)}},Wt=class extends Bt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Lt(this,e,t,0)??b)===jt)return;let n=this._$AH,r=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Gt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}},Kt=pt.litHtmlPolyfillSupport;Kt?.(It,zt),(pt.litHtmlVersions??=[]).push(`2.8.0`);var qt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new zt(t.insertBefore(yt(),e),e,void 0,n??{})}return i._$AI(e),i},Jt,x=class extends ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return jt}};x.finalized=!0,x._$litElement$=!0,(Jt=globalThis.litElementHydrateSupport)==null||Jt.call(globalThis,{LitElement:x});var Yt=globalThis.litElementPolyfillSupport;Yt?.({LitElement:x}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push(`3.3.3`);var S=e=>t=>typeof t==`function`?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{let{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){customElements.define(e,t)}}})(e,t),Xt=(e,t)=>t.kind===`method`&&t.descriptor&&!(`value`in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:`field`,key:Symbol(),placement:`own`,descriptor:{},originalKey:t.key,initializer(){typeof t.initializer==`function`&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},Zt=(e,t,n)=>{t.constructor.createProperty(n,e)};function C(e){return(t,n)=>n===void 0?Xt(e,t):Zt(e,t,n)}function Qt(e){return C({...e,state:!0})}var $t=({finisher:e,descriptor:t})=>(n,r)=>{if(r===void 0){let r=n.originalKey??n.key,i=t==null?{...n,key:r}:{kind:`method`,placement:`prototype`,key:r,descriptor:t(n.key)};return e!=null&&(i.finisher=function(t){e(t,r)}),i}{let i=n.constructor;t!==void 0&&Object.defineProperty(n,r,t(r)),e?.(i,r)}};function w(e,t){return $t({descriptor:n=>{let r={get(){return this.renderRoot?.querySelector(e)??null},enumerable:!0,configurable:!0};if(t){let t=typeof n==`symbol`?Symbol():`__`+n;r.get=function(){return this[t]===void 0&&(this[t]=this.renderRoot?.querySelector(e)??null),this[t]}}return r}})}window.HTMLSlotElement?.prototype.assignedElements;var en=`mailto:donations@archive.org?subject=Please%20Confirm%20my%20Monthly%20Giving%20Circle%20Status&body=Dear%20Philanthropy%20Team%2C%0A%0AI%20am%20already%20a%20member%20of%20the%20Monthly%20Giving%20Circle%2C%20but%20I%20do%20not%20see%20my%20recurring%20donation%20under%20Account%20Settings.%20Please%20use%20the%20following%20information%20to%20locate%20my%20donation%3A%0A%0AFull%20name%3A%20____________%0A%0AEmail%20address(es)%3A%20____________%0A%0A*Please%20provide%20any%20alternative%20email%20addresses%20you%20may%20have%20used%20to%20create%20your%20recurring%20donation.%0A%0AIf%20you%20have%20access%20to%20a%20monthly%20donation%20receipt%2C%20please%20include%20a%20screenshot%20with%20your%20email.%0A%0AThanks!`,tn=class extends x{constructor(){super(...arguments),this.patronName=``,this.baseHost=`archive.org`,this.defaultMonthlyDonationAmount=5}render(){return y`
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

        <a href=${`https://${this.baseHost}/donate/?amt=${this.defaultMonthlyDonationAmount}&contrib_type=monthly&origin=iawww-usrsttng`} target="_blank" class="link join-mgc"
          >Click here to join the Monthly Giving Circle</a
        >
        <p>
          Already a monthly donor but don't see your donation details here?
          <br />
          <a class="link" href=${en}
            >Contact us at donations@archive.org</a
          >
        </p>
      </section>
    `}get mailToInquiryLink(){return`mailto:donations@archive.org?subject=Tell%20me%20more%20about%20the%20Monthly%20Giving%20Circle&body=Hello%2C%20I%20am%20an%20archive%20member%20and%20want%20to%20know%20about%20the%20Monthly%20Giving%20Circle.%20%20Best%2C%20${encodeURIComponent(this.patronName)}`}};tn.styles=g`
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
  `,u([C({type:String})],tn.prototype,`patronName`,void 0),u([C({type:String})],tn.prototype,`baseHost`,void 0),u([C({type:String})],tn.prototype,`defaultMonthlyDonationAmount`,void 0),tn=u([S(`ia-mgc-welcome`)],tn);var nn=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="donateTitleID donateDescID"
>
  <title id="donateTitleID">Donate icon</title>
  <desc id="donateDescID">An illustration of a heart shape</desc>
  <path class="fill-color" d="m30.0120362 11.0857287c-1.2990268-1.12627221-2.8599641-1.65258786-4.682812-1.57894699-.8253588.02475323-1.7674318.3849128-2.8262192 1.08047869-1.0587873.6955659-1.89622 1.5724492-2.512298 2.63065-.591311-1.0588196-1.4194561-1.9357029-2.4844351-2.63065-1.0649791-.69494706-2.0039563-1.05510663-2.8169316-1.08047869-1.2067699-.04950647-2.318187.17203498-3.3342513.66462439-1.0160643.4925893-1.82594378 1.2002224-2.42963831 2.1228992-.60369453.9226769-.91173353 1.9629315-.92411701 3.1207641-.03715043 1.9202322.70183359 3.7665141 2.21695202 5.5388457 1.2067699 1.4035084 2.912594 3.1606786 5.1174721 5.2715107 2.2048782 2.1108321 3.7565279 3.5356901 4.6549492 4.2745742.8253588-.6646243 2.355647-2.0647292 4.5908647-4.2003145s3.9747867-3.9171994 5.218707-5.3448422c1.502735-1.7723316 2.2355273-3.6186135 2.1983769-5.5388457-.0256957-1.7608832-.6875926-3.2039968-1.9866194-4.3302689z"/>
</svg>
`,rn=class extends x{static get styles(){return g`
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
    `}render(){return nn}};customElements.define(`ia-icon-donate`,rn);var an=class extends x{constructor(){super(...arguments),this.isDisabled=!1}render(){return y`
      <button
        ?disabled=${this.isDisabled}
        @click=${e=>{this.clickHandler&&(this===null||this===void 0||this.clickHandler(e,this))}}
      >
        <slot></slot>
      </button>
    `}};an.styles=g`
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
  `,u([C({type:Boolean,reflect:!0})],an.prototype,`isDisabled`,void 0),u([C({type:Object})],an.prototype,`clickHandler`,void 0),u([w(`button`)],an.prototype,`button`,void 0),an=u([S(`ia-mgc-button`)],an);var on=class extends x{constructor(){super(...arguments),this.plans=[],this.canEdit=!0}render(){return y`
      <section class="monthly-giving-circle">
        <ul>
          ${this.plans.map(e=>{let t=e.payment?.paymentMethodType??`Method not found`;t===`creditCard`&&(t=`Credit card`);let n=e.payment?.cardType??`Card type not found`,r=e.payment?.last4?`...${e.payment?.last4}`:`CC number not found`;return y`
              <li class=${`${e.plan.isCancelled?`cancelled`:``}`}>
                <div class="info">
                  <div class="amount">
                    <h3>Amount</h3>
                    <p>
                      ${e.currency}
                      ${e.currencySymbol}${e.amountFormatted}/month
                    </p>
                    ${e.isTest?y`<p class="is-test">(Test payment)</p>`:b}
                  </div>
                  <div class="payment-details">
                    <h3>Method</h3>
                    <p>${t}</p>
                    ${e.payment?.paymentMethodType===`creditCard`?y`<p>${n}</p>
                          <p>${r}</p>`:b}
                    ${e.payment?.paymentMethodType===`Paypal`?y`<p>
                          Paypal email:
                          <a href=${`mailto:${e.payment?.paypalEmail}`}
                            >${e.payment?.paypalEmail}</a
                          >
                        </p>`:b}
                    ${e.payment?.paymentMethodType===`Venmo`?y`<p>
                          Venmo username:
                          <a href=${`mailto:${e.payment?.venmoUsername}`}
                            >${e.payment?.paypalEmail}</a
                          >
                        </p>`:b}
                    ${e.payment?.paymentMethodType===`creditCard`?b:y`<p>
                          Expires:
                          ${e.payment?.expirationMonth??`month not found`}/${e.payment?.expirationYear??`year not found`}
                        </p>`}
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
    `}planCTA(e){if(!this.canEdit)return y`<p class="email-edit-plan">
        Need to update your plan further? Please email us at
        <a href=${`mailto:donations@archive.org?subject=I'd like to update my monthly donation`}>donations@archive.org</a>.
      </p>`;let t=e.plan.isCancelled?`Plan is cancelled`:`Manage this monthly donation`;return y`<ia-mgc-button
      class="ia-button link edit-donation"
      .isDisabled=${e.plan.isCancelled}
      .clickHandler=${async(t,n)=>{n.isDisabled=!0,this.dispatchEvent(new CustomEvent(`editThisPlan`,{detail:{plan:e}}))}}
      >${t}</ia-mgc-button
    >`}};on.styles=g`
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
  `,u([C({type:Array})],on.prototype,`plans`,void 0),u([C({type:Boolean,reflect:!0})],on.prototype,`canEdit`,void 0),on=u([S(`ia-mgc-plans`)],on);var sn=class extends x{constructor(){super(...arguments),this.titleStyle=`heart`}get heart(){return this.titleStyle===`heart`?y` <div class="icon-donate"><ia-icon-donate></ia-icon-donate></div> `:b}render(){return y`
      <div>
        <h2>
          <div class="title-section">
            ${this.heart}
            <slot name="title"></slot>
          </div>
          <slot name="action"></slot>
        </h2>
      </div>
    `}};sn.styles=g`
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
  `,u([C({type:String})],sn.prototype,`titleStyle`,void 0),sn=u([S(`ia-mgc-title`)],sn);var cn=class extends x{constructor(){super(...arguments),this.receipts=[],this.receiptDispatcher=null}shouldUpdate(e){return!!e.has(`receiptDispatcher`)}updated(e){e.has(`receipts`)&&this.updateReceiptSentMap(),e.has(`receiptDispatcher`)&&console.log(`receiptDispatcher UPDATED ---- `,this.receiptDispatcher)}updateReceiptSentMap(){if(!this.receipts.length)this.receiptDispatcher=null;else{let e={};this.receipts.forEach(t=>{e[t.id]={id:t.id,emailStatus:``}}),this.receiptDispatcher=e}}emailReceipt(e){this.dispatchEvent(new CustomEvent(`EmailReceiptRequest`,{detail:{donation:e}}))}async emailSent(e){let t=this.receiptDispatcher;this.receiptDispatcher=null,await this.updateComplete;let n={...t},{id:r}=e;n[r]=e,this.receiptDispatcher={...n},console.log(`RECEIPTS -- emailSent`,this.receiptDispatcher,e);let i=CSS.escape(r),a=this.shadowRoot?.querySelector(`#donation-${i} ia-mgc-button`);a.isDisabled=!1}emailStatusMessageToDisplay(e){switch(e.emailStatus){case`success`:return`Sent`;case`fail`:return`Failed`;default:return``}}ctaButtonText(e,t){return t?.emailStatus===`pending`?`Sending...`:`Email receipt`}render(){return y`
      <section id="recent-donations-list">
        <table>
          <tr>
            <th class="date">Date</th>
            <th class="amount">Amount</th>
            <th class="action">Action</th>
          </tr>
          ${this.receipts.length?this.receipts.map(e=>{let t=this.receiptDispatcher?.[e.id],n=t?.emailStatus===`pending`,r=!t||!t.emailStatus?b:y`<ia-mgc-update-status
                        .status=${t.emailStatus}
                        >${this.emailStatusMessageToDisplay(t)}</ia-mgc-update-status
                      >`;return y`
                  <tr
                    id=${`donation-${e.id}`}
                    class=${`${e.isTest?`test`:``}`}
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
                          .clickHandler=${async(t,r)=>{if(n||(r.isDisabled=!0,await r.updateComplete),!n&&(this.emailReceipt(e),this.receiptDispatcher)){let t={...this.receiptDispatcher};t[e.id].emailStatus=`pending`,this.receiptDispatcher=t}}}
                        >
                          ${this.ctaButtonText(e,t)}
                        </ia-mgc-button>
                        ${r}
                      </div>
                    </td>
                  </tr>
                `}):y`<p>No recent donations found</p>`}
        </table>
      </section>
    `}};cn.styles=g`
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
  `,u([C({type:Array})],cn.prototype,`receipts`,void 0),u([C({type:Object})],cn.prototype,`receiptDispatcher`,void 0),cn=u([S(`ia-mgc-receipts`)],cn);var T;(function(e){e.Development=`dev`,e.Production=`prod`})(T||={});var E=l(s(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n||=self,n.currency=r())})(e,function(){function e(a,o){if(!(this instanceof e))return new e(a,o);o=Object.assign({},n,o);var s=10**o.precision;this.intValue=a=t(a,o),this.value=a/s,o.increment=o.increment||1/s,o.groups=o.useVedic?i:r,this.s=o,this.p=s}function t(t,n){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:!0,i=n.decimal,a=n.errorOnInvalid,o=n.fromCents,s=10**n.precision,c=t instanceof e;if(c&&o)return t.intValue;if(typeof t==`number`||c)i=c?t.value:t;else if(typeof t==`string`)a=RegExp(`[^-\\d`+i+`]`,`g`),i=RegExp(`\\`+i,`g`),i=(i=t.replace(/\((.*)\)/,`-$1`).replace(a,``).replace(i,`.`))||0;else{if(a)throw Error(`Invalid Input`);i=0}return o||(i=(i*s).toFixed(4)),r?Math.round(i):i}var n={symbol:`$`,separator:`,`,decimal:`.`,errorOnInvalid:!1,precision:2,pattern:`!#`,negativePattern:`-!#`,format:function(e,t){var n=t.pattern,r=t.negativePattern,i=t.symbol,a=t.separator,o=t.decimal;t=t.groups;var s=(``+e).replace(/^-/,``).split(`.`),c=s[0];return s=s[1],(0<=e.value?n:r).replace(`!`,i).replace(`#`,c.replace(t,`$1`+a)+(s?o+s:``))},fromCents:!1},r=/(\d)(?=(\d{3})+\b)/g,i=/(\d)(?=(\d\d)+\d\b)/g;return e.prototype={add:function(n){var r=this.s,i=this.p;return e((this.intValue+t(n,r))/(r.fromCents?1:i),r)},subtract:function(n){var r=this.s,i=this.p;return e((this.intValue-t(n,r))/(r.fromCents?1:i),r)},multiply:function(t){var n=this.s;return e(this.intValue*t/(n.fromCents?1:10**n.precision),n)},divide:function(n){var r=this.s;return e(this.intValue/t(n,r,!1),r)},distribute:function(t){var n=this.intValue,r=this.p,i=this.s,a=[],o=Math[0<=n?`floor`:`ceil`](n/t),s=Math.abs(n-o*t);for(r=i.fromCents?1:r;t!==0;t--){var c=e(o/r,i);0<s--&&(c=c[0<=n?`add`:`subtract`](1/r)),a.push(c)}return a},dollars:function(){return~~this.value},cents:function(){return~~(this.intValue%this.p)},format:function(e){var t=this.s;return typeof e==`function`?e(this,t):t.format(this,Object.assign({},t,e))},toString:function(){var e=this.s,t=e.increment;return(Math.round(this.intValue/this.p/t)*t).toFixed(e.precision)},toJSON:function(){return this.value}},e})}))()),ln=()=>({events:{},emit(e,...t){(this.events[e]||[]).forEach(e=>e(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(e=>e!==t)}});function un(e){return new Promise(t=>setTimeout(t,e))}var D;(function(e){e.retryNumber=`retryNumber`,e.owner=`owner`,e.dynamicImportLoaded=`dynamicImportLoaded`,e.hasBeenRetried=`hasBeenRetried`})(D||={});var dn=`lazyLoaderService`,fn=class{constructor(e){this.emitter=ln(),this.container=e?.container??document.head,this.retryCount=e?.retryCount??2,this.retryInterval=e?.retryInterval??1}on(e,t){return this.emitter.on(e,t)}loadBundle(e){return d(this,void 0,void 0,function*(){let t,n;return e.module&&(t=this.loadScript({src:e.module,bundleType:`module`})),e.nomodule&&(n=this.loadScript({src:e.nomodule,bundleType:`nomodule`})),Promise.race([t,n])})}loadScript(e){return d(this,void 0,void 0,function*(){return this.doLoad(e)})}doLoad(e){return d(this,void 0,void 0,function*(){let t=e.retryNumber??0,n=`script[src='${e.src}'][async][${D.owner}='${dn}'][${D.retryNumber}='${t}']`,r=this.container.querySelector(n);return r||(r=this.getScriptTag(Object.assign(Object.assign({},e),{retryNumber:t})),this.container.appendChild(r)),new Promise((n,i)=>{if(r.getAttribute(D.dynamicImportLoaded)){n();return}let a=e.scriptBeingRetried,o=r.onload||a?.onload;r.onload=e=>{o?.(e),r.setAttribute(D.dynamicImportLoaded,`true`),n()};let s=r.onerror||a?.onerror;r.onerror=n=>d(this,void 0,void 0,function*(){let a=r.getAttribute(D.hasBeenRetried);if(t<this.retryCount&&!a){r.setAttribute(D.hasBeenRetried,`true`),yield un(this.retryInterval*1e3);let n=t+1;this.emitter.emit(`scriptLoadRetried`,e.src,n),this.doLoad(Object.assign(Object.assign({},e),{retryNumber:n,scriptBeingRetried:r}))}else a||this.emitter.emit(`scriptLoadFailed`,e.src,n),s?.(n),i(n)})})})}getScriptTag(e){let t=e.src.replace(`'`,`"`),n=document.createElement(`script`),r=e.retryNumber;n.setAttribute(D.owner,dn),n.setAttribute(`src`,t),n.setAttribute(D.retryNumber,r.toString()),n.async=!0;let i=e.attributes??{};switch(Object.keys(i).forEach(e=>{n.setAttribute(e,i[e])}),e.bundleType){case`module`:n.setAttribute(`type`,e.bundleType);break;case`nomodule`:n.setAttribute(e.bundleType,``);break;default:break}return n}},O=class{constructor(e){this.generator=e.generator}get(){return d(this,void 0,void 0,function*(){return this.cachedResponse?this.cachedResponse:this.previousPromise?(this.previousPromise=this.previousPromise.then(e=>e),this.previousPromise):(this.previousPromise=this.generateSingletonAndCache(),this.previousPromise)})}generateSingletonAndCache(){return d(this,void 0,void 0,function*(){let e=yield this.generator();return this.cachedResponse=e,e})}},pn=class{constructor(e,t){this.braintreeClient=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`client`),window.braintree.client})}),this.dataCollector=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`data-collector`),window.braintree.dataCollector})}),this.hostedFields=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`hosted-fields`),window.braintree.hostedFields})}),this.venmo=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`venmo`),window.braintree.venmo})}),this.payPal=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`paypal-checkout`),window.braintree.paypalCheckout})}),this.applePay=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`apple-pay`),window.braintree.applePay})}),this.googlePayBraintreeClient=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.loadBraintreeScript(`google-payment`),window.braintree.googlePayment})}),this.googlePaymentsClient=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:`https://pay.google.com/gp/p/js/pay.js`}),new google.payments.api.PaymentsClient({environment:this.environment===T.Development?`TEST`:`PRODUCTION`})})}),this.recaptchaLibrary=new O({generator:()=>new Promise(e=>{window.donationFormGrecaptchaLoadedCallback=()=>{setTimeout(()=>{delete window.donationFormGrecaptchaLoadedCallback},10),e(window.grecaptcha)},this.lazyLoader.loadScript({src:`https://www.google.com/recaptcha/api.js?onload=donationFormGrecaptchaLoadedCallback&render=explicit`})})}),this.paypalLibrary=new O({generator:()=>d(this,void 0,void 0,function*(){return yield this.lazyLoader.loadScript({src:`https://www.paypalobjects.com/api/checkout.js`,attributes:{"data-version-4":``,"log-level":`warn`}}),window.paypal})}),this.braintreeVersion=`3.62.2`,this.environment=T.Development,this.lazyLoader=e,this.environment=t}loadBraintreeScript(e){return d(this,void 0,void 0,function*(){let t=`${e}.${this.environment===T.Production?`min.js`:`js`}`,n=`https://js.braintreegateway.com/web/${this.braintreeVersion}/js/${t}`;yield this.lazyLoader.loadScript({src:n})})}},mn=class{constructor(e){this.streetAddress=e?.streetAddress,this.extendedAddress=e?.extendedAddress,this.locality=e?.locality,this.region=e?.region,this.postalCode=e?.postalCode,this.countryCodeAlpha2=e?.countryCodeAlpha2}},hn=class{constructor(e){this.email=e?.email,this.firstName=e?.firstName,this.lastName=e?.lastName}},gn=class{constructor(e){this.customer=e.customer,this.billing=e.billing}},k;(function(e){e.CreditCard=`Credit Card`,e.PayPal=`PayPal`,e.GooglePay=`Google Pay`,e.Venmo=`Venmo`,e.ApplePay=`Apple Pay`})(k||={});var A=class e{get feeAmountCovered(){return this.coverFees?this.fee:0}get fee(){return e.calculateFeeAmount(this.amount)}get total(){return e.calculateTotal(this.amount,this.coverFees)}static calculateTotal(e,t){let n=e+(t?this.calculateFeeAmount(e):0);return isNaN(n)?0:this.roundAmount(n)}static calculateFeeAmount(e){let t=e*.0219+.29;return isNaN(t)?0:this.roundAmount(t)}static roundAmount(e){return Math.round(e*100)/100}constructor(e){this.donationType=e.donationType,this.amount=e.amount,this.coverFees=e.coverFees}},j;(function(e){e.OneTime=`one-time`,e.Monthly=`monthly`,e.Upsell=`up_sell`})(j||={});var _n=class{constructor(e){this.logged_in_user=e?.logged_in_user,this.referrer=e?.referrer,this.fee_amount_covered=e?.fee_amount_covered,this.origin=e?.origin}},vn=class{constructor(e){this.customFields=new _n,this.paymentProvider=e.paymentProvider,this.paymentMethodNonce=e.paymentMethodNonce,this.recaptchaToken=e.recaptchaToken,this.customerId=e.customerId,this.deviceData=e.deviceData,this.upsellOnetimeTransactionId=e.upsellOnetimeTransactionId,this.bin=e.bin,this.binName=e.binName,this.amount=e.amount,this.donationType=e.donationType,this.customer=e.customer,this.billing=e.billing,e.customFields&&(this.customFields=e.customFields)}},yn=class{constructor(e){this.id=e.id}},bn=class{constructor(e){this.paymentProvider=e.paymentProvider,this.paymentMethodNonce=e.paymentMethodNonce,this.amount=e.amount,this.donationType=e.donationType,this.transaction_id=e.transaction_id,this.customer_id=e.customer_id,this.customer=new hn(e.customer),this.billing=new mn(e.billing),e.subscription&&(this.subscription=new yn(e.subscription))}},xn=class{constructor(e){this.code=e.code,this.message=e.message}},Sn=class{constructor(e){this.message=e.message;let{errors:t=[]}=e;this.errors=t.map(e=>new xn(e))}},Cn=class{constructor(e){this.success=e.success,this.success?this.value=new bn(e.value):this.value=new Sn(e.value)}},wn=[5,10,25,50,100,500,1e3],Tn=new A({donationType:j.OneTime,amount:10,coverFees:!1}),En=()=>({emit(e,...t){for(let n=this.events[e]||[],r=0,i=n.length;r<i;r++)n[r](...t)},events:{},on(e,t){return(this.events[e]||=[]).push(t),()=>{this.events[e]=this.events[e]?.filter(e=>t!==e)}}}),Dn=class extends Error{constructor(e){super(e),this.name=`DonationFormError`}},On=class{on(e,t){return this.emitter.on(e,t)}constructor(e){this.instance=new O({generator:()=>d(this,void 0,void 0,function*(){let e=yield this.braintreeManager.instance.get();return yield this.createHostedFields(e)})}),this.emitter=En(),this.braintreeManager=e.braintreeManager,this.hostedFieldClient=e.hostedFieldClient,this.hostedFieldConfig=e.hostedFieldConfig,this.maxRetryCount=e.maxRetryCount??2,this.loadTimeout=(e.loadTimeout??6)*1e3}createHostedFields(e){return d(this,arguments,void 0,function*(e,t=0){this.hostedFieldConfig.hostedFieldContainer.resetHostedFields();try{let t,n=new Promise((e,n)=>{t=window.setTimeout(()=>{n(new Dn(`Timeout loading Hosted Fields`))},this.loadTimeout)}),r=new Promise((n,r)=>d(this,void 0,void 0,function*(){try{let r=yield this.hostedFieldClient.create({client:e,styles:this.hostedFieldConfig.hostedFieldStyle,fields:this.hostedFieldConfig.hostedFieldFieldOptions});window.clearTimeout(t),n(r)}catch(e){e instanceof Error&&e.message.includes(`Hosted Fields timed out`)||r(e)}}));return yield Promise.race([n,r])}catch(n){if(t>=this.maxRetryCount)throw this.emitter.emit(`hostedFieldsFailed`,n),n;let r=t+1;return this.emitter.emit(`hostedFieldsRetry`,r),this.createHostedFields(e,r)}})}tokenizeHostedFields(){return d(this,void 0,void 0,function*(){return(yield this.instance.get())?.tokenize()})}markFieldErrors(e){this.hostedFieldConfig.hostedFieldContainer.markFieldErrors(e)}removeFieldErrors(e){this.hostedFieldConfig.hostedFieldContainer.removeFieldErrors(e)}showErrorMessage(e){this.hostedFieldConfig.hostedFieldContainer.showErrorMessage(e)}hideErrorMessage(){this.hostedFieldConfig.hostedFieldContainer.hideErrorMessage()}},kn=class{constructor(e){this.session=e.session,this.donationInfo=e.donationInfo,this.applePayInstance=e.applePayInstance,this.braintreeManager=e.braintreeManager}onvalidatemerchant(e){return d(this,void 0,void 0,function*(){return new Promise((t,n)=>{this.applePayInstance.performValidation({validationURL:e.validationURL,displayName:`Internet Archive`},(e,r)=>{var i;e?((i=this.delegate)==null||i.paymentFailed(e),this.session.abort(),n(`Merchant validation error: ${e}`)):(this.session.completeMerchantValidation(r),t())})})})}oncancel(){return d(this,void 0,void 0,function*(){var e;(e=this.delegate)==null||e.paymentCancelled()})}onpaymentauthorized(e){return d(this,void 0,void 0,function*(){var t,n,r,i;let a;try{a=yield this.applePayInstance.tokenize({token:e.payment.token})}catch(e){(t=this.delegate)==null||t.paymentFailed(e),this.session.completePayment(ApplePaySession.STATUS_FAILURE);return}let o=e.payment,s=o.billingContact,c=o.shippingContact,l=s?.addressLines,u,d;l&&(u=l[0],d=l[1]);let f=new mn({streetAddress:u,extendedAddress:d,locality:s?.locality,region:s?.administrativeArea,postalCode:s?.postalCode,countryCodeAlpha2:s?.countryCode}),ee=new hn({email:c?.emailAddress,firstName:c?.givenName,lastName:c?.familyName});try{let e=yield this.braintreeManager.submitDonation({nonce:a.nonce,paymentProvider:k.ApplePay,donationInfo:this.donationInfo,billingInfo:f,customerInfo:ee});e.success?((n=this.delegate)==null||n.paymentComplete(e),this.session.completePayment(ApplePaySession.STATUS_SUCCESS)):((r=this.delegate)==null||r.paymentFailed(`Failure submitting data`),this.session.completePayment(ApplePaySession.STATUS_FAILURE))}catch(e){(i=this.delegate)==null||i.paymentFailed(e),this.session.completePayment(ApplePaySession.STATUS_FAILURE)}})}},An=class{constructor(e){this.braintreeManager=e.braintreeManager,this.applePayClient=e.applePayClient,this.applePaySessionManager=e.applePaySessionManager,this.instance=e.instancePromisedSingleton??new O({generator:()=>d(this,void 0,void 0,function*(){if(!this.applePaySessionManager.canMakePayments())return;let e=yield this.braintreeManager.instance.get();return yield this.applePayClient.create({client:e})})})}isAvailable(){return d(this,void 0,void 0,function*(){try{return!!(yield this.instance.get())}catch{return!1}})}createPaymentRequest(e,t){return d(this,void 0,void 0,function*(){let e=yield this.instance.get(),n=`Internet Archive Monthly`;t.donationType===j.OneTime&&(n=`Internet Archive`);let r=e.createPaymentRequest({total:{label:n,amount:t.total},requiredBillingContactFields:[`postalAddress`],requiredShippingContactFields:[`name`,`email`]}),i=this.applePaySessionManager.createNewPaymentSession(r),a=new kn({donationInfo:t,session:i,applePayInstance:e,braintreeManager:this.braintreeManager});return i.onvalidatemerchant=a.onvalidatemerchant.bind(a),i.onpaymentauthorized=a.onpaymentauthorized.bind(a),i.oncancel=a.oncancel.bind(a),i.begin(),a})}},jn=class{constructor(e){this.braintreeManager=e.braintreeManager,this.venmoClient=e.venmoClient,this.venmoProfileId=e.venmoProfileId,this.instance=e.instancePromisedSingleton??new O({generator:()=>this.braintreeManager.instance.get().then(e=>this.venmoClient.create({client:e,profileId:this.venmoProfileId}))})}isBrowserSupported(){return d(this,void 0,void 0,function*(){return this.isMobileFirefox()?!1:(yield this.instance.get())?.isBrowserSupported()??!1})}startPayment(){return d(this,void 0,void 0,function*(){return(yield this.instance.get())?.tokenize()})}isMobileFirefox(){let e=navigator.userAgent.indexOf(`FxiOS`)!==-1,t=navigator.userAgent.indexOf(`Firefox`)!==-1,n=navigator.userAgent.indexOf(`Mobile`)!==-1;return(t||e)&&n}},Mn=class{constructor(e){this.donationInfo=e.donationInfo,this.paypalInstance=e.paypalInstance}payment(){return d(this,void 0,void 0,function*(){var e;let t=this.donationInfo.donationType===j.OneTime?`checkout`:`vault`,n={flow:t,intent:`capture`};return n.enableShippingAddress=!0,t===`checkout`?(n.amount=this.donationInfo.total,n.currency=`USD`):n.billingAgreementDescription=`Subscribe to donate ${(0,E.default)(this.donationInfo.total,{symbol:`$`}).format()} monthly`,(e=this.delegate)==null||e.payPalPaymentStarted(this,n),this.paypalInstance.createPayment(n)})}onAuthorize(e){return d(this,void 0,void 0,function*(){var t;let n=yield this.paypalInstance.tokenizePayment(e);return(t=this.delegate)==null||t.payPalPaymentAuthorized(this,n),n})}onConfirm(e){return d(this,void 0,void 0,function*(){var t;let n=yield this.paypalInstance.tokenizePayment(e);return(t=this.delegate)==null||t.payPalPaymentConfirmed(this,n),n})}onCancel(e){var t;(t=this.delegate)==null||t.payPalPaymentCancelled(this,e)}onError(e){var t;console.error(`PayPal error`,e),(t=this.delegate)==null||t.payPalPaymentError(this,e)}},Nn=class{constructor(e){this.braintreeManager=e.braintreeManager,this.paypalClient=e.paypalClient,this.paypalButtonGenerator=e.paypalButton,this.hostingEnvironment=e.hostingEnvironment,this.instance=new O({generator:()=>this.braintreeManager.instance.get().then(e=>this.paypalClient.create({client:e}))})}renderPayPalButton(e){return d(this,void 0,void 0,function*(){let t=this.hostingEnvironment===T.Development?`sandbox`:`production`,n=yield this.instance.get();if(!n)return;let r=new Mn({donationInfo:e.donationInfo,paypalInstance:n});return this.paypalButtonGenerator.render({env:t,style:e.style,payment:r.payment.bind(r),onAuthorize:r.onAuthorize.bind(r),onCancel:r.onCancel.bind(r),onError:r.onError.bind(r),funding:{disallowed:[paypal.FUNDING.VENMO]}},e.selector),r})}},Pn=class e{canMakePayments(){return`ApplePaySession`in window&&ApplePaySession.supportsVersion(e.VERSION)&&ApplePaySession.canMakePayments()}createNewPaymentSession(t){return new ApplePaySession(e.VERSION,t)}};Pn.VERSION=3;var Fn=class{isBrowserSupported(){return d(this,void 0,void 0,function*(){return this.paymentsClient.isReadyToPay({apiVersion:2,apiVersionMinor:0,allowedPaymentMethods:[{type:`CARD`,parameters:{allowedAuthMethods:[`PAN_ONLY`],allowedCardNetworks:[`AMEX`,`DISCOVER`,`INTERAC`,`JCB`,`MASTERCARD`,`VISA`]}}],existingPaymentMethodRequired:!1}).then(e=>e.result)})}constructor(e){this.braintreeManager=e.braintreeManager,this.googlePayMerchantId=e.googlePayMerchantId,this.googlePayBraintreeClient=e.googlePayBraintreeClient,this.paymentsClient=e.googlePaymentsClient,this.instance=new O({generator:()=>this.braintreeManager.instance.get().then(e=>this.googlePayBraintreeClient.create({client:e,googlePayVersion:2,googleMerchantId:this.googlePayMerchantId}))})}},In=class{on(e,t){return this.emitter.on(e,t)}constructor(e){this.creditCardHandler=new O({generator:()=>d(this,void 0,void 0,function*(){let e=yield this.paymentClients.hostedFields.get(),t=new On({braintreeManager:this.braintreeManager,hostedFieldClient:e,hostedFieldConfig:this.hostedFieldConfig});return t.on(`hostedFieldsRetry`,e=>{this.emitter.emit(`hostedFieldsRetry`,e)}),t.on(`hostedFieldsFailed`,e=>{this.emitter.emit(`hostedFieldsFailed`,e)}),t})}),this.applePayHandler=new O({generator:()=>d(this,void 0,void 0,function*(){let e=yield this.paymentClients.applePay.get(),t=new Pn;return new An({braintreeManager:this.braintreeManager,applePayClient:e,applePaySessionManager:t})})}),this.venmoHandler=new O({generator:()=>d(this,void 0,void 0,function*(){let e=yield this.paymentClients.venmo.get();if(this.venmoProfileId)return new jn({braintreeManager:this.braintreeManager,venmoClient:e,venmoProfileId:this.venmoProfileId})})}),this.paypalHandler=new O({generator:()=>d(this,void 0,void 0,function*(){let e=this.paymentClients.paypalLibrary.get(),t=this.paymentClients.payPal.get(),n=yield Promise.all([t,e]);return new Nn({braintreeManager:this.braintreeManager,paypalClient:n[0],paypalButton:n[1].Button,hostingEnvironment:this.hostingEnvironment})})}),this.googlePayHandler=new O({generator:()=>d(this,void 0,void 0,function*(){let e=this.paymentClients.googlePaymentsClient.get(),t=this.paymentClients.googlePayBraintreeClient.get(),n=yield Promise.all([t,e]);return new Fn({braintreeManager:this.braintreeManager,googlePayMerchantId:this.googlePayMerchantId,googlePayBraintreeClient:n[0],googlePaymentsClient:n[1]})})}),this.hostingEnvironment=T.Development,this.emitter=En(),this.braintreeManager=e.braintreeManager,this.venmoProfileId=e.venmoProfileId,this.googlePayMerchantId=e.googlePayMerchantId,this.paymentClients=e.paymentClients,this.hostingEnvironment=e.hostingEnvironment,this.hostedFieldConfig=e.hostedFieldConfig}},Ln=class{on(e,t){return this.emitter.on(e,t)}startup(){return d(this,void 0,void 0,function*(){return this.collectDeviceData()})}submitDonation(e){return d(this,void 0,void 0,function*(){let t=new _n;t.fee_amount_covered=e.donationInfo.feeAmountCovered,t.logged_in_user=this.loggedInUser,t.referrer=this.referrer,t.origin=this.origin;let n=A.calculateTotal(e.donationInfo.amount,e.donationInfo.coverFees),r=new vn({deviceData:this.deviceData,paymentProvider:e.paymentProvider,paymentMethodNonce:e.nonce,amount:n,donationType:e.donationInfo.donationType,customer:e.customerInfo,billing:e.billingInfo,customFields:t,upsellOnetimeTransactionId:e.upsellOnetimeTransactionId,customerId:e.customerId,recaptchaToken:e.recaptchaToken,bin:e.bin,binName:e.binName});return new Cn(yield this.endpointManager.submitData(r))})}submitUpsellDonation(e){return d(this,void 0,void 0,function*(){let t=e.oneTimeDonationResponse,n=new A({amount:e.amount,donationType:j.Upsell,coverFees:!1});return this.submitDonation({nonce:t.paymentMethodNonce,paymentProvider:t.paymentProvider,customerId:t.customer_id,donationInfo:n,customerInfo:t.customer,billingInfo:t.billing,upsellOnetimeTransactionId:t.transaction_id})})}donationSuccessful(e){this.endpointManager.donationSuccessful(e)}collectDeviceData(){return d(this,void 0,void 0,function*(){if(this.deviceDataCollectionStarted)return;this.deviceDataCollectionStarted=!0;let e=yield this.instance.get();if(e)return this.paymentClients.dataCollector.get().then(t=>t?.create({client:e,kount:!1,paypal:!0})).then(e=>{this.deviceData=e?.deviceData})})}constructor(e){this.emitter=En(),this.instance=new O({generator:()=>d(this,void 0,void 0,function*(){return(yield this.paymentClients.braintreeClient.get())?.create({authorization:this.authorizationToken})})}),this.deviceDataCollectionStarted=!1,this.hostingEnvironment=T.Development,this.authorizationToken=e.authorizationToken,this.endpointManager=e.endpointManager,this.hostingEnvironment=e.hostingEnvironment,this.paymentClients=e.paymentClients,this.referrer=e.referrer,this.loggedInUser=e.loggedInUser,this.origin=e.origin,this.paymentProviders=new In({braintreeManager:this,paymentClients:this.paymentClients,venmoProfileId:e.venmoProfileId,googlePayMerchantId:e.googlePayMerchantId,hostingEnvironment:e.hostingEnvironment,hostedFieldConfig:e.hostedFieldConfig}),this.paymentProviders.on(`hostedFieldsRetry`,e=>{this.emitter.emit(`paymentProvidersHostedFieldsRetry`,e)}),this.paymentProviders.on(`hostedFieldsFailed`,e=>{this.emitter.emit(`paymentProvidersHostedFieldsFailed`,e)})}setReferrer(e){this.referrer=e}setLoggedInUser(e){this.loggedInUser=e}setOrigin(e){this.origin=e}},M;(function(e){e.Number=`number`,e.CVV=`cvv`,e.ExpirationDate=`expirationDate`})(M||={});var Rn=class{fieldFor(e){switch(e){case M.Number:return this.number;case M.CVV:return this.cvv;case M.ExpirationDate:return this.expirationDate}}markFieldErrors(e){e.forEach(e=>{let t=this.fieldFor(e);t.parentElement.error=!0})}removeFieldErrors(e){e.forEach(e=>{let t=this.fieldFor(e);t.parentElement.error=!1})}showErrorMessage(e){let t=e??`Some payment information below is missing or incorrect.`;this.errorContainer.innerHTML=t,this.errorContainer.style.display=`block`}hideErrorMessage(){this.errorContainer.style.display=`none`}resetHostedFields(){[this.number,this.cvv,this.expirationDate].forEach(e=>{for(;e.firstChild;)e.firstChild.remove()})}constructor(e){this.number=e.number,this.cvv=e.cvv,this.expirationDate=e.expirationDate,this.errorContainer=e.errorContainer}},zn=class{constructor(e){this.started=!1,this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager,this.recaptchaManager=e.recaptchaManager,this.emitter=En()}on(e,t){return this.emitter.on(e,t)}startup(){return d(this,void 0,void 0,function*(){if(this.started)return;this.started=!0;let e=yield this.braintreeManager?.paymentProviders.creditCardHandler.get(),t=yield e?.instance.get();t?.on(`focus`,t=>{let{emittedBy:n,fields:r}=t,{container:i}=r[n];i.parentElement.error=!1,e.hideErrorMessage()}),t?.on(`blur`,e=>{let{emittedBy:t,fields:n}=e,{container:r,isEmpty:i,isValid:a}=n[t];(i||!a)&&(r.parentElement.error=!0)}),t?.on(`validityChange`,e=>{let{fields:t}=e,n=t.cvv.isValid&&t.expirationDate.isValid&&t.number.isValid;this.emitter.emit(`validityChanged`,n)})})}tokenizeFields(){return d(this,void 0,void 0,function*(){let e,t=yield this.braintreeManager.paymentProviders.creditCardHandler.get();try{e=yield t?.tokenizeHostedFields()}catch(e){this.handleHostedFieldTokenizationError(e);return}return e})}paymentInitiated(e,t,n){return d(this,void 0,void 0,function*(){let r;try{r=yield this.recaptchaManager.execute()}catch{this.donationFlowModalManager.showErrorModal({message:`Recaptcha failure`});return}this.donationFlowModalManager.startDonationSubmissionFlow({nonce:e.nonce,paymentProvider:k.CreditCard,recaptchaToken:r,bin:e.details.bin,donationInfo:t,customerInfo:n.customer,billingInfo:n.billing})})}handleHostedFieldTokenizationError(e){return d(this,void 0,void 0,function*(){let t=yield this.braintreeManager.paymentProviders.creditCardHandler.get();switch(t.showErrorMessage(),e.code){case`HOSTED_FIELDS_FIELDS_EMPTY`:t.markFieldErrors([M.Number,M.CVV,M.ExpirationDate]);break;case`HOSTED_FIELDS_FIELDS_INVALID`:Object.keys(e.details.invalidFields).forEach(e=>{t.markFieldErrors([e])});break;case`HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE`:break;case`HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED`:t.markFieldErrors([M.CVV]);break;case`HOSTED_FIELDS_FAILED_TOKENIZATION`:break;case`HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR`:break;default:break}})}},Bn=class{keydown(e){let t=e.key;if(e.metaKey)return;switch(t){case`Tab`:case`Delete`:case`Backspace`:case`ArrowLeft`:case`ArrowRight`:case`ArrowUp`:case`ArrowDown`:return}let n=e.target,r=n.value;`${r.slice(0,n.selectionStart??0)}${t}${r.slice(n.selectionEnd??0)}`.match(/^[0-9]+(\.[0-9]{0,2})?$/g)||e.preventDefault()}},Vn;(function(e){e.YesButton=`YesButton`,e.PayPalUpsellSlot=`PayPalUpsellSlot`})(Vn||={});var Hn=class extends x{constructor(){super(...arguments),this.yesButtonMode=Vn.YesButton,this.amount=5,this.currencyValidator=new Bn}render(){return y`
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
        <div class="error ${this.error?``:`hidden`}">${this.error}</div>
      </div>

      ${this.yesButton}
    `}get yesButton(){switch(this.yesButtonMode){case Vn.YesButton:return y`
          <button
            class="cta-button"
            tabindex="0"
            id="yes-button"
            @click=${this.yesSelected}
            .disabled=${this.error!==void 0}
          >
            YES, I'll donate monthly
          </button>
        `;case Vn.PayPalUpsellSlot:return y`
          <div class="paypal-upsell-slot-container">
            <div class="paypal-upsell-slot-blocker ${this.error?``:`hidden`}"></div>
            <button class="cta-button" id="paypal-cover-button">YES, I'll donate monthly</button>
            <slot class="paypal-upsell-slot"></slot>
          </div>
        `}}amountChanged(e){let t=e.target.value;t.length!==0&&this.handleCustomAmountInput(t)}handleCustomAmountInput(e){let t=parseFloat(e);isNaN(t)?this.error=y` Please enter a valid amount. `:this.processAmount(t)}processAmount(e){if(e>=1e4){this.error=y`
        To make a donation of $10,000 or more, please contact our philanthropy department at
        <a href="mailto:donations@archive.org">donations@archive.org</a>
      `;return}if(e<1){this.amountInput&&this.amountInput.value.length>0&&(this.error=y` The minimum donation amount is $1. `);return}this.error=void 0,this.amount=e;let t=new CustomEvent(`amountChanged`,{detail:{amount:this.amount}});this.dispatchEvent(t)}yesSelected(){let e=new CustomEvent(`yesSelected`,{detail:{amount:this.amount}});this.dispatchEvent(e)}noThanksSelected(){this.dispatchEvent(new Event(`noThanksSelected`))}static get styles(){let e=g`var(--upsellCTAButtonColor, #194880)`,t=g`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`;return g`
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
        transform: translate(${g`var(--upsellAmountInputOffset, -1rem)`}, 0); /* translate slightly to center the input */
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
    `}};u([C({type:String})],Hn.prototype,`yesButtonMode`,void 0),u([C({type:Number})],Hn.prototype,`amount`,void 0),u([C({type:Object})],Hn.prototype,`error`,void 0),u([w(`#amount-input`)],Hn.prototype,`amountInput`,void 0),Hn=u([S(`upsell-modal-content`)],Hn);var Un=class{constructor(e){this.title=e?.title,this.subtitle=e?.subtitle,this.headline=e?.headline,this.message=e?.message,this.headerColor=e?.headerColor??`#55A183`,this.bodyColor=e?.bodyColor??`#f5f5f7`,this.showProcessingIndicator=e?.showProcessingIndicator??!1,this.processingImageMode=e?.processingImageMode??`complete`,this.showCloseButton=e?.showCloseButton??!0,this.showHeaderLogo=e?.showHeaderLogo??!0,this.closeOnBackdropClick=e?.closeOnBackdropClick??!0}};function*Wn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Wn(e.shadowRoot.activeElement)))}function Gn(){return[...Wn()].pop()}var Kn=new WeakMap;function qn(e){let t=Kn.get(e);return t||(t=window.getComputedStyle(e,null),Kn.set(e,t)),t}function Jn(e){if(`checkVisibility`in e&&typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=qn(e);return t.visibility!==`hidden`&&t.display!==`none`}function Yn(e){let{overflowY:t,overflowX:n}=qn(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Xn(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));return e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`)||t===`input`&&e.getAttribute(`type`)===`radio`&&!e.hasAttribute(`checked`)||!Jn(e)?!1:(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:Yn(e)}function Zn(e,t){return e.getRootNode({composed:!0})?.host!==t}function Qn(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&Xn(i)&&n.push(i),i instanceof HTMLSlotElement&&Zn(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of Array.from(i.children))r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var $n=[],er=class{constructor(e){this.isExternalActivated=!1,this.tabDirection=`forward`,this.currentFocus=null,this.previousFocus=null,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let n=Gn();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection=`backward`:this.tabDirection=`forward`;let r=Qn(this.element),i=r.findIndex(e=>e===n);this.previousFocus=this.currentFocus;let a=this.tabDirection===`forward`?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(t=this.currentFocus)==null||t.focus({preventScroll:!1});let o=[...Wn()];if(o.includes(this.currentFocus)||!o.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){$n.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){$n=$n.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return $n[$n.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=Qn(this.element);if(!this.element.matches(`:focus-within`)){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}},tr;(function(e){e.processing=`processing`,e.complete=`complete`})(tr||={});var nr=class extends x{constructor(){super(...arguments),this.mode=`processing`}render(){return y`
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
    `}static get styles(){let e=g`var(--activityIndicatorCheckmarkColor, #31A481)`;return g`
      #completed-ring {
        fill: ${g`var(--activityIndicatorCompletedRingColor, #31A481)`};
      }

      #check {
        fill: ${e};
      }

      #activity-ring {
        fill: ${g`var(--activityIndicatorLoadingRingColor, #333333)`};
      }

      #activity-dots {
        fill: ${g`var(--activityIndicatorLoadingDotColor, #333333)`};
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
    `}};u([C({type:String})],nr.prototype,`mode`,void 0),nr=u([S(`ia-activity-indicator`)],nr);var rr=y`
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
`,ir=class extends x{static get styles(){return g`
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
    `}render(){return rr}};customElements.define(`ia-icon-close`,ir);var ar=y`
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
`,or=class extends x{constructor(){super(...arguments),this.config=new Un}render(){return y`
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton?this.closeButtonTemplate:``}
            ${this.config.showHeaderLogo?y`<div class="logo-icon">${ar}</div>`:b}
            ${this.config.title?y`<h1 class="title">${this.config.title}</h1>`:``}
            ${this.config.subtitle?y`<h2 class="subtitle">${this.config.subtitle}</h2>`:``}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator?``:`hidden`}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline?y` <h1 class="headline">${this.config.headline}</h1> `:``}
              ${this.config.message?y` <p class="message">${this.config.message}</p> `:``}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `}handleCloseButton(e){if(e.preventDefault(),e.type===`keydown`&&e.key!==` `&&e.key!==`Enter`)return;let t=new Event(`closeButtonPressed`);this.dispatchEvent(t)}get closeButtonTemplate(){return y`
      <button
        type="button"
        class="close-button"
        @click=${this.handleCloseButton}
        @keydown=${this.handleCloseButton}
      >
        <ia-icon-close></ia-icon-close>
      </button>
    `}static get styles(){let e=g`var(--modalLogoSize, 6.5rem)`,t=g`var(--processingImageSize, 7.5rem)`,n=g`var(--modalCornerRadius, 1rem)`,r=g`var(--modalBorder, 2px solid black)`,i=g`var(--modalBottomMargin, 2.5rem)`,a=g`var(--modalTopMargin, 5rem)`,o=g`var(--modalHeaderBottomPadding, 0.5em)`,s=g`var(--modalBottomPadding, 2rem)`,c=g`var(--modalScrollOffset, 5px)`,l=g`var(--modalTitleFontSize, 1.8rem)`,u=g`var(--modalSubtitleFontSize, 1.4rem)`,d=g`var(--modalHeadlineFontSize, 1.6rem)`,f=g`var(--modalMessageFontSize, 1.4rem)`;return g`
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
        margin-top: ${a};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${n}) calc(${n}) 0 0;
        border: ${r};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${o};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${l};
        font-weight: bold;
        line-height: ${g`var(--modalTitleLineHeight, normal)`};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${u};
        line-height: ${g`var(--modalSubtitleLineHeight, normal)`};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${n}) calc(${n});
        border: ${r};
        border-top: 0;
        padding: 0 1rem calc(${s} - ${c}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${i}));
        min-height: 5rem;
        padding: 0 0 calc(${c}) 0;
      }

      .headline {
        font-size: ${d};
        font-weight: bold;
        text-align: center;
        line-height: ${g`var(--modalHeadlineLineHeight, normal)`};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${f};
        line-height: ${g`var(--modalMessageLineHeight, normal)`};
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
    `}};u([C({type:Object})],or.prototype,`config`,void 0),or=u([S(`modal-template`)],or);function sr(e,t,n){var r=n||{},i=r.noTrailing,a=i===void 0?!1:i,o=r.noLeading,s=o===void 0?!1:o,c=r.debounceMode,l=c===void 0?void 0:c,u,d=!1,f=0;function ee(){u&&clearTimeout(u)}function te(e){var t=(e||{}).upcomingOnly,n=t===void 0?!1:t;ee(),d=!n}function ne(){var n=[...arguments],r=this,i=Date.now()-f;if(d)return;function o(){f=Date.now(),t.apply(r,n)}function c(){u=void 0}!s&&l&&!u&&o(),ee(),l===void 0&&i>e?s?(f=Date.now(),a||(u=setTimeout(l?c:o,e))):o():a!==!0&&(u=setTimeout(l?c:o,l===void 0?e-i:e))}return ne.cancel=te,ne}var cr;(function(e){e.Open=`open`,e.Closed=`closed`})(cr||={});var lr=class{constructor(e){this.windowResizeThrottler=sr(100,this.updateModalContainerHeight,{noLeading:!1,noTrailing:!1}).bind(this),this.modalManager=e}handleModeChange(e){switch(e){case cr.Open:this.startResizeListener(),this.stopDocumentScroll();break;case cr.Closed:this.stopResizeListener(),this.resumeDocumentScroll();break}}updateModalContainerHeight(){this.modalManager.style.setProperty(`--containerHeight`,`${window.innerHeight}px`)}stopDocumentScroll(){document.body.classList.add(`modal-manager-open`)}resumeDocumentScroll(){document.body.classList.remove(`modal-manager-open`)}startResizeListener(){window.addEventListener(`resize`,this.windowResizeThrottler)}stopResizeListener(){window.removeEventListener(`resize`,this.windowResizeThrottler)}},ur=class extends x{constructor(){super(...arguments),this.mode=cr.Closed,this.hostBridge=new lr(this),this.modal=new er(this),this.closeOnBackdropClick=!0}firstUpdated(){return d(this,void 0,void 0,function*(){yield new Promise(e=>setTimeout(e,0)),this.closeOnBackdropClick&&this.addEventListener(`keydown`,e=>{e.key===`Escape`&&this.backdropClicked()})})}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate()}render(){return y`
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="-1"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `}getMode(){return this.mode}closeModal(){this.mode=cr.Closed,this.customModalContent=void 0,this.modalTemplate.config=new Un,this.modal.deactivate()}callUserClosedModalCallback(){let e=this.userClosedModalCallback;this.userClosedModalCallback=void 0,e&&e()}showModal(e){return d(this,void 0,void 0,function*(){this.closeOnBackdropClick=e.config.closeOnBackdropClick,this.userClosedModalCallback=e.userClosedModalCallback,this.modalTemplate.config=e.config,this.customModalContent=e.customModalContent,this.mode=cr.Open,yield this.modalTemplate.updateComplete,this.modalTemplate.focus(),this.modal.activate()})}updated(e){e.has(`mode`)&&this.handleModeChange()}backdropClicked(){this.closeOnBackdropClick&&(this.closeModal(),this.callUserClosedModalCallback())}handleModeChange(){this.hostBridge.handleModeChange(this.mode),this.emitModeChangeEvent()}emitModeChangeEvent(){let e=new CustomEvent(`modeChanged`,{detail:{mode:this.mode}});this.dispatchEvent(e)}closeButtonPressed(){this.closeModal(),this.callUserClosedModalCallback()}static get styles(){let e=g`var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`,t=g`var(--modalBackdropZindex, 1000)`,n=g`var(--modalWidth, 32rem)`,r=g`var(--modalMaxWidth, 95%)`;return g`
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
        z-index: ${g`var(--modalZindex, 2000)`};
        width: ${n};
        max-width: ${r};
      }
    `}};u([C({type:String,reflect:!0})],ur.prototype,`mode`,void 0),u([C({type:Object})],ur.prototype,`customModalContent`,void 0),u([C({type:Object})],ur.prototype,`hostBridge`,void 0),u([w(`modal-template`)],ur.prototype,`modalTemplate`,void 0),ur=u([S(`modal-manager`)],ur);var N=class extends x{constructor(){super(...arguments),this.amount=5,this.currencyType=`$`,this.donationType=j.OneTime,this.confirmDonation=()=>{},this.cancelDonation=()=>{}}get confirmationText(){let e=(0,E.default)(this.amount,{symbol:this.currencySymbol}).format();return y`
      <p>
        You are about to make a <b>${this.donationType}</b> donation of
        <b>${e} ${this.currencyType}</b> to the Internet Archive.
      </p>
    `}get confirmUpsellText(){return y`<p>
      You are about to begin making <b>monthly</b> donations of
      <b>${(0,E.default)(this.amount,{symbol:this.currencySymbol}).format()} ${this.currencyType}</b> to the Internet Archive. (Your first recurring
      contribution will be next month.)
    </p>`}confirm(){this===null||this===void 0||this.confirmDonation()}cancel(){this===null||this===void 0||this.cancelDonation()}get confirmCTA(){return this.donationType===j.Upsell?`Start monthly donation`:`Complete donation`}render(){return y`
      ${this.donationType===j.Upsell?this.confirmUpsellText:this.confirmationText}

      <div class="cta-group">
        <button id="confirm" @click=${()=>this.confirm()}>${this.confirmCTA}</button>
        <button id="cancel" @click=${()=>this.cancel()}>Cancel</button>
      </div>
    `}static get styles(){return g`
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
        background-color: ${g`var(--upsellCTAButtonColor, #194880)`};
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
        background-color: ${g`var(--upsellCTAButtonDisabledColor, rgba(109,148,201,0.5))`};
        cursor: not-allowed;
      }
    }`}get currencySymbol(){switch(this.currencyType){case`AUD`:return`AU$`;case`BRL`:return`R$`;case`CAD`:return`CA$`;case`CHF`:return`Fr`;case`CNY`:return`¥`;case`CZK`:return`Kč`;case`DKK`:return`Kr`;case`EUR`:return`€`;case`GBP`:return`£`;case`HKD`:return`HK$`;case`HUF`:return`Ft`;case`ILS`:return`₪`;case`JPY`:return`¥`;case`MXN`:return`MX$`;case`MYR`:return`RM`;case`NOK`:return`kr`;case`PLN`:return`zł`;case`RUB`:return`₽`;case`SEK`:return`kr`;case`SGD`:return`S$`;case`THB`:return`฿`;case`TYD`:return`NT$`;default:return`$`}}};u([C({type:Number})],N.prototype,`amount`,void 0),u([C({type:String})],N.prototype,`currencyType`,void 0),u([C({type:String})],N.prototype,`donationType`,void 0),u([C({type:Function})],N.prototype,`confirmDonation`,void 0),u([C({type:Function})],N.prototype,`cancelDonation`,void 0),N=u([S(`confirm-donation-modal`)],N);var dr=class extends x{render(){return y`
      <div class="container">
        <a
          href="https://help.archive.org/help/why-is-there-a-problem-processing-my-donation/"
          rel="noopener"
          target="_blank"
        >
          Questions?
        </a>
      </div>
    `}static get styles(){return g`
      .container {
        margin-top: ${g`var(--errorModalQuestionsLinkTopMargin, 1rem)`};
        text-align: center;
      }

      a,
      a:link,
      a:visited {
        color: ${g`var(--errorModalQuestionsLinkFontColor, #333)`};
        font-size: ${g`var(--errorModalQuestionsLinkFontSize, 1.4rem)`};
      }
    `}};dr=u([S(`donation-form-error-modal-content`)],dr);var fr;(function(e){e.Blue=`#497fbf`,e.Green=`#55A183`,e.Red=`#691916`})(fr||={});var pr=class e{constructor(e){this.modalManager=e.modalManager,this.braintreeManager=e.braintreeManager,this.analytics=e.analytics}closeModal(){this.modalManager.closeModal()}showProcessingModal(){let e=new Un({headerColor:fr.Blue,showProcessingIndicator:!0,closeOnBackdropClick:!1,showCloseButton:!1,processingImageMode:`processing`,title:y` Processing... `});this.modalManager.showModal({config:e})}showThankYouModal(e){let t=new Un({showProcessingIndicator:!0,processingImageMode:`complete`,headerColor:fr.Green,title:y` Thank You! `});this.modalManager.showModal({config:t});let n=`Donated-${e.successResponse.paymentProvider.replace(/\s+/g,``)}`;e.upsellSuccessResponse&&(n+=`-upsell`);let r=e.successResponse.donationType;this.analytics.logDonationFlowEvent(n,r),this.braintreeManager.donationSuccessful(e)}showErrorModal(e){let t=new Un({headerColor:fr.Red,title:y` Processing error `,headline:y` There's been a problem completing your donation. `,message:y` ${e?.message} `});this.modalManager.showModal({config:t,userClosedModalCallback:e?.userClosedModalCallback,customModalContent:y`
        <donation-form-error-modal-content></donation-form-error-modal-content>
      `})}showConfirmationStepModal(e){let t=()=>{e?.confirmDonationCB()},n=()=>{e?.cancelDonationCB()},r=e.donationType===j.Upsell?`Confirm monthly donation`:`Complete donation`,i=new Un({closeOnBackdropClick:!1,headerColor:fr.Green,title:y`${r}`,message:y`
        <confirm-donation-modal
          .amount="${e.amount}"
          .currencyType="${e.currencyType}"
          .donationType="${e.donationType}"
          .confirmDonation=${t}
          .cancelDonation=${n}
        ></confirm-donation-modal>
      `});return this.modalManager.showModal({config:i,userClosedModalCallback:n})}showUpsellModal(t){let n=new Un({headerColor:fr.Green,title:y` Donation received `,processingImageMode:`complete`,showProcessingIndicator:!0}),r=e.getDefaultUpsellAmount(t.oneTimeAmount);t.amountChanged&&t.amountChanged(r);let i=y`
      <upsell-modal-content
        .amount=${r}
        .yesButtonMode=${t?.ctaMode??Vn.YesButton}
        @yesSelected=${e=>t?.yesSelected?t.yesSelected(e.detail.amount):void 0}
        @noThanksSelected=${t?.noSelected}
        @amountChanged=${e=>t?.amountChanged?t.amountChanged(e.detail.amount):void 0}
      >
        <slot name="paypal-upsell-button"></slot>
      </upsell-modal-content>
    `;return this.modalManager.showModal({config:n,customModalContent:i,userClosedModalCallback:t?.userClosedModalCallback})}startDonationSubmissionFlow(e){return d(this,void 0,void 0,function*(){this.showProcessingModal();try{let t=yield this.braintreeManager.submitDonation(e);if(t.success)return this.handleSuccessfulDonationResponse(e.donationInfo,t.value),t;{let e=t.value;return this.showErrorModal({message:e.message}),t}}catch(e){this.showErrorModal({message:`${e}`}),console.error(`error getting a response`,e);return}})}upsellModalYesSelected(e,t){return d(this,void 0,void 0,function*(){this.showProcessingModal();try{let n=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:e,amount:t});if(n.success)this.completeUpsell({successResponse:e,upsellSuccessResponse:n.value});else{let e=n.value;this.showErrorModal({message:e.message})}return n}catch(e){this.showErrorModal({message:`${e}`}),console.error(`error getting a response`,e);return}})}completeUpsell(e){this.showThankYouModal(e);let t=`Donated-${e.successResponse.paymentProvider.replace(/\s+/g,``)}-upsell`,n=e.successResponse.donationType;this.analytics.logDonationFlowEvent(t,n),this.braintreeManager.donationSuccessful(e)}static getDefaultUpsellAmount(e){let t=5;return e<=10?t=8:e>10&&e<=25?t=10:e>25&&e<=100?t=25:e>100&&(t=50),t}handleSuccessfulDonationResponse(e,t){switch(e.donationType){case j.OneTime:this.showUpsellModal({oneTimeAmount:t.amount,yesSelected:e=>{this.upsellModalYesSelected(t,e)},noSelected:()=>{this.showThankYouModal({successResponse:t})},userClosedModalCallback:()=>{this.showThankYouModal({successResponse:t})}});break;case j.Monthly:this.showThankYouModal({successResponse:t});break;case j.Upsell:break;default:break}}},mr=class{constructor(e){this.upsellButtonDataSource=e.upsellButtonDataSource,this.oneTimePayload=e.oneTimePayload,this.oneTimeSuccessResponse=e.oneTimeSuccessResponse}},hr=class{updateDonationInfo(e){this.buttonDataSource&&(this.buttonDataSource.donationInfo=e)}updateUpsellDonationInfo(e){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo=e)}constructor(e){this.emitter=En(),this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}on(e,t){return this.emitter.on(e,t)}payPalPaymentStarted(e,t){return d(this,void 0,void 0,function*(){this.emitter.emit(`payPalPaymentStarted`,e,t)})}payPalPaymentAuthorized(e,t){return d(this,void 0,void 0,function*(){let{donationType:n,total:r}=e.donationInfo;this.donationFlowModalManager.showConfirmationStepModal({donationType:n,amount:r,currencyType:`USD`,confirmDonationCB:()=>{this.payPalPaymentConfirmed(e,t)},cancelDonationCB:()=>{this.donationFlowModalManager.closeModal(),this.payPalPaymentCancelled(e,{})}})})}payPalPaymentConfirmed(e,t){return d(this,void 0,void 0,function*(){this.emitter.emit(`payPalPaymentConfirmed`,e,{}),this.donationFlowModalManager.showProcessingModal();let n=e.donationInfo.donationType,r=t?.details,i=new hn({email:r?.email,firstName:r?.firstName,lastName:r?.lastName}),a=r.shippingAddress,o=new mn({streetAddress:a?.line1,extendedAddress:a?.line2,locality:a?.city,region:a?.state,postalCode:a?.postalCode,countryCodeAlpha2:a?.countryCode}),s=this.upsellButtonDataSourceContainer?this.upsellButtonDataSourceContainer.oneTimeSuccessResponse.transaction_id:void 0,c=yield this.braintreeManager.submitDonation({nonce:t.nonce,paymentProvider:k.PayPal,donationInfo:e.donationInfo,customerInfo:i,billingInfo:o,upsellOnetimeTransactionId:s});if(!c.success){let e=c.value;this.donationFlowModalManager.showErrorModal({message:e.message});return}let l=c.value;switch(n){case j.OneTime:this.showUpsellModal(t,l);break;case j.Monthly:this.donationFlowModalManager.showThankYouModal({successResponse:l});break;case j.Upsell:this.upsellButtonDataSourceContainer?this.donationFlowModalManager.showThankYouModal({successResponse:this.upsellButtonDataSourceContainer.oneTimeSuccessResponse,upsellSuccessResponse:l}):this.donationFlowModalManager.showErrorModal({message:`Error setting up monthly donation`});break}})}payPalPaymentCancelled(e,t){return d(this,void 0,void 0,function*(){this.emitter.emit(`payPalPaymentCancelled`,e,t)})}payPalPaymentError(e,t){return d(this,void 0,void 0,function*(){this.emitter.emit(`payPalPaymentError`,e,t),console.error(`PaymentSector:payPalPaymentError error:`,e,e.donationInfo,t)})}renderPayPalButton(e){return d(this,void 0,void 0,function*(){this.buttonDataSource=yield(yield this.braintreeManager?.paymentProviders.paypalHandler.get())?.renderPayPalButton({selector:`#paypal-button`,style:{color:`blue`,label:`paypal`,shape:`rect`,size:`medium`,tagline:!1},donationInfo:e}),this.buttonDataSource&&(this.buttonDataSource.delegate=this)})}showUpsellModal(e,t){return d(this,void 0,void 0,function*(){this.donationFlowModalManager.showUpsellModal({oneTimeAmount:t.amount,amountChanged:this.upsellAmountChanged.bind(this),noSelected:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:t})},ctaMode:Vn.PayPalUpsellSlot,userClosedModalCallback:()=>{this.donationFlowModalManager.showThankYouModal({successResponse:t})}});let n=new A({amount:pr.getDefaultUpsellAmount(t.amount),donationType:j.Upsell,coverFees:!1});this.upsellButtonDataSourceContainer||this.renderUpsellPayPalButton({donationInfo:n,oneTimePayload:e,oneTimeSuccessResponse:t})})}upsellAmountChanged(e){this.upsellButtonDataSourceContainer&&(this.upsellButtonDataSourceContainer.upsellButtonDataSource.donationInfo.amount=e)}renderUpsellPayPalButton(e){return d(this,void 0,void 0,function*(){let t=yield(yield this.braintreeManager?.paymentProviders.paypalHandler.get())?.renderPayPalButton({selector:`#paypal-upsell-button`,style:{color:`blue`,label:`paypal`,shape:`rect`,size:`responsive`,tagline:!1},donationInfo:e.donationInfo});t?(t.delegate=this,this.upsellButtonDataSourceContainer=new mr({upsellButtonDataSource:t,oneTimePayload:e.oneTimePayload,oneTimeSuccessResponse:e.oneTimeSuccessResponse})):console.error(`error rendering paypal upsell button`)})}},gr=class{constructor(e){this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}paymentInitiated(e,t){return d(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal(),this.applePayDataSource=yield(yield this.braintreeManager?.paymentProviders.applePayHandler.get())?.createPaymentRequest(t,e),this.applePayDataSource&&(this.applePayDataSource.delegate=this)})}modalYesSelected(e,t){return d(this,void 0,void 0,function*(){this.donationFlowModalManager.showProcessingModal();let n=yield this.braintreeManager.submitUpsellDonation({oneTimeDonationResponse:e,amount:t});if(n.success)this.donationFlowModalManager.showThankYouModal({successResponse:e,upsellSuccessResponse:n.value});else{let e=n.value;this.donationFlowModalManager.showErrorModal({message:e.message})}})}paymentComplete(e){if(e.success){let t=e.value;this.applePayDataSource?.donationInfo.donationType==j.OneTime?this.donationFlowModalManager.showUpsellModal({oneTimeAmount:t.amount,yesSelected:this.modalYesSelected.bind(this,t),noSelected:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:t}),userClosedModalCallback:this.donationFlowModalManager.showThankYouModal.bind(this.donationFlowModalManager,{successResponse:t})}):this.donationFlowModalManager.showThankYouModal({successResponse:t})}else{let t=e.value;this.donationFlowModalManager.showErrorModal({message:t.message})}}paymentFailed(){this.donationFlowModalManager.showErrorModal({message:`Payment failed`})}paymentCancelled(){this.donationFlowModalManager.closeModal()}},_r=class{constructor(e){this.contactInfo=e.contactInfo,this.donationInfo=e.donationInfo}},vr=class{constructor(e){this.persistanceKey=`venmoRestorationStateInfo`,e?.storageSystem?this.storageSystem=e.storageSystem:this.storageSystemAvailable(localStorage)?this.storageSystem=localStorage:this.storageSystemAvailable(sessionStorage)&&(this.storageSystem=sessionStorage)}clearState(){var e;(e=this.storageSystem)==null||e.removeItem(this.persistanceKey)}persistState(e,t){var n;let r=new _r({contactInfo:e,donationInfo:t}),i=JSON.stringify(r);(n=this.storageSystem)==null||n.setItem(this.persistanceKey,i)}getRestorationState(){return d(this,void 0,void 0,function*(){let e=this.storageSystem?.getItem(this.persistanceKey);if(!e){console.error(`restoreState: No stored data`);return}let t=JSON.parse(e);if(!t){console.error(`restoreState: Data could not be deserialized`);return}return new _r(t)})}storageSystemAvailable(e){try{return e.setItem(`foo`,`bar`),e.removeItem(`foo`),!0}catch{return!1}}},yr=class{constructor(e){this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager,this.restorationStateHandler=e.restorationStateHandler??new vr}startup(){return d(this,void 0,void 0,function*(){if((yield(yield this.braintreeManager.paymentProviders.venmoHandler.get())?.instance.get())?.hasTokenizationResult()){let e=yield this.restorationStateHandler.getRestorationState();e?this.paymentInitiated(e.contactInfo,e.donationInfo):(console.error(`no restoration info`),this.donationFlowModalManager.showErrorModal({message:`Error restoring donation session`}))}})}paymentInitiated(e,t){return d(this,void 0,void 0,function*(){this.restorationStateHandler.persistState(e,t);try{let n=yield(yield this.braintreeManager.paymentProviders.venmoHandler.get())?.startPayment();if(!n){this.restorationStateHandler.clearState(),this.donationFlowModalManager.showErrorModal({message:`Error setting up the donation`});return}this.handleTokenizationResult(n,e,t)}catch(e){this.restorationStateHandler.clearState(),this.handleTokenizationError(e),this.donationFlowModalManager.showErrorModal({message:`There was a problem loading your donation information. Please try again.`})}})}handleTokenizationResult(e,t,n){return d(this,void 0,void 0,function*(){this.restorationStateHandler.clearState(),this.donationFlowModalManager.startDonationSubmissionFlow({nonce:e.nonce,paymentProvider:k.Venmo,donationInfo:n,customerInfo:t.customer,billingInfo:t.billing})})}handleTokenizationError(e){switch(e.code){case`VENMO_APP_CANCELED`:break;case`VENMO_CANCELED`:break;default:console.error(`Error!`,e)}}},br=class{constructor(e){this.emitter=En(),this.braintreeManager=e.braintreeManager,this.donationFlowModalManager=e.donationFlowModalManager}on(e,t){return this.emitter.on(e,t)}paymentInitiated(e){return d(this,void 0,void 0,function*(){let t=yield this.braintreeManager?.paymentProviders.googlePayHandler.get(),n=yield t.instance.get(),r=yield n.createPaymentDataRequest({emailRequired:!0,transactionInfo:{currencyCode:`USD`,totalPriceStatus:`FINAL`,totalPrice:`${e.total}`}}),i=r.allowedPaymentMethods[0];i.parameters.billingAddressRequired=!0,i.parameters.billingAddressParameters={format:`FULL`,phoneNumberRequired:!1};try{let i=yield t.paymentsClient.loadPaymentData(r),a=yield n.parseResponse(i),o=i.paymentMethodData.info?.billingAddress,s=o?.name,c=s,l=``,u=s?.lastIndexOf(` `);u&&u!==-1&&(c=s?.substr(0,u),l=s?.substr(u));let d=new hn({email:i.email,firstName:c,lastName:l}),f=new mn({streetAddress:o?.address1,extendedAddress:o?.address2,locality:o?.locality,region:o?.administrativeArea,postalCode:o?.postalCode,countryCodeAlpha2:o?.countryCode});this.donationFlowModalManager.startDonationSubmissionFlow({nonce:a.nonce,paymentProvider:k.GooglePay,bin:a.details.bin,binName:a.binData.issuingBank,donationInfo:e,customerInfo:d,billingInfo:f})}catch{this.emitter.emit(`paymentCancelled`),this.donationFlowModalManager.closeModal()}})}},xr=class{startup(){return d(this,void 0,void 0,function*(){var e,t;(e=this.venmoHandler)==null||e.startup(),(t=this.creditCardHandler)==null||t.startup()})}showUpsellModal(e){return d(this,void 0,void 0,function*(){return this.donationFlowModalManager.showUpsellModal(e)})}showConfirmationStepModal(e){return this.donationFlowModalManager.showConfirmationStepModal(e)}get creditCardHandler(){return this.creditCardHandlerCache||=new zn({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager,recaptchaManager:this.recaptchaManager}),this.creditCardHandlerCache}get paypalHandler(){return this.paypalHandlerCache||=new hr({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.paypalHandlerCache}get applePayHandler(){return this.applePayHandlerCache||=new gr({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.applePayHandlerCache}get venmoHandler(){return this.venmoHandlerCache||=new yr({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.venmoHandlerCache}get googlePayHandler(){return this.googlePayHandlerCache||=new br({braintreeManager:this.braintreeManager,donationFlowModalManager:this.donationFlowModalManager}),this.googlePayHandlerCache}constructor(e){this.braintreeManager=e.braintreeManager,this.modalManager=e.modalManager,this.recaptchaManager=e.recaptchaManager,this.resources=e.resources,this.donationFlowModalManager=new pr({braintreeManager:this.braintreeManager,modalManager:this.modalManager,analytics:this.resources.analytics})}},Sr=class{constructor(e){this.isExecuting=!1,this.grecaptchaLibrary=e.grecaptchaLibrary,this.siteKey=e.siteKey}execute(){return this.isExecuting&&this.finishExecution(),this.isExecuting=!0,new Promise((e,t)=>{this.executionSuccessBlock=t=>{this.finishExecution(),e(t)},this.executionExpiredBlock=()=>{this.finishExecution(),t(`expired`)},this.executionErrorBlock=()=>{this.finishExecution(),t(`error`)},this.grecaptchaLibrary.execute()})}finishExecution(){this.isExecuting=!1,this.grecaptchaLibrary.reset()}setup(e,t,n,r){this.grecaptchaLibrary.render(e,{callback:this.responseHandler.bind(this),"expired-callback":this.expiredHandler.bind(this),"error-callback":this.errorHandler.bind(this),sitekey:this.siteKey,tabindex:t,theme:n,type:r,size:`invisible`})}responseHandler(e){this.executionSuccessBlock&&=(this.executionSuccessBlock(e),void 0)}expiredHandler(){this.executionExpiredBlock&&=(this.executionExpiredBlock(),void 0)}errorHandler(){this.executionErrorBlock&&=(this.executionErrorBlock(),void 0)}},Cr=class{constructor(e){this.hostedFieldFieldOptions=e.hostedFieldFieldOptions,this.hostedFieldStyle=e.hostedFieldStyle,this.hostedFieldContainer=e.hostedFieldContainer}},wr;(function(e){e.LeaveSpace=`leave-space`,e.CompressSpace=`compress-space`})(wr||={});var P=class extends x{constructor(){super(...arguments),this.error=!1,this.required=!1,this.iconSpaceOption=wr.LeaveSpace,this.requiredIndicatorSpaceOption=wr.LeaveSpace}render(){return y`
      <div class="input-wrapper ${this.errorClass} ${this.iconSpaceOptionClass}">
        <div class="icon-container">${this.icon}</div>
        <div class="required-indicator ${this.requiredIndicatorSpaceOption}">
          ${this.required?y` * `:b}
        </div>

        <slot></slot>
      </div>
    `}get errorClass(){return this.error?`error`:``}get iconSpaceOptionClass(){return this.iconSpaceOption===wr.CompressSpace?`compress-space`:``}static get styles(){let e=g`var(--inputBorder, 1px solid #d9d9d9)`,t=g`var(--badgedInputBorderErrorColor, red)`,n=g`var(--badgedInputIconSize, 1.4rem)`,r=g`var(--badgedInputIconSpacerWidth, 3rem)`,i=g`var(--badgedInputNoIconSpacerWidth, 1rem)`,a=g`var(--badgedInputHeight, 3rem)`,o=g`var(--badgedInputRequiredIndicatorColor, red)`,s=g`var(--badgedInputRequiredIndicatorMargin, 0 0.25rem 0 0)`;return g`
      .input-wrapper {
        border: ${e};
        height: ${a};
        display: flex;
        align-items: center;
      }

      .input-wrapper.error {
        box-shadow: inset 0px 0px 0px 1px ${t};
        border-color: ${t};
      }

      .input-wrapper.compress-space .icon-container {
        width: ${i};
      }

      .icon-container {
        width: ${r};
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .icon-container svg {
        height: ${n};
      }

      .required-indicator {
        color: ${o};
        font-size: ${g`var(--badgedInputRequiredIndicatorFontSize, 2rem)`};
        margin: ${s};
      }

      .required-indicator.leave-space {
        width: 0.5em;
      }
    `}};u([C({type:Boolean})],P.prototype,`error`,void 0),u([C({type:Object})],P.prototype,`icon`,void 0),u([C({type:Boolean})],P.prototype,`required`,void 0),u([C({type:String})],P.prototype,`iconSpaceOption`,void 0),u([C({type:String})],P.prototype,`requiredIndicatorSpaceOption`,void 0),P=u([S(`badged-input`)],P);var Tr=e=>e??h,Er=y`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`,Dr=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="localPinTitleID localePinDescID">
  <title id="localePinTitleID">Locale pin icon</title>
  <desc id="localePinDescID">An illustration of a map pin</desc>
  <path
    d="m6.30188679 0c2.37586647 0 4.30188681 1.92602032 4.30188681 4.30188679 0 1.58391098-1.43396228 4.14994872-4.30188681 7.69811321l-.3127572-.3901988c-2.65941973-3.34669534-3.98912959-5.7826668-3.98912959-7.30791441 0-2.37586647 1.92602032-4.30188679 4.30188679-4.30188679zm0 2.26415094c-1.12541043 0-2.03773585.91232542-2.03773585 2.03773585 0 1.12541044.91232542 2.03773585 2.03773585 2.03773585 1.12541044 0 2.03773585-.91232541 2.03773585-2.03773585 0-1.12541043-.91232541-2.03773585-2.03773585-2.03773585z"
    class="fill-color"
    fill-rule="evenodd"
  />
</svg>
`,Or=y`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="userTitleID userDescID"
>
  <title id="userTitleID">User icon</title>
  <desc id="userDescID">An illustration of a person's head and chest.</desc>
  <path class="fill-color" d="m20.7130435 18.0434783c-3.5658385 0-6.4565218-2.9198821-6.4565218-6.5217392 0-3.60185703 2.8906833-6.5217391 6.4565218-6.5217391s6.4565217 2.91988207 6.4565217 6.5217391c0 3.6018571-2.8906832 6.5217392-6.4565217 6.5217392zm-12.9130435 16.9565217c0-7.9240855 5.7813665-14.3478261 12.9130435-14.3478261s12.9130435 6.4237406 12.9130435 14.3478261z" fill-rule="evenodd"/>
</svg>
`,kr={AF:`Afghanistan`,AX:`Aland Islands`,AL:`Albania`,DZ:`Algeria`,AS:`American Samoa`,AD:`Andorra`,AO:`Angola`,AI:`Anguilla`,AQ:`Antarctica`,AG:`Antigua and Barbuda`,AR:`Argentina`,AM:`Armenia`,AW:`Aruba`,AU:`Australia`,AT:`Austria`,AZ:`Azerbaijan`,BS:`Bahamas`,BH:`Bahrain`,BD:`Bangladesh`,BB:`Barbados`,BY:`Belarus`,BE:`Belgium`,BZ:`Belize`,BJ:`Benin`,BM:`Bermuda`,BT:`Bhutan`,BO:`Bolivia`,BQ:`Bonaire, Saint Eustatius and Saba `,BA:`Bosnia and Herzegovina`,BW:`Botswana`,BV:`Bouvet Island`,BR:`Brazil`,IO:`British Indian Ocean Territory`,VG:`British Virgin Islands`,BN:`Brunei`,BG:`Bulgaria`,BF:`Burkina Faso`,BI:`Burundi`,KH:`Cambodia`,CM:`Cameroon`,CA:`Canada`,CV:`Cape Verde`,KY:`Cayman Islands`,CF:`Central African Republic`,TD:`Chad`,CL:`Chile`,CN:`China`,CX:`Christmas Island`,CC:`Cocos Islands`,CO:`Colombia`,KM:`Comoros`,CK:`Cook Islands`,CR:`Costa Rica`,HR:`Croatia`,CU:`Cuba`,CW:`Curacao`,CY:`Cyprus`,CZ:`Czech Republic`,CD:`Democratic Republic of the Congo`,DK:`Denmark`,DJ:`Djibouti`,DM:`Dominica`,DO:`Dominican Republic`,TL:`East Timor`,EC:`Ecuador`,EG:`Egypt`,SV:`El Salvador`,GQ:`Equatorial Guinea`,ER:`Eritrea`,EE:`Estonia`,ET:`Ethiopia`,FK:`Falkland Islands`,FO:`Faroe Islands`,FJ:`Fiji`,FI:`Finland`,FR:`France`,GF:`French Guiana`,PF:`French Polynesia`,TF:`French Southern Territories`,GA:`Gabon`,GM:`Gambia`,GE:`Georgia`,DE:`Germany`,GH:`Ghana`,GI:`Gibraltar`,GR:`Greece`,GL:`Greenland`,GD:`Grenada`,GP:`Guadeloupe`,GU:`Guam`,GT:`Guatemala`,GG:`Guernsey`,GN:`Guinea`,GW:`Guinea-Bissau`,GY:`Guyana`,HT:`Haiti`,HM:`Heard Island and McDonald Islands`,HN:`Honduras`,HK:`Hong Kong`,HU:`Hungary`,IS:`Iceland`,IN:`India`,ID:`Indonesia`,IR:`Iran`,IQ:`Iraq`,IE:`Ireland`,IM:`Isle of Man`,IL:`Israel`,IT:`Italy`,CI:`Ivory Coast`,JM:`Jamaica`,JP:`Japan`,JE:`Jersey`,JO:`Jordan`,KZ:`Kazakhstan`,KE:`Kenya`,KI:`Kiribati`,XK:`Kosovo`,KW:`Kuwait`,KG:`Kyrgyzstan`,LA:`Laos`,LV:`Latvia`,LB:`Lebanon`,LS:`Lesotho`,LR:`Liberia`,LY:`Libya`,LI:`Liechtenstein`,LT:`Lithuania`,LU:`Luxembourg`,MO:`Macao`,MK:`Macedonia`,MG:`Madagascar`,MW:`Malawi`,MY:`Malaysia`,MV:`Maldives`,ML:`Mali`,MT:`Malta`,MH:`Marshall Islands`,MQ:`Martinique`,MR:`Mauritania`,MU:`Mauritius`,YT:`Mayotte`,MX:`Mexico`,FM:`Micronesia`,MD:`Moldova`,MC:`Monaco`,MN:`Mongolia`,ME:`Montenegro`,MS:`Montserrat`,MA:`Morocco`,MZ:`Mozambique`,MM:`Myanmar`,NA:`Namibia`,NR:`Nauru`,NP:`Nepal`,NL:`Netherlands`,NC:`New Caledonia`,NZ:`New Zealand`,NI:`Nicaragua`,NE:`Niger`,NG:`Nigeria`,NU:`Niue`,NF:`Norfolk Island`,KP:`North Korea`,MP:`Northern Mariana Islands`,NO:`Norway`,OM:`Oman`,PK:`Pakistan`,PW:`Palau`,PS:`Palestinian Territory`,PA:`Panama`,PG:`Papua New Guinea`,PY:`Paraguay`,PE:`Peru`,PH:`Philippines`,PN:`Pitcairn`,PL:`Poland`,PT:`Portugal`,PR:`Puerto Rico`,QA:`Qatar`,CG:`Republic of the Congo`,RE:`Reunion`,RO:`Romania`,RU:`Russia`,RW:`Rwanda`,BL:`Saint Barthelemy`,SH:`Saint Helena`,KN:`Saint Kitts and Nevis`,LC:`Saint Lucia`,MF:`Saint Martin`,PM:`Saint Pierre and Miquelon`,VC:`Saint Vincent and the Grenadines`,WS:`Samoa`,SM:`San Marino`,ST:`Sao Tome and Principe`,SA:`Saudi Arabia`,SN:`Senegal`,RS:`Serbia`,SC:`Seychelles`,SL:`Sierra Leone`,SG:`Singapore`,SX:`Sint Maarten`,SK:`Slovakia`,SI:`Slovenia`,SB:`Solomon Islands`,SO:`Somalia`,ZA:`South Africa`,GS:`South Georgia and the South Sandwich Islands`,KR:`South Korea`,SS:`South Sudan`,ES:`Spain`,LK:`Sri Lanka`,SD:`Sudan`,SR:`Suriname`,SJ:`Svalbard and Jan Mayen`,SZ:`Swaziland`,SE:`Sweden`,CH:`Switzerland`,SY:`Syria`,TW:`Taiwan`,TJ:`Tajikistan`,TZ:`Tanzania`,TH:`Thailand`,TG:`Togo`,TK:`Tokelau`,TO:`Tonga`,TT:`Trinidad and Tobago`,TN:`Tunisia`,TR:`Turkey`,TM:`Turkmenistan`,TC:`Turks and Caicos Islands`,TV:`Tuvalu`,VI:`U.S. Virgin Islands`,UG:`Uganda`,UA:`Ukraine`,AE:`United Arab Emirates`,GB:`United Kingdom`,UM:`United States Minor Outlying Islands`,US:`United States`,UY:`Uruguay`,UZ:`Uzbekistan`,VU:`Vanuatu`,VA:`Vatican`,VE:`Venezuela`,VN:`Vietnam`,WF:`Wallis and Futuna`,EH:`Western Sahara`,YE:`Yemen`,ZM:`Zambia`,ZW:`Zimbabwe`},F=class extends x{constructor(){super(...arguments),this.selectedCountry=`US`,this.donorEmail=``}updated(e){e.has(`donorEmail`)&&(this.emailField.value=this.donorEmail??``)}reportValidity(){let e=[[this.emailField,this.emailBadgedInput],[this.firstNameField,this.firstNameBadgedInput],[this.lastNameField,this.lastNameBadgedInput],[this.regionField,this.regionBadgedInput],[this.localityField,this.localityBadgedInput],[this.streetAddressField,this.streetAddressBadgedInput],[this.postalCodeField,this.postalBadgedInput]],t=!0;return e.forEach(([e,n])=>{let r=e.checkValidity();t&&=r,r||(n.error=!0)}),t?this.errorMessage.innerText=``:this.errorMessage.innerText=`Please enter any missing contact information below`,t}focus(){this.emailField.focus()}render(){return y`
      <div id="donation-contact-form-error-message"></div>
      <form>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-email`,placeholder:`Email`,required:!0,fieldType:`email`,name:`email`,autocomplete:`email`,maxlength:255,icon:Er})}
          </div>
        </fieldset>

        <fieldset>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-first-name`,placeholder:`First name`,name:`fname`,required:!0,maxlength:255,autocomplete:`given-name`,icon:Or})}
          </div>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-last-name`,placeholder:`Last name`,name:`lname`,autocomplete:`family-name`,required:!0,maxlength:255})}
          </div>
        </fieldset>
        <fieldset>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-street-address`,placeholder:`Address Line 1`,required:!0,autocomplete:`address-line1`,icon:Dr,name:`street-address`})}
          </div>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-extended-address`,placeholder:`Address Line 2 (optional)`,autocomplete:`address-line2`,required:!1,name:`extended-address`})}
          </div>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-locality`,placeholder:`City`,autocomplete:`address-level2`,required:!0,name:`locality`})}
          </div>
          <div class="row">
            ${this.generateInput({id:`donation-contact-form-region`,placeholder:`State / Province`,autocomplete:`address-level1`,required:!0,name:`region`})}
            ${this.generateInput({id:`donation-contact-form-postal-code`,placeholder:`Zip / Postal`,autocomplete:`postal-code`,required:!0,name:`postal`,maxlength:9,validationPattern:`[a-zA-Z\\-\\d]+[a-zA-Z\\-\\d\\s]*`,iconSpaceOption:wr.CompressSpace})}
          </div>
          <div class="row">${this.countrySelectorTemplate}</div>
        </fieldset>
      </form>
      ${this.getStyles}
    `}get countrySelectorTemplate(){return y`
      <badged-input>
        <select
          id="donation-contact-form-countryCodeAlpha2"
          @change=${e=>{var t,n,r,i,a,o,s,c;let l=this.selectedCountry;this.selectedCountry=e.target?.value?e.target?.value:l,this.selectedCountry===`US`?((t=this.postalBadgedInput)==null||t.setAttribute(`required`,``),(n=this.postalCodeField)==null||n.setAttribute(`required`,``),(r=this.regionBadgedInput)==null||r.setAttribute(`required`,``),(i=this.regionField)==null||i.setAttribute(`required`,``)):((a=this.postalBadgedInput)==null||a.removeAttribute(`required`),(o=this.postalCodeField)==null||o.removeAttribute(`required`),(s=this.regionBadgedInput)==null||s.removeAttribute(`required`),(c=this.regionField)==null||c.removeAttribute(`required`))}}
        >
          ${Object.keys(kr).map(e=>{let t=kr[e];return y`
              <option value=${e} ?selected=${e===this.selectedCountry}>${t}</option>
            `})}
        </select>
      </badged-input>
    `}createRenderRoot(){return this}inputFocused(e){this.errorMessage.innerText=``;let t=e.target.id,n=this.querySelector(`badged-input.${t}`);n.error=!1}generateInput(e){let t=e.required??!0,n=e.fieldType??`text`,r=e.iconSpaceOption??wr.LeaveSpace;return y`
      <badged-input
        class=${e.id}
        .icon=${e.icon}
        .iconSpaceOption=${r}
        ?required=${e.required}
      >
        <label for=${e.id}>${e.placeholder}</label>
        <input
          type=${n}
          id=${e.id}
          class="donation-contact-form-input"
          name=${e.name}
          aria-label=${e.placeholder}
          placeholder=${e.placeholder}
          maxlength=${Tr(e.maxlength)}
          autocomplete=${e.autocomplete??`on`}
          pattern=${Tr(e.validationPattern)}
          @focus=${this.inputFocused}
          ?required=${t}
        />
      </badged-input>
    `}get donorContactInfo(){return new gn({billing:this.billingInfo,customer:this.contactInfo})}get billingInfo(){return new mn({streetAddress:this.streetAddressField.value,extendedAddress:this.extendedAddressField.value,locality:this.localityField.value,region:this.regionField.value,postalCode:this.postalCodeField.value,countryCodeAlpha2:this.countryCodeAlpha2Field.value})}get contactInfo(){return new hn({email:this.emailField.value,firstName:this.firstNameField.value,lastName:this.lastNameField.value})}get getStyles(){let e=g`var(--badgedInputNoIconSpacerWidth, 3rem)`,t=g`var(--badgedInputIconSpacerWidth, 5rem)`,n=g`var(--fieldSetSpacing, 1rem)`,r=g`var(--fontFamily, "Helvetica Neue", Helvetica, Arial, sans-serif)`,i=g`var(--contactFieldFontSize, 1.6rem)`,a=g`var(--inputFieldFontColor, #333)`,o=g`calc(100% - ${t})`,s=g`calc(100% - ${e})`;return y`
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
          width: ${o};
        }

        contact-form #donation-contact-form-postal-code {
          width: ${s};
        }

        contact-form #donation-contact-form-error-message {
          color: red;
          font-size: 1.4rem;
          margin-bottom: 0.6rem;
        }

        contact-form #donation-contact-form-last-name {
          width: ${s};
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
          width: ${o};
          border: 0;
          outline: 0;
          background: transparent;
          font-weight: bold;
          color: ${a};
          font-size: ${i};
          padding: 0;
          font-family: ${r};
        }

        contact-form .donation-contact-form-input::placeholder {
          color: revert;
        }

        contact-form #donation-contact-form-countryCodeAlpha2 {
          width: calc(100%);
          height: 100%;
          box-sizing: border-box;
          font-weight: bold;
          font-size: ${i};
          font-family: ${r};
          border: 0;
          background: #fff;
        }
      </style>
    `}};u([w(`badged-input.donation-contact-form-email`)],F.prototype,`emailBadgedInput`,void 0),u([w(`#donation-contact-form-email`)],F.prototype,`emailField`,void 0),u([w(`badged-input.donation-contact-form-first-name`)],F.prototype,`firstNameBadgedInput`,void 0),u([w(`#donation-contact-form-first-name`)],F.prototype,`firstNameField`,void 0),u([w(`badged-input.donation-contact-form-last-name`)],F.prototype,`lastNameBadgedInput`,void 0),u([w(`#donation-contact-form-last-name`)],F.prototype,`lastNameField`,void 0),u([w(`badged-input.donation-contact-form-postal-code`)],F.prototype,`postalBadgedInput`,void 0),u([w(`#donation-contact-form-postal-code`)],F.prototype,`postalCodeField`,void 0),u([w(`badged-input.donation-contact-form-street-address`)],F.prototype,`streetAddressBadgedInput`,void 0),u([w(`#donation-contact-form-street-address`)],F.prototype,`streetAddressField`,void 0),u([w(`badged-input.donation-contact-form-extended-address`)],F.prototype,`extendedAddressBadgedInput`,void 0),u([w(`#donation-contact-form-extended-address`)],F.prototype,`extendedAddressField`,void 0),u([w(`badged-input.donation-contact-form-locality`)],F.prototype,`localityBadgedInput`,void 0),u([w(`#donation-contact-form-locality`)],F.prototype,`localityField`,void 0),u([w(`badged-input.donation-contact-form-region`)],F.prototype,`regionBadgedInput`,void 0),u([w(`#donation-contact-form-region`)],F.prototype,`regionField`,void 0),u([w(`#donation-contact-form-countryCodeAlpha2`)],F.prototype,`countryCodeAlpha2Field`,void 0),u([w(`#donation-contact-form-error-message`)],F.prototype,`errorMessage`,void 0),u([w(`form`)],F.prototype,`form`,void 0),u([C({type:String})],F.prototype,`selectedCountry`,void 0),u([C({type:String})],F.prototype,`donorEmail`,void 0),F=u([S(`contact-form`)],F);var Ar=y`
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
`,jr=y`
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
`,Mr=y`
<svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-labelledby="lockTitleID lockDescID">
  <title id="lockTitleID">Lock icon</title>
  <desc id="lockDescID">An illustration of a lock</desc>
  <path
    d="m9.8480234 5.66075891v-2.17912633c-.00688261-.97492716-.37725298-1.79574705-1.11111111-2.46245966s-1.63734389-1.00632179-2.71045726-1.01882754c-1.04529617-.01250574-1.94175593.31459769-2.68937928.9813103-.74762335.66671262-1.13190232 1.4842758-1.15283692 2.45268954v2.22641369c-.04846504.00625288-.10037138.01250575-.15571902.01875862-.05534764.00625288-.09348877.00937931-.11442337.00937931-.35302046.00625288-.59362498.06917241-.72181356.18875862-.12818859.1195862-.19228288.33022987-.19228288.631931v4.73576994c0 .5030957.269999.7546436.80999699.7546436h8.36968211c.2839076 0 .491533-.0597931.6228761-.1793793s.197158-.3082145.1974448-.565885v-4.82057452c0-.25793103-.0640943-.44499615-.1922829-.56119538s-.3340933-.17755555-.6177141-.18406896c-.0415824 0-.102092-.00468965-.1815288-.01406896-.07943676-.00937931-.13306375-.01406897-.16088096-.01406897zm-1.85873446.00937931h-3.92523766c-.01376522-.12583907-.02064783-.21077393-.02064783-.25480458l-.01032391-.97154019c0-.65420686.0034413-.9813103.01032391-.9813103.00688261-.49684289.1919961-.91513405.55534047-1.2548735.36334438-.33973945.81845687-.51273561 1.36533747-.51898848.52623277-.01875862.98492995.13691187 1.37609154.46701147.39116158.3300996.60050759.74044441.62803802 1.23103443.01376522.2076475.02064783.83032946.02064783 1.86804589v.41503446z"
    class="fill-color"
  />
</svg>
`,Nr;(function(e){e.HideBadge=`hidebadge`,e.ShowBadge=`showbadge`,e.HideBadgeLeaveSpacing=`hidebadgeleavespacing`})(Nr||={});var Pr=class extends x{constructor(){super(...arguments),this.sectionBadge=`0`,this.badgeMode=Nr.ShowBadge}render(){return y`
      <div class="container ${this.badgeMode}">
        <div class="badge-container">
          <div class="badge">${this.sectionBadge}</div>
        </div>
        <div class="content-container">
          ${this.headline?y` <div class="title">${this.headline}</div> `:``}
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}static get styles(){let e=g`var(--formSectionBadgeTransition, 0.25s ease-out)`,t=g`var(--formSectionBadgeMargin, 1rem)`,n=g`var(--formSectionBadgeBackgroundColor, #333)`,r=g`var(--formSectionBadgeRadius, 1.2rem)`,i=g`calc(${r} * 2)`,a=g`var(--formSectionBadgeFontSize, 1.8rem)`,o=g`var(--formSectionBadgeFontWeight, bold)`,s=g`var(--formSectionBadgeFontColor, #fff)`,c=g`var(--formSectionTitleFontSize, 1.8rem)`,l=g`var(--formSectionTitleFontWeight, bold)`;return g`
      :host {
        display: block;
        background-color: ${g`var(--formSectionContentBackgroundColor, transparent)`};
        color: ${g`var(--formSectionTextColor, #333)`};
      }
      .container {
        position: relative;
        padding: 0.5rem;
      }

      .content-container {
        position: relative;
        left: calc(${i} + ${t});
        width: calc(100% - (${i} + ${t}));
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
        width: ${i};
      }

      .badge {
        background-color: ${n};
        color: ${s};
        width: ${i};
        height: ${i};
        border-radius: ${r};
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: ${o};
        font-size: ${a};
      }

      .title {
        line-height: ${g`calc(${r} * 2)`};
        margin-bottom: 0.5rem;
        font-size: ${c};
        font-weight: ${l};
      }
    `}};u([C({type:String})],Pr.prototype,`sectionBadge`,void 0),u([C({type:String})],Pr.prototype,`headline`,void 0),u([C({type:String})],Pr.prototype,`badgeMode`,void 0),Pr=u([S(`donation-form-section`)],Pr);var Fr;(function(e){e.HideNumbers=`hidenumbers`,e.ShowNumbers=`shownumbers`})(Fr||={});var I;(function(e){e.DonationType=`donationType`,e.Amount=`amount`})(I||={});var L;(function(e){e.ValidDonationAmount=`valid_donation_amount`,e.InvalidDonationAmount=`invalid_donation_amount`,e.DonationTooHigh=`donation_too_high`,e.DonationTooLow=`donation_too_low`})(L||={});var R;(function(e){e.Button=`button`,e.Checkbox=`checkbox`,e.Hide=`hide`})(R||={});var Ir;(function(e){e.SingleLine=`single-line`,e.MultiLine=`multi-line`})(Ir||={});var z=class extends x{constructor(){super(...arguments),this.donationInfo=Tn,this.stepNumberMode=Fr.ShowNumbers,this.amountOptions=wn,this.amountSelectionLayout=Ir.MultiLine,this.frequencySelectionMode=R.Button,this.customAmountMode=`display`,this.coverFeesCheckboxMode=`display`,this.amountTitleDisplayMode=`default`,this.customAmountSelected=!1,this.currencyValidator=new Bn}render(){let e=this.amountTitleDisplayMode===`default`?`Choose an amount (USD)`:``;return y`
      ${this.frequencySelectionMode===R.Button?this.frequencyButtonsTemplate:b}

      <donation-form-section
        sectionBadge="${this.amountSelectionSectionNumber}"
        headline=${e}
        badgeMode=${this.formSectionNumberMode}
      >
        ${this.amountTitleDisplayMode===`slot`?y`<slot name="edit-donation-amount-title"></slot>`:b}
        <ul class="amount-selector">
          ${this.presetAmountsTemplate}
          ${this.customAmountMode===`display`?y`<li class="custom-amount">${this.customAmountTemplate}</li>`:b}
        </ul>

        <div class="errors">${this.error}</div>

        ${this.coverFeesCheckboxMode===`display`?y` <div class="checkbox-options">
              ${this.coverFeesCheckboxTemplate}
              ${this.frequencySelectionMode===R.Checkbox?this.frequencyCheckboxTemplate:b}
            </div>`:b}
      </donation-form-section>
    `}updated(e){e.has(`customAmountSelected`)&&this.customAmountButton&&(this.customAmountButton.checked=this.customAmountSelected),e.has(`amountOptions`)&&(this.customAmountSelected=!1,this.updateSelectedDonationInfo(),this.setupAmountColumnsLayoutConfig()),e.has(`amountSelectionLayout`)&&this.setupAmountColumnsLayoutConfig(),e.has(`donationInfo`)&&this.updateSelectedDonationInfo(),e.has(`defaultSelectedAmount`)&&this.defaultSelectedAmount!==void 0&&(this.customAmountSelected=!1,this.donationInfo=new A({donationType:this.donationInfo.donationType,amount:this.defaultSelectedAmount,coverFees:this.donationInfo.coverFees}))}get frequencyButtonsTemplate(){return y`
      <donation-form-section
        sectionBadge="1"
        headline="Choose a frequency"
        badgeMode=${this.formSectionNumberMode}
      >
        <ul class="frequency-selector">
          ${this.frequencyTemplate}
        </ul>
      </donation-form-section>
    `}get frequencyCheckboxTemplate(){return y`
      <div class="checkbox-option-container">
        <input
          type="checkbox"
          id="make-this-monthly"
          @input=${this.monthlyCheckboxChecked}
          .checked=${this.donationInfo.donationType===j.Monthly}
          tabindex="0"
        />
        <label for="make-this-monthly"> Make this monthly </label>
      </div>
    `}get coverFeesCheckboxTemplate(){return y`
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
    `}get amountSelectionSectionNumber(){return this.frequencySelectionMode===R.Button?2:1}get formSectionNumberMode(){switch(this.stepNumberMode){case Fr.ShowNumbers:return Nr.ShowBadge;case Fr.HideNumbers:return Nr.HideBadge}}setupAmountColumnsLayoutConfig(){let e=this.customAmountMode===`hide`&&this.coverFeesCheckboxMode===`hide`&&this.frequencySelectionMode===R.Hide,t=this.amountOptions.length,n=5,r=3;switch(t){case 7:n=5,r=3;break;case 6:n=4,r=2;break;case 5:n=4,r=3;break;case 4:if(e){n=4,r=0;break}n=3,r=2;break;case 3:n=2,r=1;break}this.amountSelectionLayout===Ir.SingleLine&&(n=t+3,r=3),this.style.setProperty(`--paymentSelectorAmountColumnCount`,`${n}`),this.style.setProperty(`--paymentSelectorCustomAmountColSpan`,`${r}`)}updateSelectedDonationInfo(){if(!this.customAmountSelected&&!this.isCustomAmount){let e=this.shadowRoot?.querySelector(`input[type="radio"][name="${I.Amount}"][value="${this.donationInfo.amount}"]`);e.checked=!0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=``)}else if(this.customAmountSelected=!0,this.shadowRoot?.activeElement!==this.customAmountInput){this.customAmountInput.value=this.customAmountDisplayValue;let e=this.getDonationInfoStatus(this.donationInfo.amount);this.handleDonationInfoStatus(e)}}get coverFeesTextTemplate(){return y` I'll generously add ${(0,E.default)(this.donationInfo.fee,{symbol:`$`}).format()} to cover fees. `}formatShortenedAmount(e){return(0,E.default)(e,{symbol:`$`,precision:e%1==0?0:2}).format()}get frequencyTemplate(){return y`
      <li>
        ${this.getRadioButton({group:I.DonationType,value:j.OneTime,displayText:`One time`,checked:this.donationInfo.donationType===j.OneTime})}
      </li>

      <li>
        ${this.getRadioButton({group:I.DonationType,value:j.Monthly,displayText:`Monthly`,checked:this.donationInfo.donationType===j.Monthly})}
      </li>
    `}get presetAmountsTemplate(){return y`
      ${this.amountOptions.map(e=>{let t=!this.customAmountSelected&&e===this.donationInfo.amount,n=this.formatShortenedAmount(e);return y`
          <li>
            ${this.getRadioButton({group:I.Amount,value:`${e}`,displayText:`${n}`,checked:t})}
          </li>
        `})}
    `}getRadioButton(e){let t=`${e.group}-${e.value}-option`;return y`
      <div class="selection-button">
        <input
          type="radio"
          name=${e.group}
          value=${e.value}
          id=${t}
          tabindex="0"
          .checked=${e.checked}
          @change=${this.radioSelected}
          @click=${t=>{e.group===I.Amount&&parseFloat(e.value)===this.donationInfo.amount&&this.radioSelected(t)}}
        />
        <label for=${t}> ${e.displayText} </label>
      </div>
    `}get isCustomAmount(){return!this.amountOptions.includes(this.donationInfo.amount)}get customAmountDisplayValue(){return this.isCustomAmount?(0,E.default)(this.donationInfo.amount,{symbol:``}).format():``}get customAmountTemplate(){return y`
      <div class="selection-button">
        <input
          type="radio"
          name=${I.Amount}
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
            value=${this.customAmountDisplayValue}
            @input=${this.customAmountChanged}
            @keydown=${this.currencyValidator.keydown}
            @focus=${this.customAmountFocused}
            @blur=${e=>{let t=e.target;t.value=this.customAmountDisplayValue}}
          />
        </label>
      </div>
    `}customRadioSelected(){this.customAmountInput.focus()}customAmountFocused(e){let t=e.target;this.customAmountSelected=!0,this.handleCustomAmountInput(t.value)}coverFeesChecked(e){let t=e.target.checked;this.updateDonationInfo({coverFees:t})}customAmountChanged(e){let t=e.target.value;this.customAmountSelected=!0,this.handleCustomAmountInput(t)}handleCustomAmountInput(e){let t=parseFloat(e);isNaN(t)?this.dispatchEditDonationError(L.InvalidDonationAmount):this.amountChanged(t)}handleDonationInfoStatus(e){switch(e){case L.ValidDonationAmount:this.error=void 0;break;case L.DonationTooHigh:this.error=y`
          To make a donation of $10,000 or more, please contact our philanthropy
          department at
          <a href="mailto:donations@archive.org">donations@archive.org</a>
        `,this.dispatchEditDonationError(e);break;case L.DonationTooLow:this.customAmountInput.value.length>0&&(this.error=y` Please select an amount (minimum $1) `),this.dispatchEditDonationError(e);break;case L.InvalidDonationAmount:this.error=y` Please enter a valid donation amount `,this.dispatchEditDonationError(e);break}}amountChanged(e){let t=this.getDonationInfoStatus(e);this.handleDonationInfoStatus(t),t===L.ValidDonationAmount&&this.updateDonationInfo({amount:e})}getDonationInfoStatus(e){return isNaN(e)?L.InvalidDonationAmount:e>=1e4?L.DonationTooHigh:e<1?L.DonationTooLow:L.ValidDonationAmount}radioSelected(e){let t=e.target,n=t.name,{value:r}=t;switch(n){case I.Amount:this.presetAmountChanged(parseFloat(r));break;case I.DonationType:this.updateDonationInfo({donationType:r});break;default:break}}monthlyCheckboxChecked(e){let t=e.target.checked?j.Monthly:j.OneTime;this.updateDonationInfo({donationType:t})}dispatchEditDonationError(e){let t=new CustomEvent(`editDonationError`,{detail:{error:e}});this.dispatchEvent(t)}presetAmountChanged(e){this.error=void 0,this.customAmountSelected=!1,this.customAmountInput&&(this.customAmountInput.value=``),this.updateDonationInfo({amount:e})}updateDonationInfo(e){let t=new A({donationType:e.donationType??this.donationInfo.donationType,amount:e.amount??this.donationInfo.amount,coverFees:e.coverFees??this.donationInfo.coverFees});this.donationInfo=t;let n=new CustomEvent(`donationInfoChanged`,{detail:{donationInfo:t}});this.dispatchEvent(n)}static get styles(){let e=g`var(--paymentButtonBorderColor, #333)`,t=g`var(--paymentButtonGridGap, 1rem)`,n=g`var(--paymentButtonFontSize, 1.6rem)`,r=g`var(--paymentButtonFontColor, #000)`,i=g`var(--paymentButtonSelectedFontColor, #000)`,a=g`var(--paymentButtonSelectedColor, #f9bf3b)`,o=g`var(--paymentButtonFocusedOutlineColor, #7fb3f9)`,s=g`var(--paymentButtonColor, #fff)`,c=g`var(--coverFeesFontSize, 1.2rem)`,l=g`var(--coverFeesFontWeight, bold)`,u=g`var(--customAmountWidth, 4rem)`,d=g`var(--inputFieldFontColor, #333)`,f=g`var(--inputBorder, 1px solid #d9d9d9)`;return g`
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
        grid-template-columns: repeat(${g`var(--paymentSelectorAmountColumnCount, 5)`}, 1fr);
      }

      .custom-amount {
        grid-column: span ${g`var(--paymentSelectorCustomAmountColSpan, 3)`};
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
        color: ${r};
        background-color: ${s};
      }

      input[type='radio']:checked + label {
        color: ${i};
        background-color: ${a};
      }

      input[type='radio']:focus + label {
        outline: 2px solid ${o};
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
        font-weight: ${l};
        flex: 1;
      }

      #custom-amount-input {
        width: ${u};
        font-size: 1.6rem;
        font-weight: bold;
        color: ${d};
        padding: 0.1rem;
        border: ${f};
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
      }
    `}};u([C({type:Object})],z.prototype,`donationInfo`,void 0),u([C({type:String})],z.prototype,`stepNumberMode`,void 0),u([C({type:Number})],z.prototype,`defaultSelectedAmount`,void 0),u([C({type:Array})],z.prototype,`amountOptions`,void 0),u([C({type:String})],z.prototype,`amountSelectionLayout`,void 0),u([C({type:String,reflect:!0})],z.prototype,`frequencySelectionMode`,void 0),u([C({type:String,reflect:!0})],z.prototype,`customAmountMode`,void 0),u([C({type:String,reflect:!0})],z.prototype,`coverFeesCheckboxMode`,void 0),u([C({type:String,reflect:!0})],z.prototype,`amountTitleDisplayMode`,void 0),u([Qt()],z.prototype,`error`,void 0),u([Qt()],z.prototype,`customAmountSelected`,void 0),u([w(`#custom-amount-button`)],z.prototype,`customAmountButton`,void 0),u([w(`#custom-amount-input`)],z.prototype,`customAmountInput`,void 0),z=u([S(`donation-form-edit-donation`)],z);var B=class extends x{constructor(){super(...arguments),this.analyticsCategory=`DonationForm`,this.amountOptions=wn,this.donationInfo=Tn,this.amountSelectionLayout=Ir.MultiLine,this.frequencySelectionMode=R.Button,this.donorEmail=``,this.lazyLoaderService=new fn,this.recaptchaManagerSetup=!1}updated(e){var t,n,r;e.has(`referrer`)&&this.referrer&&((t=this.braintreeManager)==null||t.setReferrer(this.referrer),this.logDonationFlowEvent(`referrer`,this.referrer)),e.has(`loggedInUser`)&&this.loggedInUser&&((n=this.braintreeManager)==null||n.setLoggedInUser(this.loggedInUser)),e.has(`origin`)&&this.origin&&((r=this.braintreeManager)==null||r.setOrigin(this.origin),this.logDonationFlowEvent(`origin`,this.origin)),(e.has(`paymentClients`)||e.has(`braintreeAuthToken`)||e.has(`endpointManager`)||e.has(`environment`))&&(this.setupBraintreeManager(),this.setupRecaptchaManager()),e.has(`recaptchaSiteKey`)&&this.setupRecaptchaManager(),(e.has(`braintreeManager`)||e.has(`recaptchaManager`)||e.has(`modalManager`)||e.has(`recaptchaElement`))&&this.setupPaymentFlowHandlers(),(e.has(`environment`)||e.has(`lazyLoaderService`))&&this.environment&&(this.paymentClients=new pn(this.lazyLoaderService,this.environment))}showConfirmationStepDev(e){return d(this,void 0,void 0,function*(){this.donationForm.showConfirmationModalDev(e)})}showUpsellModalDev(e){return d(this,void 0,void 0,function*(){this.donationForm.showUpsellModalDev(e)})}setupBraintreeManager(){this.braintreeManager===void 0&&this.braintreeAuthToken&&this.endpointManager&&this.paymentClients&&this.environment&&(this.braintreeManager=new Ln({paymentClients:this.paymentClients,endpointManager:this.endpointManager,authorizationToken:this.braintreeAuthToken,venmoProfileId:this.venmoProfileId,googlePayMerchantId:this.googlePayMerchantId,hostedFieldConfig:this.hostedFieldConfig,hostingEnvironment:this.environment,referrer:this.referrer,loggedInUser:this.loggedInUser,origin:this.origin}),this.braintreeManager.on(`paymentProvidersHostedFieldsRetry`,e=>{let t=new CustomEvent(`paymentProvidersHostedFieldsRetry`,{detail:{retryNumber:e}});this.dispatchEvent(t)}),this.braintreeManager.on(`paymentProvidersHostedFieldsFailed`,e=>{let t=new CustomEvent(`paymentProvidersHostedFieldsFailed`,{detail:{error:e}});this.dispatchEvent(t)}))}setupRecaptchaManager(){return d(this,void 0,void 0,function*(){!this.recaptchaSiteKey||!this.paymentClients||this.recaptchaManagerSetup||(this.recaptchaManagerSetup=!0,this.recaptchaManager=new Sr({grecaptchaLibrary:yield this.paymentClients.recaptchaLibrary.get(),siteKey:this.recaptchaSiteKey}))})}firstUpdated(){this.configureFromQueryParams(),this.trackViewedEvent()}configureFromQueryParams(){let e=new URLSearchParams(window.location.search),t=this.amountOptions,n=e.get(`dollarAmounts`);n&&(t=n.slice(1,-1).split(`,`).map(e=>parseFloat(e)).filter(e=>!isNaN(e)));let r=this.donationInfo.coverFees,i=e.get(`coverFees`);i&&(r=i===`true`);let a=this.donationInfo.donationType;e.get(`contrib_type`)===`monthly`&&(a=j.Monthly);let o=this.donationInfo.amount,s=e.get(`amt`);if(s){let e=(0,E.default)(s).value;e>0&&(o=e)}let c=e.get(`amountLayout`);if(c){let e=c;Object.values(Ir).includes(e)&&(this.amountSelectionLayout=e)}let l=e.get(`frequencyMode`);if(l){let e=l;Object.values(R).includes(e)&&(this.frequencySelectionMode=e)}let u=new A({donationType:a,amount:o,coverFees:r});this.amountOptions=t,this.donationInfo=u}setupPaymentFlowHandlers(){var e;this.paymentFlowHandlers||!this.braintreeManager||!this.recaptchaManager||!this.modalManager||!this.recaptchaElement||(this.paymentFlowHandlers=new xr({braintreeManager:this.braintreeManager,modalManager:this.modalManager,recaptchaManager:this.recaptchaManager,resources:{analytics:{logEvent:this.logEvent.bind(this),logDonationFlowEvent:this.logDonationFlowEvent.bind(this)}}}),this.donationForm.braintreeManager=this.braintreeManager,this.donationForm.paymentFlowHandlers=this.paymentFlowHandlers,this.braintreeManager.startup(),(e=this.paymentFlowHandlers)==null||e.startup(),this.recaptchaManager.setup(this.recaptchaElement,1,`light`,`image`))}get hostedFieldConfig(){return new Cr({hostedFieldStyle:{input:{"font-size":`16px`,"font-family":`"Helvetica Neue", Helvetica, Arial, sans-serif`,"font-weight":`700`,color:`#333`},":focus":{color:`#333`},".valid":{},".invalid":{color:`#b00b00`}},hostedFieldFieldOptions:{number:{selector:`#braintree-creditcard`,placeholder:`Card number`},cvv:{selector:`#braintree-cvv`,placeholder:`CVC`},expirationDate:{selector:`#braintree-expiration`,placeholder:`MM / YY`}},hostedFieldContainer:new Rn({number:this.braintreeNumberInput,cvv:this.braintreeCVVInput,expirationDate:this.braintreeExpirationDateInput,errorContainer:this.braintreeErrorMessage})})}render(){return y`
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
              <badged-input .icon=${Ar} ?required=${!0} class="creditcard">
                <div class="braintree-input" id="braintree-creditcard"></div>
              </badged-input>
            </div>
            <div class="braintree-row">
              <badged-input .icon=${jr} ?required=${!0} class="expiration">
                <div class="braintree-input" id="braintree-expiration"></div>
              </badged-input>
              <badged-input .icon=${Mr} ?required=${!0} class="cvv">
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
    `}createRenderRoot(){return this}donationInfoChanged(e){this.logEvent(`DonationInfoChanged`),this.donationInfo=e.detail.donationInfo}trackViewedEvent(){this.logEvent(`Viewed`)}paymentProviderSelected(e){let t=e.detail.paymentProvider,n=e.detail.previousPaymentProvider,r=this.removeSpaces(t??`unset`),i=`ProviderFirstSelected-${r}`,a;n!==void 0&&(i=`ProviderChangedTo-${r}`,a=`ProviderChangedFrom-${this.removeSpaces(n)}`),this.logEvent(i,a)}paymentFlowConfirmed(e){let t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent(`PaymentFlowConfirmed`,n)}paymentFlowStarted(e){let t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent(`PaymentFlowStarted`,n)}paymentFlowCancelled(e){let t=e.detail.paymentProvider,n=this.removeSpaces(t);this.logEvent(`PaymentFlowCancelled`,n)}paymentFlowError(e){let t=e.detail.paymentProvider,n=`${this.removeSpaces(t)}-${e.detail.error}`;this.logEvent(`PaymentFlowError`,n)}removeSpaces(e){return e.replace(/\s+/g,``)}logEvent(e,t){var n;let r={action:e,label:t,category:this.analyticsCategory};(n=this.analyticsHandler)==null||n.sendEvent(r)}logDonationFlowEvent(e,t){var n;let r={action:e,label:t,category:`DonationFlow`};(n=this.analyticsHandler)==null||n.sendEventNoSampling(r)}get getStyles(){return y`
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
    `}};u([C({type:String})],B.prototype,`environment`,void 0),u([C({type:String})],B.prototype,`braintreeAuthToken`,void 0),u([C({type:String})],B.prototype,`recaptchaSiteKey`,void 0),u([C({type:String})],B.prototype,`venmoProfileId`,void 0),u([C({type:String})],B.prototype,`googlePayMerchantId`,void 0),u([C({type:String})],B.prototype,`analyticsCategory`,void 0),u([C({type:Array})],B.prototype,`amountOptions`,void 0),u([C({type:Object})],B.prototype,`donationInfo`,void 0),u([C({type:String})],B.prototype,`amountSelectionLayout`,void 0),u([C({type:String})],B.prototype,`frequencySelectionMode`,void 0),u([C({type:String})],B.prototype,`referrer`,void 0),u([C({type:String})],B.prototype,`loggedInUser`,void 0),u([C({type:String})],B.prototype,`origin`,void 0),u([C({type:String})],B.prototype,`donorEmail`,void 0),u([C({type:Object})],B.prototype,`endpointManager`,void 0),u([C({type:Object})],B.prototype,`analyticsHandler`,void 0),u([C({type:Object})],B.prototype,`modalManager`,void 0),u([C({type:Object})],B.prototype,`recaptchaElement`,void 0),u([C({type:Object})],B.prototype,`braintreeManager`,void 0),u([C({type:Object})],B.prototype,`recaptchaManager`,void 0),u([C({type:Object})],B.prototype,`paymentFlowHandlers`,void 0),u([C({type:Object})],B.prototype,`paymentClients`,void 0),u([C({type:Object})],B.prototype,`lazyLoaderService`,void 0),u([w(`donation-form`)],B.prototype,`donationForm`,void 0),u([w(`#braintree-creditcard`)],B.prototype,`braintreeNumberInput`,void 0),u([w(`#braintree-cvv`)],B.prototype,`braintreeCVVInput`,void 0),u([w(`#braintree-expiration`)],B.prototype,`braintreeExpirationDateInput`,void 0),u([w(`#braintree-error-message`)],B.prototype,`braintreeErrorMessage`,void 0),u([w(`contact-form`)],B.prototype,`contactForm`,void 0),B=u([S(`donation-form-controller`)],B);var Lr=y`
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
`,Rr=y`
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
`,zr=y`
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
`,Br=y`
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
`,V;(function(e){e.Loading=`loading`,e.Available=`available`,e.Unavailable=`unavailable`})(V||={});var H=class extends x{constructor(){super(...arguments),this.donationInfoValid=!0,this.applePayMode=V.Loading,this.googlePayMode=V.Loading,this.venmoMode=V.Loading,this.payPalMode=V.Loading,this.paymentModeSelected=void 0}render(){let e=this.paymentModeSelected?`payment-selected`:``;return y`
      <div
        class="payment-container ${this.donationInfoValid?`donation-info-valid`:`donation-info-invalid`} ${e}"
      >
        <div class="payment-provider-container">
          <button
            class="applepay provider-button ${this.applePayMode} ${this.paymentModeSelected===`apple`?`selected`:``}"
            @click=${e=>{this.paymentModeSelected=`apple`,this.applePaySelected(e)}}
            tabindex="0"
          >
            <div class="payment-image">${Lr}</div>
          </button>

          <button
            class="googlepay provider-button ${this.googlePayMode} ${this.paymentModeSelected===`google`?`selected`:``}"
            @click=${()=>{this.paymentModeSelected=`google`,this.googlePaySelected()}}
            tabindex="0"
          >
            <div class="payment-image">${Rr}</div>
          </button>

          <button
            class="venmo provider-button ${this.venmoMode} ${this.paymentModeSelected===`venmo`?`selected`:``}"
            @click=${()=>{this.paymentModeSelected=`venmo`,this.venmoSelected()}}
            tabindex="0"
          >
            <div class="payment-image">${Br}</div>
          </button>

          <div
            class="paypal-container provider-button ${this.payPalMode}
              ${this.paymentModeSelected===`paypal`?`selected`:``}"
            tabindex="0"
          >
            <div class="payment-image">
              <div
                class="paypal-local-button"
                @click=${()=>{this.paymentModeSelected=`paypal`,this.localPaypalButtonClicked()}}
              >
                ${zr}
              </div>
              <slot name="paypal-button"></slot>
            </div>
          </div>
        </div>

        <div class="credit-card-container">
          <button
            @click=${()=>{this.paymentModeSelected=`cc`,this.creditCardSelected()}}
            class="button-style credit-card-button ${this.paymentModeSelected===`cc`?`selected`:``}"
            tabindex="0"
          >
            <div class="cc-title">Credit Card</div>
            <div class="cc-background"></div>
          </button>
        </div>
      </div>

      ${this.paymentModeSelected?y`
            <button
              id="change-payment-method"
              @click=${()=>{this.paymentModeSelected=void 0,this.dispatchEvent(new Event(`resetPaymentMethod`)),this.setButtonVisibility()}}
            >
              Change payment method
            </button>
          `:b}
    `}firstUpdated(){this.dispatchEvent(new Event(`firstUpdated`))}updated(e){e.has(`paymentProviders`)&&this.setButtonVisibility()}showPaypalButton(){this.payPalMode=V.Available}setButtonVisibility(){return d(this,void 0,void 0,function*(){var e,t,n;(e=this.paymentProviders)==null||e.venmoHandler.get().then(e=>{if(!e){this.venmoMode=V.Unavailable;return}e.isBrowserSupported().then(e=>{this.venmoMode=e?V.Available:V.Unavailable}).catch(e=>{console.error(`error loading venmo`,e),this.venmoMode=V.Unavailable})}).catch(e=>{console.error(`venmo unavailable`,e),this.venmoMode=V.Unavailable}),(t=this.paymentProviders)==null||t.applePayHandler.get().then(e=>{if(!e){console.error(`applePayHandler unavailable`),this.applePayMode=V.Unavailable;return}e.isAvailable().then(e=>{this.applePayMode=e?V.Available:V.Unavailable}).catch(e=>{console.error(`error loading applepay`,e),this.applePayMode=V.Unavailable})}).catch(e=>{console.error(`apple pay unavailable`,e),this.applePayMode=V.Unavailable}),(n=this.paymentProviders)==null||n.googlePayHandler.get().then(e=>{if(!e){console.error(`google pay handler unavailable`),this.googlePayMode=V.Unavailable;return}e.isBrowserSupported().then(e=>{this.googlePayMode=e?V.Available:V.Unavailable}).catch(e=>{console.error(`error loading googlepay`,e),this.googlePayMode=V.Unavailable})}).catch(e=>{console.error(`google pay unavailable`,e),this.googlePayMode=V.Unavailable})})}googlePaySelected(){this.dispatchEvent(new Event(`googlePaySelected`))}applePaySelected(e){let t=new CustomEvent(`applePaySelected`,{detail:{originalEvent:e}});this.dispatchEvent(t)}venmoSelected(){this.dispatchEvent(new Event(`venmoSelected`))}creditCardSelected(){this.dispatchEvent(new Event(`creditCardSelected`))}localPaypalButtonClicked(){this.dispatchEvent(new Event(`paypalBlockerSelected`))}static get styles(){let e=g`var(--paymentButtonWidth, 5rem)`,t=g`var(--paymentButtonHeight, 3.2rem)`;return g`
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
        font-size: ${g`var(--creditCardFontSize, 1.8rem)`};
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
    `}};u([C({type:Boolean})],H.prototype,`donationInfoValid`,void 0),u([C({type:Object})],H.prototype,`paymentProviders`,void 0),u([C({type:String})],H.prototype,`applePayMode`,void 0),u([C({type:String})],H.prototype,`googlePayMode`,void 0),u([C({type:String})],H.prototype,`venmoMode`,void 0),u([C({type:String})],H.prototype,`payPalMode`,void 0),u([C({type:String})],H.prototype,`paymentModeSelected`,void 0),H=u([S(`payment-selector`)],H);var Vr;(function(e){e.Summary=`summary`,e.Edit=`edit`})(Vr||={});var U=class extends x{constructor(){super(...arguments),this.mode=Vr.Edit,this.amountOptions=wn,this.amountSelectionLayout=Ir.MultiLine,this.frequencySelectionMode=R.Button}render(){return y` ${this.currentTemplate} `}get currentTemplate(){switch(this.mode){case Vr.Summary:return this.donationSummaryTemplate;case Vr.Edit:return this.editDonationTemplate}}get editDonationTemplate(){return y`
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
    `}get donationSummaryTemplate(){return y`
      <donation-summary .donationInfo=${this.donationInfo} @editClicked=${this.summaryEditClicked}>
      </donation-summary>
    `}donationInfoChanged(e){this.donationInfo=e.detail.donationInfo;let t=new CustomEvent(`donationInfoChanged`,{detail:{donationInfo:this.donationInfo}});this.dispatchEvent(t)}editDonationError(e){let t=new CustomEvent(`editDonationError`,{detail:e.detail});this.dispatchEvent(t)}summaryEditClicked(){this.mode=Vr.Edit}showSummaryClicked(){this.mode=Vr.Summary}static get styles(){return g``}};u([C({type:Object})],U.prototype,`donationInfo`,void 0),u([C({type:String})],U.prototype,`mode`,void 0),u([C({type:Array})],U.prototype,`amountOptions`,void 0),u([C({type:String})],U.prototype,`amountSelectionLayout`,void 0),u([C({type:String})],U.prototype,`frequencySelectionMode`,void 0),u([w(`edit-donation`)],U.prototype,`editDonation`,void 0),U=u([S(`donation-form-header`)],U);var Hr=class extends x{render(){return y`
      <div class="top-line"></div>
      <div class="total-line">Total: ${this.totalAmount}</div>
    `}get totalAmount(){if(this.donationInfo)return`${(0,E.default)(this.donationInfo.total,{symbol:`$`}).format()}${this.donationInfo.donationType===j.Monthly?`/month`:``}`}static get styles(){let e=g`var(--totalAmountLineColor, #333)`,t=g`var(--totalAmountLineThickness, 2px)`,n=g`var(--totalAmountVerticalSpacing, 0.5rem)`;return g`
      .top-line {
        width: 100%;
        height: ${t};
        background-color: ${e};
      }

      .total-line {
        font-size: ${g`var(--totalAmountFontSize, 2.6rem)`};
        font-weight: bold;
        text-align: center;
        margin-top: ${n};
      }
    `}};u([C({type:Object})],Hr.prototype,`donationInfo`,void 0),Hr=u([S(`donation-form-total-amount`)],Hr);var W=class extends x{constructor(){super(...arguments),this.amountOptions=wn,this.amountSelectionLayout=Ir.MultiLine,this.frequencySelectionMode=R.Button,this.creditCardVisible=!1,this.contactFormVisible=!1,this.donationInfoValid=!0,this.paypalButtonNeedsRender=!0,this.flowHandlersConfigured=!1,this.flowHandlerListenersBound=!1}render(){return y`
      <donation-form-header
        .amountOptions=${this.amountOptions}
        .amountSelectionLayout=${this.amountSelectionLayout}
        .frequencySelectionMode=${this.frequencySelectionMode}
        @donationInfoChanged=${this.donationInfoChanged}
        @editDonationError=${this.editDonationError}
      >
      </donation-form-header>

      <donation-form-section
        .badgeMode=${Nr.HideBadgeLeaveSpacing}
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
          .paymentProviders=${this.braintreeManager?.paymentProviders}
          @firstUpdated=${this.paymentSelectorFirstUpdated}
          @creditCardSelected=${this.creditCardSelected}
          @venmoSelected=${this.venmoSelected}
          @applePaySelected=${this.applePaySelected}
          @googlePaySelected=${this.googlePaySelected}
          @paypalBlockerSelected=${this.paypalBlockerSelected}
          @resetPaymentMethod=${()=>d(this,void 0,void 0,function*(){this.selectedPaymentProvider=void 0,this.contactFormVisible=!1,this.requestUpdate()})}
          tabindex="0"
        >
          <slot name="paypal-button" slot="paypal-button"></slot>
        </payment-selector>
      </donation-form-section>

      <div class="contact-form-section ${this.contactFormVisible?``:`hidden`}">
        ${this.contactFormSectionTemplate}
      </div>
      <slot name="recaptcha"></slot>
    `}showConfirmationModalDev(e){return d(this,void 0,void 0,function*(){var t;(t=this.paymentFlowHandlers)==null||t.showConfirmationStepModal(e)})}showUpsellModalDev(e){return d(this,void 0,void 0,function*(){var t;if((t=this.paymentFlowHandlers)==null||t.showUpsellModal(e),e.ctaMode===Vn.PayPalUpsellSlot){let t=yield this.braintreeManager?.paymentProviders.paypalHandler.get(),n=new A({amount:e.oneTimeAmount,donationType:j.OneTime,coverFees:!1});t?.renderPayPalButton({selector:`#paypal-upsell-button`,style:{color:`blue`,label:`paypal`,shape:`rect`,size:`responsive`,tagline:!1},donationInfo:n})}})}get contactFormSectionTemplate(){let e=this.selectedPaymentProvider===k.Venmo?`Help us stay in touch`:`Enter payment information`;return y`
      <donation-form-section
        .sectionBadge=${this.paymentSelectorNumberingStart+1}
        headline=${e}
        id="contactFormSection"
      >
        <slot name="contact-form"></slot>
        <div class="credit-card-fields" class="${this.creditCardVisible?``:`hidden`}">
          <slot name="braintree-hosted-fields"></slot>
        </div>
      </donation-form-section>

      <donation-form-section .sectionBadge=${this.paymentSelectorNumberingStart+2}>
        <slot name="recaptcha"></slot>
        <button id="donate-button" @click=${this.donateClicked}>Donate</button>

        <div class="secure-process-note">${Mr} Your payment will be securely processed</div>
      </donation-form-section>
    `}get paymentSelectorNumberingStart(){return this.frequencySelectionMode===R.Button?3:2}editDonationError(){this.donationInfoValid=!1}paymentSelectorFirstUpdated(){this.paymentFlowHandlers?.paypalHandler&&this.renderPayPalButtonIfNeeded()}applePaySelected(e){var t;if(this.selectedPaymentProvider=k.ApplePay,this.contactFormVisible=!1,this.creditCardVisible=!1,!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}let n=e.detail.originalEvent;this.donationInfo&&((t=this.paymentFlowHandlers?.applePayHandler)==null||t.paymentInitiated(this.donationInfo,n)),this.emitPaymentFlowStartedEvent()}googlePaySelected(){var e;this.selectedPaymentProvider=k.GooglePay,this.contactFormVisible=!1,this.creditCardVisible=!1,this.donationInfoValid?(this.donationInfo&&((e=this.paymentFlowHandlers?.googlePayHandler)==null||e.paymentInitiated(this.donationInfo)),this.emitPaymentFlowStartedEvent()):this.showInvalidDonationInfoAlert()}creditCardSelected(){return d(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=k.CreditCard,this.contactFormVisible=!0,this.creditCardVisible=!0,this.focusContactForm()})}venmoSelected(){return d(this,void 0,void 0,function*(){if(!this.donationInfoValid){this.showInvalidDonationInfoAlert();return}this.selectedPaymentProvider=k.Venmo,this.contactFormVisible=!0,this.creditCardVisible=!1,this.focusContactForm()})}paypalBlockerSelected(){this.contactFormVisible=!1,this.creditCardVisible=!1,this.showInvalidDonationInfoAlert()}focusContactForm(){return d(this,void 0,void 0,function*(){var e;yield this.updateComplete,this.contactFormSection&&((e=this.contactForm)==null||e.focus())})}donateClicked(){return d(this,void 0,void 0,function*(){if(!this.contactForm){alert(`Please enter contact info.`);return}if(!this.donationInfoValid||!this.donationInfo){this.showInvalidDonationInfoAlert();return}let e=this.contactForm.donorContactInfo;switch(this.selectedPaymentProvider){case k.CreditCard:this.handleCreditCardDonationFlow(e,this.donationInfo);break;case k.Venmo:this.handleVenmoDonationFlow(e,this.donationInfo);break}})}handleCreditCardDonationFlow(e,t){return d(this,void 0,void 0,function*(){let n=this.paymentFlowHandlers?.creditCardHandler;(yield this.braintreeManager?.paymentProviders.creditCardHandler.get())?.hideErrorMessage();let r=this.contactForm?.reportValidity(),i=yield n?.tokenizeFields();!r||i===void 0||(this.emitPaymentFlowStartedEvent(),n?.paymentInitiated(i,t,e))})}handleVenmoDonationFlow(e,t){return d(this,void 0,void 0,function*(){var n;this.contactForm?.reportValidity()&&((n=this.paymentFlowHandlers?.venmoHandler)==null||n.paymentInitiated(e,t))})}emitPaymentFlowStartedEvent(){if(!this.selectedPaymentProvider)return;let e=new CustomEvent(`paymentFlowStarted`,{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowConfirmedEvent(){if(!this.selectedPaymentProvider)return;let e=new CustomEvent(`paymentFlowConfirmed`,{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowCancelledEvent(){if(!this.selectedPaymentProvider)return;let e=new CustomEvent(`paymentFlowCancelled`,{detail:{paymentProvider:this.selectedPaymentProvider}});this.dispatchEvent(e)}emitPaymentFlowErrorEvent(e){if(!this.selectedPaymentProvider)return;let t=new CustomEvent(`paymentFlowError`,{detail:{paymentProvider:this.selectedPaymentProvider,error:e}});this.dispatchEvent(t)}showInvalidDonationInfoAlert(){alert(`Please enter a valid donation amount.`)}renderPayPalButtonIfNeeded(){return d(this,void 0,void 0,function*(){this.paypalButtonNeedsRender&&(this.paypalButtonNeedsRender=!1,this.donationInfo&&(yield(this.paymentFlowHandlers?.paypalHandler)?.renderPayPalButton(this.donationInfo)),this.paymentSelector.showPaypalButton())})}updated(e){var t;if(e.has(`donationInfo`)&&this.donationInfo&&((t=this.paymentFlowHandlers?.paypalHandler)==null||t.updateDonationInfo(this.donationInfo),this.donationFormHeader.donationInfo=this.donationInfo),(e.has(`paymentFlowHandlers`)||e.has(`donationInfo`))&&this.donationInfo&&this.paymentFlowHandlers&&this.setupFlowHandlers(),e.has(`donationInfoValid`)&&(this.paymentSelector.donationInfoValid=this.donationInfoValid),e.has(`selectedPaymentProvider`)){let t=new CustomEvent(`paymentProviderSelected`,{detail:{paymentProvider:this.selectedPaymentProvider,previousPaymentProvider:e.get(`selectedPaymentProvider`)}});this.dispatchEvent(t)}}setupFlowHandlers(){var e;this.flowHandlersConfigured||(this.flowHandlersConfigured=!0,this.bindFlowListenerEvents(),this.renderPayPalButtonIfNeeded(),this.donationInfo&&((e=this.paymentFlowHandlers?.paypalHandler)==null||e.updateDonationInfo(this.donationInfo)))}bindFlowListenerEvents(){var e,t,n,r,i;this.flowHandlerListenersBound||(this.flowHandlerListenersBound=!0,(e=this.paymentFlowHandlers?.paypalHandler)==null||e.on(`payPalPaymentStarted`,()=>{this.selectedPaymentProvider=k.PayPal,this.emitPaymentFlowStartedEvent()}),(t=this.paymentFlowHandlers?.paypalHandler)==null||t.on(`payPalPaymentConfirmed`,()=>{this.selectedPaymentProvider=k.PayPal,this.emitPaymentFlowConfirmedEvent()}),(n=this.paymentFlowHandlers?.paypalHandler)==null||n.on(`payPalPaymentCancelled`,()=>{this.selectedPaymentProvider=k.PayPal,this.emitPaymentFlowCancelledEvent()}),(r=this.paymentFlowHandlers?.paypalHandler)==null||r.on(`payPalPaymentError`,(e,t)=>{this.selectedPaymentProvider=k.PayPal,this.emitPaymentFlowErrorEvent(t)}),(i=this.paymentFlowHandlers?.googlePayHandler)==null||i.on(`paymentCancelled`,()=>{this.selectedPaymentProvider=k.GooglePay,this.emitPaymentFlowCancelledEvent()}))}donationInfoChanged(e){let t=e.detail.donationInfo;this.donationInfo=new A({amount:t.amount,donationType:t.donationType,coverFees:t.coverFees}),this.donationInfoValid=!0;let n=new CustomEvent(`donationInfoChanged`,{detail:{donationInfo:t}});this.dispatchEvent(n)}static get styles(){let e=g`var(--donateButtonFontSize, 2.6rem)`,t=g`var(--donateButtonHeight, 4rem)`,n=g`var(--donateButtonColor, rgba(49, 164, 129, 1))`;return g`
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
        color: ${g`var(--donateButtonTextColor, #fff)`};
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: ${n};
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        height: ${t};
      }

      #donate-button:hover {
        background-color: ${g`var(--donateButtonHoverColor, rgba(39, 131, 103, 1))`};
      }

      #total-amount-section {
        display: block;
        margin-top: ${g`var(--donateTotalAmountTopMargin, 1.5rem)`};
        margin-bottom: ${g`var(--donateTotalAmountBottomMargin, 1.2rem)`};
      }
    `}};u([C({type:Object})],W.prototype,`braintreeManager`,void 0),u([C({type:Object})],W.prototype,`paymentFlowHandlers`,void 0),u([C({type:Object})],W.prototype,`donationRequest`,void 0),u([C({type:Object})],W.prototype,`donationInfo`,void 0),u([C({type:Object})],W.prototype,`contactForm`,void 0),u([C({type:Array})],W.prototype,`amountOptions`,void 0),u([C({type:String})],W.prototype,`amountSelectionLayout`,void 0),u([C({type:String})],W.prototype,`frequencySelectionMode`,void 0),u([C({type:Boolean})],W.prototype,`creditCardVisible`,void 0),u([C({type:Boolean})],W.prototype,`contactFormVisible`,void 0),u([C({type:Boolean})],W.prototype,`donationInfoValid`,void 0),u([C({type:String})],W.prototype,`selectedPaymentProvider`,void 0),u([w(`#contactFormSection`)],W.prototype,`contactFormSection`,void 0),u([w(`donation-form-header`)],W.prototype,`donationFormHeader`,void 0),u([w(`payment-selector`)],W.prototype,`paymentSelector`,void 0),W=u([S(`donation-form`)],W);var Ur=class extends x{render(){return y`
      <div class="mgc-donation-section-info">
        <span><slot></slot></span>
        <ia-mgc-button
          class="ia-button link"
          .clickHandler=${(e,t)=>{t.isDisabled=!0,this.dispatchEvent(new Event(`editingRequested`))}}
        >
          Edit...
        </ia-mgc-button>
      </div>
    `}};Ur.styles=g`
    span {
      max-width: 300px;
      margin-right: 10px;
      display: inline-grid;
    }
  `,Ur=u([S(`ia-mgc-form-section-info`)],Ur);var Wr=class extends x{constructor(){super(...arguments),this.status=``}get glyph(){return this.status===`success`?`✓`:this.status===`fail`?`✖`:``}render(){return this.status?y`
      <span class="sent-status ${this.status}"
        >${this.glyph} <slot></slot
      ></span>
    `:b}};Wr.styles=g`
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
  `,u([C({type:String})],Wr.prototype,`status`,void 0),Wr=u([S(`ia-mgc-update-status`)],Wr);var G=class extends x{constructor(){super(...arguments),this.newAmount=0,this.currentlyEditing=!1,this.coverFees=!1,this.updateMessage=``,this.errorMessage=``,this.updateStatus=``}updated(e){e.has(`plan`)&&this.plan&&this.captureAmountChanges(),e.has(`coverFees`)&&this.captureAmountChanges(),e.has(`currentlyEditing`)&&this.currentlyEditing&&this.form.focus(),e.has(`donationPaymentInfo`)&&!this.donationPaymentInfo&&this.captureAmountChanges()}render(){return y`
      <section>
        <donation-form-section badgemode="hidebadge" headline="Amount">
          ${this.currentlyEditing?b:y`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>USD $${this.plan?.amountFormatted}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editAmountForm:b}
        </donation-form-section>
      </section>
    `}async amountUpdated(e){if(this.clearInputField(),this.updateStatus=e,this.updateMessage=e===`success`?`Amount updated`:`Failed to update date, please try again`,e===`success`){this.closeForm(),await this.updateComplete,this.updateStatus=e,this.updateMessage=`Amount updated`;return}this.form.querySelector(`ia-mgc-button#update-amount`).isDisabled=!1,this.captureAmountChanges(),await this.updateComplete}requestAmountUpdate(e){e.preventDefault();let t=this.form.querySelector(`input[name="amount"]`);this.newAmount=Number(t.value),this.captureAmountChanges(this.newAmount),console.log(`<plan-amount> - update amount`,{newValue:this.newAmount,oldValue:this.plan?.plan.amount,display:this.donationPaymentInfo?.amount});let n=Number(A.calculateTotal(Number(this.donationPaymentInfo?.amount),this.coverFees));this.dispatchEvent(new CustomEvent(`updateAmount`,{detail:{plan:this.plan,amount:n,baseAmount:this.donationPaymentInfo?.amount,coverFees:this.coverFees,feeCovered:this.donationPaymentInfo?.feeAmountCovered}}))}captureAmountChanges(e){if(!this.donationPaymentInfo&&this.plan){this.donationPaymentInfo=new A({donationType:j.Monthly,amount:0,coverFees:!0});return}let t;if(e)t=new A({donationType:j.Monthly,amount:e,coverFees:!0});else{let e=this.donationPaymentInfo?this.donationPaymentInfo.amount:this.plan.amount;t=new A({donationType:j.Monthly,amount:e,coverFees:!0})}this.donationPaymentInfo=t}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.coverFees=!1,this.errorMessage=``}clearInputField(){let e=this.form.querySelector(`input[name="amount"]`);e.value=``,this.newAmount=0,this.donationPaymentInfo=void 0}handleSubmit(e,t){e.preventDefault(),this.clearStatusMessaging();let n=t??this.form.querySelector(`#update-amount`);if(n&&this.updateButtonState(n),!this.newAmount){this.errorMessage=`Please enter a new amount`,n&&(n.isDisabled=!1);return}let r=this.form.querySelector(`input[name="amount"]`),i=Number(r.value)??0,a=i<1,o=i>=9999;if(a&&(this.errorMessage=`Please enter a valid amount`),o&&(this.errorMessage=`Amount must be less than $9,999. Would you like to donate more? Please contact us at donations@archive.org`),o||a){n&&this.updateButtonState(n);return}this.requestAmountUpdate(e)}async updateButtonState(e){e.isDisabled=!0,await e?.updateComplete}async clearStatusMessaging(){this.errorMessage=``,this.updateMessage=``,this.updateStatus=``,await this.updateComplete}totalAmountWithFees(){return this.newAmount===0?0:A.calculateTotal(this.newAmount,this.coverFees)}get coveredFeesText(){return`I'll generously add $${this.donationPaymentInfo?.feeAmountCovered} to cover fees.`}get editAmountForm(){return y`
      <section>
        <form
          id="edit-plan-amount"
          @submit=${e=>this.handleSubmit(e)}
        >
          <p>Current donation amount: $${this.plan?.amountFormatted}</p>
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
              @input=${e=>{let t=Number(e.target.value);this.captureAmountChanges(t),this.newAmount=t}}
            />
            / month
          </div>
          <div>
            <div class="checkbox-option-container">
              <input
                type="checkbox"
                id="cover-fees"
                tabindex="0"
                @change=${e=>{this.coverFees=e.target.checked,this.captureAmountChanges()}}
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
                .clickHandler=${(e,t)=>this.handleSubmit(e,t)}
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
    `}};G.styles=g`
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
  `,u([C({type:Object})],G.prototype,`plan`,void 0),u([C({type:Object})],G.prototype,`donationPaymentInfo`,void 0),u([C({type:Number})],G.prototype,`newAmount`,void 0),u([C({type:Boolean,reflect:!0})],G.prototype,`currentlyEditing`,void 0),u([C({type:Boolean})],G.prototype,`coverFees`,void 0),u([C({type:String})],G.prototype,`updateMessage`,void 0),u([C({type:String})],G.prototype,`errorMessage`,void 0),u([C({type:String})],G.prototype,`updateStatus`,void 0),u([w(`form`)],G.prototype,`form`,void 0),G=u([S(`ia-mgc-edit-plan-amount`)],G);var Gr;(function(e){e.invalid_date=`Please enter a valid date format (YYYY-MM-DD)`,e.date_too_early=`Date must be at least tomorrow.`,e.second_donation_this_month=`The date you selected will result in an additional donation for this month.`,e.date_out_of_range=`New donation date must be within the next 12 months.`,e.same_next_billing_date=``})(Gr||={});var K=class extends x{constructor(){super(...arguments),this.currentlyEditing=!1,this.allowEditing=!1,this.updateMessage=``,this.errorMessage=``,this.warningMessage=``,this.updateStatus=``}willUpdate(e){this.dateInput&&e.has(`plan`)&&this.plan&&(this.dateInput.setAttribute(`min`,this.minDate),this.dateInput.setAttribute(`max`,this.maxDate))}updated(e){e.has(`currentlyEditing`)&&this.currentlyEditing&&this.dateInput.focus()}render(){return y`
      <section>
        <donation-form-section
          badgemode="hidebadge"
          headline="Change next donation date"
        >
          ${this.currentlyEditing?b:y`<ia-mgc-form-section-info
                @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
                ><span>${this.plan?.nextBillingDateLocale}</span>
              </ia-mgc-form-section-info>`}
          ${this.currentlyEditing?this.editDateForm:b}
        </donation-form-section>
      </section>
    `}async dateUpdated(e){if(this.clearInputField(),this.updateStatus=e,this.updateMessage=e===`success`?`Date updated`:`Failed to update date, please try again`,e===`success`){this.closeForm(),await this.updateComplete;return}this.allowEditing=!1,await this.updateComplete}requestDateUpdate(e){e.preventDefault(),this.dispatchEvent(new CustomEvent(`updateDate`,{detail:{plan:this.plan,newDate:this.newDate}}))}closeForm(){this.clearInputField(),this.clearStatusMessaging(),this.currentlyEditing=!1,this.allowEditing=!1}clearInputField(){this.dateInput.value=``,this.newDate=void 0}formatDateToYYYYMMDD(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}async clearStatusMessaging(){this.errorMessage=``,this.warningMessage=``,this.updateMessage=``,this.updateStatus=``,await this.updateComplete}validateChosenDate(e){if(!e)return{valid:!1,errorCode:`invalid_date`};let t;try{t=new Date(`${e}T00:00:00`)}catch{return{valid:!1,errorCode:`invalid_date`}}let n=new Date;n.setHours(0,0,0,0),new Date(n).setDate(n.getDate()+1);let r=new Date(t);if(r.setHours(0,0,0,0),this.plan?.nextBillingDate&&this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate))===this.formatDateToYYYYMMDD(r))return{valid:!1,errorCode:`same_next_billing_date`};if(r<n)return{valid:!1,errorCode:`date_too_early`};let i=new Date(n);if(i.setFullYear(i.getFullYear()+1),r>i)return{valid:!1,errorCode:`date_out_of_range`};let a=this.plan?.payment&&this.plan.payment.lastBillingDate?.date?new Date(this.plan.payment.lastBillingDate.date):null;if(a){let e=a.getMonth(),n=a.getFullYear(),r=t.getFullYear(),i=t.getMonth();if(r===n&&i===e)return{valid:!0,errorCode:`second_donation_this_month`}}return{valid:!0,errorCode:``}}get minDate(){let e=new Date,t=new Date(e);return t.setDate(e.getDate()+1),`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,`0`)}-${String(t.getDate()).padStart(2,`0`)}`}get maxDate(){let e=new Date;return`${e.getFullYear()+1}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}get editDateForm(){let e=this.plan?.nextBillingDate?this.formatDateToYYYYMMDD(new Date(this.plan.nextBillingDate)):``,t=this.dateInput?.value??e;return y`
      <section>
        <form id="edit-date">
          <p id="form-info-last-donation-date">
            Last donation date: ${this.plan?.lastBillingDateLocale}
          </p>

          <p id="form-info-next-donation-date">
            Next donation date: ${this.plan?.nextBillingDateLocale}
          </p>
          <div class="date-holder">
            <input
              required
              type="date"
              id="edit-date"
              name="edit-date"
              min=${this.minDate}
              max=${this.maxDate}
              .value=${t}
              @focus=${()=>this.clearStatusMessaging()}
              @change=${async()=>{this.clearStatusMessaging(),await this.updateComplete;let e=this.dateInput.value,{valid:t,errorCode:n}=this.validateChosenDate(e);if(this.allowEditing=t,n)if(n===`second_donation_this_month`)this.errorMessage=Gr[n],this.warningMessage=`You have already made a donation this month.`;else{this.errorMessage=Gr[n],this.newDate=void 0;return}let r=new Date(`${e}T00:00:00`);this.newDate=new Date(r).toISOString()}}
            />
          </div>
          <div>
            <div class="cta-container">
              <ia-mgc-button
                class="ia-button secondary"
                .clickHandler=${e=>{e.preventDefault(),this.closeForm()}}
              >
                Cancel
              </ia-mgc-button>
              <ia-mgc-button
                id="edit-date"
                class="ia-button primary"
                type="submit"
                .isDisabled=${!this.allowEditing}
                .clickHandler=${async(e,t)=>{if(this.clearStatusMessaging(),!this.newDate){this.errorMessage=`Please enter a valid date`;return}t.isDisabled=!0,await t.updateComplete,this.requestDateUpdate(e)}}
              >
                Update
              </ia-mgc-button>
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              >
            </div>
          </div>
          <p class="error error-msg">
            ${this.warningMessage?y`<span>${this.warningMessage}</span><br />`:``}
            ${this.errorMessage}
          </p>
        </form>
      </section>
    `}};K.styles=g`
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
  `,u([C({type:Object})],K.prototype,`plan`,void 0),u([C({type:String})],K.prototype,`newDate`,void 0),u([C({type:Boolean,reflect:!0})],K.prototype,`currentlyEditing`,void 0),u([C({type:Boolean})],K.prototype,`allowEditing`,void 0),u([C({type:String})],K.prototype,`updateMessage`,void 0),u([C({type:String})],K.prototype,`errorMessage`,void 0),u([C({type:String})],K.prototype,`warningMessage`,void 0),u([C({type:String})],K.prototype,`updateStatus`,void 0),u([w(`form`)],K.prototype,`form`,void 0),u([w(`form ia-mgc-button#edit-date`)],K.prototype,`formSubmitButton`,void 0),u([w(`form input[name="edit-date"]`)],K.prototype,`dateInput`,void 0),K=u([S(`ia-mgc-edit-date`)],K);var Kr=class extends x{constructor(){super(...arguments),this.patronWantsToKeepPlan=!0,this.initialCancelRequest=!1}updated(e){e.has(`plan`)&&console.log(`plan updated`,this.plan)}async cancelThisPlan(e){e.preventDefault(),this.patronWantsToKeepPlan=!1,this.dispatchEvent(new Event(`cancelPlan`))}get formId(){return`cancel-donation-form-${this.plan?.id}`}render(){return this.initialCancelRequest?this.confirmCancelation:y`
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
            .clickHandler=${(e,t)=>{if(t.isDisabled=!0,this.initialCancelRequest){this.initialCancelRequest=!1,this.patronWantsToKeepPlan=!0;return}this.initialCancelRequest=!0}}
            >Let's cancel my donation</ia-mgc-button
          >
        </div>
      </donation-form-section>

      ${this.initialCancelRequest?this.confirmCancelation:b}
    `}get confirmCancelation(){return y`
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
    `}};Kr.styles=g`
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
  `,u([C({type:Object})],Kr.prototype,`plan`,void 0),u([C({type:Boolean,reflect:!0})],Kr.prototype,`patronWantsToKeepPlan`,void 0),u([C({type:Boolean,reflect:!0})],Kr.prototype,`initialCancelRequest`,void 0),u([w(`form`)],Kr.prototype,`form`,void 0),Kr=u([S(`ia-mgc-cancel-plan`)],Kr);var q=class extends x{constructor(){super(...arguments),this.displayCreditCard=!1,this.patronEmail=``,this.elementConnected=!1}get braintreeInputs(){return{errorMessage:this.querySelector(`#braintree-error-message`),number:this.querySelector(`#braintree-creditcard`),cvv:this.querySelector(`#braintree-cvv`),expirationDate:this.querySelector(`#braintree-expiration`)}}createRenderRoot(){return this}disconnectedCallback(){this.elementConnected=!1}connectedCallback(){super.connectedCallback(),console.log(`connectedCallback`,{paymentConfig:this.paymentConfig}),this.elementConnected=!0}updated(e){if(e.has(`elementConnected`)&&this.elementConnected&&this.paymentConfig){let{braintreeAuthToken:e,endpointManager:t,paymentClients:n,environment:r}=this.paymentConfig||{};!this.braintreeManager&&e&&t&&n&&r&&this.setupBraintreeManager()}this.braintreeManager&&e.has(`displayCreditCard`)&&this.displayCreditCard&&this.setupCreditCardHandler()}async validateCreditCardFields(){let e=await this.braintreeManager?.paymentProviders.creditCardHandler.get(),t=!1,n=null;try{n=await e?.tokenizeHostedFields(),t=!0}catch(t){let n=t;switch(e?.showErrorMessage(),n.code){case`HOSTED_FIELDS_FIELDS_EMPTY`:e?.markFieldErrors([M.Number,M.CVV,M.ExpirationDate]);break;case`HOSTED_FIELDS_FIELDS_INVALID`:break;case`HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE`:break;case`HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED`:e?.markFieldErrors([M.CVV]);break;case`HOSTED_FIELDS_FAILED_TOKENIZATION`:break;case`HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR`:break;default:break}}return t?n:!1}async setupCreditCardHandler(){let e=await this.braintreeManager?.paymentProviders.creditCardHandler.get();try{await e?.tokenizeHostedFields()}catch{}e?.removeFieldErrors([M.Number,M.CVV,M.ExpirationDate])}render(){return y` <div>${this.creditCardTemplate}</div> `}lightDomCSS(){return g`
      contact-form form badged-input {
        width: 100%;
      }

      #ia-mgc-cc-area .braintree-input {
        width: 100%;
        display: block;
        height: stretch;
        height: -webkit-fill-available;
      }
    `}get creditCardTemplate(){return y`
      <div id="ia-mgc-cc-area" style="border: 1px sold red;">
        <style>
          ${this.lightDomCSS()}
        </style>
        <div id="braintree-error-message"></div>
        <div class="braintree-row">
          <badged-input
            .icon=${Ar}
            ?required=${!0}
            class="creditcard"
          >
            <div class="braintree-input" id="braintree-creditcard"></div>
          </badged-input>
        </div>
        <div class="braintree-row">
          <badged-input
            .icon=${jr}
            ?required=${!0}
            class="expiration"
          >
            <div class="braintree-input" id="braintree-expiration"></div>
          </badged-input>
          <badged-input .icon=${Mr} ?required=${!0} class="cvv">
            <div class="braintree-input" id="braintree-cvv"></div>
          </badged-input>
        </div>
      </div>
    `}async setupBraintreeManager(){this.braintreeManager=new Ln({paymentClients:this.paymentConfig?.paymentClients??{},endpointManager:this.paymentConfig?.endpointManager,authorizationToken:this.paymentConfig?.braintreeAuthToken??``,venmoProfileId:this.paymentConfig?.venmoProfileId,googlePayMerchantId:this.paymentConfig?.googlePayMerchantId,hostedFieldConfig:{hostedFieldStyle:{},hostedFieldFieldOptions:{number:{selector:`#braintree-creditcard`,placeholder:`Card number`},cvv:{selector:`#braintree-cvv`,placeholder:`CVC`},expirationDate:{selector:`#braintree-expiration`,placeholder:`MM / YY`}},hostedFieldContainer:new Rn({number:this.braintreeInputs.number,cvv:this.braintreeInputs.cvv,expirationDate:this.braintreeInputs.expirationDate,errorContainer:this.braintreeInputs.errorMessage})},hostingEnvironment:this.paymentConfig?.environment,referrer:window.location.href,loggedInUser:this.patronEmail,origin:window.location.origin}),this.braintreeManager.on(`paymentProvidersHostedFieldsRetry`,e=>{let t=new CustomEvent(`paymentProvidersHostedFieldsRetry`,{detail:{retryNumber:e}});this.dispatchEvent(t)}),this.braintreeManager.on(`paymentProvidersHostedFieldsFailed`,e=>{let t=new CustomEvent(`paymentProvidersHostedFieldsFailed`,{detail:{error:e}});this.dispatchEvent(t)}),this.dispatchEvent(new Event(`BraintreeManagerSetupComplete`))}get contactForm(){return this.querySelector(`form[name="contact-form"]`)}async setupPaymentHandlers(){(await this.braintreeManager?.paymentProviders.creditCardHandler.get())?.hideErrorMessage()}};u([C({type:Object})],q.prototype,`plan`,void 0),u([C({type:Boolean,reflect:!0})],q.prototype,`displayCreditCard`,void 0),u([C({type:String})],q.prototype,`patronEmail`,void 0),u([C({type:Object})],q.prototype,`paymentConfig`,void 0),u([C({type:Object})],q.prototype,`braintreeManager`,void 0),u([Qt()],q.prototype,`elementConnected`,void 0),q=u([S(`ia-mgc-braintree-manager`)],q);var qr=class{constructor(e){this.paymentMethodInfo=e.paymentMethodInfo,this.donorContactInfo=e.donorContactInfo,this.paymentProvider=e.paymentProvider??`unknown`}},J=class extends x{constructor(){super(...arguments),this.paymentConfig={braintreeAuthToken:``,endpointManager:void 0,paymentClients:void 0,environment:`Development`,venmoProfileId:``,googlePayMerchantId:``,referrer:``,origin:``},this.patronEmail=``,this.currentlyEditing=!1,this.newPaymentMethod=``,this.selectedPaymentProvider=``,this.paymentSelectorFirstUpdated=!1,this.updateMessage=``,this.updateStatus=``}createRenderRoot(){return this}submitPaymentMethodChange(e){e.preventDefault()}clearStatusMessaging(){this.updateMessage=``,this.updateStatus=``}async paymentMethodUpdated(e){if(this.updateStatus=e,this.updateMessage=e===`success`?`Payment method updated`:`Failed to update date, please try again`,e===`success`){this.currentlyEditing=!1,this.selectedPaymentProvider=``;return}this.updateRequestButton.isDisabled=!1}get updateRequestButton(){return this.querySelector(`ia-mgc-button#edit-plan-payment-method-submit`)}get contactFormElement(){return this.querySelector(`contact-form`)}get contactFormSection(){let e=this.selectedPaymentProvider===k.Venmo?`Help us stay in touch`:`Enter payment information`,t=this.selectedPaymentProvider===k.CreditCard||this.selectedPaymentProvider===k.Venmo;return console.log(`contactFormSectioncontactFormSection`,{displayContactForm:t}),y`
      <donation-form-section
        badgemode="hidebadge"
        headline=${e}
        id="contactFormSection"
      >
        <div class="credit-card-fields">
          <slot
            style="
              display: block;
              width: 100%;
              border: 1px solid blue;
              height: inherit;
          "
          ></slot>
        </div>
      </donation-form-section>
    `}get paymentFormSection(){return y``}get creditCardElement(){return this.querySelector(`contact-form`)}get braintreeManagerElement(){return this.querySelector(`ia-mgc-braintree-manager`)}render(){let e=this.selectedPaymentProvider===k.CreditCard||this.selectedPaymentProvider===k.Venmo,t=this.selectedPaymentProvider===k.CreditCard;return console.log(`selectedPaymentProvider`,{selectedPaymentProvider:this.selectedPaymentProvider}),y`
      <style>
        ${this.styles}
      </style>
      <donation-form-section badgemode="hidebadge" headline="Payment method">
        ${this.currentlyEditing?b:y`<ia-mgc-form-section-info
              @editingRequested=${()=>{this.currentlyEditing=!0,this.clearStatusMessaging()}}
              ><span>
                ${this.plan?.payment?.paymentMethodType===`creditCard`?`Credit Card`:this.plan?.payment?.paymentMethodType}:
                ${this.plan?.payment?.cardType} - ${this.plan?.payment?.last4}
              </span></ia-mgc-form-section-info
            >`}
        ${this.currentlyEditing?y`
            <form id="edit-plan-payment-method" @submit=${this.submitPaymentMethodChange}>
              <payment-selector
                .paymentProviders=${this.braintreeManager?.paymentProviders}
                @firstUpdated=${()=>{this.paymentSelectorFirstUpdated=!0}}
                @creditCardSelected=${()=>{this.selectedPaymentProvider=k.CreditCard}}
                @venmoSelected=${()=>{this.selectedPaymentProvider=k.Venmo}}
                @applePaySelected=${()=>{this.selectedPaymentProvider=k.ApplePay}}
                @googlePaySelected=${()=>{this.selectedPaymentProvider=k.GooglePay}}
                @paypalBlockerSelected=${()=>{this.selectedPaymentProvider=`paypalBlocker`}}
                @resetPaymentMethod=${async()=>{this.selectedPaymentProvider=``}}
                tabindex="0"
              >
                <slot name="paypal-button" slot="paypal-button"></slot>
              </payment-selector>

              <div class="${e?``:`hidden`}">
                <contact-form .donorEmail=${this.patronEmail}></contact-form>
              </div>
              

              <ia-mgc-braintree-manager
                class="${t?``:`hidden`}"
                .displayCreditCard=${this.selectedPaymentProvider===k.CreditCard}
                .plan=${this.plan}
                .paymentConfig=${this.paymentConfig}
                @BraintreeManagerSetupComplete=${()=>{console.log(`BraintreeManagerSetupComplete`)}}
              ></ia-mgc-braintree-manager>

              <ia-mgc-button
                id="edit-plan-payment-method-cancel"
                class="secondary"
                .clickHandler=${()=>{this.currentlyEditing=!1,this.selectedPaymentProvider=``,this.clearStatusMessaging()}}
                >Cancel</ia-mgc-button
              >
              <ia-mgc-button
                id="edit-plan-payment-method-submit"
                class="primary"
                type="submit"
                .isDisabled=${!this.selectedPaymentProvider}
                .clickHandler=${async(e,t)=>{console.log({iaButton:t,event:e});let n=t;if(n.isDisabled=!0,!this.creditCardElement?.reportValidity()){n.isDisabled=!1;return}let r=await this.braintreeManagerElement?.validateCreditCardFields();if(!r){n.isDisabled=!1;return}let i=new qr({paymentMethodInfo:r,donorContactInfo:this.contactFormElement?.donorContactInfo,paymentProvider:this.selectedPaymentProvider});this.dispatchEvent(new CustomEvent(`UpdatePaymentMethod`,{detail:{newPaymentMethodRequest:i}}))}}
                >Update payment method</ia-mgc-button
              >
              <ia-mgc-update-status .status=${this.updateStatus}
                >${this.updateMessage}</ia-mgc-update-status
              ></ia-mgc-form-section-info>
              <div class="secure-process-note">
                ${Mr} Your payment will be securely processed
              </div>
            </form>
          `:b}
      </donation-form-section>
    `}get styles(){return g`
      payment-selector {
        display: block;
        margin-bottom: 5px;
        padding-bottom: 10px;
      }

      ia-mgc-braintree-manager {
        display: block;
        margin: 10px 0;
      }

      .secure-process-note {
        margin-top: 0.5em;
        font-size: 0.75em;
      }

      .secure-process-note svg {
        width: 1.2rem;
        height: 1.5rem;
        vertical-align: bottom;
      }

      .hidden {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }
    `}};u([C({type:Object})],J.prototype,`plan`,void 0),u([C({type:Object})],J.prototype,`paymentConfig`,void 0),u([C({type:String})],J.prototype,`patronEmail`,void 0),u([C({type:Boolean,reflect:!0})],J.prototype,`currentlyEditing`,void 0),u([C({type:String,reflect:!0})],J.prototype,`newPaymentMethod`,void 0),u([C({type:Object})],J.prototype,`braintreeManager`,void 0),u([C({type:String,reflect:!0})],J.prototype,`selectedPaymentProvider`,void 0),u([C({type:Boolean})],J.prototype,`paymentSelectorFirstUpdated`,void 0),u([C({type:String})],J.prototype,`updateMessage`,void 0),u([C({type:String})],J.prototype,`updateStatus`,void 0),J=u([S(`ia-mgc-edit-payment-method`)],J);var Y=class extends x{constructor(){super(...arguments),this.patronEmail=``,this.canEditPaymentMethod=!1,this.paymentConfig={referrer:``,origin:``,braintreeAuthToken:``,venmoProfileId:``,googlePayMerchantId:``,environment:T.Development,paymentClients:void 0,endpointManager:void 0}}createRenderRoot(){return this}paymentMethodUpdates(e){this.querySelector(`ia-mgc-edit-payment-method`).paymentMethodUpdated(e)}amountUpdates(e){this.querySelector(`ia-mgc-edit-plan-amount`).amountUpdated(e)}dateUpdates(e){this.querySelector(`ia-mgc-edit-date`).dateUpdated(e)}render(){return y`
      <section class="mgc-edit-plan">
        <ia-mgc-edit-plan-amount
          .plan=${this.plan}
          @updateAmount=${e=>{var t;let{amount:n,baseAmount:r,coverFees:i,feeCovered:a}=e.detail;this.plan&&((t=this.updateAmountHandler)==null||t.call(this,this.plan,{amount:n,baseAmount:r,coverFees:i,feeCovered:a}))}}
        ></ia-mgc-edit-plan-amount>
        ${this.canEditPaymentMethod?y`
              <hr />
              <ia-mgc-edit-payment-method
                .plan=${this.plan}
                .patronEmail=${this.patronEmail}
                .paymentConfig=${this.paymentConfig}
                @UpdatePaymentMethod=${e=>{let{newPaymentMethodRequest:t}=e.detail;this.plan&&this.dispatchEvent(new CustomEvent(`UpdatePaymentMethod`,{detail:{plan:this.plan,newPaymentMethodRequest:t}}))}}
              >
              </ia-mgc-edit-payment-method>
            `:``}
        <hr />
        <ia-mgc-edit-date
          @updateDate=${e=>{let{newDate:t}=e.detail;this.plan&&this.dispatchEvent(new CustomEvent(`updateDate`,{detail:{plan:this.plan,newDate:t}}))}}
          .plan=${this.plan}
        ></ia-mgc-edit-date>
        <hr />
        <ia-mgc-cancel-plan
          .plan=${this.plan}
          @cancelPlan=${()=>{this.dispatchEvent(new Event(`cancelPlan`))}}
        ></ia-mgc-cancel-plan>
        <hr />
        <p class="email-edit-plan">
          Need to update your plan further? Please email us at
          <a href=${this.mailToText()}>donations@archive.org</a>.
        </p>
      </section>
    `}mailToText(){return`mailto:donations@archive.org?subject=I'd like to update my monthly donation`}};u([C({type:Object})],Y.prototype,`plan`,void 0),u([C({type:String})],Y.prototype,`patronEmail`,void 0),u([C({type:Boolean})],Y.prototype,`canEditPaymentMethod`,void 0),u([C({type:Object})],Y.prototype,`updateAmountHandler`,void 0),u([C({type:Object})],Y.prototype,`paymentConfig`,void 0),u([w(`#braintree-creditcard`)],Y.prototype,`braintreeNumberInput`,void 0),u([w(`#braintree-expiration`)],Y.prototype,`braintreeExpirationDateInput`,void 0),u([w(`#braintree-cvv`)],Y.prototype,`braintreeCVVInput`,void 0),u([w(`#braintree-error-message`)],Y.prototype,`braintreeErrorMessage`,void 0),Y=u([S(`ia-mgc-edit-plan`)],Y);var Jr;(function(e){e.welcome=`ShowWelcome`,e.receipts=`ShowReceipts`,e.plans=`ShowPlans`,e.editPlan=`ShowEditForm`})(Jr||={});var X=class extends x{constructor(){super(...arguments),this.patronName=``,this.patronEmail=``,this.canEditPaymentMethod=!1,this.receipts=[],this.updates=[],this.plans=[],this.viewToDisplay=`welcome`,this.canEdit=!0,this.paymentConfig={referrer:``,origin:``,braintreeAuthToken:``,venmoProfileId:``,googlePayMerchantId:``,environment:T.Development,paymentClients:void 0,endpointManager:{}}}createRenderRoot(){return this}updated(e){e.has(`plans`)&&(this.viewToDisplay=this.plans.length?`plans`:`welcome`)}get receiptListElement(){return this.querySelector(`ia-mgc-receipts`)}get editFormElement(){return this.querySelector(`ia-mgc-edit-plan`)}updateReceived(e){this.updates.unshift(e);let{plan:t,donationId:n=``}=e,r=t?.id??n;if(e.action===`paymentMethodUpdate`){this.editFormElement.paymentMethodUpdates(e.status);return}if(e.action===`amountUpdate`){this.editFormElement.amountUpdates(e.status);return}if(e.action===`dateUpdate`){this.editingThisPlan=t,this.editFormElement.dateUpdates(e.status);return}if(e.action===`cancel`||t?.hasBeenCancelled){this.editingThisPlan=void 0,this.viewToDisplay=`plans`;return}this.receiptListElement.emailSent({id:r,emailStatus:e.status})}render(){let e=this.viewToDisplay===`editPlan`&&this.editingThisPlan;return y`
      ${this.sectionTitle}
      ${e?y`<ia-mgc-edit-plan
            .canEditPaymentMethod=${this.canEditPaymentMethod}
            .patronEmail=${this.patronEmail}
            .plan=${this.editingThisPlan}
            .paymentConfig=${this.paymentConfig}
            @cancelPlan=${()=>{this.dispatchEvent(new CustomEvent(`cancelPlan`,{detail:{plan:this.editingThisPlan}}))}}
            .updateAmountHandler=${(e,t)=>{console.log(`updateAmount`,e,{...t}),this.dispatchEvent(new CustomEvent(`updateAmount`,{detail:{plan:e,amountOptions:t}}))}}
            @updateDate=${e=>{let{newDate:t}=e.detail;console.log(`updateDate`,t),this.dispatchEvent(new CustomEvent(`updateDate`,{detail:{plan:this.editingThisPlan,newDate:t}}))}}
            @UpdatePaymentMethod=${e=>{let{newPaymentMethodRequest:t}=e.detail;console.log(`UpdatePaymentMethod`,t),console.warn(`UPDATE PAYMENT METHOD`,{plan:this.editingThisPlan,newPaymentMethodRequest:t}),this.dispatchEvent(new CustomEvent(`UpdatePaymentMethod`,{detail:{plan:this.editingThisPlan,newPaymentMethodRequest:t}}))}}
          >
          </ia-mgc-edit-plan>`:this.nonEditView}
    `}get sectionTitle(){let e=``,t=``,n=y``,r=y`
      <ia-mgc-button
        class="link slim"
        .clickHandler=${async()=>{this.viewToDisplay=`receipts`,await this.updateComplete,this.dispatchEvent(new Event(Jr.receipts))}}
      >
        View recent donation history
      </ia-mgc-button>
    `,i=this.receipts.length&&(this.viewToDisplay===`plans`||this.viewToDisplay===`welcome`);switch(this.viewToDisplay){case`receipts`:e=`Recent donations`,t=`default`,n=y`<ia-mgc-button
          class="primary"
          id="close-receipts"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?`plans`:`welcome`;let e=this.plans.length?Jr.plans:Jr.welcome;this.dispatchEvent(new Event(e)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;case`editPlan`:e=`Monthly Giving Circle`,t=`default`,n=y`<ia-mgc-button
          class="primary"
          id="close-edit-plan"
          .clickHandler=${async()=>{this.viewToDisplay=this.plans.length?`plans`:`welcome`;let e=this.plans.length?Jr.plans:Jr.welcome;this.dispatchEvent(new Event(e)),this.updates=[],await this.updateComplete}}
        >
          Back to account settings
        </ia-mgc-button>`;break;default:e=`Monthly Giving Circle`,t=`heart`,i&&(n=r);break}return y`
      <ia-mgc-title titleStyle=${t}>
        <span slot="title">${e}</span>
        <span slot="action">${n}</span>
      </ia-mgc-title>
    `}get nonEditView(){return this.viewToDisplay===`receipts`?y`
        <ia-mgc-receipts
          .receipts=${this.receipts}
          @EmailReceiptRequest=${e=>{console.log(`EmailReceiptRequest`,e.detail),this.dispatchEvent(new CustomEvent(`EmailReceiptRequest`,{detail:{...e.detail}}))}}
        ></ia-mgc-receipts>
      `:y`
      ${this.viewToDisplay===`plans`&&this.plans.length?y`
            <ia-mgc-plans
              @editThisPlan=${async e=>{this.editingThisPlan=e.detail.plan,this.viewToDisplay=`editPlan`,this.dispatchEvent(new Event(Jr.editPlan)),await this.updateComplete}}
              .plans=${this.plans}
              .canEdit=${this.canEdit}
            ></ia-mgc-plans>
          `:y`<ia-mgc-welcome
            .patronName=${this.patronName}
          ></ia-mgc-welcome>`}
    `}};u([C({type:String})],X.prototype,`patronName`,void 0),u([C({type:String})],X.prototype,`patronEmail`,void 0),u([C({type:Boolean})],X.prototype,`canEditPaymentMethod`,void 0),u([C({type:Array})],X.prototype,`receipts`,void 0),u([C({type:Array})],X.prototype,`updates`,void 0),u([C({type:Array})],X.prototype,`plans`,void 0),u([C({type:Object})],X.prototype,`editingThisPlan`,void 0),u([C({type:String,reflect:!0})],X.prototype,`viewToDisplay`,void 0),u([C({type:Boolean,reflect:!0})],X.prototype,`canEdit`,void 0),u([C({type:Object})],X.prototype,`paymentConfig`,void 0),X=u([S(`ia-monthly-giving-circle`)],X);var Yr=class{constructor(e){this.receipt=e}get amountFormatted(){let e=this.receipt.total_amount.toFixed(2),t=this.receipt.currency??`CURR not found`;return e?`${t} ${this.currencySymbol}${e}`:`no amount found, can't find total_amount or net_amount`}get amount(){return this.receipt.total_amount.toFixed(2)}get isTest(){return this.receipt.isTest??!1}get id(){return this.receipt.token??`no token found`}get date(){return this.receipt.date??`no date found`}get currencySymbol(){return this.receipt.currency===`USD`?`$`:``}},Xr=class{constructor(e){this.plan=e,this.currency=e.currency??`USD`}get id(){return this.plan.token}get currencySymbol(){return this.currency===`USD`?`$`:``}get amount(){return this.plan.amount}get amountFormatted(){return this.plan.amount.toFixed(2)}get payment(){return this.plan.btdata}setAmount(e){this.plan.oldAmount=this.plan.amount,this.plan.amount=e}get nextBillingDate(){return this.payment?.nextBillingDate?.date??``}setNextBillingDate(e){this.payment&&(this.payment.nextBillingDate.oldDate=this.payment.nextBillingDate.date,this.payment.nextBillingDate.date=e)}get nextBillingDateLocale(){let e=this.payment?.nextBillingDate.date??``;return e?new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`}):`not found`}get lastBillingDateLocale(){return this.payment?.lastBillingDate.date?new Date(this.payment.lastBillingDate.date).toLocaleDateString(void 0,{year:`numeric`,month:`short`,day:`numeric`})??`not found`:``}get hasBeenCancelled(){return this.plan.isCancelled===!0}get isTest(){return this.plan.is_test}cancelPlan(){this.plan.isCancelled=!0}setNewProcessorId(e){let t=this.plan.processor_id;this.plan.processor_id=e,this.plan.oldProcessorId=t}setNewPaymentMethod(e){let t=this.payment,n={...this.plan.btdata,...e.paymentMethodInfo.details,last4:e.paymentMethodInfo.details.lastFour??`unknown`};this.plan.old_btData=t,this.plan.btdata=n}},Z=[],Zr=new Date;Zr.setDate(Zr.getDate()+25),Zr.setMinutes(0),Zr.setSeconds(0),Zr.setMilliseconds(0),console.log(`nextPaymentIn25Days`,Zr.toISOString());var Qr=new Date;Qr.setMinutes(0),Qr.setSeconds(0),Qr.setMilliseconds(0),Qr.setDate(1),console.log(`lastPaymentInTheSameMonth`,Qr.toISOString());var $r=new Date;$r.setMonth($r.getMonth()+1);var ei=new Date($r);ei.setMinutes(0),ei.setSeconds(0),ei.setMilliseconds(0),ei.setDate(1),console.log(`nextPaymentFirstOfMonth`,ei.toISOString()),new Date().setHours(0,0,0,0);var ti=new Date;ti.setHours(0,0,0,0),ti.setDate(0);var ni=new Date;ni.setHours(0,0,0,0),ni.setMonth(ni.getMonth()+1),ni.setDate(0);var ri={41:{token:`Acbdcdcadsfdasf.1234alphanumeric.3foobarXyZ`,amount:10.3,start_date:`2024-05-22 00:00:00`,is_test:!0,btdata:{billingDayOfMonth:22,lastBillingDate:{date:ti.toISOString(),timezone_type:3,timezone:`UTC`},nextBillingDate:{date:ni.toISOString(),timezone_type:3,timezone:`UTC`},status:`Active`,paymentMethodType:`Paypal`,last4:null,cardType:null,expirationMonth:null,expirationYear:null,paypalEmail:`donations-buyer@archive.org`}},23764:{token:`Acbdcdcadsfdasf.1234alphanumeric.3foobar`,amount:2.5,start_date:`2022-12-09 00:00:00`,is_test:!0,btdata:{billingDayOfMonth:9,lastBillingDate:{date:Qr.toISOString(),timezone_type:3,timezone:`UTC`},nextBillingDate:{date:ei.toISOString(),timezone_type:3,timezone:`UTC`},status:`Active`,paymentMethodType:`creditCard`,last4:`1111`,cardType:`Visa`,expirationMonth:`12`,expirationYear:`2023`}},35406:{token:`Acbdcdcadsfdasf.1234alphanumeric.3foobar444999sparklingCider`,amount:5,currency:`USD`,start_date:`2024-07-01 00:00:00`,is_test:!0,btdata:{billingDayOfMonth:22,nextBillingDate:{date:`2024-08-22 00:00:00.000000`,timezone_type:3,timezone:`UTC`},status:`Active`,paymentMethodType:`Venmo`,last4:null,cardType:null,expirationMonth:null,expirationYear:null,venmoUsername:`venmojoe`}}},ii=Object.keys(ri).map(e=>new Xr(ri[e])),ai=[new Yr({currency:`USD`,total_amount:1,net_amount:1,fee_amount:0,fee_covered:!1,date:new Date(`2019-01-22 14:26:34`).toLocaleString(`US-EN`,{year:`numeric`,month:`short`,day:`numeric`}),donor:`John Doe`,paymentMethod:`Credit Card`,status:`Completed`,id:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA`,token:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA`,is_test:!1}),new Yr({currency:`USD`,net_amount:9999.99,total_amount:9999.99,fee_amount:0,fee_covered:!1,date:new Date(`2019-01-22 14:26:34`).toLocaleString(`US-EN`,{year:`numeric`,month:`short`,day:`numeric`}),donor:`John Doe`,paymentMethod:`Credit Card`,status:`Completed`,id:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA`,token:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJtYWlsc3luYyIsImlhdCI6MTczNzk3MTgyNy45MDY1NDksIm5iZiI6MTczNzk3MTc2Ny45MDY1NDksImV4cCI6MTczNzk3MjQyNy45MDY1NDksImtleSI6IjEwOTY4MjEiLCJ1c2VyIjoiQGlzYS1hdC10aGUtYXJjaGl2ZSJ9.pMbayUlFgRhm3wDoJG1IPoltliTHDq0xH2W369JtdQA`,is_test:!1}),new Yr({currency:`USD`,net_amount:100,total_amount:105.86,fee_amount:5.86,fee_covered:!0,date:new Date(`2022-09-22 14:26:34`).toLocaleString(`US-EN`,{year:`numeric`,month:`short`,day:`numeric`}),donor:`John Doe`,paymentMethod:`Credit Card`,status:`Completed`,id:`foo-id-2`,token:`foo-token-2`,is_test:!0}),new Yr({currency:`USD`,net_amount:100,total_amount:222.88,fee_amount:122.88,date:new Date(`2023-12-23 14:26:34`).toLocaleString(`US-EN`,{year:`numeric`,month:`short`,day:`numeric`}),donor:`John Doe`,paymentMethod:`Credit Card`,status:`Completed`,id:`foo-id-3`,token:`foo-token-3`,is_test:!1})],oi={referrer:``,origin:``,braintreeAuthToken:`sandbox_x634jsj7_7zybks4ybp63pbmd`,venmoProfileId:`1953896702662410263`,googlePayMerchantId:``,environment:`dev`,paymentClients:new pn(new e,T.Development),endpointManager:{submitData:async e=>{},donationSuccessful:e=>{}}},si=!0,Q=document.getElementById(`interaction-status-area`),ci=()=>Math.floor(Math.random()+.5),li=()=>document.getElementById(`force-successful-requests`).checked?1:ci(),$=document.querySelector(`ia-monthly-giving-circle`);$.paymentConfig=oi,$.receipts=ai,$.plans=ii,$.addEventListener(`EmailReceiptRequest`,e=>{let{donation:t}=e.detail,n=li()===1,r=n?`success`:`fail`,i=n?1500:5e3;Q.innerText=`Email receipt request for donation ${t.id} will return ${r} in ${i} ms.`;let a={message:r===`success`?`Email receipt sent`:`Email receipt failed`,status:r,donationId:t.id};Z=[a,...Z],setTimeout(()=>{$.updateReceived(a),console.log(`EmailReceiptRequest index.html ----`,a),Q.innerText=``},i)}),$.addEventListener(`cancelPlan`,async e=>{let{plan:t}=e.detail;$.plans=$.plans.map(e=>(e.plan.token===t.plan.token&&(console.log(`p 2 plan`,e,t),e.cancelPlan()),e)),await $.updateComplete,console.log(`plan cancelled & plan list updated`,$.plans)}),$.addEventListener(`updateAmount`,async e=>{let{plan:t,amountOptions:n}=e.detail,r=li()===1,i=r?`success`:`fail`,a=r?1500:5e3;Q.innerText=`Amount Update Request received: will return ${i} in ${a} ms - Details: ${JSON.stringify(n)}`;let o=i===`success`?`Amount updated`:`Amount failed to update`;r&&t.setAmount(n.amount);let s={message:o,status:i,plan:t,donationId:t.id,action:`amountUpdate`};Z=[s,...Z],setTimeout(()=>{$.updateReceived(s),console.log(`Amount Update Request --- index.html ----`,s),Q.innerText=``},a)}),$.addEventListener(`updateDate`,e=>{let{newDate:t,plan:n}=e.detail,r=li()===1,i=r?`success`:`fail`,a=r?1500:5e3;Q.innerText=`Updating next billing date for plan: ${t}, plan: ${JSON.stringify(n.id)} -- Update will return ${i} in ${a} ms`;let o=i===`success`?`Date updated`:`Date failed to update`;r&&(n.setNextBillingDate(t),n.setNewProcessorId(`new-processor_id@1`));let s={message:o,status:i,plan:n,donationId:n.id,action:`dateUpdate`};Z=[s,...Z],setTimeout(()=>{$.updateReceived(s),console.log(`Amount Update Request --- index.html ----`,s),Q.innerText=``},a)}),$.addEventListener(`UpdatePaymentMethod`,e=>{let{plan:t,newPaymentMethodRequest:n}=e.detail,r=li()===1,i=r?`success`:`fail`,a=r?1500:4e3;Q.innerText=`Updating payment method for plan: ${t?t.id:`no plan`} -- Update will return ${i} in ${a} ms`;let o=i===`success`?`Payment method updated`:`Payment method failed to update`;r&&t&&(console.log(`demo - setting new payment method`,n),t.setNewPaymentMethod(n));let s={message:o,status:i,plan:t,donationId:t?t.id:null,action:`paymentMethodUpdate`};Z=[s,...Z],setTimeout(()=>{$.updateReceived(s),console.log(`Amount Update Request --- index.html ----`,s),Q.innerText=``},a)}),document.getElementById(`toggle-receipts`).addEventListener(`click`,async()=>{if(si){$.receipts=[],si=!1;return}$.receipts=ai,await $.updateComplete,si=!0}),document.getElementById(`clear-updates`).addEventListener(`click`,async()=>{Z=[],$.updates=Z,await $.updateComplete}),document.getElementById(`toggle-plans`).addEventListener(`click`,async()=>{$.plans=$.plans.length?[]:ii,await $.updateComplete}),document.getElementById(`toggle-prefilled-email`).addEventListener(`click`,async()=>{$.patronEmail=$.patronEmail?``:`you@thisemail.com`,await $.updateComplete}),document.getElementById(`toggle-edit-payment-method`).addEventListener(`click`,async()=>{$.canEditPaymentMethod=!$.canEditPaymentMethod,await $.updateComplete});