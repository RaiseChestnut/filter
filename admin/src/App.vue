<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style>
@import url("./assets/normalize.css");
.edit {
  color: #67c23a;
}
.delete {
  color: #f56c6c;
}
.texbtn {
  cursor: pointer;
}
.line {
  color: #909399;
  font-weight: bold;
}
</style>
