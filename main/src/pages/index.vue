<template>
  <div class="mainPage night">
    <navbar></navbar>
    <!-- 样式元素 -->
    <div class="moon">
      <span class="crater"></span>
      <span class="crater"></span>
      <span class="crater"></span>
      <span class="crater"></span>
    </div>
    <div class="ground">
      <div class="rock"></div>
      <div class="rock"></div>
      <div class="rock"></div>
    </div>
    <div class="shooting">
      <div class="core"></div>
      <div class="trail"></div>
    </div>
    <svg
      class="cactus"
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 714.000000 1280.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <metadata>
        Created by potrace 1.15, written by Peter Selinger 2001-2017
      </metadata>
      <g
        transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M3650 12793 c-269 -30 -610 -116 -848 -215 -221 -91 -504 -249 -633
      -353 -94 -76 -184 -187 -237 -290 -80 -158 -160 -529 -192 -894 -29 -316 59
      -835 227 -1356 31 -93 124 -341 208 -550 298 -742 332 -892 390 -1710 43 -604
      68 -1139 56 -1198 -26 -127 -43 -362 -39 -537 4 -207 10 -197 -96 -160 -314
      108 -504 421 -630 1035 -65 319 -105 644 -146 1205 -40 556 -48 624 -87 770
      -19 76 -27 136 -34 295 -13 276 -30 382 -74 472 -98 199 -323 314 -741 379
      -165 26 -425 26 -509 1 -266 -82 -313 -292 -214 -962 130 -877 148 -1035 199
      -1725 88 -1197 299 -1921 692 -2370 192 -219 481 -416 838 -568 278 -119 519
      -178 807 -198 88 -6 93 -7 88 -28 -2 -11 -13 -71 -25 -132 -20 -110 -73 -312
      -91 -346 -9 -17 -37 -144 -229 -1063 l-109 -520 -99 -260 c-177 -464 -254
      -713 -288 -936 -31 -202 -1 -345 85 -407 120 -87 537 -164 906 -166 168 -1
      207 2 242 16 136 56 390 87 958 118 488 26 720 65 878 147 124 65 144 115 126
      312 -12 128 -40 226 -121 426 -120 295 -140 348 -164 445 -43 167 -49 103 156
      1645 70 531 91 726 112 1075 15 255 15 974 -1 1159 -24 295 -31 581 -21 836 6
      138 13 275 16 306 l6 56 144 46 c115 38 176 51 306 67 519 65 858 173 1158
      370 232 153 338 321 404 641 55 267 71 516 86 1359 5 294 15 623 22 730 20
      326 -7 513 -103 708 -105 216 -283 337 -530 361 -114 12 -224 -3 -364 -50
      -191 -63 -316 -130 -401 -213 -209 -208 -246 -519 -158 -1336 18 -165 20 -431
      4 -511 -26 -127 -82 -229 -154 -278 -49 -34 -239 -131 -315 -161 -47 -18 -50
      -18 -55 -2 -2 9 -19 116 -36 237 -17 121 -45 297 -61 390 -54 312 -71 459
      -104 905 -20 271 -19 397 6 787 18 282 20 395 16 808 -5 498 -8 540 -52 670
      -56 166 -188 389 -290 490 -118 118 -304 195 -540 224 -85 10 -268 12 -345 4z"
        />
      </g>
    </svg>
    <div class="meteor meteor1"></div>
    <div class="meteor meteor2"></div>
    <div class="meteor meteor3"></div>
    <div class="meteor meteor4"></div>
    <div class="meteor meteor5"></div>
    <div class="meteor meteor6"></div>
    <div class="meteor meteor7"></div>
    <div class="meteor meteor8"></div>
    <div class="meteor meteor9"></div>
    <!-- <loading></loading> -->
  </div>
</template>
<script>
export default {
  name: "homePage",
  middleware({ store, route, redirect, params, query, req, res }) {
    // redirect("/home/activeTel"); // 默认跳转页面的路由
  },
};
</script>
<script setup>
import "./index.less";
import { onMounted } from "vue";

// const toUrl = (url) => {};
const bgControl = () => {
  const max_stars = 100;
  const stars = [];
  for (let i = 0; i < max_stars; i++) {
    const star = document.createElement("span");
    const size = Math.floor(Math.random() * 3) + 1;
    star.className = "star";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.background = `rgba(255, 255, 177, ${Math.random()})`;
    star.style.top = Math.ceil(Math.random() * 100) + "%";
    star.style.left = Math.ceil(Math.random() * 100) + "%";
    stars.push(star);
    document.body.appendChild(star);
  }

  for (let j = 0; j < max_stars * 0.6; j++) {
    const star = stars[j];
    star.style.animationName = "glow";
    star.style.animationDelay = Math.floor(Math.random() * 6) + 1 + "s";
    star.style.animationDuration = Math.floor(Math.random() * 6) + 1 + "s";
  }
};
onMounted(() => {
  bgControl();
});
</script>

<style lang="less" scoped>
.meteor {
  position: absolute;
  width: 4px;
  height: 4px;
  opacity: 0;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 5px 5px #d0ce5c;
}
.meteor:after {
  content: "";
  display: block;
  border: 0px solid #d0ce5c;
  border-width: 2px 100px 2px 100px;
  border-color: transparent transparent transparent rgba(255, 255, 255, 0.3);
  transform: rotate(-45deg) translate3d(1px, 1px, 0);
  transform-origin: 0% 0%;
}
.meteor1 {
  top: 2vh;
  left: 30vw;
  animation: meteorflashing 2s infinite linear 1s;
}
.meteor2 {
  top: 22vh;
  left: 65vw;
  background: #d0ce5c;
  animation: meteorflashing 2s infinite linear 1s;
}
.meteor3 {
  top: 70vh;
  left: 40vw;
  background: #d0ce5c;
  animation: meteorflashing 3s infinite linear 2s;
}
.meteor4 {
  top: 86vh;
  left: 50vw;
  animation: meteorflashing 3s infinite linear 1s;
}
.meteor5 {
  top: 30vh;
  right: 16vw;
  background: #d0ce5c;
  animation: meteorflashing 3s infinite linear 3s;
}
.meteor6 {
  top: 64vh;
  left: 80vw;
  background: #d0ce5c;
  animation: meteorflashing 2s infinite linear 1s;
}
.meteor7 {
  top: 46vh;
  left: 92vw;
  background: #d0ce5c;
  animation: meteorflashing 3s infinite linear 2s;
}
.meteor8 {
  top: 18vh;
  left: 64vw;
  animation: meteorflashing 3s infinite linear 1s;
}
.meteor9 {
  top: 29vh;
  right: 31vw;
  background: #d0ce5c;
  animation: meteorflashing 3s infinite linear 3s;
}
@keyframes meteorflashing {
  0% {
    opacity: 0;
    transform: scale(0) translate3d(0, 0, 0);
  }
  50% {
    opacity: 1;
    transform: scale(1) translate3d(-200px, 200px, 0);
  }
  100% {
    opacity: 0;
    transform: scale(1) translate3d(-500px, 500px, 0);
  }
}
</style>
