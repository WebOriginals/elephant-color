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
