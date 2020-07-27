<template>
  <div>
    <el-dialog
      title="封禁详情"
      :visible="dialogVisible"
      class="mute-user-dialog"
      width="900px"
      :close-on-click-modal="false"
      @close="onClickCloseHandle"
    >
      <el-form ref="form" :model="data" label-width="92px" :rules="rule" label-position="left">
        <el-form-item label="用户昵称">
          <el-col :span="15">
            <el-input v-model="data.nickname" disabled />
          </el-col>
        </el-form-item>
        <el-form-item label="手机号">
          <el-col :span="15">
            <el-input v-model="data.phone" disabled />
          </el-col>
        </el-form-item>
        <el-form-item label="封禁状态" v-if="currentForbiddenStatus !== 3">
          <el-col :span="15">
            <el-radio-group v-model="data.forbiddenStatus">
              <el-radio :label="1">正常</el-radio>
              <el-radio :label="2">禁言</el-radio>
              <el-radio :label="3">封号</el-radio>
            </el-radio-group>
          </el-col>
        </el-form-item>
        <!-- 正常 -->
        <template v-if="currentForbiddenStatus === 1">
          <el-form-item label="禁言模块" v-if="data.forbiddenStatus === 2" prop="checkedModules">
            <el-checkbox-group v-model="data.checkedModules" @change="handleChangeCheckModules">
              <el-checkbox
                v-for="item in muteModulesList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="封禁原因" v-if="data.forbiddenStatus !== 1">
            <el-col :span="7">
              <el-select v-model="data.reasonType" size="small">
                <el-option
                  v-for="(item, index) in muteReasonList"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col v-if="data.reasonType === 1" :span="16">
              <el-input
                v-model="data.forbiddenReason"
                size="small"
                placeholder="请在此填写描述信息，用于后台查看，未填写则自动获取第一条禁言原因"
              />
            </el-col>
          </el-form-item>
          <el-form-item label="封禁时间" v-if="data.forbiddenStatus === 2">
            <el-col :span="7">
              <el-select v-model="data.muteType" size="small" @change="handleChangeMuteType">
                <el-option v-for="(item, index) in muteTypeList" :key="index" :label="item.label" :value="item.value" />
              </el-select>
            </el-col>
            <template v-if="data.muteType === 1">
              <el-col :span="5">
                <el-form-item label=" " prop="muteDay" label-width="20px">
                  <el-input-number v-model="data.muteDay" size="small" :min="1" />
                </el-form-item>
              </el-col>
              <el-col :span="2" class="text-day">
                <span>天</span>
              </el-col>
            </template>
          </el-form-item>
        </template>
        <!-- 禁言 -->
        <template v-if="currentForbiddenStatus === 2">
          <template v-if="data.forbiddenStatus === 2">
            <el-form-item label="禁言模块">
              <el-checkbox-group v-model="data.checkedModules" @change="handleChangeCheckModules">
                <el-checkbox
                  v-for="item in muteModulesList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="封禁原因">
              <el-col :span="16">
                <el-input v-model="data.forbiddenReason" size="small" disabled />
              </el-col>
            </el-form-item>
            <el-form-item label="封禁时间">
              <el-col :span="3">
                <el-input v-model="data.muteDay" disabled />
              </el-col>
              <el-col :span="4" :offset="1">
                <span>天</span>
              </el-col>
              <el-col :span="8" class="text-day">
                <span>{{ data.forbiddenEndTime | formatDate }} 到期解禁</span>
              </el-col>
            </el-form-item>
          </template>
          <template v-if="data.forbiddenStatus === 3">
            <el-form-item label="封禁原因">
              <el-col :span="7">
                <el-select v-model="data.reasonType" size="small">
                  <el-option
                    v-for="(item, index) in muteReasonList"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-col>
              <el-col v-if="data.reasonType === 1" :span="16">
                <el-input
                  v-model="data.forbiddenReason"
                  size="small"
                  placeholder="请在此填写描述信息，用于后台查看，未填写则自动获取第一条禁言原因"
                />
              </el-col>
            </el-form-item>
          </template>
        </template>
        <!-- 封号 -->
        <template v-if="currentForbiddenStatus === 3">
          <el-form-item label="封禁状态">
            <el-radio v-model="data.forbiddenStatus" :label="3" disabled>封号</el-radio>
          </el-form-item>
          <el-form-item label="封禁原因">
            <el-col :span="16">
              <el-input v-model="data.forbiddenReason" size="small" disabled />
            </el-col>
          </el-form-item>
          <el-form-item label="解除封号">
            <el-radio v-model="data.isLift" label="1">是</el-radio>
            <el-radio v-model="data.isLift" label="2">否</el-radio>
          </el-form-item>
        </template>
      </el-form>
      <div class="btn">
        <el-button @click="onClickCloseHandle">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {muteTypeList, muteReasonList, banList, muteModulesList} from "@/utils/env";
import {formatDate} from "@/utils/mUtils";
export default {
  filters: {
    formatDate(val) {
      return formatDate(val, "YYYY-MM-DD HH:mm:ss");
    }
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    currentForbiddenStatus: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      muteTypeList: muteTypeList,
      muteReasonList: muteReasonList,
      rule: {
        muteDay: {required: true, message: "请输入禁言天数", trigger: "blur"},
        checkedModules: {required: true, message: "请选择禁言模块", trigger: "blur"}
      },
      banList: banList,
      muteModulesList: muteModulesList
    };
  },
  methods: {
    onClickCloseHandle() {
      this.$emit("changeDialogVisible", false);
    },
    handleSubmit() {
      this.$emit("submitData");
    },
    handleChangeMuteType(val) {
      this.$emit("changeMuteType", val);
    },
    // 校验
    validator() {
      let flag = false;
      this.$refs["form"].validate((boolean, object) => {
        if (boolean) {
          // 校验通过
          flag = true;
        } else {
          // this.$message.error(object[Object.keys(object)[0]][0].message)
        }
      });
      return flag;
    },
    handleChangeCheckModules(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="less" scoped>
.mute-user-dialog {
  .text-day {
    margin-left: 10px;
  }

  .btn {
    text-align: center;
    margin: 40px 0 0;
  }
}
</style>
