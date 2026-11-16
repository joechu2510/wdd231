const lat = -12.0432;
const lon = -76.9641;
const apiKey = "6333e9a748e33b5395c972ef40e397d7";

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const currentWeatherContainer = document.querySelector("#current-weather");
const weatherForecastContainer = document.querySelector("#weather-forecast");

async function apiFetch() {
  try {
    const responseCurrent = await fetch(currentWeatherUrl);
    if (responseCurrent.ok) {
      const dataCurrent = await responseCurrent.json();
      displayCurrentWeather(dataCurrent);
    } else {
      throw Error(await responseCurrent.text());
    }

    const responseForecast = await fetch(forecastUrl);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
      displayForecast(dataForecast);
    } else {
      throw Error(await responseForecast.text());
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

function displayCurrentWeather(data) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const iconCode = data.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

  const capitalizedDesc = desc.charAt(0).toUpperCase() + desc.slice(1);

  currentWeatherContainer.innerHTML = `
        <div class="current-main">
            <img src="${iconSrc}" alt="${desc}">
            <span class="temp">${temp}&deg;C</span>
        </div>
        <p class="desc">${capitalizedDesc}</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
}

function displayForecast(data) {
  const filteredForecast = data.list
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 3);

  let forecastHTML = '<h3>3-Day Forecast</h3><div class="forecast-grid">';

  filteredForecast.forEach((day) => {
    const date = new Date(day.dt * 1000);
    const options = { weekday: "short" };
    const dayName = date.toLocaleDateString("en-US", options);
    const temp = Math.round(day.main.temp);
    const iconCode = day.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

    forecastHTML += `
            <div class="forecast-day">
                <p><strong>${dayName}</strong></p>
                <img src="${iconSrc}" alt="${day.weather[0].description}">
                <p>${temp}&deg;C</p>
            </div>
        `;
  });

  forecastHTML += "</div>";
  weatherForecastContainer.innerHTML = forecastHTML;
}
apiFetch();
