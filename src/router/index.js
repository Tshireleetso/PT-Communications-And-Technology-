import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import InsightsView from '../views/InsightsView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/services', name: 'services', component: ServicesView },
    { path: '/portfolio', name: 'portfolio', component: PortfolioView },
    { path: '/insights', name: 'insights', component: InsightsView }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

export default router
