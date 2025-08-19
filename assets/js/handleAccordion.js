function handleAccordion(selectorItem, selectorContent) {
    $(selectorItem).each(function() {
        $(this).on('click', function() {
            $(this).find(selectorContent).slideToggle();
        });
    });
}