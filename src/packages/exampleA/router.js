// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test-A/index.vue';
import testB from './views/test-B/index.vue';

export default [
    {
        name: '案例A',
        path: '/exampleA',
        component: index,
        mata: {
            title: '案例A'
        },
        redirect: '/exampleA/testA',
        children: [
            {
                name: 'EAtestA',
                path: '/exampleA/testA',
                component: testA
            },
            {
                name: 'EAtestB',
                path: '/exampleA/testB',
                component: testB
            }
        ]
    }
];
