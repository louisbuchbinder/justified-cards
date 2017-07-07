
// USE JOI SCHEMA TO VALIDATE THE OPTS

var config = require('../config');
var validOptions = ['columns', 'padding', 'cutoff'];

module.exports = function (options) {
	var opts = {};

	if (typeof options !== 'object' || !Object.keys(options).length) {
		options = {};
	}

	validOptions.forEach(function (option) {
		opts[option] = options[option] || config[option];
	});

	return opts;
};
