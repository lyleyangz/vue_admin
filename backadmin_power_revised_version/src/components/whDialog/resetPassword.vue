<template>
  <div class="reset-password">
    <input type="text" placeholder="请设置新密码" />
    <input type="text" placeholder="再次输入新密码" />
    <button class="submit" @click="onClickSubmit">提交</button>
  </div>
</template>

<script>
export default {
  methods: {
    onClickSubmit() {
      this.$emit("toSubmitSuccess");
    }
  }
};
</script>

<style lang="less" scoped>
.reset-password {
  input {
    width: 100%;
    height: 48px;
    background: rgba(0, 0, 0, 0.04);
    padding: 13px 16px;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.38);
    margin-bottom: 16px;
  }

  .submit {
    width: 100%;
    height: 48px;
    background: rgba(27, 80, 213, 1);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.87);
    cursor: pointer;
  }
}
</style>
