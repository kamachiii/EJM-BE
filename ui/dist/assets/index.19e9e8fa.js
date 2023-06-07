import{c as Q,ac as H,a4 as $,d as q,r as U,f as R,R as V,a as t,aj as W,j as d,F as G,D as J,B}from"./index.5b816863.js";import{a as X,P as Y}from"./PagePadding.45875137.js";import{P as Z}from"./PageHeader.d27f8ae4.js";import{U as w}from"./UserIcon.2084c42a.js";import{B as ee}from"./BeTable.20a4afa0.js";import{A as te}from"./AddIcon.165e61b5.js";import{g as se}from"./TableCheckbox.1afb0c33.js";import{U as ae}from"./useTableHelper.d82b9e7c.js";import{d as oe,a as ie,t as re,b as le}from"./usersActions.cd3a8c1d.js";import{E as ne}from"./EditIcon.22244ff4.js";import{D as g}from"./DeleteIcon.aa14c306.js";import{u as b,E as h}from"./useError.d999dd2c.js";import{o as f,c as _}from"./uiActions.07096468.js";import{C as S}from"./ConfirmDelete.42e62056.js";import{u as ce}from"./useTranslation.6be11027.js";import{B as n}from"./index.esm.f21969b8.js";import{T as de}from"./index.esm.089565e5.js";import"./ArrowLeftIcon.5e09b122.js";import"./FilterIcon.05aa0837.js";import"./index.esm.7f1cbbdf.js";import"./index.esm.28b35340.js";import"./slicedToArray.01f71b8b.js";import"./index.esm.10c6c73a.js";import"./index.esm.9250e631.js";import"./index.238261e4.js";import"./ErrorEmpty.180e4712.js";import"./Pagination.74a4d451.js";import"./ExpandLeftIcon.47e8a4cf.js";import"./SearchInput.8904345c.js";import"./useDebounce.b2496c93.js";import"./index.esm.5601fbef.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.ae32a3c5.js";const qe=()=>{var x,D,I;const{t:s}=ce(["user","global"]),C=Q(),{setPagination:z,searchValue:k,pagination:m,handleSearch:j}=ae(),u=H(),P=b(oe),p=b(ie),T=b(re),i=$(),r=q(),[l,v]=U.exports.useState({}),{data:o,isLoading:E}=R(["users",{searchValue:k,...m}],()=>le({pageSize:m.pageSize,current:m.pageIndex+1,search:k}),{keepPreviousData:!1}),A=()=>C("/management/users/add"),F=e=>{P.mutate(e,{onSuccess:a=>{i({status:"success",title:"success",description:a.message,position:"top",isClosable:!0}),r(_()),u.invalidateQueries(["users"])},onError:a=>h(a,i)})},K=()=>{const e=Object.keys(l).map(a=>+a);p.mutate(e,{onSuccess:a=>{i({status:"success",title:"success",description:a.message,position:"top",isClosable:!0}),r(_()),u.invalidateQueries(["users"]),v({})},onError:a=>h(a,i)})},y=()=>{r(f(t(S,{onDelete:K}),s("modal.title.delete"),"sm"))},M=(e,a)=>{T.mutate({id:e,status:a},{onSuccess:c=>{i({status:"success",title:"success",description:c.message,position:"top",isClosable:!0}),r(_()),u.invalidateQueries(["users"])},onError:c=>h(c,i)})},N=(e,a)=>{r(f(t(S,{onDelete:()=>M(e,a)}),"Update Status ?","sm"))},L=e=>{r(f(t(S,{onDelete:()=>F(e)}),s("modal.title.delete"),"sm"))},O=V.useMemo(()=>[{id:"checkbox",...se({useCheckbox:!0})},{id:s("table_users.table_no"),header:s("table_users.table_no"),accessorFn:(e,a)=>a+1},{id:s("table_users.pict"),header:s("table_users.pict"),cell:({row:e})=>t("img",{src:e.original.profile_pict?`/api/v1/profiles/${e.original.profile_pict}`:"/images/default-image.jpg",alt:`Profile ${e.original.full_name}`,style:{borderRadius:50,border:"2px solid white",objectFit:"cover",width:40,height:40,maxWidth:40,maxHeight:40}})},{id:s("table_users.username"),header:s("table_users.username"),accessorKey:"username"},{id:s("table_users.name"),header:s("table_users.name"),accessorKey:"full_name"},{id:s("table_users.role"),header:s("table_users.role"),accessorKey:"role.name"},{id:s("table_users.status"),header:s("table_users.status"),accessorKey:"is_active",cell:({row:e})=>t(W,{colorScheme:e.original.is_active?"green":"red",children:e.original.is_active?s("active"):s("nonactive")})},{id:s("table_users.action"),header:s("table_users.action"),cell:({row:e})=>t(U.exports.Fragment,{children:d(G,{gap:2,alignItems:"center",children:[t(n,{size:"sm",variant:"solid",colorScheme:e.original.is_active?"red":"green",onClick:()=>N(e.original.id,!e.original.is_active),children:e.original.is_active?"Set Non Active":"Set Active"}),t(n,{size:"sm",leftIcon:t(ne,{}),variant:"outline",onClick:()=>C(`/management/users/edit/${e.original.id}`),children:"Edit"}),t(n,{size:"sm",onClick:()=>L(e.original.id),leftIcon:t(g,{}),colorScheme:"red",children:"Delete"})]})})}],[s]);return d(X,{title:s("label"),children:[t(Z,{label:s("label"),leftIcon:t(w,{fontSize:24}),additional:t(de,{label:"Add New User",children:t(n,{leftIcon:t(te,{fontSize:20}),onClick:A,size:{base:"xs",lg:"sm"},children:s("buttons.add")})})}),t(J,{}),t(Y,{x:0,y:6}),t(ee,{enableResizeColumn:!1,useSearchInput:!0,loading:E,onSearch:j,leftFilter:t(B,{display:{base:"none",md:"block"},children:d(n,{leftIcon:t(g,{}),colorScheme:"red",onClick:y,isLoading:p.isLoading,disabled:Boolean(Object.keys(l).length<1),children:["Delete ",Object.keys(l).length," data"]})}),bottomFilter:t(B,{display:{base:"block",md:"none"},children:d(n,{leftIcon:t(g,{}),colorScheme:"red",size:"xs",onClick:y,isLoading:p.isLoading,disabled:Boolean(Object.keys(l).length<1),children:["Delete ",Object.keys(l).length," data"]})}),rowKey:(e,a,c)=>e==null?void 0:e.id,onChangeTable:z,pagination:{pageIndex:Number((x=o==null?void 0:o.page)!=null?x:0)-1,pageSize:Number((D=o==null?void 0:o.page_size)!=null?D:10)},pageCount:Number((I=o==null?void 0:o.page_count)!=null?I:0),onCheckboxChange:v,rowSelectionProps:l,totalRecords:o==null?void 0:o.total,data:o==null?void 0:o.users,columns:O})]})};export{qe as default};
