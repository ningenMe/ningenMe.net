import Vue from 'vue'
import Router from 'vue-router'
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
            path: '/testaccess',
            name: 'testaccess',
            component: TestAccess
        }
    ]
})