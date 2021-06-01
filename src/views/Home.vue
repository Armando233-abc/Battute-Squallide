
<template>

  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Battute Squallide</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-button
          v-for="button in buttons"
          :router-link="`/jokesArea/${button.id}`"
          :key='button.id'
        >
        {{ button.title }}
        </ion-button>

      </ion-list>
    </ion-content>
  </ion-page>
</template>


<style scoped>
@import "../theme/index.css";
</style>

<script lang="js">
import { IonList, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonList,
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  },
  computed: {
    buttons(){
      return this.$store.getters.buttons
    }
  }

});
</script>

<style scoped></style>
