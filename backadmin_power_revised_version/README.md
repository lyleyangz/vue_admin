#游览器门户项目

**游览器后台管理项目**

## 技术栈

**前端技术栈：** vue2 + vuex + vue-router + webpack + ES6/7 + less + element-ui

## 参考文档

- [vue](https://vuejs.bootcss.com/v2/guide/)：Vue是一套用于构建用户界面的渐进式框架。

- [vuex](https://vuex.vuejs.org/zh/)：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。
 
- [vue-router](https://router.vuejs.org/zh/)：Vue Router 是 Vue.js 官方的路由管理器。
 
- [webpack](https://webpack.js.org/concepts/)：前端模块打包器。
 
- [less](http://lesscss.cn/)：Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。
 
- [element-ui](https://element.eleme.io/)：Element,一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库。

- [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)：这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。


## 前序准备

**运行前准备：**

   由于此项目是基于nodejs的前后端结合项目，你需要进行nodejs的相关准备工作。项目运行之前，请确保系统已经安装以下应用：
   
   (1)、node (8.0 及以上版本)。使用细节，请参考：[node的下载及安装。](https://nodejs.org/en/download/)

##项目结构
	.
	+-- public
    |   +-- favicon.ico         # logo图标
    |   +-- index.html         # Vue入口模板
	+-- src
	|   +--api                  # Api请求接口
	|   +--assets               # 本地静态资源
	|   +--components           # 业务通用组件
	|   +--lang                 # 国际化资源
	|   +--mockjs               # 模拟api请求
	|   +--layout               # 全局使用组件
	|   +--router               # Vue-Router路由配置
	|   +--store                # Vuex状态管理
	|   +--style                # 全局样式和视图样式
	|   +--utils                # 工具库
	|   +--view                 # 业务页面入口和常用模板
	|   +--App.vue              # Vue模板入口
	|   +--element.js           # elementUI按需引用组件
	|   +--main.js              # Vue入口 JS
	|   +--permission.js        # 路由守卫(路由权限控制)
	+-- .browserslistrc         # 兼容的游览器范围
	+-- .env.development	    # vue-cli开发环境变量
    +-- .env.production         # vue-cli生产环境变量
    +-- .eslintignore           # esLint忽略校验的文件
    +-- .eslintrc.js            # esLint配置
    +-- babel.config.js         # babel配置
    +-- Dockerfile              # Docker配置
    +-- nginx.conf              # nginx配置
	+-- package.json            # 依赖包
	+-- package-lock.json       # 保证大伙依赖包一致
	+-- README.md               # 项目说明
	+-- vue.config.js           # vue-cli配置
	+-- webstorm.config.js      # webstorm配置

## 开发：
1. git clone 

1. cd portal-browser-manage-system
 
1. npm install

**本地运行：**

**npm start** 运行之后，会默认打开本地访问路径：http://localhost:8080

**发布：**

**npm run bulid** (生成打包之后的项目文件,此文件主要用于项目部署)。

##常见问题
* 由于墙的原因，npm最好配置淘宝的镜像
```npm
npm config set registry https://registry.npm.taobao.org
```

* 由于image-webpack-loader插件依赖谷歌的安装依赖包，npm install的时候可能一直无响应，ctrl+c结束掉重新npm install就好

* esLint采用默认配置，多配置了几条规则而已，各位不同的编辑器设置好相同的编码风格，以免报太多错误影响开发时间，具体报错详情查阅:
[esLint Rules所有参数](https://eslint.bootcss.com/docs/rules/) ,ctrl+F查找对应逻辑错误，编辑器设置编码风格改正。

##编码规范

###命名
* 文件及目录命名全部采用驼峰命名(静态资源可以用下划线)
```
assets/img/myData/user_order.png
```

### 减少标签数量

* 在编写HTML代码时，需要尽量避免多余的父节点

```html
<!-- good -->
<img class="logo" src="logo.png">

<!-- bad -->
<span class="logo">
    <img src="logo.png">
</span>
```
##css规范
### 缩进

* 使用 `2` 个空格作为一个缩进层级，不允许使用 `2` 个空格或 `tab` 字符。
```css
.selector {
  margin: 0;
  padding: 0;
}
```

### 分号

* 每个属性声明末尾都要加分号

```css
.selector {
  margin: 0;
  padding: 0;
}
```

### 空格

* `:` 与属性值之间需要空格，与属性名之间不需要空格

* 属性值中的 `,` 后需要空格，`,` 前不需要空格

* 选择器 `> + ~` 等前后需要空格

* 选择器与 `{` 之间需要空格


```css
.selector > .wrapper {
  font-family: "Hiragino Sans GB", sans-serif;
  height: 100%;
}
```

### 空行

* 两个选择器属性块之间保留一个空行

```css
.wrapper {
  height: 100%;
}

.selector {
  height: 100%;
}
```

### 换行

* 当一个规则包含多个选择器时，每个选择器声明必须独占一行

* 每个属性定义必须另起一行

* `{` 后需要换行，`}` 前需要换行

```css
.wrapper,
.selector {
  width: 100%;
  height: 100%;
}
```

### 命名

* id 与类名使用小写字母，以中划线 `-` 分隔

```css
.demo-test,
#test-demo {
  width: 100%;
}
```

### 颜色

* 16 进制颜色使用小写字母

* 16 进制颜色尽量使用简写

```css
/* good */
.selector {
  color: #abc;
}

/* bad */
.selector {
  color: #AABBCC;
}
```

### 属性简写

* 支持简写的属性尽量使用简写

```css
/* better */
.selector {
  background: rgba(0, 0, 0, 0.5) url(logo.png) no-repeat center / contain;
}

/* bad */
.selector {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: url(logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
```

##JavaScript规范
### 缩进

* 使用 `2` 个空格做为一个缩进层级，不允许使用 `2` 个空格 或 `tab` 字符

* `switch` 下的 `case` 和 `default` 必须增加一个缩进层级

```javascript
switch (variable) {
  case 1:
    break;
  default:
    break;
}
```

* 对象以缩进的形式书写，不要写在一行

```javascript
// better
let obj = {
  a: 1,
  b: 2
}

// bad
let obj = { a: 1, b: 2 }
```

### 分号

任何语句结尾都需要加分号 `;`

```javascript
do {
    x++;
} while (x < 10);
```

### 空格

* 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格

* 用作代码块起始的左花括号 `{` 前必须有一个空格

* `if / else / for / while / function / switch / do / try / catch / finally` 等关键字后，必须有一个空格

* 在非三目运算符中，`:` 之后必须有空格，之前不允许有空格


```javascript
let len = !arr.length;
if (len) {
  Demo(1, 2);
}

// 函数
function Demo(a, b) {
  let obj = { // 对象
    a: 1
  }
}
```

### 换行

* 变量赋值后需要换行

* 左大括号 `{` 后需要换行，右大括号 `}` 前需要换行

```javascript
let a = true;
if (c) {
  return;
}
```


### 引号

最外层统一使用双引号 `""`

```javascript
let str = "abc";
```

### 命名

* 标准变量使用驼峰命名

```javascript
let strObj = '{a: 1}';
```

* 常量全大写，用下划线连接

```javascript
const MAX_COUNT = 10;
```

* 类 / 构造函数每个单词首字母大写

```javascript
function TextNode(options) {
}
```

* jquery 对象必须以 `$` 开头命名

```javascript
let $body = $("body");
```

### 变量声明

* 变量在使用前必须通过 `let / const` 定义(不要使用var)

* 不要使用未声明的变量，也不要先使用后声明

```javascript
let name = 'MyName';
```

### 对象

对象属性名不需要加引号，有特殊字符除外

```javascript
let obj = {
  name: "test",
  age: 20,
  "max-weight": 60
};
```

### 大括号

`if / else / for / while / do / switch / try / catch` 等关键字后必须有大括号（即使代码块的内容只有一行）

```javascript
if (true) {
  return;
}
```

### undefined

* 永远不要直接使用undefined进行变量判断

* 使用 typeof 和字符串 `'undefined'` 对变量进行判断

```javascript
// good
if (typeof person === "undefined") {
  return;
}

// bad
if (person === undefined) {
  return;
}
```

### 其他

* 用 `===`, `!==` 代替 `==`, `!=`

* debugger 不要出现在生产环境的代码里

* 不要在循环内部声明函数
