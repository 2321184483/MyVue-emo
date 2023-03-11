import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import('../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/table',
                    component: () => import( '../components/page/BaseTable.vue'),
                    meta: { title: '我的订单' }
                },
                {
                    path: '/tabs',
                    component: () => import('../components/page/Tabs.vue'),
                    meta: { title: '我的消息' }
                },
                {
                    
                    path: '/charts',
                    component: () => import( '../components/page/BaseCharts.vue'),
                    meta: { title: '个人中心' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import('../components/page/Permission.vue'),
                    meta: { title: '管理页面', permission: true }
                },
                {
                    path: '/404',
                    component: () => import('../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import('../components/page/403.vue'),
                    meta: { title: '403' }
                },
				{
				    path: '/ShoppingCart',
				    component: () => import('../components/page/ShoppingCart.vue'),
				    meta: { title: '购物车' }
				},
				// {
				//     path: '/Pay',
				//     component: () => import('../components/page/Pay.vue'),
				//     meta: { title: '支付' }
				// }
                
            ]
        },
        {
            path: '/login',
            component: () => import('../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
