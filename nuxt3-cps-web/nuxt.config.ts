import VueSetupExtend from "vite-plugin-vue-setup-extend"; // 优化组件自定义名称使用
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/", // 修改地址基础路径
  alias: {
    "@": "/<srcDir>",
  },
  components: [
    // 配置全局组件目录
    {
      path: "~/components",
      global: true,
    },
  ],
  app: {
    // 配置一些头部标签 link引入
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
      // 配置link标签， 设置Href地址
      link: [
        {
          rel: "stylesheet",
          href: "https://192960944.r.cdn36.com/chinesefonts3/packages/jxzk/dist/江西拙楷/result.css", // 字体文件配置cdn
        },
      ],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        // LESS引入变量文件
        less: {
          additionalData: '@import "~/assets/styles/variable.less";', // 引入less变量文件
        },
      },
    },
    plugins: [VueSetupExtend()],
  },
  modules: ["@ant-design-vue/nuxt"],
  css: ["~/assets/styles/global.less"], // 全局样式
});
