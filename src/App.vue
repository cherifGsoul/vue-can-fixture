<template>
  <div id="app">
    <h3>Products</h3>
    <ul>
      <li v-for="product of products" :key="product.id">{{product.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import './fixtures/products';

export default {
  name: 'App',
  data() {
    return {
      products: []
    }
  },
  async created() {
    const response = await axios.get('/api/products');
    this.products = response.data;
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li {
  list-style: none;
}
</style>
