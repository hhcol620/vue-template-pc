// 导入这个页面的根组件
import index from './index.vue';

// 导入不同的组件
import testA from './views/${name}/index.vue';

export default [
    {
        name: '${name}',
        path: '${router}',
        component: index,
        mata: {
            title: 'Example-out',
            content:{
                description:'${description}'
            }
        },
        redirect: '${router}/testA',
        children: [
            {
                name: 'Example-insert',
                path: '${router}/testA',
                component: testA
            }
        ]
    }
];
