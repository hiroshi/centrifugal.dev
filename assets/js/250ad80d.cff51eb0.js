"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38924:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={id:"user_block",title:"User blocking API"},i=void 0,l={unversionedId:"pro/user_block",id:"version-3/pro/user_block",title:"User blocking API",description:"In addition to detailed observability properties Centrifugo PRO provides instruments for performing protective actions. One of such instruments is user blocking API which allows blocking a specific user in Centrifugo.",source:"@site/versioned_docs/version-3/pro/user_block.md",sourceDirName:"pro",slug:"/pro/user_block",permalink:"/docs/3/pro/user_block",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/user_block.md",tags:[],version:"3",frontMatter:{id:"user_block",title:"User blocking API"},sidebar:"Pro",previous:{title:"User connections API",permalink:"/docs/3/pro/user_connections"},next:{title:"Token revocation API",permalink:"/docs/3/pro/token_revocation"}},s={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Configure",id:"configure",level:2},{value:"Redis persistence engine",id:"redis-persistence-engine",level:3},{value:"Database persistence engine",id:"database-persistence-engine",level:3},{value:"Block user API",id:"block-user-api",level:2},{value:"Block user params",id:"block-user-params",level:4},{value:"Block user result",id:"block-user-result",level:4},{value:"Unblock user API",id:"unblock-user-api",level:2},{value:"Unblock user params",id:"unblock-user-params",level:4},{value:"Unblock user result",id:"unblock-user-result",level:4}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In addition to detailed observability properties Centrifugo PRO provides instruments for performing protective actions. One of such instruments is user blocking API which allows blocking a specific user in Centrifugo."),(0,a.kt)("p",null,"When user is blocked it will be disconnected from Centrifugo immediately and also on the next connect attempt right after JWT decoded (so that Centrifugo got a user ID) or after result from connect proxy received. In case of using connect proxy you can actually disconnect user yourself by implementing blocking check on the application backend side \u2013 but possibility to block user in Centrifugo can still be helpful."),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"By default, information about user block/unblock requests shared throughout Centrifugo cluster and kept in memory. So user will be blocked until Centrifugo restart."),(0,a.kt)("p",null,"But it's possible to enable blocking information persistence by configuring a persistence storage \u2013 in this case information will survive Centrifugo restarts."),(0,a.kt)("p",null,"Centrifugo also automatically expires entries in the storage to keep working set of blocked users reasonably small. Keeping pool of blocked users small allows avoiding expensive database lookups on every check \u2013 information is loaded periodically from the storage and all checks performed over in-memory data structure \u2013 thus user blocking checks are cheap and have a small impact on the overall system performance."),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"User block feature is enabled by default in Centrifugo PRO (blocking information will be stored in process memory). To keep blocking information persistently you need to configure persistence engine."),(0,a.kt)("p",null,"There are two types of persistent engines supported at the moment:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"redis")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"database"))),(0,a.kt)("h3",{id:"redis-persistence-engine"},"Redis persistence engine"),(0,a.kt)("p",null,"Blocking data can be kept in Redis. To enable this configuration should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "user_block": {\n        "persistence_engine": "redis",\n        "redis_address": "localhost:6379"\n    }\n}\n')),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Unlike many other Redis features in Centrifugo consistent sharding is not supported for blocking data. The reason is that we don't want to loose blocking information when additional Redis node added. So only one Redis shard can be provided for ",(0,a.kt)("inlineCode",{parentName:"p"},"user_block")," feature. This should be fine given that working set of blocked users should be reasonably small and old entries expire. If you try to set several Redis shards here Centrifugo will exit with an error on start.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"One more thing you may notice is that Redis configuration here does not have ",(0,a.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option. The reason is that since Redis is not shardable here reusing Redis configuration here could cause problems at the moment of Redis scaling \u2013 which we want to avoid thus require explicit configuration here.")),(0,a.kt)("h3",{id:"database-persistence-engine"},"Database persistence engine"),(0,a.kt)("p",null,"Blocking data can be kept in the relational database. Only PostgreSQL is supported."),(0,a.kt)("p",null,"To enable this configuration should be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    ...\n    "database": {\n        "dsn": "postgresql://postgres:pass@127.0.0.1:5432/postgres"\n    },\n    "user_block": {\n        "persistence_engine": "database"\n    }\n}\n')),(0,a.kt)("h2",{id:"block-user-api"},"Block user API"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "block_user", "params": {"user": "2695", "expire_at": 1635845122}}\' \\\n  http://localhost:8000/api\n')),(0,a.kt)("h4",{id:"block-user-params"},"Block user params"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"User ID to block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"expire_at"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"Unix time in the future when user blocking information should expire (Unix seconds). While optional ",(0,a.kt)("strong",{parentName:"td"},"we recommend to use a reasonably small expiration time")," to keep working set of blocked users small (since Centrifugo nodes periodically load all entries from the storage to construct in-memory cache).")))),(0,a.kt)("h4",{id:"block-user-result"},"Block user result"),(0,a.kt)("p",null,"Empty object at the moment."),(0,a.kt)("h2",{id:"unblock-user-api"},"Unblock user API"),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "unblock_user", "params": {"user": "2695"}}\' \\\n  http://localhost:8000/api\n')),(0,a.kt)("h4",{id:"unblock-user-params"},"Unblock user params"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"user"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"User ID to unblock")))),(0,a.kt)("h4",{id:"unblock-user-result"},"Unblock user result"),(0,a.kt)("p",null,"Empty object at the moment."))}p.isMDXComponent=!0}}]);