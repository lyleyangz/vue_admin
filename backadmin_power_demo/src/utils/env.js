
const neditorConfig = {
  autoHeightEnabled: false,
  initialFrameHeight: 300,
  initialFrameWidth: "100%"
};
const accountTypeList = [
  {
    value: 1,
    label: "普通用户"
  },
  {
    value: 2,
    label: "游客"
  }
];
const isMuteList = [
  {
    value: 1,
    label: "正常"
  },
  {
    value: 2,
    label: "禁言"
  },
  {
    value: 3,
    label: "封号"
  }
];
const muteTypeList = [
  {
    value: 1,
    label: "自定义禁言时间"
  },
  {
    value: 2,
    label: "1天"
  },
  {
    value: 3,
    label: "3天"
  },
  {
    value: 4,
    label: "7天"
  },
  {
    value: 5,
    label: "1个月"
  },
  {
    value: 6,
    label: "6个月"
  },
  {
    value: 7,
    label: "1年"
  },
  {
    value: 8,
    label: "永久"
  }
];
const muteReasonList = [
  {
    value: 1,
    label: "自定义禁言原因"
  },
  {
    value: 2,
    label: "违规操作"
  },
  {
    value: 3,
    label: "发送qq，微信等联系方式类广告"
  },
  {
    value: 4,
    label: "发送软广告"
  },
  {
    value: 5,
    label: "侮辱，谩骂平民"
  },
  {
    value: 6,
    label: "恶意刷屏"
  },
  {
    value: 7,
    label: "恶意诽谤平民"
  }
];
const dealerTypeList = [
  {
    value: 1,
    label: "外汇交易商"
  },
  {
    value: 2,
    label: "代理商"
  }
];
const isShowList = [
  {
    value: 1,
    label: "已显示"
  },
  {
    value: 2,
    label: "未显示"
  }
];
const pickerOptions = {
  shortcuts: [
    {
      text: "最近一周",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近一个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit("pick", [start, end]);
      }
    },
    {
      text: "最近三个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit("pick", [start, end]);
      }
    }
  ]
};
const terminalList = [
  {
    value: 1,
    label: "ios"
  },
  {
    value: 2,
    label: "Android"
  }
];
const updateList = [
  {
    value: 1,
    label: "普通更新"
  },
  {
    value: 2,
    label: "强制更新"
  }
];
const auditStatus = [
  {value: 1, label: "未审核"},
  {value: 2, label: "处理中"},
  {value: 3, label: "已处理"}
];
const exhibitionStatus = [
  {value: "", label: "全部"},
  {value: 1, label: "参展中"},
  {value: 2, label: "未发布"},
  {value: 3, label: "报名中"},
  {value: 4, label: "已结束"}
];
const pickerOptionsSimple = {
  disabledDate(time) {
    return time.getTime() > Date.now();
  },
  shortcuts: [
    {
      text: "今天",
      onClick(picker) {
        picker.$emit("pick", new Date());
      }
    },
    {
      text: "昨天",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24);
        picker.$emit("pick", date);
      }
    },
    {
      text: "一周前",
      onClick(picker) {
        const date = new Date();
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", date);
      }
    }
  ]
};
const banList = [
  {
    value: 1,
    label: "禁言"
  },
  {
    value: 2,
    label: "封号"
  }
];
const uploaderUrl = "http://47.107.44.194:8080";
const aliOssUrl = "https://brokersshow.oss-cn-shenzhen.aliyuncs.com/";
const appShareImg = `${process.env.VUE_APP_H5_SHARE_IMAGE}/app-logo.png`;
const downLoadUrl = `${process.env.VUE_APP_H5_SHARE_IMAGE}`;
const rankTypes = [
  {value: 1, label: "钻石"},
  {value: 2, label: "铂金"},
  {value: 3, label: "黄金"},
  {value: 4, label: "普通"}
];
const chatTypeList = [
  {
    value: "",
    label: "全部消息"
  },
  {
    value: 1,
    label: "私聊"
  },
  {
    value: 2,
    label: "聊天室"
  }
];
const muteModulesList = [
  {
    value: 1,
    label: "禁言私聊"
  },
  {
    value: 2,
    label: "禁言直播室"
  },
  {
    value: 3,
    label: "禁言聊天室"
  }
];
const prohibiteLabelList = [
  {
    value: 0,
    label: "所有违禁标签"
  },
  {
    value: 100,
    label: "色情"
  },
  {
    value: 110,
    label: "性感"
  },
  {
    value: 200,
    label: "广告"
  },
  {
    value: 210,
    label: "二维码"
  },
  {
    value: 300,
    label: "暴恐"
  },
  {
    value: 400,
    label: "违禁"
  },
  {
    value: 500,
    label: "涉政"
  },
  {
    value: 600,
    label: "谩骂"
  },
  {
    value: 7500,
    label: "灌水"
  }
];
const badLabel = {
  100: "色情",
  110: "性感",
  200: "广告",
  210: "二维码",
  300: "暴恐",
  400: "违禁",
  500: "涉政",
  600: "谩骂",
  700: "灌水"
};
const roleList = [
  {
    value: 1,
    label: "超级管理员"
  },
  {
    value: 2,
    label: "中级管理员"
  },
  {
    value: 3,
    label: "普通管理员"
  }
];
const ststusList = [
  {
    value: 1,
    label: "启用"
  },
  {
    value: 2,
    label: "禁用"
  }
];
const menuLTypeList = [
  {
    value: "一级",
    label: 1
  },
  {
    value: "二级",
    label: 2
  },
  {
    value: "按钮",
    label: 3
  }
];
const iconList = [
  {
    value: "el-icon-s-custom",
    label: "link"
  },
  {
    value: "el-icon-s-data",
    label: "list"
  },
  {
    value: "el-icon-s-grid",
    label: "user"
  },
  {
    value: "el-icon-s-claim",
    label: "phone"
  },
  {
    value: "el-icon-s-promotion",
    label: "search"
  },
  {
    value: "el-icon-share",
    label: "password"
  },
  {
    value: "el-icon-upload",
    label: "chain"
  },
  {
    value: "el-icon-s-goods",
    label: "menu"
  },
  {
    value: "el-icon-star-on",
    label: "money"
  }
];
// 明文默认密码
const defaultPassword = "abc@123.";
const demoShowList = [
  {
    value: true,
    label: "demo"
  },
  {
    value: false,
    label: "正式"
  }
];
const muteTypeStatus = {
  1: "禁言私聊",
  2: "禁言直播室",
  3: "禁言聊天室"
}
const senderRoleList = [
  {
    value: 1,
    label: "普通用户"
  },
  {
    value: 2,
    label: "参展商客服"
  },
  {
    value: 3,
    label: "官方客服"
  },
  {
    value: 4,
    label: "管理员"
  },
  {
    value: 5,
    label: "运营账号"
  },
];
const h5Token = "96a9e2056cfe4b0abb857233fdcfb5b3";
export {
  neditorConfig,
  accountTypeList,
  isMuteList,
  muteTypeList,
  muteReasonList,
  dealerTypeList,
  isShowList,
  pickerOptions,
  auditStatus,
  exhibitionStatus,
  pickerOptionsSimple,
  terminalList,
  updateList,
  uploaderUrl,
  rankTypes,
  aliOssUrl,
  banList,
  chatTypeList,
  appShareImg,
  muteModulesList,
  downLoadUrl,
  prohibiteLabelList,
  badLabel,
  roleList,
  ststusList,
  menuLTypeList,
  iconList,
  defaultPassword,
  demoShowList,
  muteTypeStatus,
  senderRoleList,
  h5Token
};
