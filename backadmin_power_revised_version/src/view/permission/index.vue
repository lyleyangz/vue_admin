<template>
  <div class="permission-container">
    <el-button type="primary" class="add-edition" @click="handleClickAdd">新增版本</el-button>
    <el-table :data="tableData" border style="width: 100%;">
      <el-table-column fixed prop="name" label="角色名称"></el-table-column>
      <el-table-column prop="detail" label="角色描述"></el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button size="mini" @click="handleConfigure(scope.$index, scope.row)">权限配置</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增 -->
    <add
      v-if="showAdd"
      :dialogVisible="showAdd"
      ref="formRef"
      :form="formData"
      @submitData="onClickSubmitFormDataHandle"
      @changeDialogVisible="onchangeDialogVisibleHandle"
    ></add>
    <!-- 权限配置 -->
    <SwitchRoles
      v-if="showSetting"
      :dialogVisible="showSetting"
      ref="settingRef"
      :setting="[...settingData]"
      @submitData="onClickSubmitFormDataHandle"
      @changeDialogVisible="onchangeDialogVisibleHandle"
    ></SwitchRoles>
  </div>
</template>

<script>
import add from "./components/add";
import SwitchRoles from "./components/SwitchRoles";
export default {
  components: {
    SwitchRoles,
    add
  },
  data() {
    return {
      showAdd: false,
      showSetting: false,
      tableData: [
        {
          name: "王小猫",
          detail: "路 1518 弄",
          age: 11
        }
      ],
      // 编辑数据集
      formData: {
        title: "",
        detail: "",
        name: ""
      },
      // 权限配置数据集
      settingData: [
        {
          title: "",
          detail: "",
          name: ""
        }
      ]
    };
  },
  methods: {
    onchangeDialogVisibleHandle() {
      this.showAdd = false;
      this.showSetting = false;
    },
    onClickSubmitFormDataHandle(data) {
      console.log("data");
    },
    handleClickAdd() {
      this.formData = {
        title: "创建",
        detail: "",
        name: ""
      };
      this.showAdd = true;
    },
    handleEdit(index, row) {
      this.formData = {
        title: "编辑",
        detail: row.detail,
        name: row.name
      };
      this.showAdd = true;
    },
    handleConfigure(index, row) {
      this.settingData = [
        {
          model: "1",
          key: "2,3,4,5"
        }
      ];
      this.showSetting = true;
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="less" scoped>
.permission-container {
  margin: 20px 35px;
  .add-edition {
    margin-bottom: 20px;
  }
}
</style>
