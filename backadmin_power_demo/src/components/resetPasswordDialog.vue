<template>
  <div>
    <el-dialog
      title="重置密码"
      :visible="dialogVisible"
      class="add-admin-dialog"
      width="500px"
      :close-on-click-modal="false"
      @close="resetData"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="设置密码" prop="password">
          <el-col :span="15">
            <el-input v-model="form.password"></el-input>
          </el-col>
        </el-form-item>
        <p class="tip">注：大小写字母、数字、6-16个字符</p>
      </el-form>
      <div slot="footer" class="dialog-footer">
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
    form: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      rules: {
        password: [
          {required: true, message: "请输入密码", trigger: "blur"},
          {pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/, message: "密码格式不正确", trigger: "blur"}
        ]
      }
    }
  },
  methods: {
    onClickCloseHandle() {
      this.$emit("changeDialogVisible", false);
    },
    resetData() {
      this.$refs["form"].resetFields();
      this.onClickCloseHandle();
    },
    handleSubmit() {
      this.$emit("submitData");
    },
    // 校验
    validator() {
      let flag = false;
      this.$refs["form"].validate((boolean, object) => {
        if (boolean) {
          // 校验通过
          flag = true;
        } else {
          // this.$message.error(object[Object.keys(object)[0]][0].message)
        }
      });
      return flag;
    }
  }
};
</script>
<style lang="less" scoped>
.add-admin-dialog {
  .tip {
    color: #f56c6c;
    margin: 10px 0 60px;
  }
}
</style>
