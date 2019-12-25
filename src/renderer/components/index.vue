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
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#393D49" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

          </el-submenu>


          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>

          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>

          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>

        </el-menu>
      </el-aside>

      <el-container>

        <el-main>

          welcome!
        </el-main>

        <!--<el-footer>Footer</el-footer>-->

      </el-container>

    </el-container>
  </el-container>
</template>

<script>

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
    background-color: #E9EEF3;
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

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

  .el-menu-item,.is-active{
    color: #409EFF;
  }

</style>