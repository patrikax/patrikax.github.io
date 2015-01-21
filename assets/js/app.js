// Initialise FlexSlider for Carousels


$(window).load(function() {

  
  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {

    $('.flexslider').flexslider({
      touch: true,
      slideshow: false,
      useCSS: true,
      maxItems: 1,
      animation: "slide",
      start: function(){
        $('.flexslider').resize();
      }
    });
  }
  
  else {
    $('.flexslider').flexslider({
      animation: "fade",
      animationSpeed: 0,
      slideshow: false,
      touch: true,
      smoothHeight: false
    });
  }

  $('.info-link').click(function(){
  	event.preventDefault();
    $(this).closest('.post').find('.info-box').toggle();
  });

  $('.close-button').click(function(){
    event.preventDefault();
    $(this).closest('.post').find('.info-box').hide();
  });

  $("body").fadeIn(2000);

});


