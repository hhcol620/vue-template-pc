// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test-A/index.vue';
import testB from './views/test-B/index.vue';

export default [
    {
        name: '案例B',
        path: '/exampleB',
        component: index,
        mata: {
            title: '案例B'
        },
        redirect: '/exampleB/testA',
        children: [
            {
                name: 'EBtestA',
                path: '/exampleB/testA',
                component: testA
            },
            {
                name: 'EBtestB',
                path: '/exampleB/testB',
                component: testB
            }
        ]
    }
];
