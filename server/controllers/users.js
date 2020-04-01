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
  if (body.type === 'PHONE' && !body.signature) {
    ctx.body = ctx.$commons.resReturn(400, null, '还未发送短信验证');
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
    if (body.type === 'PHONE') {
      // 手机短信的登录
      const encryptedBytes = aesjs.utils.hex.toBytes(body.signature);
      const aesCbc = new aesjs.ModeOfOperation.cbc(ctx.$constant.MESSAGE_SECRET);
      const decryptedBytes = aesCbc.decrypt(encryptedBytes);
      const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
      if (typeof decryptedText === 'string' && decryptedText.includes('-')) {
        const beforePhone = decryptedText.split('-')[0];
        const beforeCode = decryptedText.split('-')[1];
        if (beforePhone === body.phone && beforeCode === body.code) {
          // 更新passsalt
          const passsalt = ctx.$commons.randStr();
          await UserService.updateUser(result._id, {
            add_time: ctx.$commons.time(),
            up_time: ctx.$commons.time(),
          });
          ctx.$commons.setLoginCookie(result._id, passsalt, ctx);
          ctx.body = ctx.$commons.resReturn(0, null, '登录成功');
        } else {
          ctx.body = ctx.$commons.resReturn(400, '验证码错误');
        }
      } else {
        ctx.body = ctx.$commons.resReturn(400, '验证码错误');
      }
      return;
    }
    // 账号密码登录
    if (body.type === 'PASSWORD' && result.passsalt && ctx.$commons.generatePassword(body.password, result.passsalt) === result.password) {
      // 更新passsalt
      const passsalt = ctx.$commons.randStr();
      await UserService.updateUser(result._id, {
        password: ctx.$commons.generatePassword(body.password, passsalt),
        passsalt,
        add_time: ctx.$commons.time(),
        up_time: ctx.$commons.time(),
      });
      ctx.$commons.setLoginCookie(result._id, passsalt, ctx);
      ctx.body = ctx.$commons.resReturn(0, null, '登录成功');
    } else {
      ctx.body = ctx.$commons.resReturn(400, '密码错误');
      return;
    }
  }

  // 注册
  const passsalt = ctx.$commons.randStr();
  const userInst = new UserBlob({
    phone: body.phone,
    areaCode: body.areaCode,
    password: ctx.$commons.generatePassword(body.password, passsalt),
    passsalt,
    add_time: ctx.$commons.time(),
    up_time: ctx.$commons.time(),
  });
  try {
    const createResult = await userInst.save();
    // 创建后登录
    ctx.$commons.setLoginCookie(createResult._id, userInst.passsalt, ctx);
    ctx.body = ctx.$commons.resReturn(0, null, '用户创建成功');
  } catch (e) {
    ctx.body = ctx.$commons.resReturn(500, null, '服务器错误');
  }
};
