"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[3734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88485:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"recovery",sidebar_label:"Missed messages recovery",title:"Missed messages recovery"},s=void 0,i={unversionedId:"tutorial/recovery",id:"tutorial/recovery",title:"Missed messages recovery",description:"At this point, we already have a real-time application with the instant delivery of events to interested messenger users. Now, let's focus on ensuring reliable message delivery. The first step would be enabling Centrifugo's automatic message recovery for personal channels.",source:"@site/docs/tutorial/recovery.md",sourceDirName:"tutorial",slug:"/tutorial/recovery",permalink:"/docs/tutorial/recovery",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/tutorial/recovery.md",tags:[],version:"current",frontMatter:{id:"recovery",sidebar_label:"Missed messages recovery",title:"Missed messages recovery"},sidebar:"Tutorial",previous:{title:"Integrating Centrifugo",permalink:"/docs/tutorial/centrifugo"},next:{title:"Broadcast: outbox and CDC",permalink:"/docs/tutorial/outbox_cdc"}},l={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"At this point, we already have a real-time application with the instant delivery of events to interested messenger users. Now, let's focus on ensuring reliable message delivery. The first step would be enabling Centrifugo's automatic message recovery for personal channels."),(0,o.kt)("p",null,"Enabling this feature allows connections to automatically recover missed messages due to brief network disconnections, such as when moving through areas with limited mobile internet coverage, and it aids in recovering messages after disconnections caused by a Centrifugo node restart (in the case of using the Redis Engine)."),(0,o.kt)("p",null,"The most crucial aspect of auto recovery is its ability to handle mass reconnect scenarios. This situation might occur when a load balancer at the infrastructure level is reloaded, causing all connections to your app to be dropped and attempting to re-establish. In cases like our messenger app, clients want to load the latest state, leading to numerous requests to your main database (more connections result in a larger burst of requests in a short time). Centrifugo efficiently recovers from the history cache, helping your backend manage such scenarios. This is particularly valuable if the backend is written in Django, allowing for many WebSocket connections with a still reasonable number of Django app processes."),(0,o.kt)("p",null,"To implement this, we need to extend the Centrifugo ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," namespace configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "namespaces": [{\n        "name": "personal",\n        "history_size": 300,\n        "history_ttl": "600s",\n        "force_recovery": true\n    }]\n}\n')),(0,o.kt)("p",null,"We set ",(0,o.kt)("inlineCode",{parentName:"p"},"history_size")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"history_ttl")," to some reasonable values, also enebled auto recovery for channels in ",(0,o.kt)("inlineCode",{parentName:"p"},"personal")," namespace. This configuration is enough for recovery to start working in our app - without any changes on the frontend side."),(0,o.kt)("p",null,"Now if client temporary looses internet connection and then comes back online \u2013 Centrifugo will redeliver client all the publications from last seen publication offset. It's also possible to set initial offset (if known) when creating subscription object. The feature is described in detail in ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/history_and_recovery"},"History and recovery")," chapter."),(0,o.kt)("p",null,"If client was offline for a long time or there were mode than 300 publications while client was offline Centrifugo understands that it can't recover client's state. In this case Centrifugo sets a special flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribed")," state event context. We can handle it and suggest client to reload the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"sub.on('subscribed', (ctx: SubscribedContext) => {\n  if (ctx.wasRecovering && !ctx.recovered) {\n    setUnrecoverableError('State LOST - please reload the page')\n  }\n})\n")),(0,o.kt)("p",null,"So the idea here that in most case Centrifug message history cache will help clients catch up, in some cases though clients still need to load state from scratch from the main database. So that we effectively solve mass reconnect problem."),(0,o.kt)("p",null,"Also note, that message history cache in Centrifugo Memory Engine used in the example does not survive Centrifugo node restarts \u2013 so clients will get ",(0,o.kt)("inlineCode",{parentName:"p"},'"recovered": false')," upon reconnecting after Centrifugo restart. This is where Redis Engine has an advantage \u2013 it allows message hostory to survive Centrifugo node restarts."),(0,o.kt)("p",null,"In the next chapter we will discuss one more aspect of reliable message delivery - on the way between backend and Centrifugo."))}p.isMDXComponent=!0}}]);