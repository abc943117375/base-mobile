<!--
  接收参数: 
    config: 组件基本配置 图片路径,标题,文字颜色,背景颜色类型
    badge: 徽章配置 颜色,显示数值
-->
<template>
  <div class="lattice d-flex flex-column ai-center jc-around" :style="myStyle">
    <div class="top" @click="topClick(config)">
      <img v-if="config.icon" :src="config.icon" alt="申请" />
      <span class="word-icon text-center fs-xl text-white" :class="bgColor" v-else>{{word}}</span>
      <i v-if="badge.show" class="debag bg-red text-center text-white">{{badge.value}}</i>
    </div>
    <div class="bottom">
      <p
        class="fs-sm mt-2 flex-1"
        :class="config.class ? 'text-black' : 'text-white'"
        :style="'font-size:'+fontStyle"
      >{{config.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    badge: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({}),
      require: true
    },
    myStyle: { type: String, default: "" },
    fontStyle: { type: String, default: "" }
  },
  data() {
    return {
      word: "",
      bgColor: ""
    };
  },
  created() {
    const { colorNum, title } = this.config;
    let className = "";
    if (colorNum > 0 && colorNum <= 0.33) {
      className = "bg-blue";
    } else if (colorNum > 0.33 && colorNum <= 0.66) {
      className = "bg-danger";
    } else {
      className = "bg-blue-1";
    }
    this.bgColor = className;
    this.word = title.slice(0, 1);
  },
  methods: {
    topClick(config) {
      this.$emit("topClick", config);
    }
  }
};
</script>

<style lang="scss">
$h: 0.35rem; // 右上角徽章大小
$itemSize: 1.4rem; // 图片大小
.lattice {
  .top {
    position: relative;
    height: $itemSize;
    img,
    .word-icon {
      width: $itemSize;
    }
    .debag {
      display: block;
      width: 0.6rem;
      height: $h;
      line-height: $h;
      border-radius: 0.1rem;
      position: absolute;
      top: 0;
      right: 0.1rem;
    }
    .word-icon {
      display: block;
      height: $itemSize;
      line-height: $itemSize;
      border-radius: 50%;
    }
  }
  .bottom {
    p {
      max-width: 2rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>