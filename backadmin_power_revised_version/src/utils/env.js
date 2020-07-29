const appUrl = process.env.VUE_APP_BASE_API; // development和production环境是不同的
const statusTest = {0: "全部", 1: "未审核", 2: "已审核", 3: "已处理"};
const platFormNature = {0: "默认", 1: "外汇交易商", 2: "资金盘", 4: "虚假交易商"};
const operatingStatus = {
  0: "不显示",
  1: "暂停中国区运营",
  2: "立案侦查",
  3: "投诉",
  4: "欠薪",
  5: "已停业",
  6: "超限经营",
  7: "无监管",
  8: "套牌监管",
  9: "已潜逃",
  10: "黑平台",
  11: "普通注册",
  12: "破产清偿",
  13: "虚假宣传"
};
const certificationStatus = {
  0: "未认证",
  1: "官方旗舰认证",
  2: "行骗中",
  3: "已潜逃",
  5: "企业代理",
  6: "个人代理"
};
const regulatoryLevel = {
  1: "C",
  2: "B",
  3: "A",
  4: "AA",
  5: "AAA"
};
const regulatoryStatus = {
  1: "监管中",
  2: "注册中",
  3: "注销中",
  4: "已注销",
  5: "协会注册",
  6: "普通注册",
  7: "不监管外汇",
  8: "岛国监管",
  9: "套牌监管",
  10: "监管过期",
  11: "无效监管",
  12: "无监管",
  13: "超限经营",
  14: "自律机构",
  15: "破产清偿",
  16: "已停业",
  17: "欠薪投诉",
  18: "更新中",
  19: "暂停中国区运营",
  20: "暂时吊销"
};
export {appUrl, statusTest, platFormNature, operatingStatus, certificationStatus, regulatoryStatus, regulatoryLevel};
