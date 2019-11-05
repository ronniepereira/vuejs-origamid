import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Usuario from "@/views/Usuario.vue";
import ProdutosCarregando from "@/components/ProdutosCarregando";
import Produto from "@/components/Produto.vue";

Vue.use(VueRouter);
Vue.component("ProdutosCarregando", ProdutosCarregando);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: Produto,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    props: true
  },
  {
    path: "/usuario",
    name: "usuario",
    component: Usuario
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});

export default router;
