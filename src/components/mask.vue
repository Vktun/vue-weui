<template>
   <div>
        <div v-if="show" class="weui-mask" ></div>
        <div class="weui-actionsheet" :class="show?'weui-actionsheet_toggle':''">
            <div class="weui-actionsheet__title">
                <p class="weui-actionsheet__title-text">这是一个标题，可以为一行或者两行。</p>
            </div>
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
                <div class="weui-actionsheet__cell">示例菜单</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" @click="hideMask">取消</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "mask",
  data() {
    return {
      // maskshow: false
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideMask() {
      this.show = false;
    }
  }
};
</script>

<style>

</style>
