<template>
  <div class="main">
    <div class="landscape"></div>
    <div class="filter"></div>
    <canvas class="canvas" width="1920" height="911" ref="canvas"></canvas>
    <RightCircleOutlined
      @click="checkPoem"
      class="checkIcon"
      v-show="!isShowUpload"
    />
    <a-upload
      v-show="isShowUpload"
      capture="false"
      acceot="image/*"
      action="/api/upload"
      :maxCount="1"
      :onChange="fileUploadRes"
      :beforeUpload="uploadFileCheck"
      name="image"
      :show-file-list="false"
    >
      <button class="uploadButton">
        <!-- <upload-outlined></upload-outlined> -->
        上传图片
      </button>
    </a-upload>
    <div class="showPoem" v-show="!isShowUpload">
      <img :src="poemShow?.imgUrl" alt="" />
      <div class="poem">
        <div class="poemHead">
          <div class="poemTitle">{{ poemShow?.title }}</div>
          <div class="poemAuth">{{ poemShow?.author }}</div>
        </div>
        <div class="poemParagraphs">
          <div v-for="item in poemShow?.paragraphs">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";

const isShowUpload = ref(true);
const isLoading = ref(false);
let index = ref(0);
let len = ref(4);
let poemShow = computed(() => {
  if (poemData.value.length == 0) {
    return poemKey;
  } else {
    return poemData.value[index.value];
  }
});
const fileUploadRes = ({ file }) => {
  if (["error", "done"].includes(file.status)) {
    if (file.status == "done") {
      poemData.value.length = 0;
      poemData.value.push(...file.response);
      isShowUpload.value = false;
      // 图片操作
      const reader = new FileReader();
      reader.onload = (e) => {
        poemData.value.forEach((v) => {
          v["imgUrl"] = e.target.result;
        });
        // poemShow["imgUrl"] = e.target.result;
      };
      reader.readAsDataURL(file.originFileObj);
    }
    isLoading.value = false;
  }
};
// 古诗切换
const checkPoem = () => {
  if (index.value < len.value) {
    index.value = index.value + 1;
  } else {
    index.value = 0;
  }
};

const poemData = ref([]);
let poemKey = {
  id: "",
  paragraphs: [],
  title: "",
  author: "",
  imgUrl: null,
};
// const poemShow = reactive({
//   id: "xx",
//   paragraphs: ["xxxxxx", "xxxxx", "xxxxx", "xxxxx"],
//   title: "xxx",
//   author: "xx",
//   imgUrl: null,
// });

// 文件检查
const uploadFileCheck = (file, fileList) => {
  isLoading.value = true;
};

const canvas = ref(null);
let ctx;
let WIDTH, HEIGHT;
let mouseMoving = false;
let mouseMoveChecker;
let mouseX, mouseY;
const stars = [];
const initStarsPopulation = 80;
const dots = [];
const dotsMinDist = 2;
const maxDistFromCursor = 50;
class Star {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 2) + 1;
    const alpha = (Math.floor(Math.random() * 10) + 1) / 10 / 2;
    this.color = `rgba(255,255,255,${alpha})`;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.r * 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  move() {
    this.y -= 0.15;
    if (this.y <= -10) this.y = HEIGHT + 10;
    this.draw();
  }

  die() {
    stars[this.id] = null;
    delete stars[this.id];
  }
}

class Dot {
  constructor(id, x, y, r) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = Math.floor(Math.random() * 5) + 1;
    this.maxLinks = 2;
    this.speed = 0.5;
    this.a = 0.5;
    this.aReduction = 0.005;
    this.color = `rgba(255,255,255,${this.a})`;
    this.linkColor = `rgba(255,255,255,${this.a / 4})`;
    this.dir = Math.floor(Math.random() * 140) + 200;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.shadowBlur = this.r * 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
  }

  link() {
    if (this.id === 0) return;
    const previousDot1 = getPreviousDot(this.id, 1);
    const previousDot2 = getPreviousDot(this.id, 2);
    const previousDot3 = getPreviousDot(this.id, 3);
    if (!previousDot1) return;
    ctx.strokeStyle = this.linkColor;
    ctx.moveTo(previousDot1.x, previousDot1.y);
    ctx.beginPath();
    ctx.lineTo(this.x, this.y);
    if (previousDot2) ctx.lineTo(previousDot2.x, previousDot2.y);
    if (previousDot3) ctx.lineTo(previousDot3.x, previousDot3.y);
    ctx.stroke();
    ctx.closePath();
  }

  move() {
    this.a -= this.aReduction;
    if (this.a <= 0) {
      this.die();
      return;
    }
    this.color = `rgba(255,255,255,${this.a})`;
    this.linkColor = `rgba(255,255,255,${this.a / 4})`;
    this.x += Math.cos(degToRad(this.dir)) * this.speed;
    this.y += Math.sin(degToRad(this.dir)) * this.speed;
    this.draw();
    this.link();
  }

  die() {
    dots[this.id] = null;
    delete dots[this.id];
  }
}

function getPreviousDot(id, stepback) {
  if (id === 0 || id - stepback < 0) return false;
  return dots[id - stepback] || false;
}

function setCanvasSize() {
  WIDTH = document.documentElement.clientWidth;
  HEIGHT = document.documentElement.clientHeight;
  if (canvas.value) {
    canvas.value.setAttribute("width", WIDTH);
    canvas.value.setAttribute("height", HEIGHT);
  }
}

function animate() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  stars.forEach((star) => star.move());
  dots.forEach((dot) => dot.move());
  drawIfMouseMoving();
  requestAnimationFrame(animate);
}

function drawIfMouseMoving() {
  if (!mouseMoving) return;
  if (dots.length === 0) {
    dots[0] = new Dot(0, mouseX, mouseY);
    dots[0].draw();
    return;
  }
  const previousDot = getPreviousDot(dots.length, 1);
  const prevX = previousDot.x;
  const prevY = previousDot.y;
  const diffX = Math.abs(prevX - mouseX);
  const diffY = Math.abs(prevY - mouseY);
  if (diffX < dotsMinDist || diffY < dotsMinDist) return;
  const xVariation =
    (Math.random() > 0.5 ? -1 : 1) *
    (Math.floor(Math.random() * maxDistFromCursor) + 1);
  const yVariation =
    (Math.random() > 0.5 ? -1 : 1) *
    (Math.floor(Math.random() * maxDistFromCursor) + 1);
  const newDot = new Dot(dots.length, mouseX + xVariation, mouseY + yVariation);
  dots.push(newDot);
  newDot.draw();
  newDot.link();
}

function degToRad(deg) {
  return deg * (Math.PI / 180);
}

onMounted(() => {
  if (canvas.value) {
    ctx = canvas.value.getContext("2d");
    setCanvasSize();
    ctx.strokeStyle = "white";
    ctx.shadowColor = "white";
    for (let i = 0; i < initStarsPopulation; i++) {
      stars[i] = new Star(
        i,
        Math.floor(Math.random() * WIDTH),
        Math.floor(Math.random() * HEIGHT)
      );
    }
    ctx.shadowBlur = 0;
    animate();

    window.onmousemove = (e) => {
      mouseMoving = true;
      mouseX = e.clientX;
      mouseY = e.clientY;
      clearInterval(mouseMoveChecker);
      mouseMoveChecker = setTimeout(() => {
        mouseMoving = false;
      }, 100);
    };
  }
});
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #000000 0%, #5788fe 100%);
  .uploadButton {
    position: absolute;
    z-index: 1000;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 60px;
    width: 180px;
    border: none;
    color: white;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    background-image: linear-gradient(210deg, #5ddcff, #3c67e3 55%, #4e00c2);
  }
}
.showPoem {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  img {
    width: 15rem;
    height: 15rem;
    // border: 0.5px solid white;
    border: none;
    border-radius: 3px;
    // @media (max-width: 768px) {
    //       width: calc(80vw - 140px);
    //     }
  }
  .poem {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .poemTitle {
      font-weight: bold;
      font-size: 24px;
    }
    .poemAuth {
      font-size: 15px;
      text-align: right;
    }
    .poemParagraphs {
      font-size: 16px;
    }
  }
}
.canvas {
  position: absolute;
  left: 0;
  top: 0;
}
.landscape {
  // z-index: -1;
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./../assets/image/xkbg.png);
  background-size: 1000px 250px;
  background-repeat: repeat-x;
  background-position: center bottom;
}
@keyframes colorChange {
  0%,
  50% {
    opacity: 0.9;
  }
  50%,
  100% {
    opacity: 0;
  }
}
.filter {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #fe5757;
  animation: colorChange 30s ease-in-out infinite;
  animation-fill-mode: both;
  mix-blend-mode: overlay;
}
.checkIcon {
  position: fixed;
  cursor: pointer;
  right: 15px;
  top: 15px;
  color: white;
  font-size: 2rem;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
}
</style>
