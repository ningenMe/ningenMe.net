import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import TestAccess from './views/TestAccess.vue'
import Root from './views/Root.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'root',
            component: Root
        },
        {
            path: '/index.html',
            name: 'index.html',
            component: Root
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/testaccess',
            name: 'testaccess',
            component: TestAccess
        }
    ]
})