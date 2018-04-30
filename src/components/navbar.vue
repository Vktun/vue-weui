<template>
    <div class="weui-tab">
            <div class="weui-navbar" :class="column ?'column':'row'">
                <div class="weui-navbar__item weui-bar__item_on">
                    选项一
                </div>
                <div class="weui-navbar__item">
                    选项二
                </div>
                <div class="weui-navbar__item">
                    选项三
                </div>
            </div>
            <div class="weui-tab__panel">

            </div>
        </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  created() {}
};
</script>
 <style lang="less" scoped>
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
</style>

