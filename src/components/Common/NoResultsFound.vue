<template>
    <div class="not-found_wrapper">
        <div class="not-found_message">
            {{message}}
        </div>
        <img class="not-found_image" src="../../assets/not_found.svg" alt="not found">
    </div>
</template>

<script>
export default {
    name: 'NoResultsFound',
    props: ["message"]
}
</script>

<style lang="scss">
@import '../../styles/colors';

.not-found {
    &_wrapper {
        width: 100%;
        text-align: center;
    }

    &_image {
        max-width: 300px;
    }

    &_message {
        font-weight: 500;
        color: $dark_gray;
        font-size: 1.4em;
        margin: 2em 0;
    }
}
</style>
