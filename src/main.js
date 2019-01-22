// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import '../node_modules/nes.css/css/nes.min.css'

import GameService from './GameService'
// Vue.config.productionTip = false

if (localStorage.getItem("game") === null) {
  var game = new GameService(20, 25);
} else {
  var game = localStorage.getItem("game");
}



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

export { game }