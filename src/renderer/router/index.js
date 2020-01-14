import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//解决重复点击路由报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

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
                    name:'dashboard',
                    component:  require('@/components/dashboard').default
                },
                {
                    path: '/editSelf',
                    name: 'editSelf',
                    meta:{
                        keepAlive:true
                    },
                    component:  require('@/components/Setting/editSelf').default
                },
                {
                    path: '/test1/:id',
                    name: 'test1',
                    component:  require('@/components/testPage/test1').default
                },
                {
                    path: '/test2',
                    name: 'test2',
                    component:  require('@/components/testPage/test2').default
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: require('@/components/login/login').default
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
