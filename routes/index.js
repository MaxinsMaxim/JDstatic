var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index',
        {
            title: '京东',
            cityName: ['北京', '上海','天津', '重庆','广州', '深圳', '北京', '上海','北京', '上海','北京', '上海', '北京', '上海','北京', '上海','北京', '上海']
        }
    );
});

module.exports = router;
