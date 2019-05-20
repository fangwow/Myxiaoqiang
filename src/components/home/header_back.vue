<template>
    <div class="header">
        <i class='back' @click='back(path)'></i>
        <span>{{title}}</span>
    </div>
</template>

<script>
export default {
    props: ['title','path'],
    methods: {
        back(path){
            this.$router.push({
                path: path
            });
        }
    }
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
            width: 0.2rem;
            height: 0.36rem;
            font-size: 0.38rem;
            color: #fff;
            background: url(../../../static/images/fanhuixiangyb.png) no-repeat center;
            background-size: 100% 100%;
        }
        span {
            font-size: 0.34rem;
            color: #fff;
        }
    }
</style>
