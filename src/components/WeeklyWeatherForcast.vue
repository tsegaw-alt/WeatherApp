<script setup>
defineProps({
  sevenDayList: "",
  weatherIconUrl: "",
  newWeek: "",
});
</script>

<template>
  <div class="mx-auto" style="width: 90%">
    <div class="card">
      <div class="card-body">
        <h6 class="card-title">7-Day Forecast</h6>

        <div class="weather-days-detail">
          <span class="weather-days" v-for="(item, index) in sevenDayList">
            {{ item.weeklyDate }}
            <h4>
              <img
                :src="`${weatherIconUrl}${sevenDayList[index].weather[0].icon}.png`"
              />
            </h4>
            <p>{{ item.weather[0].main }}</p>

            <p>{{ item.temp.min }}° / {{ item.temp.min }}°</p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  border: 1px;
  height: 15rem;
  border-radius: 1.75rem;
  flex-direction: column;
  overflow: auto;
  margin: 1rem;
  animation: slideup 1s ease-in-out, fadein 1.25s ease-in-out 0ms 1;
  background: linear-gradient(to bottom, #372865, #000000);
  opacity: 0.7;
  min-width: 20rem;
  margin-left: auto;
  margin-right: auto;
}

.weather-days-detail {
  margin-top: 0rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
  color: white;

  .weather-days {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.img {
  width: 2rem;
  height: 2rem;
}
.card-title {
  color: #ffff;
}

@media only screen and (max-width: 600px) {
  .weather-days-detail {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.2rem;
    color: white;

    .weather-days {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
