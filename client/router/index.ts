import cookie from 'js-cookie';
import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/components/MainLayout/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "recommend" */ '@/views/home/Index.vue'),
      },
    ],
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (!cookie.get('_roads_lead_to_ZhiHu_token') || !cookie.get('_roads_lead_to_ZhiHu_uid')) {
    if (to.name === 'Signin') {
      next();
    } else {
      next({ name: 'Signin' });
    }
  } else if (to.name === 'Signin') {
    next({ name: 'Home', replace: true });
  } else {
    next();
  }
});

export default router;
