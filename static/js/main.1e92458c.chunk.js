(this.webpackJsonphawkendota=this.webpackJsonphawkendota||[]).push([[0],{157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(48),s=a.n(o),c=(a(57),a(49)),i=a.n(c),l=(a(58),a(6)),u=a.n(l),p=a(17),h=a(18),d=a(19),m=a(21),f=a(20),v=a(22),g=a(50),b=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,pieData:{},legend:{position:"bottom",labels:{fontColor:"rgb(255, 255, 255)"}}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.opendota.com/api/players/110767531/wl",e.next=3,fetch("https://api.opendota.com/api/players/110767531/wl");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({pieData:{labels:["Wins:"+a.win,"Losses:"+a.lose],datasets:[{data:[a.win,a.lose],borderColor:"#282c34",backgroundColor:["#00ff33","#ff0d00"],hoverBackgroundColor:["#00ff33","#ff0d00"]}]}}),this.setState({loading:!1});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Hawken's Dota 2 Win/Loss Ratio"),this.state.loading?r.a.createElement("div",null,"loading..."):r.a.createElement("div",null,r.a.createElement(g.a,{legend:this.state.legend,data:this.state.pieData})))}}]),t}(r.a.Component),w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={pangomatches:{number:1}},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(e){var t=0;for(var a in e)e.hasOwnProperty(a)&&++t;return t},"https://api.opendota.com/api/players/110767531/matches?hero_id=120",e.next=4,fetch("https://api.opendota.com/api/players/110767531/matches?hero_id=120");case 4:return t=e.sent,e.next=7,t.json();case 7:a=e.sent,console.log(a),this.setState({pangomatches:{number:n(a)}});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Hawken's Pangolier Matches: ",this.state.pangomatches.number))}}]),t}(n.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},49:function(e,t,a){e.exports=a.p+"static/media/logo.848b9045.png"},52:function(e,t,a){e.exports=a(157)},57:function(e,t,a){},58:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.1e92458c.chunk.js.map