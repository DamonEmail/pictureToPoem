<template>
  <div class="main">
    <div class="box-contain">
      <div v-for="item in boxes" :key="item.name">
        {{ item.name }}
      </div>
    </div>
    <div class="footer">
      <a-pagination
        v-model:current="current1"
        show-quick-jumper
        :total="500"
        @change="onChange"
      />
      <div class="sign">xxxxx备案</div>
    </div>
  </div>
</template>

<script setup name="activeTel">
import { ref, reactive } from "vue";
const current1 = ref(1);
const current2 = ref(2);
const onChange = (pageNumber) => {
  console.log("Page: ", pageNumber);
};
const boxes = ref([
  { name: 1 },
  { name: 2 },
  { name: 3 },
  { name: 4 },
  { name: 5 },
  { name: 6 },
  { name: 7 },
  { name: 8 },
  { name: 88 },
  { name: 72 },
  { name: 81 },
  { name: 711 },
  { name: 822 },
  { name: 8833 },
  { name: 7244 },
  { name: 8155 },
  { name: 766 },
  { name: 877 },
]);
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  .box-contain {
    width: 100%;
    flex: 1;
    overflow-y: auto;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-content: flex-start;
    > div {
      margin-left: 40px;
      width: 220px;
      height: 180px;
      display: inline-block;
      border: 1px solid black;
      margin-top: 30px;
      border-radius: 4px;
    }
  }
  .footer {
    height: 150px;
    width: 100%;
    // background-color: aquamarine;
    text-align: center;
    position: relative;
    .sign {
      height: 50px;
      width: 100%;
      position: absolute;
      bottom: 0;
      text-align: center;
    }
  }
}
</style>
