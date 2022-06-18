<template>
    <div class="top-wrapper">
        <span>For a guide and recipes on how to configure / customize this project.</span>
        <a href="#">Learn more</a>
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
    
}
</style>