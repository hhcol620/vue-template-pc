// 创建Vue的根实例
import Vue from 'vue';
// 导入router
import router from '@/router/router-main.js';
import store from '@/store/index.js';
// 导入app组件
import App from './App.vue';

// 导入global全局样式
import './styles/global.less';

// 创建vue根实例
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
// 挂载App组件
