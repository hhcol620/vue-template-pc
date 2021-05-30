<template>
    <div>
        这是EB的tb----针对axios封装的使用
        <p class="result-text">请求返回的数据是 -- {{ infoData }}</p>
    </div>
</template>

<script>
import { _exampleAPI } from '../../services/exampleB/api.js';
export default {
    data() {
        return {
            infoData: ''
        };
    },
    created() {
        this.initResponseData();
    },
    methods: {
        async initResponseData() {
            const res = await _exampleAPI();
            if (res.code !== 200) {
                console.log('请求出错了');
            }
            this.infoData = JSON.stringify(res.data);
            console.log(
                '请求完成,返回数据是-------' + JSON.stringify(res.data)
            );
        }
    }
};
</script>


<style scoped>
.result-text {
    color: #3c40c6;
    font-size: 16px;
    line-height: 32px;
    font-style: normal;
    font-weight: 600;
}
</style>