<template>
    <div class="header">
        <i class='back mui-icon mui-icon-location'></i>
        <span>小强智配</span>
        <i class='info mui-icon mui-icon-email'>
            <span class='circle'>6</span>
        </i>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    .header {
        width: 100%;
        height: 0.88rem;
        position: fixed;
        top: 0;
        left: 0;
        line-height: 0.88rem;
        background: #58c3e0;
        text-align: center;
        position: relative;
        .back {
            position: absolute;
            top: 0.25rem;
            left: 0.3rem;
            font-size: 0.38rem;
            color: #fff;
        }
        span {
            font-size: 0.34rem;
            color: #fff;
        }
        .info {
            color: #fff;
            position: absolute;
            right: 0.3rem;
            top: 0.3rem;
            font-size: 0.28rem;
            .circle {
                display: block;
                width: 0.3rem;
                height: 0.3rem;
                line-height: 0.3rem;
                border-radius: 0.15rem;
                font-size: 0.23rem;
                color: #fff;
                position: absolute;
                top: -0.15rem;
                right: -0.15rem;
                background-color: #fb0000;
            }
        }
    }
</style>
