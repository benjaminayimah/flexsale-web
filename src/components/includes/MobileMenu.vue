<template>
    <transition name="slide-fade">
        <div v-if="menuActive && !desk" id="mobile_menu" :style="{ height: winHeight-(100+getFloatingDiv.top) + 'px', top: getFloatingDiv.bottom + 'px'}">
            <div class="mob-menu-wrapper fx-js fx-col">
                <ul>
                    <li @mouseup="$emit('dismissMenu')" v-for="menu in menus" :key="menu.id"><router-link :to="menu.url">{{ menu.name }}</router-link></li>
                </ul>
                <div class="fx w-100 gap-8">
                    <a :href="appHostname+'/signin'" class="w-50 signin a-button button-secondary">Login</a>
                    <a :href="appHostname+'/signup'" class="w-50 a-button button-primary">Get Started</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'MobileMenu',
    props: ['menuActive', 'winHeight', 'desk', 'menus', 'appHostname'],
    computed: mapGetters(['getFloatingDiv']),
}
</script>
<style lang="scss" scoped>
#mobile_menu{
    position: fixed;
    width: 100%;
    background-color: rgb(255, 255, 255);
    bottom: 0;
    z-index: 100;
}
.mob-menu-wrapper{
    height: 100%;
    padding: 20px 20px 50px 20px;
}
ul{
    li{
        display: flex;
        transition: 0.5s all;
        flex-grow: 1;
        height: 75px;

        a {
            display: flex;
            font-size: 1.8rem;
            padding: 0 20px;
            flex-grow: 1;
            height: inherit;
            align-items: center;
        }
    }
    .router-link-exact-active {
        color: $primary;
    }
}
.a-button{
    padding: 20px;
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