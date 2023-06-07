import{z as y,y as b,U as v,r as d,R as n,E as m,a as s,j as f}from"./index.990a5e8d.js";import{u as F}from"./index.esm.5f476ef3.js";import{F as C,a as E,I,c as N,f as P,g as j}from"./index.esm.86199dec.js";var M=(...t)=>t.filter(Boolean).join(" "),k=t=>t?"":void 0,S=y(function(a,r){const e=b("Switch",a),{spacing:o="0.5rem",children:h,...i}=v(a),{state:c,getInputProps:p,getCheckboxProps:u,getRootProps:l,getLabelProps:_}=F(i),g=d.exports.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...e.container}),[e.container]),x=d.exports.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...e.track}),[e.track]),w=d.exports.useMemo(()=>({userSelect:"none",marginStart:o,...e.label}),[o,e.label]);return n.createElement(m.label,{...l(),className:M("chakra-switch",a.className),__css:g},s("input",{className:"chakra-switch__input",...p({},r)}),n.createElement(m.span,{...u(),className:"chakra-switch__track",__css:x},n.createElement(m.span,{__css:e.thumb,className:"chakra-switch__thumb","data-checked":k(c.isChecked),"data-hover":k(c.isHovered)})),h&&n.createElement(m.span,{className:"chakra-switch__label",..._(),__css:w},h))});S.displayName="Switch";const R=({id:t,placeholder:a,label:r,isRequired:e=!1,errorMessage:o,type:h="text",leftElement:i,rightElement:c,isInvalid:p=!1,formState:u,...l})=>f(C,{isRequired:e,isInvalid:p,children:[r&&r!==""?s(E,{htmlFor:t,children:r}):null,f(I,{children:[i&&s(N,{pointerEvents:"none",alignItems:"center",children:i}),s(S,{...l,isChecked:Boolean(l.value)}),c&&s(P,{alignItems:"center",children:c})]}),s(j,{children:o})]}),B=n.memo(R,(t,a)=>t.formState.isDirty===a.formState.isDirty);export{B as F};
