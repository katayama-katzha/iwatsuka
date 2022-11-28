window.addEventListener('load', (event) => {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');

});



jQuery(window).on('load', function() {
  jQuery("body").removeClass("preload");
  jQuery(".hide-content").removeClass("hide-content");
});

jQuery(function($){
  


  $(function(){
    if (window.matchMedia('(max-width: 767px)').matches){

    }else{

    };
   

  }());
  
  $(window).resize(function() {

    if (window.matchMedia('(max-width: 767px)').matches){

      
    }else{

    }
  });
  $( function() {
    $( 'a[href^="#"]' ).on( 'click', function(e){
      var speed = 500;
      var type = 'swing';
      var href= $( this ).attr( 'href' );
      var target = $( href === '#' || href === '' ? 'html' : href );
      
      if (window.matchMedia('(max-width: 767px)').matches){
        var position = target.offset().top - 50;
      }else{
        var position = target.offset().top - 70;
      }
      $( 'html, body' ).animate( { scrollTop:position }, speed, type );
      e.preventDefault();
    });

  });

  $( function() {
    $( '.burger' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
      $('body').toggleClass('active');
      e.preventDefault();
    });
    $( '.menu a' ).on( 'click', function(e){
      $('.burger').removeClass('active');
      $('.menu').removeClass('active');
      $('body').removeClass('active');
      e.preventDefault();
    });
    $( '.has-child' ).on( 'click', function(e){
      $(this).toggleClass('active');
      $(this).children('.child').slideToggle();
      e.preventDefault();
    });
    $('.has-child a').click(function(event){
      event.stopPropagation();
    });
  });

  $('.dot-link').hover(
    function() {
      $(this).next().addClass('scale')
    },
    function() {
      $(this).next().removeClass('scale')
    }
);


  $(function () {
    $(window).on("scroll", function () {
      const sliderHeight = 500;
      if (sliderHeight < $(this).scrollTop()) {
        $(".totop").addClass("bottomScroll");
      } else {
        $(".totop").removeClass("bottomScroll");
      }
    });

    

  });

  const swiper = new Swiper(".banner-swiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop:true,
    spaceBetween:30,
    threshold:10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 3.4,
        spaceBetween:35,
      }
    }
  });

  const swiper2 = new Swiper(".product-swiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop:true,
    spaceBetween:20,
    threshold:10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      767: {
        slidesPerView: 4.4,
        spaceBetween:30,
      }
    }
  });

  const swiper3 = new Swiper(".about-swiper", {
    slidesPerView: 1.2,
    spaceBetween:23,
    threshold:10,

    scrollbar: {
      el: '.swiper-scrollbar', 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      767: {
        slidesPerView: 3.4,
        spaceBetween:30,
      }
    }
  });


});