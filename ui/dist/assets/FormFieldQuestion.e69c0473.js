import{r as l,j as t,aq as m,F as d,a as e,B as i}from"./index.b39c6ea3.js";import{u as c,F as s}from"./FormFieldControl.19a1686a.js";import{F as p}from"./FieldText.74f39963.js";import{F as u}from"./FieldSwitch.32a95ff4.js";import{A as F}from"./AddIcon.fa6007a1.js";import{F as f}from"./FormFieldAnswerQuestions.334367ba.js";import{T as h}from"./index.esm.9f3b4800.js";import{I as b}from"./index.esm.bc3a140a.js";const C=()=>{const r=l.exports.useRef(null),{control:a,formState:o}=c();return t(m,{children:[t(d,{gap:5,alignItems:"end",children:[e(s,{control:a,formState:o,label:"Pertanyaan",id:"name",name:"name",rules:{required:{value:!0,message:"Dibutuhkan"}},children:e(p,{})}),e(i,{flex:1,children:e(s,{control:a,formState:o,label:"Wajib",id:"is_mandatory",name:"is_mandatory",children:e(u,{})})}),e(h,{label:"Tambah Pilihan Jawaban",children:e(b,{"aria-label":"add-options",icon:e(F,{fontSize:26}),onClick:()=>{var n;(n=r.current)==null||n.appendQuestions()},variant:"outline",border:"none"})})]}),e(i,{ml:5,children:e(f,{ref:r,parentName:"options",control:a,formState:o})})]})};export{C as F};
