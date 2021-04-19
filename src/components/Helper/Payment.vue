<template>
    <div class="buyOptions">
        <div class="cash">
           <i class="fas fa-money-bill-alt select" v-on:click="changeBg($event)"></i>
        </div>
            <i class="fab fa-cc-paypal select"  v-on:click="changeBg($event)"></i>
            <i class="fab fa-cc-apple-pay select"  v-on:click="changeBg($event)"></i>
            <i class="fab fa-cc-visa select"  v-on:click="changeBg($event)"></i>
            <i class="fab fa-cc-mastercard select" v-on:click="changeBg($event)"></i>
        <button  class="btn bg-pink text-white proceed" v-on:click="proceed()">Proceed</button>
        <span class="text-danger"></span>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    methods:{
        data:function(){
            return {
                selected: 0,
            }
        },
        changeBg(event){
            $('.buyOptions i').each(element => {
                $('.buyOptions i')[element].style.color='white';
            });
            event.target.style.color='pink'
            this.selected=true;
        },
        proceed(){
            if(this.selected) $('#productBoughtModal').modal('hide');
            else $('span.text-danger').html('Select a payment method!');
        }
    }
}
</script>