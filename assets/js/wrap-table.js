$('.itemFullText table, .tabDetails table').each(function() {
    // Bọc mỗi bảng trong một thẻ div
    $(this).wrap('<div class="tb"></div>');
});