import{P as r,a as F}from"./PagePadding.7fee7082.js";import{E as w}from"./EditIcon.186a823f.js";import{U as W}from"./UserIcon.fe68b376.js";import{S as z}from"./SettingsIcon.d3971840.js";import{j as t,a as e,F as a,T as l,R as D,r as y,u as B,B as o,ah as T,ai as E,D as d,f as U,h as R}from"./index.6a975b74.js";import{T as L}from"./index.esm.91b674ff.js";import{I as x,B as P}from"./index.esm.5c32f280.js";import{D as m}from"./Detailinformation.bdc19e30.js";import{A}from"./AssignIcon.dc2c7ef4.js";import{C}from"./CommentsIcon.63157d0a.js";import{F as $}from"./FileIcon.85b97a7b.js";import{B as H}from"./BeTable.b3fcea36.js";import{u as v}from"./useTranslation.703fee9c.js";import{C as u,a as _}from"./index.esm.0e6c6e8f.js";import{S as K}from"./SearchInput.2fc00442.js";import{F as M}from"./FilterIcon.adce54b8.js";import{g as q}from"./usersActions.4a42df1a.js";import{E as X}from"./ErrorFetching.8dfff1fc.js";import{u as O}from"./useSelector.5e62da1a.js";import{T as Q,a as Y,b as f,c as G,d as b}from"./index.esm.1b4cf8b5.js";import"./slicedToArray.3357f2a5.js";import"./index.esm.1d96a478.js";import"./index.esm.92b00b84.js";import"./index.esm.63338ecb.js";import"./index.esm.58f73ea8.js";import"./Pagination.3a225467.js";import"./ExpandLeftIcon.ab61f736.js";import"./ExpandRightIcon.93a93fc4.js";import"./useDebounce.64d51988.js";const J=({profile_pict:n})=>t("div",{style:{position:"relative",height:"min-content"},children:[e("img",{src:n!=null?n:"/images/default-image.jpg",alt:"Profile User",style:{width:70,height:70,objectFit:"cover",maxWidth:70,maxHeight:70,borderRadius:50,border:"2px solid white"}}),e(L,{label:"Edit Profile Picture",children:e(x,{"aria-label":"Edit",size:"xs",borderRadius:30,icon:e(w,{fontSize:20,p:0}),position:"absolute",bottom:0,right:0})})]}),I=({icon:n,label:s,rightAction:i})=>t(a,{justifyContent:"space-between",alignItems:"center",children:[t(a,{gap:2,children:[n,e(l,{fontWeight:"semibold",children:s})]}),i]}),N=()=>{const{t:n}=v(["profile"]),s=D.useMemo(()=>[{id:n("tab_assigned_task_content.table_no"),width:"auto",header:n("tab_assigned_task_content.table_no"),accessorFn:(i,c)=>c+1},{id:n("tab_assigned_task_content.table_projects_name"),header:n("tab_assigned_task_content.table_projects_name"),accessorKey:"full_name"}],[n]);return t(y.exports.Fragment,{children:[e(r,{x:0,y:3}),e(H,{data:[],columns:s,useSearchInput:!0})]})},j=({user:n,question_type:s,project_type:i,comment:c,time:h,id:g})=>{const{colorMode:p}=B();return t(a,{gap:5,children:[e(o,{display:{base:"none",xl:"block"},children:e("img",{src:"https://bit.ly/kent-c-dodds",alt:"TKD",width:50,style:{borderRadius:50,border:"1px solid white",minWidth:30,height:50},height:"auto"})}),e(u,{flex:"1",borderWidth:1,borderStyle:"solid",borderColor:"gray.600",children:t(_,{children:[t(a,{justifyContent:"space-between",alignItems:"center",flexDirection:{base:"column",sm:"row"},children:[t(a,{gap:2,children:[e(C,{fontSize:23}),t(l,{noOfLines:1,children:[n," commented on ",e(T,{as:"span",children:s}),e(E,{children:g})]})]}),t(a,{gap:2,children:[e(T,{colorScheme:"blue",children:i}),e(l,{fontSize:13,color:"white.700",children:h})]})]}),e(r,{x:0,y:3}),e(o,{p:2,bg:`gray.${p==="light"?"200":"600"}`,children:e(l,{children:c})})]})})]})},V=()=>t(y.exports.Fragment,{children:[t(a,{justifyContent:"space-between",alignItems:"center",pb:3,children:[e(l,{fontWeight:"semibold",children:"Hari ini"}),e(l,{fontWeight:"medium",fontSize:13,children:"2 September 2022"})]}),e(d,{}),t(o,{paddingX:{base:"0",xl:6},paddingY:10,children:[e(j,{comment:"Tolong Tambahkan data yang jelas",user:"Ikhsan",time:"12:45",project_type:"monitoring",question_type:"inventory",id:"123"}),e(r,{x:6,y:3}),e(j,{comment:"Tolong Tambahkan data yang jelas",user:"Ikhsan",time:"12:45",project_type:"monitoring",question_type:"inventory",id:"123"})]}),t(a,{justifyContent:"space-between",alignItems:"center",pb:3,children:[e(l,{fontWeight:"semibold",children:"Kemarin"}),e(l,{fontWeight:"medium",fontSize:13,children:"1 September 2022"})]}),e(d,{})]}),Z=()=>t(y.exports.Fragment,{children:[t(a,{gap:3,children:[e(o,{flex:"1",children:e(K,{})}),e(x,{"aria-label":"Filter",icon:e(M,{fontSize:26})})]}),e(r,{x:0,y:5}),e(o,{height:"100%",children:e(a,{flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",children:e("img",{src:"/images/searching.png",alt:"Search",style:{width:400}})})})]}),ke=()=>{var p,S;const{t:n}=v(["profile"]),{id:s}=O(k=>k.session),{data:i,isLoading:c,isSuccess:h,isError:g}=U(["detail_user",s],()=>q(+s),{enabled:!!s});return t(F,{title:`Profile ${h?i.data.full_name:""}`,children:[c&&e(R,{}),h&&e(r,{x:6,y:6,children:t(a,{gap:4,flexDirection:{base:"column",lg:"row"},children:[e(u,{w:{xl:500},flex:{md:1,xl:"none"},children:t(_,{children:[t(a,{gap:4,children:[e(J,{profile_pict:i.data.profile_pict?`/api/v1/profiles/${i.data.profile_pict}`:null}),t(a,{flexDirection:"column",children:[e(l,{fontWeight:"semibold",fontSize:{base:15,md:25},children:(p=i.data.full_name)!=null?p:"-"}),e(l,{fontWeight:"normal",fontSize:{base:15},children:(S=i.data.role.name)!=null?S:"-"})]})]}),e(r,{x:0,y:2}),e(d,{}),e(r,{x:0,y:2}),e(I,{icon:e(W,{fontSize:26}),label:n("label_user_information"),rightAction:e(x,{"aria-label":"Edit",variant:"unstyled",icon:e(w,{fontSize:28,color:"yellow.400"})})}),e(r,{x:0,y:2}),e(d,{}),t(o,{mt:5,children:[e(m,{label:"Username",value:i.data.username}),e(d,{}),e(m,{label:"Email",value:i.data.email}),e(d,{}),e(m,{label:n("user_information_content.alamat"),value:i.data.address}),e(d,{}),e(m,{label:"Role",value:"Superadmin"}),e(d,{}),e(m,{label:n("user_information_content.handphone"),value:i.data.phone})]}),e(r,{x:0,y:2}),e(I,{icon:e(z,{fontSize:26}),label:n("label_action")}),e(r,{x:0,y:2}),e(d,{}),e(r,{x:0,y:2}),t(a,{flexDirection:"column",gap:5,children:[e(P,{bg:"blue.400",children:n("action_content.change")}),e(P,{variant:"outline",color:"red.500",children:n("action_content.delete")})]})]})}),e(u,{flex:1,children:e(_,{padding:{base:0},children:t(Q,{children:[e(o,{overflowX:"auto",children:t(Y,{children:[t(f,{minW:"fit-content",children:[e(o,{as:"span",mr:"2",children:e(A,{})}),n("label_tab_assigned_task")]}),t(f,{minW:"fit-content",children:[e(o,{as:"span",mr:"2",children:e(C,{})}),n("label_tab_comments")]}),t(f,{minW:"fit-content",children:[e(o,{as:"span",mr:"2",children:e($,{})}),n("label_tab_attachments")]})]})}),t(G,{children:[e(b,{padding:0,children:e(N,{})}),e(b,{children:e(V,{})}),e(b,{children:e(Z,{})})]})]})})})]})}),g&&e(X,{})]})};export{ke as default};
