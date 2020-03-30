import Vue from 'vue';
import axios from 'axios';
import SvgIcon from 'vue-svgicon';
import '@/icons/components';
import '@/styles/index.less';
import * as utils from './utils/index';
import App from './App.vue';
import router from './router';
import store from './store';
import './class-component-hooks';

Vue.config.productionTip = false;

Vue.use(SvgIcon, {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em',
});

Vue.prototype.$utils = utils;
Vue.prototype.$http = axios.create({
  baseURL: '/api',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
