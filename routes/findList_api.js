var express = require('express');
var router = express.Router();

//发现好货
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
                ]
            }
        );
    }
});

//品牌头条
router.get('/brandList', function (req, res) {
    res.json({
        status: 200,
        message: 'ok',
        brandInfo: [
            {
                link: 'javascript:void: 0;',
                name: '富安娜',
                desc: '领券满599减150',
                src: '/images/goods_items/brand_img1.webp'
            },
            {
                link: 'javascript:void: 0;',
                name: 'ZEOL专业级显示器',
                desc: '领券满500减300',
                src: '/images/goods_items/brand_img2.webp'
            }
        ],
        brandBottom: {
            link: 'javascript:void: 0;',
            src: '/images/goods_items/brand_bottom.jpg'
        }
    })
})

//排行榜
router.get('/topList', function (req, res) {
    res.json({
        status: 200,
        message: 'ok',
        topList: [
            {
                tabName: '手机通讯',
                headLink: 'javascript:void 0;',
                imgItem: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img1.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img2.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img3.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img4.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img5.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img6.webp',
                        title: 'Apple iPhone 7 Plus (A1661) 128G 亮黑色 移动联通电信4G手机'
                    }
                ]
            },
            {
                tabName: '休闲鞋',
                headLink: 'javascript:void 0;',
                imgItem: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img7.webp',
                        title: '2016春季新款小白鞋女真皮韩版系带圆头厚底松糕鞋休闲鞋深口女单鞋 白黑 38'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img8.webp',
                        title: '热风女鞋春季新款小白鞋女低帮鞋系带时尚女士休闲鞋H14W7110此鞋正码 04白色（H14W7110） 37正码'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img9.webp',
                        title: '步奢(BUSHE)休闲鞋女韩版2017春夏款运动鞋女阿甘鞋学生板鞋百搭跑步鞋 粉红 36'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img10.webp',
                        title: '睡米2017春夏皮女鞋内增高厚底休闲鞋松糕鞋韩版百搭高帮鞋A980-1 A白色 37厚底3cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img11.webp',
                        title: '【直降1300】德国品牌FRLOZS法洛姿 新品定制休闲鞋 黑色 39'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img12.webp',
                        title: '【抢大牌 直降1200】i30春季新品 时尚潮牌 专柜正品 大牌工艺 时尚内增高休闲单鞋女 白色 37'
                    }
                ]
            },
            {
                tabName: '婴儿外出服',
                headLink: 'javascript:void 0;',
                imgItem: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img13.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img14.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img15.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img16.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img17.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img18.webp',
                        title: '【8款可选】南极人儿童卫衣套装宝宝连帽春秋卫衣卡通男童女童春季新款衣服 牛仔小猴-大红 100CM'
                    }
                ]
            },
            {
                tabName: '婴儿鞋帽袜',
                headLink: 'javascript:void 0;',
                imgItem: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img19.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img20.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img21.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img22.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img23.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img24.webp',
                        title: '卡特兔婴儿鞋 秋季深蓝（拍下5天后发货） 内长14cm'
                    }
                ]
            },
            {
                tabName: '厨房DIY',
                headLink: 'javascript:void 0;',
                imgItem: [
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img25.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img26.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img27.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img28.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img29.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    },
                    {
                        link: 'javascript:void 0;',
                        src: '/images/goods_items/top_list_img30.webp',
                        title: '【京东超市】美厨（maxcook）不锈钢厨具套装 炒铲汤勺漏勺瓜刨五件套 MCCU207'
                    }
                ]
            }
        ]
    })
})

module.exports = router;