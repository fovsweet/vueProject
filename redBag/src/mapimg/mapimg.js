//require('cacl');
//require('zepto');
var vueTap = require('vue-tap');
//var Vue = require('vue');
var app  = require('./index.vue');
Vue.use(vueTap);

var mapVue = new Vue(app);