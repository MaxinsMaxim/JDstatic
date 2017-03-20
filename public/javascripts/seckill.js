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