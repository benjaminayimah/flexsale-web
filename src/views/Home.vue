<template>
  <banner-section v-bind:winHeight="getWindowHeight" />
  <section-one />
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import BannerSection from '../components/includes/BannerSection.vue'
import SectionOne from '../components/includes/SectionOne.vue'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  components: { BannerSection, SectionOne },
  name: 'Home',
  computed: mapGetters(['getWindowHeight']),
  mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>

</style>
