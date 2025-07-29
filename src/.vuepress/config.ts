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
});
