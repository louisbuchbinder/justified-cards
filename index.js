
var formatAspectRatios = require('./lib/formatAspectRatios');
var pickOptions = require('./lib/pickOptions');
var calculateWidths = require('./lib/calculateWidths');

module.exports = function (sizes, options) {
	var aspectRatios = formatAspectRatios(sizes);
	var config = pickOptions(options);
	var index = 0;
	var output = [];
	var items;

	function recursion(length) {
		var widths = calculateWidths(aspectRatios.slice(index, index + length), config.padding);

		if (!widths.every(width => width > config.cutoff) && length > 1) {
			return recursion(length - 1);
		}

		return widths;
	}

	while (index < aspectRatios.length) {
		items = recursion(config.columns);
		index += items.length;
		output = output.concat(items);
	}

	return output;
};
