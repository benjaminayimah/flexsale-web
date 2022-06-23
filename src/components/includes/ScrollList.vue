<template>
    <li class="fx-col fx-js" :class="{ 'show-overlay' : showOverlay}" :style="{'backgroundImage': commingsoon.color}">
        <div class="card-overlay"></div>
        <div class="content-holder">
            <div class="coming-soon"><span>Coming soon</span></div>
            <h2>Invoicing</h2>
            <div class="button" @click="toggleOverlay">
                <svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 22.001 21.867">
                    <path d="M10805.638-10751.066h2v9.933h9.637v2h-9.637v9.935h-2v-9.935h-10.364v-2h10.364Z" transform="translate(-10795.273 10751.066)" fill="#0e142c"/>
                </svg>
            </div>
        </div>
    </li>
</template>
<script>
export default {
    name: 'SectionScrollList',
    props: ['commingsoon'],
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
}
.show-overlay {
    .card-overlay{
        opacity: 1;
        visibility: visible;
    }
    .button{
        transform: rotate(45deg);
    }
}
</style>