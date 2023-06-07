import{c as T,e as A,a2 as O,aa as N,r as y,f as Q,R as H,a as e,ah as U,j as c,F as q,D as L,B as S}from"./index.990a5e8d.js";import{a as V,P as $}from"./PagePadding.be31ae21.js";import{P as G}from"./PageHeader.6ac11668.js";import{K as J}from"./KeyIcon.3ab04878.js";import{B as W}from"./BeTable.63ce5081.js";import{A as X}from"./AddIcon.c6d76087.js";import{d as Y,a as Z,g as w}from"./rolesActions.83eade71.js";import{U as ee}from"./useTableHelper.8cdf755a.js";import{D as m}from"./DeleteIcon.d5ab39ed.js";import{g as te}from"./TableCheckbox.38520500.js";import{E as oe}from"./EditIcon.b6b72d62.js";import{o as x,c as D}from"./uiActions.4e6bb8aa.js";import{u as I,E as B}from"./useError.dd598f5e.js";import{C as _}from"./ConfirmDelete.4fd5f463.js";import{u as ae}from"./useTranslation.0fd06a78.js";import{B as i}from"./index.esm.27876472.js";import"./ArrowLeftIcon.e64cc763.js";import"./FilterIcon.57294db7.js";import"./slicedToArray.925b8532.js";import"./index.esm.3fa18c93.js";import"./index.esm.c75d359e.js";import"./index.esm.5f476ef3.js";import"./index.esm.86199dec.js";import"./index.238261e4.js";import"./ErrorEmpty.a2e6d48b.js";import"./Pagination.29c8658c.js";import"./ExpandLeftIcon.bf57eb47.js";import"./ExpandRightIcon.3b8cbe09.js";import"./SearchInput.fe556bc9.js";import"./useDebounce.51d664ab.js";import"./index.esm.84445d7f.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.72c0b9db.js";const Ne=()=>{var f,k,C;const{t:a}=ae(["role","global"]),u=T(),r=A(),n=O(),p=N(),{setPagination:R,searchValue:g,pagination:d,handleSearch:v}=ee(),[l,b]=y.exports.useState({}),z=I(Y),P=I(Z),{data:o,isLoading:j}=Q(["roles",{searchValue:g,...d}],()=>w({pageSize:d.pageSize,current:d.pageIndex+1,search:g}),{keepPreviousData:!1}),E=()=>{const t=Object.keys(l).map(s=>+s);P.mutate(t,{onSuccess:s=>{n({status:"success",title:"success",description:s.message,position:"top",isClosable:!0}),r(D()),b({}),p.invalidateQueries(["roles"])},onError:s=>B(s,n)})},K=t=>{z.mutate(t,{onSuccess:s=>{n({status:"success",title:"success",description:s.message,position:"top",isClosable:!0}),r(D()),p.invalidateQueries(["roles"])},onError:s=>B(s,n)})},F=t=>{r(x(e(_,{onDelete:()=>K(t)}),a("modal.title.delete"),"sm"))},h=()=>{r(x(e(_,{onDelete:E}),a("modal.title.delete"),"sm"))},M=H.useMemo(()=>[{id:"checkbox",...te({useCheckbox:!0})},{id:a("table_roles.table_no"),width:"auto",header:a("table_roles.table_no"),accessorFn:(t,s)=>s+1},{id:a("table_roles.name"),header:a("table_roles.name"),accessorKey:"name"},{id:a("table_roles.status"),header:a("table_roles.status"),accessorKey:"is_active",cell:({row:t})=>e(U,{colorScheme:t.original.is_active?"green":"red",children:t.original.is_active?a("active"):a("nonactive")})},{id:a("table_roles.action"),header:a("table_roles.action"),cell:({row:t})=>e(y.exports.Fragment,{children:c(q,{gap:2,alignItems:"center",children:[e(i,{size:"sm",leftIcon:e(oe,{}),variant:"outline",onClick:()=>u(`/management/roles/edit/${t.original.id}`),children:"Edit"}),e(i,{size:"sm",leftIcon:e(m,{}),onClick:()=>F(t.original.id),colorScheme:"red",children:"Delete"})]})})}],[a]);return c(V,{title:"Roles",children:[e(G,{label:"Roles",leftIcon:e(J,{fontSize:24}),additional:e(i,{leftIcon:e(X,{fontSize:23}),onClick:()=>u("/management/roles/add"),size:{base:"xs",lg:"sm"},children:a("buttons.add")})}),e(L,{}),e($,{x:0,y:6}),e(W,{data:(o==null?void 0:o.roles)||[],onChangeTable:R,loading:j,onSearch:v,rowKey:(t,s,le)=>t==null?void 0:t.id,pagination:{pageIndex:Number((f=o==null?void 0:o.page)!=null?f:0)-1,pageSize:Number((k=o==null?void 0:o.page_size)!=null?k:10)},leftFilter:e(S,{display:{base:"none",md:"block"},children:c(i,{leftIcon:e(m,{}),colorScheme:"red",onClick:h,disabled:Boolean(Object.keys(l).length<1),children:["Delete ",Object.keys(l).length," data"]})}),bottomFilter:e(S,{display:{base:"block",md:"none"},children:c(i,{leftIcon:e(m,{}),colorScheme:"red",size:"xs",onClick:h,disabled:Boolean(Object.keys(l).length<1),children:["Delete ",Object.keys(l).length," data"]})}),pageCount:Number((C=o==null?void 0:o.page_count)!=null?C:0),columns:M,useSearchInput:!0,rowSelectionProps:l,onCheckboxChange:b,totalRecords:o==null?void 0:o.total})]})};export{Ne as default};
