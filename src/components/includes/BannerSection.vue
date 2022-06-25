<template>
    <section id="banner" class="fx jc-c ai-c" :style="{ 'minHeight': winHeight-150 + 'px'}">
        <div class="section-wrapper fx">
            <div class="fx-col banner-caption-wrapper gap-32">
                <h1><span>A Smart</span> way to manage your inventory.</h1>
                <div class="caption-sub">Get more done by leveraging on the power of the most advanced inventory management tool yet. <strong>Records Sales, perform Analytics, create Tags,</strong> and more. </div>
                <div class="fx button-wrapper"><a :href="appHostname+'/signup'" class="a-button button-primary">Create Free Account</a></div>
            </div>
            <div class="banner-image fx ai-c">
                <img src="../../../public/img/home-banner.svg" alt="">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'BannerSection',
    props: ['winHeight', 'appHostname']
}
</script>
<style lang="scss" scoped>
.section-wrapper{
    padding: 80px 0;
    width: 80%;
}
.banner-caption-wrapper{
  width: 50%;
  h1 {
    font-size: 6rem;
    line-height: 1;
    span {
      color: $primary;
    }
  }
  .caption-sub{
    width: 80%;
    font-size: 1.3rem;
    color: $gray;
  }
  a {
    padding: 25px 28px;
    font-size: 1.1rem;
  }
  strong{
    color: $dark;
    font-weight: 600;
  }
}
.banner-image{
  width: 50%;
  flex-grow: 1;
//   background-image: url('../../../public/img/banner-colors.png');
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: 50% 50%;
  img {
    width: 130%;
  }
}
</style>