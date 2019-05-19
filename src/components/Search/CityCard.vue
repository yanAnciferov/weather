<template>
    <div class="item_wrapper">
        <div class="item_content">
            <div class="location_wrapper">
                <span class="location_name">{{city.name}}, {{city.sys.country}} - </span>
                <span class="location_weather_description">{{city.weather[0].description}}</span>
            </div>
            <div class="temperature_wrapper">
                <div class="temperature_current">{{kelvinToCelsius(city.main.temp)}}°С</div>
                <div class="temperature_diurnal temperature_current">{{content.FROM}} {{kelvinToCelsius(city.main.temp_min)}}°С {{content.TO}} {{kelvinToCelsius(city.main.temp_max)}}°С</div>
                <div class="temperature_wind temperature_current">{{content.WIND}} {{city.wind.speed}} m/s.</div>
                <div class="temperature_clouds temperature_current">{{content.CLOUDS}} {{city.clouds.all}} %</div>
                <div class="temperature_hpa temperature_current">{{city.main.pressure}} {{content.HPA}}</div>
            </div>
            <div class="geolocation_wrapper">
                {{content.GEOLOCATION}}: <a target="_blank" :href="getLinkToGoogleMaps(city.coord)" class="geolocation">[{{city.coord.lat}}, {{city.coord.lon}}] - {{content.OPEN_ON_THE_MAP}}</a>
            </div>
        </div>
        <div v-if="isAddable" class="item_actions">
            <button v-if="!isAdded" class="button_common" @click="$emit('addCity', city)">{{content.ADD}}</button>
            <button v-else class="button_common" @click="$emit('removeCity', city)">{{content.REMOVE}}</button>
        </div>
    </div>
</template>

<script>
import content from "../../content/index";
import consts from "../../consts/index";
const { getGoogleMapUrl, DEGREES } = consts;

export default {
    name: 'CityCard',
    props: {
        city: Object,
        isAdded: Boolean,
        isAddable: Boolean
    },
    methods: {
        kelvinToCelsius(kelvinsTemperature) {
            return (kelvinsTemperature - DEGREES.VALUE_TO_GET_CELCIUS_FROM_KELVIN).toFixed(DEGREES.COUNT_OF_ROUNDED_DIGITS);
        },

        getLinkToGoogleMaps({lat, lon}) {
            return this.getGoogleMapUrl(lat, lon);
        }
    },
    data() {
        return {
            content,
            getGoogleMapUrl
        }
    }
}
</script>

<style lang="scss">
@import '../../styles/common.scss';
@import '../../styles/colors.scss';

.item {
    &_wrapper {
        border: 1px solid $middle_gray;
        background-color: $white;
        padding: 1em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    &_actions {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
}

.location {
    &_name {
        font-size: 1.2em;
        font-weight: bold;
        color: $light_blue;
    }

    &_wrapper {
        display: flex;
        align-items: center;
    }

    &_weather_description {
        margin-left: 0.5em;
        font-style: italic;
        font-weight: 500;
        font-size: 1.1em;
    }
}

.temperature {
    &_current {
        margin-right: .5em;
        margin-bottom: .5em;
        background-color: $gray;
        color: $white;
        border-radius: 10px;
        padding: .2em .8em;
        font-size: .9em;
    }

    &_wrapper {
        display: flex;
        flex-wrap: wrap;
    }

    &_diurnal, &_wind, &_clouds, &_hpa  {
        margin-right: .5em;
        margin-bottom: .5em;
    }
}

.geolocation {
    font-weight: bold;
    color: $light_blue;
    text-decoration: none;
}
</style>

