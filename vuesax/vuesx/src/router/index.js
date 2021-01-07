import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharactersList from '../views/CharactersList'
import CrCompte from '../views/CrCompte'

Vue.use(VueRouter)

const routes = [
  {
    
    path: '/',
    name: 'Accueil',
    component: Home
  },

  {

    path: '/CharactersList',
    name: 'CharactersList',
    component: CharactersList
  },

  {

    path: '/CrCompte',
    name: 'CrCompte',
    component: CrCompte
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
