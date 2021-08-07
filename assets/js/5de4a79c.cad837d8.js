"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[8375],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},5344:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return y}});var a=n(2122),i=n(9756),o=n(7294),r=n(3905),l=n(9443);var s=function(){var e=(0,o.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),p="tabItem_1uMI",u="tabItemActive_2DSg";var d=37,m=39;var k=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,i=e.values,r=e.groupId,l=e.className,k=s(),h=k.tabGroupChoices,f=k.setTabGroupChoices,g=(0,o.useState)(a),b=g[0],v=g[1],y=o.Children.toArray(e.children),N=[];if(null!=r){var w=h[r];null!=w&&w!==b&&i.some((function(e){return e.value===w}))&&v(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=i[n].value;v(a),null!=r&&(f(r,a),setTimeout((function(){var e,n,a,i,o,r,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,i=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&o<=s&&i<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case d:var i=N.indexOf(e.target)-1;n=N[i]||N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},l)},i.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:C,onClick:C},n)}))),t?(0,o.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f=["components"],g={id:"authentication",title:"Client authentication"},b=void 0,v={unversionedId:"server/authentication",id:"server/authentication",isDocsHomePage:!1,title:"Client authentication",description:"Centrifugo should know the ID of a user which is connecting. This chapter describes a mechanism of authenticating user over JSON Web Token (JWT) passing.",source:"@site/docs/server/authentication.md",sourceDirName:"server",slug:"/server/authentication",permalink:"/docs/server/authentication",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/authentication.md",version:"current",frontMatter:{id:"authentication",title:"Client authentication"},sidebar:"Guides",previous:{title:"Server API",permalink:"/docs/server/server_api"},next:{title:"Channels",permalink:"/docs/server/channels"}},y=[{value:"Claims",id:"claims",children:[{value:"sub",id:"sub",children:[]},{value:"exp",id:"exp",children:[]},{value:"info",id:"info",children:[]},{value:"b64info",id:"b64info",children:[]},{value:"channels",id:"channels",children:[]},{value:"subs",id:"subs",children:[]},{value:"meta",id:"meta",children:[]},{value:"expire_at",id:"expire_at",children:[]}]},{value:"Connection expiration",id:"connection-expiration",children:[]},{value:"Examples",id:"examples",children:[{value:"Simplest token",id:"simplest-token",children:[]},{value:"Token with expiration",id:"token-with-expiration",children:[]},{value:"Token with additional connection info",id:"token-with-additional-connection-info",children:[]},{value:"Investigating problems with JWT",id:"investigating-problems-with-jwt",children:[]}]},{value:"JSON Web Key support",id:"json-web-key-support",children:[]}],N={toc:y};function w(e){var t=e.components,n=(0,i.Z)(e,f);return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Centrifugo should know the ID of a user which is connecting. This chapter describes a mechanism of authenticating user over JSON Web Token (JWT) passing."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you prefer to avoid using JWT then look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"the proxy feature"),". It allows proxying connection request from Centrifugo to your application backend for authentication details."))),(0,r.kt)("p",null,"Upon connecting to Centrifugo client should provide a connection JWT with several predefined credential claims. If you've never heard about JWT before - refer to ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io")," page."),(0,r.kt)("p",null,"At the moment Centrifugo supports HMAC, RSA and ECDSA JWT algorithms - i.e. HS256, HS384, HS512, RSA256, RSA384, RSA512, EC256, EC384, EC512."),(0,r.kt)("p",null,"We will use Javascript Centrifugo client here for example snippets for client side and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jpadilla/pyjwt"},"PyJWT")," Python library to generate connection token on backend side."),(0,r.kt)("p",null,"To add HMAC secret key to Centrifugo add ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," to configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_hmac_secret_key": "<YOUR-SECRET-STRING-HERE>"\n}\n')),(0,r.kt)("p",null,"To add RSA public key (must be PEM encoded string) add ",(0,r.kt)("inlineCode",{parentName:"p"},"token_rsa_public_key")," option, ex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_rsa_public_key": "-----BEGIN PUBLIC KEY-----\\nMFwwDQYJKoZ..."\n}\n')),(0,r.kt)("p",null,"To add ECDSA public key (must be PEM encoded string) add ",(0,r.kt)("inlineCode",{parentName:"p"},"token_ecdsa_public_key")," option, ex:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "token_ecdsa_public_key": "-----BEGIN PUBLIC KEY-----\\nxyz23adf..."\n}\n')),(0,r.kt)("h2",{id:"claims"},"Claims"),(0,r.kt)("p",null,"Centrifugo uses the following claims in a JWT: ",(0,r.kt)("inlineCode",{parentName:"p"},"sub"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"exp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"b64info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"channels"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subs"),"."),(0,r.kt)("h3",{id:"sub"},"sub"),(0,r.kt)("p",null,"This is a standard JWT claim which must contain an ID of current application user (",(0,r.kt)("strong",{parentName:"p"},"as string"),"). "),(0,r.kt)("p",null,"If a user is not currently authenticated in an application, but you want to let him connect to Centrifugo anyway \u2013 you can use empty string as a user ID in ",(0,r.kt)("inlineCode",{parentName:"p"},"sub")," claim. This is called anonymous access. In this case ",(0,r.kt)("inlineCode",{parentName:"p"},"anonymous")," option must be enabled in Centrifugo configuration for channels that client will subscribe to."),(0,r.kt)("h3",{id:"exp"},"exp"),(0,r.kt)("p",null,"This is a UNIX timestamp seconds when token will expire. This is a standard JWT claim - all JWT libraries for different languages provide an API to set it."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," claim not provided then Centrifugo won't expire connection. When provided special algorithm will find connections with ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," in the past and activate connection refresh mechanism. Refresh mechanism allows connection to survive and be prolonged. In case of refresh failure client connection will be eventually closed by Centrifugo and won't be accepted until new valid and actual credentials provided in connection token."),(0,r.kt)("p",null,"You can use connection expiration mechanism in cases when you don't want users of your app to be subscribed on channels after being banned/deactivated in application. Or to protect your users from a token leakage (providing a reasonably short time of expiration)."),(0,r.kt)("p",null,"Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," value wisely, you don't need small values because refresh mechanism will hit your application often with refresh requests. But setting this value too large can lead to slow user connection deactivation. This is a trade off."),(0,r.kt)("p",null,"Read more about connection expiration ",(0,r.kt)("a",{parentName:"p",href:"#connection-expiration"},"below"),"."),(0,r.kt)("h3",{id:"info"},"info"),(0,r.kt)("p",null,"This claim is optional - this is an additional information about client connection that can be provided for Centrifugo. This information will be included in presence information, join/leave events and in channel publication if it was published from a client-side."),(0,r.kt)("h3",{id:"b64info"},"b64info"),(0,r.kt)("p",null,"If you are using binary protobuf protocol you may want info to be custom bytes. Use this field in this case."),(0,r.kt)("p",null,"This field contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," representation of your bytes. After receiving Centrifugo will decode base64 back to bytes and will embed result into various places described above."),(0,r.kt)("h3",{id:"channels"},"channels"),(0,r.kt)("p",null,"An optional array of strings with server-side channels to subscribe client to. See more details about ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/server_subs"},"server-side subscriptions"),"."),(0,r.kt)("h3",{id:"subs"},"subs"),(0,r.kt)("p",null,"An optional map of channels with options. This is like ",(0,r.kt)("inlineCode",{parentName:"p"},"channels")," claim but allows more control over server-side subscription since every channel can be annotated with info, data and so on using options."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "subs": {\n    "channel1": {\n      "data": {"welcome": "welcome to channel1"}\n    },\n    "channel2": {\n      "data": {"welcome": "welcome to channel2"}\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"subscribe-options"},"Subscribe options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"info"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom channel info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b64info"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom channel info in Base64 - to pass binary channel info")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"data"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON object"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom JSON data to return in subscription context inside Connect reply")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"b64data"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Same as ",(0,r.kt)("inlineCode",{parentName:"td"},"data")," but in Base64 to send binary data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"override"),(0,r.kt)("td",{parentName:"tr",align:null},"Override object"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows dynamically override some channel options defined in Centrifugo configuration on per-connection basis (see below available fields)")))),(0,r.kt)("h4",{id:"override-object"},"Override object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"presence"),(0,r.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Override presence")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"join_leave"),(0,r.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Override join_leave")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Override position")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"recover"),(0,r.kt)("td",{parentName:"tr",align:null},"BoolValue"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Override recover")))),(0,r.kt)("p",null,"BoolValue is an object like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "value": true/false\n}\n')),(0,r.kt)("h3",{id:"meta"},"meta"),(0,r.kt)("p",null,"Meta is an addition JSON data that will be attached to a connection. Unlike ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," it's never exposed to clients and only accessible on a backend side. It will be included to proxy calls from Centrifugo to application backend. Also there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"getUserConnections")," RPC call in Centrifugo PRO that returns this data in user connection object."),(0,r.kt)("h3",{id:"expire_at"},"expire_at"),(0,r.kt)("p",null,"By default Centrifugo looks on ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," claim to configure connection expiration. In most cases this is fine, but there could be situations where you wish to decouple token expiration check with connection expiration time. As soon as ",(0,r.kt)("inlineCode",{parentName:"p"},"expire_at")," claim provided (set) in JWT Centrifugo relies on it for setting connection expiration time (JWT expiration still checked over ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," though)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"expire_at")," is a UNIX timestamp seconds when connection should expire."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set in to the future time for expiring connection at some point"),(0,r.kt)("li",{parentName:"ul"},"Set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," to disable connection expiration (but since check token ",(0,r.kt)("inlineCode",{parentName:"li"},"exp"),").")),(0,r.kt)("h2",{id:"connection-expiration"},"Connection expiration"),(0,r.kt)("p",null,"As said above ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," claim in connection token allows expiring client connection at some point of time. Let's look in detail what happens when Centrifugo detects that connection is going to expire."),(0,r.kt)("p",null,"First you should do is enable client expiration mechanism in Centrifugo providing connection token with expiration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\nimport time\n\ntoken = jwt.encode({"sub": "42", "exp": int(time.time()) + 10*60}, "secret").decode()\n\nprint(token)\n')),(0,r.kt)("p",null,"Let's suppose that you set ",(0,r.kt)("inlineCode",{parentName:"p"},"exp")," field to timestamp that will expire in 10 minutes and client connected to Centrifugo with this token. During 10 mins connection will be kept by Centrifugo. When this time passed Centrifugo gives connection some time (configured, 25 seconds by default) to refresh its credentials and provide new valid token with new ",(0,r.kt)("inlineCode",{parentName:"p"},"exp"),"."),(0,r.kt)("p",null,"When client first connects to Centrifugo it receives ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," value in connect reply. That ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," value contains number of seconds after which client must send ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh")," command with new credentials to Centrifugo. Centrifugo clients must handle this ",(0,r.kt)("inlineCode",{parentName:"p"},"ttl")," field and automatically start refresh process."),(0,r.kt)("p",null,"For example Javascript browser client  will send AJAX POST request to your application when it's time to refresh credentials. By default this request goes to ",(0,r.kt)("inlineCode",{parentName:"p"},"/centrifuge/refresh")," url endpoint. In response your server must return JSON with new connection token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n    "token": token\n}\n')),(0,r.kt)("p",null,"So you must just return the same connection token for your user when rendering page initially. But with actual valid ",(0,r.kt)("inlineCode",{parentName:"p"},"exp"),". Javascript client will then send them to Centrifugo server and connection will be refreshed for a time you set in ",(0,r.kt)("inlineCode",{parentName:"p"},"exp"),"."),(0,r.kt)("p",null,"In this case you know which user want to refresh its connection because this is just a general request to your app - so your session mechanism will tell you about the user."),(0,r.kt)("p",null,"If you don't want to refresh connection for this user - just return 403 Forbidden on refresh request to your application backend."),(0,r.kt)("p",null,"Javascript client also has options to hook into refresh mechanism to implement your custom way of refreshing. Other Centrifugo clients also should have hooks to refresh credentials but depending on client API for this can be different - see specific client docs."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Let's look how to generate connection HS256 JWT in Python:"),(0,r.kt)("h3",{id:"simplest-token"},"Simplest token"),(0,r.kt)(k,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(h,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\n\ntoken = jwt.encode({"sub": "42"}, "secret").decode()\n\nprint(token)\n'))),(0,r.kt)(h,{value:"node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42' }, 'secret');\n\nconsole.log(token);\n")))),(0,r.kt)("p",null,"Note that we use the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," from Centrifugo config here (in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"token_hmac_secret_key")," value is just ",(0,r.kt)("inlineCode",{parentName:"p"},"secret"),"). The only two who must know HMAC secret key is your application backend which generates JWT and Centrifugo. You should never reveal HMAC secret key to your users."),(0,r.kt)("p",null,"Then you can pass this token to your client side and use it when connecting to Centrifugo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="Using centrifuge-js lib"',title:'"Using',"centrifuge-js":!0,'lib"':!0},'var centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");\ncentrifuge.setToken(token);\ncentrifuge.connect();\n')),(0,r.kt)("h3",{id:"token-with-expiration"},"Token with expiration"),(0,r.kt)("p",null,"HS256 token that will be valid for 5 minutes:"),(0,r.kt)(k,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(h,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\nimport time\n\nclaims = {"sub": "42", "exp": int(time.time()) + 5*60}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'))),(0,r.kt)(h,{value:"node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42' }, 'secret', { expiresIn: 5 * 60 });\n\nconsole.log(token);\n")))),(0,r.kt)("h3",{id:"token-with-additional-connection-info"},"Token with additional connection info"),(0,r.kt)("p",null,"Let's attach user name:"),(0,r.kt)(k,{className:"unique-tabs",defaultValue:"python",values:[{label:"Python",value:"python"},{label:"NodeJS",value:"node"}],mdxType:"Tabs"},(0,r.kt)(h,{value:"python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import jwt\n\nclaims = {"sub": "42", "info": {"name": "Alexander Emelin"}}\ntoken = jwt.encode(claims, "secret", algorithm="HS256").decode()\nprint(token)\n'))),(0,r.kt)(h,{value:"node",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var jwt = require('jsonwebtoken');\n\nvar token = jwt.sign({ sub: '42', info: {\"name\": \"Alexander Emelin\"} }, 'secret');\n\nconsole.log(token);\n")))),(0,r.kt)("h3",{id:"investigating-problems-with-jwt"},"Investigating problems with JWT"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io")," site to investigate contents of your tokens. Also server logs usually contain some useful information."),(0,r.kt)("h2",{id:"json-web-key-support"},"JSON Web Key support"),(0,r.kt)("p",null,"Centrifugo supports JSON Web Key (JWK) ",(0,r.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"spec"),". This means that it's possible to improve JWT security by providing an endpoint to Centrifugo from where to load JWK (by looking at ",(0,r.kt)("inlineCode",{parentName:"p"},"kid")," header of JWT)."),(0,r.kt)("p",null,"A mechanism can be enabled by providing ",(0,r.kt)("inlineCode",{parentName:"p"},"token_jwks_public_endpoint")," string option to Centrifugo (HTTP address)."),(0,r.kt)("p",null,"As soon as ",(0,r.kt)("inlineCode",{parentName:"p"},"token_jwks_public_endpoint")," set all tokens will be verified using JSON Web Key Set loaded from JWKS endpoint. This makes it impossible to use non-JWK based tokens to connect and subscribe to private channels."),(0,r.kt)("p",null,"At the moment Centrifugo caches keys loaded from an endpoint for one hour."),(0,r.kt)("p",null,"Centrifugo will load keys from JWKS endpoint by issuing GET HTTP request with 1 second timeout and one retry in case of failure (not configurable at the moment)."),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"RSA")," algorithm supported."),(0,r.kt)("p",null,"JWKS support enabled both for connection and private channel subscription tokens."))}w.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}n.d(t,{Z:function(){return i}})}}]);