<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home </router-link>|
      <router-link to="/product"> Products </router-link>|
      <router-link to="/about"> About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <div class="home">
      <HelloWorld msg="BUTIK EMAS XXX" />
      <br />
      <img alt="Vue logo" src="../assets/gold.png" width="400" />
      <h1 class="mt-3">Happy Shopping!</h1>
    </div>
    <br>
    <br>
    <br>
    <br>
        <div> 
          <button class="btn btn-warning" @click="logout">Logout</button>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  methods: {
   logout(){
      localStorage.clear()
      this.$router.push({ name: 'Login'})
    }
  }
};
</script>
