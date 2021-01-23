<template>
    <nav id="navbar" class="navbar navbar-expand-md navbar-light bg-darkPurple">
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
            </ul>
            <router-link id="cart" class="nav-link ml-auto" to="/cart">Cart</router-link>

        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>