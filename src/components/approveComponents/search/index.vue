<template>
  <div class="search" id="s">
    <search
      background="#2172EE"
      shape="round"
      :show-action="isShowAction"
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
      @search="onSearch"
    >
      <template #action>
        <div class="right d-flex flex-column jc-center ai-center mt-2" @click="createApplication">
          <img
            :src="require('@/assets/images/approve-icon/my-application/jia_icon@2x.png')"
            alt="加号"
          />
          <span class="fs-sm text-white">新建申请</span>
        </div>
      </template>
    </search>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  components: {
    Search
  },
  props: {
    isShowAction: { type: Boolean, default: false }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.value);
    },
    createApplication() {
      this.$emit("rightClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  /deep/ .van-search__content {
    background: rgba(255, 255, 255, 0.6);
  }
  .right {
    img {
      width: 0.5rem;
    }
    span {
      line-height: 0.6667rem;
    }
  }
}
</style>