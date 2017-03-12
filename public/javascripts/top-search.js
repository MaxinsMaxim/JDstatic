var searchInput = document.getElementById('key');
var shelper = document.getElementById('shelper');

searchInput.onfocus = function () {
    shelper.style.display = 'block';
}
searchInput.onblur = function () {
    shelper.style.display = 'none';
}