<script>
import AppCard from './AppCard.vue';

export default {
    name: 'AppContent',
    components: {
        AppCard
    }
}
</script>

<template>

    <div class="container">

        <AppCard />

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
        gap: 5px;
    }

</style>