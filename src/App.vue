<script>
// import dei componenti
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<template>

  <AppHeader />

  <main>

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
