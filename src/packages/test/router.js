// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/test/index.vue';

export default [
    {
        name: 'test',
        path: '/dashborad/test',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'测试页面'
            }
        },
        redirect: '/dashborad/test/testA',
        children: [
            {
                name: 'Example-insert',
                path: '/dashborad/test/testA',
                component: testA
            }
        ]
    }
];
