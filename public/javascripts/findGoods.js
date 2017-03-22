;(function () {
    var goodsList = document.getElementById('findGoods');
    var container = goodsList.getElementsByClassName('find-list')[0];
    var imgs = container.getElementsByTagName('img');
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

    function lazyLoad() {
        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            if (!curImg.isLoaded) {
                var _a = kirin.offset(curImg).top + curImg.offsetHeight;
                var _b = kirin.win('clientHeight') + kirin.win('scrollTop');
                if (_a < _b) {
                    checkImg(curImg);
                    animate({
                        ele: curImg,
                        target: {
                            opacity: 1
                        },
                        duration: 800
                    })
                }
            }
        }
    }

    lazyLoad();

    function checkImg(img) {
        var tempImg = document.createElement('img');
        tempImg.src = img.getAttribute('real');
        tempImg.onload = function () {
            img.src = this.src;
        };
        img.isLoaded = true;
    }

    window.addEventListener('scroll', lazyLoad)
})();