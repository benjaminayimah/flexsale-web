import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Careers from '../views/Careers.vue'
import Terms from '../views/Terms.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import CookiesPolicy from '../views/CookiesPolicy.vue'




const routes = [
  { path: '/',  name: 'Home', component: Home },
  { path: '/about',  name: 'About', component: About },
  { path: '/careers',  name: 'Careers', component: Careers },
  { path: '/privacy-policy',  name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/terms-and-conditions',  name: 'Terms', component: Terms },
  { path: '/cookies-policy',  name: 'CookiesPolicy', component: CookiesPolicy },




]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
