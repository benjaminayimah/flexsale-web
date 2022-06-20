<template>
<section id="section_scroll" class="fx jc-c">
   <div class="h-list-wrap">
        <div class="overview">
            <div class="list-hold">
                <div class="list-content">
                    <ul>
                        <li class="fx-col fx-js" v-for="supplier in suppliersALT" :key="supplier.id" :style="{'backgroundImage': supplier.color}">
                            <div>
                                <div class="coming-soon"><span>Coming soon</span></div>
                                <h2>Invoicing</h2>
                            </div>
                            <div class="fx fx-end">
                                <div class="button">
                                    <svg xmlns="http://www.w3.org/2000/svg"  height="20" viewBox="0 0 22.001 21.867">
                                        <path d="M10805.638-10751.066h2v9.933h9.637v2h-9.637v9.935h-2v-9.935h-10.364v-2h10.364Z" transform="translate(-10795.273 10751.066)" fill="#0e142c"/>
                                    </svg>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    name: 'SectionScroll',
    data () {
        return {
            suppliersALT: [
                {id: 1, index: 0, color: 'linear-gradient(to right bottom, #d02fa5, #d637ac, #dc3fb4, #e247bb, #e84ec3, #eb54c9, #ed59cf, #f05fd5, #ef64db, #ef69e1, #ee6ee7, #ed73ed)'},
                {id: 2, index: 1, color: 'linear-gradient(to right bottom, #2f60d0, #3767d6, #3f6edc, #4775e2, #4e7ce8, #5281ea, #5686ec, #5a8bee, #5d8eec, #6092ea, #6395e8, #6798e6)'},
                {id: 3, index: 3, color: 'linear-gradient(to right bottom, #e8ad2b, #e9b135, #ebb53e, #ecb846, #eebc4e, #eebe53, #edc157, #edc35c, #ebc55f, #e9c661, #e8c864, #e6c967)'},
                {id: 4, index: 4, color: 'linear-gradient(to right bottom, #2cbab0, #2cc2b4, #2dcab9, #2fd2bc, #32dac0, #38dec3, #3ee1c6, #43e5c9, #4ae5cc, #52e4cf, #59e4d2, #60e3d4)'},
                {id: 5, index: 2, color: 'linear-gradient(to right bottom, #b12fd0, #b737d6, #bd3fdc, #c447e2, #ca4ee8, #cd54e9, #d15aeb, #d460ec, #d466e9, #d46ce6, #d472e3, #d477e0)'},
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
#section_scroll{
    background-color: $bg-color;
}
.h-list-wrap{
    display: block;
    overflow-y: hidden;
    align-items: stretch;
    position: relative;
    padding: 80px 0;
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
            li {
                color: #fff;
                height: 450px;
                width: 450px;
                background-color: #fff;
                border-radius: 24px;
                padding: 30px;
                // display: grid;
                // place-items: center;
            }
            .coming-soon{
                display: flex;
                margin-bottom: 15px;
                span {
                    display: flex;
                    font-size: 13px;
                    padding: 6px 10px;
                    border: 1px solid #fff;
                    border-radius: 20px;
                }
            }
            .button{
                height: 45px;
                width: 45px;
                background-color: #fff;
                border-radius: 50%;
                display: grid;
                place-items: center;
            }
        }
    }
}
</style>