;(function () {
    //秒杀倒计时
    var seckill = document.getElementById('seckill');
    var hour = seckill.getElementsByClassName('cd_hour')[0];
    var minute = seckill.getElementsByClassName('cd_minute')[0];
    var second = seckill.getElementsByClassName('cd_second')[0];

    var skTimer = new Date().getTime() + Number(6660000);

    function timeout(target) {
        var tarTime = new Date(target);
        var curTime = new Date();
        var deffTime = (tarTime - curTime) / 1000;
        var cHour = 60 * 60;

        if (deffTime <= 0) {
            return;
        }

        var hours = Math.floor(deffTime / cHour);
        deffTime %= cHour;

        var minutes = Math.floor(deffTime / 60);
        deffTime %= 60;

        var seconds = Math.floor(deffTime);

        hour.innerHTML = addZero(hours);
        minute.innerHTML = addZero(minutes);
        second.innerHTML = addZero(seconds);
    }

    function addZero(num) {
        return ('0' + num).slice(-2)
    }

    timeout(skTimer);
    hour.timer = window.setInterval(function () {
        timeout(skTimer);
    }, 1000)


    //秒杀 物品 切换
    var $skList = $('.J_sk_list');
    var $sk_list_wrapper = $('.sk-list-wrapper');
    var $left = $sk_list_wrapper.find('.sk-controls-left');
    var $right = $sk_list_wrapper.find('.sk-controls-right');
    //getData
    var data = null;
    $.ajax({
        url: '/api/seckill',
        type: 'get',
        async: false,
        cache: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                data = res.imgSrc;

            }
        }
    });

    //bindData
    if (data && data.length) {
        var str = '';
        for (var i = 0; i < 20; i++) {
            var ran = Math.round(Math.random() * 4);
            str += '<li class="sk-item">';
            str += '<div class="item-pic">';
            str += '<a class="sk-item-lk" href="javascript:void 0;" target="_blank" title="' + data[ran].title + '">';
            str += '<img class="sk-item-img" src="' + data[ran].src + '">';
            str += '<p>' + data[ran].title + '</p>';
            str += '</a><span class="item-shadow"></span></div>';
            str += '<div class="item-price">';
            str += '<span class="price-new"><i>￥</i><span>' + data[ran].newPrice + '</span></span>';
            str += '<span class="price-old"><i>￥</i><del>' + data[ran].oldPrice + '</del></span></div></li>';
        };
        var str1 = '';
        for (var i = 0; i < 5; i++) {
            str1 += '<li class="sk-item">';
            str1 += '<div class="item-pic">';
            str1 += '<a class="sk-item-lk" href="javascript:void 0;" target="_blank" title="' + data[i].title + '">';
            str1 += '<img class="sk-item-img" src="' + data[i].src + '">';
            str1 += '<p>' + data[i].title + '</p>';
            str1 += '</a><span class="item-shadow"></span></div>';
            str1 += '<div class="item-price">';
            str1 += '<span class="price-new"><i>￥</i><span>' + data[i].newPrice + '</span></span>';
            str1 += '<span class="price-old"><i>￥</i><del>' + data[i].oldPrice + '</del></span></div></li>';
        }
        str1 += str;
        $skList.html(str1);
        $skList.css({transform: 'translateX(-1000px)'});
    }

    //bindEvent
    var index = 1;
    var count = $skList.find('.sk-item').length;
    $left.on('click', function () {
        index--;
        if (index == 0) {

            index = count / 5 - 1;
        }
        $skList.css({
            width: count / 5 * 1000,
            transform: 'translateX(' + -index * 1000 + 'px)',
            transitionProperty: 'transform',
            transitionDuration: '0.6s'
        });
    });
    $right.on('click', function () {
        index++;
        if (index == count / 5) {
            kirin.css($skList[0],{transform: 'translateX(0)'});
            index = 1;
        };
        $skList.css({
            width: count / 5 * 1000,
            transform: 'translateX(' + -index * 1000 + 'px)',
            transitionProperty: 'transform',
            transitionDuration: '0.6s'
        });
    })

})();