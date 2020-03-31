import * as $ from '../controllers/common';

export default router => ({
  supportedCountries: router.get('/common/supported_countries', $.getSupportedCountries),
  sendMessage: router.post('/common/message/send', $.sendMessage),
});

