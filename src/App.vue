<template>
  <div id="app">
    <div v-if="isRouterAlive">
      <transition :name="transitionName" :appear="false">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
      </transition>
      <transition :name="transitionName" :appear="false">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
// import wxjsdk from "./utils/wxjsdk";
export default {
  // mixins: [wxjsdk],
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true,
      transitionName: ""
    };
  },
  watch: {
    //监听路由变化确定使用哪种过渡动画
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (toDepth === fromDepth) {
        this.transitionName = "";
      } else {
        this.transitionName =
          toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  },
  methods: {
    /**
     * @see 重刷页面
     */
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style lang="scss">
@import url("./styles/transition.scss");
</style>
