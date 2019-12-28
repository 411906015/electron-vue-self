<template>
  <el-container>
    <el-header>
      <span style="color: white;font-size: 18px">
        TESTER & CODER
      </span>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link" style="color: white;">
          SYSTEM<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item >个人信息</el-dropdown-item>
          <el-dropdown-item >退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>

    <el-container>

      <el-aside width="210px">
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#393D49" text-color="#fff" :unique-opened = "true" active-text-color="">
          <div >
            <el-input placeholder="请输入内容" v-model="search_value" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" v-on:click="searchFc"></el-button>
            </el-input>
            <el-menu-item index="search-1">搜索结果1</el-menu-item>
          </div>
          <el-submenu index="1" >
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>标记</span>
            </template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
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

          <!--<el-submenu index="9">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-user-solid"></i>-->
              <!--<span>导航</span>-->
            <!--</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组一</template>-->
              <!--<el-menu-item index="9-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="9-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">分组二</template>-->
              <!--<el-menu-item index="9-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="9-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
          <!--</el-submenu>-->

          <!--<el-menu-item index="5" disabled>-->
            <!--<i class="el-icon-document"></i>-->
            <!--<span slot="title">导航一</span>-->
          <!--</el-menu-item>-->

          <!--<el-menu-item index="6">-->
            <!--<i class="el-icon-setting"></i>-->
            <!--<span slot="title">导航二</span>-->
          <!--</el-menu-item>-->

        </el-menu>
      </el-aside>

      <el-container>
        <el-main style="padding: 0px">
          <div id="index" style="text-align: center;margin-top: 300px;font-size: 60px;">
            测试&amp;开发 交互系统 v1.0
          </div>

        </el-main>
        <!--<el-footer>Footer</el-footer>-->
      </el-container>

    </el-container>
  </el-container>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                info:"fuck",
                search_value: '',
                counter:0
            }
        },
        methods:{
            searchFc(){
                alert(1)
            }
        }
    }
    axios.get('http://www.mylvadmin.com/electronApi/user/login').then(function(response) {
        // handle success
        this.search_value='阿萨德';
        console.log(response.data);
    }).catch(function(error) {
        // handle error
        console.log(error);
    })
    // axios.get('http://www.mylvadmin.com/electronApi/user/login')
</script>

<style>

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
</style>