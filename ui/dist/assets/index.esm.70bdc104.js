import{r as y,ai as z,G as A,a as k,R as h,H as b,z as G,E as L,X as F,j as M,Y as W}from"./index.5b816863.js";function H(t,e=[]){const a=Object.assign({},t);for(const r of e)r in a&&delete a[r];return a}function w(t){const{loading:e,src:a,srcSet:r,onLoad:n,onError:l,crossOrigin:s,sizes:i,ignoreFallback:c}=t,[d,m]=y.exports.useState("pending");y.exports.useEffect(()=>{m(a?"loading":"pending")},[a]);const u=y.exports.useRef(),g=y.exports.useCallback(()=>{if(!a)return;f();const o=new Image;o.src=a,s&&(o.crossOrigin=s),r&&(o.srcset=r),i&&(o.sizes=i),e&&(o.loading=e),o.onload=v=>{f(),m("loaded"),n==null||n(v)},o.onerror=v=>{f(),m("failed"),l==null||l(v)},u.current=o},[a,s,r,i,n,l,e]),f=()=>{u.current&&(u.current.onload=null,u.current.onerror=null,u.current=null)};return z(()=>{if(!c)return d==="loading"&&g(),()=>{f()}},[d,g,c]),c?"loaded":d}var $=(t,e)=>t!=="loaded"&&e==="beforeLoadOrError"||t==="failed"&&e==="onError",E=A(function(e,a){const{htmlWidth:r,htmlHeight:n,alt:l,...s}=e;return k("img",{width:r,height:n,ref:a,alt:l,...s})});E.displayName="NativeImage";var T=A(function(e,a){const{fallbackSrc:r,fallback:n,src:l,srcSet:s,align:i,fit:c,loading:d,ignoreFallback:m,crossOrigin:u,fallbackStrategy:g="beforeLoadOrError",referrerPolicy:f,...o}=e,v=r!==void 0||n!==void 0,x=d!=null||m||!v,p=w({...e,ignoreFallback:x}),N=$(p,g),S={ref:a,objectFit:c,objectPosition:i,...x?o:H(o,["onError","onLoad"])};return N?n||h.createElement(b.img,{as:E,className:"chakra-image__placeholder",src:r,...S}):h.createElement(b.img,{as:E,src:l,srcSet:s,crossOrigin:u,loading:d,referrerPolicy:f,className:"chakra-image",...S})});T.displayName="Image";A((t,e)=>h.createElement(b.img,{ref:e,as:E,className:"chakra-image",...t}));var _=(...t)=>t.filter(Boolean).join(" "),D=t=>t?"":void 0;function V(...t){return function(a){t.some(r=>(r==null||r(a),a==null?void 0:a.defaultPrevented))}}var[X,j]=G({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"});function Y(t){const[e,a]=t.split(" ");return e&&a?`${e.charAt(0)}${a.charAt(0)}`:e.charAt(0)}function R(t){const{name:e,getInitials:a,...r}=t,n=j();return h.createElement(b.div,{role:"img","aria-label":e,...r,__css:n.label},e?a==null?void 0:a(e):null)}R.displayName="AvatarName";var P=t=>h.createElement(b.svg,{viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg",...t},k("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),k("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}));function B(t){const{src:e,srcSet:a,onError:r,onLoad:n,getInitials:l,name:s,borderRadius:i,loading:c,iconLabel:d,icon:m=k(P,{}),ignoreFallback:u,referrerPolicy:g}=t,o=w({src:e,onError:r,ignoreFallback:u})==="loaded";return!e||!o?s?k(R,{className:"chakra-avatar__initials",getInitials:l,name:s}):y.exports.cloneElement(m,{role:"img","aria-label":d}):h.createElement(b.img,{src:e,srcSet:a,alt:s,onLoad:n,referrerPolicy:g,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:i}})}B.displayName="AvatarImage";var O={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},Z=A((t,e)=>{const a=L("Avatar",t),[r,n]=y.exports.useState(!1),{src:l,srcSet:s,name:i,showBorder:c,borderRadius:d="full",onError:m,onLoad:u,getInitials:g=Y,icon:f=k(P,{}),iconLabel:o=" avatar",loading:v,children:x,borderColor:p,ignoreFallback:N,...S}=F(t),C={borderRadius:d,borderWidth:c?"2px":void 0,...O,...a.container};return p&&(C.borderColor=p),h.createElement(b.span,{ref:e,...S,className:_("chakra-avatar",t.className),"data-loaded":D(r),__css:C},M(X,{value:a,children:[k(B,{src:l,srcSet:s,loading:v,onLoad:V(u,()=>{n(!0)}),onError:m,getInitials:g,name:i,borderRadius:d,icon:f,iconLabel:o,ignoreFallback:N}),x]}))});Z.displayName="Avatar";function q(t){const e=Object.assign({},t);for(let a in e)e[a]===void 0&&delete e[a];return e}var J=A(function(e,a){const r=L("Avatar",e),{children:n,borderColor:l,max:s,spacing:i="-0.75rem",borderRadius:c="full",...d}=F(e),m=W(n),u=s?m.slice(0,s):m,g=s!=null&&m.length-s,o=u.reverse().map((p,N)=>{var I;const C={marginEnd:N===0?0:i,size:e.size,borderColor:(I=p.props.borderColor)!=null?I:l,showBorder:!0};return y.exports.cloneElement(p,q(C))}),v={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse",...r.group},x={borderRadius:c,marginStart:i,...O,...r.excessLabel};return h.createElement(b.div,{ref:a,role:"group",__css:v,...d,className:_("chakra-avatar__group",e.className)},g>0&&h.createElement(b.span,{className:"chakra-avatar__excess",__css:x},`+${g}`),o)});J.displayName="AvatarGroup";var K={"top-start":{top:"0",insetStart:"0",transform:"translate(-25%, -25%)"},"top-end":{top:"0",insetEnd:"0",transform:"translate(25%, -25%)"},"bottom-start":{bottom:"0",insetStart:"0",transform:"translate(-25%, 25%)"},"bottom-end":{bottom:"0",insetEnd:"0",transform:"translate(25%, 25%)"}},Q=A(function(e,a){const{placement:r="bottom-end",className:n,...l}=e,s=j(),c={position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",...K[r],...s.badge};return h.createElement(b.div,{ref:a,...l,className:_("chakra-avatar__badge",n),__css:c})});Q.displayName="AvatarBadge";export{Z as A,J as a};
