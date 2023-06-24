import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../pages/index.vue";
import ProductDetails from "../components/ProductDetails"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
{
  path: '/product-details',
  name: 'product-details',
  component: ProductDetails
}
];

const router = new VueRouter({
  routes,
});

export default router;
