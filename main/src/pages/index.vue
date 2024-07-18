<template>
  <div class="ma-content-block p-4"></div>
</template>
<script>
export default {
  name: "homePage",
  middleware({ store, route, redirect, params, query, req, res }) {
    console.log(123);
    redirect("/home/activeTel"); // 默认跳转页面的路由
  },
};
</script>

<!-- <script setup>
import { ref, reactive } from 'vue'

</script>

<style lang='less' scoped>

</style> -->
