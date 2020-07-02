<template>
  <div class="register">
  <h1 class="display-1" style="color: white">BUTIK EMAS XXX</h1>
    <div class="col-sm d-flex flex-column bg-light">
      <div class="my-3"></div>
      <center>
        <div id="register">
          <h1 class="display-4" style="color: black">REGISTER ACCOUNT</h1>
          <h1 style="color: black">Hello!</h1>
          <h1 style="color: black">Ready to welcome you</h1>
          <form class="my-4" @submit.prevent="register" autocomplete="chrome-off">
            <div class="form-group col-6">
              <label for="email-register" class="h2" style="color: black">Email</label>
              <input
                type="email"
                class="form-control form-control-lg"
                name="email-register"
                id="email-register"
                v-model="emailRegister"
                required
              />
            </div>
            <div class="form-group col-6">
              <label for="password" class="h2" style="color: black">Password</label>
              <input
                type="password"
                class="form-control form-control-lg"
                name="password-register"
                id="password-register"
                v-model="passwordRegister"
                required
              />
            </div>
            <button
              id="btn-register"
              type="submit"
              class="btn btn-warning btn-lg"
            >Register</button>
          </form>
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
      emailRegister: "",
      passwordRegister: ""
    };
  },
  methods: {
    register() {
      console.log("iniregister")
      axios({
        method: "POST",
        url: "http://localhost:3000/users/register",
        data: {
          email: this.emailRegister,
          password: this.passwordRegister
        }
      })
        .then(response => {
          console.log("masukregister")
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>