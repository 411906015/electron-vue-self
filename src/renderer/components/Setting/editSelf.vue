<template>

    <div style="margin-left: 20px">
        <div>
            <!--<el-divider content-position="left" ><b style="font-size: 16px">个人信息</b></el-divider>-->
        </div>
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="基本资料" name="first">

                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="email">
                            <el-input v-model="form.email"></el-input>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">确定</el-button>
                            <!--<el-button>取消</el-button>-->
                        </el-form-item>
                    </el-form>

                </el-tab-pane>
                <el-tab-pane label="修改密码" name="second">
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="新的密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码">
                            <el-input v-model="form.sure_password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">确定</el-button>
                            <!--<el-button>取消</el-button>-->
                        </el-form-item>
                    </el-form>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name:'editSelf',
        data() {
            return {
                activeName: 'first',
                form: {
                    name: '',
                    sure_password:'',
                    // region: '',
                    // date1: '',
                    // date2: '',
                    // delivery: false,
                    // type: [],
                    // resource: '',
                    // desc: ''
                    email:'',
                },
                userData:{},
            }
        },
        // created:function () {
        //     alert(1123)
        // },
        activated:function () {
            let userData=JSON.parse(localStorage.getItem('local_uer'))
            this.form.name = userData.real_name
            this.form.email = userData.email
        },
        methods: {
            onSubmit() {
                console.log(JSON.stringify(this.form));
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