import{R as b,a as ge,r as kr}from"./index.5b816863.js";var fe=e=>e.type==="checkbox",ie=e=>e instanceof Date,P=e=>e==null;const tr=e=>typeof e=="object";var L=e=>!P(e)&&!Array.isArray(e)&&tr(e)&&!ie(e),sr=e=>L(e)&&e.target?fe(e.target)?e.target.checked:e.target.value:e,Dr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ir=(e,t)=>e.has(Dr(t)),oe=e=>Array.isArray(e)?e.filter(Boolean):[],C=e=>e===void 0,c=(e,t,r)=>{if(!t||!L(e))return r;const s=oe(t.split(/[,[\].]+?/)).reduce((a,u)=>P(a)?a:a[u],e);return C(s)||s===e?C(e[t])?r:e[t]:s};const he={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},ar=b.createContext(null),be=()=>b.useContext(ar),Cr=e=>{const{children:t,...r}=e;return ge(ar.Provider,{value:r,children:t})};var nr=(e,t,r,s=!0)=>{const a={defaultValues:t._defaultValues};for(const u in e)Object.defineProperty(a,u,{get:()=>{const y=u;return t._proxyFormState[y]!==$.all&&(t._proxyFormState[y]=!s||$.all),r&&(r[y]=!0),e[y]}});return a},I=e=>L(e)&&!Object.keys(e).length,or=(e,t,r)=>{const{name:s,...a}=e;return I(a)||Object.keys(a).length>=Object.keys(t).length||Object.keys(a).find(u=>t[u]===(!r||$.all))},q=e=>Array.isArray(e)?e:[e],ur=(e,t,r)=>r&&t?e===t:!e||!t||e===t||q(e).some(s=>s&&(s.startsWith(t)||t.startsWith(s)));function Fe(e){const t=b.useRef(e);t.current=e,b.useEffect(()=>{const r=!e.disabled&&t.current.subject.subscribe({next:t.current.callback});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Er(e){const t=be(),{control:r=t.control,disabled:s,name:a,exact:u}=e||{},[y,d]=b.useState(r._formState),m=b.useRef(!0),p=b.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),F=b.useRef(a);return F.current=a,Fe({disabled:s,callback:b.useCallback(h=>m.current&&ur(F.current,h.name,u)&&or(h,p.current)&&d({...r._formState,...h}),[r,u]),subject:r._subjects.state}),b.useEffect(()=>{m.current=!0;const h=r._proxyFormState.isDirty&&r._getDirty();return h!==r._formState.isDirty&&r._subjects.state.next({isDirty:h}),r._updateValid(),()=>{m.current=!1}},[r]),nr(y,r,p.current,!1)}var Q=e=>typeof e=="string",lr=(e,t,r,s)=>Q(e)?(s&&t.watch.add(e),c(r,e)):Array.isArray(e)?e.map(a=>(s&&t.watch.add(a),c(r,a))):(s&&(t.watchAll=!0),r),Rr=e=>{const t=e.constructor&&e.constructor.prototype;return L(t)&&t.hasOwnProperty("isPrototypeOf")},Pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let t;const r=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(Pe&&(e instanceof Blob||e instanceof FileList))&&(r||L(e)))if(t=r?[]:{},!Array.isArray(e)&&!Rr(e))t=e;else for(const s in e)t[s]=N(e[s]);else return e;return t}function Or(e){const t=be(),{control:r=t.control,name:s,defaultValue:a,disabled:u,exact:y}=e||{},d=b.useRef(s);d.current=s,Fe({disabled:u,subject:r._subjects.watch,callback:F=>{if(ur(d.current,F.name,y)){const h=lr(d.current,r._names,F.values||r._formValues);p(C(h)?a:N(h))}}});const[m,p]=b.useState(C(a)?r._getWatch(s):a);return b.useEffect(()=>r._removeUnmounted()),m}function Tr(e){const t=be(),{name:r,control:s=t.control,shouldUnregister:a}=e,u=ir(s._names.array,r),y=Or({control:s,name:r,defaultValue:c(s._formValues,r,c(s._defaultValues,r,e.defaultValue)),exact:!0}),d=Er({control:s,name:r}),m=b.useRef(s.register(r,{...e.rules,value:y}));return b.useEffect(()=>{const p=(F,h)=>{const j=c(s._fields,F);j&&(j._f.mount=h)};return p(r,!0),()=>{const F=s._options.shouldUnregister||a;(u?F&&!s._stateFlags.action:F)?s.unregister(r):p(r,!1)}},[r,s,u,a]),{field:{name:r,value:y,onChange:b.useCallback(p=>m.current.onChange({target:{value:sr(p),name:r},type:he.CHANGE}),[r]),onBlur:b.useCallback(()=>m.current.onBlur({target:{value:c(s._formValues,r),name:r},type:he.BLUR}),[r,s]),ref:p=>{const F=c(s._fields,r);F&&p&&(F._f.ref={focus:()=>p.focus(),select:()=>p.select(),setCustomValidity:h=>p.setCustomValidity(h),reportValidity:()=>p.reportValidity()})}},formState:d,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(d.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(d.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(d.touchedFields,r)},error:{enumerable:!0,get:()=>c(d.errors,r)}})}}const Ur=e=>e.render(Tr(e));var Lr=(e,t,r,s,a)=>t?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:a||!0}}:{},We=e=>/^\w*$/.test(e),cr=e=>oe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function D(e,t,r){let s=-1;const a=We(t)?[t]:cr(t),u=a.length,y=u-1;for(;++s<u;){const d=a[s];let m=r;if(s!==y){const p=e[d];m=L(p)||Array.isArray(p)?p:isNaN(+a[s+1])?{}:[]}e[d]=m,e=e[d]}return e}const _e=(e,t,r)=>{for(const s of r||Object.keys(e)){const a=c(e,s);if(a){const{_f:u,...y}=a;if(u&&t(u.name)){if(u.ref.focus){u.ref.focus();break}else if(u.refs&&u.refs[0].focus){u.refs[0].focus();break}}else L(y)&&_e(y,t)}}};var ee=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(Math.random()*16+e)%16|0;return(t=="x"?r:r&3|8).toString(16)})},Se=(e,t,r={})=>r.shouldFocus||C(r.shouldFocus)?r.focusName||`${e}.${C(r.focusIndex)?t:r.focusIndex}.`:"",Ie=(e,t,r)=>!r&&(t.watchAll||t.watch.has(e)||[...t.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length)))),fr=(e,t,r)=>{const s=oe(c(e,r));return D(s,"root",t[r]),D(e,r,s),e},ne=e=>typeof e=="boolean",$e=e=>e.type==="file",me=e=>typeof e=="function",ye=e=>Q(e)||b.isValidElement(e),He=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Qe={value:!1,isValid:!1},Xe={value:!0,isValid:!0};var dr=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!C(e[0].attributes.value)?C(e[0].value)||e[0].value===""?Xe:{value:e[0].value,isValid:!0}:Xe:Qe}return Qe};const Ye={isValid:!1,value:null};var yr=e=>Array.isArray(e)?e.reduce((t,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:t,Ye):Ye;function Ze(e,t,r="validate"){if(ye(e)||Array.isArray(e)&&e.every(ye)||ne(e)&&!e)return{type:r,message:ye(e)?e:"",ref:t}}var se=e=>L(e)&&!Ae(e)?e:{value:e,message:""},Ne=async(e,t,r,s,a)=>{const{ref:u,refs:y,required:d,maxLength:m,minLength:p,min:F,max:h,pattern:j,validate:k,name:U,valueAsNumber:Y,mount:z,disabled:Z}=e._f;if(!z||Z)return{};const H=y?y[0]:u,K=x=>{s&&H.reportValidity&&(H.setCustomValidity(ne(x)?"":x||""),H.reportValidity())},O={},re=He(u),A=fe(u),v=re||A,V=(Y||$e(u))&&!u.value||t===""||Array.isArray(t)&&!t.length,S=Lr.bind(null,U,r,O),J=(x,w,T,M=X.maxLength,G=X.minLength)=>{const W=x?w:T;O[U]={type:x?M:G,message:W,ref:u,...S(x?M:G,W)}};if(a?!Array.isArray(t)||!t.length:d&&(!v&&(V||P(t))||ne(t)&&!t||A&&!dr(y).isValid||re&&!yr(y).isValid)){const{value:x,message:w}=ye(d)?{value:!!d,message:d}:se(d);if(x&&(O[U]={type:X.required,message:w,ref:H,...S(X.required,w)},!r))return K(w),O}if(!V&&(!P(F)||!P(h))){let x,w;const T=se(h),M=se(F);if(!P(t)&&!isNaN(t)){const G=u.valueAsNumber||t&&+t;P(T.value)||(x=G>T.value),P(M.value)||(w=G<M.value)}else{const G=u.valueAsDate||new Date(t),W=de=>new Date(new Date().toDateString()+" "+de),ue=u.type=="time",te=u.type=="week";Q(T.value)&&t&&(x=ue?W(t)>W(T.value):te?t>T.value:G>new Date(T.value)),Q(M.value)&&t&&(w=ue?W(t)<W(M.value):te?t<M.value:G<new Date(M.value))}if((x||w)&&(J(!!x,T.message,M.message,X.max,X.min),!r))return K(O[U].message),O}if((m||p)&&!V&&(Q(t)||a&&Array.isArray(t))){const x=se(m),w=se(p),T=!P(x.value)&&t.length>x.value,M=!P(w.value)&&t.length<w.value;if((T||M)&&(J(T,x.message,w.message),!r))return K(O[U].message),O}if(j&&!V&&Q(t)){const{value:x,message:w}=se(j);if(Ae(x)&&!t.match(x)&&(O[U]={type:X.pattern,message:w,ref:u,...S(X.pattern,w)},!r))return K(w),O}if(k){if(me(k)){const x=await k(t),w=Ze(x,H);if(w&&(O[U]={...w,...S(X.validate,w.message)},!r))return K(w.message),O}else if(L(k)){let x={};for(const w in k){if(!I(x)&&!r)break;const T=Ze(await k[w](t),H,w);T&&(x={...T,...S(w,T.message)},K(T.message),r&&(O[U]=x))}if(!I(x)&&(O[U]={ref:H,...x},!r))return O}}return K(!0),O};function ke(e,t){return[...e,...q(t)]}var De=e=>Array.isArray(e)?e.map(()=>{}):void 0,qe=e=>({isOnSubmit:!e||e===$.onSubmit,isOnBlur:e===$.onBlur,isOnChange:e===$.onChange,isOnAll:e===$.all,isOnTouch:e===$.onTouched});function Ce(e,t,r){return[...e.slice(0,t),...q(r),...e.slice(t)]}var Ee=(e,t,r)=>Array.isArray(e)?(C(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(t,1)[0]),e):[];function Re(e,t){return[...q(t),...q(e)]}function Mr(e,t){let r=0;const s=[...e];for(const a of t)s.splice(a-r,1),r++;return oe(s).length?s:[]}var Oe=(e,t)=>C(t)?[]:Mr(e,q(t).sort((r,s)=>r-s)),Te=(e,t,r)=>{e[t]=[e[r],e[r]=e[t]][0]};function Br(e,t){const r=t.slice(0,-1).length;let s=0;for(;s<r;)e=C(e)?s++:e[t[s++]];return e}function Pr(e){for(const t in e)if(!C(e[t]))return!1;return!0}function B(e,t){const r=We(t)?[t]:cr(t),s=r.length==1?e:Br(e,r),a=r[r.length-1];let u;s&&delete s[a];for(let y=0;y<r.slice(0,-1).length;y++){let d=-1,m;const p=r.slice(0,-(y+1)),F=p.length-1;for(y>0&&(u=e);++d<p.length;){const h=p[d];m=m?m[h]:e[h],F===d&&(L(m)&&I(m)||Array.isArray(m)&&Pr(m))&&(u?delete u[h]:delete e[h]),u=m}}return e}var er=(e,t,r)=>(e[t]=r,e);function Qr(e){const t=be(),{control:r=t.control,name:s,keyName:a="id",shouldUnregister:u}=e,[y,d]=b.useState(r._getFieldArray(s)),m=b.useRef(r._getFieldArray(s).map(ee)),p=b.useRef(y),F=b.useRef(s),h=b.useRef(!1);F.current=s,p.current=y,r._names.array.add(s),e.rules&&r.register(s,e.rules);const j=b.useCallback(({values:A,name:v})=>{if(v===F.current||!v){const V=c(A,F.current);Array.isArray(V)&&(d(V),m.current=V.map(ee))}},[]);Fe({callback:j,subject:r._subjects.array});const k=b.useCallback(A=>{h.current=!0,r._updateFieldArray(s,A)},[r,s]),U=(A,v)=>{const V=q(N(A)),S=ke(r._getFieldArray(s),V);r._names.focus=Se(s,S.length-1,v),m.current=ke(m.current,V.map(ee)),k(S),d(S),r._updateFieldArray(s,S,ke,{argA:De(A)})},Y=(A,v)=>{const V=q(N(A)),S=Re(r._getFieldArray(s),V);r._names.focus=Se(s,0,v),m.current=Re(m.current,V.map(ee)),k(S),d(S),r._updateFieldArray(s,S,Re,{argA:De(A)})},z=A=>{const v=Oe(r._getFieldArray(s),A);m.current=Oe(m.current,A),k(v),d(v),r._updateFieldArray(s,v,Oe,{argA:A})},Z=(A,v,V)=>{const S=q(N(v)),J=Ce(r._getFieldArray(s),A,S);r._names.focus=Se(s,A,V),m.current=Ce(m.current,A,S.map(ee)),k(J),d(J),r._updateFieldArray(s,J,Ce,{argA:A,argB:De(v)})},H=(A,v)=>{const V=r._getFieldArray(s);Te(V,A,v),Te(m.current,A,v),k(V),d(V),r._updateFieldArray(s,V,Te,{argA:A,argB:v},!1)},K=(A,v)=>{const V=r._getFieldArray(s);Ee(V,A,v),Ee(m.current,A,v),k(V),d(V),r._updateFieldArray(s,V,Ee,{argA:A,argB:v},!1)},O=(A,v)=>{const V=N(v),S=er(r._getFieldArray(s),A,V);m.current=[...S].map((J,x)=>!J||x===A?ee():m.current[x]),k(S),d([...S]),r._updateFieldArray(s,S,er,{argA:A,argB:V},!0,!1)},re=A=>{const v=q(N(A));m.current=v.map(ee),k([...v]),d([...v]),r._updateFieldArray(s,[...v],V=>V,{},!0,!1)};return b.useEffect(()=>{if(r._stateFlags.action=!1,Ie(s,r._names)&&r._subjects.state.next({}),h.current&&(!qe(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([s]).then(A=>{const v=c(A.errors,s),V=c(r._formState.errors,s);(V?!v&&V.type:v&&v.type)&&(v?D(r._formState.errors,s,v):B(r._formState.errors,s),r._subjects.state.next({errors:r._formState.errors}))});else{const A=c(r._fields,s);A&&A._f&&Ne(A,c(r._formValues,s),r._options.criteriaMode===$.all,r._options.shouldUseNativeValidation,!0).then(v=>!I(v)&&r._subjects.state.next({errors:fr(r._formState.errors,v,s)}))}r._subjects.watch.next({name:s,values:r._formValues}),r._names.focus&&_e(r._fields,A=>!!A&&A.startsWith(r._names.focus||"")),r._names.focus="",r._proxyFormState.isValid&&r._updateValid()},[y,s,r]),b.useEffect(()=>(!c(r._formValues,s)&&r._updateFieldArray(s),()=>{(r._options.shouldUnregister||u)&&r.unregister(s)}),[s,r,a,u]),{swap:b.useCallback(H,[k,s,r]),move:b.useCallback(K,[k,s,r]),prepend:b.useCallback(Y,[k,s,r]),append:b.useCallback(U,[k,s,r]),remove:b.useCallback(z,[k,s,r]),insert:b.useCallback(Z,[k,s,r]),update:b.useCallback(O,[k,s,r]),replace:b.useCallback(re,[k,s,r]),fields:b.useMemo(()=>y.map((A,v)=>({...A,[a]:m.current[v]||ee()})),[y,a])}}function Ue(){let e=[];return{get observers(){return e},next:a=>{for(const u of e)u.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(u=>u!==a)}}),unsubscribe:()=>{e=[]}}}var ce=e=>P(e)||!tr(e);function ae(e,t){if(ce(e)||ce(t))return e===t;if(ie(e)&&ie(t))return e.getTime()===t.getTime();const r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(const a of r){const u=e[a];if(!s.includes(a))return!1;if(a!=="ref"){const y=t[a];if(ie(u)&&ie(y)||L(u)&&L(y)||Array.isArray(u)&&Array.isArray(y)?!ae(u,y):u!==y)return!1}}return!0}var je=e=>{const t=e?e.ownerDocument:0,r=t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement;return e instanceof r},gr=e=>e.type==="select-multiple",Ir=e=>He(e)||fe(e),Le=e=>je(e)&&e.isConnected,hr=e=>{for(const t in e)if(me(e[t]))return!0;return!1};function ve(e,t={}){const r=Array.isArray(e);if(L(e)||r)for(const s in e)Array.isArray(e[s])||L(e[s])&&!hr(e[s])?(t[s]=Array.isArray(e[s])?[]:{},ve(e[s],t[s])):P(e[s])||(t[s]=!0);return t}function _r(e,t,r){const s=Array.isArray(e);if(L(e)||s)for(const a in e)Array.isArray(e[a])||L(e[a])&&!hr(e[a])?C(t)||ce(r[a])?r[a]=Array.isArray(e[a])?ve(e[a],[]):{...ve(e[a])}:_r(e[a],P(t)?{}:t[a],r[a]):ae(e[a],t[a])?delete r[a]:r[a]=!0;return r}var Me=(e,t)=>_r(e,t,ve(t)),mr=(e,{valueAsNumber:t,valueAsDate:r,setValueAs:s})=>C(e)?e:t?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):s?s(e):e;function Be(e){const t=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):t.disabled))return $e(t)?t.files:He(t)?yr(e.refs).value:gr(t)?[...t.selectedOptions].map(({value:r})=>r):fe(t)?dr(e.refs).value:mr(C(t.value)?e.ref.value:t.value,e)}var Nr=(e,t,r,s)=>{const a={};for(const u of e){const y=c(t,u);y&&D(a,u,y._f)}return{criteriaMode:r,names:[...e],fields:a,shouldUseNativeValidation:s}},le=e=>C(e)?e:Ae(e)?e.source:L(e)?Ae(e.value)?e.value.source:e.value:e,qr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function rr(e,t,r){const s=c(e,r);if(s||We(r))return{error:s,name:r};const a=r.split(".");for(;a.length;){const u=a.join("."),y=c(t,u),d=c(e,u);if(y&&!Array.isArray(y)&&r!==u)return{name:r};if(d&&d.type)return{name:u,error:d};a.pop()}return{name:r}}var jr=(e,t,r,s,a)=>a.isOnAll?!1:!r&&a.isOnTouch?!(t||e):(r?s.isOnBlur:a.isOnBlur)?!e:(r?s.isOnChange:a.isOnChange)?e:!0,Wr=(e,t)=>!oe(c(e,t)).length&&B(e,t);const $r={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function Hr(e={}){let t={...$r,...e},r={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},a=N(t.defaultValues)||{},u=t.shouldUnregister?{}:N(a),y={action:!1,mount:!1,watch:!1},d={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,p=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},h={watch:Ue(),array:Ue(),state:Ue()},j=qe(t.mode),k=qe(t.reValidateMode),U=t.criteriaMode===$.all,Y=i=>n=>{clearTimeout(p),p=window.setTimeout(i,n)},z=async()=>{if(F.isValid){const i=t.resolver?I((await v()).errors):await S(s,!0);i!==r.isValid&&(r.isValid=i,h.state.next({isValid:i}))}},Z=i=>F.isValidating&&i!==r.isValidating&&h.state.next({isValidating:i}),H=(i,n=[],o,f,g=!0,l=!0)=>{if(f&&o){if(y.action=!0,l&&Array.isArray(c(s,i))){const _=o(c(s,i),f.argA,f.argB);g&&D(s,i,_)}if(l&&Array.isArray(c(r.errors,i))){const _=o(c(r.errors,i),f.argA,f.argB);g&&D(r.errors,i,_),Wr(r.errors,i)}if(F.touchedFields&&l&&Array.isArray(c(r.touchedFields,i))){const _=o(c(r.touchedFields,i),f.argA,f.argB);g&&D(r.touchedFields,i,_)}F.dirtyFields&&(r.dirtyFields=Me(a,u)),h.state.next({name:i,isDirty:x(i,n),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else D(u,i,n)},K=(i,n)=>{D(r.errors,i,n),h.state.next({errors:r.errors})},O=(i,n,o,f)=>{const g=c(s,i);if(g){const l=c(u,i,C(o)?c(a,i):o);C(l)||f&&f.defaultChecked||n?D(u,i,n?l:Be(g._f)):M(i,l),y.mount&&z()}},re=(i,n,o,f,g)=>{let l=!1,_=!1;const E={name:i};if((!o||f)&&(F.isDirty&&(_=r.isDirty,r.isDirty=E.isDirty=x(),l=_!==E.isDirty),F.dirtyFields)){_=c(r.dirtyFields,i);const R=ae(c(a,i),n);R?B(r.dirtyFields,i):D(r.dirtyFields,i,!0),E.dirtyFields=r.dirtyFields,l=l||_!==!R}if(o){const R=c(r.touchedFields,i);R||(D(r.touchedFields,i,o),E.touchedFields=r.touchedFields,l=l||F.touchedFields&&R!==o)}return l&&g&&h.state.next(E),l?E:{}},A=(i,n,o,f)=>{const g=c(r.errors,i),l=F.isValid&&ne(n)&&r.isValid!==n;if(e.delayError&&o?(m=Y(()=>K(i,o)),m(e.delayError)):(clearTimeout(p),m=null,o?D(r.errors,i,o):B(r.errors,i)),(o?!ae(g,o):g)||!I(f)||l){const _={...f,...l&&ne(n)?{isValid:n}:{},errors:r.errors,name:i};r={...r,..._},h.state.next(_)}Z(!1)},v=async i=>await t.resolver(u,t.context,Nr(i||d.mount,s,t.criteriaMode,t.shouldUseNativeValidation)),V=async i=>{const{errors:n}=await v();if(i)for(const o of i){const f=c(n,o);f?D(r.errors,o,f):B(r.errors,o)}else r.errors=n;return n},S=async(i,n,o={valid:!0})=>{for(const f in i){const g=i[f];if(g){const{_f:l,..._}=g;if(l){const E=d.array.has(l.name),R=await Ne(g,c(u,l.name),U,t.shouldUseNativeValidation,E);if(R[l.name]&&(o.valid=!1,n))break;!n&&(c(R,l.name)?E?fr(r.errors,R,l.name):D(r.errors,l.name,R[l.name]):B(r.errors,l.name))}_&&await S(_,n,o)}}return o.valid},J=()=>{for(const i of d.unMount){const n=c(s,i);n&&(n._f.refs?n._f.refs.every(o=>!Le(o)):!Le(n._f.ref))&&xe(i)}d.unMount=new Set},x=(i,n)=>(i&&n&&D(u,i,n),!ae(de(),a)),w=(i,n,o)=>lr(i,d,{...y.mount?u:C(n)?a:Q(i)?{[i]:n}:n},o),T=i=>oe(c(y.mount?u:a,i,e.shouldUnregister?c(a,i,[]):[])),M=(i,n,o={})=>{const f=c(s,i);let g=n;if(f){const l=f._f;l&&(!l.disabled&&D(u,i,mr(n,l)),g=Pe&&je(l.ref)&&P(n)?"":n,gr(l.ref)?[...l.ref.options].forEach(_=>_.selected=g.includes(_.value)):l.refs?fe(l.ref)?l.refs.length>1?l.refs.forEach(_=>(!_.defaultChecked||!_.disabled)&&(_.checked=Array.isArray(g)?!!g.find(E=>E===_.value):g===_.value)):l.refs[0]&&(l.refs[0].checked=!!g):l.refs.forEach(_=>_.checked=_.value===g):$e(l.ref)?l.ref.value="":(l.ref.value=g,l.ref.type||h.watch.next({name:i})))}(o.shouldDirty||o.shouldTouch)&&re(i,g,o.shouldTouch,o.shouldDirty,!0),o.shouldValidate&&te(i)},G=(i,n,o)=>{for(const f in n){const g=n[f],l=`${i}.${f}`,_=c(s,l);(d.array.has(i)||!ce(g)||_&&!_._f)&&!ie(g)?G(l,g,o):M(l,g,o)}},W=(i,n,o={})=>{const f=c(s,i),g=d.array.has(i),l=N(n);D(u,i,l),g?(h.array.next({name:i,values:u}),(F.isDirty||F.dirtyFields)&&o.shouldDirty&&(r.dirtyFields=Me(a,u),h.state.next({name:i,dirtyFields:r.dirtyFields,isDirty:x(i,l)}))):f&&!f._f&&!P(l)?G(i,l,o):M(i,l,o),Ie(i,d)&&h.state.next({}),h.watch.next({name:i})},ue=async i=>{const n=i.target;let o=n.name;const f=c(s,o),g=()=>n.type?Be(f._f):sr(i);if(f){let l,_;const E=g(),R=i.type===he.BLUR||i.type===he.FOCUS_OUT,pr=!qr(f._f)&&!t.resolver&&!c(r.errors,o)&&!f._f.deps||jr(R,c(r.touchedFields,o),r.isSubmitted,k,j),pe=Ie(o,d,R);D(u,o,E),R?(f._f.onBlur&&f._f.onBlur(i),m&&m(0)):f._f.onChange&&f._f.onChange(i);const we=re(o,E,R,!1),wr=!I(we)||pe;if(!R&&h.watch.next({name:o,type:i.type}),pr)return F.isValid&&z(),wr&&h.state.next({name:o,...pe?{}:we});if(!R&&pe&&h.state.next({}),Z(!0),t.resolver){const{errors:ze}=await v([o]),Sr=rr(r.errors,s,o),Je=rr(ze,s,Sr.name||o);l=Je.error,o=Je.name,_=I(ze)}else l=(await Ne(f,c(u,o),U,t.shouldUseNativeValidation))[o],l?_=!1:F.isValid&&(_=await S(s,!0));!ce(E)||g()===E?(f._f.deps&&te(f._f.deps),A(o,_,l,we)):Z(!1)}},te=async(i,n={})=>{let o,f;const g=q(i);if(Z(!0),t.resolver){const l=await V(C(i)?i:g);o=I(l),f=i?!g.some(_=>c(l,_)):o}else i?(f=(await Promise.all(g.map(async l=>{const _=c(s,l);return await S(_&&_._f?{[l]:_}:_)}))).every(Boolean),!(!f&&!r.isValid)&&z()):f=o=await S(s);return h.state.next({...!Q(i)||F.isValid&&o!==r.isValid?{}:{name:i},...t.resolver||!i?{isValid:o}:{},errors:r.errors,isValidating:!1}),n.shouldFocus&&!f&&_e(s,l=>l&&c(r.errors,l),i?g:d.mount),f},de=i=>{const n={...a,...y.mount?u:{}};return C(i)?n:Q(i)?c(n,i):i.map(o=>c(n,o))},Ke=(i,n)=>({invalid:!!c((n||r).errors,i),isDirty:!!c((n||r).dirtyFields,i),isTouched:!!c((n||r).touchedFields,i),error:c((n||r).errors,i)}),Ar=i=>{i?q(i).forEach(n=>B(r.errors,n)):r.errors={},h.state.next({errors:r.errors})},vr=(i,n,o)=>{const f=(c(s,i,{_f:{}})._f||{}).ref;D(r.errors,i,{...n,ref:f}),h.state.next({name:i,errors:r.errors,isValid:!1}),o&&o.shouldFocus&&f&&f.focus&&f.focus()},br=(i,n)=>me(i)?h.watch.subscribe({next:o=>i(w(void 0,n),o)}):w(i,n,!0),xe=(i,n={})=>{for(const o of i?q(i):d.mount)d.mount.delete(o),d.array.delete(o),c(s,o)&&(n.keepValue||(B(s,o),B(u,o)),!n.keepError&&B(r.errors,o),!n.keepDirty&&B(r.dirtyFields,o),!n.keepTouched&&B(r.touchedFields,o),!t.shouldUnregister&&!n.keepDefaultValue&&B(a,o));h.watch.next({}),h.state.next({...r,...n.keepDirty?{isDirty:x()}:{}}),!n.keepIsValid&&z()},Ve=(i,n={})=>{let o=c(s,i);const f=ne(n.disabled);return D(s,i,{...o||{},_f:{...o&&o._f?o._f:{ref:{name:i}},name:i,mount:!0,...n}}),d.mount.add(i),o?f&&D(u,i,n.disabled?void 0:c(u,i,Be(o._f))):O(i,!0,n.value),{...f?{disabled:n.disabled}:{},...t.shouldUseNativeValidation?{required:!!n.required,min:le(n.min),max:le(n.max),minLength:le(n.minLength),maxLength:le(n.maxLength),pattern:le(n.pattern)}:{},name:i,onChange:ue,onBlur:ue,ref:g=>{if(g){Ve(i,n),o=c(s,i);const l=C(g.value)&&g.querySelectorAll&&g.querySelectorAll("input,select,textarea")[0]||g,_=Ir(l),E=o._f.refs||[];if(_?E.find(R=>R===l):l===o._f.ref)return;D(s,i,{_f:{...o._f,..._?{refs:[...E.filter(Le),l,...Array.isArray(c(a,i))?[{}]:[]],ref:{type:l.type,name:i}}:{ref:l}}}),O(i,!1,void 0,l)}else o=c(s,i,{}),o._f&&(o._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&!(ir(d.array,i)&&y.action)&&d.unMount.add(i)}}},Ge=()=>t.shouldFocusError&&_e(s,i=>i&&c(r.errors,i),d.mount),Fr=(i,n)=>async o=>{o&&(o.preventDefault&&o.preventDefault(),o.persist&&o.persist());let f=!0,g=N(u);h.state.next({isSubmitting:!0});try{if(t.resolver){const{errors:l,values:_}=await v();r.errors=l,g=_}else await S(s);I(r.errors)?(h.state.next({errors:{},isSubmitting:!0}),await i(g,o)):(n&&await n({...r.errors},o),Ge())}catch(l){throw f=!1,l}finally{r.isSubmitted=!0,h.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:I(r.errors)&&f,submitCount:r.submitCount+1,errors:r.errors})}},xr=(i,n={})=>{c(s,i)&&(C(n.defaultValue)?W(i,c(a,i)):(W(i,n.defaultValue),D(a,i,n.defaultValue)),n.keepTouched||B(r.touchedFields,i),n.keepDirty||(B(r.dirtyFields,i),r.isDirty=n.defaultValue?x(i,c(a,i)):x()),n.keepError||(B(r.errors,i),F.isValid&&z()),h.state.next({...r}))},Vr=(i,n={})=>{const o=i||a,f=N(o),g=i&&!I(i)?f:a;if(n.keepDefaultValues||(a=o),!n.keepValues){if(n.keepDirtyValues)for(const l of d.mount)c(r.dirtyFields,l)?D(g,l,c(u,l)):W(l,c(g,l));else{if(Pe&&C(i))for(const l of d.mount){const _=c(s,l);if(_&&_._f){const E=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(je(E)){const R=E.closest("form");if(R){R.reset();break}}}}s={}}u=e.shouldUnregister?n.keepDefaultValues?N(a):{}:f,h.array.next({values:g}),h.watch.next({values:g})}d={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},y.mount=!F.isValid||!!n.keepIsValid,y.watch=!!e.shouldUnregister,h.state.next({submitCount:n.keepSubmitCount?r.submitCount:0,isDirty:n.keepDirty||n.keepDirtyValues?r.isDirty:!!(n.keepDefaultValues&&!ae(i,a)),isSubmitted:n.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:n.keepDirty||n.keepDirtyValues?r.dirtyFields:n.keepDefaultValues&&i?Me(a,i):{},touchedFields:n.keepTouched?r.touchedFields:{},errors:n.keepErrors?r.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})};return{control:{register:Ve,unregister:xe,getFieldState:Ke,_executeSchema:v,_focusError:Ge,_getWatch:w,_getDirty:x,_updateValid:z,_removeUnmounted:J,_updateFieldArray:H,_getFieldArray:T,_subjects:h,_proxyFormState:F,get _fields(){return s},get _formValues(){return u},get _stateFlags(){return y},set _stateFlags(i){y=i},get _defaultValues(){return a},get _names(){return d},set _names(i){d=i},get _formState(){return r},set _formState(i){r=i},get _options(){return t},set _options(i){t={...t,...i}}},trigger:te,register:Ve,handleSubmit:Fr,watch:br,setValue:W,getValues:de,reset:(i,n)=>Vr(me(i)?i(u):i,n),resetField:xr,clearErrors:Ar,unregister:xe,setError:vr,setFocus:(i,n={})=>{const o=c(s,i),f=o&&o._f;if(f){const g=f.refs?f.refs[0]:f.ref;g.focus&&(g.focus(),n.shouldSelect&&g.select())}},getFieldState:Ke}}function Kr(e={}){const t=b.useRef(),[r,s]=b.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues});t.current||(t.current={...Hr(e),formState:r});const a=t.current.control;return a._options=e,Fe({subject:a._subjects.state,callback:b.useCallback(u=>{or(u,a._proxyFormState,!0)&&(a._formState={...a._formState,...u},s({...a._formState}))},[a])}),b.useEffect(()=>{a._stateFlags.mount||(a._proxyFormState.isValid&&a._updateValid(),a._stateFlags.mount=!0),a._stateFlags.watch&&(a._stateFlags.watch=!1,a._subjects.state.next({})),a._removeUnmounted()}),b.useEffect(()=>{r.submitCount&&a._focusError()},[a,r.submitCount]),t.current.formState=nr(r,a),t.current}const Xr=({onSubmit:e,id:t,initialValues:r,children:s,method:a="onSubmit",width:u="100%"})=>{const y=Kr({defaultValues:r,mode:a});return kr.exports.useEffect(()=>{if(r)for(const[d,m]of Object.entries(r))y.setValue(d,m)},[]),ge(Cr,{...y,children:ge("form",{id:t,style:{width:u},onSubmit:y.handleSubmit(e),onChange:a==="onChange"?y.handleSubmit(e):void 0,noValidate:!0,children:typeof s=="function"?s(y):s})})},Yr=({placeholder:e,formState:t,name:r,rules:s,control:a,watch:u,children:y,id:d,overrideChange:m=!1,label:p})=>ge(Ur,{control:a,name:r,rules:s,render:({field:F,fieldState:h,formState:j})=>{var k,U,Y;return b.cloneElement(y,{...F,id:d,rules:s,name:r,watch:u,isRequired:s&&s.required?(k=s.required)==null?void 0:k.value:s==null?void 0:s.required,isInvalid:Boolean(j.errors&&((U=h.error)==null?void 0:U.message)),label:p,placeholder:e,errorMessage:(Y=h.error)==null?void 0:Y.message,formState:j})}});export{Ur as C,Yr as F,Xr as a,Qr as b,be as u};
