<template>
    <li class="fx-col fx-js" :class="{ 'show-overlay' : showOverlay}" :style="{'backgroundImage': comingsoon.color}">
        <div class="card-overlay" :style="{'backgroundColor' : comingsoon.bg }">
            <h2>Invoicing</h2>
            <div class="o-body fx ai-c">Multiple Device Access
Flexsale is comes with useful features with new features rolling out every month.</div>
        </div>
        <div class="content-holder">
            <h2>Invoicing</h2>
            <div class="coming-soon"><span>Coming soon</span></div>
            <div class="button" @click="toggleOverlay">
                <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 22 21.867">
                    <path d="M11318.14-10071.065h3v9.434h9.135v3h-9.135v9.434h-3v-9.434h-9.865v-3h9.865Z" transform="translate(-11308.274 10071.065)" :fill="showOverlay ? comingsoon.bg : '#434752'"/>
                </svg>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    name: 'SectionScrollList',
    props: ['comingsoon'],
    data () {
        return {
            showOverlay: false
        }
    },
    methods: {
        toggleOverlay() {
            this.showOverlay = !this.showOverlay
        }
    }
}
</script>
<style lang="scss" scoped>
li {
    color: #fff;
    height: 520px;
    width: 460px;
    background-color: #fff;
    border-radius: 24px;
    position: relative;
}
.coming-soon{
    display: flex;
    margin-top: 15px;
    span {
        display: flex;
        font-size: 12px;
        padding: 4px 7px;
        border: 1px solid #fff;
        border-radius: 20px;
        font-weight: 500;
    }
}
.button{
    height: 38px;
    width: 38px;
    background-color: #fff;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: 0.3s all;
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    &:hover {
        background-color: $gray-light;
    }
    &:active {
        transform: scale(0.9);
    }
}
.content-holder{
    padding: 30px;
}
.card-overlay{
    position: absolute;
    top: 0;
    width: inherit;
    height: inherit;
    background-color: $dark;
    border-radius: inherit;
    transition: 0.5s all;
    opacity: 0;
    visibility: hidden;
    padding: 30px;
    .o-body{
        height: 100%;
        font-size: 1.2rem;
        font-weight: 500;
        opacity: 0;
        transform: translateY(-20px);
        transition: 0.5s all;
        line-height: 1.4;
    }
}
.show-overlay {
    .card-overlay{
        opacity: 1;
        visibility: visible;
    }
    .button{
        transform: rotate(45deg);
    }
    .o-body{
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>