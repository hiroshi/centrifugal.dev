"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5028],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?o.createElement(d,a(a({ref:t},p),{},{components:n})):o.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9872:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"websocket",title:"WebSocket"},c=void 0,l={unversionedId:"transports/websocket",id:"transports/websocket",title:"WebSocket",description:"Websocket is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP.",source:"@site/docs/transports/websocket.md",sourceDirName:"transports",slug:"/transports/websocket",permalink:"/docs/transports/websocket",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/websocket.md",tags:[],version:"current",frontMatter:{id:"websocket",title:"WebSocket"},sidebar:"Transports",previous:{title:"Real-time transports",permalink:"/docs/transports/overview"},next:{title:"SockJS",permalink:"/docs/transports/sockjs"}},p=[{value:"Options",id:"options",children:[{value:"websocket_message_size_limit",id:"websocket_message_size_limit",children:[],level:3},{value:"websocket_read_buffer_size",id:"websocket_read_buffer_size",children:[],level:3},{value:"websocket_write_buffer_size",id:"websocket_write_buffer_size",children:[],level:3},{value:"websocket_use_write_buffer_pool",id:"websocket_use_write_buffer_pool",children:[],level:3},{value:"websocket_compression",id:"websocket_compression",children:[],level:3}],level:2},{value:"Protobuf binary protocol",id:"protobuf-binary-protocol",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websocket")," is the main transport in Centrifugo. It's a very efficient low-overhead protocol on top of TCP."),(0,i.kt)("p",null,"The biggest advantage is that Websocket works out of the box in all modern browsers and almost all programming languages have Websocket implementations. This makes Websocket a pretty universal transport that can even be used to connect to Centrifugo from web apps and mobile apps and other environments."),(0,i.kt)("p",null,"Default WebSocket connection endpoint in Centrifugo is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/connection/websocket\n")),(0,i.kt)("p",null,"By default WebSocket connection uses JSON protocol internally."),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("h3",{id:"websocket_message_size_limit"},"websocket_message_size_limit"),(0,i.kt)("p",null,"Default: 65536 (64KB)"),(0,i.kt)("p",null,"Maximum allowed size of a message received from WebSocket connection in bytes."),(0,i.kt)("h3",{id:"websocket_read_buffer_size"},"websocket_read_buffer_size"),(0,i.kt)("p",null,"In bytes, by default 0 which tells Centrifugo to reuse read buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but can increase number of system calls depending on average message size)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "websocket_read_buffer_size": 512\n}\n')),(0,i.kt)("h3",{id:"websocket_write_buffer_size"},"websocket_write_buffer_size"),(0,i.kt)("p",null,"In bytes, by default 0 which tells Centrifugo to reuse write buffer from HTTP server for WebSocket connection (usually 4096 bytes in size). If set to a lower value can reduce memory usage per WebSocket connection (but HTTP buffer won't be reused):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "websocket_write_buffer_size": 512\n}\n')),(0,i.kt)("h3",{id:"websocket_use_write_buffer_pool"},"websocket_use_write_buffer_pool"),(0,i.kt)("p",null,"If you have a few writes then ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket_use_write_buffer_pool")," (boolean, default ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),") option can reduce memory usage of Centrifugo a bit as there won't be separate write buffer binded to each WebSocket connection."),(0,i.kt)("h3",{id:"websocket_compression"},"websocket_compression"),(0,i.kt)("p",null,"An experimental feature for raw WebSocket endpoint - ",(0,i.kt)("inlineCode",{parentName:"p"},"permessage-deflate")," compression for  websocket messages. Btw look at ",(0,i.kt)("a",{parentName:"p",href:"https://www.igvita.com/2013/11/27/configuring-and-optimizing-websocket-compression/"},"great article")," about websocket compression. WebSocket compression can reduce an amount of traffic travelling over the wire."),(0,i.kt)("p",null,"We consider this experimental because this websocket compression is experimental in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gorilla/websocket"},"Gorilla Websocket")," library that Centrifugo uses internally."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Enabling WebSocket compression will result in much slower Centrifugo performance and more memory usage \u2013 depending on your message rate this can be very noticeable."))),(0,i.kt)("p",null,"To enable WebSocket compression for raw WebSocket endpoint set ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket_compression")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in a configuration file. After this clients that support ",(0,i.kt)("inlineCode",{parentName:"p"},"permessage-deflate")," will negotiate compression with server automatically. Note that enabling compression does not mean that every connection will use it - this depends on client support for this feature."),(0,i.kt)("p",null,"Another option is ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket_compression_min_size"),". Default 0. This is a minimal size of message in bytes for which we use ",(0,i.kt)("inlineCode",{parentName:"p"},"deflate")," compression when writing it to client's connection. Default value ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," means that we will compress all messages when ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket_compression")," enabled and compression support negotiated with client."),(0,i.kt)("p",null,"It's also possible to control websocket compression level defined at ",(0,i.kt)("a",{parentName:"p",href:"https://golang.org/pkg/compress/flate/#NewWriter"},"compress/flate")," By default when compression with a client negotiated Centrifugo uses compression level 1 (BestSpeed). If you want to set custom compression level use ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket_compression_level")," configuration option."),(0,i.kt)("h2",{id:"protobuf-binary-protocol"},"Protobuf binary protocol"),(0,i.kt)("p",null,"In most cases you will use Centrifugo with JSON protocol which is used by default. It consists of simple human-readable frames that can be easily inspected. Also it's a very simple task to publish JSON encoded data to HTTP API endpoint. You may want to use binary Protobuf client protocol if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"you want less traffic on wire as Protobuf is very compact"),(0,i.kt)("li",{parentName:"ul"},"you want maximum performance on server-side as Protobuf encoding/decoding is very efficient"),(0,i.kt)("li",{parentName:"ul"},"you can sacrifice human-readable JSON for your application")),(0,i.kt)("p",null,"Binary protobuf protocol only works for raw Websocket connections (as SockJS can't deal with binary). With most clients to use binary you just need to provide query parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"format")," to Websocket URL, so final URL look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wss://centrifugo.example.com/connection/websocket?format=protobuf\n")),(0,i.kt)("p",null,"After doing this Centrifugo will use binary frames to pass data between client and server. Your application specific payload can be random bytes."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You still can continue to encode your application specific data as JSON when using Protobuf protocol thus have a possibility to co-exist with clients that use JSON protocol on the same Centrifugo installation inside the same channels."))))}m.isMDXComponent=!0}}]);