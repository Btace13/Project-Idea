import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Ideas from "./views/Ideas.vue";
import Dashboard from "./views/Dashboard.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import IdeaForm from "./views/IdeaForm.vue";
import Post from "./views/Post.vue";
import Profile from "./views/Profile.vue";
import ProfileEdit from "./views/ProfileEdit.vue";
import Categories from "./views/Categories.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
      {
      path: "/register",
      name: "register",
      component: Register
    },
      {
      path: "/login",
      name: "login",
      component: Login
    },
      {
          path: "/create",
          name: "createIdea",
          component: IdeaForm
      },
      {
          path: "/profile",
          name: "profile",
          component: Profile
      },
      {
          path: "/categories",
          name: "categories",
          component: Categories
      },
      {
          path: "/edit-profile",
          name: "edit-profile",
          component: ProfileEdit
      },
      {
          path: "/post",
          name: "post",
          component: Post
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
