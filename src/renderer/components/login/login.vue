<template>
    <div class="login-container">
        <el-form class="login-form" autoComplete="on" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
            <h3 class="title">elenote-login</h3>

            <el-form-item prop="mobile">
                <el-input name="mobile" type="text" @keyup.enter.native="handleLogin" v-model="loginForm.mobile" autoComplete="on" placeholder="mobile" />
            </el-form-item>

            <el-form-item prop="password">
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on" placeholder="password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                    Sign in
                </el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import {elenotePost,elenoteGetUserInfo} from '../../config/elenoteHttp'
    import {Message} from 'element-ui'
    console.log(JSON.parse(localStorage.getItem('local_user')))
    export default {
        name: 'login',
        beforeCreate:function(){
            elenoteGetUserInfo().then(res=>{
                if (!res.code){
                    this.$router.push({
                        path:'/'
                    })
                }
            })
        },
        data() {
            return {
                loginForm: {

                },
                loginRules: {
                    mobile: [{ required: true, trigger: 'blur'}],
                    password: [{ required: true, trigger: 'blur',min:6}]
                },
                loading: false,
                pwdType: 'password'
            }
        },
        methods: {
            handleLogin() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        this.loading = true
                        elenotePost('/user/login',this.loginForm).then(res=>{
                            if (res.code){
                                Message.error(res.msg)
                                this.loading = false
                                return false
                            }else {

                                localStorage.setItem('elenote_id',res.data.elenote_id);
                                localStorage.setItem('local_user',JSON.stringify(res.data.user));

                                this.$router.push({
                                    path:'/'
                                })
                            }
                        })
                    } else {
                        Message.error('ERROR')
                        return false
                    }
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    $bg:#2d3a4b;
    $light_gray:#eee;

    /* reset element-ui css */
    .login-container {
        .el-input {
            display: inline-block;
            height: 47px;
            width: 85%;
            input {
                background: transparent;
                border: 0px;
                -webkit-appearance: none;
                border-radius: 0px;
                padding: 12px 5px 12px 15px;
                color: $light_gray;
                height: 47px;
                &:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
                    -webkit-text-fill-color: #fff !important;
                }
            }
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
    }

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;
    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 520px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
            span {
                &:first-of-type {
                    margin-right: 16px;
                }
            }
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
            &_login {
                font-size: 20px;
            }
        }
        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select: none;
        }
    }
</style>
