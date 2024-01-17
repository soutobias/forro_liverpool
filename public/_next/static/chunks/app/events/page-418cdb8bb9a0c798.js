(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{7999:function(e,t,n){Promise.resolve().then(n.bind(n,8459))},8459:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return EventDetails}});var s=n(7437),a=n(2265),r=n(9459),i=n(6691),l=n.n(i),o=n(4025),c=n(6076),d=n(5538),m=n(1882),x=n(6580),u=n(8682),p=n(4008),f=n(2957),h=n.n(f),v=n(8483),g=n(1874),b=n(4033),j=n(1396),w=n.n(j),N=n(3574),C=n.n(N),k=n(9482),A=n(3665);function EventDetails(){let[e,t]=(0,a.useState)([]),[n,i]=(0,a.useState)(null),[f,j]=(0,a.useState)(null),[N,_]=(0,a.useState)(null),[E,S]=(0,a.useState)(!1),[F,y]=(0,a.useState)(!1),{language:I}=(0,k.Z)(),[L,R]=(0,a.useState)(""),[U,M]=(0,a.useState)(""),[B,D]=(0,a.useState)(1),G=(0,b.useSearchParams)(),P=G.get("id"),[K,O]=(0,a.useState)(!1),z=(0,a.useRef)(null);return((0,a.useEffect)(()=>{if(f){let e=new IntersectionObserver(e=>{e.forEach(e=>{O(e.isIntersecting)})},{threshold:.1}),t=z.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}},[f]),(0,a.useEffect)(()=>{"en"===I?(R("api/v1/sites"),M("api/v1/sitefestivals"),D(0)):(R("api/v1/site_translations"),M("api/v1/site_festival_translations"),D(1))},[I]),(0,a.useEffect)(()=>{L&&((0,r.a)(L,_),(0,r.a)(U,j))},[L,U]),(0,a.useEffect)(()=>{(0,r.a)("api/v1/events",t)},[]),(0,a.useEffect)(()=>{if(e.length>0){let t=e.find(e=>String(e.id)===P);i(t||null)}},[e,P]),(0,a.useEffect)(()=>{S(!1),y(!0)},[]),F)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(C(),{children:[(0,s.jsx)("title",{children:"Forro Liverpool"}),(0,s.jsx)("meta",{name:"description",content:"Forro Liverpool"})]}),(0,s.jsxs)("div",{className:E?"overflow-hidden pointer-events-none":"",children:[(0,s.jsx)(c.Y,{site:N}),f&&(0,s.jsx)("div",{ref:z,children:(0,s.jsx)(d.w,{siteFestival:f})}),(0,s.jsx)("div",{className:"w-full z-[59] relative ".concat(h().begeBg," pb-20"),children:n&&(0,s.jsxs)("div",{className:"px-4 md:px-[8.75rem] mt-[7.25rem] md:mt-[9rem]",children:[(0,s.jsxs)("div",{className:"md:flex md:justify-between md:gap-20",children:[(0,s.jsx)(l(),{src:n.image[0],alt:"illustration",className:"rounded-xl h-[12rem] md:h-max w-full md:w-[50%] object-cover",width:1336,height:192}),(0,s.jsx)("div",{className:"pt-7 pb-8",children:(0,s.jsxs)("div",{className:"pt-0",children:[(0,s.jsx)(A.H1,{color:"black",text:n.name[B]}),(0,s.jsxs)("div",{className:"flex gap-16 justify-between w-full pb-6 pt-7",children:[(0,s.jsxs)("div",{className:"",children:[(0,s.jsx)("div",{className:"bg-pink-400 uppercase text-white mb-4 w-max pl-3 font-bold pr-3 rounded-2xl text-[1rem] font-sans",children:n.date[B]}),(0,s.jsx)("div",{className:"bg-pink-400 uppercase text-white w-max pl-3 font-bold pr-3 rounded-2xl text-[1rem] font-sans",children:n.price})]}),(0,s.jsx)("div",{children:n.location&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex text-black",children:[(0,s.jsx)(v.m,{}),(0,s.jsx)("div",{className:"text-black uppercase leading-4 pl-0 mt-1 ml-1 font-extrabold text-[1rem] md:text-[1.25rem] font-sans",children:(0,s.jsxs)(w(),{href:n.location[2],target:"_blank",className:"flex",children:[n.location[0],(0,s.jsx)(o.G,{})]})})]}),(0,s.jsxs)("div",{className:"ml-4 mt-2 text-black",children:[(0,s.jsx)("div",{className:"text-black leading-5 md:leading-6 pl-0 mt-1 font-semibold text-[1rem] md:text-[1.25rem] font-sans",children:n.location[1]}),(0,s.jsx)("div",{className:"text-black leading-4 pl-0 mt-1 pt-5 md:pt-7 font-semibold text-[1rem]  md:text-[1.25rem] font-sans",children:n.time[B]})]})]})})]}),(0,s.jsx)("div",{className:"pt-8",children:(0,s.jsx)("p",{className:"text-black text-[1rem] md:text-[1.25rem] leading-6 font-sans font-semibold",children:n.description[B]})})]})})]}),"Special Events"===n.type_event&&(0,s.jsx)("div",{className:"pt-8 z-[61]",children:(0,s.jsx)(g.c,{href:"/lff2024/tickets",content:"en"===I?"Get Tickets":"Ingressos",bg:"black",font:"white"})}),(0,s.jsx)("h2",{className:"font-changa text-black text-[1.5rem] md:text-[2rem] leading-6 md:leading-8 font-extrabold pt-8 sm:pt-16",children:"en"===I?"Plus, join us for...":"Al\xe9m disso, junte-se a n\xf3s para..."}),(0,s.jsx)("div",{className:"pt-8 md:grid md:grid-cols-2 md:gap-4",children:e&&e.length>0&&e.map(e=>String(e.id)!==P&&(0,s.jsx)(p.K,{event:e,aspectRatio:"aspect-300/168"},e.id))})]})}),(0,s.jsx)(m.$,{siteFestival:f}),E&&(0,s.jsx)(u.w,{setShowGDPR:S}),!K&&(0,s.jsx)(x.e,{})]})]}):null}},4025:function(e,t,n){"use strict";n.d(t,{G:function(){return ArrowUpRight}});var s=n(7437);let ArrowUpRight=()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",children:(0,s.jsx)("path",{d:"M12.4795 0.962035C12.4795 0.719038 12.37 0.485992 12.1751 0.314167C11.9801 0.142342 11.7158 0.0458114 11.4401 0.0458114L3.1244 0C2.84872 0 2.58433 0.0965306 2.3894 0.268356C2.19446 0.440181 2.08494 0.673226 2.08494 0.916224C2.08494 1.15922 2.19446 1.39227 2.3894 1.56409C2.58433 1.73592 2.84872 1.83245 3.1244 1.83245H8.90379L0.30747 9.42795C0.210043 9.51312 0.132714 9.61445 0.0799418 9.7261C0.0271699 9.83776 0 9.95751 0 10.0785C0 10.1994 0.0271699 10.3192 0.0799418 10.4308C0.132714 10.5425 0.210043 10.6438 0.30747 10.729C0.404101 10.8149 0.519067 10.883 0.645734 10.9295C0.772402 10.9761 0.908265 11 1.04549 11C1.18271 11 1.31857 10.9761 1.44524 10.9295C1.57191 10.883 1.68687 10.8149 1.7835 10.729L10.4006 3.13349V8.24602C10.4006 8.48901 10.5101 8.72206 10.7051 8.89388C10.9 9.06571 11.1644 9.16224 11.4401 9.16224C11.7158 9.16224 11.9801 9.06571 12.1751 8.89388C12.37 8.72206 12.4795 8.48901 12.4795 8.24602V0.962035Z",fill:"#201E1E"})})},8483:function(e,t,n){"use strict";n.d(t,{m:function(){return LocationMarker}});var s=n(7437);let LocationMarker=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"19",viewBox:"0 0 13 19",fill:"none",children:(0,s.jsx)("path",{d:"M13 10.535C13 8.42881 12.9841 3.43262 12.7026 3.03871C12.1473 2.2509 10.5967 0.442141 9.84716 0.213032C9.63301 0.14872 7.69372 0 7.04332 0H4.4457C3.01007 0 0.721782 2.21472 0.281574 2.52824C0.281574 2.52824 0 2.8498 0 3.19547C0 3.19547 0 7.76158 0 10.5431C0 11.2143 0.432276 11.359 0.971629 12.175C2.67694 14.7514 6.17877 18.2443 6.54759 18.4614C6.54759 18.4614 7.17816 18.9839 7.4637 18.996C7.74924 19.008 7.84838 18.6624 8.01495 18.5136C8.45119 18.1318 10.0098 15.9733 11.3225 13.626C11.8539 12.6734 13 11.142 13 10.535ZM6.39292 9.49799C4.61623 9.49799 3.30354 8.12735 3.30354 6.28644C3.30354 4.18426 5.15955 3.02666 7.05918 3.02666C8.54637 3.02666 9.75198 4.81532 9.75198 6.49947C9.75198 8.46499 8.32428 9.49799 6.39292 9.49799Z",fill:e.color?e.color:"#201E1E"})})},4008:function(e,t,n){"use strict";n.d(t,{K:function(){return EventCard}});var s=n(7437),a=n(2265),r=n(1396),i=n.n(r),l=n(8483),o=n(6691),c=n.n(o),d={src:"/_next/static/media/flag.eac36695.png",height:74,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAiklEQVR42hXNsW0CURBF0fvmz8qWLBk7sRNHphBqIYBCSAgoig4IyUFCxEgkLMx/iNPA0XG23nnsU0I36On+OKftX+ifHk0MgaO1UMpIMKgMiDaGx0rKyGEUuEpJk7AA0o872A7KPyTbmAwLvTUI4rXt8+9rDhxU9Y1ZpSa5rMv14FMfgE37/3h/AidNPLkulFhrAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},m=n(9482);function EventCard(e){let{event:t,aspectRatio:n}=e,{language:r}=(0,m.Z)(),[o,x]=(0,a.useState)(0);return(0,a.useEffect)(()=>{"en"===r?x(0):x(1)},[r]),(0,s.jsx)(i(),{href:"Liverpool Forr\xf3 Festival 2024"===t.name[0]?"/lff2024":"/events?id=".concat(t.id),passHref:!0,children:(0,s.jsxs)("div",{className:"relative ".concat("Liverpool Forr\xf3 Festival 2024"===t.name[0]?"aspect-square md:".concat(n||"aspect-square"," text-white"):"aspect-300/168 md:aspect-300/168 text-black"," bg-cover rounded-xl font-changa w-full mb-4 shadow-custom"),style:{backgroundImage:"url(".concat(t.image[0],")"),backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:["Liverpool Forr\xf3 Festival 2024"===t.name[0]&&(0,s.jsx)("div",{className:"absolute right-5 top-0",children:(0,s.jsx)(c(),{src:d,alt:"illustration",className:"w-8 md:w-8 lg:w-10 xl:w-12",width:24,height:1})}),(0,s.jsx)("div",{className:"text-[1.25rem] md:text-[1.5rem] leading-[1.625rem] font-extrabold md:leading-8 pt-4 pl-4 pr-[9rem] md:pr-[8rem]",children:t.name[o]}),(0,s.jsx)("div",{className:"bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] md:text-[1.25rem] font-extrabold pt-0 pb-0 leading-4 md:leading-5 tracking-[0.05rem]",children:t.date[o]}),t.location&&"Liverpool Forr\xf3 Festival 2024"!==t.name[0]&&(0,s.jsxs)("div",{className:"flex ml-4 pt-4",children:[(0,s.jsx)(l.m,{}),(0,s.jsx)("div",{className:"uppercase leading-4 md:leading-5 pl-2 font-extrabold text-[1rem] md:text-[1.25rem]",children:t.location[0]})]})]})})}},6076:function(e,t,n){"use strict";n.d(t,{Y:function(){return FrameImportant}});var s=n(7437),a=n(1396),r=n.n(a),i=n(2265),l=n(8206),o=n.n(l);function FrameImportant(e){return(0,s.jsx)("div",{className:"w-full h-12 bg-pink-400 items-center ".concat(o().frameShadow),children:(0,s.jsx)(r(),{href:"/lff2024",className:"no-underline hover:opacity-60 transition-opacity items-center",children:e.site&&(0,s.jsx)(function(e){let{speed:t,direction:n,children:a}=e,[r,l]=(0,i.useState)(1),c=(0,i.useRef)(null),d=(0,i.useRef)(null),m=(0,i.useCallback)(()=>{if(!(null==d?void 0:d.current)||!(null==c?void 0:c.current))return;let{width:e}=d.current.getBoundingClientRect(),{width:t}=c.current.getBoundingClientRect(),n=e/d.current.children.length;n&&l(r+Math.ceil((t-e)/n)+1),(null==d?void 0:d.current)&&(d.current.setAttribute("data-animate","false"),setTimeout(()=>{(null==d?void 0:d.current)&&d.current.setAttribute("data-animate","true")},10))},[r]);return(0,i.useEffect)(()=>m(),[m]),(0,i.useEffect)(()=>(window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[r,m]),(0,s.jsx)("div",{className:o().looper,ref:c,children:(0,s.jsx)("div",{className:o().looper__innerList,ref:d,"data-animate":"true",children:[...Array(r)].map((e,r)=>(0,s.jsx)("div",{className:o().looper__listInstance,style:{animationDuration:"".concat(t,"s"),animationDirection:"right"===n?"reverse":"normal"},children:a},r))})})},{speed:10,direction:"left",children:(0,s.jsx)("div",{className:"uppercase pt-3 text-base tracking-[0.053rem] font-changa font-bold items-center ".concat(o().textShadow),children:"".concat(e.site[0].frame)})})})})}},8682:function(e,t,n){"use strict";n.d(t,{w:function(){return GDPR}});var s=n(7437),a=n(6577),r=n(2957),i=n.n(r),l=n(9482);function GDPR(e){let{language:t}=(0,l.Z)();return(0,s.jsx)("div",{className:"w-full shadow-custom md:w-[50%] md:p-10 md:flex md:justify-center z-[64] md:bottom-[25%] md:left-[25%] bottom-0 fixed pointer-events-auto opacity-100 ".concat(i().begeBg),children:(0,s.jsxs)("div",{className:"pb-12",children:[(0,s.jsx)("div",{className:"pl-8 pt-12 pr-8",children:"en"===t?(0,s.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"We use cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies."}):(0,s.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"Usamos cookies para fornecer as funcionalidades necess\xe1rias do site e melhorar sua experi\xeancia. Ao navegar no nosso site, voc\xea concorda com o uso de cookies."})}),(0,s.jsx)("div",{className:"mx-4 h-max",children:(0,s.jsx)("div",{onClick:()=>e.setShowGDPR((0,a.My)()),className:"flex justify-center bg-black no-underline cursor-pointer text-changa",children:(0,s.jsx)("p",{className:"text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5",children:"en"===t?"Accept":"Aceitar"})})})]})})}},8206:function(e){e.exports={looper:"FrameImportant_looper__bkNKt",looper__innerList:"FrameImportant_looper__innerList__Eivso",looper__listInstance:"FrameImportant_looper__listInstance__NQwfO",slideAnimation:"FrameImportant_slideAnimation__WQdrt",frameShadow:"FrameImportant_frameShadow__0aJuf",textShadow:"FrameImportant_textShadow__4fh6y"}},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[176,504,492,971,472,744],function(){return e(e.s=7999)}),_N_E=e.O()}]);