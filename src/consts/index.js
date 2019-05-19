const OPEN_WEATHER_MAP_API_URL = 'https://api.openweathermap.org/data/2.5';

export default {
    OPEN_WEATHER_MAP_API: {
        FIND: `${OPEN_WEATHER_MAP_API_URL}/find`,
        WEATHER: `${OPEN_WEATHER_MAP_API_URL}/weather`,
        GROUP: `${OPEN_WEATHER_MAP_API_URL}/group`,
        APP_ID: 'ea24ba045ad708914cfb1d9dba81ae71'
    },
    IP_API: 'http://ip-api.com/json',
    ERROR_SIGNATURES: {
        NETWORK_ERROR: 'Network Error',
        UNKNOWN_ERROR: 'Unknown Error'
    },
    URLS: {
        HOME: '/home',
        SEARCH: '/search'
    },
    DEGREES: {
        VALUE_TO_GET_CELCIUS_FROM_KELVIN: 273.15,
        COUNT_OF_ROUNDED_DIGITS: 1
    },
    getGoogleMapUrl(lat, lon) {
        return `https://www.google.com.ua/maps/@${lat},${lon},12z`;
    }
}