(self.webpackChunk=self.webpackChunk||[]).push([[381],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),k=l(r),d=o,v=k["".concat(i,".").concat(d)]||k[d]||u[d]||s;return r?n.createElement(v,c(c({ref:t},p),{},{components:r})):n.createElement(v,c({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,c=new Array(s);c[0]=k;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<s;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},2670:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>c,metadata:()=>a,toc:()=>i,default:()=>p});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),c={slug:"/guides/rsocket-js/server/rsocket-websocket-server",title:"RSocketWebSocketServer - rsocket-js",sidebar_label:"WebSocket Server"},a={unversionedId:"guides/rsocket-js/server/rsocket-websocket-server",id:"guides/rsocket-js/server/rsocket-websocket-server",isDocsHomePage:!1,title:"RSocketWebSocketServer - rsocket-js",description:"Getting Started",source:"@site/content-docs/guides/rsocket-js/server/rsocket-websocket-server.mdx",sourceDirName:"guides/rsocket-js/server",slug:"/guides/rsocket-js/server/rsocket-websocket-server",permalink:"/guides/rsocket-js/server/rsocket-websocket-server",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-js/server/rsocket-websocket-server.mdx",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1622083488,formattedLastUpdatedAt:"5/27/2021",sidebar_label:"WebSocket Server",frontMatter:{slug:"/guides/rsocket-js/server/rsocket-websocket-server",title:"RSocketWebSocketServer - rsocket-js",sidebar_label:"WebSocket Server"},sidebar:"docs",previous:{title:"RSocketTCPServer - rsocket-js",permalink:"/guides/rsocket-js/server/rsocket-tcp-server"},next:{title:"rsocket-flowable",permalink:"/guides/rsocket-js/rsocket-flowable"}},i=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)("p",null,"TODO"),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"npm install rsocket-core rsocket-websocket-server rsocket-flowable\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { RSocketServer } = require('rsocket-core');\nconst RSocketWebSocketServer = require('rsocket-websocket-server');\nconst { Single } = require('rsocket-flowable');\n\nconst WebSocketTransport = RSocketWebSocketServer.default;\n\nconst host = '127.0.0.1';\nconst port = 3000;\n\nconst transportOpts = {\n  host: host,\n  port: port,\n};\n\nconst transport = new WebSocketTransport(transportOpts);\n\nconst rSocketServer = new RSocketServer({\n  transport,\n  getRequestHandler: function () {\n    ...\n  },\n});\n\nrSocketServer.start();\n")))}p.isMDXComponent=!0}}]);