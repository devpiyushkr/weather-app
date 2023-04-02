
        const apiKey="f970ced62a00a07416398e0f54baf276"
        const url="https://api.openweathermap.org/data/2.5/weather?&appid=f970ced62a00a07416398e0f54baf276&units=metric&q=";
        const input=document.querySelector(".search input");
        const Btn=document.querySelector(".search button");
        const cloud=document.querySelector(".cloudImage");
        //
        const cityName=document.querySelector(".city");
        const temp= document.querySelector(".temp");
        const humid=document.querySelector(".humidity");
        const wind= document.querySelector(".wind");
       //
        async function checkWeather(city){
            const response=await fetch(url+city);

            const data=await response.json();
            console.log(data);
            if(response.status===404){
                cityName.innerText="invalid city name"
                cityName.style.fontWeight="500";
                humid.innerText="0%"
                wind.innerText="0km/h"
                temp.innerText="0°c"
                cloud.src="img/clouds.png";
            }
            else{
            cityName.innerHTML=data.name;
            temp.innerText=Math.round(data.main.temp)+"°c";
            humid.innerText=data.main.humidity+"%"
            wind.innerText=data.wind.speed+" km/h";
            }
          if(data.weather[0].main="Haze"){
          cloud.src="img/haze.png";
          }
          else  if(data.weather[0].main="Clear"){
          cloud.src="img/Clear.png";
          }
          else  if(data.weather[0].main="Clouds"){
          cloud.src="img/cloudy.png";
          }
          else  if(data.weather[0].main="Smoke"){
          cloud.src="img/smoke.png";
          }
          else  if(data.weather[0].main="Snow"){
          cloud.src="img/snow.png";
          }
          else  if(data.weather[0].main="Rain"){
          cloud.src="img/rain.png";
          }
          else  if(data.weather[0].main="Snow"){
          cloud.src="img/snow.png";
          }

        }
        Btn.addEventListener("click",()=>{
            checkWeather(input.value);
            input.value="";
        })
      
    