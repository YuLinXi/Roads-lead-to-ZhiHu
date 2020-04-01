import jwt from 'jsonwebtoken';
import { UserService } from '../services';

const UN_LOGIN_LIST = [
  '/common/message/send',
  '/common/supported_countries',
  '/users/login',
];

export default async (ctx, next) => {
  if (!UN_LOGIN_LIST.includes(ctx.request.originalUrl.split('?')[0].substring(4))) {
    const token = ctx.cookies.get('_roads_lead_to_ZhiHu_token');
    const uid = ctx.cookies.get('_roads_lead_to_ZhiHu_uid');
    if (!token || !uid) {
      ctx.body = ctx.$commons.resReturn(401, null, '未登录');
      return;
    }
    const result = await UserService.getUserBy('_id', uid);
    if (!result) { return; }
    if (result) {
      const decoded = jwt.verify(token, result.passsalt);
      if (decoded.uid !== result._id.toString()) {
        return;
      }
    }
  }
  await next();
};
