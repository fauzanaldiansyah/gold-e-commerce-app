<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home</router-link>|
      <router-link to="/product">Products</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <h1 style="color:white">
      <u>Your Cart</u>
    </h1>
    <br />
    <div v-if="this.localproducts.length === 0">
      <h1>Your cart is empty!</h1>
    </div>
    <div v-else>
      <button class="btn btn-primary btn-lg" style="width:50%" @click="checkout">Checkout My Cart</button>
      <div>
        <table border="1" class="mt-5 mx-5 justify-content-center" style="width:94%">
          <thead>
            <tr>
              <th>Products</th>
              <!-- <th>Descriptions</th> -->
              <th>Price</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="localproduct in localproducts" :key="localproduct.id">
              <td>{{localproduct.name}}</td>
              <!-- <td>{{localproduct.descriptions}}</td> -->
              <td>{{localproduct.price}}</td>
              <td>{{localproduct.quantity}}</td>
              <td class="my-5">
                <img :src="localproduct.imageurl" style="width:100px" />
              </td>
              <td>
                <button class="btn btn-danger" @click="toDelete(localproduct.id)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <button class="btn btn-warning" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
import axios from "axios";
// import Table from '@/components/Table.vue';

export default {
  data() {
    return {
      localproducts: [],
      localuser: "",
      access_token: ""
    };
  },
  name: "Cart",
  methods: {
    getCart() {
      axios({
        method: "GET",
        url: `http://localhost:3000/carts/find`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          console.log(res.data, "<data");
          this.localproducts = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toDelete(id) {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/carts/${id}`,
        headers: {
          access_token: localStorage.access_token,
          role: localStorage.role
        }
      })
        .then(res => {
          console.log("deleted");
          this.getCart();
        })
        .catch(err => {
          console.log(err);
        });
    },
    checkout() {
      console.log("masukcheckout");
      axios({
        method: "POST",
        url: `http://localhost:3000/carts/checkout`,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(res => {
          console.log("masukcekout")
          this.getCart();
          this.$router.push('./checkout')
        })
        .catch(err => {
          console.log(err);
        });
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
    this.getCart();
    console.log(this.localproducts, "<<local");
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