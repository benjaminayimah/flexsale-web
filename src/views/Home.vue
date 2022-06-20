<template>
  <banner-section v-bind:winHeight="getWindowHeight" />
  <section-one />
  <section-two />
  <section-three />
  <section-four />
  <section-scroll />
  <section-row />
  <section-sub-hero />
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import BannerSection from '../components/includes/BannerSection.vue'
import SectionFour from '../components/includes/SectionFour.vue'
import SectionOne from '../components/includes/SectionOne.vue'
import SectionRow from '../components/includes/SectionRow.vue'
import SectionScroll from '../components/includes/SectionScroll.vue'
import SectionSubHero from '../components/includes/SectionSubHero.vue'
import SectionThree from '../components/includes/SectionThree.vue'
import SectionTwo from '../components/includes/SectionTwo.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  components: { BannerSection, SectionOne, SectionTwo, SectionThree, SectionFour, SectionScroll, SectionRow, SectionSubHero },
  name: 'Home',
  computed: mapGetters(['getWindowHeight']),
  mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>

</style>
