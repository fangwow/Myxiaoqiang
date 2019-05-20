<template>
    <div class="detail">
        <!-- 头部部分 -->
        <header-title :title='title' :path='path' class='title'></header-title>
        <div class="body">
            <!-- 单个体积 -->
            <div class="tiji">
                <!-- 单个体积 -->
                <div class="item">
                    <label for="">单个体积 </label>
                    <div class="tiji_form">
                        <input class='input' type="text" placeholder="长"> 
                        <span>x</span>
                        <input class='input' type="text" placeholder="宽"> 
                        <span>x</span>
                        <input class='input' type="text" placeholder="高">
                        <i>m</i>
                    </div>
                </div>
                <!-- 数量 -->
                <div class="item">
                    <label for="">数量 </label>
                    <div class="tiji_form">
                        <input class='number' type="text" placeholder="请输入数量">
                        <i>个</i>
                    </div>
                </div>
                <!-- 总体积 -->
                <div class="item">
                    <label for="">总体积 </label>
                    <div class="tiji_form">
                        <input class='number' type="text" placeholder="100">
                        <i>m <sup>3</sup></i>
                    </div>
                </div>
                <!-- 确认 -->
                <!-- <div class="item sub">
                    <button class='btn'>确认</button>
                </div> -->
            </div>
            <!-- 重量 -->
            <div class="tiji weight">
                <!-- 单个体积 -->
                <div class="item">
                    <label for="">单个重量 </label>
                    <div class="tiji_form">
                        <input class='number' type="text" placeholder="请输入重量">
                        <i>kg</i>
                    </div>
                </div>
                <!-- 数量 -->
                <div class="item">
                    <label for="">数量 </label>
                    <div class="tiji_form">
                        <input class='number' type="text" placeholder="请输入数量">
                        <i>个</i>
                    </div>
                </div>
                <!-- 总体积 -->
                <div class="item">
                    <label for="">总重量 </label>
                    <div class="tiji_form">
                        <input class='number' type="text" placeholder="100">
                        <i>t</i>
                    </div>
                </div>
                <!-- 确认 -->
                <div class="item sub">
                    <button class='btn'>确认</button>
                </div>
            </div>
            <!-- 详情 -->
            <div class="tiji weight">
                <!-- 单个体积 -->
                <div class="item_detail">
                    <span>详细</span>
                    <i>总体积: 36000000m</i>
                    <i class='last'>总重量: 3600t</i>
                </div>
                <div class="detail_tiji_weight">
                    <p>
                        <em>体积</em>
                        <strong>(1) 100 * 100 *100 *12 = 12000000</strong>
                    </p>
                    <p>
                        <em>重量</em>
                        <strong>(1) 100 * 12 = 1200</strong>
                    </p>
                </div>
                <div class="detail_tiji_weight bb">
                    <p>
                        <em>体积</em>
                        <strong>(1) 100 * 100 *100 *12 = 12000000</strong>
                    </p>
                    <p>
                        <em>重量</em>
                        <strong>(1) 100 * 12 = 1200</strong>
                    </p>
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
// 头部组件
import headerTitle from '@/components/home/header_back.vue'
export default {
    data(){
        return {
            title: '详细体积重量',
            path: '/'
        }
    },
    methods: {

    },
    components: {
        headerTitle
    }

}
</script>

<style lang='scss' scoped>
.detail {
    height: 100%;
    .title {
        position: fixed;
        top: 0;
        left: 0;
    }
    .body {
        height: 100%;
        padding-top: 0.88rem;
        overflow: auto;
        // 体积
        .tiji {
            width: 100%;
            // height: 3.6rem;
            height: 2.59rem;
            padding-left: 0.31rem;
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
                    width: 2.41rem;
                    height: 100%;
                    font-size: 0.28rem;
                    color: #333;
                }
                .tiji_form {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    input {
                        width: 1rem;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        display: block;
                        margin-bottom: 0;
                        border-radius: 0.06rem;
                        border: 0.02rem solid #cccccc;
                        font-size: 0.26rem;
                        color: #999;
                        padding: 0;
                    }
                    .input {
                        text-align: center;
                    }
                    span {
                        padding: 0 0.11rem;
                        color: #666;
                    }
                    i {
                        font-size: 0.28rem;
                        color: #333;
                        padding-left: 0.36rem;
                        padding-right: 0.4rem;
                    }
                    .number {
                        flex: 1;
                        border: 0 none;
                        padding-left: 0;
                    }
                }
            }
            // 确认
            .sub {
                height: 0.9rem;
                justify-content: flex-end;
                border-bottom: 0 none;
                .btn {
                    width: 1.1rem;
                    height: 0.5rem;
                    background-color: #75c1dd;
                    border-radius: 0.1rem;
                    font-size: 0.24rem;
                    color: #fff;
                    padding: 0;
                    margin-right: 0.3rem;
                }
            }
            // 体积重量详情
            
        }
        .weight {
            height: 3.6rem;
        }
        // 体积重量详情
        .item_detail {
            height: 0.86rem;
            line-height: 0.86rem;
            border-bottom: 0.01rem solid #ddd;
            span {
                width: 0.87rem;
                display: block;
                float: left;
                font-size: 0.28rem;
                color: #333;
            }
            i {
                display: block;
                float: left;
                font-size: 0.24rem;
                color: #666;
            }
            .last {
                display: block;
                float: left;
                margin-left: 0.6rem;
            }
        }
        .detail_tiji_weight {
            height: 1.05rem;
            border-bottom: 0.01rem solid #ddd;
            display: flex;
            flex-direction: column;
            justify-content: center;
            p {
                height: 50%;
                margin-bottom: 0;
                font-size: 0.24rem;
                color: #666;
                display: flex;
                justify-content: flex-start;
                align-items: center;
                em {
                    display: block;
                    width: 0.87rem;
                }
                strong {
                    flex: 1;
                    font-weight: normal;
                }
            }
        }
        .bb {
            border-bottom: 0 none;
        }
        .btn {
            margin: 0.24rem 0;
            text-align: center;
            button {
                width: 6.9rem;
                height: 0.86rem;
                background-color: #75c1dd;
                border-radius: 0.1rem;
                font-size: 0.36rem;
                color: #fff;
            }
        }
    }
}
</style>
