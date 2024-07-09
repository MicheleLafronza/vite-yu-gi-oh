<script>
export default {
    name: 'AppCard'
}

</script>

<template>

    <div class="card">

        <!-- immagine della carta -->
        <img src="https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg" alt="">

        <!-- nome della carta -->
        <div class="card-name">
            LELLO
        </div>

        <!-- tipo della carta -->
        <div class="card-type">
            Umano
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.card {
    background-color: $primary;
    flex-basis: calc(20% - 5px);

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

    .card-type {
        text-align: center;
        padding: 5px;
    }
}


</style>