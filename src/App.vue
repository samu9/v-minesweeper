<template>
  <div id="app">
    <Navbar/>
    <div id="main" class="row">
      <div class="col-lg-3">
        <Settings/>
        <Leaderboard/>
      </div>
      <div class="col-lg-6">
        <div id="game">
          <StatusBar/>
          <Minefield :game="game"/>
          <NewRecordBox/>
        </div>
      </div>
      <div class="offset-lg-3"></div>
    </div>
  </div>
</template>

<script>
import Minefield from "./components/Minefield";
import StatusBar from "./components/StatusBar";
import Leaderboard from "./components/Leaderboard";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";
import NewRecordBox from "./components/NewRecordBox";
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
    StatusBar,
    Leaderboard,
    Settings,
    Navbar,
    NewRecordBox
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
html {
  cursor: auto;
}
#app {
  margin: 0px;
  padding: 0px;
  height: 100vh;
}
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
#main {
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: 0px auto;
}
#game {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
  padding: 1rem;
}
</style>
