import{r as l,j as t,ar as m,F as d,a as e,B as i}from"./index.5b816863.js";import{u as c,F as s}from"./FormFieldControl.83524802.js";import{F as p}from"./FieldText.51c97a45.js";import{F as u}from"./FieldSwitch.f5382b97.js";import{A as F}from"./AddIcon.165e61b5.js";import{F as f}from"./FormFieldAnswerQuestions.5c2c1de4.js";import{T as h}from"./index.esm.089565e5.js";import{I as b}from"./index.esm.f21969b8.js";const C=()=>{const o=l.exports.useRef(null),{control:a,formState:r}=c();return t(m,{children:[t(d,{gap:5,alignItems:"end",children:[e(s,{control:a,formState:r,label:"Pertanyaan",id:"name",name:"name",rules:{required:{value:!0,message:"Dibutuhkan"}},children:e(p,{})}),e(i,{flex:1,children:e(s,{control:a,formState:r,label:"Wajib",id:"is_mandatory",name:"is_mandatory",children:e(u,{})})}),e(h,{label:"Tambah Pilihan Jawaban",children:e(b,{"aria-label":"add-options",icon:e(F,{fontSize:26}),onClick:()=>{var n;(n=o.current)==null||n.appendQuestions()},variant:"outline",border:"none"})})]}),e(i,{ml:5,children:e(f,{ref:o,parentName:"options",control:a,formState:r})})]})};export{C as F};
