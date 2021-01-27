<template>
    <div>
        这是EC的ta---全局状态管理vuex-demo
        <p>官方文档<a href="https://vuex.vuejs.org/zh/">https://vuex.vuejs.org/zh/</a></p>
        <p style="height: 40px;line-height: 40px;display:flex;align-item:center; justify-content:center"><span style="font-size:16px">全局的count值: </span><span style="font-size:40px;marginLeft:10px">{{count}}</span></p>
        <button class="btn increment-btn"
                @click="increment">+</button>
        <button class="btn subtract-btn"
                @click="subtract">-</button>
        <button class="btn increment-btn"
                @click="incrementStep(payload)">+10</button>
        <button class="btn subtract-btn"
                @click="subtractStep(payload)">-10</button>
        <button class="btn increment-btn"
                @click="incrementStepAsync(payload)">Async +10</button>
        <button class="btn subtract-btn"
                @click="subtractStepAsync(payload)">Async -10</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    data() {
        return {
            payload: {
                step: 10
            }
        };
    },
    created() {},
    mounted() {},
    computed: {
        ...mapState("moduleC", {
            count: state => state.count
        })
    },
    watch: {},
    methods: {
        ...mapMutations("moduleC", [
            "increment",
            "subtract",
            "incrementStep",
            "subtractStep"
        ]),
        ...mapActions("moduleC", ["incrementStepAsync", "subtractStepAsync"])
        // increment() {
        //     this.$store.commit("increment");
        // },
        // subtract() {
        //     this.$store.commit("subtract");
        // }
    }
};
</script>

<style scoped>
.btn {
    border: none;
    font-size: 14px;
    font-weight: 500;
    font-style: normal;
    color: #fff;
    line-height: 21px;
    height: 30px;
    width: 100px;
    background-color: #037fff;
    outline: none;
}
</style>