<template>
     <table border="1" class="mt-5 mx-5 justify-content-center" style="width:80">
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
      </table>
</template>

<script>

export default {
  props: ['localproducts'],
};
</script>
