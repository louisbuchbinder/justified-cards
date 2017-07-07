
var assert = require('assert');
var pickOptions = require('../../lib/pickOptions');
var config = require('../../config');

describe('PickOptions Unit Tests', function () {
	it('should be a function', function () {
		assert.strictEqual(typeof pickOptions, 'function');
	});
	it('should fallback to the default config options', function () {
		assert.deepStrictEqual(pickOptions(), config);
	});
	it('should use the options passed in if provided', function () {
		assert.deepStrictEqual(pickOptions({columns: 3, padding: 2}), {columns: 3, padding: 2, cutoff: 15});
	});
	it('should not use invalid parameters', function () {
		assert.deepStrictEqual(pickOptions({invlaid: 3}), config);
	});
});
