<template>
    <ion-grid>
        <ion-row>
            <ion-col v-for="(pokemon, index) in pokemons" :key="index">
                <ion-card mode="md">
                    <ion-img :src="imageUrl + pokemon.id + '.png'"/>
                    <ion-card-header>
                        <ion-card-title>{{ pokemon.name }}</ion-card-title>
                    </ion-card-header>
                </ion-card>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
import { mapGetters } from 'vuex';
import AppConfig from '../../config/app-config';

export default {
    name: 'ThePokemonsList',
    data() {
        return {
            imageUrl: AppConfig.imageHomeUrl
        }
    },
    computed: {
        ...mapGetters({
            pokemons: "getPokemons",
        })
    }
}
</script>

<style>

</style>