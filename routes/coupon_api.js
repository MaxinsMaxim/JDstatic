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
                message: "ok",
                couponInfo: [
                    {
                        link: 'javascript:void 0;',
                        price: '1000',
                        desc: '仅可购买格力品牌部分自营商品',
                        limit: '消费满8000元可用',
                        more: '更多好券',
                        src: '/images/goods_items/coupon_item_img1.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        price: '2000',
                        desc: '仅可购买自营奢侈品指定商品',
                        limit: '消费满6000元可用',
                        more: '更多服饰箱包券',
                        src: '/images/goods_items/coupon_item_img2.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        price: '1200',
                        desc: '仅可购买全球购商品',
                        limit: '消费满1499元可用',
                        more: '更多个护母婴券',
                        src: '/images/goods_items/coupon_item_img3.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        price: '390',
                        desc: '仅可购买自营董酒部分商品',
                        limit: '消费满999元可用',
                        more: '更多食品饮料券',
                        src: '/images/goods_items/coupon_item_img4.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        price: '1000',
                        desc: '仅可购买格力品牌部分自营商品',
                        limit: '消费满8000元可用',
                        more: '更多数码家电券',
                        src: '/images/goods_items/coupon_item_img5.webp'
                    }
                ]
            }
        );
    }
});

module.exports = router;