<template>
    <div class="error-box">{{errorMessage}}</div>
</template>

<script>
export default {
    name: 'ErrorBox',
    props: ['errorMessage']
}
</script>

<style lang="scss">
@import '../../styles/colors';

.error-box {
  padding: 5px 2em;
  text-align: center;
  background-color: $red;
  color: $black;
}
</style>
