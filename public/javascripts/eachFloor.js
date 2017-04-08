//享品质
;(function () {
    var lifeList = $('#life').find('.life-list')[0];
    var data = null;
    $.ajax({
        url: '/api/eachFloor/life',
        type: 'get',
        cache: false,
        async: false,
        dataType: 'json',
        success: function (res) {
            if (res.status == 200) {
                data = res.lifeInfo;
            }
        }
    });

    if (data && data.length) {
        var frg = document.createDocumentFragment();
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement('li');
            li.className = 'life-item life-item-' + (i + 1);
            var a = document.createElement('a');
            a.href = data[i].link;
            a.className = 'life-lk';
            var bg = document.createElement('div');
            bg.className = 'life-bg';
            var img = document.createElement('img');
            img.className = 'life-img';
            img.setAttribute('real', data[i].src);
            var info = document.createElement('div');
            info.className = 'life-info';
            var h4 = document.createElement('h4');
            h4.className = 'tit';
            h4.innerHTML = data[i].tit;
            var p = document.createElement('p');
            p.className = 'desc';
            p.innerHTML = data[i].desc;
            info.appendChild(h4);
            info.appendChild(p);
            bg.appendChild(info);
            a.appendChild(bg);
            a.appendChild(img);
            li.appendChild(a);
            frg.appendChild(li);
        }
        lifeList.appendChild(frg);
        frg = null;
    }
    ;
    maxin.lazyLoad({container: lifeList});
    window.addEventListener('scroll', maxin.lazyLoad.bind(null, {container: lifeList}));
})();

//左右两栏布局
$.extend({
    portalRender: function (container, url, several) {
        several = several || 6;
        var data = null;
        $.ajax({
            url: url,
            type: 'get',
            cache: false,
            async: false,
            dataType: 'json',
            success: function (res) {
                if (res.status == 200) {
                    data = res;
                    var gettpl = document.getElementById('modRender').innerHTML;
                    laytpl(gettpl).render(data, function (html) {
                        container.innerHTML = html;
                    });
                }
            }
        });
        maxin.lazyLoad({container: container});
        window.addEventListener('scroll', maxin.lazyLoad.bind(null, {container: container}));

        var count = data.col[0].bdInfo.logo.length;
        var contains = [];
        for (var i = 1; i <= several; i++) {
            var curEle = $(container).find('.item-col-' + i);
            contains.push(curEle);
        }

        contains.forEach(function (item, index) {
            item = item.find('.logo-list')
            var $left = contains[index].find('.logo-left');
            var $right = contains[index].find('.logo-right');
            item.css({
                width: count * 95 + 'px'
            });
            item.step = 0;

            $right.on('click', function () {
                item.step++;
                if (item.step == count / several) {
                    item.step = 0;
                }
                item.css({
                    transform: 'translateX(' + -item.step * several * 95 + 'px' + ')',
                    transitionProperty: 'transform',
                    transitionDuration: '0.6s'
                });
            });
            $left.on('click', function () {
                item.step--;
                if (item.step == -1) {
                    item.step = 1;
                }
                item.css({
                    transform: 'translateX(' + -item.step * several * 95 + 'px' + ')',
                    transitionProperty: 'transform',
                    transitionDuration: '0.6s'
                });
            });
        })
    }
});

//爱生活
var loveLife = document.getElementById('cloth_view');
$.portalRender(loveLife, '/api/eachFloor/cloth');

var pcView = document.getElementById('pc_view');
$.portalRender(pcView, '/api/eachFloor/pc');