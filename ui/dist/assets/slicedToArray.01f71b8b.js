import{W as Re,r as S,a0 as wt,a1 as bt,a2 as xt}from"./index.5b816863.js";import{m as Ue}from"./index.esm.f21969b8.js";function Ur(e,t,r,o){const n=Re(r);return S.exports.useEffect(()=>{const a=typeof e=="function"?e():e!=null?e:document;if(!(!r||!a))return a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n,o)}},[t,e,o,n,r]),()=>{const a=typeof e=="function"?e():e!=null?e:document;a==null||a.removeEventListener(t,n,o)}}var j="top",T="bottom",H="right",k="left",De="auto",ce=[j,T,H,k],ee="start",pe="end",Ot="clippingParents",ot="viewport",ie="popper",At="reference",Xe=ce.reduce(function(e,t){return e.concat([t+"-"+ee,t+"-"+pe])},[]),at=[].concat(ce,[De]).reduce(function(e,t){return e.concat([t,t+"-"+ee,t+"-"+pe])},[]),Pt="beforeRead",Et="read",Rt="afterRead",Ct="beforeMain",St="main",Dt="afterMain",$t="beforeWrite",jt="write",kt="afterWrite",Bt=[Pt,Et,Rt,Ct,St,Dt,$t,jt,kt];function I(e){return e?(e.nodeName||"").toLowerCase():null}function M(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=M(e).Element;return e instanceof t||e instanceof Element}function L(e){var t=M(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function $e(e){if(typeof ShadowRoot>"u")return!1;var t=M(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!L(a)||!I(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(p){var s=n[p];s===!1?a.removeAttribute(p):a.setAttribute(p,s===!0?"":s)}))})}function Lt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},p=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=p.reduce(function(i,l){return i[l]="",i},{});!L(n)||!I(n)||(Object.assign(n.style,s),Object.keys(a).forEach(function(i){n.removeAttribute(i)}))})}}const Tt={name:"applyStyles",enabled:!0,phase:"write",fn:Wt,effect:Lt,requires:["computeStyles"]};function V(e){return e.split("-")[0]}var K=Math.max,be=Math.min,te=Math.round;function Ce(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function it(){return!/^((?!chrome|android).)*safari/i.test(Ce())}function re(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&L(e)&&(n=e.offsetWidth>0&&te(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&te(o.height)/e.offsetHeight||1);var p=Q(e)?M(e):window,s=p.visualViewport,i=!it()&&r,l=(o.left+(i&&s?s.offsetLeft:0))/n,f=(o.top+(i&&s?s.offsetTop:0))/a,m=o.width/n,g=o.height/a;return{width:m,height:g,top:f,right:l+m,bottom:f+g,left:l,x:l,y:f}}function je(e){var t=re(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function st(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&$e(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function N(e){return M(e).getComputedStyle(e)}function Ht(e){return["table","td","th"].indexOf(I(e))>=0}function X(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function xe(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||($e(e)?e.host:null)||X(e)}function Ye(e){return!L(e)||N(e).position==="fixed"?null:e.offsetParent}function Mt(e){var t=/firefox/i.test(Ce()),r=/Trident/i.test(Ce());if(r&&L(e)){var o=N(e);if(o.position==="fixed")return null}var n=xe(e);for($e(n)&&(n=n.host);L(n)&&["html","body"].indexOf(I(n))<0;){var a=N(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}function ue(e){for(var t=M(e),r=Ye(e);r&&Ht(r)&&N(r).position==="static";)r=Ye(r);return r&&(I(r)==="html"||I(r)==="body"&&N(r).position==="static")?t:r||Mt(e)||t}function ke(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function se(e,t,r){return K(e,be(t,r))}function zt(e,t,r){var o=se(e,t,r);return o>r?r:o}function ft(){return{top:0,right:0,bottom:0,left:0}}function pt(e){return Object.assign({},ft(),e)}function lt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Vt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,pt(typeof t!="number"?t:lt(t,ce))};function It(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,p=r.modifiersData.popperOffsets,s=V(r.placement),i=ke(s),l=[k,H].indexOf(s)>=0,f=l?"height":"width";if(!(!a||!p)){var m=Vt(n.padding,r),g=je(a),c=i==="y"?j:k,y=i==="y"?T:H,h=r.rects.reference[f]+r.rects.reference[i]-p[i]-r.rects.popper[f],d=p[i]-r.rects.reference[i],x=ue(a),b=x?i==="y"?x.clientHeight||0:x.clientWidth||0:0,A=h/2-d/2,v=m[c],O=b-g[f]-m[y],w=b/2-g[f]/2+A,P=se(v,w,O),C=i;r.modifiersData[o]=(t={},t[C]=P,t.centerOffset=P-w,t)}}function Nt(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!st(t.elements.popper,n)||(t.elements.arrow=n))}const qt={name:"arrow",enabled:!0,phase:"main",fn:It,effect:Nt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ne(e){return e.split("-")[1]}var Ft={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ut(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:te(t*n)/n||0,y:te(r*n)/n||0}}function Ge(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,p=e.offsets,s=e.position,i=e.gpuAcceleration,l=e.adaptive,f=e.roundOffsets,m=e.isFixed,g=p.x,c=g===void 0?0:g,y=p.y,h=y===void 0?0:y,d=typeof f=="function"?f({x:c,y:h}):{x:c,y:h};c=d.x,h=d.y;var x=p.hasOwnProperty("x"),b=p.hasOwnProperty("y"),A=k,v=j,O=window;if(l){var w=ue(r),P="clientHeight",C="clientWidth";if(w===M(r)&&(w=X(r),N(w).position!=="static"&&s==="absolute"&&(P="scrollHeight",C="scrollWidth")),w=w,n===j||(n===k||n===H)&&a===pe){v=T;var R=m&&w===O&&O.visualViewport?O.visualViewport.height:w[P];h-=R-o.height,h*=i?1:-1}if(n===k||(n===j||n===T)&&a===pe){A=H;var u=m&&w===O&&O.visualViewport?O.visualViewport.width:w[C];c-=u-o.width,c*=i?1:-1}}var E=Object.assign({position:s},l&&Ft),W=f===!0?Ut({x:c,y:h}):{x:c,y:h};if(c=W.x,h=W.y,i){var D;return Object.assign({},E,(D={},D[v]=b?"0":"",D[A]=x?"0":"",D.transform=(O.devicePixelRatio||1)<=1?"translate("+c+"px, "+h+"px)":"translate3d("+c+"px, "+h+"px, 0)",D))}return Object.assign({},E,(t={},t[v]=b?h+"px":"",t[A]=x?c+"px":"",t.transform="",t))}function Xt(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,p=a===void 0?!0:a,s=r.roundOffsets,i=s===void 0?!0:s,l={placement:V(t.placement),variation:ne(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ge(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ge(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Yt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Xt,data:{}};var ye={passive:!0};function Gt(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,p=o.resize,s=p===void 0?!0:p,i=M(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(f){f.addEventListener("scroll",r.update,ye)}),s&&i.addEventListener("resize",r.update,ye),function(){a&&l.forEach(function(f){f.removeEventListener("scroll",r.update,ye)}),s&&i.removeEventListener("resize",r.update,ye)}}const Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gt,data:{}};var Kt={left:"right",right:"left",bottom:"top",top:"bottom"};function we(e){return e.replace(/left|right|bottom|top/g,function(t){return Kt[t]})}var Qt={start:"end",end:"start"};function Je(e){return e.replace(/start|end/g,function(t){return Qt[t]})}function Be(e){var t=M(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function We(e){return re(X(e)).left+Be(e).scrollLeft}function Zt(e,t){var r=M(e),o=X(e),n=r.visualViewport,a=o.clientWidth,p=o.clientHeight,s=0,i=0;if(n){a=n.width,p=n.height;var l=it();(l||!l&&t==="fixed")&&(s=n.offsetLeft,i=n.offsetTop)}return{width:a,height:p,x:s+We(e),y:i}}function _t(e){var t,r=X(e),o=Be(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=K(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=K(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+We(e),i=-o.scrollTop;return N(n||r).direction==="rtl"&&(s+=K(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:p,x:s,y:i}}function Le(e){var t=N(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function ct(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:L(e)&&Le(e)?e:ct(xe(e))}function fe(e,t){var r;t===void 0&&(t=[]);var o=ct(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=M(o),p=n?[a].concat(a.visualViewport||[],Le(o)?o:[]):o,s=t.concat(p);return n?s:s.concat(fe(xe(p)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function er(e,t){var r=re(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ke(e,t,r){return t===ot?Se(Zt(e,r)):Q(t)?er(t,r):Se(_t(X(e)))}function tr(e){var t=fe(xe(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,o=r&&L(e)?ue(e):e;return Q(o)?t.filter(function(n){return Q(n)&&st(n,o)&&I(n)!=="body"}):[]}function rr(e,t,r,o){var n=t==="clippingParents"?tr(e):[].concat(t),a=[].concat(n,[r]),p=a[0],s=a.reduce(function(i,l){var f=Ke(e,l,o);return i.top=K(f.top,i.top),i.right=be(f.right,i.right),i.bottom=be(f.bottom,i.bottom),i.left=K(f.left,i.left),i},Ke(e,p,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ut(e){var t=e.reference,r=e.element,o=e.placement,n=o?V(o):null,a=o?ne(o):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(n){case j:i={x:p,y:t.y-r.height};break;case T:i={x:p,y:t.y+t.height};break;case H:i={x:t.x+t.width,y:s};break;case k:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var l=n?ke(n):null;if(l!=null){var f=l==="y"?"height":"width";switch(a){case ee:i[l]=i[l]-(t[f]/2-r[f]/2);break;case pe:i[l]=i[l]+(t[f]/2-r[f]/2);break}}return i}function le(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,p=a===void 0?e.strategy:a,s=r.boundary,i=s===void 0?Ot:s,l=r.rootBoundary,f=l===void 0?ot:l,m=r.elementContext,g=m===void 0?ie:m,c=r.altBoundary,y=c===void 0?!1:c,h=r.padding,d=h===void 0?0:h,x=pt(typeof d!="number"?d:lt(d,ce)),b=g===ie?At:ie,A=e.rects.popper,v=e.elements[y?b:g],O=rr(Q(v)?v:v.contextElement||X(e.elements.popper),i,f,p),w=re(e.elements.reference),P=ut({reference:w,element:A,strategy:"absolute",placement:n}),C=Se(Object.assign({},A,P)),R=g===ie?C:w,u={top:O.top-R.top+x.top,bottom:R.bottom-O.bottom+x.bottom,left:O.left-R.left+x.left,right:R.right-O.right+x.right},E=e.modifiersData.offset;if(g===ie&&E){var W=E[n];Object.keys(u).forEach(function(D){var q=[H,T].indexOf(D)>=0?1:-1,F=[j,T].indexOf(D)>=0?"y":"x";u[D]+=W[F]*q})}return u}function nr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,p=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,l=i===void 0?at:i,f=ne(o),m=f?s?Xe:Xe.filter(function(y){return ne(y)===f}):ce,g=m.filter(function(y){return l.indexOf(y)>=0});g.length===0&&(g=m);var c=g.reduce(function(y,h){return y[h]=le(e,{placement:h,boundary:n,rootBoundary:a,padding:p})[V(h)],y},{});return Object.keys(c).sort(function(y,h){return c[y]-c[h]})}function or(e){if(V(e)===De)return[];var t=we(e);return[Je(e),t,Je(t)]}function ar(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!0:p,i=r.fallbackPlacements,l=r.padding,f=r.boundary,m=r.rootBoundary,g=r.altBoundary,c=r.flipVariations,y=c===void 0?!0:c,h=r.allowedAutoPlacements,d=t.options.placement,x=V(d),b=x===d,A=i||(b||!y?[we(d)]:or(d)),v=[d].concat(A).reduce(function(Z,U){return Z.concat(V(U)===De?nr(t,{placement:U,boundary:f,rootBoundary:m,padding:l,flipVariations:y,allowedAutoPlacements:h}):U)},[]),O=t.rects.reference,w=t.rects.popper,P=new Map,C=!0,R=v[0],u=0;u<v.length;u++){var E=v[u],W=V(E),D=ne(E)===ee,q=[j,T].indexOf(W)>=0,F=q?"width":"height",$=le(t,{placement:E,boundary:f,rootBoundary:m,altBoundary:g,padding:l}),z=q?D?H:k:D?T:j;O[F]>w[F]&&(z=we(z));var ve=we(z),Y=[];if(a&&Y.push($[W]<=0),s&&Y.push($[z]<=0,$[ve]<=0),Y.every(function(Z){return Z})){R=E,C=!1;break}P.set(E,Y)}if(C)for(var de=y?3:1,Oe=function(U){var ae=v.find(function(me){var G=P.get(me);if(G)return G.slice(0,U).every(function(Ae){return Ae})});if(ae)return R=ae,"break"},oe=de;oe>0;oe--){var he=Oe(oe);if(he==="break")break}t.placement!==R&&(t.modifiersData[o]._skip=!0,t.placement=R,t.reset=!0)}}const ir={name:"flip",enabled:!0,phase:"main",fn:ar,requiresIfExists:["offset"],data:{_skip:!1}};function Qe(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ze(e){return[j,H,T,k].some(function(t){return e[t]>=0})}function sr(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,p=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),i=Qe(p,o),l=Qe(s,n,a),f=Ze(i),m=Ze(l);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:l,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const fr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:sr};function pr(e,t,r){var o=V(e),n=[k,j].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=a[0],s=a[1];return p=p||0,s=(s||0)*n,[k,H].indexOf(o)>=0?{x:s,y:p}:{x:p,y:s}}function lr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,p=at.reduce(function(f,m){return f[m]=pr(m,t.rects,a),f},{}),s=p[t.placement],i=s.x,l=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=p}const cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:lr};function ur(e){var t=e.state,r=e.name;t.modifiersData[r]=ut({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const vr={name:"popperOffsets",enabled:!0,phase:"read",fn:ur,data:{}};function dr(e){return e==="x"?"y":"x"}function hr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!1:p,i=r.boundary,l=r.rootBoundary,f=r.altBoundary,m=r.padding,g=r.tether,c=g===void 0?!0:g,y=r.tetherOffset,h=y===void 0?0:y,d=le(t,{boundary:i,rootBoundary:l,padding:m,altBoundary:f}),x=V(t.placement),b=ne(t.placement),A=!b,v=ke(x),O=dr(v),w=t.modifiersData.popperOffsets,P=t.rects.reference,C=t.rects.popper,R=typeof h=="function"?h(Object.assign({},t.rects,{placement:t.placement})):h,u=typeof R=="number"?{mainAxis:R,altAxis:R}:Object.assign({mainAxis:0,altAxis:0},R),E=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(!!w){if(a){var D,q=v==="y"?j:k,F=v==="y"?T:H,$=v==="y"?"height":"width",z=w[v],ve=z+d[q],Y=z-d[F],de=c?-C[$]/2:0,Oe=b===ee?P[$]:C[$],oe=b===ee?-C[$]:-P[$],he=t.elements.arrow,Z=c&&he?je(he):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ft(),ae=U[q],me=U[F],G=se(0,P[$],Z[$]),Ae=A?P[$]/2-de-G-ae-u.mainAxis:Oe-G-ae-u.mainAxis,vt=A?-P[$]/2+de+G+me+u.mainAxis:oe+G+me+u.mainAxis,Pe=t.elements.arrow&&ue(t.elements.arrow),dt=Pe?v==="y"?Pe.clientTop||0:Pe.clientLeft||0:0,Te=(D=E==null?void 0:E[v])!=null?D:0,ht=z+Ae-Te-dt,mt=z+vt-Te,He=se(c?be(ve,ht):ve,z,c?K(Y,mt):Y);w[v]=He,W[v]=He-z}if(s){var Me,gt=v==="x"?j:k,yt=v==="x"?T:H,J=w[O],ge=O==="y"?"height":"width",ze=J+d[gt],Ve=J-d[yt],Ee=[j,k].indexOf(x)!==-1,Ie=(Me=E==null?void 0:E[O])!=null?Me:0,Ne=Ee?ze:J-P[ge]-C[ge]-Ie+u.altAxis,qe=Ee?J+P[ge]+C[ge]-Ie-u.altAxis:Ve,Fe=c&&Ee?zt(Ne,J,qe):se(c?Ne:ze,J,c?qe:Ve);w[O]=Fe,W[O]=Fe-J}t.modifiersData[o]=W}}const mr={name:"preventOverflow",enabled:!0,phase:"main",fn:hr,requiresIfExists:["offset"]};function gr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function yr(e){return e===M(e)||!L(e)?Be(e):gr(e)}function wr(e){var t=e.getBoundingClientRect(),r=te(t.width)/e.offsetWidth||1,o=te(t.height)/e.offsetHeight||1;return r!==1||o!==1}function br(e,t,r){r===void 0&&(r=!1);var o=L(t),n=L(t)&&wr(t),a=X(t),p=re(e,n,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(o||!o&&!r)&&((I(t)!=="body"||Le(a))&&(s=yr(t)),L(t)?(i=re(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):a&&(i.x=We(a))),{x:p.left+s.scrollLeft-i.x,y:p.top+s.scrollTop-i.y,width:p.width,height:p.height}}function xr(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var p=[].concat(a.requires||[],a.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&n(i)}}),o.push(a)}return e.forEach(function(a){r.has(a.name)||n(a)}),o}function Or(e){var t=xr(e);return Bt.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Ar(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Pr(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var _e={placement:"bottom",modifiers:[],strategy:"absolute"};function et(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Er(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?_e:n;return function(s,i,l){l===void 0&&(l=a);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},_e,a),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},m=[],g=!1,c={state:f,setOptions:function(x){var b=typeof x=="function"?x(f.options):x;h(),f.options=Object.assign({},a,f.options,b),f.scrollParents={reference:Q(s)?fe(s):s.contextElement?fe(s.contextElement):[],popper:fe(i)};var A=Or(Pr([].concat(o,f.options.modifiers)));return f.orderedModifiers=A.filter(function(v){return v.enabled}),y(),c.update()},forceUpdate:function(){if(!g){var x=f.elements,b=x.reference,A=x.popper;if(!!et(b,A)){f.rects={reference:br(b,ue(A),f.options.strategy==="fixed"),popper:je(A)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(u){return f.modifiersData[u.name]=Object.assign({},u.data)});for(var v=0;v<f.orderedModifiers.length;v++){if(f.reset===!0){f.reset=!1,v=-1;continue}var O=f.orderedModifiers[v],w=O.fn,P=O.options,C=P===void 0?{}:P,R=O.name;typeof w=="function"&&(f=w({state:f,options:C,name:R,instance:c})||f)}}}},update:Ar(function(){return new Promise(function(d){c.forceUpdate(),d(f)})}),destroy:function(){h(),g=!0}};if(!et(s,i))return c;c.setOptions(l).then(function(d){!g&&l.onFirstUpdate&&l.onFirstUpdate(d)});function y(){f.orderedModifiers.forEach(function(d){var x=d.name,b=d.options,A=b===void 0?{}:b,v=d.effect;if(typeof v=="function"){var O=v({state:f,name:x,instance:c,options:A}),w=function(){};m.push(O||w)}})}function h(){m.forEach(function(d){return d()}),m=[]}return c}}var Rr=[Jt,vr,Yt,Tt,cr,ir,mr,qt,fr],Cr=Er({defaultModifiers:Rr}),_=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),B={arrowShadowColor:_("--popper-arrow-shadow-color"),arrowSize:_("--popper-arrow-size","8px"),arrowSizeHalf:_("--popper-arrow-size-half"),arrowBg:_("--popper-arrow-bg"),transformOrigin:_("--popper-transform-origin"),arrowOffset:_("--popper-arrow-offset")};function Sr(e){if(e.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}var Dr={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},$r=e=>Dr[e],tt={scroll:!0,resize:!0};function jr(e){let t;return typeof e=="object"?t={enabled:!0,options:{...tt,...e}}:t={enabled:e,options:tt},t}var kr={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},Br={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{rt(e)},effect:({state:e})=>()=>{rt(e)}},rt=e=>{e.elements.popper.style.setProperty(B.transformOrigin.var,$r(e.placement))},Wr={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{Lr(e)}},Lr=e=>{var t;if(!e.placement)return;const r=Tr(e.placement);if(((t=e.elements)==null?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:B.arrowSize.varRef,height:B.arrowSize.varRef,zIndex:-1});const o={[B.arrowSizeHalf.var]:`calc(${B.arrowSize.varRef} / 2)`,[B.arrowOffset.var]:`calc(${B.arrowSizeHalf.varRef} * -1)`};for(const n in o)e.elements.arrow.style.setProperty(n,o[n])}},Tr=e=>{if(e.startsWith("top"))return{property:"bottom",value:B.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:B.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:B.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:B.arrowOffset.varRef}},Hr={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{nt(e)},effect:({state:e})=>()=>{nt(e)}},nt=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");!t||Object.assign(t.style,{transform:"rotate(45deg)",background:B.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:Sr(e.placement)})},Mr={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},zr={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function Vr(e,t="ltr"){var n;var r;const o=((r=Mr[e])==null?void 0:r[t])||e;return t==="ltr"?o:(n=zr[e])!=null?n:o}function Xr(e={}){const{enabled:t=!0,modifiers:r,placement:o="bottom",strategy:n="absolute",arrowPadding:a=8,eventListeners:p=!0,offset:s,gutter:i=8,flip:l=!0,boundary:f="clippingParents",preventOverflow:m=!0,matchWidth:g,direction:c="ltr"}=e,y=S.exports.useRef(null),h=S.exports.useRef(null),d=S.exports.useRef(null),x=Vr(o,c),b=S.exports.useRef(()=>{}),A=S.exports.useCallback(()=>{var u;!t||!y.current||!h.current||((u=b.current)==null||u.call(b),d.current=Cr(y.current,h.current,{placement:x,modifiers:[Hr,Wr,Br,{...kr,enabled:!!g},{name:"eventListeners",...jr(p)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:s!=null?s:[0,i]}},{name:"flip",enabled:!!l,options:{padding:8}},{name:"preventOverflow",enabled:!!m,options:{boundary:f}},...r!=null?r:[]],strategy:n}),d.current.forceUpdate(),b.current=d.current.destroy)},[x,t,r,g,p,a,s,i,l,m,f,n]);S.exports.useEffect(()=>()=>{var u;!y.current&&!h.current&&((u=d.current)==null||u.destroy(),d.current=null)},[]);const v=S.exports.useCallback(u=>{y.current=u,A()},[A]),O=S.exports.useCallback((u={},E=null)=>({...u,ref:Ue(v,E)}),[v]),w=S.exports.useCallback(u=>{h.current=u,A()},[A]),P=S.exports.useCallback((u={},E=null)=>({...u,ref:Ue(w,E),style:{...u.style,position:n,minWidth:g?void 0:"max-content",inset:"0 auto auto 0"}}),[n,w,g]),C=S.exports.useCallback((u={},E=null)=>{const{size:W,shadowColor:D,bg:q,style:F,...$}=u;return{...$,ref:E,"data-popper-arrow":"",style:Ir(u)}},[]),R=S.exports.useCallback((u={},E=null)=>({...u,ref:E,"data-popper-arrow-inner":""}),[]);return{update(){var u;(u=d.current)==null||u.update()},forceUpdate(){var u;(u=d.current)==null||u.forceUpdate()},transformOrigin:B.transformOrigin.varRef,referenceRef:v,popperRef:w,getPopperProps:P,getArrowProps:C,getArrowInnerProps:R,getReferenceProps:O}}function Ir(e){const{size:t,shadowColor:r,bg:o,style:n}=e,a={...n,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),o&&(a["--popper-arrow-bg"]=o),a}function Yr(e={}){const{onClose:t,onOpen:r,isOpen:o,id:n}=e,a=Re(r),p=Re(t),[s,i]=S.exports.useState(e.defaultIsOpen||!1),l=o!==void 0?o:s,f=o!==void 0,m=S.exports.useId(),g=n!=null?n:`disclosure-${m}`,c=S.exports.useCallback(()=>{f||i(!1),p==null||p()},[f,p]),y=S.exports.useCallback(()=>{f||i(!0),a==null||a()},[f,a]),h=S.exports.useCallback(()=>{l?c():y()},[l,y,c]);function d(b={}){return{...b,"aria-expanded":l,"aria-controls":g,onClick(A){var v;(v=b.onClick)==null||v.call(b,A),h()}}}function x(b={}){return{...b,hidden:!l,id:g}}return{isOpen:l,onOpen:y,onClose:c,onToggle:h,isControlled:f,getButtonProps:d,getDisclosureProps:x}}function Nr(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var o,n,a,p,s=[],i=!0,l=!1;try{if(a=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;i=!1}else for(;!(i=(o=a.call(r)).done)&&(s.push(o.value),s.length!==t);i=!0);}catch(f){l=!0,n=f}finally{try{if(!i&&r.return!=null&&(p=r.return(),Object(p)!==p))return}finally{if(l)throw n}}return s}}function Gr(e,t){return wt(e)||Nr(e,t)||bt(e,t)||xt()}export{Gr as _,Yr as a,Xr as b,B as c,Cr as d,Ur as u};
