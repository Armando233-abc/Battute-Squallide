<template>

  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons>
            <ion-back-button default-href="/home"></ion-back-button>
        </ion-buttons>

        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-searchbar 
        animated
        placeholder="Inserisci parole chivi"
        debounce="500"
        @input="getData($event)"
      ></ion-searchbar>
      
      <ion-list>
          <ion-item v-for="(battuta, i) in listaBattute" :key="i">
            {{ battuta }}
          </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>

</template>

<script lang="js">
import jsonData from '../jokes/jokes.json'
import {    
    IonContent,
    IonTitle,
    IonBackButton,
    IonPage,
    IonHeader,
    IonSearchbar,
    IonToolbar,
    IonButtons,
    IonList,
    IonItem

} from '@ionic/vue';

import { defineComponent} from 'vue';


export default defineComponent({
  name: 'Page',
  props: ['pageTitle'],
  data(){
    return {
      listaBattute: [],
      x: this.pageTitle
    }
  },
  components: {
        IonContent,
        IonTitle,
        IonBackButton,
        IonPage,
        IonHeader,
        IonSearchbar,
        IonToolbar,
        IonButtons,
        IonList,
        IonItem
  },
  methods: {
    getData($event){
      const xJsonData = [...new Set(jsonData[this.x])]
      $event.target.value === '' ? this.listaBattute = [] : this.listaBattute = xJsonData.filter(battuta => battuta.includes($event.target.value))
    } 
  }
  
});
</script>
