import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import SocialSharing from "vue-social-sharing"

import firebaseConfig from './config/firebase'
import firebase from "firebase";

Vue.config.productionTip = false;

// Vue.use(SocialSharing);

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  // SocialSharing,
  render: h => h(App)
}).$mount('#app')
