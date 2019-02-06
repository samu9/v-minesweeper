// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import App from './App'

// leaderboard data is stored on Google Firebase
// API keys are needed to connect and get/post data
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
  if (!user) {
    console.log("ERROR: not logged");
  }
});

import GameService from './GameService'
import LeaderboardService from './LeaderboardService';
// Vue.config.productionTip = false

// new instances for GameService and LeaderboardService
var game = new GameService(16, 16, 40, "Normal");
var lbService = new LeaderboardService(db);

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

// exporting the services
export { game, lbService }