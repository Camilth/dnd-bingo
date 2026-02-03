(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const M=globalThis,L=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,N=Symbol(),q=new WeakMap;let ie=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==N)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(L&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=q.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&q.set(t,e))}return e}toString(){return this.cssText}};const ce=n=>new ie(typeof n=="string"?n:n+"",void 0,N),v=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[o+1],n[0]);return new ie(t,n,N)},de=(n,e)=>{if(L)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),i=M.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=t.cssText,n.appendChild(r)}},V=L?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return ce(t)})(n):n;const{is:he,defineProperty:ue,getOwnPropertyDescriptor:pe,getOwnPropertyNames:me,getOwnPropertySymbols:ge,getPrototypeOf:fe}=Object,H=globalThis,X=H.trustedTypes,be=X?X.emptyScript:"",ve=H.reactiveElementPolyfillSupport,C=(n,e)=>n,O={toAttribute(n,e){switch(e){case Boolean:n=n?be:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},oe=(n,e)=>!he(n,e),G={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),H.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=G){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);i!==void 0&&ue(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=pe(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){const l=i?.call(this);o?.call(this,s),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??G}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,r=[...me(t),...ge(t)];for(const i of r)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,i]of t)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const i=this._$Eu(t,r);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const i of r)t.unshift(V(i))}else e!==void 0&&t.push(V(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return de(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:O).toAttribute(t,r.type);this._$Em=e,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),s=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:O;this._$Em=i;const l=s.fromAttribute(t,o.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(e,t,r,i=!1,o){if(e!==void 0){const s=this.constructor;if(i===!1&&(o=this[e]),r??=s.getPropertyOptions(e),!((r.hasChanged??oe)(o,t)||r.useDefault&&r.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:i,wrapped:o},s){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,o]of r){const{wrapped:s}=o,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,o,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,ve?.({ReactiveElement:E}),(H.reactiveElementVersions??=[]).push("2.1.2");const I=globalThis,F=n=>n,j=I.trustedTypes,K=j?j.createPolicy("lit-html",{createHTML:n=>n}):void 0,ne="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+y,ye=`<${se}>`,$=document,P=()=>$.createComment(""),T=n=>n===null||typeof n!="object"&&typeof n!="function",W=Array.isArray,we=n=>W(n)||typeof n?.[Symbol.iterator]=="function",U=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,J=/>/g,w=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,ee=/"/g,ae=/^(?:script|style|textarea|title)$/i,xe=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),u=xe(1),_=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),te=new WeakMap,x=$.createTreeWalker($,129);function le(n,e){if(!W(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return K!==void 0?K.createHTML(e):e}const $e=(n,e)=>{const t=n.length-1,r=[];let i,o=e===2?"<svg>":e===3?"<math>":"",s=S;for(let l=0;l<t;l++){const d=n[l];let c,h,a=-1,p=0;for(;p<d.length&&(s.lastIndex=p,h=s.exec(d),h!==null);)p=s.lastIndex,s===S?h[1]==="!--"?s=Z:h[1]!==void 0?s=J:h[2]!==void 0?(ae.test(h[2])&&(i=RegExp("</"+h[2],"g")),s=w):h[3]!==void 0&&(s=w):s===w?h[0]===">"?(s=i??S,a=-1):h[1]===void 0?a=-2:(a=s.lastIndex-h[2].length,c=h[1],s=h[3]===void 0?w:h[3]==='"'?ee:Q):s===ee||s===Q?s=w:s===Z||s===J?s=S:(s=w,i=void 0);const b=s===w&&n[l+1].startsWith("/>")?" ":"";o+=s===S?d+ye:a>=0?(r.push(c),d.slice(0,a)+ne+d.slice(a)+y+b):d+y+(a===-2?l:b)}return[le(n,o+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class z{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,s=0;const l=e.length-1,d=this.parts,[c,h]=$e(e,t);if(this.el=z.createElement(c,r),x.currentNode=this.el.content,t===2||t===3){const a=this.el.content.firstChild;a.replaceWith(...a.childNodes)}for(;(i=x.nextNode())!==null&&d.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const a of i.getAttributeNames())if(a.endsWith(ne)){const p=h[s++],b=i.getAttribute(a).split(y),k=/([.?@])?(.*)/.exec(p);d.push({type:1,index:o,name:k[2],strings:b,ctor:k[1]==="."?Ee:k[1]==="?"?_e:k[1]==="@"?Ae:R}),i.removeAttribute(a)}else a.startsWith(y)&&(d.push({type:6,index:o}),i.removeAttribute(a));if(ae.test(i.tagName)){const a=i.textContent.split(y),p=a.length-1;if(p>0){i.textContent=j?j.emptyScript:"";for(let b=0;b<p;b++)i.append(a[b],P()),x.nextNode(),d.push({type:2,index:++o});i.append(a[p],P())}}}else if(i.nodeType===8)if(i.data===se)d.push({type:2,index:o});else{let a=-1;for(;(a=i.data.indexOf(y,a+1))!==-1;)d.push({type:7,index:o}),a+=y.length-1}o++}}static createElement(e,t){const r=$.createElement("template");return r.innerHTML=e,r}}function A(n,e,t=n,r){if(e===_)return e;let i=r!==void 0?t._$Co?.[r]:t._$Cl;const o=T(e)?void 0:e._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(n),i._$AT(n,t,r)),r!==void 0?(t._$Co??=[])[r]=i:t._$Cl=i),i!==void 0&&(e=A(n,i._$AS(n,e.values),i,r)),e}class ke{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??$).importNode(t,!0);x.currentNode=i;let o=x.nextNode(),s=0,l=0,d=r[0];for(;d!==void 0;){if(s===d.index){let c;d.type===2?c=new B(o,o.nextSibling,this,e):d.type===1?c=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(c=new Se(o,this,e)),this._$AV.push(c),d=r[++l]}s!==d?.index&&(o=x.nextNode(),s++)}return x.currentNode=$,i}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class B{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),T(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==_&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):we(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=z.createElement(le(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const o=new ke(i,this),s=o.u(this.options);o.p(t),this.T(s),this._$AH=o}}_$AC(e){let t=te.get(e.strings);return t===void 0&&te.set(e.strings,t=new z(e)),t}k(e){W(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new B(this.O(P()),this.O(P()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=F(e).nextSibling;F(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=m}_$AI(e,t=this,r,i){const o=this.strings;let s=!1;if(o===void 0)e=A(this,e,t,0),s=!T(e)||e!==this._$AH&&e!==_,s&&(this._$AH=e);else{const l=e;let d,c;for(e=o[0],d=0;d<o.length-1;d++)c=A(this,l[r+d],t,d),c===_&&(c=this._$AH[d]),s||=!T(c)||c!==this._$AH[d],c===m?e=m:e!==m&&(e+=(c??"")+o[d+1]),this._$AH[d]=c}s&&!i&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ee extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}class _e extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}}class Ae extends R{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??m)===_)return;const r=this._$AH,i=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==m&&(r===m||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Se{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const Ce=I.litHtmlPolyfillSupport;Ce?.(z,B),(I.litHtmlVersions??=[]).push("3.3.2");const Pe=(n,e,t)=>{const r=t?.renderBefore??e;let i=r._$litPart$;if(i===void 0){const o=t?.renderBefore??null;r._$litPart$=i=new B(e.insertBefore(P(),o),o,void 0,t??{})}return i._$AI(n),i};const Y=globalThis;class f extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Pe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}}f._$litElement$=!0,f.finalized=!0,Y.litElementHydrateSupport?.({LitElement:f});const Te=Y.litElementPolyfillSupport;Te?.({LitElement:f});(Y.litElementVersions??=[]).push("4.2.2");const ze=v`
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
        max-width: 600px;
        aspect-ratio: 1;
        margin: 0 auto;
        padding: 1rem;
        background: var(--card);
        border-radius: var(--radius);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--border);
        box-sizing: border-box;
    }

    .tile-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
    }

    .tooltip {
        position: absolute;
        bottom: calc(100% + 0.5rem);
        background: rgba(15, 23, 42, 0.98);
        color: #f1f5f9;
        padding: 0.75rem 1rem;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.4;
        max-width: 250px;
        min-width: 180px;
        width: max-content;
        text-align: center;
        z-index: 1000;
        pointer-events: none;
        border: 1px solid rgba(59, 130, 246, 0.5);
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
        animation: tooltip-appear 0.2s ease;
        white-space: normal;
        word-wrap: break-word;
    }

    /* Positionering varianten */
    .tooltip-left {
        left: 0%;
        transform: translateX(0%) translateY(0);
    }

    .tooltip-left::after {
        left: 20%;
    }

    .tooltip-left-center {
        left: 50%;
        transform: translateX(-25%) translateY(0);
    }

    .tooltip-left-center::after {
        left: 35%;
    }

    .tooltip-center {
        left: 50%;
        transform: translateX(-50%) translateY(0);
    }

    .tooltip-center::after {
        left: 50%;
    }

    .tooltip-right-center {
        left: 50%;
        transform: translateX(-75%) translateY(0);
    }

    .tooltip-right-center::after {
        left: 65%;
    }

    .tooltip-right {
        right: 0%;
        left: auto;
        transform: translateX(0%) translateY(0);
    }

    .tooltip-right::after {
        left: 80%;
    }

    @keyframes tooltip-appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /* Pijltje onder tooltip */
    .tooltip::after {
        content: '';
        position: absolute;
        top: 100%;
        transform: translateX(-50%);
        border: 0.5rem solid transparent;
        border-top-color: rgba(15, 23, 42, 0.98);
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
        font-size: clamp(0.7rem, 1.8vw, 0.875rem);
        font-weight: 500;
        text-align: center;
        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        color: var(--foreground);
        overflow: hidden;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;

        /* Voorkom text selectie en blauw highlight */
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        /* Voorkom context menu op lang indrukken */
        touch-action: manipulation;
    }

    /* Hover alleen voor devices met pointer (desktop) */
    @media (hover: hover) and (pointer: fine) {
        .tile:not(.free):hover {
            background: var(--accent);
            border-color: var(--muted-foreground);
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }
    }

    /* Long-press effect voor touch devices */
    .tile:not(.free).long-pressing {
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

    @media (hover: hover) and (pointer: fine) {
        .tile.marked:not(.free):hover {
            background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
            box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
        }
    }

    .tile.marked:not(.free).long-pressing {
        background: linear-gradient(to bottom right, rgba(52, 211, 153, 0.9), rgba(16, 185, 129, 0.9));
        box-shadow: 0 6px 8px -1px rgba(16, 185, 129, 0.4);
    }

    .tile.free {
        background: linear-gradient(to bottom right, var(--primary), #2563eb);
        color: var(--primary-foreground);
        font-weight: 600;
        font-size: clamp(0.95rem, 2.5vw, 1.25rem);
        border-color: #60a5fa;
        box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        cursor: default;
    }

    .tile-text {
        position: relative;
        z-index: 1;
        line-height: 1.2;
        word-break: break-word;
        hyphens: auto;
        padding: 0.125rem;
        width: 100%;
        /* Extra bescherming tegen selectie */
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .checkmark {
        position: absolute;
        top: 0.25rem;
        right: 0.25rem;
        width: 1.1rem;
        height: 1.1rem;
        background: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 2;
        animation: checkmark-pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        /* Voorkom selectie van checkmark */
        pointer-events: none;
    }

    .checkmark svg {
        width: 0.7rem;
        height: 0.7rem;
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
            width: calc(100vw - 1rem);
            max-width: calc(100vw - 1rem);
            gap: 0.25rem;
            padding: 0.5rem;
            margin: 0 0.5rem;
        }

        .tile {
            font-size: clamp(0.7rem, 2vw, 0.7rem);
            padding: 0.2rem;
            border-width: 1.5px;
            border-radius: 0.4rem;
        }

        .tile.free {
            font-size: clamp(0.8rem, 2.8vw, 0.95rem);
        }

        .checkmark {
            width: 0.85rem;
            height: 0.85rem;
            top: 0.15rem;
            right: 0.15rem;
        }

        .checkmark svg {
            width: 0.55rem;
            height: 0.55rem;
        }

        .tile-text {
            line-height: 1.1;
            padding: 0.1rem;
        }

        .tooltip {
            max-width: 200px;
            min-width: 150px;
            font-size: 0.8125rem;
            padding: 0.625rem 0.875rem;
        }

        .tooltip::after {
            border-width: 0.4rem;
        }
    }

    @media (max-width: 400px) {
        section {
            width: calc(100vw - 0.5rem);
            max-width: calc(100vw - 0.5rem);
            gap: 0.2rem;
            padding: 0.4rem;
            margin: 0 0.25rem;
        }

        .tile {
            font-size: clamp(0.6rem, 1.8vw, 0.6rem);
            padding: 0.15rem;
            border-width: 1px;
        }

        .tile.free {
            font-size: clamp(0.7rem, 2.5vw, 0.85rem);
        }

        .checkmark {
            width: 0.75rem;
            height: 0.75rem;
            top: 0.1rem;
            right: 0.1rem;
        }

        .checkmark svg {
            width: 0.5rem;
            height: 0.5rem;
        }

        .tooltip {
            max-width: 180px;
            min-width: 130px;
            font-size: 0.75rem;
            padding: 0.5rem 0.75rem;
        }

        .tooltip::after {
            border-width: 0.375rem;
        }
    }
`;class Be{constructor(){this.sounds={},this.enabled=this.loadEnabledState(),this.volume=.7,this.loadSounds()}loadEnabledState(){const e=localStorage.getItem("soundEnabled");return e===null?!0:e==="true"}saveEnabledState(){localStorage.setItem("soundEnabled",this.enabled.toString())}loadSounds(){this.loadAudioFile("click","/sounds/click.wav"),this.loadAudioFile("tick","/sounds/tick.wav"),this.loadAudioFile("win","/sounds/win.wav"),this.loadAudioFile("check","/sounds/check.mp3"),this.loadAudioFile("uncheck","/sounds/uncheck.mp3")}loadAudioFile(e,t){const r=new Audio(t);r.volume=this.volume,r.preload="auto",r.setAttribute("controlsList","nodownload"),r.setAttribute("disablepictureinpicture",""),r.removeAttribute("controls"),r.addEventListener("error",i=>{console.error(`❌ Failed to load sound "${e}" from ${t}`),console.error("Error details:",{error:i,src:r.src,networkState:r.networkState,readyState:r.readyState})}),this.sounds[e]=()=>{if(!this.enabled)return;const i=r.cloneNode();i.volume=this.volume,i.setAttribute("controlsList","nodownload"),i.setAttribute("disablepictureinpicture",""),i.removeAttribute("controls"),i.play().catch(o=>console.log("Audio play failed:",o)),i.addEventListener("ended",()=>{i.remove()})}}play(e){this.sounds[e]&&this.sounds[e]()}toggle(){return this.enabled=!this.enabled,this.saveEnabledState(),window.dispatchEvent(new CustomEvent("sound-toggled",{detail:{enabled:this.enabled}})),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}isEnabled(){return this.enabled}}const g=new Be;class Me extends f{static styles=[ze];static properties={items:{type:Array},marked:{type:Set},difficulty:{type:String},hasWon:{type:Boolean},longPressIndex:{type:Number},longPressTimer:{type:Number,state:!0},wasLongPress:{type:Boolean,state:!0}};constructor(){super(),this.items=[],this.marked=new Set([12]),this.difficulty="single",this.hasWon=!1,this.longPressIndex=null,this.longPressTimer=null,this.wasLongPress=!1}async firstUpdated(){await this.loadItems()}async loadItems(){try{const t=await(await fetch(new URL("/dnd-bingo/assets/temp-CBYr-4HC.json",import.meta.url))).json(),r=this.getRandomItems(t.easy,10),i=this.getRandomItems(t.medium,10),o=this.getRandomItems(t.hard,4),s=[...r,...i,...o],l=this.shuffleArray(s);l.splice(12,0,{title:"Gratis",description:"Gratis vakje!"}),this.items=l}catch(e){console.error("Failed to load bingo items:",e)}}getRandomItems(e,t){return!e||e.length===0?(console.warn("Array is empty or undefined"),[]):e.length<=t?[...e]:this.shuffleArray([...e]).slice(0,t)}shuffleArray(e){const t=[...e];for(let r=t.length-1;r>0;r--){const i=Math.floor(Math.random()*(r+1));[t[r],t[i]]=[t[i],t[r]]}return t}reset(){this.marked=new Set([12]),this.hasWon=!1,this.loadItems(),this.requestUpdate()}getTooltipClass(e){const t=e%5;return t===0?"tooltip-left":t===1?"tooltip-left-center":t===3?"tooltip-right-center":t===4?"tooltip-right":"tooltip-center"}handlePressStart(e,t){e!==12&&(this.wasLongPress=!1,this.longPressTimer=setTimeout(()=>{this.wasLongPress=!0,this.longPressIndex=e,this.requestUpdate()},150))}handlePressEnd(e,t){e!==12&&(this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),setTimeout(()=>{this.longPressIndex=null,this.wasLongPress=!1,this.requestUpdate()},50))}handlePressMove(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressTimer=null),this.longPressIndex=null,this.wasLongPress=!1,this.requestUpdate()}toggleSquare(e,t){if(e!==12){if(this.wasLongPress){t.preventDefault();return}this.marked.has(e)?(this.marked.delete(e),g.play("uncheck")):(this.marked.add(e),g.play("check")),this.requestUpdate(),this.checkWin()}}checkWin(){const e=this.hasValidBingo();e&&!this.hasWon&&(this.hasWon=!0,g.play("win"),this.announceWin()),!e&&this.hasWon&&(this.hasWon=!1)}hasValidBingo(){let e=0;switch(this.difficulty){case"single":e=1;break;case"double":e=2;break;case"full":return this.marked.size===25}let t=0;for(let o=0;o<5;o++)[o*5,o*5+1,o*5+2,o*5+3,o*5+4].every(l=>this.marked.has(l))&&t++;for(let o=0;o<5;o++)[o,o+5,o+10,o+15,o+20].every(l=>this.marked.has(l))&&t++;const r=[0,6,12,18,24],i=[4,8,12,16,20];return r.every(o=>this.marked.has(o))&&t++,i.every(o=>this.marked.has(o))&&t++,t>=e}announceWin(){this.dispatchEvent(new CustomEvent("win",{bubbles:!0,composed:!0}))}render(){return u`
            <section>
                ${this.items.map((e,t)=>{const r=this.marked.has(t),i=t===12,o=this.longPressIndex===t,s=typeof e=="string"?e:e.title,l=typeof e=="string"?"":e.description,d=this.getTooltipClass(t);return u`
                        <div class="tile-container">
                            ${o&&l?u`
                                <div class="tooltip ${d}">
                                    ${l}
                                </div>
                            `:""}
                            <button
                                    class="tile ${i?"free":""} ${r?"marked":""} ${o?"long-pressing":""}"
                                    @click=${c=>this.toggleSquare(t,c)}
                                    @mousedown=${c=>this.handlePressStart(t,c)}
                                    @mouseup=${c=>this.handlePressEnd(t,c)}
                                    @mouseleave=${()=>this.handlePressMove()}
                                    @touchstart=${c=>this.handlePressStart(t,c)}
                                    @touchend=${c=>this.handlePressEnd(t,c)}
                                    @touchmove=${()=>this.handlePressMove()}
                                    @contextmenu=${c=>c.preventDefault()}
                                    ?disabled=${i}
                            >
                                ${r&&!i?u`
                                    <span class="checkmark">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                `:""}
                                <span class="tile-text">${s}</span>
                            </button>
                        </div>
                    `})}
            </section>
        `}}customElements.define("bingo-grid",Me);const je=v`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
        --muted: #334155;
        --radius: 0.75rem;

        /* Progressieve moeilijkheidskleuren: groen → oranje → rood */
        --easy-light: #10b981;
        --easy-dark: #059669;

        --medium-light: #f59e0b;
        --medium-dark: #d97706;

        --hard-light: #ef4444;
        --hard-dark: #dc2626;
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

    h1 {
        color: var(--foreground);
        font-size: 2rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        text-align: center;
    }

    h2 {
        color: var(--foreground);
        font-size: 1rem;
        font-weight: 400;
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
        display: grid;
        grid-template-rows: auto auto auto; /* Icon, title, description */
        align-items: center;
        justify-items: center;
        gap: 0.75rem;
        padding: 2rem 1.5rem;
        background: var(--muted);
        border: 2px solid var(--border);
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-sizing: border-box;
        color: var(--foreground);
    }

    .icon-wrapper {
        width: 5rem;
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.75rem;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        flex-shrink: 0;
    }

    /* Groen = Makkelijk */
    .icon-wrapper-green {
        background: linear-gradient(135deg, var(--easy-light) 0%, var(--easy-dark) 100%);
    }

    /* Oranje = Gemiddeld */
    .icon-wrapper-orange {
        background: linear-gradient(135deg, var(--medium-light) 0%, var(--medium-dark) 100%);
    }

    /* Rood = Moeilijk */
    .icon-wrapper-red {
        background: linear-gradient(135deg, var(--hard-light) 0%, var(--hard-dark) 100%);
    }

    .icon {
        width: 3.5rem;
        height: 3.5rem;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .difficulty-btn:hover {
            background: #475569;
            transform: translateY(-4px);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
        }

        .difficulty-btn:hover .icon-wrapper {
            transform: scale(1.1);
        }

        .difficulty-btn:hover .icon-wrapper-green {
            box-shadow: 0 10px 25px -5px rgba(16, 185, 129, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-orange {
            box-shadow: 0 10px 25px -5px rgba(245, 158, 11, 0.6);
        }

        .difficulty-btn:hover .icon-wrapper-red {
            box-shadow: 0 10px 25px -5px rgba(239, 68, 68, 0.6);
        }
    }

    .difficulty-btn:active {
        transform: translateY(-2px);
    }

    .title {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--foreground);
        text-align: center;
        width: 100%;
        height: 2rem; /* Vaste hoogte voor 1 regel */
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1.2;
    }

    .description {
        font-size: 0.875rem;
        color: var(--muted-foreground);
        text-align: center;
        width: 100%;
        height: 4rem; /* Vaste hoogte voor ~3 regels */
        display: flex;
        align-items: flex-start;
        justify-content: center;
        line-height: 1.4;
        padding: 0 0.5rem;
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
            grid-template-columns: auto 1fr; /* Icon links, tekst rechts */
            grid-template-rows: auto auto;
            column-gap: 1.5rem;
            row-gap: 0.5rem;
            align-items: center;
            justify-items: start;
        }

        .icon-wrapper {
            width: 4rem;
            height: 4rem;
            min-width: 4rem;
            grid-row: 1 / 3; /* Icon spans beide rijen */
            grid-column: 1;
            border-radius: 1rem;
        }

        .icon {
            width: 3rem;
            height: 3rem;
        }

        .title {
            grid-row: 1;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            height: auto;
            font-size: 1.125rem;
        }

        .description {
            grid-row: 2;
            grid-column: 2;
            text-align: left;
            justify-content: flex-start;
            align-items: flex-start;
            height: auto;
            font-size: 0.8rem;
            padding: 0;
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

        .icon-wrapper {
            width: 3.5rem;
            height: 3.5rem;
            min-width: 3.5rem;
        }

        .icon {
            width: 2.5rem;
            height: 2.5rem;
        }
    }

    @media (max-width: 464px) {
        .difficulty-btn {
            padding: 1rem;
            column-gap: 1rem;
        }
    }
`,D=v`
    .touch-interactive {
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        touch-action: manipulation;
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    @media (hover: hover) and (pointer: fine) {
        .touch-interactive:hover:not(:disabled) {
            opacity: 0.8;
            transform: translateY(-2px);
        }
    }

    .touch-interactive.pressing:not(:disabled) {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;class He extends f{static styles=[je,D];static properties={pressingButton:{type:String,state:!0}};constructor(){super(),this.pressingButton=null}selectDifficulty(e){g.play("click"),this.dispatchEvent(new CustomEvent("difficulty-selected",{detail:{difficulty:e},bubbles:!0,composed:!0}))}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return u`
            <div class="backdrop">
                <div class="modal" data-nosnippet>
                    <h1>Welcome to DnD Bingo</h1>
                    
                    <h2 class="subtitle">Choose your difficulty to start the game</h2>

                    <div class="buttons">
                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="single"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("single")}
                                @touchstart=${()=>this.handleTouchStart("single")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-green">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Eerste rij - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <!-- Tweede rij - leeg (donkerder groen met opacity) -->
                                    <circle cx="6" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="14" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>

                                    <!-- Derde rij - leeg (donkerder groen met opacity) -->
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Single Row</span>
                            <span class="description">Win by ticking off 1 row horizontally, vertically or diagonally</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="double"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("double")}
                                @touchstart=${()=>this.handleTouchStart("double")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-orange">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Eerste rij - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <!-- Tweede rij - gevuld (wit) -->
                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>

                                    <!-- Derde rij - leeg (donkerder blauw met opacity) -->
                                    <circle cx="6" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="14" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                    <circle cx="22" cy="22" r="2.5" fill="rgba(255, 255, 255, 0.3)"/>
                                </svg>
                            </div>
                            <span class="title">Double Row</span>
                            <span class="description">Win by ticking off 2 rows horizontally, vertically or diagonally</span>
                        </button>

                        <button
                                class="difficulty-btn touch-interactive ${this.pressingButton==="full"?"pressing":""}"
                                @click=${()=>this.selectDifficulty("full")}
                                @touchstart=${()=>this.handleTouchStart("full")}
                                @touchend=${this.handleTouchEnd}
                                @touchmove=${this.handleTouchEnd}
                                @touchcancel=${this.handleTouchEnd}
                                @contextmenu=${e=>e.preventDefault()}
                        >
                            <div class="icon-wrapper icon-wrapper-red">
                                <svg class="icon" viewBox="0 0 28 28">
                                    <!-- Alle rijen - gevuld (wit) -->
                                    <circle cx="6" cy="6" r="2.5" fill="white"/>
                                    <circle cx="14" cy="6" r="2.5" fill="white"/>
                                    <circle cx="22" cy="6" r="2.5" fill="white"/>

                                    <circle cx="6" cy="14" r="2.5" fill="white"/>
                                    <circle cx="14" cy="14" r="2.5" fill="white"/>
                                    <circle cx="22" cy="14" r="2.5" fill="white"/>

                                    <circle cx="6" cy="22" r="2.5" fill="white"/>
                                    <circle cx="14" cy="22" r="2.5" fill="white"/>
                                    <circle cx="22" cy="22" r="2.5" fill="white"/>
                                </svg>
                            </div>
                            <span class="title">Full Card</span>
                            <span class="description">Win by checking off all the boxes on the card</span>
                        </button>
                    </div>
                </div>
            </div>
        `}}customElements.define("difficulty-selector",He);const Re=v`
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

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .reset-btn:hover {
            background: #475569;
            border-color: #64748b;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        }

        .reset-btn:hover .icon {
            transform: rotate(-180deg);
        }
    }

    .reset-btn:active {
        transform: scale(0.98);
    }

    .icon {
        width: 1.25rem;
        height: 1.25rem;
        transition: transform 0.5s ease;
    }
`;class De extends f{static styles=[Re,D];static properties={pressing:{type:Boolean,state:!0}};constructor(){super(),this.pressing=!1}handleClick(){g.play("click"),this.dispatchEvent(new CustomEvent("reset-requested",{bubbles:!0,composed:!0}))}handleTouchStart(){this.pressing=!0}handleTouchEnd(){this.pressing=!1}render(){return u`
            <button 
                class="reset-btn touch-interactive ${this.pressing?"pressing":""}"
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Try Again</span>
            </button>
        `}}customElements.define("reset-button",De);const Ue=v`
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

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-cancel:hover {
            background: #475569;
        }
    }

    .btn-confirm {
        background: var(--destructive);
        border: 2px solid transparent;
        color: white;
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-confirm:hover {
            background: #dc2626;
            box-shadow: 0 4px 6px -1px rgba(239, 68, 68, 0.4);
        }
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
`;class Oe extends f{static styles=[Ue,D];static properties={open:{type:Boolean},pressingButton:{type:String,state:!0}};constructor(){super(),this.open=!1,this.pressingButton=null}handleConfirm(){g.play("click"),this.dispatchEvent(new CustomEvent("confirm",{detail:{confirmed:!0},bubbles:!0,composed:!0}))}handleCancel(){g.play("click"),this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleCancel()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return this.open?u`
      <div class="backdrop" @click=${this.handleBackdropClick}>
        <div class="modal">
          <h3>Are you sure?</h3>
          <p>Your current progress will be lost and the game will reset.</p>
          
          <div class="buttons">
            <button 
                class="btn btn-cancel touch-interactive ${this.pressingButton==="cancel"?"pressing":""}"
                @click=${this.handleCancel}
                @touchstart=${()=>this.handleTouchStart("cancel")}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                No, cancel
            </button>
            <button 
                class="btn btn-confirm touch-interactive ${this.pressingButton==="confirm"?"pressing":""}"
                @click=${this.handleConfirm}
                @touchstart=${()=>this.handleTouchStart("confirm")}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @contextmenu=${e=>e.preventDefault()}
            >
                Yes, start over
            </button>
          </div>
        </div>
      </div>
    `:u``}}customElements.define("confirmation-modal",Oe);const Le=v`
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
        justify-content: center;
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

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-view:hover {
            background: #475569;
            border-color: var(--primary);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }

        .btn-view:hover .icon {
            transform: scale(1.1);
        }
    }

    .btn-play-again {
        background: linear-gradient(to right, var(--success), var(--success-dark));
        border: 2px solid transparent;
        color: white;
        box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.4);
    }

    /* Hover alleen op desktop */
    @media (hover: hover) and (pointer: fine) {
        .btn-play-again:hover {
            background: linear-gradient(to right, #34d399, var(--success));
            box-shadow: 0 8px 12px -1px rgba(16, 185, 129, 0.6);
            transform: translateY(-2px);
        }

        .btn-play-again:hover .icon {
            transform: rotate(-180deg);
        }
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
`;class Ne extends f{static styles=[Le,D];static properties={open:{type:Boolean},pressingButton:{type:String,state:!0}};constructor(){super(),this.open=!1,this.pressingButton=null}handleClose(){g.play("click"),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handlePlayAgain(){g.play("click"),this.dispatchEvent(new CustomEvent("play-again",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose()}handleTouchStart(e){this.pressingButton=e}handleTouchEnd(){this.pressingButton=null}render(){return this.open?u`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <div class="icon-container">
                        <div class="trophy-icon">🏆</div>
                    </div>
                    
                    <h2>BINGO!</h2>
                    <p class="congrats">Congratulations! You won!</p>
                    
                    <div class="buttons">
                        <button 
                            class="btn btn-view touch-interactive ${this.pressingButton==="view"?"pressing":""}"
                            @click=${this.handleClose}
                            @touchstart=${()=>this.handleTouchStart("view")}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${e=>e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            <span>Open Card</span>
                        </button>
                        <button 
                            class="btn btn-play-again touch-interactive ${this.pressingButton==="play-again"?"pressing":""}"
                            @click=${this.handlePlayAgain}
                            @touchstart=${()=>this.handleTouchStart("play-again")}
                            @touchend=${this.handleTouchEnd}
                            @touchmove=${this.handleTouchEnd}
                            @contextmenu=${e=>e.preventDefault()}
                        >
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            <span>Play Again</span>
                        </button>
                    </div>
                </div>
            </div>
        `:u``}}customElements.define("winner-modal",Ne);const Ie=v`
    :host {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 9999;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.8rem;
        height: 1.8rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1);
        }
    }

    button:active {
        transform: scale(0.95);
    }

    button.disabled {
        opacity: 0.6;
    }

    button.disabled .icon {
        color: #ef4444;
    }

    @media (max-width: 640px) {
        :host {
            top: 2.5rem;
            right: 0.5rem;
        }

        button {
            width: 3rem;
            height: 3rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;class We extends f{static styles=Ie;static properties={enabled:{type:Boolean,state:!0}};constructor(){super(),this.enabled=g.isEnabled(),this.handleSoundToggle=this.handleSoundToggle.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("sound-toggled",this.handleSoundToggle)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("sound-toggled",this.handleSoundToggle)}handleSoundToggle(e){this.enabled=e.detail.enabled}toggle(){this.enabled=g.toggle(),this.enabled&&g.play("click")}render(){return u`
            <button 
                @click=${this.toggle}
                class="${this.enabled?"":"disabled"}"
                title="${this.enabled?"Geluid uitschakelen":"Geluid inschakelen"}"
                aria-label="${this.enabled?"Geluid uitschakelen":"Geluid inschakelen"}"
            >
                ${this.enabled?u`
                    <!-- Volume Up Icon -->
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                `:u`
                    <!-- Volume Mute Icon -->
                    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clip-rule="evenodd" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                `}
            </button>
        `}}customElements.define("sound-toggle",We);const Ye=v`
    :host {
        position: fixed;
        top: 1rem;
        left: 1rem;
        z-index: 9999;
    }

    button {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.8rem;
        height: 3.8rem;
        background: rgba(30, 41, 59, 0.95);
        border: 2px solid rgba(71, 85, 105, 0.5);
        border-radius: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(8px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
        color: #f1f5f9;

        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        user-select: none;
        touch-action: manipulation;
    }

    .icon {
        width: 1.9rem;
        height: 1.9rem;
        transition: transform 0.2s ease;
    }

    @media (hover: hover) and (pointer: fine) {
        button:hover {
            background: rgba(51, 65, 85, 0.95);
            border-color: rgba(148, 163, 184, 0.5);
            transform: scale(1.05);
        }

        button:hover .icon {
            transform: scale(1.1) rotate(15deg);
        }
    }

    button:active,
    button.pressing {
        transform: scale(0.95);
    }

    @media (max-width: 640px) {
        :host {
            top: 2.5rem;
            left: 0.5rem;
        }

        button {
            width: 3rem;
            height: 3rem;
        }

        .icon {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;class qe extends f{static styles=Ye;static properties={pressing:{type:Boolean,state:!0}};constructor(){super(),this.pressing=!1}handleClick(){g.play("click"),this.dispatchEvent(new CustomEvent("help-requested",{bubbles:!0,composed:!0}))}handleTouchStart(){this.pressing=!0}handleTouchEnd(){this.pressing=!1}handleTouchCancel(){this.pressing=!1}render(){return u`
            <button 
                class="${this.pressing?"pressing":""}"
                @click=${this.handleClick}
                @touchstart=${this.handleTouchStart}
                @touchend=${this.handleTouchEnd}
                @touchmove=${this.handleTouchEnd}
                @touchcancel=${this.handleTouchCancel}
                @contextmenu=${e=>e.preventDefault()}
                title="Hoe werkt het spel?"
                aria-label="Help"
            >
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        `}}customElements.define("help-button",qe);const Ve=v`
    :host {
        --card: #1e293b;
        --foreground: #f1f5f9;
        --muted-foreground: #94a3b8;
        --border: rgba(71, 85, 105, 0.5);
        --primary: #3b82f6;
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
        z-index: 10000;
        padding: 1rem;
        animation: fade-in 0.2s ease;
        overflow-y: auto;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .modal {
        background: var(--card);
        border: 2px solid var(--border);
        border-radius: var(--radius);
        padding: 2rem 2rem 2rem;
        max-width: 37.5rem;
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

    .close-btn {
        all: unset;
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: var(--muted-foreground);
        border-radius: 0.5rem;
        transition: all 0.2s ease;
    }

    .close-btn svg {
        width: 1.5rem;
        height: 1.5rem;
    }

    @media (hover: hover) and (pointer: fine) {
        .close-btn:hover {
            background: rgba(71, 85, 105, 0.3);
            color: var(--foreground);
        }
    }

    .icon-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .help-icon {
        width: 4rem;
        height: 4rem;
        color: var(--primary);
    }

    h2 {
        color: var(--foreground);
        font-size: 1.875rem;
        font-weight: 700;
        margin: 0 0 1.5rem 0;
        text-align: center;
    }

    .content {
        height: 26rem;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;
        overflow-y: auto;
    }

    section {
        background: rgba(51, 65, 85, 0.3);
        padding: 1.5rem;
        border-radius: calc(var(--radius) - 0.25rem);
        border: 1px solid var(--border);
        animation: fade-in 0.3s ease;
    }

    h3 {
        color: var(--foreground);
        font-size: 1.25rem;
        font-weight: 600;
        margin: 0 0 1rem 0;
    }

    p {
        color: var(--muted-foreground);
        line-height: 1.6;
        margin: 0;
    }

    ol, ul {
        color: var(--muted-foreground);
        line-height: 1.8;
        margin: 0.75rem 0 0 0;
        padding-left: 1.5rem;
    }

    li {
        margin-bottom: 0.5rem;
    }

    ul ul {
        margin-top: 0.5rem;
        padding-left: 1.5rem;
    }

    /* Link styling */
    .link-list {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-left: 0;
        list-style: none;
    }

    .link-list li {
        margin: 0;
    }

    .link-list a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        color: #60a5fa;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        overflow-wrap: break-word;
        word-break: break-word;
    }

    .link-icon {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        color: #ef4444;
    }

    @media (hover: hover) and (pointer: fine) {
        .link-list a:hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            color: #93c5fd;
            transform: translateX(4px);
        }

        .link-list a:hover .link-icon {
            color: #f87171;
        }
    }

    .link-list a:active {
        transform: scale(0.98);
    }

    strong {
        color: var(--foreground);
        font-weight: 600;
    }

    .badge {
        display: inline-block;
        padding: 0.125rem 0.5rem;
        border-radius: 0.25rem;
        font-weight: 700;
        font-size: 0.875rem;
    }

    .badge.green {
        background: rgba(16, 185, 129, 0.2);
        color: #10b981;
    }

    .badge.orange {
        background: rgba(245, 158, 11, 0.2);
        color: #f59e0b;
    }

    .badge.red {
        background: rgba(239, 68, 68, 0.2);
        color: #ef4444;
    }

    .warning {
        display: flex;
        gap: 0.75rem;
        align-items: flex-start;
        background: rgba(239, 68, 68, 0.1);
        border: 2px solid rgba(239, 68, 68, 0.3);
        padding: 1rem;
        border-radius: 0.5rem;
        color: #fca5a5;
        margin-bottom: 1.5rem;
    }

    .warning svg {
        width: 1.5rem;
        height: 1.5rem;
        color: #ef4444;
        flex-shrink: 0;
        margin-top: 0.125rem;
    }

    /* Pagination */
    .pagination {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }

    .nav-btn {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 0.5rem;
        cursor: pointer;
        color: var(--primary);
        transition: all 0.2s ease;
        flex-shrink: 0;
    }

    .nav-btn svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    .nav-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }

    @media (hover: hover) and (pointer: fine) {
        .nav-btn:not(:disabled):hover {
            background: rgba(59, 130, 246, 0.2);
            border-color: rgba(59, 130, 246, 0.5);
            transform: scale(1.05);
        }
    }

    .nav-btn:active:not(:disabled) {
        transform: scale(0.95);
    }

    .page-indicator {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex: 1;
        justify-content: center;
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: rgba(148, 163, 184, 0.3);
        transition: all 0.3s ease;
    }

    .dot.active {
        background: var(--primary);
        width: 2rem;
        border-radius: 0.25rem;
    }

    .btn-close-bottom {
        all: unset;
        display: block;
        width: 100%;
        padding: 1rem;
        background: var(--primary);
        color: white;
        text-align: center;
        font-weight: 600;
        border-radius: calc(var(--radius) - 0.25rem);
        cursor: pointer;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }

    @media (hover: hover) and (pointer: fine) {
        .btn-close-bottom:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.4);
        }
    }

    .btn-close-bottom:active {
        transform: scale(0.98);
    }

    @media (max-width: 640px) {
        .modal {
            padding: 1.7rem 1.5rem 1.5rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.125rem;
        }

        section {
            padding: 1rem;
        }

        .help-icon {
            width: 3rem;
            height: 3rem;
        }

        .link-list a {
            padding: 0.625rem 0.75rem;
            font-size: 0.875rem;
        }

        .link-icon {
            width: 1rem;
            height: 1rem;
        }

        .content {
            height: 24rem;
        }

        .nav-btn {
            width: 2.25rem;
            height: 2.25rem;
        }

        .nav-btn svg {
            width: 1.125rem;
            height: 1.125rem;
        }
    }

    @media (max-width: 400px) {
        .content {
            height: 20rem;
        }
    }
`;class Xe extends f{static styles=Ve;static properties={open:{type:Boolean},currentPage:{type:Number,state:!0},touchStartX:{type:Number,state:!0},touchEndX:{type:Number,state:!0}};constructor(){super(),this.open=!1,this.currentPage=0,this.pages=["intro","rules"],this.touchStartX=0,this.touchEndX=0}updated(e){e.has("open")&&this.open&&(this.currentPage=0)}handleClose(){g.play("click"),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose()}nextPage(){g.play("click"),this.currentPage<this.pages.length-1&&this.currentPage++}prevPage(){g.play("click"),this.currentPage>0&&this.currentPage--}handleTouchStart(e){this.touchStartX=e.changedTouches[0].screenX}handleTouchEnd(e){this.touchEndX=e.changedTouches[0].screenX,this.handleSwipe()}handleSwipe(){const t=this.touchStartX-this.touchEndX;Math.abs(t)>75&&(t>0?this.nextPage():this.prevPage())}renderPage(){switch(this.pages[this.currentPage]){case"intro":return u`
                    <section>
                        <h3>What is DnD Bingo?</h3>
                        <p>DnD Bingo is supposed to be played while in a DnD session.</p>
                        <br>
                        <p>Pay attention during your DnD session and cross events off your bingo card.</p>
                        <br>
                        <p>When you get <strong>Bingo</strong> you win.</p>
                    </section>
                `;case"rules":return u`
                    <section>
                        <h3>Rules</h3>
                        <ol>
                            <li><strong>Choose your difficulty:</strong>
                                <ul>
                                    <li><span class="badge green">I</span> Single Row - 1 row to get bingo</li>
                                    <li><span class="badge orange">II</span> Double Row - 2 rows to get bingo</li>
                                    <li><span class="badge red">III</span> Full Card - All boxes to get bingo</li>
                                </ul>
                            </li>
                            <li><strong>Start a DnD session</li>
                            <li><strong>Pay attention and cross off events from your card</li>
                            <li><strong>Bingo!</strong> when you reach your difficulty goal</li>
                        </ol>
                    </section>
                `}}render(){return this.open?u`
            <div class="backdrop" @click=${this.handleBackdropClick}>
                <div class="modal">
                    <button class="close-btn" @click=${this.handleClose} aria-label="Sluiten">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div class="icon-container">
                        <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                        </svg>
                    </div>

                    <h2>DnD Bingo explained</h2>

                    <div 
                        class="content"
                        @touchstart=${this.handleTouchStart}
                        @touchend=${this.handleTouchEnd}
                    >
                        ${this.renderPage()}
                    </div>

                    <div class="pagination">
                        <button 
                            class="nav-btn" 
                            @click=${this.prevPage}
                            ?disabled=${this.currentPage===0}
                            aria-label="Previous page"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div class="page-indicator">
                            ${this.pages.map((e,t)=>u`
                                <span class="dot ${t===this.currentPage?"active":""}"></span>
                            `)}
                        </div>

                        <button 
                            class="nav-btn" 
                            @click=${this.nextPage}
                            ?disabled=${this.currentPage===this.pages.length-1}
                            aria-label="Next page"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    <button class="btn-close-bottom" @click=${this.handleClose}>
                        Understood, let's play!
                    </button>
                </div>
            </div>
        `:u``}}customElements.define("help-modal",Xe);class Ge extends f{static styles=v`
        :host {
            display: flex;
            font-family: system-ui;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100vh;
            height: 100dvh;
            background: #0f172a;
            overflow: hidden;
            box-sizing: border-box;
            padding: 1rem;
        }

        .content-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .title-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        h1 {
            text-align: center;
            margin: 0;
            flex-shrink: 0;
            font-size: 2.25rem;
            font-weight: 700;
            color: #f1f5f9;
            letter-spacing: -0.025em;
        }

        .title-underline {
            width: 120px;
            height: 3px;
            background: linear-gradient(90deg,
            transparent 0%,
            #3b82f6 50%,
            transparent 100%
            );
            border-radius: 2px;
        }

        .game-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        @media (max-width: 640px) {
            :host {
                padding: 0.5rem;
            }

            .content-wrapper {
                gap: 1rem;
            }

            h1 {
                font-size: 1.75rem;
            }

            .title-underline {
                width: 100px;
                height: 2.5px;
            }

            .game-container {
                gap: 0.75rem;
            }
        }

        @media (max-width: 400px) {
            :host {
                padding: 0.25rem;
            }

            .content-wrapper {
                gap: 0.75rem;
            }

            h1 {
                font-size: 1.5rem;
            }

            .title-underline {
                width: 80px;
                height: 2px;
            }

            .game-container {
                gap: 0.5rem;
            }
        }
    `;static properties={gameStarted:{type:Boolean},difficulty:{type:String},showConfirmation:{type:Boolean},showWinner:{type:Boolean},showHelp:{type:Boolean}};constructor(){super(),this.gameStarted=!1,this.difficulty="",this.showConfirmation=!1,this.showWinner=!1,this.showHelp=!1}connectedCallback(){super.connectedCallback(),document.body.style.overflow="hidden",document.documentElement.style.overflow="hidden",document.body.style.margin="0",document.body.style.padding="0",document.body.style.width="100%",document.body.style.height="100%"}disconnectedCallback(){super.disconnectedCallback(),document.body.style.overflow="",document.documentElement.style.overflow=""}handleDifficultySelect(e){this.difficulty=e.detail.difficulty,this.gameStarted=!0}handleResetRequest(){this.showConfirmation=!0}handleConfirmReset(e){e.detail.confirmed&&this.resetGame(),this.showConfirmation=!1}handleCancelReset(){this.showConfirmation=!1}handleWin(){this.showWinner=!0}handleCloseWinner(){this.showWinner=!1}handlePlayAgain(){this.showWinner=!1,this.resetGame()}handleHelpOpen(){this.showHelp=!0}handleHelpClose(){this.showHelp=!1}resetGame(){this.gameStarted=!1,this.difficulty="",this.shadowRoot.querySelector("bingo-grid")?.reset()}render(){return u`
            <help-button @help-requested=${this.handleHelpOpen}></help-button>
            <sound-toggle></sound-toggle>
            <div class="content-wrapper">
                <div class="title-container">
                    <h1>DnD Bingo</h1>
                    <div class="title-underline"></div>
                </div>

                <div class="game-container">
                    <bingo-grid
                            .difficulty=${this.difficulty}
                            @win=${this.handleWin}>
                    </bingo-grid>
                    ${this.gameStarted?u`
                        <reset-button @reset-requested=${this.handleResetRequest}></reset-button>
                    `:""}
                </div>
            </div>

            ${this.gameStarted?"":u`
                <difficulty-selector
                        @difficulty-selected=${this.handleDifficultySelect}>
                </difficulty-selector>
            `}

            <help-modal
                    .open=${this.showHelp}
                    @close=${this.handleHelpClose}>
            </help-modal>

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
        `}}customElements.define("dnd-app",Ge);const Fe="modulepreload",Ke=function(n){return"/dnd-bingo/"+n},re={},Ze=function(e,t,r){let i=Promise.resolve();if(t&&t.length>0){let d=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(a=>({status:"fulfilled",value:a}),a=>({status:"rejected",reason:a}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");i=d(t.map(c=>{if(c=Ke(c),c in re)return;re[c]=!0;const h=c.endsWith(".css"),a=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${a}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Fe,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((b,k)=>{p.addEventListener("load",b),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return i.then(s=>{for(const l of s||[])l.status==="rejected"&&o(l.reason);return e().catch(o)})};function Je(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:r,onRegistered:i,onRegisteredSW:o,onRegisterError:s}=n;let l,d;const c=async(a=!0)=>{await d};async function h(){if("serviceWorker"in navigator){if(l=await Ze(async()=>{const{Workbox:a}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:a}},[]).then(({Workbox:a})=>new a("/dnd-bingo/sw.js",{scope:"/dnd-bingo/",type:"classic"})).catch(a=>{s?.(a)}),!l)return;l.addEventListener("activated",a=>{(a.isUpdate||a.isExternal)&&window.location.reload()}),l.addEventListener("installed",a=>{a.isUpdate||r?.()}),l.register({immediate:e}).then(a=>{o?o("/dnd-bingo/sw.js",a):i?.(a)}).catch(a=>{s?.(a)})}}return d=h(),c}Je({immediate:!0});window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),window.deferredPrompt=n});
