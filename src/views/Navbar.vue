<template>
    <nav id="navbar" class="navbar navbar-expand-md navbar-light">
        <router-link class="navbar-brand" to="/"> Essence of Beauty</router-link>
        <button id="nav-togg" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/shop">Shop</router-link>
                </li>
                <li class="nav-item" 
                    v-if="this.$parent.loggedIn!=false && this.$parent.loggedInUser.adminPermission">
                    <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                </li>
            </ul>
            
             <div  class="ml-auto row">
                 <router-link id="cart" class="nav-link mr-3" to="/cart" >Cart</router-link>
                 <div v-if="this.$parent.loggedIn==false" class="row">
                    <router-link id="btnRegister" class="nav-link" to="/register" >Register</router-link>
                    <router-link id="btnLogin" class="nav-link " to="/login" >Login</router-link>
                </div>
                 <div v-else class="row">
                    <router-link id="btnLogout" class="nav-link" to="/logout" event="" @click.native.prevent="logout()">Logout</router-link>
                </div>
            </div>
            
            
        </div>
    </nav>
</template>

<script>
export default {
    methods:{
        logout(){
            this.$parent.loggedIn=false;
            this.$parent.loggedInUser={};
            this.$router.push("/")
        }
    }
}
</script>