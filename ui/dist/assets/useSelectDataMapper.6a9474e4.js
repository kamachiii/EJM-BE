import{ar as v,as as P,at as M,au as x,av as b,aw as m,r as N}from"./index.4b216aca.js";class d extends v{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:P()},t)}getOptimisticResult(e){return e.behavior=P(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var r,a,i,n,u,h;const{state:c}=e,o=super.createResult(e,t),{isFetching:f,isRefetching:l}=o,g=f&&((r=c.fetchMeta)==null||(a=r.fetchMore)==null?void 0:a.direction)==="forward",p=f&&((i=c.fetchMeta)==null||(n=i.fetchMore)==null?void 0:n.direction)==="backward";return{...o,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:M(t,(u=c.data)==null?void 0:u.pages),hasPreviousPage:x(t,(h=c.data)==null?void 0:h.pages),isFetchingNextPage:g,isFetchingPreviousPage:p,isRefetching:l&&!g&&!p}}}function $(s,e,t){const r=b(s,e,t);return m(r,d)}const O=s=>s.page<s.page_count?+s.page+1:!1,Q=s=>s.page<=s.page_count?+s.page-1:!1,R=({isSuccess:s=!1,data:e,key:t="",returnList:r})=>N.exports.useMemo(()=>s?e&&(e==null?void 0:e.pages)&&(e==null?void 0:e.pages.length)>0?[].concat(...e==null?void 0:e.pages.map(a=>a[t].length>0?a[t].map(i=>r&&r(i)):[])):[]:[],[e,s]);export{O as G,R as a,Q as b,$ as u};
