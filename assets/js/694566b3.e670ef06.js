"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3655],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,m=d["".concat(c,".").concat(k)]||d[k]||u[k]||s;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1669:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],a={id:"sockjs",title:"SockJS"},c=void 0,l={unversionedId:"transports/sockjs",id:"transports/sockjs",title:"SockJS",description:"SockJS is a polyfill browser library which provides HTTP-based fallback transports in case when it's not possible to establish Websocket connection. This can happen in old client browsers or because of some proxy behind client and server that cuts of Websocket traffic. You can find more information on SockJS project Github page.",source:"@site/docs/transports/sockjs.md",sourceDirName:"transports",slug:"/transports/sockjs",permalink:"/docs/transports/sockjs",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/transports/sockjs.md",tags:[],version:"current",frontMatter:{id:"sockjs",title:"SockJS"},sidebar:"Transports",previous:{title:"WebSocket",permalink:"/docs/transports/websocket"},next:{title:"WebSocket",permalink:"/docs/transports/uni_websocket"}},p=[{value:"SockJS caveats",id:"sockjs-caveats",children:[{value:"Sticky sessions",id:"sticky-sessions",children:[],level:3},{value:"Browser only",id:"browser-only",children:[],level:3},{value:"JSON only",id:"json-only",children:[],level:3}],level:2},{value:"Options",id:"options",children:[{value:"sockjs",id:"sockjs",children:[],level:3},{value:"sockjs_url",id:"sockjs_url",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"SockJS is a polyfill browser library which provides HTTP-based fallback transports in case when it's not possible to establish Websocket connection. This can happen in old client browsers or because of some proxy behind client and server that cuts of Websocket traffic. You can find more information on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/sockjs/sockjs-client"},"SockJS project Github page"),"."),(0,s.kt)("p",null,"If you have a requirement to work everywhere SockJS is the solution. SockJS will automatically choose best fallback transport if Websocket connection failed for some reason. Some of the fallback transports are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"EventSource (SSE)"),(0,s.kt)("li",{parentName:"ul"},"XHR-streaming"),(0,s.kt)("li",{parentName:"ul"},"Long-polling"),(0,s.kt)("li",{parentName:"ul"},"And more (see ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/sockjs/sockjs-client"},"SockJS docs"),")")),(0,s.kt)("p",null,"SockJS connection endpoint in Centrifugo is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/connection/sockjs\n")),(0,s.kt)("h2",{id:"sockjs-caveats"},"SockJS caveats"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"There are several important caveats to know when using SockJS \u2013 see below."))),(0,s.kt)("h3",{id:"sticky-sessions"},"Sticky sessions"),(0,s.kt)("p",null,"First is that you need to use sticky sessions mechanism if you have ",(0,s.kt)("strong",{parentName:"p"},"more than one")," Centrifugo nodes running behind a load balancer. This mechanism usually supported by load balancers (for example Nginx). Sticky sessions mean that all requests from the same client will come to the same Centrifugo node. This is necessary because SockJS maintains connection session in process memory thus allowing bidirectional communication between a client and a server. Sticky mechanism not required if you only use one Centrifugo node on a backend."),(0,s.kt)("p",null,"For example, with Nginx sticky support can be enabled with ",(0,s.kt)("inlineCode",{parentName:"p"},"ip_hash")," directive for upstream:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"upstream centrifugo {\n    ip_hash;\n    server 127.0.0.1:8000;\n    server 127.0.0.2:8000;\n}\n")),(0,s.kt)("p",null,"With this configuration Nginx will proxy connections with the same ip address to the same upstream backend."),(0,s.kt)("p",null,"But ",(0,s.kt)("inlineCode",{parentName:"p"},"ip_hash;")," is not the best choice in this case, because there could be situations\nwhere a lot of different connections are coming with the same IP address (behind proxies)\nand the load balancing system won't be fair."),(0,s.kt)("p",null,"So the best solution would be using something like ",(0,s.kt)("a",{parentName:"p",href:"https://bitbucket.org/nginx-goodies/nginx-sticky-module-ng/overview"},"nginx-sticky-module")," which uses setting a special cookie to track the upstream server for a client."),(0,s.kt)("h3",{id:"browser-only"},"Browser only"),(0,s.kt)("p",null,"SockJS is only supported by centrifuge-js \u2013 i.e. our browser client. There is no much sense to use SockJS outside of a browser these days."),(0,s.kt)("h3",{id:"json-only"},"JSON only"),(0,s.kt)("p",null,"One more thing to be aware of is that SockJS does not support binary data, so there is no option to use Centrifugo Protobuf protocol on top of SockJS (unlike WebSocket). Only JSON payloads can be transferred."),(0,s.kt)("h2",{id:"options"},"Options"),(0,s.kt)("h3",{id:"sockjs"},"sockjs"),(0,s.kt)("p",null,"Boolean, default: ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("p",null,"Enables SockJS transport."),(0,s.kt)("h3",{id:"sockjs_url"},"sockjs_url"),(0,s.kt)("p",null,"Default: ",(0,s.kt)("inlineCode",{parentName:"p"},"https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js")),(0,s.kt)("p",null,"Link to SockJS url which is required when iframe-based HTTP fallbacks are in use."))}d.isMDXComponent=!0}}]);