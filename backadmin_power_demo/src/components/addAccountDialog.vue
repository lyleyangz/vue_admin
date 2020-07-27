<template>
  <div>
    <el-dialog
      title="新增"
      :visible="dialogVisible"
      class="add-admin-dialog"
      width="500px"
      :close-on-click-modal="false"
      @close="resetData"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item :label="`${this.labelName}数量`" prop="count">
          <el-col :span="8">
            <el-input v-model="form.count"></el-input>
          </el-col>
          <el-col :span="6" :offset="1">注：请输入正整数</el-col>
        </el-form-item>
        <p class="tip">温馨提示：{{ this.labelName }}{{ this.authorityDes }}。</p>
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
    },
    labelName: {
      type: String,
      default: ""
    },
    authorityDes: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      rules: {
        count: {required: true, message: `请输入${this.labelName}数量`, trigger: "blur"}
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
