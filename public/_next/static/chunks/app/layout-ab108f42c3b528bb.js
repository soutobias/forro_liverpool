(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6787:function(e,t,n){Promise.resolve().then(n.bind(n,9465))},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let o=r[e]||e.toLowerCase();"script"===t&&("async"===o||"defer"===o||"noModule"===o)?a[o]=!!n[e]:a.setAttribute(o,n[e])}let{children:o,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":o&&(a.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):""),a}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var i;(null==n?void 0:null==(i=n.tagName)?void 0:i.toLowerCase())===e&&o.push(n)}let l=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=o.length;t<n;t++){let n=o[t];if(isEqualNode(n,e))return o.splice(t,1),!1}return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>n.insertBefore(e,r)),r.content=(a-o.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),a=n(8533),o=r._(n(4887)),i=a._(n(2265)),l=n(1852),c=n(863),u=n(2389),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(o.default.preinit){e.forEach(e=>{o.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:o,children:i="",strategy:l="afterInteractive",onError:u,stylesheets:p}=e,_=n||t;if(_&&d.has(_))return;if(s.has(t)){d.add(_),s.get(t).then(r,u);return}let afterLoad=()=>{a&&a(),d.add(_)},g=document.createElement("script"),y=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(o?(g.innerHTML=o.__html||"",afterLoad()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",afterLoad()):t&&(g.src=t,s.set(t,y)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===l&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",l),p&&insertStylesheets(p),document.body.appendChild(g)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function initScriptLoader(e){e.forEach(handleClientScriptLoad),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:c="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:_,scripts:g,getIsSsr:y,appDir:m,nonce:v}=(0,i.useContext)(l.HeadManagerContext),h=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let e=t||n;h.current||(a&&e&&d.has(e)&&a(),h.current=!0)},[a,t,n]);let b=(0,i.useRef)(!1);if((0,i.useEffect)(()=>{!b.current&&("afterInteractive"===c?loadScript(e):"lazyOnload"===c&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>loadScript(e))})),b.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(_?(g[c]=(g[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:s,...p}]),_(g)):y&&y()?d.add(t||n):y&&!y()&&loadScript(e)),m){if(f&&f.forEach(e=>{o.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),i.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),i.default.createElement("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===c&&n&&o.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9465:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return RootLayout}});var r=n(7437),a=n(4361),o=n.n(a),i=n(4844),l=n.n(i),c=n(5362),u=n.n(c),s=n(2719),d=n.n(s),f=n(3895),p=n.n(f),_=n(8475),g=n.n(_);n(2489);var y=n(9482);function RootLayout(e){let{children:t}=e;return(0,r.jsxs)("html",{lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)(g(),{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-DQR97THJN6",strategy:"afterInteractive",id:"ga_analytics"}),(0,r.jsx)(g(),{id:"google-analytics",strategy:"afterInteractive",children:"\n       window.dataLayer = window.dataLayer || [];\n       function gtag(){dataLayer.push(arguments);}\n       gtag('js', new Date());\n       gtag('config', 'G-DQR97THJN6');\n       "}),(0,r.jsx)("title",{children:"Forr\xf3 Liverpool"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",href:"/images/favicon.png"}),(0,r.jsx)("meta",{name:"description",content:"All-levels Brazilian dance classes, live music, and cultural events in Liverpool, England"}),(0,r.jsx)("meta",{property:"og:title",content:"Forro Liverpool"}),(0,r.jsx)("meta",{property:"og:url",content:"https://www.forroliverpool.co.uk/"}),(0,r.jsx)("meta",{property:"og:description",content:"All-levels Brazilian dance classes, live music, and cultural events in Liverpool, England"}),(0,r.jsx)("meta",{property:"og:image",content:"https://www.forroliverpool.co.uk/images/fl_meta_image.jpg"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:locale",content:"en-GB"})]}),(0,r.jsx)("body",{className:"".concat(o().variable," ").concat(l().variable," ").concat(d().variable," ").concat(u().variable," ").concat(p().variable,"  main-page font-sans"),children:(0,r.jsx)(y.i,{children:t})})]})}},6577:function(e,t,n){"use strict";n.d(t,{DH:function(){return getCookieAuth},Fc:function(){return addCookieLanguage},My:function(){return addCookieAuth},ZK:function(){return getCookieLanguage}});var r=n(1436);function getCookieAuth(){let e=r.Z.get("cookieAccepted");if(e){let t=new Date(parseInt(e)),n=new Date;if(t>n)return!1}return!0}function addCookieAuth(){let e=new Date;return r.Z.set("cookieAccepted",e.getTime()+6048e5,{path:"/",expires:7}),!1}function getCookieLanguage(){let e=r.Z.get("language");return e||(addCookieLanguage("en"),"en")}function addCookieLanguage(e){r.Z.set("language",e,{path:"/",expires:30})}},9482:function(e,t,n){"use strict";n.d(t,{Z:function(){return useLanguage},i:function(){return LanguageProvider}});var r=n(7437),a=n(2265),o=n(6577);let i=(0,a.createContext)(void 0),LanguageProvider=e=>{let{children:t}=e,[n,l]=(0,a.useState)((0,o.ZK)());return(0,a.useEffect)(()=>{n&&(0,o.Fc)(n)},[n]),(0,r.jsx)(i.Provider,{value:{language:n,setLanguage:l},children:t})},useLanguage=()=>{let e=(0,a.useContext)(i);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},2489:function(){},5362:function(e){e.exports={style:{fontFamily:"'__Changa_0c1f04', '__Changa_Fallback_0c1f04'",fontStyle:"normal"},className:"__className_0c1f04",variable:"__variable_0c1f04"}},2719:function(e){e.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9",variable:"__variable_e66fe9"}},3895:function(e){e.exports={style:{fontFamily:"'__Open_Sans_8299a1', '__Open_Sans_Fallback_8299a1'",fontStyle:"normal"},className:"__className_8299a1",variable:"__variable_8299a1"}},4844:function(e){e.exports={style:{fontFamily:"'__Roboto_Flex_a39cb5', '__Roboto_Flex_Fallback_a39cb5'",fontStyle:"normal"},className:"__className_a39cb5",variable:"__variable_a39cb5"}},4361:function(e){e.exports={style:{fontFamily:"'__pieches_c5adbc', '__pieches_Fallback_c5adbc'"},className:"__className_c5adbc",variable:"__variable_c5adbc"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,o={},u=null,s=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(s=t.ref),t)i.call(t,r)&&!c.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:s,props:o,_owner:l.current}}t.Fragment=o,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},8475:function(e,t,n){e.exports=n(3994)},1436:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return r}});var r=function init(e,t){function set(n,r,a){if("undefined"!=typeof document){"number"==typeof(a=assign({},t,a)).expires&&(a.expires=new Date(Date.now()+864e5*a.expires)),a.expires&&(a.expires=a.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var o="";for(var i in a)a[i]&&(o+="; "+i,!0!==a[i]&&(o+="="+a[i].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+o}}return Object.create({set,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},a=0;a<n.length;a++){var o=n[a].split("="),i=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(r[l]=e.read(i,l),t===l)break}catch(e){}}return t?r[t]:r}},remove:function(e,t){set(e,"",assign({},t,{expires:-1}))},withAttributes:function(e){return init(this.converter,assign({},this.attributes,e))},withConverter:function(e){return init(assign({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[971,472,744],function(){return e(e.s=6787)}),_N_E=e.O()}]);