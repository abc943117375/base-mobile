<template>
  <div class="mylist-item d-flex jc-start ai-center" :class="className" @click="itemClick">
    <div class="left">
      <slot name="left-slot"></slot>
    </div>
    <div class="center d-flex flex-column jc-center flex-1 p-2">
      <p class="title text-black fs-md">{{config.processStarterName}}</p>
      <p class="fs-sm text-gray-3">{{config.processName}}</p>
      <p
        v-if="config.timeInterval"
        class="time-interval text-gray-3 fs-sm text-ellipsis"
      >[{{config.processName.slice(0,2)}}时间] {{config.timeInterval}}</p>
      <p class="time text-ellipsis text-gray-3 fs-sm">{{config.processStartTime}}</p>
    </div>
    <div class="right">
      <slot name="right-slot"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    className: { type: String, default: "" },
    config: { type: Object, default: () => ({}) }
  },
  data() {
    return {};
  },
  methods: {
    itemClick() {
      this.$emit("itemClick", this.config);
    }
  }
};
</script>

<style lang="scss">
.mylist-item {
  .center {
    overflow: auto;
    box-sizing: border-box;
  }
}
</style>