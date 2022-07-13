"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[4586],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},0:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),r=["components"],s={id:"client_protocol",title:"Client protocol"},l=void 0,c={unversionedId:"transports/client_protocol",id:"transports/client_protocol",title:"Client protocol",description:"This chapter describes the core concepts of Centrifugo bidirectional client protocol \u2013 concentrating on framing level. If you want to find out details about exposed client API then look at client API document.",source:"@site/docs/transports/client_protocol.md",sourceDirName:"transports",slug:"/transports/client_protocol",permalink:"/docs/next/transports/client_protocol",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/client_protocol.md",tags:[],version:"current",frontMatter:{id:"client_protocol",title:"Client protocol"},sidebar:"Transports",previous:{title:"WebTransport",permalink:"/docs/next/transports/webtransport"},next:{title:"WebSocket",permalink:"/docs/next/transports/uni_websocket"}},p={},d=[{value:"Protobuf schema",id:"protobuf-schema",level:2},{value:"Command-Reply",id:"command-reply",level:2},{value:"Asynchronous pushes",id:"asynchronous-pushes",level:2},{value:"Top level batching",id:"top-level-batching",level:2},{value:"Ping Pong",id:"ping-pong",level:2},{value:"Handle disconnects",id:"handle-disconnects",level:2},{value:"Handle errors",id:"handle-errors",level:2},{value:"Additional notes",id:"additional-notes",level:2}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter describes the core concepts of Centrifugo bidirectional client protocol \u2013 concentrating on framing level. If you want to find out details about exposed client API then look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/transports/client_api"},"client API")," document."),(0,o.kt)("p",null,"We need our own protocol on top of real-time transport due to several reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We want request-response semantics (while our main transport \u2013 WebSocket \u2013 does not provide this out of the box)"),(0,o.kt)("li",{parentName:"ul"},"Multiplex many subscriptions over a single physical connection"),(0,o.kt)("li",{parentName:"ul"},"Efficient ping-pong support"),(0,o.kt)("li",{parentName:"ul"},"Handle server disconnect advices")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In case of questions on how client protocol works/structured you can always look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/next/transports/client_sdk"},"existing client SDKs"),"."))),(0,o.kt)("h2",{id:"protobuf-schema"},"Protobuf schema"),(0,o.kt)("p",null,"Centrifugo is built on top of Centrifuge library for Go. Centrifuge library uses its own framing for wrapping Centrifuge-specific messages \u2013 synchronous commands from a client to a server (which expect replies from a server) and asynchronous pushes.  "),(0,o.kt)("p",null,"Centrifuge client protocol is defined by a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/protocol/blob/master/definitions/client.proto"},"Protobuf schema"),". This is the source of truth."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"At the moment Protobuf schema contains some fields which are only used in client protocol v1. This is for backwards compatibility \u2013 server supports clients connecting over both client protocol v2 and client protocol v1. Client protocol v1 is considered deprecated and will be removed at some point in the future (giving enough time to our users to migrate). "))),(0,o.kt)("h2",{id:"command-reply"},"Command-Reply"),(0,o.kt)("p",null,"In bidirectional case client sends ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," to a server and server sends ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," to a client. I.e. all communication between client and server is a bidirectional exchange of ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," messages."),(0,o.kt)("p",null,"Each ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," has ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field. This is an incremental ",(0,o.kt)("inlineCode",{parentName:"p"},"uint32")," field. This field will be echoed in a server replies to commands so client could match a certain ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," sent before. This is important since Websocket is an asynchronous transport where server and client both send messages at any moment and there is no builtin request-response matching. Having ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," allows matching a reply with a command send before on SDK level."),(0,o.kt)("p",null,"In JSON case client can send command like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 1, "subscribe": {"channel": "example"}}\n')),(0,o.kt)("p",null,"And client can expect something like this in response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 1, "subscribe": {}}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," for different commands has corresponding field with command result (",(0,o.kt)("inlineCode",{parentName:"p"},'"subscribe"')," in example above)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," can also contain ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," processing resulted into an error on a server. ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," is optional and if ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," does not have ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," then it means that ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," processed successfully and client can handle result object appropriately."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"error")," looks like this in JSON case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 100,\n    "message": "internal server error",\n    "temporary": true\n}\n')),(0,o.kt)("p",null,"I.e. reply with error may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 1, "error": {"code": 100, "message": "internal server error"}}\n')),(0,o.kt)("p",null,"We will talk more about error handling below."),(0,o.kt)("p",null,"Centrifuge library defines several command types client can issue. A well-written client must be aware of all those commands and client workflow."),(0,o.kt)("p",null,"Current commands:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connect")," \u2013 sent to authenticate connection, sth like hello from a client which can carry authentication token and arbitrary data."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribe")," \u2013 sent to subscribe to a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unsubscribe")," - sent to unsubscribe from a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"publish")," - sent to publish data into a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presence")," - sent to request presence information from a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"presence_stats")," - sent to request presence stats information from a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"history")," - sent to request history information for a channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"send")," - sent to send async message to a server (this command is a bit special since it must not contain ",(0,o.kt)("inlineCode",{parentName:"li"},"id")," - as we don't wait for any response from a server in this case)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rpc")," - sent to send RPC to a channel (execute arbitrary logic and wait for response)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh")," - sent to refresh connection token"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sub_refresh")," - sent to refresh channel subscription token")),(0,o.kt)("h2",{id:"asynchronous-pushes"},"Asynchronous pushes"),(0,o.kt)("p",null,"The special type of ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," is ",(0,o.kt)("strong",{parentName:"p"},"asynchronous")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),". Such replies have no ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field set (or ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," can be equal to zero). Async replies can come to a client at any moment - not as reaction to issued ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," but as a message from a server to a client at arbitrary time. For example, this can be a message published into channel."),(0,o.kt)("p",null,"There are several types of asynchronous messages that can come from a server to a client."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pub")," is a message published into channel"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"join")," messages sent when someone joined (subscribed on) channel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"leave")," messages sent when someone left (unsubscribed from) channel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"unsubscribe")," message sent when a server unsubscribed current client from a channel:"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"subscribe")," may be sent when a server subscribes client to a channel."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"disconnect")," may be sent be a server before closing connection and contains disconnect code/reason"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"message")," may be sent when server sends asynchronous message to a client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connect")," push can be sent in unidirectional transport case"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"refresh")," may be sent when a server refreshes client credentials (useful in unidirectional transports)")),(0,o.kt)("h2",{id:"top-level-batching"},"Top level batching"),(0,o.kt)("p",null,"To reduce number of system calls one request from a client to a server and one response from a server to a client can have more than one ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply"),". This allows reducing number of system calls for writing and reading data."),(0,o.kt)("p",null,"When JSON format used then many ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," can be sent from client to server in JSON streaming line-delimited format. I.e. each individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," encoded to JSON and then commands joined together using new line symbol ",(0,o.kt)("inlineCode",{parentName:"p"},"\\n"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"id": 1, "subscribe": {"channel": "ch1"}}\n{"id": 2, "subscribe": {"channel": "ch2"}}\n')),(0,o.kt)("p",null,"Here is an example how we do this in Javascript client when JSON format used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function encodeCommands(commands) {\n    const encodedCommands = [];\n    for (const i in commands) {\n      if (commands.hasOwnProperty(i)) {\n        encodedCommands.push(JSON.stringify(commands[i]));\n      }\n    }\n    return encodedCommands.join('\\n');\n}\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This doc uses JSON format for examples because it's human-readable. Everything said here for JSON is also true for Protobuf encoded case. There is a difference how several individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," or server ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," joined into one request \u2013 see details below. Also, in JSON format ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes")," fields transformed into embedded JSON by Centrifugo."))),(0,o.kt)("p",null,"When Protobuf format used then many ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," can be sent from a client to a server in a length-delimited format where each individual ",(0,o.kt)("inlineCode",{parentName:"p"},"Command")," marshaled to bytes prepended by ",(0,o.kt)("inlineCode",{parentName:"p"},"varint")," length. See existing client implementations for encoding example."),(0,o.kt)("p",null,"The same rules relate to many ",(0,o.kt)("inlineCode",{parentName:"p"},"Reply")," in one response from server to client. Line-delimited JSON and varint-length prefixed Protobuf also used there."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Server can even send reply to a command and asynchronous message batched together in a one frame."))),(0,o.kt)("p",null,"For example here is how we read server response and extracting individual replies in Javascript client when JSON format used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function decodeReplies(data) {\n    const replies = [];\n    const encodedReplies = data.split('\\n');\n    for (const i in encodedReplies) {\n      if (encodedReplies.hasOwnProperty(i)) {\n        if (!encodedReplies[i]) {\n          continue;\n        }\n        const reply = JSON.parse(encodedReplies[i]);\n        replies.push(reply);\n      }\n    }\n    return replies;\n}\n")),(0,o.kt)("p",null,"For Protobuf case see existing client implementations for decoding example."),(0,o.kt)("h2",{id:"ping-pong"},"Ping Pong"),(0,o.kt)("p",null,"To maintain connection alive and detect broken connections server periodically sends empty commands to clients and expects empty replies from them."),(0,o.kt)("p",null,"When client does not receive ping from a server for some time it can consider connection broken and try to reconnect. Usually a server sends pings every 25 seconds."),(0,o.kt)("h2",{id:"handle-disconnects"},"Handle disconnects"),(0,o.kt)("p",null,"Client should handle disconnect advices from server. In websocket case disconnect advice is sent in CLOSE Websocket frame. Disconnect advice contains ",(0,o.kt)("inlineCode",{parentName:"p"},"uint32")," ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," and human-readable ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," ",(0,o.kt)("inlineCode",{parentName:"p"},"reason"),"."),(0,o.kt)("h2",{id:"handle-errors"},"Handle errors"),(0,o.kt)("p",null,"This section contains advices to error handling in client implementations."),(0,o.kt)("p",null,"Errors can happen during various operations and can be handled in special way in context of some commands to tolerate network and server problems."),(0,o.kt)("p",null,"Errors during ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," must result in full client reconnect with exponential backoff strategy. The special case is error with code ",(0,o.kt)("inlineCode",{parentName:"p"},"110")," which signals that connection token already expired. As we said above client should update its connection JWT before connecting to server again.  "),(0,o.kt)("p",null,"Errors during ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," must result in full client reconnect in case of internal error (code ",(0,o.kt)("inlineCode",{parentName:"p"},"100"),"). And be sent to subscribe error event handler of subscription if received error is persistent. Persistent errors are errors like ",(0,o.kt)("inlineCode",{parentName:"p"},"permission denied"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"bad request"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"namespace not found")," etc. Persistent errors in most situation mean a mistake from developers side."),(0,o.kt)("p",null,"The special corner case is client-side timeout during ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," operation. As protocol is asynchronous it's possible in this case that server will eventually subscribe client on channel but client will think that it's not subscribed. It's possible to retry subscription request and tolerate ",(0,o.kt)("inlineCode",{parentName:"p"},"already subscribed")," (code ",(0,o.kt)("inlineCode",{parentName:"p"},"105"),") error as expected. But the simplest solution is to reconnect entirely as this is simpler and gives client a chance to connect to working server instance."),(0,o.kt)("p",null,"Errors during rpc-like operations can be just returned to caller - i.e. user javascript code. Calls like ",(0,o.kt)("inlineCode",{parentName:"p"},"history")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"presence")," are idempotent. You should be accurate with non-idempotent operations like ",(0,o.kt)("inlineCode",{parentName:"p"},"publish")," - in case of client timeout it's possible to send the same message into channel twice if retry publish after timeout - so users of libraries must care about this case \u2013 making sure they have some protection from displaying message twice on client side (maybe some sort of unique key in payload)."),(0,o.kt)("h2",{id:"additional-notes"},"Additional notes"),(0,o.kt)("p",null,"Client protocol does not allow one client connection to subscribe to the same channel twice. In this case client will receive ",(0,o.kt)("inlineCode",{parentName:"p"},"already subscribed")," error in a reply to a subscribe command."))}u.isMDXComponent=!0}}]);