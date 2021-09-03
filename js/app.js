// generated api key
const API_KEY = `77c160db01d141688a685fda96b0eb97`;

const searchTemparature = () => {
    const ctiyName = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ctiyName}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemparature(data))
}

const displayData = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemparature = temparature => {
    displayData('city', temparature.name);
    displayData('temparature', temparature.main.temp);
    displayData('condition', temparature.weather[0].main);
    //set icon respect to weather
    const url = `https://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.setAttribute('src', url);

}