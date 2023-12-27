"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"webtransport",title:"WebTransport"},i=void 0,s={unversionedId:"transports/webtransport",id:"transports/webtransport",title:"WebTransport",description:"WebTransport is an API offering low-latency, bidirectional, client-server messaging on top of HTTP/3 (with QUIC under the hood). See Using WebTransport article that gives a good overview of it.",source:"@site/docs/transports/webtransport.md",sourceDirName:"transports",slug:"/transports/webtransport",permalink:"/docs/transports/webtransport",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/webtransport.md",tags:[],version:"current",frontMatter:{id:"webtransport",title:"WebTransport"},sidebar:"Transports",previous:{title:"SockJS",permalink:"/docs/transports/sockjs"},next:{title:"Client protocol",permalink:"/docs/transports/client_protocol"}},p={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"WebTransport is an API offering low-latency, bidirectional, client-server messaging on top of ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTP_3"},"HTTP/3")," (with ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/QUIC"},"QUIC")," under the hood). See ",(0,o.kt)("a",{parentName:"p",href:"https://web.dev/webtransport/"},"Using WebTransport")," article that gives a good overview of it."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"WebTransport support in Centrifugo is EXPERIMENTAL and not recommended for production usage. ",(0,o.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/draft-ietf-webtrans-http3/"},"WebTransport IETF specification")," is not finished yet and may have breaking changes.")),(0,o.kt)("p",null,"To use WebTransport you first need to run HTTP/3 experimental server and enable ",(0,o.kt)("inlineCode",{parentName:"p"},"webtransport")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    "http3": true,\n    "tls": true,\n    "tls_cert": "path/to/crt",\n    "tls_key": "path/to/key",\n    "webtransport": true\n}\n')),(0,o.kt)("p",null,"In HTTP/3 and WebTransport case TLS is required."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"At the time of writing only Chrome (since v97) supports WebTransport API. If you are experimenting with self-signed certificates you may need to run Chrome with flags to force HTTP/3 on origin and ignore certificate errors:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"/path/to/your/Chrome --origin-to-force-quic-on=localhost:8000 --ignore-certificate-errors-spki-list=TSZTiMjLG+DNjESXdJh3f+S8C+RhsFCav7T24VNuCPQ=\n")),(0,o.kt)("p",{parentName:"admonition"},"Where the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"--ignore-certificate-errors-spki-list")," is a certificate fingerprint obtained this way:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"openssl x509 -in server.crt -pubkey -noout | openssl pkey -pubin -outform der | openssl dgst -sha256 -binary | openssl enc -base64\n")),(0,o.kt)("p",{parentName:"admonition"},"With not self-signed certs things should work just fine in Chrome."),(0,o.kt)("p",{parentName:"admonition"},"Here is a video tutorial that shows this in action:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/RmhggpXPncU",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)("p",null,"After starting Centrifugo with HTTP/3 and WebTransport endpoint you can connect to that endpoint (by default \u2013 ",(0,o.kt)("inlineCode",{parentName:"p"},"/connection/webtransport"),") using ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifuge-js"),". For example, let's enable WebTransport and will use WebSocket as a fallback option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const transports = [\n    {\n        transport: 'webtransport',\n        endpoint: 'https://localhost:8000/connection/webtransport'\n    },\n    {\n        transport: 'websocket',\n        endpoint: 'wss://localhost:8000/connection/websocket'\n    }\n];\nconst centrifuge = new Centrifuge(transports);\ncentrifuge.connect()\n")),(0,o.kt)("p",null,"Note, that we are using secure schemes here \u2013 ",(0,o.kt)("inlineCode",{parentName:"p"},"https://")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"wss://"),". While in WebSocket case you could opt for non-TLS communication, in WebTransport case non-TLS ",(0,o.kt)("inlineCode",{parentName:"p"},"http://")," scheme is simply not supported by the specification."),(0,o.kt)("p",null,"Also, Chrome may not automatically close WebTransport sessions upon browser reload, so consider adding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'addEventListener("unload", (event) => { centrifuge.disconnect() });\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you run Centrifugo without load balancer or reverse proxy in front, or make sure your proxy can proxy HTTP/3 traffic to Centrifugo.")),(0,o.kt)("p",null,"In Centrifugo case, we utilize a single bidirectional stream of WebTransport to pass our protocol between client and server. Both JSON and Protobuf communication are supported. There are some issues with the proper passing of the disconnect advice in some cases, otherwise it's fully functional."),(0,o.kt)("p",null,"Obviously, due to the limited WebTransport support in browsers at the moment, possible breaking changes in the WebTransport specification it's an ",(0,o.kt)("strong",{parentName:"p"},"experimental")," feature. And it's not recommended for production usage for now. At some point in the future, it may become a reasonable alternative to WebSocket."))}u.isMDXComponent=!0}}]);