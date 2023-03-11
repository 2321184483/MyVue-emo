import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import 'babel-polyfill';

Vue.config.productionTip = false;

Vue.use(ElementUI, {
    size: 'small'
});
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    } else {
        if (navigator.userAgent.indexOf('MSIE') > -1 ) {
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        } else {
            next();
        }
    }
});
Vue.filter('change', function (a) {
  if (a == 0) {
    return "未取票";
  }
  if (a == 1) {
    return "已取票";
  }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
