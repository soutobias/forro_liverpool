(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3405:function(e,t,n){Promise.resolve().then(n.bind(n,9148))},9148:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Home}});var s=n(7437),l=n(2957),i=n.n(l),r=n(9482),a=n(2265);function Hero(e){let{language:t}=(0,r.Z)(),n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{let t=n.current;e[0].isIntersecting?t&&t.play():t&&t.pause()},{threshold:.25}),t=n.current;return t&&e.observe(n.current),()=>{t&&e.unobserve(t)}},[]),e.site&&(0,s.jsx)("div",{className:"w-full z-[59] relative ".concat(i().heroBg," sm:pb-20"),children:(0,s.jsxs)("div",{className:"px-4 sm:flex sm:justify around pt-[6.75rem] sm:gap-[1rem] sm:px-[2rem] md:gap-[3rem] md:px-[3rem] lg:gap-[4rem] lg:px-[6rem] xl:gap-[6rem] xl:px-[8.5rem]",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:justify-center sm:w-[50%]",children:[(0,s.jsx)("div",{className:"text-[2rem] sm:text-[2.25rem] leading-10 sm:leading-[3rem] font-extrabold font-changa",children:(0,s.jsx)("h1",{children:e.site[0].title})}),(0,s.jsx)("div",{className:"pt-4 pb-[7.25rem] sm:pb-[5rem] text-[1rem] sm:text-[1.25rem] leading-6 sm:leading-7 font-sans font-semibold",children:(0,s.jsx)("p",{children:e.site[0].description})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)("a",{href:"/#classes-events",className:"flex justify-center bg-black no-underline w-[100%] font-changa rounded-xl",onClick:function(e){let t=e.currentTarget.getAttribute("href");if(t&&t.split("#")[0]===window.location.pathname){e.preventDefault();let n=document.querySelector("#".concat(t.split("#")[1])),s=n instanceof HTMLElement?n.offsetTop:0;window.scroll({top:s,behavior:"smooth"})}},children:(0,s.jsx)("p",{className:"text-white text-center text-[1rem] md:text-[1.25rem] leading-4 md:leading-5 uppercase font-extrabold w-full p-5",children:"en"===t?"Come dance with us":"Bora dan\xe7ar com a gente"})})})]}),(0,s.jsx)("div",{className:"pt-4 pb-4 h-max flex justify-center items-center",children:(0,s.jsx)("video",{ref:n,width:"1091",height:"1",autoPlay:!0,loop:!0,muted:!0,controls:!0,className:"rounded-2xl overflow-hidden",style:{borderRadius:"16px",overflow:"hidden"},children:(0,s.jsx)("source",{src:e.site&&e.site[0].cover_video,type:"video/webm"})})})]})})}var o=n(4008);let Line1=e=>{let{width:t}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 168 9",fill:"none",children:(0,s.jsx)("path",{d:"M47.4737 0C60.8316 0 115.427 2.0982 119.039 2.0982C123.051 2.0982 168 1.23593 168 1.23593V9H112.868C108.856 9 48.6838 6.41317 43.3884 6.41317C38.093 6.41317 1.78055 6.98802 0.547269 7.56287C0.504875 7.58084 0.466335 7.59162 0.427795 7.59162C0.107912 7.59162 0 6.87305 0 5.87784C0 3.66108 0.547269 0.0826347 0.547269 0.0826347C0.547269 0.0826347 18.6495 0.337725 31.7262 0.337725C41.1184 0.337725 42.7178 0 47.4737 0Z",fill:"#201E1E"})})},Line2=e=>{let{width:t}=e;return(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 163 9",fill:"none",children:(0,s.jsx)("path",{d:"M10.2865 0C18.3417 0 81.4926 1.27321 90.8122 1.51157C100.34 1.75293 136.964 3.20114 144.015 3.44251C151.066 3.68388 162.996 4.89071 162.996 4.89071V8.99698C161.75 8.91552 159.3 8.89138 156.566 8.89138C151.096 8.89138 144.476 8.99698 144.015 8.99698C136.224 8.99698 87.0226 6.92424 75.6725 6.92424C59.3278 6.92424 30.1306 7.20181 12.8972 7.20181C6.58992 7.20181 1.88549 7.16561 0 7.06302V0C0 0 1.85202 0.0271539 4.76393 0.0271539C6.31844 0.0271539 8.32665 0 10.2865 0Z",fill:"#201E1E"})})};var c=n(9459),d=n(3665);function ClassEvents(e){let{setShowEvent:t}=e,[n,l]=(0,a.useState)([]),i="api/v1/events?is_festival=false",{language:m}=(0,r.Z)();return(0,a.useEffect)(()=>{(0,c.a)(i,l)},[i]),(0,s.jsxs)("div",{id:"classes-events",className:"font-changa px-4 md:px-[8.5rem] pb-20",children:[(0,s.jsx)("div",{className:"pt-20 text-left md:text-center",children:(0,s.jsx)(d.H1,{color:"black",text:"en"===m?"Classes & Events":"Classes e Eventos"})}),(0,s.jsxs)("div",{className:"md:grid md:grid-cols-2 md:gap-5 lg:gap-10 xl:gap-[15rem] pt-10",children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"pt-5 pb-8 flex justify-between items-center gap-3 md:gap-10",children:[(0,s.jsx)("h2",{className:"text-[1.5rem] md:text-[2rem] leading-8 md:leading-9 font-extrabold text-black whitespace-nowrap",children:"en"===m?"Special Events":"Eventos Especiais"}),(0,s.jsx)(Line1,{width:"100%"})]}),(0,s.jsxs)("div",{children:[n.filter(e=>"Liverpool Forr\xf3 Festival 2024"===e.name[0]).map((e,n)=>(0,s.jsx)(o.K,{event:e,setShowEvent:t},n)),n.filter(e=>"Special Events"===e.type_event&&"Liverpool Forr\xf3 Festival 2024"!==e.name[0]).map((e,n)=>(0,s.jsx)(o.K,{event:e,setShowEvent:t},n))]})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"pt-10 sm:pt-5 pb-8 flex justify-between items-center gap-3 md:gap-10",children:[(0,s.jsx)("h2",{className:"text-[1.5rem] md:text-[2rem] leading-8 md:leading-9 font-extrabold whitespace-nowrap",children:"en"===m?"Regular Events":"Eventos Regulares"}),(0,s.jsx)(Line2,{width:"100%"})]}),(0,s.jsx)("div",{children:n.filter(e=>"Regular Events"===e.type_event).map((e,n)=>(0,s.jsx)(o.K,{event:e,setShowEvent:t},n))})]})]})]})}var m=n(6691),x=n.n(m);function CommunityCard(e){let t=e.name.split(" ");return(0,s.jsxs)("div",{className:e.className,children:[(0,s.jsx)(x(),{src:e.image,alt:"illustration",className:"mb-0 pb-0 rounded-2xl overflow-hidden h-[13] w-[11rem] md:w-[21rem] object-cover z-[60] relative",height:1,width:600}),(0,s.jsx)("div",{className:"flex justify-center -mt-[6.5rem] z-[59]",children:(0,s.jsxs)("div",{className:"bg-white pt-[7.5rem] w-10/12 pl-4 md:pl-8",children:[(0,s.jsxs)("div",{className:"md:flex md:gap-2 md:pb-4",children:[(0,s.jsx)("p",{className:"text-black text-[1.25rem] md:text-[1.5rem] font-extrabold leading-6 md:leading-8 pt-3 font-changa",children:t[0]}),(0,s.jsx)("p",{className:"text-black text-[1.25rem]  md:text-[1.5rem]  font-extrabold leading-6 md:leading-8 md:pt-3 font-changa",children:t[1]})]}),(0,s.jsx)("p",{className:"text-black text-[1rem]  md:text-[1.5rem] font-extrabold leading-6 pt-2 md:pt-0 pb-4 md:leading-8 font-changa uppercase",children:e.action})]})})]})}function Community(){let[e,t]=(0,a.useState)([]),{language:n}=(0,r.Z)(),[l,o]=(0,a.useState)("");return(0,a.useEffect)(()=>{"en"===n?o("api/v1/communities"):o("api/v1/community_translations")},[n]),(0,a.useEffect)(()=>{l&&(0,c.a)(l,t)},[l]),(0,s.jsxs)("div",{id:"community",className:"pb-20 px-4 md:px-[8.5rem] ".concat(i().communityBg),children:[(0,s.jsx)("div",{className:"pt-20 text-left md:text-center",children:(0,s.jsx)(d.H1,{color:"black",text:"en"===n?"Our Community":"Nossa Comunidade"})}),(0,s.jsx)("div",{children:e.length>0&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex pt-12 justify-center mr-2",children:[(0,s.jsx)("div",{className:"ml-2",children:(0,s.jsx)(CommunityCard,{image:e[0].profile_image[0],name:e[0].name[0],action:"en"===n?"Teacher":"Professor"},0)}),(0,s.jsx)("div",{className:"-ml-2",children:(0,s.jsx)(CommunityCard,{image:e[0].profile_image[1],name:e[0].name[1],action:"en"===n?"Teacher":"Professora"},1)})]}),(0,s.jsx)("div",{className:" flex flex-col justify-center",children:(0,s.jsx)("p",{className:"pt-8 sm:pt-16 pb-12 text-[1rem] md:text-[1.25rem] sm:px-[2rem] md:px-[3rem] xl:px-[10rem] leading-6 font-sans font-semibold md:leading-7",children:e[0].profile})})]})}),(0,s.jsxs)("div",{className:"lg:pt-[4rem] lg:flex lg:justify-center sm:gap-5 lg:gap-8 xl:gap-12 sm:px-[2rem] md:px-[3rem] xl:px-[10rem]",children:[(0,s.jsx)("div",{className:"flex justify-center h-max w-full sm:px-[2rem]",children:e.length>0&&(0,s.jsx)(x(),{src:e[0].profile_image[2],alt:"illustration",className:"overflow-hidden h-[20rem] object-cover rounded-xl",width:450,height:1})}),(0,s.jsx)("p",{className:"pt-8 text-[1rem] sm:px-[2rem] md:text-[1.25rem] leading-6 font-sans font-semibold lg:w-[80%]",children:e.length>0&&e[0].description})]})]})}var h=n(5538),p=n(6076),u=n(8682),f=n(6577),v=n(2759),g=n(504),w=n(1396),j=n.n(w),b=n(4025);function ClassEvent(e){let{language:t}=(0,r.Z)();return(0,s.jsxs)("div",{className:" h-full w-full z-20 bottom-0 fixed pointer-events-auto",children:[(0,s.jsx)("div",{className:"h-[20%] bg-gray-100 opacity-90",onClick:()=>e.setShowEvent({})}),(0,s.jsxs)("div",{className:"bg-white h-[80%] z-20 rounded-t-2xl",children:[(0,s.jsx)("div",{className:"bg-gray-100 opacity-90",children:(0,s.jsx)(x(),{src:e.showEvent.image[0],alt:"illustration",className:"rounded-t-2xl overflow-hidden",width:1336,height:400})}),(0,s.jsxs)("div",{className:"pt-7 pl-3 pr-3 pb-8",children:[(0,s.jsxs)("div",{className:"pt-0 pr-2",children:[(0,s.jsx)("p",{className:"text-black text-[2rem] leading-9 font-sans font-semibold pb-8",children:e.showEvent.title}),(0,s.jsxs)("div",{className:"flex gap-16 justify-between w-full pb-6",children:[(0,s.jsxs)("div",{className:"pl-2",children:[(0,s.jsx)("div",{className:"bg-gray-60 uppercase text-black mb-4 w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans",children:e.showEvent.period}),(0,s.jsx)("div",{className:"bg-gray-60 uppercase text-black w-max pl-2 font-bold pr-2 rounded-2xl text-[1rem] font-sans",children:"\xa3 7"})]}),(0,s.jsx)("div",{children:e.showEvent.location&&(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex text-black",children:[(0,s.jsx)(g.G,{icon:v.opg,className:"h-4 pr-0 pt-1"}),(0,s.jsxs)("div",{className:"text-black uppercase leading-4 pl-0 mt-1 ml-1 font-bold text-[1rem] font-sans",children:[e.showEvent.location[0],(0,s.jsx)(j(),{href:e.showEvent.location[2],target:"_blank",children:e.showEvent.location[0]})]}),(0,s.jsx)(b.G,{})]}),(0,s.jsxs)("div",{className:"ml-4 mt-2 text-black",children:[(0,s.jsx)("div",{className:"text-black leading-4 pl-0 mt-1 font-normal text-[1rem] font-sans",children:e.showEvent.location[1]}),(0,s.jsx)("div",{className:"text-black leading-4 pl-0 mt-1 pt-3 font-normal text-[1rem] font-sans",children:e.showEvent.time})]})]})})]}),(0,s.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] leading-5 font-sans font-normal",children:"Short event description here. Maybe about where Lucas is from, where he has trained, what he will be teaching. Also, all levels, special instructions."})]}),(0,s.jsxs)(j(),{href:"/lff2024/tickets",className:"no-underline mr-2 flex bg-gray-60 text-center text-[1rem] leading-5 uppercase font-bold p-5 w-full mt-4 justify-center",children:[(0,s.jsxs)("div",{children:[" ","en"===t?"Get Tickets":"Ingressos"]}),(0,s.jsx)(b.G,{})]})]})]})]})}var C=n(1882),k=n(6580),N=n(7474),y=n(3574),E=n.n(y);function Home(){let[e,t]=(0,a.useState)(!1),[n,l]=(0,a.useState)(!1),[i,o]=(0,a.useState)({}),[d,m]=(0,a.useState)(null),[x,v]=(0,a.useState)(null),{language:g}=(0,r.Z)(),[w,j]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[_,A]=(0,a.useState)(!1),S=(0,a.useRef)(null);return((0,a.useEffect)(()=>{if(x){let e=new IntersectionObserver(e=>{e.forEach(e=>{A(e.isIntersecting)})},{threshold:.1}),t=S.current;return t&&e.observe(t),()=>{t&&e.unobserve(t)}}},[x]),(0,a.useEffect)(()=>{"en"===g?(j("api/v1/sites"),y("api/v1/sitefestivals")):(j("api/v1/site_translations"),y("api/v1/site_festival_translations"))},[g]),(0,a.useEffect)(()=>{w&&((0,c.a)(w,m),(0,c.a)(b,v))},[w,b]),(0,a.useEffect)(()=>{t((0,f.DH)()),l(!0)},[]),(0,a.useEffect)(()=>{x&&setTimeout(()=>{let e=window.location.hash;if(e){let t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}},500)},[x]),n)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(E(),{children:[(0,s.jsx)("title",{children:"Forro Liverpool"}),(0,s.jsx)("meta",{name:"description",content:"Forro Liverpool"})]}),(0,s.jsxs)("div",{className:e?"overflow-hidden pointer-events-none opacity-20":"",children:[(0,s.jsx)(p.Y,{site:d}),x&&(0,s.jsx)("div",{ref:S,children:(0,s.jsx)(h.w,{siteFestival:x})}),(0,s.jsx)(Hero,{site:d}),(0,s.jsx)(ClassEvents,{setShowEvent:o}),(0,s.jsx)(Community,{}),(0,s.jsx)(N.B,{isFestival:!1}),(0,s.jsx)(C.$,{siteFestival:x}),Object.keys(i).length>0&&(0,s.jsx)(ClassEvent,{showEvent:i,setShowEvent:o}),!_&&(0,s.jsx)(k.e,{})]}),e&&(0,s.jsx)(u.w,{setShowGDPR:t})]}):null}},4025:function(e,t,n){"use strict";n.d(t,{G:function(){return ArrowUpRight}});var s=n(7437);let ArrowUpRight=()=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"11",viewBox:"0 0 13 11",fill:"none",children:(0,s.jsx)("path",{d:"M12.4795 0.962035C12.4795 0.719038 12.37 0.485992 12.1751 0.314167C11.9801 0.142342 11.7158 0.0458114 11.4401 0.0458114L3.1244 0C2.84872 0 2.58433 0.0965306 2.3894 0.268356C2.19446 0.440181 2.08494 0.673226 2.08494 0.916224C2.08494 1.15922 2.19446 1.39227 2.3894 1.56409C2.58433 1.73592 2.84872 1.83245 3.1244 1.83245H8.90379L0.30747 9.42795C0.210043 9.51312 0.132714 9.61445 0.0799418 9.7261C0.0271699 9.83776 0 9.95751 0 10.0785C0 10.1994 0.0271699 10.3192 0.0799418 10.4308C0.132714 10.5425 0.210043 10.6438 0.30747 10.729C0.404101 10.8149 0.519067 10.883 0.645734 10.9295C0.772402 10.9761 0.908265 11 1.04549 11C1.18271 11 1.31857 10.9761 1.44524 10.9295C1.57191 10.883 1.68687 10.8149 1.7835 10.729L10.4006 3.13349V8.24602C10.4006 8.48901 10.5101 8.72206 10.7051 8.89388C10.9 9.06571 11.1644 9.16224 11.4401 9.16224C11.7158 9.16224 11.9801 9.06571 12.1751 8.89388C12.37 8.72206 12.4795 8.48901 12.4795 8.24602V0.962035Z",fill:"#201E1E"})})},8483:function(e,t,n){"use strict";n.d(t,{m:function(){return LocationMarker}});var s=n(7437);let LocationMarker=e=>(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13",height:"19",viewBox:"0 0 13 19",fill:"none",children:(0,s.jsx)("path",{d:"M13 10.535C13 8.42881 12.9841 3.43262 12.7026 3.03871C12.1473 2.2509 10.5967 0.442141 9.84716 0.213032C9.63301 0.14872 7.69372 0 7.04332 0H4.4457C3.01007 0 0.721782 2.21472 0.281574 2.52824C0.281574 2.52824 0 2.8498 0 3.19547C0 3.19547 0 7.76158 0 10.5431C0 11.2143 0.432276 11.359 0.971629 12.175C2.67694 14.7514 6.17877 18.2443 6.54759 18.4614C6.54759 18.4614 7.17816 18.9839 7.4637 18.996C7.74924 19.008 7.84838 18.6624 8.01495 18.5136C8.45119 18.1318 10.0098 15.9733 11.3225 13.626C11.8539 12.6734 13 11.142 13 10.535ZM6.39292 9.49799C4.61623 9.49799 3.30354 8.12735 3.30354 6.28644C3.30354 4.18426 5.15955 3.02666 7.05918 3.02666C8.54637 3.02666 9.75198 4.81532 9.75198 6.49947C9.75198 8.46499 8.32428 9.49799 6.39292 9.49799Z",fill:e.color?e.color:"#201E1E"})})},4008:function(e,t,n){"use strict";n.d(t,{K:function(){return EventCard}});var s=n(7437),l=n(2265),i=n(1396),r=n.n(i),a=n(8483),o=n(6691),c=n.n(o),d={src:"/_next/static/media/flag.eac36695.png",height:74,width:48,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAAiklEQVR42hXNsW0CURBF0fvmz8qWLBk7sRNHphBqIYBCSAgoig4IyUFCxEgkLMx/iNPA0XG23nnsU0I36On+OKftX+ifHk0MgaO1UMpIMKgMiDaGx0rKyGEUuEpJk7AA0o872A7KPyTbmAwLvTUI4rXt8+9rDhxU9Y1ZpSa5rMv14FMfgE37/3h/AidNPLkulFhrAAAAAElFTkSuQmCC",blurWidth:5,blurHeight:8},m=n(9482);function EventCard(e){let{event:t,aspectRatio:n}=e,{language:i}=(0,m.Z)(),[o,x]=(0,l.useState)(0);return(0,l.useEffect)(()=>{"en"===i?x(0):x(1)},[i]),(0,s.jsx)(r(),{href:"Liverpool Forr\xf3 Festival 2024"===t.name[0]?"/lff2024":"/events?id=".concat(t.id),passHref:!0,children:(0,s.jsxs)("div",{className:"relative ".concat("Liverpool Forr\xf3 Festival 2024"===t.name[0]?"aspect-square md:".concat(n||"aspect-square"," text-white"):"aspect-300/168 md:aspect-300/168 text-black"," bg-cover rounded-xl font-changa w-full mb-4 shadow-custom"),style:{backgroundImage:"url(".concat(t.image[0],")"),backgroundPosition:"bottom",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:["Liverpool Forr\xf3 Festival 2024"===t.name[0]&&(0,s.jsx)("div",{className:"absolute right-5 top-0",children:(0,s.jsx)(c(),{src:d,alt:"illustration",className:"w-8 md:w-8 lg:w-10 xl:w-12",width:24,height:1})}),(0,s.jsx)("div",{className:"text-[1.25rem] md:text-[1.5rem] leading-[1.625rem] font-extrabold md:leading-8 pt-4 pl-4 pr-[9rem] md:pr-[8rem]",children:t.name[o]}),(0,s.jsx)("div",{className:"bg-white uppercase text-black ml-4 mt-4 w-max pl-4 pr-4 rounded-2xl text-[1rem] md:text-[1.25rem] font-extrabold pt-0 pb-0 leading-4 md:leading-5 tracking-[0.05rem]",children:t.date[o]}),t.location&&"Liverpool Forr\xf3 Festival 2024"!==t.name[0]&&(0,s.jsxs)("div",{className:"flex ml-4 pt-4",children:[(0,s.jsx)(a.m,{}),(0,s.jsx)("div",{className:"uppercase leading-4 md:leading-5 pl-2 font-extrabold text-[1rem] md:text-[1.25rem]",children:t.location[0]})]})]})})}},7474:function(e,t,n){"use strict";n.d(t,{B:function(){return Faq},H:function(){return FaqQuestion}});var s=n(7437),l=n(2759),i=n(504);let SpeechBubbles=()=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[(0,s.jsxs)("g",{clipPath:"url(#clip0_363_644)",children:[(0,s.jsx)("path",{d:"M17 4V11C17 11.5304 16.7893 12.0391 16.4142 12.4142C16.0391 12.7893 15.5304 13 15 13H4V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H16L20 20V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H17ZM6 10H0V16L6 10Z",fill:"#EAEAEA"}),(0,s.jsx)("path",{d:"M14 0H2C0.89543 0 0 0.89543 0 2V10C0 11.1046 0.89543 12 2 12H14C15.1046 12 16 11.1046 16 10V2C16 0.89543 15.1046 0 14 0Z",fill:"#EAEAEA"})]}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"clip0_363_644",children:(0,s.jsx)("rect",{width:"20",height:"20",fill:"white"})})})]});var r=n(2957),a=n.n(r),o=n(2265),c=n(9459),d=n(9482),m=n(3665);function Faq(e){let{isFestival:t}=e,[n,l]=(0,o.useState)(null),{language:i}=(0,d.Z)(),[r,x]=(0,o.useState)("");(0,o.useEffect)(()=>{"en"===i?x("api/v1/questions"):x("api/v1/question_translations")},[i]),(0,o.useEffect)(()=>{r&&(0,c.a)(r,l)},[r]);let[h,p]=(0,o.useState)(n);return(0,o.useEffect)(()=>{n&&p(null==n?void 0:n.filter(e=>e.is_festival===t))},[n,t]),(0,s.jsxs)("div",{className:"pt-20 pb-20 font-changa px-4 md:px-[8rem] xl:px-[23rem] md:pb-40 text-white ".concat(a().blackBg),id:"faq",children:[(0,s.jsx)("div",{className:"pb-12 font-extrabold pt-20 text-left",children:(0,s.jsx)(m.H1,{color:"white",text:"FAQ"})}),h&&h.map((e,t)=>(0,s.jsx)(FaqQuestion,{question:e.question,answer:e.answer},t))]})}function FaqQuestion(e){let{question:t,answer:n}=e,[r,a]=(0,o.useState)(!1);return(0,s.jsx)("div",{className:"pt-4",children:(0,s.jsxs)("div",{className:"border-b-2 pb-4 border-b-gray-100",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:function(){a(!r)},children:[(0,s.jsxs)("div",{className:"flex justify-left w-10/12 items-center",children:[(0,s.jsx)("div",{children:(0,s.jsx)(SpeechBubbles,{})}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"pl-4 text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-8 font-extrabold",children:t})})]}),(0,s.jsx)(i.G,{icon:r?l.ptq:l.A35,className:"text-xl"})]}),r&&(0,s.jsx)("div",{className:"pt-4 flex",children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-[1rem] leading-6 md:text-[1.25rem] md:leading-7 font-semibold font-sans",dangerouslySetInnerHTML:(e=>{let t=e.replace("Forr\xf3 Liverpool.",'<a style="text-decoration: underline; display: inline-flex; align-items: center;" href="https://open.spotify.com/playlist/6Luuh8cKFXtEY8t2MIL2P4?si=EEAc2-uQQaarFD1_m5MsjA&pi=e-qxmnaQS7QNSJ&nd=1&dlsi=6f2d3024fc934803" target="_blank">\n          <span style="margin-right: 4px;">Forr\xf3 Liverpool</span>\n          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style="vertical-align: middle;">\n            <rect width="256" height="256" fill="none"></rect>\n            <line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>\n            <polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>\n          </svg>\n        </a>').replace(/thetrainline\.com/g,'<a style="text-decoration: underline; display: inline-flex; align-items: center;" href="http://trainline.com/" target="_blank">trainline.com<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style="vertical-align: middle;"><rect width="256" height="256" fill="none"></rect><line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></a>').replace(/nationalexpress\.co\.uk/g,'<a style="text-decoration: underline; display: inline-flex; align-items: center;" href="https://www.nationalexpress.com/en" target="_blank">nationalexpress.co.uk<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style="vertical-align: middle;"><rect width="256" height="256" fill="none"></rect><line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></a>').replace(/hello@forroliverpool\.co\.uk/g,'<a style="text-decoration: underline; display: inline-flex; align-items: center;" href="mailto:hello@forroliverpool.co.uk">hello@forroliverpool.co.uk<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style="vertical-align: middle;"><rect width="256" height="256" fill="none"></rect><line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></a>').replace(/@forro\.liverpool/g,'<a style="text-decoration: underline; display: inline-flex; align-items: center;" href="https://www.instagram.com/forroliverpool/" target="_blank">@forro.liverpool<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" style="vertical-align: middle;"><rect width="256" height="256" fill="none"></rect><line x1="64" y1="192" x2="192" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="88 64 192 64 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg></a>');return{__html:t}})(n)})})})]})})}},6076:function(e,t,n){"use strict";n.d(t,{Y:function(){return FrameImportant}});var s=n(7437),l=n(1396),i=n.n(l),r=n(2265),a=n(8206),o=n.n(a);function FrameImportant(e){return(0,s.jsx)("div",{className:"w-full h-12 bg-pink-400 items-center ".concat(o().frameShadow),children:(0,s.jsx)(i(),{href:"/lff2024",className:"no-underline hover:opacity-60 transition-opacity items-center",children:e.site&&(0,s.jsx)(function(e){let{speed:t,direction:n,children:l}=e,[i,a]=(0,r.useState)(1),c=(0,r.useRef)(null),d=(0,r.useRef)(null),m=(0,r.useCallback)(()=>{if(!(null==d?void 0:d.current)||!(null==c?void 0:c.current))return;let{width:e}=d.current.getBoundingClientRect(),{width:t}=c.current.getBoundingClientRect(),n=e/d.current.children.length;n&&a(i+Math.ceil((t-e)/n)+1),(null==d?void 0:d.current)&&(d.current.setAttribute("data-animate","false"),setTimeout(()=>{(null==d?void 0:d.current)&&d.current.setAttribute("data-animate","true")},10))},[i]);return(0,r.useEffect)(()=>m(),[m]),(0,r.useEffect)(()=>(window.addEventListener("resize",m),()=>{window.removeEventListener("resize",m)}),[i,m]),(0,s.jsx)("div",{className:o().looper,ref:c,children:(0,s.jsx)("div",{className:o().looper__innerList,ref:d,"data-animate":"true",children:[...Array(i)].map((e,i)=>(0,s.jsx)("div",{className:o().looper__listInstance,style:{animationDuration:"".concat(t,"s"),animationDirection:"right"===n?"reverse":"normal"},children:l},i))})})},{speed:10,direction:"left",children:(0,s.jsx)("div",{className:"uppercase pt-3 text-base tracking-[0.053rem] font-changa font-bold items-center ".concat(o().textShadow),children:"".concat(e.site[0].frame)})})})})}},8682:function(e,t,n){"use strict";n.d(t,{w:function(){return GDPR}});var s=n(7437),l=n(6577),i=n(2957),r=n.n(i),a=n(9482);function GDPR(e){let{language:t}=(0,a.Z)();return(0,s.jsx)("div",{className:"w-full shadow-custom md:w-[50%] md:p-10 md:flex md:justify-center z-[64] md:bottom-[25%] md:left-[25%] bottom-0 fixed pointer-events-auto opacity-100 ".concat(r().begeBg),children:(0,s.jsxs)("div",{className:"pb-12",children:[(0,s.jsx)("div",{className:"pl-8 pt-12 pr-8",children:"en"===t?(0,s.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"We use cookies to provide necessary site functionality and improve your experience. By browsing our website, you consent to our use of cookies."}):(0,s.jsx)("p",{className:"pt-0 pb-7 text-black text-[1rem] md:text-[1.25rem] leading-5 md:leading-6 font-sans font-normal",children:"Usamos cookies para fornecer as funcionalidades necess\xe1rias do site e melhorar sua experi\xeancia. Ao navegar no nosso site, voc\xea concorda com o uso de cookies."})}),(0,s.jsx)("div",{className:"mx-4 h-max",children:(0,s.jsx)("div",{onClick:()=>e.setShowGDPR((0,l.My)()),className:"flex justify-center bg-black no-underline cursor-pointer text-changa",children:(0,s.jsx)("p",{className:"text-white text-center text-[1rem] leading-5 uppercase font-extrabold w-full p-5",children:"en"===t?"Accept":"Aceitar"})})})]})})}},8206:function(e){e.exports={looper:"FrameImportant_looper__bkNKt",looper__innerList:"FrameImportant_looper__innerList__Eivso",looper__listInstance:"FrameImportant_looper__listInstance__NQwfO",slideAnimation:"FrameImportant_slideAnimation__WQdrt",frameShadow:"FrameImportant_frameShadow__0aJuf",textShadow:"FrameImportant_textShadow__4fh6y"}}},function(e){e.O(0,[676,176,504,98,492,971,472,744],function(){return e(e.s=3405)}),_N_E=e.O()}]);