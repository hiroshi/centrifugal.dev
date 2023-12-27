"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7670],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),o=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=o(a),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,l=new Array(s);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33259:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const s={id:"user_status",title:"User status"},l=void 0,i={unversionedId:"pro/user_status",id:"version-3/pro/user_status",title:"User status",description:"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality.",source:"@site/versioned_docs/version-3/pro/user_status.md",sourceDirName:"pro",slug:"/pro/user_status",permalink:"/docs/3/pro/user_status",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-3/pro/user_status.md",tags:[],version:"3",frontMatter:{id:"user_status",title:"User status"},sidebar:"Pro",previous:{title:"Analytics with ClickHouse",permalink:"/docs/3/pro/analytics"},next:{title:"Operation throttling",permalink:"/docs/3/pro/throttling"}},u={},o=[{value:"Client-side status update RPC",id:"client-side-status-update-rpc",level:3},{value:"update_user_status server API",id:"update_user_status-server-api",level:3},{value:"Update user status params",id:"update-user-status-params",level:4},{value:"Update user status result",id:"update-user-status-result",level:4},{value:"get_user_status server API",id:"get_user_status-server-api",level:3},{value:"Get user status params",id:"get-user-status-params",level:4},{value:"Get user status result",id:"get-user-status-result",level:4},{value:"UserStatus",id:"userstatus",level:4},{value:"delete_user_status server API",id:"delete_user_status-server-api",level:3},{value:"Delete user status params",id:"delete-user-status-params",level:4},{value:"Delete user status result",id:"delete-user-status-result",level:4},{value:"Configuration",id:"configuration",level:3}],p={toc:o};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo OSS provides a presence feature for channels. It works well (for channels with reasonably small number of active subscribers though), but sometimes you may need a bit different functionality."),(0,r.kt)("p",null,"What if you want to get a specific user status based on its recent activity in application? You can create a personal channel with a presence enabled for each user. It will show that user has an active connection with a server. But this won't show whether user did some actions in an application recently or just left it open while not actually using it."),(0,r.kt)("p",null,"User status feature of Centrifugo PRO allows calling a special RPC method from a client side when a user makes a useful action in an application (clicks on buttons, uses a mouse \u2013 whatever means that user really uses application at the moment). This call sets a time of last user activity in Redis, and this information can then be queried over Centrifugo PRO server API."),(0,r.kt)("p",null,"The feature can be useful for chat applications when you need to get online/activity status for a list of buddies (Centrifugo supports batch requests to user status information \u2013 i.e. ask for many users in one call)."),(0,r.kt)("h3",{id:"client-side-status-update-rpc"},"Client-side status update RPC"),(0,r.kt)("p",null,"Centrifugo PRO provides a built-in RPC method of client API called ",(0,r.kt)("inlineCode",{parentName:"p"},"update_user_status"),". Call it with empty parameters from a client side whenever user performs a useful action that proves it's active status in your app. For example, in Javascript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await centrifuge.namedRPC('update_user_status', {});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to debounce this method calls on a client side to avoid exposing RPC on every mouse move event for example.")),(0,r.kt)("p",null,"This RPC call sets user's last active time value in Redis (with sharding and Cluster support). Information about active status will be kept in Redis for a configured time interval, then expire."),(0,r.kt)("h3",{id:"update_user_status-server-api"},"update_user_status server API"),(0,r.kt)("p",null,"It's also possible to call ",(0,r.kt)("inlineCode",{parentName:"p"},"update_user_status")," using Centrifugo server API (for example if you want to force status during application development or you want to proxy status updates over your app backend when using unidirectional transports):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "update_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,r.kt)("h4",{id:"update-user-status-params"},"Update user status params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"List of users to update status for")))),(0,r.kt)("h4",{id:"update-user-status-result"},"Update user status result"),(0,r.kt)("p",null,"Empty object at the moment."),(0,r.kt)("h3",{id:"get_user_status-server-api"},"get_user_status server API"),(0,r.kt)("p",null,"Now on a backend side you have access to a bulk API to effectively get status of particular users."),(0,r.kt)("p",null,"Call RPC method of server API (over HTTP or GRPC):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "get_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,r.kt)("p",null,"You should get a response like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42",\n                "active":1627107289,\n                "online":1627107289\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"In case information about last status update time not available the response will be like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result":{\n        "statuses":[\n            {\n                "user":"42"\n            }\n        ]\n    }\n}\n')),(0,r.kt)("p",null,"I.e. status object will present in a response but ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," field won't be set for status object."),(0,r.kt)("p",null,"Note that Centrifugo also maintains ",(0,r.kt)("inlineCode",{parentName:"p"},"online")," field inside user status object. This field updated periodically by Centrifugo itself while user has active connection with a server. So you can draw ",(0,r.kt)("inlineCode",{parentName:"p"},"away")," statuses in your application: i.e. when user connected (",(0,r.kt)("inlineCode",{parentName:"p"},"online")," time) but not using application for a long time (",(0,r.kt)("inlineCode",{parentName:"p"},"active")," time)."),(0,r.kt)("h4",{id:"get-user-status-params"},"Get user status params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"List of users to get status for")))),(0,r.kt)("h4",{id:"get-user-status-result"},"Get user status result"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"array of UserStatus"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"Statuses for each user in params (same order)")))),(0,r.kt)("h4",{id:"userstatus"},"UserStatus"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field name"),(0,r.kt)("th",{parentName:"tr",align:null},"Field type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"User ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Last active time (Unix seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"online"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Last online time (Unix seconds)")))),(0,r.kt)("h3",{id:"delete_user_status-server-api"},"delete_user_status server API"),(0,r.kt)("p",null,"If you need to clear user status information for some reason there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"delete_user_status")," server API call:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" \\\n  --header "Authorization: apikey <API_KEY>" \\\n  --request POST \\\n  --data \'{"method": "delete_user_status", "params": {"users": ["42"]}}\' \\\n  http://localhost:8000/api\n')),(0,r.kt)("h4",{id:"delete-user-status-params"},"Delete user status params"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"users"),(0,r.kt)("td",{parentName:"tr",align:null},"array of strings"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"List of users to delete status for")))),(0,r.kt)("h4",{id:"delete-user-status-result"},"Delete user status result"),(0,r.kt)("p",null,"Empty object at the moment."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To enable Redis active status feature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_active_status": {\n        "enabled": true,\n        "redis_address": "127.0.0.1:6379"\n    }\n}\n')),(0,r.kt)("p",null,"Redis configuration for user status feature matches Centrifugo Redis engine configuration. So Centrifugo supports client-side consistent sharding to scale Redis, Redis Sentinel, Redis Cluster for user status feature too."),(0,r.kt)("p",null,"It's also possible to reuse Centrifugo Redis engine by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"use_redis_from_engine")," option instead of custom throttling Redis address declaration, like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "engine": "redis",\n    "redis_address": "localhost:6379",\n    "redis_active_status": {\n        "enabled": true,\n        "use_redis_from_engine": true,\n    }\n}\n')),(0,r.kt)("p",null,"In this case Redis active status will simply connect to Redis instances configured for Centrifugo Redis engine."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expire_interval")," is a ",(0,r.kt)("a",{parentName:"p",href:"/docs/3/server/configuration#setting-time-duration-options"},"duration")," for how long Redis keys will be kept for each user. Expiration time extended on every update. By default expiration time is 31 day. To set it to 1 day:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "redis_active_status": {\n        ...\n        "expire_interval": "24h"\n    }\n}\n')))}d.isMDXComponent=!0}}]);