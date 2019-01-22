<template>
  <div id="status-bar" class="nes-container">
    <div class="status-number">Bombs<h2>{{ game.bombs - game.marked }}</h2></div>
    <button class="nes-btn" v-on:click="resetGame()">Reset</button>
    <div class="status-number">Time<h2>{{ game.timer }}</h2></div>
  </div>
</template>

<script>
import { game } from "../main";
export default {
  data() {
    return {
      game: game,
      prova: ''
    };
  },
  mounted(){
    if(localStorage.prova){
      this.prova = localStorage.prova;
    }
  },
  watch:{
    prova(newProva){
      localStorage.prova = newProva;
    }
  },
  methods: {
      resetGame: function(){
          this.game.initialize(this.game.height,this.game.width);
      }
  }
};
</script>

<style>
#status-bar{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.status-number{
  margin: 0px auto;
  text-align: center;

}
</style>
