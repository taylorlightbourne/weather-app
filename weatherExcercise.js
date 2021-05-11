const api = {
    key: "ac813b93c33296e12a37202012c9b25d",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  // api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
  https://api.openweathermap.org/data/2.5/weather?zip=${inputValue.value},us&appid=${API}
  function getResults (query) {
    fetch(`${api.base}weather?zip=${query}&appid=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  const tempConvert = (kelvin) => {
    const fahrenheit = Math.round(((kelvin-273.15)*1.8)+32);
    return fahrenheit;
  };

  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${tempConvert(weather.main.temp)}<span>°F</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `Low: ${tempConvert(weather.main.temp_min)}°F / High: ${tempConvert(weather.main.temp_max)}°F`;
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;}