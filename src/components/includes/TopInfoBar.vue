<template>
    <div class="fx ai-c jc-c gap-8">
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
.fx{
    background-color: $primary;
    height: 50px;
    color: #ffffff;
    font-size: 15px;
    background-image: url('../../assets/images/svg.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    span{
        font-weight: 400; 
        white-space: nowrap

    }
    a{
        color: #ffffff;
        font-weight: 500;
        white-space: nowrap
    }
    
}
</style>