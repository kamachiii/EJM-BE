import{aj as s}from"./index.990a5e8d.js";const q=async({pageSize:t,current:e,search:a,value:n,using_active:o=!1})=>{const u=a&&a!=""?`&search=${a}`:"",r=n?`&value=${n}`:"";return(await s.get(`/questions?using_active=${o}&page=${e!=null?e:1}&page_size=${t!=null?t:10}`+u+r)).data},c=async t=>(await s.post("/questions/create",t)).data,l=async t=>(await s.delete(`/questions/by-template/${t}`)).data,d=async t=>(await s.get(`/questions/by-template/${t}`)).data,y=async({pageSize:t,current:e,search:a,value:n,template_id:o})=>{const u=a&&a!=""?`&search=${a}`:"",r=n?`&value=${n}`:"";return(await s.get(`/questions/table/${o}?page=${e!=null?e:1}&page_size=${t!=null?t:10}`+u+r)).data},p=async({data:t,templateId:e})=>(await s.post(`/questions/create/${e}`,t)).data,w=async t=>(await s.delete(`/questions/by-question/${t}`)).data,m=async({id:t,name:e})=>(await s.put(`/questions/by-template/${t}`,{name:e})).data,g=async t=>(await s.get(`/questions/by-question/${t}`)).data,Q=async({id:t,data:e})=>(await s.put(`/questions/by-question/${t}`,e)).data,b=async t=>(await s.get(`/projects/question/answer/${t}`)).data;export{c as a,d as b,p as c,l as d,g as e,b as f,q as g,m as h,w as i,y as j,Q as u};
