import Vue from 'vue';

// 生成Vue的实例导出   单例  可以在不同的文件进行导入这个eventBus对象,在这个对象可以共享数据(小范围使用 兄弟组件的传值   大面积使用还是推荐Vuex)
const eventBus = new Vue();
export default eventBus;
