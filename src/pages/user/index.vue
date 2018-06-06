<template>
  <div class="page__bd">
      <div class="weui-cells">
               <button class="weui-btn weui-btn_primary" @click="choose1Image">单张图片上传</button>
     </div>
  </div>
</template>

<script>
import qiniuUploader from "@/utils/qiniuload1.js";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    choose1Image() {
      wx.request({
        url: "http://localhost:65167/api/Qiniu/GetUpToken", // 请求获取token用户，验证此用户是否合法
        method: "GET",
        header: {
          sessionKey: wx.getStorageSync("sessionKey")
        },
        success: function(response) {
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
          wx.chooseImage({
            success: function(resp) {
              const tempFilePaths = resp.tempFilePaths[0];
              qiniuUploader.upload(
                tempFilePaths,
                res => {
                  console.log(res);
                },
                error => {
                  console.error(error);
                },
                {
                  region: "SCN",
                  domain: response.data.result.domain,
                  uptoken: response.data.result.token,
                  sessionKey: wx.getStorageSync("sessionKey"),
                  flag: wx.getStorageSync("sessionKey") + "/" + time, // 图片和简介的共同标识
                  key:
                    response.data.result.key + wx.getStorageSync("sessionKey")
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
  }
};
</script>

<style>
</style>
