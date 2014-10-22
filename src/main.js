var hello = require("./test");
window.jQuery = window.$ = require("jquery");

require('velocity-animate');

$('.application').html(hello);

$('.application').velocity({opacity: 0.5});

