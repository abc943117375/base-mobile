<template>
  <div class="approve-bottom-button">
    <div class="container bg-primary d-flex ai-center">
      <div
        class="btnBom text-center d-flex ai-center jc-center fs-lg text-white"
        :style="`background:${leftBackground}`"
        @click="leftClick"
      >{{leftText || '取消'}}</div>
      <div
        class="btnBom text-center d-flex ai-center jc-center fs-md text-white"
        :style="`background:${rightBackground}`"
        @click="rightClick"
      >{{rightText || '确定'}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftBackground: { type: String, default: "#CCCCCC" },
    rightBackground: { type: String, default: "#2172ED" },
    leftText: { type: String, default: "" },
    rightText: { type: String, default: "" }
  },
  data() {
    return {};
  },
  methods: {
    rightClick() {
      this.$emit("rightClick");
    },
    leftClick() {
      this.$emit("leftClick");
    }
  }
};
</script>

<style lang="scss">
$containerSize: 1.5rem;
.approve-bottom-button {
  .container {
    width: 100%;
    height: $containerSize;
    line-height: $containerSize;
    .btnBom {
      width: 49%;
      height: 1.5rem;
      &:nth-child(1) {
        border-right: 2px solid #fff;
      }
    }
  }
}
</style>