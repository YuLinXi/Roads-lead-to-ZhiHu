import aesjs from 'aes-js';
import fs from 'fs-extra';
import path from 'path';
import { UserService } from '../services';

let supportedCountries = [];

export const getSupportedCountries = async (ctx) => {
  try {
    if (supportedCountries.length) {
      ctx.body = ctx.$commons.resReturn(supportedCountries);
      return;
    }
    const results = await fs.readJson(path.resolve(__dirname, '../json/supportedCountries.json'));
    if (results && Object.prototype.toString.call(results) === '[object Array]') {
      supportedCountries = results;
    }
    ctx.body = ctx.$commons.resReturn(supportedCountries);
  } catch (e) {
    ctx.body = ctx.$commons.resReturn(501);
  }
};

export const sendMessage = async (ctx) => {
  const { body } = ctx.request;
  const { phone } = body;
  if (!phone) {
    ctx.body = ctx.$commons.resReturn(400, null, '请输入手机号');
    return;
  }
  try {
    let randomCode = '';
    for (let i = 0; i < 4; i++) {
      randomCode += Math.floor(Math.random() * 10);
    }
    if (process.env.NODE_ENV === 'development') {
      randomCode = '1234';
    }
    const text = `${phone}-${randomCode}`;
    const textBytes = aesjs.utils.utf8.toBytes(text);
    const aesCtr = new aesjs.ModeOfOperation.cbc(ctx.$constant.MESSAGE_SECRET);
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    ctx.body = ctx.$commons.resReturn(0, { signature: encryptedHex }, '短信发送成功');
  } catch (e) {
    ctx.body = ctx.$commons.resReturn(500, '服务器错误');
  }
};
