import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'landing-page',
            component: require('@/components/LandingPage').default
        },
        {
            path: '/mine',
            name: 'mine',
            component: require('@/components/testPage/test2').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
