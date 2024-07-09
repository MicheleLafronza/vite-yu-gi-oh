<script>
import AppCard from './AppCard.vue';

// import store
import { store } from '../store.js';

export default {
    name: 'AppContent',
    components: {
        AppCard
    },
    data(){
        return {
            store
        }
    }
}
</script>

<template>

    <div class="container">

        <AppCard v-for="card in store.cardList" :key="card.id" :info="card" />

    </div>

</template>

<style lang="scss" scoped>
    @use '../style/partials/variables.scss' as *;

    .container {
        background-color: $white;
        width: 80%;
        margin: 0 auto;
        padding: 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;
    }

</style>