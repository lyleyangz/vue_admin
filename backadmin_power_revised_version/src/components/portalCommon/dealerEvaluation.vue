<template>
  <div class="test">
    <div class="dealer-title">交易商测评</div>
    <div class="test-rank-wrapper">
      <el-row class="test-rank" v-for="(item, index) in ranklist" :key="item.evalTraderId">
        <icon-svg icon-class="biaoqian" class="test-rank-biaoqian"></icon-svg>
        <span class="test-rank-index" :class="{'test-rank-index1': index + 1 >= 10}">{{ index + 1 }}</span>
        <el-col class="test-rank-logo">
          <img :src="item.logo" alt="" class="test-rank-logo-img pointer" @click="toNewPage(item)" />
        </el-col>
        <el-col class="test-rank-describe">
          <div class="test-rank-describe-title pointer" @click="toNewPage(item)">{{ item.dealerName }}</div>
          <el-rate v-model="item.startScore" disabled score-template="{value}"></el-rate>
          <div class="test-rank-describe-score">{{ item.evalTotalScore }}分</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as api from "@/api/homepage";
export default {
  data() {
    return {
      ranklist: []
    };
  },
  mounted() {
    //获取交易商测评数据
    api.findDealerEvaluation().then(res => {
      this.ranklist = res.data;
      this.ranklist.forEach(element => {
        element.startScore = element.evalTotalScore / 20;
      });
    });
  },
  methods: {
    toNewPage(item) {
      const url = `https://pingce.fx110.com/trader/evaluation/${item.periodId}-${item.evalTraderId}`;
      window.open(url, "_blank");
    }
  }
};
</script>

<style lang="less" scoped>
//交易商测评
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
.test-rank-wrapper {
  max-height: 520px;
  overflow: auto;
  padding: 19px 10px 17px 12px;
  :nth-child(1) {
    .test-rank-biaoqian {
      color: #f66233;
    }
  }
  :nth-child(2) {
    .test-rank-biaoqian {
      color: #f49804;
    }
  }
  :nth-child(3) {
    .test-rank-biaoqian {
      color: #ffd038;
    }
  }
}
.test {
  background: rgba(255, 255, 255, 1);
  &-rank {
    position: relative;
    margin-bottom: 7px;
    &-biaoqian {
      font-size: 20px;
      position: absolute;
      top: -3px;
      left: -5px;
      color: #c1c1c1;
    }

    &-index {
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      top: -5px;
      left: 2px;
    }
    &-index1 {
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      top: -5px;
      left: -2px;
    }
    &-logo {
      height: 75px;
      width: 100px;
      &-img {
        height: 100%;
        width: 100%;
        border: 1px solid #eaeaea;
      }
    }
    &-describe {
      max-width: 120px;
      margin: 8px 0 4px 8px;
      &-title {
        font-size: 12px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.87);
        line-height: 20px;
      }
      &-score {
        font-size: 12px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: rgba(48, 48, 48, 1);
        line-height: 16px;
      }
    }
  }
}
</style>
