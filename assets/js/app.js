// Initialise FlexSlider for Carousels
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshow: false,
    touch: true,
    smoothHeight: false
  });

  $('.info-link').click(function(){
  	event.preventDefault();
    $(this).closest('.post').find('.info-box').toggle();
  });

});
