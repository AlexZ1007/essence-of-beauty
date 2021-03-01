<template>
    <div class="main-comp container-fluid">
        <dashboard-nav></dashboard-nav>
        <div class="row justify-content-center ml-2 mr-1">
            <div class="col-lg-4 col-md-5 mb-2 col-sm-12 mr-3 px-4 py-3 dashboard-stats bg-darkPurple text-white">
                <h5> <i class="fas fa-user"></i> Registered accounts: {{regAccountsNum}}</h5>
            </div>
            <div class="col-lg-4 col-md-5 mb-2 col-sm-12 mr-3 px-4 py-3 dashboard-stats bg-darkPurple text-white">
                <h5> <i class="fas fa-store"></i> Products: {{productsNum}}</h5>
            </div>
        </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import dashboardNav from './DashboardNav'                    
export default {
    data(){
        return{
           regAccountsNum: 0, 
           productsNum: 0,
        }
    },
    components: {
        'dashboard-nav': dashboardNav
    },
    mounted(){
        this.$parent.checkIfLoggedIn();
        this.$parent.checkForAdmin();
        axios.get(this.$parent.serverHost+"/users/count").then(res=>this.regAccountsNum=res.data);
        axios.get(this.$parent.serverHost+"/products/count").then(res=>this.productsNum=res.data);
        $("#app").addClass("m_-45");
    }
}
</script>