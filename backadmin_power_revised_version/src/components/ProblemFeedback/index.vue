<template>
  <div class="problem-container">
    <div class="problem-close"><icon-svg icon-class="close" class="problem-close-logo"></icon-svg></div>
    <div class="problem-text">
      <div class="problem-title">请告诉我们发生了什么</div>
      <div class="problem-ask">
        如果您认为您的网站没有网络风险行为或者已经将危险网页进行修复，
        <br />
        请填写右侧信息，提交后我们将为您审核。
      </div>
      <div>
        <el-form label-width="90px" :model="data" class="problem-form">
          <el-form-item label="问题描述">
            <el-input type="textarea" v-model="describe"></el-input>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input v-model="contact"></el-input>
          </el-form-item>
          <el-form-item label="截图附件">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">选择文件</el-button>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>
      <div class="form-agreement">*您提交的信息仅用于解决该问题，我们会严格保密。</div>
      <div class="bottom-but">
        <input class="problem-cancel" type="button" value="取消" />
        <input class="problem-submit" type="button" value="提交" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      describe: "",
      contact: "",
      fileList: []
    };
  },
  methods: {}
};
</script>
<style lang="less">
.problem-container {
  width: 600px;
  height: 522px;
  background: rgba(255, 255, 255, 1);
  .problem-close {
    height: 48px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 32px;
  }
  .problem-close-logo {
    color: rgba(48, 48, 48, 0.87);
    margin: 8px 9px 8px 567px;
  }
  .problem-text {
    width: 536px;
    margin: 0 auto;
  }
  .problem-title {
    font-size: 18px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.87);
    line-height: 26px;
    margin-top: 16px;
    margin-bottom: 8px;
  }
  .problem-ask {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(0, 0, 0, 0.87);
    line-height: 22px;
    margin-bottom: 16px;
  }
  .problem-form /deep/ .el-form-item__label {
    padding-right: 34px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(0, 0, 0, 0.54);
    line-height: 36px;
  }
  .problem-form /deep/ .el-textarea__inner {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 0;
    border: 0;
    height: 144px;
  }
  .problem-form /deep/ .el-input__inner {
    background: rgba(0, 0, 0, 0.04);
    border: 0;
    border-radius: 0;
  }
  .problem-form /deep/ .el-button {
    background: rgba(0, 0, 0, 0.04);
    color: rgba(0, 0, 0, 0.54);
    border: 0;
    border-radius: 0;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(0, 0, 0, 0.54);
  }
  .form-agreement {
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(0, 0, 0, 0.38);
    line-height: 22px;
    margin-bottom: 16px;
  }
  .bottom-but {
    border-top: solid 1px rgba(0, 0, 0, 0.08);
  }
  .problem-cancel {
    margin: 16px 3px 24px 288px;
    width: 120px;
    height: 36px;
    font-size: 14px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.54);
    line-height: 22px;
    background: rgba(255, 255, 255, 1);
  }
  .problem-submit {
    margin: 16px 0 24px 0;
    width: 120px;
    height: 36px;
    background: rgba(27, 80, 213, 1);
    font-size: 14px;
    font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.87);
    line-height: 22px;
  }
}
</style>
