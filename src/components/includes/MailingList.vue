<template>
    <overlay @click="$store.commit('makeMail')" v-if="getMailing" />
    <div class="mail-hold" v-if="getMailing">
        <div class="mail-wrapper">
            <button class="button cancel-btn" @click.prevent="$store.commit('makeMail')">
                <svg xmlns="http://www.w3.org/2000/svg" height="14" viewBox="0 0 20 20">
                    <path d="M5793.4-3003.846l-7.881-7.881-7.879,7.88a1.241,1.241,0,0,1-1.756,0,1.242,1.242,0,0,1,0-1.756l7.88-7.879-7.88-7.879a1.243,1.243,0,0,1,0-1.757,1.241,1.241,0,0,1,1.756,0l7.88,7.88,7.88-7.88a1.24,1.24,0,0,1,1.755,0,1.24,1.24,0,0,1,0,1.756l-7.88,7.88,7.88,7.88a1.241,1.241,0,0,1,0,1.757,1.236,1.236,0,0,1-.877.363A1.236,1.236,0,0,1,5793.4-3003.846Z" transform="translate(-5775.518 3023.483)" fill="#0e142c"></path>
                </svg>
            </button>
             <form action="" v-if="!completed">
                <h1>Interested in Flexsale?</h1>
                <div class="sub">Get notified when we're ready to ship.</div>
                <div class="form-row" :class="{ 'has-error' : err }">
                    <input v-model="email" @focus="clearError" type="email" name="email" class="form-control" placeholder="your-email@example.com">
                    <span v-if="err" class="err-msg">Enter your email first...</span>
                </div>
                <button class="button button-primary" @click.prevent="sendMail">
                    <span>Sign up to mailing list</span>
                    <spinner v-if="getLoader" v-bind:size="20" v-bind:white="true" />
                </button>
            </form>
            <div v-if="completed" class="success-msg">
                <h2>Thank you for showing interest in Flexsale.</h2>
                <span>Your email has been added to our waiting list. We will notify you when we're reading to ship.</span>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Overlay from './Overlay.vue'
import { mapGetters } from 'vuex'
import Spinner from './Spinner.vue'
export default {
  components: { Overlay, Spinner },
    name: 'MailingList',
    computed: mapGetters(['getMailing', 'getLoader', 'getAPIHost']),
    data() {
        return {
            email: '',
            err: false,
            completed: true
        }
    },
    methods: {
        sendMail: function() {
            if(!this.email == '') {
                this.$store.commit('spinLoader')
                axios.post(this.getAPIHost+'/api/waiting-list', {email: this.email})
                .then((res) => {
                    this.$store.commit('stopLoader')
                    this.completed = true
                    console.log(res.data)
                })
                .catch((e) => {
                    this.$store.commit('stopLoader')
                    console.log(e.response)
                })
            }else {
                this.err = true
            }
        },
        clearError() {
            this.err ? this.err = false : ''
        }
    }
}
</script>
<style lang="scss" scoped>
.mail-hold{
    height: 200px;
    width: 550px;
    position: fixed;
    z-index: 210;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    padding: 30px;
}
.mail-wrapper{
    border-radius: 18px;
    background-color: #fff;
    padding: 50px 30px;
    position: relative;
    .sub{
        font-size: 1.1rem;
        margin-bottom: 40px;
    }
}
input:hover {
    border-color: $dark;
}
.form-row{
    margin: 20px 0;
}
.cancel-btn {
    display: flex;
    background-color: transparent;
    height: 44px;
    width: 44px;
    border-radius: 50%;
    border: none;
    border: 1px solid transparent;
    padding: 0;
    position: absolute;
    right: 10px;
    top: 10px;
}
.button-primary {
    padding: 16px 20px;
    gap: 5px;
    height: 55px;
}
.success-msg{
    padding: 20px;
    border-radius: 14px;
    border: 1px solid rgb(151, 199, 163);
    background-color: #f8fdfa;
    color: #021106;
}
.err-msg{
    font-size: 1rem;
    font-weight: 500;
    margin-top: 4px;
    display: flex;
}
.has-error{
    input {
        border-color: $danger !important;
    }
    span {
        color: $danger;
    }
}

</style>