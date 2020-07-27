<template>
  <container class="account-manger-list-layer" title="用户管理">
    <el-row class="nav-menu">
      <el-col :span="4">
        <el-select
          v-model="filters.isMute"
          placeholder="请选择是否禁言"
          size="small"
          @change="handleChangeIsMute"
          :disabled="filters.accountType === 2"
        >
          <el-option v-for="(item, index) in isMuteList" :key="index" :label="item.label" :value="item.value" />
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-date-picker
          v-model="filters.dataTime"
          type="datetimerange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="small"
        />
      </el-col>
      <el-col :span="3">
        <el-input
          v-model="filters.keyword"
          size="small"
          placeholder="请输入用户名或手机号"
          class="nav-item"
          clearable
          @clear="getTableList"
        />
      </el-col>
      <el-col :span="2">
        <el-button size="small" type="primary" class="menu-btn" @click="getKeywordList">查询</el-button>
      </el-col>
      <el-col :span="1">
        <el-button size="small" type="default" @click="resetFilterData">重置</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableList" border stripe class="table-border table-list">
      <el-table-column label="用户ID" prop="uid" align="center" />
      <el-table-column label="账户类型" prop="accountType" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.accountType | accountType }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户昵称" prop="nickname" align="center" />
      <el-table-column label="手机号" prop="phone" align="center" />
      <el-table-column label="注册时间" prop="registerTime" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.registerTime | formatDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="封禁状态" prop="isMute" align="center">
        <template slot-scope="scope">
          <el-button v-if="scope.row.forbiddenStatus === 1" class="mute-btn color" size="small">正常</el-button>
          <div v-else-if="scope.row.forbiddenStatus === 2">
            <el-button class="normal-btn color" size="small" v-for="item in scope.row.muteTypeList" :key="item">
              {{ item | muteUserTypeList }}
            </el-button>
          </div>
          <el-button v-else class="forbidden-btn color" size="small">封号</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="id" align="center">
        <template v-if="scope.row.accountType === 1" slot-scope="scope">
          <el-tooltip class="item" effect="light" content="重置昵称" placement="bottom">
            <i
              class="el-icon-refresh-right icon common-icon blue pointer"
              v-if="getAuthorizedBtn(permissionList, 'user', 'reset_nickname')"
              @click="onClickResetNickNameHandle(scope.row)"
            />
          </el-tooltip>
          <i
            class="el-icon-microphone common-icon microphone pointer"
            v-if="getAuthorizedBtn(permissionList, 'user', 'forbidden')"
            @click="handleMuteUser(scope.row)"
          />
        </template>
      </el-table-column>
    </el-table>
    <pagination
      :page-total="pagination.total"
      :page-index="pagination.index"
      :page-size="pagination.size"
      @onCurrentChange="paginationChangeHandle"
      @onSizeChange="paginationChangeSizeHandle"
    />
    <mute-user-dialog
      ref="formRef"
      :dialog-visible="muteUserDialogVisible"
      :data="userMuteFormData"
      :currentForbiddenStatus="currentForbiddenStatus"
      @changeMuteType="handleChangeMuteType"
      @submitData="onSubmitUserMuteFormData"
      @changeDialogVisible="onChangeUserMuteDialogVisibleHandle"
    />
  </container>
</template>
<script>
import {accountTypeList, isMuteList} from "@/utils/env";
import muteUserDialog from "@/components/muteUserDialog";
import * as api from "@/api/accountManger";
import pagination from "@/components/pagination";
import {formatDate, getAuthorizedBtn} from "@/utils/mUtils";
import {mapGetters} from "vuex";
const accountType = {
  1: "普通用户",
  2: "游客"
};
const muteUserTypeList = {
  1: "禁言私聊",
  2: "禁言直播室",
  3: "禁言聊天室"
};
export default {
  components: {muteUserDialog, pagination},
  data() {
    return {
      accountTypeList: accountTypeList,
      isMuteList: isMuteList,
      filters: {
        accountType: "",
        isMute: "",
        dataTime: ""
      },
      tableList: [],
      muteUserDialogVisible: false,
      userMuteFormData: {
        muteDay: "", //禁言时间（以天为单位）
        muteType: 1, //禁言时间类型（默认第一条）
        nickname: "",
        uid: "",
        phone: "",
        forbiddenStatus: "", //禁言状态  1正常 2禁言 3封号
        reasonType: 1, //禁言原因类型（默认第一条）
        forbiddenReason: "", //禁言原因
        forbiddenTotalTime: "", //禁言时间
        isLift: "", //是否解除封号  1是 2否
        checkedModules: [] //禁言模块
      },
      pagination: {
        index: 1,
        size: 12,
        total: 0
      },
      muteTime: "",
      muteReason: "",
      currentForbiddenStatus: 1, //用户当前的封禁状态
      getAuthorizedBtn: getAuthorizedBtn
    };
  },
  filters: {
    muteUserTypeList(val) {
      return muteUserTypeList[val];
    },
    formatDate(val) {
      return formatDate(val, "YYYY-MM-DD HH:mm:ss");
    },
    accountType(type) {
      return accountType[type];
    }
  },
  computed: {
    ...mapGetters(["permissionList"]),
    accountType() {
      return this.acccountFormData.accountType === "普通用户" ? 1 : 2;
    },
    muteTypeList() {
      let checkedList = [];
      this.userMuteFormData.checkedModules.forEach((item) => {
        if (item === "禁言聊天室") {
          checkedList.push(3);
        } else if (item === "禁言直播室") {
          checkedList.push(2);
        } else {
          checkedList.push(1);
        }
      });
      return checkedList;
    },
    muteStatus() {
      let status = "";
      if (this.userMuteFormData.forbiddenStatus === 3) {
        if (this.userMuteFormData.isLift === "1") {
          status = 1;
        } else {
          status = 3;
        }
      } else {
        status = this.userMuteFormData.forbiddenStatus;
      }
      return status;
    }
  },
  created() {
    this.getTableList();
  },
  methods: {
    getTableList() {
      api
        .findUserList({
          accountType: this.filters.accountType,
          forbiddenStatus: this.filters.isMute,
          registerTimeStart: this.filters.dataTime ? formatDate(this.filters.dataTime[0]) : "",
          registerTimeEnd: this.filters.dataTime ? formatDate(this.filters.dataTime[1]) : "",
          keyWord: this.filters.keyword,
          index: this.pagination.index,
          size: this.pagination.size
        })
        .then((res) => {
          this.tableList = res.data;
          this.pagination.total = res.total;
        });
    },
    // 模糊查寻
    getKeywordList() {
      this.pagination.index = 1;
      this.getTableList();
    },
    // 切换是否禁言
    handleChangeIsMute(val) {
      this.filters.isMute = val;
      this.getTableList();
    },
    onChangeUserMuteDialogVisibleHandle(visible) {
      this.muteUserDialogVisible = visible;
    },
    getMuteTime(val) {
      switch (val) {
        case 1:
          this.muteTime = this.userMuteFormData.muteDay;
          break;
        case 2:
          this.muteTime = "1";
          break;
        case 3:
          this.muteTime = "3";
          break;
        case 4:
          this.muteTime = "7";
          break;
        case 5:
          this.muteTime = "30";
          break;
        case 6:
          this.muteTime = "180";
          break;
        case 7:
          this.muteTime = "365";
          break;
        case 8:
          this.muteTime = "876000";
          break;
        default:
          break;
      }
    },
    getMuteReason(val) {
      switch (val) {
        case 1:
          this.muteReason = this.userMuteFormData.forbiddenReason;
          break;
        case 2:
          this.muteReason = "违规操作";
          break;
        case 3:
          this.muteReason = "发送qq，微信等联系方式类广告";
          break;
        case 4:
          this.muteReason = "发送软广告";
          break;
        case 5:
          this.muteReason = "侮辱，谩骂平民";
          break;
        case 6:
          this.muteReason = "恶意刷屏";
          break;
        case 7:
          this.muteReason = "恶意诽谤平民";
          break;
        default:
          break;
      }
    },
    // 禁言
    onSubmitUserMuteFormData() {
      if (this.$refs.formRef.validator()) {
        this.getMuteTime(this.userMuteFormData.muteType);
        this.getMuteReason(this.userMuteFormData.reasonType);
        let param = {
          operator: "admin",
          reason: this.muteReason || "无关广告",
          totalTime: this.muteTime,
          uid: this.userMuteFormData.uid,
          type: this.muteStatus, // 正常1 禁言2 封号3
          muteTypeList: this.muteTypeList //禁言模块
        };
        api
          .forbiddenUser(param)
          .then((res) => {
            this.$message({
              type: "success",
              message: "操作成功"
            });
            this.onChangeUserMuteDialogVisibleHandle(false);
            this.getTableList();
          })
          .catch((err) => {
            this.$message({
              type: "error",
              message: err.message
            });
          });
      }
    },
    handleMuteUser(row) {
      let arr = [];
      if (row.muteTypeList) {
        arr = row.muteTypeList.map((item) => {
          return item === 1 ? "禁言私聊" : item === 2 ? "禁言直播室" : "禁言聊天室";
        });
      }
      this.userMuteFormData = {
        nickname: row.nickname,
        phone: row.phone,
        forbiddenStatus: row.forbiddenStatus,
        forbiddenReason: row.forbiddenStatus === 1 ? "" : row.forbiddenReason,
        uid: row.uid,
        forbiddenTotalTime: row.forbiddenTotalTime,
        isLift: "2",
        muteType: 1,
        reasonType: 1,
        forbiddenEndTime: row.forbiddenEndTime,
        checkedModules: arr
      };
      this.currentForbiddenStatus = row.forbiddenStatus;
      if (this.userMuteFormData.forbiddenStatus === 2) {
        this.userMuteFormData.muteDay = row.forbiddenTotalTime;
      }
      this.onChangeUserMuteDialogVisibleHandle(true);
    },
    // 改变禁言时间
    handleChangeMuteType(val) {
      this.userMuteFormData.muteType = val;
    },
    resetFilterData() {
      for (var i in this.filters) {
        this.filters[i] = "";
      }
      this.getTableList();
    },
    // 重置昵称
    onClickResetNickNameHandle(row) {
      this.$confirm("确定对该用户重置昵称吗？", "重置", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        center: true,
        type: "warning"
      })
        .then(() => {
          let param = {uid: row.uid};
          api
            .resetUserNickname(param)
            .then((res) => {
              this.$message.success("重置成功");
              this.getTableList();
            })
            .catch((err) => {
              this.$message.error(err.message);
            });
        })
        .then(() => {
          //取消
        });
    },
    paginationChangeHandle(page) {
      this.pagination.index = page;
      this.getTableList(this.pagination.index, this.pagination.size);
    },
    paginationChangeSizeHandle(size) {
      this.pagination.size = size;
      this.getTableList(this.pagination.index, this.pagination.size);
    }
  }
};
</script>
<style lang="less" scoped>
.account-manger-list-layer {
  margin: 0 20px;
  .nav-menu {
    margin: 30px 0;
    .nav-item {
      margin-left: 35px;
    }

    .menu-btn {
      margin-left: 70px;
    }
  }

  .table-list {
    .normal-btn {
      background: #f59a23;
    }

    .mute-btn {
      background: #70b603;
    }

    .forbidden-btn {
      background: #7f7f7f;
    }

    .color {
      color: #fff;
      border-radius: 30px;
    }

    .common-icon {
      font-size: 20px;
    }

    .microphone {
      color: #e1725f;
    }
  }
}
</style>
