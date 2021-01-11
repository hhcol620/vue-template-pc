import Vue from 'vue';
import Vuex from 'vuex';

import moduleC from '@/store/exampleC/index.js'


Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {},
    modules: {
        moduleC
    }
});

export default store;
