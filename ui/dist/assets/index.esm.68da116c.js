import{K as v,G as he,ai as X,J as me,H as pe,a6 as ke,a as E,r as s,R as w,a5 as U,aj as W,a4 as be}from"./index.0e24cb86.js";import{m as ne,u as Ce}from"./index.esm.726820fc.js";import{u as ye}from"./PagePadding.f9f1bdac.js";import{t as ve}from"./index.238261e4.js";var J={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},xe=v("span",{baseStyle:J});xe.displayName="VisuallyHidden";var ge=v("input",{baseStyle:J});ge.displayName="VisuallyHiddenInput";var[Se,Ie]=he({name:"CheckboxGroupContext",strict:!1}),Pe=(...e)=>e.filter(Boolean).join(" ");function oe(e){const r=typeof e;return e!=null&&(r==="object"||r==="function")&&!Array.isArray(e)}var l=e=>e?"":void 0;function f(...e){return function(t){e.some(n=>(n==null||n(t),t==null?void 0:t.defaultPrevented))}}function De(...e){return function(t){e.forEach(n=>{n==null||n(t)})}}function ae(e){return e&&oe(e)&&oe(e.target)}function we(e={}){const{defaultValue:r,value:t,onChange:n,isDisabled:h,isNative:a}=e,u=U(n),[i,k]=Ce({value:t,defaultValue:r||[],onChange:u}),b=s.exports.useCallback(c=>{if(!i)return;const P=ae(c)?c.target.checked:!i.includes(c),C=ae(c)?c.target.value:c,m=P?[...i,C]:i.filter(g=>String(g)!==String(C));k(m)},[k,i]),x=s.exports.useCallback((c={})=>({...c,[a?"checked":"isChecked"]:i.some(C=>String(c.value)===String(C)),onChange:b}),[b,a,i]);return{value:i,isDisabled:h,onChange:b,setValue:k,getCheckboxProps:x}}function Ee(e){const{colorScheme:r,size:t,variant:n,children:h,isDisabled:a}=e,{value:u,onChange:i}=we(e),k=s.exports.useMemo(()=>({size:t,onChange:i,colorScheme:r,value:u,variant:n,isDisabled:a}),[t,i,r,u,n,a]);return E(Se,{value:k,children:h})}Ee.displayName="CheckboxGroup";function _e(e){return w.createElement(v.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e},E("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function Ae(e){return w.createElement(v.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e},E("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function Be(e){const{isIndeterminate:r,isChecked:t,...n}=e,h=r?Ae:_e;return t||r?w.createElement(v.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},E(h,{...n})):null}function Fe(e,r=[]){const t=Object.assign({},e);for(const n of r)n in t&&delete t[n];return t}function Re(e={}){const r=ye(e),{isDisabled:t,isReadOnly:n,isRequired:h,isInvalid:a,id:u,onBlur:i,onFocus:k,"aria-describedby":b}=r,{defaultChecked:x,isChecked:c,isFocusable:P,onChange:C,isIndeterminate:m,name:g,value:M,tabIndex:L=void 0,"aria-label":_,"aria-labelledby":A,"aria-invalid":y,...q}=e,B=Fe(q,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),F=U(C),N=U(i),H=U(k),[K,re]=s.exports.useState(!1),[R,j]=s.exports.useState(!1),[z,O]=s.exports.useState(!1),[T,D]=s.exports.useState(!1);s.exports.useEffect(()=>ve(re),[]);const p=s.exports.useRef(null),[Q,ie]=s.exports.useState(!0),[ce,G]=s.exports.useState(!!x),$=c!==void 0,d=$?c:ce,Y=s.exports.useCallback(o=>{if(n||t){o.preventDefault();return}$||G(d?o.target.checked:m?!0:o.target.checked),F==null||F(o)},[n,t,d,$,m,F]);W(()=>{p.current&&(p.current.indeterminate=Boolean(m))},[m]),be(()=>{t&&j(!1)},[t,j]),W(()=>{const o=p.current;!(o!=null&&o.form)||(o.form.onreset=()=>{G(!!x)})},[]);const Z=t&&!P,ee=s.exports.useCallback(o=>{o.key===" "&&D(!0)},[D]),te=s.exports.useCallback(o=>{o.key===" "&&D(!1)},[D]);W(()=>{if(!p.current)return;p.current.checked!==d&&G(p.current.checked)},[p.current]);const le=s.exports.useCallback((o={},S=null)=>{const I=V=>{R&&V.preventDefault(),D(!0)};return{...o,ref:S,"data-active":l(T),"data-hover":l(z),"data-checked":l(d),"data-focus":l(R),"data-focus-visible":l(R&&K),"data-indeterminate":l(m),"data-disabled":l(t),"data-invalid":l(a),"data-readonly":l(n),"aria-hidden":!0,onMouseDown:f(o.onMouseDown,I),onMouseUp:f(o.onMouseUp,()=>D(!1)),onMouseEnter:f(o.onMouseEnter,()=>O(!0)),onMouseLeave:f(o.onMouseLeave,()=>O(!1))}},[T,d,t,R,K,z,m,a,n]),ue=s.exports.useCallback((o={},S=null)=>({...B,...o,ref:ne(S,I=>{!I||ie(I.tagName==="LABEL")}),onClick:f(o.onClick,()=>{var I;Q||((I=p.current)==null||I.click(),requestAnimationFrame(()=>{var V;(V=p.current)==null||V.focus()}))}),"data-disabled":l(t),"data-checked":l(d),"data-invalid":l(a)}),[B,t,d,a,Q]),de=s.exports.useCallback((o={},S=null)=>({...o,ref:ne(p,S),type:"checkbox",name:g,value:M,id:u,tabIndex:L,onChange:f(o.onChange,Y),onBlur:f(o.onBlur,N,()=>j(!1)),onFocus:f(o.onFocus,H,()=>j(!0)),onKeyDown:f(o.onKeyDown,ee),onKeyUp:f(o.onKeyUp,te),required:h,checked:d,disabled:Z,readOnly:n,"aria-label":_,"aria-labelledby":A,"aria-invalid":y?Boolean(y):a,"aria-describedby":b,"aria-disabled":t,style:J}),[g,M,u,Y,N,H,ee,te,h,d,Z,n,_,A,y,a,b,t,L]),fe=s.exports.useCallback((o={},S=null)=>({...o,ref:S,onMouseDown:f(o.onMouseDown,se),onTouchStart:f(o.onTouchStart,se),"data-disabled":l(t),"data-checked":l(d),"data-invalid":l(a)}),[d,t,a]);return{state:{isInvalid:a,isFocused:R,isChecked:d,isActive:T,isHovered:z,isIndeterminate:m,isDisabled:t,isReadOnly:n,isRequired:h},getRootProps:ue,getCheckboxProps:le,getInputProps:de,getLabelProps:fe,htmlProps:B}}function se(e){e.preventDefault(),e.stopPropagation()}var Me={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},Le={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},Ne=X({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),He=X({from:{opacity:0},to:{opacity:1}}),Ke=X({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),je=me(function(r,t){const n=Ie(),h={...n,...r},a=pe("Checkbox",h),u=ke(r),{spacing:i="0.5rem",className:k,children:b,iconColor:x,iconSize:c,icon:P=E(Be,{}),isChecked:C,isDisabled:m=n==null?void 0:n.isDisabled,onChange:g,inputProps:M,...L}=u;let _=C;(n==null?void 0:n.value)&&u.value&&(_=n.value.includes(u.value));let A=g;(n==null?void 0:n.onChange)&&u.value&&(A=De(n.onChange,g));const{state:y,getInputProps:q,getCheckboxProps:B,getLabelProps:F,getRootProps:N}=Re({...L,isDisabled:m,isChecked:_,onChange:A}),H=s.exports.useMemo(()=>({animation:y.isIndeterminate?`${He} 20ms linear, ${Ke} 200ms linear`:`${Ne} 200ms linear`,fontSize:c,color:x,...a.icon}),[x,c,,y.isIndeterminate,a.icon]),K=s.exports.cloneElement(P,{__css:H,isIndeterminate:y.isIndeterminate,isChecked:y.isChecked});return w.createElement(v.label,{__css:{...Le,...a.container},className:Pe("chakra-checkbox",k),...N()},E("input",{className:"chakra-checkbox__input",...q(M,t)}),w.createElement(v.span,{__css:{...Me,...a.control},className:"chakra-checkbox__control",...B()},K),b&&w.createElement(v.span,{className:"chakra-checkbox__label",...F(),__css:{marginStart:i,...a.label}},b))});je.displayName="Checkbox";export{je as C,Ee as a,Re as u};
