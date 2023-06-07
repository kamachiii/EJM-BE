import{R as E,r as F,a as e,j as o,t as C,am as y,a2 as I,ap as R,aq as v,B as w,T as j,F as M}from"./index.d5331035.js";import{u as N,F as i}from"./FormFieldControl.99f86f5b.js";import{F as c}from"./FieldText.45c302a0.js";import{F as G}from"./FieldTextArea.9f9d6dee.js";import{E as _}from"./EditIcon.553b3055.js";import{u as k,a as z,G as B,b as L}from"./useSelectDataMapper.6165c842.js";import{u as A}from"./useDebounce.d3519829.js";import{g as D}from"./rolesActions.d89ef9bd.js";import{S as O}from"./select.c3fc601f.js";import{F as U}from"./FieldCustom.5a5ed46b.js";import{E as V}from"./EyeIcon.3055751c.js";import{u as $}from"./useTranslation.21f85c5c.js";import{T as H}from"./index.esm.18904467.js";import{I as S}from"./index.esm.50eb2b01.js";const K=E.forwardRef(({name:a,onChange:t,onBlur:n,value:r,placeholder:l},g)=>{const[h,d]=F.exports.useState(""),p=A(h,1e3),{fetchNextPage:f,hasNextPage:b,isError:x,isSuccess:u,isLoading:m,data:P,isFetchingNextPage:T}=k(["fetch_select_roles",p],({pageParam:s=1})=>D({current:s,search:p,value:r==null?void 0:r.value,using_active:!0,pageSize:15}),{getNextPageParam:s=>B(s),getPreviousPageParam:s=>L(s)}),q=z({isSuccess:u,data:P!=null?P:{pages:[],pageParams:[]},key:"roles",returnList:s=>({label:s.name,value:s.id})});return e(O,{name:a,ref:g,onChange:t,onBlur:n,value:r,onInputChange:d,isLoading:T||m,isClearable:!0,noOptionsMessage:({inputValue:s})=>e("div",{children:"Tidak ada pilihan"}),loadingMessage:({inputValue:s})=>o(C,{children:[o("div",{children:['Mencari "',s,'"']}),m&&e(y,{size:"xs",width:"100%",isIndeterminate:!0}),x&&e("div",{children:"Error saat mencari data"})]}),options:q,placeholder:l,closeMenuOnScroll:!0,isSearchable:!0,onMenuScrollToBottom:()=>{b&&f()},closeMenuOnSelect:!0})}),Q=a=>new Promise((t,n)=>{const r=new FileReader;r.readAsDataURL(a),r.onload=()=>t(r.result),r.onerror=l=>n(l)}),W=["image/jpeg","image/png"],ue=()=>{const{control:a,formState:t,setValue:n}=N(),{t:r}=$(["validation"]),l=I(),[g,h]=F.exports.useState(!1),[d,p]=F.exports.useState(null),f=()=>h(!g),b=async x=>{const u=x.target.files[0];if(!W.includes(u.type))l({position:"top",title:"Error",description:"Format dokumen wajib png / jpeg",isClosable:!0,status:"error"});else{n("file",u);try{const m=await Q(u);p(m)}catch{l({position:"top",title:"Error",description:"Tidak bisa convert image",isClosable:!0,status:"error"})}}};return o(R,{gap:4,justifyContent:"center",templateColumns:{base:"repeat(1,1fr)",lg:"repeat(6,1fr)"},children:[o(v,{children:[o(w,{sx:{position:"relative",width:150,height:"min-content"},children:[e("img",{src:d!=null?d:"/images/default-image.jpg",alt:"TKD",style:{borderRadius:50,border:"2px solid white",objectFit:"cover",width:150,height:150,maxWidth:150,maxHeight:150}}),e(H,{label:"Edit Profile Picture",children:o(w,{children:[e(S,{"aria-label":"Edit",size:"lg",as:"label",htmlFor:"file",borderRadius:30,icon:e(_,{fontSize:26,p:0}),position:"absolute",bottom:0,right:0}),e("input",{hidden:!0,accept:"image/*",type:"file",multiple:!1,id:"file",onChange:b})]})})]}),e(j,{mt:5,children:"Change Profile Picture"})]}),e(v,{colSpan:5,children:o(M,{direction:"column",gap:4,flex:1,children:[e(i,{label:"Username",control:a,name:"username",formState:t,id:"username",rules:{required:{value:!0,message:r("required")}},children:e(c,{})}),e(i,{label:"Full Name",control:a,name:"full_name",formState:t,id:"full_name",rules:{required:{value:!0,message:r("required")}},children:e(c,{})}),e(i,{label:"Email",control:a,name:"email",formState:t,id:"email",rules:{required:{value:!0,message:r("required")},pattern:{value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,message:r("email.invalid")}},children:e(c,{})}),e(i,{label:"Role",control:a,name:"role",formState:t,id:"role",rules:{required:{value:!0,message:r("required")}},children:e(U,{children:e(K,{})})}),e(i,{label:"Nomor Telepon",control:a,name:"phone",formState:t,id:"phone",rules:{required:{value:!1,message:r("required")},pattern:{value:/\d$/,message:r("number")}},children:e(c,{leftElement:"+62"})}),e(i,{label:"Address",control:a,name:"address",formState:t,id:"address",rules:{required:{value:!1,message:r("required")}},children:e(G,{})}),e(i,{label:"Password",control:a,name:"password",formState:t,id:"password",rules:{required:{value:!0,message:r("required")},minLength:{value:6,message:`${r("min")} 6`}},children:e(c,{type:g?"text":"password",rightElement:e(S,{onClick:f,variant:"outline",h:"1.75rem",size:"sm",border:"none",icon:e(V,{}),"aria-label":"Toggle"})})})]})})]})};export{ue as F};
