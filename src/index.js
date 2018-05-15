var angular = require('angular');

/* global MODULE_NAME */
module.exports = angular.module(MODULE_NAME, [])
    .component('bazzoinkLoadingDots', require('./wl-loading-dots.component.js'))
    .name;
