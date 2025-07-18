var ChatWidget=function(be,F,In){"use strict";function _n(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const a=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,a.get?a:{enumerable:!0,get:()=>e[n]})}}return t.default=e,Object.freeze(t)}const ae=_n(F);function ot(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ve={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt;function Nn(){if(lt)return V;lt=1;var e=F,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(o,c,f){var u,m={},p=null,h=null;f!==void 0&&(p=""+f),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(h=c.ref);for(u in c)a.call(c,u)&&!s.hasOwnProperty(u)&&(m[u]=c[u]);if(o&&o.defaultProps)for(u in c=o.defaultProps,c)m[u]===void 0&&(m[u]=c[u]);return{$$typeof:t,type:o,key:p,ref:h,props:m,_owner:r.current}}return V.Fragment=n,V.jsx=i,V.jsxs=i,V}var ct;function Cn(){return ct||(ct=1,ve.exports=Nn()),ve.exports}var v=Cn(),re={},ft;function Tn(){if(ft)return re;ft=1;var e=In;return re.createRoot=e.createRoot,re.hydrateRoot=e.hydrateRoot,re}var Mn=Tn();const Rn=ot(Mn);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Fn(e,t,n){return(t=jn(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ut(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ut(Object(n),!0).forEach(function(a){Fn(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ut(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Ln(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function jn(e){var t=Ln(e,"string");return typeof t=="symbol"?t:t+""}const dt=()=>{};let xe={},mt={},pt=null,gt={mark:dt,measure:dt};try{typeof window<"u"&&(xe=window),typeof document<"u"&&(mt=document),typeof MutationObserver<"u"&&(pt=MutationObserver),typeof performance<"u"&&(gt=performance)}catch{}const{userAgent:ht=""}=xe.navigator||{},L=xe,y=mt,yt=pt,se=gt;L.document;const C=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",bt=~ht.indexOf("MSIE")||~ht.indexOf("Trident/");var Dn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,vt={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Un={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},xt=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],w="classic",ie="duotone",Wn="sharp",Yn="sharp-duotone",At=[w,ie,Wn,Yn],Gn={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Hn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},$n=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Bn={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Xn=["fak","fa-kit","fakd","fa-kit-duotone"],St={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},qn=["kit"],Vn={kit:{"fa-kit":"fak"}},Kn=["fak","fakd"],Jn={kit:{fak:"fa-kit"}},wt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Zn=["fak","fa-kit","fakd","fa-kit-duotone"],ea={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},ta={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},na={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Ae={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},aa=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Se=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Qn,...aa],ra=["solid","regular","light","thin","duotone","brands"],Ot=[1,2,3,4,5,6,7,8,9,10],sa=Ot.concat([11,12,13,14,15,16,17,18,19,20]),ia=[...Object.keys(na),...ra,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY].concat(Ot.map(e=>"".concat(e,"x"))).concat(sa.map(e=>"w-".concat(e))),oa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const T="___FONT_AWESOME___",we=16,Et="fa",kt="svg-inline--fa",U="data-fa-i2svg",Oe="data-fa-pseudo-element",la="data-fa-pseudo-element-pending",Ee="data-prefix",ke="data-icon",Pt="fontawesome-i2svg",ca="async",fa=["HTML","HEAD","STYLE","SCRIPT"],It=(()=>{try{return!0}catch{return!1}})();function K(e){return new Proxy(e,{get(t,n){return n in t?t[n]:t[w]}})}const _t=l({},vt);_t[w]=l(l(l(l({},{"fa-duotone":"duotone"}),vt[w]),St.kit),St["kit-duotone"]);const ua=K(_t),Pe=l({},Bn);Pe[w]=l(l(l(l({},{duotone:"fad"}),Pe[w]),wt.kit),wt["kit-duotone"]);const Nt=K(Pe),Ie=l({},Ae);Ie[w]=l(l({},Ie[w]),Jn.kit);const _e=K(Ie),Ne=l({},ta);Ne[w]=l(l({},Ne[w]),Vn.kit),K(Ne);const da=Dn,Ct="fa-layers-text",ma=zn,pa=l({},Gn);K(pa);const ga=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ce=Un,ha=[...qn,...ia],J=L.FontAwesomeConfig||{};function ya(e){var t=y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ba(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}y&&typeof y.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(t=>{let[n,a]=t;const r=ba(ya(n));r!=null&&(J[a]=r)});const Tt={styleDefault:"solid",familyDefault:w,cssPrefix:Et,replacementClass:kt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);const G=l(l({},Tt),J);G.autoReplaceSvg||(G.observeMutations=!1);const d={};Object.keys(Tt).forEach(e=>{Object.defineProperty(d,e,{enumerable:!0,set:function(t){G[e]=t,Q.forEach(n=>n(d))},get:function(){return G[e]}})}),Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){G.cssPrefix=e,Q.forEach(t=>t(d))},get:function(){return G.cssPrefix}}),L.FontAwesomeConfig=d;const Q=[];function va(e){return Q.push(e),()=>{Q.splice(Q.indexOf(e),1)}}const j=we,I={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xa(e){if(!e||!C)return;const t=y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;const n=y.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=s)}return y.head.insertBefore(t,a),e}const Aa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Z(){let e=12,t="";for(;e-- >0;)t+=Aa[Math.random()*62|0];return t}function H(e){const t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Te(e){return e.classList?H(e.classList):(e.getAttribute("class")||"").split(" ").filter(t=>t)}function Mt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sa(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,'="').concat(Mt(e[n]),'" '),"").trim()}function le(e){return Object.keys(e||{}).reduce((t,n)=>t+"".concat(n,": ").concat(e[n].trim(),";"),"")}function Me(e){return e.size!==I.size||e.x!==I.x||e.y!==I.y||e.rotate!==I.rotate||e.flipX||e.flipY}function wa(e){let{transform:t,containerWidth:n,iconWidth:a}=e;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),i="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(i," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:f}}function Oa(e){let{transform:t,width:n=we,height:a=we,startCentered:r=!1}=e,s="";return r&&bt?s+="translate(".concat(t.x/j-n/2,"em, ").concat(t.y/j-a/2,"em) "):r?s+="translate(calc(-50% + ".concat(t.x/j,"em), calc(-50% + ").concat(t.y/j,"em)) "):s+="translate(".concat(t.x/j,"em, ").concat(t.y/j,"em) "),s+="scale(".concat(t.size/j*(t.flipX?-1:1),", ").concat(t.size/j*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Ea=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Rt(){const e=Et,t=kt,n=d.cssPrefix,a=d.replacementClass;let r=Ea;if(n!==e||a!==t){const s=new RegExp("\\.".concat(e,"\\-"),"g"),i=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(a))}return r}let Ft=!1;function Re(){d.autoAddCss&&!Ft&&(xa(Rt()),Ft=!0)}var ka={mixout(){return{dom:{css:Rt,insertCss:Re}}},hooks(){return{beforeDOMElementCreation(){Re()},beforeI2svg(){Re()}}}};const M=L||{};M[T]||(M[T]={}),M[T].styles||(M[T].styles={}),M[T].hooks||(M[T].hooks={}),M[T].shims||(M[T].shims=[]);var _=M[T];const Lt=[],jt=function(){y.removeEventListener("DOMContentLoaded",jt),ce=1,Lt.map(e=>e())};let ce=!1;C&&(ce=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),ce||y.addEventListener("DOMContentLoaded",jt));function Pa(e){C&&(ce?setTimeout(e,0):Lt.push(e))}function ee(e){const{tag:t,attributes:n={},children:a=[]}=e;return typeof e=="string"?Mt(e):"<".concat(t," ").concat(Sa(n),">").concat(a.map(ee).join(""),"</").concat(t,">")}function Dt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Fe=function(t,n,a,r){var s=Object.keys(t),i=s.length,o=n,c,f,u;for(a===void 0?(c=1,u=t[s[0]]):(c=0,u=a);c<i;c++)f=s[c],u=o(u,t[f],f,t);return u};function Ia(e){const t=[];let n=0;const a=e.length;for(;n<a;){const r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const s=e.charCodeAt(n++);(s&64512)==56320?t.push(((r&1023)<<10)+(s&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Le(e){const t=Ia(e);return t.length===1?t[0].toString(16):null}function _a(e,t){const n=e.length;let a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function zt(e){return Object.keys(e).reduce((t,n)=>{const a=e[n];return!!a.icon?t[a.iconName]=a.icon:t[n]=a,t},{})}function je(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=zt(t);typeof _.hooks.addPack=="function"&&!a?_.hooks.addPack(e,zt(t)):_.styles[e]=l(l({},_.styles[e]||{}),r),e==="fas"&&je("fa",t)}const{styles:te,shims:Na}=_,Ut=Object.keys(_e),Ca=Ut.reduce((e,t)=>(e[t]=Object.keys(_e[t]),e),{});let De=null,Wt={},Yt={},Gt={},Ht={},$t={};function Ta(e){return~ha.indexOf(e)}function Ma(e,t){const n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ta(r)?r:null}const Bt=()=>{const e=a=>Fe(te,(r,s,i)=>(r[i]=Fe(s,a,{}),r),{});Wt=e((a,r,s)=>(r[3]&&(a[r[3]]=s),r[2]&&r[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=s}),a)),Yt=e((a,r,s)=>(a[s]=s,r[2]&&r[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=s}),a)),$t=e((a,r,s)=>{const i=r[2];return a[s]=s,i.forEach(o=>{a[o]=s}),a});const t="far"in te||d.autoFetchSvg,n=Fe(Na,(a,r)=>{const s=r[0];let i=r[1];const o=r[2];return i==="far"&&!t&&(i="fas"),typeof s=="string"&&(a.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(a.unicodes[s.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});Gt=n.names,Ht=n.unicodes,De=fe(d.styleDefault,{family:d.familyDefault})};va(e=>{De=fe(e.styleDefault,{family:d.familyDefault})}),Bt();function ze(e,t){return(Wt[e]||{})[t]}function Ra(e,t){return(Yt[e]||{})[t]}function W(e,t){return($t[e]||{})[t]}function Xt(e){return Gt[e]||{prefix:null,iconName:null}}function Fa(e){const t=Ht[e],n=ze("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function D(){return De}const qt=()=>({prefix:null,iconName:null,rest:[]});function La(e){let t=w;const n=Ut.reduce((a,r)=>(a[r]="".concat(d.cssPrefix,"-").concat(r),a),{});return At.forEach(a=>{(e.includes(n[a])||e.some(r=>Ca[a].includes(r)))&&(t=a)}),t}function fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=w}=t,a=ua[n][e];if(n===ie&&!e)return"fad";const r=Nt[n][e]||Nt[n][a],s=e in _.styles?e:null;return r||s||null}function ja(e){let t=[],n=null;return e.forEach(a=>{const r=Ma(d.cssPrefix,a);r?n=r:a&&t.push(a)}),{iconName:n,rest:t}}function Vt(e){return e.sort().filter((t,n,a)=>a.indexOf(t)===n)}function ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=t;let a=null;const r=Se.concat(Zn),s=Vt(e.filter(m=>r.includes(m))),i=Vt(e.filter(m=>!Se.includes(m))),o=s.filter(m=>(a=m,!xt.includes(m))),[c=null]=o,f=La(s),u=l(l({},ja(i)),{},{prefix:fe(c,{family:f})});return l(l(l({},u),Wa({values:e,family:f,styles:te,config:d,canonical:u,givenPrefix:a})),Da(n,a,u))}function Da(e,t,n){let{prefix:a,iconName:r}=n;if(e||!a||!r)return{prefix:a,iconName:r};const s=t==="fa"?Xt(r):{},i=W(a,r);return r=s.iconName||i||r,a=s.prefix||a,a==="far"&&!te.far&&te.fas&&!d.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const za=At.filter(e=>e!==w||e!==ie),Ua=Object.keys(Ae).filter(e=>e!==w).map(e=>Object.keys(Ae[e])).flat();function Wa(e){const{values:t,family:n,canonical:a,givenPrefix:r="",styles:s={},config:i={}}=e,o=n===ie,c=t.includes("fa-duotone")||t.includes("fad"),f=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!o&&(c||f||u)&&(a.prefix="fad"),(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),!a.prefix&&za.includes(n)&&(Object.keys(s).find(p=>Ua.includes(p))||i.autoFetchSvg)){const p=$n.get(n).defaultShortPrefixId;a.prefix=p,a.iconName=W(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=D()||"fas"),a}class Ya{constructor(){this.definitions={}}add(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]=l(l({},this.definitions[s]||{}),r[s]),je(s,r[s]);const i=_e[w][s];i&&je(i,r[s]),Bt()})}reset(){this.definitions={}}_pullDefinitions(t,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:s,iconName:i,icon:o}=a[r],c=o[2];t[s]||(t[s]={}),c.length>0&&c.forEach(f=>{typeof f=="string"&&(t[s][f]=o)}),t[s][i]=o}),t}}let Kt=[],$={};const B={},Ga=Object.keys(B);function Ha(e,t){let{mixoutsTo:n}=t;return Kt=e,$={},Object.keys(B).forEach(a=>{Ga.indexOf(a)===-1&&delete B[a]}),Kt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=r[s][i]})}),a.hooks){const s=a.hooks();Object.keys(s).forEach(i=>{$[i]||($[i]=[]),$[i].push(s[i])})}a.provides&&a.provides(B)}),n}function Ue(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return($[e]||[]).forEach(i=>{t=i.apply(null,[t,...a])}),t}function Y(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];($[e]||[]).forEach(s=>{s.apply(null,n)})}function z(){const e=arguments[0],t=Array.prototype.slice.call(arguments,1);return B[e]?B[e].apply(null,t):void 0}function We(e){e.prefix==="fa"&&(e.prefix="fas");let{iconName:t}=e;const n=e.prefix||D();if(t)return t=W(n,t)||t,Dt(Jt.definitions,n,t)||Dt(_.styles,n,t)}const Jt=new Ya,k={noAuto:()=>{d.autoReplaceSvg=!1,d.observeMutations=!1,Y("noAuto")},config:d,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return C?(Y("beforeI2svg",e),z("pseudoElements2svg",e),z("i2svg",e)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t}=e;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Pa(()=>{$a({autoReplaceSvgRoot:t}),Y("watch",e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e=="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:W(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){const t=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],n=fe(e[0]);return{prefix:n,iconName:W(n,t)||t}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(da))){const t=ue(e.split(" "),{skipLookups:!0});return{prefix:t.prefix||D(),iconName:W(t.prefix,t.iconName)||t.iconName}}if(typeof e=="string"){const t=D();return{prefix:t,iconName:W(t,e)||e}}}},library:Jt,findIconDefinition:We,toHtml:ee},$a=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:t=y}=e;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&C&&d.autoReplaceSvg&&k.dom.i2svg({node:t})};function de(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(n=>ee(n))}}),Object.defineProperty(e,"node",{get:function(){if(!C)return;const n=y.createElement("div");return n.innerHTML=e.html,n.children}}),e}function Ba(e){let{children:t,main:n,mask:a,attributes:r,styles:s,transform:i}=e;if(Me(i)&&n.found&&!a.found){const{width:o,height:c}=n,f={x:o/c/2,y:.5};r.style=le(l(l({},s),{},{"transform-origin":"".concat(f.x+i.x/16,"em ").concat(f.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Xa(e){let{prefix:t,iconName:n,children:a,attributes:r,symbol:s}=e;const i=s===!0?"".concat(t,"-").concat(d.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l(l({},r),{},{id:i}),children:a}]}]}function Ye(e){const{icons:{main:t,mask:n},prefix:a,iconName:r,transform:s,symbol:i,title:o,maskId:c,titleId:f,extra:u,watchable:m=!1}=e,{width:p,height:h}=n.found?n:t,A=Kn.includes(a),O=[d.replacementClass,r?"".concat(d.cssPrefix,"-").concat(r):""].filter(P=>u.classes.indexOf(P)===-1).filter(P=>P!==""||!!P).concat(u.classes).join(" ");let b={children:[],attributes:l(l({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:O,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};const S=A&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/h*16*.0625,"em")}:{};m&&(b.attributes[U]=""),o&&(b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(f||Z())},children:[o]}),delete b.attributes.title);const x=l(l({},b),{},{prefix:a,iconName:r,main:t,mask:n,maskId:c,transform:s,symbol:i,styles:l(l({},S),u.styles)}),{children:E,attributes:R}=n.found&&t.found?z("generateAbstractMask",x)||{children:[],attributes:{}}:z("generateAbstractIcon",x)||{children:[],attributes:{}};return x.children=E,x.attributes=R,i?Xa(x):Ba(x)}function Qt(e){const{content:t,width:n,height:a,transform:r,title:s,extra:i,watchable:o=!1}=e,c=l(l(l({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(c[U]="");const f=l({},i.styles);Me(r)&&(f.transform=Oa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);const u=le(f);u.length>0&&(c.style=u);const m=[];return m.push({tag:"span",attributes:c,children:[t]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function qa(e){const{content:t,title:n,extra:a}=e,r=l(l(l({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),s=le(a.styles);s.length>0&&(r.style=s);const i=[];return i.push({tag:"span",attributes:r,children:[t]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ge}=_;function He(e){const t=e[0],n=e[1],[a]=e.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(Ce.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:t,height:n,icon:r}}const Va={found:!1,width:512,height:512};function Ka(e,t){!It&&!d.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $e(e,t){let n=t;return t==="fa"&&d.styleDefault!==null&&(t=D()),new Promise((a,r)=>{if(n==="fa"){const s=Xt(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ge[t]&&Ge[t][e]){const s=Ge[t][e];return a(He(s))}Ka(e,t),a(l(l({},Va),{},{icon:d.showMissingIcons&&e?z("missingIconAbstract")||{}:{}}))})}const Zt=()=>{},Be=d.measurePerformance&&se&&se.mark&&se.measure?se:{mark:Zt,measure:Zt},ne='FA "6.7.2"',Ja=e=>(Be.mark("".concat(ne," ").concat(e," begins")),()=>en(e)),en=e=>{Be.mark("".concat(ne," ").concat(e," ends")),Be.measure("".concat(ne," ").concat(e),"".concat(ne," ").concat(e," begins"),"".concat(ne," ").concat(e," ends"))};var Xe={begin:Ja,end:en};const me=()=>{};function tn(e){return typeof(e.getAttribute?e.getAttribute(U):null)=="string"}function Qa(e){const t=e.getAttribute?e.getAttribute(Ee):null,n=e.getAttribute?e.getAttribute(ke):null;return t&&n}function Za(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(d.replacementClass)}function er(){return d.autoReplaceSvg===!0?pe.replace:pe[d.autoReplaceSvg]||pe.replace}function tr(e){return y.createElementNS("http://www.w3.org/2000/svg",e)}function nr(e){return y.createElement(e)}function nn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=e.tag==="svg"?tr:nr}=t;if(typeof e=="string")return y.createTextNode(e);const a=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(s){a.setAttribute(s,e.attributes[s])}),(e.children||[]).forEach(function(s){a.appendChild(nn(s,{ceFn:n}))}),a}function ar(e){let t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}const pe={replace:function(e){const t=e[0];if(t.parentNode)if(e[1].forEach(n=>{t.parentNode.insertBefore(nn(n),t)}),t.getAttribute(U)===null&&d.keepOriginalSource){let n=y.createComment(ar(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){const t=e[0],n=e[1];if(~Te(t).indexOf(d.replacementClass))return pe.replace(e);const a=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===d.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>ee(s)).join(`
`);t.setAttribute(U,""),t.innerHTML=r}};function an(e){e()}function rn(e,t){const n=typeof t=="function"?t:me;if(e.length===0)n();else{let a=an;d.mutateApproach===ca&&(a=L.requestAnimationFrame||an),a(()=>{const r=er(),s=Xe.begin("mutate");e.map(r),s(),n()})}}let qe=!1;function sn(){qe=!0}function Ve(){qe=!1}let ge=null;function on(e){if(!yt||!d.observeMutations)return;const{treeCallback:t=me,nodeCallback:n=me,pseudoElementsCallback:a=me,observeMutationsRoot:r=y}=e;ge=new yt(s=>{if(qe)return;const i=D();H(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!tn(o.addedNodes[0])&&(d.searchPseudoElements&&a(o.target),t(o.target)),o.type==="attributes"&&o.target.parentNode&&d.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&tn(o.target)&&~ga.indexOf(o.attributeName))if(o.attributeName==="class"&&Qa(o.target)){const{prefix:c,iconName:f}=ue(Te(o.target));o.target.setAttribute(Ee,c||i),f&&o.target.setAttribute(ke,f)}else Za(o.target)&&n(o.target)})}),C&&ge.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function rr(){ge&&ge.disconnect()}function sr(e){const t=e.getAttribute("style");let n=[];return t&&(n=t.split(";").reduce((a,r)=>{const s=r.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),n}function ir(e){const t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"";let r=ue(Te(e));return r.prefix||(r.prefix=D()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ra(r.prefix,e.innerText)||ze(r.prefix,Le(e.innerText))),!r.iconName&&d.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function or(e){const t=H(e.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return d.autoA11y&&(n?t["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||Z()):(t["aria-hidden"]="true",t.focusable="false")),t}function lr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:I,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=ir(e),s=or(e),i=Ue("parseNodeAttributes",{},e);let o=t.styleParser?sr(e):[];return l({iconName:n,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:I,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:o,attributes:s}},i)}const{styles:cr}=_;function cn(e){const t=d.autoReplaceSvg==="nest"?ln(e,{styleParser:!1}):ln(e);return~t.extra.classes.indexOf(Ct)?z("generateLayersText",e,t):z("generateSvgReplacementMutation",e,t)}function fr(){return[...Xn,...Se]}function fn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!C)return Promise.resolve();const n=y.documentElement.classList,a=u=>n.add("".concat(Pt,"-").concat(u)),r=u=>n.remove("".concat(Pt,"-").concat(u)),s=d.autoFetchSvg?fr():xt.concat(Object.keys(cr));s.includes("fa")||s.push("fa");const i=[".".concat(Ct,":not([").concat(U,"])")].concat(s.map(u=>".".concat(u,":not([").concat(U,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=H(e.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();const c=Xe.begin("onTree"),f=o.reduce((u,m)=>{try{const p=cn(m);p&&u.push(p)}catch(p){It||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise((u,m)=>{Promise.all(f).then(p=>{rn(p,()=>{a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),c(),u()})}).catch(p=>{c(),m(p)})})}function ur(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cn(e).then(n=>{n&&rn([n],t)})}function dr(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(t||{}).icon?t:We(t||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:We(r||{})),e(a,l(l({},n),{},{mask:r}))}}const mr=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,symbol:a=!1,mask:r=null,maskId:s=null,title:i=null,titleId:o=null,classes:c=[],attributes:f={},styles:u={}}=t;if(!e)return;const{prefix:m,iconName:p,icon:h}=e;return de(l({type:"icon"},e),()=>(Y("beforeDOMElementCreation",{iconDefinition:e,params:t}),d.autoA11y&&(i?f["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(o||Z()):(f["aria-hidden"]="true",f.focusable="false")),Ye({icons:{main:He(h),mask:r?He(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:p,transform:l(l({},I),n),symbol:a,title:i,maskId:s,titleId:o,extra:{attributes:f,styles:u,classes:c}})))};var pr={mixout(){return{icon:dr(mr)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=fn,e.nodeCallback=ur,e}}},provides(e){e.i2svg=function(t){const{node:n=y,callback:a=()=>{}}=t;return fn(n,a)},e.generateSvgReplacementMutation=function(t,n){const{iconName:a,title:r,titleId:s,prefix:i,transform:o,symbol:c,mask:f,maskId:u,extra:m}=n;return new Promise((p,h)=>{Promise.all([$e(a,i),f.iconName?$e(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(A=>{let[O,b]=A;p([t,Ye({icons:{main:O,mask:b},prefix:i,iconName:a,transform:o,symbol:c,maskId:u,title:r,titleId:s,extra:m,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(t){let{children:n,attributes:a,main:r,transform:s,styles:i}=t;const o=le(i);o.length>0&&(a.style=o);let c;return Me(s)&&(c=z("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(c||r.icon),{children:n,attributes:a}}}},gr={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=t;return de({type:"layer"},()=>{Y("beforeDOMElementCreation",{assembler:e,params:t});let a=[];return e(r=>{Array.isArray(r)?r.map(s=>{a=a.concat(s.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},hr={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:s={}}=t;return de({type:"counter",content:e},()=>(Y("beforeDOMElementCreation",{content:e,params:t}),qa({content:e.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(d.cssPrefix,"-layers-counter"),...a]}})))}}}},yr={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=I,title:a=null,classes:r=[],attributes:s={},styles:i={}}=t;return de({type:"text",content:e},()=>(Y("beforeDOMElementCreation",{content:e,params:t}),Qt({content:e,transform:l(l({},I),n),title:a,extra:{attributes:s,styles:i,classes:["".concat(d.cssPrefix,"-layers-text"),...r]}})))}}},provides(e){e.generateLayersText=function(t,n){const{title:a,transform:r,extra:s}=n;let i=null,o=null;if(bt){const c=parseInt(getComputedStyle(t).fontSize,10),f=t.getBoundingClientRect();i=f.width/c,o=f.height/c}return d.autoA11y&&!a&&(s.attributes["aria-hidden"]="true"),Promise.resolve([t,Qt({content:t.innerHTML,width:i,height:o,transform:r,title:a,extra:s,watchable:!0})])}}};const br=new RegExp('"',"ug"),un=[1105920,1112319],dn=l(l(l(l({},{FontAwesome:{normal:"fas",400:"fas"}}),Hn),oa),ea),Ke=Object.keys(dn).reduce((e,t)=>(e[t.toLowerCase()]=dn[t],e),{}),vr=Object.keys(Ke).reduce((e,t)=>{const n=Ke[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function xr(e){const t=e.replace(br,""),n=_a(t,0),a=n>=un[0]&&n<=un[1],r=t.length===2?t[0]===t[1]:!1;return{value:Le(r?t[0]:t),isSecondary:a||r}}function Ar(e,t){const n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(t),r=isNaN(a)?"normal":a;return(Ke[n]||{})[r]||vr[n]}function mn(e,t){const n="".concat(la).concat(t.replace(":","-"));return new Promise((a,r)=>{if(e.getAttribute(n)!==null)return a();const i=H(e.children).filter(p=>p.getAttribute(Oe)===t)[0],o=L.getComputedStyle(e,t),c=o.getPropertyValue("font-family"),f=c.match(ma),u=o.getPropertyValue("font-weight"),m=o.getPropertyValue("content");if(i&&!f)return e.removeChild(i),a();if(f&&m!=="none"&&m!==""){const p=o.getPropertyValue("content");let h=Ar(c,u);const{value:A,isSecondary:O}=xr(p),b=f[0].startsWith("FontAwesome");let S=ze(h,A),x=S;if(b){const E=Fa(A);E.iconName&&E.prefix&&(S=E.iconName,h=E.prefix)}if(S&&!O&&(!i||i.getAttribute(Ee)!==h||i.getAttribute(ke)!==x)){e.setAttribute(n,x),i&&e.removeChild(i);const E=lr(),{extra:R}=E;R.attributes[Oe]=t,$e(S,h).then(P=>{const ds=Ye(l(l({},E),{},{icons:{main:P,mask:qt()},prefix:h,iconName:x,extra:R,watchable:!0})),it=y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(it,e.firstChild):e.appendChild(it),it.outerHTML=ds.map(ms=>ee(ms)).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Sr(e){return Promise.all([mn(e,"::before"),mn(e,"::after")])}function wr(e){return e.parentNode!==document.head&&!~fa.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Oe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pn(e){if(C)return new Promise((t,n)=>{const a=H(e.querySelectorAll("*")).filter(wr).map(Sr),r=Xe.begin("searchPseudoElements");sn(),Promise.all(a).then(()=>{r(),Ve(),t()}).catch(()=>{r(),Ve(),n()})})}var Or={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=pn,e}}},provides(e){e.pseudoElements2svg=function(t){const{node:n=y}=t;d.searchPseudoElements&&pn(n)}}};let gn=!1;var Er={mixout(){return{dom:{unwatch(){sn(),gn=!0}}}},hooks(){return{bootstrap(){on(Ue("mutationObserverCallbacks",{}))},noAuto(){rr()},watch(e){const{observeMutationsRoot:t}=e;gn?Ve():on(Ue("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}};const hn=e=>{let t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),s=r[0];let i=r.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},t)};var kr={mixout(){return{parse:{transform:e=>hn(e)}}},hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-transform");return n&&(e.transform=hn(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(t){let{main:n,transform:a,containerWidth:r,iconWidth:s}=t;const i={transform:"translate(".concat(r/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(f)},m={transform:"translate(".concat(s/2*-1," -256)")},p={outer:i,inner:u,path:m};return{tag:"g",attributes:l({},p.outer),children:[{tag:"g",attributes:l({},p.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:l(l({},n.icon.attributes),p.path)}]}]}}}};const Je={x:0,y:0,width:"100%",height:"100%"};function yn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Pr(e){return e.tag==="g"?e.children:[e]}var Ir={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-mask"),a=n?ue(n.split(" ").map(r=>r.trim())):qt();return a.prefix||(a.prefix=D()),e.mask=a,e.maskId=t.getAttribute("data-fa-mask-id"),e}}},provides(e){e.generateAbstractMask=function(t){let{children:n,attributes:a,main:r,mask:s,maskId:i,transform:o}=t;const{width:c,icon:f}=r,{width:u,icon:m}=s,p=wa({transform:o,containerWidth:u,iconWidth:c}),h={tag:"rect",attributes:l(l({},Je),{},{fill:"white"})},A=f.children?{children:f.children.map(yn)}:{},O={tag:"g",attributes:l({},p.inner),children:[yn(l({tag:f.tag,attributes:l(l({},f.attributes),p.path)},A))]},b={tag:"g",attributes:l({},p.outer),children:[O]},S="mask-".concat(i||Z()),x="clip-".concat(i||Z()),E={tag:"mask",attributes:l(l({},Je),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,b]},R={tag:"defs",children:[{tag:"clipPath",attributes:{id:x},children:Pr(m)},E]};return n.push(R,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(x,")"),mask:"url(#".concat(S,")")},Je)}),{children:n,attributes:a}}}},_r={provides(e){let t=!1;L.matchMedia&&(t=L.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:l(l({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const s=l(l({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:l(l({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||i.children.push({tag:"animate",attributes:l(l({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l(l({},s),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:l(l({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:l(l({},s),{},{values:"1;0;0;0;0;1;"})}]}),t||n.push({tag:"path",attributes:l(l({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l(l({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Nr={hooks(){return{parseNodeAttributes(e,t){const n=t.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return e.symbol=a,e}}}},Cr=[ka,pr,gr,hr,yr,Or,Er,kr,Ir,_r,Nr];Ha(Cr,{mixoutsTo:k}),k.noAuto,k.config,k.library,k.dom;const Qe=k.parse;k.findIconDefinition,k.toHtml;const Tr=k.icon;k.layer,k.text,k.counter;var Ze={exports:{}},et,bn;function Mr(){if(bn)return et;bn=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return et=e,et}var tt,vn;function Rr(){if(vn)return tt;vn=1;var e=Mr();function t(){}function n(){}return n.resetWarningCache=t,tt=function(){function a(i,o,c,f,u,m){if(m!==e){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}a.isRequired=a;function r(){return a}var s={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:r,element:a,elementType:a,instanceOf:r,node:a,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:n,resetWarningCache:t};return s.PropTypes=s,s},tt}var xn;function Fr(){return xn||(xn=1,Ze.exports=Rr()()),Ze.exports}var Lr=Fr();const g=ot(Lr);function An(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?An(Object(n),!0).forEach(function(a){X(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function he(e){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},he(e)}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jr(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,s;for(s=0;s<a.length;s++)r=a[s],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Dr(e,t){if(e==null)return{};var n=jr(e,t),a,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function nt(e){return zr(e)||Ur(e)||Wr(e)||Yr()}function zr(e){if(Array.isArray(e))return at(e)}function Ur(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Wr(e,t){if(e){if(typeof e=="string")return at(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return at(e,t)}}function at(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Yr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gr(e){var t,n=e.beat,a=e.fade,r=e.beatFade,s=e.bounce,i=e.shake,o=e.flash,c=e.spin,f=e.spinPulse,u=e.spinReverse,m=e.pulse,p=e.fixedWidth,h=e.inverse,A=e.border,O=e.listItem,b=e.flip,S=e.size,x=e.rotation,E=e.pull,R=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":i,"fa-flash":o,"fa-spin":c,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":m,"fa-fw":p,"fa-inverse":h,"fa-border":A,"fa-li":O,"fa-flip":b===!0,"fa-flip-horizontal":b==="horizontal"||b==="both","fa-flip-vertical":b==="vertical"||b==="both"},X(t,"fa-".concat(S),typeof S<"u"&&S!==null),X(t,"fa-rotate-".concat(x),typeof x<"u"&&x!==null&&x!==0),X(t,"fa-pull-".concat(E),typeof E<"u"&&E!==null),X(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(R).map(function(P){return R[P]?P:null}).filter(function(P){return P})}function Hr(e){return e=e-0,e===e}function Sn(e){return Hr(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var $r=["style"];function Br(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Xr(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Sn(n.slice(0,a)),s=n.slice(a+1).trim();return r.startsWith("webkit")?t[Br(r)]=s:t[r]=s,t},{})}function wn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(c){return wn(e,c)}),r=Object.keys(t.attributes||{}).reduce(function(c,f){var u=t.attributes[f];switch(f){case"class":c.attrs.className=u,delete t.attributes.class;break;case"style":c.attrs.style=Xr(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?c.attrs[f.toLowerCase()]=u:c.attrs[Sn(f)]=u}return c},{attrs:{}}),s=n.style,i=s===void 0?{}:s,o=Dr(n,$r);return r.attrs.style=N(N({},r.attrs.style),i),e.apply(void 0,[t.tag,N(N({},r.attrs),o)].concat(nt(a)))}var On=!1;try{On=!0}catch{}function qr(){if(!On&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function En(e){if(e&&he(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Qe.icon)return Qe.icon(e);if(e===null)return null;if(e&&he(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function rt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?X({},e,t):{}}var kn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},q=F.forwardRef(function(e,t){var n=N(N({},kn),e),a=n.icon,r=n.mask,s=n.symbol,i=n.className,o=n.title,c=n.titleId,f=n.maskId,u=En(a),m=rt("classes",[].concat(nt(Gr(n)),nt((i||"").split(" ")))),p=rt("transform",typeof n.transform=="string"?Qe.transform(n.transform):n.transform),h=rt("mask",En(r)),A=Tr(u,N(N(N(N({},m),p),h),{},{symbol:s,title:o,titleId:c,maskId:f}));if(!A)return qr("Could not find icon",u),null;var O=A.abstract,b={ref:t};return Object.keys(n).forEach(function(S){kn.hasOwnProperty(S)||(b[S]=n[S])}),Vr(O[0],b)});q.displayName="FontAwesomeIcon",q.propTypes={beat:g.bool,border:g.bool,beatFade:g.bool,bounce:g.bool,className:g.string,fade:g.bool,flash:g.bool,mask:g.oneOfType([g.object,g.array,g.string]),maskId:g.string,fixedWidth:g.bool,inverse:g.bool,flip:g.oneOf([!0,!1,"horizontal","vertical","both"]),icon:g.oneOfType([g.object,g.array,g.string]),listItem:g.bool,pull:g.oneOf(["right","left"]),pulse:g.bool,rotation:g.oneOf([0,90,180,270]),shake:g.bool,size:g.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.bool,spinPulse:g.bool,spinReverse:g.bool,symbol:g.oneOfType([g.bool,g.string]),title:g.string,titleId:g.string,transform:g.oneOfType([g.string,g.object]),swapOpacity:g.bool};var Vr=wn.bind(null,F.createElement),Kr={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Jr(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return Kr[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function st(e){var t=Jr(e);return"".concat(t.value).concat(t.unit)}var Qr=function(e,t,n){var a="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return a;var r=document.createElement("style");document.head.appendChild(r);var s=r.sheet,i=`
    @keyframes `.concat(a,` {
      `).concat(t,`
    }
  `);return s&&s.insertRule(i,0),a},ye=function(){return ye=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++){t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ye.apply(this,arguments)},Zr=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},es=Qr("SyncLoader",`33% {transform: translateY(10px)}
  66% {transform: translateY(-10px)}
  100% {transform: translateY(0)}`,"sync");function ts(e){var t=e.loading,n=t===void 0?!0:t,a=e.color,r=a===void 0?"#000000":a,s=e.speedMultiplier,i=s===void 0?1:s,o=e.cssOverride,c=o===void 0?{}:o,f=e.size,u=f===void 0?15:f,m=e.margin,p=m===void 0?2:m,h=Zr(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),A=ye({display:"inherit"},c),O=function(b){return{backgroundColor:r,width:st(u),height:st(u),margin:st(p),borderRadius:"100%",display:"inline-block",animation:"".concat(es," ").concat(.6/i,"s ").concat(b*.07,"s infinite ease-in-out"),animationFillMode:"both"}};return n?ae.createElement("span",ye({style:A},h),ae.createElement("span",{style:O(1)}),ae.createElement("span",{style:O(2)}),ae.createElement("span",{style:O(3)})):null}/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const ns={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},as={prefix:"fas",iconName:"angles-up",icon:[448,512,["angle-double-up"],"f102","M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const rs={prefix:"far",iconName:"lightbulb",icon:[384,512,[128161],"f0eb","M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7c0 0 0 0 0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5L109 384c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8c0 0 0 0 0 0s0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4c0 0 0 0 0 0s0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5l-48.6 0c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8c0 0 0 0 0 0s0 0 0 0s0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80l0-16 160 0 0 16c0 44.2-35.8 80-80 80z"]},ss={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]},is={messages:[{id:0,message:"Hello! I'm your insight assistant. You can ask me anything about the IOT data here.",senderName:"Bot"}],isLoading:!1,error:null,nextMessageId:1},os=(e,t)=>{switch(t.type){case"ADD_MESSAGE":return{...e,messages:[...e.messages,{...t.payload,id:e.nextMessageId}],nextMessageId:e.nextMessageId+1};case"SET_LOADING":return{...e,isLoading:t.payload,error:null};case"SET_ERROR":return{...e,error:t.payload,isLoading:!1};case"REPLACE_LOADING_MESSAGE":return{...e,messages:e.messages.map(n=>n.id===t.payload.loadingId?{...t.payload.newMessage,id:t.payload.loadingId}:n),isLoading:!1,error:null};case"CLEAR_ERROR":return{...e,error:null};default:return e}},ls={isMinimized:!0,newMessage:"",isSending:!1},cs=(e,t)=>{switch(t.type){case"TOGGLE_MINIMIZED":return{...e,isMinimized:!e.isMinimized};case"SET_NEW_MESSAGE":return{...e,newMessage:t.payload};case"SET_SENDING":return{...e,isSending:t.payload};case"CLEAR_INPUT":return{...e,newMessage:""};default:return e}},fs=()=>{const[e,t]=F.useReducer(os,is),[n,a]=F.useReducer(cs,ls),r=F.useRef(null),s=["which device uses the most electricity?","which device generates the most electricity?","give me the top 3 devices that has the highest voltage readings.","give me the top 3 devices that generates the most electricity."],i=async()=>{if(!n.newMessage.trim())return;a({type:"SET_SENDING",payload:!0}),t({type:"ADD_MESSAGE",payload:{message:n.newMessage.trim(),senderName:"You"}});const m=e.nextMessageId+1;t({type:"ADD_MESSAGE",payload:{message:v.jsx(ts,{color:"#3B82F6",size:4}),senderName:"Bot",isLoading:!0}});const p=n.newMessage.trim();a({type:"CLEAR_INPUT"}),t({type:"SET_LOADING",payload:!0});try{const h=await fetch(`https://iotinsight.zackcheng.com/ask?q=${encodeURIComponent(p)}`);if(!h.ok)throw new Error(`HTTP error! status: ${h.status}`);const A=await h.json();t({type:"REPLACE_LOADING_MESSAGE",payload:{loadingId:m,newMessage:{message:A.answer,senderName:"Bot"}}})}catch(h){console.error("Error sending message:",h),t({type:"REPLACE_LOADING_MESSAGE",payload:{loadingId:m,newMessage:{message:"Error: Could not send message. Please check your connection and try again.",senderName:"Bot"}}}),t({type:"SET_ERROR",payload:h.message})}finally{a({type:"SET_SENDING",payload:!1})}},o=m=>{a({type:"SET_NEW_MESSAGE",payload:m})},c=()=>{a({type:"TOGGLE_MINIMIZED"})},f=m=>{a({type:"SET_NEW_MESSAGE",payload:m.target.value})},u=m=>{m.key==="Enter"&&!n.isSending&&i()};return F.useEffect(()=>{r.current?.scrollIntoView({behavior:"smooth"})},[e.messages]),v.jsxs("div",{className:"chat-widget","data-minimized":n.isMinimized,children:[v.jsxs("div",{className:"chat-header bg-bkg3",onClick:c,children:[v.jsx("div",{className:"w-full text-center",children:"AI Insight"}),n.isMinimized?v.jsx(q,{icon:ns,title:"Expand"}):v.jsx(q,{icon:as,title:"Collapse"})]}),v.jsxs("div",{className:"chat-message-area bg-bkg","data-minimized":n.isMinimized,children:[e.messages.map(m=>{const p=m.senderName==="You",h=p?"bg-blue-500":"bg-bkg2 text-content";return v.jsxs("div",{className:"message-container","data-user":p,children:[!p&&v.jsx(q,{icon:rs,className:"avatar"}),v.jsx("div",{className:`message-bubble ${h}`,"data-user":p,children:m.message}),p&&v.jsx(q,{icon:ss,className:"avatar"})]},m.id)}),v.jsx("div",{ref:r})]}),v.jsx("div",{className:"scroll bg-bkg",children:v.jsx("div",{className:"mask-fade-x",children:v.jsx("div",{className:"animate-scroll-left ",children:[...s,...s].map((m,p)=>v.jsx("span",{onClick:()=>o(m),className:"bg-bkg3",children:m},p))})})}),!n.isMinimized&&v.jsxs("div",{className:"input-area bg-bkg2",children:[v.jsx("input",{type:"text",className:"input-field",placeholder:"Type a message...",value:n.newMessage,onChange:f,onKeyDown:u,disabled:n.isSending}),v.jsx("button",{onClick:i,className:"send-button",disabled:n.isSending||!n.newMessage.trim(),children:n.isSending?"Sending...":"Send"})]})]})},Pn=new Map,us=(e,t={})=>{const n=document.getElementById(e);if(!n){console.error(`ChatWidget Error: Container with id "${e}" not found.`);return}let a=Pn.get(e);a||(a=Rn.createRoot(n),Pn.set(e,a)),a.render(v.jsx(fs,{...t}))};return be.render=us,Object.defineProperty(be,Symbol.toStringTag,{value:"Module"}),be}({},React,ReactDOM);
