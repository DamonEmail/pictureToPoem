<template>
  <div class="header">
    <div class="search_box">
      <div class="logo">测试LOGO</div>
      <a-input-search
        v-model:value="value"
        style="width: 300px"
        placeholder="请输入"
        enter-button
        @search="onSearch"
      />
    </div>
    <div
      class="navbarList chosedList"
      v-for="item in navbarList"
      :key="item.title"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
const navbarList = [
  {
    title: "手机流量",
    url: "/home/activeTel",
  },
];
const value = ref(""); // 搜索内容

const emits = defineEmits(["search"]);
</script>

<style lang="less" scoped>
.header {
  height: 150px;
  background-color: black;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  .search_box {
    width: 60%;
    margin: 0 auto;
    height: 60px;
    display: flex;
    justify-content: space-between;
    .logo {
      color: white;
    }
  }
  .navbarList {
    color: white;
    width: 60%;
    margin: 0 auto;
    cursor: pointer;
  }
  .chosedList {
    color: #1677ff;
    text-decoration: underline;
  }
}
</style>
