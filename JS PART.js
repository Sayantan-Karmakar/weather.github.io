document.querySelector(".weather_output").style.display="none";

const weatherApi={
    key:"371a3e7278f911b9e2db45594199d1d9",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather"
}

//to get the city name
const searchCity=document.getElementById("city");
searchCity.addEventListener("keypress", function (e) {
        if (e.keyCode == 13) {
            console.log(searchCity.value);
            getWeatherUpdate(searchCity.value);
            document.querySelector(".weather_output").style.display="block";
        }
    });

//get weather update
function getWeatherUpdate(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    })
    .then(showWeatherUpdate); 
}

//show weather update
function showWeatherUpdate(weather){
    console.log(weather);
    let location=document.querySelector('.loca');
    location.innerHTML=`${weather.name}, ${weather.sys.country}`;
    let temperature=document.querySelector('.temp');
    temperature.innerHTML=`Temperature: ${Math.round(weather.main.temp)}&degC`;
    let humidity=document.querySelector(".humid");
    humidity.innerHTML=`Humidity: ${weather.main.humidity}%`;
    let weatherInfo=document.querySelector('.wea');
    weatherInfo.innerHTML=`${weather.weather[0].main}`;
    
}