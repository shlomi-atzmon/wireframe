(this["webpackJsonpthe-game-wireframe"]=this["webpackJsonpthe-game-wireframe"]||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(13),i=c.n(n),r=c(8),j=c(3),d=c(9),l=c(20),o=c(10),b=c(1),m=["component"],u=function(e){var t=e.component,c=Object(l.a)(e,m),s=Object(o.c)((function(e){return e.auth.isSignedIn}));return Object(b.jsx)(j.b,Object(d.a)(Object(d.a)({},c),{},{render:function(e){return s?Object(b.jsx)(t,Object(d.a)({},e)):Object(b.jsx)(j.a,{to:{pathname:"/",state:{from:e.location}}})}}))},h=function(){var e=Object(o.c)((function(e){return e.auth.isSignedIn})),t=Object(o.b)();return Object(b.jsxs)("div",{className:"ui secondary menu",children:[Object(b.jsx)(r.b,{to:"/",className:"item",children:"The Game"}),Object(b.jsxs)("div",{className:"right menu",children:[Object(b.jsx)(r.b,{to:"/add-credit",className:"item",children:"Add Credit"}),Object(b.jsx)("div",{className:"item",children:"Balance: 100$"}),Object(b.jsx)(r.b,{to:"/dashboard",className:"item",onClick:function(){t({type:e?"SIGN_OUT":"SIGN_IN"})},children:e?"Sign Out":"Sign In"})]})]})},O=function(){return Object(b.jsxs)("div",{className:"ui text container",children:[Object(b.jsx)("h1",{className:"ui header",children:"World's leading platform for cyber security threat simulations"}),Object(b.jsx)("h2",{children:"Start creating amazing simulations with custom modules"}),Object(b.jsxs)(r.b,{to:"/pricing",className:"ui huge primary button",children:["Start Now ",Object(b.jsx)("i",{className:"right arrow icon"})]})]})},x=[{title:"Q1 activity 2021",description:"Last year's budget leftovers.",participants:100,modules:5,cost:"10,000",scheduled:"Mar 12, 2019",user:{name:"Monty",avatar:"https://semantic-ui.com/images/avatar/large/jenny.jpg"}},{title:"Passover activity 2019",description:"Heavy Meital stopped eating cakes so there was some money left in the cashbox.",participants:50,modules:10,cost:"50,000",scheduled:"Nov 2, 2020",user:{name:"Shlomi",avatar:"https://semantic-ui.com/images/avatar/large/steve.jpg"}}].map((function(e,t){return Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"right floated meta",children:Object(b.jsx)("i",{className:"info icon"})}),Object(b.jsx)("img",{className:"ui avatar image",src:e.user.avatar,alt:e.user.name})," ",e.user.name]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"meta",children:["Participants: ",e.participants]}),Object(b.jsxs)("div",{className:"meta",children:["Modules: ",e.modules]}),Object(b.jsx)("div",{className:"description",children:e.description})]}),Object(b.jsxs)("div",{className:"extra content",children:[Object(b.jsxs)("span",{children:["Cost \xb7 ",e.cost,"$"]}),Object(b.jsx)("span",{className:"right floated",children:Object(b.jsx)("span",{children:e.scheduled})})]})]},t)})),p=function(){return Object(b.jsx)("div",{className:"five wide column",children:x})},g=function(){return Object(b.jsxs)("div",{className:"eleven wide column",children:[Object(b.jsx)(r.b,{to:"/new-campaign",className:"ui purple basic button",children:"New Campaign"}),Object(b.jsx)("div",{className:"ui segment",children:"Dashboard Stats"})]})},v=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"ui grid",children:[Object(b.jsx)(p,{}),Object(b.jsx)(g,{})]})})},N=function(){return Object(b.jsx)("div",{children:"Add Credit"})},f=function(){return Object(b.jsx)("div",{children:"Pricing"})},y=function(){return Object(b.jsxs)("form",{className:"ui form",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Campaign title"}),Object(b.jsx)("input",{type:"text",name:"campaign-title",placeholder:"Campaign title"})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("input",{type:"text",name:"description",placeholder:"Description"})]}),Object(b.jsx)("button",{className:"ui left floated button",children:"Discard"}),Object(b.jsx)("button",{className:"ui right floated primary button",children:"Next"})]})},S=function(){return Object(b.jsx)("div",{className:"ui container",children:Object(b.jsxs)(r.a,{basename:"/wireframe",children:[Object(b.jsx)(h,{}),Object(b.jsxs)(j.d,{children:[Object(b.jsx)(j.b,{path:"/",exact:!0,component:O}),Object(b.jsx)(u,{path:"/dashboard",component:v}),Object(b.jsx)(u,{path:"/add-credit",component:N}),Object(b.jsx)(j.b,{path:"/pricing",component:f}),Object(b.jsx)(u,{path:"/new-campaign",component:y}),Object(b.jsx)(j.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))},I=c(15),C={isSignedIn:null},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!0});case"SIGN_OUT":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!1});default:return e}},T=Object(I.a)({auth:D}),F=Object(I.b)(T,{});i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(o.a,{store:F,children:Object(b.jsx)(S,{})})}),document.getElementById("root")),w()}},[[31,1,2]]]);
//# sourceMappingURL=main.62a6899f.chunk.js.map