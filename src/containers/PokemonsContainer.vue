<template>
  <ion-page>
    <ion-content>
      <!-- <ion-header>
        <ion-toolbar>
          <ion-title size="large">Pokedex</ion-title>
        </ion-toolbar>
      </ion-header> -->

      <the-pokemons-list />
    </ion-content>
  </ion-page>
</template>

<script>
import { alertController } from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import ThePokemonsList from '../components/the-pokemons-list/ThePokemonsList.vue';
import { POKEMONS_GET_ALL } from '../redux/actions.type';


export default defineComponent({
  name: 'PokemonContainer',
 async mounted() {
    await this.getPokemons()
  },
  components: { ThePokemonsList },
  methods: {
    ...mapActions({
      getPokemons: POKEMONS_GET_ALL
    }),
    async presentAlert() {
      const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Important message',
        message: 'This is an alert!',
        buttons: ['OK'],
      });

      await alert.present();

    },
  },
});
</script>