import Router from 'koa-router';
import users from './user';
import commons from './common';

const router = new Router({
  prefix: '/api',
});

export default function (app) {
  users(router);
  commons(router);
  app
    .use(router.routes())
    .use(router.allowedMethods());
}
