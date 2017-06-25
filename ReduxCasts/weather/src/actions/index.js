import axios from "axios";

const API_KEY = "6a78596d062df78380eff5944c4e5567";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// We use a constant for our action type is because we can import this file at reducer_weather.js
// It cut down on the ability for us to make typos if as if were using pure string.
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // It return a promise, It hasn't retirve out data yet!

  // redux-promise(middleware) will handle this return call if payload = promise object
  // If payload==promise, then redux-promise will stop the process until the aJax call has finished
  // once finished it will send the data to the payload property
  // and send the action to "all reducers" in our application.
  // Benifit: we don't needa think about the asynchronous nature of our code!!!!
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
