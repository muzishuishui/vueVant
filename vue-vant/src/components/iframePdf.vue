<template>
  <div class="pdfContent">
    <van-nav-bar class="navBar" title="BOW样本" left-text="返回" left-arrow @click-left="onClickLeft" />
    <!-- <iframe :src="pdfUrl" width="100%" height="100%"></iframe> -->
    <!-- <iframe :src="'/static/pdf/web/viewer.html?file='+pdfUrl" width="100%" height="100%"></iframe> -->
    <!-- 打包 -->
    <iframe :src="'/test/ceshi/static/pdf/web/viewer.html?file='+pdfUrl" width="100%" height="100%"></iframe>
  </div>
</template>
<script>
import PDF from "pdfjs-dist";

PDF.disableWorker = true;

export default {
  name: "pdf",
  data() {
    return {
      // pdfUrl: "https://www.bowdesign.com/test/ceshi/BOW.pdf",
      // pdfUrl: "/static/img/123.pdf",
      // 打包
      pdfUrl: "/test/ceshi/static/img/123.pdf",
      width: 100,
      pages: 0,
      pdfDoc: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created: function() {}
};
</script>
<style scoped>
.navBar {
  background-color: #ff9e15;
  color: #ffffff;
  position: fixed;
  left: 0rem;
  top: 0;
  height: 4.25rem;
  line-height: 4.25rem;
  width: 100%;
}
.navBar i,
.navBar span,
.navBar div {
  color: #ffffff;
}
.navBar span:hover,
.navBar div:hover {
  background-color: #ff9e15;
}
.pdfContent {
  margin-top: 4.25rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: scroll;
}
</style>


