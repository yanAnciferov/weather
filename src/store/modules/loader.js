const state = {
    isPending: false
}

const getters = {
    getPendingState: state => state.isPending
}

const mutations = {
    setPendingState: (state, newValue) => state.isPending = newValue
}

export default {
    state,
    getters,
    mutations
}