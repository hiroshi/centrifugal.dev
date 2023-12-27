"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={id:"uni_http_stream",title:"Unidirectional HTTP streaming",sidebar_label:"HTTP streaming"},o=void 0,s={unversionedId:"transports/uni_http_stream",id:"transports/uni_http_stream",title:"Unidirectional HTTP streaming",description:"HTTP streaming is a technique based on using a long-lived HTTP connection between a client and a server with a chunked transfer encoding. These days it's possible to use it from the web browser using modern Fetch and Readable Streams API.",source:"@site/docs/transports/uni_http_stream.md",sourceDirName:"transports",slug:"/transports/uni_http_stream",permalink:"/docs/transports/uni_http_stream",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/uni_http_stream.md",tags:[],version:"current",frontMatter:{id:"uni_http_stream",title:"Unidirectional HTTP streaming",sidebar_label:"HTTP streaming"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"},next:{title:"SSE (EventSource)",permalink:"/docs/transports/uni_sse"}},l={},c=[{value:"Connect command",id:"connect-command",level:2},{value:"Supported data formats",id:"supported-data-formats",level:2},{value:"Pings",id:"pings",level:2},{value:"Options",id:"options",level:2},{value:"uni_http_stream",id:"uni_http_stream",level:3},{value:"uni_http_stream_max_request_body_size",id:"uni_http_stream_max_request_body_size",level:3},{value:"Connecting using CURL",id:"connecting-using-curl",level:2},{value:"Browser example",id:"browser-example",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HTTP streaming is a technique based on using a long-lived HTTP connection between a client and a server with a chunked transfer encoding. These days it's possible to use it from the web browser using modern ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"},"Fetch")," and ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream"},"Readable Streams")," API."),(0,a.kt)("p",null,"Default unidirectional HTTP streaming connection endpoint in Centrifugo is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/connection/uni_http_stream\n")),(0,a.kt)("p",null,"Streaming endpoint accepts HTTP POST requests and sends JSON messages to a connection. These JSON messages can have different meaning according to Centrifuge protocol Protobuf definitions. But in most cases you will be interested in Publication push types."),(0,a.kt)("h2",{id:"connect-command"},"Connect command"),(0,a.kt)("p",null,"It's possible to pass initial connect command by posting a JSON body to a streaming endpoint. "),(0,a.kt)("p",null,"Refer to the full Connect command description \u2013 it's ",(0,a.kt)("a",{parentName:"p",href:"/docs/transports/uni_websocket#connect-command"},"the same as for unidirectional WebSocket"),"."),(0,a.kt)("h2",{id:"supported-data-formats"},"Supported data formats"),(0,a.kt)("p",null,"JSON"),(0,a.kt)("h2",{id:"pings"},"Pings"),(0,a.kt)("p",null,"Centrifugo will send different message types to a connection. Every message is JSON encoded. A special JSON value ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," used as a PING message. You can simply ignore it on a client side upon receiving. You can ignore such messages or use them to detect broken connections (nothing received from a server for a long time)."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"uni_http_stream"},"uni_http_stream"),(0,a.kt)("p",null,"Boolean, default: ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"Enables unidirectional HTTP streaming endpoint."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_http_stream": true\n}\n')),(0,a.kt)("h3",{id:"uni_http_stream_max_request_body_size"},"uni_http_stream_max_request_body_size"),(0,a.kt)("p",null,"Default: 65536 (64KB)"),(0,a.kt)("p",null,"Maximum allowed size of a initial HTTP POST request in bytes."),(0,a.kt)("h2",{id:"connecting-using-curl"},"Connecting using CURL"),(0,a.kt)("p",null,"Let's look how simple it is to connect to Centrifugo using HTTP streaming."),(0,a.kt)("p",null,"We will start from scratch, generate new configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"centrifugo genconfig\n")),(0,a.kt)("p",null,"Turn on uni HTTP stream and automatically subscribe users to personal channel upon connect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "uni_http_stream": true,\n    "user_subscribe_to_personal": true\n}\n')),(0,a.kt)("p",null,"Run Centrifugo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"centrifugo -c config.json\n")),(0,a.kt)("p",null,"In separate terminal window create token for a user:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u276f go run main.go gentoken -u user12\nHMAC SHA-256 JWT for user user12 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIiLCJleHAiOjE2MjUwNzMyODh9.BxmS4R-X6YXMxLfXNhYRzeHvtu_M2NCaXF6HNu7VnDM\n")),(0,a.kt)("p",null,"Then connect to Centrifugo uni HTTP stream endpoint with simple CURL POST request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream \\\n    -d \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ1c2VyMTIiLCJleHAiOjE2MjUwNzMyODh9.BxmS4R-X6YXMxLfXNhYRzeHvtu_M2NCaXF6HNu7VnDM"}\'\n')),(0,a.kt)("p",null,"Open one more terminal window and publish message to a personal user channel:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/api/publish \\\n    -d \'{"channel": "#user12", "data": {"input": "hello"}}\' \\\n    -H "Authorization: apikey 9230f514-34d2-4971-ace2-851c656e81dc"\n')),(0,a.kt)("p",null,"You should see this messages coming from server."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"{}")," messages are pings from a server."),(0,a.kt)("p",null,"That's all, happy streaming!"),(0,a.kt)("h2",{id:"browser-example"},"Browser example"),(0,a.kt)("p",null,"A basic browser will come soon as we update docs for v4."))}p.isMDXComponent=!0}}]);