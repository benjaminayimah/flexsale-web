<template>
    <section class="policies-wrapper fx jc-c">
        <div class="policies-holder">
            <h1>Careers</h1>
            <div class="hero-image-holdr">
                <img src="../../public/img/multi-device.svg" alt="Multiple Device Access">
            </div>
            <div>There are currently no vacancies available. Please check back later.</div>
        </div>
    </section>
</template>
<script>
import scrollTopMixin from '../mixins/scrollTopMixin'
export default {
    name: "Careers",
    mixins: [scrollTopMixin]
}
</script>
<style lang="scss" scoped>
h1 {
    margin-bottom: 30px;
}
</style>