"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[923],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6575:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={slug:"/guides/rsocket-py/client",title:"RSocketClient - rsocket-py",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"guides/rsocket-py/client/introduction",id:"guides/rsocket-py/client/introduction",isDocsHomePage:!1,title:"RSocketClient - rsocket-py",description:"An rsocket-py client can be used to communicate with any RSocket Server implemented against the same protocol version as the client,",source:"@site/content-docs/guides/rsocket-py/client/introduction.mdx",sourceDirName:"guides/rsocket-py/client",slug:"/guides/rsocket-py/client",permalink:"/guides/rsocket-py/client",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/content-docs/guides/rsocket-py/client/introduction.mdx",tags:[],version:"current",lastUpdatedBy:"Gabriel Shaar",lastUpdatedAt:1643971390,formattedLastUpdatedAt:"2/4/2022",frontMatter:{slug:"/guides/rsocket-py/client",title:"RSocketClient - rsocket-py",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Introduction",permalink:"/guides/rsocket-py"},next:{title:"TCP Client",permalink:"/guides/rsocket-py/client/rsocket-tcp-client"}},p=[{value:"Client Quick Start Example",id:"client-quick-start-example",children:[]},{value:"Client API",id:"client-api",children:[]},{value:"RSocketClient (class)",id:"rsocketclient-class",children:[{value:"constructor (function)",id:"constructor-function",children:[]},{value:"connect() (method)",id:"connect-method",children:[]}]},{value:"RSocket (interface)",id:"rsocket-interface",children:[{value:"fire_and_forget() (method)",id:"fire_and_forget-method",children:[]},{value:"request_response() (method)",id:"request_response-method",children:[]},{value:"request_stream() (method)",id:"request_stream-method",children:[]},{value:"requestChannel() (method)",id:"requestchannel-method",children:[]},{value:"metadata_push() (method)",id:"metadata_push-method",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," client can be used to communicate with any RSocket Server implemented against the same protocol version as the client,\nand which implements the same transport as the client."),(0,o.kt)("p",null,"Available network transports for ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," client include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"TCP - available by default"),(0,o.kt)("li",{parentName:"ul"},"Websocket (aiohttp)")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocketClient")," class should be passed an instance of one of the available transports."),(0,o.kt)("p",null,"To get started creating an RSocket client, you will need to install the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/rsocket/"},"rsocket")," package,\nand at least one transport protocol implementation (TCP available by default)."),(0,o.kt)("h3",{id:"client-quick-start-example"},"Client Quick Start Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install rsocket-core rsocket-websocket-client\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"import asyncio\nfrom rsocket.rsocket_client import RSocketClient\nfrom rsocket.transports.tcp import TransportTCP\n\nasync def main():\n    connection = await asyncio.open_connection('localhost', 6565)\n\n    async with RSocketClient(TransportTCP(*connection)) as client:\n        ... # Execute requests\n\nif __name__ == '__main__':\n    asyncio.run(main())\n")),(0,o.kt)("h2",{id:"client-api"},"Client API"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rsocket-py")," package exposes the following types:"),(0,o.kt)("h2",{id:"rsocketclient-class"},"RSocketClient (class)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RSocketClient")," is used to create an instance of a client. The clients' connection does not initialize until\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," method is invoked, or it is used as a context-manager."),(0,o.kt)("h3",{id:"constructor-function"},"constructor (function)"),(0,o.kt)("h4",{id:"serializers-property"},"serializers (property)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"metadata")," of each payload are passed through to the\ntransport layer as-is. This is appropriate for sending/receiving strings/binary."),(0,o.kt)("h4",{id:"transport-property"},"transport (property)"),(0,o.kt)("p",null,"This will typically be an instance conforming to the API of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transport")," class."),(0,o.kt)("h3",{id:"connect-method"},"connect() (method)"),(0,o.kt)("p",null,"This method opens the connection to the peer. Internally this calls ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," on the\ntransport client. See below for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RSocket")," interface."),(0,o.kt)("h2",{id:"rsocket-interface"},"RSocket (interface)"),(0,o.kt)("p",null,"This interface represents an instance of a rsocket peer-to-peer connection, providing the five\ncore interactions (fire/forget, request/response, etc.):"),(0,o.kt)("h3",{id:"fire_and_forget-method"},"fire_and_forget() (method)"),(0,o.kt)("p",null,"This method sends data/metadata to the server without waiting for a response. The data is\nsent immediately."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\n\ndef fire_and_forget(self, payload: Payload):\n    ...\n")),(0,o.kt)("h3",{id:"request_response-method"},"request_response() (method)"),(0,o.kt)("p",null,"This method sends data/metadata to the server, which returns a single response. The data is\nsent lazily when the returned ",(0,o.kt)("inlineCode",{parentName:"p"},"Future")," is resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from rsocket.payload import Payload\nfrom asyncio import Future\n\ndef request_response(self, payload: Payload) -> Future:\n    ...\n")),(0,o.kt)("h3",{id:"request_stream-method"},"request_stream() (method)"),(0,o.kt)("p",null,"This method sends data/metadata to the server, which returns a stream of responses. The semantics\nof the stream are application-specific. For example, the stream may represent\nupdates to a single conceptual value over time, items in an incrementally loaded\nlist, events, etc. The data is sent to the peer lazily when the returned\n",(0,o.kt)("inlineCode",{parentName:"p"},"Publisher")," is subscribed to and ",(0,o.kt)("inlineCode",{parentName:"p"},"request(n)")," is called to signal demand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Union\n\nfrom reactivestreams.publisher import Publisher\nfrom rsocket.payload import Payload\nfrom rsocket.streams.stream import Stream\n\ndef request_stream(self, payload: Payload) -> Union[Stream, Publisher]:\n    ...\n")),(0,o.kt)("h3",{id:"requestchannel-method"},"requestChannel() (method)"),(0,o.kt)("p",null,"This method establishes an understanding between a client and a server where each intends to send and receive streams\nof data from the other. Each actor in this relationship is responsible for signaling to the other that they are ready\nto receive data by invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"request(n)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is the max number of payloads the actor is comfortable handling.\nConceptually, ",(0,o.kt)("inlineCode",{parentName:"p"},"request_channel")," can be thought of as two entities 'polling' from each other by signaling to the others\nthat they are ready to accept ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," number of messages. Inversely, ",(0,o.kt)("inlineCode",{parentName:"p"},"request_channel")," can be leveraged to facilitate\na consistent stream of data transfer payloads between client and server by each (or either)\ninvoking ",(0,o.kt)("inlineCode",{parentName:"p"},"request(0x7fffffff)"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"0x7fffffff")," is the max integer value for ",(0,o.kt)("inlineCode",{parentName:"p"},"int32"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from typing import Union, Optional\n\nfrom reactivestreams.publisher import Publisher\nfrom rsocket.payload import Payload\nfrom rsocket.streams.stream import Stream\n\ndef request_channel(self, payload: Payload, publisher: Optional[Publisher] = None) -> Union[Stream, Publisher]:\n    ...\n")),(0,o.kt)("h3",{id:"metadata_push-method"},"metadata_push() (method)"),(0,o.kt)("p",null,"This method sends metadata only to the server without waiting for a response. The payload is\nsent immediately. This method is not for the direct application usage and should be used to exchange some service level information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def metadata_push(self, metadata: bytes):\n    ...\n")))}m.isMDXComponent=!0}}]);