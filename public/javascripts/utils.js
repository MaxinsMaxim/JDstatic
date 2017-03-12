/**
 * Created by maxin on 2017/2/26.
 */

var kirin = (function () {
    /**
     * 类数组转换为数组
     * @param likeAry 类数组
     * @returns {Array} 数组
     */
    function listToArray(likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry);

        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    }

    /*  JSON字符串转换为为JSON对象
     *   @params: JSON字符串
     *   @return: JSON对象
     * */
    function jsonParse(jsonStr) {
        return window.JSON ? JSON.parse(jsonStr) : eval('(' + jsonStr + ')');
    }

    /**
     * 获取或者设置浏览器盒子模型的属性值
     * @param attr 属性
     * @param value 值
     * @returns 只传属性就是获取值，都传就是设置
     */
    function win(attr, value) {
        if (typeof value === 'undefined') {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    /**
     * 求元素相对于body的偏移量
     * @param ele 元素
     * @returns {{left: 左偏移, top: 上偏移}}
     */
    function offset(ele) {
        var l = null;
        var t = null;
        l += ele.offsetLeft;
        t += ele.offsetTop;
        var par = ele.offsetParent;
        while (par) {
            if (navigator.userAgent.indexOf('MSIE 8.0') === -1) {
                l += par.clientLeft;
                t += par.clientTop;
            }
            l += par.offsetLeft;
            t += par.offsetTop;
            par = par.offsetParent;
        }
        return {left: l, top: t};
    }

    /**
     * 获取元素已经生成的样式值，兼容IE
     * @param ele 元素
     * @param attr 想要获取样式的属性
     * @returns {Number} 样式值
     */
    function getCss(ele, attr) {
        var val = null;
        if (window.getComputedStyle) {
            val = window.getComputedStyle(ele)[attr];
        } else { // ie
            if (attr == 'opacity') {
                val = ele.currentStyle.filter; // alpha(opacity=55.5)
                var reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = ele.currentStyle[attr];
            }
        }
        var reg = /^-?\d+(\.\d+)?(px)?$/;
        return reg.test(val) ? parseFloat(val) : val;
    }

    /**
     * 设置盒子模型的css样式
     * @param ele 元素
     * @param attr 元素样式属性名
     * @param value 设置的值
     */
    function setCss(ele, attr, value) {
        if (attr == 'opacity') {
            ele.style.opacity = value;
            ele.style.filter = 'alpha(opacity=' + value * 100 + ')';
            return;
        }
        if (attr == 'float') {
            ele.style.cssFloat = value;
            ele.style.styleFloat = value;   //ielow
            return;
        }
        var reg = /width|height|top|left|right|bottom|(margin|padding)(Left|Right|Top|Bottom)?/;
        if (reg.test(attr)) {
            if (!isNaN(value)) {
                value += 'px';
            }
        }
        ele.style[attr] = value;
    }


    /**
     * 根据类名获取元素(兼容ielow)
     * @param className 类名
     * @param context 确定查询范围,不传是document
     * @returns {*} 返回符合的元素集合
     */
    function getElesByClass(className, context) {
        context = context || document;
        if (context.getElementsByClassName) {
            return listToArray(context.getElementsByClassName(className));
        }
        // for ielow
        var classNameAry = className.replace(/(^ +| +$)/g, '').split(/ +/);
        var tags = context.getElementsByTagName('*');
        var ary = [];
        for (var i = 0; i < tags.length; i++) {
            var curTag = tags[i];
            var isGoodTag = true;
            for (var j = 0; j < classNameAry.length; j++) {
                var curClass = classNameAry[j];
                var reg = new RegExp('(^| +)' + curClass + '( +|$)');
                if (!reg.test(curTag.className)) {
                    isGoodTag = false;
                    break;
                }
            }
            isGoodTag && ary.push(curTag);
        }
        return ary;
    }

    /**
     * 批量设置元素样式
     * @param ele 元素
     * @param group {width: 100px, float: left}
     */
    function setGroupCss(ele, group) {
        if (Object.prototype.toString.call(group) == '[object Object]') {
            for (var key in group) {
                setCss(ele, key, group[key]);
            }
        }
    }

    /**
     * 把getCss、setCss、setGroupCss集成为一个方法
     * @param ele 元素名
     * @returns {Number} 如果是获取样式,就返回样式值
     */
    function css(ele) {
        var secondParam = arguments[1];
        var thirdParam = arguments[2];
        if (typeof secondParam == 'String') {
            if (typeof thirdParam == 'undefined') {
                return getCss(ele, secondParam);
            }
            setCss(ele, secondParam, thirdParam);
        }
        secondParam = secondParam || [];
        if (secondParam.toString() == '[object Object]') {
            setGroupCss(ele, secondParam);
        }
    }

    /**
     * 获取n到m间的随机整数
     * @param n
     * @param m
     * @returns {number}
     */
    function getRandom(n, m) {
        if (isNaN(n) || isNaN(m)) {
            return Math.random();
        }
        return Math.round(Math.random() * (m - n) + n);
    }

    /**
     * 判断元素是否有一个类名
     * @param ele
     * @param className
     * @returns {boolean}
     */
    function hasClass(ele, className) {
        return new RegExp('(^| +)' + className + '( +|$)').test(ele.className);
    }

    function addClass(ele, className) {
        var classAry = className.replace(/(^ +| +$)/g, '').split('/ +/');
    }

    return {
        listToArray: listToArray,
        jsonParse: jsonParse,
        win: win,
        offset: offset,
        getCss: getCss,
        setCss: setCss,
        getElesByClass: getElesByClass,
        css: css,
        getRandom: getRandom,
        hasClass: hasClass
    }
})();