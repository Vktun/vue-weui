<template>
  <div class="page__bd">
      <div class="weui-cells">
           <button class="weui-btn weui-btn_midum weui-btn_primary" @click="upload">+</button>
     </div>
  </div>
</template>

<script>
import qiniuUploader from "@/utils/qiniuload.js";
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    upload() {
      const _this = this;
      wx.request({
        url: "test.php", // 仅为示例，并非真实的接口地址
        data: {
          x: "",
          y: ""
        },
        header: {
          "content-type": "application/json" // 默认值
        },
        success: function(response) {
          wx.chooseImage({
            success: function(resp) {
              const tempFilePaths = resp.tempFilePaths;
              qiniuUploader.upload(
                tempFilePaths,
                res => {
                  _this.setData({
                    imageURL: res.imageURL
                  });
                },
                error => {
                  console.log("error: " + error);
                },
                {
                  region: "ECN",
                  domain: response.domain,
                  uptoken: response.token
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
