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
                itemList: [
                    {
                        link: 'javascript:void 0;',
                        tit: '小米 积木机器人',
                        src: '/images/goods_items/find_img1.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '相宜本草防晒露',
                        src: '/images/goods_items/find_img2.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: 'Reveur无硅油洗发水',
                        src: '/images/goods_items/find_img3.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '华硕 游戏笔记本',
                        src: '/images/goods_items/find_img4.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '百雀羚 保湿化妆品套装',
                        src: '/images/goods_items/find_img5.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '菲洛施儿童洗手液',
                        src: '/images/goods_items/find_img6.webp'
                    }
                ],
                brandInfo: [
                    {
                        name: '',
                        desc: '',
                        src: ''
                    }
                ]
            }
        );
    }
});

module.exports = router;