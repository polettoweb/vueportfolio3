import Vue from "vue";
import Vuex from 'vuex'
import VueMq from "vue-mq";
import Meta from 'vue-meta'
import SequentialEntrance from 'vue-sequential-entrance'

import App from "./App.vue";
import router from "./router";
// import store from "./store";
import storeConfig from './store/store-config'
import "./registerServiceWorker";

Vue.use(Vuex)

const store = new Vuex.Store(storeConfig)

Vue.config.productionTip = false;

Vue.use(SequentialEntrance);

Vue.use(VueMq, {
  breakpoints: {
    sm: 1024,
    md: 1025
  },
  defaultBreakpoint: "md" // customize this for SSR
});
Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
