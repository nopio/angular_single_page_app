angular.module('app').filter('humanize', function() {
  return function(text) {
    var string = text.split('_').join(' ').toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
});
