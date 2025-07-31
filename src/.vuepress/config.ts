import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/docs-project/",

  lang: "zh-CN",
  title: "主页",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // 字体
  // head: [
  //   // ... 其他 head 配置

  //   // 预连接到字体服务
  //   ["link", { rel: "preconnect", href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest", crossorigin: "anonymous" }],
  //   // 导入 LXGW Wenkai 字体样式表
  //   ["link", {
  //     rel: "stylesheet",
  //     href: "https://cdn.jsdelivr.net/npm/@callmebill/lxgw-wenkai-web@latest/style.css"
  //   }],
  // ],
});
