<template>
  <div v-if="visible" id="new-record" class="nes-container is-dark is-centered">
      <h2>New record!</h2>
      <div class="nes-field">
          <label>Your name (4 letters):</label>
          <input type="text" v-model="username" class="nes-input" maxlength="4">
          <button class="nes-btn is-success" v-on:click="addRecord()">Enter</button>
      </div>
  </div>
</template>

<script>
import { game, lbService } from "../main";

export default {
  data() {
    return {
      game: game,
      lbService: lbService,
      visible: false,
      username: ""
    };
  },
  created() {
    this.game.EventBus.$on("newRecord", () => {
      this.visible = true;
    });
  },
  methods: {
    addRecord: function() {
      lbService.addRecord(this.username, this.game.timer, this.game.gameType);
      this.visible = false;
    }
  }
};
</script>

<style>
#new-record{
    margin: 0px auto;
    margin-top: 2rem;
}

</style>
