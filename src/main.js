// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'

var config = {
  apiKey: "AIzaSyB1MYvpBJdco9NMpZMQsmswyPIrZFZ0YWU",
  authDomain: "minesweeper-9c287.firebaseapp.com",
  databaseURL: "https://minesweeper-9c287.firebaseio.com",
  projectId: "minesweeper-9c287",
  storageBucket: "",
  messagingSenderId: "1025003098923"
};
firebase.initializeApp(config);
firebase.auth().signInAnonymously().catch(function (error) {
  console.log(error.message)
});
var db = firebase.firestore().collection("leaderboard");

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {

  } else {
    console.log("not logged")
  }
});





import GameService from './GameService'
import LeaderboardService from './LeaderboardService';
// Vue.config.productionTip = false


var game = new GameService(16, 16, 40, "Normal");
var lbService = new LeaderboardService(db);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})



export { game, lbService, db }