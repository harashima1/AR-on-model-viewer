import{A as Ia,a as Oa,N as La,D as Fa,C as st,S as ka,b as Da,V as ct,c as K,L as Q,d as Nr,O as Vr,H as Pi,F as Mi,M as gs,P as Ni,W as Vi,R as ls,U as cs,e as Pa,f as Na,g as te,h as Ur,T as Qt,i as Hr,I as Va,j as Ua,B as Ha,k as Ba,l as $i,m as za,n as ja,o as Ga,p as Gi,q as Ui,r as Wa,s as Le,$ as A,t as T,u as gt,v as ee,w as hs,x as Br,y as P,z as vs,E as zr,G as jr,J as Gr,K as Wr,Q as Te,X as qr,Y as Wi,Z as qa,_ as Xa,a0 as Ka,a1 as Qa,a2 as Za,a3 as Ya,a4 as W,a5 as qi,a6 as Ja,a7 as to,a8 as eo,a9 as so,aa as io,ab as ce,ac as no,ad as ro,ae as ao}from"./three-CZgLceFf.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oo=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}},lo=(r,t,e)=>{t.constructor.createProperty(e,r)};function S(r){return(t,e)=>e!==void 0?lo(r,t,e):oo(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var As;((As=window.HTMLSlotElement)===null||As===void 0?void 0:As.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=window,Hi=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xr=Symbol(),Xi=new WeakMap;let co=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Xr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Hi&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Xi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Xi.set(e,t))}return t}toString(){return this.cssText}};const ho=r=>new co(typeof r=="string"?r:r+"",void 0,Xr),uo=(r,t)=>{Hi?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const s=document.createElement("style"),i=ns.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)})},Ki=Hi?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ho(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Es;const ds=window,Qi=ds.trustedTypes,po=Qi?Qi.emptyScript:"",Zi=ds.reactiveElementPolyfillSupport,Ti={toAttribute(r,t){switch(t){case Boolean:r=r?po:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Kr=(r,t)=>t!==r&&(t==t||r==r),Ms={attribute:!0,type:String,converter:Ti,reflect:!1,hasChanged:Kr},Ci="finalized";let Tt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,s)=>{const i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=Ms){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Ms}static finalize(){if(this.hasOwnProperty(Ci))return!1;this[Ci]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(Ki(i))}else t!==void 0&&e.push(Ki(t));return e}static _$Ep(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return uo(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=Ms){var i;const a=this.constructor._$Ep(t,s);if(a!==void 0&&s.reflect===!0){const n=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:Ti).toAttribute(e,s.type);this._$El=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,a=i._$Ev.get(t);if(a!==void 0&&this._$El!==a){const n=i.getPropertyOptions(a),o=typeof n.converter=="function"?{fromAttribute:n.converter}:((s=n.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?n.converter:Ti;this._$El=a,this[a]=o.fromAttribute(e,n.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||Kr)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,a)=>this[a]=i),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var a;return(a=i.hostUpdate)===null||a===void 0?void 0:a.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};Tt[Ci]=!0,Tt.elementProperties=new Map,Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},Zi==null||Zi({ReactiveElement:Tt}),((Es=ds.reactiveElementVersions)!==null&&Es!==void 0?Es:ds.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $s;const us=window,ne=us.trustedTypes,Yi=ne?ne.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ri="$lit$",mt=`lit$${(Math.random()+"").slice(9)}$`,Qr="?"+mt,mo=`<${Qr}>`,Rt=document,Ce=()=>Rt.createComment(""),Re=r=>r===null||typeof r!="object"&&typeof r!="function",Zr=Array.isArray,fo=r=>Zr(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ts=`[ 	
\f\r]`,he=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ji=/-->/g,tn=/>/g,wt=RegExp(`>|${Ts}(?:([^\\s"'>=/]+)(${Ts}*=${Ts}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),en=/'/g,sn=/"/g,Yr=/^(?:script|style|textarea|title)$/i,go=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),ys=go(1),re=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),nn=new WeakMap,Ct=Rt.createTreeWalker(Rt,129,null,!1);function Jr(r,t){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yi!==void 0?Yi.createHTML(t):t}const vo=(r,t)=>{const e=r.length-1,s=[];let i,a=t===2?"<svg>":"",n=he;for(let o=0;o<e;o++){const l=r[o];let c,p,h=-1,d=0;for(;d<l.length&&(n.lastIndex=d,p=n.exec(l),p!==null);)d=n.lastIndex,n===he?p[1]==="!--"?n=Ji:p[1]!==void 0?n=tn:p[2]!==void 0?(Yr.test(p[2])&&(i=RegExp("</"+p[2],"g")),n=wt):p[3]!==void 0&&(n=wt):n===wt?p[0]===">"?(n=i??he,h=-1):p[1]===void 0?h=-2:(h=n.lastIndex-p[2].length,c=p[1],n=p[3]===void 0?wt:p[3]==='"'?sn:en):n===sn||n===en?n=wt:n===Ji||n===tn?n=he:(n=wt,i=void 0);const u=n===wt&&r[o+1].startsWith("/>")?" ":"";a+=n===he?l+mo:h>=0?(s.push(c),l.slice(0,h)+Ri+l.slice(h)+mt+u):l+mt+(h===-2?(s.push(void 0),o):u)}return[Jr(r,a+(r[e]||"<?>")+(t===2?"</svg>":"")),s]};class Ie{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let a=0,n=0;const o=t.length-1,l=this.parts,[c,p]=vo(t,e);if(this.el=Ie.createElement(c,s),Ct.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(i=Ct.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const d of i.getAttributeNames())if(d.endsWith(Ri)||d.startsWith(mt)){const u=p[n++];if(h.push(d),u!==void 0){const g=i.getAttribute(u.toLowerCase()+Ri).split(mt),b=/([.?@])?(.*)/.exec(u);l.push({type:1,index:a,name:b[2],strings:g,ctor:b[1]==="."?bo:b[1]==="?"?So:b[1]==="@"?_o:bs})}else l.push({type:6,index:a})}for(const d of h)i.removeAttribute(d)}if(Yr.test(i.tagName)){const h=i.textContent.split(mt),d=h.length-1;if(d>0){i.textContent=ne?ne.emptyScript:"";for(let u=0;u<d;u++)i.append(h[u],Ce()),Ct.nextNode(),l.push({type:2,index:++a});i.append(h[d],Ce())}}}else if(i.nodeType===8)if(i.data===Qr)l.push({type:2,index:a});else{let h=-1;for(;(h=i.data.indexOf(mt,h+1))!==-1;)l.push({type:7,index:a}),h+=mt.length-1}a++}}static createElement(t,e){const s=Rt.createElement("template");return s.innerHTML=t,s}}function ae(r,t,e=r,s){var i,a,n,o;if(t===re)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl;const c=Re(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((a=l==null?void 0:l._$AO)===null||a===void 0||a.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,e,s)),s!==void 0?((n=(o=e)._$Co)!==null&&n!==void 0?n:o._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=ae(r,l._$AS(r,t.values),l,s)),t}class yo{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:s},parts:i}=this._$AD,a=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Rt).importNode(s,!0);Ct.currentNode=a;let n=Ct.nextNode(),o=0,l=0,c=i[0];for(;c!==void 0;){if(o===c.index){let p;c.type===2?p=new Fe(n,n.nextSibling,this,t):c.type===1?p=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(p=new xo(n,this,t)),this._$AV.push(p),c=i[++l]}o!==(c==null?void 0:c.index)&&(n=Ct.nextNode(),o++)}return Ct.currentNode=Rt,a}v(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class Fe{constructor(t,e,s,i){var a;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(a=i==null?void 0:i.isConnected)===null||a===void 0||a}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ae(this,t,e),Re(t)?t===k||t==null||t===""?(this._$AH!==k&&this._$AR(),this._$AH=k):t!==this._$AH&&t!==re&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):fo(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==k&&Re(this._$AH)?this._$AA.nextSibling.data=t:this.$(Rt.createTextNode(t)),this._$AH=t}g(t){var e;const{values:s,_$litType$:i}=t,a=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ie.createElement(Jr(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===a)this._$AH.v(s);else{const n=new yo(a,this),o=n.u(this.options);n.v(s),this.$(o),this._$AH=n}}_$AC(t){let e=nn.get(t.strings);return e===void 0&&nn.set(t.strings,e=new Ie(t)),e}T(t){Zr(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const a of t)i===e.length?e.push(s=new Fe(this.k(Ce()),this.k(Ce()),this,this.options)):s=e[i],s._$AI(a),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class bs{constructor(t,e,s,i,a){this.type=1,this._$AH=k,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const a=this.strings;let n=!1;if(a===void 0)t=ae(this,t,e,0),n=!Re(t)||t!==this._$AH&&t!==re,n&&(this._$AH=t);else{const o=t;let l,c;for(t=a[0],l=0;l<a.length-1;l++)c=ae(this,o[s+l],e,l),c===re&&(c=this._$AH[l]),n||(n=!Re(c)||c!==this._$AH[l]),c===k?t=k:t!==k&&(t+=(c??"")+a[l+1]),this._$AH[l]=c}n&&!i&&this.j(t)}j(t){t===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class bo extends bs{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===k?void 0:t}}const wo=ne?ne.emptyScript:"";class So extends bs{constructor(){super(...arguments),this.type=4}j(t){t&&t!==k?this.element.setAttribute(this.name,wo):this.element.removeAttribute(this.name)}}class _o extends bs{constructor(t,e,s,i,a){super(t,e,s,i,a),this.type=5}_$AI(t,e=this){var s;if((t=(s=ae(this,t,e,0))!==null&&s!==void 0?s:k)===re)return;const i=this._$AH,a=t===k&&i!==k||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==k&&(i===k||a);a&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}}class xo{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}}const rn=us.litHtmlPolyfillSupport;rn==null||rn(Ie,Fe),(($s=us.litHtmlVersions)!==null&&$s!==void 0?$s:us.litHtmlVersions=[]).push("2.8.0");const ta=(r,t,e)=>{var s,i;const a=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:t;let n=a._$litPart$;if(n===void 0){const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;a._$litPart$=n=new Fe(t.insertBefore(Ce(),o),o,void 0,e??{})}return n._$AI(r),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Cs,Rs;class rs extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ta(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return re}}rs.finalized=!0,rs._$litElement$=!0,(Cs=globalThis.litElementHydrateSupport)===null||Cs===void 0||Cs.call(globalThis,{LitElement:rs});const an=globalThis.litElementPolyfillSupport;an==null||an({LitElement:rs});((Rs=globalThis.litElementVersions)!==null&&Rs!==void 0?Rs:globalThis.litElementVersions=[]).push("3.3.3");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,sa=ea&&self.XRSession.prototype.requestHitTestSource!=null,Is=self.ResizeObserver!=null,Os=self.IntersectionObserver!=null,ia=sa;(()=>{const r=navigator.userAgent||navigator.vendor||self.opera;let t=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))&&(t=!0),t})();const Ao=/android/i.test(navigator.userAgent),Eo=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Mo=/firefox/i.test(navigator.userAgent),$o=/OculusBrowser/.test(navigator.userAgent),To=Ao&&!Mo&&!$o,Co=!!(window.webkit&&window.webkit.messageHandlers),on=(()=>{if(Eo){if(Co)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const r=document.createElement("a");return!!(r.relList&&r.relList.supports&&r.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=r=>r&&r!=="null"?Io(r):null,wc=()=>{if(ia)return;const r=[];throw ea||r.push("WebXR Device API"),sa||r.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${r.join(", ")}`)},Io=r=>new URL(r,window.location.toString()).toString(),Oo=(r,t)=>{let e=null;const s=(...i)=>{e==null&&(r(...i),e=self.setTimeout(()=>e=null,t))};return s.flush=()=>{e!=null&&(self.clearTimeout(e),e=null)},s},ln=(r,t)=>{let e=null;return(...s)=>{e!=null&&self.clearTimeout(e),e=self.setTimeout(()=>{e=null,r(...s)},t)}},ws=(r,t,e)=>Math.max(t,Math.min(e,r)),Sc=(()=>{const r="model-viewer-debug-mode",t=new RegExp(`[?&]${r}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(t)})(),_c=(r=0)=>new Promise(t=>setTimeout(t,r)),Lo=(r,t,e=null)=>new Promise(s=>{function i(a){(!e||e(a))&&(s(a),r.removeEventListener(t,i))}r.addEventListener(t,i)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const Fo=.5,ko=0,Do=1,Po=1,Ne=Symbol("currentEnvironmentMap"),Ve=Symbol("currentBackground"),Ii=Symbol("updateEnvironment"),Ue=Symbol("cancelEnvironmentUpdate"),No=r=>{var t,e,s;class i extends r{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=ko,this.shadowSoftness=Do,this.exposure=Po,this.toneMapping="auto",this.skyboxHeight="0",this[t]=null,this[e]=null,this[s]=null}updated(n){super.updated(n),n.has("shadowIntensity")&&(this[f].setShadowIntensity(this.shadowIntensity*Fo),this[N]()),n.has("shadowSoftness")&&(this[f].setShadowSoftness(this.shadowSoftness),this[N]()),n.has("exposure")&&(this[f].exposure=this.exposure,this[N]()),n.has("toneMapping")&&(this[f].toneMapping=this.toneMapping==="aces"?Ia:this.toneMapping==="agx"?Oa:La,this[N]()),(n.has("environmentImage")||n.has("skyboxImage"))&&this[oe]()&&this[Ii](),n.has("skyboxHeight")&&(this[f].setGroundedSkybox(),this[N]())}hasBakedShadow(){return this[f].bakedShadows.size>0}async[(t=Ne,e=Ve,s=Ue,Ii)](){const{skyboxImage:n,environmentImage:o}=this;this[Ue]!=null&&(this[Ue](),this[Ue]=null);const{textureUtils:l}=this[C];if(l==null)return;const c=this[It].beginActivity("environment-update");try{const{environmentMap:p,skybox:h}=await l.generateEnvironmentMapAndSkybox(Ro(n),o,d=>c(ws(d,0,1)),this.withCredentials);this[Ne]!==p&&(this[Ne]=p,this.dispatchEvent(new CustomEvent("environment-change"))),h!=null?this[Ve]=h.name===p.name?p:h:this[Ve]=null,this[f].setEnvironmentAndSkybox(this[Ne],this[Ve])}catch(p){if(p instanceof Error)throw this[f].setEnvironmentAndSkybox(null,null),p}finally{c(1)}}}return St([S({type:String,attribute:"environment-image"})],i.prototype,"environmentImage",void 0),St([S({type:String,attribute:"skybox-image"})],i.prototype,"skyboxImage",void 0),St([S({type:Number,attribute:"shadow-intensity"})],i.prototype,"shadowIntensity",void 0),St([S({type:Number,attribute:"shadow-softness"})],i.prototype,"shadowSoftness",void 0),St([S({type:Number})],i.prototype,"exposure",void 0),St([S({type:String,attribute:"tone-mapping"})],i.prototype,"toneMapping",void 0),St([S({type:String,attribute:"skybox-height"})],i.prototype,"skyboxHeight",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=ys`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=ys`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=ys`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo=ys`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${Ho}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${Uo}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${Vo}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,zo=r=>{ta(Bo,r)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn,hn;const G=Symbol("retainerCount"),it=Symbol("recentlyUsed"),He=Symbol("evict"),de=Symbol("evictionThreshold"),Ls=Symbol("cache");class xc{constructor(t,e=5){this[cn]=new Map,this[hn]=[],this[Ls]=t,this[de]=e}set evictionThreshold(t){this[de]=t,this[He]()}get evictionThreshold(){return this[de]}get cache(){return this[Ls]}retainerCount(t){return this[G].get(t)||0}reset(){this[G].clear(),this[it]=[]}retain(t){this[G].has(t)||this[G].set(t,0),this[G].set(t,this[G].get(t)+1);const e=this[it].indexOf(t);e!==-1&&this[it].splice(e,1),this[it].unshift(t),this[He]()}release(t){this[G].has(t)&&this[G].set(t,Math.max(this[G].get(t)-1,0)),this[He]()}[(cn=G,hn=it,He)](){if(!(this[it].length<this[de]))for(let t=this[it].length-1;t>=this[de];--t){const e=this[it][t];this[G].get(e)===0&&(this[Ls].delete(e),this[it].splice(t,1))}}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=(r,t)=>({type:"number",number:r,unit:t}),Bi=(()=>{const r={};return e=>{const s=e;if(s in r)return r[s];const i=[];let a=0;for(;e;){if(++a>1e3){e="";break}const n=na(e),o=n.nodes[0];if(o==null||o.terms.length===0)break;i.push(o),e=n.remainingInput}return r[s]=i}})(),na=(()=>{const r=/^(\-\-|[a-z\u0240-\uffff])/i,t=/^([\*\+\/]|[\-]\s)/i,e=/^[\),]/,s="(",i="#";return a=>{const n=[];for(;a.length&&(a=a.trim(),!e.test(a));)if(a[0]===s){const{nodes:o,remainingInput:l}=dn(a);a=l,n.push({type:"function",name:{type:"ident",value:"calc"},arguments:o})}else if(r.test(a)){const o=jo(a),l=o.nodes[0];if(a=o.remainingInput,a[0]===s){const{nodes:c,remainingInput:p}=dn(a);n.push({type:"function",name:l,arguments:c}),a=p}else n.push(l)}else if(t.test(a))n.push({type:"operator",value:a[0]}),a=a.slice(1);else{const{nodes:o,remainingInput:l}=a[0]===i?Wo(a):Go(a);if(o.length===0)break;n.push(o[0]),a=l}return{nodes:[{type:"expression",terms:n}],remainingInput:a}}})(),jo=(()=>{const r=/[^a-z0-9_\-\u0240-\uffff]/i;return t=>{const e=t.match(r),s=e==null?t:t.substr(0,e.index),i=e==null?"":t.substr(e.index);return{nodes:[{type:"ident",value:s}],remainingInput:i}}})(),Go=(()=>{const r=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,t=/^[a-z%]+/i,e=/^(m|mm|cm|rad|deg|[%])$/;return s=>{const i=s.match(r),a=i==null?"0":i[0];s=a==null?s:s.slice(a.length);const n=s.match(t);let o=n!=null&&n[0]!==""?n[0]:null;const l=n==null?s:s.slice(o.length);return o!=null&&!e.test(o)&&(o=null),{nodes:[{type:"number",number:parseFloat(a)||0,unit:o}],remainingInput:l}}})(),Wo=(()=>{const r=/^[a-f0-9]*/i;return t=>{t=t.slice(1).trim();const e=t.match(r);return{nodes:e==null?[]:[{type:"hex",value:e[0]}],remainingInput:e==null?t:t.slice(e[0].length)}}})(),dn=r=>{const t=[];for(r=r.slice(1).trim();r.length;){const e=na(r);if(t.push(e.nodes[0]),r=e.remainingInput.trim(),r[0]===",")r=r.slice(1).trim();else if(r[0]===")"){r=r.slice(1);break}}return{nodes:t,remainingInput:r}},un=Symbol("visitedTypes");class qo{constructor(t){this[un]=t}walk(t,e){const s=t.slice();for(;s.length;){const i=s.shift();switch(this[un].indexOf(i.type)>-1&&e(i),i.type){case"expression":s.unshift(...i.terms);break;case"function":s.unshift(i.name,...i.arguments);break}}}}const yt=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=(r,t=0)=>{let{number:e,unit:s}=r;if(!isFinite(e))e=t,s="rad";else if(r.unit==="rad"||r.unit==null)return r;return{type:"number",number:(s==="deg"&&e!=null?e:0)*Math.PI/180,unit:"rad"}},pn=(r,t=0)=>{let{number:e,unit:s}=r;if(!isFinite(e))e=t,s="m";else if(r.unit==="m")return r;let i;switch(s){default:i=1;break;case"cm":i=1/100;break;case"mm":i=1/1e3;break}return{type:"number",number:i*e,unit:"m"}},Oe=(()=>{const r=e=>e,t={rad:r,deg:Ss,m:r,mm:pn,cm:pn};return(e,s=yt)=>{isFinite(e.number)||(e.number=s.number,e.unit=s.unit);const{unit:i}=e;if(i==null)return e;const a=t[i];return a==null?s:a(e)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ra,mn,fn;const le=Symbol("evaluate"),as=Symbol("lastValue");class I{constructor(){this[ra]=null}static evaluatableFor(t,e=yt){if(t instanceof I)return t;if(t.type==="number")return t.unit==="%"?new Xo(t,e):t;switch(t.name.value){case"calc":return new Zo(t,e);case"env":return new Ko(t)}return yt}static evaluate(t){return t instanceof I?t.evaluate():t}static isConstant(t){return t instanceof I?t.isConstant:!0}static applyIntrinsics(t,e){const{basis:s,keywords:i}=e,{auto:a}=i;return s.map((n,o)=>{const l=a[o]==null?n:a[o];let c=t[o]?t[o]:l;if(c.type==="ident"){const p=c.value;p in i&&(c=i[p][o])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?V(c.number/100*n.number,n.unit):(c=Oe(c,n),c.unit!==n.unit?n:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[as]==null)&&(this[as]=this[le]()),this[as]}}ra=as;const gn=Symbol("percentage"),Fs=Symbol("basis");class Xo extends I{constructor(t,e){super(),this[gn]=t,this[Fs]=e}get isConstant(){return!0}[le](){return V(this[gn].number/100*this[Fs].number,this[Fs].unit)}}const Be=Symbol("identNode");class Ko extends I{constructor(t){super(),this[mn]=null;const e=t.arguments.length?t.arguments[0].terms[0]:null;e!=null&&e.type==="ident"&&(this[Be]=e)}get isConstant(){return!1}[(mn=Be,le)](){if(this[Be]!=null)switch(this[Be].value){case"window-scroll-y":const t=window.pageYOffset,e=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:t/(e-window.innerHeight)||0,unit:null}}return yt}}const Qo=/[\*\/]/,Dt=Symbol("evaluator");class Zo extends I{constructor(t,e=yt){if(super(),this[fn]=null,t.arguments.length!==1)return;const s=t.arguments[0].terms.slice(),i=[];for(;s.length;){const a=s.shift();if(i.length>0){const n=i[i.length-1];if(n.type==="operator"&&Qo.test(n.value)){const o=i.pop(),l=i.pop();if(l==null)return;i.push(new yn(o,I.evaluatableFor(l,e),I.evaluatableFor(a,e)));continue}}i.push(a.type==="operator"?a:I.evaluatableFor(a,e))}for(;i.length>2;){const[a,n,o]=i.splice(0,3);if(n.type!=="operator")return;i.unshift(new yn(n,I.evaluatableFor(a,e),I.evaluatableFor(o,e)))}i.length===1&&(this[Dt]=i[0])}get isConstant(){return this[Dt]==null||I.isConstant(this[Dt])}[(fn=Dt,le)](){return this[Dt]!=null?I.evaluate(this[Dt]):yt}}const vn=Symbol("operator"),ks=Symbol("left"),Ds=Symbol("right");class yn extends I{constructor(t,e,s){super(),this[vn]=t,this[ks]=e,this[Ds]=s}get isConstant(){return I.isConstant(this[ks])&&I.isConstant(this[Ds])}[le](){const t=Oe(I.evaluate(this[ks])),e=Oe(I.evaluate(this[Ds])),{number:s,unit:i}=t,{number:a,unit:n}=e;if(n!=null&&i!=null&&n!=i)return yt;const o=i||n;let l;switch(this[vn].value){case"+":l=s+a;break;case"-":l=s-a;break;case"/":l=s/a;break;case"*":l=s*a;break;default:return yt}return{type:"number",number:l,unit:o}}}const Ps=Symbol("evaluatables"),bn=Symbol("intrinsics");class aa extends I{constructor(t,e){super(),this[bn]=e;const s=t[0],i=s!=null?s.terms:[];this[Ps]=e.basis.map((a,n)=>{const o=i[n];return o==null?{type:"ident",value:"auto"}:o.type==="ident"?o:I.evaluatableFor(o,a)})}get isConstant(){for(const t of this[Ps])if(!I.isConstant(t))return!1;return!0}[le](){const t=this[Ps].map(e=>I.evaluate(e));return I.applyIntrinsics(t,this[bn]).map(e=>e.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oa,la,ca,ha;const Pt=Symbol("instances"),wn=Symbol("activateListener"),Sn=Symbol("deactivateListener"),Ns=Symbol("notifyInstances"),_n=Symbol("notify"),xn=Symbol("callback");class X{constructor(t){this[xn]=t}static[Ns](){for(const t of X[Pt])t[_n]()}static[(oa=Pt,wn)](){window.addEventListener("scroll",this[Ns],{passive:!0})}static[Sn](){window.removeEventListener("scroll",this[Ns])}observe(){X[Pt].size===0&&X[wn](),X[Pt].add(this)}disconnect(){X[Pt].delete(this),X[Pt].size===0&&X[Sn]()}[_n](){this[xn]()}}X[oa]=new Set;const An=Symbol("computeStyleCallback"),da=Symbol("astWalker"),Ae=Symbol("dependencies"),ua=Symbol("onScroll");class Yo{constructor(t){this[la]={},this[ca]=new qo(["function"]),this[ha]=()=>{this[An]({relatedState:"window-scroll"})},this[An]=t}observeEffectsFor(t){const e={},s=this[Ae];this[da].walk(t,i=>{const{name:a}=i,o=i.arguments[0].terms[0];if(!(a.value!=="env"||o==null||o.type!=="ident"))switch(o.value){case"window-scroll-y":if(e["window-scroll"]==null){const l="window-scroll"in s?s["window-scroll"]:new X(this[ua]);l.observe(),delete s["window-scroll"],e["window-scroll"]=l}break}});for(const i in s)s[i].disconnect();this[Ae]=e}dispose(){for(const t in this[Ae])this[Ae][t].disconnect()}}la=Ae,ca=da,ha=ua;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=r=>{const t=r.observeEffects||!1,e=r.intrinsics instanceof Function?r.intrinsics:()=>r.intrinsics;return(s,i)=>{const a=s.updated,n=s.connectedCallback,o=s.disconnectedCallback,l=Symbol(`${i}StyleEffector`),c=Symbol(`${i}StyleEvaluator`),p=Symbol(`${i}UpdateEvaluator`),h=Symbol(`${i}EvaluateAndSync`);Object.defineProperties(s,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[p]:{value:function(){const d=Bi(this[i]);this[c]=new aa(d,e(this)),this[l]==null&&t&&(this[l]=new Yo(()=>this[h]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[h]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[r.updateHandler](d)}},updated:{value:function(d){d.has(i)&&(this[p](),this[h]()),a.call(this,d)}},connectedCallback:{value:function(){n.call(this),this.requestUpdate(i,this[i])}},disconnectedCallback:{value:function(){o.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=r=>r<.5?2*r*r:-1+(4-2*r)*r,Jo=(r,t,e=pa)=>s=>r+(t-r)*e(s),tl=(r,t)=>{const e=i=>a=>i+=a,s=t.map(e(0));return i=>{i=ws(i,0,1),i*=s[s.length-1];const a=s.findIndex(l=>l>=i),n=a<1?0:s[a-1],o=s[a];return r[a]((i-n)/(o-n))}},Zt=r=>{const t=[],e=[];let s=r.initialValue;for(let i=0;i<r.keyframes.length;++i){const a=r.keyframes[i],{value:n,frames:o}=a,l=a.ease||pa,c=Jo(s,n,l);t.push(c),e.push(o),s=n}return tl(t,e)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const el=5e3,sl=Zt({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),il=Zt({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),nl=30,rl=12,ma="0deg 75deg 105%",al="auto auto auto",ol="auto",ll=2.2,cl=["front","right","back","left"],hl=["upper-","","lower-"],dl=3e3,ul=". Use mouse, touch or arrow keys to move.",ze={AUTO:"auto"},Vs={BASIC:"basic",WIGGLE:"wiggle"},pl={NONE:"none"},En=()=>({basis:[Ss(V(nl,"deg"))],keywords:{auto:[null]}}),ml=()=>({basis:[Ss(V(rl,"deg"))],keywords:{auto:[null]}}),fa=(()=>{const r=Bi(ma)[0].terms,t=Oe(r[0]),e=Oe(r[1]);return s=>{const i=s[f].idealCameraDistance();return{basis:[t,e,V(i,"m")],keywords:{auto:[null,null,V(105,"%")]}}}})(),fl=r=>{const t=ll*r[f].boundingSphere.radius;return{basis:[V(-1/0,"rad"),V(0,"rad"),V(t,"m")],keywords:{auto:[null,null,null]}}},gl=r=>{const t=fa(r),s=new aa([],t).evaluate()[2];return{basis:[V(1/0,"rad"),V(Math.PI,"rad"),V(s,"m")],keywords:{auto:[null,null,null]}}},vl=r=>{const t=r[f].boundingBox.getCenter(new ct);return{basis:[V(t.x,"m"),V(t.y,"m"),V(t.z,"m")],keywords:{auto:[null,null,null]}}},ga=Math.PI/2,yl=Math.PI/3,bl=ga/2,wl=2*Math.PI,$=Symbol("controls"),Sl=Symbol("panElement"),Us=Symbol("promptElement"),je=Symbol("promptAnimatedContainer"),Hs=Symbol("fingerAnimatedContainers"),Ge=Symbol("deferInteractionPrompt"),Mn=Symbol("updateAria"),nt=Symbol("a11y"),$n=Symbol("updateA11y"),Tn=Symbol("updateCameraForRadius"),Nt=Symbol("cancelPrompts"),Bs=Symbol("onChange"),ue=Symbol("onPointerChange"),_t=Symbol("waitingToPromptUser"),We=Symbol("userHasInteracted"),Vt=Symbol("promptElementVisibleTime"),pe=Symbol("lastPromptOffset"),qe=Symbol("cancellationSource"),zs=Symbol("lastSpherical"),me=Symbol("jumpCamera"),js=Symbol("initialized"),fe=Symbol("maintainThetaPhi"),Cn=Symbol("syncCameraOrbit"),Rn=Symbol("syncFieldOfView"),In=Symbol("syncCameraTarget"),On=Symbol("syncMinCameraOrbit"),Ln=Symbol("syncMaxCameraOrbit"),Fn=Symbol("syncMinFieldOfView"),kn=Symbol("syncMaxFieldOfView"),_l=r=>{var t,e,s,i,a,n,o,l,c,p,h,d,u,g,b,w,M,F;class x extends r{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=ma,this.cameraTarget=al,this.fieldOfView=ol,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=dl,this.interactionPrompt=ze.AUTO,this.interactionPromptStyle=Vs.WIGGLE,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=pl.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=Fa,this.a11y=null,this[t]=this.shadowRoot.querySelector(".interaction-prompt"),this[e]=this.shadowRoot.querySelector("#prompt"),this[s]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[i]=this.shadowRoot.querySelector(".pan-target"),this[a]=0,this[n]=1/0,this[o]=!1,this[l]=!1,this[c]=st.AUTOMATIC,this[p]=new ka(this[f].camera,this[q],this[f]),this[h]=new Da,this[d]=!1,this[u]=!1,this[g]=!1,this[b]={},this[w]=()=>{const m=this[$].changeSource;this[qe]=m,m===st.USER_INTERACTION&&(this[We]=!0,this[Ge]())},this[M]=()=>{this[Mn](),this[N]();const m=this[$].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:m}}))},this[F]=m=>{this[os].classList.toggle("pointer-tumbling",m.type==="pointer-change-start")}}get inputSensitivity(){return this[$].inputSensitivity}set inputSensitivity(m){this[$].inputSensitivity=m}getCameraOrbit(){const{theta:m,phi:y,radius:E}=this[zs];return{theta:m,phi:y,radius:E,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return ft(this[C].isPresenting?this[C].arRenderer.target:this[f].getDynamicTarget())}getFieldOfView(){return this[$].getFieldOfView()}getMinimumFieldOfView(){return this[$].options.minimumFieldOfView}getMaximumFieldOfView(){return this[$].options.maximumFieldOfView}getIdealAspect(){return this[f].idealAspect}jumpCameraToGoal(){this[me]=!0,this.requestUpdate(me,!1)}resetInteractionPrompt(){this[pe]=0,this[Vt]=1/0,this[We]=!1,this[_t]=this.interactionPrompt===ze.AUTO&&this.cameraControls}zoom(m){const y=new WheelEvent("wheel",{deltaY:-30*m});this[q].dispatchEvent(y)}connectedCallback(){super.connectedCallback(),this[$].addEventListener("user-interaction",this[Nt]),this[$].addEventListener("pointer-change-start",this[ue]),this[$].addEventListener("pointer-change-end",this[ue])}disconnectedCallback(){super.disconnectedCallback(),this[$].removeEventListener("user-interaction",this[Nt]),this[$].removeEventListener("pointer-change-start",this[ue]),this[$].removeEventListener("pointer-change-end",this[ue])}updated(m){super.updated(m);const y=this[$],E=this[f];if(m.has("cameraControls")&&(this.cameraControls?(y.enableInteraction(),this.interactionPrompt===ze.AUTO&&(this[_t]=!0)):(y.disableInteraction(),this[Ge]()),this[q].setAttribute("aria-label",this[Jt])),m.has("disableZoom")&&(y.disableZoom=this.disableZoom),m.has("disablePan")&&(y.enablePan=!this.disablePan),m.has("disableTap")&&(y.enableTap=!this.disableTap),(m.has("interactionPrompt")||m.has("cameraControls")||m.has("src"))&&(this.interactionPrompt===ze.AUTO&&this.cameraControls&&!this[We]?this[_t]=!0:this[Ge]()),m.has("interactionPromptStyle")&&(this[je].style.opacity=this.interactionPromptStyle==Vs.BASIC?"1":"0"),m.has("touchAction")){const O=this.touchAction;y.applyOptions({touchAction:O}),y.updateTouchActionStyle()}m.has("orbitSensitivity")&&(y.orbitSensitivity=this.orbitSensitivity),m.has("zoomSensitivity")&&(y.zoomSensitivity=this.zoomSensitivity),m.has("panSensitivity")&&(y.panSensitivity=this.panSensitivity),m.has("interpolationDecay")&&(y.setDamperDecayTime(this.interpolationDecay),E.setTargetDamperDecayTime(this.interpolationDecay)),m.has("a11y")&&this[$n](),this[me]===!0&&Promise.resolve().then(()=>{y.jumpToGoal(),E.jumpToGoal(),this[Bs](),this[me]=!1})}async updateFraming(){const m=this[f],y=m.adjustedFoV(m.framedFoVDeg);await m.updateFraming();const E=m.adjustedFoV(m.framedFoVDeg),O=this[$].getFieldOfView()/y;this[$].setFieldOfView(E*O),this[fe]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(m,y,E){const O=this[q],j=this[Hs];if(j[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const B=new Array;B.push({x:Zt(y.x),y:Zt(y.y)});const dt=[{x:B[0].x(0),y:B[0].y(0)}];E!=null&&(B.push({x:Zt(E.x),y:Zt(E.y)}),dt.push({x:B[1].x(0),y:B[1].y(0)}));let J=performance.now();const{width:bt,height:De}=this[f],Pe=this.getBoundingClientRect(),Lt=tt=>{for(const[Ft,et]of dt.entries()){const{style:kt}=j[Ft];kt.transform=`translateX(${bt*et.x}px) translateY(${De*et.y}px)`,tt==="pointerdown"?kt.opacity="1":tt==="pointerup"&&(kt.opacity="0");const Ra={pointerId:Ft-5678,pointerType:"touch",target:O,clientX:bt*et.x+Pe.x,clientY:De*et.y+Pe.y,altKey:!0};O.dispatchEvent(new PointerEvent(tt,Ra))}},ji=()=>{const tt=this[qe];if(tt!==st.AUTOMATIC||!O.isConnected){for(const et of this[Hs])et.style.opacity="0";Lt("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:tt}})),document.removeEventListener("visibilitychange",xs);return}const Ft=Math.min(1,(performance.now()-J)/m);for(const[et,kt]of dt.entries())kt.x=B[et].x(Ft),kt.y=B[et].y(Ft);Lt("pointermove"),Ft<1?requestAnimationFrame(ji):(Lt("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:st.AUTOMATIC}})),document.removeEventListener("visibilitychange",xs))},xs=()=>{let tt=0;document.visibilityState==="hidden"?tt=performance.now()-J:J=performance.now()-tt};document.addEventListener("visibilitychange",xs),Lt("pointerdown"),this[qe]=st.AUTOMATIC,requestAnimationFrame(ji)}[(t=Us,e=je,s=Hs,i=Sl,a=pe,n=Vt,o=We,l=_t,c=qe,p=$,h=zs,d=me,u=js,g=fe,b=nt,Rn)](m){const y=this[$],E=this[f];E.framedFoVDeg=m[0]*180/Math.PI,y.changeSource=st.NONE,y.setFieldOfView(E.adjustedFoV(E.framedFoVDeg)),this[Nt]()}[Cn](m){const y=this[$];if(this[fe]){const{theta:E,phi:O}=this.getCameraOrbit();m[0]=E,m[1]=O,this[fe]=!1}y.changeSource=st.NONE,y.setOrbit(m[0],m[1],m[2]),this[Nt]()}[On](m){this[$].applyOptions({minimumAzimuthalAngle:m[0],minimumPolarAngle:m[1],minimumRadius:m[2]}),this.jumpCameraToGoal()}[Ln](m){this[$].applyOptions({maximumAzimuthalAngle:m[0],maximumPolarAngle:m[1],maximumRadius:m[2]}),this[Tn](m[2]),this.jumpCameraToGoal()}[Fn](m){this[$].applyOptions({minimumFieldOfView:m[0]*180/Math.PI}),this.jumpCameraToGoal()}[kn](m){const y=this[f].adjustedFoV(m[0]*180/Math.PI);this[$].applyOptions({maximumFieldOfView:y}),this.jumpCameraToGoal()}[In](m){const[y,E,O]=m;this[C].arRenderer.isPresenting||this[f].setTarget(y,E,O),this[$].changeSource=st.NONE,this[C].arRenderer.updateTarget(),this[Nt]()}[ht](m,y){if(super[ht](m,y),this[C].isPresenting||!this[Ot]())return;const E=this[$],O=this[f],j=performance.now();if(this[_t]&&this.loaded&&j>this[$e]+this.interactionPromptThreshold&&(this[_t]=!1,this[Vt]=j,this[Us].classList.add("visible")),isFinite(this[Vt])&&this.interactionPromptStyle===Vs.WIGGLE){const J=(j-this[Vt])/el%1,bt=sl(J),De=il(J);if(this[je].style.opacity=`${De}`,bt!==this[pe]){const Pe=bt*O.width*.05,Lt=(bt-this[pe])*Math.PI/16;this[je].style.transform=`translateX(${Pe}px)`,E.changeSource=st.AUTOMATIC,E.adjustOrbit(Lt,0,0),this[pe]=bt}}const B=E.update(m,y),dt=O.updateTarget(y);(B||dt)&&this[Bs]()}[Ge](){this[_t]=!1,this[Us].classList.remove("visible"),this[Vt]=1/0}[Tn](m){const y=Math.max(this[f].farRadius(),m),E=0,O=Math.abs(2*y);this[$].updateNearFar(E,O)}[Mn](){const{theta:m,phi:y}=this[$].getCameraSpherical(this[zs]),E=(4+Math.floor((m%wl+bl)/ga))%4,O=Math.floor(y/yl),j=cl[E],dt=`${hl[O]}${j}`,J=dt;J in this[nt]?this[ms](this[nt][J]):this[ms](`View from stage ${dt}`)}get[Jt](){let m=ul;return"interaction-prompt"in this[nt]&&(m=`. ${this[nt]["interaction-prompt"]}`),super[Jt].replace(/\.$/,"")+(this.cameraControls?m:"")}async[fs](m){const y=this[$],E=this[f],O=E.adjustedFoV(E.framedFoVDeg);super[fs](m);const j=E.adjustedFoV(E.framedFoVDeg)/O,B=y.getFieldOfView()*(isFinite(j)?j:1);y.updateAspect(this[f].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[$].setFieldOfView(B),this.jumpCameraToGoal()}[Z](){super[Z](),this[js]?this[fe]=!0:this[js]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(w=Nt,M=Bs,F=ue,$n)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[nt]=JSON.parse(this.a11y)}catch(m){console.warn("Error parsing a11y JSON:",m)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[nt]={};else typeof this.a11y=="object"&&this.a11y!=null?this[nt]=Object.assign({},this.a11y):this[nt]={};this[q].setAttribute("aria-label",this[Jt])}}return L([S({type:Boolean,attribute:"camera-controls"})],x.prototype,"cameraControls",void 0),L([pt({intrinsics:fa,observeEffects:!0,updateHandler:Cn}),S({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],x.prototype,"cameraOrbit",void 0),L([pt({intrinsics:vl,observeEffects:!0,updateHandler:In}),S({type:String,attribute:"camera-target",hasChanged:()=>!0})],x.prototype,"cameraTarget",void 0),L([pt({intrinsics:En,observeEffects:!0,updateHandler:Rn}),S({type:String,attribute:"field-of-view",hasChanged:()=>!0})],x.prototype,"fieldOfView",void 0),L([pt({intrinsics:fl,updateHandler:On}),S({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],x.prototype,"minCameraOrbit",void 0),L([pt({intrinsics:gl,updateHandler:Ln}),S({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],x.prototype,"maxCameraOrbit",void 0),L([pt({intrinsics:ml,updateHandler:Fn}),S({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],x.prototype,"minFieldOfView",void 0),L([pt({intrinsics:En,updateHandler:kn}),S({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],x.prototype,"maxFieldOfView",void 0),L([S({type:Number,attribute:"interaction-prompt-threshold"})],x.prototype,"interactionPromptThreshold",void 0),L([S({type:String,attribute:"interaction-prompt"})],x.prototype,"interactionPrompt",void 0),L([S({type:String,attribute:"interaction-prompt-style"})],x.prototype,"interactionPromptStyle",void 0),L([S({type:Number,attribute:"orbit-sensitivity"})],x.prototype,"orbitSensitivity",void 0),L([S({type:Number,attribute:"zoom-sensitivity"})],x.prototype,"zoomSensitivity",void 0),L([S({type:Number,attribute:"pan-sensitivity"})],x.prototype,"panSensitivity",void 0),L([S({type:String,attribute:"touch-action"})],x.prototype,"touchAction",void 0),L([S({type:Boolean,attribute:"disable-zoom"})],x.prototype,"disableZoom",void 0),L([S({type:Boolean,attribute:"disable-pan"})],x.prototype,"disablePan",void 0),L([S({type:Boolean,attribute:"disable-tap"})],x.prototype,"disableTap",void 0),L([S({type:Number,attribute:"interpolation-decay"})],x.prototype,"interpolationDecay",void 0),L([S()],x.prototype,"a11y",void 0),x},va=(r,t,e)=>{let s;switch(r){case $i:s=new Uint8ClampedArray(t*e*4);break;case Pi:s=new Uint16Array(t*e*4);break;case Ba:s=new Uint32Array(t*e*4);break;case Ha:s=new Int8Array(t*e*4);break;case Ua:s=new Int16Array(t*e*4);break;case Va:s=new Int32Array(t*e*4);break;case Mi:s=new Float32Array(t*e*4);break;default:throw new Error("Unsupported data type")}return s};let Xe;const xl=(r,t,e,s)=>{if(Xe!==void 0)return Xe;const i=new Vi(1,1,s);t.setRenderTarget(i);const a=new gs(new Ni,new Hr({color:16777215}));t.render(a,e),t.setRenderTarget(null);const n=va(r,i.width,i.height);return t.readRenderTargetPixels(i,0,0,i.width,i.height,n),i.dispose(),a.geometry.dispose(),a.material.dispose(),Xe=n[0]!==0,Xe};class zi{constructor(t){var e,s,i,a,n,o,l,c,p,h,d,u,g,b,w,M;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(x){throw this._renderer.setRenderTarget(null),x}this._renderer.setRenderTarget(null)},this._width=t.width,this._height=t.height,this._type=t.type,this._colorSpace=t.colorSpace;const F={format:ls,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((e=t.renderTargetOptions)===null||e===void 0?void 0:e.anisotropy)!==void 0?(s=t.renderTargetOptions)===null||s===void 0?void 0:s.anisotropy:1,generateMipmaps:((i=t.renderTargetOptions)===null||i===void 0?void 0:i.generateMipmaps)!==void 0?(a=t.renderTargetOptions)===null||a===void 0?void 0:a.generateMipmaps:!1,magFilter:((n=t.renderTargetOptions)===null||n===void 0?void 0:n.magFilter)!==void 0?(o=t.renderTargetOptions)===null||o===void 0?void 0:o.magFilter:Q,minFilter:((l=t.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=t.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:Q,samples:((p=t.renderTargetOptions)===null||p===void 0?void 0:p.samples)!==void 0?(h=t.renderTargetOptions)===null||h===void 0?void 0:h.samples:void 0,wrapS:((d=t.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(u=t.renderTargetOptions)===null||u===void 0?void 0:u.wrapS:K,wrapT:((g=t.renderTargetOptions)===null||g===void 0?void 0:g.wrapT)!==void 0?(b=t.renderTargetOptions)===null||b===void 0?void 0:b.wrapT:K};if(this._material=t.material,t.renderer?this._renderer=t.renderer:(this._renderer=zi.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new Nr,this._camera=new Vr,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!xl(this._type,this._renderer,this._camera,F)){let x;switch(this._type){case Pi:x=this._renderer.extensions.has("EXT_color_buffer_float")?Mi:void 0;break}x!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Mi}`),this._type=x):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new gs(new Ni,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new Vi(this.width,this.height,F),this._renderTarget.texture.mapping=((w=t.renderTargetOptions)===null||w===void 0?void 0:w.mapping)!==void 0?(M=t.renderTargetOptions)===null||M===void 0?void 0:M.mapping:cs}static instantiateRenderer(){const t=new Pa;return t.setSize(128,128),t}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const t=va(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,t),t}toDataTexture(t){const e=new Na(this.toArray(),this.width,this.height,ls,this._type,(t==null?void 0:t.mapping)||cs,(t==null?void 0:t.wrapS)||K,(t==null?void 0:t.wrapT)||K,(t==null?void 0:t.magFilter)||Q,(t==null?void 0:t.minFilter)||Q,(t==null?void 0:t.anisotropy)||1,te);return e.generateMipmaps=(t==null?void 0:t.generateMipmaps)!==void 0?t==null?void 0:t.generateMipmaps:!1,e}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(t){this.disposeOnDemandRenderer(),t&&this.renderTarget.dispose(),this.material instanceof Ur&&Object.values(this.material.uniforms).forEach(e=>{e.value instanceof Qt&&e.value.dispose()}),Object.values(this.material).forEach(e=>{e instanceof Qt&&e.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(t){this._width=t,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(t){this._height=t,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(t){this._renderTarget=t,this._width=t.width,this._height=t.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}const Al=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,El=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class Ml extends Ur{constructor({gamma:t,offsetHdr:e,offsetSdr:s,gainMapMin:i,gainMapMax:a,maxDisplayBoost:n,hdrCapacityMin:o,hdrCapacityMax:l,sdr:c,gainMap:p}){super({name:"GainMapDecoderMaterial",vertexShader:Al,fragmentShader:El,uniforms:{sdr:{value:c},gainMap:{value:p},gamma:{value:new ct(1/t[0],1/t[1],1/t[2])},offsetHdr:{value:new ct().fromArray(e)},offsetSdr:{value:new ct().fromArray(s)},gainMapMin:{value:new ct().fromArray(i)},gainMapMax:{value:new ct().fromArray(a)},weightFactor:{value:(Math.log2(n)-o)/(l-o)}},blending:Wa,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=n,this._hdrCapacityMin=o,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(t){this.uniforms.sdr.value=t}get gainMap(){return this.uniforms.gainMap.value}set gainMap(t){this.uniforms.gainMap.value=t}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(t){this.uniforms.offsetHdr.value.fromArray(t)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(t){this.uniforms.offsetSdr.value.fromArray(t)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(t){this.uniforms.gainMapMin.value.fromArray(t)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(t){this.uniforms.gainMapMax.value.fromArray(t)}get gamma(){const t=this.uniforms.gamma.value;return[1/t.x,1/t.y,1/t.z]}set gamma(t){const e=this.uniforms.gamma.value;e.x=1/t[0],e.y=1/t[1],e.z=1/t[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(t){this._hdrCapacityMin=t,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(t){this._hdrCapacityMax=t,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(t){this._maxDisplayBoost=Math.max(1,Math.min(65504,t)),this.calculateWeight()}calculateWeight(){const t=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,t))}}class ya extends Error{}class ba extends Error{}const ge=(r,t,e)=>{const s=new RegExp(`${t}="([^"]*)"`,"i").exec(r);if(s)return s[1];const i=new RegExp(`<${t}[^>]*>([\\s\\S]*?)</${t}>`,"i").exec(r);if(i){const a=i[1].match(/<rdf:li>([^<]*)<\/rdf:li>/g);return a&&a.length===3?a.map(n=>n.replace(/<\/?rdf:li>/g,"")):i[1].trim()}if(e!==void 0)return e;throw new Error(`Can't find ${t} in gainmap metadata`)},$l=r=>{let t;typeof TextDecoder<"u"?t=new TextDecoder().decode(r):t=r.toString();let e=t.indexOf("<x:xmpmeta");for(;e!==-1;){const s=t.indexOf("x:xmpmeta>",e),i=t.slice(e,s+10);try{const a=ge(i,"hdrgm:GainMapMin","0"),n=ge(i,"hdrgm:GainMapMax"),o=ge(i,"hdrgm:Gamma","1"),l=ge(i,"hdrgm:OffsetSDR","0.015625"),c=ge(i,"hdrgm:OffsetHDR","0.015625"),p=/hdrgm:HDRCapacityMin="([^"]*)"/.exec(i),h=p?p[1]:"0",d=/hdrgm:HDRCapacityMax="([^"]*)"/.exec(i);if(!d)throw new Error("Incomplete gainmap metadata");const u=d[1];return{gainMapMin:Array.isArray(a)?a.map(g=>parseFloat(g)):[parseFloat(a),parseFloat(a),parseFloat(a)],gainMapMax:Array.isArray(n)?n.map(g=>parseFloat(g)):[parseFloat(n),parseFloat(n),parseFloat(n)],gamma:Array.isArray(o)?o.map(g=>parseFloat(g)):[parseFloat(o),parseFloat(o),parseFloat(o)],offsetSdr:Array.isArray(l)?l.map(g=>parseFloat(g)):[parseFloat(l),parseFloat(l),parseFloat(l)],offsetHdr:Array.isArray(c)?c.map(g=>parseFloat(g)):[parseFloat(c),parseFloat(c),parseFloat(c)],hdrCapacityMin:parseFloat(h),hdrCapacityMax:parseFloat(u)}}catch{}e=t.indexOf("<x:xmpmeta",s)}};class Tl{constructor(t){this.options={debug:t&&t.debug!==void 0?t.debug:!1,extractFII:t&&t.extractFII!==void 0?t.extractFII:!0,extractNonFII:t&&t.extractNonFII!==void 0?t.extractNonFII:!0}}extract(t){return new Promise((e,s)=>{const i=this.options.debug,a=new DataView(t.buffer);if(a.getUint16(0)!==65496){s(new Error("Not a valid jpeg"));return}const n=a.byteLength;let o=2,l=0,c;for(;o<n;){if(++l>250){s(new Error(`Found no marker after ${l} loops 😵`));return}if(a.getUint8(o)!==255){s(new Error(`Not a valid marker at offset 0x${o.toString(16)}, found: 0x${a.getUint8(o).toString(16)}`));return}if(c=a.getUint8(o+1),i&&console.log(`Marker: ${c.toString(16)}`),c===226){i&&console.log("Found APP2 marker (0xffe2)");const p=o+4;if(a.getUint32(p)===1297106432){const h=p+4;let d;if(a.getUint16(h)===18761)d=!1;else if(a.getUint16(h)===19789)d=!0;else{s(new Error("No valid endianness marker found in TIFF header"));return}if(a.getUint16(h+2,!d)!==42){s(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const u=a.getUint32(h+4,!d);if(u<8){s(new Error("Not valid TIFF data! (First offset less than 8)"));return}const g=h+u,b=a.getUint16(g,!d),w=g+2;let M=0;for(let m=w;m<w+12*b;m+=12)a.getUint16(m,!d)===45057&&(M=a.getUint32(m+8,!d));const x=g+2+b*12+4,Y=[];for(let m=x;m<x+M*16;m+=16){const y={MPType:a.getUint32(m,!d),size:a.getUint32(m+4,!d),dataOffset:a.getUint32(m+8,!d),dependantImages:a.getUint32(m+12,!d),start:-1,end:-1,isFII:!1};y.dataOffset?(y.start=h+y.dataOffset,y.isFII=!1):(y.start=0,y.isFII=!0),y.end=y.start+y.size,Y.push(y)}if(this.options.extractNonFII&&Y.length){const m=new Blob([a]),y=[];for(const E of Y){if(E.isFII&&!this.options.extractFII)continue;const O=m.slice(E.start,E.end+1,"image/jpeg");y.push(O)}e(y)}}}o+=2+a.getUint16(o+2)}})}}const Cl=async r=>{const t=$l(r);if(!t)throw new ba("Gain map XMP metadata not found");const s=await new Tl({extractFII:!0,extractNonFII:!0}).extract(r);if(s.length!==2)throw new ya("Gain map recovery image not found");return{sdr:new Uint8Array(await s[0].arrayBuffer()),gainMap:new Uint8Array(await s[1].arrayBuffer()),metadata:t}},Dn=r=>new Promise((t,e)=>{const s=document.createElement("img");s.onload=()=>{t(s)},s.onerror=i=>{e(i)},s.src=URL.createObjectURL(r)});class Rl extends ja{constructor(t,e){super(e),t&&(this._renderer=t),this._internalLoadingManager=new Ga}setRenderer(t){return this._renderer=t,this}setRenderTargetOptions(t){return this._renderTargetOptions=t,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const t=new Ml({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new Qt,sdr:new Qt});return new zi({width:16,height:16,type:Pi,colorSpace:te,material:t,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(t,e,s,i){const a=i?new Blob([i],{type:"image/jpeg"}):void 0,n=new Blob([s],{type:"image/jpeg"});let o,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([a?Dn(a):Promise.resolve(void 0),Dn(n)]);l=d[0],o=d[1],c=!0}else{const d=await Promise.all([a?createImageBitmap(a,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(n,{imageOrientation:"flipY"})]);l=d[0],o=d[1]}const p=new Qt(l||new ImageData(2,2),cs,K,K,Q,Gi,ls,$i,1,te);p.flipY=c,p.needsUpdate=!0;const h=new Qt(o,cs,K,K,Q,Gi,ls,$i,1,Ui);h.flipY=c,h.needsUpdate=!0,t.width=o.width,t.height=o.height,t.material.gainMap=p,t.material.sdr=h,t.material.gainMapMin=e.gainMapMin,t.material.gainMapMax=e.gainMapMax,t.material.offsetHdr=e.offsetHdr,t.material.offsetSdr=e.offsetSdr,t.material.gamma=e.gamma,t.material.hdrCapacityMin=e.hdrCapacityMin,t.material.hdrCapacityMax=e.hdrCapacityMax,t.material.maxDisplayBoost=Math.pow(2,e.hdrCapacityMax),t.material.needsUpdate=!0,t.render()}}class Ac extends Rl{load(t,e,s,i){const a=this.prepareQuadRenderer(),n=new za(this._internalLoadingManager);return n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setPath(this.path),n.setWithCredentials(this.withCredentials),this.manager.itemStart(t),n.load(t,async o=>{if(typeof o=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(o);let c,p,h;try{const d=await Cl(l);c=d.sdr,p=d.gainMap,h=d.metadata}catch(d){if(d instanceof ba||d instanceof ya)console.warn(`Failure to reconstruct an HDR image from ${t}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),h={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l;else throw d}try{await this.render(a,h,c,p)}catch(d){this.manager.itemError(t),typeof i=="function"&&i(d),a.disposeOnDemandRenderer();return}typeof e=="function"&&e(a),this.manager.itemEnd(t),a.disposeOnDemandRenderer()},s,o=>{this.manager.itemError(t),typeof i=="function"&&i(o)}),a}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Hr,Il=new Ni(2,2);let Ol=0;const U=Symbol("threeTexture"),Nn=Symbol("threeTextures");class Ll extends Le{get[U](){var t;return(t=this[A])===null||t===void 0?void 0:t.values().next().value}get[Nn](){return this[A]}constructor(t,e){super(t,new Set(e?[e]:[])),this[U].image.src||(this[U].image.src=e.name?e.name:"adhoc_image"+Ol++),this[U].image.name||(this[U].image.name=e&&e.image&&e.image.src?e.image.src.split("/").pop():"adhoc_image")}get name(){return this[U].image.name||""}get uri(){return this[U].image.src}get bufferView(){return this[U].image.bufferView}get element(){const t=this[U];if(t&&(t.isCanvasTexture||t.isVideoTexture))return t.image}get animation(){const t=this[U];if(t&&t.isCanvasTexture&&t.animation)return t.animation}get type(){return this.uri!=null?"external":"embedded"}set name(t){for(const e of this[Nn])e.image.name=t}update(){const t=this[U];t&&t.isCanvasTexture&&!t.animation&&(this[U].needsUpdate=!0,this[T]())}async createThumbnail(t,e){const s=new Nr;Pn.map=this[U];const i=new gs(Il,Pn);s.add(i);const a=new Vr(-1,1,1,-1,0,1),{threeRenderer:n}=gt.singleton,o=new Vi(t,e);n.setRenderTarget(o),n.render(s,a),n.setRenderTarget(null);const l=new Uint8Array(t*e*4);n.readRenderTargetPixels(o,0,0,t,e,l),vt.width=t,vt.height=e;const c=vt.getContext("2d"),p=c.createImageData(t,e);return p.data.set(l),c.putImageData(p,0,0),new Promise(async(h,d)=>{vt.toBlob(u=>{if(!u)return d("Failed to capture thumbnail.");h(URL.createObjectURL(u))},"image/png")})}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Map([[ee.Repeat,hs],[ee.ClampToEdge,K],[ee.MirroredRepeat,Br]]),Oi=new Map([[hs,ee.Repeat],[K,ee.ClampToEdge],[Br,ee.MirroredRepeat]]),Fl=new Map([[P.Nearest,vs],[P.Linear,Q],[P.NearestMipmapNearest,zr],[P.LinearMipmapNearest,jr],[P.NearestMipmapLinear,Gr],[P.LinearMipmapLinear,Wr]]),wa=new Map([[vs,P.Nearest],[Q,P.Linear],[zr,P.NearestMipmapNearest],[jr,P.LinearMipmapNearest],[Gr,P.NearestMipmapLinear],[Wr,P.LinearMipmapLinear]]),kl=new Map([[P.Nearest,vs],[P.Linear,Q]]),Sa=new Map([[vs,P.Nearest],[Q,P.Linear]]),Dl=r=>wa.has(r),Pl=r=>Sa.has(r),Nl=r=>Oi.has(r),Vl=(r,t)=>{switch(r){case"minFilter":return Dl(t);case"magFilter":return Pl(t);case"wrapS":case"wrapT":return Nl(t);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${r}" on Sampler`)}},rt=Symbol("threeTexture"),Un=Symbol("threeTextures"),ut=Symbol("setProperty");class Ul extends Le{get[rt](){var t;return(t=this[A])===null||t===void 0?void 0:t.values().next().value}get[Un](){return this[A]}constructor(t,e){super(t,new Set(e?[e]:[]))}get name(){return this[rt].name||""}get minFilter(){return wa.get(this[rt].minFilter)}get magFilter(){return Sa.get(this[rt].magFilter)}get wrapS(){return Oi.get(this[rt].wrapS)}get wrapT(){return Oi.get(this[rt].wrapT)}get rotation(){return this[rt].rotation}get scale(){return Di(this[rt].repeat)}get offset(){return Di(this[rt].offset)}setMinFilter(t){this[ut]("minFilter",Fl.get(t))}setMagFilter(t){this[ut]("magFilter",kl.get(t))}setWrapS(t){this[ut]("wrapS",Vn.get(t))}setWrapT(t){this[ut]("wrapT",Vn.get(t))}setRotation(t){t==null&&(t=0),this[ut]("rotation",t)}setScale(t){t==null&&(t={u:1,v:1}),this[ut]("repeat",new Te(t.u,t.v))}setOffset(t){t==null&&(t={u:0,v:0}),this[ut]("offset",new Te(t.u,t.v))}[ut](t,e){if(Vl(t,e))for(const s of this[Un])s[t]=e,s.needsUpdate=!0;this[T]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=Symbol("image"),Bn=Symbol("sampler"),zn=Symbol("threeTexture");class _a extends Le{constructor(t,e){super(t,new Set(e?[e]:[])),this[Bn]=new Ul(t,e),this[Hn]=new Ll(t,e)}get[zn](){var t;return(t=this[A])===null||t===void 0?void 0:t.values().next().value}get name(){return this[zn].name||""}set name(t){for(const e of this[A])e.name=t}get sampler(){return this[Bn]}get source(){return this[Hn]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xa,Aa,Ea;const Et=Symbol("texture"),Mt=Symbol("transform"),Gs=Symbol("materials"),jn=Symbol("usage"),Ut=Symbol("onUpdate"),Ee=Symbol("activeVideo");var _;(function(r){r[r.Base=0]="Base",r[r.MetallicRoughness=1]="MetallicRoughness",r[r.Normal=2]="Normal",r[r.Occlusion=3]="Occlusion",r[r.Emissive=4]="Emissive",r[r.Clearcoat=5]="Clearcoat",r[r.ClearcoatRoughness=6]="ClearcoatRoughness",r[r.ClearcoatNormal=7]="ClearcoatNormal",r[r.SheenColor=8]="SheenColor",r[r.SheenRoughness=9]="SheenRoughness",r[r.Transmission=10]="Transmission",r[r.Thickness=11]="Thickness",r[r.Specular=12]="Specular",r[r.SpecularColor=13]="SpecularColor",r[r.Iridescence=14]="Iridescence",r[r.IridescenceThickness=15]="IridescenceThickness",r[r.Anisotropy=16]="Anisotropy"})(_||(_={}));class Yt{constructor(t,e,s,i){this[xa]=null,this[Aa]={rotation:0,scale:new Te(1,1),offset:new Te(0,0)},this[Ea]=!1,s&&(this[Mt].rotation=s.rotation,this[Mt].scale.copy(s.repeat),this[Mt].offset.copy(s.offset),this[Et]=new _a(t,s)),this[Ut]=t,this[Gs]=i,this[jn]=e}get texture(){return this[Et]}setTexture(t){var e,s;const i=t!=null?t.source[U]:null,a=(e=this[Et])===null||e===void 0?void 0:e.source[U];if(a!=null&&a.isVideoTexture?this[Ee]=!1:!((s=this[Et])===null||s===void 0)&&s.source.animation&&this[Et].source.animation.removeEventListener("enterFrame",this[Ut]),this[Et]=t,i!=null&&i.isVideoTexture){const o=i.image;if(this[Ee]=!0,o.requestVideoFrameCallback!=null){const l=()=>{this[Ee]&&(this[Ut](),o.requestVideoFrameCallback(l))};o.requestVideoFrameCallback(l)}else{const l=()=>{this[Ee]&&(this[Ut](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(t==null?void 0:t.source.animation)!=null&&t.source.animation.addEventListener("enterFrame",this[Ut]);let n=Ui;if(this[Gs])for(const o of this[Gs]){switch(this[jn]){case _.Base:o.map=i;break;case _.MetallicRoughness:n=te,o.metalnessMap=i,o.roughnessMap=i;break;case _.Normal:n=te,o.normalMap=i;break;case _.Occlusion:n=te,o.aoMap=i;break;case _.Emissive:o.emissiveMap=i;break;case _.Clearcoat:o.clearcoatMap=i;break;case _.ClearcoatRoughness:o.clearcoatRoughnessMap=i;break;case _.ClearcoatNormal:o.clearcoatNormalMap=i;break;case _.SheenColor:o.sheenColorMap=i;break;case _.SheenRoughness:o.sheenRoughnessMap=i;break;case _.Transmission:o.transmissionMap=i;break;case _.Thickness:o.thicknessMap=i;break;case _.Specular:o.specularIntensityMap=i;break;case _.SpecularColor:o.specularColorMap=i;break;case _.Iridescence:o.iridescenceMap=i;break;case _.IridescenceThickness:o.iridescenceThicknessMap=i;break;case _.Anisotropy:o.anisotropyMap=i;break}o.needsUpdate=!0}i&&(i.colorSpace=n,i.rotation=this[Mt].rotation,i.repeat=this[Mt].scale,i.offset=this[Mt].offset),this[Ut]()}}xa=Et,Aa=Mt,Ea=Ee;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=Symbol("threeMaterial"),Ke=Symbol("threeMaterials"),Gn=Symbol("baseColorTexture"),Wn=Symbol("metallicRoughnessTexture");class Hl extends Le{constructor(t,e){super(t,e);const{map:s,metalnessMap:i}=e.values().next().value;this[Gn]=new Yt(t,_.Base,s,e),this[Wn]=new Yt(t,_.MetallicRoughness,i,e)}get[Ke](){return this[A]}get[ve](){var t;return(t=this[A])===null||t===void 0?void 0:t.values().next().value}get baseColorFactor(){const t=[0,0,0,this[ve].opacity];return this[ve].color.toArray(t),t}get metallicFactor(){return this[ve].metalness}get roughnessFactor(){return this[ve].roughness}get baseColorTexture(){return this[Gn]}get metallicRoughnessTexture(){return this[Wn]}setBaseColorFactor(t){const e=new qr;t instanceof Array?e.fromArray(t):e.set(t);for(const s of this[Ke])s.color.set(e),t instanceof Array&&t.length>3?s.opacity=t[3]:(t=[0,0,0,s.opacity],e.toArray(t));this[T]()}setMetallicFactor(t){for(const e of this[Ke])e.metalness=t;this[T]()}setRoughnessFactor(t){for(const e of this[Ke])e.roughness=t;this[T]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn,Xn;const Kn=Symbol("pbrMetallicRoughness"),Qn=Symbol("normalTexture"),Zn=Symbol("occlusionTexture"),Yn=Symbol("emissiveTexture"),R=Symbol("backingThreeMaterial"),Jn=Symbol("applyAlphaCutoff"),Ws=Symbol("getAlphaMode"),Ht=Symbol("lazyLoadGLTFInfo"),qs=Symbol("initialize"),Li=Symbol("getLoadedMaterial"),v=Symbol("ensureMaterialIsLoaded"),tr=Symbol("gltfIndex"),Me=Symbol("setActive"),se=Symbol("variantIndices"),Xs=Symbol("isActive"),er=Symbol("modelVariants"),Ks=Symbol("name"),H=Symbol("pbrTextures");class Qs extends Le{constructor(t,e,s,i,a,n,o=void 0){super(t,a),this[qn]=new Set,this[Xn]=new Map,this[tr]=e,this[Xs]=s,this[er]=i,this[Ks]=n,o==null?this[qs]():this[Ht]=o}get[(qn=se,Xn=H,R)](){return this[A].values().next().value}[qs](){const t=this[T],e=this[A];this[Kn]=new Hl(t,e);const{normalMap:s,aoMap:i,emissiveMap:a}=e.values().next().value;this[Qn]=new Yt(t,_.Normal,s,e),this[Zn]=new Yt(t,_.Occlusion,i,e),this[Yn]=new Yt(t,_.Emissive,a,e);const n=o=>{this[H].set(o,new Yt(t,o,null,e))};n(_.Clearcoat),n(_.ClearcoatRoughness),n(_.ClearcoatNormal),n(_.SheenColor),n(_.SheenRoughness),n(_.Transmission),n(_.Thickness),n(_.Specular),n(_.SpecularColor),n(_.Iridescence),n(_.IridescenceThickness),n(_.Anisotropy)}async[Li](){if(this[Ht]!=null){const t=await this[Ht].doLazyLoad();return this[qs](),this[Ht]=void 0,this.ensureLoaded=async()=>{},t}return null}colorFromRgb(t){const e=new qr;return t instanceof Array?e.fromArray(t):e.set(t),e}[v](){if(this[Ht]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Li]()}get isLoaded(){return this[Ht]==null}get isActive(){return this[Xs]}[Me](t){this[Xs]=t}get name(){return this[Ks]||""}set name(t){if(this[Ks]=t,this[A]!=null)for(const e of this[A])e.name=t}get pbrMetallicRoughness(){return this[v](),this[Kn]}get normalTexture(){return this[v](),this[Qn]}get occlusionTexture(){return this[v](),this[Zn]}get emissiveTexture(){return this[v](),this[Yn]}get emissiveFactor(){return this[v](),this[R].emissive.toArray()}get index(){return this[tr]}hasVariant(t){const e=this[er].get(t);return e!=null&&this[se].has(e.index)}setEmissiveFactor(t){this[v]();const e=this.colorFromRgb(t);for(const s of this[A])s.emissive.set(e);this[T]()}[Ws](){return this[R].transparent?"BLEND":this[R].alphaTest>0?"MASK":"OPAQUE"}[Jn](){this[v]();for(const t of this[A])this[Ws]()==="MASK"?t.alphaTest==null&&(t.alphaTest=.5):t.alphaTest=void 0,t.needsUpdate=!0}setAlphaCutoff(t){this[v]();for(const e of this[A])e.alphaTest=t,e.needsUpdate=!0;this[Jn](),this[T]()}getAlphaCutoff(){return this[v](),this[R].alphaTest}setDoubleSided(t){this[v]();for(const e of this[A])e.side=t?Wi:qa,e.needsUpdate=!0;this[T]()}getDoubleSided(){return this[v](),this[R].side==Wi}setAlphaMode(t){this[v]();const e=(s,i)=>{s.transparent=i,s.depthWrite=!i};for(const s of this[A])e(s,t==="BLEND"),t==="MASK"?s.alphaTest=.5:s.alphaTest=void 0,s.needsUpdate=!0;this[T]()}getAlphaMode(){return this[v](),this[Ws]()}get emissiveStrength(){return this[v](),this[R].emissiveIntensity}setEmissiveStrength(t){this[v]();for(const e of this[A])e.emissiveIntensity=t;this[T]()}get clearcoatFactor(){return this[v](),this[R].clearcoat}get clearcoatRoughnessFactor(){return this[v](),this[R].clearcoatRoughness}get clearcoatTexture(){return this[v](),this[H].get(_.Clearcoat)}get clearcoatRoughnessTexture(){return this[v](),this[H].get(_.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[v](),this[H].get(_.ClearcoatNormal)}get clearcoatNormalScale(){return this[v](),this[R].clearcoatNormalScale.x}setClearcoatFactor(t){this[v]();for(const e of this[A])e.clearcoat=t;this[T]()}setClearcoatRoughnessFactor(t){this[v]();for(const e of this[A])e.clearcoatRoughness=t;this[T]()}setClearcoatNormalScale(t){this[v]();for(const e of this[A])e.clearcoatNormalScale=new Te(t,t);this[T]()}get ior(){return this[v](),this[R].ior}setIor(t){this[v]();for(const e of this[A])e.ior=t;this[T]()}get sheenColorFactor(){return this[v](),this[R].sheenColor.toArray()}get sheenColorTexture(){return this[v](),this[H].get(_.SheenColor)}get sheenRoughnessFactor(){return this[v](),this[R].sheenRoughness}get sheenRoughnessTexture(){return this[v](),this[H].get(_.SheenRoughness)}setSheenColorFactor(t){this[v]();const e=this.colorFromRgb(t);for(const s of this[A])s.sheenColor.set(e),s.sheen=1;this[T]()}setSheenRoughnessFactor(t){this[v]();for(const e of this[A])e.sheenRoughness=t,e.sheen=1;this[T]()}get transmissionFactor(){return this[v](),this[R].transmission}get transmissionTexture(){return this[v](),this[H].get(_.Transmission)}setTransmissionFactor(t){this[v]();for(const e of this[A])e.transmission=t;this[T]()}get thicknessFactor(){return this[v](),this[R].thickness}get thicknessTexture(){return this[v](),this[H].get(_.Thickness)}get attenuationDistance(){return this[v](),this[R].attenuationDistance}get attenuationColor(){return this[v](),this[R].attenuationColor.toArray()}setThicknessFactor(t){this[v]();for(const e of this[A])e.thickness=t;this[T]()}setAttenuationDistance(t){this[v]();for(const e of this[A])e.attenuationDistance=t;this[T]()}setAttenuationColor(t){this[v]();const e=this.colorFromRgb(t);for(const s of this[A])s.attenuationColor.set(e);this[T]()}get specularFactor(){return this[v](),this[R].specularIntensity}get specularTexture(){return this[v](),this[H].get(_.Specular)}get specularColorFactor(){return this[v](),this[R].specularColor.toArray()}get specularColorTexture(){return this[v](),this[H].get(_.SheenColor)}setSpecularFactor(t){this[v]();for(const e of this[A])e.specularIntensity=t;this[T]()}setSpecularColorFactor(t){this[v]();const e=this.colorFromRgb(t);for(const s of this[A])s.specularColor.set(e);this[T]()}get iridescenceFactor(){return this[v](),this[R].iridescence}get iridescenceTexture(){return this[v](),this[H].get(_.Iridescence)}get iridescenceIor(){return this[v](),this[R].iridescenceIOR}get iridescenceThicknessMinimum(){return this[v](),this[R].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[v](),this[R].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[v](),this[H].get(_.IridescenceThickness)}setIridescenceFactor(t){this[v]();for(const e of this[A])e.iridescence=t;this[T]()}setIridescenceIor(t){this[v]();for(const e of this[A])e.iridescenceIOR=t;this[T]()}setIridescenceThicknessMinimum(t){this[v]();for(const e of this[A])e.iridescenceThicknessRange[0]=t;this[T]()}setIridescenceThicknessMaximum(t){this[v]();for(const e of this[A])e.iridescenceThicknessRange[1]=t;this[T]()}get anisotropyStrength(){return this[v](),this[R].anisotropy}get anisotropyRotation(){return this[v](),this[R].anisotropyRotation}get anisotropyTexture(){return this[v](),this[H].get(_.Anisotropy)}setAnisotropyStrength(t){this[v]();for(const e of this[A])e.anisotropy=t;this[T]()}setAnisotropyRotation(t){this[v]();for(const e of this[A])e.anisotropyRotation=t;this[T]()}}let Ma=class{constructor(t){this.name="",this.children=new Array,this.name=t}};class Zs extends Ma{constructor(t,e,s,i){super(t.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=t;const{gltf:a,threeGLTF:n,threeObjectMap:o}=i;this.parser=n.parser,this.modelVariants=s,this.mesh.userData.variantData=s;const l=o.get(t.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${t.name}) missing initial material reference.`);const c=t.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const d=((a.meshes||[])[c.meshes].primitives||[])[c.primitives];if(d==null){console.error("Mesh primitive definition is missing.");return}if(d.material!=null)this.materials.set(d.material,e[d.material]);else{const u=e.findIndex(g=>g.name==="Default");u>=0?this.materials.set(u,e[u]):console.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions.KHR_materials_variants){const u=d.extensions.KHR_materials_variants,b=n.parser.json.extensions.KHR_materials_variants.variants;for(const w of u.mappings){const M=e[w.material];this.materials.set(w.material,M);for(const F of w.variants){const{name:x}=b[F];this.variantToMaterialMap.set(F,M),M[se].add(F),s.has(x)||s.set(x,{name:x,index:F})}}}}async setActiveMaterial(t){const e=this.materials.get(t);if(t!==this.activeMaterialIdx){const s=e[A],i=await e[Li]();i!=null?this.mesh.material=i:this.mesh.material=s.values().next().value,this.parser.assignFinalMaterial(this.mesh),s.add(this.mesh.material),this.activeMaterialIdx=t}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(t){return this.materials.get(t)}async enableVariant(t){if(t==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(t)){const e=this.modelVariants.get(t);return this.enableVariantHelper(e.index)}return null}async enableVariantHelper(t){if(this.variantToMaterialMap!=null&&t!=null){const e=this.variantToMaterialMap.get(t);if(e!=null)return this.setActiveMaterial(e.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const t of this.variantToMaterialMap.keys()){const e=this.mesh.userData.variantMaterials.get(t);if(e.material!=null)continue;const s=await this.enableVariantHelper(t);s!=null&&(e.material=s)}}get variantInfo(){return this.variantToMaterialMap}addVariant(t,e){if(!this.ensureVariantIsUnused(e))return!1;this.modelVariants.has(e)||this.modelVariants.set(e,{name:e,index:this.modelVariants.size});const i=this.modelVariants.get(e).index;return t[se].add(i),this.variantToMaterialMap.set(i,t),this.materials.set(t.index,t),this.updateVariantUserData(i,t),!0}deleteVariant(t){if(this.variantInfo.has(t)){this.variantInfo.delete(t);const e=this.mesh.userData.variantMaterials;e!=null&&e.delete(t)}}updateVariantUserData(t,e){e[se].add(t),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(t,{material:e[A].values().next().value,gltfMaterialIndex:e.index})}ensureVariantIsUnused(t){const e=this.modelVariants.get(t);return e!=null&&this.variantInfo.has(e.index)?(console.warn(`Primitive cannot add variant '${t}' for this material, it already exists.`),!1):!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sr,ir,nr,rr,ar,or;const xt=Symbol("materials"),Qe=Symbol("hierarchy"),lr=Symbol("roots"),at=Symbol("primitives"),$a=Symbol("prepareVariantsForExport"),Ta=Symbol("switchVariant"),Ca=Symbol("materialFromPoint"),cr=Symbol("nodeFromPoint"),Bl=Symbol("nodeFromIndex"),D=Symbol("variantData"),Fi=Symbol("availableVariants"),Ys=Symbol("modelOnUpdate"),hr=Symbol("cloneMaterial");class zl{constructor(t,e,s,i){this.gltf=t,this.gltfElementMap=e,this.mapKey=s,this.doLazyLoad=i}}class jl{constructor(t,e=()=>{}){this[sr]=new Array,this[ir]=new Array,this[nr]=new Array,this[rr]=new Array,this[ar]=()=>{},this[or]=new Map,this[Ys]=e;const{gltf:s,threeGLTF:i,gltfElementMap:a}=t;for(const[l,c]of s.materials.entries()){const p=a.get(c);if(p!=null)this[xt].push(new Qs(e,l,!0,this[D],p,c.name));else{const d=(s.materials||[])[l],u=new Set;a.set(d,u);const g=async()=>{const b=await i.parser.getDependency("material",l);return u.add(b),b};this[xt].push(new Qs(e,l,!1,this[D],u,c.name,new zl(s,a,d,g)))}}const n=new Map,o=new Array;for(const l of i.scene.children)o.push(l);for(;o.length>0;){const l=o.pop();let c=null;l instanceof gs?(c=new Zs(l,this.materials,this[D],t),this[at].push(c)):c=new Ma(l.name);const p=n.get(l);p!=null?p.children.push(c):this[lr].push(c),this[Qe].push(c);for(const h of l.children)o.push(h),n.set(l,c)}}get materials(){return this[xt]}[(sr=xt,ir=Qe,nr=lr,rr=at,ar=Ys,or=D,Fi)](){const t=Array.from(this[D].values());return t.sort((e,s)=>e.index-s.index),t.map(e=>e.name)}getMaterialByName(t){const e=this[xt].filter(s=>s.name===t);return e.length>0?e[0]:null}[Bl](t,e){const s=this[Qe].find(i=>{if(i instanceof Zs){const{meshes:a,primitives:n}=i.mesh.userData.associations;if(a==t&&n==e)return!0}return!1});return s??null}[cr](t){return this[Qe].find(e=>e instanceof Zs&&e.mesh===t.object)}[Ca](t){return this[cr](t).getActiveMaterial()}async[Ta](t){for(const e of this[at])await e.enableVariant(t);for(const e of this.materials)e[Me](!1);for(const e of this[at])this.materials[e.getActiveMaterial().index][Me](!0)}async[$a](){const t=new Array;for(const e of this[at])t.push(e.instantiateVariants());await Promise.all(t)}[hr](t,e){const s=this.materials[t];s.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const i=s[A],a=new Set;for(const[o,l]of i.entries()){const c=l.clone();c.name=e+(i.size>1?"_inst"+o:""),a.add(c)}const n=new Qs(this[Ys],this[xt].length,!1,this[D],a,e);return this[xt].push(n),n}createMaterialInstanceForVariant(t,e,s,i=!0){let a=null;for(const n of this[at]){const o=this[D].get(s);o!=null&&n.variantInfo.has(o.index)||n.getMaterial(t)!=null&&(this.hasVariant(s)||this.createVariant(s),a==null&&(a=this[hr](t,e)),n.addVariant(a,s))}if(i&&a!=null){a[Me](!0),this.materials[t][Me](!1);for(const n of this[at])n.enableVariant(s)}return a}createVariant(t){this[D].has(t)?console.warn(`Variant '${t}'' already exists`):this[D].set(t,{name:t,index:this[D].size})}hasVariant(t){return this[D].has(t)}setMaterialToVariant(t,e){if(this[Fi]().find(s=>s===e)==null){console.warn(`Can't add material to '${e}', the variant does not exist.'`);return}if(t<0||t>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const s of this[at]){const i=s.getMaterial(t);i!=null&&s.addVariant(i,e)}}updateVariantName(t,e){const s=this[D].get(t);s!=null&&(s.name=e,this[D].set(e,s),this[D].delete(t))}deleteVariant(t){const e=this[D].get(t);if(e!=null){for(const s of this.materials)s.hasVariant(t)&&s[se].delete(e.index);for(const s of this[at])s.deleteVariant(e.index);this[D].delete(t)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Js=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const ti=Symbol("currentGLTF"),ei=Symbol("originalGltfJson"),Bt=Symbol("model"),si=Symbol("getOnUpdateMethod"),ye=Symbol("buildTexture"),Gl=r=>{var t,e,s;class i extends r{constructor(){super(...arguments),this[t]=void 0,this[e]=null,this[s]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[Bt]}get availableVariants(){return this.model?this.model[Fi]():[]}get originalGltfJson(){return this[ei]}[(t=Bt,e=ti,s=ei,si)](){return()=>{this[N]()}}[ye](n){return n.colorSpace=Ui,n.wrapS=hs,n.wrapT=hs,new _a(this[si](),n)}async createTexture(n,o="image/png"){const{textureUtils:l}=this[C],c=await l.loadImage(n,this.withCredentials);return c.userData.mimeType=o,this[ye](c)}async createLottieTexture(n,o=1){const{textureUtils:l}=this[C],c=await l.loadLottie(n,o,this.withCredentials);return this[ye](c)}createVideoTexture(n){const o=document.createElement("video");o.crossOrigin=this.withCredentials?"use-credentials":"anonymous",o.src=n,o.muted=!0,o.playsInline=!0,o.loop=!0,o.play();const l=new Xa(o);return this[ye](l)}createCanvasTexture(){const n=document.createElement("canvas"),o=new Ka(n);return this[ye](o)}async updated(n){if(super.updated(n),n.has("variantName")){const o=this[It].beginActivity("variant-update");o(.1);const l=this[Bt],{variantName:c}=this;l!=null&&(await l[Ta](c),this[N](),this.dispatchEvent(new CustomEvent("variant-applied"))),o(1)}if(n.has("orientation")||n.has("scale")){if(!this.loaded)return;const o=this[f];o.applyTransform(),o.updateBoundingBox(),o.updateShadow(),this[C].arRenderer.onUpdateScene(),this[N]()}}[Z](){super[Z]();const{currentGLTF:n}=this[f];if(n!=null){const{correlatedSceneGraph:o}=n;o!=null&&n!==this[ti]&&(this[Bt]=new jl(o,this[si]()),this[ei]=JSON.parse(JSON.stringify(o.gltf))),"variants"in n.userData&&this.requestUpdate("variantName")}this[ti]=n}async exportScene(n){const o=this[f];return new Promise(async(l,c)=>{const p={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(p,n),p.animations=o.animations,p.truncateDrawRange=!0;const h=o.shadow;let d=!1;h!=null&&(d=h.visible,h.visible=!1),await this[Bt][$a](),new Qa().register(g=>new Za(g)).parse(o.model,g=>l(new Blob([p.binary?g:JSON.stringify(g)],{type:p.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),p),h!=null&&(h.visible=d)})}materialFromPoint(n,o){const l=this[Bt];if(l==null)return null;const c=this[f],p=c.getNDC(n,o),h=c.hitFromPoint(p);return h==null||h.face==null?null:l[Ca](h)}}return Js([S({type:String,attribute:"variant-name"})],i.prototype,"variantName",void 0),Js([S({type:String,attribute:"orientation"})],i.prototype,"orientation",void 0),Js([S({type:String,attribute:"scale"})],i.prototype,"scale",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(t){const e={progress:0,completed:!1};return this.ongoingActivities.add(e),this.ongoingActivityCount===1&&this.announceTotalProgress(e,0,t),s=>{let i;return i=Math.max(ws(s,0,1),e.progress),i!==e.progress&&this.announceTotalProgress(e,i,t),e.progress}}announceTotalProgress(t,e,s){let i=0,a=0;e==1&&(t.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;i+=1-c,l.completed&&a++}const n=t.progress;t.progress=e,this.totalProgress+=(e-n)*(1-this.totalProgress)/i;const o=a===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:o,reason:s}})),a===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _s=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a},dr,ur,pr,mr,fr,gr,vr,yr,br,wr,Sr,_r,xr;const ql=10,Xl=50,Kl=0,Ql=300,Zl=150,vt=document.createElement("canvas"),ii=Symbol("fallbackResizeHandler"),Ar=Symbol("defaultAriaLabel"),Ze=Symbol("resizeObserver"),zt=Symbol("clearModelTimeout"),ni=Symbol("onContextLost"),jt=Symbol("loaded"),ri=Symbol("status"),ai=Symbol("onFocus"),oi=Symbol("onBlur"),be=Symbol("updateSize"),Ye=Symbol("intersectionObserver"),$t=Symbol("isElementInViewport"),ps=Symbol("announceModelVisibility"),Jt=Symbol("ariaLabel"),ki=Symbol("altDefaulted"),we=Symbol("statusElement"),ms=Symbol("updateStatus"),$e=Symbol("loadedTime"),ie=Symbol("updateSource"),Er=Symbol("markLoaded"),os=Symbol("container"),q=Symbol("input"),Mr=Symbol("canvas"),f=Symbol("scene"),N=Symbol("needsRender"),ht=Symbol("tick"),Z=Symbol("onModelLoad"),fs=Symbol("onResize"),C=Symbol("renderer"),It=Symbol("progressTracker"),$r=Symbol("getLoaded"),Ot=Symbol("getModelIsVisible"),oe=Symbol("shouldAttemptPreload"),ft=r=>({x:r.x,y:r.y,z:r.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),Di=r=>({u:r.x,v:r.y,toString(){return`${this.u} ${this.v}`}});class ke extends Tt{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[dr]=!1,this[ur]=!1,this[pr]=0,this[mr]="",this[fr]=null,this[gr]=ln(()=>{const i=this.getBoundingClientRect();this[be](i)},Xl),this[vr]=ln(i=>{const a=this.modelIsVisible;a!==i&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:a}}))},Kl),this[yr]=null,this[br]=null,this[wr]=new Wl,this[Sr]=()=>{this[we].textContent=this[ri]},this[_r]=()=>{this[we].textContent=""},this[xr]=i=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:i.sourceEvent}}))},this.attachShadow({mode:"open"});const t=this.shadowRoot;zo(t),this[os]=t.querySelector(".container"),this[q]=t.querySelector(".userInput"),this[Mr]=t.querySelector("canvas"),this[we]=t.querySelector("#status"),this[Ar]=this[q].getAttribute("aria-label");let e,s;if(this.isConnected){const i=this.getBoundingClientRect();e=i.width,s=i.height}else e=Ql,s=Zl;this[f]=new Ya({canvas:this[Mr],element:this,width:e,height:s}),Promise.resolve().then(()=>{this[be](this.getBoundingClientRect())}),Is&&(this[Ze]=new ResizeObserver(i=>{if(!this[C].isPresenting)for(let a of i)a.target===this&&this[be](a.contentRect)})),Os?this[Ye]=new IntersectionObserver(i=>{for(let a of i)if(a.target===this){const n=this.modelIsVisible;this[$t]=a.isIntersecting,this[ps](n),this[$t]&&!this.loaded&&this[ie]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[$t]=!0}static get is(){return"model-viewer"}static set modelCacheSize(t){W[qi].evictionThreshold=t}static get modelCacheSize(){return W[qi].evictionThreshold}static set minimumRenderScale(t){t>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),t<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),gt.singleton.minScale=t}static get minimumRenderScale(){return gt.singleton.minScale}get loaded(){return this[$r]()}get[(dr=$t,ur=jt,pr=$e,mr=ri,fr=zt,gr=ii,vr=ps,yr=Ze,br=Ye,wr=It,C)](){return gt.singleton}get modelIsVisible(){return this[Ot]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Is?this[Ze].observe(this):self.addEventListener("resize",this[ii]),Os&&this[Ye].observe(this),this.addEventListener("focus",this[ai]),this.addEventListener("blur",this[oi]);const t=this[C];t.addEventListener("contextlost",this[ni]),t.registerScene(this[f]),this[zt]!=null&&(self.clearTimeout(this[zt]),this[zt]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Is?this[Ze].unobserve(this):self.removeEventListener("resize",this[ii]),Os&&this[Ye].unobserve(this),this.removeEventListener("focus",this[ai]),this.removeEventListener("blur",this[oi]);const t=this[C];t.removeEventListener("contextlost",this[ni]),t.unregisterScene(this[f]),this[zt]=self.setTimeout(()=>{this[f].dispose(),this[zt]=null},ql)}updated(t){super.updated(t),t.has("src")&&(this.src==null?(this[jt]=!1,this[$e]=0,this[f].reset()):this.src!==this[f].url&&(this[jt]=!1,this[$e]=0,this[ie]())),t.has("alt")&&this[q].setAttribute("aria-label",this[Jt]),t.has("generateSchema")&&(this.generateSchema?this[f].updateSchema(this.src):this[f].updateSchema(null))}toDataURL(t,e){return this[C].displayCanvas(this[f]).toDataURL(t,e)}async toBlob(t){const e=t?t.mimeType:void 0,s=t?t.qualityArgument:void 0,i=t?t.idealAspect:void 0,{width:a,height:n,idealAspect:o,aspect:l}=this[f],{dpr:c,scaleFactor:p}=this[C];let h=a*p*c,d=n*p*c,u=0,g=0;if(i===!0)if(o>l){const b=d;d=Math.round(h/o),g=(b-d)/2}else{const b=h;h=Math.round(d*o),u=(b-h)/2}vt.width=h,vt.height=d;try{return new Promise(async(b,w)=>{vt.getContext("2d").drawImage(this[C].displayCanvas(this[f]),u,g,h,d,0,0,h,d),vt.toBlob(M=>{if(!M)return w(new Error("Unable to retrieve canvas blob"));b(M)},e,s)})}finally{this[be]({width:a,height:n})}}registerEffectComposer(t){t.setRenderer(this[C].threeRenderer),t.setMainCamera(this[f].getCamera()),t.setMainScene(this[f]),this[f].effectRenderer=t}unregisterEffectComposer(){this[f].effectRenderer=null}registerRenderer(t){this[f].externalRenderer=t}unregisterRenderer(){this[f].externalRenderer=null}get[Jt](){return this[ki]}get[ki](){return this.alt==null||this.alt==="null"?this[Ar]:this.alt}[$r](){return this[jt]}[Ot](){return this.loaded&&this[$t]}[oe](){return!!this.src&&this[$t]}[be]({width:t,height:e}){t===0||e===0||(this[os].style.width=`${t}px`,this[os].style.height=`${e}px`,this[fs]({width:t,height:e}))}[ht](t,e){var s;(s=this[f].effectRenderer)===null||s===void 0||s.beforeRender(t,e)}[Er](){this[jt]||(this[jt]=!0,this[$e]=performance.now())}[N](){this[f].queueRender()}[Z](){}[ms](t){this[ri]=t;const e=this.getRootNode();e!=null&&e.activeElement===this&&this[we].textContent!=t&&(this[we].textContent=t)}[(Sr=ai,_r=oi,fs)](t){this[f].setSize(t.width,t.height)}async[(xr=ni,ie)](){const t=this[f];if(this.loaded||!this[oe]()||this.src===t.url)return;this.generateSchema&&t.updateSchema(this.src),this[ms]("Loading"),t.stopAnimation();const e=this[It].beginActivity("model-load"),s=this.src;try{const i=t.setSource(s,n=>e(ws(n,0,1)*.95)),a=this[Ii]();await Promise.all([i,a]),this[Er](),this[Z](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(n=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:s}})),n()})})})}catch(i){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:i}}))}finally{e(1)}}}_s([S({type:String})],ke.prototype,"alt",void 0);_s([S({type:String})],ke.prototype,"src",void 0);_s([S({type:Boolean,attribute:"with-credentials"})],ke.prototype,"withCredentials",void 0);_s([S({type:Boolean,attribute:"generate-schema"})],ke.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var li=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const Tr=1e3,Je=Symbol("changeAnimation"),ot=Symbol("paused"),Yl={repetitions:1/0,pingpong:!1},Jl=r=>{var t;class e extends r{constructor(...i){super(i),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[t]=!0,this[f].subscribeMixerEvent("loop",a=>{const n=a.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:n}}))}),this[f].subscribeMixerEvent("finished",()=>{this[ot]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[f].animationNames:[]}get duration(){return this[f].duration}get paused(){return this[ot]}get currentTime(){return this[f].animationTime}set currentTime(i){this[f].animationTime=i,this[N]()}get timeScale(){return this[f].animationTimeScale}set timeScale(i){this[f].animationTimeScale=i}pause(){this[ot]||(this[ot]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(i){this.availableAnimations.length>0&&(this[ot]=!1,this[Je](i),this.dispatchEvent(new CustomEvent("play")))}[(t=ot,Z)](){super[Z](),this[ot]=!0,this.animationName!=null&&this[Je](),this.autoplay&&this.play()}[ht](i,a){super[ht](i,a),!(this[ot]||!this[Ot]()&&!this[C].isPresenting)&&(this[f].updateAnimation(a/Tr),this[N]())}updated(i){super.updated(i),i.has("autoplay")&&this.autoplay&&this.play(),i.has("animationName")&&this[Je]()}[Je](i=Yl){var a;const n=(a=i.repetitions)!==null&&a!==void 0?a:1/0,o=i.pingpong?Ja:n===1?to:eo;this[f].playAnimation(this.animationName,this.animationCrossfadeDuration/Tr,o,n),this[ot]&&(this[f].updateAnimation(0),this[N]())}}return li([S({type:Boolean})],e.prototype,"autoplay",void 0),li([S({type:String,attribute:"animation-name"})],e.prototype,"animationName",void 0),li([S({type:Number,attribute:"animation-crossfade-duration"})],e.prototype,"animationCrossfadeDuration",void 0),e};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=Symbol("hotspotMap"),ci=Symbol("mutationCallback"),Se=Symbol("observer"),hi=Symbol("addHotspot"),Cr=Symbol("removeHotspot"),di=new so,tc=r=>{var t,e,s;class i extends r{constructor(){super(...arguments),this[t]=new Map,this[e]=n=>{n.forEach(o=>{(!(o instanceof MutationRecord)||o.type==="childList")&&(o.addedNodes.forEach(l=>{this[hi](l)}),o.removedNodes.forEach(l=>{this[Cr](l)}),this[N]())})},this[s]=new MutationObserver(this[ci])}connectedCallback(){super.connectedCallback();for(let o=0;o<this.children.length;++o)this[hi](this.children[o]);const{ShadyDOM:n}=self;n==null?this[Se].observe(this,{childList:!0}):this[Se]=n.observeChildren(this,this[ci])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:n}=self;n==null?this[Se].disconnect():n.unobserveChildren(this[Se])}[(t=At,e=ci,s=Se,Z)](){super[Z]();const n=this[f];n.forHotspots(o=>{n.updateSurfaceHotspot(o)})}[ht](n,o){super[ht](n,o);const l=this[f],{annotationRenderer:c}=l,p=l.getCamera();l.shouldRender()&&(l.animateSurfaceHotspots(),l.updateHotspotsVisibility(p.position),c.domElement.style.display="",c.render(l,p))}updateHotspot(n){const o=this[At].get(n.name);o!=null&&(o.updatePosition(n.position),o.updateNormal(n.normal),o.surface=n.surface,this[f].updateSurfaceHotspot(o),this[N]())}queryHotspot(n){const o=this[At].get(n);if(o==null)return null;const l=ft(o.position),c=ft(o.normal),p=o.facingCamera,h=this[f],d=h.getCamera(),u=new ct;u.setFromMatrixPosition(o.matrixWorld),u.project(d);const g=h.width/2,b=h.height/2;u.x=u.x*g+g,u.y=-(u.y*b)+b;const w=ft(new ct(u.x,u.y,u.z));return!Number.isFinite(w.x)||!Number.isFinite(w.y)?null:{position:l,normal:c,canvasPosition:w,facingCamera:p}}positionAndNormalFromPoint(n,o){const l=this[f],c=l.getNDC(n,o),p=l.positionAndNormalFromPoint(c);if(p==null)return null;di.copy(l.target.matrixWorld).invert();const h=ft(p.position.applyMatrix4(di)),d=ft(p.normal.transformDirection(di));let u=null;return p.uv!=null&&(u=Di(p.uv)),{position:h,normal:d,uv:u}}surfaceFromPoint(n,o){const l=this[f],c=l.getNDC(n,o);return l.surfaceFromPoint(c)}[hi](n){if(!(n instanceof HTMLElement&&n.slot.indexOf("hotspot")===0))return;let o=this[At].get(n.slot);o!=null?o.increment():(o=new io({name:n.slot,position:n.dataset.position,normal:n.dataset.normal,surface:n.dataset.surface}),this[At].set(n.slot,o),this[f].addHotspot(o)),this[f].queueRender()}[Cr](n){if(!(n instanceof HTMLElement))return;const o=this[At].get(n.slot);o&&(o.decrement()&&(this[f].removeHotspot(o),this[At].delete(n.slot)),this[f].queueRender())}}return i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=r=>t=>{try{const e=Bi(t),s=(e.length?e[0].terms:[]).filter(i=>i&&i.type==="ident").map(i=>i.value).filter(i=>r.indexOf(i)>-1);return new Set(s)}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};let Rr=!1,Ir=!1;const Or="#model-viewer-no-ar-fallback",sc=ec(["quick-look","scene-viewer","webxr","none"]),ic="webxr scene-viewer quick-look",z={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},lt=Symbol("arButtonContainer"),Lr=Symbol("enterARWithWebXR"),Fr=Symbol("openSceneViewer"),kr=Symbol("openIOSARQuickLook"),nc=Symbol("canActivateAR"),ts=Symbol("arMode"),ui=Symbol("arModes"),Wt=Symbol("arAnchor"),es=Symbol("preload"),ss=Symbol("onARButtonContainerClick"),pi=Symbol("onARStatus"),mi=Symbol("onARTracking"),fi=Symbol("onARTap"),_e=Symbol("selectARMode"),gi=Symbol("triggerLoad"),rc=r=>{var t,e,s,i,a,n,o,l,c,p;class h extends r{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=ic,this.iosSrc=null,this.xrEnvironment=!1,this[t]=!1,this[e]=this.shadowRoot.querySelector(".ar-button"),this[s]=document.createElement("a"),this[i]=new Set,this[a]=z.NONE,this[n]=!1,this[o]=u=>{u.preventDefault(),this.activateAR()},this[l]=({status:u})=>{(u===ce.NOT_PRESENTING||this[C].arRenderer.presentedScene===this[f])&&(this.setAttribute("ar-status",u),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:u}})),u===ce.NOT_PRESENTING?this.removeAttribute("ar-tracking"):u===ce.SESSION_STARTED&&this.setAttribute("ar-tracking",no.TRACKING))},this[c]=({status:u})=>{this.setAttribute("ar-tracking",u),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:u}}))},this[p]=u=>{u.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[ts]!==z.NONE}connectedCallback(){super.connectedCallback(),this[C].arRenderer.addEventListener("status",this[pi]),this.setAttribute("ar-status",ce.NOT_PRESENTING),this[C].arRenderer.addEventListener("tracking",this[mi]),this[Wt].addEventListener("message",this[fi])}disconnectedCallback(){super.disconnectedCallback(),this[C].arRenderer.removeEventListener("status",this[pi]),this[C].arRenderer.removeEventListener("tracking",this[mi]),this[Wt].removeEventListener("message",this[fi])}update(u){super.update(u),u.has("arScale")&&(this[f].canScale=this.arScale!=="fixed"),u.has("arPlacement")&&(this[f].updateShadow(),this[N]()),u.has("arModes")&&(this[ui]=sc(this.arModes)),(u.has("ar")||u.has("arModes")||u.has("src")||u.has("iosSrc"))&&this[_e]()}async activateAR(){switch(this[ts]){case z.QUICK_LOOK:await this[kr]();break;case z.WEBXR:await this[Lr]();break;case z.SCENE_VIEWER:this[Fr]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(t=nc,e=lt,s=Wt,i=ui,a=ts,n=es,o=ss,l=pi,c=mi,p=fi,_e)](){var u;let g=z.NONE;if(this.ar){if(this.src!=null)for(const b of this[ui]){if(b==="webxr"&&ia&&!Rr&&await this[C].arRenderer.supportsPresentation()){g=z.WEBXR;break}if(b==="scene-viewer"&&!Ir&&(To||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((u=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||u===void 0)&&u.includes("XR")))){g=z.SCENE_VIEWER;break}if(b==="quick-look"&&on){g=z.QUICK_LOOK;break}}g===z.NONE&&this.iosSrc!=null&&on&&(g=z.QUICK_LOOK)}if(g!==z.NONE)this[lt].classList.add("enabled"),this[lt].addEventListener("click",this[ss]);else if(this[lt].classList.contains("enabled")){this[lt].removeEventListener("click",this[ss]),this[lt].classList.remove("enabled");const b=ce.FAILED;this.setAttribute("ar-status",b),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:b}}))}this[ts]=g}async[Lr](){console.log("Attempting to present in AR with WebXR..."),await this[gi]();try{this[lt].removeEventListener("click",this[ss]);const{arRenderer:u}=this[C];u.placeOnWall=this.arPlacement==="wall",await u.present(this[f],this.xrEnvironment)}catch(u){console.warn("Error while trying to present in AR with WebXR"),console.error(u),await this[C].arRenderer.stopPresenting(),Rr=!0,console.warn("Falling back to next ar-mode"),await this[_e](),this.activateAR()}finally{this[_e]()}}async[gi](){this.loaded||(this[es]=!0,this[ie](),await Lo(this,"load"),this[es]=!1)}[oe](){return super[oe]()||this[es]}[Fr](){const u=self.location.toString(),g=new URL(u),b=new URL(this.src,u);b.hash&&(b.hash="");const w=new URLSearchParams(b.search);if(g.hash=Or,w.set("mode","ar_preferred"),w.has("disable_occlusion")||w.set("disable_occlusion","true"),this.arScale==="fixed"&&w.set("resizable","false"),this.arPlacement==="wall"&&w.set("enable_vertical_placement","true"),w.has("sound")){const x=new URL(w.get("sound"),u);w.set("sound",x.toString())}if(w.has("link")){const x=new URL(w.get("link"),u);w.set("link",x.toString())}const M=`intent://arvr.google.com/scene-viewer/1.2?${w.toString()+"&file="+encodeURIComponent(b.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(g.toString())};end;`,F=()=>{self.location.hash===Or&&(Ir=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[_e]())};self.addEventListener("hashchange",F,{once:!0}),this[Wt].setAttribute("href",M),console.log("Attempting to present in AR with Scene Viewer..."),this[Wt].click()}async[kr](){const u=!this.iosSrc;this[lt].classList.remove("enabled");const g=u?await this.prepareUSDZ():this.iosSrc,b=new URL(g,self.location.toString());if(u){const F=self.location.toString(),x=new URL(F),Y=new URL(this.src,x);Y.hash&&(b.hash=Y.hash)}this.arScale==="fixed"&&(b.hash&&(b.hash+="&"),b.hash+="allowsContentScaling=0");const w=this[Wt];w.setAttribute("rel","ar");const M=document.createElement("img");w.appendChild(M),w.setAttribute("href",b.toString()),u&&w.setAttribute("download","model.usdz"),w.style.display="none",w.isConnected||this.shadowRoot.appendChild(w),console.log("Attempting to present in AR with Quick Look..."),w.click(),w.removeChild(M),u&&URL.revokeObjectURL(g),this[lt].classList.add("enabled")}async prepareUSDZ(){const u=this[It].beginActivity("usdz-conversion");await this[gi]();const{model:g,shadow:b,target:w}=this[f];if(g==null)return"";let M=!1;b!=null&&(M=b.visible,b.visible=!1),u(.2);const F=new ro;w.remove(g),g.position.copy(w.position),g.updateWorldMatrix(!1,!0);const x=await F.parseAsync(g);g.position.set(0,0,0),w.add(g);const Y=new Blob([x],{type:"model/vnd.usdz+zip"}),m=URL.createObjectURL(Y);return u(1),b!=null&&(b.visible=M),m}}return Gt([S({type:Boolean,attribute:"ar"})],h.prototype,"ar",void 0),Gt([S({type:String,attribute:"ar-scale"})],h.prototype,"arScale",void 0),Gt([S({type:String,attribute:"ar-placement"})],h.prototype,"arPlacement",void 0),Gt([S({type:String,attribute:"ar-modes"})],h.prototype,"arModes",void 0),Gt([S({type:String,attribute:"ios-src"})],h.prototype,"iosSrc",void 0),Gt([S({type:Boolean,attribute:"xr-environment"})],h.prototype,"xrEnvironment",void 0),h};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vi=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const ac=100,oc="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",lc="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",cc="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",yi={AUTO:"auto"},Dr={AUTO:"auto",EAGER:"eager"},qt=Symbol("defaultProgressBarElement"),bi=Symbol("posterContainerElement"),Xt=Symbol("defaultPosterElement"),xe=Symbol("shouldDismissPoster"),wi=Symbol("hidePoster"),is=Symbol("modelIsRevealed"),Si=Symbol("updateProgressBar"),hc=Symbol("ariaLabelCallToAction"),_i=Symbol("onProgress"),dc=r=>{var t,e,s,i,a,n,o,l;class c extends r{constructor(...h){super(...h),this.poster=null,this.reveal=yi.AUTO,this.loading=Dr.AUTO,this[t]=!1,this[e]=!1,this[s]=this.shadowRoot.querySelector(".slot.poster"),this[i]=this.shadowRoot.querySelector("#default-poster"),this[a]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[n]=this[Xt].getAttribute("aria-label"),this[o]=Oo(w=>{const M=this[qt].parentNode;requestAnimationFrame(()=>{this[qt].style.transform=`scaleX(${w})`,w===0&&(M.removeChild(this[qt]),M.appendChild(this[qt])),this[qt].classList.toggle("hide",w===1)})},ac),this[l]=w=>{const M=w.detail.totalProgress,F=w.detail.reason;M===1&&(this[Si].flush(),this.loaded&&(this[xe]||this.reveal===yi.AUTO)&&this[wi]()),this[Si](M),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:M,reason:F}}))};const d=self.ModelViewerElement||{},u=d.dracoDecoderLocation||oc;W.setDRACODecoderLocation(u);const g=d.ktx2TranscoderLocation||lc;W.setKTX2TranscoderLocation(g),d.meshoptDecoderLocation&&W.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const b=d.lottieLoaderLocation||cc;gt.singleton.textureUtils.lottieLoaderUrl=b}static set dracoDecoderLocation(h){W.setDRACODecoderLocation(h)}static get dracoDecoderLocation(){return W.getDRACODecoderLocation()}static set ktx2TranscoderLocation(h){W.setKTX2TranscoderLocation(h)}static get ktx2TranscoderLocation(){return W.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(h){W.setMeshoptDecoderLocation(h)}static get meshoptDecoderLocation(){return W.getMeshoptDecoderLocation()}static set lottieLoaderLocation(h){gt.singleton.textureUtils.lottieLoaderUrl=h}static get lottieLoaderLocation(){return gt.singleton.textureUtils.lottieLoaderUrl}static mapURLs(h){gt.singleton.loader[ao].manager.setURLModifier(h)}dismissPoster(){this.loaded?this[wi]():(this[xe]=!0,this[ie]())}showPoster(){const h=this[bi];if(h.classList.contains("show"))return;h.classList.add("show"),this[q].classList.remove("show");const d=this[Xt];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const u=this.modelIsVisible;this[is]=!1,this[ps](u)}getDimensions(){return ft(this[f].size)}getBoundingBoxCenter(){return ft(this[f].boundingBox.getCenter(new ct))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[It].addEventListener("progress",this[_i])}disconnectedCallback(){super.disconnectedCallback(),this[It].removeEventListener("progress",this[_i])}async updated(h){super.updated(h),h.has("poster")&&this.poster!=null&&(this[Xt].style.backgroundImage=`url(${this.poster})`),h.has("alt")&&this[Xt].setAttribute("aria-label",this[ki]),(h.has("reveal")||h.has("loading"))&&this[ie]()}[(t=is,e=xe,s=bi,i=Xt,a=qt,n=hc,o=Si,l=_i,oe)](){return!!this.src&&(this[xe]||this.loading===Dr.EAGER||this.reveal===yi.AUTO&&this[$t])}[wi](){this[xe]=!1;const h=this[bi];if(!h.classList.contains("show"))return;h.classList.remove("show"),this[q].classList.add("show");const d=this.modelIsVisible;this[is]=!0,this[ps](d);const u=this.getRootNode();u&&u.activeElement===this&&this[q].focus();const g=this[Xt];g.setAttribute("aria-hidden","true"),g.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[Ot](){return super[Ot]()&&this[is]}}return vi([S({type:String})],c.prototype,"poster",void 0),vi([S({type:String})],c.prototype,"reveal",void 0),vi([S({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi=function(r,t,e,s){var i=arguments.length,a=i<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,s);else for(var o=r.length-1;o>=0;o--)(n=r[o])&&(a=(i<3?n(a):i>3?n(t,e,a):n(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a};const uc=Math.PI/32,pc=3e3,mc={basis:[Ss(V(uc,"rad"))],keywords:{auto:[null]}},Kt=Symbol("autoRotateStartTime"),Ai=Symbol("radiansPerSecond"),Pr=Symbol("syncRotationRate"),Ei=Symbol("onCameraChange"),fc=r=>{var t,e,s;class i extends r{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=pc,this.rotationPerSecond="auto",this[t]=performance.now(),this[e]=0,this[s]=n=>{this.autoRotate&&n.detail.source==="user-interaction"&&(this[Kt]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Ei]),this[Kt]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Ei]),this[Kt]=performance.now()}updated(n){super.updated(n),n.has("autoRotate")&&(this[Kt]=performance.now())}[(t=Kt,e=Ai,Pr)](n){this[Ai]=n[0]}[ht](n,o){if(super[ht](n,o),!this.autoRotate||!this[Ot]()||this[C].isPresenting)return;const l=Math.min(o,n-this[Kt]-this.autoRotateDelay);l>0&&(this[f].yaw=this.turntableRotation+this[Ai]*l*.001)}get turntableRotation(){return this[f].yaw}resetTurntableRotation(n=0){this[f].yaw=n}}return s=Ei,xi([S({type:Boolean,attribute:"auto-rotate"})],i.prototype,"autoRotate",void 0),xi([S({type:Number,attribute:"auto-rotate-delay"})],i.prototype,"autoRotateDelay",void 0),xi([pt({intrinsics:mc,updateHandler:Pr}),S({type:String,attribute:"rotation-per-second"})],i.prototype,"rotationPerSecond",void 0),i};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=tc(Gl(fc(No(_l(rc(dc(Jl(ke))))))));customElements.define("model-viewer",gc);export{Sl as $,xc as C,Ac as H,wc as a,Ne as b,ws as c,Ve as d,Ro as e,Ii as f,Mr as g,be as h,Sc as i,ht as j,C as k,ti as l,ei as m,Oe as n,Bt as o,Bi as p,cr as q,Bl as r,_c as t};
