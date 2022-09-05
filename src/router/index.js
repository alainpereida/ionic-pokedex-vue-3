import { createRouter, createWebHistory } from '@ionic/vue-router';
import PokemonsContainer from '../containers/PokemonsContainer.vue';

const routes = [
  {
    path: '/',
    redirect: '/pokemons'
  },
  {
    path: '/pokemons',
    name: 'Pokemones',
    component: PokemonsContainer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
