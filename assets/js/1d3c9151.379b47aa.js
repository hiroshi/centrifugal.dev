"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),g=i,m=f["".concat(s,".").concat(g)]||f[g]||u[g]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"singleflight",title:"Singleflight"},a=void 0,l={unversionedId:"pro/singleflight",id:"version-4/pro/singleflight",title:"Singleflight",description:"Centrifugo PRO provides an additional boolean option use_singleflight (default false). When this option enabled Centrifugo will automatically try to merge identical requests to history, online presence or presence stats issued at the same time into one real network request. It will do this by using in-memory component called singleflight.",source:"@site/versioned_docs/version-4/pro/singleflight.md",sourceDirName:"pro",slug:"/pro/singleflight",permalink:"/docs/4/pro/singleflight",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/pro/singleflight.md",tags:[],version:"4",frontMatter:{id:"singleflight",title:"Singleflight"},sidebar:"Pro",previous:{title:"Faster performance",permalink:"/docs/4/pro/performance"},next:{title:"Message batching control",permalink:"/docs/4/pro/client_message_batching"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo PRO provides an additional boolean option ",(0,i.kt)("inlineCode",{parentName:"p"},"use_singleflight")," (default ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"). When this option enabled Centrifugo will automatically try to merge identical requests to history, online presence or presence stats issued at the same time into one real network request. It will do this by using in-memory component called ",(0,i.kt)("inlineCode",{parentName:"p"},"singleflight"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Singleflight",src:n(11117).Z,width:"4259",height:"858"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"While it can seem similar, singleflight is not a cache. It only combines identical parallel requests into one. If requests come one after another \u2013 they will be sent separately to the broker or presence storage.")),(0,i.kt)("p",null,"This option can radically reduce a load on a broker in the following situations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and in case of massive reconnect scenario try to access history simultaneously to restore a state (whether manually using history API or over automatic recovery feature)"),(0,i.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and positioning feature is on so Centrifugo tracks client position"),(0,i.kt)("li",{parentName:"ul"},"Many clients subscribed to the same channel and in case of massive reconnect scenario try to call presence or presence stats simultaneously")),(0,i.kt)("p",null,"Using this option only makes sense with remote engine (Redis, KeyDB, Tarantool), it won't provide a benefit in case of using a Memory engine."),(0,i.kt)("p",null,"To enable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "use_singleflight": true\n}\n')),(0,i.kt)("p",null,"Or via ",(0,i.kt)("inlineCode",{parentName:"p"},"CENTRIFUGO_USE_SINGLEFLIGHT")," environment variable."))}u.isMDXComponent=!0},11117:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/singleflight-35650f07c8cda65fec55fd490157a6a0.png"}}]);