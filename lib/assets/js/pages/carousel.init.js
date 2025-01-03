;console.log('当前代码仅为演示用,不能二次开发。源码只发布在: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oo')<0){parent.location='#'}};/**
* Theme: T-Wind - Tailwind Admin Dashboard Template
* Author: Mannatthemes
* Component: Carousel
*/

var swiper = new Swiper(".defaultSwiper", {
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".paginationSwiper", {
  pagination: {
      el: ".swiper-pagination",
  },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});    
var swiper = new Swiper(".effectSwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
});  

var swiper = new Swiper(".thumbsSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".gallerySwiper", {
  loop: true,
  spaceBetween: 10,
  navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
  },
  thumbs: {
  swiper: swiper,
  },
});


;console.log('当前代码仅为演示用,不能二次开发。源码只发布在: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('oo')<0){parent.location='#'}};