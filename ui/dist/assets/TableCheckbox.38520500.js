import{a as n,I as a,j as l,F as o}from"./index.990a5e8d.js";import{C as r}from"./index.esm.5f476ef3.js";import{I as s}from"./index.esm.27876472.js";const c=({...t})=>n(a,{...t,children:n("path",{d:"M12 15L12.7071 15.7071L12 16.4142L11.2929 15.7071L12 15ZM18.7071 9.70711L12.7071 15.7071L11.2929 14.2929L17.2929 8.29289L18.7071 9.70711ZM11.2929 15.7071L5.29289 9.70711L6.70711 8.29289L12.7071 14.2929L11.2929 15.7071Z",fill:"currentColor"})}),L=({useCheckbox:t=!1})=>({header:({table:e})=>t&&n(r,{isChecked:e.getIsAllRowsSelected(),isIndeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler()}),cell:({row:e})=>l(o,{alignItems:"center",gap:3,children:[t&&n(r,{isChecked:e.getIsSelected(),onChange:e.getToggleSelectedHandler()})," ",e.getCanExpand()&&n(s,{variant:"unstyled","aria-label":"Expander",icon:n(c,{}),onClick:e.getToggleExpandedHandler(),sx:{cursor:"pointer"}})," "]})});export{L as g};
