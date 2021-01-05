<template>
    <div class="main-container">
        <div class="box">
            this is a app is created with this <a class="a-text"
               href="https://github.com/hhcol620/create-vue-app">create-vue-app</a>
            <navigation-bar></navigation-bar>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import navigationBar from "@/packages/commonPage/index.vue";
export default {
    name: "App",
    components: {
        "navigation-bar": navigationBar
    }
};
</script>
<style scoped>
.main-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.box {
    height: 100%;
    text-align: center;
    margin-top: 20px;
}
</style>