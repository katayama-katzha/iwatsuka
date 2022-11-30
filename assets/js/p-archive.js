

jQuery(function($){
  

  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){
      $('.red-banner-card').attr('data-wow-delay', '0s');
      $('.red-banner-card').attr('data-wow-offset', '200');
      $('.product-flex').attr('data-wow-offset', '200');
      $('.sec2').attr('data-wow-offset', '200');
    }else{
      
    };
   

  }());




});