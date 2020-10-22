<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="200px" default-active="classify">
        <el-menu router class="el-menu-vertical-demo">
          <el-menu-item index="classify">
            <i class="el-icon-plus"></i>
            <span slot="title">添加分类</span>
          </el-menu-item>
          <el-menu-item index="classifyList">
            <i class="el-icon-document-copy"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>新沂市汽车三滤专营店后台管理系统</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #fff;
  color: #333;
 
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-container {
  min-height: 100vh;
}
</style>
