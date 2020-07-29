<template>
  <el-dialog :title="form.title" :visible="dialogVisible" width="30%" :close-on-click-modal="false" @close="resetData">
    <el-form :model="form" status-icon :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
      <el-form-item label="角色名" prop="nickname" class="is-required">
        <el-input type="text" v-model="normalizedForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input type="text" v-model="normalizedForm.detail" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    form: {
      type: Object
    }
  },
  computed: {
    normalizedForm: function() {
      return this.form;
    }
  },
  data() {
    var validateNickname = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入角色名"));
      }
    };
    return {
      rules: {
        nickname: [{validator: validateNickname, trigger: "blur"}]
      }
    };
  },
  created() {},
  methods: {
    resetData() {
      this.$refs["form"].resetFields();
      this.onClickCloseHandle();
    },
    onClickCloseHandle() {
      this.$emit("changeDialogVisible", false);
    },
    submitForm(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
      this.onClickCloseHandle();
    }
  }
};
</script>
