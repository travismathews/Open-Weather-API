
// Init Storage
const storage = new Storage();
// Get storage location data
const weatherLocation = storage.getLocationData();

// Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Init UI
const ui = new UI();



// Get weather on dom load

document.addEventListener('DOMContentLoaded', fetchWeather);

// Change location event

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;

    weather.changeLocation(city, state);

    // Fetch weather with new location
    fetchWeather();

    // Save to local storage
    storage.setLocationData(city, state);

    // Reset form inputs to blank
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    
})



function fetchWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      ui.paint(results);

    })
    .catch((err) => console.log(err));
}
