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
          :class="[{'is-invalid': emailIsValid},'form-control']"
          id="InputEmail"
          placeholder="Email"
          required
        />
        <div class="invalid-feedback">{{emailValidMsg}}</div>
      </div>
      <div class="form-group">
        <label for="formGroupExampleInput2">Password</label>
        <input
          v-model="password"
          type="text"
          :class="[{'is-invalid': passwordIsValid},'form-control']"
          id="InputPassword"
          placeholder="Password"
          required
        />
        <div class="invalid-feedback">{{passwordValidMsg}}</div>
      </div>

      <div class="mt-2 mb-2 text-center">
        <input type="checkbox" value="remember-me" /> Remember me
      </div>
      <hr />
      <div class="mt-2 mb-2 text-center">
        <a @click="toSignin" href>You don't have an Account?</a>
      </div>
      <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy;Copyrights for Hunt 2019-2020</p>
    </form>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      emailIsValid: false,
      passwordIsValid: false,
      emailValidMsg: "",
      passwordValidMsg: ""
    };
  },
  methods: {
    login() {
      if (this.email.length === 0) {
        this.emailIsValid = true;
        this.emailValidMsg = "Email can not be null";
      }
      if (this.email.length > 0 && this.email.length < 8) {
        this.emailIsValid = true;
        this.emailValidMsg = "Email can not be less than 8 characters";
      }
      if (this.password.length === 0) {
        this.passwordIsValid = true;
        this.passwordValidMsg = "Password can not be null";
      }
      if (this.password.length > 0 && this.email.length < 6) {
        this.passwordIsValid = true;
        this.passwordValidMsg = "Password can not be less than characters";
      }
    },
    toSignin(event) {
      event.preventDefault();
      this.$router.push("/signin");
    }
  },
  created() {},
  mounted() {},
  computed: {}
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
