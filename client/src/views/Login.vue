<template>
  <div class="login">
  <h1 class="display-1" style="color: white">BUTIK EMAS XXX</h1>
    <div class="col-sm d-flex flex-column bg-light">
      <div class="my-3"></div>
      <center>
        <div id="login">
          <h1 class="display-4" style="color: black">LOGIN</h1>
          <form class="my-4" @submit.prevent="login" autocomplete="chrome-off">
            <div class="form-group col-6">
              <label for="email-login" class="h2" style="color: black">Email</label>
              <input
                type="email"
                class="form-control form-control-lg"
                name="email-login"
                id="email-login"
                v-model="emailLogin"
                required
              />
            </div>
            <div class="form-group col-6">
              <label for="password" class="h2" style="color: black">Password</label>
              <input
                type="password"
                class="form-control form-control-lg"
                name="password-login"
                id="password-login"
                v-model="passwordLogin"
                required
              />
            </div>
            <button
              id="btn-login"
              type="submit"
              class="btn btn-warning btn-lg"
              v-on:click="login"
            >LOGIN</button>
          </form>
          <h4>No Account:</h4>
          <button class="btn btn-warning btn-lg" @click="toRegister">Register</button>
        </div>
      </center>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: [],
  data() {
    return {
      emailLogin: "",
      passwordLogin: ""
    };
  },
  methods: {
    login() {
      axios({
        method: "POST",
        url: "https://e-ecom.herokuapp.com/users/login",
        data: {
          email: this.emailLogin,
          password: this.passwordLogin
        }
      })
        .then(response => {
          console.log("masuklogin");
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("role", response.data.role)
          console.log(response.data)
          this.$store.dispatch('setRole', response.data.role)
          this.$router.push('/home', () => {})
        })
        .catch(err => {
          console.log(err);
        });
    },
    toRegister(){
      this.$router.push('/register')
    }
  }
};
</script>