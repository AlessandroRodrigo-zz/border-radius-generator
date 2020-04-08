import Vue from 'vue';
import VueSnackbar from 'vue-snack';
import 'vue-snack/dist/vue-snack.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaste, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faPaste, faRedo);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueSnackbar, { position: 'bottom', time: 1500, close: true });

new Vue({
  render: (h) => h(App),
}).$mount('#app');
