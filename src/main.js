var hello = require("./test");
require('./plugins');

var _ = require('lodash');
var $ = require("jquery");



$('.application').html(hello);

$('.application').velocity({opacity: 0.5});

