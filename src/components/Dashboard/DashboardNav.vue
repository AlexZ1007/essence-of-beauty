<template>
    <nav id="navbar" class="navbar navbar-expand-md navbar-light dashboardNav">
        <div id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link text-white users" to="/dashboard/users">Users</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white products" to="/dashboard/products">Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link text-white codes" to="/dashboard/discount">Discount Codes</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

