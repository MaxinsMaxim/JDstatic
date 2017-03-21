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
                        src: '/images/goods_items/sk_img1.jpg',
                        title: '戴尔（DELL） U2515H 25英寸2K超高清旋转升降专业级IPS屏显示器',
                        newPrice: 2199.00,
                        oldPrice: 2499.00
                    },
                    {
                        src: '/images/goods_items/sk_img2.jpg',
                        title: '华帝（VATTI）极客系列 大吸力 自动洗 侧吸式抽油烟机灶具套装(天然气) CXW-238-i11083',
                        newPrice: 80.00,
                        oldPrice: 1110.00
                    },
                    {
                        src: '/images/goods_items/sk_img3.jpg',
                        title: '漫步者（EDIFIER）S2000V2 HIFI有源2.0音箱 蓝牙音箱 音响',
                        newPrice: 480.00,
                        oldPrice: 33980.00
                    },
                    {
                        src: '/images/goods_items/sk_img4.jpg',
                        title: '苏泊尔 (SUPOR)电饭煲电饭锅 铜旋风球釜内胆立体加热 CFXB40FC8053-75',
                        newPrice: 340.00,
                        oldPrice: 390.00
                    },
                    {
                        src: '/images/goods_items/sk_img5.jpg',
                        title: '尼康（Nikon）D750 AF-S 尼克尔 24-120mm f/4G ED VR镜头',
                        newPrice: 3480.00,
                        oldPrice: 13980.00
                    }

                ]
            }
        );
    }
});

module.exports = router;