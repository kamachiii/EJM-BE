import{_ as k}from"./slicedToArray.69cafb3e.js";import{r as c,J as A,K as F,M as R,v as J,N as M}from"./index.36e5c8e0.js";function B(){if(console&&console.warn){for(var r,e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];typeof n[0]=="string"&&(n[0]="react-i18next:: ".concat(n[0])),(r=console).warn.apply(r,n)}}var T={};function N(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];typeof e[0]=="string"&&T[e[0]]||(typeof e[0]=="string"&&(T[e[0]]=new Date),B.apply(void 0,e))}function E(r,e,n){r.loadNamespaces(e,function(){if(r.isInitialized)n();else{var a=function u(){setTimeout(function(){r.off("initialized",u)},0),n()};r.on("initialized",a)}})}function K(r,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=e.languages[0],u=e.options?e.options.fallbackLng:!1,p=e.languages[e.languages.length-1];if(a.toLowerCase()==="cimode")return!0;var t=function(d,f){var v=e.services.backendConnector.state["".concat(d,"|").concat(f)];return v===-1||v===2};return n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&e.services.backendConnector.backend&&e.isLanguageChangingTo&&!t(e.isLanguageChangingTo,r)?!1:!!(e.hasResourceBundle(a,r)||!e.services.backendConnector.backend||e.options.resources&&!e.options.partialBundledLanguages||t(a,r)&&(!u||t(p,r)))}function U(r,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!e.languages||!e.languages.length)return N("i18n.languages were undefined or empty",e.languages),!0;var a=e.options.ignoreJSONStructure!==void 0;return a?e.hasLoadedNamespace(r,{precheck:function(p,t){if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&p.services.backendConnector.backend&&p.isLanguageChangingTo&&!t(p.isLanguageChangingTo,r))return!1}}):K(r,e,n)}function z(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),n.push.apply(n,a)}return n}function S(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z(Object(n),!0).forEach(function(a){J(r,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(a){Object.defineProperty(r,a,Object.getOwnPropertyDescriptor(n,a))})}return r}var H=function(e,n){var a=c.exports.useRef();return c.exports.useEffect(function(){a.current=n?a.current:e},[e,n]),a.current};function q(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.i18n,a=c.exports.useContext(A)||{},u=a.i18n,p=a.defaultNS,t=n||u||M();if(t&&!t.reportNamespaces&&(t.reportNamespaces=new F),!t){N("You will need to pass in an i18next instance by using initReactI18next");var y=function(s){return Array.isArray(s)?s[s.length-1]:s},d=[y,{},!1];return d.t=y,d.i18n={},d.ready=!1,d}t.options.react&&t.options.react.wait!==void 0&&N("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var f=S(S(S({},R()),t.options.react),e),v=f.useSuspense,P=f.keyPrefix,o=r||p||t.options&&t.options.defaultNS;o=typeof o=="string"?[o]:o||["translation"],t.reportNamespaces.addUsedNamespaces&&t.reportNamespaces.addUsedNamespaces(o);var g=(t.isInitialized||t.initializedStoreOnce)&&o.every(function(i){return U(i,t,f)});function m(){return t.getFixedT(null,f.nsMode==="fallback"?o:o[0],P)}var D=c.exports.useState(m),C=k(D,2),I=C[0],h=C[1],x=o.join(),j=H(x),l=c.exports.useRef(!0);c.exports.useEffect(function(){var i=f.bindI18n,s=f.bindI18nStore;l.current=!0,!g&&!v&&E(t,o,function(){l.current&&h(m)}),g&&j&&j!==x&&l.current&&h(m);function w(){l.current&&h(m)}return i&&t&&t.on(i,w),s&&t&&t.store.on(s,w),function(){l.current=!1,i&&t&&i.split(" ").forEach(function(O){return t.off(O,w)}),s&&t&&s.split(" ").forEach(function(O){return t.store.off(O,w)})}},[t,x]);var L=c.exports.useRef(!0);c.exports.useEffect(function(){l.current&&!L.current&&h(m),L.current=!1},[t,P]);var b=[I,t,g];if(b.t=I,b.i18n=t,b.ready=g,g||!g&&!v)return b;throw new Promise(function(i){E(t,o,function(){i()})})}export{q as u};
