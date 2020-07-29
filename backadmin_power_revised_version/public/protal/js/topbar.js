//头部数据
var topbarData = [
  "XAUUSD,147461,1805.37,1805.60,1810.51,1809.97,1813.29,1804.49,0,2020/07/16 11:37:07,-4.60,-0.25%,1,3",
  "_DXY,158764,96.09,96.10,95.99,96.00,96.16,95.96,0,2020/07/16 11:36:54,+0.09,+0.09%,1,3",
  "USDCNH,147313,6.99817,6.99917,6.98328,6.98287,7.00240,6.98118,0,2020/07/16 09:37:04,+0.01530,+0.22%,1,1",
  "EURUSD,147284,1.13964,1.13976,1.14118,1.14112,1.14181,1.13923,0,2020/07/16 09:37:07,-0.00148,-0.13%,1,1",
  "GBPUSD,147286,1.25345,1.25362,1.25882,1.25885,1.25927,1.25342,0,2020/07/16 09:37:07,-0.00540,-0.43%,1,1",
  "USDJPY,147289,107.013,107.028,106.909,106.911,107.027,106.826,0,2020/07/16 09:37:07,+0.102,+0.10%,1,1",
];
var newTopbarData = [];
topbarData.forEach((item) => {
  var arr = item.split(",");
  var str = {
    kindName: arr[0],
    kindId: +arr[1],
    sellPrice: +arr[2],
    buyPrice: +arr[3],
    openPrice: +arr[4],
    closePrice: +arr[5],
    highest: +arr[6],
    lowest: +arr[7],
    spread: +arr[8],
    dataTime: arr[9],
    changePrice: arr[10],
    changePercent: arr[11],
    origin: +arr[12],
    dataTimeZone: +arr[13],
  };
  newTopbarData.push(str);
});

var topbar = "";
newTopbarData.forEach((item) => {
  topbar += template("topbar-item", { data: item });
});

document.querySelector(".topbar").innerHTML = topbar;
