<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home</router-link>|
      <router-link to="/product">Products</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <div class="about">
      <div class="jumbotron" style="color:white">
        <h1 class="display-1">BUTIK EMAS XXX</h1><br>
        <h1 >Toko Emas Online Pertama di Indonesia</h1><br>
        <h1 >Berdiri sejak 1945, dan telah menjadi kepercayaaan jutaan orang Indonesia.</h1>
        <br>
        <h1
        >Butik Emas terpercaya dengan harga yang bersaing, dilengkapi pengiriman yang terpercaya dengan asuransi.</h1>
        <br>
        <h1 >Selamat Berbelanja!</h1>

        <hr class="my-4" />
        <h3>Pastikan anda terus menjadi pelanggan kami</h3>
  <br>
  <br>
        <div>
          <h3>Hubungi Kami:</h3>
          <h3>xxx@butik-emas.com</h3>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div>
      <button class="btn btn-warning" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
export default {
  data(){
    return{}
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  }
};
</script>
 
<style>
.jumbotron {
  background: none;
}
</style>