var lastScrollTop = 0;
var delta = 20;
var navbarHeight = $('.nav').outerHeight();
var didScroll;

$(window).scroll(function(e) {
  didScroll = true;
});


setInterval(() => {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

// Do some manipulation when user scrolls
function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  if (st > lastScrollTop && st > navbarHeight) {
    $('.nav').addClass('nav-up');
  } else {
    if (st + $(window).height() < $(document).height()) {
      $('.nav').removeClass('nav-up');
    }
  }
  lastScrollTop = st;
}
