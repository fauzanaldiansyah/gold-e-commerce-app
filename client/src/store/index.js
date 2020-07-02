import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus : 'user', 
    products : [],
    productsedit :{},
    idedit : 0
  },
  mutations: { //merubah data(state), dari mutations
    SET_ROLE(state, payload){
      state.userStatus = payload
    },
    SET_PRODUCT_LIST(state,payload){
      state.products = payload
    },
    // SET_PRODUCT_EDIT(state,payload){
    //   console.log(payload, '<<<payloadstore')
    //   state.productsedit = payload
    //   console.log(this.state.productsedit, '<productseditdistore')
    // }
  },
  actions: { //functions, komunikasi ke API, menggunakan actions
    setRole(context, payload){
      context.commit("SET_ROLE", payload)
    },
    async getProducts(context, payload) {
      console.log('masuk')
      await axios({
        method: "GET",
        url: "https://e-ecom.herokuapp.com//products"
      })
        .then(res => {
          // console.log(res);
          const { data } = res;
          console.log(data,'<data')
          context.commit("SET_PRODUCT_LIST",data) //diset pake commit
          // this.$store.commit("products", data);
          return;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // getOne(context, payload) {
    //   console.log('masukgetone')
    //   console.log(payload, '<<<payload')
    //   axios({
    //     method: "GET",
    //     url: `https://e-ecom.herokuapp.com/products/${payload}`,
    //     headers: {access_token : localStorage.access_token}
    //   })
    //     .then(res => {
    //       console.log(res, "<<data");
    //       const { data } = res;
    //       console.log(data,'<dataedit')
    //       context.commit("SET_PRODUCT_EDIT",data) //diset pake commit
    //       // this.$store.commit("products", data);

    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
  },
  modules: {
  },
});
