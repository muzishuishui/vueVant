<template>
  <div class="login">
    <img src="../assets/index.jpg" width="100%" max-width="100%" />
    <div class="title">珀威技术</div>
    <van-cell-group>
      <van-field
        v-model="companyName"
        v-validate="'required'"
        required
        clearable
        label="公司名称"
        placeholder="请输入公司名称"
        data-vv-as="公司名称"
        data-vv-name="公司名称"
      />
      <van-field
        v-model="departmentName"
        v-validate="'required'"
        required
        clearable
        label="公司职位"
        placeholder="请输入公司职位"
        data-vv-as="公司职位"
        data-vv-name="公司职位"
      />
      <van-field
        v-model="name"
        v-validate="'required'"
        required
        clearable
        label="姓名"
        placeholder="请输入姓名"
        data-vv-as="姓名"
        data-vv-name="姓名"
      />
      <van-field
        v-model="email"
        v-validate="'required'"
        required
        clearable
        label="邮箱"
        placeholder="请输入邮箱"
        data-vv-as="邮箱"
        data-vv-name="邮箱"
      />
      <van-field
        v-model="phone"
        v-validate="'required|numeric'"
        required
        label="手机号"
        placeholder="请输入手机号"
        data-vv-as="手机号"
        data-vv-name="手机号"
      />
      <van-button class="button" type="default" @click="submitForm()">提交</van-button>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "loginWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      companyName: "",
      departmentName: "",
      name: "",
      email: "",
      phone: ""
    };
  },
  methods: {
    submitForm() {
      this.$validator.validate().then(result => {
        console.log(result);
        if (!result) {
          const errMsg = this.errors.items[0].msg;
          this.$toast({
            // message: "请输入必填项",
            message: errMsg,
            duration: 1500
            // position: 'bottom'
          });
        } else {
          localStorage.setItem("token", 1);
          this.$router.push({
            name: "Home",
            params: { userId: "bow" }
          });
        }
      });
    }
  },
  created() {
    console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token") == 1) {
      this.$router.push({
        name: "Home",
        params: { userId: "bow" }
      });
    }
    if (this.$route.params.userId === "bow") {
      localStorage.setItem("token", 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: 1rem auto;
  font-size: 3rem;
}
.button {
  width: 100%;
  background-color: #ff9e15;
  margin-top: 1rem;
  color: #ffffff;
  border-radius: 7px;
}
.button span {
  font-size: 1.7rem;
}
</style>
