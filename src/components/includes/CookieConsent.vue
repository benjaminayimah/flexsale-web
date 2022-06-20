<template>
    <div id="cookie_consent">
        <div class="cookies-wrapper fx-col">
            <h2>🍪Cookies!</h2>
            <div class="cookies-body">
                This website uses <router-link to="/cookies-policy">cookies</router-link> to ensure you get the best browsing experience.
            </div>
            <div class="cookie-bottom fx">
                <button class="button button-primary" @click.prevent="this.$store.commit('setCookie')">OK</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CookieConsent'
}
</script>
<style lang="scss" scoped>
#cookie_consent{
    position: fixed;
    width: 410px;
    padding: 20px;
    right: 0;
    bottom: 0;
    z-index: 101;
    .cookies-wrapper{
        background-color: #fff;
        box-shadow: rgb(0 0 0 / 8%) 3px 8px 24px;
        border-radius: 16px;
        padding: 25px;
        gap: 14px;
        h2{
            margin: 0;
        }
    }
    .cookies-body{
        font-size: 17px;
        line-height: 1.4;
        a {
            color: $primary;
            font-weight: 600;
        }
    }
    .cookie-bottom{
        justify-content: flex-end;
        button {
            padding: 12px 18px;
            font-size: 14px;
        }
    }
}
</style>