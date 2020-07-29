/**
 * Created by lidy on 2019/10/24.
 */
// 表单验证方法
const mobile = (rule, value, callback) => {
  if (/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的手机号码"));
  }
};

const mobileCode = (rule, value, callback) => {
  if (value.length === 4) {
    callback();
  } else {
    callback(new Error("请输入正确的手机验证码"));
  }
};

const password = (rule, value, callback) => {
  if (/^[0-9a-zA-Z]{6,18}/.test(value)) {
    callback();
  } else {
    callback(new Error("请输入正确的密码"));
  }
};
//修改密码
const oldPass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入旧密码"));
  } else {
    callback();
  }
};
const newPassword = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入新密码"));
  } else {
    //校验数字、字符、符号混合密码，长度8-16，至少包括两种类型字符，区分大小写
    const exp = /(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/;
    if (!exp.test(value)) {
      callback(new Error("格式不正确"));
    }
    callback();
  }
};

export {mobile, mobileCode, password, oldPass, newPassword};
