
var assert = require('assert');
var calculateWidths = require('../../lib/calculateWidths');

describe('Calculate Widths Unit Tests', function () {
	it('should be a function', function () {
		assert.strictEqual(typeof calculateWidths, 'function');
	});
	it('should calculate the width for a single column and padding 0', function () {
		assert.deepStrictEqual(calculateWidths([1], 0), [100]);
	});
	it('should calculate the width for a single column and padding 1', function () {
		assert.deepStrictEqual(calculateWidths([1], 1), [98]);
	});
	it('should calculate the width for a double column and padding 1', function () {
		assert.deepStrictEqual(calculateWidths([1, 1], 1), [48.5, 48.5]);
	});
	it('should calculate the width for a triple column and padding 1', function () {
		assert.deepStrictEqual(calculateWidths([1, 1, 1], 1), [32, 32, 32]);
	});
	it('should calculate the width for a double column with different aspect ratios', function () {
		assert.deepStrictEqual(calculateWidths([1, 0.25], 1), [19.4, 77.6]);
	});
	it('should calculate the width for a triple column with different aspect ratios', function () {
		assert.deepStrictEqual(calculateWidths([1, 0.5, 1], 1), [24, 48, 24]);
	});
});
