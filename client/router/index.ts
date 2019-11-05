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
];

const router = new VueRouter({
  routes,
});

export default router;
