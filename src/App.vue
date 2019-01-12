<template>
  <div id="app">
    <Minefield/>
  </div>
</template>

<script>
import Minefield from "./components/Minefield";

export default {
  name: "App",
  components: {
    Minefield
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
