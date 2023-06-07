import{R as C,r as b,a as e,j as h,h as O,an as D,T as I,aq as Q,ar as M,f as R,D as q}from"./index.5b816863.js";import{a as V,P as F}from"./PagePadding.45875137.js";import{P as w}from"./PageHeader.d27f8ae4.js";import{B as G}from"./BeTable.20a4afa0.js";import{U as J}from"./useTableHelper.d82b9e7c.js";import{u as Y,F as v,a as U}from"./FormFieldControl.83524802.js";import{F as T}from"./FieldCustom.e664487c.js";import{p as W,a as H,S as N,q as A}from"./projectActions.1197d90c.js";import{S as X}from"./SelectCompanies.237712c1.js";import{G as k,a as B}from"./useGetPrevPageParam.cb1386c2.js";import{u as z}from"./useDebounce.b2496c93.js";import{u as E,a as K}from"./useSelectDataMapper.1d7decc0.js";import{S as L}from"./select.c640a523.js";import{F as Z}from"./FilterIcon.05aa0837.js";import{d as $}from"./dayjs.min.8382c62a.js";import{B as ee}from"./index.esm.f21969b8.js";import"./ArrowLeftIcon.5e09b122.js";import"./index.esm.7f1cbbdf.js";import"./index.esm.28b35340.js";import"./slicedToArray.01f71b8b.js";import"./index.esm.10c6c73a.js";import"./index.esm.9250e631.js";import"./index.238261e4.js";import"./ErrorEmpty.180e4712.js";import"./Pagination.74a4d451.js";import"./ExpandLeftIcon.47e8a4cf.js";import"./useTranslation.6be11027.js";import"./SearchInput.8904345c.js";import"./companyActions.c8621c99.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";const re=C.forwardRef(({name:l,onChange:u,onBlur:o,value:n,placeholder:j,watch:g,companyKey:d},_)=>{const[r,x]=b.exports.useState(""),m=z(r,1e3),a=g(d),{fetchNextPage:f,hasNextPage:y,isError:S,isSuccess:t,isLoading:c,data:p,isFetchingNextPage:P}=E(["fetch_select_project_by_company",m,a==null?void 0:a.value],({pageParam:i=1})=>W({current:i,search:m,value:n==null?void 0:n.value,company:a==null?void 0:a.value,pageSize:15}),{enabled:!1,cacheTime:0,refetchOnMount:!1,refetchOnWindowFocus:!1,getNextPageParam:i=>k(i),getPreviousPageParam:i=>B(i)}),s=K({isSuccess:t,data:p!=null?p:{pages:[],pageParams:[]},key:"projects",returnList:i=>({label:i.name,value:i.id})});return e(L,{name:l,ref:_,onChange:u,onBlur:o,value:n,onInputChange:x,isLoading:P||c,isClearable:!0,noOptionsMessage:({inputValue:i})=>e("div",{children:"Tidak ada pilihan"}),loadingMessage:({inputValue:i})=>h(O,{children:[h("div",{children:['Mencari "',i,'"']}),c&&e(D,{size:"xs",width:"100%",isIndeterminate:!0}),S&&e("div",{children:"Error saat mencari data"})]}),options:s,placeholder:e(I,{noOfLines:[1],children:j}),closeMenuOnScroll:!0,isSearchable:!0,onMenuScrollToBottom:()=>{y&&f()},closeMenuOnSelect:!0})}),ae=C.forwardRef(({name:l,onChange:u,onBlur:o,value:n,placeholder:j,watch:g,projectKey:d},_)=>{const[r,x]=b.exports.useState(""),m=z(r,1e3),a=g(d),{fetchNextPage:f,hasNextPage:y,isError:S,isSuccess:t,isLoading:c,data:p}=E(["fetch_select_structure_by_project",m,a==null?void 0:a.value],({pageParam:s=1})=>H({current:s,search:m,value:n==null?void 0:n.value,project:a==null?void 0:a.value,pageSize:15}),{enabled:!!(a!=null&&a.value),refetchOnMount:!1,refetchOnWindowFocus:!1,getNextPageParam:s=>k(s),getPreviousPageParam:s=>B(s)}),P=K({isSuccess:t,data:p!=null?p:{pages:[],pageParams:[]},key:"structures",returnList:s=>({label:s.name,value:s.uuid})});return e(L,{name:l,ref:_,onChange:u,onBlur:o,value:n,onInputChange:x,isLoading:c,isClearable:!0,noOptionsMessage:({inputValue:s})=>e("div",{children:"Tidak ada pilihan"}),loadingMessage:({inputValue:s})=>h(O,{children:[h("div",{children:['Mencari "',s,'"']}),c&&e(D,{size:"xs",width:"100%",isIndeterminate:!0}),S&&e("div",{children:"Error saat mencari data"})]}),options:P,placeholder:e(I,{noOfLines:[1],children:j}),closeMenuOnScroll:!0,isSearchable:!0,onMenuScrollToBottom:()=>{y&&f()},closeMenuOnSelect:!0})}),te=()=>{const{control:l,formState:u,watch:o,setValue:n}=Y();return b.exports.useEffect(()=>{n("project",null),n("structures",null)},[o("company")]),b.exports.useEffect(()=>{n("structures",null)},[o("project")]),h(Q,{templateColumns:{base:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)"},gap:5,children:[e(M,{children:e(v,{placeholder:"-- Company --",control:l,name:"company",formState:u,label:"Company",id:"company",rules:{required:{value:!0,message:"Dibutuhkan"}},children:e(T,{children:e(X,{})})})}),e(M,{children:e(v,{placeholder:"-- Project --",control:l,name:"project",formState:u,label:"Project",id:"project",watch:o,rules:{required:{value:!0,message:"Dibutuhkan"}},children:e(T,{children:e(re,{companyKey:"company"})})})}),e(M,{children:e(v,{placeholder:"-- Company Structures --",control:l,name:"structures",formState:u,label:"Company Structures",id:"structures",watch:o,rules:{required:{value:!0,message:"Dibutuhkan"}},children:e(T,{children:e(ae,{projectKey:"project"})})})}),e(M,{children:e(v,{placeholder:"-- Pilih Status Pertanyaan --",control:l,name:"project_status",formState:u,label:"Status Pertanyaan",id:"project_status",rules:{required:{value:!1,message:"Dibutuhkan"}},children:e(T,{children:e(N,{type_:"QUESTION_STATUS"})})})}),e(M,{children:e(v,{placeholder:"-- Project Type --",control:l,name:"project_type",formState:u,label:"Project Type",id:"project_type",children:e(T,{children:e(N,{type_:"PROJECT_TYPE"})})})})]})},Be=()=>{var f,y,S;const[l,u]=b.exports.useState({}),[o,n]=b.exports.useState({company:null,project:null,structures:null,project_type:null,project_status:null}),{setPagination:j,searchValue:g,pagination:d,handleSearch:_}=J(),{data:r,isLoading:x}=R(["report",{searchValue:g,...d,...o}],()=>A({pageSize:d.pageSize,current:d.pageIndex+1,search:g,project_id:o.project,project_type:o.project_type,project_status:o.project_status,company_id:o.company,structure_id:o.structures}),{keepPreviousData:!1}),m=t=>{var c,p,P,s,i;n({structures:(c=t.structures)==null?void 0:c.value,company:(p=t.company)==null?void 0:p.value,project:(P=t.project)==null?void 0:P.value,project_type:(s=t.project_type)==null?void 0:s.value,project_status:(i=t.project_status)==null?void 0:i.value})},a=C.useMemo(()=>[{id:"No",header:"No",accessorFn:(t,c)=>c+1},{id:"Pertanyaan",header:"Pertanyaan",accessorKey:"name"},{id:"Status",header:"Status",accessorKey:"status"},{id:"Jawaban",header:"Jawaban",accessorKey:"full_name"},{id:"Jawaban tambahan",header:"Jawaban tambahan"},{id:"Tanggal Terjawab",header:"Tanggal Terjawab",accessorKey:"answered_at",cell:({row:t})=>{var c;return $((c=t.original)==null?void 0:c.answered_at).format("DD MMMM YYYY")}}],[]);return h(V,{title:"Report Questionaire",children:[e(w,{label:"Report Questionaire"}),e(q,{}),e(F,{x:6,y:6,children:h(U,{onSubmit:m,id:"form-filter-report-questioner",children:[e(te,{}),e(ee,{mt:5,leftIcon:e(Z,{}),type:"submit",children:"Filter"})]})}),e(F,{x:0,y:6,children:e(G,{enableResizeColumn:!1,useSearchInput:!0,loading:x,onSearch:_,rowKey:(t,c,p)=>t==null?void 0:t.id,onChangeTable:j,onCheckboxChange:u,pagination:{pageIndex:Number((f=r==null?void 0:r.page)!=null?f:0)-1,pageSize:Number((y=r==null?void 0:r.page_size)!=null?y:10)},pageCount:Number((S=r==null?void 0:r.page_count)!=null?S:0),rowSelectionProps:l,totalRecords:r==null?void 0:r.total,data:(r==null?void 0:r.projects)||[],columns:a})})]})};export{Be as default};
