<template>
  <div>
    <div class="number-login">
      <input type="text" placeholder="请输入手机号码" />
      <input type="password" placeholder="密码" />
      <button class="login-btn yahei">登录</button>
      <div class="captcha yahei"><span @click="onClickCaptcha">手机验证码登录</span></div>
    </div>
    <div class="third-login">
      <div class="third-login-title yahei">使用第三方账号登录</div>
      <icon-svg class="icon" icon-class="weixin"></icon-svg>
      <icon-svg class="icon" icon-class="qq1"></icon-svg>
      <icon-svg class="icon" icon-class="weibo"></icon-svg>
    </div>
    <div class="numbe-login-bottom">
      <div class="forget" @click="onClickForget">
        忘记密码？
      </div>
      <div class="register yahei">
        <span>还没账号？</span>
        <span class="register-quick" @click="onClickRegister">快速注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickCaptcha() {
      this.$emit("captchaLogin");
    },
    onClickForget() {
      this.$emit("forgetPassword");
    },
    onClickRegister() {
      this.$emit("onClickRegister");
    }
  }
};
</script>
<style lang="less" scoped>
.number-login {
  input {
    width: 100%;
    height: 48px;
    background-color: rgba(0, 0, 0, 0.04);
    margin-bottom: 16px;
    padding: 13px 0 13px 14px;
    color: rgba(0, 0, 0, 0.38);
    box-sizing: border-box;
  }
  .login-btn {
    cursor: pointer;
    width: 100%;
    height: 48px;
    margin-bottom: 16px;
    background: rgba(27, 80, 213, 1);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.87);
  }
  .captcha {
    text-align: center;
    color: rgba(27, 80, 213, 1);
    span {
      cursor: pointer;
    }
  }
}
.third-login {
  display: flex;
  justify-content: center;
  margin: 22px 0 27px;
  &-title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
  .icon {
    cursor: pointer;
    font-size: 16px;
    margin-left: 16px;
  }
}
.numbe-login-bottom {
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.87);
  .forget {
    cursor: pointer;
  }
  .register {
    &-quick {
      color: rgba(27, 80, 213, 1);
      cursor: pointer;
    }
  }
}
</style>
