<template>
    <section class="policies-wrapper fx jc-c">
        <div class="policies-holder">
            <h1>Contact us</h1>
            <div class="hero-image-holdr">
                <img src="../../public/img/multi-device.svg" alt="Multiple Device Access">
            </div>
            <div>Send us an email on <a title="Email us" href="mailto:info@flexsale.store" class="a-underline email-link">info@flexsale.store</a></div>
        </div>
    </section>
</template>
<script>
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
    name: 'Contact',
    mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>
h1 {
    margin-bottom: 30px;
}
</style>