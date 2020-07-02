<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home</router-link>|
      <router-link to="/product">Products</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <div class="wrapper">
      <center>
        <br />
        <h1 style="color:white">
          <u>Add New Product</u>
        </h1>
        <form class="my-4" @submit.prevent="addProduct" autocomplete="chrome-off">
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="name-add"
              id="name-add"
              v-model="nameAdd"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Descriptions</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="descriptions-add"
              id="descriptions-add"
              v-model="descriptionsAdd"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Image URL</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="image-add"
              id="image-add"
              v-model="imageAdd"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Price</label>
            <input
              type="number"
              class="form-control form-control-lg"
              name="price-add"
              id="price-add"
              v-model="priceAdd"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Stock</label>
            <input
              type="number"
              class="form-control form-control-lg"
              name="stock-add"
              id="stock-add"
              v-model="stockAdd"
              required
            />
          </div>
          <button class="btn btn-warning btn-lg" style="color:black">Add New Product</button>
        </form>
      </center>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <button class="btn btn-warning btn-sm" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      nameAdd: "",
      descriptionsAdd: "",
      imageAdd: "",
      stockAdd: 0,
      priceAdd: 0
    };
  },
  name: "addProduct",
  methods: {
    addProduct() {
      console.log("masukadd");
      axios({
        method: "POST",
        url: "http://localhost:3000/products",
        headers: {
          access_token: localStorage.access_token,
          role: localStorage.role
        },
        data: {
          name: this.nameAdd,
          descriptions: this.descriptionsAdd,
          imageurl: this.imageAdd,
          price: this.priceAdd,
          stock: this.stockAdd
        }
      })
        .then(response => {
          console.log("added");
          this.$router.push("./product");
        })
        .catch(err => {
          console.log(err);
        });
    },
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    }
  },
  created() {}
};
</script>