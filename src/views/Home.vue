<template>
  <section id="banner" class="fx jc-c ai-c" :style="{ 'minHeight': getWindowHeight-250 + 'px'}">
    <div class="banner-wrapper fx">
      <div class="fx-col banner-caption-wrapper gap-32">
        <h1><span>A Smart</span> way to manage your inventory.</h1>
        <div class="caption-sub">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</div>
        <div class="fx button-wrapper"><router-link to="" class="a-button button-primary">Create Free Account</router-link></div>
      </div>
      <div class="banner-image fx ai-c">
        <img src="../../public/img/home-page.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
  name: 'Home',
  computed: mapGetters(['getWindowHeight']),
  mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>
.banner-wrapper{
  width: 80%;
}
.banner-caption-wrapper{
  width: 55%;
  h1 {
    font-size: 6rem;
    line-height: 1;
    span {
      color: $primary;
    }
  }
  .caption-sub{
    width: 70%;
    font-size: 1.3rem;
    color: $gray;
  }
  a {
    padding: 25px 28px;
    font-size: 1.1rem;
  }
}
.banner-image{
  width: 30%;
  flex-grow: 1;
  // background-image: url('../../public/img/banner-colors.png');
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: 50% 50%;
  img {
    width: 100%;
  }
}
</style>
