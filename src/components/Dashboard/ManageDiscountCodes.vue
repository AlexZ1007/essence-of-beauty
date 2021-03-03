<template>
    <div class="main-comp container-fluid">
        <dashboard-nav></dashboard-nav>
        <div class="row mb-3 ">
            <div class="input-group col-lg-3 col-md-5 col-sm-12 my-auto pb-lg-0 pb-sm-2">
                <input type="text" class="form-control" placeholder="Search for a code" aria-label="Search for a code" id="searchBar">
                <div class="input-group-append btn-search" v-on:click="search()">
                        <span class="input-group-text bg-pink"><i class="fa fa-search"></i></span>
                </div>
            </div>

            <button class="bg-pink  my-auto  btn text-white btn-buy ml-auto mr-3" data-toggle="modal" data-target="#insertCode">Add a code</button>

        </div>
        
        <table class="table table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Discout By</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(code, index) in discountCodes" :key="code._id" :id="'code'+index">
                    <td>{{code.code}}</td>
                    <td>{{code.discountBy}}%</td>
                    <td class="text-center">
                        <button type="button" class="btn-style-none btn-options" data-toggle="modal" data-target="#deleteCode" v-on:click="setIndexToDelete(index)">
                            <i class="far fa-times-circle"></i>
                        </button>                    
                    </td>
                </tr>
            </tbody>
        </table>   


        <!-- Modals -->
        <div class="modal fade" id="deleteCode" tabindex="-1" role="dialog" aria-labelledby="deleteProdTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h4>Are you sure you want to delete this code?</h4>
                        <div class="text-center">
                            <button type="button" class="btn btn-secondary m-3" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteCode()">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    


        <!-- Create -->
        <div class="modal fade" id="insertCode" tabindex="-1" role="dialog" aria-labelledby="addCodeTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add a new product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  v-on:submit="addCode()" v-on:submit.prevent id="addCodeForm">
                            <div class="form-group">
                                <label for="code" class="form-label">Code:</label>
                                <input type="text" id="code" name="code" class="form-control" required>
                            </div>    
                            <div class="form-group">
                                <label for="discountBy" class="form-label">Discount By:</label>
                                <input type="number" id="discountBy" name="discountBy" class="form-control" min="0" max="100" required>
                            </div>              
                                   
                            <button type="submit" class="btn btn-purple text-color-white">Add code</button>    
                        </form>
        
                    </div>
                </div>
            </div>
        </div>    

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
    mounted(){
        this.$parent.checkIfLoggedIn();
        this.$parent.checkForAdmin();
        $('.codes').addClass('active')
        $("#app").addClass("m_-45");
    },
    data(){
        return{
            discountCodes: [],
            itemIndexToDelete: -1,
            itemIndexToUpdate: 0,
            productToUpdate:{
                name: '',
                category: '',
                price: 0,
                stock: 0,
                description: '',
            }
        }
    },
    methods:{
         async search(){
            let searchString=$("#searchBar").val();
            this.searchString=searchString;
            await axios.get(this.$parent.serverHost+"/discount/search/"+searchString)
                            .then(res => this.discountCodes=res.data);   
        },
        setIndexToDelete(index){
            this.itemIndexToDelete = index;
        },
        addCode(){
            const formInputs=$('#addCodeForm input');
            let inputs={};
            formInputs.each((id,input) => inputs[input.name]=input.value);
            axios.post(this.$parent.serverHost+"/discount/create", inputs);
            $('#insertCode').modal('hide');
        },
        deleteCode(){
            let code=this.discountCodes[this.itemIndexToDelete];
            this.discountCodes.splice(this.itemIndexToDelete, 1);
            axios.delete(this.$parent.serverHost+"/discount/delete/"+code._id);
        }
    }
}
</script>