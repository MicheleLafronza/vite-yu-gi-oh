<script>
import AppCard from './AppCard.vue';
import AppResult from './AppResult.vue';

// import store
import { store } from '../store.js';

export default {
    name: 'AppContent',
    components: {
        AppCard,
        AppResult
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

        <AppResult />

        <div class="flex-cont">
            
            <AppCard v-for="card in store.cardList" :key="card.id" :info="card" />
            
        </div>

        

    </div>

</template>

<style lang="scss" scoped>
    @use '../style/partials/variables.scss' as *;

    .container {
        background-color: $white;
        width: 80%;
        margin: 0 auto;
        padding: 40px;
        

        .flex-cont {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 15px;
        }
        
    }

</style>