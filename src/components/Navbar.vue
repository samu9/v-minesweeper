<template>
  <div class="nav-bar">
    <h1>8-Bit Minesweeper</h1>
    <div class="nav-buttons">
      <button
        class="nes-btn"
        v-bind:class="{'is-success' : saved, 'is-disabled': game.victory || game.loss, 'is-error' : !saved}"
        :disabled="game.loss || game.victory"
        v-on:click="saveGame()"
      >
        <img src="../assets/save.png" width="22px">
        {{ saved? 'Saved!' : 'Save'}}
      </button>
      <button
        class="nes-btn"
        v-bind:class="{'is-success' : loaded, 'is-disabled': !loadAvail, 'is-warning' : !loaded}"
        :disabled="!loadAvail"
        v-on:click="loadGame()"
      >
        <img src="../assets/save.png" width="22px">
        {{ loaded? 'Loaded!' : 'Load'}}
      </button>
    </div>
  </div>
</template>

<script>
import { game } from "../main";

export default {
  data() {
    return {
      game: game,
      saved: false,
      loaded: false,
      loadAvail: true
    };
  },
  created(){
    this.loadAvail = localStorage.getItem("game") != null;
    console.log(this.loadAvail)
  },
  methods: {
    saveGame: function() {
      if (this.game.loss || this.game.victory) return;
      this.saved = true;
      this.game.save();
      this.loadAvail = true;
      // saved state disappears after 3 seconds
      setTimeout(() => {
        this.saved = false;
      }, 3000);
    },
    loadGame: function() {
      if (this.game.load() == true) {
        this.loaded = true;
        // loaded state disappears after 3 seconds
        setTimeout(() => {
          this.loaded = false;
        }, 3000);
      }
    }
  }
};
</script>

<style>
.nav-bar {
  border-bottom: 0.4rem solid black;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
}
.nav-buttons {
  margin-left: auto;
}
.nav-bar img {
  vertical-align: baseline;
}
</style>
