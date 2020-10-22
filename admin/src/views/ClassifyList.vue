<template>
  <div class="classify-list">
    <el-table :data="classify">
      <el-table-column label="id" prop="_id"></el-table-column>
      <el-table-column label="上级分类" prop="parent.name"></el-table-column>
      <el-table-column label="名称" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span class="edit texbtn" @click="editClick(scope.row)">编辑</span>
          <span class="line"> | </span>
          <span class="delete texbtn" @click="deleteClick(scope.row._id)"
            >删除</span
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ClassifyList",
  data: function () {
    return {
      classify: [],
    };
  },
  created: function () {
    this.getClassify();
  },
  methods: {
    getClassify: async function () {
      const res = await this.$api("/classify");
      this.classify = res.data;
    },
    editClick: function (row) {
      this.$router.push({
        path: "/EditClassify",
        query: {
          _id: row._id,
          name: row.name,
        },
      });
    },
    deleteClick: async function (_id) {
      const res = await this.$api({
        url: "/classify",
        method: "delete",
        data: {
          _id,
        },
      });
      if (res.data.deletedCount === 1) {
        this.getClassify();
      }
    },
  },
};
</script>

<style scoped>
</style>
