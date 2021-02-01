<template>
    <div id="product-display" class="main-comp mt-4">
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src="../assets/mac2.png" alt="First slide" width="1200" height="500">
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src="../assets/mac3.png" alt="Second slide" width="1200" height="500">
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
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 p-2 text-center buy-product">
                <h3 class="text-center">{{product.name}}</h3>
                <p class="text-center">${{product.price}}/unit</p>
                <div v-if="product.stock>0" class="text-center">
                    <label for="" class="mr-3">Quantity: </label>
                    <input type="number" class="form-control d-inline w-20" id="quantity" value="1" v-on:input="updateTotalPrice()"><br>
                    <span class="text-danger" id="inputError"></span>
                    <div class="buy col-12 mb-3 d-flex align-content-center mt-3">
                            <p class="my-auto"><b class="">Total price:  ${{totalPrice}}</b></p>
                            <button class="ml-auto py-1 px-2 bg-pink btn text-white btn-buy my-auto" v-on:click="addToCart()">Add to cart</button>
                    </div>
                </div>
                <div v-else class="text-center" id="productOutOfStock">Product out of stock!</div>
                
            </div>    
        </div>  
        <div class="row description">
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi praesentium odit sapiente, laborum odio eos facilis corporis, hic ea nam optio nihil obcaecati ad natus numquam illo. Qui impedit eius asperiores nisi culpa? Dicta esse magni id molestias, architecto, corporis in explicabo dignissimos quos libero alias. Dolorem, mollitia molestias. Alias at est dolor eos deserunt amet temporibus neque molestias quidem, deleniti laudantium quae dignissimos, illo non quaerat, minima ad suscipit.</p>    
        </div>  
    </div> 
</template>

<script>
import $ from 'jquery'
export default {
    props: ['id'],
    data: function(){
        return{
            product: this.$parent.products.find(product => product.id==this.id),
            totalPrice: this.$parent.products[this.id].price,
            cart: this.$parent.cart
        }
    },
    methods:{
        updateTotalPrice(){
            let quantity=$('#quantity').val();
            // Input check
            if(quantity<1 || quantity>Math.min(999, this.product.stock)){
                $('#inputError').text('Input must be between 1 and '+Math.min(999, this.product.stock)); 
                this.inputError=true;
                return;
            } else $('#inputError').text('');
            this.inputError=false;
            this.totalPrice = (this.product.price*quantity).toFixed(2);
        },
        addToCart(){
            let quantity;
            const product=this.product;
            if(this.inputError) {
                this.printAlert('alert-danger', 'There are only '+product.stock+' items remaining! Adjust the quantity!')
                return;
            }
            else quantity=$('#quantity').val();
            this.cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                max_quantity: product.stock,
                totalPrice: (product.price*quantity).toFixed(2),
            });
            this.printAlert('alert-success', 'Product added to cart!')
            localStorage.cart=JSON.stringify(this.cart);
        },
        printAlert(type, message){
            $('.alert:eq(0)').remove();
            $('.buy-product:eq(0)').append('<div class="alert alert-dismissible '+type+'">'+
                                        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                                        message+
                                    '</div>')
        },
    }
}
</script>