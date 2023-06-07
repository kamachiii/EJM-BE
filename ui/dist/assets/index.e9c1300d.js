import{c as y,a2 as b,e as z,aa as P,f as x,R as A,a as o,r as D,j as d,F as k}from"./index.990a5e8d.js";import{a as q}from"./PagePadding.be31ae21.js";import{P as E}from"./PageHeader.6ac11668.js";import{Q as N}from"./QuestionIcon.569bcd36.js";import{B as _}from"./BeTable.63ce5081.js";import{A as v}from"./AddIcon.c6d76087.js";import{d as M,g as B}from"./questionActions.3af83eea.js";import{U as F}from"./useTableHelper.8cdf755a.js";import{E as j}from"./EditIcon.b6b72d62.js";import{D as K}from"./DeleteIcon.d5ab39ed.js";import{u as H,E as U}from"./useError.dd598f5e.js";import{o as L,c as V}from"./uiActions.4e6bb8aa.js";import{C as $}from"./ConfirmDelete.4fd5f463.js";import{B as i}from"./index.esm.27876472.js";import"./ArrowLeftIcon.e64cc763.js";import"./FilterIcon.57294db7.js";import"./slicedToArray.925b8532.js";import"./index.esm.3fa18c93.js";import"./index.esm.c75d359e.js";import"./index.esm.5f476ef3.js";import"./index.esm.86199dec.js";import"./index.238261e4.js";import"./ErrorEmpty.a2e6d48b.js";import"./Pagination.29c8658c.js";import"./ExpandLeftIcon.bf57eb47.js";import"./ExpandRightIcon.3b8cbe09.js";import"./useTranslation.0fd06a78.js";import"./SearchInput.fe556bc9.js";import"./useDebounce.51d664ab.js";import"./index.esm.84445d7f.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.72c0b9db.js";const Pe=()=>{var u,c,l;const n=y(),r=b(),{setPagination:f,searchValue:m,pagination:s,handleSearch:g}=F(),p=z(),h=P(),Q=H(M),{data:e,isLoading:C}=x(["question_templates",{searchValue:m,...s}],()=>B({pageSize:s.pageSize,current:s.pageIndex+1,search:m}),{keepPreviousData:!1}),I=t=>{Q.mutate(t,{onSuccess:a=>{r({status:"success",title:"success",description:a.message,position:"top",isClosable:!0}),h.invalidateQueries(["question_templates"]),p(V())},onError:a=>U(a,r)})},S=t=>{p(L(o($,{onDelete:()=>I(t)}),"Apakah kamu yakin ingin menghapus template ini ?","sm"))},T=A.useMemo(()=>[{id:"No",width:"auto",header:"No",accessorFn:(t,a)=>a+1},{id:"Template Pertanyaan",header:"Template Pertanyaan",accessorKey:"name"},{id:"Total Pertanyaan",header:"Total Pertanyaan",accessorKey:"total_questions"},{id:"Action",header:"Action",cell:({row:t})=>o(D.exports.Fragment,{children:d(k,{gap:2,alignItems:"center",children:[o(i,{size:"sm",leftIcon:o(j,{}),variant:"outline",onClick:()=>n(`/master/setup-questions/edit/${t.original.id}`),children:"Edit"}),o(i,{size:"sm",onClick:()=>S(t.original.id),leftIcon:o(K,{}),colorScheme:"red",children:"Delete"})]})})}],[]);return d(q,{title:"Setup Questions",children:[o(E,{label:"Setup Questions",leftIcon:o(N,{fontSize:26}),additional:o(i,{leftIcon:o(v,{fontSize:20}),onClick:()=>n("/master/setup-questions/add"),size:{base:"xs",lg:"sm"},children:"Add Questions"})}),o(_,{enableResizeColumn:!1,useSearchInput:!0,loading:C,onSearch:g,rowKey:(t,a,J)=>t==null?void 0:t.id,onChangeTable:f,pagination:{pageIndex:Number((u=e==null?void 0:e.page)!=null?u:0)-1,pageSize:Number((c=e==null?void 0:e.page_size)!=null?c:10)},pageCount:Number((l=e==null?void 0:e.page_count)!=null?l:0),totalRecords:e==null?void 0:e.total,data:(e==null?void 0:e.question_templates)||[],columns:T})]})};export{Pe as default};
