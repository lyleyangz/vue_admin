<template>
  <div>
    <template v-if="fileType === 1">
      <el-upload
        class="avatar-uploader"
        action=""
        :disabled="isDisabled"
        :show-file-list="false"
        :before-upload="beforeAvatarUpload"
        :http-request="handleUpload"
      >
        <img v-if="url" :src="url" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon" />
      </el-upload>
    </template>
    <template v-if="fileType === 4">
      <el-upload
        class="upload-demo"
        action=""
        ref="fileUpload"
        :disabled="isDisabled"
        :show-file-list="false"
        :http-request="handleFileUpload"
        :on-success="handleSuccess"
        :on-progress="handleProgeress"
      >
        <el-button size="small" type="primary" :disabled="isDisabled">点击上传</el-button>
        <el-progress :percentage="percentage" v-show="isAready" :stroke-width="3"></el-progress>
      </el-upload>
    </template>
  </div>
</template>

<script>
import * as uploadAPI from "@/api/uploader";
import {aliOssUrl} from "@/utils/env";
export default {
  name: "imgUpload",
  props: {
    isDisabled: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: ""
    },
    fileType: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      imgUrl: this.url,
      isAready: false,
      percentage: 0
    };
  },
  methods: {
    // 图片上传前验证
    beforeAvatarUpload(file) {
      let ImgType = ["png", "jpg", "jpeg", "bmp", "ico", "json"]; //上传图片类型
      let typearr = file.name.split(".");
      let type = typearr[typearr.length - 1]; //类型
      if (ImgType.indexOf(type) == "-1") {
        this.$message.error("上传图片格式不正确");
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    // 上传图片到OSS 同时派发一个事件给父组件监听
    handleUpload(event) {
      let file = event.file;
      let fileType = this.fileType; //1是图片，2是音频，3是视频，4是文件
      uploadAPI.upLoad
        .uploader(file, fileType)
        .then((res) => {
          this.$emit("successUpload", res.url, file);
        })
        .catch((res) => {
          this.$message({
            message: "上传失败",
            type: "error"
          });
        });
    },
    handleFileUpload(event) {
      let file = event.file;
      let fileType = this.fileType; //1是图片，2是音频，3是视频，4是文件
      this.isAready = true;
      uploadAPI.upLoad
        .uploader(file, fileType, event)
        .then((res) => {
          this.$emit("successUpload", aliOssUrl + res.name, file.size, file);
          event.onSuccess(res);
        })
        .catch((res) => {
          this.$message({
            message: "上传失败",
            type: "error"
          });
        })
        .finally(() => {
          this.isAready = false;
          this.percentage = 0;
        });
    },
    handleProgeress(event, file, fileList) {
      this.percentage = event.percent;
    },
    handleSuccess(response, file, fileList) {
      this.$refs.fileUpload.clearFiles(); // 清空文件列表
    }
  }
};
</script>
<style lang="less" scoped>
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
::v-deep .avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
.common-width {
  width: 45px;
}
</style>
