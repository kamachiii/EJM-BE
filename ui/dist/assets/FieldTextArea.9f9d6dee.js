import{z as h,X as F,U as g,R as c,E as y,j as u,a as o}from"./index.d5331035.js";import{h as d,F as T,a as j,g as E}from"./index.esm.366f799e.js";var S=(...e)=>e.filter(Boolean).join(" ");function k(e,t=[]){const a=Object.assign({},e);for(const r of t)r in a&&delete a[r];return a}var p=["h","minH","height","minHeight"],l=h((e,t)=>{const a=F("Textarea",e),{className:r,rows:s,...n}=g(e),i=d(n),m=s?k(a,p):a;return c.createElement(y.textarea,{ref:t,rows:s,...i,className:S("chakra-textarea",r),__css:m})});l.displayName="Textarea";const v=({id:e,placeholder:t,label:a,isRequired:r=!1,errorMessage:s,type:n="text",leftElement:i,rightElement:m,isInvalid:f=!1,formState:C,...x})=>u(T,{isRequired:r,isInvalid:f,children:[o(j,{htmlFor:e,children:a}),o(l,{id:e,size:"md",placeholder:t!=null?t:`Input ${a}`,...x}),o(E,{children:s})]}),w=c.memo(v,(e,t)=>e.formState.isDirty===t.formState.isDirty);export{w as F};
