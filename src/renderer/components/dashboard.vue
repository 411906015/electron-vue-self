<template>
    <!--<div id="index" style="text-align: center;margin-top: 300px;font-size: 60px;">-->
        <!--&lt;!&ndash;恣在家 测试&amp;开发 交互系统 简易版v1.0(不删档内测)&ndash;&gt;-->
        <!--TESTER-->
    <!--</div>-->
    <div class="dashboard">
        <div style="margin: 15px;">
            <el-row :gutter="20">
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        标记
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        开发中
                    </div>
                </el-col>
                <el-col :span="5">
                    <div class="grid-content bg-purple">
                        测试中
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        测试中
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        已上线
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .dashboard{
        margin-top: -22px;
        height: 100%;
        background-size:100%;
        background-image: url("../assets/bimg4.jpg");
    }
    .el-col{
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        background-color: #f1f4fb;
        min-height: 400px;
        margin: 4px;
    }


</style>