(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return j}));var l=a(3),n=a(7),b=(a(0),a(94)),r={slug:"/implementations",title:"Implementations",sidebar_label:"Implementations"},c={unversionedId:"implementations",id:"implementations",isDocsHomePage:!1,title:"Implementations",description:"Mandatory Core Protocol Features",source:"@site/../website-docs/implementations.md",slug:"/implementations",permalink:"/docs/implementations",editUrl:"https://github.com/rsocket/rsocket-website/edit/master/website-docs/../website-docs/implementations.md",version:"current",lastUpdatedBy:"Kevin Viglucci",lastUpdatedAt:1614261688,sidebar_label:"Implementations",sidebar:"docs",previous:{title:"Protocol",permalink:"/docs/protocol"}},o=[{value:"Mandatory Core Protocol Features",id:"mandatory-core-protocol-features",children:[]},{value:"Supported Core Protocol Features Matrix",id:"supported-core-protocol-features-matrix",children:[]}],i={toc:o};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(l.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"mandatory-core-protocol-features"},"Mandatory Core Protocol Features"),Object(b.b)("p",null,"Drivers are assumed to implement all core features defined in the ",Object(b.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/protocol"}),"Protocol")," document.\nThe core scope includes the following (and is not limited to) :"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Metadata and Payload frames"),Object(b.b)("li",{parentName:"ul"},"All 4 interaction models : Fire-and-forget, request/response, requestStream, requestChannel"),Object(b.b)("li",{parentName:"ul"},"Request-N frame : application level flow control"),Object(b.b)("li",{parentName:"ul"},"Fragmentation/Reassembly : Drivers are assumed to fully encode/decode the expected user data type"),Object(b.b)("li",{parentName:"ul"},"Keep-Alive frame : A responder receiving a keep-alive frame must reply a keep-alive frame"),Object(b.b)("li",{parentName:"ul"},"Error Frame : in order to fully support connection lifecycle"),Object(b.b)("li",{parentName:"ul"},"Handling the unexpected : If Resumption, Leasing or an extension is not supported, rejected error frames must be used")),Object(b.b)("h2",{id:"supported-core-protocol-features-matrix"},"Supported Core Protocol Features Matrix"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Driver"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Transport(s)"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Version"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Core Support"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Resumption"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"Leasing"),Object(b.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"RPC"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-java"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"aeron (UDP)"),Object(b.b)("li",null,"akka"),Object(b.b)("li",null,"reactor-netty ",Object(b.b)("br",null),"(TCP, websocket)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-js"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"nodejs net (TCP)"),Object(b.b)("li",null,"plain (websocket)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-net"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"System.Net ",Object(b.b)("br",null),"(TCP, websocket)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-cpp"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"Folly (TCP)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-go"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"Go NET (TCP)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-kotlin"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"ktor multiplatform",Object(b.b)("br",null),"(TCP, websocket)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"x"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"rsocket-py"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),Object(b.b)("ul",null,Object(b.b)("li",null,"asyncio (TCP)"))),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"1.0"),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(l.a)({parentName:"tr"},{align:null}))))))}j.isMDXComponent=!0}}]);