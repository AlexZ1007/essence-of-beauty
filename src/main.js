import Vue from 'vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import router from './router'
import Cloudinary from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { cloudName: 'alx100704' }
})



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
