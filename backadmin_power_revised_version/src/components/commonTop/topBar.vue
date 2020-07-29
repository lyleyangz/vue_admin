<template>
  <el-row class="topbar" :data="commontop">
    <el-col class="topbar-col" v-for="item in commontop" :key="item.index">
      <el-row class="topbar-first">
        <el-col class="topbar-title" :span="16">{{ item.name }}</el-col>
        <el-col class="topbar-value" :span="8">{{ item.value }}</el-col>
      </el-row>
      <el-row>
        <el-col :class="item.colorfor === '+' ? 'green' : 'red'" class="topbar-change" :span="16">
          {{ item.change }}
        </el-col>
        <el-col :span="8" class="topbar-for" :class="item.colorfor === '+' ? 'green' : 'red'">
          <icon-svg icon-class="up" v-if="item.colorfor === '+'"></icon-svg>
          <icon-svg icon-class="down" v-else></icon-svg>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      commontop: [
        {name: "ADUSER", value: 0.19679, change: "-0.00150%(-0.05)", colorfor: "-"},
        {name: "ADUSER", value: 0.19679, change: "+0.00150%(+0.05)", colorfor: "+"},
        {name: "ADUSER", value: 0.19679, change: "-0.00150%(-0.05)", colorfor: "-"},
        {name: "ADUSER", value: 0.19679, change: "+0.00150%(+0.05)", colorfor: "+"},
        {name: "ADUSER", value: 0.19679, change: "-0.00150%(-0.05)", colorfor: "-"},
        {name: "ADUSER", value: 0.19679, change: "+0.00150%(+0.05)", colorfor: "+"},
        {name: "ADUSER", value: 0.19679, change: "-0.00150%(-0.05)", colorfor: "-"}
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.topbar {
  background: rgba(26, 26, 31, 1);
}
.topbar-col {
  width: 14.28%;
  border-left: 2px solid rgb(54, 50, 50);
}
.topbar-first {
  border-left: 0;
}
.topbar-title {
  font-size: 16px;
  font-family: ArialMT;
  color: rgba(255, 255, 255, 1);
  padding: 8px 0 5px 24px;
}
.topbar-value {
  display: flex;
  justify-content: flex-end;
  font-size: 16px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.87);
  padding: 8px 25px 5px 0;
}
.green {
  color: green;
}
.red {
  color: red;
}
.topbar-change {
  font-size: 13px;
  font-family: Arial-BoldMT, Arial;
  font-weight: normal;
  color: changeColor;
  padding: 0 0 14px 24px;
}
.topbar-for {
  display: flex;
  justify-content: flex-end;
  padding: 0 25px 16px 0;
}
</style>
