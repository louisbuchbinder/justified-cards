var config = require('flconf')(__dirname);
var JSON5 = require('json5');

config.parse = JSON5.parse;
config.pattern = '**/*.json5';

config.use('env');
config.use('default');

module.exports = config.load();
