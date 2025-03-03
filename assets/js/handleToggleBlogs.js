// Normal Accordion
const itemContainers = document.querySelectorAll("#Mod436 .itemContainer")
itemContainers.forEach(itemContainer => {
    $(itemContainer.querySelector('.catItemTitle')).on('click', () => {
        $(itemContainer.querySelector('.catItemExtraFields')).slideToggle().toggleClass('active');
    })
});

// FAQ - Frequently Asked Questions
$('#Mod437 .catItemTitle').first().addClass('active');
$('#Mod437 .catItemExtraFields').first().show();

$('#Mod437 .catItemTitle').click(function() {
    const answer = $(this).next('.catItemExtraFields');
    $('#Mod437 .catItemExtraFields').not(answer).slideUp();
    $('#Mod437 .catItemTitle').removeClass('active');

    answer.slideToggle();
    $(this).toggleClass('active');
});