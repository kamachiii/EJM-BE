import{ak as t}from"./index.0e24cb86.js";const d=async()=>(await t.get("/menus")).data,l=async({pageSize:e,current:a,search:s,value:n})=>{const r=s&&s!=""?`&search=${s}`:"",u=n?`&value=${n}`:"";return(await t.get(`/menus/paginated?page=${a!=null?a:1}&page_size=${e!=null?e:10}`+r+u)).data},q=async({data:e=[]})=>(await t.post("/menus/create-bulk",{data:e})).data,m=async e=>(await t.delete(`/menus/${e}`)).data,y=async({ids:e})=>(await t.delete("/menus/bulk",{data:{ids:e}})).data,i=async({id:e,data:a})=>(await t.put(`/menus/${e}`,a)).data;export{y as a,d as b,q as c,m as d,l as g,i as u};
