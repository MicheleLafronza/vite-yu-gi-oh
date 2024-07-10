<script>
// import store
import { store } from './store.js'
import axios from 'axios';


// import dei componenti
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue';
import AppSelect from './components/AppSelect.vue';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent,
    AppSelect
  },
  data() {
    return {
      store,
      
    }
  },
  methods: {
    getCards(){
      // immettiamo un una variabile l'indirizzo base della API
      let endPoint = store.UrlApi;

      // if nel caso l'utente selezioni un archetipo, che porta a filtrare l'api con i dati che abbiamo
      if (store.selected !== '') {
        endPoint = endPoint+'&'+store.searchPar+'='+store.selected;
      }

      // axios con indirizzo api che ci riporta i dati di tutte le carte
      axios.get(endPoint)
      .then(function (response) {
        store.cardList = response.data.data;
        // console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    },

    // axios con indirizzo api che ci riporta la lista di tutti gli archetipi
    getArchetype(){
      axios.get(store.UrlArchetype)
      .then(function(response){
        console.log(response.data);
        store.options = response.data;
      })
    },
  },
  created() {
    this.getCards();
    this.getArchetype();
  }
}
</script>

<template>

  <AppHeader />

  <main>

    <!-- su questo componente prendo il filter che ho mandato tramite emit dal figlio AppSelect -->
    <AppSelect @filter="getCards()" />

    <AppContent />

  </main>
  
</template>

<style lang="scss">
// utilizzo scss
@use './style/general.scss' as *;
@use './style/partials/variables' as *;

// regole main
main {
  padding-top: 50px;
}
</style>
