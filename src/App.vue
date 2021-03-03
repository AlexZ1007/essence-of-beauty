<template>
  <div id="app" class="">
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
      loggedIn:false,
      loggedInUser:{},
      discountCodes:[
        {code: 'malakie10', discountBy: 10},
        {code: 'candvreodata', discountBy: 30},
      ],
      topProducts:[],
      serverHost: "https://essence-of-beauty.herokuapp.com",
      // serverHost: "http://localhost:8080",
    }
  },
  async created(){ 
    this.products= await axios.get(this.serverHost+"/products/1/12/All/0/none/").then( res => res.data.results);

  },
   async mounted(){
    this.topProducts= await axios.get(this.serverHost+"/products/1/3/All/1/stars").then( res => res.data.results);
    if(localStorage.cart) this.cart=JSON.parse(localStorage.cart); 
  },

  methods:{
    checkIfLoggedIn(){
      if(!this.loggedIn) this.$router.push("/").catch(()=>{});
    },
    checkForAdmin(){
      if(!this.loggedInUser.adminPermission) this.$router.push("/").catch(()=>{});
    },
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
