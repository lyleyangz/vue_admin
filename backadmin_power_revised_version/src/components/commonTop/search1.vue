<template>
  <div class="navbar">
    <div class="navbar-one">
      <el-row class="navbar-search">
        <el-col class="navbar-logo" :span="3">
          <img class="navbar-logo-img" src="@/assets/whAvatar/logo1.png" alt="logo.png" />
        </el-col>
        <el-col :span="7" class="navbar-baidu">
          <!-- 搜索网址下拉框 -->
          <el-row class="navbar-baidu-row">
            <el-select
              v-model="value"
              class="navbar-baidu-logo"
              placeholder=""
              popper-class="selectinfo"
              :popper-append-to-body="false"
            >
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <!-- 模糊搜索 -->
            <el-autocomplete
              v-model="state"
              class="navbar-baidu-search"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
              popper-class="autocompleteinfo"
              :popper-append-to-body="false"
            ></el-autocomplete>
          </el-row>
        </el-col>
        <el-col :span="2">
          <button class="search pointer">搜索</button>
        </el-col>
      </el-row>
      <!-- <el-row class="navbar-keyword">
        <el-col>
          <span class="hotword" v-for="item in hotword" :key="item.index" :label="item.label">
            {{ item.label }}
          </span>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isChoose: false,
      restaurants: [],
      state: "",
      timeout: null,
      options: [
        {
          value: "Google",
          label: "Google"
        },
        {
          value: "Baidu",
          label: "Baidu"
        },
        {
          value: "360",
          label: "360"
        },
        {
          value: "搜狗",
          label: "搜狗"
        },
        {
          value: "Bing",
          label: "Bing"
        }
      ],
      value: "Baidu"
    };
  },
  filters: {
    changTest(val) {
      console.log(val);
      if (val === "+") {
        this.isChoose = true;
        return this.isChoose;
      }
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },
  methods: {
    loadAll() {
      return [
        {value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号"},
        {value: "Hot honey 首尔炸鸡（仙霞路）", address: "上海市长宁区淞虹路661号"},
        {value: "新旺角茶餐厅", address: "上海市普陀区真北路988号创邑金沙谷6号楼113"},
        {value: "泷千家(天山西路店)", address: "天山西路438号"},
        {value: "胖仙女纸杯蛋糕（上海凌空店）", address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"},
        {value: "贡茶", address: "上海市长宁区金钟路633号"},
        {value: "豪大大香鸡排超级奶爸", address: "上海市嘉定区曹安公路曹安路1685号"}
      ];
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  background: rgba(255, 255, 255, 1);
  margin-bottom: 8px;
  .navbar-one {
    padding: 32px 0;
    width: 925px;
    margin: 0 auto;
    .navbar-logo {
      width: 180px;
      margin-right: 34px;
    }
    .navbar-baidu {
      width: 545px;
      height: 48px;
      margin-right: 10px;
      border: 1px solid rgba(202, 202, 202, 0.5);
      &-row {
        display: flex;
        position: relative;
      }
      .navbar-baidu-logo {
        ::v-deep .el-input--medium .el-input__inner {
          text-align: center;
          height: 46px;
          width: 80px;
          line-height: 36px;
          border: 0;
          padding-right: 20px;
          margin: 0;
          background: transparent;
        }
      }
      .navbar-baidu-search {
        flex: 1;
      }
      ::v-deep .el-input--medium .el-input__inner {
        width: 100%;
        height: 46px;
        line-height: 36px;
        margin-right: 10px;
        padding: 0;
        border: 0;
        background: transparent;
      }
    }
    .search {
      width: 150px;
      height: 48px;
      background: rgba(27, 80, 213, 1);
      font-size: 14px;
      font-family: MicrosoftYaHeiSemibold;
      color: rgba(255, 255, 255, 0.87);
    }
  }
}
</style>

<style lang="less">
.selectinfo {
  min-width: 80px !important;
  left: 0 !important;
  margin: 0 !important;
  top: 47px !important;
  .el-select-dropdown__item {
    padding: 0 5px;
  }
  .popper__arrow {
    display: none;
  }
}
.autocompleteinfo {
  top: 47px !important;
  margin: 0 !important;
  .popper__arrow {
    display: none;
  }
}
</style>
