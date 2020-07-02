<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home </router-link>|
      <router-link to="/product"> Products </router-link>|
      <router-link to="/about"> About </router-link>|
      <router-link to="/login"> Login</router-link>
    </div> -->
    <router-view />
    <br />
    <br />
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  background-color: yellowgreen;
  /* background: url("https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/556960/b6169958958610f1485f81872ca7448fe2bd66e7.jpg")
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover; */
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
