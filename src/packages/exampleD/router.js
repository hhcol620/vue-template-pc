// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test-A/index.vue';
import testB from './views/test-B/index.vue';

export default [
    {
        name: '案例D',
        path: '/exampleD',
        component: index,
        mata: {
            title: '案例D'
        },
        redirect: '/exampleD/testA',
        children: [
            {
                name: 'EDtestA',
                path: '/exampleD/testA',
                component: testA
            },
            {
                name: 'EDtestB',
                path: '/exampleD/testB',
                component: testB
            }
        ]
    }
];
