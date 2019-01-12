<template>
  <div class="minefield">
    <div class="row" v-for="(row,r) of grid" :key="r">
      <div
        class="cell"
        v-for="(cell,c) of row"
        :key="c"
        v-on:click.prevent="reveal(r,c)"
        v-on:click.right.prevent="setFlag(r,c)"
        v-bind:class="{ 
          bombed : cell.bomb && cell.revealed,
          flagged : cell.flagged,
          revealed : cell.revealed,
          ['cell' + cell.value] : cell.revealed
          }"
      >
        {{
        cell.flagged? 'F' :
        cell.bomb && cell.revealed? 'B' :
        cell.revealed && cell.value == 0 ? '' :
        cell.revealed && !cell.bomb? cell.value :
        !cell.revealed? '' :
        '' }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Minefield",
  data() {
    return {
      grid: {},
      width: 5,
      height: 5,
      mineProb: 0.1,
      bombs: 0,
      defused: 0
    };
  },
  mounted: function() {
    // placing bombs and initializing cells
    for (let row = 0; row < this.height; row++) {
      let rowObj = {};
      for (let col = 0; col < this.width; col++) {
        rowObj[col] = {
          bomb: Math.random() < this.mineProb,
          revealed: false,
          flagged: false,
          value: 0
        };
        if (rowObj[col]. bomb){
          this.bombs ++;
        }
      }
      Vue.set(this.grid, row, rowObj);
    }

    // checking neighbors to set the numeric value
    for (let row in this.grid) {
      for (let col in this.grid[row]) {
        if (!this.grid[row][col].bomb) {
          this.grid[row][col].value = this.checkNeighbors(
            parseInt(row),
            parseInt(col)
          );
        }
      }
    }
    this.coveredCells = (this.width * this.height) - this.bombs;
    console.log("Total bombs",this.bombs);
    // console.log(JSON.stringify(this.grid, null, 2));
  },
  methods: {
    getEdges: function(row, col) {
      return {
        row: {
          start: row > 0 ? row - 1 : row,
          end: row < this.height - 1 ? +row + 1 : row
        },
        col: {
          start: col > 0 ? col - 1 : col,
          end: col < this.width - 1 ? +col + 1 : col
        }
      };
    },
    checkNeighbors: function(row, col) {
      let count = 0;
      var edges = this.getEdges(row, col);

      for (let i = edges.row.start; i <= edges.row.end; i++) {
        for (let j = edges.col.start; j <= edges.col.end; j++) {
          if (this.grid[i][j].bomb) {
            count++;
          }
        }
      }
      return count;
    },
    reveal: function(row, col) {
      if (this.grid[row][col].revealed || this.grid[row][col].flagged) {
        return;
      }
      if (this.grid[row][col].bomb) {
        console.log("Game Over");
        return;
      }
      this.grid[row][col].revealed = true;
      this.coveredCells--;
      if (this.grid[row][col].value === 0) {
        this.revealNeighbors(row, col);
      }
      this.checkWin();
    },
    revealNeighbors: function(row, col) {
      var edges = this.getEdges(row, col);

      for (let i = edges.row.start; i <= edges.row.end; i++) {
        for (let j = edges.col.start; j <= edges.col.end; j++) {
          if (
            this.grid[i][j].revealed ||
            this.grid[i][j].flagged ||
            this.grid[i][j].bomb
          ) {
            continue;
          }
          this.grid[i][j].revealed = true;
          this.coveredCells--;
          if (this.grid[i][j].value === 0) {
            this.revealNeighbors(i, j);
          }
        }
      }
    },
    setFlag: function(row, col) {
      if (this.grid[row][col].revealed) {
        return;
      }
      if(!this.grid[row][col].flagged){
        this.grid[row][col].flagged = true;
        if(this.grid[row][col].bomb){
          this.defused++;
        }
      } else {
        this.grid[row][col].flagged = false;
        if(this.grid[row][col].bomb){
          this.defused--;
        }
      }
      this.checkWin();
    },
    checkWin: function() {
      console.log("Defused",this.defused,"Covered", this.coveredCells);
      if( this.defused == this.bombs && this.coveredCells == 0){
        console.log("WIN");
      }
    }
  }
};
</script>

<style>
@import "./Minefield.css";
</style>
