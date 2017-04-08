$.fn.extend({
    recRender: function (url) {
        var $container = this.find('.rec-list');
        $.ajax({
            url: url,
            type: 'get',
            cache: false,
            async: false,
            dataType: 'json',
            success: function (res) {
                if (res.status == 200) {
                    var data = res.imgSrc;
                    if (data && data.length) {
                        var str = '';
                        for (var i = 0; i < data.length; i++) {
                            str += '<li class="rec-item">';
                            str += '<a href="' + data[i].link + '" class="rec-lk">';
                            str += '<img class="rec-img" src="' + data[i].src + '">';
                            str += '</a>';
                            str += '</li>';
                        }
                        $container.html(str);
                    }
                }
            }
        });
    }
});

$('#rec_1').recRender('/api/rec/rec_1');
$('#rec_2').recRender('/api/rec/rec_2');