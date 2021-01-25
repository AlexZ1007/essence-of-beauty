<template>
    <div id="shop-items" class="main-comp">
        <h3>My cart</h3>
        
        <table class="table table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col" style="width: 10%"></th>
                    <th scope="col" style="min-width: 200px; width:20%">Name</th>
                    <th scope="col" style="min-width: 80px; width: 20%">Quantity</th>
                    <th scope="col" style="width: 20%">Price</th>
                    <th scope="col" style="width: 5%"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="i in 4" :key="i">
                    <td><img src="https://via.placeholder.com/64X32" alt=""></td>
                    <th>Product {{i}}</th>
                    <td>1 <div class="float-right  modifyQuantity"><i class="fas fa-minus mr-2 p-1"></i><i class="fas fa-plus p-1"></i></div></td>
                    <td>$14,99</td>
                    <td class="text-center"><i class="far fa-times-circle"></i></td>
                </tr>
                <tr>
                    <td></td>
                    <td><b>Total price</b></td>
                    <td>5</td>
                    <td colspan="2"><b>$100</b></td>
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
    },
}
</script>