<template>
  <div>
    <button
      v-on:click="openLeaderboard = !openLeaderboard"
      class="nes-btn is-primary btn-block"
    >Leaderboard</button>
    <div v-if="openLeaderboard" id="leaderboard" class="nes-container">
      <div v-for="(data,type) in leaderboardList" :key="type" class="nes-container with-title">
        <h2 class="title">{{ type }}</h2>
        <p
          v-for="(d, pos ) in leaderboardList[type]"
          :key="pos"
        >{{ (pos + 1) + ". " + d[0] + " - " + d[1] + "s"}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { lbService } from "../main";
export default {
  data() {
    return {
      openLeaderboard: false,
      lbService: lbService,
      leaderboardList: {}
    };
  },
  created() {
    this.updateLeaderboard();
    this.lbService.EventBus.$on("updatedLeaderboard", () => {
      this.updateLeaderboard();
      this.openLeaderboard = true;
    });
  },
  methods: {
    updateLeaderboard: function() {
      for(let d in this.lbService.leaderboard){
        Vue.set(this.leaderboardList, d, this.lbService.leaderboard[d]);
      }
    }
  }
};
</script>