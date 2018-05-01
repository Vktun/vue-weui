<template>
  <div class="weui-panel weui-panel_access">
  <div class="weui-panel__bd">
        <div v-for="(item,index) in data" :key="index" class="weui-media-box" :class="weui_media_type" v-bind:style="{height: height + 'px'}">
            <div class="weui-cell__hd">
              <img :src="item.imgUrl" :mode="mode" :lazy-load="lazy_load" alt="" class="imgStyle" v-bind:style="{height: height + 'px' , width: height+'px'}">
              </div>
            <div class="weui-cell__bd">
              <h4 class="weui-media-box__title">{{item.title}}</h4>
               <p v-if="item.tags && item.tags.length>0" class="weui-media-box__desc">
                  <tag v-for="(t,i) in item.tags" :key="i" :text="t.text" :size="t.size" :type="t.color"></tag>
               </p>
              <p class="weui-media-box__desc"> {{item.desc}}</p>
            </div>
            <button class="pull-right weui-btn weui-btn_mini weui-btn_primary" @click="showChart">+</button>
        </div>
        <mask :show="maskShow"></mask>
  </div>
 </div>
</template>

<script>
import tag from "@/components/tag";
import mask from "@/components/mask";
export default {
  name: "itemlist",
  data() {
    return {
      weui_media_type: "",
      maskShow: false
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
    data: Array,
    mode: {
      default: "scaleToFill",
      type: String
    },
    lazy_load: {
      default: false,
      type: Boolean
    }
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
    },
    showChart() {
      this.maskShow = true;
    }
  },
  components: {
    tag,
    mask
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
.weui-tag {
  margin-left: 5px;
}
</style>
