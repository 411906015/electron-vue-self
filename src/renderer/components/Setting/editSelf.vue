<template>

    <div style="margin-left: 20px">
        <div>
            <!--<el-divider content-position="left" ><b style="font-size: 16px">个人信息</b></el-divider>-->
        </div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本资料" name="1">

                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>

                        <el-form-item label="email">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>

                        <el-form-item label="备注">
                            <el-input type="textarea" v-model="form.desc" style="width: 400px"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">确定</el-button>
                            <!--<el-button>取消</el-button>-->
                        </el-form-item>
                    </el-form>

                </el-tab-pane>
                <el-tab-pane label="修改密码" name="2">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="新的密码" prop="pass">
                            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button :loading="loading" :disabled="disabledButton" type="primary" @click="onSubmitPass('ruleForm')">提交</el-button>
                        </el-form-item>
                    </el-form>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>

<script>
    import {elenoteGetUserInfo,elenotePost} from '../../config/elenoteHttp'
    import {Loading,Message} from 'element-ui'
    export default {
        name:'editSelf',
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else if (value.length<6){
                    callback(new Error('至少输入6位'));
                }else {
                    if (this.ruleForm.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                loading:false,
                activeName: '1',
                form: {
                    name: '',
                    email:'',
                },
                ruleForm: {
                    pass: '',
                    checkPass: '',
                },
                disabledButton:false,
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ]
                },
                userData:{},
            }
        },
        deactivated:function() {
            console.log('离开 editSelf 路由')
        },
        // created:function () {
        //     alert(1123)
        // },
        activated:function () {
            console.log('进入 editSelf 路由')
            // let loadingInstance = Loading.service();
            elenoteGetUserInfo().then(res=>{
                if (res.code!=0){
                    Message.error(res.msg)
                    return false
                }
                localStorage.setItem('local_uer',JSON.stringify(res.data))
                let userData=JSON.parse(localStorage.getItem('local_uer'))
                this.form.name = userData.real_name
                this.form.email = userData.email
                // loadingInstance.close()
            })

        },
        methods: {
            onSubmit() {
                console.log(JSON.stringify(this.form));
            },
            onSubmitPass(formName){
                this.disabledButton = true
                this.loading = true
                console.log(JSON.stringify(this.ruleForm));
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        elenotePost('/user/edit-password',this.ruleForm).then(res=>{
                            this.disabledButton = false
                            this.loading = false
                            console.log(res)
                        })

                        // alert('submit!');
                    } else {
                        this.disabledButton = false
                        this.loading = false
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
.el-input{
    width: 300px;
}
</style>