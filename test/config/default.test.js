
var config = require('../../config');
var assert = require('assert');

describe('Default Config Unit Tests', function () {
	it('should be a config object', function () {
		assert.strictEqual(typeof config, 'object');
	});
	it('should have a columns property set to 2', function () {
		assert.strictEqual(config.columns, 2);
	});
	it('should have a padding property set to 1', function () {
		assert.strictEqual(config.padding, 1);
	});
});
