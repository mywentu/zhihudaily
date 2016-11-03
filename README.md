# 知乎日报 React.js
## 简介
> 本项目用`react.js`,`redux`,`Material-UI`开发的知乎日报
采用了`Webpack`作为构建工具，`fetch`和`redux-thunk`作为异步抓取

## 主要功能
- 知乎日报每日启动图片
- 夜间模式和日间模式的转换
- 添加中。。

## API
- 知乎日报API使用的是[izzyleung发表的知乎日报 API 分析](https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90)

- 知乎日报图片防盗链使用的是[GaryChangCN](https://github.com/GaryChangCN/zhihu-daily-byVuejs)
服务器提供的图片盗链处理

- UI使用的[Material-UI](http://www.material-ui.com/),目前是React.js开源组件库中最受欢迎的

## React脚手架
本项目使用的脚架是[GuoYongfeng/webpack-dev-boilerplate](https://github.com/GuoYongfeng/webpack-dev-boilerplate)
，我在其webpack中添加了对`scss`的支持。脚手架具体的特性去看大神的Github

## 运行
想要在本地运行,执行以下命令行,执行完后将会自动打开浏览器，就阔以啦。
```ssh
$ git clone http://www.ifajiao.com:14930/wenbin/zhihudaily.git
$ cd react-zhihudaily
$ npm install
$ npm run dev
```
