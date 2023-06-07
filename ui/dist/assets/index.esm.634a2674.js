import{r as u,W as _,z as V,G as N,Z as j,X as M,R as g,H as b,a as m,j as A,h as D,$ as U}from"./index.94f4ac20.js";function $(t,e){if(t!=null){if(typeof t=="function"){t(e);return}try{t.current=e}catch{throw new Error(`Cannot assign value '${e}' to ref '${t}'`)}}}function H(...t){return e=>{t.forEach(n=>{$(n,e)})}}function L(...t){return u.exports.useMemo(()=>H(...t),t)}function Q(t){const{value:e,defaultValue:n,onChange:o,shouldUpdate:s=(c,y)=>c!==y}=t,a=_(o),i=_(s),[d,p]=u.exports.useState(n),l=e!==void 0,r=l?e:d,h=_(c=>{const f=typeof c=="function"?c(r):c;!i(r,f)||(l||p(f),a(f))},[l,a,r,i]);return[r,h]}var v=(...t)=>t.filter(Boolean).join(" "),C=t=>t?"":void 0,[F,O]=V({strict:!1,name:"ButtonGroupContext"});function x(t){const{children:e,className:n,...o}=t,s=u.exports.isValidElement(e)?u.exports.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=v("chakra-button__icon",n);return g.createElement(b.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...o,className:a},s)}x.displayName="ButtonIcon";function B(t){const{label:e,placement:n,spacing:o="0.5rem",children:s=m(U,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...d}=t,p=v("chakra-button__spinner",a),l=n==="start"?"marginEnd":"marginStart",r=u.exports.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[l]:e?o:0,fontSize:"1em",lineHeight:"normal",...i}),[i,e,l,o]);return g.createElement(b.div,{className:p,...d,__css:r},s)}B.displayName="ButtonSpinner";function W(t){const[e,n]=u.exports.useState(!t);return{ref:u.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}var k=N((t,e)=>{const n=O(),o=j("Button",{...n,...t}),{isDisabled:s=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:d,leftIcon:p,rightIcon:l,loadingText:r,iconSpacing:h="0.5rem",type:c,spinner:y,spinnerPlacement:f="start",className:S,as:E,...P}=M(t),T=u.exports.useMemo(()=>{const w={...o==null?void 0:o._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...o,...!!n&&{_focus:w}}},[o,n]),{ref:z,type:G}=W(E),R={rightIcon:l,leftIcon:p,iconSpacing:h,children:d};return g.createElement(b.button,{disabled:s||a,ref:L(e,z),as:E,type:c!=null?c:G,"data-active":C(i),"data-loading":C(a),__css:T,className:v("chakra-button",S),...P},a&&f==="start"&&m(B,{className:"chakra-button__spinner--start",label:r,placement:"start",spacing:h,children:y}),a?r||g.createElement(b.span,{opacity:0},m(I,{...R})):m(I,{...R}),a&&f==="end"&&m(B,{className:"chakra-button__spinner--end",label:r,placement:"end",spacing:h,children:y}))});k.displayName="Button";function I(t){const{leftIcon:e,rightIcon:n,children:o,iconSpacing:s}=t;return A(D,{children:[e&&m(x,{marginEnd:s,children:e}),o,n&&m(x,{marginStart:s,children:n})]})}var X={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},Z={horizontal:t=>({"& > *:not(style) ~ *:not(style)":{marginStart:t}}),vertical:t=>({"& > *:not(style) ~ *:not(style)":{marginTop:t}})},q=N(function(e,n){const{size:o,colorScheme:s,variant:a,className:i,spacing:d="0.5rem",isAttached:p,isDisabled:l,orientation:r="horizontal",...h}=e,c=v("chakra-button__group",i),y=u.exports.useMemo(()=>({size:o,colorScheme:s,variant:a,isDisabled:l}),[o,s,a,l]);let f={display:"inline-flex",...p?X[r]:Z[r](d)};const S=r==="vertical";return g.createElement(F,{value:y},g.createElement(b.div,{ref:n,role:"group",__css:f,className:c,"data-attached":p?"":void 0,"data-orientation":r,flexDir:S?"column":void 0,...h}))});q.displayName="ButtonGroup";var J=N((t,e)=>{const{icon:n,children:o,isRound:s,"aria-label":a,...i}=t,d=n||o,p=u.exports.isValidElement(d)?u.exports.cloneElement(d,{"aria-hidden":!0,focusable:!1}):null;return m(k,{padding:"0",borderRadius:s?"full":void 0,ref:e,"aria-label":a,...i,children:p})});J.displayName="IconButton";export{k as B,J as I,H as m,Q as u};
