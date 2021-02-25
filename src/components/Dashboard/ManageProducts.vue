<template>
    <div class="main-comp container-fluid">
        <dashboard-nav></dashboard-nav>
        
    </div>
</template>

<script>
import $ from 'jquery'
import dashboardNav from './DashboardNav'                    
export default {
    components: {
        'dashboard-nav': dashboardNav
    },
    mounted(){
        this.$parent.checkIfLoggedIn();
        this.$parent.checkForAdmin();
        $("#app").addClass("m_-45");
    }
}
</script>