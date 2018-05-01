<template>
<div class="page">
    <div class="page__bd layout">
          <swiper :indicator-dots="indicatorDots"
    :autoplay="autoplay" :interval="interval" :duration="duration">
    <block v-for="(url,index) in imgUrls" :key="index">
      <swiper-item>
        <image :src="url" class="slide-image" width="100%" height="150"/>
      </swiper-item>
    </block>
    </swiper>
    <div class="page__bd page__bd_spacing">
      <div class="weui-cells">
        <div class="weui-grids">
          <a href="/pages/dishes/main" class="weui-grid">
          <div class="weui-grid__icon">
                <img :src="iurl" alt="">
            </div>
            <p class="weui-grid__label">今日菜谱</p>
            </a>
             <a href="/pages/prebook/main" class="weui-grid">
             <div class="weui-grid__icon">
                <img :src="iurl" alt="">
            </div>
            <p class="weui-grid__label">预订免排队</p>
             </a>
              <a href="/pages/discount/main" class="weui-grid">
             <div class="weui-grid__icon">
                <img :src="iurl" alt="">
            </div>
            <p class="weui-grid__label">今日优惠</p>
              </a>
            </div>
      </div>
        </div>
     <div class="weui-cells__title">热门推荐 <a class="pull-right"><strong>更多</strong></a></div>
        <div class="weui-cells">
          <itemlist :data="suggestList" height="80" mode="aspectFill" lazy_load ></itemlist>
        </div>
    </div>
</div>
  
</template>

<script>
import card from "@/components/card";
import itemlist from "@/components/items/itemList";
import icontabbar from "@/images/icon_tabbar.png";
export default {
  data() {
    return {
      motto: "Hello World",
      userInfo: {},
      indicatorDots: false,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      imgUrls: [
        "http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg",
        "http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg"
      ],
      btnValue: "播放",
      iurl: icontabbar,
      suggestList: [
        {
          title: "菜1",
          id: 1,
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
          desc: "very yummy ,welcome to you ! we have more discount!"
        },
        {
          title: "菜2",
          id: 2,
          imgUrl:
            "http://7xkkc0.media1.z0.glb.clouddn.com/image/food/TIM20180430230840.png",
          tags: [
            {
              text: "微辣",
              color: "warning",
              size: "small"
            },
            {
              text: "优惠",
              color: "danger",
              size: "small"
            }
          ],
          desc: "very yummy ,welcome to you ! we have more discount!"
        },
        {
          title: "菜3",
          id: 3,
          imgUrl:
            "http://7xkkc0.media1.z0.glb.clouddn.com/image/food/TIM20180430230853.png",
          tags: [
            {
              text: "清淡",
              color: "",
              size: "small"
            },
            {
              text: "优惠",
              color: "danger",
              size: "small"
            }
          ],
          desc: "very yummy ,welcome to you ! we have more discount!"
        },
        {
          title: "菜4",
          id: 4,
          imgUrl:
            "http://7xkkc0.media1.z0.glb.clouddn.com/image/food/TIM20180430230911.png",
          tags: [
            {
              text: "微辣",
              color: "warning",
              size: "small"
            },
            {
              text: "优惠",
              color: "danger",
              size: "small"
            }
          ],
          desc: "very yummy ,welcome to you ! we have more discount!"
        },
        {
          title: "菜5",
          id: 5,
          imgUrl:
            "http://7xkkc0.media1.z0.glb.clouddn.com/image/food/TIM20180430230753.png",
          desc: "我是没有标签的"
        }
      ]
    };
  },

  components: {
    card,
    itemlist
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
    },
    changePlayMode() {
      this.autoplay = !this.autoplay;
      this.btnValue = "播放状态" + this.autoplay;
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
.swaper {
  width: 100%;
}
.slide-image {
  width: 100%;
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
