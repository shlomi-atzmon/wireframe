(this["webpackJsonpthe-game-wireframe"]=this["webpackJsonpthe-game-wireframe"]||[]).push([[0],{202:function(e,t){},203:function(e,t){},204:function(e,t,a){"use strict";a.r(t);var c=a(0),i=a.n(c),s=a(26),n=a.n(s),l=(a(92),a(11)),r=a(9),d=a(3),j=a(86),o=a(8),b=a(1),m=["component"],h=function(e){var t=e.component,a=Object(j.a)(e,m),c=Object(o.d)((function(e){return e.auth.isSignedIn}));return Object(b.jsx)(r.b,Object(d.a)(Object(d.a)({},a),{},{render:function(e){return c?Object(b.jsx)(t,Object(d.a)({},e)):Object(b.jsx)(r.a,{to:{pathname:"/",state:{from:e.location}}})}}))},u=function(){var e=Object(o.d)((function(e){return e.auth.isSignedIn})),t=Object(o.c)();return Object(b.jsx)("div",{className:"ui menu",children:Object(b.jsxs)("div",{className:"ui container site-header",children:[Object(b.jsx)(l.b,{to:e?"/dashboard":"/",className:"item",children:"Cynario"}),Object(b.jsxs)("div",{className:"right menu",children:[e&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(l.b,{to:"/add-credit",className:"item",children:"Add Credit"}),Object(b.jsx)("div",{className:"item",children:"Balance: 100$"})]}),Object(b.jsx)(l.b,{to:"/dashboard",className:"item",onClick:function(){t({type:e?"SIGN_OUT":"SIGN_IN"})},children:e?"Sign Out":"Sign In"})]})]})})},O=function(){return Object(b.jsxs)("div",{className:"ui center aligned header",children:[Object(b.jsx)("h1",{className:"ui header",children:"World's leading platform for cyber security threat simulations"}),Object(b.jsx)("h2",{children:"Start creating amazing simulations with custom modules"}),Object(b.jsxs)(l.b,{to:"/pricing",className:"ui huge primary button",children:["Start Now ",Object(b.jsx)("i",{className:"right arrow icon"})]})]})},p=function(){var e=Object(o.d)((function(e){return e.campaigns}));return Object.values(e).map((function(e,t){return Object(b.jsxs)("div",{className:"ui fluid card",children:[Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"right floated meta",children:Object(b.jsx)("i",{className:"info icon"})}),Object(b.jsx)("img",{className:"ui avatar image",src:e.user.avatar,alt:e.user.name})," ",e.user.name]}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"meta",children:["Participants: ",e.participants]}),Object(b.jsxs)("div",{className:"meta",children:["Modules: ",e.modules]}),Object(b.jsx)("div",{className:"description",children:e.description})]}),Object(b.jsxs)("div",{className:"extra content",children:[Object(b.jsxs)("span",{children:["Cost \xb7 ",e.cost,"$"]}),Object(b.jsx)("span",{className:"right floated",children:Object(b.jsx)("span",{children:e.scheduled})})]})]},t)}))},x=function(){return Object(b.jsxs)("div",{className:"ui two cards",children:[Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"26"}),Object(b.jsx)("div",{className:"label",children:"Open tickets"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"12"}),Object(b.jsx)("div",{className:"label",children:"Closes tickets"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"104"}),Object(b.jsx)("div",{className:"label",children:"New Campaigners"})]})}),Object(b.jsx)("div",{className:"card",children:Object(b.jsxs)("div",{className:"ui statistic",children:[Object(b.jsx)("div",{className:"value",children:"57%"}),Object(b.jsx)("div",{className:"label",children:"Pass"})]})})]})},g=function(){return Object(b.jsxs)("div",{className:"ui grid",children:[Object(b.jsx)("div",{className:"sixteen wide column",children:Object(b.jsx)(l.b,{to:"/new-campaign",className:"ui right floated purple basic button",children:"New Campaign"})}),Object(b.jsx)("div",{className:"five wide column",children:Object(b.jsx)("div",{className:"ui cards",children:Object(b.jsx)(p,{})})}),Object(b.jsx)("div",{className:"eleven wide column",children:Object(b.jsx)(x,{})})]})},v=function(e){var t=e.children;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"ui center aligned middle grid",children:Object(b.jsx)("div",{className:"column",style:{maxWidth:"600px"},children:t})})})},N=function(){return Object(b.jsx)(v,{children:Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add Credit"})})},f=function(){return Object(b.jsx)(v,{children:Object(b.jsx)("h2",{className:"ui center aligned header",children:"Pricing"})})},y=a(18),I=["https://semantic-ui.com/images/avatar/small/jenny.jpg","https://semantic-ui.com/images/avatar/small/steve.jpg","https://semantic-ui.com/images/avatar/small/elliot.jpg","https://semantic-ui.com/images/avatar2/small/kristy.png","https://semantic-ui.com/images/avatar2/small/matthew.png","https://semantic-ui.com/images/avatar2/small/molly.png","https://semantic-ui.com/images/avatar2/small/elyse.png","https://semantic-ui.com/images/avatar/small/daniel.jpg","https://semantic-ui.com/images/avatar/small/helen.jpg"],w=["Eyal","Liam","Olivia","Noah","Emma","Oliver","Ava","Elijah","Charlotte","Sophia","James","Amelia","Benjamin","Isabella","Lucas","Mia","Henry","Evelyn","Alexander","Harper"],S={name:w[Math.floor(Math.random()*w.length)],avatar:I[Math.floor(Math.random()*I.length)]},C=a(87),M=a(42),P=function(e){var t=e.type,a=e.children,c=t?"success":"error";return Object(b.jsx)("p",{className:c,children:a})},A=Object(M.a)().shape({title:Object(M.b)().max(60,"It's a very long name").required("Title is required"),description:Object(M.b)().required("Description is required")}),D=function(){var e,t,a=Object(o.c)(),c=Object(r.g)(),i=Object(y.d)({mode:"onBlur",resolver:Object(C.a)(A)}),s=i.register,n=i.handleSubmit,j=i.formState.errors;return Object(b.jsxs)(v,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add a new campaign"}),Object(b.jsxs)("form",{onSubmit:n((function(e){e.user=S,e.scheduled=function(){var e=new Date;return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}(),a({type:"NEW_CAMPAING",payload:e}),c.push("./add-recipients")})),className:"ui large form",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Campaign title"}),Object(b.jsx)("input",Object(d.a)({type:"text",autoComplete:"off",placeholder:"Campaign title"},s("title"))),Object(b.jsx)(P,{type:!1,children:null===(e=j.title)||void 0===e?void 0:e.message})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Description"}),Object(b.jsx)("textarea",Object(d.a)({placeholder:"Tell us more...",rows:"3"},s("description"))),Object(b.jsx)(P,{type:!1,children:null===(t=j.description)||void 0===t?void 0:t.message})]}),Object(b.jsx)(l.b,{to:"/dashboard",className:"ui left floated secondary basic button",children:"Discard"}),Object(b.jsx)("button",{className:"ui right floated primary basic button",type:"submit",children:"Next"})]})]})},R=a(10),F=a(58),k=function(){var e=Object(c.useState)(!0),t=Object(R.a)(e,2),a=t[0],i=t[1],s=Object(o.c)(),n=Object(r.g)(),d=Object(y.d)().handleSubmit,j=function(e){e.forEach((function(e){console.log(e)}))};return Object(b.jsxs)(v,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Add Recipients"}),Object(b.jsxs)("form",{onSubmit:d((function(){s({type:"ADD_RECIPIENTS",payload:{participants:3}}),n.push("./add-modules")})),className:"ui large form",children:[Object(b.jsx)("div",{className:"field",children:a?null:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"ui celled table",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:"First Name"}),Object(b.jsx)("th",{children:"Last Name"}),Object(b.jsx)("th",{children:"Email"}),Object(b.jsx)("th",{children:"Mobile"}),Object(b.jsx)("th",{children:"action"})]})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"1"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Monty"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Alon"}),Object(b.jsx)("td",{"data-label":"Age",children:"alonmo@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0526344250"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"2"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Shlomi"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Atzmon"}),Object(b.jsx)("td",{"data-label":"Age",children:"shlomiatzmon82@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0546535023"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]}),Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"3"}),Object(b.jsx)("td",{"data-label":"First-Name",children:"Eyal"}),Object(b.jsx)("td",{"data-label":"Last-Name",children:"Fisher"}),Object(b.jsx)("td",{"data-label":"Age",children:"fisher.eyal@gmail.com"}),Object(b.jsx)("td",{"data-label":"Job",children:"0544684772"}),Object(b.jsxs)("td",{className:"center aligned",children:[Object(b.jsx)("i",{className:"edit outline icon"}),Object(b.jsx)("i",{className:"trash alternate outline icon"})]})]})]})]}),Object(b.jsx)("div",{children:"Total recipients: 3"})]})}),Object(b.jsx)(l.b,{to:"/new-campaign",className:"ui left floated secondary basic button",children:"Back"}),a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{type:"file",id:"files",style:{display:"none"},name:"recipients",onChange:function(e){!function(e){var t=e.target.files[0],a=new FileReader;a.onload=function(e){var t=F.read(e.target.result,{type:"binary"}),a=t.SheetNames[0],c=t.Sheets[a],i=F.utils.sheet_to_json(c,{header:1});j(i)},a.readAsBinaryString(t),i(!1)}(e)}}),Object(b.jsx)("label",{className:"ui right floated purple basic button",htmlFor:"files",children:"Upload Recipients"})]}):Object(b.jsx)("button",{style:{marginRight:"-35px"},className:"ui right floated primary basic button",type:"submit",children:"Next"})]})]})},E=a(16),T=a(4),_=a(43),B=a(206),L={0:{name:"Your Campaign",items:[{id:Object(B.a)(),title:"Introdution",duration:"10",costPerRecipient:"0"}]},1:{name:"Threat Modules",items:[{id:Object(B.a)(),title:"Session Hijacking",duration:"10",costPerRecipient:"4"},{id:Object(B.a)(),title:"IP Spoofing",duration:"12",costPerRecipient:"6"},{id:Object(B.a)(),title:"DDos",duration:"30",costPerRecipient:"15"},{id:Object(B.a)(),title:"Man In The Middle",duration:"11",costPerRecipient:"7"},{id:Object(B.a)(),title:"Phishing",duration:"3",costPerRecipient:"3"},{id:Object(B.a)(),title:"Ransomware",duration:"6",costPerRecipient:"17"},{id:Object(B.a)(),title:"Attack On IoT Devices",duration:"23 Min",costPerRecipient:"25"},{id:Object(B.a)(),title:"Malware On Mobile",duration:"13 Min",costPerRecipient:"22"},{id:Object(B.a)(),title:"Password Attack",duration:"17 Min",costPerRecipient:"13"}]}},J=function(){var e=Object(o.c)(),t=Object(r.g)(),a=Object(c.useState)(L),i=Object(R.a)(a,2),s=i[0],n=i[1],j=Object(c.useState)({modules:1,cost:0}),m=Object(R.a)(j,2),h=m[0],u=m[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"100%"},children:Object(b.jsx)(_.a,{onDragEnd:function(e){return function(e,t,a,c){if(e.destination){var i=e.source,s=e.destination;if(i.droppableId!==s.droppableId){var n,l=t[i.droppableId],r=t[s.droppableId],j=Object(T.a)(l.items),o=Object(T.a)(r.items),b=j.splice(i.index,1),m=Object(R.a)(b,1)[0];o.splice(s.index,0,m);var h=0,u="0"===s.droppableId?Object(d.a)({},o):Object(d.a)({},j),O="0"===s.droppableId?o.length:j.length;for(var p in u)h+=3*u[p].costPerRecipient;c({modules:O,cost:h}),a(Object(d.a)(Object(d.a)({},t),{},(n={},Object(E.a)(n,i.droppableId,Object(d.a)(Object(d.a)({},l),{},{items:j})),Object(E.a)(n,s.droppableId,Object(d.a)(Object(d.a)({},r),{},{items:o})),n)))}else{var x=t[i.droppableId],g=Object(T.a)(x.items),v=g.splice(i.index,1),N=Object(R.a)(v,1)[0];g.splice(s.index,0,N),a(Object(d.a)(Object(d.a)({},t),{},Object(E.a)({},i.droppableId,Object(d.a)(Object(d.a)({},x),{},{items:g}))))}}}(e,s,n,u)},children:Object.entries(s).map((function(e,t){var a=Object(R.a)(e,2),c=a[0],i=a[1];return Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(b.jsx)("h2",{children:i.name}),Object(b.jsx)("div",{style:{margin:8},children:Object(b.jsx)(_.c,{droppableId:c,children:function(e,t){return Object(b.jsxs)("div",Object(d.a)(Object(d.a)({},e.droppableProps),{},{ref:e.innerRef,style:{padding:4,width:250,minHeight:500},children:[i.items.map((function(e,t){return Object(b.jsx)(_.b,{draggableId:e.id,index:t,children:function(a,c){return Object(b.jsx)("div",Object(d.a)(Object(d.a)(Object(d.a)({ref:a.innerRef},a.draggableProps),a.dragHandleProps),{},{style:Object(d.a)({userSelect:"none",padding:16,margin:"0 0 8px 0",minHeight:"50px",backgroundColor:c.isDragging?"#a333c8":"white",color:"white"},a.draggableProps.style),children:Object(b.jsx)("div",{className:"ui fluid card",style:{border:"1px solid #a333c8"},children:Object(b.jsxs)("div",{className:"content center aligned",children:[Object(b.jsx)("div",{className:"header",children:e.title}),Object(b.jsxs)("div",{className:"description",children:["Playing Time"," ",Object(b.jsxs)("b",{children:[e.duration," Min"]})]}),Object(b.jsxs)("div",{className:"description",children:["Cost Per Recipient"," ",Object(b.jsxs)("b",{children:[e.costPerRecipient,"$"]})]})]})},t)}))}},e.id)})),e.placeholder]}))}},c)})]},c)}))})}),Object(b.jsxs)("div",{className:"ui grid",children:[Object(b.jsx)("div",{className:"four wide column",children:Object(b.jsx)(l.b,{to:"/add-recipients",className:"ui secondary basic button",children:"Back"})}),Object(b.jsx)("div",{className:"eight wide column",children:Object(b.jsx)("div",{className:"ui divider",children:Object(b.jsxs)("div",{style:{textAlign:"center"},children:[h.modules," modules were selected at a total cost of"," ",h.cost,"$ for 3 recipients"]})})}),Object(b.jsx)("div",{className:"four wide column",children:Object(b.jsx)("button",{onClick:function(){e({type:"ADD_MODULES",payload:h}),t.push("./schedule-campaign")},className:"ui right floated primary basic button",type:"button",children:"Next"})})]})]})},G=function(){var e=Object(o.c)(),t=Object(r.g)(),a=Object(o.d)((function(e){return e.campaigns.newCampaign}));return Object(b.jsxs)(v,{children:[Object(b.jsx)("h2",{className:"ui center aligned header",children:"Campaign Details"}),Object(b.jsxs)("form",{className:"ui large form",children:[Object(b.jsxs)("div",{className:"ui segments",children:[Object(b.jsxs)("div",{className:"ui segment",children:[a.title," campaign"]}),Object(b.jsxs)("div",{className:"ui red segment",children:[a.participants," Recipients"]}),Object(b.jsxs)("div",{className:"ui violet segment",children:[a.modules," Modules Selected"]}),Object(b.jsxs)("div",{className:"ui purple segment",children:["Total Cost ",a.cost,"$"]}),Object(b.jsxs)("div",{className:"ui teal segment",children:["Schedule at ",a.scheduled]})]}),Object(b.jsx)(l.b,{to:"/add-modules",className:"ui left floated secondary basic button",children:"Back"}),Object(b.jsx)("button",{className:"ui right floated primary basic button",type:"button",onClick:function(){e({type:"SUBMIT_CAMPAING"}),t.push("./dashboard")},children:"Attack!"})]})]})},U=function(){return Object(b.jsx)("div",{className:"ui Fluid",children:Object(b.jsxs)(l.a,{basename:"/wireframe",children:[Object(b.jsx)(u,{}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",exact:!0,component:O}),Object(b.jsx)(h,{path:"/dashboard",component:g}),Object(b.jsx)(h,{path:"/add-credit",component:N}),Object(b.jsx)(r.b,{path:"/pricing",component:f}),Object(b.jsx)(h,{path:"/new-campaign",component:D}),Object(b.jsx)(h,{path:"/add-recipients",component:k}),Object(b.jsx)(h,{path:"/add-modules",component:J}),Object(b.jsx)(h,{path:"/schedule-campaign",component:G}),Object(b.jsx)(r.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})]})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),i(e),s(e),n(e)}))},$=a(19),q={isSignedIn:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!0});case"SIGN_OUT":return Object(d.a)(Object(d.a)({},e),{},{isSignedIn:!1});default:return e}},W=a(85),Y=a.n(W),Q={1:{title:"Q1 activity 2021",description:"Last year's budget leftovers.",participants:100,modules:5,cost:"10,000",scheduled:"Mar 12, 2019",user:{name:"Monty",avatar:"https://semantic-ui.com/images/avatar/small/jenny.jpg"}},2:{title:"Passover activity 2019",description:"Heavy Meital stopped eating cakes so there was some money left in the cashbox.",participants:50,modules:10,cost:"50,000",scheduled:"Nov 2, 2020",user:{name:"Shlomi",avatar:"https://semantic-ui.com/images/avatar/small/steve.jpg"}}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_CAMPAING":return console.log(e),Object(d.a)(Object(d.a)({},e),{},{newCampaign:t.payload});case"ADD_RECIPIENTS":case"ADD_MODULES":return Object(d.a)(Object(d.a)({},e),{},{newCampaign:Object(d.a)(Object(d.a)({},e.newCampaign),t.payload)});case"SUBMIT_CAMPAING":var a=Object(d.a)({},e.newCampaign);return delete e.newCampaign,Object(d.a)(Object(d.a)({},e),{},Object(E.a)({},Y.a.size(Object.keys(e))+1,a));default:return e}},V=Object($.c)({auth:z,campaigns:K}),X=Object($.e)(V,{});n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(o.a,{store:X,children:Object(b.jsx)(U,{})})}),document.getElementById("root")),H()},81:function(e,t){},92:function(e,t,a){}},[[204,1,2]]]);
//# sourceMappingURL=main.ea0480cb.chunk.js.map