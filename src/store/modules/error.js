import consts from "../../consts/index";
import content from "../../content/index";
const { ERROR_SIGNATURES } = consts;


function initialState () {
    return  {
        isError: false,
        errorMessage: ''
    }
}

const state = initialState;


const getters = {
    getErrorState: state => state.isError,
    getErrorMessage: state => state.errorMessage
}

const actions = {
    dispatchError({commit}, error) {
        commit('setErrorState', true);
        if (error.message === ERROR_SIGNATURES.NETWORK_ERROR) {
            commit('setErrorMessage', content.NETWORK_ERROR_MESSAGE);
        } else {
            commit('setErrorMessage', content.UNKNOWN_ERROR_MESSAGE);
        }
    }
}

const mutations = {
    setErrorState: (state, newState) => state.isError = newState,
    setErrorMessage: (state, newState) => state.errorMessage = newState
}

export default {
    state,
    getters,
    actions,
    mutations
}