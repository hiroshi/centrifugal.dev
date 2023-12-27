"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[628],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"monitoring",title:"Metrics monitoring"},i=void 0,s={unversionedId:"server/monitoring",id:"server/monitoring",title:"Metrics monitoring",description:"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite.",source:"@site/docs/server/monitoring.md",sourceDirName:"server",slug:"/server/monitoring",permalink:"/docs/server/monitoring",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Metrics monitoring"}},l={},p=[{value:"Prometheus",id:"prometheus",level:3},{value:"Graphite",id:"graphite",level:3},{value:"Grafana dashboard",id:"grafana-dashboard",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Centrifugo supports reporting metrics in Prometheus format and can automatically export metrics to Graphite."),(0,o.kt)("h3",{id:"prometheus"},"Prometheus"),(0,o.kt)("p",null,"To enable Prometheus endpoint start Centrifugo with ",(0,o.kt)("inlineCode",{parentName:"p"},"prometheus")," option on:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "prometheus": true\n}\n')),(0,o.kt)("p",null,"This will enable ",(0,o.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint so the Centrifugo instance can be monitored by your Prometheus server."),(0,o.kt)("h3",{id:"graphite"},"Graphite"),(0,o.kt)("p",null,"To enable automatic export to Graphite (via TCP):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="config.json"',title:'"config.json"'},'{\n    ...\n    "graphite": true,\n    "graphite_host": "localhost",\n    "graphite_port": 2003\n}\n')),(0,o.kt)("p",null,"By default, stats will be aggregated over 10 seconds intervals inside Centrifugo and then pushed to Graphite over TCP connection."),(0,o.kt)("p",null,"If you need to change this aggregation interval use the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphite_interval")," option (in seconds, default ",(0,o.kt)("inlineCode",{parentName:"p"},"10"),")."),(0,o.kt)("h3",{id:"grafana-dashboard"},"Grafana dashboard"),(0,o.kt)("p",null,"Check out Centrifugo ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/13039"},"official Grafana dashboard")," for Prometheus storage. You can import that dashboard to your Grafana, point to Prometheus storage \u2013 and enjoy visualized metrics."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://grafana.com/api/dashboards/13039/images/8950/image",alt:null})))}u.isMDXComponent=!0}}]);