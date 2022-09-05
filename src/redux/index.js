import { createStore } from 'vuex';
import pokemons from './modules/pokemons';

const store = createStore({
    modules:{
        pokemons: pokemons
    }
});

export default store;