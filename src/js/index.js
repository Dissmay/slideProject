import TypeIt from 'typeit';
$(function(){

	var wow = new WOW();
	wow.init();




$('.single-item-rtl').slick({
    dots: false,
  infinite: false,
  speed: 1200,
  fade: false,
  cssEase: 'linear'
});

$('.single-item-rtl').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $(currentSlide).addClass('animations');
});



new TypeIt('.slick-active .p', {
 
  speed: 20,
   
  startDelay:1000,
  cursor:false
  
}).go();
new TypeIt('.slick-active .ultra', {
 
  speed: 20,
   
  startDelay:1400,
  cursor:false
  
}).go();
new TypeIt('.slick-active .mega', {
 
  speed: 20,
   
  startDelay:1800,
  cursor:false
  
}).go();
new TypeIt('.slick-active .extra', {
 
  speed: 20,
   
  startDelay:2200,
  cursor:false
  
}).go();
new TypeIt('.slick-active .kurs', {
 
  speed: 20,
   
  startDelay:2600,
  cursor:false
  
}).go();
new TypeIt('.slick-active .kurs2', {
 
  speed: 20,
   
  startDelay:3000,
  cursor:false
  
}).go();
new TypeIt('.slick-active .kurs3', {
 
  speed: 20,
   
  startDelay:3400,
  cursor:false
  
}).go();

new TypeIt('.slick-active .fantastic', {
 
  speed: 20,
   
  startDelay:3400,
  cursor:false
  
}).go();

});
