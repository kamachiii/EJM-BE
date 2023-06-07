import{j as o,I as s,a as e,R as x,u as j,L as X,T as S,F as M,b as $,c as R,r as z,B as d,C as k,D as J,d as q,e as e1,f as G,l as t1,m as o1,g as r1,h as O,i as n1,k as i1,O as a1,n as s1,s as l1,A as c1}from"./index.0e24cb86.js";import{S as K}from"./SettingsIcon.f0f81046.js";import{B as d1,I as m}from"./index.esm.726820fc.js";import{C as U,S as h1,F as u1,M as p1,a as T,b as C1,c as H,d as V,D as m1,e as g1}from"./index.esm.3048a115.js";import{U as f1}from"./UserIcon.accdbe28.js";import{K as b1}from"./KeyIcon.5273f942.js";import{A as F,u as E}from"./useSelector.000aa598.js";import{Q as L1}from"./QuestionIcon.6ba3c6f0.js";import{E as k1}from"./ExpandLeftIcon.708a001b.js";import{u as B}from"./useTranslation.d6d641af.js";import{o as x1,c as Y}from"./uiActions.408d82e2.js";import{C as S1}from"./ConfirmDelete.262b9563.js";import{u as M1,E as I1}from"./useError.ed61bdd7.js";import{D as y1}from"./DownloadIcon.5b101119.js";import{M as W1,a as v1,b as w1,c as D1,d as Z}from"./index.esm.9fed1f3b.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.5105dba6.js";import"./slicedToArray.49cdadd5.js";import"./index.esm.25501534.js";const _1=()=>o(s,{children:[e("circle",{cx:"12",cy:"12",r:"3",strokeWidth:"2",fill:"currentColor"}),e("path",{d:"M12 5V3",strokeWidth:"2",strokeLinecap:"round",stroke:"currentColor"}),e("path",{d:"M12 21V19",strokeWidth:"2",strokeLinecap:"round",stroke:"currentColor"}),e("path",{d:"M16.9497 7.05026L18.364 5.63605",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M5.63602 18.364L7.05023 16.9498",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M19 12L21 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M3 12L5 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M16.9497 16.9497L18.364 18.364",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M5.63602 5.63602L7.05023 7.05023",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),A1=()=>e(s,{children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4Z",fill:"currentColor"})}),z1=({shrink:t=!1,label:n,route:l,icon:i,active:a=!1})=>{const{colorMode:h}=j();return o(d1,{as:X,borderLeftWidth:4,display:"flex",justifyContent:t?"flex-start":"center",gap:3,to:l,width:t?g:75,colorScheme:"grey",borderRadius:0,_hover:{backgroundColor:"whiteAlpha.300"},borderLeftColor:a?`brand.${h}`:"transparent",backgroundColor:"transparent",children:[x.cloneElement(x.createElement(i),{color:a?`brand.${h}`:"grey",fontSize:23}),e(U,{in:t,animateOpacity:!0,children:e(S,{fontSize:15,color:a?`brand.${h}`:"grey",fontWeight:a?"semibold":"normal",children:n})})]})},j1=x.memo(z1),P=({label:t="",isSidebarOpen:n=!1})=>e(M,{direction:"column",marginY:3,display:n?"block":"none",children:e(U,{in:n,children:e(S,{paddingLeft:Q,display:n?"block":"none",sx:{textTransform:"uppercase"},color:"bg.gray",fontWeight:"semibold",transition:D,fontSize:11,children:t})})}),R1=({children:t})=>e(M,{direction:"column",children:t}),E1=({...t})=>o(s,{...t,children:[e("rect",{x:"4",y:"4",width:"6",height:"6",rx:"1",fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e("rect",{x:"4",y:"14",width:"6",height:"6",rx:"1",fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e("rect",{x:"14",y:"14",width:"6",height:"6",rx:"1",fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),e("rect",{x:"14",y:"4",width:"6",height:"6",rx:"1",fill:"transparent",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"})]}),B1=({...t})=>e(s,{...t,children:e("path",{d:"M12 21V13M12 21L5.83752 16.5982C5.42695 16.305 5.22166 16.1583 5.11083 15.943C5 15.7276 5 15.4753 5 14.9708V8M12 21L18.1625 16.5982C18.573 16.305 18.7783 16.1583 18.8892 15.943C19 15.7276 19 15.4753 19 14.9708V8M12 13L5 8M12 13L19 8M5 8L10.8375 3.83034C11.3989 3.42938 11.6795 3.2289 12 3.2289C12.3205 3.2289 12.6011 3.42938 13.1625 3.83034L19 8",stroke:"currentColor",fill:"none",strokeWidth:"2",strokeLinejoin:"round"})}),O1=({...t})=>o(s,{...t,children:[e("path",{d:"M9 15L9 18C9 18.9428 9 19.4142 8.70711 19.7071C8.41421 20 7.94281 20 7 20L6 20C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18L4 17C4 16.0572 4 15.5858 4.29289 15.2929C4.58579 15 5.05719 15 6 15L9 15Z",stroke:"currentColor",fill:"none",strokeWidth:"2"}),e("path",{d:"M15 9L15 6C15 5.05719 15 4.58579 15.2929 4.29289C15.5858 4 16.0572 4 17 4L18 4C18.9428 4 19.4142 4 19.7071 4.29289C20 4.58579 20 5.05719 20 6L20 7C20 7.94281 20 8.41421 19.7071 8.70711C19.4142 9 18.9428 9 18 9L15 9Z",stroke:"currentColor",fill:"none",strokeWidth:"2"}),e("path",{d:"M15 9L9 15",stroke:"currentColor",strokeWidth:"2"})]}),T1=({...t})=>o(s,{...t,children:[e("rect",{x:"18",y:"9",width:"4",height:"4",rx:"2",transform:"rotate(90 18 9)",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),e("rect",{x:"18",y:"17",width:"4",height:"4",rx:"2",transform:"rotate(90 18 17)",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),e("rect",{x:"3",y:"7",width:"4",height:"4",rx:"2",transform:"rotate(-90 3 7)",fill:"transparent",stroke:"currentColor",strokeWidth:"2"}),e("path",{d:"M5 6V15C5 16.8856 5 17.8284 5.58579 18.4142C6.17157 19 7.11438 19 9 19H14",stroke:"currentColor",fill:"transparent",strokeWidth:"2"}),e("path",{d:"M5 7V7C5 8.88562 5 9.82843 5.58579 10.4142C6.17157 11 7.11438 11 9 11H14",stroke:"currentColor",fill:"transparent",strokeWidth:"2"})]}),H1=({...t})=>o(s,{...t,children:[e("ellipse",{cx:"12",cy:"7",rx:"7",ry:"3",stroke:"currentColor",fill:"none",strokeWidth:"2"}),e("path",{d:"M5 13C5 13 5 15.3431 5 17C5 18.6569 8.13401 20 12 20C15.866 20 19 18.6569 19 17C19 16.173 19 13 19 13",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"square"}),e("path",{d:"M5 7C5 7 5 10.3431 5 12C5 13.6569 8.13401 15 12 15C15.866 15 19 13.6569 19 12C19 11.173 19 7 19 7",stroke:"currentColor",fill:"none",strokeWidth:"2"})]}),V1=({...t})=>o(s,{...t,children:[e("path",{d:"M11.1056 3.44721L5.78885 6.10557C5.00831 6.49585 4.61803 6.69098 4.61803 7C4.61803 7.30902 5.00831 7.50415 5.78885 7.89443L11.1056 10.5528C11.5445 10.7722 11.7639 10.882 12 10.882C12.2361 10.882 12.4555 10.7722 12.8944 10.5528L18.2111 7.89443C18.9917 7.50415 19.382 7.30902 19.382 7C19.382 6.69098 18.9917 6.49585 18.2111 6.10557L12.8944 3.44721C12.4555 3.22776 12.2361 3.11803 12 3.11803C11.7639 3.11803 11.5445 3.22776 11.1056 3.44721Z",fill:"currentColor"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02204 10.4893C7.62591 10.8135 8.33704 11.169 9.15542 11.5782L10.2111 12.1061C11.089 12.545 11.5279 12.7644 12 12.7644C12.4721 12.7644 12.911 12.545 13.7889 12.1061L14.8446 11.5782C15.663 11.169 16.3741 10.8135 16.978 10.4893L18.2112 11.1059C18.9917 11.4961 19.382 11.6913 19.382 12.0003C19.382 12.3093 18.9917 12.5044 18.2112 12.8947L12.8944 15.5531C12.4555 15.7725 12.2361 15.8822 12 15.8822C11.7639 15.8822 11.5445 15.7725 11.1056 15.5531L11.1056 15.5531L5.78886 12.8947C5.00832 12.5044 4.61804 12.3093 4.61804 12.0003C4.61804 11.6913 5.00832 11.4961 5.78886 11.1059L7.02204 10.4893Z",fill:"currentColor"}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02157 15.4893C7.62555 15.8135 8.33684 16.1692 9.15544 16.5785L10.2112 17.1063C11.089 17.5452 11.5279 17.7647 12 17.7647C12.4722 17.7647 12.9111 17.5452 13.7889 17.1063L14.8446 16.5785C15.6632 16.1692 16.3745 15.8135 16.9785 15.4893L18.2112 16.1056C18.9917 16.4959 19.382 16.691 19.382 17C19.382 17.3091 18.9917 17.5042 18.2112 17.8945L12.8944 20.5528C12.4555 20.7723 12.2361 20.882 12 20.882C11.7639 20.882 11.5445 20.7723 11.1056 20.5528L11.1056 20.5528L5.78886 17.8945C5.00832 17.5042 4.61804 17.3091 4.61804 17C4.61804 16.691 5.00832 16.4959 5.78886 16.1056L7.02157 15.4893Z",fill:"currentColor"})]}),F1=[{label:"",path:"/",routes:[{path:"/overview",label:"menus.overview",icon:E1},{path:"/dashboard",label:"menus.dashboard",icon:O1}]},{label:"Activity",path:"/activity",routes:[{path:"/activity/projects",label:"menus.projects",icon:T1},{path:"/activity/assigned-tasks",label:"menus.assigned",icon:F}]},{label:"Management",path:"/management",routes:[{path:"/management/users",label:"menus.user",icon:f1},{path:"/management/roles",label:"menus.role",icon:b1},{path:"/management/settings",label:"menus.settings",icon:K}]},{label:"data master",path:"/master",routes:[{path:"/master/companies",label:"menus.companies",icon:H1},{path:"/master/setup-questions",label:"menus.setup_questions",icon:L1},{path:"/master/storage-facilities",label:"menus.ordner",icon:B1}]},{label:"Report",path:"/report",routes:[{path:"/report/questionaire",label:"menus.answered",icon:V1}]},{label:"audit",routes:[{path:"/audit/logs",label:"menus.audit",icon:F}]}],Z1=({...t})=>e(s,{...t,children:e("path",{d:"M8 9L12 5L16 9M16 15L12 19L8 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),g=280,w=75,D="0.3s",P1=3,Q=3,N1=2,$1=2,q1=({open:t,onHover:n,onLeave:l,setClose:i})=>{const{colorMode:a}=j(),{t:h}=B(["sidebar"]),{pathname:f}=$(),b=R(),{profile_pict:p,full_name:C,role:c}=E(r=>r.session),I=z.exports.useMemo(()=>f,[f]),y=()=>b("/profile"),W=z.exports.useCallback(r=>c.id===1?!0:!!(c.object_menus&&c.object_menus.length>0&&c.object_menus.find(u=>r.path!=="/"&&u.state===1&&u.type==="menu"&&u.path===r.path)),[c.id]);return o(d,{borderWidth:"1.5px",onMouseEnter:n,onMouseLeave:l,bg:`sidebar.${a}`,zIndex:999,borderLeft:0,borderBottom:0,borderTop:0,maxWidth:{base:t?g:0,md:t?g:w},width:{base:t?g:"0px",md:t?g:w},left:{base:t?0:-100,md:0},position:"fixed",transition:D,top:0,height:"100%",children:[o(d,{height:{base:"54px",md:"64px",xl:"64px"},children:[o(k,{width:"100%",height:"100%",flexDirection:"column",gap:2,children:[e("img",{src:"/images/logo.png",alt:"TKD",width:50}),t&&e(h1,{in:t,children:e(S,{fontWeight:"semibold",fontSize:13,children:"Assesment & Monitoring"})})]}),t&&e(m,{position:"absolute",top:"50%",right:-16,padding:1,zIndex:999,background:"brand.light",borderRadius:50,display:{base:"block",md:"none"},icon:e(k1,{color:"white"}),"aria-label":"Buka Sidebar",onClick:i,variant:"unstyled",fontSize:"20px"}),e(J,{})]}),o(d,{overflowY:"auto",height:"inherit",paddingBottom:20,children:[e(d,{transition:D,paddingY:t?P1:$1,paddingX:t?Q:N1,children:o(d,{w:"100%",borderWidth:1,p:2,_hover:{cursor:"pointer"},onClick:()=>y(),borderRadius:t?4:50,display:"flex",gap:3,children:[e("img",{src:p?`/api/v1/profiles/${p}`:"/images/default-image.jpg",alt:C,width:50,style:{borderRadius:t?4:50,objectFit:"cover"},height:"auto"}),e(u1,{in:t,style:{flex:1},children:o(M,{alignItems:"center",h:"100%",justifyContent:"space-between",children:[o(M,{flexDirection:"column",justifyContent:"space-between",children:[e(S,{fontWeight:"semibold",fontSize:14,noOfLines:1,children:C}),e(S,{fontWeight:"light",fontSize:12,children:c.name})]}),e(Z1,{fontSize:18})]})})]})}),F1.map(r=>{var u,_;return o(z.exports.Fragment,{children:[r.path!=="/"?W(r)?e(P,{label:(u=r.label)!=null?u:"-",isSidebarOpen:t}):null:e(P,{label:(_=r.label)!=null?_:"-",isSidebarOpen:t}),e(R1,{children:r.routes.map((L,A)=>W(L)?e(j1,{shrink:t,active:I===L.path,route:L.path,icon:L.icon,label:h(L.label)},A):null)})]},r.label)})]})]})},G1=x.memo(q1),K1=({...t})=>o(s,{...t,children:[e("path",{d:"M5 7H19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M5 12H15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),e("path",{d:"M5 17H11",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),U1=({...t})=>o(s,{...t,children:[e("path",{fill:"currentColor",d:"M.7.7C.3 1 0 5.3 0 10.1 0 19.4.3 20 5.5 20c1.5 0 2.6.7 3 2 .6 1.9 1.4 2.1 7.8 1.8l7.2-.3.3-8.9c.3-10.2.1-10.6-7-10.6-3.8 0-4.8-.4-5.3-2S10 0 6.1 0C3.5 0 1 .3.7.7zM10 4c.4 1.4 1 5.1 1.3 8.2L12 18H1v-7.8c0-4.3.3-8.2.7-8.6.4-.4 2.3-.6 4.2-.4C8.6 1.4 9.5 2 10 4zm12.8 10.2-.3 8.3-5.8.3c-5.9.3-5.9.3-4.4-1.9.9-1.2 1.4-2.6 1.2-3.3-.2-.6-.6-3.5-1-6.4L11.9 6h11.2l-.3 8.2z"}),e("path",{fill:"currentColor",d:"M4.6 7.2c-.7 2.7-.7 6.8.1 5 .6-1.5 3.3-1.6 3.3 0 0 .6.3.9.6.6.3-.3.2-2.2-.1-4.2-.8-4-2.9-4.8-3.9-1.4zM17 10c0 .5-.7 1-1.6 1-1.3 0-1.4.3-.4 1.5.7.8 1 2.1.7 2.9-.4.9.2 1.4 1.8 1.3 1.6 0 2.2-.4 1.8-1.3-.3-.8 0-2 .5-2.7.8-.9.6-1.6-.9-2.5-1.1-.7-1.9-.8-1.9-.2zm2 2.4c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4z"})]}),Y1=({...t})=>o(s,{...t,children:[e("path",{d:"M2 12L1.21913 11.3753L0.719375 12L1.21913 12.6247L2 12ZM11 13C11.5523 13 12 12.5523 12 12C12 11.4477 11.5523 11 11 11V13ZM5.21913 6.3753L1.21913 11.3753L2.78087 12.6247L6.78087 7.6247L5.21913 6.3753ZM1.21913 12.6247L5.21913 17.6247L6.78087 16.3753L2.78087 11.3753L1.21913 12.6247ZM2 13H11V11H2V13Z",fill:"currentColor"}),e("path",{d:"M10 8.13193V7.38851C10 5.77017 10 4.961 10.474 4.4015C10.9479 3.84201 11.7461 3.70899 13.3424 3.44293L15.0136 3.1644C18.2567 2.62388 19.8782 2.35363 20.9391 3.25232C22 4.15102 22 5.79493 22 9.08276V14.9172C22 18.2051 22 19.849 20.9391 20.7477C19.8782 21.6464 18.2567 21.3761 15.0136 20.8356L13.3424 20.5571C11.7461 20.291 10.9479 20.158 10.474 19.5985C10 19.039 10 18.2298 10 16.6115V16.066",stroke:"currentColor",fill:"none",strokeWidth:"2"})]}),Q1=({...t})=>o(s,{...t,children:[e("path",{fill:"currentColor",d:"M6.44784 7.96942C6.76219 5.14032 9.15349 3 12 3V3C14.8465 3 17.2378 5.14032 17.5522 7.96942L17.804 10.2356C17.8072 10.2645 17.8088 10.279 17.8104 10.2933C17.9394 11.4169 18.3051 12.5005 18.8836 13.4725C18.8909 13.4849 18.8984 13.4973 18.9133 13.5222L19.4914 14.4856C20.0159 15.3599 20.2782 15.797 20.2216 16.1559C20.1839 16.3946 20.061 16.6117 19.8757 16.7668C19.5971 17 19.0873 17 18.0678 17H5.93223C4.91268 17 4.40291 17 4.12434 16.7668C3.93897 16.6117 3.81609 16.3946 3.77841 16.1559C3.72179 15.797 3.98407 15.3599 4.50862 14.4856L5.08665 13.5222C5.10161 13.4973 5.10909 13.4849 5.11644 13.4725C5.69488 12.5005 6.06064 11.4169 6.18959 10.2933C6.19123 10.279 6.19283 10.2645 6.19604 10.2356L6.44784 7.96942Z",strokeWidth:"2"}),e("path",{fill:"currentColor",d:"M9.10222 17.6647C9.27315 18.6215 9.64978 19.467 10.1737 20.0701C10.6976 20.6731 11.3396 21 12 21C12.6604 21 13.3024 20.6731 13.8263 20.0701C14.3502 19.467 14.7269 18.6215 14.8978 17.6647",strokeWidth:"2",strokeLinecap:"round"})]}),X1=({open:t,setSidebarOpen:n})=>{const{colorMode:l,toggleColorMode:i}=j(),a=R(),{t:h,i18n:f}=B(["gantibahasa"]),b=q(),p=e1(),C=M1(t1),c=r=>{f.changeLanguage(r!=null?r:"en")},I=()=>{b(x1(e(S1,{isLoading:C.isLoading,onDelete:()=>{localStorage.removeItem("_TuVbwpW"),localStorage.removeItem("_RuvTpQv"),C.mutate(null,{onSuccess:r=>{a("/auth/login"),p({status:"success",description:r.message,position:"top",title:"Success",isClosable:!0}),b(Y())},onError:r=>I1(r,p)})}}),"Apakah kamu ingin logout ?"))},y=()=>a("/management/settings"),W=()=>a("/download-status");return e(d,{zIndex:999,width:"auto",left:{base:0,md:t?g:w},sx:{transition:D,position:"fixed",right:"0px",top:"0px"},children:e(d,{height:{base:"54px",md:"64px",xl:"64px"},borderWidth:"1.5px",bg:`sidebar.${l}`,borderLeft:0,borderRight:0,borderTop:0,overflow:"hidden",children:e(G,{maxWidth:{base:"full","2xl":2e3},children:o(M,{gap:3,justifyContent:"space-between",alignItems:"center",height:{base:"54px",md:"64px",xl:"64px"},children:[e(m,{variant:"unstyled",onClick:n,colorScheme:"teal","aria-label":"Toggle Sidebar",fontSize:"20px",icon:e(K1,{})}),o(M,{gap:3,alignItems:"center",children:[e(k,{children:e(m,{variant:"unstyled",colorScheme:"teal","aria-label":"Export",fontSize:"20px",onClick:W,icon:e(y1,{})})}),e(k,{children:o(W1,{children:[e(v1,{as:m,variant:"unstyled",icon:e(U1,{}),"aria-label":"Call Sage",fontSize:"20px",children:"Language"}),e(w1,{children:o(D1,{defaultValue:"en",title:h("title"),type:"radio",onChange:c,children:[e(Z,{value:"id",children:"Bahasa Indonesia"}),e(Z,{value:"en",children:"English"})]})})]})}),e(k,{children:e(m,{onClick:i,variant:"unstyled",colorScheme:"teal","aria-label":"Call Sage",fontSize:"20px",icon:l==="light"?e(A1,{}):e(_1,{})})}),e(k,{children:e(m,{variant:"unstyled",colorScheme:"teal","aria-label":"Call Sage",onClick:y,fontSize:"20px",icon:e(K,{})})}),e(k,{children:e(m,{variant:"unstyled",colorScheme:"teal","aria-label":"Call Sage",fontSize:"20px",icon:e(Q1,{})})}),e(k,{children:e(m,{variant:"unstyled",colorScheme:"teal","aria-label":"Call Sage",fontSize:"20px",onClick:I,icon:e(Y1,{})})})]})]})})})})},J1=()=>(B(["global"]),o(M,{height:"100vh",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[e("img",{src:"/images/locked.png",alt:"Access Locked",style:{width:450,height:"auto"}}),e(S,{children:"Akses Dikunci"})]})),ee=({children:t})=>{const{role:n}=E(i=>i.session),l=$();return n.object_menus&&n.object_menus.length>0&&n.object_menus.find(i=>l.pathname!=="/"&&(i.state===1||i.state===2)&&i.type==="menu"&&o1(i.path,l.pathname))||n.id===1?t:e(J1,{})},N=()=>{localStorage.removeItem("_TuVbwpW"),localStorage.removeItem("_RuvTpQv")},ke=()=>{const[t,n]=x.useState(!1),[l,i]=x.useState(!1),[a,h]=x.useState(!1),f=R(),b=q(),{open:p,component:C,title:c,mode:I,size:y}=E(v=>v.ui),W=()=>!a&&i(!0),r=()=>!a&&i(!1),u=()=>{b(Y())},{isSuccess:_,isLoading:L}=r1({queryKey:["session"],queryFn:s1,refetchOnMount:!1,refetchOnWindowFocus:!1,onSuccess:v=>{b(l1(v.data))},onError:v=>{v instanceof c1?v.response.status===400&&(N(),f("/auth/login")):(N(),f("/auth/login"))}}),A=()=>{i(!l),h(!a),n(!t)};return o(d,{children:[o(p1,{blockScrollOnMount:!0,isOpen:p&&I==="modal",size:y,onClose:u,children:[e(T,{}),o(C1,{children:[e(H,{children:c}),e(V,{}),C]})]}),o(m1,{placement:"right",onClose:u,size:y,isOpen:p&&I==="drawer",children:[e(T,{}),o(g1,{children:[e(H,{borderBottomWidth:"1px",children:c}),e(V,{}),C]})]}),L&&e(O,{}),_&&o(n1,{children:[e(X1,{open:t,setSidebarOpen:A}),e(G1,{open:l,onHover:W,onLeave:r,setClose:A}),o(d,{paddingLeft:{base:0,md:t?g:w},position:"relative",marginTop:{base:"54px",md:"64px",xl:"64px"},minHeight:{base:"calc(100vh - 54px)",md:"calc(100vh - 64px)"},sx:{transition:D},children:[e(ee,{children:e(G,{padding:0,maxWidth:{base:"100%","2xl":2e3},minHeight:"100vh",paddingBottom:20,children:e(i1,{children:e(z.exports.Suspense,{fallback:e(O,{}),children:e(a1,{})})})})}),e(d,{position:"absolute",bottom:0,height:50,width:{base:"100%",md:`calc( 
              100% - ${t?g:w}px
            )`},children:o(S,{align:"center",fontSize:13,children:["Copyright@",new Date().getFullYear()," ",e("span",{children:e("strong",{children:"PT Tata Kelola Dokumen "})})," ","Allrights reserved"]})})]})]})]})};export{ke as default};
