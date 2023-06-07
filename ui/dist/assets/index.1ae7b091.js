import{c as y,a4 as P,d as b,ae as z,f as x,R as A,a as o,r as D,j as d,F as k}from"./index.4df5dae3.js";import{P as q}from"./Page.ce903aa1.js";import{P as E}from"./PageHeader.954bf5c1.js";import{Q as N}from"./QuestionIcon.341b8802.js";import{B as _}from"./BeTable.0069771f.js";import{A as v}from"./AddIcon.159dfaf4.js";import{d as B,g as F}from"./questionActions.1a7d06af.js";import{U as M}from"./useTableHelper.39837f07.js";import{E as j}from"./EditIcon.3ffc7b25.js";import{D as H}from"./DeleteIcon.8cd44a6f.js";import{u as K,E as U}from"./useError.46aba7e3.js";import{o as L,c as V}from"./uiActions.0615ad97.js";import{C as $}from"./ConfirmDelete.bb641ee2.js";import{B as i}from"./index.esm.780dcd2c.js";import"./PagePadding.8c1b0086.js";import"./ArrowLeftIcon.0c9057ff.js";import"./FilterIcon.698af641.js";import"./index.esm.f3b9d19a.js";import"./slicedToArray.556cd5c1.js";import"./index.esm.17aaa28e.js";import"./index.238261e4.js";import"./ErrorEmpty.d1acacce.js";import"./Pagination.5113db8a.js";import"./ExpandLeftIcon.52c60c0f.js";import"./useTranslation.d56b7bba.js";import"./SearchInput.7f0274ff.js";import"./useDebounce.b8118708.js";import"./index.esm.b22a74c4.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.cba8c0e3.js";const Pe=()=>{var u,c,l;const n=y(),r=P(),{setPagination:f,searchValue:m,pagination:s,handleSearch:g}=M(),p=b(),h=z(),I=K(B),{data:e,isLoading:Q}=x(["question_templates",{searchValue:m,...s}],()=>F({pageSize:s.pageSize,current:s.pageIndex+1,search:m}),{keepPreviousData:!1}),C=t=>{I.mutate(t,{onSuccess:a=>{r({status:"success",title:"success",description:a.message,position:"top",isClosable:!0}),h.invalidateQueries(["question_templates"]),p(V())},onError:a=>U(a,r)})},S=t=>{p(L(o($,{onDelete:()=>C(t)}),"Apakah kamu yakin ingin menghapus template ini ?","sm"))},T=A.useMemo(()=>[{id:"No",width:"auto",header:"No",accessorFn:(t,a)=>a+1},{id:"Template Pertanyaan",header:"Template Pertanyaan",accessorKey:"name"},{id:"Total Pertanyaan",header:"Total Pertanyaan",accessorKey:"total_questions"},{id:"Action",header:"Action",cell:({row:t})=>o(D.exports.Fragment,{children:d(k,{gap:2,alignItems:"center",children:[o(i,{size:"sm",leftIcon:o(j,{}),variant:"outline",onClick:()=>n(`/master/setup-questions/edit/${t.original.id}`),children:"Edit"}),o(i,{size:"sm",onClick:()=>S(t.original.id),leftIcon:o(H,{}),colorScheme:"red",children:"Delete"})]})})}],[]);return d(q,{title:"Setup Questions",children:[o(E,{label:"Setup Questions",leftIcon:o(N,{fontSize:26}),additional:o(i,{leftIcon:o(v,{fontSize:20}),onClick:()=>n("/master/setup-questions/add"),size:{base:"xs",lg:"sm"},children:"Add Questions"})}),o(_,{enableResizeColumn:!1,useSearchInput:!0,loading:Q,onSearch:g,rowKey:(t,a,J)=>t==null?void 0:t.id,onChangeTable:f,pagination:{pageIndex:Number((u=e==null?void 0:e.page)!=null?u:0)-1,pageSize:Number((c=e==null?void 0:e.page_size)!=null?c:10)},pageCount:Number((l=e==null?void 0:e.page_count)!=null?l:0),totalRecords:e==null?void 0:e.total,data:(e==null?void 0:e.question_templates)||[],columns:T})]})};export{Pe as default};
