<template>
    <div id="app" style="height: 100%">
        <router-view></router-view>
    </div>
</template>

<script>
    // import test1 from './components/testPage/test1'
    import {elenoteGet} from './config/elenoteHttp'
    export default {
        name: 'electron-vue-self',
        beforeCreate:function(){
            let token = window.localStorage.getItem('token');
            if (token==null){
                elenoteGet('/myProject/list',{sd:"asdsfsdf"})
                // get('http://www.mylvadmin.com/electronApi/user/login?asd=1').then(res=>{
                //     console.log(res.data)
                // })
                // this.$router.push({
                //     path:'login'
                // })
            }else {
                // this.$router.push({
                //     path:'test1'
                // })
                elenoteGet('/myProject/list',{sd:"asdsfsdf"})
                // alert(2)
            }
            window.localStorage.setItem('asd','fuck');
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
        font-family: "Microsoft YaHei UI";
    }
</style>
