const state = {
    main: [
        'editSelf'
    ],
}

const mutations = {
    DECREMENT_MAIN_COUNTER (state,str) {
        state.main = state.main+','
    },
    // INCREMENT_MAIN_COUNTER (state) {
    //     state.main++
    // }
}


export default {
    state,
    mutations
}
