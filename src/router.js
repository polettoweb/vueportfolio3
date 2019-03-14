import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./views/portfolio.vue")
    },
    {
      path: "/portfolio/:path",
      name: "portfolioItem",
      component: () => import(/* webpackChunkName: "portfolioItem" */ "./views/portfolioItem.vue")
    },
    {
      path: "/workshop",
      name: "workshop",
      component: () => import(/* webpackChunkName: "workshop" */ "./views/Workshop.vue")
    }
  ]
});
