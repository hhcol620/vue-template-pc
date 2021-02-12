import Vue from 'vue';
import VueRouter from 'vue-router';
const _routes = [];
const context = require.context('../packages/', true, /router.js/);
context.keys().forEach((filename) => {
    // 将获取的route配置展开压入数组里面
    _routes.push(...context(filename).default);
});

Vue.use(VueRouter, {});
export default new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/exampleA'
        },
        ..._routes
    ]
});
