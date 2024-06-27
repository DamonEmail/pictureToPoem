<template>
  <div class="header">
    <!-- <div class="search_box"> -->
    <div class="logo">便宜购</div>
    <!-- <div class="search_box">
      
    </div> -->
    <div class="navbarList">
      <div
        class="listItem chosedList"
        v-for="item in navbarList"
        :key="item.title"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- <a-tab-pane key="2" tab="Tab 2" disabled>Tab 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Tab 3</a-tab-pane> -->
    <a-input-search
      v-model:value="value"
      style="width: 300px"
      placeholder="请输入"
      enter-button
      @search="onSearch"
    />
    <!-- </div> -->
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
const activeKey = ref("");
const value = ref(""); // 搜索内容

const emits = defineEmits(["search"]);
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 12vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  .search_box {
    width: 30%;
    margin: 0 auto;
    // height: 60px;
    display: flex;
    justify-content: space-between;
    .logo {
      color: #8a919f;
    }
  }
  .navbarList {
    position: relative;
    color: #8a919f;
    width: 60%;
    margin: 0 auto;
    cursor: pointer;
    > div {
      display: inline-block;
      width: 120px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      &:hover {
        color: #1677ff;
        // border-bottom: 2px solid #1677ff;
      }
    }
    .chosedList {
      color: #1677ff !important;
      // text-decoration: underline;
      border-bottom: 2px solid #1677ff;
    }
  }
}
</style>
