import{E as o}from"./ExpandDownIcon.bb84ccf7.js";import{a as n,j as r,F as l}from"./index.2876ce8d.js";import{C as a}from"./index.esm.f2cdd8ab.js";import{I as s}from"./index.esm.6e051443.js";const m=({useCheckbox:t=!1})=>({header:({table:e})=>t&&n(a,{isChecked:e.getIsAllRowsSelected(),isIndeterminate:e.getIsSomeRowsSelected(),onChange:e.getToggleAllRowsSelectedHandler()}),cell:({row:e})=>r(l,{alignItems:"center",gap:3,children:[t&&n(a,{isChecked:e.getIsSelected(),onChange:e.getToggleSelectedHandler()})," ",e.getCanExpand()&&n(s,{variant:"unstyled","aria-label":"Expander",icon:n(o,{}),onClick:e.getToggleExpandedHandler(),sx:{cursor:"pointer"}})," "]})});export{m as g};
