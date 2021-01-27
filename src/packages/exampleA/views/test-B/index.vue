<template>
    <div>
        这是EA的tb---时间格式化工具
        <p>当前时间为<span class="time-text">{{getDateNow('YY-MM-DD hh:mm:ss')}}</span></p>
        <p>当前时间为<span class="time-text">{{getDateNow('YY-MM-DD hh:mm')}}</span></p>
        <p>当前时间为<span class="time-text">{{getDateNow('YY-MM-DD')}}</span></p>
        <p>当前时间为<span class="time-text">{{getDateNow('YY/MM/DD hh:mm:ss')}}</span></p>
    </div>
</template>


<script>
import { _timeFormat } from "@/utils/timeFormate.js";
export default {
    data() {
        return {};
    },
    created() {},
    mounted() {},
    computed: {},
    watch: {},
    methods: {
        getDateNow(type) {
            let timeStamp = Date.now() || new Date().getTime();
            return _timeFormat(timeStamp, type);
        }
    }
};
</script>

<style scoped>
.time-text {
    margin-left: 20px;
    font-size: 16px;
    line-height: 30px;
    font-style: normal;
    font-weight: 500;
    color: #c56cf0;
}
</style>