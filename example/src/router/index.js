import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import routes from './routes';

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.path === "/login") {
    next();
  } else {
    const token = sessionStorage.getItem("token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  }
});

export default router;
