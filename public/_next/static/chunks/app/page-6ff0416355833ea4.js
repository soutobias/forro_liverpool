(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3405:function(e,t,n){Promise.resolve().then(n.bind(n,5721))},3574:function(e,t){"use strict";function NoopHead(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return NoopHead}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},863:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return isEqualNode},default:function(){return initHeadManager}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function reactElementToDOM(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?o.innerHTML=a.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function isEqualNode(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function initHeadManager(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var a;(null==n?void 0:null==(a=n.tagName)?void 0:a.toLowerCase())===e&&i.push(n)}let l=t.map(reactElementToDOM).filter(e=>{for(let t=0,n=i.length;t<n;t++){let n=i[t];if(isEqualNode(n,e))return i.splice(t,1),!1}return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),l.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+l.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2389:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{requestIdleCallback:function(){return n},cancelIdleCallback:function(){return r}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return handleClientScriptLoad},initScriptLoader:function(){return initScriptLoader},default:function(){return p}});let r=n(1024),o=n(8533),i=r._(n(4887)),a=o._(n(2265)),l=n(1852),u=n(863),c=n(2389),s=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],insertStylesheets=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},loadScript=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:c,stylesheets:p}=e,g=n||t;if(g&&d.has(g))return;if(s.has(t)){d.add(g),s.get(t).then(r,c);return}let afterLoad=()=>{o&&o(),d.add(g)},m=document.createElement("script"),h=new Promise((e,t)=>{m.addEventListener("load",function(t){e(),r&&r.call(this,t),afterLoad()}),m.addEventListener("error",function(e){t(e)})}).catch(function(e){c&&c(e)});for(let[n,r]of(i?(m.innerHTML=i.__html||"",afterLoad()):a?(m.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",afterLoad()):t&&(m.src=t,s.set(t,h)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();m.setAttribute(e,r)}"worker"===l&&m.setAttribute("type","text/partytown"),m.setAttribute("data-nscript",l),p&&insertStylesheets(p),document.body.appendChild(m)};function handleClientScriptLoad(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>loadScript(e))}):loadScript(e)}function initScriptLoader(e){e.forEach(handleClientScriptLoad),function(){let e=[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')];e.forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}()}function Script(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:u="afterInteractive",onError:s,stylesheets:f,...p}=e,{updateScripts:g,scripts:m,getIsSsr:h,appDir:_,nonce:y}=(0,a.useContext)(l.HeadManagerContext),v=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;v.current||(o&&e&&d.has(e)&&o(),v.current=!0)},[o,t,n]);let b=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!b.current&&("afterInteractive"===u?loadScript(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>loadScript(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>loadScript(e))})),b.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(g?(m[u]=(m[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:s,...p}]),g(m)):h&&h()?d.add(t||n):h&&!h()&&loadScript(e)),_){if(f&&f.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"}),a.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(p.dangerouslySetInnerHTML&&(p.children=p.dangerouslySetInnerHTML.__html,delete p.dangerouslySetInnerHTML),a.default.createElement("script",{nonce:y,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...p}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,p.integrity?{as:"script",integrity:p.integrity}:{as:"script"})}return null}Object.defineProperty(Script,"__nextScript",{value:!0});let p=Script;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5721:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var r=n(7437),o=n(2265),i=n(8682),a=n(6577),l=n(9459),u=n(3574),c=n.n(u),s=n(9482),d=n(8475),f=n.n(d);function Home(){let[e,t]=(0,o.useState)(!1),[n,u]=(0,o.useState)(!1),[d,p]=(0,o.useState)({}),[g,m]=(0,o.useState)(null),[h,_]=(0,o.useState)(null),{language:y}=(0,s.Z)(),[v,b]=(0,o.useState)(""),[x,w]=(0,o.useState)(""),[E,S]=(0,o.useState)(!1),j=(0,o.useRef)(null);return((0,o.useEffect)(()=>{if(h){let e=new IntersectionObserver(e=>{e.forEach(e=>{S(e.isIntersecting)})},{threshold:.1}),t=j.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}},[h]),(0,o.useEffect)(()=>{"en"===y?(b("api/v1/sites"),w("api/v1/sitefestivals")):(b("api/v1/site_translations"),w("api/v1/site_festival_translations"))},[y]),(0,o.useEffect)(()=>{v&&((0,l.a)(v,m),(0,l.a)(x,_))},[v,x]),(0,o.useEffect)(()=>{t((0,a.DH)()),u(!0)},[]),(0,o.useEffect)(()=>{h&&setTimeout(()=>{let e=window.location.hash;if(e){let t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}},500)},[h]),n)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:"Forro Liverpool"}),(0,r.jsx)("meta",{name:"description",content:"Forro Liverpool"})]}),(0,r.jsx)(f(),{strategy:"lazyOnload",src:"https://www.googletagmanager.com/gtag/js?id=G-DQR97THJN6"}),(0,r.jsx)(f(),{id:"gtag-setup",strategy:"lazyOnload",children:"\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'G-DQR97THJN6');\n        "}),(0,r.jsx)("div",{className:e?"overflow-hidden pointer-events-none opacity-20":""}),e&&(0,r.jsx)(i.w,{setShowGDPR:t})]}):null}},8682:function(e,t,n){"use strict";n.d(t,{w:function(){return GDPR}});var r=n(7437),o=n(6577),i=n(2957),a=n.n(i),l=n(9482);function GDPR(e){let{language:t}=(0,l.Z)();return(0,r.jsx)("div",{className:"w-full shadow-custom md:w-[50%] md:p-10 md:flex md:justify-center z-[64] md:bottom-[25%] md:left-[25%] bottom-0 fixed pointer-events-auto opacity-100 ".concat(a().begeBg),children:(0,r.jsxs)("div",{className:"pb-12",children:[(0,r.jsx)("div",{className:"pl-8 pt-12 pr-8",children:"en"===t?(0,r.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"We use cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies."}):(0,r.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"Usamos cookies para fornecer as funcionalidades necess\xe1rias do site e melhorar sua experi\xeancia. Ao navegar no nosso site, voc\xea concorda com o uso de cookies."})}),(0,r.jsx)("div",{className:"mx-4 h-max",children:(0,r.jsx)("div",{onClick:()=>e.setShowGDPR((0,o.My)()),className:"flex justify-center bg-black no-underline cursor-pointer text-changa",children:(0,r.jsx)("p",{className:"text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5",children:"en"===t?"Accept":"Aceitar"})})})]})})}},9459:function(e,t,n){"use strict";async function fetchApi(e,t){try{let n=await fetch("".concat("/").concat(e));if(!n.ok)throw Error("HTTP error! Status: ".concat(n.status));let r=await n.json();t(r)}catch(e){console.error("Error fetching data:",e)}}n.d(t,{a:function(){return fetchApi}})},6577:function(e,t,n){"use strict";n.d(t,{DH:function(){return getCookieAuth},Fc:function(){return addCookieLanguage},My:function(){return addCookieAuth},ZK:function(){return getCookieLanguage}});var r=n(1436);function getCookieAuth(){let e=r.Z.get("cookieAccepted");if(console.log(e,"cookieAuth"),e){let t=new Date(parseInt(e));console.log(t),console.log(new Date);let n=new Date;if(t>n)return!1}return!0}function addCookieAuth(){let e=new Date;return r.Z.set("cookieAccepted",e.getTime()+6048e5,{path:"/",expires:7}),!1}function getCookieLanguage(){let e=r.Z.get("language");return e||(addCookieLanguage("en"),"en")}function addCookieLanguage(e){r.Z.set("language",e,{path:"/",expires:30})}},9482:function(e,t,n){"use strict";n.d(t,{Z:function(){return useLanguage},i:function(){return LanguageProvider}});var r=n(7437),o=n(2265),i=n(6577);let a=(0,o.createContext)(void 0),LanguageProvider=e=>{let{children:t}=e,[n,l]=(0,o.useState)((0,i.ZK)());return(0,o.useEffect)(()=>{n&&(0,i.Fc)(n)},[n]),(0,r.jsx)(a.Provider,{value:{language:n,setLanguage:l},children:t})},useLanguage=()=>{let e=(0,o.useContext)(a);if(!e)throw Error("useLanguage must be used within a LanguageProvider");return e}},2957:function(e){e.exports={blackBg:"Bg_blackBg__bgNxR",pinkBg:"Bg_pinkBg__jaIwO",purpleBg:"Bg_purpleBg__W8LXd",lightPinkBg:"Bg_lightPinkBg__WnGbh",gradientBg:"Bg_gradientBg__MC4zN",begeBg:"Bg_begeBg__KrbpI",circlesBg1:"Bg_circlesBg1__xX1F3",circlesBg2:"Bg_circlesBg2__vyWqy",rainbowBg:"Bg_rainbowBg__qlNiE",heroBg:"Bg_heroBg__gnbEn",communityBg:"Bg_communityBg__C7A_u","swing-animation":"Bg_swing-animation__uOxu7",swing:"Bg_swing__R7rVg"}},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,n){var r,i={},c=null,s=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:s,props:i,_owner:l.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,n){"use strict";e.exports=n(622)},8475:function(e,t,n){e.exports=n(3994)},1436:function(e,t,n){"use strict";/*! js-cookie v3.0.5 | MIT */function assign(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}n.d(t,{Z:function(){return r}});var r=function init(e,t){function set(n,r,o){if("undefined"!=typeof document){"number"==typeof(o=assign({},t,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),n=encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var i="";for(var a in o)o[a]&&(i+="; "+a,!0!==o[a]&&(i+="="+o[a].split(";")[0]));return document.cookie=n+"="+e.write(r,n)+i}}return Object.create({set,get:function(t){if("undefined"!=typeof document&&(!arguments.length||t)){for(var n=document.cookie?document.cookie.split("; "):[],r={},o=0;o<n.length;o++){var i=n[o].split("="),a=i.slice(1).join("=");try{var l=decodeURIComponent(i[0]);if(r[l]=e.read(a,l),t===l)break}catch(e){}}return t?r[t]:r}},remove:function(e,t){set(e,"",assign({},t,{expires:-1}))},withAttributes:function(e){return init(this.converter,assign({},this.attributes,e))},withConverter:function(e){return init(assign({},this.converter,e),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[971,472,744],function(){return e(e.s=3405)}),_N_E=e.O()}]);