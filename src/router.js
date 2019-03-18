import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: "redirect",
      redirect: '404',
    },
    {
      path: '/404',
      name: '404',
      component: Home,
      props: true,
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () =>
        import(/* webpackChunkName: "portfolio" */ "./views/Portfolio.vue")
    },
    {
      path: "/portfolio/:path",
      name: "portfolioItem",
      component: () => import(/* webpackChunkName: "portfolioItem" */ "./views/PortfolioItem.vue")
    },
    {
      path: "/workshop",
      name: "workshop",
      component: () => import(/* webpackChunkName: "workshop" */ "./views/Workshop.vue")
    },
    {
      path: "/resume",
      name: "resume",
      component: () => import(/* webpackChunkName: "resume" */ "./views/Resume.vue")
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue")
    },
    {
      path: "/blog/:slug",
      name: "single",
      component: () => import(/* webpackChunkName: "single" */ "./views/Single.vue")
    }
  ]
});
