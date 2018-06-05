<template>
  <div>
    <button class="weui-btn weui-btn_primary" @click="getLogin">登录</button>
   <button class="weui-btn weui-btn_primary" @click="postUser">获取授权</button>
    <button class="weui-btn weui-btn_primary" @click="chooseImage">上传图片</button>
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
import qiniuUploader from "@/utils/qiniuload.js";
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
                console.log(resp)
                _this.sessionKey = resp.data.result.message;
                wx.setStorageSync("sessionKey", _this.sessionKey);
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
    },
    chooseImage() {
      wx.request({
        url: "http://localhost:65167/api/Qiniu/GetUpToken",
        method: "GET",
        header: {
          sessionKey: wx.getStorageSync("sessionKey")
        },
        success: function(response) {
          wx.chooseImage({
            success: function(resp) {
              const tempFilePaths = resp.tempFilePaths;
              console.log(resp)
              const currentTime = new Date();
              const time =
                currentTime.getFullYear() +
                "" +
                (currentTime.getMonth() + 1) +
                currentTime.getDay() +
                "" +
                currentTime.getHours() +
                currentTime.getMinutes() +
                "" +
                currentTime.getSeconds();
              qiniuUploader.upload(
                tempFilePaths,
                res => {
                  wx.request({
                    url: "http://localhost:65167/api/Galleries/PostGallery",
                    method: "POST",
                    data: {
                      title: "测试的",
                      introduction: "测试的介绍",
                      categoryId: 1,
                      isPublic: true,
                      gallerytype: 0,
                      flag: "string"
                    },
                    header: {
                      sessionKey: wx.getStorageSync("sessionKey")
                    },
                    success: function(r) {
                      console.log(r);
                    }
                  });
                },
                error => {
                  console.log("error: " + error);
                },
                {
                  region: "SCN",
                  domain: response.data.result.domain,
                  uptoken: response.data.result.token,
                  sessionKey: wx.getStorageSync("sessionKey"),
                  flag: wx.getStorageSync("sessionKey") + "/" + time, // 图片和简介的共同标识
                  key: response.data.result.key + wx.getStorageSync("sessionKey")
                },
                res => {
                  console.log("上传进度", res.progress);
                  console.log("已经上传的数据长度", res.totalBytesSent);
                  console.log(
                    "预期需要上传的数据总长度",
                    res.totalBytesExpectedToSend
                  );
                }
              );
            }
          });
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
