$(".btn-text").click(function () {
    var elem = this;
    var wrapper = $( elem ).closest( '.btn-portfolio-text' );
    var hover = $( wrapper ).find( '.portfolio-item__hover' );

    $(wrapper).toggleClass("btn-portfolio-text--bg");
    $(hover).toggleClass("hover-shou");
    $(elem).html('свернуть');

    if ( !$( hover ).hasClass( 'hover-shou' )) {
        $(elem).html('подробнее');
    }
});

var portfolio = new Swiper('.portfolio-container', {
    pagination: {
        el: '.portfolio-pagination',
        type: 'fraction',
    },
});



