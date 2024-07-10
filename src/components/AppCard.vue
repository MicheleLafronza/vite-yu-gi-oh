<script>
export default {
    name: 'AppCard',
    props: {
        info: Object,
    }
}

</script>

<template>

    <div class="card">

        <!-- immagine della carta -->
        <img :src="info.card_images[0].image_url_small" :alt="info.name">

        <!-- nome della carta -->
        <div class="card-name">
            {{ info.name }}
        </div>

        <!-- tipo della carta -->
        <div class="card-race">
            {{ info.archetype }}
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    background-color: $primary;
    flex-basis: calc(20% - 15px);

    img {
        max-width: 100%;
    }

    .card-name {
        font-size: 1.1rem;
        text-align: center;
        color: $white;
        margin-top: 5px;
        margin-bottom: 10px;
    }

    .card-race {
        text-align: center;
        padding: 5px;
    }
}


</style>