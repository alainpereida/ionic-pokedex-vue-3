import { PokemonService } from '../../api/api.service';

import {
    POKEMONS_GET_ALL
} from '../actions.type';

const state = () => ({
    pokemons: [],
    pokemon: {},
});
 
const getters = {
    getPokemons: state => {
        return state.pokemons
    },
    getPokemon: state => {
        return state.pokemon
    },
};
 
const actions = {
  async [POKEMONS_GET_ALL] (context) {
        const response = await PokemonService.getPokemons()
        response.results.forEach(pokemon => {
            pokemon.id = pokemon.url.split('/')
              .filter(function(part) { return !!part }).pop();
              context.state.pokemons.push(pokemon);
          });
        return response
    },
};
 
const mutations = {};
 
export default{
    state,
    getters,
    actions,
    mutations
}