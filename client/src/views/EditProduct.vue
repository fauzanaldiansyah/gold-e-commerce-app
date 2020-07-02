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
          <u>Edit Product</u>
        </h1>
        <form class="my-4" @submit.prevent="editProduct(productId)" autocomplete="chrome-off">
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Name</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="name-edit"
              id="name-edit"
              v-model="nameEdit"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Descriptions</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="descriptions-edit"
              id="descriptions-edit"
              v-model="descriptionsEdit"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Image URL</label>
            <input
              type="text"
              class="form-control form-control-lg"
              name="image-edit"
              id="image-edit"
              v-model="imageEdit"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Price</label>
            <input
              type="number"
              class="form-control form-control-lg"
              name="price-edit"
              id="price-edit"
              v-model="priceEdit"
              required
            />
          </div>
          <div class="form-group col-6">
            <label for="new-title" class="h2" style="color:white">Stock</label>
            <input
              type="number"
              class="form-control form-control-lg"
              name="stock-edit"
              id="stock-edit"
              v-model="stockEdit"
              required
            />
          </div>
          <button class="btn btn-warning btn-lg mt-3" style="color:black">Edit Product</button>
        </form>
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
      localproduct: {},
      products: [],
      nameEdit: "",
      descriptionsEdit: "",
      imageEdit: "",
      stockEdit: 0,
      priceEdit: 0,
      productId: 0
    };
  },
  name: "editProduct",
  methods: {
    // async getProductFromStoreForEdit(id) {
    //   console.log("masok");
    //   await this.$store.dispatch("getOne", id);
    //   this.localproduct = this.$store.state.productsedit;
    //   console.log(this.$store.state.productsedit, '<<<satu')
    //   console.log(this.localproduct, '<<<dua')
    //   this.productId = this.localproduct.id;
    //   this.nameEdit = this.localproduct.name;
    //   this.descriptionsEdit = this.localproduct.descriptions;
    //   this.imageEdit = this.localproduct.imageurl;
    //   this.priceEdit = this.localproduct.price;
    //   this.stockEdit = this.localproduct.stock;
    // },
     getOne(id) {
      console.log('masukgetone')
      console.log(id, '<<<payload')
      axios({
        method: "GET",
        url: `https://e-ecom.herokuapp.com/products/${id}`,
        headers: {access_token : localStorage.access_token}
      })
        .then(res => {
          const { data } = res;
            this.productId = data.id;
            this.nameEdit = data.name;
            this.descriptionsEdit = data.descriptions;
            this.imageEdit = data.imageurl;
            this.priceEdit = data.price;
            this.stockEdit = data.stock;

          // context.commit("SET_PRODUCT_EDIT",data) //diset pake commit
          // this.$store.commit("products", data);

        })
        .catch(err => {
          console.log(err);
        });
    },
    editProduct(id) {
      console.log("ngedit", id);
      axios({
        method: "PUT",
        url: `https://e-ecom.herokuapp.com/products/${id}`,
        headers: {
          access_token: localStorage.access_token,
          role: localStorage.role
        },
        data: {
          name: this.nameEdit,
          descriptions: this.descriptionsEdit,
          imageurl: this.imageEdit,
          price: this.priceEdit,
          stock: this.stockEdit
        }
      })
        .then(response => {
          console.log("edited");
          this.$router.push({ name: "Product" });
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
  computed: {
    getData() {
      return this.getProductFromStoreForEdit(this.$route.params.id);
    }
  },
  created() {
    this.getOne(this.$route.params.id)
    // this.getProductFromStoreForEdit(this.$route.params.id);
  }
};
</script>