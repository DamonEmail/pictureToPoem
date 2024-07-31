export default {
  mode: "history",
  base: "/",
  extendRoutes(routes, resolve) {
    routes.push({
      name: "picToPoem",
      path: "/picToPoem",
      component: resolve(__dirname, "pages/picToPoem.vue"),
    });
  },
};
