<template>
    <div class="main-container">
        <div class="box">
            <p class="app-desc">
                This is a app is created with this <a class="a-text"
                   href="https://github.com/hhcol620/create-vue-app">create-vue-app</a>
            </p>
            <navigation-bar></navigation-bar>
            <div class="router-container">
                <router-view></router-view>
            </div>
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
.app-desc {
    font-size: 18px;
    color: #4d4d4d;
    font-weight: 500;
    font-style: normal;
    line-height: 30px;
    text-transform: uppercase;
}
.app-desc > a {
    color: #27ae60;
}
.router-container {
    margin-top: 20px;
}
</style>