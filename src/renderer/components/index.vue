<template>
    <el-container>
        <el-header>
            <span style="color: white;font-size: 18px">
                <a href="/" style="text-decoration:none; color:white;">TESTER & CODER</a>
            </span>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link" style="color: white;">
                    SYSTEM<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="addTabs('editSelf','个人信息')">
                        <router-link to="/editSelf" style="text-decoration:none;color: #606266">个人信息</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item click>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-header>

        <el-container>
            <el-aside width="210px">
                <el-menu default-active="1" router class="el-menu-vertical-demo" background-color="#393D49" text-color="#fff"
                         :unique-opened = "true" active-text-color=""
                         :collapse-transition="true">
                    <div >
                        <el-input placeholder="请输入内容" v-model="search_value" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" v-on:click="searchFc"></el-button>
                        </el-input>
                        <el-input placeholder="请输入内容2" v-model="search_value" class="input-with-select">
                            <el-button slot="append" icon="el-icon-search" v-on:click="searchFc1"></el-button>
                        </el-input>
                        <el-menu-item index="search-1">搜索结果1</el-menu-item>
                    </div>
                    <el-submenu index="1" >
                        <template slot="title">
                            <i class="el-icon-star-on"></i>
                            <span>标记</span>
                        </template>
                        <el-menu-item index="test1/1">我的</el-menu-item>
                        <el-menu-item index="test2">我的2</el-menu-item>
                    </el-submenu>


                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-user-solid"></i>
                            <span>我的</span>
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-submenu>

                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-folder-checked"></i>
                            <span>已完结</span>
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-submenu>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-folder-delete"></i>
                            <span>忽略</span>
                        </template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>

                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>

                <el-main style="padding: 0px">

                    <el-tabs v-model="editableTabsValue" type="card" closable  @edit="handleTabsEdit" @tab-click="handleClick">
                        <el-tab-pane
                                :key="item.name"
                                v-for="item in editableTabs"
                                :label="item.title"
                                :closable="item.close"
                                :name="item.name">
                        </el-tab-pane>
                    </el-tabs>
                    <keep-alive :include="cachePage">
                        <router-view></router-view>
                    </keep-alive>

                    <!--<keep-alive>-->
                        <!--<router-view v-if="$route.meta.keepAlive"></router-view>-->
                    <!--</keep-alive>-->
                    <!--<router-view v-if="!$route.meta.keepAlive"></router-view>-->
                </el-main>
                <!--<el-footer>Footer</el-footer>-->
            </el-container>

        </el-container>
    </el-container>
</template>

<script>
    import {elenoteGet} from '../config/elenoteHttp'
    import {Message} from 'element-ui'
    import editSelf from './Setting/editSelf'
    export default {
        data() {
            return {
                info:"fuck",
                search_value: '',
                counter:0,
                //动态tabs
                editableTabsValue: 'dashboard',
                editableTabs: [
                    {
                        title: '首页',
                        name: 'dashboard',
                        close:'closable'
                    }
                ],
                tabIndex: 1,

                //路由页面缓存
                cachePage:"editSelf",
            }
        },
        components:{
            editSelf
        },
        methods:{
            searchFc(){
                console.log(this.$store.state.Counter.main)
                // alert('清除缓存')
                // this.cachePage=''
            },
            searchFc1(){
                this.$store.dispatch('someAsyncTask')
                // alert('增加缓存')
                // this.cachePage='editSelf'
            },
            handleClick(e){
                //切换路由
                this.$router.push({
                    path:e.name
                })
            },
            //点击增加tabs 如果tabs存在则跳转显示
            addTabs(url,title){
                let tabs = this.editableTabs;
                let add = true;
                //是否存在当前路由
                tabs.forEach((tab, index) => {
                    if (tab.name===url){
                        add = false;
                    }
                });
                this.$router.push({
                    path:url
                })
                if (add){
                    this.editableTabs.push({
                        title: title,
                        name: url,
                    });
                    this.editableTabsValue = url;
                }else {
                    this.editableTabsValue = url;
                }
            },
            //动态tabs
            handleTabsEdit(targetName, action) {
                if (action === 'add') {
                    let newTabName = ++this.tabIndex + '';
                    this.editableTabs.push({
                        title: 'New Tab',
                        name: newTabName,
                        // content: 'New Tab content'
                    });
                    this.editableTabsValue = newTabName;
                }
                if (action === 'remove') {

                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;

                    //不关闭首页
                    if (targetName === 'dashboard'){
                        return false;
                    }
                    if (activeName === targetName) {
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1];
                                if (nextTab) {
                                    this.$router.push({
                                        path:nextTab.name
                                    })
                                    activeName = nextTab.name;
                                }else {
                                    alert(1)
                                }
                            }
                        });
                    }

                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                }
            }
        }
    }

</script>

<style scoped>

    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        color: #333;
        /*background-color: rgb(82, 88, 95);*/
        background-color: #343747;
        /*text-align: center;*/
        line-height: 60px;
    }

    .el-aside {
        /*background-color: #D3DCE6;*/
        /*background-color: rgb(84, 92, 100);*/
        background-color: #373b48 !important;
        color: #333;
        /*text-align: center;*/
        /*line-height: 200px;*/
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 160px;*/
    }

    body > .el-container {
        /*margin-bottom: 40px;*/
    }

    /*.el-container:nth-child(5) .el-aside,*/
    /*.el-container:nth-child(6) .el-aside {*/
    /*line-height: 260px;*/
    /*}*/

    /*.el-container:nth-child(7) .el-aside {*/
    /*line-height: 320px;*/
    /*}*/

    /*头部下拉框浮在最右*/
    .el-dropdown{
        float: right;
    }

    .el-dropdown-link {
        cursor: pointer;
        /*color: #409EFF;*/
    }
    .el-icon-arrow-down {
        /*font-size: 12px;*/
    }

    /*点击导航栏*/
    .el-menu-item.is-active {
        border-left:3px solid #409EFF;
        background-color: rgb(46,49,58)!important;
    }
</style>