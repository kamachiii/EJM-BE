import{aO as B}from"./index.4df5dae3.js";var b={exports:{}};(function(w,N){(function(a,f){w.exports=f()})(B,function(){return function(a,f,s){a=a||{};var n=f.prototype,y={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function T(r,t,i,m){return n.fromToBase(r,t,i,m)}s.en.relativeTime=y,n.fromToBase=function(r,t,i,m,g){for(var l,d,h,c=i.$locale().relativeTime||y,v=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],$=v.length,u=0;u<$;u+=1){var o=v[u];o.d&&(l=m?s(r).diff(i,o.d,!0):i.diff(r,o.d,!0));var e=(a.rounding||Math.round)(Math.abs(l));if(h=l>0,e<=o.r||!o.r){e<=1&&u>0&&(o=v[u-1]);var p=c[o.l];g&&(e=g(""+e)),d=typeof p=="string"?p.replace("%d",e):p(e,t,o.l,h);break}}if(t)return d;var M=h?c.future:c.past;return typeof M=="function"?M(d):M.replace("%s",d)},n.to=function(r,t){return T(r,t,this,!0)},n.from=function(r,t){return T(r,t,this)};var x=function(r){return r.$u?s.utc():s()};n.toNow=function(r){return this.to(x(this),r)},n.fromNow=function(r){return this.from(x(this),r)}}})})(b);const k=b.exports;export{k as r};
