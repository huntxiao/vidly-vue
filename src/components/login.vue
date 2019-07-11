<template>
  <div class="container">
    <section class="jumbotron text-center">
      <h1 class="jumbotron-heading display-3">Vidly</h1>
      <p class="lead text-muted">This is a kind of thing you don't need to know</p>
    </section>
    <form class="form-signin">
      <div class="form-group">
        <label for="formGroupExampleInput">Email</label>
        <input
          v-model="email"
          type="email"
          :class="[{'is-invalid': emailIsInvalid},'form-control']"
          id="InputEmail"
          placeholder="Email"
          required
        />
        <div class="invalid-feedback">{{emailInValidMsg}}</div>
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Password</label>
        <input
          v-model="password"
          type="text"
          :class="[{'is-invalid': passwordIsInvalid},'form-control']"
          id="InputPassword"
          placeholder="Password"
          required
        />
        <div class="invalid-feedback">{{passwordInValidMsg}}</div>
      </div>

      <div class="mt-2 mb-2 text-center">
        <input type="checkbox" value="remember-me" v-model="rememberChecked" /> Remember me
      </div>
      <hr />
      <div class="mt-2 mb-2 text-center">
        <a @click="toSignin" href>You don't have an Account?</a>
      </div>
      <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy;Copyrights for Hunt 2019-2020</p>
    </form>
    <loading-mask v-show="loading"></loading-mask>
  </div>
</template>
<script>
import LoadingMask from "@/components/loading-mask";
export default {
  name: "Login",
  components: {
    LoadingMask
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
      emailIsInvalid: false,
      passwordIsInvalid: false,
      emailInValidMsg: "",
      passwordInValidMsg: "",
      rememberChecked: "",
      loading: false
    };
  },
  computed: {
    validated() {
      return !(this.emailIsInvalid && this.passwordIsInvalid);
    }
  },
  methods: {
    login() {
      if (this.email.length === 0) {
        this.emailIsInvalid = true;
        this.emailInValidMsg = "Email can not be null";
      } else if (this.email.length > 0 && this.email.length < 8) {
        this.emailIsInvalid = true;
        this.emailInValidMsg = "Email can not be less than 8 characters";
      }
      if (this.password.length === 0) {
        this.passwordIsInvalid = true;
        this.passwordInValidMsg = "Password can not be null";
      } else if (this.password.length > 0 && this.email.length < 6) {
        this.passwordIsInvalid = true;
        this.passwordInValidMsg = "Password can not be less than characters";
      }
      console.log(this.validated);
      //I found a api for test
      //https://malun666.github.io/aicoder_vip_doc/#/pages/vueproapi/vue_api
      if (this.validated === true) {
        this.loading = true;
        // https://blog.csdn.net/fxs12138/article/details/84970418
        this.$http
          .post("/login", {
            email: this.email,
            password: this.password
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    toSignin(event) {
      event.preventDefault();
      this.$router.push("/signin");
    }
  },
  created() {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: -apple-system;
}
.container {
  margin-top: 7%;
  width: 30%;
  font-family: -apple-system;
  font-weight: 320;
}
</style>
