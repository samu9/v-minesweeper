webpackJsonp([1],{"06TJ":function(t,e){},"3NGe":function(t,e){},"940+":function(t,e){},HQTw:function(t,e){},"IM+P":function(t,e){},JfAv:function(t,e){},NHnr:function(t,e,A){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=A("7+uW"),s=A("kxiW"),a=A.n(s),r={name:"Minefield",props:{game:Object},data:function(){return{grid:[]}},created:function(){var t=this;this.updateGrid(),this.game.EventBus.$on("updatedGrid",function(e){t.updateGrid()})},mounted:function(){},methods:{updateGrid:function(){this.grid=[];for(var t=0;t<this.game.height;t++){for(var e=[],A=0;A<this.game.width;A++)e[A]=[],e[A].bomb=this.game.grid[t][A].bomb,e[A].revealed=this.game.grid[t][A].revealed,e[A].flagged=this.game.grid[t][A].flagged,e[A].value=this.game.grid[t][A].value;i.a.set(this.grid,t,e)}},reveal:function(t,e){},flag:function(t,e){}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"minefield nes-container"},t._l(t.grid,function(e,s){return i("div",{key:s,staticClass:"mine-row"},t._l(e,function(e,a){return i("div",{key:a,staticClass:"cell",class:(r={bombed:e.bomb&&e.revealed,flagged:e.flagged,revealed:e.revealed},r["cell"+e.value]=e.revealed,r),on:{click:function(e){e.preventDefault(),t.game.revealCell(s,a)},contextmenu:function(e){e.preventDefault(),t.game.setFlag(s,a)}}},[t._v("\n      "+t._s(e.bomb&&e.revealed?"":e.revealed&&0==e.value?"":e.revealed&&!e.bomb?e.value:(e.revealed,""))+"\n      "),e.flagged?i("img",{attrs:{src:A("PNZl")}}):t._e(),t._v(" "),e.bomb&&e.revealed?i("img",{attrs:{src:A("cRDh")}}):t._e()]);var r}))}))},staticRenderFns:[]};var o={data:function(){return{game:N}},methods:{resetGame:function(){this.game.initialize(this.game.height,this.game.width,this.game.bombs,this.game.gameType)}}},d={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"nes-container",attrs:{id:"status-bar"}},[A("div",{staticClass:"status-number"},[t._v("Bombs\n    "),A("h2",[t._v(t._s(t.game.bombs-t.game.marked))])]),t._v(" "),A("button",{staticClass:"nes-btn",class:{"is-error":t.game.loss,"is-success":t.game.victory},on:{click:function(e){t.resetGame()}}},[t._v(t._s(t.game.loss?"Game Over":t.game.victory?"Victory!":"Reset"))]),t._v(" "),A("div",{staticClass:"status-number"},[t._v("Time\n    "),A("h2",[t._v(t._s(t.game.timer))])])])},staticRenderFns:[]};var l={data:function(){return{openLeaderboard:!1,lbService:S,leaderboardList:{}}},created:function(){var t=this;this.updateLeaderboard(),this.lbService.EventBus.$on("updatedLeaderboard",function(){t.updateLeaderboard(),t.openLeaderboard=!0})},methods:{updateLeaderboard:function(){for(var t in this.lbService.leaderboard)i.a.set(this.leaderboardList,t,this.lbService.leaderboard[t])}}},h={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",[A("button",{staticClass:"nes-btn is-primary btn-block",on:{click:function(e){t.openLeaderboard=!t.openLeaderboard}}},[t._v("Leaderboard")]),t._v(" "),t.openLeaderboard?A("div",{staticClass:"nes-container",attrs:{id:"leaderboard"}},t._l(t.leaderboardList,function(e,i){return A("div",{key:i,staticClass:"nes-container with-title"},[A("h2",{staticClass:"title"},[t._v(t._s(i))]),t._v(" "),t._l(t.leaderboardList[i],function(e,i){return A("p",{key:i},[t._v(t._s(i+1+". "+e[0]+" - "+e[1]+"s"))])})],2)})):t._e()])},staticRenderFns:[]};var c={data:function(){return{game:N,openSettings:!1,maxVal:50,minVal:3,custom:{height:0,width:0,bombs:0},diff:["Easy","Normal","Hard"],selectedDifficulty:0}},mounted:function(){},methods:{startCustomGame:function(){this.custom.height<this.minVal?this.custom.height=this.minVal:this.custom.height>this.maxVal&&(this.custom.height=this.maxVal),this.custom.width<this.minVal?this.custom.width=this.minVal:this.custom.width>this.maxVal&&(this.custom.width=this.maxVal),this.game.initialize(this.custom.height,this.custom.width,this.custom.bombs),this.openSettings=!1},startDifficultyGame:function(){switch(this.selectedDifficulty){case 0:this.game.initialize(8,8,10,"Easy");break;case 1:this.game.initialize(16,16,40,"Normal");break;case 2:this.game.initialize(16,30,99,"Hard")}this.openSettings=!1}}},u={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",[A("button",{staticClass:"nes-btn is-primary btn-block",on:{click:function(e){t.openSettings=!t.openSettings}}},[t._v("Settings")]),t._v(" "),t.openSettings?A("div",{staticClass:"nes-container"},[A("div",{staticClass:"nes-container with-title"},[A("h3",{staticClass:"title"},[t._v("Difficulty:")]),t._v(" "),A("div",t._l(t.diff,function(e,i){return A("label",{key:i},[A("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedDifficulty,expression:"selectedDifficulty"}],staticClass:"nes-radio",attrs:{type:"radio",name:"difficulty"},domProps:{value:i,checked:t._q(t.selectedDifficulty,i)},on:{change:function(e){t.selectedDifficulty=i}}}),t._v(" "),A("span",[t._v(t._s(e))])])})),t._v(" "),A("button",{staticClass:"nes-btn is-success",on:{click:function(e){t.startDifficultyGame()}}},[t._v("Start!")])]),t._v(" "),A("div",{staticClass:"nes-container with-title"},[A("h3",{staticClass:"title"},[t._v("Custom:")]),t._v(" "),A("div",{staticClass:"nes-field"},[A("label",[t._v("Grid size")]),t._v(" "),A("input",{directives:[{name:"model",rawName:"v-model",value:t.custom.height,expression:"custom.height"}],staticClass:"nes-input sett-input",attrs:{type:"text",maxlength:"2"},domProps:{value:t.custom.height},on:{input:function(e){e.target.composing||t.$set(t.custom,"height",e.target.value)}}}),t._v(" "),A("input",{directives:[{name:"model",rawName:"v-model",value:t.custom.width,expression:"custom.width"}],staticClass:"nes-input sett-input",attrs:{type:"text",maxlength:"2"},domProps:{value:t.custom.width},on:{input:function(e){e.target.composing||t.$set(t.custom,"width",e.target.value)}}})]),t._v(" "),A("div",{staticClass:"nes-field"},[A("label",[t._v("Bombs")]),t._v(" "),A("input",{directives:[{name:"model",rawName:"v-model",value:t.custom.bombs,expression:"custom.bombs"}],staticClass:"nes-input sett-input",attrs:{type:"text"},domProps:{value:t.custom.bombs},on:{input:function(e){e.target.composing||t.$set(t.custom,"bombs",e.target.value)}}})]),t._v(" "),A("button",{staticClass:"nes-btn is-success",on:{click:function(e){t.startCustomGame()}}},[t._v("Start!")])])]):t._e()])},staticRenderFns:[]};var m={data:function(){return{game:N,saved:!1,loaded:!1}},methods:{saveGame:function(){var t=this;this.game.loss||this.game.victory||(this.saved=!0,this.game.save(),setTimeout(function(){t.saved=!1},3e3),console.log("saved"))},loadGame:function(){var t=this;this.loaded=!0,this.game.load(),setTimeout(function(){t.loaded=!1},3e3)}}},v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-bar"},[i("h1",[t._v("8-Bit Minesweeper")]),t._v(" "),i("div",{staticClass:"nav-buttons"},[i("button",{staticClass:"nes-btn",class:{"is-success":t.saved,"is-disabled":t.game.victory||t.game.loss,"is-error":!t.saved},attrs:{disabled:t.game.loss||t.game.victory},on:{click:function(e){t.saveGame()}}},[i("img",{attrs:{src:A("iFoD"),width:"22px"}}),t._v("\n      "+t._s(t.saved?"Saved!":"Save")+"\n    ")]),t._v(" "),i("button",{staticClass:"nes-btn",class:t.loaded?"is-success":" is-warning",on:{click:function(e){t.loadGame()}}},[i("img",{attrs:{src:A("iFoD"),width:"22px"}}),t._v("\n      "+t._s(t.loaded?"Loaded!":"Load")+"\n    ")])])])},staticRenderFns:[]};var g={data:function(){return{game:N,lbService:S,visible:!1,username:""}},created:function(){var t=this;this.game.EventBus.$on("newRecord",function(){t.visible=!0})},methods:{addRecord:function(){S.addRecord(this.username,this.game.timer,this.game.gameType),this.visible=!1}}},f={render:function(){var t=this,e=t.$createElement,A=t._self._c||e;return t.visible?A("div",{staticClass:"nes-container is-dark is-centered",attrs:{id:"new-record"}},[A("h2",[t._v("New record!")]),t._v(" "),A("div",{staticClass:"nes-field"},[A("label",[t._v("Your name (4 letters):")]),t._v(" "),A("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"nes-input",attrs:{type:"text",maxlength:"4"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),A("button",{staticClass:"nes-btn is-success",on:{click:function(e){t.addRecord()}}},[t._v("Enter")])])]):t._e()},staticRenderFns:[]};var b={name:"App",data:function(){return{game:N}},components:{Minefield:A("VU/8")(r,n,!1,function(t){A("RPFR")},null,null).exports,StatusBar:A("VU/8")(o,d,!1,function(t){A("06TJ")},null,null).exports,Leaderboard:A("VU/8")(l,h,!1,function(t){A("3NGe")},null,null).exports,Settings:A("VU/8")(c,u,!1,function(t){A("HQTw")},null,null).exports,Navbar:A("VU/8")(m,v,!1,function(t){A("JfAv")},null,null).exports,NewRecordBox:A("VU/8")(g,f,!1,function(t){A("940+")},null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"row",attrs:{id:"main"}},[e("div",{staticClass:"col-lg-3"},[e("Settings"),this._v(" "),e("Leaderboard")],1),this._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{attrs:{id:"game"}},[e("StatusBar"),this._v(" "),e("Minefield",{attrs:{game:this.game}}),this._v(" "),e("NewRecordBox")],1)]),this._v(" "),e("div",{staticClass:"offset-lg-3"})])],1)},staticRenderFns:[]};var w=A("VU/8")(b,p,!1,function(t){A("lHZx")},null,null).exports,_=(A("qb6w"),A("IM+P"),A("mvHQ")),y=A.n(_),C=A("Zrlr"),k=A.n(C),E=A("wxAW"),B=A.n(E),G=function(){function t(e,A){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;k()(this,t),this.mineProb=.15625,this.diffs=["Easy","Normal","Hard"],this.bombs=0,this.marked=0,this.timer=0,this.started=!1,this.grid=[],this.EventBus=new i.a,this.initialize(e,A,s,a)}return B()(t,[{key:"updateGrid",value:function(){this.EventBus.$emit("updatedGrid",this.grid)}},{key:"restartedGame",value:function(){this.EventBus.$emit("restartedGame",this.game)}},{key:"initialize",value:function(t,e){var A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;this.grid=[],this.started=!1,this.loss=!1,this.victory=!1,this.marked=0,this.defused=0,this.timer=0,this.height=t,this.width=e,this.gameType=i,this.bombs=0===A?Math.floor(this.height*this.width*this.mineProb):A,this.covered=this.width*this.height-this.bombs;for(var s=0;s<this.height;s++){this.grid[s]=[];for(var a=0;a<this.width;a++)this.grid[s][a]={bomb:!1,revealed:!1,flagged:!1,value:0}}for(var r=0;r<this.bombs;r++){for(var n=Math.floor(Math.random()*this.height),o=Math.floor(Math.random()*this.width);this.grid[n][o].bomb;)n=Math.floor(Math.random()*this.height),o=Math.floor(Math.random()*this.width);this.grid[n][o].bomb=!0}for(var d in this.grid)for(var l in this.grid[d])this.grid[d][l].bomb||(this.grid[d][l].value=this.checkNeighbors(parseInt(d),parseInt(l)));this.updateGrid(),clearInterval(this.interval)}},{key:"getEdges",value:function(t,e){return{row:{start:t>0?t-1:t,end:t<this.height-1?+t+1:t},col:{start:e>0?e-1:e,end:e<this.width-1?+e+1:e}}}},{key:"checkNeighbors",value:function(t,e){for(var A=0,i=this.getEdges(t,e),s=i.row.start;s<=i.row.end;s++)for(var a=i.col.start;a<=i.col.end;a++)this.grid[s][a].bomb&&A++;return A}},{key:"revealCell",value:function(t,e){this.started||this.start(),this.loss||this.victory||this.grid[t][e].revealed||this.grid[t][e].flagged||(this.grid[t][e].bomb?this.gameOver():(this.grid[t][e].revealed=!0,this.covered--,0===this.grid[t][e].value&&this.revealNeighbors(t,e),this.checkWin(),this.updateGrid()))}},{key:"revealNeighbors",value:function(t,e){for(var A=this.getEdges(t,e),i=A.row.start;i<=A.row.end;i++)for(var s=A.col.start;s<=A.col.end;s++)this.grid[i][s].revealed||this.grid[i][s].flagged||this.grid[i][s].bomb||(this.grid[i][s].revealed=!0,this.covered--,0===this.grid[i][s].value&&this.revealNeighbors(i,s))}},{key:"setFlag",value:function(t,e){this.started||this.start(),this.grid[t][e].revealed||this.bombs-this.marked==0&&!this.grid[t][e].flagged||(this.grid[t][e].flagged?(this.grid[t][e].flagged=!1,this.marked--,this.grid[t][e].bomb&&this.defused--):(this.grid[t][e].flagged=!0,this.marked++,this.grid[t][e].bomb&&this.defused++),this.checkWin(),this.updateGrid())}},{key:"checkWin",value:function(){console.log("Defused",this.defused,"Covered",this.covered),this.defused==this.bombs&&0==this.covered&&this.win()}},{key:"gameOver",value:function(){for(var t in this.loss=!0,this.stop(),this.grid)for(var e in this.grid[t])this.grid[t][e].bomb&&!this.grid[t][e].flagged&&(this.grid[t][e].revealed=!0,this.grid[t]);this.updateGrid()}},{key:"win",value:function(){this.victory=!0,this.stop(),S.checkRecord(this.timer,this.gameType)&&this.gameType&&this.EventBus.$emit("newRecord",null)}},{key:"start",value:function(){var t=this;this.started=!0,this.interval=setInterval(function(){t.timer++},1e3)}},{key:"stop",value:function(){clearInterval(this.interval)}},{key:"save",value:function(){if(this.loss||this.victory)return!1;var t={height:this.height,width:this.width,timer:this.timer,grid:this.grid,marked:this.marked,defused:this.defused,bombs:this.bombs,covered:this.covered,gameType:this.gameType};return localStorage.setItem("game",y()(t)),!0}},{key:"load",value:function(){if(this.stop(),null!==localStorage.getItem("game")){var t=JSON.parse(localStorage.getItem("game"));this.height=t.height,this.width=t.width,this.timer=t.timer,this.grid=t.grid,this.marked=t.marked,this.defused=t.defused,this.bombs=t.bombs,this.covered=t.covered,this.gameType=t.gameType,this.victory=!1,this.loss=!1}this.start(),this.updateGrid()}}]),t}(),R=function(){function t(e){k()(this,t),this.leaderboard={},this.EventBus=new i.a,this.db=e,this.update()}return B()(t,[{key:"update",value:function(){var t=this;this.leaderboard={Easy:[],Normal:[],Hard:[]},this.db.orderBy("time").get().then(function(e){e.forEach(function(e){var A=e.data();t.leaderboard[A.type].length<5&&t.leaderboard[A.type].push([A.user,A.time])})}),this.EventBus.$emit("updatedLeaderboard",null)}},{key:"addRecord",value:function(t,e,A){this.db.add({time:e,user:t,type:A}),this.update()}},{key:"checkRecord",value:function(t,e){return this.leaderboard[e].length<5||t<this.leaderboard[e][this.leaderboard[e].length-1][1]}},{key:"getWorst",value:function(t){return this.leaderboard[t][this.leaderboard[t].length-1][1]}}]),t}();A.d(e,"game",function(){return N}),A.d(e,"lbService",function(){return S}),A.d(e,"db",function(){return x});a.a.initializeApp({apiKey:"AIzaSyB1MYvpBJdco9NMpZMQsmswyPIrZFZ0YWU",authDomain:"minesweeper-9c287.firebaseapp.com",databaseURL:"https://minesweeper-9c287.firebaseio.com",projectId:"minesweeper-9c287",storageBucket:"",messagingSenderId:"1025003098923"}),a.a.auth().signInAnonymously().catch(function(t){console.log(t.message)});var x=a.a.firestore().collection("leaderboard");a.a.auth().onAuthStateChanged(function(t){t||console.log("not logged")});var N=new G(16,16,40,"Normal"),S=new R(x);new i.a({el:"#app",components:{App:w},template:"<App/>"})},PNZl:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAlElEQVRYhe3WMQqAMAwF0G6ZCoL37U28iXfT0Ro0JJ9vO5gPWRTJa5BoKZmMncOocc2X7araTBQVZwL6a0GcGwgD1v29hgCe7nXNpwPcoQGQ038FCIUCQE9PA4gIvBsoALQ5GzBvAmo7jgcoxHQAtgdqu1cUgE7B/KJplBcXQVgPQLjoFNC3l/8/EATQkoAEJOAfgBMQ7CSiSQk7QwAAAABJRU5ErkJggg=="},RPFR:function(t,e){},cRDh:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAqUlEQVRYhe3RQQ6DMAxE0TmXL+Q7c5npogJFKCGOncQLGMkLFvCfWuANOwgS4EEwy0Dgj0iLI/oLiAhrp6pU1daHWZx7BFCNl4DzRITle5H49YFWvIOYE7cAOohY3Aro/B3++E5EMz4CqEEsiMd4FHE+bwfcLwyIIsLxVYhhQAQxDeBFTAV4MMsAVtA2wMN9gOpS4x9gF8K01PgqhGup8VmIKUuNj2Jc+wGvgRtYf0IuDwAAAABJRU5ErkJggg=="},iFoD:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAASdHAAEnRwEEDsU+AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABVQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAPYbscQAAAAZ0Uk5TAB45WKjh7ykCXgAAAqFJREFUeNrt0MEJwzAMQFFTukEW6ArB0HMOzgbZoJD9R+gCupjQKonfPwtJvLIPXgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgLYGtBazjakjv6fwywlKBnvCC5w/8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAQDrAO7r0AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICTAkw1aB4IoCMAAAAAAAAAAAAAAAAAAAAAAAAAAAD8F6Amlw5wygAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0ATzqZXr9BODqAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAXoCt3bC1A2CgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbtsXb20f0P/TgkAAAAAASUVORK5CYII="},lHZx:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.5bb15c4e618e8f3d582f.js.map