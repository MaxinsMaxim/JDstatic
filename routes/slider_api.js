var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
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
                        src: '/images/slider/img1.jpg'
                    },
                    {
                        src: '/images/slider/img2.jpg'
                    },
                    {
                        src: '/images/slider/img3.jpg'
                    },
                    {
                        src: '/images/slider/img4.jpg'
                    },
                    {
                        src: '/images/slider/img5.jpg'
                    },
                    {
                        src: '/images/slider/img6.jpg'
                    },
                    {
                        src: '/images/slider/img7.jpg'
                    }
                ],
                liveImg: [
                    {
                        src: '/images/slider/live_1.png'
                    },
                    {
                        src: '/images/slider/live_2.png'
                    },
                    {
                        src: '/images/slider/live_3.png'
                    },
                    {
                        src: '/images/slider/live_4.png'
                    }
                ]
            }
        );
    }
});

router.get('/live',function (req, res) {
    res.json(
        {
            status: 200,
            message: "这是一个JSON接口",
            imgSrc: [
                {
                    src: '/images/slider/live_2.png'
                },
                {
                    src: '/images/slider/live_4.png'
                },
                {
                    src: '/images/slider/live_5.png'
                },
                {
                    src: '/images/slider/live_3.png'
                },
                {
                    src: '/images/slider/live_1.png'
                }
            ]
        }
    );
})

module.exports = router;