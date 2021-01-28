<template>
    <div id="shop-items" class="main-comp">
        <h3>My cart</h3>
        
        <table class="table table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col" style="width: 10%"></th>
                    <th scope="col" style="min-width: 200px; width:20%">Name</th>
                    <th scope="col" style="width: 20%">Price</th>
                    <th scope="col" style="width: 10%">Price/unit</th>
                    <th scope="col" style="min-width: 80px; width: 20%">Quantity</th>

                    <th scope="col" style="width: 5%"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product,index) in cart" :key="index">
                    <td><img src="https://via.placeholder.com/64X32" alt=""></td>
                    <th>{{product.name}}</th>
                    <td>${{product.totalPrice}}</td>
                    <td>${{product.price}}</td>
                    <td>{{product.quantity}}<div class="float-right  modifyQuantity">
                        <i class="fas fa-minus mr-2 p-1" v-on:click="updateQuantity(index,-1)"></i>
                        <i class="fas fa-plus p-1" v-on:click="updateQuantity(index,1)"></i>
                    </div></td>
                    <td class="text-center"><i class="far fa-times-circle" v-on:click="deleteProduct(index)"></i></td>
                </tr>
                <tr>
                    <td></td>
                    <td><b>Total price</b></td>
                    <td colspan="2" id="totalPrice"><b>0</b></td>
                    <td colspan="2" id="totalQuantity"><b>5</b></td>
                </tr>
            </tbody>
        </table>
        <div class="row">
            <div id="addCode" class="input-group mr-auto mb-2">
                <input type="text" class="form-control" placeholder="Add code" aria-label="Insert a code" id="codeInput">
                <div class="input-group-append">
                        <span class="input-group-text bg-darkPurple text-white"><i class="fas fa-plus p-1"></i></span>
                </div>
            </div>
            <button id="cart-buy" class="float-right btn bg-pink text-white">Buy</button>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    mounted(){
        $("#app").addClass("m_-45");
        if(localStorage.cart){ console.log(JSON.parse(localStorage.cart)); this.cart=JSON.parse(localStorage.cart); console.log(this.cart)}
        this.updateTotalData();
    },
    data: function(){
        return {
            cart: this.$parent.cart,
        }
    },
    methods:{
        updateTotalData(){
            let totalItemsPrice=0;
            let totalItemsQuantity=0;
            for(let i=0;i<this.cart.length;i++){
                totalItemsPrice+=parseFloat(this.cart[i].totalPrice);
                totalItemsQuantity+=parseInt(this.cart[i].quantity);
            }
            $('#totalPrice').html('<b>'+totalItemsPrice.toFixed(2)+'</b>');
            $('#totalQuantity').html('<b>'+totalItemsQuantity+'</b>');
            localStorage.cart=JSON.stringify(this.cart);
        },
        deleteProduct(index){
            console.log(this.cart.splice(index, 1));
            this.updateTotalData();
        },
        updateQuantity(index, direction){
            let quantity=parseInt(this.cart[index].quantity)
            if((quantity+direction)<1 || (quantity+direction)>999) return;
            this.cart[index].quantity= quantity+direction;            
            this.cart[index].totalPrice= (this.cart[index].price*(quantity+direction)).toFixed(2);            
            this.updateTotalData();
        }
    }
}
</script>