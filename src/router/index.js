import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home";
import homeFix from "../views/home-fix";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: homeFix,
  },
  {
    path: "/home-old",
    name: "home-old",
    component: home,
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
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../views/auth/sign-up.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../views/auth/sign-in.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/team/index.vue"),
  },
  {
    path: "/plans",
    name: "plans",
    component: () => import("../views/plans/index.vue"),
    children: [
      {
        path: "",
        name: "plan-list",
        component: () => import("../views/plans/components/list/index.vue"),
      },
      {
        path: "plan/:planId",
        name: "plan",
        component: () => import("../views/plans/components/plan/index.vue"),
      },
      {
        path: "step/:stepId",
        name: "plan-step",
        component: () => import("../views/plans/components/step/index.vue"),
      },
    ],
  },
  {
    path: "/courses",
    name: "courses",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/courses"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
