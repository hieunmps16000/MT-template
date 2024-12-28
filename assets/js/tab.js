$('.extra6 .main2').prepend("<div class='tab'></div>");
$('.extra6 .ja-workshome').each(function() {
    var id1 = $(this).attr('id');
    var title = $(this).find('.workshome-title').text();
    $(this).parent().find('.tab').append('<a href="#' + id1 + '">' + title);
    //$(this).prepend('<a href="#'+id1+'">'+title);
});
//$('.noidungtren1 .ja-workshome > a ').clone().prependTo('.tab');
//$('.noidungtren1 .ja-workshome > a ').remove();

$(".tab a").click(function(e) {
    e.preventDefault();
    $(this).addClass("current");
    $(this).siblings().removeClass("current");
    var tabhref = $(this).attr("href");
    $(".extra6 .ja-workshome").not(tabhref).css('display', 'none');
    $(tabhref).fadeIn();
});
$('.tab > a:first-child').click();