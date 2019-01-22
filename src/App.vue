<template>
  <div id="app" class="nes-container with-title">
    <h2 class="title">Minesweeper</h2>
    <StatusBar/>
    <Minefield :game="game"/>
  </div>
</template>

<script>
import Minefield from "./components/Minefield";
import StatusBar from "./components/StatusBar";
import { game } from "./main";

export default {
  name: "App",
  data() {
    return {
      game: game
    };
  },
  components: {
    Minefield,
    StatusBar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
html{
  cursor: auto;
}
body {
  margin: 0px;
  padding: 0px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#app {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
}
</style>
