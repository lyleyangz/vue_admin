<template>
  <div>
    <el-dialog
      title="设置账户类型"
      :visible="dialogVisible"
      class="account-type-dialog"
      width="700px"
      :close-on-click-modal="false"
      @close="onClickCloseHandle"
    >
      <el-form :model="data" label-width="92px" label-position="left">
        <el-form-item label="用户昵称">
          <el-col :span="15">
            <el-input v-model="data.nickname" disabled />
          </el-col>
        </el-form-item>
        <el-form-item label="手机号">
          <el-col :span="15">
            <el-input v-model="data.phone" disabled />
          </el-col>
        </el-form-item>
        <el-form-item label="帐户类型">
          <el-radio v-model="data.accountType" label="1">普通用户</el-radio>
          <el-radio v-model="data.accountType" label="2">内部测试用户</el-radio>
        </el-form-item>
      </el-form>
      <div class="btn">
        <el-button @click="onClickCloseHandle">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    onClickCloseHandle() {
      this.$emit("changeDialogVisible", false);
    },
    handleSubmit() {
      this.$emit("submitData");
    }
  }
};
</script>
<style lang="less" scoped>
.account-type-dialog {
  .text-day {
    margin-left: 10px;
  }

  .btn {
    text-align: center;
    margin: 40px 0 0;
  }
}
</style>
