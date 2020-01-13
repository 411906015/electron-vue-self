import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: require('@/components/index').default,
            redirect:'/dashboard',
            // children 里的组件会被渲染在 父级 的 <router-view> 中
            children: [
                {
                    path: '/dashboard',
                    component:  require('@/components/dashboard').default
                },
                {
                    path: '/editSelf',
                    component:  require('@/components/Setting/editSelf').default
                },
                {
                    path: '/test1',
                    component:  require('@/components/testPage/test1').default
                },
                {
                    path: '/test2',
                    component:  require('@/components/testPage/test2').default
                }
            ]
        },
        {
            path: '/mine',
            name: 'mine',
            component: require('@/components/testPage/test2').default
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/components/login/login').default
        },
        {
            path: '/first',
            name: 'first',
            component: require('@/components/login/login').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
