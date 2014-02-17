// Initialise FlexSlider for Carousels
$(window).load(function() {
  
  if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
    $('.flexslider').flexslider({
      animation: "slide",
      animationSpeed: 50,
      slideshow: false,
      touch: true,
      smoothHeight: false
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
  };

  $('.info-link').click(function(){
  	event.preventDefault();
    $(this).closest('.post').find('.info-box').toggle();
  });

   $('.close-button').click(function(){
    event.preventDefault();
    $(this).closest('.post').find('.info-box').hide();
  });

});
