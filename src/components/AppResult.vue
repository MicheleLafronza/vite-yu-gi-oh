<script>

// import store
import { store } from '../store.js';

export default {
    name: 'AppResult',
    data() {
        return {
            store
        }
    },
    computed: {
        cardNum() {
            return store.cardList.length
        }
    }

}

</script>

<template>

    <div class="result">
        Found {{ cardNum }} cards
    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.result {
    background-color: black;
    color: $white;
    padding: 10px;
    font-size: 1.2rem;
}

</style>