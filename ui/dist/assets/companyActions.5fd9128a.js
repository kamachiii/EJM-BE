import{ak as e}from"./index.94f4ac20.js";const u=async a=>(await e.post("/company",a)).data,d=async({id:a,payload:t})=>(await e.put(`/company/${a}`,t)).data,m=async({pageSize:a,current:t,search:s,value:n,using_active:o=!1})=>{const c=s&&s!=""?`&search=${s}`:"",r=n?`&value=${n}`:"";return(await e.get(`/company?using_active=${o}&page=${t!=null?t:1}&page_size=${a!=null?a:10}`+c+r)).data},$=async a=>(await e.get(`/company/${a}`)).data,l=async a=>(await e.delete(`/company/${a}`)).data,q=async a=>(await e.delete("/company/bulk",{data:{company_ids:a}})).data;export{q as a,$ as b,u as c,l as d,m as g,d as u};
