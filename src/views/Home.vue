<template>
  <banner-section v-bind:winHeight="getWindowHeight" v-bind:appHostname="getAppHostname"/>
  <section-row v-bind:payload="rowWithImage" />
  <section-two />
  <section-features-overview />
  <!-- <section-one /> -->
  <section-three />
  <section-four />
  <section-scroll />
  <section-row v-bind:payload="rowNoImage" />
  <section-sub-hero />
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import BannerSection from '../components/includes/BannerSection.vue'
import SectionFour from '../components/includes/SectionFour.vue'
// import SectionOne from '../components/includes/SectionOne.vue'
import SectionRow from '../components/includes/SectionRow.vue'
import SectionScroll from '../components/includes/SectionScroll.vue'
import SectionSubHero from '../components/includes/SectionSubHero.vue'
import SectionThree from '../components/includes/SectionThree.vue'
import SectionTwo from '../components/includes/SectionTwo.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
import SectionFeaturesOverview from '../components/includes/SectionFeaturesOverview.vue'
export default {
  components: { BannerSection, /*SectionOne,*/ SectionTwo, SectionThree, SectionFour, SectionScroll, SectionRow, SectionSubHero, SectionFeaturesOverview },
  name: 'Home',
  computed: mapGetters(['getWindowHeight', 'getAppHostname']),
  mixins: [scrollTopMixin],
  data() {
    return {
      rowWithImage : { title: 'Multiple Device Access', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.', image: 'multi-device.svg'},
      rowNoImage : { title: 'Packed with cool features', description: 'Flexsale is comes with useful features with new features rolling out every month.'}
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
