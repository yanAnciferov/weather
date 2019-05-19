<template>
    <div class="list-wrapper">
        <div class="list">
            <div class="city-card_wrapper" :key="city.id" v-for="city in cities">
                <CityCard
                    :isAddable="true"
                    :city="city"
                    @addCity="$emit('addCity', city)"
                    @removeCity="$emit('removeCity', city)"
                    :isAdded="selectedCitiesIds.includes(city.id)"/>
            </div>
        </div>
    </div>
</template>

<script>
import CityCard from "./CityCard";

export default {
    name: 'CitiesList',
    props: {
        cities: Array,
        selectedCitiesIds: Array
    },
    components: {
        CityCard
    }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';

.city-card_wrapper {
    margin-bottom: 1em;
}
</style>

