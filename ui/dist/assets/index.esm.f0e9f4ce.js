import{E as v,p as ce,z as ue,$ as pe,U as de,V as fe,ak as me,R as g,r as t,a as Y,h as Z,j as ee,o as ge,P as ve}from"./index.36e5c8e0.js";import{e as V,u as Pe,f as we,h as K}from"./slicedToArray.69cafb3e.js";import{m as xe}from"./index.esm.c218bf3a.js";function he(o,r=[]){const e=Object.assign({},o);for(const s of r)s in e&&delete e[s];return e}function Ce(o,r){const e={};for(const s of r)s in o&&(e[s]=o[s]);return e}var be={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}};function O(...o){return function(e){o.some(s=>(s==null||s(e),e==null?void 0:e.defaultPrevented))}}var W=o=>{var r;return((r=o.current)==null?void 0:r.ownerDocument)||document},q=o=>{var r,e;return((e=(r=o.current)==null?void 0:r.ownerDocument)==null?void 0:e.defaultView)||window};function ye(o={}){const{openDelay:r=0,closeDelay:e=0,closeOnClick:s=!0,closeOnMouseDown:T,closeOnScroll:d,closeOnPointerDown:P=T,closeOnEsc:B=!0,onOpen:D,onClose:j,placement:F,id:w,isOpen:x,defaultIsOpen:$,arrowSize:h=10,arrowShadowColor:_,arrowPadding:M,modifiers:C,isDisabled:a,gutter:H,offset:b,direction:I,...f}=o,{isOpen:i,onOpen:R,onClose:u}=Pe({isOpen:x,defaultIsOpen:$,onOpen:D,onClose:j}),{referenceRef:y,getPopperProps:c,getArrowInnerProps:oe,getArrowProps:te}=we({enabled:i,placement:F,arrowPadding:M,modifiers:C,gutter:H,offset:b,direction:I}),re=t.exports.useId(),S=`tooltip-${w!=null?w:re}`,p=t.exports.useRef(null),k=t.exports.useRef(),m=t.exports.useCallback(()=>{k.current&&(clearTimeout(k.current),k.current=void 0)},[]),A=t.exports.useRef(),z=t.exports.useCallback(()=>{A.current&&(clearTimeout(A.current),A.current=void 0)},[]),L=t.exports.useCallback(()=>{z(),u()},[u,z]),G=ke(p,L),N=t.exports.useCallback(()=>{if(!a&&!k.current){G();const n=q(p);k.current=n.setTimeout(R,r)}},[G,a,R,r]),l=t.exports.useCallback(()=>{m();const n=q(p);A.current=n.setTimeout(L,e)},[e,L,m]),J=t.exports.useCallback(()=>{i&&s&&l()},[s,l,i]),Q=t.exports.useCallback(()=>{i&&P&&l()},[P,l,i]),ne=t.exports.useCallback(n=>{i&&n.key==="Escape"&&l()},[i,l]);K(()=>W(p),"keydown",B?ne:void 0),K(()=>W(p),"scroll",()=>{i&&d&&L()}),t.exports.useEffect(()=>{!a||(m(),i&&u())},[a,i,u,m]),t.exports.useEffect(()=>()=>{m(),z()},[m,z]),K(()=>p.current,"pointerleave",l);const se=t.exports.useCallback((n={},E=null)=>({...n,ref:xe(p,E,y),onPointerEnter:O(n.onPointerEnter,le=>{le.pointerType!=="touch"&&N()}),onClick:O(n.onClick,J),onPointerDown:O(n.onPointerDown,Q),onFocus:O(n.onFocus,N),onBlur:O(n.onBlur,l),"aria-describedby":i?S:void 0}),[N,l,Q,i,S,J,y]),ie=t.exports.useCallback((n={},E=null)=>c({...n,style:{...n.style,[V.arrowSize.var]:h?`${h}px`:void 0,[V.arrowShadowColor.var]:_}},E),[c,h,_]),ae=t.exports.useCallback((n={},E=null)=>{const X={...n.style,position:"relative",transformOrigin:V.transformOrigin.varRef};return{ref:E,...f,...n,id:S,role:"tooltip",style:X}},[f,S]);return{isOpen:i,show:N,hide:l,getTriggerProps:se,getTooltipProps:ae,getTooltipPositionerProps:ie,getArrowProps:te,getArrowInnerProps:oe}}var U="chakra-ui:close-tooltip";function ke(o,r){return t.exports.useEffect(()=>{const e=W(o);return e.addEventListener(U,r),()=>e.removeEventListener(U,r)},[r,o]),()=>{const e=W(o),s=q(o);e.dispatchEvent(new s.CustomEvent(U))}}var Ee=v(ce.div),Oe=ue((o,r)=>{var u,y;const e=pe("Tooltip",o),s=de(o),T=fe(),{children:d,label:P,shouldWrapChildren:B,"aria-label":D,hasArrow:j,bg:F,portalProps:w,background:x,backgroundColor:$,bgColor:h,motionProps:_,...M}=s,C=(y=(u=x!=null?x:$)!=null?u:F)!=null?y:h;if(C){e.bg=C;const c=me(T,"colors",C);e[V.arrowBg.var]=c}const a=ye({...M,direction:T.direction}),H=typeof d=="string"||B;let b;if(H)b=g.createElement(v.span,{display:"inline-block",tabIndex:0,...a.getTriggerProps()},d);else{const c=t.exports.Children.only(d);b=t.exports.cloneElement(c,a.getTriggerProps(c.props,c.ref))}const I=!!D,f=a.getTooltipProps({},r),i=I?he(f,["role","id"]):f,R=Ce(f,["role","id"]);return P?ee(Z,{children:[b,Y(ge,{children:a.isOpen&&g.createElement(ve,{...w},g.createElement(v.div,{...a.getTooltipPositionerProps(),__css:{zIndex:e.zIndex,pointerEvents:"none"}},ee(Ee,{variants:be,initial:"exit",animate:"enter",exit:"exit",..._,...i,__css:e,children:[P,I&&g.createElement(v.span,{srOnly:!0,...R},D),j&&g.createElement(v.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},g.createElement(v.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:e.bg}}))]})))})]}):Y(Z,{children:d})});Oe.displayName="Tooltip";export{Oe as T};
