"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3581],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const i={id:"presence",title:"Online presence"},o=void 0,s={unversionedId:"server/presence",id:"server/presence",title:"Online presence",description:"The online presence feature of Centrifugo is a powerful tool that allows you to monitor and manage active users inside a specific channel. It provides an instantaneous snapshot of users currently subscribed to a specific channel. Additionally, Centrifugo may emit join and leave events when clients subscribe to channel and unsubscribe from it.",source:"@site/docs/server/presence.md",sourceDirName:"server",slug:"/server/presence",permalink:"/docs/server/presence",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/presence.md",tags:[],version:"current",frontMatter:{id:"presence",title:"Online presence"},sidebar:"Guides",previous:{title:"History and recovery",permalink:"/docs/server/history_and_recovery"},next:{title:"Proxy events to the backend",permalink:"/docs/server/proxy"}},l={},c=[{value:"Enabling online presence",id:"enabling-online-presence",level:2},{value:"Retrieving presence on the client side",id:"retrieving-presence-on-the-client-side",level:2},{value:"Join and leave events",id:"join-and-leave-events",level:2},{value:"Implementation notes",id:"implementation-notes",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The online presence feature of Centrifugo is a powerful tool that allows you to monitor and manage active users inside a specific channel. It provides an instantaneous snapshot of users currently subscribed to a specific channel. Additionally, Centrifugo may emit join and leave events when clients subscribe to channel and unsubscribe from it.  "),(0,a.kt)("h2",{id:"enabling-online-presence"},"Enabling online presence"),(0,a.kt)("p",null,"To enable online presence, you need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"presence")," option to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," for the specific channel namespace in your Centrifugo configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "namespaces": [{\n        "namespace": "public",\n        "presence": true\n    }]\n}\n')),(0,a.kt)("p",null,"After enabling this you can query presence information over server HTTP/GRPC presence call:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "X-API-Key: YOUR_API_KEY" \\\n  --request POST \\\n  --data \'{"channel": "public:test"}\' \\\n  http://localhost:8000/api/presence\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/server_api#presence"},"description of presence API"),"."),(0,a.kt)("p",null,"Also, a shorter version of presence which only contains two counters - number of clients and number of unique users in channel - may be called:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "X-API-Key: YOUR_API_KEY" \\\n  --request POST \\\n  --data \'{"channel": "public:test"}\' \\\n  http://localhost:8000/api/presence_stats\n')),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/server_api#presence_stats"},"description of presence stats API"),"."),(0,a.kt)("h2",{id:"retrieving-presence-on-the-client-side"},"Retrieving presence on the client side"),(0,a.kt)("p",null,"Once presence enabled, you can retrieve the presence information on the client side too by calling the presence method on the channel."),(0,a.kt)("p",null,"To do this you need to ",(0,a.kt)("a",{parentName:"p",href:"/docs/server/channel_permissions#presence-permission-model"},"give the client permission to call presence"),". Once done, presence may be retrieved from the subscription: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presence(channel);\n")),(0,a.kt)("p",null,"It's also available on the top-level of the client (for example, if you need to call presence for server-side subscription):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await client.presence(channel);\n")),(0,a.kt)("p",null,"If the permission check has passed successfully \u2013 both methods will return an object containing information about currently subscribed clients."),(0,a.kt)("p",null,"Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"presenceStats")," method is avalable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const resp = await subscription.presenceStats(channel);\n")),(0,a.kt)("h2",{id:"join-and-leave-events"},"Join and leave events"),(0,a.kt)("p",null,"It's also possible to enable real-time tracking of users joining or leaving a channel by listening to ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"leave")," events on the client side."),(0,a.kt)("p",null,"By default, Centrifugo does not send these events and they must be explicitly turned on for channel namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "namespaces": [{\n        "namespace": "public",\n        "presence": true,\n        "join_leave": true,\n        "force_push_join_leave": true\n    }]\n}\n')),(0,a.kt)("p",null,"Then on the client side:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"subscription.on('join', function(joinCtx) {\n    console.log('client joined:', joinCtx);\n});\n\nsubscription.on('leave', function(leaveCtx) {\n    console.log('client left:', leaveCtx);\n});\n")),(0,a.kt)("p",null,"And the same on ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," top-level for the needs of server-side subscriptions (analogous to the presence call described above)."),(0,a.kt)("p",null,"These events provide real-time updates and can be used to keep track of user activity and manage live interactions."),(0,a.kt)("p",null,"You can combine join/leave events with presence information and maintain a list of currently active subscribers - for example show the list of online players in the game room updated in real-time."),(0,a.kt)("h2",{id:"implementation-notes"},"Implementation notes"),(0,a.kt)("p",null,"The online presence feature might increase the load on your Centrifugo server, since Centrifugo need to maintain an addition data structure. Therefore, it is recommended to use this feature judiciously based on your server's capability and the necessity of real-time presence data in your application."),(0,a.kt)("p",null,"Always make sure to secure the presence data, as it could expose sensitive information about user activity in your application. Ensure appropriate security measures are in place."),(0,a.kt)("p",null,"Join and leave events delivered with at most once guarantee."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/design#online-presence-considerations"},"more about presence design")," in design overview chapter."),(0,a.kt)("p",null,"Also ",(0,a.kt)("a",{parentName:"p",href:"/docs/faq/#how-scalable-is-the-online-presence-and-joinleave-features"},"check out FAQ")," which mentions scalability concerns for presence data and join/leave events."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The online presence feature of Centrifugo is a highly useful tool for real-time applications. It provides instant and live data about user activity, which can be critical for interactive features in chats, collaborative tools, multiplayer games, or live tracking systems. Make sure to configure and use this feature appropriately to get the most out of your real-time application."))}u.isMDXComponent=!0}}]);