
module.exports = function (aspectRatios, padding) {
	var ratioFactor = aspectRatios.reduce(function (hold, ratio, index, arr) {
		return hold + arr[0] / ratio;
	}, 0);
	var paddingOffset = (aspectRatios.length + 1) * padding;
	var stdWidth = (100 - paddingOffset) / ratioFactor;

	return aspectRatios.map(function (ratio) {
		return stdWidth * aspectRatios[0] / ratio;
	});
};
