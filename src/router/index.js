import store from "@/store";
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/faq",
    name: "faq",
    component: () => import("../views/FaqView.vue"),
  },
  {
    path: "/term",
    name: "term",
    component: () => import("../views/TermsView.vue"),
  },
  {
    path: "/crud",
    name: "crud",
    component: () => import("../views/crud/IndexView.vue"),
  },
  {
    path: "/post",
    name: "post.index",
    component: () => import("../views/crud/IndexView.vue"),
  },
  {
    path: "/create",
    name: "post.create",
    component: () => import("../views/crud/CreateView.vue"),
  },
  {
    path: "/edit/:id",
    name: "post.edit",
    component: () => import("../views/crud/EditView.vue"),
    //props: true
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/registerv",
    name: "registerv",
    component: () => import("../views/auth/RegisterV.vue"),
  },
  {
    path: "/loginv",
    name: "loginv",
    component: () => import("../views/auth/LoginV.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/dashboard/Index.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  //createWebHashHistory
  //http://domain.com/#/register
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

//define route for handle authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    //cek nilai dari getters isLoggedIn di module auth
    if (store.getters["auth/isLoggedIn"]) {
      next();
      return;
    }
    next("/loginv");
  } else {
    next();
  }
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
