var jsdom = require('jsdom');

console.log(jsdom);
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.parentWindow;