import{E as z}from"./ExpandLeftIcon.bf57eb47.js";import{E as j}from"./ExpandRightIcon.3b8cbe09.js";import{z as C,R as _,E as y,a as e,y as F,U as B,r as S,an as D,j as s,I as M,B as b,F as x,T as R}from"./index.990a5e8d.js";import{u as T}from"./useTranslation.0fd06a78.js";import{h as A}from"./index.esm.86199dec.js";import{I as u}from"./index.esm.27876472.js";var H=(...t)=>t.filter(Boolean).join(" "),O=t=>t?"":void 0;function U(t,l){const n={},a={};for(const[o,r]of Object.entries(t))l.includes(o)?n[o]=r:a[o]=r;return[n,a]}var w=C(function(l,n){const{children:a,placeholder:o,className:r,...c}=l;return _.createElement(y.select,{...c,ref:n,className:H("chakra-select",r)},o&&e("option",{value:"",children:o}),a)});w.displayName="SelectField";var E=C((t,l)=>{var n;const a=F("Select",t),{rootProps:o,placeholder:r,icon:c,color:d,height:m,h,minH:p,minHeight:v,iconColor:f,iconSize:i,...L}=B(t),[g,Z]=U(L,D),I=A(Z),k={width:"100%",height:"fit-content",position:"relative",color:d},N={paddingEnd:"2rem",...a.field,_focus:{zIndex:"unset",...(n=a.field)==null?void 0:n._focus}};return _.createElement(y.div,{className:"chakra-select__wrapper",__css:k,...g,...o},e(w,{ref:l,height:h!=null?h:m,minH:p!=null?p:v,placeholder:r,...I,__css:N,children:t.children}),e(P,{"data-disabled":O(I.disabled),...(f||d)&&{color:f||d},__css:a.icon,...i&&{fontSize:i},children:c}))});E.displayName="Select";var V=t=>e("svg",{viewBox:"0 0 24 24",...t,children:e("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),W=y("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),P=t=>{const{children:l=e(V,{}),...n}=t,a=S.exports.cloneElement(l,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e(W,{...n,className:"chakra-select__icon-wrapper",children:S.exports.isValidElement(l)?a:null})};P.displayName="SelectIcon";const Y=({...t})=>s(M,{...t,children:[e("path",{d:"M6 12L5.29289 12.7071L4.58579 12L5.29289 11.2929L6 12ZM11.2929 18.7071L5.29289 12.7071L6.70711 11.2929L12.7071 17.2929L11.2929 18.7071ZM5.29289 11.2929L11.2929 5.29289L12.7071 6.70711L6.70711 12.7071L5.29289 11.2929Z",fill:"currentColor"}),e("path",{d:"M12 12L11.2929 12.7071L10.5858 12L11.2929 11.2929L12 12ZM17.2929 18.7071L11.2929 12.7071L12.7071 11.2929L18.7071 17.2929L17.2929 18.7071ZM11.2929 11.2929L17.2929 5.29289L18.7071 6.70711L12.7071 12.7071L11.2929 11.2929Z",fill:"currentColor"})]}),q=({...t})=>s(M,{children:[e("path",{d:"M18 12L18.7071 12.7071L19.4142 12L18.7071 11.2929L18 12ZM12.7071 18.7071L18.7071 12.7071L17.2929 11.2929L11.2929 17.2929L12.7071 18.7071ZM18.7071 11.2929L12.7071 5.29289L11.2929 6.70711L17.2929 12.7071L18.7071 11.2929Z",fill:"currentColor"}),e("path",{d:"M12 12L12.7071 12.7071L13.4142 12L12.7071 11.2929L12 12ZM6.70711 18.7071L12.7071 12.7071L11.2929 11.2929L5.29289 17.2929L6.70711 18.7071ZM12.7071 11.2929L6.70711 5.29289L5.29289 6.70711L11.2929 12.7071L12.7071 11.2929Z",fill:"currentColor"})]}),ee=({current:t,total:l,currentSize:n=0,totalRecords:a=10,disableFirst:o=!1,disablePrev:r=!1,disableNext:c=!1,disableLast:d=!1,onChangePageSize:m,onSelectFirstPage:h,onSelectLastPage:p,onSelectNextPage:v,onSelectPrevPage:f})=>{const{t:i}=T(["table"]);return e(b,{width:"100%",position:"relative",children:s(x,{alignItems:"center",flexDirection:{base:"column",md:"row"},children:[e(b,{margin:{md:"0 auto"},children:s(x,{alignItems:"center",gap:1,children:[e(u,{"aria-label":"Page end left",icon:e(Y,{}),fontSize:"20px",disabled:o,onClick:h,variant:"unstyled"}),e(u,{"aria-label":"Page left",icon:e(z,{}),disabled:r,onClick:f,fontSize:"20px",variant:"unstyled"}),e(u,{"aria-label":"Page right",disabled:c,onClick:v,icon:e(j,{}),fontSize:"20px",variant:"unstyled"}),e(u,{"aria-label":"Page end right",disabled:d,onClick:p,icon:e(q,{}),fontSize:"20px",variant:"unstyled"})]})}),e(b,{position:{base:"relative",md:"absolute"},right:{base:0,md:6},children:s(x,{gap:3,alignItems:"center",width:{base:"100%",md:"auto"},children:[s(R,{width:"100%",children:[i("page")," ",t," ",i("of")," ",l]}),e(E,{variant:"unstyled",value:n,onChange:m,children:Array.from(new Set([10,20,30,40,50,a])).map((L,g)=>s("option",{value:L,children:[i("show")," ",g===5?i("all"):L," Data"]},L))})]})})]})})};export{ee as P};
