import{a as S,P as m}from"./PagePadding.01ff7a41.js";import{P as b}from"./PageHeader.af1fedb8.js";import{a as h}from"./FormFieldControl.f97789c6.js";import{F as P,a as F}from"./FormFieldCompanyStructure.a2c97bfd.js";import{S as j}from"./SaveIcon.542131df.js";import{u as v,b as x}from"./companyActions.e1c0b8bf.js";import{u as D,E as f}from"./useError.427e104a.js";import{a2 as I,aQ as Q,c as B,aa as L,f as _,j as p,a as e,h as N,D as y}from"./index.2876ce8d.js";import{E as k}from"./ErrorFetching.e03724a6.js";import{B as M}from"./index.esm.6e051443.js";import"./ArrowLeftIcon.de388376.js";import"./FieldText.471498f7.js";import"./index.esm.f54768d8.js";import"./FieldUpload.e9cdc230.js";import"./FileIcon.25600252.js";import"./FieldSelect.bb5f2962.js";import"./select.c489a6c9.js";import"./slicedToArray.84b5158f.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.ae337b1d.js";import"./index.esm.d399955a.js";import"./AddIcon.21e4e8ec.js";import"./DeleteIcon.d9371cb9.js";import"./useTranslation.251d09d2.js";const nt=()=>{const n=D(v),o=I(),{id:a}=Q(),u=B(),c=L(),{data:d,isLoading:g,isSuccess:C,isError:E}=_(["detail_company",a],()=>x(+a),{enabled:!!a,cacheTime:0});return p(S,{title:"Edit Company",children:[e(b,{useBackButton:!0,label:"Edit Company"}),p(m,{x:6,children:[g&&e(N,{}),E&&e(k,{}),C&&p(h,{onSubmit:r=>{const l=r.structures&&r.structures.length>0?r.structures.map(t=>{var s;return{id:t.id,name:(s=t.structureName)!=null?s:t.name,parentId:`${t.parentId}`}}):[];if(!r.picture)n.mutate({id:a,payload:{...r,object_structures:l}},{onSuccess:t=>{o({title:"Success",description:t.message,position:"top",status:"success",isClosable:!0}),c.invalidateQueries(["companies"]),u("/master/companies")},onError:t=>f(t,o)});else{const t=new FormData;for(const[s,i]of Object.entries(r))s==="picture"?t.append("file",i==null?void 0:i[0]):s==="structures"?t.append("object_structures_string",JSON.stringify(l)):t.append(s,i);n.mutate({id:a,payload:t},{onSuccess:s=>{o({title:"Success",description:s.message,position:"top",status:"success",isClosable:!0}),c.invalidateQueries(["companies"]),u("/master/companies")},onError:s=>f(s,o)})}},id:"form-company",initialValues:{name:d.data.name,picture:null,structures:d.data.structures},children:[e(P,{}),e(m,{x:0,y:5,children:e(y,{})}),e(F,{}),e(m,{x:0,y:5,children:e(y,{})}),e(M,{mt:5,leftIcon:e(j,{}),type:"submit",isLoading:n.isLoading,children:"Save"})]})]})]})};export{nt as default};
