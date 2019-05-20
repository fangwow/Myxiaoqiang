<template>
    <div class="tabBottom">
        <div class="box">
            <i class='item'>
                <img class='item1' src="../../../static/images/hy_index.png" alt="">
            </i>
            <span>智能拼车</span>
        </div>
        <div class="box">
            <i class='item'>
                <img class='item2' src="../../../static/images/hy_fenlei.png" alt="">
                <span class='num'>9</span>
            </i>
            <span>订单</span>
        </div>
        <div class="box">
            <i class='item'>
                <img class='item3' src="../../../static/images/fahuo.png" alt="">
            </i>
            <span>发货</span>
        </div>
        <div class="box">
            <i class='item'>
                <img class='item4' src="../../../static/images/hy_mine.png" alt="">
                <span class='num'>6</span>
            </i>
            <span>消息</span>
        </div>
        <div class="box">
            <i class='item'>
                <img class='item5' src="../../../static/images/hy_wode.png" alt="">
            </i>
            <span>我的</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .tabBottom {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1.12rem;
        background: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .box {
            flex: 1;
            height: 1.12rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .item {
                flex: 1;
                display: block;
                width: 100%;
                text-align: center;
                position: relative;
                text-align: center;
                .num {
                    position: absolute;
                    top: 0.15rem;
                    right: 0.4rem;
                    display: block;
                    width: 0.3rem;
                    height: 0.3rem;
                    line-height: 0.3rem;
                    border-radius: 50%;
                    background: #fb0000;
                    font-size: 0.23rem;
                    color: #fff;
                }
                img {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);

                }
                .item1 {
                    width: 0.51rem;
                    height: 0.35rem;
                }
                .item2 {
                    width: 0.38rem;
                    height: 0.44rem;
                }
                .item3 {
                    width: 0.66rem;
                    height: 0.66rem;
                }
                .item4 {
                    width: 0.44rem;
                    height: 0.37rem;
                }
                .item5 {
                    width: 0.42rem;
                    height: 0.52rem;
                }
            }
            span {
                display: block;
                width: 100%;
                height: 0.4rem;
                text-align: center;
                font-size: 0.22rem;
                color: #666;
            }
        }
    }
</style>
