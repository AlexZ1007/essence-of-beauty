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
                    <td colspan="2" id="totalQuantity"><b>0</b></td>
                </tr>
            </tbody>
        </table>
        <div class="row mb-2">
            <div id="addCode" class="input-group mr-auto mb-2">
                <input type="text" class="form-control" placeholder="Add a code" aria-label="Insert a code" id="codeInput">
                <div class="input-group-append" v-on:click="discount()">
                        <span class="input-group-text bg-darkPurple text-white" ><i class="fas fa-plus p-1"></i></span>
                </div>
            </div>
            <button id="cart-buy" class="float-right btn bg-pink text-white" v-on:click="buyProducts()">Buy</button>
        </div>
        <!-- Modal pop-up -->
        <div class="modal fade" id="productBoughtModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content text-white">
                    <div class="modal-header">
                        <button type="button" class="close px-3 p-1" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" class="text-white">&times;</span>
                        </button>
                        </div>
                    <div class="modal-body text-center">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    mounted(){
        $("#app").addClass("m_-45");
        if(localStorage.cart) this.cart=JSON.parse(localStorage.cart);
        this.updateTotalData();
    },
    data: function(){
        return {
            cart: this.$parent.cart,
            discountCode: {discountBy: 0},
            codeApplied: false,
        }
    },
    methods:{
        async buyProducts(){
            // Validate
            if(this.cart.length==0) return 0;
            for(let i=0;i<this.cart.length;i++){
                let cartItem=this.cart[i];
                let product;
                await axios.get(this.$parent.serverHost+"/products/show/"+cartItem._id).then(res=>product=res.data.result[0]);
                console.log(product)
                if(product==undefined){
                    this.deleteProduct(i);
                    continue;
                }
                if(product.stock<cartItem.quantity){ 
                    this.displayModal('bg-danger', '<b>Error!</b> There are only <b>'+product.stock+' '+product.name+'</b> remaining and you have <b>'+cartItem.quantity+'</b> in the cart! Adjust the qunatity to complete your purchase!');
                    return;
                }
                product.stock-=cartItem.quantity
                // Update on db 
                axios.put(this.$parent.serverHost+"/products/update/"+cartItem._id, product);
            }
            
            this.displayModal('bg-darkPurple', 'Products bought successfully!');
            // Reset all variables
            this.cart=[];
            this.$parent.cart=[];
            localStorage.cart=JSON.stringify(this.cart);
            $('#totalPrice b').text('$0.00');
            $('#totalQuantity b').text('0');
            this.discountCode= {discountBy: 0};
            this.codeApplied= false;
        },
        async discount(){
            let codeInputVal=$("#codeInput").val();
            let codes=[];
            await axios.get(this.$parent.serverHost+'/discount/code/'+codeInputVal)
                      .then(res => codes=res.data);

            if(this.codeApplied){ this.printAlert('alert-danger', 'You have already applied a code!'); return 0;}
            else if(codes.length==0){ this.printAlert('alert-danger', 'Invalid code!'); return 0;}
          
            this.discountCode=codes[0];

            let totalPrice=$('#totalPrice b').text(); 
            totalPrice = parseFloat(totalPrice.split('').splice(1).join(''), 2)   // Remove the $ symbol and transform to int
            totalPrice -= (this.discountCode.discountBy/100)*totalPrice;
            $('#totalPrice b').text('$'+totalPrice.toFixed(2)); 

            this.printAlert('alert-success', 'Code applied!');
            this.codeApplied=true;
        },
        updateTotalData(){
            let totalItemsPrice=0;
            let totalItemsQuantity=0;
            for(let i=0;i<this.cart.length;i++){
                totalItemsPrice+=parseFloat(this.cart[i].totalPrice);
                totalItemsQuantity+=parseInt(this.cart[i].quantity);
            }
            totalItemsPrice -= (this.discountCode.discountBy/100)*totalItemsPrice;
            $('#totalPrice').html('<b>$'+totalItemsPrice.toFixed(2)+'</b>');
            $('#totalQuantity').html('<b>'+totalItemsQuantity+'</b>');
            localStorage.cart=JSON.stringify(this.cart);
        },
        deleteProduct(index){
            this.cart.splice(index, 1);
            this.$parent.cart=this.cart;
            this.updateTotalData();
        },
        updateQuantity(index, direction){
            let quantity=parseInt(this.cart[index].quantity)
            if((quantity+direction)<1 || (quantity+direction)>Math.min(999, this.cart[index].max_quantity)) return;
            this.cart[index].quantity= quantity+direction;            
            this.cart[index].totalPrice= (this.cart[index].price*(quantity+direction)).toFixed(2);            
            this.updateTotalData();
        },
        // Helper functions
        displayModal(className, message){
            let modal = $('#productBoughtModal');
            // Remove all bg classes
            $('.modal-content:eq(0)').removeClass('bg-darkPurple').removeClass('bg-danger');
            // // Add class
            $('.modal-content').addClass(className);
            $('.modal-body').html(message);
            modal.modal('show');
        },
        printAlert(type, message){
            $('.alert:eq(0)').remove();
            $('#shop-items').append('<div class="alert alert-dismissible '+type+'">'+
                                        '<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>'+
                                        message+
                                    '</div>')
        },
    }
}
</script>