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
      axios.get(store.UrlApi)
      .then(function (response) {
        store.cardList = response.data.data;
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  },
  created() {
    this.getCards();
  }
}
</script>

<template>

  <AppHeader />

  <main>

    <AppSelect />

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
