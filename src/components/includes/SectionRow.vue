<template>
    <section class="fx jc-c gray-bg">
        <div class="section-wrapper fx-col ai-c">
            <div class="section-row fx-col ai-c gap-16">
                 <h1>{{ payload.title }}</h1>
                <div class="description fx">{{ payload.description }}</div>
            </div>
            <div v-if="payload.image" class="hero-image-holdr">
                <img src="../../../public/img/multi-device.svg" alt="Multiple Device Access">
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'SectionOne',
    props: ['payload'],
    computed: mapGetters(['getHostname'])
}
</script>
<style lang="scss" scoped>
.section-wrapper{
    width: 80%;
    padding-top: 80px;
    gap: 30px;
    .section-row{
        max-width: 40%;
        text-align: center;
        h1 {
            font-size: 3.6rem;
            text-align: center;
        }
        .description{
            width: 80%;
            font-size: 1.3rem;
        }
    }
}
</style>