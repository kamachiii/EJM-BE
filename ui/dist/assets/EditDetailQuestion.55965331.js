import{P as Q}from"./PageHeader.6ac11668.js";import{a as S}from"./FormFieldControl.8ea8ed9e.js";import{a as b,P as l}from"./PagePadding.be31ae21.js";import{S as _}from"./SaveIcon.95e51f4c.js";import{F as q}from"./FormFieldQuestion.86b727dd.js";import{u as x,e as B}from"./questionActions.3af83eea.js";import{u as F,E as d}from"./useError.dd598f5e.js";import{aR as I,c as j,a2 as k,aa as C,f as D,j as r,a as o,g as M}from"./index.990a5e8d.js";import{E as L}from"./ErrorFetching.fd4f3ed6.js";import{B as T}from"./index.esm.27876472.js";import"./ArrowLeftIcon.e64cc763.js";import"./FieldText.f2654eae.js";import"./index.esm.86199dec.js";import"./FieldSwitch.41a739b1.js";import"./index.esm.5f476ef3.js";import"./index.esm.c75d359e.js";import"./index.238261e4.js";import"./AddIcon.c6d76087.js";import"./FormFieldAnswerQuestions.46a19ab1.js";import"./DeleteIcon.d5ab39ed.js";import"./FieldSelect.df0cff29.js";import"./select.1937eae9.js";import"./slicedToArray.925b8532.js";import"./index.esm.3fa18c93.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.3c7789c6.js";import"./useTranslation.0fd06a78.js";const pt=()=>{const{id:i}=I(),c=j(),s=k(),f=C(),g=F(x),v=t=>{var n;const E={...t,is_mandatory:(n=t.is_mandatory)!=null?n:!1,options:t.options&&t.options.length>0?t.options.map(a=>{var m;return{...a,conditions:a.conditions.length>0?a.conditions.map(u=>{var p;return{...u,is_mandatory:(p=u.is_mandatory)!=null?p:!1}}):[],value:(m=a.value)==null?void 0:m.value}}):null};g.mutate({data:E,id:i},{onSuccess:a=>{s({status:"success",title:"Sukses",description:a.message,position:"top",isClosable:!0}),f.invalidateQueries(["questions"]),c(-1)},onError:a=>d(a,s)})},{data:e,isLoading:y,isSuccess:P,isError:h}=D(["detail_question",i],()=>B(i),{enabled:!!i,cacheTime:0,onError:t=>d(t,s),keepPreviousData:!1});return r(b,{title:"Edit Pertanyaan",children:[o(Q,{label:"Edit Pertanyaan",useBackButton:!0}),r(l,{x:6,children:[y&&o(M,{}),P&&r(S,{onSubmit:v,id:"form-questions",initialValues:{name:e.data.name,is_mandatory:e.data.isMandatory,options:e.data.answers&&e.data.answers.map(t=>({name:t.name,value:{label:t.value.toString(),value:t.value},conditions:t.conditions||[]}))},children:[o(q,{}),o(l,{x:6,children:o(T,{type:"submit",leftIcon:o(_,{}),mt:5,children:"Save"})})]}),h&&o(L,{})]})]})};export{pt as default};
