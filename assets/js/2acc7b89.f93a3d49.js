"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,d=p["".concat(u,".").concat(g)]||p[g]||f[g]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},54457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={id:"centrifuge",title:"Centrifuge library"},a=void 0,c={unversionedId:"ecosystem/centrifuge",id:"version-3/ecosystem/centrifuge",title:"Centrifuge library",description:"Centrifugo is a server built on top of Centrifuge library for Go language.",source:"@site/versioned_docs/version-3/ecosystem/centrifuge.md",sourceDirName:"ecosystem",slug:"/ecosystem/centrifuge",permalink:"/docs/3/ecosystem/centrifuge",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/ecosystem/centrifuge.md",tags:[],version:"3",frontMatter:{id:"centrifuge",title:"Centrifuge library"},sidebar:"Ecosystem",next:{title:"Framework integrations",permalink:"/docs/3/ecosystem/integrations"}},u={},s=[],l={toc:s};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo is a server built on top of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge"},"Centrifuge")," library for Go language."),(0,o.kt)("p",null,"Due to its standalone language-agnostic nature Centrifugo dictates some rules developers should follow when integrating. If you need more freedom and a more tight integration of real-time server with application business logic you may consider using Centrifuge library to build something similar to Centrifugo but with customized behavior."),(0,o.kt)("p",null,"Library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge#readme"},"README")," has detailed description, link to examples and introduction post."),(0,o.kt)("p",null,"Many Centrifugo features should be re-implemented when using Centrifuge - like API layer, admin web UI, proxy etc (if you need those of course). And you need to write backend in Go language. But core functionality like a client-server protocol (all Centrifugo client connectors work with Centrifuge library based server) and Redis engine to scale come out of the box."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Many things said in Centrifugo doc can be considered as extra documentation for Centrifuge library (for example part about infrastructure tuning or transport description). But not all of them.")))}f.isMDXComponent=!0}}]);