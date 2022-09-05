import store from '@/redux';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { IonicVue, isPlatform } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';

/* Theme variables */
import axios from 'axios';
import VueAxios from 'vue-axios';
import ApiService from './api/api.service';
import './theme/variables.css';

// Api Service (VueAxios)
ApiService.init();

const app = createApp(App)
  .use(IonicVue, {
    animated: !isPlatform('mobileweb'),
  })
  .use(router)
  .use(VueAxios, axios)
  .use(store);

router.isReady().then(() => {
  app.mount('#app');
});