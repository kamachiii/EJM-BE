import{aj as o}from"./index.2876ce8d.js";const d=async t=>(await o.post("/projects",t)).data,i=async({pageSize:t,current:s,search:e,project_type:r,project_status:a,company:c})=>{const n=e&&e!=""?`&search=${e}`:"",$=c?`&company=${c}`:"",u=r?`&project_type=${r}`:"",j=a?`&project_status=${a}`:"";return(await o.get(`/projects?page=${s!=null?s:1}&page_size=${t!=null?t:10}`+n+u+j+$)).data},w=async t=>(await o.get(`/projects/${t}`)).data,l=async({id:t,prjId:s})=>(await o.get(`/projects/questions?structure_id=${t}&project_id=${s}`)).data,_=async t=>(await o.delete(`/projects/${t}`)).data,P=async t=>(await o.post("/projects/questions",t)).data,U=async t=>(await o.post("/projects/question/answer",t)).data,m=async({pageSize:t,current:s,search:e,company:r})=>{const a=e&&e!=""?`&search=${e}`:"";return(await o.get(`/projects/by-company?page=${s!=null?s:1}&page_size=${t!=null?t:10}&company_id=${r}`+a)).data},g=async({pageSize:t,current:s,search:e,project:r})=>{const a=e&&e!=""?`&search=${e}`:"";return(await o.get(`/projects/structure/by-project?page=${s!=null?s:1}&page_size=${t!=null?t:10}&project_id=${r}`+a)).data},Q=async({pageSize:t,current:s,search:e,project_id:r,project_type:a,project_status:c,company_id:n,structure_id:$})=>{const u=e&&e!=""?`&search=${e}`:"",j=c?`&project_status=${c}`:"",q=a?`&project_type=${a}`:"";return(await o.get(`/projects/report/questioner?page=${s!=null?s:1}&page_size=${t!=null?t:10}&project_id=${r}&company_id=${n}&structure_id=${$}`+u+q+j)).data};export{w as a,P as b,d as c,_ as d,U as e,l as f,i as g,m as h,g as i,Q as j};
