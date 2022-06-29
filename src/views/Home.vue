<template>
  <banner-section v-bind:winHeight="getWindowHeight" v-bind:appHostname="getAppHostname"/>
  <section-row v-bind:payload="rowWithImage" />
  <section-features-overview />
  <!-- <section-two /> -->
  <!-- <section-one /> -->
  <!-- <section-three /> -->
  <!-- <section-four /> -->
  <!-- <section-scroll /> -->
  <!-- <section-sub-hero /> -->
  <!-- <section-row v-bind:payload="rowNoImage" /> -->
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import BannerSection from '../components/includes/BannerSection.vue'
// import SectionFour from '../components/includes/SectionFour.vue'
// import SectionOne from '../components/includes/SectionOne.vue'
import SectionRow from '../components/includes/SectionRow.vue'
// import SectionScroll from '../components/includes/SectionScroll.vue'
// import SectionSubHero from '../components/includes/SectionSubHero.vue'
// import SectionThree from '../components/includes/SectionThree.vue'
// import SectionTwo from '../components/includes/SectionTwo.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
import SectionFeaturesOverview from '../components/includes/SectionFeaturesOverview.vue'
export default {
  components: { BannerSection,/* SectionOne, SectionTwo SectionThree, SectionFour, SectionScroll, SectionSubHero,*/ SectionRow,  SectionFeaturesOverview },
  name: 'Home',
  computed: mapGetters(['getWindowHeight', 'getAppHostname']),
  mixins: [scrollTopMixin],
  data() {
    return {
      rowWithImage : { title: 'Multiple Device Access', description: 'Get Flexsale app on all platforms: iOS, MacOS, Android playStore and Windows OS.', image: true},
      rowNoImage : { title: 'Packed with cool features', description: 'Flexsale is comes with useful features with new features rolling out every month.'}
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
