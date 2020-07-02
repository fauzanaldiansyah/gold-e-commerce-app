<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home</router-link>|
      <router-link to="/product">Products</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <div>
      <button class="btn btn-primary btn-lg mt-2 mb-2" @click="home">Shop Again</button>
    </div>

    <h1 class="display-1 mx-5 mt-3" style="color:white">Your Cart Checked Out !</h1>
    <h1 class="display-3 mx-5 my-5" style="color:white">Thank you!</h1>
    <h1 class="display-4 mx-5 my-5" style="color:white">Processing for Payment</h1>

    <br />
    <div>
      <button class="btn btn-warning" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      localproducts: [],
      localuser: "",
      access_token: ""
    };
  },
  name: "Checkout",
  methods: {
    home() {
      this.$router.push("./product");
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
    getUser() {
      this.localuser = localStorage.role;
      this.access_token = localStorage.access_token;
    }
  },
  created() {
    console.log("<<masukpagecheckout");
    this.getUser();
    // this.$store.dispatch("getProducts"); //untuk memanggil action dari store
    // console.log(this.$store.state.products, '<<<<datadaristore')
    // this.localproducts = this.$store.state.products
    // console.log(this.localproducts, '<<<local')

    // this.$store.state.products
    // console.log(this.$store.state.userStatus);
  }
};
</script>