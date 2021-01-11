const moduleC = {
    // 使其成为带命名空间的模块
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state) {
            state.count++;
        },
        subtract(state) {
            state.count--;
        },
        incrementStep(state, payload) {
            state.count += payload.step;
        },
        subtractStep(state, payload) {
            state.count -= payload.step;
        }
    },
    actions: {
        incrementStepAsync(context, payload) {
            setTimeout(() => {
                context.commit('incrementStep', payload);
            }, 1000);
        },
        subtractStepAsync({ commit }, payload) {
            setTimeout(() => {
                commit('subtractStep', payload);
            }, 1000);
        }
    }
};

export default moduleC;
