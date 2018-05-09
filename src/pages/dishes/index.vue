<template>
<div class="page" style="min-height:100%">
  <h4 class="text-center">菜单全系列</h4>
  <div class="weui-flex">
     <div class="nav_left">
         <div class="weui-tab">
            <div class="weui-navbar column">
                <div v-for="(tab,index) in tabs" :key="index" @click="showPanel(index)" :class="index==currentIndex?'weui-bar__item_on':''" class="weui-navbar__item" >
                    {{tab}}
                </div>
            </div>
           
        </div>
     </div>
     <div class="weui-flex__item">
          <div v-for="(tab,index) in tabs" :key="index" v-if="index==currentIndex" class="weui-tab__panel">
              <foodlist :data="data"></foodlist>
          </div>
     </div>
  </div>
</div>
</template>

<script>
import foodlist from "@/components/items/foodlist";
export default {
  data() {
    return {
      tabs: [],
      currentIndex: 1,
      data: []
    };
  },
  mounted() {
    this.getTabs();
    this.moockData();
  },
  methods: {
    getTabs() {
      this.tabs = ["推荐", "本周优惠", "甜品", "炒菜", "饮料", "小菜"];
    },
    showPanel(index) {
      this.currentIndex = index;
    },
    moockData() {
      const _this = this;
      _this.data = [];
      for (let i = 0; i < 10; i++) {
        _this.data.push({
          title: "菜" + i,
          id: i,
          imgUrl:
            "http://7xkkc0.media1.z0.glb.clouddn.com/image/food/TIM20180430230753.png",
          tags: [
            {
              text: "火辣",
              color: "danger",
              size: "small"
            },
            {
              text: "重口味",
              color: "danger",
              size: "small"
            }
          ],
          price: i * i + 10,
          desc: "very yummy ,welcome!"
        });
      }
    }
  },
  components: {
    foodlist
  }
};
</script>

<style scoped>
.nav_left {
  width: 25%;
}
.row {
  flex-direction: row;
}
.column {
  flex-direction: column;
}
.pin_left {
  position: fixed;
  top: 10px;
  left: 0px;
  z-index: 10;
}
.layout_scroll {
  overflow-y: auto;
}
</style>
