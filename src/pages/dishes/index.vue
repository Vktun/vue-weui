<template>
<div class="page">
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
              {{tab}}
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
      currentIndex: 1
    };
  },
  mounted() {
    this.getTabs();
  },
  methods: {
    getTabs() {
      this.tabs = ["推荐", "本周优惠", "甜品", "炒菜", "饮料", "小菜"];
    },
    showPanel(index) {
      this.currentIndex = index;
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
</style>
