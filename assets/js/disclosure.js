

jQuery(function($){
  $( '.back-ttl' ).on( 'click', function(e){
    $(this).toggleClass('active');
    $(this).next().slideToggle();
    e.preventDefault();
  });




});