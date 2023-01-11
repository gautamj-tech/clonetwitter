import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Profile from "../views/Profile.vue";
import Followings from "../views/Followings.vue";
import Followers from "../views/Followers.vue";

Vue.use(VueRouter);

// const auth = (to, from, next) => {

// }

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    redirect: "/home",
  },

  {
    path: "/:profileName",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/:profileName/followings",
    name: "Followings",
    component: Followings,
  },
  {
    path: "/:profileName/followers",
    name: "Followers",
    component: Followers,
  },
  {
    path: "/i/flow/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/i/flow/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let isAuthenticated = localStorage.getItem("token");

  if (
    isAuthenticated === "false" &&
    to.name !== "Login" &&
    to.name !== "Signup"
  ) {
    next({ name: "Login" });
  } else if (
    isAuthenticated === "true" &&
    (to.name == "Login" || to.name == "Signup")
  ) {
    next({ name: "Home" });
  } else {
    next();
  }
});
export default router;
