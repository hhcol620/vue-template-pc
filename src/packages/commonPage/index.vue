<template>
    <div>
        <div class="navigation-menu">
            <router-link v-for="(item,index) in navigationList"
                         :key="index"
                         :to="item.path">{{item.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navigationList: [
                {
                    name: "ExampleA",
                    path: "/exampleA",
                    children: [
                        {
                            name: "ta",
                            path: "/exampleA/testA"
                        }
                    ]
                },
                {
                    name: "ExampleB",
                    path: "/exampleB",
                    children: [
                        {
                            name: "ta",
                            path: "/exampleB/testA"
                        }
                    ]
                },
                {
                    name: "ExampleC",
                    path: "/exampleC",
                    children: [
                        {
                            name: "ta",
                            path: "/exampleC/testA"
                        }
                    ]
                },
                {
                    name: "ExampleD",
                    path: "/exampleD",
                    children: [
                        {
                            name: "ta",
                            path: "/exampleD/testA"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
<style lang="" scoped>
</style>