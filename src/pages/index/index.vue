<template>
<div class="page">
    <div class="page__bd layout">
       <swiper :indicator-dots="indicatorDots"
  :autoplay="autoplay" :interval="interval" :duration="duration">
  <block v-for="(url,index) in imgUrls" :key="index">
    <swiper-item>
      <image :src="url" class="slide-image" width="355" height="150"/>
    </swiper-item>
  </block>
</swiper>
    </div>
</div>
  
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      indicatorDots: false,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      imgUrls: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ]
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../logs/main";
      wx.navigateTo({ url });
    },
    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle(msg, ev) {
      console.log("clickHandle:", msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style rel="stylesheet/less" lang="less" scoped >
.layout {
  height: 100%;
}
.badge_n {
  position: absolute;
  top: -2px;
  right: -13px;
}
.bage_o {
  position: absolute;
  top: 0;
  right: -6px;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
