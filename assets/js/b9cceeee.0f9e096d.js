"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7725],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=c(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(k,i(i({ref:e},s),{},{components:n})):a.createElement(k,i({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={id:"connections",title:"Connections API"},i=void 0,o={unversionedId:"pro/connections",id:"pro/connections",title:"Connections API",description:"Centrifugo PRO offers an extra API call, connections, which enables retrieval of all active sessions (based on user ID or expression) without the need to activate the presence feature for channels. Furthermore, developers can attach any desired JSON payload to a connection that will then be visible in the result of the connections call. It's worth noting that this additional meta-information remains hidden from the client-side, unlike the info associated with the connection.",source:"@site/docs/pro/connections.md",sourceDirName:"pro",slug:"/pro/connections",permalink:"/docs/pro/connections",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/connections.md",tags:[],version:"current",frontMatter:{id:"connections",title:"Connections API"},sidebar:"Pro",previous:{title:"User status API",permalink:"/docs/pro/user_status"},next:{title:"User blocking API",permalink:"/docs/pro/user_block"}},p={},c=[{value:"Example",id:"example",level:3},{value:"connections",id:"connections",level:3},{value:"connections params",id:"connections-params",level:4},{value:"connections result",id:"connections-result",level:4},{value:"ConnectionInfo",id:"connectioninfo",level:4},{value:"ConnectionState object",id:"connectionstate-object",level:4},{value:"ChannelContext object",id:"channelcontext-object",level:4},{value:"ConnectionTokenInfo object",id:"connectiontokeninfo-object",level:4},{value:"SubscriptionTokenInfo object",id:"subscriptiontokeninfo-object",level:4}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo PRO offers an extra API call, ",(0,r.kt)("inlineCode",{parentName:"p"},"connections"),", which enables retrieval of all active sessions (based on user ID or expression) without the need to activate the presence feature for channels. Furthermore, developers can attach any desired JSON payload to a connection that will then be visible in the result of the connections call. It's worth noting that this additional meta-information remains hidden from the client-side, unlike the info associated with the connection."),(0,r.kt)("p",null,"This feature serves a valuable purpose in managing active user sessions, particularly for messenger applications. Users can review their current sessions and terminate some of them using the Centrifugo disconnect server API."),(0,r.kt)("p",null,"Moreover, this feature can help developers investigate issues by providing insights into the system's state."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's look at the quick example. First, generate a JWT for user 42:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ centrifugo genconfig\n")),(0,r.kt)("p",null,"Generate token for some user to be used in the example connections:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ centrifugo gentoken -u 42\nHMAC SHA-256 JWT for user 42 with expiration TTL 168h0m0s:\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y\n")),(0,r.kt)("p",null,"Run Centrifugo with ",(0,r.kt)("inlineCode",{parentName:"p"},"uni_http_stream")," transport enabled (it will allow us connecting from the terminal with ",(0,r.kt)("inlineCode",{parentName:"p"},"curl"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CENTRIFUGO_UNI_HTTP_STREAM=1 centrifugo -c config.json\n")),(0,r.kt)("p",null,"Create new terminal window and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,r.kt)("p",null,"In another terminal create one more connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST http://localhost:8000/connection/uni_http_stream --data \'{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0MiIsImV4cCI6MTYyNzcxMzMzNX0.s3eOhujiyBjc4u21nuHkbcWJll4Um0QqGU3PF-6Mf7Y", "name": "terminal"}\'\n')),(0,r.kt)("p",null,"Now let's call ",(0,r.kt)("inlineCode",{parentName:"p"},"connections")," over HTTP API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "X-API-Key: <API_KEY>" \\\n  --request POST \\\n  --data \'{"user": "42"}\' \\\n  http://localhost:8000/api/connections\n')),(0,r.kt)("p",null,"The result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "connections": {\n            "db8bc772-2654-4283-851a-f29b888ace74": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            },\n            "4bc3ca70-ecc5-439d-af14-a78ae18e31c7": {\n                "app_name": "terminal",\n                "transport": "uni_http_stream",\n                "protocol": "json"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"Here we can see that user has 2 connections from ",(0,r.kt)("inlineCode",{parentName:"p"},"terminal")," app."),(0,r.kt)("p",null,"Each connection can be annotated with meta JSON information which is set during connection establishment (over ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," claim of JWT or by returning ",(0,r.kt)("inlineCode",{parentName:"p"},"meta")," in the connect proxy result)."),(0,r.kt)("h3",{id:"connections"},"connections"),(0,r.kt)("p",null,"Returns information about active connections according to the request. "),(0,r.kt)("h4",{id:"connections-params"},"connections params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"fast filter by User ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expression"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"CEL expression to filter users")))),(0,r.kt)("h4",{id:"connections-result"},"connections result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connections"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]ConnectionInfo")),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"active user connections map where key is client ID and value is ConnectionInfo")))),(0,r.kt)("h4",{id:"connectioninfo"},"ConnectionInfo"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"client app name (if provided by client)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"app_version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"client app version (if provided by client)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"transport"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"client connection transport")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"client connection protocol (json or protobuf)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"client user ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"state"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ConnectionState")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"connection state")))),(0,r.kt)("h4",{id:"connectionstate-object"},"ConnectionState object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channels"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"map[string]ChannelContext")),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Channels client subscribed to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"connection_token"),(0,r.kt)("td",{parentName:"tr",align:null},"ConnectionTokenInfo"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"information about connection token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscription_tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"map<string, SubscriptionTokenInfo>"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"information about channel tokens used to subscribe")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"meta"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"meta information attached to a connection")))),(0,r.kt)("h4",{id:"channelcontext-object"},"ChannelContext object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The source of channel subscription")))),(0,r.kt)("h4",{id:"connectiontokeninfo-object"},"ConnectionTokenInfo object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"unique token ID (jti)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issued_at"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"time (Unix seconds) when token was issued")))),(0,r.kt)("h4",{id:"subscriptiontokeninfo-object"},"SubscriptionTokenInfo object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"unique token ID (jti)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"issued_at"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"time (Unix seconds) when token was issued")))))}u.isMDXComponent=!0}}]);