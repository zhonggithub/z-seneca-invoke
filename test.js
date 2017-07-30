const service = require('./index');

service.console.actAsync({
  role: 'console.account',
  cmd: 'list',
}, {
  params: {}
}).then(ret => {
  console.log(ret.data);
}).catch(err => {
  console.log(err);
});
console.log('----');
