<script setup>
import { ref, onMounted, computed } from "vue";
import { fetchWeather, fetchGeoCode, historyWeather } from "../api/weatherApi";
import CurrentWeather from "../components/CurrentWeather.vue";
import WeatherForcast from "../components/WeeklyWeatherForcast.vue";
import HistoryWeather from "../components/HistoryWeather.vue";
import WeatherBackground from "../components/DynamicBackground.vue";
import { WeatherweeklyDays } from "../_helper/helper";
const cityName = ref("Brussels");
const countryName = ref("");
const currentTemp = ref("");
const historyWeatherData = ref([]);
const weatherError = ref("");
const sevenDayList = ref("");
const tempMax = ref("");
const tempMin = ref("");
const weatherIcon = ref("");
const weatherType = ref("");
const newWeek = ref([]);
const weatherIconUrl = "http://openweathermap.org/img/w/";
const detailDailyWeather = {};
let isLoading = ref(true);

async function getData() {
  try {
    const geoCode = await fetchGeoCode(cityName.value);
    weatherError.value = geoCode;
    const lat = geoCode[0];
    const lon = geoCode[1];
    countryName.value = geoCode[2];
    const CuurentWeatherResponce = await fetchWeather(lat, lon);
    const historyWeatherResponce = await historyWeather(lat, lon);

    isLoading.value = false;

    // current weather Data
    const { current, daily } = CuurentWeatherResponce.data;
    const { temp, weather } = daily[0];
    currentTemp.value = current.temp;
    tempMax.value = temp.max;
    tempMin.value = temp.min;
    weatherIcon.value = weather[0].icon;
    weatherType.value = weather[0].main;

    //detail weather info
    detailDailyWeather.sunrise = current.sunrise;
    detailDailyWeather.sunset = current.sunset;
    detailDailyWeather.pressure = current.pressure;
    detailDailyWeather.humidity = current.humidity;

    //history weather Data
    historyWeatherData.value = historyWeatherResponce;
    sevenDayList.value = daily;

    getWeeklyWeatherList();
    weatherIcon.value = daily.weather.map((element) => element.icon);
  } catch (error) {}
}
function getWeeklyWeatherList() {
  for (var i = 0; i < 7; i++) {
    sevenDayList.value[i].weeklyDate = WeatherweeklyDays()[i];
  }
  sevenDayList.value.pop();
  return sevenDayList.value;
}

const dinamicBackground = computed(() => {
  if (weatherType.value == "Clouds") {
    return "weather-clouds";
  } else if (weatherType.value == "Snow") {
    return "weather-snow";
  } else if (weatherType.value == "Clear") {
    return "weather-clear";
  } else if (weatherType.value == "Rain") {
    return "weather-rain";
  }
});

onMounted(() => {
  getData();
});
</script>

<template>
  <div class="spinner-border" role="status" v-if="isLoading">
    <span class="sr-only">Loading...</span>
  </div>

  <div v-if="!isLoading">
    <div class="alert alert-danger" role="alert" v-if="weatherError == null">
      The City Name You entred is not Correct!
    </div>

    <div>
      <weather-background :weatherType="dinamicBackground" />

      <section>
        <input
          type="text"
          class="form-control"
          placeholder="Search City"
          v-model="cityName"
          @keyup.enter="getData"
          style="color: aliceblue"
        />
      </section>
    </div>

    <div class="row">
      <div class="col">
        <current-weather
          :countryName="countryName"
          :weatherIconUrl="weatherIconUrl"
          :weatherIcon="weatherIcon"
          :currentTemp="currentTemp"
          :weatherType="weatherType"
          :tempMax="tempMax"
          :tempMin="tempMin"
          :detailDailyWeather="detailDailyWeather"
        />
      </div>
    </div>

    <weather-forcast
      :sevenDayList="sevenDayList"
      :weatherIconUrl="weatherIconUrl"
      :newWeek="newWeek"
    />

    <HistoryWeather :historyWeatherData="historyWeatherData"></HistoryWeather>
  </div>

</template>
<style lang="scss" scoped>
.alert-danger {
  text-align: center;
}
.spinner-border {
  margin-left: 50%;
  margin-top: 25rem;
  color: #ffff;
}
</style>
