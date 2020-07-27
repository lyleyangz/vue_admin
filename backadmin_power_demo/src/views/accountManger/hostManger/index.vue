<template>
  <container class="host-manger-layer">
    <el-table :data="tableList" border stripe @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column label="序号" type="index" align="center" width="55"></el-table-column>
      <el-table-column label="客服账号" prop="account" align="center"></el-table-column>
      <el-table-column label="客服密码" prop="pwdPlaintext" align="center"></el-table-column>
      <el-table-column label="客服昵称" prop="nickname" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <i
            class="el-icon-refresh-right icon blue pointer"
            v-if="getAuthorizedBtn(permissionList, 'official_account', 'reset')"
            @click="onClickResetPasswordHandle(scope.row)"
          ></i>
          <i
            class="el-icon-delete icon red pointer"
            v-if="getAuthorizedBtn(permissionList, 'official_account', 'del')"
            @click="onClickDeleteCustmerHandle(scope.row.id)"
          ></i>
        </template>
      </el-table-column>
    </el-table>
    <p class="tip">
      温馨提示：举办方客服权限主要是：与用户私聊、发布汇厅消息、禁言、撤回汇厅消息等，由于当前只做了一名客服的聊天指定功能，因此建议您目前只增加一名客服。
    </p>
    <el-row class="btn-group">
      <el-col :span="2">
        <el-button
          type="primary"
          v-if="getAuthorizedBtn(permissionList, 'official_account', 'add')"
          @click="handleAddAdmin"
        >
          新增
        </el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          type="danger"
          v-if="getAuthorizedBtn(permissionList, 'official_account', 'del')"
          @click="handleBatchDelete"
        >
          删除
        </el-button>
      </el-col>
    </el-row>
    <pagination
      :page-total="pagination.total"
      :page-index="pagination.index"
      :page-size="pagination.size"
      @onCurrentChange="paginationChangeHandle"
      @onSizeChange="paginationChangeSizeHandle"
    />
    <!-- 新增 -->
    <add-account-dialog
      :dialogVisible="addDialogVisible"
      :form="addForm"
      :labelName="labelName"
      :authorityDes="authorityDes"
      @submitData="onClickSubmitAddFormHandle"
      @changeDialogVisible="onClickAddDialogvisibleHandle"
    ></add-account-dialog>
    <!-- 重置密码 -->
    <reset-password-dialog
      :dialogVisible="resetPasswordDialogVisible"
      :form="resetForm"
      @submitData="onClickSubmitResetPasswordHandle"
      @changeDialogVisible="onClickResetPasswordDialogvisibleHandle"
    ></reset-password-dialog>
  </container>
</template>
<script>
import * as api from "@/api/baseInfo";
import addAccountDialog from "@/components/addAccountDialog";
import resetPasswordDialog from "@/components/resetPasswordDialog";
import pagination from "@/components/pagination";
import {fileDownload, getAuthorizedBtn} from "@/utils/mUtils";
import {mapGetters} from "vuex";
export default {
  components: {
    addAccountDialog,
    resetPasswordDialog,
    pagination
  },
  data() {
    return {
      tableList: [],
      addDialogVisible: false, //新增管理员弹框
      resetPasswordDialogVisible: false, //重置密码弹窗
      resetForm: {}, //重置密码表单数据
      addForm: {}, //新增管理员表单数据
      labelName: "", //新增弹窗标签名称
      authorityDes: "", //新增弹窗提示
      rowId: "",
      selectArr: [], //勾选的数据
      pagination: {
        index: 1,
        size: 12,
        total: 0
      },
      getAuthorizedBtn: getAuthorizedBtn
    };
  },
  computed: {
    ...mapGetters(["permissionList"]),
    selectIds() {
      return this.selectArr.map((item) => item.id);
    }
  },
  created() {
    this.getTableList();
  },
  methods: {
    //查找账号
    getTableList() {
      api
        .findOfficialAccount({
          type: 1,
          index: this.pagination.index,
          size: this.pagination.size
        })
        .then((res) => {
          this.tableList = res.data;
          this.pagination.total = res.total;
          if (this.tableList.length === 0) {  //删除最后一页的数据后，当前页无数据，此时回到上一页的数据
            this.pagination.index = this.pagination.index - 1;
            this.getTableList();
          }
        })
        .catch((err) => {
          this.$message.error(err.message);
        });
    },
    // 新增弹窗
    onClickAddDialogvisibleHandle(visible) {
      this.addDialogVisible = visible;
    },
    // 提交新增数据
    onClickSubmitAddFormHandle() {
      let param = {
        count: this.addForm.count,
        type: 1
      };
      api
        .addOfficialAccount(param)
        .then((res) => {
          this.$message.success("新增成功");
          this.getTableList();
          this.onClickAddDialogvisibleHandle(false);
        })
        .catch((err) => {
          this.$message.error(err.message);
        });
    },
    // 重置密码弹窗
    onClickResetPasswordDialogvisibleHandle(visible) {
      this.resetPasswordDialogVisible = visible;
    },
    // 重置密码
    onClickResetPasswordHandle(row) {
      this.rowId = row.id;
      this.onClickResetPasswordDialogvisibleHandle(true);
    },
    //新增
    handleAddAdmin() {
      this.labelName = "举办方客服";
      this.authorityDes =
        "权限主要是：与用户私聊、发布汇厅消息、禁言、撤回汇厅消息等，由于当前只做了一名客服的聊天指定功能，因此建议您目前只增加一名客服";
      this.onClickAddDialogvisibleHandle(true);
    },
    paginationChangeHandle(val) {
      this.pagination.index = val;
      this.getTableList();
    },
    paginationChangeSizeHandle(val) {
      this.pagination.size = val;
      this.getTableList();
    },
    //重置密码
    onClickSubmitResetPasswordHandle() {
      let param = {
        id: this.rowId,
        newPwdPlaintext: this.resetForm.password
      };
      api
        .modifyOfficialAccountPwd(param)
        .then((res) => {
          this.$message.success("重置密码成功");
          this.getTableList();
          this.onClickResetPasswordDialogvisibleHandle(false);
        })
        .catch((err) => {
          this.$message.error(err.message);
        });
    },
    //勾选
    handleSelectionChange(arr) {
      this.selectArr = arr;
    },
    //批量删除
    handleBatchDelete() {
      let arr = this.selectIds.toString();
      this.onClickDeleteCustmerHandle(arr);
    },
    //删除客服
    onClickDeleteCustmerHandle(id) {
      this.$confirm("确定删除选中的客服吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          api
            .removeOfficialAccount({
              ids: id
            })
            .then((res) => {
              this.$message.success("删除成功");
              this.getTableList();
            })
            .catch((err) => {
              this.$message.error(err.message);
            });
        })
        .catch(() => {
          //取消
        });
    },
  }
};
</script>
<style lang="less" scoped>
.host-manger-layer {
  .tip {
    color: #f56c6c;
    margin: 10px 0 60px;
  }
  .icon {
    font-size: 20px;
    margin-right: 10px;
  }
  .blue {
    color: #0078d7;
  }
  .red {
    color: #db8273;
  }
}
</style>
