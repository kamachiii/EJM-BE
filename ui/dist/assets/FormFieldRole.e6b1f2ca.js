import{ak as H,f as k,r as E,a as c,j as C,R as I,aq as K,ar as D,D as x}from"./index.5b816863.js";import{u as v,F as g}from"./FormFieldControl.83524802.js";import{F as A}from"./FieldText.51c97a45.js";import{F as M}from"./FieldCustom.e664487c.js";import{F as R}from"./FieldSwitch.f5382b97.js";import{C as F}from"./index.esm.10c6c73a.js";var m=(e=>(e[e.UNCHECKED=0]="UNCHECKED",e[e.CHECKED=1]="CHECKED",e[e.INDETERMINATE=2]="INDETERMINATE",e))(m||{});const T=(e,l,d)=>{const s=e.length>0?e.map(t=>({...t})):[],u=t=>s.length>0?s.find(a=>a.id===t).state:0,n=t=>{const a=l.find(i=>i.id===t),f=l.find(i=>i.id===a.parentId);if(!f)return;const p=l.filter(i=>i.parentId===f.id).map(i=>i.id).map(i=>u(i));p.length===p.filter(i=>i===1).length?s.find(i=>i.id===f.id).state=1:p.length===p.filter(i=>i===0).length?s.find(i=>i.id===f.id).state=0:s.find(i=>i.id===f.id).state=2,n(f.id)},r=t=>{s.find(a=>a.id===t).state=0,l.filter(a=>a.parentId===t).map(a=>a.id).forEach(a=>r(a)),n(t)},o=t=>{s.find(a=>a.id===t).state=1,l.filter(a=>a.parentId===t).map(a=>a.id).forEach(a=>o(a)),n(t)};return u(d)===1?r(d):o(d),s},U=async()=>(await H.get("/menus")).data,w=()=>{const{data:e,isSuccess:l,isLoading:d}=k(["menus"],()=>U(),{refetchOnWindowFocus:!1,refetchIntervalInBackground:!1,refetchOnMount:!1,refetchOnReconnect:!1});return{items:E.exports.useMemo(()=>l?e.data&&e.data.length>0&&e.data.map(u=>({...u,state:m.UNCHECKED})):[],[l,e]),isLoading:d,isSuccess:l}},N=({items:e,getStateForId:l,idsToRender:d=[],indentLevel:s=0,onClick:u=()=>{}})=>{d.length||(d=e.filter(r=>!r.parentId).map(r=>r.id));const n=r=>{const o=e.filter(h=>h.parentId===r);return o.length?c(N,{items:e,idsToRender:o.map(h=>h.id),indentLevel:s+1,onClick:h=>u(h),getStateForId:l}):null};return c("ul",{style:{paddingLeft:s>0?20:0},children:d.map(r=>{const o=e.find(t=>t.id===r),h=l(r);return C(I.Fragment,{children:[c("li",{children:c(F,{onChange:()=>u(o.id),isChecked:h===m.CHECKED,isIndeterminate:h===m.INDETERMINATE,children:o.name})}),n(o.id)]},o.id)})})},S=({value:e,onChange:l,items:d=[]})=>{const s=e,{isLoading:u}=w(),n=E.exports.useCallback(r=>s&&s.length>0?s.find(o=>o.id===r).state:m.UNCHECKED,[s]);return u?c("div",{children:"Loading..."}):c(N,{items:d,getStateForId:n,onClick:r=>{l(T(s,d,r))}})},P=({items:e=[]})=>{const{control:l,formState:d,setValue:s,watch:u}=v(),n=u("menus"),[r,o]=I.useState(!1);E.exports.useEffect(()=>{const t=n&&n.length>0?n.map(a=>({...a,state:r?m.CHECKED:m.UNCHECKED})):e;s("menus",t)},[r]);const h=t=>o(!r);return c(E.exports.Fragment,{children:C(K,{templateColumns:{base:"repeat(1,1fr)",md:"repeat(2,1fr)"},gap:5,children:[C(D,{gap:5,display:"flex",flexDirection:"column",children:[c(g,{control:l,name:"name",formState:d,id:"name",label:"Nama Role",rules:{required:{value:!0,message:"Nama Role Dibutuhkan"}},children:c(A,{})}),c(g,{control:l,name:"active",formState:d,id:"active",label:"Active",children:c(R,{})})]}),C(D,{children:[c(F,{onChange:h,isChecked:n&&n.length>0&&n.filter(t=>t.state===m.CHECKED).length===n.length,isIndeterminate:n&&n.length>0&&n.filter(t=>t.state===m.UNCHECKED).length>0&&n&&n.filter(t=>t.state===m.UNCHECKED).length<n.length,children:"Pilih Semua"}),c(x,{}),c(g,{control:l,name:"menus",formState:d,id:"menus",label:"Hak Akses Role",children:c(M,{children:c(S,{items:e||[]})})})]})]})})};export{m as C,P as F,w as u};
