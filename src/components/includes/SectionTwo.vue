<template>
    <section class="fx jc-c gray-bg">
        <div class="section-wrapper gap-32 fx">
            <div class="fx-col jc-c section-two-col-1 col-30 col">
                <h1>Multiple Device Access</h1>
                <div class="description">Flexsale is comes with useful features with new features rolling out every month.</div>
            </div>
            <div class="col-70 section-two-col-2">

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
    padding: 80px 0;
    .col-30 {
        height: 620px;
        padding: 20px 50px;
        border-radius: 24px;
        background-color: #fff;
        h1 {
            font-size: 3.6rem;
        }
    }
    .col-70{
        background-color: #fff;
        border-radius: 24px;
    }
    
}
</style>