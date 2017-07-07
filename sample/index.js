
var path = require('path');
var fs = require('fs');
var express = require('express');

var config = require(path.join(__dirname, '..', 'config'));

var templates = {
	card: String(fs.readFileSync(path.join(__dirname, 'card.template.html'))),
	index: String(fs.readFileSync(path.join(__dirname, 'index.template.html'))),
	style: String(fs.readFileSync(path.join(__dirname, 'style.template.css')))
};

var data = require(path.join(__dirname, 'data.json'));
var justifiedCards = require(path.join(__dirname, '..'));

var layout = justifiedCards(data);

var renderCard = function (width, index) {
	return templates.card
		.replace(/{WIDTH}/, width)
		.replace(/{SRC}/, data[index].source);
};

var app = layout.map(renderCard).join('');

var style = templates.style
	.replace(/{PADDING_TOP}/, config.padding)
	.replace(/{PADDING_LEFT}/, config.padding);

var index = templates.index
	.replace(/{STYLE}/, style)
	.replace(/{APP}/, app);

express().use(function (req, res) {
	res.send(index);
}).listen(8000, function () {
	console.log('Listening on 8000');
});
