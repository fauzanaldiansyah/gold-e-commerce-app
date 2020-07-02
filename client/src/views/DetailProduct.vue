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
          <u>Detail Product</u>
        </h1>
        <div class="card mx-3 my-3" style="width: 48rem">
          <div class="card-body">
            <h2 style="color:black">
              <strong>{{detailproduct.descriptions}}</strong>
            </h2>
            <h4 style="color:black">Price : Rp. {{detailproduct.price}}</h4>
            <h4 style="color:black">Stock: {{detailproduct.stock}}</h4>
            <img :src="detailproduct.imageurl" style="width:350px" />
            <br />
            <h1 style="color:black">{{detailproduct.name}}</h1>
            <br />
            <button class="btn btn-info mr-3" @click="addToCart(detailproduct.id)">Add to Cart</button>
            <br />
            <br />
            <div v-if="this.localuser === 'admin'">
              <div class="button">
                <button class="btn btn-warning mr-3" @click="toEdit(detailproduct.id)">Edit</button>
                <button class="btn btn-danger mr-3" @click="toDelete(detailproduct.id)">Delete</button>
              </div>
            </div>
            <br />
            <button class="btn btn-primary mr-3" @click="toBack">Back</button>
          </div>
        </div>
      </center>
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

export default {
  data() {
    return {
      detailproduct: {},
      products: [],
      localuser: ""
    };
  },
  name: "detailProduct",
  methods: {
    getOne(id) {
      console.log("masukgetone");
      console.log(id, "<<<payload");
      axios({
        method: "GET",
        url: `http://localhost:3000/products/${id}`,
        headers: { access_token: localStorage.access_token }
      })
        .then(res => {
          const { data } = res;
          console.log(data);
          this.detailproduct = data;
          console.log(this.detailproduct.name);

          // context.commit("SET_PRODUCT_EDIT",data) //diset pake commit
          // this.$store.commit("products", data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    toEdit(id) {
      this.$router.push({ name: "editProduct", params: { id } });
    },
    toDelete(id) {
      console.log("masukdelete");
      axios({
        method: "DELETE",
        url: `http://localhost:3000/products/${id}`,
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
      console.log(this.localuser);
    },
    toBack() {
      this.$router.push({ name: "Product" });
    },
    addToCart(id) {
      console.log("masukkecart");
      axios({
        method: "POST",
        url: "http://localhost:3000/carts/add",
        data: { productId: id },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(response => {
          console.log(response, '<<response')
          console.log("addedtocart", id);
          this.$router.push({ name: "cart"})
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    getData() {
      return this.getProductFromStoreForEdit(this.$route.params.id);
    }
  },
  created() {
    this.getOne(this.$route.params.id);
    this.getUser();
    // this.getProductFromStoreForEdit(this.$route.params.id);
  }
};
</script>