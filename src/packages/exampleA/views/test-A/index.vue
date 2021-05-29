<template>
    <div>
        这是EA的ta-----获取url的参数工具
        <p>当前url地址query为<span class="query-text">{{queryString}}</span></p>
    </div>
</template>

<script>
import { _getUrlQuery } from '@/utils/getUrlQuery.js';
export default {
    data() {
        return {
            queryString: ''
        };
    },
    created() {},
    mounted() {
        this.getQueryString();
    },
    computed: {},
    watch: {},
    methods: {
        getQueryString() {
            let res = _getUrlQuery();
            this.queryString = JSON.stringify(res);
        }
    }
};
</script>

<style scoped>
.query-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    color: #7158e2;
    margin-left: 20px;
}
</style>