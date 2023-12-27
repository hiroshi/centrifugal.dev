"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8072],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(r),d=i,m=g["".concat(s,".").concat(d)]||g[d]||p[d]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54173:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={id:"ecosystem",title:"Ecosystem notes"},a=void 0,l={unversionedId:"getting-started/ecosystem",id:"version-4/getting-started/ecosystem",title:"Ecosystem notes",description:"Some additional notes about our ecosystem which may help you develop with our tech.",source:"@site/versioned_docs/version-4/getting-started/ecosystem.md",sourceDirName:"getting-started",slug:"/getting-started/ecosystem",permalink:"/docs/4/getting-started/ecosystem",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/getting-started/ecosystem.md",tags:[],version:"4",frontMatter:{id:"ecosystem",title:"Ecosystem notes"},sidebar:"Introduction",previous:{title:"Design overview",permalink:"/docs/4/getting-started/design"},next:{title:"Migrating to v4",permalink:"/docs/4/getting-started/migration_v4"}},s={},u=[{value:"Centrifuge library for Go",id:"centrifuge-library-for-go",level:2},{value:"Framework integrations",id:"framework-integrations",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Some additional notes about our ecosystem which may help you develop with our tech."),(0,i.kt)("h2",{id:"centrifuge-library-for-go"},"Centrifuge library for Go"),(0,i.kt)("p",null,"Centrifugo is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge"},"Centrifuge")," library for Go language."),(0,i.kt)("p",null,"Due to its standalone language-agnostic nature Centrifugo dictates some rules developers should follow when integrating. If you need more freedom and a more tight integration of real-time server with application business logic you may consider using Centrifuge library to build something similar to Centrifugo but with customized behavior. Centrifuge library can be considered as Socket.IO analogue in Go language ecosystem."),(0,i.kt)("p",null,"Library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge#readme"},"README")," has detailed description, link to examples and ",(0,i.kt)("a",{parentName:"p",href:"/blog/2021/01/15/centrifuge-intro"},"introduction post"),"."),(0,i.kt)("p",null,"Many Centrifugo features should be re-implemented when using Centrifuge - like API layer, admin web UI, proxy etc (if you need those of course). And you need to write in Go language. But the core functionality like a client-server protocol (all Centrifugo client SDKs work with Centrifuge library based server) and Redis engine to scale come out of the box \u2013 in most cases this is enough to start building an app."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Many things said in Centrifugo doc can be considered as an extra documentation for Centrifuge library (for example part about infrastructure tuning or transport description). But not all of them.")),(0,i.kt)("h2",{id:"framework-integrations"},"Framework integrations"),(0,i.kt)("p",null,"There are some community-driven projects that provide integration with frameworks for more native experience."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In general, integrating Centrifugo can be done in several steps even without third-party libraries \u2013 see our ",(0,i.kt)("a",{parentName:"p",href:"/docs/4/getting-started/integration"},"integration guide"),". Integrating directly may allow using all Centrifugo features without limitations which can be introduced by third-party wrapper.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/denis660/laravel-centrifugo"},"laravel-centrifugo")," integration with Laravel framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/opekunov/laravel-centrifugo-broadcaster"},"laravel-centrifugo-broadcaster")," one more integration with Laravel framework to consider"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/fre5h/CentrifugoBundle"},"CentrifugoBundle")," integration with Symfony framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/synw/django-instant"},"Django-instant")," integration with Django framework"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/roadrunner-php/centrifugo"},"roadrunner-php/centrifugo")," integration with ",(0,i.kt)("a",{parentName:"li",href:"https://roadrunner.dev"},"RoadRunner")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/spiral/roadrunner-bridge"},"spiral/roadrunner-bridge")," integration with ",(0,i.kt)("a",{parentName:"li",href:"https://spiral.dev"},"Spiral Framework"))))}p.isMDXComponent=!0}}]);