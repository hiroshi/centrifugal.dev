"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5484],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47386:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"overview",title:"Centrifugo PRO"},a=void 0,s={unversionedId:"pro/overview",id:"pro/overview",title:"Centrifugo PRO",description:"Centrifugo PRO is the enhanced version of Centrifugo provided by Centrifugal Labs LTD under commercial license. It's packed with a set of unique features that offer exceptional benefits to your business. It provides granular channel permission control, lower CPU utilization on Centrifugo nodes, backend protection from misusing, next level system observability, additional APIs (like push notifications), and more.",source:"@site/docs/pro/overview.md",sourceDirName:"pro",slug:"/pro/overview",permalink:"/docs/pro/overview",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/pro/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Centrifugo PRO"},sidebar:"Pro",next:{title:"Install and run PRO version",permalink:"/docs/pro/install_and_run"}},l={},c=[{value:"Features",id:"features",level:2},{value:"Pricing",id:"pricing",level:2},{value:"Try for free in sandbox mode",id:"try-for-free-in-sandbox-mode",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/pro_icon.png",width:"110px",height:"110px",align:"left",style:{marginRight:"10px",float:"left"}}),(0,o.kt)("p",null,"Centrifugo PRO is the enhanced version of Centrifugo provided by Centrifugal Labs LTD under commercial license. It's packed with a set of unique features that offer exceptional benefits to your business. It provides granular channel permission control, lower CPU utilization on Centrifugo nodes, backend protection from misusing, next level system observability, additional APIs (like push notifications), and more."),(0,o.kt)("p",null,"All the features of Centrifugo PRO come with a decent scalable performance. Some reuse Centrifugo super fast Redis communication capabilities. ClickHouse analytics built on top of efficient approach with the minimal overhead. We've put a lot of love into all of the extra powers of Centrifugo to make sure they are practical and ready for production workloads."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"Centrifugo PRO is packed with the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Everything from Centrifugo OSS"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd0d ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/tracing"},"Channel and user tracing")," allows watching client protocol frames in channel or per user ID in real time."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcb9 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/analytics"},"Real-time analytics with ClickHouse")," for a great system observability, reporting and trending."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udee1\ufe0f ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/rate_limiting"},"Operation rate limits")," to protect server from the real-time API misusing and frontend bugs."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd25 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/push_notifications"},"Push notification API")," to manage device tokens and send mobile and browser push notifications."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udfe2 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/user_status"},"User status API")," feature allows understanding activity state for a list of users."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd0c ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/connections"},"Connections API")," to query, filter and inspect active connections."),(0,o.kt)("li",{parentName:"ul"},"\u270b ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/user_block"},"User blocking API")," to block/unblock abusive users by ID."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\uded1 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/token_revocation"},"JWT revoking and invalidation API")," to revoke tokens by ID and invalidate user's tokens based on issue time."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd14 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/channel_state_events"},"Channel state events")," to be notified on the backend about channel ",(0,o.kt)("inlineCode",{parentName:"li"},"occupied")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"vacated")," events."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcaa ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/capabilities"},"Channel capabilities")," for controlling channel permissions per connection or per subscription."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udcdc ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/channel_patterns"},"Channel patterns")," allow defining channel configuration like HTTP routes with parameters."),(0,o.kt)("li",{parentName:"ul"},"\u270d\ufe0f ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cel_expressions"},"CEL expressions")," to write custom efficient permission rules for channel operations."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\ude80 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/performance"},"Faster performance")," to reduce resource usage on server side."),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd2e ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/singleflight"},"Singleflight")," for online presence and history to reduce load on the broker."),(0,o.kt)("li",{parentName:"ul"},"\ud83c\udf54 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/client_message_batching"},"Message batching control")," for advanced tuning of client connection write behaviour."),(0,o.kt)("li",{parentName:"ul"},"\ud83e\uddd0 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/observability_enhancements"},"Observability enhancements")," for additional more granular system state insights."),(0,o.kt)("li",{parentName:"ul"},"\ud83e\udeb5 ",(0,o.kt)("a",{parentName:"li",href:"/docs/pro/process_stats"},"CPU and RSS memory")," usage stats of Centrifugo nodes in admin UI.")),(0,o.kt)("p",null,"Also, explore our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/centrifugal/projects/3/views/1"},"Centrifugo PRO planned features")," board for a concise overview of upcoming features which are currently in progress and enhancements planned for a future."),(0,o.kt)("h2",{id:"pricing"},"Pricing"),(0,o.kt)("p",null,"Centrifugo PRO requires a license key to run. The pricing information for the license key is available upon request over ",(0,o.kt)("inlineCode",{parentName:"p"},"sales@centrifugal.dev")," e-mail. Our services are exclusively available to corporate and business clients at this time. We would be happy to learn more about your real-time challenges and how Centrifugo can help you address them. Don't hesitate to ask for an online meeting to discuss the use case in-person."),(0,o.kt)("h2",{id:"try-for-free-in-sandbox-mode"},"Try for free in sandbox mode"),(0,o.kt)("p",null,"You can try out Centrifugo PRO for free. When you start Centrifugo PRO without license key then it's running in a sandbox mode. Sandbox mode limits the usage of Centrifigo PRO in several ways. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Centrifugo handles up to 20 concurrent connections"),(0,o.kt)("li",{parentName:"ul"},"up to 2 server nodes supported"),(0,o.kt)("li",{parentName:"ul"},"up to 5 API requests per second allowed")),(0,o.kt)("p",null,"This mode should be enough for development and trying out PRO features, but must not be used in production environment as we can introduce additional limitations in the future."),(0,o.kt)("admonition",{title:"Centrifugo PRO license agreement",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Centrifugo PRO is distributed by Centrifugal Labs LTD under ",(0,o.kt)("a",{parentName:"p",href:"/license"},"commercial license")," which is different from OSS version. By downloading Centrifugo PRO you automatically accept commercial license terms.")))}p.isMDXComponent=!0}}]);