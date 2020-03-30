import fs from 'fs-extra';
import path from 'path';

let supportedCountries = [];

export const getSupportedCountries = async (ctx) => {
  try {
    if (supportedCountries.length) {
      ctx.body = ctx.commons.resReturn(supportedCountries);
      return;
    }
    const results = await fs.readJson(path.resolve(__dirname, '../json/supportedCountries.json'));
    if (results && Object.prototype.toString.call(results) === '[object Array]') {
      supportedCountries = results;
    }
    ctx.body = ctx.commons.resReturn(supportedCountries);
  } catch (e) {
    ctx.body = ctx.commons.resReturn(501);
  }
};
