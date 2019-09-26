<template>
  <div class="qcode">
    <!-- // 用于输入内容的input
    <input v-model="message" />
    // 将获取到的信息画到画布上
    <canvas id="msg"></canvas>-->
    <div id="qrCode" ref="qrCodeDiv"></div>
  </div>
</template>

<script>
// 引入qrcode
import QRCode from "qrcodejs2";
export default {
  data() {
    return {
      message: "",
      qrcodeUrl: "https://www.bowdesign.com/test/ceshi/"
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.bindQRCode();
    });
  },
  methods: {
    bindQRCode: function() {
      new QRCode(this.$refs.qrCodeDiv, {
        text: this.qrcodeUrl,
        width: 200,
        height: 200,
        colorDark: "#333333", //二维码颜色
        colorLight: "#ffffff", //二维码背景色
        correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
      });
    }
  }
};
</script>

<style>
#qrCode {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>