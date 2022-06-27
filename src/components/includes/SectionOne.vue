<template>
    <section class="fx jc-c gray-bg">
        <div class="section-wrapper fx">
            <div class="fx-col jc-c col features-col-1">
                <!-- <div> -->
                <h1>Packed with cool features</h1>
                <div class="description">Flexsale is comes with useful features with new features rolling out every month.</div>
                <!-- </div> -->
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="120" viewBox="0 0 294.305 118.461">
                        <path d="M12196.107-2158.54a3.711,3.711,0,0,1-3.7-3.7v-33.3a3.711,3.711,0,0,1,3.7-3.7l18.5.018a3.694,3.694,0,0,1,3.7,3.68v33.3a3.711,3.711,0,0,1-3.7,3.7Zm0-7.4h18.5v-25.9h-18.5Zm-64.557,7.4a4.113,4.113,0,0,1-4.121-4.124v-68.724a4.113,4.113,0,0,1,4.121-4.124h46.734a4.113,4.113,0,0,1,4.121,4.124v68.724a4.113,4.113,0,0,1-4.121,4.124Zm20.962-5.516a2.438,2.438,0,0,0,2.406,2.422,2.466,2.466,0,0,0,2.423-2.422,2.438,2.438,0,0,0-2.423-2.4A2.424,2.424,0,0,0,12152.513-2164.056Zm-19.586-5.48h43.981v-57.728h-43.981ZM11924-2167.111v-.236c.006-1.653.471-5.27,3.67-5.651h15.909v-97.042a7.019,7.019,0,0,1,7-6.961h142.306a7.045,7.045,0,0,1,7,6.961V-2173h14.829c4.691.163,4.691,4.256,4.75,5.391v1.457a4.657,4.657,0,0,1-4.078,4.357c-6.335,0-17.666.025-23.642.025h-164.105C11925.137-2161.769,11923.94-2165.312,11924-2167.111Zm80.518-2.631h34.436a4.043,4.043,0,0,0,3.949-3.054h-42.335A4.846,4.846,0,0,0,12004.52-2169.741Zm-54.426-96.594v86.012a.817.817,0,0,0,.815.813h141.655a.814.814,0,0,0,.813-.812v-86.012a.814.814,0,0,0-.812-.812h-141.655A.792.792,0,0,0,11950.094-2266.336Zm70.015-5.78a1.634,1.634,0,0,0,1.629,1.628,1.634,1.634,0,0,0,1.628-1.628,1.633,1.633,0,0,0-1.628-1.628A1.634,1.634,0,0,0,12020.108-2272.116ZM11924-2167.347Z" transform="translate(-11924 2277.001)" fill="#fff"/>
                    </svg>
                </div>
            </div>
            <div class="features grid">
                <div class="grid-item grid">
                    <div class="item-1 grid-sub"></div>
                    <div class="item-2 grid-sub"></div>
                    <div class="item-3 grid-sub"></div>
                </div>
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
.section-wrapper{
    width: 80%;
    padding: 80px 0;
    gap: 30px;
    .features-col-1{
        border-radius: 24px;
        height: 620px;
        width: 40%;
        background-image: linear-gradient(to right bottom, #5348f4, #504ef4, #4e54f3, #4c5af2, #4b5ff1, #4567f2, #3f6ef3, #3c75f3, #337ff5, #2f89f6, #3191f6, #399af5);
        padding: 20px 50px;
        color: #fff;
        h1 {
            font-size: 3.6rem;
        }
    }
    .features {
        background-color: #fff;
        width: 60%;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        border-radius: 24px;
        .grid-item{
            border-radius: 24px;
            padding: 20px;
        }
        .grid {
            gap: 20px;
            .item-1 {
                grid-column: 1 / span 2;
                grid-row: 1;
            }
            .item-2 {
            }
            .item-3 {
            }
        }
        .grid-sub{
            border-radius: 12px;
            background-color: #F2F2F7;
        }
    }
}
</style>