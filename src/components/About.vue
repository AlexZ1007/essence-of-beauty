<template>
    <div class="container-fluid main-comp">
        <div class="history">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <h2>Our Origins</h2>
                    <p class="fs-info">
                    Essence of Beauty is a trendsetting online store, offering our first-rate products and exceptional customer service to shoppers from the comfort of their own homes. We’re a business made up of innovators and forward-thinkers, with the drive and wherewithal to constantly update and improve the online shopping experience.
                    <br>
                    <br>
                    Our online store has become synonymous with quality, and we ensure a continuous variety of fantastic merchandise that fit any budget. Check it out and start shopping today.
                    </p>
                   
                </div>    
                <div class="col-lg-5 col-md-12  my-auto text-center">
                    <img src="../assets/aboutPic.jpg" alt="" class="img-fluid">
                </div>    
            </div>
        </div>
        
        <div id="faq">
            <h2 class="mb-3">FAQ</h2>
            <div class="grid-faq text-color-white mx-0">
            
                <div class="bg-darkPurple p-3">
                    <b><p>Do you offer gift cards?</p></b>   
                    <p>Yes, we offer gift cards because our purpose is for everyone to be able to enjoy our high-quality products!</p>
                </div>

                <div class="bg-darkPurple p-3">
                    <b><p>What are the payment options?</p></b>   
                    <p>At the moment, we made sure that the customers can pay by any type of card or cash on delivery! For further information, please contact our information service or leave a mail at essence.of.beauty.facial@gmail.com!</p>
                </div>

                <div class="bg-darkPurple  p-3">
                    <b><p>Are the products vegan and cruelty free?</p></b>   
                    <p>We can assure you that all of our products are both vegan and cruelty free!</p>
                </div>

            </div>
        </div>

        <div id="contact">
            <h2>Contact Us</h2>
            <div class="socialMedia">
                <a href="https://www.instagram.com/essence.of.beauty2/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
            <form action="mailto:essence.of.beauty.facial@gmail.com">
                <div class="form-group">
                    <label for="" class="form-label">Name: </label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Email: </label>
                    <input type="text" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="" class="form-label">Message: </label>
                    <textarea id="contact-message" type="text" class="form-control" rows="5" required></textarea>
                </div>
                <button type="" class="btn btn-purple text-color-white">Send</button>
            </form>
        </div>


    </div>    
</template>

<script>
export default {
    
}
</script>