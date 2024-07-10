<script>
// import store
import { store } from '../store.js';

export default {
    name: 'AppSelect',
    data(){
        return {
            store
        }
    }
}

</script>

<template>

    <div class="container">
        <select v-model="store.selected">
            <option disabled value="">Scegli un archetipo</option>
            <option v-for="option in store.options" :value="option">
                {{ option }}
            </option>
        </select>
    </div>

</template>

<style lang="scss" scoped>
.container {
    width: 80%;
    margin: 0 auto;
    padding-left: 10px;
    padding-bottom: 10px;

    select {
        padding: 10px;
        font-size: 1.2rem;
    }
}

</style>