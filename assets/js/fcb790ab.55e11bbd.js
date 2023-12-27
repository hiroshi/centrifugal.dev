"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[6515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"overview",title:"Real-time transports"},a=void 0,s={unversionedId:"transports/overview",id:"version-3/transports/overview",title:"Real-time transports",description:"Centrifugo supports a variety of transports to deliver real-time messages to clients.",source:"@site/versioned_docs/version-3/transports/overview.md",sourceDirName:"transports",slug:"/transports/overview",permalink:"/docs/3/transports/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/transports/overview.md",tags:[],version:"3",frontMatter:{id:"overview",title:"Real-time transports"},sidebar:"Transports",next:{title:"Client real-time SDKs",permalink:"/docs/3/transports/client_sdk"}},l={},c=[{value:"Bidirectional",id:"bidirectional",level:2},{value:"Unidirectional",id:"unidirectional",level:2},{value:"Unidirectional message types",id:"unidirectional-message-types",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Centrifugo supports a variety of transports to deliver real-time messages to clients."),(0,i.kt)("admonition",{title:"Every transport is a persistent connection",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here we describe supported transports between your application frontend and Centrifugo itself. Every Centrifugo transport is a persistent connection so the server can push data towards clients at any moment.")),(0,i.kt)("p",null,"The important distinction here is that all supported transports belong to one of two possible groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bidirectional"),(0,i.kt)("li",{parentName:"ul"},"Unidirectional")),(0,i.kt)("h2",{id:"bidirectional"},"Bidirectional"),(0,i.kt)("p",null,"Bidirectional transports are capable to serve all Centrifugo features. These transports are the main Centrifugo focus."),(0,i.kt)("p",null,"Bidirectional transports come with a cost that developers need to use a special client connector library which speaks Centrifugo ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/transports/client_protocol"},"client protocol"),". The reason why we need a special client connector library is that a bidirectional connection is asynchronous \u2013 it's required to match requests to responses, properly manage connection state and request queueing/timeouts/errors."),(0,i.kt)("p",null,"Centrifugo has ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/transports/client_sdk"},"client SDKs")," for bidirectional communication for popular environments."),(0,i.kt)("h2",{id:"unidirectional"},"Unidirectional"),(0,i.kt)("p",null,"Unidirectional transports suit well for simple use-cases with stable subscriptions, usually known at connection time."),(0,i.kt)("p",null,"The advantage is that unidirectional transports do not require special client connectors - developers can use native browser APIs (like WebSocket, EventSource, HTTP streaming), or GRPC generated code to receive real-time updates from Centrifugo \u2013 thus avoiding dependency to a client connector that abstracts bidirectional communication."),(0,i.kt)("p",null,"The drawback is that with unidirectional transports you are not inheriting all Centrifugo features out of the box (like dynamic subscriptions/unsubscriptions, automatic message recovery on reconnect, possibility to send RPC calls over persistent connection). But some of the missing client APIs can be mimicked by using calls to Centrifugo ",(0,i.kt)("a",{parentName:"p",href:"/docs/3/server/server_api"},"server API")," (i.e. over client -> application backend -> Centrifugo)."),(0,i.kt)("h3",{id:"unidirectional-message-types"},"Unidirectional message types"),(0,i.kt)("p",null,"In case of unidirectional transports Centrifugo will send ",(0,i.kt)("inlineCode",{parentName:"p"},"Push")," frames to the connection. Push frames defined by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"client protocol schema"),". I.e. Centrifugo reuses a part of its bidirectional protocol for unidirectional communication. Push message defined as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"message Push {\n  enum PushType {\n    PUBLICATION = 0;\n    JOIN = 1;\n    LEAVE = 2;\n    UNSUBSCRIBE = 3;\n    MESSAGE = 4;\n    SUBSCRIBE = 5;\n    CONNECT = 6;\n    DISCONNECT = 7;\n    REFRESH = 8;\n  }\n  PushType type = 1;\n  string channel = 2;\n  bytes data = 3;\n}\n")),(0,i.kt)("p",null,"So unidirectional connection will receive various pushes. All you need to do is look at Push type and process it or skip it. In most cases you will be most interested in ",(0,i.kt)("inlineCode",{parentName:"p"},"CONNECT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PUBLICATION")," types."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In case of unidirectional WebSocket, EventSource and HTTP-streaming which currently work only with JSON ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field of Push will come as an embedded JSON instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," (again \u2013 the same mechanism as for Centrifugo bidirectional JSON protocol).")),(0,i.kt)("p",null,"Just try using any unidirectional transport and you will quickly get the idea."))}u.isMDXComponent=!0}}]);