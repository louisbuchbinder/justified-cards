
var assert = require('assert');
var formatAspectRatios = require('../../lib/formatAspectRatios');

describe('Format Aspect Ratios Unit Tests', function () {
	it('should be a function', function () {
		assert.strictEqual(typeof formatAspectRatios, 'function');
	});
	it('should throw an error on bad input', function () {
		assert.throws(function () {
			formatAspectRatios(true);
		});
		assert.throws(function () {
			formatAspectRatios(123);
		});
		assert.throws(function () {
			formatAspectRatios({});
		});
		assert.throws(function () {
			formatAspectRatios([]);
		});
		assert.throws(function () {
			formatAspectRatios('abc');
		});
		assert.throws(function () {
			formatAspectRatios([1, 2, 3, {height: 1, width: 1}]);
		});
		assert.throws(function () {
			formatAspectRatios([{height: 1, width: 1}, {}]);
		});
	});
	it('should return already formatted integer aspect ratios', function () {
		assert.deepStrictEqual(formatAspectRatios([1, 2, 3, 4]), [1, 2, 3, 4]);
	});
	it('should return already formatted float aspect ratios', function () {
		assert.deepStrictEqual(formatAspectRatios([1.12, 2.32, 3.22, 4.31]), [1.12, 2.32, 3.22, 4.31]);
	});
	it('should format height/width objects to integer aspect ratios', function () {
		assert.deepStrictEqual(formatAspectRatios([{
			height: 1,
			width: 1
		}, {
			height: 2,
			width: 1
		}, {
			height: 3,
			width: 1
		}, {
			height: 4,
			width: 1
		}]), [1, 2, 3, 4]);
	});
	it('should format height/width objects to float aspect ratios', function () {
		assert.deepStrictEqual(formatAspectRatios([{
			height: 1.21,
			width: 1
		}, {
			height: 2,
			width: 1.5
		}, {
			height: 2.59,
			width: 1
		}, {
			height: 4,
			width: 1.25
		}]), [1.21, 4 / 3, 2.59, 3.2]);
	});
});
