import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sign-in",
      name: "Sign",
      component: () => import("@/views/ViewSign.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("@/views/ViewHome.vue"),
    },
  ],
});

export default router;
