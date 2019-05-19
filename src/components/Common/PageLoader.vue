<template>
    <div class="page-loader_wrapper">
        <Loader />
    </div>
</template>

<script>
import Loader from "./Loader";

export default {
    name: 'PageLoader',
    components: {
        Loader
    }
}
</script>

<style scoped lang="scss">
@import '../../styles/colors';

.page-loader_wrapper {
    background-color: $smoke;
    color: $white;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
</style>
