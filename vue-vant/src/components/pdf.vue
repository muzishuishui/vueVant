<template>
  <div class="pdf">
    <van-button class="button" type="default" size="small" @click="callback()">返回</van-button>
    <p class="arrow">
      <!-- // 上一页 -->
      <span @click="changePdfPage(0)" class="turn" :class="{grey: currentPage==1}">Preview</span>
      {{currentPage}} / {{pageCount}}
      <!-- // 下一页 -->
      <span @click="changePdfPage(1)" class="turn" :class="{grey: currentPage==pageCount}">Next</span>
    </p>
    <pdf
      :src="src"
      :page="currentPage"
      @progress="loadedRatio = $event"
      @num-pages="pageCount=$event"
      @page-loaded="currentPage=$event"
      @loaded="loadPdfHandler"
      ref="wrapper"
      class="pdf"
    ></pdf>
    <div class="fix">
      <div>
        <img
          width="30"
          src="../assets/big.png"
          :class="{select:idx==0}"
          @touchstart="idx=0"
          @touchend="idx=-1"
          @click="scaleD"
        />
      </div>
      <div>
        <img
          width="30"
          src="../assets/small.png"
          :class="{select:idx==1}"
          @touchstart="idx=1"
          @touchend="idx=-1"
          @click="scaleX"
        />
      </div>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  components: {
    pdf
  },
  data() {
    return {
      currentPage: 1,
      pageCount: 0,
      //   src: "./static/123.pdf", // pdf文件地址
      src: "https://www.bowdesign.com/test/ceshi/BOW.pdf", // pdf文件地址
      scale: 100, //放大系数
      idx: -1,
      clauseTitle: "",
      loadedRatio: 0
    };
  },
  methods: {
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    goBack() {
      this.$router.go(-1);
    },
    // pdf加载时
    loadPdfHandler(e) {
      this.currentPage = 1; // 加载的时候先加载第一页
    },
    //放大
    scaleD() {
      this.scale += 5;
      // this.$refs.wrapper.$el.style.transform = "scale(" + this.scale + ")";
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
    }, //缩小
    scaleX() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -5;
      this.$refs.wrapper.$el.style.width = parseInt(this.scale) + "%";
      // this.$refs.wrapper.$el.style.transform = "scale(" + this.scale + ")";
    },
    callback() {
      this.$router.go(-1);
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  background-color: #ff9e15;
  color: #ffffff;
}
.fix {
  position: absolute;
  top: 30%;
  right: 5%;
}
.fix > div {
  margin: 1rem 0;
}
.sizeIcon {
  font-size: 3rem;
}
</style>
