const Seneca = require('seneca-extended');
const _ = require('lodash');
const config = require('./config');

const service = {};

// //add all service
_.each(config.service, (v, k) => {
  if (v != '') {
    let tmp = v.split(':');
    if (tmp.length == 2) {
      let tmpService = Seneca({
        'logLevel': 'info',
        'timeout': 15000,
        tag: `service-${k}`,
      }).use('zipkin-tracer', {
        host: 'zipkin.local',
        port: 80,
      });
      tmpService.client({
        type: 'http',
        host: tmp[0],
        port: tmp[1]
      });
      service[k] = tmpService;
    }
  }
});

module.exports = service;