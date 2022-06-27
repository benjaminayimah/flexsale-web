<template>
    <section class="fx jc-c gray-bg">
        <div class="section-wrapper gap-32 fx">
            <div class="fx-col jc-c section-three-col-1 col-50 col">
                <h1>Multiple Device Access</h1>
                <div class="description">Flexsale is comes with useful features with new features rolling out every month.</div>
                <div class="fx"><a href="#" class="a-button button-alt">Create Free Account</a></div>
            </div>
            <div class="col-50 section-three-col-2">

            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionTwo',
}
</script>
<style lang="scss" scoped>
.section-wrapper{
    width: 80%;
    padding-top: 80px;
    .section-three-col-1 {
        height: 620px;
        padding: 20px 50px;
        h1 {
            font-size: 3.6rem;
        }
    }
    .section-three-col-2{
        background-image: linear-gradient(to right bottom, #2f60d0, #3767d6, #3f6edc, #4775e2, #4e7ce8, #5281ea, #5686ec, #5a8bee, #5d8eec, #6092ea, #6395e8, #6798e6);
        border-radius: 24px;
    }
    
}
</style>