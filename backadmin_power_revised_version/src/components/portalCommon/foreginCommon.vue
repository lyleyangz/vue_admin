<template>
  <div class="foreign">
    <div class="dealer-title">外汇辅助工具</div>
    <ul>
      <li>
        <icon-svg class="foreign-svg" icon-class="FQA"></icon-svg>
        <span>FCA查询</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="Calculator"></icon-svg>
        <span>点值计算器</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="Fibonacci"></icon-svg>
        <span>斐波那契</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="exchange"></icon-svg>
        <span>单一货币套算汇率</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="bond"></icon-svg>
        <span>保证金计算器</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="Pivot"></icon-svg>
        <span>枢轴点计算器</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="profit"></icon-svg>
        <span>利润计算器</span>
      </li>
      <li>
        <icon-svg class="foreign-svg" icon-class="calendar"></icon-svg>
        <span>经济日历</span>
      </li>
    </ul>
    <button class="foreign-but">更多工具 >></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
//外汇辅助工具
.dealer-title {
  font-size: 18px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.87);
  line-height: 47px;
  background: rgba(255, 255, 255, 1);
  border-bottom: 1px rgba(0, 0, 0, 0.08) solid;
}
.dealer-title::first-letter {
  margin-left: 16px;
}
.foreign {
  background: rgba(255, 255, 255, 1);
  padding-bottom: 16px;
  ul {
    padding-top: 8px;
  }
  li {
    width: 255px;
    height: 40px;
    border: 1px solid rgba(236, 236, 236, 1);
    box-sizing: border-box;
    margin: 0 7px 12px 8px;
    display: flex;
    align-items: center;
    .foreign-svg {
      font-size: 32px;
      margin: 0 12px 0 8px;
    }
    li > span {
      font-size: 14px;
      font-family: MicrosoftYaHei;
      color: rgba(0, 0, 0, 0.87);
      margin-left: 14px;
    }
  }
  &-but {
    width: 255px;
    height: 40px;
    border: 1px solid rgba(236, 236, 236, 1);
    font-size: 14px;
    font-family: MicrosoftYaHei;
    color: rgba(27, 80, 213, 1);
    background: rgba(255, 255, 255, 1);
    margin-left: 8px;
  }
  margin-bottom: 8px;
}
</style>
