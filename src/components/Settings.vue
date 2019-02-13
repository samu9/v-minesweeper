<template>
  <div>
    <button v-on:click="openSettings = !openSettings" class="nes-btn is-primary btn-block">Settings</button>
    <div v-if="openSettings" class="nes-container">
      <div class="nes-container with-title">
        <h3 class="title">Difficulty:</h3>
        <div>
          <label v-for="(d,i) in diff" :key="i">
            <input
              type="radio"
              class="nes-radio"
              name="difficulty"
              :value="i"
              v-model="selectedDifficulty"
            >
            <span>{{ d }}</span>
          </label>
        </div>

        <button v-on:click="startDifficultyGame()" class="nes-btn is-success">Start!</button>
      </div>

      <div class="nes-container with-title">
        <h3 class="title">Custom:</h3>

        <div class="nes-field mb-3">
          <label>Grid size (3 - 30)</label>
          <input v-model="custom.height" type="text" class="nes-input sett-input grid-input" maxlength="2">
          <input v-model="custom.width" type="text" class="nes-input sett-input grid-input" maxlength="2">
        </div>
        <div class="nes-field mb-3">
          <label>Bombs</label>
          <input v-model="custom.bombs" type="text" class="nes-input sett-input">
        </div>
        <button v-on:click="startCustomGame()" class="nes-btn is-success">Start!</button>
      </div>
    </div>
  </div>
</template>

<script>
import { game } from "../main";
export default {
  data() {
    return {
      game: game,
      openSettings: false,
      maxVal: 30,
      minVal: 3,
      custom: {
        height: 0,
        width: 0,
        bombs: 0
      },
      diff: ["Easy", "Normal", "Hard"],
      selectedDifficulty: 0
    };
  },
  mounted() {},
  methods: {
    startCustomGame: function() {
      // limiting user input data
      if (this.custom.height < this.minVal) {
        this.custom.height = this.minVal;
      } else if (this.custom.height > this.maxVal) {
        this.custom.height = this.maxVal;
      }
      if (this.custom.width < this.minVal) {
        this.custom.width = this.minVal;
      } else if (this.custom.width > this.maxVal) {
        this.custom.width = this.maxVal;
      }

      this.game.initialize(
        this.custom.height,
        this.custom.width,
        this.custom.bombs
      );
      this.openSettings = false;
    },
    
    startDifficultyGame() {
      switch (this.selectedDifficulty) {
        case 0:
          this.game.initialize(8, 8, 10, "Easy");
          break;
        case 1:
          this.game.initialize(16, 16, 40, "Normal");
          break;
        case 2:
          this.game.initialize(16, 30, 99, "Hard");
          break;
      };
      this.openSettings = false;
    }
  }
};
</script>

<style>
.sett-input {
  width: 4rem;
  padding-left: 1rem;
}
.sett-input.grid-input{
  display: unset;
}
</style>
