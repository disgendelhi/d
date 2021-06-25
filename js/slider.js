var galleryTop = new Swiper('.gallery-top', {  
  loopedSlides: 6,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {  
  loop: true,
  centeredSlides: true,
  slidesPerView: 5,
  loopedSlides: 6,
  touchRatio: 0.2,
  slideToClickedSlide: true 
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;
