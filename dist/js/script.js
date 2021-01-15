$(".cmn-toggle-switch__htx").click(function () {
    $(this).toggleClass("active");
    if (this.classList.contains("active") === true) {
        $('.wrapper-menu').addClass("active");
        $( 'body' ).addClass( 'no-scroll' );
        $(".wrapper-gamburger").addClass('menu-hover');
    } else {
        $('.wrapper-menu').removeClass("active");
        $( 'body' ).removeClass( 'no-scroll' );
        $(".wrapper-gamburger").removeClass('menu-hover');
    }
});

$(document).ready( function() {
    $(".ask-inp-file").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".visibl-inp-file__text").html(filename);
    });
});
var myMap;

ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {
        center: [45.350942, 39.058194],
        controls: [ ],
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
    });

    var myPlacemark = new ymaps.Placemark([45.350942, 39.058194], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/ic/point.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-15, -40]
    });

    myMap.geoObjects
        .add(myPlacemark);

// Добавим на карту ползунок масштаба и линейку.
    myMap.controls.add('zoomControl');

//Отключить изменение маштаба колесом и косанием
    myMap.behaviors.disable(['scrollZoom' , 'multiTouch' , 'drag']);
}
