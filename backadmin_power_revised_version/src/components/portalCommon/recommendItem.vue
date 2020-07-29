<template>
  <div class="recommend-item-container">
    <div class="item-left">
      <div class="top-title yahei">
        <div class="top-title-hot">
          <icon-svg icon-class="hot" class="tools"></icon-svg>
          <span>热门</span>
        </div>
        <span class="top-title-forex">外汇</span>
      </div>
      <div class="main-title yahei">
        {{ data.recommend_title }}
      </div>
      <div class="content yahei">
        {{ data.recommend_detail }}
      </div>
      <div class="origin yahei">
        来源:FX110
      </div>
      <div class="bottom-info yahei">
        <div class="left">
          <span class="time">{{ data.date }}分钟前</span>
          <span class="read">{{ data.read_time }}次阅读</span>
          <span class="recommend">{{ data.remark }}评论</span>
        </div>
        <div class="right">
          <icon-svg icon-class="more"></icon-svg>
        </div>
      </div>
    </div>
    <div class="item-right">
      <img :src="data.image_url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.recommend-item-container {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 1);
  padding: 16px;
  box-sizing: border-box;
  .item-left {
    flex: 1;
    margin-right: 20px;
    .top-title {
      display: flex;
      height: 22px;
      font-weight: bold;
      color: rgba(224, 32, 32, 1);
      align-items: center;
      &-hot {
        margin-right: 21px;
        display: flex;
        align-items: center;
        .tools {
          margin-right: 3px;
          font-size: 16px;
        }
      }
      &-forex {
        color: rgba(48, 48, 48, 0.54);
      }
    }
    .main-title {
      font-size: 18px;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.87);
      padding: 16px 0;
    }
    .content {
      color: rgba(0, 0, 0, 0.54);
      line-height: 22px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .origin {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      line-height: 20px;
      padding: 16px 0 8px;
    }
    .bottom-info {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.54);
      .left {
        .time {
          margin-right: 16px;
        }
        .read {
          margin-right: 16px;
        }
      }
      .right {
        font-size: 16px;
        background: rgba(255, 255, 255, 1);
      }
    }
  }
  .item-right {
    width: 200px;
    display: flex;
    align-items: flex-end;
    img {
      width: 200px;
      height: 113px;
    }
  }
}
</style>
