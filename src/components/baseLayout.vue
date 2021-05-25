<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
       <ion-searchbar>
 
      </ion-searchbar>
      
    </ion-content>
  </ion-page>
  
</template>

<script lang="js">
import {    
    IonContent,
    IonTitle,
    IonBackButton,
    IonPage,
    IonHeader,
    IonSearchbar,
    IonToolbar,
    IonButtons
} from '@ionic/vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Page',
  props: ['pageTitle'],
  components: {
        IonContent,
        IonTitle,
        IonBackButton,
        IonPage,
        IonHeader,
        IonSearchbar,
        IonToolbar,
        IonButtons
  }
});
</script>
