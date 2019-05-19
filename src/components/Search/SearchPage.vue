<template>
    <div>
        <SearchField v-model="searchString" @submit="sendRequset"/>
        <CitiesList 
            v-if="citiesList.length"
            @addCity="addCity"
            @removeCity="removeCity"
            :cities="citiesList" 
            :selectedCitiesIds="selectedCitiesIds" />
        <NoResultsFound v-if="!citiesList.length && !isPending" :message='getErrorMessage'/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import CitiesList from "./CitiesList.vue";
import SearchField from "./SearchField.vue";
import NoResultsFound from "../Common/NoResultsFound";
import content from "../../content/index";

export default {
    name: 'SearchPage',
    components: {
        CitiesList,
        SearchField,
        NoResultsFound
    },
    methods:{
        ...mapActions(['getCitiesRequestByQueryString', 'resetCitiesStore', 'addCityId', 'selectedUse', 'removeCityId']),
        sendRequset() {
            this.getCitiesRequestByQueryString(this.searchString);
        },
        addCity(event) {
            this.addCityId(event.id);
        },
        removeCity(event) {
            this.removeCityId(event.id);
        }
    },
    computed: {
        ...mapGetters({
            citiesList: 'getFoundCities',
            previusQueryString: 'getPreviusQueryString',
            selectedCitiesIds: 'getUserSelectedCitiesIds',
            isPending: 'getPendingState'
        }),
        getErrorMessage() {
            return this.previusQueryString === '' ? 
            this.content.WRITE_TO_SEARCH :
            this.content.COUDNT_FIND;
        }
    },
    beforeDestroy() {
        this.resetCitiesStore();
    },
    data () {
        return {
            searchString: '',
            content
        }
    }
}
</script>

<style lang="scss">
</style>
