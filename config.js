'use strict';

const dotenv = require('dotenv');
const path = require("path");

dotenv.config({
  path: path.resolve(`${__dirname}/.env`),
});

//服务参数
const visAccountService = process.env.VIS_ACCOUNT_SERVICE || '';

module.exports = {
  service: {
    account: visAccountService,
    console: '127.0.0.1:6000',
  },
}