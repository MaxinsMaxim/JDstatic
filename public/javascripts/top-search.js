var searchInput = document.getElementById('key');
var shelper = document.getElementById('shelper');

//搜索条焦点事件
searchInput.onfocus = function () {
    shelper.style.display = 'block';
}
searchInput.onblur = function () {
    shelper.style.display = 'none';
}

//顶部搜索条滚动一定高度淡入
var searchFix = document.getElementById('search');
window.onscroll = function () {
    var scrollTop = kirin.win('scrollTop');
    if (scrollTop > 650) {
        kirin.addClass(searchFix, 'search-fix');
    } else {
        kirin.removeClass(searchFix, 'search-fix');
    }
}

//左边分类导航
;(function () {
    var fs = document.getElementsByClassName('fs')[0];
    var cate_menu = fs.getElementsByClassName('cate-menu')[0];
    var cate_menu_item = cate_menu.getElementsByClassName('cate-menu-item');
    for (var i = 0; i < cate_menu_item.length; i++) {
        var curItem = cate_menu_item[i];
        curItem.index = i;
        curItem.onmouseover = function () {
            kirin.addClass(this, 'cate_menu_item_on');
        };
        curItem.onmouseout = function () {
            kirin.removeClass(this, 'cate_menu_item_on');
        };
    }
})();