import{r as o,H as f,aM as u,ah as k,G as h,Z as N,X as _,aN as $,R as E,a as F}from"./index.4df5dae3.js";function P(e){const r=o.exports.useRef();return o.exports.useEffect(()=>{r.current=e},[e]),r.current}var V=(...e)=>e.filter(Boolean).join(" ");function w(){const e=o.exports.useRef(!0);return o.exports.useEffect(()=>{e.current=!1},[]),e.current}var j=f("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),s=u("skeleton-start-color"),a=u("skeleton-end-color"),D=k({from:{opacity:0},to:{opacity:1}}),L=k({from:{borderColor:s.reference,background:s.reference},to:{borderColor:a.reference,background:a.reference}}),m=h((e,r)=>{const p=N("Skeleton",e),v=w(),{startColor:b="",endColor:y="",isLoaded:t,fadeDuration:S,speed:C,className:x,...n}=_(e),[c,i]=$("colors",[b,y]),R=P(t),l=V("chakra-skeleton",x),d={...c&&{[s.variable]:c},...i&&{[a.variable]:i}};if(t){const g=v||R?"none":`${D} ${S}s`;return E.createElement(f.div,{ref:r,className:l,__css:{animation:g},...n})}return F(j,{ref:r,className:l,...n,__css:{...p,...d,_dark:{...d},animation:`${C}s linear infinite alternate ${L}`}})});m.defaultProps={fadeDuration:.4,speed:.8};m.displayName="Skeleton";export{m as S};
