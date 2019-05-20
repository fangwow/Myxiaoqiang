<template>
    <div class="home">
        <!-- 头部部分 -->
        <header-title class='title'></header-title>
        <!-- 主体部分 -->
        <div class="body">
            <!-- tab切换 -->
            <div class="tab">
                <div class="tab-sub">
                    <span class='active'>整车</span>
                    <span>零担</span>
                    <span>拼车</span>
                </div>
            </div>
            <!-- 选择出发和目的地 -->
            <div class="address">
                <div>
                    <span>
                        北京 <i class='xiala'></i>
                    </span>
                    <i>到</i>
                    <span>
                        承德 <i class='xiala'></i>
                    </span>
                </div>
            </div>
            <!-- 货物信息 -->
            <div class="goodsInfo">
                <div class="goods_title">
                    <span>货物信息</span>
                    <button @click='detailTiji()'>详细体积重量</button>
                </div>
                <!-- 总体积 -->
                <div class="item-form">
                    <label for="">总体积</label>
                    <input type="text" placeholder="系统带过来">
                </div>
                <!-- 总重量 -->
                <div class="item-form bb">
                    <label for="">总重量</label>
                    <input type="text" placeholder="系统带过来">
                </div>
                <!-- 选择类型 -->
                <div class="sel">
                    <div class="item-form">
                        <label for="">货物类型</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">包装形式</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">封货时间</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">到货时间</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">收货人</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">收货人电话</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form">
                        <label for="">收货地址</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                    <div class="item-form bb">
                        <label for="">所需车辆类型</label>
                        <input type="text" placeholder="系统带过来">
                    </div>
                </div>
                <!-- 上传货物照片 -->
                <div class="img">
                    <div class="upload">
                        <div class="up_title">
                            上传货物照片
                        </div>
                        <div class="imgs">
                            <div><img src="../../../static/images/jiashizheng.png" alt=""></div>
                            <div class='mlr'><img src="../../../static/images/jiashizheng.png" alt=""></div>
                            <div><img src="../../../static/images/jiashizheng.png" alt=""></div>
                            <div><img src="../../../static/images/jiashizheng.png" alt=""></div>
                            <div class='mlr up' ><img src="../../../static/images/lansejwhk.png" alt=""><span>添加照片</span></div>
                        </div>
                    </div>
                </div>
                <!-- 备注 -->
                <div class="beizhu">
                    <div class="beizhu_title">
                        备注
                    </div>
                    <div class="content">
                        请填写备注
                    </div>
                </div>
                <!-- 按钮 -->
                <div class='btn'>
                    <button>确认</button>
                </div>
            </div>
        </div>
        <!-- tab部分 -->
        <tab-bottom></tab-bottom>
    </div>
</template>

<script>
// 头部组件
import headerTitle from '@/components/home/header.vue'
// 底部组件
import tabBottom from '@/components/home/tabBottom.vue'
export default {
    data(){
        return{

        }
    },
    components: {
        headerTitle,
        tabBottom
    },
    methods: {
        // 跳转到详细体积重量
        detailTiji(){
            this.$router.push({
                path: '/detail_tiji'
            });
        }
    }
}
</script>

<style lang='scss'>
    .home {
        height: 100%;
        .title {
            position: fixed;
            top: 0;
            left: 0;
        }
        .body {
            height: 100%;
            padding-top: 0.88rem;
            padding-bottom: 1.12rem;
            overflow: auto;
            // tab栏
            .tab {
                width: 100%;
                height: 1rem;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                .tab-sub {
                    width: 5.1rem;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    border: 0.01rem solid #dddddd;
                    border-radius: 0.29rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    span {
                        display: block;
                        flex: 1;
                        height: 100%;
                        font-size: 0.32rem;
                        text-align: center;
                        border-radius: 0.29rem;
                    }
                    .active {
                        background: #58c3e0;
                        color: #fff;
                    }
                }
            }
            //地址
            .address {
                height: 1.04rem;
                display: flex;
                justify-content: center;
                align-items: center;
                div {
                    width: 6.10rem;
                    height: 0.44rem;
                    display: flex;
                    justify-content: space-between;
                    span {
                        display: block;
                        width: 2.61rem;
                        height: 0.44rem;
                        line-height: 0.44rem;
                        border-radius: 0.22rem;
                        border: 0.02rem solid#58c3e0;
                        font-size: 0.26rem;
                        color: #58c3e0;
                        padding-left: 0.41rem;
                        position: relative;
                        .xiala {
                            display: block;
                            position: absolute;
                            top: 0.14rem;
                            right: 0.4rem;
                            width: 0.18rem;
                            height: 0.16rem;
                            background: url(../../../static/images/xiala.png) no-repeat center;
                            background-size: 100% 100%;
                        }
                    }
                    i {
                        width: 0.44rem;
                        height: 0.44rem;
                        border-radius: 50%;
                        font-size: 0.26rem;
                        color: #fff;
                        text-align: center;
                        line-height: 0.44rem;
                        background-color: #58c3e0;
                        box-shadow: 0px 0px 4px 0px 
                            rgba(88, 195, 224, 0.63);
                    }
                }
            }
            // 货物信息
            .goodsInfo {
                background: #fff;
                height: 2.62rem;
                .goods_title {
                    border-bottom: 0.01rem solid #dddddd;
                    height: 0.88rem;
                    padding-left: 0.31rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.3rem;
                    color: #58c3e0;
                    button {
                        margin-right: 0.3rem;
                        width: 1.7rem;
                        height: 0.5rem;
                        text-align: center;
                        border-radius: 0.1rem;
                        background: #58c3e0;
                        border: 0 none;
                        font-size: 0.24rem;
                        color: #fff;
                        padding: 0;
                    }
                }
                // 总体积
                .item-form {
                    height: 0.86rem;
                    border-bottom: 0.01rem solid #dddddd;
                    display: flex;
                    align-items: center;
                    padding-bottom: 0.01rem;
                    label {
                        width: 2.12rem;
                        display: block;
                        float: left;
                        padding-left: 0.31rem;
                        font-size: 0.28rem;
                        color: #333;
                    }
                    input {
                        display: block;
                        flex: 1;
                        height: 99%;
                        margin-bottom: 0;
                        border: 0 none;
                        outline: 0 none;
                        font-size: 0.28rem;
                        color: #999;
                    }
                }
                .sel {
                    background: #fff;
                    margin-top: 0.1rem;
                }
            }
            // 上传货物照片
            .img {
                background: #fff;
                .upload {
                    .up_title {
                        height: 0.76rem;
                        padding-left: 0.31rem;
                        padding-top: 0.1rem;
                        line-height: 0.66rem;
                        font-size: 0.28rem;
                        color: #333;
                    }
                    .imgs {
                        padding: 0 0.3rem;
                        overflow: hidden;
                        div {
                            width: 2.1rem;
                            height: 2.1rem;
                            float: left;
                            margin-bottom: 0.19rem;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .mlr {
                            margin: 0 0.3rem;
                        }
                        .up {
                            border: 0.03rem dashed #58c3e0;
                            text-align: center;
                            img {
                                width: 0.79rem;
                                height: 0.79rem;  
                                margin: 0.37rem auto 0;
                            }
                            span {
                                display: block;
                                font-size: 0.32rem;
                                color: #58c3e0;
                            }
                        }
                    }
                }
            }
            // 备注
            .beizhu {
                background: #fff;
                padding-bottom: 0.3rem;
                .beizhu_title {
                    height: 0.76rem;
                    line-height: 0.76rem;
                    padding-left: 0.3rem;
                    font-size: 0.28rem;
                    color: #333;
                }
                .content {
                    width: 6.9rem;
                    height: 2rem;
                    margin: 0 auto;
                    border-radius: 0.06rem;
                    border: 0.01rem solid#cccccc;
                    padding: 0.3rem 0 0 .031rem;
                    font-size: 0.28rem;
                    color: #999;
                }
            }
            .btn {
                text-align: center;
                margin-top: 0.3rem;
                margin-bottom: 1.35rem;
                button {
                    width: 6.9rem;
                    height: 0.86rem;
                    background-color: #58c3e0;
                    border-radius: 0.1rem;
                    font-size: 0.36rem;
                    color: #fff;
                }
            }
        }
        // 底部tab
        // .tab_bottom {
        //     position: fixed;
        //     bottom: 0;
        //     left: 0;
        // }
    }
    .home .body .goodsInfo .bb {
        border-bottom: 0 none;
    }
</style>
