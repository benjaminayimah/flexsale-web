<template>
    <section class="policies-wrapper fx jc-c">
        <div class="policies-holder">
            <h1>About</h1>
            <div class="hero-image-holdr">
                <img src="../../public/img/multi-device.svg" alt="Multiple Device Access">
            </div>
            <div>Flexsale gives you a flexible and intuitive way to manage your store's inventory, record sales, perform sales analysis, get notified of expiring products and more. Get a free account now. Keep up to date with your stocks with our multi-platform inventory and point of sale application.</div>
        </div>
    </section>
</template>
<script>
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
    name: "About",
    mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>
h1 {
    margin-bottom: 30px;
}
</style>