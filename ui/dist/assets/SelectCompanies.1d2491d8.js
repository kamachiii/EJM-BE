import{R as M,r as b,a as r,j as i,t as N,am as y}from"./index.4b216aca.js";import{u as C,a as j,G as w,b as G}from"./useSelectDataMapper.6a9474e4.js";import{u as I}from"./useDebounce.4c410466.js";import{g as L}from"./companyActions.44718dbc.js";import{S as O}from"./select.7028a93f.js";const E=M.forwardRef(({name:o,onChange:c,onBlur:u,value:a,placeholder:m},g)=>{const[p,l]=b.exports.useState(""),s=I(p,1e3),{fetchNextPage:d,hasNextPage:h,isError:P,isSuccess:S,isLoading:n,data:t,isFetchingNextPage:f}=C(["fetch_select_company",s,a],({pageParam:e=1})=>L({current:e,search:s,value:a==null?void 0:a.value,pageSize:15}),{getNextPageParam:e=>w(e),getPreviousPageParam:e=>G(e)}),x=j({isSuccess:S,data:t!=null?t:{pages:[],pageParams:[]},key:"company",returnList:e=>({label:e.name,value:e.id})});return r(O,{name:o,ref:g,onChange:c,onBlur:u,value:a,onInputChange:l,isLoading:f||n,isClearable:!0,noOptionsMessage:({inputValue:e})=>r("div",{children:"Tidak ada pilihan"}),loadingMessage:({inputValue:e})=>i(N,{children:[i("div",{children:['Mencari "',e,'"']}),n&&r(y,{size:"xs",width:"100%",isIndeterminate:!0}),P&&r("div",{children:"Error saat mencari data"})]}),options:x,placeholder:m,closeMenuOnScroll:!0,isSearchable:!0,onMenuScrollToBottom:async()=>{h&&await d()},closeMenuOnSelect:!0})});export{E as S};
