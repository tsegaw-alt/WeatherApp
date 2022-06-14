<script setup>
import { Icon } from "@iconify/vue";
import { formatTime } from "../_helper/helper";

defineProps({
  countryName: "",
  weatherIconUrl: "",
  weatherIcon: "",
  currentTemp: "",
  weatherType: "",
  tempMax: "",
  tempMin: "",
  detailDailyWeather: "",
});
</script>

<template>
  <div class="mx-auto" style="width: 19rem">
    <div class="card" style="width: 19rem">
      <div class="card-body">
        <h5 class="card-title text-center">{{ countryName }}</h5>

        <div class="d-flex flex-column text-center mt-5 mb-">
          <h1 class="icon">
            <img :src="`${weatherIconUrl}${weatherIcon}.png`" />
          </h1>
          <h2 class="display-6 mb-0 font-weight-bold">{{ currentTemp }} °c</h2>
        </div>

        <div class="d-flex align-items-center">
          <div class="flex-grow-1" style="font-size: 1rem">
            <div>
              <div class="max-temp">
                <h1></h1>
                <Icon
                  class="max-temp-icon"
                  icon="akar-icons:circle-chevron-up-fill"
                />
                <span> {{ tempMax }} </span>
              </div>

              <div class="min-temp">
                <Icon
                  class="min-temp-icon"
                  icon="ant-design:down-circle-filled"
                />
                <span> {{ tempMin }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        data-bs-toggle="modal"
        class="detail-view"
        data-bs-target="#staticBackdrop"
        >See more...</a
      >
    </div>
  </div>

  <!-- Button trigger modal -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" style="opacity: 1">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Weather Detail of {{ countryName }}</h5>

          <a href="#" class="btn-icon" data-bs-dismiss="modal">
            <h3>X</h3>
          </a>
        </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Sunset
            <span class="detail-info">{{
              formatTime(detailDailyWeather.sunset)
            }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Sunrise
            <span class="detail-info">{{
              formatTime(detailDailyWeather.sunrise)
            }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Pressure
            <span class="detail-info"
              >{{ detailDailyWeather.pressure }} hPa
            </span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            Humidity
            <span class="detail-info">{{ detailDailyWeather.humidity }} %</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  margin-top: -5rem;
  width: 6rem;
  height: 6rem;
}

.card {
  display: flex;
  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);
  justify-items: center;
  padding: 1rem;
  height: 24rem;
  cursor: pointer;
  background: linear-gradient(to bottom, #372865, #000000);
  color: white;
  border-radius: 1.75rem;
  animation: slideup 1s ease-in-out, fadein 1.25s ease-in-out 0ms 1;
  margin-top: 0rem;
  opacity: 0.7;
}

.max-temp-icon {
  color: red;
  font-size: 3rem;
  padding-right: 1rem;
}

.min-temp-icon {
  color: green;
  font-size: 3rem;
  padding-right: 1rem;
}

.max-temp {
  float: left;
  margin-top: 1.8rem;
}

.min-temp {
  float: right;
  margin-top: 2.2rem;
}

.modal-content {
  background: linear-gradient(to bottom, #372865, #000000);
}

.btn-icon {
  color: #ffff;
  text-decoration: none;
}

.list-group {
  background: linear-gradient(to bottom, #372865, #000000);
  opacity: 0.7;
}

.list-group-item {
  color: #ffff;
  opacity: 0.7;
  opacity: 0.7;
  background: linear-gradient(to bottom, #372865, #000000);
}

.detail-view {
  text-align: left;
  color: #ffff;
  text-decoration: none;
}

.detail-info {
  text-align: right;
}

h5 {
  color: #ffff;
}
@media only screen and (max-width: 600px) {

  .card {
   height: 20rem;
  }
}
</style>
