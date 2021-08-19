(this["webpackJsonpthe-game-wireframe"]=this["webpackJsonpthe-game-wireframe"]||[]).push([[0],{201:function(e,t){},202:function(e,t){},203:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(38),n=c.n(a),l=(c(91),c(8)),r=c(7),d=c(11),j=c(85),o=c(10),b=c(0),h=["component"],m=function(e){var t=e.component,c=Object(j.a)(e,h),s=Object(o.c)((function(e){return e.auth.isSignedIn}));return Object(b.jsx)(r.b,Object(d.a)(Object(d.a)({},c),{},{render:function(e){return s?Object(b.jsx)(t,Object(d.a)({},e)):Object(b.jsx)(r.a,{to:{pathname:"/",state:{from:e.location}}})}}))},u=function(){var e=Object(o.c)((function(e){return e.auth.isSignedIn})),t=Object(o.b)();return Object(b.jsx)("div",{className:"ui menu",children:Object(b.jsxs)("div",{className:"ui container site-header",children:[Object(b.jsx)(l.b,{to:e?"/dashboard":"/",className:"item",children:"Cynario"}),Object(b.jsxs)("div",{className:"right menu",children:[e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{to:"/add-credit",className:"item",children:"Add Credit"}),Object(b.jsx)("div",{className:"item",children:"Balance: 100$"})]}),Object(b.jsx)(l.b,{to:"/dashboard",className:"item",onClick:function(){t({type:e?"SIGN_OUT":"SIGN_IN"})},children:e?"Sign Out":"Sign In"})]})]})})},O=function(){return Object(b.jsxs)("div",{className:"ui center aligned header",children:[Object(b.jsx)("h1",{className:"ui header",children:"World's leading platform for cyber security threat simulations"}),Object(b.jsx)("h2",{children:"Start creating amazing simulations with custom modules"}),Object(b.jsxs)(l.b,{to:"/pricing",className:"ui huge primary button",children:["Start Now ",Object(b.jsx)("i",{className:"right arrow icon"})]})]})},x=function(){var e=Object(o.c)((function(e){return e.campaigns}));return Object.values(e).map((function(e,t){return Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"right floated meta",children:Object(b.jsx)("i",{className:"info icon"})}),Object(b.jsx)("img",{className:"ui avatar image",src:e.user.avatar,alt:e.user.name})," ",e.user.name]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"meta",children:["Participants: ",e.participants]}),Object(b.jsxs)("div",{className:"meta",children:["Modules: ",e.modules]}),Object(b.jsx)("div",{className:"description",children:e.description})]}),Object(b.jsxs)("div",{className:"extra content",children:[Object(b.jsxs)("span",{children:["Cost \xb7 ",e.cost,"$"]}),Object(b.jsx)("span",{className:"right floated",children:Object(b.jsx)("span",{children:e.scheduled})})]})]},t)}))},p=function(){return Object(b.jsxs)("div",{class:"ui two cards",children:[Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"26"}),Object(b.jsx)("div",{className:"label",children:"Open tickets"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"12"}),Object(b.jsx)("div",{className:"label",children:"Closes tickets"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"104"}),Object(b.jsx)("div",{className:"label",children:"New Campaigners"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"57%"}),Object(b.jsx)("div",{className:"label",children:"Pass"})]})})]})},N=function(){return Object(b.jsxs)("div",{className:"ui grid",children:[Object(b.jsx)("div",{className:"sixteen wide column",children:Object(b.jsx)(l.b,{to:"/new-campaign",className:"ui right floated purple basic button",children:"New Campaign"})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)("div",{class:"ui cards",children:Object(b.jsx)(x,{})})}),Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(p,{})})]})},g=function(e){var t=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"ui center aligned middle grid",children:Object(b.jsx)("div",{className:"column",style:{maxWidth:"600px"},children:t})})})},v=function(){return Object(b.jsx)(g,{children:Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add Credit"})})},f=function(){return Object(b.jsx)(g,{children:Object(b.jsx)("h2",{className:"ui center aligned header",children:"Pricing"})})},y=c(17),w=c(86),S=c(43),P=function(e){var t=e.type,c=e.children,s=t?"success":"error";return Object(b.jsx)("p",{className:s,children:c})},I=Object(S.a)().shape({title:Object(S.b)().max(60,"It's a very long name").required("Title is required"),description:Object(S.b)().required("Description is required")}),M=function(){var e,t,c=Object(o.b)(),s=Object(r.g)(),i=Object(y.d)({mode:"onBlur",resolver:Object(w.a)(I)}),a=i.register,n=i.handleSubmit,j=i.formState.errors;return Object(b.jsxs)(g,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add a new campaign"}),Object(b.jsxs)("form",{onSubmit:n((function(e){e.user={name:"Eyal",avatar:"https://semantic-ui.com/images/avatar/small/elliot.jpg"},e.scheduled=function(){var e=new Date;return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}(),c({type:"NEW_CAMPAING",payload:e}),s.push("./add-recipients")})),className:"ui large form",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Campaign title"}),Object(b.jsx)("input",Object(d.a)({type:"text",autoComplete:"off",placeholder:"Campaign title"},a("title"))),Object(b.jsx)(P,{type:!1,children:null===(e=j.title)||void 0===e?void 0:e.message})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("textarea",Object(d.a)({placeholder:"Tell us more...",rows:"3"},a("description"))),Object(b.jsx)(P,{type:!1,children:null===(t=j.description)||void 0===t?void 0:t.message})]}),Object(b.jsx)(l.b,{to:"/dashboard",className:"ui left floated secondary basic button",children:"Discard"}),Object(b.jsx)("button",{className:"ui right floated primary basic button",type:"submit",children:"Next"})]})]})},A=c(12),C=c(58),D=function(){var e=Object(s.useState)(!0),t=Object(A.a)(e,2),c=t[0],i=t[1],a=Object(o.b)(),n=Object(r.g)(),d=Object(y.d)().handleSubmit,j=function(e){e.forEach((function(e){console.log(e)}))};return Object(b.jsxs)(g,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add Recipients"}),Object(b.jsxs)("form",{onSubmit:d((function(){a({type:"ADD_RECIPIENTS",payload:{participants:3}}),n.push("./add-modules")})),className:"ui large form",children:[Object(b.jsx)("div",{className:"field",children:c?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"ui celled table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"First Name"}),Object(b.jsx)("th",{children:"Last Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Mobile"}),Object(b.jsx)("th",{children:"action"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"1"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Monty"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Alon"}),Object(b.jsx)("td",{"data-label":"Age",children:"alonmo@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0526344250"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"2"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Shlomi"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Atzmon"}),Object(b.jsx)("td",{"data-label":"Age",children:"shlomiatzmon82@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0546535023"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"3"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Eyal"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Fisher"}),Object(b.jsx)("td",{"data-label":"Age",children:"fisher.eyal@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0544684772"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]})]})]}),Object(b.jsx)("div",{children:"Total recipients: 3"})]})}),Object(b.jsx)(l.b,{to:"/new-campaign",className:"ui left floated secondary basic button",children:"Back"}),c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"file",id:"files",style:{display:"none"},name:"recipients",onChange:function(e){!function(e){var t=e.target.files[0],c=new FileReader;c.onload=function(e){var t=C.read(e.target.result,{type:"binary"}),c=t.SheetNames[0],s=t.Sheets[c],i=C.utils.sheet_to_json(s,{header:1});j(i)},c.readAsBinaryString(t),i(!1)}(e)}}),Object(b.jsx)("label",{className:"ui right floated purple basic button",htmlFor:"files",children:"Upload Recipients"})]}):Object(b.jsx)("button",{style:{marginRight:"-35px"},className:"ui right floated primary basic button",type:"submit",children:"Next"})]})]})},F={1:{title:"Introdution",duration:"10",costPerRecipient:"0"}},R={1:{title:"Session Hijacking",duration:"10",costPerRecipient:"4"},2:{title:"IP Spoofing",duration:"12",costPerRecipient:"6"},3:{title:"DDos",duration:"30",costPerRecipient:"15"},4:{title:"Man In The Middle",duration:"11",costPerRecipient:"7"},5:{title:"Phishing",duration:"3",costPerRecipient:"3"},6:{title:"Ransomware",duration:"6",costPerRecipient:"17"},7:{title:"Attack On IoT Devices",duration:"23 Min",costPerRecipient:"25"},8:{title:"Malware On Mobile",duration:"13 Min",costPerRecipient:"22"},9:{title:"Password Attack",duration:"17 Min",costPerRecipient:"13"}},k=function(){var e=Object(o.b)(),t=Object(r.g)(),c=function(e){return Object.values(e).map((function(e,t){return Object(b.jsx)("div",{className:"ui fluid card",children:Object(b.jsxs)("div",{className:"content center aligned",children:[Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"description",children:["Playing Time ",Object(b.jsxs)("b",{children:[e.duration," Min"]})]}),Object(b.jsxs)("div",{className:"description",children:["Cost Per Recipient ",Object(b.jsxs)("b",{children:[e.costPerRecipient,"$"]})]})]})},t)}))};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add Modules"}),Object(b.jsxs)("div",{className:"ui grid",children:[Object(b.jsxs)("div",{className:"sixteen column row",children:[Object(b.jsx)("div",{className:"four wide column"}),Object(b.jsxs)("div",{className:"three wide column",children:[Object(b.jsx)("h3",{className:"ui center aligned header",children:"Your Campaign"}),Object(b.jsx)("div",{className:"ui middle aligned list",children:c(F)})]}),Object(b.jsx)("div",{className:"two wide column"}),Object(b.jsxs)("div",{className:"three wide column",children:[Object(b.jsx)("h3",{className:"ui center aligned header",children:"Threat Modules"}),Object(b.jsx)("div",{className:"ui middle aligned list",children:c(R)})]}),Object(b.jsx)("div",{className:"foue wide column"})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"seven wide column",children:Object(b.jsx)(l.b,{to:"/add-recipients",className:"ui right floated secondary basic button",children:"Back"})}),Object(b.jsx)("div",{className:"two wide column"}),Object(b.jsx)("div",{className:"seven wide column",children:Object(b.jsx)("button",{onClick:function(){e({type:"ADD_MODULES",payload:{modules:5,cost:"5,000"}}),t.push("./schedule-campaign")},className:"ui primary basic button",type:"button",children:"Next"})})]})]})]})},T=function(){var e=Object(o.c)((function(e){var t=e.campaigns;return Object.values(t)[Object.keys(t).length-1]}));return Object(b.jsxs)(g,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Campaign Details"}),Object(b.jsxs)("form",{className:"ui large form",children:[Object(b.jsxs)("div",{className:"ui segments",children:[Object(b.jsxs)("div",{className:"ui segment",children:[e.title," campaign"]}),Object(b.jsxs)("div",{className:"ui red segment",children:[e.participants," Recipients"]}),Object(b.jsxs)("div",{className:"ui violet segment",children:[e.modules," Modules Selected"]}),Object(b.jsxs)("div",{className:"ui purple segment",children:["Total Cost ",e.cost]}),Object(b.jsxs)("div",{className:"ui teal segment",children:["Schedule at ",e.scheduled]})]}),Object(b.jsx)(l.b,{to:"/add-modules",className:"ui left floated secondary basic button",children:"Back"}),Object(b.jsx)(l.b,{to:"/dashboard",className:"ui right floated primary basic button",children:"Attack!"})]})]})},E=function(){return Object(b.jsx)("div",{className:"ui Fluid",children:Object(b.jsxs)(l.a,{basename:"/wireframe",children:[Object(b.jsx)(u,{}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",exact:!0,component:O}),Object(b.jsx)(m,{path:"/dashboard",component:N}),Object(b.jsx)(m,{path:"/add-credit",component:v}),Object(b.jsx)(r.b,{path:"/pricing",component:f}),Object(b.jsx)(m,{path:"/new-campaign",component:M}),Object(b.jsx)(m,{path:"/add-recipients",component:D}),Object(b.jsx)(m,{path:"/add-modules",component:k}),Object(b.jsx)(m,{path:"/schedule-campaign",component:T}),Object(b.jsx)(r.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})]})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,204)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,a=t.getLCP,n=t.getTTFB;c(e),s(e),i(e),a(e),n(e)}))},L=c(41),B={isSignedIn:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!0});case"SIGN_OUT":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!1});default:return e}},z=c(19),G=c(42),U=c.n(G),q={1:{title:"Q1 activity 2021",description:"Last year's budget leftovers.",participants:100,modules:5,cost:"10,000",scheduled:"Mar 12, 2019",user:{name:"Monty",avatar:"https://semantic-ui.com/images/avatar/small/jenny.jpg"}},2:{title:"Passover activity 2019",description:"Heavy Meital stopped eating cakes so there was some money left in the cashbox.",participants:50,modules:10,cost:"50,000",scheduled:"Nov 2, 2020",user:{name:"Shlomi",avatar:"https://semantic-ui.com/images/avatar/small/steve.jpg"}}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_CAMPAING":return Object(d.a)(Object(d.a)({},e),{},Object(z.a)({},U.a.size(Object.keys(e))+1,t.payload));case"ADD_RECIPIENTS":var c=U.a.size(Object.keys(e));return Object.assign(e[c],t.payload),Object(d.a)({},e);case"ADD_MODULES":var s=U.a.size(Object.keys(e));return Object.assign(e[s],t.payload),Object(d.a)({},e);default:return e}},$=Object(L.a)({auth:J,campaigns:W}),H=Object(L.b)($,{});n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(o.a,{store:H,children:Object(b.jsx)(E,{})})}),document.getElementById("root")),_()},81:function(e,t){},91:function(e,t,c){}},[[203,1,2]]]);
//# sourceMappingURL=main.7b61260d.chunk.js.map