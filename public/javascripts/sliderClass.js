/**
 * Created by maxin on 2017/3/17.
 */

/**
 * 轮播图封装
 * @param container 外部容器
 * @param url 接口
 * @param interval 轮播间隔
 * @constructor
 */
function Slider(container, url, interval) {
    this.container = container;
    this.inner = this.container.getElementsByClassName('inner')[0];
    this.focusList = this.container.getElementsByClassName('focusList')[0];
    this.left = this.container.getElementsByClassName('slide-left')[0];
    this.right = this.container.getElementsByClassName('slide-right')[0];
    this.imgs = this.inner.getElementsByTagName('img');
    this.lis = this.focusList.getElementsByTagName('li');
    this.index = 0;
    this.url = url;
    this.interval = interval || 3000;
    this.data = null;

    this.init();
}
Slider.prototype.getData = function () {
    var that = this;
    var xhr = new XMLHttpRequest();
    xhr.open('get', this.url + '?_=' + Math.random(), false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            that.data = JSON.parse(xhr.responseText).imgSrc;
        }
    };
    xhr.send(null);
};
Slider.prototype.bindData = function () {
    if (this.data && this.data.length) {
        var strImg = '',
            strLis = '';
        for (var i = 0; i < this.data.length; i++) {
            strImg += '<img real="' + this.data[i].src + '">';
            strLis += i == 0 ? '<li class="cur"></li>' : '<li></li>';
        }
        this.inner.innerHTML = strImg;
        this.focusList.innerHTML = strLis;
    }
}
Slider.prototype.checkImg = function () {
    var that = this;
    for (var i = 0; i < this.imgs.length; i++) {
        var tempImg = document.createElement('img');
        tempImg.index = i;
        tempImg.src = this.imgs[i].getAttribute('real');
        tempImg.onload = function () {
            that.imgs[this.index].src = this.src;
            if (this.index == 0) {
                kirin.css(that.imgs[0], 'zIndex', 1);
                animate({
                    ele: that.imgs[0],
                    target: {
                        opacity: 1
                    },
                    duration: 200
                });
            }
        }
    }
};
Slider.prototype.autoMove = function () {
    this.index++;
    if (this.index == this.data.length) {
        this.index = 0;
    }
    this.setImgs();
};
Slider.prototype.setImgs = function () {
    for (var i = 0; i < this.imgs.length; i++) {
        if (i == this.index) {
            kirin.css(this.imgs[i], 'zIndex', 1);
            animate({
                ele: this.imgs[i],
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
            kirin.css(this.imgs[i], 'zIndex', 0);
        }
    };
    for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].className = i == this.index ? 'cur' : '';
    }
};
Slider.prototype.bindEvent = function () {
    var that = this;
    this.container.onmouseover = function () {
        window.clearInterval(that.timer);
    };
    this.container.onmouseout = function () {
        that.timer = window.setInterval(function () {
            that.autoMove();
        }, that.interval);
    }
};
Slider.prototype.bindEventForBtn = function () {
    var that = this;
    this.left.onclick = function () {
        that.index--;
        if (that.index == -1) {
            that.index = that.data.length - 1;
        }
        that.setImgs();
    };
    this.right.onclick = function () {
        that.autoMove();
    }
};
Slider.prototype.bindEventForLis = function () {
    var that = this;
    for (var i = 0; i < this.lis.length; i++) {
        this.lis[i].index = i;
        this.lis[i].onmouseover = function () {
            that.index = this.index;
            that.setImgs();
        }
    }
};
Slider.prototype.init = function () {
    var that = this;
    this.getData();
    this.bindData();
    this.checkImg();
    this.bindEvent();
    this.bindEventForBtn();
    this.bindEventForLis();
    this.timer = window.setInterval(function () {
        that.autoMove();
    }, this.interval)
}

//首页banner
var wrap = document.getElementById('slider_wrap');
var banner = new Slider(wrap, '/api/slider', 4000);

//
var box = document.getElementById('j-live');
new Slider(box, '/api/slider/live', 4000)