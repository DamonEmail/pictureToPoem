<template>
  <!-- 功能元素 -->
  <div class="navBar">
    <div v-for="item in toolBoxes" class="tool-boxes" @click="switchUrl">
      <img class="tool-img" width="55px" src="" alt="" />
      <div class="tool-info">
        <span class="tool-title">{{ item.title }}</span>
        <span class="tool-detail">{{ item.detail }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let a = ref([1]);
const router = useRouter();
let toolBoxes = ref([
  {
    title: "图片匹配诗句",
    detail: "自动识别图片信息生成对应的古诗信息",
    url: "/404",
  },
  {
    title: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    url: "/404",
    detail:
      "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  },
  { title: 3, detail: "xxxx", url: "/404" },
]);
const switchUrl = (url) => {
  navigateTo("/404");
};
</script>

<style lang="less" scoped>
.navBar {
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  width: 50vw; /* 电脑端默认宽度 */
  min-height: 60vh;
  position: absolute;
  box-sizing: border-box;
  padding: 15px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    width: 80vw; // 手机端宽度
  }
  .tool-boxes {
    cursor: pointer;
    display: flex;
    background-color: #fff;
    box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.04),
      100px 100px 80px rgba(0, 0, 0, 0.08);
    height: 8rem;
    border-radius: 5px;
    margin-bottom: 15px;
    width: calc(50vw - 30px);

    @media (max-width: 768px) {
      height: 5rem; // 手机端宽度
      width: calc(80vw - 30px);
    }
    box-sizing: border-box;
    padding: 10px;
    .tool-img {
      border: 1px solid skyblue;
      width: 105px;
      height: 105px;
      margin-right: 10px;
      border-radius: 4px;
      @media (max-width: 768px) {
        width: 80px;
        height: 57px;
      }
    }
    .tool-info {
      display: flex;
      flex-direction: column;
      font-size: 14px;
      width: 100%;
      .tool-title {
        display: block;
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 2px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 23px;
        width: calc(50vw - 165px);
        @media (max-width: 768px) {
          width: calc(80vw - 140px);
        }
      }
      .tool-detail {
        color: grey;
        overflow: hidden;
        word-wrap: break-word;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        width: calc(50vw - 165px);
        @media (max-width: 768px) {
          width: calc(80vw - 140px);
        }
      }
    }
  }
}
</style>
