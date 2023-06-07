import{P as $,a as be}from"./PagePadding.7fee7082.js";import{P as Te}from"./PageHeader.490c936a.js";import{u as we,b as Re,F as D,a as Oe}from"./FormFieldControl.8023fb62.js";import{r as C,aX as G,q as Ce,R as xe,a as g,j as L,aq as A,F as Ee,B as J,ap as Me,D as X,a2 as Ne,aa as Fe,c as Le}from"./index.6a975b74.js";import{F as Y}from"./FieldText.9db826f3.js";import{A as Z}from"./AddIcon.0b969bdb.js";import{D as Ae}from"./DeleteIcon.34bb886e.js";import{F as We}from"./FormFieldAnswerQuestions.d91938ad.js";import{F as De}from"./FieldSwitch.7b972762.js";import{_ as ke}from"./inheritsLoose.3cbf9e94.js";import{C as Pe,a as qe}from"./index.esm.0e6c6e8f.js";import{T as ee}from"./index.esm.91b674ff.js";import{I as te,B as fe}from"./index.esm.5c32f280.js";import{S as He}from"./SaveIcon.0a46007d.js";import{a as $e}from"./questionActions.88e56cf3.js";import{u as Ue,E as je}from"./useError.842a716d.js";import"./ArrowLeftIcon.f8803d27.js";import"./index.esm.58f73ea8.js";import"./FieldSelect.94dfb727.js";import"./select.168c276c.js";import"./slicedToArray.3357f2a5.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./index.esm.1d96a478.js";import"./index.esm.92b00b84.js";import"./index.esm.63338ecb.js";var Be=function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")},Qe=function(){function a(e,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,i){return r&&a(e.prototype,r),i&&a(e,i),e}}(),Ve=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},Ke=function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)},re=function(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:a},Ge=function(){function a(e,r){var i=[],n=!0,u=!1,f=void 0;try{for(var d=e[Symbol.iterator](),p;!(n=(p=d.next()).done)&&(i.push(p.value),!(r&&i.length===r));n=!0);}catch(I){u=!0,f=I}finally{try{!n&&d.return&&d.return()}finally{if(u)throw f}}return i}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return a(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),O=void 0;typeof window<"u"?O=window:typeof self<"u"?O=self:O=global;var U=null,j=null,ie=20,k=O.clearTimeout,ae=O.setTimeout,P=O.cancelAnimationFrame||O.mozCancelAnimationFrame||O.webkitCancelAnimationFrame,ne=O.requestAnimationFrame||O.mozRequestAnimationFrame||O.webkitRequestAnimationFrame;P==null||ne==null?(U=k,j=function(e){return ae(e,ie)}):(U=function(e){var r=Ge(e,2),i=r[0],n=r[1];P(i),k(n)},j=function(e){var r=ne(function(){k(i),e()}),i=ae(function(){P(r),e()},ie);return[r,i]});function Je(a){var e=void 0,r=void 0,i=void 0,n=void 0,u=void 0,f=void 0,d=void 0,p=typeof document<"u"&&document.attachEvent;if(!p){f=function(o){var c=o.__resizeTriggers__,m=c.firstElementChild,S=c.lastElementChild,w=m.firstElementChild;S.scrollLeft=S.scrollWidth,S.scrollTop=S.scrollHeight,w.style.width=m.offsetWidth+1+"px",w.style.height=m.offsetHeight+1+"px",m.scrollLeft=m.scrollWidth,m.scrollTop=m.scrollHeight},u=function(o){return o.offsetWidth!==o.__resizeLast__.width||o.offsetHeight!==o.__resizeLast__.height},d=function(o){if(!(o.target.className&&typeof o.target.className.indexOf=="function"&&o.target.className.indexOf("contract-trigger")<0&&o.target.className.indexOf("expand-trigger")<0)){var c=this;f(this),this.__resizeRAF__&&U(this.__resizeRAF__),this.__resizeRAF__=j(function(){u(c)&&(c.__resizeLast__.width=c.offsetWidth,c.__resizeLast__.height=c.offsetHeight,c.__resizeListeners__.forEach(function(w){w.call(c,o)}))})}};var I=!1,h="";i="animationstart";var T="Webkit Moz O ms".split(" "),b="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),z="";{var y=document.createElement("fakeelement");if(y.style.animationName!==void 0&&(I=!0),I===!1){for(var t=0;t<T.length;t++)if(y.style[T[t]+"AnimationName"]!==void 0){z=T[t],h="-"+z.toLowerCase()+"-",i=b[t],I=!0;break}}}r="resizeanim",e="@"+h+"keyframes "+r+" { from { opacity: 0; } to { opacity: 0; } } ",n=h+"animation: 1ms "+r+"; "}var s=function(o){if(!o.getElementById("detectElementResize")){var c=(e||"")+".resize-triggers { "+(n||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',m=o.head||o.getElementsByTagName("head")[0],S=o.createElement("style");S.id="detectElementResize",S.type="text/css",a!=null&&S.setAttribute("nonce",a),S.styleSheet?S.styleSheet.cssText=c:S.appendChild(o.createTextNode(c)),m.appendChild(S)}},l=function(o,c){if(p)o.attachEvent("onresize",c);else{if(!o.__resizeTriggers__){var m=o.ownerDocument,S=O.getComputedStyle(o);S&&S.position==="static"&&(o.style.position="relative"),s(m),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=m.createElement("div")).className="resize-triggers";var w=m.createElement("div");w.className="expand-trigger",w.appendChild(m.createElement("div"));var R=m.createElement("div");R.className="contract-trigger",o.__resizeTriggers__.appendChild(w),o.__resizeTriggers__.appendChild(R),o.appendChild(o.__resizeTriggers__),f(o),o.addEventListener("scroll",d,!0),i&&(o.__resizeTriggers__.__animationListener__=function(x){x.animationName===r&&f(o)},o.__resizeTriggers__.addEventListener(i,o.__resizeTriggers__.__animationListener__))}o.__resizeListeners__.push(c)}},_=function(o,c){if(p)o.detachEvent("onresize",c);else if(o.__resizeListeners__.splice(o.__resizeListeners__.indexOf(c),1),!o.__resizeListeners__.length){o.removeEventListener("scroll",d,!0),o.__resizeTriggers__.__animationListener__&&(o.__resizeTriggers__.removeEventListener(i,o.__resizeTriggers__.__animationListener__),o.__resizeTriggers__.__animationListener__=null);try{o.__resizeTriggers__=!o.removeChild(o.__resizeTriggers__)}catch{}}};return{addResizeListener:l,removeResizeListener:_}}var me=function(a){Ke(e,a);function e(){var r,i,n,u;Be(this,e);for(var f=arguments.length,d=Array(f),p=0;p<f;p++)d[p]=arguments[p];return u=(i=(n=re(this,(r=e.__proto__||Object.getPrototypeOf(e)).call.apply(r,[this].concat(d))),n),n.state={height:n.props.defaultHeight||0,width:n.props.defaultWidth||0},n._onResize=function(){var I=n.props,h=I.disableHeight,T=I.disableWidth,b=I.onResize;if(n._parentNode){var z=n._parentNode.offsetHeight||0,y=n._parentNode.offsetWidth||0,t=window.getComputedStyle(n._parentNode)||{},s=parseInt(t.paddingLeft,10)||0,l=parseInt(t.paddingRight,10)||0,_=parseInt(t.paddingTop,10)||0,v=parseInt(t.paddingBottom,10)||0,o=z-_-v,c=y-s-l;(!h&&n.state.height!==o||!T&&n.state.width!==c)&&(n.setState({height:z-_-v,width:y-s-l}),b({height:z,width:y}))}},n._setRef=function(I){n._autoSizer=I},i),re(n,u)}return Qe(e,[{key:"componentDidMount",value:function(){var i=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=Je(i),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var i=this.props,n=i.children,u=i.className,f=i.disableHeight,d=i.disableWidth,p=i.style,I=this.state,h=I.height,T=I.width,b={overflow:"visible"},z={},y=!1;return f||(h===0&&(y=!0),b.height=0,z.height=h),d||(T===0&&(y=!0),b.width=0,z.width=T),C.exports.createElement("div",{className:u,ref:this._setRef,style:Ve({},b,p)},!y&&n(z))}}]),e}(C.exports.PureComponent);me.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};var oe=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Xe(a,e){return!!(a===e||oe(a)&&oe(e))}function Ye(a,e){if(a.length!==e.length)return!1;for(var r=0;r<a.length;r++)if(!Xe(a[r],e[r]))return!1;return!0}function q(a,e){e===void 0&&(e=Ye);var r,i=[],n,u=!1;function f(){for(var d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return u&&r===this&&e(d,i)||(n=a.apply(this,d),u=!0,r=this,i=d),n}return f}var Ze=typeof performance=="object"&&typeof performance.now=="function",se=Ze?function(){return performance.now()}:function(){return Date.now()};function le(a){cancelAnimationFrame(a.id)}function et(a,e){var r=se();function i(){se()-r>=e?a.call(null):n.id=requestAnimationFrame(i)}var n={id:requestAnimationFrame(i)};return n}var H=-1;function ce(a){if(a===void 0&&(a=!1),H===-1||a){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(e),H=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return H}var E=null;function ue(a){if(a===void 0&&(a=!1),E===null||a){var e=document.createElement("div"),r=e.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var i=document.createElement("div"),n=i.style;return n.width="100px",n.height="100px",e.appendChild(i),document.body.appendChild(e),e.scrollLeft>0?E="positive-descending":(e.scrollLeft=1,e.scrollLeft===0?E="negative":E="positive-ascending"),document.body.removeChild(e),E}return E}var tt=150,rt=function(e,r){return e};function it(a){var e,r=a.getItemOffset,i=a.getEstimatedTotalSize,n=a.getItemSize,u=a.getOffsetForIndexAndAlignment,f=a.getStartIndexForOffset,d=a.getStopIndexForStartIndex,p=a.initInstanceProps,I=a.shouldResetStyleCacheOnItemSizeChange,h=a.validateProps;return e=function(T){ke(b,T);function b(y){var t;return t=T.call(this,y)||this,t._instanceProps=p(t.props,G(t)),t._outerRef=void 0,t._resetIsScrollingTimeoutId=null,t.state={instance:G(t),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof t.props.initialScrollOffset=="number"?t.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},t._callOnItemsRendered=void 0,t._callOnItemsRendered=q(function(s,l,_,v){return t.props.onItemsRendered({overscanStartIndex:s,overscanStopIndex:l,visibleStartIndex:_,visibleStopIndex:v})}),t._callOnScroll=void 0,t._callOnScroll=q(function(s,l,_){return t.props.onScroll({scrollDirection:s,scrollOffset:l,scrollUpdateWasRequested:_})}),t._getItemStyle=void 0,t._getItemStyle=function(s){var l=t.props,_=l.direction,v=l.itemSize,o=l.layout,c=t._getItemStyleCache(I&&v,I&&o,I&&_),m;if(c.hasOwnProperty(s))m=c[s];else{var S=r(t.props,s,t._instanceProps),w=n(t.props,s,t._instanceProps),R=_==="horizontal"||o==="horizontal",N=_==="rtl",x=R?S:0;c[s]=m={position:"absolute",left:N?void 0:x,right:N?x:void 0,top:R?0:S,height:R?"100%":w,width:R?w:"100%"}}return m},t._getItemStyleCache=void 0,t._getItemStyleCache=q(function(s,l,_){return{}}),t._onScrollHorizontal=function(s){var l=s.currentTarget,_=l.clientWidth,v=l.scrollLeft,o=l.scrollWidth;t.setState(function(c){if(c.scrollOffset===v)return null;var m=t.props.direction,S=v;if(m==="rtl")switch(ue()){case"negative":S=-v;break;case"positive-descending":S=o-_-v;break}return S=Math.max(0,Math.min(S,o-_)),{isScrolling:!0,scrollDirection:c.scrollOffset<v?"forward":"backward",scrollOffset:S,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._onScrollVertical=function(s){var l=s.currentTarget,_=l.clientHeight,v=l.scrollHeight,o=l.scrollTop;t.setState(function(c){if(c.scrollOffset===o)return null;var m=Math.max(0,Math.min(o,v-_));return{isScrolling:!0,scrollDirection:c.scrollOffset<m?"forward":"backward",scrollOffset:m,scrollUpdateWasRequested:!1}},t._resetIsScrollingDebounced)},t._outerRefSetter=function(s){var l=t.props.outerRef;t._outerRef=s,typeof l=="function"?l(s):l!=null&&typeof l=="object"&&l.hasOwnProperty("current")&&(l.current=s)},t._resetIsScrollingDebounced=function(){t._resetIsScrollingTimeoutId!==null&&le(t._resetIsScrollingTimeoutId),t._resetIsScrollingTimeoutId=et(t._resetIsScrolling,tt)},t._resetIsScrolling=function(){t._resetIsScrollingTimeoutId=null,t.setState({isScrolling:!1},function(){t._getItemStyleCache(-1,null)})},t}b.getDerivedStateFromProps=function(t,s){return at(t,s),h(t),null};var z=b.prototype;return z.scrollTo=function(t){t=Math.max(0,t),this.setState(function(s){return s.scrollOffset===t?null:{scrollDirection:s.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},z.scrollToItem=function(t,s){s===void 0&&(s="auto");var l=this.props,_=l.itemCount,v=l.layout,o=this.state.scrollOffset;t=Math.max(0,Math.min(t,_-1));var c=0;if(this._outerRef){var m=this._outerRef;v==="vertical"?c=m.scrollWidth>m.clientWidth?ce():0:c=m.scrollHeight>m.clientHeight?ce():0}this.scrollTo(u(this.props,t,s,o,this._instanceProps,c))},z.componentDidMount=function(){var t=this.props,s=t.direction,l=t.initialScrollOffset,_=t.layout;if(typeof l=="number"&&this._outerRef!=null){var v=this._outerRef;s==="horizontal"||_==="horizontal"?v.scrollLeft=l:v.scrollTop=l}this._callPropsCallbacks()},z.componentDidUpdate=function(){var t=this.props,s=t.direction,l=t.layout,_=this.state,v=_.scrollOffset,o=_.scrollUpdateWasRequested;if(o&&this._outerRef!=null){var c=this._outerRef;if(s==="horizontal"||l==="horizontal")if(s==="rtl")switch(ue()){case"negative":c.scrollLeft=-v;break;case"positive-ascending":c.scrollLeft=v;break;default:var m=c.clientWidth,S=c.scrollWidth;c.scrollLeft=S-m-v;break}else c.scrollLeft=v;else c.scrollTop=v}this._callPropsCallbacks()},z.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&le(this._resetIsScrollingTimeoutId)},z.render=function(){var t=this.props,s=t.children,l=t.className,_=t.direction,v=t.height,o=t.innerRef,c=t.innerElementType,m=t.innerTagName,S=t.itemCount,w=t.itemData,R=t.itemKey,N=R===void 0?rt:R,x=t.layout,pe=t.outerElementType,ve=t.outerTagName,ge=t.style,_e=t.useIsScrolling,Se=t.width,B=this.state.isScrolling,W=_==="horizontal"||x==="horizontal",Ie=W?this._onScrollHorizontal:this._onScrollVertical,Q=this._getRangeToRender(),ze=Q[0],ye=Q[1],V=[];if(S>0)for(var F=ze;F<=ye;F++)V.push(C.exports.createElement(s,{data:w,key:N(F,w),index:F,isScrolling:_e?B:void 0,style:this._getItemStyle(F)}));var K=i(this.props,this._instanceProps);return C.exports.createElement(pe||ve||"div",{className:l,onScroll:Ie,ref:this._outerRefSetter,style:Ce({position:"relative",height:v,width:Se,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:_},ge)},C.exports.createElement(c||m||"div",{children:V,ref:o,style:{height:W?"100%":K,pointerEvents:B?"none":void 0,width:W?K:"100%"}}))},z._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var t=this.props.itemCount;if(t>0){var s=this._getRangeToRender(),l=s[0],_=s[1],v=s[2],o=s[3];this._callOnItemsRendered(l,_,v,o)}}if(typeof this.props.onScroll=="function"){var c=this.state,m=c.scrollDirection,S=c.scrollOffset,w=c.scrollUpdateWasRequested;this._callOnScroll(m,S,w)}},z._getRangeToRender=function(){var t=this.props,s=t.itemCount,l=t.overscanCount,_=this.state,v=_.isScrolling,o=_.scrollDirection,c=_.scrollOffset;if(s===0)return[0,0,0,0];var m=f(this.props,c,this._instanceProps),S=d(this.props,m,c,this._instanceProps),w=!v||o==="backward"?Math.max(1,l):1,R=!v||o==="forward"?Math.max(1,l):1;return[Math.max(0,m-w),Math.max(0,Math.min(s-1,S+R)),m,S]},b}(C.exports.PureComponent),e.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},e}var at=function(e,r){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,r.instance},nt=50,M=function(e,r,i){var n=e,u=n.itemSize,f=i.itemMetadataMap,d=i.lastMeasuredIndex;if(r>d){var p=0;if(d>=0){var I=f[d];p=I.offset+I.size}for(var h=d+1;h<=r;h++){var T=u(h);f[h]={offset:p,size:T},p+=T}i.lastMeasuredIndex=r}return f[r]},ot=function(e,r,i){var n=r.itemMetadataMap,u=r.lastMeasuredIndex,f=u>0?n[u].offset:0;return f>=i?he(e,r,u,0,i):st(e,r,Math.max(0,u),i)},he=function(e,r,i,n,u){for(;n<=i;){var f=n+Math.floor((i-n)/2),d=M(e,f,r).offset;if(d===u)return f;d<u?n=f+1:d>u&&(i=f-1)}return n>0?n-1:0},st=function(e,r,i,n){for(var u=e.itemCount,f=1;i<u&&M(e,i,r).offset<n;)i+=f,f*=2;return he(e,r,Math.min(i,u-1),Math.floor(i/2),n)},de=function(e,r){var i=e.itemCount,n=r.itemMetadataMap,u=r.estimatedItemSize,f=r.lastMeasuredIndex,d=0;if(f>=i&&(f=i-1),f>=0){var p=n[f];d=p.offset+p.size}var I=i-f-1,h=I*u;return d+h},lt=it({getItemOffset:function(e,r,i){return M(e,r,i).offset},getItemSize:function(e,r,i){return i.itemMetadataMap[r].size},getEstimatedTotalSize:de,getOffsetForIndexAndAlignment:function(e,r,i,n,u,f){var d=e.direction,p=e.height,I=e.layout,h=e.width,T=d==="horizontal"||I==="horizontal",b=T?h:p,z=M(e,r,u),y=de(e,u),t=Math.max(0,Math.min(y-b,z.offset)),s=Math.max(0,z.offset-b+z.size+f);switch(i==="smart"&&(n>=s-b&&n<=t+b?i="auto":i="center"),i){case"start":return t;case"end":return s;case"center":return Math.round(s+(t-s)/2);case"auto":default:return n>=s&&n<=t?n:n<s?s:t}},getStartIndexForOffset:function(e,r,i){return ot(e,i,r)},getStopIndexForStartIndex:function(e,r,i,n){for(var u=e.direction,f=e.height,d=e.itemCount,p=e.layout,I=e.width,h=u==="horizontal"||p==="horizontal",T=h?I:f,b=M(e,r,n),z=i+T,y=b.offset+b.size,t=r;t<d-1&&y<z;)t++,y+=M(e,t,n).size;return t},initInstanceProps:function(e,r){var i=e,n=i.estimatedItemSize,u={itemMetadataMap:{},estimatedItemSize:n||nt,lastMeasuredIndex:-1};return r.resetAfterIndex=function(f,d){d===void 0&&(d=!0),u.lastMeasuredIndex=Math.min(u.lastMeasuredIndex,f-1),r._getItemStyleCache(-1),d&&r.forceUpdate()},u},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(e){e.itemSize}});const ct=()=>{const{control:a,formState:e}=we(),{fields:r,append:i,remove:n}=Re({control:a,name:"questions",rules:{minLength:1}}),u=C.exports.useRef({}),f=C.exports.useRef({});function d(h){return u.current[h]+8||82}const p=xe.memo(({index:h,style:T})=>{const b=C.exports.useRef(null),z=C.exports.useRef({}),y=()=>{var l;I(h,(l=z.current)==null?void 0:l.clientHeight)},t=()=>{var l;(l=b.current)==null||l.appendQuestions(),setTimeout(()=>{y()},100)},s=l=>{n(l)};return C.exports.useEffect(()=>{var l;z.current&&I(h,(l=z.current)==null?void 0:l.clientHeight)},[z]),g("div",{style:T,children:g(Pe,{ref:z,children:g(qe,{children:L(A,{children:[L(Ee,{gap:5,alignItems:"end",children:[g(D,{control:a,formState:e,label:`Pertanyaan ${h+1}`,id:`questions.${h}.name`,name:`questions.${h}.name`,rules:{required:{value:!0,message:"Dibutuhkan"}},children:g(Y,{})}),g(J,{flex:1,children:g(D,{control:a,formState:e,label:"Wajib",id:`questions.${h}.is_mandatory`,name:`questions.${h}.is_mandatory`,children:g(De,{})})}),g(ee,{label:"Tambah Pilihan Jawaban",children:g(te,{"aria-label":"add-options",icon:g(Z,{fontSize:26}),onClick:t,variant:"outline",border:"none"})}),g(ee,{label:"Hapus Jawaban",children:g(te,{"aria-label":"remove",icon:g(Ae,{fontSize:26}),variant:"outline",onClick:()=>s(h),border:"none"})})]}),g(J,{ml:5,children:g(We,{ref:b,recalculateHeight:y,parentName:`questions.${h}.options`,control:a,formState:e})})]})})})})});function I(h,T){var b;(b=f.current)==null||b.resetAfterIndex(0),u.current={...u.current,[h]:T}}return L(Me,{templateColumns:"repeat(1,1fr)",gap:5,children:[g(A,{children:g($,{x:6,children:g(D,{control:a,formState:e,label:"Nama Template",id:"template_name",name:"template_name",rules:{required:{value:!0,message:"Dibutuhkan"}},children:g(Y,{})})})}),g(A,{children:g($,{x:6,children:g(fe,{leftIcon:g(Z,{}),onClick:()=>i({name:null,is_mandatory:!1,options:[{name:"Ya",value:{label:"1",value:1},conditions:[]},{name:"Tidak",value:{label:"0",value:0},conditions:[]}]}),size:"sm",children:"Tambah Baris Pertanyaan"})})}),g(X,{}),g(A,{children:g("div",{style:{minHeight:"500px"},children:g(me,{children:({height:h,width:T})=>g(lt,{height:h,itemCount:r.length||0,itemSize:d,width:T,ref:f,itemData:r,itemKey:b=>r[b].id,children:p})})})}),g(X,{})]})},At=()=>{const a=Ne(),e=Fe(),r=Le(),i=Ue($e);return L(be,{title:"Tambah Pertanyaan",children:[g(Te,{label:"Tambah Pertanyaan",useBackButton:!0}),L(Oe,{onSubmit:u=>{if(u.questions.length<1)a({status:"warning",title:"Warning",description:"Pertanyaan wajib ada",position:"top",isClosable:!0});else{const f=u.questions.map(d=>({...d,options:d.options.map(p=>{var I;return{...p,conditions:p.conditions.length>0?p.conditions.map(h=>{var T;return{...h,is_mandatory:(T=h.is_mandatory)!=null?T:!1}}):[],value:(I=p.value)==null?void 0:I.value}})}));i.mutate({name:u.template_name,questions:f},{onSuccess:d=>{a({status:"success",title:"Sukses",description:d.message,position:"top",isClosable:!0}),e.invalidateQueries(["question_templates"]),r("/master/setup-questions")},onError:d=>je(d,a)})}},id:"form-questions",initialValues:{questions:[],template_name:""},children:[g(ct,{}),g($,{x:6,children:g(fe,{type:"submit",leftIcon:g(He,{}),mt:5,children:"Save"})})]})]})};export{At as default};
