const api = {
  key: "c24c3d671ee1c125a99c6fbe56fedec5",
  base: "https://api.openweathermap.org/data/2.5/",
};

const searchbox = document.querySelector(".search-box");
searchbox.addEventListener("keypress", setQuery);
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}

function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then((weather) => {
      console.log(weather);
      displayResults(weather);
    });
}

// function getResultsAirPollution (weather){
//   fetch(`${api.base}air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}`)
//   .then(weathers => {
//     return weathers.json();
//   })
// }

function displayResults(weather) {
  let city = document.querySelector(".location");
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector(".date");
  date.innerText = dateBuilder(now);

  let temp = document.querySelector(".degree .num");
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  let weather_el = document.getElementById("weatherCondition");
  weather_el.src =
    "http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png";
  //   weather_el.src = "http://openweathermap.org/img/wn/10d@2x.png";
  console.log(weather.weather[0].icon);
  //   let hilow = document.querySelector(".hi-low");
  //   hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
  //     weather.main.temp_max
  //   )}°c`;
  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `<img src="images/icon-umberella.png" alt="" />${weather.main.humidity}%`;

  let windSpeed = document.querySelector(".wind-speed");
  windSpeed.innerHTML = `<img src="images/icon-wind.png" alt="" />${weather.wind.speed}m/s`;

  fetch(
    `${api.base}onecall?lat=${weather.coord.lat}&lon=${weather.coord.lon}&exclude=hourly,minutely&appid=${api.key}`
    // `${api.base}air_pollution?lat=${weather.coord.lat}&lon=${weather.coord.lon}&appid=${api.key}`
  )
    .then((weathers) => {
      return weathers.json();
    })
    .then((weathers) => {
      console.log(weathers);
      displayResults(weathers);
    });
}

// function displayTheResults(air_pollution) {
//   let airQuality = document.querySelector(".airPollution .air-quality")
//   if (
//     0 <= air_pollution.list[0].components.no2 < 50 &&
//     0 <= air_pollution.list[0].components.pm10 < 25
//   ) {
//     airQuality.innerText = "Air Quality: Good"
//   } else if (
//     50 <= air_pollution.list[0].components.no2 < 100 &&
//     25 <= air_pollution.list[0].components.pm10 < 50
//   ) {
//     airQuality.innerText = "Air Quality: Fair"
//   } else if (
//     100 <= air_pollution.list[0].components.no2 < 200 &&
//     50 <= air_pollution.list[0].components.pm10 < 90
//   ) {
//     airQuality.innerText = "Air Quality: Moderate"
//   } else if (
//     200 <= air_pollution.list[0].components.no2 < 400 &&
//     90 <= air_pollution.list[0].components.pm10 < 180
//   ) {
//     airQuality.innerText = "Air Quality: Poor"
//   } else if (
//     air_pollution.list[0].components.no2 >= 400 &&
//     air_pollution.list[0].components.pm10 >= 180
//   ) {
//     airQuality.innerText = "Air Quality: Very Poor"
//   }
// }
// // function displayTheResults (weather, weathers) {
// //   console.log(weather);
// //   console.log(weathers);
// // }

function dateBuilder(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
