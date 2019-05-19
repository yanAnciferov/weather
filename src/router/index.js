import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage/HomePage';
import SearchPage from '../components/Search/SearchPage';
import consts from '../consts/index';
const { URLS } = consts;

Vue.use(VueRouter)

export default new VueRouter({
    hashbang: false,
    mode: "history",
    routes: [
        {
            path: URLS.HOME,
            name: 'Home',
            component: HomePage
        },
        {
            path: URLS.SEARCH,
            name: 'Search',
            component: SearchPage
        },
        {
            path: '*', 
            redirect: '/home'
        }
    ]
})