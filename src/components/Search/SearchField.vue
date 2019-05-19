<template>
    <form v-on:submit.prevent="$emit('submit', $event)">
        <div class="input-wrapper">
            <input
                class="input"
                :placeholder="content.LETS_FIND_YOUR_PLACE"
                v-bind:value='value' v-on:input='$emit("input", $event.target.value)'
            /> 
        </div>
    </form>
</template>

<script>
import content from "../../content/index";

export default {
    name: 'SearchField',
    props: ['value'],
    data() {
        return {
            content
        }
    }
}
</script>

<style lang='scss'>
@import '../../styles/colors';

.input-wrapper {
    border: 1px solid $middle_gray;
    background-color: $white;
    padding: 1em;
    margin: 1em 0;
}

.input {
    width: 100%;
    outline: none;
    border-bottom: 1px solid $middle_gray;
    font-size: 1.2em;
}
</style>
