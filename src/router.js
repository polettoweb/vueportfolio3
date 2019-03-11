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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./views/portfolio.vue")
    },
    {
      path: "/portfolio/:path",
      name: "portfolioItem",
      component: () => import(/* webpackChunkName: "portfolioItem" */ "./views/portfolioItem.vue")
    }
  ]
});
