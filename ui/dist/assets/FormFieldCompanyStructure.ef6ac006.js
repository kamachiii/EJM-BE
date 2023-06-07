import{u as je,F as Ve,b as Ir}from"./FormFieldControl.4d0de4ad.js";import{F as Sr}from"./FieldText.54672b0b.js";import{aU as V,aV as G,y as Ge,aW as Ye,r as p,a as c,j as w,I as _r,u as jr,aq as Pe,ar as N,B as Pr,F as pe,T as ur,aX as kr,aY as Lr,aZ as Tr,K as Rr,R as Mr,D as zr}from"./index.94f4ac20.js";import{p as f,P as Br}from"./PagePadding.6046cab3.js";import{F as $r}from"./FileIcon.a11d0540.js";import{F as ce,a as le,g as Kr,I as Ze,d as qe}from"./index.esm.ad9c0ced.js";import{F as Ur}from"./FieldSelect.c34982f4.js";import{A as Wr}from"./AddIcon.d57b60e6.js";import{D as Hr}from"./DeleteIcon.33d0d750.js";import{I as cr}from"./index.esm.634a2674.js";var Nr=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function Q(e,r){var t=Vr(e);if(typeof t.path!="string"){var n=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof n=="string"&&n.length>0?n:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function Vr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var n=r.split(".").pop().toLowerCase(),o=Nr.get(n);o&&Object.defineProperty(e,"type",{value:o,writable:!1,configurable:!1,enumerable:!0})}return e}var Gr=[".DS_Store","Thumbs.db"];function Yr(e){return V(this,void 0,void 0,function(){return G(this,function(r){return fe(e)&&Zr(e.dataTransfer)?[2,Qr(e.dataTransfer,e.type)]:qr(e)?[2,Jr(e)]:Array.isArray(e)&&e.every(function(t){return"getFile"in t&&typeof t.getFile=="function"})?[2,Xr(e)]:[2,[]]})})}function Zr(e){return fe(e)}function qr(e){return fe(e)&&fe(e.target)}function fe(e){return typeof e=="object"&&e!==null}function Jr(e){return Ee(e.target.files).map(function(r){return Q(r)})}function Xr(e){return V(this,void 0,void 0,function(){var r;return G(this,function(t){switch(t.label){case 0:return[4,Promise.all(e.map(function(n){return n.getFile()}))];case 1:return r=t.sent(),[2,r.map(function(n){return Q(n)})]}})})}function Qr(e,r){return V(this,void 0,void 0,function(){var t,n;return G(this,function(o){switch(o.label){case 0:return e.items?(t=Ee(e.items).filter(function(a){return a.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(et))]):[3,2];case 1:return n=o.sent(),[2,Je(lr(n))];case 2:return[2,Je(Ee(e.files).map(function(a){return Q(a)}))]}})})}function Je(e){return e.filter(function(r){return Gr.indexOf(r.name)===-1})}function Ee(e){if(e===null)return[];for(var r=[],t=0;t<e.length;t++){var n=e[t];r.push(n)}return r}function et(e){if(typeof e.webkitGetAsEntry!="function")return Xe(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?pr(r):Xe(e)}function lr(e){return e.reduce(function(r,t){return Ge(Ge([],Ye(r),!1),Ye(Array.isArray(t)?lr(t):[t]),!1)},[])}function Xe(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var t=Q(r);return Promise.resolve(t)}function rt(e){return V(this,void 0,void 0,function(){return G(this,function(r){return[2,e.isDirectory?pr(e):tt(e)]})})}function pr(e){var r=e.createReader();return new Promise(function(t,n){var o=[];function a(){var l=this;r.readEntries(function(u){return V(l,void 0,void 0,function(){var g,O,y;return G(this,function(D){switch(D.label){case 0:if(u.length)return[3,5];D.label=1;case 1:return D.trys.push([1,3,,4]),[4,Promise.all(o)];case 2:return g=D.sent(),t(g),[3,4];case 3:return O=D.sent(),n(O),[3,4];case 4:return[3,6];case 5:y=Promise.all(u.map(rt)),o.push(y),a(),D.label=6;case 6:return[2]}})})},function(u){n(u)})}a()})}function tt(e){return V(this,void 0,void 0,function(){return G(this,function(r){return[2,new Promise(function(t,n){e.file(function(o){var a=Q(o,e.fullPath);t(a)},function(o){n(o)})})]})})}var nt=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),n=e.name||"",o=(e.type||"").toLowerCase(),a=o.replace(/\/.*$/,"");return t.some(function(l){var u=l.trim().toLowerCase();return u.charAt(0)==="."?n.toLowerCase().endsWith(u):u.endsWith("/*")?a===u.replace(/\/.*$/,""):o===u})}return!0};function Qe(e){return at(e)||it(e)||dr(e)||ot()}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function at(e){if(Array.isArray(e))return Oe(e)}function er(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function rr(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?er(Object(t),!0).forEach(function(n){fr(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):er(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function fr(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function X(e,r){return ct(e)||ut(e,r)||dr(e,r)||st()}function st(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dr(e,r){if(!!e){if(typeof e=="string")return Oe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Oe(e,r)}}function Oe(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function ut(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,l,u;try{for(t=t.call(e);!(o=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));o=!0);}catch(g){a=!0,u=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw u}}return n}}function ct(e){if(Array.isArray(e))return e}var lt="file-invalid-type",pt="file-too-large",ft="file-too-small",dt="too-many-files",mt=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:lt,message:"File type must be ".concat(t)}},tr=function(r){return{code:pt,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},nr=function(r){return{code:ft,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},gt={code:dt,message:"Too many files"};function mr(e,r){var t=e.type==="application/x-moz-file"||nt(e,r);return[t,t?null:mt(r)]}function gr(e,r,t){if($(e.size))if($(r)&&$(t)){if(e.size>t)return[!1,tr(t)];if(e.size<r)return[!1,nr(r)]}else{if($(r)&&e.size<r)return[!1,nr(r)];if($(t)&&e.size>t)return[!1,tr(t)]}return[!0,null]}function $(e){return e!=null}function ht(e){var r=e.files,t=e.accept,n=e.minSize,o=e.maxSize,a=e.multiple,l=e.maxFiles,u=e.validator;return!a&&r.length>1||a&&l>=1&&r.length>l?!1:r.every(function(g){var O=mr(g,t),y=X(O,1),D=y[0],S=gr(g,n,o),_=X(S,1),j=_[0],P=u?u(g):null;return D&&j&&!P})}function de(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function se(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function or(e){e.preventDefault()}function vt(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function yt(e){return e.indexOf("Edge/")!==-1}function bt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return vt(e)||yt(e)}function R(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(n){for(var o=arguments.length,a=new Array(o>1?o-1:0),l=1;l<o;l++)a[l-1]=arguments[l];return r.some(function(u){return!de(n)&&u&&u.apply(void 0,[n].concat(a)),de(n)})}}function xt(){return"showOpenFilePicker"in window}function Dt(e){if($(e)){var r=Object.entries(e).filter(function(t){var n=X(t,2),o=n[0],a=n[1],l=!0;return hr(o)||(console.warn('Skipped "'.concat(o,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),l=!1),(!Array.isArray(a)||!a.every(vr))&&(console.warn('Skipped "'.concat(o,'" because an invalid file extension was provided.')),l=!1),l}).reduce(function(t,n){var o=X(n,2),a=o[0],l=o[1];return rr(rr({},t),{},fr({},a,l))},{});return[{description:"Files",accept:r}]}return e}function Ft(e){if($(e))return Object.entries(e).reduce(function(r,t){var n=X(t,2),o=n[0],a=n[1];return[].concat(Qe(r),[o],Qe(a))},[]).filter(function(r){return hr(r)||vr(r)}).join(",")}function At(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function wt(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function hr(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function vr(e){return/^.*\.[\w]+$/.test(e)}var Ct=["children"],Et=["open"],Ot=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],It=["refKey","onChange","onClick"];function St(e){return Pt(e)||jt(e)||yr(e)||_t()}function _t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pt(e){if(Array.isArray(e))return Ie(e)}function Ce(e,r){return Tt(e)||Lt(e,r)||yr(e,r)||kt()}function kt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(e,r){if(!!e){if(typeof e=="string")return Ie(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ie(e,r)}}function Ie(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Lt(e,r){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var n=[],o=!0,a=!1,l,u;try{for(t=t.call(e);!(o=(l=t.next()).done)&&(n.push(l.value),!(r&&n.length===r));o=!0);}catch(g){a=!0,u=g}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw u}}return n}}function Tt(e){if(Array.isArray(e))return e}function ir(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?ir(Object(t),!0).forEach(function(n){Se(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ir(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Se(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function me(e,r){if(e==null)return{};var t=Rt(e,r),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(t[n]=e[n]))}return t}function Rt(e,r){if(e==null)return{};var t={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(r.indexOf(o)>=0)&&(t[o]=e[o]);return t}var ke=p.exports.forwardRef(function(e,r){var t=e.children,n=me(e,Ct),o=xr(n),a=o.open,l=me(o,Et);return p.exports.useImperativeHandle(r,function(){return{open:a}},[a]),c(p.exports.Fragment,{children:t(m(m({},l),{},{open:a}))})});ke.displayName="Dropzone";var br={disabled:!1,getFilesFromEvent:Yr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};ke.defaultProps=br;ke.propTypes={children:f.exports.func,accept:f.exports.objectOf(f.exports.arrayOf(f.exports.string)),multiple:f.exports.bool,preventDropOnDocument:f.exports.bool,noClick:f.exports.bool,noKeyboard:f.exports.bool,noDrag:f.exports.bool,noDragEventsBubbling:f.exports.bool,minSize:f.exports.number,maxSize:f.exports.number,maxFiles:f.exports.number,disabled:f.exports.bool,getFilesFromEvent:f.exports.func,onFileDialogCancel:f.exports.func,onFileDialogOpen:f.exports.func,useFsAccessApi:f.exports.bool,autoFocus:f.exports.bool,onDragEnter:f.exports.func,onDragLeave:f.exports.func,onDragOver:f.exports.func,onDrop:f.exports.func,onDropAccepted:f.exports.func,onDropRejected:f.exports.func,onError:f.exports.func,validator:f.exports.func};var _e={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function xr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},br),e),t=r.accept,n=r.disabled,o=r.getFilesFromEvent,a=r.maxSize,l=r.minSize,u=r.multiple,g=r.maxFiles,O=r.onDragEnter,y=r.onDragLeave,D=r.onDragOver,S=r.onDrop,_=r.onDropAccepted,j=r.onDropRejected,P=r.onFileDialogCancel,k=r.onFileDialogOpen,L=r.useFsAccessApi,d=r.autoFocus,F=r.preventDropOnDocument,T=r.noClick,M=r.noKeyboard,z=r.noDrag,h=r.noDragEventsBubbling,Y=r.onError,Z=r.validator,q=p.exports.useMemo(function(){return Ft(t)},[t]),Le=p.exports.useMemo(function(){return Dt(t)},[t]),ge=p.exports.useMemo(function(){return typeof k=="function"?k:ar},[k]),ee=p.exports.useMemo(function(){return typeof P=="function"?P:ar},[P]),A=p.exports.useRef(null),I=p.exports.useRef(null),Fr=p.exports.useReducer(Mt,_e),Te=Ce(Fr,2),he=Te[0],C=Te[1],Ar=he.isFocused,Re=he.isFileDialogActive,re=p.exports.useRef(typeof window<"u"&&window.isSecureContext&&L&&xt()),Me=function(){!re.current&&Re&&setTimeout(function(){if(I.current){var s=I.current.files;s.length||(C({type:"closeDialog"}),ee())}},300)};p.exports.useEffect(function(){return window.addEventListener("focus",Me,!1),function(){window.removeEventListener("focus",Me,!1)}},[I,Re,ee,re]);var K=p.exports.useRef([]),ze=function(s){A.current&&A.current.contains(s.target)||(s.preventDefault(),K.current=[])};p.exports.useEffect(function(){return F&&(document.addEventListener("dragover",or,!1),document.addEventListener("drop",ze,!1)),function(){F&&(document.removeEventListener("dragover",or),document.removeEventListener("drop",ze))}},[A,F]),p.exports.useEffect(function(){return!n&&d&&A.current&&A.current.focus(),function(){}},[A,d,n]);var B=p.exports.useCallback(function(i){Y?Y(i):console.error(i)},[Y]),Be=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),ie(i),K.current=[].concat(St(K.current),[i.target]),se(i)&&Promise.resolve(o(i)).then(function(s){if(!(de(i)&&!h)){var v=s.length,b=v>0&&ht({files:s,accept:q,minSize:l,maxSize:a,multiple:u,maxFiles:g,validator:Z}),E=v>0&&!b;C({isDragAccept:b,isDragReject:E,isDragActive:!0,type:"setDraggedFiles"}),O&&O(i)}}).catch(function(s){return B(s)})},[o,O,B,h,q,l,a,u,g,Z]),$e=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),ie(i);var s=se(i);if(s&&i.dataTransfer)try{i.dataTransfer.dropEffect="copy"}catch{}return s&&D&&D(i),!1},[D,h]),Ke=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),ie(i);var s=K.current.filter(function(b){return A.current&&A.current.contains(b)}),v=s.indexOf(i.target);v!==-1&&s.splice(v,1),K.current=s,!(s.length>0)&&(C({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),se(i)&&y&&y(i))},[A,y,h]),te=p.exports.useCallback(function(i,s){var v=[],b=[];i.forEach(function(E){var J=mr(E,q),H=Ce(J,2),ye=H[0],be=H[1],xe=gr(E,l,a),ae=Ce(xe,2),De=ae[0],Fe=ae[1],Ae=Z?Z(E):null;if(ye&&De&&!Ae)v.push(E);else{var we=[be,Fe];Ae&&(we=we.concat(Ae)),b.push({file:E,errors:we.filter(function(Or){return Or})})}}),(!u&&v.length>1||u&&g>=1&&v.length>g)&&(v.forEach(function(E){b.push({file:E,errors:[gt]})}),v.splice(0)),C({acceptedFiles:v,fileRejections:b,type:"setFiles"}),S&&S(v,b,s),b.length>0&&j&&j(b,s),v.length>0&&_&&_(v,s)},[C,u,q,l,a,g,S,_,j,Z]),ne=p.exports.useCallback(function(i){i.preventDefault(),i.persist(),ie(i),K.current=[],se(i)&&Promise.resolve(o(i)).then(function(s){de(i)&&!h||te(s,i)}).catch(function(s){return B(s)}),C({type:"reset"})},[o,te,B,h]),U=p.exports.useCallback(function(){if(re.current){C({type:"openDialog"}),ge();var i={multiple:u,types:Le};window.showOpenFilePicker(i).then(function(s){return o(s)}).then(function(s){te(s,null),C({type:"closeDialog"})}).catch(function(s){At(s)?(ee(s),C({type:"closeDialog"})):wt(s)?(re.current=!1,I.current?(I.current.value=null,I.current.click()):B(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):B(s)});return}I.current&&(C({type:"openDialog"}),ge(),I.current.value=null,I.current.click())},[C,ge,ee,L,te,B,Le,u]),Ue=p.exports.useCallback(function(i){!A.current||!A.current.isEqualNode(i.target)||(i.key===" "||i.key==="Enter"||i.keyCode===32||i.keyCode===13)&&(i.preventDefault(),U())},[A,U]),We=p.exports.useCallback(function(){C({type:"focus"})},[]),He=p.exports.useCallback(function(){C({type:"blur"})},[]),Ne=p.exports.useCallback(function(){T||(bt()?setTimeout(U,0):U())},[T,U]),W=function(s){return n?null:s},ve=function(s){return M?null:W(s)},oe=function(s){return z?null:W(s)},ie=function(s){h&&s.stopPropagation()},wr=p.exports.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,v=s===void 0?"ref":s,b=i.role,E=i.onKeyDown,J=i.onFocus,H=i.onBlur,ye=i.onClick,be=i.onDragEnter,xe=i.onDragOver,ae=i.onDragLeave,De=i.onDrop,Fe=me(i,Ot);return m(m(Se({onKeyDown:ve(R(E,Ue)),onFocus:ve(R(J,We)),onBlur:ve(R(H,He)),onClick:W(R(ye,Ne)),onDragEnter:oe(R(be,Be)),onDragOver:oe(R(xe,$e)),onDragLeave:oe(R(ae,Ke)),onDrop:oe(R(De,ne)),role:typeof b=="string"&&b!==""?b:"presentation"},v,A),!n&&!M?{tabIndex:0}:{}),Fe)}},[A,Ue,We,He,Ne,Be,$e,Ke,ne,M,z,n]),Cr=p.exports.useCallback(function(i){i.stopPropagation()},[]),Er=p.exports.useMemo(function(){return function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=i.refKey,v=s===void 0?"ref":s,b=i.onChange,E=i.onClick,J=me(i,It),H=Se({accept:q,multiple:u,type:"file",style:{display:"none"},onChange:W(R(b,ne)),onClick:W(R(E,Cr)),tabIndex:-1},v,I);return m(m({},H),J)}},[I,t,u,ne,n]);return m(m({},he),{},{isFocused:Ar&&!n,getRootProps:wr,getInputProps:Er,rootRef:A,inputRef:I,open:W(U)})}function Mt(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},_e),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return m(m({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m({},_e);default:return e}}function ar(){}const zt=({...e})=>w(_r,{...e,children:[c("path",{d:"M12 5L11.2929 4.29289L12 3.58579L12.7071 4.29289L12 5ZM13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14L13 14ZM6.29289 9.29289L11.2929 4.29289L12.7071 5.70711L7.70711 10.7071L6.29289 9.29289ZM12.7071 4.29289L17.7071 9.29289L16.2929 10.7071L11.2929 5.70711L12.7071 4.29289ZM13 5L13 14L11 14L11 5L13 5Z",fill:"currentColor"}),c("path",{d:"M5 16L5 17C5 18.1046 5.89543 19 7 19L17 19C18.1046 19 19 18.1046 19 17V16",stroke:"currentColor",fill:"none",strokeWidth:"2"})]});function Bt(e,r=2){if(!+e)return"0 Bytes";const t=1024,n=r<0?0:r,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(t));return`${parseFloat((e/Math.pow(t,a)).toFixed(n))} ${o[a]}`}const $t=({placeholder:e,formState:r,name:t,multiple:n=!1,errorMessage:o,isRequired:a,isInvalid:l,rules:u,maxFiles:g=1,accept:O={"image/png":[".png"],"image/jpeg":[".jpg"]},id:y,label:D})=>{const{register:S,unregister:_,setValue:j,watch:P}=je(),{colorMode:k}=jr(),L=P(t),d=p.exports.useCallback(h=>j(t,h,{shouldValidate:!0}),[j,t]),{getRootProps:F,getInputProps:T,isDragActive:M,isDragReject:z}=xr({maxFiles:g,multiple:n,onDrop:d,accept:O});return p.exports.useEffect(()=>(S(t,u),()=>{_(t)}),[S,_,t]),w(ce,{isRequired:a,isInvalid:l||z,children:[c(le,{htmlFor:y,children:D}),w(Pe,{templateColumns:{base:"repeat(1,1fr)",md:"repeat(2,1fr)"},gap:5,children:[c(N,{colSpan:L&&L.length>0?1:2,children:c(Pr,{borderWidth:1,borderColor:`${k==="light"?"blackAlpha":"whiteAlpha"}.500`,width:"100%",height:"100%",_hover:{cursor:"pointer"},borderStyle:"dashed",borderRadius:10,children:w(pe,{...F(),p:5,alignItems:"center",bg:M?`${k==="light"?"blackAlpha":"whiteAlpha"}.200`:"transparent",justifyContent:"center",flexDirection:"column",children:[c("input",{...T(),id:y}),c(zt,{fontSize:200,color:`${k==="light"?"blackAlpha":"whiteAlpha"}.500`}),c(ur,{color:`${k==="light"?"blackAlpha":"whiteAlpha"}.500`,children:z?"Format File tidak didukung":M?"Drop Files Here":e})]})})}),L&&L.length>0?c(N,{children:c(kr,{spacing:3,children:L.map((h,Y)=>c(Lr,{children:w(pe,{alignItems:"center",gap:3,children:[c(Tr,{as:$r,color:"green.500"}),h.name," - ",Bt(h.size),c(Rr,{})]})},Y))})}):null]}),c(Kr,{children:o})]})},nn=()=>{const{control:e,formState:r}=je();return w(Pe,{templateColumns:"repeat(1,1fr)",gap:5,children:[c(N,{children:c(Ve,{control:e,name:"name",formState:r,id:"name",label:"Nama Company",rules:{required:{value:!0,message:"Nama Role Dibutuhkan"}},children:c(Sr,{})})}),c(N,{children:c(Ve,{control:e,name:"picture",formState:r,id:"picture",label:"Logo Perusahaan",rules:{required:{value:!1,message:"Upload dibutuhkan"}},children:c($t,{})})})]})},Dr=({items:e=[],idsToRender:r=[],indentLevel:t=0,onDelete:n})=>{r.length||(r=e.length>0&&e.filter(a=>!a.parentId||a.parentId=="0")||[]);const o=a=>{const l=e.filter(u=>u.parentId===a);return l.length?c(Dr,{items:e,indentLevel:t+1,onDelete:n,idsToRender:l}):null};return c("ul",{style:{paddingLeft:t>0?20:0},children:r.length>0&&r.map((a,l)=>{var u;return w(Mr.Fragment,{children:[c("li",{style:{marginBottom:5},children:w(pe,{gap:2,alignItems:"center",children:[w(ur,{children:[(a==null?void 0:a.structureCode)||"-"," -"," ",(u=a.structureName)!=null?u:a.name]}),c(cr,{"aria-label":"Delete",variant:"unstyled",onClick:()=>n(a.id),icon:c(Hr,{fontSize:28,color:"yellow.400"})})]})}),c(Br,{x:0,y:2,children:c(zr,{})}),o(a.id)]},a.id)})})};let ue;const Kt=new Uint8Array(16);function Ut(){if(!ue&&(ue=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!ue))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ue(Kt)}const x=[];for(let e=0;e<256;++e)x.push((e+256).toString(16).slice(1));function Wt(e,r=0){return(x[e[r+0]]+x[e[r+1]]+x[e[r+2]]+x[e[r+3]]+"-"+x[e[r+4]]+x[e[r+5]]+"-"+x[e[r+6]]+x[e[r+7]]+"-"+x[e[r+8]]+x[e[r+9]]+"-"+x[e[r+10]]+x[e[r+11]]+x[e[r+12]]+x[e[r+13]]+x[e[r+14]]+x[e[r+15]]).toLowerCase()}const Ht=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),sr={randomUUID:Ht};function Nt(e,r,t){if(sr.randomUUID&&!r&&!e)return sr.randomUUID();e=e||{};const n=e.random||(e.rng||Ut)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,r){t=t||0;for(let o=0;o<16;++o)r[t+o]=n[o];return r}return Wt(n)}const Vt=[{label:"Root",value:0}],on=()=>{const{control:e,watch:r}=je(),{append:t,remove:n}=Ir({control:e,name:"structures"}),[o,a]=p.exports.useState(""),[l,u]=p.exports.useState(""),[g,O]=p.exports.useState(null),y=r("structures"),D=y&&y.length>0&&y.map(d=>{var F,T;return{label:`${(F=d==null?void 0:d.structureCode)!=null?F:"-"} - ${(T=d.structureName)!=null?T:d.name}`,value:d.id}})||[],S=p.exports.useCallback(d=>a(d.target.value),[]),_=p.exports.useCallback(d=>u(d.target.value),[]),j=p.exports.useCallback(d=>O(d),[]),P=(d,F=[])=>{const T=y.findIndex(h=>h.id===d),M=y.find(h=>h.id===d),z=y.filter(h=>h.parentId===M.id);z.length>0?(F.push(T),z.map(h=>{P(h.id,F)})):F.push(T)},k=d=>{let F=[];P(d,F),n(F)},L=()=>{t({id:Nt(),structureName:o,structureCode:l,type:g,parentId:g.value}),u(""),a("")};return w(Pe,{templateColumns:"repeat(1,1fr)",gap:5,children:[c(N,{children:w(ce,{isRequired:!0,isInvalid:!1,children:[c(le,{children:"Struktur Perusahaan"}),w(pe,{gap:2,alignItems:"end",children:[w(ce,{children:[c(le,{htmlFor:"structure_code",children:"Kode Struktur"}),c(Ze,{children:c(qe,{id:"structure_code",placeholder:"Input Kode Struktur",type:"text",value:l,onChange:_})})]}),w(ce,{children:[c(le,{htmlFor:"structure_name",children:"Nama Struktur"}),c(Ze,{children:c(qe,{id:"structure_name",placeholder:"Input Nama Struktur",type:"text",value:o,onChange:S})})]}),c(Ur,{options:[...Vt,...D],value:g,onChange:(d,F)=>j(d),name:"parent",isClearable:!0,id:"parent",label:"Parent"}),c(cr,{"aria-label":"Add",onClick:L,children:c(Wr,{})})]})]})}),c(N,{children:c(Dr,{items:y,onDelete:k})})]})};export{nn as F,on as a};
