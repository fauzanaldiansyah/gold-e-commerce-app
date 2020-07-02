<template>
  <div>
    <div id="nav" class="d-flex justify-content-around">
      <router-link to="/home">Home</router-link>|
      <router-link to="/product">Products</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/cart">Your Cart</router-link>
    </div>

    <div class="Products d-flex flex-column">
      <h1 class="mt-5 mb-5">Products</h1>
      <div v-if="this.localuser === 'admin'">
        <div class="button">
          <button class="btn btn-warning btn-lg" @click="addProductPage()">Add Products</button>
        </div>
      </div>
      <div class="col">
        <div class="row mx-3 my-3">
          <div v-for="localproduct in localproducts" :key="localproduct.id">
            <div class="card mx-3 my-3" style="width: 24rem">
              <img :src="localproduct.imageurl" style="width:350px" />
              <div class="card-body">
                <h5 class="card-title" style="color:black">{{localproduct.name}}</h5>
                <!-- <p class="card-text" style="color:black">{{localproduct.descriptions}}</p> -->
                <p class="card-text" style="color:black">Price : Rp. {{localproduct.price}}</p>
                <!-- <p class="card-text" style="color:black">Stock: {{localproduct.stock}}</p> -->
                <button class="btn btn-warning mr-3" @click="toDetail(localproduct.id)">Check</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <table border="1" class="mt-5 mx-5 justify-content-center" style="width:80">
        <thead>
          <tr>
            <th>Products</th>
            <th>Descriptions</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="localproduct in localproducts" :key="localproduct.id">
            <td>{{localproduct.name}}</td>
            <td>{{localproduct.descriptions}}</td>
            <td>{{localproduct.price}}</td>
            <td>{{localproduct.stock}}</td>
            <td class="my-5">
              <img :src="localproduct.imageurl" style="width:100px" />
            </td>
            <td>
              <button class="btn btn-warning mr-3" @click="toEdit(localproduct.id)">Edit</button>
              <button class="btn btn-warning" @click="toDelete(localproduct.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>-->
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
      localuser: ""
    };
  },
  name: "Product",
  methods: {
    addProductPage() {
      this.$router.push("./addProduct");
    },
    async getProductFromStore() {
      await this.$store.dispatch("getProducts");
      this.localproducts = this.$store.state.products;
    },
    toEdit(id) {
      this.$router.push({ name: "editProduct", params: { id } });
    },
    toDetail(id) {
      this.$router.push({ name: "detailProduct", params: { id } });
    },
    toDelete(id) {
      console.log("masukdelete");
      axios({
        method: "DELETE",
        url: `https://e-ecom.herokuapp.com/products/${id}`,
        headers: {
          access_token: localStorage.access_token,
          role: localStorage.role
        }
      })
        .then(res => {
          console.log("deleted");
          this.getProductFromStore();
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
    }
  },
  created() {
    this.getProductFromStore();
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