<template>
  <div class="edit-classify">
    <h2>编辑分类</h2>
    <el-form label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "EditClassify",
  data: function () {
    return {
      model: {
        name: "",
        _id: null,
      },
    };
  },
  methods: {
    save: async function () {
      const res = await this.$api.put("/classify", this.model);
      if (res.data.nModified === 1) {
        this.$router.push('/classifyList')
      }
    },
  },
  created: function () {
    this.model.name = this.$route.query.name;
    this.model._id = this.$route.query._id;
  },
};
</script>

<style scoped>
</style>
