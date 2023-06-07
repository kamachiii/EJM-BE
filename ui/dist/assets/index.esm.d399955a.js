var Y=Object.defineProperty;var q=(e,t,n)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var a=(e,t,n)=>(q(e,typeof t!="symbol"?t+"":t,n),n);import{x as H,r as u,S as y}from"./index.2876ce8d.js";import{m as L}from"./index.esm.6e051443.js";function _(e){return e.sort((t,n)=>{const r=t.compareDocumentPosition(n);if(r&Node.DOCUMENT_POSITION_FOLLOWING||r&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(r&Node.DOCUMENT_POSITION_PRECEDING||r&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(r&Node.DOCUMENT_POSITION_DISCONNECTED||r&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0})}var J=e=>typeof e=="object"&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function U(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function w(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var T=typeof window<"u"?u.exports.useLayoutEffect:u.exports.useEffect,E=e=>e,Q=class{constructor(){a(this,"descendants",new Map);a(this,"register",e=>{if(e!=null)return J(e)?this.registerNode(e):t=>{this.registerNode(t,e)}});a(this,"unregister",e=>{this.descendants.delete(e);const t=_(Array.from(this.descendants.keys()));this.assignIndex(t)});a(this,"destroy",()=>{this.descendants.clear()});a(this,"assignIndex",e=>{this.descendants.forEach(t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()})});a(this,"count",()=>this.descendants.size);a(this,"enabledCount",()=>this.enabledValues().length);a(this,"values",()=>Array.from(this.descendants.values()).sort((t,n)=>t.index-n.index));a(this,"enabledValues",()=>this.values().filter(e=>!e.disabled));a(this,"item",e=>{if(this.count()!==0)return this.values()[e]});a(this,"enabledItem",e=>{if(this.enabledCount()!==0)return this.enabledValues()[e]});a(this,"first",()=>this.item(0));a(this,"firstEnabled",()=>this.enabledItem(0));a(this,"last",()=>this.item(this.descendants.size-1));a(this,"lastEnabled",()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)});a(this,"indexOf",e=>{var n;var t;return e&&(n=(t=this.descendants.get(e))==null?void 0:t.index)!=null?n:-1});a(this,"enabledIndexOf",e=>e==null?-1:this.enabledValues().findIndex(t=>t.node.isSameNode(e)));a(this,"next",(e,t=!0)=>{const n=U(e,this.count(),t);return this.item(n)});a(this,"nextEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const r=this.enabledIndexOf(n.node),o=U(r,this.enabledCount(),t);return this.enabledItem(o)});a(this,"prev",(e,t=!0)=>{const n=w(e,this.count()-1,t);return this.item(n)});a(this,"prevEnabled",(e,t=!0)=>{const n=this.item(e);if(!n)return;const r=this.enabledIndexOf(n.node),o=w(r,this.enabledCount()-1,t);return this.enabledItem(o)});a(this,"registerNode",(e,t)=>{if(!e||this.descendants.has(e))return;const n=Array.from(this.descendants.keys()).concat(e),r=_(n);t!=null&&t.disabled&&(t.disabled=!!t.disabled);const o={node:e,index:-1,...t};this.descendants.set(e,o),this.assignIndex(r)})}};function Z(){const e=u.exports.useRef(new Q);return T(()=>()=>e.current.destroy()),e.current}var[$,A]=H({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function ee(e){const t=A(),[n,r]=u.exports.useState(-1),o=u.exports.useRef(null);T(()=>()=>{!o.current||t.unregister(o.current)},[]),T(()=>{if(!o.current)return;const d=Number(o.current.dataset.index);n!=d&&!Number.isNaN(d)&&r(d)});const i=E(e?t.register(e):t.register);return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(o.current),register:L(i,o)}}function ue(){return[E($),()=>E(A()),()=>Z(),o=>ee(o)]}function de(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:o=(c,h)=>c!==h}=e,i=y(r),d=y(o),[l,I]=u.exports.useState(n),p=t!==void 0,x=p?t:l,D=y(c=>{const m=typeof c=="function"?c(x):c;!d(x,m)||(p||I(m),i(m))},[p,i,x,d]);return[x,D]}var te=e=>e?"":void 0;function ne(){const e=u.exports.useRef(new Map),t=e.current,n=u.exports.useCallback((o,i,d,l)=>{e.current.set(d,{type:i,el:o,options:l}),o.addEventListener(i,d,l)},[]),r=u.exports.useCallback((o,i,d,l)=>{o.removeEventListener(i,d,l),e.current.delete(d)},[]);return u.exports.useEffect(()=>()=>{t.forEach((o,i)=>{r(o.el,o.type,i,o.options)})},[r,t]),{add:n,remove:r}}function P(e){const t=e.target,{tagName:n,isContentEditable:r}=t;return n!=="INPUT"&&n!=="TEXTAREA"&&r!==!0}function ie(e={}){const{ref:t,isDisabled:n,isFocusable:r,clickOnEnter:o=!0,clickOnSpace:i=!0,onMouseDown:d,onMouseUp:l,onClick:I,onKeyDown:p,onKeyUp:x,tabIndex:D,onMouseOver:c,onMouseLeave:h,...m}=e,[f,K]=u.exports.useState(!0),[v,C]=u.exports.useState(!1),b=ne(),V=s=>{!s||s.tagName!=="BUTTON"&&K(!1)},R=f?D:D||0,k=n&&!r,S=u.exports.useCallback(s=>{if(n){s.stopPropagation(),s.preventDefault();return}s.currentTarget.focus(),I==null||I(s)},[n,I]),g=u.exports.useCallback(s=>{v&&P(s)&&(s.preventDefault(),s.stopPropagation(),C(!1),b.remove(document,"keyup",g,!1))},[v,b]),B=u.exports.useCallback(s=>{if(p==null||p(s),n||s.defaultPrevented||s.metaKey||!P(s.nativeEvent)||f)return;const N=o&&s.key==="Enter";i&&s.key===" "&&(s.preventDefault(),C(!0)),N&&(s.preventDefault(),s.currentTarget.click()),b.add(document,"keyup",g,!1)},[n,f,p,o,i,b,g]),z=u.exports.useCallback(s=>{if(x==null||x(s),n||s.defaultPrevented||s.metaKey||!P(s.nativeEvent)||f)return;i&&s.key===" "&&(s.preventDefault(),C(!1),s.currentTarget.click())},[i,f,n,x]),O=u.exports.useCallback(s=>{s.button===0&&(C(!1),b.remove(document,"mouseup",O,!1))},[b]),F=u.exports.useCallback(s=>{if(s.button!==0)return;if(n){s.stopPropagation(),s.preventDefault();return}f||C(!0),s.currentTarget.focus({preventScroll:!0}),b.add(document,"mouseup",O,!1),d==null||d(s)},[n,f,d,b,O]),G=u.exports.useCallback(s=>{s.button===0&&(f||C(!1),l==null||l(s))},[l,f]),j=u.exports.useCallback(s=>{if(n){s.preventDefault();return}c==null||c(s)},[n,c]),W=u.exports.useCallback(s=>{v&&(s.preventDefault(),C(!1)),h==null||h(s)},[v,h]),M=L(t,V);return f?{...m,ref:M,type:"button","aria-disabled":k?void 0:n,disabled:k,onClick:S,onMouseDown:d,onMouseUp:l,onKeyUp:x,onKeyDown:p,onMouseOver:c,onMouseLeave:h}:{...m,ref:M,role:"button","data-active":te(v),"aria-disabled":n?"true":void 0,tabIndex:k?void 0:R,onClick:S,onMouseDown:F,onMouseUp:G,onKeyUp:z,onKeyDown:B,onMouseOver:j,onMouseLeave:W}}function le(e){const{wasSelected:t,enabled:n,isSelected:r,mode:o="unmount"}=e;return!!(!n||r||o==="keepMounted"&&t)}export{de as a,ue as c,le as l,ie as u};
