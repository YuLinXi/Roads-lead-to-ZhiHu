import Vue from 'vue';
import VueRouter from 'vue-router';
import MainLayout from '@/components/MainLayout/Index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'recommend',
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

export default router;
