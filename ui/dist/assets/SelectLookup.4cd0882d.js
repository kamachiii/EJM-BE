import{aj as b,R as k,r as y,a as n,j as d,t as L,am as N}from"./index.6a975b74.js";import{u as $,a as j,G as v,b as w}from"./useSelectDataMapper.16bc1769.js";import{u as q}from"./useDebounce.64d51988.js";import{S as G}from"./select.168c276c.js";const I=async({pageSize:t,current:s,search:r,value:a,type:i})=>{const o=r&&r!=""?`&search=${r}`:"",c=a?`&value=${a}`:"";return(await b.get(`/master-lookup?type=${i}&page=${s!=null?s:1}&page_size=${t!=null?t:10}`+o+c)).data},E=k.forwardRef(({name:t,onChange:s,onBlur:r,value:a,placeholder:i,type_:o=""},c)=>{const[u,m]=y.exports.useState(""),g=q(u,1e3),{fetchNextPage:h,hasNextPage:P,isError:f,isSuccess:x,isLoading:p,data:l,isFetchingNextPage:S}=$(["fetch_select_lookup",g,o,a],({pageParam:e=1})=>I({current:e,search:g,value:a==null?void 0:a.value,type:o,pageSize:15}),{getNextPageParam:e=>v(e),getPreviousPageParam:e=>w(e)}),M=j({isSuccess:x,data:l!=null?l:{pages:[],pageParams:[]},key:"lookup",returnList:e=>({label:e.label,value:e.value})});return n(G,{name:t,ref:c,onChange:s,onBlur:r,value:a,onInputChange:m,isLoading:S||p,isClearable:!0,noOptionsMessage:({inputValue:e})=>n("div",{children:"Tidak ada pilihan"}),loadingMessage:({inputValue:e})=>d(L,{children:[d("div",{children:['Mencari "',e,'"']}),p&&n(N,{size:"xs",width:"100%",isIndeterminate:!0}),f&&n("div",{children:"Error saat mencari data"})]}),options:M,placeholder:i,closeMenuOnScroll:!0,isSearchable:!0,onMenuScrollToBottom:async()=>{P&&await h()},closeMenuOnSelect:!0})});export{E as S};
