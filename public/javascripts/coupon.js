;(function () {
    var $couponList = $('#coupon').find('.coupon-list');
    $.ajax({
        url: '/api/couponInfo',
        type: 'get',
        cache: false,
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                var data = res.couponInfo;
                if (data && data.length) {
                    var str = '';
                    for (var i = 0; i < data.length; i++) {
                        str += '<li class="coupon-item">';
                        str += '<a href="' + data[i].link + '" class="coupon-item-lk">';
                        str += '<div class="coupon-info">';
                        str += '<p class="price"><i>￥</i>' + data[i].price + '</p>';
                        str += '<p class="desc"><span>' + data[i].desc + '</span></p>';
                        str += '<p class="limit"><span>' + data[i].limit + '</span></p>';
                        str += '<p class="more">' + data[i].more + '</p>';
                        str += '</div>';
                        str += '<img real="' + data[i].src + '" class="coupon-img">';
                        str += '</a>';
                        str += '<span class="coupon-item-shadow"></span>';
                        str += '</li>';
                    }
                    $couponList.html(str);
                }
            }
        }
    });

    maxin.lazyLoad({container: $couponList[0]});
    window.addEventListener('scroll', maxin.lazyLoad.bind(null, {container: $couponList[0]}));
})();