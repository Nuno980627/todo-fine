import Vue from 'vue'
import Router from 'vue-router'
import main from '@/views/main'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            redirect: { name: 'master' },
            component: main,
            children: [
                {
                    path: 'master',
                    name: 'master',
                    component: () => import('@/views/master/index.vue')
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
