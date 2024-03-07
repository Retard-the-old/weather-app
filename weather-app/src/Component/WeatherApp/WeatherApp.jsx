import React from 'react'
import './WeatherApp.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";

const WeatherApp = () => {

    let api_key ='15c73e9dfda0ff1cd80ae2cabf634e7f';

    const search= async ()=> {
        const element =document.getElementsByClassName('cityInput')
        if(element[0].value==="")
        {
            return 0;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;

        let response=await fetch(url);
        let data= await response.json();

        const humidity = document.getElementsByClassName("humidity_percentage");
        const wind = document.getElementsByClassName("wind_speed");
        const temperature = document.getElementsByClassName("weather_temp");
        const location = document.getElementsByClassName("weather_location");

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }


  return (
    <div className='container'>
        <div className="top_bar">
           <input type='text' className='cityInput' placeholder='Search'/>
           <div className="search_icon" onClick={()=>{search()}}>
            <img src={search_icon} alt=''/>
           </div>
        </div>
        <div className="weather_image">
            <img src={cloud_icon} alt="" />
        </div>
        <div className="weather_temp">24°c</div>
        <div className="weather_location">London</div>
        <div className="data_container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity_percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="wind_speed">15km/h</div>
                    <div className="text">Wind Speed(k/h)</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherApp
