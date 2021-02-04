(this["webpackJsonprpg-generator"]=this["webpackJsonprpg-generator"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),c=n.n(r),i=n(11),o=n.n(i),s=n(45),l=n(10),j=n(32),u=n(33),d=n(36),h=n(35),b=n(39),m=n.n(b),p={randomSettlement:function(){return m.a.get("api/random-town")},getSettlements:function(){return m.a.get("/api/settlements")},getSettlementId:function(e){return m.a.get("/api/posts/".concat(e))},deleteSettlement:function(e){return m.a.delete("/api/posts/".concat(e))},saveSettlement:function(e){return m.a.post("/api/settlements",e)}},O=n(152),x=n(153),g=n(154),f=n(133);var v=function(e){var t=e.races;console.log(t);var n=t.filter((function(e){return void 0!==e}));console.log(n);var r=n.map((function(e){return Object(a.jsx)("li",{children:e},e.toString())}));return Object(a.jsx)("ul",{children:r})},y=n(9),V=n(150),w=n(160);var C=function(e){return Object(a.jsx)(w.a,{m:1,children:Object(a.jsx)(V.a,Object(y.a)({variant:"contained",color:"secondary",onClick:e.onClick,className:"".concat(e["data-value"])},e))})},S=Object(O.a)({root:{minWidth:275},title:{fontSize:20,fontWeight:"bold",textAlign:"center"},pos:{marginBottom:12},body:{fontSize:18,color:"white",textAlign:"center",background:"green"},footer:{textAlign:"center",marginTop:8,marginBottom:10}});var N=function(e){var t=e.name,n=e.government,r=e.type,c=e.size,i=e.description,o=e.happening,s=S();return Object(a.jsxs)(x.a,{variant:"outlined",className:s.root,children:[Object(a.jsx)(f.a,{className:s.title,placeholder:"Town Name Here",children:t}),Object(a.jsxs)(g.a,{className:s.body,children:[Object(a.jsxs)(f.a,{component:"section",children:["Government: ",n]}),Object(a.jsx)("br",{}),Object(a.jsxs)(f.a,{component:"section",children:["Settlement Size:",r]}),Object(a.jsx)("br",{}),Object(a.jsxs)(f.a,{component:"section",children:["Population: ",c]}),Object(a.jsx)("br",{}),Object(a.jsxs)(f.a,{component:"section",children:["Inhabitants: ",Object(a.jsx)(v,{races:e.races})]}),Object(a.jsx)("br",{}),Object(a.jsxs)(f.a,{component:"section",children:["Description:",i]}),Object(a.jsx)("br",{}),Object(a.jsxs)(f.a,{component:"section",children:["Event: ",o]})]}),Object(a.jsx)(f.a,{component:"div",className:s.footer,children:Object(a.jsx)(C,{onClick:e.onClick,children:"GENERATE TOWN"})})]})},k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).firstLetterCapital=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a.renderSettlement=function(){p.randomSettlement().then((function(e){console.log("its working"+JSON.stringify(e.data)),a.setState({name:e.data.name.toUpperCase(),government:a.firstLetterCapital(e.data.government),population:a.firstLetterCapital(e.data.population.type),size:e.data.population.size,races:[e.data.population.raceOne,e.data.population.raceTwo,e.data.population.raceThree,e.data.population.raceFour],description:e.data.description,whatsUp:e.data.whatIsGoingOn})})).catch((function(e){return console.log(e)}))},a.state={name:"",government:"",population:"",size:"",description:"",whatsUp:"",races:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.renderSettlement()}},{key:"componentWillUnmount",value:function(){this.renderSettlement()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)(N,{name:this.state.name,government:this.state.government,type:this.state.population,size:this.state.size,races:this.state.races,description:this.state.description,happening:this.state.whatsUp,onClick:this.renderSettlement})})}}]),n}(r.Component),z=n(155),F=Object(O.a)((function(e){return{root:{flexGrow:1}}}));var R=function(){var e=F();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(z.a,{container:!0,spacing:2,children:[Object(a.jsx)(z.a,{item:!0,lg:2,xs:12}),Object(a.jsx)(z.a,{item:!0,lg:8,xs:12,children:Object(a.jsx)(k,{})}),Object(a.jsx)(z.a,{item:!0,xs:12,lg:2})]})})},T=Object(O.a)({root:{minWidth:275,margin:"1%"},title:{fontSize:20,fontWeight:"bold",textAlign:"center"},pos:{marginBottom:12},body:{fontSize:18,color:"white",textAlign:"center",background:"green"}});var A=function(e){var t=e.name,n=e.government,r=e.type,c=e.size,i=e.description,o=e.happening,s=e.race,l=T();return Object(a.jsxs)(x.a,{variant:"outlined",className:l.root,children:[Object(a.jsx)(f.a,{className:l.title,component:"section",children:t.toUpperCase()}),Object(a.jsxs)(g.a,{className:l.body,children:[Object(a.jsxs)(f.a,{component:"section",children:["Government: ",n]}),Object(a.jsxs)(f.a,{component:"section",children:["Settlement Size: ",r]}),Object(a.jsxs)(f.a,{component:"section",children:["Population: ",c]}),Object(a.jsxs)(f.a,{component:"section",children:["Majority Race: ",s]}),Object(a.jsxs)(f.a,{component:"section",children:["Description:",i]}),Object(a.jsxs)(f.a,{component:"section",children:["Event: ",o]})]})]})},I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).firstLetterCapital=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},a.AllEntries=function(){p.getSettlements().then((function(e){console.log("its rendering"+JSON.stringify(e.data)),a.setState({settlementOne:[e.data[0]],settlementTwo:[e.data[1]],settlementThree:[e.data[2]],settlementFour:[e.data[3]],settlementFive:[e.data[4]]})})).catch((function(e){return console.log(e)}))},a.state={settlementOne:[],settlementTwo:[],settlementThree:[],settlementFour:[],settlementFive:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.AllEntries()}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.state.settlementOne.map((function(e){return Object(a.jsx)(A,{name:e.name,government:e.government,type:e.type,size:e.size,race:e.population.majorityRace,description:e.description,happening:e.otherInformation},e.id)})),this.state.settlementTwo.map((function(e){return Object(a.jsx)(A,{name:e.name,government:e.government,type:e.type,size:e.size,race:e.population.majorityRace,description:e.description,happening:e.otherInformation},e.id)})),this.state.settlementThree.map((function(e){return Object(a.jsx)(A,{name:e.name,government:e.government,type:e.type,size:e.size,race:e.population.majorityRace,description:e.description,happening:e.otherInformation},e.id)})),this.state.settlementFour.map((function(e){return Object(a.jsx)(A,{name:e.name,government:e.government,type:e.type,size:e.size,race:e.population.majorityRace,description:e.description,happening:e.otherInformation},e.id)})),this.state.settlementFive.map((function(e){return Object(a.jsx)(A,{name:e.name,government:e.government,type:e.type,size:e.size,race:e.population.majorityRace,description:e.description,happening:e.otherInformation},e.id)}))]})}}]),n}(r.Component),P=Object(O.a)((function(e){return{root:{flexGrow:1}}})),L=function(){var e=P();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(z.a,{container:!0,spacing:2,children:[Object(a.jsx)(z.a,{item:!0,xs:12,md:2,children:"WELCOME TO THE RPG PLANNER"}),Object(a.jsx)(z.a,{item:!0,md:8,children:Object(a.jsx)(I,{})}),Object(a.jsx)(z.a,{item:!0,xs:12,lg:2})]})})},E=n(86),W=n(53),q=n(42);var B=function(e){return Object(a.jsx)(w.a,{m:2,children:Object(a.jsx)(V.a,Object(y.a)(Object(y.a)({variant:"contained",color:"secondary",type:"submit",onClick:e.onClick,className:"".concat(e["data-value"])},e),{},{children:"SUBMIT"}))})},D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).addToDB=function(){var e=parseInt(a.state.numberOfRacesValue),t=parseInt(a.state.percentageOneValue),n={name:a.state.townValue,type:a.state.typeValue,size:a.state.populationValue,govern:a.state.governValue,description:a.state.descriptionValue,population:{numberOfRaces:e,majorityRace:a.state.raceOneValue,majorityPercentage:t},otherInformation:a.state.otherValue,author:a.state.authorValue};console.log(n),p.saveSettlement(n).then((function(e){alert("Your Settlement ".concat(e.data.name," has been added to the database"))})).catch((function(e){alert("".concat(e," encountered please try again later"))}))},a.state={townValue:"",governValue:"",typeValue:"",populationValue:"",numberOfRacesValue:"",descriptionValue:"",raceOneValue:"",percentageOneValue:"",otherValue:"",authorValue:""},a.handleChange=a.handleChange.bind(Object(q.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(q.a)(a)),a}return Object(u.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(W.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.addToDB()}},{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{autoComplete:"on",children:[Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"townValue",children:"Town Name"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",name:"townValue",id:"townValue",placeholder:"Settlement Name",value:this.state.townValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"governValue",children:"Government"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"governValue",id:"governValue",placeholder:"How is Your Town Ruled",value:this.state.governValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"typeValue",children:"Type"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"typeValue",id:"typeValue",placeholder:"Is it a hamlet, farming-community, village, town, city, monastic order?",value:this.state.typeValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{children:"Population"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"number",name:"populationValue",placeholder:"How many people live in your settlement?",value:this.state.populationValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"descriptionValue",children:"Description:"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{cols:"50",rows:"6",placeholder:"What does your settlement look like?",id:"descriptionValue",name:"descriptionValue",type:"text",value:this.state.descriptionValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"numberOfRacesValue",children:"How Many Races Live in Your Settlement?"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{min:"1",max:"5",id:"numberOfRacesValue",name:"numberOfRacesValue",type:"number",value:this.state.numberOfRacesValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"raceOneValue",children:"Dominant Race name which lives in the settlement?"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{id:"raceOneValue",name:"raceOneValue",placeholder:"Race Name",value:this.state.raceOneValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"percentageOneValue",children:"Percentage:"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{name:"percentageOneValue",type:"number",min:"1",max:"100",placeholder:"Percentage of the majority race which lives in this town.",value:this.state.percentageOneValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(w.a,{m:2,children:[Object(a.jsx)("label",{htmlFor:"otherValue",children:"Other Information:"}),Object(a.jsx)("br",{}),Object(a.jsx)("textarea",{type:"text",id:"otherValue",name:"otherValue",cols:"50",rows:"6",placeholder:"Key NPCS, events, Other Races Which live here, what is that shifty blind man up to?",value:this.state.otherValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{})]}),Object(a.jsx)("label",{htmlFor:"authorValue",children:"By"}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{id:"authorValue",name:"authorValue",placeholder:"Author Name Here",value:this.state.authorValue,onChange:this.handleChange,required:!0}),Object(a.jsx)("br",{}),Object(a.jsx)(B,{onClick:this.handleSubmit})]})})}}]),n}(r.Component),G=Object(O.a)((function(e){return{root:{flexGrow:1},sidePaper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paperForm:{padding:e.spacing(2),textAlign:"center",color:"white",background:"blue",margin:"1%"}}})),U=function(){var e=G();return Object(a.jsx)("div",{className:e.root,children:Object(a.jsxs)(z.a,{container:!0,spacing:2,children:[Object(a.jsx)(z.a,{item:!0,xs:12}),Object(a.jsx)(z.a,{item:!0,md:2,xs:12,children:Object(a.jsx)(E.a,{className:e.sidePaper,children:"Add Your Own Idea to the system for others to explore and view!"})}),Object(a.jsx)(z.a,{item:!0,md:8,xs:12,children:Object(a.jsx)(E.a,{className:e.paperForm,children:Object(a.jsx)(D,{})})}),Object(a.jsx)(z.a,{item:!0,md:2})]})})},H=n(27),M=function(){var e=Object(H.b)(),t=e.loginWithRedirect;return!e.isAuthenticated&&Object(a.jsx)(V.a,{variant:"contained",color:"secondary",onClick:function(){return t()},children:"Log In"})};function Y(){return Object(a.jsx)("div",{children:Object(a.jsx)(M,{})})}var J=function(){var e=Object(H.b)(),t=e.logout;return e.isAuthenticated&&Object(a.jsx)(V.a,{variant:"contained",color:"secondary",onClick:function(){return t()},children:"Log Out"})},K=Object(O.a)({root:{padding:"20px"}});var X=function(){var e=K();return Object(a.jsxs)(z.a,{container:!0,children:[Object(a.jsx)(E.a,{className:e.root,children:Object(a.jsx)(Y,{})}),Object(a.jsx)(E.a,{className:e.root,children:Object(a.jsx)(J,{})})]})},Z=Object(O.a)((function(e){return{root:{flexGrow:1},sidePaper:{padding:e.spacing(2),textAlign:"center",fontSize:"20pt",color:e.palette.text.secondary}}})),Q=function(){var e=Z(),t=Object(H.b)(),n=t.user,r=t.isAuthenticated;return t.isLoading?Object(a.jsx)("div",{children:"Loading ..."}):r&&Object(a.jsx)("div",{children:Object(a.jsxs)(z.a,{container:!0,spacing:2,children:[Object(a.jsx)(z.a,{item:!0,xs:12,md:2,children:Object(a.jsx)(w.a,{clasName:e.sidePaper,p:2,children:Object(a.jsxs)(f.a,{children:["Welcome to the rpg Planner ",n.name]})})}),Object(a.jsx)(z.a,{item:!0,xs:12,md:10})]})})},$=n(84),_=n(156),ee=n(157),te=n(161),ne=n(158),ae=n(162),re=n(159),ce=n(83),ie=n.n(ce),oe=n(62),se=n(63),le=[{label:"Home",href:"/home"},{label:"random",href:"/random"},{label:"custom",href:"/custom"},{label:"login",href:"/login"}],je=Object(O.a)((function(){return{header:{"@media (max-width: 900px)":{paddingLeft:0}},d20:{color:"white"},menuButton:{size:"18px",marginLeft:"38px"},toolbar:{display:"flex",justifyContent:"space-between"},drawerContainer:{padding:"20px 30px"}}}));var ue=function(){var e=je(),t=e.header,n=e.d20,c=e.menuButton,i=e.toolbar,o=e.drawerContainer,l=Object(r.useState)({mobileView:!1,drawerOpen:!1}),j=Object($.a)(l,2),u=j[0],d=j[1],h=u.mobileView,b=u.drawerOpen;Object(r.useEffect)((function(){var e=function(){return window.innerWidth<900?d((function(e){return Object(y.a)(Object(y.a)({},e),{},{mobileView:!0})})):d((function(e){return Object(y.a)(Object(y.a)({},e),{},{mobileView:!1})}))};e(),window.addEventListener("resize",(function(){return e()}))}),[]);var m=function(){return le.map((function(e){var t=e.label,n=e.href;return Object(a.jsx)(ne.a,Object(y.a)(Object(y.a)({},{component:s.b,to:n,color:"inherit",style:{textDecoration:"none"},key:t}),{},{children:Object(a.jsx)(ae.a,{children:t})}))}))},p=function(){return le.map((function(e){var t=e.label,n=e.href;return Object(a.jsx)(V.a,Object(y.a)(Object(y.a)({},{key:t,color:"inherit",to:n,component:s.b,className:c}),{},{children:t}))}))};return Object(a.jsx)("header",{className:t,children:Object(a.jsx)(re.a,{position:"sticky",children:h?Object(a.jsxs)(_.a,{children:[Object(a.jsx)(ee.a,Object(y.a)(Object(y.a)({},{edge:"start",color:"inherit","aria-label":"menu","aria-haspopup":"true",onClick:function(){return d((function(e){return Object(y.a)(Object(y.a)({},e),{},{drawerOpen:!0})}))}}),{},{children:Object(a.jsx)(ie.a,{})})),Object(a.jsx)(te.a,Object(y.a)(Object(y.a)({},{anchor:"left",open:b,onClose:function(){return d((function(e){return Object(y.a)(Object(y.a)({},e),{},{drawerOpen:!1})}))}}),{},{children:Object(a.jsx)("div",{className:o,children:m()})})),Object(a.jsxs)("div",{children:[Object(a.jsx)(oe.a,{className:n,icon:se.a})," "]})]}):Object(a.jsxs)(_.a,{className:i,children:[Object(a.jsx)(oe.a,{className:n,icon:se.a}),Object(a.jsx)("div",{children:p()})]})})})};var de=function(){return Object(a.jsxs)(s.a,{children:[Object(a.jsx)(ue,{}),Object(a.jsx)(Q,{}),Object(a.jsx)(l.a,{exact:!0,path:"/",component:L}),Object(a.jsx)(l.a,{exact:!0,path:"/home",component:L}),Object(a.jsx)(l.a,{exact:!0,path:"/random",component:R}),Object(a.jsx)(l.a,{exact:!0,path:"/custom",component:U}),Object(a.jsx)(l.a,{exact:!0,path:"/login",component:X})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};o.a.render(Object(a.jsxs)(c.a.StrictMode,{children:[Object(a.jsx)(H.a,{domain:"dev-r4qksti7.au.auth0.com",clientId:"GX9ycHPtjBWndqvVTWOa5ZfKih9YXF3a",redirectUri:window.location.origin,children:Object(a.jsx)(de,{})}),","]}),document.getElementById("root")),he()}},[[130,1,2]]]);
//# sourceMappingURL=main.543d80c1.chunk.js.map