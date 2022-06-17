<template>
    <transition name="slide-fade">
        <div v-if="menuActive && !desk" id="mobile_menu" :style="{ height: winHeight-130 + 'px' }">
            <div class="mob-menu-wrapper fx-js fx-col">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/about">Careers</router-link></li>
                </ul>
                <div class="fx w-100 gap-8">
                    <a href="" class="w-50 signin a-button button-secondary">Login</a>
                    <a href="" class="w-50 a-button button-primary">Get Started</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'MobileMenu',
    props: ['menuActive', 'winHeight', 'desk']
}
</script>
<style lang="scss" scoped>
#mobile_menu{
    position: fixed;
    width: 100%;
    background-color: rgb(255, 255, 255);
}
.mob-menu-wrapper{
    height: 100%;
    padding: 50px 20px;
}
ul{
    li{
        a {
            padding: 20px;
            display: block;
            font-size: 1.8rem;
        }
    }
    .router-link-exact-active {
        color: $primary;
    }
}
.a-button{
    padding: 20px;
}

.signin{
    background-color: $gray-light;
    color: $dark;
    &:hover{
    background-color: $dark;
    color: #fff;
    }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>