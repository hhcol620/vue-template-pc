<template>
    <div>
        <div class="navigation-menu">
            <ul class="head-navigation-bar">
                <li v-for="(item,index) in navigationList"
                    :key="index"
                    :class="highLight(item.subHighLight)?'active':''">
                    {{item.name}}
                    <div class="dropdown">
                        <router-link v-for="(v,i) in item.children"
                                     :key="i"
                                     :to="v.path">{{v.name}}</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigation-bar',
    data() {
        return {
            navigationList: [
                {
                    name: 'ExampleA',
                    path: '/exampleA',
                    subHighLight: '/exampleA/.',
                    children: [
                        {
                            name: 'ta',
                            path: '/exampleA/testA'
                        },
                        {
                            name: 'tb',
                            path: '/exampleA/testB'
                        },
                        {
                            name: 'tb',
                            path: '/exampleA/testB'
                        },
                        {
                            name: 'tb',
                            path: '/exampleA/testB'
                        }
                    ]
                },
                {
                    name: 'ExampleB',
                    path: '/exampleB',
                    subHighLight: '/exampleB/.',
                    children: [
                        {
                            name: 'ta',
                            path: '/exampleB/testA'
                        },
                        {
                            name: 'tb',
                            path: '/exampleB/testB'
                        }
                    ]
                },
                {
                    name: 'ExampleC',
                    path: '/exampleC',
                    subHighLight: '/exampleC/.',
                    children: [
                        {
                            name: 'ta',
                            path: '/exampleC/testA'
                        },
                        {
                            name: 'tb',
                            path: '/exampleC/testB'
                        }
                    ]
                },
                {
                    name: 'ExampleD',
                    path: '/exampleD',
                    subHighLight: '/exampleD/.',
                    children: [
                        {
                            name: 'ta',
                            path: '/exampleD/testA'
                        },
                        {
                            name: 'tb',
                            path: '/exampleD/testB'
                        }
                    ]
                }
            ]
        };
    },

    created() {},
    methods: {
        highLight(regexp) {
            let reg = RegExp(regexp);
            // console.log(this.$route.path);
            return reg.exec(this.$route.path);
        }
    }
};
</script>
<style lang="less" scoped>
.navigation-menu {
    position: relative;
    height: 30px;
    .head-navigation-bar {
        padding: 0;
        margin: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        li {
            list-style: none;
            float: left;
            height: 30px;
            min-width: 60px;
            font-size: 16px;
            font-weight: 500;
            font-style: normal;
            line-height: 30px;
            color: #fff;
            padding: 0 10px;
            box-sizing: border-box;
            background-color: #34495e;
            cursor: default;
            position: relative;
            & + li {
                border-left: 1px solid #fff;
            }
            .dropdown {
                text-align: center;
                width: 100%;
                opacity: 0;
                left: 0;
                position: absolute;
                z-index: -1;
                max-height: 0;
                overflow: hidden;
                transition: max-height 0.2s ease, all 0.2s ease;
                a {
                    display: block;
                    width: 100%;
                    color: #fff;
                    background-color: #2c3e50;
                    text-decoration: none;
                    box-sizing: border-box;
                    & + a {
                        border-top: 0.5px solid rgb(48, 48, 48);
                    }
                }
            }
            &:hover .dropdown {
                opacity: 1;
                max-height: 500px;
            }

            &::before {
                content: "";
                display: block;
                width: 0%;
                height: 2px;
                background-color: #3498db;
                position: absolute;
                bottom: 0;
                left: 0;
                transition: width 0.2s ease;
            }
            &::after {
                content: "";
                display: block;
                width: 0%;
                height: 2px;
                background-color: #3498db;
                position: absolute;
                bottom: 0;
                right: 0;
                transition: width 0.2s ease;
            }

            &.active {
                &::before {
                    width: 50%;
                }
                &::after {
                    width: 50%;
                }
            }
            &:hover {
                &::before {
                    width: 50%;
                }
                &::after {
                    width: 50%;
                }
            }
        }
    }
}
</style>