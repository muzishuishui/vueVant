<template>
  <div class="pdfContent">
     <van-nav-bar class="navBar" title="BOW样本" left-text="返回" left-arrow @click-left="onClickLeft" />
     <!-- <iframe src="https://www.bowdesign.com/test/ceshi/BOW.pdf"  width="100%" height="100%"></iframe> -->
    <img class="icon-add" src="../assets/zoom.png" @click="iconAdd" />
    <img class="icon-jian" src="../assets/shrink.png" @click="iconJian" />
    <canvas v-for="page in pages" :id="'canvas'+page" :key="page"></canvas>
  </div>
</template>
<script>
import PDF from "pdfjs-dist";

PDF.disableWorker = true;

export default {
  name: "pdf",
  data() {
    return {
      pdfUrl: "https://www.bowdesign.com/test/ceshi/BOW.pdf",
      width: 100,
      pages: 0,
      pdfDoc: ""
    };
  },
  methods: {
    /*加载PDF文件*/
    loadFile: function(url) {
      let _this = this;
      PDF.getDocument(url).then(function(pdf) {
        _this.pdfDoc = pdf;
        _this.pages = _this.pdfDoc.numPages;
        _this.$nextTick(() => {
          _this.renderPage(1);
        });
      });
    },
    /*渲染PDF文件*/
    renderPage: function(num) {
      let _this = this;
      this.pdfDoc.getPage(num).then(function(page) {
        let canvas = document.getElementById("canvas" + num);
        let ctx = canvas.getContext("2d");
        let dpr = window.devicePixelRatio || 1; //设备像素比
        let bsr =
          ctx.webkitBackingStorePixelRatio ||
          ctx.mozBackingStorePixelRatio ||
          ctx.msBackingStorePixelRatio ||
          ctx.oBackingStorePixelRatio ||
          ctx.backingStorePixelRatio ||
          1; //浏览器在渲染canvas之前会用几个像素来来存储画布信息,类似img
        let ratio = dpr / bsr;
        var viewport = page.getViewport(
          screen.availWidth / page.getViewport(1).width
        ); //用户网页的可视区域
        canvas.width = viewport.width * ratio; //画布大小,默认值是width:300px,height:150px
        canvas.height = viewport.height * ratio;
        canvas.style.width = viewport.width + "px"; //画布的框架大小
        canvas.style.height = viewport.height + "px";
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        page.render(renderContext);
        if (_this.pages > num) {
          _this.renderPage(num + 1);
        }
      });
    },
    /*放大PDF文件*/
    iconAdd: function() {
      let pageNum = document.querySelectorAll("canvas").length;
      this.width += 5;
      for (var i = 0; i < pageNum; i++) {
        console.log(document.querySelectorAll("canvas")[i].style.width);

        document.querySelectorAll("canvas")[i].style.width = this.width + "%";
        // document.querySelectorAll("canvas")[i].style.height =
        //    this.width/2 + "%";
        // console.log(document.querySelectorAll("canvas")[i].style.width,document.querySelectorAll("canvas")[i].style.height);
      }
    },
    /*缩小PDF文件*/
    iconJian: function() {
      if (this.width == 100) return;
      let pageNum = document.querySelectorAll("canvas").length;
      this.width -= 5;
      for (var i = 0; i < pageNum; i++) {
        document.querySelectorAll("canvas")[i].style.width = this.width + "%";
          // document.querySelectorAll("canvas")[i].style.height =
          //  this.width/2 + "%";
          //   console.log(document.querySelectorAll("canvas")[i].style.width,document.querySelectorAll("canvas")[i].style.height);
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created: function() {
    this.loadFile(this.pdfUrl);
  }
};
</script>
<style scoped>
/* .navBar {
  background-color: #ff9e15;
  color: #ffffff;
  position: fixed;
  left: 0rem;
  top: 0;
  height: 2.5rem;
  width: 100%;
  border-radius: 7px;
} */
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
.icon-add,
.icon-jian {
  width: 3rem;
  height: 3rem;
  position: fixed;
  right: 1rem;
  bottom: 10rem;
  z-index: 100;
}
.icon-jian {
  bottom: 5rem;
}
</style>


