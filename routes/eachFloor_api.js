var express = require('express');
var router = express.Router();

//享品质
router.get('/life', function (req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "这是一个JSONP接口", data: []});
    } else {
        res.json(
            {
                status: 200,
                message: "这是一个JSON接口",
                lifeInfo: [
                    {
                        link: 'javascript:void 0;',
                        tit: '新品首发',
                        desc: 'iPhone 7红色特别版首发',
                        src: '/images/goods_items/life_item_img1.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '会逛',
                        desc: '天梭手表 ¥959秒',
                        src: '/images/goods_items/life_item_img2.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '京东超市',
                        desc: '天天打折 款款实惠“尽情购”',
                        src: '/images/goods_items/life_item_img3.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '白条商城',
                        desc: '最高12期免息',
                        src: '/images/goods_items/life_item_img4.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '奢侈大牌',
                        desc: '尽享品质生活 满1000减100',
                        src: '/images/goods_items/life_item_img5.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '智能生活',
                        desc: '引领智能新风尚',
                        src: '/images/goods_items/life_item_img6.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '全球尖货',
                        desc: '全球自营好货',
                        src: '/images/goods_items/life_item_img7.webp'
                    },
                    {
                        link: 'javascript:void 0;',
                        tit: '设计师推荐',
                        desc: '体验全球好设计',
                        src: '/images/goods_items/life_item_img8.webp'
                    }

                ]
            }
        );
    }
});

//服饰美妆
router.get('/cloth', function (req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "这是一个JSONP接口", data: []});
    } else {
        res.json(
            {
                status: 200,
                message: "ok",
                col: [
                    {
                        saleType: 'clothes',
                        headInfo: {
                            title: '爱逛',
                            qrcodeSrc: '/images/floor_items/cloth_qr.png',
                            tagsInfo: [
                                {
                                    link: 'javascript:;',
                                    tagTxt: '美邦店庆'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '手包'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '钟表展'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '珠宝'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '奢品'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '环球时尚'
                                }
                            ]
                        },
                        bdInfo: {
                            cover: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_cover.jpg'
                                }
                            ],
                            zone: [
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/cloth_zone1.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '女装新尚人',
                                    promp: '爆款直降',
                                    src: '/images/floor_items/cloth_zone2.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '自营品牌日',
                                    promp: '三免一',
                                    src: '/images/floor_items/cloth_zone3.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '箱包出游季',
                                    promp: '高达399减120',
                                    src: '/images/floor_items/cloth_zone4.webp'
                                }
                            ],
                            more: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_more1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_more2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_more3.jpg'
                                }
                            ],
                            logo: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_3.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_4.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_5.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_6.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_7.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_8.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_9.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_10.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_11.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_12.jpg'
                                }
                            ]
                        }
                    },
                    {
                        saleType: 'beauty',
                        headInfo: {
                            title: '爱美丽',
                            qrcodeSrc: '/images/floor_items/beauty_qr.png',
                            tagsInfo: [
                                {
                                    link: 'javascript:;',
                                    tagTxt: '套装'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '乳液面霜'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '面膜'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '底妆'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '女性护理'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '9.9元'
                                }
                            ]
                        },
                        bdInfo: {
                            cover: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_cover.jpg'
                                }
                            ],
                            zone: [
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/beauty_zone1.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/beauty_zone2.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/beauty_zone3.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/beauty_zone4.webp'
                                }
                            ],
                            more: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_more1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_more2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_more3.jpg'
                                }
                            ],
                            logo: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_3.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_4.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_5.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_6.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_7.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_8.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_9.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_10.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_11.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_12.jpg'
                                }
                            ]
                        }
                    }
                ]
            }
        );
    }
});

//家电手机
router.get('/pc', function (req, res) {
    if (req.query && req.query.callback) {
        //console.log(params.query.callback);
        res.jsonp({status: 200, message: "这是一个JSONP接口", data: []});
    } else {
        res.json(
            {
                status: 200,
                message: "ok",
                col: [
                    {
                        saleType: 'computer',
                        headInfo: {
                            title: '家电馆',
                            qrcodeSrc: '/images/floor_items/pc_qr.png',
                            tagsInfo: [
                                {
                                    link: 'javascript:;',
                                    tagTxt: '电视1分钱'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '10万京豆'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '满减不封顶'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '平板电视'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '巅峰24小时'
                                }
                            ]
                        },
                        bdInfo: {
                            cover: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_cover.jpg'
                                }
                            ],
                            zone: [
                                {
                                    link: 'javascript:;',
                                    tit: '格调男装',
                                    promp: '3件7折',
                                    src: '/images/floor_items/pc_zone1.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '女装新尚人',
                                    promp: '爆款直降',
                                    src: '/images/floor_items/pc_zone2.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '自营品牌日',
                                    promp: '三免一',
                                    src: '/images/floor_items/pc_zone3.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '箱包出游季',
                                    promp: '高达399减120',
                                    src: '/images/floor_items/pc_zone4.webp'
                                }
                            ],
                            more: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_more1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_more2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_more3.jpg'
                                }
                            ],
                            logo: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_3.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_4.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_5.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_6.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_7.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_8.png'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_9.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_10.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_11.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/pc_logo_12.jpg'
                                }
                            ]
                        }
                    },
                    {
                        saleType: 'phone',
                        headInfo: {
                            title: '搞机派',
                            qrcodeSrc: '/images/floor_items/phone_qr.png',
                            tagsInfo: [
                                {
                                    link: 'javascript:;',
                                    tagTxt: '金属机身'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '快速充电'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '拍照神器'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '后置双摄像'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '双卡双待'
                                },
                                {
                                    link: 'javascript:;',
                                    tagTxt: '全网通'
                                }
                            ]
                        },
                        bdInfo: {
                            cover: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/phone_cover.jpg'
                                }
                            ],
                            zone: [
                                {
                                    link: 'javascript:;',
                                    tit: '新Phone尚',
                                    promp: '美图T8  新品抢购',
                                    src: '/images/floor_items/phone_zone1.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '24小时榜',
                                    promp: '美图T8  新品抢购',
                                    src: '/images/floor_items/phone_zone2.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '京东网厅',
                                    promp: '每天1元享800M',
                                    src: '/images/floor_items/phone_zone3.webp'
                                },
                                {
                                    link: 'javascript:;',
                                    tit: '京选卖家',
                                    promp: '领券最高 减200',
                                    src: '/images/floor_items/phone_zone4.webp'
                                }
                            ],
                            more: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/phone_more1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/phone_more2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/phone_more3.jpg'
                                }
                            ],
                            logo: [
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_1.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_2.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_3.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_4.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_5.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/beauty_logo_6.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_7.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_8.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_9.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_10.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_11.jpg'
                                },
                                {
                                    link: 'javascript:;',
                                    src: '/images/floor_items/cloth_logo_12.jpg'
                                }
                            ]
                        }
                    }
                ]
            }
        );
    }
});
module.exports = router;