var angular = require('angular');

module.exports = angular.module('BazzoinkLoadingDots', [])
    .component('bazzoinkLoadingDots', require('./wl-loading-dots.component.js'))
    .name;
