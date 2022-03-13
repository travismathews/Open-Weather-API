class Weather {
    constructor(city, state) {
        this.apiKey = '8e2aec8d2e76f1c05591688e31b952db';
        this.city = city;
        this.state = state;

    }

    // Fetch Weather from API

    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=imperial`);

        const data = await response.json();

        return data;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}