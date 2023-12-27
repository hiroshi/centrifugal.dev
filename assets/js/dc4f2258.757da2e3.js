"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[70],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},24007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const o={},a=void 0,s={unversionedId:"flow_diagrams",id:"version-3/flow_diagrams",title:"flow_diagrams",description:"For swimlines.io:",source:"@site/versioned_docs/version-3/flow_diagrams.md",sourceDirName:".",slug:"/flow_diagrams",permalink:"/docs/3/flow_diagrams",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/flow_diagrams.md",tags:[],version:"3",frontMatter:{}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For swimlines.io:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client <- App Backend: JWT\n\nnote:\nThe backend generates JWT for a user and passes it to the client side.\n\nClient -> Centrifugo: Client connects to Centrifugo with JWT\n\n...: {fas-spinner} Persistent connection established\n\nClient -> Centrifugo: Client issues channel subscribe requests\n\nCentrifugo --\x3e> Client: Client receives real-time updates from channels\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client -> Centrifugo: Connect request\n\nnote:\nClient connects to Centrifugo without JWT.\n\nCentrifugo -> App backend: Sends request further (via HTTP or GRPC)\n\nnote: The application backend validates client connection and tells Centrifugo user credentials in Connect reply.\n\nApp backend -> Centrifugo: Connect reply\n\nCentrifugo -> Client: Connect Reply\n\n...: {fas-spinner} Persistent connection established\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client -> App Backend: Publish request\n\nnote:\nClient sends data to publish to the application backend.\n\nBackend validates it, maybe modifies, optionally saves to the main database, constructs real-time update and publishes it to the Centrifugo server API.\n\nApp Backend -> Centrifugo: Publish over Centrifugo API\n\nCentrifugo --\x3e> Client: {far-bolt fa-lg} Real-time notification\n\nnote: Centrifugo delivers real-time message to active channel subscribers.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Client -> App Backend: Publish request\n\nnote:\nClient sends data to publish to the application backend.\n\nBackend validates it, maybe modifies, optionally saves to the main database, constructs real-time update and publishes it to the Centrifugo server API.\n\nApp Backend -> Centrifugo: Publish over Centrifugo API\n\nCentrifugo --\x3e> Client: {far-bolt fa-lg} Real-time notification\n\nnote: Centrifugo delivers real-time message to active channel subscribers.\n")))}p.isMDXComponent=!0}}]);