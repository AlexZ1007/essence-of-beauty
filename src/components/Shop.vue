<template> 
    <div class="container-fluid main-comp">
        <div class="row m-0  justify-content-center">
            <div class="col-lg-12 col-md-12 col-sm-12  px-4 py-3 mb-2 text-white filters">
                <div class="row">
                    
                    <div class="dropdown col-lg-1 col-md-1 col-sm-12 mr-3">
                        <button class="btn btn-secondary dropdown-toggle pl-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Price <span class="float-right">&#8593;</span></a>
                            <a class="dropdown-item" href="#">Name <span class="float-right">&#8593;</span></a>
                            <a class="dropdown-item" href="#">Rating <span class="float-right">&#8593;</span></a>
                            <a class="dropdown-item" href="#">Price <span class="float-right">&#8595;</span></a>
                            <a class="dropdown-item" href="#">Name <span class="float-right">&#8595;</span></a> 
                            <a class="dropdown-item" href="#">Rating <span class="float-right">&#8595;</span></a>
                        </div>
                    </div>

                    <div class="dropdown col-lg-1 col-md-1 col-sm-12">
                        <button class="btn btn-secondary dropdown-toggle pl-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categories
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Category 1</a>
                            <a class="dropdown-item" href="#">Category 2</a>
                            <a class="dropdown-item" href="#">Category 3</a>
                        </div>
                    </div>

                    <div class="input-group col-lg-3 col-md-5 col-sm-12 ml-auto">
                            <input type="text" class="form-control" placeholder="Search....." aria-label="Search for product" id="searchBar">
                            <div class="input-group-append btn-search">
                                    <span class="input-group-text bg-pink"><i class="fa fa-search"></i></span>
                            </div>
                    </div>
                </div>
                
           </div>

            </div>

            <div class="row justify-content-center m-0 col-lg-12 col-md-12 col-sm-12">
                <div  class="col-lg-3 col-md-5 col-sm-11 shop-item text-center pt-3 p-2 mr-4 my-2 ml-0 text-white bg-darkPurple"
                      v-for="i in 12" :key="i">
                    <div class="col-12 text-center"><img src="https://via.placeholder.com/250X90" class="img-fluid"></div>
                    <div class="info-product col-12 py-3">
                        <h4>Name</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, ea!</p>
                    </div>
                    <div class="buy col-12 mb-3 d-flex align-content-center">
                        <b class="my-auto">$14,99</b>
                        <router-link to="/shop/product/id" class="ml-auto py-1 px-2 bg-pink btn-buy my-auto">Buy now</router-link>
                    </div>
                </div>
            </div>
        
        </div>
        

</template>