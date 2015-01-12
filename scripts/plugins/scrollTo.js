/* globals $ */
$.fn.scrollTo = function( target, options, callback ) {
  'use strict';

  if (typeof options == 'function' && arguments.length == 2) {
    callback = options;
    options = target;
  }

  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);

  return this.each(function () {
    var scrollPane = $(this);
    var scrollTarget;
    var scrollY;

    if (typeof settings.scrollTarget == 'number') {
      scrollTarget = settings.scrollTarget;
      scrollY = scrollTarget;
    } else {
      scrollTarget = $(settings.scrollTarget);
      scrollY = scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    }

    scrollPane.animate(
      {scrollTop : scrollY },
      parseInt(settings.duration),
      settings.easing,
      function () {
        if (typeof callback == 'function') { callback.call(this); }
    });
  });
};