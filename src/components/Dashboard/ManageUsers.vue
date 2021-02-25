<template>
    <div class="main-comp container-fluid">
        <dashboard-nav></dashboard-nav>
         <div class="input-group col-lg-3 col-md-5 col-sm-12 ml-auto mb-3">
                <input type="text" class="form-control" placeholder="Search for a user" aria-label="Search for product" id="searchBar">
                <div class="input-group-append btn-search" v-on:click="search()">
                        <span class="input-group-text bg-pink"><i class="fa fa-search"></i></span>
                </div>
        </div>
        <table class="table table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Full name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Admin Permission</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, id) in users" :key="user._id">
                    <td>{{user.fullName}}</td>
                    <td>{{user.email}}</td>
                    <td v-if="user.adminPermission">Yes</td>
                    <td v-else>No</td>
                    <td v-if="user.adminPermission"> <button v-on:click="updateAdmin(id, false)" class="b-0 py-1 px-2 bg-pink text-white my-auto">Remove Admin</button></td>
                    <td v-else><button v-on:click="updateAdmin(id, true)" class=" b-0 py-1 px-2 bg-pink text-white my-auto">Make Admin</button></td>
                </tr>
            </tbody>
        </table>       
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import dashboardNav from './DashboardNav'                    
export default {
    components: {
        'dashboard-nav': dashboardNav
    },
    data(){
        return{
            users: [],
        }
    },
    mounted(){
        this.$parent.checkIfLoggedIn();
        this.$parent.checkForAdmin();
        $("#app").addClass("m_-45");
    },
    methods:{
         async search(){
            let searchString=$("#searchBar").val();
            this.searchString=searchString;
            await axios.get(this.$parent.serverHost+"/users/search/"+searchString)
                            .then(res => this.users=res.data);            
        },
        updateAdmin(id, value){
            let user=this.users[id];
            user.adminPermission=value;
            this.users[id]=user;
            axios.put(this.$parent.serverHost+'/users/admin/'+user._id, {value: value});
        }
    }
}
</script>