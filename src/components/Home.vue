<template>
    <div id="home" class="container-fluid main-comp">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 img-fluid" src="../assets/carousel1.jpg" alt="First slide" width="1200" height="500">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="../assets/carousel2.jpg" alt="Second slide" width="1200" height="500">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="../assets/carousel3.jpg" alt="Second slide" width="1200" height="500">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 img-fluid" src="../assets/carousel4.jpg" alt="Second slide" width="1200" height="500">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="info">
            <h2>The Story</h2>
            <p class="fs-info">
                Essence of Beauty is a well-renowned online store that has continually featured a variety of high-quality and affordable products since day one.
                <br>
                <br>
                Our passion for excellence has driven us from the beginning, and continues to drive us into the future. The team at Essence of Beauty knows that every product counts, and strives to make the entire shopping experience as rewarding and fun as possible. Check out our store and special offers, and get in touch with questions or requests.
            </p>
        </div>

        <div id="topProducts" class="topProducts">
            <h2>Top products</h2>
            <div class="row text-color-white">
                <div class="product col-lg-12 col-md-12 col-sm-12 mb-2"  
                    v-for="product in $parent.topProducts" :key="product._id">

                <div class="row bg-darkPurple pt-3 p-2">
                    <div class="col-md-3 my-auto text-center" >
                        <img :src="product.images[0]" height="90px" width="90px" style="max-height:90px; max-width:90px;">
                    </div>
                    <div class="col-md-9">
                        <h4>{{product.name}}</h4>
                        <p>{{product.description.substring(0,140)+'...'}} </p>
                        <div class="buy col-12 d-flex align-content-center mb-2 pl-0">
                            <b class="my-auto mr-2">${{product.price}}</b>
                            <b class="my-auto ml-auto">  {{(product.stars/product.numOfRatings).toFixed(2)}} <i class="fas fa-star pl-0"></i></b>
                            <router-link :to="'/shop/product/'+product._id" class=" py-1 px-2 bg-pink btn-buy my-auto">Buy now</router-link>
                        </div>
                    </div>
                </div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>