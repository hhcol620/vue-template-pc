import Vue from 'vue';
import VueRouter from 'vue-router';
import util from './util.js';
const _routes = [];
const context = require.context('../packages/', true, /router.js/);
context.keys().forEach((filename) => {
    // 将获取的route配置展开压入数组里面
    _routes.push(...context(filename).default);
});
if (process.env.NODE_ENV !== 'production') {
    util.createRoutesJson(_routes);
}

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
