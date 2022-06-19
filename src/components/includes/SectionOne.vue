<template>
    <section id="features-overview" class="fx jc-c">
        <div class="section-wrapper fx">
            <div class="fx-col jc-c features-col-1">
                <!-- <div> -->
                <h1>Packed with cool features</h1>
                <div class="description">Flexsale is comes with useful features with new features rolling out every month.</div>
                <!-- </div> -->
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 0 286.94 124.044">
                        <path  d="M12198.741-2677.957a3.711,3.711,0,0,1-3.7-3.7v-33.3a3.711,3.711,0,0,1,3.7-3.7l18.5.018a3.7,3.7,0,0,1,3.7,3.681v33.3a3.711,3.711,0,0,1-3.7,3.7Zm0-7.4h18.5v-25.9h-18.5Zm-64.555,7.4a4.112,4.112,0,0,1-4.122-4.125v-68.72a4.114,4.114,0,0,1,4.122-4.125h46.732a4.116,4.116,0,0,1,4.125,4.125v68.72a4.114,4.114,0,0,1-4.125,4.125Zm20.963-5.515a2.437,2.437,0,0,0,2.4,2.423,2.466,2.466,0,0,0,2.423-2.423,2.438,2.438,0,0,0-2.423-2.4A2.422,2.422,0,0,0,12155.149-2683.472Zm-19.586-5.481h43.981v-57.728h-43.981Zm-201.563,11v-15.5h31.011a15.549,15.549,0,0,1-15.5-15.507v-77.526a15.549,15.549,0,0,1,15.5-15.507h124.044a15.551,15.551,0,0,1,15.5,15.507v77.526a15.551,15.551,0,0,1-15.5,15.507h31.011v15.5Zm31.011-31.011h124.044v-77.526h-124.044Z" transform="translate(-11934 2802.001)" fill="#fff"/>
                    </svg>
                </div>
            </div>
            <div class="features">
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
                <div class="grid-item"></div>
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
#features-overview{
    background-color: $bg-color;
}
.section-wrapper{
    width: 80%;
    padding: 80px 0;
    gap: 30px;
    .features-col-1{
        border-radius: 24px;
        height: 620px;
        width: 40%;
        background-color: #3a53e3;
        padding: 20px 50px;
        color: #fff;
        h1 {
            font-size: 3.6rem;
            font-weight: 600;
        }
        .description{
            width: 75%;
            padding: 20px 0;
        }
    }
    .features {
        width: 60%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        .grid-item{
            background-color: #fff;
            border-radius: 18px;

        }
    }
}
</style>