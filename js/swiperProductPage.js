/*================= SWIPER-PRODUCTS-PAGE =======================*/
const swiper3 = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    //slideToClickedSlide: 'true',
    //freeMode: true,
    //loop: true,
    //slidesPerGroup: 2,
    slidesPerView: 1,
    //freeModeMomentum: true,
    //loopedSlides: 4,
    spaceBetween: 0,
    preventClicks: true,
    //preventClicksPropagation: true,
    //centerSlidesBounds: true,
    observer: true,
    observeParents: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
     991:{
         slidesPerView: 3,
         spaceBetween: 0
        },
    },
});