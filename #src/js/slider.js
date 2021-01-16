var descript = new Swiper('.descript-container', {
    effect: 'flip',
    spaceBetween: 30,
    //freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

});

var color = new Swiper('.color-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,

    navigation: {
        nextEl: '.color-button-next',
        prevEl: '.color-button-prev',
    },
    thumbs: {
        swiper: color
    },

});



var background = new Swiper('.background-container', {
    effect: 'fade',
    loop:true,
    thumbs: {
        swiper: descript
    }

});


descript.controller.control = background ;
background.controller.control = descript ;




