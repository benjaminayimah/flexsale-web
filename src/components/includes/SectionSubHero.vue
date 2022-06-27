<template>
    <section class="fx jc-c gray-bg">
        <div class="section-wrapper fx-col">
            <div class="uni-col w-100 fx jc-c">
                <div class="section-row fx-col ai-c gap-32">
                    <h1>Packed with cool features</h1>
                    <div class="description fx">Flexsale is comes with useful features with new features rolling out every month.</div>
                    <div class="fx"><a href="#" class="a-button button-alt">Create Free Account</a></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionSubHero',
}
</script>
<style lang="scss" scoped>
.section-wrapper{
    width: 80%;
    padding: 80px 0;
    .section-row{
        max-width: 40%;
        text-align: center;
        h1 {
            font-size: 3.6rem;
            text-align: center;
        }
        .description{
            width: 70%;
            font-size: 1.3rem;
        }
    }
    .uni-col{
        background-color: #fff;
        border-radius: 24px;
        padding: 80px 30px;
        min-height: 600px;
    }
}
</style>