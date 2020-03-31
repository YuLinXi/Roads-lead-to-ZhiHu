export const resReturn = (code, data, msg) => {
  if (code !== 0 && typeof data === 'string') {
    return ({
      code,
      data: null,
      msg: data,
    });
  }
  if (typeof code === 'object') {
    return ({
      code: 0,
      data: code,
      msg: data || '请求成功',
    });
  }
  if (typeof code === 'string') {
    return ({
      code: 0,
      data: null,
      msg: code || '请求成功',
    });
  }
  return ({ code, data, msg });
};

/**
 * 处理请求参数类型，String 字符串去除两边空格，Number 使用parseInt 转换为数字
 * @params Object {a: ' ab ', b: ' 123 '}
 * @keys Object {a: 'string', b: 'number'}
 * @return Object {a: 'ab', b: 123}
 */
export const handleParams = (params, keys) => {
  if (!params || typeof params !== 'object' || !keys || typeof keys !== 'object') {
    return params;
  }
  Object.keys(params).forEach((key) => {
    if (!params[key]) { return; }
    switch (keys[key]) {
      case 'number': {
        params[key] = Number(params[key]);
        break;
      }
      default:
    }
  });
  return params;
};

export const time = () => Date.parse(Date());

export const randStr = () => Math.random()
  .toString(36)
  .substr(2);
