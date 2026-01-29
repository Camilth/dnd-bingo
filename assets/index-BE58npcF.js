(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const z=globalThis,O=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),G=new WeakMap;let te=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(O&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=G.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&G.set(t,e))}return e}toString(){return this.cssText}};const ae=o=>new te(typeof o=="string"?o:o+"",void 0,j),k=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,i,s)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[s+1],o[0]);return new te(t,o,j)},le=(o,e)=>{if(O)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=z.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,o.appendChild(r)}},L=O?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ae(t)})(o):o;const{is:ce,defineProperty:de,getOwnPropertyDescriptor:he,getOwnPropertyNames:pe,getOwnPropertySymbols:ue,getPrototypeOf:me}=Object,W=globalThis,Z=W.trustedTypes,fe=Z?Z.emptyScript:"",ge=W.reactiveElementPolyfillSupport,E=(o,e)=>o,M={toAttribute(o,e){switch(e){case Boolean:o=o?fe:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},re=(o,e)=>!ce(o,e),V={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=V){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&de(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:s}=he(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i?.call(this);s?.call(this,n),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??V}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=me(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,r=[...pe(t),...ue(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(L(i))}else e!==void 0&&t.push(L(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return le(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:M).toAttribute(t,r.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),n=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:M;this._$Em=i;const l=n.fromAttribute(t,s.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,s){if(e!==void 0){const n=this.constructor;if(i===!1&&(s=this[e]),r??=n.getPropertyOptions(e),!((r.hasChanged??re)(s,t)||r.useDefault&&r.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:s},n){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),s!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,s]of r){const{wrapped:n}=s,l=this[i];n!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[E("elementProperties")]=new Map,x[E("finalized")]=new Map,ge?.({ReactiveElement:x}),(W.reactiveElementVersions??=[]).push("2.1.2");const D=globalThis,Y=o=>o,B=D.trustedTypes,J=B?B.createPolicy("lit-html",{createHTML:o=>o}):void 0,ie="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+b,be=`<${se}>`,$=document,S=()=>$.createComment(""),I=o=>o===null||typeof o!="object"&&typeof o!="function",H=Array.isArray,ye=o=>H(o)||typeof o?.[Symbol.iterator]=="function",N=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,Q=/>/g,y=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,K=/"/g,oe=/^(?:script|style|textarea|title)$/i,ve=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),m=ve(1),A=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),X=new WeakMap,v=$.createTreeWalker($,129);function ne(o,e){if(!H(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return J!==void 0?J.createHTML(e):e}const $e=(o,e)=>{const t=o.length-1,r=[];let i,s=e===2?"<svg>":e===3?"<math>":"",n=C;for(let l=0;l<t;l++){const c=o[l];let d,h,a=-1,p=0;for(;p<c.length&&(n.lastIndex=p,h=n.exec(c),h!==null);)p=n.lastIndex,n===C?h[1]==="!--"?n=q:h[1]!==void 0?n=Q:h[2]!==void 0?(oe.test(h[2])&&(i=RegExp("</"+h[2],"g")),n=y):h[3]!==void 0&&(n=y):n===y?h[0]===">"?(n=i??C,a=-1):h[1]===void 0?a=-2:(a=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?y:h[3]==='"'?K:F):n===K||n===F?n=y:n===q||n===Q?n=C:(n=y,i=void 0);const f=n===y&&o[l+1].startsWith("/>")?" ":"";s+=n===C?c+be:a>=0?(r.push(d),c.slice(0,a)+ie+c.slice(a)+b+f):c+b+(a===-2?l:f)}return[ne(o,s+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class P{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let s=0,n=0;const l=e.length-1,c=this.parts,[d,h]=$e(e,t);if(this.el=P.createElement(d,r),v.currentNode=this.el.content,t===2||t===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=v.nextNode())!==null&&c.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(ie)){const p=h[n++],f=i.getAttribute(a).split(b),w=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:w[2],strings:f,ctor:w[1]==="."?xe:w[1]==="?"?Ae:w[1]==="@"?_e:U}),i.removeAttribute(a)}else a.startsWith(b)&&(c.push({type:6,index:s}),i.removeAttribute(a));if(oe.test(i.tagName)){const a=i.textContent.split(b),p=a.length-1;if(p>0){i.textContent=B?B.emptyScript:"";for(let f=0;f<p;f++)i.append(a[f],S()),v.nextNode(),c.push({type:2,index:++s});i.append(a[p],S())}}}else if(i.nodeType===8)if(i.data===se)c.push({type:2,index:s});else{let a=-1;for(;(a=i.data.indexOf(b,a+1))!==-1;)c.push({type:7,index:s}),a+=b.length-1}s++}}static createElement(e,t){const r=$.createElement("template");return r.innerHTML=e,r}}function _(o,e,t=o,r){if(e===A)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const s=I(e)?void 0:e._$litDirective$;return i?.constructor!==s&&(i?._$AO?.(!1),s===void 0?i=void 0:(i=new s(o),i._$AT(o,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=_(o,i._$AS(o,e.values),i,r)),e}class we{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??$).importNode(t,!0);v.currentNode=i;let s=v.nextNode(),n=0,l=0,c=r[0];for(;c!==void 0;){if(n===c.index){let d;c.type===2?d=new R(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new ke(s,this,e)),this._$AV.push(d),c=r[++l]}n!==c?.index&&(s=v.nextNode(),n++)}return v.currentNode=$,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=_(this,e,t),I(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ye(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=P.createElement(ne(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const s=new we(i,this),n=s.u(this.options);s.p(t),this.T(n),this._$AH=s}}_$AC(e){let t=X.get(e.strings);return t===void 0&&X.set(e.strings,t=new P(e)),t}k(e){H(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const s of e)i===t.length?t.push(r=new R(this.O(S()),this.O(S()),this,this.options)):r=t[i],r._$AI(s),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=Y(e).nextSibling;Y(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class U{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=u}_$AI(e,t=this,r,i){const s=this.strings;let n=!1;if(s===void 0)e=_(this,e,t,0),n=!I(e)||e!==this._$AH&&e!==A,n&&(this._$AH=e);else{const l=e;let c,d;for(e=s[0],c=0;c<s.length-1;c++)d=_(this,l[r+c],t,c),d===A&&(d=this._$AH[c]),n||=!I(d)||d!==this._$AH[c],d===u?e=u:e!==u&&(e+=(d??"")+s[c+1]),this._$AH[c]=d}n&&!i&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class xe extends U{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Ae extends U{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class _e extends U{constructor(e,t,r,i,s){super(e,t,r,i,s),this.type=5}_$AI(e,t=this){if((e=_(this,e,t,0)??u)===A)return;const r=this._$AH,i=e===u&&r!==u||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==u&&(r===u||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ke{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){_(this,e)}}const Ce=D.litHtmlPolyfillSupport;Ce?.(P,R),(D.litHtmlVersions??=[]).push("3.3.2");const Ee=(o,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const s=t?.renderBefore??null;r._$litPart$=i=new R(e.insertBefore(S(),s),s,void 0,t??{})}return i._$AI(o),i};const T=globalThis;class g extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ee(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}g._$litElement$=!0,g.finalized=!0,T.litElementHydrateSupport?.({LitElement:g});const Se=T.litElementPolyfillSupport;Se?.({LitElement:g});(T.litElementVersions??=[]).push("4.2.2");const Ie=k`
    :host {
        --background: #0f172a;
        --card: #1e293b;
        --muted: #334155;
        --muted-foreground: #94a3b8;
        --foreground: #f1f5f9;
        --primary: #3b82f6;
        --primary-foreground: #ffffff;
        --border: rgba(71, 85, 105, 0.5);
        --accent: #475569;
        --radius: 0.75rem;
    }

    section {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 0.5rem;
        width: min(90vw, 600px);
        margin: 0 auto;
        padding: 1rem;
        background: var(--card);
        border-radius: var(--radius);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
    }

    .tile {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        font-size: clamp(0.75rem, 2vw, 0.875rem);
        font-weight: 500;
        text-align: center;
        padding: 0.75rem;
        aspect-ratio: 1;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--foreground);
        overflow: hidden;
        box-sizing: border-box;
    }

    .tile:not(.free):hover {
        background: var(--accent);
        border-color: var(--muted-foreground);
        transform: translateY(-2px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    }

    .tile:not(.free):active {
        transform: translateY(0);
    }

    .tile.marked:not(.free) {
        background: linear-gradient(to bottom right, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.9));
        border-color: #34d399;
        color: var(--primary-foreground);
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.3);
    }

    .tile.marked:not(.free):hover {
        background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
        box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
    }

    .tile.free {
        background: linear-gradient(to bottom right, var(--primary), #2563eb);
        color: var(--primary-foreground);
        font-weight: 600;
        font-size: clamp(1rem, 2.5vw, 1.25rem);
        border-color: #60a5fa;
        box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        cursor: default;
    }

    .tile-text {
        position: relative;
        z-index: 1;
        word-wrap: break-word;
        line-height: 1.3;
    }

    .checkmark {
        position: absolute;
        top: 0.375rem;
        right: 0.375rem;
        width: 1.25rem;
        height: 1.25rem;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 2;
        animation: checkmark-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .checkmark svg {
        width: 0.75rem;
        height: 0.75rem;
        color: #059669;
    }

    @keyframes checkmark-pop {
        0% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }

    @media (max-width: 640px) {
        section {
            width: 95vw;
            gap: 0.375rem;
            padding: 0.75rem;
        }

        .tile {
            font-size: clamp(0.65rem, 2.5vw, 0.75rem);
            padding: 0.5rem;
        }

        .tile.free {
            font-size: clamp(0.875rem, 3vw, 1rem);
        }

        .checkmark {
            width: 1rem;
            height: 1rem;
            top: 0.25rem;
            right: 0.25rem;
        }

        .checkmark svg {
            width: 0.625rem;
            height: 0.625rem;
        }
    }
`;class Pe extends g{static styles=[Ie];static properties={items:{type:Array},marked:{type:Set},difficulty:{type:String},hasWon:{type:Boolean}};constructor(){super(),this.items=[],this.marked=new Set([12]),this.difficulty="single",this.hasWon=!1}async firstUpdated(){await this.loadItems()}async loadItems(){try{const r=[...(await(await fetch(new URL("data:application/json;base64,ew0KICAiaXRlbXMiOiBbDQogICAgIk11dGVkIHdoaWxlIHRhbGtpbmciLA0KICAgICJDaGlsZC9QZXQgYXBwZWFyYW5jZSIsDQogICAgIkF3a3dhcmQgc2lsZW5jZSIsDQogICAgIkNhbiBldmVyeW9uZSBzZWUgbXkgc2NyZWVuPyIsDQogICAgIkNvZmZlZSBzcGlsbCIsDQogICAgIkhlYXZ5IGJyZWF0aGluZyBvbiBtaWMiLA0KICAgICJTZW50IGFuIGVtb2ppIiwNCiAgICAiSW50ZXJuZXQgbGFnIiwNCiAgICAiU21hbGwgdGFsayBhYm91dCB3ZWF0aGVyIiwNCiAgICAiTGluayBwb3N0ZWQgaW4gY2hhdCIsDQogICAgIk1lZXRpbmcgc3RhcnRzIGxhdGUiLA0KICAgICJTb21lb25lIGVhdGluZyBvbiBjYW1lcmEiLA0KICAgICJMb3VkIHR5cGluZyBub2lzZSIsDQogICAgIkhlYWRwaG9uZXMgZGlzY29ubmVjdGVkIiwNCiAgICAiU25lZXplIG9yIGNvdWdoIiwNCiAgICAiRG91YmxlIGJvb2tlZCIsDQogICAgIkhhbmQgcmFpc2VkIiwNCiAgICAiU2NyZWVuIHNoYXJpbmcgZmFpbCIsDQogICAgIkJhY2tncm91bmQgYmx1ciBvbiIsDQogICAgIkVjaG9pbmcgYXVkaW8iLA0KICAgICJDYW1lcmEgbGVmdCBvZmYiLA0KICAgICJDaGVja2luZyB0aGUgdGltZSIsDQogICAgIlBvbGl0ZSBpbnRlcnJ1cHRpb24iLA0KICAgICJJbnNwaXJhdGlvbmFsIHF1b3RlIg0KICBdDQp9",import.meta.url))).json()).items];r.splice(12,0,"FREE"),this.items=r}catch(e){console.error("Failed to load bingo items:",e)}}reset(){this.marked=new Set([12]),this.hasWon=!1,this.requestUpdate()}toggleSquare(e){e!==12&&(this.marked.has(e)?this.marked.delete(e):this.marked.add(e),this.requestUpdate(),this.checkWin())}checkWin(){const e=this.hasValidBingo();e&&!this.hasWon&&(this.hasWon=!0,this.announceWin()),!e&&this.hasWon&&(this.hasWon=!1)}hasValidBingo(){let e=0;switch(this.difficulty){case"single":e=1;break;case"double":e=2;break;case"full":return this.marked.size===25}let t=0;for(let s=0;s<5;s++)[s*5,s*5+1,s*5+2,s*5+3,s*5+4].every(l=>this.marked.has(l))&&t++;for(let s=0;s<5;s++)[s,s+5,s+10,s+15,s+20].every(l=>this.marked.has(l))&&t++;const r=[0,6,12,18,24],i=[4,8,12,16,20];return r.every(s=>this.marked.has(s))&&t++,i.every(s=>this.marked.has(s))&&t++,t>=e}announceWin(){this.dispatchEvent(new CustomEvent("win",{bubbles:!0,composed:!0}))}render(){return m`
            <section>
                ${this.items.map((e,t)=>{const r=this.marked.has(t),i=t===12;return m`
                        <button 
                            class="tile ${i?"free":""} ${r?"marked":""}"
                            @click=${()=>this.toggleSquare(t)}
                            ?disabled=${i}
                        >
                            ${r&&!i?m`
                                <span class="checkmark">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                            `:""}
                            <span class="tile-text">${e}</span>
                        </button>
                    `})}
            </section>
        `}}customElements.define("bingo-grid",Pe);const Re=k`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --muted: #334155;
        --radius: 0.75rem;
    }

    .backdrop {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 1rem;
        animation: fade-in 0.2s ease;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem;
        max-width: 900px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        position: relative;
    }

    @keyframes slide-up {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h2 {
        color: var(--foreground);
        font-size: 1.875rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    .subtitle {
        color: var(--muted-foreground);
        margin: 0 0 2rem 0;
        text-align: center;
        font-size: 1rem;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }

    .difficulty-btn {
        all: unset;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
        min-height: 200px;
    }

    .difficulty-btn:hover {
        background: #475569;
        border-color: var(--primary);
        transform: translateY(-4px);
        box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.4);
    }

    .difficulty-btn:active {
        transform: translateY(-2px);
    }

    .icon {
        font-size: 3.5rem;
        line-height: 1;
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
        text-align: center;
    }

    .description {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-align: center;
    }

    @media (max-width: 768px) {
        .modal {
            max-width: 600px;
        }

        .buttons {
            grid-template-columns: 1fr;
            gap: 0.75rem;
        }

        .difficulty-btn {
            padding: 1.5rem;
            min-height: auto;
            flex-direction: row;
            text-align: left;
            gap: 1rem;
        }

        .icon {
            font-size: 2.5rem;
            min-width: 3rem;
        }

        .title {
            font-size: 1.125rem;
        }

        .description {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 640px) {
        .modal {
            padding: 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .subtitle {
            font-size: 0.875rem;
            margin-bottom: 1.5rem;
        }
    }
`;class ze extends g{static styles=[Re];selectDifficulty(e){this.dispatchEvent(new CustomEvent("difficulty-selected",{detail:{difficulty:e},bubbles:!0,composed:!0}))}render(){return m`
            <div class="backdrop">
                <div class="modal">
                    <h2>Kies je moeilijkheidsgraad</h2>
                    <p class="subtitle">Selecteer hoe je wilt spelen</p>

                    <div class="buttons">
                        <button class="difficulty-btn" @click=${()=>this.selectDifficulty("single")}>
                            <span class="icon">📍</span>
                            <span class="title">Enkele Rij</span>
                            <span class="description">1 rij bingo</span>
                        </button>

                        <button class="difficulty-btn" @click=${()=>this.selectDifficulty("double")}>
                            <span class="icon">📍📍</span>
                            <span class="title">Dubbele Rij</span>
                            <span class="description">2 rijen bingo</span>
                        </button>

                        <button class="difficulty-btn" @click=${()=>this.selectDifficulty("full")}>
                            <span class="icon">🏆</span>
                            <span class="title">Volle Kaart</span>
                            <span class="description">Alle vakjes</span>
                        </button>
                    </div>
                </div>
            </div>
        `}}customElements.define("difficulty-selector",ze);const Be=k`
  :host {
    --muted: #334155;
    --foreground: #f1f5f9;
    --border: rgba(71, 85, 105, 0.5);
    --radius: 0.75rem;
  }

  .reset-btn {
    all: unset;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--muted);
    border: 2px solid var(--border);
    border-radius: var(--radius);
    color: var(--foreground);
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
  }

  .reset-btn:hover {
    background: #475569;
    border-color: #64748b;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  .reset-btn:active {
    transform: scale(0.98);
  }

  .icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.5s ease;
  }

  .reset-btn:hover .icon {
    transform: rotate(-180deg);
  }
`;class We extends g{static styles=[Be];handleClick(){this.dispatchEvent(new CustomEvent("reset-requested",{bubbles:!0,composed:!0}))}render(){return m`
      <button class="reset-btn" @click=${this.handleClick}>
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        <span>Probeer Opnieuw</span>
      </button>
    `}}customElements.define("reset-button",We);const Ue=k`
  :host {
    --card: #1e293b;
    --foreground: #f1f5f9;
    --muted-foreground: #94a3b8;
    --border: rgba(71, 85, 105, 0.5);
    --destructive: #ef4444;
    --radius: 0.75rem;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    animation: fade-in 0.2s ease;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal {
    background: var(--card);
    border: 2px solid var(--border);
    border-radius: var(--radius);
    padding: 2rem;
    max-width: 400px;
    width: 100%;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    animation: slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @keyframes slide-up {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h3 {
    color: var(--foreground);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
  }

  p {
    color: var(--muted-foreground);
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    gap: 0.75rem;
    flex-direction: column-reverse;
  }

  .btn {
    all: unset;
    padding: 0.75rem 1.5rem;
    border-radius: calc(var(--radius) - 0.25rem);
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  .btn-cancel {
    background: #334155;
    border: 2px solid var(--border);
    color: var(--foreground);
  }

  .btn-cancel:hover {
    background: #475569;
  }

  .btn-confirm {
    background: var(--destructive);
    border: 2px solid transparent;
    color: white;
  }

  .btn-confirm:hover {
    background: #dc2626;
    box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.4);
  }

  .btn:active {
    transform: scale(0.98);
  }

  @media (min-width: 640px) {
    .buttons {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
`;class Ne extends g{static styles=[Ue];static properties={open:{type:Boolean}};constructor(){super(),this.open=!1}handleConfirm(){this.dispatchEvent(new CustomEvent("confirm",{detail:{confirmed:!0},bubbles:!0,composed:!0}))}handleCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleCancel()}render(){return this.open?m`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <h3>Weet je het zeker?</h3>
          <p>Je huidige voortgang gaat verloren en het spel wordt gereset.</p>
          
          <div class="buttons">
            <button class="btn btn-cancel" @click=${this.handleCancel}>
              Nee, annuleren
            </button>
            <button class="btn btn-confirm" @click=${this.handleConfirm}>
              Ja, opnieuw beginnen
            </button>
          </div>
        </div>
      </div>
    `:m``}}customElements.define("confirmation-modal",Ne);const Me=k`
  :host {
    --card: #1e293b;
    --foreground: #f1f5f9;
    --muted-foreground: #94a3b8;
    --border: rgba(71, 85, 105, 0.5);
    --primary: #3b82f6;
    --success: #10b981;
    --success-dark: #059669;
    --radius: 0.75rem;
  }

  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    animation: fade-in 0.3s ease;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .modal {
    background: linear-gradient(to bottom right, #1e293b, #0f172a);
    border: 3px solid var(--success);
    border-radius: calc(var(--radius) * 1.5);
    padding: 3rem 2rem 2rem;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 25px 50px -12px rgba(16, 185, 129, 0.6),
                0 0 100px rgba(16, 185, 129, 0.3);
    animation: winner-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    text-align: center;
  }

  @keyframes winner-pop {
    0% {
      transform: scale(0.3) rotate(-10deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.05) rotate(2deg);
    }
    100% {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
  }

  .icon-container {
    position: absolute;
    top: -3rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .trophy-icon {
    font-size: 6rem;
    animation: trophy-bounce 1s ease infinite;
    filter: drop-shadow(0 10px 20px rgba(255, 215, 0, 0.5));
  }

  @keyframes trophy-bounce {
    0%, 100% {
      transform: translateY(0) rotate(-5deg);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
  }

  h2 {
    color: var(--success);
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 900;
    margin: 0 0 0.5rem 0;
    letter-spacing: 0.1em;
    text-shadow: 0 0 20px rgba(16, 185, 129, 0.5);
    animation: bingo-flash 1.5s ease infinite;
  }

  @keyframes bingo-flash {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
      text-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
    }
  }

  .congrats {
    color: var(--foreground);
    font-size: 1.25rem;
    margin: 0 0 2.5rem 0;
    line-height: 1.5;
  }

  .buttons {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  }

  .btn {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 1.5rem;
    border-radius: calc(var(--radius) - 0.25rem);
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    box-sizing: border-box;
  }

  .btn .icon {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }

  .btn-view {
    background: #334155;
    border: 2px solid var(--border);
    color: var(--foreground);
  }

  .btn-view:hover {
    background: #475569;
    border-color: var(--primary);
    box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
  }

  .btn-view:hover .icon {
    transform: scale(1.1);
  }

  .btn-play-again {
    background: linear-gradient(to right, var(--success), var(--success-dark));
    border: 2px solid transparent;
    color: white;
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.4);
  }

  .btn-play-again:hover {
    background: linear-gradient(to right, #34d399, var(--success));
    box-shadow: 0 8px 12px -1px rgba(16, 185, 129, 0.6);
    transform: translateY(-2px);
  }

  .btn-play-again:hover .icon {
    transform: rotate(-180deg);
  }

  .btn:active {
    transform: scale(0.98);
  }

  @media (min-width: 640px) {
    .buttons {
      flex-direction: row;
    }
  }

  @media (max-width: 640px) {
    .modal {
      padding: 2.5rem 1.5rem 1.5rem;
    }

    .trophy-icon {
      font-size: 4.5rem;
    }

    .icon-container {
      top: -2.5rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    .congrats {
      font-size: 1rem;
    }
  }
`;class Oe extends g{static styles=[Me];static properties={open:{type:Boolean}};constructor(){super(),this.open=!1}handleClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handlePlayAgain(){this.dispatchEvent(new CustomEvent("play-again",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose()}render(){return this.open?m`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <div class="icon-container">
            <div class="trophy-icon">🏆</div>
          </div>
          
          <h2>BINGO!</h2>
          <p class="congrats">Gefeliciteerd! Je hebt gewonnen!</p>
          
          <div class="buttons">
            <button class="btn btn-view" @click=${this.handleClose}>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Bekijk Kaart</span>
            </button>
            <button class="btn btn-play-again" @click=${this.handlePlayAgain}>
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Opnieuw Spelen</span>
            </button>
          </div>
        </div>
      </div>
    `:m``}}customElements.define("winner-modal",Oe);class je extends g{static styles=k`
        :host {
            display: flex;
            font-family: system-ui;
            padding: 1rem;
            flex-direction: column;
            width: 100%;
            min-height: 100vh;
            max-height: 100vh;
            background: #0f172a;
            overflow: hidden;
        }

        h1 {
            text-align: center;
            color: #f1f5f9;
            margin-bottom: 2rem;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            overflow: hidden;
        }
    `;static properties={gameStarted:{type:Boolean},difficulty:{type:String},showConfirmation:{type:Boolean},showWinner:{type:Boolean}};constructor(){super(),this.gameStarted=!1,this.difficulty="",this.showConfirmation=!1,this.showWinner=!1}connectedCallback(){super.connectedCallback(),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden"}disconnectedCallback(){super.disconnectedCallback(),document.body.style.overflow="",document.documentElement.style.overflow=""}handleDifficultySelect(e){this.difficulty=e.detail.difficulty,this.gameStarted=!0}handleResetRequest(){this.showConfirmation=!0}handleConfirmReset(e){e.detail.confirmed&&this.resetGame(),this.showConfirmation=!1}handleCancelReset(){this.showConfirmation=!1}handleWin(){this.showWinner=!0}handleCloseWinner(){this.showWinner=!1}handlePlayAgain(){this.showWinner=!1,this.resetGame()}resetGame(){this.gameStarted=!1,this.difficulty="",this.shadowRoot.querySelector("bingo-grid")?.reset()}render(){return m`
      <h1>🚗 Dashcam Bingo</h1>
      
      <div class="game-container">
        <bingo-grid 
          .difficulty=${this.difficulty}
          @win=${this.handleWin}>
        </bingo-grid>
        ${this.gameStarted?m`
          <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
        `:""}
      </div>

      ${this.gameStarted?"":m`
        <difficulty-selector 
          @difficulty-selected=${this.handleDifficultySelect}>
        </difficulty-selector>
      `}

      <confirmation-modal
        ?open=${this.showConfirmation}
        @confirm=${this.handleConfirmReset}
        @cancel=${this.handleCancelReset}>
      </confirmation-modal>

      <winner-modal
        ?open=${this.showWinner}
        @close=${this.handleCloseWinner}
        @play-again=${this.handlePlayAgain}>
      </winner-modal>
    `}}customElements.define("dashcam-app",je);const De="modulepreload",He=function(o){return"/Dashcam-Bingo/"+o},ee={},Te=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let c=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),l=n?.nonce||n?.getAttribute("nonce");i=c(t.map(d=>{if(d=He(d),d in ee)return;ee[d]=!0;const h=d.endsWith(".css"),a=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${a}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":De,h||(p.as="script"),p.crossOrigin="",p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((f,w)=>{p.addEventListener("load",f),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(n){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=n,window.dispatchEvent(l),!l.defaultPrevented)throw n}return i.then(n=>{for(const l of n||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function Ge(o={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:n}=o;let l,c;const d=async(a=!0)=>{await c};async function h(){if("serviceWorker"in navigator){if(l=await Te(async()=>{const{Workbox:a}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:a}},[]).then(({Workbox:a})=>new a("/Dashcam-Bingo/sw.js",{scope:"/Dashcam-Bingo/",type:"classic"})).catch(a=>{n?.(a)}),!l)return;l.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),l.addEventListener("installed",a=>{a.isUpdate||r?.()}),l.register({immediate:e}).then(a=>{s?s("/Dashcam-Bingo/sw.js",a):i?.(a)}).catch(a=>{n?.(a)})}}return c=h(),d}Ge({immediate:!0});window.addEventListener("beforeinstallprompt",o=>{o.preventDefault(),window.deferredPrompt=o});
