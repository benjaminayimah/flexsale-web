<template>
  <div id="home_wrapper" :class="[{ 'tab-view': getTablet }, {'desk-view': getDesktop }, {'mob-view': getMobile } ]">
    <top-info-bar />
    <Header v-bind:mob="getMobile" v-bind:tab="getTablet" v-bind:desk="getDesktop" v-bind:winHeight="getWindowHeight" />
    <router-view/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Header from './components/includes/Header.vue';
import TopInfoBar from './components/includes/TopInfoBar.vue';
export default {
    name: "App",
    components: { Header, TopInfoBar },
    computed: mapGetters(['getTablet', 'getMobile', 'getDesktop', 'getWindowHeight']),
    created() {
      this.$store.commit('computeWindow')
      window.addEventListener('resize', this.windowSize )
    },
    unmounted() {
      window.removeEventListener('resize', this.windowSize)
    },
    methods: {
      windowSize() {
        setTimeout(()=> {
          this.$store.commit('computeWindow')
        }, 100)
      },
    }
}
</script>

<style lang="scss">
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
