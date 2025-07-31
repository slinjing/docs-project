---
lang: zh-CN
title: 快速使用 theme-hope
---
记录使用 theme-hope 主题运行 vuepress 项目。

## 运行环境
vuepress 运行需要依赖 Node.js 环境，点击 [官网](https://nodejs.org/zh-cn/) 中的下载按钮。下载对应操作系统的安装包之后，运行安装包，保持所有默认设置，一路下一步即可。安装 Node.js 之后，在终端中输入以下命令能成功返回版本信息即可。
::: code-tabs#shell

@tab node.js

```bash
C:\Users\Administrator>node -v
v22.17.0
```

@tab npm

```bash
C:\Users\Administrator>npm -v
11.4.2
```
:::


除此之外还需要一个代码编辑器来编辑你的项目，推荐使用 VS Code 来编写和运行你的 VuePress 项目。在 [下载页面](https://code.visualstudio.com/) 中点击左侧的蓝色按钮完成下载。双击安装包打开，在安装选项中建议全新所有选项。

## 创建项目
选择一个合适的项目路径，建议在纯英文目录下创建。在选定的文件夹中打开终端，执行如下命令之一。
::: code-tabs#shell

@tab pnpm

```bash
pnpm create vuepress-theme-hope my-docs
```

@tab yarn

```bash
yarn create vuepress-theme-hope my-docs
```

@tab:active npm

```bash
npm init vuepress-theme-hope@latest my-docs
```
:::


my-docs 是一个参数，代表 VuePress Theme Hope 项目的文件夹名称，如果你有需求，你可以更改此参数来使用一个新文件夹名称。


如果你在模板初始化成功后选择立即启动开发服务器，稍等片刻后，你就可以在浏览器地址栏输入 localhost:8080/ 访问开发服务器了。



## 常用命令
```shell
npm run docs:dev 启动开发服务器
npm run docs:build 构建项目并输出
npm run docs:clean-dev 清除缓存并启动开发服务器
```

## 升级版本
```shell
npx vp-update
```

## 添加主题

如果需要在已有项目中添加 theme-hope 主题，使用以下命令。
```shell
npm create vuepress-theme-hope add .
```

## 参考
https://theme-hope.vuejs.press/zh/