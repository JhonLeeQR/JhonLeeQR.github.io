import"../chunk-6RHODQJC.js";import"../chunk-I2I2ZCJZ.js";import"../chunk-CXCOGLII.js";import{a as nt}from"../chunk-EXR72FYD.js";import{c as ot}from"../chunk-B4IYD527.js";import"../chunk-S6ICRUQW.js";import"../chunk-BH2KOBL3.js";import"../chunk-DSYLZAQK.js";import"../chunk-75PIWSVV.js";import"../chunk-ZTSP2PIJ.js";import"../chunk-PG6OKG6X.js";import{a as B}from"../chunk-FCVI7UZU.js";import{e as M,f as Z,g as z,i as et,n as I,o as q}from"../chunk-TXMQCKG7.js";import{a as p,d as u,g as v,h as _,i as K}from"../chunk-F2UFI3JK.js";import{a as c}from"../chunk-32HEDUCQ.js";var $=(e,t)=>{var i,o;let n=e._$AN;if(n===void 0)return!1;for(let s of n)(o=(i=s)._$AO)===null||o===void 0||o.call(i,t,!1),$(s,t);return!0},H=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},st=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Ct(t)}};function wt(e){this._$AN!==void 0?(H(this),this._$AM=e,st(this)):this._$AM=e}function xt(e,t=!1,i=0){let o=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(o))for(let s=i;s<o.length;s++)$(o[s],!1),H(o[s]);else o!=null&&($(o,!1),H(o));else $(this,e)}var Ct=e=>{var t,i,o,n;e.type==v.CHILD&&((t=(o=e)._$AP)!==null&&t!==void 0||(o._$AP=xt),(i=(n=e)._$AQ)!==null&&i!==void 0||(n._$AQ=wt))},w=class extends K{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),st(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,n;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)===null||o===void 0||o.call(this):(n=this.disconnected)===null||n===void 0||n.call(this)),i&&($(this,t),H(this))}setValue(t){if(ot(this._$Ct))this._$Ct._$AI(t,this);else{let i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}};var X=new WeakMap;var rt=0,V=new Map,at=new WeakSet,W=()=>new Promise(e=>requestAnimationFrame(e));var Y=[{opacity:0}];var G=[{opacity:0},{opacity:1}];var lt=(e,t)=>{let i=e-t;return i===0?void 0:i},dt=(e,t)=>{let i=e/t;return i===1?void 0:i},U={left:(e,t)=>{let i=lt(e,t);return{value:i,transform:i&&`translateX(${i}px)`}},top:(e,t)=>{let i=lt(e,t);return{value:i,transform:i&&`translateY(${i}px)`}},width:(e,t)=>{let i=dt(e,t);return{value:i,transform:i&&`scaleX(${i})`}},height:(e,t)=>{let i=dt(e,t);return{value:i,transform:i&&`scaleY(${i})`}}},ct={duration:333,easing:"ease-in-out"},pt=["left","top","width","height","opacity","color","background"],ht=new WeakMap,L=class extends w{constructor(t){if(super(t),this.t=null,this.i=null,this.o=!0,this.shouldLog=!1,t.type===v.CHILD)throw Error("The `animate` directive must be used in attribute position.");this.createFinished()}createFinished(){var t;(t=this.resolveFinished)===null||t===void 0||t.call(this),this.finished=new Promise(i=>{this.h=i})}async resolveFinished(){var t;(t=this.h)===null||t===void 0||t.call(this),this.h=void 0}render(t){return u}getController(){return X.get(this.l)}isDisabled(){var t;return this.options.disabled||((t=this.getController())===null||t===void 0?void 0:t.disabled)}update(t,[i]){var o;let n=this.l===void 0;return n&&(this.l=(o=t.options)===null||o===void 0?void 0:o.host,this.l.addController(this),this.element=t.element,ht.set(this.element,this)),this.optionsOrCallback=i,(n||typeof i!="function")&&this.u(i),this.render(i)}u(t){var i,o;t=t??{};let n=this.getController();n!==void 0&&((t={...n.defaultOptions,...t}).keyframeOptions={...n.defaultOptions.keyframeOptions,...t.keyframeOptions}),(i=(o=t).properties)!==null&&i!==void 0||(o.properties=pt),this.options=t}v(){let t={},i=this.element.getBoundingClientRect(),o=getComputedStyle(this.element);return this.options.properties.forEach(n=>{var s;let r=(s=i[n])!==null&&s!==void 0?s:U[n]?void 0:o[n],a=Number(r);t[n]=isNaN(a)?r+"":a}),t}p(){let t,i=!0;return this.options.guard&&(t=this.options.guard(),i=((o,n)=>{if(Array.isArray(o)){if(Array.isArray(n)&&n.length===o.length&&o.every((s,r)=>s===n[r]))return!1}else if(n===o)return!1;return!0})(t,this.m)),this.o=this.l.hasUpdated&&!this.isDisabled()&&!this.isAnimating()&&i&&this.element.isConnected,this.o&&(this.m=Array.isArray(t)?Array.from(t):t),this.o}hostUpdate(){var t;typeof this.optionsOrCallback=="function"&&this.u(this.optionsOrCallback()),this.p()&&(this.g=this.v(),this.t=(t=this.t)!==null&&t!==void 0?t:this.element.parentNode,this.i=this.element.nextSibling)}async hostUpdated(){if(!this.o||!this.element.isConnected||this.options.skipInitial&&!this.isHostRendered)return;let t;this.prepare(),await W;let i=this._(),o=this.A(this.options.keyframeOptions,i),n=this.v();if(this.g!==void 0){let{from:s,to:r}=this.O(this.g,n,i);this.log("measured",[this.g,n,s,r]),t=this.calculateKeyframes(s,r)}else{let s=V.get(this.options.inId);if(s){V.delete(this.options.inId);let{from:r,to:a}=this.O(s,n,i);t=this.calculateKeyframes(r,a),t=this.options.in?[{...this.options.in[0],...t[0]},...this.options.in.slice(1),t[1]]:t,rt++,t.forEach(b=>b.zIndex=rt)}else this.options.in&&(t=[...this.options.in,{}])}this.animate(t,o)}resetStyles(){var t;this.P!==void 0&&(this.element.setAttribute("style",(t=this.P)!==null&&t!==void 0?t:""),this.P=void 0)}commitStyles(){var t,i;this.P=this.element.getAttribute("style"),(t=this.webAnimation)===null||t===void 0||t.commitStyles(),(i=this.webAnimation)===null||i===void 0||i.cancel()}reconnected(){}async disconnected(){var t;if(!this.o||(this.options.id!==void 0&&V.set(this.options.id,this.g),this.options.out===void 0))return;if(this.prepare(),await W(),(t=this.t)===null||t===void 0?void 0:t.isConnected){let o=this.i&&this.i.parentNode===this.t?this.i:null;if(this.t.insertBefore(this.element,o),this.options.stabilizeOut){let n=this.v();this.log("stabilizing out");let s=this.g.left-n.left,r=this.g.top-n.top;getComputedStyle(this.element).position!=="static"||s===0&&r===0||(this.element.style.position="relative"),s!==0&&(this.element.style.left=s+"px"),r!==0&&(this.element.style.top=r+"px")}}let i=this.A(this.options.keyframeOptions);await this.animate(this.options.out,i),this.element.remove()}prepare(){this.createFinished()}start(){var t,i;(i=(t=this.options).onStart)===null||i===void 0||i.call(t,this)}didFinish(t){var i,o;t&&((o=(i=this.options).onComplete)===null||o===void 0||o.call(i,this)),this.g=void 0,this.animatingProperties=void 0,this.frames=void 0,this.resolveFinished()}_(){let t=[];for(let i=this.element.parentNode;i;i=i?.parentNode){let o=ht.get(i);o&&!o.isDisabled()&&o&&t.push(o)}return t}get isHostRendered(){let t=at.has(this.l);return t||this.l.updateComplete.then(()=>{at.add(this.l)}),t}A(t,i=this._()){let o={...ct};return i.forEach(n=>Object.assign(o,n.options.keyframeOptions)),Object.assign(o,t),o}O(t,i,o){t={...t},i={...i};let n=o.map(a=>a.animatingProperties).filter(a=>a!==void 0),s=1,r=1;return n!==void 0&&(n.forEach(a=>{a.width&&(s/=a.width),a.height&&(r/=a.height)}),t.left!==void 0&&i.left!==void 0&&(t.left=s*t.left,i.left=s*i.left),t.top!==void 0&&i.top!==void 0&&(t.top=r*t.top,i.top=r*i.top)),{from:t,to:i}}calculateKeyframes(t,i,o=!1){var n;let s={},r={},a=!1,b={};for(let m in i){let S=t[m],k=i[m];if(m in U){let bt=U[m];if(S===void 0||k===void 0)continue;let R=bt(S,k);R.transform!==void 0&&(b[m]=R.value,a=!0,s.transform=`${(n=s.transform)!==null&&n!==void 0?n:""} ${R.transform}`)}else S!==k&&S!==void 0&&k!==void 0&&(a=!0,s[m]=S,r[m]=k)}return s.transformOrigin=r.transformOrigin=o?"center center":"top left",this.animatingProperties=b,a?[s,r]:void 0}async animate(t,i=this.options.keyframeOptions){this.start(),this.frames=t;let o=!1;if(!this.isAnimating()&&!this.isDisabled()&&(this.options.onFrames&&(this.frames=t=this.options.onFrames(this),this.log("modified frames",t)),t!==void 0)){this.log("animate",[t,i]),o=!0,this.webAnimation=this.element.animate(t,i);let n=this.getController();n?.add(this);try{await this.webAnimation.finished}catch{}n?.remove(this)}return this.didFinish(o),o}isAnimating(){var t,i;return((t=this.webAnimation)===null||t===void 0?void 0:t.playState)==="running"||((i=this.webAnimation)===null||i===void 0?void 0:i.pending)}log(t,i){this.shouldLog&&!this.isDisabled()&&console.log(t,this.options.id,i)}},O=_(L);var St=["top","right","bottom","left"],D=class extends w{constructor(t){if(super(t),t.type!==v.ELEMENT)throw Error("The `position` directive must be used in attribute position.")}render(t,i){return u}update(t,[i,o]){var n;return this.l===void 0&&(this.l=(n=t.options)===null||n===void 0?void 0:n.host,this.l.addController(this)),this.j=t.element,this.S=i,this.C=o??["left","top","width","height"],this.render(i,o)}hostUpdated(){this.F()}F(){var t,i;let o=typeof this.S=="function"?this.S():(t=this.S)===null||t===void 0?void 0:t.value,n=o.offsetParent;if(o===void 0||!n)return;let s=o.getBoundingClientRect(),r=n.getBoundingClientRect();(i=this.C)===null||i===void 0||i.forEach(a=>{let b=St.includes(a)?s[a]-r[a]:s[a];this.j.style[a]=b+"px"})}},kt=_(D);function N(){throw new Error("Cycle detected")}function J(){if(x>1)x--;else{for(var e,t=!1;E!==void 0;){var i=E;for(E=void 0,Q++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&mt(i))try{i.c()}catch(n){t||(e=n,t=!0)}i=o}}if(Q=0,x--,t)throw e}}var l=void 0,E=void 0,x=0,Q=0,F=0;function ft(e){if(l!==void 0){var t=e.n;if(t===void 0||t.t!==l)return t={i:0,S:e,p:l.s,n:void 0,t:l,e:void 0,x:void 0,r:t},l.s!==void 0&&(l.s.n=t),l.s=t,e.n=t,32&l.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=l.s,t.n=void 0,l.s.n=t,l.s=t),t}}function d(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}d.prototype.h=function(){return!0};d.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};d.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};d.prototype.subscribe=function(e){var t=this;return it(function(){var i=t.value,o=32&this.f;this.f&=-33;try{e(i)}finally{this.f|=o}})};d.prototype.valueOf=function(){return this.value};d.prototype.toString=function(){return this.value+""};d.prototype.toJSON=function(){return this.value};d.prototype.peek=function(){return this.v};Object.defineProperty(d.prototype,"value",{get:function(){var e=ft(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(l instanceof g&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){Q>100&&N(),this.v=e,this.i++,F++,x++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{J()}}}});function C(e){return new d(e)}function mt(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function ut(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function vt(e){for(var t=e.s,i=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=i}function g(e){d.call(this,void 0),this.x=e,this.s=void 0,this.g=F-1,this.f=4}(g.prototype=new d).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===F))return!0;if(this.g=F,this.f|=1,this.i>0&&!mt(this))return this.f&=-2,!0;var e=l;try{ut(this),l=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return l=e,vt(this),this.f&=-2,!0};g.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}d.prototype.S.call(this,e)};g.prototype.U=function(e){if(this.t!==void 0&&(d.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};g.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};g.prototype.peek=function(){if(this.h()||N(),16&this.f)throw this.v;return this.v};Object.defineProperty(g.prototype,"value",{get:function(){1&this.f&&N();var e=ft(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function gt(e){var t=e.u;if(e.u=void 0,typeof t=="function"){x++;var i=l;l=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,tt(e),o}finally{l=i,J()}}}function tt(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,gt(e)}function _t(e){if(l!==this)throw new Error("Out-of-order effect");vt(this),l=e,this.f&=-2,8&this.f&&tt(this),J()}function P(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}P.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};P.prototype.S=function(){1&this.f&&N(),this.f|=1,this.f&=-9,gt(this),ut(this),x++;var e=l;return l=this,_t.bind(this,e)};P.prototype.N=function(){2&this.f||(this.f|=2,this.o=E,E=this)};P.prototype.d=function(){this.f|=8,1&this.f||tt(this)};function it(e){var t=new P(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}function j(e){return class extends e{performUpdate(){if(!this.isUpdatePending)return;this._disposeEffect?.();let o=!0;this._disposeEffect=it(()=>{o?(o=!1,super.performUpdate()):this.requestUpdate()})}}}var h=C(!1);var A=C(!1),T=C(!1);var f=class extends j(q){constructor(){super(...arguments);this.isCollapsible=!1;this.hasToc=!1;this.pageTitle="";this.lastDrawerOpen=h.value}render(){let i=this.isCollapsible&&h.value,o=i?500:150,n=i?300:150,s=150,r=i?B.EMPHASIZED:B.EMPHASIZED_ACCELERATE;return p`
      <div class="root">
        <slot name="top-app-bar"></slot>
        <div class="body  ${h.value?"open":""}">
          <div class="spacer" ?inert=${T.value}>
            ${i?p`<div
                  class="scrim"
                  @click=${this.onScrimClick}
                  ${O({properties:["opacity"],keyframeOptions:{duration:s,easing:"linear"},in:G,out:Y})}></div>`:u}
            <aside
              ?inert=${this.isCollapsible&&!h.value}
              ${O({properties:["transform"],keyframeOptions:{duration:o,easing:r}})}>
              <div class="scroll-wrapper">
                <slot
                  ${O({properties:["opacity"],keyframeOptions:{duration:n,easing:"linear"}})}></slot>
              </div>
            </aside>
          </div>
          <div class="panes">
            ${this.renderTocPane(i)}${this.renderContent(i)}
          </div>
        </div>
      </div>
    `}renderContent(i){return p` <div
      class="pane content-pane"
      ?inert=${i||A.value}>
      <div class="scroll-wrapper">
        <div class="content">
          <slot name="app-content"></slot>
        </div>
      </div>
    </div>`}renderTocPane(i){return this.hasToc?p` <div
      class="pane toc"
      ?inert=${i||A.value}>
      <div class="scroll-wrapper">
        <p>On this page:</p>
        <h2>${this.pageTitle}</h2>
        <slot name="toc"></slot>
      </div>
    </div>`:u}onScrimClick(){h.value=!1}firstUpdated(){let i=window.matchMedia("(max-width: 1500px)");this.isCollapsible=i.matches,i.addEventListener("change",o=>{this.isCollapsible=o.matches})}updated(i){super.updated(i),this.lastDrawerOpen!==h.value&&h.value&&this.isCollapsible&&this.querySelector('md-list.nav md-list-item[tabindex="0"]')?.focus()}};f.styles=I`
    :host {
      --_drawer-width: var(--catalog-drawer-width, 300px);
      /* When in wide mode inline start margin is handled by the sidebar */
      --_pane-margin-inline-start: 0px;
      --_pane-margin-inline-end: var(--catalog-spacing-l);
      --_pane-margin-block-end: var(--catalog-spacing-l);
      --_toc-pane-width: 250px;
      min-height: 100dvh;
      display: flex;
      flex-direction: column;
    }

    ::slotted(nav) {
      list-style: none;
    }

    .body {
      display: flex;
      flex-grow: 1;
    }

    .spacer {
      position: relative;
      transition: min-width 0.5s cubic-bezier(0.3, 0, 0, 1);
    }

    .spacer,
    aside {
      min-width: var(--_drawer-width);
      max-width: var(--_drawer-width);
    }

    .pane {
      box-sizing: border-box;
      overflow: auto;
      width: 100%;
      /* Explicit height to make overflow work */
      height: calc(
        100dvh - var(--catalog-top-app-bar-height) -
          var(--_pane-margin-block-end)
      );
      background-color: var(--md-sys-color-surface);
      border-radius: var(--catalog-shape-xl);
    }

    .pane,
    .panes {
      /* emphasized – duration matching render fn for sidebar */
      transition: 0.5s cubic-bezier(0.3, 0, 0, 1);
      transition-property: margin, height, border-radius, max-width, width;
    }

    .panes {
      display: flex;
      justify-content: start;
      flex-direction: row-reverse;
      gap: var(--_pane-margin-inline-end);
      margin-inline: var(--_pane-margin-inline-start)
        var(--_pane-margin-inline-end);
      width: 100%;
      max-width: calc(
        100% - var(--_drawer-width) - var(--_pane-margin-inline-start) -
          var(--_pane-margin-inline-end)
      );
    }

    .pane.content-pane {
      flex-grow: 1;
    }

    .pane.toc {
      width: auto;
      box-sizing: border-box;
      width: var(--_toc-pane-width);
    }

    .toc .scroll-wrapper {
      padding-inline: var(--catalog-spacing-xl);
    }

    .pane.toc p {
      margin-block: 0;
      font-size: var(--catalog-label-s-font-size);
    }

    .pane.toc h2 {
      margin-block: var(--catalog-spacing-s) var(--catalog-spacing-m);
      font-size: var(--catalog-headline-s-font-size);
    }

    .content {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      padding-inline: var(--catalog-spacing-xl);
      width: 100%;
    }

    .content slot {
      display: block;
      width: 100%;
      max-width: min(100%, var(--_max-width));
    }

    aside {
      transition: transform 0.5s cubic-bezier(0.3, 0, 0, 1);
      position: fixed;
      isolation: isolate;
      inset: var(--catalog-top-app-bar-height) 0 0 0;
      z-index: 12;
      background-color: var(--md-sys-color-surface-container);
      overflow: hidden;
    }

    .scroll-wrapper {
      overflow-y: auto;
      max-height: 100%;
      border-radius: inherit;
      box-sizing: border-box;
    }

    .pane .scroll-wrapper {
      padding-block: var(--catalog-spacing-xl);
    }

    aside slot {
      display: block;
    }

    .scrim {
      background-color: rgba(0, 0, 0, 0.32);
    }

    @media (max-width: 900px) {
      .pane.toc {
        display: none;
      }
    }

    @media (max-width: 1500px) {
      .spacer {
        min-width: 0px;
      }

      .panes {
        max-width: calc(
          100% - var(--_pane-margin-inline-start) -
            var(--_pane-margin-inline-end)
        );
      }

      .content {
        max-width: 100vw;
        padding-inline: var(--catalog-spacing-xl);
      }

      .scrim {
        position: fixed;
        inset: 0;
      }

      aside {
        transition: unset;
        transform: translateX(-100%);
        border-radius: 0 var(--catalog-shape-xl) var(--catalog-shape-xl) 0;
      }

      :host {
        --_pane-margin-inline-start: var(--catalog-spacing-xl);
      }

      .open aside {
        transform: translateX(0);
      }

      aside slot {
        opacity: 0;
      }

      .open aside slot {
        opacity: 1;
      }

      .open .scrim {
        inset: 0;
        z-index: 11;
      }
    }

    @media (max-width: 600px) {
      .pane {
        border-end-start-radius: 0;
        border-end-end-radius: 0;
      }

      :host {
        --_pane-margin-block-end: 0px;
        --_pane-margin-inline-start: 0px;
        --_pane-margin-inline-end: 0px;
      }
    }

    /* On desktop, make the scrollbars less blocky so you can see the border
     * radius of the pane. On most mobile platforms, these scrollbars are hidden
     * by default. It'll still unfortunately render on top of the border radius.
     */
    @media (pointer: fine) {
      :host {
        --_scrollbar-width: 8px;
      }

      .scroll-wrapper {
        /* firefox */
        scrollbar-color: var(--md-sys-color-primary) transparent;
        scrollbar-width: thin;
      }

      .content {
        /* adjust for the scrollbar width */
        padding-inline-end: calc(
          var(--catalog-spacing-xl) - var(--_scrollbar-width)
        );
      }

      /* Chromium + Safari */
      .scroll-wrapper::-webkit-scrollbar {
        background-color: transparent;
        width: var(--_scrollbar-width);
      }

      .scroll-wrapper::-webkit-scrollbar-thumb {
        background-color: var(--md-sys-color-primary);
        border-radius: calc(var(--_scrollbar-width) / 2);
      }
    }

    @media (forced-colors: active) {
      .pane {
        border: 1px solid CanvasText;
      }

      @media (max-width: 1500px) {
        aside {
          box-sizing: border-box;
          border: 1px solid CanvasText;
        }

        .scrim {
          background-color: rgba(0, 0, 0, 0.75);
        }
      }

      @media (pointer: fine) {
        .scroll-wrapper {
          /* firefox */
          scrollbar-color: CanvasText transparent;
        }

        .scroll-wrapper::-webkit-scrollbar-thumb {
          /* Chromium + Safari */
          background-color: CanvasText;
        }
      }
    }
  `,c([z()],f.prototype,"isCollapsible",2),c([Z({type:Boolean,attribute:"has-toc"})],f.prototype,"hasToc",2),c([Z({attribute:"page-title"})],f.prototype,"pageTitle",2),f=c([M("nav-drawer")],f);var yt=p` 
  <svg width="800px" height="800px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">
  <path 
  d="M9.93 67.23s3.52-5.7 9.01-11.76c2.01-2.21 5.07-5.49 5.21-6.76c.14-1.27-2.11-8.09-3.24-13.73c-.94-4.71-1.41-10.7.28-12.53s11.23.04 16.89 2.82c5.8 2.84 8.77 5.34 9.57 5.35c1 .01 6.9-4.65 16.05-4.5s15.63 4.36 16.89 4.36s5.34-3.04 10.98-5.98c6.62-3.45 14.36-3.73 15.91-2.6c1.55 1.13.56 9.29-.56 13.51c-1.44 5.39-3.87 11.47-3.73 12.6c.14 1.13 2.6 2.32 7.53 7.81c3.89 4.34 8.66 12.81 8.66 12.81L66.67 79.48L9.93 67.23z" fill="#b0b0b0"/><path d="M5.71 75.12c0 .84 8.73 5.63 8.73 5.63s-10.42 3.8-10.42 4.5c0 1.13 15.91 16.75 31.53 22.1c13.02 4.46 40.22 9.99 61.94-1.2c18.86-9.71 25.06-17.25 25.06-18.37s-8.45-5.63-8.45-5.63s8.87-6.05 8.87-6.9c0-.84-3.52-7.04-4.65-8.87s-4.5-7.18-5.91-7.74c-1.41-.56-27.73-11.54-36.46-5.49c-4.56 3.16-5.21 6.76-5.21 10.28c0 6.2.56 11.54.56 11.54s-2.11-2.32-5.77-2.39c-3.45-.07-5.42 1.9-5.42 1.9s1.06-8.66.92-11.9s-.84-7.32-6.48-10.42c-8.07-4.44-28.19 3.62-34.35 7.11c-4.22 2.39-8.87 5.56-10.42 7.95s-4.07 6.91-4.07 7.9z" fill="#dedede"/><path d="M30.63 44.33c.32 0 2.8-2.54 5.44-4.69c2.78-2.27 5.91-4.55 5.91-4.79c0-.47-11.64-9.01-14.92-6.48s2.82 15.96 3.57 15.96z" fill="#5d6268"/><path d="M86.66 34.66c-.03.33 3.2 2.21 5.73 4.5c2.53 2.3 5.02 4.65 5.35 4.6c.66-.09 6.29-12.86 3.66-15.11s-14.65 5.08-14.74 6.01z" fill="#5d6268"/><path d="M43.02 102.52c1.82-.71 1.5-7.6 4.6-14.27c3.1-6.66 6.66-9.95 8.73-11.36c2.06-1.41 3.66-1.88 4.79-3.38s1.01-8.48-.09-10.93c-1.5-3.33-5.63-7.93-13.8-7.37c-8.17.56-14.92 9.1-18.68 12.67c-3.75 3.57-9.48 7.41-9.39 14.73c.09 7.32 6.19 12.39 9.95 15.11c3.75 2.74 11.26 5.83 13.89 4.8z" fill="#464c4f"/><path d="M71.17 75.02c-1.69-1.13-1.03-6.19-.94-8.54c.09-2.35 1.03-8.35 7.41-10.04s9.76.84 13.61 3.47c3.85 2.63 7.79 6.15 10.51 8.07c6.1 4.32 11.26 9.76 9.95 15.58c-1.31 5.82-5.11 9.45-10.98 13.61c-6.1 4.32-11.73 7.88-13.7 6.66s-1.31-11.26-5.73-18.21c-4.4-6.94-8.15-9.28-10.13-10.6z" fill="#464c4f"/><path d="M64.84 82.15c-5.68.15-8.29 3.83-8.35 7.04c-.09 4.55 1.97 5.44 2.91 6.01c1.17.7 2.87 1.24 2.06 2.77c-.84 1.6-1.64 2.25-5.11 1.97c-2.15-.17-3.01-2.28-5.16-1.64c-2.86.84-.28 5.57 6.1 5.82c5.96.23 7.88-2.82 7.88-2.82s2.21 3.05 7.6 2.72c5.53-.34 8.4-5.21 5.21-6.15c-2.29-.67-1.92 2.16-5.11 2.3c-2.3.1-3.51-.58-4.36-1.69c-.47-.61-.42-2.06.23-2.53c.66-.47 3.83-1.69 3.94-6.1c.09-3.71-2.68-7.84-7.84-7.7z" fill="#2f2f2f"/><path d="M54.47 67.49c0 3.41-1.5 6.36-4.58 6.17c-2.52-.15-4.67-2.49-4.58-6.17c.09-3.41 2.02-5.7 4.55-5.7s4.61 2.29 4.61 5.7z" fill="#000101"/><path d="M85.77 68.08c-.13 3.41-.75 6.76-4.32 6.43c-2.52-.23-4.31-2.53-4.08-6.21c.21-3.4 1.97-5.85 4.5-5.75c2.53.08 4.02 2.12 3.9 5.53z" fill="#000101"/><path d="M47.15 64.51c-.46.93-.41 2.15.28 2.53c.84.47 2.12-.29 2.58-1.22s.1-1.99-.61-2.35c-.71-.35-1.79.11-2.25 1.04z" fill="#b0b0b0"/><path d="M79.01 65.54c-.46.93-.46 1.96.23 2.35c.84.47 1.93-.06 2.39-.99c.46-.93.28-1.95-.42-2.3s-1.74.02-2.2.94z" fill="#b0b0b0"/></svg>
`;var y=class extends j(q){constructor(){super(...arguments);this.menuOpen=!1}render(){return p`
      <header>
        <div class="default-content">
          <section class="start">
            <md-icon-button
              toggle
              class="menu-button"
              aria-label-selected="open navigation menu"
              aria-label="close navigation menu"
              aria-expanded=${h.value?"false":"true"}
              title="${h.value?"Close":"Open"} navigation menu"
              .selected=${nt(!h.value)}
              @input=${this.onMenuIconToggle}>
              <md-icon slot="selected">menu</md-icon>
              <md-icon>menu_open</md-icon>
            </md-icon-button>
            <md-icon-button
              href="/"
              class="home-button"
              title="Home"
              aria-label="Home">
              ${yt}
            </md-icon-button>
          </section>

          <a href="/" id="home-link">
            Mapache TV
            <md-focus-ring for="home-link"></md-focus-ring>
          </a>

          <a id="skip-to-main" href="#main-content" tabindex="0">
            Skip to main content
          </a>

          <section class="end">
            <lit-island
              on:interaction="pointerenter,focusin,pointerdown"
              import="/js/hydration-entrypoints/menu.js"
              id="menu-island">
              <md-icon-button
                title="GitHub repository"
                aria-label="GitHub repository"
                href="/"
                target="_blank">
                <md-icon>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M680-119q-8 0-16-2t-15-7l-120-70q-14-8-21.5-21.5T500-249v-141q0-16 7.5-29.5T529-441l120-70q7-5 15-7t16-2q8 0 15.5 2.5T710-511l120 70q14 8 22 21.5t8 29.5v141q0 16-8 29.5T830-198l-120 70q-7 4-14.5 6.5T680-119ZM400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm320-400q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Zm174-166 94 55 94-55-94-54-94 54Zm124 208 90-52v-110l-90 53v109Zm-150-52 90 53v-109l-90-53v109Z"/>
                </svg>
                </md-icon>
              </md-icon-button>
              <md-icon-button
                id="theme-button"
                @click="${this.onPaletteClick}"
                title="Page theme controls"
                aria-label="Page theme controls"
                aria-haspopup="dialog"
                aria-expanded=${this.menuOpen?"true":"false"}>
                <md-icon>palette</md-icon>
              </md-icon-button>
              <md-menu
                anchor="theme-button"
                menu-corner="start-end"
                anchor-corner="end-end"
                default-focus="none"
                role="dialog"
                aria-label="Page color theme controls"
                .open=${this.menuOpen}
                @opened=${this.onMenuOpened}
                @closed=${this.onMenuClosed}
                @keydown=${this.onKeydown}>
                <theme-changer></theme-changer>
              </md-menu>
            </lit-island>
          </section>
        </div>
        <slot></slot>
      </header>
    `}onPaletteClick(){this.menuOpen=!0,A.value=!0,T.value=!0,h.value=!1}onMenuClosed(){this.menuOpen=!1,A.value=!1,T.value=!1}onMenuOpened(){this.themeChanger.focus()}onKeydown(i){!i.defaultPrevented&&i.key==="Escape"&&(i.preventDefault(),this.menuOpen=!1)}onMenuIconToggle(i){h.value=!i.target.selected}};y.styles=I`
    :host,
    header {
      display: block;
      height: var(--catalog-top-app-bar-height);
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: var(--catalog-spacing-m) var(--catalog-spacing-l);
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      z-index: 12;
    }

    .default-content {
      width: 100%;
      display: flex;
      align-items: center;
    }

    md-icon-button:not(:defined) {
      width: 40px;
      height: 40px;
      display: flex;
      visibility: hidden;
    }

    md-icon-button * {
      display: block;
    }

    a {
      color: var(--md-sys-color-primary);
      font-size: max(var(--catalog-title-l-font-size), 22px);
      text-decoration: none;
      padding-inline: 12px;
      position: relative;
      outline: none;
      vertical-align: middle;
    }

    .start .menu-button {
      display: none;
    }

    .start .home-button * {
      color: var(--md-sys-color-primary);
    }

    .end {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
    }

    #menu-island {
      position: relative;
    }

    #skip-to-main {
      padding: var(--catalog-spacing-s);
      border-radius: var(--catalog-shape-m);
      background-color: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }

    #skip-to-main:focus-visible {
      opacity: 1;
      pointer-events: auto;
    }

    @media (max-width: 1500px) {
      .start .home-button {
        display: none;
      }

      .start .menu-button {
        display: flex;
      }
    }
  `,c([z()],y.prototype,"menuOpen",2),c([et("theme-changer")],y.prototype,"themeChanger",2),y=c([M("top-app-bar")],y);
