<script>
    export default {
        name: 'AppHeader'
    }
</script>

<template>

    <header>

        <div class="row">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg/1200px-Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">

            <h1>Yu-Gi-Oh Api</h1>

        </div>

    </header>

</template>

<style lang="scss" scoped>
    @use '../style/partials/variables.scss' as *;

    header {
        background-color: $white;

        .row {
            display: flex;
            align-items: center;
            gap: 10px;
            height: 80px;
            padding-left: 10px;
            padding-right: 10px;

            img {
                max-height: 100%;
            }
        }
    }
</style>