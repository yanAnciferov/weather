import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import 'es6-promise/auto';
import VueGeolocation from 'vue-browser-geolocation';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

Vue.use(VueGeolocation);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
