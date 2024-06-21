var apiKey="0c57e8b52d7d06a6e66665a2ad2fe48b";

var weatherEl=document.querySelector(".data");
var inputEl=document.getElementById("city");
var cityVal;
var formEl=document.querySelector("form");
formEl.addEventListener("submit",function(event){
    event.preventDefault();
    cityVal=inputEl.value;
    getWeather(cityVal);
})

async function getWeather(){
    try {
        var response=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityVal+"&appid="+apiKey+"&units=metric");

        if(!response.ok){
            throw new Error("Failed to fetch data");
        }
        
        var data= await response.json();
        console.log(data);
        var temp=Math.round(data.main.temp);
        var desc=data.weather[0].description;
        var feels=Math.round(data.main.feels_like);
        var humidity=data.main.humidity;
        var wind=data.wind.speed;
        var icon=data.weather[0].icon;
        
        weatherEl.querySelector(".weatherImg").src= "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        weatherEl.querySelector(".temp").innerHTML=temp+"°C";
        weatherEl.querySelector(".det").innerHTML=desc;
        weatherEl.querySelector(".subData").querySelector(".feels").innerHTML="Feels like "+feels+"°C";
        weatherEl.querySelector(".subData").querySelector(".humid").innerHTML="Humidity: "+humidity+"%";
        weatherEl.querySelector(".subData").querySelector(".wind").innerHTML="Wind Speed: "+wind+"km/h";



    } catch (error) {
        alert("Error! Please enter a valid city.");   
    }
}