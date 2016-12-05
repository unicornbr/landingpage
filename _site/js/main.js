//header oculto
var scrollAmount = window.pageYOffset;
var scrollTest = $(window).height();

if(scrollAmount <= scrollTest) {
  $( "header" ).addClass( "hidden" );
}

$(window).on('scroll', function() {
    var scrollAmount = window.pageYOffset;
    var scrollTest = $(window).height();

    if(scrollAmount > scrollTest) {
      $( "header" ).removeClass( "hidden" );
    } else {
      $( "header" ).addClass( "hidden" );
    }
});


//transição suave
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});