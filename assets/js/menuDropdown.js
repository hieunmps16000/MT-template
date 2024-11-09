menuDropDown('.mobile_menu .noidung ul>.deeper>a')
function menuDropDown(menu) {
    var formElement = $(menu)
    $(formElement).each(function () {
        $(this).after('<span><i class="fas fa-plus"></i></span>')
        $(this).next().click(function () {
            $(this).toggleClass('Minus')
            if($(this).hasClass('Minus')) {
                $(this).append('<i class="fas fa-minus"></i>')
                $(this).find('.fa-plus').remove()
            } else {
                $(this).find('.fa-minus').remove()
                $(this).append('<i class="fas fa-plus"></i>')
            }
            $(this).next().slideToggle()
        })
    })
}