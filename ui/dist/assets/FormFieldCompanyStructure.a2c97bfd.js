import{u as S,F,b as j}from"./FormFieldControl.f97789c6.js";import{F as q}from"./FieldText.471498f7.js";import{F as L}from"./FieldUpload.e9cdc230.js";import{j as d,ap as b,a as n,aq as y,R as T,F as v,T as V,D as f,r as h}from"./index.2876ce8d.js";import{F as G}from"./FieldSelect.bb5f2962.js";import{A as B}from"./AddIcon.21e4e8ec.js";import{P as O}from"./PagePadding.01ff7a41.js";import{D as _}from"./DeleteIcon.d9371cb9.js";import{I as U}from"./index.esm.6e051443.js";import{F as I,a as x,I as z,d as E}from"./index.esm.f54768d8.js";const le=()=>{const{control:e,formState:t}=S();return d(b,{templateColumns:"repeat(1,1fr)",gap:5,children:[n(y,{children:n(F,{control:e,name:"name",formState:t,id:"name",label:"Nama Company",rules:{required:{value:!0,message:"Nama Role Dibutuhkan"}},children:n(q,{})})}),n(y,{children:n(F,{control:e,name:"picture",formState:t,id:"picture",label:"Logo Perusahaan",rules:{required:{value:!1,message:"Upload dibutuhkan"}},children:n(L,{})})})]})},D=({items:e=[],idsToRender:t=[],indentLevel:i=0,onDelete:o})=>{t.length||(t=e.length>0&&e.filter(a=>!a.parentId||a.parentId=="0")||[]);const u=a=>{const c=e.filter(s=>s.parentId===a);return c.length?n(D,{items:e,indentLevel:i+1,onDelete:o,idsToRender:c}):null};return n("ul",{style:{paddingLeft:i>0?20:0},children:t.length>0&&t.map((a,c)=>{var s;return d(T.Fragment,{children:[n("li",{style:{marginBottom:5},children:d(v,{gap:2,alignItems:"center",children:[n(V,{children:(s=a.structureName)!=null?s:a.name}),n(U,{"aria-label":"Delete",variant:"unstyled",onClick:()=>o(a.id),icon:n(_,{fontSize:28,color:"yellow.400"})})]})}),n(O,{x:0,y:2,children:n(f,{})}),u(a.id)]},a.id)})})};let g;const H=new Uint8Array(16);function J(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(H)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function K(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const M=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:M};function Q(e,t,i){if(C.randomUUID&&!t&&!e)return C.randomUUID();e=e||{};const o=e.random||(e.rng||J)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){i=i||0;for(let u=0;u<16;++u)t[i+u]=o[u];return t}return K(o)}const W=[{label:"Root",value:0}],ue=()=>{const{control:e,watch:t}=S(),{append:i,remove:o}=j({control:e,name:"structures"}),[u,a]=h.exports.useState(""),[c,s]=h.exports.useState(null),m=t("structures"),k=m&&m.length>0&&m.map(l=>{var p;return{label:(p=l.structureName)!=null?p:l.name,value:l.id}})||[],N=h.exports.useCallback(l=>a(l.target.value),[]),P=h.exports.useCallback(l=>s(l),[]),R=l=>{const p=m.findIndex(A=>A.id===l);o(p)},w=()=>{i({id:Q(),structureName:u,type:c,parentId:c.value})};return d(b,{templateColumns:"repeat(1,1fr)",gap:5,children:[n(y,{children:d(I,{isRequired:!0,isInvalid:!1,children:[n(x,{children:"Struktur Perusahaan"}),d(v,{gap:2,alignItems:"end",children:[d(I,{children:[n(x,{htmlFor:"structure_name",children:"Nama Struktur"}),n(z,{children:n(E,{id:"structure_name",placeholder:"Input Nama Struktur",type:"text",value:u,onChange:N})})]}),n(G,{options:[...W,...k],value:c,onChange:(l,p)=>P(l),name:"parent",isClearable:!0,id:"parent",label:"Parent"}),n(U,{"aria-label":"Add",onClick:w,children:n(B,{})})]})]})}),n(y,{children:n(D,{items:m,onDelete:R})})]})};export{le as F,ue as a};
