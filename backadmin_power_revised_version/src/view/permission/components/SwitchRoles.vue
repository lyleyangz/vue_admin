<template>
  <el-dialog title="权限配置弹窗" :visible="dialogVisible" width="50%" :close-on-click-modal="false" @close="resetData">
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      ref="rolesTree"
      :default-expanded-keys="defaultExpandedSettingPermission"
      :default-checked-keys="defaultCheckedSettingPermission"
      :props="defaultProps"
    ></el-tree>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleDialogSubmit">提 交</el-button>
      <el-button @click="handleDialogClose">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import {settingpermission} from "@/api/permissionapi";
import settingPermission from "@/router/permissionSettingData";
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    setting: {
      type: Array
    }
  },
  data() {
    return {
      // 初始化权限数据集合
      data: settingPermission,
      // 已配置权限
      defaultCheckedSettingPermission: [],
      // 已配置权限展开选项
      defaultExpandedSettingPermission: [],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  computed: {},
  created() {},
  methods: {
    handleDialogSubmit() {
      let SettingLen = this.$refs.rolesTree.getCheckedNodes().length;
      let SettingData = this.$refs.rolesTree.getCheckedNodes();
      const settingArray = [];
      SettingData.forEach(permission => {
        const tmp = {...permission};
        settingArray.push(tmp.id);
      });
      settingpermission({permission: settingArray.join(",")}).then(res => {
        console.log(res);
      });
    },
    handleDialogClose() {
      this.$emit("changeDialogVisible", false);
    },
    resetData() {
      this.onClickCloseHandle();
    },
    onClickCloseHandle() {
      this.$emit("changeDialogVisible", false);
    }
  }
};
</script>
