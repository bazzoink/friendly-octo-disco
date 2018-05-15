var angular = require('angular');

module.exports = angular.module('WLComponents.LoadingDots', [])
    .component('bazzoinkLoadingDots', require('./wl-loading-dots.component.js'))
    .name;
