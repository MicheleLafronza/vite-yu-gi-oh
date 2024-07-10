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
        <!-- select con emit, per mandare info all'app su quale archetipo stiamo selezionando -->
        <select @change="$emit('filter')" v-model="store.selected">

            <!-- option con un v-for che prende tutto dalla lista degli archetipi che prendiamo dalla API in Appvue -->
            <option disabled value="">Scegli un archetipo</option>
            <option v-for="option in store.options" :value="option.archetype_name">
                {{ option.archetype_name }}
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