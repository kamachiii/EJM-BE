import{a as l,P as p}from"./PagePadding.3162fb4c.js";import{P as u}from"./PageHeader.36376405.js";import{a as c}from"./FormFieldControl.19a1686a.js";import{F as d}from"./FormFieldUser.c3282fe7.js";import{S as f}from"./SaveIcon.d6527e21.js";import{c as b}from"./usersActions.afade781.js";import{u as g,E as h}from"./useError.bf061f06.js";import{a2 as S,c as U,j as i,a as r,D as F,F as P}from"./index.b39c6ea3.js";import{B as j}from"./index.esm.bc3a140a.js";import"./ArrowLeftIcon.9106a900.js";import"./FieldText.74f39963.js";import"./index.esm.935ed599.js";import"./FieldTextArea.d1bc0287.js";import"./EditIcon.4927a089.js";import"./useSelectDataMapper.cbfbc37d.js";import"./useDebounce.80f57ecc.js";import"./rolesActions.901136a0.js";import"./select.e513962c.js";import"./slicedToArray.99d802c0.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.54c30076.js";import"./index.esm.ccce45eb.js";import"./FieldCustom.96e079ec.js";import"./EyeIcon.8dcba087.js";import"./useTranslation.2f82e0db.js";import"./index.esm.9f3b4800.js";const X=()=>{const a=g(b),s=S(),m=U();return i(l,{title:"Tambah User",children:[r(u,{label:"Tambah User",useBackButton:!0}),r(F,{}),r(p,{x:6,y:6,children:i(c,{onSubmit:n=>{const e=new FormData;for(const[t,o]of Object.entries(n))t==="role"?e.append("roleId",o==null?void 0:o.value):e.append(t,o);a.mutate(e,{onSuccess:t=>{s({position:"top",title:"Success",description:t.message,isClosable:!0}),m("/management/users")},onError:t=>h(t,s)})},id:"form-user",initialValues:{username:null,file:null,full_name:null,email:null,role:null,password:null,address:null},children:[r(d,{}),r(P,{mt:5,justifyContent:"end",children:r(j,{type:"submit",leftIcon:r(f,{}),isLoading:a.isLoading,children:"Save"})})]})})]})};export{X as default};
