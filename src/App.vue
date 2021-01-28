<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    
  </div>
</template>


<script>
import $ from 'jquery'
import navbar from './views/Navbar.vue'
export default {
  components:{ 
    navbar
  },
  data: function(){
    return{
      products:[
        {
          id: 0,
          name: "Ruj",
          description: "Rujul este un produs foarte bun si e chiar +1",
          category: 'Produse fata',
          price: 15.99
        },
        {
          id: 1,
          name: "Fard de ochi",
          description: "Bun de pus in loc de ochi",
          category: 'Farduri',
          price: 19.99
        },
        {
          id: 2,
          name: "Paleta de machiaj",
          description: "Paleta de machiaj este chiar casa, este un produs foarte bun si e chiar +1",
          category: 'Produse fata',
          price: 17.99
        },
        {
          id: 3,
          name: "Pensule",
          description: "Pensule de machiaj este chiar casa, bun si e chiar +1",
          category: 'Accesorii',
          price: 17.99
        },
        
      ],
      cart:[],
    }
  },
  mounted(){
    if(localStorage.cart){ console.log(JSON.parse(localStorage.cart)); this.cart=JSON.parse(localStorage.cart); console.log(this.cart)}

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
