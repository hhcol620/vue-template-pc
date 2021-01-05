import Vue from 'vue';
import VueRouter from 'vue-router';

import exampleA from '@/packages/exampleA/router.js';
import exampleB from '@/packages/exampleB/router.js';
import exampleC from '@/packages/exampleC/router.js';
import exampleD from '@/packages/exampleD/router.js';

Vue.use(VueRouter, {});

export default new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        {
            path: '/',
            redirect: '/exampleA'
        },
        ...exampleA,
        ...exampleB,
        ...exampleC,
        ...exampleD
    ]
});
