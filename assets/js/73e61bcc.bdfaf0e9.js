"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9925],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?a.createElement(h,r(r({ref:n},u),{},{components:t})):a.createElement(h,r({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},25584:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const i={id:"server_subs",title:"Server-side subscriptions"},r=void 0,s={unversionedId:"server/server_subs",id:"server/server_subs",title:"Server-side subscriptions",description:"Centrifugo clients can initiate a subscription to a channel by calling the subscribe method of client API. In most cases, client-side subscriptions is a more flexible and recommended approach since a frontend usually knows which channels it needs to consume at a concrete moment.",source:"@site/docs/server/server_subs.md",sourceDirName:"server",slug:"/server/server_subs",permalink:"/docs/server/server_subs",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/server_subs.md",tags:[],version:"current",frontMatter:{id:"server_subs",title:"Server-side subscriptions"},sidebar:"Guides",previous:{title:"Channel JWT authorization",permalink:"/docs/server/channel_token_auth"},next:{title:"Engines and scalability",permalink:"/docs/server/engines"}},l={},c=[{value:"Dynamic server-side subscriptions",id:"dynamic-server-side-subscriptions",level:3},{value:"Automatic personal channel subscription",id:"automatic-personal-channel-subscription",level:3},{value:"Maintain single user connection",id:"maintain-single-user-connection",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo clients can initiate a subscription to a channel by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," method of client API. In most cases, client-side subscriptions is a more flexible and recommended approach since a frontend usually knows which channels it needs to consume at a concrete moment."),(0,o.kt)("p",null,"But in some situations, all you need is to subscribe your connections to several channels on a server-side at the moment of connection establishment. So client effectively starts receiving publications from those channels without calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," API at all."),(0,o.kt)("p",null,"You can set a list of channels for a connection in two ways at the moment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"over connection JWT using ",(0,o.kt)("inlineCode",{parentName:"li"},"channels")," claim, which is an array of strings"),(0,o.kt)("li",{parentName:"ul"},"over connect proxy returning ",(0,o.kt)("inlineCode",{parentName:"li"},"channels")," field in result (also an array of strings)"),(0,o.kt)("li",{parentName:"ul"},"dynamically over server subscribe API")),(0,o.kt)("p",null,"On the client-side, you need to listen for publications from server-side channels using a top-level client event handler. For example with ",(0,o.kt)("inlineCode",{parentName:"p"},"centrifuge-js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const centrifuge = new Centrifuge(address);\n\ncentrifuge.on('publication', function(ctx) {\n    const channel = ctx.channel;\n    const payload = JSON.stringify(ctx.data);\n    console.log('Publication from server-side channel', channel, payload);\n});\n\ncentrifuge.connect();\n")),(0,o.kt)("p",null,"I.e. listen for publications without any usage of subscription objects. You can look at channel publication relates to using field in callback context as shown in the example."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The same ",(0,o.kt)("a",{parentName:"p",href:"/docs/faq/#what-about-best-practices-with-amount-of-channels"},"best practices")," of working with channels and client-side subscriptions equally applicable to server-side subscription. ")),(0,o.kt)("h3",{id:"dynamic-server-side-subscriptions"},"Dynamic server-side subscriptions"),(0,o.kt)("p",null,"See subscribe and unsubscribe ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_api"},"server API")),(0,o.kt)("h3",{id:"automatic-personal-channel-subscription"},"Automatic personal channel subscription"),(0,o.kt)("p",null,"It's possible to automatically subscribe a user to a personal server-side channel."),(0,o.kt)("p",null,"To enable this you need to enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"user_subscribe_to_personal")," boolean option (by default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"). As soon as you do this every connection with a non-empty user ID will be automatically subscribed to a personal user-limited channel. Anonymous users with empty user IDs won't be subscribed to any channel."),(0,o.kt)("p",null,"For example, if you set this option and the user with ID ",(0,o.kt)("inlineCode",{parentName:"p"},"87334")," connects to Centrifugo it will be automatically subscribed to channel ",(0,o.kt)("inlineCode",{parentName:"p"},"#87334")," and you can process personal publications on the client-side in the same way as shown above."),(0,o.kt)("p",null,"As you can see by default generated personal channel name belongs to the default namespace (i.e. no explicit namespace used). To set custom namespace name use ",(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_channel_namespace")," option (string, default ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),") \u2013 i.e. the name of namespace from configured configuration namespaces array. In this case, if you set ",(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_channel_namespace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," for example \u2013 then the automatically generated personal channel will be ",(0,o.kt)("inlineCode",{parentName:"p"},"personal:#87334")," \u2013 user will be automatically subscribed to it on connect and you can use this channel name to publish personal notifications to the online user."),(0,o.kt)("h3",{id:"maintain-single-user-connection"},"Maintain single user connection"),(0,o.kt)("p",null,"Usage of personal channel subscription also opens a road to enable one more feature: maintaining only a single connection for each user globally around all Centrifugo nodes."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"user_personal_single_connection")," boolean option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),") turns on a mode in which Centrifugo will try to maintain only a single connection for each user at the same moment. As soon as the user establishes a connection other connections from the same user will be closed with connection limit reason (client won't try to automatically reconnect)."),(0,o.kt)("p",null,"This feature works with a help of presence information inside a personal channel. So ",(0,o.kt)("strong",{parentName:"p"},"presence should be turned on in a personal channel"),"."),(0,o.kt)("p",null,"Example config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n  "user_subscribe_to_personal": true,\n  "user_personal_single_connection": true,\n  "user_personal_channel_namespace": "personal",\n  "namespaces": [\n    {\n      "name": "personal",\n      "presence": true\n    }\n  ]\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Centrifugo can't guarantee that other user connections will be closed \u2013 since Disconnect messages are distributed around Centrifugo nodes with at most once guarantee. So don't add critical business logic based on this feature to your application. Though this should work just fine most of the time if the connection between the Centrifugo node and PUB/SUB broker is OK.")))}p.isMDXComponent=!0}}]);