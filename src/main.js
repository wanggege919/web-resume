import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import 'styles/reset.css'
import '../assets/styles/reset.css';
import '../assets/styles/common.styl';
import '../node_modules/animate.css/animate.min.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
