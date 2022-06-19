<template>
  <banner-section v-bind:winHeight="getWindowHeight" />
  <section-one />
  <section-two />
  <section-three />
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import BannerSection from '../components/includes/BannerSection.vue'
import SectionOne from '../components/includes/SectionOne.vue'
import SectionThree from '../components/includes/SectionThree.vue'
import SectionTwo from '../components/includes/SectionTwo.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  components: { BannerSection, SectionOne, SectionTwo, SectionThree },
  name: 'Home',
  computed: mapGetters(['getWindowHeight']),
  mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>

</style>
