import Vuex from 'vuex';
import Vue from 'vue';
import search from './modules/search';
import usersCities from './modules/userCities';
import loader from './modules/loader';
import error from './modules/error';
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        search,
        usersCities,
        loader,
        error
    }
})

export default store