<script>
export default {
    name: 'AppContent'
}
</script>

<template>

    <div class="container">

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
        align-items: center;
        gap: 5px;
        // debug
        min-height: 300px;
    }

</style>