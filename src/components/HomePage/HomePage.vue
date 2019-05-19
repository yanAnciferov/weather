<template>
  <div class="home_wrapper">
    <div class="section-title_wrapper">
      <SectionTitle :text="content.WEATHER_IN_YOUR_CITY_TITLE"/>
    </div>
    <div v-if="getUserCityPandingState" class="loader_wrapper">
      <Loader />
    </div>
    <CityCard v-else-if="getUserCity" :city="getUserCity"/>
    <div class="section-title_wrapper">
      <SectionTitle :text="content.YOUR_SELECTED_CITIES"/>
    </div>
    <div v-if="getUserSelectedCitiesPendingState" class="loader_wrapper">
      <Loader />
    </div>
    <CitiesList 
      v-else-if="getUserSelectedCities.length"
      :selectedCitiesIds="getUserSelectedCitiesIds" 
      :cities="getUserSelectedCities"
      @removeCity="removeCity"
      @addCity="addCity"/>
    <NoResultsFound v-else :message="content.YOUVE_NOT_ADDED_ANY_CITIES" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import SectionTitle from './SectionTitle';
import CityCard from '../Search/CityCard';
import CitiesList from '../Search/CitiesList';
import Loader from '../Common/Loader';
import NoResultsFound from '../Common/NoResultsFound';
import content from '../../content/index';


export default {
    name: 'HomePage',
    components: {
      SectionTitle,
      CityCard,
      Loader,
      CitiesList,
      NoResultsFound
    },
    computed: {
      ...mapGetters([
        'getUserSelectedCitiesIds',
        'getUserCityPandingState',
        'getUserCity',
        'getUsetCitiesIds',
        'getUserSelectedCities',
        'getUserSelectedCitiesPendingState'
      ])
    },
    methods: {
      ...mapActions([
        'getUserCityWeather',
        'getUserSelectedCitiesWeather',
        'removeCityId',
        'resetUserCitiesStore',
        'addCityId']),
      removeCity(event) {
        this.removeCityId(event.id);
      },
      addCity(event) {
        this.addCityId(event.id);
      },
    },
    created() {
      this.getUserCityWeather();
      this.getUserSelectedCitiesWeather();
    },
    beforeDestroy() {
      this.resetUserCitiesStore();
    },
    data() {
      return {
        content
      }
    }
}
</script>

<style lang='scss'>
.home_wrapper {
  padding-top: .5em;
}

.section-title_wrapper {
  margin-top: 1em;
  margin-bottom: 2em;
}

.loader_wrapper {
  margin-top: 4em;
  display: flex;
  justify-content: center;
}
</style>
