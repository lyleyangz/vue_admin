<template>
  <div class="captcha-wrapper">
    <div class="phone-number">
      <input class="phone-number-input1 yahei" type="text" placeholder="+8600" />
      <input class="phone-number-input2 yahei" type="text" placeholder="请输入手机号码" />
    </div>
    <div class="captcha-text">
      <input type="text" placeholder="手机验证码" />
      <div class="getcaptcha">获取验证码</div>
    </div>
    <button class="finish">完成</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.captcha-wrapper {
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
  .finish {
    width: 100%;
    height: 48px;
    background: rgba(27, 80, 213, 1);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.87);
    cursor: pointer;
  }
}
</style>
