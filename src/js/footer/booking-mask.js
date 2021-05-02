(function ($) {
  const book_now = $('.book-now');
  const book_now_button = $('.book-now-button');
  const booking_mask = book_now.find('.booking-mask');

  book_now_button.on('click', function() {
    booking_mask.slideToggle();

    if ( book_now.hasClass('open') ) {
        book_now.removeClass('open');
    } else {
        book_now.addClass('open');
    }
  });

})(jQuery);
