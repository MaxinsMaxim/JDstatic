var wrap = document.getElementById('slider_wrap');
var inner = wrap.getElementsByClassName('inner')[0];
var focusList = wrap.getElementsByClassName('focusList')[0];
var left = wrap.getElementsByClassName('slide-left')[0];
var right = wrap.getElementsByClassName('slide-right')[0];
var imgs = inner.getElementsByTagName('img');
var lis = focusList.getElementsByTagName('li');

//getData
var data = null;
;(function () {
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/api/slider?_=' + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            data = JSON.parse(xhr.responseText).imgSrc;
        }
    };
    xhr.send(null);
})();

//bindData
;(function () {
    if (data && data.length) {
        var strImg = '',
            strLis = '';
        for (var i = 0; i < data.length; i++) {
            strImg += '<img real="' + data[i].src + '">';
            strLis += i == 0 ? '<li class="cur"></li>' : '<li></li>';
        }
        inner.innerHTML = strImg;
        focusList.innerHTML = strLis;
    }
})();

//checkImg
;(function () {
    for (var i = 0; i < imgs.length; i++) {
        var tempImg = document.createElement('img');
        tempImg.index = i;
        tempImg.src = imgs[i].getAttribute('real');
        tempImg.onload = function () {
            imgs[this.index].src = this.src;
            if (this.index == 0) {
                kirin.css(imgs[0], 'zIndex', 1);
                animate({
                    ele: imgs[0],
                    target: {
                        opacity: 1
                    },
                    duration: 800
                });
            }
        }
    }
})();

//autoMove
var index = 0;
function autoMove() {
    index++;
    if (index == data.length) {
        index = 0;
    }
    setImgs();
}

//setImgs
function setImgs() {
    for (var i = 0; i < imgs.length; i++) {
        if (i == index) {
            kirin.css(imgs[i], 'zIndex', 1);
            animate({
                ele: imgs[i],
                target: {
                    opacity: 1
                },
                duration: 200,
                callback: function () {
                    var otherImgs = kirin.siblings(this);
                    for (var i = 0; i < otherImgs.length; i++) {
                        kirin.css(otherImgs[i], 'opacity', 0);
                    }
                }
            });
        } else {
            kirin.css(imgs[i], 'zIndex', 0);
        }
    };
    for (var i = 0; i < lis.length; i++) {
        lis[i].className = i == index ? 'cur' : '';
    }
}
var timer = window.setInterval(autoMove, 3000)

//bindEvent
wrap.onmouseover = function () {
    window.clearInterval(window.timer);
};
wrap.onmouseout = function () {
    timer = window.setInterval(autoMove, 3000);
}

//bindEventForBtn
left.onclick = function () {
    index--;
    if (index == -1) {
        index = data.length - 1;
    }
    setImgs();
};
right.onclick = autoMove;

//bindeEventForLis
;(function () {
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            index = this.index;
            setImgs();
        }
    }
})();