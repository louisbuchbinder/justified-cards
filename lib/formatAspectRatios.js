
// LETS USE RATIONAL NUMBERS

function isPositiveNumber(val) {
	return typeof val === 'number' && !isNaN(val) && val > 0;
}


/**
 * @param {Array} sizes Float Array of Aspect Ratios (h/w) or Object Array with integer height and width params
 */

module.exports = function (sizes) {
	if (!Array.isArray(sizes) || !sizes.length) {
		throw new Error('Expected sizes array with positive length');
	}

	if (sizes.every(isPositiveNumber)) {
		// sizes is an array of aspect ratios
		return sizes;
	}

	if (sizes.every(function (size) {
		return typeof size === 'object' &&
			isPositiveNumber(size.height) &&
			isPositiveNumber(size.width);
	})) {
		return sizes.map(function (size) {
			return size.height / size.width;
		});
	}

	throw new Error('Expected a sizes array of aspect ratios or height and width objects');
};
