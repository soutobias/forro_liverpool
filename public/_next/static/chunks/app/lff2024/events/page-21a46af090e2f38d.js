(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[541],{5879:function(e,t,s){Promise.resolve().then(s.bind(s,8884))},8884:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return EventDetails}});var l=s(7437),n=s(2265),i=s(9459),a=s(6691),r=s.n(a),c=s(4025),o=s(5538),d=s(1882),x=s(6580),m=s(8682),p=s(2957),h=s.n(p),u=s(8483),f=s(1874),j=s(4033),v=s(1396),w=s.n(v),g=s(9482),b=s(3665);function EventDetails(){let[e,t]=(0,n.useState)(null),[s,a]=(0,n.useState)(null),[p,v]=(0,n.useState)(!1),[N,C]=(0,n.useState)(!1),{language:k}=(0,g.Z)(),[E,y]=(0,n.useState)(""),[_,S]=(0,n.useState)(1),A=(0,j.useSearchParams)(),D=A.get("id"),[B,G]=(0,n.useState)(!1),P=(0,n.useRef)(null);return((0,n.useEffect)(()=>{if(s){let e=new IntersectionObserver(e=>{e.forEach(e=>{G(e.isIntersecting)})},{threshold:.1}),t=P.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}},[s]),(0,n.useEffect)(()=>{"en"===k?(y("api/v1/sitefestivals"),S(0)):(y("api/v1/site_festival_translations"),S(1))},[k]),(0,n.useEffect)(()=>{E&&(0,i.a)(E,a)},[E]),(0,n.useEffect)(()=>{(0,i.a)("".concat("api/v1/events","/").concat(D),t)},[e,D]),(0,n.useEffect)(()=>{v(!1),C(!0)},[]),N)?(0,l.jsxs)("div",{className:p?"overflow-hidden pointer-events-none ".concat(h().blackBg):h().blackBg,children:[s&&(0,l.jsx)("div",{ref:P,children:(0,l.jsx)(o.w,{plusColor:"#EAEAEA",siteFestival:s})}),(0,l.jsx)("div",{className:"w-full z-[59] relative pb-4",children:e&&(0,l.jsx)("div",{className:"px-4 md:px-[8.75rem] pt-[6.25rem] md:pt-[8rem]",children:(0,l.jsx)("div",{className:"md:flex md:justify-between md:gap-20 w-full",children:(0,l.jsxs)("div",{className:"pt-7 pb-0 w-full",children:[(0,l.jsxs)("div",{className:"pt-0 w-full",children:[e.is_class?(0,l.jsx)(b.H1,{color:"white",text:"".concat(e.date[_]," ").concat(e.name[_])}):(0,l.jsx)(b.H1,{color:"white",text:e.name[_]}),(0,l.jsxs)("div",{className:"lg:flex lg:justify-between lg:gap-20 block",children:[(0,l.jsxs)("div",{className:"flex gap-12 justify-between pb-0 pt-7 w-full",children:[(0,l.jsxs)("div",{className:"",children:[!e.is_class&&(0,l.jsx)("div",{className:"bg-pink-400 uppercase text-white mb-4 w-max pl-3 pr-3 rounded-2xl text-[1rem] font-changa font-extrabold",children:e.date[_]}),(0,l.jsx)("div",{className:"bg-pink-400 uppercase text-white w-max pl-3 pr-3 rounded-2xl text-[1rem] font-changa font-extrabold",children:e.time[_]})]}),(0,l.jsx)("div",{children:e.location&&(0,l.jsx)("div",{children:e.location.map((e,t)=>(0,l.jsx)("div",{className:"pr-4 pb-4",children:(0,l.jsxs)("div",{className:"flex text-white",children:[(0,l.jsx)("div",{children:(0,l.jsx)(u.m,{color:"white"})}),(0,l.jsxs)("div",{className:"pl-1",children:[(0,l.jsx)("div",{className:"text-white uppercase leading-6 pl-0 font-extrabold text-[1rem] md:text-[1.25rem] font-sans",children:(0,l.jsxs)(w(),{href:e.split(";")[2],target:"_blank",className:"flex gap-0 justify-start",title:"en"===k?"Go to location":"Ir para localiza\xe7\xe3o",children:[(0,l.jsx)("p",{className:"p-0 m-o",children:e.split(";")[0]}),(0,l.jsx)("div",{className:"pt-2",children:(0,l.jsx)(c.G,{color:"white"})})]})}),(0,l.jsx)("div",{className:"text-white leading-6 pl-0 pt-1 md:pt-7 font-semibold text-[1rem]  md:text-[1.25rem] font-sans",children:e.split(";")[1]})]})]})},t))})})]}),(0,l.jsxs)("div",{className:"lg:flex-grow-0 w-full",children:[!e.is_class&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"pt-8",children:[(0,l.jsx)("p",{className:"text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line",children:e.description[_]}),e[0===_?"schedule":"schedule_translation"].map((e,t)=>(0,l.jsxs)("div",{className:"pt-4 flex justify-between",children:[(0,l.jsx)("p",{className:"text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line",children:e.split(";")[0]}),(0,l.jsx)("p",{className:"text-white text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold whitespace-pre-line",children:e.split(";")[1]})]},t))]})}),e.is_class&&(0,l.jsx)("div",{className:"pt-8 z-[61]",children:(0,l.jsx)(f.c,{href:e.schedule[0],content:"en"===k?"Download Class Schedule":"Download da Programa\xe7\xe3o",bg:"white",font:"black",rounded:"none",newTab:"true"})}),(0,l.jsx)("div",{className:"pt-6 z-[61]"})]})]})]}),e.cover_image[0]&&(0,l.jsx)("div",{className:"pt-8 flex justify-center items-center",children:(0,l.jsx)(r(),{src:e.cover_image[0],alt:"illustration",className:"rounded-xl h-max w-full md:w-[50%] object-cover border-4 border-pink-400",width:1336,height:192})}),(0,l.jsx)(w(),{href:"/lff2024#program",className:"font-semibold cursor-pointer no-underline mt-12 block lg:-pl-[2rem] md:pt-4 text-[1rem] md:text-[1.5rem] text-white",children:"en"===k?(0,l.jsx)("p",{children:"< Back"}):(0,l.jsx)("p",{children:"< Voltar"})})]})})})}),(0,l.jsx)(d.$,{siteFestival:s}),p&&(0,l.jsx)(m.w,{setShowGDPR:v}),!B&&(0,l.jsx)(x.e,{})]}):null}},4025:function(e,t,s){"use strict";s.d(t,{G:function(){return ArrowUpRight}});var l=s(7437);let ArrowUpRight=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",children:(0,l.jsx)("path",{d:"M12.4795 0.962035C12.4795 0.719038 12.37 0.485992 12.1751 0.314167C11.9801 0.142342 11.7158 0.0458114 11.4401 0.0458114L3.1244 0C2.84872 0 2.58433 0.0965306 2.3894 0.268356C2.19446 0.440181 2.08494 0.673226 2.08494 0.916224C2.08494 1.15922 2.19446 1.39227 2.3894 1.56409C2.58433 1.73592 2.84872 1.83245 3.1244 1.83245H8.90379L0.30747 9.42795C0.210043 9.51312 0.132714 9.61445 0.0799418 9.7261C0.0271699 9.83776 0 9.95751 0 10.0785C0 10.1994 0.0271699 10.3192 0.0799418 10.4308C0.132714 10.5425 0.210043 10.6438 0.30747 10.729C0.404101 10.8149 0.519067 10.883 0.645734 10.9295C0.772402 10.9761 0.908265 11 1.04549 11C1.18271 11 1.31857 10.9761 1.44524 10.9295C1.57191 10.883 1.68687 10.8149 1.7835 10.729L10.4006 3.13349V8.24602C10.4006 8.48901 10.5101 8.72206 10.7051 8.89388C10.9 9.06571 11.1644 9.16224 11.4401 9.16224C11.7158 9.16224 11.9801 9.06571 12.1751 8.89388C12.37 8.72206 12.4795 8.48901 12.4795 8.24602V0.962035Z",fill:e.color?e.color:"#201E1E"})})},8483:function(e,t,s){"use strict";s.d(t,{m:function(){return LocationMarker}});var l=s(7437);let LocationMarker=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"19",viewBox:"0 0 13 19",fill:"none",children:(0,l.jsx)("path",{d:"M13 10.535C13 8.42881 12.9841 3.43262 12.7026 3.03871C12.1473 2.2509 10.5967 0.442141 9.84716 0.213032C9.63301 0.14872 7.69372 0 7.04332 0H4.4457C3.01007 0 0.721782 2.21472 0.281574 2.52824C0.281574 2.52824 0 2.8498 0 3.19547C0 3.19547 0 7.76158 0 10.5431C0 11.2143 0.432276 11.359 0.971629 12.175C2.67694 14.7514 6.17877 18.2443 6.54759 18.4614C6.54759 18.4614 7.17816 18.9839 7.4637 18.996C7.74924 19.008 7.84838 18.6624 8.01495 18.5136C8.45119 18.1318 10.0098 15.9733 11.3225 13.626C11.8539 12.6734 13 11.142 13 10.535ZM6.39292 9.49799C4.61623 9.49799 3.30354 8.12735 3.30354 6.28644C3.30354 4.18426 5.15955 3.02666 7.05918 3.02666C8.54637 3.02666 9.75198 4.81532 9.75198 6.49947C9.75198 8.46499 8.32428 9.49799 6.39292 9.49799Z",fill:e.color?e.color:"#201E1E"})})},8682:function(e,t,s){"use strict";s.d(t,{w:function(){return GDPR}});var l=s(7437),n=s(6577),i=s(2957),a=s.n(i),r=s(9482);function GDPR(e){let{language:t}=(0,r.Z)();return(0,l.jsx)("div",{className:"w-full shadow-custom md:w-[50%] md:p-10 md:flex md:justify-center z-[64] md:bottom-[25%] md:left-[25%] bottom-0 fixed pointer-events-auto opacity-100 ".concat(a().begeBg),children:(0,l.jsxs)("div",{className:"pb-12",children:[(0,l.jsx)("div",{className:"px-6 pt-12",children:"en"===t?(0,l.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal text-justify",children:"We use cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies."}):(0,l.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal text-justify",children:"Usamos cookies para fornecer as funcionalidades necess\xe1rias do site e melhorar sua experi\xeancia. Ao navegar no nosso site, voc\xea concorda com o uso de cookies."})}),(0,l.jsx)("div",{className:"mx-4 h-max",children:(0,l.jsx)("div",{onClick:()=>e.setShowGDPR((0,n.My)()),className:"flex justify-center bg-black no-underline cursor-pointer text-changa",children:(0,l.jsx)("p",{className:"text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5",children:"en"===t?"Accept":"Aceitar"})})})]})})}},4033:function(e,t,s){e.exports=s(94)}},function(e){e.O(0,[429,492,971,472,744],function(){return e(e.s=5879)}),_N_E=e.O()}]);