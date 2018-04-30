<template>
  <div class="weui-panel weui-panel_access">
  <div class="weui-panel__bd">
        <a v-for="(item,index) in data" :key="index" class="weui-media-box" :class="weui_media_type" v-bind:style="{height: height + 'rpx'}" href="javascript:;">
            <div class="weui-cell__hd">
              <img :src="item.imgUrl" alt="" class="imgStyle" v-bind:style="{height: (height-2) + 'px' , width: (height-2)+'px'}">
              </div>
            <div class="weui-cell__bd">
              <h4 class="weui-media-box__title">{{item.title}}</h4>
              <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，。</p>
            </div>
            <span class="weui-cell__ft"></span>
        </a>
  </div>
 </div>
</template>

<script>
export default {
  name: "itemList",
  data() {
    return {
      weui_media_type: ""
    };
  },
  props: {
    height: {
      default: 40,
      type: Number
    },
    size: {
      type: String,
      default: "normal"
    },
    data: Array
  },
  created() {
    this.get_weui_media_type();
  },
  methods: {
    get_weui_media_type() {
      let _this = this;
      _this.weui_media_type =
        _this.size === "small"
          ? "weui-media-box_small-appmsg"
          : "weui-media-box_appmsg";
    }
  }
};
</script>

<style>
.imgStyle {
  width: 60px;
  height: 60px;
  margin-right: 5px;
  display: block;
}
</style>
