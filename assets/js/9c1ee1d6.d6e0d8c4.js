"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[5861],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6890:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(7462),a=n(3366),o=(n(7294),n(3905)),r=["components"],s={title:"Centrifugo v3 released",tags:["centrifugo","release"],description:"Centrifugo v3 released with lots of exciting improvements",author:"Centrifugal team",authorTitle:"Let the Centrifugal force be with you",authorImageURL:"/img/logo_animated.svg",image:"/img/v3_blog.jpg",hide_table_of_contents:!1},l=void 0,c={permalink:"/blog/2021/08/31/hello-centrifugo-v3",editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/blog/2021-08-31-hello-centrifugo-v3.md",source:"@site/blog/2021-08-31-hello-centrifugo-v3.md",title:"Centrifugo v3 released",description:"Centrifugo v3 released with lots of exciting improvements",date:"2021-08-31T00:00:00.000Z",formattedDate:"August 31, 2021",tags:[{label:"centrifugo",permalink:"/blog/tags/centrifugo"},{label:"release",permalink:"/blog/tags/release"}],readingTime:14.055,truncated:!0,authors:[{name:"Centrifugal team",title:"Let the Centrifugal force be with you",imageURL:"/img/logo_animated.svg"}],frontMatter:{title:"Centrifugo v3 released",tags:["centrifugo","release"],description:"Centrifugo v3 released with lots of exciting improvements",author:"Centrifugal team",authorTitle:"Let the Centrifugal force be with you",authorImageURL:"/img/logo_animated.svg",image:"/img/v3_blog.jpg",hide_table_of_contents:!1},prevItem:{title:"Centrifugo integration with NodeJS tutorial",permalink:"/blog/2021/10/18/integrating-with-nodejs"},nextItem:{title:"Centrifuge \u2013 real-time messaging with Go",permalink:"/blog/2021/01/15/centrifuge-intro"}},u={authorsImageUrls:[void 0]},p=[{value:"Centrifugo v2 flashbacks",id:"centrifugo-v2-flashbacks",children:[],level:3},{value:"Backwards compatibility",id:"backwards-compatibility",children:[],level:3},{value:"License change",id:"license-change",children:[],level:3},{value:"Unidirectional real-time transports",id:"unidirectional-real-time-transports",children:[],level:3},{value:"History iteration API",id:"history-iteration-api",children:[],level:3},{value:"Redis Streams by default",id:"redis-streams-by-default",children:[],level:3},{value:"Tarantool engine",id:"tarantool-engine",children:[],level:3},{value:"GRPC proxy",id:"grpc-proxy",children:[],level:3},{value:"Server API improvements",id:"server-api-improvements",children:[],level:3},{value:"Better clustering",id:"better-clustering",children:[],level:3},{value:"Client improvements",id:"client-improvements",children:[],level:3},{value:"New documentation site",id:"new-documentation-site",children:[],level:3},{value:"Performance improvements",id:"performance-improvements",children:[],level:3},{value:"Centrifugo PRO",id:"centrifugo-pro",children:[],level:3},{value:"Conclusion",id:"conclusion",children:[],level:3}],d={toc:p};function h(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Centrifuge",src:n(4305).Z,width:"1594",height:"550"})),(0,o.kt)("p",null,"After almost three years of Centrifugo v2 life cycle we are happy to announce the next major release of Centrifugo. During the last several months deep in our Centrifugal laboratory we had been synthesizing an improved version of the server."),(0,o.kt)("p",null,"New Centrifugo v3 is targeting to improve Centrifugo adoption for basic real-time application cases, improves server performance and extends existing features with new functionality. It comes with unidirectional real-time transports, protocol speedups, super-fast engine implementation based on Tarantool, new documentation site, GRPC proxy, API extensions and PRO version which provides unique possibilities for business adopters."),(0,o.kt)("h3",{id:"centrifugo-v2-flashbacks"},"Centrifugo v2 flashbacks"),(0,o.kt)("p",null,"Centrifugo v2 life cycle has come to an end. Before discussing v3 let's look back at what has been done during the last three years."),(0,o.kt)("p",null,"Centrifugo v2 was a pretty huge refactoring of v1. Since the v2 release, Centrifugo is built on top of  new ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge"},"Centrifuge library")," for Go language. Centrifuge library evolved significantly since its initial release and now powers Grafana v8 real-time streaming among other things."),(0,o.kt)("p",null,"Here is an awesome demo made by my colleague ",(0,o.kt)("a",{href:"https://github.com/alexanderzobnin"},"Alexander Zobnin")," that demonstrates real-time telemetry of Assetto Corsa sports car streamed in real-time to Grafana dashboard: "),(0,o.kt)("div",{class:"vimeo-full-width"},(0,o.kt)("iframe",{src:"https://player.vimeo.com/video/570333329?title=0&byline=0&portrait=0",frameborder:"0",allow:"autoplay; fullscreen",allowfullscreen:!0})),(0,o.kt)("p",null),(0,o.kt)("p",null,"Centrifugo integrated with Redis Streams, got Redis Cluster support, can now work with Nats server as a PUB/SUB broker. Notable additions of Centrifugo v2 were ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/server_subs"},"server-side subscriptions")," with some interesting features on top \u2013 like maintaining a single global connection from one user and automatic personal channel subscription upon user connect."),(0,o.kt)("p",null,"A very good addition which increased Centrifugo adoption a lot was introduction of ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/proxy"},"proxy to backend"),". This made Centrifugo fit many setups where JWT authentication and existing subscription permission model did not suit well before."),(0,o.kt)("p",null,"Client ecosystem improved significantly. The fact that client protocol migrated to a strict Protobuf schema allowed to introduce binary protocol format (in addition to JSON) and simplify building client connectors. We now have much better and complete client libraries (compared to v1 situation)."),(0,o.kt)("p",null,"We also have an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/helm-charts"},"official Helm chart"),", ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/13039"},"Grafana dashboard")," for Prometheus datasource, and so on."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://grafana.com/api/dashboards/13039/images/8950/image",alt:null})),(0,o.kt)("p",null,"Centrifugo is becoming more noticeable in a wider real-time technology community. For example, it was included in a ",(0,o.kt)("a",{parentName:"p",href:"https://ably.com/periodic-table-of-realtime"},"periodic table of real-time")," created by Ably.com (one of the most powerful real-time messaging cloud services at the moment):"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://ik.imagekit.io/ably/ghost/prod/2021/08/periodic-table-screenshots-combined-without-banner-no-legend.jpg?tr=w-1520",alt:null})),(0,o.kt)("p",null,"Of course, there are many aspects where Centrifugo can be improved. And v3 addresses some of them. Below we will look at the most notable features and changes of the new major Centrifugo version."),(0,o.kt)("h3",{id:"backwards-compatibility"},"Backwards compatibility"),(0,o.kt)("p",null,"Let's start with the most important thing \u2013 backwards compatibility concerns."),(0,o.kt)("p",null,"In Centrifugo v3 client protocol mostly stayed the same. We expect that most applications will be able to update without any change on a client-side. This was an important concern for v3 given how painful the update cycle can be on mobile devices and lessons learned from v1 to v2 migration. There is one breaking change though which can affect users who use history API manually from a client-side (we provide a temporary workaround to give apps a chance to migrate smoothly)."),(0,o.kt)("p",null,"On a server-side, much more changes happened, especially in the configuration: some options were renamed, some were removed. We provide a ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/migration_v3#v2-to-v3-config-converter"},"v2 to v3 configuration converter")," which can help dealing with changes. In most cases, all you should do is adapt Centrifugo configuration to match v3 changes and redeploy Centrifugo using v3 build instead of v2. All features are still there (or a replacement exists, like for ",(0,o.kt)("inlineCode",{parentName:"p"},"channels")," API)."),(0,o.kt)("p",null,"For more details, refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/migration_v3"},"v3 migration guide"),"."),(0,o.kt)("h3",{id:"license-change"},"License change"),(0,o.kt)("p",null,"As some of you know we considered changing Centrifugo license to AGPL v3 for a new release. After thinking a lot about this we decided to not step into this area."),(0,o.kt)("p",null,"But the license has been changed: the license of OSS Centrifugo is now Apache 2.0 instead of MIT. Apache 2.0 is also a permissive OSS license, it's just a bit more concrete in some aspects."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2097922/91162089-8570e100-e6c3-11ea-8c41-cd8fcfe049d0.png",alt:null})),(0,o.kt)("h3",{id:"unidirectional-real-time-transports"},"Unidirectional real-time transports"),(0,o.kt)("p",null,"Server-side subscriptions introduced in Centrifugo v2 and recent improvements in the underlying Centrifuge library opened a road for a unidirectional approach."),(0,o.kt)("p",null,"This means that Centrifugo v3 provides a set of unidirectional real-time transports where messages flow only in one direction \u2013 from a server to a client. Why is this change important?"),(0,o.kt)("p",null,"Centrifugo originally concentrated on using bidirectional transports for client-server communication. Like WebSocket and SockJS. Bidirectional transports allow implementing some great protocol features since a client can communicate with a server in various ways after establishing a persistent connection. While this is a great opportunity this also leads to an increased complexity."),(0,o.kt)("p",null,"Centrifugo users had to use special client connector libraries which abstracted underlying work into a simple public API. But internally connectors do many things: matching requests to responses, handling timeouts, handling an ordering, queuing operations, error handling. So the client connector is a pretty complex piece of software."),(0,o.kt)("p",null,"But what if a user just needs to receive real-time updates from a stable set of channels known in connection time? Can we simplify everything and avoid using custom software on a client-side?"),(0,o.kt)("p",null,"With unidirectional transports, the answer is yes. Clients can now connect to Centrifugo using a bunch of unidirectional transports. And the greatest thing is that in this case, developers should not depend on Centrifugo client connectors at all \u2013 just use native browser APIs or GRPC-generated code. It's finally possible to consume events from Centrifugo using CURL (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/transports/uni_http_stream#connecting-using-curl"},"an example"),")."),(0,o.kt)("p",null,"Using unidirectional transports you can still benefit from Centrifugo built-in scalability with various engines, utilize built-in authentication over JWT or the connect proxy feature."),(0,o.kt)("p",null,"With subscribe server API (see below) it's even possible to subscribe unidirectional client to server-side channels dynamically. With refresh server API or the refresh proxy feature it's possible to manage a connection expiration."),(0,o.kt)("p",null,"Centrifugo supports the following unidirectional transports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/transports/uni_sse"},"EventSource (SSE)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/transports/uni_http_stream"},"HTTP streaming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/transports/uni_websocket"},"Unidirectional WebSocket")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/transports/uni_grpc"},"Unidirectional GRPC stream"))),(0,o.kt)("p",null,"We expect that introducing unidirectional transports will significantly increase Centrifugo adoption."),(0,o.kt)("h3",{id:"history-iteration-api"},"History iteration API"),(0,o.kt)("img",{src:"/img/centrifuge.svg",align:"right",width:"25%"}),(0,o.kt)("p",null,"There was a rather important limitation of Centrifugo history API \u2013 it was not very suitable for keeping large streams because a call to a history could only return the entire channel history."),(0,o.kt)("p",null,"Centrifugo v3 introduces an API to iterate over a stream. It's possible to do from the current stream beginning or end, in both directions \u2013 forward and backward, with configured limit. Also with certain starting stream position if it's known."),(0,o.kt)("p",null,"This, among other things, can help to implement manual missed message recovery on a client-side to reduce the load on the application backend."),(0,o.kt)("p",null,"Here is an example program in Go which endlessly iterates over stream both ends (using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/gocent"},"gocent")," API library), upon reaching the end of stream the iteration goes in reversed direction (not really useful in real world but fun): "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'// Iterate by 10.\nlimit := 10\n// Paginate in reversed order first, then invert it.\nreverse := true\n// Start with nil StreamPosition, then fill it with value while paginating.\nvar sp *gocent.StreamPosition\n\nfor {\n    historyResult, err = c.History(\n        ctx,\n        channel,\n        gocent.WithLimit(limit),\n        gocent.WithReverse(reverse),\n        gocent.WithSince(sp),\n    )\n    if err != nil {\n        log.Fatalf("Error calling history: %v", err)\n    }\n    for _, pub := range historyResult.Publications {\n        log.Println(pub.Offset, "=>", string(pub.Data))\n        sp = &gocent.StreamPosition{\n            Offset: pub.Offset,\n            Epoch:  historyResult.Epoch,\n        }\n    }\n    if len(historyResult.Publications) < limit {\n        // Got all pubs, invert pagination direction.\n        reverse = !reverse\n        log.Println("end of stream reached, change iteration direction")\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This new API does not remove the need in having the main application database \u2013 that's still mandatory for idiomatic Centrifugo usage."))),(0,o.kt)("h3",{id:"redis-streams-by-default"},"Redis Streams by default"),(0,o.kt)("p",null,"In Centrifugo v3 Redis engine uses Redis Stream data structure by default for keeping channel history. Before v3 Redis Streams were supported by not enabled by default so almost nobody used them. This change is important in terms of introducing history iteration API described above \u2013 since Redis Streams allow doing iteration effectively. "),(0,o.kt)("h3",{id:"tarantool-engine"},"Tarantool engine"),(0,o.kt)("p",null,"As you may know, Centrifugo has several built-in engines that allow scaling Centrifugo nodes (using PUB/SUB) and keep shared history and presence state. Before v3 Centrifugo had in-memory and Redis (or KeyDB) engines available."),(0,o.kt)("p",null,"Introducing a new engine to Centrifugo is pretty hard since the engine should provide a very robust PUB/SUB performance, fast history and presence operations, possibility to publish a message to PUB/SUB and save to history atomically. It also should allow dealing with ephemeral frequently changing subscriptions. It's typical for Centrifugo use case to have millions of users each subscribed to a  unique channel and constantly connecting/disconnecting (thus subscribing/unsubscribing)."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://www.tadviser.ru/images/thumb/1/1a/Tarantool_%D0%A1%D0%A3%D0%91%D0%94_logo_2020.png/840px-Tarantool_%D0%A1%D0%A3%D0%91%D0%94_logo_2020.png",alt:null})),(0,o.kt)("p",null,"In v3 we added ",(0,o.kt)("strong",{parentName:"p"},"experimental")," support for the ",(0,o.kt)("a",{parentName:"p",href:"https://www.tarantool.io/en/"},"Tarantool")," engine. It fits nicely all the requirements above and provides a huge performance speedup for history and presence operations compared to Redis. According to our benchmarks, the speedup can be up to 4-10x depending on operation. The PUB/SUB performance of Tarantool is comparable with Redis (10-20% worse according to our internal benchmarks to be exact, but that's pretty much the same)."),(0,o.kt)("p",null,"For example, let's look at Centrifugo benchmark where we recover zero messages (i.e. emulate a situations when many connections disconnected for a very short time interval due to load balancer reload)."),(0,o.kt)("p",null,"For Redis engine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Redis engine, single Redis instance"',title:'"Redis',"engine,":!0,single:!0,Redis:!0,'instance"':!0},"BenchmarkRedisRecover       26883 ns/op     1204 B/op      28 allocs/op\n")),(0,o.kt)("p",null,"Compare it with the same operation measured with Tarantool engine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Tarantool engine, single Tarantool instance"',title:'"Tarantool',"engine,":!0,single:!0,Tarantool:!0,'instance"':!0},"BenchmarkTarantoolRecover    6292 ns/op      563 B/op      10 allocs/op\n")),(0,o.kt)("p",null,"Tarantool can provide new storage properties (like synchronous replication), new adoption. We are pretty excited about adding it as an option."),(0,o.kt)("p",null,"The reason why Tarantool support is experimental is because Tarantool integration involves one more moving piece \u2013 the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"Centrifuge Lua module")," which should be run by a Tarantool server."),(0,o.kt)("p",null,"This increases deployment complexity and given the fact that many users have their own best practices in Tarantool deployment we are still evaluating a sufficient way to distribute Lua part. For now, we are targeting standalone (see examples in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/tarantool-centrifuge"},"centrifugal/tarantool-centrifuge"),") and Cartridge Tarantool setups (with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/rotor"},"centrifugal/rotor"),")."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/server/engines#tarantool-engine"},"Tarantool Engine documentation")," for more details."),(0,o.kt)("h3",{id:"grpc-proxy"},"GRPC proxy"),(0,o.kt)("p",null,"Centrifugo can now transform events received over persistent connections from users into GRPC calls to the application backend (in addition to the HTTP proxy available in v2)."),(0,o.kt)("p",null,"GRPC support should make Centrifugo ready for today's microservice architecture where GRPC is a huge player for inter-service communication."),(0,o.kt)("p",null,"So we mostly just provide more choices for Centrifugo users here. GRPC has some good advantages \u2013 for example an application backend RPC layer which is responsible for communication with Centrifugo can now be generated from Protobuf definitions for all popular programming languages."),(0,o.kt)("h3",{id:"server-api-improvements"},"Server API improvements"),(0,o.kt)("img",{src:"/img/test-tube.svg",align:"right",width:"25%"}),(0,o.kt)("p",null,"Centrifugo v3 has some valuable server API improvements."),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribe")," API method allows subscribing connection to a channel at any point in time. This works by utilizing server-side subscriptions. So it's not only possible to subscribe connection to a list of server-side channels during the connection establishment phase \u2013 but also later during the connection lifetime. This may be very useful for the unidirectional approach - by emulating client-side subscribe call over request to application backend which in turn calls subscribe Centrifugo server API."),(0,o.kt)("p",null,"Publish API now returns the current top stream position (offset and epoch) for channels with history enabled."),(0,o.kt)("p",null,"Server history API inherited iteration possibilities described above."),(0,o.kt)("p",null,"Channels command now returns a number of clients in a channel, also supports channel filtering by a pattern. Since we changed how channels call implemented internally there is no limitation anymore to call it when using Redis cluster."),(0,o.kt)("p",null,"Admin web UI has been updated too to support new API methods, so you can play with new API from its ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," tab."),(0,o.kt)("h3",{id:"better-clustering"},"Better clustering"),(0,o.kt)("p",null,"Centrifugo behaves a bit better in cluster mode: as soon as a node leaves a cluster gracefully (upon graceful termination) it sends a shutdown signal to the control channel thus giving other nodes a chance to immediately delete that node from the local registry."),(0,o.kt)("h3",{id:"client-improvements"},"Client improvements"),(0,o.kt)("p",null,"While preparing the v3 release we improved client connectors too. All existing client connectors now actualized to the latest protocol, support server-side subscriptions, history API."),(0,o.kt)("p",null,"One important detail is that it's not required to set ",(0,o.kt)("inlineCode",{parentName:"p"},"?format=protobuf")," URL param now when connecting to Centrifugo from mobile devices - this is now managed internally by using the WebSocket subprotocol mechanism (requires using the latest client connector version and Centrifugo v3)."),(0,o.kt)("h3",{id:"new-documentation-site"},"New documentation site"),(0,o.kt)("p",null,"You are reading this post on a new project site. It's built with amazing ",(0,o.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus"),"."),(0,o.kt)("p",null,"A lot of documents were actualized, extended, and rewritten. We also now have new chapters like:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/highlights"},"Main highlights")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/design"},"Design overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/server/history_and_recovery"},"History and recovery")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/server/codes"},"Error and disconnect codes"),".")),(0,o.kt)("p",null,"Server API and proxy documentation have been improved significantly."),(0,o.kt)("h3",{id:"performance-improvements"},"Performance improvements"),(0,o.kt)("img",{src:"/img/stopwatch.svg",align:"right",width:"25%"}),(0,o.kt)("p",null,"Centrifugo v3 has some notable performance improvements."),(0,o.kt)("p",null,"JSON client protocol now utilizes a couple of libraries (",(0,o.kt)("inlineCode",{parentName:"p"},"easyjson")," for encoding and ",(0,o.kt)("inlineCode",{parentName:"p"},"segmentio/encoding")," for unmarshaling). Actually we use a slightly customized version of ",(0,o.kt)("inlineCode",{parentName:"p"},"easyjson")," library to achieve even faster performance than it provides out-of-the-box. Changes allowed to speed up JSON encoding and decoding up to 4-5x for small messages. For large payloads speed up can be even more noticeable \u2013 we observed up to 30x performance boost when serializing 5kb messages."),(0,o.kt)("p",null,"For example, let's look at a JSON serialization benchmark result for 256 byte payload. Here is what we had before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Centrifugo v2 JSON encoding/decoding"',title:'"Centrifugo',v2:!0,JSON:!0,'encoding/decoding"':!0},"cpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nBenchmarkMarshal-12                  5883 ns/op     1121 B/op       6 allocs/op\nBenchmarkMarshalParallel-12          1009 ns/op     1121 B/op       6 allocs/op\nBenchmarkUnmarshal-12                1717 ns/op     1328 B/op      16 allocs/op\nBenchmarkUnmarshalParallel-12       492.2 ns/op     1328 B/op      16 allocs/op\n")),(0,o.kt)("p",null,"And what we have now with mentioned JSON optimizations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Centrifugo v3 JSON encoding/decoding"',title:'"Centrifugo',v3:!0,JSON:!0,'encoding/decoding"':!0},"cpu: Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz\nBenchmarkMarshal-12                  461.3 ns/op     928 B/op       3 allocs/op\nBenchmarkMarshalParallel-12          250.6 ns/op     928 B/op       3 allocs/op\nBenchmarkUnmarshal-12                476.5 ns/op     136 B/op       3 allocs/op\nBenchmarkUnmarshalParallel-12        107.2 ns/op     136 B/op       3 allocs/op\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Centrifugo Protobuf protocol is still faster than JSON for encoding/decoding on a server-side."))),(0,o.kt)("p",null,"Of course, JSON encoding is only one part of Centrifugo \u2013 so you should not expect overall 4x performance improvement. But loaded setups should notice the difference and this should also be a good thing for reducing garbage collection pauses."),(0,o.kt)("p",null,"Centrifugo inherited a couple of other improvements from the Centrifuge library."),(0,o.kt)("p",null,"In-memory connection hub is now sharded \u2013 this should reduce lock contention between operations in different channels. In ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/centrifugal/centrifuge/pull/184"},"our artificial benchmarks")," we noticed a 3x better hub throughput, but in reality the benefit is heavily depends on the usage pattern."),(0,o.kt)("p",null,"Centrifugo now allocates less during message broadcasting to a large number of subscribers."),(0,o.kt)("p",null,"Also, an upgrade to Go 1.17 for builds results in ~5% performance boost overall, thanks to a new way of passing function arguments and results using registers instead of the stack introduced in Go 1.17."),(0,o.kt)("h3",{id:"centrifugo-pro"},"Centrifugo PRO"),(0,o.kt)("p",null,"The final notable thing is an introduction of Centrifugo PRO. This is an extended version of Centrifugo built on top of the OSS version. It provides some unique features targeting business adopters."),(0,o.kt)("p",null,"Those who followed Centrifugo for a long time know that there were some attempts to make project development sustainable. Buy me a coffee and Opencollective approaches were not successful, during a year we got ~300$ of total contributions. While we appreciate these contributions a lot - this does not fairly justify a time spent on Centrifugo maintenance these days and does not allow bringing it to the next level. So here is an another attempt to monetize Centrifugo."),(0,o.kt)("p",null,"Centrifugo PRO details and features described ",(0,o.kt)("a",{parentName:"p",href:"/docs/pro/overview"},"here in docs"),". Let's see how it goes. We believe that a set of additional functionality can provide great advantages for both small and large-scale Centrifugo setups. PRO features can give useful insights on a system, protect from client API misusing, reduce server resource usage, and more."),(0,o.kt)("p",null,"PRO version will be released soon after Centrifugo v3 OSS."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"There are some other changes introduced in v3 but not mentioned here. The full list can be found in the release notes and the migration guide."),(0,o.kt)("p",null,"Hope we stepped into an exciting time of the v3 life cycle and many improvements will follow. Join our communities in Telegram and Discord if you have questions or want to follow Centrifugo development:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Telegram-Group-orange?style=flat&logo=telegram",alt:"Join the chat at https://t.me/joinchat/ABFVWBE0AhkyyhREoaboXQ"}))," ","\xa0",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/tYgADKx"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/719186998686122046?style=flat&label=Discord&logo=discord",alt:"Join the chat at https://discord.gg/tYgADKx"}))),(0,o.kt)("p",null,"Enjoy Centrifugo v3, and let the Centrifugal force be with you."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Special thanks")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Special thanks to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/silischev"},"Anton Silischev")," for the help with v3 tests, examples and CI. To ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/leeoniya"},"Leon Sorokin")," for the spinning CSS Centrifugo logo. To ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/filonenko-mikhail"},"Michael Filonenko")," for the help with Tarantool. To ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mogol"},"German Saprykin")," for Dart magic."),(0,o.kt)("p",{parentName:"div"},"Thanks to the community members who tested out Centrifugo v3 beta, found bugs and sent improvements."),(0,o.kt)("div",null,"Icons used here made by ",(0,o.kt)("a",{href:"https://www.flaticon.com/authors/wanicon",title:"wanicon"},"wanicon")," from ",(0,o.kt)("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")))))}h.isMDXComponent=!0},4305:function(e,t,n){t.Z=n.p+"assets/images/v3_blog-6965125800468f312aeaa9ae4c45aaf4.jpg"}}]);