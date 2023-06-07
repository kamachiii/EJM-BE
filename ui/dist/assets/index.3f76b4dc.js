import{r as T,c as te,ae as re,a4 as oe,d as ne,f as ae,R as ie,a as i,aj as se,j as C,F as le,D as ce,B as M}from"./index.4df5dae3.js";import{P as ue}from"./Page.ce903aa1.js";import{P as pe}from"./PageHeader.954bf5c1.js";import{U as de}from"./UserIcon.342b47fc.js";import{B as fe}from"./BeTable.0069771f.js";import{P as me}from"./PagePadding.8c1b0086.js";import{A as ye}from"./AddIcon.159dfaf4.js";import{g as be}from"./TableCheckbox.24618c03.js";import{U as ge}from"./useTableHelper.39837f07.js";import{d as he,a as ve,t as Ce,b as _e}from"./usersActions.d0e9b122.js";import{E as Oe}from"./EditIcon.3ffc7b25.js";import{D as P}from"./DeleteIcon.8cd44a6f.js";import{u as D,E as x}from"./useError.46aba7e3.js";import{o as k,c as w}from"./uiActions.0615ad97.js";import{C as j}from"./ConfirmDelete.bb641ee2.js";import{u as Se}from"./useTranslation.d56b7bba.js";import{B as g}from"./index.esm.780dcd2c.js";import{T as Pe}from"./index.esm.2ca9b441.js";import"./ArrowLeftIcon.0c9057ff.js";import"./FilterIcon.698af641.js";import"./index.esm.f3b9d19a.js";import"./slicedToArray.556cd5c1.js";import"./index.esm.17aaa28e.js";import"./index.238261e4.js";import"./ErrorEmpty.d1acacce.js";import"./Pagination.5113db8a.js";import"./ExpandLeftIcon.52c60c0f.js";import"./SearchInput.7f0274ff.js";import"./useDebounce.b8118708.js";import"./index.esm.b22a74c4.js";import"./objectWithoutPropertiesLoose.2d2ba74a.js";import"./inheritsLoose.cba8c0e3.js";var De=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}},xe=De,K={"text/plain":"Text","text/html":"Url",default:"Text"},ke="Copy to clipboard: #{key}, Enter";function we(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function je(e,t){var r,o,n,l,u,s,f=!1;t||(t={}),r=t.debug||!1;try{n=xe(),l=document.createRange(),u=document.getSelection(),s=document.createElement("span"),s.textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),typeof c.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var m=K[t.format]||K.default;window.clipboardData.setData(m,e)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,e);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))}),document.body.appendChild(s),l.selectNodeContents(s),u.addRange(l);var h=document.execCommand("copy");if(!h)throw new Error("copy command was unsuccessful");f=!0}catch(c){r&&console.error("unable to copy using execCommand: ",c),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(m){r&&console.error("unable to copy using clipboardData: ",m),r&&console.error("falling back to prompt"),o=we("message"in t?t.message:ke),window.prompt(o,e)}}finally{u&&(typeof u.removeRange=="function"?u.removeRange(l):u.removeAllRanges()),s&&document.body.removeChild(s),n()}return f}var Te=je,S={};function E(e){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(e)}Object.defineProperty(S,"__esModule",{value:!0});S.CopyToClipboard=void 0;var _=Q(T.exports),Ee=Q(Te),Ie=["text","onCopy","options","children"];function Q(e){return e&&e.__esModule?e:{default:e}}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),r.push.apply(r,o)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(o){R(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Ue(e,t){if(e==null)return{};var r=Re(e,t),o,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],!(t.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,o)||(r[o]=e[o]))}return r}function Re(e,t){if(e==null)return{};var r={},o=Object.keys(e),n,l;for(l=0;l<o.length;l++)n=o[l],!(t.indexOf(n)>=0)&&(r[n]=e[n]);return r}function Be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function F(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ze(e,t,r){return t&&F(e.prototype,t),r&&F(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ae(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}function I(e,t){return I=Object.setPrototypeOf||function(o,n){return o.__proto__=n,o},I(e,t)}function Ne(e){var t=Ke();return function(){var o=O(e),n;if(t){var l=O(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Me(this,n)}}function Me(e,t){if(t&&(E(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(e)}function H(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ke(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},O(e)}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q=function(e){Ae(r,e);var t=Ne(r);function r(){var o;Be(this,r);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return o=t.call.apply(t,[this].concat(l)),R(H(o),"onClick",function(s){var f=o.props,h=f.text,c=f.onCopy,m=f.children,y=f.options,b=_.default.Children.only(m),p=(0,Ee.default)(h,y);c&&c(h,p),b&&b.props&&typeof b.props.onClick=="function"&&b.props.onClick(s)}),o}return ze(r,[{key:"render",value:function(){var n=this.props;n.text,n.onCopy,n.options;var l=n.children,u=Ue(n,Ie),s=_.default.Children.only(l);return _.default.cloneElement(s,$($({},u),{},{onClick:this.onClick}))}}]),r}(_.default.PureComponent);S.CopyToClipboard=q;R(q,"defaultProps",{onCopy:void 0,options:void 0});var Le=S,U=Le.CopyToClipboard;U.CopyToClipboard=U;var $e=U;const _t=()=>{var z,A,N;const{t:e}=Se(["user","global"]),t=te(),{setPagination:r,searchValue:o,pagination:n,handleSearch:l}=ge(),u=re(),s=D(he),f=D(ve),h=D(Ce),c=oe(),m=ne(),[y,b]=T.exports.useState({}),{data:p,isLoading:W}=ae(["users",{searchValue:o,...n}],()=>_e({pageSize:n.pageSize,current:n.pageIndex+1,search:o}),{keepPreviousData:!1}),V=()=>t("/management/users/add"),X=a=>{s.mutate(a,{onSuccess:d=>{c({status:"success",title:"success",description:d.message,position:"top",isClosable:!0}),m(w()),u.invalidateQueries(["users"])},onError:d=>x(d,c)})},G=()=>{const a=Object.keys(y).map(d=>+d);f.mutate(a,{onSuccess:d=>{c({status:"success",title:"success",description:d.message,position:"top",isClosable:!0}),m(w()),u.invalidateQueries(["users"]),b({})},onError:d=>x(d,c)})},B=()=>{m(k(i(j,{onDelete:G}),e("modal.title.delete"),"sm"))},J=(a,d)=>{h.mutate({id:a,status:d},{onSuccess:v=>{c({status:"success",title:"success",description:v.message,position:"top",isClosable:!0}),m(w()),u.invalidateQueries(["users"])},onError:v=>x(v,c)})},Y=(a,d)=>{m(k(i(j,{onDelete:()=>J(a,d)}),"Update Status ?","sm"))},Z=a=>{m(k(i(j,{onDelete:()=>X(a)}),e("modal.title.delete"),"sm"))},ee=ie.useMemo(()=>[{id:"checkbox",...be({useCheckbox:!0})},{id:e("table_users.table_no"),header:e("table_users.table_no"),accessorFn:(a,d)=>d+1},{id:e("table_users.pict"),header:e("table_users.pict"),cell:({row:a})=>i("img",{src:a.original.profile_pict?`/api/v1/profiles/${a.original.profile_pict}`:"/images/default-image.jpg",alt:`Profile ${a.original.full_name}`,style:{borderRadius:50,border:"2px solid white",objectFit:"cover",width:40,height:40,maxWidth:40,maxHeight:40}})},{id:e("table_users.username"),header:e("table_users.username"),accessorKey:"username"},{id:e("table_users.name"),header:e("table_users.name"),accessorKey:"full_name"},{id:e("table_users.role"),header:e("table_users.role"),accessorKey:"role.name"},{id:e("table_users.status"),header:e("table_users.status"),accessorKey:"is_active",cell:({row:a})=>i(se,{colorScheme:a.original.is_active?"green":"red",children:a.original.is_active?e("active"):e("nonactive")})},{id:e("table_users.action"),header:e("table_users.action"),cell:({row:a})=>i(T.exports.Fragment,{children:C(le,{gap:2,alignItems:"center",children:[i(g,{size:"sm",variant:"solid",colorScheme:a.original.is_active?"red":"green",onClick:()=>Y(a.original.id,!a.original.is_active),children:a.original.is_active?"Set Non Active":"Set Active"}),a.original.enable_login_by_link?i($e.CopyToClipboard,{text:`${window.location.origin}/oauth/token/${a.original.pin}`,onCopy:()=>{c({status:"success",title:"success",description:"Link Copied",position:"top",isClosable:!0})},children:i(g,{size:"sm",variant:"solid",colorScheme:"yellow",children:"Copy Link"})}):null,i(g,{size:"sm",leftIcon:i(Oe,{}),variant:"outline",onClick:()=>t(`/management/users/edit/${a.original.id}`),children:"Edit"}),i(g,{size:"sm",onClick:()=>Z(a.original.id),leftIcon:i(P,{}),colorScheme:"red",children:"Delete"})]})})}],[e]);return C(ue,{title:e("label"),children:[i(pe,{label:e("label"),leftIcon:i(de,{fontSize:24}),additional:i(Pe,{label:"Add New User",children:i(g,{leftIcon:i(ye,{fontSize:20}),onClick:V,size:{base:"xs",lg:"sm"},children:e("buttons.add")})})}),i(ce,{}),i(me,{x:0,y:6}),i(fe,{enableResizeColumn:!1,useSearchInput:!0,loading:W,onSearch:l,leftFilter:i(M,{display:{base:"none",md:"block"},children:C(g,{leftIcon:i(P,{}),colorScheme:"red",onClick:B,isLoading:f.isLoading,disabled:Boolean(Object.keys(y).length<1),children:["Delete ",Object.keys(y).length," data"]})}),bottomFilter:i(M,{display:{base:"block",md:"none"},children:C(g,{leftIcon:i(P,{}),colorScheme:"red",size:"xs",onClick:B,isLoading:f.isLoading,disabled:Boolean(Object.keys(y).length<1),children:["Delete ",Object.keys(y).length," data"]})}),rowKey:(a,d,v)=>a==null?void 0:a.id,onChangeTable:r,pagination:{pageIndex:Number((z=p==null?void 0:p.page)!=null?z:0)-1,pageSize:Number((A=p==null?void 0:p.page_size)!=null?A:10)},pageCount:Number((N=p==null?void 0:p.page_count)!=null?N:0),onCheckboxChange:b,rowSelectionProps:y,totalRecords:p==null?void 0:p.total,data:p==null?void 0:p.users,columns:ee})]})};export{_t as default};
