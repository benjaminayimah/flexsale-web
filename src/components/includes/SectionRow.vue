<template>
    <section id="section_row" class="fx jc-c">
        <div class="section-wrapper fx-col ai-c">
            <div class="section-row fx-col ai-c gap-32">
                 <h1>Packed with cool features</h1>
                <div class="description fx">Flexsale is comes with useful features with new features rolling out every month.</div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'SectionOne',
}
</script>
<style lang="scss" scoped>
#section_row{
    background-color: $bg-color;
}
.section-wrapper{
    width: 80%;
    padding: 140px 0;
    gap: 30px;
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
}
</style>