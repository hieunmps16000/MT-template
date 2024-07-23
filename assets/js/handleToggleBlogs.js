// Handle Toggle Blogs
const itemContainers = document.querySelectorAll("#Mod436 .itemContainer")
itemContainers.forEach(itemContainer => {
    $(itemContainer.querySelector('.catItemTitle')).on('click', () => {
        $(itemContainer.querySelector('.catItemExtraFields')).slideToggle().toggleClass('active')
    })
});