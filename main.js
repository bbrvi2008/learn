$(document).ready(function() {
    // expectations
    var container = $(".expectations");
    $(".expectations-item_title", container).click(function() {
        var item = $(this).closest(".expectations-item");
        if(item.hasClass("active")) {
            item.removeClass("active")
        } else {
            $(".expectations-item", container).removeClass("active");
            item.addClass("active");
        }
    });
    // /expectations
});