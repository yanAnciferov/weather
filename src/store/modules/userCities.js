import axios from "axios";
import consts from "../../consts/index";
const {OPEN_WEATHER_MAP_API, IP_API} = consts;

function initialState () {
    return {
        userSelectedCities: [],
        userSelectedCitiesIds: JSON.parse(localStorage.getItem('userSelectedCitiesIds')) || [],
        userCity: {},
        isUserCityPending: false,
        isUserSelectedCitiesPending: false
    }
}
  

const state = initialState;


const getters = {
    getUserSelectedCities: state => state.userSelectedCities,
    getUserSelectedCitiesIds: state => state.userSelectedCitiesIds,
    getUserCity: state => state.userCity,
    getUserCityPandingState: state => state.isUserCityPending,
    getUserSelectedCitiesPendingState: state => state.isUserSelectedCitiesPending
}

const actions = {
    addCityId({commit, getters}, cityId) {
        commit('setUserSelectedCitiesIds', [...getters.getUserSelectedCitiesIds, cityId]);
    },
    removeCityId({commit, getters}, cityId) {
        commit('setUserSelectedCitiesIds', [...getters.getUserSelectedCitiesIds.filter(id => id !== cityId)]);
    },
    getGeolocation() {
        return axios.get(IP_API)
    },
    getUserCityWeather({dispatch, commit}) {
        commit('setUserCityPandingState', true);
        dispatch('getGeolocation')
        .then(geolocationResult => {
            const geolocation = geolocationResult.data;
            if (!geolocation) {
                return;
            }
            var params = new URLSearchParams();
            params.append('lat', geolocation.lat);
            params.append('lon', geolocation.lon);
            params.append('appid', OPEN_WEATHER_MAP_API.APP_ID);
            axios.get(OPEN_WEATHER_MAP_API.WEATHER, {
                params
            })
            .then(res => { 
                commit('setUserCity', res.data);
                commit('setUserCityPandingState', false);
            })
            .catch(error => {
                commit('setUserCityPandingState', false);
                commit('setUserCity', null);
                dispatch('dispatchError', error);
            });
        })
        .catch(error => {
            commit('setUserCity', null);
            commit('setUserCityPandingState', false);
            dispatch('dispatchError', error);
        });
    },
    getUserSelectedCitiesWeather({getters, commit, dispatch}) {
        if(!getters.getUserSelectedCitiesIds.length) {
            commit('setUserSelectedCities', []);

            return;
        }
        commit('setUserSelectedCitiesPendingState', true);
        var params = new URLSearchParams();
        params.append('units', 'metric');
        params.append('id', getters.getUserSelectedCitiesIds.join(','));
        params.append('appid', OPEN_WEATHER_MAP_API.APP_ID);
        setTimeout(() => { // to imitate freezes
            axios.get(OPEN_WEATHER_MAP_API.GROUP, {
                params
            })
            .then(res => { 
                commit('setUserSelectedCities', res.data.list);
                commit('setUserSelectedCitiesPendingState', false);
            }).catch(error => {
                dispatch('dispatchError', error);
                commit('setUserSelectedCitiesPendingState', false);
                commit('setUserSelectedCities', []);
            });
        }, 1000)
    },
    resetUserCitiesStore({state}) {
        const s = initialState()
        Object.keys(s).forEach(key => {
            state[key] = s[key]
        })
    }
}

const mutations = {
    setUserCity: (state, newValue) => state.userCity = newValue,
    setUserSelectedCities: (state, newValue) => state.userSelectedCities = newValue,
    setUserSelectedCitiesIds: (state, newValue) => {
        localStorage.setItem('userSelectedCitiesIds', JSON.stringify(newValue));
        state.userSelectedCitiesIds = newValue
    },
    setUserCityPandingState: (state, newValue) => state.isUserCityPending = newValue,
    setUserSelectedCitiesPendingState: (state, newValue) => state.isUserSelectedCitiesPending = newValue
}

export default {
    state,
    getters,
    actions,
    mutations
}