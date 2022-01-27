import VueRouter from "vue-router"
import Game from "../components/game"
import Home from "../pages/home"
export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/game",
      component: Game,
    },
  ],
})
