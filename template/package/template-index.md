<template>
<div>
    <div class="header">这是${name}页面</div>
    <div class="desc">${desc}</div>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name:'${name}',
    data() {
        return {};
    }    
};
</script>
<style lang="" scoped>
</style>
