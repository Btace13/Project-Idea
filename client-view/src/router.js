import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Ideas from "./views/Ideas.vue";
import Dashboard from "./views/Dashboard.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
      {
        path: "/ideas",
          name: "ideas",
          component: Ideas
      },
      {
        path: "/dashboard",
          name: "dashboard",
          component: Dashboard
      }
  ]
});
