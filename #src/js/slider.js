var descript = new Swiper('.descript-container', {
    effect: 'flip',
    spaceBetween: 30,
    loop:true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
var background = new Swiper('.background-container', {
    effect: 'fade',
    loop:true,
    navigation: {
        nextEl: '.color-button-next',
        prevEl: '.color-button-prev',
    },
});
var color = new Swiper('.color-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    slideToClickedSlide: true,
    loop:true,
    thumbs: {
        swiper: descript
    },
    navigation: {
        nextEl: '.color-button-next',
        prevEl: '.color-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        767: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

background.controller.control = descript ;
descript.controller.control = background ;





