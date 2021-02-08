<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>

</template>


<script>
import $ from 'jquery'
import axios from 'axios';
import navbar from './views/Navbar.vue'
export default {
  components:{ 
    navbar
  },
  data: function(){
    return{
      products:[],
      cart:[],
      discountCodes:[
        {code: 'malakie10', discountBy: 10},
        {code: 'candvreodata', discountBy: 30},
      ],
      serverHost: "http://localhost:8080"
    }
  },
  async created(){ 
    this.products= await axios.get(this.serverHost+"/products/1/12").then( res => res.data.results);
  },
   mounted(){
    if(localStorage.cart) this.cart=JSON.parse(localStorage.cart); 
    
    // axios.post(this.serverHost+"/products/create", {name: 'Gene false 1', category: 'Produse fata', stock: 50, description: "Cand vreodata?", price: 10.99}).then(res=> console.log(res.data));
    // axios.post(this.serverHost+"/products/create", {name: 'Ruj', category: 'Produse fata', stock: 90, description: "Ruj", price: 6.99}).then(res=> console.log(res.data));
    //axios.put("http://localhost:8080/products/update/601ac6f8798d6510b4386753", {name: 'Gene false', category: 'Produse fata', stock: 30, description: "Cand vreodata??", price: 27.99}).then(res=> console.log(res.data));
    //axios.delete("http://localhost:8080/products/delete/601ac6f8798d6510b4386752").then(res=>console.log(res.data));
  },
  watch:{
    $route(){
        $("#app").removeClass("m_-45");
      }
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
}
</style>
