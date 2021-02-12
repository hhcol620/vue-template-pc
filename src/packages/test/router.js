// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test/index.vue';

export default [
    {
        name: 'test',
        path: '/dashboard/index',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'测试'
            }
        },
        redirect: '/dashboard/index/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/dashboard/index/testA',
                component: testA
            }
        ]
    }
];
