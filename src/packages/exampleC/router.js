// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test-A/index.vue';
import testB from './views/test-B/index.vue';

export default [
    {
        name: '案例C',
        path: '/exampleC',
        component: index,
        mata: {
            title: '案例C'
        },
        redirect: '/exampleC/testA',
        children: [
            {
                name: 'ECtestA',
                path: '/exampleC/testA',
                component: testA
            },
            {
                name: 'ECtestB',
                path: '/exampleC/testB',
                component: testB
            }
        ]
    }
];
