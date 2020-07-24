$(function(){

      /*Fixed Header*/

      let header = $("#header");
      let headerH = header.innerHeight();
      let scrollPos = $(window).scrollTop();
      let nav = $('#header__menu'); 
      let navToggle = $("#navToggle");
      let header__burger = $(".header__burger");


      let body = $('#body'); 

      checkScroll(scrollPos, headerH)

      $(window).on("scroll load resize",function(){
            let headerH = header.innerHeight();
            scrollPos = $(this).scrollTop();

            checkScroll(scrollPos, headerH);
      });

      function checkScroll(scrollPos, headerH){
            if(scrollPos > headerH){
                  header.addClass("fixed");
            } else {
                  header.removeClass("fixed");
            }
      }

      /*Smooth scroll*/

      $("[data-scroll]").on('click', function(event){
            event.preventDefault();//отменяет стандартное поведение ссылки при клики

            let elementId = $(this).data('scroll');
            let elementOffset = $(elementId).offset().top;

            nav.removeClass("show");
            body.removeClass("lock");
            header__burger.removeClass("active");
            

            console.log(elementId);

            $('html, body').animate({
            scrollTop: elementOffset - 65
            }, 700);
            
      });

       /*Nav Toggle*/

    
       navToggle.on('click', function(event){
            event.preventDefault();//отменяет стандартное поведение ссылки при клики

            nav.toggleClass("show");
            
            
      });


    /*Slider*/

    $('.slider').slick({
      arrows: false,
      dots:true,
      slidesToShow:1,
      slidesToScroll: 1,
      fade: true,
      speed: 300,
      autoplay: true
      
      });


      
      $("#carousel1").owlCarousel({
            autoplay: true,
            dots:false,
            autoplayTimeout: 4000,
            loop:true,
            pagination: false,
            navigationText: false,
            itemsMobile: false, // 
            items: 5,
            smartSpeed:1000,
            responsive : {
                  0 : {
                        items:2
                  },
                  800 : {
                        items:4
                  },
                  1300:{
                        items: 5
                  }
              }
      });
     
      $('.header__burger').click(function(event){
            $('.header__burger,.header__menu').toggleClass('active');
            $('body').toggleClass('lock');
      });

});