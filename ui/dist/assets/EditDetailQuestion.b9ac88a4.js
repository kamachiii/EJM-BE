import{P as S}from"./PageHeader.d27f8ae4.js";import{a as Q}from"./FormFieldControl.83524802.js";import{a as b,P as l}from"./PagePadding.45875137.js";import{S as _}from"./SaveIcon.9e5414f7.js";import{F as q}from"./FormFieldQuestion.6119d880.js";import{u as x,e as B}from"./questionActions.98bb3067.js";import{u as F,E as d}from"./useError.d999dd2c.js";import{aS as I,c as j,a4 as k,ac as C,f as D,j as r,a as o,g as M}from"./index.5b816863.js";import{E as L}from"./ErrorFetching.2a6dc88b.js";import{B as T}from"./index.esm.f21969b8.js";import"./ArrowLeftIcon.5e09b122.js";import"./FieldText.51c97a45.js";import"./index.esm.9250e631.js";import"./FieldSwitch.f5382b97.js";import"./index.esm.10c6c73a.js";import"./index.238261e4.js";import"./AddIcon.165e61b5.js";import"./FormFieldAnswerQuestions.5c2c1de4.js";import"./DeleteIcon.aa14c306.js";import"./FieldSelect.c1866397.js";import"./select.c640a523.js";import"./slicedToArray.01f71b8b.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.7f1cbbdf.js";import"./index.esm.28b35340.js";import"./index.esm.089565e5.js";import"./useTranslation.6be11027.js";const pt=()=>{const{id:i}=I(),c=j(),s=k(),f=C(),g=F(x),v=t=>{var n;const E={...t,is_mandatory:(n=t.is_mandatory)!=null?n:!1,options:t.options&&t.options.length>0?t.options.map(a=>{var m;return{...a,conditions:a.conditions.length>0?a.conditions.map(u=>{var p;return{...u,is_mandatory:(p=u.is_mandatory)!=null?p:!1}}):[],value:(m=a.value)==null?void 0:m.value}}):null};g.mutate({data:E,id:i},{onSuccess:a=>{s({status:"success",title:"Sukses",description:a.message,position:"top",isClosable:!0}),f.invalidateQueries(["questions"]),c(-1)},onError:a=>d(a,s)})},{data:e,isLoading:y,isSuccess:P,isError:h}=D(["detail_question",i],()=>B(i),{enabled:!!i,cacheTime:0,onError:t=>d(t,s),keepPreviousData:!1});return r(b,{title:"Edit Pertanyaan",children:[o(S,{label:"Edit Pertanyaan",useBackButton:!0}),r(l,{x:6,children:[y&&o(M,{}),P&&r(Q,{onSubmit:v,id:"form-questions",initialValues:{name:e.data.name,is_mandatory:e.data.isMandatory,options:e.data.answers&&e.data.answers.map(t=>({name:t.name,value:{label:t.value.toString(),value:t.value},conditions:t.conditions||[]}))},children:[o(q,{}),o(l,{x:6,children:o(T,{type:"submit",leftIcon:o(_,{}),mt:5,children:"Save"})})]}),h&&o(L,{})]})]})};export{pt as default};
