import{r as x,j as e,a6 as o,aw as j,aC as m,P as p,aX as u,aY as v,aH as b,aB as d,aD as w,ad as N,au as B,a7 as S}from"./vendor-790e91e5.js";import{B as c}from"./button-d8124f17.js";import{D as k,a as A,b as I,c as y,d as D,g as C,f as W,S as R,r as L,I as i,q as P}from"./drawline-861961f1.js";import"./index-c96cb0ea.js";const E=[{icon:e.jsx(m,{className:"mt-1",color:"#09090B",width:"20",height:"20"}),title:"Super Admin",desc:"Can access billing and members"},{icon:e.jsx(p,{className:"mt-1",color:"#09090B",width:"20",height:"20"}),title:"Remove",desc:"Turn off all notifications"},{icon:e.jsx(m,{className:"mt-1",color:"#09090B",width:"20",height:"20"}),title:"Super Admin",desc:"Can access billing and members"},{icon:e.jsx(p,{className:"mt-1",color:"#09090B",width:"20",height:"20"}),title:"Remove",desc:"Turn off all notifications"}];function F(){const h=[e.jsx(i.ErpAppIcon,{}),e.jsx(i.PosAppIcon,{}),e.jsx(i.RewardfulAppIcon,{}),e.jsx(i.UntitledAppIcon,{}),e.jsx(i.ReduceAppIcon,{}),e.jsx(i.InbioAppIcon,{}),e.jsx(i.BlogAndPagesAppIcon,{}),e.jsx(i.LineCRMApp,{}),e.jsx(i.SidebarApp09,{}),e.jsx(i.SidebarApp10,{})],[l,s]=x.useState(0);var a={};return x.useEffect(()=>{l>0&&(a=P[l])},[l]),e.jsxs(k,{children:[h.map((n,r)=>e.jsx("div",{className:"nav-btns add-ons",children:e.jsx(A,{onClick:()=>s(r),children:n})})),e.jsx(I,{className:"p-0 border-0 max-w-4xl",children:e.jsxs(y,{className:"flex-row",children:[e.jsxs(D,{className:"relative",children:[e.jsx("img",{src:a.image,className:"rounded-l-lg h-full w-[800px]"}),e.jsxs("div",{className:"absolute left-5 bottom-5 flex gap-x-2 items-center",children:[e.jsx(c,{variant:"link",className:"text-white text-xs p-0 h-fit",children:"Privacy Policy"}),e.jsx(C,{color:"#FFF",width:"1px",height:"14px"}),e.jsx(c,{variant:"link",className:"text-white text-xs p-0 h-fit",children:"Contact us"})]})]}),e.jsx(W,{className:"px-10 pt-6 pb-10 shadow-lg",children:e.jsxs("div",{className:"flex flex-col justify-between h-full",children:[e.jsxs("section",{children:[e.jsx(R,{text:a.require_pro_text}),e.jsx("h1",{className:"main-heading tracking-[-0.6px] mt-3 mb-2",children:a.title}),e.jsx("p",{children:a.desc}),e.jsx("ul",{className:"mt-6 gap-y-[17px] flex flex-col px-2",children:E.map((n,r)=>e.jsx(L,{icon:n.icon,title:n.title,desc:n.desc},r))})]}),e.jsxs("section",{children:[e.jsx(o,{to:"/payment",children:e.jsxs(c,{className:"btn-with-icon w-full mt-10 mb-[7px]",children:[e.jsx(j,{}),"Upgrade to Pro"]})}),e.jsxs("p",{className:"main-desc",children:["See all features in ",e.jsx(o,{className:"text-[#006AFF]",to:`/integration/appstore/${a.link}`,children:"App store Detail"})]})]})]})})]})})]})}function H({isSidebarOpen:h,setIsSidebarOpen:l}){const[s,a]=x.useState(""),n=u(),r=[{name:"Dashboard",icon:e.jsx(d,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),href:"/dashboard/app",current:s==="/dashboard/app",id:"dashboard"},{name:"Notifications",icon:e.jsx(m,{viewBox:"0 0 15 15",strokeWidth:"1.5",color:"#18181B"}),href:"/dashboard/notification",current:s==="/integration"||s==="/integration/connected",id:"integration"},{name:"Search",icon:e.jsx(w,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),href:"/gifts-privileges",current:s==="/gifts-privileges"||s==="/gifts-privileges/premium"||s==="/gifts-privileges/free",active:s,id:"gift"},{name:"Settings",icon:e.jsx(N,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),href:"/dashboard/settings/account",current:s=="/dashboard/settings/account"||s=="/dashboard/settings/billing-plans"||s=="/dashboard/settings/notifications",active:s,id:"settings"}],f=[{name:"Blog & Website",icon:e.jsx(d,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),id:"blog-website",href:""},{name:"CRM",icon:e.jsx(d,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),id:"crm",href:""},{name:"HR & HRM",icon:e.jsx(d,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),id:"hr-hrm",href:""}];x.useEffect(()=>{a(n.pathname)});const g=()=>e.jsxs("nav",{className:"nav-left-side",children:[e.jsx("div",{className:"nav-btns",id:"home-btn",onClick:()=>l(!0),children:e.jsx(B,{color:"#18181B",viewBox:"0 0 24 24",width:"16",height:"16"})}),e.jsx("div",{className:"nav-btns add-ons",children:e.jsx(o,{to:"/",children:e.jsx(i.ZaviagoAppIcon,{})})}),e.jsx(F,{}),e.jsx("div",{className:"nav-btns add",children:e.jsx(S,{color:"#18181B",viewBox:"0 0 24 24",width:"16",height:"16"})})]});return e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("div",{className:`flex flex-1 flex-col border-r border-gray-200 bg-white ${h?"active":"inactive"}`,id:"sidebar",children:e.jsxs("div",{className:"flex flex-1 flex-col pt-3",children:[e.jsx("div",{className:"flex flex-shrink-0 items-center px-3",children:e.jsx("div",{className:"flex gap-x-2 items-center w-full",children:e.jsx(c,{className:"listminus-btn",variant:"secondary",onClick:()=>l(!1),children:e.jsx(v,{viewBox:"0 0 24 24",width:"16",height:"16"})})})}),e.jsxs("nav",{className:"flex bg-white px-3 pt-2 flex-col gap-y-4","aria-label":"Sidebar",children:[e.jsx("section",{className:"flex flex-col",children:r.map(t=>e.jsx(o,{to:t.href,children:e.jsxs(c,{variant:"ghost",className:`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${t.href===s?"bg-zinc-100":""}`,children:[t.icon,t.name]})}))}),e.jsxs("section",{className:"flex flex-col",children:[e.jsx("h3",{className:"text-[#797979] text-sm font-semibold p-4",children:"WorkSpace App"}),e.jsxs(c,{variant:"ghost",className:"w-full flex justify-start gap-x-2 text-[13px] items-center leading-5",children:[e.jsx(b,{viewBox:"0 0 24 24",width:"16",height:"16",strokeWidth:"1.5",color:"#18181B"}),"Commerce"]}),f.map(t=>e.jsx(o,{to:t.href,children:e.jsxs(c,{variant:"ghost",className:`w-full flex justify-start gap-x-2 text-[13px] items-center leading-5 ${t.href===s?"bg-zinc-100":""}`,children:[t.icon,t.name]})}))]})]})]})})]})}function z(){return e.jsx("section",{className:"h-screen w-screen",children:e.jsx(H,{setIsSidebarOpen:!0,isSidebarOpen:!0})})}export{z as default};
//# sourceMappingURL=test-ee9f5527.js.map