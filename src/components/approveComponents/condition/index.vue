<template>
  <div class="condition bg-primary">
    <div class="d-flex jc-around ai-center item">
      <div class="left" @click="Click(1)">
        <span class="text-white fs-md pb-1" :class="showPicker &&index===1 ? 'border-3' : ''">
          全部
          <img
            v-show="!showPicker"
            :src="require('@/assets/images/approve-icon/my-application/xia_icon@2x.png')"
            alt
          />
          <img
            v-show="showPicker && index===1"
            :src="require('@/assets/images/approve-icon/my-application/shang_icon@2x.png')"
            alt
          />
        </span>
      </div>
      <div class="right" @click="Click(2)">
        <span class="text-white fs-md pb-1" :class="showPicker && index===2 ? 'border-3' : ''">
          流程
          <img
            v-show="!showPicker"
            :src="require('@/assets/images/approve-icon/my-application/xia_icon@2x.png')"
            alt
          />
          <img
            v-show="showPicker && index===2"
            :src="require('@/assets/images/approve-icon/my-application/shang_icon@2x.png')"
            alt
          />
        </span>
      </div>
    </div>
    <!-- 弹出的选择器 -->
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import {
  Picker as vanPicker,
  Popup as vanPopup,
  field as vanField
} from "vant";
export default {
  components: {
    vanField,
    vanPopup,
    vanPicker
  },
  data() {
    return {
      value: "",
      showPicker: false,
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      index: 0
    };
  },
  methods: {
    Click(index) {
      this.index = index;
      this.showPicker = !this.showPicker;
    },
    onConfirm(value, index) {
      this.value = value;
      this.showPicker = false;
      this.$emit("change", { value, index });
    }
  }
};
</script>

<style lang="scss">
.condition {
  height: 1rem;
  .item {
    img {
      height: 8px;
      width: 8px;
    }
    .border-3 {
      border-bottom: 3px solid #fff;
    }
  }
}
</style>