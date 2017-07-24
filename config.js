'use strict';

const dotenv = require('dotenv');
const path = require("path");

const env = process.env.NODE_ENV || 'development';
dotenv.config({
  path: path.resolve(`${__dirname}/.env`),
});

//服务参数
const visAccountService = process.env.VIS_ACCOUNT_SERVICE || '';

module.exports = {
  service: {
    account: visAccountService,
  },
}