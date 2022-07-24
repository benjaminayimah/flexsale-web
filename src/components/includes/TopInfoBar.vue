<template>
    <div class="top-wrapper">
        <span>You can now install flexsale app on all platforms.</span>
        <router-link class="a-underline" to="/about">Learn more</router-link>
    </div>
</template>
<script>
export default {
    name: 'TopInfoBar'
}
</script>
<style lang="scss" scoped>
.top-wrapper{
    background-color: $primary;
    color: #ffffff;
    font-size: 16px;
    background-image: url('../../assets/images/svg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    padding: 16px 20px;
    span{
        font-weight: 400; 
    }
    a{
        color: #ffffff;
        font-weight: 500;
        white-space: nowrap;
        margin-left: 8px;
    }
    .a-underline {
        color: inherit;
        &::before {
            background-color: rgb(172, 180, 204);
        }
        &::after {
            background-color: #fff !important;
        }
        
    }
}
</style>