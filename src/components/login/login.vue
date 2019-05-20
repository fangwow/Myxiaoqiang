<template>
    <div class="login">
        <div class="logo"></div>
        <div class="passwords">
            <div class="list">
                <i class="list-i list-i1"></i>
                <div class="list-div">
                    <input @blur='testPhone($event)' :value='phone' placeholder="请输入手机号" type="text">
                </div>
            </div>
            <div class="list">
                <i class="list-i list-i2"></i>
                <div class="list-div">
                    <input @blur='testPassword($event)' :value='password' placeholder="请输入密码" type="password">
                </div>
            </div>
            <div class="vuce">
                <span @click='login()'>登录</span>
            </div>
            <div class="wangjimima">
                <span>忘记密码</span>
                <span>注册</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                phone: '',
                password: ''
            }
        },
        mounted(){

        },
        methods: {
            // 登录时触发
            async login(){
                if(this.phone.trim().length === 0){
                    console.log('请输入手机号');
                    return;
                }
                if(this.password.trim().length === 0){
                    console.log('请输入密码');
                    return;
                }
                // const res = await thsis.$http.get(`/shipper/api/login?phone=${this.phone}&password=${this.password}`);
                // console.log(res);
            },
            // 失去焦点验证密码的强度
            testPassword(e){
                this.password = e.target.value;
                if(this.password.length < 6 && this.password.length < 11){
                    console.log('密码长度在6-11位之间');
                    return;
                }
                if(/^[0-9]*$/.test(this.password) || /^[A-Za-z]+$/.test(this.password)){
                    console.log('密码强度: 弱');
                }else if(/^[A-Za-z0-9]+$/.test(this.password)){
                    console.log('密码强度: 中');
                }else if(/^[\w]+$/.test(this.password)){
                    console.log('密码强度: 强');
                }else{
                    console.log('密码包含字母、数字、下划线');
                }
            },
            // 失去焦点验证手机号
            testPhone(e){
                this.phone = e.target.value;
                if(this.phone.length != 11){
                     console.log('请输入11位长度的手机号');
                }else if(!/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(this.phone)){
                    console.log('请输入有效的手机号');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login{
        background: #fff;
        height: 100vh;
        .logo {
            width: 100%;
            height: 5.4rem;
            background: url("../../../static/images/logo.png") no-repeat center 1.96rem;
            background-size: 1.65rem 2.35rem;
        }
        .passwords {
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            .wangjimima {
                width: 100%;
                display: flex;
                align-items: center;
                margin-top: 10px;
                font-size: 12px;
                color: #999;
                justify-content: space-between;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .tiui {
                font-size: 12px;
                color: #51c1ea;
                margin-top: 10px;
                margin-left: 30px;
            }
            .vuce {
                width: 100%;
                span {
                    width: 100%;
                    height: 45px;
                    background: #51c1ea;
                    color: #fff;
                    font-size: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 30px;
                    border-radius: 5px;
                }
            }
            .list {
                margin-top: 15px;
                .list-i {
                    display: inline-block;
                    position: absolute;
                    left: 0;
                }
                .list-i1 {
                    width: 0.23rem;
                    height: 0.38rem;
                    background: url("../../../static/images/loginphone.png") no-repeat center;
                    background-size: 100% 100%;
                    margin-left: 0.04rem;
                }
                .list-i2 {
                    width: 0.31rem;
                    height: 0.40rem;
                    background: url("../../../static/images/loginmima.png") no-repeat center;
                    background-size: 100% 100%;
                }
                .list-div {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    .input1 {
                        width: 60%;
                    }
                    .sp1 {
                        width: 40%;
                        height: 80%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: #fff;
                        color: #51c1ea;
                        font-size: 14px;
                        border-left: 1px #ddd solid;
                    }
                    input {
                        margin: 0;
                        padding: 0;
                        border: none;
                        color: #999;
                        font-size: 14px;
                    }
                    border-bottom: 1px #ddd solid;
                }
                padding-left: 30px;
                box-sizing: border-box;
                position: relative;
                width: 100%;
                height: 45px;
                display: flex;
                align-items: center;
            }
        }

    }
</style>