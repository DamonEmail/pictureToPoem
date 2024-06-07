<template>
  <div class="header">
    <Header></Header>
  </div>
  <div class="route">
    <NuxtPage :page-key="(route) => route.fullPath" />
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
</script>

<style lang="less" scoped>
.route {
  width: 80%;
  min-width: 900px;
  background-color: aqua;
  margin: 0 auto;
  flex: 1;
}
</style>
