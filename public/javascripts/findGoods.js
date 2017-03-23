// 发现好货
;(function () {
    var goodsList = $('#findGoods')[0];
    var container = goodsList.getElementsByClassName('find-list')[0];
    var data = null;
    $.ajax({
        url: '/api/findItems',
        type: 'get',
        cache: false,
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                data = res.itemList;
            }
        }
    });

    function bindData() {
        if (data && data.length) {
            var str = '';
            for (var i = 0; i < data.length; i++) {
                str += '<li class="find-item">';
                str += '<a class="find-item-lk" href="' + data[i].link + '">';
                str += '<p>' + data[i].tit + '</p>';
                str += '<img class="find-item-img" real="' + data[i].src + '" ></a>';
            }
            container.innerHTML = str;
        }
    }

    bindData();

    maxin.lazyLoad({container: container});
    window.addEventListener('scroll', maxin.lazyLoad.bind(null, {container: container}));
})();

//品牌头条
;(function () {
    var $brandList = $('#findGoods').find('.find-col2');
    var brandTop = $brandList.find('.brand-top')[0];
    var brandBottom = $brandList.find('.brand-bottom')[0];
    $.ajax({
        url: '/api/findItems/brandList',
        type: 'get',
        cache: false,
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                var str = '';
                for (var i = 0; i < res.brandInfo.length; i++) {
                    str += '<div class="brand-top-wrapper">';
                    str += '<a class="brand-top-lk" href="' + res.brandInfo[i].link + '">';
                    str += '<p class="name">' + res.brandInfo[i].name + '</p>';
                    str += '<p class="desc">' + res.brandInfo[i].desc + '</p>';
                    str += '<div class="split"></div>';
                    str += '<div class="pic"><img class="brand-top-img" real="' + res.brandInfo[i].src + '"></div>';
                    str += '</a></div>';
                }
                brandTop.innerHTML = str;
                var str2 = '';
                str2 += '<a href="' + res.brandBottom.link + '"><img real="' + res.brandBottom.src + '"></a>';
                brandBottom.innerHTML = str2;
            }
        }
    });

    maxin.lazyLoad({container: $brandList[0]});
    window.addEventListener('scroll', maxin.lazyLoad.bind(null, {container: $brandList[0]}));
})();

//排行榜
;(function () {
    var $topList = $('#findGoods').find('.find-col3');
    var topHead = $topList.find('.top-tab-head')[0];
    var topContent = $topList.find('.top-tab-content')[0];

    var data = null;
    $.ajax({
        url: '/api/findItems/topList',
        type: 'get',
        cache: false,
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                data = res.topList;
            }
        }
    });

    var strHead = '';
    var strContent = '';
    if (data && data.length) {
        for (var i = 0; i < data.length; i++) {
            strHead += '<a class="top-tab-head-item" href="' + data[i].headLink + '">' + data[i].tabName + '</a>';
            strContent += '<div class="top-tab-content-item">';
            strContent += '<ul class="top-list clearfix">';
            for (var j = 0; j < data[i].imgItem.length; j++) {
                strContent += '<li class="top-item">';
                strContent += '<a class="top-item-lk" href="' + data[i].imgItem[j].link + '" target="_blank">';
                strContent += '<div class="top-rank top-rank-' + ( j + 1 ) + '">' + ( j + 1 ) + '</div>';
                strContent += '<div class="top-pic"><img class="top-item-img" real="' + data[i].imgItem[j].src + '"></div>';
                strContent += '<p class="top-name">' + data[i].imgItem[j].title + '</p>';
                strContent += '</a>';
                strContent += '</li>';
            }

            strContent += '</ul>';
            strContent += '</div>';
        }

        strHead += '<div class="top-tab-active"></div>';
        topHead.innerHTML = strHead;
        topContent.innerHTML = strContent;
    }

    var $imgCon = $(topContent).find('.top-tab-content-item');
    var $headItem = $(topHead).find('.top-tab-head-item');

    $imgCon.first().show();
    maxin.lazyLoad({container: $imgCon.first()[0]});
    $headItem.hover(function () {
        var index = $(this).index();
        var $curImgCon = $imgCon.eq(index);
        $(topHead).find('.top-tab-active').css({transform: 'translateX(' + index * 78 + 'px)'});
        $curImgCon.show().siblings().hide();
        if (!($curImgCon[0].isLoaded)) {
            var container = $imgCon.filter(':visible')[0];
            maxin.lazyLoad({container: container});
            $curImgCon[0].isLoaded = true;
        }
    })
})();