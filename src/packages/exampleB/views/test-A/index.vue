<template>
    <div>
        这是EB的ta---防抖(防止用户在一段很短的时间内快速点击按钮给服务器或者是浏览器造成的cpu压力)指令的使用
        <p>
            <button v-debounce="debounceTest"
                    class="test-btn">点击控制台打印文字</button>
        </p>
    </div>
</template>
<script>
import { mixin } from "@/mixins/instructions.js";
export default {
    mixins: [mixin],
    data() {
        return {
            tnum: 0
        };
    },
    created() {},
    methods: {
        debounceTest() {
            console.log("打印文字", this.tnum++);
        }
    }
};
</script>

<style scoped>
.test-btn {
    height: 38px;
    padding: 0 10px;
    border-radius: 4px;
    line-height: 38px;
    font-size: 16px;
    font-weight: 500;
    font-style: normal;
    color: #fff;
    background-color: #2bb170;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 1px 2px 4px #9d9d9d;
    transition: all 0.5s ease;
}
.test-btn:hover {
    box-shadow: 2px 4px 8px #999;
}
</style>