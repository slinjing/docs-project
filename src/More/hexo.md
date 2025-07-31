---
lang: zh-CN
title: Hexo 博客部署
---

Hexo 是一个快速、简洁且高效的博客框架，它能够将 Markdown 文档渲染成 HTML，可以在很短的时间内创建出网站的静态内容，官网：[https://hexo.io](https://hexo.io)。


> [!TIP] 安装前提：
> 需要先安装 Node.js 环境和 Git 环境，Node.js 是一个能够在服务器端运行 JavaScript 代码的环境，Git 是版本控制工具。





## 安装 Node.js
Windows系统系统参考Windows安装Node.js。

Linux系统系统参考Linux安装Node.js。


## 安装 Git
- Windows 系统前往 [Git 官网](https://git-scm.com/) 下载安装包安装即可，安装完成后在命令行执行 `git --version` 命令返回如下内容说明成功。
```shell
$ git --version
git version 2.40.0.windows.1
```

- Linux 平台安装 Git 使用 apt 或 yum 即可，以下命令二选一。
```shell
$ sudo apt-get install git-core 
$ sudo yum install git-core 
```

## 安装 Hexo
以上准备工作完成后，直接使用 npm 安装 Hexo，这里使用的环境是 windows。
```shell
$ npm install -g hexo-cli
```

> [!TIP] 注意：
> 如果安装速度过慢，可以先将 npm 的下载源更换为国内的淘宝镜像，然后再进行安装。
```shell
$ npm config set registry https://registry.npm.taobao.org
```

安装完成后在命令行执行 `hexo --version` 命令，返回如下内容则说明没问题。
```shell
$ hexo --version
hexo-cli: 4.3.2
os: win32 10.0.19045 undefined
node: 20.15.0
acorn: 8.11.3
ada: 2.7.8
ares: 1.28.1
base64: 0.5.2
brotli: 1.1.0
cjs_module_lexer: 1.2.2
cldr: 45.0
icu: 75.1
llhttp: 8.1.2
modules: 115
napi: 9
nghttp2: 1.61.0
nghttp3: 0.7.0
ngtcp2: 1.1.0
openssl: 3.0.13+quic
simdutf: 5.2.8
tz: 2024a
undici: 6.13.0
unicode: 15.1
uv: 1.46.0
uvwasi: 0.0.21
v8: 11.3.244.8-node.23
zlib: 1.3.0.1-motley-7d77fb7
```

## 初始化博客
Hexo 安装完成后，先使用 `hexo init hexo-blog` 命令来创建一个专门保存博客项目的文件夹。

> [!TIP] 说明：
> 该文件夹会在当前目录生成，如果想把文件夹放到其他路径，先切换到指定路径再执行命令，该命令会从 github 上克隆博客项目和默认的主题。
```shell
$ hexo init hexo-blog
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
INFO  Install dependencies
INFO  Start blogging with Hexo!
```
此时 Hexo 就初始化成功了，切换到博客目录下，可以看到会生成一堆文件和目录。

> [!TIP] 说明：
> _config.yml：是博客项目的配置文件；   
package.json：是项目的依赖项文件；   
scaffolds：保存了 Markdown 文件的模板，也就是向新添加的 Markdown 文件中默认填充的内容；   
source：目录下有一个名为 _post 的目录，将编写好的 Markdown 文件放到该目录，就可以利用 Hexo 将 Markdown 文件处理成博客的静态页面，生成的静态页面将置于 public 目录下；
themes：保存了博客使用的主题。

通过 `npm install` 命令来安装 `package.json` 中的依赖：
```shell
$ npm install
```
通过 `hexo generate` 命令生成博客静态文件：
```shell
$ hexo generate
```

最后启动服务，启动命令 `hexo server`，默认情况下，访问地址为本机的 4000 端口：
```shell
$ hexo server
```
<!-- ![hexo博客](/hexo.png) -->
此时已经完成了博客框架框架的搭建，接下来更换一个适合自己的主题。

## 更换主题
在 [主题页面](https://hexo.io/themes/) 寻找适合自己的主题，主题一般都有自己的说明文档，这里以 butterfly 主题为例，也可直接前往 [butterfly github地址](https://github.com/jerryc127/hexo-theme-butterfly) 下载。下载后将主题放到博客项目的 `themes` 目录下，然后修改配置文件 `_config.yml` 文件如下。
```yaml
......
theme: butterfly # 这里填主题文件夹的名称
```
修改完成重启服务后就可以看到效果了，但是此时页面也比较单调，想要更改一些功能和配置可以参考 [butterfly 文档](https://butterfly.js.org/categories/Docs%E6%96%87%E6%AA%94/)。

## GitHub Pages 部署

当完成以上步骤后现在就可以开始部署博客了，这里选择使用 GitHub Pages 部署，主要优点是免费，当然也可以部署到自己的服务上。

第一步在 GitHub 上创建名为 `github用户名.github.io` 的仓库，然后将 Hexo 项目中的文件 Push 到仓库中。
```shell
$ git add .
$ git commit -m "update"
$ git remote add origin https://github.com/slinjing/slinjing.github.io.git
$ git branch -M main
$ git push -u origin main
```


Push 成功后开启 GitHub Pages 并修改部署文件，点击 --> Settings --> Pages 把 Build and deployment 下的 Ddploy form a branch 修改为 GitHub Actions。

创建 `.github/workflows/pages.yml` 文件，官方示例如下：
```yaml
name: Pages

on:
  push:
    branches:
      - main # default branch

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          # If your repository depends on submodule, please see: https://github.com/actions/checkout
          submodules: recursive
      - name: Use Node.js 20
        uses: actions/setup-node@v4
        with:
          # Examples: 20, 18.19, >=16.20.2, lts/Iron, lts/Hydrogen, *, latest, current, node
          # Ref: https://github.com/actions/setup-node#supported-version-syntax
          node-version: "20"
      - name: Cache NPM dependencies
        uses: actions/cache@v4
        with:
          path: node_modules
          key: ${{ runner.OS }}-npm-cache
          restore-keys: |
            ${{ runner.OS }}-npm-cache
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Upload Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./public
  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> [!TIP] 说明：
> 将文件中的 20 修改为自己的 Node.js 版本，修改内容重新 push 后就会进行自动部署，点击 Actions 查看部署进度。

部署完成后通过：`https://github用户名.github.io/` 访问。