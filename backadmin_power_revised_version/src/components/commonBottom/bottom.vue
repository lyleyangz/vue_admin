<template>
  <div class="bottom-wrapper">
    <div class="bottom-container-wrapper">
      <!-- 底部关于 -->
      <div class="bottom-container">
        <div class="botcontainer-detailed">
          <div class="botcontainer-detailed-logo">
            <img src="@/assets/whAvatar/bottom-logo2.png" alt="" />
          </div>
          <div class="botcontainer-detailed-about-wrapper">
            <div class="botcontainer-detailed-about" v-for="item in aboutList" :key="item.index">
              <div class="title yehei">{{ item.title }}</div>
              <div v-for="arr in item.content" :key="arr.index" class="about-text">
                <a :href="arr.url" class="title-link yahei" target="_blank">{{ arr.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="botcontainer-foot">
      Copyright © 2020 FX110.COM | ALL Rights Reserved
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutList: [
        {
          title: "外汇新手",
          content: [
            {text: "监管介绍", url: "https://jieshao.fx110.com/authority/index"},
            {text: "外汇测评", url: "https://pingce.fx110.com/"},
            {text: "牛人榜", url: "https://www.niufx.com/"},
            {text: "防骗宝典", url: "https://www.fx110.com/case/list"},
            {text: "帮助中心", url: "https://www.fx110.com/help/index/139"}
          ]
        },
        {
          title: "线下互动",
          content: [
            {text: "讲座沙龙", url: "https://www.fx110.com/notices/list/7"},
            {text: "BrokersShow", url: "https://www.brokersshow.com/"},
            {text: "线下活动", url: "https://huodong.fx110.com/"}
          ]
        },
        {
          title: "客服帮助",
          content: [
            {text: "外汇咨询", url: "https://weiquan.fx110.com/consulting/list/1"},
            {text: "外汇投诉", url: "https://weiquan.fx110.com/complaints/list/1"},
            {text: "外汇曝光", url: "https://weiquan.fx110.com/exposure/list/1"},
            {text: "维权中心", url: "https://weiquan.fx110.com/rights/index"}
          ]
        },
        {
          title: "外汇栏目",
          content: [
            {text: "外汇交易商", url: "https://brokers.fx110.com/"},
            {text: "虚假交易商", url: "https://xujia.fx110.com/"},
            {text: "代理商", url: "https://ib.fx110.com/"}
          ]
        },
        {
          title: "关于我们",
          content: [
            {text: "广告服务", url: "https://www.fx110.com/home/about#bg_three"},
            {text: "友情链接", url: "https://www.fx110.com/home/about#bg_six"},
            {text: "联系我们", url: "https://www.fx110.com/home/about#bg_even"},
            {text: "企业简介", url: "https://www.fx110.com/home/about#bg_one"}
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.bottom-wrapper {
  margin-top: 8px;
  width: 100%;
  background: rgba(255, 255, 255, 1);
}
.bottom-container-wrapper {
  width: 1200px;
  margin: 0 auto;
  .bottom-container {
    padding: 0 16px 0 61px;
    .botcontainer-detailed {
      height: 252px;
      display: flex;
      justify-content: space-between;
      &-logo {
        margin-top: 41px;
        img {
          width: 185px;
          height: 53px;
        }
      }
      &-about-wrapper {
        display: flex;
        margin-top: 32px;
      }
      &-about {
        line-height: 22px;
        .title {
          margin-right: 80px;
          margin-bottom: 16px;
          font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.87);
        }
        .title-link {
          font-family: MicrosoftYaHei;
          color: rgba(0, 0, 0, 0.54);
        }
        .about-text {
          margin-bottom: 8px;
        }
      }
    }
  }
}
.botcontainer-foot {
  height: 47px;
  color: rgba(0, 0, 0, 0.38);
  line-height: 47px;
  padding-left: 421px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
</style>
