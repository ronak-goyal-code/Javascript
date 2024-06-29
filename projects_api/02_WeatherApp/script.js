const inputBox = document.querySelector(".input-box");
const searchBtn = document.querySelector("#searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

const location_not_found = document.querySelector(".location-not-found");
const weather_body = document.querySelector(".weather-body");

async function checkWeather(city){
    const api_key = "72053cac99a12f65901105e0a2436e42";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    
    if(data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none"
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";

    temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}<sup>°C</sup>`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind_speed.innerHTML = `${data.wind.speed}km/hr`;

    switch(data.weather[0].main){
        case 'Clouds':
            weather_img.src = "/02_WeatherApp/assets/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "/02_WeatherApp/assets/clear.png";
            break;
        case 'Rain':
            weather_img.src = "/02_WeatherApp/assets/rain.png";
            break;
        case 'Mist':
            weather_img.src = "/02_WeatherApp/assets/mist.png";
            break;
        case 'Snow':
            weather_img.src = "/02_WeatherApp/assets/snow.png";
            break;
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
});