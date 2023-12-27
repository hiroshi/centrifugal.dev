"use strict";(self.webpackChunkcentrifugal_dev=self.webpackChunkcentrifugal_dev||[]).push([[1792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,d=u["".concat(l,".").concat(h)]||u[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={id:"improvements",sidebar_label:"Appx #1: possible improvements",title:"Appendix #1: Possible Improvements"},i=void 0,s={unversionedId:"tutorial/improvements",id:"tutorial/improvements",title:"Appendix #1: Possible Improvements",description:"There are still many areas for improvement in GrandChat, but we had to halt at a certain point to prevent the tutorial from becoming a book. If you enjoyed the tutorial and wish to enhance GrandChat further, here are some bright ideas:",source:"@site/docs/tutorial/improvements.md",sourceDirName:"tutorial",slug:"/tutorial/improvements",permalink:"/docs/tutorial/improvements",draft:!1,editUrl:"https://github.com/centrifugal/centrifugal.dev/edit/main/docs/tutorial/improvements.md",tags:[],version:"current",frontMatter:{id:"improvements",sidebar_label:"Appx #1: possible improvements",title:"Appendix #1: Possible Improvements"},sidebar:"Tutorial",previous:{title:"Wrapping up \u2013 things learnt",permalink:"/docs/tutorial/outro"},next:{title:"Appx #2: tips and tricks",permalink:"/docs/tutorial/tips_and_tricks"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are still many areas for improvement in GrandChat, but we had to halt at a certain point to prevent the tutorial from becoming a book. If you enjoyed the tutorial and wish to enhance GrandChat further, here are some bright ideas:"),(0,r.kt)("p",null,"\ud83d\udca1 Implement a 2-column layout on wide desktop screens \u2013 a list of chat rooms on the left and room details on the right. As mentioned in the beginning, this is already achievable with some rearrangement of React components and CSS."),(0,r.kt)("p",null,'\ud83d\udca1 Provide non-admin users with the ability to create new rooms, perhaps creating private rooms for one-to-one communication that are not visible on the "Discover" page. One-to-one chats may just be a subset of our current chat room implementation. At some point, you may add a property to the room defining the room type, allowing for different behavior in rooms of different types.'),(0,r.kt)("p",null,"\ud83d\udca1 Enhance the frontend by adding more strict types \u2013 leveraging the full power of TypeScript. While using any in some places helped us evolve quickly during the tutorial, strict typing in production will eventually save you time."),(0,r.kt)("p",null,"\ud83d\udca1 Introduce \"system\" messages, such as displaying messages about users who joined/left inside the room detail view. In this case, the message won't have a user author. We've already made the user field of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Message")," model nullable to support this scenario."),(0,r.kt)("p",null,"\ud83d\udca1 Pagination was left out of scope here - loading 100 rooms and 100 last messages in rooms. Ideally, we want to lazily load more items too (if scrolled to the end). The backend API implemented here already supports pagination, making it a nice challenge to add it to the app."),(0,r.kt)("p",null,"\ud83d\udca1 Display the number of users in the chat room who are currently online using Centrifugo ",(0,r.kt)("a",{parentName:"p",href:"/docs/server/presence"},"online presence"),". For rooms with many active members, consider using a parallel batch request to Centrifugo to get online presence or opt for an implementation using some approximation, like we provide in Centrifugo PRO ",(0,r.kt)("a",{parentName:"p",href:"/docs/pro/user_status"},"user status")," feature."),(0,r.kt)("p",null,"\ud83d\udca1 Save message delivery/read statuses to the application database and show them in the UI. On the chat list screen, highlight chat rooms with unread messages."),(0,r.kt)("p",null,"\ud83d\udca1 Add typing notifications for more interactivity. While this may seem simple, it's actually not \u2013 you have to think about debouncing and probably use room-specific channels for efficient publishing."),(0,r.kt)("p",null,"\ud83d\udca1 We are not handling errors everywhere on the client side to prevent further complexity in the tutorial. However, for production, proper error handling is necessary. The basic thing to do is to show an ",(0,r.kt)("inlineCode",{parentName:"p"},"Unrecoverable Error")," screen, which we already have for some errors in the example. Users can reload the page after encountering it to start from scratch."),(0,r.kt)("p",null,"\ud83d\udca1 Support markdown as message content and add the ability to attach media to messages. Remember that messages should only have a link to media files; do not attempt to pass file content over WebSocket."),(0,r.kt)("p",null,"\ud83d\udca1 Add push notifications to engage offline users to come back to the app or notify them about important messages, such as when someone mentions a user in the room. Centrifugo PRO provides a ",(0,r.kt)("a",{parentName:"p",href:"/docs/pro/push_notifications"},"push notifications API"),", but you can also use any third-party service."),(0,r.kt)("p",null,"\ud83d\udca1 There is one more possible issue in application state sync we've decided not to solve here \u2013 it may occur during the initial load of data from the backend upon page load. If a real-time message comes after the state is loaded but before a real-time subscription is established for the first time, the message won't be shown until page reload. There are multiple ways to fix this, such as establishing a real-time connection/subscription first and then loading the initial chat state and applying messages received while the state was loading. Or get stream top offset from Centrifigo history API before initial state load, then use it for the initial subscribe. Alternatively, silently re-sync the state in the background after setting up a real-time subscription to a personal channel."),(0,r.kt)("p",null,"\ud83d\udca1 Integrate with the ChatGPT API and introduce chatbots with AI skills. In this case, you may additionally send all the messages in chat rooms to Kafka to create an extensible chatbot platform that can be a completely isolated service from the chat core."),(0,r.kt)("p",null,"The possibilities are limitless!"))}m.isMDXComponent=!0}}]);