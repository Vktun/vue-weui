<template>
  <div>
    <button class="weui-btn weui-btn_primary" @click="getLogin">登录</button>
   <button class="weui-btn weui-btn_primary" @click="postUser">获取授权</button>
    <ul class="log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <div>你当前启动时间：</div>
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from "@/utils/index";
import card from "@/components/card";

export default {
  components: {
    card
  },

  data() {
    return {
      logs: [],
      sessionKey: null
    };
  },
  mounted() {},
  methods: {
    getLogin() {
      const _this = this;
      wx.login({
        success: function(res) {
          if (res.code) {
            wx.request({
              url: "http://localhost:65167/api/Login/wxLogin",
              method: "POST",
              data: {
                code: res.code
              },
              header: {
                "content-type": "application/x-www-form-urlencoded"
              },
              success: function(resp) {
                console.log(resp);
                _this.sessionKey = resp.message;
                wx.setStorageSync("sessionKey", resp.message);
              }
            });
          } else {
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    postUser() {
      const _this = this;
      console.log(_this.sessionKey);
      console.log(wx.getStorageSync("sessionKey"));
      wx.request({
        url: "http://localhost:65167/api/AccountManage/PostUser",
        method: "POST",
        data: {
          nickName: "string",
          emailAddress: "string",
          avatarUrl: "string",
          lastModificationTime: "2018-06-05T05:12:10.529Z",
          isDeleted: true,
          address: "string",
          gender: 0,
          phoneNumber: "string",
          firstUpdate: true
        },
        header: {
          sessionKey: wx.getStorageSync("sessionKey")
        },
        success: function(res) {
          console.log(res);
        }
      });
    }
  },
  created() {
    const logs = wx.getStorageSync("logs") || [];
    this.logs = logs.map(log => formatTime(new Date(log)));
  }
};
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
