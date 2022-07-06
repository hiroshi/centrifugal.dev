"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[7115],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6409:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return v}});var i=n(3117),o=n(102),a=n(7294),r=n(3905),s=n(7872),l=n(4415),c=n(1073),u=function(e){function t(){var t;return(t=e.call(this)||this).onChange=t.onChange.bind((0,l.Z)(t)),t.onClick=t.onClick.bind((0,l.Z)(t)),t.state={config:null,output:"Here will be configuration for v4",logs:"Here will be log of changes made in your config"},t}(0,c.Z)(t,e);var n=t.prototype;return n.onClick=function(e){if(this.state.config){var t;try{t=JSON.parse(this.state.config)}catch(h){return void alert("Invalid JSON")}var n=[],i=[],o=function(e){var t="config top-level";return void 0!==e&&(t="namespace {"+e.name+"}"),t},a=function(e,a,r){i.push("`"+e+"` renamed to `"+a+"`");var s=o(r);void 0===r&&(r=t),void 0===r[a]&&void 0!==r[e]&&(r[a]=r[e],delete r[e],n.push("renamed "+e+" to "+a+" in "+s))},r=function(e,a){i.push("`"+e+"` removed");var r=o(a);void 0===a&&(a=t),void 0!==a[e]&&(delete a[e],n.push("removed "+e+" from "+r))},l=function(e,a,r){i.push("`"+e+"` is now required");var s=o(r);void 0===r&&(r=t),void 0===r[e]&&(r[e]=a,n.push("added "+e+" to "+s))};r("use_unlimited_history_by_default"),a("client_anonymous","allow_anonymous_connect_without_token");var c=t;if(l("allow_user_limited_channels",!0),!0===c.protected?r("protected"):(l("allow_subscribe_for_client",!0),a("anonymous","allow_subscribe_for_anonymous")),!0===c.publish&&(a("publish","allow_publish_for_client"),l("allow_publish_for_anonymous",!0)),!0===c.presence&&(!0===c.presence_disabled_for_client?r("presence_disabled_for_client"):(l("allow_presence_for_subscriber",!0),l("allow_presence_for_anonymous",!0))),void 0!==c.history_ttl&&void 0!==c.history_size&&(!0===c.history_disabled_for_client?r("history_disabled_for_client"):(l("allow_history_for_subscriber",!0),l("allow_history_for_anonymous",!0))),!0===c.position?a("position","force_positioning"):r("position"),!0===c.recover?a("recover","force_recovery"):r("recover"),!0===c.join_leave&&l("force_push_join_leave",!0),void 0!==t.namespaces){for(var u,p=[],d=(0,s.Z)(t.namespaces);!(u=d()).done;){var m=u.value;l("allow_user_limited_channels",!0,m),!0===m.protected?r("protected",m):(l("allow_subscribe_for_client",!0,m),a("anonymous","allow_subscribe_for_anonymous",m)),!0===m.publish&&(a("publish","allow_publish_for_client",m),l("allow_publish_for_anonymous",!0,m)),!0===m.presence&&(!0===m.presence_disabled_for_client?r("presence_disabled_for_client",m):(l("allow_presence_for_subscriber",!0,m),l("allow_presence_for_anonymous",!0,m))),void 0!==m.history_ttl&&void 0!==m.history_size&&(!0===m.history_disabled_for_client?r("history_disabled_for_client",m):(l("allow_history_for_subscriber",!0,m),l("allow_history_for_anonymous",!0,m))),!0===m.position?a("position","force_positioning",m):r("position",m),!0===m.recover?a("recover","force_recovery",m):r("recover",m),!0===m.join_leave&&l("force_push_join_leave",!0),p.push(m)}t.namespaces=p}this.setState({output:JSON.stringify(t,null,"\t")}),this.setState({logs:JSON.stringify(n,null,"\t")}),console.log(i.join("\n\n"))}else alert("Provide a configuration")},n.onChange=function(e){this.setState({config:e.target.value})},n.render=function(){return a.createElement("div",null,a.createElement("textarea",{onChange:this.onChange,placeholder:"Paste your Centrifugo v3 JSON config here...",style:{width:"100%",height:"300px",border:"2px solid #ccc"}}),a.createElement("button",{onClick:this.onClick},"Convert"),a.createElement("pre",{style:{marginTop:"10px"}},this.state.output),a.createElement("pre",{style:{marginTop:"10px"}},this.state.logs))},t}(a.Component),p=["components"],d={id:"migration_v4",title:"Migrating to v4"},m=void 0,h={unversionedId:"getting-started/migration_v4",id:"getting-started/migration_v4",title:"Migrating to v4",description:"Centrifugo v4 development was concentrated around two main things:",source:"@site/docs/getting-started/migration-v4.md",sourceDirName:"getting-started",slug:"/getting-started/migration_v4",permalink:"/docs/next/getting-started/migration_v4",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/getting-started/migration-v4.md",tags:[],version:"current",frontMatter:{id:"migration_v4",title:"Migrating to v4"},sidebar:"Introduction",previous:{title:"Design overview",permalink:"/docs/next/getting-started/design"}},g={},v=[{value:"Client SDK migration",id:"client-sdk-migration",level:2},{value:"Unidirectional transport migration",id:"unidirectional-transport-migration",level:2},{value:"SockJS migration",id:"sockjs-migration",level:2},{value:"Channel ASCII enforced",id:"channel-ascii-enforced",level:2},{value:"Subscription token migration",id:"subscription-token-migration",level:2},{value:"User-limited channel migration",id:"user-limited-channel-migration",level:2},{value:"Namespace configuration migration",id:"namespace-configuration-migration",level:2},{value:"Proxy disconnect code changes",id:"proxy-disconnect-code-changes",level:2},{value:"Other configuration option changes",id:"other-configuration-option-changes",level:2},{value:"Server API changes",id:"server-api-changes",level:2}],f={toc:v};function k(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo v4 development was concentrated around two main things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"adopt a new generation of client protocol"),(0,r.kt)("li",{parentName:"ul"},"make namespaces secure by default")),(0,r.kt)("p",null,"These goals dictate most of backwards compatibility changes in v4."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"What we would like to emphasize is that even there are many backwards incompatible changes it should be possible to migrate to Centrifugo v4 server without changing your client-side code at all. And then gradually upgrade the client-side. Below we are giving all the tips to achieve this."))),(0,r.kt)("h2",{id:"client-sdk-migration"},"Client SDK migration"),(0,r.kt)("p",null,"New generation of client protocol requires using the latest versions of client SDKs. During the next several days we will release the following SDK versions which are compatible with Centrifugo v4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"centrifuge-js >= v3.0.0"),(0,r.kt)("li",{parentName:"ul"},"centrifuge-go >= v0.9.0"),(0,r.kt)("li",{parentName:"ul"},"centrifuge-dart >= v0.9.0"),(0,r.kt)("li",{parentName:"ul"},"centrifuge-swift >= v0.5.0"),(0,r.kt)("li",{parentName:"ul"},"centrifuge-java >= v0.2.0")),(0,r.kt)("p",null,"New client SDKs ",(0,r.kt)("strong",{parentName:"p"},"support only new client protocol")," \u2013 you can not connect to Centrifugo v3 with them."),(0,r.kt)("p",null,"If you have a production system where you want to upgrade Centrifugo from v3 to v4 then the plan is:"),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using private channels (starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"$"),") or user-limited channels (containing ",(0,r.kt)("inlineCode",{parentName:"p"},"#"),") then carefully read about subscription token migration and user-limited channels migration below."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Upgrade Centrifugo and its configuration to adopt changes in v4."),(0,r.kt)("li",{parentName:"ol"},"In Centrifugo v4 config turn on ",(0,r.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default"),"."),(0,r.kt)("li",{parentName:"ol"},"Run Centrifugo v4 \u2013 all current clients should continue working with it."),(0,r.kt)("li",{parentName:"ol"},"Then on the client-side uprade client SDK version to the one which works with Centrifugo v4, adopt changes in SDK API dictated by our new ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/transports/client_api"},"client SDK API spec"),". ",(0,r.kt)("strong",{parentName:"li"},"Important thing")," \u2013 add ",(0,r.kt)("inlineCode",{parentName:"li"},"?cf_protocol_version=v2")," URL param to the connection endpoint to tell Centrifugo that modern generation of protocol is being used by the connection (otherwise, it assumes old protocol since we have ",(0,r.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default")," option enabled)."),(0,r.kt)("li",{parentName:"ol"},"As soon as all your clients migrated to use new protocol generation you can remove ",(0,r.kt)("inlineCode",{parentName:"li"},"use_client_protocol_v1_by_default")," option from the server configuration."),(0,r.kt)("li",{parentName:"ol"},"After that you can remove ",(0,r.kt)("inlineCode",{parentName:"li"},"?cf_protocol_version=v2")," from connection endpoint on the client-side.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are using mobile client SDKs then most probably some time must pass while clients update their apps to use an updated Centrifugo SDK version."))),(0,r.kt)("h2",{id:"unidirectional-transport-migration"},"Unidirectional transport migration"),(0,r.kt)("p",null,"Client protocol framing also changed in unidirectional transports. The good news is that Centrifugo v4 still supports previous format for unidirectional transports."),(0,r.kt)("p",null,"When you are enabling ",(0,r.kt)("inlineCode",{parentName:"p"},"use_client_protocol_v1_by_default")," option described above you also make unidirectional transports to work over old protocol format. So your existing clients will continue working just fine with Centrifugo v4. Then the same steps to migrate described above can be applied to unidirectional transport case. The only difference that in unidirectional approach you are not using Centrifugo SDKs."),(0,r.kt)("h2",{id:"sockjs-migration"},"SockJS migration"),(0,r.kt)("p",null,"SockJS is now DEPRECATED in Centrifugo. Centrifugo v4 may be the last release which supports it. We now offer our own bidirectional emulation layer on top of HTTP-streaming and EventSource. See additional information in Centrifugo v4 introduction post."),(0,r.kt)("h2",{id:"channel-ascii-enforced"},"Channel ASCII enforced"),(0,r.kt)("p",null,"Centrifugo v2 and v3 docs mentioned the fact that channels must contain only ASCII characters. But it was not actually enforced by a server. Now Centrifugo is more strict. If a channel has non-ASCII characters then the ",(0,r.kt)("inlineCode",{parentName:"p"},"107: bad request")," error will be returned to the client. Please reach us out if this behavior is not suitable for your use case \u2013 we can discuss the use case and think on a proper solution together."),(0,r.kt)("h2",{id:"subscription-token-migration"},"Subscription token migration"),(0,r.kt)("p",null,"Subscription token now requires ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," claim (current user ID) to be set."),(0,r.kt)("p",null,"In most cases the only change which is required to smoothly migrate to v4 without breaking things is to add a boolean option ",(0,r.kt)("inlineCode",{parentName:"p"},'"skip_user_check_in_subscription_token": true')," to a Centrifugo v4 configuration. This skips the check of ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," claim to contain the current user ID set to a connection during authentication."),(0,r.kt)("p",null,"After that start adding ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," claim (with current user ID) to subscription tokens. As soon as all subscription tokens in your system contain user ID in ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," claim you can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"skip_user_check_in_subscription_token")," from a server configuration."),(0,r.kt)("p",null,"One more important note is that ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," claim in subscription token in Centrifugo v4 only supported for backwards compatibility. It must not be included into new subscription tokens."),(0,r.kt)("p",null,"It's worth mentioning that Centrifugo v4 does not allow subscribing on channels starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," without token even if namespace marked as available for subscribing using sth like ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_subscribe_for_client")," option. This is done to prevent potential security risk during v3 -> v4 migration when client previously not available to subscribe to channels starting with ",(0,r.kt)("inlineCode",{parentName:"p"},"$")," in any case may get permissions to do so."),(0,r.kt)("h2",{id:"user-limited-channel-migration"},"User-limited channel migration"),(0,r.kt)("p",null,"User-limited channel support should now be allowed over a separate channel namespace option ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_user_limited_channels"),". See below the namespace option converter which takes this change into account."),(0,r.kt)("h2",{id:"namespace-configuration-migration"},"Namespace configuration migration"),(0,r.kt)("p",null,"In Centrifugo v4 namespace configuration options have been changed. Centrifugo now has ",(0,r.kt)("inlineCode",{parentName:"p"},"secure by default")," namespaces. First thing to do is to read the new docs about ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/server/channels"},"channels and namespaces"),"."),(0,r.kt)("p",null,"Then you can use the following converter which will transform your old namespace configuration to a new one. This converter tries to keep backwards compatibility \u2013 i.e. it should be possible to deploy Centrifugo with namespace configuration from converter output and have the same behaviour as before regarding channel permissions. We believe that new option names should provide a more readable configuration and may help to reveal some potential security improvements in your namespace configuration \u2013 i.e. making it more strict and protective."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not blindly deploy things to production \u2013 test your system first, go through the possible usage scenarios and/or test cases."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's fully client-side: your data won't be sent anywhere."))),(0,r.kt)(u,{mdxType:"ConfigConverter"}),(0,r.kt)("h2",{id:"proxy-disconnect-code-changes"},"Proxy disconnect code changes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reconnect")," flag from custom disconnect code is removed. Reconnect advice is now determined by disconnect code value. This allowed us avoiding using JSON in WebSocket CLOSE frame reason. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/server/proxy#return-custom-disconnect"},"proxy docs")," docs for more details.  "),(0,r.kt)("h2",{id:"other-configuration-option-changes"},"Other configuration option changes"),(0,r.kt)("p",null,"Several other non-namespace related options have been renamed or removed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"client_anonymous")," option renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"allow_anonymous_connect_without_token")," \u2013 new name better describes the purpose of this option which was previously not clear. Converter above takes this into account."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"use_unlimited_history_by_default")," option was removed. It was used to help migrating from Centrifugo v2 to v3.")),(0,r.kt)("h2",{id:"server-api-changes"},"Server API changes"),(0,r.kt)("p",null,"The only breaking change is that ",(0,r.kt)("inlineCode",{parentName:"p"},"user_connections")," API method (which is available in Centrifugo PRO only) was renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"connections"),". The method is more generic now with a broader possibilities \u2013 so previous name does not match the current behavior."))}k.isMDXComponent=!0},4415:function(e,t,n){function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return i}})}}]);