// Handle scroll to top
$("#Mod445").click(function () {
    $("body,html").animate({
        scrollTop: 0,
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop() > 200) {
        $("#Mod445").show();
    } else {
        $("#Mod445").hide();
    }
});