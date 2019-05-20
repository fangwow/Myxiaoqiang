<template>
    <div class="renzheng">
        <!-- 头部标题 -->
        <header-title :title='title'></header-title>
        <!-- 个人信息 -->
        <div class="person">
            <div class="form">
                <div class="item">
                    <label for="">姓名</label>
                    <input type="text" placeholder="请输入您的姓名">
                </div>
                <div class="item bb">
                    <label for="">身份证号码</label>
                    <input type="text" placeholder="请输入您的身份证号码">
                </div>
            </div>
            <!-- 上传信息图片 -->
            <div class="imgs">
                <!-- 上传身份证 -->
                <div class="shenfenId">
                    <div class="ID_title">
                        上传身份证
                    </div>
                    <div class="pi">
                        <div class="pic">
                            <img src="../../../static/images/jiahao.png" alt="">
                            <span>正面照片</span>
                        </div>
                        <div class="pic">
                            <img src="../../../static/images/jiahao.png" alt="">
                            <span>背面照片</span>
                        </div>
                    </div>
                </div>
                <!-- 上传手持身份证 -->
                <div class="shenfenId">
                    <div class="ID_title">
                        上传身份证
                    </div>
                    <div class="pi">
                        <div class="pic">
                            <img src="../../../static/images/jiahao.png" alt="">
                            <span>正面照片</span>
                        </div>
                        <div class="pic">
                            <img class='picSize' src="../../../static/images/xyuivg.png" alt="">
                        </div>
                    </div>
                </div>
                <!-- 上传营业执照 -->
                <div class="shenfenId">
                    <div class="ID_title">
                        上传身份证
                    </div>
                    <div class="pi">
                        <div class="pic">
                            <img src="../../../static/images/jiahao.png" alt="">
                            <span>正面照片</span>
                        </div>
                        <div class="pic">
                            <img class='picSize' src="../../../static/images/xyuivg.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="btn">
                <button>提交</button>
            </div>
        </div>
    </div>
</template>

<script>
import headerTitle from '@/components/home/header_back.vue'
export default {
    data(){
        return {
            title: '实名认证'
        }
    },
    components: {
        headerTitle
    }
}
</script>

<style lang='scss' scoped>
    .renzheng {
        height: 100%;
        // 头部标题
        .title {
            position: fixed;
            top: 0;
            left: 0;
        }
        // 个人信息
        .person {
            height: 100%;
            overflow: auto;
            .form {
                padding-left: 0.3rem;
                background: #fff;
                margin-bottom: 0.1rem;
                .item {
                    height: 0.86rem;
                    line-height: 0.86rem;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-bottom: 0.01rem solid #ddd;
                    label {
                        display: block;
                        width: 1.86rem;
                        font-size: 0.28rem;
                        color: #333;
                    }
                    input {
                        display: block;
                        height: 98%;
                        margin-bottom: 0;
                        border: 0 none;
                        outline: 0 none;
                        font-size: 0.28rem;
                        color: #999;
                    }
                }
                .bb {
                    border-bottom: 0 none;
                }
            }
            .imgs {
                padding-left: 0.3rem;
                padding-right: 0.3rem;
                padding-bottom: 0.2rem;
                background: #fff;
                .shenfenId {     
                    padding-bottom: 0.1rem;
                    .ID_title {  
                        font-size: 0.28rem;
                        color: #333;
                    }
                    .pi {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .pic {
                            height: 2.1rem;
                            width: 3.3rem;
                            text-align: center;
                            border: 0.02rem dashed #ccc;
                            img {
                                width: 0.76rem;
                                height: 0.76rem;
                                margin: 0.43rem auto 0.24rem;
                            }
                            span {
                                font-size: 0.26rem;
                                color: #666;
                                display: block;
                            }
                            .picSize {
                                width: 100%;
                                height: 100%;
                                margin: 0;
                            }
                        }
                    }
                }
            }
            .btn {
                text-align: center;
                margin: 0.3rem 0;
                button {
                    width: 6.9rem;
                    height: 0.86rem;
                    background-color: #58c3e0;
                    border-radius: 0.1rem;
                    font-size: 0.36rem;
                    letter-spacing: 0.04rem;
                    color: #ffffff;
                }
            }
        }
    }
</style>
