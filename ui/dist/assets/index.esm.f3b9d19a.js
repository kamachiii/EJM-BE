import{V as q,W as ye,r as i,z as ee,E as Ee,X as Me,J as Ce,a as w,G as S,R as P,H as N,j as J,t as ge,Y as _e}from"./index.4df5dae3.js";import{u as we,c as ke,a as Ie,b as De,l as Pe,d as Oe}from"./slicedToArray.556cd5c1.js";import{m as X,u as Ne}from"./index.esm.780dcd2c.js";function ne(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function te(e){var t;if(!ne(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}function Ae(e){var t;var n;return(t=(n=oe(e))==null?void 0:n.defaultView)!=null?t:window}function oe(e){return ne(e)?e.ownerDocument:document}function Se(e){return oe(e).activeElement}var se=e=>e.hasAttribute("tabindex"),Te=e=>se(e)&&e.tabIndex===-1;function Le(e){return Boolean(e.getAttribute("disabled"))===!0||Boolean(e.getAttribute("aria-disabled"))===!0}function re(e){return e.parentElement&&re(e.parentElement)?!0:e.hidden}function Fe(e){const n=e.getAttribute("contenteditable");return n!=="false"&&n!=null}function ae(e){if(!te(e)||re(e)||Le(e))return!1;const{localName:n}=e;if(["input","select","textarea","button"].indexOf(n)>=0)return!0;const o={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return n in o?o[n]():Fe(e)?!0:se(e)}function Re(e){return e?te(e)&&ae(e)&&!Te(e):!1}var ze=["input:not(:disabled):not([disabled])","select:not(:disabled):not([disabled])","textarea:not(:disabled):not([disabled])","embed","iframe","object","a[href]","area[href]","button:not(:disabled):not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"],Be=ze.join(),He=e=>e.offsetWidth>0&&e.offsetHeight>0;function Pn(e){const n=Array.from(e.querySelectorAll(Be));return n.unshift(e),n.filter(t=>ae(t)&&He(t))}function Ke(e){const n=e.current;if(!n)return!1;const t=Se(n);return!t||n.contains(t)?!1:!!Re(t)}function We(e,n){const{shouldFocus:t,visible:o,focusRef:s}=n,r=t&&!o;q(()=>{if(!r||Ke(e))return;const a=(s==null?void 0:s.current)||e.current;a&&requestAnimationFrame(()=>{a.focus()})},[r,e,s])}function je(e){const{ref:n,handler:t,enabled:o=!0}=e,s=ye(t),a=i.exports.useRef({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;i.exports.useEffect(()=>{if(!o)return;const c=f=>{$(f,n)&&(a.isPointerDown=!0)},d=f=>{if(a.ignoreEmulatedMouseEvents){a.ignoreEmulatedMouseEvents=!1;return}a.isPointerDown&&t&&$(f,n)&&(a.isPointerDown=!1,s(f))},l=f=>{a.ignoreEmulatedMouseEvents=!0,t&&a.isPointerDown&&$(f,n)&&(a.isPointerDown=!1,s(f))},u=ue(n.current);return u.addEventListener("mousedown",c,!0),u.addEventListener("mouseup",d,!0),u.addEventListener("touchstart",c,!0),u.addEventListener("touchend",l,!0),()=>{u.removeEventListener("mousedown",c,!0),u.removeEventListener("mouseup",d,!0),u.removeEventListener("touchstart",c,!0),u.removeEventListener("touchend",l,!0)}},[t,n,s,a,o])}function $(e,n){var t;const o=e.target;return e.button>0||o&&!ue(o).contains(o)?!1:!((t=n.current)!=null&&t.contains(o))}function ue(e){var n;return(n=e==null?void 0:e.ownerDocument)!=null?n:document}function Ue(e){const{isOpen:n,ref:t}=e,[o,s]=i.exports.useState(n),[r,a]=i.exports.useState(!1);return i.exports.useEffect(()=>{r||(s(n),a(!0))},[n,r,o]),we(()=>t.current,"animationend",()=>{s(n)}),{present:!(n?!1:!o),onComplete(){var d;const l=Ae(t.current),u=new l.CustomEvent("animationend",{bubbles:!0});(d=t.current)==null||d.dispatchEvent(u)}}}var O=(...e)=>e.filter(Boolean).join(" ");function $e(e,...n){return Ve(e)?e(...n):e}var Ve=e=>typeof e=="function",Ge=e=>e?"":void 0;function V(...e){return function(t){e.some(o=>(o==null||o(t),t==null?void 0:t.defaultPrevented))}}function qe(...e){return function(t){e.forEach(o=>{o==null||o(t)})}}function Je(e){const{key:n}=e;return n.length===1||n.length>1&&/[^a-zA-Z0-9]/.test(n)}function Xe(e={}){const{timeout:n=300,preventDefault:t=()=>!0}=e,[o,s]=i.exports.useState([]),r=i.exports.useRef(),a=()=>{r.current&&(clearTimeout(r.current),r.current=null)},c=()=>{a(),r.current=setTimeout(()=>{s([]),r.current=null},n)};i.exports.useEffect(()=>a,[]);function d(l){return u=>{if(u.key==="Backspace"){const f=[...o];f.pop(),s(f);return}if(Je(u)){const f=o.concat(u.key);t(u)&&(u.preventDefault(),u.stopPropagation()),s(f),l(f.join("")),c()}}}return d}function Ye(e,n,t,o){if(n==null)return o;if(!o)return e.find(a=>t(a).toLowerCase().startsWith(n.toLowerCase()));const s=e.filter(r=>t(r).toLowerCase().startsWith(n.toLowerCase()));if(s.length>0){let r;return s.includes(o)?(r=s.indexOf(o)+1,r===s.length&&(r=0),s[r]):(r=e.indexOf(s[0]),e[r])}return o}var[Ze,Qe,en,nn]=ke(),[tn,B]=ee({strict:!1,name:"MenuContext"});function on(e,...n){const t=i.exports.useId(),o=e||t;return i.exports.useMemo(()=>n.map(s=>`${s}-${o}`),[o,n])}function ie(e){var n;return(n=e==null?void 0:e.ownerDocument)!=null?n:document}function Q(e){return ie(e).activeElement===e}function sn(e={}){const{id:n,closeOnSelect:t=!0,closeOnBlur:o=!0,initialFocusRef:s,autoSelect:r=!0,isLazy:a,isOpen:c,defaultIsOpen:d,onClose:l,onOpen:u,placement:f="bottom-start",lazyBehavior:M="unmount",direction:h,computePositionOnMount:m=!1,...k}=e,b=i.exports.useRef(null),p=i.exports.useRef(null),E=en(),D=i.exports.useCallback(()=>{requestAnimationFrame(()=>{var _;(_=b.current)==null||_.focus({preventScroll:!1})})},[]),g=i.exports.useCallback(()=>{const _=setTimeout(()=>{var I;if(s)(I=s.current)==null||I.focus();else{const U=E.firstEnabled();U&&A(U.index)}});j.current.add(_)},[E,s]),L=i.exports.useCallback(()=>{const _=setTimeout(()=>{const I=E.lastEnabled();I&&A(I.index)});j.current.add(_)},[E]),v=i.exports.useCallback(()=>{u==null||u(),r?g():D()},[r,g,D,u]),{isOpen:C,onOpen:x,onClose:T,onToggle:F}=Ie({isOpen:c,defaultIsOpen:d,onClose:l,onOpen:v});je({enabled:C&&o,ref:b,handler:_=>{var I;(I=p.current)!=null&&I.contains(_.target)||T()}});const H=De({...k,enabled:C||m,placement:f,direction:h}),[z,A]=i.exports.useState(-1);q(()=>{C||A(-1)},[C]),We(b,{focusRef:p,visible:C,shouldFocus:!0});const K=Ue({isOpen:C,ref:b}),[W,y]=on(n,"menu-button","menu-list"),me=i.exports.useCallback(()=>{x(),D()},[x,D]),j=i.exports.useRef(new Set([]));pn(()=>{j.current.forEach(_=>clearTimeout(_)),j.current.clear()});const ve=i.exports.useCallback(()=>{x(),g()},[g,x]),he=i.exports.useCallback(()=>{x(),L()},[x,L]),be=i.exports.useCallback(()=>{var _,I;const U=ie(b.current),xe=(_=b.current)==null?void 0:_.contains(U.activeElement);if(!(C&&!xe))return;const Z=(I=E.item(z))==null?void 0:I.node;Z==null||Z.focus()},[C,z,E]);return{openAndFocusMenu:me,openAndFocusFirstItem:ve,openAndFocusLastItem:he,onTransitionEnd:be,unstable__animationState:K,descendants:E,popper:H,buttonId:W,menuId:y,forceUpdate:H.forceUpdate,orientation:"vertical",isOpen:C,onToggle:F,onOpen:x,onClose:T,menuRef:b,buttonRef:p,focusedIndex:z,closeOnSelect:t,closeOnBlur:o,autoSelect:r,setFocusedIndex:A,isLazy:a,lazyBehavior:M,initialFocusRef:s}}function rn(e={},n=null){const t=B(),{onToggle:o,popper:s,openAndFocusFirstItem:r,openAndFocusLastItem:a}=t,c=i.exports.useCallback(d=>{const l=d.key,f={Enter:r,ArrowDown:r,ArrowUp:a}[l];f&&(d.preventDefault(),d.stopPropagation(),f(d))},[r,a]);return{...e,ref:X(t.buttonRef,n,s.referenceRef),id:t.buttonId,"data-active":Ge(t.isOpen),"aria-expanded":t.isOpen,"aria-haspopup":"menu","aria-controls":t.menuId,onClick:V(e.onClick,o),onKeyDown:V(e.onKeyDown,c)}}function G(e){var n;return dn(e)&&!!((n=e==null?void 0:e.getAttribute("role"))!=null&&n.startsWith("menuitem"))}function an(e={},n=null){const t=B();if(!t)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:o,setFocusedIndex:s,menuRef:r,isOpen:a,onClose:c,menuId:d,isLazy:l,lazyBehavior:u,unstable__animationState:f}=t,M=Qe(),h=Xe({preventDefault:p=>p.key!==" "&&G(p.target)}),m=i.exports.useCallback(p=>{const E=p.key,g={Tab:v=>v.preventDefault(),Escape:c,ArrowDown:()=>{const v=M.nextEnabled(o);v&&s(v.index)},ArrowUp:()=>{const v=M.prevEnabled(o);v&&s(v.index)}}[E];if(g){p.preventDefault(),g(p);return}const L=h(v=>{const C=Ye(M.values(),v,x=>{var F;var T;return(F=(T=x==null?void 0:x.node)==null?void 0:T.textContent)!=null?F:""},M.item(o));if(C){const x=M.indexOf(C.node);s(x)}});G(p.target)&&L(p)},[M,o,h,c,s]),k=i.exports.useRef(!1);a&&(k.current=!0);const b=Pe({wasSelected:k.current,enabled:l,mode:u,isSelected:f.present});return{...e,ref:X(r,n),children:b?e.children:null,tabIndex:-1,role:"menu",id:d,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:V(e.onKeyDown,m)}}function un(e={}){const{popper:n,isOpen:t}=B();return n.getPopperProps({...e,style:{visibility:t?"visible":"hidden",...e.style}})}function ce(e={},n=null){const{onMouseEnter:t,onMouseMove:o,onMouseLeave:s,onClick:r,onFocus:a,isDisabled:c,isFocusable:d,closeOnSelect:l,type:u,...f}=e,M=B(),{setFocusedIndex:h,focusedIndex:m,closeOnSelect:k,onClose:b,menuRef:p,isOpen:E,menuId:D}=M,g=i.exports.useRef(null),L=`${D}-menuitem-${i.exports.useId()}`,{index:v,register:C}=nn({disabled:c&&!d}),x=i.exports.useCallback(y=>{t==null||t(y),!c&&h(v)},[h,v,c,t]),T=i.exports.useCallback(y=>{o==null||o(y),g.current&&!Q(g.current)&&x(y)},[x,o]),F=i.exports.useCallback(y=>{s==null||s(y),!c&&h(-1)},[h,c,s]),H=i.exports.useCallback(y=>{r==null||r(y),!!G(y.currentTarget)&&(l!=null?l:k)&&b()},[b,r,k,l]),z=i.exports.useCallback(y=>{a==null||a(y),h(v)},[h,a,v]),A=v===m,K=c&&!d;q(()=>{!E||(A&&!K&&g.current?requestAnimationFrame(()=>{var y;(y=g.current)==null||y.focus()}):p.current&&!Q(p.current)&&p.current.focus())},[A,K,p,E]);const W=Oe({onClick:H,onFocus:z,onMouseEnter:x,onMouseMove:T,onMouseLeave:F,ref:X(C,g,n),isDisabled:c,isFocusable:d});return{...f,...W,type:u!=null?u:W.type,id:L,role:"menuitem",tabIndex:A?0:-1}}function cn(e={},n=null){const{type:t="radio",isChecked:o,...s}=e;return{...ce(s,n),role:`menuitem${t}`,"aria-checked":o}}function ln(e={}){const{children:n,type:t="radio",value:o,defaultValue:s,onChange:r,...a}=e,d=t==="radio"?"":[],[l,u]=Ne({defaultValue:s!=null?s:d,value:o,onChange:r}),f=i.exports.useCallback(m=>{if(t==="radio"&&typeof l=="string"&&u(m),t==="checkbox"&&Array.isArray(l)){const k=l.includes(m)?l.filter(b=>b!==m):l.concat(m);u(k)}},[l,u,t]),h=_e(n).map(m=>{if(m.type.id!=="MenuItemOption")return m;const k=p=>{var E,D;f(m.props.value),(D=(E=m.props).onClick)==null||D.call(E,p)},b=t==="radio"?m.props.value===l:l.includes(m.props.value);return i.exports.cloneElement(m,{type:t,onClick:k,isChecked:b})});return{...a,children:h}}function dn(e){var t;if(!fn(e))return!1;const n=(t=e.ownerDocument.defaultView)!=null?t:window;return e instanceof n.HTMLElement}function fn(e){return e!=null&&typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function pn(e,n=[]){return i.exports.useEffect(()=>()=>e(),n)}var[mn,R]=ee({name:"MenuStylesContext",errorMessage:`useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `}),vn=e=>{const{children:n}=e,t=Ee("Menu",e),o=Me(e),{direction:s}=Ce(),{descendants:r,...a}=sn({...o,direction:s}),c=i.exports.useMemo(()=>a,[a]),{isOpen:d,onClose:l,forceUpdate:u}=c;return w(Ze,{value:r,children:w(tn,{value:c,children:w(mn,{value:t,children:$e(n,{isOpen:d,onClose:l,forceUpdate:u})})})})};vn.displayName="Menu";var hn=S((e,n)=>{const t=R();return P.createElement(N.button,{ref:n,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...t.button}})}),bn=S((e,n)=>{const{children:t,as:o,...s}=e,r=rn(s,n),a=o||hn;return P.createElement(a,{...r,className:O("chakra-menu__menu-button",e.className)},P.createElement(N.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0}},e.children))});bn.displayName="MenuButton";var le=S((e,n)=>{const t=R();return P.createElement(N.span,{ref:n,...e,__css:t.command,className:"chakra-menu__command"})});le.displayName="MenuCommand";var xn=e=>{const{className:n,...t}=e,o=R();return P.createElement(N.hr,{"aria-orientation":"horizontal",className:O("chakra-menu__divider",n),...t,__css:o.divider})};xn.displayName="MenuDivider";var de=S((e,n)=>{const{title:t,children:o,className:s,...r}=e,a=O("chakra-menu__group__title",s),c=R();return J("div",{ref:n,className:"chakra-menu__group",role:"group",children:[t&&P.createElement(N.p,{className:a,...r,__css:c.groupTitle},t),o]})});de.displayName="MenuGroup";var Y=e=>{const{className:n,children:t,...o}=e,s=i.exports.Children.only(t),r=i.exports.isValidElement(s)?i.exports.cloneElement(s,{focusable:"false","aria-hidden":!0,className:O("chakra-menu__icon",s.props.className)}):null,a=O("chakra-menu__icon-wrapper",n);return P.createElement(N.span,{className:a,...o,__css:{flexShrink:0}},r)};Y.displayName="MenuIcon";var fe=S((e,n)=>{const{type:t,...o}=e,s=R(),r=o.as||t?t!=null?t:void 0:"button",a=i.exports.useMemo(()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...s.item}),[s.item]);return P.createElement(N.button,{ref:n,type:r,...o,__css:a})}),yn=e=>w("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",...e,children:w("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),pe=S((e,n)=>{const{icon:t,iconSpacing:o="0.75rem",...s}=e,r=cn(s,n);return J(fe,{...r,className:O("chakra-menu__menuitem-option",s.className),children:[t!==null&&w(Y,{fontSize:"0.8em",marginEnd:o,opacity:e.isChecked?1:0,children:t||w(yn,{})}),w("span",{style:{flex:1},children:r.children})]})});pe.id="MenuItemOption";pe.displayName="MenuItemOption";var En=S((e,n)=>{const{icon:t,iconSpacing:o="0.75rem",command:s,commandSpacing:r="0.75rem",children:a,...c}=e,d=ce(c,n),u=t||s?w("span",{style:{pointerEvents:"none",flex:1},children:a}):a;return J(fe,{...d,className:O("chakra-menu__menuitem",d.className),children:[t&&w(Y,{fontSize:"0.8em",marginEnd:o,children:t}),u,s&&w(le,{marginStart:r,children:s})]})});En.displayName="MenuItem";var Mn={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},Cn=N(ge.div),gn=S(function(n,t){var h;var o;const{rootProps:s,motionProps:r,...a}=n,{isOpen:c,onTransitionEnd:d,unstable__animationState:l}=B(),u=an(a,t),f=un(s),M=R();return P.createElement(N.div,{...f,__css:{zIndex:(h=n.zIndex)!=null?h:(o=M.list)==null?void 0:o.zIndex}},w(Cn,{variants:Mn,initial:!1,animate:c?"enter":"exit",__css:{outline:0,...M.list},...r,className:O("chakra-menu__menu-list",u.className),...u,onUpdate:d,onAnimationComplete:qe(l.onComplete,u.onAnimationComplete)}))});gn.displayName="MenuList";var _n=e=>{const{className:n,title:t,...o}=e,s=ln(o);return w(de,{title:t,className:O("chakra-menu__option-group",n),...s})};_n.displayName="MenuOptionGroup";export{vn as M,bn as a,gn as b,_n as c,pe as d,En as e,xn as f,Pn as g,Y as h};
