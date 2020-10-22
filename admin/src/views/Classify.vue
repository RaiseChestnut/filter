<template>
  <div class="classify">
    <h2>添加分类</h2>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="上级分类">
        <el-select v-model="model.parent">
          <el-option
            v-for="item in parent"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Classify",
  data: function () {
    return {
      model: {
        name: "",
        parent: null,
      },
      parent: [],
    };
  },
  created: function () {
    this.getClassify();
  },
  methods: {
    save: async function () {
      const res = await this.$api.post("/classify", this.model);
      console.log(res);
    },
    getClassify: async function () {
      const res = await this.$api("/classify");
      this.parent = res.data;
    },
  },
};
</script>

<style scoped>
</style>
