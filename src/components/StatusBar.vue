<template>
  <div id="status-bar" class="nes-container">
    <div class="status-number">Bombs
      <h2>{{ game.bombs - game.marked }}</h2>
    </div>
    <button
      class="nes-btn"
      v-bind:class="{'is-error' : game.loss, 'is-success' : game.victory}"
      v-on:click="resetGame()"
    >{{ game.loss ? 'Game Over' : game.victory ? 'Victory!' : 'Reset'}}</button>
    <div class="status-number">Time
      <h2>{{ game.timer }}</h2>
    </div>
  </div>
</template>

<script>
import { game } from "../main";
export default {
  data() {
    return {
      game: game,
    };
  },
  methods: {
    resetGame: function() {
      // reinitialize the game with the same settings
      this.game.initialize(this.game.height, this.game.width, this.game.bombs, this.game.gameType);
    }
  }
};
</script>

<style>
#status-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  margin: 0px auto;
}
.status-number {
  margin: 0px 15px;
  text-align: center;
}
</style>
