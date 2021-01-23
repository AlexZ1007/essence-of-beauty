<template>
    <div id="home" class="container-fluid main-comp">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img class="d-block w-100 img-fluid" src="../assets/mac2.png" alt="First slide" width="1200" height="500">
                </div>
                <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../assets/mac3.png" alt="Second slide" width="1200" height="500">
                </div>
                <!-- <div class="carousel-item">
                <img class="d-block w-100 img-fluid" src="../assets/mac4.png" alt="Third slide" width="1200" height="500">
                </div> -->
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
            <h2>Info</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, incidunt, quidem atque voluptates
                 modi magnam similique minima sequi blanditiis amet perferendis numquam fuga sunt quae, dignissimos quia inventore. Debitis, libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur officia asperiores ad aliquid provident temporibus non harum voluptates molestias fuga? At fugiat minus dolorem neque voluptate sequi amet cupiditate eveniet.
            </p>
        </div>

        <div id="topProducts" class="topProducts">
            <h2>Top products</h2>
            <div class="row text-color-white">
                <div class="product col-lg-4 col-md-12 col-sm-12"><div class="row bg-darkPurple pt-3 p-2">
                    <div class="col-md-6 my-auto text-center">
                        <img src="https://via.placeholder.com/90" alt="">
                    </div>
                    <div class="col ">
                        <h4>Product 1</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit </p>
                    </div>
                </div></div>
                <div class="product col-lg-4 col-md-12 col-sm-12"><div class="row bg-darkPurple pt-3 p-2">
                    <div class="col-md-6 my-auto text-center">
                        <img src="https://via.placeholder.com/90" alt="">
                    </div>
                    <div class="col">
                        <h4>Product 2</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit </p>
                    </div>
                </div></div>
                <div class="product col-lg-4 col-md-12 col-sm-12"><div class="row bg-darkPurple pt-3 p-2">
                    <div class="col-md-6 my-auto text-center">
                        <img src="https://via.placeholder.com/90" alt="">
                    </div>
                    <div class="col">
                        <h4>Product 3</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit </p>
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