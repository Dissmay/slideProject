$(function(){
	var wow = new WOW();
	wow.init();


$('.single-item-rtl').slick({
    dots: false,
  infinite: false,
  speed: 1200,
  fade: true,
  cssEase: 'linear'
});

$('.single-item-rtl').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $(currentSlide).addClass('animations');
});
 

});