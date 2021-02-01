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
                            <a class="dropdown-item" v-on:click="filterCat('All', $parent.products)">All</a>
                            <a class="dropdown-item" v-on:click="filterCat('Produse fata', $parent.products)">Produse fata</a>
                            <a class="dropdown-item" v-on:click="filterCat('Farduri', $parent.products)">Farduri</a>
                            <a class="dropdown-item" v-on:click="filterCat('Accesorii', $parent.products)">Accesorii</a>
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

            <div class="row justify-content-center m-0 col-lg-12 col-md-12 col-sm-12">
                <div class="col-lg-3 col-md-5 col-sm-11 shop-item text-center pt-3 p-2 mr-4 my-2 ml-0 text-white bg-darkPurple"
                      v-for="(product,index) in products"  v-bind:key="index" >
                    <div class="col-12 text-center"><img src="https://via.placeholder.com/250X90" class="img-fluid"></div>
                    <div class="info-product col-12 py-3">
                        <h4>{{product.name}}</h4>
                        <p>{{product.description}}</p>
                    </div>
                    <div class="buy col-12 d-flex align-content-center mt-auto">
                        <b class="my-auto">${{product.price}}</b>
                        <router-link :to="'/shop/product/'+product.id" class="ml-auto py-1 px-2 bg-pink btn-buy my-auto">Buy now</router-link>
                    </div>
                </div>
            </div>
            <div class="text-center"><span class="text-danger" id="noProductFound"></span></div>
        </div>
        

</template>

<script>
import $ from 'jquery'
export default {
    data: function(){
        return{
            products: this.$parent.products,
            sortBy: '',
            sortDir: '',
            filterBy: 'All',
        }
    },
    methods:{
        order(orderBy, direction){
            if(orderBy=='') return;
            $("#searchBar").val('');
            // Save the filter settings
            this.sortBy=orderBy;
            this.sortDir=direction;

            let modifier=1;
            let textArrow='&#8593;';

            if(direction=="des"){ modifier=-1; textArrow='&#8595;'}
                this.products.sort((p1, p2)=>{
                    if(p1[orderBy]<p2[orderBy]){ return -1*modifier }
                    if(p1[orderBy]>p2[orderBy]){ return 1*modifier }
                    return 0;
            });
            let filterText=orderBy[0].toUpperCase()+orderBy.split('').splice(1).join('');
            $('#filter_dropdown').html(filterText+' '+textArrow);
            this.checkForProductFound();
        },
        filterCat(category, arrayToFilter){
            // Save the filter settings
            this.filterBy=category;
            $("#searchBar").val('');

            if(category!='All') this.products=arrayToFilter.filter(p => {
                if(p['category']==category) return 1;
            });
            else this.products=arrayToFilter;
            $('#categories_dropdown').text(category);
            this.checkForProductFound();
        },
        search(){
            let searchString=$("#searchBar").val().toUpperCase();
            this.products = this.$parent.products.filter(p =>{ if(p['name'].toUpperCase().includes(searchString)){ return 1}});
            this.checkForProductFound();
            // Filter the found products with the filter settings
            this.order(this.sortBy, this.sortDir);
            this.filterCat(this.filterBy, this.products);
        },
        checkForProductFound(){
            if(this.products.length==0) $('#noProductFound').text('No products found!');
            else  $('#noProductFound').text('');
        },
    },
}
</script>