<template>
    <div class="main-comp container-fluid">
        <dashboard-nav></dashboard-nav>
        <div class="row mb-3 ">
            <div class="input-group col-lg-3 col-md-5 col-sm-12 my-auto">
                <input type="text" class="form-control" placeholder="Search for a product" aria-label="Search for a product" id="searchBar">
                <div class="input-group-append btn-search" v-on:click="search()">
                        <span class="input-group-text bg-pink"><i class="fa fa-search"></i></span>
                </div>
            </div>

            <button class="bg-pink  my-auto  btn text-white btn-buy ml-auto mr-3" data-toggle="modal" data-target="#insertProd">Add a product</button>

        </div>
        
        <table class="table table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Price</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product._id" :id="'prod'+index">
                    <td>{{product.name}}</td>
                    <td>{{product.stock}}</td>
                    <td>${{product.price}}</td>
                    <td class="text-center">
                        <button type="button" class="btn-style-none btn-options" data-toggle="modal" data-target="#deleteProd" v-on:click="setIndexToDelete(index)">
                            <i class="far fa-times-circle"></i>
                        </button>
                        <button type="button" class="btn-style-none btn-options" data-toggle="modal" data-target="#updateProd" v-on:click="setItemToUpdate(index)">
                            <i class="far fa-edit"></i>
                        </button>                        
                    </td>
                </tr>
            </tbody>
        </table>   


        <!-- Modals -->
        <div class="modal fade" id="deleteProd" tabindex="-1" role="dialog" aria-labelledby="deleteProdTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h4>Are you sure you want to delete this product?</h4>
                        <div class="text-center">
                            <button type="button" class="btn btn-secondary m-3" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" v-on:click="deleteProduct()">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>    


        <!-- Create -->
        <div class="modal fade" id="insertProd" tabindex="-1" role="dialog" aria-labelledby="deleteProdTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add a new product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  v-on:submit="addProduct()" v-on:submit.prevent id="addProd">
                            <div class="form-group">
                                <label for="name" class="form-label">Product Name:</label>
                                <input type="text" id="name" name="name" class="form-control" required>
                            </div>    
                            <div class="form-group">
                                <label for="category" class="form-label mr-4">Category:</label>
                                <select class="form-control" id="category" name="category">
                                    <option>Farduri</option>
                                    <option>Accesorii</option>
                                    <option>Produse fata</option>
                                </select>              
                            </div>  
                            <div class="form-group">
                                <label for="price" class="form-label">Price:</label>
                                <input type="number" step="0.01" id="price" name="price" class="form-control" min="0" required>
                            </div>     
                            <div class="form-group">
                                <label for="stock" class="form-label">Stock:</label>
                                <input type="number" id="stock" name="stock" class="form-control" min="0" required>
                            </div>         
                            <div class="form-group">
                                <label for="description" class="form-label">Description:</label>
                                <textarea class="form-control" name="description" id="description" cols="40" rows="4" required></textarea>
                            </div>         
                                   
                            <button type="submit" class="btn btn-purple text-color-white">Add product</button>    
                        </form>
        
                    </div>
                </div>
            </div>
        </div>    


        <!-- Update -->
        <div class="modal fade" id="updateProd" tabindex="-1" role="dialog" aria-labelledby="updateProdTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Update product</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form  v-on:submit="updateProduct()" v-on:submit.prevent id="updateProdForm">
                            <div class="form-group">
                                <label for="name" class="form-label">Product Name:</label>
                                <input type="text" id="updName" name="name" class="form-control" :value="productToUpdate.name" required>
                            </div>    
                            <div class="form-group">
                                <label for="category" class="form-label mr-4">Category:</label>
                                <select class="form-control" id="updCategory" name="category" :value="productToUpdate.category">
                                    <option>Farduri</option>
                                    <option>Accesorii</option>
                                    <option>Produse fata</option>
                                </select>              
                            </div>  
                            <div class="form-group">
                                <label for="price" class="form-label">Price:</label>
                                <input type="number" step="0.01" id="updPrice" name="price" class="form-control" min="0"  :value="productToUpdate.price" required>
                            </div>     
                            <div class="form-group">
                                <label for="stock" class="form-label">Stock:</label>
                                <input type="number" id="updStock" name="stock" class="form-control" min="0" :value="productToUpdate.stock" required>
                            </div>         
                            <div class="form-group">
                                <label for="description" class="form-label">Description:</label>
                                <textarea class="form-control" name="description" id="updDescription" cols="40" rows="4" :value="productToUpdate.description" required></textarea>
                            </div>         
                                   
                            <button type="submit" class="btn btn-purple text-color-white">Update product</button>    
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
        $("#app").addClass("m_-45");
    },
    data(){
        return{
            products: [],
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
            await axios.get(this.$parent.serverHost+"/products/1/99/All/0/none/"+searchString)
                            .then(res => this.products=res.data.results);       
        },
        setIndexToDelete(index){
            this.itemIndexToDelete = index;
        },
        setItemToUpdate(index){
            this.itemIndexToUpdate=index;
            this.productToUpdate = this.products[index];
        },
        addProduct(){
            const formInputs=$('#addProd input');
            let inputs={ category: $('#addProd select option:selected').text(), description: $('#addProd textarea').val() };
            formInputs.each((id,input) => inputs[input.name]=input.value);
            axios.post(this.$parent.serverHost+"/products/create", inputs);
            $('#insertProd').modal('hide');
        },
        updateProduct(){
            const formInputs=$('#updateProdForm input');
            let inputs={ category: $('#updateProdForm select option:selected').text(),
                         description: $('#updateProdForm textarea').val(),
                         numOfRatings: 0,
                         stars: 0, 
                    };

            formInputs.each((id,input) => inputs[input.name]=input.value);
            axios.put(this.$parent.serverHost+"/products/update/"+this.productToUpdate._id, inputs);
            let _id=this.productToUpdate._id;
            this.products[this.itemIndexToUpdate]=inputs;
            this.products[this.itemIndexToUpdate]._id=_id;
            // Update html
            $('#prod'+this.itemIndexToUpdate+' td:eq(0)').text(inputs.name);
            $('#prod'+this.itemIndexToUpdate+' td:eq(1)').text(inputs.stock);
            $('#prod'+this.itemIndexToUpdate+' td:eq(2)').text('$'+inputs.price);
            $('#updateProd').modal('hide');
        },
        deleteProduct(){
            let product=this.products[this.itemIndexToDelete];
            this.products.splice(this.itemIndexToDelete, 1);
            axios.delete(this.$parent.serverHost+"/products/delete/"+product._id);
        }
    }
}
</script>