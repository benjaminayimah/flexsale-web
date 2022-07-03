<template>
    <div class="add-backdrop"></div>
</template>
<script>
export default {
    name: 'Overlay'
}
</script>
<style lang="scss" scoped>
.add-backdrop{
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 200;
}
</style>