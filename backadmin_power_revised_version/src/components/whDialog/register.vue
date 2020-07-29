<template>
  <div class="register">
    <div class="phone-number">
      <input class="phone-number-input1 yahei" type="text" placeholder="+8600" />
      <input class="phone-number-input2 yahei" type="text" placeholder="请输入手机号码" />
    </div>
    <div class="captcha-text">
      <input type="text" placeholder="手机验证码" />
      <div class="getcaptcha yahei">获取验证码</div>
    </div>
    <input class="password" type="text" placeholder="请输入密码" />
    <button class="register-btn yahei">立即注册</button>
    <div class="bottom-title">
      <div class="agreement yahei">
        <span>登录即代表同意</span>
        <span class="terms">服务条款</span>
        <span class="terms">隐私条款</span>
      </div>
      <div class="tips yahei">未注册手机号验证后自动注册登录</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.phone-number {
  display: flex;
  justify-content: space-between;
  input {
    height: 48px;
    background: rgba(0, 0, 0, 0.04);
    padding: 13px 16px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.38);
    margin-bottom: 16px;
  }
  &-input1 {
    width: 88px;
  }
  &-input2 {
    width: 208px;
  }
}
.captcha-text {
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.04);
  padding: 13px 16px;
  box-sizing: border-box;
  margin-bottom: 16px;
  input {
    background: transparent;
    color: rgba(0, 0, 0, 0.38);
  }
  .getcaptcha {
    color: rgba(27, 80, 213, 1);
    cursor: pointer;
  }
}
.password {
  height: 48px;
  width: 100%;
  background: rgba(0, 0, 0, 0.04);
  padding: 13px 16px;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.38);
  margin-bottom: 16px;
}
.register-btn {
  width: 100%;
  height: 48px;
  background: rgba(27, 80, 213, 1);
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
  cursor: pointer;
  margin-bottom: 16px;
}
.bottom-title {
  .agreement {
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.87);
    .terms {
      color: rgba(27, 80, 213, 1);
      cursor: pointer;
      &::before {
        content: "「";
        color: rgba(0, 0, 0, 0.87);
      }
      &::after {
        content: "」";
        color: rgba(0, 0, 0, 0.87);
      }
    }
  }
  .tips {
    color: rgba(0, 0, 0, 0.54);
  }
}
</style>
