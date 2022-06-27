<template>
<section class="fx jc-c gray-bg">
   <div class="h-list-wrap">
        <div class="overview">
            <div class="list-hold">
                <div class="list-content">
                    <ul>
                        <scroll-list v-for="comingsoon in ComingSoons" :key="comingsoon.id" v-bind:comingsoon="comingsoon" />
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
import ScrollList from './ScrollList.vue'
export default {
  components: { ScrollList },
    name: 'SectionScroll',
    data () {
        return {
            ComingSoons: [
                {id: 1, index: 0, bg: '#d02fa5', color: 'linear-gradient(to right bottom, #d02fa5, #d637ac, #dc3fb4, #e247bb, #e84ec3, #eb54c9, #ed59cf, #f05fd5, #ef64db, #ef69e1, #ee6ee7, #ed73ed)'},
                {id: 2, index: 1, bg: '#2f60d0', color: 'linear-gradient(to right bottom, #2f60d0, #3767d6, #3f6edc, #4775e2, #4e7ce8, #5281ea, #5686ec, #5a8bee, #5d8eec, #6092ea, #6395e8, #6798e6)'},
                {id: 3, index: 3, bg: '#e8ad2b', color: 'linear-gradient(to right bottom, #e8ad2b, #e9b135, #ebb53e, #ecb846, #eebc4e, #eebe53, #edc157, #edc35c, #ebc55f, #e9c661, #e8c864, #e6c967)'},
                {id: 4, index: 4, bg: '#2cbab0', color: 'linear-gradient(to right bottom, #2cbab0, #2cc2b4, #2dcab9, #2fd2bc, #32dac0, #38dec3, #3ee1c6, #43e5c9, #4ae5cc, #52e4cf, #59e4d2, #60e3d4)'},
                {id: 5, index: 2, bg: '#b12fd0', color: 'linear-gradient(to right bottom, #b12fd0, #b737d6, #bd3fdc, #c447e2, #ca4ee8, #cd54e9, #d15aeb, #d460ec, #d466e9, #d46ce6, #d472e3, #d477e0)'},
            ],
        }
    }
}
</script>
<style lang="scss" scoped>

.h-list-wrap{
    display: block;
    overflow-y: hidden;
    align-items: stretch;
    position: relative;
    padding-top: 80px;
    .overview{
        display: flex;
        flex-direction: column;
        position: relative;
        outline: 0;
        align-items: stretch;
    }
}

.list-hold{
    display: flex;
    position: relative;
    height: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    align-items: stretch;
    &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; 
    scrollbar-width: none;  
    } 
    
    .list-content{
        display: flex;
        height: 100%;
        align-items: stretch;
        ul{
            padding: 0 6%;
            display: flex;
            flex-direction: row;
            margin: 0;
            gap: 32px;
            
        }
    }
}
</style>