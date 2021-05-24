<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-back-button></ion-back-button>
      </ion-toolbar>
    </ion-header>

    <ion-content>
       <ion-searchbar>
 
      </ion-searchbar>
      <ion-title>Coap</ion-title>
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
    IonToolbar 
} from '@ionic/vue';

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
  components: {
        IonContent,
        IonTitle,
        IonBackButton,
        IonPage,
        IonHeader,
    
       
        
        IonSearchbar,
        IonToolbar 

  }
});
</script>
