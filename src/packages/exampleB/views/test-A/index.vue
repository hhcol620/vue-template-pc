<template>
    <div>
        这是EB的ta
        <button v-debounce="debounceTest">点击控制台打印文字</button>
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
</style>