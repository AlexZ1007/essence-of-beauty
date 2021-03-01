<template>
    <div  class="container-fluid main-comp">
        <h4>Register</h4>
        <form  v-on:submit="register()" v-on:submit.prevent id="register">
            <div class="form-group">
                <label for="fullName" class="form-label">Full Name:</label>
                <input type="text" id="fullName" name="fullName" class="form-control" required>
            </div>    
            <div class="form-group">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" name="email" class="form-control" required>
            </div>     
            <div class="form-group">
                <label for="password" class="form-label">Password:</label>
                <input type="password" id="password" name="password" class="form-control" minlength="8" required>
            </div>
            <div class="form-group">
                <label for="adress" class="form-label">Adress:</label>
                <input type="text" id="adress" name="adress" class="form-control" required>
            </div>         
            <button type="submit" class="btn btn-purple text-color-white">Register</button>    
        </form>
        
    </div>
</template>
<script>
import $ from 'jquery'
import axios from 'axios'
export default {
    mounted(){
        if(this.$parent.loggedIn) this.$router.push("/");
        $("#app").addClass("m_-45");
    },
    methods:{
        register(){
            const formInputs=$('#register input');
            let inputs={};
            formInputs.each((id,input) => inputs[input.name]=input.value);
            axios.post(this.$parent.serverHost+'/register', inputs).then((res)=>{
                // Error handeling
                $(".alert").remove();
                $(".main-comp:eq(0)").append("<div class='alert alert-dismissible alert-corner text-color-white alert-"+res.data.status 
                    +"'>"+res.data.message+"<button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button></div>")
                if(res.data.status=='error'){
                    return;
                }
                // Registered successfully
                delete inputs.password;
                this.$parent.loggedIn=true;
                this.$parent.loggedInUser=inputs;
                this.$router.push("/");
            });
        }
    }
}
</script>