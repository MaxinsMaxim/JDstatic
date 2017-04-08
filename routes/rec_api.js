var express = require('express');
var router = express.Router();

router.get('/rec_1', function (req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "这是一个JSONP接口", data: []});
    } else {
        res.json(
            {
                status: 200,
                message: "这是一个JSON接口",
                imgSrc: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec1_img1.jpg'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec1_img2.jpg'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec1_img3.jpg'
                    }
                ]
            }
        );
    }
});

router.get('/rec_2', function (req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "这是一个JSONP接口", data: []});
    } else {
        res.json(
            {
                status: 200,
                message: "这是一个JSON接口",
                imgSrc: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec2_img1.jpg'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec2_img2.jpg'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/rec2_img3.jpg'
                    }
                ]
            }
        );
    }
});

module.exports = router;