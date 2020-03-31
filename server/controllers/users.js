import aesjs from 'aes-js';
import { UserBlob } from '../models';
import { UserService } from '../services';

export const usersLogin = async (ctx) => {
  const { body } = ctx.request;
  if (!body.type) {
    ctx.body = ctx.$commons.resReturn(400, null, '登陆方式不能为空');
    return;
  }
  if (!body.phone) {
    ctx.body = ctx.$commons.resReturn(400, null, '手机号不能为空');
    return;
  }
  if (body.type === 'PHONE' && !body.code) {
    ctx.body = ctx.$commons.resReturn(400, null, '验证码不能为空');
    return;
  }
  if (body.type === 'PASSWORD' && !body.password) {
    ctx.body = ctx.$commons.resReturn(400, null, '密码不能为空');
    return;
  }
  const result = await UserService.getUserBy('phone', body.phone);
  if (result) {
    // 存在为登陆
    const encryptedBytes = aesjs.utils.hex.toBytes(body.signature);
    const aesCbc = new aesjs.ModeOfOperation.cbc(ctx.$constant.MESSAGE_SECRET);
    const decryptedBytes = aesCbc.decrypt(encryptedBytes);
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    if (typeof decryptedText === 'string' && decryptedText.includes('-')) {
      const beforePhone = decryptedText.split('-')[0];
      const beforeCode = decryptedText.split('-')[1];
      if (beforePhone === body.phone && beforeCode === body.code) {
        ctx.body = ctx.$commons.resReturn(0, null, '登录成功');
      } else {
        ctx.body = ctx.$commons.resReturn(400, '验证码错误');
      }
    } else {
      ctx.body = ctx.$commons.resReturn(400, '验证码错误');
    }
    return;
  }

  const userInst = new UserBlob({
    phone: body.phone,
    areaCode: body.areaCode,
    password: body.password,
    token: ctx.$commons.randStr(),
    add_time: ctx.$commons.time(),
    up_time: ctx.$commons.time(),
  });
  try {
    const createResult = await userInst.save();
    ctx.body = ctx.$commons.resReturn(0, createResult, '创建成功');
  } catch (e) {
    ctx.body = ctx.$commons.resReturn(500, null, '服务器错误');
  }
};
