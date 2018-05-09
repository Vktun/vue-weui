<template>
    <div class="weui-actionsheet" :class="show?'weui-actionsheet_toggle':''">
        <div class="weui-flex">
            <div class="weui-flex__item shopcar_left">
                <div class="weui-flex">
                    <image class="shopcar_icon"  mode="aspectFill" src="http://7xkkc0.media1.z0.glb.clouddn.com/shopcar.jpg"/>
                    <div class="weui-flex__item sum">
                        合计：<div class="amount">100</div>￥
                    </div>
                </div>
            </div>
            <div class="weui-flex__item shopcar_right"><div class="payBtn">去支付</div></div>
        </div>
    </div>
</template>

<script>
export default {
  name: "shopcar",
  data() {
    return {};
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

<style scoped>
.payBtn {
  height: 48px;
  line-height: 48px;
  background-color: #e6a23c;
  font-size: larger;
  text-align: center;
  color: #fff;
  border-color: #e6a23c;
}
.shopcar_left {
  /* background-color: #606266; */
  background-color: #fff;
}
.shopcar_icon {
  width: 48px;
  height: 48px;
}
.shopcar_right {
  background-color: #e6a23c;
}
.sum {
  padding-left: 20px;
  height: 48px;
  line-height: 48px;
}
.amount {
  color: red;
  display: inline-block;
}
</style>
