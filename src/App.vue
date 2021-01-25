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
