import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faCartShopping, faRightLong, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { faAmazon, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faCartShopping, faAmazon, faApple, faRightLong, faLeftLong);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
