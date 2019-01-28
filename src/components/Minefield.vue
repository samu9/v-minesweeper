<template>
  <div class="minefield nes-container">
    <div class="mine-row" v-for="(row,r) of grid" :key="r">
      <div
        class="cell"
        v-for="(cell,c) of row"
        :key="c"
        v-on:click.prevent="game.revealCell(r,c)"
        v-on:click.right.prevent="game.setFlag(r,c)"
        v-bind:class="{ 
          bombed : cell.bomb && cell.revealed,
          flagged  : cell.flagged,
          revealed : cell.revealed,
          ['cell' + cell.value] : cell.revealed
          }"
      >
        {{
        cell.bomb && cell.revealed? '' :
        cell.revealed && cell.value == 0 ? '' :
        cell.revealed && !cell.bomb? cell.value :
        !cell.revealed? '' :
        '' }}
        <img v-if="cell.flagged" src="../assets/flag.png">
        <img v-if="cell.bomb && cell.revealed" src="../assets/bomb.png">
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// import { game } from "../main";
export default {
  name: "Minefield",
  props: {
    game: Object
  },
  data() {
    return {
      grid: []
    };
  },
  created: function() {
    this.updateGrid();
    this.game.EventBus.$on("updatedGrid", newGrid => {
      this.updateGrid();
    });
  },
  mounted: function() {},
  methods: {
    updateGrid: function() {
      this.grid = [];
      for (let row = 0; row < this.game.height; row++) {
        let obj = [];
        for (let col = 0; col < this.game.width; col++) {
          obj[col] = [];
          obj[col].bomb = this.game.grid[row][col].bomb;
          obj[col].revealed = this.game.grid[row][col].revealed;
          obj[col].flagged = this.game.grid[row][col].flagged;
          obj[col].value = this.game.grid[row][col].value;
        }
        Vue.set(this.grid, row, obj);
      }
      // localStorage.game = JSON.stringify(this.game);
    },
    reveal(row,col){

    },
    flag(row,col){

    }
  }
};
</script>

<style>
@import "./Minefield.css";
</style>
