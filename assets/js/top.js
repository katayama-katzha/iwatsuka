

jQuery(function($){
  
  $(window).on('load resize', function() {
    var client_h = document.getElementById('fv').clientHeight;
    $(window).on("scroll", function () {
      const sliderHeight = client_h;
      if (sliderHeight < $(this).scrollTop()) {
        $("header").addClass("bottomScroll");
      } else {
        $("header").removeClass("bottomScroll");
      }
    });
  });

  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){
      const src = $('#fv-movie').attr('src').replace('fv-pc', 'fv-sp');
      $('#fv-movie').attr('src', src);
    }else{
      const src = $('#fv-movie').attr('src').replace('fv-sp', 'fv-pc');
      $('#fv-movie').attr('src', src);
    };
   

  }());




});