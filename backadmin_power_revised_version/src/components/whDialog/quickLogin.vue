<template>
  <div>
    <div class="login-quick">
      <div class="top yahei">
        <span>打开</span>
        <span class="top-hl">汇聊APP</span>
        <span>扫一扫登录</span>
      </div>
      <div class="ewm-wrapper">
        <div class="ewm">二维码</div>
      </div>
    </div>
    <div class="third-login">
      <div class="third-login-title yahei">使用第三方账号登录</div>
      <icon-svg class="icon" icon-class="weixin"></icon-svg>
      <icon-svg class="icon" icon-class="qq1"></icon-svg>
      <icon-svg class="icon" icon-class="weibo"></icon-svg>
    </div>
    <div class="register yahei">
      <span>还没账号？</span>
      <span class="register-quick" @click="onClickRegister">快速注册</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickRegister() {
      this.$emit("onClickRegister");
    }
  }
};
</script>

<style lang="less" scoped>
.login-quick {
  border: 1px solid rgba(0, 0, 0, 0.08);
  .top {
    font-size: 12px;
    color: rgba(48, 48, 48, 0.87);
    line-height: 32px;
    text-align: center;
    height: 32px;
    background: rgba(245, 245, 245, 1);
    &-hl {
      color: rgba(27, 80, 213, 1);
      margin: 0 4px;
      cursor: pointer;
    }
  }
  .ewm-wrapper {
    padding: 16px 75px 24px;
    .ewm {
      width: 150px;
      height: 150px;
      text-align: center;
      line-height: 150px;
      background-color: #ccc;
    }
  }
}
.third-login {
  display: flex;
  justify-content: center;
  margin: 14px 0 27px;
  &-title {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
  }
  .icon {
    font-size: 16px;
    margin-left: 16px;
    cursor: pointer;
  }
}
.register {
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.87);
  &-quick {
    color: rgba(27, 80, 213, 1);
    cursor: pointer;
  }
}
</style>
