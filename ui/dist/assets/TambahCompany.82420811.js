import{a as f,P as n}from"./PagePadding.45875137.js";import{P as y}from"./PageHeader.d27f8ae4.js";import{a as C}from"./FormFieldControl.83524802.js";import{F as g,a as b}from"./FormFieldCompanyStructure.ecdf99b3.js";import{S as h}from"./SaveIcon.9e5414f7.js";import{c as S}from"./companyActions.c8621c99.js";import{u as F,E as u}from"./useError.d999dd2c.js";import{a4 as P,c as j,ac as v,j as l,a as e,D as d}from"./index.5b816863.js";import{B as x}from"./index.esm.f21969b8.js";import"./ArrowLeftIcon.5e09b122.js";import"./FieldText.51c97a45.js";import"./index.esm.9250e631.js";import"./FileIcon.24dbe717.js";import"./FieldSelect.c1866397.js";import"./select.c640a523.js";import"./slicedToArray.01f71b8b.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.7f1cbbdf.js";import"./index.esm.28b35340.js";import"./AddIcon.165e61b5.js";import"./DeleteIcon.aa14c306.js";const K=()=>{const i=F(S),o=P(),m=j(),c=v();return l(f,{title:"Tambah Company",children:[e(y,{useBackButton:!0,label:"Tambah Company"}),e(n,{x:6,children:l(C,{onSubmit:s=>{const p=s.structures&&s.structures.length>0?s.structures.map(t=>({id:t.id,name:t.structureName,parentId:`${t.parentId}`})):[];if(!s.picture)i.mutate({...s,object_structures:p},{onSuccess:t=>{o({title:"Success",description:t.message,position:"top",status:"success",isClosable:!0}),c.invalidateQueries(["companies"]),m("/master/companies")},onError:t=>u(t,o)});else{const t=new FormData;for(const[r,a]of Object.entries(s))r==="picture"?t.append("file",a==null?void 0:a[0]):r==="structures"?t.append("object_structures_string",JSON.stringify(p)):t.append(r,a);i.mutate(t,{onSuccess:r=>{o({title:"Success",description:r.message,position:"top",status:"success",isClosable:!0}),c.invalidateQueries(["companies"]),m("/master/companies")},onError:r=>u(r,o)})}},id:"form-company",initialValues:{name:null,picture:null,structures:[]},children:[e(g,{}),e(n,{x:0,y:5,children:e(d,{})}),e(b,{}),e(n,{x:0,y:5,children:e(d,{})}),e(x,{mt:5,leftIcon:e(h,{}),type:"submit",isLoading:i.isLoading,children:"Save"})]})})]})};export{K as default};
