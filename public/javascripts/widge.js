var maxin = (function () {
    /**
     * 检测数据类型
     * @param target
     * @returns {Buffer|string|ArrayBuffer|*|Blob|Array.<T>}
     */
    function testType(target) {
        return Object.prototype.toString.call(target).slice(8, -1);
    }

    /**
     * 图片延迟加载
     * @param container 包裹图片的容器
     * @param imgAttr 图片暂时放真实链接的自定义属性
     * @param delayTime 渐显时间
     */
    function lazyLoad(opts) {
        var container = opts.container;
        var imgAttr = opts['imgAttr'] || 'real';
        var delayTime = opts['delayTime'] || 800;
        var imgs = container.getElementsByTagName('img');

        for (var i = 0; i < imgs.length; i++) {
            var curImg = imgs[i];
            if (!curImg.isLoaded) {
                var _a = kirin.offset(curImg).top + curImg.offsetHeight;
                var _b = kirin.win('clientHeight') + kirin.win('scrollTop');
                if (_a < _b) {
                    var tempImg = document.createElement('img');
                    tempImg.idx = i;
                    tempImg.src = curImg.getAttribute(imgAttr);
                    tempImg.onload = function () {
                        imgs[this.idx].src = this.src;
                    };
                    curImg.isLoaded = true;
                    animate({
                        ele: curImg,
                        target: {
                            opacity: 1
                        },
                        duration: delayTime
                    })
                }
            }
        }
    }

    return {
        lazyLoad: lazyLoad
    }
})();