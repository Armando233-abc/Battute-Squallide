<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Battute Squallide</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-button router-link='/page'>Page</ion-button>
    </ion-content>
  </ion-page>
 
  
</template>


<script lang="js">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
  

  }


}); 
created(){

}
</script>

<<<<<<< HEAD


<style scoped>

</style>
=======
<style scoped></style>
>>>>>>> 8aac4b8817104960e1de18b60d852b862ed1c600
