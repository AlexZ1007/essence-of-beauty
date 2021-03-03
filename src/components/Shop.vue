<template> 
    <div class="container-fluid main-comp">
        <div class="row m-0  justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12  px-4 py-3 mb-2 text-white filters">
                <div class="row">
    
                    <div class="dropdown col-lg-1 col-md-1 col-sm-12 mr-3">
                        <button id="filter_dropdown" class="btn btn-secondary dropdown-toggle pl-12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" v-on:click="order('price', 'asc')">Price <span class="float-right">&#8593;</span></a>
                            <a class="dropdown-item" v-on:click="order('name', 'asc')">Name <span class="float-right">&#8593;</span></a>
                            <!-- <a class="dropdown-item" href="#">Rating <span class="float-right">&#8593;</span></a> -->
                            <a class="dropdown-item" v-on:click="order('price', 'des')">Price <span class="float-right">&#8595;</span></a>
                            <a class="dropdown-item" v-on:click="order('name', 'des')">Name <span class="float-right">&#8595;</span></a> 
                            <!-- <a class="dropdown-item" href="#">Rating <span class="float-right">&#8595;</span></a> -->
                        </div>
                    </div>

                    <div class="dropdown col-lg-1 col-md-1 col-sm-12">
                        <button id="categories_dropdown" class="btn btn-secondary dropdown-toggle pl-12" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" v-on:click="filterCat('All')">All</a>
                            <a class="dropdown-item" v-on:click="filterCat('Fata')">Fata</a>
                            <a class="dropdown-item" v-on:click="filterCat('Ochi')">Ochi</a>
                            <a class="dropdown-item" v-on:click="filterCat('Gene')">Gene</a>
                            <a class="dropdown-item" v-on:click="filterCat('Buze')">Buze</a>
                            <a class="dropdown-item" v-on:click="filterCat('Ten')">Ten</a>
                            <a class="dropdown-item" v-on:click="filterCat('Unghii')">Unghii</a>
                            <a class="dropdown-item" v-on:click="filterCat('Sprancene')">Sprancene</a>
                            <a class="dropdown-item" v-on:click="filterCat('Accesorii')">Accesorii</a>
                        </div>
                    </div>

                    <div class="input-group col-lg-3 col-md-5 col-sm-12 ml-auto">
                            <input type="text" class="form-control" placeholder="Search....." aria-label="Search for product" id="searchBar">
                            <div class="input-group-append btn-search" v-on:click="search()">
                                    <span class="input-group-text bg-pink"><i class="fa fa-search"></i></span>
                            </div>
                    </div>
                </div>
           </div>
        </div>
            

            <div id="loading-products" class="mx-auto" hidden="true"></div>
            <div class="row m-0 pageNavigation">
                <button v-on:click="changePage(-1)" class="py-1 px-2 bg-pink btn-buy mb-2">Previous page</button>
                <span class="mx-auto"><b>Page {{pageNum}}</b></span>
                <button v-on:click="changePage(1)"  class=" b-0 py-1 px-2 bg-pink btn-buy my-auto mb-2">Next Page</button>
            </div>
            <div class="row justify-content-center m-0 col-lg-12 col-md-12 col-sm-12">
                <div class="col-lg-3 col-md-5 col-sm-11 shop-item text-center pt-3 p-2 mr-4 my-2 ml-0 text-white bg-darkPurple product"
                      v-for="(product,index) in products"  v-bind:key="index" >
                    <div class="col-12 text-center"><img :src="product.images[0]" alt="" style="max-height: 90px; max-width:250px;" class="img-fluid"></div>
                    <div class="info-product col-12 py-3">
                        <h4>{{product.name}}</h4>
                        <p>{{product.description.substring(0,80)+'...'}}</p>
                    </div>
                    <b class="my-auto float-left mb-2 ml-3">  {{(product.stars/product.numOfRatings).toFixed(2)}} <i class="fas fa-star pl-0"></i></b>

                    <div class="buy col-12 d-flex align-content-center mb-2"> 
                        <b class="my-auto">${{product.price}}</b>
                        <router-link :to="'/shop/product/'+product._id" class="ml-auto py-1 px-2 bg-pink btn-buy my-auto">Buy now</router-link>
                    </div>
                </div>
            </div>
            <div class="text-center"><span class="text-danger" id="noProductFound"></span></div>
        </div>
        

</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    data: function(){
        return{
            products: this.$parent.products,
            sortBy: 'none',
            sortDir: 0,
            filterBy: 'All',
            searchString: '',
            pageNum: 1,
        }
    },
    async mounted(){
        if(this.$parent.products.length==0) {
            $('#loading-products').removeAttr('hidden');
            this.products= await axios.get(this.$parent.serverHost+"/products/"+this.pageNum+"/12/"+this.filterBy+"/"+this.sortDir+"/"+this.sortBy+"/"+this.searchString).then( res => res.data.results);
            $('#loading-products').hide();
        }
    },
    methods:{
        // ***********
        // Filter functions
        // ***********
        async order(orderBy, direction){
            if(orderBy=='') return;
            this.sortBy=orderBy;
            this.sortDir=direction;

            let modifier=1;
            let textArrow='&#8593;';

            if(direction=="des"){ modifier=-1; textArrow='&#8595;'}

            this.pageNum=1;        // reset page nume
            console.log(this.$parent.serverHost+"/products/"+this.pageNum+"/12/"+this.filterBy+"/"+modifier+"/"+this.sortBy+"/"+this.searchString);
            this.products= await axios.get(this.$parent.serverHost+"/products/"+this.pageNum+"/12/"+this.filterBy+"/"+modifier+"/"+this.sortBy+"/"+this.searchString)
                                          .then(res => res.data.results);
           
            
            let filterText=orderBy[0].toUpperCase()+orderBy.split('').splice(1).join('');
            $('#filter_dropdown').html(filterText+' '+textArrow);
            this.checkForProductFound();
        },
        async filterCat(category){
            // Save the filter settings
            this.filterBy=category;
            // $("#searchBar").val('');

            let sortDir=0;
            if(this.sortDir=='asc') sortDir='1'; 
            else if(this.sortDir=='des') sortDir='-1'; 
            
            this.pageNum=1;
            this.products= await axios.get(this.$parent.serverHost+"/products/"+this.pageNum+"/12/"+this.filterBy+"/"+sortDir+"/"+this.sortBy+"/"+this.searchString)
                                          .then(res => res.data.results);
            
            $('#categories_dropdown').text(category);
            this.checkForProductFound();
        },
        async search(){
            let searchString=$("#searchBar").val();
            this.searchString=searchString;
            this.pageNum=1;        // reset page nume
            let sortDir=0;
            if(this.sortDir=='asc') sortDir='1'; 
            else if(this.sortDir=='des') sortDir='-1'; 
            this.products= await axios.get(this.$parent.serverHost+"/products/"+this.pageNum+"/12/"+this.filterBy+"/"+sortDir+"/"+this.sortBy+"/"+searchString)
                                          .then(res => res.data.results);            
            this.checkForProductFound();
        },
        
        // ***********
        // Pagination
        // int dir 1 || -1
        // ***********
        async changePage(dir){
            this.checkForProductFound();

            let tempPageNum=this.pageNum+dir;
            if(tempPageNum<1) return 0;

            let category=this.filterBy;

            let sortDir;
            
            if(this.sortDir=='asc') sortDir='1'; 
            else if(this.sortDir=='des') sortDir='-1'; 
            else sortDir=0;
            
            
            let tempProducts = await axios.get(this.$parent.serverHost+"/products/"+tempPageNum+"/12/"+category+"/"+sortDir+"/"+this.sortBy+"/"+this.searchString)
                                          .then(res => res.data.results);
            

            if(tempProducts.length==0) return 0; // this.pageNum is the last page

            this.products=tempProducts;
            // this.$parent.products=this.products;
            this.pageNum=tempPageNum;
        },

        // ***********
        // Useful function
        // ***********
        checkForProductFound(){
            if(this.products.length==0) $('#noProductFound').text('No products found!');
            else  $('#noProductFound').text('');
        },
    },
}
</script>