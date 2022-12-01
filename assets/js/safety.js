

jQuery(function($){
  

  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){
      $('.ttl-wrapper').attr('data-wow-offset', '200');
      $('.card').attr('data-wow-delay', '0s');
      $('.card').attr('data-wow-offset', '200');
    }else{
      
    };
   

  }());




});