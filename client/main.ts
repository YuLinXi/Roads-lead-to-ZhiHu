import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import '@/icons/components';
import '@/styles/index.less';
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

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
