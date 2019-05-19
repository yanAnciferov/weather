import axios from "axios";
import consts from "../../consts/index";
const {OPEN_WEATHER_MAP_API} = consts;

function initialState () {
    return  {
        previusQueryString: '',
        foundCities: []
    }
}

const state = initialState;


const getters = {
    getPreviusQueryString: state => state.previusQueryString,
    getFoundCities: state => state.foundCities
}

const actions = {
    getCitiesRequestByQueryString({commit, dispatch}, searchString) {
        commit('setPreviusQueryString', searchString);
        if(!searchString) {
            commit('setFoundCities', []);

            return;
        }
        commit('setPendingState', true);
        var params = new URLSearchParams();
        params.append( 'q', searchString);
        params.append('appid', OPEN_WEATHER_MAP_API.APP_ID);
        setTimeout(() => { // to imitate freezes
            axios.get(OPEN_WEATHER_MAP_API.FIND, {
                params
            }).then((res) => {
                commit('setPendingState', false);
                commit('setFoundCities', res.data.list);
            }).catch(error => {
                dispatch('dispatchError', error);
                commit('setFoundCities', []);
                commit('setPendingState', false);
            })
        }, 1000)
    },

    resetCitiesStore({state}) {
        const s = initialState()
        Object.keys(s).forEach(key => {
          state[key] = s[key]
        })
    }
}

const mutations = {
    setPreviusQueryString: (state, newValue) => state.previusQueryString = newValue,
    setFoundCities: (state, newValue) => state.foundCities = newValue
}

export default {
    state,
    getters,
    actions,
    mutations
}