<template>
  <div>
    >

    <div class="weather-animate" :class="weatherType"></div>
  </div>
</template>

<script setup>
defineProps({
  weatherType: String,
});
</script>

<style lang="less" scoped>
.weather-animate {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-image 2s;
  background-size: cover;
  background-position: center;
  transition-timing-function: ease-in-out;
}

// clear weather
&.weather-clear {
  background-image: url("../assets/images/clear.jpg");

  z-index: -1;
  filter: brightness(100%);
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition-timing-function: ease-in-out;
  overflow: hidden;
}
// cloudy weather
&.weather-clouds {
  background-image: url("../assets/images/clouds.jpg");
  z-index: -1;
  filter: brightness(10%);
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition-timing-function: ease-in-out;
}

// snow weather
&.weather-snow {
  background-image: url("../assets/images/snow.jpg");
  z-index: -1;
  filter: brightness(20%);
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition-timing-function: ease-in-out;
}

// snow weather
&.weather-rain {
  background-image: url("../assets/images/rain.jpg");
  z-index: -1;
  filter: brightness(20%);
  background-size: cover;
  width: 100%;
  height: 100vh;
  transition-timing-function: ease-in-out;
}
</style>
