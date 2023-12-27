"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[2906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?o.createElement(f,l(l({ref:n},p),{},{components:t})):o.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},76056:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const i={id:"console_commands",title:"Helper CLI commands"},l=void 0,a={unversionedId:"server/console_commands",id:"server/console_commands",title:"Helper CLI commands",description:"Here is a list of helpful command-line commands that come with Centrifugo executable.",source:"@site/docs/server/console_commands.md",sourceDirName:"server",slug:"/server/console_commands",permalink:"/docs/server/console_commands",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/server/console_commands.md",tags:[],version:"current",frontMatter:{id:"console_commands",title:"Helper CLI commands"},sidebar:"Guides",previous:{title:"Error and disconnect codes",permalink:"/docs/server/codes"}},c={},s=[{value:"version",id:"version",level:2},{value:"genconfig",id:"genconfig",level:2},{value:"checkconfig",id:"checkconfig",level:2},{value:"gentoken",id:"gentoken",level:2},{value:"gensubtoken",id:"gensubtoken",level:2},{value:"checktoken",id:"checktoken",level:2},{value:"checksubtoken",id:"checksubtoken",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is a list of helpful command-line commands that come with Centrifugo executable."),(0,r.kt)("h2",{id:"version"},"version"),(0,r.kt)("p",null,"To show Centrifugo version and exit run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo version\n")),(0,r.kt)("h2",{id:"genconfig"},"genconfig"),(0,r.kt)("p",null,"Another command is ",(0,r.kt)("inlineCode",{parentName:"p"},"genconfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo genconfig -c config.json\n")),(0,r.kt)("p",null,"It will automatically generate the minimal required configuration file. This is mostly useful for development."),(0,r.kt)("p",null,"If any errors happen \u2013 program will exit with error message and exit code 1."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"genconfig")," also supports generation of YAML and TOML configuration file formats - just provide an extension to a file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo genconfig -c config.toml\n")),(0,r.kt)("h2",{id:"checkconfig"},"checkconfig"),(0,r.kt)("p",null,"Centrifugo has special command to check configuration file ",(0,r.kt)("inlineCode",{parentName:"p"},"checkconfig"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"centrifugo checkconfig --config=config.json\n")),(0,r.kt)("p",null,"If any errors found during validation \u2013 program will exit with error message and exit code 1."),(0,r.kt)("h2",{id:"gentoken"},"gentoken"),(0,r.kt)("p",null,"Another command is ",(0,r.kt)("inlineCode",{parentName:"p"},"gentoken"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo gentoken -c config.json -u 28282\n")),(0,r.kt)("p",null,"It will automatically generate HMAC SHA-256 based token for user with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"28282")," (which expires in 1 week)."),(0,r.kt)("p",null,"You can change token TTL with ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," flag (number of seconds):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo gentoken -c config.json -u 28282 -t 3600\n")),(0,r.kt)("p",null,"This way generated token will be valid for 1 hour."),(0,r.kt)("p",null,"If any errors happen \u2013 program will exit with error message and exit code 1."),(0,r.kt)("p",null,"This command is mostly useful for development."),(0,r.kt)("h2",{id:"gensubtoken"},"gensubtoken"),(0,r.kt)("p",null,"Another command is ",(0,r.kt)("inlineCode",{parentName:"p"},"gensubtoken"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo gensubtoken -c config.json -u 28282 -s channel\n")),(0,r.kt)("p",null,"It will automatically generate HMAC SHA-256 based subscription token for channel ",(0,r.kt)("inlineCode",{parentName:"p"},"channel")," and user with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"28282")," (which expires in 1 week)."),(0,r.kt)("p",null,"You can change token TTL with ",(0,r.kt)("inlineCode",{parentName:"p"},"-t")," flag (number of seconds):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo gentoken -c config.json -u 28282 -s channel -t 3600\n")),(0,r.kt)("p",null,"This way generated token will be valid for 1 hour."),(0,r.kt)("p",null,"If any errors happen \u2013 program will exit with error message and exit code 1."),(0,r.kt)("p",null,"This command is mostly useful for development."),(0,r.kt)("h2",{id:"checktoken"},"checktoken"),(0,r.kt)("p",null,"One more command is ",(0,r.kt)("inlineCode",{parentName:"p"},"checktoken"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo checktoken -c config.json <TOKEN>\n")),(0,r.kt)("p",null,"It will validate your connection JWT, so you can test it before using while developing application."),(0,r.kt)("p",null,"If any errors happen or validation failed \u2013 program will exit with error message and exit code 1."),(0,r.kt)("p",null,"This is mostly useful for development."),(0,r.kt)("h2",{id:"checksubtoken"},"checksubtoken"),(0,r.kt)("p",null,"One more command is ",(0,r.kt)("inlineCode",{parentName:"p"},"checksubtoken"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"centrifugo checksubtoken -c config.json <TOKEN>\n")),(0,r.kt)("p",null,"It will validate your subscription JWT, so you can test it before using while developing application."),(0,r.kt)("p",null,"If any errors happen or validation failed \u2013 program will exit with error message and exit code 1."),(0,r.kt)("p",null,"This is mostly useful for development."))}u.isMDXComponent=!0}}]);