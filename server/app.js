import Koa from 'koa';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import middleWares from './middlewares';
import * as config from './config';
import router from './routes';
import * as dbModule from './utils/db';
import * as commons from './utils/commons';
import * as enums from './utils/enums';
import * as constant from './utils/const';

dbModule.connect();
const app = new Koa();
app.use(bodyParser());
app.use(cors());
app.context.$commons = commons;
app.context.$enums = enums;
app.context.$constant = constant;
middleWares(app);
router(app);
app.on('test', () => {
  console.log('tst');
});
app.on('error', (err, ctx) => {
  console.error('error', err, ctx);
});
// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.error(`${ctx.method} ${ctx.response.status} ${ctx.url} - ${ms}`);
});
app.listen(config.PORT);
console.log(`server start at port ${config.PORT}`);
