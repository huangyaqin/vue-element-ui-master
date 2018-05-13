import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/',  
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                {
                    path: '/index',
                    component: resolve => require(['../components/page/index.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/userManage',
                    component: resolve => require(['../components/page/userManage.vue'], resolve),
                    meta: { title: '用户管理' }
                },
                {
                    path: '/videoAdd',
                    component: resolve => require(['../components/page/videoAdd.vue'], resolve),
                    meta: { title: '视频上传' }
                },
                {
                    path: '/platform',
                    component: resolve => require(['../components/page/platform.vue'], resolve),
                    meta: { title: '平台推荐' }
                },
                {
                    path: '/entertainment',
                    component: resolve => require(['../components/page/entertainment.vue'], resolve),
                    meta: { title: '娱乐模块' }
                },
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
    ]
})
