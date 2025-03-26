const apiKey="2bc01c64c3eda86ddd2d24d29c0341e5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
    async function checkWeather(city){
        const response=await fetch(`${apiUrl}${city}&appid=${apiKey}`);
        if(response.status==404){

            document.querySelector(".error").style.display="block";
            document.querySelector(".weather").style.display="none";
            document.querySelector(".city").style.display="none";
            document.querySelector(".details").style.display = "none";
            return;
        }  
        
            const data=await response.json();
            const weatherCondition=data.weather[0].main.toLowerCase();
            console.log("Weather Condition:",weatherCondition);
       
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";

        
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="images/clouds.png";

        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }    
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        } 
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        } 
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        } 
        document.querySelector(".weather").style.display="block";
        document.querySelector(".city").style.display="block";
        document.querySelector(".details").style.display="flex";
        document.querySelector(".error").style.display="none";
    }
        document.querySelector(".weather").style.display="none";
        document.querySelector(".city").style.display="none";
        document.querySelector(".details").style.display="none";
        document.querySelector(".error").style.display="none";

        
        
    searchBtn.addEventListener("click",()=>{
        const city=searchBox.value.trim();
        if(city){
            checkWeather(city);
        }
    });
    