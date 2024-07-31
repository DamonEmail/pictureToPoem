import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "picToPoem",
      path: "/",
      component: () =>
        import("~/pages/picToPoem.vue").then((r) => r.default || r),
    },
  ],
};
