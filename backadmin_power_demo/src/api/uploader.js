import request from "@/utils/request";
import store from "@/store";
const getAliOSSCreds = (params) => {
  return request({
    url: "admin/base/getOssToken",
    method: "get",
    params
  });
};
// const beforeAvatarUpload = file => {
//   const isJPG = file.type === 'image/jpeg'
//   const isPNG = file.type === 'image/png'
//   const isLt1M = file.size / 1024 / 1024 <= 1
//   if (!isLt1M) {
//     alert('上传头像图片大小不能超过 1MB!')
//   }
//   if (!isJPG && !isPNG) {
//     alert('上传头像图片只能是 JPG或者PNG 格式!')
//   }
//   return isLt1M && (isPNG || isJPG)
// }

const generateUUID = () => {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); // use high-precision timer if available
  }
  var uuid = "xxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

export const getUploadToken = ossType => {
  return getAliOSSCreds({
    type: ossType
  });
};

export const upLoad = {
  uploader: (item, fileType, option) => {
    // if (!beforeAvatarUpload(item, fileType)) {
    //   return console.log('File is larger than 500M')
    // }
    const params = {};
    params.type = fileType;
    params.uid = store.getters.userUid;
    return getAliOSSCreds(params).then((res) => {
      const Oss = require("ali-oss");
      const client = new Oss({
        region: res.region,
        secure: true,
        accessKeyId: res.accessKeyId,
        accessKeySecret: res.accessKeySecret,
        stsToken: res.securityToken,
        bucket: res.bucket,
        endpoint: res.endpoint
      });
      let key = "";
      if (fileType === 4) {
        key = res.dir + "/" + item.name;
      } else {
        const suxfile = item.name.split(".");
        key = res.dir + "/" + generateUUID() + "." + suxfile[1];
      }
      if (option != null) {
        return client.multipartUpload(key, item, {
          progress: function (p, checkpoint) {
            option.onProgress({percent: Math.floor(p * 100)}); // 触发el-upload组件的onProgress方法
          }
        })
      } else {
        return client.put(key, item);
      }
    });
  }
};
export const simpleUploader = (data, fileType, ossType) => {
  return new Promise((resolve, reject) => {
    getUploadToken(ossType)
      .then(res => {
        const oss = require("ali-oss");
        let client = new oss({
          region: res.region,
          secure: true,
          accessKeyId: res.accessKeyId,
          accessKeySecret: res.accessKeySecret,
          stsToken: res.securityToken,
          bucket: res.bucket,
          endpoint: res.endpoint
        });
        let key = res.dir + "/" + generateUUID() + "." + fileType;
        client
          .put(key, dataURLtoBlob(data))
          .then(res => {
            resolve(res);
          })
          .catch(res => {
            reject(res);
          });
      })
      .catch(res => {
        reject(res);
      });
  });
};
export const dataURLtoBlob = dataurl => {
  let arr = dataurl.split(",");
  //注意base64的最后面中括号和引号是不转译的
  let _arr = arr[1].substring(0, arr[1].length - 2);
  let mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(_arr),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {
    type: mime
  });
};

export default {
  upLoad,
  simpleUploader
};
