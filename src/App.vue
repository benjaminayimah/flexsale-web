<template>
  <top-info-bar />
  <Header />
  <router-view/>
</template>
<script>
import Header from './components/includes/Header.vue';
import TopInfoBar from './components/includes/TopInfoBar.vue';
export default {
    name: "App",
    components: { Header, TopInfoBar }
}
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
#app {
  text-align: center;
}
body {
  font-family: $myFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  font-size: 18px;
  margin: 0 ;
  overflow-x: hidden;
}

</style>
