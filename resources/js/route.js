import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import DashBoard from './components/DashBoard.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashBoard,
    },             
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router