var searchInput = document.getElementById('key');
var shelper = document.getElementById('shelper');

searchInput.onfocus = function () {
    shelper.style.display = 'block';
}
searchInput.onblur = function () {
    shelper.style.display = 'none';
}

var searchFix = document.getElementById('search');
window.onscroll = function () {
    var scrollTop = kirin.win('scrollTop');
    if (scrollTop > 650) {
        kirin.addClass(searchFix, 'search-fix');
    } else {
        kirin.removeClass(searchFix, 'search-fix');
    }
}
