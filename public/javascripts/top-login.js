;(function () {
    var citySelect = document.getElementById('citySelect');
    var selectText = document.getElementById('selectText');
    var cityItem = document.querySelectorAll('#citySelect .item a');
    var dropdownList = document.getElementsByClassName('dropdown');

    cityItem.item(0).classList.add('selected');
    for (var i = 0; i < cityItem.length; i++) {
        cityItem[i].index = i;
        cityItem[i].onclick = function () {
            for (var i = 0; i < cityItem.length; i++) {
                cityItem[i].className = '';
            }
            this.className = 'selected';
            selectText.innerHTML = this.innerHTML;
        }
    }

    for (var i = 0; i < dropdownList.length; i++) {
        dropdownList[i].onmouseover =function () {
            this.classList.add('hover')
        }
        dropdownList[i].onmouseout = function () {
            this.classList.remove('hover')
        }
    }
});