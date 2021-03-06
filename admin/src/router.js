import Vue from 'vue'
import VueRouter from 'vue-router'

import index from './components/index.vue';
import homePage from './components/homePage.vue';
import transactionInquiry from './components/transactionInquiry.vue';
import reportReview from './components/reportReview.vue';
import transactionStatistics from './components/transactionStatistics.vue';
import modifyInformation from './components/modifyInformation.vue';
import login from './components/login.vue';
import register from './components/register.vue';
import managementAdmin from './components/managementAdmin.vue';
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: "/",
            redirect: '/index',
        },
        {
            path: '/index',
            name: 'index',
            component: index,
            redirect: '/index/homePage',
            children: [
                {
                    path: '/index/homePage',
                    name: "homePage",
                    component: homePage,
                },
                {
                    path: '/index/transactionInquiry',
                    name: "transactionInquiry",
                    component: transactionInquiry,
                },
                {
                    path: '/index/reportReview',
                    name: "reportReview",
                    component: reportReview,
                },
                {
                    path: '/index/transactionStatistics',
                    name: "transactionStatistics",
                    component: transactionStatistics,
                },
                {
                    path: '/index/modifyInformation',
                    name: "modifyInformation",
                    component: modifyInformation,
                },
                {
                    path: '/index/managementAdmin',
                    name: "managementAdmin",
                    component: managementAdmin,
                },
            ]

        },
        {
            path: '/login',
            name: "login",
            component: login,
        },
        {
            path: '/register',
            name: "register",
            component: register,
        },
    ]
});

//路由跳转之前
router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && to.path !== '/register' && !localStorage.getItem(window.$project)) {
        return next('/login')
    }
    next()
})

export default router;