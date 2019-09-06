import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// import(/* webpackChunkName: "about" */ './views/About.vue'),
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [],
});
