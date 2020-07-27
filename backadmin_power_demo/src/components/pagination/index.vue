<template>
  <div class="pagination-layer">
    <el-pagination
      v-if="pageTotal > 1"
      class="pagination"
      background
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :layout="layout"
      :total="pageTotal"
      prev-text="上一页"
      next-text="下一页"
      :current-page="pageIndex"
      @current-change="onCurrentChangeHandle"
      @size-change="onSizeChangeHandle"
    />
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 8
    },
    pageSizes: {
      type: Array,
      default() {
        return [8, 10, 15, 20];
      }
    },
    pageTotal: {
      type: Number,
      default: 0
    },
    layout: {
      type: String,
      default: "prev, pager, next"
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 上下分页 pageIndex
    onCurrentChangeHandle(page) {
      this.$emit("onCurrentChange", page);
    },
    // 每页多少条切换 pageSize
    onSizeChangeHandle(page_size) {
      this.$emit("onSizeChange", page_size);
    }
  }
};
</script>

<style lang="less" scoped>
.pagination-layer {
  text-align: center;
  margin: 30px 18px;

  ::v-deep .pagination {
    li,
    .btn-prev,
    .btn-next {
      background-color: #fff;
      border: solid 1px #dcdee1;
    }

    .btn-prev,
    .btn-next {
      padding: 0 5px;
    }

    .el-pager {
      li {
        &.active,
        &:hover {
        }
      }
    }
  }
}
</style>
