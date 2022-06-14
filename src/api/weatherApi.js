import api from './api'
const URLS = {
  fetchWeathersUrl: ''
}
const appId = "&appid=3bf24f3b6aa6d185ba1180ee06440cb2";
const weatherApi = "https://api.openweathermap.org/data/2.5/onecall?"; 
const unitMetric = "&units=metric";
const fetchGeoCodeApi = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const historyWeatherApi = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?'
import { historyDates } from "../_helper/helper.js";

export const fetchWeather  = async (lat,lon) => {
    try { 
      return await api.get(URLS.fetchWeathersUrl, { baseURL:  `${weatherApi}lat=${lat}&lon=${lon}&exclude=hourly,minutely${appId}${unitMetric}`})
} 
catch (error) {
  console.error(error);
}
}

export const historyWeather = async (lat,lon) =>{
  try{

    const responses = await Promise.all(
      historyDates().map(async date => {
        return await  api.get(URLS.fetchWeathersUrl, { baseURL:  `${historyWeatherApi}lat=${lat}&lon=${lon}&dt=${date}${appId}&only_current={true}${unitMetric}`})
      })
     );
     return responses
  }catch(error){
    console.log(error)
  }
}

export const fetchGeoCode  =  async (name) => {
  try { 
    const coordinate = []
    const geoCodingResult =  await  api.get(URLS.fetchWeathersUrl, { baseURL:  `${fetchGeoCodeApi} ${name}  ${appId}`})
    let lat = geoCodingResult.data[0].lat
    let lon = geoCodingResult.data[0].lon
    coordinate.push(lat,lon,name)
    return coordinate;
    
}
catch (error) {
}
}
