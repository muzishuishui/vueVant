<template>
  <div class="home">
    <van-nav-bar class="navBar" title="BOW样本" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-row class="content">
      <van-col span="10" offset="2">
        <van-button class="button" type="default" @click="VuePdf()">中文</van-button>
      </van-col>
      <van-col span="10">
        <van-button class="button" type="default" @click="dist()">English</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "homeWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    console.log(this.$route.params.userId);
    if (this.$route.params.userId === "bow" || this.$route.params.userId === undefined) {
      localStorage.setItem("token", 1);
    } else {
      localStorage.setItem("token", 0);
    }
  },
  methods: {
    onClickLeft() {
      // this.$router.go(-1);
      localStorage.setItem("token", 0);
      this.$router.push({
        name: "Login",
        params:{userId: 'bow'}
      });
    },
    VuePdf() {
      this.$router.push("/iframePdf");
    },
    dist() {
      this.$router.push("/iframePdf");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
  background-color: #ff9e15;
  color: #ffffff;
  height: 4.25rem;
  line-height: 4.25rem;
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
.content {
  margin-top: 20%;
}
.title {
  margin: 1rem auto;
  font-size: 3rem;
}
.button {
  background-color: #ff9e15;
  margin-top: 5rem;
  color: #ffffff;
  border-radius: 7px;
  width: 12rem;
  height: 12rem;
}
.button span {
  font-size: 1.7rem;
}
</style>
