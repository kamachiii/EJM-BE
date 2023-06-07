import{E as m,x as ke,af as Y,z as Ce,y as xe,U as ge,a as B,r,R as C,S as X,ag as Q,Q as we}from"./index.d5331035.js";import{u as Ee}from"./index.esm.366f799e.js";import{m as ie}from"./index.esm.50eb2b01.js";var Z={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},Se=m("span",{baseStyle:Z});Se.displayName="VisuallyHidden";var Ie=m("input",{baseStyle:Z});Ie.displayName="VisuallyHiddenInput";var le=!1,U=null,x=!1,J=new Set,Pe=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function Le(e){return!(e.metaKey||!Pe&&e.altKey||e.ctrlKey)}function ee(e,a){J.forEach(n=>n(e,a))}function ce(e){x=!0,Le(e)&&(U="keyboard",ee("keyboard",e))}function k(e){U="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(x=!0,ee("pointer",e))}function De(e){e.target===window||e.target===document||(x||(U="keyboard",ee("keyboard",e)),x=!1)}function Fe(){x=!1}function ue(){return U!=="pointer"}function Be(){if(typeof window>"u"||le)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){x=!0,e.apply(this,n)},document.addEventListener("keydown",ce,!0),document.addEventListener("keyup",ce,!0),window.addEventListener("focus",De,!0),window.addEventListener("blur",Fe,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",k,!0),document.addEventListener("pointermove",k,!0),document.addEventListener("pointerup",k,!0)):(document.addEventListener("mousedown",k,!0),document.addEventListener("mousemove",k,!0),document.addEventListener("mouseup",k,!0)),le=!0}function Me(e){Be(),e(ue());const a=()=>e(ue());return J.add(a),()=>{J.delete(a)}}var[Je,_e]=ke({name:"CheckboxGroupContext",strict:!1}),Re=(...e)=>e.filter(Boolean).join(" "),i=e=>e?"":void 0;function c(...e){return function(n){e.some(o=>(o==null||o(n),n==null?void 0:n.defaultPrevented))}}function Ae(...e){return function(n){e.forEach(o=>{o==null||o(n)})}}function Ke(e){return C.createElement(m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e},B("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function He(e){return C.createElement(m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e},B("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function Ne(e){const{isIndeterminate:a,isChecked:n,...o}=e,p=a?He:Ke;return n||a?C.createElement(m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},B(p,{...o})):null}function Ve(e,a=[]){const n=Object.assign({},e);for(const o of a)o in n&&delete n[o];return n}function Ue(e={}){const a=Ee(e),{isDisabled:n,isReadOnly:o,isRequired:p,isInvalid:s,id:h,onBlur:j,onFocus:O,"aria-describedby":g}=a,{defaultChecked:w,isChecked:E,isFocusable:T,onChange:q,isIndeterminate:d,name:S,value:M,tabIndex:_=void 0,"aria-label":I,"aria-labelledby":P,"aria-invalid":f,...G}=e,L=Ve(G,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),D=X(q),R=X(j),A=X(O),[K,fe]=r.exports.useState(!1),[F,H]=r.exports.useState(!1),[W,te]=r.exports.useState(!1),[z,b]=r.exports.useState(!1);r.exports.useEffect(()=>Me(fe),[]);const u=r.exports.useRef(null),[ne,me]=r.exports.useState(!0),[pe,N]=r.exports.useState(!!w),$=E!==void 0,l=$?E:pe,oe=r.exports.useCallback(t=>{if(o||n){t.preventDefault();return}$||N(l?t.target.checked:d?!0:t.target.checked),D==null||D(t)},[o,n,l,$,d,D]);Q(()=>{u.current&&(u.current.indeterminate=Boolean(d))},[d]),we(()=>{n&&H(!1)},[n,H]),Q(()=>{const t=u.current;!(t!=null&&t.form)||(t.form.onreset=()=>{N(!!w)})},[]);const ae=n&&!T,re=r.exports.useCallback(t=>{t.key===" "&&b(!0)},[b]),se=r.exports.useCallback(t=>{t.key===" "&&b(!1)},[b]);Q(()=>{if(!u.current)return;u.current.checked!==l&&N(u.current.checked)},[u.current]);const he=r.exports.useCallback((t={},y=null)=>{const v=V=>{F&&V.preventDefault(),b(!0)};return{...t,ref:y,"data-active":i(z),"data-hover":i(W),"data-checked":i(l),"data-focus":i(F),"data-focus-visible":i(F&&K),"data-indeterminate":i(d),"data-disabled":i(n),"data-invalid":i(s),"data-readonly":i(o),"aria-hidden":!0,onMouseDown:c(t.onMouseDown,v),onMouseUp:c(t.onMouseUp,()=>b(!1)),onMouseEnter:c(t.onMouseEnter,()=>te(!0)),onMouseLeave:c(t.onMouseLeave,()=>te(!1))}},[z,l,n,F,K,W,d,s,o]),ye=r.exports.useCallback((t={},y=null)=>({...L,...t,ref:ie(y,v=>{!v||me(v.tagName==="LABEL")}),onClick:c(t.onClick,()=>{var v;ne||((v=u.current)==null||v.click(),requestAnimationFrame(()=>{var V;(V=u.current)==null||V.focus()}))}),"data-disabled":i(n),"data-checked":i(l),"data-invalid":i(s)}),[L,n,l,s,ne]),ve=r.exports.useCallback((t={},y=null)=>({...t,ref:ie(u,y),type:"checkbox",name:S,value:M,id:h,tabIndex:_,onChange:c(t.onChange,oe),onBlur:c(t.onBlur,R,()=>H(!1)),onFocus:c(t.onFocus,A,()=>H(!0)),onKeyDown:c(t.onKeyDown,re),onKeyUp:c(t.onKeyUp,se),required:p,checked:l,disabled:ae,readOnly:o,"aria-label":I,"aria-labelledby":P,"aria-invalid":f?Boolean(f):s,"aria-describedby":g,"aria-disabled":n,style:Z}),[S,M,h,oe,R,A,re,se,p,l,ae,o,I,P,f,s,g,n,_]),be=r.exports.useCallback((t={},y=null)=>({...t,ref:y,onMouseDown:c(t.onMouseDown,de),onTouchStart:c(t.onTouchStart,de),"data-disabled":i(n),"data-checked":i(l),"data-invalid":i(s)}),[l,n,s]);return{state:{isInvalid:s,isFocused:F,isChecked:l,isActive:z,isHovered:W,isIndeterminate:d,isDisabled:n,isReadOnly:o,isRequired:p},getRootProps:ye,getCheckboxProps:he,getInputProps:ve,getLabelProps:be,htmlProps:L}}function de(e){e.preventDefault(),e.stopPropagation()}var je={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Oe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Te=Y({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),qe=Y({from:{opacity:0},to:{opacity:1}}),Ge=Y({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),We=Ce(function(a,n){const o=_e(),p={...o,...a},s=xe("Checkbox",p),h=ge(a),{spacing:j="0.5rem",className:O,children:g,iconColor:w,iconSize:E,icon:T=B(Ne,{}),isChecked:q,isDisabled:d=o==null?void 0:o.isDisabled,onChange:S,inputProps:M,..._}=h;let I=q;(o==null?void 0:o.value)&&h.value&&(I=o.value.includes(h.value));let P=S;(o==null?void 0:o.onChange)&&h.value&&(P=Ae(o.onChange,S));const{state:f,getInputProps:G,getCheckboxProps:L,getLabelProps:D,getRootProps:R}=Ue({..._,isDisabled:d,isChecked:I,onChange:P}),A=r.exports.useMemo(()=>({animation:f.isIndeterminate?`${qe} 20ms linear, ${Ge} 200ms linear`:`${Te} 200ms linear`,fontSize:E,color:w,...s.icon}),[w,E,,f.isIndeterminate,s.icon]),K=r.exports.cloneElement(T,{__css:A,isIndeterminate:f.isIndeterminate,isChecked:f.isChecked});return C.createElement(m.label,{__css:{...Oe,...s.container},className:Re("chakra-checkbox",O),...R()},B("input",{className:"chakra-checkbox__input",...G(M,n)}),C.createElement(m.span,{__css:{...je,...s.control},className:"chakra-checkbox__control",...L()},K),g&&C.createElement(m.span,{className:"chakra-checkbox__label",...D(),__css:{marginStart:j,...s.label}},g))});We.displayName="Checkbox";export{We as C,Me as t,Ue as u};
