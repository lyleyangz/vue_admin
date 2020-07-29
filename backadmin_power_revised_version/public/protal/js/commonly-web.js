//常用网址数据
var commonlyWebData = [
  {
    name: "FX110网",
    url: "http://fx110000.com/",
    priority: 20,
    logo: "./pic.jpg",
  },
  {
    name: "阿萨德",
    url: "https://fanyi.baidu.com",
    priority: 111,
    logo: "./pic.jpg",
  },
  {
    name: "阿萨德",
    url: "https://fanyi.baidu.com",
    priority: 111,
    logo: "./pic.jpg",
  },
  {
    name: "阿萨德",
    url: "https://fanyi.baidu.com",
    priority: 111,
    logo: "./pic.jpg",
  },
  {
    name: "阿萨德",
    url: "https://fanyi.baidu.com",
    priority: 111,
    logo: "./pic.jpg",
  },
  {
    name: "简书",
    url: "https://www.jianshu.com/",
    priority: 22,
    logo: "./pic.jpg",
  },
  {
    name: "111",
    url: "https://fanyi.baidu.com/",
    priority: 111,
    logo: "./pic.jpg",
  },
  {
    name: "百度翻译",
    url: "https://fanyi.baidu.com",
    priority: 3,
    logo: "./pic.jpg",
  },
];

var commonlyWeb = "";
commonlyWebData.forEach((item) => {
  commonlyWeb += template("commonly-item", { data: item });
});

document.querySelector(".content-commonlyweb").innerHTML = commonlyWeb;
