import{c as A,aa as L,a2 as N,e as O,r as C,f as Q,R as $,a as t,ah as H,j as c,F as q,D as R,B as x}from"./index.2876ce8d.js";import{a as V,P as W}from"./PagePadding.01ff7a41.js";import{P as G}from"./PageHeader.af1fedb8.js";import{U as J}from"./UserIcon.32fa6401.js";import{B as X}from"./BeTable.e5c0962a.js";import{A as Y}from"./AddIcon.21e4e8ec.js";import{g as Z}from"./TableCheckbox.9ba961a2.js";import{U as w}from"./useTableHelper.763dcc57.js";import{d as ee,a as te,b as se}from"./usersActions.f7318d6b.js";import{E as ae}from"./EditIcon.753e8825.js";import{D as u}from"./DeleteIcon.d9371cb9.js";import{u as S,E as D}from"./useError.427e104a.js";import{o as I,c as U}from"./uiActions.dd00498c.js";import{C as B}from"./ConfirmDelete.c5ee4243.js";import{u as oe}from"./useTranslation.251d09d2.js";import{B as i}from"./index.esm.6e051443.js";import{T as re}from"./index.esm.0a2c5d58.js";import"./ArrowLeftIcon.de388376.js";import"./FilterIcon.b2078b68.js";import"./index.esm.ae337b1d.js";import"./index.esm.d399955a.js";import"./slicedToArray.84b5158f.js";import"./index.esm.f2cdd8ab.js";import"./index.esm.f54768d8.js";import"./SearchInput.79f6c32e.js";import"./Pagination.5467061a.js";import"./ExpandLeftIcon.2a5c5954.js";import"./ExpandRightIcon.a9ec3603.js";import"./useDebounce.efc0032c.js";import"./ExpandDownIcon.bb84ccf7.js";import"./index.esm.bd3da3a3.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.982e29e1.js";const Oe=()=>{var _,k,y;const{t:e}=oe(["user","global"]),p=A(),{setPagination:v,searchValue:g,pagination:d,handleSearch:P}=w(),b=L(),j=S(ee),m=S(te),l=N(),n=O(),[r,h]=C.exports.useState({}),{data:a,isLoading:z}=Q(["users",{searchValue:g,...d}],()=>se({pageSize:d.pageSize,current:d.pageIndex+1,search:g}),{keepPreviousData:!1}),T=()=>p("/management/users/add"),E=s=>{j.mutate(s,{onSuccess:o=>{l({status:"success",title:"success",description:o.message,position:"top",isClosable:!0}),n(U()),b.invalidateQueries(["users"])},onError:o=>D(o,l)})},F=()=>{const s=Object.keys(r).map(o=>+o);m.mutate(s,{onSuccess:o=>{l({status:"success",title:"success",description:o.message,position:"top",isClosable:!0}),n(U()),b.invalidateQueries(["users"]),h({})},onError:o=>D(o,l)})},f=()=>{n(I(t(B,{onDelete:F}),e("modal.title.delete"),"sm"))},K=s=>{n(I(t(B,{onDelete:()=>E(s)}),e("modal.title.delete"),"sm"))},M=$.useMemo(()=>[{id:"checkbox",...Z({useCheckbox:!0})},{id:e("table_users.table_no"),header:e("table_users.table_no"),accessorFn:(s,o)=>o+1},{id:e("table_users.pict"),header:e("table_users.pict"),cell:({row:s})=>t("img",{src:s.original.profile_pict?`api/v1/profiles/${s.original.profile_pict}`:"/images/default-image.jpg",alt:`Profile ${s.original.full_name}`,style:{borderRadius:50,border:"2px solid white",objectFit:"cover",width:40,height:40,maxWidth:40,maxHeight:40}})},{id:e("table_users.username"),header:e("table_users.username"),accessorKey:"username"},{id:e("table_users.name"),header:e("table_users.name"),accessorKey:"full_name"},{id:e("table_users.role"),header:e("table_users.role"),accessorKey:"role.name"},{id:e("table_users.status"),header:e("table_users.status"),accessorKey:"is_active",cell:({row:s})=>t(H,{colorScheme:s.original.is_active?"green":"red",children:s.original.is_active?e("active"):e("nonactive")})},{id:e("table_users.action"),header:e("table_users.action"),cell:({row:s})=>t(C.exports.Fragment,{children:c(q,{gap:2,alignItems:"center",children:[t(i,{size:"sm",leftIcon:t(ae,{}),variant:"outline",onClick:()=>p(`/management/users/edit/${s.original.id}`),children:"Edit"}),t(i,{size:"sm",onClick:()=>K(s.original.id),leftIcon:t(u,{}),colorScheme:"red",children:"Delete"})]})})}],[e]);return c(V,{title:e("label"),children:[t(G,{label:e("label"),leftIcon:t(J,{fontSize:24}),additional:t(re,{label:"Add New User",children:t(i,{leftIcon:t(Y,{fontSize:20}),onClick:T,children:e("buttons.add")})})}),t(R,{}),t(W,{x:0,y:6}),t(X,{enableResizeColumn:!1,useSearchInput:!0,loading:z,onSearch:P,leftFilter:t(x,{display:{base:"none",md:"block"},children:c(i,{leftIcon:t(u,{}),colorScheme:"red",onClick:f,isLoading:m.isLoading,disabled:Boolean(Object.keys(r).length<1),children:["Delete ",Object.keys(r).length," data"]})}),bottomFilter:t(x,{display:{base:"block",md:"none"},children:c(i,{leftIcon:t(u,{}),colorScheme:"red",size:"xs",onClick:f,isLoading:m.isLoading,disabled:Boolean(Object.keys(r).length<1),children:["Delete ",Object.keys(r).length," data"]})}),rowKey:(s,o,ie)=>s==null?void 0:s.id,onChangeTable:v,pagination:{pageIndex:Number((_=a==null?void 0:a.page)!=null?_:0)-1,pageSize:Number((k=a==null?void 0:a.page_size)!=null?k:10)},pageCount:Number((y=a==null?void 0:a.page_count)!=null?y:0),onCheckboxChange:h,rowSelectionProps:r,totalRecords:a==null?void 0:a.total,data:a==null?void 0:a.users,columns:M})]})};export{Oe as default};
