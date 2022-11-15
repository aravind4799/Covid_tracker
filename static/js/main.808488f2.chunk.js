(this.webpackJsonpcovid_tracker=this.webpackJsonpcovid_tracker||[]).push([[0],{15:function(e,t,a){e.exports={container:"Cards_container__2WEWm",card:"Cards_card__BDF2p",infected:"Cards_infected__Iv_8k",recovered:"Cards_recovered__SNRwN",deaths:"Cards_deaths__3H7Oc"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(5),s=a.n(u),i=a(10),l=a(71),d=a(72),p=a(81),f=a(80),m=a(30),v=a.n(m),h="https://covid19.mathdro.id/api",b=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=h,t&&(a="".concat(h,"/countries/").concat(t)),e.prev=2,e.next=5,v.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2);case 16:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat(h,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),E=a(225),_=a(229),x=a(226),C=a(227),w=a(15),j=a.n(w),k=a(40),O=a.n(k),S=a(41),D=a.n(S),N=function(e){var t=e.data,a=t.confirmed,n=(t.recovered,t.deaths),c=t.lastUpdate;return a?r.a.createElement("div",{className:j.a.container},r.a.createElement(E.a,{container:!0,spacing:8,justify:"space-between"},r.a.createElement(E.a,{item:!0,component:_.a,xs:12,md:5,className:D()(j.a.card,j.a.infected)},r.a.createElement(x.a,null,r.a.createElement(C.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(C.a,{variant:"h5"},"  ",r.a.createElement(O.a,{start:0,end:a.value,duration:2.5,seperator:","})),r.a.createElement(C.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(C.a,{variant:"body2"},"number of active cases from covid"))),r.a.createElement(E.a,{item:!0,component:_.a,xs:12,md:5,className:D()(j.a.card,j.a.deaths)},r.a.createElement(x.a,null,r.a.createElement(C.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(C.a,{variant:"h5"},r.a.createElement(O.a,{start:0,end:n.value,duration:2.5,seperator:","})),r.a.createElement(C.a,{color:"textSecondary"},new Date(c).toDateString()),r.a.createElement(C.a,{variant:"body2"},"number of deaths caused by covid"))))):"loading..."},B=a(29),I=a(43),A=a(77),R=a.n(A),U=function(e){var t=e.data,a=t.confirmed,c=t.deaths,o=t.recovered,u=e.country,l=Object(n.useState)([]),d=Object(B.a)(l,2),p=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,g();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=p.length?r.a.createElement(I.Line,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(I.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0,0,225,0.8)","rgba(0,225,0,0.8)","rgba(255,0,0,0.8)"],data:[a.value,o.value,c.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u," ")}}}):null;return r.a.createElement("div",{className:R.a.container},u?v:m)},J=a(230),W=a(228),z=a(78),F=a.n(z),G=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(B.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,y();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(o),r.a.createElement(J.a,{className:F.a.formControl},r.a.createElement(W.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},H=a(44),L=a.n(H),M=a(79),P=a.n(M),V=function(e){Object(p.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:L.a.container},r.a.createElement("img",{src:P.a,className:L.a.image}),r.a.createElement(N,{data:t}),r.a.createElement(G,{handleCountryChange:this.handleCountryChange}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(V,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__CSR7Z",image:"App_image__2z20P"}},77:function(e,t,a){e.exports={container:"Chart_container__1pa7-"}},78:function(e,t,a){e.exports={formControl:"Countrypicker_formControl__3gn4C"}},79:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},84:function(e,t,a){e.exports=a(207)}},[[84,1,2]]]);
//# sourceMappingURL=main.808488f2.chunk.js.map