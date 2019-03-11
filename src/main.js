import Vue from "vue";
import VueMq from "vue-mq";
import Meta from 'vue-meta'
import SequentialEntrance from 'vue-sequential-entrance'

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(SequentialEntrance);

Vue.use(VueMq, {
  breakpoints: {
    sm: 1023,
    md: 1024
  },
  defaultBreakpoint: "md" // customize this for SSR
});
Vue.use(Meta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
