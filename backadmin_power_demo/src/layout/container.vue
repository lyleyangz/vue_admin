<template>
  <div class="container-layer">
    <slot />
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang="less">
.container-layer {
  padding: 20px;
  .title {
    margin: 0 0 20px;
  }
}
</style>
