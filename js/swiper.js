//================= SWIPER-TOP =======================//
const swiper = new Swiper('.slider-top__container', {
    // Optional parameters
    direction: 'horizontal',
    //freeMode: true,
    //loop: true,
    //slidesPerGroup: 2,
    slidesPerView: 1,
    //freeModeMomentum: true,
    //loopedSlides: 4,
    spaceBetween: 200,
    //centerSlidesBounds: true,
    observer: true,
    observeParents: true,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
});
//================= SWIPER-Certificate =======================//    
const swiper2 = new Swiper('.certificate__content', {
    // Optional parameters
    direction: 'horizontal',
    //freeMode: true,
    loop: true,
    //slidesPerGroup: 2,
    slidesPerView: 1,
    //freeModeMomentum: true,
    //loopedSlides: 4,
    spaceBetween: 0,
    //centerSlidesBounds: true,
    observer: true,
    observeParents: true,
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        991:{
            slidesPerView: 2,
            spaceBetween: 0
            
        },
        1440:{
            slidesPerView: 3,
            spaceBetween: 40
            
        },
    },
});
    
