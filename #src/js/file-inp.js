$(document).ready( function() {
    $(".ask-inp-file").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $(".visibl-inp-file__text").html(filename);
    });
});