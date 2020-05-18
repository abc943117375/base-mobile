<template>
  <div class="card-info">
    <div class="item clearfix" v-for="(item,index) of listData" :key="index">
      <p class="fs-md text-gray mb-1">{{item.name}}</p>
      <p class="w-50 ml-2 fs-md text-black-2">{{item.value}}</p>
      <img
        @click="explanation(item)"
        v-if="item.showRight"
        :src="require('@/assets/images/approve-icon/approve-details/shuoming_icon@2x.png')"
        alt
      />
    </div>
    <div style="height:1.5rem;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        { name: "申请时间", value: "2020-2020-2020", showRight: false },
        { name: "申请时间", value: "2020-2020-2020", showRight: true },
        { name: "申请时间", value: "2020-2020-2020", showRight: true },
        { name: "申请时间", value: "2020-2020-2020", showRight: true },
        { name: "申请时间", value: "2020-2020-2020", showRight: false },
        {
          name: "申请时间 阿加的少部分骄傲白癜风卡死",
          value: "2020-2020-2020阿卡萨丁积分卡交话费卡阿萨德是拉定积分奥拉夫",
          showRight: false
        },
        { name: "申请时间", value: "2020-2020-2020", showRight: false }
        // { name: "申请时间", value: "2020-2020-2020", showRight: false }
      ]
    };
  },
  methods: {
    /**
     * @see 跳转流程说明页面
     */
    explanation(item) {
      this.$emit("explanation", item);
    }
  }
};
</script>

<style lang="scss">
.card-info {
  // test start
  .item {
    width: 100%;
    img {
      width: 0.5rem;
      height: 0.5rem;
      float: right;
    }
  }
  p:nth-child(1) {
    min-width: 20%;
    max-width: 20%;
  }
  p {
    display: block;
    float: left;
  }
  // test end
}
</style>