<template>
 
  <ion-searchbar>

  </ion-searchbar>
 
  
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="js">
import { IonApp, IonRouterOutlet, IonSearchbar,IonToolbar  } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonSearchbar,IonToolbar 
  }
});
</script>