
var assert = require('assert');
var justifiedCards = require('..');

describe('Justified Cards Unit Tests', function () {
	it('should be a function', function () {
		assert.strictEqual(typeof justifiedCards, 'function');
	});
	it('should return a Justified Card Output', function () {
		assert.deepStrictEqual(justifiedCards([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
			[48.5, 48.5, 48.5, 48.5, 48.5, 48.5, 48.5, 48.5, 48.5, 48.5]);
	});
	it('should return a Justified Card Output with options', function () {
		assert.deepStrictEqual(justifiedCards([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], { columns: 3 }),
			[32, 32, 32, 32, 32, 32, 32, 32, 32, 98]); // the final card spans the entire line
	});
	it('should reduce the column size if width drops below the cutoff', function () {
		assert.deepStrictEqual(justifiedCards([1, 0.1, 0.1]), [98, 48.5, 48.5]);
	});
});
