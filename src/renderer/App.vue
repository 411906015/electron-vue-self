<template>
    <div id="app" style="height: 100%">
        <router-view></router-view>
    </div>
</template>

<script>
    // import test1 from './components/testPage/test1'
    import {Loading} from 'element-ui'
    import {elenoteGetUserInfo} from './config/elenoteHttp'
    let loadingInstance = Loading.service();
    export default {
        name: 'electron-vue-self',
        beforeCreate:function(){
            elenoteGetUserInfo().then(res=>{
                loadingInstance.close()
                if (res.code){
                    this.$router.push({
                        path:'/login'
                    })
                }
            })
        },
        components:{
            // test1
        }
    }
    // console.log('执行代码中...');
</script>

<style>
    /* CSS */
    html,body,#app,.el-container{
        /*设置内部填充为0，几个布局元素之间没有间距*/
        padding: 0px;
        /*外部间距也是如此设置*/
        margin: 0px;
        /*统一设置高度为100%*/
        height: 100%;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        /*font-family: "Microsoft YaHei UI";*/
    }
    /*滚动条美化*/
    /*::-webkit-scrollbar*/
    /*{*/
        /*width: 16px;  !*滚动条宽度*!*/
        /*height: 16px;  !*滚动条高度*!*/
    /*}*/

    /*!*定义滚动条轨道 内阴影+圆角*!*/
    /*::-webkit-scrollbar-track*/
    /*{*/
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);*/
        /*border-radius: 10px;  !*滚动条的背景区域的圆角*!*/
        /*background-color: red;!*滚动条的背景颜色*!*/
    /*}*/

    /*!*定义滑块 内阴影+圆角*!*/
    /*::-webkit-scrollbar-thumb*/
    /*{*/
        /*border-radius: 10px;  !*滚动条的圆角*!*/
        /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);*/
        /*background-color: green;  !*滚动条的背景颜色*!*/
    /*}*/
</style>
