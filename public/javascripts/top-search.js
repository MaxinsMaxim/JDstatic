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
    var fs_left = fs.getElementsByClassName('fs-left')[0];
    var cate_menu = fs.getElementsByClassName('cate-menu')[0];
    var cate_menu_items = cate_menu.getElementsByClassName('cate-menu-item');
    var cate_pop = fs.getElementsByClassName('cate-pop')[0];
    var cate_parts = cate_pop.getElementsByClassName('cate-part');
    for (var i = 0; i < cate_menu_items.length; i++) {
        var curItem = cate_menu_items[i];
        curItem.index = i;
        curItem.onmouseover = function () {
            var otherParts = kirin.siblings(cate_parts[this.index]);
            for (var i = 0; i < otherParts.length; i++) {
                otherParts[i].style.display = 'none';
            }
            kirin.addClass(this, 'cate_menu_item_on');
            kirin.css(cate_pop, 'display', 'block');
            kirin.css(cate_parts[this.index], 'display', 'block');
        };
        curItem.onmouseout = function () {
            kirin.removeClass(this, 'cate_menu_item_on');
        };
    };
    fs_left.onmouseleave = function () {
        for (var i = 0; i < cate_parts.length; i++) {
            cate_parts[i].style.display = 'none';
        }
        cate_pop.style.display = 'none';
    }
})();


