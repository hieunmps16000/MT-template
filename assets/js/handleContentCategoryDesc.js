// Handle expand/collapse category content
const categoryDesc = $('.category_description');
const categoryContent = $('.category__content');

function handleToggleContent() {{
    const expandBtn = $('.category__expand');
    const collapseBtn = $('.category__collapse');

    expandBtn.on('click', () => {
        categoryDesc.addClass('active');
    });

    collapseBtn.on('click', () => {
        categoryDesc.removeClass('active');
    });
}}

if (categoryContent.text().trim() === "") {
    categoryDesc.hide();
} else {
    handleToggleContent();
}