"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[9334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={id:"infra_tuning",title:"Infrastructure tuning"},a=void 0,l={unversionedId:"server/infra_tuning",id:"version-4/server/infra_tuning",title:"Infrastructure tuning",description:"As Centrifugo deals with lots of persistent connections your operating system and server infrastructure must be ready for it.",source:"@site/versioned_docs/version-4/server/infra_tuning.md",sourceDirName:"server",slug:"/server/infra_tuning",permalink:"/docs/4/server/infra_tuning",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/versioned_docs/version-4/server/infra_tuning.md",tags:[],version:"4",frontMatter:{id:"infra_tuning",title:"Infrastructure tuning"},sidebar:"Guides",previous:{title:"Metrics monitoring",permalink:"/docs/4/server/monitoring"},next:{title:"Load balancing",permalink:"/docs/4/server/load_balancing"}},s={},u=[{value:"Open files limit",id:"open-files-limit",level:3},{value:"Ephemeral port exhaustion",id:"ephemeral-port-exhaustion",level:3},{value:"Sockets in TIME_WAIT state",id:"sockets-in-time_wait-state",level:3},{value:"Proxy max connections",id:"proxy-max-connections",level:3},{value:"Conntrack table",id:"conntrack-table",level:3},{value:"Additional server protection",id:"additional-server-protection",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As Centrifugo deals with lots of persistent connections your operating system and server infrastructure must be ready for it."),(0,o.kt)("h3",{id:"open-files-limit"},"Open files limit"),(0,o.kt)("p",null,"You should increase a max number of open files Centrifugo process can open if you want to handle more connections."),(0,o.kt)("p",null,"To get the current open files limit run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ulimit -n\n")),(0,o.kt)("p",null,"On Linux you can check limits for a running process using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cat /proc/<PID>/limits\n")),(0,o.kt)("p",null,"The open file limit shows approximately how many clients your server can handle. Each connection consumes one file descriptor. On most operating systems this limit is 128-256 by default."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.riak.com/riak/kv/2.2.3/using/performance/open-files-limit.1.html"},"this document")," to get more info on how to increase this number."),(0,o.kt)("p",null,"If you install Centrifugo using RPM from repo then it automatically sets max open files limit to 65536."),(0,o.kt)("p",null,"You may also need to increase max open files for Nginx (or any other proxy before Centrifugo)."),(0,o.kt)("h3",{id:"ephemeral-port-exhaustion"},"Ephemeral port exhaustion"),(0,o.kt)("p",null,"Ephemeral ports exhaustion problem can happen between your load balancer and Centrifugo server. If your clients connect directly to Centrifugo without any load balancer or reverse proxy software between then you are most likely won't have this problem. But load balancing is a very common thing."),(0,o.kt)("p",null,"The problem arises due to the fact that each TCP connection uniquely identified in the OS by the 4-part-tuple:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"source ip | source port | destination ip | destination port\n")),(0,o.kt)("p",null,"On load balancer/server boundary you are limited in 65536 possible variants by default. Actually due to some OS limits not all 65536 ports are available for usage (usually about 15k ports available by default)."),(0,o.kt)("p",null,"In order to eliminate a problem you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Increase the ephemeral port range by tuning ",(0,o.kt)("inlineCode",{parentName:"li"},"ip_local_port_range")," option"),(0,o.kt)("li",{parentName:"ul"},"Deploy more Centrifugo server instances to load balance across"),(0,o.kt)("li",{parentName:"ul"},"Deploy more load balancer instances"),(0,o.kt)("li",{parentName:"ul"},"Use virtual network interfaces")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://making.pusher.com/ephemeral-port-exhaustion-and-how-to-avoid-it/"},"a post in Pusher blog")," about this problem and more detailed solution steps."),(0,o.kt)("h3",{id:"sockets-in-time_wait-state"},"Sockets in TIME_WAIT state"),(0,o.kt)("p",null,"On load balancer/server boundary one more problem can arise: sockets in TIME_WAIT state."),(0,o.kt)("p",null,"Under load when lots of connections and disconnections happen socket descriptors can stay in TIME_WAIT state. Those descriptors can not be reused for a while. So you can get various\nerrors when using Centrifugo. For example something like ",(0,o.kt)("inlineCode",{parentName:"p"},"(99: Cannot assign requested address) while connecting to upstream")," in Nginx error log and 502 on client side."),(0,o.kt)("p",null,"Look how many socket descriptors in TIME_WAIT state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"netstat -an |grep TIME_WAIT | grep <CENTRIFUGO_PID> | wc -l\n")),(0,o.kt)("p",null,"Nice article about TIME_WAIT sockets: ",(0,o.kt)("a",{parentName:"p",href:"http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html"},"http://vincent.bernat.im/en/blog/2014-tcp-time-wait-state-linux.html")),(0,o.kt)("p",null,"The advices here are similar to ephemeral port exhaustion problem:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Increase the ephemeral port range by tuning ",(0,o.kt)("inlineCode",{parentName:"li"},"ip_local_port_range")," option"),(0,o.kt)("li",{parentName:"ul"},"Deploy more Centrifugo server instances to load balance across"),(0,o.kt)("li",{parentName:"ul"},"Deploy more load balancer instances"),(0,o.kt)("li",{parentName:"ul"},"Use virtual network interfaces")),(0,o.kt)("h3",{id:"proxy-max-connections"},"Proxy max connections"),(0,o.kt)("p",null,"Proxies like Nginx and Envoy have default limits on maximum number of connections which can be established."),(0,o.kt)("p",null,"Make sure you have a reasonable limit for max number of incoming and outgoing connections in your proxy configuration. "),(0,o.kt)("h3",{id:"conntrack-table"},"Conntrack table"),(0,o.kt)("p",null,"More rare (since default limit is usually sufficient) your possible number of connections can be limited by conntrack table. Netfilter framework which is part of iptables keeps information about all connections and has limited size for this information. See how to see its limits and instructions to increase ",(0,o.kt)("a",{parentName:"p",href:"https://morganwu277.github.io/2018/05/26/Solve-production-issue-of-nf-conntrack-table-full-dropping-packet/"},"in this article"),"."),(0,o.kt)("h3",{id:"additional-server-protection"},"Additional server protection"),(0,o.kt)("p",null,"You should also consider adding additional protection to your Centrifugo endpoints. Centrifugo itself provides several options (described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/4/server/configuration"},"configuration")," section) regarding server protection from the malicious behavior. Though an additional layer of DDOS protection on network or infrastructure level is highly recommended. For example, you may want to limit the number of connections coming from particular IP address."),(0,o.kt)("p",null,"Here we list some possible ways you can use to protect your Centrifugo installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adding Nginx ",(0,o.kt)("a",{parentName:"li",href:"https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html#limit_conn_zone"},"limit_conn_zone")," configuration"),(0,o.kt)("li",{parentName:"ul"},"Using ",(0,o.kt)("a",{parentName:"li",href:"https://www.haproxy.com/blog/introduction-to-haproxy-stick-tables/"},"stick tables")," of Haproxy"),(0,o.kt)("li",{parentName:"ul"},"Configuring ",(0,o.kt)("a",{parentName:"li",href:"https://developers.cloudflare.com/waf/rate-limiting-rules/"},"rate limiting rules")," with Cloudflare")),(0,o.kt)("p",null,"The list is not exhaustive of course."))}p.isMDXComponent=!0}}]);